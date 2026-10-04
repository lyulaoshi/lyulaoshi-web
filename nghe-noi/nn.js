// 听说盒 — khung chạy chung: mục lục + 4 bước (Nghe hiểu · Shadowing · Đóng vai · Nghe – viết) cho mỗi đoạn hội thoại.
// Đường dẫn: #<sách>/bai-N/<đoạn>/<bước> (vd. #301/bai-11/1/nhai). Tiến độ lưu localStorage "nn-tien-do".
(function(){
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const BUOC=[["nghe","听","Nghe hiểu"],["nhai","跟读","Shadowing"],["vai","角色","Đóng vai"],["viet","听写","Nghe – viết"]];

/* ---------- icon tự vẽ dùng chung cả web: /chung/ic.svg?v=893338cb (không dùng emoji hệ thống) ---------- */
const ic=(n,c="")=>`<svg class="ic lli ${c}" aria-hidden="true"><use href="/chung/ic.svg?v=893338cb#${n}"/></svg>`;

/* ---------- tiến độ ---------- */
let TD={};try{TD=JSON.parse(localStorage.getItem("nn-tien-do")||"{}")}catch(e){}
const xong=(k,b)=>!!(TD[k]&&TD[k][b]);
function danhDau(k,b){(TD[k]=TD[k]||{})[b]=1;try{localStorage.setItem("nn-tien-do",JSON.stringify(TD))}catch(e){};veBuoc()}

/* ---------- giọng máy (có báo đọc xong) ---------- */
const TTS_OK="speechSynthesis" in window;let VOICE=null;
function pick(){if(!TTS_OK)return;const vs=speechSynthesis.getVoices().filter(v=>/^(zh|cmn)/i.test(v.lang)&&!/TW|HK|yue/i.test(v.lang));
  VOICE=vs.find(v=>/google/i.test(v.name))||vs.find(v=>/tingting/i.test(v.name))||vs.find(v=>/zh[-_]cn/i.test(v.lang))||vs[0]||null}
if(TTS_OK){pick();speechSynthesis.addEventListener("voiceschanged",pick)}
let TOC=.9;                                   // tốc độ: .9 vừa / .65 chậm
const docTxt=s=>s.replace(/[（(]([^）)]*)[）)]/g,"$1");
function noi(txt,o={}){return new Promise(res=>{
  if(!TTS_OK){res();return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(docTxt(txt));u.lang=VOICE?VOICE.lang:"zh-CN";if(VOICE)u.voice=VOICE;
  u.rate=o.rate||TOC;u.pitch=o.pitch||1;
  let done=false;const fin=()=>{if(!done){done=true;clearTimeout(t);res()}};
  const t=setTimeout(fin,1500+txt.length*450/u.rate);   // phòng khi trình duyệt không báo onend
  u.onend=fin;u.onerror=fin;speechSynthesis.speak(u);
})}
const PITCH={A:1.12,B:.9};                  // hai vai nghe khác giọng một chút
function dung(){if(TTS_OK)speechSynthesis.cancel();CHAY++}
let CHAY=0;                                   // mã lượt phát — đổi là các vòng phát cũ tự dừng

/* ---------- pinyin tô màu thanh điệu ---------- */
const T1="āēīōūǖ",T2="áéíóúǘ",T3="ǎěǐǒǔǚ",T4="àèìòùǜ";
const SYL=/(zh|ch|sh|[bpmfdtnlgkhjqxzcsrwy])?[aeiouüvāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+(ng(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔù])|n(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔùg])|r(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔù]))?/gi;
function thanh(s){for(const c of s){if(T1.includes(c))return 1;if(T2.includes(c))return 2;if(T3.includes(c))return 3;if(T4.includes(c))return 4}return 0}
const pyMau=p=>esc(p).replace(SYL,m=>`<i class="t${thanh(m)}">${m}</i>`);

