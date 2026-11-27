// Góc giáo viên 教师角 — phần dùng chung của các công cụ lấy từ theo bài (Thẻ chớp, Nghe viết, Phiếu tập viết…).
// Cần nạp trước: ../../tu-vung/bai-data.js, ../../tro-choi/vuot-ai/co-de.js, ../gv.js
window.GVT=(function(){
const {$,IC,esc,store,enc,dung}=GV;
const BAI=window.BAI||[],CO=window.VA_CO||{};
const dec=s=>JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g,'+').replace(/_/g,'/')))));
const tim=(sach,bai)=>{const b=BAI.find(x=>x.id===sach),l=b&&b.bai.find(x=>x.id===bai);return l?{b,l}:null};
/* Cùng định dạng "Đang dùng" (khoá gv-dung) mà trang chính ghi */
function baiObj(sach,bai){const c=tim(sach,bai);if(!c)return null;
  return{k:'bai',ten:c.b.vi+' · Bài '+c.l.n+' · '+c.l.w.length+' từ',bo:'bai:'+sach+':'+bai,nw:c.l.w.length,cau:(CO[sach]||[]).includes(c.l.n),sach,bai}}
/* gv-dung → {ten, w:[{z,p,vi,vd}]} */
function tu(d){
  if(d&&d.k==='bai'){const c=tim(d.sach,d.bai);if(c)return{ten:c.b.vi+' · Bài '+c.l.n,w:c.l.w.map(([z,p,vi,vd])=>({z,p,vi:vi||'',vd:vd||null}))}}
  if(d&&d.k==='cot'){try{const o=dec(d.bo.slice(4));return{ten:o.n,w:o.w.map(([z,p,vi])=>({z,p,vi:vi||'',vd:null}))}}catch(e){}}
  return null}

/* Thanh chọn nguồn từ: giáo trình + bài (hoặc bộ từ riêng đang dùng) + bỏ bớt từ. onChange(danh sách đã chọn, tên) */
function nguon(el,onChange){
  let d=dung();if(!tu(d))d=baiObj(BAI[0].id,BAI[0].bai[0].id);
  let bo=new Set(),cur=tu(d);
  el.innerHTML='<div class="pn nguon"><label>Giáo trình<select id="ngS"></select></label><label id="ngBL">Bài<select id="ngB"></select></label>'
   +'<a class="ng-lk" href="../">Bộ từ riêng: chọn ở trang chính</a>'
   +'<details class="ng-tu"><summary id="ngSum"></summary><div class="row" style="margin-top:8px"><button class="btn gh" type="button" id="ngAll">Chọn hết</button><button class="btn gh" type="button" id="ngNone">Bỏ hết</button></div><div class="chips" id="ngC"></div></details></div>';
  const S=$('ngS'),B=$('ngB');
  BAI.forEach(b=>S.add(new Option(b.vi+' · '+b.zh,b.id)));
  const cot=d.k==='cot'?d:null;if(cot)S.add(new Option('Bộ từ của tôi: '+cur.ten,'__cot'),0);
  function fillB(keep){const b=BAI.find(x=>x.id===S.value);$('ngBL').hidden=!b;B.innerHTML='';if(!b)return;
    b.bai.forEach(l=>B.add(new Option('Bài '+l.n+' · '+l.w.length+' từ',l.id)));if(keep&&b.bai.some(l=>l.id===keep))B.value=keep}
  const chon=()=>cur.w.filter((_,i)=>!bo.has(i));
  function dem(){$('ngSum').textContent='Chọn từ: '+chon().length+' / '+cur.w.length;onChange(chon(),cur.ten)}
  function chips(){$('ngC').innerHTML=cur.w.map((x,i)=>'<button type="button" data-i="'+i+'" aria-pressed="'+!bo.has(i)+'" title="'+esc(x.p+' · '+x.vi)+'" lang="zh">'+esc(x.z)+'</button>').join('')}
  function doi(nd){if(!nd)return;d=nd;cur=tu(d);bo=new Set();store.set('gv-dung',d);chips();dem()}
  S.onchange=()=>{if(S.value==='__cot'){$('ngBL').hidden=true;doi(cot);return}fillB();doi(baiObj(S.value,B.value))};
  B.onchange=()=>doi(baiObj(S.value,B.value));
  $('ngC').onclick=e=>{const b=e.target.closest('button');if(!b)return;const i=+b.dataset.i;bo.has(i)?bo.delete(i):bo.add(i);b.setAttribute('aria-pressed',!bo.has(i));dem()};
  $('ngAll').onclick=()=>{bo=new Set();chips();dem()};
  $('ngNone').onclick=()=>{bo=new Set(cur.w.map((_,i)=>i));chips();dem()};
  if(cot){S.value='__cot';$('ngBL').hidden=true}else{S.value=d.sach;fillB(d.bai)}
  GV.hop(S);GV.hop(B);
  chips();dem();
}

