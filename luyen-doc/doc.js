// 阅读盒 — mục lục + trang đọc (29/09/2026). Link: #<id bài>. Dữ liệu: bai-doc.js (LD_BAI).
// Trang đọc chỉ có văn bản + thanh công cụ dưới (Pinyin · Nghĩa · Nghe karaoke · Aa). Chạm từ → thẻ từ (nghe, thanh điệu, lưu, ngữ pháp).
// Đọc xong → tốc độ đọc, câu hỏi, từ mới (→ 词汇盒), ngữ pháp (→ 语法盒), bài tiếp. Lưu localStorage "ld-…".
(function(){
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const IC=(n,c)=>`<svg class="lli${c?" "+c:""}" aria-hidden="true"><use href="/chung/ic.svg?v=893338cb#${n}"></use></svg>`;
const DS=window.LD_BAI||[];
const PUNC=/^[，。？！、：；“”（）…]+$/;
const T1="āēīōūǖ",T2="áéíóúǘ",T3="ǎěǐǒǔǚ",T4="àèìòùǜ";
const SYL=/(zh|ch|sh|[bpmfdtnlgkhjqxzcsrwy])?[aeiouüvāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+(ng(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔù])|n(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔùg])|r(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔù]))?/gi;
const thanh=s=>{for(const c of s){if(T1.includes(c))return 1;if(T2.includes(c))return 2;if(T3.includes(c))return 3;if(T4.includes(c))return 4}return 0};
const pyMau=p=>esc(p).replace(SYL,m=>`<i class="t${thanh(m)}">${m}</i>`);
const store={get(k,d){try{const v=localStorage.getItem("ld-"+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem("ld-"+k,JSON.stringify(v))}catch(e){}}};
// cấp HSK (đề cương 2025) và tên điểm ngữ pháp
const LV={};Object.entries(window.HSK||{}).forEach(([k,v])=>v.forEach(([w])=>{if(!(w in LV))LV[w]=+k}));
const NPN={};Object.values(window.HSK_NP||{}).forEach(c=>(c.ds||[]).forEach(([m,zh,g,vi])=>NPN[m]=vi||zh));
const npDir=c=>({"一":"1","二":"2","三":"3","四":"4","五":"5"}[c[0]]||"")+"-"+c.slice(1);
const laSo=w=>/^[零一二三四五六七八九十百两]+$/.test(w)||/^星期[一二三四五六日天]$/.test(w);
// tách bài thành câu → từ
function tach(B){return B.cau.map(([zh,py,vi,np],ci)=>{const a=zh.split(/\s+/),p=py.split(/\s+/);let j=0;
  const tu=a.map(w=>{if(PUNC.test(w)){if(PUNC.test(p[j]||""))j++;return{w,dau:1}}const r={w,py:p[j]||""};j++;return r});
  return{ci,tu,vi,np:np||[],zh:a.join(""),py:p.filter(x=>!PUNC.test(x)).join(" ")}})}
const moi=(B,w)=>!laSo(w)&&!(B.rieng||[]).includes(w)&&(LV[w]==null||LV[w]>B.cap);
const soChu=B=>B.cau.reduce((n,c)=>n+c[0].replace(/[\s，。？！、：；“”（）…]/g,"").length,0);

/* ============ MỤC LỤC ============ */
function mucLuc(){
  const xong=store.get("xong",{}),doDo=store.get("do",null);
  $("#stBai").textContent=DS.length;$("#stXong").textContent=DS.filter(b=>xong[b.id]).length;
  const best=Math.max(0,...Object.values(xong).map(x=>x.cpm||0));$("#stTd").textContent=best||"—";
  const go=$("#lhGo");const tiep=doDo&&DS.find(b=>b.id===doDo)||DS.find(b=>!xong[b.id])||DS[0];if(tiep){go.href="#"+tiep.id;go.innerHTML=(doDo&&!xong[doDo]?"Đọc tiếp: ":"Đọc ngay: ")+`<span class="zh">${esc(tiep.ten)}</span> `+IC("sau")}
  const caps=[...new Set(DS.map(b=>b.cap))].sort();
  $("#ke").innerHTML=caps.map(c=>`<h2 class="kh">HSK ${c}</h2><div class="the-ds">${DS.filter(b=>b.cap===c).map(b=>{const x=xong[b.id];
    return`<a class="the" href="#${b.id}"><span class="t-cap">HSK ${b.cap}</span><span class="t-ten zh">${esc(b.ten)}</span><span class="t-vi">${esc(b.tenVi)}</span>
      <span class="t-meta">${soChu(b)} chữ · ${esc(b.chude)}${x?` · <b class="xong">${IC("tick")}đã đọc${x.cpm?` · ${x.cpm} chữ/phút`:""}</b>`:""}</span></a>`}).join("")}</div>`).join("");
}

/* ============ TRANG ĐỌC ============ */
let B,C,T0,tDoc=0,phat=null,chon=null;
const OPT=store.get("opt",{py:false,vi:false,co:1,toc:.85});
function moBai(id){
  B=DS.find(b=>b.id===id);if(!B){location.hash="";return}
  C=tach(B);store.set("do",B.id);dungNghe();
  document.title=B.ten+" · 阅读盒 – 吕老师汉语盒";
  $("#home").hidden=true;$("#doc").hidden=false;document.body.classList.add("dang-doc");
  $("#dTen").innerHTML=`<span class="zh">${esc(B.ten)}</span> <small>${esc(B.tenVi)}</small>`;
  $("#dMeta").textContent=`HSK ${B.cap} · ${soChu(B)} chữ · khoảng ${Math.max(1,Math.round(soChu(B)/60))} phút`;
  $("#van").innerHTML=C.map(c=>`<p class="cau" data-c="${c.ci}"><span class="zhc">${c.tu.map((t,k)=>t.dau?`<span class="dau">${esc(t.w)}</span>`:
    `<span class="w${moi(B,t.w)?" moi":""}" data-k="${k}"><ruby>${esc(t.w)}<rt>${pyMau(t.py)}</rt></ruby></span>`).join("")}</span><span class="vic">${esc(c.vi)}</span></p>`).join("");
  $("#ketThuc").innerHTML=`<button class="btn hot" type="button" id="xongBtn">${IC("tick")}Đọc xong</button><p class="muted">Bấm khi em đọc hết bài, máy tính tốc độ đọc cho em.</p>`;
  $("#xongBtn").onclick=docXong;
  apOpt();T0=performance.now();tDoc=0;scrollTo({top:0});dongThe();
  if(GHI.rec)dungGhi();anKq();GHI.seg=null;GHI.blob=null;
}
function apOpt(){const d=$("#doc");d.classList.toggle("co-py",OPT.py);d.classList.toggle("co-vi",OPT.vi);d.style.setProperty("--co",OPT.co);
  $("#bPy").setAttribute("aria-pressed",OPT.py);$("#bVi").setAttribute("aria-pressed",OPT.vi);
  const muc=[.85,1,1.15,1.3].findIndex(x=>Math.abs(x-OPT.co)<.01);document.querySelectorAll("#coCham i").forEach((x,i)=>x.classList.toggle("on",i<=muc));store.set("opt",OPT)}
$("#bPy").onclick=()=>{OPT.py=!OPT.py;apOpt()};$("#bVi").onclick=()=>{OPT.vi=!OPT.vi;apOpt()};
$("#bCo").onclick=()=>{OPT.co=OPT.co>=1.3?.85:+(OPT.co+.15).toFixed(2);apOpt()};
// ---- thẻ từ (bảng dưới)
document.addEventListener("click",e=>{
  const w=e.target.closest("#van .w");
  if(w){const ci=+w.closest(".cau").dataset.c,k=+w.dataset.k;if(phat)return;moThe(ci,k);return}
  if(!e.target.closest("#the")&&!e.target.closest(".thanh-cu")&&$("#the").classList.contains("mo"))dongThe();
});
function moThe(ci,k){
  const c=C[ci],t=c.tu[k],luu=store.get("luu",[]),lv=LV[t.w];chon={ci,k};
  document.querySelectorAll("#van .chon,#van .chonc").forEach(x=>x.classList.remove("chon","chonc"));
  document.querySelector(`#van .cau[data-c="${ci}"]`).classList.add("chonc");document.querySelector(`#van .cau[data-c="${ci}"] .w[data-k="${k}"]`).classList.add("chon");
  const ngan=(c.py.match(SYL)||[]).length<=10;
  $("#the").innerHTML=`<div class="th-dau"><span class="th-zh zh">${esc(t.w)}</span><span class="th-py">${pyMau(t.py)}</span>
      <span class="th-cap">${laSo(t.w)||(B.rieng||[]).includes(t.w)?"":lv?"HSK "+lv:"ngoài HSK 1–6"}</span><button class="th-x" type="button" aria-label="Đóng">${IC("sai")}</button></div>
    <div class="th-vi">${esc(B.tu[t.w]||"")}</div>
    <div class="th-nut"><button type="button" data-a="nghe-tu">${IC("loa")}Nghe</button><button type="button" data-a="td-tu">${IC("thanh-dieu")}Thanh điệu</button>
      <button type="button" data-a="luu" aria-pressed="${luu.includes(t.w)}">${IC(luu.includes(t.w)?"sao":"sao-rong")}${luu.includes(t.w)?"Đã lưu":"Lưu từ"}</button></div>
    <div class="th-cau"><span>Cả câu:</span><button type="button" data-a="nghe-cau">${IC("loa")}Nghe câu</button>${GHI.seg?`<button type="button" data-a="so-cau">${IC("so")}So câu này</button>`:""}${ngan?`<button type="button" data-a="td-cau">${IC("thanh-dieu")}Luyện thanh điệu câu</button>`:""}</div>
    ${c.np.length?`<div class="th-np"><span>Ngữ pháp trong câu:</span>${c.np.map(m=>`<a href="../ngu-phap/${npDir(m)}/" target="_blank" rel="noopener">【${m}】${esc(NPN[m]||"")} ${IC("sau")}</a>`).join("")}</div>`:""}`;
  $("#the").classList.add("mo");
  // cuộn để câu đang chọn nằm phía trên thẻ từ, không bị che
  requestAnimationFrame(()=>{const w=document.querySelector("#van .w.chon"),th=$("#the").getBoundingClientRect();if(!w)return;const r=w.getBoundingClientRect(),day=th.top-16;
    if(r.bottom>day||r.top<70)scrollBy({top:r.bottom>day?r.bottom-day+30:r.top-90,behavior:"smooth"})});
}
function dongThe(){$("#the").classList.remove("mo");document.querySelectorAll("#van .chon,#van .chonc").forEach(x=>x.classList.remove("chon","chonc"));chon=null}
$("#the").addEventListener("click",e=>{
  if(e.target.closest(".th-x")){dongThe();return}
  const a=e.target.closest("[data-a]");if(!a||!chon)return;const c=C[chon.ci],t=c.tu[chon.k];
  if(a.dataset.a==="nghe-tu")noi(t.w,OPT.toc);
  if(a.dataset.a==="nghe-cau")noi(c.zh,OPT.toc);
  if(a.dataset.a==="so-cau")soCau(chon.ci);
  if(a.dataset.a==="td-tu"&&window.THANHDIEU)THANHDIEU.mo(t.w,t.py);
  if(a.dataset.a==="td-cau"&&window.THANHDIEU)THANHDIEU.mo(c.zh,c.py);
  if(a.dataset.a==="luu"){let l=store.get("luu",[]);l=l.includes(t.w)?l.filter(x=>x!==t.w):[...l,t.w];store.set("luu",l);moThe(chon.ci,chon.k)}
});
// ---- giọng máy + karaoke
let VOICE=null;function pick(){const v=speechSynthesis.getVoices().filter(v=>/^(zh|cmn)/i.test(v.lang)&&!/TW|HK|yue/i.test(v.lang));VOICE=v.find(x=>/google/i.test(x.name))||v.find(x=>/tingting/i.test(x.name))||v[0]||null}
if("speechSynthesis" in window){pick();speechSynthesis.addEventListener("voiceschanged",pick)}else $("#bNghe").hidden=true;
function noi(t,rate,onb){return new Promise(res=>{if(!("speechSynthesis" in window)){res();return}speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(t);u.lang="zh-CN";if(VOICE)u.voice=VOICE;u.rate=rate||.85;let xong=false;const fin=()=>{if(!xong){xong=true;clearTimeout(to);res()}};
  const to=setTimeout(fin,2000+t.length*420/u.rate);u.onend=fin;u.onerror=fin;if(onb)u.onboundary=onb;speechSynthesis.speak(u)})}
async function nghe(){
  if(phat){dungNghe();return}
  dongThe();const me=phat={t:performance.now()};$("#bNghe").innerHTML='<span class="nghe-o">'+IC("tam-dung")+"</span><span>Dừng</span>";$("#bNghe").setAttribute("aria-pressed","true");$("#tocBar").hidden=false;
  const tu=document.querySelector("#van .cau.dang");let tu0=tu?+tu.dataset.c:0;
  for(let ci=tu0;ci<C.length&&phat===me;ci++){
    const p=document.querySelector(`#van .cau[data-c="${ci}"]`),ws=[...p.querySelectorAll(".w,.dau")],c=C[ci];
    document.querySelectorAll("#van .dang,#van .da").forEach(x=>x.classList.remove("dang"));p.classList.add("dang");ws.forEach(x=>x.classList.remove("da"));
    p.scrollIntoView({block:"center",behavior:"smooth"});
    // vị trí ký tự bắt đầu của từng từ → tô dần theo sự kiện ranh giới (nếu giọng có), không thì theo thời gian ước lượng
    const pos=[];let n=0;c.tu.forEach(t=>{pos.push(n);n+=t.w.length});
    let coBd=false;const to=(ch)=>{ws.forEach((x,i)=>x.classList.toggle("da",pos[i]<=ch))};
    const t0=performance.now(),dur=c.zh.length*300/OPT.toc;
    const tm=setInterval(()=>{if(!coBd)to(Math.floor((performance.now()-t0)/dur*c.zh.length))},90);
    await noi(c.zh,OPT.toc,e=>{coBd=true;to(e.charIndex)});clearInterval(tm);to(99);
    await new Promise(r=>setTimeout(r,300));
  }
  if(phat===me)dungNghe(true);
}
function dungNghe(het){if(!phat)return;tDoc+=0;const d=performance.now()-phat.t;T0+=d;phat=null;if("speechSynthesis" in window)speechSynthesis.cancel();
  document.querySelectorAll("#van .da").forEach(x=>x.classList.remove("da"));if(het)document.querySelectorAll("#van .dang").forEach(x=>x.classList.remove("dang"));
  $("#bNghe").innerHTML='<span class="nghe-o">'+IC("phat")+"</span><span>Nghe</span>";$("#bNghe").setAttribute("aria-pressed","false");$("#tocBar").hidden=true}
$("#bNghe").onclick=nghe;
$("#tocBar").onclick=e=>{const b=e.target.closest("[data-toc]");if(!b)return;OPT.toc=+b.dataset.toc;store.set("opt",OPT);
  $("#tocBar").querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b))};

