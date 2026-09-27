// Bài ngữ pháp 【一31】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一31", title:"非主谓句", vi:"Câu không chủ ngữ — 下雨了！车！", tag:"句子的类型 · 句型 · 单句",
goals:[
 "Nhận ra câu <b>không có chủ ngữ</b>: nói hiện tượng tự nhiên, cảnh báo, gọi, cảm thán.",
 "Nói hiện tượng thời tiết đúng: <b>下雨了</b> (không nói ✗ 雨下了 / 它下雨了).",
 "Dùng câu một từ để cảnh báo, gọi: <b>车！小心！</b>"],
intro:"Không phải câu nào cũng có chủ ngữ. Có những câu chỉ gồm <b>một động từ / cụm động từ</b> hoặc <b>một danh từ</b> mà vẫn trọn nghĩa.",
rules:[
 {t:"Hiện tượng tự nhiên: động từ + tân ngữ", sub:"动词性非主谓句", fx:[["下 / 刮…",null],["雨 / 雪 / 风",""],["了",""]], mean:"Mưa, tuyết, gió… đứng <b>sau</b> động từ.",
  ex:[["[下雨]了。","Xià yǔ le.","Mưa rồi.","等级标准"],
      ["[下雪]了！","Xià xuě le!","Tuyết rơi rồi!"]]},
 {t:"Câu một danh từ / một từ", sub:"名词性非主谓句", fx:[["Danh từ / từ","！"]], mean:"Cảnh báo, gọi, trả lời ngắn, cảm thán.",
  ex:[["[车]！","Chē!","Xe kìa! (cẩn thận)","等级标准"],
      ["[小心]！","Xiǎoxīn!","Cẩn thận!"]]}],
cmp:[
 {vn:"Trời mưa rồi.", zh:"[下雨]了。", py:"Xià yǔ le.", ok:true, why:"Không cần dịch “trời”; 雨 đứng sau 下."},
 {vn:"Xe kìa!", zh:"[车]！", py:"Chē!", ok:true, why:"Một danh từ đủ làm câu cảnh báo."}],
ex:[
 ["[下雨]了，我们别去了。","Xià yǔ le, wǒmen bié qù le.","Mưa rồi, chúng mình đừng đi nữa."],
 ["[上课]了！","Shàng kè le!","Vào học rồi!"],
 ["[谢谢]！","Xièxie!","Cảm ơn!"],
 ["[好]！","Hǎo!","Được!"]],
errs:[
 {bad:"雨下了。", good:"下雨了。", why:"Hiện tượng: động từ trước, 雨 sau."},
 {bad:"它下雨了。", good:"下雨了。", why:"Không cần chủ ngữ “it” như tiếng Anh."},
 {bad:"天是下雨了。", good:"下雨了。/ 天下雨了。", why:"Không dùng 是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mưa rồi.", o:["雨下了。","下雨了。","它下雨了。"], a:1, why:"下雨了."},
  {q:"Tuyết rơi rồi!", o:["雪下了！","下雪了！","是下雪了！"], a:1, why:"下雪了."},
  {q:"Vào học rồi!", o:["上课了！","课上了！","是上课了！"], a:0, why:"Động từ ly hợp 上课."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["下","雨","了"], a:"下雨了。", vi:"Mưa rồi."},
  {w:["下雨了","我们","别","去","了"], a:"下雨了，我们别去了。", vi:"Mưa rồi, chúng mình đừng đi nữa."}]},
 {t:"C. Nói bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tuyết rơi rồi!", a:"下雪了！"},
  {q:"Cẩn thận! Xe kìa!", a:"小心！车！"},
  {q:"Tan học rồi!", a:"下课了！"}]}],
rel:["一32","一40","一35","二56"]
};
