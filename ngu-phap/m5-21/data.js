// Bài ngữ pháp 【新5.21】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.21", title:"固定格式：从……来看、……以来", vi:"Xét từ…, kẻ… người…, từ… đến nay, do… hợp thành", tag:"短语 · 固定格式",
goals:[
 "Nêu góc nhìn bằng <b>从……来看</b>.",
 "Tả mỗi người một việc bằng <b>A的A，B的B</b>.",
 "Dùng <b>（自）……以来</b> và <b>由……组成</b>."],
intro:"Bốn khuôn hay gặp trong bài đọc và bài viết HSK 5.",
rules:[
 {t:"从 + góc độ + 来看，nhận định", sub:"（1）", fx:[["从",null],["góc độ",""],["来看",null],["，",""],["nhận định",""]], mean:"Xét về …",
  ex:[["{1|从}{2|目前的情况}{3|来看}，{4|问题不大}。","Cóng mùqián de qíngkuàng lái kàn, wèntí bú dà.","Xét tình hình hiện nay, vấn đề không lớn."]]},
 {t:"V1 + 的 + V1，V2 + 的 + V2", sub:"（2）", fx:[["A的A",""],["，",""],["B的B",""]], mean:"Người thì …, người thì …",
  ex:[["教室里同学们{1|看书的看书}，{2|写字的写字}。","Jiàoshì li tóngxuémen kàn shū de kàn shū, xiě zì de xiě zì.","Trong lớp, bạn thì đọc sách, bạn thì viết."]]},
 {t:"(自) + mốc / sự việc + 以来，…", sub:"（3）", fx:[["自",null],["mốc",""],["以来",null],["，",""],["tình hình đến nay",""]], mean:"Từ … đến nay.",
  ex:[["{1|自}{2|毕业}{3|以来}，{4|他一直在这家公司工作}。","Zì bìyè yǐlái, tā yìzhí zài zhè jiā gōngsī gōngzuò.","Từ khi tốt nghiệp, anh ấy luôn làm ở công ty này."]]},
 {t:"S + 由 + thành phần + 组成", sub:"（4）", fx:[["S",""],["由",null],["thành phần",""],["组成",null]], mean:"Do … hợp thành, gồm.",
  ex:[["{1|代表团}{2|由}{3|二十个人}{4|组成}。","Dàibiǎotuán yóu èrshí gè rén zǔchéng.","Đoàn đại biểu gồm hai mươi người."]]}],
cmp:[
 {vn:"Lớp chúng tôi gồm học sinh của năm nước.", zh:"我们班[由]五个国家的学生[组成]。", py:"Wǒmen bān yóu wǔ gè guójiā de xuésheng zǔchéng.", ok:true, why:"组成 đứng cuối câu."}],
ex:[
 ["[从]价格上[来看]，这个更合适。","Cóng jiàgé shang lái kàn, zhège gèng héshì.","Xét về giá, cái này hợp hơn."],
 ["晚会上大家[唱歌的唱歌，跳舞的跳舞]。","Wǎnhuì shang dàjiā chànggē de chànggē, tiàowǔ de tiàowǔ.","Trong tiệc, người thì hát, người thì múa."],
 ["今年[以来]，天气一直很好。","Jīnnián yǐlái, tiānqì yìzhí hěn hǎo.","Từ đầu năm đến nay trời luôn đẹp."]],
errs:[
 {bad:"从目前的情况看来看，问题不大。", good:"从目前的情况来看，问题不大。", why:"Khung là 从……来看."},
 {bad:"自毕业以后以来，他一直工作。", good:"自毕业以来，他一直工作。", why:"以来 đã là “từ đó đến nay”, không thêm 以后."},
 {bad:"我们班组成由五个国家的学生。", good:"我们班由五个国家的学生组成。", why:"由 + thành phần + 组成."}],
practice:[
 {t:"A. Chọn đáp án", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"从目前的情况＿，问题不大。", vi:"Xét tình hình hiện nay, vấn đề không lớn.", o:["来看","以来","组成"], a:0, why:"从……来看."},
  {q:"自去年＿，物价一直在上涨。", vi:"Từ năm ngoái đến nay giá cả liên tục tăng.", o:["以来","来看","起来"], a:0, why:"自……以来."},
  {q:"这个小组＿五个人组成。", vi:"Nhóm này gồm năm người.", o:["由","从","被"], a:0, why:"由……组成."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["代表团","由","二十个人","组成"], a:"代表团由二十个人组成。", vi:"Đoàn đại biểu gồm hai mươi người."},
  {w:["从价格上","来看，","这个","更","合适"], a:"从价格上来看，这个更合适。", vi:"Xét về giá, cái này hợp hơn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Từ khi tốt nghiệp, anh ấy luôn làm ở công ty này.", a:"自毕业以来，他一直在这家公司工作。/ 毕业以来，他一直在这家公司工作。/ 自从毕业以来，他一直在这家公司工作。"},
  {q:"Trong lớp, bạn thì đọc sách, bạn thì viết chữ.", a:"教室里同学们看书的看书，写字的写字。"}]}],
rel:["三21","新4.32","新3.33"]
};
