// Âm thanh trò Vượt ải — tổng hợp bằng Web Audio, không cần file âm thanh.
// AM.unlock() gọi trong lần bấm đầu tiên (trình duyệt chặn âm thanh trước khi người dùng bấm).
window.AM=(function(){
  let ac=null,master=null,nb=null,on=true;
  try{if(localStorage.getItem('va-sound')==='0')on=false}catch(e){}
  const ctx=()=>{
    if(!ac){try{ac=new(window.AudioContext||window.webkitAudioContext)();master=ac.createGain();master.gain.value=.55;master.connect(ac.destination);
      nb=ac.createBuffer(1,ac.sampleRate,ac.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}catch(e){return null}}
    if(ac.state==='suspended')ac.resume();return ac};
  const tone=(f,t0,d,type,v,f2)=>{const c=ctx();if(!c)return;const o=c.createOscillator(),g=c.createGain(),t=c.currentTime+t0;
    o.type=type||'square';o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);
    g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v||.25,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+d);
    o.connect(g);g.connect(master);o.start(t);o.stop(t+d+.03)};
  const noise=(t0,d,v,f0,f1)=>{const c=ctx();if(!c)return;const s=c.createBufferSource(),fl=c.createBiquadFilter(),g=c.createGain(),t=c.currentTime+t0;
    s.buffer=nb;s.loop=true;fl.type='bandpass';fl.frequency.setValueAtTime(f0,t);fl.frequency.exponentialRampToValueAtTime(f1,t+d);
    g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);s.connect(fl);fl.connect(g);g.connect(master);s.start(t);s.stop(t+d+.03)};
  const N=n=>440*Math.pow(2,(n-9)/12);   // n = số nửa cung tính từ nốt Đô giữa
  const S={
    pick:n=>tone(N(4+Math.min(n||0,8)*2),0,.08,'triangle',.3),     // đặt mảnh: cao dần
    unpick:()=>tone(N(-1),0,.07,'triangle',.22),
    choose:()=>tone(N(7),0,.06,'triangle',.28),
    fire:()=>{noise(0,.28,.3,3500,350);tone(260,0,.22,'sawtooth',.14,1100)},
    hit:()=>{noise(0,.2,.5,1800,120);tone(180,0,.2,'square',.32,55)},
    ok:c=>{const b=Math.min(c||0,7);[0,4,7].forEach((x,i)=>tone(N(x+b),i*.07,.16,'square',.2));tone(N(12+b),.21,.28,'triangle',.25)},
    no:()=>{tone(N(-5),0,.2,'sawtooth',.28,N(-9));tone(N(-10),.14,.34,'sawtooth',.28,N(-16))},
    hurt:()=>{noise(0,.3,.45,900,80);tone(140,0,.3,'sawtooth',.3,50)},
    tick:()=>tone(1000,0,.04,'square',.14),
    time:()=>{tone(220,0,.35,'sawtooth',.3,90);noise(0,.25,.3,600,100)},
    coin:()=>{tone(N(14),0,.07,'square',.18);tone(N(19),.07,.26,'square',.18)},
    appear:()=>{tone(110,0,.5,'sawtooth',.2,330);noise(0,.5,.18,300,2400);tone(N(-5),.35,.3,'square',.2)},
    clear:()=>{[0,4,7,12,16].forEach((x,i)=>tone(N(x),i*.09,.2,'square',.22));tone(N(19),.5,.5,'triangle',.3);noise(.45,.4,.15,4000,1500)},
    win:()=>{[0,4,7,12,7,12,16,19].forEach((x,i)=>tone(N(x),i*.11,.22,'square',.22));tone(N(24),.95,.7,'triangle',.3)},
    lose:()=>{[7,5,3,0].forEach((x,i)=>tone(N(x-12),i*.22,.34,'triangle',.3))}
  };
  return{
    play:(n,a)=>{if(on&&S[n])try{S[n](a)}catch(e){}},
    unlock:()=>ctx(),
    get on(){return on},
    toggle(){on=!on;try{localStorage.setItem('va-sound',on?'1':'0')}catch(e){};if(on){ctx();S.choose()}return on}
  };
})();
