// 播客 · Làm podcast (阅读盒 → 朗读) — 05/10/2026.
// Học viên làm người dẫn: kịch bản (mở đầu · bài · kết) → máy nhắc chữ + thu từng phần → nhạc tự tạo (Web Audio, không dùng nhạc có bản quyền)
// → ghép thành 1 file WAV có phụ đề → ảnh bìa TikTok 9:16 + ảnh vuông + lời giới thiệu có hashtag → lưu “Góc podcast của em” (IndexedDB, chỉ trên máy).
// Cần window.LD (doc.js) và LLI (/chung/ic-ve.js?v=e6b0f952). Mở bằng #<id bài>/podcast.
window.LD_POD=(function(){
const L=()=>window.LD;
// câu kết “这个故事告诉我们：…” của từng truyện [chữ Hán, pinyin]
const YZH={
  "quad-uong-nuoc":["遇到困难的时候，要多想办法。","yùdào kùnnan de shíhou, yào duō xiǎng bànfǎ."],
  "rua-tho":["不要骄傲，坚持就能成功。","búyào jiāo'ào, jiānchí jiù néng chénggōng."],
  "om-cay-doi-tho":["不能只等好运气，要自己努力。","bù néng zhǐ děng hǎo yùnqi, yào zìjǐ nǔlì."],
  "ve-ran-them-chan":["做事情不要做多余的事。","zuò shìqing búyào zuò duōyú de shì."],
  "keo-ma":["做事情不能太着急。","zuò shìqing bù néng tài zháojí."],
  "mat-cuu-sua-chuong":["有了错误，马上改正还不晚。","yǒu le cuòwù, mǎshàng gǎizhèng hái bù wǎn."],
  "khac-thuyen-tim-guom":["情况变了，办法也要变。","qíngkuàng biàn le, bànfǎ yě yào biàn."],
  "ech-day-gieng":["世界很大，我们要多学习。","shìjiè hěn dà, wǒmen yào duō xuéxí."],
  "cao-muon-oai-hum":["不要被别人的样子骗了。","búyào bèi biérén de yàngzi piàn le."],
  "tu-mau-thuan":["说话要前后一样。","shuōhuà yào qiánhòu yíyàng."],
  "meo-con-tim-me":["找不到的时候，要多问问。","zhǎo bu dào de shíhou, yào duō wènwen."],
  "nho-cu-cai":["大家一起努力，什么都能做好。","dàjiā yìqǐ nǔlì, shénme dōu néng zuò hǎo."],
  "cao-va-nho":["得不到的东西，不要说它不好。","dé bu dào de dōngxi, búyào shuō tā bù hǎo."],
  "meo-con-cau-ca":["做事情要一心一意。","zuò shìqing yào yìxīn-yíyì."]
};
const NHAC={nhe:["Nhẹ nhàng","piano chậm","#2E9E73","#E3F4EC"],vui:["Vui tươi","tiết tấu nhanh","#E7823A","#FDEBDD"],cotich:["Cổ tích","âm hưởng ngũ cung","#C8342A","#FBE6DF"],khong:["Không nhạc","chỉ giọng đọc","#6B6E86","#EFEBF7"]};
// thư viện nhạc CC0 — thêm file vào luyen-doc/music/ rồi khai báo ở đây
const NHAC_TV=[
  // {id:"sang", ten:"Sáng trong", mo:"piano nhẹ nhàng", f:"music/sang-trong.mp3"},
];
const PHAN=[["mo","Mở đầu","开场"],["chinh","Bài đọc","正文"],["ket","Kết","结尾"]];
let P=null;
const st=(k,d)=>L().store.get(k,d),ss=(k,v)=>L().store.set(k,v);

function kichBan(B,ten){
  const C=L().tach(B),truyen=B.cd==="truyen",y=YZH[B.id];
  const mo=[["大家好，欢迎收听“吕老师汉语盒”播客。","Dàjiā hǎo, huānyíng shōutīng “Lǚ lǎoshī Hànyǔ hé” bōkè.","Chào mọi người, chào mừng đến với podcast “Hộp tiếng Trung cô Lã”."],
    ["我是"+ten+"。","Wǒ shì "+ten+".","Mình là "+ten+"."],
    [(truyen?"今天我给大家讲一个故事：":"今天我给大家读一篇短文：")+"《"+B.ten+"》。",(truyen?"Jīntiān wǒ gěi dàjiā jiǎng yí ge gùshi: ":"Jīntiān wǒ gěi dàjiā dú yì piān duǎnwén: ")+"«"+(B.tn&&B.tn.zh===B.ten?B.tn.py:B.ten)+"».",(truyen?"Hôm nay mình kể cho mọi người nghe câu chuyện: ":"Hôm nay mình đọc cho mọi người nghe bài: ")+B.tenVi+"."]];
  const chinh=C.map(c=>[c.zh,c.py,c.vi]);
  const ket=[...(y?[["这个故事告诉我们："+y[0],"Zhège gùshi gàosu wǒmen: "+y[1],"Câu chuyện cho chúng ta biết: "+(B.y||"")]]:[]),
    ["谢谢大家收听，我们下次见！","Xièxie dàjiā shōutīng, wǒmen xiàcì jiàn!","Cảm ơn mọi người đã lắng nghe, hẹn gặp lại lần sau!"]];
  return{mo,chinh,ket};
}
const soChu=s=>s.replace(/[\s，。？！、：；“”（）《》…,.!?:]/g,"").length;

/* ============ GIAO DIỆN ============ */
function mo(B){
  const {$,esc,IC}=L();
  P={B,ten:st("ten",""),nhac:st("pnhac","nhe"),vol:st("pvol",.5),nhip:st("pnhip","vua"),nhacFile:null,parts:{},kq:null};
  document.title=B.ten+" · 播客 · 阅读盒 – 吕老师汉语盒";
  $("#pod").innerHTML=`<div class="d-dau"><a href="#">${IC("truoc")} Mục lục 阅读盒</a>
      <h1 class="pd-h">${IC("loa-to")}<span><small>播客 · Làm podcast</small><span class="zh">${esc(B.ten)}</span> <em>${esc(B.tenVi)}</em></span></h1></div>
    <ol class="pd-buoc">
      <li><h2><b>1</b>Tên người dẫn</h2><div class="pd-ten"><input id="pdTen" maxlength="20" placeholder="Tên em (vd. 阿明 hoặc Minh)" value="${esc(P.ten)}"><small>Tên này đọc ở câu “我是…” và in trên ảnh bìa.</small></div></li>
      <li><h2><b>2</b>Thu âm từng phần</h2>
        <div class="pd-nhip"><span>Nhịp chữ chạy</span>${[["cham","Chậm"],["vua","Vừa"],["nhanh","Nhanh"]].map(([k,t])=>`<button type="button" data-nhip="${k}" aria-pressed="${P.nhip===k}">${t}</button>`).join("")}</div>
        <div id="pdPhan"></div></li>
      <li><h2><b>3</b>Nhạc nền</h2><div class="pd-nhac">${Object.entries(NHAC).map(([k,v])=>`<button type="button" data-nhac="${k}" aria-pressed="${P.nhac===k}" style="--m:${v[2]};--ms:${v[3]}"><b>${v[0]}</b><small>${v[1]}</small></button>`).join("")}</div>
        <div class="pd-vol"><button type="button" id="pdNghe">${IC("phat")}Nghe thử</button><label>Nhạc <input type="range" id="pdVol" min="0" max="1" step=".05" value="${P.vol}"> to</label></div>
        <div class="pd-nhac-em">
          <div class="pd-sep"><span>hoặc dùng nhạc của em</span></div>
          ${NHAC_TV.length?`<div class="pd-tv"><b>Thư viện nhạc</b><div class="pd-tvds">${NHAC_TV.map(n=>`<button type="button" data-tv="${n.id}" aria-pressed="false"><b>${esc(n.ten)}</b><small>${esc(n.mo)}</small></button>`).join("")}</div></div>`:""}
          <label class="pd-tai-nhac" for="pdNhacFile">${IC("gui")} Tải file nhạc lên (.mp3, .m4a…)</label>
          <input type="file" id="pdNhacFile" accept="audio/*" class="sr-only">
          <div id="pdNhacFileTen"></div>
        </div></li>
      <li><h2><b>4</b>Ghép thành tập podcast</h2><button type="button" class="btn hot" id="pdGhep" disabled>${IC("loa-to")}Tạo tập podcast</button><p class="muted" id="pdGhepNote">Thu đủ 3 phần để tạo tập.</p><div id="pdKq"></div></li>
    </ol>`;
  vePhan();
  $("#pdTen").oninput=e=>{P.ten=e.target.value.trim();ss("ten",P.ten);vePhan()};
  $("#pod").onclick=onClick;
  $("#pdVol").oninput=e=>{P.vol=+e.target.value;ss("pvol",P.vol)};
  const fi=$("#pdNhacFile");if(fi)fi.onchange=async e=>{const f=e.target.files[0];if(!f)return;const ab=await f.arrayBuffer();P.nhacFile={ten:f.name,ab};$("#pod").querySelectorAll("[data-tv]").forEach(x=>x.setAttribute("aria-pressed","false"));veNhacFile()};
  scrollTo({top:0});
}
function veNhacFile(){
  const {$,esc,IC}=L(),el=$("#pdNhacFileTen");if(!el)return;
  if(P.nhacFile)el.innerHTML=`<div class="nf-ten">${IC("loa")} <b>${esc(P.nhacFile.ten.replace(/\.[^.]+$/,""))}</b> <button type="button" data-bonhac="1">✕ Bỏ</button></div>`;
  else el.innerHTML="";
}
function vePhan(){
  const {$,esc,IC,pyMau,mmss}=L(),K=kichBan(P.B,P.ten||"___");
  $("#pdPhan").innerHTML=PHAN.map(([k,vi,zh])=>{const pt=P.parts[k],cau=K[k];
    return`<div class="pd-p ${pt?"co":""}"><div class="pd-pd"><b><span class="zh">${zh}</span> ${vi}</b><small>${cau.length} câu · ${soChu(cau.map(c=>c[0]).join(""))} chữ${pt?` · đã thu ${mmss(pt.dur)}`:""}</small></div>
      <div class="pd-kb">${cau.slice(0,k==="chinh"?2:9).map(c=>`<p><span class="zh">${esc(c[0])}</span><i>${esc(c[2])}</i></p>`).join("")}${k==="chinh"&&cau.length>2?`<p class="muted">… và ${cau.length-2} câu nữa của bài</p>`:""}</div>
      <div class="pd-pn"><button type="button" class="pd-thu" data-thu="${k}" ${!P.ten&&k==="mo"?"disabled":""}>${IC("mic")}${pt?"Thu lại":"Thu phần này"}</button>${pt?`<button type="button" data-nghe="${k}">${IC("phat")}Nghe</button>`:""}</div></div>`}).join("");
  const du=PHAN.every(([k])=>P.parts[k]);$("#pdGhep").disabled=!du;$("#pdGhepNote").textContent=du?"Đã đủ 3 phần. Bấm để ghép nhạc và tạo tập.":"Thu đủ 3 phần để tạo tập."+(P.ten?"":" (Nhập tên em trước.)");
}
async function onClick(e){
  const {$}=L();
  const bo=e.target.closest("[data-bonhac]");if(bo){P.nhacFile=null;const fi=$("#pdNhacFile");if(fi)fi.value="";veNhacFile();return}
  const tv=e.target.closest("[data-tv]");if(tv){const id=tv.dataset.tv,item=NHAC_TV.find(n=>n.id===id);if(!item)return;
    const ab=await fetch(item.f).then(r=>r.arrayBuffer());P.nhacFile={ten:item.ten,ab};
    $("#pod").querySelectorAll("[data-tv]").forEach(x=>x.setAttribute("aria-pressed",x===tv));veNhacFile();return}
  const n=e.target.closest("[data-nhip]");if(n){P.nhip=n.dataset.nhip;ss("pnhip",P.nhip);$("#pod").querySelectorAll("[data-nhip]").forEach(x=>x.setAttribute("aria-pressed",x===n));return}
  const m=e.target.closest("[data-nhac]");if(m){P.nhac=m.dataset.nhac;ss("pnhac",P.nhac);$("#pod").querySelectorAll("[data-nhac]").forEach(x=>x.setAttribute("aria-pressed",x===m));return}
  const t=e.target.closest("[data-thu]");if(t){thu(t.dataset.thu);return}
  const g=e.target.closest("[data-nghe]");if(g){new Audio(P.parts[g.dataset.nghe].url).play();return}
  if(e.target.closest("#pdNghe")){ngheThu();return}
  if(e.target.closest("#pdGhep")){ghep();return}
}

/* ============ MÁY NHẮC CHỮ + THU ÂM TỪNG PHẦN ============ */
async function thu(k){
  const {$,esc,IC,pyMau,NHIP,demNguoc}=L(),cau=kichBan(P.B,P.ten||"___")[k];
  let stm;try{stm=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}})}
  catch(x){alert("Chưa dùng được micro. Em bấm biểu tượng ổ khoá cạnh thanh địa chỉ, cho phép micro rồi thử lại nhé.");return}
  const T=$("#pdTele");T.hidden=false;document.body.classList.add("pd-mo");
  const ve=(i,f)=>{const c=cau[i];T.innerHTML=`<div class="pt-tren"><span>${esc(PHAN.find(p=>p[0]===k)[1])} · câu ${i+1}/${cau.length}</span><b id="ptGio">●</b><button type="button" id="ptDung">${IC("dung")}Dừng</button></div>
    <div class="pt-cau"><p class="pt-zh">${[...c[0]].map((ch,j)=>`<span class="${j<f*c[0].length?"da":""}">${esc(ch)}</span>`).join("")}</p><p class="pt-py">${pyMau(c[1])}</p></div>
    <div class="pt-sau">${cau[i+1]?`<span class="zh">${esc(cau[i+1][0])}</span>`:"Hết phần này"}</div>`;$("#ptDung").onclick=()=>{huy=true}};
  let huy=false;ve(0,0);
  await demNguoc();
  const rec=new MediaRecorder(stm),ch=[];rec.ondataavailable=e=>ch.push(e.data);const t0=performance.now();rec.start();
  const lich=[];
  for(let i=0;i<cau.length&&!huy;i++){
    const dur=soChu(cau[i][0])*NHIP[P.nhip]*1000+350,bd=(performance.now()-t0)/1000,f0=performance.now();
    await new Promise(r=>{const tm=setInterval(()=>{const f=(performance.now()-f0)/dur,sp=T.querySelectorAll(".pt-zh span"),n=sp.length;
      if(!sp.length||+T.dataset.i!==i){ve(i,0);T.dataset.i=i}T.querySelectorAll(".pt-zh span").forEach((x,j)=>x.classList.toggle("da",j<f*n));
      const g=$("#ptGio");if(g)g.textContent=L().mmss((performance.now()-t0)/1000);if(f>=1||huy){clearInterval(tm);r()}},50)});
    lich.push([bd,(performance.now()-t0)/1000]);
    await new Promise(r=>setTimeout(r,500));
  }
  rec.onstop=()=>{stm.getTracks().forEach(x=>x.stop());T.hidden=true;T.dataset.i="";document.body.classList.remove("pd-mo");
    if(huy&&lich.length<cau.length){vePhan();return}   // dừng giữa chừng: bỏ bản thu
    const blob=new Blob(ch,{type:rec.mimeType||"audio/webm"});if(P.parts[k])URL.revokeObjectURL(P.parts[k].url);
    P.parts[k]={blob,url:URL.createObjectURL(blob),dur:(performance.now()-t0)/1000,lich,cau};P.kq=null;$("#pdKq").innerHTML="";vePhan()};
  rec.stop();
}

