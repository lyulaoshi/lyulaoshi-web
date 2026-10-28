(function(){const r=document.documentElement,b=document.getElementById('themeBtn');
 const cur=()=>r.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 const paint=()=>{b.innerHTML='<svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=c0a8a094#'+(cur()==='dark'?'mattroi':'trang')+'"></use></svg>'};paint();
 b.addEventListener('click',()=>{r.dataset.theme=cur()==='dark'?'light':'dark';try{localStorage.setItem('cb-theme',r.dataset.theme)}catch(e){};paint()});})();

(function(){
const $=id=>document.getElementById(id),BAI=VA_BAI,SACH=window.VA_SACH||[];
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const ico=(n,c)=>'<svg class="lli'+(c?' '+c:'')+'" aria-hidden="true"><use href="/chung/ic.svg?v=c0a8a094#'+n+'"></use></svg>';
const pun=py=>({'?':'？','!':'！'})[py.slice(-1)]||'。';
const puOf=it=>it.pu||pun(it.py||'');   // it.pu: dấu cuối câu khi chưa có pinyin
const wrongSet=()=>new Set(store.get('va-sai')||[]);
const saveWrong=s=>store.set('va-sai',[...s]);

// ---- nhân vật (vẽ tay bằng SVG)
const HERO='<svg viewBox="0 0 120 130" aria-hidden="true"><ellipse cx="60" cy="124" rx="34" ry="6" fill="rgba(0,0,0,.18)"/><rect x="34" y="68" width="52" height="46" rx="14" fill="#16949E"/><rect x="44" y="96" width="14" height="22" rx="6" fill="#2B2E45"/><rect x="62" y="96" width="14" height="22" rx="6" fill="#2B2E45"/><circle cx="60" cy="48" r="28" fill="#F6D2B0"/><path d="M30 42a30 30 0 0 1 60 0z" fill="#2B2E45"/><rect x="26" y="38" width="68" height="8" rx="4" fill="#2B2E45"/><circle cx="50" cy="54" r="3.6" fill="#2B2E45"/><circle cx="70" cy="54" r="3.6" fill="#2B2E45"/><path d="M52 64q8 7 16 0" stroke="#2B2E45" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="43" cy="62" r="4" fill="#F59A9A" opacity=".7"/><circle cx="77" cy="62" r="4" fill="#F59A9A" opacity=".7"/><rect x="86" y="74" width="5" height="34" rx="2" fill="#8B5A2B" transform="rotate(18 88 90)"/><path d="M96 104l6 14-9-8z" fill="#2B2E45"/></svg>';
const EY=(x,y,r)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="#fff"/><circle cx="'+(x-2)+'" cy="'+y+'" r="'+(r*.45)+'" fill="#2B2E45"/>';
const MON={
  1:{zh:'乱序怪',vi:'Quái Rối Chữ',c:'#7C6BD6',svg:c=>'<svg viewBox="0 0 120 130"><ellipse cx="60" cy="124" rx="38" ry="6" fill="rgba(0,0,0,.18)"/><path d="M18 100Q8 50 48 30Q98 16 106 64Q112 112 64 116Q26 120 18 100Z" fill="'+c+'"/><path d="M38 30q-8-16 6-20M58 22q0-18 12-18M80 28q10-14 20-8" stroke="'+c+'" stroke-width="6" fill="none" stroke-linecap="round"/>'+EY(46,60,11)+EY(76,60,11)+'<path d="M40 88l8-8 8 8 8-8 8 8 8-8 8 8" stroke="#2B2E45" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="56" y="50" font-size="15" fill="#fff" opacity=".6" font-family="serif">?</text></svg>'},
  2:{zh:'话痨怪',vi:'Quái Lắm Mồm',c:'#E0545F',svg:c=>'<svg viewBox="0 0 120 130"><ellipse cx="60" cy="124" rx="40" ry="6" fill="rgba(0,0,0,.18)"/><ellipse cx="60" cy="74" rx="48" ry="44" fill="'+c+'"/>'+EY(42,48,8)+EY(78,48,8)+'<path d="M24 70q36 40 72 0z" fill="#5b1620"/><path d="M30 72l7 12 7-12M50 74l7 14 7-14M70 74l7 12 7-12" fill="#fff"/><ellipse cx="60" cy="98" rx="16" ry="8" fill="#F08A9A"/></svg>'},
  3:{zh:'缺字怪',vi:'Quái Khuyết Chữ',c:'#16949E',svg:c=>'<svg viewBox="0 0 120 130"><ellipse cx="60" cy="124" rx="38" ry="6" fill="rgba(0,0,0,.18)"/><rect x="14" y="26" width="92" height="92" rx="26" fill="'+c+'"/>'+EY(60,56,17)+'<rect x="40" y="84" width="40" height="26" rx="4" fill="rgba(255,255,255,.9)" stroke="#2B2E45" stroke-width="3" stroke-dasharray="6 5"/><text x="52" y="105" font-size="20" fill="#2B2E45" font-family="serif">?</text><path d="M30 26l-6-16M90 26l6-16" stroke="'+c+'" stroke-width="6" stroke-linecap="round"/></svg>'},
  4:{zh:'翻译龙',vi:'Rồng Dịch Thuật',c:'#E7823A',svg:c=>'<svg viewBox="0 0 140 140"><ellipse cx="70" cy="134" rx="46" ry="7" fill="rgba(0,0,0,.2)"/><path d="M18 60l-14-26 34 14zM122 60l14-26-34 14z" fill="#C0392B"/><path d="M24 106Q10 56 50 34Q104 18 118 70Q126 120 74 126Q32 130 24 106Z" fill="'+c+'"/><path d="M42 36l-6-22 16 14zM98 36l6-22-16 14z" fill="#FBF1CF" stroke="#2B2E45" stroke-width="2"/><path d="M44 58l22 8M100 58l-22 8" stroke="#2B2E45" stroke-width="5" stroke-linecap="round"/>'+EY(52,72,10)+EY(88,72,10)+'<path d="M44 102q26 18 52 0" fill="#5b1620"/><path d="M52 104l5 8 5-8M72 104l5 8 5-8" fill="#fff"/><path d="M60 128l10-10 10 10" fill="#FBF1CF"/></svg>'},
  5:{zh:'错题魔',vi:'Ma Câu Sai',c:'#5b4b9c',svg:c=>MON[1].svg(c)}
};
const STAGES=[['sap','连词成句','Xếp câu',1,30],['hoi','回答问题','Trả lời câu hỏi',2,18],['dien','选词填空','Điền chỗ trống',3,12],['dich','翻译','Dịch',4,40]];
// CH: trang chơi riêng một chặng (xep-cau / tra-loi / dien-cho / dich-cau) đặt window.VA_CHANG='sap'|'hoi'|'dien'|'dich'
const CH=window.VA_CHANG||null,CHI=CH?STAGES.findIndex(s=>s[0]===CH):-1,hasCH=b=>!CH||b[CH].length>0,KB=b=>b.id+(CH?'~'+CH:'');
$('hx').innerHTML=HERO;
$('mons').innerHTML=STAGES.filter(s=>!CH||s[0]===CH).map(s=>'<div>'+MON[s[3]].svg(MON[s[3]].c)+'<br><span class="zh" lang="zh">'+MON[s[3]].zh+'</span><br>'+MON[s[3]].vi+'</div>').join('');

let S=null,bai=BAI[0],raf=0,sachId=null;
// mã câu hỏi duy nhất theo bài (Sổ câu sai lưu theo mã này)
BAI.forEach(b=>STAGES.forEach(([t])=>b[t].forEach(it=>{if(!it._n){it.id=b.id+'.'+it.id;it._n=1}})));

// ---- bản đồ
// Mở từ nút Chơi của 课本盒 (?bo=bai:tttc:bai-2): chỉ hiện ải của bài đó
const BO=(()=>{const [t,a,b]=(new URLSearchParams(location.search).get('bo')||'').split(':');return t==='bai'?BAI.find(x=>x.mon===a&&x.id===a+'-'+b&&hasCH(x)):null})();
function paintMap(){
  $('ais').innerHTML='';$('boBar').hidden=!BO;
  if(BO)$('boBar').innerHTML='<span>'+ico('the-bai')+' Bài đang chọn: <b class="zh" lang="zh">'+BO.zh+'</b> · '+BO.vi+'</span><a href="'+BO.lk+'">Về bài giảng</a><a href="./">Chơi tất cả các ải</a>';
  const SA=SACH.filter(s=>BAI.some(b=>b.mon===s.id&&hasCH(b)));
  sachId=BO?BO.mon:(sachId||store.get('va-sach')||(SA[0]||{}).id);
  if(!SA.some(s=>s.id===sachId))sachId=(SA[0]||{}).id;
  $('sach').hidden=!!BO||SA.length<2;
  $('sach').innerHTML=SA.map(s=>'<button type="button" class="chip" data-s="'+s.id+'" aria-pressed="'+(s.id===sachId)+'"><span class="zh" lang="zh">'+s.zh+'</span><small>'+s.vi+'</small></button>').join('');
  $('sach').querySelectorAll('.chip').forEach(c=>c.onclick=()=>{sachId=c.dataset.s;store.set('va-sach',sachId);paintMap()});
  const list=BO?[BO]:BAI.filter(b=>b.mon===sachId&&hasCH(b)).sort((a,b)=>a.n-b.n),got=new Set(store.get('va-huy')||[]);
  list.forEach(b=>{
    const best=store.get('va-sao-'+KB(b))||0,xu=store.get('va-xu-'+KB(b))||0,d=document.createElement('div');d.className='ai on';
    d.innerHTML='<span class="no">'+b.n+'</span><span><b>'+b.vi+'</b><br><span class="zh" lang="zh">'+b.zh+'</span>'+(xu?' <span class="muted">· kỷ lục '+xu+' xu</span>':'')+'</span><span class="st">'+[1,2,3].map(i=>ico(i<=best?'sao':'sao-rong',i<=best?'lli-vang':'')).join('')+'</span><span style="grid-column:2/-1"><button class="btn hot" type="button">'+(best?'Đánh lại':'Vào ải')+' '+ico('phat')+'</button></span>';
    d.querySelector('button').onclick=()=>{bai=b;AM.unlock();start('ai')};$('ais').appendChild(d);
  });
  let tot=0,have=0;
  $('huys').innerHTML=list.map(b=>'<div class="hrow"><b>Bài '+b.n+'</b>'+Object.keys(b.gr).map(k=>{const id=b.id+'.'+k,g=got.has(id);tot++;if(g)have++;return '<span class="hb'+(g?' got':'')+'" title="'+b.gr[k].vi+(g?'':' (chưa nhận)')+'">'+ico('huy-chuong')+'<span class="zh" lang="zh">'+b.gr[k].zh+'</span></span>'}).join('')+'</div>').join('');
  $('huyCnt').textContent='('+have+'/'+tot+')';
  if(CH){$('huys').hidden=true;$('huys').previousElementSibling.hidden=true}
  const m=allItems(),n=[...wrongSet()].filter(id=>m[id]&&(!CH||m[id].t===CH)).length;$('soCnt').textContent=n?'('+n+')':'';$('soBtn').disabled=!n;
}
function paintSnd(){$('sndBtn').innerHTML=ico(AM.on?'loa':'loa-tat')+' '+(AM.on?'Bật':'Tắt')}

// ---- bắt đầu
function allItems(){const m={};BAI.forEach(b=>STAGES.forEach(([t])=>b[t].forEach(it=>m[it.id]={t,item:it,b})));return m}
function start(mode){
  let q=[];
  if(mode==='ai'){STAGES.forEach(([t],si)=>CH&&t!==CH||shuffle(bai[t].slice()).forEach(it=>q.push({t,item:it,si,b:bai})))}
  else{const m=allItems();q=shuffle([...wrongSet()].filter(id=>m[id]&&(!CH||m[id].t===CH)).map(id=>({t:m[id].t,item:m[id].item,b:m[id].b,si:STAGES.findIndex(s=>s[0]===m[id].t)})))}
  if(!q.length){paintMap();return}
  S={mode,q,i:0,hearts:3,xu:0,ok:0,hints:0,combo:0,perG:{},wrong:[],stage:-1,hp:0,hpMax:1,tl:0,tmax:1,run:false,busy:true,token:0,order:[...new Set(q.map(x=>x.si))].sort()};   // order: các chặng thật sự có câu
  ['map','over'].forEach(i=>$(i).hidden=true);$('play').hidden=false;scrollTo(0,0);paintSnd();next();
}
function hud(){
  $('hearts').innerHTML=[0,1,2].map(i=>ico(i<S.hearts?'tim':'tim-rong',i<S.hearts?'lli-do':'')).join('');
  $('xu').innerHTML=ico('diem','lli-vang')+S.xu;
  $('combo').innerHTML=S.combo>=2?ico('lua','lli-do')+'x'+S.combo:'';
  const oi=S.order.indexOf(S.stage);document.querySelectorAll('#pips i').forEach((p,i)=>{p.hidden=S.mode==='so'||i>=S.order.length;p.className=i<oi?'done':i===oi?'on':''});
  $('mhpBar').style.width=Math.max(0,S.hp/S.hpMax*100)+'%';
}

// ---- màn mới / quái mới
async function next(){
  if(S.hearts<=0||S.i>=S.q.length)return finish();
  const st=S.q[S.i],tok=++S.token;$('fbbox').innerHTML='';S.busy=true;S.run=false;
  if(S.mode==='ai'&&st.si!==S.stage||S.mode==='so'&&S.stage<0){
    S.stage=S.mode==='ai'?st.si:0;
    const k=S.mode==='ai'?STAGES[st.si][3]:5,m=MON[k],boss=k===4;
    S.hpMax=S.hp=S.mode==='ai'?S.q.filter(x=>x.si===st.si).length:S.q.length;
    $('qbox').innerHTML='';$('arena').dataset.st=k;$('mon').className='mon'+(boss?' boss':'');
    $('mx').className='mx';$('mx').innerHTML=m.svg(m.c);
    $('mname').innerHTML='<span class="zh" lang="zh">'+m.zh+'</span>'+m.vi;hud();
    const sn=S.mode==='ai'?STAGES[st.si]:['','错题本','Sổ câu sai'];
    const ban=document.createElement('div');ban.className='banner';ban.innerHTML='<span class="zh" lang="zh">'+sn[1]+'</span><b>'+(S.mode==='ai'&&!CH?'Chặng '+(S.order.indexOf(st.si)+1)+' · ':'')+sn[2]+'</b><small>'+m.vi+(boss?' (trùm!)':'')+' xuất hiện</small>';
    $('arena').appendChild(ban);$('mx').classList.add('spawn');AM.play('appear');
    await sleep(1300);ban.remove();if(tok!==S.token)return;
  }
  hud();render(st);
}
const sayBtn=txt=>window.TTS&&TTS.can&&TTS.can(txt)?'<button type="button" class="spk2" data-say="'+txt+'">'+ico('loa')+' Nghe</button>':'';
function render(st){
  S.busy=false;S.tmax=S.tl=(STAGES[st.si]||STAGES[0])[4]+(st.item.boss?5:0);S.cur=st;
  ({sap:tiles,dich:tiles,hoi:hoi,dien:dien})[st.t](st);
  S.last=performance.now();cancelAnimationFrame(raf);S.run=true;raf=requestAnimationFrame(loop);
}

// ---- đồng hồ: quái tiến lại gần
function loop(now){
  if(!S||!S.run)return;
  const dt=Math.min(.1,(now-S.last)/1000);S.last=now;const before=Math.ceil(S.tl);S.tl-=dt;
  const f=Math.max(0,S.tl/S.tmax),aw=$('arena').clientWidth;
  $('mon').style.setProperty('--ap',Math.round((1-f)*aw*.36));$('tfill').style.transform='scaleX('+f+')';$('tbar').classList.toggle('low',S.tl<6);
  if(S.tl<=5&&Math.ceil(S.tl)<before&&S.tl>0)AM.play('tick');
  if(S.tl<=0){S.run=false;S.timeout&&S.timeout();return}
  raf=requestAnimationFrame(loop);
}
function lock(){S.run=false;S.busy=true;cancelAnimationFrame(raf)}

// ---- chặng 1 & 4: xếp mảnh
function tiles(st){
  const it=st.item,isD=st.t==='dich',ans=[];
  let bank=it.p.concat(isD?it.nhieu:[]).map((t,k)=>({t,k}));
  do shuffle(bank);while(!isD&&bank.map(x=>x.t).join('')===it.p.join(''));
  const full=it.p.join('')+puOf(it);
  $('qbox').innerHTML='<p class="prompt">'+(isD?(it.boss?'Trùm ra đề! Dịch sang tiếng Trung:':'Dịch sang tiếng Trung:'):'Xếp các mảnh thành câu đúng rồi bắn:')+'</p>'
   +(isD?'<p class="vibig">'+it.vi+'</p>':'<p class="muted">'+it.vi+'</p>')
   +'<div class="ansrow" id="ans" lang="zh"></div><div class="bank" id="bank" lang="zh"></div>'
   +'<div class="acts"><button class="btn hot" id="goBtn" type="button" disabled>Bắn! '+ico('ten-lua')+'</button>'+(it.py?'<button class="spk2" id="hintBtn" type="button">'+ico('mat')+' Gợi ý (−5 giây)</button>':'')+(isD?'':sayBtn(full))+'</div><p class="muted" id="hint" hidden>'+it.py+'</p>';
  const paint=()=>{
    $('ans').innerHTML=ans.length?ans.map((x,i)=>'<button type="button" class="tile" data-i="'+i+'">'+x.t+'</button>').join('')+'<span class="p">'+puOf(it)+'</span>':'<span class="ph">Chạm các mảnh bên dưới để xếp vào đây</span>';
    $('bank').innerHTML=bank.map((x,i)=>'<button type="button" class="tile" data-i="'+i+'">'+x.t+'</button>').join('');
    $('goBtn').disabled=isD?!ans.length:ans.length!==it.p.length;
    $('ans').querySelectorAll('.tile').forEach(b=>b.onclick=()=>{if(S.busy)return;bank.push(ans.splice(+b.dataset.i,1)[0]);AM.play('unpick');paint()});
    $('bank').querySelectorAll('.tile').forEach(b=>b.onclick=()=>{if(S.busy)return;ans.push(bank.splice(+b.dataset.i,1)[0]);AM.play('pick',ans.length);paint()});
  };paint();
  if($('hintBtn'))$('hintBtn').onclick=()=>{if($('hint').hidden){S.hints++;S.tl=Math.max(2,S.tl-5);$('hint').hidden=false;AM.play('choose')}};
  const done=(ok,to)=>{lock();$('ans').querySelectorAll('.tile').forEach((b,i)=>{b.disabled=true;b.classList.add(ans[i].t===it.p[i]?'ok':'no')});
    $('bank').innerHTML='';$('goBtn').hidden=true;if($('hintBtn'))$('hintBtn').hidden=true;judge(ok,st,{zh:full,py:it.py,vi:it.vi},to)};
  $('goBtn').onclick=()=>{if(S.busy)return;done(ans.map(x=>x.t).join('')===it.p.join(''))};
  S.timeout=()=>done(false,true);
}

// ---- chặng 2: quái hỏi, mình đáp
function hoi(st){
  const it=st.item,good=it.ok[Math.random()*it.ok.length|0];
  const opts=shuffle([[good,'',1],...it.bad.map(b=>[b[0],b[1],0])]);
  $('qbox').innerHTML='<p class="prompt">Quái hỏi, chọn câu đáp phù hợp:</p><div class="speech"><span class="who">'+it.who+'</span><p class="qzh" lang="zh">'+it.q+'</p>'+sayBtn(it.q)+'</div>'
   +'<div class="opts" id="opts" lang="zh">'+opts.map((o,i)=>'<button type="button" class="opt" data-i="'+i+'"><span class="kn">'+(i+1)+'</span>'+o[0]+'</button>').join('')+'</div>';
  const pick=(i,to)=>{if(S.busy)return;lock();const o=i<0?null:opts[i];
    document.querySelectorAll('#opts .opt').forEach((x,j)=>{x.disabled=true;if(opts[j][2])x.classList.add('ok')});
    if(o&&!o[2])document.querySelectorAll('#opts .opt')[i].classList.add('no');
    judge(!!(o&&o[2]),st,{zh:good,why:o&&!o[2]?o[1]:'',vi:'Hỏi: '+it.q},to)};
  document.querySelectorAll('#opts .opt').forEach(b=>b.onclick=()=>{AM.play('choose');pick(+b.dataset.i)});
  S.timeout=()=>pick(-1,true);
}

// ---- chặng 3: quái nuốt mất một từ
function dien(st){
  const it=st.item,o=shuffle(it.o.map((t,i)=>({t,ok:i===it.ok})));
  $('qbox').innerHTML='<p class="prompt">Quái nuốt mất một từ! Bắn đúng từ vào chỗ trống:</p><p class="qzh" lang="zh">'+it.s.replace('_','<span class="blank" id="bl">&nbsp;&nbsp;</span>')+'</p>'
   +'<div class="opts row" id="opts" lang="zh">'+o.map((x,i)=>'<button type="button" class="opt" data-i="'+i+'"><span class="kn">'+(i+1)+'</span>'+x.t+'</button>').join('')+'</div>';
  const pick=(i,to)=>{if(S.busy)return;lock();const x=i<0?null:o[i];
    document.querySelectorAll('#opts .opt').forEach((y,j)=>{y.disabled=true;if(o[j].ok)y.classList.add('ok')});
    if(x&&!x.ok)document.querySelectorAll('#opts .opt')[i].classList.add('no');$('bl').textContent=it.o[it.ok];$('bl').style.animation='none';
    judge(!!(x&&x.ok),st,{zh:it.s.replace('_',it.o[it.ok]),why:it.why},to)};
  document.querySelectorAll('#opts .opt').forEach(b=>b.onclick=()=>{AM.play('choose');pick(+b.dataset.i)});
  S.timeout=()=>pick(-1,true);
}

// ---- hiệu ứng trận đấu
const rel=(el)=>{const a=$('arena').getBoundingClientRect(),b=el.getBoundingClientRect();return{x:b.left-a.left,y:b.top-a.top,w:b.width,h:b.height}};
const fxPop=(txt,x,y,cls)=>{const d=document.createElement('div');d.className=cls||'dmg';d.textContent=txt;d.style.left=x+'px';d.style.top=y+'px';$('fx').appendChild(d);setTimeout(()=>d.remove(),950)};
const anim=(el,c,ms)=>{el.classList.remove(c);void el.offsetWidth;el.classList.add(c);setTimeout(()=>el.classList.remove(c),ms)};
// chờ hoạt ảnh xong, nhưng không đứng chờ mãi nếu trình duyệt tạm dừng hoạt ảnh (tab nền, cửa sổ mất nét)
const fin=(a,ms)=>Promise.race([a.finished,sleep(ms+200)]).catch(()=>{});
async function shoot(glyph,power){
  const h=rel($('hx')),m=rel($('mx')),s=document.createElement('div');s.className='shot';s.textContent=glyph;
  const sz=46+power*6;s.style.width=s.style.height=sz+'px';s.style.left=(h.x+h.w*.8)+'px';s.style.top=(h.y+h.h*.35)+'px';$('fx').appendChild(s);
  anim($('hx'),'jump',450);AM.play('fire');
  const dx=m.x+m.w*.3-(h.x+h.w*.8);
  await fin(s.animate([{transform:'translate(0,0) scale(.6)'},{transform:'translate('+dx+'px,-8px) scale(1) rotate(360deg)'}],{duration:420,easing:'ease-in'}),420);s.remove();
}
function sparks(n){const m=rel($('mx'));for(let i=0;i<n;i++){const e=document.createElement('div');e.className='sp';e.innerHTML=ico('sao');e.style.left=(m.x+m.w/2)+'px';e.style.top=(m.y+m.h/2)+'px';$('fx').appendChild(e);
  const a=Math.random()*6.28,d=50+Math.random()*80;e.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:'translate('+Math.cos(a)*d+'px,'+Math.sin(a)*d+'px) scale(.3)',opacity:0}],{duration:800+Math.random()*400}).finished.then(()=>e.remove())}}
