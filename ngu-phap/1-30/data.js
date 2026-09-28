// Bài ngữ pháp 【一30】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一30", title:"主谓句2：形容词谓语句", vi:"Câu vị ngữ tính từ — S + 很 + Adj", tag:"句子的类型 · 句型 · 单句",
goals:[
 "Đặt câu <b>Chủ ngữ + (很 / phó từ mức độ) + tính từ</b> — không dùng 是.",
 "Hiểu vai trò của <b>很</b>: câu khẳng định thường phải có.",
 "Phủ định bằng <b>不 + tính từ</b>; hỏi bằng 吗 hoặc <b>Adj 不 Adj</b>."],
intro:"Tiếng Việt: “Tôi <b>(là)</b> bận.” — nhiều bạn dịch ra 我是忙. Tiếng Trung: tính từ <b>tự làm vị ngữ</b>, trước nó là 很 hoặc một phó từ mức độ.",
rules:[
 {t:"Khẳng định: S + 很 + Adj", sub:"肯定", fx:[["Chủ ngữ",""],["很 / 非常 / 最…",null],["Tính từ",""]], mean:"很 ở đây nghĩa nhẹ; bỏ 很 thì câu mang ý so sánh (<span class='zh'>这个大，那个小</span>).",
  ex:[["房间[很]干净。","Fángjiān hěn gānjìng.","Căn phòng rất sạch.","等级标准"],
      ["这个学生[最]认真。","Zhège xuésheng zuì rènzhēn.","Học sinh này chăm chỉ nhất.","等级标准"]]},
 {t:"Phủ định: S + 不 + Adj", sub:"否定", fx:[["Chủ ngữ",""],["不",null],["Tính từ",""]], mean:"Không cần 很; 不太 + Adj = không … lắm.",
  ex:[["今天[不]冷。","Jīntiān bù lěng.","Hôm nay không lạnh."],
      ["中文[不太]难。","Zhōngwén bú tài nán.","Tiếng Trung không khó lắm."]]},
 {t:"Câu hỏi", sub:"疑问", fx:[["S + Adj",""],["吗？",null],["/ S + Adj不Adj？",null]], mean:"Câu hỏi không dùng 很.",
  ex:[["你忙[吗]？","Nǐ máng ma?","Bạn có bận không?"],
      ["这个菜[好吃不好吃]？","Zhège cài hǎochī bu hǎochī?","Món này có ngon không?"]]}],
cmp:[
 {vn:"Tôi (là) rất bận.", zh:"我[很忙]。", py:"Wǒ hěn máng.", ok:false, tag:"(không dùng 是)", why:"Tính từ làm vị ngữ trực tiếp."},
 {vn:"Căn phòng rất sạch.", zh:"房间[很干净]。", py:"Fángjiān hěn gānjìng.", ok:true, why:"“rất” = 很 đứng trước tính từ."}],
ex:[
 ["我[很]高兴。","Wǒ hěn gāoxìng.","Tôi rất vui."],
 ["他的汉字[非常]漂亮。","Tā de Hànzì fēicháng piàoliang.","Chữ Hán của anh ấy vô cùng đẹp."],
 ["这件衣服[不]贵。","Zhè jiàn yīfu bú guì.","Cái áo này không đắt."],
 ["北京冬天冷[吗]？","Běijīng dōngtiān lěng ma?","Mùa đông Bắc Kinh có lạnh không?"]],
errs:[
 {bad:"房间是干净。", good:"房间很干净。", why:"Không dùng 是 trước tính từ."},
 {bad:"我是很忙。", good:"我很忙。", why:"Không dùng 是."},
 {bad:"你很忙吗？", good:"你忙吗？", why:"Câu hỏi 吗 thường bỏ 很."},
 {bad:"今天不很冷。（ý: không lạnh lắm）", good:"今天不太冷。", why:"“không … lắm” = 不太."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi rất bận.", o:["我是很忙。","我很忙。","我忙很。"], a:1, why:"S + 很 + Adj."},
  {q:"Hôm nay không lạnh.", o:["今天不冷。","今天不是冷。","今天冷不。"], a:0, why:"不 + Adj."},
  {q:"Bạn có bận không?", o:["你很忙吗？","你是忙吗？","你忙吗？"], a:2, why:"Adj + 吗."},
  {q:"Món này có ngon không?", o:["这个菜好吃不好吃？","这个菜好吃不好吃吗？","这个菜是好吃吗？"], a:0, why:"Adj不Adj."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["房间","很","干净"], a:"房间很干净。", vi:"Căn phòng rất sạch."},
  {w:["这个","学生","最","认真"], a:"这个学生最认真。", vi:"Học sinh này chăm chỉ nhất."},
  {w:["中文","不太","难"], a:"中文不太难。", vi:"Tiếng Trung không khó lắm."}]},
 {t:"C. Đổi câu", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"这件衣服很贵。", vi:"Chiếc áo này rất đắt.", a:"这件衣服不贵。"},
  {ask:"Hỏi bằng 吗", q:"今天很热。", vi:"Hôm nay rất nóng.", a:"今天热吗？"},
  {ask:"Hỏi bằng Adj不Adj", q:"他很高。", vi:"Anh ấy rất cao.", a:"他高不高？"}]}],
rel:["一25","一09","一36","一48"]
};
