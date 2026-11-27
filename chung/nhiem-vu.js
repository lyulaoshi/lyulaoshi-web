// NHIỆM VỤ HỌC TẬP (27/11/2026): học viên mở link nhiệm vụ trên bài giảng;
// học viên mở link phải ĐỌC HẾT các phần và LÀM HẾT bài tập mới nộp được, rồi gửi MÃ NỘP BÀI.
// Web tĩnh, không máy chủ: mã có số kiểm tra để phát hiện chép thiếu / sửa tay, không chống được người rành kỹ thuật.
// Dùng ở: bài ngữ pháp (bai.js gọi NV.bat) · bài giáo trình khung slide (tự nhận #deck; build_site.py gắn script khi ghép).
window.NV=(function(){
const P=new URLSearchParams(location.search).get('nv');
const b64=o=>btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const un64=s=>JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g,'+').replace(/_/g,'/')))));
const bam=s=>{let h=2166136261;for(const c of 'lyulaoshi-nv|'+s){h^=c.codePointAt(0);h=Math.imul(h,16777619)}return (h>>>0).toString(36).padStart(7,'0')};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ic=n=>`<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=39804db7#${n}"/></svg>`;
const ngay=s=>{const m=/^(\d{4})-(\d\d)-(\d\d)$/.exec(s||'');return m?`${m[3]}/${m[2]}/${m[1]}`:''};
const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
// phần mở thêm: bản mã ở GOI, chỉ chạy trên máy đã nhớ khoá (xem tools/khoa_trang.py)
const GOI='/chung/nhiem-vu-gv.khoa.json';
let daMo=false;
const napKhoa=()=>window.LLKhoa?Promise.resolve():new Promise((ok,loi)=>{const s=document.createElement('script');s.src='/chung/khoa.js';s.onload=ok;s.onerror=loi;document.head.append(s)});
const layGoi=async()=>{const r=await fetch(GOI,{cache:'no-cache'});if(!r.ok)throw 0;return r.json()};
const chayRieng=ma=>{if(daMo)return;daMo=true;new Function(ma)()};
const laCo=(async()=>{try{
  if(!(localStorage.getItem('ll-khoa')||sessionStorage.getItem('ll-khoa')))return false;
  await napKhoa();if(!LLKhoa.duoc)return false;
  const t=await LLKhoa.thuNho(await layGoi());if(!t)return false;chayRieng(t);return true}catch(e){return false}})();
// bấm 5 lần liên tiếp vào phần tử
function loiRieng(nutCham){let lan=0,luc=0;nutCham.addEventListener('click',async()=>{const t=Date.now();lan=t-luc<1500?lan+1:1;luc=t;if(lan<5||daMo)return;lan=0;
  try{await napKhoa();hoiKhoa(await layGoi())}catch(e){}})}
function hoiKhoa(goi){
  if(document.querySelector('.nv-nen'))return;
  const d=hop(`<button type="button" class="nv-x" data-x aria-label="Đóng">${ic('sai')}</button><h2>Lối riêng</h2>
   <form><input type="text" name="username" autocomplete="username" value="chu-trang" hidden>
   <label class="nv-lb" for="nvMk">Mật khẩu</label><input id="nvMk" class="nv-in" type="password" autocomplete="current-password" required>
   <div class="nv-chon" style="margin-top:10px"><button type="button" data-lau aria-pressed="true">Nhớ máy này</button></div>
   <p class="nv-nho" role="alert">${window.LLKhoa.duoc?'':'Trình duyệt này không mở khoá được. Hãy dùng Safari hoặc Chrome.'}</p>
   <div class="nv-nut"><button type="submit" class="nv-btn chinh">Mở</button></div></form>`);
  const mk=d.querySelector('#nvMk'),lau=d.querySelector('[data-lau]');mk.focus();
  d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-x]'))d.remove();else if(e.target.closest('[data-lau]'))lau.setAttribute('aria-pressed',lau.getAttribute('aria-pressed')!=='true')});
  d.querySelector('form').addEventListener('submit',async e=>{e.preventDefault();const b=e.target.querySelector('[type=submit]'),bao=d.querySelector('[role=alert]');b.disabled=true;bao.textContent='';
    try{const t=await LLKhoa.thuMatKhau(mk.value,goi,lau.getAttribute('aria-pressed')==='true');d.remove();chayRieng(t)}
    catch(x){bao.textContent='Chưa đúng mật khẩu.';mk.select();b.disabled=false}});
}
let NHIEM=null;try{if(P){const o=un64(P);if(o&&o.i)NHIEM=o}}catch(e){}

