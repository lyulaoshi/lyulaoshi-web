// 阅读盒 — bài tự đọc. Mỗi bài: LD_BAI.push({...}).
//   id (tên thư mục trong link #id), ten, tenVi, cap (cấp HSK của bài, số lớn nhất), cd (mã chủ đề: theo ../tu-vung/chu-de.js hoặc CD_THEM trong doc.js), sach (mã giáo trình nếu là bài khoá giáo trình)
//   cau: [chữ Hán tách từ bằng dấu cách, pinyin tách đúng từng từ (ghi biến điệu như sách: yí ge), nghĩa Việt, [mã ngữ pháp]]
//   tu:  { từ: nghĩa Việt }  — nghĩa từng từ trong bài (pinyin lấy từ câu; cấp HSK tra ../tro-choi/hsk-words.js)
//   hoi: câu hỏi đọc hiểu {q, vi, opts, dap} · rieng: tên riêng (không tính là từ mới)
// Mã ngữ pháp dạng 一36 → mở /ngu-phap/1-36/ (tên lấy từ ../ngu-phap/hsk-ngu-phap.js).
window.LD_BAI=window.LD_BAI||[];

LD_BAI.push({
  id:"ban-than", ten:"我的好朋友", tenVi:"Người bạn thân của tôi", cap:1, chude:"Bạn bè", cd:"ban-be", rieng:["小月","北京"],
  cau:[
    ["我 有 一 个 好 朋友 ， 她 叫 小月 。","wǒ yǒu yí ge hǎo péngyou ， tā jiào Xiǎoyuè 。","Tôi có một người bạn thân, bạn ấy tên là Tiểu Nguyệt.",["一37","一08"]],
    ["小月 是 中国 人 ， 今年 十九 岁 。","Xiǎoyuè shì Zhōngguó rén ， jīnnián shíjiǔ suì 。","Tiểu Nguyệt là người Trung Quốc, năm nay mười chín tuổi.",["一36"]],
    ["她 是 大学生 ， 在 北京 学习 。","tā shì dàxuéshēng ， zài Běijīng xuéxí 。","Bạn ấy là sinh viên, học ở Bắc Kinh.",["一16"]],
    ["小月 很 喜欢 看 书 ， 也 喜欢 喝 茶 。","Xiǎoyuè hěn xǐhuan kàn shū ， yě xǐhuan hē chá 。","Tiểu Nguyệt rất thích đọc sách, cũng thích uống trà.",["一09","一13"]],
    ["她 常常 请 我 去 她 家 喝 茶 。","tā chángcháng qǐng wǒ qù tā jiā hē chá 。","Bạn ấy thường mời tôi đến nhà bạn ấy uống trà.",["一12"]],
    ["我们 一起 说 汉语 ， 她 帮 我 学 汉字 。","wǒmen yìqǐ shuō Hànyǔ ， tā bāng wǒ xué Hànzì 。","Chúng tôi cùng nói tiếng Trung, bạn ấy giúp tôi học chữ Hán.",["一10"]],
    ["有 小月 在 ， 我 的 汉语 越来越 好 了 。","yǒu Xiǎoyuè zài ， wǒ de Hànyǔ yuèláiyuè hǎo le 。","Có Tiểu Nguyệt ở bên, tiếng Trung của tôi ngày càng tốt lên.",["二44","一40"]]
  ],
  tu:{"我":"tôi","有":"có","一":"một","个":"cái, người (lượng từ)","好":"tốt, hay","朋友":"bạn bè","她":"cô ấy, bạn ấy (nữ)","叫":"tên là, gọi","小月":"Tiểu Nguyệt (tên người)",
      "是":"là","中国":"Trung Quốc","人":"người","今年":"năm nay","十九":"mười chín","岁":"tuổi","大学生":"sinh viên","在":"ở, tại","北京":"Bắc Kinh","学习":"học, học tập",
      "很":"rất","喜欢":"thích","看":"xem, đọc","书":"sách","也":"cũng","喝":"uống","茶":"trà","常常":"thường, thường xuyên","请":"mời","去":"đi, đến","家":"nhà",
      "我们":"chúng tôi","一起":"cùng nhau","说":"nói","汉语":"tiếng Trung","帮":"giúp","学":"học","汉字":"chữ Hán","的":"của","越来越":"càng ngày càng","了":"(rồi — chỉ sự thay đổi)"},
  hoi:[
    {q:"小月是哪国人？",vi:"Tiểu Nguyệt là người nước nào?",opts:["中国人","越南人","美国人"],dap:0},
    {q:"小月喜欢什么？",vi:"Tiểu Nguyệt thích gì?",opts:["看书、喝茶","看电影","做饭"],dap:0},
    {q:"小月帮“我”学什么？",vi:"Tiểu Nguyệt giúp “tôi” học gì?",opts:["汉字","英语","做饭"],dap:0}
  ]
});

LD_BAI.push({
  id:"di-cho", ten:"去商店", tenVi:"Đi cửa hàng", cap:2, chude:"Mua sắm", cd:"mua-sam",
  cau:[
    ["今天 是 星期六 ， 天气 很 好 。","jīntiān shì xīngqīliù ， tiānqì hěn hǎo 。","Hôm nay là thứ Bảy, thời tiết rất đẹp.",["一36"]],
    ["妈妈 和 我 去 商店 买 东西 。","māma hé wǒ qù shāngdiàn mǎi dōngxi 。","Mẹ và tôi đi cửa hàng mua đồ.",["一19"]],
    ["商店 里 人 很 多 ， 东西 也 很 多 。","shāngdiàn li rén hěn duō ， dōngxi yě hěn duō 。","Trong cửa hàng rất đông người, đồ cũng rất nhiều.",["一13"]],
    ["我 想 买 一 件 衣服 ， 妈妈 想 买 水果 。","wǒ xiǎng mǎi yí jiàn yīfu ， māma xiǎng mǎi shuǐguǒ 。","Tôi muốn mua một chiếc áo, mẹ muốn mua hoa quả.",["一03","二10"]],
    ["这 件 衣服 太 贵 了 ， 我 没 买 。","zhè jiàn yīfu tài guì le ， wǒ méi mǎi 。","Chiếc áo này đắt quá, tôi không mua.",["一09"]],
    ["妈妈 买 了 很 多 苹果 ， 一 斤 八 块 钱 。","māma mǎi le hěn duō píngguǒ ， yì jīn bā kuài qián 。","Mẹ mua rất nhiều táo, tám đồng một cân.",["一41"]],
    ["我们 十二 点 回 家 ， 一起 吃 午饭 。","wǒmen shí'èr diǎn huí jiā ， yìqǐ chī wǔfàn 。","Mười hai giờ chúng tôi về nhà, cùng nhau ăn trưa.",["一10"]]
  ],
  tu:{"今天":"hôm nay","是":"là","星期六":"thứ Bảy","天气":"thời tiết","很":"rất","好":"tốt, đẹp","妈妈":"mẹ","和":"và","我":"tôi","去":"đi, đến","商店":"cửa hàng","买":"mua","东西":"đồ, đồ vật",
      "里":"trong","人":"người","多":"nhiều","也":"cũng","想":"muốn","一":"một","件":"chiếc, cái (lượng từ cho áo, việc)","衣服":"quần áo","水果":"hoa quả","这":"này","太":"quá","贵":"đắt","了":"(rồi / quá … — trợ từ)",
      "没":"không (đã không)","苹果":"táo","斤":"cân (0,5 kg)","八":"tám","块":"đồng (tiền)","钱":"tiền","我们":"chúng tôi","十二":"mười hai","点":"giờ","回":"về","家":"nhà","一起":"cùng nhau","吃":"ăn","午饭":"cơm trưa"},
  hoi:[
    {q:"今天星期几？",vi:"Hôm nay thứ mấy?",opts:["星期六","星期天","星期五"],dap:0},
    {q:"那件衣服怎么样？",vi:"Chiếc áo đó thế nào?",opts:["太贵了","很便宜","不好看"],dap:0},
    {q:"妈妈买了什么？",vi:"Mẹ đã mua gì?",opts:["苹果","衣服","茶"],dap:0}
  ]
});

/* ===== Truyện kể – ngụ ngôn (truyện dân gian, viết lại bằng từ vựng theo cấp; cd:"truyen") =====
   tn: thành ngữ {zh, py, vi} · y: ý nghĩa câu chuyện (hiện sau khi đọc xong) */
LD_BAI.push({
  id:"quad-uong-nuoc", ten:"乌鸦喝水", tenVi:"Quạ uống nước", cap:3, cd:"truyen", chude:"Truyện kể",
  y:"Gặp khó đừng vội bỏ cuộc. Chịu khó suy nghĩ, dù là việc nhỏ như thả từng viên sỏi, em cũng sẽ tìm ra cách.",
  cau:[
    ["天气 很 热 ， 一 只 乌鸦 很 渴 ， 想 喝 水 。","tiānqì hěn rè ， yì zhī wūyā hěn kě ， xiǎng hē shuǐ 。","Trời rất nóng, một con quạ rất khát, muốn uống nước.",["一09","一03"]],
    ["它 飞 了 很 久 ， 看见 一 个 瓶子 。","tā fēi le hěn jiǔ ， kànjiàn yí ge píngzi 。","Nó bay rất lâu, nhìn thấy một cái bình.",["一21","三06"]],
    ["瓶子 里 有 水 ， 可是 水 不 多 。","píngzi li yǒu shuǐ ， kěshì shuǐ bù duō 。","Trong bình có nước, nhưng nước không nhiều.",["一37","一14"]],
    ["瓶口 很 小 ， 乌鸦 喝 不 到 水 。","píngkǒu hěn xiǎo ， wūyā hē bu dào shuǐ 。","Miệng bình rất nhỏ, quạ không uống tới nước.",["三48"]],
    ["怎么 办 呢 ？ 乌鸦 想 了 想 。","zěnme bàn ne ？ wūyā xiǎng le xiǎng 。","Làm sao bây giờ? Quạ nghĩ một lúc.",["二04","一22"]],
    ["它 看见 地上 有 很 多 小 石头 。","tā kànjiàn dìshang yǒu hěn duō xiǎo shítou 。","Nó nhìn thấy trên mặt đất có rất nhiều hòn sỏi nhỏ.",["一37"]],
    ["乌鸦 把 小 石头 一 个 一 个 地 放进 瓶子 里 。","wūyā bǎ xiǎo shítou yí ge yí ge de fàngjìn píngzi li 。","Quạ thả từng viên sỏi nhỏ vào trong bình.",["三54","三33"]],
    ["瓶子 里 的 水 越来越 高 。","píngzi li de shuǐ yuèláiyuè gāo 。","Nước trong bình ngày càng dâng cao.",["二44"]],
    ["最后 ， 乌鸦 喝 到 了 水 。","zuìhòu ， wūyā hē dào le shuǐ 。","Cuối cùng, quạ đã uống được nước.",["三46"]]
  ],
  tu:{"天气":"thời tiết","很":"rất","热":"nóng","一":"một","只":"con (lượng từ cho chim, thú nhỏ)","乌鸦":"con quạ","渴":"khát","想":"muốn; nghĩ","喝":"uống","水":"nước",
      "它":"nó (con vật)","飞":"bay","了":"(đã, rồi)","久":"lâu","看见":"nhìn thấy","个":"cái (lượng từ)","瓶子":"cái bình, cái chai","里":"trong","有":"có","可是":"nhưng",
      "不":"không","多":"nhiều","瓶口":"miệng bình","小":"nhỏ","到":"tới, được (bổ ngữ)","怎么":"thế nào","办":"làm, xử lý","呢":"(trợ từ hỏi)","地上":"trên mặt đất",
      "石头":"hòn đá, sỏi","把":"(đưa tân ngữ lên trước động từ)","地":"(trợ từ: một cách…)","放进":"thả vào, bỏ vào","的":"của","越来越":"càng ngày càng","高":"cao","最后":"cuối cùng"},
  hoi:[
    {q:"乌鸦为什么想喝水？",vi:"Vì sao quạ muốn uống nước?",opts:["因为它很渴","因为它很饿","因为水很好喝"],dap:0},
    {q:"瓶子里的水怎么样？",vi:"Nước trong bình thế nào?",opts:["不多","很多","没有水"],dap:0},
    {q:"乌鸦把什么放进瓶子里？",vi:"Quạ thả cái gì vào trong bình?",opts:["小石头","水果","小鸟"],dap:0}
  ]
});