/* ---------- ghi âm ---------- */
let STREAM=null;
async function mic(){if(STREAM)return STREAM;STREAM=await navigator.mediaDevices.getUserMedia({audio:true});return STREAM}
const CO_GHI=!!(navigator.mediaDevices&&window.MediaRecorder);
function ghi(){return mic().then(s=>{const r=new MediaRecorder(s),ch=[];r.ondataavailable=e=>ch.push(e.data);r.start();
  return{dung:()=>new Promise(res=>{r.onstop=()=>res(new Blob(ch,{type:r.mimeType||"audio/webm"}));r.stop()})}})}
function phat(blob){return new Promise(res=>{const a=new Audio(URL.createObjectURL(blob));a.onended=res;a.onerror=res;a.play().catch(res)})}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;

/* ---------- so đáp án nghe – viết ---------- */
const bo=s=>s.replace(/[\s，。！？、,.!?；;：:“”"'‘’…—-]/g,"");
function dapAn(s){      // "A / B", phần trong （） có thể bỏ → danh sách cách viết đúng
  const out=[];for(const a of s.split(/\s*\/\s*/)){let v=[""];
    for(const p of a.split(/([（(][^）)]*[）)])/)){if(/^[（(]/.test(p)){const x=p.slice(1,-1);v=v.flatMap(t=>[t,t+x])}else v=v.map(t=>t+p)}
    out.push(...v.map(bo))}return out}

/* ================= MỤC LỤC ================= */
const DS=window.NN_BAI||[];
const TH_LIST=[
  {id:"chao-hoi",  zh:"打招呼",   vi:"Chào hỏi",       ic2:"bat-tay"},
  {id:"lam-quen",  zh:"结交朋友", vi:"Làm quen",        ic2:"tim"},
  {id:"mua-sam",   zh:"购物",     vi:"Mua sắm",         ic2:"tui-tien"},
  {id:"an-uong",   zh:"饮食",     vi:"Ăn uống",         ic2:"tra-sua"},
  {id:"hoi-duong", zh:"问路",     vi:"Hỏi đường",       ic2:"tg-phai"},
  {id:"di-lai",    zh:"交通",     vi:"Đi lại",          ic2:"may"},
  {id:"goi-dien",  zh:"打电话",   vi:"Gọi điện thoại",  ic2:"dien-thoai"},
  {id:"hoc-tap",   zh:"学习",     vi:"Học tập",         ic2:"sach"},
  {id:"kham-benh", zh:"看病",     vi:"Khám bệnh",       ic2:"cuu"},
];
let TH_SEL=null;

function veBaiHTML(ds){return ds.map(b=>`<article class="bai">
    <div class="bai-h"><span class="sach">${esc(b.sachTen)} · Bài ${b.bai}</span><span class="hsk">HSK ${b.hsk}</span></div>
    <h3><span class="zh">${esc(b.ten)}</span> <small>${esc(b.tenVi)}</small></h3>
    <div class="doans">${b.doan.map((d,i)=>{const k=b.id+"/"+(i+1),n=BUOC.filter(x=>xong(k,x[0])).length;
      return`<a class="doan" href="#${k}"><span class="so">${i+1}</span><span class="t"><b class="zh">${esc(d.ten)}</b><small>${esc(d.tenVi)} · ${d.cau.length} câu</small></span>
      <span class="dots" aria-label="Xong ${n}/4 bước">${BUOC.map(x=>`<i class="${xong(k,x[0])?"on":""}"></i>`).join("")}</span></a>`}).join("")}</div>
  </article>`).join("")}
function veMucLuc(){$("#dsBai").innerHTML=veBaiHTML(DS)}

function veThList(){
  const el=$("#dsTh");if(!el)return;
  if(TH_SEL){
    const th=TH_LIST.find(t=>t.id===TH_SEL),ds=DS.filter(b=>b.th===TH_SEL);
    el.innerHTML=`<button type="button" class="back-th" id="backTh">${ic("truoc")} Tất cả tình huống</button>
      <h2 class="th-title"><span class="zh">${esc(th.zh)}</span> · ${esc(th.vi)}</h2>
      <div class="bais">${veBaiHTML(ds)}</div>`;
    $("#backTh").onclick=()=>{TH_SEL=null;veThList()};
  }else{
    el.innerHTML=`<div class="th-grid">${TH_LIST.map(t=>{
      const n=DS.filter(b=>b.th===t.id).length;
      return`<button type="button" class="th-card${n?"":" soon"}" data-th="${t.id}" ${n?"":"disabled"}>
        ${ic(t.ic2,"th-ic")}<span class="zh">${esc(t.zh)}</span>
        <span class="t">${esc(t.vi)}</span>
        <span class="cnt">${n?n+(n>1?" bài":" bài"):"Sắp có"}</span>
      </button>`}).join("")}</div>`;
    el.querySelectorAll("[data-th]").forEach(b=>b.onclick=()=>{TH_SEL=b.dataset.th;veThList()});
  }
}

/* ================= TRANG LUYỆN ================= */
let B,D,K,BU="nghe";
function mo(){
  const h=decodeURIComponent(location.hash.slice(1)).split("/");
  dung();
  const b=DS.find(x=>x.id===h[0]+"/"+h[1]),d=b&&b.doan[(+h[2]||1)-1];
  if(!d){$("#home").hidden=false;$("#play").hidden=true;veMucLuc();document.title="听说盒 · Nghe – nói – 吕老师汉语盒";return}
  B=b;D=d;K=b.id+"/"+((+h[2])||1);BU=BUOC.some(x=>x[0]===h[3])?h[3]:"nghe";
  $("#home").hidden=true;$("#play").hidden=false;
  document.title=`${d.ten} · 听说盒 – 吕老师汉语盒`;
  $("#pSach").textContent=`${b.sachTen} · Bài ${b.bai} · ${b.ten}`;
  $("#pTen").innerHTML=`<span class="zh">${esc(d.ten)}</span> <small>${esc(d.tenVi)}</small>`;
  $("#pDoan").innerHTML=b.doan.map((x,i)=>`<a href="#${b.id}/${i+1}/${BU}" class="${d===x?"on":""}">Đoạn ${i+1}</a>`).join("");
  veBuoc();({nghe:Nghe,nhai:Nhai,vai:Vai,viet:Viet})[BU]();
  scrollTo({top:0});
}
function veBuoc(){
  if(!K)return;
  $("#pBuoc").innerHTML=BUOC.map(([id,zh,vi],i)=>`<a href="#${K}/${id}" class="${id===BU?"on":""} ${xong(K,id)?"xong":""}" ${id===BU?'aria-current="step"':""}>
    <span class="n">${xong(K,id)?ic("tick"):i+1}</span><span class="t"><b class="zh">${zh}</b><small>${vi}</small></span></a>`).join("");
}
const vaiTen=v=>`${D.vai[v][0]} · ${D.vai[v][1]}`;
const tiep=()=>{const i=BUOC.findIndex(x=>x[0]===BU);return i<3?`<a class="btn hot" href="#${K}/${BUOC[i+1][0]}">Sang bước ${i+2}: ${BUOC[i+1][2]} ${ic("sau")}</a>`:`<a class="btn hot" href="#">Về mục lục</a>`};
function tocDo(){return`<div class="toc" role="group" aria-label="Tốc độ đọc"><button type="button" data-toc=".9" aria-pressed="${TOC>.8}">Vừa</button><button type="button" data-toc=".65" aria-pressed="${TOC<.8}">${ic("cham")}Chậm</button></div>`}
document.addEventListener("click",e=>{const t=e.target.closest("[data-toc]");if(t){TOC=+t.dataset.toc;t.parentNode.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b===t))}});

