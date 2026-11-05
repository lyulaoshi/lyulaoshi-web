// Phần dùng chung của các trò chơi cả lớp (Kéo co, Bingo). Nạp sau hsk-words.js, bai-data.js, chu-de.js, nghia-hsk1.js và bo-tu.js.
// TULOP.words(cấp) → [{w,p,vi}] theo đúng thứ tự dữ liệu; TULOP.picker(el) → ô chọn bài giáo trình / chủ đề, chọn xong mở ?bo=…
window.TULOP=(function(){
  const NG=new Map();   // bộ từ theo bài/chủ đề lấy nghĩa của chính bộ đó, còn lại tra NGHIA
  if(window.BO_TU){const [t,a]=BO_TU.id.split(':');
    if(t==='bai'){const bk=(window.BAI||[]).find(x=>x.id===a);if(bk)bk.bai.forEach(l=>l.w.forEach(x=>{if(x[2])NG.set(x[0],x[2])}))}
    if(t==='cd'){const c=(window.CHUDE||[]).find(x=>x.id===a);if(c)c.w.forEach(x=>{if(x[2])NG.set(x[0],x[2])})}}
  const rawVi=(w,p)=>{const N=window.NGHIA||{};return NG.get(w)||N[w+'|'+p]||N[w]||''};
  // rút nghĩa cho vừa ô: bỏ ngoặc, quá dài thì lấy ý đầu tiên
  function shortVi(s){s=s.replace(/\s*[（(][^)）]*[)）]/g,'').trim();
    for(const sep of [';',',']){if(s.length>22)s=s.split(sep)[0].trim()}
    return s.length<=22?s:''}
  function words(levels,maxLen){const seen=new Set();
    return levels.flatMap(l=>HSK[l]||[]).filter(([w,p])=>p&&w.length<=(maxLen||6)&&!seen.has(w)&&seen.add(w)).map(([w,p])=>({w,p,vi:shortVi(rawVi(w,p))}))}
  function picker(el){
    const bai=window.BAI||[],cd=window.CHUDE||[];if(!bai.length&&!cd.length)return;
    el.innerHTML='<span>Hoặc lấy từ của bài đang học:</span> <select aria-label="Chọn giáo trình"><option value="">Chọn giáo trình…</option></select> <select aria-label="Chọn bài" hidden></select>';
    const [a,b]=el.querySelectorAll('select');
    bai.forEach(k=>{const o=new Option(k.vi||k.zh,k.id);a.add(o)});if(cd.length)a.add(new Option('Chủ đề từ vựng','#cd'));
    a.onchange=()=>{b.innerHTML='';b.add(new Option('Chọn bài…',''));b.hidden=!a.value;
      if(a.value==='#cd')cd.forEach(c=>b.add(new Option(c.vi,'cd:'+c.id)));
      else{const k=bai.find(x=>x.id===a.value);if(k)k.bai.forEach(l=>{if(l.w.length>=4)b.add(new Option('Bài '+l.n+' ('+l.w.length+' từ)','bai:'+k.id+':'+l.id))})}};
    b.onchange=()=>{if(b.value)location.href='./?bo='+encodeURIComponent(b.value)};
  }
  const st=document.createElement('style');
  st.textContent='.tu-pick{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:14.5px;color:var(--muted)}.tu-pick select{font:inherit;color:var(--ink);background:var(--ground);border:2px solid var(--line);border-radius:10px;padding:6px 10px;max-width:100%}';
  document.head.appendChild(st);
  return{words,picker};
})();
