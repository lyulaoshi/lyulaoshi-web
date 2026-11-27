// Bài ngữ pháp 【新5.15】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.15", title:"介词：替、同、较", vi:"替, 同, 较 — thay cho, với, so với", tag:"词类 · 介词",
goals:[
 "Dùng <b>替</b>: làm thay / lo thay cho ai.",
 "Dùng <b>同</b> = 跟 trong văn viết.",
 "Dùng <b>较</b> = 比 trong văn viết: 较去年增加."],
intro:"同, 较 là cách nói <b>trang trọng</b> của 跟, 比. 替 là “<b>thay, hộ, cho</b>”.",
rules:[
 {t:"S + 替 + người + V", sub:"（1）替", fx:[["S",""],["替",null],["người",""],["V",""]], mean:"Thay / hộ / cho ai.",
  ex:[["{1|我}{2|替}{3|你}{4|去开会}吧。","Wǒ tì nǐ qù kāihuì ba.","Để tôi đi họp thay bạn."],
      ["{1|大家}都{2|替}{3|他}{4|高兴}。","Dàjiā dōu tì tā gāoxìng.","Mọi người đều mừng cho anh ấy."]]},
 {t:"A + 同 + B + V / Adj", sub:"（2）同", fx:[["A",""],["同",null],["B",""],["V / Adj",""]], mean:"Với, cùng.",
  ex:[["{1|我}想{2|同}{3|您}{4|商量一下}。","Wǒ xiǎng tóng nín shāngliang yíxià.","Tôi muốn bàn với ngài một chút."]]},
 {t:"A + 较 + B + Adj / V", sub:"（3）较", fx:[["A",""],["较",null],["mốc so sánh",""],["Adj / V",""]], mean:"So với … thì …",
  ex:[["{1|今年的收入}{2|较}{3|去年}{4|有所增加}。","Jīnnián de shōurù jiào qùnián yǒu suǒ zēngjiā.","Thu nhập năm nay có tăng so với năm ngoái."]]}],
cmp:[
 {vn:"Đừng lo cho tôi.", zh:"别[替]我担心。", py:"Bié tì wǒ dānxīn.", ok:true, why:"“cho tôi” (lo thay) → 替我, đặt trước động từ."}],
ex:[
 ["请[替]我向你父母问好。","Qǐng tì wǒ xiàng nǐ fùmǔ wènhǎo.","Cho tôi gửi lời hỏi thăm bố mẹ bạn."],
 ["他[同]大家一起讨论了这个计划。","Tā tóng dàjiā yìqǐ tǎolùnle zhège jìhuà.","Anh ấy cùng mọi người thảo luận kế hoạch này."],
 ["这个月的气温[较]上个月高。","Zhège yuè de qìwēn jiào shàng gè yuè gāo.","Nhiệt độ tháng này cao hơn tháng trước."]],
errs:[
 {bad:"别担心替我。", good:"别替我担心。", why:"Cụm 替我 đứng trước động từ."},
 {bad:"今年较去年很好。", good:"今年较去年好。", why:"Câu so sánh không dùng 很."},
 {bad:"我替你喜欢他。", good:"我替你高兴。", why:"替 dùng cho việc làm thay hoặc cảm xúc thay người khác."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你太忙了，我＿你去吧。", vi:"Bạn bận quá, để tôi đi thay.", o:["替","较","据"], a:0, why:"Làm thay → 替."},
  {q:"房价＿去年有所下降。", vi:"Giá nhà có giảm so với năm ngoái.", o:["较","替","凭"], a:0, why:"So sánh văn viết → 较."},
  {q:"我愿意＿大家一起努力。", vi:"Tôi muốn cùng mọi người cố gắng.", o:["同","较","据"], a:0, why:"同 = 跟."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["大家","都","替","他","高兴"], a:"大家都替他高兴。", vi:"Mọi người đều mừng cho anh ấy."},
  {w:["我","想","同","您","商量一下"], a:"我想同您商量一下。", vi:"Tôi muốn bàn với ngài một chút."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Đừng lo cho tôi.", a:"别替我担心。/ 不要替我担心。"},
  {q:"Để tôi đi họp thay bạn.", a:"我替你去开会吧。/ 我替你去开会。"}]}],
rel:["一17","二28","一38"]
};
