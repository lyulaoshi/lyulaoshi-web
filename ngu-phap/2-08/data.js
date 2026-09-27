// Bài ngữ pháp 【二08】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二08", title:"形容词重叠：AA、AABB", vi:"Lặp tính từ — AA, AABB", tag:"词类 · 形容词",
goals:[
 "Lặp tính từ một âm tiết theo <b>AA</b>, hai âm tiết theo <b>AABB</b>.",
 "Dùng tính từ lặp để miêu tả sinh động, thường kèm <b>的 / 地</b>.",
 "Không đặt 很、非常 trước tính từ đã lặp."],
intro:"Lặp tính từ làm lời miêu tả <b>sinh động, có sắc thái yêu thích</b> — giống “cao cao, sạch sẽ tinh tươm” trong tiếng Việt. Tính từ đã lặp tự mang mức độ, <b>không thêm 很</b>.",
rules:[
 {t:"AA (một âm tiết)", sub:"AA", fx:[["A",null],["A",null],["(的)",""]], mean:"高高的、大大的、慢慢地…",
  ex:[["那个女孩儿[高高]的个子，[大大]的眼睛，非常漂亮。","Nàge nǚháir gāogāo de gèzi, dàdà de yǎnjing, fēicháng piàoliang.","Cô bé ấy dáng cao cao, mắt to tròn, rất xinh.","等级标准"]]},
 {t:"AABB (hai âm tiết)", sub:"AABB", fx:[["AA",null],["BB",null],["(的 / 地)",""]], mean:"干净 → 干干净净; 高兴 → 高高兴兴 (không nói ✗ 干净干净).",
  ex:[["这个房间[干干净净]的。","Zhège fángjiān gāngānjìngjìng de.","Căn phòng này sạch sẽ tinh tươm.","等级标准"],
      ["他们都[高高兴兴]地回家了。","Tāmen dōu gāogāoxìngxìng de huí jiā le.","Họ đều vui vẻ về nhà.","等级标准"]]}],
notes:[
 {t:"Vị trí", html:"trước danh từ + 的 (<span class='zh'>大大的眼睛</span>); làm vị ngữ + 的 (<span class='zh'>房间干干净净的</span>); trước động từ + 地 (<span class='zh'>慢慢地走</span>)."}],
cmp:[
 {vn:"Căn phòng sạch sẽ tinh tươm.", zh:"房间[干干净净]的。", py:"Fángjiān gāngānjìngjìng de.", ok:true, why:"AABB + 的 làm vị ngữ."},
 {vn:"Đi chầm chậm thôi.", zh:"[慢慢]地走。", py:"Mànmàn de zǒu.", ok:true, why:"AA + 地 trước động từ."}],
ex:[
 ["你[慢慢]说，别着急。","Nǐ mànmàn shuō, bié zháojí.","Bạn nói từ từ, đừng vội."],
 ["她穿着[漂漂亮亮]的衣服。","Tā chuān zhe piàopiàoliàngliàng de yīfu.","Cô ấy mặc bộ quần áo thật đẹp."],
 ["孩子们[开开心心]地玩儿。","Háizimen kāikāixīnxīn de wánr.","Bọn trẻ chơi vui vẻ."],
 ["他有[长长]的头发。","Tā yǒu chángcháng de tóufa.","Anh ấy có mái tóc dài dài."]],
errs:[
 {bad:"房间干净干净的。", good:"房间干干净净的。", why:"Tính từ hai âm tiết lặp AABB."},
 {bad:"她有很大大的眼睛。", good:"她有大大的眼睛。", why:"Đã lặp thì không thêm 很."},
 {bad:"他们高高兴兴回家了。（thiếu 地 khi viết）", good:"他们高高兴兴地回家了。", why:"Trước động từ thường thêm 地."}],
practice:[
 {t:"A. Chọn dạng đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"sạch sẽ (lặp):", o:["干净干净","干干净净","干净净"], a:1, why:"AABB."},
  {q:"mắt to tròn:", o:["很大大的眼睛","大大的眼睛","大大眼睛的"], a:1, why:"AA + 的, không 很."},
  {q:"vui vẻ về nhà:", o:["高高兴兴地回家","高兴高兴地回家","很高高兴兴地回家"], a:0, why:"AABB + 地."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个","房间","干干净净","的"], a:"这个房间干干净净的。", vi:"Căn phòng này sạch sẽ tinh tươm."},
  {w:["他们","都","高高兴兴地","回家","了"], a:"他们都高高兴兴地回家了。", vi:"Họ đều vui vẻ về nhà."},
  {w:["你","慢慢","说"], a:"你慢慢说。", vi:"Bạn nói từ từ."}]},
 {t:"C. Viết dạng lặp", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"高 · 慢 · 红", a:"高高 · 慢慢 · 红红"},
  {q:"漂亮 · 清楚 · 高兴", a:"漂漂亮亮 · 清清楚楚 · 高高兴兴"}]}],
rel:["二04","一20","一09","二51"]
};
