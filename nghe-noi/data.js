// 听说盒 — dữ liệu hội thoại. Mỗi bài: sach (mã giáo trình), bai, ten, doan[].
// Mỗi đoạn: ten, vai {A:[tên Trung, tên Việt], B:[…]}, cau [[vai, hán, pinyin, nghĩa]],
//   hoi (câu hỏi nghe hiểu: q hán, vi nghĩa đề, opts, dap = vị trí đáp án đúng),
//   viet (chỉ số câu dùng cho nghe – viết; đáp án nhiều cách "A / B", phần có thể bỏ trong （）).
window.NN_BAI=window.NN_BAI||[];
NN_BAI.push({
  id:"301/bai-11", sach:"301", sachTen:"汉语会话301句", bai:11, ten:"我要买橘子", tenVi:"Tôi muốn mua quýt", hsk:"1–3", th:"mua-sam",  // cấp theo từ vựng đề cương thi HSK 2025 (斤 毛 种 尝 别的 = HSK 3; 橘子 = HSK 5)
  doan:[
    {ten:"大卫买苹果", tenVi:"Đại Vệ mua táo",
     vai:{A:["售货员","Người bán hàng"],B:["大卫","Đại Vệ"]},
     cau:[
      ["A","您要什么？","Nín yào shénme?","Ông/bà cần gì?"],
      ["B","我要苹果。多少钱一斤？","Wǒ yào píngguǒ. Duōshao qián yì jīn?","Tôi cần táo. Bao nhiêu tiền một cân?"],
      ["A","两块五（毛）。","Liǎng kuài wǔ (máo).","Hai đồng năm (hào)."],
      ["B","那种呢？","Nà zhǒng ne?","Loại kia thì sao?"],
      ["A","一块三。","Yí kuài sān.","Một đồng ba (hào)."],
      ["B","要这种吧。","Yào zhè zhǒng ba.","Lấy loại này vậy."],
      ["A","要多少？","Yào duōshao?","Cần bao nhiêu?"],
      ["B","两斤。","Liǎng jīn.","Hai cân."],
      ["A","还要别的吗？","Hái yào biéde ma?","Còn cần gì khác không?"],
      ["B","不要了。","Bú yào le.","Không cần nữa."]
     ],
     hoi:[
      {q:"大卫要买什么？",vi:"Đại Vệ muốn mua gì?",opts:["苹果","橘子","香蕉"],dap:0},
      {q:"那种苹果多少钱一斤？",vi:"Loại táo kia bao nhiêu tiền một cân?",opts:["两块五","一块三","两块八"],dap:1},
      {q:"大卫要多少？",vi:"Đại Vệ lấy bao nhiêu?",opts:["一斤","两斤","四个"],dap:1}
     ],
     viet:[0,1,6,8]},
    {ten:"玛丽买橘子", tenVi:"Mary mua quýt",
     vai:{A:["售货员","Người bán hàng"],B:["玛丽","Mary"]},
     cau:[
      ["A","您要买什么？","Nín yào mǎi shénme?","Ông/bà muốn mua gì?"],
      ["B","我要买橘子。一斤多少钱？","Wǒ yào mǎi júzi. Yì jīn duōshao qián?","Tôi muốn mua quýt. Một cân bao nhiêu tiền?"],
      ["A","两块八。","Liǎng kuài bā.","Hai đồng tám."],
      ["B","太贵了。","Tài guì le.","Đắt quá."],
      ["A","那种便宜。","Nà zhǒng piányi.","Loại kia rẻ."],
      ["B","那种好不好？","Nà zhǒng hǎo bu hǎo?","Loại đó có ngon không?"],
      ["A","您尝尝。","Nín chángchang.","Mời ông/bà nếm thử."],
      ["B","好，我要四个。","Hǎo, wǒ yào sì ge.","Được, tôi lấy bốn quả."],
      ["A","这是一斤半，三块七毛五分。还买别的吗？","Zhè shì yì jīn bàn, sān kuài qī máo wǔ fēn. Hái mǎi biéde ma?","Đây là một cân rưỡi, ba đồng bảy hào năm xu. Còn mua gì khác không?"],
      ["B","不要了。","Bú yào le.","Không cần nữa."]
     ],
     hoi:[
      {q:"玛丽要买什么？",vi:"Mary muốn mua gì?",opts:["苹果","橘子","别的"],dap:1},
      {q:"两块八一斤的橘子，玛丽说什么？",vi:"Quýt hai đồng tám một cân, Mary nói gì?",opts:["很便宜","太贵了","我要四个"],dap:1},
      {q:"玛丽要了几个橘子？",vi:"Mary lấy mấy quả quýt?",opts:["两个","四个","十个"],dap:1}
     ],
     viet:[1,3,5,7]}
  ]
});

