// Góc giáo viên — chọn điểm ngữ pháp từ Hộp Ngữ pháp (语法盒) và vẽ công thức, câu ví dụ.
// Cần nạp trước: ../../ngu-phap/{hsk-ngu-phap, hsk-ngu-phap-2025, bai-data, co-bai}.js, ../../tu-vung/bai-data.js, ../gv.js
window.GVNP=(function(){
const {$,IC,esc,store,dung}=GV;
const H=window.HSK_NP||{},N=window.HSK_NP25||{},LV25=window.NP_LV25||{},THEM=window.NP_THEM||{},READY=window.NP_READY||{};
/* mã điểm → {c, z (tên Trung), vi, lv} — điểm đã có bài trong Hộp, cộng điểm tự soạn (khoá gv-np-soan) */
const OFF={};Object.values(H).forEach(L=>L.ds.forEach(d=>OFF[d[0]]={z:d[1],vi:d[3]}));
Object.values(N).forEach(L=>L.ds.forEach(d=>OFF['新'+d[0]]={z:d[2],vi:d[3]}));
const capCua=c=>{let v=LV25[c];if(v==='?'||v==null)v=THEM[c]||'khac';return String(v)};
const thuTu=s=>s.split(/[-.]/).map(x=>String(parseInt(String(x).replace(/\D/g,''),10)||0).padStart(3,'0')).join('');
const HOP=Object.keys(READY).map(c=>({c,dir:READY[c],z:(OFF[c]||{}).z||c,vi:(OFF[c]||{}).vi||'',lv:capCua(c)}))
  .sort((a,b)=>thuTu(a.dir).localeCompare(thuTu(b.dir)));
const dsSoan=()=>{const l=store.get('gv-np-soan');return Array.isArray(l)?l.filter(r=>r&&typeof r.id==='string'):[]};
const DS=[],MA={};
function napSoan(){DS.length=0;Object.keys(MA).forEach(k=>delete MA[k]);
  HOP.concat(dsSoan().map(r=>({c:r.id,dir:'',z:String(r.z||r.vi||''),vi:String(r.vi||r.z||''),lv:'soan',soan:true,bai:r.bai||'',nguon:r.nguon||''}))).forEach(x=>{DS.push(x);MA[x.c]=x})}
napSoan();
const SOAN='../soan-ngu-phap/';   /* trang soạn điểm mới */

/* ---------- điểm tự soạn → cùng dạng với bài trong Hộp ---------- */
const HAN=/[\u3400-\u9fff]/;
const dong=t=>String(t||'').split('\n').map(x=>x.trim()).filter(Boolean);
const cot=l=>l.split(/\s*[|｜]\s*/);
/* "Chủ ngữ + 把 + O (tân ngữ)" → các ô; ô chỉ có chữ Hán là từ khoá (tô đậm), phần trong ngoặc là chú thích ô */
function oCongThuc(s){return String(s||'').split(/\s*[+＋]\s*/).map(x=>x.trim()).filter(Boolean).map(x=>{
  const m=x.match(/^(.*?)\s*[（(]([^（）()]*)[）)]$/),chinh=m&&m[1]?m[1]:x,phu=m&&m[1]?m[2]:'';
  return[chinh,!phu&&HAN.test(chinh)&&!/[a-zà-ỹđ]/i.test(chinh)?null:phu]})}
/* màu từng ô công thức: lần lượt 1–6, trừ ô đã tự chọn (chuỗi "0,3,1": 0 = tự động) */
const mauO=(fx,chon)=>{const c=String(chon||'').split(',');return fx.map((o,i)=>+c[i]>=1&&+c[i]<=6?+c[i]:i%6+1)};
/* tô câu ví dụ cùng màu công thức ({màu|chữ}):
   – câu ngăn bằng "/" đúng bằng số ô → tô từng phần theo từng ô;
   – không thì tô các từ khoá chữ Hán của công thức. Câu đã tự đánh dấu [ ] thì giữ nguyên. */
function toMau(cau,fx,ch){const d=cau.split(/\s*[\/／]\s*/);
  if(fx.length>1&&d.length===fx.length)return d.map((x,i)=>{const m=x.match(/^([\s\S]*?)([。，！？、.,!?；;]*)$/);return(m[1]?'{'+ch[i]+'|'+m[1]+'}':'')+m[2]}).join('');
  if(/[\[{]/.test(cau))return cau;
  const tu=new Map();fx.forEach((o,i)=>{if(o[1]===null)o[0].split(/\s*[\/／…、]+\s*/).forEach(w=>{if(HAN.test(w)&&!tu.has(w))tu.set(w,ch[i])})});
  if(!tu.size)return cau;
  const r=[...tu.keys()].sort((a,b)=>b.length-a.length).map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
  return cau.replace(new RegExp(r,'g'),k=>'{'+tu.get(k)+'|'+k+'}')}
/* các dòng ví dụ "câu | nghĩa" hoặc "câu | pinyin | nghĩa"; py = pinyin máy tạo theo từng dòng */
function viDu(vd,py,fx,ch){return dong(vd).map((l,i)=>{const c=cot(l),co3=c.length>=3;
  return[toMau(c[0],fx||[],ch||[]),co3?c[1]:(py||[])[i]||'',co3?c.slice(2).join(' | '):c[1]||'']})}
function chuyen(r){const rules=(r.ct||[]).map((m,i)=>{const fx=oCongThuc(m.fx),ch=mauO(fx,m.mau);
    return{t:String(m.t||'')||'Mẫu '+(i+1),sub:'',fx,mau:true,ch,mean:esc(m.y||''),ex:viDu(m.vd,m.py,fx,ch)}}).filter(m=>m.fx.length||m.ex.length);
  const errs=dong(r.sai).map(cot).filter(c=>c[0]&&c[1]).map(c=>({bad:c[0],good:c[1],why:esc(c.slice(2).join(' | '))}));
  return{title:String(r.z||r.vi||''),vi:String(r.vi||''),rules,errs}}

/* điểm ngữ pháp của bài giáo trình đang dùng (khoá gv-dung) */
function cuaBai(){const d=dung();if(!d||d.k!=='bai')return null;
  const b=(window.BAI||[]).find(x=>x.id===d.sach),l=b&&b.bai.find(x=>x.id===d.bai);if(!l)return null;
  const ds=[],thieu=[],soan=DS.filter(x=>x.soan),them=c=>{if(!ds.includes(c))ds.push(c)};
  (window.NP_BAI||[]).filter(p=>p.b===d.sach&&p.l===l.n).forEach(p=>{const co=p.h.filter(c=>MA[c]);if(co.length){co.forEach(them);return}
    const k=p.b+':'+p.l+':'+p.t,tu=soan.filter(x=>x.nguon===k);if(tu.length)tu.forEach(x=>them(x.c));else thieu.push({k,n:p.n})});
  soan.filter(x=>x.bai===d.sach+':'+d.bai).forEach(x=>them(x.c));
  return ds.length||thieu.length?{ten:b.vi+' · Bài '+l.n,ds,thieu,bai:d.sach+':'+d.bai}:null}
/* tên mục trong bài giảng "汉语… — tiếng Việt" → [tên Trung, tên Việt] */
function haiTen(n){const i=String(n).indexOf(' — ');if(i>0)return[n.slice(0,i),n.slice(i+3)];
  /* chỉ có chữ Hán và ký hiệu như V, C, A, B → tên tiếng Trung */
  return HAN.test(n)&&!/[à-ỹđ]|[a-z]{3,}/i.test(n)?[n,'']:['',n]}

/* nội dung một bài: đọc data.js (gán window.NP_LESSON) */
const kho=new Map();
function tai(c){const x=MA[c];if(!x)return Promise.reject(new Error(c));
  if(x.soan){const r=dsSoan().find(r=>r.id===c);return r?Promise.resolve(Object.assign({},x,{L:chuyen(r)})):Promise.reject(new Error(c))}
  if(!kho.has(c))kho.set(c,fetch('../../ngu-phap/'+x.dir+'/data.js',{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error(r.status);return r.text()})
    .then(t=>{const w={};new Function('window',t)(w);return Object.assign({},x,{L:w.NP_LESSON})}).catch(e=>{kho.delete(c);throw e}));
  return kho.get(c)}

/* câu ví dụ: [是] tô đậm, {2|把} cùng màu ô 2 của công thức */
const mk=s=>esc(s).replace(/\[([^\]]+)\]/g,'<mark>$1</mark>').replace(/\{(\d)\|([^{}|]+)\}/g,'<span class="sg s$1">$2</span>');
const tron_=s=>String(s).replace(/\{\d\|/g,'').replace(/[\[\]{}]/g,'');
const NGAN=/^(·|\/|→|hoặc|,)$/;
function fx(f,mau,ch){let n=0;return '<div class="fx'+(mau?' col':'')+'">'+f.map((p,i)=>{if(NGAN.test(p[0]))return '<span class="plus">'+esc(p[0])+'</span>';
  const k=n++;return(i&&!NGAN.test(f[i-1][0])&&!/^\//.test(p[0])?'<span class="plus">+</span>':'')+'<span class="'+(p[1]==null?'k':'')+(mau?' s'+(ch&&ch[k]||k%6+1):'')+'"><b>'+esc(p[0])+'</b>'+(p[1]?'<i>'+esc(p[1])+'</i>':'')+'</span>'}).join('')+'</div>'}

/* Bảng chọn điểm: nhiều điểm, nhớ chung cho các công cụ (khoá gv-np). onChange(danh sách mã theo thứ tự đã chọn) */
const CAP=[['1','HSK 1'],['2','HSK 2'],['3','HSK 3'],['4','HSK 4'],['5','HSK 5'],['6','HSK 6'],['7','HSK 7–9'],['khac','Khác'],['soan','Tự soạn']];
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d');
function chon(el,onChange){
  let da=(store.get('gv-np')||[]).filter(c=>MA[c]);
  let bai=cuaBai(),cap=[],tab=store.get('gv-np-tab');
  function nhom(){cap=CAP.filter(([k])=>DS.some(x=>x.lv===k)||k==='soan');
    if(!cap.some(([k])=>k===tab)&&!(tab==='bai'&&bai))tab=bai?'bai':'1'}
  /* theo địa chỉ ?diem=1-36,2-11 */
  const q=new URLSearchParams(location.search).get('diem');
  if(q){const l=q.split(',').map(d=>DS.find(x=>x.dir===d||x.c===d)).filter(Boolean).map(x=>x.c);if(l.length)da=l}
  if(!da.length&&bai)da=bai.ds.slice();
  el.innerHTML='<div class="pn np-chon"><div class="np-dau"><span class="seg" id="npCap" role="group" aria-label="Nhóm điểm ngữ pháp"></span>'
    +'<input type="search" id="npTim" placeholder="Tìm: 是, câu chữ 把, so sánh…" aria-label="Tìm điểm ngữ pháp"></div>'
    +(bai?'':'<p class="muted small np-goi">Chọn bài giáo trình ở trang chính thì có thêm mục “Bài đang dạy”.</p>')
    +'<div class="np-ds" id="npDs"></div><div class="np-da"><b id="npDem"></b><span id="npDa"></span><button class="btn gh" type="button" id="npXoa">Bỏ chọn hết</button></div></div>';
  function veTab(){nhom();$('npCap').innerHTML='';
    (bai?[['bai','Bài đang dạy']]:[]).concat(cap).forEach(([k,t])=>{const b=document.createElement('button');b.type='button';b.dataset.k=k;b.textContent=t;$('npCap').append(b)})}
  const the=x=>'<button type="button" class="np-d" data-c="'+esc(x.c)+'" aria-pressed="'+da.includes(x.c)+'" title="'+esc(x.vi+' · '+x.z)+'"><b>'+esc(x.vi)+'</b><span class="z" lang="zh">'+esc(x.z)+'</span>'+(x.soan?'<small>Tự soạn</small>':'')+'</button>';
  /* mục có trong bài giảng nhưng Hộp chưa có bài */
  const trong_=m=>{const [z,vi]=haiTen(m.n),duong=SOAN+'?'+new URLSearchParams({bai:bai.bai,nguon:m.k,z,vi});
    return '<div class="np-d thieu"><b>'+esc(vi||z)+'</b>'+(vi&&z?'<span class="z" lang="zh">'+esc(z)+'</span>':'')+'<small>Chưa có trong Hộp</small><a href="'+esc(duong)+'">'+IC('but')+'Soạn</a></div>'};
  function veDs(){const tim=norm($('npTim').value.trim());
    [...$('npCap').children].forEach(b=>b.setAttribute('aria-pressed',!tim&&b.dataset.k===tab));
    const hien=tim?DS.filter(x=>norm(x.z+' '+x.vi+' '+x.dir).includes(tim)):tab==='bai'?bai.ds.map(c=>MA[c]):DS.filter(x=>x.lv===tab);
    const oBai=tab==='bai'&&!tim,oSoan=tab==='soan'&&!tim;
    $('npDs').innerHTML=(oBai?'<p class="np-ten">'+esc(bai.ten)+(bai.ds.length?'<button class="btn gh" type="button" id="npCaBai">Chọn cả bài</button>':'')+'</p>':'')
      +(oSoan?'<p class="np-ten">Điểm lưu trên máy này<a class="btn gh" href="'+SOAN+'">'+IC('but')+'Soạn và sửa</a></p>':'')
      +hien.map(the).join('')+(oBai?bai.thieu.map(trong_).join(''):'')
      +(hien.length||oBai&&bai.thieu.length?'':'<p class="muted">'+(oSoan?'Chưa có điểm tự soạn nào.':'Không tìm thấy điểm nào.')+'</p>')}
  function veDa(){$('npDem').textContent='Đã chọn '+da.length+' điểm';
    $('npDa').innerHTML=da.map(c=>'<button type="button" class="np-the" data-c="'+esc(c)+'" aria-label="Bỏ '+esc(MA[c].z)+'"><span lang="zh">'+esc(MA[c].z)+'</span>'+IC('sai')+'</button>').join('');
    $('npXoa').hidden=!da.length;store.set('gv-np',da);onChange(da.slice())}
  const bat=c=>{const i=da.indexOf(c);i<0?da.push(c):da.splice(i,1)};
  $('npCap').onclick=e=>{const b=e.target.closest('button');if(!b)return;tab=b.dataset.k;store.set('gv-np-tab',tab);$('npTim').value='';veDs()};
  $('npTim').oninput=veDs;
  $('npDs').onclick=e=>{if(e.target.closest('#npCaBai')){da=bai.ds.slice();veDs();veDa();return}
    const b=e.target.closest('.np-d');if(!b)return;bat(b.dataset.c);b.setAttribute('aria-pressed',da.includes(b.dataset.c));veDa()};
  $('npDa').onclick=e=>{const b=e.target.closest('.np-the');if(!b)return;bat(b.dataset.c);veDs();veDa()};
  $('npXoa').onclick=()=>{da=[];veDs();veDa()};
  /* soạn ở thẻ trình duyệt khác thì bảng chọn tự cập nhật */
  addEventListener('storage',e=>{if(e.key!=='gv-np-soan')return;napSoan();da=da.filter(c=>MA[c]);bai=cuaBai();veTab();veDs();veDa()});
  veTab();veDs();veDa();
}
return{DS,MA,chon,tai,fx,mk,tron:tron_,cuaBai,dsSoan,chuyen,oCongThuc,mauO,toMau,viDu,napSoan,dong,cot};
})();