/* ============ ĐỌC TO: tính giờ + ghi âm cả bài + đối chiếu từng câu ============ */
// Ghi bằng MediaRecorder, đồng thời đo độ to mỗi 50 ms để tìm chỗ ngừng → tách bản ghi thành từng câu.
const GHI={rec:null,blob:null,url:null,seg:null,dai:0,chay:null};
const mmss=t=>{t=Math.round(t);return Math.floor(t/60)+":"+String(t%60).padStart(2,"0")};
async function batDauGhi(){
  if(GHI.rec){dungGhi();return}
  dungNghe(true);dongThe();anKq();
  let st;try{st=await navigator.mediaDevices.getUserMedia({audio:true})}
  catch(e){alert("Chưa dùng được micro. Em bấm biểu tượng ổ khoá cạnh thanh địa chỉ, cho phép micro rồi thử lại nhé.");return}
  const ac=new (window.AudioContext||window.webkitAudioContext)(),an=ac.createAnalyser();an.fftSize=1024;ac.createMediaStreamSource(st).connect(an);
  const buf=new Float32Array(an.fftSize),env=[],ch=[],rec=new MediaRecorder(st);rec.ondataavailable=e=>ch.push(e.data);
  const t0=performance.now();rec.start();
  const tm=setInterval(()=>{an.getFloatTimeDomainData(buf);let r=0;for(const v of buf)r+=v*v;env.push(Math.sqrt(r/buf.length));$("#ghiGio").textContent=mmss((performance.now()-t0)/1000)},50);
  GHI.rec={rec,st,ac,tm,env,ch,t0};
  $("#bDoc").setAttribute("aria-pressed","true");$("#bDoc").querySelector("span:last-child").textContent="Dừng";$("#ghiBar").hidden=false;$("#ghiGio").textContent="0:00";
}
function dungGhi(){
  const g=GHI.rec;if(!g)return;GHI.rec=null;clearInterval(g.tm);
  g.rec.onstop=()=>{GHI.blob=new Blob(g.ch,{type:g.rec.mimeType||"audio/webm"});if(GHI.url)URL.revokeObjectURL(GHI.url);GHI.url=URL.createObjectURL(GHI.blob);
    GHI.dai=(performance.now()-g.t0)/1000;GHI.seg=tachCau(g.env,C.map(c=>c.zh.replace(/[，。？！、：；“”（）…]/g,"").length));hienKq()};
  g.rec.stop();g.st.getTracks().forEach(t=>t.stop());g.ac.close();
  $("#bDoc").setAttribute("aria-pressed","false");$("#bDoc").querySelector("span:last-child").textContent="Ghi âm";$("#ghiBar").hidden=true;
}
// env: độ to từng khung 50 ms; soChu: số chữ từng câu → [[bắt đầu, kết thúc] giây] cho mỗi câu
function tachCau(env,soChu){
  const F=.05,s=[...env].sort((a,b)=>a-b),p95=s[Math.floor(s.length*.95)]||0,thr=Math.max(.008,p95*.12),co=env.map(v=>v>thr);
  let a=co.indexOf(true),b=co.lastIndexOf(true);if(a<0)return null;
  const lang=[];let i=a;while(i<=b){if(!co[i]){let j=i;while(j<=b&&!co[j])j++;if(j-i>=5)lang.push([i,j]);i=j}else i++}   // chỗ ngừng ≥ 250 ms
  const N=soChu.length;let moc;
  if(lang.length>=N-1){moc=lang.sort((x,y)=>(y[1]-y[0])-(x[1]-x[0])).slice(0,N-1).sort((x,y)=>x[0]-y[0])}
  else{const tong=soChu.reduce((x,y)=>x+y,0);let c=0;moc=soChu.slice(0,-1).map(n=>{c+=n;const k=Math.round(a+(b-a)*c/tong);return[k,k]})}
  const seg=[];let st=a;moc.forEach(([x,y])=>{seg.push([st*F,x*F]);st=y});seg.push([st*F,(b+1)*F]);
  return seg.map(([x,y])=>[Math.max(0,x-.12),y+.15]);
}
const AU=new Audio();let choi=0;
function phatDoan(x,y){return new Promise(r=>{const me=++choi;AU.src=GHI.url;const go=()=>{AU.currentTime=x;AU.play().catch(r);
  const k=setInterval(()=>{if(me!==choi||AU.currentTime>=y||AU.ended){clearInterval(k);if(me===choi)AU.pause();r()}},40)};
  if(AU.readyState>=1)go();else AU.onloadedmetadata=()=>{AU.onloadedmetadata=null;go()}})}
