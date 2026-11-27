// Bài ngữ pháp 【新4.36】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.36", title:"动词＋一X是一X", vi:"V + 一X是一X — được chừng nào hay chừng ấy", tag:"短语 · 固定格式",
goals:[
 "Nói <b>được chút nào hay chút ấy</b>: 能省一点儿是一点儿.",
 "Lặp lại <b>cùng một lượng từ</b> hai bên 是.",
 "Biết sắc thái: chấp nhận từng ít một."],
intro:"“Tiết kiệm <b>được đồng nào hay đồng ấy</b>.” → 能省一块<b>是</b>一块.",
rules:[
 {t:"(能) V + 一 + lượng từ + 是 + 一 + lượng từ", sub:"固定格式", fx:[["(能) V",""],["一 + lượng từ",""],["是",null],["一 + lượng từ",""]], mean:"Được bao nhiêu hay bấy nhiêu.",
  ex:[["钱{1|能省}{2|一点儿}{3|是}{4|一点儿}。","Qián néng shěng yìdiǎnr shì yìdiǎnr.","Tiền tiết kiệm được chút nào hay chút ấy."],
      ["生词{1|记住}{2|一个}{3|是}{4|一个}。","Shēngcí jìzhù yí gè shì yí gè.","Từ mới nhớ được từ nào hay từ ấy."]]}],
notes:[{t:"过一天是一天", html:"<span class='zh'>过一天是一天</span> = sống ngày nào biết ngày ấy (giọng tiêu cực)."}],
cmp:[
 {vn:"Nghỉ được lúc nào hay lúc ấy.", zh:"能多休息[一会儿是一会儿]。", py:"Néng duō xiūxi yíhuìr shì yíhuìr.", ok:true, why:"Hai bên 是 giống hệt nhau."}],
ex:[
 ["困死了，能睡[一分钟是一分钟]。","Kùn sǐ le, néng shuì yì fēnzhōng shì yì fēnzhōng.","Buồn ngủ quá, ngủ được phút nào hay phút ấy."],
 ["作业能做[一点儿是一点儿]。","Zuòyè néng zuò yìdiǎnr shì yìdiǎnr.","Bài tập làm được chút nào hay chút ấy."],
 ["他每天只想着过[一天是一天]。","Tā měi tiān zhǐ xiǎngzhe guò yì tiān shì yì tiān.","Anh ta ngày nào cũng chỉ nghĩ sống qua ngày."]],
errs:[
 {bad:"钱能省一点儿是两点儿。", good:"钱能省一点儿是一点儿。", why:"Hai bên 是 phải giống nhau."},
 {bad:"能记一个生词是生词。", good:"生词能记一个是一个。", why:"Khung là 一 + lượng từ 是 一 + lượng từ."},
 {bad:"能睡一分钟就一分钟。", good:"能睡一分钟是一分钟。", why:"Từ nối trong khung là 是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Từ mới nhớ được từ nào hay từ ấy.", o:["生词记住一个是一个。","生词记住一个是两个。","生词是一个记住一个。"], a:0, why:"一个是一个."},
  {q:"钱能省一点儿是＿。", vi:"Tiền tiết kiệm được chút nào hay chút ấy.", o:["一点儿","很多","一些吗"], a:0, why:"Lặp lại 一点儿."},
  {q:"“过一天是一天” có nghĩa là:", vi:"Chọn nghĩa của cụm từ.", o:["Sống ngày nào biết ngày ấy","Mỗi ngày đều rất vui"], a:0, why:"Giọng buông xuôi."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["作业","能做","一点儿","是","一点儿"], a:"作业能做一点儿是一点儿。", vi:"Bài tập làm được chút nào hay chút ấy."},
  {w:["能多","休息","一会儿","是","一会儿"], a:"能多休息一会儿是一会儿。", vi:"Nghỉ thêm được lúc nào hay lúc ấy."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tiền tiết kiệm được chút nào hay chút ấy.", a:"钱能省一点儿是一点儿。/ 能省一点儿是一点儿。"}]}],
rel:["三33","二53","二11"]
};