async function lunge(){
  const m=rel($('mx')),h=rel($('hx'));
  await fin($('mx').animate([{transform:'translateX(0)'},{transform:'translateX('+(h.x+h.w*.6-m.x)+'px) scale(1.1)'},{transform:'translateX(0)'}],{duration:520,easing:'ease-in-out'}),520);
}

// ---- chấm
async function judge(ok,st,d,timeout){
  const it=st.item,g=st.b.gr[it.g],pg=S.perG[st.b.id+'.'+it.g]=S.perG[st.b.id+'.'+it.g]||{ok:0,all:0,g},ws=wrongSet(),tok=S.token;
  pg.all++;let line,gain=0,dead=false;
  if(ok){
    S.ok++;pg.ok++;S.combo++;ws.delete(it.id);gain=10+Math.round(S.tl)+Math.min(S.combo-1,5)*3;S.xu+=gain;
    line=VUI.dung(S.combo);AM.play('ok',S.combo);
    await shoot(g.zh[0],Math.min(S.combo,5));S.hp--;dead=S.hp<=0;
    const m=rel($('mx'));anim($('mx'),'hit',450);anim($('arena'),'shake',400);AM.play('hit');fxPop('+'+gain,m.x+m.w*.2,m.y,'dmg');setTimeout(()=>AM.play('coin'),160);
    const cm=VUI.combo(S.combo);if(cm)VUI.pop(cm,$('combo'),'good');
    if(window.TTS&&TTS.can&&d.zh&&st.t!=='hoi'&&AM.on)setTimeout(()=>TTS.say(d.zh.replace(/[？。]/g,'')),500);
  }else{
    line=timeout?'Hết giờ rồi, quái húc bạn!':VUI.sai(S.combo);S.combo=0;S.hearts--;S.wrong.push(it.id);ws.add(it.id);
    AM.play(timeout?'time':'no');await lunge();AM.play('hurt');anim($('hx'),'hurt',500);anim($('arena'),'flash',400);anim($('arena'),'shake',400);
  }
  saveWrong(ws);hud();
  if(dead){$('mx').classList.add('dead');AM.play('clear');sparks(16);}
  const last=S.hearts<=0||S.i+1>=S.q.length;
  $('fbbox').innerHTML='<div class="fb '+(ok?'ok':'no')+'"><div class="res">'+line+(ok?' · +'+gain+' xu':'')+'</div>'
   +(ok?'':'<div class="muted">Đáp án đúng:</div>')
   +'<div class="zh" lang="zh">'+d.zh+'</div>'+(d.py?'<div class="py">'+d.py+'</div>':'')+(d.vi&&st.t!=='hoi'?'<div>'+d.vi+'</div>':'')
   +(!ok&&d.why?'<div>'+d.why+'</div>':'')
   +'<div class="gr">Điểm ngữ pháp: <b lang="zh">'+g.zh+'</b> · '+g.ct+' <a href="'+st.b.lk+(g.s?'#s'+g.s:'')+'">Xem lại trong bài giảng →</a></div>'
   +'<div class="acts"><button class="btn hot" id="nextBtn" type="button">'+(last?'Xem kết quả':dead?'Quái tiếp theo':'Tiếp')+'</button></div></div>';
  const go=()=>{if(tok!==S.token)return;S.i++;next()};$('nextBtn').onclick=go;$('nextBtn').focus({preventScroll:true});
  if(ok)setTimeout(go,dead?2200:1700);   // đúng thì tự qua câu, sai thì chờ bấm để kịp đọc
}

