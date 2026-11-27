// Bài ngữ pháp 【新4.62】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.62", title:"因果复句：既然……，就……；（由于）……，因此……", vi:"Đã … thì …; do … nên …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>既然……就……</b>: đã … thì …",
 "Phân biệt <b>既然</b> với <b>因为</b>.",
 "Ôn <b>由于……因此……</b> (【三71】)."],
intro:"既然 nêu <b>sự thật cả hai đã biết</b>, vế sau là <b>đề nghị, kết luận</b>. 因为 chỉ giải thích lý do.",
rules:[
 {t:"既然 + sự thật，(S) 就 + đề nghị", sub:"（1）既然", fx:[["既然",null],["sự thật đã biết",""],["，",""],["就",null],["đề nghị",""]], mean:"Đã … thì …",
  ex:[["{1|既然}{2|大家都同意}，{3|就}{4|这么办吧}。","Jìrán dàjiā dōu tóngyì, jiù zhème bàn ba.","Mọi người đã đồng ý thì cứ làm thế."],
      ["{1|既然}{2|你喜欢}，{3|就}{4|买下来吧}。","Jìrán nǐ xǐhuan, jiù mǎi xialai ba.","Bạn đã thích thì mua đi."]]},
 {t:"由于 + nguyên nhân，因此 + kết quả", sub:"（2）由于", fx:[["由于",null],["nguyên nhân",""],["，",""],["因此",null],["kết quả",""]], mean:"Do … nên …",
  ex:[["{1|由于}{2|天气原因}，{3|因此}{4|航班取消了}。","Yóuyú tiānqì yuányīn, yīncǐ hángbān qǔxiāo le.","Do thời tiết nên chuyến bay bị hủy."]]}],
cmp:[
 {vn:"Anh đã đến rồi thì ở lại ăn cơm.", zh:"你[既然]来了，[就]留下吃饭吧。", py:"Nǐ jìrán lái le, jiù liúxià chī fàn ba.", ok:true, why:"既然 có thể đứng sau chủ ngữ."}],
ex:[
 ["[既然]知道错了，[就]应该改。","Jìrán zhīdào cuò le, jiù yīnggāi gǎi.","Đã biết sai thì nên sửa."],
 ["[既然]外面下雨，我们[就]在家看电影吧。","Jìrán wàimian xià yǔ, wǒmen jiù zài jiā kàn diànyǐng ba.","Ngoài trời đã mưa thì mình ở nhà xem phim."],
 ["[由于]准备得很好，[因此]考得不错。","Yóuyú zhǔnbèi de hěn hǎo, yīncǐ kǎo de búcuò.","Do chuẩn bị tốt nên thi khá ổn."]],
errs:[
 {bad:"既然他病了，所以没来。（giải thích lý do）", good:"因为他病了，所以没来。", why:"Chỉ giải thích lý do dùng 因为."},
 {bad:"既然你累了，所以休息吧。", good:"既然你累了，就休息吧。", why:"既然 đi với 就."},
 {bad:"因此天气原因，由于航班取消了。", good:"由于天气原因，因此航班取消了。", why:"由于 ở vế nguyên nhân."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿你不想去，就别去了。", vi:"Bạn đã không muốn đi thì thôi.", o:["既然","由于","尽管"], a:0, why:"既然……就."},
  {q:"既然决定了，＿开始吧。", vi:"Đã quyết thì bắt đầu đi.", o:["就","才","却"], a:0, why:"就."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["既然","大家都同意，","就","这么办","吧"], a:"既然大家都同意，就这么办吧。", vi:"Mọi người đã đồng ý thì cứ làm thế."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Đã biết sai thì nên sửa.", a:"既然知道错了，就应该改。/ 既然知道错了，就应该改正。/ 既然知道错了，就要改。"}]}],
rel:["三71","新4.19","新5.37"]
};