/* ============ NHẠC TỰ TẠO (Web Audio) ============ */
const F=n=>440*Math.pow(2,(n-69)/12);   // số MIDI → Hz
function not(ctx,out,midi,t,dur,vol,kieu){
  const o=ctx.createOscillator(),o2=ctx.createOscillator(),g=ctx.createGain();
  o.type=kieu==="dan"?"triangle":"sine";o2.type="triangle";o.frequency.value=F(midi);o2.frequency.value=F(midi)*2.001;
  const g2=ctx.createGain();g2.gain.value=kieu==="dan"?.25:.12;o2.connect(g2);g2.connect(g);o.connect(g);g.connect(out);
  g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.012);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.start(t);o2.start(t);o.stop(t+dur+.05);o2.stop(t+dur+.05);
}
// kind: "vao" (nhạc hiệu mở), "nen" (nhạc nền từ t0 tới t1), "ra" (nhạc hiệu kết)
function nhac(ctx,out,style,kind,t0,t1){
  if(style==="khong")return 0;
  let seed=7;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;
  const S={nhe:{bpm:70,ch:[[60,64,67],[55,59,62],[57,60,64],[53,57,60]],k:"piano"},
           vui:{bpm:112,ch:[[60,64,67],[65,69,72],[67,71,74],[60,64,67]],k:"piano"},
           cotich:{bpm:80,ch:[[60,62,64,67,69],[60,62,64,67,69],[57,60,62,64,67],[55,57,60,62,64]],k:"dan"}}[style];
  const b=60/S.bpm;
  if(kind==="vao"||kind==="ra"){
    const c=S.ch[0],seq=kind==="vao"?[c[0],c[1],c[2],c[0]+12]:[c[0]+12,c[2],c[1],c[0]];
    seq.forEach((m,i)=>not(ctx,out,m+12,t0+i*b*.5,b*1.6,.5,S.k));
    const tc=t0+seq.length*b*.5;S.ch[0].slice(0,3).forEach(m=>not(ctx,out,m+12,tc,b*3,.32,S.k));not(ctx,out,S.ch[0][0]-12,tc,b*3.5,.35,S.k);
    return tc+b*3-t0;
  }
  // nhạc nền: vòng hợp âm, mỗi hợp âm 4 phách
  let t=t0,i=0;
  while(t<t1){const c=S.ch[i%S.ch.length];not(ctx,out,c[0]-12,t,b*4,.3,S.k);
    for(let k=0;k<(style==="vui"?8:4)&&t<t1;k++){const m=style==="cotich"?c[Math.floor(rnd()*c.length)]+12:c[k%c.length]+12;
      not(ctx,out,m,t,style==="vui"?b*.9:b*2.2,style==="vui"?.22:.25,S.k);t+=style==="vui"?b/2:b}
    i++}
  return t1-t0;
}
let ngheCtx=null;
function ngheThu(){
  if(ngheCtx){ngheCtx.close();ngheCtx=null;return}
  const ctx=ngheCtx=new (window.AudioContext||window.webkitAudioContext)(),g=ctx.createGain();g.gain.value=.25+.5*P.vol;g.connect(ctx.destination);
  if(P.nhacFile){
    ctx.decodeAudioData(P.nhacFile.ab.slice()).then(buf=>{if(ngheCtx!==ctx)return;
      const src=ctx.createBufferSource();src.buffer=buf;src.connect(g);src.start();
      setTimeout(()=>{if(ngheCtx===ctx){try{src.stop()}catch(x){}ctx.close();ngheCtx=null}},8000);
    }).catch(()=>{ctx.close();ngheCtx=null});
  } else {
    const d=nhac(ctx,g,P.nhac,"vao",ctx.currentTime+.05);nhac(ctx,g,P.nhac,"nen",ctx.currentTime+.05+d,ctx.currentTime+d+6);
    setTimeout(()=>{if(ngheCtx===ctx){ctx.close();ngheCtx=null}},(d+6.5)*1000);
  }
}

