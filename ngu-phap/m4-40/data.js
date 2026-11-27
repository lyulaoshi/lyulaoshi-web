// Bài ngữ pháp 【新4.40】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.40", title:"X就是了", vi:"X就是了 — cứ … là được", tag:"短语 · 固定格式",
goals:[
 "Khuyên / đáp lại nhẹ nhàng: <b>cứ … là được</b>.",
 "Đặt <b>就是了</b> ở cuối câu.",
 "Dùng để trấn an, nói việc đơn giản."],
intro:"“Bạn <b>cứ nói thẳng là được</b>.” → 你直接说<b>就是了</b>。",
rules:[
 {t:"S + V + 就是了", sub:"语气", fx:[["S",""],["V + …",""],["就是了",null]], mean:"Cứ làm vậy là xong, đừng ngại.",
  ex:[["{1|你}{2|直接告诉他}{3|就是了}。","Nǐ zhíjiē gàosu tā jiùshì le.","Bạn cứ nói thẳng với anh ấy là được."],
      ["{1|不懂的地方}{2|问老师}{3|就是了}。","Bù dǒng de dìfang wèn lǎoshī jiùshì le.","Chỗ không hiểu cứ hỏi thầy là xong."]]}],
cmp:[
 {vn:"Yên tâm, giao cho tôi là được.", zh:"放心，交给我[就是了]。", py:"Fàngxīn, jiāo gěi wǒ jiùshì le.", ok:true, why:"就是了 đặt cuối câu."}],
ex:[
 ["你不喜欢，不买[就是了]。","Nǐ bù xǐhuan, bù mǎi jiùshì le.","Bạn không thích thì không mua là xong."],
 ["有什么事给我打电话[就是了]。","Yǒu shénme shì gěi wǒ dǎ diànhuà jiùshì le.","Có việc gì cứ gọi cho tôi là được."],
 ["他不愿意来，就别叫他[就是了]。","Tā bú yuànyì lái, jiù bié jiào tā jiùshì le.","Anh ấy không muốn đến thì đừng gọi là xong."]],
errs:[
 {bad:"你直接说是就了。", good:"你直接说就是了。", why:"Thứ tự cố định 就是了."},
 {bad:"你就是了直接说。", good:"你直接说就是了。", why:"就是了 đứng cuối câu."},
 {bad:"你不喜欢就是了不买。", good:"你不喜欢，不买就是了。", why:"就是了 đi sau hành động đề nghị."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chỗ không hiểu cứ hỏi thầy là được.", o:["不懂的地方问老师就是了。","不懂的地方就是了问老师。"], a:0, why:"就是了 cuối câu."},
  {q:"你不喜欢，不买＿。", vi:"Bạn không thích thì không mua là xong.", o:["就是了","来不及","说不定"], a:0, why:"Cứ vậy là được."},
  {q:"放心，交给我＿。", vi:"Yên tâm, giao cho tôi là được.", o:["就是了","就是说","不怎么"], a:0, why:"就是说 = nghĩa là, khác nghĩa."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["放心，","交给","我","就是了"], a:"放心，交给我就是了。", vi:"Yên tâm, giao cho tôi là được."},
  {w:["你","直接","告诉","他","就是了"], a:"你直接告诉他就是了。", vi:"Bạn cứ nói thẳng với anh ấy là được."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 就是了)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Có việc gì cứ gọi cho tôi là được.", a:"有什么事给我打电话就是了。/ 有事给我打电话就是了。"}]}],
rel:["新4.28","新4.42"]
};
