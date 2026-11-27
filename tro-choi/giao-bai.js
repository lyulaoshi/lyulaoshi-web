// Giao bài về nhà (26/11/2026): thầy cô tạo link ở góc giáo viên, học viên chơi một game rồi gửi MÃ NỘP BÀI.
// File này dùng ở 2 nơi:
//  1) 6 game chơi một mình: nạp sẵn, chỉ BẬT khi link có ?giao=… (chơi bình thường không đổi gì).
//     Game gọi GIAOBAI.xong(kết quả chính, số phụ) khi chơi hết một ván.
//  2) goc-giao-vien/giao-bai/ (lấy GAME, tạo link) và chung/bai-nop.html (trang Thu bài: đọc mã bằng doc).
// Web tĩnh, không máy chủ: mã có chữ số kiểm tra để phát hiện gõ sai / sửa tay, không chống được người rành kỹ thuật.
window.GIAOBAI=(function(){
// v = kết quả chính, x = số phụ; thap: kết quả càng nhỏ càng tốt; it = số từ tối thiểu; dai = từ dài nhất game dùng được
const GAME={
  'lat-the':{t:'Lật thẻ ghép đôi',z:'配对',c:'#B45309',m:'Ghép chữ Hán với pinyin',it:6,dai:3,thap:true,xTruoc:true,kq:(v,x)=>v+' lượt · '+x+' đôi'},   // bàn nhiều đôi hơn xếp trên
  'noi-the':{t:'Nối Pikachu',z:'连连看',c:'#4338CA',m:'Nối chữ với pinyin hoặc nghĩa, có giờ',it:10,kq:(v,x)=>v+' điểm · qua '+x+'/7 ải'},
  'bong-bay':{t:'Săn bóng bay',z:'打气球',c:'#BE185D',m:'Nghe, nhìn pinyin rồi chọn chữ',it:8,dai:3,kq:(v,x)=>v+' điểm · trúng '+x+' quả'},
  'mua-chu':{t:'Mưa chữ Hán',z:'汉字雨',c:'#0E7490',m:'Gõ pinyin trước khi chữ rơi xuống',it:6,kq:(v,x)=>v+' điểm · trúng '+x+' từ'},
  'nho-chu':{t:'Nhớ chữ Hán',z:'记汉字',c:'#6D28D9',m:'Nhớ mặt chữ rồi chọn lại, có trùm',it:8,kq:(v,x)=>v+' điểm · đến ải '+x},
  'viet-chu':{t:'Viết chữ',z:'写汉字',c:'#15803D',m:'Viết đúng nét chữ còn thiếu',it:4,kq:(v,x)=>v+' sao · '+x+' chữ'},
  'thanh-dieu':{t:'Săn thanh điệu',z:'声调',m:'Chọn đúng thanh điệu của từ',it:6,dai:4,kq:(v,x)=>v+' điểm · đúng '+x+' câu'},
  'ran-san-chu':{t:'Rắn săn chữ',z:'贪吃蛇',m:'Ăn đúng chữ theo thứ tự để ghép thành từ',it:6,loc:'tu23',kq:(v,x)=>v+' điểm · ăn '+x+' từ'},
  'bay-chu':{t:'Bẫy chữ giống nhau',z:'找不同',m:'Chọn đúng chữ giữa những chữ na ná',it:4,loc:'nana',kq:(v,x)=>v+' điểm · đúng '+x+' câu'},
  'ghep-bo':{t:'Ghép bộ thủ',z:'部首',m:'Ghép các bộ phận thành chữ',it:4,loc:'bo',kq:(v,x)=>v+' điểm · đúng '+x+' câu'},
  /* ôn mẫu câu theo bài (đề của Vượt ải); cau = chặng cần có trong bài */
  'vuot-ai':{t:'Vượt ải',z:'闯关',m:'Đủ các chặng ôn câu của bài, đánh quái',cau:['sap','hoi','dien','dich']},
  'xep-cau':{t:'Xếp câu',z:'连词成句',m:'Xếp mảnh thành câu đúng trật tự',cau:['sap']},
  'tra-loi':{t:'Trả lời câu hỏi',z:'回答问题',m:'Chọn câu đáp lại đúng',cau:['hoi']},
  'dien-cho':{t:'Điền chỗ trống',z:'选词填空',m:'Chọn từ đúng điền vào câu',cau:['dien']},
  'tim-loi':{t:'Tìm lỗi sai',z:'改错',m:'Tìm và sửa từ dùng sai',cau:['dien']},
  'dich-cau':{t:'Dịch câu',z:'翻译',m:'Dựng câu tiếng Trung từ câu Việt',cau:['dich']}
};
for(const k in GAME)if(GAME[k].cau)GAME[k].kq=(v,x)=>'đúng '+v+' / '+x+' câu';
const b64=o=>btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const un64=s=>JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g,'+').replace(/_/g,'/')))));
function bam(s){let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return h}
const ma4=s=>('000'+(bam(s+'|lyulaoshi')%1679616).toString(36)).slice(-4);
/* mã bài giao: cùng game + bộ từ + tên bài thì cùng mã */
const maBai=(game,bo,ten)=>('00000'+bam(game+'|'+bo+'|'+ten).toString(36)).slice(-6);
const link=(goc,game,bo,ten)=>goc+'/tro-choi/'+game+'/?bo='+encodeURIComponent(bo)+'&giao='+b64([ten]);
/* mã mang theo trò (g) và tên bài (bai) để máy nào đọc cũng xếp hạng đúng */
const maHoa=(aid,ten,v,x,giay,luot,g,bai)=>{const p=b64([aid,ten,v,x,giay,luot,g,bai]);return'LL1.'+p+'.'+ma4(p)};
/* lọc mọi mã trong một đoạn chữ (dán cả đoạn chat) → {ds:[…], hong:số mã sai} */
function doc(chu){const ds=[];let hong=0;
  (String(chu).match(/LL1\.[A-Za-z0-9_-]+\.[a-z0-9]{4}/g)||[]).forEach(m=>{const [,p,k]=m.split('.');
    try{if(ma4(p)!==k)throw 0;const [aid,ten,v,x,giay,luot,g,bai]=un64(p);ds.push({aid:String(aid),ten:String(ten),v:+v,x:+x,giay:+giay,luot:+luot,g:GAME.hasOwnProperty(g)?g:'',bai:String(bai||'')})}catch(e){hong++}});
  return{ds,hong}}
