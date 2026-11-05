// Tiến độ 游戏盒: mỗi trò gọi TCX.xong() khi chơi hết một ván; sảnh đọc lại từ tc-plays (lưu trên máy).
// Bấm nút Thoát (#quitBtn) giữa chừng thì không tính, dù trò có hiện màn kết quả.
window.TCX=(function(){
  const KEY='tc-plays';let skip=false,lastAt=0;
  const load=()=>{let d={};try{d=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){}d.n=d.n||{};return d};
  const save=d=>{try{localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}};
  const day=()=>Math.floor((Date.now()+7*36e5)/864e5);   // ngày theo giờ Việt Nam
  document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('#quitBtn')){skip=true;setTimeout(()=>skip=false)}},true);
  function xong(){if(skip)return;const m=location.pathname.match(/tro-choi\/([^/]+)\//);if(!m)return;
    const now=Date.now();if(now-lastAt<5000)return;lastAt=now;   // cùng một màn kết quả gọi hai lần
    const h=m[1]+'/',d=load(),t=day();d.n[h]=(d.n[h]||0)+1;d.last=h;
    if(d.day!==t){d.streak=d.day===t-1?(d.streak||0)+1:1;d.day=t;d.done=[]}
    d.best=Math.max(d.best||0,d.streak||0);if(!(d.done||[]).includes(h))(d.done=d.done||[]).push(h);save(d)}
  return {xong,load,save,day};
})();
