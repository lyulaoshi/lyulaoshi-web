// 词汇盒 — phần "cho vui": Album tem 熟, Thử thách 60 giây + link thách đấu, pháo giấy.
// Dùng chung dữ liệu và tiến độ của trang qua window.TV (khai báo cuối script chính trong index.html).
(function(){
const TV=window.TV;if(!TV)return;
const $=id=>document.getElementById(id), esc=TV.esc;
const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;

// ---------- pháo giấy ----------
function confetti(){
  if(reduced())return;
  const box=document.createElement('div');box.className='confetti';box.setAttribute('aria-hidden','true');
  const cols=['var(--peach)','var(--mint)','var(--sky)','var(--lav)','var(--coral)','#C9A227'];
  for(let i=0;i<70;i++){const s=document.createElement('i');
    s.style.cssText='left:'+(Math.random()*100)+'%;background:'+cols[i%cols.length]+';--d:'+(1.6+Math.random()*1.4)+'s;--x:'+(Math.random()*160-80)+'px;--rot:'+(Math.random()*900-450)+'deg;animation-delay:'+(Math.random()*.4)+'s';
    box.appendChild(s)}
  document.body.appendChild(box);setTimeout(()=>box.remove(),3600);
}

// ---------- Album tem 熟 ----------
// mỗi "trang album" là một bộ thẻ; tem vàng = thẻ đã lên hộp 熟 (box ≥ 4)
function pages(){
  const ps=TV.LEVELS.filter(l=>l!=='7-9'||window.HSK79).map(l=>({id:'hsk:'+l,t:'HSK '+TV.lvName(l),cs:()=>TV.hskWords(l)}));
  TV.BAI.forEach(b=>ps.push({id:'bk:'+b.id,t:b.zh,cs:()=>b.bai.flatMap(l=>l.w.map(x=>TV.card(...x)))}));
  ps.push({id:'cd',t:'Chủ đề',cs:()=>TV.CHUDE.flatMap(c=>c.w.map(x=>TV.card(...x)))});
  ps.push({id:'zz',t:'字族 Họ chữ',cs:TV.allZZ});
  return ps;
}
let alOpen='';
// tem: mỗi mục album một kiểu — k = 'hsk' tem bưu chính răng cưa · 'bk' vé (giáo trình) · 'cd' huy hiệu tròn (chủ đề) · 'zz' con dấu son (họ chữ). Màu theo cấp HSK của từ.
function tem(c,k,i,plv){   // plv: cấp của trang HSK (từ có ở nhiều cấp thì theo trang)
  const r=(((i*37)%7)-3)*.8,lv=plv||(TV.lvOf?TV.lvOf(c):''),col=lv&&TV.LVC?'var(--'+TV.LVC[lv]+')':'',w=esc(c.w),p=esc(c.p||''),n=[...c.w].length;
  const st=' style="--r:'+(k==='cd'?r/2:r).toFixed(1)+'deg'+(col?';--lc:'+col:'')+'"',lvn=lv?'HSK '+TV.lvName(lv):'';
  if(k==='zz')return '<span class="tb" lang="zh"'+st+'><span class="z" style="--cols:'+(n>2?2:1)+';--fs:'+(n===1?'1.9em':n===2?'1.25em':'1.15em')+'">'+[...c.w].map(z=>'<i>'+esc(z)+'</i>').join('')+'</span>'+(col?'<span class="tlv"></span>':'')+'</span>';
  if(k==='cd')return '<span class="tc"'+st+'><span class="tin"><span class="z" lang="zh" style="--fs:'+(n===1?'1.6em':n===2?'1.2em':n===3?'.9em':'.72em')+'">'+w+'</span><span class="p">'+p+'</span></span></span>';
  if(k==='bk')return '<span class="td"'+st+'><span class="hd"><b>'+(lvn||'&nbsp;')+'</b><span lang="zh">熟</span></span><span class="bd"><span class="z" lang="zh">'+w+'</span><span class="p">'+p+'</span></span></span>';
  return '<span class="ta"'+st+'><span class="tin">'+(lvn?'<span class="tlv">'+lvn+'</span>':'')+'<span class="z" lang="zh">'+w+'</span><span class="p">'+p+'</span></span><span class="pm" lang="zh">熟</span></span>';
}
const temQ=k=>'<span class="tq'+(k==='cd'?' tc':k==='zz'?' tb':'')+'" aria-hidden="true">?</span>';
const kindOf=id=>id.split(':')[0],pageLv=id=>/^hsk:/.test(id)?id.slice(4):'';
function renderAlbum(){
  if(!$('alPages'))return;
  const total=Object.values(TV.S.cards).filter(s=>s.b>=4).length;
  $('alSum').innerHTML=total?'Bạn đã sưu tầm <b>'+total+'</b> tem. Mỗi thẻ lên hộp <span lang="zh">熟</span> (đã thuộc) thành một con tem vàng.':'Mỗi thẻ lên hộp <span lang="zh">熟</span> (đã thuộc) thành một con tem vàng. Ôn đều mỗi ngày để có những con tem đầu tiên nhé.';
  $('alPages').after($('alPage'));   // đưa khung chi tiết ra ngoài trước khi vẽ lại lưới
  $('alPages').innerHTML=pages().map(p=>{const cs=TV.uniq(p.cs()),g=cs.filter(c=>TV.box(c)>=4);
    const lv=/^hsk:/.test(p.id)&&TV.LVC?TV.LVC[p.id.slice(4)]:'';   // trang HSK mang màu của cấp
    return '<button class="alp" type="button" data-al="'+p.id+'" aria-expanded="'+(alOpen===p.id)+'"'+(lv?' data-lvc style="--ac:var(--'+lv+')"':'')+'><span class="t"><span>'+(lv?'<i class="lvdot"></i>':'')+esc(p.t)+'</span><span>'+g.length+'/'+cs.length+' tem</span></span>'+
      '<span class="pv">'+(g.length?g.slice(-4).map((c,i)=>tem(c,kindOf(p.id),i,pageLv(p.id))).join(''):temQ(kindOf(p.id)))+'</span>'+
      '<span class="bar"><i style="width:'+(cs.length?g.length/cs.length*100:0)+'%"></i></span></button>'}).join('');
  if(alOpen)openPage(alOpen,true);
}
function openPage(id,keep){
  const p=pages().find(x=>x.id===id);if(!p){$('alPage').hidden=true;return}
  alOpen=id;const cs=TV.uniq(p.cs()),g=cs.filter(c=>TV.box(c)>=4),left=cs.length-g.length;
  $('alPage').innerHTML='<h3>'+esc(p.t)+'</h3><p class="sub">'+g.length+' tem vàng'+(left?' · còn '+left+' tem chưa có':' · đủ trọn trang, giỏi quá!')+'</p>'+
    (g.length?'<div class="tems">'+g.map((c,i)=>tem(c,kindOf(id),i,pageLv(id))).join('')+'</div>':'<p class="sub">Trang này chưa có tem nào. Học các thẻ của bộ này cho tới khi lên hộp <span lang="zh">熟</span> là có tem.</p>')+
    '<div class="acts">'+(left?'<button class="btn hot" type="button" data-alstudy="'+id+'">Học để lấy tem (20 thẻ)</button>':'')+'<button class="btn sec" type="button" data-alclose>Đóng trang</button></div>';
  $('alPage').hidden=false;
  document.querySelectorAll('[data-al]').forEach(b=>{b.setAttribute('aria-expanded',b.dataset.al===id);if(b.dataset.al===id)b.after($('alPage'))});   // mở ngay dưới ô vừa bấm
  if(!keep)$('alPage').scrollIntoView({block:'nearest',behavior:reduced()?'auto':'smooth'});
}
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-al]');if(a){alOpen===a.dataset.al?(alOpen='',$('alPage').hidden=true,renderAlbum()):openPage(a.dataset.al);return}
  if(e.target.closest('[data-alclose]')){alOpen='';$('alPage').hidden=true;renderAlbum();return}
  const s=e.target.closest('[data-alstudy]');if(s){const p=pages().find(x=>x.id===s.dataset.alstudy);if(!p)return;
    const cs=TV.uniq(p.cs()).filter(c=>TV.box(c)<4).sort((x,y)=>TV.box(y)-TV.box(x));   // thẻ đã học dở lên trước, rồi thẻ mới
    TV.start(cs.slice(0,20),'Album · '+p.t)}
});

