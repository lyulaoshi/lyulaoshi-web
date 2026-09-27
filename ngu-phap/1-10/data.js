// Bài ngữ pháp 【一10】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一10", title:"范围、协同副词：都、一块儿、一起", vi:"Phó từ 都 “đều”, 一块儿 / 一起 “cùng nhau”", tag:"词类 · 副词",
goals:[
 "Dùng <b>都</b> sau chủ ngữ số nhiều để nói “đều, tất cả”.",
 "Dùng <b>一起 / 一块儿</b> trước động từ; kết hợp <b>跟 / 和 …… 一起</b>.",
 "Nhớ thứ tự <b>也都</b> và phân biệt <b>都不 / 不都</b>."],
intro:"都、一起、一块儿 đều là phó từ: đứng <b>sau chủ ngữ, trước động từ</b> (hoặc tính từ).",
rules:[
 {t:"都: đều, tất cả", sub:"都¹", fx:[["Chủ ngữ số nhiều","我们、同学们…"],["都",null],["Động từ / tính từ",""]], mean:"都 “gom” những người / vật đứng <b>trước</b> nó.",
  ex:[["同学们[都]很认真。","Tóngxuémen dōu hěn rènzhēn.","Các bạn học đều rất chăm chỉ.","等级标准"],
      ["我们[都]是越南人。","Wǒmen dōu shì Yuènán rén.","Chúng tôi đều là người Việt Nam."]]},
 {t:"一起 / 一块儿: cùng nhau", sub:"协同", fx:[["Chủ ngữ",""],["(跟 / 和 + người)",""],["一起 / 一块儿",null],["Động từ",""]], mean:"一块儿 (yíkuàir) mang màu khẩu ngữ hơn 一起.",
  ex:[["我们常[一块儿]玩儿。","Wǒmen cháng yíkuàir wánr.","Chúng tôi thường chơi cùng nhau.","等级标准"],
      ["明天他们[一起]去图书馆。","Míngtiān tāmen yìqǐ qù túshūguǎn.","Ngày mai họ cùng đi thư viện.","等级标准"],
      ["我跟妈妈[一起]去商店。","Wǒ gēn māma yìqǐ qù shāngdiàn.","Tôi cùng mẹ đi cửa hàng."]]}],
notes:[
 {t:"也 + 都", html:"也 đứng trước 都: <span class='zh'>他们也都是学生。</span> (✗ 都也)"},
 {t:"都不 ≠ 不都", html:"<span class='zh'>我们都不去。</span> = tất cả đều không đi. <span class='zh'>我们不都去。</span> = không phải tất cả đều đi."}],
cmp:[
 {vn:"Chúng tôi đều là sinh viên.", zh:"我们[都]是学生。", py:"Wǒmen dōu shì xuésheng.", ok:true, why:"“đều” đứng trước động từ — giống tiếng Việt."},
 {vn:"Tôi đi thư viện cùng bạn.", zh:"我跟朋友[一起]去图书馆。", py:"Wǒ gēn péngyou yìqǐ qù túshūguǎn.", ok:true, why:"“cùng bạn” đứng cuối tiếng Việt, nhưng tiếng Trung đưa 跟…一起 lên trước động từ."}],
ex:[
 ["他们[都]喜欢喝茶。","Tāmen dōu xǐhuan hē chá.","Họ đều thích uống trà."],
 ["这些书[都]很新。","Zhèxiē shū dōu hěn xīn.","Những quyển sách này đều rất mới."],
 ["我们[一起]吃饭吧。","Wǒmen yìqǐ chī fàn ba.","Chúng mình cùng ăn cơm đi."],
 ["他们也[都]是老师。","Tāmen yě dōu shì lǎoshī.","Họ cũng đều là giáo viên."],
 ["我们[都]不去。","Wǒmen dōu bú qù.","Chúng tôi đều không đi."]],
errs:[
 {bad:"都同学们很认真。", good:"同学们都很认真。", why:"都 đứng <b>sau</b> chủ ngữ."},
 {bad:"我们是都学生。", good:"我们都是学生。", why:"都 đứng trước động từ 是."},
 {bad:"我们都也是学生。", good:"我们也都是学生。", why:"Thứ tự: 也 → 都."},
 {bad:"他们去图书馆一起。", good:"他们一起去图书馆。", why:"一起 đứng trước động từ."},
 {bad:"我去商店一起跟妈妈。", good:"我跟妈妈一起去商店。", why:"跟 + người + 一起 + động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chúng tôi đều là người Việt Nam.", o:["都我们是越南人。","我们都是越南人。","我们是都越南人。"], a:1, why:"Chủ ngữ + 都 + V."},
  {q:"Họ cũng đều thích uống trà.", o:["他们也都喜欢喝茶。","他们都也喜欢喝茶。","他们喜欢也都喝茶。"], a:0, why:"也都."},
  {q:"Tôi cùng bạn đi xem phim.", o:["我去看电影跟朋友一起。","我一起跟朋友去看电影。","我跟朋友一起去看电影。"], a:2, why:"跟 + người + 一起 + V."},
  {q:"Không phải tất cả chúng tôi đều đi.", o:["我们都不去。","我们不都去。","我们去不都。"], a:1, why:"不都 = không phải tất cả."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["同学们","都","很","认真"], a:"同学们都很认真。", vi:"Các bạn học đều rất chăm chỉ."},
  {w:["明天","他们","一起","去","图书馆"], a:"明天他们一起去图书馆。", alt:["他们明天一起去图书馆。"], vi:"Ngày mai họ cùng đi thư viện."},
  {w:["我们","常","一块儿","玩儿"], a:"我们常一块儿玩儿。", vi:"Chúng tôi thường chơi cùng nhau."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Những quyển sách này đều rất đắt.", a:"这些书都很贵。"},
  {q:"Chúng mình cùng ăn cơm đi.", a:"我们一起吃饭吧。"},
  {q:"Họ đều không phải giáo viên.", a:"他们都不是老师。"}]}],
rel:["一13","一17","二20","三41"]
};
