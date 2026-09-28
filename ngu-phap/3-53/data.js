// Bài ngữ pháp 【三53】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三53", title:"主谓句4：主谓谓语句", vi:"Câu vị ngữ chủ – vị — 他身体很好", tag:"句子的类型 · 句型",
goals:[
 "Nhận ra câu có <b>vị ngữ là một cụm chủ – vị</b>: 奶奶 | 身体非常好.",
 "Dùng để nói về một <b>bộ phận / khía cạnh</b> của chủ ngữ lớn.",
 "Đưa tân ngữ đã biết lên đầu câu: 那本书我没看过."],
intro:"Câu này có hai tầng chủ ngữ: chủ ngữ lớn (người / vật được nói tới) và chủ ngữ nhỏ (bộ phận, khía cạnh của nó). Tiếng Việt cũng có: “Bà tôi sức khỏe rất tốt.”",
rules:[
 {t:"Chủ ngữ lớn + (chủ ngữ nhỏ + vị ngữ)", sub:"主谓谓语", fx:[["Chủ ngữ lớn",""],["Chủ ngữ nhỏ",null],["Vị ngữ",""]], mean:"",
  ex:[["奶奶[身体]非常好。","Nǎinai shēntǐ fēicháng hǎo.","Bà sức khỏe rất tốt.","等级标准"],
      ["这件衣服[颜色]很好看。","Zhè jiàn yīfu yánsè hěn hǎokàn.","Chiếc áo này màu rất đẹp.","等级标准"]]},
 {t:"Tân ngữ đã biết + chủ ngữ + V", sub:"受事主语", fx:[["Đối tượng (đã biết)",""],["Chủ ngữ",null],["Động từ",""]], mean:"",
  ex:[["那本书[我]没看过。","Nà běn shū wǒ méi kàn guo.","Quyển sách đó tôi chưa đọc.","等级标准"],
      ["这电影[我]看了三遍。","Zhè diànyǐng wǒ kàn le sān biàn.","Bộ phim này tôi xem ba lượt rồi.","等级标准"]]}],
cmp:[
 {vn:"Anh ấy sức khỏe rất tốt.", zh:"他[身体]很好。", py:"Tā shēntǐ hěn hǎo.", ok:true, why:"Giống tiếng Việt; không cần 的 (他的身体很好 cũng đúng)."}],
ex:[
 ["我今天[头]有点儿疼。","Wǒ jīntiān tóu yǒudiǎnr téng.","Hôm nay tôi hơi đau đầu."],
 ["北京[冬天]很冷。","Běijīng dōngtiān hěn lěng.","Bắc Kinh mùa đông rất lạnh."],
 ["这个菜[我]不喜欢。","Zhège cài wǒ bù xǐhuan.","Món này tôi không thích."]],
errs:[
 {bad:"他是身体很好。", good:"他身体很好。", why:"Không chèn 是."},
 {bad:"我头今天有点儿疼。", good:"我今天头有点儿疼。", why:"Thời gian đứng trước chủ ngữ nhỏ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy sức khỏe rất tốt.", o:["他是身体很好。","他身体很好。"], a:1, why:"Không 是."},
  {q:"Quyển sách đó tôi chưa đọc.", o:["那本书我没看过。","我没看过那本书了。","那本书没我看过。"], a:0, why:"Đối tượng + S + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["奶奶","身体","非常","好"], a:"奶奶身体非常好。", vi:"Bà sức khỏe rất tốt."},
  {w:["这件衣服","颜色","很","好看"], a:"这件衣服颜色很好看。", vi:"Chiếc áo này màu rất đẹp."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Hôm nay tôi hơi đau đầu.", a:"我今天头有点儿疼。/ 今天我头有点儿疼。"},
  {q:"Bắc Kinh mùa đông rất lạnh.", a:"北京冬天很冷。/ 北京的冬天很冷。"}]}],
rel:["一30","二54","一24","三43"]
};