LD_BAI.push({
  id:"rua-tho", ten:"龟兔赛跑", tenVi:"Rùa và thỏ thi chạy", cap:3, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"龟兔赛跑",py:"guī tù sài pǎo",vi:"rùa và thỏ thi chạy"},
  y:"Chậm mà chắc, kiên trì đến cùng thì sẽ thành công. Người giỏi mà chủ quan, lơ là vẫn có thể thua.",
  cau:[
    ["兔子 跑 得 很 快 ， 乌龟 走 得 很 慢 。","tùzi pǎo de hěn kuài ， wūguī zǒu de hěn màn 。","Thỏ chạy rất nhanh, rùa đi rất chậm.",["二51"]],
    ["有 一 天 ， 兔子 对 乌龟 说 ： “ 你 走 得 太 慢 了 ！ ”","yǒu yì tiān ， tùzi duì wūguī shuō ： “ nǐ zǒu de tài màn le ！ ”","Một hôm, thỏ nói với rùa: “Cậu đi chậm quá!”",["二25","一09"]],
    ["乌龟 说 ： “ 我们 比赛 吧 ！ ”","wūguī shuō ： “ wǒmen bǐsài ba ！ ”","Rùa nói: “Chúng ta thi đi!”",["一22"]],
    ["比赛 开始 了 ， 兔子 很 快 就 跑 远 了 。","bǐsài kāishǐ le ， tùzi hěn kuài jiù pǎo yuǎn le 。","Cuộc thi bắt đầu, thỏ chạy một mạch đã đi xa.",["二17","一40"]],
    ["兔子 回头 一 看 ， 乌龟 还 在 后面 。","tùzi huítóu yí kàn ， wūguī hái zài hòumian 。","Thỏ quay đầu lại nhìn, rùa vẫn còn ở phía sau.",["一13"]],
    ["它 想 ： “ 我 先 睡 一会儿 吧 。 ”","tā xiǎng ： “ wǒ xiān shuì yíhuìr ba 。 ”","Nó nghĩ: “Mình ngủ một lát đã.”",["一11"]],
    ["乌龟 没有 休息 ， 一直 往 前 走 。","wūguī méiyǒu xiūxi ， yìzhí wǎng qián zǒu 。","Rùa không nghỉ, cứ đi thẳng về phía trước.",["一14","二22"]],
    ["兔子 醒来 的 时候 ， 乌龟 已经 到 了 。","tùzi xǐnglái de shíhou ， wūguī yǐjīng dào le 。","Lúc thỏ tỉnh dậy, rùa đã tới đích rồi.",["二15","一40"]],
    ["兔子 输 了 ， 乌龟 赢 了 。","tùzi shū le ， wūguī yíng le 。","Thỏ thua, rùa thắng.",["一40"]]
  ],
  tu:{"兔子":"con thỏ","跑":"chạy","得":"(nối động từ với bổ ngữ)","很":"rất","快":"nhanh","乌龟":"con rùa","走":"đi","慢":"chậm","有":"có","一":"một","天":"ngày",
      "对":"với (nói với ai)","说":"nói","你":"cậu, bạn","太":"quá","了":"(rồi)","我们":"chúng ta","比赛":"thi đấu; cuộc thi","吧":"(nhé, đi — rủ rê)","开始":"bắt đầu",
      "就":"liền, thì","远":"xa","回头":"quay đầu lại","看":"nhìn","还":"vẫn còn","在":"ở","后面":"phía sau","它":"nó (con vật)","想":"nghĩ","我":"tôi, mình","先":"trước",
      "睡":"ngủ","一会儿":"một lát","没有":"không (đã không)","休息":"nghỉ ngơi","一直":"cứ, suốt","往":"về phía","前":"phía trước","醒来":"tỉnh dậy","的":"(trợ từ)",
      "时候":"lúc, khi","已经":"đã","到":"đến","输":"thua","赢":"thắng"},
  hoi:[
    {q:"谁跑得快？",vi:"Ai chạy nhanh?",opts:["兔子","乌龟","它们都很快"],dap:0},
    {q:"比赛的时候，兔子做了什么？",vi:"Lúc thi, thỏ đã làm gì?",opts:["睡觉","吃饭","唱歌"],dap:0},
    {q:"最后谁赢了？",vi:"Cuối cùng ai thắng?",opts:["乌龟","兔子","都没赢"],dap:0}
  ]
});

LD_BAI.push({
  id:"om-cay-doi-tho", ten:"守株待兔", tenVi:"Ôm cây đợi thỏ", cap:3, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"守株待兔",py:"shǒu zhū dài tù",vi:"ôm gốc cây đợi thỏ — chỉ người trông chờ may mắn, không chịu cố gắng"},
  y:"Đừng trông chờ vào may mắn. Muốn có kết quả thì phải tự mình chăm chỉ làm.",
  cau:[
    ["以前 ， 有 一 个 农民 。","yǐqián ， yǒu yí ge nóngmín 。","Ngày xưa, có một người nông dân.",["一37"]],
    ["一 天 ， 他 在 地 里 干 活儿 。","yì tiān ， tā zài dì li gàn huór 。","Một hôm, anh ấy đang làm việc ngoài ruộng.",["一16"]],
    ["突然 ， 一 只 兔子 跑 过来 ， 撞 在 一 棵 树 上 ， 死 了 。","tūrán ， yì zhī tùzi pǎo guòlai ， zhuàng zài yì kē shù shang ， sǐ le 。","Đột nhiên, một con thỏ chạy tới, đâm vào một cái cây rồi chết.",["三47","三09"]],
    ["农民 很 高兴 ， 把 兔子 带 回 了 家 。","nóngmín hěn gāoxìng ， bǎ tùzi dài huí le jiā 。","Người nông dân rất vui, mang con thỏ về nhà.",["三54"]],
    ["他 想 ： “ 不用 干 活儿 也 能 吃到 兔子 ， 太 好 了 ！ ”","tā xiǎng ： “ búyòng gàn huór yě néng chīdào tùzi ， tài hǎo le ！ ”","Anh ấy nghĩ: “Không cần làm việc cũng được ăn thỏ, tuyệt quá!”",["一02","一35"]],
    ["从 那 天 起 ， 他 每天 坐 在 树 下 等 兔子 。","cóng nà tiān qǐ ， tā měitiān zuò zài shù xià děng tùzi 。","Từ hôm đó, ngày nào anh ấy cũng ngồi dưới gốc cây đợi thỏ.",["三39"]],
    ["可是 ， 再 也 没有 兔子 撞 到 树 上 来 。","kěshì ， zài yě méiyǒu tùzi zhuàng dào shù shang lái 。","Nhưng không còn con thỏ nào đâm vào cây nữa.",["三46"]],
    ["他 地 里 的 菜 都 死 了 。","tā dì li de cài dōu sǐ le 。","Rau ngoài ruộng của anh ấy đều chết hết.",["一10"]],
    ["大家 都 笑 他 太 傻 了 。","dàjiā dōu xiào tā tài shǎ le 。","Mọi người đều cười anh ấy ngốc quá.",["一09"]]
  ],
  tu:{"以前":"ngày trước, ngày xưa","有":"có","一":"một","个":"người, cái (lượng từ)","农民":"người nông dân","天":"ngày","他":"anh ấy","在":"ở; vào (sau động từ)","地":"ruộng, đồng",
      "里":"trong","干":"làm","活儿":"việc, công việc","突然":"đột nhiên","只":"con (lượng từ)","兔子":"con thỏ","跑":"chạy","过来":"tới đây (hướng về người nói)","撞":"đâm, va",
      "棵":"cây (lượng từ cho cây)","树":"cái cây","上":"trên","死":"chết","了":"(rồi, đã)","很":"rất","高兴":"vui","把":"(đưa tân ngữ lên trước động từ)","带":"mang","回":"về",
      "家":"nhà","想":"nghĩ","不用":"không cần","也":"cũng","能":"có thể","吃到":"ăn được","太":"quá","好":"tốt","从":"từ","那":"đó","起":"(từ … trở đi)","每天":"mỗi ngày",
      "坐":"ngồi","下":"dưới","等":"đợi","可是":"nhưng","再":"lại, nữa","没有":"không có","到":"tới (bổ ngữ)","来":"(hướng về phía người nói)","的":"của","菜":"rau",
      "都":"đều","大家":"mọi người","笑":"cười, chê cười","傻":"ngốc"},
  hoi:[
    {q:"兔子是怎么死的？",vi:"Con thỏ chết như thế nào?",opts:["撞在树上","农民打死的","生病了"],dap:0},
    {q:"后来农民每天做什么？",vi:"Sau đó mỗi ngày người nông dân làm gì?",opts:["在树下等兔子","在地里干活儿","去商店买东西"],dap:0},
    {q:"最后，他等到兔子了吗？",vi:"Cuối cùng anh ấy có đợi được thỏ không?",opts:["没有","等到了","等到了很多"],dap:0}
  ]
});

