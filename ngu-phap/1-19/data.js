// Bài ngữ pháp 【一19】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一19", title:"连词：跟、还是、和", vi:"Liên từ 和, 跟 “và” · 还是 “hay là”", tag:"词类 · 连词",
goals:[
 "Dùng <b>和 / 跟</b> nối hai danh từ, đại từ (tôi <b>và</b> em trai).",
 "Không dùng 和 để nối hai câu hay hai động từ như chữ “và” tiếng Việt.",
 "Dùng <b>还是</b> trong câu hỏi lựa chọn (A hay B?)."],
intro:"和、跟 ở đây là <b>liên từ</b>: nối các danh từ ngang hàng. 还是 nối hai khả năng trong <b>câu hỏi</b>.",
rules:[
 {t:"A 和 / 跟 B (danh từ, đại từ)", sub:"和² · 跟²", fx:[["Danh từ A",""],["和 / 跟",null],["Danh từ B",""]], mean:"Nhiều người / vật cùng làm chủ ngữ hoặc tân ngữ; hay đi với 都.",
  ex:[["爸爸[跟]妈妈都不在家。","Bàba gēn māma dōu bú zài jiā.","Bố và mẹ đều không ở nhà.","等级标准"],
      ["我[和]弟弟都学习中文。","Wǒ hé dìdi dōu xuéxí Zhōngwén.","Tôi và em trai đều học tiếng Trung.","等级标准"]]},
 {t:"A 还是 B？", sub:"还是", fx:[["(Chủ ngữ) V + A",""],["还是",null],["(V) + B","？"]], mean:"Hỏi chọn một trong hai. Câu có 还是 <b>không thêm 吗</b> 【一47】.",
  ex:[["你喝茶[还是]喝水？","Nǐ hē chá háishi hē shuǐ?","Bạn uống trà hay uống nước?","等级标准"],
      ["你是老师[还是]学生？","Nǐ shì lǎoshī háishi xuésheng?","Bạn là giáo viên hay học sinh?"]]}],
notes:[
 {t:"“và” nối hai câu", html:"tiếng Trung thường <b>không</b> dùng 和, chỉ ngắt bằng dấu phẩy hoặc dùng 也 / 还: <span class='zh'>我喜欢唱歌，他喜欢跳舞。</span>"},
 {t:"Nhiều danh từ", html:"和 đặt trước danh từ cuối: <span class='zh'>苹果、面包和牛奶</span>."}],
cmp:[
 {vn:"Tôi và em trai", zh:"我[和]弟弟", py:"wǒ hé dìdi", ok:true, why:"Nối hai đại từ / danh từ — giống tiếng Việt."},
 {vn:"Tôi đi cửa hàng và mua đồ.", zh:"我去商店买东西。", py:"Wǒ qù shāngdiàn mǎi dōngxi.", ok:false, tag:"(không dùng 和)", why:"Hai động từ nối liền nhau, không cần 和."},
 {vn:"Uống trà hay cà phê?", zh:"喝茶[还是]喝咖啡？", py:"Hē chá háishi hē kāfēi?", ok:true, why:"“hay” trong câu hỏi → 还是."}],
ex:[
 ["我[和]我朋友都是越南人。","Wǒ hé wǒ péngyou dōu shì Yuènán rén.","Tôi và bạn tôi đều là người Việt Nam."],
 ["我买了苹果、面包[和]牛奶。","Wǒ mǎi le píngguǒ, miànbāo hé niúnǎi.","Tôi mua táo, bánh mì và sữa."],
 ["你今天去[还是]明天去？","Nǐ jīntiān qù háishi míngtiān qù?","Bạn đi hôm nay hay ngày mai?"],
 ["这是你的[还是]他的？","Zhè shì nǐ de háishi tā de?","Cái này của bạn hay của anh ấy?"]],
errs:[
 {bad:"我去商店和买东西。", good:"我去商店买东西。", why:"和 không nối hai động từ."},
 {bad:"我喜欢唱歌和他喜欢跳舞。", good:"我喜欢唱歌，他喜欢跳舞。", why:"和 không nối hai câu."},
 {bad:"你喝茶还是喝水吗？", good:"你喝茶还是喝水？", why:"Câu có 还是 không thêm 吗."},
 {bad:"你喝茶或者喝水？", good:"你喝茶还是喝水？", why:"Hỏi lựa chọn dùng 还是 (或者 dùng trong câu kể 【二29】)."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bố và mẹ đều không ở nhà.", o:["爸爸跟妈妈都不在家。","爸爸都跟妈妈不在家。","爸爸不在家和妈妈。"], a:0, why:"A 跟 B 都…"},
  {q:"Bạn uống trà hay uống nước?", o:["你喝茶还是喝水吗？","你喝茶和喝水？","你喝茶还是喝水？"], a:2, why:"还是, không có 吗."},
  {q:"Tôi đi cửa hàng mua đồ.", o:["我去商店和买东西。","我去商店买东西。","我和去商店买东西。"], a:1, why:"Không dùng 和 nối động từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","和","弟弟","都","学习","中文"], a:"我和弟弟都学习中文。", vi:"Tôi và em trai đều học tiếng Trung."},
  {w:["你","是","老师","还是","学生"], a:"你是老师还是学生？", vi:"Bạn là giáo viên hay học sinh?"},
  {w:["这","是","你的","还是","他的"], a:"这是你的还是他的？", vi:"Cái này của bạn hay của anh ấy?"}]},
 {t:"C. Sửa câu sai", sub:"tự sửa rồi xem đáp án", type:"show", items:[
  {q:"我吃饭和喝茶。", bad:true, a:"我吃饭，喝茶。/ 我吃饭，也喝茶。"},
  {q:"你去还是不去吗？", bad:true, a:"你去还是不去？"},
  {q:"他是老师和我是学生。", bad:true, a:"他是老师，我是学生。"}]}],
rel:["一17","一47","一33","二29"]
};