NN_BAI.push({
  id:"301/bai-12", sach:"301", sachTen:"汉语会话301句", bai:12, ten:"我想买件毛衣", tenVi:"Tôi muốn mua áo len", hsk:"1–3", th:"mua-sam",
  doan:[
    {ten:"什么时候去买？", tenVi:"Khi nào đi mua?",
     vai:{A:["大卫","Đại Vệ"], B:["玛丽","Mary"]},
     cau:[
      ["A","天冷了。我想买件毛衣。","Tiān lěng le. Wǒ xiǎng mǎi jiàn máoyī.","Trời lạnh rồi. Tôi muốn mua một chiếc áo len."],
      ["B","我也要买东西。我们什么时候去？","Wǒ yě yào mǎi dōngxi. Wǒmen shénme shíhou qù?","Tôi cũng muốn mua đồ. Chúng ta đi khi nào?"],
      ["A","星期天去，怎么样？","Xīngqītiān qù, zěnmeyàng?","Chủ nhật đi, thế nào?"],
      ["B","星期天人太多。","Xīngqītiān rén tài duō.","Chủ nhật đông người lắm."],
      ["A","那明天下午去吧。","Nà míngtiān xiàwǔ qù ba.","Vậy chiều mai đi nhé."]
     ],
     hoi:[
      {q:"大卫要买什么？",vi:"Đại Vệ muốn mua gì?",opts:["毛衣","大衣","裙子"],dap:0},
      {q:"为什么不星期天去？",vi:"Tại sao không đi vào chủ nhật?",opts:["天气不好","钱不够","人太多"],dap:2},
      {q:"他们什么时候去买东西？",vi:"Họ đi mua đồ khi nào?",opts:["今天下午","明天下午","星期天"],dap:1}
     ],
     viet:[0,2,4]},
    {ten:"买毛衣", tenVi:"Mua áo len",
     vai:{A:["售货员","Người bán hàng"], B:["大卫/玛丽","Đại Vệ / Mary"]},
     cau:[
      ["B","小姐，我看看那件毛衣。","Xiǎojie, wǒ kànkan nà jiàn máoyī.","Cô ơi, cho tôi xem chiếc áo len kia."],
      ["A","好。","Hǎo.","Dạ được ạ."],
      ["B","我可以试试吗？","Wǒ kěyǐ shìshi ma?","Tôi có thể mặc thử không?"],
      ["A","您试一下儿吧。","Nín shì yíxiàr ba.","Anh mặc thử một chút xem sao."],
      ["B","这件太短了。","Zhè jiàn tài duǎn le.","Chiếc này ngắn quá rồi."],
      ["A","您试试那件。","Nín shìshi nà jiàn.","Anh thử chiếc kia xem."],
      ["B","好，我再试一下儿。","Hǎo, wǒ zài shì yíxiàr.","Được, để tôi thử lại xem."],
      ["B","这件不大也不小。","Zhè jiàn bú dà yě bù xiǎo.","Chiếc này không to cũng không nhỏ."],
      ["B","好极了，我就买这件。","Hǎo jí le, wǒ jiù mǎi zhè jiàn.","Tốt quá rồi, tôi mua chiếc này."]
     ],
     hoi:[
      {q:"第一件毛衣怎么了？",vi:"Chiếc áo len đầu tiên thế nào?",opts:["太短了","太长了","太贵了"],dap:0},
      {q:"玛丽说第二件怎么样？",vi:"Mary nói chiếc thứ hai thế nào?",opts:["太大了","不大也不小","太小了"],dap:1},
      {q:"大卫最后买了哪件？",vi:"Cuối cùng Đại Vệ mua chiếc nào?",opts:["第一件","第二件","两件都买了"],dap:1}
     ],
     viet:[0,2,4,8]}
  ]
});

