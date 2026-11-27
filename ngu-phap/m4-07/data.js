// Bài ngữ pháp 【新4.07】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.07", title:"时间副词：按时、从来、赶紧、赶快、已、忽然、将、将要、从、本来", vi:"Phó từ thời gian — đúng giờ, sẽ, vốn dĩ, chưa từng…", tag:"词类 · 副词",
goals:[
 "Dùng <b>按时</b> (đúng giờ), <b>将 / 将要</b> (sẽ, sắp).",
 "Dùng <b>本来</b> (vốn dĩ), <b>已</b> (đã, văn viết).",
 "Dùng <b>从不 / 从没</b> như 从来不 / 从来没."],
intro:"将, 已 là cách viết trang trọng của 要, 已经, hay gặp trong tin tức, thông báo.",
rules:[
 {t:"S + 按时 + V", sub:"（1）按时", fx:[["S",""],["按时",null],["V",""]], mean:"Đúng giờ, đúng hạn.",
  ex:[["{1|病人}要{2|按时}{3|吃药}。","Bìngrén yào ànshí chī yào.","Người bệnh phải uống thuốc đúng giờ."]]},
 {t:"S + 将 / 将要 + V", sub:"（2）将来", fx:[["S",""],["将 / 将要",null],["V",""]], mean:"Sẽ, sắp (văn viết).",
  ex:[["{1|会议}{2|将}{3|在明天举行}。","Huìyì jiāng zài míngtiān jǔxíng.","Hội nghị sẽ tổ chức vào ngày mai."],
      ["{1|他}{2|将要}{3|去国外工作}。","Tā jiāngyào qù guówài gōngzuò.","Anh ấy sắp đi nước ngoài làm việc."]]},
 {t:"S + 本来 + V，(可是) …", sub:"（3）本来", fx:[["S",""],["本来",null],["V",""],["，",""],["thay đổi",""]], mean:"Vốn định …, nhưng …",
  ex:[["{1|我}{2|本来}{3|想去}，{4|可是有事}。","Wǒ běnlái xiǎng qù, kěshì yǒu shì.","Tôi vốn định đi nhưng có việc."]]},
 {t:"已 / 从不 / 从没 + V", sub:"（4）已、从", fx:[["S",""],["已 / 从不 / 从没",null],["V",""]], mean:"已 = 已经 · 从不 chưa bao giờ (thói quen) · 从没 chưa từng.",
  ex:[["{1|报名工作}{2|已}{3|结束}。","Bàomíng gōngzuò yǐ jiéshù.","Việc đăng ký đã kết thúc."],
      ["{1|他}{2|从不}{3|迟到}。","Tā cóng bù chídào.","Anh ấy không bao giờ đi muộn."]]}],
notes:[{t:"Đã học", html:"<span class='zh'>从来、赶紧、赶快、忽然</span>: xem 【三14】 và 【二15】."}],
cmp:[
 {vn:"Xin nộp bài đúng hạn.", zh:"请[按时]交作业。", py:"Qǐng ànshí jiāo zuòyè.", ok:true, why:"按时 đứng trước động từ."}],
ex:[
 ["火车[将要]进站了。","Huǒchē jiāngyào jìn zhàn le.","Tàu sắp vào ga."],
 ["这件事[本来]很简单。","Zhè jiàn shì běnlái hěn jiǎndān.","Việc này vốn rất đơn giản."],
 ["我[从没]见过这么大的雪。","Wǒ cóng méi jiànguo zhème dà de xuě.","Tôi chưa từng thấy tuyết lớn thế."]],
errs:[
 {bad:"请交作业按时。", good:"请按时交作业。", why:"Phó từ đứng trước động từ."},
 {bad:"他将要已经走了。", good:"他已经走了。/ 他将要走了。", why:"已经 (đã) và 将要 (sắp) trái nhau."},
 {bad:"他从没迟到不。", good:"他从不迟到。", why:"从不 đứng trước động từ."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你要＿吃饭，别太晚。", vi:"Bạn phải ăn đúng giờ, đừng muộn quá.", o:["按时","本来","将要"], a:0, why:"Đúng giờ → 按时."},
  {q:"我＿想给你打电话，可是手机没电了。", vi:"Tôi vốn định gọi cho bạn nhưng máy hết pin.", o:["本来","按时","从不"], a:0, why:"Vốn định → 本来."},
  {q:"新机场＿在明年使用。", vi:"Sân bay mới sẽ dùng vào năm sau.", o:["将","已","从没"], a:0, why:"Tương lai → 将."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["会议","将","在","明天","举行"], a:"会议将在明天举行。", vi:"Hội nghị sẽ tổ chức vào ngày mai."},
  {w:["病人","要","按时","吃药"], a:"病人要按时吃药。", vi:"Người bệnh phải uống thuốc đúng giờ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy không bao giờ đi muộn.", a:"他从不迟到。/ 他从来不迟到。"}]}],
rel:["三14","二15","新5.06"]
};
