// Bài ngữ pháp 【二58】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二58", title:"比较句2", vi:"Câu so sánh 2 — hơn bao nhiêu, còn hơn, không bằng, bằng", tag:"句子的类型 · 特殊句型",
goals:[
 "So sánh có mức chênh: <b>A 比 B + Adj + số lượng / 一点儿</b>.",
 "Nhấn mạnh: <b>A 比 B + 更 / 还 + Adj</b>.",
 "Dùng <b>A 不如 B (+ Adj)</b> và <b>A 有 B (这么 / 那么) + Adj</b>."],
intro:"HSK 2 mở rộng câu so sánh 【一38】 thành 4 khung. Nhớ chung: <b>không dùng 很 / 非常</b> trong câu 比.",
rules:[
 {t:"A 比 B + Adj + số lượng", sub:"（1）", fx:[["A 比 B",""],["Tính từ",""],["số lượng / 一点儿 / 一些",null]], mean:"Hơn bao nhiêu 【二53】.",
  ex:[["姐姐比我大[两岁]。","Jiějie bǐ wǒ dà liǎng suì.","Chị lớn hơn tôi hai tuổi.","等级标准"],
      ["房间外边比里边凉快[一些]。","Fángjiān wàibian bǐ lǐbian liángkuai yìxiē.","Bên ngoài phòng mát hơn bên trong một chút.","等级标准"]]},
 {t:"A 比 B + 更 / 还 + Adj", sub:"（2）", fx:[["A 比 B",""],["更 / 还",null],["Tính từ",""]], mean:"B đã … rồi, A còn … hơn.",
  ex:[["他的手机比我的[更]贵。","Tā de shǒujī bǐ wǒ de gèng guì.","Điện thoại của anh ấy còn đắt hơn của tôi.","等级标准"],
      ["今天比昨天[还]凉快。","Jīntiān bǐ zuótiān hái liángkuai.","Hôm nay còn mát hơn hôm qua.","等级标准"]]},
 {t:"A 不如 B (+ Adj)", sub:"（3）", fx:[["A",""],["不如",null],["B",""],["(Tính từ)",""]], mean:"A không bằng B (B tốt hơn).",
  ex:[["我的中文成绩[不如]班长。","Wǒ de Zhōngwén chéngjì bùrú bānzhǎng.","Điểm tiếng Trung của tôi không bằng lớp trưởng.","等级标准"],
      ["火车[不如]飞机快。","Huǒchē bùrú fēijī kuài.","Tàu hỏa không nhanh bằng máy bay.","等级标准"]]},
 {t:"A 有 B (这么 / 那么) + Adj", sub:"（4）", fx:[["A",""],["有",null],["B",""],["(这么 / 那么)",""],["Tính từ",""]], mean:"A bằng B / đạt tới mức B; thường dùng trong câu hỏi, phủ định (没有).",
  ex:[["你哥哥[有]你高吗？","Nǐ gēge yǒu nǐ gāo ma?","Anh trai bạn có cao bằng bạn không?","等级标准"],
      ["她家的院子[有]篮球场那么大。","Tā jiā de yuànzi yǒu lánqiúchǎng nàme dà.","Sân nhà cô ấy rộng bằng sân bóng rổ.","等级标准"]]}],
cmp:[
 {vn:"Chị lớn hơn tôi hai tuổi.", zh:"姐姐比我大[两岁]。", py:"Jiějie bǐ wǒ dà liǎng suì.", ok:true, why:"Số tuổi sau tính từ."},
 {vn:"Hôm nay còn lạnh hơn hôm qua.", zh:"今天比昨天[更]冷。", py:"Jīntiān bǐ zuótiān gèng lěng.", ok:true, why:"“còn … hơn” = 更 / 还, không dùng 很."}],
