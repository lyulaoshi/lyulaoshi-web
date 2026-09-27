// Bài ngữ pháp 【二35】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二35", title:"其他助词：的话、等", vi:"Trợ từ 的话 “nếu … thì” và 等 “vân vân”", tag:"词类 · 助词",
goals:[
 "Dùng <b>……的话，(就)……</b> để nêu giả định (nếu …).",
 "Dùng <b>等</b> sau một danh sách (vân vân, v.v.).",
 "Kết hợp <b>如果……的话</b>."],
intro:"的话 đứng <b>cuối vế điều kiện</b> (như “nếu … thì”), 等 đứng <b>cuối danh sách</b> liệt kê.",
rules:[
 {t:"(如果) ……的话，(S) 就……", sub:"的话", fx:[["(如果) Điều kiện",""],["的话",null],["，(S) 就",""],["Kết quả",""]], mean:"Nếu … thì … 【二66】",
  ex:[["你要来[的话]，就给我打个电话，我去接你。","Nǐ yào lái dehuà, jiù gěi wǒ dǎ ge diànhuà, wǒ qù jiē nǐ.","Nếu bạn định đến thì gọi cho tôi, tôi ra đón.","等级标准"]]},
 {t:"A、B、C 等", sub:"等", fx:[["A、B、C",""],["等",null]], mean:"Liệt kê chưa hết (vân vân) hoặc kết thúc danh sách.",
  ex:[["我去超市买了很多东西，有酒、水果、牛奶[等]。","Wǒ qù chāoshì mǎi le hěn duō dōngxi, yǒu jiǔ, shuǐguǒ, niúnǎi děng.","Tôi đi siêu thị mua nhiều thứ, có rượu, hoa quả, sữa v.v.","等级标准"]]}],
notes:[
 {t:"等 và 什么的", html:"<span class='zh'>什么的</span> 【二43】 mang màu khẩu ngữ hơn: <span class='zh'>水果、面包什么的</span>."}],
cmp:[
 {vn:"Nếu mai mưa thì tôi không đi.", zh:"明天下雨[的话]，我就不去了。", py:"Míngtiān xià yǔ dehuà, wǒ jiù bú qù le.", ok:true, why:"“nếu” đứng đầu tiếng Việt; 的话 đứng cuối vế tiếng Trung."}],
ex:[
 ["有时间[的话]，来我家玩儿吧。","Yǒu shíjiān dehuà, lái wǒ jiā wánr ba.","Nếu có thời gian thì đến nhà tôi chơi nhé."],
 ["如果你不舒服[的话]，就早点儿回家。","Rúguǒ nǐ bù shūfu dehuà, jiù zǎo diǎnr huí jiā.","Nếu bạn không khỏe thì về nhà sớm đi."],
 ["我们学了汉字、语法[等]。","Wǒmen xué le Hànzì, yǔfǎ děng.","Chúng tôi đã học chữ Hán, ngữ pháp v.v."]],
errs:[
 {bad:"的话你要来，……", good:"你要来的话，……", why:"的话 đứng cuối vế điều kiện."},
 {bad:"等苹果、香蕉", good:"苹果、香蕉等", why:"等 đứng sau danh sách."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nếu có thời gian thì đến chơi nhé.", o:["的话有时间，来玩儿吧。","有时间的话，来玩儿吧。","有时间，的话来玩儿吧。"], a:1, why:"…的话，…"},
  {q:"táo, chuối v.v.", o:["等苹果、香蕉","苹果、香蕉等","苹果等、香蕉"], a:1, why:"等 cuối danh sách."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","要来","的话","就","给我","打个电话"], a:"你要来的话，就给我打个电话。", vi:"Nếu bạn định đến thì gọi cho tôi."},
  {w:["我们","学了","汉字","语法","等"], a:"我们学了汉字、语法等。", vi:"Chúng tôi đã học chữ Hán, ngữ pháp v.v."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Nếu không khỏe thì về nhà sớm đi.", a:"（如果）不舒服的话，就早点儿回家吧。"},
  {q:"Tôi mua rượu, hoa quả, sữa v.v.", a:"我买了酒、水果、牛奶等。"}]}],
rel:["二66","二43","二17","二30"]
};
