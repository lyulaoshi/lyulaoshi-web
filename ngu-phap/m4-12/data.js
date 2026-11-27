// Bài ngữ pháp 【新4.12】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.12", title:"语气副词：竟然、究竟、确实、差（一）点儿", vi:"竟然, 究竟, 确实, 差点儿 — vậy mà, rốt cuộc, quả thật, suýt", tag:"词类 · 副词",
goals:[
 "Dùng <b>竟然</b> tỏ ngạc nhiên.",
 "Dùng <b>究竟</b> truy hỏi (= 到底).",
 "Dùng <b>确实</b> khẳng định và <b>差（一）点儿</b> nói suýt xảy ra."],
intro:"Phó từ ngữ khí cho thấy <b>thái độ người nói</b>. Điểm này trong đề cương còn gồm 才, 就, 并, 还, 到底, 难道, 千万, 只好 (xem 【三19】).",
rules:[
 {t:"S + 竟然 + V", sub:"（1）竟然", fx:[["S",""],["竟然",null],["V / Adj",""]], mean:"Không ngờ, vậy mà.",
  ex:[["{1|他}{2|竟然}{3|不知道这件事}。","Tā jìngrán bù zhīdào zhè jiàn shì.","Vậy mà anh ấy không biết việc này."]]},
 {t:"S + 究竟 + câu hỏi", sub:"（2）究竟", fx:[["S",""],["究竟",null],["câu hỏi (không 吗)",""]], mean:"Rốt cuộc.",
  ex:[["{1|你}{2|究竟}{3|去不去}？","Nǐ jiūjìng qù bu qù?","Rốt cuộc bạn có đi không?"]]},
 {t:"确实 + V / Adj", sub:"（3）确实", fx:[["S",""],["确实",null],["V / Adj",""]], mean:"Quả thật, đúng là.",
  ex:[["{1|这个菜}{2|确实}{3|很好吃}。","Zhège cài quèshí hěn hǎochī.","Món này quả thật ngon."]]},
 {t:"S + 差（一）点儿 + V", sub:"（4）差点儿", fx:[["S",""],["差点儿",null],["V",""]], mean:"Suýt nữa. Việc xấu suýt xảy ra.",
  ex:[["{1|我}{2|差点儿}{3|迟到}。","Wǒ chàdiǎnr chídào.","Tôi suýt đến muộn."]]}],
notes:[{t:"差点儿没", html:"Với việc xấu, <span class='zh'>差点儿摔倒</span> và <span class='zh'>差点儿没摔倒</span> cùng nghĩa: suýt ngã."}],
cmp:[
 {vn:"Rốt cuộc là chuyện gì?", zh:"这[究竟]是怎么回事？", py:"Zhè jiūjìng shì zěnme huí shì?", ok:true, why:"Câu có từ để hỏi, không thêm 吗."}],
ex:[
 ["这么简单的题，他[竟然]做错了。","Zhème jiǎndān de tí, tā jìngrán zuòcuò le.","Bài dễ thế mà em ấy làm sai."],
 ["他最近[确实]很忙。","Tā zuìjìn quèshí hěn máng.","Dạo này anh ấy quả thật bận."],
 ["我[差点儿]忘了你的生日。","Wǒ chàdiǎnr wàngle nǐ de shēngrì.","Tôi suýt quên sinh nhật bạn."]],
errs:[
 {bad:"你究竟去吗？", good:"你究竟去不去？", why:"究竟 không đi với 吗."},
 {bad:"竟然他不知道。", good:"他竟然不知道。", why:"竟然 đứng sau chủ ngữ."},
 {bad:"我差点儿考上了大学。（muốn nói đã đỗ sát nút）", good:"我差点儿没考上大学。", why:"Với việc mong muốn: 差点儿没 = suýt không (nhưng đã được)."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你＿想要什么？", vi:"Rốt cuộc bạn muốn gì?", o:["究竟","竟然","确实"], a:0, why:"Truy hỏi → 究竟."},
  {q:"他才五岁，＿会写这么多汉字！", vi:"Mới 5 tuổi mà viết được nhiều chữ Hán thế!", o:["竟然","究竟","差点儿"], a:0, why:"Ngạc nhiên → 竟然."},
  {q:"路太滑了，我＿摔倒。", vi:"Đường trơn quá, tôi suýt ngã.", o:["差点儿","确实","究竟"], a:0, why:"Suýt → 差点儿."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","竟然","不知道","这件事"], a:"他竟然不知道这件事。", vi:"Vậy mà anh ấy không biết việc này."},
  {w:["他","最近","确实","很忙"], a:"他最近确实很忙。", alt:["最近他确实很忙。"], vi:"Dạo này anh ấy quả thật bận."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi suýt đến muộn.", a:"我差点儿迟到。/ 我差一点儿迟到。/ 我差点儿迟到了。/ 我差一点就迟到了。"}]}],
rel:["三19","二20","新5.11"]
};