/* Nhóm nút chọn một: seg(el,[[giá trị,nhãn]…],đang chọn,khi đổi) */
function seg(el,ds,cur,on){el.innerHTML='';ds.forEach(([v,t])=>{const b=document.createElement('button');b.type='button';b.textContent=t;b.setAttribute('aria-pressed',v===cur);
  b.onclick=()=>{[...el.children].forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');on(v)};el.append(b)})}
const tron=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

/* Toàn màn hình; máy không hỗ trợ (iPhone) thì phủ kín trang bằng lớp .toan */
function toan(el){
  if(document.fullscreenElement){document.exitFullscreen();return}
  if(el.classList.contains('toan')){el.classList.remove('toan');return}
  if(el.requestFullscreen)el.requestFullscreen().catch(()=>el.classList.add('toan'));else el.classList.add('toan')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.toan').forEach(x=>x.classList.remove('toan'))});

/* Thu trang A4 cho vừa màn hình (chỉ khi xem; lúc in trả về cỡ thật bằng CSS) */
/* data-rong = bề rộng trang tính bằng mm (mặc định 200, khổ ngang 287) */
function vuaTrang(wrap){const r=wrap.clientWidth;wrap.querySelectorAll('.trang').forEach(t=>t.style.zoom=Math.min(1,r/((+t.dataset.rong||200)*96/25.4)))}

/* Nét chữ lấy từ hanzi-writer-data (cùng nguồn trò Viết chữ); chỉ gửi đi chính chữ Hán cần vẽ.
   VT đưa toạ độ nét vào khung SVG 1024×1024 */
const khoNet=new Map();
const net=c=>{if(!khoNet.has(c))khoNet.set(c,fetch('https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/'+encodeURIComponent(c)+'.json').then(r=>r.ok?r.json():null).catch(()=>null).then(d=>{if(!d)khoNet.delete(c);return d}));return khoNet.get(c)};
const coNet=c=>khoNet.has(c);
const VT='translate(51.2 51.2) scale(.9) translate(0 900) scale(1 -1)';

/* Mẫu giấy in (CSS ở gv-giay.css), một lựa chọn dùng chung cho mọi công cụ (khoá gv-giay) */
const GIAY={hop:['Hộp quà','#127f88','#7bbfc4'],xua:['Trung Hoa','#a3262b','#d3958c'],hoa:['Hoa đào','#b8436f','#e2a6bb'],don:['Tối giản','#555555','#c9807a']};
function veMau(k){const [,m,n]=GIAY[k];let h='';
  if(k==='hop')h='<rect x="2" y="2" width="30" height="42" rx="5" fill="none" stroke="'+m+'" stroke-width="2"/><rect x="6" y="6" width="22" height="7" rx="3" fill="#cdeeee"/>';
  if(k==='xua')h='<rect x="2.5" y="2.5" width="29" height="41" fill="none" stroke="'+m+'" stroke-width="2"/>'+[[1,1],[26,1],[1,38],[26,38]].map(([x,y])=>'<rect x="'+x+'" y="'+y+'" width="7" height="7" fill="'+m+'"/>').join('')+'<path d="M7 14h20" stroke="#b8860b" stroke-width="1.5"/>';
  if(k==='hoa')h='<rect x="2" y="2" width="30" height="42" rx="6" fill="none" stroke="#eaa9bf" stroke-width="1.8"/><rect x="8" y="7" width="18" height="6" rx="3" fill="#fbdde7"/><circle cx="7" cy="7" r="5" fill="#ee8fae"/><circle cx="27" cy="39" r="5" fill="#ee8fae"/><circle cx="7" cy="7" r="1.6" fill="#ffe27a"/><circle cx="27" cy="39" r="1.6" fill="#ffe27a"/>';
  if(k==='don')h='<path d="M5 11h24" stroke="'+m+'" stroke-width="1.5"/>';
  for(let y=19;y<36;y+=8)for(let x=7;x<24;x+=7)h+='<rect x="'+x+'" y="'+y+'" width="6" height="6" fill="none" stroke="'+n+'" stroke-width=".9"/>';
  return '<svg viewBox="0 0 34 46" aria-hidden="true">'+h+'</svg>'}
/* el = nơi đặt nút, wrap = .xem; trả về {k, chinh, ke}; onChange cùng tham số khi bấm đổi mẫu */
function giay(el,wrap,onChange){let k=store.get('gv-giay');if(!GIAY[k])k='hop';
  const gt=()=>({k,chinh:GIAY[k][1],ke:GIAY[k][2]});
  el.classList.add('giay');el.innerHTML=Object.keys(GIAY).map(x=>'<button type="button" data-g="'+x+'">'+veMau(x)+'<span>'+GIAY[x][0]+'</span></button>').join('');
  const ve=()=>{wrap.dataset.giay=k;el.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.g===k))};
  el.onclick=e=>{const b=e.target.closest('button');if(!b)return;k=b.dataset.g;store.set('gv-giay',k);ve();if(onChange)onChange(gt())};
  ve();return gt()}

return{tu,nguon,seg,tron,toan,vuaTrang,net,coNet,VT,giay};
})();
