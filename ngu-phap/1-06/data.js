// Bài ngữ pháp 【一06】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一06", title:"指示代词", vi:"Đại từ chỉ thị — này, kia, đây, đó, những…", tag:"词类 · 代词",
goals:[
 "Dùng <b>这 / 那</b> (gần / xa) cùng các dạng 这儿、那儿、这里、那里、这些、那些.",
 "Nhớ trật tự <b>这 / 那 + (số) + lượng từ + danh từ</b> — ngược tiếng Việt “quyển sách <b>này</b>”.",
 "Dùng <b>别的</b> (khác) và cặp <b>有的……，有的……</b> (có người…, có người…)."],
intro:"Tiếng Việt đặt “này, kia” <b>sau</b> danh từ; tiếng Trung đặt 这、那 <b>trước</b>, và giữa chúng với danh từ thường có <b>lượng từ</b>.",
rules:[
 {cap:[1], t:"这 / 那 làm chủ ngữ hoặc đứng trước danh từ", sub:"近指 · 远指", fx:[["这 / 那",null],["(số)",""],["Lượng từ","个、本…"],["Danh từ",""]], mean:"这 = này / đây (gần), 那 = kia / đó (xa). 这是…, 那是… thì không cần lượng từ.",
  ex:[["{1|这}是谁的手机？","Zhè shì shéi de shǒujī?","Đây là điện thoại của ai?","等级标准"],
      ["她喜欢{1|那}{3|个}{4|书包}。","Tā xǐhuan nàge shūbāo.","Cô ấy thích cái cặp kia.","等级标准"]]},
 {cap:[1], t:"Nơi chốn: 这儿、那儿、这里、那里", sub:"处所", fx:[["这儿 / 这里",null],["·",""],["那儿 / 那里",null]], mean:"đây, chỗ này · đó, chỗ kia",
  ex:[["{1|这儿}很好。","Zhèr hěn hǎo.","Chỗ này rất tốt.","等级标准"],
      ["我去{2|那儿}学习。","Wǒ qù nàr xuéxí.","Tôi đến đó học.","等级标准"],
      ["你坐{1|这里}，弟弟坐{2|那里}。","Nǐ zuò zhèli, dìdi zuò nàli.","Bạn ngồi đây, em trai ngồi đó.","等级标准"]]},
 {cap:[1], t:"Số nhiều: 这些、那些", sub:"những… này / kia", fx:[["这些 / 那些",null],["Danh từ",""]], mean:"Không cần lượng từ; không thêm 们 cho đồ vật.",
  ex:[["{1|这些}{2|书}很新。","Zhèxiē shū hěn xīn.","Những quyển sách này rất mới.","等级标准"],
      ["{1|那些}{2|东西}都很贵。","Nàxiē dōngxi dōu hěn guì.","Những thứ kia đều rất đắt.","等级标准"]]},
 {cap:[3], t:"别的 + danh từ", sub:"khác", fx:[["别的",null],["Danh từ",""]], mean:"别的 + N = … khác.",
  ex:[["你还要{1|别的}{2|东西}吗？","Nǐ hái yào biéde dōngxi ma?","Bạn còn cần thứ gì khác không?","等级标准"]]},
 {cap:[1], t:"有的……，有的……", sub:"có… có…", fx:[["有的",null],["N + V1",""],["，",""],["有的",null],["N + V2",""]], mean:"有的…有的… = một số … , một số …",
  ex:[["{1|有的}{2|同学在休息}，{3|有的}{4|同学在看书}。","Yǒude tóngxué zài xiūxi, yǒude tóngxué zài kàn shū.","Có bạn đang nghỉ, có bạn đang đọc sách.","等级标准"]]},
 {cap:[1], t:"有些 + danh từ", sub:"một số", fx:[["有些",null],["Danh từ",""],["V / Adj",""]], mean:"有些 = một số, như 有的.",
  ex:[["{1|有些}{2|人}{3|喜欢喝茶}。", "Yǒuxiē rén xǐhuan hē chá.", "Một số người thích uống trà."],
      ["{1|有些}{2|书}{3|很贵}。", "Yǒuxiē shū hěn guì.", "Một số sách rất đắt."]]},
 {cap:[3], t:"其他 + danh từ", sub:"khác, còn lại", fx:[["其他",null],["Danh từ",""],["V / Adj",""]], mean:"其他 = những … còn lại; trang trọng hơn 别的.",
  ex:[["{1|其他}{2|同学}{3|都来了}。", "Qítā tóngxué dōu lái le.", "Các bạn khác đều đến rồi."],
      ["{1|其他}{2|问题}{3|明天再说}。", "Qítā wèntí míngtiān zài shuō.", "Các vấn đề khác mai bàn tiếp."]]}],
