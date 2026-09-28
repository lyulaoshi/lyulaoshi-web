// Bài ngữ pháp 【一43】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一43", title:"钱数表示法", vi:"Cách nói số tiền — 块 · 毛 · 分 / 元", tag:"特殊表达法 · 数的表示法",
goals:[
 "Đọc số tiền bằng <b>块、毛、分</b> (khẩu ngữ) và <b>元</b> (viết, trang trọng).",
 "Biết lược đơn vị cuối và đọc <b>零</b> khi thiếu hàng giữa.",
 "Hỏi giá bằng <b>多少钱？</b>"],
intro:"Tiền Trung Quốc: 1 元 (块) = 10 角 (毛) = 100 分. Khi nói thường dùng <b>块 · 毛 · 分</b>; trên giấy tờ, bảng giá dùng <b>元 · 角 · 分</b>.",
rules:[
 {t:"Số + 块 + số + 毛 + số + 分", sub:"口语", fx:[["số",""],["块",null],["số",""],["毛",null],["số",""],["(分)",null]], mean:"Đơn vị cuối cùng có thể lược.",
  ex:[["九块三（毛）","jiǔ kuài sān (máo)","9,30 tệ","等级标准"],
      ["十五块六毛三（分）","shíwǔ kuài liù máo sān (fēn)","15,63 tệ","等级标准"]]},
 {t:"Thiếu hàng ở giữa: đọc 零", sub:"零", fx:[["số",""],["块",null],["零",null],["số",""],["(分)",""]], mean:"25,08 = 二十五块零八（分）.",
  ex:[["二十五块[零]八（分）","èrshíwǔ kuài líng bā (fēn)","25,08 tệ","等级标准"],
      ["一百[零]五（元 / 块）","yìbǎi líng wǔ (yuán / kuài)","105 tệ","等级标准"]]},
 {t:"Số tròn: 元 / 块", sub:"元 · 块", fx:[["số",""],["元 / 块",null]], mean:"150 tệ = 一百五十（元 / 块）.",
  ex:[["一百五十（元）　一百五十（块）","yìbǎi wǔshí (yuán)　yìbǎi wǔshí (kuài)","150 tệ","等级标准"]]}],
notes:[
 {t:"2 tệ", html:"nói <span class='zh'>两块</span> (không nói 二块); nhưng <span class='zh'>十二块、二十块</span> 【一07】."},
 {t:"Hỏi giá", html:"<span class='zh'>这个多少钱？</span> — <span class='zh'>十块。</span>"}],
cmp:[
 {vn:"Cái này bao nhiêu tiền?", zh:"这个[多少钱]？", py:"Zhège duōshao qián?", ok:true, why:"“bao nhiêu tiền” = 多少钱, cuối câu."},
 {vn:"Hai tệ", zh:"[两块]", py:"liǎng kuài", ok:true, why:"Trước 块 dùng 两."}],
ex:[
 ["这个[多少钱]？——[五块]。","Zhège duōshao qián? —— Wǔ kuài.","Cái này bao nhiêu tiền? — Năm tệ."],
 ["一杯咖啡[二十八块]。","Yì bēi kāfēi èrshíbā kuài.","Một cốc cà phê 28 tệ."],
 ["苹果[三块五]一斤。","Píngguǒ sān kuài wǔ yì jīn.","Táo 3,5 tệ một cân (nửa ký)."],
 ["我有[两块]钱。","Wǒ yǒu liǎng kuài qián.","Tôi có hai tệ."]],
errs:[
 {bad:"二块", good:"两块", why:"Trước lượng từ 块 dùng 两."},
 {bad:"二十五块八（= 25,08）", good:"二十五块零八", why:"Thiếu hàng 毛 phải đọc 零; 二十五块八 là 25,80."},
 {bad:"这个钱多少？", good:"这个多少钱？", why:"多少钱 đi liền nhau."}],
practice:[
 {t:"A. Chọn cách đọc đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"9,30 tệ", o:["九块三","九块零三","九三块"], a:0, why:"块 + 3 毛."},
  {q:"25,08 tệ", o:["二十五块八","二十五块零八","二十五零八块"], a:1, why:"Thiếu 毛 → 零."},
  {q:"2 tệ", o:["二块","两块","二元块"], a:1, why:"两块."},
  {q:"105 tệ", o:["一百五","一百零五","一零五"], a:1, why:"一百零五; 一百五 = 150."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个","多少","钱"], a:"这个多少钱？", vi:"Cái này bao nhiêu tiền?"},
  {w:["一杯","咖啡","二十八块"], a:"一杯咖啡二十八块。", vi:"Một cốc cà phê 28 tệ."}]},
 {t:"C. Đọc số tiền", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"15,63 元", vi:"15,63 tệ", a:"十五块六毛三（分）"},
  {q:"150 元", vi:"150 tệ", a:"一百五十块（元）"},
  {q:"3,05 元", vi:"3,05 tệ", a:"三块零五（分）"}]}],
rel:["一07","一08","一23","一44"]
};
