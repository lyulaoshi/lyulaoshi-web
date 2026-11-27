// Bài ngữ pháp 【新4.19】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.19", title:"连词：此外、既然、甚至、加上……", vi:"此外, 既然, 甚至, 加上 — ngoài ra, đã … thì, thậm chí, thêm nữa", tag:"词类 · 连词",
goals:[
 "Dùng <b>此外</b> và <b>加上</b> để thêm ý.",
 "Dùng <b>既然……就……</b>: đã … thì …",
 "Dùng <b>甚至</b> nêu mức cao nhất."],
intro:"Điểm này trong đề cương còn gồm 而, 不过, 并且, 不光, 不仅, 另外, 要是, 因此, 由于 (xem 【三30】, 【二30】 và các bài câu ghép).",
rules:[
 {t:"Ý 1。此外，ý 2", sub:"（1）此外", fx:[["ý 1",""],["，",""],["此外",null],["，",""],["ý 2",""]], mean:"Ngoài ra (văn viết).",
  ex:[["{1|他会说英语}，{2|此外}，{3|还会说法语}。","Tā huì shuō Yīngyǔ, cǐwài, hái huì shuō Fǎyǔ.","Anh ấy nói được tiếng Anh, ngoài ra còn nói được tiếng Pháp."]]},
 {t:"Lý do 1，加上 + lý do 2，kết quả", sub:"（2）加上", fx:[["lý do 1",""],["，",""],["加上",null],["lý do 2",""],["，",""],["kết quả",""]], mean:"Thêm vào đó.",
  ex:[["{1|天气不好}，{2|加上}{3|路上堵车}，{4|我迟到了}。","Tiānqì bù hǎo, jiāshàng lùshang dǔchē, wǒ chídào le.","Trời xấu, thêm tắc đường, nên tôi đến muộn."]]},
 {t:"既然 + sự thật，(S) 就 …", sub:"（3）既然", fx:[["既然",null],["sự thật đã rõ",""],["，",""],["就",null],["đề nghị",""]], mean:"Đã … thì …",
  ex:[["{1|既然}{2|你不舒服}，{3|就}{4|早点儿休息吧}。","Jìrán nǐ bù shūfu, jiù zǎo diǎnr xiūxi ba.","Bạn đã không khỏe thì nghỉ sớm đi."]]},
 {t:"…，甚至 + mức cao nhất", sub:"（4）甚至", fx:[["sự việc",""],["，",""],["甚至",null],["mức cao hơn",""]], mean:"Thậm chí.",
  ex:[["{1|他太忙了}，{2|甚至}{3|没时间吃饭}。","Tā tài máng le, shènzhì méi shíjiān chī fàn.","Anh ấy bận quá, thậm chí không có thời gian ăn."]]}],
cmp:[
 {vn:"Đã đến rồi thì vào ngồi chơi.", zh:"[既然]来了，就进来坐坐吧。", py:"Jìrán lái le, jiù jìnlai zuòzuo ba.", ok:true, why:"既然 nói việc đã xảy ra."}],
ex:[
 ["请带护照，[此外]还要带两张照片。","Qǐng dài hùzhào, cǐwài hái yào dài liǎng zhāng zhàopiàn.","Mang hộ chiếu, ngoài ra mang hai ảnh."],
 ["[既然]决定了，[就]别后悔。","Jìrán juédìng le, jiù bié hòuhuǐ.","Đã quyết thì đừng hối hận."],
 ["这个问题很难，[甚至]老师也不会。","Zhège wèntí hěn nán, shènzhì lǎoshī yě bú huì.","Bài này khó, đến thầy cũng không làm được."]],
errs:[
 {bad:"既然明天下雨，我们就不去。（chưa chắc mưa）", good:"如果明天下雨，我们就不去。", why:"既然 dùng cho điều đã biết chắc."},
 {bad:"既然你累了，所以休息吧。", good:"既然你累了，就休息吧。", why:"既然 đi với 就."},
 {bad:"他会英语，此外他不会法语。", good:"他会英语，不过不会法语。", why:"此外 dùng để thêm ý cùng chiều."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿你知道了，我就不说了。", vi:"Bạn đã biết thì tôi không nói nữa.", o:["既然","甚至","加上"], a:0, why:"既然……就."},
  {q:"他忙得＿忘了自己的生日。", vi:"Anh ấy bận đến mức thậm chí quên sinh nhật mình.", o:["甚至","既然","此外"], a:0, why:"Mức cao nhất."},
  {q:"工作很多，＿身体不好，他很累。", vi:"Việc nhiều, thêm sức khỏe kém, anh ấy rất mệt.", o:["加上","既然","甚至于是"], a:0, why:"Thêm lý do → 加上."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["既然","决定了，","就","别","后悔"], a:"既然决定了，就别后悔。", vi:"Đã quyết thì đừng hối hận."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bạn đã không khỏe thì nghỉ sớm đi.", a:"既然你不舒服，就早点儿休息吧。/ 你既然不舒服，就早点儿休息吧。/ 既然你不舒服，就早点休息吧。"}]}],
rel:["三30","新4.57","新4.62"]
};
