// Khung bài ngữ pháp 语法盒: đọc window.NP_LESSON (dữ liệu trong ngu-phap/<cấp>-<số>/index.html) và vẽ cả bài.
// Cần nạp trước: ../hsk-ngu-phap.js (danh mục chuẩn), ../bai-data.js (bài giảng có điểm này), ../co-bai.js (điểm đã có bài), ../../tro-choi/tts.js
(function(){
const L=window.NP_LESSON; if(!L)return;
const H=window.HSK_NP||{}, BAI=window.NP_BAI||[], READY=window.NP_READY||{}, BOOKS=window.NP_BOOKS||[];
// Cấp hiển thị = cấp theo ĐỀ CƯƠNG THI HSK MỚI 2025 (NP_LV25); mã bài 【三54】 vẫn theo danh mục 2021
const N25=window.HSK_NP25||{}, LV25=(window.NP_LV25||{})[L.code];
const CN="一二三四五六七八九", lv21=L.code?CN.indexOf(L.code[0])+1:0, lv=LV25&&LV25!=="?"?+LV25:lv21;
const THEM=(window.NP_THEM||{})[L.code];   // bài đề cương 2025 không ghi → xếp bổ sung ở cấp gần nhất
const lvTxt=LV25==="?"?(THEM?"HSK "+THEM+" · bổ sung":"ngoài đề cương mới"):"HSK "+(lv>6?"7–9":lv), lvHash=LV25==="?"?(THEM||"all"):lv;
const P25=[];Object.keys(N25).forEach(k=>N25[k].ds.forEach(d=>{if(d[4].includes(L.code))P25.push(d)}));  // các điểm đề cương mới có bài này
const LC=(window.NP_LVCOLOR||{})[THEM&&LV25==="?"?THEM:(lv>6?"7":lv)]; if(LC)document.documentElement.style.cssText=`--c:var(--${LC});--cs:var(--${LC}-s)`;
const GLY=(window.NP_GLYPH||{})[L.code];
const OFF={}; Object.values(H).forEach(x=>x.ds.forEach(d=>OFF[d[0]]=d));
Object.values(N25).forEach(x=>x.ds.forEach(d=>OFF["新"+d[0]]=["新"+d[0],d[2],d[1],d[3]]));   // bài chỉ có trong đề cương 2025
const SHORT={"301":"301句","boya":"博雅","yuedu":"阅读教程","tttc":"综合课本","ledu":"乐读"};
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const mk=s=>esc(s).replace(/\[([^\]]+)\]/g,'<mark>$1</mark>')          // [是] -> tô đậm phần trọng tâm
  .replace(/\{(\d)\|([^{}|]+)\}/g,'<span class="sg s$1">$2</span>');   // {2|把} -> tô cùng màu ô 2 của công thức
const zhw=s=>esc(s).replace(/([\u3400-\u9fff＿“”，。？！、…（）]+)/g,'<span class="zh">$1</span>');
const qvi=it=>it.vi?`<div class="qvi">${esc(it.vi)}</div>`:"";   // nghĩa tiếng Việt của đề bài (ẩn khi tắt nút Nghĩa)
const plain=s=>String(s).replace(/\{\d\|/g,'').replace(/[\[\]{}]/g,'');
const say=s=>{const t=plain(s).replace(/——/g,'，');return window.TTS&&(TTS.co(t)||("speechSynthesis" in window))?`<button type="button" class="spk" data-say="${esc(t)}" aria-label="Nghe câu này"><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#loa"/></svg></button>`:""};
const folder=c=>READY[c];
const $=s=>document.querySelector(s);
// Ghi nguồn ngắn gọn (cô yêu cầu 27/11/2026): chỉ bài có duyet:true trong data.js mới ghi tên cô
const DUYET=!!L.duyet;
const CO_CHUAN=[].concat(L.ex||[],...(L.rules||[]).map(r=>r.ex||[])).some(e=>e[3]==="等级标准");
const BAN_QUYEN=DUYET?"© ThS. Lã Thị Thuỳ Phương":"© 吕老师汉语盒";

function sent(e,i){ // e = [chữ Hán, pinyin, nghĩa, nguồn?]
  return `<div class="sn"><span class="no">${i!=null?"("+(i+1)+")":""}</span><div><div class="l1"><span class="z">${mk(e[0])}</span>${say(e[0])}${e[3]?`<span class="src">${esc(e[3])}</span>`:""}</div>
    <div class="p">${esc(e[1]||"")}</div><div class="v">${esc(e[2]||"")}</div></div></div>`;
}
const SEP=/^(·|\/|→|hoặc|,|，)$/;  // ô chỉ là dấu ngăn: không chèn "+" hai bên
function fx(f,color){let n=0;  // color: tô mỗi ô một màu, khớp với {n|…} trong câu ví dụ
  return `<div class="fx${color?" col":""}">${f.map((p,i)=>SEP.test(p[0])?`<span class="plus">${esc(p[0])}</span>`:(i&&!SEP.test(f[i-1][0])&&!/^\//.test(p[0])?'<span class="plus">+</span>':'')+`<span class="${p[1]==null?"k":""}${color?" s"+(++n):""}"><b>${esc(p[0])}</b>${p[1]?`<i>${esc(p[1])}</i>`:""}</span>`).join('')}</div>`}
let secN=0;
function sec(cls,zh,vi,body){secN++;return `<section class="sec ${cls}" id="m${secN}"><h2><span class="n">${secN}</span><span class="zh">${esc(zh)}</span>${esc(vi)}</h2>${body}</section>`}

// ---------- các mục ----------
const off=OFF[L.code]||[L.code,L.title,""];
let html=`<div class="np-bar"><nav class="np-crumb"><a href="../"><span class="zh">语法盒</span></a>›<a href="../#hsk-${lvHash}">${lvTxt}</a>›<span>【${esc(L.code)}】</span></nav>
</div>
 <div class="np-tools" role="group" aria-label="Hiện hoặc ẩn pinyin, nghĩa"><span class="lb">Hiện</span><button class="tg" id="pyBtn" type="button" aria-pressed="true" title="Bật / tắt pinyin dưới câu ví dụ">Pinyin</button><button class="tg" id="viBtn" type="button" aria-pressed="true" title="Bật / tắt nghĩa tiếng Việt dưới câu ví dụ">Nghĩa</button></div>`;
html+=`<section class="sec cover" id="m0"><div>${GLY?`<div class="gly n${Math.min(Array.from(GLY).length,4)}" aria-hidden="true">${esc(GLY)}</div>`:""}<div class="code"><b>${esc(lvTxt)}</b><span class="zh">${esc(L.tag||off[2])}</span> · 【${esc(L.code)}】</div>
  <h1>${esc(L.title).replace(/(“|”)/g,'<span class="qm">$1</span>')}</h1><div class="vi">${esc(L.vi)}</div>
  <p class="d25">${P25.length?`Đề thi HSK mới: ${P25.map(d=>`<a href="../#hsk-${d[0].split(".")[0]}"><b>HSK ${d[0].replace(/^7\./,"7–9 · ")}</b> ${esc(d[3].split(" — ")[0])}</a>`).join(" · ")}`:`Đề thi HSK mới (2025): ${LV25==="?"?"đề cương không ghi điểm này"+(THEM?" — xếp bổ sung ở HSK "+THEM:""):"thuộc HSK "+esc(LV25)}`}</p></div>
  <div class="goal"><h3>Mục tiêu</h3><ul>${(L.goals||[]).map(g=>`<li>${g}</li>`).join('')}</ul></div></section>`;

// Bài dùng chung nhiều cấp HSK: mỗi phần có cap:[cấp…] (đề cương 2025) → nhãn cấp + bảng "cấp nào học phần nào"
const TEN_CAP=c=>c===7?"7–9":c, nhanCap=r=>(r.cap||[]).map(c=>`<span class="cap kc${c}" data-c="${c}">HSK ${TEN_CAP(c)}</span>`).join('');
if(L.rules) html+=sec("lav","语法规则","Công thức & cách dùng",(L.intro?`<p>${L.intro}</p>`:"")+L.rules.map((r,i)=>`<div class="rule" id="p${i+1}"${r.cap&&r.cap.length?` data-cap="${r.cap.join(' ')}"`:""}><h3>${L.rules.length>1?`<span style="color:var(--sc)">${i+1}.</span>`:""}${esc(r.t)}${r.sub?`<small>${esc(r.sub)}</small>`:""}${nhanCap(r)}</h3>
  ${fx(r.fx,true)}${r.mean?`<div class="mean">${r.mean}</div>`:""}<div class="ex">${(r.ex||[]).map(e=>sent(e)).join('')}</div>${r.note?`<div class="note">${r.note}</div>`:""}</div>`).join('')
  +(L.notes||[]).map(n=>`<div class="note"><b class="t">${esc(n.t)}:</b> ${n.html}</div>`).join(''));

if(L.cmp) html+=sec("butter","汉越对比","So với tiếng Việt",`<div class="cmp">${L.cmp.map(c=>`<div class="row"><div class="vn">${esc(c.vn)}</div><div class="ar">→</div>
  <div class="cn"><span class="z">${mk(c.zh)}</span> ${c.ok===false?`<span class="no">${esc(c.tag||"")}</span>`:c.ok?'<span class="ok"><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#tick"/></svg></span>':""}<div style="font-size:14px;color:var(--sc)">${esc(c.py||"")}</div></div>${c.why?`<div class="why">${c.why}</div>`:""}</div>`).join('')}</div>`);

if(L.ex) html+=sec("sky","例句","Câu ví dụ",L.ex.map((e,i)=>sent(e,i)).join('')+(CO_CHUAN?`<p style="font-size:13px;color:var(--muted);margin-top:10px">“等级标准”: câu trong 应用解读本.</p>`:""));

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
// thứ tự theo đề cương mới (lần đầu xuất hiện), rồi đến các bài HSK 4+ / khác
const order=[];Object.keys(N25).sort().forEach(k=>N25[k].ds.forEach(d=>d[4].forEach(c=>{if(READY[c]&&!order.includes(c))order.push(c)})));
Object.keys(READY).sort((a,b)=>(CN.indexOf(a[0])-CN.indexOf(b[0]))||(parseInt(a.slice(1))-parseInt(b.slice(1)))).forEach(c=>{if(!order.includes(c))order.push(c)});
const at=order.indexOf(L.code), pv=order[at-1], nx=order[at+1];
const nm=c=>(OFF[c]||[c,c])[1].split("：")[0];
html+=`<div class="pn">${pv?`<a href="../${folder(pv)}/">← Bài trước<b>【${pv}】${esc(nm(pv))}</b></a>`:"<span></span>"}${nx?`<a class="nx" href="../${folder(nx)}/">Bài sau →<b>【${nx}】${esc(nm(nx))}</b></a>`:""}</div>
<p class="copy">${BAN_QUYEN}</p>`;
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
  if(acc.includes(u)){fb.className="fb ok";fb.innerHTML="<b><svg class=\"lli\" aria-hidden=\"true\"><use href=\"/chung/ic.svg?v=70219054#tick\"/></svg> Chính xác!</b>";inp.classList.add('ok');qd.querySelector('.ans').hidden=false;
    const b=qd.querySelector('[data-act=show]');if(b)b.textContent="Ẩn đáp án";return}
  let best={h:esc(u),score:-1};acc.forEach(a=>{const r=lcsMark(u,a);if(r.score>best.score)best=r});
  inp.classList.remove('ok');fb.className="fb no";
  fb.innerHTML=`<b><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#sai"/></svg> Chưa khớp đáp án mẫu.</b> Câu của em: <span class="zh tw">${best.h}</span>`
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
    fb.hidden=false; fb.className="fb "+(ok?"ok":"no"); fb.innerHTML=ok?`<b><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#tick"/></svg> Đúng rồi!</b> ${it.why||""}`:`<b><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#sai"/></svg> Chưa đúng.</b> Thử lại nhé.`; return;}
  const act=e.target.closest('[data-act]')?.dataset.act, line=qd.querySelector('.line'), pool=qd.querySelector('.pool');
  if(qd.dataset.type==="order"){
    const c=e.target.closest('.chip');
    if(c&&c.parentElement===pool){const n=c.cloneNode(true);n.dataset.from=c.dataset.k;line.appendChild(n);c.classList.add('used');fb.hidden=true;return;}
    if(c&&c.parentElement===line){pool.querySelector(`[data-k="${c.dataset.from}"]`).classList.remove('used');c.remove();fb.hidden=true;return;}
    if(act==="reset"){line.innerHTML="";pool.querySelectorAll('.chip').forEach(x=>x.classList.remove('used'));fb.hidden=true;ans.hidden=true;return;}
    if(act==="check"){const strip=s=>s.replace(/[，。？！、,.?!\s]/g,'');
      const got=strip([...line.children].map(x=>x.textContent).join('')), ok=[it.a].concat(it.alt||[]).some(a=>strip(a)===got);
      fb.hidden=false; fb.className="fb "+(ok?"ok":"no");
      fb.innerHTML=ok?"<b><svg class=\"lli\" aria-hidden=\"true\"><use href=\"/chung/ic.svg?v=70219054#tick\"/></svg> Chính xác!</b>":(pool.querySelector('.chip:not(.used)')?"<b>Chưa xong</b> — còn thẻ chưa dùng.":"<b><svg class=\"lli\" aria-hidden=\"true\"><use href=\"/chung/ic.svg?v=70219054#sai\"/></svg> Chưa đúng.</b> Bấm vào thẻ ở dòng trên để đưa về, rồi xếp lại."); return;}
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

// ---------- Cấp HSK của từng phần (bài dùng chung) ----------
(function(){
  const co=(L.rules||[]).filter(r=>r.cap&&r.cap.length), muc=P25.slice().sort((a,b)=>parseFloat(a[0])-parseFloat(b[0]));
  const caps=[...new Set(muc.map(d=>+d[0].split('.')[0]))];
  if(!co.length||caps.length<2)return;
  const SAN=window.NP_READY||{};
  // chữ có trong bài này (bỏ dấu tô màu) → từ nào của đề cương được dạy ở bài khác thì làm mờ và dẫn sang bài đó
  const chu=JSON.stringify([L.title,L.intro,L.goals,L.rules,L.notes,L.cmp,L.ex,L.errs,L.practice]).replace(/\{\d\|/g,'').replace(/[{}\[\]|]/g,'');
  function dong(d){const zh=d[2],i=zh.indexOf('：'),khac=d[4].filter(c=>c!==L.code&&SAN[c]);let thieu=false,html=esc(zh);
    if(i>0&&!/[＋+“”？！]|主语|动词|形容词/.test(zh))html=esc(zh.slice(0,i+1))+zh.slice(i+1).split(/([、；，,：])/).map(m=>{
      const w=m.replace(/（.*?）|\(.*?\)|[—…\-]/g,'').trim();
      if(/^[㐀-鿿]{1,4}$/.test(w)&&!chu.includes(w)&&khac.length){thieu=true;return `<i class="vang">${esc(m)}</i>`}return esc(m)}).join('');
    return {html:`<span class="zh" lang="zh">${html}</span>`,khac:thieu?khac:[]}}
  const bang=document.createElement('div');bang.className='np-cap';
  bang.innerHTML=`<h2>Bài chung HSK ${caps.map(TEN_CAP).join(' · ')}<span class="zh" lang="zh">分级学习</span></h2><p>Bấm một cấp để làm nổi phần cần học của cấp đó.</p><div class="ds">${caps.map(c=>{
    const phan=L.rules.map((r,i)=>(r.cap||[]).includes(c)?i+1:0).filter(Boolean), ds=muc.filter(d=>+d[0].split('.')[0]===c).map(dong),
      khac=[...new Set(ds.flatMap(x=>x.khac))];
    return `<div class="hang kc${c}"><button type="button" class="mo" data-c="${c}" aria-pressed="false"><b>HSK ${TEN_CAP(c)}</b><span class="nd">${ds.map(x=>x.html).join('')}</span><em>${phan.length?'Phần '+phan.join(', '):'Xem cả bài'}</em></button>${
      khac.length?`<p class="them">Chữ mờ học ở bài ${khac.map(k=>`<a href="../${SAN[k]}/">【${esc(k)}】</a>`).join(' ')}</p>`:''}</div>`}).join('')}</div>`;
  $('#m0').after(bang);
  let dang=0;
  function chon(c,cuon){dang=c;
    bang.querySelectorAll('.mo').forEach(b=>{const on=+b.dataset.c===c;b.setAttribute('aria-pressed',on);b.parentNode.classList.toggle('on',on)});
    document.querySelectorAll('#np .rule').forEach(r=>{const a=(r.dataset.cap||'').split(' ').map(Number);r.classList.toggle('cap-on',!!c&&a.includes(c))});
    document.querySelectorAll('#np .rule .cap').forEach(x=>x.classList.toggle('on',+x.dataset.c===c));
    if(cuon&&c){const r=document.querySelector('#np .rule.cap-on');if(r)r.scrollIntoView({behavior:'smooth',block:'center'})}}
  bang.addEventListener('click',e=>{const b=e.target.closest('.mo');if(b)chon(+b.dataset.c===dang?0:+b.dataset.c,+b.dataset.c!==dang)});
  const q=+new URLSearchParams(location.search).get('cap');if(caps.includes(q))chon(q,false);
})();

// ---------- Giao bài / làm nhiệm vụ (chung/nhiem-vu.js) ----------
(function(){
  if(!window.NV)return;
  const ten=`【${L.code}】${L.title}`;
  NV.tenBai=ten;
  if(!NV.dangLam)return;
  const qzs=[...document.querySelectorAll('#np .qz')], lay=qd=>{const [gi,ii]=qd.id.slice(1).split('-').map(Number);return L.practice[gi].items[ii]};
  const items=qzs.map(qd=>{const [gi,ii]=qd.id.slice(1).split('-').map(Number),it=lay(qd);
    return {id:qd.id,el:qd,label:`${L.practice[gi].t.split('.')[0]}${ii+1}: ${it.q||it.vi||it.a}`}});
  qzs.forEach(qd=>{ if(qd.dataset.type!=="show"||qd.querySelector('.tin'))return;   // câu mở: viết câu trả lời rồi mới xem đáp án
    const t=document.createElement('textarea');t.className='nv-tl';t.rows=2;t.placeholder='Viết câu trả lời của em…';t.setAttribute('aria-label','Câu trả lời của em');qd.querySelector('.acts').before(t);
    t.addEventListener('input',()=>{const v=t.value.trim();if(v.length>=2){qd.classList.add('nv-tried');NV.ghi(qd.id,{xong:true,dung:null,tl:v})}});});
  function xet(qd,e){const it=lay(qd),type=qd.dataset.type,fb=qd.querySelector('.fb'),act=e.target.closest('[data-act]')?.dataset.act;
    if(type==="choice"){const b=e.target.closest('.opt');if(!b)return;const k=+b.dataset.k,ok=k===it.a;NV.ghi(qd.id,{xong:ok,dung:ok,tl:ok?undefined:it.o[k]});return}
    if(type==="order"){
      if(act==="check"&&!qd.querySelector('.pool .chip:not(.used)')){const ok=fb.classList.contains('ok');qd.classList.add('nv-tried');
        NV.ghi(qd.id,{xong:ok,dung:ok,tl:ok?undefined:[...qd.querySelector('.line').children].map(x=>x.textContent).join('')})}
      else if(act==="show"&&qd.classList.contains('nv-tried'))NV.ghi(qd.id,{xong:true});return}
    const inp=qd.querySelector('.tin');if(inp&&(act==="type"||e.type==="keydown")){const v=inp.value.trim();if(!/[\u3400-\u9fff]/.test(v))return;
      const ok=qd.querySelector('.typ + .fb').classList.contains('ok');qd.classList.add('nv-tried');NV.ghi(qd.id,{xong:true,dung:ok,tl:ok?undefined:v})}}
  document.addEventListener('click',e=>{const qd=e.target.closest('.qz');if(qd)xet(qd,e)});
  document.addEventListener('keydown',e=>{if(e.key!=="Enter"||e.isComposing||!e.target.classList?.contains('tin'))return;xet(e.target.closest('.qz'),e)});
  const secs=[...document.querySelectorAll('#np > .sec')].filter(s=>!s.querySelector('.qz')&&!s.classList.contains('mint'));
  NV.bat({title:ten,sections:secs.map(s=>({el:s,name:s.querySelector('h2')?s.querySelector('h2').lastChild.textContent.trim():'Mở đầu · mục tiêu'})),items});
})();

// ---------- In bài: CHỈ giáo viên (cô yêu cầu 28/09/2026) ----------
const IN_BAI=false;   // cô tạm gác việc in (28/09/2026) — đổi thành true để bật lại (cả dòng NP_IN trong ngu-phap/index.html)
if(IN_BAI)(async()=>{document.body.classList.add('np-in');
  if(window.NV&&await NV.laCo){document.body.classList.add('gv');printUI();}})();
function printUI(){
  const dock=document.querySelector('.np-tools');
  dock.insertAdjacentHTML('beforeend',`<button class="tg pr" id="prBtn" type="button" aria-haspopup="menu" aria-expanded="false" title="In bài (chỉ giáo viên)">In</button>
    <div class="prm" role="menu" hidden><b>In bài 【${esc(L.code)}】</b><button type="button" role="menuitem" data-pr="tt">Tóm tắt<small>công thức · ví dụ · lỗi sai</small></button>
    <button type="button" role="menuitem" data-pr="pbt">Phiếu bài tập<small>để phát cho học sinh</small></button><button type="button" role="menuitem" data-pr="da">Phiếu + đáp án<small>đáp án ở trang riêng</small></button></div>`);
  const btn=$('#prBtn'), m=dock.querySelector('.prm');
  const shut=()=>{m.hidden=true;btn.setAttribute('aria-expanded','false')};
  btn.addEventListener('click',e=>{e.stopPropagation();m.hidden=!m.hidden;btn.setAttribute('aria-expanded',!m.hidden)});
  document.addEventListener('click',e=>{if(!e.target.closest('.prm'))shut()});
  m.addEventListener('click',e=>{const k=e.target.closest('[data-pr]')?.dataset.pr;if(!k)return;shut();doPrint(k)});
}
function shuf(it,gi,ii){let w=it.w.slice(),s=gi*7+ii*13+3;for(let k=w.length-1;k>0;k--){s=(s*9301+49297)%233280;const j=s%(k+1);[w[k],w[j]]=[w[j],w[k]];}
  if(w.join("")===it.w.join(""))w.push(w.shift());return w}
function doPrint(kind){
  const P=s=>esc(plain(s)), Z=s=>`<span class="zh">${P(s)}</span>`, ABC="ABCDEF";
  const fxT=f=>f.map((p,i)=>SEP.test(p[0])?` ${esc(p[0])} `:(i&&!SEP.test(f[i-1][0])&&!/^\//.test(p[0])?" + ":"")+(p[1]==null?`<b>${esc(p[0])}</b>`:esc(p[0]))).join('');
  let h=`<div class="ph"><div class="brand">吕老师汉语盒 · 语法盒 · ${esc(lvTxt)} · lyulaoshi.com</div><h1>【${esc(L.code)}】<span class="zh">${esc(L.title)}</span></h1><div class="pvi">${esc(L.vi)}</div>
    ${kind==="tt"?"":`<div class="who"><span>Họ tên: </span><span>Lớp: </span><span>Ngày: </span></div>`}</div>`;
  if(kind==="tt"){
    h+=`<h2>Công thức</h2>`+(L.rules||[]).map((r,i)=>`<div class="pr-rule"><div class="rt">${L.rules.length>1?(i+1)+". ":""}${esc(r.t)}</div><div class="pfx">${fxT(r.fx)}</div>${r.mean?`<div class="mn">${r.mean}</div>`:""}
      <ul>${(r.ex||[]).slice(0,2).map(e=>`<li>${Z(e[0])} <i>${esc(e[1]||"")}</i> — ${esc(e[2]||"")}</li>`).join('')}</ul></div>`).join('')
      +(L.notes||[]).map(n=>`<div class="mn"><b>${esc(n.t)}:</b> ${n.html}</div>`).join('');
    if(L.errs)h+=`<h2>Lỗi hay gặp</h2><ul class="perr">${L.errs.map(e=>`<li><s><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#sai"/></svg> ${Z(e.bad)}</s> → <svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#tick"/></svg> ${Z(e.good)} <span class="mn">${e.why}</span></li>`).join('')}</ul>`;
  }else{
    const ans=[];
    (L.practice||[]).forEach((g,gi)=>{h+=`<h2>${esc(g.t)}</h2><ol class="pq">`;const aa=[];
      g.items.forEach((it,ii)=>{
        const vi=it.vi&&/[㐀-鿿]/.test(it.q||"")?`<div class="pv">${esc(it.vi)}</div>`:"";
        if(g.type==="choice"){const ds=it.o.length===2&&it.o[0]==="Đúng";
          h+=`<li><div class="qq">${/[㐀-鿿]/.test(it.q)&&!/[a-zà-ỹ]{3}/i.test(it.q)?Z(it.q):zhw(it.q)}</div>${vi}`+(ds?`<div class="po"><i class="o"></i> Đúng　　<i class="o"></i> Sai　　Sửa lại: <span class="wl-i"></span></div>`
            :`<div class="po">${it.o.map((o,k)=>`<span>${ABC[k]}. ${Z(o)}</span>`).join('')}</div>`)+`</li>`;
          aa.push(ds?(it.a===0?"Đúng":"Sai — "+esc(it.why||"")):`${ABC[it.a]}. ${Z(it.o[it.a])}`);}
        else if(g.type==="order"){h+=`<li><div class="qq">${esc(it.vi||"Sắp xếp thành câu đúng")}</div><div class="chips">${shuf(it,gi,ii).map(x=>`<span>${P(x)}</span>`).join('')}</div><div class="wl"></div></li>`;aa.push(Z(it.a));}
        else{h+=`<li><div class="qq">${it.ask?esc(it.ask)+": ":""}${/[㐀-鿿]/.test(it.q)&&!/[a-zà-ỹ]{3}/i.test(it.q)?Z(it.q):zhw(it.q)}</div>${vi}<div class="wl"></div></li>`;aa.push(Z(String(it.a).split(/\s*\/\s*/).join(" / ")));}
      });h+=`</ol>`;ans.push([g.t,aa]);});
    if(kind==="da")h+=`<div class="pda"><h1>Đáp án · 【${esc(L.code)}】<span class="zh">${esc(L.title)}</span></h1>${ans.map(([t,aa])=>`<h2>${esc(t)}</h2><ol>${aa.map(a=>`<li>${a}</li>`).join('')}</ol>`).join('')}</div>`;
  }
  h+=`<div class="pfoot">${DUYET?"© ThS. Lã Thị Thuỳ Phương · ":"© "}吕老师汉语盒 lyulaoshi.com</div>`;
  let ps=$('#printSheet');if(!ps){ps=document.createElement('div');ps.id='printSheet';document.body.appendChild(ps)}
  ps.innerHTML=h;document.body.classList.add('printing');
  const done=()=>{document.body.classList.remove('printing');removeEventListener('afterprint',done)};addEventListener('afterprint',done);
  setTimeout(()=>print(),60);
}

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
 const paint=()=>{b.innerHTML='<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#'+(cur()==='dark'?'mattroi':'trang')+'"/></svg>'};paint();
 b.addEventListener('click',()=>{r.dataset.theme=cur()==='dark'?'light':'dark';try{localStorage.setItem('cb-theme',r.dataset.theme)}catch(e){};paint()});})();
