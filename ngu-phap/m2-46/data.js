// Bài ngữ pháp 【新2.46】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新2.46", title:"“是”字句2：表示说明或特征", vi:"Câu chữ 是 2 — nói rõ, nêu đặc điểm", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng 是 để <b>nói rõ đặc điểm</b> của người / vật: 他是大眼睛, 这件衣服是红的.",
 "Dùng 是 để <b>giải thích tình huống</b>: 今天是晴天, 我是坐飞机来的 (không phải).",
 "Phân biệt với 是 1 (A là B — cùng loại)."],
intro:"是字句1 nói <b>A là B</b> (我是学生). Ở HSK 2, 是 còn dùng để <b>nêu đặc điểm, nói rõ</b> — tiếng Việt thường không dịch ra chữ “là”.",
rules:[
 {t:"S + 是 + (tính từ / danh từ) + 的", sub:"特征", fx:[["S",""],["是",null],["đặc điểm (+ 的)",""]], mean:"Nêu màu sắc, chất liệu, loại…",
  ex:[["这件衣服[是]红的。","Zhè jiàn yīfu shì hóng de.","Chiếc áo này màu đỏ."],
      ["我的手机[是]新的。","Wǒ de shǒujī shì xīn de.","Điện thoại của tôi là (cái) mới."]]},
 {t:"S + 是 + cụm danh từ (nói rõ)", sub:"说明", fx:[["S",""],["是",null],["cụm danh từ",""]], mean:"Nói rõ tình huống, đặc điểm.",
  ex:[["今天[是]晴天。","Jīntiān shì qíngtiān.","Hôm nay trời nắng."],
      ["他[是]大眼睛，高个子。","Tā shì dà yǎnjing, gāo gèzi.","Anh ấy mắt to, dáng cao."]]}],
cmp:[
 {vn:"Chiếc áo này màu đỏ.", zh:"这件衣服[是]红的。", py:"Zhè jiàn yīfu shì hóng de.", ok:false, tag:"(tiếng Việt không có “là”)", why:"Tiếng Trung dùng 是……的 để nêu đặc điểm."}],
ex:[
 ["这些书[是]我的。","Zhèxiē shū shì wǒ de.","Chỗ sách này là của tôi."],
 ["明天[是]星期六。","Míngtiān shì xīngqīliù.","Mai là thứ Bảy."]],
errs:[
 {bad:"这件衣服是红。", good:"这件衣服是红的。", why:"Nêu đặc điểm bằng tính từ cần 的 cuối: 是红的."},
 {bad:"这件衣服是很红的。", good:"这件衣服很红。/ 这件衣服是红的。", why:"是……的 nêu loại màu; muốn nói “rất đỏ” thì dùng 很红."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chiếc áo này màu đỏ.", o:["这件衣服是红。","这件衣服是红的。"], a:1, why:"是 + tính từ + 的."},
  {q:"Hôm nay trời nắng.", o:["今天是晴天。","今天晴天是。"], a:0, why:"S + 是 + danh từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我的","手机","是","新的"], a:"我的手机是新的。", vi:"Điện thoại của tôi là cái mới."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Chỗ sách này là của tôi.", a:"这些书是我的。"},
  {q:"Mai là thứ Bảy.", a:"明天是星期六。"}]}],
rel:["一36","二38","二60","新3.60"]
};
