// Bài ngữ pháp 【一29】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一29", title:"主谓句1：动词谓语句", vi:"Câu vị ngữ động từ — S + V + O", tag:"句子的类型 · 句型 · 单句",
goals:[
 "Đặt câu cơ bản <b>Chủ ngữ + Động từ + Tân ngữ</b>.",
 "Phủ định bằng <b>不 / 没</b> đặt trước động từ.",
 "Hỏi bằng <b>吗</b> hoặc <b>V 不 V</b>."],
intro:"Câu có vị ngữ là động từ là loại câu thường gặp nhất. Khung cơ bản giống tiếng Việt: <b>S + V + O</b>.",
rules:[
 {t:"Khẳng định", sub:"肯定", fx:[["Chủ ngữ",""],["Động từ",null],["Tân ngữ",""]], mean:"Ai làm gì.",
  ex:[["我买一个[面包]。","Wǒ mǎi yí ge miànbāo.","Tôi mua một cái bánh mì.","等级标准"]]},
 {t:"Phủ định", sub:"否定", fx:[["Chủ ngữ",""],["不 / 没",null],["Động từ",""],["Tân ngữ",""]], mean:"不: ý muốn, thói quen, tương lai; 没: việc đã không xảy ra 【一14】.",
  ex:[["他[不]去医院。","Tā bú qù yīyuàn.","Anh ấy không đi bệnh viện.","等级标准"]]},
 {t:"Câu hỏi", sub:"疑问", fx:[["S + V + O",""],["吗？",null],["/ S + V不V + O？",null]], mean:"Hỏi có / không.",
  ex:[["你去医院[吗]？","Nǐ qù yīyuàn ma?","Bạn đi bệnh viện không?"],
      ["你[去不去]医院？","Nǐ qù bu qù yīyuàn?","Bạn có đi bệnh viện không?"]]}],
cmp:[
 {vn:"Tôi mua bánh mì.", zh:"我[买]面包。", py:"Wǒ mǎi miànbāo.", ok:true, why:"Giống tiếng Việt."},
 {vn:"Anh ấy không đi bệnh viện.", zh:"他[不去]医院。", py:"Tā bú qù yīyuàn.", ok:true, why:"“không” trước động từ — giống tiếng Việt."}],
ex:[
 ["我喝茶。","Wǒ hē chá.","Tôi uống trà."],
 ["他们学中文。","Tāmen xué Zhōngwén.","Họ học tiếng Trung."],
 ["我[没]看这个电影。","Wǒ méi kàn zhège diànyǐng.","Tôi chưa xem bộ phim này."],
 ["你喜欢[不]喜欢唱歌？","Nǐ xǐhuan bu xǐhuan chàng gē?","Bạn có thích hát không?"]],
errs:[
 {bad:"我面包买。", good:"我买面包。", why:"Tân ngữ sau động từ."},
 {bad:"他去不医院。", good:"他不去医院。", why:"不 đứng trước động từ."},
 {bad:"你去不去医院吗？", good:"你去不去医院？", why:"V不V không thêm 吗."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy không đi bệnh viện.", o:["他去不医院。","他不去医院。","他医院不去。"], a:1, why:"不 + V + O."},
  {q:"Bạn có đi không?", o:["你去不去？","你去不去吗？","你不去去？"], a:0, why:"V不V?"},
  {q:"Tôi mua một cái bánh mì.", o:["我一个面包买。","我买一个面包。","买我一个面包。"], a:1, why:"S + V + O."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","买","一个","面包"], a:"我买一个面包。", vi:"Tôi mua một cái bánh mì."},
  {w:["他","不","去","医院"], a:"他不去医院。", vi:"Anh ấy không đi bệnh viện."},
  {w:["你","喜欢","不","喜欢","唱歌"], a:"你喜欢不喜欢唱歌？", vi:"Bạn có thích hát không?"}]},
 {t:"C. Đổi câu", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"我喝咖啡。", vi:"Tôi uống cà phê.", a:"我不喝咖啡。"},
  {ask:"Hỏi bằng 吗", q:"他学中文。", vi:"Anh ấy học tiếng Trung.", a:"他学中文吗？"},
  {ask:"Hỏi bằng V不V", q:"你看电视。", vi:"Bạn xem ti vi.", a:"你看不看电视？"}]}],
rel:["一25","一30","一14","一48"]
};