const phut=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
const ra={GAME,maBai,link,maHoa,doc,phut,b64,xong:function(){}};

/* ---------- Phần chạy trong game khi mở bằng link giao bài ---------- */
const u=new URLSearchParams(location.search),g=(location.pathname.match(/tro-choi\/([^/]+)\//)||[])[1];
let bai=null;try{if(u.get('giao')&&GAME[g])bai=String(un64(u.get('giao'))[0]||'').slice(0,60)||'Bài giao'}catch(e){}
if(!bai)return ra;
const aid=maBai(g,u.get('bo')||'',bai),KT='cot-hs-ten';   // khoá "cot-…" không bị bo-tu.js đổi tên theo bộ từ
const lay=k=>{try{return localStorage.getItem(k)||''}catch(e){return''}},ghi=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const el=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
const IC=n=>'<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#'+n+'"></use></svg>';
let t0=0,bo=false,o=null,nutMo=null,hopThe=null;
const st=el('style');st.textContent='.gb-the{margin:12px 0;padding:14px 16px;border-radius:18px;background:var(--card);color:var(--ink);border:3px solid var(--teal,#16949E);display:grid;gap:8px;text-align:left}.gb-the b{font-size:17px}.gb-the label{display:grid;gap:4px;font-size:13.5px;font-weight:700;color:var(--muted)}.gb-the input{font:inherit;font-size:16px;padding:9px 12px;border-radius:12px;border:2px solid var(--line);background:var(--ground);color:var(--ink)}.gb-the input.thieu{border-color:var(--coral)}.gb-the small{color:var(--muted);font-size:13px}.bo-tu a{display:none}.gb-d{width:min(420px,calc(100vw - 24px));max-height:calc(100vh - 24px);border:0;border-radius:24px;padding:20px;background:var(--card);color:var(--ink);text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.4)}.gb-d::backdrop{background:rgba(20,20,35,.6)}.gb-d h2{margin:0 0 4px;font-size:20px}.gb-d p{margin:6px 0;font-size:14.5px;color:var(--muted)}.gb-d .ma{margin:10px 0;padding:10px;border-radius:12px;border:3px dashed var(--ink);font:700 13.5px/1.5 ui-monospace,Menlo,monospace;overflow-wrap:anywhere;user-select:all}.gb-d .hang{display:grid;gap:8px}.gb-n{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;border-radius:14px;padding:12px 18px;font:inherit;font-weight:800;cursor:pointer;background:var(--ground2);color:var(--ink)}.gb-n.chinh{background:var(--teal,#16949E);color:#fff}.gb-mo{position:fixed;z-index:40;right:14px;bottom:14px;box-shadow:0 8px 24px rgba(0,0,0,.3)}';
document.head.append(st);
const manDau=()=>document.getElementById('setup')||document.getElementById('map');
function the(){const setup=manDau();if(!setup||hopThe)return;
  hopThe=el('div','gb-the','<b></b><label>Họ tên của em<input type="text" maxlength="40" autocomplete="name" placeholder="Ví dụ: Nguyễn Minh Anh"></label><small>Chơi hết một ván để nhận mã nộp bài. Thoát giữa chừng thì không tính. Chơi lại được nhiều lần.</small>');
  hopThe.querySelector('b').textContent='Bài giao: '+bai;o=hopThe.querySelector('input');o.value=lay(KT);o.oninput=()=>{ghi(KT,o.value.trim());o.classList.remove('thieu')};
  setup.prepend(hopThe)}
/* chưa gõ tên thì chưa cho bắt đầu; ghi giờ bắt đầu ván; biết khi nào bấm Thoát */
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('button');if(!b)return;
  if(b.id==='quitBtn'){bo=true;setTimeout(()=>bo=false,1500);return}
  if(!['startBtn','againBtn','newBtn','soBtn','soBtn2'].includes(b.id)&&!b.closest('#ais'))return;
  if(o&&!o.value.trim()){e.preventDefault();e.stopImmediatePropagation();const s=manDau(),ov=document.getElementById('over');
    if(s&&s.hidden){s.hidden=false;if(ov)ov.hidden=true}o.classList.add('thieu');o.focus();o.scrollIntoView({block:'center'});return}
  t0=Date.now();if(nutMo)nutMo.remove()},true);
