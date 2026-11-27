// Bài ngữ pháp 【新5.17】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.17", title:"连词：从而、可见、假如、总之", vi:"从而, 可见, 假如, 总之 — nhờ đó, đủ thấy, giả như, tóm lại", tag:"词类 · 连词",
goals:[
 "Dùng <b>从而</b> nối nguyên nhân / cách làm với <b>kết quả đạt được</b>.",
 "Dùng <b>可见</b> để rút ra nhận xét, <b>总之</b> để tổng kết.",
 "Dùng <b>假如</b> nêu giả thiết (như 如果)."],
intro:"Bốn liên từ nối <b>câu với câu</b>, rất cần khi viết đoạn văn HSK 5.",
rules:[
 {t:"Cách làm，从而 + kết quả", sub:"（1）从而", fx:[["cách làm",""],["，",""],["从而",null],["kết quả",""]], mean:"Nhờ đó mà …",
  ex:[["{1|公司改进了技术}，{2|从而}{3|提高了产量}。","Gōngsī gǎijìnle jìshù, cóng'ér tígāole chǎnliàng.","Công ty cải tiến kỹ thuật, nhờ đó tăng sản lượng."]]},
 {t:"Sự việc，可见 + nhận xét", sub:"（2）可见", fx:[["sự việc",""],["，",""],["可见",null],["nhận xét",""]], mean:"Đủ thấy …",
  ex:[["{1|他连节日都在工作}，{2|可见}{3|他有多忙}。","Tā lián jiérì dōu zài gōngzuò, kějiàn tā yǒu duō máng.","Ngày lễ anh ấy cũng làm việc, đủ thấy bận thế nào."]]},
 {t:"假如 + giả thiết，(S) 就 …", sub:"（3）假如", fx:[["假如",null],["giả thiết",""],["，",""],["kết quả",""]], mean:"Giả như …",
  ex:[["{1|假如}{2|有一天你离开这里}，{3|你会想念什么}？","Jiǎrú yǒu yì tiān nǐ líkāi zhèlǐ, nǐ huì xiǎngniàn shénme?","Giả như một ngày bạn rời nơi này, bạn sẽ nhớ gì?"]]},
 {t:"Các ý …，总之，kết luận", sub:"（4）总之", fx:[["các ý",""],["，",""],["总之",null],["，",""],["kết luận",""]], mean:"Tóm lại …",
  ex:[["{1|唱歌、画画儿、打球}，{2|总之}，{3|他什么都喜欢}。","Chànggē, huà huàr, dǎ qiú, zǒngzhī, tā shénme dōu xǐhuan.","Hát, vẽ, chơi bóng, tóm lại cái gì anh ấy cũng thích."]]}],
cmp:[
 {vn:"Tóm lại, chúng ta phải chuẩn bị kỹ.", zh:"[总之]，我们要做好准备。", py:"Zǒngzhī, wǒmen yào zuòhǎo zhǔnbèi.", ok:true, why:"总之 đứng đầu câu, có dấu phẩy."}],
ex:[
 ["多读书可以增加知识，[从而]开阔眼界。","Duō dú shū kěyǐ zēngjiā zhīshi, cóng'ér kāikuò yǎnjiè.","Đọc nhiều giúp tăng kiến thức, nhờ đó mở rộng tầm mắt."],
 ["大家都说好，[可见]这个办法不错。","Dàjiā dōu shuō hǎo, kějiàn zhège bànfǎ búcuò.","Ai cũng khen, đủ thấy cách này hay."],
 ["[假如]我是你，我就接受这个工作。","Jiǎrú wǒ shì nǐ, wǒ jiù jiēshòu zhège gōngzuò.","Nếu là bạn, tôi sẽ nhận công việc này."]],
errs:[
 {bad:"天下雨了，从而我们没去。", good:"天下雨了，因此我们没去。", why:"从而 chỉ kết quả đạt được nhờ một cách làm, không thay cho 因此 trong mọi trường hợp."},
 {bad:"他很忙，可见了。", good:"他节日也在工作，可见很忙。", why:"可见 phải dẫn tới một nhận xét ở sau."},
 {bad:"假如我是你，但是我接受。", good:"假如我是你，我就接受。", why:"Vế sau của 假如 dùng 就, không dùng 但是."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他改进了学习方法，＿提高了成绩。", vi:"Em ấy cải tiến cách học, nhờ đó nâng cao thành tích.", o:["从而","假如","总之"], a:0, why:"Nhờ đó → 从而."},
  {q:"这么多人排队，＿这家店很受欢迎。", vi:"Đông người xếp hàng thế, đủ thấy quán được ưa chuộng.", o:["可见","以及","假如"], a:0, why:"Rút nhận xét → 可见."},
  {q:"＿明天下雨，比赛就取消。", vi:"Nếu mai mưa thì hủy thi đấu.", o:["假如","总之","从而"], a:0, why:"Giả thiết → 假如."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["总之，","我们","要","做好","准备"], a:"总之，我们要做好准备。", vi:"Tóm lại, chúng ta phải chuẩn bị kỹ."},
  {w:["假如","我是你，","我就","接受","这个工作"], a:"假如我是你，我就接受这个工作。", vi:"Nếu là bạn, tôi sẽ nhận công việc này."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Ai cũng khen, đủ thấy cách này hay.", a:"大家都说好，可见这个办法不错。/ 大家都说好，可见这个办法很好。"}]}],
rel:["三71","二66","新5.37"]
};
