// Khung chia sẻ của trò Đố chữ: vẽ ảnh "lầy" (không bao giờ có đáp án) + gửi qua khung chia sẻ của máy.
// CHIASE.open({kind:'thach'|'sos'|'ketqua', q, name, me:{ok,t,g,s,p}, foe:{ten,ok,t,g,s,p}, win, chain:[tên…], text(), qr() link cho mã QR, qrCap, onName(v), onSent()})
window.CHIASE=(function(){
  const $=id=>document.getElementById(id),any=a=>a[Math.random()*a.length|0];
  // kiểu ảnh riêng của Đố chữ (khác trò Đoán từ): đèn lồng đố chữ, hồ sơ mật, bồ câu, khoa thi, bảng vàng, bục trao giải
  const THEMES={thach:[['chienthu','<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#cuon-giay></use></svg> Chiến thư'],['vodai','<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#gang-tay></use></svg> Võ đài'],['trangnguyen','<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#mu></use></svg> Khoa thi']],
    sos:[['denlong','<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#den-long></use></svg> Đèn đố chữ'],['homat','<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#kinh-lup></use></svg> Hồ sơ mật'],['bocau','<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#bo-cau></use></svg> Bồ câu đưa thư']],
    ketqua:[['kimbang','<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#cuon-giay></use></svg> Bảng vàng'],['bucvinh','<svg class=lli-vang aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#huy-chuong></use></svg> Bục trao giải']]};
  const TITLE={thach:'<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#kiem></use></svg> Gửi chiến thư! Chọn kiểu ảnh thật “lầy”',sos:'<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#cuu></use></svg> Gọi đồng đội! Chọn kiểu ảnh cầu cứu',ketqua:'<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#cup></use></svg> Khoe kết quả trận đấu'};
  let o=null,theme='',blob=null,url='',sent=false;
  // ---- khung (tạo một lần) ----
  const st=document.createElement('style');
  st.textContent='.shm{position:fixed;inset:0;z-index:60;background:rgba(20,20,40,.55);display:grid;place-items:center;padding:16px}.shm[hidden]{display:none}'+
    '.shc{position:relative;background:var(--card);border-radius:24px;box-shadow:var(--shadow);width:min(100%,480px);max-height:calc(100vh - 32px);overflow:auto;padding:20px 18px 18px;display:grid;gap:12px;justify-items:center;text-align:center}'+
    '.shc h2{font-size:18px;font-weight:800;margin:0 26px}.shc .chips{justify-content:center}'+
    '.shc input{width:100%;font:inherit;font-size:15px;color:var(--ink);background:var(--ground);border:2px solid var(--line);border-radius:14px;padding:9px 12px;text-align:center}'+
    '.shc input:focus{border-color:var(--peach);outline:none}'+
    '.shc img{width:100%;max-width:340px;aspect-ratio:4/5;border-radius:14px;box-shadow:0 6px 20px rgba(0,0,0,.18);background:var(--ground2)}'+
    '.shc p{margin:0}.shc .acts{justify-content:center}.shc .btn{font-size:14px;padding:8px 14px}'+
    '.shx{position:absolute;top:10px;right:10px;border:0;background:var(--ground2);color:var(--ink);width:36px;height:36px;border-radius:50%;font-size:16px;cursor:pointer}';
  document.head.appendChild(st);
  const box=document.createElement('div');box.className='shm';box.id='shModal';box.hidden=true;box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');
  box.innerHTML='<div class="shc"><button class="shx" type="button" id="shClose" aria-label="Đóng"><svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#sai></use></svg></button><h2 id="shTitle"></h2><div class="chips" id="shThemes"></div>'+
    '<input id="shName" type="text" maxlength="20" autocomplete="off" placeholder="Tên em để in lên ảnh (không bắt buộc)" aria-label="Tên in lên ảnh">'+
    '<img id="shImg" alt="Ảnh để chia sẻ"><p class="muted">Ảnh không có đáp án đâu, yên tâm gửi!</p>'+
    '<div class="acts"><button class="btn hot" type="button" id="shSend"><svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#gui></use></svg> Gửi ngay</button><button class="btn sec" type="button" id="shCopyImg"><svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#anh></use></svg> Chép ảnh</button><a class="btn sec" id="shSave" download="do-chu.png"><svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#tai-ve></use></svg> Lưu ảnh</a><button class="btn sec" type="button" id="shCopyTxt"><svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#chep></use></svg> Chép lời nhắn + link</button></div></div>';
  document.body.appendChild(box);
  // ---- vẽ ----
  let C,KAI,VI;const W=1080,H=1350;
  const RR=(x,y,w,h,r)=>{C.beginPath();C.roundRect?C.roundRect(x,y,w,h,r):C.rect(x,y,w,h)};
  function TXT(s,x,y,font,col,align,stroke,maxW){C.font=font;
    if(align!=='left'){let px=parseFloat(font.match(/([\d.]+)px/)[1]);while(px>12&&C.measureText(s).width>(maxW||W-110)){px*=.94;C.font=font.replace(/[\d.]+px/,px+'px')}}
    C.textAlign=align||'center';C.textBaseline='middle';if(stroke){C.lineJoin='round';C.lineWidth=stroke[1];C.strokeStyle=stroke[0];C.strokeText(s,x,y)}C.fillStyle=col;C.fillText(s,x,y)}
  // icon tự vẽ trên ảnh (bộ /chung/ic-ve.js?v=fc590457): ICO vẽ 1 icon; TI vẽ icon + chữ (icon đứng trước); TI2 đặt icon hai bên chữ
  const ICO=(n,x,y,s,col)=>{if(window.LLI)LLI.ve(C,n,x,y,s,col)};
  const TI=(n,s,x,y,font,col,align,stroke,z)=>{C.font=font;const px=parseFloat(font.match(/([\d.]+)px/)[1]);z=z||px*.95;const g=px*.3,w=Math.min(C.measureText(s).width,W-160-z);
    const x0=align==='left'?x:x-(w+z+g)/2;ICO(n,x0+z/2,y,z,col);TXT(s,x0+z+g,y,font,col,'left',stroke)};
  const TI2=(n,s,x,y,font,col,stroke,z)=>{TXT(s,x,y,font,col,'center',stroke);const px=parseFloat(C.font.match(/([\d.]+)px/)[1]);z=z||px;const w=C.measureText(s).width;ICO(n,x-w/2-z*.75,y,z,col);ICO(n,x+w/2+z*.75,y,z,col)};
  function wrapVi(s,x,y,maxW,font,col,lh){C.font=font;const ws=s.split(' '),ls=[];let cur='';ws.forEach(w=>{const t=cur?cur+' '+w:w;if(C.measureText(t).width>maxW&&cur){ls.push(cur);cur=w}else cur=t});ls.push(cur);
    ls.forEach((l,i)=>TXT(l,x,y+i*lh-(ls.length-1)*lh/2,font,col))}
  // câu đố: ngắt theo dấu phẩy rồi theo độ rộng, cỡ chữ tự nhỏ lại cho vừa khung
  function riddle(q,cx,cy,maxW,maxH,col){
    // mỗi vế (tách theo dấu phẩy) cố nằm trọn một dòng; không đủ chỗ mới ngắt giữa vế
    const parts=q.split(/(?<=[，；。、])/);let px=Math.min(110,Math.floor(maxW/Math.max(...parts.map(p=>p.length))*.98)),lines;
    const lay=()=>{C.font=px+'px '+KAI;lines=[];parts.forEach(p=>{let cur='';[...p].forEach(ch=>{if(C.measureText(cur+ch).width>maxW&&cur){lines.push(cur);cur=ch}else cur+=ch});if(cur)lines.push(cur)})};
    for(lay();px>30&&lines.length*px*1.3>maxH;){px-=4;lay()}
    lines.forEach((l,i)=>TXT(l,cx,cy+(i-(lines.length-1)/2)*px*1.3,px+'px '+KAI,col,'center',null,maxW+40))}
  const stat=r=>r.ok?r.t+' giây · '+(r.g?r.g+' gợi ý':'không gợi ý')+' · '+(r.s?'sai '+r.s:'không sai'):'bó tay';
  const chainTxt=()=>o.chain&&o.chain.length>1?'Chuỗi tiếp sức: '+o.chain.join(' → ')+' → bạn?':'';
  const footer=(y,col)=>TI('sau','lyulaoshi.com/tro-choi/do-chu · 吕老师汉语盒',W/2,y,'700 32px '+VI,col);
  function confetti(n,cols){for(let i=0;i<n;i++){C.save();C.translate(Math.random()*W,Math.random()*H);C.rotate(Math.random()*6.3);C.fillStyle=cols[i%cols.length];C.globalAlpha=.5;C.fillRect(-9,-14,18,28);C.restore()}}
  async function draw(){
    const cv=document.createElement('canvas');cv.width=W;cv.height=H;C=cv.getContext('2d');
    KAI=getComputedStyle(document.body).getPropertyValue('--kai');VI=getComputedStyle(document.body).getPropertyValue('--vi');
    const nm=o.name()||'Mình',T=theme,ch=chainTxt();
    if(T==='chienthu'){ // chiến thư: cuộn giấy + dấu son
      C.fillStyle='#7A2E1E';C.fillRect(0,0,W,H);
      const g=C.createLinearGradient(0,0,0,H);g.addColorStop(0,'#F7E9C6');g.addColorStop(1,'#EBD39C');RR(90,70,W-180,H-140,30);C.fillStyle=g;C.fill();
      C.fillStyle='#5A2A12';RR(60,50,W-120,40,20);C.fill();RR(60,H-90,W-120,40,20);C.fill();
      TI('kiem','CHIẾN THƯ',W/2,185,'900 96px Georgia,"Times New Roman",serif','#8B1E1E');
      TXT('战书',W/2,275,'56px '+KAI,'#8B1E1E');
      TXT('Từ: '+nm+'   ·   Gửi: bạn',W/2,345,'700 36px '+VI,'#5A2A12');
      C.strokeStyle='#8B1E1E';C.lineWidth=5;C.setLineDash([14,10]);RR(150,390,W-300,430,24);C.stroke();C.setLineDash([]);
      TXT('Đoán 1 chữ Hán:',W/2,430,'italic 700 32px Georgia,serif','#8B1E1E');
      riddle(o.q,W/2,630,W-360,330,'#2A1A10');
      TXT(nm+' giải trong '+stat(o.me),W/2,880,'800 40px '+VI,'#5A2A12');
      TXT('Bạn có dám nhận lời?',W/2,960,'900 58px '+VI,'#8B1E1E');
      C.save();C.translate(W-230,1085);C.rotate(-.18);RR(-85,-85,170,170,24);C.fillStyle='#C8342A';C.fill();TXT('挑战',0,-2,'78px '+KAI,'#FFF1D6');C.restore();
      if(ch)TI('lua',ch,W/2,1090,'700 30px '+VI,'#7A4A1E');
      footer(1195,'#5A2A12');
    }else if(T==='vodai'){ // võ đài: dây đài + đèn sân khấu
      C.fillStyle='#16132B';C.fillRect(0,0,W,H);
      const sp=C.createRadialGradient(W/2,520,40,W/2,520,620);sp.addColorStop(0,'rgba(255,230,150,.35)');sp.addColorStop(1,'rgba(255,230,150,0)');C.fillStyle=sp;C.fillRect(0,0,W,H);
      ['#E0545F','#FFFFFF','#3B87D6'].forEach((c,i)=>{C.strokeStyle=c;C.lineWidth=10;C.beginPath();C.moveTo(40,860+i*44);C.lineTo(W-40,860+i*44);C.stroke()});
      TI('gang-tay','VÕ ĐÀI CHỮ HÁN',W/2,120,'900 84px '+VI,'#FFD23F','center',['#000',10]);
      RR(120,200,W-240,500,30);C.fillStyle='rgba(255,255,255,.95)';C.fill();
      TXT('ĐỀ THI ĐẤU · đoán 1 chữ',W/2,245,'800 30px '+VI,'#7C6BD6');riddle(o.q,W/2,470,W-340,360,'#16132B');
      RR(70,740,420,100,20);C.fillStyle='#E0545F';C.fill();TXT(nm,280,770,'900 40px '+VI,'#fff','center',null,380);TXT(o.me.ok?o.me.t+' giây':'bó tay',280,815,'700 30px '+VI,'#FFE1E1');
      RR(W-490,740,420,100,20);C.fillStyle='#3B87D6';C.fill();TXT('Bạn?',W-280,770,'900 40px '+VI,'#fff');TXT('??? giây',W-280,815,'700 30px '+VI,'#DDEBFF');
      TXT('VS',W/2,790,'900 70px '+VI,'#FFD23F','center',['#000',8]);
      TXT('Lên đài không?',W/2,1040,'900 62px '+VI,'#fff');
      if(ch)TI('lua',ch,W/2,1120,'700 30px '+VI,'#FFD23F');
      footer(1250,'#B7B3E0');
    }else if(T==='denlong'){ // đèn đố chữ (猜灯谜): câu đố viết trên dải giấy treo dưới đèn lồng
      const sky=C.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#1B1036');sky.addColorStop(1,'#5A1424');C.fillStyle=sky;C.fillRect(0,0,W,H);
      for(let i=0;i<60;i++){C.fillStyle='rgba(255,230,160,'+(Math.random()*.6+.2)+')';C.beginPath();C.arc(Math.random()*W,Math.random()*520,Math.random()*2.5+1,0,7);C.fill()}
      C.strokeStyle='#C99A14';C.lineWidth=4;C.beginPath();C.moveTo(0,70);C.quadraticCurveTo(W/2,150,W,70);C.stroke();
      const lantern=(x,y,r,glow)=>{if(glow){const g=C.createRadialGradient(x,y,10,x,y,r*2.4);g.addColorStop(0,'rgba(255,120,60,.45)');g.addColorStop(1,'rgba(255,120,60,0)');C.fillStyle=g;C.fillRect(x-r*2.5,y-r*2.5,r*5,r*5)}
        C.strokeStyle='#C99A14';C.lineWidth=3;C.beginPath();C.moveTo(x,y-r*1.25);C.lineTo(x,y-r*1.9);C.stroke();
        C.fillStyle='#C99A14';C.fillRect(x-r*.45,y-r*1.12,r*.9,r*.2);C.fillRect(x-r*.45,y+r*.92,r*.9,r*.2);
        C.fillStyle='#E0302F';C.beginPath();C.ellipse(x,y,r*1.1,r,0,0,7);C.fill();
        C.strokeStyle='rgba(120,10,10,.45)';C.lineWidth=3;[-.55,0,.55].forEach(k=>{C.beginPath();C.ellipse(x,y,r*1.1*Math.abs(k)+2,r,0,0,7);C.stroke()});
        C.strokeStyle='#E8B830';C.lineWidth=4;for(let i=-3;i<=3;i++){C.beginPath();C.moveTo(x+i*6,y+r*1.12);C.lineTo(x+i*6,y+r*1.12+r*.55);C.stroke()}};
      lantern(170,190,70,true);lantern(W-170,190,70,true);lantern(W/2,215,105,true);
      TXT('灯',W/2,215,'110px '+KAI,'#FFE9A8');
      TI2('den-long','ĐÈN ĐỐ CHỮ',W/2,410,'900 76px '+VI,'#FFD23F',null,84);
      C.fillStyle='#FFF4D6';C.beginPath();C.moveTo(170,470);C.lineTo(W-170,470);C.lineTo(W-170,960);C.lineTo(W/2,1010);C.lineTo(170,960);C.closePath();C.fill();
      C.strokeStyle='#C8342A';C.lineWidth=6;C.stroke();
      TXT('谜面 · đoán 1 chữ Hán',W/2,515,'800 30px '+VI,'#C8342A');riddle(o.q,W/2,730,W-400,380,'#5A1424');
      TXT(nm+' đứng dưới đèn cả buổi mà chưa giải ra',W/2,1070,'800 38px '+VI,'#FFE9A8');
      TXT('Ai gỡ được đèn này?',W/2,1140,'900 56px '+VI,'#FFD23F');
      if(ch)TI('lua',ch,W/2,1210,'700 30px '+VI,'#FFC7A8');
      footer(1290,'#FFC7A8');
    }else if(T==='homat'){ // hồ sơ tuyệt mật: câu đố là mật mã cần giải
      C.fillStyle='#2B2A33';C.fillRect(0,0,W,H);
      RR(80,140,W-160,1080,24);C.fillStyle='#D8B47A';C.fill();RR(80,90,360,80,20);C.fill();
      RR(120,200,W-240,980,14);C.fillStyle='#FBF6EA';C.fill();
      C.strokeStyle='#8A8FA0';C.lineWidth=10;C.beginPath();C.moveTo(W-230,120);C.lineTo(W-230,250);C.arc(W-205,250,25,Math.PI,0,true);C.lineTo(W-180,150);C.stroke();
      TXT('HỒ SƠ #'+(1000+o.q.length*97%9000),260,130,'800 34px "Courier New",monospace','#5A4A2A');
      TXT('HỒ SƠ TUYỆT MẬT',W/2,300,'900 70px "Courier New",monospace','#2B2A33');
      C.save();C.translate(W-250,425);C.rotate(-.2);C.strokeStyle='#C8342A';C.lineWidth=8;RR(-120,-50,240,100,12);C.stroke();TXT('机密',0,-2,'900 64px '+KAI,'#C8342A');C.restore();
      TXT('Loại: MẬT MÃ CHỮ HÁN',180,400,'700 30px "Courier New",monospace','#5A4A2A','left');
      TXT('Đặc vụ: '+nm.slice(0,14),180,450,'700 30px "Courier New",monospace','#5A4A2A','left');
      C.strokeStyle='#2B2A33';C.lineWidth=3;C.setLineDash([10,8]);RR(170,510,W-340,420,16);C.stroke();C.setLineDash([]);
      TI2('tg-xuong','Mật mã cần giải',W/2,550,'800 30px "Courier New",monospace','#C8342A',null,24);riddle(o.q,W/2,740,W-400,330,'#1A1A22');
      TXT('Tình trạng: ĐẶC VỤ '+nm.toUpperCase()+' ĐÃ BÓ TAY',W/2,990,'900 36px "Courier New",monospace','#C8342A');
      TXT('Cần thám tử giải mã gấp!',W/2,1070,'900 54px '+VI,'#2B2A33');
      if(ch)TI('lua',ch,W/2,1135,'700 28px '+VI,'#5A4A2A');
      footer(1285,'#D8B47A');
    }else if(T==='bocau'){ // bồ câu đưa thư khẩn
      const sky=C.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#FFD9A8');sky.addColorStop(.6,'#BFE3FF');sky.addColorStop(1,'#8FC8F5');C.fillStyle=sky;C.fillRect(0,0,W,H);
      ICO('may',140,140,150,'#fff');ICO('may',W-150,300,120,'#fff');ICO('may',W-300,90,95,'#fff');
      ICO('bo-cau',W/2-40,190,190,'#1C4E80');
      C.strokeStyle='#8A6A3A';C.lineWidth=3;C.beginPath();C.moveTo(W/2-10,260);C.lineTo(W/2+10,330);C.stroke();
      TXT('THƯ KHẨN!',W/2,390,'900 88px '+VI,'#C8342A',null);
      C.save();C.translate(W/2,760);C.rotate(-.025);RR(-400,-310,800,620,18);C.fillStyle='#FFFDF6';C.shadowColor='rgba(0,0,0,.2)';C.shadowBlur=24;C.fill();C.restore();
      C.strokeStyle='#E0545F';C.lineWidth=8;C.setLineDash([36,18]);C.strokeRect(W/2-380,470,760,580);C.setLineDash([]);
      TXT('Gửi: bạn thân ơi',W/2-330,520,'italic 800 36px Georgia,serif','#7A4A1E','left');
      riddle(o.q,W/2,730,W-420,300,'#2A1A10');
      TXT('Cứu '+nm+' với! Đoán giúp 1 chữ Hán này',W/2,930,'800 36px '+VI,'#7A4A1E','center',null,700);
      TXT('— '+nm+' (đang rất hoang mang)',W/2+330,1000,'italic 700 32px Georgia,serif','#7A4A1E','right');
      TXT('Bồ câu bay mỏi cánh rồi, hồi âm nhanh nha!',W/2,1120,'900 42px '+VI,'#1C4E80');
      if(ch)TI('lua',ch,W/2,1190,'700 30px '+VI,'#1C4E80');
      footer(1285,'#1C4E80');
    }else if(T==='trangnguyen'){ // khoa thi chữ Hán: ai đỗ Trạng nguyên?
      C.fillStyle='#8B1E1E';C.fillRect(0,0,W,H);
      C.strokeStyle='#E8B830';C.lineWidth=12;C.strokeRect(36,36,W-72,H-72);C.lineWidth=3;C.strokeRect(60,60,W-120,H-120);
      TXT('科举',W/2,150,'96px '+KAI,'#FFD970');
      TI('mu','KHOA THI CHỮ HÁN',W/2,255,'900 70px '+VI,'#FFE9A8');
      RR(130,310,W-260,470,20);C.fillStyle='#FBF1D8';C.fill();C.strokeStyle='#E8B830';C.lineWidth=6;C.stroke();
      TXT('考题 · ĐỀ THI (đoán 1 chữ)',W/2,355,'800 30px '+VI,'#8B1E1E');riddle(o.q,W/2,570,W-340,340,'#3A1010');
      TXT('Thí sinh '+nm+' đã nộp bài:',W/2,850,'700 38px '+VI,'#FFE9A8');
      TXT(o.me.ok?o.me.t+' giây · '+(o.me.g?o.me.g+' gợi ý':'không gợi ý'):'bỏ giấy trắng',W/2,920,'900 56px '+VI,'#FFD970');
      TXT('Ai dám ứng thí, tranh ngôi Trạng nguyên?',W/2,1030,'900 44px '+VI,'#fff','center',null,W-180);
      if(ch)TI('lua',ch,W/2,1110,'700 30px '+VI,'#FFC7A8');
      footer(1250,'#FFD970');
    }else if(T==='kimbang'){ // bảng vàng 金榜: Trạng nguyên / Bảng nhãn
      C.fillStyle='#5A1010';C.fillRect(0,0,W,H);
      const g=C.createLinearGradient(0,0,0,H);g.addColorStop(0,'#C8342A');g.addColorStop(1,'#9A1E1E');RR(70,60,W-140,H-120,20);C.fillStyle=g;C.fill();
      C.strokeStyle='#E8B830';C.lineWidth=10;C.stroke();
      TXT('金榜',W/2,170,'120px '+KAI,'#FFD970');TXT('BẢNG VÀNG KHOA THI CHỮ HÁN',W/2,275,'900 44px '+VI,'#FFE9A8');
      RR(140,320,W-280,250,18);C.fillStyle='rgba(255,244,214,.95)';C.fill();riddle(o.q,W/2,445,W-340,200,'#3A1010');
      const a=o.foe,me=o.me,rows=o.win>0?[[nm,me,'Trạng nguyên'],[a.ten,a,'Bảng nhãn']]:o.win<0?[[a.ten,a,'Trạng nguyên'],[nm,me,'Bảng nhãn']]:
        (me.ok?[[a.ten,a,'Đồng Trạng nguyên'],[nm,me,'Đồng Trạng nguyên']]:[[a.ten,a,'Thi lại khoa sau'],[nm,me,'Thi lại khoa sau']]);
      rows.forEach(([n,r,t],i)=>{const y=640+i*190;RR(140,y,W-280,160,18);C.fillStyle=i===0&&o.win!==0?'#FFD970':'rgba(255,233,168,.85)';C.fill();
        TI(/Thi lại/.test(t)?'sach':'huy-chuong',t,180,y+50,'900 40px '+VI,i===0&&o.win!==0?'#8B1E1E':'#8B1E1E','left');TXT(n,180,y+112,'900 46px '+VI,'#3A1010','left');
        TXT(r.ok?r.t+' giây':'bó tay',W-180,y+50,'900 44px '+VI,'#3A1010','right');TXT(r.ok?r.p+' điểm':'0 điểm',W-180,y+112,'800 34px '+VI,'#8B1E1E','right')});
      TXT(o.win===0&&!me.ok?'Cả hai cùng trượt, câu này khó thật!':'Chúc mừng tân khoa! Bạn có dám dự khoa sau?',W/2,1080,'900 40px '+VI,'#FFE9A8','center',null,W-200);
      footer(1210,'#FFD970');
    }else{ // bục trao giải
      const g=C.createLinearGradient(0,0,0,H);g.addColorStop(0,'#2A1F5C');g.addColorStop(1,'#7C6BD6');C.fillStyle=g;C.fillRect(0,0,W,H);
      [[250,'rgba(255,255,255,.08)'],[W-250,'rgba(255,255,255,.08)']].forEach(([x,c])=>{C.fillStyle=c;C.beginPath();C.moveTo(x,0);C.lineTo(x-200,H);C.lineTo(x+200,H);C.closePath();C.fill()});
      confetti(90,['#FFD23F','#E0545F','#2E9E73','#3B87D6','#fff']);
      TI2('huy-chuong','LỄ TRAO GIẢI',W/2,120,'900 76px '+VI,'#FFD23F',['#2A1F5C',10],80);
      RR(120,180,W-240,230,24);C.fillStyle='rgba(255,255,255,.95)';C.fill();riddle(o.q,W/2,295,W-300,180,'#2A1F5C');
      const a=o.foe,me=o.me,tie=o.win===0,[p1,p2]=o.win<0?[[a.ten,a],[nm,me]]:[[nm,me],[a.ten,a]];
      const pod=(x,h,n,r,lab,col)=>{const top=1080-h;RR(x,top,340,h,14);C.fillStyle=col;C.fill();TXT(lab,x+170,top+70,'900 90px '+VI,'#fff');
        TXT(n,x+170,top-150,'900 48px '+VI,'#fff','center',null,330);TXT(r.ok?r.t+' giây · '+r.p+' điểm':'bó tay',x+170,top-90,'800 34px '+VI,'#FFE9A8','center',null,330);
        ICO(r.ok&&(tie||r===p1[1])?'vuong-mien':'mat-cuoi',x+170,top-230,96,'#FFD23F')};
      pod(160,tie?300:380,p1[0],p1[1],tie?'1':'1','#E8B830');pod(W-500,tie?300:220,p2[0],p2[1],tie?'1':'2',tie?'#E8B830':'#B8C0D0');
      C.fillStyle='#1B1440';C.fillRect(0,1080,W,H-1080);
      TXT(tie?(me.ok?'Đồng hạng nhất! Ngang tài ngang sức':'Cả hai cùng bó tay'):p1[0]+' giành huy chương vàng!',W/2,1160,'900 46px '+VI,'#FFD23F','center',null,W-120);
      footer(1270,'#C9C2F5');
    }
    const out=o.qr&&window.QRANH?await QRANH.frame(cv,o.qr(),o.qrCap||''):cv; // dải mã QR: quét là vào đúng câu đố
    return new Promise(res=>out.toBlob(res,'image/png'));
  }
  async function redraw(){blob=await draw();if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(blob);$('shImg').src=url;$('shSave').href=url;
    $('shCopyImg').innerHTML='<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#anh></use></svg> Chép ảnh';$('shCopyTxt').innerHTML='<svg class=lli aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#chep></use></svg> Chép lời nhắn + link'}
  const done=()=>{if(!sent){sent=true;o.onSent&&o.onSent()}};
  function open(opts){o=opts;sent=false;const th=THEMES[o.kind];theme=th[0][0];
    $('shTitle').innerHTML=TITLE[o.kind];$('shName').value=o.name();
    $('shThemes').innerHTML=th.map(([id,l])=>'<button type="button" class="chip" data-t="'+id+'" aria-pressed="'+(id===theme)+'">'+l+'</button>').join('');
    $('shThemes').querySelectorAll('.chip').forEach(c=>c.onclick=()=>{theme=c.dataset.t;$('shThemes').querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===c));redraw()});
    const f=new File([new Blob()],'x.png',{type:'image/png'});$('shSend').hidden=!(navigator.canShare&&navigator.canShare({files:[f]}));
    $('shCopyImg').hidden=!(navigator.clipboard&&window.ClipboardItem);
    box.hidden=false;document.body.style.overflow='hidden';redraw()}
  const close=()=>{box.hidden=true;document.body.style.overflow=''};
  let nmT;$('shName').addEventListener('input',()=>{o.onName($('shName').value);clearTimeout(nmT);nmT=setTimeout(redraw,300)});
  $('shSend').onclick=async()=>{if(!blob)return;const file=new File([blob],'do-chu-'+theme+'.png',{type:'image/png'});
    try{await navigator.share({files:[file],text:o.text()});done()}catch(e){}};
  $('shCopyImg').onclick=()=>navigator.clipboard.write([new ClipboardItem({'image/png':blob})]).then(()=>{$('shCopyImg').innerHTML='<svg class=lli-xanhla aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#tick></use></svg> Đã chép ảnh';done()},()=>$('shCopyImg').hidden=true);
  $('shSave').addEventListener('click',done);
  $('shCopyTxt').onclick=()=>{const t=o.text();(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>{$('shCopyTxt').innerHTML='<svg class=lli-xanhla aria-hidden=true><use href=/chung/ic.svg?v=c0a8a094#tick></use></svg> Đã chép, dán gửi bạn nhé';done()},()=>{prompt('Chép đoạn này gửi bạn:',t);done()})};
  $('shClose').onclick=close;box.addEventListener('click',e=>{if(e.target===box)close()});
  addEventListener('keydown',e=>{if(e.key==='Escape'&&!box.hidden)close()});
  return{open,close,any};
})();