NN_BAI.push({
  id:"301/bai-13", sach:"301", sachTen:"汉语会话301句", bai:13, ten:"要换车", tenVi:"Phải chuyển tuyến xe", hsk:"1–3", th:"di-lai",
  doan:[
    {ten:"乘公共汽车", tenVi:"Đi xe buýt",
     vai:{A:["售票员/乘客","Nhân viên xe / Hành khách"], B:["留学生","Lưu học sinh"]},
     cau:[
      ["B","请问，这路车到天安门吗？","Qǐng wèn, zhè lù chē dào Tiān'ānmén ma?","Xin hỏi, tuyến xe này có đến Thiên An Môn không?"],
      ["A","到。上车吧。","Dào. Shàng chē ba.","Có. Lên xe đi."],
      ["B","买两张票。多少钱一张？","Mǎi liǎng zhāng piào. Duōshao qián yì zhāng?","Mua hai vé. Một vé bao nhiêu tiền?"],
      ["A","五毛。","Wǔ máo.","Năm hào."],
      ["B","给你两块钱。","Gěi nǐ liǎng kuài qián.","Gửi chị hai đồng."],
      ["A","找你一块。","Zhǎo nǐ yí kuài.","Trả lại anh một đồng."],
      ["B","请问，到天安门还有几站？","Qǐng wèn, dào Tiān'ānmén hái yǒu jǐ zhàn?","Xin hỏi, đến Thiên An Môn còn mấy trạm nữa?"],
      ["A","三站。你们会说汉语？","Sān zhàn. Nǐmen huì shuō Hànyǔ?","Ba trạm. Các bạn biết nói tiếng Hoa à?"],
      ["B","会说一点儿。","Huì shuō yìdiǎnr.","Biết nói một chút."],
      ["B","我说汉语，你懂吗？","Wǒ shuō Hànyǔ, nǐ dǒng ma?","Tôi nói tiếng Hoa, anh có hiểu không?"],
      ["A","懂。你们是哪国人？","Dǒng. Nǐmen shì nǎ guó rén?","Hiểu. Các bạn là người nước nào?"],
      ["B","我是法国人。","Wǒ shì Fǎguó rén.","Tôi là người Pháp."],
      ["B","我是美国人。","Wǒ shì Měiguó rén.","Tôi là người Mỹ."],
      ["A","天安门到了。请下车吧。","Tiān'ānmén dào le. Qǐng xià chē ba.","Đến Thiên An Môn rồi. Mời xuống xe."]
     ],
     hoi:[
      {q:"他们要去哪儿？",vi:"Họ muốn đến đâu?",opts:["天安门","颐和园","北京大学"],dap:0},
      {q:"一张票多少钱？",vi:"Một vé bao nhiêu tiền?",opts:["两毛","五毛","一块"],dap:1},
      {q:"大卫是哪国人？",vi:"Đại Vệ là người nước nào?",opts:["法国人","美国人","中国人"],dap:0}
     ],
     viet:[0,2,6,8]},
    {ten:"买车票换车", tenVi:"Mua vé và chuyển tuyến xe",
     vai:{A:["售票员","Nhân viên bán vé"], B:["大卫","Đại Vệ"]},
     cau:[
      ["B","劳驾，我买一张票。","Láojià, wǒ mǎi yì zhāng piào.","Làm phiền, tôi mua một vé."],
      ["A","哪儿上的？","Nǎr shàng de?","Lên xe ở đâu?"],
      ["B","前一站。","Qián yí zhàn.","Trạm phía trước."],
      ["A","去哪儿？","Qù nǎr?","Đi đâu?"],
      ["B","去语言文化大学。要换车吗？","Qù Yǔyán Wénhuà Dàxué. Yào huàn chē ma?","Đến Đại học Ngôn ngữ Văn hóa. Có phải đổi tuyến xe không?"],
      ["A","要换车。","Yào huàn chē.","Phải đổi tuyến xe."],
      ["B","在哪儿换车？","Zài nǎr huàn chē?","Đổi tuyến xe ở đâu?"],
      ["A","北京师范大学。","Běijīng Shīfàn Dàxué.","Đại học Sư phạm Bắc Kinh."],
      ["B","换几路车？","Huàn jǐ lù chē?","Đổi tuyến xe số mấy?"],
      ["A","换331路。","Huàn sānsānyāo lù.","Đổi tuyến 331."],
      ["B","谢谢！","Xièxie!","Cảm ơn!"],
      ["A","不谢。","Bú xiè.","Không có gì."]
     ],
     hoi:[
      {q:"大卫要去哪里？",vi:"Đại Vệ muốn đến đâu?",opts:["北京大学","语言文化大学","北京师范大学"],dap:1},
      {q:"在哪儿换车？",vi:"Đổi xe ở đâu?",opts:["语言文化大学","北京大学","北京师范大学"],dap:2},
      {q:"换几路车？",vi:"Đổi tuyến xe số mấy?",opts:["311路","321路","331路"],dap:2}
     ],
     viet:[0,4,6,8]}
  ]
});
