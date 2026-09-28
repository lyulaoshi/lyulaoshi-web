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
  {q:"Mẹ bảo tôi về nước sớm.", a:"妈妈让我早点儿回国。/ 妈妈叫我早点儿回国。"}]}],
rel:["三32","三27","三56","一34"]
};