// ---- kết quả
function finish(){
  const win=S.hearts>0,tot=S.q.length,acc=S.ok/tot,ai=S.mode==='ai';
  const stars=!win?0:acc>=.9&&!S.hints?3:acc>=.7?2:1;
  cancelAnimationFrame(raf);S.run=false;
  $('play').hidden=true;$('over').hidden=false;scrollTo(0,0);
  AM.play(win?'win':'lose');
  $('overZh').textContent=win?'通关':'再来';
  $('overTitle').textContent=!win?'Hết tim rồi, đánh lại nhé!':ai?CH?'Hạ gục '+MON[STAGES[CHI][3]].vi+'!':'Hạ gục cả '+S.order.length+' con quái!':'Dọn sạch Sổ câu sai!';
  $('overStars').innerHTML=ai?[1,2,3].map(i=>ico(i<=stars?'sao':'sao-rong',i<=stars?'lli-vang':'')).join(''):'';
  $('overXu').innerHTML=ico('diem','lli-vang')+S.xu+' xu';
  const rk=!win?VUI.rank(0):stars===3?['闯关王','Vua vượt ải!']:VUI.rank(stars);
  $('rank').innerHTML=VUI.rankHTML(rk,!win?0:stars);
  $('overInfo').textContent='Đúng '+S.ok+'/'+S.i+' câu'+(ai?' · '+S.hearts+' tim còn lại':'')+(S.hints?' · xem '+S.hints+' gợi ý':'');
  let nh='';
  if(ai){
    if(stars>(store.get('va-sao-'+KB(bai))||0))store.set('va-sao-'+KB(bai),stars);
    if(win&&S.xu>(store.get('va-xu-'+KB(bai))||0))store.set('va-xu-'+KB(bai),S.xu);
    const got=new Set(store.get('va-huy')||[]),fresh=[];
    Object.keys(S.perG).forEach(k=>{const p=S.perG[k];if(!CH&&win&&p.ok===p.all&&!got.has(k)){got.add(k);fresh.push(k)}});
    store.set('va-huy',[...got]);
    nh=fresh.map(k=>'<div class="newhuy">'+ico('huy-chuong','lli-vang')+' Huy hiệu mới: <span class="zh" lang="zh">'+S.perG[k].g.zh+'</span> · '+S.perG[k].g.huy+'</div>').join('');
  }
  $('newHuy').innerHTML=nh;
  const m=allItems(),seen=[...new Set(S.wrong)];
  $('missBox').hidden=!seen.length;
  $('missed').innerHTML=seen.map(id=>{const it=m[id].item,g=m[id].b.gr[it.g],z=it.p?it.p.join('')+puOf(it):it.q||it.s.replace('_',it.o[it.ok]);
    return '<li><span class="zh" lang="zh">'+z+'</span>'+(it.py?'<span class="py">'+it.py+'</span>':'')+'<a href="'+m[id].b.lk+(g.s?'#s'+g.s:'')+'">'+g.zh+' · xem bài →</a></li>'}).join('');
  $('againBtn').onclick=()=>start(S.mode);
  $('soBtn2').hidden=!wrongSet().size;
}
function toMap(){if(S){S.token++;lock()}$('play').hidden=true;$('over').hidden=true;$('map').hidden=false;paintMap()}
$('soBtn').onclick=()=>{AM.unlock();start('so')};$('soBtn2').onclick=()=>start('so');
$('mapBtn').onclick=toMap;$('quitBtn').onclick=toMap;
$('sndBtn').onclick=()=>{AM.toggle();paintSnd()};
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b)TTS.say(b.dataset.say)});
document.addEventListener('keydown',e=>{
  if($('play').hidden||!S)return;
  if(e.key==='Enter'){const b=$('nextBtn')||$('goBtn');if(b&&!b.disabled&&!b.hidden&&document.activeElement!==b)b.click()}
  else if(/^[1-4]$/.test(e.key)&&!S.busy){const o=document.querySelectorAll('#opts .opt')[+e.key-1];if(o)o.click()}
});
paintMap();paintSnd();
})();
