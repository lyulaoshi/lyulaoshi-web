// Bài ngữ pháp 【三03】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三03", title:"能愿动词：敢", vi:"Động từ năng nguyện 敢 — dám", tag:"词类 · 动词",
goals:[
 "Dùng <b>敢 + động từ</b> nói có đủ can đảm làm gì.",
 "Phủ định <b>不敢</b> (không dám); hỏi <b>敢不敢</b>.",
 "Đặt 敢 trước động từ chính."],
intro:"敢 = “dám”, đứng <b>trước động từ</b> như các động từ năng nguyện khác (会、能、想…).",
rules:[
 {t:"(不) 敢 + V", sub:"敢", fx:[["Chủ ngữ",""],["敢 / 不敢",null],["Động từ",""]], mean:"",
  ex:[["这儿有两米高，你[敢]跳下去吗？","Zhèr yǒu liǎng mǐ gāo, nǐ gǎn tiào xiaqu ma?","Chỗ này cao hai mét, bạn dám nhảy xuống không?","等级标准"],
      ["我[不敢]在河里游泳。","Wǒ bù gǎn zài hé li yóuyǒng.","Tôi không dám bơi ở sông."]]}],
cmp:[
 {vn:"Tôi không dám nói.", zh:"我[不敢]说。", py:"Wǒ bù gǎn shuō.", ok:true, why:"Giống trật tự tiếng Việt."}],
ex:[
 ["晚上我[不敢]一个人出去。","Wǎnshang wǒ bù gǎn yí ge rén chūqu.","Buổi tối tôi không dám ra ngoài một mình."],
 ["你[敢不敢]吃这个？","Nǐ gǎn bu gǎn chī zhège?","Bạn có dám ăn cái này không?"],
 ["他[敢]跟老师说真话。","Tā gǎn gēn lǎoshī shuō zhēnhuà.","Anh ấy dám nói thật với thầy."]],
errs:[
 {bad:"我没敢游泳。（ý: không dám, nói chung）", good:"我不敢游泳。", why:"Phủ định thông thường: 不敢."},
 {bad:"我游泳不敢。", good:"我不敢游泳。", why:"敢 đứng trước động từ."},
 {bad:"你敢不敢吃这个吗？", good:"你敢不敢吃这个？", why:"Không thêm 吗."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi không dám bơi ở sông.", o:["我游泳不敢在河里。","我不敢在河里游泳。","我在河里不游泳敢。"], a:1, why:"不敢 + (在…) + V."},
  {q:"Bạn có dám ăn cái này không?", o:["你敢不敢吃这个？","你敢不敢吃这个吗？","你吃这个敢不敢？"], a:0, why:"敢不敢 + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["晚上","我","不敢","一个人","出去"], a:"晚上我不敢一个人出去。", vi:"Buổi tối tôi không dám ra ngoài một mình."},
  {w:["你","敢","跳下去","吗"], a:"你敢跳下去吗？", vi:"Bạn dám nhảy xuống không?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi không dám nói.", a:"我不敢说。"},
  {q:"Anh ấy dám nói thật với thầy.", a:"他敢跟老师说真话。"}]}],
rel:["一02","三04","二01","一03"]
};
