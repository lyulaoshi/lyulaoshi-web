// Bài ngữ pháp 【一35】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一35", title:"感叹句", vi:"Câu cảm thán — 太……了！ 真……！", tag:"句子的类型 · 句类",
goals:[
 "Bày tỏ cảm xúc bằng <b>太 + Adj + 了！</b> và <b>真 + Adj！</b>",
 "Đặt phó từ cảm thán <b>trước</b> tính từ — ngược “ngon <b>quá</b>!”.",
 "Không ghép 真 với 了, không bỏ 了 sau 太 khi cảm thán."],
intro:"Câu cảm thán thể hiện cảm xúc mạnh (khen, chê, ngạc nhiên), cuối câu có dấu <b>！</b>.",
rules:[
 {t:"太 + tính từ + 了！", sub:"太……了", fx:[["太",null],["Tính từ",""],["了！",null]], mean:"…quá! (mức độ rất cao, khen hoặc chê).",
  ex:[["今天[太]热[了]！","Jīntiān tài rè le!","Hôm nay nóng quá!","等级标准"],
      ["[太]好[了]！","Tài hǎo le!","Tốt quá!"]]},
 {t:"真 + tính từ！", sub:"真……", fx:[["真",null],["Tính từ",""],["！",""]], mean:"…thật! Không thêm 了.",
  ex:[["这水果[真]好吃！","Zhè shuǐguǒ zhēn hǎochī!","Hoa quả này ngon thật!","等级标准"],
      ["你的中文[真]好！","Nǐ de Zhōngwén zhēn hǎo!","Tiếng Trung của bạn giỏi thật!"]]}],
cmp:[
 {vn:"Ngon quá!", zh:"[太]好吃[了]！", py:"Tài hǎochī le!", ok:true, why:"“quá” cuối câu → 太…了 bao quanh tính từ."},
 {vn:"Đẹp thật!", zh:"[真]漂亮！", py:"Zhēn piàoliang!", ok:true, why:"“thật” cuối câu → 真 đứng trước."}],
ex:[
 ["这件衣服[太]贵[了]！","Zhè jiàn yīfu tài guì le!","Cái áo này đắt quá!"],
 ["[太]谢谢你[了]！","Tài xièxie nǐ le!","Cảm ơn bạn nhiều lắm!"],
 ["你的房间[真]干净！","Nǐ de fángjiān zhēn gānjìng!","Phòng bạn sạch thật!"],
 ["今天的天气[真]好！","Jīntiān de tiānqì zhēn hǎo!","Thời tiết hôm nay đẹp thật!"]],
errs:[
 {bad:"这水果好吃真！", good:"这水果真好吃！", why:"真 đứng trước tính từ."},
 {bad:"真好吃了！", good:"真好吃！/ 太好吃了！", why:"真 không đi với 了."},
 {bad:"今天太热！", good:"今天太热了！", why:"Cảm thán với 太 thường có 了."},
 {bad:"今天热太了！", good:"今天太热了！", why:"太 trước tính từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nóng quá!", o:["热太了！","太热了！","太热真！"], a:1, why:"太 + Adj + 了."},
  {q:"Ngon thật!", o:["真好吃！","真好吃了！","好吃真！"], a:0, why:"真 + Adj, không 了."},
  {q:"Tốt quá!", o:["太好了！","好太了！","太好！"], a:0, why:"太好了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["今天","太","热","了"], a:"今天太热了！", vi:"Hôm nay nóng quá!"},
  {w:["这","水果","真","好吃"], a:"这水果真好吃！", vi:"Hoa quả này ngon thật!"},
  {w:["你的","中文","真","好"], a:"你的中文真好！", vi:"Tiếng Trung của bạn giỏi thật!"}]},
 {t:"C. Nói bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Đắt quá!", a:"太贵了！"},
  {q:"Cô ấy đẹp thật!", a:"她真漂亮！"},
  {q:"Cảm ơn bạn nhiều lắm!", a:"太谢谢你了！"}]}],
rel:["一09","一22","一34","三75"]
};
