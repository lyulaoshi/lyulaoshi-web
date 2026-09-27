// Bài ngữ pháp 【一32】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一32", title:"陈述句", vi:"Câu trần thuật — kể, thông báo (khẳng định, phủ định)", tag:"句子的类型 · 句类",
goals:[
 "Đặt câu trần thuật khẳng định và phủ định, kết thúc bằng dấu <b>。</b>",
 "Đặt 不 / 没 đúng chỗ: <b>trước động từ đầu tiên / động từ năng nguyện</b>.",
 "Đọc câu trần thuật với ngữ điệu hạ ở cuối."],
intro:"Câu trần thuật dùng để kể một sự việc hay nêu nhận xét. Cuối câu dùng dấu chấm tròn <b>。</b>, ngữ điệu đi xuống.",
rules:[
 {t:"Khẳng định", sub:"肯定", fx:[["Chủ ngữ",""],["Vị ngữ",null],["。",""]], mean:"Kể việc, nêu nhận xét.",
  ex:[["妈妈做晚饭。","Māma zuò wǎnfàn.","Mẹ nấu cơm tối.","等级标准"]]},
 {t:"Phủ định", sub:"否定", fx:[["Chủ ngữ",""],["不 / 没",null],["(想 / 喜欢 / 会…) + V",""]], mean:"不 / 没 đứng trước động từ; nếu có động từ năng nguyện, tâm lý (想、喜欢、会…) thì đứng trước chúng.",
  ex:[["我[不]喜欢看电视。","Wǒ bù xǐhuan kàn diànshì.","Tôi không thích xem ti vi.","等级标准"],
      ["他[没]来。","Tā méi lái.","Anh ấy không đến."]]}],
cmp:[
 {vn:"Tôi không thích xem ti vi.", zh:"我[不]喜欢看电视。", py:"Wǒ bù xǐhuan kàn diànshì.", ok:true, why:"不 phủ định 喜欢, giống vị trí “không” tiếng Việt."}],
ex:[
 ["我是越南人。","Wǒ shì Yuènán rén.","Tôi là người Việt Nam."],
 ["今天很热。","Jīntiān hěn rè.","Hôm nay rất nóng."],
 ["我[不]想去。","Wǒ bù xiǎng qù.","Tôi không muốn đi."],
 ["他昨天[没]上班。","Tā zuótiān méi shàng bān.","Hôm qua anh ấy không đi làm."]],
errs:[
 {bad:"我喜欢不看电视。", good:"我不喜欢看电视。", why:"不 đứng trước 喜欢."},
 {bad:"妈妈晚饭做。", good:"妈妈做晚饭。", why:"Tân ngữ sau động từ."},
 {bad:"我想不去。（ý: không muốn đi）", good:"我不想去。", why:"不 đứng trước 想."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi không thích xem ti vi.", o:["我喜欢不看电视。","我不喜欢看电视。","不我喜欢看电视。"], a:1, why:"不 + 喜欢."},
  {q:"Tôi không muốn đi.", o:["我不想去。","我想不去。","我去不想。"], a:0, why:"不 + 想."},
  {q:"Mẹ nấu cơm tối.", o:["妈妈晚饭做。","做晚饭妈妈。","妈妈做晚饭。"], a:2, why:"S + V + O."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["妈妈","做","晚饭"], a:"妈妈做晚饭。", vi:"Mẹ nấu cơm tối."},
  {w:["我","不","喜欢","看","电视"], a:"我不喜欢看电视。", vi:"Tôi không thích xem ti vi."},
  {w:["他","昨天","没","上班"], a:"他昨天没上班。", alt:["昨天他没上班。"], vi:"Hôm qua anh ấy không đi làm."}]},
 {t:"C. Đổi sang phủ định", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"我会说英语。", a:"我不会说英语。"},
  {ask:"Phủ định", q:"他昨天来了。", a:"他昨天没来。"},
  {ask:"Phủ định", q:"我想喝咖啡。", a:"我不想喝咖啡。"}]}],
rel:["一33","一34","一35","一14"]
};
