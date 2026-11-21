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

NN_BAI.push({
  id:"nn/chao-hoi", sach:"nn", sachTen:"Hội thoại", bai:1,
  ten:"好久不见", tenVi:"Lâu rồi không gặp", hsk:"2–3", th:"chao-hoi",
  doan:[{
    ten:"校园相遇", tenVi:"Gặp nhau ở trường",
    vai:{A:["玛丽","Mary"], B:["大卫","Đại Vệ"]},
    cau:[
      ["A","大卫！好久不见。最近怎么样？","Dàwèi! Hǎo jiǔ bú jiàn. Zuìjìn zěnmeyàng?","Đại Vệ! Lâu rồi không gặp. Dạo này thế nào?"],
      ["B","玛丽！我很好，你呢？","Mǎlì! Wǒ hěn hǎo, nǐ ne?","Mary! Tôi khỏe, còn bạn?"],
      ["A","我也不错。你去哪儿？","Wǒ yě búcuò. Nǐ qù nǎr?","Tôi cũng ổn. Bạn đi đâu vậy?"],
      ["B","我去图书馆。你有课吗？","Wǒ qù túshūguǎn. Nǐ yǒu kè ma?","Tôi đến thư viện. Bạn có lớp không?"],
      ["A","有，我现在去上课。一会儿见！","Yǒu, wǒ xiànzài qù shàng kè. Yíhuìr jiàn!","Có, tôi đang đi lên lớp. Lát nữa gặp nhé!"],
      ["B","好，一会儿见！","Hǎo, yíhuìr jiàn!","Được, lát nữa gặp!"]
    ],
    hoi:[
      {q:"玛丽要去做什么？",vi:"Mary chuẩn bị đi đâu?",opts:["去图书馆","去上课","去吃饭"],dap:1},
      {q:"大卫要去哪儿？",vi:"Đại Vệ muốn đi đâu?",opts:["图书馆","教室","食堂"],dap:0},
      {q:"他们怎么告别？",vi:"Họ chia tay bằng câu gì?",opts:["明天见","一会儿见","再见"],dap:1}
    ],
    viet:[1,3,5]
  }]
});

NN_BAI.push({
  id:"nn/lam-quen", sach:"nn", sachTen:"Hội thoại", bai:2,
  ten:"认识你很高兴", tenVi:"Rất vui được quen bạn", hsk:"1–3", th:"lam-quen",
  doan:[{
    ten:"初次见面", tenVi:"Gặp mặt lần đầu",
    vai:{A:["陈明","Trần Minh"], B:["大卫","Đại Vệ"]},
    cau:[
      ["A","你好！我叫陈明，你叫什么名字？","Nǐ hǎo! Wǒ jiào Chén Míng, nǐ jiào shénme míngzi?","Xin chào! Tôi tên là Trần Minh, bạn tên là gì?"],
      ["B","你好，陈明！我叫大卫。你是哪国人？","Nǐ hǎo, Chén Míng! Wǒ jiào Dàwèi. Nǐ shì nǎ guó rén?","Xin chào, Trần Minh! Tôi tên là Đại Vệ. Bạn là người nước nào?"],
      ["A","我是越南人。你呢？","Wǒ shì Yuènán rén. Nǐ ne?","Tôi là người Việt Nam. Còn bạn?"],
      ["B","我是法国人。你来中国多久了？","Wǒ shì Fǎguó rén. Nǐ lái Zhōngguó duō jiǔ le?","Tôi là người Pháp. Bạn đến Trung Quốc bao lâu rồi?"],
      ["A","我来了两个月了。你呢？","Wǒ lái le liǎng ge yuè le. Nǐ ne?","Tôi đến được hai tháng rồi. Còn bạn?"],
      ["B","我来了半年了。有问题可以问我！","Wǒ lái le bàn nián le. Yǒu wèntí kěyǐ wèn wǒ!","Tôi đến được nửa năm rồi. Có câu hỏi gì cứ hỏi tôi nhé!"],
      ["A","太好了！认识你，很高兴！","Tài hǎo le! Rènshi nǐ, hěn gāoxìng!","Tốt quá! Rất vui được quen bạn!"],
      ["B","我也是。欢迎你来这里！","Wǒ yě shì. Huānyíng nǐ lái zhèlǐ!","Tôi cũng vậy. Chào mừng bạn đến đây!"]
    ],
    hoi:[
      {q:"陈明是哪国人？",vi:"Trần Minh là người nước nào?",opts:["中国人","法国人","越南人"],dap:2},
      {q:"大卫来中国多久了？",vi:"Đại Vệ đến Trung Quốc bao lâu rồi?",opts:["两个月","半年","一年"],dap:1},
      {q:"他们认识以后感觉怎么样？",vi:"Sau khi quen nhau họ cảm thấy thế nào?",opts:["很高兴","有点儿紧张","没感觉"],dap:0}
    ],
    viet:[1,3,5,7]
  }]
});

