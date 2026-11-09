// Cài lyulaoshi.com như ứng dụng trên điện thoại (09/11/2026).
// - Đăng ký service worker /sw.js (không lưu bài, chỉ báo khi mất mạng).
// - Nút nào có data-cai-app sẽ: Android/Chrome máy tính → hiện hộp cài của trình duyệt;
//   iPhone/iPad, Zalo/Facebook, trình duyệt khác → mở hộp hướng dẫn từng bước.
// - Đang mở bằng app rồi thì ẩn nút.
(function(){
  if('serviceWorker' in navigator) addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));
  const ua=navigator.userAgent;
  const daCai=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
  const ios=/iPhone|iPad|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  const android=/Android/i.test(ua);
  // iPhone: Chrome (CriOS), Edge (EdgiOS), Firefox (FxiOS) chỉ thêm vào MH chính được từ iOS 16.4; máy cũ hơn phải dùng Safari
  const iosM=ua.match(/OS (\d+)_(\d+)/), iosV=iosM?+iosM[1]+(+iosM[2])/100:99;   // 16.4 → 16.04
  const iosTD=/CriOS/.test(ua)?'Chrome':/EdgiOS/.test(ua)?'Edge':/FxiOS/.test(ua)?'Firefox':'Safari';
  const ipad=/iPad/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  const safariV=+((ua.match(/Version\/(\d+)/)||[0,0])[1]);   // iOS 26 giữ "iPhone OS 18_6" trong UA nhưng Safari ghi Version/26
  const trongApp=/FBAN|FBAV|FB_IAB|FBIOS|Instagram|Zalo|Line\/|Messenger|musical_ly|TikTok|BytedanceWebview/i.test(ua);
  const tenApp=/Zalo/i.test(ua)?'Zalo':/Instagram/i.test(ua)?'Instagram':/musical_ly|TikTok|Bytedance/i.test(ua)?'TikTok':/Line\//.test(ua)?'Line':'Facebook / Messenger';
  const nut=[...document.querySelectorAll('[data-cai-app]')];
  const hien=b=>nut.forEach(n=>n.hidden=!b);
  if(daCai()){hien(false);return}
  hien(true);
  // nút ở đầu trang gợn sóng gọi chú ý, cho tới khi học viên bấm lần đầu
  let daBam=false;try{daBam=localStorage.getItem('llAppBam')==='1'}catch(_){}
  if(!daBam)document.querySelectorAll('.appbtn[data-cai-app]').forEach(n=>n.classList.add('goi'));
  nut.forEach(n=>n.addEventListener('click',()=>{document.querySelectorAll('.appbtn.goi').forEach(x=>x.classList.remove('goi'));try{localStorage.setItem('llAppBam','1')}catch(_){}}));

  let hoan=null;   // sự kiện "có thể cài" của Chrome/Edge, giữ lại để bấm nút mới hiện
  addEventListener('beforeinstallprompt',e=>{e.preventDefault();hoan=e});
  addEventListener('appinstalled',()=>{hoan=null;hien(false);dong();bao('Cài xong rồi! App 吕老师汉语盒 đã nằm trên màn hình chính.')});

  const I=(n,t)=>'<span class="k"><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=4faa8901#'+n+'"></use></svg>'+(t||'')+'</span>';
  const K=t=>'<span class="k">'+t+'</span>';
  // ---- hình minh hoạ màn hình iPhone cho từng bước (vẽ sơ đồ, không phải ảnh chụp) ----
  const A='/img/apple-touch-icon.png';
  const ic=(n,x,y,z,c)=>'<use href="/chung/ic.svg?v=4faa8901#'+n+'" x="'+x+'" y="'+y+'" width="'+z+'" height="'+z+'" class="hv-ic'+(c?' '+c:'')+'"/>';
  const sang=(cx,cy,r)=>'<circle class="hv-song" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/><circle class="hv-sang" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/>';
  const sangR=(x,y,w,h)=>'<rect class="hv-song" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="9"/><rect class="hv-sang" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="9"/>';
  const T=(x,y,t,c,a)=>'<text x="'+x+'" y="'+y+'" class="hv-chu'+(c?' '+c:'')+'" text-anchor="'+(a||'middle')+'">'+t+'</text>';
  const R=(x,y,w,h,r,c)=>'<rect class="'+(c||'hv-the')+'" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'"/>';
  const khung=t=>'<svg viewBox="0 0 280 150" aria-hidden="true"><rect class="hv-vo" x="1" y="1" width="278" height="148" rx="18"/>'+t+'</svg>';
  const trang=(y)=>R(24,y,150,9,4.5,'hv-mo')+R(24,y+18,210,7,3.5,'hv-mo')+R(24,y+32,180,7,3.5,'hv-mo');
  const H={
    thanh18:khung(trang(20)+R(24,70,232,26,13)+T(140,87,'lyulaoshi.com','nho')
      +'<path class="hv-net" d="M44 118l-7 7 7 7M84 118l7 7-7 7"/>'+sang(140,125,18)+ic('gui',128,113,24,'x')
      +ic('sach',183,115,20)+'<path class="hv-net" d="M233 119h12v12h-12zM237 115h12v12"/>'),
    thanh26:khung(trang(20)+R(18,108,32,32,16)+'<path class="hv-net" d="M37 117l-7 7 7 7"/>'+R(58,108,160,32,16)+T(138,128,'lyulaoshi.com','nho')
      +sang(246,124,18)+ic('ba-cham',234,112,24,'x')),
    menu26:khung(trang(20)+R(90,14,178,92,14,'hv-the hv-bong')+R(102,24,18,18,5,'hv-mo')+R(128,29,96,8,4,'hv-mo')
      +sangR(98,48,162,28)+ic('gui',106,51,22,'x')+T(136,67,'Chia sẻ','dam','start')
      +R(102,82,18,18,5,'hv-mo')+R(128,87,80,8,4,'hv-mo')+R(58,112,160,28,14,'hv-the hv-mo2')+'<circle class="hv-the" cx="246" cy="126" r="15"/>'+ic('ba-cham',236,116,20)),
    ipad:khung('<path class="hv-net" d="M26 22l-6 6 6 6M46 22l6 6-6 6"/>'+R(70,14,130,28,14)+T(135,33,'lyulaoshi.com','nho')
      +sang(226,28,17)+ic('gui',215,17,22,'x')+'<path class="hv-net" d="M252 22h12v12h-12z"/>'+trang(62)),
    chrome:khung(R(14,12,200,32,16)+T(114,33,'lyulaoshi.com','nho')+sang(244,28,18)+ic('gui',232,16,24,'x')+trang(58)
      +'<path class="hv-net hv-mo2" d="M30 128l-6 6 6 6"/>'+ic('ba-cham',236,124,20,'mo')),
    sheet:khung(R(10,10,260,139,16)+'<image href="'+A+'" x="22" y="20" width="24" height="24"/>'+T(54,30,'吕老师汉语盒','dam','start')+T(54,43,'lyulaoshi.com','nho nhat','start')
      +[40,76,112,148,184].map(x=>'<circle class="hv-mo" cx="'+x+'" cy="68" r="13"/>').join('')
      +R(22,90,236,20,6,'hv-mo')+sangR(22,116,236,28)+T(34,135,'Thêm vào MH chính','dam','start')+ic('them-vuong',230,119,22,'x')),
    them:w=>khung(T(24,30,'Hủy','xanh','start')+T(138,30,'Thêm vào MH chính','dam nho')+sangR(212,13,54,26)+T(239,31,'Thêm','xanh dam')
      +'<path class="hv-ke" d="M10 44h260"/><image href="'+A+'" x="24" y="54" width="44" height="44"/>'
      +T(80,70,'吕老师汉语盒','','start')+'<path class="hv-ke" d="M80 78h176"/>'+T(80,93,'lyulaoshi.com','nho nhat','start')
      +(w?T(24,130,'Mở dưới dạng ứng dụng web','nho','start')+'<rect x="222" y="117" width="38" height="20" rx="10" fill="#34C759"/><circle cx="250" cy="127" r="8" fill="#fff"/>':'')),
    home:khung([[0,0],[1,0],[2,0],[3,0],[0,1],[1,1],[3,1]].map(([c,r])=>R(30+c*60,16+r*66,40,40,11,'hv-mo')+R(34+c*60,62+r*66,32,5,2.5,'hv-mo')).join('')
      +'<rect class="hv-song" x="146" y="78" width="48" height="48" rx="14"/><rect class="hv-sang" x="146" y="78" width="48" height="48" rx="14"/>'
      +'<image href="'+A+'" x="150" y="82" width="40" height="40"/>'+T(170,140,'吕老师汉语盒','nho dam'))
  };
  function iphone(){
    const luu='Trên iPhone, app lưu tiến độ học riêng với '+iosTD+'. Nút "Học tiếp" và điểm luyện tập sẽ bắt đầu ghi lại từ khi em dùng app.';
    const moi=iosTD==='Safari'&&safariV>=26;
    const sheet={h:H.sheet,x:'Kéo danh sách lên, tìm và bấm '+I('them-vuong',' Thêm vào MH chính')+'.',p:'Mục này nằm ở phần dưới của danh sách, chưa thấy thì em kéo tiếp.'};
    const them={h:H.them(moi),x:'Bấm '+K('Thêm')+' ở góc trên bên phải.',p:moi?'Nếu có nút gạt "Mở dưới dạng ứng dụng web" thì em để nút đó bật.':''};
    const xong={h:H.home,x:'Xong! Icon '+K('吕老师汉语盒')+' đã nằm trên màn hình chính, thường ở trang cuối cùng. Từ nay em bấm vào icon này để học.'};
    let dau,s;
    if(iosTD==='Chrome'){s='Chrome';dau=[{h:H.chrome,x:'Bấm nút Chia sẻ '+I('gui')+' ở bên phải thanh địa chỉ phía trên.',p:'Không thấy thì bấm '+I('ba-cham')+' ở góc dưới bên phải, chọn '+K('Chia sẻ')+'.'}]}
    else if(ipad){s='Safari';dau=[{h:H.ipad,x:'Bấm nút Chia sẻ '+I('gui')+' ở góc trên bên phải.',p:'Không thấy thì bấm '+I('ba-cham')+' cạnh thanh địa chỉ, rồi chọn '+K('Chia sẻ')+'.'}]}
    else if(moi){s='Safari';dau=[{h:H.thanh26,x:'Bấm nút '+I('ba-cham')+' ở góc dưới bên phải, cạnh thanh địa chỉ.',p:'Nếu thanh dưới có sẵn nút Chia sẻ '+I('gui')+' thì em bấm luôn nút đó, bỏ qua bước 2.'},
                              {h:H.menu26,x:'Bấm '+I('gui',' Chia sẻ')+'.'}]}
    else{s='Safari';dau=[{h:H.thanh18,x:'Bấm nút Chia sẻ '+I('gui')+' ở giữa thanh dưới cùng.',p:'Không thấy thanh này? Em chạm vào đáy màn hình hoặc kéo trang xuống một chút cho thanh hiện ra.'}]}
    return {t:'Thêm vào màn hình chính',s:(ipad?'iPad':'iPhone')+' · '+s,buoc:dau.concat([sheet,them,xong]),note:luu};
  }
  function noiDung(){
    if(trongApp) return {t:'Mở bằng trình duyệt trước nhé',s:'Đang mở trong '+tenApp+', trong này chưa cài được',
      b:['Bấm '+I(ios?'ba-cham':'ba-cham-doc')+' ở góc trên bên phải.',
         'Chọn '+K(ios?'Mở bằng Safari':'Mở bằng trình duyệt')+' (hoặc '+K('Mở trong trình duyệt')+').',
         'Trang mở ra trong '+(ios?'Safari':'Chrome')+', em bấm nút '+K('Cài app')+' một lần nữa.'],
      note:'Không thấy nút đó? Bấm Chép link, rồi dán vào '+(ios?'Safari':'Chrome')+'.',chep:true};
    const luuRieng='Trên iPhone, app lưu tiến độ học riêng với '+iosTD+'. Nút "Học tiếp" và điểm luyện tập sẽ bắt đầu ghi lại từ khi em dùng app.';
    const buoc23=['Kéo xuống, chọn '+I('them-vuong',' Thêm vào MH chính')+'.','Bấm '+K('Thêm')+' ở góc trên bên phải. Xong!'];   // Edge / Firefox trên iPhone (ít gặp, chưa có hình)
    if(ios&&iosTD!=='Safari'&&iosV<16.04) return {t:'Mở bằng Safari nhé',s:'iPhone này chỉ cài được bằng Safari',
      b:['Bấm '+K('Chép link')+' bên dưới.','Mở '+K('Safari')+', dán link vào thanh địa chỉ rồi mở trang.','Bấm nút '+K('Cài app')+' trên trang một lần nữa.'],
      note:'Máy em đang chạy iOS '+iosM[1]+'.'+iosM[2]+'. Từ iOS 16.4 trở lên mới cài được bằng '+iosTD+'.',chep:true};
    if(ios&&iosTD==='Chrome') return iphone();
    if(ios&&iosTD!=='Safari') return {t:'Thêm vào màn hình chính',s:'iPhone / iPad · '+iosTD+' · 3 bước',
      b:['Bấm '+I('ba-cham')+' (nút menu của '+iosTD+'), chọn '+I('gui',' Chia sẻ')+'.'].concat(buoc23),
      note:'Không thấy mục Thêm vào MH chính? Em mở trang bằng Safari rồi làm lại. '+luuRieng};
    if(ios) return iphone();
    if(android) return {t:'Thêm vào màn hình chính',s:'Android · 3 bước',
      b:['Bấm '+I('ba-cham-doc')+' ở góc trên bên phải Chrome.',
         'Chọn '+K('Thêm vào màn hình chính')+' hoặc '+K('Cài đặt ứng dụng')+'.',
         'Bấm '+K('Cài đặt')+' (hoặc '+K('Thêm')+'). App hiện trên màn hình chính.'],
      note:'Dùng trình duyệt Samsung: bấm nút menu ở thanh dưới, chọn Thêm trang vào, rồi chọn Màn hình chờ.'};
    return {t:'Cài app trên máy tính',s:'Chrome · Edge · Safari',
      b:['Chrome / Edge: bấm biểu tượng cài đặt ở cuối thanh địa chỉ, hoặc '+I('ba-cham-doc')+', chọn '+K('Cài đặt trang dưới dạng ứng dụng')+'.',
         'Safari trên Mac: menu '+K('Tệp')+', chọn '+K('Thêm vào Dock')+'.',
         'Muốn học trên điện thoại: mở '+K('lyulaoshi.com')+' trên điện thoại rồi bấm Cài app.'],
      note:'Firefox chưa hỗ trợ cài app, em mở bằng Chrome, Edge hoặc Safari nhé.'};
  }
  let hop=null;
  function dong(){if(hop&&hop.open)hop.close()}
  const dau=(t,s)=>'<div class="hd"><img src="'+A+'" alt=""><h2 id="llappT">'+t+'<small>'+s+'</small></h2></div>';
  function veBuoc(d,i){
    const n=d.buoc.length,b=d.buoc[i];
    hop.innerHTML='<div class="in">'+dau(d.t,d.s+' · Bước '+(i+1)+'/'+n)
      +'<div class="cham" aria-hidden="true">'+d.buoc.map((_,k)=>'<i'+(k===i?' class="on"':k<i?' class="qua"':'')+'></i>').join('')+'</div>'
      +'<figure class="hv">'+b.h+'</figure>'
      +'<p class="bx"><b>'+(i+1)+'</b><span>'+b.x+'</span></p>'
      +(b.p?'<p class="note">'+b.p+'</p>':'')+(i===n-1&&d.note?'<p class="note">'+d.note+'</p>':'')
      +'<div class="act">'+(i?'<button type="button" data-lui>Quay lại</button>':'<button type="button" data-dong>Đóng</button>')
      +(i<n-1?'<button type="button" class="chinh" data-tiep>Tiếp</button>':'<button type="button" class="chinh" data-dong>Em làm xong rồi</button>')+'</div></div>';
    hop.querySelectorAll('[data-dong]').forEach(x=>x.onclick=dong);
    const l=hop.querySelector('[data-lui]'),t=hop.querySelector('[data-tiep]');
    if(l)l.onclick=()=>veBuoc(d,i-1);
    if(t){t.onclick=()=>veBuoc(d,i+1);t.focus()}
  }
  function moHuongDan(){
    const d=noiDung();
    if(!hop){hop=document.createElement('dialog');hop.className='llapp';hop.setAttribute('aria-labelledby','llappT');document.body.appendChild(hop);
      hop.addEventListener('click',e=>{if(e.target===hop)dong()})}
    if(d.buoc){veBuoc(d,0);if(hop.showModal)hop.showModal();else hop.setAttribute('open','');return}
    hop.innerHTML='<div class="in">'+dau(d.t,d.s)
      +'<ol>'+d.b.map(x=>'<li><span>'+x+'</span></li>').join('')+'</ol>'
      +(d.note?'<p class="note">'+d.note+'</p>':'')
      +'<div class="act">'+(d.chep?'<button type="button" data-chep>Chép link</button>':'')+'<button type="button" class="chinh" data-dong>Em biết rồi</button></div></div>';
    hop.querySelector('[data-dong]').onclick=dong;
    const c=hop.querySelector('[data-chep]');
    if(c)c.onclick=async()=>{try{await navigator.clipboard.writeText('https://lyulaoshi.com/');c.textContent='Đã chép!'}catch(_){c.textContent='lyulaoshi.com'}};
    if(hop.showModal)hop.showModal();else hop.setAttribute('open','');
  }
  function bao(t){const b=document.createElement('div');b.className='llapp-toast';b.setAttribute('role','status');b.textContent=t;document.body.appendChild(b);setTimeout(()=>b.remove(),4200)}

  nut.forEach(n=>n.addEventListener('click',async e=>{
    e.preventDefault();
    if(hoan&&!trongApp){const ev=hoan;hoan=null;ev.prompt();try{const r=await ev.userChoice;if(r.outcome==='accepted')hien(false)}catch(_){}return}
    moHuongDan();
  }));
})();
