// Bài ngữ pháp 【二24】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二24", title:"介词：从", vi:"Giới từ 从² — “qua, theo (đường nào)”", tag:"词类 · 介词 · 引出方向、路径",
goals:[
 "Dùng <b>从² + nơi chốn + động từ</b> để nói đi <b>qua / theo</b> đường nào.",
 "Phân biệt với 从¹ (từ đâu — điểm xuất phát) 【一15】.",
 "Đặt cụm 从…… trước động từ."],
intro:"从 ở HSK 1 chỉ <b>điểm bắt đầu</b> (từ đâu). Ở HSK 2, 从 còn chỉ <b>con đường đi qua</b>: 从这儿走 = đi qua đây, đi lối này.",
rules:[
 {t:"从 + nơi chốn + V (đi qua, theo lối)", sub:"从²", fx:[["(S)",""],["从",null],["nơi chốn","lối đi qua"],["走 / 过 / 进…",""]], mean:"Qua, theo (tuyến đường).",
  ex:[["你[从]这儿走，五分钟就到书店了。","Nǐ cóng zhèr zǒu, wǔ fēnzhōng jiù dào shūdiàn le.","Bạn đi lối này, năm phút là tới hiệu sách.","等级标准"],
      ["这路公交车[从]我们学校门口过。","Zhè lù gōngjiāochē cóng wǒmen xuéxiào ménkǒu guò.","Tuyến xe buýt này đi qua cổng trường chúng tôi.","等级标准"]]}],
cmp:[
 {vn:"Đi lối này sẽ nhanh hơn.", zh:"[从这儿]走比较快。", py:"Cóng zhèr zǒu bǐjiào kuài.", ok:true, why:"“lối này” → 从这儿 trước động từ."},
 {vn:"Tôi đến từ Hà Nội.", zh:"我[从河内]来。", py:"Wǒ cóng Hénèi lái.", ok:true, why:"Đây là 从¹ (điểm xuất phát) 【一15】."}],
ex:[
 ["我们[从]这个门进去吧。","Wǒmen cóng zhège mén jìnqu ba.","Chúng mình vào bằng cửa này nhé."],
 ["[从]公园里走，比较近。","Cóng gōngyuán li zǒu, bǐjiào jìn.","Đi xuyên qua công viên thì gần hơn."],
 ["阳光[从]窗户照进来。","Yángguāng cóng chuānghu zhào jìnlai.","Ánh nắng chiếu vào qua cửa sổ."]],
errs:[
 {bad:"你走从这儿。", good:"你从这儿走。", why:"从 + nơi chốn trước động từ."},
 {bad:"我们进去从这个门。", good:"我们从这个门进去。", why:"Cụm 从 trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn đi lối này.", o:["你走从这儿。","你从这儿走。","从你这儿走。"], a:1, why:"从这儿 + 走."},
  {q:"Xe buýt đi qua cổng trường.", o:["公交车从学校门口过。","公交车过从学校门口。","公交车学校门口从过。"], a:0, why:"从 + nơi + 过."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","从","这儿","走","五分钟","就到了"], a:"你从这儿走，五分钟就到了。", vi:"Bạn đi lối này, năm phút là tới."},
  {w:["我们","从","这个门","进去","吧"], a:"我们从这个门进去吧。", vi:"Chúng mình vào bằng cửa này nhé."}]},
 {t:"C. 从 ở đây là “từ” (điểm đầu) hay “qua” (lối đi)?", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"他从上海来。", vi:"Anh ấy đến từ Thượng Hải.", a:"“từ” — điểm xuất phát (从¹)."},
  {q:"你从公园里走吧。", vi:"Bạn đi qua công viên nhé.", a:"“qua” — lối đi (从²)."},
  {q:"我们从八点开始上课。", vi:"Chúng tôi học từ 8 giờ.", a:"“từ” — mốc thời gian (从¹)."}]}],
rel:["一15","二22","二23","三39"]
};
