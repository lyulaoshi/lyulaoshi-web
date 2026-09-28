// Bài ngữ pháp 【三13】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三13", title:"范围、协同副词：光、仅、仅仅、就、至少", vi:"Phó từ phạm vi 光, 仅, 就, 至少 — chỉ, riêng, ít nhất", tag:"词类 · 副词",
goals:[
 "Dùng <b>光 / 仅 / 仅仅 / 就³</b> nghĩa “chỉ”.",
 "Dùng <b>至少</b> (ít nhất) trước số lượng / động từ.",
 "Biết 就³ đứng trước chủ ngữ để giới hạn người: 就他知道."],
intro:"Các phó từ này <b>giới hạn phạm vi</b>. 光 khẩu ngữ, 仅 / 仅仅 trang trọng hơn, 就 hay dùng trong nói.",
rules:[
 {t:"光 / 仅 / 仅仅 + V / số lượng", sub:"chỉ", fx:[["(S)",""],["光 / 仅 / 仅仅",null],["V / số lượng",""]], mean:"",
  ex:[["他每天[光]玩儿不学习。","Tā měi tiān guāng wánr bù xuéxí.","Ngày nào anh ấy cũng chỉ chơi, không học.","等级标准"],
      ["今天来上课的[仅]有五个学生。","Jīntiān lái shàng kè de jǐn yǒu wǔ ge xuésheng.","Hôm nay chỉ có năm học sinh đến lớp.","等级标准"],
      ["这次旅行[仅仅]花了三千块。","Zhè cì lǚxíng jǐnjǐn huā le sānqiān kuài.","Chuyến du lịch này chỉ tốn 3.000 tệ.","等级标准"]]},
 {t:"就³: chỉ (riêng)", sub:"就³", fx:[["就",null],["người / số lượng",""]], mean:"就 + chủ ngữ: chỉ người đó; 就 + V + số lượng: chỉ bấy nhiêu.",
  ex:[["我们班[就]他知道这个消息。","Wǒmen bān jiù tā zhīdào zhège xiāoxi.","Lớp chúng tôi chỉ anh ấy biết tin này.","等级标准"],
      ["我[就]拿了一支笔。","Wǒ jiù ná le yì zhī bǐ.","Tôi chỉ lấy một cây bút.","等级标准"]]},
 {t:"至少: ít nhất", sub:"至少", fx:[["至少",null],["(V) + số lượng",""]], mean:"",
  ex:[["教室里[至少]有五十个人。","Jiàoshì li zhìshǎo yǒu wǔshí ge rén.","Trong lớp ít nhất có 50 người.","等级标准"]]}],
cmp:[
 {vn:"Tôi chỉ có 10 tệ thôi.", zh:"我[就]有十块钱。", py:"Wǒ jiù yǒu shí kuài qián.", ok:true, why:"“chỉ … thôi” → 就 / 只 trước động từ."},
 {vn:"Ít nhất phải học hai tiếng.", zh:"[至少]要学两个小时。", py:"Zhìshǎo yào xué liǎng ge xiǎoshí.", ok:true, why:"至少 đứng trước."}],
ex:[
 ["你[至少]要睡七个小时。","Nǐ zhìshǎo yào shuì qī ge xiǎoshí.","Bạn phải ngủ ít nhất bảy tiếng."],
 ["[光]说不做没有用。","Guāng shuō bú zuò méiyǒu yòng.","Chỉ nói mà không làm thì vô ích."],
 ["家里[就]我一个人。","Jiā li jiù wǒ yí ge rén.","Trong nhà chỉ có mình tôi."]],
errs:[
 {bad:"我拿了一支笔就。", good:"我就拿了一支笔。", why:"就 đứng trước động từ."},
 {bad:"教室里有至少五十个人。", good:"教室里至少有五十个人。", why:"至少 đứng trước động từ 有."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trong lớp ít nhất có 50 người.", o:["教室里至少有五十个人。","教室里有五十个人至少。","至少教室里有五十人个。"], a:0, why:"至少 + 有."},
  {q:"Lớp tôi chỉ anh ấy biết tin này.", o:["我们班他就知道这个消息。","我们班就他知道这个消息。","我们班他知道这个消息就。"], a:1, why:"就 + người."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这次旅行","仅仅","花了","三千块"], a:"这次旅行仅仅花了三千块。", vi:"Chuyến du lịch này chỉ tốn 3.000 tệ."},
  {w:["你","至少","要","睡","七个小时"], a:"你至少要睡七个小时。", vi:"Bạn phải ngủ ít nhất bảy tiếng."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Trong nhà chỉ có mình tôi.", a:"家里就我一个人。/ 家里只有我一个人。"},
  {q:"Tôi chỉ lấy một cây bút.", a:"我就拿了一支笔。/ 我只拿了一支笔。"}]}],
rel:["二14","一10","三12","二20"]
};