// giao diện tối: dò theo nền thật của trang (bài ngữ pháp và bài giáo trình đặt chế độ tối khác nhau)
function mau(){const m=(getComputedStyle(document.body).backgroundColor.match(/[\d.]+/g)||[]).map(Number);
  const toi=m.length>=3&&m[3]!==0&&(m[0]*.3+m[1]*.6+m[2]*.1)<110;document.documentElement.classList.toggle('nv-toi',toi)}
function hop(html,cls){mau();const d=document.createElement('div');d.className='nv-nen '+(cls||'');d.innerHTML=`<div class="nv-hop" role="dialog" aria-modal="true">${html}</div>`;document.body.appendChild(d);return d}
async function chep(text,btn){let ok=false;try{await navigator.clipboard.writeText(text);ok=true}catch(e){const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();try{ok=document.execCommand('copy')}catch(_){}t.remove()}
  if(btn){const c=btn.innerHTML;btn.innerHTML=ok?ic('tick')+' Đã chép':'Chưa chép được, hãy bôi đen rồi chép';setTimeout(()=>btn.innerHTML=c,1800)}}

// ---------- HỌC VIÊN: làm nhiệm vụ ----------
// cau = {title, sections:[{el,name}], items:[{id,el,label}]}; khung bài gọi NV.ghi(id,{xong,dung,tl}) mỗi khi học viên làm một câu
let S=null,CFG=null,KEY='',dock=null;
const luu=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
function ghi(id,r){if(!S)return;const o=S.it[id]||(S.it[id]={x:0,d:null,t:''});
  if(o.d===null&&r.dung!==null&&r.dung!==undefined)o.d=r.dung?1:0;     // chỉ tính kết quả LẦN ĐẦU
  if(r.tl!==undefined&&(!o.x||o.d!==1))o.t=String(r.tl).slice(0,60);
  if(r.xong)o.x=1;luu();ve()}
const daDoc=i=>!!S.doc[i], daLam=id=>!!(S.it[id]&&S.it[id].x);
function ve(){if(!dock)return;
  const nd=CFG.sections.filter((s,i)=>daDoc(i)).length,nl=CFG.items.filter(it=>daLam(it.id)).length;
  CFG.sections.forEach((s,i)=>s.el.classList.toggle('nv-read',daDoc(i)));CFG.items.forEach(it=>it.el.classList.toggle('nv-done',daLam(it.id)));
  const du=nd===CFG.sections.length&&nl===CFG.items.length;
  dock.querySelector('#nvD').textContent=nd+'/'+CFG.sections.length;dock.querySelector('#nvL').textContent=nl+'/'+CFG.items.length;
  dock.querySelector('.nv-thanh i').style.width=((nd+nl)/(CFG.sections.length+CFG.items.length)*100)+'%';
  const b=dock.querySelector('#nvNop');b.classList.toggle('san',du);b.innerHTML=ic(du?'gui':'khoa')+(S.ma?' Xem mã':' Nộp bài')}
