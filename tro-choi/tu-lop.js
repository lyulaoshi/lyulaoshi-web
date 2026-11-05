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
    const books=bai.map(k=>({id:k.id,zh:k.zh,vi:k.vi||'',ls:k.bai.filter(l=>l.w.length>=4).map(l=>({t:'Bài '+l.n,n:l.w.length,bo:'bai:'+k.id+':'+l.id}))}));
    if(cd.length)books.push({id:'#cd',zh:'主题',vi:'Chủ đề từ vựng',ls:cd.map(c=>({t:c.vi,n:c.w.length,bo:'cd:'+c.id}))});
    let cur=null;el.innerHTML='<div class="tp-h">Hoặc lấy từ của bài đang học</div><div class="tp-bk"></div><div class="tp-ls" hidden></div>';
    const B=el.querySelector('.tp-bk'),L=el.querySelector('.tp-ls');
    const paint=()=>{B.innerHTML='';books.forEach(k=>{const b=document.createElement('button');b.type='button';b.className='tp-b';b.setAttribute('aria-pressed',k.id===cur);
        const z=document.createElement('b');z.lang='zh';z.textContent=k.zh;const v=document.createElement('small');v.textContent=k.vi;b.append(z,v);b.onclick=()=>{cur=cur===k.id?null:k.id;paint()};B.append(b)});
      const k=books.find(x=>x.id===cur);L.hidden=!k;L.innerHTML='';if(k)k.ls.forEach(l=>{const a=document.createElement('a');a.className='tp-l';a.href='./?bo='+encodeURIComponent(l.bo);a.textContent=l.t;const s=document.createElement('small');s.textContent=l.n+' từ';a.append(s);L.append(a)})};
    paint();
  }
  const st=document.createElement('style');
  st.textContent='.tu-pick{display:grid;gap:8px}.tp-h{font-size:14.5px;font-weight:700;color:var(--muted)}.tp-bk{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,190px),1fr));gap:8px}.tp-b{display:grid;gap:1px;text-align:left;padding:8px 12px;border:2px solid var(--line);border-radius:14px;background:var(--ground);color:var(--ink);font:inherit;cursor:pointer}.tp-b b{font-family:var(--hz);font-weight:400;font-size:17px;line-height:1.25}.tp-b small{color:var(--muted);font-size:12.5px;font-weight:600;line-height:1.3}.tp-b[aria-pressed="true"]{border-color:var(--coral);background:var(--coral-s)}.tp-ls{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,118px),1fr));gap:6px;max-height:210px;overflow:auto;padding:2px}.tp-ls[hidden]{display:none}.tp-l{display:grid;gap:0;padding:6px 10px;border-radius:12px;background:var(--ground2);color:var(--ink);font-weight:700;font-size:14px;line-height:1.3;text-decoration:none}.tp-l small{color:var(--muted);font-weight:600;font-size:12px}.tp-l:hover{background:var(--line)}';
  document.head.appendChild(st);
  return{words,picker};
})();
