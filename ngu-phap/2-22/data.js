// Bài ngữ pháp 【二22】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二22", title:"介词：往", vi:"Giới từ 往 — “về phía, hướng về”", tag:"词类 · 介词 · 引出方向、路径",
goals:[
 "Chỉ đường bằng <b>往 + phương hướng + 走 / 拐</b>.",
 "Đặt 往…… <b>trước động từ</b> (không nói <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> 走往左).",
 "Dùng khung chỉ đường: 往前走……就到了."],
intro:"往 dẫn ra <b>hướng di chuyển</b>. Cụm “往 + hướng” đứng <b>trước động từ</b> — ngược với “đi <b>về phía trước</b>” của tiếng Việt.",
rules:[
 {t:"往 + hướng + động từ", sub:"往", fx:[["(S)",""],["往",null],["前 / 左 / 右 / 东…",""],["走 / 拐 / 看…",""]], mean:"Đi / rẽ / nhìn về phía nào.",
  ex:[["你[往]左走，就能看见洗手间。","Nǐ wǎng zuǒ zǒu, jiù néng kànjiàn xǐshǒujiān.","Bạn đi về bên trái là thấy nhà vệ sinh.","等级标准"],
      ["你[往]前走一百米就到了。","Nǐ wǎng qián zǒu yìbǎi mǐ jiù dào le.","Bạn đi thẳng 100 mét là đến.","等级标准"]]}],
notes:[
 {t:"往 và 向", html:"chỉ hướng di chuyển thì 往 và 向 【二23】 thường thay nhau được; nhưng hướng về <b>người</b> (học ai, nói với ai) chỉ dùng 向."}],
cmp:[
 {vn:"Đi thẳng về phía trước.", zh:"[往前]走。", py:"Wǎng qián zǒu.", ok:true, why:"“về phía trước” đưa lên trước động từ."},
 {vn:"Đến ngã tư thì rẽ phải.", zh:"到路口[往右]拐。", py:"Dào lùkǒu wǎng yòu guǎi.", ok:true, why:"往右 + 拐."}],
ex:[
 ["[往]右拐就是银行。","Wǎng yòu guǎi jiù shì yínháng.","Rẽ phải là ngân hàng."],
 ["这趟车[往]北京开。","Zhè tàng chē wǎng Běijīng kāi.","Chuyến xe này chạy về hướng Bắc Kinh."],
 ["别[往]下看！","Bié wǎng xià kàn!","Đừng nhìn xuống!"]],
errs:[
 {bad:"你走往左。", good:"你往左走。", why:"往 + hướng đứng trước động từ."},
 {bad:"往前一百米走。", good:"往前走一百米。", why:"Khoảng cách đứng sau động từ."},
 {bad:"我往老师学习。", good:"我向老师学习。", why:"Hướng về người dùng 向."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn đi về bên trái.", o:["你走往左。","你往左走。","往左你走。"], a:1, why:"往 + hướng + V."},
  {q:"Đi thẳng 100 mét là đến.", o:["往前走一百米就到了。","往前一百米走就到了。","走往前一百米就到了。"], a:0, why:"往前 + 走 + khoảng cách."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","往","左","走","就能","看见","洗手间"], a:"你往左走，就能看见洗手间。", vi:"Bạn đi về bên trái là thấy nhà vệ sinh."},
  {w:["往","右","拐","就是","银行"], a:"往右拐就是银行。", vi:"Rẽ phải là ngân hàng."}]},
 {t:"C. Chỉ đường bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Đi thẳng, rồi rẽ trái.", a:"往前走，然后往左拐。"},
  {q:"Đi về phía đông 200 mét là đến.", a:"往东走两百米就到了。"}]}],
rel:["二23","二24","一01","二62"]
};
