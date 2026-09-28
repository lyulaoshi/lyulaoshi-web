// Bài ngữ pháp 【三38】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三38", title:"除了……（以外），……还 / 也 / 都……", vi:"除了……（以外）…… — ngoài … ra, còn / cũng / đều …", tag:"固定格式",
goals:[
 "Dùng khung đầy đủ <b>除了……（以外），……</b>.",
 "Chọn đúng: <b>还 / 也</b> (cộng thêm) hay <b>都</b> (loại trừ).",
 "Biết 以外 có thể lược."],
intro:"Khung cố định mở rộng từ giới từ 除了 【三28】. Thêm 以外 cho câu trang trọng, rõ ràng hơn.",
rules:[
 {t:"除了 A（以外），(S) 还 / 也 B", sub:"包括", fx:[["除了",null],["A",""],["(以外)，",""],["还 / 也",null],["B",""]], mean:"Ngoài A còn có B.",
  ex:[["[除了]上课，我[还]要参加各种活动。","Chúle shàng kè, wǒ hái yào cānjiā gè zhǒng huódòng.","Ngoài việc học, tôi còn phải tham gia nhiều hoạt động.","等级标准"],
      ["[除了]我，我姐姐和弟弟[也]会说中文。","Chúle wǒ, wǒ jiějie hé dìdi yě huì shuō Zhōngwén.","Ngoài tôi ra, chị và em trai tôi cũng biết tiếng Trung.","等级标准"]]},
 {t:"除了 A（以外），(S) 都 B", sub:"排除", fx:[["除了",null],["A",""],["(以外)，",""],["都",null],["B",""]], mean:"Trừ A, đều B.",
  ex:[["[除了]北京[以外]，中国的其他城市我[都]没去过。","Chúle Běijīng yǐwài, Zhōngguó de qítā chéngshì wǒ dōu méi qù guo.","Ngoài Bắc Kinh ra, các thành phố khác của Trung Quốc tôi đều chưa đến.","等级标准"]]}],
cmp:[
 {vn:"Ngoài tiếng Anh ra, tôi còn học tiếng Trung.", zh:"[除了]英语[以外]，我[还]学中文。", py:"Chúle Yīngyǔ yǐwài, wǒ hái xué Zhōngwén.", ok:true, why:"“ngoài … ra” = 除了……以外."}],
ex:[
 ["[除了]周末[以外]，我每天[都]很忙。","Chúle zhōumò yǐwài, wǒ měi tiān dōu hěn máng.","Trừ cuối tuần ra, ngày nào tôi cũng rất bận."],
 ["[除了]唱歌，她[还]喜欢跳舞。","Chúle chàng gē, tā hái xǐhuan tiào wǔ.","Ngoài hát, cô ấy còn thích nhảy."]],
errs:[
 {bad:"除了他以外，我们也是留学生。（ý: trừ anh ấy ra）", good:"除了他以外，我们都是留学生。", why:"Nghĩa loại trừ dùng 都; dùng 也 thì thành “ngoài anh ấy, chúng tôi cũng là…”."},
 {bad:"除了以外上课，……", good:"除了上课（以外），……", why:"Nội dung nằm giữa 除了 và 以外."}],
practice:[
 {t:"A. Điền 还 / 也 / 都", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"除了上课，我＿要参加活动。", vi:"Ngoài việc học, tôi ＿ phải tham gia hoạt động.", o:["还","都"], a:0, why:"Cộng thêm."},
  {q:"除了周末以外，我每天＿很忙。", vi:"Trừ cuối tuần, ngày nào tôi ＿ rất bận.", o:["还","都"], a:1, why:"Loại trừ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["除了","唱歌","她","还","喜欢","跳舞"], a:"除了唱歌，她还喜欢跳舞。", vi:"Ngoài hát, cô ấy còn thích nhảy."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Ngoài tôi ra, chị tôi cũng biết tiếng Trung.", a:"除了我（以外），我姐姐也会说中文。/ 除了我，我姐姐也会中文。"}]}],
rel:["三28","一10","一13","三30"]
};
