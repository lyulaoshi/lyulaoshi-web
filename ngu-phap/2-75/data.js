// Bài ngữ pháp 【二75】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二75", title:"用“好吗、可以吗、行吗、怎么样”提问", vi:"Hỏi ý kiến cuối câu — … được không? … thế nào?", tag:"提问的方法",
goals:[
 "Đề nghị rồi hỏi ý kiến bằng <b>……，好吗 / 可以吗 / 行吗 / 怎么样？</b>",
 "Trả lời: <b>好 / 可以 / 行 / 不行…</b>",
 "Đặt câu hỏi đuôi sau dấu phẩy, ở cuối câu."],
intro:"Nói đề nghị trước, sau đó thêm “câu hỏi đuôi” để hỏi ý người nghe — rất giống “…, được không?” của tiếng Việt.",
rules:[
 {t:"Đề nghị，好吗 / 可以吗 / 行吗 / 怎么样？", sub:"", fx:[["Đề nghị",""],["，",""],["好吗 / 可以吗 / 行吗 / 怎么样",null],["？",""]], mean:"",
  ex:[["我们明天八点出发，[好吗]？","Wǒmen míngtiān bā diǎn chūfā, hǎo ma?","Mai mình xuất phát lúc 8 giờ, được không?","等级标准"],
      ["你明天早点儿来，[可以吗]？","Nǐ míngtiān zǎo diǎnr lái, kěyǐ ma?","Mai bạn đến sớm một chút, được không?","等级标准"],
      ["你的词典借我用用，[行吗]？","Nǐ de cídiǎn jiè wǒ yòngyong, xíng ma?","Cho tôi mượn từ điển dùng một chút, được không?","等级标准"],
      ["我们今天吃面条儿，[怎么样]？","Wǒmen jīntiān chī miàntiáor, zěnmeyàng?","Hôm nay mình ăn mì, thế nào?","等级标准"]]}],
cmp:[
 {vn:"Mai gặp nhau nhé, được không?", zh:"明天见面，[好吗]？", py:"Míngtiān jiàn miàn, hǎo ma?", ok:true, why:"Giống tiếng Việt."},
 {vn:"— Được!", zh:"好！/ 可以！/ 行！", py:"Hǎo! / Kěyǐ! / Xíng!", ok:true, why:"Trả lời theo từ hỏi."}],
ex:[
 ["我们一起去，[好不好]？","Wǒmen yìqǐ qù, hǎo bu hǎo?","Mình cùng đi, được không?"],
 ["我坐这儿，[可以吗]？——可以。","Wǒ zuò zhèr, kěyǐ ma? —— Kěyǐ.","Tôi ngồi đây được không? — Được."],
 ["周末去爬山，[怎么样]？——好啊！","Zhōumò qù pá shān, zěnmeyàng? —— Hǎo a!","Cuối tuần đi leo núi, thế nào? — Hay đấy!"]],
errs:[
 {bad:"好吗我们明天八点出发？", good:"我们明天八点出发，好吗？", why:"Câu hỏi đuôi đứng cuối."},
 {bad:"我们吃面条儿，怎么样吗？", good:"我们吃面条儿，怎么样？", why:"Không thêm 吗 sau 怎么样."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mai 8 giờ đi, được không?", o:["好吗明天八点走？","明天八点走，好吗？","明天八点走，好吗吗？"], a:1, why:"Đuôi cuối câu."},
  {q:"Hôm nay ăn mì, thế nào?", o:["今天吃面条儿，怎么样？","今天吃面条儿，怎么样吗？","怎么样今天吃面条儿？"], a:0, why:"……，怎么样？"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","明天","八点","出发","好吗"], a:"我们明天八点出发，好吗？", vi:"Mai mình xuất phát lúc 8 giờ, được không?"},
  {w:["你的词典","借我","用用","行吗"], a:"你的词典借我用用，行吗？", vi:"Cho tôi mượn từ điển dùng chút được không?"}]},
 {t:"C. Đề nghị bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cuối tuần đi leo núi, thế nào?", a:"周末去爬山，怎么样？"},
  {q:"Tôi ngồi đây được không?", a:"我坐这儿，可以吗？"}]}],
rel:["二01","二05","一45","二76"]
};
