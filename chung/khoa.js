/* Mở phần riêng bằng mật khẩu — chép thành /chung/khoa.js khi ghép (tools/khoa_trang.py).
   PBKDF2-SHA256 → AES-GCM. Chọn "Nhớ máy này" thì lưu khoá đã sinh (không lưu mật khẩu) ở localStorage,
   không chọn thì chỉ giữ tới khi đóng thẻ trình duyệt. Chuẩn hoá mật khẩu phải khớp tools/dat_mat_khau.py. */
(function(){
const TEN='ll-khoa';
const b=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const s64=a=>btoa(String.fromCharCode(...new Uint8Array(a)));
const chuan=s=>s.normalize('NFC').toLowerCase().trim().replace(/\s+/g,' ');
async function sinh(mk,goi){const g=await crypto.subtle.importKey('raw',new TextEncoder().encode(chuan(mk)),'PBKDF2',false,['deriveBits']);
  return s64(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:b(goi.s),iterations:goi.i},g,256))}
async function giai(goi,k){const key=await crypto.subtle.importKey('raw',b(k),'AES-GCM',false,['decrypt']);
  return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:b(goi.n)},key,b(goi.c)))}
const kho=()=>{const a=[];['sessionStorage','localStorage'].forEach(n=>{try{const v=JSON.parse(window[n].getItem(TEN));if(v&&v.k)a.push(v)}catch(e){}});return a};
function quen(){['sessionStorage','localStorage'].forEach(n=>{try{window[n].removeItem(TEN)}catch(e){}})}
/* trả về nội dung nếu máy đã nhớ khoá, không thì null */
async function thuNho(goi){for(const v of kho())if(v.s===goi.s){try{return await giai(goi,v.k)}catch(e){}}return null}
/* mật khẩu sai thì ném lỗi */
async function thuMatKhau(mk,goi,lau){const k=await sinh(mk,goi),t=await giai(goi,k);quen();
  try{(lau?localStorage:sessionStorage).setItem(TEN,JSON.stringify({s:goi.s,k}));dispatchEvent(new Event('ll-khoa'))}catch(e){}return t}
window.LLKhoa={thuNho,thuMatKhau,quen,duoc:!!(window.crypto&&crypto.subtle)};
})();
