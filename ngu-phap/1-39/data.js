// Bài ngữ pháp 【一39】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一39", title:"并列复句", vi:"Câu ghép đẳng lập — vừa… vừa…, … cũng …", tag:"句子的类型 · 复句",
goals:[
 "Ghép hai vế ngang hàng <b>không cần liên từ</b>, chỉ bằng dấu phẩy.",
 "Dùng <b>一边……，一边……</b> (vừa … vừa …) cho hai hành động cùng lúc.",
 "Dùng <b>……，也……</b> nối hai vế giống nhau; không dùng 和 nối hai câu."],
intro:"Câu ghép đẳng lập có hai (hoặc nhiều) vế ngang hàng. Tiếng Việt hay dùng “và”; tiếng Trung thường <b>chỉ dùng dấu phẩy</b> hoặc cặp từ nối.",
rules:[
 {t:"Không dùng từ nối", sub:"不用关联词语", fx:[["Vế 1",""],["，",null],["Vế 2",""]], mean:"Hai vế đặt cạnh nhau, ngăn bằng dấu phẩy.",
  ex:[["我喜欢看电视[，]弟弟喜欢打球。","Wǒ xǐhuan kàn diànshì, dìdi xǐhuan dǎ qiú.","Tôi thích xem ti vi, (còn) em trai thích chơi bóng.","等级标准"],
      ["他有一个哥哥[，]没有姐姐。","Tā yǒu yí ge gēge, méiyǒu jiějie.","Anh ấy có một anh trai, không có chị gái.","等级标准"]]},
 {t:"一边……，一边……", sub:"vừa … vừa …", fx:[["(S)",""],["一边",null],["V1",""],["，一边",null],["V2",""]], mean:"Hai hành động diễn ra cùng lúc, cùng một người làm.",
  ex:[["他[一边]走路，[一边]唱歌。","Tā yìbiān zǒu lù, yìbiān chàng gē.","Anh ấy vừa đi vừa hát.","等级标准"],
      ["哥哥[一边]看电视，[一边]吃东西。","Gēge yìbiān kàn diànshì, yìbiān chī dōngxi.","Anh trai vừa xem ti vi vừa ăn.","等级标准"]]},
 {t:"……，也……", sub:"cũng", fx:[["Vế 1",""],["，(S2) 也",null],["Vế 2",""]], mean:"Vế sau giống vế trước (khác chủ ngữ), hoặc thêm một đặc điểm (cùng chủ ngữ).",
  ex:[["我喜欢唱歌，弟弟[也]喜欢唱歌。","Wǒ xǐhuan chàng gē, dìdi yě xǐhuan chàng gē.","Tôi thích hát, em trai cũng thích hát.","等级标准"],
      ["这个房间很大，[也]很干净。","Zhège fángjiān hěn dà, yě hěn gānjìng.","Căn phòng này rộng, cũng rất sạch.","等级标准"]]}],
cmp:[
 {vn:"Anh ấy vừa đi vừa hát.", zh:"他[一边]走路，[一边]唱歌。", py:"Tā yìbiān zǒu lù, yìbiān chàng gē.", ok:true, why:"“vừa … vừa …” = 一边……，一边……"},
 {vn:"Tôi thích trà và em tôi thích cà phê.", zh:"我喜欢茶，弟弟喜欢咖啡。", py:"Wǒ xǐhuan chá, dìdi xǐhuan kāfēi.", ok:false, tag:"(không dùng 和)", why:"Nối hai câu chỉ bằng dấu phẩy."}],
ex:[
 ["我[一边]吃饭，[一边]看手机。","Wǒ yìbiān chī fàn, yìbiān kàn shǒujī.","Tôi vừa ăn cơm vừa xem điện thoại."],
 ["她会说中文，[也]会说英语。","Tā huì shuō Zhōngwén, yě huì shuō Yīngyǔ.","Cô ấy biết tiếng Trung, cũng biết tiếng Anh."],
 ["爸爸是医生，妈妈是老师。","Bàba shì yīshēng, māma shì lǎoshī.","Bố là bác sĩ, mẹ là giáo viên."]],
errs:[
 {bad:"我喜欢唱歌和弟弟喜欢跳舞。", good:"我喜欢唱歌，弟弟喜欢跳舞。", why:"和 không nối hai câu."},
 {bad:"他一边走路一边。", good:"他一边走路，一边唱歌。", why:"Mỗi 一边 đi với một động từ."},
 {bad:"我喜欢唱歌，也弟弟喜欢唱歌。", good:"我喜欢唱歌，弟弟也喜欢唱歌。", why:"也 đứng sau chủ ngữ."},
 {bad:"他一边很高，一边很帅。", good:"他很高，也很帅。", why:"一边 chỉ dùng với hành động, không với tính từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy vừa đi vừa hát.", o:["他一边走路，一边唱歌。","他走路一边，唱歌一边。","他一边走路和唱歌。"], a:0, why:"一边V1，一边V2."},
  {q:"Tôi thích hát, em trai cũng thích.", o:["我喜欢唱歌，也弟弟喜欢。","我喜欢唱歌，弟弟也喜欢。","我喜欢唱歌和弟弟也喜欢。"], a:1, why:"S2 + 也 + V."},
  {q:"Căn phòng này rộng, cũng rất sạch.", o:["这个房间一边很大，一边很干净。","这个房间很大，也很干净。","这个房间很大和很干净。"], a:1, why:"……，也……"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["哥哥","一边","看电视","一边","吃东西"], a:"哥哥一边看电视，一边吃东西。", vi:"Anh trai vừa xem ti vi vừa ăn."},
  {w:["他","有","一个哥哥","没有","姐姐"], a:"他有一个哥哥，没有姐姐。", vi:"Anh ấy có một anh trai, không có chị gái."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi vừa ăn cơm vừa xem điện thoại.", a:"我一边吃饭，一边看手机。"},
  {q:"Bố là bác sĩ, mẹ là giáo viên.", a:"爸爸是医生，妈妈是老师。"},
  {q:"Cô ấy biết tiếng Trung, cũng biết tiếng Anh.", a:"她会说中文，也会说英语。"}]}],
rel:["一13","一19","二62","三60"]
};
