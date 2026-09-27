// Bài ngữ pháp 【一41】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一41", title:"完成态：了¹", vi:"Thể hoàn thành — động từ + 了¹", tag:"动作的态",
goals:[
 "Dùng <b>động từ + 了¹ + số lượng + tân ngữ</b> nói hành động đã hoàn thành.",
 "So sánh <b>了¹</b> (sau động từ) với <b>了²</b> (cuối câu).",
 "Phủ định bằng <b>没 + V</b>, bỏ 了."],
intro:"了¹ đứng <b>ngay sau động từ</b>, cho biết hành động đã hoàn thành với một kết quả cụ thể (mấy cái, bao nhiêu). Xem thêm trợ từ 了 ở 【一21】.",
rules:[
 {t:"V + 了 + số lượng + tân ngữ", sub:"完成", fx:[["Chủ ngữ",""],["Động từ",""],["了",null],["Số lượng + tân ngữ",""]], mean:"Nói đã làm xong bao nhiêu.",
  ex:[["他买[了]两个面包。","Tā mǎi le liǎng ge miànbāo.","Anh ấy đã mua hai cái bánh mì.","等级标准"],
      ["我喝[了]很多水。","Wǒ hē le hěn duō shuǐ.","Tôi đã uống rất nhiều nước.","等级标准"]]},
 {t:"Phủ định: 没 + V (+ tân ngữ)", sub:"否定", fx:[["Chủ ngữ",""],["没",null],["Động từ + tân ngữ",""]], mean:"Bỏ 了 và bỏ số lượng.",
  ex:[["他[没]买面包。","Tā méi mǎi miànbāo.","Anh ấy không mua bánh mì.","等级标准"],
      ["我[没]喝水。","Wǒ méi hē shuǐ.","Tôi không uống nước.","等级标准"]]}],
notes:[
 {t:"了¹ hay 了²?", html:"<span class='zh'>我买了一本书。</span> (了¹ — đã mua <b>một quyển</b>: nhấn vào kết quả) · <span class='zh'>我买书了。</span> (了² — việc mua sách <b>đã xảy ra</b>: nhấn vào tình huống) 【一40】."},
 {t:"Tân ngữ trơn", html:"<span class='zh'>我买了书。</span> nghe chưa trọn — thêm số lượng (<span class='zh'>一本书</span>) hoặc vế sau (<span class='zh'>买了书就回家</span>)."}],
cmp:[
 {vn:"Anh ấy đã mua hai cái bánh mì.", zh:"他买[了]两个面包。", py:"Tā mǎi le liǎng ge miànbāo.", ok:true, why:"“đã” trước động từ → 了 sau động từ."},
 {vn:"Anh ấy không mua bánh mì.", zh:"他没买面包。", py:"Tā méi mǎi miànbāo.", ok:false, tag:"(không có 了)", why:"Phủ định bỏ 了."}],
ex:[
 ["我吃[了]三个饺子。","Wǒ chī le sān ge jiǎozi.","Tôi đã ăn ba cái sủi cảo."],
 ["她看[了]两本书。","Tā kàn le liǎng běn shū.","Cô ấy đã đọc hai quyển sách."],
 ["我们学[了]十个生词。","Wǒmen xué le shí ge shēngcí.","Chúng tôi đã học mười từ mới."],
 ["你买[了]什么？","Nǐ mǎi le shénme?","Bạn đã mua gì?"]],
errs:[
 {bad:"他没买了面包。", good:"他没买面包。", why:"没 không đi với 了."},
 {bad:"他买两个了面包。", good:"他买了两个面包。", why:"了¹ ngay sau động từ."},
 {bad:"他没买两个面包。（ý: không mua）", good:"他没买面包。", why:"Phủ định thường bỏ số lượng."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đã uống rất nhiều nước.", o:["我喝很多了水。","我喝了很多水。","我了喝很多水。"], a:1, why:"V + 了 + tân ngữ."},
  {q:"Tôi không uống nước.", o:["我没喝了水。","我不喝了水。","我没喝水。"], a:2, why:"没 + V."},
  {q:"Cô ấy đã đọc hai quyển sách.", o:["她看了两本书。","她看两本了书。","她了看两本书。"], a:0, why:"V + 了 + số lượng."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","买","了","两个","面包"], a:"他买了两个面包。", vi:"Anh ấy đã mua hai cái bánh mì."},
  {w:["我","没","喝","水"], a:"我没喝水。", vi:"Tôi không uống nước."},
  {w:["我们","学","了","十个","生词"], a:"我们学了十个生词。", vi:"Chúng tôi đã học mười từ mới."}]},
 {t:"C. Đổi sang phủ định", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"他买了两个面包。", a:"他没买面包。"},
  {ask:"Phủ định", q:"我吃了三个饺子。", a:"我没吃饺子。"},
  {ask:"Hỏi", q:"她看了两本书。", a:"她看了几本书？"}]}],
rel:["一21","一40","一14","三73"]
};
