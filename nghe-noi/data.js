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
      ["A","我来了两个月。你呢？","Wǒ lái le liǎng gè yuè. Nǐ ne?","Tôi đến được hai tháng rồi. Còn bạn?"],
      ["B","我来了半年了。有问题可以问我！","Wǒ lái le bànnián le. Yǒu wèntí kěyǐ wèn wǒ!","Tôi đến được nửa năm rồi. Có câu hỏi gì cứ hỏi tôi nhé!"],
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
      ["B","来两碗面条，一盘饺子。","Lái liǎng wǎn miàntiáo, yī pán jiǎozi.","Cho hai bát mì, một đĩa sủi cảo."],
      ["A","好的。喝什么？","Hǎo de. Hē shénme?","Vâng ạ. Quý khách uống gì?"],
      ["B","两杯茶，谢谢。有辣的菜吗？","Liǎng bēi chá, xièxie. Yǒu là de cài ma?","Hai cốc trà, cảm ơn. Có món cay không?"],
      ["A","有，我们有几道辣菜，都很好吃。","Yǒu, wǒmen yǒu jǐ dào là cài, dōu hěn hǎo chī.","Có ạ, chúng tôi có vài món cay, đều rất ngon."],
      ["B","好，再加一份辣菜，谢谢。","Hǎo, zài jiā yī fèn là cài, xièxie.","Được, thêm một phần món cay, cảm ơn."],
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
      ["B","还没有。有一道题我不会做。","Hái méiyǒu. Yǒu yī dào tí wǒ bú huì zuò.","Chưa xong. Có một câu tôi không biết làm."],
      ["A","哪道？我来看看。","Nǎ dào? Wǒ lái kànkan.","Câu nào? Để tôi xem."],
      ["B","第五题。我看了很多遍，还是不懂。","Dì wǔ tí. Wǒ kàn le hěn duō biàn, háishi bù dǒng.","Câu số 5. Tôi đọc nhiều lần rồi mà vẫn không hiểu."],
      ["A","这个我懂。你听我说……","Zhège wǒ dǒng. Nǐ tīng wǒ shuō……","Cái này tôi hiểu. Bạn nghe tôi nói nhé..."],
      ["B","哦，明白了！原来是这样！","Ó, míngbái le! Yuánlái shì zhèyàng!","À, hiểu rồi! Hóa ra là vậy!"],
      ["A","不客气。不懂的话，多问问老师。","Bú kèqi. Bù dǒng de huà, duō wèn wèn lǎoshī.","Không có gì. Không hiểu thì cứ hỏi thầy cô thêm nhé."]
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
      ["A","需要。一天三次，每次两片。","Xūyào. Yītiān sān cì, měi cì liǎng piàn.","Cần. Mỗi ngày 3 lần, mỗi lần 2 viên."],
      ["B","好的，谢谢医生。","Hǎo de, xièxie yīshēng.","Được ạ, cảm ơn bác sĩ."]
    ],
    hoi:[
      {q:"大卫哪里不舒服？",vi:"Đại Vệ cảm thấy khó chịu thế nào?",opts:["头痛，有点儿发烧","肚子痛","眼睛不舒服"],dap:0},
      {q:"从什么时候开始不舒服？",vi:"Bắt đầu không khỏe từ khi nào?",opts:["今天早上","昨天晚上","上个星期"],dap:1},
      {q:"医生说一天吃几片药？",vi:"Bác sĩ nói mỗi lần uống mấy viên?",opts:["每次一片","每次两片","每次三片"],dap:1}
    ],
    viet:[1,3,5,7]
  }]
});