/* ============ GHÉP TẬP ============ */
async function ghep(){
  const {$,IC}=L();$("#pdGhep").disabled=true;$("#pdGhepNote").textContent="Đang ghép giọng đọc với nhạc…";
  try{
    const dec=new (window.AudioContext||window.webkitAudioContext)(),buf={};
    for(const [k] of PHAN)buf[k]=await dec.decodeAudioData(await P.parts[k].blob.arrayBuffer());
    const nhacBuf=P.nhacFile?await dec.decodeAudioData(P.nhacFile.ab.slice()):null;
    dec.close();
    const useFil=!!nhacBuf;
    const SR=22050,J=useFil?1.2:(P.nhac==="khong"?0.4:3.2),G=.7,tm={mo:J},dn=k=>buf[k].duration;
    tm.chinh=tm.mo+dn("mo")+G;tm.ket=tm.chinh+dn("chinh")+G;const het=tm.ket+dn("ket")+.4,tong=het+(useFil?1.2:(P.nhac==="khong"?.3:3.8));
    const off=new OfflineAudioContext(1,Math.ceil(tong*SR),SR);
    const comp=off.createDynamicsCompressor();comp.threshold.value=-24;comp.ratio.value=4;const gv=off.createGain();gv.gain.value=1.6;comp.connect(gv);gv.connect(off.destination);
    for(const [k] of PHAN){const s=off.createBufferSource();s.buffer=buf[k];s.connect(comp);s.start(tm[k])}
    if(nhacBuf){
      const gf=off.createGain(),nv=.12+.22*P.vol;
      gf.gain.setValueAtTime(0.0001,.05);gf.gain.linearRampToValueAtTime(nv,J);
      gf.gain.setValueAtTime(nv,het-.8);gf.gain.linearRampToValueAtTime(0.0001,het+.4);
      gf.connect(off.destination);
      let tn=0;while(tn<het+1){const ns=off.createBufferSource();ns.buffer=nhacBuf;ns.connect(gf);ns.start(tn);tn+=nhacBuf.duration}
    } else if(P.nhac!=="khong"){
      const gj=off.createGain();gj.gain.value=.18+.3*P.vol;gj.connect(off.destination);
      nhac(off,gj,P.nhac,"vao",.05);nhac(off,gj,P.nhac,"ra",het);
      const gn=off.createGain(),nv=.03+.09*P.vol;gn.gain.setValueAtTime(0.0001,J-.6);gn.gain.linearRampToValueAtTime(nv,J);gn.gain.setValueAtTime(nv,het-.8);gn.gain.linearRampToValueAtTime(0.0001,het);gn.connect(off.destination);
      nhac(off,gn,P.nhac,"nen",J-.6,het);
    }
    const out=await off.startRendering(),wav=chuyenWav(out);
    // phụ đề: thời điểm từng câu = mốc phần + lịch chữ chạy lúc thu
    const cues=[];for(const [k] of PHAN){const p=P.parts[k];p.lich.forEach(([a,b],i)=>cues.push([tm[k]+a,tm[k]+b,p.cau[i][0],p.cau[i][1],p.cau[i][2]]))}
    const so=(await dsTap()).length+1;
    P.kq={id:Date.now(),baiId:P.B.id,ten:P.B.ten,tenVi:P.B.tenVi,cap:P.B.cap,tnPy:P.B.tn&&P.B.tn.zh===P.B.ten?P.B.tn.py:null,mo2:L().tach(P.B).slice(0,2).map(x=>x.zh),
      hocVien:P.ten,ngay:new Date().toISOString(),dur:out.duration,nhac:P.nhacFile?"file":P.nhac,nhacTen:P.nhacFile?P.nhacFile.ten.replace(/\.[^.]+$/,""):null,so,wav,cues};
    await taoAnh(P.kq,st("pmau","pastel"));
    await luuTap(P.kq);
    veKq(P.kq,$("#pdKq"));$("#pdGhepNote").textContent="Xong! Tập podcast đã lưu vào Góc podcast của em.";
  }catch(x){$("#pdGhepNote").textContent="Chưa ghép được: "+x.message+". Em thử thu lại hoặc dùng Chrome nhé."}
  $("#pdGhep").disabled=false;
}
function chuyenWav(b){
  const d=b.getChannelData(0),n=d.length,v=new DataView(new ArrayBuffer(44+n*2)),ws=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i))};
  ws(0,"RIFF");v.setUint32(4,36+n*2,true);ws(8,"WAVE");ws(12,"fmt ");v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);
  v.setUint32(24,b.sampleRate,true);v.setUint32(28,b.sampleRate*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);ws(36,"data");v.setUint32(40,n*2,true);
  let pk=0;for(let i=0;i<n;i++)pk=Math.max(pk,Math.abs(d[i]));const k=pk>.98?.98/pk:1;   // chống vỡ tiếng
  for(let i=0;i<n;i++)v.setInt16(44+i*2,Math.max(-1,Math.min(1,d[i]*k))*0x7fff,true);
  return new Blob([v],{type:"audio/wav"});
}

