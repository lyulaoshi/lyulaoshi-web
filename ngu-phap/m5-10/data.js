// Bài ngữ pháp 【新5.10】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.10", title:"情态副词：似乎、仿佛", vi:"似乎, 仿佛 — dường như, như thể", tag:"词类 · 副词",
goals:[
 "Dùng <b>似乎</b> để phỏng đoán nhẹ: hình như.",
 "Dùng <b>仿佛</b> để tả cảm giác “như thể”, hay đi với 一样 / 似的.",
 "Biết cả hai thiên về văn viết hơn 好像."],
intro:"Cả hai gần nghĩa <b>好像</b>. 似乎 nghiêng về <b>phán đoán</b>, 仿佛 nghiêng về <b>hình ảnh, cảm giác</b>.",
rules:[
 {t:"S + 似乎 + V / Adj", sub:"（1）似乎", fx:[["S",""],["似乎",null],["V / Adj",""]], mean:"Dường như (theo nhận xét của tôi).",
  ex:[["{1|他}{2|似乎}{3|不太高兴}。","Tā sìhū bú tài gāoxìng.","Dường như anh ấy không vui lắm."],
      ["{1|这个问题}{2|似乎}{3|很简单}。","Zhège wèntí sìhū hěn jiǎndān.","Vấn đề này có vẻ đơn giản."]]},
 {t:"(S) 仿佛 + hình ảnh (+ 一样)", sub:"（2）仿佛", fx:[["S",""],["仿佛",null],["hình ảnh",""],["一样",""]], mean:"Như thể, tựa như.",
  ex:[["{1|听着这首歌}，我{2|仿佛}{3|回到了小时候}。","Tīngzhe zhè shǒu gē, wǒ fǎngfú huídàole xiǎoshíhou.","Nghe bài hát này, tôi như trở về thời thơ ấu."],
      ["{1|时间}{2|仿佛}{3|停住了}{4|一样}。","Shíjiān fǎngfú tíngzhùle yíyàng.","Thời gian như thể ngừng lại."]]}],
cmp:[
 {vn:"Hình như tôi đã gặp anh ấy ở đâu đó.", zh:"我[似乎]在哪儿见过他。", py:"Wǒ sìhū zài nǎr jiànguo tā.", ok:true, why:"Đặt trước cụm 在哪儿."}],
ex:[
 ["天黑下来了，[似乎]要下雨。","Tiān hēi xialai le, sìhū yào xià yǔ.","Trời tối sầm, hình như sắp mưa."],
 ["看到这张照片，他[仿佛]又看见了奶奶。","Kàndào zhè zhāng zhàopiàn, tā fǎngfú yòu kànjiànle nǎinai.","Thấy tấm ảnh, anh ấy như lại nhìn thấy bà."],
 ["湖面很平静，[仿佛]一面镜子。","Húmiàn hěn píngjìng, fǎngfú yí miàn jìngzi.","Mặt hồ phẳng lặng như một tấm gương."]],
errs:[
 {bad:"似乎他吗不高兴？", good:"他似乎不高兴。", why:"似乎 là phỏng đoán trong câu kể."},
 {bad:"他不高兴似乎。", good:"他似乎不高兴。", why:"Phó từ đứng trước vị ngữ."},
 {bad:"他似乎一定很忙。", good:"他似乎很忙。", why:"似乎 (hình như) không đi với 一定."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Dường như anh ấy không vui.", o:["他似乎不高兴。","他不高兴似乎。"], a:0, why:"S + 似乎 + Adj."},
  {q:"听着这首歌，我＿回到了小时候。", vi:"Nghe bài hát này, tôi như trở về thời bé.", o:["仿佛","一旦","毕竟"], a:0, why:"Cảm giác như thể."},
  {q:"“似乎” gần nghĩa nhất với:", vi:"Chọn từ gần nghĩa.", o:["好像","一定","已经"], a:0, why:"Đều là “hình như”."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个问题","似乎","很","简单"], a:"这个问题似乎很简单。", vi:"Vấn đề này có vẻ đơn giản."},
  {w:["时间","仿佛","停住了","一样"], a:"时间仿佛停住了一样。", vi:"Thời gian như thể ngừng lại."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hình như tôi đã gặp anh ấy ở đâu đó (dùng 似乎).", a:"我似乎在哪儿见过他。/ 我似乎在哪里见过他。"}]}],
rel:["二19","三35","新5.18"]
};