LD_BAI.push({
  id:"ve-ran-them-chan", ten:"画蛇添足", tenVi:"Vẽ rắn thêm chân", cap:3, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"画蛇添足",py:"huà shé tiān zú",vi:"vẽ rắn thêm chân — làm việc thừa, không những vô ích mà còn hỏng việc"},
  y:"Việc đã xong thì dừng đúng lúc. Làm thừa để khoe tài có khi lại làm hỏng việc của mình.",
  cau:[
    ["以前 ， 有 几 个 人 得到 了 一 壶 酒 。","yǐqián ， yǒu jǐ ge rén dédào le yì hú jiǔ 。","Ngày xưa, có mấy người được một bình rượu.",["一41"]],
    ["酒 不 多 ， 不 够 大家 喝 。","jiǔ bù duō ， bú gòu dàjiā hē 。","Rượu không nhiều, không đủ cho mọi người uống.",["一14"]],
    ["有 人 说 ： “ 我们 比赛 画 蛇 ， 谁 先 画 好 ， 谁 就 喝 这 壶 酒 。 ”","yǒu rén shuō ： “ wǒmen bǐsài huà shé ， shéi xiān huà hǎo ， shéi jiù hē zhè hú jiǔ 。 ”","Có người nói: “Chúng ta thi vẽ rắn, ai vẽ xong trước thì người đó uống bình rượu này.”",["三07","二49"]],
    ["一 个 人 很 快 就 画 好 了 。","yí ge rén hěn kuài jiù huà hǎo le 。","Một người vẽ xong rất nhanh.",["二49","二17"]],
    ["他 看 别人 还 没 画 完 ， 就 说 ： “ 我 还 能 给 蛇 画 上 脚 呢 ！ ”","tā kàn biérén hái méi huà wán ， jiù shuō ： “ wǒ hái néng gěi shé huà shang jiǎo ne ！ ”","Thấy người khác chưa vẽ xong, anh ta nói: “Tôi còn vẽ thêm được chân cho rắn nữa cơ!”",["二49","二26"]],
    ["他 正在 画 脚 的 时候 ， 另 一 个 人 画 好 了 。","tā zhèngzài huà jiǎo de shíhou ， lìng yí ge rén huà hǎo le 。","Lúc anh ta đang vẽ chân, một người khác đã vẽ xong.",["一42"]],
    ["那 个 人 拿 过 酒 说 ： “ 蛇 没有 脚 ， 你 画 的 不 是 蛇 ！ ”","nà ge rén ná guò jiǔ shuō ： “ shé méiyǒu jiǎo ， nǐ huà de bú shì shé ！ ”","Người đó cầm lấy bình rượu nói: “Rắn không có chân, cái anh vẽ không phải là rắn!”",["一36","二38"]],
    ["说 完 ， 他 就 把 酒 喝 了 。","shuō wán ， tā jiù bǎ jiǔ hē le 。","Nói xong, người đó uống luôn bình rượu.",["三54"]]
  ],
  tu:{"以前":"ngày trước, ngày xưa","有":"có","几":"mấy, vài","个":"(lượng từ)","人":"người","得到":"có được, nhận được","了":"(rồi, đã)","一":"một","壶":"bình (lượng từ)","酒":"rượu",
      "不":"không","多":"nhiều","够":"đủ","大家":"mọi người","喝":"uống","说":"nói","我们":"chúng ta","比赛":"thi","画":"vẽ","蛇":"con rắn","谁":"ai","先":"trước",
      "好":"xong (bổ ngữ)","就":"thì, liền","这":"này","很":"rất","快":"nhanh","他":"anh ta","看":"thấy, nhìn","别人":"người khác","还":"vẫn còn; còn","没":"chưa","完":"xong",
      "我":"tôi","能":"có thể","给":"cho","上":"(thêm vào)","脚":"chân","呢":"(nhấn giọng)","正在":"đang","的":"(trợ từ)","时候":"lúc","另":"khác","那":"kia, đó",
      "拿":"cầm, lấy","过":"(sang tay mình)","没有":"không có","你":"anh","是":"là","把":"(đưa tân ngữ lên trước động từ)"},
  hoi:[
    {q:"他们比赛做什么？",vi:"Họ thi làm gì?",opts:["画蛇","喝酒","跑步"],dap:0},
    {q:"第一个画好的人又做了什么？",vi:"Người vẽ xong đầu tiên lại làm gì?",opts:["给蛇画脚","喝了酒","去睡觉"],dap:0},
    {q:"最后谁喝了酒？",vi:"Cuối cùng ai uống rượu?",opts:["另一个人","第一个画好的人","大家一起喝"],dap:0}
  ]
});

LD_BAI.push({
  id:"keo-ma", ten:"拔苗助长", tenVi:"Kéo mạ giúp lúa lớn", cap:3, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"拔苗助长",py:"bá miáo zhù zhǎng",vi:"kéo mạ lên cho mau lớn — nóng vội, làm trái quy luật thì hỏng việc"},
  y:"Việc gì cũng cần thời gian. Nóng vội muốn nhanh, làm trái quy luật thì chỉ làm hỏng việc. Học tiếng Trung cũng vậy: đều đặn mỗi ngày một chút.",
  cau:[
    ["以前 ， 有 一 个 农民 ， 他 种 了 很 多 苗 。","yǐqián ， yǒu yí ge nóngmín ， tā zhòng le hěn duō miáo 。","Ngày xưa, có một người nông dân trồng rất nhiều cây mạ.",["一41"]],
    ["他 每天 都 去 地 里 看 ， 希望 苗 快 点儿 长 高 。","tā měitiān dōu qù dì li kàn ， xīwàng miáo kuài diǎnr zhǎng gāo 。","Ngày nào anh ấy cũng ra ruộng xem, mong mạ mau lớn cao.",["一10"]],
    ["可是 ， 他 觉得 苗 长 得 太 慢 了 。","kěshì ， tā juéde miáo zhǎng de tài màn le 。","Nhưng anh ấy thấy mạ lớn chậm quá.",["二51"]],
    ["他 想 了 一 个 办法 ： 把 每 棵 苗 都 往 上 拔 一点儿 。","tā xiǎng le yí ge bànfǎ ： bǎ měi kē miáo dōu wǎng shàng bá yìdiǎnr 。","Anh ấy nghĩ ra một cách: kéo mỗi cây mạ lên một chút.",["三54","三08"]],
    ["他 忙 了 一 整 天 ， 非常 累 。","tā máng le yì zhěng tiān ， fēicháng lèi 。","Anh ấy bận rộn cả một ngày, vô cùng mệt.",["一09"]],
    ["回到 家 ， 他 很 高兴 ， 对 儿子 说 ： “ 今天 我 帮 苗 长 高 了 ！ ”","huídào jiā ， tā hěn gāoxìng ， duì érzi shuō ： “ jīntiān wǒ bāng miáo zhǎng gāo le ！ ”","Về đến nhà, anh ấy vui vẻ nói với con trai: “Hôm nay bố đã giúp mạ lớn cao rồi!”",["二25"]],
    ["儿子 跑 到 地 里 一 看 ， 苗 都 死 了 。","érzi pǎo dào dì li yí kàn ， miáo dōu sǐ le 。","Con trai chạy ra ruộng xem thì mạ đã chết hết.",["三46"]]
  ],
  tu:{"以前":"ngày trước, ngày xưa","有":"có","一":"một","个":"(lượng từ)","农民":"người nông dân","他":"anh ấy","种":"trồng","了":"(đã, rồi)","很":"rất","多":"nhiều","苗":"cây mạ, cây non",
      "每天":"mỗi ngày","都":"đều; (đã) … hết","去":"đi","地":"ruộng, đồng","里":"trong","看":"xem","希望":"hy vọng, mong","快":"nhanh","点儿":"một chút","长":"mọc, lớn","高":"cao",
      "可是":"nhưng","觉得":"cảm thấy","得":"(nối động từ với bổ ngữ)","太":"quá","慢":"chậm","想":"nghĩ","办法":"cách, biện pháp","把":"(đưa tân ngữ lên trước động từ)",
      "每":"mỗi","棵":"cây (lượng từ cho cây)","往":"về phía","上":"lên trên","拔":"nhổ, kéo lên","一点儿":"một chút","忙":"bận","整":"cả, trọn","天":"ngày","非常":"vô cùng",
      "累":"mệt","回到":"về đến","家":"nhà","高兴":"vui","对":"với (nói với ai)","儿子":"con trai","说":"nói","今天":"hôm nay","我":"tôi (ở đây: bố)","帮":"giúp",
      "跑":"chạy","到":"tới","死":"chết"},
  hoi:[
    {q:"农民觉得苗怎么样？",vi:"Người nông dân thấy mạ thế nào?",opts:["长得太慢","长得太快","很好看"],dap:0},
    {q:"他想了什么办法？",vi:"Anh ấy nghĩ ra cách gì?",opts:["把苗往上拔","每天给苗喝水","买新的苗"],dap:0},
    {q:"最后苗怎么样了？",vi:"Cuối cùng mạ ra sao?",opts:["都死了","都长高了","没有变化"],dap:0}
  ]
});

