// Gắn mã QR vào ảnh chia sẻ của các trò chơi (Đoán từ, Đố chữ…): quét mã là vào đúng đề / đúng câu đố,
// kể cả khi ảnh được đăng lên story, chiếu lên màn hình lớp hay in ra giấy (những chỗ không bấm link được).
// QRANH.frame(canvas ảnh 1080×1350, link, dòng mời) → canvas mới: khung tối, ảnh thu nhỏ ở trên, dải dưới có mã QR.
// QRANH.id(chuỗi) → mã ngắn (băm FNV-1a, cơ số 36) để link ngắn, mã QR thưa, dễ quét.
window.QRANH=(function(){
  let lib=null;
  function load(){ // thư viện tạo mã QR (qrcode-generator), chỉ tải khi cần
    if(window.qrcode)return Promise.resolve(window.qrcode);if(lib)return lib;
    lib=new Promise((res,rej)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js';
      s.onload=()=>window.qrcode?res(window.qrcode):rej();s.onerror=()=>{lib=null;rej()};document.head.appendChild(s)});
    return lib}
  const id=s=>{let h=2166136261;for(const ch of s){h^=ch.codePointAt(0);h=Math.imul(h,16777619)>>>0}return h.toString(36)};
  const rr=(C,x,y,w,h,r)=>{C.beginPath();C.roundRect?C.roundRect(x,y,w,h,r):C.rect(x,y,w,h)};
  async function frame(src,url,cap){
    let q;try{q=(await load())(0,'M');q.addData(url);q.make()}catch(e){return src} // không tải được thư viện thì giữ ảnh cũ
    const W=1080,H=1350,band=290,cv=document.createElement('canvas');cv.width=W;cv.height=H;const C=cv.getContext('2d');
    const VI=(getComputedStyle(document.body).getPropertyValue('--vi')||'').trim()||'system-ui,sans-serif';
    C.fillStyle='#1E1B2E';C.fillRect(0,0,W,H);
    const s=(H-band-40)/H,w=W*s,h=H*s,x=(W-w)/2,y=24;
    C.save();rr(C,x,y,w,h,26);C.clip();C.drawImage(src,x,y,w,h);C.restore();
    const n=q.getModuleCount(),box=250,cell=Math.floor((box-24)/n),qs=cell*n,bx=x,by=H-band+14;
    C.fillStyle='#fff';rr(C,bx,by,box,box,18);C.fill();
    const ox=bx+(box-qs)/2,oy=by+(box-qs)/2;C.fillStyle='#111';
    for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(q.isDark(r,c))C.fillRect(ox+c*cell,oy+r*cell,cell,cell);
    const tx=bx+box+36,mw=W-tx-x+10;C.textAlign='left';C.textBaseline='middle';
    C.fillStyle='#FFD23F';C.font='900 46px '+VI;if(window.LLI)LLI.ve(C,'may-anh',tx+22,by+50,44,'#FFD23F');C.fillText('Quét mã để vào chơi',tx+60,by+50,mw-60);
    C.fillStyle='#FFFFFF';C.font='700 34px '+VI;C.fillText(cap||'',tx,by+118,mw);
    C.fillStyle='#B7B3E0';C.font='700 29px '+VI;C.fillText('Mở camera điện thoại, hướng vào mã',tx,by+178,mw);
    C.fillText('lyulaoshi.com · 吕老师汉语盒',tx,by+226,mw);
    return cv}
  return{frame,load,id}
})();
