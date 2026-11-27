// Góc giáo viên — công cụ dùng nhanh trên lớp 随手工具. gv.js tự nạp file này ở mọi trang.
// Mỗi công cụ vẽ vào một khung riêng và giữ nguyên trạng thái khi đóng; dùng ở hai nơi: nút nổi (mọi trang) và nhanh/.
window.GVN=(function(){
const GOC=new URL('.',document.currentScript.src).href;
const IC=n=>'<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#'+n+'"></use></svg>';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const doc=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},ghi=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const so=n=>Math.floor(Math.random()*n);
const tron=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=so(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const kho={};
const napJs=(src,co)=>co()?Promise.resolve():kho[src]||(kho[src]=new Promise((ok,loi)=>{const s=document.createElement('script');s.src=src;s.onload=()=>ok();s.onerror=()=>{delete kho[src];s.remove();loi()};document.head.append(s)}));
const btn=(chu,them,thuoc)=>'<button type="button" class="n-btn'+(them?' '+them:'')+'"'+(thuoc?' '+thuoc:'')+'>'+chu+'</button>';
/* nhóm nút chọn một */
function chon(el,ds,cur,on){el.classList.add('n-seg');el.innerHTML=ds.map(([v,t])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(v===cur)+'">'+t+'</button>').join('');
  el.onclick=e=>{const b=e.target.closest('button');if(!b)return;[...el.children].forEach(x=>x.setAttribute('aria-pressed',x===b));const v=ds.find(x=>String(x[0])===b.dataset.v)[0];on(v)}}
/* bấm hai lần mới làm (thay hộp hỏi của trình duyệt) */
function haiLan(b,chu,lam){const goc=b.innerHTML;let h=0;b.onclick=()=>{if(b.dataset.cho){clearTimeout(h);delete b.dataset.cho;b.innerHTML=goc;lam();return}
  b.dataset.cho=1;b.textContent=chu;h=setTimeout(()=>{delete b.dataset.cho;b.innerHTML=goc},3000)}}
let am=null;
const moAm=()=>{try{am=am||new (window.AudioContext||window.webkitAudioContext)();if(am.state==='suspended')am.resume()}catch(e){}};
function chuong(){if(!am)return;try{[0,.35,.7].forEach(t=>{const o=am.createOscillator(),g=am.createGain(),s=am.currentTime+t;o.frequency.value=880;g.gain.setValueAtTime(.001,s);g.gain.exponentialRampToValueAtTime(.35,s+.02);g.gain.exponentialRampToValueAtTime(.001,s+.28);o.connect(g);g.connect(am.destination);o.start(s);o.stop(s+.3)})}catch(e){}}
const mmss=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
const lop=()=>String(doc('dcd-ds')||'').split('\n').map(x=>x.trim()).filter(Boolean);
const nghe=z=>napJs(GOC+'../tro-choi/tts.js',()=>window.TTS).then(()=>{const t=()=>TTS.say(z,.8);window.TTS&&t()}).catch(()=>{});
const napBai=()=>napJs(GOC+'../tu-vung/bai-data.js',()=>window.BAI);
/* từ của bài hoặc bộ từ đang chọn ở trang chính (khoá gv-dung) */
function tuDung(d){if(d&&d.k==='cot'){try{const o=JSON.parse(decodeURIComponent(escape(atob(d.bo.slice(4).replace(/-/g,'+').replace(/_/g,'/')))));return{ten:o.n,w:o.w.map(([z,p,vi])=>({z,p,vi:vi||''}))}}catch(e){return null}}
  const b=(window.BAI||[]).find(x=>d&&x.id===d.sach),l=b&&b.bai.find(x=>x.id===d.bai);return l?{ten:b.vi+' · Bài '+l.n,w:l.w.map(([z,p,vi])=>({z,p,vi:vi||''}))}:null}

let nhanNut=()=>{};

/* ================= các công cụ ================= */
const CC=[

{k:'dem-gio',n:'Đếm giờ',z:'计时',m:'Có chuông, vẫn chạy khi đóng',ic:'dong-ho',tao(el){
  let tong=180,con=180000,chay=false,het=0,h=0;
  el.innerHTML='<div class="n-chips">'+[[30,'30 giây'],[60,'1 phút'],[120,'2 phút'],[180,'3 phút'],[300,'5 phút'],[600,'10 phút']].map(([s,t])=>btn(t,'','data-s="'+s+'"')).join('')+'</div>'
    +'<div class="n-to" aria-live="off"></div><div class="n-thanh"><i></i></div><div class="n-hang">'+btn('','chinh n-chay')+btn('+30 giây','n-them')+btn(IC('lai')+'Đặt lại','n-lai')+'</div>';
  const q=s=>el.querySelector(s);
  function ve(){const s=Math.ceil(con/1000);q('.n-to').textContent=mmss(s);q('.n-thanh i').style.width=100*(1-con/(tong*1000))+'%';
    el.classList.toggle('het',con<=0);q('.n-chay').innerHTML=IC(chay?'tam-dung':'phat')+(chay?'Tạm dừng':con<=0?'Chạy lại':'Bắt đầu');
    el.querySelectorAll('[data-s]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.s===tong));nhanNut(chay?mmss(s):con<=0?'Hết giờ':'')}
  function nhip(){con=Math.max(0,het-Date.now());if(!con){chay=false;clearInterval(h);chuong()}ve()}
  function bat(){moAm();if(con<=0)con=tong*1000;chay=true;het=Date.now()+con;clearInterval(h);h=setInterval(nhip,200);ve()}
  function dung(){if(chay){con=Math.max(0,het-Date.now())}chay=false;clearInterval(h);ve()}
  el.querySelector('.n-chips').onclick=e=>{const b=e.target.closest('[data-s]');if(!b)return;dung();tong=+b.dataset.s;con=tong*1000;bat()};
  q('.n-chay').onclick=()=>chay?dung():bat();
  q('.n-them').onclick=()=>{con=(chay?Math.max(0,het-Date.now()):con)+30000;tong=Math.max(tong,Math.ceil(con/1000));if(chay)het=Date.now()+con;ve()};
  q('.n-lai').onclick=()=>{chay=false;clearInterval(h);con=tong*1000;ve()};
  ve();return{}}},

{k:'goi-ten',n:'Gọi tên',z:'点名',m:'Ngẫu nhiên, không gọi lặp',ic:'gio-tay',tao(el){
  let con=[],h=0,sua=false;
  el.innerHTML='<div class="n-choi"><div class="n-to n-ten" aria-live="polite">?</div><div class="n-phu"></div><div class="n-hang">'+btn(IC('xuc-xac')+'Gọi','chinh n-goi')+btn(IC('lai')+'Gọi lại từ đầu','n-lai')+btn(IC('but')+'Sửa danh sách','n-sua')+'</div></div>'
    +'<div class="n-soan" hidden><label>Danh sách lớp, mỗi dòng một tên<textarea rows="8"></textarea></label><div class="n-hang">'+btn(IC('tick')+'Lưu danh sách','chinh n-luu')+'</div></div>';
  const q=s=>el.querySelector(s);
  function ve(){const ds=lop(),s=sua||!ds.length;q('.n-choi').hidden=s;q('.n-soan').hidden=!s;if(s)return;
    con=con.filter(x=>ds.includes(x));q('.n-phu').textContent=con.length?'Còn '+con.length+' / '+ds.length+' bạn':'Lớp có '+ds.length+' bạn'}
  q('.n-goi').onclick=()=>{const ds=lop();if(!ds.length)return ve();if(!con.length)con=tron(ds);const ten=con.pop();let k=0;clearInterval(h);q('.n-goi').disabled=true;
    h=setInterval(()=>{if(++k>12){clearInterval(h);q('.n-ten').textContent=ten;q('.n-ten').classList.add('trung');q('.n-goi').disabled=false;ve();return}q('.n-ten').classList.remove('trung');q('.n-ten').textContent=ds[so(ds.length)]},70)};
  q('.n-lai').onclick=()=>{con=[];q('.n-ten').textContent='?';q('.n-ten').classList.remove('trung');ve()};
  q('.n-sua').onclick=()=>{sua=true;q('textarea').value=lop().join('\n');ve()};
  q('.n-luu').onclick=()=>{const t=q('textarea').value.split('\n').map(x=>x.trim()).filter(Boolean).join('\n');ghi('dcd-ds',t);sua=false;con=[];q('.n-ten').textContent='?';ve()};
  return{hien:ve}}},

{k:'diem',n:'Bảng điểm đội',z:'记分牌',m:'Cộng trừ điểm cho 2–6 đội',ic:'vuong-mien',tao(el){
  const d=Object.assign({n:2,ten:[],diem:[]},doc('gv-diem')||{});
  el.innerHTML='<div class="n-hang"><span>Số đội</span><span class="n-so-doi"></span>'+btn(IC('lai')+'Về 0','n-ve0')+'</div><div class="n-doi"></div>';
  const q=s=>el.querySelector(s),luu=()=>ghi('gv-diem',d);
  function ve(){const max=Math.max(0,...Array.from({length:d.n},(_,i)=>d.diem[i]||0));
    q('.n-doi').style.setProperty('--cot',d.n===4?2:Math.min(d.n,3));
    q('.n-doi').innerHTML=Array.from({length:d.n},(_,i)=>{const v=d.diem[i]||0;return '<div class="n-d m'+(i+1)+(max>0&&v===max?' dau':'')+'" data-i="'+i+'"><div class="n-d-ten">'+IC('vuong-mien')+'<input type="text" maxlength="20" value="'+esc(d.ten[i]||'Đội '+(i+1))+'" aria-label="Tên đội '+(i+1)+'"></div><div class="n-d-diem" aria-live="polite">'+v+'</div><div class="n-hang">'
      +btn('-1','','data-c="-1" aria-label="Trừ 1 điểm"')+btn('+1','chinh','data-c="1" aria-label="Cộng 1 điểm"')+btn('+5','','data-c="5" aria-label="Cộng 5 điểm"')+'</div></div>'}).join('')}
  chon(q('.n-so-doi'),[2,3,4,5,6].map(n=>[n,String(n)]),d.n,v=>{d.n=v;luu();ve()});
  q('.n-doi').onclick=e=>{const b=e.target.closest('[data-c]');if(!b)return;const i=+b.closest('.n-d').dataset.i;d.diem[i]=(d.diem[i]||0)+(+b.dataset.c);luu();ve();const m=q('.n-d[data-i="'+i+'"] [data-c="'+b.dataset.c+'"]');if(m)m.focus({preventScroll:true})};
  q('.n-doi').oninput=e=>{if(e.target.tagName!=='INPUT')return;d.ten[+e.target.closest('.n-d').dataset.i]=e.target.value;luu()};
  haiLan(q('.n-ve0'),'Bấm lần nữa để về 0',()=>{d.diem=[];luu();ve()});
  ve();return{}}},

{k:'go',n:'Gõ là chiếu',z:'大字板',m:'Chữ thật to, pinyin, giọng đọc',ic:'ban-phim',tao(el){
  let ls=doc('gv-gochieu')||[],hienPy=true,h=0;
  el.innerHTML='<form class="n-hang n-go"><input type="text" maxlength="60" lang="zh" placeholder="Gõ chữ Hán: 图书馆" aria-label="Gõ chữ Hán cần chiếu">'+'<button type="submit" class="n-btn chinh">'+IC('tv')+'Chiếu</button></form>'
    +'<div class="n-chieu" aria-live="polite"><div class="n-py"></div><div class="n-han" lang="zh"></div></div><div class="n-hang"><label class="n-bat"><input type="checkbox" checked>Pinyin</label>'+btn(IC('loa')+'Nghe','n-nghe')+'</div><div class="n-chips n-ls"></div>';
  const q=s=>el.querySelector(s),o=q('.n-go input');let z='';
  const thanh=p=>/[āēīōūǖ]/.test(p)?1:/[áéíóúǘ]/.test(p)?2:/[ǎěǐǒǔǚ]/.test(p)?3:/[àèìòùǜ]/.test(p)?4:0;
  function py(){const f=window.pinyinPro&&window.pinyinPro.pinyin,HAN=/[㐀-鿿]/;if(!f||!HAN.test(z))return'';const c=[...z],a=f(z,{type:'array',nonZh:'spaced'});
    const am=a.map((p,i)=>{const t=thanh(a[i+1]||'');if(c[i]==='不'&&t===4)return'bú';if(c[i]==='一'&&HAN.test(c[i+1]||'')&&!/[第十零一二三四五六七八九]/.test(c[i-1]||'')&&!/[月号日一二三四五六七八九十]/.test(c[i+1])){if(t===4||c[i+1]==='个')return'yí';if(t)return'yì'}return p});
    /* viết liền âm tiết trong cùng một từ (máy tách từ của trình duyệt); không có thì để rời */
    const tu=window.Intl&&Intl.Segmenter?[...new Intl.Segmenter('zh',{granularity:'word'}).segment(z)].map(x=>x.segment):c;
    const doi={'，':',','、':',','。':'.','！':'!','？':'?','：':':','；':';'};let i=0,h='';
    tu.forEach(w=>{const n=[...w].length,s=am.slice(i,i+n);i+=n;if(HAN.test(w))h+=(h?' ':'')+s.join('');else if(w.trim())h+=doi[w]||w});
    return h.replace(/(^|[.!?]\s*)(\p{L})/gu,(m,x,y)=>x+y.toUpperCase())}
  function co(){const w=q('.n-chieu').clientWidth||320,n=Math.max(1,[...z].length);q('.n-han').style.fontSize=Math.max(30,Math.min(220,w*.94/Math.min(n,n>10?10:n)))+'px'}
  function ve(){q('.n-han').textContent=z;q('.n-py').textContent=hienPy?py():'';q('.n-nghe').disabled=!z;co();
    q('.n-ls').innerHTML=ls.map((x,i)=>btn(esc(x),'chu','data-i="'+i+'" lang="zh"')).join('')}
  function chieu(t){z=t.trim();if(!z)return;ls=[z].concat(ls.filter(x=>x!==z)).slice(0,8);ghi('gv-gochieu',ls);ve();
    napJs('https://cdn.jsdelivr.net/npm/pinyin-pro@3.19.0/dist/index.js',()=>window.pinyinPro).then(ve).catch(()=>{q('.n-py').textContent='Chưa tải được pinyin, kiểm tra mạng.'})}
  q('.n-go').onsubmit=e=>{e.preventDefault();chieu(o.value);o.select()};
  q('.n-ls').onclick=e=>{const b=e.target.closest('[data-i]');if(b){o.value=ls[+b.dataset.i];chieu(o.value)}};
  q('.n-bat input').onchange=e=>{hienPy=e.target.checked;ve()};q('.n-nghe').onclick=()=>nghe(z);
  new ResizeObserver(()=>{clearTimeout(h);h=setTimeout(co,60)}).observe(el);
  ve();return{hien(){setTimeout(()=>{co();if(!z)o.focus({preventScroll:true})},30)}}}},

{k:'quay',n:'Vòng quay',z:'大转盘',m:'Quay chọn mục, tên hoặc từ',ic:'lai',tao(el){
  const MAU=['#16949e','#e0545f','#c99a14','#2e9e73','#3b87d6','#d24e86','#e7823a','#7a63c9'];
  let goc=0,bo=[],h=0,dang=false;
  el.innerHTML='<div class="n-quay"><div class="n-banh"><div class="n-kim"></div><div class="n-xoay"></div></div><div class="n-ben"><div class="n-kq" aria-live="polite"></div><div class="n-hang">'+btn(IC('lai')+'Quay','chinh n-q')+'</div><label class="n-bat"><input type="checkbox" class="n-bo">Bỏ mục đã trúng</label><div class="n-phu"></div>'
    +'<label>Mỗi dòng một mục<textarea rows="5" placeholder="Hát một bài&#10;Đặt một câu&#10;Đọc bài khoá"></textarea></label><div class="n-hang">'+btn('Lấy tên lớp','n-ten')+btn('Lấy từ của bài','n-tu')+'</div></div></div>';
  const q=s=>el.querySelector(s),o=q('textarea');o.value=doc('gv-quay')||'Đặt một câu\nĐọc to bài khoá\nHỏi bạn bên cạnh\nViết chữ lên bảng\nNói 30 giây\nThầy cô chọn';
  const tatCa=()=>o.value.split('\n').map(x=>x.trim()).filter(Boolean).slice(0,60);
  const con=()=>{const a=tatCa();return q('.n-bo').checked?a.filter(x=>!bo.includes(x)):a};
  let veDS=[];
  function ve(){veDS=con();const n=veDS.length,P=(g,r)=>[100+r*Math.sin(g*Math.PI/180),100-r*Math.cos(g*Math.PI/180)];
    let s='';veDS.forEach((t,i)=>{const a=i*360/n,b=(i+1)*360/n,[x1,y1]=P(a,98),[x2,y2]=P(b,98),mau=MAU[(i===n-1&&n%MAU.length===1?i+1:i)%MAU.length];
      s+=n===1?'<circle cx="100" cy="100" r="98" fill="'+mau+'"/>':'<path d="M100 100L'+x1+' '+y1+'A98 98 0 '+(b-a>180?1:0)+' 1 '+x2+' '+y2+'Z" fill="'+mau+'" stroke="#fff" stroke-width=".8"/>';
      if(n<=40){const g=(a+b)/2,chu=[...t].length>16?[...t].slice(0,15).join('')+'…':t,co=Math.max(4,Math.min(11,150/n,120/[...chu].length));s+='<text transform="rotate('+(g-90)+' 100 100)" x="193" y="'+(100+co*.35)+'" text-anchor="end" font-size="'+co+'" fill="#fff" font-weight="700">'+esc(chu)+'</text>'}});
    q('.n-xoay').innerHTML='<svg viewBox="0 0 200 200" aria-hidden="true">'+(s||'<circle cx="100" cy="100" r="98" fill="#c9ccd8"/>')+'<circle cx="100" cy="100" r="13" fill="#fff"/></svg>';
    q('.n-q').disabled=dang||!n;q('.n-phu').textContent=n?'Còn '+n+' mục trên vòng':tatCa().length?'Đã quay hết, bỏ chọn "Bỏ mục đã trúng" hoặc sửa danh sách.':'Gõ ít nhất một mục.'}
  function quay(){const n=con().length;if(!n||dang)return;ve();const k=so(n),m=360/n,dich=(360-(k+.5)*m+(Math.random()-.5)*m*.7+360)%360;goc+=360*5+((dich-goc%360)+360)%360;
    dang=true;q('.n-q').disabled=true;q('.n-kq').textContent='…';q('.n-kq').classList.remove('trung');const x=q('.n-xoay'),t=veDS[k];x.style.transform='rotate('+goc+'deg)';
    clearTimeout(h);h=setTimeout(()=>{dang=false;q('.n-kq').textContent=t;q('.n-kq').classList.add('trung');if(q('.n-bo').checked){bo.push(t)}q('.n-q').disabled=!con().length;q('.n-phu').textContent=q('.n-bo').checked?'Còn '+con().length+' mục':'Có '+n+' mục trên vòng'},3700)}
  const doi=()=>{bo=[];ghi('gv-quay',o.value);ve()};
  q('.n-q').onclick=quay;o.oninput=doi;q('.n-bo').onchange=()=>{bo=[];ve()};
  q('.n-ten').onclick=()=>{const l=lop();if(!l.length){q('.n-phu').textContent='Chưa có danh sách lớp. Mở "Gọi tên" để nhập.';return}o.value=l.join('\n');doi()};
  q('.n-tu').onclick=()=>napBai().then(()=>{const t=tuDung(doc('gv-dung'));if(!t){q('.n-phu').textContent='Chọn bài ở trang chính Góc giáo viên trước.';return}o.value=t.w.map(x=>x.z).join('\n');doi()}).catch(()=>{q('.n-phu').textContent='Chưa tải được từ, kiểm tra mạng.'});
  ve();return{}}},

{k:'rut',n:'Rút từ đặt câu',z:'抽词造句',m:'Rút một từ trong bài để đặt câu',ic:'the-bai',tao(el){
  let tu=[],con=[],cur=null,hienNghia=false,d=null;
  el.innerHTML='<div class="n-hang n-nguon"><label>Giáo trình<select class="n-s"></select></label><label class="n-bl">Bài<select class="n-b"></select></label></div><div class="n-the" aria-live="polite"><div class="n-han" lang="zh">?</div><div class="n-py"></div><div class="n-vi"></div></div>'
    +'<div class="n-phu"></div><div class="n-hang">'+btn(IC('the-bai')+'Rút từ','chinh n-r')+btn(IC('mat')+'Pinyin, nghĩa','n-m','aria-pressed="false"')+btn(IC('loa')+'Nghe','n-nghe')+btn(IC('lai')+'Làm lại','n-lai')+'</div>';
  const q=s=>el.querySelector(s),S=q('.n-s'),B=q('.n-b');
  function ve(){q('.n-han').textContent=cur?cur.z:'?';q('.n-py').textContent=cur&&hienNghia?cur.p:'';q('.n-vi').textContent=cur&&hienNghia?cur.vi:'';
    q('.n-m').setAttribute('aria-pressed',hienNghia);q('.n-nghe').disabled=!cur;q('.n-r').disabled=!tu.length;
    q('.n-phu').textContent=!tu.length?'Chưa có từ.':cur?'Đặt một câu với từ này · còn '+con.length+' / '+tu.length:tu.length+' từ'}
  const hop=x=>window.GV&&GV.hop&&GV.hop(x);
  /* bỏ tên người khỏi phần đặt câu, trừ khi bài chỉ có tên */
  function dat(nd){d=nd;const t=tuDung(d),w=t?t.w:[],thuong=w.filter(x=>!/tên (người|riêng)/i.test(x.vi));tu=thuong.length?thuong:w;con=[];cur=null;ve()}
  function fillB(giu){const b=(window.BAI||[]).find(x=>x.id===S.value);q('.n-bl').hidden=!b;B.innerHTML='';if(b){b.bai.forEach(l=>B.add(new Option('Bài '+l.n+' · '+l.w.length+' từ',l.id)));if(b.bai.some(l=>l.id===giu))B.value=giu}hop(B)}
  napBai().then(()=>{const dd=doc('gv-dung'),cot=dd&&dd.k==='cot'&&tuDung(dd)?dd:null;
    BAI.forEach(b=>S.add(new Option(b.vi,b.id)));if(cot)S.add(new Option('Bộ từ của tôi',"__cot"),0);
    const co=dd&&dd.k==='bai'&&tuDung(dd)?dd:null;S.value=cot?'__cot':co?co.sach:BAI[0].id;hop(S);fillB(co&&co.bai);
    const chonBai=()=>dat(S.value==='__cot'?cot:{k:'bai',sach:S.value,bai:B.value});S.onchange=()=>{fillB();chonBai()};B.onchange=chonBai;chonBai()}).catch(()=>{q('.n-phu').textContent='Chưa tải được từ, kiểm tra mạng.'});
  q('.n-r').onclick=()=>{if(!tu.length)return;if(!con.length){con=tron(tu);if(cur&&con.length>1&&con[con.length-1].z===cur.z)con.unshift(con.pop())}cur=con.pop();hienNghia=false;ve()};
  q('.n-m').onclick=()=>{hienNghia=!hienNghia;ve()};q('.n-nghe').onclick=()=>cur&&nghe(cur.z);q('.n-lai').onclick=()=>{con=[];cur=null;ve()};
  ve();return{}}},

{k:'xuc',n:'Xúc xắc, bốc số',z:'掷骰子',m:'Xúc xắc hoặc số ngẫu nhiên',ic:'xuc-xac',tao(el){
  const c=Object.assign({kieu:'xx',vien:1,tu:1,den:40,lap:true},doc('gv-xucxac')||{});let h=0,da=[];
  el.innerHTML='<div class="n-hang"><span class="n-kieu"></span></div><div class="n-k-xx"><div class="n-hang"><span>Số viên</span><span class="n-vien"></span></div></div>'
    +'<div class="n-k-so"><div class="n-hang"><label>Từ<input type="number" class="n-tu" min="0" max="999"></label><label>Đến<input type="number" class="n-den" min="1" max="999"></label><label class="n-bat"><input type="checkbox" class="n-lap">Không bốc lặp</label></div></div>'
    +'<div class="n-mat" aria-live="polite"></div><div class="n-phu"></div><div class="n-hang">'+btn(IC('xuc-xac')+'<span>Gieo</span>','chinh n-g')+btn(IC('lai')+'Làm lại','n-lai')+'</div>';
  const q=s=>el.querySelector(s),luu=()=>ghi('gv-xucxac',c);
  const CHAM={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[3,1],[1,3],[3,3]],5:[[1,1],[3,1],[2,2],[1,3],[3,3]],6:[[1,1],[3,1],[1,2],[3,2],[1,3],[3,3]]};
  const vien=v=>'<svg viewBox="0 0 100 100" role="img" aria-label="'+v+'"><rect x="3" y="3" width="94" height="94" rx="20" fill="#fff" stroke="#c9ccd8" stroke-width="3"/>'+CHAM[v].map(([x,y])=>'<circle cx="'+x*25+'" cy="'+y*25+'" r="9.5" fill="'+(v===1?'#d6342a':'#1f2540')+'"/>').join('')+'</svg>';
  let mat=[1],soHien='?';
  function ve(){q('.n-k-xx').hidden=c.kieu!=='xx';q('.n-k-so').hidden=c.kieu!=='so';q('.n-g span').textContent=c.kieu==='xx'?'Gieo':'Bốc số';
    q('.n-mat').innerHTML=c.kieu==='xx'?mat.map(vien).join(''):'<div class="n-to">'+soHien+'</div>';
    q('.n-phu').textContent=c.kieu==='xx'?(mat.length>1?'Tổng: '+mat.reduce((a,b)=>a+b,0):''):da.length?'Đã bốc: '+da.slice(-12).join(', '):''}
  const ngung=()=>{clearInterval(h);q('.n-g').disabled=false};
  function dat(){ngung();c.tu=Math.max(0,Math.min(999,parseInt(q('.n-tu').value,10)||0));c.den=Math.max(c.tu,Math.min(999,parseInt(q('.n-den').value,10)||c.tu));da=[];soHien='?';luu();ve()}
  function gieo(){let dich;if(c.kieu==='so'){let ds=[];for(let i=c.tu;i<=c.den;i++)if(!c.lap||!da.includes(i))ds.push(i);if(!ds.length){q('.n-phu').textContent='Đã bốc hết số. Bấm Làm lại.';return}dich=ds[so(ds.length)]}
    let k=0;clearInterval(h);q('.n-g').disabled=true;h=setInterval(()=>{if(++k>11){clearInterval(h);q('.n-g').disabled=false;if(c.kieu==='so'){soHien=dich;da.push(dich)}else mat=Array.from({length:c.vien},()=>1+so(6));ve();return}
      if(c.kieu==='so')soHien=c.tu+so(c.den-c.tu+1);else mat=Array.from({length:c.vien},()=>1+so(6));ve()},65)}
  chon(q('.n-kieu'),[['xx','Xúc xắc'],['so','Bốc số']],c.kieu,v=>{ngung();c.kieu=v;luu();ve()});
  chon(q('.n-vien'),[[1,'1'],[2,'2'],[3,'3']],c.vien,v=>{ngung();c.vien=v;mat=Array(v).fill(1);luu();ve()});
  q('.n-tu').value=c.tu;q('.n-den').value=c.den;q('.n-lap').checked=c.lap;q('.n-tu').onchange=q('.n-den').onchange=dat;q('.n-lap').onchange=e=>{ngung();c.lap=e.target.checked;da=[];luu();ve()};
  q('.n-g').onclick=gieo;q('.n-lai').onclick=()=>{ngung();da=[];soHien='?';mat=Array(c.vien).fill(1);ve()};
  mat=Array(c.vien).fill(1);ve();return{}}},

{k:'hieu',n:'Tín hiệu lớp',z:'课堂信号',m:'Báo lớp đang làm gì, kèm giờ',ic:'loa-tat',tao(el){
  const DS=[['im','Giữ trật tự','请安静','loa-tat'],['nghe','Chú ý nghe','认真听','tai'],['doi','Nói theo cặp','两人对话','tin-nhan'],['nhom','Làm việc nhóm','小组活动','gio-tay'],['viet','Tự viết bài','自己写','but']];
  let cur=0,phut=0,con=0,het=0,h=0;
  el.innerHTML='<div class="n-chips n-th">'+DS.map(([k,v,z,ic],i)=>btn(IC(ic)+'<span>'+v+'</span>','','data-i="'+i+'"')).join('')+'</div><div class="n-hieu" aria-live="polite"></div><div class="n-hang"><span>Giờ</span><span class="n-phut"></span></div>';
  const q=s=>el.querySelector(s);
  function ve(){const [k,v,z,ic]=DS[cur];q('.n-hieu').className='n-hieu h-'+k;q('.n-hieu').innerHTML=IC(ic)+'<div class="n-han" lang="zh">'+z+'</div><div class="n-vi">'+v+'</div>'+(phut?'<div class="n-gio">'+(con>0?mmss(Math.ceil(con/1000)):'Hết giờ')+'</div>':'');
    el.querySelectorAll('.n-th button').forEach((b,i)=>b.setAttribute('aria-pressed',i===cur))}
  function nhip(){con=Math.max(0,het-Date.now());const g=q('.n-gio');if(g)g.textContent=con>0?mmss(Math.ceil(con/1000)):'Hết giờ';if(!con){clearInterval(h);chuong()}}
  q('.n-th').onclick=e=>{const b=e.target.closest('[data-i]');if(b){cur=+b.dataset.i;ve()}};
  chon(q('.n-phut'),[[0,'Không'],[1,'1 phút'],[3,'3 phút'],[5,'5 phút'],[10,'10 phút']],0,v=>{moAm();phut=v;clearInterval(h);con=v*60000;het=Date.now()+con;if(v)h=setInterval(nhip,250);ve()});
  ve();return{}}},

{k:'on',n:'Đo độ ồn',z:'安静表',m:'Dùng micro, không ghi âm',ic:'mic',tao(el){
  let nguon=null,ac=null,raf=0,muc=0,nguong=doc('gv-doon')||65,lan=0,tren=0,dem=false,phien=0;
  el.innerHTML='<div class="n-on" aria-live="polite"><div class="n-mat-on">'+IC('mat-cuoi')+'</div><div class="n-vi">Chưa bật micro</div><div class="n-do"><i></i><b></b></div></div><label class="n-keo">Mức "quá ồn"<input type="range" min="30" max="95" step="1"></label><div class="n-phu"></div>'
    +'<div class="n-hang">'+btn(IC('mic')+'<span>Bật micro</span>','chinh n-m')+btn(IC('lai')+'Đếm lại','n-lai')+'</div><p class="n-chu">Máy chỉ đo độ to ngay trên thiết bị này: không ghi âm, không gửi đi đâu.</p>';
  const q=s=>el.querySelector(s),R=q('input[type=range]');R.value=nguong;
  const veNg=()=>{q('.n-do b').style.left=nguong+'%';q('.n-phu').textContent='Số lần quá ồn: '+lan};
  function dung(){phien++;cancelAnimationFrame(raf);if(nguon)nguon.getTracks().forEach(t=>t.stop());nguon=null;if(ac)ac.close().catch(()=>{});ac=null;muc=0;
    q('.n-m span').textContent='Bật micro';q('.n-on').classList.remove('on');q('.n-do i').style.width='0';q('.n-mat-on').innerHTML=IC('mat-cuoi');q('.n-on .n-vi').textContent='Chưa bật micro'}
  async function bat(){const l=++phien;try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw 0;
      const s=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}});
      if(l!==phien){s.getTracks().forEach(t=>t.stop());return}nguon=s;ac=new (window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')await ac.resume();
      const an=ac.createAnalyser();an.fftSize=1024;ac.createMediaStreamSource(s).connect(an);const b=new Float32Array(an.fftSize);q('.n-m span').textContent='Tắt micro';let on=null;
      const vong=()=>{if(l!==phien)return;an.getFloatTimeDomainData(b);let t=0;for(const x of b)t+=x*x;const v=Math.max(0,Math.min(100,(20*Math.log10(Math.sqrt(t/b.length)+1e-8)+60)*100/55));muc+=(v-muc)*(v>muc?.3:.06);
        q('.n-do i').style.width=muc+'%';const o=muc>=nguong;if(o!==on){on=o;q('.n-on').classList.toggle('on',o);q('.n-mat-on').innerHTML=IC(o?'mat-khoc':'mat-cuoi');q('.n-on .n-vi').textContent=o?'Ồn quá! 太吵了':'Tốt lắm 很安静'}
        if(o){if(!tren)tren=performance.now();else if(!dem&&performance.now()-tren>700){dem=true;lan++;veNg()}}else{tren=0;dem=false}raf=requestAnimationFrame(vong)};vong()}
    catch(e){if(l!==phien)return;dung();q('.n-on .n-vi').textContent='Chưa dùng được micro. Hãy cho phép trình duyệt dùng micro rồi bấm lại.'}}
  q('.n-m').onclick=()=>nguon?dung():bat();R.oninput=()=>{nguong=+R.value;ghi('gv-doon',nguong);veNg()};q('.n-lai').onclick=()=>{lan=0;veNg()};
  veNg();return{an:dung}}}
];

