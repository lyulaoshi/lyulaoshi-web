// Bài ngữ pháp 【三12】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三12", title:"程度副词：比较、更加、还、相当", vi:"Phó từ mức độ 比较, 更加, 还, 相当 — khá, càng, còn, tương đối", tag:"词类 · 副词",
goals:[
 "Dùng <b>比较</b> (khá, tương đối) — không phải “so sánh”.",
 "Dùng <b>更加</b> (càng … hơn) và <b>还³</b> (còn … hơn, khá) trong so sánh.",
 "Dùng <b>相当</b> (khá là, tương đối) cho mức độ cao."],
intro:"Bốn phó từ mức độ HSK 3, đều đứng <b>trước tính từ / động từ tâm lý</b>.",
rules:[
 {t:"比较 / 相当 + Adj: khá, tương đối", sub:"比较 · 相当", fx:[["比较 / 相当",null],["Tính từ / 喜欢…",""]], mean:"相当 mức độ cao hơn 比较.",
  ex:[["我[比较]喜欢游泳。","Wǒ bǐjiào xǐhuan yóuyǒng.","Tôi khá thích bơi.","等级标准"],
      ["这个公园的景色[相当]漂亮。","Zhège gōngyuán de jǐngsè xiāngdāng piàoliang.","Phong cảnh công viên này khá đẹp.","等级标准"]]},
 {t:"更加 / 还 + Adj: càng, còn … hơn", sub:"更加 · 还³", fx:[["(比 B)",""],["更加 / 还",null],["Tính từ",""]], mean:"更加 trang trọng hơn 更.",
  ex:[["她以前学习就很努力，现在[更加]努力了。","Tā yǐqián xuéxí jiù hěn nǔlì, xiànzài gèngjiā nǔlì le.","Trước đây cô ấy học đã rất chăm, giờ càng chăm hơn.","等级标准"],
      ["这个房间比那个房间[还]干净。","Zhège fángjiān bǐ nàge fángjiān hái gānjìng.","Phòng này còn sạch hơn phòng kia."]]}],
cmp:[
 {vn:"Tôi khá thích bơi.", zh:"我[比较]喜欢游泳。", py:"Wǒ bǐjiào xǐhuan yóuyǒng.", ok:true, why:"比较 ở đây = “khá”, không phải “so sánh”."}],
ex:[
 ["今天[比较]冷。","Jīntiān bǐjiào lěng.","Hôm nay khá lạnh."],
 ["他的中文说得[相当]好。","Tā de Zhōngwén shuō de xiāngdāng hǎo.","Anh ấy nói tiếng Trung khá giỏi."],
 ["雨下得[更加]大了。","Yǔ xià de gèngjiā dà le.","Mưa càng to hơn."]],
errs:[
 {bad:"今天比较很冷。", good:"今天比较冷。", why:"Chỉ dùng một phó từ mức độ."},
 {bad:"这个房间比那个房间很干净。", good:"这个房间比那个房间还干净。", why:"Câu 比 dùng 还 / 更, không dùng 很."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay khá lạnh.", o:["今天比较冷。","今天比较很冷。","今天冷比较。"], a:0, why:"比较 + Adj."},
  {q:"Phòng này còn sạch hơn phòng kia.", o:["这个房间比那个房间很干净。","这个房间比那个房间还干净。","这个房间还比那个房间干净很。"], a:1, why:"比 B 还 Adj."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","比较","喜欢","游泳"], a:"我比较喜欢游泳。", vi:"Tôi khá thích bơi."},
  {w:["这个公园的","景色","相当","漂亮"], a:"这个公园的景色相当漂亮。", vi:"Phong cảnh công viên này khá đẹp."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Anh ấy nói tiếng Trung khá giỏi.", a:"他的中文说得相当好。/ 他中文说得相当好。/ 他的中文说得比较好。"},
  {q:"Bây giờ cô ấy càng chăm chỉ hơn.", a:"现在她更加努力了。/ 她现在更加努力了。"}]}],
rel:["一09","二13","二58","一18"]
};