NN_BAI.push({
  id:"nn/an-uong", sach:"nn", sachTen:"Hội thoại", bai:3,
  ten:"来两碗面条", tenVi:"Cho hai bát mì", hsk:"2–3", th:"an-uong",
  doan:[{
    ten:"在餐厅点菜", tenVi:"Gọi món ở nhà hàng",
    vai:{A:["服务员","Phục vụ"], B:["大卫","Đại Vệ"]},
    cau:[
      ["B","服务员！","Fúwùyuán!","Phục vụ ơi!"],
      ["A","来了！请问要点什么？","Lái le! Qǐng wèn yào diǎn shénme?","Đến ngay! Quý khách muốn gọi món gì?"],
      ["B","来两碗面条，一盘饺子。","Lái liǎng wǎn miàntiáo, yì pán jiǎozi.","Cho hai bát mì, một đĩa sủi cảo."],
      ["A","好的。喝什么？","Hǎo de. Hē shénme?","Vâng ạ. Quý khách uống gì?"],
      ["B","两杯茶，谢谢。有辣的菜吗？","Liǎng bēi chá, xièxie. Yǒu là de cài ma?","Hai cốc trà, cảm ơn. Có món cay không?"],
      ["A","有，我们有几道辣菜，都很好吃。","Yǒu, wǒmen yǒu jǐ dào là cài, dōu hěn hǎo chī.","Có ạ, chúng tôi có vài món cay, đều rất ngon."],
      ["B","好，再加一份辣菜，谢谢。","Hǎo, zài jiā yí fèn là cài, xièxie.","Được, thêm một phần món cay, cảm ơn."],
      ["A","好的，请等一下。","Hǎo de, qǐng děng yíxià.","Được ạ, xin chờ một lát."]
    ],
    hoi:[
      {q:"他们点了什么面食？",vi:"Họ gọi loại mì gì?",opts:["面条","米饭","包子"],dap:0},
      {q:"他们喝什么？",vi:"Họ uống gì?",opts:["茶","咖啡","水"],dap:0},
      {q:"他们还要了什么？",vi:"Họ còn gọi thêm món gì?",opts:["辣的菜","甜点","汤"],dap:0}
    ],
    viet:[0,2,4,6]
  }]
});

NN_BAI.push({
  id:"nn/hoc-tap", sach:"nn", sachTen:"Hội thoại", bai:4,
  ten:"这道题我不会做", tenVi:"Câu này tôi không biết làm", hsk:"2–3", th:"hoc-tap",
  doan:[{
    ten:"一起做作业", tenVi:"Cùng làm bài tập",
    vai:{A:["玛丽","Mary"], B:["大卫","Đại Vệ"]},
    cau:[
      ["A","大卫，今天的作业你做完了吗？","Dàwèi, jīntiān de zuòyè nǐ zuò wán le ma?","Đại Vệ, bài tập hôm nay bạn làm xong chưa?"],
      ["B","还没有。有一道题我不会做。","Hái méiyǒu. Yǒu yí dào tí wǒ bú huì zuò.","Chưa xong. Có một câu tôi không biết làm."],
      ["A","哪道？我来看看。","Nǎ dào? Wǒ lái kànkan.","Câu nào? Để tôi xem."],
      ["B","第五题。我看了很多遍，还是不懂。","Dì wǔ tí. Wǒ kàn le hěn duō biàn, háishi bù dǒng.","Câu số 5. Tôi đọc nhiều lần rồi mà vẫn không hiểu."],
      ["A","这个我懂。你听我说……","Zhège wǒ dǒng. Nǐ tīng wǒ shuō……","Cái này tôi hiểu. Bạn nghe tôi nói nhé..."],
      ["B","哦，明白了！原来是这样！谢谢你！","Ò, míngbai le! Yuánlái shì zhèyàng! Xièxie nǐ!","À, hiểu rồi! Hóa ra là vậy! Cảm ơn bạn!"],
      ["A","不客气。不懂的话，多问问老师。","Bú kèqi. Bù dǒng de huà, duō wènwen lǎoshī.","Không có gì. Không hiểu thì cứ hỏi thầy cô thêm nhé."]
    ],
    hoi:[
      {q:"大卫做完作业了吗？",vi:"Đại Vệ làm xong bài tập chưa?",opts:["做完了","没做完","没做"],dap:1},
      {q:"哪道题他不会做？",vi:"Câu nào anh ấy không biết làm?",opts:["第三题","第四题","第五题"],dap:2},
      {q:"最后大卫明白了吗？",vi:"Cuối cùng Đại Vệ có hiểu không?",opts:["明白了","还是不懂","去问了老师"],dap:0}
    ],
    viet:[1,3,5]
  }]
});

NN_BAI.push({
  id:"nn/kham-benh", sach:"nn", sachTen:"Hội thoại", bai:5,
  ten:"我头很痛", tenVi:"Tôi bị đau đầu", hsk:"2–3", th:"kham-benh",
  doan:[{
    ten:"在医务室", tenVi:"Ở phòng y tế",
    vai:{A:["医生","Bác sĩ"], B:["大卫","Đại Vệ"]},
    cau:[
      ["A","你好！请坐。哪里不舒服？","Nǐ hǎo! Qǐng zuò. Nǎlǐ bù shūfu?","Xin chào! Mời ngồi. Bạn cảm thấy khó chịu ở đâu?"],
      ["B","医生，我头很痛，还有点儿发烧。","Yīshēng, wǒ tóu hěn tòng, hái yǒudiǎnr fāshāo.","Bác sĩ, tôi bị đau đầu, lại còn hơi sốt nữa."],
      ["A","从什么时候开始的？","Cóng shénme shíhou kāishǐ de?","Bắt đầu từ khi nào vậy?"],
      ["B","从昨天晚上开始。今天更厉害了。","Cóng zuótiān wǎnshang kāishǐ. Jīntiān gèng lìhài le.","Từ tối qua. Hôm nay nặng hơn rồi."],
      ["A","你感冒了。要多休息，多喝水。","Nǐ gǎnmào le. Yào duō xiūxi, duō hē shuǐ.","Bạn bị cảm rồi. Cần nghỉ ngơi nhiều, uống nhiều nước."],
      ["B","需要吃药吗？","Xūyào chī yào ma?","Có cần uống thuốc không ạ?"],
      ["A","需要。一天三次，每次两片。","Xūyào. Yì tiān sān cì, měi cì liǎng piàn.","Cần. Mỗi ngày 3 lần, mỗi lần 2 viên."],
      ["B","好的，谢谢医生。","Hǎo de, xièxie yīshēng.","Được ạ, cảm ơn bác sĩ."]
    ],
    hoi:[
      {q:"大卫哪里不舒服？",vi:"Đại Vệ khó chịu ở đâu?",opts:["头痛，有点儿发烧","肚子痛","眼睛不舒服"],dap:0},
      {q:"从什么时候开始不舒服？",vi:"Bắt đầu không khỏe từ khi nào?",opts:["今天早上","昨天晚上","上个星期"],dap:1},
      {q:"医生说每次吃几片药？",vi:"Bác sĩ nói mỗi lần uống mấy viên?",opts:["每次一片","每次两片","每次三片"],dap:1}
    ],
    viet:[1,3,5,7]
  }]
});

