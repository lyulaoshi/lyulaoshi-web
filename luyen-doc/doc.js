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
const ghep=(w,cap)=>w.length>1&&[...Array(w.length-1)].some((_,i)=>(LV[w.slice(0,i+1)]||9)<=cap&&(LV[w.slice(i+1)]||9)<=cap);   // từ ghép từ 2 từ đúng cấp (没有, 每天, 吃到…)
const moi=(B,w)=>!laSo(w)&&!(B.rieng||[]).includes(w)&&(LV[w]==null?!ghep(w,B.cap):LV[w]>B.cap);
const soChu=B=>B.cau.reduce((n,c)=>n+c[0].replace(/[\s，。？！、：；“”（）…]/g,"").length,0);

/* ============ MỤC LỤC ============ */
// Chủ đề: dùng chung danh sách của 词汇盒 (../tu-vung/chu-de.js) + vài chủ đề riêng của hộp đọc
const CD_THEM=[{id:"ban-be",zh:"朋友",vi:"Bạn bè"},{id:"truyen",zh:"故事",vi:"Truyện kể – ngụ ngôn"}];
const CDS=[...(window.CHUDE||[]).map(c=>({id:c.id,zh:c.zh,vi:c.vi,on:1})),...CD_THEM];
const cdOf=id=>CDS.find(c=>c.id===id)||{id,zh:"",vi:id||"Khác"};
const ML=store.get("ml",{tab:"cap",cap:null,cd:""});
function theBai(b,xong){const x=xong[b.id],c=cdOf(b.cd);
  return`<a class="the" href="#${b.id}"><span class="t-cap">HSK ${b.cap}</span><span class="t-ten zh">${esc(b.ten)}</span><span class="t-vi">${esc(b.tenVi)}</span>
    <span class="t-meta">${soChu(b)} chữ · ${esc(c.vi)}${x?` · <b class="xong">${IC("tick")}đã đọc${x.cpm?` · ${x.cpm} chữ/phút`:""}</b>`:""}</span></a>`}
