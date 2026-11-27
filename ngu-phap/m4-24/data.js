// Bài ngữ pháp 【新4.24】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.24", title:"来得及／来不及", vi:"来得及 / 来不及 — kịp / không kịp", tag:"短语 · 固定短语",
goals:[
 "Nói <b>còn kịp</b> bằng 来得及, <b>không kịp</b> bằng 来不及.",
 "Đặt động từ <b>sau</b> 来得及 / 来不及: 来不及<b>吃早饭</b>.",
 "Phủ định, hỏi: 还来得及吗？"],
intro:"Tiếng Việt: “không kịp <b>ăn sáng</b>”. Tiếng Trung cũng vậy: 来不及 <b>đứng trước</b> động từ.",
rules:[
 {t:"S + (还) 来得及 + (V)", sub:"（1）kịp", fx:[["S",""],["还",""],["来得及",null],["V",""]], mean:"Vẫn còn thời gian để làm.",
  ex:[["{1|我们}{2|还}{3|来得及}{4|喝杯咖啡}。","Wǒmen hái láidejí hē bēi kāfēi.","Chúng ta vẫn kịp uống cốc cà phê."]]},
 {t:"S + 来不及 + V (+ 了)", sub:"（2）không kịp", fx:[["S",""],["来不及",null],["V",""],["了",""]], mean:"Không còn đủ thời gian.",
  ex:[["{1|我}{2|来不及}{3|吃早饭}{4|了}。","Wǒ láibují chī zǎofàn le.","Tôi không kịp ăn sáng rồi."],
      ["{1|他}{2|来不及}{3|换衣服}就走了。","Tā láibují huàn yīfu jiù zǒu le.","Anh ấy không kịp thay quần áo đã đi."]]}],
notes:[{t:"Không có tân ngữ danh từ", html:"Không nói <span class='zh'>来不及飞机</span>; nói <span class='zh'>赶不上飞机</span> hoặc <span class='zh'>来不及坐飞机</span>."}],
cmp:[
 {vn:"Bây giờ đi vẫn còn kịp.", zh:"现在去还[来得及]。", py:"Xiànzài qù hái láidejí.", ok:true, why:"Việc cần làm có thể đứng trước, 来得及 làm vị ngữ."}],
ex:[
 ["别着急，时间还[来得及]。","Bié zháojí, shíjiān hái láidejí.","Đừng vội, vẫn còn kịp thời gian."],
 ["快点儿，要不然就[来不及]了。","Kuài diǎnr, yàobùrán jiù láibují le.","Nhanh lên, không thì không kịp đâu."],
 ["现在报名还[来得及]吗？","Xiànzài bàomíng hái láidejí ma?","Bây giờ đăng ký còn kịp không?"]],
errs:[
 {bad:"我吃早饭来不及了。（muốn nói không kịp ăn）", good:"我来不及吃早饭了。", why:"来不及 đứng trước động từ."},
 {bad:"我们来不及火车了。", good:"我们赶不上火车了。", why:"来不及 không mang tân ngữ danh từ."},
 {bad:"现在还不来得及。", good:"现在还来得及。/ 现在已经来不及了。", why:"Phủ định là 来不及, không thêm 不 trước 来得及."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi không kịp ăn sáng rồi.", o:["我来不及吃早饭了。","我吃来不及早饭了。","我不来得及吃早饭了。"], a:0, why:"来不及 + V."},
  {q:"Bây giờ đi còn kịp không?", o:["现在去还来得及吗？","现在去还来不及得吗？"], a:0, why:"还来得及吗 = còn kịp không."},
  {q:"Chúng ta không bắt kịp tàu hỏa rồi.", o:["我们来不及火车了。","我们赶不上火车了。"], a:1, why:"Tân ngữ danh từ dùng 赶不上."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["别","着急，","时间","还","来得及"], a:"别着急，时间还来得及。", vi:"Đừng vội, vẫn còn kịp."},
  {w:["他","来不及","换衣服","就","走了"], a:"他来不及换衣服就走了。", vi:"Anh ấy không kịp thay quần áo đã đi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Chúng ta vẫn kịp uống cốc cà phê.", a:"我们还来得及喝杯咖啡。/ 我们还来得及喝一杯咖啡。"},
  {q:"Bây giờ đăng ký còn kịp không?", a:"现在报名还来得及吗？"}]}],
rel:["三48","新4.26"]
};