/* ================= đặt công cụ vào một khung ================= */
const SONG={};
let dang=null;
function mo(k,vao){const c=CC.find(x=>x.k===k);if(!c)return null;
  if(dang&&dang!==k&&SONG[dang]){const a=SONG[dang];if(a.api.an)a.api.an();a.d.remove()}
  if(!SONG[k]){const d=document.createElement('div');d.className='n-cc n-c-'+k;vao.append(d);SONG[k]={d,api:c.tao(d)||{}}}
  vao.append(SONG[k].d);dang=k;if(SONG[k].api.hien)SONG[k].api.hien();return c}
const tat=()=>{if(dang&&SONG[dang]&&SONG[dang].api.an)SONG[dang].api.an()};
const luoi=()=>CC.map(c=>'<button type="button" class="n-o" data-k="'+c.k+'">'+IC(c.ic)+'<span><b>'+c.n+'</b><small lang="zh">'+c.z+'</small></span></button>').join('');

/* ================= nút nổi trên mọi trang ================= */
function noi(){const w=document.createElement('div');w.className='gvn';
  w.innerHTML='<button type="button" class="n-nut" aria-expanded="false" aria-label="Công cụ nhanh">'+IC('lap-lanh')+'<span>Công cụ</span></button>'
    +'<div class="n-bang" role="dialog" aria-label="Công cụ nhanh" hidden><div class="n-dau"><button type="button" class="n-ve" aria-label="Về danh sách công cụ">'+IC('tg-trai')+'</button><b></b><button type="button" class="n-rong" aria-pressed="false">Phóng to</button><button type="button" class="n-dong" aria-label="Đóng">'+IC('sai')+'</button></div>'
    +'<div class="n-than"><div class="n-luoi">'+luoi()+'</div><div class="n-vao" hidden></div></div></div>';
  document.body.append(w);
  const q=s=>w.querySelector(s),B=q('.n-bang'),N=q('.n-nut');let cuoi=null;
  function veDs(){tat();q('.n-luoi').hidden=false;q('.n-vao').hidden=true;q('.n-ve').hidden=true;q('.n-dau b').textContent='Công cụ nhanh';cuoi=null}
  function chonCC(k){q('.n-luoi').hidden=true;q('.n-vao').hidden=false;q('.n-ve').hidden=false;const c=mo(k,q('.n-vao'));q('.n-dau b').textContent=c.n+' '+c.z;cuoi=k}
  function bat(){B.hidden=false;N.setAttribute('aria-expanded','true');w.classList.add('mo');if(cuoi)chonCC(cuoi);else veDs()}
  function dong(){tat();B.hidden=true;N.setAttribute('aria-expanded','false');w.classList.remove('mo')}
  N.onclick=()=>B.hidden?bat():dong();q('.n-dong').onclick=()=>{dong();N.focus({preventScroll:true})};q('.n-ve').onclick=veDs;
  q('.n-rong').onclick=e=>{const r=B.classList.toggle('rong');e.target.setAttribute('aria-pressed',r);e.target.textContent=r?'Thu nhỏ':'Phóng to'};
  q('.n-luoi').onclick=e=>{const b=e.target.closest('[data-k]');if(b)chonCC(b.dataset.k)};
  nhanNut=t=>{const s=N.querySelector('span'),m=t||'Công cụ';if(s.textContent!==m)s.textContent=m;N.classList.toggle('gio',!!t);N.classList.toggle('het',t==='Hết giờ')};
  /* phím và bấm trong bảng không chạm tới phím tắt của trang đang chiếu */
  w.addEventListener('keydown',e=>{if(e.key==='Escape'&&!B.hidden){e.preventDefault();dong();N.focus({preventScroll:true})}e.stopPropagation()});
  w.addEventListener('click',e=>e.stopPropagation());
  /* đang toàn màn hình hoặc hộp chiếu to thì nút phải nằm bên trong mới thấy */
  const dat=()=>{const hop=[...document.querySelectorAll('dialog.big[open]')].pop(),noi_=hop||document.fullscreenElement||document.body;if(w.parentNode!==noi_)noi_.append(w)};
  document.addEventListener('fullscreenchange',dat);new MutationObserver(dat).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
}
if(!document.body.dataset.nhanh)noi();
return{CC,mo,tat,luoi,IC}
})();
