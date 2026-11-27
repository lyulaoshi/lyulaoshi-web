// Bài ngữ pháp 【新5.06】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.06", title:"时间副词：时刻、即将、急忙、渐渐、尽快、早晚……", vi:"时刻, 即将, 急忙, 渐渐, 尽快, 早晚 — luôn, sắp, vội, dần, sớm muộn", tag:"词类 · 副词",
goals:[
 "Dùng <b>即将</b> (sắp), <b>尽快</b> (càng sớm càng tốt), <b>早晚</b> (sớm muộn).",
 "Dùng <b>渐渐</b> (dần dần), <b>急忙</b> (vội vàng), <b>时刻</b> (luôn luôn).",
 "Phân biệt 尽快 (đề nghị) và 急忙 (kể hành động)."],
intro:"Điểm này còn gồm 曾经, 立刻, 连忙, 始终, 早已 (xem 【三14】).",
rules:[
 {t:"即将 / 早晚 + V", sub:"（1）tương lai", fx:[["S",""],["即将 / 早晚",null],["V",""]], mean:"即将 sắp (văn viết) · 早晚 sớm muộn gì cũng.",
  ex:[["{1|比赛}{2|即将}{3|开始}。","Bǐsài jíjiāng kāishǐ.","Trận đấu sắp bắt đầu."],
      ["{1|他}{2|早晚}{3|会明白的}。","Tā zǎowǎn huì míngbai de.","Sớm muộn gì anh ấy cũng hiểu."]]},
 {t:"尽快 / 急忙 + V", sub:"（2）nhanh", fx:[["S",""],["尽快 / 急忙",null],["V",""]], mean:"尽快 sớm nhất có thể · 急忙 vội vàng.",
  ex:[["请{1|你}{2|尽快}{3|回复}。","Qǐng nǐ jǐnkuài huífù.","Mong bạn trả lời sớm nhất."],
      ["听到电话，{1|他}{2|急忙}{3|跑过去}。","Tīngdào diànhuà, tā jímáng pǎo guoqu.","Nghe điện thoại reo, anh ấy vội chạy tới."]]},
 {t:"渐渐 / 时刻 + V", sub:"（3）quá trình", fx:[["S",""],["渐渐 / 时刻",null],["V / Adj",""]], mean:"渐渐 dần dần · 时刻 lúc nào cũng.",
  ex:[["{1|天}{2|渐渐}{3|黑了}。","Tiān jiànjiàn hēi le.","Trời tối dần."],
      ["{1|我们}要{2|时刻}{3|注意安全}。","Wǒmen yào shíkè zhùyì ānquán.","Chúng ta phải luôn chú ý an toàn."]]}],
cmp:[
 {vn:"Cậu cứ lười thế, sớm muộn cũng hối hận.", zh:"你这么懒，[早晚]会后悔的。", py:"Nǐ zhème lǎn, zǎowǎn huì hòuhuǐ de.", ok:true, why:"早晚 thường đi với 会……的."}],
ex:[
 ["假期[即将]结束了。","Jiàqī jíjiāng jiéshù le.","Kỳ nghỉ sắp hết."],
 ["雨[渐渐]停了。","Yǔ jiànjiàn tíng le.","Mưa tạnh dần."],
 ["问题发现了，要[尽快]解决。","Wèntí fāxiàn le, yào jǐnkuài jiějué.","Đã phát hiện vấn đề thì phải giải quyết sớm."]],
errs:[
 {bad:"请你急忙回复。", good:"请你尽快回复。", why:"Đề nghị làm sớm → 尽快."},
 {bad:"比赛即将已经开始了。", good:"比赛即将开始。/ 比赛已经开始了。", why:"即将 (sắp) không đi với 已经."},
 {bad:"天黑渐渐了。", good:"天渐渐黑了。", why:"Phó từ đứng trước vị ngữ."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"收到邮件后请＿回复。", vi:"Nhận thư xin trả lời sớm.", o:["尽快","急忙","渐渐"], a:0, why:"Đề nghị → 尽快."},
  {q:"春天来了，天气＿暖和了。", vi:"Xuân về, trời ấm dần.", o:["渐渐","即将","早晚"], a:0, why:"Dần dần."},
  {q:"别骗人，大家＿会知道的。", vi:"Đừng dối, sớm muộn mọi người cũng biết.", o:["早晚","时刻","急忙"], a:0, why:"早晚会……的."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["比赛","即将","开始"], a:"比赛即将开始。", vi:"Trận đấu sắp bắt đầu."},
  {w:["我们","要","时刻","注意","安全"], a:"我们要时刻注意安全。", vi:"Chúng ta phải luôn chú ý an toàn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Sớm muộn gì anh ấy cũng hiểu.", a:"他早晚会明白的。/ 他早晚会明白。/ 他早晚会懂的。"}]}],
rel:["三14","新4.07","二19"]
};
