// Bài ngữ pháp 【新4.47】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.47", title:"程度补语2：死了／厉害", vi:"Bổ ngữ mức độ 死了, 厉害 — … chết đi được, … dữ", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>Adj + 死了</b> khẩu ngữ: … chết đi được.",
 "Dùng <b>V / Adj + 得 + 厉害</b>: … dữ dội.",
 "Biết 厉害 thường đi với chuyện khó chịu."],
intro:"Giống tiếng Việt “đói <b>chết đi được</b>”, “đau <b>dữ</b> lắm”.",
rules:[
 {t:"Adj / V tâm lý + 死了", sub:"（1）死了", fx:[["Adj / V",""],["死了",null]], mean:"Cực kỳ; không thêm 得.",
  ex:[["今天{1|热}{2|死了}。","Jīntiān rè sǐ le.","Hôm nay nóng chết đi được."],
      ["这几天{1|忙}{2|死了}。","Zhè jǐ tiān máng sǐ le.","Mấy hôm nay bận chết đi được."]]},
 {t:"V / Adj + 得 + 厉害", sub:"（2）厉害", fx:[["S",""],["V / Adj",""],["得",null],["厉害",null]], mean:"Dữ dội, nặng.",
  ex:[["{1|我头}{2|疼}{3|得}{4|厉害}。","Wǒ tóu téng de lìhai.","Tôi đau đầu dữ lắm."],
      ["外面{1|风}{2|刮}{3|得}很{4|厉害}。","Wàimian fēng guā de hěn lìhai.","Ngoài trời gió thổi dữ dội."]]}],
cmp:[
 {vn:"Tôi mệt chết đi được.", zh:"我[累死了]。", py:"Wǒ lèi sǐ le.", ok:true, why:"死了 đứng ngay sau tính từ."}],
ex:[
 ["饿[死了]，快吃饭吧。","È sǐ le, kuài chī fàn ba.","Đói chết mất, ăn cơm mau đi."],
 ["他咳嗽得很[厉害]。","Tā késou de hěn lìhai.","Anh ấy ho dữ lắm."],
 ["路上堵得[厉害]。","Lùshang dǔ de lìhai.","Đường tắc kinh khủng."]],
errs:[
 {bad:"今天很热死了。", good:"今天热死了。", why:"Đã có bổ ngữ, không thêm 很."},
 {bad:"我累得死了。", good:"我累死了。", why:"死了 không cần 得."},
 {bad:"我头疼厉害。", good:"我头疼得厉害。", why:"厉害 cần 得."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay nóng chết đi được.", o:["今天热死了。","今天很热死了。","今天热得死。"], a:0, why:"Adj + 死了."},
  {q:"我头疼＿厉害。", vi:"Tôi đau đầu dữ lắm.", o:["得","的","地"], a:0, why:"得 + 厉害."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","咳嗽","得","很厉害"], a:"他咳嗽得很厉害。", vi:"Anh ấy ho dữ lắm."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi mệt chết đi được.", a:"我累死了。"},
  {q:"Đường tắc kinh khủng (dùng 厉害).", a:"路上堵得厉害。/ 路上堵得很厉害。"}]}],
rel:["三49","新5.26","新4.31"]
};
