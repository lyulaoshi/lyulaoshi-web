// Bài ngữ pháp 【三57】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三57", title:"兼语句1：表使令", vi:"Câu kiêm ngữ 1 — bảo / mời / cho ai làm gì", tag:"句子的类型 · 特殊句型",
goals:[
 "Đặt câu <b>S + 叫 / 让 / 请 / 派 + người + V</b>.",
 "Hiểu người ở giữa vừa là <b>tân ngữ</b> của động từ trước, vừa là <b>chủ ngữ</b> của động từ sau.",
 "Phủ định đặt trước động từ thứ nhất: 妈妈不让我去."],
intro:"Câu kiêm ngữ nói <b>ai khiến / mời / cử ai làm gì</b> — giống “Mẹ bảo tôi về sớm” trong tiếng Việt.",
rules:[
 {t:"S + 叫 / 让 / 请 / 派 + người + V (+ O)", sub:"使令", fx:[["S",""],["叫 / 让 / 请 / 派",null],["người (kiêm ngữ)",""],["V + O",""]], mean:"",
  ex:[["经理[叫]他介绍一下儿中国市场情况。","Jīnglǐ jiào tā jièshào yíxiàr Zhōngguó shìchǎng qíngkuàng.","Giám đốc bảo anh ấy giới thiệu tình hình thị trường Trung Quốc.","等级标准"],
      ["公司[派]我来中国学习中文。","Gōngsī pài wǒ lái Zhōngguó xuéxí Zhōngwén.","Công ty cử tôi sang Trung Quốc học tiếng Trung.","等级标准"],
      ["我[请]他去我家玩儿。","Wǒ qǐng tā qù wǒ jiā wánr.","Tôi mời anh ấy đến nhà tôi chơi.","等级标准"],
      ["妈妈[让]我早点儿回国。","Māma ràng wǒ zǎo diǎnr huí guó.","Mẹ bảo tôi về nước sớm.","等级标准"]]}],
cmp:[
 {vn:"Mẹ không cho tôi đi.", zh:"妈妈[不让]我去。", py:"Māma bú ràng wǒ qù.", ok:true, why:"Phủ định đứng trước 让."}],
ex:[
 ["老师[让]我们读课文。","Lǎoshī ràng wǒmen dú kèwén.","Cô bảo chúng tôi đọc bài khóa."],
 ["这件事[让]我很高兴。","Zhè jiàn shì ràng wǒ hěn gāoxìng.","Chuyện này khiến tôi rất vui."]],
errs:[
 {bad:"妈妈让我不去。（ý: không cho đi）", good:"妈妈不让我去。", why:"Phủ định đặt trước 让."},
 {bad:"我请去他我家玩儿。", good:"我请他去我家玩儿。", why:"Người đứng giữa hai động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mẹ không cho tôi đi.", o:["妈妈让我不去。","妈妈不让我去。"], a:1, why:"不 trước 让."},
  {q:"Tôi mời anh ấy đến nhà chơi.", o:["我请他去我家玩儿。","我请去他我家玩儿。"], a:0, why:"请 + người + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["公司","派","我","来","中国","学习"], a:"公司派我来中国学习。", vi:"Công ty cử tôi sang Trung Quốc học."},
  {w:["老师","让","我们","读","课文"], a:"老师让我们读课文。", vi:"Cô bảo chúng tôi đọc bài khóa."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chuyện này khiến tôi rất vui.", a:"这件事让我很高兴。"},
  {q:"Mẹ bảo tôi về nước sớm.", a:"妈妈让我早点儿回国。/ 妈妈叫我早点儿回国。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"妈妈让我早点儿回家。", vi:"Mẹ bảo tôi về nhà sớm.", o:["Đúng","Sai"], a:0, why:"让 + người + V."},
  {q:"老师让我们不说话。", vi:"Cô không cho chúng tôi nói chuyện.", o:["Đúng","Sai"], a:1, why:"Phủ định trước 让: 老师不让我们说话。"},
  {q:"我请他吃饭。", vi:"Tôi mời anh ấy ăn cơm.", o:["Đúng","Sai"], a:0, why:"请 + người + V."},
  {q:"公司派去我北京。", vi:"Công ty cử tôi đi Bắc Kinh.", o:["Đúng","Sai"], a:1, why:"Người đứng giữa hai động từ: 公司派我去北京。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bố bảo tôi học tiếng Trung.", o:["爸爸让我学中文。", "爸爸让学中文我。"], a:0, why:"让 + người + V."},
  {q:"Mẹ không cho tôi chơi game.", o:["妈妈不让我玩儿游戏。", "妈妈让我不玩儿游戏。"], a:0, why:"不 đứng trước 让."},
  {q:"Tôi mời bạn uống cà phê.", o:["我请你喝咖啡。", "我请喝咖啡你。"], a:0, why:"请 + người + V."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Thầy bảo chúng tôi đọc bài khóa.", a:"老师让我们读课文。/ 老师叫我们读课文。"},
  {q:"Tôi mời anh ấy đến nhà tôi ăn cơm.", a:"我请他来我家吃饭。/ 我请他去我家吃饭。/ 我请他到我家吃饭。"},
  {q:"Chuyện này làm tôi rất vui.", a:"这件事让我很高兴。/ 这件事让我很开心。"}]}],
rel:["三32","三27","三56","一34"]
};