LD_BAI.push({
  id:"mat-cuu-sua-chuong", ten:"亡羊补牢", tenVi:"Mất cừu mới sửa chuồng", cap:3, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"亡羊补牢",py:"wáng yáng bǔ láo",vi:"mất cừu rồi sửa chuồng — có sai sót mà sửa ngay thì vẫn chưa muộn (亡羊补牢，犹未为晚)"},
  y:"Mắc lỗi không sao, quan trọng là sửa ngay. Lưu ý: câu tiếng Việt “mất bò mới lo làm chuồng” mang ý chê là đã muộn, còn thành ngữ 亡羊补牢 nhấn mạnh sửa ngay thì vẫn chưa muộn.",
  cau:[
    ["以前 ， 有 一 个 人 养 了 很 多 羊 。","yǐqián ， yǒu yí ge rén yǎng le hěn duō yáng 。","Ngày xưa, có một người nuôi rất nhiều cừu.",["一41"]],
    ["一 天 早上 ， 他 发现 少 了 一 只 羊 。","yì tiān zǎoshang ， tā fāxiàn shǎo le yì zhī yáng 。","Một buổi sáng, anh ấy phát hiện thiếu mất một con cừu.",["一41"]],
    ["原来 ， 羊 住 的 地方 破 了 一 个 洞 ， 晚上 狼 进来 把 羊 吃 了 。","yuánlái ， yáng zhù de dìfang pò le yí ge dòng ， wǎnshang láng jìnlai bǎ yáng chī le 。","Hoá ra chuồng cừu bị thủng một lỗ, buổi tối sói chui vào ăn mất cừu.",["三45","三54"]],
    ["邻居 对 他 说 ： “ 快 把 洞 补 好 吧 ！ ”","línjū duì tā shuō ： “ kuài bǎ dòng bǔ hǎo ba ！ ”","Hàng xóm nói với anh ấy: “Mau vá lỗ thủng lại đi!”",["一34","二49"]],
    ["他 说 ： “ 羊 已经 丢 了 ， 还 补 什么 ？ ”","tā shuō ： “ yáng yǐjīng diū le ， hái bǔ shénme ？ ”","Anh ấy nói: “Cừu mất rồi, còn vá làm gì nữa?”",["三81"]],
    ["第二 天 早上 ， 他 发现 又 少 了 一 只 羊 。","dì-èr tiān zǎoshang ， tā fāxiàn yòu shǎo le yì zhī yáng 。","Sáng hôm sau, anh ấy phát hiện lại mất thêm một con cừu.",["二16","二72"]],
    ["这 次 他 明白 了 ， 马上 把 洞 补 好 了 。","zhè cì tā míngbai le ， mǎshàng bǎ dòng bǔ hǎo le 。","Lần này anh ấy hiểu ra, lập tức vá lỗ thủng lại.",["一11","三54"]],
    ["从 那 以后 ， 他 的 羊 再 也 没有 丢 过 。","cóng nà yǐhòu ， tā de yáng zài yě méiyǒu diū guo 。","Từ đó về sau, cừu của anh ấy không bị mất nữa.",["二32"]]
  ],
  tu:{"以前":"ngày trước, ngày xưa","有":"có","一":"một","个":"(lượng từ)","人":"người","养":"nuôi","了":"(đã, rồi)","很":"rất","多":"nhiều","羊":"con cừu, con dê","天":"ngày","早上":"buổi sáng",
      "他":"anh ấy","发现":"phát hiện","少":"thiếu","只":"con (lượng từ)","原来":"hoá ra","住":"ở","的":"(của, trợ từ)","地方":"chỗ, nơi","破":"thủng, rách","洞":"cái lỗ",
      "晚上":"buổi tối","狼":"con sói","进来":"đi vào (đây)","把":"(đưa tân ngữ lên trước động từ)","吃":"ăn","邻居":"hàng xóm","对":"với (nói với ai)","说":"nói",
      "快":"mau, nhanh lên","补":"vá, sửa","好":"(cho xong, cho tốt)","吧":"(đi, nhé)","已经":"đã","丢":"mất","还":"còn (… làm gì)","什么":"gì","第二":"thứ hai",
      "又":"lại","这":"này","次":"lần","明白":"hiểu ra","马上":"lập tức","从":"từ","那":"đó","以后":"về sau","再":"lại, nữa","也":"cũng","没有":"không","过":"(đã từng)"},
  hoi:[
    {q:"羊为什么少了？",vi:"Vì sao cừu bị thiếu?",opts:["狼进来吃了羊","羊自己跑了","别人买走了"],dap:0},
    {q:"邻居让他做什么？",vi:"Hàng xóm bảo anh ấy làm gì?",opts:["把洞补好","买新的羊","去找狼"],dap:0},
    {q:"后来他的羊还丢吗？",vi:"Về sau cừu của anh ấy còn bị mất không?",opts:["没有再丢","还丢","丢了很多"],dap:0}
  ]
});

/* ----- Truyện HSK 4 ----- */
LD_BAI.push({
  id:"khac-thuyen-tim-guom", ten:"刻舟求剑", tenVi:"Khắc thuyền tìm gươm", cap:4, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"刻舟求剑",py:"kè zhōu qiú jiàn",vi:"khắc dấu trên thuyền để tìm gươm — cứng nhắc, không biết sự việc đã thay đổi"},
  y:"Mọi thứ luôn thay đổi, cách làm cũng phải thay đổi theo hoàn cảnh. Cứ khư khư giữ cách cũ thì sẽ không đạt được kết quả.",
  cau:[
    ["很 久 以前 ， 有 一 个 人 坐 船 过 河 。","hěn jiǔ yǐqián ， yǒu yí ge rén zuò chuán guò hé 。","Rất lâu về trước, có một người ngồi thuyền qua sông.",["二57"]],
    ["船 到 河 中间 的 时候 ， 他 的 剑 不 小心 掉进 了 水 里 。","chuán dào hé zhōngjiān de shíhou ， tā de jiàn bù xiǎoxīn diàojìn le shuǐ li 。","Khi thuyền tới giữa sông, thanh gươm của anh ta sơ ý rơi xuống nước.",["二21","二50"]],
    ["船 上 的 人 都 说 ： “ 快 下 水 去 找 吧 ！ ”","chuán shang de rén dōu shuō ： “ kuài xià shuǐ qù zhǎo ba ！ ”","Người trên thuyền đều nói: “Mau xuống nước tìm đi!”",["一34"]],
    ["他 却 一点儿 也 不 着急 ， 拿出 一 把 小刀 ， 在 船 边 刻 了 一 个 记号 。","tā què yìdiǎnr yě bù zháojí ， náchū yì bǎ xiǎodāo ， zài chuán biān kè le yí ge jìhao 。","Anh ta lại chẳng vội chút nào, lấy ra một con dao nhỏ, khắc một dấu ở mạn thuyền.",["三75","三09"]],
    ["他 说 ： “ 我 的 剑 是 从 这儿 掉 下去 的 ， 等 船 停 了 ， 我 再 从 这儿 下 去 找 。 ”","tā shuō ： “ wǒ de jiàn shì cóng zhèr diào xiàqu de ， děng chuán tíng le ， wǒ zài cóng zhèr xià qù zhǎo 。 ”","Anh ta nói: “Gươm của tôi rơi xuống từ chỗ này, đợi thuyền dừng, tôi sẽ từ chỗ này xuống tìm.”",["二60","三16"]],
    ["船 很 快 到 了 对岸 。","chuán hěn kuài dào le duì'àn 。","Thuyền nhanh chóng tới bờ bên kia.",["一41"]],
    ["他 马上 从 刻 记号 的 地方 跳 进 水 里 找 剑 。","tā mǎshàng cóng kè jìhao de dìfang tiào jìn shuǐ li zhǎo jiàn 。","Anh ta lập tức nhảy xuống nước từ chỗ khắc dấu để tìm gươm.",["三45"]],
    ["可是 他 找 了 很 久 ， 怎么 也 找 不 到 。","kěshì tā zhǎo le hěn jiǔ ， zěnme yě zhǎo bu dào 。","Nhưng anh ta tìm rất lâu, tìm thế nào cũng không thấy.",["三48","三07"]],
    ["船 一直 在 走 ， 剑 却 没有 动 ， 怎么 能 找 得 到 呢 ？","chuán yìzhí zài zǒu ， jiàn què méiyǒu dòng ， zěnme néng zhǎo de dào ne ？","Thuyền thì cứ chạy, gươm lại không hề di chuyển, làm sao tìm được chứ?",["三48","三76"]]
  ],
  tu:{"很":"rất","久":"lâu","以前":"trước kia","有":"có","一":"một","个":"(lượng từ)","人":"người","坐":"ngồi; đi (tàu, thuyền)","船":"con thuyền","过":"qua","河":"sông",
      "到":"đến, tới","中间":"ở giữa","的":"(trợ từ)","时候":"lúc, khi","他":"anh ta","剑":"thanh gươm, kiếm","不":"không","小心":"cẩn thận","掉进":"rơi vào","了":"(đã, rồi)",
      "水":"nước","里":"trong","上":"trên","都":"đều","说":"nói","快":"mau, nhanh lên","下":"xuống","去":"đi (để làm gì)","找":"tìm","吧":"(đi, nhé)","却":"lại (trái với mong đợi)",
      "一点儿":"một chút","也":"cũng","着急":"sốt ruột, vội","拿出":"lấy ra","把":"con, cái (lượng từ cho dao)","小刀":"con dao nhỏ","在":"ở","边":"mép, cạnh","刻":"khắc",
      "记号":"dấu, ký hiệu","我":"tôi","是":"(nhấn mạnh: 是……的)","从":"từ","这儿":"chỗ này","掉":"rơi","下去":"xuống dưới","等":"đợi, đợi đến khi","停":"dừng","再":"rồi mới",
      "对岸":"bờ bên kia","马上":"lập tức","地方":"chỗ, nơi","跳":"nhảy","进":"vào","可是":"nhưng","怎么":"thế nào; (怎么也) thế nào cũng","得":"(bổ ngữ: được)","一直":"cứ, suốt",
      "走":"đi, chạy (thuyền)","没有":"không","动":"di chuyển, động đậy","能":"có thể","呢":"(trợ từ hỏi)"},
  hoi:[
    {q:"他的剑掉到哪儿了？",vi:"Gươm của anh ta rơi ở đâu?",opts:["河里","船上","家里"],dap:0},
    {q:"剑掉下去以后，他做了什么？",vi:"Sau khi gươm rơi, anh ta làm gì?",opts:["在船边刻了一个记号","马上下水找","请别人帮忙"],dap:0},
    {q:"他为什么找不到剑？",vi:"Vì sao anh ta không tìm được gươm?",opts:["船走了，剑没有动","水太深了","剑太小了"],dap:0}
  ]
});

