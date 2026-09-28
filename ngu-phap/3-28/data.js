// Bài ngữ pháp 【三28】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三28", title:"介词：除了", vi:"Giới từ 除了 — ngoài … ra", tag:"词类 · 介词 · 表示排除",
goals:[
 "Dùng <b>除了……，还 / 也……</b> (ngoài … ra còn / cũng có …) — nghĩa <b>cộng thêm</b>.",
 "Dùng <b>除了……，都……</b> (ngoài … ra thì đều …) — nghĩa <b>loại trừ</b>.",
 "Chọn đúng 还 / 也 hay 都 ở vế sau."],
intro:"除了 có hai nghĩa ngược nhau, phân biệt nhờ từ ở vế sau: <b>还 / 也</b> = thêm vào; <b>都</b> = trừ ra.",
rules:[
 {t:"除了 A，(S) 还 / 也 B: cộng thêm", sub:"包括", fx:[["除了",null],["A",""],["，还 / 也",null],["B",""]], mean:"Có A, và còn có B.",
  ex:[["[除了]英文，他[还]会说中文。","Chúle Yīngwén, tā hái huì shuō Zhōngwén.","Ngoài tiếng Anh, anh ấy còn biết tiếng Trung.","等级标准"]]},
 {t:"除了 A，(S) 都 B: loại trừ", sub:"排除", fx:[["除了",null],["A",""],["，都",null],["B",""]], mean:"Tất cả đều B, trừ A.",
  ex:[["[除了]他，我们[都]是留学生。","Chúle tā, wǒmen dōu shì liúxuéshēng.","Trừ anh ấy ra, chúng tôi đều là lưu học sinh.","等级标准"]]}],
notes:[{t:"Khung đầy đủ", html:"<span class='zh'>除了……（以外）</span> — xem 【三38】."}],
cmp:[
 {vn:"Ngoài tiếng Anh, tôi còn biết tiếng Trung.", zh:"[除了]英文，我[还]会中文。", py:"Chúle Yīngwén, wǒ hái huì Zhōngwén.", ok:true, why:"Cộng thêm → 还."},
 {vn:"Trừ anh ấy, ai cũng đến.", zh:"[除了]他，大家[都]来了。", py:"Chúle tā, dàjiā dōu lái le.", ok:true, why:"Loại trừ → 都."}],
ex:[
 ["[除了]游泳，我[也]喜欢跑步。","Chúle yóuyǒng, wǒ yě xǐhuan pǎo bù.","Ngoài bơi, tôi cũng thích chạy bộ."],
 ["[除了]星期天，我每天[都]上班。","Chúle xīngqītiān, wǒ měi tiān dōu shàng bān.","Trừ Chủ nhật, ngày nào tôi cũng đi làm."]],
errs:[
 {bad:"除了英文，他都会说中文。（ý: còn biết thêm）", good:"除了英文，他还会说中文。", why:"Cộng thêm dùng 还 / 也."},
 {bad:"除了他，我们还是留学生。（ý: trừ anh ấy）", good:"除了他，我们都是留学生。", why:"Loại trừ dùng 都."}],
practice:[
 {t:"A. Điền 还 hoặc 都", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"除了英文，他＿会说中文。", vi:"Ngoài tiếng Anh, anh ấy ＿ biết tiếng Trung.", o:["还","都"], a:0, why:"Cộng thêm."},
  {q:"除了他，我们＿是留学生。", vi:"Trừ anh ấy, chúng tôi ＿ là lưu học sinh.", o:["还","都"], a:1, why:"Loại trừ."},
  {q:"除了星期天，我每天＿上班。", vi:"Trừ Chủ nhật, ngày nào tôi ＿ đi làm.", o:["也","都"], a:1, why:"Loại trừ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["除了","游泳","我","也","喜欢","跑步"], a:"除了游泳，我也喜欢跑步。", vi:"Ngoài bơi, tôi cũng thích chạy bộ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Trừ anh ấy ra, ai cũng đến.", a:"除了他，大家都来了。/ 除了他，别人都来了。"}]}],
rel:["三38","一10","一13","三30"]
};
