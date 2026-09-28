// Bài ngữ pháp 【三45】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三45", title:"动词性短语、主谓短语作定语", vi:"Cụm động từ, cụm chủ – vị làm định ngữ", tag:"句子成分 · 定语",
goals:[
 "Dùng <b>cụm động từ / chủ – vị + 的 + danh từ</b> (người / vật mà …).",
 "Sửa thói quen tiếng Việt “cô gái <b>đang nhảy</b>” → 跳舞的女孩儿.",
 "Không quên <b>的</b>."],
intro:"Tiếng Việt: “câu chuyện <b>(mà) Tiểu Bạch kể</b>” — phần bổ nghĩa đứng sau. Tiếng Trung: cả cụm + <b>的</b> đứng <b>trước</b> danh từ.",
rules:[
 {t:"Cụm động từ / chủ – vị + 的 + N", sub:"谓词性定语", fx:[["Cụm động từ / chủ – vị",null],["的",null],["Danh từ",""]], mean:"",
  ex:[["你看见那个[跳舞的]女孩儿了吗？","Nǐ kànjiàn nàge tiào wǔ de nǚháir le ma?","Bạn có thấy cô bé đang nhảy kia không?","等级标准"],
      ["[观看演出的]观众请从右边的门进去。","Guānkàn yǎnchū de guānzhòng qǐng cóng yòubian de mén jìnqu.","Khán giả xem biểu diễn xin mời vào cửa bên phải.","等级标准"],
      ["[小白讲的]故事很有意思。","Xiǎo Bái jiǎng de gùshi hěn yǒu yìsi.","Câu chuyện Tiểu Bạch kể rất thú vị.","等级标准"]]}],
cmp:[
 {vn:"quyển sách tôi mua hôm qua", zh:"[我昨天买的]书", py:"wǒ zuótiān mǎi de shū", ok:true, why:"Cả cụm bổ nghĩa + 的 lên trước danh từ."}],
ex:[
 ["[来中国学习的]人越来越多。","Lái Zhōngguó xuéxí de rén yuè lái yuè duō.","Người sang Trung Quốc học ngày càng đông."],
 ["这是[妈妈做的]菜。","Zhè shì māma zuò de cài.","Đây là món mẹ nấu."]],
errs:[
 {bad:"故事小白讲的很有意思。", good:"小白讲的故事很有意思。", why:"Cụm bổ nghĩa + 的 đứng trước danh từ."},
 {bad:"我昨天买书很好看。", good:"我昨天买的书很好看。", why:"Cần 的 nối định ngữ với danh từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Câu chuyện Tiểu Bạch kể rất thú vị.", o:["故事小白讲的很有意思。","小白讲的故事很有意思。"], a:1, why:"Định ngữ + 的 + N."},
  {q:"Đây là món mẹ nấu.", o:["这是妈妈做的菜。","这是菜妈妈做的。"], a:0, why:"Định ngữ trước."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","看见","那个","跳舞的","女孩儿","了吗"], a:"你看见那个跳舞的女孩儿了吗？", vi:"Bạn có thấy cô bé đang nhảy kia không?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"quyển sách tôi mua hôm qua", a:"我昨天买的书"},
  {q:"Người sang Trung Quốc học ngày càng đông.", a:"来中国学习的人越来越多。"}]}],
rel:["一27","一20","三43","三44"]
};
