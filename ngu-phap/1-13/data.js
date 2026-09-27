// Bài ngữ pháp 【一13】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一13", title:"关联副词：还、也", vi:"Phó từ 还 “còn, thêm” và 也 “cũng”", tag:"词类 · 副词",
goals:[
 "Dùng <b>也</b> (cũng) để nói điều giống nhau giữa hai chủ thể.",
 "Dùng <b>还¹</b> (còn, lại còn) để bổ sung thêm một việc.",
 "Đặt cả hai <b>sau chủ ngữ, trước động từ</b> — không đặt cuối câu như “too” trong tiếng Anh."],
intro:"也 và 还 là phó từ nối ý: luôn đứng <b>trước động từ / tính từ</b>, không đứng trước chủ ngữ.",
rules:[
 {t:"也: cũng", sub:"也", fx:[["Chủ ngữ 2",""],["也",null],["Động từ / tính từ",""]], mean:"Chủ ngữ sau giống chủ ngữ trước.",
  ex:[["他是学生，我[也]是学生。","Tā shì xuésheng, wǒ yě shì xuésheng.","Anh ấy là học sinh, tôi cũng là học sinh.","等级标准"],
      ["我[也]不喜欢喝咖啡。","Wǒ yě bù xǐhuan hē kāfēi.","Tôi cũng không thích uống cà phê."]]},
 {t:"还: còn, lại còn (thêm việc)", sub:"还¹", fx:[["Chủ ngữ",""],["V1……，",""],["还",null],["V2",""]], mean:"Cùng một chủ ngữ làm thêm việc thứ hai.",
  ex:[["他要去上海，[还]要去北京。","Tā yào qù Shànghǎi, hái yào qù Běijīng.","Anh ấy muốn đi Thượng Hải, còn muốn đi Bắc Kinh nữa.","等级标准"],
      ["我买了苹果，[还]买了面包。","Wǒ mǎi le píngguǒ, hái mǎi le miànbāo.","Tôi đã mua táo, còn mua cả bánh mì."]]}],
notes:[
 {t:"也 + 不 / 都", html:"<span class='zh'>也不</span> (cũng không), <span class='zh'>也都</span> (cũng đều) — 也 luôn đứng trước."},
 {t:"还 hỏi thêm", html:"<span class='zh'>你还要什么？</span> = Bạn còn cần gì nữa không?"}],
cmp:[
 {vn:"Tôi cũng là học sinh.", zh:"我[也]是学生。", py:"Wǒ yě shì xuésheng.", ok:true, why:"“cũng” đứng trước động từ — giống tiếng Việt."},
 {vn:"Tôi cũng không biết.", zh:"我[也]不知道。", py:"Wǒ yě bù zhīdào.", ok:true, why:"也 đứng trước 不."},
 {vn:"Anh ấy muốn đi Thượng Hải, còn muốn đi Bắc Kinh nữa.", zh:"……，[还]要去北京。", py:"……, hái yào qù Běijīng.", ok:true, why:"“còn … nữa” → một chữ 还 trước động từ."}],
ex:[
 ["你去，我[也]去。","Nǐ qù, wǒ yě qù.","Bạn đi thì tôi cũng đi."],
 ["这个很好，那个[也]很好。","Zhège hěn hǎo, nàge yě hěn hǎo.","Cái này tốt, cái kia cũng tốt."],
 ["他会说中文，[还]会说英语。","Tā huì shuō Zhōngwén, hái huì shuō Yīngyǔ.","Anh ấy biết nói tiếng Trung, còn biết cả tiếng Anh."],
 ["你[还]想吃什么？","Nǐ hái xiǎng chī shénme?","Bạn còn muốn ăn gì nữa?"]],
errs:[
 {bad:"我是学生也。", good:"我也是学生。", why:"也 không đứng cuối câu."},
 {bad:"也我是学生。", good:"我也是学生。", why:"也 đứng sau chủ ngữ."},
 {bad:"我不也喜欢。", good:"我也不喜欢。", why:"也 đứng trước 不."},
 {bad:"他要去上海，还北京。", good:"他要去上海，还要去北京。", why:"还 phải đi với động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi cũng là học sinh.", o:["我是学生也。","我也是学生。","也我是学生。"], a:1, why:"Chủ ngữ + 也 + V."},
  {q:"Tôi cũng không thích.", o:["我不也喜欢。","我也不喜欢。","我不喜欢也。"], a:1, why:"也不."},
  {q:"Tôi mua táo, còn mua cả bánh mì.", o:["我买了苹果，还买了面包。","我买了苹果，还面包。","我买了苹果，面包还买了。"], a:0, why:"还 + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","是","学生","我","也","是","学生"], a:"他是学生，我也是学生。", vi:"Anh ấy là học sinh, tôi cũng là học sinh."},
  {w:["你","还","想","吃","什么"], a:"你还想吃什么？", vi:"Bạn còn muốn ăn gì nữa?"},
  {w:["他","会","说","中文","还","会","说","英语"], a:"他会说中文，还会说英语。", vi:"Anh ấy biết tiếng Trung, còn biết tiếng Anh."}]},
 {t:"C. Điền 也 hoặc 还", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"你喜欢喝茶，我＿＿喜欢喝茶。", a:"也", why:"Hai người giống nhau."},
  {q:"我今天要上课，＿＿要去医院。", a:"还", why:"Cùng một người, thêm việc."},
  {q:"妈妈不去，爸爸＿＿不去。", a:"也"}]}],
rel:["一10","一39","二15","三12"]
};
