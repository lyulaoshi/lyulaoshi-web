// Lối quay về Góc giáo viên (28/11/2026). Chỉ hiện khi trang được mở TỪ Góc giáo viên (trò cả lớp, "Chơi thử như học viên"…)
// trong cùng cửa sổ hoặc thẻ mở ra từ đó; học viên mở link trực tiếp không thấy gì. build_site.py gắn vào trò chơi, ngữ pháp, Thu bài.
(function(){
const KHOA='llVeGV',DUNG=/^\/goc-giao-vien\//;let ve='';
try{const u=new URL(document.referrer);if(u.origin===location.origin&&DUNG.test(u.pathname))ve=u.pathname}catch(e){}
try{if(ve)sessionStorage.setItem(KHOA,ve);else ve=sessionStorage.getItem(KHOA)||''}catch(e){}
if(!DUNG.test(ve))return;
const them=()=>{const nav=document.querySelector('header nav');if(!nav||nav.querySelector('.ve-gv'))return;
  const st=document.createElement('style');
  st.textContent='header nav a.ve-gv{display:inline-flex;align-items:center;gap:6px;flex:none;padding:7px 14px 7px 10px;border-radius:99px;background:#127f88;color:#fff;font-size:13.5px;font-weight:800;line-height:1.2;text-decoration:none;white-space:nowrap}'
    +'header nav a.ve-gv:hover{filter:brightness(1.1);color:#fff}header nav a.ve-gv svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}'
    +'@media (max-width:620px){header nav a.ve-gv~a{display:none}}';
  document.head.append(st);
  const a=document.createElement('a');a.className='ve-gv';a.href=ve;
  a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Góc giáo viên';
  nav.prepend(a)};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',them);else them();
})();