LD_BAI.push({
  id:"ech-day-gieng", ten:"井底之蛙", tenVi:"Ếch ngồi đáy giếng", cap:4, cd:"truyen", chude:"Truyện kể", rieng:["东海"],
  tn:{zh:"井底之蛙",py:"jǐng dǐ zhī wā",vi:"ếch ngồi đáy giếng — hiểu biết hạn hẹp mà tưởng mình biết nhiều (tiếng Việt có thành ngữ y hệt)"},
  y:"Thế giới rộng lớn hơn nhiều so với những gì mình nhìn thấy. Đừng tự mãn, hãy luôn học hỏi và mở rộng tầm nhìn.",
  cau:[
    ["一 口 井 里 住 着 一 只 青蛙 。","yì kǒu jǐng li zhù zhe yì zhī qīngwā 。","Trong một cái giếng có một con ếch sống.",["二56","一08"]],
    ["它 从 小 就 在 井 里 长大 ， 从来 没有 出去 过 。","tā cóng xiǎo jiù zài jǐng li zhǎngdà ， cónglái méiyǒu chūqu guo 。","Nó lớn lên trong giếng từ nhỏ, chưa bao giờ ra ngoài.",["三14","二32"]],
    ["每天 ， 它 抬头 就 能 看到 井口 那么 大 的 天 。","měitiān ， tā táitóu jiù néng kàndào jǐngkǒu nàme dà de tiān 。","Ngày nào nó ngẩng đầu lên cũng thấy bầu trời to bằng miệng giếng.",["二17","二07"]],
    ["它 觉得 自己 的 生活 非常 快乐 。","tā juéde zìjǐ de shēnghuó fēicháng kuàilè 。","Nó thấy cuộc sống của mình vô cùng vui vẻ.",["一09"]],
    ["有 一 天 ， 一 只 大 海龟 从 东海 来 ， 停 在 井 边 。","yǒu yì tiān ， yì zhī dà hǎiguī cóng Dōnghǎi lái ， tíng zài jǐng biān 。","Một hôm, một con rùa biển lớn từ biển Đông tới, dừng lại bên giếng.",["一15"]],
    ["青蛙 高兴 地 说 ： “ 我 住 在 这儿 ， 多么 舒服 啊 ！ 你 也 下来 看看 吧 ！ ”","qīngwā gāoxìng de shuō ： “ wǒ zhù zài zhèr ， duōme shūfu a ！ nǐ yě xiàlai kànkan ba ！ ”","Ếch vui vẻ nói: “Tôi sống ở đây, sướng biết bao! Bạn cũng xuống xem thử đi!”",["一20","二13","二04"]],
    ["海龟 想 进去 ， 可是 井 太 小 了 ， 它 的 脚 都 进 不 去 。","hǎiguī xiǎng jìnqu ， kěshì jǐng tài xiǎo le ， tā de jiǎo dōu jìn bu qù 。","Rùa biển muốn vào, nhưng giếng nhỏ quá, đến chân nó cũng không vào lọt.",["三48"]],
    ["海龟 说 ： “ 你 见过 大海 吗 ？ 大海 又 大 又 深 ， 比 这 口 井 大 多 了 。 ”","hǎiguī shuō ： “ nǐ jiànguo dàhǎi ma ？ dàhǎi yòu dà yòu shēn ， bǐ zhè kǒu jǐng dà duō le 。 ”","Rùa biển nói: “Bạn đã từng thấy biển chưa? Biển vừa rộng vừa sâu, lớn hơn cái giếng này nhiều.”",["二71","二46","二58"]],
    ["青蛙 听 了 ， 非常 吃惊 ， 半天 说 不 出 话 来 。","qīngwā tīng le ， fēicháng chījīng ， bàntiān shuō bu chū huà lái 。","Ếch nghe xong vô cùng kinh ngạc, hồi lâu không nói nên lời.",["三47"]],
    ["它 这 才 知道 ， 原来 世界 这么 大 。","tā zhè cái zhīdao ， yuánlái shìjiè zhème dà 。","Lúc này nó mới biết, hoá ra thế giới rộng lớn đến vậy.",["二20"]]
  ],
  tu:{"一":"một","口":"cái (lượng từ cho giếng)","井":"cái giếng","里":"trong","住":"ở, sống","着":"(trạng thái đang duy trì)","只":"con (lượng từ)","青蛙":"con ếch",
      "它":"nó (con vật)","从":"từ","小":"nhỏ","就":"đã; thì","在":"ở","长大":"lớn lên","从来":"xưa nay (chưa từng)","没有":"chưa, không","出去":"ra ngoài","过":"(đã từng)",
      "每天":"mỗi ngày","抬头":"ngẩng đầu","能":"có thể","看到":"nhìn thấy","井口":"miệng giếng","那么":"cỡ đó, như thế","大":"to, lớn","的":"(trợ từ)","天":"bầu trời; ngày",
      "觉得":"cảm thấy","自己":"bản thân","生活":"cuộc sống","非常":"vô cùng","快乐":"vui vẻ","有":"có","海龟":"rùa biển","东海":"biển Đông","来":"đến","停":"dừng",
      "边":"bên, cạnh","高兴":"vui","地":"(trợ từ: một cách…)","说":"nói","我":"tôi","这儿":"nơi này","多么":"biết bao","舒服":"dễ chịu, sướng","啊":"(cảm thán)",
      "你":"bạn","也":"cũng","下来":"xuống đây","看看":"xem thử","吧":"(đi, nhé)","想":"muốn","进去":"vào trong","可是":"nhưng","太":"quá","了":"(rồi)",
      "脚":"chân","都":"(đến cả … cũng)","进":"vào","不":"không","去":"(vào) được (bổ ngữ)","见过":"đã từng thấy","大海":"biển cả","吗":"(trợ từ hỏi)","又":"vừa",
      "深":"sâu","比":"so với, hơn","这":"này","多":"nhiều (… hơn nhiều)","听":"nghe","吃惊":"kinh ngạc","半天":"hồi lâu","出":"ra","话":"lời, câu nói","才":"mới",
      "知道":"biết","原来":"hoá ra","世界":"thế giới","这么":"như thế này"},
  hoi:[
    {q:"青蛙住在哪儿？",vi:"Ếch sống ở đâu?",opts:["井里","海里","河边"],dap:0},
    {q:"海龟为什么没有进井？",vi:"Vì sao rùa biển không vào giếng?",opts:["井太小了","它不想进去","井里没有水"],dap:0},
    {q:"听了海龟的话，青蛙怎么样？",vi:"Nghe rùa biển nói xong, ếch thế nào?",opts:["非常吃惊","很生气","很高兴"],dap:0}
  ]
});

LD_BAI.push({
  id:"cao-muon-oai-hum", ten:"狐假虎威", tenVi:"Cáo mượn oai hùm", cap:4, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"狐假虎威",py:"hú jiǎ hǔ wēi",vi:"cáo mượn oai hùm — dựa vào thế lực của người khác để doạ nạt"},
  y:"Đừng để vẻ bề ngoài đánh lừa, hãy nhìn ra sức mạnh thật nằm ở đâu. Và cũng đừng mượn uy của người khác để ra oai.",
  cau:[
    ["有 一 天 ， 一 只 老虎 在 森林 里 抓 到 了 一 只 狐狸 。","yǒu yì tiān ， yì zhī lǎohǔ zài sēnlín li zhuā dào le yì zhī húli 。","Một hôm, một con hổ bắt được một con cáo trong rừng.",["三46"]],
    ["老虎 正 要 吃 它 ， 狐狸 却 大声 说 ： “ 你 不 能 吃 我 ！ ”","lǎohǔ zhèng yào chī tā ， húli què dàshēng shuō ： “ nǐ bù néng chī wǒ ！ ”","Hổ đang định ăn thịt nó thì cáo lại lớn tiếng nói: “Ông không được ăn tôi!”",["一02"]],
    ["“ 我 是 森林 里 的 大王 ， 所有 的 动物 都 怕 我 。 ”","“ wǒ shì sēnlín li de dàwáng ， suǒyǒu de dòngwù dōu pà wǒ 。 ”","“Tôi là chúa tể của khu rừng, tất cả các con vật đều sợ tôi.”",["一36"]],
    ["老虎 不 相信 。 狐狸 说 ： “ 你 跟 在 我 后面 走 一 走 ， 就 知道 了 。 ”","lǎohǔ bù xiāngxìn 。 húli shuō ： “ nǐ gēn zài wǒ hòumian zǒu yi zǒu ， jiù zhīdao le 。 ”","Hổ không tin. Cáo nói: “Ông đi theo sau tôi một vòng thì sẽ biết.”",["二04","二17"]],
    ["于是 ， 狐狸 走 在 前面 ， 老虎 跟 在 后面 。","yúshì ， húli zǒu zài qiánmian ， lǎohǔ gēn zài hòumian 。","Thế là cáo đi phía trước, hổ theo sau.",["一01"]],
    ["森林 里 的 动物 看见 了 ， 都 吓 得 跑 走 了 。","sēnlín li de dòngwù kànjiàn le ， dōu xià de pǎo zǒu le 。","Các con vật trong rừng nhìn thấy đều sợ hãi bỏ chạy.",["二51","三46"]],
    ["狐狸 得意 地 说 ： “ 你 看 ， 大家 多 怕 我 啊 ！ ”","húli déyì de shuō ： “ nǐ kàn ， dàjiā duō pà wǒ a ！ ”","Cáo vênh váo nói: “Ông xem, mọi người sợ tôi biết bao!”",["一20","一35"]],
    ["老虎 以为 动物 们 真的 怕 狐狸 ， 就 把 它 放 了 。","lǎohǔ yǐwéi dòngwù men zhēnde pà húli ， jiù bǎ tā fàng le 。","Hổ tưởng các con vật thật sự sợ cáo, bèn thả nó ra.",["三54","三02"]],
    ["其实 ， 动物 们 怕 的 不 是 狐狸 ， 而是 它 后面 的 老虎 。","qíshí ， dòngwù men pà de bú shì húli ， érshì tā hòumian de lǎohǔ 。","Thật ra, thứ các con vật sợ không phải là cáo, mà là con hổ đi sau nó.",["二38"]]
  ],
  tu:{"有":"có","一":"một","天":"ngày","只":"con (lượng từ)","老虎":"con hổ","在":"ở","森林":"rừng","里":"trong","抓":"bắt","到":"được (bổ ngữ)","了":"(đã, rồi)","狐狸":"con cáo",
      "正":"đúng lúc đang","要":"định, sắp","吃":"ăn","它":"nó (con vật)","却":"lại, nhưng","大声":"lớn tiếng","说":"nói","你":"ông, bạn","不":"không","能":"được, có thể",
      "我":"tôi","是":"là","的":"(trợ từ)","大王":"chúa tể, vua","所有":"tất cả","动物":"động vật, con vật","都":"đều","怕":"sợ","相信":"tin","跟":"đi theo","后面":"phía sau",
      "走":"đi; (bổ ngữ) đi mất","就":"thì, bèn","知道":"biết","于是":"thế là","前面":"phía trước","看见":"nhìn thấy","吓":"sợ hãi, giật mình","得":"(nối động từ với bổ ngữ)",
      "跑":"chạy","得意":"đắc ý, vênh váo","地":"(trợ từ: một cách…)","看":"xem, nhìn","大家":"mọi người","多":"biết bao, sao mà","啊":"(cảm thán)","以为":"tưởng rằng",
      "们":"(chỉ số nhiều)","真的":"thật sự","把":"(đưa tân ngữ lên trước động từ)","放":"thả","其实":"thực ra","而是":"mà là"},
  hoi:[
    {q:"狐狸说自己是什么？",vi:"Cáo nói mình là gì?",opts:["森林里的大王","老虎的朋友","最小的动物"],dap:0},
    {q:"动物们看见它们，做了什么？",vi:"Các con vật thấy chúng thì làm gì?",opts:["都跑走了","都过来看","都笑了"],dap:0},
    {q:"动物们怕的到底是谁？",vi:"Rốt cuộc các con vật sợ ai?",opts:["老虎","狐狸","大家"],dap:0}
  ]
});