// đọc: một phần được tính khi đã nhìn thấy tới cuối phần VÀ dừng ở đó đủ lâu (theo độ dài chữ)
function nhip(){
  if(!S||document.hidden||document.querySelector('.nv-nen'))return;
  S.giay++;const H=innerHeight;let doi=false;
  CFG.sections.forEach((s,i)=>{if(S.doc[i])return;const r=s.el.getBoundingClientRect();if(!r.height)return;
    const thay=Math.min(r.bottom,H)-Math.max(r.top,0);if(thay<Math.min(r.height,H)*0.4)return;
    s._t=(s._t||0)+1;if(r.bottom<=H+40)s._cuoi=true;
    const con=s.can-s._t;s.el.dataset.nv=con>0?'Đang đọc… còn '+con+' giây':'Đọc tiếp đến cuối phần này';
    if(con<=0&&s._cuoi){S.doc[i]=1;doi=true}});
  if(doi){luu();ve()}else if(S.giay%10===0)luu();
}
function conThieu(){
  const d=CFG.sections.map((s,i)=>({s,i})).filter(x=>!daDoc(x.i)),l=CFG.items.filter(it=>!daLam(it.id));
  if(!d.length&&!l.length)return false;
  const h=hop(`<h2>Chưa xong đâu</h2><p>Em còn ${[d.length?`<b>${d.length} phần chưa đọc</b>`:'',l.length?`<b>${l.length} câu chưa làm</b>`:''].filter(Boolean).join(' và ')}.</p>
    <ul class="nv-ds">${d.slice(0,4).map(x=>`<li>Đọc: ${esc(x.s.name)}</li>`).join('')}${l.slice(0,4).map(x=>`<li>Làm: ${esc(x.label)}</li>`).join('')}${d.length+l.length>8?'<li>…</li>':''}</ul>
    <div class="nv-nut"><button type="button" class="nv-btn chinh" data-di>Đến chỗ còn thiếu</button><button type="button" class="nv-btn" data-x>Đóng</button></div>`);
  h.addEventListener('click',e=>{if(e.target.closest('[data-di]')){h.remove();const el=d.length?d[0].s.el:l[0].el;el.scrollIntoView({behavior:'smooth',block:'start'})}else if(e.target===h||e.target.closest('[data-x]'))h.remove()});
  return true;
}
function nop(){
  if(conThieu())return;
  if(!S.ma){
    const cham=CFG.items.filter(it=>S.it[it.id].d!==null),dung=cham.filter(it=>S.it[it.id].d===1).length;
    const xem=CFG.items.filter(it=>S.it[it.id].d!==1&&S.it[it.id].t).slice(0,15).map(it=>[it.label.slice(0,50),S.it[it.id].t,S.it[it.id].d===0?0:1]);   // 0 = sai / chưa khớp, 1 = câu tự viết
    const o={i:NHIEM.i,b:location.pathname,t:CFG.title.slice(0,70),n:S.ten,k:NHIEM.l||'',h:NHIEM.h||'',d:Date.now(),s:S.giay,c:dung,m:cham.length,p:CFG.sections.length,q:CFG.items.length,a:S.lan,x:xem};
    const p=b64(o);S.ma='NV1.'+p+'.'+bam(p);S.nopLuc=o.d;S.kq=[dung,cham.length];luu();ve();
    if(window.goatcounter&&goatcounter.count)goatcounter.count({path:'nop-nhiem-vu',event:true});
  }
  const tre=NHIEM.h&&iso(new Date(S.nopLuc))>NHIEM.h;
  const tin=`${S.ten} đã hoàn thành: ${CFG.title}${S.kq[1]?`\nĐúng ngay lần đầu: ${S.kq[0]}/${S.kq[1]}`:''}${tre?'\n(nộp trễ hạn)':''}\nMã nộp bài:\n${S.ma}`;
  const h=hop(`<div class="nv-xong">${ic('cup')}</div><h2>Hoàn thành nhiệm vụ!</h2><p>${esc(S.ten)} · đã đọc ${CFG.sections.length} phần, làm ${CFG.items.length} câu${S.kq[1]?` · đúng ngay lần đầu <b>${S.kq[0]}/${S.kq[1]}</b>`:''}${tre?' · <b>trễ hạn</b>':''}</p>
    <p><b>Bước cuối:</b> bấm nút dưới đây rồi <b>dán vào Zalo gửi thầy cô</b>.</p>
    <textarea class="nv-ma" readonly rows="4" aria-label="Tin nhắn kèm mã nộp bài">${esc(tin)}</textarea>
    <div class="nv-nut"><button type="button" class="nv-btn chinh" data-c>${ic('chep')} Chép để gửi</button><button type="button" class="nv-btn" data-x>Đóng</button><button type="button" class="nv-btn mo" data-lai>Làm lại từ đầu</button></div>`);
  h.addEventListener('click',e=>{const c=e.target.closest('[data-c]');if(c)chep(tin,c);
    if(e.target.closest('[data-x]'))h.remove();
    const l=e.target.closest('[data-lai]');if(l){if(l.dataset.chac){try{localStorage.setItem(KEY,JSON.stringify({ten:S.ten,doc:{},it:{},giay:0,lan:S.lan+1}))}catch(_){}location.reload()}else{l.dataset.chac=1;l.textContent='Bấm lần nữa để xoá và làm lại'}}});
}
function chay(){mau();new MutationObserver(mau).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  document.body.classList.add('nv-on');
  CFG.sections.forEach(s=>{const n=(s.el.innerText||s.el.textContent||'').length;s.can=Math.max(3,Math.min(20,Math.round(n/35)));s.el.classList.add('nv-sec');s.el.dataset.nv='Chưa đọc'});
  dock=document.createElement('div');dock.className='nv-dock';
  dock.innerHTML=`<div class="nv-thanh"><i></i></div><div class="nv-dong"><span class="nv-ten">${esc(S.ten)}</span><span>Đã đọc <b id="nvD"></b></span><span>Bài tập <b id="nvL"></b></span><button type="button" class="nv-btn" id="nvNop"></button></div>`;
  document.body.appendChild(dock);
  const cao=()=>document.documentElement.style.setProperty('--nv-cao',dock.offsetHeight+'px');new ResizeObserver(cao).observe(dock);cao();dock.querySelector('#nvNop').addEventListener('click',()=>S.ma?nop():nop());
  ve();setInterval(nhip,1000);
}
function bat(cfg){
  if(!NHIEM||CFG)return false;CFG=cfg;KEY='nv:'+NHIEM.i+':'+location.pathname;
  try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  if(S&&S.ten){chay();return true}
  S=null;
  const h=hop(`<div class="nv-xong">${ic('sach')}</div><h2>Nhiệm vụ học tập <span>学习任务</span></h2><p class="nv-bai">${esc(cfg.title)}</p>
    ${NHIEM.l||NHIEM.h?`<p>${NHIEM.l?`<b>${esc(NHIEM.l)}</b>`:''}${NHIEM.l&&NHIEM.h?' · ':''}${NHIEM.h?`Hạn nộp <b>${ngay(NHIEM.h)}</b>`:''}</p>`:''}
    <ol class="nv-ds"><li>Đọc hết <b>${cfg.sections.length} phần</b> của bài (đọc lướt sẽ chưa được tính).</li><li>Làm hết <b>${cfg.items.length} câu</b> bài tập.</li><li>Bấm <b>Nộp bài</b>, chép mã gửi thầy cô qua Zalo.</li></ol>
    <label class="nv-lb" for="nvTen">Họ và tên của em</label><input id="nvTen" class="nv-in" maxlength="40" autocomplete="name" placeholder="Nguyễn Văn A">
    <div class="nv-nut"><button type="button" class="nv-btn chinh" data-bd>Bắt đầu</button></div><p class="nv-nho" id="nvBao" hidden>Em gõ họ tên (ít nhất 2 chữ cái) rồi bấm Bắt đầu nhé.</p>`,'cong');
  const vao=()=>{const t=h.querySelector('#nvTen').value.trim().replace(/\s+/g,' ');if(t.length<2){h.querySelector('#nvBao').hidden=false;h.querySelector('#nvTen').focus();return}
    let cu=null;try{cu=JSON.parse(localStorage.getItem(KEY))}catch(e){}
    S={ten:t,doc:{},it:{},giay:0,lan:(cu&&cu.lan)||1};luu();h.remove();chay()};
  h.querySelector('[data-bd]').addEventListener('click',vao);h.querySelector('#nvTen').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.isComposing)vao()});
  return true;
}