// ---------- Thử thách 60 giây ----------
const TK='cb-tuvung-thach';
let T={best:{},ten:''};try{Object.assign(T,JSON.parse(localStorage.getItem(TK))||{})}catch(e){}
const tsave=()=>{try{localStorage.setItem(TK,JSON.stringify(T))}catch(e){}};
const SEC=60,BONUS=3;
function poolLabel(id){
  if(/^hsk:[^:]+$/.test(id))return 'HSK '+TV.lvName(id.slice(4));
  if(id==='zz:*')return '字族 Họ chữ';
  const d=TV.deck(id);return d?d.name:'';
}
function poolCards(id){
  let cs=/^hsk:[^:]+$/.test(id)?TV.hskWords(id.slice(4)):((TV.deck(id)||{}).cards||[]);
  cs=TV.uniq(cs).filter(c=>c.m);
  return new Set(cs.map(c=>c.m)).size>=4?cs:[];
}
const needs79=id=>/^hsk:7-9/.test(id)?TV.ensure79():Promise.resolve();
function renderPools(){
  if(!$('thPools'))return;
  const ids=[];
  if(TV.S.last&&!/^hsk:/.test(TV.S.last)&&poolCards(TV.S.last).length>=8)ids.push(TV.S.last);
  TV.LEVELS.forEach(l=>ids.push('hsk:'+l));ids.push('zz:*');
  $('thPools').innerHTML=ids.map(id=>'<button class="tab" type="button" data-th="'+esc(id)+'">'+esc(poolLabel(id)||id)+
    (T.best[id]?'<small>kỷ lục '+T.best[id]+'</small>':'')+'</button>').join('');
}
// số ngẫu nhiên có hạt giống: cùng hạt giống + cùng bộ từ → cùng thứ tự câu hỏi (để thách đấu công bằng)
function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
let G=null;   // ván đang chơi
function play(id,seed,rival){
  needs79(id).then(()=>{
    const cs=poolCards(id);if(!cs.length){alert('Bộ từ này chưa đủ nghĩa tiếng Việt để thử thách.');return}
    seed=seed||((Math.random()*2**31)|0);const r=rng(seed);
    const order=cs.slice();for(let i=order.length-1;i>0;i--){const j=r()*(i+1)|0;[order[i],order[j]]=[order[j],order[i]]}
    G={id,seed,rival,r,order,i:-1,score:0,combo:0,best:0,miss:[],end:0,lock:false,raf:0,cur:null,opts:[]};
    $('home').hidden=true;$('studyView').hidden=true;$('thachView').hidden=false;$('thPlay').hidden=false;$('thRes').hidden=true;
    $('thName').textContent=poolLabel(id);$('thScore').textContent='0';$('thCombo').textContent='0';scrollTo(0,0);
    G.end=performance.now()+SEC*1000;next();tick();
  });
}
function next(){
  const g=G;g.i++;const c=g.order[g.i%g.order.length];g.cur=c;
  const o=[c.m];let guard=0;while(o.length<4&&guard++<200){const x=g.order[g.r()*g.order.length|0];if(x.m&&!o.includes(x.m))o.push(x.m)}
  for(let i=o.length-1;i>0;i--){const j=g.r()*(i+1)|0;[o[i],o[j]]=[o[j],o[i]]}
  g.opts=o;g.lock=false;
  $('thQ').className='th-q';$('thQ').innerHTML='<div class="hz'+(c.w.length>3?' long':'')+'" lang="zh">'+esc(c.w)+'</div><div class="py"></div>';
  $('thCh').innerHTML=o.map((m,i)=>'<button class="ch" type="button" data-thi="'+i+'">'+esc(m)+'</button>').join('');
}
function pick(i){
  const g=G;if(!g||g.lock||!g.opts[i])return;g.lock=true;const c=g.cur,ok=g.opts[i]===c.m;
  [...$('thCh').children].forEach((b,j)=>{b.disabled=true;if(g.opts[j]===c.m)b.classList.add('ok');else if(j===i)b.classList.add('bad')});
  $('thQ').classList.add(ok?'ok':'bad');$('thQ').querySelector('.py').textContent=c.p;
  if(ok){g.score++;g.combo++;g.best=Math.max(g.best,g.combo);
    if(g.combo%5===0){g.end+=BONUS*1000;$('thQ').insertAdjacentHTML('beforeend','<span class="th-pop">+'+BONUS+' giây</span>')}}
  else{g.combo=0;if(!g.miss.includes(c))g.miss.push(c);if(navigator.vibrate)navigator.vibrate(40)}
  $('thScore').textContent=g.score;$('thCombo').textContent=g.combo;
  setTimeout(()=>{if(G===g&&performance.now()<g.end)next()},ok?320:900);
}
function tick(){
  const g=G;if(!g)return;const left=Math.max(0,g.end-performance.now());
  $('thTime').firstElementChild.style.width=Math.min(100,left/(SEC*10))+'%';$('thTime').classList.toggle('low',left<10000);
  $('thSec').textContent=Math.ceil(left/1000)+' giây';
  if(left<=0){finish();return}
  g.raf=requestAnimationFrame(tick);
}
function finish(){
  const g=G;if(!g)return;cancelAnimationFrame(g.raf);G=null;
  const old=T.best[g.id]||0,rec=g.score>old;if(rec){T.best[g.id]=g.score;tsave()}
  const rv=g.rival;let vs='';
  if(rv){const who=rv.name?esc(rv.name):'Bạn của bạn';
    vs='<div class="vs">'+who+': '+rv.score+' điểm · Bạn: '+g.score+' điểm<br>'+(g.score>rv.score?'Bạn thắng rồi! Gửi lại link để thách lại nhé.':g.score===rv.score?'Hoà! Chơi lại để phân thắng thua.':'Chưa vượt được. Chơi lại cùng bộ câu hỏi này nhé.')+'</div>'}
  $('thPlay').hidden=true;const b=$('thRes');b.hidden=false;
  b.innerHTML='<div class="big">'+g.score+'</div><h2>điểm · '+esc(poolLabel(g.id))+'</h2>'+
    '<p class="sub">'+(rec&&old?'Kỷ lục mới! (cũ: '+old+')':rec?'Kỷ lục đầu tiên của bạn với bộ này.':'Kỷ lục của bạn: '+old)+' · Chuỗi dài nhất: '+g.best+'</p>'+vs+
    (g.miss.length?'<p class="sub">Từ trả lời sai:</p><div class="miss" lang="zh">'+g.miss.map(c=>'<span>'+esc(c.w)+'</span>').join('')+'</div>':'')+
    '<div class="name"><label for="thTen">Tên hiện trong link:</label><input id="thTen" maxlength="20" placeholder="tuỳ chọn" value="'+esc(T.ten||'')+'"></div>'+
    '<div class="acts"><button class="btn hot" type="button" id="thShare">Gửi thách đấu</button>'+
    (rv?'<button class="btn sec" type="button" id="thSame">Chơi lại câu hỏi này</button>':'')+
    '<button class="btn sec" type="button" id="thAgain">Chơi ván mới</button>'+
    (g.miss.length?'<button class="btn sec" type="button" id="thLearn">Ôn '+g.miss.length+' từ sai</button>':'')+
    '<button class="btn sec" type="button" id="thHome">Về kệ</button></div><p id="thMsg" role="status"></p>';
  if(rec||(rv&&g.score>rv.score))confetti();
  $('thTen').onchange=()=>{T.ten=$('thTen').value.trim().slice(0,20);tsave()};
  $('thShare').onclick=()=>share(g);
  $('thAgain').onclick=()=>play(g.id,0,null);
  if($('thSame'))$('thSame').onclick=()=>play(g.id,g.seed,rv);
  if($('thLearn'))$('thLearn').onclick=()=>{$('thachView').hidden=true;TV.start(g.miss,'Từ sai · Thử thách')};
  $('thHome').onclick=home;
}
function share(g){
  T.ten=($('thTen').value||'').trim().slice(0,20);tsave();
  const url=location.origin+location.pathname+'#thach/'+encodeURIComponent(g.id)+'/'+g.seed+'/'+g.score+(T.ten?'/'+encodeURIComponent(T.ten):'');
  const text=(T.ten||'Mình')+' được '+g.score+' điểm Thử thách 60 giây · '+poolLabel(g.id)+' ở 词汇盒 của cô Lã. Bạn thử vượt qua nhé!';
  const done=m=>{$('thMsg').textContent=m};
  if(navigator.share)navigator.share({title:'Thử thách 60 giây · 词汇盒',text,url}).then(()=>done('Đã gửi.')).catch(()=>{});
  else if(navigator.clipboard)navigator.clipboard.writeText(text+' '+url).then(()=>done('Đã chép link. Dán vào Zalo hoặc Messenger để gửi cho bạn.'),()=>showLink(url));
  else showLink(url);
}
function showLink(url){if(!$('thLink'))$('thMsg').insertAdjacentHTML('afterend','<input class="link" id="thLink" readonly>');$('thLink').value=url;$('thLink').select();$('thMsg').textContent='Bấm giữ vào ô dưới để chép link.'}
function home(){if(G){cancelAnimationFrame(G.raf);G=null}$('thachView').hidden=true;$('home').hidden=false;TV.render();scrollTo(0,0)}
$('thQuit').addEventListener('click',home);
$('thCh').addEventListener('click',e=>{const b=e.target.closest('[data-thi]');if(b)pick(+b.dataset.thi)});
document.addEventListener('keydown',e=>{if($('thachView').hidden||$('thPlay').hidden)return;if(/^[1-4]$/.test(e.key))pick(+e.key-1)});
$('thPools').addEventListener('click',e=>{const b=e.target.closest('[data-th]');if(b)play(b.dataset.th,0,null)});

