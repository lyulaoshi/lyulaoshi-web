// Lịch hôm nay kiểu cuống vé (trang chủ, mục #hom-nay) — trang lịch vạn niên nhỏ: cuống đỏ (lời chào, ngày, nút xé) + thân vé
// (ngày tháng đọc bằng tiếng Trung, lịch âm + can chi, ngày lễ, 宜/忌, thông điệp hôm nay). Xé tờ thì hiện trang ngày mai.
// Cần: /chung/lich-du-lieu.js?v=fa326843 (LICH_YJ, LICH_CHU), /chung/thong-diep.js?v=5452996a (TD_CHON, TD_CUNG), /tro-choi/tts.js (loa).
(function(){
const ve=document.querySelector('.lichve');if(!ve)return;
const YJ=window.LICH_YJ||[['学汉字','học chữ Hán','偷懒','lười biếng']];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const loa=(w,nhan)=>'<button type="button" class="spk" data-say="'+esc(w)+'" aria-label="'+esc(nhan||('Nghe đọc '+w))+'" hidden><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=4faa8901#loa"/></svg></button>';
const mod=(a,n)=>((a%n)+n)%n,dayNo=d=>Math.round((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(2026,0,1))/864e5);
const SO='〇一二三四五六七八九十',PY=['líng','yī','èr','sān','sì','wǔ','liù','qī','bā','jiǔ','shí'];
const WK='日一二三四五六',WKPY=['rì','yī','èr','sān','sì','wǔ','liù'],VI=['Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy'];
// số 1–31 → chữ Hán và pinyin (十一 shíyī, 二十 èrshí…)
const so=n=>n<=10?SO[n]:n<20?'十'+SO[n-10]:SO[Math.floor(n/10)]+'十'+(n%10?SO[n%10]:'');
const sopy=n=>n<=10?PY[n]:n<20?'shí'+PY[n-10]:PY[Math.floor(n/10)]+'shí'+(n%10?PY[n%10]:'');
// can chi tiếng Việt + con giáp
const CAN={'甲':'Giáp','乙':'Ất','丙':'Bính','丁':'Đinh','戊':'Mậu','己':'Kỷ','庚':'Canh','辛':'Tân','壬':'Nhâm','癸':'Quý'};
const CHI={'子':['Tý','鼠','chuột'],'丑':['Sửu','牛','trâu'],'寅':['Dần','虎','hổ'],'卯':['Mão','兔','mèo'],'辰':['Thìn','龙','rồng'],'巳':['Tỵ','蛇','rắn'],
  '午':['Ngọ','马','ngựa'],'未':['Mùi','羊','dê'],'申':['Thân','猴','khỉ'],'酉':['Dậu','鸡','gà'],'戌':['Tuất','狗','chó'],'亥':['Hợi','猪','lợn']};
// âm lịch bằng Intl (lịch Trung Quốc có sẵn trong trình duyệt): {m, d, nhuan, canchi}. Dùng "en" để có tháng dạng số;
// can chi tính từ năm âm (relatedYear) vì Chrome không trả tên năm.
const GAN='甲乙丙丁戊己庚辛壬癸',ZHI='子丑寅卯辰巳午未申酉戌亥';
function am(d){
  try{
    const p=new Intl.DateTimeFormat('en-u-ca-chinese',{year:'numeric',month:'numeric',day:'numeric'}).formatToParts(d);
    const g=t=>(p.find(x=>x.type===t)||{}).value||'';
    const mm=g('month'),y=+g('relatedYear')||+g('year');
    if(!+mm.replace(/\D/g,''))return null;
    return{m:+mm.replace(/\D/g,''),d:+g('day'),nhuan:/bis|leap|闰/i.test(mm),canchi:y?GAN[mod(y-4,10)]+ZHI[mod(y-4,12)]:''};
  }catch(e){return null}
}
const amChu=a=>(a.nhuan?'闰':'')+(a.m===1?'正':a.m===11?'冬':a.m===12?'腊':so(a.m))+'月'+(a.d<=10?'初'+SO[a.d]:a.d<20?'十'+SO[a.d-10]:a.d===20?'二十':a.d<30?'廿'+SO[a.d-20]:'三十');
// ngày lễ: dương lịch "tháng-ngày", âm lịch "a tháng-ngày" — [tên Trung, tên Việt]
const LE={'1-1':['元旦','Tết Dương lịch'],'2-14':['情人节','Lễ Tình nhân'],'3-8':['妇女节','Quốc tế Phụ nữ'],'4-5':['清明节','Tiết Thanh minh'],
  '5-1':['劳动节','Quốc tế Lao động'],'6-1':['儿童节','Quốc tế Thiếu nhi'],'9-2':['越南国庆节','Quốc khánh Việt Nam'],'9-10':['中国教师节','Ngày Nhà giáo Trung Quốc'],
  '10-1':['中国国庆节','Quốc khánh Trung Quốc'],'10-20':['越南妇女节','Ngày Phụ nữ Việt Nam'],'11-20':['越南教师节','Ngày Nhà giáo Việt Nam'],
  '12-22':['冬至','Tiết Đông chí'],'12-24':['平安夜','Đêm Giáng sinh'],'12-25':['圣诞节','Lễ Giáng sinh'],
  'a1-1':['春节','Tết Nguyên đán'],'a1-15':['元宵节','Rằm tháng Giêng'],'a3-10':['雄王忌日','Giỗ Tổ Hùng Vương'],'a5-5':['端午节','Tết Đoan ngọ'],
  'a7-7':['七夕节','Lễ Thất tịch'],'a7-15':['中元节','Rằm tháng Bảy'],'a8-15':['中秋节','Tết Trung thu'],'a9-9':['重阳节','Tết Trùng cửu'],
  'a12-8':['腊八节','Lễ Lạp Bát'],'a12-23':['小年','Ông Công Ông Táo']};
function leNgay(d){
  const ra=[],a=am(d);let k=(d.getMonth()+1)+'-'+d.getDate();if(LE[k])ra.push(LE[k]);
  if(a&&!a.nhuan){k='a'+a.m+'-'+a.d;if(LE[k])ra.push(LE[k])}
  return ra;
}
// lễ hôm nay + 2 lễ sắp tới (dò tối đa 1 năm)
function le(d){
  const hom=leNgay(d),toi=[];
  for(let i=1;i<=370&&toi.length<2;i++){const x=new Date(d.getFullYear(),d.getMonth(),d.getDate()+i);leNgay(x).forEach(l=>{if(toi.length<2)toi.push([l,x,i])})}
  return{hom,toi};
}
// lời chào theo buổi (giờ máy học viên)
// lời chào theo buổi (giờ máy học viên) + câu vui, đổi mỗi lần vào trang (localStorage.llChao)
const CHAO=[[0,'夜深了！','Khuya rồi đó!',['Cú đêm ơi, xem lịch xong là đi ngủ liền nha!','Khuya lắm rồi, mai dậy sớm xé lịch tiếp nè!','Thức khuya hại sức lắm đó nha!']],
  [5,'早上好！','Chào buổi sáng!',['Dậy chưa đó? Chúc một ngày thật vui nha!','Ăn sáng chưa? Nạp năng lượng nè!','Sáng nay cười một cái cho tươi nha!']],
  [11,'中午好！','Chào buổi trưa!',['Trưa rồi, ăn cơm chưa đó?','Ăn no rồi nghỉ ngơi xíu nha!','Trưa nắng nè, nhớ uống nước nha!']],
  [13,'下午好！','Chào buổi chiều!',['Buồn ngủ hả? Uống miếng trà cho tỉnh nè!','Chiều nay cố thêm chút nữa nha!','Pha ly trà chiều thư giãn đi nè!']],
  [18,'晚上好！','Chào buổi tối!',['Học xong thưởng mình ly trà sữa nha!','Tối nay thư giãn chút nha!','Ăn tối ngon miệng nha!']],
  [22,'夜深了！','Khuya rồi đó!',['Cú đêm ơi, xem lịch xong là đi ngủ liền nha!','Khuya lắm rồi, mai dậy sớm xé lịch tiếp nè!','Thức khuya hại sức lắm đó nha!']]];
let lanChao=0;try{lanChao=(+localStorage.getItem('llChao')||0)+1;localStorage.setItem('llChao',lanChao)}catch(e){}

// Bài hát hôm nay (bai-hat.js): nhãn trong hàng nhãn, bấm mở YouTube tìm bài; tờ ngày mai thì giấu.
function baiHtml(d,lech){
  const B=window.TD_BAI;if(lech||!B||!B.length)return '';
  const s=B[mod(dayNo(d),B.length)],q=s[0]+' '+s[3].replace(' 作词','');
  return '<a class="nhan bai" href="https://www.youtube.com/results?search_query='+encodeURIComponent(q)+'" target="_blank" rel="noopener" title="Nghe trên YouTube: '+esc(s[0]+' ('+s[2]+') – '+s[3])+'">'+
    '<span class="ve"><i><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=4faa8901#nhac"/></svg></i><span class="tl" lang="zh">今日一曲</span></span>'+
    '<span class="ve"><b lang="zh">'+s[0]+'</b><span class="ca" lang="zh">'+esc(s[3])+'</span></span></a>';
}
function veTo(d,lech){
  const a=am(d),l=le(d),y=YJ[mod(dayNo(d),YJ.length)],wk=d.getDay();
  const soNgay=Math.round((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(d.getFullYear(),0,0))/864e5),
    soNam=y=>(y%4===0&&y%100!==0)||y%400===0?366:365;   // số vé: ngày thứ mấy trong năm
  ve.dataset.thu=wk;   // màu tờ lịch theo thứ (CSS .lichve[data-thu])
  const gc=CHAO.filter(x=>x[0]<=new Date().getHours()).pop();
  const g=lech?['明天见！','Xem trước ngày mai','Mai ghé lại xé lịch tiếp nha!']:[gc[1],gc[2],gc[3][lanChao%gc[3].length]];
  const ngayZh=d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日';
  let amHtml='';
  if(a){const ch=a.canchi?(CHI[a.canchi[1]]||['','',''])[1]:'';amHtml='<p class="am" lang="zh">农历'+amChu(a)+(a.canchi?' · '+a.canchi+'年'+ch:'')+'<span lang="vi"> · '+VI[wk]+', '+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+'</span></p>';}
  // hàng nhãn nhỏ: ngày lễ (hôm nay hoặc gần nhất) + 宜 + 忌
  const lh=l.hom[0],lt=l.toi[0];
  const leHtml=lh?'<span class="nhan le nay"><b lang="zh">'+lh[0]+'</b>'+lh[1]+' · hôm nay</span>'
    :lt?'<span class="nhan le" title="'+lt[1].getDate()+'/'+(lt[1].getMonth()+1)+'"><b lang="zh">'+lt[0][0]+'</b>'+lt[0][1]+' · còn '+lt[2]+' ngày</span>':'';
  // thông điệp
  const t=window.TD_CHON?window.TD_CHON(d):null,G=window.TD_CUNG||[];
  let tdHtml='';
  if(t){
    const may=t.cung>=0?'<span class="may"><b lang="zh">'+G[t.cung][0]+'</b> · 幸运色 <i style="--m:'+t.mau[3]+'"></i><b lang="zh">'+t.mau[0]+'</b> · 幸运字 <b lang="zh">'+t.chu[0]+'</b></span>':'';
    tdHtml='<div class="tdg'+(lech?' an':'')+'"><p><span class="tz" lang="zh">「'+t.cau[0]+'」</span><span class="tv">'+esc(t.cau[2])+'</span></p>'+
      '<div class="tdd">'+may+'<button type="button" class="cung" aria-haspopup="true" aria-expanded="false"><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=4faa8901#sao"/></svg>'+
      (t.cung>=0?'<b lang="zh">'+G[t.cung][0]+'</b>'+G[t.cung][2]:'Chọn cung của bạn')+'<svg class="lli mui" aria-hidden="true"><use href="/chung/ic.svg?v=4faa8901#xuong"/></svg></button></div>'+
      (lech?'<span class="khoa" lang="zh">明天揭晓<small>Mai mới mở</small></span>':'')+'</div>';
  }
  ve.innerHTML=
    '<div class="cuong"><span class="cz" lang="zh">'+g[0]+'</span><span class="cv">'+g[1]+'</span><span class="cvui">'+g[2]+'</span>'+
      '<b class="so">'+d.getDate()+'</b><span class="thu" lang="zh">星期'+WK[wk]+'</span>'+
      '<span class="seri">No.'+String(soNgay).padStart(3,'0')+' / '+(soNam(d.getFullYear()))+'</span><i class="nen" lang="zh" aria-hidden="true">'+WK[wk]+'</i>'+
      (lech?'<button type="button" class="ve-lai"><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=4faa8901#lai"/></svg>Về hôm nay</button>':'')+
    '</div>'+
    '<div class="than"><span class="tem" lang="zh">'+(lech?'明日':'今日')+'</span>'+
      '<p class="nz" lang="zh">'+ngayZh+' <span>星期'+WK[wk]+'</span>'+loa(ngayZh+'星期'+WK[wk],'Nghe đọc ngày tháng')+'</p>'+
      amHtml+
      '<div class="hang">'+leHtml+'<span class="nhan yj"><span class="ve"><i lang="zh">宜</i><b lang="zh">'+y[0]+'</b>'+y[1]+'</span><span class="vach" aria-hidden="true"></span><span class="ve"><i class="ji" lang="zh">忌</i><b lang="zh">'+y[2]+'</b>'+y[3]+'</span></span>'+baiHtml(d,lech)+'</div>'+
      tdHtml+
      (lech?'':'<button type="button" class="goc" aria-label="Xé tờ này, xem ngày mai" title="Xé tờ này"></button>')+
    '</div>';
  hienLoa();
  // bảng chọn cung: 12 ô + "Theo ngày", mở ngay dưới tờ lịch
  const nutCung=ve.querySelector('.cung');
  if(nutCung&&t){
    const bang=document.createElement('div');bang.className='bang-cung';bang.hidden=true;bang.setAttribute('role','dialog');bang.setAttribute('aria-label','Chọn cung hoàng đạo');
    bang.innerHTML='<div class="bc-dau"><b>Cung hoàng đạo của bạn</b><span lang="zh">星座</span><button type="button" class="bc-ngay'+(t.cung<0?' chon':'')+'" data-c="">Theo ngày</button></div>'+
      '<div class="bc-luoi">'+G.map((x,i)=>'<button type="button" data-c="'+i+'" class="'+(i===t.cung?'chon':'')+'" aria-pressed="'+(i===t.cung)+'"><b lang="zh">'+x[0]+'</b><span>'+x[2]+'</span><small>'+x[4]+'</small></button>').join('')+'</div>';
    ve.appendChild(bang);
    const dong=()=>{bang.hidden=true;nutCung.setAttribute('aria-expanded','false');document.removeEventListener('click',ngoai,true);document.removeEventListener('keydown',esc_)};
    const ngoai=e=>{if(!bang.contains(e.target)&&!nutCung.contains(e.target))dong()};
    const esc_=e=>{if(e.key==='Escape'){dong();nutCung.focus()}};
    nutCung.addEventListener('click',()=>{
      if(!bang.hidden)return dong();
      bang.hidden=false;nutCung.setAttribute('aria-expanded','true');
      document.addEventListener('click',ngoai,true);document.addEventListener('keydown',esc_);
      (bang.querySelector('.chon')||bang.querySelector('button')).focus({preventScroll:true});
    });
    bang.addEventListener('click',e=>{const b=e.target.closest('button[data-c]');if(!b)return;
      try{localStorage.setItem('llCung',b.dataset.c)}catch(x){}dong();veTo(d,lech);const n=ve.querySelector('.cung');if(n)n.focus({preventScroll:true})});
  }
  const nut=ve.querySelector(lech?'.ve-lai':'.goc');
  nut.addEventListener('click',()=>{
    if(window.speechSynthesis)speechSynthesis.cancel();
    const sau=lech?0:1,bot=matchMedia('(prefers-reduced-motion:reduce)').matches;
    if(sau&&!bot){xeDuongCham();return}
    ve.classList.add(sau?'roi':'mo');
    setTimeout(()=>{veTo(new Date(nay.getFullYear(),nay.getMonth(),nay.getDate()+sau),sau);ve.classList.remove('roi','mo');ve.classList.add('hien');
      setTimeout(()=>ve.classList.remove('hien'),400);(ve.querySelector('.ve-lai')||ve.querySelector('.goc')).focus({preventScroll:true})},bot?0:650);
  });
}
// Xé theo đường chấm: vẽ sẵn tờ ngày mai bên dưới, phủ bản sao tờ hôm nay lên trên; thân vé bản sao có mép xé lởm chởm,
// giật 2 cái rồi nghiêng rơi xuống; cuống cũ mờ đi sau cùng. (Giảm chuyển động: đổi tờ ngay, không hiệu ứng.)
function rangCua(tren){   // mép xé: tren = cạnh trên (điện thoại, cuống nằm trên), không thì cạnh trái
  const n=26,p=[];
  for(let i=0;i<=n;i++){const t=(i/n*100).toFixed(2)+'%',k=((i%2?1.5:6)+Math.random()*3).toFixed(1)+'px';p.push(tren?t+' '+k:k+' '+t)}
  return 'polygon('+p.join(',')+(tren?',100% 100%,0 100%)':',100% 100%,100% 0)');
}
function xeDuongCham(){
  const cs=getComputedStyle(ve),lop=document.createElement('div'),manh=document.createElement('div');
  lop.className='xe-lop';lop.setAttribute('aria-hidden','true');lop.inert=true;
  ['--lv','--lv-s','--lv-d'].forEach(k=>lop.style.setProperty(k,cs.getPropertyValue(k)));   // giữ màu của hôm nay
  const than=ve.querySelector('.than').cloneNode(true);
  than.style.clipPath=rangCua(matchMedia('(max-width:600px)').matches);
  manh.className='manh';manh.appendChild(than);
  lop.append(ve.querySelector('.cuong').cloneNode(true),manh);
  veTo(new Date(nay.getFullYear(),nay.getMonth(),nay.getDate()+1),1);
  ve.appendChild(lop);
  const cha=ve.parentElement;cha.style.overflowX='clip';   // mảnh vé rơi chệch ra ngoài không làm trang cuộn ngang
  const xong=()=>{lop.remove();cha.style.overflowX=''};
  lop.addEventListener('animationend',e=>{if(e.target===lop)xong()});
  setTimeout(xong,1600);
  const n=ve.querySelector('.ve-lai');if(n)n.focus({preventScroll:true});
}
// nút loa chỉ hiện khi máy có giọng tiếng Trung
function hienLoa(){if(!window.TTS)return;ve.querySelectorAll('.spk').forEach(b=>b.hidden=!TTS.can(b.dataset.say))}
if('speechSynthesis' in window)speechSynthesis.addEventListener('voiceschanged',hienLoa);setTimeout(hienLoa,800);
const nay=new Date();veTo(nay,0);
// quay lại tab: chỉ vẽ lại khi đã sang ngày khác hoặc sang buổi khác (không làm đóng bảng chọn cung)
const moc=()=>{const x=new Date();return dayNo(x)+'-'+CHAO.filter(c=>c[0]<=x.getHours()).pop()[1]};let mocCu=moc();
document.addEventListener('visibilitychange',()=>{if(document.hidden||ve.querySelector('.ve-lai'))return;const m=moc();if(m!==mocCu){mocCu=m;veTo(new Date(),0)}});
})();
