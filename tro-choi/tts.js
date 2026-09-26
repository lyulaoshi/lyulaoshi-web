// Giọng đọc tiếng Trung có sẵn trong máy (Web Speech API). Ưu tiên giọng Google, rồi Tingting, rồi giọng zh-CN bất kỳ.
// Không có giọng tiếng Trung thì TTS.can() = false và các nút loa tự ẩn.
window.TTS=(function(){
  const ok='speechSynthesis' in window;
  // chữ đa âm: nếu từ chỉ có 1 chữ này thì máy dễ đọc nhầm âm → không đọc
  const POLY='长行了得觉乐还重为和发都好只中地的教数调种背便差处当倒更干空累难片强少相应着转传分几假间将降结卡看量落没冲参藏称乘答担弹恶划会济奇系血要载曾朝兴';
  let voice=null;
  function pick(){
    if(!ok)return;
    const vs=speechSynthesis.getVoices().filter(v=>/^(zh|cmn)/i.test(v.lang)&&!/TW|HK|yue/i.test(v.lang));
    voice=vs.find(v=>/google/i.test(v.name))||vs.find(v=>/tingting/i.test(v.name))||vs.find(v=>/zh[-_]cn/i.test(v.lang))||vs[0]||null;
  }
  if(ok){pick();speechSynthesis.addEventListener('voiceschanged',pick)}
  return{
    ready:()=>ok&&!!voice,
    can:w=>ok&&!!voice&&!!w&&!(w.length===1&&POLY.includes(w)),
    say(w,rate){
      if(!this.can(w))return;
      speechSynthesis.cancel();
      const u=new SpeechSynthesisUtterance(w);u.lang=voice.lang||'zh-CN';u.voice=voice;u.rate=rate||.85;
      speechSynthesis.speak(u);
    },
    // nút loa nhỏ: <button class="spk" data-say="你好">🔊</button>
    btn:w=>window.TTS.can(w)?'<button type="button" class="spk" data-say="'+w+'" aria-label="Nghe đọc '+w+'">🔊</button>':''
  };
})();
document.addEventListener('click',e=>{const b=e.target.closest('.spk');if(b){e.preventDefault();TTS.say(b.dataset.say)}});
