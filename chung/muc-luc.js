// Nút sáng/tối của mục lục giáo trình khung cũ (TTTC, 乐读, 汉语阅读教程, 301): mặc định theo máy, lựa chọn dùng chung với cả web (cb-theme).
(function(){var r=document.documentElement,b=document.getElementById('themeBtn');if(!b)return;
 var may=matchMedia('(prefers-color-scheme: dark)');
 function hien(){return r.dataset.theme||(may.matches?'dark':'light')}
 function ve(){b.innerHTML='<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=39804db7#'+(hien()==='dark'?'mattroi':'trang')+'"></use></svg>'}
 ve();if(may.addEventListener)may.addEventListener('change',ve);
 b.addEventListener('click',function(){r.dataset.theme=hien()==='dark'?'light':'dark';try{localStorage.setItem('cb-theme',r.dataset.theme)}catch(e){}ve()});
})();
