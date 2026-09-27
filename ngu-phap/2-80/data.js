// Bài ngữ pháp 【二80】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二80", title:"该……了", vi:"该……了 — “đến lúc phải … rồi”", tag:"口语格式",
goals:[
 "Dùng <b>(S) 该 + V + 了</b> để nói đã đến lúc làm việc gì.",
 "Thường có mốc thời gian / lý do ở trước.",
 "Không bỏ 了 cuối câu."],
intro:"该……了 là khung khẩu ngữ: dựa vào thời gian hay tình huống, <b>đã đến lúc</b> phải làm việc gì.",
rules:[
 {t:"(Thời gian / lý do)，(S) 该 + V + 了", sub:"该……了", fx:[["(Thời gian / lý do)，",""],["(S)",""],["该",null],["Động từ",""],["了",null]], mean:"",
  ex:[["十一点了，[该]睡觉[了]。","Shíyī diǎn le, gāi shuì jiào le.","11 giờ rồi, đến lúc đi ngủ rồi.","等级标准"],
      ["明天有听写，我[该]复习生词[了]。","Míngtiān yǒu tīngxiě, wǒ gāi fùxí shēngcí le.","Mai có chính tả, tôi phải ôn từ mới rồi.","等级标准"]]}],
cmp:[
 {vn:"Đến giờ vào học rồi.", zh:"[该]上课[了]。", py:"Gāi shàng kè le.", ok:true, why:"“đến lúc … rồi” = 该……了."}],
ex:[
 ["六点了，我[该]回家[了]。","Liù diǎn le, wǒ gāi huí jiā le.","6 giờ rồi, tôi phải về nhà rồi."],
 ["你[该]吃药[了]。","Nǐ gāi chī yào le.","Đến giờ bạn uống thuốc rồi."],
 ["天黑了，我们[该]走[了]。","Tiān hēi le, wǒmen gāi zǒu le.","Trời tối rồi, chúng ta nên đi thôi."]],
errs:[
 {bad:"十一点了，该睡觉。", good:"十一点了，该睡觉了。", why:"Khung cần 了 cuối câu."},
 {bad:"我复习生词该了。", good:"我该复习生词了。", why:"该 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"11 giờ rồi, đi ngủ thôi.", o:["十一点了，该睡觉。","十一点了，该睡觉了。","十一点了，睡觉该了。"], a:1, why:"该……了."},
  {q:"Đến giờ uống thuốc rồi.", o:["你该吃药了。","你吃药该了。","你该了吃药。"], a:0, why:"该 + V + 了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["十一点了","该","睡觉","了"], a:"十一点了，该睡觉了。", vi:"11 giờ rồi, đến lúc đi ngủ."},
  {w:["我","该","复习","生词","了"], a:"我该复习生词了。", vi:"Tôi phải ôn từ mới rồi."}]},
 {t:"C. Nói bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"6 giờ rồi, tôi phải về nhà rồi.", a:"六点了，我该回家了。"},
  {q:"Đến giờ vào học rồi.", a:"该上课了。"}]}],
rel:["二02","二81","一40","二20"]
};