/* ===== 汉语会话301句 Bài 14–20 (lời thoại lấy từ bài giảng 301 của cô; thêm 21/11/2026) =====
   Vai có phần tử thứ 3 "nam"/"nu" = giới tính để tools/gen_audio_nn.py chọn giọng.
   Câu có phần tử thứ 5 = cách máy đọc (số điện thoại…), chữ hiển thị vẫn là phần tử thứ 2. */
NN_BAI.push({
  id:"301/bai-14", sach:"301", sachTen:"汉语会话301句", bai:14, ten:"我要去换钱", tenVi:"Tôi phải đi đổi tiền", hsk:"1–3", th:"lam-thu-tuc",  // 人民币 = HSK 5
  doan:[
    {ten:"在饭店换钱", tenVi:"Đổi tiền ở khách sạn",
     vai:{A:["营业员","Nhân viên","nu"],B:["玛丽","Mary","nu"],C:["大卫","Đại Vệ","nam"]},
     cau:[
      ["B","钱都花了，我没钱了。我要去换钱。","Qián dōu huā le, wǒ méi qián le. Wǒ yào qù huàn qián.","Tiền tiêu hết rồi, tôi hết tiền rồi. Tôi phải đi đổi tiền."],
      ["C","听说，饭店里可以换钱。","Tīngshuō, fàndiàn li kěyǐ huàn qián.","Nghe nói trong khách sạn có thể đổi tiền."],
      ["B","我们去问问吧。","Wǒmen qù wènwen ba.","Chúng ta đi hỏi thử xem."],
      ["B","请问，这儿能不能换钱？","Qǐng wèn, zhèr néng bu néng huàn qián?","Xin hỏi, ở đây có đổi tiền được không?"],
      ["A","能。您带的什么钱？","Néng. Nín dài de shénme qián?","Được. Chị mang theo tiền gì?"],
      ["B","美元。","Měiyuán.","Đô-la Mỹ."],
      ["A","换多少？","Huàn duōshao?","Đổi bao nhiêu?"],
      ["B","五百美元。一美元换多少人民币？","Wǔbǎi Měiyuán. Yì Měiyuán huàn duōshao rénmínbì?","Năm trăm đô-la Mỹ. Một đô-la đổi được bao nhiêu nhân dân tệ?"],
      ["A","八块二毛七。请您写一下儿钱数。再写一下儿名字。","Bā kuài èr máo qī. Qǐng nín xiě yíxiàr qián shù. Zài xiě yíxiàr míngzi.","Tám đồng hai hào bảy xu. Xin chị viết số tiền. Rồi viết thêm tên."],
      ["B","这样写，对不对？","Zhèyàng xiě, duì bu duì?","Viết thế này, có đúng không?"],
      ["A","对。给您钱，请数一数。","Duì. Gěi nín qián, qǐng shǔ yi shǔ.","Đúng rồi. Gửi chị tiền, xin chị đếm lại."],
      ["B","谢谢！","Xièxie!","Cảm ơn!"],
      ["C","时间不早了。我们快走吧！","Shíjiān bù zǎo le. Wǒmen kuài zǒu ba!","Muộn rồi. Chúng ta đi nhanh lên!"]
     ],
     hoi:[
      {q:"玛丽为什么要去换钱？",vi:"Vì sao Mary phải đi đổi tiền?",opts:["钱都花了","要去旅行","要买毛衣"],dap:0},
      {q:"玛丽换了多少美元？",vi:"Mary đổi bao nhiêu đô-la Mỹ?",opts:["五十美元","五百美元","八百美元"],dap:1},
      {q:"一美元换多少人民币？",vi:"Một đô-la đổi được bao nhiêu nhân dân tệ?",opts:["八块二毛七","八块七毛二","七块二毛八"],dap:0}
     ],
     viet:[3,6,9,12]}
  ]
});

