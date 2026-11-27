// Bài ngữ pháp 【新5.14】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.14", title:"介词：凭、据、依据", vi:"凭, 据, 依据 — dựa vào, theo", tag:"词类 · 介词",
goals:[
 "Dùng <b>凭</b>: dựa vào (vé, năng lực, tư cách) để làm gì.",
 "Dùng <b>据</b> dẫn nguồn tin: theo …, 据说, 据了解.",
 "Dùng <b>依据</b> nêu căn cứ (luật, quy định, số liệu)."],
intro:"Cả ba đều là “<b>theo / dựa vào</b>”, khác ở <b>thứ được dựa vào</b>: 凭 giấy tờ, bản lĩnh · 据 tin tức · 依据 quy định.",
rules:[
 {t:"凭 + căn cứ + V", sub:"（1）凭", fx:[["凭",null],["giấy tờ / năng lực",""],["V",""]], mean:"Dựa vào … mà …",
  ex:[["请大家{1|凭}{2|票}{3|入场}。","Qǐng dàjiā píng piào rùchǎng.","Mời mọi người xuất vé để vào."],
      ["他{1|凭}{2|自己的努力}{3|考上了大学}。","Tā píng zìjǐ de nǔlì kǎoshàngle dàxué.","Anh ấy bằng nỗ lực của mình thi đỗ đại học."]]},
 {t:"据 + nguồn tin，…", sub:"（2）据", fx:[["据",null],["nguồn tin",""],["，",""],["thông tin",""]], mean:"Theo …",
  ex:[["{1|据}{2|天气预报}，{3|明天有大雨}。","Jù tiānqì yùbào, míngtiān yǒu dà yǔ.","Theo dự báo thời tiết, mai mưa to."],
      ["{1|据}{2|了解}，{3|这家店已经开了二十年}。","Jù liǎojiě, zhè jiā diàn yǐjīng kāile èrshí nián.","Theo tìm hiểu, quán này đã mở hai mươi năm."]]},
 {t:"依据 + quy định + V", sub:"（3）依据", fx:[["依据",null],["quy định / số liệu",""],["V",""]], mean:"Căn cứ vào … để …",
  ex:[["学校{1|依据}{2|考试成绩}{3|分班}。","Xuéxiào yījù kǎoshì chéngjì fēn bān.","Trường căn cứ điểm thi để xếp lớp."]]}],
cmp:[
 {vn:"Anh dựa vào đâu mà nói thế?", zh:"你[凭]什么这么说？", py:"Nǐ píng shénme zhème shuō?", ok:true, why:"凭什么 = dựa vào đâu (giọng chất vấn)."}],
ex:[
 ["[凭]学生证可以买半价票。","Píng xuéshēngzhèng kěyǐ mǎi bànjià piào.","Có thẻ sinh viên được mua vé nửa giá."],
 ["[据]说他下个月要结婚了。","Jùshuō tā xià gè yuè yào jiéhūn le.","Nghe nói tháng sau anh ấy cưới."],
 ["请[依据]实际情况填写。","Qǐng yījù shíjì qíngkuàng tiánxiě.","Vui lòng điền theo tình hình thực tế."]],
errs:[
 {bad:"据票入场。", good:"凭票入场。", why:"Xuất trình giấy tờ → 凭."},
 {bad:"凭天气预报，明天有雨。", good:"据天气预报，明天有雨。", why:"Dẫn nguồn tin → 据."},
 {bad:"他考上了大学凭自己的努力。", good:"他凭自己的努力考上了大学。", why:"Cụm giới từ đứng trước động từ."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"请大家＿票入场。", vi:"Mời mọi người xuất vé để vào.", o:["凭","据","朝"], a:0, why:"Giấy tờ → 凭."},
  {q:"＿报道，今年来旅游的人很多。", vi:"Theo đưa tin, năm nay khách du lịch rất đông.", o:["据","凭","替"], a:0, why:"Nguồn tin → 据."},
  {q:"公司＿规定处理这件事。", vi:"Công ty xử lý việc này theo quy định.", o:["依据","凭什么","同"], a:0, why:"Quy định → 依据."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","凭","自己的努力","考上了","大学"], a:"他凭自己的努力考上了大学。", vi:"Anh ấy bằng nỗ lực của mình thi đỗ đại học."},
  {w:["据","天气预报，","明天","有","大雨"], a:"据天气预报，明天有大雨。", vi:"Theo dự báo, mai mưa to."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh dựa vào đâu mà nói thế?", a:"你凭什么这么说？/ 你凭什么这样说？"},
  {q:"Nghe nói tháng sau anh ấy cưới (dùng 据).", a:"据说他下个月要结婚了。/ 据说他下个月结婚。"}]}],
rel:["三29","新3.25","新4.15"]
};