const MANG={v:store.get("mang","doc")};
function mucLucDoc(){
  document.querySelectorAll("#mlMang [data-mang]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.mang===MANG.v));
  $("#mlTab").hidden=MANG.v!=="doc";
  if(MANG.v==="doc"){mucLuc();return}
  // 朗读 · Đọc thành tiếng: 3 chế độ cho mỗi bài + Góc podcast của em
  const xong=store.get("xong",{}),caps=[...new Set(DS.map(b=>b.cap))].sort();
  $("#ke").innerHTML=`<div class="ld-che">
      <div><b>${IC("lap-lanh")}Đọc karaoke</b><span>Chữ sáng dần theo nhịp, em đọc theo, máy ghi âm.</span></div>
      <div><b>${IC("mic")}录音 · Thu âm</b><span>Tự đọc cả bài, nghe lại, đối chiếu từng câu với giọng mẫu.</span></div>
      <div><b>${IC("loa-to")}播客 · Làm podcast</b><span>Đọc như người dẫn podcast, có nhạc, ảnh bìa đăng TikTok.</span></div></div>
    ${caps.map(c=>`<h2 class="kh">HSK ${c}</h2><div class="ld-ds">${DS.filter(b=>b.cap===c).map(b=>`<div class="ld-bai"><a class="ld-ten" href="#${b.id}"><b class="zh">${esc(b.ten)}</b><small>${esc(b.tenVi)} · ${soChu(b)} chữ</small></a>
      <div class="ld-nut"><a href="#${b.id}/doc-theo">${IC("lap-lanh")}Đọc karaoke</a><a href="#${b.id}/thu-am">${IC("mic")}Thu âm</a><a class="pod" href="#${b.id}/podcast">${IC("loa-to")}Podcast</a></div></div>`).join("")}</div>`).join("")}
    <h2 class="kh" id="gocPod">我的播客 · Góc podcast của em</h2><div id="gocDs"><p class="muted">Đang mở…</p></div>`;
  if(window.LD_POD)LD_POD.goc($("#gocDs"));else $("#gocDs").innerHTML='<p class="muted">Chưa có tập nào.</p>';
  store.set("mang",MANG.v);
}
document.addEventListener("click",e=>{const m=e.target.closest("#mlMang [data-mang]");if(m){MANG.v=m.dataset.mang;mucLucDoc()}});
function mucLuc(){
  const xong=store.get("xong",{}),doDo=store.get("do",null);
  $("#stBai").textContent=DS.length;$("#stXong").textContent=DS.filter(b=>xong[b.id]).length;
  const best=Math.max(0,...Object.values(xong).map(x=>x.cpm||0));$("#stTd").textContent=best||"—";
  const go=$("#lhGo");const tiep=doDo&&DS.find(b=>b.id===doDo)||DS.find(b=>!xong[b.id])||DS[0];if(tiep){go.href="#"+tiep.id;go.innerHTML=(doDo&&!xong[doDo]?"Đọc tiếp: ":"Đọc ngay: ")+`<span class="zh">${esc(tiep.ten)}</span> `+IC("sau")}
  document.querySelectorAll("#mlTab [data-tab]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.tab===ML.tab));
  const K=$("#ke");
  if(ML.tab==="cap"){
    const caps=[1,2,3,4,5,6],co=c=>DS.filter(b=>b.cap===c).length;
    if(!ML.cap||!co(ML.cap))ML.cap=caps.find(co)||1;
    const ds=DS.filter(b=>b.cap===ML.cap),cdCo=[...new Set(ds.map(b=>b.cd))];if(ML.cd&&!cdCo.includes(ML.cd))ML.cd="";
    K.innerHTML=`<div class="ml-cap">${caps.map(c=>`<button type="button" class="lv" data-cap="${c}" aria-pressed="${c===ML.cap}" ${co(c)?"":"disabled"}>HSK ${c}<small>${co(c)?co(c)+" bài":"sắp có"}</small></button>`).join("")}</div>
      ${cdCo.length>1?`<div class="ml-loc"><span>Chủ đề:</span><button type="button" data-cd="" aria-pressed="${!ML.cd}">Tất cả</button>${cdCo.map(id=>`<button type="button" data-cd="${id}" aria-pressed="${ML.cd===id}">${esc(cdOf(id).vi)}</button>`).join("")}</div>`:""}
      <div class="the-ds">${ds.filter(b=>!ML.cd||b.cd===ML.cd).map(b=>theBai(b,xong)).join("")}</div>`;
  }else if(ML.tab==="cd"){
    const ids=[...new Set(DS.map(b=>b.cd))].sort((x,y)=>CDS.findIndex(c=>c.id===x)-CDS.findIndex(c=>c.id===y));
    K.innerHTML=ids.map(id=>{const c=cdOf(id),ds=DS.filter(b=>b.cd===id).sort((x,y)=>x.cap-y.cap);
      return`<div class="ml-cd"><h2 class="kh"><span class="zh">${esc(c.zh)}</span> ${esc(c.vi)} <small>${ds.length} bài · HSK ${[...new Set(ds.map(b=>b.cap))].join(", ")}</small>
        ${c.on?`<a class="ml-on" href="../tu-vung/#chu-de/${id}">${IC("the-bai")}Ôn từ chủ đề này</a>`:""}</h2><div class="the-ds">${ds.map(b=>theBai(b,xong)).join("")}</div></div>`}).join("")
      +`<p class="muted ml-sap">Sắp có thêm: ${CDS.filter(c=>!ids.includes(c.id)).map(c=>esc(c.vi)).join(" · ")}</p>`;
  }else{
    const SA=window.GT_SACH||[];
    K.innerHTML=`<p class="muted">Bài khoá trong các giáo trình cô dạy trên lớp, đọc với <b>giọng thật</b> của giáo trình: chữ chạy theo file nghe gốc.</p>
      <div class="ml-sach">${SA.map(x=>{const ds=DS.filter(b=>b.sach===x.id);return`<div class="sach-o ${x.c||""}"><span class="sach-dau zh">${esc(x.seal||"")}</span><span class="sach-t"><b class="zh">${esc(x.zh)}</b><small>${esc(x.vi)}</small>
        <em>${ds.length?ds.length+" bài khoá":"Sắp có"}</em></span></div>${ds.length?`<div class="the-ds">${ds.map(b=>theBai(b,xong)).join("")}</div>`:""}`}).join("")}</div>
      <h2 class="kh">Bài đọc trên lớp</h2>
      <a class="lop" href="mot-ngay-cua-toi/"><span class="zh" style="font-size:30px;color:var(--c)">读</span><span><b class="zh">我的一天</b><small>Một ngày của tôi · bài cô dạy trên lớp</small></span></a>`;
  }
  store.set("ml",ML);
}
document.addEventListener("click",e=>{
  const t=e.target.closest("#mlTab [data-tab]");if(t){ML.tab=t.dataset.tab;mucLuc();return}
  const c=e.target.closest("#ke [data-cap]");if(c){ML.cap=+c.dataset.cap;ML.cd="";mucLuc();return}
  const d=e.target.closest("#ke [data-cd]");if(d){ML.cd=d.dataset.cd;mucLuc()}
});

/* ============ TRANG ĐỌC ============ */
let B,C,tDoc=0,phat=null,chon=null;
// bấm giờ đọc: t0 = lúc bấm “Bắt đầu đọc” (hoặc bắt đầu ghi âm); het = số giây đã chốt (khi dừng ghi âm). Chưa bấm thì không tính tốc độ.
const TG={t0:null,het:null,tm:null};
const OPT=store.get("opt",{py:false,vi:false,co:1,toc:.85});
function moBai(id){
  B=DS.find(b=>b.id===id);if(!B){location.hash="";return}
  C=tach(B);store.set("do",B.id);dungNghe();
  document.title=B.ten+" · 阅读盒 – 吕老师汉语盒";
  $("#home").hidden=true;$("#doc").hidden=false;document.body.classList.add("dang-doc");
  $("#dTen").innerHTML=`<span class="zh">${esc(B.ten)}</span> <small>${esc(B.tenVi)}</small>`;
  $("#dMeta").textContent=`HSK ${B.cap} · ${soChu(B)} chữ · khoảng ${Math.max(1,Math.round(soChu(B)/60))} phút`;
  // thành ngữ hiện ngay đầu bài; nghĩa ẩn, bấm "Xem nghĩa" (để học sinh tự đoán trước)
  $("#dTn").hidden=!B.tn;if(B.tn)$("#dTn").innerHTML=`<span class="tn-nhan">成语 Thành ngữ</span><b class="zh">${esc(B.tn.zh)}</b><span class="tn-py">${pyMau(B.tn.py)}</span>
    <button type="button" id="tnXem" aria-expanded="false">Xem nghĩa</button><span class="tn-vi" hidden>${esc(B.tn.vi)}</span>`;
  $("#van").innerHTML=C.map(c=>`<p class="cau" data-c="${c.ci}"><span class="zhc">${c.tu.map((t,k)=>t.dau?`<span class="dau">${esc(t.w)}</span>`:
    `<span class="w${moi(B,t.w)?" moi":""}" data-k="${k}"><ruby>${esc(t.w)}<rt>${pyMau(t.py)}</rt></ruby></span>`).join("")}</span><span class="vic">${esc(c.vi)}</span></p>`).join("");
  $("#ketThuc").innerHTML=`<button class="btn hot" type="button" id="xongBtn">${IC("tick")}Đọc xong</button><p class="muted">Bấm khi em đọc hết bài, máy tính tốc độ đọc cho em.</p>`;
  $("#xongBtn").onclick=docXong;
  apOpt();tDoc=0;scrollTo({top:0});dongThe();
  dungGio();TG.t0=null;TG.het=null;$("#batDau").hidden=false;$("#bdPod").href="#"+B.id+"/podcast";
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
function dungNghe(het){if(!phat)return;tDoc+=0;const d=performance.now()-phat.t;if(TG.t0&&TG.het==null)TG.t0+=d;phat=null;if("speechSynthesis" in window)speechSynthesis.cancel();
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
  if(!TG.t0||TG.het!=null){TG.t0=t0;TG.het=null}$("#batDau").hidden=true;clearInterval(TG.tm);$("#gioBar").hidden=true;
  const tm=setInterval(()=>{an.getFloatTimeDomainData(buf);let r=0;for(const v of buf)r+=v*v;env.push(Math.sqrt(r/buf.length));$("#ghiGio").textContent=mmss((performance.now()-t0)/1000)},50);
  GHI.rec={rec,st,ac,tm,env,ch,t0};
  $("#bDoc").setAttribute("aria-pressed","true");$("#bDoc").querySelector("span:last-child").textContent="Dừng";$("#ghiBar").hidden=false;$("#ghiGio").textContent="0:00";
}
function dungGhi(){
  const g=GHI.rec;if(!g)return;GHI.rec=null;if(KA){KA=null;GHI.lich=null;sang(null);xoaChay()}clearInterval(g.tm);
  g.rec.onstop=()=>{GHI.blob=new Blob(g.ch,{type:g.rec.mimeType||"audio/webm"});if(GHI.url)URL.revokeObjectURL(GHI.url);GHI.url=URL.createObjectURL(GHI.blob);
    GHI.dai=(performance.now()-g.t0)/1000;TG.het=GHI.dai;GHI.seg=(GHI.lich&&GHI.lich.length===C.length)?GHI.lich:tachCau(g.env,C.map(c=>c.zh.replace(/[，。？！、：；“”（）…]/g,"").length));GHI.lich=null;hienKq()};
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
function phatDoan(x,y,tien){return new Promise(r=>{const me=++choi;AU.src=GHI.url;const go=()=>{AU.currentTime=x;AU.play().catch(r);
  const k=setInterval(()=>{if(tien)tien(Math.max(0,Math.min(1,(AU.currentTime-x)/Math.max(.1,y-x))));if(me!==choi||AU.currentTime>=y||AU.ended){clearInterval(k);if(me===choi)AU.pause();r()}},40)};
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
  if(g==="lai"){anKq();if(KA_LAST)chayKaraoke(KA_LAST);else batDauGhi();return}
  dungPhat();const me=dangSo;
  if(g==="minh"){const seg=GHI.seg||[[0,GHI.dai]];for(let i=0;i<seg.length&&me===dangSo;i++){sang(GHI.seg?i:null);await phatDoan(seg[i][0],seg[i][1],GHI.seg?f=>toChay(i,f):null)}if(me===dangSo){sang(null);xoaChay()}}
  if(g==="so"&&GHI.seg){for(let i=0;i<C.length&&me===dangSo;i++){await soCau(i,me);await new Promise(r=>setTimeout(r,400))}if(me===dangSo)sang(null)}
});
$("#bDoc").onclick=batDauGhi;$("#ghiDung").onclick=dungGhi;
window.LD_GHI=()=>({seg:GHI.seg,dai:GHI.dai});   // xem số liệu khi kiểm tra
if(!(navigator.mediaDevices&&window.MediaRecorder))$("#bDoc").hidden=true;


/* ============ ĐỌC KARAOKE: chữ sáng dần theo nhịp → học sinh đọc theo → máy ghi âm cùng lúc ============ */
// Nhịp = giây/chữ. Thời điểm từng câu do chữ chạy quyết định → đối chiếu từng câu chính xác, không phải đoán chỗ ngừng.
const NHIP={cham:.62,vua:.46,nhanh:.34},TOC_MAU={cham:.6,vua:.85,nhanh:1.05};
let KA=null,KA_LAST=null;
const soChuCau=c=>c.zh.replace(/[，。？！、：；“”（）…]/g,"").length;
function toChay(ci,f){const p=document.querySelector(`#van .cau[data-c="${ci}"]`);if(!p)return;const ws=[...p.querySelectorAll(".w,.dau")],c=C[ci],n=c.zh.length;let k=0;
  ws.forEach((x,i)=>{const pos=c.tu.slice(0,i).reduce((a,t)=>a+t.w.length,0);x.classList.toggle("da",pos<f*n)})}
function xoaChay(){document.querySelectorAll("#van .da").forEach(x=>x.classList.remove("da"));$("#doc").classList.remove("hat")}
function moKaraoke(){dongThe();anKq();const o=store.get("ka",{nhip:"vua",mau:false});
  $("#kaBox").innerHTML=`<div class="gk-dau"><b>${IC("lap-lanh")}Đọc karaoke</b><button class="th-x" type="button" data-k="x" aria-label="Đóng">${IC("sai")}</button></div>
    <p class="ka-mo">Chữ sáng dần theo nhịp, em đọc theo chữ sáng, máy ghi âm giọng em. Đọc hết bài, em nghe lại giọng mình cùng chữ chạy.</p>
    <div class="ka-chon"><span>Nhịp</span><div class="ka-seg">${[["cham","Chậm"],["vua","Vừa"],["nhanh","Nhanh"]].map(([k,t])=>`<button type="button" data-nhip="${k}" aria-pressed="${o.nhip===k}">${t}</button>`).join("")}</div></div>
    <label class="ka-mau"><input type="checkbox" id="kaMau" ${o.mau?"checked":""}> Có giọng mẫu đọc cùng <small>(nên đeo tai nghe để máy chỉ ghi giọng em)</small></label>
    <div class="gk-nut"><button type="button" class="chinh" data-k="go">${IC("mic")}Bắt đầu</button></div>`;
  $("#kaBox").classList.add("mo")}
$("#kaBox").addEventListener("click",e=>{const n=e.target.closest("[data-nhip]");
  if(n){$("#kaBox").querySelectorAll("[data-nhip]").forEach(x=>x.setAttribute("aria-pressed",x===n));return}
  const k=e.target.closest("[data-k]");if(!k)return;
  if(k.dataset.k==="x"){$("#kaBox").classList.remove("mo");return}
  const o={nhip:($("#kaBox [data-nhip][aria-pressed=true]")||{dataset:{nhip:"vua"}}).dataset.nhip,mau:$("#kaMau").checked};store.set("ka",o);
  $("#kaBox").classList.remove("mo");chayKaraoke(o)});
function demNguoc(){return new Promise(r=>{const d=$("#demNguoc");d.hidden=false;let n=3;const f=()=>{if(n===0){d.hidden=true;r();return}d.textContent=n;d.classList.remove("nay");void d.offsetWidth;d.classList.add("nay");n--;setTimeout(f,800)};f()})}
async function chayKaraoke(o){
  KA_LAST=o;dungNghe(true);dongThe();anKq();$("#batDau").hidden=true;
  scrollTo({top:Math.max(0,$("#van").getBoundingClientRect().top+scrollY-120),behavior:"smooth"});
  await demNguoc();
  await batDauGhi();if(!GHI.rec)return;
  const me=KA={},t0=GHI.rec.t0,lich=[];$("#doc").classList.add("hat");
  for(let ci=0;ci<C.length&&KA===me;ci++){
    const c=C[ci];sang(ci);toChay(ci,0);const bd=(performance.now()-t0)/1000;
    if(o.mau){let coBd=false,f0=performance.now();const dur=soChuCau(c)*NHIP[o.nhip]*1000;
      const tm=setInterval(()=>{if(!coBd)toChay(ci,Math.min(1,(performance.now()-f0)/dur))},60);
      await noi(c.zh,TOC_MAU[o.nhip],e=>{coBd=true;toChay(ci,(e.charIndex+1)/c.zh.length)});clearInterval(tm)}
    else{const dur=soChuCau(c)*NHIP[o.nhip]*1000+250,f0=performance.now();
      await new Promise(r=>{const tm=setInterval(()=>{const f=(performance.now()-f0)/dur;toChay(ci,f);if(f>=1||KA!==me){clearInterval(tm);r()}},50)})}
    toChay(ci,1.01);lich.push([Math.max(0,bd-.15),(performance.now()-t0)/1000+.3]);
    await new Promise(r=>setTimeout(r,450));
  }
  if(KA!==me)return;   // em bấm Dừng giữa chừng → dungGhi đã chạy, tách câu theo chỗ ngừng
  KA=null;GHI.lich=lich;sang(null);xoaChay();dungGhi();
}


document.addEventListener("click",e=>{const b=e.target.closest("#tnXem");if(!b)return;const v=$("#dTn .tn-vi"),mo=v.hidden;v.hidden=!mo;b.setAttribute("aria-expanded",mo);b.textContent=mo?"Ẩn nghĩa":"Xem nghĩa"});
/* ============ BẤM GIỜ ĐỌC ============ */
function batDauGio(){if(TG.t0)return;TG.t0=performance.now();TG.het=null;$("#batDau").hidden=true;hienGio()}
function hienGio(){$("#gioBar").hidden=false;clearInterval(TG.tm);const f=()=>{$("#gioGio").textContent=mmss((performance.now()-TG.t0)/1000)};f();TG.tm=setInterval(f,250)}
function dungGio(){clearInterval(TG.tm);TG.tm=null;$("#gioBar").hidden=true}
$("#bdGio").onclick=batDauGio;$("#bdKa").onclick=moKaraoke;$("#bdGhi").onclick=()=>batDauGhi();$("#gioXong").onclick=()=>docXong();

// ---- đọc xong
function docXong(){
  dungNghe(true);dongThe();if(GHI.rec)dungGhi();anKq();
  const giay=TG.het!=null?TG.het:TG.t0?(performance.now()-TG.t0)/1000:null;dungGio();
  const cpm=giay?Math.round(soChu(B)/Math.max(giay/60,.05)):0;
  const xong=store.get("xong",{}),cu=xong[B.id],voi=!giay||cpm>350;   // > 350 chữ/phút: chắc chưa đọc hết, không ghi kỷ lục
  xong[B.id]={cpm:voi?(cu&&cu.cpm||0):Math.max(cpm,cu&&cu.cpm||0),lan:(cu&&cu.lan||0)+1};store.set("xong",xong);
  const tuMoi=[...new Set(C.flatMap(c=>c.tu.filter(t=>!t.dau&&moi(B,t.w)).map(t=>t.w)))],luu=store.get("luu",[]).filter(w=>C.some(c=>c.tu.some(t=>t.w===w)));
  const on=[...new Set([...tuMoi,...luu])],np=[...new Set(C.flatMap(c=>c.np))];
  const i=DS.indexOf(B),sau=DS[i+1]||DS.find(b=>!xong[b.id]&&b!==B);
  $("#ketThuc").innerHTML=(!giay?`<div class="kt-td kt-chua">${IC("dong-ho")}<span>Lần này em chưa bấm giờ. Lần sau bấm <b>Bắt đầu đọc</b> ở đầu bài để biết tốc độ đọc của mình nhé.</span></div>`:"")+`<div class="kt-td"${giay?"":" hidden"}><b>${cpm}</b> chữ/phút · ${giay?mmss(giay):""}<span>${voi?"Nhanh quá! Em đã đọc hết bài chưa? Lần này máy không ghi kỷ lục.":cu&&cu.cpm?(cpm>cu.cpm?`Nhanh hơn lần trước (${cu.cpm} chữ/phút)!`:`Lần tốt nhất: ${cu.cpm} chữ/phút`):"Lần đầu đọc bài này"}</span></div>
    ${B.tn||B.y?`<div class="yn">${B.tn?`<div class="yn-tn"><b class="zh">${esc(B.tn.zh)}</b><span class="yn-py">${pyMau(B.tn.py)}</span><span>Thành ngữ: ${esc(B.tn.vi)}</span></div>`:""}${B.y?`<p><b>${IC("den")}Ý nghĩa câu chuyện</b>${esc(B.y)}</p>`:""}</div>`:""}
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
function route(){const [id,sub]=decodeURIComponent(location.hash.slice(1)).split("/");dungNghe(true);
  if(window.LD_POD)LD_POD.dong();$("#pod").hidden=true;
  if(id&&DS.some(b=>b.id===id)&&sub==="podcast"&&window.LD_POD){$("#home").hidden=true;$("#doc").hidden=true;document.body.classList.remove("dang-doc");$("#pod").hidden=false;LD_POD.mo(DS.find(b=>b.id===id));return}
  if(id&&DS.some(b=>b.id===id)){moBai(id);
    if(sub==="doc-theo")setTimeout(moKaraoke,200);
    if(sub==="thu-am")setTimeout(()=>{const b=$("#bdGhi");b.scrollIntoView({block:"center",behavior:"smooth"});b.classList.add("nhac");setTimeout(()=>b.classList.remove("nhac"),2400)},200);
    return}
  {dungGio();$("#home").hidden=false;$("#doc").hidden=true;document.body.classList.remove("dang-doc");document.title="阅读盒 · Luyện đọc – 吕老师汉语盒";dongThe();mucLucDoc()}}
window.LD={$,esc,IC,pyMau,store,tach,soChu,DS,NHIP,mmss,noi,demNguoc};
addEventListener("hashchange",route);route();
})();
