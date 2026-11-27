// Bài ngữ pháp 【新5.35】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.35", title:"选择复句：或是……，或是……", vi:"或是…，或是… — hoặc là …, hoặc là …", tag:"句子的类型 · 复句",
goals:[
 "Liệt kê các khả năng bằng <b>或是……，或是……</b>.",
 "Dùng trong <b>câu kể</b>, giọng văn viết.",
 "Phân biệt với 还是 (hỏi)."],
intro:"<b>或是</b> = <b>或者</b> (đã học ở 新3.63), hơi trang trọng hơn.",
rules:[
 {t:"或是 + A，或是 + B", sub:"选择", fx:[["或是",null],["A",""],["，",""],["或是",null],["B",""]], mean:"Hoặc A, hoặc B.",
  ex:[["周末他{1|或是}{2|去爬山}，{3|或是}{4|在家看书}。","Zhōumò tā huòshì qù pá shān, huòshì zài jiā kàn shū.","Cuối tuần anh ấy hoặc đi leo núi, hoặc ở nhà đọc sách."],
      ["{1|或是}{2|打电话}，{3|或是}{4|发邮件}，都可以。","Huòshì dǎ diànhuà, huòshì fā yóujiàn, dōu kěyǐ.","Gọi điện hoặc gửi thư đều được."]]}],
cmp:[
 {vn:"Hoặc hôm nay hoặc ngày mai, anh phải trả lời.", zh:"[或是]今天，[或是]明天，你得给我回答。", py:"Huòshì jīntiān, huòshì míngtiān, nǐ děi gěi wǒ huídá.", ok:true, why:"Câu kể / yêu cầu, không phải câu hỏi."}],
ex:[
 ["学生们[或是]看书，[或是]聊天儿。","Xuéshengmen huòshì kàn shū, huòshì liáotiānr.","Học sinh người đọc sách, người trò chuyện."],
 ["[或是]你来，[或是]我去，你决定。","Huòshì nǐ lái, huòshì wǒ qù, nǐ juédìng.","Hoặc bạn đến, hoặc tôi đi, bạn quyết."],
 ["早饭我[或是]喝粥，[或是]吃面包。","Zǎofàn wǒ huòshì hē zhōu, huòshì chī miànbāo.","Bữa sáng tôi hoặc ăn cháo, hoặc ăn bánh mì."]],
errs:[
 {bad:"你或是喝茶，或是喝咖啡？", good:"你喝茶还是喝咖啡？", why:"Câu hỏi lựa chọn dùng 还是."},
 {bad:"周末他或是去爬山，还是在家看书。", good:"周末他或是去爬山，或是在家看书。", why:"Giữ cặp 或是……或是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Gọi điện hoặc gửi thư đều được.", o:["或是打电话，或是发邮件，都可以。","打电话还是发邮件，都可以吗。"], a:0, why:"Câu kể → 或是."},
  {q:"Bạn đi hay ở? (hỏi)", o:["你或是走或是留？","你走还是留？"], a:1, why:"Hỏi → 还是."},
  {q:"早饭我或是喝粥，＿吃面包。", vi:"Bữa sáng tôi hoặc ăn cháo, hoặc ăn bánh mì.", o:["或是","还是","可是"], a:0, why:"Cặp 或是."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["周末","他","或是","去爬山，","或是","在家看书"], a:"周末他或是去爬山，或是在家看书。", alt:["周末他或是在家看书，或是去爬山。"], vi:"Cuối tuần anh ấy hoặc đi leo núi, hoặc ở nhà đọc sách."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 或是)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hoặc bạn đến, hoặc tôi đi.", a:"或是你来，或是我去。/ 或是我去，或是你来。"}]}],
rel:["新3.63","二29","二64"]
};