NN_BAI.push({
  id:"301/bai-15", sach:"301", sachTen:"汉语会话301句", bai:15, ten:"我要打国际电话", tenVi:"Tôi muốn gọi điện thoại quốc tế", hsk:"1–5", th:"lam-thu-tuc",  // 纪念 邮票 套 挑 地区 小姐 = HSK 5
  doan:[
    {ten:"买纪念邮票", tenVi:"Mua tem kỷ niệm ở bưu điện",
     vai:{A:["营业员","Nhân viên bưu điện","nu"],B:["和子","Hòa Tử","nu"]},
     cau:[
      ["B","有纪念邮票吗？","Yǒu jìniàn yóupiào ma?","Có tem kỷ niệm không ạ?"],
      ["A","有，这是新出的。","Yǒu, zhè shì xīn chū de.","Có, đây là loại mới phát hành."],
      ["B","好。买两套。还有好看的吗？","Hǎo. Mǎi liǎng tào. Hái yǒu hǎokàn de ma?","Được. Tôi mua hai bộ. Còn loại nào đẹp nữa không?"],
      ["A","你看看，这几种怎么样？","Nǐ kànkan, zhè jǐ zhǒng zěnmeyàng?","Chị xem thử, mấy loại này thế nào?"],
      ["B","请你帮我挑挑。","Qǐng nǐ bāng wǒ tiāotiao.","Nhờ chị chọn giúp tôi."],
      ["A","我看这四种都很好。","Wǒ kàn zhè sì zhǒng dōu hěn hǎo.","Tôi thấy bốn loại này đều đẹp."],
      ["B","那一样买一套吧。这儿能打国际电话吗？","Nà yí yàng mǎi yí tào ba. Zhèr néng dǎ guójì diànhuà ma?","Vậy mỗi kiểu mua một bộ. Ở đây gọi điện thoại quốc tế được không?"],
      ["A","能，在那儿。买电话卡吗？","Néng, zài nàr. Mǎi diànhuàkǎ ma?","Được, ở đằng kia. Chị có mua thẻ điện thoại không?"],
      ["B","不，我有。","Bù, wǒ yǒu.","Không, tôi có rồi."]
     ],
     hoi:[
      {q:"新出的纪念邮票，和子买了几套？",vi:"Bộ tem kỷ niệm mới phát hành, Hòa Tử mua mấy bộ?",opts:["一套","两套","四套"],dap:1},
      {q:"营业员觉得那四种邮票怎么样？",vi:"Nhân viên thấy bốn loại tem đó thế nào?",opts:["都很好","都不好看","太贵了"],dap:0},
      {q:"和子买电话卡吗？",vi:"Hòa Tử có mua thẻ điện thoại không?",opts:["买两张","不买，她有","买一张"],dap:1}
     ],
     viet:[0,3,4,5]},
    {ten:"打国际电话", tenVi:"Gọi điện thoại quốc tế",
     vai:{A:["营业员","Nhân viên bưu điện","nu"],B:["和子","Hòa Tử","nu"]},
     cau:[
      ["B","小姐，我要打国际电话。","Xiǎojie, wǒ yào dǎ guójì diànhuà.","Chị ơi, tôi muốn gọi điện thoại quốc tế."],
      ["A","你打到哪儿？","Nǐ dǎ dào nǎr?","Chị gọi đi đâu?"],
      ["B","东京。我的电话号码是03-390-78160。","Dōngjīng. Wǒ de diànhuà hàomǎ shì líng sān - sān jiǔ líng - qī bā yāo liù líng.","Tô-ky-ô. Số điện thoại của tôi là 03-390-78160.","东京。我的电话号码是零三，三九零，七八幺六零。"],
      ["A","还要拨地区号。","Hái yào bō dìqū hào.","Còn phải quay mã vùng nữa."],
      ["B","东京的地区号是多少？","Dōngjīng de dìqū hào shì duōshao?","Mã vùng của Tô-ky-ô là bao nhiêu?"],
      ["A","不拨03，拨00813。","Bù bō líng sān, bō líng líng bā yāo sān.","Không quay 03, quay 00813.","不拨零三，拨零零八幺三。"],
      ["A","电话打通了吗？","Diànhuà dǎ tōng le ma?","Điện thoại gọi được chưa?"],
      ["B","谢谢！打通了。","Xièxie! Dǎ tōng le.","Cảm ơn chị! Gọi được rồi."]
     ],
     hoi:[
      {q:"和子要给哪儿打电话？",vi:"Hòa Tử muốn gọi điện đi đâu?",opts:["北京","上海","东京"],dap:2},
      {q:"打国际电话还要拨什么？",vi:"Gọi điện quốc tế còn phải quay gì nữa?",opts:["地区号","房间号","手机号"],dap:0},
      {q:"最后电话打通了吗？",vi:"Cuối cùng điện thoại có gọi được không?",opts:["打通了","没打通","没打"],dap:0}
     ],
     viet:[0,1,3,7]}
  ]
});

