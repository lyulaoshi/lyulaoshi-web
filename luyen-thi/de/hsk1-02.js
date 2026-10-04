// 考试盒 · Đề mô phỏng HSK 1 — số 02 (tự soạn theo đúng dạng bài của 新版HSK（一级）样题, 汉考国际 2025-12).
// Cùng khuôn với hsk1-01.js: 40 câu = 听力 4 phần × 5 + 阅读 4 phần × 5; phần ghép A–F có câu 示例 (ex) + 5 câu, 6 lựa chọn.
(window.KT_DS=window.KT_DS||[]).push({id:"hsk1-02",cap:1,ten:"Đề HSK 1 · số 02",phut:32,parts:[
 {sk:"nghe",no:1,type:"pic3",vi:"Nghe cụm từ, chọn hình đúng.",q:[
  {say:"看电视",py:"kàn diànshì",vi:"xem ti vi",opts:[{img:"ngu",t:"đi ngủ"},{img:"xemtv",t:"xem ti vi"},{img:"goidien",t:"gọi điện thoại"}],ans:1,np:[],w:[["看","kàn"],["电视","diànshì"]]},
  {say:"在饭店",py:"zài fàndiàn",vi:"ở nhà hàng",opts:[{img:"nhahang",t:"nhà hàng"},{img:"truong",t:"trường học"},{img:"benhvien",t:"bệnh viện"}],ans:0,np:["一16"],w:[["饭店","fàndiàn"]]},
  {say:"三个人",py:"sān gè rén",vi:"ba người",opts:[{img:"docsach",t:"một người đọc sách"},{img:"battay",t:"hai người bắt tay"},{img:"banguoi",t:"ba người bạn"}],ans:2,np:["一23","一08"],w:[["三","sān"],["个","gè"],["人","rén"]],
   why:"Số từ + 个 + danh từ: 三个人 = ba người."},
  {say:"喝水",py:"hē shuǐ",vi:"uống nước",opts:[{img:"uongnuoc",t:"uống nước"},{img:"ancom",t:"ăn cơm"},{img:"tra",t:"chén trà"}],ans:0,np:[],w:[["喝","hē"],["水","shuǐ"]],
   why:"水 shuǐ = nước; 茶 chá = trà. Nghe kỹ âm cuối: shuǐ ≠ chá."},
  {say:"很冷",py:"hěn lěng",vi:"rất lạnh",opts:[{img:"nong",t:"trời nóng"},{img:"lanh",t:"trời lạnh"},{img:"mua",t:"trời mưa"}],ans:1,np:["一30"],w:[["冷","lěng"]],
   why:"冷 lěng = lạnh, 热 rè = nóng."}]},

 {sk:"nghe",no:2,type:"text3",vi:"Nghe câu hỏi, chọn câu trả lời đúng.",q:[
  {say:"你是老师吗？",py:"Nǐ shì lǎoshī ma?",vi:"Bạn là giáo viên à?",opts:[{t:"不是，我是学生。",py:"Bú shì, wǒ shì xuésheng."},{t:"我去学校。",py:"Wǒ qù xuéxiào."},{t:"他叫王明。",py:"Tā jiào Wáng Míng."}],ans:0,np:["一36","一45"],w:[["老师","lǎoshī"],["学生","xuésheng"]],
   why:"Câu hỏi 是……吗？ → trả lời 是 / 不是."},
  {say:"今天几号？",py:"Jīntiān jǐ hào?",vi:"Hôm nay ngày mấy?",opts:[{t:"星期二。",py:"Xīngqī'èr."},{t:"十月一号。",py:"Shí yuè yī hào."},{t:"三点。",py:"Sān diǎn."}],ans:1,np:["一44"],w:[["号","hào"],["今天","jīntiān"]],
   why:"几号 hỏi ngày → trả lời … 号. 星期几 mới hỏi thứ, 几点 hỏi giờ."},
  {say:"你有几个孩子？",py:"Nǐ yǒu jǐ gè háizi?",vi:"Anh có mấy đứa con?",opts:[{t:"两个。",py:"Liǎng gè."},{t:"八岁。",py:"Bā suì."},{t:"在家。",py:"Zài jiā."}],ans:0,np:["一37","一46"],w:[["孩子","háizi"],["几","jǐ"]],
   why:"几个 hỏi số lượng → trả lời số + 个. Dùng 两个, không nói 二个."},
  {say:"你怎么去学校？",py:"Nǐ zěnme qù xuéxiào?",vi:"Bạn đến trường bằng cách nào?",opts:[{t:"很好。",py:"Hěn hǎo."},{t:"坐车去。",py:"Zuò chē qù."},{t:"明天去。",py:"Míngtiān qù."}],ans:1,np:["一46"],w:[["怎么","zěnme"],["坐","zuò"]],
   why:"怎么 + động từ hỏi cách thức → trả lời 坐车 / 坐飞机…"},
  {say:"这是谁的书？",py:"Zhè shì shéi de shū?",vi:"Đây là sách của ai?",opts:[{t:"是书。",py:"Shì shū."},{t:"很好看。",py:"Hěn hǎokàn."},{t:"是我的。",py:"Shì wǒ de."}],ans:2,np:["一46","一20"],w:[["谁","shéi"],["的","de"]],
   why:"谁的 hỏi của ai → trả lời 我的 / 他的…"}]},

 {sk:"nghe",no:3,type:"match",vi:"Nghe hội thoại, chọn hình phù hợp (A–F).",
  ex:{say:"男：你想喝什么？\n女：我想喝茶。",py:"Nǐ xiǎng hē shénme? — Wǒ xiǎng hē chá.",vi:"Bạn muốn uống gì? — Mình muốn uống trà.",ans:0},
  bank:[{img:"tra",t:"chén trà"},{img:"ngu",t:"đi ngủ"},{img:"bacsi",t:"nữ bác sĩ"},{img:"muasam",t:"đi mua sắm"},{img:"banguoi",t:"nhóm bạn học"},{img:"dienthoai",t:"điện thoại di động"}],q:[
  {say:"男：你在哪儿工作？\n女：我在医院工作，我是医生。",py:"Nǐ zài nǎr gōngzuò? — Wǒ zài yīyuàn gōngzuò, wǒ shì yīshēng.",vi:"Chị làm việc ở đâu? — Tôi làm ở bệnh viện, tôi là bác sĩ.",ans:2,np:["一16","一36"],w:[["工作","gōngzuò"],["医生","yīshēng"]]},
  {say:"女：这是你的手机吗？\n男：不是，我的手机在桌子上。",py:"Zhè shì nǐ de shǒujī ma? — Bú shì, wǒ de shǒujī zài zhuōzi shang.",vi:"Đây là điện thoại của bạn à? — Không phải, điện thoại của mình ở trên bàn.",ans:5,np:["一01","一45"],w:[["手机","shǒujī"],["桌子","zhuōzi"]]},
  {say:"男：他们是谁？\n女：他们是我的大学同学。",py:"Tāmen shì shéi? — Tāmen shì wǒ de dàxué tóngxué.",vi:"Họ là ai thế? — Họ là bạn đại học của mình.",ans:4,np:["一46","一36"],w:[["他们","tāmen"],["同学","tóngxué"]]},
  {say:"女：你去哪儿？\n男：我去商店买衣服。",py:"Nǐ qù nǎr? — Wǒ qù shāngdiàn mǎi yīfu.",vi:"Bạn đi đâu đấy? — Mình đi cửa hàng mua quần áo.",ans:3,np:["一46"],w:[["商店","shāngdiàn"],["衣服","yīfu"]]},
  {say:"男：十一点了，睡觉吧。\n女：好，我也想睡觉了。",py:"Shíyī diǎn le, shuìjiào ba. — Hǎo, wǒ yě xiǎng shuìjiào le.",vi:"11 giờ rồi, đi ngủ thôi. — Ừ, em cũng buồn ngủ rồi.",ans:1,np:["一22","一40"],w:[["睡觉","shuìjiào"],["也","yě"]]}]},

 {sk:"nghe",no:4,type:"text3",vi:"Nghe câu và câu hỏi, chọn đáp án đúng.",q:[
  {say:"我今天很忙，没时间吃饭。\n问：他今天没时间做什么？",py:"Wǒ jīntiān hěn máng, méi shíjiān chī fàn. Wèn: Tā jīntiān méi shíjiān zuò shénme?",vi:"Hôm nay tôi rất bận, không có thời gian ăn cơm. Hỏi: Hôm nay anh ấy không có thời gian làm gì?",
   opts:[{t:"吃饭",py:"chī fàn"},{t:"上班",py:"shàngbān"},{t:"看书",py:"kàn shū"}],ans:0,np:["一14","一46"],w:[["忙","máng"],["时间","shíjiān"]],why:"没时间 + động từ = không có thời gian làm gì: 没时间吃饭."},
  {say:"我家有四口人：爸爸、妈妈、姐姐和我。\n问：他家有几口人？",py:"Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. Wèn: Tā jiā yǒu jǐ kǒu rén?",vi:"Nhà tôi có bốn người: bố, mẹ, chị gái và tôi. Hỏi: Nhà anh ấy có mấy người?",
   opts:[{t:"三口",py:"sān kǒu"},{t:"四口",py:"sì kǒu"},{t:"五口",py:"wǔ kǒu"}],ans:1,np:["一08","一37"],w:[["口","kǒu"],["姐姐","jiějie"]],
   why:"四 sì (4) và 十 shí (10) dễ nghe nhầm. Đếm lại: 爸爸、妈妈、姐姐、我 = 4 người."},
  {say:"明天上午九点我去医院。\n问：他明天几点去医院？",py:"Míngtiān shàngwǔ jiǔ diǎn wǒ qù yīyuàn. Wèn: Tā míngtiān jǐ diǎn qù yīyuàn?",vi:"9 giờ sáng mai tôi đi bệnh viện. Hỏi: Mai mấy giờ anh ấy đi bệnh viện?",
   opts:[{t:"下午九点",py:"xiàwǔ jiǔ diǎn"},{t:"上午十点",py:"shàngwǔ shí diǎn"},{t:"上午九点",py:"shàngwǔ jiǔ diǎn"}],ans:2,np:["一44"],w:[["上午","shàngwǔ"],["医院","yīyuàn"]],
   why:"Giờ trong tiếng Trung: buổi + giờ (上午九点). Phải nghe cả 上午 / 下午."},
  {say:"我的汉语老师是中国人，她家在北京。\n问：汉语老师家在哪儿？",py:"Wǒ de Hànyǔ lǎoshī shì Zhōngguó rén, tā jiā zài Běijīng. Wèn: Hànyǔ lǎoshī jiā zài nǎr?",vi:"Cô giáo tiếng Trung của tôi là người Trung Quốc, nhà cô ở Bắc Kinh. Hỏi: Nhà cô giáo ở đâu?",
   opts:[{t:"学校",py:"xuéxiào"},{t:"北京",py:"Běijīng"},{t:"医院",py:"yīyuàn"}],ans:1,np:["一16","一46"],w:[["中国","Zhōngguó"],["北京","Běijīng"]]},
  {say:"我女儿想买一个新电脑。\n问：他女儿想买什么？",py:"Wǒ nǚ'ér xiǎng mǎi yí gè xīn diànnǎo. Wèn: Tā nǚ'ér xiǎng mǎi shénme?",vi:"Con gái tôi muốn mua một cái máy tính mới. Hỏi: Con gái anh ấy muốn mua gì?",
   opts:[{t:"衣服",py:"yīfu"},{t:"手机",py:"shǒujī"},{t:"电脑",py:"diànnǎo"}],ans:2,np:["一03"],w:[["电脑","diànnǎo"],["新","xīn"]]}]},

 {sk:"doc",no:1,type:"match",vi:"Đọc câu, chọn hình phù hợp (A–F).",
  ex:{cn:"我坐出租车去上班。",py:"Wǒ zuò chūzūchē qù shàngbān.",vi:"Tôi đi taxi đi làm.",ans:1},
  bank:[{img:"thaygiao",t:"lớp học"},{img:"taxi",t:"xe taxi"},{img:"sieuthi",t:"siêu thị"},{img:"docsach",t:"đọc sách"},{img:"benhnhan",t:"người bệnh nằm viện"},{img:"nhahang",t:"nhà hàng"}],q:[
  {cn:"他生病了，在医院休息。",py:"Tā shēngbìng le, zài yīyuàn xiūxi.",vi:"Anh ấy bị ốm, đang nằm nghỉ ở bệnh viện.",ans:4,np:["一40","一16"],w:[["生病","shēngbìng"],["休息","xiūxi"]]},
  {cn:"我们去饭店吃饭吧。",py:"Wǒmen qù fàndiàn chī fàn ba.",vi:"Chúng mình đi nhà hàng ăn cơm nhé.",ans:5,np:["一22"],w:[["饭店","fàndiàn"],["吃饭","chī fàn"]]},
  {cn:"学生们在上课。",py:"Xuéshengmen zài shàngkè.",vi:"Các học sinh đang học bài trên lớp.",ans:0,np:["一42"],w:[["学生","xuésheng"],["上课","shàngkè"]],why:"在 + động từ = đang làm gì: 在上课 = đang học (trên lớp)."},
  {cn:"她在商店买东西。",py:"Tā zài shāngdiàn mǎi dōngxi.",vi:"Cô ấy đang mua đồ ở cửa hàng.",ans:2,np:["一16"],w:[["商店","shāngdiàn"],["东西","dōngxi"]]},
  {cn:"她很喜欢看书。",py:"Tā hěn xǐhuan kàn shū.",vi:"Cô ấy rất thích đọc sách.",ans:3,np:["一09"],w:[["喜欢","xǐhuan"],["书","shū"]]}]},

 {sk:"doc",no:2,type:"match",vi:"Chọn câu trả lời phù hợp (A–F).",
  ex:{cn:"你好吗？",py:"Nǐ hǎo ma?",vi:"Bạn có khoẻ không?",ans:2},
  bank:[{t:"在我家后边。",py:"Zài wǒ jiā hòubian.",vi:"Ở phía sau nhà tôi."},{t:"八块。",py:"Bā kuài.",vi:"8 tệ."},{t:"很好，谢谢！",py:"Hěn hǎo, xièxie!",vi:"Rất khoẻ, cảm ơn!"},{t:"好，再见！",py:"Hǎo, zàijiàn!",vi:"Được, tạm biệt!"},{t:"我想喝水。",py:"Wǒ xiǎng hē shuǐ.",vi:"Tôi muốn uống nước."},{t:"我去看朋友了。",py:"Wǒ qù kàn péngyou le.",vi:"Tôi đi thăm bạn."}],q:[
  {cn:"你的学校在哪儿？",py:"Nǐ de xuéxiào zài nǎr?",vi:"Trường của bạn ở đâu?",ans:0,np:["一01","一46"],w:[["后边","hòubian"],["学校","xuéxiào"]],why:"在 + nơi chốn + 后边 = ở phía sau …"},
  {cn:"你想喝什么？",py:"Nǐ xiǎng hē shénme?",vi:"Bạn muốn uống gì?",ans:4,np:["一03"],w:[["想","xiǎng"],["喝","hē"]]},
  {cn:"你昨天去哪儿了？",py:"Nǐ zuótiān qù nǎr le?",vi:"Hôm qua bạn đi đâu?",ans:5,np:["一21","一46"],w:[["昨天","zuótiān"],["朋友","péngyou"]],why:"Hỏi việc đã xảy ra (昨天…了) → trả lời cũng có 了."},
  {cn:"这个多少钱？",py:"Zhège duōshao qián?",vi:"Cái này bao nhiêu tiền?",ans:1,np:["一43"],w:[["多少","duōshao"],["钱","qián"]]},
  {cn:"明天见！",py:"Míngtiān jiàn!",vi:"Mai gặp lại nhé!",ans:3,np:[],w:[["再见","zàijiàn"],["明天","míngtiān"]]}]},

 {sk:"doc",no:3,type:"match",vi:"Chọn từ điền vào chỗ trống (A–F).",
  ex:{cn:"我（　）喜欢学习汉语。",py:"Wǒ (　) xǐhuan xuéxí Hànyǔ.",vi:"Tôi rất thích học tiếng Trung.",ans:1},
  bank:[{t:"个",py:"gè"},{t:"很",py:"hěn"},{t:"去",py:"qù"},{t:"都",py:"dōu"},{t:"呢",py:"ne"},{t:"和",py:"hé"}],q:[
  {cn:"我们（　）是大学生。",py:"Wǒmen (　) shì dàxuéshēng.",vi:"Chúng tôi đều là sinh viên.",ans:3,np:["一10"],w:[["都","dōu"],["大学生","dàxuéshēng"]],why:"都 đứng sau chủ ngữ số nhiều, trước động từ: 我们都是…"},
  {cn:"我（　）妈妈去商店。",py:"Wǒ (　) māma qù shāngdiàn.",vi:"Tôi và mẹ đi cửa hàng.",ans:5,np:["一17"],w:[["和","hé"],["商店","shāngdiàn"]],why:"A 和 B + động từ = A và B cùng làm gì."},
  {cn:"我是王明，你（　）？",py:"Wǒ shì Wáng Míng, nǐ (　)?",vi:"Tôi là Vương Minh, còn bạn?",ans:4,np:["一22"],w:[["呢","ne"]],why:"Danh từ / đại từ + 呢？ = còn … thì sao? (hỏi lại câu vừa nói)."},
  {cn:"这（　）杯子是谁的？",py:"Zhè (　) bēizi shì shéi de?",vi:"Cái cốc này là của ai?",ans:0,np:["一08","一06"],w:[["杯子","bēizi"],["个","gè"]]},
  {cn:"明天我（　）北京。",py:"Míngtiān wǒ (　) Běijīng.",vi:"Ngày mai tôi đi Bắc Kinh.",ans:2,np:[],w:[["去","qù"],["明天","míngtiān"]]}]},

 {sk:"doc",no:4,type:"text3",vi:"Đọc câu, trả lời câu hỏi <svg class='lli' aria-hidden='true'><use href='/chung/ic.svg?v=893338cb#sao'/></svg>.",q:[
  {cn:"我叫李小月，今年十八岁，是大学生。",py:"Wǒ jiào Lǐ Xiǎoyuè, jīnnián shíbā suì, shì dàxuéshēng.",vi:"Tôi tên là Lý Tiểu Nguyệt, năm nay 18 tuổi, là sinh viên.",
   star:"李小月：",spy:"Lǐ Xiǎoyuè:",svi:"Lý Tiểu Nguyệt:",opts:[{t:"是老师",py:"shì lǎoshī"},{t:"十八岁",py:"shíbā suì"},{t:"是医生",py:"shì yīshēng"}],ans:1,np:["一36"],w:[["今年","jīnnián"],["大学生","dàxuéshēng"]]},
  {cn:"今天是星期天，我不去学校，在家看书。",py:"Jīntiān shì xīngqītiān, wǒ bú qù xuéxiào, zài jiā kàn shū.",vi:"Hôm nay là Chủ nhật, tôi không đến trường, ở nhà đọc sách.",
   star:"他今天：",spy:"Tā jīntiān:",svi:"Hôm nay anh ấy:",opts:[{t:"去学校",py:"qù xuéxiào"},{t:"上课",py:"shàngkè"},{t:"在家",py:"zài jiā"}],ans:2,np:["一14","一16"],w:[["星期天","xīngqītiān"],["在家","zài jiā"]],
   why:"不去学校 = không đến trường → loại 去学校, 上课. Câu nói rõ 在家看书."},
  {cn:"我爸爸是医生，妈妈是老师。",py:"Wǒ bàba shì yīshēng, māma shì lǎoshī.",vi:"Bố tôi là bác sĩ, mẹ tôi là giáo viên.",
   star:"他妈妈做什么工作？",spy:"Tā māma zuò shénme gōngzuò?",svi:"Mẹ anh ấy làm nghề gì?",opts:[{t:"老师",py:"lǎoshī"},{t:"医生",py:"yīshēng"},{t:"学生",py:"xuésheng"}],ans:0,np:["一36","一46"],w:[["爸爸","bàba"],["妈妈","māma"]],
   why:"Câu hỏi về 妈妈. 医生 là nghề của 爸爸 — bẫy khi đọc vội."},
  {cn:"这个杯子三十块，那个杯子二十块。",py:"Zhège bēizi sānshí kuài, nàge bēizi èrshí kuài.",vi:"Cái cốc này 30 tệ, cái cốc kia 20 tệ.",
   star:"那个杯子多少钱？",spy:"Nàge bēizi duōshao qián?",svi:"Cái cốc kia bao nhiêu tiền?",opts:[{t:"三十块",py:"sānshí kuài"},{t:"二十块",py:"èrshí kuài"},{t:"十块",py:"shí kuài"}],ans:1,np:["一43","一06"],w:[["那个","nàge"],["块","kuài"]],
   why:"这个 = cái này (30 tệ), 那个 = cái kia (20 tệ)."},
  {cn:"外边下雨了，你开车去吧。",py:"Wàibian xià yǔ le, nǐ kāi chē qù ba.",vi:"Bên ngoài mưa rồi, anh lái xe đi nhé.",
   star:"外边：",spy:"Wàibian:",svi:"Bên ngoài:",opts:[{t:"下雨了",py:"xià yǔ le"},{t:"很热",py:"hěn rè"},{t:"很好",py:"hěn hǎo"}],ans:0,np:["一40","一22"],w:[["外边","wàibian"],["下雨","xià yǔ"],["开车","kāi chē"]]}]}
]});
