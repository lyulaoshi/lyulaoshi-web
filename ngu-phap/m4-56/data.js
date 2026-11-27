// Bài ngữ pháp 【新4.56】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.56", title:"承接复句：首先……，其次……；……，于是……", vi:"Trước hết … tiếp theo …; … thế là …", tag:"句子的类型 · 复句",
goals:[
 "Trình bày thứ tự ý bằng <b>首先……，其次……</b>.",
 "Kể hệ quả nối tiếp bằng <b>于是</b>.",
 "Ôn <b>首先……然后……</b> (【三64】)."],
intro:"其次 dùng khi <b>liệt kê lý lẽ</b>; 然后 dùng khi kể <b>việc làm theo thứ tự</b>. 于是 = “thế là”.",
rules:[
 {t:"首先 + ý 1，其次 + ý 2", sub:"（1）", fx:[["首先",null],["ý 1",""],["，",""],["其次",null],["ý 2",""]], mean:"Thứ nhất … thứ hai …",
  ex:[["{1|首先}{2|要注意安全}，{3|其次}{4|要注意时间}。","Shǒuxiān yào zhùyì ānquán, qícì yào zhùyì shíjiān.","Trước hết phải chú ý an toàn, sau đó chú ý thời gian."]]},
 {t:"Sự việc，(S) 于是 + hành động", sub:"（2）于是", fx:[["sự việc",""],["，",""],["于是",null],["hành động tiếp",""]], mean:"Thế là.",
  ex:[["{1|天下雨了}，{2|于是}{3|我们决定不出去了}。","Tiān xià yǔ le, yúshì wǒmen juédìng bù chūqu le.","Trời mưa, thế là chúng tôi quyết định không ra ngoài."],
      ["{1|他觉得很累}，{2|于是}{3|早早睡了}。","Tā juéde hěn lèi, yúshì zǎozǎo shuì le.","Anh ấy thấy mệt, thế là đi ngủ sớm."]]}],
notes:[{t:"首先……然后……", html:"<span class='zh'>首先读课文，然后回答问题。</span> xem 【三64】."}],
cmp:[
 {vn:"Tôi tìm không thấy, thế là hỏi người khác.", zh:"我找不到，[于是]问了别人。", py:"Wǒ zhǎo bu dào, yúshì wènle biérén.", ok:true, why:"于是 = thế là."}],
ex:[
 ["学汉语[首先]要有兴趣，[其次]要多练习。","Xué Hànyǔ shǒuxiān yào yǒu xìngqù, qícì yào duō liànxí.","Học tiếng Trung trước hết cần hứng thú, sau đó phải luyện nhiều."],
 ["超市关门了，[于是]我们去了别的地方。","Chāoshì guān mén le, yúshì wǒmen qùle bié de dìfang.","Siêu thị đóng cửa, thế là chúng tôi đi chỗ khác."],
 ["大家都同意，[于是]计划就定下来了。","Dàjiā dōu tóngyì, yúshì jìhuà jiù dìng xialai le.","Mọi người đồng ý, thế là kế hoạch được quyết."]],
errs:[
 {bad:"首先要注意安全，第二次要注意时间。", good:"首先要注意安全，其次要注意时间。", why:"其次 = tiếp theo; 第二次 = lần thứ hai."},
 {bad:"明天下雨，于是我们不去。", good:"明天下雨的话，我们就不去。", why:"于是 kể việc đã xảy ra."},
 {bad:"他累了，于是就所以睡了。", good:"他累了，于是睡了。", why:"Không chồng từ nối."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"首先要有兴趣，＿要多练习。", vi:"Trước hết cần hứng thú, sau đó luyện nhiều.", o:["其次","于是","否则"], a:0, why:"首先……其次."},
  {q:"下雨了，＿比赛取消了。", vi:"Trời mưa, thế là trận đấu bị hủy.", o:["于是","其次","尽管"], a:0, why:"Thế là."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他觉得很累，","于是","早早","睡了"], a:"他觉得很累，于是早早睡了。", vi:"Anh ấy thấy mệt, thế là ngủ sớm."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Trước hết phải chú ý an toàn, sau đó chú ý thời gian (dùng 其次).", a:"首先要注意安全，其次要注意时间。"}]}],
rel:["三64","新5.34","三71"]
};
