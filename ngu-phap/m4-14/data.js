// Bài ngữ pháp 【新4.14】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.14", title:"介词：将、由、叫、让（引出施事、受事）", vi:"将, 由, 叫, 让 — đem (như 把); do, bị", tag:"词类 · 介词",
goals:[
 "Dùng <b>将</b> như 把 trong văn viết.",
 "Dùng <b>由</b>: do ai phụ trách.",
 "Dùng <b>叫 / 让</b> trong câu bị động khẩu ngữ."],
intro:"<b>将</b> + vật = 把 (trang trọng). <b>由</b> + người = “<b>do</b> … (đảm nhiệm)”, không mang nghĩa xấu như 被.",
rules:[
 {t:"将 + vật + V + thành phần khác", sub:"（1）将 = 把", fx:[["S",""],["将",null],["O",""],["V + …",""]], mean:"Như 把, dùng trong văn viết, hướng dẫn.",
  ex:[["请{1|大家}{2|将}{3|手机}{4|关上}。","Qǐng dàjiā jiāng shǒujī guānshang.","Đề nghị mọi người tắt điện thoại."]]},
 {t:"việc + 由 + người + V", sub:"（2）由", fx:[["việc",""],["由",null],["người",""],["V (负责、决定…)",""]], mean:"Do ai làm, phụ trách.",
  ex:[["{1|这次活动}{2|由}{3|王老师}{4|负责}。","Zhè cì huódòng yóu Wáng lǎoshī fùzé.","Hoạt động lần này do thầy Vương phụ trách."],
      ["{1|去不去}{2|由}{3|你}{4|决定}。","Qù bu qù yóu nǐ juédìng.","Đi hay không do bạn quyết."]]},
 {t:"vật + 叫 / 让 + người + V + …", sub:"（3）叫、让", fx:[["vật bị tác động",""],["叫 / 让",null],["người",""],["V + …",""]], mean:"Bị (khẩu ngữ).",
  ex:[["{1|雨伞}{2|让}{3|他}{4|拿走了}。","Yǔsǎn ràng tā názǒu le.","Ô bị anh ấy cầm đi mất."]]}],
cmp:[
 {vn:"Bữa tối nay do bố nấu.", zh:"今天的晚饭[由]爸爸做。", py:"Jīntiān de wǎnfàn yóu bàba zuò.", ok:true, why:"“do” (phân công) → 由, không dùng 被."}],
ex:[
 ["请[将]垃圾分开放。","Qǐng jiāng lājī fēnkāi fàng.","Vui lòng để riêng các loại rác."],
 ["请[将]这张表填好。","Qǐng jiāng zhè zhāng biǎo tiánhǎo.","Vui lòng điền xong biểu này."],
 ["我的书[叫]弟弟弄脏了。","Wǒ de shū jiào dìdi nòngzāng le.","Sách của tôi bị em làm bẩn."]],
errs:[
 {bad:"这次活动被王老师负责。", good:"这次活动由王老师负责。", why:"Phân công phụ trách dùng 由."},
 {bad:"请将手机关。", good:"请将手机关上。", why:"Như câu 把, động từ cần thành phần khác."},
 {bad:"我的书叫弄脏了。", good:"我的书叫弟弟弄脏了。", why:"Sau 叫 phải có người làm."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"请＿手机关上。", vi:"Đề nghị tắt điện thoại.", o:["将","由","让"], a:0, why:"将 = 把."},
  {q:"这个问题＿经理决定。", vi:"Vấn đề này do giám đốc quyết định.", o:["由","将","把"], a:0, why:"Do ai → 由."},
  {q:"蛋糕＿他吃了。", vi:"Bánh bị anh ấy ăn rồi.", o:["让","将","由着"], a:0, why:"Bị động → 让."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这次活动","由","王老师","负责"], a:"这次活动由王老师负责。", vi:"Hoạt động lần này do thầy Vương phụ trách."},
  {w:["雨伞","让","他","拿走了"], a:"雨伞让他拿走了。", vi:"Ô bị anh ấy cầm đi mất."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Đi hay không do bạn quyết.", a:"去不去由你决定。"}]}],
rel:["三27","三55","新4.50"]
};