NN_BAI.push({
  id:"301/bai-16", sach:"301", sachTen:"汉语会话301句", bai:16, ten:"你看过京剧吗？", tenVi:"Bạn đã từng xem Kinh kịch chưa?", hsk:"1–4", th:"vui-choi",
  doan:[
    {ten:"去看京剧", tenVi:"Đi xem Kinh kịch",
     vai:{A:["玛丽","Mary","nu"],B:["大卫","Đại Vệ","nam"]},
     cau:[
      ["A","你看过京剧吗？","Nǐ kànguo jīngjù ma?","Bạn xem Kinh kịch bao giờ chưa?"],
      ["B","没看过。","Méi kànguo.","Chưa xem bao giờ."],
      ["A","听说很有意思。","Tīngshuō hěn yǒuyìsi.","Nghe nói hay lắm."],
      ["B","我很想看，你呢？","Wǒ hěn xiǎng kàn, nǐ ne?","Mình rất muốn xem, còn bạn?"],
      ["A","我也很想看。你知道哪儿演吗？","Wǒ yě hěn xiǎng kàn. Nǐ zhīdao nǎr yǎn ma?","Mình cũng rất muốn xem. Bạn biết ở đâu diễn không?"],
      ["B","人民剧场常演。","Rénmín Jùchǎng cháng yǎn.","Rạp hát Nhân Dân thường diễn."],
      ["A","那我们星期六去看，好不好？","Nà wǒmen xīngqīliù qù kàn, hǎo bu hǎo?","Vậy thứ bảy chúng ta đi xem, được không?"],
      ["B","当然好。明天我去买票。","Dāngrán hǎo. Míngtiān wǒ qù mǎi piào.","Đương nhiên là được. Mai mình đi mua vé."],
      ["A","买到票以后告诉我。","Mǎidào piào yǐhòu gàosu wǒ.","Mua được vé thì bảo mình nhé."],
      ["B","好。","Hǎo.","Ừ."]
     ],
     hoi:[
      {q:"大卫看过京剧吗？",vi:"Đại Vệ đã từng xem Kinh kịch chưa?",opts:["看过","没看过","看过两次"],dap:1},
      {q:"哪儿常演京剧？",vi:"Ở đâu thường diễn Kinh kịch?",opts:["人民剧场","北京饭店","学校"],dap:0},
      {q:"他们打算什么时候去看？",vi:"Họ định khi nào đi xem?",opts:["星期六","星期天","明天"],dap:0}
     ],
     viet:[0,1,4,8]},
    {ten:"去吃烤鸭", tenVi:"Đi ăn vịt quay",
     vai:{A:["和子","Hòa Tử","nu"],B:["玛丽","Mary","nu"]},
     cau:[
      ["A","听说，烤鸭是北京的名菜。","Tīngshuō, kǎoyā shì Běijīng de míngcài.","Nghe nói vịt quay là món nổi tiếng của Bắc Kinh."],
      ["B","我还没吃过呢！","Wǒ hái méi chīguo ne!","Mình còn chưa ăn bao giờ đấy!"],
      ["A","我们应该去尝一尝。","Wǒmen yīnggāi qù cháng yi cháng.","Chúng ta nên đi ăn thử xem."],
      ["B","二十八号晚上我没事，你呢？","Èrshíbā hào wǎnshang wǒ méi shì, nǐ ne?","Tối ngày 28 mình rảnh, còn bạn?"],
      ["A","不行，有朋友来看我。","Bù xíng, yǒu péngyou lái kàn wǒ.","Không được, có bạn đến thăm mình."],
      ["B","三十号晚上怎么样？","Sānshí hào wǎnshang zěnmeyàng?","Tối ngày 30 thì sao?"],
      ["A","可以。","Kěyǐ.","Được."]
     ],
     hoi:[
      {q:"北京的名菜是什么？",vi:"Món nổi tiếng của Bắc Kinh là gì?",opts:["烤鸭","饺子","面条"],dap:0},
      {q:"二十八号晚上和子为什么不行？",vi:"Tối ngày 28 vì sao Hòa Tử không đi được?",opts:["要上课","有朋友来看她","要去看京剧"],dap:1},
      {q:"她们哪天晚上去吃烤鸭？",vi:"Họ đi ăn vịt quay vào tối ngày nào?",opts:["二十八号","二十九号","三十号"],dap:2}
     ],
     viet:[0,1,3,5]}
  ]
});

NN_BAI.push({
  id:"301/bai-17", sach:"301", sachTen:"汉语会话301句", bai:17, ten:"去动物园", tenVi:"Đi sở thú", hsk:"1–3", th:"vui-choi",  // 划 = HSK 5
  doan:[
    {ten:"去哪儿玩儿？", tenVi:"Đi đâu chơi?",
     vai:{A:["张丽英","Trương Lệ Anh","nu"],B:["和子","Hòa Tử","nu"]},
     cau:[
      ["A","这两天天气很好。我们出去玩儿玩儿吧。","Zhè liǎng tiān tiānqì hěn hǎo. Wǒmen chūqu wánr wanr ba.","Mấy hôm nay thời tiết rất tốt. Chúng ta ra ngoài chơi một chút nhé."],
      ["B","去哪儿玩儿好呢？","Qù nǎr wánr hǎo ne?","Đi đâu chơi cho vui đây?"],
      ["A","去北海公园，看看花儿，划划船，多好啊！","Qù Běihǎi Gōngyuán, kànkan huār, huáhua chuán, duō hǎo a!","Đi công viên Bắc Hải, ngắm hoa, chèo thuyền, thích biết bao!"],
      ["B","上星期我去过了，去别的地方吧。","Shàng xīngqī wǒ qùguo le, qù biéde dìfang ba.","Tuần trước tôi đi rồi, đi chỗ khác đi."],
      ["A","去动物园怎么样？","Qù dòngwùyuán zěnmeyàng?","Đi sở thú thì sao?"],
      ["B","行，还可以看看熊猫呢。","Xíng, hái kěyǐ kànkan xióngmāo ne.","Được, còn có thể xem gấu trúc nữa."],
      ["A","什么时候去？","Shénme shíhou qù?","Khi nào đi?"],
      ["B","星期天吧。","Xīngqītiān ba.","Chủ nhật nhé."]
     ],
     hoi:[
      {q:"张丽英先说去哪儿玩儿？",vi:"Lúc đầu Trương Lệ Anh rủ đi chơi ở đâu?",opts:["北海公园","动物园","长城"],dap:0},
      {q:"和子为什么不想去北海公园？",vi:"Vì sao Hòa Tử không muốn đi công viên Bắc Hải?",opts:["上星期去过了","太远了","人太多"],dap:0},
      {q:"在动物园，和子想看什么？",vi:"Ở sở thú, Hòa Tử muốn xem gì?",opts:["熊猫","花儿","船"],dap:0}
     ],
     viet:[1,4,6,7]},
    {ten:"去机场接朋友", tenVi:"Ra sân bay đón bạn",
     vai:{A:["和子","Hòa Tử","nu"],B:["刘京","Lưu Kinh","nam"]},
     cau:[
      ["A","你认识西川一郎吗？","Nǐ rènshi Xīchuān Yīláng ma?","Bạn có quen Nishikawa Ichirō không?"],
      ["B","当然认识。去年他在这儿学过汉语。","Dāngrán rènshi. Qùnián tā zài zhèr xuéguo Hànyǔ.","Đương nhiên quen. Năm ngoái anh ấy từng học tiếng Hán ở đây."],
      ["A","你知道吗？明天他来北京。","Nǐ zhīdao ma? Míngtiān tā lái Běijīng.","Bạn biết không? Ngày mai anh ấy đến Bắc Kinh."],
      ["B","不知道。他上午到还是下午到？","Bù zhīdao. Tā shàngwǔ dào háishi xiàwǔ dào?","Không biết. Anh ấy đến buổi sáng hay buổi chiều?"],
      ["A","下午两点，我去机场接他。","Xiàwǔ liǎng diǎn, wǒ qù jīchǎng jiē tā.","Hai giờ chiều, mình ra sân bay đón anh ấy."],
      ["B","明天下午没有课，我跟你一起去。","Míngtiān xiàwǔ méi yǒu kè, wǒ gēn nǐ yìqǐ qù.","Chiều mai không có tiết, mình đi cùng bạn."],
      ["A","好的。","Hǎo de.","Được."],
      ["B","怎么去？","Zěnme qù?","Đi bằng gì?"],
      ["A","坐车去，一点我去叫你。","Zuò chē qù, yì diǎn wǒ qù jiào nǐ.","Đi xe, một giờ mình qua gọi bạn."]
     ],
     hoi:[
      {q:"去年西川在这儿做什么？",vi:"Năm ngoái Nishikawa làm gì ở đây?",opts:["学过汉语","工作过","旅行过"],dap:0},
      {q:"西川明天什么时候到？",vi:"Ngày mai Nishikawa đến lúc nào?",opts:["上午十点","下午两点","下午一点"],dap:1},
      {q:"和子几点去叫刘京？",vi:"Mấy giờ Hòa Tử qua gọi Lưu Kinh?",opts:["一点","两点","三点"],dap:0}
     ],
     viet:[3,5,7,8]}
  ]
});

