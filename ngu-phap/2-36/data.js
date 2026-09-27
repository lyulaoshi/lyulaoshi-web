// Bài ngữ pháp 【二36】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二36", title:"叹词：喂", vi:"Thán từ 喂 — “A lô”, “Này”", tag:"词类 · 叹词",
goals:[
 "Dùng <b>喂</b> khi nghe / gọi điện thoại (A lô).",
 "Dùng 喂 để gọi, thu hút sự chú ý (này!).",
 "Nói các câu điện thoại cơ bản: 请问……在吗？您找哪位？"],
intro:"喂 là thán từ, đứng <b>đầu câu</b>, tách bằng dấu phẩy. Khi nghe điện thoại thường đọc <b>wéi</b> (thanh 2), khi gọi người khác (hơi thiếu lịch sự) đọc <b>wèi</b>.",
rules:[
 {t:"喂，……", sub:"喂", fx:[["喂",null],["，câu",""]], mean:"A lô / này.",
  ex:[["[喂]，是王老师吗？","Wéi, shì Wáng lǎoshī ma?","A lô, có phải thầy Vương không ạ?","等级标准"],
      ["[喂]，您找哪位？","Wéi, nín zhǎo nǎ wèi?","A lô, anh / chị tìm ai ạ?","等级标准"]]}],
notes:[
 {t:"Lịch sự", html:"gọi người lạ ngoài đường bằng 喂 nghe hơi cộc; nên dùng <span class='zh'>你好 / 请问 / 对不起</span>."}],
cmp:[
 {vn:"A lô, tôi là Lan.", zh:"[喂]，我是阿兰。", py:"Wéi, wǒ shì Ā Lán.", ok:true, why:"Mở đầu cuộc gọi."},
 {vn:"Cho hỏi, anh Vương có đó không ạ?", zh:"请问，小王在吗？", py:"Qǐngwèn, Xiǎo Wáng zài ma?", ok:true, why:"Câu điện thoại thường dùng."}],
ex:[
 ["[喂]，你好！请问李老师在吗？","Wéi, nǐ hǎo! Qǐngwèn Lǐ lǎoshī zài ma?","A lô, xin chào! Cho hỏi cô Lý có đó không ạ?"],
 ["[喂]，你听得见吗？","Wéi, nǐ tīng de jiàn ma?","A lô, bạn nghe thấy không?"],
 ["[喂]，你的书掉了！","Wèi, nǐ de shū diào le!","Này, sách của bạn rơi rồi!"]],
errs:[
 {bad:"喂吗？是王老师。", good:"喂，是王老师吗？", why:"喂 đứng đầu câu, tách bằng dấu phẩy."},
 {bad:"喂，您找谁位？", good:"喂，您找哪位？", why:"Hỏi lịch sự: 哪位."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"A lô, có phải thầy Vương không ạ?", o:["喂，是王老师吗？","是王老师喂吗？","喂吗，是王老师？"], a:0, why:"喂 đầu câu."},
  {q:"A lô, anh tìm ai ạ?", o:["喂，您找哪位？","喂，您找谁位？","您找哪位喂？"], a:0, why:"哪位."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["喂","您","找","哪位"], a:"喂，您找哪位？", vi:"A lô, anh / chị tìm ai ạ?"},
  {w:["喂","请问","李老师","在吗"], a:"喂，请问李老师在吗？", vi:"A lô, cho hỏi cô Lý có đó không ạ?"}]},
 {t:"C. Tập nói điện thoại", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"A lô, tôi là học sinh của cô Lã.", a:"喂，我是吕老师的学生。"},
  {q:"A lô, bạn nghe thấy không?", a:"喂，你听得见吗？"}]}],
rel:["一22","一34","二75","一45"]
};
