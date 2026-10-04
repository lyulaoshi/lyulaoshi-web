// 阅读盒 — bài tự đọc. Mỗi bài: LD_BAI.push({...}).
//   id (tên thư mục trong link #id), ten, tenVi, cap (cấp HSK của bài, số lớn nhất), chude
//   cau: [chữ Hán tách từ bằng dấu cách, pinyin tách đúng từng từ (ghi biến điệu như sách: yí ge), nghĩa Việt, [mã ngữ pháp]]
//   tu:  { từ: nghĩa Việt }  — nghĩa từng từ trong bài (pinyin lấy từ câu; cấp HSK tra ../tro-choi/hsk-words.js)
//   hoi: câu hỏi đọc hiểu {q, vi, opts, dap} · rieng: tên riêng (không tính là từ mới)
// Mã ngữ pháp dạng 一36 → mở /ngu-phap/1-36/ (tên lấy từ ../ngu-phap/hsk-ngu-phap.js).
window.LD_BAI=window.LD_BAI||[];

LD_BAI.push({
  id:"ban-than", ten:"我的好朋友", tenVi:"Người bạn thân của tôi", cap:1, chude:"Bạn bè", rieng:["小月","北京"],
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
  id:"di-cho", ten:"去商店", tenVi:"Đi cửa hàng", cap:2, chude:"Mua sắm",
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
