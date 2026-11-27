// Bài ngữ pháp 【新4.43】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.43", title:"让／叫你X你就X", vi:"让你X你就X — bảo … thì cứ …", tag:"短语 · 固定格式",
goals:[
 "Yêu cầu người nghe <b>làm theo, đừng cãi</b>: 让你去你就去.",
 "Dùng 叫 hoặc 让.",
 "Biết đây là giọng ra lệnh thân mật / hơi gắt."],
intro:"“<b>Bảo ăn thì cứ ăn</b>.” → 让你吃你就吃。",
rules:[
 {t:"让 / 叫 + 你 + V，你就 + V", sub:"命令", fx:[["让 / 叫",null],["你 + V",""],["·",""],["你就",null],["V",""]], mean:"Bảo sao làm vậy.",
  ex:[["{1|让}{2|你吃}，{3|你就}{4|吃}，别客气。","Ràng nǐ chī, nǐ jiù chī, bié kèqi.","Mời ăn thì cứ ăn, đừng khách sáo."],
      ["{1|叫}{2|你休息}，{3|你就}{4|休息}。","Jiào nǐ xiūxi, nǐ jiù xiūxi.","Bảo nghỉ thì cứ nghỉ đi."]]}],
cmp:[
 {vn:"Bảo cầm thì cứ cầm.", zh:"[让你拿你就拿]。", py:"Ràng nǐ ná nǐ jiù ná.", ok:true, why:"Một động từ lặp lại."}],
ex:[
 ["[让你说你就说]，怕什么？","Ràng nǐ shuō nǐ jiù shuō, pà shénme?","Bảo nói thì cứ nói, sợ gì?"],
 ["[叫你去你就去]，别问那么多。","Jiào nǐ qù nǐ jiù qù, bié wèn nàme duō.","Bảo đi thì đi, đừng hỏi nhiều."],
 ["妈妈[让你喝你就喝]吧。","Māma ràng nǐ hē nǐ jiù hē ba.","Mẹ bảo uống thì con cứ uống đi."]],
errs:[
 {bad:"让你吃就你吃。", good:"让你吃你就吃。", why:"就 đứng sau chủ ngữ 你."},
 {bad:"让你去你就吃。（cùng một mệnh lệnh）", good:"让你去你就去。", why:"Hai động từ giống nhau."},
 {bad:"被你说你就说。", good:"让你说你就说。", why:"Sai khiến dùng 让 / 叫."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bảo nghỉ thì cứ nghỉ.", o:["让你休息你就休息。","让你休息就你休息。"], a:0, why:"你就 + V."},
  {q:"＿你说你就说。", vi:"Bảo nói thì cứ nói.", o:["叫","被","把"], a:0, why:"叫 / 让 = bảo."},
  {q:"让你拿你就＿，别客气。", vi:"Bảo cầm thì cứ cầm, đừng khách sáo.", o:["拿","吃","去"], a:0, why:"Lặp lại 拿."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["让","你","吃，","你就","吃"], a:"让你吃，你就吃。", vi:"Mời ăn thì cứ ăn."},
  {w:["叫","你","去","你就","去，","别问","那么多"], a:"叫你去你就去，别问那么多。", vi:"Bảo đi thì đi, đừng hỏi nhiều."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bảo nói thì cứ nói, sợ gì?", a:"让（叫）你说你就说，怕什么？"}]}],
rel:["三57","新4.39","新4.42"]
};
