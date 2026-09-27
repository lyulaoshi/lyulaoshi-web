// Bài ngữ pháp 【二70】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二70", title:"持续态：动词＋着", vi:"Thể tiếp tục — trạng thái hoặc hành động kéo dài (V + 着)", tag:"动作的态",
goals:[
 "Dùng <b>V + 着</b> nói <b>trạng thái</b> kéo dài (đèn sáng, máy tính bật).",
 "Dùng <b>V + 着 (+ 呢)</b> nói <b>hành động</b> đang kéo dài (tuyết đang rơi).",
 "Phủ định bằng <b>没 + V + 着</b> (hoặc bỏ 着)."],
intro:"Thể tiếp tục có hai nghĩa: <b>trạng thái được giữ nguyên</b> và <b>hành động đang kéo dài</b>. Trợ từ 着 xem thêm ở 【二33】.",
rules:[
 {t:"Trạng thái kéo dài", sub:"（1）表示状态的持续", fx:[["Chủ ngữ",""],["(一直)",""],["Động từ",""],["着",null]], mean:"",
  ex:[["灯一直亮[着]。/ 灯没亮[着]。","Dēng yìzhí liàng zhe. / Dēng méi liàng zhe.","Đèn vẫn sáng suốt. / Đèn không sáng.","等级标准"],
      ["电脑开[着]。/ 电脑没开[着]。","Diànnǎo kāi zhe. / Diànnǎo méi kāi zhe.","Máy tính đang bật. / Máy tính không bật.","等级标准"]]},
 {t:"Hành động kéo dài", sub:"（2）表示动作的持续", fx:[["Chủ ngữ",""],["Động từ",""],["着",null],["(tân ngữ) + 呢",""]], mean:"",
  ex:[["外边下[着]雪呢。/ 外边没下雪。","Wàibian xià zhe xuě ne. / Wàibian méi xià xuě.","Bên ngoài tuyết đang rơi. / Bên ngoài không có tuyết.","等级标准"],
      ["他们说[着]、笑[着]，不一会儿就到学校了。","Tāmen shuō zhe, xiào zhe, bù yíhuìr jiù dào xuéxiào le.","Họ vừa nói vừa cười, chẳng mấy chốc đã đến trường.","等级标准"]]}],
cmp:[
 {vn:"Đèn vẫn đang sáng.", zh:"灯还亮[着]。", py:"Dēng hái liàng zhe.", ok:true, why:"Trạng thái → V着."},
 {vn:"Bên ngoài tuyết đang rơi.", zh:"外边下[着]雪呢。", py:"Wàibian xià zhe xuě ne.", ok:true, why:"Hành động kéo dài → V着 + 呢."}],
ex:[
 ["门关[着]呢。","Mén guān zhe ne.","Cửa đang đóng."],
 ["她拿[着]一本书。","Tā ná zhe yì běn shū.","Cô ấy đang cầm một quyển sách."],
 ["孩子们唱[着]歌回家了。","Háizimen chàng zhe gē huí jiā le.","Bọn trẻ vừa hát vừa về nhà."]],
errs:[
 {bad:"灯不亮着。", good:"灯没亮着。", why:"Phủ định dùng 没."},
 {bad:"外边下雪着呢。", good:"外边下着雪呢。", why:"着 ngay sau động từ."},
 {bad:"灯在亮。", good:"灯亮着。", why:"Trạng thái dùng 着."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Máy tính không bật.", o:["电脑不开着。","电脑没开着。","电脑开着没。"], a:1, why:"没 + V着."},
  {q:"Bên ngoài tuyết đang rơi.", o:["外边下雪着呢。","外边下着雪呢。","外边着下雪呢。"], a:1, why:"V着 + O."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["灯","一直","亮","着"], a:"灯一直亮着。", vi:"Đèn vẫn sáng suốt."},
  {w:["她","拿","着","一本书"], a:"她拿着一本书。", vi:"Cô ấy đang cầm một quyển sách."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cửa đang đóng.", a:"门关着（呢）。"},
  {q:"Bọn trẻ vừa hát vừa về nhà.", a:"孩子们唱着歌回家了。"}]}],
rel:["二33","二56","一42","二71"]
};
