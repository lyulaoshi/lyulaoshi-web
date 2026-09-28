// Bài ngữ pháp 【一22】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一22", title:"语气助词：吧、了、吗、呢", vi:"Trợ từ ngữ khí cuối câu — 吧, 了², 吗, 呢", tag:"词类 · 助词",
goals:[
 "Dùng <b>吧</b> để đề nghị, rủ rê (…đi, …nhé).",
 "Dùng <b>了²</b> cuối câu để nói tình huống đã thay đổi.",
 "Phân biệt <b>吗</b> (hỏi có / không) và <b>呢</b> (hỏi tiếp “còn…?”, hoặc “đang…”)."],
intro:"Trợ từ ngữ khí đứng <b>cuối câu</b>, đọc thanh nhẹ, cho câu thêm sắc thái — giống “nhé, rồi, à, thế” trong tiếng Việt.",
rules:[
 {t:"吧: đề nghị, rủ rê", sub:"吧¹", fx:[["Câu",""],["吧",null]], mean:"…đi, …nhé.",
  ex:[["我们走[吧]。","Wǒmen zǒu ba.","Chúng mình đi thôi.","等级标准"]]},
 {t:"了²: thay đổi, đã rồi", sub:"了²", fx:[["Câu",""],["了",null]], mean:"Tình huống mới xuất hiện: …rồi. Xem 【一40】.",
  ex:[["我累[了]。","Wǒ lèi le.","Tôi mệt rồi.","等级标准"]]},
 {t:"吗: hỏi có / không", sub:"吗", fx:[["Câu trần thuật",""],["吗",null],["？",""]], mean:"Không dùng 吗 cùng từ để hỏi, 还是, dạng 是不是 【一45】.",
  ex:[["她是医生[吗]？","Tā shì yīshēng ma?","Cô ấy là bác sĩ à?","等级标准"]]},
 {t:"呢: hỏi tiếp, làm mềm; đang", sub:"呢", fx:[["Câu hỏi / N",""],["呢",null]], mean:"① Thêm vào câu có từ để hỏi cho mềm; ② N + 呢？ = còn N thì sao? 【二77】; ③ cuối câu “đang…” 【一42】.",
  ex:[["他是哪国人[呢]？","Tā shì nǎ guó rén ne?","Anh ấy là người nước nào nhỉ?","等级标准"],
      ["我在看书[呢]。","Wǒ zài kàn shū ne.","Tôi đang đọc sách.","等级标准"]]}],
cmp:[
 {vn:"Mình đi nhé!", zh:"我们走[吧]！", py:"Wǒmen zǒu ba!", ok:true, why:"“nhé / đi” → 吧."},
 {vn:"Bạn là học sinh à?", zh:"你是学生[吗]？", py:"Nǐ shì xuésheng ma?", ok:true, why:"“à / không?” → 吗."},
 {vn:"Mình khỏe, còn bạn?", zh:"我很好，你[呢]？", py:"Wǒ hěn hǎo, nǐ ne?", ok:true, why:"“còn … ?” → 呢."}],
ex:[
 ["你明天来[吧]。","Nǐ míngtiān lái ba.","Mai bạn đến nhé."],
 ["下雨[了]。","Xià yǔ le.","Mưa rồi."],
 ["你喜欢中文[吗]？","Nǐ xǐhuan Zhōngwén ma?","Bạn thích tiếng Trung không?"],
 ["我的书[呢]？","Wǒ de shū ne?","Sách của tôi đâu rồi?"],
 ["你想吃什么[呢]？","Nǐ xiǎng chī shénme ne?","Bạn muốn ăn gì nào?"]],
errs:[
 {bad:"你去哪儿吗？", good:"你去哪儿（呢）？", why:"Có từ để hỏi không dùng 吗."},
 {bad:"我们走吗。（ý: rủ đi）", good:"我们走吧。", why:"Rủ rê dùng 吧."},
 {bad:"你是学生呢？（ý: hỏi có / không）", good:"你是学生吗？", why:"Câu hỏi có / không dùng 吗."},
 {bad:"我在看书了。", good:"我在看书呢。", why:"“đang” đi với 呢, không đi với 了."}],
practice:[
 {t:"A. Điền trợ từ", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我们一起去＿＿！(rủ)", vi:"Chúng mình cùng đi ＿＿!", o:["吧","吗","呢"], a:0, why:"Rủ rê → 吧."},
  {q:"你是中国人＿＿？", vi:"Bạn là người Trung Quốc ＿＿?", o:["吧","吗","呢"], a:1, why:"Hỏi có / không → 吗."},
  {q:"我很好，你＿＿？", vi:"Tôi khỏe, bạn ＿＿?", o:["吗","了","呢"], a:2, why:"Còn bạn? → 呢."},
  {q:"下雨＿＿，我们别去了。", vi:"Mưa ＿＿, chúng ta đừng đi nữa.", o:["了","吗","吧"], a:0, why:"Tình huống thay đổi → 了."},
  {q:"你去哪儿＿＿？", vi:"Bạn đi đâu ＿＿?", o:["吗","呢","吧"], a:1, why:"Có 哪儿 → không dùng 吗."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","走","吧"], a:"我们走吧。", vi:"Chúng mình đi thôi."},
  {w:["她","是","医生","吗"], a:"她是医生吗？", vi:"Cô ấy là bác sĩ à?"},
  {w:["我","在","看书","呢"], a:"我在看书呢。", vi:"Tôi đang đọc sách."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi mệt rồi.", a:"我累了。"},
  {q:"Sách của tôi đâu rồi?", a:"我的书呢？"},
  {q:"Mai bạn đến nhé.", a:"你明天来吧。"}]}],
rel:["一40","一42","一45","二77","二79"]
};
