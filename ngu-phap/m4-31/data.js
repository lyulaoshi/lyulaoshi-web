// Bài ngữ pháp 【新4.31】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.31", title:"够……的", vi:"够……的 — thật là …, … quá đi", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>够 + Adj + 的</b> để cảm thán mức độ cao: thật là …",
 "Hay dùng khi <b>phàn nàn</b> hoặc khen cảm thán trong khẩu ngữ.",
 "Không thêm 很 vào giữa."],
intro:"够 vốn là “đủ”. Trong 够……的 nó nghĩa là “<b>đủ … rồi đấy</b>” → thật là, quá là.",
rules:[
 {t:"S + 够 + Adj + 的", sub:"程度", fx:[["S",""],["够",null],["Adj",""],["的",null]], mean:"… thật, … ghê.",
  ex:[["{1|今天}{2|够}{3|热}{4|的}。","Jīntiān gòu rè de.","Hôm nay nóng thật đấy."],
      ["{1|你}{2|够}{3|忙}{4|的}！","Nǐ gòu máng de!","Bạn bận ghê!"]]}],
notes:[{t:"够 + Adj (không có 的)", html:"<span class='zh'>时间够长了。</span> = thời gian đủ dài rồi. Có 的 thì mang giọng cảm thán."}],
cmp:[
 {vn:"Bài này khó thật đấy.", zh:"这个题[够]难[的]。", py:"Zhège tí gòu nán de.", ok:true, why:"Cảm thán → 够…的, không dùng 很…的."}],
ex:[
 ["这几天你[够]辛苦[的]。","Zhè jǐ tiān nǐ gòu xīnkǔ de.","Mấy hôm nay bạn vất vả thật."],
 ["他这个人[够]奇怪[的]。","Tā zhège rén gòu qíguài de.","Con người anh ấy kỳ lạ thật."],
 ["路上[够]堵[的]，我们快走吧。","Lùshang gòu dǔ de, wǒmen kuài zǒu ba.","Đường tắc ghê, chúng ta đi nhanh thôi."]],
errs:[
 {bad:"今天够很热的。", good:"今天够热的。", why:"够 đã chỉ mức độ, không thêm 很."},
 {bad:"今天热够的。", good:"今天够热的。", why:"够 đứng trước tính từ."},
 {bad:"他够跑的快。", good:"他跑得够快的。", why:"Có bổ ngữ thì đặt 够 trước tính từ trong bổ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay lạnh thật.", o:["今天够冷的。","今天冷够的。","今天够很冷的。"], a:0, why:"够 + Adj + 的."},
  {q:"Anh ấy chạy nhanh thật.", o:["他跑得够快的。","他够跑得快的快。"], a:0, why:"V + 得 + 够 + Adj + 的."},
  {q:"这件事够麻烦＿。", vi:"Việc này phiền thật.", o:["的","了的吗","得"], a:0, why:"Khung 够……的."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这几天","你","够","辛苦","的"], a:"这几天你够辛苦的。", alt:["你这几天够辛苦的。"], vi:"Mấy hôm nay bạn vất vả thật."},
  {w:["这个","题","够","难","的"], a:"这个题够难的。", vi:"Bài này khó thật."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 够……的)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hôm nay nóng thật đấy.", a:"今天够热的。/ 今天天气够热的。"},
  {q:"Bạn bận ghê!", a:"你够忙的！"}]}],
rel:["一35","三49","三12"]
};
