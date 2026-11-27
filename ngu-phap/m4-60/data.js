// Bài ngữ pháp 【新4.60】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.60", title:"假设复句：要是……，就……；……，否则……", vi:"Nếu … thì; … nếu không thì …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>否则</b>: nếu không thì.",
 "Ôn <b>要是……就……</b> (【三69】).",
 "Kết hợp <b>要是……就……，否则……</b>."],
intro:"<b>否则</b> = 要不然 (nếu không), thiên về văn viết, đứng đầu vế sau.",
rules:[
 {t:"Điều cần làm，否则 + hậu quả", sub:"（1）否则", fx:[["điều cần làm",""],["，",""],["否则",null],["hậu quả",""]], mean:"Nếu không thì.",
  ex:[["{1|你要早点儿出发}，{2|否则}{3|会迟到的}。","Nǐ yào zǎo diǎnr chūfā, fǒuzé huì chídào de.","Bạn phải đi sớm, không thì sẽ muộn."],
      ["{1|必须带护照}，{2|否则}{3|不能上飞机}。","Bìxū dài hùzhào, fǒuzé bù néng shàng fēijī.","Phải mang hộ chiếu, nếu không thì không được lên máy bay."]]},
 {t:"要是 + giả thiết，(S) 就 …", sub:"（2）要是", fx:[["要是",null],["giả thiết",""],["，",""],["就",null],["kết quả",""]], mean:"Nếu … thì …",
  ex:[["{1|要是}{2|你没空儿}，我{3|就}{4|自己去}。","Yàoshi nǐ méi kòngr, wǒ jiù zìjǐ qù.","Nếu bạn không rảnh thì tôi tự đi."]]}],
cmp:[
 {vn:"Mau uống thuốc đi, không thì bệnh nặng thêm.", zh:"快吃药吧，[否则]病会更重。", py:"Kuài chī yào ba, fǒuzé bìng huì gèng zhòng.", ok:true, why:"否则 đứng đầu vế hậu quả."}],
ex:[
 ["多穿点儿，[否则]要感冒了。","Duō chuān diǎnr, fǒuzé yào gǎnmào le.","Mặc thêm vào, không thì cảm đấy."],
 ["[要是]有问题[就]问我，[否则]我以为你懂了。","Yàoshi yǒu wèntí jiù wèn wǒ, fǒuzé wǒ yǐwéi nǐ dǒng le.","Có thắc mắc thì hỏi tôi, không thì tôi tưởng bạn hiểu rồi."],
 ["他一定有事，[否则]不会不来。","Tā yídìng yǒu shì, fǒuzé bú huì bù lái.","Chắc anh ấy có việc, không thì đã không vắng."]],
errs:[
 {bad:"否则快走，会迟到。", good:"快走，否则会迟到。", why:"否则 đứng ở vế sau."},
 {bad:"你早点儿去，否则就不会迟到。", good:"你早点儿去，就不会迟到。", why:"Sau 否则 là hậu quả xấu khi không làm."},
 {bad:"要是下雨，否则不去。", good:"要是下雨，就不去。", why:"要是 đi với 就."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"快点儿，＿赶不上车了。", vi:"Nhanh lên, không thì lỡ xe.", o:["否则","于是","尽管"], a:0, why:"Nếu không."},
  {q:"要是你喜欢，＿买吧。", vi:"Nếu bạn thích thì mua đi.", o:["就","否则","却"], a:0, why:"要是……就."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["必须","带护照，","否则","不能","上飞机"], a:"必须带护照，否则不能上飞机。", vi:"Phải mang hộ chiếu, nếu không thì không được lên máy bay."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bạn phải đi sớm, không thì sẽ muộn (dùng 否则).", a:"你要早点儿出发，否则会迟到的。/ 你要早点儿走，否则会迟到的。/ 你应该早点儿出发，否则会迟到。"}]}],
rel:["三69","新5.36","二66"]
};