LD_BAI.push({
  id:"tu-mau-thuan", ten:"自相矛盾", tenVi:"Tự mâu thuẫn", cap:4, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"自相矛盾",py:"zì xiāng máo dùn",vi:"tự mâu thuẫn — lời nói, việc làm trước sau trái ngược nhau"},
  y:"Nói năng phải có trước có sau, đừng khoe quá lời. Từ “mâu thuẫn” trong tiếng Việt (矛盾 máodùn: cây giáo và cái khiên) chính là bắt nguồn từ câu chuyện này.",
  cau:[
    ["以前 ， 有 一 个 卖 矛 和 盾 的 人 。","yǐqián ， yǒu yí ge mài máo hé dùn de rén 。","Ngày xưa, có một người bán giáo và khiên.",["一27"]],
    ["矛 是 用来 刺 人 的 ， 盾 是 用来 保护 自己 的 。","máo shì yònglái cì rén de ， dùn shì yònglái bǎohù zìjǐ de 。","Giáo dùng để đâm người, khiên dùng để bảo vệ mình.",["二34"]],
    ["他 先 拿起 盾 ， 对 大家 说 ： “ 我 的 盾 非常 结实 ， 什么 东西 都 刺 不 破 ！ ”","tā xiān náqǐ dùn ， duì dàjiā shuō ： “ wǒ de dùn fēicháng jiēshi ， shénme dōngxi dōu cì bu pò ！ ”","Anh ta cầm khiên lên trước, nói với mọi người: “Khiên của tôi cực kỳ chắc, thứ gì cũng không đâm thủng được!”",["三07","三48"]],
    ["接着 ， 他 又 拿起 矛 说 ： “ 我 的 矛 非常 锋利 ， 什么 东西 都 能 刺 破 ！ ”","jiēzhe ， tā yòu náqǐ máo shuō ： “ wǒ de máo fēicháng fēnglì ， shénme dōngxi dōu néng cì pò ！ ”","Tiếp đó, anh ta lại cầm giáo lên nói: “Giáo của tôi cực kỳ sắc, thứ gì cũng đâm thủng được!”",["二16","三07"]],
    ["旁边 的 人 听 了 ， 觉得 很 奇怪 。","pángbiān de rén tīng le ， juéde hěn qíguài 。","Những người xung quanh nghe xong thấy rất lạ.",["一41"]],
    ["一 个 人 问 他 ： “ 如果 用 你 的 矛 去 刺 你 的 盾 ， 会 怎么样 呢 ？ ”","yí ge rén wèn tā ： “ rúguǒ yòng nǐ de máo qù cì nǐ de dùn ， huì zěnmeyàng ne ？ ”","Một người hỏi anh ta: “Nếu dùng giáo của anh đâm khiên của anh thì sẽ thế nào?”",["二66","一02"]],
    ["卖 矛 和 盾 的 人 红 着 脸 ， 一 句 话 也 说 不 出来 。","mài máo hé dùn de rén hóng zhe liǎn ， yí jù huà yě shuō bu chūlai 。","Người bán giáo và khiên đỏ mặt, không nói được câu nào.",["三41","二33"]],
    ["大家 都 笑 了 起来 。","dàjiā dōu xiào le qǐlai 。","Mọi người đều bật cười.",["三47"]]
  ],
  tu:{"以前":"ngày xưa, trước kia","有":"có","一":"một","个":"(lượng từ)","卖":"bán","矛":"cây giáo (mâu)","和":"và","盾":"cái khiên (thuẫn)","的":"(trợ từ)","人":"người",
      "是":"(nhấn mạnh: 是……的)","用来":"dùng để","刺":"đâm","保护":"bảo vệ","自己":"bản thân","他":"anh ta","先":"trước tiên","拿起":"cầm lên","对":"với (nói với ai)",
      "大家":"mọi người","说":"nói","我":"tôi","非常":"vô cùng, cực kỳ","结实":"chắc chắn, bền","什么":"bất cứ … gì","东西":"đồ vật, thứ","都":"đều","不":"không","破":"thủng, rách",
      "接着":"tiếp theo","又":"lại","锋利":"sắc bén","能":"có thể","旁边":"bên cạnh, xung quanh","听":"nghe","了":"(đã, rồi)","觉得":"cảm thấy","很":"rất","奇怪":"kỳ lạ",
      "问":"hỏi","如果":"nếu","用":"dùng","你":"anh","去":"(để) — đi làm gì","会":"sẽ","怎么样":"thế nào","呢":"(trợ từ hỏi)","红":"đỏ","着":"(trạng thái)","脸":"mặt",
      "句":"câu (lượng từ)","话":"lời","也":"cũng","出来":"ra (được)","笑":"cười","起来":"(bắt đầu …)"},
  hoi:[
    {q:"这个人卖什么？",vi:"Người này bán gì?",opts:["矛和盾","水果","衣服"],dap:0},
    {q:"他说他的盾怎么样？",vi:"Anh ta nói khiên của mình thế nào?",opts:["什么都刺不破","很便宜","很好看"],dap:0},
    {q:"为什么他一句话也说不出来？",vi:"Vì sao anh ta không nói được câu nào?",opts:["他说的话自相矛盾","他太累了","他不会说话"],dap:0}
  ]
});

/* ----- Truyện HSK 1–2 (ngắn, lặp lại cấu trúc cho người mới) ----- */
LD_BAI.push({
  id:"meo-con-tim-me", ten:"小猫找妈妈", tenVi:"Mèo con tìm mẹ", cap:1, cd:"truyen", chude:"Truyện kể",
  y:"Mèo con không thấy mẹ thì cứ hỏi, không bỏ cuộc, và cuối cùng đã tìm được mẹ. Truyện giúp em luyện câu hỏi với 吗 và câu chữ 是.",
  cau:[
    ["小猫 的 妈妈 不 在 家 。","xiǎomāo de māma bú zài jiā 。","Mẹ của mèo con không có ở nhà.",["一14","一20"]],
    ["小猫 去 找 妈妈 。","xiǎomāo qù zhǎo māma 。","Mèo con đi tìm mẹ.",["二57"]],
    ["小猫 看见 一 只 小狗 。","xiǎomāo kànjiàn yì zhī xiǎogǒu 。","Mèo con nhìn thấy một chú chó con.",["一23"]],
    ["小猫 问 ： “ 你 是 我 的 妈妈 吗 ？ ”","xiǎomāo wèn ： “ nǐ shì wǒ de māma ma ？ ”","Mèo con hỏi: “Bạn là mẹ của mình à?”",["一45"]],
    ["小狗 说 ： “ 我 不 是 你 的 妈妈 ， 我 的 妈妈 是 大狗 。 ”","xiǎogǒu shuō ： “ wǒ bú shì nǐ de māma ， wǒ de māma shì dàgǒu 。 ”","Chó con nói: “Mình không phải mẹ của bạn, mẹ mình là chó lớn.”",["一36"]],
    ["小猫 也 问 小鸟 ： “ 你 是 我 的 妈妈 吗 ？ ”","xiǎomāo yě wèn xiǎoniǎo ： “ nǐ shì wǒ de māma ma ？ ”","Mèo con cũng hỏi chim non: “Bạn là mẹ của mình à?”",["一13","一45"]],
    ["小鸟 说 ： “ 我 不 是 。 我 会 飞 ， 你 的 妈妈 不 会 飞 。 ”","xiǎoniǎo shuō ： “ wǒ bú shì 。 wǒ huì fēi ， nǐ de māma bú huì fēi 。 ”","Chim non nói: “Mình không phải đâu. Mình biết bay, mẹ bạn không biết bay.”",["一02"]],
    ["小猫 没有 找到 妈妈 ， 很 不 高兴 。","xiǎomāo méiyǒu zhǎodào māma ， hěn bù gāoxìng 。","Mèo con không tìm thấy mẹ, rất buồn.",["一14"]],
    ["这 时候 ， 一 只 大猫 来 了 ： “ 小猫 ， 妈妈 在 这儿 ！ ”","zhè shíhou ， yì zhī dàmāo lái le ： “ xiǎomāo ， māma zài zhèr ！ ”","Lúc này, một con mèo lớn đi tới: “Mèo con ơi, mẹ ở đây!”",["一40"]],
    ["小猫 很 高兴 ， 叫 ： “ 妈妈 ！ 妈妈 ！ ”","xiǎomāo hěn gāoxìng ， jiào ： “ māma ！ māma ！ ”","Mèo con rất vui, kêu lên: “Mẹ ơi! Mẹ ơi!”",["一30"]]
  ],
  tu:{"小猫":"mèo con","的":"của","妈妈":"mẹ","不":"không","在":"ở, có ở","家":"nhà","去":"đi","找":"tìm","看见":"nhìn thấy","一":"một","只":"con (lượng từ cho con vật)",
      "小狗":"chó con","问":"hỏi","你":"bạn, cậu","是":"là","我":"tôi, mình","吗":"(trợ từ hỏi: … à?)","说":"nói","大狗":"chó lớn","也":"cũng","小鸟":"chim non",
      "会":"biết (làm gì)","飞":"bay","没有":"không, chưa","找到":"tìm thấy","很":"rất","高兴":"vui","这":"này","时候":"lúc","大猫":"mèo lớn","来":"đến","了":"(rồi)",
      "这儿":"đây, chỗ này","叫":"gọi, kêu"},
  hoi:[
    {q:"小猫找谁？",vi:"Mèo con tìm ai?",opts:["妈妈","小狗","小鸟"],dap:0},
    {q:"小狗的妈妈是谁？",vi:"Mẹ của chó con là ai?",opts:["大狗","大猫","小鸟"],dap:0},
    {q:"小鸟会做什么？",vi:"Chim non biết làm gì?",opts:["飞","跑","说汉语"],dap:0}
  ]
});