/* ---------- ① Nghe hiểu ---------- */
function Nghe(){
  const P=$("#pBody");let hien=false;
  P.innerHTML=`<p class="huong">Nghe cả đoạn hội thoại <b>chưa nhìn chữ</b>, rồi trả lời câu hỏi. Nghe lại bao nhiêu lần cũng được.</p>
  <div class="thanh"><button class="btn hot" id="ngheAll" type="button">${ic("phat")}Nghe cả đoạn</button>${tocDo()}<button class="btn sec" id="hienLoi" type="button">Hiện lời</button></div>
  <div class="chat an" id="chat">${D.cau.map((c,i)=>`<button type="button" class="line ${c[0]}" data-i="${i}"><span class="ai">${esc(D.vai[c[0]][0])}</span>
    <span class="bb"><span class="hz zh">${esc(c[1])}</span><span class="py">${pyMau(c[2])}</span><span class="vi">${esc(c[3])}</span><span class="mo">${ic("loa")} · · · · · ·</span></span></button>`).join("")}</div>
  <h3 class="h3">Trả lời câu hỏi</h3>
  <ol class="hoi">${D.hoi.map((q,i)=>`<li data-q="${i}"><div class="q"><span class="zh">${esc(q.q)}</span> <button type="button" class="spk" data-noi="${esc(q.q)}" aria-label="Nghe câu hỏi">${ic("loa")}</button></div>
    <div class="qvi">${esc(q.vi)}</div><div class="opts">${q.opts.map((o,j)=>`<button type="button" data-o="${j}"><span class="zh">${esc(o)}</span></button>`).join("")}</div></li>`).join("")}</ol>
  <div class="ket" id="ket" hidden><p>${ic("huy","to")}Đúng hết! Em đã hiểu đoạn hội thoại.</p>${tiep()}</div>`;
  const chat=$("#chat");
  $("#hienLoi").onclick=()=>{hien=!hien;chat.classList.toggle("an",!hien);$("#hienLoi").textContent=hien?"Ẩn lời":"Hiện lời"};
  $("#ngheAll").onclick=async()=>{
    const me=++CHAY;$("#ngheAll").innerHTML=ic("dung")+"Dừng";$("#ngheAll").onclick=()=>{dung();Nghe()};
    for(let i=0;i<D.cau.length&&me===CHAY;i++){const l=chat.children[i];chat.querySelectorAll(".dang").forEach(x=>x.classList.remove("dang"));l.classList.add("dang");
      l.scrollIntoView({block:"nearest",behavior:"smooth"});await noi(D.cau[i][1],{pitch:PITCH[D.cau[i][0]]});await wait(350)}
    if(me===CHAY){chat.querySelectorAll(".dang").forEach(x=>x.classList.remove("dang"));const b=$("#ngheAll");b.innerHTML=ic("lai")+"Nghe lại";b.onclick=null;b.onclick=()=>{Nghe();$("#ngheAll").click()}}
  };
  chat.onclick=e=>{const l=e.target.closest(".line");if(l){dung();const c=D.cau[l.dataset.i];noi(c[1],{pitch:PITCH[c[0]]})}};
  const dung_=new Set();
  P.querySelectorAll(".hoi li").forEach(li=>li.addEventListener("click",e=>{const o=e.target.closest("[data-o]");if(!o||li.classList.contains("daxong"))return;
    const q=D.hoi[li.dataset.q];
    if(+o.dataset.o===q.dap){o.classList.add("dung");li.classList.add("daxong");dung_.add(li.dataset.q);noi(q.opts[q.dap],{rate:.9})}
    else{o.classList.add("sai");o.disabled=true}
    if(dung_.size===D.hoi.length){$("#ket").hidden=false;danhDau(K,"nghe")}}));
}
const wait=ms=>new Promise(r=>setTimeout(r,ms));

