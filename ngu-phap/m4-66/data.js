// Bài ngữ pháp 【新4.66】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.66", title:"概数表示法3：数词＋来＋量词；大约、左右、前后", vi:"Số ước lượng — 十来个, 大约, 左右, 前后", tag:"特殊表达法 · 数的表示法",
goals:[
 "Dùng <b>số tròn + 来 + lượng từ</b>: khoảng.",
 "Ôn <b>大约、左右</b>.",
 "Dùng <b>前后</b> cho mốc thời gian."],
intro:"十<b>来</b>个人 = <b>khoảng</b> mười người. 前后 chỉ dùng cho <b>thời điểm</b>.",
rules:[
 {t:"Số (十, 二十, 百) + 来 + lượng từ + N", sub:"（1）来", fx:[["số tròn",""],["来",null],["lượng từ + N",""]], mean:"Khoảng, trên dưới.",
  ex:[["教室里有{1|二十}{2|来}{3|个学生}。","Jiàoshì li yǒu èrshí lái gè xuésheng.","Trong lớp có khoảng hai mươi học sinh."],
      ["从这儿走{1|十}{2|来}{3|分钟}就到。","Cóng zhèr zǒu shí lái fēnzhōng jiù dào.","Đi bộ từ đây chừng mười phút là đến."]]},
 {t:"大约 + số；số + 左右", sub:"（2）大约、左右", fx:[["大约",null],["số lượng",""],["左右",null]], mean:"Khoảng. Có thể dùng một trong hai.",
  ex:[["这件衣服{1|大约}{2|三百块}。","Zhè jiàn yīfu dàyuē sānbǎi kuài.","Áo này khoảng 300 tệ."],
      ["他{2|三十岁}{3|左右}。","Tā sānshí suì zuǒyòu.","Anh ấy chừng 30 tuổi."]]},
 {t:"mốc thời gian + 前后", sub:"（3）前后", fx:[["mốc thời gian",""],["前后",null]], mean:"Quãng trước sau mốc đó.",
  ex:[["{1|春节}{2|前后}车票很难买。","Chūnjié qiánhòu chēpiào hěn nán mǎi.","Dịp trước sau Tết vé xe rất khó mua."]]}],
cmp:[
 {vn:"hơn chục / khoảng chục quyển sách", zh:"[十来本]书", py:"shí lái běn shū", ok:true, why:"来 đứng giữa số và lượng từ."}],
ex:[
 ["我们公司有一百[来]个人。","Wǒmen gōngsī yǒu yìbǎi lái gè rén.","Công ty tôi có khoảng trăm người."],
 ["会议[大约]九点结束。","Huìyì dàyuē jiǔ diǎn jiéshù.","Họp khoảng 9 giờ kết thúc."],
 ["我打算国庆节[前后]回家。","Wǒ dǎsuàn Guóqìng Jié qiánhòu huí jiā.","Tôi định về quanh dịp Quốc khánh."]],
errs:[
 {bad:"三来个人（muốn nói khoảng ba người）", good:"两三个人", why:"来 thường đi với số tròn từ 10 trở lên."},
 {bad:"五十块前后", good:"五十块左右", why:"前后 chỉ dùng cho thời gian."},
 {bad:"二十个来人", good:"二十来个人", why:"来 đứng trước lượng từ."}],
practice:[
 {t:"A. Chọn đáp án", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"从这儿走十＿分钟就到。", vi:"Đi bộ chừng mười phút là đến.", o:["来","前后","大约"], a:0, why:"十来分钟."},
  {q:"他三十岁＿。", vi:"Anh ấy chừng 30 tuổi.", o:["左右","前后","来"], a:0, why:"Tuổi → 左右."},
  {q:"春节＿车票很难买。", vi:"Dịp Tết vé khó mua.", o:["前后","左右","来"], a:0, why:"Thời gian → 前后."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["教室里","有","二十","来","个","学生"], a:"教室里有二十来个学生。", vi:"Trong lớp có khoảng hai mươi học sinh."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Áo này khoảng 300 tệ.", a:"这件衣服大约三百块。/ 这件衣服三百块左右。/ 这件衣服大概三百块。/ 这件衣服大约三百块钱。"}]}],
rel:["三74","二73","新4.67"]
};
