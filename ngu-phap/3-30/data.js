// Bài ngữ pháp 【三30】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三30", title:"连词：并且、不光、不仅、另外、要是、因此、由于、只有", vi:"Liên từ HSK 3 — hơn nữa, không chỉ, ngoài ra, nếu, vì vậy, do, chỉ có", tag:"词类 · 连词",
goals:[
 "Nhận biết 8 liên từ HSK 3 và loại câu ghép chúng dẫn ra.",
 "Dùng <b>另外</b> (ngoài ra) để thêm một ý / việc.",
 "Biết cặp hô ứng: 不仅……还, 要是……就, 由于……所以, 只有……才."],
intro:"Đây là “bản đồ” liên từ HSK 3; cách dùng chi tiết nằm trong các bài câu ghép 【三65】–【三71】.",
rules:[
 {t:"Tăng tiến: 并且、不光、不仅", sub:"递进", fx:[["不仅 / 不光 … ，还 / 而且 …",null],["·",""],["……，并且……",null]], mean:"không chỉ … mà còn …; …, hơn nữa …",
  ex:[["他会说中文，[并且]说得很好。","Tā huì shuō Zhōngwén, bìngqiě shuō de hěn hǎo.","Anh ấy biết nói tiếng Trung, hơn nữa nói rất giỏi."]]},
 {t:"Bổ sung: 另外", sub:"另外", fx:[["Vế 1",""],["，另外，",null],["(还) Vế 2",""]], mean:"ngoài ra",
  ex:[["这星期我很忙，要上课，要准备考试，[另外]，还要参加一些学校活动。","Zhè xīngqī wǒ hěn máng, yào shàng kè, yào zhǔnbèi kǎoshì, lìngwài, hái yào cānjiā yìxiē xuéxiào huódòng.","Tuần này tôi rất bận, phải học, phải ôn thi, ngoài ra còn phải tham gia hoạt động của trường.","等级标准"],
      ["这次晚会他们准备了很多吃的、喝的，[另外]，还准备了不少礼物。","Zhè cì wǎnhuì tāmen zhǔnbèi le hěn duō chī de, hē de, lìngwài, hái zhǔnbèi le bù shǎo lǐwù.","Buổi tiệc lần này họ chuẩn bị nhiều đồ ăn thức uống, ngoài ra còn chuẩn bị khá nhiều quà.","等级标准"]]},
 {t:"要是 · 因此 · 由于 · 只有", sub:"假设 · 因果 · 条件", fx:[["要是 / 由于 / 只有",null],["Vế 1",""],["，就 / 因此 / 才",null],["Vế 2",""]], mean:"要是 nếu 【三69】 · 由于……因此 do … nên 【三71】 · 只有……才 chỉ có … mới 【三70】.",
  ex:[["[要是]明天下雨，我们就不去了。","Yàoshi míngtiān xià yǔ, wǒmen jiù bú qù le.","Nếu mai mưa thì chúng ta không đi nữa."],
      ["他很努力，[因此]进步很快。","Tā hěn nǔlì, yīncǐ jìnbù hěn kuài.","Anh ấy rất chăm, vì vậy tiến bộ rất nhanh."]]}],
cmp:[
 {vn:"Ngoài ra, còn phải mua quà.", zh:"[另外]，还要买礼物。", py:"Lìngwài, hái yào mǎi lǐwù.", ok:true, why:"“ngoài ra” = 另外, hay đi với 还."}],
ex:[
 ["[只有]多练习，才能说好中文。","Zhǐyǒu duō liànxí, cái néng shuōhǎo Zhōngwén.","Chỉ có luyện nhiều mới nói giỏi tiếng Trung."],
 ["[不仅]我喜欢，我妈妈也喜欢。","Bùjǐn wǒ xǐhuan, wǒ māma yě xǐhuan.","Không chỉ tôi thích, mẹ tôi cũng thích."]],
errs:[
 {bad:"只有多练习，就能说好中文。", good:"只有多练习，才能说好中文。", why:"只有 đi với 才."},
 {bad:"要是明天下雨，才我们不去。", good:"要是明天下雨，我们就不去了。", why:"要是 đi với 就, đặt sau chủ ngữ."}],
practice:[
 {t:"A. Chọn liên từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿＿多练习，才能说好中文。", vi:"＿＿ luyện nhiều mới nói giỏi tiếng Trung.", o:["只有","要是","另外"], a:0, why:"只有……才."},
  {q:"他很努力，＿＿进步很快。", vi:"Anh ấy rất chăm, ＿＿ tiến bộ nhanh.", o:["因此","并且","只有"], a:0, why:"Kết quả → 因此."},
  {q:"我要上课，＿＿，还要去医院。", vi:"Tôi phải đi học, ＿＿ còn phải đi bệnh viện.", o:["另外","要是","由于"], a:0, why:"Bổ sung → 另外."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","很努力","因此","进步","很快"], a:"他很努力，因此进步很快。", vi:"Anh ấy rất chăm, vì vậy tiến bộ rất nhanh."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Không chỉ tôi thích, mẹ tôi cũng thích.", a:"不仅我喜欢，我妈妈也喜欢。/ 不光我喜欢，我妈妈也喜欢。"}]}],
rel:["三65","三66","三69","三70","三71"]
};
