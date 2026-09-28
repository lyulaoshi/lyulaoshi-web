// Khung bài ngữ pháp 语法盒: đọc window.NP_LESSON (dữ liệu trong ngu-phap/<cấp>-<số>/index.html) và vẽ cả bài.
// Cần nạp trước: ../hsk-ngu-phap.js (danh mục chuẩn), ../bai-data.js (bài giảng có điểm này), ../co-bai.js (điểm đã có bài), ../../tro-choi/tts.js
(function(){
const L=window.NP_LESSON; if(!L)return;
const H=window.HSK_NP||{}, BAI=window.NP_BAI||[], READY=window.NP_READY||{}, BOOKS=window.NP_BOOKS||[];
const CN="一二三四五六七八九", lv=L.code?CN.indexOf(L.code[0])+1:0;
const OFF={}; Object.values(H).forEach(x=>x.ds.forEach(d=>OFF[d[0]]=d));
const SHORT={"301":"301句","boya":"博雅","yuedu":"阅读教程","tttc":"综合课本","ledu":"乐读"};
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const mk=s=>esc(s).replace(/\[([^\]]+)\]/g,'<mark>$1</mark>');          // [是] -> tô đậm phần trọng tâm
const zhw=s=>esc(s).replace(/([\u3400-\u9fff＿“”，。？！、…（）]+)/g,'<span class="zh">$1</span>');
const qvi=it=>it.vi?`<div class="qvi">${esc(it.vi)}</div>`:"";   // nghĩa tiếng Việt của đề bài (ẩn khi tắt nút Nghĩa)
const plain=s=>String(s).replace(/[\[\]]/g,'');
const say=s=>{const t=plain(s).replace(/——/g,'，');return window.TTS&&("speechSynthesis" in window)?`<button type="button" class="spk" data-say="${esc(t)}" aria-label="Nghe câu này">🔊</button>`:""};
const folder=c=>READY[c];
const $=s=>document.querySelector(s);

function sent(e,i){ // e = [chữ Hán, pinyin, nghĩa, nguồn?]
  return `<div class="sn"><span class="no">${i!=null?"("+(i+1)+")":""}</span><div><div class="l1"><span class="z">${mk(e[0])}</span>${say(e[0])}${e[3]?`<span class="src">${esc(e[3])}</span>`:""}</div>
    <div class="p">${esc(e[1]||"")}</div><div class="v">${esc(e[2]||"")}</div></div></div>`;
}
const SEP=/^(·|\/|→|hoặc|,)$/;  // ô chỉ là dấu ngăn: không chèn "+" hai bên
function fx(f){return `<div class="fx">${f.map((p,i)=>SEP.test(p[0])?`<span class="plus">${esc(p[0])}</span>`:(i&&!SEP.test(f[i-1][0])&&!/^\//.test(p[0])?'<span class="plus">+</span>':'')+`<span class="${p[1]==null?"k":""}"><b>${esc(p[0])}</b>${p[1]?`<i>${esc(p[1])}</i>`:""}</span>`).join('')}</div>`}
let secN=0;
function sec(cls,zh,vi,body){secN++;return `<section class="sec ${cls}" id="m${secN}"><h2><span class="n">${secN}</span><span class="zh">${esc(zh)}</span>${esc(vi)}</h2>${body}</section>`}

// ---------- các mục ----------
const off=OFF[L.code]||[L.code,L.title,""];
let html=`<div class="np-bar"><nav class="np-crumb"><a href="../"><span class="zh">语法盒</span></a>›<a href="../#hsk-${lv}">HSK ${lv}</a>›<span>【${esc(L.code)}】</span></nav>
 <div class="np-tools"><button class="tg" id="pyBtn" type="button" aria-pressed="true">Pinyin</button><button class="tg" id="viBtn" type="button" aria-pressed="true">Nghĩa</button></div></div>`;
html+=`<section class="sec cover" id="m0"><div><div class="code"><b>【${esc(L.code)}】</b>HSK ${lv} · <span class="zh">${esc(L.tag||off[2])}</span></div>
  <h1>${esc(L.title).replace(/(“|”)/g,'<span class="qm">$1</span>')}</h1><div class="vi">${esc(L.vi)}</div>
  ${off[1]!==L.title?`<p style="color:var(--muted);font-size:14px;margin-top:10px">Đề cương: <span class="zh">${esc(off[1])}</span></p>`:""}</div>
  <div class="goal"><h3>Mục tiêu</h3><ul>${(L.goals||[]).map(g=>`<li>${g}</li>`).join('')}</ul></div></section>`;

if(L.rules) html+=sec("lav","语法规则","Công thức & cách dùng",(L.intro?`<p>${L.intro}</p>`:"")+L.rules.map((r,i)=>`<div class="rule"><h3>${L.rules.length>1?`<span style="color:var(--sc)">${i+1}.</span>`:""}${esc(r.t)}${r.sub?`<small>${esc(r.sub)}</small>`:""}</h3>
  ${fx(r.fx)}${r.mean?`<div class="mean">${r.mean}</div>`:""}<div class="ex">${(r.ex||[]).map(e=>sent(e)).join('')}</div>${r.note?`<div class="note">${r.note}</div>`:""}</div>`).join('')
  +(L.notes||[]).map(n=>`<div class="note"><b class="t">${esc(n.t)}:</b> ${n.html}</div>`).join(''));

if(L.cmp) html+=sec("butter","汉越对比","So với tiếng Việt",`<div class="cmp">${L.cmp.map(c=>`<div class="row"><div class="vn">${esc(c.vn)}</div><div class="ar">→</div>
  <div class="cn"><span class="z">${mk(c.zh)}</span> ${c.ok===false?`<span class="no">${esc(c.tag||"")}</span>`:c.ok?'<span class="ok">✓</span>':""}<div style="font-size:14px;color:var(--sc)">${esc(c.py||"")}</div></div>${c.why?`<div class="why">${c.why}</div>`:""}</div>`).join('')}</div>`);

if(L.ex) html+=sec("sky","例句","Câu ví dụ",L.ex.map((e,i)=>sent(e,i)).join('')+`<p style="font-size:13px;color:var(--muted);margin-top:10px">“等级标准”: câu ví dụ trong 《国际中文教育中文水平等级标准·应用解读本》; còn lại do cô bổ sung.</p>`);

if(L.errs) html+=sec("coral","偏误","Lỗi người Việt hay mắc",`<div class="errs">${L.errs.map(e=>`<div class="err"><div class="bad">${esc(e.bad)}</div><div class="good">${esc(e.good)}</div><div class="why">${e.why}</div></div>`).join('')}</div>`);

let qn=0;
if(L.practice) html+=sec("peach","练习","Luyện tập",L.practice.map((g,gi)=>`<div class="ex-grp"><h3>${esc(g.t)} ${g.sub?`<small>· ${esc(g.sub)}</small>`:""}</h3>${g.items.map((it,ii)=>q(g.type,it,gi,ii)).join('')}</div>`).join(''));
function q(type,it,gi,ii){
  const id=`q${gi}-${ii}`; qn++;
  if(type==="choice") return `<div class="qz" data-type="choice" id="${id}"><div class="qt"><span class="n">${ii+1}.</span><span>${zhw(it.q)}</span>${qvi(it)}</div>
    <div class="opts">${it.o.map((o,k)=>`<button type="button" class="opt" data-k="${k}">${esc(o)}</button>`).join('')}</div><div class="fb" hidden></div></div>`;
  if(type==="order"){ // xáo trộn cố định để bài giống nhau mỗi lần mở
    let w=it.w.slice(), s=gi*7+ii*13+3; for(let k=w.length-1;k>0;k--){s=(s*9301+49297)%233280;const j=s%(k+1);[w[k],w[j]]=[w[j],w[k]];}
    if(w.join("")===it.w.join("")) w.push(w.shift());
    return `<div class="qz" data-type="order" id="${id}"><div class="qt"><span class="n">${ii+1}.</span><span>${esc(it.vi||"Sắp xếp thành câu đúng")}</span></div>
      <div class="line" aria-label="Câu của em"></div><div class="pool">${w.map((x,k)=>`<button type="button" class="chip" data-k="${k}">${esc(x)}</button>`).join('')}</div>
      <div class="acts"><button type="button" class="btn2" data-act="check">Kiểm tra</button><button type="button" class="btn2 ghost" data-act="reset">Làm lại</button><button type="button" class="btn2 ghost" data-act="show">Xem đáp án</button></div>
      <div class="fb" hidden></div><div class="ans" hidden><span class="z">${esc(it.a)}</span></div></div>`;
  }
  // show: câu hỏi mở, tự làm rồi bấm xem đáp án
  return `<div class="qz" data-type="show" id="${id}"><div class="qt"><span class="n">${ii+1}.</span>${it.ask?`<span>${esc(it.ask)}:</span>`:""}<span class="${it.bad?"bad-s":/[\u3400-\u9fff]/.test(it.q)?"z":"vq"}">${it.bad||/[\u3400-\u9fff]/.test(it.q)&&!/[a-zà-ỹ]/i.test(it.q)?esc(it.q):zhw(it.q)}</span>${qvi(it)}</div>
    ${canType(it)?`<div class="typ"><input class="tin" type="text" lang="zh-CN" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Gõ câu trả lời bằng chữ Hán…" aria-label="Câu trả lời của em"><button type="button" class="btn2" data-act="type">Kiểm tra</button></div><div class="fb" hidden></div>`:""}
    <div class="acts"><button type="button" class="btn2${canType(it)?" ghost":""}" data-act="show">Xem đáp án</button></div><div class="ans" hidden><span class="z">${esc(it.a)}</span>${it.why?`<div style="font-size:14px;color:var(--muted);margin-top:4px">${it.why}</div>`:""}</div></div>`;
}

// Gặp trong bài giảng + điểm liên quan
const seen=BAI.filter(p=>p.h.includes(L.code));
const relHTML=(L.rel||[]).map(c=>{const o=OFF[c]; const nm=(o?o[1].split("：")[0]:c)+(o&&o[3]?" · "+o[3].split(" — ")[0]:"");
  return folder(c)?`<a href="../${folder(c)}/"><b>【${c}】</b><span class="zh">${esc(nm)}</span></a>`:`<span class="soon" title="Chưa có bài"><b>【${c}】</b><span class="zh">${esc(nm)}</span></span>`}).join('');
html+=sec("mint","相关","Học ở đâu · Điểm liên quan",
  (seen.length?`<p style="margin-top:0"><b>Đã học trong bài:</b></p><div class="rel">${seen.map(p=>`<a href="../../${p.b}/bai-${p.l}/#np-${encodeURIComponent(p.t)}"><b>${esc(SHORT[p.b]||p.b)} · Bài ${p.l}</b><span class="zh">${esc(p.n)}</span></a>`).join('')}</div>`:"")
  +(relHTML?`<p><b>Điểm ngữ pháp liên quan:</b></p><div class="rel">${relHTML}</div>`:""));

// bài trước / sau (theo thứ tự đề cương, chỉ những điểm đã có bài)
const order=Object.keys(READY).sort((a,b)=>(CN.indexOf(a[0])-CN.indexOf(b[0]))||(parseInt(a.slice(1))-parseInt(b.slice(1))));
const at=order.indexOf(L.code), pv=order[at-1], nx=order[at+1];
const nm=c=>(OFF[c]||[c,c])[1].split("：")[0];
html+=`<div class="pn">${pv?`<a href="../${folder(pv)}/">← Bài trước<b>【${pv}】${esc(nm(pv))}</b></a>`:"<span></span>"}${nx?`<a class="nx" href="../${folder(nx)}/">Bài sau →<b>【${nx}】${esc(nm(nx))}</b></a>`:""}</div>
<p class="copy">© Bài giảng được biên soạn bởi ThS. Lã Thị Thuỳ Phương.</p>`;
$('#np').innerHTML=html;


// ---------- ô gõ chữ cho câu tự làm ----------
// Có ô gõ khi đáp án là câu chữ Hán cụ thể (bỏ qua đáp án mở có "…", đáp án giải thích bằng tiếng Việt)
function canType(it){return /[\u3400-\u9fff]/.test(it.a)&&!/…|[a-zà-ỹ]{2}/i.test(it.a)}
const norm=s=>String(s).replace(/[\s，。？！、,.?!;；:：“”"'‘’「」—\-…·]/g,'');
// "A / B" = nhiều đáp án; "X（Y）": Y có thể bỏ, giữ, hoặc thay cho chữ ngay trước (那儿（那里）)
function accepted(a){const out=new Set();
  String(a).split(/\s*\/\s*/).forEach(v=>{let vs=[v];
    for(let k=0;k<4;k++){const nx=[];vs.forEach(x=>{const m=x.match(/^(.*?)[（(]([^）)]*)[）)](.*)$/);
      if(!m){nx.push(x);return}const [,pre,opt,post]=m;
      nx.push(pre+post, pre+opt+post); for(let k=1;k<=Math.min(pre.length,opt.length+1);k++) nx.push(pre.slice(0,pre.length-k)+opt+post);});vs=nx;}
    vs.forEach(x=>out.add(norm(x)));});
  out.delete("");return [...out];}
function lcsMark(u,a){ // đánh dấu chữ của học sinh không có trong đáp án (theo dãy con chung dài nhất)
  const n=u.length,m=a.length,D=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)D[i][j]=u[i]===a[j]?D[i+1][j+1]+1:Math.max(D[i+1][j],D[i][j+1]);
  let i=0,j=0,h="";while(i<n){if(j<m&&u[i]===a[j]){h+=esc(u[i]);i++;j++}else if(j<m&&D[i][j+1]>=D[i+1][j])j++;else{h+=`<mark class="xw">${esc(u[i])}</mark>`;i++}}
  return {h,score:D[0][0]/Math.max(m,1)};}
function checkTyped(qd,it){
  const inp=qd.querySelector('.tin'), fb=qd.querySelector('.typ + .fb'), raw=inp.value.trim(); fb.hidden=false;
  if(!raw){fb.className="fb no";fb.innerHTML="Em gõ câu trả lời vào ô trước nhé.";return}
  if(!/[\u3400-\u9fff]/.test(raw)){fb.className="fb no";fb.innerHTML="<b>Chưa có chữ Hán.</b> Em bật bộ gõ tiếng Trung (pinyin) rồi gõ lại — nếu đang để Telex thì máy sẽ ra chữ Việt.";return}
  const u=norm(raw), acc=accepted(it.a);
  if(acc.includes(u)){fb.className="fb ok";fb.innerHTML="<b>✓ Chính xác!</b>";inp.classList.add('ok');qd.querySelector('.ans').hidden=false;
    const b=qd.querySelector('[data-act=show]');if(b)b.textContent="Ẩn đáp án";return}
  let best={h:esc(u),score:-1};acc.forEach(a=>{const r=lcsMark(u,a);if(r.score>best.score)best=r});
  inp.classList.remove('ok');fb.className="fb no";
  fb.innerHTML=`<b>✗ Chưa khớp đáp án mẫu.</b> Câu của em: <span class="zh tw">${best.h}</span>`
    +(/<mark/.test(best.h)?" — chữ tô đỏ không có trong đáp án.":" — câu còn thiếu chữ.")
    +`<div class="hint">Có thể em diễn đạt cách khác mà vẫn đúng: bấm “Xem đáp án” để so, chưa chắc thì hỏi cô nhé.</div>`;}

// ---------- tương tác ----------
document.addEventListener('click',e=>{
  const s=e.target.closest('.spk'); if(s){TTS.say(s.dataset.say);return;}
  const qd=e.target.closest('.qz'); if(!qd)return;
  const fb=qd.querySelector('.fb'), ans=qd.querySelector('.ans');
  const [gi,ii]=qd.id.slice(1).split('-').map(Number), it=L.practice[gi].items[ii];
  if(qd.dataset.type==="choice"){const b=e.target.closest('.opt'); if(!b)return;
    const k=+b.dataset.k, ok=k===it.a; b.classList.add(ok?"right":"wrong");
    if(ok) qd.querySelectorAll('.opt').forEach(o=>o.disabled=true);
    fb.hidden=false; fb.className="fb "+(ok?"ok":"no"); fb.innerHTML=ok?`<b>✓ Đúng rồi!</b> ${it.why||""}`:`<b>✗ Chưa đúng.</b> Thử lại nhé.`; return;}
  const act=e.target.closest('[data-act]')?.dataset.act, line=qd.querySelector('.line'), pool=qd.querySelector('.pool');
  if(qd.dataset.type==="order"){
    const c=e.target.closest('.chip');
    if(c&&c.parentElement===pool){const n=c.cloneNode(true);n.dataset.from=c.dataset.k;line.appendChild(n);c.classList.add('used');fb.hidden=true;return;}
    if(c&&c.parentElement===line){pool.querySelector(`[data-k="${c.dataset.from}"]`).classList.remove('used');c.remove();fb.hidden=true;return;}
    if(act==="reset"){line.innerHTML="";pool.querySelectorAll('.chip').forEach(x=>x.classList.remove('used'));fb.hidden=true;ans.hidden=true;return;}
    if(act==="check"){const strip=s=>s.replace(/[，。？！、,.?!\s]/g,'');
      const got=strip([...line.children].map(x=>x.textContent).join('')), ok=[it.a].concat(it.alt||[]).some(a=>strip(a)===got);
      fb.hidden=false; fb.className="fb "+(ok?"ok":"no");
      fb.innerHTML=ok?"<b>✓ Chính xác!</b>":(pool.querySelector('.chip:not(.used)')?"<b>Chưa xong</b> — còn thẻ chưa dùng.":"<b>✗ Chưa đúng.</b> Bấm vào thẻ ở dòng trên để đưa về, rồi xếp lại."); return;}
  }
  if(act==="type"){checkTyped(qd,it);return;}
  if(act==="show"){ans.hidden=!ans.hidden; const b=e.target.closest('[data-act]'); if(qd.dataset.type==="show")b.textContent=ans.hidden?"Xem đáp án":"Ẩn đáp án";}
});
document.addEventListener('keydown',e=>{const t=e.target;if(!t.classList||!t.classList.contains('tin')||e.key!=="Enter"||e.isComposing||e.keyCode===229)return;
  e.preventDefault();const qd=t.closest('.qz');const [gi,ii]=qd.id.slice(1).split('-').map(Number);checkTyped(qd,L.practice[gi].items[ii]);});
function tog(id,cls){const b=document.getElementById(id);let on=true;try{on=localStorage.getItem('np-'+cls)!=="0"}catch(e){}
  const set=()=>{document.body.classList.toggle(cls,!on);b.setAttribute('aria-pressed',on)};set();
  b.addEventListener('click',()=>{on=!on;set();try{localStorage.setItem('np-'+cls,on?"1":"0")}catch(e){}});}
tog('pyBtn','hide-py'); tog('viBtn','hide-vi');

// trình chiếu: mỗi mục một màn, ← → / Space, A−/A+, Esc thoát
const secs=[...document.querySelectorAll('.sec')]; let cur=0, z=1.25;
try{z=+localStorage.getItem('np-z')||1.25}catch(e){}
function show(i){cur=Math.max(0,Math.min(secs.length-1,i));secs.forEach((s,k)=>s.classList.toggle('on',k===cur));$('#pnum').textContent=(cur+1)+" / "+secs.length;scrollTo(0,0)}
function present(on){document.body.classList.toggle('present',on);document.body.style.setProperty('--z',z);
  if(on){show(0);document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{});}
  else{secs.forEach(s=>s.classList.remove('on'));document.fullscreenElement&&document.exitFullscreen().catch(()=>{});}}
// (đã bỏ nút Trình chiếu theo ý cô, 28/09/2026)
document.querySelector('.pnav')?.addEventListener('click',e=>{const p=e.target.closest('button')?.dataset.p;if(!p)return;
  if(p==="x")present(false);else if(p[0]==="z"){z=Math.max(.9,Math.min(2,z+(p==="z+"?.1:-.1)));document.body.style.setProperty('--z',z);try{localStorage.setItem('np-z',z)}catch(e){}}else show(cur+ +p);});
addEventListener('keydown',e=>{if(!document.body.classList.contains('present'))return;
  if(e.key==="ArrowRight"||e.key===" "||e.key==="PageDown"){e.preventDefault();show(cur+1)}
  else if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();show(cur-1)}
  else if(e.key==="Escape")present(false);});
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&document.body.classList.contains('present'))present(false)});
})();

// Theme sáng/tối như các hộp khác
(function(){const r=document.documentElement,b=document.getElementById('themeBtn');if(!b)return;
 const cur=()=>r.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 const paint=()=>{b.textContent=cur()==='dark'?'☀︎':'☾'};paint();
 b.addEventListener('click',()=>{r.dataset.theme=cur()==='dark'?'light':'dark';try{localStorage.setItem('cb-theme',r.dataset.theme)}catch(e){};paint()});})();
