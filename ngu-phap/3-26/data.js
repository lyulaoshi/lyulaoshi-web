// Bài ngữ pháp 【三26】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三26", title:"介词：为了", vi:"Giới từ 为了 — để, vì (mục đích)", tag:"词类 · 介词 · 引出目的、原因",
goals:[
 "Dùng <b>为了 + mục đích</b> đặt trước động từ hoặc đầu câu.",
 "Phân biệt <b>为了</b> (mục đích — để) với <b>因为</b> (nguyên nhân — vì).",
 "Liên hệ khung câu ghép 为了……，…… 【三72】."],
intro:"为了 nêu <b>mục đích</b> của hành động: làm A <b>để</b> đạt B.",
rules:[
 {t:"(S) 为了 + mục đích + V", sub:"为了", fx:[["(S)",""],["为了",null],["mục đích",""],["Động từ",""]], mean:"",
  ex:[["妈妈[为了]健康坚持每天跑步。","Māma wèile jiànkāng jiānchí měi tiān pǎo bù.","Mẹ vì sức khỏe kiên trì chạy bộ mỗi ngày.","等级标准"],
      ["他[为了]新工作不断学习新知识。","Tā wèile xīn gōngzuò búduàn xuéxí xīn zhīshi.","Anh ấy không ngừng học kiến thức mới vì công việc mới.","等级标准"]]}],
notes:[{t:"为了 hay 因为?", html:"<span class='zh'>为了学中文，我来中国。</span> (mục đích: để học) · <span class='zh'>因为喜欢中国，我来中国。</span> (nguyên nhân: vì thích)."}],
cmp:[
 {vn:"Để học tiếng Trung, tôi sang Trung Quốc.", zh:"[为了]学中文，我来中国。", py:"Wèile xué Zhōngwén, wǒ lái Zhōngguó.", ok:true, why:"“để” (mục đích) = 为了."}],
ex:[
 ["[为了]考上大学，他每天学习到很晚。","Wèile kǎoshang dàxué, tā měi tiān xuéxí dào hěn wǎn.","Để đỗ đại học, ngày nào anh ấy cũng học đến khuya."],
 ["[为了]孩子，父母做了很多。","Wèile háizi, fùmǔ zuò le hěn duō.","Vì con cái, cha mẹ đã làm rất nhiều."]],
errs:[
 {bad:"因为学中文，我来中国。（ý: để học）", good:"为了学中文，我来中国。", why:"Mục đích dùng 为了."},
 {bad:"为了下雨，比赛取消了。", good:"因为下雨，比赛取消了。", why:"Nguyên nhân dùng 因为, không dùng 为了."}],
practice:[
 {t:"A. Điền 为了 hoặc 因为", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿＿身体健康，他每天跑步。", vi:"＿＿ sức khỏe, anh ấy chạy bộ mỗi ngày.", o:["为了","因为"], a:0, why:"Mục đích."},
  {q:"＿＿下雨，比赛取消了。", vi:"＿＿ trời mưa, trận đấu bị hủy.", o:["为了","因为"], a:1, why:"Nguyên nhân."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["妈妈","为了","健康","坚持","每天","跑步"], a:"妈妈为了健康坚持每天跑步。", vi:"Mẹ vì sức khỏe kiên trì chạy bộ mỗi ngày."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Để học tiếng Trung, tôi sang Trung Quốc.", a:"为了学中文，我来中国。/ 为了学中文，我来到中国。"}]}],
rel:["三72","三25","二28","二68"]
};
