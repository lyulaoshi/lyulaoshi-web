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
  const trongApp=/FBAN|FBAV|FB_IAB|FBIOS|Instagram|Zalo|Line\/|Messenger|musical_ly|TikTok|BytedanceWebview/i.test(ua);
  const tenApp=/Zalo/i.test(ua)?'Zalo':/Instagram/i.test(ua)?'Instagram':/musical_ly|TikTok|Bytedance/i.test(ua)?'TikTok':/Line\//.test(ua)?'Line':'Facebook / Messenger';
  const nut=[...document.querySelectorAll('[data-cai-app]')];
  const hien=b=>nut.forEach(n=>n.hidden=!b);
  if(daCai()){hien(false);return}
  hien(true);

  let hoan=null;   // sự kiện "có thể cài" của Chrome/Edge, giữ lại để bấm nút mới hiện
  addEventListener('beforeinstallprompt',e=>{e.preventDefault();hoan=e});
  addEventListener('appinstalled',()=>{hoan=null;hien(false);dong();bao('Cài xong rồi! App 吕老师汉语盒 đã nằm trên màn hình chính.')});

  const I=(n,t)=>'<span class="k"><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=4faa8901#'+n+'"></use></svg>'+(t||'')+'</span>';
  const K=t=>'<span class="k">'+t+'</span>';
  function noiDung(){
    if(trongApp) return {t:'Mở bằng trình duyệt trước nhé',s:'Đang mở trong '+tenApp+', trong này chưa cài được',
      b:['Bấm '+I(ios?'ba-cham':'ba-cham-doc')+' ở góc trên bên phải.',
         'Chọn '+K(ios?'Mở bằng Safari':'Mở bằng trình duyệt')+' (hoặc '+K('Mở trong trình duyệt')+').',
         'Trang mở ra trong '+(ios?'Safari':'Chrome')+', em bấm nút '+K('Cài app')+' một lần nữa.'],
      note:'Không thấy nút đó? Bấm Chép link, rồi dán vào '+(ios?'Safari':'Chrome')+'.',chep:true};
    const luuRieng='Trên iPhone, app lưu tiến độ học riêng với '+iosTD+'. Nút "Học tiếp" và điểm luyện tập sẽ bắt đầu ghi lại từ khi em dùng app.';
    const buoc23=['Kéo xuống, chọn '+I('them-vuong',' Thêm vào MH chính')+'.','Bấm '+K('Thêm')+' ở góc trên bên phải. Xong!'];
    if(ios&&iosTD!=='Safari'&&iosV<16.04) return {t:'Mở bằng Safari nhé',s:'iPhone này chỉ cài được bằng Safari',
      b:['Bấm '+K('Chép link')+' bên dưới.','Mở '+K('Safari')+', dán link vào thanh địa chỉ rồi mở trang.','Bấm nút '+K('Cài app')+' trên trang một lần nữa.'],
      note:'Máy em đang chạy iOS '+iosM[1]+'.'+iosM[2]+'. Từ iOS 16.4 trở lên mới cài được bằng '+iosTD+'.',chep:true};
    if(ios&&iosTD==='Chrome') return {t:'Thêm vào màn hình chính',s:'iPhone / iPad · Chrome · 3 bước',
      b:['Bấm nút Chia sẻ '+I('gui')+' ở cuối thanh địa chỉ phía trên. Không thấy thì bấm '+I('ba-cham')+' ở góc dưới bên phải, chọn '+K('Chia sẻ')+'.'].concat(buoc23),
      note:luuRieng};
    if(ios&&iosTD!=='Safari') return {t:'Thêm vào màn hình chính',s:'iPhone / iPad · '+iosTD+' · 3 bước',
      b:['Bấm '+I('ba-cham')+' (nút menu của '+iosTD+'), chọn '+I('gui',' Chia sẻ')+'.'].concat(buoc23),
      note:'Không thấy mục Thêm vào MH chính? Em mở trang bằng Safari rồi làm lại. '+luuRieng};
    if(ios) return {t:'Thêm vào màn hình chính',s:'iPhone / iPad · Safari · 3 bước',
      b:['Bấm nút Chia sẻ '+I('gui')+' ở thanh dưới cùng. Không thấy thì bấm '+I('ba-cham')+' trước rồi chọn '+K('Chia sẻ')+'.'].concat(buoc23),
      note:luuRieng};
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
  function moHuongDan(){
    const d=noiDung();
    if(!hop){hop=document.createElement('dialog');hop.className='llapp';hop.setAttribute('aria-labelledby','llappT');document.body.appendChild(hop);
      hop.addEventListener('click',e=>{if(e.target===hop)dong()})}
    hop.innerHTML='<div class="in"><div class="hd"><img src="/img/apple-touch-icon.png" alt=""><h2 id="llappT">'+d.t+'<small>'+d.s+'</small></h2></div>'
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
