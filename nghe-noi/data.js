// 听说盒 — dữ liệu hội thoại. Mỗi bài: sach (mã giáo trình), bai, ten, doan[].
// Mỗi đoạn: ten, vai {A:[tên Trung, tên Việt], B:[…]}, cau [[vai, hán, pinyin, nghĩa]],
//   hoi (câu hỏi nghe hiểu: q hán, vi nghĩa đề, opts, dap = vị trí đáp án đúng),
//   viet (chỉ số câu dùng cho nghe – viết; đáp án nhiều cách "A / B", phần có thể bỏ trong （）).
window.NN_BAI=window.NN_BAI||[];
NN_BAI.push({
  id:"301/bai-11", sach:"301", sachTen:"汉语会话301句", bai:11, ten:"我要买橘子", tenVi:"Tôi muốn mua quýt", hsk:"1–3",  // cấp theo từ vựng đề cương thi HSK 2025 (斤 毛 种 尝 别的 = HSK 3; 橘子 = HSK 5)
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
