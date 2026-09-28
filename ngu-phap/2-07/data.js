// Bài ngữ pháp 【二07】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二07", title:"指示代词：那么、那样、这么、这样", vi:"Đại từ chỉ thị — như thế này, như thế kia", tag:"词类 · 代词",
goals:[
 "Dùng <b>这么 / 那么 + tính từ</b> (… thế này / … thế kia) chỉ mức độ.",
 "Dùng <b>这样 / 那样 + động từ</b> chỉ cách làm, và <b>这样的 / 那样的 + danh từ</b>.",
 "Dùng khung so sánh <b>A 有 B 这么 / 那么 + Adj</b>."],
intro:"这 (gần) / 那 (xa) kết hợp với 么 và 样. <b>这么 / 那么</b> hay đứng trước tính từ (mức độ); <b>这样 / 那样</b> hay đứng trước động từ (cách thức).",
rules:[
 {t:"这么 / 那么 + tính từ", sub:"程度", fx:[["这么 / 那么",null],["Tính từ",""]], mean:"… đến thế này / … đến thế. Hay dùng trong so sánh: A 有 B 那么 + Adj 【二58】.",
  ex:[["你女朋友有她[那么]漂亮吗？","Nǐ nǚpéngyou yǒu tā nàme piàoliang ma?","Bạn gái bạn có xinh bằng cô ấy không?","等级标准"],
      ["他哥哥有你[这么]高。","Tā gēge yǒu nǐ zhème gāo.","Anh trai cậu ấy cao bằng bạn (cao như thế này).","等级标准"]]},
 {t:"这样 / 那样 + động từ", sub:"方式", fx:[["这样 / 那样",null],["Động từ",""]], mean:"Làm như thế này / như thế kia.",
  ex:[["筷子不能[那样]拿。","Kuàizi bù néng nàyàng ná.","Đũa không được cầm như thế kia.","等级标准"],
      ["这个汉字要[这样]写。","Zhège Hànzì yào zhèyàng xiě.","Chữ Hán này phải viết như thế này.","等级标准"]]}],
notes:[
 {t:"这样的 / 那样的 + danh từ", html:"<span class='zh'>我想买这样的衣服。</span> Tôi muốn mua quần áo như thế này."},
 {t:"Đứng một mình", html:"<span class='zh'>这样吧，……</span> (Thế này nhé, …); <span class='zh'>就这样。</span> (Cứ thế đi.)"}],
cmp:[
 {vn:"Sao bạn đến muộn thế?", zh:"你怎么来得[这么]晚？", py:"Nǐ zěnme lái de zhème wǎn?", ok:true, why:"“thế” sau tính từ → 这么 trước tính từ."},
 {vn:"Viết như thế này.", zh:"[这样]写。", py:"Zhèyàng xiě.", ok:true, why:"“như thế này” cuối câu → 这样 trước động từ."}],
ex:[
 ["今天[这么]冷，你别出去了。","Jīntiān zhème lěng, nǐ bié chūqu le.","Hôm nay lạnh thế này, bạn đừng ra ngoài nữa."],
 ["北京没有上海[那么]热。","Běijīng méiyǒu Shànghǎi nàme rè.","Bắc Kinh không nóng bằng Thượng Hải."],
 ["你别[这样]说。","Nǐ bié zhèyàng shuō.","Bạn đừng nói như thế."],
 ["我喜欢[那样]的房子。","Wǒ xǐhuan nàyàng de fángzi.","Tôi thích ngôi nhà như thế kia."]],
errs:[
 {bad:"今天冷这么。", good:"今天这么冷。", why:"这么 đứng trước tính từ."},
 {bad:"这个字要写这样。", good:"这个字要这样写。", why:"这样 đứng trước động từ."},
 {bad:"我喜欢那样房子。", good:"我喜欢那样的房子。", why:"那样 + 的 + danh từ."},
 {bad:"他哥哥有你很高。", good:"他哥哥有你这么高。", why:"A 有 B 这么 / 那么 + Adj, không dùng 很."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay lạnh thế này!", o:["今天冷这么！","今天这么冷！","今天这样冷的！"], a:1, why:"这么 + Adj."},
  {q:"Chữ này phải viết như thế này.", o:["这个字要这样写。","这个字要写这样。","这个字这么样写。"], a:0, why:"这样 + V."},
  {q:"Bắc Kinh không nóng bằng Thượng Hải.", o:["北京没有上海那么热。","北京没有上海很热。","北京不上海那么热。"], a:0, why:"没有 B 那么 + Adj."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["筷子","不能","那样","拿"], a:"筷子不能那样拿。", vi:"Đũa không được cầm như thế kia."},
  {w:["他哥哥","有","你","这么","高"], a:"他哥哥有你这么高。", vi:"Anh cậu ấy cao bằng bạn."},
  {w:["我","喜欢","那样的","房子"], a:"我喜欢那样的房子。", vi:"Tôi thích ngôi nhà như thế kia."}]},
 {t:"C. Điền 这么 hoặc 这样", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"你怎么来得＿＿晚？", vi:"Sao bạn đến muộn ＿＿?", a:"这么", why:"Trước tính từ."},
  {q:"你别＿＿做，不对。", vi:"Bạn đừng làm ＿＿, không đúng.", a:"这样", why:"Trước động từ."},
  {q:"我想买＿＿的手机。", vi:"Tôi muốn mua cái điện thoại ＿＿.", a:"这样"}]}],
rel:["一06","二58","二06","二13"]
};
