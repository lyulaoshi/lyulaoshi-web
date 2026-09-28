// Bài ngữ pháp 【三65】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三65", title:"递进复句：……，并且……", vi:"…，并且… — …, và hơn nữa …", tag:"句子的类型 · 复句",
goals:[
 "Nối vế sau <b>bổ sung, tiến thêm</b> một bước bằng 并且.",
 "Chủ ngữ hai vế thường là một, vế sau lược chủ ngữ."],
intro:"并且 = “và, hơn nữa” — trang trọng hơn 而且 một chút, hay gặp trong văn viết.",
rules:[
 {t:"Vế 1，并且 + vế 2", sub:"递进", fx:[["Vế 1",""],["·",""],["并且",null],["vế 2",""]], mean:"",
  ex:[["专家们对这个问题进行了讨论，[并且]提出了解决办法。","Zhuānjiāmen duì zhège wèntí jìnxíng le tǎolùn, bìngqiě tíchū le jiějué bànfǎ.","Các chuyên gia đã thảo luận vấn đề này và còn đưa ra cách giải quyết.","等级标准"],
      ["这种办法可以保存食物，[并且]能保存很久。","Zhè zhǒng bànfǎ kěyǐ bǎocún shíwù, bìngqiě néng bǎocún hěn jiǔ.","Cách này có thể bảo quản thực phẩm, hơn nữa bảo quản được rất lâu.","等级标准"]]}],
cmp:[
 {vn:"Anh ấy đồng ý, hơn nữa còn giúp tôi.", zh:"他同意了，[并且]还帮了我。", py:"Tā tóngyì le, bìngqiě hái bāng le wǒ.", ok:true, why:"并且 đứng đầu vế sau; có thể thêm 还."}],
ex:[
 ["她学习很努力，[并且]成绩很好。","Tā xuéxí hěn nǔlì, bìngqiě chéngjì hěn hǎo.","Cô ấy học rất chăm, hơn nữa thành tích rất tốt."]],
errs:[
 {bad:"我喜欢苹果并且香蕉。", good:"我喜欢苹果和香蕉。", why:"Nối hai danh từ dùng 和; 并且 nối động từ / vế câu."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi thích táo và chuối.", o:["我喜欢苹果并且香蕉。","我喜欢苹果和香蕉。"], a:1, why:"Danh từ dùng 和."},
  {q:"Họ đã thảo luận và còn đưa ra cách giải quyết.", o:["他们讨论了，并且提出了办法。","他们讨论了，和提出了办法。"], a:0, why:"Nối vế câu dùng 并且."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","学习","很努力，","并且","成绩","很好"], a:"她学习很努力，并且成绩很好。", vi:"Cô ấy học rất chăm, hơn nữa thành tích rất tốt."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cách này có thể bảo quản thực phẩm, hơn nữa bảo quản được rất lâu.", a:"这种办法可以保存食物，并且能保存很久。/ 这种办法可以保存食物，而且能保存很久。"}]}],
rel:["三30","三66","二63","三62"]
};
