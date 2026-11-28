/* Ảnh bảng xếp hạng để gửi cho lớp (28/11/2026) — dùng ở trang Thu bài (bai-nop.html).
   XH.nut(bảng, lay): gắn nút vào khối bài; lay() trả {bai, phu, hang:[{ten, kq, tg}]} đã xếp thứ tự.
   Ảnh vẽ trên canvas ngay trong máy (không gửi đi đâu), luôn có logo + © lyulaoshi.com. Chỉ đưa họ tên, kết quả, thời gian. */
window.XH=(function(){
const RONG=1080,TI=1.5,F='"Be Vietnam Pro",system-ui,sans-serif',HZ='"ZCOOL KuaiLe","KaiTi","Kaiti SC",sans-serif',MUC='#2B2D47',MO='#6C6E88',XANH='#127F88';
const IC=n=>'<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=9dad2f0a#'+n+'"></use></svg>';
const nho=()=>{try{return Object.assign({so:0,tg:true},JSON.parse(localStorage.getItem('nv-xh')||'{}'))}catch(e){return{so:0,tg:true}}};
const luu=o=>{try{localStorage.setItem('nv-xh',JSON.stringify(o))}catch(e){}};
const ngay=()=>{const d=new Date(),h=n=>String(n).padStart(2,'0');return h(d.getDate())+'/'+h(d.getMonth()+1)+'/'+d.getFullYear()};
let logo=null;
function napLogo(){if(logo)return Promise.resolve(logo);return new Promise(r=>{const i=new Image();i.onload=()=>r(logo=i);i.onerror=()=>r(null);i.src='/img/logo-hallo-128.png'})}
async function napChu(chu){if(!document.fonts||!document.fonts.load)return;
  await Promise.race([Promise.all(['600','700','800'].map(w=>document.fonts.load(w+' 40px "Be Vietnam Pro"',chu)).concat(document.fonts.load('400 40px "ZCOOL KuaiLe"','吕老师汉语盒排行榜加油'))).catch(()=>{}),new Promise(r=>setTimeout(r,2500))])}

/* ---------- vẽ ---------- */
function ve(cv,d,o){
  const ds=o.so?d.hang.slice(0,o.so):d.hang,dau=ds.slice(0,3),sau=ds.slice(3);
  const c=cv.getContext('2d');
  const font=(s,w,f)=>c.font=(w||700)+' '+s+'px '+(f||F);
  const hop=(x,y,w,h,r,mau)=>{c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();c.fillStyle=mau;c.fill()};
  /* chữ vừa bề rộng: thu cỡ dần, vẫn dài thì cắt bằng … */
  const vua=(t,rong,s,min,w)=>{t=String(t);font(s,w);while(s>min&&c.measureText(t).width>rong){s--;font(s,w)}
    if(c.measureText(t).width>rong){const a=[...t];while(a.length>1&&c.measureText(a.join('')+'…').width>rong)a.pop();t=a.join('')+'…'}return t};
  /* chia tối đa n dòng theo khoảng trắng */
  const dong=(t,rong,n)=>{const tu=String(t).trim().split(/\s+/),ra=[''];for(const w of tu){const thu=ra[ra.length-1]?ra[ra.length-1]+' '+w:w;
      if(c.measureText(thu).width<=rong||!ra[ra.length-1])ra[ra.length-1]=thu;else if(ra.length<n)ra.push(w);else ra[ra.length-1]=thu}return ra};
  const chu=(t,x,y,mau,can)=>{c.fillStyle=mau;c.textAlign=can||'left';c.fillText(t,x,y)};
  font(38,800);const tenBai=dong(d.bai,RONG-112,2);
  const COT=[[1,56,318,196,'#C9D2E0','#EDF1F7'],[0,381,318,262,'#F5C242','#FFF4D2'],[2,706,318,150,'#E5A06A','#FCEBDD']];   // hạng 2 — hạng 1 — hạng 3
  /* bục cao vừa đủ cho chữ đứng trên nó */
  const caoBuc=Math.max(0,...COT.map(([i,,rong,h])=>{const r=dau[i];if(!r)return 0;font(34,800);return h+34+(String(r.kq).split(' · ').length+(o.tg&&r.tg?1:0))*31+dong(r.ten,rong-12,2).length*42+(i?16:72)})),caoHang=88,yBai=258,yPhu=yBai+tenBai.length*50+2,yBuc=yPhu+36,ySau=yBuc+caoBuc+(sau.length?22:0),cao=ySau+sau.length*caoHang+168;
  cv.width=RONG*TI;cv.height=cao*TI;c.setTransform(TI,0,0,TI,0,0);c.textBaseline='alphabetic';
  const nen=c.createLinearGradient(0,0,RONG,cao);nen.addColorStop(0,'#FFF0E8');nen.addColorStop(.5,'#F8F5FB');nen.addColorStop(1,'#E3EFFC');c.fillStyle=nen;c.fillRect(0,0,RONG,cao);
  /* khối tên */
  if(logo)c.drawImage(logo,52,36,86,86);
  font(40,400,HZ);chu('吕老师',150,82,'#E0545F');chu('汉语盒',150+c.measureText('吕老师').width,82,'#3B87D6');font(15,700);chu('LYU LAOSHI CHINESE BOX',152,110,'#8486A0');
  font(18,700);chu(ngay(),RONG-56,84,MO,'right');
  font(64,800);chu('Bảng xếp hạng',56,194,MUC);const w=c.measureText('Bảng xếp hạng').width;font(56,400,HZ);chu('排行榜',56+w+22,194,'#E0545F');
  font(38,800);tenBai.forEach((t,i)=>chu(vua(t,RONG-112,38,26,800),56,yBai+i*50,XANH));
  chu(vua(d.phu,RONG-112,25,18,600),56,yPhu,MO);
  /* bục; chỉ có hai bạn thì dồn vào giữa */
  const day=yBuc+caoBuc,lech=dau.length===2?163:0;
  COT.forEach(([i,x0,rong,h,mau,nhat])=>{const r=dau[i];if(!r)return;const x=x0+lech,top=day-h,giua=x+rong/2;
    hop(x,top,rong,h,26,mau);hop(x+8,top+8,rong-16,h-16,20,nhat);
    font(i?66:92,800);chu(String(i+1),giua,top+h/2+(i?24:32),i===0?'#B77F0A':i===1?'#66758F':'#A8602A','center');
    /* chữ phía trên bục */
    const phu=String(r.kq).split(' · ').concat(o.tg&&r.tg?[r.tg]:[]);
    let y=top-18;font(22,600);
    for(let k=phu.length-1;k>=0;k--){chu(vua(phu[k],rong-8,22,15,600),giua,y,MO,'center');y-=31}
    font(34,800);const ten=dong(r.ten,rong-12,2);y-=8;
    for(let k=ten.length-1;k>=0;k--){chu(vua(ten[k],rong-6,34,20,800),giua,y,MUC,'center');y-=42}
    if(i===0&&window.LLI&&LLI.ve){LLI.ve(c,'vuong-mien',giua,y-14,62,'#E8A917')}});
  /* từ hạng 4 */
  sau.forEach((r,i)=>{const y=ySau+i*caoHang;hop(56,y,RONG-112,76,22,'#FFFFFF');
    hop(72,y+14,48,48,16,'#E4F5F5');font(24,800);chu(String(i+4),96,y+47,XANH,'center');
    const tg=o.tg&&r.tg?r.tg:'',phai=RONG-80;let hetKq=phai;
    if(tg){font(24,700);chu(tg,phai,y+47,MO,'right');hetKq=phai-110}
    const kq=vua(r.kq,380,23,15,600),rKq=c.measureText(kq).width;chu(kq,hetKq,y+47,MO,'right');
    chu(vua(r.ten,hetKq-rKq-24-140,30,18,800),140,y+49,MUC)});
  /* chân */
  const yc=cao-96;font(34,400,HZ);chu('加油！',56,yc+8,'#E0545F');const wg=c.measureText('加油！').width;font(24,700);chu('Chúc mừng cả lớp, lần sau cố lên nhé!',56+wg+10,yc+6,MUC);
  if(logo)c.drawImage(logo,56,cao-60,36,36);font(20,700);chu('© lyulaoshi.com',102,cao-35,MO);
}
const chuGui=(d,o)=>{const ds=o.so?d.hang.slice(0,o.so):d.hang;
  return ['BẢNG XẾP HẠNG · '+d.bai,d.phu,''].concat(ds.map((r,i)=>(i+1)+'. '+r.ten+' – '+r.kq+(o.tg&&r.tg?' – '+r.tg:''))).join('\n')+'\n\n© lyulaoshi.com'};

/* ---------- hộp xem và gửi ---------- */
let D=null,cv=null,du=null,o=nho(),url='',lan=0;
const $=s=>D.querySelector(s);
function dung(){
  const st=document.createElement('style');
  st.textContent='.xh-nut{flex:none;display:inline-flex;align-items:center;gap:6px;font:inherit;font-size:13px;font-weight:800;border:0;border-radius:999px;padding:8px 14px;background:var(--nv);color:#fff;cursor:pointer}'
   +'.xh-dau{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.xh-nut:active,.xhD button:active{transform:scale(.95);filter:brightness(.86)}'
   +'.xhD{box-sizing:border-box;width:min(560px,94vw);max-height:94vh;padding:16px;border:0;border-radius:22px;background:var(--card);color:var(--ink);box-shadow:0 20px 60px rgba(0,0,0,.3);overflow:auto}.xhD::backdrop{background:rgba(25,20,45,.55)}'
   +'.xhD h2{margin:0 0 10px;font-size:18px}.xhD .hang{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 10px}'
   +'.xhD .doan{display:inline-flex;gap:2px;padding:3px;border-radius:999px;background:var(--nv-s)}.xhD .doan button,.xhD .gat{font:inherit;font-size:13px;font-weight:800;border:0;border-radius:999px;padding:7px 13px;background:none;color:var(--nv);cursor:pointer}'
   +'.xhD .doan button[aria-pressed="true"]{background:var(--nv);color:#fff}.xhD .gat{border:2px solid var(--nv-s)}.xhD .gat[aria-pressed="true"]{background:var(--nv-s);border-color:var(--nv)}'
   +'.xhD .khung{max-height:52vh;overflow:auto;border:2px solid var(--line);border-radius:14px;background:var(--nv-s)}.xhD img{display:block;width:100%;height:auto}'
   +'.xhD .nv-nut{margin:12px 0 0;flex-wrap:wrap}.xhD p{margin:8px 0 0;font-size:13px;color:var(--muted);min-height:1.3em}';
  document.head.append(st);
  D=document.createElement('dialog');D.className='xhD';D.setAttribute('aria-labelledby','xhH');
  D.innerHTML='<h2 id="xhH">Ảnh bảng xếp hạng</h2><div class="hang"><span class="doan" role="group" aria-label="Số bạn trên bảng"><button type="button" data-so="0">Cả lớp</button><button type="button" data-so="10">10 hạng đầu</button><button type="button" data-so="3">3 hạng đầu</button></span><button type="button" class="gat" data-tg>Hiện thời gian</button></div>'
   +'<div class="khung"><img alt="Xem trước bảng xếp hạng"></div>'
   +'<div class="nv-nut"><button type="button" class="nv-btn chinh" data-v="chep">'+IC('chep')+'Chép ảnh</button><button type="button" class="nv-btn" data-v="tai">'+IC('tai-ve')+'Tải ảnh</button><button type="button" class="nv-btn" data-v="gui" hidden>'+IC('gui')+'Gửi</button><button type="button" class="nv-btn" data-v="chu">Chép dạng chữ</button><button type="button" class="nv-btn mo" data-v="dong">Đóng</button></div><p role="status"></p>';
  document.body.append(D);cv=document.createElement('canvas');
  D.addEventListener('click',e=>{if(e.target===D){D.close();return}const b=e.target.closest('button');if(!b)return;
    if(b.dataset.so!==undefined){o.so=+b.dataset.so;luu(o);ra()}else if(b.hasAttribute('data-tg')){o.tg=!o.tg;luu(o);ra()}else if(b.dataset.v)lam(b.dataset.v)});
}
const bao=t=>{$('p').textContent=t};
const anh=()=>new Promise((r,x)=>cv.toBlob(b=>b?r(b):x(new Error('anh')),'image/png'));
const tenTep=()=>'bang-xep-hang-'+ngay().replace(/\//g,'-')+'.png';
let tep=null;
async function ra(){const l=++lan;D.querySelectorAll('[data-so]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.so===o.so));$('[data-tg]').setAttribute('aria-pressed',o.tg);
  await Promise.all([napLogo(),napChu(chuGui(du,o))]);if(l!==lan)return;ve(cv,du,o);
  const b=await anh();if(l!==lan)return;if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(b);$('img').src=url;
  tep=typeof File==='function'?new File([b],tenTep(),{type:'image/png'}):null;
  $('[data-v="gui"]').hidden=!(tep&&navigator.canShare&&navigator.canShare({files:[tep]}))}
async function lam(v){
  if(v==='dong'){D.close();return}
  if(v==='tai'){const a=document.createElement('a');a.href=url;a.download=tenTep();document.body.append(a);a.click();a.remove();bao('Đã tải ảnh về máy.');return}
  if(v==='gui'){if(tep)navigator.share({files:[tep]}).catch(()=>{});return}
  if(v==='chu'){const t=chuGui(du,o);try{await navigator.clipboard.writeText(t);bao('Đã chép. Dán vào nhóm lớp.')}catch(e){bao('Trình duyệt này chưa cho chép. Dùng nút Tải ảnh.')}return}
  try{await navigator.clipboard.write([new ClipboardItem({'image/png':anh()})]);bao('Đã chép ảnh. Mở nhóm lớp rồi dán.')}catch(e){bao('Trình duyệt này chưa chép được ảnh. Bấm Tải ảnh rồi gửi.')}
}
function mo(d){if(!D)dung();du=d;o=nho();bao('');$('img').removeAttribute('src');D.showModal?D.showModal():D.setAttribute('open','');ra()}
function nut(bang,lay){if(!D)dung();const dau=bang.closest('.bai').querySelector('.dau-bai'),xoa=dau.lastElementChild;
  const g=document.createElement('div');g.className='xh-dau';const b=document.createElement('button');b.type='button';b.className='xh-nut';b.innerHTML=IC('vuong-mien')+'Ảnh xếp hạng';b.onclick=()=>mo(lay());g.append(b,xoa);dau.append(g)}
return{nut,mo,ve,chuGui};
})();
