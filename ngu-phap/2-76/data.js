// Bài ngữ pháp 【二76】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二76", title:"用“什么时候、什么样、为什么、怎么样、怎样”提问", vi:"Hỏi bằng khi nào, như thế nào, tại sao, ra sao, bằng cách nào", tag:"提问的方法",
goals:[
 "Hỏi thời gian bằng <b>什么时候</b>, kiểu loại bằng <b>什么样的</b>.",
 "Hỏi lý do bằng <b>为什么</b>, tình hình bằng <b>怎么样</b>, cách thức bằng <b>怎样 / 怎么</b>.",
 "Đặt từ để hỏi đúng chỗ (thời gian, cách thức trước động từ)."],
intro:"Mở rộng cách hỏi của 【一46】 với các từ để hỏi HSK 2. Quy tắc vẫn là: <b>hỏi chỗ nào thay chỗ đó</b>, không thêm 吗.",
rules:[
 {t:"Các từ để hỏi HSK 2", sub:"", fx:[["什么时候 · 为什么 · 怎样",null],["+ Động từ",""],["·",""],["什么样的",null],["+ Danh từ",""]], mean:"什么时候 khi nào · 什么样的 + N kiểu … như thế nào · 为什么 tại sao · 怎么样 thế nào (tình hình) · 怎样 + V làm thế nào.",
  ex:[["你们[什么时候]见面？","Nǐmen shénme shíhou jiàn miàn?","Khi nào các bạn gặp nhau?","等级标准"],
      ["你喜欢[什么样]的朋友？","Nǐ xǐhuan shénmeyàng de péngyou?","Bạn thích người bạn như thế nào?","等级标准"],
      ["你[为什么]没去上课？","Nǐ wèi shénme méi qù shàng kè?","Sao bạn không đi học?","等级标准"],
      ["明天天气[怎么样]？","Míngtiān tiānqì zěnmeyàng?","Mai thời tiết thế nào?","等级标准"],
      ["你明天[怎样]去学校？","Nǐ míngtiān zěnyàng qù xuéxiào?","Mai bạn đến trường bằng cách nào?","等级标准"]]}],
cmp:[
 {vn:"Khi nào bạn về nhà?", zh:"你[什么时候]回家？", py:"Nǐ shénme shíhou huí jiā?", ok:true, why:"“khi nào” lên trước động từ (như trạng ngữ thời gian)."},
 {vn:"Bạn thích áo kiểu gì?", zh:"你喜欢[什么样的]衣服？", py:"Nǐ xǐhuan shénmeyàng de yīfu?", ok:true, why:"什么样的 đứng trước danh từ."}],
ex:[
 ["你[什么时候]有空？","Nǐ shénme shíhou yǒu kòng?","Khi nào bạn rảnh?"],
 ["你想找[什么样]的工作？","Nǐ xiǎng zhǎo shénmeyàng de gōngzuò?","Bạn muốn tìm công việc như thế nào?"],
 ["这个问题[怎样]回答？","Zhège wèntí zěnyàng huídá?","Câu hỏi này trả lời thế nào?"]],
errs:[
 {bad:"你回家什么时候？", good:"你什么时候回家？", why:"什么时候 trước động từ."},
 {bad:"你喜欢什么样朋友？", good:"你喜欢什么样的朋友？", why:"什么样 + 的 + N."},
 {bad:"你为什么没去上课吗？", good:"你为什么没去上课？", why:"Không thêm 吗."}],
practice:[
 {t:"A. Chọn từ để hỏi đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你＿＿回国？——下个月。", o:["什么时候","为什么","怎样"], a:0, why:"Thời gian."},
  {q:"你喜欢＿＿的电影？——有意思的。", o:["什么样","怎么样","为什么"], a:0, why:"Kiểu loại."},
  {q:"明天天气＿＿？——很好。", o:["怎样","怎么样","什么样"], a:1, why:"Tình hình."},
  {q:"你＿＿学中文？——因为我喜欢中国。", o:["为什么","什么时候","怎样"], a:0, why:"Lý do."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你们","什么时候","见面"], a:"你们什么时候见面？", vi:"Khi nào các bạn gặp nhau?"},
  {w:["你","喜欢","什么样的","朋友"], a:"你喜欢什么样的朋友？", vi:"Bạn thích người bạn như thế nào?"},
  {w:["你","明天","怎样","去","学校"], a:"你明天怎样去学校？", vi:"Mai bạn đến trường bằng cách nào?"}]},
 {t:"C. Đặt câu hỏi cho phần trong 【 】", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我【下个月】回国。", a:"你什么时候回国？"},
  {q:"我【坐地铁】去学校。", a:"你怎样（怎么）去学校？"},
  {q:"我喜欢【安静的】地方。", a:"你喜欢什么样的地方？"}]}],
rel:["二05","一46","一04","二75"]
};
