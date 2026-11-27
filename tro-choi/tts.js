// Giọng đọc tiếng Trung dùng chung (语法盒, 游戏盒, 词汇盒, 文化盒, lịch trang chủ…).
// 1) Có file giọng Gemini trong kho /chung/am/<mã>.mp3 (bảng mã: /chung/giong-am.js, do tools/giong_kho.py sinh) → phát file.
// 2) Chưa có file → giọng có sẵn trong máy (Web Speech API): ưu tiên giọng Google, rồi Tingting, rồi giọng zh-CN bất kỳ.
// Không có file lẫn giọng máy thì TTS.can() = false và các nút loa tự ẩn.
// Mã = FNV-1a 32 bit trên khoa(chữ) — PHẢI giống hệt hàm khoa()/ma() trong tools/giong_kho.py.
(function(){   // nạp bảng mã kho giọng (đồng bộ khi trang đang tải để nút loa vẽ ngay biết câu nào có file)
  if(window.GIONG_AM!=null||document.querySelector('script[data-giong-am]'))return;
  const src="/chung/giong-am.js?v=576f25d0";
  if(document.readyState==='loading')document.write('<script data-giong-am src="'+src+'"><\/script>');
  else{const s=document.createElement('script');s.src=src;s.dataset.giongAm='';document.head.appendChild(s)}
})();
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
  // ---- kho giọng Gemini ----
  const khoa=t=>String(t||'').replace(/[\s　]+/g,'').replace(/[。！？!?.，,、…；;：:~～]+$/,'');
  function ma(t){const k=khoa(t);let h=0x811c9dc5;for(let i=0;i<k.length;i++){h^=k.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return('0000000'+h.toString(16)).slice(-8)}
  let AM=null;
  function bang(){if(AM&&AM.size)return AM;AM=new Set();const s=window.GIONG_AM||'';for(let i=0;i+8<=s.length;i+=8)AM.add(s.slice(i,i+8));return AM}
  const coFile=w=>{const h=ma(w);return bang().has(h)?h:''};
  let au=null;
  function dungAm(){if(au){try{au.pause()}catch(e){}}}
  if(ok){   // trang nào gọi speechSynthesis.cancel() để dừng đọc thì cũng dừng luôn file giọng Gemini
    const huy=speechSynthesis.cancel.bind(speechSynthesis);
    try{speechSynthesis.cancel=function(){dungAm();huy()}}catch(e){}
  }
  function may(w,rate){
    if(!ok||!voice)return;
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(w);u.lang=voice.lang||'zh-CN';u.voice=voice;u.rate=rate||.85;
    speechSynthesis.speak(u);
  }
  return{
    ready:()=>(ok&&!!voice)||bang().size>0,
    co:w=>!!w&&!!coFile(w),          // câu này đã có file giọng Gemini chưa
    can:w=>!!w&&!(w.length===1&&POLY.includes(w))&&(!!coFile(w)||(ok&&!!voice)),
    say(w,rate){
      if(!this.can(w))return;
      const h=coFile(w);
      if(!h){may(w,rate);return}
      if(ok)speechSynthesis.cancel();
      if(!au){au=new Audio();au.preload='auto'}
      dungAm();
      au.src='/chung/am/'+h+'.mp3';
      au.playbackRate=rate&&rate<.85?Math.max(.6,rate/.85):1;   // nút "đọc chậm" của một số trò
      au.onerror=()=>may(w,rate);
      const p=au.play();if(p&&p.catch)p.catch(e=>{if(e&&e.name!=='AbortError')may(w,rate)});
    },
    stop(){dungAm();if(ok)speechSynthesis.cancel()},
    // nút loa nhỏ: <button class="spk" data-say="你好">(icon loa)</button>
    btn:w=>window.TTS.can(w)?'<button type="button" class="spk" data-say="'+w+'" aria-label="Nghe đọc '+w+'"><svg class="lli" aria-hidden="true"><use href="/chung/ic.svg?v=39804db7#loa"/></svg></button>':''
  };
})();
document.addEventListener('click',e=>{const b=e.target.closest('.spk');if(b){e.preventDefault();TTS.say(b.dataset.say)}});