// ---------- BÀI GIÁO TRÌNH KHUNG SLIDE (shared/kit) ----------
function khungSlide(){
  const deck=document.getElementById('deck');if(!deck)return;
  const slides=[...deck.querySelectorAll(':scope > section.slide')];if(!slides.length)return;
  const tenBai=document.title.split(/\s[–|]\s/)[0].trim();
  if(!NHIEM)return;
  const cuon=document.getElementById('mScroll');if(cuon&&cuon.getAttribute('aria-pressed')!=='true')cuon.click();   // nhiệm vụ: đọc kiểu cuộn
  const ten=s=>{const h=s.querySelector('h1,h2');return (h?h.textContent:'').trim().slice(0,40)||'Trang '+(slides.indexOf(s)+1)};
  const items=[];let n=0;
  const them=(el,s,loai)=>{const it={id:'k'+(++n),el,label:ten(s)+' · câu '+(items.filter(x=>x.s===s).length+1),s,loai};items.push(it);return it};
  slides.forEach(s=>{
    s.querySelectorAll('.opts,.pos').forEach(g=>{const it=them(g.closest('.qi,.q')||g,s,'chon');
      g.addEventListener('click',e=>{const o=e.target.closest('.opt,.slot');if(o)ghi(it.id,{xong:true,dung:o.hasAttribute('data-ok'),tl:o.textContent.trim()})})});
    s.querySelectorAll('input.fill').forEach(f=>{const it=them(f.closest('.blank')||f,s,'dien');const a=f.dataset.a||'';
      const nhan=()=>{const v=f.value.trim();if(!v)return;const g=x=>x.replace(/[\s。，、！？!?,.：:；;“”"'（）()]/g,'');ghi(it.id,{xong:true,dung:/…/.test(a)||!a?null:g(v)===g(a),tl:v})};
      f.addEventListener('change',nhan);f.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.isComposing)nhan()})});
    // bài tự luận (chỉ có đáp án gợi ý): thêm ô trả lời, viết xong mới xem được đáp án
    s.querySelectorAll('.ansrow').forEach(row=>{const nhom=[];   // đúng nhóm mà khung bài gắn nút đáp án: các khối liền trước có đáp án
      for(let p=row.previousElementSibling;p&&!p.matches('.ansrow,h2.t');p=p.previousElementSibling){if(p.matches('.tip'))continue;if(!p.matches('.ans,.ansblk,[data-ok]')&&!p.querySelector('.ans,.ansblk,[data-ok]'))break;nhom.push(p)}
      const co=nhom.some(x=>x.matches('.opts,.pos')||x.querySelector('.opts,.pos,input.fill'));const btn=row.querySelector('.ansbtn');if(!btn)return;
      let cua=items.filter(it=>nhom.some(x=>x===it.el||x.contains(it.el)));
      if(!co){const t=document.createElement('textarea');t.className='nv-tl';t.rows=3;t.placeholder='Viết câu trả lời của em cho phần này rồi mới xem được đáp án…';t.setAttribute('aria-label','Câu trả lời của em');row.before(t);
        const it=them(t,s,'viet');cua=[it];t.addEventListener('input',()=>{const v=t.value.trim();if(v.length>=2){ghi(it.id,{xong:true,dung:null,tl:v})}});it.o=t}
      btn.addEventListener('click',e=>{if(cua.some(it=>!daLam(it.id))){e.stopImmediatePropagation();e.preventDefault();row.dataset.bao='Làm xong phần này rồi mới xem đáp án nhé.';setTimeout(()=>delete row.dataset.bao,2500)}},true)});
  });
  bat({title:tenBai,sections:slides.map(s=>({el:s,name:ten(s)})),items});
  items.forEach(it=>{if(it.o&&S&&S.it[it.id])it.o.value=S.it[it.id].t||''});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',khungSlide);else setTimeout(khungSlide,0);
return {dangLam:!!NHIEM,laCo,bat,ghi,daLam:id=>!!S&&daLam(id),chep,loiRieng,_:{hop,esc,ic,ngay,iso,b64,un64,bam}};
})();
