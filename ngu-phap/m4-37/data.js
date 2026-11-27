// Bài ngữ pháp 【新4.37】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.37", title:"（没）有什么（好）X的", vi:"有什么好X的 — có gì mà …", tag:"短语 · 固定格式",
goals:[
 "Phản bác nhẹ bằng <b>这有什么好 X 的？</b> — có gì mà …",
 "Khẳng định <b>không có gì đáng</b> … bằng 没什么好 X 的.",
 "Dùng X là động từ hoặc tính từ: 笑, 怕, 担心, 说."],
intro:"“<b>Có gì mà</b> cười?” → 有什么好笑<b>的</b>？ Câu hỏi nhưng ý là phủ định.",
rules:[
 {t:"(S) + 有什么 (好) + V / Adj + 的？", sub:"（1）phản vấn", fx:[["有什么",null],["好",null],["X",""],["的",null]], mean:"Có gì đáng … đâu.",
  ex:[["这{1|有什么}{2|好}{3|笑}{4|的}？","Zhè yǒu shénme hǎo xiào de?","Cái này có gì mà cười?"]]},
 {t:"(S) + 没 (有) 什么 (好) + V / Adj + 的", sub:"（2）phủ định", fx:[["没什么",null],["好",null],["X",""],["的",null]], mean:"Chẳng có gì đáng …",
  ex:[["打针{1|没什么}{2|好}{3|怕}{4|的}。","Dǎzhēn méi shénme hǎo pà de.","Tiêm chẳng có gì đáng sợ."]]}],
notes:[{t:"可 thay 好", html:"<span class='zh'>没什么可说的</span> = chẳng có gì để nói."}],
cmp:[
 {vn:"Có gì mà phải lo?", zh:"[有什么好]担心[的]？", py:"Yǒu shénme hǎo dānxīn de?", ok:true, why:"X đặt giữa 好 và 的."}],
ex:[
 ["都是老朋友，[有什么好]客气[的]？","Dōu shì lǎo péngyou, yǒu shénme hǎo kèqi de?","Bạn cũ cả, khách sáo làm gì?"],
 ["事情已经过去了，[没什么好]说[的]。","Shìqing yǐjīng guòqu le, méi shénme hǎo shuō de.","Chuyện đã qua rồi, chẳng có gì để nói."],
 ["这个电影[没什么好]看[的]。","Zhège diànyǐng méi shénme hǎokàn de.","Phim này chẳng có gì hay để xem."]],
errs:[
 {bad:"这有什么好笑？", good:"这有什么好笑的？", why:"Cuối khung phải có 的."},
 {bad:"打针没什么怕好的。", good:"打针没什么好怕的。", why:"好 đứng trước X."},
 {bad:"这不有什么好担心的。", good:"这没什么好担心的。", why:"Phủ định 有 dùng 没."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cái này có gì mà cười?", o:["这有什么好笑的？","这什么有好笑的？","这有什么笑好？"], a:0, why:"有什么好 + X + 的."},
  {q:"Chẳng có gì đáng sợ.", o:["没什么好怕的。","不什么好怕的。"], a:0, why:"没什么……的."},
  {q:"都是老朋友，有什么好客气＿？", vi:"Bạn cũ cả, khách sáo làm gì?", o:["的","了","得"], a:0, why:"Khung ……的."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这","有什么","好","担心","的"], a:"这有什么好担心的？", vi:"Cái này có gì mà lo?"},
  {w:["事情","已经过去了，","没什么","好","说","的"], a:"事情已经过去了，没什么好说的。", vi:"Chuyện đã qua rồi, chẳng có gì để nói."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Cái này có gì mà cười?", a:"这有什么好笑的？/ 这有什么可笑的？"},
  {q:"Tiêm chẳng có gì đáng sợ.", a:"打针没什么好怕的。/ 打针没什么可怕的。"}]}],
rel:["三76","三78","新4.41"]
};
