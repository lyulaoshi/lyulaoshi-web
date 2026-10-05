// Chơi với một bộ từ của 词汇盒 thay cho cả cấp HSK: ?bo=bai:301:bai-13 (nhiều bài: bai-11+bai-13) · cd:gia-dinh · hsk:1:40
// Nạp sau hsk-words.js, ../tu-vung/bai-data.js, ../tu-vung/chu-de.js và TRƯỚC script của trò chơi.
// Bộ từ được đặt vào "HSK 1" (các cấp khác để trống); ô chọn cấp được thay bằng dòng tên bộ từ.
(function(){
  const id=new URLSearchParams(location.search).get('bo');if(!id||!window.HSK)return;
  const [t,a,b]=id.split(':');let name='',back='',w=null;
  if(t==='bai'){const bk=(window.BAI||[]).find(x=>x.id===a),ls=bk?(b||'').split(/[+ ]/).map(y=>bk.bai.find(x=>x.id===y)).filter(Boolean):[];   // nhiều bài: bai-11+bai-12 (ôn gộp từ 课本盒)
    if(ls.length){const seen=new Set();w=ls.flatMap(l=>l.w).filter(x=>!seen.has(x[0])&&seen.add(x[0])).map(x=>[x[0],x[1]]);name=bk.zh+' · Bài '+ls.map(l=>l.n).join(', ');back=a+'/'+ls.map(l=>l.id).join('+')}}
  else if(t==='cd'){const c=(window.CHUDE||[]).find(x=>x.id===a);if(c){w=c.w.map(x=>[x[0],x[1]]);name=c.zh+' · '+c.vi;back='chu-de/'+a}}
  else if(t==='hsk'&&HSK[a]){w=HSK[a].slice(+b,+b+20);name='HSK '+a+' · Gói '+(+b/20+1);back='hsk/'+a}
  else if(t==='tu'){const ws=(a||'').split(','),py=x=>{for(const l in HSK){const f=HSK[l].find(([v])=>v===x);if(f)return f[1]}};  // bộ tuỳ chọn, ví dụ từ trò Đoán từ
    w=ws.map(x=>[x,py(x)]).filter(x=>x[1]);name='Từ vừa gặp · '+ws[0];back='tu/'+a}
  if(!w||w.length<4)return;
  const all=HSK;window.HSK={};Object.keys(all).forEach(k=>HSK[k]=k==='1'?w:[]);
  window.BO_TU={id,name,n:w.length};
  // cấp đã chọn & kỷ lục của chế độ bộ từ lưu riêng từng bộ, không đè lên chế độ HSK (trừ giao diện sáng/tối)
  try{const P=Storage.prototype,g=P.getItem,s=P.setItem,r=P.removeItem,k=x=>x==='cb-theme'?x:'bo:'+id+':'+x;
    P.getItem=function(x){return g.call(this,k(x))};P.setItem=function(x,v){return s.call(this,k(x),v)};P.removeItem=function(x){return r.call(this,k(x))};}catch(e){}
  document.addEventListener('DOMContentLoaded',()=>{
    const row=document.getElementById('lvChips');if(!row)return;
    // chỉ chọn "cấp 1" (= bộ từ) bằng chính nút của trò chơi, rồi ẩn hàng chọn cấp
    const c1=row.querySelector('[data-lv="1"]');if(c1&&c1.getAttribute('aria-pressed')!=='true')c1.click();
    row.querySelectorAll('.chip[aria-pressed="true"]').forEach(c=>{if(c!==c1)c.click()});
    row.hidden=true;
    const h=row.previousElementSibling;   // "1. Chọn cấp HSK …" -> "1. Bộ từ"
    if(h&&/^H\d$/.test(h.tagName))h.textContent=(h.textContent.match(/^\s*\d+\.\s*/)||[''])[0]+'Bộ từ';
    const p=document.createElement('p');p.className='bo-tu';
    p.innerHTML='<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#the-bai></use></svg> Đang chơi bộ từ <b lang="zh"></b><span class="bo-vi"></span> ('+w.length+' từ) · <a href="../../tu-vung/#'+back+'">Về thẻ từ</a> · <a href="./">Chơi theo HSK</a>';
    const k=name.indexOf(' · ');p.querySelector('b').textContent=k<0?name:name.slice(0,k);p.querySelector('.bo-vi').textContent=k<0?'':' ·'+name.slice(k+2);
    row.after(p);   // phần tiếng Việt (.bo-vi) không dùng phông KuaiLe vì phông này thiếu chữ có dấu
  });
  const st=document.createElement('style');
  st.textContent='.bo-tu{margin:6px 0 0;padding:10px 14px;border-radius:14px;background:var(--lav-s);color:var(--ink);font-size:14.5px}.bo-tu b{font-family:var(--hz);font-weight:400;color:var(--lav);font-size:17px}.bo-tu .bo-vi{font-weight:700;color:var(--lav)}.bo-tu a{color:var(--lav);font-weight:700}';
  document.head.appendChild(st);
})();
