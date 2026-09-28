// Bài ngữ pháp 【三08】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三08", title:"指示代词：各、各位、各种、每、任何", vi:"Đại từ chỉ thị 各, 每, 任何 — các, mỗi, bất kỳ", tag:"词类 · 代词",
goals:[
 "Dùng <b>各 / 各位 / 各种</b> (các, các vị, các loại).",
 "Dùng <b>每 + lượng từ + N (+ 都)</b> (mỗi … đều …).",
 "Dùng <b>任何 + N + 都</b> (bất kỳ … nào cũng …)."],
intro:"Ba đại từ này đều bao quát <b>toàn bộ</b> một nhóm, nên thường đi với <b>都</b> ở phía sau.",
rules:[
 {t:"各 · 各位 · 各种", sub:"各", fx:[["各 / 各位 / 各种",null],["Danh từ",""]], mean:"各国 các nước · 各位 các vị (lịch sự) · 各种 các loại.",
  ex:[["我们班的同学来自世界[各]国。","Wǒmen bān de tóngxué láizì shìjiè gè guó.","Các bạn lớp tôi đến từ các nước trên thế giới.","等级标准"],
      ["[各位]朋友，下午好！","Gèwèi péngyou, xiàwǔ hǎo!","Chào các bạn, buổi chiều tốt lành!","等级标准"],
      ["这儿有[各种]颜色的花。","Zhèr yǒu gè zhǒng yánsè de huā.","Ở đây có hoa đủ các màu.","等级标准"]]},
 {t:"每 + lượng từ + N (+ 都)", sub:"每", fx:[["每",null],["(số) + lượng từ",""],["N",""],["都",null]], mean:"mỗi … (đều).",
  ex:[["我[每]个星期天[都]去爬山。","Wǒ měi ge xīngqītiān dōu qù pá shān.","Chủ nhật nào tôi cũng đi leo núi.","等级标准"]]},
 {t:"任何 + N + 都", sub:"任何", fx:[["任何",null],["Danh từ",""],["都 / 也",null]], mean:"bất kỳ … nào cũng.",
  ex:[["我们[任何]时候[都]要注意保护环境。","Wǒmen rènhé shíhou dōu yào zhùyì bǎohù huánjìng.","Bất cứ lúc nào chúng ta cũng phải chú ý bảo vệ môi trường.","等级标准"]]}],
cmp:[
 {vn:"Ngày nào tôi cũng đi học.", zh:"我[每]天[都]上课。", py:"Wǒ měi tiān dōu shàng kè.", ok:true, why:"“… nào cũng” = 每……都."},
 {vn:"Chào các vị!", zh:"[各位]好！", py:"Gèwèi hǎo!", ok:true, why:"Lịch sự hơn 大家好."}],
ex:[
 ["[每]个人[都]有自己的爱好。","Měi ge rén dōu yǒu zìjǐ de àihào.","Mỗi người đều có sở thích riêng."],
 ["他[任何]问题[都]能回答。","Tā rènhé wèntí dōu néng huídá.","Câu hỏi nào anh ấy cũng trả lời được."],
 ["商店里有[各种]各样的东西。","Shāngdiàn li yǒu gè zhǒng gè yàng de dōngxi.","Trong cửa hàng có đủ các loại đồ."]],
errs:[
 {bad:"我每天上课都。", good:"我每天都上课。", why:"都 đứng trước động từ."},
 {bad:"每人个都有爱好。", good:"每个人都有爱好。", why:"每 + lượng từ + N."},
 {bad:"任何人知道。", good:"任何人都不知道。/ 谁都不知道。", why:"任何 thường đi với 都 / 也."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chủ nhật nào tôi cũng đi leo núi.", o:["我每个星期天都去爬山。","我都每个星期天去爬山。","我每个星期天去爬山都。"], a:0, why:"每……都 + V."},
  {q:"Ở đây có hoa đủ các màu.", o:["这儿有各种颜色的花。","这儿有种各颜色的花。","这儿有各颜色种的花。"], a:0, why:"各种 + N."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["每个人","都","有","自己的","爱好"], a:"每个人都有自己的爱好。", vi:"Mỗi người đều có sở thích riêng."},
  {w:["各位","朋友","下午好"], a:"各位朋友，下午好！", vi:"Chào các bạn, buổi chiều tốt lành!"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Ngày nào tôi cũng đi học.", a:"我每天都上课。/ 我每天都去上课。"},
  {q:"Câu hỏi nào anh ấy cũng trả lời được.", a:"他任何问题都能回答。/ 任何问题他都能回答。"}]}],
rel:["一06","一10","三07","三11"]
};