NN_BAI.push({
  id:"301/bai-18", sach:"301", sachTen:"汉语会话301句", bai:18, ten:"路上辛苦了", tenVi:"Đi đường vất vả rồi", hsk:"1–4", th:"don-tiep",  // 辛苦 感谢 = HSK 4; 贸易 = HSK 6
  doan:[
    {ten:"飞机晚点了", tenVi:"Máy bay trễ giờ (ở sân bay)",
     vai:{A:["服务员","Nhân viên sân bay","nu"],B:["和子","Hòa Tử","nu"]},
     cau:[
      ["B","从东京来的飞机到了吗？","Cóng Dōngjīng lái de fēijī dào le ma?","Máy bay từ Tô-ky-ô đã đến chưa?"],
      ["A","还没到。","Hái méi dào.","Vẫn chưa đến."],
      ["B","为什么？","Wèishénme?","Tại sao vậy?"],
      ["A","晚点了。飞机现在在上海。","Wǎn diǎn le. Fēijī xiànzài zài Shànghǎi.","Trễ giờ rồi. Máy bay bây giờ đang ở Thượng Hải."],
      ["B","起飞了吗？","Qǐfēi le ma?","Cất cánh chưa?"],
      ["A","快要起飞了。","Kuài yào qǐfēi le.","Sắp cất cánh rồi."],
      ["B","什么时候能到？","Shénme shíhou néng dào?","Khi nào thì đến được?"],
      ["A","大概三点半能到。","Dàgài sān diǎn bàn néng dào.","Khoảng ba giờ rưỡi thì đến."],
      ["B","刘京，我们先去喝点儿水，一会儿再来这儿吧。","Liú Jīng, wǒmen xiān qù hē diǎnr shuǐ, yíhuìr zài lái zhèr ba.","Lưu Kinh, chúng ta đi uống chút nước trước, lát nữa lại đến đây nhé."]
     ],
     hoi:[
      {q:"从东京来的飞机到了吗？",vi:"Máy bay từ Tô-ky-ô đến chưa?",opts:["到了","还没到","不来了"],dap:1},
      {q:"飞机现在在哪儿？",vi:"Máy bay bây giờ đang ở đâu?",opts:["东京","上海","北京"],dap:1},
      {q:"飞机大概什么时候能到？",vi:"Máy bay khoảng mấy giờ thì đến?",opts:["两点","三点","三点半"],dap:2}
     ],
     viet:[0,2,5,7]},
    {ten:"路上辛苦了", tenVi:"Đi đường vất vả rồi",
     vai:{A:["和子","Hòa Tử","nu"],B:["西川","Nishikawa","nam"],C:["刘京","Lưu Kinh","nam"]},
     cau:[
      ["A","你看，西川来了。","Nǐ kàn, Xīchuān lái le.","Bạn xem, Nishikawa đến rồi."],
      ["C","你好！路上辛苦了。","Nǐ hǎo! Lù shang xīnkǔ le.","Chào anh! Đi đường vất vả rồi."],
      ["B","你们好！刘京，你怎么知道我要来？","Nǐmen hǎo! Liú Jīng, nǐ zěnme zhīdao wǒ yào lái?","Chào các bạn! Lưu Kinh, sao bạn biết là tôi sẽ đến?"],
      ["C","是她告诉我的。","Shì tā gàosu wǒ de.","Chính cô ấy nói cho mình biết."],
      ["B","感谢你们来接我。","Gǎnxiè nǐmen lái jiē wǒ.","Cảm ơn các bạn đã đến đón tôi."],
      ["A","我们出去吧！","Wǒmen chūqu ba!","Chúng ta ra ngoài đi thôi!"],
      ["B","等一等，还有贸易公司的人接我呢。","Děng yi děng, hái yǒu màoyì gōngsī de rén jiē wǒ ne.","Đợi một chút, còn có người của công ty thương mại đón mình nữa."],
      ["C","好，我们在这儿等你。","Hǎo, wǒmen zài zhèr děng nǐ.","Được, chúng mình đợi bạn ở đây."]
     ],
     hoi:[
      {q:"刘京怎么知道西川要来？",vi:"Làm sao Lưu Kinh biết Nishikawa sẽ đến?",opts:["和子告诉他的","西川告诉他的","公司告诉他的"],dap:0},
      {q:"见到西川，刘京先说什么？",vi:"Gặp Nishikawa, Lưu Kinh nói câu gì trước?",opts:["路上辛苦了","欢迎你","好久不见"],dap:0},
      {q:"西川为什么让他们等一等？",vi:"Vì sao Nishikawa bảo họ đợi một chút?",opts:["他要买东西","还有贸易公司的人接他","飞机晚点了"],dap:1}
     ],
     viet:[1,3,4,7]}
  ]
});

