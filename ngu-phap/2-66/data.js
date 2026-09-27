// Bài ngữ pháp 【二66】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二66", title:"假设复句", vi:"Câu ghép giả thiết — nếu … thì …", tag:"句子的类型 · 复句",
goals:[
 "Nêu giả thiết và kết quả, có hoặc không có từ nối.",
 "Dùng <b>如果……，就……</b> và <b>……的话，就……</b>.",
 "Đặt 就 <b>sau chủ ngữ</b> của vế sau."],
intro:"Vế trước nêu <b>điều giả định</b>, vế sau nêu <b>kết quả</b>. Tiếng Việt: “Nếu … thì …”.",
rules:[
 {t:"Không dùng từ nối", sub:"（1）", fx:[["Giả thiết",""],["，",null],["Kết quả",""]], mean:"",
  ex:[["明天下雨，我们在家休息。","Míngtiān xià yǔ, wǒmen zài jiā xiūxi.","Mai mưa thì chúng tôi ở nhà nghỉ.","等级标准"],
      ["明天不下雨，我们出去玩儿。","Míngtiān bú xià yǔ, wǒmen chūqu wánr.","Mai không mưa thì chúng tôi ra ngoài chơi.","等级标准"]]},
 {t:"如果……，就…… / ……的话，就……", sub:"（2）", fx:[["如果",null],["Giả thiết",""],["(的话)，(S) 就",null],["Kết quả",""]], mean:"如果 và 的话 có thể dùng một trong hai, hoặc cả hai.",
  ex:[["[如果]你下午有时间，我们[就]一起去超市吧。","Rúguǒ nǐ xiàwǔ yǒu shíjiān, wǒmen jiù yìqǐ qù chāoshì ba.","Nếu chiều bạn có thời gian thì chúng mình cùng đi siêu thị nhé.","等级标准"],
      ["明天天气不好[的话]，我[就]不去公园了。","Míngtiān tiānqì bù hǎo dehuà, wǒ jiù bú qù gōngyuán le.","Nếu mai thời tiết không tốt thì tôi không đi công viên nữa.","等级标准"]]}],
cmp:[
 {vn:"Nếu mai mưa thì tôi không đi.", zh:"[如果]明天下雨，我[就]不去。", py:"Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù.", ok:true, why:"“thì tôi” → 我就."}],
ex:[
 ["[如果]你不舒服，[就]在家休息吧。","Rúguǒ nǐ bù shūfu, jiù zài jiā xiūxi ba.","Nếu bạn không khỏe thì ở nhà nghỉ đi."],
 ["你喜欢[的话]，[就]送给你。","Nǐ xǐhuan dehuà, jiù sòng gěi nǐ.","Nếu bạn thích thì tặng bạn."],
 ["[如果]我有钱，我[就]去中国旅游。","Rúguǒ wǒ yǒu qián, wǒ jiù qù Zhōngguó lǚyóu.","Nếu có tiền, tôi sẽ đi du lịch Trung Quốc."]],
errs:[
 {bad:"如果明天下雨，就我不去。", good:"如果明天下雨，我就不去。", why:"就 sau chủ ngữ."},
 {bad:"如果明天下雨，所以我不去。", good:"如果明天下雨，我就不去。", why:"如果 đi với 就, không đi với 所以."},
 {bad:"的话明天下雨，我不去。", good:"明天下雨的话，我不去。", why:"的话 đứng cuối vế giả thiết."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nếu mai mưa thì tôi không đi.", o:["如果明天下雨，就我不去。","如果明天下雨，我就不去。","如果明天下雨，所以我不去。"], a:1, why:"如果……S就……"},
  {q:"Nếu bạn thích thì tặng bạn.", o:["你喜欢的话，就送给你。","的话你喜欢，就送给你。","你喜欢，的话就送给你。"], a:0, why:"……的话，就……"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["如果","你","有时间","我们","就","一起去","吧"], a:"如果你有时间，我们就一起去吧。", vi:"Nếu bạn có thời gian thì mình cùng đi nhé."},
  {w:["明天","天气不好","的话","我","就","不去了"], a:"明天天气不好的话，我就不去了。", vi:"Nếu mai thời tiết xấu thì tôi không đi nữa."}]},
 {t:"C. Nối bằng 如果……就……", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我有钱 / 去中国旅游", a:"如果我有钱，我就去中国旅游。"},
  {q:"你不舒服 / 在家休息吧", a:"如果你不舒服，就在家休息吧。"}]}],
rel:["二17","二35","二67","二30"]
};
