// Bài ngữ pháp 【三69】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三69", title:"假设复句：要是……，就……", vi:"要是…，就… — nếu …, thì …", tag:"句子的类型 · 复句",
goals:[
 "Nêu giả thiết bằng <b>要是……，就……</b> (khẩu ngữ, giống 如果).",
 "Đặt 就 <b>sau chủ ngữ</b> của vế sau, trước động từ."],
intro:"要是 = 如果 nhưng thân mật, hay dùng khi nói. Vế sau thường có 就.",
rules:[
 {t:"要是 + giả thiết，(S) + 就 + kết quả", sub:"假设", fx:[["要是",null],["giả thiết",""],["·",""],["S + 就",null],["kết quả",""]], mean:"",
  ex:[["[要是]不开心，我[就]会大声唱歌。","Yàoshi bù kāixīn, wǒ jiù huì dàshēng chàng gē.","Nếu không vui, tôi sẽ hát thật to.","等级标准"],
      ["[要是]你明天有时间，[就]跟我一起去长城吧。","Yàoshi nǐ míngtiān yǒu shíjiān, jiù gēn wǒ yìqǐ qù Chángchéng ba.","Nếu mai bạn có thời gian thì đi Trường Thành với tôi nhé.","等级标准"]]}],
cmp:[
 {vn:"Nếu trời mưa thì tôi không đi.", zh:"[要是]下雨，我[就]不去了。", py:"Yàoshi xià yǔ, wǒ jiù bú qù le.", ok:true, why:"“thì” = 就, đặt sau 我, không đặt trước 我."}],
ex:[
 ["[要是]你不懂，[就]问老师。","Yàoshi nǐ bù dǒng, jiù wèn lǎoshī.","Nếu bạn không hiểu thì hỏi thầy."]],
errs:[
 {bad:"要是下雨，就我不去了。", good:"要是下雨，我就不去了。", why:"就 là phó từ, đứng sau chủ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nếu trời mưa thì tôi không đi.", o:["要是下雨，就我不去了。","要是下雨，我就不去了。"], a:1, why:"S + 就."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["要是","你","不懂，","就","问","老师"], a:"要是你不懂，就问老师。", vi:"Nếu bạn không hiểu thì hỏi thầy."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Nếu mai bạn có thời gian thì đi với tôi nhé.", a:"要是你明天有时间，就跟我一起去吧。/ 你明天要是有时间，就跟我一起去吧。/ 如果你明天有时间，就跟我一起去吧。"}]}],
rel:["二66","三30","三70","二67"]
};
