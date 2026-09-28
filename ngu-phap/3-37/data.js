// Bài ngữ pháp 【三37】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三37", title:"有的是", vi:"有的是 — có rất nhiều, thiếu gì", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>有的是 + danh từ</b> hoặc <b>danh từ + 有的是</b>: có rất nhiều (không lo thiếu).",
 "Phân biệt với <b>有的……有的……</b> (có người … có người …) 【一06】.",
 "Dùng trong khẩu ngữ, mời người khác cứ tự nhiên."],
intro:"有的是 = “có đầy, thiếu gì” — nhấn mạnh <b>số lượng nhiều</b>, người nghe không phải lo.",
rules:[
 {t:"有的是 + N · N + 有的是", sub:"有的是", fx:[["(Nơi chốn / S)",""],["有的是",null],["Danh từ",""]], mean:"",
  ex:[["咱们图书馆[有的是]书，你可以多看看。","Zánmen túshūguǎn yǒudeshì shū, nǐ kěyǐ duō kànkan.","Thư viện chúng ta có đầy sách, bạn cứ đọc nhiều vào.","等级标准"],
      ["这儿水果[有的是]，你多拿一点儿。","Zhèr shuǐguǒ yǒudeshì, nǐ duō ná yìdiǎnr.","Ở đây hoa quả thiếu gì, bạn cứ lấy thêm đi.","等级标准"]]}],
cmp:[
 {vn:"Thời gian thì thiếu gì, đừng vội.", zh:"时间[有的是]，别着急。", py:"Shíjiān yǒudeshì, bié zháojí.", ok:true, why:"“thiếu gì” = 有的是."}],
ex:[
 ["他[有的是]钱。","Tā yǒudeshì qián.","Anh ấy có đầy tiền."],
 ["机会[有的是]，别难过。","Jīhuì yǒudeshì, bié nánguò.","Cơ hội còn nhiều, đừng buồn."]],
errs:[
 {bad:"有的是人喜欢茶，有的是人喜欢咖啡。", good:"有的人喜欢茶，有的人喜欢咖啡。", why:"“có người … có người …” là 有的……有的……"},
 {bad:"这儿很有的是水果。", good:"这儿有的是水果。", why:"Không thêm 很."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Ở đây hoa quả thiếu gì.", o:["这儿水果有的是。","这儿水果很有的是。"], a:0, why:"Không 很."},
  {q:"Có người thích trà, có người thích cà phê.", o:["有的是人喜欢茶，有的是人喜欢咖啡。","有的人喜欢茶，有的人喜欢咖啡。"], a:1, why:"有的……有的……"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["咱们图书馆","有的是","书"], a:"咱们图书馆有的是书。", vi:"Thư viện chúng ta có đầy sách."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cơ hội còn nhiều, đừng buồn.", a:"机会有的是，别难过。"}]}],
rel:["一06","一37","三08","二14"]
};