/* ---------- ② Shadowing ---------- */
const BAN={};                                 // bản ghi âm của em: BAN[K+"/"+i]
let SAO={};try{SAO=JSON.parse(localStorage.getItem("nn-sao")||"{}")}catch(e){}
function Nhai(){
  const P=$("#pBody");let i=0,rec=null;
  P.innerHTML=`<p class="huong">Từng câu một: <b>nghe mẫu → nói theo → ghi âm → so với mẫu</b>, rồi tự chấm sao. Màu pinyin là thanh điệu:
    <span class="lg"><i class="t1">ˉ 1</i><i class="t2">ˊ 2</i><i class="t3">ˇ 3</i><i class="t4">ˋ 4</i><i class="t0">nhẹ</i></span></p>
  <div class="the" id="the"></div>
  <div class="lui"><button type="button" class="btn sec" id="truoc">${ic("truoc")}Câu trước</button><span id="soCau"></span><button type="button" class="btn sec" id="sau">Câu sau ${ic("sau")}</button></div>
  <div class="ket" id="ket" hidden><p>${ic("huy","to")}Em đã nói theo và chấm đủ ${D.cau.length} câu.</p>${tiep()}</div>
  <div class="mini" id="mini"></div>`;
  const key=j=>K+"/"+j;
  function ve(){
    const c=D.cau[i],b=BAN[key(i)],s=SAO[key(i)]||0;
    $("#the").innerHTML=`<div class="ai">${esc(vaiTen(c[0]))}</div>
      <div class="hz zh big">${esc(c[1])}</div><div class="py big">${pyMau(c[2])}</div><div class="vi">${esc(c[3])}</div>
      <div class="nut">
        <button type="button" class="btn hot" data-a="mau">${ic("loa")}Nghe mẫu</button>
        <button type="button" class="btn sec" data-a="cham">${ic("cham")}Chậm</button>
        ${CO_GHI?`<button type="button" class="btn ${rec?"dangghi":"pri"}" data-a="ghi">${rec?ic("dung")+"Dừng ghi":ic("mic")+"Ghi âm"}</button>`:""}
        <button type="button" class="btn sec" data-a="minh" ${b?"":"disabled"}>${ic("phat")}Nghe mình</button>
        <button type="button" class="btn sec" data-a="so" ${b?"":"disabled"}>${ic("so")}Mẫu rồi mình</button>
        ${SR?`<button type="button" class="btn sec" data-a="may">${ic("tai")}Máy nghe thử</button>`:""}
      </div>
      <div class="may" id="may" hidden></div>
      <div class="sao" role="group" aria-label="Tự chấm câu này"><span>Em tự chấm:</span>${[1,2,3].map(n=>`<button type="button" data-sao="${n}" aria-pressed="${s>=n}" aria-label="${n} sao">${ic("sao")}</button>`).join("")}
        <small>${["","Còn vấp nhiều","Khá giống mẫu","Giống mẫu!"][s]}</small></div>`;
    $("#soCau").textContent=`Câu ${i+1}/${D.cau.length}`;$("#truoc").disabled=i===0;$("#sau").disabled=i===D.cau.length-1;
    $("#mini").innerHTML=D.cau.map((c,j)=>`<button type="button" data-j="${j}" class="${j===i?"on":""} ${SAO[key(j)]?"xong":""}" aria-label="Câu ${j+1}">${j+1}</button>`).join("");
    const du=D.cau.every((c,j)=>SAO[key(j)]);$("#ket").hidden=!du;if(du&&!xong(K,"nhai"))danhDau(K,"nhai");
  }
  $("#truoc").onclick=()=>{if(rec)return;i--;ve()};$("#sau").onclick=()=>{if(rec)return;i++;ve()};
  $("#mini").onclick=e=>{const b=e.target.closest("[data-j]");if(b&&!rec){i=+b.dataset.j;ve()}};
  $("#the").onclick=async e=>{
    const sb=e.target.closest("[data-sao]");
    if(sb){SAO[key(i)]=+sb.dataset.sao;try{localStorage.setItem("nn-sao",JSON.stringify(SAO))}catch(x){};ve();return}
    const a=e.target.closest("[data-a]");if(!a)return;const c=D.cau[i];
    if(a.dataset.a==="mau"){dung();noi(c[1])}
    if(a.dataset.a==="cham"){dung();noi(c[1],{rate:.6})}
    if(a.dataset.a==="ghi"){
      if(rec){const r=rec;rec=null;BAN[key(i)]=await r.dung();ve();return}
      dung();try{rec=await ghi();ve()}catch(x){alert("Chưa ghi âm được: máy chưa cho phép dùng micro. Em bấm vào biểu tượng ổ khoá bên trái thanh địa chỉ để cho phép rồi thử lại nhé.")}
    }
    if(a.dataset.a==="minh")phat(BAN[key(i)]);
    if(a.dataset.a==="so"){dung();await noi(c[1]);await wait(300);await phat(BAN[key(i)])}
    if(a.dataset.a==="may")mayNghe(c[1],$("#may"),a);
  };
  ve();
}
function mayNghe(dich,box,btn){
  const r=new SR();r.lang="zh-CN";r.interimResults=false;r.maxAlternatives=1;
  box.hidden=false;box.innerHTML=ic("mic","nhay")+" Máy đang nghe… em đọc câu này đi.";btn.disabled=true;
  r.onresult=e=>{const nghe=e.results[0][0].transcript,d=[...bo(docTxt(dich))],n=bo(nghe);
    const trung=d.filter(ch=>n.includes(ch)).length,pt=Math.round(trung/d.length*100);
    box.innerHTML=`Máy nghe được: <b class="zh">${esc(nghe)}</b><br>${d.map(ch=>`<span class="${n.includes(ch)?"ok":"no"}">${ch}</span>`).join("")} <b>${pt}%</b>
      <small>${pt>=90?"Rất rõ!":pt>=60?"Khá rõ — chữ đỏ máy chưa nghe ra.":"Máy chưa nghe rõ, em đọc chậm và to hơn thử nhé."} (Máy chấm chỉ để tham khảo.)</small>`};
  r.onerror=e=>{box.innerHTML=e.error==="not-allowed"?"Máy chưa được phép dùng micro.":"Máy chưa nghe được, em thử lại nhé."};
  r.onend=()=>{btn.disabled=false};
  try{r.start()}catch(x){btn.disabled=false}
}