NN_BAI.push({
  id:"301/bai-19", sach:"301", sachTen:"汉语会话301句", bai:19, ten:"欢迎你！", tenVi:"Xin chào mừng ông!", hsk:"1–4", th:"don-tiep",
  doan:[
    {ten:"公司的人来接", tenVi:"Người của công ty ra sân bay đón",
     vai:{A:["王大年","Vương Đại Niên","nam"],B:["西川","Nishikawa","nam"]},
     cau:[
      ["A","您好！西川先生。我是王大年，公司的翻译。","Nín hǎo! Xīchuān xiānsheng. Wǒ shì Wáng Dànián, gōngsī de fānyì.","Chào ông! Ông Nishikawa. Tôi là Vương Đại Niên, phiên dịch của công ty."],
      ["B","谢谢您来接我。","Xièxie nín lái jiē wǒ.","Cảm ơn ông đã đến đón tôi."],
      ["A","别客气，路上辛苦了。","Bié kèqi, lù shang xīnkǔ le.","Đừng khách sáo, trên đường vất vả rồi."],
      ["B","一点儿也不累，很顺利。","Yìdiǎnr yě bú lèi, hěn shùnlì.","Không mệt chút nào, rất thuận lợi."],
      ["A","汽车在外边，我们送您去饭店。","Qìchē zài wàibian, wǒmen sòng nín qù fàndiàn.","Xe ô tô ở bên ngoài, chúng tôi đưa ông về khách sạn."],
      ["B","我还有两个朋友。","Wǒ hái yǒu liǎng ge péngyou.","Tôi còn có hai người bạn nữa."],
      ["A","那一起走吧。","Nà yìqǐ zǒu ba.","Vậy cùng đi nhé."],
      ["B","谢谢！","Xièxie!","Cảm ơn!"]
     ],
     hoi:[
      {q:"王大年是谁？",vi:"Vương Đại Niên là ai?",opts:["公司的翻译","公司的经理","西川的同学"],dap:0},
      {q:"西川路上累不累？",vi:"Nishikawa đi đường có mệt không?",opts:["很累","一点儿也不累","有点儿累"],dap:1},
      {q:"王大年送西川去哪儿？",vi:"Vương Đại Niên đưa Nishikawa đi đâu?",opts:["饭店","公司","朋友那儿"],dap:0}
     ],
     viet:[1,2,4,6]},
    {ten:"经理请吃饭", tenVi:"Giám đốc mời dùng cơm",
     vai:{A:["经理","Giám đốc","nam"],B:["西川","Nishikawa","nam"]},
     cau:[
      ["A","欢迎您！西川先生。","Huānyíng nín! Xīchuān xiānsheng.","Hoan nghênh ông! Ông Nishikawa."],
      ["B","谢谢！","Xièxie!","Cảm ơn!"],
      ["A","您第一次来中国吗？","Nín dì yī cì lái Zhōngguó ma?","Lần đầu tiên ông đến Trung Quốc phải không?"],
      ["B","不，我以前来过。这是我们经理给您的信。","Bù, wǒ yǐqián láiguo. Zhè shì wǒmen jīnglǐ gěi nín de xìn.","Không, trước đây tôi từng đến. Đây là thư của giám đốc chúng tôi gửi cho ông."],
      ["A","麻烦您了。","Máfan nín le.","Làm phiền ông quá."],
      ["B","他问您好。","Tā wèn nín hǎo.","Ông ấy gửi lời hỏi thăm ông."],
      ["A","谢谢。今天晚上我们在北京饭店请您吃晚饭。","Xièxie. Jīntiān wǎnshang wǒmen zài Běijīng Fàndiàn qǐng nín chī wǎnfàn.","Cảm ơn. Tối nay chúng tôi mời ông dùng cơm tối ở khách sạn Bắc Kinh."],
      ["B","您太客气了，真不好意思。","Nín tài kèqi le, zhēn bùhǎoyìsi.","Ông khách sáo quá, thật ngại quá."],
      ["A","您有时间吗？","Nín yǒu shíjiān ma?","Ông có thời gian không?"],
      ["B","下午我去朋友那儿。晚上我没事。","Xiàwǔ wǒ qù péngyou nàr. Wǎnshang wǒ méi shì.","Chiều tôi đến chỗ bạn. Tối tôi không có việc gì."],
      ["A","我们去接您。","Wǒmen qù jiē nín.","Chúng tôi đến đón ông."],
      ["B","不用了，我可以打的，我从朋友那儿去。","Búyòng le, wǒ kěyǐ dǎdī, wǒ cóng péngyou nàr qù.","Khỏi cần, tôi có thể đi taxi, tôi đi từ chỗ bạn."]
     ],
     hoi:[
      {q:"西川是第一次来中国吗？",vi:"Đây có phải lần đầu Nishikawa đến Trung Quốc không?",opts:["是，第一次来","不，以前来过","不知道"],dap:1},
      {q:"今天晚上经理请西川做什么？",vi:"Tối nay giám đốc mời Nishikawa làm gì?",opts:["吃晚饭","看京剧","喝茶"],dap:0},
      {q:"晚上西川怎么去北京饭店？",vi:"Tối nay Nishikawa đến khách sạn Bắc Kinh bằng cách nào?",opts:["经理去接他","他自己打的去","朋友送他去"],dap:1}
     ],
     viet:[2,4,5,7]}
  ]
});

