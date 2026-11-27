// Bài ngữ pháp 【新4.52】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.52", title:"兼语句2：表爱憎、称谓认定、致使", vi:"Câu kiêm ngữ 2 — khen chê, bầu chọn, khiến cho", tag:"句子的类型 · 特殊句型",
goals:[
 "Khen / phê bình ai vì việc gì: <b>表扬 / 批评 + người + V</b>.",
 "Bầu, nhận ai làm gì: <b>选 / 收 + người + 当 / 做 / 为 + danh từ</b>.",
 "Nói “khiến cho”: <b>使 / 让 + đại từ + cụm động từ</b>."],
intro:"Câu kiêm ngữ: một người vừa là <b>tân ngữ</b> của động từ trước, vừa là <b>chủ ngữ</b> của phần sau. 【三57】 đã học 请 / 让 / 叫; HSK 4 thêm ba nhóm nghĩa.",
rules:[
 {t:"S + 表扬 / 批评 + người + V (việc đã làm)", sub:"（1）爱憎", fx:[["S",""],["表扬 / 批评",null],["người",""],["việc",""]], mean:"Khen / chê ai (vì đã …).",
  ex:[["{1|老师}{2|表扬}{3|他}{4|帮助同学}。","Lǎoshī biǎoyáng tā bāngzhù tóngxué.","Thầy khen em ấy giúp đỡ bạn."],
      ["{1|经理}{2|批评}{3|小王}{4|经常迟到}。","Jīnglǐ pīpíng Xiǎo Wáng jīngcháng chídào.","Giám đốc phê bình Tiểu Vương hay đi muộn."]]},
 {t:"S + 选 / 收 + O1 + 当 / 做 / 为 + O2", sub:"（2）称谓、认定", fx:[["S",""],["选 / 收",null],["O1",""],["当 / 做 / 为",null],["O2",""]], mean:"Bầu / nhận ai làm gì.",
  ex:[["{1|大家}{2|选}{3|她}{4|当}{5|班长}。","Dàjiā xuǎn tā dāng bānzhǎng.","Mọi người bầu cô ấy làm lớp trưởng."],
      ["{1|王老师}{2|收}{3|他}{4|做}{5|学生}了。","Wáng lǎoshī shōu tā zuò xuésheng le.","Thầy Vương nhận anh ấy làm học trò rồi."]]},
 {t:"S + 使 / 让 + đại từ + cụm động từ", sub:"（3）致使", fx:[["S (sự việc)",""],["使 / 让",null],["我 / 他…",""],["cảm xúc, thay đổi",""]], mean:"Việc gì khiến ai thế nào.",
  ex:[["{1|这个消息}{2|使}{3|大家}{4|很高兴}。","Zhège xiāoxi shǐ dàjiā hěn gāoxìng.","Tin này làm mọi người rất vui."],
      ["{1|他的话}{2|让}{3|我}{4|明白了很多}。","Tā de huà ràng wǒ míngbaile hěn duō.","Lời anh ấy giúp tôi hiểu ra nhiều điều."]]}],
notes:[{t:"使 và 让", html:"<span class='zh'>使</span> dùng trong văn viết, chỉ nói kết quả / cảm xúc; <span class='zh'>让</span> dùng được cả khi sai bảo."}],
cmp:[
 {vn:"Việc này khiến tôi rất cảm động.", zh:"{1|这件事}{2|使}{3|我}{4|很感动}。", py:"Zhè jiàn shì shǐ wǒ hěn gǎndòng.", ok:true, why:"Giống “khiến tôi …”."}],
ex:[
 ["妈妈{2|夸}{3|我}{4|做饭好吃}。","Māma kuā wǒ zuò fàn hǎochī.","Mẹ khen tôi nấu ăn ngon."],
 ["公司{2|派}{3|他}{4|去上海工作}。","Gōngsī pài tā qù Shànghǎi gōngzuò.","Công ty cử anh ấy đến Thượng Hải làm việc."],
 ["我们都{2|认}{3|他}{4|做哥哥}。","Wǒmen dōu rèn tā zuò gēge.","Chúng tôi đều nhận anh ấy làm anh."]],
errs:[
 {bad:"大家选她班长。", good:"大家选她当班长。", why:"Giữa người và chức vụ cần 当 / 做 / 为."},
 {bad:"这个消息很高兴使大家。", good:"这个消息使大家很高兴。", why:"使 + người + cảm xúc."},
 {bad:"老师表扬帮助同学他。", good:"老师表扬他帮助同学。", why:"Người đứng ngay sau 表扬."},
 {bad:"老师使我回答问题。", good:"老师让我回答问题。", why:"Sai bảo ai làm gì dùng 让 / 叫, không dùng 使."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mọi người bầu cô ấy làm lớp trưởng.", o:["大家选她当班长。","大家选班长她当。","大家当她选班长。"], a:0, why:"选 + người + 当 + chức."},
  {q:"这个消息＿大家很高兴。", vi:"Tin này làm mọi người rất vui.", o:["使","把","被"], a:0, why:"致使 → 使."},
  {q:"Thầy khen em ấy giúp bạn.", o:["老师表扬他帮助同学。","老师帮助同学表扬他。"], a:0, why:"表扬 + người + việc."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["经理","批评","小王","经常","迟到"], a:"经理批评小王经常迟到。", vi:"Giám đốc phê bình Tiểu Vương hay đi muộn."},
  {w:["王老师","收","他","做","学生","了"], a:"王老师收他做学生了。", vi:"Thầy Vương nhận anh ấy làm học trò rồi."},
  {w:["他的话","让","我","明白了","很多"], a:"他的话让我明白了很多。", vi:"Lời anh ấy giúp tôi hiểu ra nhiều điều."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Việc này khiến tôi rất cảm động (dùng 使).", a:"这件事使我很感动。"},
  {q:"Mẹ khen tôi nấu ăn ngon.", a:"妈妈夸我做饭好吃。/ 妈妈表扬我做饭好吃。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"同学们选他为代表。", vi:"Các bạn bầu anh ấy làm đại biểu.", o:["Đúng","Sai"], a:0, why:"选……为…… dùng trong văn viết."},
  {q:"他的态度使很生气我。", vi:"Thái độ của anh ấy làm tôi rất giận.", o:["Đúng","Sai"], a:1, why:"他的态度使我很生气。"},
  {q:"爸爸批评我玩儿手机时间太长。", vi:"Bố phê bình tôi chơi điện thoại quá lâu.", o:["Đúng","Sai"], a:0, why:"批评 + người + việc."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我们请他＿我们的老师。", vi:"Chúng tôi mời ông ấy làm thầy giáo.", o:["当","被","对"], a:0, why:"请……当……."},
  {q:"这次旅行＿我认识了很多朋友。", vi:"Chuyến đi này giúp tôi quen nhiều bạn.", o:["让","把","给了"], a:0, why:"让 + người + kết quả."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Công ty cử anh ấy đến Thượng Hải làm việc.", a:"公司派他去上海工作。/ 公司让他去上海工作。"},
  {q:"Chúng tôi đều nhận anh ấy làm anh.", a:"我们都认他做哥哥。/ 我们都认他当哥哥。"}]}],
rel:["三57","三32","三55"]
};
