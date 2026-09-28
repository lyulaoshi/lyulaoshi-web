// Bài ngữ pháp 【三50】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三50", title:"数量补语3：宾语和动量补语共现", vi:"Bổ ngữ số lượng 3 — tân ngữ và số lần cùng xuất hiện", tag:"句子成分 · 补语",
goals:[
 "Tân ngữ là <b>đại từ chỉ người</b>: <b>V + O + số lần</b> (找了他两次).",
 "Tân ngữ là <b>danh từ chỉ vật / nơi chốn</b>: <b>V + số lần + O</b> (去过两次上海) hoặc V + O + số lần với địa danh.",
 "Đặt 了 / 过 ngay sau động từ."],
intro:"Khi câu có cả tân ngữ và số lần, vị trí tân ngữ phụ thuộc <b>loại tân ngữ</b>.",
rules:[
 {t:"Đại từ chỉ người: V + O + số lần", sub:"代词宾语", fx:[["V (了 / 过)",""],["Đại từ",null],["số + 次 / 遍",""]], mean:"",
  ex:[["我找了[他]两次。","Wǒ zhǎo le tā liǎng cì.","Tôi tìm anh ấy hai lần.","等级标准"]]},
 {t:"Danh từ vật: V + số lần + O", sub:"一般宾语", fx:[["V (了 / 过)",""],["số + 次 / 遍",null],["Danh từ",""]], mean:"Địa danh đứng trước hoặc sau số lần đều được.",
  ex:[["我去过两次[上海]。","Wǒ qù guo liǎng cì Shànghǎi.","Tôi đã đến Thượng Hải hai lần.","等级标准"],
      ["我来过[中国]一次。","Wǒ lái guo Zhōngguó yí cì.","Tôi đã đến Trung Quốc một lần.","等级标准"],
      ["他读了三遍[课文]。","Tā dú le sān biàn kèwén.","Anh ấy đọc bài khóa ba lượt.","等级标准"]]}],
cmp:[
 {vn:"Tôi đã gặp anh ấy ba lần.", zh:"我见过[他]三次。", py:"Wǒ jiàn guo tā sān cì.", ok:true, why:"Đại từ trước số lần."},
 {vn:"Tôi xem phim này hai lần.", zh:"我看了两遍[这个电影]。", py:"Wǒ kàn le liǎng biàn zhège diànyǐng.", ok:true, why:"Danh từ sau số lần."}],
ex:[
 ["我问了[老师]两次。","Wǒ wèn le lǎoshī liǎng cì.","Tôi hỏi thầy hai lần."],
 ["我吃过一次[烤鸭]。","Wǒ chī guo yí cì kǎoyā.","Tôi từng ăn vịt quay một lần."]],
errs:[
 {bad:"我找了两次他。", good:"我找了他两次。", why:"Đại từ đứng trước số lần."},
 {bad:"他三遍读了课文。", good:"他读了三遍课文。", why:"Số lần đứng sau động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi tìm anh ấy hai lần.", o:["我找了两次他。","我找了他两次。"], a:1, why:"Đại từ trước số lần."},
  {q:"Anh ấy đọc bài khóa ba lượt.", o:["他读了三遍课文。","他三遍读了课文。"], a:0, why:"V + số lần + N."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","去过","两次","上海"], a:"我去过两次上海。", alt:["我去过上海两次。"], vi:"Tôi đã đến Thượng Hải hai lần."},
  {w:["我","见过","他","三次"], a:"我见过他三次。", vi:"Tôi đã gặp anh ấy ba lần."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi hỏi thầy hai lần.", a:"我问了老师两次。"},
  {q:"Tôi từng ăn vịt quay một lần.", a:"我吃过一次烤鸭。"}]}],
rel:["二52","二11","三51","二32"]
};
