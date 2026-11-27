// Bài ngữ pháp 【新4.04】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.04", title:"动量词：场、顿、趟", vi:"Lượng từ động tác 场, 顿, 趟", tag:"词类 · 量词",
goals:[
 "Dùng <b>场</b> cho trận, buổi, cơn.",
 "Dùng <b>顿</b> cho bữa ăn và trận mắng, đánh.",
 "Dùng <b>趟</b> cho một chuyến đi về."],
intro:"Ba lượng từ này đứng <b>sau động từ</b> để đếm lần làm: 去一趟 (đi một chuyến).",
rules:[
 {t:"V + (了) + số + 场", sub:"（1）场 chǎng", fx:[["V",""],["数 + 场",null],["danh từ",""]], mean:"Trận đấu, buổi phim, cơn mưa, cơn bệnh.",
  ex:[["昨天{1|下了}{2|一场}{3|大雨}。","Zuótiān xiàle yì cháng dà yǔ.","Hôm qua mưa một trận to."],
      ["我们{1|看了}{2|一场}{3|电影}。","Wǒmen kànle yì chǎng diànyǐng.","Chúng tôi xem một suất phim."]]},
 {t:"V + (了) + số + 顿", sub:"（2）顿", fx:[["V",""],["数 + 顿",null],["danh từ",""]], mean:"Bữa ăn; trận mắng, trận đòn.",
  ex:[["爸爸{1|批评了}他{2|一顿}。","Bàba pīpíngle tā yí dùn.","Bố mắng nó một trận."],
      ["我{1|请你吃}{2|一顿}{3|饭}。","Wǒ qǐng nǐ chī yí dùn fàn.","Mình mời bạn ăn một bữa."]]},
 {t:"V + (了) + số + 趟", sub:"（3）趟", fx:[["去 / 来 / 跑",""],["数 + 趟",null],["nơi chốn",""]], mean:"Một lượt đi (thường rồi về).",
  ex:[["我下午要{1|去}{2|一趟}{3|银行}。","Wǒ xiàwǔ yào qù yí tàng yínháng.","Chiều nay tôi phải ra ngân hàng một chuyến."],
      ["为这事他{1|跑了}{2|三趟}。","Wèi zhè shì tā pǎole sān tàng.","Vì việc này anh ấy chạy ba chuyến."]]}],
notes:[{t:"场 đọc hai cách", html:"Cơn mưa, cơn bệnh đọc <b>cháng</b>; buổi diễn, trận đấu đọc <b>chǎng</b>."}],
cmp:[
 {vn:"Bạn đến văn phòng một chuyến.", zh:"你来[一趟]办公室。", py:"Nǐ lái yí tàng bàngōngshì.", ok:true, why:"趟 đứng trước nơi chốn."}],
ex:[
 ["周末有一[场]足球比赛。","Zhōumò yǒu yì chǎng zúqiú bǐsài.","Cuối tuần có một trận bóng đá."],
 ["他一天吃三[顿]饭。","Tā yì tiān chī sān dùn fàn.","Anh ấy ngày ăn ba bữa."],
 ["麻烦你跑一[趟]。","Máfan nǐ pǎo yí tàng.","Phiền bạn đi một chuyến."]],
errs:[
 {bad:"我去银行一个趟。", good:"我去一趟银行。", why:"趟 không đi với 个, đứng sau động từ."},
 {bad:"老师批评他一场。", good:"老师批评了他一顿。", why:"Trận mắng dùng 顿."},
 {bad:"昨天下了一顿大雨。", good:"昨天下了一场大雨。", why:"Cơn mưa dùng 场."}],
practice:[
 {t:"A. Chọn lượng từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"昨天下了一＿大雨。", vi:"Hôm qua mưa một trận to.", o:["场","趟","顿"], a:0, why:"Mưa → 场."},
  {q:"妈妈说了他一＿。", vi:"Mẹ mắng nó một trận.", o:["顿","趟","场的"], a:0, why:"Mắng → 顿."},
  {q:"我要回一＿家。", vi:"Tôi phải về nhà một chuyến.", o:["趟","顿","场"], a:0, why:"Đi về → 趟."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","下午","要","去","一趟","银行"], a:"我下午要去一趟银行。", alt:["下午我要去一趟银行。"], vi:"Chiều nay tôi phải ra ngân hàng một chuyến."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Mình mời bạn ăn một bữa.", a:"我请你吃一顿饭。/ 我请你吃顿饭。"}]}],
rel:["三10","二11","新4.03"]
};
