// Bài ngữ pháp 【三16】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三16", title:"关联副词：再", vi:"Phó từ nối 再² — rồi mới (làm xong … rồi mới …)", tag:"词类 · 副词",
goals:[
 "Dùng <b>V1 + (完 / 了) …，再 + V2</b>: làm xong việc này <b>rồi mới</b> làm việc kia.",
 "Phân biệt 再² (nối trình tự) với 再¹ (lặp lại) 【一12】.",
 "Đặt 再 trước động từ thứ hai."],
intro:"再² nối hai hành động theo <b>trình tự, có điều kiện</b>: phải xong việc trước thì mới làm việc sau.",
rules:[
 {t:"V1 (完 / 了) … 再 V2", sub:"再²", fx:[["V1 + 完 / 了 …",""],["再",null],["V2",""]], mean:"",
  ex:[["我们做完作业[再]玩儿游戏。","Wǒmen zuòwán zuòyè zài wánr yóuxì.","Chúng ta làm xong bài tập rồi mới chơi trò chơi.","等级标准"],
      ["你洗了手[再]吃水果。","Nǐ xǐ le shǒu zài chī shuǐguǒ.","Con rửa tay rồi mới ăn hoa quả.","等级标准"]]}],
cmp:[
 {vn:"Ăn cơm xong rồi mới đi.", zh:"吃完饭[再]走。", py:"Chīwán fàn zài zǒu.", ok:true, why:"“rồi mới” = 再 trước động từ sau."}],
ex:[
 ["等雨停了[再]走吧。","Děng yǔ tíng le zài zǒu ba.","Đợi mưa tạnh rồi hẵng đi."],
 ["你先想好[再]回答。","Nǐ xiān xiǎnghǎo zài huídá.","Bạn nghĩ kỹ trước rồi mới trả lời."],
 ["我下了班[再]给你打电话。","Wǒ xià le bān zài gěi nǐ dǎ diànhuà.","Tôi tan làm rồi mới gọi cho bạn."]],
errs:[
 {bad:"我们做完作业又玩儿游戏。（ý: rồi mới chơi）", good:"我们做完作业再玩儿游戏。", why:"Việc chưa làm → 再."},
 {bad:"你洗了手吃水果再。", good:"你洗了手再吃水果。", why:"再 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Rửa tay rồi mới ăn.", o:["洗了手再吃。","洗了手吃再。","再洗了手吃。"], a:0, why:"再 + V2."},
  {q:"Đợi mưa tạnh rồi hẵng đi.", o:["等雨停了又走吧。","等雨停了再走吧。"], a:1, why:"再."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","做完","作业","再","玩儿","游戏"], a:"我们做完作业再玩儿游戏。", vi:"Chúng ta làm xong bài tập rồi mới chơi."},
  {w:["你","先","想好","再","回答"], a:"你先想好再回答。", vi:"Bạn nghĩ kỹ trước rồi mới trả lời."}]},
 {t:"C. Nối bằng 再", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"吃完饭 / 走", vi:"ăn cơm xong / đi", a:"吃完饭再走。"},
  {q:"我下了班 / 给你打电话", vi:"tôi tan làm / gọi điện cho bạn", a:"我下了班再给你打电话。"}]}],
rel:["一12","二62","三73","二16"]
};
