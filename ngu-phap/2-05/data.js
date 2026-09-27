// Bài ngữ pháp 【二05】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二05", title:"疑问代词：多久、为什么、怎么样、怎样", vi:"Đại từ nghi vấn — bao lâu, tại sao, thế nào", tag:"词类 · 代词",
goals:[
 "Hỏi thời lượng bằng <b>多久</b>, hỏi lý do bằng <b>为什么</b>.",
 "Hỏi tình hình, ý kiến bằng <b>怎么样</b>; hỏi cách làm bằng <b>怎样 / 怎么</b> + động từ.",
 "Đặt đúng vị trí: 多久 sau động từ, 为什么 / 怎样 trước động từ, 怎么样 làm vị ngữ."],
intro:"Bốn từ để hỏi mới của HSK 2. Vẫn theo quy tắc “hỏi chỗ nào thay chỗ đó”, và <b>không thêm 吗</b>.",
rules:[
 {t:"多久: bao lâu", sub:"时段", fx:[["V (+了)",""],["多久",null]], mean:"Hỏi khoảng thời gian; đứng <b>sau động từ</b> như bổ ngữ thời lượng.",
  ex:[["昨天的作业，你写了[多久]？","Zuótiān de zuòyè, nǐ xiě le duōjiǔ?","Bài tập hôm qua bạn làm mất bao lâu?","等级标准"]]},
 {t:"为什么: tại sao", sub:"原因", fx:[["Chủ ngữ",""],["为什么",null],["(不) + V",""]], mean:"Hỏi lý do; trả lời bằng 因为…… 【二68】.",
  ex:[["你[为什么]不去上课？","Nǐ wèi shénme bú qù shàng kè?","Sao bạn không đi học?","等级标准"]]},
 {t:"怎么样: thế nào (tình hình, ý kiến)", sub:"性状", fx:[["Chủ ngữ",""],["怎么样",null],["？",""]], mean:"Làm vị ngữ, đứng cuối câu; cũng dùng hỏi ý kiến: …，怎么样？",
  ex:[["爸爸的身体[怎么样]？","Bàba de shēntǐ zěnmeyàng?","Sức khỏe của bố thế nào?","等级标准"]]},
 {t:"怎样 + V: làm thế nào", sub:"方式", fx:[["怎样 / 怎么",null],["Động từ",""]], mean:"Hỏi cách thức; 怎样 trang trọng hơn 怎么.",
  ex:[["这个字[怎样]写？","Zhège zì zěnyàng xiě?","Chữ này viết thế nào?","等级标准"]]}],
cmp:[
 {vn:"Bạn học tiếng Trung bao lâu rồi?", zh:"你学中文学了[多久]了？", py:"Nǐ xué Zhōngwén xué le duōjiǔ le?", ok:true, why:"“bao lâu” sau động từ — giống tiếng Việt, nhưng có tân ngữ thì lặp động từ."},
 {vn:"Tại sao bạn không đến?", zh:"你[为什么]不来？", py:"Nǐ wèi shénme bù lái?", ok:true, why:"为什么 trước động từ."},
 {vn:"Phim hay không? (thế nào)", zh:"那个电影[怎么样]？", py:"Nàge diànyǐng zěnmeyàng?", ok:true, why:"怎么样 làm vị ngữ cuối câu."}],
ex:[
 ["你等了[多久]？——半个小时。","Nǐ děng le duōjiǔ? —— Bàn ge xiǎoshí.","Bạn đợi bao lâu rồi? — Nửa tiếng."],
 ["你[为什么]学中文？——因为我喜欢中国文化。","Nǐ wèi shénme xué Zhōngwén? —— Yīnwèi wǒ xǐhuan Zhōngguó wénhuà.","Tại sao bạn học tiếng Trung? — Vì tôi thích văn hóa Trung Quốc."],
 ["我们明天去爬山，[怎么样]？","Wǒmen míngtiān qù pá shān, zěnmeyàng?","Mai chúng mình đi leo núi, thế nào?"],
 ["去火车站[怎样]走？","Qù huǒchēzhàn zěnyàng zǒu?","Đến ga tàu đi thế nào?"]],
errs:[
 {bad:"你多久写了作业？", good:"你写作业写了多久？", why:"多久 đứng sau động từ."},
 {bad:"为什么你不去上课吗？", good:"你为什么不去上课？", why:"Không dùng 吗; 为什么 thường đứng sau chủ ngữ."},
 {bad:"你身体是怎么样？", good:"你身体怎么样？", why:"怎么样 làm vị ngữ, không cần 是."},
 {bad:"这个字写怎样？", good:"这个字怎样写？", why:"怎样 đứng trước động từ."}],
practice:[
 {t:"A. Chọn từ để hỏi đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你学了＿＿中文？——两年。", o:["多久","为什么","怎样"], a:0, why:"Hỏi thời lượng."},
  {q:"你＿＿不高兴？——因为考试没考好。", o:["怎么样","为什么","多久"], a:1, why:"Hỏi lý do."},
  {q:"北京的天气＿＿？——很好。", o:["怎样","为什么","怎么样"], a:2, why:"Hỏi tình hình."},
  {q:"这个菜＿＿做？", o:["怎样","多久","怎么样"], a:0, why:"Hỏi cách làm."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","为什么","不","去","上课"], a:"你为什么不去上课？", vi:"Sao bạn không đi học?"},
  {w:["爸爸的","身体","怎么样"], a:"爸爸的身体怎么样？", vi:"Sức khỏe của bố thế nào?"},
  {w:["这个","字","怎样","写"], a:"这个字怎样写？", vi:"Chữ này viết thế nào?"}]},
 {t:"C. Đặt câu hỏi cho phần trong 【 】", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我等了【二十分钟】。", a:"你等了多久？"},
  {q:"我没来，【因为我病了】。", a:"你为什么没来？"},
  {q:"这个电影【很好看】。", a:"这个电影怎么样？"}]}],
rel:["一04","二76","二68","二75"]
};
