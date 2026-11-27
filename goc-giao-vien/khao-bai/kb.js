/* Phần dùng chung của 5 game Khảo Bài (nạp TRƯỚC mã game). */
/* màu áo thường cho mọi người; st.name để mỗi bạn giữ một màu */
var AO=function(st){
  const BO={'p-ngoc':[['#2f9f98','#1c5f5b'],['#ffffff','#cdd4ea']],'p-hong':[['#e8776b','#8d463f'],['#ffffff','#cdd4ea']],
    'p-tim':[['#8c7ad6','#4f4580'],['#ffffff','#cdd4ea']],'p-trang':[['#ffffff','#cdd4ea'],['#8a93a8','#565e74']]};
  let k=document.getElementById('uni').value;
  if(!BO[k]){let h=7;for(const c of String(st.name))h=(h*31+c.charCodeAt(0))>>>0;k=['p-ngoc','p-hong','p-tim'][h%3]}
  return{s:BO[k][0],c:BO[k][1]}};
/* dấu vẽ trên khung game (thay ký tự ✓ ↺ ▶ của hệ thống): 'tich' | 'lai' | 'toi'; chữ khác thì viết chữ */
var veDau=function(c,k,x,y,s){
  if(k!=='tich'&&k!=='lai'&&k!=='toi'){c.fillText(k,x,y);return}
  const r=s*.42;c.save();c.translate(x,y);c.strokeStyle=c.fillStyle;c.lineWidth=Math.max(1.4,s*.17);c.lineCap='round';c.lineJoin='round';c.beginPath();
  if(k==='tich'){c.moveTo(-r*.85,0);c.lineTo(-r*.2,r*.65);c.lineTo(r*.9,-r*.6);c.stroke()}
  else if(k==='lai'){c.arc(0,0,r*.75,-Math.PI*.35,Math.PI*1.25);c.stroke();c.beginPath();const a=-Math.PI*.35,px=Math.cos(a)*r*.75,py=Math.sin(a)*r*.75;c.moveTo(px-r*.6,py);c.lineTo(px,py);c.lineTo(px,py-r*.6);c.stroke()}
  else{c.moveTo(-r*.6,-r*.8);c.lineTo(r*.75,0);c.lineTo(-r*.6,r*.8);c.closePath();c.fill()}
  c.restore()};
window.KB=(function(){
/* danh sách mẫu: tên đặt cho vui, không phải lớp nào */
const MAU=['Minh Anh','Bảo Ngọc','Gia Huy','Khánh Linh','Đức Minh','Thu Trang','Quốc Bảo','Hà My','Tuấn Kiệt','Phương Thảo','Nhật Nam','Mai Chi'].join('\n');
const doc=k=>{try{return localStorage.getItem(k)}catch(e){return null}},ghi=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
/* danh sách của web (khoá dcd-ds, chuỗi JSON, mỗi dòng một tên) */
const web=()=>{try{return String(JSON.parse(doc('dcd-ds'))||'')}catch(e){return''}};
const dongDs=t=>String(t||'').split('\n').map(x=>x.normalize('NFC').trim()).filter(Boolean);
/* tên trong một dòng của game (có thể là cột họ đệm, cột tên, cột giới tính, hoặc "(nam)") */
function ten(d){let c=d.split('\t').map(x=>x.trim()).filter(Boolean);if(c.length>1&&/^\d+$/.test(c[0]))c.shift();
  if(c.length>1&&/^(nam|nữ|nu|male|female|m|f|trai|gái|gai)$/i.test(c[c.length-1]))c.pop();
  return c.join(' ').replace(/\s*(?:\||\()\s*(nam|nữ|nu)\s*\)?\s*$/i,'').replace(/\s+/g,' ').trim()}
/* danh sách lúc mở game: theo danh sách của web (giữ ghi chú giới tính đã có); chưa có thì bản đã lưu, rồi bản mẫu */
function dsBanDau(cu){const chung=doc('kb-ds')||cu||'',w=dongDs(web());
  if(!w.length)return chung||MAU;
  const co=new Map(dongDs(chung).map(d=>[ten(d),d]));return w.map(d=>co.get(ten(d))||d).join('\n')}
/* thầy cô sửa danh sách trong game → lưu cho cả 5 game và cho các công cụ khác của web */
function luuDs(){const t=document.getElementById('roster').value;if(t===MAU)return;ghi('kb-ds',t);
  ghi('dcd-ds',JSON.stringify(dongDs(t).map(ten).filter(Boolean).join('\n')))}
/* chọn giá trị đã nhớ nếu ô còn lựa chọn đó, không thì giá trị mặc định */
function chon(sel,nho,mac){const co=v=>v&&[...sel.options].some(o=>o.value===v);sel.value=co(nho)?nho:co(mac)?mac:sel.options[0].value;if(sel._hop)sel._hop()}
/* ô số: nút bớt, thêm theo giao diện web */
function oSo(i){const w=document.createElement('span');w.className='kb-so';i.before(w);
  const nut=(chu,buoc,ten)=>{const b=document.createElement('button');b.type='button';b.textContent=chu;b.setAttribute('aria-label',ten);
    b.onclick=e=>{e.preventDefault();const cu=i.value;buoc>0?i.stepUp():i.stepDown();if(i.value!==cu)i.dispatchEvent(new Event('change',{bubbles:true}))};return b};
  w.append(nut('-',-1,'Bớt'),i,nut('+',1,'Thêm'))}
/* ô chọn, ô số theo giao diện web; phím bấm trong ô chọn và hộp mật khẩu không kích hoạt phím tắt của game */
function veO(){if(window.GV)document.querySelectorAll('.wrap select').forEach(GV.hop);document.querySelectorAll('.wrap input[type=number]').forEach(oSo);
  document.body.addEventListener('keydown',e=>{if(e.target.closest&&e.target.closest('.hop,.khoaD,.kb-so,.rbar'))e.stopPropagation()})}
function khoiDong(){veO();const r=document.getElementById('roster');if(r){r.addEventListener('change',luuDs);r.addEventListener('input',()=>{clearTimeout(r._h);r._h=setTimeout(luuDs,600)})}
  if(window.GV)GV.loiRieng(window.LL_KHOA,ma=>{const s=document.createElement('script');s.textContent=ma;document.body.append(s)},document.querySelector('.kb-chan'))}
return{mau:MAU,dsBanDau,luuDs,chon,khoiDong};
})();
