// 考试盒 · Đề mô phỏng HSK 1 — số 01 (tự soạn theo đúng dạng bài của 新版HSK（一级）样题, 汉考国际 2025-12).
// 40 câu = 听力 4 phần × 5 + 阅读 4 phần × 5. Mỗi câu: np = mã ngữ pháp HSK (shared/hsk/ngu-phap.js), w = [chữ, pinyin] từ HSK.
// Kiểu phần: pic3 (3 hình), text3 (3 lựa chọn chữ), match (chung 1 bảng A–F: 1 lựa chọn cho câu 示例 ex — có sẵn đáp án, không tính điểm — và 5 cho 5 câu, như đề thật).
// Hình: img = tên ảnh trong img/ (ảnh Pexels, nguồn ở img/nguon.txt); t = nghĩa tiếng Việt của hình, chỉ hiện khi chấm / xem lại.
(window.KT_DS=window.KT_DS||[]).push({id:"hsk1-01",cap:1,ten:"Đề HSK 1 · số 01",phut:32,parts:[
 {sk:"nghe",no:1,type:"pic3",vi:"Nghe cụm từ, chọn hình đúng.",q:[
  {say:"喝茶",py:"hē chá",vi:"uống trà",opts:[{img:"tra",t:"chén trà"},{img:"sach",t:"sách"},{img:"oto",t:"ô tô"}],ans:0,np:[],w:[["喝","hē"],["茶","chá"]]},
  {say:"下雨了",py:"xià yǔ le",vi:"trời mưa rồi",opts:[{img:"nang",t:"trời nắng"},{img:"mua",t:"trời mưa"},{img:"truong",t:"trường học"}],ans:1,np:["一40"],w:[["下雨","xià yǔ"]],
   why:"了 cuối câu báo tình hình thay đổi: (trước không mưa) bây giờ mưa rồi."},
  {say:"两个杯子",py:"liǎng gè bēizi",vi:"hai cái cốc",opts:[{img:"haicoc",t:"hai cái cốc"},{img:"haiqua",t:"hai quả táo"},{img:"dienthoai",t:"điện thoại"}],ans:0,np:["一07","一23"],w:[["两","liǎng"],["杯子","bēizi"]],
   why:"Trước lượng từ dùng 两, không dùng 二: 两个杯子."},
  {say:"在医院",py:"zài yīyuàn",vi:"ở bệnh viện",opts:[{img:"benhvien",t:"bệnh viện"},{img:"truong",t:"trường học"},{img:"sieuthi",t:"siêu thị"}],ans:0,np:["一16"],w:[["医院","yīyuàn"]]},
  {say:"打电话",py:"dǎ diànhuà",vi:"gọi điện thoại",opts:[{img:"xemtv",t:"xem ti vi"},{img:"goidien",t:"gọi điện thoại"},{img:"ancom",t:"ăn cơm"}],ans:1,np:[],w:[["打电话","dǎ diànhuà"]]}]},

 {sk:"nghe",no:2,type:"text3",vi:"Nghe câu hỏi, chọn câu trả lời đúng.",q:[
  {say:"你叫什么名字？",py:"Nǐ jiào shénme míngzi?",vi:"Bạn tên là gì?",opts:[{t:"我叫大明。",py:"Wǒ jiào Dàmíng."},{t:"我是学生。",py:"Wǒ shì xuésheng."},{t:"我很好。",py:"Wǒ hěn hǎo."}],ans:0,np:["一46"],w:[["叫","jiào"],["名字","míngzi"]]},
  {say:"你今年多大？",py:"Nǐ jīnnián duō dà?",vi:"Năm nay bạn bao nhiêu tuổi?",opts:[{t:"八点。",py:"Bā diǎn."},{t:"二十岁。",py:"Èrshí suì."},{t:"三个。",py:"Sān gè."}],ans:1,np:["一46"],w:[["今年","jīnnián"],["岁","suì"]],
   why:"多大 hỏi tuổi → trả lời bằng số + 岁."},
  {say:"你想吃什么？",py:"Nǐ xiǎng chī shénme?",vi:"Bạn muốn ăn gì?",opts:[{t:"米饭。",py:"Mǐfàn."},{t:"明天。",py:"Míngtiān."},{t:"医生。",py:"Yīshēng."}],ans:0,np:["一03","一46"],w:[["想","xiǎng"],["米饭","mǐfàn"]]},
  {say:"你家在哪儿？",py:"Nǐ jiā zài nǎr?",vi:"Nhà bạn ở đâu?",opts:[{t:"很好吃。",py:"Hěn hǎochī."},{t:"在北京。",py:"Zài Běijīng."},{t:"星期三。",py:"Xīngqīsān."}],ans:1,np:["一46","一16"],w:[["哪儿","nǎr"],["北京","Běijīng"]]},
  {say:"你喝不喝水？",py:"Nǐ hē bu hē shuǐ?",vi:"Bạn có uống nước không?",opts:[{t:"不喝，谢谢。",py:"Bù hē, xièxie."},{t:"我是老师。",py:"Wǒ shì lǎoshī."},{t:"在学校。",py:"Zài xuéxiào."}],ans:0,np:["一48"],w:[["喝","hē"],["水","shuǐ"]],
   why:"V 不 V là câu hỏi chính phản → trả lời bằng chính động từ đó: 喝 / 不喝."}]},

 {sk:"nghe",no:3,type:"match",vi:"Nghe hội thoại, chọn hình phù hợp (A–F).",
  ex:{say:"女：中午你想吃什么？\n男：我想吃米饭。",py:"Zhōngwǔ nǐ xiǎng chī shénme? — Wǒ xiǎng chī mǐfàn.",vi:"Trưa nay bạn muốn ăn gì? — Mình muốn ăn cơm.",ans:0},
  bank:[{img:"ancom",t:"bát cơm"},{img:"battay",t:"chào hỏi, làm quen"},{img:"hoaqua",t:"hoa quả"},{img:"docsach",t:"đọc sách"},{img:"ngu",t:"đi ngủ"},{img:"xebuyt",t:"xe buýt"}],q:[
  {say:"女：你在做什么？\n男：我在看书呢。",py:"Nǐ zài zuò shénme? — Wǒ zài kàn shū ne.",vi:"Bạn đang làm gì thế? — Mình đang đọc sách.",ans:3,np:["一42"],w:[["做","zuò"],["看书","kàn shū"]],
   why:"在 + động từ + 呢 = đang làm gì. 看书 = đọc sách."},
  {say:"男：你好！\n女：你好，很高兴认识你！",py:"Nǐ hǎo! — Nǐ hǎo, hěn gāoxìng rènshi nǐ!",vi:"Chào bạn! — Chào bạn, rất vui được làm quen!",ans:1,np:[],w:[["高兴","gāoxìng"],["认识","rènshi"]]},
  {say:"女：你想吃水果吗？\n男：想，我很爱吃水果。",py:"Nǐ xiǎng chī shuǐguǒ ma? — Xiǎng, wǒ hěn ài chī shuǐguǒ.",vi:"Bạn muốn ăn hoa quả không? — Muốn, mình rất thích ăn hoa quả.",ans:2,np:["一45","一03"],w:[["水果","shuǐguǒ"],["爱","ài"]]},
  {say:"男：车来了，我们上车吧。\n女：好的。",py:"Chē lái le, wǒmen shàng chē ba. — Hǎo de.",vi:"Xe đến rồi, mình lên xe thôi. — Được.",ans:5,np:["一22"],w:[["车","chē"],["上车","shàng chē"]]},
  {say:"女：太晚了，你去睡觉吧。\n男：好，明天见。",py:"Tài wǎn le, nǐ qù shuìjiào ba. — Hǎo, míngtiān jiàn.",vi:"Muộn quá rồi, con đi ngủ đi. — Vâng, mai gặp lại.",ans:4,np:["一35","一34"],w:[["晚","wǎn"],["睡觉","shuìjiào"]]}]},

 {sk:"nghe",no:4,type:"text3",vi:"Nghe câu và câu hỏi, chọn đáp án đúng.",q:[
  {say:"下午我去商店买东西。\n问：他下午去哪儿？",py:"Xiàwǔ wǒ qù shāngdiàn mǎi dōngxi. Wèn: Tā xiàwǔ qù nǎr?",vi:"Buổi chiều tôi đi cửa hàng mua đồ. Hỏi: Chiều nay anh ấy đi đâu?",
   opts:[{t:"商店",py:"shāngdiàn"},{t:"医院",py:"yīyuàn"},{t:"学校",py:"xuéxiào"}],ans:0,np:["一46"],w:[["商店","shāngdiàn"],["买","mǎi"],["东西","dōngxi"]]},
  {say:"我有一个哥哥，他是医生。\n问：他哥哥做什么工作？",py:"Wǒ yǒu yí gè gēge, tā shì yīshēng. Wèn: Tā gēge zuò shénme gōngzuò?",vi:"Tôi có một anh trai, anh ấy là bác sĩ. Hỏi: Anh trai anh ấy làm nghề gì?",
   opts:[{t:"老师",py:"lǎoshī"},{t:"医生",py:"yīshēng"},{t:"学生",py:"xuésheng"}],ans:1,np:["一37","一36"],w:[["哥哥","gēge"],["医生","yīshēng"],["工作","gōngzuò"]]},
  {say:"今天星期五，明天我不上课。\n问：明天星期几？",py:"Jīntiān xīngqīwǔ, míngtiān wǒ bú shàngkè. Wèn: Míngtiān xīngqī jǐ?",vi:"Hôm nay thứ Sáu, ngày mai tôi không đi học. Hỏi: Ngày mai thứ mấy?",
   opts:[{t:"星期四",py:"xīngqīsì"},{t:"星期五",py:"xīngqīwǔ"},{t:"星期六",py:"xīngqīliù"}],ans:2,np:["一44"],w:[["星期","xīngqī"],["上课","shàngkè"]],
   why:"星期五 là thứ Sáu → ngày mai là 星期六 (thứ Bảy). Người Việt hay nhầm vì 星期一 là thứ Hai."},
  {say:"这个杯子三十块钱。\n问：杯子多少钱？",py:"Zhège bēizi sānshí kuài qián. Wèn: Bēizi duōshao qián?",vi:"Cái cốc này 30 tệ. Hỏi: Cái cốc bao nhiêu tiền?",
   opts:[{t:"三块",py:"sān kuài"},{t:"十三块",py:"shísān kuài"},{t:"三十块",py:"sānshí kuài"}],ans:2,np:["一43"],w:[["块","kuài"],["钱","qián"],["多少","duōshao"]],
   why:"三十 = 30 (3 chục), 十三 = 13. Nghe kỹ chữ 十 đứng trước hay sau."},
  {say:"我妈妈做的饭很好吃，今天我在家吃饭。\n问：他今天在哪儿吃饭？",py:"Wǒ māma zuò de fàn hěn hǎochī, jīntiān wǒ zài jiā chī fàn. Wèn: Tā jīntiān zài nǎr chī fàn?",vi:"Cơm mẹ tôi nấu rất ngon, hôm nay tôi ăn cơm ở nhà. Hỏi: Hôm nay anh ấy ăn cơm ở đâu?",
   opts:[{t:"在家",py:"zài jiā"},{t:"在学校",py:"zài xuéxiào"},{t:"在朋友家",py:"zài péngyou jiā"}],ans:0,np:["一16"],w:[["今天","jīntiān"],["饭","fàn"]]}]},

 {sk:"doc",no:1,type:"match",vi:"Đọc câu, chọn hình phù hợp (A–F).",
  ex:{cn:"他在打电话。",py:"Tā zài dǎ diànhuà.",vi:"Anh ấy đang gọi điện thoại.",ans:5},
  bank:[{img:"bacsi",t:"nữ bác sĩ"},{img:"ancom",t:"bát cơm"},{img:"thaygiao",t:"thầy giáo đứng lớp"},{img:"nong",t:"trời nóng"},{img:"muasam",t:"đi mua sắm"},{img:"goidien",t:"gọi điện thoại"}],q:[
  {cn:"我很喜欢吃米饭。",py:"Wǒ hěn xǐhuan chī mǐfàn.",vi:"Tôi rất thích ăn cơm.",ans:1,np:["一09"],w:[["喜欢","xǐhuan"],["米饭","mǐfàn"]]},
  {cn:"今天太热了！",py:"Jīntiān tài rè le!",vi:"Hôm nay nóng quá!",ans:3,np:["一35"],w:[["热","rè"],["太","tài"]],why:"太 + tính từ + 了！ = … quá!"},
  {cn:"我们去买东西吧。",py:"Wǒmen qù mǎi dōngxi ba.",vi:"Chúng mình đi mua đồ nhé.",ans:4,np:["一22"],w:[["买","mǎi"],["东西","dōngxi"]]},
  {cn:"他是我们的汉语老师。",py:"Tā shì wǒmen de Hànyǔ lǎoshī.",vi:"Thầy ấy là giáo viên tiếng Trung của chúng tôi.",ans:2,np:["一36","一20"],w:[["汉语","Hànyǔ"],["老师","lǎoshī"]]},
  {cn:"她在医院工作。",py:"Tā zài yīyuàn gōngzuò.",vi:"Cô ấy làm việc ở bệnh viện.",ans:0,np:["一16"],w:[["医院","yīyuàn"],["工作","gōngzuò"]],why:"在 + nơi chốn đứng TRƯỚC động từ: 在医院工作 (không nói 工作在医院)."}]},

 {sk:"doc",no:2,type:"match",vi:"Chọn câu trả lời phù hợp (A–F).",
  ex:{cn:"请喝茶。",py:"Qǐng hē chá.",vi:"Mời anh uống trà.",ans:0},
  bank:[{t:"好的，谢谢！",py:"Hǎo de, xièxie!",vi:"Được, cảm ơn!"},{t:"八点半。",py:"Bā diǎn bàn.",vi:"8 giờ rưỡi."},{t:"不客气。",py:"Bú kèqi.",vi:"Không có gì."},{t:"他在家里。",py:"Tā zài jiā li.",vi:"Thầy ấy ở nhà."},{t:"我是越南人。",py:"Wǒ shì Yuènán rén.",vi:"Tôi là người Việt Nam."},{t:"没关系。",py:"Méi guānxi.",vi:"Không sao."}],q:[
  {cn:"你是哪国人？",py:"Nǐ shì nǎ guó rén?",vi:"Bạn là người nước nào?",ans:4,np:["一46"],w:[["国","guó"]]},
  {cn:"现在几点？",py:"Xiànzài jǐ diǎn?",vi:"Bây giờ mấy giờ?",ans:1,np:["一44"],w:[["现在","xiànzài"],["点","diǎn"]]},
  {cn:"王老师在哪儿？",py:"Wáng lǎoshī zài nǎr?",vi:"Thầy Vương ở đâu?",ans:3,np:["一01"],w:[["家","jiā"],["哪儿","nǎr"]],why:"Hỏi 在哪儿 → trả lời 在 + nơi chốn (+ 里/上…)."},
  {cn:"谢谢你！",py:"Xièxie nǐ!",vi:"Cảm ơn bạn!",ans:2,np:[],w:[["谢谢","xièxie"],["不客气","bú kèqi"]]},
  {cn:"对不起，我来晚了。",py:"Duìbuqǐ, wǒ lái wǎn le.",vi:"Xin lỗi, tôi đến muộn.",ans:5,np:[],w:[["对不起","duìbuqǐ"],["没关系","méi guānxi"]],why:"对不起 → 没关系; 谢谢 → 不客气. Hai cặp này hay bị đảo."}]},

 {sk:"doc",no:3,type:"match",vi:"Chọn từ điền vào chỗ trống (A–F).",
  ex:{cn:"我（　）北京学习汉语。",py:"Wǒ (　) Běijīng xuéxí Hànyǔ.",vi:"Tôi học tiếng Trung ở Bắc Kinh.",ans:3},
  bank:[{t:"喝",py:"hē"},{t:"岁",py:"suì"},{t:"本",py:"běn"},{t:"在",py:"zài"},{t:"叫",py:"jiào"},{t:"没",py:"méi"}],q:[
  {cn:"我女儿今年五（　）了。",py:"Wǒ nǚ'ér jīnnián wǔ (　) le.",vi:"Con gái tôi năm nay 5 tuổi rồi.",ans:1,np:["一40"],w:[["女儿","nǚ'ér"],["岁","suì"]]},
  {cn:"我想（　）一杯水。",py:"Wǒ xiǎng (　) yì bēi shuǐ.",vi:"Tôi muốn uống một cốc nước.",ans:0,np:["一03","一08"],w:[["杯","bēi"],["水","shuǐ"]]},
  {cn:"你（　）什么名字？",py:"Nǐ (　) shénme míngzi?",vi:"Bạn tên là gì?",ans:4,np:["一46"],w:[["叫","jiào"],["名字","míngzi"]]},
  {cn:"这（　）书是我的。",py:"Zhè (　) shū shì wǒ de.",vi:"Quyển sách này là của tôi.",ans:2,np:["一08","一06"],w:[["本","běn"],["书","shū"]],why:"这 / 那 + lượng từ + danh từ: 这本书. Sách dùng lượng từ 本."},
  {cn:"我昨天（　）去学校。",py:"Wǒ zuótiān (　) qù xuéxiào.",vi:"Hôm qua tôi không đi học.",ans:5,np:["一14"],w:[["昨天","zuótiān"],["学校","xuéxiào"]],why:"Việc đã qua (昨天) mà không xảy ra → 没, không dùng 不."}]},

 {sk:"doc",no:4,type:"text3",vi:"Đọc câu, trả lời câu hỏi <svg class='lli' aria-hidden='true'><use href='/chung/ic.svg#sao'/></svg>.",q:[
  {cn:"我明天上午去看朋友，下午回家。",py:"Wǒ míngtiān shàngwǔ qù kàn péngyou, xiàwǔ huí jiā.",vi:"Sáng mai tôi đi thăm bạn, chiều về nhà.",
   star:"他明天下午：",spy:"Tā míngtiān xiàwǔ:",svi:"Chiều mai anh ấy:",opts:[{t:"去看朋友",py:"qù kàn péngyou"},{t:"回家",py:"huí jiā"},{t:"去学校",py:"qù xuéxiào"}],ans:1,np:["一44"],w:[["上午","shàngwǔ"],["下午","xiàwǔ"],["回家","huí jiā"]],
   why:"Câu hỏi về 下午 (chiều) → 下午回家. 去看朋友 là việc buổi sáng (上午)."},
  {cn:"这个饭店的菜很好吃，也不贵。",py:"Zhège fàndiàn de cài hěn hǎochī, yě bú guì.",vi:"Món ở nhà hàng này rất ngon, lại không đắt.",
   star:"这个饭店的菜：",spy:"Zhège fàndiàn de cài:",svi:"Món ăn ở nhà hàng này:",opts:[{t:"很贵",py:"hěn guì"},{t:"不好吃",py:"bù hǎochī"},{t:"很好吃",py:"hěn hǎochī"}],ans:2,np:["一13","一30"],w:[["饭店","fàndiàn"],["菜","cài"],["贵","guì"]]},
  {cn:"小王的哥哥是医生，他在医院工作。",py:"Xiǎo Wáng de gēge shì yīshēng, tā zài yīyuàn gōngzuò.",vi:"Anh trai Tiểu Vương là bác sĩ, anh ấy làm việc ở bệnh viện.",
   star:"小王的哥哥做什么工作？",spy:"Xiǎo Wáng de gēge zuò shénme gōngzuò?",svi:"Anh trai Tiểu Vương làm nghề gì?",opts:[{t:"医生",py:"yīshēng"},{t:"老师",py:"lǎoshī"},{t:"学生",py:"xuésheng"}],ans:0,np:["一36","一16"],w:[["医生","yīshēng"],["医院","yīyuàn"]],
   why:"是 + nghề nghiệp: 哥哥是医生. Câu sau 在医院工作 cũng cho biết anh ấy làm ở bệnh viện."},
  {cn:"我和同学坐飞机去北京。",py:"Wǒ hé tóngxué zuò fēijī qù Běijīng.",vi:"Tôi và bạn học đi máy bay đến Bắc Kinh.",
   star:"他怎么去北京？",spy:"Tā zěnme qù Běijīng?",svi:"Anh ấy đi Bắc Kinh bằng gì?",opts:[{t:"坐飞机",py:"zuò fēijī"},{t:"坐车",py:"zuò chē"},{t:"开车",py:"kāi chē"}],ans:0,np:["一17","一46"],w:[["同学","tóngxué"],["坐","zuò"],["飞机","fēijī"]]},
  {cn:"我女儿很喜欢看书，她有很多书。",py:"Wǒ nǚ'ér hěn xǐhuan kàn shū, tā yǒu hěn duō shū.",vi:"Con gái tôi rất thích đọc sách, cháu có rất nhiều sách.",
   star:"他女儿：",spy:"Tā nǚ'ér:",svi:"Con gái anh ấy:",opts:[{t:"爱看书",py:"ài kàn shū"},{t:"不喜欢书",py:"bù xǐhuan shū"},{t:"是老师",py:"shì lǎoshī"}],ans:0,np:["一37"],w:[["喜欢","xǐhuan"],["书","shū"]],
   why:"很喜欢看书 = 爱看书 (thích đọc sách). Đề thường đổi cách nói, không lặp nguyên từ trong câu."}]}
]});
