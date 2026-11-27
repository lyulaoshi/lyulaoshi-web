// Bài ngữ pháp 【新4.02】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.02", title:"指示代词：各、各位、各种、任何、此", vi:"各, 各位, 各种, 任何, 此 — mỗi, các, bất kỳ, này", tag:"词类 · 代词",
goals:[
 "Dùng <b>各 / 各位 / 各种</b>: các, mỗi, đủ loại.",
 "Dùng <b>任何……都 / 也</b>: bất kỳ.",
 "Hiểu <b>此</b> = “này, đây” trong văn viết: 此时, 此外, 从此."],
intro:"<b>此</b> là chữ văn viết của 这. Người Việt gặp nhiều trong thông báo: 此处 (chỗ này), 到此为止 (đến đây là hết).",
rules:[
 {t:"各 / 各位 / 各种 + danh từ", sub:"（1）", fx:[["各 / 各位 / 各种",null],["Danh từ",""]], mean:"各 các, mỗi · 各位 quý vị · 各种 đủ loại.",
  ex:[["{1|各位}{2|朋友}，大家好！","Gè wèi péngyou, dàjiā hǎo!","Chào các bạn!"],
      ["超市里有{1|各种}{2|水果}。","Chāoshì li yǒu gè zhǒng shuǐguǒ.","Trong siêu thị có đủ loại hoa quả."]]},
 {t:"任何 + danh từ + 都 / 也", sub:"（2）", fx:[["任何",null],["Danh từ",""],["都 / 也",null],["V / Adj",""]], mean:"Bất kỳ … cũng …",
  ex:[["{1|任何}{2|人}{3|都}{4|可以参加}。","Rènhé rén dōu kěyǐ cānjiā.","Bất kỳ ai cũng được tham gia."]]},
 {t:"此 + danh từ / 到此、从此", sub:"（3）此", fx:[["到 / 从",""],["此",null],["danh từ / phần còn lại",""]], mean:"此时 lúc này · 此处 chỗ này · 从此 từ đó · 到此 đến đây.",
  ex:[["今天的课{1|到}{2|此}{3|结束}。","Jīntiān de kè dào cǐ jiéshù.","Bài học hôm nay đến đây kết thúc."],
      ["{1|从}{2|此}，{3|他们成了好朋友}。","Cóngcǐ, tāmen chéngle hǎo péngyou.","Từ đó họ trở thành bạn tốt."],
      ["{2|此}{3|处}禁止停车。","Cǐ chù jìnzhǐ tíng chē.","Chỗ này cấm đỗ xe."]]}],
cmp:[
 {vn:"Ngoài ra, còn một việc nữa.", zh:"[此]外，还有一件事。", py:"Cǐwài, hái yǒu yí jiàn shì.", ok:true, why:"此外 = ngoài cái này."}],
ex:[
 ["[各]国的客人都到了。","Gè guó de kèrén dōu dào le.","Khách các nước đều đã đến."],
 ["我对[此]没有意见。","Wǒ duì cǐ méiyǒu yìjiàn.","Tôi không có ý kiến về việc này."],
 ["遇到[任何]困难，他都不放弃。","Yùdào rènhé kùnnan, tā dōu bú fàngqì.","Gặp bất kỳ khó khăn nào anh ấy cũng không bỏ cuộc."]],
errs:[
 {bad:"此个问题很重要。", good:"这个问题很重要。/ 此问题很重要。", why:"此 không đi với 个."},
 {bad:"任何人可以参加。", good:"任何人都可以参加。", why:"任何 thường đi với 都 / 也."},
 {bad:"各位的朋友们好！", good:"各位朋友好！", why:"各位 đặt thẳng trước danh từ, không thêm 的."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"今天的会议到＿结束。", vi:"Cuộc họp hôm nay đến đây kết thúc.", o:["此","各","任何"], a:0, why:"到此结束."},
  {q:"＿人都不能进去。", vi:"Bất kỳ ai cũng không được vào.", o:["任何","各位","此"], a:0, why:"任何……都."},
  {q:"商店里有＿颜色的衣服。", vi:"Cửa hàng có quần áo đủ màu.", o:["各种","任何","此"], a:0, why:"各种."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["任何","人","都","可以","参加"], a:"任何人都可以参加。", vi:"Bất kỳ ai cũng được tham gia."},
  {w:["我","对此","没有","意见"], a:"我对此没有意见。", vi:"Tôi không có ý kiến về việc này."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Từ đó, họ trở thành bạn tốt.", a:"从此，他们成了好朋友。/ 从此，他们成为好朋友。/ 从此他们就成了好朋友。"}]}],
rel:["三08","新5.02","新4.19"]
};