notes:[
 {t:"Đọc", html:"这个 thường đọc <b>zhège</b> / <b>zhèige</b>, 那个 <b>nàge</b> / <b>nèige</b>, 这儿 <b>zhèr</b>, 那儿 <b>nàr</b>."}],
cmp:[
 {vn:"quyển sách này", zh:"[这本]书", py:"zhè běn shū", ok:true, why:"“này” lên trước, thêm lượng từ 本."},
 {vn:"những người kia", zh:"[那些]人", py:"nàxiē rén", ok:true, why:"那些 + danh từ, không cần lượng từ."},
 {vn:"Đây là sách của tôi.", zh:"[这]是我的书。", py:"Zhè shì wǒ de shū.", ok:true, why:"这是 + danh từ: không cần lượng từ."}],
ex:[
 ["[这个]菜很好吃。","Zhège cài hěn hǎochī.","Món này rất ngon."],
 ["[那]是我们的学校。","Nà shì wǒmen de xuéxiào.","Kia là trường của chúng tôi."],
 ["[这些]是我的书。","Zhèxiē shì wǒ de shū.","Những cái này là sách của tôi."],
 ["我在[这儿]等你。","Wǒ zài zhèr děng nǐ.","Tôi đợi bạn ở đây."],
 ["[有的]人喜欢喝茶，[有的]人喜欢喝咖啡。","Yǒude rén xǐhuan hē chá, yǒude rén xǐhuan hē kāfēi.","Có người thích uống trà, có người thích cà phê."]],
errs:[
 {bad:"书包这个很好看。", good:"这个书包很好看。", why:"这 / 那 đứng <b>trước</b> danh từ."},
 {bad:"我喜欢这书包。", good:"我喜欢这个书包。", why:"Trước danh từ thường cần lượng từ."},
 {bad:"这是我的书们。", good:"这些是我的书。", why:"Đồ vật không thêm 们; số nhiều dùng 这些."},
 {bad:"那些个书很贵。", good:"那些书很贵。", why:"这些 / 那些 không kèm lượng từ 个."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cái cặp này rất đẹp.", o:["书包这个很好看。","这个书包很好看。","这书包个很好看。"], a:1, why:"这 + lượng từ + N."},
  {q:"Những quyển sách kia rất mới.", o:["那些书很新。","那些本书很新。","书那些很新。"], a:0, why:"那些 + N."},
  {q:"Bạn ngồi đây nhé.", o:["你坐这。","你坐这儿。","你这儿坐。"], a:1, why:"Nơi chốn: 这儿 / 这里."},
  {q:"Có bạn đang ngủ, có bạn đang đọc sách.", o:["有的同学在睡觉，有的同学在看书。","有同学在睡觉，有同学看书的。","别的同学在睡觉，有的同学在看书。"], a:0, why:"有的…，有的…"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","喜欢","那个","书包"], a:"她喜欢那个书包。", vi:"Cô ấy thích cái cặp kia."},
  {w:["这些","书","很","新"], a:"这些书很新。", vi:"Những quyển sách này rất mới."},
  {w:["你","还","要","别的","东西","吗"], a:"你还要别的东西吗？", vi:"Bạn còn cần thứ gì khác không?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Đây là điện thoại của ai?", a:"这是谁的手机？"},
  {q:"Tôi đến đó học.", a:"我去那儿（那里）学习。"},
  {q:"Món này rất ngon.", a:"这个菜很好吃。"}]},
 {t:"D. Từ bổ sung", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿人喜欢喝咖啡，有些人喜欢喝茶。", vi:"Người thích cà phê, người thích trà.", o:["有些", "这么", "多少"], a:0, why:"有些……有些……."},
  {q:"只有小王没来，＿人都到了。", vi:"Chỉ Tiểu Vương chưa đến, những người khác đều đến rồi.", o:["其他", "哪些", "每"], a:0, why:"其他 = còn lại."}]}],
rel:["一36","一08","三08","二07"]
};