const sang=ci=>{document.querySelectorAll("#van .dang").forEach(x=>x.classList.remove("dang"));if(ci==null)return;const p=document.querySelector(`#van .cau[data-c="${ci}"]`);if(p){p.classList.add("dang");p.scrollIntoView({block:"center",behavior:"smooth"})}};
let dangSo=0;
async function soCau(ci,me){me=me||++dangSo;sang(ci);await noi(C[ci].zh,OPT.toc);if(me!==dangSo)return;await new Promise(r=>setTimeout(r,250));const [x,y]=GHI.seg[ci];await phatDoan(x,y)}
function dungPhat(){dangSo++;choi++;AU.pause();if("speechSynthesis" in window)speechSynthesis.cancel();sang(null)}
function hienKq(){
  const cpm=Math.round(soChu(B)/Math.max(GHI.dai/60,.05)),bt=store.get("docto",{}),cu=bt[B.id];
  const voi=cpm>350;   // nhanh quá mức đọc thật → chắc chưa đọc hết bài, không ghi kỷ lục
  if(!voi&&(!cu||GHI.dai<cu))bt[B.id]=GHI.dai;store.set("docto",bt);
  $("#ghiKq").innerHTML=`<div class="gk-dau"><b>Bản đọc của em</b><button class="th-x" type="button" data-g="x" aria-label="Đóng">${IC("sai")}</button></div>
    <div class="gk-so"><div><b>${mmss(GHI.dai)}</b>thời gian</div><div><b>${cpm}</b>chữ/phút</div><div><b>${cu?mmss(cu):"—"}</b>lần nhanh nhất trước</div></div>
    ${voi?`<p class="gk-nhac">Nhanh quá! Em đã đọc hết bài chưa? Lần này máy không ghi kỷ lục.</p>`:cu&&GHI.dai<cu?`<p class="gk-nhac tot">Nhanh hơn lần trước ${mmss(cu-GHI.dai)}!</p>`:""}
    <div class="gk-nut"><button type="button" data-g="minh">${IC("phat")}Nghe lại mình</button><button type="button" data-g="so" class="chinh">${IC("so")}Đối chiếu từng câu</button>
      <button type="button" data-g="lai">${IC("mic")}Đọc lại</button></div>
    <p class="muted">Đối chiếu: máy đọc mẫu một câu rồi phát câu đó của em. Chạm vào một từ rồi chọn “So câu này” để nghe riêng một câu.</p>`;
  $("#ghiKq").classList.add("mo");
}
function anKq(){dungPhat();$("#ghiKq").classList.remove("mo")}
$("#ghiKq").addEventListener("click",async e=>{const b=e.target.closest("[data-g]");if(!b)return;const g=b.dataset.g;
  if(g==="x"){anKq();return}
  if(g==="lai"){anKq();batDauGhi();return}
  dungPhat();const me=dangSo;
  if(g==="minh"){const seg=GHI.seg||[[0,GHI.dai]];for(let i=0;i<seg.length&&me===dangSo;i++){sang(GHI.seg?i:null);await phatDoan(seg[i][0],seg[i][1])}if(me===dangSo)sang(null)}
  if(g==="so"&&GHI.seg){for(let i=0;i<C.length&&me===dangSo;i++){await soCau(i,me);await new Promise(r=>setTimeout(r,400))}if(me===dangSo)sang(null)}
});
$("#bDoc").onclick=batDauGhi;$("#ghiDung").onclick=dungGhi;
window.LD_GHI=()=>({seg:GHI.seg,dai:GHI.dai});   // xem số liệu khi kiểm tra
if(!(navigator.mediaDevices&&window.MediaRecorder))$("#bDoc").hidden=true;