/* ============ MẪU ẢNH (TikTok 9:16 · vuông 1:1 · nền video) ============ */
// Mỗi mẫu: màu + kiểu trang trí. veMau(k, W, H, mau, {video}) vẽ từ bản ghi tập k (không cần trang bài).
const MAU={
  pastel:{ten:"Pastel",bg:null,txt:"#2B2E45",mut:"#6B6E86",card:"#fff"},
  dem:{ten:"Đêm sao",bg:["#1B1F3B","#34306A"],ac:"#F2C94C",txt:"#FFFFFF",mut:"#C9C6F0",card:"rgba(255,255,255,.1)"},
  giay:{ten:"Giấy cổ",bg:["#F6E7C8","#EBD3A6"],ac:"#A3241B",txt:"#3B2A1A",mut:"#7A5C3A",card:"rgba(255,250,238,.85)"},
  soi:{ten:"Sôi động",bg:["#FF6B6B","#7C4DFF"],ac:"#FFD23F",txt:"#FFFFFF",mut:"#FFE9F0",card:"rgba(255,255,255,.16)"},
  vo:{ten:"Vở ô li",bg:["#FFFFFF","#F4F9FF"],ac:"#2F6FD6",txt:"#1F2A44",mut:"#5B6B8C",card:"#EEF5FF"}
};
const KAI='"LyuKai","STKaiti","KaiTi",serif',VIF='"Be Vietnam Pro",system-ui,sans-serif';
async function veMau(k,W,H,mid,o={}){
  try{await document.fonts.load("120px LyuKai","字")}catch(e){}
  const cv=document.createElement("canvas");cv.width=W;cv.height=H;const C=cv.getContext("2d"),u=W/1080,doc=H>W*1.3;
  const m=MAU[mid]||MAU.pastel,nh=NHAC[k.nhac==="khong"||k.nhac==="file"?"nhe":k.nhac]||NHAC.nhe,ac=m.ac||nh[2],txt=m.txt,mut=m.mut;
  const T=(s,x,y,f,c,al)=>{C.font=f;C.fillStyle=c;C.textAlign=al||"center";C.textBaseline="middle";C.fillText(s,x,y)};
  const fit=(s,f,max)=>{let px=parseFloat(f.match(/([\d.]+)px/)[1]);C.font=f;while(C.measureText(s).width>max&&px>14){px-=3;C.font=f.replace(/[\d.]+px/,px+"px")}return C.font};
  const RR=(x,y,w,h,r)=>{C.beginPath();C.roundRect(x,y,w,h,r)};
  let sd=5;const rd=()=>(sd=(sd*9301+49297)%233280)/233280;
  // nền
  const g=mid==="soi"?C.createLinearGradient(0,0,W,H):C.createLinearGradient(0,0,0,H);
  const [b1,b2]=m.bg||[nh[3],"#FBF8F1"];g.addColorStop(0,b1);g.addColorStop(1,b2);C.fillStyle=g;C.fillRect(0,0,W,H);
  if(mid==="pastel"){C.fillStyle=ac;C.globalAlpha=.08;[[W*.85,H*.12,W*.38],[W*.1,H*.85,W*.32]].forEach(([x,y,r])=>{C.beginPath();C.arc(x,y,r,0,7);C.fill()});C.globalAlpha=1}
  if(mid==="dem"){for(let i=0;i<70;i++){const x=rd()*W,y=rd()*H,r=(rd()*2.6+.6)*u;C.fillStyle=i%9?"#fff":ac;C.globalAlpha=.25+rd()*.6;C.beginPath();C.arc(x,y,r,0,7);C.fill()}C.globalAlpha=1;
    C.fillStyle=ac;C.globalAlpha=.9;C.beginPath();C.arc(W*.84,H*.09,60*u,0,7);C.fill();C.fillStyle=b1;C.beginPath();C.arc(W*.84+26*u,H*.09-14*u,54*u,0,7);C.fill();C.globalAlpha=1}
  if(mid==="giay"){C.strokeStyle=ac;C.globalAlpha=.55;C.lineWidth=6*u;C.strokeRect(36*u,36*u,W-72*u,H-72*u);C.lineWidth=2*u;C.strokeRect(54*u,54*u,W-108*u,H-108*u);C.globalAlpha=.06;C.fillStyle="#5A3A10";
    for(let i=0;i<260;i++){C.fillRect(rd()*W,rd()*H,2*u,2*u)}C.globalAlpha=1}
  if(mid==="soi"){C.fillStyle="#fff";C.globalAlpha=.1;for(let i=0;i<6;i++){C.beginPath();C.arc(rd()*W,rd()*H,(80+rd()*160)*u,0,7);C.fill()}C.globalAlpha=1}
  if(mid==="vo"){C.strokeStyle="#BFD6F6";C.lineWidth=2*u;for(let y=60*u;y<H;y+=60*u){C.beginPath();C.moveTo(0,y);C.lineTo(W,y);C.stroke()}C.strokeStyle="#F2B8B8";C.beginPath();C.moveTo(110*u,0);C.lineTo(110*u,H);C.stroke()}
  // nhãn trên
  const y0=(doc?150:96)*u;
  if(mid==="giay"){const s=110*u;C.fillStyle=ac;RR(W/2-s/2,y0-s/2-10*u,s,s,12*u);C.fill();T("播客",W/2,y0-10*u,`400 ${46*u}px ${KAI}`,"#FFF3DD");T("吕老师汉语盒",W/2,y0+(doc?90:80)*u,`400 ${44*u}px ${KAI}`,txt)}
  else{const lw=(doc?560:520)*u;C.fillStyle=mid==="soi"||mid==="dem"?"rgba(255,255,255,.18)":ac;RR((W-lw)/2,y0-46*u,lw,92*u,46*u);C.fill();T("吕老师汉语盒 · 播客",W/2,y0,`700 ${(doc?44:40)*u}px ${KAI}`,mid==="soi"||mid==="dem"?ac:"#fff")}
  T(`第${k.so}集 · PODCAST · HSK ${k.cap}`,W/2,y0+(mid==="giay"?(doc?150:130):(doc?110:90))*u,`800 ${(doc?34:30)*u}px ${VIF}`,mid==="giay"?mut:ac);
  // hình giữa: đĩa micro + sóng âm (mẫu Sôi động: sóng âm to cả bề ngang)
  const cy=(doc?(o.video?560:640):430)*u,r=(doc?(o.video?200:230):150)*u;
  if(!o.trongDia){
    if(mid==="soi"){C.fillStyle="#fff";for(let i=0;i<34;i++){const h=(40+rd()*(doc?300:180))*u,x=W/2+(i-16.5)*28*u;C.globalAlpha=.85;RR(x-7*u,cy-h/2,14*u,h,7*u);C.fill()}C.globalAlpha=1;
      C.fillStyle=ac;C.beginPath();C.arc(W/2,cy,r*.62,0,7);C.fill();if(window.LLI)LLI.ve(C,"mic",W/2,cy,r*.75,"#7C4DFF")}
    else{C.fillStyle=mid==="dem"?"rgba(255,255,255,.08)":"#fff";C.beginPath();C.arc(W/2,cy,r,0,7);C.fill();C.strokeStyle=ac;C.lineWidth=(doc?14:10)*u;C.stroke();
      C.globalAlpha=.25;C.lineWidth=4*u;[r*.78,r*.6].forEach(rr=>{C.beginPath();C.arc(W/2,cy,rr,0,7);C.stroke()});C.globalAlpha=1;
      if(window.LLI)LLI.ve(C,mid==="giay"?"den-long":mid==="vo"?"but":"mic",W/2,cy,r*1.05,ac);
      if(!o.video){C.fillStyle=ac;for(let i=0;i<14;i++){const h=((doc?40:28)+rd()*(doc?110:70))*u,x1=W/2-r-60*u-i*(doc?22:18)*u,x2=W/2+r+48*u+i*(doc?22:18)*u;if(x1<20*u)break;C.globalAlpha=.75-i*.045;
        RR(x1,cy-h/2,10*u,h,5*u);C.fill();RR(x2,cy-h/2,10*u,h,5*u);C.fill()}C.globalAlpha=1}}
  }
  // tên bài (mẫu Vở ô li: mỗi chữ một ô 田字格)
  const ty=(doc?(o.video?900:1040):700)*u;
  let sVo=0;
  if(mid==="vo"){const n=[...k.ten].length,s=Math.min(200*u,(W-160*u)/n),x0=W/2-s*n/2;sVo=s;[...k.ten].forEach((ch,i)=>{const x=x0+i*s,y=ty-s/2;C.fillStyle="#fff";C.fillRect(x,y,s,s);C.strokeStyle="#E07070";C.lineWidth=3*u;C.strokeRect(x,y,s,s);
      C.setLineDash([8*u,8*u]);C.lineWidth=1.5*u;C.beginPath();C.moveTo(x,y+s/2);C.lineTo(x+s,y+s/2);C.moveTo(x+s/2,y);C.lineTo(x+s/2,y+s);C.stroke();C.setLineDash([]);
      T(ch,x+s/2,y+s/2+4*u,`400 ${s*.78}px ${KAI}`,txt)})}
  else{C.font=fit(k.ten,`400 ${(doc?170:120)*u}px ${KAI}`,W-120*u);C.fillStyle=txt;C.textAlign="center";C.textBaseline="middle";C.fillText(k.ten,W/2,ty)}
  const l1=mid==="vo"?ty+sVo/2+(doc?55:42)*u:ty+(doc?120:88)*u,l2=l1+(doc?65:50)*u;   // Vở ô li: dòng dưới tính theo cỡ ô chữ
  T(k.tnPy||k.tenVi,W/2,l1,`700 ${(doc?44:34)*u}px ${VIF}`,ac);
  if(k.tnPy)T(k.tenVi,W/2,l2,`600 ${(doc?38:30)*u}px ${VIF}`,mut);
  if(o.video)return cv;
  const hy=(doc?1330:930)*u+(mid==="vo"&&!doc?0:0);
  T(`主播 · Người dẫn: ${k.hocVien||"…"}`,W/2,hy,`800 ${(doc?48:38)*u}px ${VIF}`,txt);
  T(`${L().mmss(k.dur)} · nhạc ${k.nhacTen||nh[0].toLowerCase()}`,W/2,hy+(doc?70:56)*u,`600 ${(doc?34:28)*u}px ${VIF}`,mut);
  if(doc){C.fillStyle=m.card;RR(90*u,1490*u,W-180*u,230*u,30*u);C.fill();
    (k.mo2||[]).forEach((s,i)=>{C.font=fit(s,`400 ${52*u}px ${KAI}`,W-260*u);C.fillStyle=txt;C.textAlign="center";C.fillText(s,W/2,1560*u+i*90*u)});
    T("lyulaoshi.com/luyen-doc · #学中文 #中文播客",W/2,1810*u,`700 ${32*u}px ${VIF}`,mid==="soi"||mid==="dem"?ac:ac)}
  else T("lyulaoshi.com/luyen-doc",W/2,1020*u,`700 ${30*u}px ${VIF}`,ac);
  return cv;
}
const thanhBlob=cv=>new Promise(r=>cv.toBlob(r,"image/png"));
async function taoAnh(k,mid){k.mau=mid;k.tik=await thanhBlob(await veMau(k,1080,1920,mid));k.vuong=await thanhBlob(await veMau(k,1080,1080,mid))}

