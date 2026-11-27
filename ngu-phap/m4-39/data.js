// Bài ngữ pháp 【新4.39】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.39", title:"X也得X，不X也得X", vi:"X也得X，不X也得X — muốn hay không cũng phải …", tag:"短语 · 固定格式",
goals:[
 "Nói điều <b>bắt buộc</b>, không có lựa chọn: 去也得去，不去也得去.",
 "Đọc 得 là <b>děi</b> (phải).",
 "Lặp đúng một động từ ở cả bốn chỗ."],
intro:"“<b>Đi cũng phải đi, không đi cũng phải đi</b>.” Giọng ép buộc hoặc đành chịu.",
rules:[
 {t:"V + 也得 + V，不 + V + 也得 + V", sub:"强制", fx:[["V",""],["也得",null],["V",""],["·",""],["不 + V",""],["也得",null],["V",""]], mean:"Dù muốn hay không cũng phải làm.",
  ex:[["这个会很重要，你{1|去}{2|也得}{3|去}，{4|不去}{5|也得}{6|去}。","Zhège huì hěn zhòngyào, nǐ qù yě děi qù, bú qù yě děi qù.","Cuộc họp này quan trọng, bạn muốn hay không cũng phải đi."]]}],
notes:[{t:"得 đọc děi", html:"Trong khung này 得 là động từ năng nguyện “phải”, đọc <b>děi</b>."}],
cmp:[
 {vn:"Thuốc này con muốn hay không cũng phải uống.", zh:"这药你[喝也得喝]，[不喝也得喝]。", py:"Zhè yào nǐ hē yě děi hē, bù hē yě děi hē.", ok:true, why:"Một động từ 喝 lặp lại."}],
ex:[
 ["明天要交作业，你[做也得做]，[不做也得做]。","Míngtiān yào jiāo zuòyè, nǐ zuò yě děi zuò, bú zuò yě děi zuò.","Mai phải nộp bài, con muốn hay không cũng phải làm."],
 ["票已经买了，我们[看也得看]，[不看也得看]。","Piào yǐjīng mǎi le, wǒmen kàn yě děi kàn, bú kàn yě děi kàn.","Vé mua rồi, chúng ta muốn hay không cũng phải xem."],
 ["规定就是规定，你[同意也得同意]，[不同意也得同意]。","Guīdìng jiùshì guīdìng, nǐ tóngyì yě děi tóngyì, bù tóngyì yě děi tóngyì.","Quy định là quy định, bạn đồng ý hay không cũng phải chịu."]],
errs:[
 {bad:"你去也得去，不去也得不去。", good:"你去也得去，不去也得去。", why:"Hai vế đều kết thúc bằng 去 (vẫn phải đi)."},
 {bad:"你喝也要喝得，不喝也喝。", good:"你喝也得喝，不喝也得喝。", why:"Giữ đúng khung V也得V."},
 {bad:"你去得也去，不去得也去。", good:"你去也得去，不去也得去。", why:"也 đứng trước 得."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Muốn hay không cũng phải đi.", o:["去也得去，不去也得去。","去也得去，不去也得不去。"], a:0, why:"Kết quả hai vế đều là 去."},
  {q:"“去也得去” — 得 đọc là:", vi:"Chọn cách đọc.", o:["dé","děi","de"], a:1, why:"得 = phải."},
  {q:"这药你喝也得喝，不喝也得＿。", vi:"Thuốc này muốn hay không cũng phải uống.", o:["喝","不喝","吃饭"], a:0, why:"Lặp lại 喝."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","做","也得做，","不做","也得","做"], a:"你做也得做，不做也得做。", vi:"Con muốn hay không cũng phải làm."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Cuộc họp này bạn muốn hay không cũng phải đi.", a:"这个会你去也得去，不去也得去。/ 这个会议你去也得去，不去也得去。"}]}],
rel:["新4.44","三04","新4.43"]
};
