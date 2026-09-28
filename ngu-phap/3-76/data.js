// Bài ngữ pháp 【三76】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三76", title:"用反问句表示强调：不是……吗？/难道……吗？", vi:"Nhấn mạnh bằng câu hỏi tu từ — 不是…吗？ 难道…吗？", tag:"强调的方法",
goals:[
 "Hiểu câu hỏi tu từ <b>không cần trả lời</b>, nghĩa ngược với hình thức.",
 "<b>不是……吗？</b> = khẳng định (chẳng phải … sao? → đúng là …).",
 "<b>难道……吗？</b> = nhấn mạnh, thường kèm ngạc nhiên / trách."],
intro:"Tiếng Việt: “Chẳng phải hôm nay là Chủ nhật sao?”, “Lẽ nào bạn chưa đi Trường Thành à?” — tiếng Trung dùng y như vậy.",
rules:[
 {t:"不是 + … + 吗？", sub:"= khẳng định", fx:[["不是",null],["…",""],["吗？",null]], mean:"Hình thức phủ định → nghĩa khẳng định.",
  ex:[["今天[不是]星期天[吗]？","Jīntiān bú shì xīngqītiān ma?","Chẳng phải hôm nay là Chủ nhật sao? (= hôm nay là Chủ nhật)","等级标准"]]},
 {t:"难道 + … + 吗？", sub:"= nhấn mạnh ngược lại", fx:[["难道",null],["(不 / 没) …",""],["吗？",null]], mean:"难道 + phủ định → khẳng định; 难道 + khẳng định → phủ định.",
  ex:[["[难道]你没去过长城[吗]？","Nándào nǐ méi qù guo Chángchéng ma?","Lẽ nào bạn chưa đi Trường Thành sao? (= tưởng bạn đi rồi)","等级标准"]]}],
cmp:[
 {vn:"Chẳng phải bạn biết rồi sao?", zh:"你[不是]知道了[吗]？", py:"Nǐ bú shì zhīdào le ma?", ok:true, why:"Trật tự giống tiếng Việt; nghĩa = bạn biết rồi mà."}],
ex:[
 ["你[不是]说今天来[吗]？怎么没来？","Nǐ bú shì shuō jīntiān lái ma? Zěnme méi lái?","Chẳng phải bạn nói hôm nay đến sao? Sao không đến?"],
 ["[难道]这么简单的问题你也不会[吗]？","Nándào zhème jiǎndān de wèntí nǐ yě bú huì ma?","Lẽ nào câu dễ thế này bạn cũng không làm được?"]],
errs:[
 {bad:"难道你没去过长城呢？", good:"难道你没去过长城吗？", why:"Câu hỏi tu từ kết thúc bằng 吗."},
 {bad:"今天是不是星期天吗？", good:"今天不是星期天吗？", why:"Không ghép 是不是 với 吗."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"“今天不是星期天吗？” nghĩa là gì?", vi:"Chẳng phải hôm nay là Chủ nhật sao?", o:["Hôm nay là Chủ nhật.","Hôm nay không phải Chủ nhật."], a:0, why:"不是…吗 = khẳng định."},
  {q:"Chọn câu đúng", o:["今天是不是星期天吗？","今天不是星期天吗？"], a:1, why:"Không ghép 是不是 với 吗."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["难道","你","没","去过","长城","吗"], a:"难道你没去过长城吗？", vi:"Lẽ nào bạn chưa đi Trường Thành sao?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chẳng phải bạn biết rồi sao?", a:"你不是知道了吗？/ 你不是已经知道了吗？"}]}],
rel:["三19","三75","三77","二78"]
};
