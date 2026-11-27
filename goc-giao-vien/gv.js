// Góc giáo viên 教师角 — phần dùng chung: tiện ích, nút sáng/tối, danh sách trò chơi, "bộ từ đang dùng".
// Nạp ở cuối <body> của trang chính và các trang con.
window.GV=(function(){
const $=id=>document.getElementById(id);
const IC=n=>'<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=70219054#'+n+'"></use></svg>';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
let tT=0;
function toast(t){let e=$('toast');if(!e){e=document.createElement('div');e.id='toast';e.className='toast';e.setAttribute('role','status');document.body.append(e)}
  e.textContent=t;e.hidden=false;clearTimeout(tT);tT=setTimeout(()=>e.hidden=true,2200)}

// nút sáng / tối (khoá cb-theme dùng chung cả web)
(function(){const r=document.documentElement,b=$('themeBtn');if(!b)return;
 const cur=()=>r.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 const paint=()=>{b.innerHTML=IC(cur()==='dark'?'mattroi':'trang')};paint();
 b.addEventListener('click',()=>{r.dataset.theme=cur()==='dark'?'light':'dark';try{localStorage.setItem('cb-theme',r.dataset.theme)}catch(e){};paint()});})();

/* Trò chơi cả lớp (Ngăn 6 của 游戏盒). bo: 'tu' nhận bộ từ (theo bài hoặc bộ từ riêng, cần ít nhất `min` từ),
   'cau' nhận câu theo bài (chỉ bài có trong VA_CO). Thêm trò cả lớp mới ở 游戏盒 thì thêm 1 dòng ở đây. */
const G=[
 {id:'keo-co',z:'拔河',n:'Kéo co Đỏ – Xanh',c:'#C2410C',p:'Hai đội thi trả lời từ vựng, đúng thì kéo dây về phía mình.',ph:'5–10 phút',ss:'Cả lớp, 2 đội',tb:'chieu',f:['nhanh','dong','chieu'],bo:'tu',min:8,ctrl:'Thầy cô bấm <b>A</b> / <b>L</b> cho đội đúng, hoặc 2 em thi trên bàn phím.'},
 {id:'dap-ruoi',z:'拍苍蝇',n:'Đập ruồi',c:'#4D7C0F',p:'Máy đọc một từ, đại diện các đội chạy lên đập đúng con ruồi mang từ đó.',ph:'5–10 phút',ss:'Cả lớp, 2–4 đội',tb:'chieu',f:['nhanh','dong','chieu'],bo:'tu',min:13,ctrl:'Bấm <b>1</b>–<b>4</b> cho đội đập trúng trước.'},
  {id:'vo-dai',z:'擂台赛',n:'Võ đài',c:'#9F1239',p:'Một em giữ đài, lần lượt các bạn lên thách đấu 1-1. Ai giữ đài lâu nhất?',ph:'10–15 phút',ss:'Cả lớp',tb:'chieu',f:['dong','chieu','cau'],bo:'cau',ctrl:'Hai em hô đáp án, thầy cô bấm <b>←</b> / <b>→</b> cho em đúng trước.'},
 {id:'chiem-dat',z:'占领地图',n:'Chiếm lãnh thổ',c:'#1D4ED8',p:'Trả lời đúng thì chiếm một ô trên bản đồ, được cướp đất của đội bạn.',ph:'15 phút',ss:'Cả lớp, 2–4 đội',tb:'chieu',f:['dong','chieu','cau'],bo:'cau',ctrl:'Bấm <b>1</b>–<b>4</b> cho đội đúng, <b>N</b> khi không đội nào đúng.'},
 {id:'non-ky-dieu',z:'幸运转盘',n:'Chiếc nón kỳ diệu',c:'#7E22CE',p:'Các đội quay nón lấy điểm, đoán từng chữ của câu đang bị che trong bài.',ph:'15 phút',ss:'Cả lớp, 2–4 đội',tb:'chieu',f:['dong','chieu','cau'],bo:'cau',khong:['ledu'],ctrl:'Thầy cô quay nón và mở chữ theo lời đội đoán.'},
 {id:'dua-cung-de',z:'同题赛',n:'Đua cùng đề',c:'#0E7490',p:'Cả lớp quét mã, nhập tên rồi cùng làm một đề theo bài. Đúng nhiều, nhanh thì đứng đầu.',ph:'10 phút',ss:'Cả lớp',tb:'dt',f:['nhanh','dong','dt','cau'],bo:'cau',ctrl:'Màn chiếu hiện bảng xếp hạng. Dán danh sách lớp để tự khớp tên.'},
 {id:'trieu-phu',z:'百万富翁',n:'Ai là triệu phú',c:'#A16207',p:'Từng em lên ghế nóng trả lời chuỗi câu khó dần, có 3 quyền trợ giúp.',ph:'15 phút',ss:'Lớp nhỏ',tb:'chieu',f:['nho','chieu','cau'],bo:'cau',ctrl:'Bấm <b>A</b>–<b>D</b> theo lời em chọn, <b>Enter</b> để chốt.'},
 {id:'bom-hen-gio',z:'定时炸弹',n:'Bom hẹn giờ',c:'#BE123C',p:'Bom chuyền theo vòng, nói được tiếng Trung mới chuyền đi. Bom nổ ở tay ai, người đó mất một mạng.',ph:'10 phút',ss:'Lớp nhỏ',tb:'chieu',f:['nhanh','nho','chieu','noi'],bo:'tu',min:4,ctrl:'Bấm <b>Space</b> khi em nói được, <b>N</b> để đổi đề.'},
 {id:'gian-diep',z:'谁是卧底',n:'Ai là gián điệp',c:'#334155',p:'Mỗi em nhận một từ bí mật, gián điệp cầm từ gần giống. Mô tả bằng tiếng Trung rồi bỏ phiếu.',ph:'15–20 phút',ss:'Nhóm 4–8 em',tb:'dt',f:['dong','dt','noi'],bo:'',ctrl:'Mỗi em xem từ trên điện thoại riêng, cả nhóm cùng chọn một mã nhóm.'}
];
/* Chặng ôn mẫu câu của Vượt ải, chiếu lên cho cả lớp cùng làm. 乐读 chỉ có Trả lời + Điền (+ Tìm lỗi sinh từ Điền). */
const PHU=[
 {id:'xep-cau',z:'连词成句',n:'Xếp câu',ic:'manh-ghep',p:'Xếp mảnh câu đúng trật tự',bo:'cau',ledu:0},
 {id:'tra-loi',z:'回答问题',n:'Trả lời câu hỏi',ic:'tin-nhan',p:'Chọn câu đáp lại đúng',bo:'cau',ledu:1},
 {id:'dien-cho',z:'选词填空',n:'Điền chỗ trống',ic:'sotay',p:'Chọn từ điền vào câu',bo:'cau',ledu:1},
 {id:'tim-loi',z:'改错',n:'Tìm lỗi sai',ic:'kinh-lup',p:'Tìm và sửa từ dùng sai',bo:'cau',ledu:1},
 {id:'dich-cau',z:'翻译',n:'Dịch câu',ic:'cuon-giay',p:'Dựng câu tiếng Trung từ câu Việt',bo:'cau',ledu:0}
];

/* "Bộ từ đang dùng" lưu ở khoá gv-dung: {k:'bai'|'cot', ten, bo, nw, cau, sach} — mọi trang con đọc chung */
const enc=o=>btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
function dung(){const v=store.get('gv-dung');return v&&v.bo?v:null}
function nhan(g,d){if(!d||!g.bo)return false;
  if(g.bo==='tu')return d.nw>=(g.min||4);
  return !!d.cau&&!(g.khong||[]).includes(d.sach)&&!('ledu' in g&&d.sach==='ledu'&&!g.ledu)}
const href=(g,d)=>'/tro-choi/'+g.id+'/'+(nhan(g,d)?'?bo='+encodeURIComponent(d.bo):'');
// thanh "Đang dùng" (trang con chỉ hiện, đổi ở trang chính)
function paintDung(el,doiHref){const d=dung();if(!el)return;
  el.innerHTML=IC('sach')+'<span class="lb">Đang dùng:</span>'+(d?'<b>'+esc(d.ten)+'</b>':'<b class="chua">Chưa chọn bài · trò chơi dùng từ theo cấp HSK</b>')
   +'<span class="r">'+(doiHref?'<a href="'+doiHref+'">Đổi bài / bộ từ</a>':'<button class="btn tl" type="button" id="dungDoi">'+IC('sach')+'Đổi bài / bộ từ</button>')+'</span>'}

/* Ô thả xuống theo giao diện web: giữ <select> (ẩn) làm nơi chứa giá trị, vẽ nút + danh sách riêng.
   Chọn mục thì phát sự kiện change như thường. Gán .value bằng code xong thì gọi sel._hop() để vẽ lại nhãn. */
function hop(sel){if(sel._hop){sel._hop();return}
  const w=document.createElement('div'),nut=document.createElement('button'),ds=document.createElement('div');
  w.className='hop';nut.type='button';nut.className='hop-nut';nut.setAttribute('aria-haspopup','listbox');nut.setAttribute('aria-expanded','false');
  ds.className='hop-ds';ds.setAttribute('role','listbox');ds.hidden=true;
  const nhan=((sel.closest('label')||{}).firstChild||{}).textContent||sel.getAttribute('aria-label')||'';
  sel.hidden=true;sel.after(w);w.append(nut,ds);ds.setAttribute('aria-label',nhan.trim());
  const ve=()=>{const o=sel.options[sel.selectedIndex],t=o?o.text:'';nut.innerHTML='<span></span>'+IC('xuong');nut.firstChild.textContent=t;nut.setAttribute('aria-label',nhan.trim()+': '+t)};
  const dong=()=>{ds.hidden=true;w.classList.remove('mo');nut.setAttribute('aria-expanded','false')};
  function mo(){document.querySelectorAll('.hop.mo').forEach(x=>x._dong());ds.innerHTML='';
    [...sel.options].forEach((o,i)=>{const b=document.createElement('button'),on=i===sel.selectedIndex;b.type='button';b.setAttribute('role','option');b.setAttribute('aria-selected',on);
      b.innerHTML='<span></span>'+(on?IC('tick'):'');b.firstChild.textContent=o.text;
      b.onclick=e=>{e.preventDefault();dong();nut.focus();if(i!==sel.selectedIndex){sel.selectedIndex=i;sel.dispatchEvent(new Event('change',{bubbles:true}))}ve()};ds.append(b)});
    ds.hidden=false;ds.style.left='0px';w.classList.add('mo');nut.setAttribute('aria-expanded','true');
    /* lệch ra mép phải thì kéo sang trái, nhưng không vượt mép trái */
    const r=ds.getBoundingClientRect(),du=r.right-(document.documentElement.clientWidth-10);if(du>0)ds.style.left=-Math.max(0,Math.min(du,r.left-10))+'px';
    const c=ds.querySelector('[aria-selected="true"]');if(c){ds.scrollTop=c.offsetTop-ds.clientHeight/2+c.offsetHeight/2;c.focus({preventScroll:true})}}
  nut.onclick=e=>{e.preventDefault();ds.hidden?mo():dong()};
  w.addEventListener('keydown',e=>{if(e.key==='Escape'&&!ds.hidden){e.preventDefault();e.stopPropagation();dong();nut.focus();return}
    if(e.key!=='ArrowDown'&&e.key!=='ArrowUp')return;e.preventDefault();e.stopPropagation();if(ds.hidden){mo();return}
    const m=[...ds.children],i=m.indexOf(document.activeElement);(m[Math.max(0,Math.min(m.length-1,i+(e.key==='ArrowDown'?1:-1)))]||m[0]).focus()});
  w.addEventListener('focusout',e=>{if(e.relatedTarget&&!w.contains(e.relatedTarget))dong()});
  document.addEventListener('click',e=>{if(!w.contains(e.target))dong()});
  new MutationObserver(ve).observe(sel,{childList:true});
  sel.addEventListener('change',ve);w._dong=dong;sel._hop=ve;ve()}

/* Chỉ chạy ở bản ghép có cấu hình {file, js} (xem CLAUDE.md của mục này).
   khiMo(nội dung đã giải mã); thanh "Đang mở bản đầy đủ" chèn trước phần tử `truoc`. */
function loiRieng(cfg,khiMo,truoc){if(!cfg)return;
  const s=document.createElement('script');s.src=cfg.js;
  s.onload=async()=>{let goi;try{goi=await (await fetch(cfg.file)).json()}catch(e){return}
    let daMo=false;
    const mo=t=>{daMo=true;khiMo(t);const r=document.createElement('div');r.className='rbar';r.id='rbar';
      r.innerHTML=IC('khoa')+'<span>Đang mở bản đầy đủ trên máy này</span><button class="btn gh" type="button">Khoá lại</button>';
      r.lastChild.onclick=()=>{LLKhoa.quen();location.reload()};truoc.before(r)};
    const nho=LLKhoa.duoc&&await LLKhoa.thuNho(goi);if(nho)mo(nho);
    const hoi=()=>{let D=$('khoaD');
      if(!D){D=document.createElement('dialog');D.className='chon khoaD';D.id='khoaD';D.setAttribute('aria-labelledby','khoaH');
        D.innerHTML='<h2 id="khoaH">Lối riêng</h2><form id="khoaF"><input type="text" name="username" autocomplete="username" value="chu-trang" hidden>'
          +'<label>Mật khẩu<input type="password" id="khoaMk" autocomplete="current-password" required></label><label class="nho"><input type="checkbox" id="khoaLau" checked>Nhớ máy này</label>'
          +'<p class="info bad" id="khoaLoi" aria-live="polite"></p><div class="ft"><button class="btn gh" type="button" id="khoaX">Đóng</button><button class="btn tl" type="submit" id="khoaOk">Mở</button></div></form>';
        document.body.append(D);
        const dong=()=>D.close?D.close():D.removeAttribute('open');$('khoaX').onclick=dong;
        $('khoaF').onsubmit=async e=>{e.preventDefault();const b=$('khoaOk');b.disabled=true;$('khoaLoi').textContent='';
          try{mo(await LLKhoa.thuMatKhau($('khoaMk').value,goi,$('khoaLau').checked));dong();toast('Đã mở bản đầy đủ')}
          catch(x){$('khoaLoi').textContent='Chưa đúng mật khẩu.';$('khoaMk').select()}b.disabled=false}}
      $('khoaLoi').textContent=LLKhoa.duoc?'':'Trình duyệt này không mở khoá được. Hãy dùng Safari hoặc Chrome.';$('khoaMk').value='';D.showModal?D.showModal():D.setAttribute('open','')};
    let lan=0,luc=0;$('chan').onclick=()=>{const t=Date.now();lan=t-luc<1500?lan+1:1;luc=t;if(lan>=5&&!daMo){lan=0;hoi()}}};
  document.head.append(s)}

return {$,IC,esc,store,toast,G,PHU,enc,dung,nhan,href,paintDung,hop,loiRieng};
})();
/* Nút "Công cụ" (đếm giờ, gọi tên, bảng điểm…) trên mọi trang; trang nhanh/ tự nạp nên bỏ qua. Sửa gv-nhanh thì tăng ?v= ở đây. */
(function(){const s=document.currentScript;if(!s||!document.body||document.body.dataset.nhanh)return;const goc=new URL('.',s.src).href;
  const l=document.createElement('link');l.rel='stylesheet';l.href=goc+'gv-nhanh.css?v=1';document.head.append(l);
  l.onload=l.onerror=()=>{const j=document.createElement('script');j.src=goc+'gv-nhanh.js?v=1';document.body.append(j)}})();
