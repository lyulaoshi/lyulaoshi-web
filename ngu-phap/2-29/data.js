// Bài ngữ pháp 【二29】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二29", title:"连词：或、或者", vi:"Liên từ 或, 或者 — “hoặc” (trong câu kể)", tag:"词类 · 连词",
goals:[
 "Dùng <b>或者 / 或</b> nối hai khả năng trong <b>câu trần thuật</b>.",
 "Phân biệt với <b>还是</b> dùng trong <b>câu hỏi</b> 【一19】【一47】.",
 "Nối được danh từ, động từ, cụm động từ."],
intro:"Tiếng Việt chỉ có một chữ “hay / hoặc”. Tiếng Trung tách hai: <b>或者</b> trong câu kể, <b>还是</b> trong câu hỏi lựa chọn.",
rules:[
 {t:"A 或者 / 或 B (câu kể)", sub:"或 · 或者", fx:[["A",""],["或者 / 或",null],["B",""]], mean:"Chọn một trong hai, hoặc cái nào cũng được. 或 ngắn gọn, hay dùng trong văn viết.",
  ex:[["星期天我想去看电影[或]听音乐会。","Xīngqītiān wǒ xiǎng qù kàn diànyǐng huò tīng yīnyuèhuì.","Chủ nhật tôi muốn đi xem phim hoặc nghe hòa nhạc.","等级标准"],
      ["我下午去打球[或者]去爬山。","Wǒ xiàwǔ qù dǎ qiú huòzhě qù pá shān.","Chiều tôi đi chơi bóng hoặc đi leo núi.","等级标准"]]}],
cmp:[
 {vn:"Tôi uống trà hoặc cà phê đều được.", zh:"我喝茶[或者]咖啡都可以。", py:"Wǒ hē chá huòzhě kāfēi dōu kěyǐ.", ok:true, why:"Câu kể → 或者."},
 {vn:"Bạn uống trà hay cà phê?", zh:"你喝茶[还是]咖啡？", py:"Nǐ hē chá háishi kāfēi?", ok:true, why:"Câu hỏi → 还是."}],
ex:[
 ["你明天[或者]后天来都行。","Nǐ míngtiān huòzhě hòutiān lái dōu xíng.","Bạn đến mai hoặc ngày kia đều được."],
 ["周末我在家看书[或者]上网。","Zhōumò wǒ zài jiā kàn shū huòzhě shàng wǎng.","Cuối tuần tôi ở nhà đọc sách hoặc lên mạng."],
 ["你可以打电话[或者]发短信。","Nǐ kěyǐ dǎ diànhuà huòzhě fā duǎnxìn.","Bạn có thể gọi điện hoặc nhắn tin."]],
errs:[
 {bad:"你喝茶或者喝咖啡？", good:"你喝茶还是喝咖啡？", why:"Câu hỏi lựa chọn dùng 还是."},
 {bad:"我下午去打球还是去爬山。", good:"我下午去打球或者去爬山。", why:"Câu kể dùng 或者."}],
practice:[
 {t:"A. Điền 或者 hoặc 还是", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你想喝茶＿＿咖啡？", o:["或者","还是"], a:1, why:"Câu hỏi."},
  {q:"我周末看电影＿＿听音乐。", o:["或者","还是"], a:0, why:"Câu kể."},
  {q:"你今天去＿＿明天去？", o:["或者","还是"], a:1, why:"Câu hỏi."},
  {q:"你打电话＿＿发短信都行。", o:["或者","还是"], a:0, why:"Câu kể."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","下午","去打球","或者","去爬山"], a:"我下午去打球或者去爬山。", vi:"Chiều tôi đi chơi bóng hoặc đi leo núi."},
  {w:["你","明天","或者","后天","来","都行"], a:"你明天或者后天来都行。", vi:"Bạn đến mai hoặc ngày kia đều được."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cuối tuần tôi đọc sách hoặc lên mạng.", a:"周末我看书或者上网。"},
  {q:"Bạn đi hôm nay hay ngày mai?", a:"你今天去还是明天去？"}]}],
rel:["一19","一47","二64","二30"]
};
