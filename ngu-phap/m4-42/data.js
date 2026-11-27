// Bài ngữ pháp 【新4.42】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.42", title:"你X你的吧", vi:"你X你的吧 — bạn cứ … đi (đừng bận tâm)", tag:"短语 · 固定格式",
goals:[
 "Bảo người nghe <b>cứ làm việc của mình</b>, đừng bận tâm đến người khác.",
 "Lặp đại từ: 你……你的.",
 "Dùng được cho 他、我: 他忙他的，我们聊我们的."],
intro:"“<b>Bạn cứ làm việc của bạn đi</b>.” → 你忙<b>你的</b>吧。",
rules:[
 {t:"你 + V + 你的 + 吧", sub:"（1）khuyên", fx:[["你",""],["V",""],["你的",null],["吧",null]], mean:"Cứ … đi, kệ tôi.",
  ex:[["{1|你}{2|忙}{3|你的}{4|吧}，我自己看看。","Nǐ máng nǐ de ba, wǒ zìjǐ kànkan.","Bạn cứ làm việc của bạn đi, tôi tự xem."]]},
 {t:"A + V + A的，B + V + B的", sub:"（2）ai làm việc nấy", fx:[["A",""],["V",""],["A的",null],["·",""],["B",""],["V",""],["B的",null]], mean:"Ai làm việc người nấy.",
  ex:[["{1|他}{2|看}{3|他的}，{4|我}{5|写}{6|我的}。","Tā kàn tā de, wǒ xiě wǒ de.","Anh ấy cứ xem, tôi cứ viết."]]}],
cmp:[
 {vn:"Bạn cứ ăn đi, đừng đợi tôi.", zh:"[你吃你的吧]，别等我。", py:"Nǐ chī nǐ de ba, bié děng wǒ.", ok:true, why:"Đại từ lặp lại ở 你的."}],
ex:[
 ["[你睡你的吧]，我关灯。","Nǐ shuì nǐ de ba, wǒ guān dēng.","Bạn cứ ngủ đi, tôi tắt đèn."],
 ["我们走我们的，别管他。","Wǒmen zǒu wǒmen de, bié guǎn tā.","Chúng ta cứ đi, mặc kệ anh ta."],
 ["[你玩儿你的吧]，这里有我呢。","Nǐ wánr nǐ de ba, zhèlǐ yǒu wǒ ne.","Con cứ đi chơi đi, ở đây có tôi rồi."]],
errs:[
 {bad:"你忙我的吧。", good:"你忙你的吧。", why:"Hai đại từ phải cùng một người."},
 {bad:"你的忙你吧。", good:"你忙你的吧。", why:"Thứ tự: 你 + V + 你的."},
 {bad:"你忙你吧。", good:"你忙你的吧。", why:"Phải có 的."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn cứ làm việc của bạn đi.", o:["你忙你的吧。","你忙我的吧。","你的忙吧你。"], a:0, why:"你V你的吧."},
  {q:"他看他的，我写＿。", vi:"Anh ấy cứ xem, tôi cứ viết.", o:["我的","他的","你的"], a:0, why:"Cùng một người: 我……我的."},
  {q:"你吃你的吧，别＿我。", vi:"Bạn cứ ăn đi, đừng đợi tôi.", o:["等","看着吗","吃"], a:0, why:"别等我."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","睡","你的","吧，","我","关灯"], a:"你睡你的吧，我关灯。", vi:"Bạn cứ ngủ đi, tôi tắt đèn."},
  {w:["我们","走","我们的，","别","管","他"], a:"我们走我们的，别管他。", vi:"Chúng ta cứ đi, mặc kệ anh ta."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bạn cứ làm việc của bạn đi.", a:"你忙你的吧。/ 你做你的吧。"},
  {q:"Bạn cứ ăn đi, đừng đợi tôi.", a:"你吃你的吧，别等我。/ 你吃你的吧，不用等我。"}]}],
rel:["二34","新4.40","新4.43"]
};