function hien(ma,tom){
  const d=el('dialog','gb-d','<h2>Nộp bài</h2><p></p><p></p><div class="ma"></div><div class="hang"><button type="button" class="gb-n chinh" data-a="chep">'+IC('chep')+'Chép để gửi thầy cô</button>'
    +(navigator.share?'<button type="button" class="gb-n" data-a="gui">'+IC('gui')+'Gửi qua Zalo, Messenger…</button>':'')+'<button type="button" class="gb-n" data-a="dong">Đóng</button></div><p aria-live="polite" data-tb></p>');
  const [p1,p2]=d.querySelectorAll('p');p1.textContent=bai;p2.textContent=tom;d.querySelector('.ma').textContent=ma;
  const tin=(lay(KT)||'Em')+' nộp bài "'+bai+'" ('+GAME[g].t+'): '+tom+'\n'+ma;
  d.onclick=async e=>{const a=(e.target.closest('[data-a]')||{}).dataset;if(!a)return;
    if(a.a==='chep'){let ok=true;try{await navigator.clipboard.writeText(tin)}catch(x){const t=el('textarea');t.value=tin;d.append(t);t.select();ok=document.execCommand('copy');t.remove()}
      d.querySelector('[data-tb]').textContent=ok?'Đã chép. Dán vào nhóm lớp hoặc tin nhắn cho thầy cô.':'Chưa chép được. Em bôi đen mã ở trên rồi chép.'}
    else if(a.a==='gui')navigator.share({text:tin}).catch(()=>{});
    else{d.close();d.remove();if(nutMo)nutMo.remove();nutMo=el('button','gb-n chinh gb-mo',IC('gui')+'Mã nộp bài');nutMo.type='button';nutMo.onclick=()=>{nutMo.remove();hien(ma,tom)};document.body.append(nutMo)}};
  document.body.append(d);d.showModal?d.showModal():d.setAttribute('open','')}
let lanCuoi=0;
ra.xong=function(v,x){
  if(bo||Date.now()-lanCuoi<4000)return;lanCuoi=Date.now();
  const ten=lay(KT)||(o&&o.value.trim())||'Chưa ghi tên',giay=t0?Math.round((Date.now()-t0)/1000):0;
  const k='gb-luot-'+aid,luot=(+lay(k)||0)+1;ghi(k,String(luot));
  const ma=maHoa(aid,ten,Math.round(v)||0,Math.round(x)||0,giay,luot,g,bai),tom=GAME[g].kq(Math.round(v)||0,Math.round(x)||0)+(giay?' · '+phut(giay):'')+' · lượt '+luot;
  setTimeout(()=>hien(ma,tom),1400);   // để game hiện màn kết quả trước
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',the);else the();
return ra;
})();
