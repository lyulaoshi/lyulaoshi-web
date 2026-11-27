// Bài ngữ pháp 【新4.61】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.61", title:"条件复句：不管／无论……，都／也……", vi:"不管 / 无论…都… — bất kể … đều …", tag:"句子的类型 · 复句",
goals:[
 "Nói kết quả <b>không đổi trong mọi điều kiện</b>.",
 "Sau 不管 / 无论 dùng <b>từ để hỏi</b>, <b>A不A</b> hoặc <b>A还是B</b>.",
 "Vế sau có <b>都</b> hoặc <b>也</b>."],
intro:"“<b>Bất kể</b> trời mưa hay không, tôi <b>đều</b> đi.” Khác 虽然 (sự thật đã xảy ra), 不管 nói <b>mọi trường hợp</b>.",
rules:[
 {t:"不管 / 无论 + 谁 / 什么 / 怎么…，S + 都 / 也 …", sub:"（1）疑问词", fx:[["不管 / 无论",null],["từ để hỏi",""],["·",""],["S",""],["都 / 也",null],["V",""]], mean:"Dù ai, dù gì, dù thế nào.",
  ex:[["{1|不管}{2|谁问}，{3|他}{4|都}{5|不说}。","Bùguǎn shéi wèn, tā dōu bù shuō.","Bất kể ai hỏi, anh ấy đều không nói."],
      ["{1|无论}{2|工作多忙}，{3|她}{4|都}{5|坚持锻炼}。","Wúlùn gōngzuò duō máng, tā dōu jiānchí duànliàn.","Dù công việc bận đến đâu, cô ấy vẫn kiên trì tập luyện."]]},
 {t:"不管 + A不A / A还是B，都 …", sub:"（2）正反、选择", fx:[["不管",null],["A不A / A还是B",""],["·",""],["S",""],["都",null],["V",""]], mean:"A hay không / A hay B cũng vậy.",
  ex:[["{1|不管}{2|下不下雨}，{3|我们}{4|都}{5|去}。","Bùguǎn xià bu xià yǔ, wǒmen dōu qù.","Mưa hay không chúng tôi đều đi."]]}],
notes:[{t:"无论 và 不管", html:"Nghĩa như nhau; <span class='zh'>无论</span> trang trọng hơn."}],
cmp:[
 {vn:"Dù thế nào đi nữa, tôi cũng ủng hộ bạn.", zh:"[不管]怎么样，我[都]支持你。", py:"Bùguǎn zěnmeyàng, wǒ dōu zhīchí nǐ.", ok:true, why:"都 đứng sau chủ ngữ."}],
ex:[
 ["[无论]你去哪儿，我[都]跟你一起去。","Wúlùn nǐ qù nǎr, wǒ dōu gēn nǐ yìqǐ qù.","Bạn đi đâu tôi cũng đi cùng."],
 ["[不管]天气好还是不好，他[都]骑车上班。","Bùguǎn tiānqì hǎo háishi bù hǎo, tā dōu qí chē shàngbān.","Thời tiết tốt hay xấu anh ấy đều đạp xe đi làm."],
 ["[无论]多难，我们[也]要完成。","Wúlùn duō nán, wǒmen yě yào wánchéng.","Dù khó đến đâu, chúng ta cũng phải hoàn thành."]],
errs:[
 {bad:"不管下雨，我们都去。", good:"不管下不下雨，我们都去。/ 即使下雨，我们也去。", why:"Sau 不管 cần từ để hỏi, A不A hoặc A还是B."},
 {bad:"不管天气很冷，他都去游泳。", good:"不管天气多冷，他都去游泳。", why:"Không dùng 很; dùng 多 / 多么."},
 {bad:"无论谁问，都他不说。", good:"无论谁问，他都不说。", why:"都 đứng sau chủ ngữ."},
 {bad:"不管你去哪儿，我跟你去。", good:"不管你去哪儿，我都跟你去。", why:"Vế sau cần 都 / 也."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mưa hay không chúng tôi đều đi.", o:["不管下雨，我们都去。","不管下不下雨，我们都去。"], a:1, why:"不管 + A不A."},
  {q:"不管天气＿冷，他都去游泳。", vi:"Dù trời lạnh đến đâu anh ấy cũng đi bơi.", o:["多","很","太"], a:0, why:"不管 + 多 + Adj."},
  {q:"无论谁问，他＿不说。", vi:"Bất kể ai hỏi, anh ấy đều không nói.", o:["都","就","才"], a:0, why:"无论……都……."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["无论","你","去哪儿，","我","都","跟你","一起去"], a:"无论你去哪儿，我都跟你一起去。", vi:"Bạn đi đâu tôi cũng đi cùng."},
  {w:["不管","怎么样，","我","都","支持","你"], a:"不管怎么样，我都支持你。", vi:"Dù thế nào tôi cũng ủng hộ bạn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bất kể ai hỏi, anh ấy đều không nói.", a:"不管谁问，他都不说。/ 无论谁问，他都不说。"},
  {q:"Dù công việc bận đến đâu, cô ấy vẫn kiên trì tập luyện.", a:"不管工作多忙，她都坚持锻炼。/ 无论工作多忙，她都坚持锻炼。/ 无论工作多么忙，她都坚持锻炼。/ 不管工作多么忙，她都坚持锻炼。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"无论你同意不同意，我都要去。", vi:"Bạn đồng ý hay không tôi cũng đi.", o:["Đúng","Sai"], a:0, why:"A不A hợp lệ."},
  {q:"不管他生病了，他都来上课。", vi:"Dù bị ốm, anh ấy vẫn đến lớp.", o:["Đúng","Sai"], a:1, why:"Sự việc đã xảy ra → 虽然他生病了，他还是来上课。"},
  {q:"不管什么时候，你都可以找我。", vi:"Bất cứ lúc nào bạn cũng có thể tìm tôi.", o:["Đúng","Sai"], a:0, why:"Từ để hỏi 什么时候."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"不管是老人＿孩子，都喜欢这个节日。", vi:"Dù người già hay trẻ em đều thích ngày lễ này.", o:["还是","但是","就是说"], a:0, why:"A还是B."},
  {q:"＿遇到什么困难，我们都不怕。", vi:"Dù gặp khó khăn gì chúng ta cũng không sợ.", o:["无论","虽然","因为"], a:0, why:"Có 什么 + 都."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bạn đi đâu tôi cũng đi cùng (dùng 无论).", a:"无论你去哪儿，我都跟你一起去。/ 无论你去哪儿，我都跟你去。/ 无论你去哪里，我都跟你一起去。"},
  {q:"Dù khó đến đâu, chúng ta cũng phải hoàn thành (dùng 不管).", a:"不管多难，我们也要完成。/ 不管多难，我们都要完成。/ 不管多么难，我们都要完成。"}]}],
rel:["三70","新4.64","三07"]
};
