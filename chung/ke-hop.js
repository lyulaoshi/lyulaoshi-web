// Kệ hộp bento (trang chủ): lấy số liệu thật từ dòng số ở đầu trang (<b data-count>) để ô nào cũng khớp khi build_site.py đếm lại.
(function(){
  document.querySelectorAll('.bento [data-dem]').forEach(b=>{
    const g=document.querySelector('[data-count="'+b.dataset.dem+'"]');if(g)b.textContent=g.textContent;
  });
})();