/* ============ XUẤT VIDEO (nền mẫu + phụ đề chạy + sóng âm, ghi trực tiếp bằng MediaRecorder) ============ */
async function xuatVideo(k,tien){
  const W=720,H=1280,nen=await veMau(k,W,H,k.mau||"pastel",{video:true}),m=MAU[k.mau]||MAU.pastel,nh=NHAC[k.nhac==="khong"?"nhe":k.nhac],ac=m.ac||nh[2];
  const cv=document.createElement("canvas");cv.width=W;cv.height=H;const C=cv.getContext("2d"),u=W/1080;
  const ctx=new (window.AudioContext||window.webkitAudioContext)(),buf=await ctx.decodeAudioData(await k.wav.arrayBuffer());
  const src=ctx.createBufferSource();src.buffer=buf;const an=ctx.createAnalyser();an.fftSize=64;const dest=ctx.createMediaStreamDestination();src.connect(an);an.connect(dest);
  const loai=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported(t))||"";
  const stm=new MediaStream([...cv.captureStream(30).getVideoTracks(),...dest.stream.getAudioTracks()]);
  const rec=new MediaRecorder(stm,loai?{mimeType:loai,videoBitsPerSecond:2500000}:{}),ch=[];rec.ondataavailable=e=>e.data.size&&ch.push(e.data);
  const fb=new Uint8Array(an.frequencyBinCount),cy=560*u,r=200*u,{pyMau}=L();
  const RR=(x,y,w,h,rr)=>{C.beginPath();C.roundRect(x,y,w,h,rr)};
  const fit=(s,f,max)=>{let px=parseFloat(f.match(/([\d.]+)px/)[1]);C.font=f;while(C.measureText(s).width>max&&px>14){px-=2;C.font=f.replace(/[\d.]+px/,px+"px")}};
  const ve=t=>{C.drawImage(nen,0,0);an.getByteFrequencyData(fb);
    // sóng âm nhảy theo tiếng quanh đĩa
    C.fillStyle=ac;for(let i=0;i<12;i++){const v=fb[(i*2+1)%fb.length]/255,h=(24+v*170)*u,x1=W/2-r-50*u-i*22*u,x2=W/2+r+40*u+i*22*u;if(x1<10*u)break;C.globalAlpha=.85-i*.05;RR(x1,cy-h/2,10*u,h,5*u);C.fill();RR(x2,cy-h/2,10*u,h,5*u);C.fill()}C.globalAlpha=1;
    // phụ đề
    const cu=k.cues.find(c=>t>=c[0]&&t<=c[1]+.4);C.fillStyle=m.card;RR(70*u,1190*u,W-140*u,400*u,36*u);C.fill();
    if(cu){C.textAlign="center";C.textBaseline="middle";fit(cu[2],`400 ${64*u}px ${KAI}`,W-200*u);C.fillStyle=m.txt;C.fillText(cu[2],W/2,1300*u);
      fit(cu[3],`700 ${34*u}px ${VIF}`,W-200*u);C.fillStyle=ac;C.fillText(cu[3],W/2,1400*u);fit(cu[4],`600 ${30*u}px ${VIF}`,W-200*u);C.fillStyle=m.mut;C.fillText(cu[4],W/2,1480*u)}
    // tiến độ + người dẫn
    C.fillStyle=m.mut;C.globalAlpha=.3;RR(90*u,1680*u,W-180*u,10*u,5*u);C.fill();C.globalAlpha=1;C.fillStyle=ac;RR(90*u,1680*u,(W-180*u)*Math.min(1,t/buf.duration),10*u,5*u);C.fill();
    C.font=`800 ${34*u}px ${VIF}`;C.fillStyle=m.txt;C.textAlign="center";C.fillText(`主播 · ${k.hocVien||""}`,W/2,1760*u);
    C.font=`700 ${28*u}px ${VIF}`;C.fillStyle=ac;C.fillText("lyulaoshi.com/luyen-doc",W/2,1830*u)};
  ve(0);rec.start(500);const t0=ctx.currentTime+.15;src.start(t0);
  await new Promise(res=>{const tm=setInterval(()=>{const t=Math.max(0,ctx.currentTime-t0);ve(t);tien&&tien(Math.min(1,t/buf.duration));if(t>=buf.duration+.4){clearInterval(tm);res()}},33)});
  await new Promise(r=>{rec.onstop=r;rec.stop()});ctx.close();
  const type=rec.mimeType||loai||"video/webm";return new Blob(ch,{type});
}
const loiGioiThieu=k=>`Mình vừa làm podcast tiếng Trung: 《${k.ten}》 (${k.tenVi}), HSK ${k.cap}. Mọi người nghe thử và góp ý cho mình nhé!\n#学中文 #中文播客 #HSK${k.cap} #hoctiengtrung #吕老师汉语盒`;

