// Bài ngữ pháp 【二63】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二63", title:"递进复句", vi:"Câu ghép tăng tiến — không những … mà còn …", tag:"句子的类型 · 复句",
goals:[
 "Nói ý tăng thêm, tiến thêm một bậc.",
 "Dùng <b>……，更 / 还……</b> và <b>不但……，而且……</b>.",
 "Đặt 不但 đúng chỗ: cùng chủ ngữ thì 不但 <b>sau</b> chủ ngữ."],
intro:"Vế sau nói thêm một ý <b>mạnh hơn</b> vế trước. Tiếng Việt: “không những … mà còn …”, “… còn … hơn”.",
rules:[
 {t:"Không dùng từ nối", sub:"（1）", fx:[["Vế 1",""],["，",null],["Vế 2 (tăng thêm)",""]], mean:"",
  ex:[["那个地方我去过了，去过两次了。","Nàge dìfang wǒ qù guo le, qù guo liǎng cì le.","Chỗ đó tôi đi rồi, đi hai lần rồi.","等级标准"],
      ["他弟弟会说中文，说得很流利。","Tā dìdi huì shuō Zhōngwén, shuō de hěn liúlì.","Em trai anh ấy biết nói tiếng Trung, nói rất lưu loát.","等级标准"]]},
 {t:"……，更 / 还……", sub:"（2）", fx:[["Vế 1",""],["，(S) 更 / 还",null],["Vế 2",""]], mean:"",
  ex:[["昨天很冷，今天[更]冷。","Zuótiān hěn lěng, jīntiān gèng lěng.","Hôm qua lạnh, hôm nay còn lạnh hơn.","等级标准"],
      ["班长学习很好，[还]经常帮助同学。","Bānzhǎng xuéxí hěn hǎo, hái jīngcháng bāngzhù tóngxué.","Lớp trưởng học giỏi, lại còn hay giúp bạn.","等级标准"]]},
 {t:"不但……，而且……", sub:"（3）", fx:[["(S) 不但",null],["Vế 1",""],["，而且",null],["Vế 2",""]], mean:"Không những … mà còn …",
  ex:[["她[不但]会说中文，[而且]说得很好。","Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.","Cô ấy không những biết nói tiếng Trung mà còn nói rất giỏi.","等级标准"]]}],
cmp:[
 {vn:"Cô ấy không những xinh mà còn thông minh.", zh:"她[不但]漂亮，[而且]很聪明。", py:"Tā búdàn piàoliang, érqiě hěn cōngming.", ok:true, why:"Giống khung tiếng Việt."}],
ex:[
 ["这个饭馆[不但]好吃，[而且]很便宜。","Zhège fànguǎn búdàn hǎochī, érqiě hěn piányi.","Quán này không những ngon mà còn rẻ."],
 ["他[不但]会唱歌，[还]会跳舞。","Tā búdàn huì chàng gē, hái huì tiào wǔ.","Anh ấy không những biết hát mà còn biết nhảy."],
 ["这次考试很难，下次[更]难。","Zhè cì kǎoshì hěn nán, xià cì gèng nán.","Kỳ thi này khó, lần sau còn khó hơn."]],
errs:[
 {bad:"不但她会说中文，而且说得很好。", good:"她不但会说中文，而且说得很好。", why:"Cùng chủ ngữ: 不但 đứng sau chủ ngữ."},
 {bad:"她不但会说中文，和说得很好。", good:"她不但会说中文，而且说得很好。", why:"Vế sau dùng 而且, không dùng 和."},
 {bad:"昨天很冷，今天很更冷。", good:"昨天很冷，今天更冷。", why:"Không dùng 很 với 更."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy không những biết tiếng Trung mà còn nói giỏi.", o:["不但她会说中文，而且说得很好。","她不但会说中文，而且说得很好。","她会说中文不但，而且说得很好。"], a:1, why:"S + 不但."},
  {q:"Hôm qua lạnh, hôm nay còn lạnh hơn.", o:["昨天很冷，今天更冷。","昨天很冷，今天很更冷。","昨天很冷，更今天冷。"], a:0, why:"更 + Adj."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个饭馆","不但","好吃","而且","很便宜"], a:"这个饭馆不但好吃，而且很便宜。", vi:"Quán này không những ngon mà còn rẻ."},
  {w:["班长","学习很好","还","经常","帮助","同学"], a:"班长学习很好，还经常帮助同学。", vi:"Lớp trưởng học giỏi, lại hay giúp bạn."}]},
 {t:"C. Nối bằng 不但……而且……", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"他会唱歌 / 唱得很好", vi:"Anh ấy biết hát / hát rất hay", a:"他不但会唱歌，而且唱得很好。"},
  {q:"这件衣服很便宜 / 很好看", vi:"Chiếc áo này rất rẻ / rất đẹp", a:"这件衣服不但很便宜，而且很好看。"}]}],
rel:["二30","三66","三65","二13"]
};
