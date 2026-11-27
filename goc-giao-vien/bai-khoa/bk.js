/* Bài khoá 课文 — khung chung + các hoạt động công khai. Hoạt động riêng của chủ trang ở rieng.js
   (bị mã hoá khi ghép — tools/khoa_trang.py). Thêm hoạt động: BK.them([{k,g,o,t,m,ic,c,ve()}]),
   g = truoc|trong|sau, o = thứ tự trong nhóm, tuIn:true nếu là trang in. */
window.BK=(function(){
const {$,IC,esc,store,toast,enc}=GV,{seg,tron,toan}=GVT;
const HAN=/\p{Script=Han}/u;
const PY=()=>window.pinyinPro&&window.pinyinPro.pinyin;

/* ---------- bài đã lưu (khoá gv-bai) ---------- */
const MAU=`小明：你好，请问图书馆在哪儿？ | Chào bạn, cho hỏi thư viện ở đâu?
小芳：就在教学楼后面。你要借书吗？ | Ngay sau toà nhà học. Bạn muốn mượn sách à?
小明：对，我想借一本汉语书。 | Đúng, mình muốn mượn một cuốn sách tiếng Trung.
小芳：现在是中午，图书馆两点才开门。 | Bây giờ đang buổi trưa, hai giờ thư viện mới mở cửa.
小明：那我们先去喝杯咖啡吧。 | Vậy mình đi uống cốc cà phê trước đi.
小芳：好啊，我正想休息一下儿。 | Hay đấy, mình đang muốn nghỉ một chút.`;
const TEN_MAU='Bài mẫu: Ở thư viện';
let KHO=store.get('gv-bai');
if(!KHO||!Array.isArray(KHO.ds)||!KHO.ds.length)KHO={cur:'mau',ds:[{id:'mau',ten:TEN_MAU,van:MAU,du:{}}]};
const bai=()=>KHO.ds.find(x=>x.id===KHO.cur)||KHO.ds[0];
const du=()=>bai().du||(bai().du={});
const luu=()=>store.set('gv-bai',KHO);
const laMau=()=>bai().id==='mau'&&bai().van===MAU;
/* đọc một mục thầy cô đã soạn; bài mẫu chưa soạn gì thì trả nội dung ví dụ */
const lay=(k,vdMau,rong)=>du()[k]!=null?du()[k]:(laMau()&&vdMau!=null?vdMau:rong);

/* ---------- tách câu, tách từ, pinyin ---------- */
const TD=new Map();Object.values(window.HSK||{}).forEach(l=>l.forEach(([w,p])=>{if(!TD.has(w))TD.set(w,new Set());TD.get(w).add(p)}));
let GOP=new Set(store.get('gv-bai-gop')||[]);
/* khớp từ dài nhất trong đề cương HSK 1–6 và từ thầy cô tự gộp; còn lại để từng chữ */
function tach(s){const k=[...s],ra=[];for(let i=0;i<k.length;){if(!HAN.test(k[i])){ra.push(k[i++]);continue}
    let n=1;for(let l=Math.min(6,k.length-i);l>1;l--){const w=k.slice(i,i+l).join('');if(GOP.has(w)||TD.has(w)){n=l;break}}ra.push(k.slice(i,i+n).join(''));i+=n}
  /* 儿 đứng một mình sau một từ là âm cuốn lưỡi: gộp vào từ trước */
  return ra.reduce((a,w)=>{if(w==='儿'&&a.length&&HAN.test(a[a.length-1]))a[a.length-1]+=w;else a.push(w);return a},[])}
const thanh=p=>/[āēīōūǖ]/.test(p)?1:/[áéíóúǘ]/.test(p)?2:/[ǎěǐǒǔǚ]/.test(p)?3:/[àèìòùǜ]/.test(p)?4:0;
/* biến điệu 一, 不 theo âm tiết đứng sau (số đếm, thứ tự giữ yī) */
function bienDieu(chu,am){return am.map((p,i)=>{const c=chu[i],sau=chu[i+1],t=sau&&HAN.test(sau)?thanh(am[i+1]||''):0;
  if(c==='不'&&t===4)return'bú';
  if(c==='一'&&sau&&HAN.test(sau)&&!/[第十零〇二三四五六七八九百千万]/.test(chu[i-1]||'')&&!/[月号日一二三四五六七八九十零〇]/.test(sau)){
    if(sau==='个'||t===4)return'yí';if(t)return'yì'}
  return p})}
function pyTu(w,thu){const s=(du().sua||{})[w];if(s&&s.p)return s.p;
  const d=TD.get(w);if(d&&d.size===1&&w.length>1&&!/[一不]/.test(w))return[...d][0];
  const t=thu.join('');return w.length>1&&w.endsWith('儿')?t.replace(/ér$/,'r'):t}
/* pinyin cả câu (để chữ nhiều âm đọc theo ngữ cảnh) rồi gom theo từ */
function pyCau(z){const f=PY();if(!f)return'';const chu=[...z],a=bienDieu(chu,f(z,{type:'array',nonZh:'spaced'}));let i=0;
  const t=tach(z).map(w=>{const n=[...w].length,s=a.slice(i,i+n);i+=n;return HAN.test(w)?pyTu(w,s):w}).join(' ')
    .replace(/\s*([，。！？、；：,.!?])\s*/g,'$1 ').replace(/\s*([“「])\s*/g,' $1').replace(/\s*([”」])\s*/g,'$1 ').replace(/，|、/g,',').replace(/。/g,'.').replace(/！/g,'!').replace(/？/g,'?').replace(/：/g,':').replace(/；/g,';').replace(/\s+/g,' ').trim();
  return t.replace(/(^[“「]?|[.!?]\s+[“「]?|:\s*[“「])(\p{L})/gu,(m,a,c)=>a+c.toUpperCase())}
const tachCau=z=>z.match(/[^。！？!?]+[。！？!?]*[”」』）)]*/g)||[z];
function phanTich(t,biet){const ra=[];t.split('\n').map(x=>x.trim()).filter(Boolean).forEach(x=>{
  const [a,...r]=x.split(/\s*[|｜]\s*/),d=r.join(' | '),m=a.match(/^([^：:，。？！,.?!“”"]{1,10})[：:]\s*(.+)$/);
  if(m&&((biet||[]).includes(m[1])||(!/[说问道想写]$/.test(m[1])&&!/^[“"「]/.test(m[2]))))ra.push({v:m[1],z:m[2],d});
  else if(d||[...a].length<=40)ra.push({v:'',z:a,d});
  else tachCau(a).forEach(c=>ra.push({v:'',z:c.trim(),d:''}))});
  return ra.filter(x=>x.z)}

let dong=[],vai=[];
/* bài lấy từ bài giảng mang sẵn pinyin của bài (du.py theo câu); câu khác thì máy tính */
function tinhPy(){const P=du().py||{};dong.forEach(x=>x.p=P[x.z]||pyCau(x.z))}

/* ---------- từ trong bài ---------- */
function tra(z){const H=window.HSK||{},N=window.NGHIA||{};for(const l in H){const f=H[l].find(([v])=>v===z);if(f)return{cap:+l,p:f[1],vi:N[z+'|'+f[1]]||N[z]||''}}return null}
function tu(){const m=new Map(),ten=new Set(vai),f=PY(),S=du().sua||{};
  dong.forEach(x=>tach(x.z).forEach(w=>{if(!HAN.test(w)||m.has(w))return;const h=tra(w);
    m.set(w,{z:w,p:h?h.p:(f?pyTu(w,bienDieu([...w],f(w,{type:'array'}))):''),vi:h?h.vi:'',cap:h?h.cap:0,chon:!ten.has(w)&&(!h||h.cap>1),...(S[w]||{})})}));
  return[...m.values()]}

/* ---------- khung hoạt động ---------- */
const HD=[];let hd='chieu',cho=location.hash.slice(1),tam={},phim={};
const o={py:false,dich:false,co:1,nay:-1,tam:true,che:true,loai:'du',giong:'goc'};
let hen=[];
const sau=(fn,ms)=>hen.push(setTimeout(fn,ms));
const lap=(fn,ms)=>hen.push(setInterval(fn,ms));
function ngung(){hen.forEach(t=>{clearTimeout(t);clearInterval(t)});hen=[];dungAm();dungCa();if(window.TTS&&TTS.stop)TTS.stop()}
const noi=t=>{dungAm();dungCa();if(window.TTS&&TTS.can(t))TTS.say(t);else toast('Máy này chưa có giọng đọc tiếng Trung')};
const giay=z=>2+[...z].length*.65;   // ước lượng thời gian đọc một câu kèm nhắc lại

/* ---------- giọng gốc của bài giảng (chỉ bài lấy từ bài giảng; bai-giang.js ghi file và giây cắt) ---------- */
const san=new Map(),choNap=new Map();
/* tải cả file rồi mới phát: tua được trên mọi máy chủ, và bấm là kêu ngay (điện thoại không chặn) */
function nap(u){if(san.has(u))return Promise.resolve(san.get(u));
  if(!choNap.has(u))choNap.set(u,fetch(u).then(r=>{if(!r.ok)throw new Error(r.status);return r.blob()}).then(b=>{const s=URL.createObjectURL(b);san.set(u,s);return s}).catch(e=>{choNap.delete(u);throw e}));
  return choNap.get(u)}
let may=null,canh=0,luot=0;
function dungAm(){luot++;clearInterval(canh);if(may){may.onended=null;may.pause()}}
function dungCa(){document.querySelectorAll('#goc audio').forEach(a=>a.pause())}
/* phát file u từ giây a đến giây b (không có a, b thì cả file); xong(số giây vừa đọc); hỏng thì gọi hong() */
function phatAm(u,a,b,xong,hong){dungAm();dungCa();const l=luot;may=may||new Audio();
  const di=src=>{if(l!==luot)return;if(may.getAttribute('src')!==src)may.src=src;may.currentTime=a||0;
    const het=()=>{if(l!==luot)return;luot++;clearInterval(canh);may.pause();if(xong)xong(b!=null?b-a:may.duration||3)};
    may.onended=het;if(b!=null)canh=setInterval(()=>{if(may.currentTime>=b)het()},40);
    const p=may.play();if(p&&p.catch)p.catch(e=>{if(l===luot&&e.name!=='AbortError'){clearInterval(canh);if(hong)hong()}})};
  if(san.has(u))di(san.get(u));else nap(u).then(di,()=>{if(l===luot&&hong)hong()})}
/* đọc một câu của bài: có giọng gốc (và đang chọn) thì phát, không thì giọng máy. xong(giây nên chờ cho lớp nhắc) */
function phat(x,xong){
  const may_=()=>{noi(x.z);if(xong){const doc_=.5+[...x.z].length*.35;sau(()=>xong(Math.max(1,giay(x.z)-doc_)),doc_*1000)}};
  if(o.giong==='goc'&&x.a)phatAm(x.a[0],x.a[1],x.a[2],xong&&(d=>xong(d*1.1+.8)),may_);else may_()}
function chonGiong(){if(dong.some(x=>x.a))chon('Giọng đọc',[['goc','Bản gốc'],['may','Giọng máy']],o.giong,v=>{o.giong=v;ngung();o.nay=-1;ve()})}
/* bài đang dạy có gốc ở bài giảng: mã 'g:giáo trình:số bài:đoạn' */
function amBai(){const ra={dong:new Map(),ca:new Map()},m=/^g:([^:]+):(\d+):(\w+)$/.exec(bai().id);if(!m)return ra;
  const b=(window.BK_GIANG||[]).find(x=>x.id===m[1]),l=b&&b.bai.find(x=>x.n===+m[2]);if(!l)return ra;
  const url=f=>f[0]==='@'?'am/'+f.slice(1):'../../'+b.id+'/bai-'+l.n+'/'+f;
  (m[3]==='all'?l.doan:[l.doan[+m[3]]].filter(Boolean)).forEach(d=>{
    d.c.forEach(([v,z,,,a])=>{const k=v+'|'+z;if(a&&!ra.dong.has(k))ra.dong.set(k,[url(a[0]),a[1],a[2]])});
    if(d.am){const cung=l.doan.filter(e=>e.am===d.am).map(e=>e.t);ra.ca.set(url(d.am),cung.length>1?cung.join(' và '):cung[0])}});
  return ra}
/* trình phát cả đoạn đặt ngoài phần vẽ lại, bấm câu không làm đứt tiếng */
function veCa(ds){const G=$('goc');G.innerHTML='';
  ds.forEach((t,u)=>{const l=document.createElement('label');l.innerHTML='<span>Giọng gốc · '+esc(t)+'</span>';const a=document.createElement('audio');a.controls=true;a.preload='none';
    nap(u).then(s=>a.src=s,()=>{l.firstChild.textContent='Giọng gốc · '+t+' (chưa tải được)'});a.onplay=()=>{dungAm();if(window.TTS&&TTS.stop)TTS.stop()};l.append(a);G.append(l)})}
function nutTao(ic,t,fn,cls){const b=document.createElement('button');b.type='button';b.className='btn lon '+(cls||'gh');b.innerHTML=IC(ic)+t;b.onclick=fn;$('nut').append(b);return b}
function gat(t,k){const l=document.createElement('label');l.className='chk';l.innerHTML='<input type="checkbox"'+(o[k]?' checked':'')+'>'+t;l.firstChild.onchange=e=>{o[k]=e.target.checked;ve()};$('cong').append(l)}
function chon(nhan,ds,cur,on){const s=document.createElement('span');s.className='nh';s.innerHTML='<span class="muted small"><b>'+nhan+'</b></span><span class="seg"></span>';$('cong').append(s);seg(s.lastChild,ds,cur,on);return s.lastChild}
function ghiChu(t){const p=document.createElement('p');p.className='muted small giua';p.style.margin='0';p.innerHTML=t;$('cong').append(p)}
/* ô soạn nội dung của bài (lưu cùng bài), nhớ trạng thái đóng mở */
function soan(tieuDe,k,giaTri,goiY,dong_){const d=document.createElement('details');d.className='soan';tam.mo=tam.mo||{};d.open=!!tam.mo[k];
  d.innerHTML='<summary>'+tieuDe+'</summary><textarea rows="'+(dong_||4)+'" aria-label="'+tieuDe+'" placeholder="'+esc(goiY)+'">'+esc(giaTri)+'</textarea>';
  d.ontoggle=()=>tam.mo[k]=d.open;d.querySelector('textarea').onchange=e=>{du()[k]=e.target.value;luu();ve()};$('cong').append(d);return d}
const cauHoi=t=>String(t||'').split('\n').map(x=>x.trim()).filter(Boolean).map(x=>x.split(/\s*[|｜]\s*/));
const dongHtml=(x,i,z,them,lop)=>'<button type="button" class="cau'+(i===o.nay?' nay':'')+(lop?' '+lop:'')+'" data-i="'+i+'">'+(x.v?'<span class="v" lang="zh">'+esc(x.v)+'</span>':'')+'<span class="nd"><span class="z" lang="zh">'+z+'</span>'+(them||'')+'</span></button>';
const phu=x=>(o.py?'<span class="p">'+esc(x.p)+'</span>':'')+(o.dich&&x.d?'<span class="d">'+esc(x.d)+'</span>':'');
const trongBai=()=>{$('bai').innerHTML='<p class="muted giua">Chưa có bài. Dán bài khoá vào ô "Bài đang dạy" ở trên.</p>'};

function veNut(){$('hoat').innerHTML=[['truoc','Trước khi đọc','读前'],['trong','Trong khi đọc','读中'],['sau','Sau khi đọc','读后']].map(([g,t,tz])=>{
  const ds=HD.filter(h=>h.g===g).sort((a,b)=>a.o-b.o);return ds.length?'<div class="gd"><h2>'+t+' <span lang="zh">'+tz+'</span></h2><div class="hoat">'+ds.map(h=>
    '<button type="button" data-k="'+h.k+'" style="--c:var(--'+h.c+');--s:var(--'+h.c+'-s)" aria-pressed="'+(h.k===hd)+'">'+IC(h.ic)+'<span>'+h.t+'<small class="zh" lang="zh">'+h.z+'</small><small>'+h.m+'</small></span>'
    +(h.rieng?'<i class="rg" title="Chỉ chủ trang thấy">'+IC('khoa')+'</i>':'')+'</button>').join('')+'</div></div>':''}).join('')}
function ve(){const h=HD.find(x=>x.k===hd);if(!h)return;
  $('cong').innerHTML='';$('nut').innerHTML='';const B=$('bai');B.onclick=B.onchange=B.oninput=null;B.innerHTML='';phim={};
  document.querySelectorAll('#hoat button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===hd));
  $('goc').hidden=!(h.nghe&&$('goc').childElementCount&&dong.length);
  $('ten').textContent=h.t;$('xem').hidden=!h.tuIn;if(!h.tuIn)$('xem').innerHTML='';B.style.setProperty('--co',o.co);$('san').style.minHeight=h.tuIn?'0':'';
  if(!dong.length)trongBai();else h.ve()}
function mo(k){if(!HD.some(h=>h.k===k))return;ngung();hd=k;o.nay=-1;ve()}
/* đăng ký hoạt động; địa chỉ có #khoá thì mở đúng hoạt động đó khi nó vừa xuất hiện */
let daKhoi=false;
function them(ds){HD.push(...ds);if(!daKhoi)return;veNut();if(cho&&ds.some(h=>h.k===cho)){const k=cho;cho='';mo(k);$('san').scrollIntoView()}}

function doc(){const t=$('van').value;dong=phanTich(t,du().vai);tinhPy();ngung();
  const A=amBai();dong.forEach(x=>{x.a=A.dong.get(x.v+'|'+x.z);if(x.a)nap(x.a[0]).catch(()=>{})});veCa(A.ca);vai=[...new Set(dong.map(x=>x.v).filter(Boolean))];
  $('tt').textContent=dong.length+' câu'+(vai.length?' · '+vai.length+' vai: '+vai.join('、'):'')+(PY()?'':' · chưa tải được bộ pinyin, kiểm tra mạng');tam={};ngung();o.nay=-1;ve()}
function napBai(){const b=bai(),S=$('bkChon');S.innerHTML='';KHO.ds.forEach(x=>S.add(new Option(x.ten,x.id)));S.value=b.id;GV.hop(S);
  $('bkDat').value=b.ten;$('bkTen').textContent=b.ten;$('van').value=b.van;doc()}

/* ---------- lấy bài khoá từ bài giảng (bai-giang.js do tools/bai_khoa_tu_bai.py sinh) ---------- */
function layTuBai(){const GT=window.BK_GIANG||[];if(!GT.length){$('lg').hidden=true;return}
  const S=$('lgS'),B=$('lgB'),D=$('lgD'),sach=()=>GT.find(x=>x.id===S.value),bg=()=>sach().bai.find(x=>String(x.n)===B.value);
  GT.forEach(b=>S.add(new Option(b.vi+' · '+b.zh,b.id)));
  function doanDs(){D.innerHTML='';const ds=bg().doan;ds.forEach((d,i)=>D.add(new Option(d.t+' · '+d.c.length+' câu',i)));if(ds.length>1)D.add(new Option('Cả bài','all'))}
  function baiDs(chon){B.innerHTML='';sach().bai.forEach(l=>B.add(new Option('Bài '+l.n+(l.ten?' · '+l.ten:''),l.n)));if(sach().bai.some(l=>l.n===chon))B.value=chon;doanDs()}
  /* trang chính đang chọn bài nào thì chọn sẵn bài đó */
  const g=store.get('gv-dung');if(g&&g.k==='bai'&&GT.some(x=>x.id===g.sach)){S.value=g.sach;baiDs(+String(g.bai).replace('bai-',''))}else baiDs();
  S.onchange=()=>baiDs();B.onchange=doanDs;[S,B,D].forEach(GV.hop);
  $('lgLay').onclick=()=>{const b=sach(),l=bg(),ds=D.value==='all'?l.doan:[l.doan[+D.value]],id='g:'+b.id+':'+l.n+':'+D.value;
    if(KHO.ds.some(x=>x.id===id))toast('Bài này đã lấy trước đó, mở lại bản đã lưu');
    else{const c=ds.flatMap(d=>d.c),py={};c.forEach(([,z,p])=>{if(p)py[z]=p});
      const ten=b.vi+' · Bài '+l.n+(l.doan.length>1?' · '+(ds.length>1?'cả bài':ds[0].t):'');
      KHO.ds.push({id,ten:ten.slice(0,60),van:c.map(([v,z,,vi])=>(v?v+'：':'')+z+(vi?' | '+vi:'')).join('\n'),du:{py,vai:[...new Set(c.map(x=>x[0]).filter(Boolean))]}});toast('Đã lấy '+c.length+' câu')}
    KHO.cur=id;luu();napBai();$('hoat').scrollIntoView({block:'nearest'})}}

/* ================= HOẠT ĐỘNG CÔNG KHAI ================= */
const HOI_MAU='小明想去哪儿？ | 图书馆\n图书馆在哪儿？ | 在教学楼后面\n图书馆几点开门？ | 两点';
/* câu hỏi của bài */
const hoiDs=()=>{const t=lay('hoi',HOI_MAU,'');return{t,ds:cauHoi(t)}};
const DS_MAU='小明想借一本汉语书。 | đúng\n图书馆在教学楼前面。 | sai\n图书馆现在开门。 | sai';
const dsDs=()=>{const t=lay('ds',DS_MAU,'');return{t,ds:cauHoi(t).map(([c,a])=>({c,a:/^(đ|d|đúng|dung|对|√|true)$/i.test(a||'')?true:/^(s|sai|错|×|x|false)$/i.test(a||'')?false:null}))}};
const IN_MAC={co:6.4,gian:2.4,vai:true,hoTen:false,tde:''};   // cỡ chữ, giãn dòng tính bằng mm
/* các loại phiếu in. Phiếu gắn với hoạt động riêng thì khai ở rieng.js bằng BK.themPhieu, đừng khai ở đây.
   manh(câu, cài đặt) = vẽ một mảnh (class "manh"); tieuDe:false = không tiêu đề; xao = trộn thứ tự câu */
const PHIEU=[{k:'du',t:'Bản đầy đủ'},{k:'che',t:'Bản khoét từ'}];
function themPhieu(p){PHIEU.push(p);if(daKhoi&&hd==='in')ve()}
const CONG=[
{k:'tu',g:'truoc',o:2,z:'学习生词',t:'Lấy từ mới',m:'Cho thẻ chớp, trò chơi',ic:'the-bai',c:'mint',ve(){const ds=tu();
  $('bai').innerHTML='<div class="cuon"><table class="bang"><thead><tr><th></th><th>Từ</th><th>Pinyin</th><th>Nghĩa</th><th>HSK</th></tr></thead><tbody>'+ds.map((x,i)=>'<tr data-i="'+i+'"><td><input type="checkbox" class="o-tich"'+(x.chon?' checked':'')+' aria-label="Chọn '+esc(x.z)+'"></td><td class="z" lang="zh">'+esc(x.z)+'</td><td><input type="text" class="p" value="'+esc(x.p)+'" aria-label="Pinyin"></td><td><input type="text" class="n" value="'+esc(x.vi)+'" placeholder="gõ nghĩa" aria-label="Nghĩa"></td><td>'+(x.cap||'ngoài')+'</td></tr>').join('')+'</tbody></table></div>';
  ghiChu('Máy chọn sẵn từ ngoài HSK 1. Thầy cô tích hoặc bỏ; sửa pinyin ở đây thì pinyin trên bài cũng đổi theo.');
  const g=document.createElement('span');g.className='row';g.innerHTML='<input type="text" id="gopT" lang="zh" maxlength="6" placeholder="Máy tách sai? Gõ từ đúng" aria-label="Thêm từ bị tách sai"><button type="button" class="btn gh" id="gopB">Gộp thành một từ</button>';$('cong').append(g);
  $('gopB').onclick=()=>{const w=$('gopT').value.trim();if([...w].length<2||!dong.some(x=>x.z.includes(w))){toast('Gõ một từ từ 2 chữ trở lên có trong bài');return}GOP.add(w);store.set('gv-bai-gop',[...GOP]);doc()};
  $('bai').onchange=e=>{const tr=e.target.closest('tr[data-i]');if(!tr)return;const x=ds[+tr.dataset.i];x.chon=tr.querySelector('[type=checkbox]').checked;x.p=tr.querySelector('.p').value.trim();x.vi=tr.querySelector('.n').value.trim();
    const S=du().sua||(du().sua={});S[x.z]={chon:x.chon,p:x.p,vi:x.vi};luu();tinhPy()};
  const dungBo=url=>{const w=tu().filter(x=>x.chon&&x.p).map(x=>[x.z,x.p,x.vi]);if(w.length<4){toast('Chọn ít nhất 4 từ');return}const n=('Từ mới: '+bai().ten).slice(0,40);
    const s=store.get('cot-sets')||[],i=s.findIndex(x=>x.n===n),v={n,t:w.map(a=>a.join(' | ')).join('\n')};if(i>=0)s[i]=v;else s.push(v);store.set('cot-sets',s);
    store.set('gv-dung',{k:'cot',n,ten:'Bộ từ: '+n+' · '+w.length+' từ',bo:'cot:'+enc({n,w}),nw:w.length,cau:false,sach:''});toast('Đã đặt làm bộ từ đang dùng ('+w.length+' từ)');if(url)setTimeout(()=>location.href=url,500)};
  nutTao('tick','Dùng làm bộ từ đang dùng',()=>dungBo(),'tl');nutTao('the-bai','Mở Thẻ chớp',()=>dungBo('../the-chop/'));nutTao('gui','Giao bài về nhà',()=>dungBo('../giao-bai/'))}},

{k:'chieu',g:'trong',o:1,z:'课文展示',t:'Chiếu bài',m:'Chữ to, pinyin',ic:'tv',c:'sky',nghe:true,ve(){gat('Pinyin','py');gat('Bản dịch','dich');chonGiong();
  $('bai').innerHTML=dong.map((x,i)=>dongHtml(x,i,esc(x.z),phu(x))).join('');
  $('bai').onclick=e=>{const b=e.target.closest('.cau');if(b){ngung();o.nay=+b.dataset.i;ve();phat(dong[o.nay])}}}},

{k:'theo',g:'trong',o:2,z:'逐句跟读',t:'Đọc theo',m:'Nghe từng câu',ic:'loa-to',c:'mint',nghe:true,ve(){gat('Pinyin','py');gat('Bản dịch','dich');gat('Tự sang câu, chừa giờ nhắc lại','tam');chonGiong();
  $('bai').innerHTML=dong.map((x,i)=>dongHtml(x,i,esc(x.z),phu(x))).join('');
  const chay=i=>{ngung();if(i>=dong.length){o.nay=-1;ve();toast('Hết bài');return}o.nay=i;ve();const c=$('bai').children[i];if(c)c.scrollIntoView({block:'nearest'});phat(dong[i],o.tam?cho_=>sau(()=>chay(i+1),cho_*1000):null)};
  $('bai').onclick=e=>{const b=e.target.closest('.cau');if(b)chay(+b.dataset.i)};
  nutTao('phat',o.nay<0?'Bắt đầu':'Đọc lại câu này',()=>chay(Math.max(0,o.nay)),'tl');nutTao('sau','Câu tiếp',()=>chay(o.nay+1));nutTao('tam-dung','Dừng',()=>{ngung();o.nay=-1;ve()})}},

{k:'dungsai',g:'trong',o:4,z:'判断正误',t:'Đúng hay sai',m:'Cả lớp giơ tay',ic:'tick',c:'butter',ve(){
  const {t,ds}=dsDs();
  soan('Soạn câu đúng, sai ('+ds.length+')','ds',t,'câu | đúng   (hoặc: câu | sai)');
  if(!ds.length){$('bai').innerHTML='<p class="muted giua">Chưa có câu nào. Mở ô soạn ở trên, mỗi dòng một câu.</p>';return}
  const i=Math.max(0,Math.min(tam.ds||0,ds.length-1)),x=ds[i],hien=!!tam.dsH;tam.ds=i;
  const the=(v,z,vi)=>'<div class="'+(hien&&x.a!==null?(x.a===v?'dung':'mo2'):'')+'" lang="zh">'+z+'<small lang="vi">'+vi+'</small></div>';
  $('bai').innerHTML='<div class="hoi"><span class="muted">Câu '+(i+1)+' / '+ds.length+'</span><div class="h" lang="zh">'+esc(x.c)+'</div><div class="ds2">'+the(true,'对','Đúng')+the(false,'错','Sai')+'</div>'+(hien&&x.a===null?'<span class="muted">Câu này chưa ghi đáp án.</span>':'')+'</div>';
  const den=k=>{tam.ds=(k+ds.length)%ds.length;tam.dsH=false;ve()},lat=()=>{tam.dsH=!tam.dsH;ve()};
  nutTao('truoc','Trước',()=>den(i-1));nutTao('mat',hien?'Giấu đáp án':'Đáp án',lat,'tl');nutTao('sau','Tiếp',()=>den(i+1));nutTao('loa','Đọc câu',()=>noi(x.c));
  phim={ArrowLeft:()=>den(i-1),ArrowRight:()=>den(i+1),' ':()=>hien?den(i+1):lat()}}},

{k:'dua',g:'trong',o:5,z:'朗读计时',t:'Đọc đua giờ',m:'Bấm giờ, tính tốc độ',ic:'dong-ho',c:'coral',ve(){
  const D=tam.dua||(tam.dua={kq:[],ten:''}),chay=!!D.t0,so=dong.reduce((s,x)=>s+[...x.z].filter(c=>HAN.test(c)).length,0);
  gat('Che bài tới khi bấm giờ','che');gat('Pinyin','py');
  const ip=document.createElement('input');ip.type='text';ip.maxLength=30;ip.placeholder='Tên người đọc (không bắt buộc)';ip.setAttribute('aria-label','Tên người đọc');ip.value=D.ten;ip.oninput=()=>D.ten=ip.value;$('cong').append(ip);
  const bang=D.kq.length?'<table class="bang"><thead><tr><th>Hạng</th><th>Người đọc</th><th>Thời gian</th><th>Chữ / phút</th></tr></thead><tbody>'+D.kq.slice().sort((a,b)=>b.v-a.v).map((r,k)=>'<tr><td>'+(k+1)+'</td><td>'+esc(r.ten)+'</td><td>'+r.s.toFixed(1)+' giây</td><td><b>'+r.v+'</b></td></tr>').join('')+'</tbody></table>':'';
  $('bai').innerHTML='<div class="dg-so" id="dgSo">0.0</div><p class="muted giua" style="margin:0">'+so+' chữ Hán</p>'+dong.map((x,i)=>dongHtml(x,i,esc(x.z),o.py?'<span class="p">'+esc(x.p)+'</span>':'',o.che&&!chay?'mo-di':'')).join('')+bang;
  if(chay){const ve1=()=>{const e=$('dgSo');if(e)e.textContent=((Date.now()-D.t0)/1000).toFixed(1)};ve1();lap(ve1,100)}
  const bam=()=>{if(!D.t0){ngung();D.t0=Date.now();ve();return}const s=(Date.now()-D.t0)/1000;D.t0=0;ngung();
    if(s>=2){D.kq.push({ten:D.ten.trim()||'Lượt '+(D.kq.length+1),s,v:Math.round(so/s*60)});D.ten=''}else toast('Lượt quá ngắn, không tính');ve()};
  nutTao(chay?'dung':'phat',chay?'Đọc xong':'Bắt đầu',bam,'tl');if(D.kq.length)nutTao('lai','Xoá kết quả',()=>{D.kq=[];ve()});phim={' ':bam}},
  vao(){if(tam.dua)tam.dua.t0=0}},

{k:'hoi',g:'sau',o:1,z:'回答问题',t:'Câu hỏi hiểu bài',m:'Hỏi rồi hiện đáp án',ic:'tin-nhan',c:'butter',ve(){
  const {t,ds}=hoiDs(),T=tam;soan('Soạn câu hỏi ('+ds.length+')','hoi',t,'câu hỏi | đáp án');
  if(!ds.length){$('bai').innerHTML='<p class="muted giua">Chưa có câu hỏi. Mở ô soạn ở trên, mỗi dòng một câu.</p>';return}
  const i=Math.max(0,Math.min(T.hoi||0,ds.length-1)),c=ds[i],h=!!T.hoiH;
  $('bai').innerHTML='<div class="hoi"><span class="muted">Câu '+(i+1)+' / '+ds.length+'</span><div class="h" lang="zh">'+esc(c[0])+'</div><div class="t" lang="zh">'+(h?esc(c[1]||'(chưa ghi đáp án)'):'　')+'</div></div>';
  const den=k=>{T.hoi=(k+ds.length)%ds.length;T.hoiH=false;ve()},lat=()=>{T.hoiH=!h;ve()};
  nutTao('truoc','Trước',()=>den(i-1));nutTao('mat',h?'Giấu đáp án':'Đáp án',lat,'tl');nutTao('sau','Tiếp',()=>den(i+1));nutTao('loa','Đọc câu hỏi',()=>noi(c[0]));
  phim={ArrowLeft:()=>den(i-1),ArrowRight:()=>den(i+1),' ':()=>h?den(i+1):lat()}}},

{k:'trong',g:'sau',o:5,z:'选词填空',t:'Điền chỗ trống',m:'Bấm từ để khoét',ic:'but',c:'rose',ve(){const K=new Set(du().khoet||[]),co=new Set(),ghi=()=>{du().khoet=[...K];luu();ve()};
  $('bai').innerHTML=dong.map((x,i)=>dongHtml(x,i,tach(x.z).map(w=>{if(!HAN.test(w))return esc(w);if(K.has(w)){co.add(w);return'<span class="trong tu'+(tam.hien?' hien':'')+'" data-w="'+esc(w)+'">'+esc(w)+'</span>'}return'<span class="tu" data-w="'+esc(w)+'">'+esc(w)+'</span>'}).join(''))).join('');
  if(co.size){const k=document.createElement('div');k.className='kho-tu';k.lang='zh';k.innerHTML=tron([...co]).map(w=>'<span>'+esc(w)+'</span>').join('');$('cong').append(k)}else ghiChu('Bấm vào một từ trong bài để khoét.');
  $('bai').onclick=e=>{const t=e.target.closest('.tu');if(!t)return;const w=t.dataset.w;K.has(w)?K.delete(w):K.add(w);ghi()};
  nutTao('lap-lanh','Khoét tự động',()=>{K.clear();tron(tu().filter(x=>x.cap!==1&&x.z.length>1&&!vai.includes(x.z))).slice(0,6).forEach(x=>K.add(x.z));tam.hien=false;ghi()},'tl');
  nutTao('mat',tam.hien?'Giấu đáp án':'Hiện đáp án',()=>{tam.hien=!tam.hien;ve()});nutTao('lai','Xoá hết chỗ trống',()=>{K.clear();ghi()})}},

{k:'in',g:'sau',o:10,z:'打印讲义',t:'In phiếu',m:'Phiếu bài đọc',ic:'cuon-giay',c:'sky',tuIn:true,ve(){
  const C=Object.assign({},IN_MAC,store.get('gv-bk-in')||{}),ghi=()=>store.set('gv-bk-in',C);
  const L=PHIEU.find(p=>p.k===o.loai)||PHIEU[0];o.loai=L.k;
  const nutLoai=chon('Loại phiếu',PHIEU.map(p=>[p.k,p.t]),o.loai,v=>{o.loai=v;ve()});
  PHIEU.forEach((p,i)=>{if(p.rieng)nutLoai.children[i].insertAdjacentHTML('beforeend',' '+IC('khoa'))});
  if(o.loai==='du'){gat('Pinyin','py');gat('Bản dịch','dich')}
  const g=document.createElement('span');g.setAttribute('aria-label','Mẫu giấy');$('cong').append(g);GVT.giay(g,$('xem'));
  const K=new Set(du().khoet||[]),X=$('xem');X.innerHTML='';
  if(o.loai==='che'&&!K.size){$('bai').innerHTML='<p class="muted giua">Chưa khoét từ nào. Sang "Điền chỗ trống" để chọn từ.</p>';return}
  const thuTu=L.xao?tron(dong):dong,khoTu=tron([...K]);   // đổi cỡ chữ không xáo lại thẻ
  function veTrang(){X.innerHTML='';X.style.setProperty('--ic',C.co+'mm');X.style.setProperty('--ig',C.gian+'mm');
    const vai_=x=>C.vai&&x.v?'<span class="v">'+esc(x.v)+'：</span>':'';
    const manh=thuTu.map(x=>L.manh?L.manh(x,C)
      :'<div class="dg manh">'+vai_(x)+'<div><div class="z">'+(o.loai==='che'?tach(x.z).map(w=>K.has(w)?'（＿＿＿）':esc(w)).join(''):esc(x.z))+'</div>'+(o.loai==='du'&&o.py?'<div class="p">'+esc(x.p)+'</div>':'')+(o.loai==='du'&&o.dich&&x.d?'<div class="d">'+esc(x.d)+'</div>':'')+'</div></div>');
    const dau=L.tieuDe===false?'':'<h2>'+esc(C.tde.trim()||('课文'+(o.loai==='che'?' · 填空':'')))+'</h2>'+(C.hoTen?'<div class="ho-ten"><span>姓名 Họ tên</span><span>班级 Lớp</span></div>':'')+(o.loai==='che'?'<p class="khung-tu" lang="zh">'+khoTu.map(esc).join('　')+'</p>':'');
    /* xếp từng mảnh vào trang, đầy chiều cao (chừa chân cho dấu bản quyền) thì sang trang mới */
    const cao=252*96/25.4;let khung=null,nho=0;
    const trangMoi=d=>{const t=document.createElement('div');t.className='trang';t.innerHTML='<div class="bang in">'+d+'</div>';X.append(t);khung=t.firstChild};
    trangMoi(dau);manh.forEach(h=>{khung.insertAdjacentHTML('beforeend',h);if(khung.offsetHeight>cao&&khung.querySelectorAll('.manh').length>1){const c=khung.lastElementChild;c.remove();trangMoi('');khung.append(c)}
      /* một đoạn dài hơn cả trang ở cỡ đang chọn: thu riêng đoạn đó cho vừa, không để chữ bị cắt */
      if(khung.offsetHeight>cao){const c=khung.lastElementChild;let s=C.co;nho++;while(s>3.4&&khung.offsetHeight>cao){s-=.2;c.style.setProperty('--ic',s.toFixed(1)+'mm')}}});
    $('soTrang').textContent=X.children.length+' trang'+(nho?' · '+nho+' đoạn dài được thu nhỏ cho vừa trang':'');GVT.vuaTrang(X)}
  /* bảng tuỳ chỉnh: kéo là xem được ngay, nhớ trên máy */
  const T=document.createElement('div');T.className='chinh-in';
  const keo=(k,t,a,b,buoc)=>'<label>'+t+'<input type="range" data-k="'+k+'" min="'+a+'" max="'+b+'" step="'+buoc+'" value="'+C[k]+'"><output>'+C[k]+' mm</output></label>';
  const o_=(k,t)=>'<label class="chk"><input type="checkbox" data-k="'+k+'"'+(C[k]?' checked':'')+'>'+t+'</label>';
  T.innerHTML=keo('co','Cỡ chữ Hán',4,14,.2)+keo('gian','Giãn dòng',.6,12,.2)+o_('vai','Tên vai')
    +(L.tieuDe===false?'':o_('hoTen','Dòng họ tên, lớp')+'<label>Tiêu đề<input type="text" data-k="tde" maxlength="60" placeholder="课文" value="'+esc(C.tde)+'"></label>')
    +'<button class="btn gh" type="button" id="inMac">Về mặc định</button><span class="muted small" id="soTrang" aria-live="polite"></span>';
  let hen_=0;
  T.oninput=e=>{const i=e.target,k=i.dataset.k;if(!k)return;C[k]=i.type==='checkbox'?i.checked:i.type==='range'?+i.value:i.value;if(i.type==='range')i.nextElementSibling.textContent=C[k]+' mm';ghi();clearTimeout(hen_);hen_=setTimeout(veTrang,60)};
  $('cong').append(T);$('inMac').onclick=()=>{store.del('gv-bk-in');ve()};
  veTrang();nutTao('cuon-giay','In / Lưu PDF',()=>print(),'tl')}}
];

/* ---------- chạy ---------- */
function khoiDong(){
  let h=0;$('van').oninput=()=>{clearTimeout(h);h=setTimeout(()=>{bai().van=$('van').value;luu();doc()},400)};
  $('bkDat').onchange=()=>{bai().ten=$('bkDat').value.trim()||'Bài chưa đặt tên';luu();napBai()};
  $('bkChon').onchange=()=>{KHO.cur=$('bkChon').value;luu();napBai()};
  $('bkMoi').onclick=()=>{const id='b'+Date.now().toString(36);KHO.ds.push({id,ten:'Bài mới '+KHO.ds.length,van:'',du:{}});KHO.cur=id;luu();napBai();$('khung').open=true;$('van').focus()};
  $('bkXoa').onclick=()=>{const b=bai();if(!confirm('Xoá bài "'+b.ten+'" và phần đã soạn cho bài này khỏi máy?'))return;KHO.ds.splice(KHO.ds.indexOf(b),1);
    if(!KHO.ds.length)KHO.ds.push({id:'b'+Date.now().toString(36),ten:'Bài mới',van:'',du:{}});KHO.cur=KHO.ds[0].id;luu();napBai()};
  $('hoat').onclick=e=>{const b=e.target.closest('button[data-k]');if(!b)return;const h2=HD.find(x=>x.k===b.dataset.k);if(h2&&h2.vao)h2.vao();mo(b.dataset.k)};
  $('to').onclick=()=>{o.co=Math.min(1.8,o.co+.15);$('bai').style.setProperty('--co',o.co)};
  $('nho').onclick=()=>{o.co=Math.max(.7,o.co-.15);$('bai').style.setProperty('--co',o.co)};
  $('toan').onclick=()=>toan($('san'));
  document.addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select,summary')||e.metaKey||e.ctrlKey||e.altKey)return;
    if(e.key===' '&&e.target.closest('button,a')&&!e.target.closest('#san'))return;const f=phim[e.key];if(f){e.preventDefault();f()}});
  addEventListener('resize',()=>{if(!$('xem').hidden)GVT.vuaTrang($('xem'))});
  daKhoi=true;veNut();napBai();layTuBai();
  if(cho&&HD.some(x=>x.k===cho)){const k=cho;cho='';mo(k);$('san').scrollIntoView()}
  GV.loiRieng(window.LL_KHOA,code=>{const s=document.createElement('script');s.textContent=code;document.body.append(s)},$('khung'))}

HD.push(...CONG);
return{khoiDong,them,themPhieu,mo,ve,doc,du,lay,luu,laMau,bai,o,get tam(){return tam},get dong(){return dong},get vai(){return vai},set phim(v){phim=v},
  HAN,hoiDs,dsDs,tach,tu,noi,phat,chonGiong,ngung,sau,giay,nutTao,gat,chon,ghiChu,soan,cauHoi,dongHtml,phu};
})();