/* ============ KẾT QUẢ + PHỤ ĐỀ ============ */
function veKq(k,box){
  const {esc,IC,pyMau}=L(),tenFile=`podcast-${k.baiId}-${(k.hocVien||"em").replace(/\s+/g,"-")}`,u={wav:URL.createObjectURL(k.wav)};
  box.innerHTML=`<div class="pk"><div class="pk-tren"><img class="pk-bia" alt="Ảnh bìa tập ${k.so}"><div><b class="zh">${esc(k.ten)}</b><small>第${k.so}集 · ${esc(k.hocVien||"")} · ${L().mmss(k.dur)}</small>
      <audio controls src="${u.wav}"></audio></div></div>
    <div class="pk-pd" aria-live="polite"><p class="zh">Bấm phát để xem phụ đề chạy theo giọng em</p></div>
    <div class="pk-mau"><b>${IC("anh")}Chọn mẫu ảnh</b><div class="pk-mds">${Object.entries(MAU).map(([id,m])=>`<button type="button" data-mau="${id}" aria-pressed="${(k.mau||"pastel")===id}"><img alt=""><span>${m.ten}</span></button>`).join("")}</div></div>
    <div class="pk-nut"><a class="btn hot" href="${u.wav}" download="${tenFile}.wav">${IC("tai-ve")}Tải âm thanh</a>
      <a class="btn sec pk-dl-tik" download="${tenFile}-tiktok.png">${IC("anh")}Ảnh TikTok 9:16</a>
      <a class="btn sec pk-dl-vuong" download="${tenFile}-vuong.png">${IC("anh")}Ảnh vuông</a>
      ${navigator.canShare?`<button type="button" class="btn sec" data-pk="gui">${IC("gui")}Gửi</button>`:""}
      <button type="button" class="btn sec" data-pk="chep">${IC("chep")}Chép lời giới thiệu</button></div>
    <div class="pk-vid"><button type="button" class="btn hot" data-pk="video">${IC("tv")}Xuất video TikTok</button>
      <p class="muted">Video dọc 9:16: nền là mẫu ảnh em chọn, phụ đề chạy theo giọng em. Máy cần phát hết tập để ghi video (${L().mmss(k.dur)}), em để màn hình sáng và ở yên trang này nhé.</p><div class="pk-vkq"></div></div>
    <details class="pk-tik"><summary>${IC("anh")}Xem ảnh đăng TikTok</summary><img class="pk-tikimg" alt="Ảnh TikTok"><pre>${esc(loiGioiThieu(k))}</pre>
      <p class="muted">Đăng TikTok: tốt nhất là đăng <b>video</b> (nút Xuất video ở trên). Đăng dạng ảnh thì dùng ảnh 9:16 này và dán lời giới thiệu.</p></details></div>`;
  const veAnh=()=>{const t=URL.createObjectURL(k.tik),v=URL.createObjectURL(k.vuong);box.querySelector(".pk-bia").src=v;box.querySelector(".pk-tikimg").src=t;box.querySelector(".pk-dl-tik").href=t;box.querySelector(".pk-dl-vuong").href=v};veAnh();
  // ảnh nhỏ xem trước từng mẫu
  (async()=>{for(const b of box.querySelectorAll("[data-mau]")){const c=await veMau(k,216,384,b.dataset.mau);b.querySelector("img").src=c.toDataURL("image/png")}})();
  const au=box.querySelector("audio"),pd=box.querySelector(".pk-pd");let cur=-1;
  au.ontimeupdate=()=>{const i=k.cues.findIndex(c=>au.currentTime>=c[0]&&au.currentTime<=c[1]+.4);if(i===cur)return;cur=i;
    pd.innerHTML=i<0?'<p class="muted">· · ·</p>':`<p class="zh">${esc(k.cues[i][2])}</p><p class="py">${pyMau(k.cues[i][3])}</p><p class="vi">${esc(k.cues[i][4])}</p>`};
  box.onclick=async e=>{
    const mb=e.target.closest("[data-mau]");
    if(mb){box.querySelectorAll("[data-mau]").forEach(x=>x.setAttribute("aria-pressed",x===mb));ss("pmau",mb.dataset.mau);await taoAnh(k,mb.dataset.mau);veAnh();luuTap(k);if(k.video){k.video=null;box.querySelector(".pk-vkq").innerHTML='<p class="muted">Em đã đổi mẫu, bấm Xuất video lại để video dùng mẫu mới.</p>'}return}
    const b=e.target.closest("[data-pk]");if(!b)return;
    if(b.dataset.pk==="chep"){try{await navigator.clipboard.writeText(loiGioiThieu(k));b.lastChild.textContent="Đã chép"}catch(x){prompt("Chép lời giới thiệu:",loiGioiThieu(k))}}
    if(b.dataset.pk==="gui"){const fs=[k.video?new File([k.video],tenFile+(k.video.type.includes("mp4")?".mp4":".webm"),{type:k.video.type}):new File([k.wav],tenFile+".wav",{type:"audio/wav"}),new File([k.tik],tenFile+"-tiktok.png",{type:"image/png"})];
      try{if(navigator.canShare({files:fs}))await navigator.share({files:fs,text:loiGioiThieu(k)});else await navigator.share({text:loiGioiThieu(k)})}catch(x){}}
    if(b.dataset.pk==="video"){
      if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream){box.querySelector(".pk-vkq").innerHTML='<p class="muted">Trình duyệt này chưa xuất được video. Em dùng Chrome trên máy tính hoặc điện thoại nhé.</p>';return}
      b.disabled=true;const vk=box.querySelector(".pk-vkq");vk.innerHTML='<div class="pk-thanh"><i></i></div><p class="muted">Đang ghi video… 0%</p>';
      try{const v=await xuatVideo(k,f=>{vk.querySelector("i").style.width=(f*100)+"%";vk.querySelector("p").textContent="Đang ghi video… "+Math.round(f*100)+"%"});
        k.video=v;const vu=URL.createObjectURL(v),ext=v.type.includes("mp4")?"mp4":"webm";
        vk.innerHTML=`<video controls playsinline src="${vu}"></video><div class="pk-nut"><a class="btn hot" href="${vu}" download="${tenFile}.${ext}">${IC("tai-ve")}Tải video (.${ext})</a>${navigator.canShare?`<button type="button" class="btn sec" data-pk="gui">${IC("gui")}Gửi video</button>`:""}</div>`;
      }catch(x){vk.innerHTML=`<p class="muted">Chưa xuất được video: ${esc(x.message)}</p>`}
      b.disabled=false}
  };
}