LD_BAI.push({
  id:"nho-cu-cai", ten:"拔萝卜", tenVi:"Nhổ củ cải", cap:2, cd:"truyen", chude:"Truyện kể",
  y:"Một mình làm không nổi thì cùng nhau làm. Đoàn kết, mỗi người góp một chút sức thì việc khó mấy cũng xong.",
  cau:[
    ["爷爷 家 有 一 个 萝卜 ， 萝卜 很 大 很 大 。","yéye jiā yǒu yí ge luóbo ， luóbo hěn dà hěn dà 。","Nhà ông có một củ cải, củ cải to ơi là to.",["一37"]],
    ["爷爷 去 拔 萝卜 ： “ 一 、 二 、 三 ， 拔 ！ ”","yéye qù bá luóbo ： “ yī 、 èr 、 sān ， bá ！ ”","Ông đi nhổ củ cải: “Một, hai, ba, nhổ!”",["二57"]],
    ["萝卜 太 大 了 ， 爷爷 拔 不 出来 。","luóbo tài dà le ， yéye bá bu chūlai 。","Củ cải to quá, ông nhổ không ra.",["一35","三48"]],
    ["爷爷 叫 奶奶 来 帮 他 。","yéye jiào nǎinai lái bāng tā 。","Ông gọi bà đến giúp.",["三57"]],
    ["奶奶 和 爷爷 一起 拔 ， 还是 拔 不 出来 。","nǎinai hé yéye yìqǐ bá ， háishi bá bu chūlai 。","Bà và ông cùng nhổ, vẫn nhổ không ra.",["一10"]],
    ["奶奶 叫 小狗 来 帮忙 。","nǎinai jiào xiǎogǒu lái bāngmáng 。","Bà gọi chó con đến giúp một tay.",["三57"]],
    ["小狗 叫 小猫 来 帮忙 。","xiǎogǒu jiào xiǎomāo lái bāngmáng 。","Chó con gọi mèo con đến giúp một tay.",["三57"]],
    ["爷爷 、 奶奶 、 小狗 和 小猫 一起 拔 ： “ 一 、 二 、 三 ， 拔 ！ ”","yéye 、 nǎinai 、 xiǎogǒu hé xiǎomāo yìqǐ bá ： “ yī 、 èr 、 sān ， bá ！ ”","Ông, bà, chó con và mèo con cùng nhổ: “Một, hai, ba, nhổ!”",["一19","一10"]],
    ["大 萝卜 出来 了 ！ 大家 都 很 高兴 。","dà luóbo chūlai le ！ dàjiā dōu hěn gāoxìng 。","Củ cải to đã lên rồi! Mọi người đều rất vui.",["一40"]]
  ],
  tu:{"爷爷":"ông (nội)","家":"nhà","有":"có","一":"một","个":"cái, củ (lượng từ)","萝卜":"củ cải","很":"rất","大":"to","去":"đi","拔":"nhổ","二":"hai","三":"ba",
      "太":"quá","了":"(rồi)","不":"không","出来":"ra, lên (được)","叫":"gọi","奶奶":"bà (nội)","来":"đến","帮":"giúp","他":"ông ấy","和":"và","一起":"cùng nhau",
      "还是":"vẫn","小狗":"chó con","帮忙":"giúp một tay","小猫":"mèo con","大家":"mọi người","都":"đều","高兴":"vui"},
  hoi:[
    {q:"萝卜怎么样？",vi:"Củ cải thế nào?",opts:["很大","很小","不好吃"],dap:0},
    {q:"谁先来帮爷爷？",vi:"Ai đến giúp ông đầu tiên?",opts:["奶奶","小狗","小猫"],dap:0},
    {q:"最后萝卜出来了吗？",vi:"Cuối cùng củ cải có lên không?",opts:["出来了","没有出来","不知道"],dap:0}
  ]
});

LD_BAI.push({
  id:"cao-va-nho", ten:"狐狸和葡萄", tenVi:"Cáo và chùm nho", cap:2, cd:"truyen", chude:"Truyện kể",
  tn:{zh:"吃不到葡萄说葡萄酸",py:"chī bu dào pútao shuō pútao suān",vi:"không ăn được nho thì chê nho chua — không đạt được thì chê bai để tự an ủi"},
  y:"Không làm được thì nên thừa nhận và cố gắng thêm, đừng chê bai thứ mình không có để tự an ủi.",
  cau:[
    ["一 只 狐狸 很 饿 ， 它 想 找 东西 吃 。","yì zhī húli hěn è ， tā xiǎng zhǎo dōngxi chī 。","Một con cáo rất đói, nó muốn tìm gì đó để ăn.",["一03","二57"]],
    ["它 看见 上面 有 很 多 葡萄 。","tā kànjiàn shàngmian yǒu hěn duō pútao 。","Nó nhìn thấy phía trên có rất nhiều nho.",["一37"]],
    ["葡萄 很 大 ， 狐狸 很 想 吃 。","pútao hěn dà ， húli hěn xiǎng chī 。","Nho rất to, cáo rất muốn ăn.",["一03"]],
    ["但是 葡萄 太 高 了 ， 它 吃 不 到 。","dànshì pútao tài gāo le ， tā chī bu dào 。","Nhưng chùm nho cao quá, nó không ăn tới.",["一35","三48"]],
    ["狐狸 跳 了 很 多 次 ， 还是 吃 不 到 。","húli tiào le hěn duō cì ， háishi chī bu dào 。","Cáo nhảy rất nhiều lần, vẫn không ăn tới.",["二52"]],
    ["狐狸 累 了 ， 不 想 再 跳 了 。","húli lèi le ， bù xiǎng zài tiào le 。","Cáo mệt rồi, không muốn nhảy nữa.",["一40"]],
    ["它 走 的 时候 说 ： “ 这些 葡萄 是 酸 的 ， 不 好吃 ！ ”","tā zǒu de shíhou shuō ： “ zhèxiē pútao shì suān de ， bù hǎochī ！ ”","Lúc bỏ đi nó nói: “Nho này chua lắm, chẳng ngon!”",["二34"]]
  ],
  tu:{"一":"một","只":"con (lượng từ)","狐狸":"con cáo","很":"rất","饿":"đói","它":"nó (con vật)","想":"muốn","找":"tìm","东西":"đồ, thứ (ở đây: đồ ăn)","吃":"ăn",
      "看见":"nhìn thấy","上面":"phía trên","有":"có","多":"nhiều","葡萄":"quả nho","大":"to","但是":"nhưng","太":"quá","高":"cao","了":"(rồi)","不":"không","到":"tới (bổ ngữ)",
      "跳":"nhảy","次":"lần","还是":"vẫn","累":"mệt","再":"nữa","走":"đi","的":"(trợ từ)","时候":"lúc","说":"nói","这些":"những … này","是":"là","酸":"chua","好吃":"ngon"},
  hoi:[
    {q:"狐狸看见了什么？",vi:"Cáo nhìn thấy gì?",opts:["葡萄","苹果","鱼"],dap:0},
    {q:"狐狸为什么吃不到葡萄？",vi:"Vì sao cáo không ăn được nho?",opts:["葡萄太高了","葡萄太小了","它不饿"],dap:0},
    {q:"狐狸说葡萄怎么样？",vi:"Cáo nói nho thế nào?",opts:["是酸的","很好吃","很大"],dap:0}
  ]
});

LD_BAI.push({
  id:"meo-con-cau-ca", ten:"小猫钓鱼", tenVi:"Mèo con câu cá", cap:2, cd:"truyen", chude:"Truyện kể",
  y:"Làm việc gì cũng phải chuyên tâm. “Lúc thì thế này, lúc thì thế khác” thì chẳng làm xong việc gì. Học bài cũng vậy.",
  cau:[
    ["猫 妈妈 和 小猫 去 河边 钓鱼 。","māo māma hé xiǎomāo qù hébiān diàoyú 。","Mèo mẹ và mèo con ra bờ sông câu cá.",["一19","二57"]],
    ["一 只 蝴蝶 飞 来 了 ， 小猫 跑 去 和 蝴蝶 玩儿 。","yì zhī húdié fēi lái le ， xiǎomāo pǎo qù hé húdié wánr 。","Một con bướm bay tới, mèo con chạy đi chơi với bướm.",["二50","一17"]],
    ["蝴蝶 飞 走 了 ， 小猫 回来 一 看 ， 妈妈 钓 到 了 一 条 鱼 。","húdié fēi zǒu le ， xiǎomāo huílai yí kàn ， māma diào dào le yì tiáo yú 。","Bướm bay mất, mèo con quay lại nhìn thì mẹ đã câu được một con cá.",["三46","二10"]],
    ["一会儿 ， 一 只 小鸟 飞 来 了 ， 小猫 又 跑 去 看 小鸟 。","yíhuìr ， yì zhī xiǎoniǎo fēi lái le ， xiǎomāo yòu pǎo qù kàn xiǎoniǎo 。","Một lát sau, một chú chim bay tới, mèo con lại chạy đi xem chim.",["二16"]],
    ["小猫 回来 的 时候 ， 妈妈 又 钓 到 了 一 条 大 鱼 。","xiǎomāo huílai de shíhou ， māma yòu diào dào le yì tiáo dà yú 。","Lúc mèo con quay lại, mẹ lại câu được một con cá to.",["二16","三46"]],
    ["小猫 问 ： “ 妈妈 ， 我 为什么 一 条 鱼 也 没有 钓 到 ？ ”","xiǎomāo wèn ： “ māma ， wǒ wèishénme yì tiáo yú yě méiyǒu diào dào ？ ”","Mèo con hỏi: “Mẹ ơi, sao con chẳng câu được con cá nào?”",["二05","三41"]],
    ["妈妈 说 ： “ 钓鱼 的 时候 不 能 一会儿 看 蝴蝶 ， 一会儿 看 小鸟 。 ”","māma shuō ： “ diàoyú de shíhou bù néng yíhuìr kàn húdié ， yíhuìr kàn xiǎoniǎo 。 ”","Mẹ nói: “Lúc câu cá thì không được lúc thì xem bướm, lúc thì xem chim.”",["三61"]],
    ["小猫 听 了 ， 坐 在 河边 好好 地 钓鱼 ， 也 钓 到 了 一 条 大 鱼 。","xiǎomāo tīng le ， zuò zài hébiān hǎohǎo de diàoyú ， yě diào dào le yì tiáo dà yú 。","Mèo con nghe xong, ngồi bên bờ sông chăm chú câu cá, cũng câu được một con cá to.",["二08","一20"]]
  ],
  tu:{"猫":"mèo","妈妈":"mẹ","和":"và; với","小猫":"mèo con","去":"đi","河边":"bờ sông","钓鱼":"câu cá","一":"một","只":"con (lượng từ)","蝴蝶":"con bướm","飞":"bay",
      "来":"đến","了":"(rồi, đã)","跑":"chạy","玩儿":"chơi","走":"(bay) đi mất","回来":"quay lại","看":"nhìn, xem","钓":"câu","到":"được (bổ ngữ)","条":"con (lượng từ cho cá)",
      "鱼":"cá","一会儿":"một lát; (一会儿…一会儿…) lúc thì … lúc thì","小鸟":"chim non","又":"lại","的":"(trợ từ)","时候":"lúc","大":"to","问":"hỏi","我":"con, tôi",
      "为什么":"tại sao","也":"cũng","没有":"không, chưa","说":"nói","不":"không","能":"được, có thể","听":"nghe","坐":"ngồi","在":"ở","好好":"chăm chú, đàng hoàng","地":"(trợ từ: một cách…)"},
  hoi:[
    {q:"小猫和妈妈去哪儿？",vi:"Mèo con và mẹ đi đâu?",opts:["河边","商店","学校"],dap:0},
    {q:"小猫为什么没有钓到鱼？",vi:"Vì sao mèo con không câu được cá?",opts:["它一会儿看蝴蝶，一会儿看小鸟","河里没有鱼","它不会钓鱼"],dap:0},
    {q:"最后小猫钓到鱼了吗？",vi:"Cuối cùng mèo con có câu được cá không?",opts:["钓到了","没有钓到","不知道"],dap:0}
  ]
});

/* ===== 写给自己的信 (bộ thư gửi chính mình; cd:"thu")
   Bức 2 và 3: trích 《写给自己的999封信》, cô Lã tự dịch tiếng Việt ===== */

