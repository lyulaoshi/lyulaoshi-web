// Bài ngữ pháp 【新4.03】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.03", title:"名量词：打、袋、棵、台、幅；脸、手、盒、屋子、桌子", vi:"Lượng từ HSK 4 — 打, 袋, 棵, 幅 và lượng từ mượn", tag:"词类 · 量词",
goals:[
 "Dùng <b>打、袋、棵、台、幅</b> đúng với danh từ.",
 "Mượn danh từ làm lượng từ: <b>一脸、一手、一盒、一屋子、一桌子</b>.",
 "Hiểu lượng từ mượn + 一 thường nghĩa là “<b>đầy</b>”."],
intro:"一<b>脸</b>汗 không phải “một cái mặt” mà là “<b>đầy mặt</b> mồ hôi”.",
rules:[
 {t:"Số + 打 / 袋 + danh từ", sub:"（1）", fx:[["Số",""],["打 / 袋",null],["Danh từ",""]], mean:"打 (dá) một tá · 袋 túi, bao.",
  ex:[["他买了{1|一}{2|打}{3|啤酒}。","Tā mǎile yì dá píjiǔ.","Anh ấy mua một tá bia."],
      ["家里还有{1|两}{2|袋}{3|大米}。","Jiāli hái yǒu liǎng dài dàmǐ.","Nhà còn hai bao gạo."]]},
 {t:"Số + 棵 / 台 / 幅 + danh từ", sub:"（2）", fx:[["Số",""],["棵 / 台 / 幅",null],["Danh từ",""]], mean:"棵 cây cối · 台 máy móc · 幅 tranh, bản đồ.",
  ex:[["门前有{1|一}{2|棵}{3|大树}。","Mén qián yǒu yì kē dà shù.","Trước cửa có một cái cây to."],
      ["公司买了{1|三}{2|台}{3|电脑}。","Gōngsī mǎile sān tái diànnǎo.","Công ty mua ba máy tính."],
      ["墙上挂着{1|一}{2|幅}{3|画儿}。","Qiáng shang guàzhe yì fú huàr.","Trên tường treo một bức tranh."]]},
 {t:"一 + 盒 / 脸 / 手 / 屋子 / 桌子 + danh từ", sub:"（3）mượn danh từ", fx:[["一",null],["脸 / 手 / 屋子 / 桌子",null],["Danh từ",""]], mean:"一盒 một hộp · 一脸、一手、一屋子、一桌子: đầy mặt, đầy tay, cả phòng, cả bàn.",
  ex:[["他{1|一}{2|脸}{3|汗}。","Tā yì liǎn hàn.","Anh ấy mặt đầy mồ hôi."],
      ["我弄了{1|一}{2|手}{3|油}。","Wǒ nòngle yì shǒu yóu.","Tay tôi dính đầy dầu."],
      ["妈妈做了{1|一}{2|桌子}{3|菜}。","Māma zuòle yì zhuōzi cài.","Mẹ nấu cả một bàn thức ăn."],
      ["{1|一}{2|屋子}{3|人}都笑了。","Yì wūzi rén dōu xiào le.","Cả phòng đều cười."],
      ["请给我{1|一}{2|盒}{3|牛奶}。","Qǐng gěi wǒ yì hé niúnǎi.","Cho tôi một hộp sữa."]]}],
cmp:[
 {vn:"Đầy một bàn sách", zh:"[一桌子]书", py:"yì zhuōzi shū", ok:true, why:"Danh từ 桌子 làm lượng từ."}],
ex:[
 ["公园里种了几百[棵]树。","Gōngyuán li zhòngle jǐ bǎi kē shù.","Công viên trồng mấy trăm cây."],
 ["她一[脸]不高兴。","Tā yì liǎn bù gāoxìng.","Mặt cô ấy lộ rõ vẻ không vui."],
 ["这[台]洗衣机坏了。","Zhè tái xǐyījī huài le.","Cái máy giặt này hỏng rồi."]],
errs:[
 {bad:"一个树", good:"一棵树", why:"Cây dùng 棵."},
 {bad:"墙上挂着一个画儿。", good:"墙上挂着一幅画儿。", why:"Tranh dùng 幅."},
 {bad:"他两脸汗。", good:"他一脸汗。", why:"Nghĩa “đầy” chỉ dùng 一."}],
practice:[
 {t:"A. Chọn lượng từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"门前有一＿大树。", vi:"Trước cửa có một cái cây to.", o:["棵","台","幅"], a:0, why:"Cây → 棵."},
  {q:"办公室里有五＿电脑。", vi:"Văn phòng có năm máy tính.", o:["台","袋","打"], a:0, why:"Máy → 台."},
  {q:"妈妈做了一＿菜。", vi:"Mẹ nấu cả bàn thức ăn.", o:["桌子","脸","手"], a:0, why:"一桌子菜."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["墙上","挂着","一","幅","画儿"], a:"墙上挂着一幅画儿。", vi:"Trên tường treo một bức tranh."},
  {w:["一","屋子","人","都","笑了"], a:"一屋子人都笑了。", vi:"Cả phòng đều cười."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy mặt đầy mồ hôi.", a:"他一脸汗。/ 他满脸汗。/ 他一脸的汗。"},
  {q:"Anh ấy mua một tá bia.", a:"他买了一打啤酒。"}]}],
rel:["三09","新5.03","新4.22"]
};