/* ---------- ③ Đóng vai ---------- */
const MUC=[["Đủ chữ","Hán + pinyin + nghĩa"],["Pinyin","ẩn chữ Hán"],["Nghĩa Việt","chỉ còn nghĩa"],["Trống","tự nhớ mà nói"]];
let VAI="B",MUCi=0,GHI_VAI=false;
function Vai(){
  const P=$("#pBody");
  P.innerHTML=`<p class="huong">Em nhận một vai, máy đọc vai còn lại. Đến lượt em thì <b>nói to câu của mình</b> rồi bấm “Em nói xong”. Càng về sau càng ẩn nhiều chữ.</p>
  <div class="chon">
    <div><b>Em đóng vai</b><div class="seg" id="chVai">${["A","B"].map(v=>`<button type="button" data-v="${v}" aria-pressed="${VAI===v}"><span class="zh">${esc(D.vai[v][0])}</span> <small>${esc(D.vai[v][1])}</small></button>`).join("")}</div></div>
    <div><b>Mức ẩn chữ</b><div class="seg" id="chMuc">${MUC.map((m,j)=>`<button type="button" data-m="${j}" aria-pressed="${MUCi===j}">${j+1}. ${m[0]}<small>${m[1]}</small></button>`).join("")}</div></div>
    ${CO_GHI?`<label class="chk"><input type="checkbox" id="ghiVai" ${GHI_VAI?"checked":""}> Ghi âm lượt nói của em (để cuối bài nghe lại cả cuộc hội thoại)</label>`:""}
  </div>
  <div class="thanh"><button class="btn hot" id="batDau" type="button">${ic("phat")}Bắt đầu</button>${tocDo()}</div>
  <div class="chat vai" id="chat"></div><div id="duoi"></div>`;
  $("#chVai").onclick=e=>{const b=e.target.closest("[data-v]");if(b){VAI=b.dataset.v;Vai()}};
  $("#chMuc").onclick=e=>{const b=e.target.closest("[data-m]");if(b){MUCi=+b.dataset.m;Vai()}};
  const gv=$("#ghiVai");if(gv)gv.onchange=()=>{GHI_VAI=gv.checked};
  $("#batDau").onclick=chay;
}
async function chay(){
  const me=++CHAY,chat=$("#chat"),duoi=$("#duoi"),ban={};
  if(GHI_VAI){try{await mic()}catch(x){GHI_VAI=false;alert("Chưa ghi âm được vì máy chưa cho dùng micro — bài vẫn chạy, chỉ không ghi.")}}
  $("#batDau").innerHTML=ic("lai")+"Làm lại từ đầu";chat.innerHTML="";duoi.innerHTML="";
  for(let i=0;i<D.cau.length&&me===CHAY;i++){
    const c=D.cau[i],cua=c[0]===VAI,l=document.createElement("div");
    l.className=`line ${c[0]} ${cua?"minh":""}`;
    const du=`<span class="hz zh">${esc(c[1])}</span><span class="py">${pyMau(c[2])}</span><span class="vi">${esc(c[3])}</span>`;
    if(!cua){l.innerHTML=`<span class="ai">${esc(D.vai[c[0]][0])}</span><span class="bb">${du}</span>`;chat.append(l);l.scrollIntoView({block:"nearest",behavior:"smooth"});
      await noi(c[1],{pitch:PITCH[c[0]]});await wait(300);continue}
    const an=[du,`<span class="py">${pyMau(c[2])}</span><span class="vi">${esc(c[3])}</span>`,`<span class="vi">${esc(c[3])}</span>`,`<span class="vi goi" hidden>${esc(c[3])}</span><span class="cham3">Đến lượt em nói…</span>`][MUCi];
    l.innerHTML=`<span class="ai">Em</span><span class="bb">${an}<span class="luot">${MUCi===3?`<button type="button" class="nho" data-g>Gợi ý</button>`:""}<button type="button" class="btn hot nho" data-x>${ic("tick")}Em nói xong</button></span></span>`;
    chat.append(l);l.scrollIntoView({block:"nearest",behavior:"smooth"});
    let r=null;if(GHI_VAI)try{r=await ghi();l.classList.add("dangghi")}catch(x){}
    await new Promise(res=>{l.onclick=e=>{if(e.target.closest("[data-g]")){l.querySelector(".goi").hidden=false;e.target.remove()}if(e.target.closest("[data-x]"))res()};
      const kt=setInterval(()=>{if(me!==CHAY){clearInterval(kt);res()}},300);});
    if(r)ban[i]=await r.dung();l.classList.remove("dangghi");
    if(me!==CHAY)return;
    l.querySelector(".bb").innerHTML=du+`<button type="button" class="spk" data-noi="${esc(c[1])}" aria-label="Nghe mẫu">${ic("loa")}</button>`;
    await wait(250);
  }
  if(me!==CHAY)return;
  danhDau(K,"vai");
  duoi.innerHTML=`<div class="ket"><p>${ic("huy","to")}Xong vai <b class="zh">${esc(D.vai[VAI][0])}</b> ở mức ${MUCi+1} (${MUC[MUCi][0]}).${MUCi<3?" Thử mức khó hơn, hoặc đổi vai nhé!":" Giỏi lắm — em đã nói không cần nhìn chữ!"}</p>
    ${Object.keys(ban).length?`<button type="button" class="btn pri" id="ngheLai">${ic("phat")}Nghe lại cả cuộc hội thoại</button> `:""}${tiep()}</div>`;
  const nl=$("#ngheLai");if(nl)nl.onclick=async()=>{const me2=++CHAY;for(let i=0;i<D.cau.length&&me2===CHAY;i++){const c=D.cau[i];
    chat.children[i]&&chat.children[i].classList.add("dang");
    if(ban[i])await phat(ban[i]);else await noi(c[1],{pitch:PITCH[c[0]]});
    chat.children[i]&&chat.children[i].classList.remove("dang");await wait(250)}};
}

