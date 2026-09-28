// Bài ngữ pháp 【一21】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一21", title:"动态助词：了", vi:"Trợ từ động thái 了¹ — hành động đã hoàn thành", tag:"词类 · 助词",
goals:[
 "Dùng <b>động từ + 了 + (số lượng) + tân ngữ</b> để nói hành động đã hoàn thành.",
 "Phủ định bằng <b>没 + động từ</b> và <b>bỏ 了</b>.",
 "Không dùng 了 cho thói quen, sự thật chung, hay sau 是 / 喜欢…"],
intro:"了¹ đứng <b>ngay sau động từ</b>, cho biết hành động đã xảy ra, đã xong. Nó gần với “đã … rồi” của tiếng Việt nhưng vị trí cố định sau động từ.",
rules:[
 {t:"Động từ + 了 + số lượng + tân ngữ", sub:"了¹", fx:[["Chủ ngữ",""],["Động từ",""],["了",null],["Số lượng + tân ngữ",""]], mean:"Tân ngữ thường có số lượng hoặc định ngữ; tân ngữ “trơn” (了书) nghe chưa trọn câu.",
  ex:[["他买[了]一本书。","Tā mǎi le yì běn shū.","Anh ấy đã mua một quyển sách.","等级标准"],
      ["我写[了]两个汉字。","Wǒ xiě le liǎng ge Hànzì.","Tôi đã viết hai chữ Hán.","等级标准"]]},
 {t:"Phủ định: 没 + động từ (bỏ 了)", sub:"没 V", fx:[["Chủ ngữ",""],["没 / 没有",null],["Động từ + tân ngữ",""]], mean:"Không có 了 trong câu phủ định.",
  ex:[["他[没]买书。","Tā méi mǎi shū.","Anh ấy không mua sách.","等级标准"],
      ["我[没]写汉字。","Wǒ méi xiě Hànzì.","Tôi không viết chữ Hán.","等级标准"]]}],
notes:[
 {t:"Câu hỏi", html:"<span class='zh'>你买了书吗？/ 你买书了没有？</span>"},
 {t:"Không dùng 了¹", html:"với thói quen (<span class='zh'>我以前常去</span>), với 是、喜欢、在 (đang)…"},
 {t:"了¹ và 了²", html:"了² ở cuối câu nói sự thay đổi / đã xảy ra 【一40】: <span class='zh'>我吃饭了。</span>"}],
cmp:[
 {vn:"Tôi đã mua một quyển sách.", zh:"我买[了]一本书。", py:"Wǒ mǎi le yì běn shū.", ok:true, why:"“đã” đứng trước động từ; 了 đứng sau động từ."},
 {vn:"Tôi chưa ăn sáng.", zh:"我没吃早饭。", py:"Wǒ méi chī zǎofàn.", ok:false, tag:"(không có 了)", why:"Phủ định với 没 thì bỏ 了."}],
ex:[
 ["我喝[了]很多水。","Wǒ hē le hěn duō shuǐ.","Tôi đã uống rất nhiều nước."],
 ["昨天我看[了]一个电影。","Zuótiān wǒ kàn le yí ge diànyǐng.","Hôm qua tôi đã xem một bộ phim."],
 ["她买[了]两件衣服。","Tā mǎi le liǎng jiàn yīfu.","Cô ấy đã mua hai bộ quần áo."],
 ["你吃[了]早饭吗？——我没吃。","Nǐ chī le zǎofàn ma? —— Wǒ méi chī.","Bạn ăn sáng chưa? — Mình chưa ăn."]],
errs:[
 {bad:"他没买了书。", good:"他没买书。", why:"Có 没 thì bỏ 了."},
 {bad:"我昨天了去商店。", good:"我昨天去了商店。", why:"了 đứng ngay sau động từ."},
 {bad:"我以前常常去了那儿。", good:"我以前常常去那儿。", why:"Thói quen không dùng 了."},
 {bad:"我了买一本书。", good:"我买了一本书。", why:"了 sau động từ, không trước."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy đã mua một quyển sách.", o:["他了买一本书。","他买了一本书。","他买一本了书。"], a:1, why:"V + 了 + số lượng + N."},
  {q:"Tôi không mua sách.", o:["我没买了书。","我不买了书。","我没买书。"], a:2, why:"没 + V, bỏ 了."},
  {q:"Hôm qua tôi đã xem một bộ phim.", o:["昨天我看了一个电影。","昨天我了看一个电影。","昨天我看一个了电影。"], a:0, why:"V + 了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","买","了","一本书"], a:"他买了一本书。", vi:"Anh ấy đã mua một quyển sách."},
  {w:["我","写","了","两个","汉字"], a:"我写了两个汉字。", vi:"Tôi đã viết hai chữ Hán."},
  {w:["我","没","写","汉字"], a:"我没写汉字。", vi:"Tôi không viết chữ Hán."}]},
 {t:"C. Đổi sang phủ định", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"我喝了两杯茶。", vi:"Tôi đã uống hai cốc trà.", a:"我没喝茶。"},
  {ask:"Phủ định", q:"她买了一件衣服。", vi:"Cô ấy đã mua một bộ quần áo.", a:"她没买衣服。"},
  {ask:"Hỏi (没有)", q:"你看了那个电影。", vi:"Bạn đã xem bộ phim đó.", a:"你看那个电影了没有？/ 你看了那个电影吗？"}]}],
rel:["一41","一40","一22","一14"]
};
