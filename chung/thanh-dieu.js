// Biểu đồ thanh điệu dùng chung (lyulaoshi.com/chung/thanh-dieu.js?v=e0cd5c49) — 29/09/2026.
// THANHDIEU.mo('我很好','wǒ hěn hǎo') mở khung luyện: đường thanh chuẩn (vẽ từ pinyin, có biến điệu 3-3) + ghi âm, máy dò cao độ giọng
// (YIN, chạy ngay trên máy, không gửi giọng đi đâu) vẽ chồng lên, rồi nhận xét từng âm tiết. Dùng cho TỪ và CÂU NGẮN (≤ 10 âm tiết).
// Cần: /chung/ic.svg?v=c0a8a094 (icon). Không cần thư viện ngoài.
window.THANHDIEU=(function(){
const T1="āēīōūǖ",T2="áéíóúǘ",T3="ǎěǐǒǔǚ",T4="àèìòùǜ";
const SYL=/(zh|ch|sh|[bpmfdtnlgkhjqxzcsrwy])?[aeiouüvāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+(ng(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔù])|n(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔùg])|r(?![aeiouāáǎàēéěèīíǐìōóǒòūúǔù]))?/gi;
const MAU={1:"#E0545F",2:"#2E9E73",3:"#3B87D6",4:"#7C6BD6",0:"#A3A5B8"};
const thanh=s=>{for(const c of s){if(T1.includes(c))return 1;if(T2.includes(c))return 2;if(T3.includes(c))return 3;if(T4.includes(c))return 4}return 0};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const IC=n=>`<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=c0a8a094#${n}"></use></svg>`;
function amTiet(py){return (py.match(SYL)||[]).map(s=>({s,t:thanh(s)}))}
// đường chuẩn theo thang 5 bậc (Triệu Nguyên Nhậm): mỗi âm tiết là dãy điểm [0..1 → bậc]
function duongChuan(ds){
  const t=ds.map(x=>x.t);
  for(let i=0;i<t.length-1;i++)if(t[i]===3&&t[i+1]===3)t[i]=2;   // 3 + 3 → 2 + 3
  return t.map((x,i)=>{const cuoi=i===t.length-1;
    if(x===1)return{t:x,p:[[0,5],[1,5]]};
    if(x===2)return{t:x,p:[[0,3],[.35,3.2],[1,5]]};
    if(x===3)return cuoi?{t:x,p:[[0,2],[.45,1],[1,4]]}:{t:x,p:[[0,2],[.6,1],[1,1.2]]};   // cuối câu đủ 214, giữa câu nửa thanh 3 (21)
    if(x===4)return{t:x,p:[[0,5],[1,1]]};
    const tr=t[i-1];return{t:0,p:[[0,({1:2,2:3,3:4,4:1})[tr]||3],[1,({1:2,2:3,3:4,4:1})[tr]||3]],nhe:true}});
}
// ---- dò cao độ (YIN rút gọn)
function f0(buf,sr){
  const n=buf.length,W=Math.floor(n/2),minT=Math.floor(sr/500),maxT=Math.min(W-1,Math.floor(sr/70));
  let rms=0;for(let i=0;i<n;i++)rms+=buf[i]*buf[i];rms=Math.sqrt(rms/n);if(rms<0.01)return[0,rms];
  const d=new Float32Array(maxT+1);
  for(let tau=1;tau<=maxT;tau++){let s=0;for(let i=0;i<W;i++){const x=buf[i]-buf[i+tau];s+=x*x}d[tau]=s}
  let run=0,best=-1;const c=new Float32Array(maxT+1);c[0]=1;
  for(let tau=1;tau<=maxT;tau++){run+=d[tau];c[tau]=run?d[tau]*tau/run:1}
  for(let tau=minT;tau<=maxT;tau++){if(c[tau]<0.15){while(tau+1<=maxT&&c[tau+1]<c[tau])tau++;best=tau;break}}
  if(best<0)return[0,rms];
  const a=c[best-1]||c[best],b=c[best],z=c[best+1]||c[best],den=a-2*b+z,sh=den?.5*(a-z)/den:0;
  return[sr/(best+sh),rms];
}
// ---- phân tích dãy khung [Hz,...] (0 = không có giọng) → bậc theo từng âm tiết + nhận xét
function phanTich(hz,ds){
  const v=hz.map((h,i)=>[i,h]).filter(x=>x[1]>0);
  if(v.length<6)return{loi:"Máy chưa nghe rõ giọng. Em đọc to hơn, gần micro hơn nhé."};
  let st=v.map(([i,h])=>[i,12*Math.log2(h/100)]);
  st=st.map((x,k)=>{const w=st.slice(Math.max(0,k-2),k+3).map(y=>y[1]).sort((a,b)=>a-b);return[x[0],w[w.length>>1]]}); // lọc trung vị 5 khung
  const s=st.map(x=>x[1]).sort((a,b)=>a-b),med=s[s.length>>1];
  st=st.filter(x=>Math.abs(x[1]-med)<9);                                 // bỏ khung nhảy quãng tám
  const lv=x=>Math.max(.3,Math.min(5.7,3+(x-med)/2.3));
  const i0=st[0][0],i1=st[st.length-1][0],len=Math.max(1,i1-i0),N=ds.length;
  const diem=st.map(([i,x])=>[(i-i0)/len,lv(x)]);
  // tách âm tiết: nếu số quãng có giọng (ngắt ≥ 2 khung) đúng bằng số âm tiết thì theo quãng, không thì chia đều thời gian
  const runs=[];st.forEach(([i],k)=>{if(!k||i-st[k-1][0]>2)runs.push([i,i]);else runs[runs.length-1][1]=i});
  const bien=runs.length===N?runs.map(([a,b])=>[(a-i0)/len,(b-i0)/len+1e-9]):ds.map((_,k)=>[k/N,(k+1)/N+(k===N-1?1e-9:0)]);
  const sx=diem.map(x=>x[1]).sort((a,b)=>a-b),p90=sx[Math.floor(sx.length*.9)],ref=duongChuan(ds),kq=ds.map((a,k)=>{
    const seg=diem.filter(([u])=>u>=bien[k][0]&&u<bien[k][1]).map(x=>x[1]);
    const r=ref[k];if(r.nhe||seg.length<3)return{...a,tt:r.t,ok:null,msg:r.nhe?"thanh nhẹ":"hơi ngắn, máy chưa đo được"};
    const q=Math.max(1,Math.floor(seg.length/4)),dau=avg(seg.slice(0,q)),tb=avg(seg),mn=Math.min(...seg),mx=Math.max(...seg);
    // lên nhiều nhất (thấp trước, cao sau) và rơi nhiều nhất (cao trước, thấp sau) trong âm tiết
    let len_=0,roi=0,lo=seg[0],hi=seg[0];seg.forEach(v=>{len_=Math.max(len_,v-lo);roi=Math.max(roi,hi-v);lo=Math.min(lo,v);hi=Math.max(hi,v)});
    let ok=false,msg="";
    if(r.t===1){const phang=mx-mn<1.3,cao=N===1||tb>=p90-.8;ok=phang&&cao;msg=ok?"cao và phẳng":!cao?"thanh 1 cần giữ cao hơn":"thanh 1 cần giữ phẳng, đừng lên xuống"}
    else if(r.t===2){ok=len_>=.7&&roi<len_;msg=ok?"đi lên rõ":"thanh 2 cần đi lên rõ hơn (như hỏi lại “hả?”)"}
    else if(r.t===3){ok=mn<=2.4&&mn<dau-.2;msg=ok?"xuống thấp":"thanh 3 cần xuống thấp, trầm hơn"}
    else if(r.t===4){ok=roi>=1&&len_<roi;msg=ok?"rơi mạnh":"thanh 4 cần rơi mạnh từ cao xuống"}
    return{...a,tt:r.t,ok,msg,bien:r.t!==a.t}});
  // đặt từng khung giọng vào đúng ô âm tiết trên biểu đồ (khớp với đường chuẩn), kèm số âm tiết để ngắt nét giữa các âm tiết
  const ve_=diem.map(([u,L])=>{let k=bien.findIndex(([a,b])=>u>=a&&u<b);if(k<0)return null;const [a,b]=bien[k];return[(k+.08+(u-a)/Math.max(b-a,1e-6)*.84)/N,L,k]}).filter(Boolean);
  return{diem:ve_,kq,ref};
}
const avg=a=>a.reduce((x,y)=>x+y,0)/a.length;
// ---- giao diện
let box,cv,S={};
function css(){if(document.getElementById("td-css"))return;const st=document.createElement("style");st.id="td-css";st.textContent=`
.td-nen{position:fixed;inset:0;z-index:9999;background:rgba(20,20,35,.55);display:grid;place-items:center;padding:16px}
.td-hop{width:min(560px,100%);max-height:calc(100vh - 32px);overflow:auto;background:var(--card,#fff);color:var(--ink,#2B2E45);border-radius:22px;padding:18px 18px 16px;box-shadow:0 20px 50px rgba(0,0,0,.3);font-family:var(--vi,"Be Vietnam Pro",system-ui,sans-serif)}
.td-dau{display:flex;align-items:flex-start;gap:10px}.td-dau>div{flex:1;min-width:0}
.td-zh{font-family:var(--kai,"STKaiti","KaiTi",serif);font-size:30px;line-height:1.25}.td-py{font-size:16px;font-weight:700}
.td-x{border:0;background:var(--ground2,#EFEBF7);color:inherit;width:36px;height:36px;border-radius:50%;cursor:pointer;flex:none;display:grid;place-items:center}
.td-hop canvas{width:100%;height:210px;display:block;margin:12px 0 6px;background:var(--ground,#F7F5FB);border-radius:14px}
.td-chu{font-size:12.5px;color:var(--muted,#6B6E86);display:flex;gap:14px;flex-wrap:wrap}.td-chu i{display:inline-block;width:18px;height:4px;border-radius:2px;vertical-align:middle;margin-right:5px}
.td-nut{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0 4px}
.td-nut button{display:inline-flex;align-items:center;gap:6px;border:0;cursor:pointer;font:inherit;font-weight:700;font-size:14px;padding:10px 14px;border-radius:12px;background:var(--ground2,#EFEBF7);color:inherit}
.td-nut .td-ghi{background:var(--ink,#2B2E45);color:var(--ground,#fff)}.td-nut .td-ghi.dang{background:#E0545F;color:#fff;animation:tdn 1s infinite}
@keyframes tdn{50%{box-shadow:0 0 0 6px rgba(224,84,95,.2)}}
.td-nut button:disabled{opacity:.45;cursor:default}
.td-kq{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.td-kq span{display:inline-flex;flex-direction:column;align-items:center;padding:6px 9px;border-radius:12px;background:var(--ground,#F7F5FB);font-size:12px;color:var(--muted,#6B6E86);max-width:9.5em;text-align:center;line-height:1.3}
.td-kq b{font-size:15px}.td-kq .ok{background:#DDF3EA}.td-kq .sai{background:#FDE6E7}
.td-tong{font-weight:800;margin-top:10px}.td-note{font-size:12px;color:var(--muted,#6B6E86);margin:10px 0 0}
.td-hop .lli{display:inline-block;width:1.2em;height:1.2em;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;vertical-align:-.22em}
`;document.head.append(st)}
function mo(zh,py){
  css();dong();S={zh,py,ds:amTiet(py),blob:null,kq:null};
  if(!S.ds.length)return;
  box=document.createElement("div");box.className="td-nen";
  box.innerHTML=`<div class="td-hop" role="dialog" aria-label="Luyện thanh điệu"><div class="td-dau"><div><div class="td-zh">${esc(zh)}</div><div class="td-py">${S.ds.map(a=>`<span style="color:${MAU[a.t]}">${esc(a.s)}</span>`).join(" ")}</div></div>
   <button class="td-x" type="button" aria-label="Đóng">${IC("sai")}</button></div>
   <canvas width="1040" height="420"></canvas>
   <div class="td-chu"><span><i style="background:linear-gradient(90deg,#E0545F,#2E9E73,#3B87D6,#7C6BD6);opacity:.6"></i>đường thanh chuẩn</span><span><i style="background:var(--ink,#2B2E45)"></i>giọng của em</span></div>
   <div class="td-nut"><button type="button" class="td-mau">${IC("loa")}Nghe mẫu</button><button type="button" class="td-ghi">${IC("mic")}Ghi âm và đọc</button><button type="button" class="td-lai" disabled>${IC("phat")}Nghe lại mình</button></div>
   <div class="td-kqbox"></div>
   <p class="td-note">Máy đo cao độ giọng để tham khảo: đọc rõ, chỗ yên tĩnh, mỗi lần một từ hoặc một câu ngắn. Giọng em chỉ xử lý trên máy này, không gửi đi đâu.</p></div>`;
  document.body.append(box);cv=box.querySelector("canvas");ve();
  box.addEventListener("click",e=>{if(e.target===box||e.target.closest(".td-x"))dong()});
  box.querySelector(".td-mau").onclick=()=>noi(zh);
  box.querySelector(".td-ghi").onclick=ghiAm;
  box.querySelector(".td-lai").onclick=()=>{if(S.blob)new Audio(URL.createObjectURL(S.blob)).play()};
  document.addEventListener("keydown",esc_);
}
function esc_(e){if(e.key==="Escape")dong()}
function dong(){if(S.dung)S.dung();if(box){box.remove();box=null}document.removeEventListener("keydown",esc_)}
function noi(t){if(!("speechSynthesis" in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t.replace(/\s/g,""));u.lang="zh-CN";
  const v=speechSynthesis.getVoices().filter(v=>/^(zh|cmn)/i.test(v.lang)&&!/TW|HK|yue/i.test(v.lang));u.voice=v.find(x=>/google/i.test(x.name))||v.find(x=>/tingting/i.test(x.name))||v[0]||null;u.rate=.8;speechSynthesis.speak(u)}
function ve(){
  const c=cv.getContext("2d"),W=cv.width,H=cv.height,pl=24,pr=24,pt=24,pb=40,N=S.ds.length,y=L=>pt+(5-L)/4*(H-pt-pb),x=u=>pl+u*(W-pl-pr);
  c.clearRect(0,0,W,H);c.strokeStyle="rgba(120,120,150,.18)";c.lineWidth=2;
  for(let L=1;L<=5;L++){c.beginPath();c.moveTo(pl,y(L));c.lineTo(W-pr,y(L));c.stroke()}
  const ref=duongChuan(S.ds);
  ref.forEach((r,k)=>{const a=k/N+.08/N,b=(k+1)/N-.08/N;c.strokeStyle=MAU[r.t];c.globalAlpha=r.nhe?.35:.55;c.lineWidth=18;c.lineCap="round";c.lineJoin="round";c.beginPath();
    r.p.forEach(([u,L],j)=>{const X=x(a+u*(b-a)),Y=y(L);j?c.lineTo(X,Y):c.moveTo(X,Y)});c.stroke();c.globalAlpha=1;
    c.fillStyle=MAU[S.ds[k].t];c.font="700 26px system-ui,sans-serif";c.textAlign="center";c.fillText(S.ds[k].s,x((a+b)/2),H-10)});
  if(S.kq&&S.kq.diem){c.strokeStyle=(getComputedStyle(document.body).getPropertyValue("--ink")||"").trim()||"#2B2E45";c.lineWidth=5;c.lineCap="round";c.beginPath();let pk=-1,pu=0;
    S.kq.diem.forEach(([u,L,k])=>{const X=x(u),Y=y(L);if(k!==pk)c.moveTo(X,Y);else c.lineTo(X,Y);pk=k});c.stroke()}
}
function ketQua(){
  const kb=box.querySelector(".td-kqbox"),k=S.kq;
  if(k.loi){kb.innerHTML=`<p class="td-tong">${esc(k.loi)}</p>`;return}
  const cham=k.kq.filter(a=>a.ok!==null),dung=cham.filter(a=>a.ok).length;
  kb.innerHTML=`<div class="td-kq">${k.kq.map(a=>`<span class="${a.ok===null?"":a.ok?"ok":"sai"}"><b style="color:${MAU[a.t]}">${esc(a.s)}</b>${a.ok===null?"":a.ok?IC("tick"):IC("sai")}${esc(a.msg)}${a.bien?" (biến thành thanh 2)":""}</span>`).join("")}</div>
   <p class="td-tong">${cham.length?`Đúng thanh ${dung}/${cham.length} âm tiết.`:""} ${dung===cham.length&&cham.length?"Giỏi lắm!":"Nghe mẫu rồi thử lại nhé."}</p>`;
}
async function ghiAm(){
  const b=box.querySelector(".td-ghi");
  if(S.dung){S.dung();return}
  let stream;try{stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:true,autoGainControl:true}})}
  catch(e){box.querySelector(".td-kqbox").innerHTML=`<p class="td-tong">Chưa dùng được micro. Em bấm biểu tượng ổ khoá cạnh thanh địa chỉ để cho phép micro rồi thử lại nhé.</p>`;return}
  const ac=new (window.AudioContext||window.webkitAudioContext)(),src=ac.createMediaStreamSource(stream),an=ac.createAnalyser();an.fftSize=2048;src.connect(an);
  const buf=new Float32Array(an.fftSize),hz=[],rec=window.MediaRecorder?new MediaRecorder(stream):null,ch=[];if(rec){rec.ondataavailable=e=>ch.push(e.data);rec.start()}
  const maxMs=1500+S.ds.length*550,t0=performance.now();let coGiong=false,lang=0;
  b.classList.add("dang");b.innerHTML=IC("dung")+"Đang nghe… đọc đi";
  const tick=setInterval(()=>{an.getFloatTimeDomainData(buf);const [h,r]=f0(buf,ac.sampleRate);hz.push(h&&r>.012?h:0);
    if(h&&r>.012){coGiong=true;lang=0}else if(coGiong)lang+=20;
    if((coGiong&&lang>650)||performance.now()-t0>maxMs)S.dung()},20);
  S.dung=()=>{clearInterval(tick);S.dung=null;stream.getTracks().forEach(t=>t.stop());ac.close();
    if(rec){rec.onstop=()=>{S.blob=new Blob(ch,{type:rec.mimeType||"audio/webm"});if(box)box.querySelector(".td-lai").disabled=false};rec.stop()}
    if(!box)return;b.classList.remove("dang");b.innerHTML=IC("lai")+"Đọc lại";
    S.kq=phanTich(hz,S.ds);ve();ketQua()};
}
return{mo,dong,amTiet,duongChuan,_f0:f0,_phanTich:phanTich,_thu(hz){S.kq=phanTich(hz,S.ds);ve();ketQua();return S.kq}};
})();