ex:[
 ["这个比那个便宜[一点儿]。","Zhège bǐ nàge piányi yìdiǎnr.","Cái này rẻ hơn cái kia một chút."],
 ["走路[不如]坐车快。","Zǒu lù bùrú zuò chē kuài.","Đi bộ không nhanh bằng đi xe."],
 ["我[没有]他那么高。","Wǒ méiyǒu tā nàme gāo.","Tôi không cao bằng anh ấy."]],
errs:[
 {bad:"他的手机比我的很贵。", good:"他的手机比我的更贵。", why:"Trong câu 比 dùng 更 / 还, không dùng 很."},
 {bad:"姐姐比我两岁大。", good:"姐姐比我大两岁。", why:"Số lượng sau tính từ."},
 {bad:"火车不如快飞机。", good:"火车不如飞机快。", why:"不如 + B + Adj."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay còn mát hơn hôm qua.", o:["今天比昨天很凉快。","今天比昨天还凉快。","今天还比昨天凉快很。"], a:1, why:"比……还 Adj."},
  {q:"Tàu hỏa không nhanh bằng máy bay.", o:["火车不如飞机快。","火车不如快飞机。","火车比飞机不快。"], a:0, why:"不如 B Adj."},
  {q:"Anh trai bạn có cao bằng bạn không?", o:["你哥哥有你高吗？","你哥哥比你高吗有？","你哥哥高有你吗？"], a:0, why:"有 B Adj."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他的手机","比","我的","更","贵"], a:"他的手机比我的更贵。", vi:"Điện thoại của anh ấy còn đắt hơn của tôi."},
  {w:["我的","中文成绩","不如","班长"], a:"我的中文成绩不如班长。", vi:"Điểm tiếng Trung của tôi không bằng lớp trưởng."}]},
 {t:"C. Viết lại theo yêu cầu", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Dùng 不如", q:"飞机比火车快。", vi:"Máy bay nhanh hơn tàu hỏa.", a:"火车不如飞机快。"},
  {ask:"Dùng 没有……那么", q:"他比我高。", vi:"Anh ấy cao hơn tôi.", a:"我没有他那么高。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"他比我很高。", vi:"Anh ấy cao hơn tôi nhiều.", o:["Đúng","Sai"], a:1, why:"Không dùng 很 trong câu 比: 他比我高多了。/ 他比我高得多。"},
  {q:"我比他大两岁。", vi:"Tôi lớn hơn anh ấy hai tuổi.", o:["Đúng","Sai"], a:0, why:"Số lượng đứng sau tính từ."},
  {q:"今天比昨天更冷。", vi:"Hôm nay còn lạnh hơn hôm qua.", o:["Đúng","Sai"], a:0, why:"比……更 + Adj."},
  {q:"我比他两岁大。", vi:"Tôi lớn hơn anh ấy hai tuổi.", o:["Đúng","Sai"], a:1, why:"Số lượng đứng sau tính từ: 我比他大两岁。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi cao hơn em gái 5 cm.", o:["我比妹妹高五厘米。", "我比妹妹五厘米高。"], a:0, why:"比 B + Adj + số lượng."},
  {q:"Tiếng Anh của tôi không bằng anh ấy.", o:["我的英语不如他。", "我的英语不比如他。", "我的英语如不他。"], a:0, why:"A 不如 B."},
  {q:"Em trai không cao bằng anh trai.", o:["弟弟没有哥哥那么高。", "弟弟没有哥哥很高。"], a:0, why:"没有 B 那么 + Adj, không dùng 很."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hôm nay nóng hơn hôm qua.", a:"今天比昨天热。/ 今天比昨天还热。/ 今天比昨天更热。"},
  {q:"Anh ấy lớn hơn tôi ba tuổi.", a:"他比我大三岁。"},
  {q:"Tàu hỏa không nhanh bằng máy bay.", a:"火车不如飞机快。/ 火车没有飞机快。/ 火车没有飞机那么快。"}]}],
rel:["一38","二53","二59","三58"]
};
