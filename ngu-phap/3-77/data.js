// Bài ngữ pháp 【三77】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三77", title:"用“是”强调", vi:"Nhấn mạnh bằng 是 — đúng là, quả thật", tag:"强调的方法",
goals:[
 "Đặt <b>是</b> (đọc nhấn) trước vị ngữ để <b>khẳng định, đồng tình</b>: 他是很负责.",
 "Hiểu đây không phải 是 “là” nối hai danh từ."],
intro:"Khi đồng ý với người khác, thêm 是 (đọc nhấn mạnh) = “đúng là, quả thật là”.",
rules:[
 {t:"S + 是 (nhấn) + vị ngữ", sub:"强调", fx:[["S",""],["是",null],["(很) Adj / V",""]], mean:"",
  ex:[["你说得对，这位经理[是]很负责。","Nǐ shuō de duì, zhè wèi jīnglǐ shì hěn fùzé.","Bạn nói đúng, vị giám đốc này đúng là rất có trách nhiệm.","等级标准"],
      ["我同意，那电影[是]很有意思。","Wǒ tóngyì, nà diànyǐng shì hěn yǒu yìsi.","Tôi đồng ý, bộ phim đó quả thật rất hay.","等级标准"]]}],
notes:[{t:"Phân biệt", html:"<span class='zh'>他很负责。</span> = nói bình thường. <span class='zh'>他是很负责。</span> = xác nhận / đồng tình (“đúng là thế”)."}],
cmp:[
 {vn:"Món này đúng là ngon thật.", zh:"这个菜[是]很好吃。", py:"Zhège cài shì hěn hǎochī.", ok:true, why:"是 = “đúng là”, đặt trước 很 + tính từ."}],
ex:[
 ["今天[是]有点儿冷。","Jīntiān shì yǒudiǎnr lěng.","Hôm nay đúng là hơi lạnh."],
 ["他[是]来过，不过又走了。","Tā shì lái guo, búguò yòu zǒu le.","Anh ấy đúng là có đến, nhưng lại đi rồi."]],
errs:[
 {bad:"这个菜很是好吃。（ý: đúng là ngon）", good:"这个菜是很好吃。", why:"是 đứng trước 很."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đồng ý, bộ phim đó quả thật rất hay.", o:["我同意，那电影是很有意思。","我同意，那电影很是有意思。"], a:0, why:"是 + 很 + Adj."},
  {q:"“他是很负责” khác “他很负责” thế nào?", vi:"Anh ấy đúng là rất có trách nhiệm / Anh ấy rất có trách nhiệm.", o:["Có 是: xác nhận, đồng tình (“đúng là”).","Có 是: nghĩa phủ định."], a:0, why:"是 nhấn mạnh khẳng định."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["今天","是","有点儿","冷"], a:"今天是有点儿冷。", vi:"Hôm nay đúng là hơi lạnh."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Món này đúng là ngon thật.", a:"这个菜是很好吃。/ 这个菜是挺好吃的。"}]}],
rel:["二74","三68","三76","二60"]
};
