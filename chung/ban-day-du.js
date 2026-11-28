// Dấu hiệu bản đầy đủ (28/11/2026): chữ "Lyu Laoshi" ở khối tên đầu trang đổi sang chữ KuaiLe đỏ san hô (dau-trang.css, .lld-mo).
// Chỉ bật khi khoá máy đã nhớ giải mã được một gói phần riêng, nên đổi mật khẩu là tự tắt. build_site.py gắn cùng khối tên.
(function(){
const GOI='/chung/nhiem-vu-gv.khoa.json';
const nho=()=>{try{return !!(localStorage.getItem('ll-khoa')||sessionStorage.getItem('ll-khoa'))}catch(e){return false}};
const ve=bat=>document.querySelectorAll('.brand.lld').forEach(a=>a.classList.toggle('lld-mo',bat));
const nap=()=>window.LLKhoa?Promise.resolve():new Promise((ok,loi)=>{const s=document.createElement('script');s.src='/chung/khoa.js';s.onload=ok;s.onerror=loi;document.head.append(s)});
async function xem(){
  if(!nho())return ve(false);
  try{await nap();if(!LLKhoa.duoc)return;const r=await fetch(GOI,{cache:'no-cache'});if(r.ok)ve(!!await LLKhoa.thuNho(await r.json()))}catch(e){}
}
if(document.readyState==='loading')addEventListener('DOMContentLoaded',xem);else xem();
// vừa mở khoá ngay trên trang · mở/khoá ở thẻ khác · quay lại bằng nút Back
addEventListener('ll-khoa',xem);
addEventListener('storage',e=>{if(e.key===null||e.key==='ll-khoa')xem()});
addEventListener('pageshow',e=>{if(e.persisted)xem()});
})();
