// Bài ngữ pháp 【三07】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三07", title:"疑问代词的非疑问用法", vi:"Đại từ nghi vấn dùng không để hỏi — ai cũng, gì cũng, đâu đó", tag:"词类 · 代词",
goals:[
 "Dùng <b>từ để hỏi + 都 / 也</b> nghĩa “bất cứ … cũng”: 谁都喜欢她.",
 "Dùng <b>hai từ để hỏi hô ứng</b>: 想吃什么吃什么 (muốn ăn gì thì ăn nấy).",
 "Dùng từ để hỏi chỉ <b>điều không xác định</b>: 在哪儿见过 (đã gặp ở đâu đó)."],
intro:"谁、什么、哪儿、怎么… không phải lúc nào cũng để hỏi. Trong các khung dưới đây, chúng mang nghĩa <b>“bất kỳ”</b> hoặc <b>“nào đó”</b>, và câu kết thúc bằng dấu chấm.",
rules:[
 {t:"Chỉ bất kỳ: từ để hỏi + 都 / 也", sub:"任指 ①", fx:[["谁 / 什么 / 哪儿 / 怎么…",null],["都 / 也",null],["(不 / 没) + V",""]], mean:"ai cũng, gì cũng, đâu cũng…",
  ex:[["[谁都]喜欢她。","Shéi dōu xǐhuan tā.","Ai cũng thích cô ấy.","等级标准"],
      ["我吃[什么都]行。","Wǒ chī shénme dōu xíng.","Tôi ăn gì cũng được.","等级标准"],
      ["我[哪儿都]没去过。","Wǒ nǎr dōu méi qù guo.","Tôi chưa đi đâu cả.","等级标准"]]},
 {t:"Hai từ để hỏi hô ứng", sub:"任指 ②", fx:[["V1 + 什么 / 谁 / 哪儿…",null],["(就)",""],["V2 + 什么 / 谁 / 哪儿…",null]], mean:"muốn … gì thì … nấy.",
  ex:[["你们随便吃，想吃[什么]吃[什么]。","Nǐmen suíbiàn chī, xiǎng chī shénme chī shénme.","Các bạn cứ tự nhiên, muốn ăn gì thì ăn.","等级标准"],
      ["[谁]想参加比赛[谁]就报名参加。","Shéi xiǎng cānjiā bǐsài shéi jiù bàomíng cānjiā.","Ai muốn thi thì người đó đăng ký.","等级标准"],
      ["你[怎么]做，我就[怎么]做。","Nǐ zěnme zuò, wǒ jiù zěnme zuò.","Bạn làm thế nào thì tôi làm thế ấy.","等级标准"]]},
 {t:"Chỉ không xác định: … nào đó", sub:"不定指", fx:[["… 哪儿 / 什么 / 谁 …",null]], mean:"ở đâu đó, cái gì đó, ai đó.",
  ex:[["我好像在[哪儿]见过你。","Wǒ hǎoxiàng zài nǎr jiàn guo nǐ.","Hình như tôi đã gặp bạn ở đâu đó.","等级标准"],
      ["你们先吃点儿[什么]再去公园吧。","Nǐmen xiān chī diǎnr shénme zài qù gōngyuán ba.","Các bạn ăn chút gì đó trước rồi hẵng đi công viên.","等级标准"]]}],
cmp:[
 {vn:"Tôi ăn gì cũng được.", zh:"我吃[什么都]行。", py:"Wǒ chī shénme dōu xíng.", ok:true, why:"“gì cũng” = 什么都 — giống tiếng Việt."},
 {vn:"Hình như gặp ở đâu đó rồi.", zh:"好像在[哪儿]见过。", py:"Hǎoxiàng zài nǎr jiàn guo.", ok:true, why:"哪儿 = “đâu đó”, câu kể, không phải câu hỏi."}],
ex:[
 ["这件事[谁也]不知道。","Zhè jiàn shì shéi yě bù zhīdào.","Chuyện này không ai biết cả."],
 ["你[什么时候]来都可以。","Nǐ shénme shíhou lái dōu kěyǐ.","Bạn đến lúc nào cũng được.","等级标准"],
 ["[哪儿]便宜就去[哪儿]买。","Nǎr piányi jiù qù nǎr mǎi.","Chỗ nào rẻ thì đi chỗ đó mua."]],
errs:[
 {bad:"都谁喜欢她。", good:"谁都喜欢她。", why:"Từ để hỏi đứng trước 都."},
 {bad:"我吃什么都行吗？（ý: câu kể）", good:"我吃什么都行。", why:"Nghĩa “bất kỳ” là câu kể, không có 吗."},
 {bad:"我什么都不没有。", good:"我什么都没有。", why:"Chỉ một từ phủ định."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Ai cũng thích cô ấy.", o:["都谁喜欢她。","谁都喜欢她。","谁喜欢她都。"], a:1, why:"谁 + 都 + V."},
  {q:"Tôi chưa đi đâu cả.", o:["我哪儿都没去过。","我都哪儿没去过。","我没去过哪儿都。"], a:0, why:"哪儿 + 都 + 没."},
  {q:"Muốn ăn gì thì ăn nấy.", o:["想吃什么吃什么。","想吃什么吃那个。","什么想吃吃什么。"], a:0, why:"Hai 什么 hô ứng."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","好像","在哪儿","见过","你"], a:"我好像在哪儿见过你。", vi:"Hình như tôi đã gặp bạn ở đâu đó."},
  {w:["你","怎么","做","我","就","怎么","做"], a:"你怎么做，我就怎么做。", vi:"Bạn làm thế nào thì tôi làm thế ấy."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bạn đến lúc nào cũng được.", a:"你什么时候来都可以。/ 你什么时候来都行。"},
  {q:"Chuyện này không ai biết cả.", a:"这件事谁都不知道。/ 这件事谁也不知道。"}]}],
rel:["一04","一10","三41","二05"]
};