NN_BAI.push({
  id:"301/bai-20", sach:"301", sachTen:"汉语会话301句", bai:20, ten:"为我们的友谊干杯！", tenVi:"Cạn ly vì tình hữu nghị của chúng ta!", hsk:"1–4", th:"an-uong",
  doan:[
    {ten:"在宴会上", tenVi:"Trong bữa tiệc chiêu đãi",
     vai:{A:["经理","Giám đốc","nam"],B:["西川","Nishikawa","nam"],C:["翻译","Phiên dịch","nam"]},
     cau:[
      ["C","西川先生，请这儿坐。","Xīchuān xiānsheng, qǐng zhèr zuò.","Ông Nishikawa, mời ngồi đây."],
      ["B","谢谢！","Xièxie!","Cảm ơn!"],
      ["A","这两天过得怎么样？","Zhè liǎng tiān guò de zěnmeyàng?","Hai hôm nay ông sống thế nào?"],
      ["B","过得很愉快。","Guò de hěn yúkuài.","Rất vui vẻ."],
      ["C","您喜欢喝什么酒？","Nín xǐhuan hē shénme jiǔ?","Ông thích uống rượu gì?"],
      ["B","啤酒吧。","Píjiǔ ba.","Bia vậy."],
      ["A","您尝尝这个菜怎么样？","Nín chángchang zhè ge cài zěnmeyàng?","Ông nếm thử món này xem thế nào?"],
      ["B","很好吃。","Hěn hǎochī.","Rất ngon."],
      ["A","吃啊，别客气。","Chī a, bié kèqi.","Ăn đi, đừng khách sáo."],
      ["B","不客气。","Bú kèqi.","Không khách sáo đâu."],
      ["A","来，为我们的友谊干杯！","Lái, wèi wǒmen de yǒuyì gān bēi!","Nào, cạn ly vì tình hữu nghị của chúng ta!"],
      ["C","干杯！","Gān bēi!","Cạn ly!"],
      ["B","干杯！","Gān bēi!","Cạn ly!"]
     ],
     hoi:[
      {q:"西川这两天过得怎么样？",vi:"Hai hôm nay Nishikawa sống thế nào?",opts:["很愉快","很忙","不太好"],dap:0},
      {q:"西川想喝什么酒？",vi:"Nishikawa muốn uống rượu gì?",opts:["啤酒","葡萄酒","白酒"],dap:0},
      {q:"他们为什么干杯？",vi:"Họ cạn ly vì điều gì?",opts:["为我们的友谊","为西川的生日","为新的工作"],dap:0}
     ],
     viet:[2,3,6,10]},
    {ten:"在刘京家吃饭", tenVi:"Ăn cơm ở nhà Lưu Kinh",
     vai:{A:["刘母","Mẹ Lưu Kinh","nu"],B:["和子","Hòa Tử","nu"],C:["刘京","Lưu Kinh","nam"],D:["西川","Nishikawa","nam"]},
     cau:[
      ["C","我们先喝酒吧。","Wǒmen xiān hē jiǔ ba.","Chúng ta uống rượu trước nhé."],
      ["D","这个鱼做得真好吃。","Zhè ge yú zuò de zhēn hǎochī.","Món cá này nấu thật ngon."],
      ["A","你们别客气，像在家一样。","Nǐmen bié kèqi, xiàng zài jiā yíyàng.","Các cháu đừng khách sáo, cứ như ở nhà nhé."],
      ["D","我们不客气。","Wǒmen bú kèqi.","Chúng cháu không khách sáo đâu ạ."],
      ["A","吃饺子吧。","Chī jiǎozi ba.","Ăn sủi cảo đi."],
      ["B","我最喜欢吃饺子了。","Wǒ zuì xǐhuan chī jiǎozi le.","Cháu thích ăn sủi cảo nhất."],
      ["C","听说你很会做日本菜。","Tīngshuō nǐ hěn huì zuò Rìběn cài.","Nghe nói bạn rất giỏi nấu món Nhật."],
      ["B","哪儿啊，我做得不好。","Nǎr a, wǒ zuò de bù hǎo.","Đâu có, mình nấu không ngon đâu."],
      ["C","你怎么不吃了？","Nǐ zěnme bù chī le?","Sao bạn không ăn nữa?"],
      ["B","吃饱了。你们慢吃。","Chībǎo le. Nǐmen màn chī.","Mình no rồi. Các bạn ăn từ từ."]
     ],
     hoi:[
      {q:"西川觉得什么菜做得真好吃？",vi:"Nishikawa thấy món gì nấu thật ngon?",opts:["鱼","饺子","日本菜"],dap:0},
      {q:"和子最喜欢吃什么？",vi:"Hòa Tử thích ăn gì nhất?",opts:["饺子","鱼","烤鸭"],dap:0},
      {q:"和子为什么不吃了？",vi:"Vì sao Hòa Tử không ăn nữa?",opts:["吃饱了","不好吃","太辣了"],dap:0}
     ],
     viet:[1,4,5,9]}
  ]
});
