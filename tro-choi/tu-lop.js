// Phần dùng chung của các trò chơi cả lớp (Kéo co, Bingo). Nạp sau hsk-words.js, bai-data.js, chu-de.js, nghia-hsk1.js và bo-tu.js.
// TULOP.words(cấp) → [{w,p,vi}] theo đúng thứ tự dữ liệu; TULOP.picker(el) → ô chọn bài giáo trình / chủ đề, chọn xong mở ?bo=…
window.TULOP=(function(){
  const NG=new Map();   // bộ từ theo bài/chủ đề lấy nghĩa của chính bộ đó, còn lại tra NGHIA
  if(window.BO_TU){const [t,a]=BO_TU.id.split(':');
    if(t==='bai'){const bk=(window.BAI||[]).find(x=>x.id===a);if(bk)bk.bai.forEach(l=>l.w.forEach(x=>{if(x[2])NG.set(x[0],x[2])}))}
    if(t==='cd'){const c=(window.CHUDE||[]).find(x=>x.id===a);if(c)c.w.forEach(x=>{if(x[2])NG.set(x[0],x[2])})}}
  const rawVi=(w,p)=>{const N=window.NGHIA||{},B=window.BO_NGHIA||{};return B[w]||NG.get(w)||N[w+'|'+p]||N[w]||''};
  // rút nghĩa cho vừa ô: bỏ ngoặc, quá dài thì lấy ý đầu tiên
  function shortVi(s){s=s.replace(/\s*[（(][^)）]*[)）]/g,'').trim();
    for(const sep of [';',',']){if(s.length>22)s=s.split(sep)[0].trim()}
    return s.length<=22?s:''}
  function words(levels,maxLen){const seen=new Set();
    return levels.flatMap(l=>HSK[l]||[]).filter(([w,p])=>p&&w.length<=(maxLen||6)&&!seen.has(w)&&seen.add(w)).map(([w,p])=>({w,p,vi:shortVi(rawVi(w,p))}))}
  /* ---------- Bộ từ của cô: mỗi dòng "chữ Hán | pinyin | nghĩa"; từ có trong HSK chỉ cần chữ Hán. Lưu trên máy cô (khoá cot-sets) ---------- */
  const raw=Storage.prototype.getItem.bind(localStorage),rawSet=Storage.prototype.setItem.bind(localStorage);
  const sets=()=>{try{return JSON.parse(raw('cot-sets'))||[]}catch(e){return[]}},saveSets=v=>{try{rawSet('cot-sets',JSON.stringify(v))}catch(e){}};
  function lookup(z){const H=window.HSK_FULL||window.HSK||{},N=window.NGHIA||{};for(const l in H){const f=H[l].find(([v])=>v===z);if(f)return{p:f[1],vi:N[z+'|'+f[1]]||N[z]||''}}return null}
  function parse(text){const ok=[],thieu=[],seen=new Set();
    text.split('\n').map(x=>x.trim()).filter(Boolean).forEach(line=>{const [z,p,vi]=line.split(/\s*[|\t｜]\s*/).map(x=>(x||'').trim());if(!z||seen.has(z))return;seen.add(z);
      const L=lookup(z),pp=p||(L&&L.p)||'';if(!pp){thieu.push(z);return}ok.push([z,pp,vi||(L&&L.vi)||''])});return{ok,thieu}}
  const enc=o=>btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  const play=(n,text)=>{const {ok}=parse(text);location.href='./?bo='+encodeURIComponent('cot:'+enc({n,w:ok}))};
  function cotBox(host){const box=document.createElement('div');box.className='tp-cot';host.append(box);
    const paint=()=>{box.innerHTML='';const row=document.createElement('div');row.className='tp-row';
      const nb=document.createElement('button');nb.type='button';nb.className='tp-new';nb.textContent='+ Bộ từ của cô';nb.onclick=()=>edit(null);row.append(nb);
      sets().forEach((x,i)=>{const c=document.createElement('span');c.className='tp-set';const u=document.createElement('button');u.type='button';u.textContent=x.n+' ('+parse(x.t).ok.length+' từ)';u.title='Chơi với bộ này';u.onclick=()=>play(x.n,x.t);
        const e=document.createElement('button');e.type='button';e.className='tp-x';e.textContent='Sửa';e.onclick=()=>edit(i);c.append(u,e);row.append(c)});box.append(row)};
    function edit(i){const cur=i==null?{n:'',t:''}:sets()[i];box.innerHTML='';const f=document.createElement('div');f.className='tp-ed';
      f.innerHTML='<label>Tên bộ từ<input maxlength="40" placeholder="Ví dụ: Bài đọc thêm tuần 5"></label><label>Mỗi dòng một từ: chữ Hán | pinyin | nghĩa. Từ có trong HSK chỉ cần gõ chữ Hán. Kéo co cần ít nhất 8 từ, Bingo 11 từ, Đập ruồi 13 từ; Bingo nên dưới 30 từ cho mã QR dễ quét.<textarea rows="7" placeholder="奶茶 | nǎichá | trà sữa&#10;火锅 | huǒguō | lẩu&#10;朋友"></textarea></label><div class="tp-st" aria-live="polite"></div><div class="tp-ac"></div>';
      const n=f.querySelector('input'),t=f.querySelector('textarea'),stt=f.querySelector('.tp-st'),ac=f.querySelector('.tp-ac');n.value=cur.n;t.value=cur.t;
      const btn=(x,cls,fn)=>{const b=document.createElement('button');b.type='button';b.className=cls;b.textContent=x;b.onclick=fn;ac.append(b);return b};
      const go=btn('Lưu và chơi bộ này','tp-go',()=>{const name=n.value.trim()||'Bộ từ '+(sets().length+1),all=sets();if(i==null)all.push({n:name,t:t.value});else all[i]={n:name,t:t.value};saveSets(all);play(name,t.value)});
      btn('Huỷ','tp-x',paint);if(i!=null)btn('Xoá bộ này','tp-x',()=>{if(confirm('Xoá bộ từ "'+cur.n+'"?')){const all=sets();all.splice(i,1);saveSets(all);paint()}});
      const check=()=>{const {ok,thieu}=parse(t.value);stt.textContent=ok.length+' từ dùng được'+(thieu.length?'. Thiếu pinyin, cô gõ thêm "| pinyin": '+thieu.join(', '):'')+(ok.length<4?'. Cần ít nhất 4 từ.':'');go.disabled=ok.length<4};
      t.oninput=check;check();box.append(f);(i==null?n:t).focus()}
    paint()}
  function picker(el){
    const bai=window.BAI||[],cd=window.CHUDE||[];
    // giáo trình: bấm nhiều bài để ôn gộp (bo-tu.js nhận bai:<sách>:bai-1+bai-3); chủ đề: bấm là chơi luôn
    const books=bai.map(k=>({id:k.id,zh:k.zh,vi:k.vi||'',gop:1,ls:k.bai.filter(l=>l.w.length>=4).map(l=>({t:'Bài '+l.n,n:l.w.length,id:l.id,w:l.w.map(x=>x[0])}))}));
    if(cd.length)books.push({id:'#cd',zh:'主题',vi:'Chủ đề từ vựng',ls:cd.map(c=>({t:c.vi,n:c.w.length,bo:'cd:'+c.id}))});
    let cur=null,sel=new Set();
    {const bo=window.BO_TU?BO_TU.id.split(':'):[];if(bo[0]==='bai'&&books.some(k=>k.id===bo[1])){cur=bo[1];(bo[2]||'').split(/[+ ]/).forEach(x=>x&&sel.add(x))}}
    el.innerHTML='<div class="tp-h">Hoặc lấy từ của bài đang học (bấm nhiều bài để ôn gộp), hoặc bộ từ cô tự nhập</div><div class="tp-bk"></div><div class="tp-ls" hidden></div><div class="tp-ac" hidden></div>';
    cotBox(el.querySelector('.tp-h'));el.querySelector('.tp-h').after(el.querySelector('.tp-cot'));
    const B=el.querySelector('.tp-bk'),L=el.querySelector('.tp-ls'),A=el.querySelector('.tp-ac');
    const paint=()=>{B.innerHTML='';books.forEach(k=>{const b=document.createElement('button');b.type='button';b.className='tp-b';b.setAttribute('aria-pressed',k.id===cur);
        const z=document.createElement('b');z.lang='zh';z.textContent=k.zh;const v=document.createElement('small');v.textContent=k.vi;b.append(z,v);b.onclick=()=>{cur=cur===k.id?null:k.id;sel=new Set();paint()};B.append(b)});
      const k=books.find(x=>x.id===cur);L.hidden=!k;L.innerHTML='';A.innerHTML='';A.hidden=true;if(!k)return;
      if(!k.gop){k.ls.forEach(l=>{const a=document.createElement('a');a.className='tp-l';a.href='./?bo='+encodeURIComponent(l.bo);a.textContent=l.t;const s=document.createElement('small');s.textContent=l.n+' từ';a.append(s);L.append(a)});return}
      k.ls.forEach(l=>{const b=document.createElement('button');b.type='button';b.className='tp-l';b.setAttribute('aria-pressed',sel.has(l.id));b.textContent=l.t;const s=document.createElement('small');s.textContent=l.n+' từ';b.append(s);
        b.onclick=()=>{sel.has(l.id)?sel.delete(l.id):sel.add(l.id);paint()};L.append(b)});
      if(sel.size){const ids=k.ls.filter(l=>sel.has(l.id)),n=new Set(ids.flatMap(l=>l.w)).size,go=document.createElement('a');go.className='tp-go';
        go.href='./?bo='+encodeURIComponent('bai:'+k.id+':'+ids.map(l=>l.id).join('+'));go.textContent='Chơi '+ids.length+' bài đã chọn ('+n+' từ)';A.append(go);A.hidden=false}};
    paint();
  }
  const st=document.createElement('style');
  st.textContent='.tu-pick{display:grid;gap:8px}.tp-h{font-size:14.5px;font-weight:700;color:var(--muted)}.tp-bk{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,190px),1fr));gap:8px}.tp-b{display:grid;gap:1px;text-align:left;padding:8px 12px;border:2px solid var(--line);border-radius:14px;background:var(--ground);color:var(--ink);font:inherit;cursor:pointer}.tp-b b{font-family:var(--hz);font-weight:400;font-size:17px;line-height:1.25}.tp-b small{color:var(--muted);font-size:12.5px;font-weight:600;line-height:1.3}.tp-b[aria-pressed="true"]{border-color:var(--coral);background:var(--coral-s)}.tp-ls{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,118px),1fr));gap:6px;max-height:210px;overflow:auto;padding:2px}.tp-ls[hidden]{display:none}.tp-l{display:grid;gap:0;padding:6px 10px;border-radius:12px;background:var(--ground2);color:var(--ink);font-weight:700;font-size:14px;line-height:1.3;text-decoration:none}.tp-l small{color:var(--muted);font-weight:600;font-size:12px}.tp-l:hover{background:var(--line)}button.tp-l{border:2px solid transparent;font:inherit;text-align:left;cursor:pointer}.tp-l[aria-pressed="true"]{border-color:var(--coral,#C9303C);background:var(--coral-s,#FBDCD7)}a.tp-go{text-decoration:none;display:inline-block}.tp-ac[hidden]{display:none}.tp-cot{display:grid;gap:8px}.tp-row{display:flex;flex-wrap:wrap;gap:6px}.tp-new,.tp-set button,.tp-x,.tp-go{border:0;font:inherit;font-weight:700;font-size:14px;padding:6px 12px;border-radius:999px;cursor:pointer}.tp-new{background:var(--ink);color:var(--card)}.tp-set{display:inline-flex}.tp-set button:first-child{background:var(--ground2);color:var(--ink);border-radius:999px 0 0 999px}.tp-set .tp-x{border-radius:0 999px 999px 0;background:var(--line);color:var(--ink);font-size:13px}.tp-x{background:var(--ground2);color:var(--ink)}.tp-go{background:var(--coral,#C9303C);color:#fff}.tp-go:disabled{opacity:.45;cursor:not-allowed}.tp-ed{display:grid;gap:8px;padding:12px;border-radius:14px;background:var(--ground);border:2px solid var(--line)}.tp-ed label{display:grid;gap:4px;font-size:13.5px;font-weight:700;color:var(--muted)}.tp-ed input,.tp-ed textarea{font:inherit;font-size:15px;padding:7px 10px;border-radius:10px;border:2px solid var(--line);background:var(--card);color:var(--ink);resize:vertical}.tp-ed textarea{font-family:var(--kai),var(--vi);font-size:18px;line-height:1.5}.tp-st{font-size:14px;font-weight:700;color:var(--ink)}.tp-ac{display:flex;flex-wrap:wrap;gap:8px}';
  document.head.appendChild(st);
  return{words,picker};
})();