/* ============ GÓC PODCAST CỦA EM (IndexedDB, chỉ trên máy này) ============ */
function db(){return new Promise((r,j)=>{try{const q=indexedDB.open("ld-podcast",1);q.onupgradeneeded=()=>q.result.createObjectStore("tap",{keyPath:"id"});q.onsuccess=()=>r(q.result);q.onerror=()=>j(q.error)}catch(e){j(e)}})}
async function luuTap(k){try{const d=await db();await new Promise((r,j)=>{const t=d.transaction("tap","readwrite");t.objectStore("tap").put(k);t.oncomplete=r;t.onerror=()=>j(t.error)})}catch(e){}}
async function dsTap(){try{const d=await db();return await new Promise((r,j)=>{const q=d.transaction("tap").objectStore("tap").getAll();q.onsuccess=()=>r(q.result||[]);q.onerror=()=>j(q.error)})}catch(e){return[]}}
async function xoaTap(id){try{const d=await db();await new Promise(r=>{const t=d.transaction("tap","readwrite");t.objectStore("tap").delete(id);t.oncomplete=r})}catch(e){}}
async function goc(box){
  const {esc,IC,mmss}=L(),ds=(await dsTap()).sort((a,b)=>b.id-a.id);
  if(!ds.length){box.innerHTML=`<p class="muted">Chưa có tập nào. Chọn một bài ở trên, bấm <b>Podcast</b> để làm tập đầu tiên của em. Các tập chỉ lưu trên máy này, nhớ tải về nếu muốn giữ lâu.</p>`;return}
  box.innerHTML=`<div class="goc">${ds.map(k=>`<div class="goc-t" data-id="${k.id}"><img src="${URL.createObjectURL(k.vuong)}" alt=""><div class="goc-i"><b class="zh">${esc(k.ten)}</b>
    <small>第${k.so}集 · ${esc(k.hocVien||"")} · ${mmss(k.dur)} · ${new Date(k.ngay).toLocaleDateString("vi-VN")}</small>
    <div class="goc-n"><button type="button" data-g="xem">${IC("phat")}Nghe</button><button type="button" data-g="xoa">${IC("sai")}Xoá</button></div></div><div class="goc-kq"></div></div>`).join("")}</div>
    <p class="muted">Các tập chỉ lưu trên máy này. Muốn giữ lâu hoặc nộp cho cô, em bấm Nghe → Tải âm thanh.</p>`;
  box.onclick=async e=>{const b=e.target.closest("[data-g]");if(!b)return;const el=b.closest(".goc-t"),k=ds.find(x=>x.id===+el.dataset.id);
    if(b.dataset.g==="xem"){veKq(k,el.querySelector(".goc-kq"))}
    if(b.dataset.g==="xoa"&&confirm("Xoá tập 《"+k.ten+"》 khỏi máy này?")){await xoaTap(k.id);goc(box)}};
}
function dong(){if(ngheCtx){ngheCtx.close();ngheCtx=null}}
return{mo,dong,goc};
})();
