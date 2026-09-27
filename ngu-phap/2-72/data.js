// Bài ngữ pháp 【二72】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二72", title:"序数表示法", vi:"Cách nói số thứ tự — 第一, tầng 2, phòng 205…", tag:"特殊表达法 · 数的表示法",
goals:[
 "Nói số thứ tự bằng <b>第 + số</b> (thứ nhất, thứ ba…).",
 "Biết nhiều trường hợp <b>không cần 第</b>: 二楼、三层、13号楼、205房间、302路.",
 "Đọc số phòng, số tuyến xe theo từng chữ số."],
intro:"Tiếng Việt “thứ” + số; tiếng Trung <b>第</b> + số. Nhưng với tầng, số nhà, phòng, tuyến xe… chỉ cần <b>số + danh từ</b>.",
rules:[
 {t:"第 + số (+ lượng từ + N)", sub:"第", fx:[["第",null],["Số",""],["(lượng từ + N)",""]], mean:"",
  ex:[["[第]一　[第]三　[第]七","dì-yī　dì-sān　dì-qī","thứ nhất　thứ ba　thứ bảy","等级标准"],
      ["这是我[第]一次来中国。","Zhè shì wǒ dì-yī cì lái Zhōngguó.","Đây là lần đầu tiên tôi đến Trung Quốc."]]},
 {t:"Số + danh từ (không cần 第)", sub:"", fx:[["Số",""],["楼 / 层 / 号 / 房间 / 路",null]], mean:"Số phòng, số tuyến xe đọc từng chữ số: 205 = èr líng wǔ; 1 thường đọc yāo.",
  ex:[["二楼　三层","èr lóu　sān céng","tầng hai　tầng ba","等级标准"],
      ["13号楼　205房间　302路公交车","shísān hào lóu　èr líng wǔ fángjiān　sān líng èr lù gōngjiāochē","tòa nhà số 13　phòng 205　xe buýt tuyến 302","等级标准"]]}],
cmp:[
 {vn:"lần thứ nhất", zh:"[第]一次", py:"dì-yī cì", ok:true, why:"“thứ” = 第."},
 {vn:"tầng hai", zh:"二楼", py:"èr lóu", ok:true, why:"Không cần 第, dùng 二 (không dùng 两)."}],
ex:[
 ["我住在[三]楼。","Wǒ zhù zài sān lóu.","Tôi ở tầng ba."],
 ["我们坐[302]路公交车去吧。","Wǒmen zuò sān líng èr lù gōngjiāochē qù ba.","Mình đi xe buýt tuyến 302 nhé."],
 ["他是[第]一个到教室的。","Tā shì dì-yī ge dào jiàoshì de.","Anh ấy là người đầu tiên đến lớp."]],
errs:[
 {bad:"一第", good:"第一", why:"第 đứng trước số."},
 {bad:"两楼（ý: tầng hai）", good:"二楼", why:"Số thứ tự dùng 二."},
 {bad:"二百零五房间", good:"205（èr líng wǔ）房间", why:"Số phòng đọc từng chữ số."}],
practice:[
 {t:"A. Chọn cách nói đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"thứ nhất", o:["一第","第一","第一个第"], a:1, why:"第 + số."},
  {q:"tầng hai", o:["两楼","二楼","第两楼"], a:1, why:"二楼."},
  {q:"Đây là lần đầu tôi đến Trung Quốc.", o:["这是我一第次来中国。","这是我第一次来中国。","这是我次第一来中国。"], a:1, why:"第一次."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这是","我","第一次","来","中国"], a:"这是我第一次来中国。", vi:"Đây là lần đầu tiên tôi đến Trung Quốc."},
  {w:["我","住在","三楼"], a:"我住在三楼。", vi:"Tôi ở tầng ba."}]},
 {t:"C. Nói bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"phòng 205, tòa nhà số 13", a:"13号楼205房间"},
  {q:"Anh ấy là người đầu tiên đến lớp.", a:"他是第一个到教室的。"}]}],
rel:["一07","二09","三01","一44"]
};
