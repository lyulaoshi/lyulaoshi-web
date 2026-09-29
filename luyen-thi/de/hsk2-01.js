// 考试盒 · Đề mô phỏng HSK 2 — số 01 (tự soạn theo đúng dạng bài của 新版HSK（二级）样题, 汉考国际 2025-12).
// 60 câu = 听力 25 (5 + 10 + 10) · 阅读 25 (5 + 5 + 10 + 5) · 书写 10 (5 + 5); 52 phút (17 + 25 + 10).
// Phần 10 câu ghép (听力 二, 阅读 三) chia 2 nhóm như đề HSK cũ: nhóm đầu 6 lựa chọn A–F có câu 示例, nhóm sau 5 lựa chọn A–E.
// Kiểu mới của HSK 2: zi (书写 一: chọn bộ phận ghép thành chữ — zi = [[chữ/bộ phận, pinyin, 1 = ô thiếu]]),
// write (书写 二: gõ chữ Hán vào chỗ trống theo pinyin hint; ans = chữ đúng, nhiều cách ghi "A / B").
(window.KT_DS=window.KT_DS||[]).push({id:"hsk2-01",cap:2,ten:"Đề HSK 2 · số 01",phut:52,parts:[
 {sk:"nghe",no:1,type:"pic3",vi:"Nghe câu, chọn hình đúng.",q:[
  {say:"他正在打篮球呢。",py:"Tā zhèngzài dǎ lánqiú ne.",vi:"Anh ấy đang chơi bóng rổ.",opts:[{img:"dabong",t:"đá bóng"},{img:"bongro",t:"chơi bóng rổ"},{img:"battay",t:"bắt tay"}],ans:1,np:["一42"],w:[["篮球","lánqiú"],["打","dǎ"]]},
  {say:"我给妈妈买了一件衣服。",py:"Wǒ gěi māma mǎile yí jiàn yīfu.",vi:"Tôi mua cho mẹ một bộ quần áo.",opts:[{img:"hoaqua",t:"hoa quả"},{img:"sach",t:"sách"},{img:"tangao",t:"tặng quần áo"}],ans:2,np:["二26","二10"],w:[["件","jiàn"],["衣服","yīfu"]],
   why:"给 + người + động từ = làm gì cho ai. Quần áo dùng lượng từ 件."},
  {say:"今天是晴天，天气很好。",py:"Jīntiān shì qíngtiān, tiānqì hěn hǎo.",vi:"Hôm nay trời nắng, thời tiết rất đẹp.",opts:[{img:"nang",t:"trời nắng"},{img:"mua",t:"trời mưa"},{img:"lanh",t:"trời tuyết lạnh"}],ans:0,np:["一36"],w:[["晴天","qíngtiān"],["天气","tiānqì"]]},
  {say:"他生病了，在床上休息。",py:"Tā shēngbìng le, zài chuáng shang xiūxi.",vi:"Anh ấy bị ốm, đang nằm nghỉ trên giường.",opts:[{img:"docsach",t:"đọc sách"},{img:"omnha",t:"ốm nằm nghỉ"},{img:"xemtv",t:"xem ti vi"}],ans:1,np:["一40"],w:[["生病","shēngbìng"],["床","chuáng"],["休息","xiūxi"]]},
  {say:"桌子上有两个杯子。",py:"Zhuōzi shang yǒu liǎng gè bēizi.",vi:"Trên bàn có hai cái cốc.",opts:[{img:"dienthoai",t:"điện thoại"},{img:"haiqua",t:"hai quả táo"},{img:"haicoc",t:"hai cái cốc"}],ans:2,np:["一37"],w:[["桌子","zhuōzi"],["杯子","bēizi"]],
   why:"Nơi chốn + 有 + số lượng + danh từ = ở đâu có cái gì."}]},

 {sk:"nghe",no:2,type:"match",vi:"Nghe hội thoại, chọn hình phù hợp (A–F).",
  ex:{say:"男：这是你的狗吗？\n女：是啊，它两岁了。",py:"Zhè shì nǐ de gǒu ma? — Shì a, tā liǎng suì le.",vi:"Đây là con chó của bạn à? — Ừ, nó hai tuổi rồi.",ans:3},
  bank:[{img:"khambenh",t:"bác sĩ khám bệnh"},{img:"maybay",t:"máy bay"},{img:"lambai",t:"ngồi viết bài"},{img:"cho",t:"con chó"},{img:"bongro",t:"chơi bóng rổ"},{img:"muasam",t:"chọn quần áo"}],q:[
  {say:"女：喂，你在哪儿呢？\n男：我在机场，快要上飞机了。",py:"Wèi, nǐ zài nǎr ne? — Wǒ zài jīchǎng, kuàiyào shàng fēijī le.",vi:"A lô, anh đang ở đâu? — Anh ở sân bay, sắp lên máy bay rồi.",ans:1,np:["二36","二81"],w:[["机场","jīchǎng"],["快要","kuàiyào"]],why:"快要……了 = sắp … rồi."},
  {say:"男：这件衣服怎么样？\n女：颜色很好看，但是有点儿大。",py:"Zhè jiàn yīfu zěnmeyàng? — Yánsè hěn hǎokàn, dànshì yǒudiǎnr dà.",vi:"Bộ quần áo này thế nào? — Màu rất đẹp, nhưng hơi rộng.",ans:5,np:["二13","二76"],w:[["颜色","yánsè"],["有点儿","yǒudiǎnr"]]},
  {say:"女：你喜欢什么运动？\n男：我喜欢打篮球，经常和朋友一起打。",py:"Nǐ xǐhuan shénme yùndòng? — Wǒ xǐhuan dǎ lánqiú, jīngcháng hé péngyou yìqǐ dǎ.",vi:"Bạn thích môn thể thao nào? — Mình thích chơi bóng rổ, thường chơi cùng bạn bè.",ans:4,np:["二16"],w:[["运动","yùndòng"],["篮球","lánqiú"],["经常","jīngcháng"]]},
  {say:"男：医生，我孩子头很疼。\n女：好，我看看。",py:"Yīshēng, wǒ háizi tóu hěn téng. — Hǎo, wǒ kànkan.",vi:"Bác sĩ ơi, con tôi đau đầu. — Được, để tôi xem.",ans:0,np:["二04"],w:[["头","tóu"],["疼","téng"],["医生","yīshēng"]],why:"看看 = lặp động từ, nghĩa “xem thử, xem qua”."},
  {say:"女：你在写什么？\n男：我在写汉字呢。",py:"Nǐ zài xiě shénme? — Wǒ zài xiě Hànzì ne.",vi:"Bạn đang viết gì thế? — Mình đang viết chữ Hán.",ans:2,np:["一42"],w:[["写","xiě"],["汉字","Hànzì"]]}]},
 {sk:"nghe",no:2,type:"match",vi:"Nghe hội thoại, chọn hình phù hợp (A–E).",
  bank:[{img:"begai",t:"bé gái"},{img:"taxi",t:"taxi"},{img:"rapphim",t:"rạp chiếu phim"},{img:"docsach",t:"học bài"},{img:"nauan",t:"nấu ăn"}],q:[
  {say:"男：快点儿，七点半的电影！\n女：没关系，还有二十分钟呢。",py:"Kuài diǎnr, qī diǎn bàn de diànyǐng! — Méi guānxi, hái yǒu èrshí fēnzhōng ne.",vi:"Nhanh lên, phim 7 rưỡi đấy! — Không sao, còn 20 phút nữa mà.",ans:2,np:["二12"],w:[["电影","diànyǐng"],["分钟","fēnzhōng"]]},
  {say:"女：你做的菜真好吃！\n男：你喜欢就多吃点儿。",py:"Nǐ zuò de cài zhēn hǎochī! — Nǐ xǐhuan jiù duō chī diǎnr.",vi:"Món anh nấu ngon thật! — Em thích thì ăn nhiều vào.",ans:4,np:["二17"],w:[["菜","cài"],["做","zuò"]]},
  {say:"男：你怎么还不睡觉？\n女：我明天考试，得再看看书。",py:"Nǐ zěnme hái bú shuìjiào? — Wǒ míngtiān kǎoshì, děi zài kànkan shū.",vi:"Sao em còn chưa ngủ? — Mai em thi, phải xem lại sách thêm.",ans:3,np:["二15","二04"],w:[["考试","kǎoshì"],["得","děi"]]},
  {say:"女：这是我女儿，今年三岁了。\n男：她长得真漂亮。",py:"Zhè shì wǒ nǚ'ér, jīnnián sān suì le. — Tā zhǎng de zhēn piàoliang.",vi:"Đây là con gái tôi, năm nay ba tuổi. — Bé xinh thật.",ans:0,np:["二51"],w:[["女儿","nǚ'ér"],["漂亮","piàoliang"]]},
  {say:"男：我们打车去吧？\n女：好，我叫车。",py:"Wǒmen dǎ chē qù ba? — Hǎo, wǒ jiào chē.",vi:"Mình đi taxi nhé? — Ừ, để em gọi xe.",ans:1,np:["二79"],w:[["打车","dǎ chē"]]}]},

 {sk:"nghe",no:3,type:"text3",vi:"Nghe hội thoại và câu hỏi, chọn đáp án đúng.",q:[
  {say:"男：你星期天做什么了？\n女：我和朋友去游泳了。\n问：女的星期天做什么了？",py:"Nǐ xīngqītiān zuò shénme le? — Wǒ hé péngyou qù yóuyǒng le. Wèn: Nǚ de xīngqītiān zuò shénme le?",vi:"Chủ nhật em làm gì? — Em đi bơi với bạn. Hỏi: Chủ nhật người nữ làm gì?",
   opts:[{t:"游泳",py:"yóuyǒng"},{t:"打篮球",py:"dǎ lánqiú"},{t:"看电影",py:"kàn diànyǐng"}],ans:0,np:["一21"],w:[["星期天","xīngqītiān"],["游泳","yóuyǒng"]]},
  {say:"女：你的汉语说得真好！\n男：哪里哪里，我学了两年了。\n问：男的学了多长时间汉语？",py:"Nǐ de Hànyǔ shuō de zhēn hǎo! — Nǎli nǎli, wǒ xuéle liǎng nián le. Wèn: Nán de xuéle duō cháng shíjiān Hànyǔ?",vi:"Anh nói tiếng Trung giỏi thật! — Đâu có, tôi học được hai năm rồi. Hỏi: Người nam học tiếng Trung bao lâu rồi?",
   opts:[{t:"一年",py:"yì nián"},{t:"两年",py:"liǎng nián"},{t:"三年",py:"sān nián"}],ans:1,np:["二51","二12"],w:[["说","shuō"],["时间","shíjiān"]],why:"哪里哪里 = đâu có (khiêm tốn khi được khen). 学了两年了 = đã học được hai năm."},
  {say:"男：你比你姐姐高吗？\n女：不，我没有她高。\n问：谁高？",py:"Nǐ bǐ nǐ jiějie gāo ma? — Bù, wǒ méiyǒu tā gāo. Wèn: Shéi gāo?",vi:"Em cao hơn chị em không? — Không, em không cao bằng chị. Hỏi: Ai cao hơn?",
   opts:[{t:"女的",py:"nǚ de"},{t:"女的的姐姐",py:"nǚ de de jiějie"},{t:"都很高",py:"dōu hěn gāo"}],ans:1,np:["一38"],w:[["姐姐","jiějie"],["高","gāo"]],why:"A 没有 B + tính từ = A không … bằng B → chị (B) cao hơn."},
  {say:"女：从这儿到火车站要多长时间？\n男：坐出租车二十分钟就到了。\n问：去火车站要多长时间？",py:"Cóng zhèr dào huǒchēzhàn yào duō cháng shíjiān? — Zuò chūzūchē èrshí fēnzhōng jiù dào le. Wèn: Qù huǒchēzhàn yào duō cháng shíjiān?",vi:"Từ đây đến ga tàu mất bao lâu? — Đi taxi 20 phút là tới. Hỏi: Đến ga tàu mất bao lâu?",
   opts:[{t:"十分钟",py:"shí fēnzhōng"},{t:"二十分钟",py:"èrshí fēnzhōng"},{t:"两个小时",py:"liǎng gè xiǎoshí"}],ans:1,np:["二12","二20"],w:[["出租车","chūzūchē"],["火车站","huǒchēzhàn"]]},
  {say:"男：你去过中国吗？\n女：去过，我是去年去的。\n问：女的什么时候去的中国？",py:"Nǐ qùguo Zhōngguó ma? — Qùguo, wǒ shì qùnián qù de. Wèn: Nǚ de shénme shíhou qù de Zhōngguó?",vi:"Chị từng đi Trung Quốc chưa? — Đi rồi, năm ngoái tôi đi. Hỏi: Người nữ đi Trung Quốc khi nào?",
   opts:[{t:"去年",py:"qùnián"},{t:"今年",py:"jīnnián"},{t:"明年",py:"míngnián"}],ans:0,np:["二71","二60"],w:[["去年","qùnián"],["过","guo"]],why:"是……的 nhấn mạnh thời gian của việc đã xảy ra: 是去年去的."},
  {say:"女：这本书你看完了吗？\n男：还没有，我看了一半。\n问：男的看完那本书了吗？",py:"Zhè běn shū nǐ kànwán le ma? — Hái méiyǒu, wǒ kànle yíbàn. Wèn: Nán de kànwán nà běn shū le ma?",vi:"Quyển sách này anh đọc xong chưa? — Chưa, anh đọc được một nửa. Hỏi: Người nam đọc xong quyển sách chưa?",
   opts:[{t:"看完了",py:"kànwán le"},{t:"没看完",py:"méi kànwán"},{t:"不想看",py:"bù xiǎng kàn"}],ans:1,np:["二49"],w:[["完","wán"],["一半","yíbàn"]],why:"看完 = đọc xong (bổ ngữ kết quả). 看了一半 = đọc được một nửa → chưa xong."},
  {say:"男：外边冷不冷？\n女：有点儿冷，你多穿点儿衣服吧。\n问：女的让男的做什么？",py:"Wàibian lěng bu lěng? — Yǒudiǎnr lěng, nǐ duō chuān diǎnr yīfu ba. Wèn: Nǚ de ràng nán de zuò shénme?",vi:"Bên ngoài có lạnh không? — Hơi lạnh, anh mặc thêm áo vào. Hỏi: Người nữ bảo người nam làm gì?",
   opts:[{t:"多穿衣服",py:"duō chuān yīfu"},{t:"多喝水",py:"duō hē shuǐ"},{t:"早点儿睡觉",py:"zǎo diǎnr shuìjiào"}],ans:0,np:["二13"],w:[["穿","chuān"],["让","ràng"]]},
  {say:"女：请问，洗手间在哪儿？\n男：在前边，左边第一个。\n问：洗手间在哪儿？",py:"Qǐngwèn, xǐshǒujiān zài nǎr? — Zài qiánbian, zuǒbian dì-yī gè. Wèn: Xǐshǒujiān zài nǎr?",vi:"Xin hỏi, nhà vệ sinh ở đâu? — Ở phía trước, phòng đầu tiên bên trái. Hỏi: Nhà vệ sinh ở đâu?",
   opts:[{t:"前边",py:"qiánbian"},{t:"后边",py:"hòubian"},{t:"外边",py:"wàibian"}],ans:0,np:["一01","二72"],w:[["洗手间","xǐshǒujiān"],["左边","zuǒbian"]],why:"在前边 = ở phía trước. 第一个 = cái thứ nhất (第 + số + lượng từ)."},
  {say:"男：你怎么不高兴？\n女：我的手机坏了。\n问：女的为什么不高兴？",py:"Nǐ zěnme bù gāoxìng? — Wǒ de shǒujī huài le. Wèn: Nǚ de wèi shénme bù gāoxìng?",vi:"Sao em không vui? — Điện thoại của em hỏng rồi. Hỏi: Vì sao người nữ không vui?",
   opts:[{t:"手机坏了",py:"shǒujī huài le"},{t:"没买到票",py:"méi mǎidào piào"},{t:"生病了",py:"shēngbìng le"}],ans:0,np:["二76","二05"],w:[["坏","huài"],["为什么","wèi shénme"]]},
  {say:"女：这些水果多少钱？\n男：三十五块。\n问：这些水果多少钱？",py:"Zhèxiē shuǐguǒ duōshao qián? — Sānshíwǔ kuài. Wèn: Zhèxiē shuǐguǒ duōshao qián?",vi:"Chỗ hoa quả này bao nhiêu tiền? — 35 tệ. Hỏi: Chỗ hoa quả này bao nhiêu tiền?",
   opts:[{t:"十五块",py:"shíwǔ kuài"},{t:"三十块",py:"sānshí kuài"},{t:"三十五块",py:"sānshíwǔ kuài"}],ans:2,np:["一43"],w:[["水果","shuǐguǒ"],["块","kuài"]]}]},

 {sk:"doc",no:1,type:"match",vi:"Đọc câu, chọn hình phù hợp (A–F).",
  ex:{cn:"她正在画画儿。",py:"Tā zhèngzài huà huàr.",vi:"Cô ấy đang vẽ tranh.",ans:4},
  bank:[{img:"tra",t:"uống trà"},{img:"quatang",t:"quà tặng"},{img:"hat",t:"hát"},{img:"hoaqua",t:"hoa quả"},{img:"vetranh",t:"vẽ tranh"},{img:"mua",t:"trời mưa to"}],q:[
  {cn:"我生日那天，朋友们送给我很多东西。",py:"Wǒ shēngrì nà tiān, péngyoumen sòng gěi wǒ hěn duō dōngxi.",vi:"Hôm sinh nhật tôi, các bạn tặng tôi rất nhiều thứ.",ans:1,np:["二61"],w:[["生日","shēngrì"],["送","sòng"]],why:"送给 + người + vật = tặng ai cái gì (câu hai tân ngữ)."},
  {cn:"妹妹正在房间里唱歌呢。",py:"Mèimei zhèngzài fángjiān li chàng gē ne.",vi:"Em gái đang hát trong phòng.",ans:2,np:["一42"],w:[["唱歌","chàng gē"],["妹妹","mèimei"]]},
  {cn:"这些水果很大，也很便宜。",py:"Zhèxiē shuǐguǒ hěn dà, yě hěn piányi.",vi:"Chỗ hoa quả này rất to, lại rẻ.",ans:3,np:["一13"],w:[["水果","shuǐguǒ"],["便宜","piányi"]],why:"……，也…… = …, cũng …: nói thêm một ý cùng chiều."},
  {cn:"爸爸在家喝茶呢。",py:"Bàba zài jiā hē chá ne.",vi:"Bố đang uống trà ở nhà.",ans:0,np:["一16"],w:[["喝","hē"],["茶","chá"]]},
  {cn:"外边正在下大雨。",py:"Wàibian zhèngzài xià dà yǔ.",vi:"Bên ngoài đang mưa to.",ans:5,np:["一42"],w:[["外边","wàibian"],["下雨","xià yǔ"]]}]},

 {sk:"doc",no:2,type:"match",vi:"Chọn từ điền vào chỗ trống (A–F).",
  ex:{cn:"教室里坐（　）很多学生。",py:"Jiàoshì li zuò(　) hěn duō xuésheng.",vi:"Trong lớp có rất nhiều học sinh đang ngồi.",ans:1},
  bank:[{t:"已经",py:"yǐjīng"},{t:"着",py:"zhe"},{t:"离",py:"lí"},{t:"过",py:"guo"},{t:"得",py:"de"},{t:"都",py:"dōu"}],q:[
  {cn:"我家（　）学校很近。",py:"Wǒ jiā (　) xuéxiào hěn jìn.",vi:"Nhà tôi cách trường rất gần.",ans:2,np:["二27"],w:[["离","lí"],["近","jìn"]],why:"A 离 B + 近 / 远 = A cách B gần / xa."},
  {cn:"他跑（　）很快。",py:"Tā pǎo (　) hěn kuài.",vi:"Anh ấy chạy rất nhanh.",ans:4,np:["二51","二31"],w:[["得","de"],["快","kuài"]],why:"Động từ + 得 + tính từ: nhận xét động tác làm thế nào."},
  {cn:"我去（　）北京，那儿很漂亮。",py:"Wǒ qù(　) Běijīng, nàr hěn piàoliang.",vi:"Tôi từng đến Bắc Kinh, ở đó rất đẹp.",ans:3,np:["二71"],w:[["过","guo"],["漂亮","piàoliang"]]},
  {cn:"我们班的学生（　）是中国人。",py:"Wǒmen bān de xuésheng (　) shì Zhōngguórén.",vi:"Học sinh lớp chúng tôi đều là người Trung Quốc.",ans:5,np:["一10"],w:[["都","dōu"],["班","bān"]],why:"都 đứng sau chủ ngữ số nhiều, trước động từ."},
  {cn:"我（　）吃饭了，你们吃吧。",py:"Wǒ (　) chī fàn le, nǐmen chī ba.",vi:"Tôi ăn cơm rồi, các bạn ăn đi.",ans:0,np:["二15"],w:[["已经","yǐjīng"],["吃饭","chī fàn"]]}]},

 {sk:"doc",no:3,type:"match",vi:"Chọn câu đáp phù hợp (A–F).",
  ex:{cn:"你的汉语说得真好！",py:"Nǐ de Hànyǔ shuō de zhēn hǎo!",vi:"Bạn nói tiếng Trung giỏi thật!",ans:2},
  bank:[{t:"好啊，几点见？",py:"Hǎo a, jǐ diǎn jiàn?",vi:"Được thôi, mấy giờ gặp?"},{t:"是啊，昨天在商店买的。",py:"Shì a, zuótiān zài shāngdiàn mǎi de.",vi:"Đúng rồi, hôm qua mua ở cửa hàng."},{t:"谢谢，我学了三年了。",py:"Xièxie, wǒ xuéle sān nián le.",vi:"Cảm ơn, tôi học ba năm rồi."},{t:"对不起，路上车太多了。",py:"Duìbuqǐ, lù shang chē tài duō le.",vi:"Xin lỗi, trên đường đông xe quá."},{t:"他不在，出去了。",py:"Tā bú zài, chūqu le.",vi:"Thầy không có ở đây, ra ngoài rồi."},{t:"我最喜欢打篮球。",py:"Wǒ zuì xǐhuan dǎ lánqiú.",vi:"Tôi thích chơi bóng rổ nhất."}],q:[
  {cn:"你怎么来得这么晚？",py:"Nǐ zěnme lái de zhème wǎn?",vi:"Sao bạn đến muộn thế?",ans:3,np:["二51","二07"],w:[["晚","wǎn"],["这么","zhème"]],why:"来得这么晚 = đến muộn thế → câu trả lời là lời xin lỗi vì đến muộn."},
  {cn:"你喜欢什么运动？",py:"Nǐ xǐhuan shénme yùndòng?",vi:"Bạn thích môn thể thao nào?",ans:5,np:["一46"],w:[["运动","yùndòng"],["最","zuì"]]},
  {cn:"明天我们去看电影怎么样？",py:"Míngtiān wǒmen qù kàn diànyǐng zěnmeyàng?",vi:"Mai mình đi xem phim nhé, thế nào?",ans:0,np:["二75"],w:[["电影","diànyǐng"]],why:"…… 怎么样？ cuối câu = hỏi ý kiến / rủ rê → trả lời 好啊."},
  {cn:"这件衣服是新买的吗？",py:"Zhè jiàn yīfu shì xīn mǎi de ma?",vi:"Bộ quần áo này mới mua à?",ans:1,np:["二60"],w:[["新","xīn"],["件","jiàn"]]},
  {cn:"喂，王老师在吗？",py:"Wèi, Wáng lǎoshī zài ma?",vi:"A lô, thầy Vương có đó không?",ans:4,np:["二36","二50"],w:[["喂","wèi"],["出去","chūqu"]]}]},
 {sk:"doc",no:3,type:"match",vi:"Chọn câu đáp phù hợp (A–E).",
  bank:[{t:"坐三路，就在前边。",py:"Zuò sān lù, jiù zài qiánbian.",vi:"Đi tuyến số 3, ngay phía trước kia."},{t:"很大，也很漂亮，我很喜欢。",py:"Hěn dà, yě hěn piàoliang, wǒ hěn xǐhuan.",vi:"Rất rộng, lại đẹp, tôi rất thích."},{t:"好多了，头已经不疼了。",py:"Hǎo duō le, tóu yǐjīng bù téng le.",vi:"Đỡ nhiều rồi, hết đau đầu rồi."},{t:"下个星期三。",py:"Xià gè xīngqīsān.",vi:"Thứ Tư tuần sau."},{t:"因为我想去中国工作。",py:"Yīnwèi wǒ xiǎng qù Zhōngguó gōngzuò.",vi:"Vì tôi muốn sang Trung Quốc làm việc."}],q:[
  {cn:"你的病好了吗？",py:"Nǐ de bìng hǎo le ma?",vi:"Bạn khỏi ốm chưa?",ans:2,np:["二15"],w:[["病","bìng"],["疼","téng"]]},
  {cn:"我们坐几路公交车？",py:"Wǒmen zuò jǐ lù gōngjiāochē?",vi:"Chúng ta đi xe buýt tuyến số mấy?",ans:0,np:["二20"],w:[["公交车","gōngjiāochē"],["路","lù"]],why:"就在前边 = ngay ở phía trước (就 nhấn mạnh)."},
  {cn:"你为什么学习汉语？",py:"Nǐ wèi shénme xuéxí Hànyǔ?",vi:"Vì sao bạn học tiếng Trung?",ans:4,np:["二68","二76"],w:[["为什么","wèi shénme"],["因为","yīnwèi"]]},
  {cn:"这个房间怎么样？",py:"Zhège fángjiān zěnmeyàng?",vi:"Căn phòng này thế nào?",ans:1,np:["一13"],w:[["房间","fángjiān"],["漂亮","piàoliang"]]},
  {cn:"你什么时候回来？",py:"Nǐ shénme shíhou huílai?",vi:"Khi nào bạn về?",ans:3,np:["二76"],w:[["回来","huílai"],["时候","shíhou"]]}]},

 {sk:"doc",no:4,type:"text3",vi:"Đọc câu, trả lời câu hỏi <svg class='lli' aria-hidden='true'><use href='/chung/ic.svg#sao'/></svg>.",q:[
  {cn:"我哥哥比我大三岁，今年二十五岁。",py:"Wǒ gēge bǐ wǒ dà sān suì, jīnnián èrshíwǔ suì.",vi:"Anh trai tôi hơn tôi ba tuổi, năm nay 25 tuổi.",
   star:"“我”今年：",spy:"“Wǒ” jīnnián:",svi:"“Tôi” năm nay:",opts:[{t:"二十二岁",py:"èrshí'èr suì"},{t:"二十五岁",py:"èrshíwǔ suì"},{t:"二十八岁",py:"èrshíbā suì"}],ans:0,np:["二58"],w:[["比","bǐ"],["岁","suì"]],
   why:"A 比 B 大三岁 = A hơn B ba tuổi. Anh 25 tuổi → tôi 25 − 3 = 22."},
  {cn:"虽然今天很忙，但是我很高兴，因为今天是我的生日。",py:"Suīrán jīntiān hěn máng, dànshì wǒ hěn gāoxìng, yīnwèi jīntiān shì wǒ de shēngrì.",vi:"Tuy hôm nay rất bận nhưng tôi rất vui, vì hôm nay là sinh nhật tôi.",
   star:"他今天：",spy:"Tā jīntiān:",svi:"Hôm nay anh ấy:",opts:[{t:"不忙",py:"bù máng"},{t:"过生日",py:"guò shēngrì"},{t:"不高兴",py:"bù gāoxìng"}],ans:1,np:["二65","二68"],w:[["虽然","suīrán"],["但是","dànshì"],["生日","shēngrì"]]},
  {cn:"明天要下雨，我们不出去了，在家看电视。",py:"Míngtiān yào xià yǔ, wǒmen bù chūqu le, zài jiā kàn diànshì.",vi:"Mai trời sẽ mưa, chúng tôi không ra ngoài nữa, ở nhà xem ti vi.",
   star:"他们明天：",spy:"Tāmen míngtiān:",svi:"Ngày mai họ:",opts:[{t:"在家看电视",py:"zài jiā kàn diànshì"},{t:"去看电影",py:"qù kàn diànyǐng"},{t:"去商店",py:"qù shāngdiàn"}],ans:0,np:["一40"],w:[["下雨","xià yǔ"],["出去","chūqu"]],why:"不……了 = không … nữa (thay đổi dự định) → ở nhà xem ti vi."},
  {cn:"这家饭店的菜很便宜，也很好吃，所以人很多。",py:"Zhè jiā fàndiàn de cài hěn piányi, yě hěn hǎochī, suǒyǐ rén hěn duō.",vi:"Món ở nhà hàng này rẻ, lại ngon, nên rất đông khách.",
   star:"这家饭店：",spy:"Zhè jiā fàndiàn:",svi:"Nhà hàng này:",opts:[{t:"菜很贵",py:"cài hěn guì"},{t:"人很多",py:"rén hěn duō"},{t:"不好吃",py:"bù hǎochī"}],ans:1,np:["一13","二68"],w:[["便宜","piányi"],["所以","suǒyǐ"]]},
  {cn:"我昨天晚上十二点睡觉，今天早上八点起床，上班晚了。",py:"Wǒ zuótiān wǎnshang shí'èr diǎn shuìjiào, jīntiān zǎoshang bā diǎn qǐchuáng, shàngbān wǎn le.",vi:"Tối qua 12 giờ tôi đi ngủ, sáng nay 8 giờ mới dậy, đi làm muộn.",
   star:"他今天早上：",spy:"Tā jīntiān zǎoshang:",svi:"Sáng nay anh ấy:",opts:[{t:"上班晚了",py:"shàngbān wǎn le"},{t:"没去上班",py:"méi qù shàngbān"},{t:"六点起床",py:"liù diǎn qǐchuáng"}],ans:0,np:["一44","一40"],w:[["起床","qǐchuáng"],["晚","wǎn"]],why:"八点起床，上班晚了 = 8 giờ dậy, đi làm muộn. Câu không nói nghỉ làm."}]},

 {sk:"viet",no:1,type:"zi",vi:"Chọn bộ phận (A–F) để ghép thành chữ đúng.",
  ex:{zi:[["女","mā",1],["妈","ma",0]],full:"妈妈",py:"māma",vi:"mẹ",ans:2},
  bank:[{t:"且"},{t:"力"},{t:"马"},{t:"木"},{t:"门"},{t:"月"}],q:[
  {zi:[["亻","xiū",1],["息","xi",0]],full:"休息",py:"xiūxi",vi:"nghỉ ngơi",ans:3,np:[],w:[["休息","xiūxi"]],why:"休 = 亻 (người) + 木 (cây): người tựa vào gốc cây nghỉ."},
  {zi:[["日","míng",1],["天","tiān",0]],full:"明天",py:"míngtiān",vi:"ngày mai",ans:5,np:[],w:[["明天","míngtiān"]],why:"明 = 日 (mặt trời) + 月 (mặt trăng) → sáng."},
  {zi:[["他","tā",0],["亻","men",1]],full:"他们",py:"tāmen",vi:"họ, bọn họ",ans:4,np:[],w:[["他们","tāmen"]],why:"们 = 亻 + 门 (门 gợi âm mén)."},
  {zi:[["田","nán",1],["人","rén",0]],full:"男人",py:"nánrén",vi:"đàn ông",ans:1,np:[],w:[["男人","nánrén"]],why:"男 = 田 (ruộng) + 力 (sức): người dùng sức làm ruộng."},
  {zi:[["女","jiě",1],["姐","jie",0]],full:"姐姐",py:"jiějie",vi:"chị gái",ans:0,np:[],w:[["姐姐","jiějie"]],why:"姐 = 女 + 且 (且 gợi âm)."}]},

 {sk:"viet",no:2,type:"write",vi:"Viết chữ Hán vào chỗ trống theo pinyin.",
  ex:{cn:"我（jiā）有四口人。",py:"Wǒ jiā yǒu sì kǒu rén.",vi:"Nhà tôi có bốn người.",ans:"家"},q:[
  {cn:"今天天气很（lěng），多穿点儿衣服。",py:"Jīntiān tiānqì hěn lěng, duō chuān diǎnr yīfu.",vi:"Hôm nay trời rất lạnh, mặc thêm áo vào.",ans:"冷",np:[],w:[["冷","lěng"]]},
  {cn:"我（xiǎng）去中国学习汉语。",py:"Wǒ xiǎng qù Zhōngguó xuéxí Hànyǔ.",vi:"Tôi muốn sang Trung Quốc học tiếng Trung.",ans:"想",np:["一03"],w:[["想","xiǎng"]]},
  {cn:"这个（zì）怎么读？",py:"Zhège zì zěnme dú?",vi:"Chữ này đọc thế nào?",ans:"字",np:["一46"],w:[["字","zì"]]},
  {cn:"他是我的好朋（yǒu）。",py:"Tā shì wǒ de hǎo péngyou.",vi:"Anh ấy là bạn tốt của tôi.",ans:"友",np:[],w:[["朋友","péngyou"]]},
  {cn:"我们一起去（chī）饭吧。",py:"Wǒmen yìqǐ qù chī fàn ba.",vi:"Chúng mình cùng đi ăn cơm nhé.",ans:"吃",np:["一22"],w:[["吃","chī"]]}]}
]});