LD_BAI.push({
  id:"thu-01", ten:"给自己的一封信", tenVi:"Gửi một lá thư cho bản thân", cap:3, chude:"Thư gửi chính mình", cd:"thu",
  cau:[
    ["给 自己 的 一 封 信 ：","gěi zìjǐ de yì fēng xìn ：","Gửi chính mình:",[]],
    ["你 今天 好 吗 ？","nǐ jīntiān hǎo ma ？","Hôm nay bạn có ổn không?",[]],
    ["生活 有时候 不 容易 ， 你 会 很 累 ， 也 会 不 开心 。","shēnghuó yǒushíhòu bù róngyì ， nǐ huì hěn lèi ， yě huì bù kāixīn 。","Cuộc sống đôi khi không dễ dàng, bạn sẽ rất mệt, cũng sẽ không vui.",["一09"]],
    ["但是 ， 我 想 告诉 你 ： 今天 的 你 ， 已经 很 好 了 。","dànshì ， wǒ xiǎng gàosu nǐ ： jīntiān de nǐ ， yǐjīng hěn hǎo le 。","Nhưng mà, tôi muốn nói với bạn: bạn hôm nay đã rất tốt rồi.",["二15"]],
    ["太阳 每天 都 会 出来 ， 新 的 一 天 ， 就是 新 的 开始 。","tàiyáng měitiān dōu huì chūlai ， xīn de yì tiān ， jiùshì xīn de kāishǐ 。","Mặt trời mỗi ngày đều sẽ mọc lên — một ngày mới chính là một khởi đầu mới.",[]],
    ["每天 做 一点点 ， 慢慢 来 ， 你 会 越来越 好 的 。","měitiān zuò yīdiǎndiǎn ， mànmàn lái ， nǐ huì yuèláiyuè hǎo de 。","Mỗi ngày làm một chút, từ từ thôi, bạn sẽ ngày càng tốt hơn.",["二44"]],
    ["爱 你 的 自己","ài nǐ de zìjǐ","Bạn của chính bạn",[]]
  ],
  tu:{
    "你":"bạn","给":"gửi cho","自己":"bản thân","一":"một","封":"lá, chiếc (lượng từ cho thư)","信":"thư (bức thư)",
    "今天":"hôm nay","好":"tốt, ổn","吗":"(trợ từ hỏi yes/no)","生活":"cuộc sống",
    "有时候":"đôi khi","不":"không","容易":"dễ dàng","会":"sẽ","很":"rất","累":"mệt",
    "也":"cũng","开心":"vui vẻ","但是":"nhưng mà","我":"tôi","想":"muốn","告诉":"nói với, bảo",
    "的":"của; (trợ từ)","已经":"đã (rồi)","了":"(trợ từ hoàn thành/thay đổi)",
    "太阳":"mặt trời","每天":"mỗi ngày","都":"đều, cũng","出来":"mọc lên, ra ngoài",
    "新":"mới","天":"ngày","就是":"chính là, tức là","开始":"khởi đầu; bắt đầu",
    "做":"làm","一点点":"một chút nhỏ","慢慢":"từ từ, chậm rãi","来":"(trong 慢慢来) thôi, nào",
    "越来越":"càng ngày càng","爱":"yêu"
  },
  hoi:[
    {q:"这封信想告诉你什么？",vi:"Bức thư muốn nói với bạn điều gì?",opts:["今天的你已经很好了","要更努力学习","生活很容易"],dap:0},
    {q:"太阳每天出来代表什么？",vi:"Mặt trời mọc mỗi ngày đại diện cho điều gì?",opts:["新的一天、新的开始","天气很热","要快去上班"],dap:0},
    {q:"怎么才能越来越好？",vi:"Làm thế nào để ngày càng tốt hơn?",opts:["每天做一点点，慢慢来","一次要做很多事","等别人帮你"],dap:0}
  ]
});

LD_BAI.push({
  id:"thu-02", ten:"给自己的第二封信", tenVi:"Bức thư thứ hai gửi chính mình", cap:3, chude:"Thư gửi chính mình", cd:"thu",
  cau:[
    ["亲爱 的 自己 ：","qīn'ài de zìjǐ ：","Người thân mến của tôi:",[]],
    ["人生 ， 总 会 有 不 期 而 遇 的 温暖 ， 和 生生 不息 的 希望 。","rénshēng ， zǒng huì yǒu bù qī ér yù de wēnnuǎn ， hé shēngshēng bùxī de xīwàng 。","Cuộc đời luôn sẽ có những niềm ấm áp bất ngờ, và những hy vọng không ngừng nảy sinh.",["三15"]],
    ["不管 前方 的 路 有 多 苦 ， 只要 走 的 方向 正确 ， 不管 多么 崎岖 不平 ， 都 比 站 在 原 地 更 接近 幸福 。","bùguǎn qiánfāng de lù yǒu duō kǔ ， zhǐyào zǒu de fāngxiàng zhèngquè ， bùguǎn duōme qíqū bùpíng ， dōu bǐ zhàn zài yuán dì gèng jiējìn xìngfú 。","Dù con đường phía trước có gian khổ đến đâu, chỉ cần hướng đi đúng, dù gồ ghề đến thế nào, cũng vẫn gần hơn với hạnh phúc so với đứng mãi tại chỗ.",["二30","二67","二58"]],
    ["爱 你 的 自己","ài nǐ de zìjǐ","Bạn của chính bạn",[]]
  ],
  tu:{
    "亲爱":"thân mến, kính yêu","自己":"bản thân","你":"bạn","的":"của; (trợ từ)","和":"và","有":"có","会":"sẽ",
    "人生":"cuộc đời, nhân sinh","总":"luôn, bao giờ cũng",
    "不":"không (trong 不期而遇: không hẹn mà gặp)","期":"kỳ, hẹn trước","而":"mà, và (liên từ)","遇":"gặp, gặp gỡ",
    "温暖":"ấm áp, niềm ấm áp",
    "生生":"(trong 生生不息) sinh sôi không ngừng","不息":"không ngừng, không dừng lại",
    "希望":"hy vọng","不管":"dù, bất kể","前方":"phía trước","路":"con đường",
    "多":"bao nhiêu (trong 有多苦: khổ đến đâu)","苦":"khổ cực, gian nan",
    "只要":"chỉ cần","走":"đi, bước","方向":"phương hướng","正确":"đúng, chính xác",
    "多么":"biết bao, thật là","崎岖":"gồ ghề, khúc khuỷu","不平":"không bằng phẳng",
    "都":"đều, cũng","比":"hơn, so với","站":"đứng","在":"ở",
    "原":"nguyên, vốn là","地":"đất; hậu tố chỉ địa điểm",
    "更":"càng, hơn nữa","接近":"gần, tiếp cận","幸福":"hạnh phúc","爱":"yêu"
  },
  hoi:[
    {q:"人生'总会有'什么？",vi:"Cuộc đời 'luôn sẽ có' điều gì?",opts:["温暖和希望","困难和失败","时间和金钱"],dap:0},
    {q:"怎么做才能更接近幸福？",vi:"Làm thế nào mới gần hơn với hạnh phúc?",opts:["走的方向正确","停下来休息","在原地等待"],dap:0},
    {q:"'站在原地'在这里是什么意思？",vi:"'Đứng tại chỗ' ở đây có nghĩa là gì?",opts:["不行动、不前进","好好休息","慢慢思考"],dap:0}
  ]
});

LD_BAI.push({
  id:"thu-03", ten:"给自己的第三封信", tenVi:"Bức thư thứ ba gửi chính mình", cap:4, chude:"Thư gửi chính mình", cd:"thu",
  cau:[
    ["亲爱 的 自己 ：","qīn'ài de zìjǐ ：","Người thân mến của tôi:",[]],
    ["如果 有 一 天 ， 当 你 的 努力 配得上 你 的 梦想 ， 那么 ， 你 的 梦想 也 绝对 不 会 辜负 你 的 努力 。","rúguǒ yǒu yì tiān ， dāng nǐ de nǔlì pèidéshàng nǐ de mèngxiǎng ， nàme ， nǐ de mèngxiǎng yě juéduì bú huì gūfù nǐ de nǔlì 。","Nếu có một ngày, khi sự cố gắng của bạn xứng đáng với ước mơ của bạn, thì ước mơ đó cũng tuyệt đối sẽ không phụ lòng bạn.",["二30"]],
    ["让 自己 尽 可能 变得 优秀 ， 当 你 为 一 件 事情 拼命 努力 的 时候 ， 全 世界 都 会 帮 你 ！","ràng zìjǐ jǐn kěnéng biànde yōuxiù ， dāng nǐ wèi yí jiàn shìqing pīnmìng nǔlì de shíhou ， quán shìjiè dōu huì bāng nǐ ！","Hãy để bản thân ngày càng trở nên xuất sắc hơn — khi bạn dốc sức vì một điều gì đó, cả thế giới sẽ giúp bạn!",[]],
    ["爱 你 的 自己","ài nǐ de zìjǐ","Bạn của chính bạn",[]]
  ],
  tu:{
    "亲爱":"thân mến, kính yêu","自己":"bản thân","你":"bạn","的":"của; (trợ từ)","不":"không",
    "也":"cũng","会":"sẽ","有":"có","时候":"lúc, khi","都":"đều, cũng",
    "如果":"nếu như","一":"một","天":"ngày","当":"khi","努力":"sự cố gắng; cố gắng",
    "配得上":"xứng đáng với (bổ ngữ khả năng)","梦想":"ước mơ",
    "那么":"thì, vậy thì","绝对":"tuyệt đối, nhất định","辜负":"phụ lòng, phụ bạc",
    "让":"để, khiến","尽":"hết sức, tận","可能":"có thể","变得":"trở nên",
    "优秀":"xuất sắc, giỏi giang","为":"vì, cho","件":"chiếc, cái (lượng từ cho sự việc)",
    "事情":"việc, sự việc","拼命":"dốc sức, cố hết mình","全":"toàn bộ, cả","世界":"thế giới",
    "帮":"giúp","爱":"yêu"
  },
  hoi:[
    {q:"努力配得上梦想，梦想会怎样？",vi:"Cố gắng xứng đáng với ước mơ, ước mơ sẽ thế nào?",opts:["不会辜负你的努力","让你更累","变得更难"],dap:0},
    {q:"让自己'尽可能变得优秀'，需要怎么做？",vi:"Muốn bản thân hết sức trở nên xuất sắc hơn, cần làm gì?",opts:["拼命努力","等待机会","让别人帮你"],dap:0},
    {q:"当你为一件事情拼命努力，会发生什么？",vi:"Khi bạn dốc sức vì một điều gì đó, điều gì sẽ xảy ra?",opts:["全世界都会帮你","没有人帮你","你会很累"],dap:0}
  ]
});
