// Bài ngữ pháp 【新5.37】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.37", title:"因果复句：……，因而……；……，可见……", vi:"…, 因而…; …, 可见… — do đó, đủ thấy", tag:"句子的类型 · 复句",
goals:[
 "Nối <b>nguyên nhân → kết quả</b> bằng 因而.",
 "Nối <b>bằng chứng → kết luận</b> bằng 可见.",
 "Phân biệt 因而 và 从而."],
intro:"<b>因而</b> = 因此 (vì thế). <b>可见</b> đi từ sự việc đến <b>suy luận</b> của người nói.",
rules:[
 {t:"Nguyên nhân，因而 + kết quả", sub:"（1）", fx:[["nguyên nhân",""],["，",""],["因而",null],["kết quả",""]], mean:"Vì thế.",
  ex:[["{1|他平时很努力}，{2|因而}{3|成绩一直很好}。","Tā píngshí hěn nǔlì, yīn'ér chéngjì yìzhí hěn hǎo.","Bình thường anh ấy chăm chỉ, vì thế thành tích luôn tốt."]]},
 {t:"Bằng chứng，可见 + kết luận", sub:"（2）", fx:[["bằng chứng",""],["，",""],["可见",null],["kết luận",""]], mean:"Đủ thấy.",
  ex:[["{1|连孩子都会唱这首歌}，{2|可见}{3|它多么受欢迎}。","Lián háizi dōu huì chàng zhè shǒu gē, kějiàn tā duōme shòu huānyíng.","Đến trẻ con cũng hát được bài này, đủ thấy nó được yêu thích thế nào."]]}],
cmp:[
 {vn:"Đường đang sửa, vì thế xe đi rất chậm.", zh:"路正在修，[因而]车开得很慢。", py:"Lù zhèngzài xiū, yīn'ér chē kāi de hěn màn.", ok:true, why:"因而 đứng đầu vế kết quả."}],
ex:[
 ["天气突然变冷，[因而]感冒的人多了。","Tiānqì tūrán biàn lěng, yīn'ér gǎnmào de rén duō le.","Trời trở lạnh đột ngột, nên người cảm tăng."],
 ["他每次都最早到，[可见]他很重视这份工作。","Tā měi cì dōu zuì zǎo dào, kějiàn tā hěn zhòngshì zhè fèn gōngzuò.","Lần nào anh ấy cũng đến sớm nhất, đủ thấy rất coi trọng công việc."],
 ["票两个小时就卖完了，[可见]观众很多。","Piào liǎng gè xiǎoshí jiù màiwán le, kějiàn guānzhòng hěn duō.","Hai tiếng đã hết vé, đủ thấy khán giả đông."]],
errs:[
 {bad:"因而他很努力，成绩很好。", good:"他很努力，因而成绩很好。", why:"因而 đứng ở vế kết quả."},
 {bad:"他很忙，因而可见没来。", good:"他很忙，因而没来。", why:"Chọn một trong hai."},
 {bad:"我饿了，可见我要吃饭。", good:"我饿了，所以我要吃饭。", why:"可见 dùng khi suy luận từ bằng chứng."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"路正在修，＿车开得很慢。", vi:"Đường đang sửa nên xe đi chậm.", o:["因而","可见","假如"], a:0, why:"Nhân → quả."},
  {q:"票很快卖完了，＿观众很多。", vi:"Vé hết nhanh, đủ thấy khán giả đông.", o:["可见","不然","哪怕"], a:0, why:"Suy luận."},
  {q:"“因而” gần nghĩa nhất với:", vi:"Chọn từ gần nghĩa.", o:["因此","可是","如果"], a:0, why:"Đều là “vì thế”."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他平时","很努力，","因而","成绩","一直很好"], a:"他平时很努力，因而成绩一直很好。", vi:"Bình thường anh ấy chăm chỉ, vì thế thành tích luôn tốt."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hai tiếng đã hết vé, đủ thấy khán giả rất đông.", a:"票两个小时就卖完了，可见观众很多。/ 两个小时票就卖完了，可见观众很多。"}]}],
rel:["新5.17","三71","新4.62"]
};