/* ---------- ④ Nghe – viết ---------- */
function Viet(){
  const P=$("#pBody"),ds=D.viet.map(j=>D.cau[j]);const trang={};
  P.innerHTML=`<p class="huong">Nghe câu rồi <b>gõ lại bằng chữ Hán</b> (bật bộ gõ tiếng Trung). Không cần gõ dấu câu. Sai 2 lần thì có nút xem đáp án.</p>
  <div class="thanh">${tocDo()}</div>
  <ol class="viet">${ds.map((c,j)=>`<li data-j="${j}"><div class="nghe2"><button type="button" class="spk big" data-noi="${esc(c[1])}" aria-label="Nghe câu ${j+1}">${ic("loa")}</button>
    <button type="button" class="spk" data-noi="${esc(c[1])}" data-rate=".55" aria-label="Nghe chậm">${ic("cham")}</button><span class="goiy">${esc(c[3])}</span></div>
    <div class="typ"><input type="text" lang="zh-CN" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Gõ chữ Hán…" aria-label="Câu ${j+1}"><button type="button" class="btn2" data-k>Kiểm tra</button></div>
    <div class="fb" hidden></div></li>`).join("")}</ol>
  <div class="ket" id="ket" hidden><p>${ic("huy","to")}Xong phần nghe – viết!</p>${tiep()}</div>`;
  P.querySelectorAll(".viet li").forEach(li=>{
    const j=+li.dataset.j,c=ds[j],inp=li.querySelector("input"),fb=li.querySelector(".fb");let sai=0;
    const kiem=()=>{const v=bo(inp.value);if(!v)return;const dung=dapAn(c[1]).includes(v);fb.hidden=false;
      const mau=[...bo(docTxt(c[1]))];
      if(dung){li.classList.add("daxong");inp.disabled=true;fb.className="fb ok";fb.innerHTML=`${ic("tick")} Đúng! <span class="zh">${esc(c[1])}</span> <span class="py">${pyMau(c[2])}</span>`;trang[j]=1}
      else{sai++;fb.className="fb no";fb.innerHTML=`Chưa đúng: ${[...v].map((ch,x)=>`<span class="${mau[x]===ch?"ok":"no"}">${esc(ch)}</span>`).join("")} — nghe lại chữ màu đỏ nhé.`+
        (sai>=2?` <button type="button" class="nho" data-xem>Xem đáp án</button>`:"")}
      if(Object.keys(trang).length===ds.length){$("#ket").hidden=false;danhDau(K,"viet")}};
    li.querySelector("[data-k]").onclick=kiem;inp.onkeydown=e=>{if(e.key==="Enter"&&!e.isComposing)kiem()};
    fb.onclick=e=>{if(e.target.closest("[data-xem]")){li.classList.add("xem");inp.disabled=true;fb.className="fb";
      fb.innerHTML=`Đáp án: <span class="zh">${esc(c[1])}</span> <span class="py">${pyMau(c[2])}</span>`;trang[j]=1;
      if(Object.keys(trang).length===ds.length){$("#ket").hidden=false;danhDau(K,"viet")}}};
  });
}

/* ---------- chung ---------- */
document.addEventListener("click",e=>{const b=e.target.closest("[data-noi]");if(b){e.preventDefault();dung();noi(b.dataset.noi,b.dataset.rate?{rate:+b.dataset.rate}:{})}});
document.querySelectorAll(".tab[data-tab]").forEach(t=>t.onclick=()=>{document.querySelectorAll(".tab[data-tab]").forEach(x=>x.setAttribute("aria-pressed",x===t));
  document.querySelectorAll("[data-pane]").forEach(p=>p.hidden=p.dataset.pane!==t.dataset.tab);
  if(t.dataset.tab==="th")veThList();});
if(!TTS_OK)document.body.classList.add("no-tts");
addEventListener("hashchange",mo);mo();
})();