// link thách đấu: #thach/<bộ từ>/<hạt giống>/<điểm>/<tên>
let invite=null;
function readInvite(){
  const h=location.hash.slice(1).split('/');if(h[0]!=='thach'||!h[1])return;
  const id=decodeURIComponent(h[1]),seed=+h[2]||0,score=+h[3]||0,name=h[4]?decodeURIComponent(h[4]).slice(0,20):'';
  history.replaceState(null,'',location.pathname);
  needs79(id).then(()=>{
    if(!poolCards(id).length)return;invite={id,seed,score,name};
    $('thInvite').innerHTML='<div class="th-invite"><p><b>'+(name?esc(name):'Một bạn')+'</b> thách bạn: <b>'+score+' điểm</b> trong 60 giây · '+esc(poolLabel(id))+'. Bạn sẽ gặp đúng các câu hỏi bạn ấy đã gặp.</p>'+
      '<button class="btn hot" type="button" id="thAccept">Nhận thách đấu</button><button class="btn sec" type="button" id="thLater">Để sau</button></div>';
    $('thInvite').hidden=false;$('thPanel').scrollIntoView({block:'start'});
    $('thAccept').onclick=()=>{const v=invite;$('thInvite').hidden=true;invite=null;play(v.id,v.seed,{score:v.score,name:v.name})};
    $('thLater').onclick=()=>{$('thInvite').hidden=true;invite=null};
  });
}

window.TVX={confetti,tem,render(){renderAlbum();renderPools()}};
TVX.render();readInvite();addEventListener('hashchange',readInvite);
})();
