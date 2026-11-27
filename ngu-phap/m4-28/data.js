// Bài ngữ pháp 【新4.28】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.28", title:"就是说／这就是说", vi:"就是说, 这就是说 — nghĩa là", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>就是说</b> để <b>giải thích lại</b> ý vừa nói.",
 "Dùng <b>这就是说</b> để rút ra kết luận.",
 "Hỏi lại cho rõ: 你的意思就是说……？"],
intro:"Giống “<b>nghĩa là, tức là</b>”. Đứng giữa hai câu: câu trước nêu sự việc, câu sau nói rõ ý.",
rules:[
 {t:"Câu 1，(也) 就是说，câu 2", sub:"（1）giải thích", fx:[["câu 1",""],["·",""],["也就是说",null],["·",""],["câu 2",""]], mean:"Tức là …",
  ex:[["{1|他明天出差}，{2|也就是说}，{3|不能参加会议了}。","Tā míngtiān chūchāi, yě jiùshì shuō, bù néng cānjiā huìyì le.","Mai anh ấy đi công tác, tức là không dự họp được."]]},
 {t:"Sự việc。这就是说，kết luận", sub:"（2）kết luận", fx:[["sự việc",""],["·",""],["这就是说",null],["·",""],["kết luận",""]], mean:"Điều đó có nghĩa là …",
  ex:[["{1|票已经卖完了}。{2|这就是说}，{3|我们今天看不成了}。","Piào yǐjīng màiwán le. Zhè jiùshì shuō, wǒmen jīntiān kàn bu chéng le.","Vé bán hết rồi. Nghĩa là hôm nay chúng ta không xem được nữa."]]}],
cmp:[
 {vn:"Ý bạn là bạn không đi?", zh:"你的意思[就是说]你不去？", py:"Nǐ de yìsi jiùshì shuō nǐ bú qù?", ok:true, why:"Dùng để xác nhận lại ý người nói."}],
ex:[
 ["飞机晚点两个小时，[就是说]十点才能到。","Fēijī wǎndiǎn liǎng gè xiǎoshí, jiùshì shuō shí diǎn cái néng dào.","Máy bay trễ hai tiếng, tức là 10 giờ mới đến."],
 ["他是我爸爸的弟弟，[也就是说]，他是我叔叔。","Tā shì wǒ bàba de dìdi, yě jiùshì shuō, tā shì wǒ shūshu.","Ông ấy là em trai bố tôi, nghĩa là chú tôi."],
 ["商店九点才开门，[这就是说]我们来早了。","Shāngdiàn jiǔ diǎn cái kāi mén, zhè jiùshì shuō wǒmen láizǎo le.","Cửa hàng 9 giờ mới mở, nghĩa là chúng ta đến sớm quá."]],
errs:[
 {bad:"他明天出差，是意思不能参加会议。", good:"他明天出差，也就是说，不能参加会议。", why:"Không dịch từng chữ “có nghĩa là” thành 是意思."},
 {bad:"他明天出差，也说就是，不能参加会议。", good:"他明天出差，也就是说，不能参加会议。", why:"Giữ đúng thứ tự cụm cố định 也就是说."}],
practice:[
 {t:"A. Chọn đáp án", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"飞机晚点两个小时，＿十点才能到。", vi:"Máy bay trễ hai tiếng, tức là 10 giờ mới đến.", o:["就是说","说不定","来得及"], a:0, why:"Giải thích lại."},
  {q:"“Nghĩa là chúng ta đến sớm quá.”", o:["这就是说我们来早了。","这意思是说不定我们来早了。"], a:0, why:"这就是说 + kết luận."},
  {q:"票卖完了，＿我们看不成了。", vi:"Vé hết rồi, nghĩa là chúng ta không xem được.", o:["也就是说","不怎么","来不及"], a:0, why:"Rút ra kết luận."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你的意思","就是说","你","不","去"], a:"你的意思就是说你不去？", vi:"Ý bạn là bạn không đi?"},
  {w:["他是我爸爸的弟弟，","也就是说，","他是","我叔叔"], a:"他是我爸爸的弟弟，也就是说，他是我叔叔。", vi:"Ông ấy là em trai bố tôi, nghĩa là chú tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Mai anh ấy đi công tác, tức là không dự họp được (dùng 也就是说).", a:"他明天出差，也就是说，不能参加会议了。/ 他明天出差，也就是说，不能参加会议。"}]}],
rel:["新4.40","二38"]
};