// ---- đọc xong
function docXong(){
  dungNghe(true);dongThe();if(GHI.rec)dungGhi();anKq();
  const phut=(performance.now()-T0)/60000,cpm=Math.round(soChu(B)/Math.max(phut,.1));
  const xong=store.get("xong",{}),cu=xong[B.id],voi=cpm>350;   // > 350 chữ/phút: chắc chưa đọc hết, không ghi kỷ lục
  xong[B.id]={cpm:voi?(cu&&cu.cpm||0):Math.max(cpm,cu&&cu.cpm||0),lan:(cu&&cu.lan||0)+1};store.set("xong",xong);
  const tuMoi=[...new Set(C.flatMap(c=>c.tu.filter(t=>!t.dau&&moi(B,t.w)).map(t=>t.w)))],luu=store.get("luu",[]).filter(w=>C.some(c=>c.tu.some(t=>t.w===w)));
  const on=[...new Set([...tuMoi,...luu])],np=[...new Set(C.flatMap(c=>c.np))];
  const i=DS.indexOf(B),sau=DS[i+1]||DS.find(b=>!xong[b.id]&&b!==B);
  $("#ketThuc").innerHTML=`<div class="kt-td"><b>${cpm}</b> chữ/phút<span>${voi?"Nhanh quá! Em đã đọc hết bài chưa? Lần này máy không ghi kỷ lục.":cu&&cu.cpm?(cpm>cu.cpm?`Nhanh hơn lần trước (${cu.cpm} chữ/phút)!`:`Lần tốt nhất: ${cu.cpm} chữ/phút`):"Lần đầu đọc bài này"}</span></div>
    <h3>${IC("de")}Em hiểu bài chưa?</h3><ol class="hoi">${B.hoi.map((q,k)=>`<li data-q="${k}"><div class="q zh">${esc(q.q)}</div><div class="qvi">${esc(q.vi)}</div>
      <div class="opts">${q.opts.map((o,j)=>`<button type="button" data-o="${j}" class="zh">${esc(o)}</button>`).join("")}</div></li>`).join("")}</ol>
    ${on.length?`<h3>${IC("the-bai")}Từ mới trong bài</h3><div class="tumoi">${on.map(w=>`<span><b class="zh">${esc(w)}</b>${esc(B.tu[w]||"")}</span>`).join("")}</div>
      <a class="btn sec" href="../tu-vung/#tu/${encodeURIComponent(on.join(","))}">${IC("the-bai")}Ôn ${on.length} từ bằng flashcard</a>`:""}
    ${np.length?`<h3>${IC("sach")}Ngữ pháp trong bài</h3><div class="npds">${np.map(m=>`<a href="../ngu-phap/${npDir(m)}/"><b>【${m}】</b>${esc(NPN[m]||"")}${IC("sau")}</a>`).join("")}</div>`:""}
    <div class="kt-nut">${sau?`<a class="btn hot" href="#${sau.id}">Đọc bài tiếp: <span class="zh">${esc(sau.ten)}</span>${IC("sau")}</a>`:""}<a class="btn sec" href="#">Về mục lục</a></div>`;
  $("#ketThuc").querySelectorAll(".hoi li").forEach(li=>li.onclick=e=>{const o=e.target.closest("[data-o]");if(!o||li.classList.contains("xong"))return;
    const q=B.hoi[+li.dataset.q];if(+o.dataset.o===q.dap){o.classList.add("dung");li.classList.add("xong")}else{o.classList.add("sai");o.disabled=true}});
  $("#ketThuc").scrollIntoView({behavior:"smooth"});
}
/* ============ điều hướng ============ */
function route(){const id=decodeURIComponent(location.hash.slice(1));dungNghe(true);
  if(id&&DS.some(b=>b.id===id))moBai(id);else{$("#home").hidden=false;$("#doc").hidden=true;document.body.classList.remove("dang-doc");document.title="阅读盒 · Luyện đọc – 吕老师汉语盒";dongThe();mucLuc()}}
addEventListener("hashchange",route);route();
})();
