// Bài ngữ pháp 【新4.21】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.21", title:"叹词：啊、嗯", vi:"啊, 嗯 — thán từ", tag:"词类 · 叹词",
goals:[
 "Nghe và dùng <b>啊</b> đúng thanh điệu để tỏ ngạc nhiên, hỏi lại, vỡ lẽ, đồng ý.",
 "Dùng <b>嗯</b> để đáp “ừ, vâng” hoặc tỏ ý băn khoăn.",
 "Phân biệt thán từ 啊 (đứng <b>riêng</b>) với trợ từ 啊 cuối câu."],
intro:"Thán từ đứng <b>một mình</b>, tách khỏi câu bằng dấu phẩy. Cùng chữ 啊 nhưng <b>đổi thanh là đổi nghĩa</b>.",
rules:[
 {t:"啊 ā / á / ǎ / à，+ câu", sub:"（1）啊", fx:[["啊",null],["·",""],["câu",""]], mean:"ā: reo lên · á: hỏi lại · ǎ: ngạc nhiên, nghi ngờ · à: đồng ý, vỡ lẽ.",
  ex:[["{1|啊}，{2|下雪了}！","Ā, xià xuě le!","A, tuyết rơi rồi!"],
      ["{1|啊}？{2|你说什么}？","Á? Nǐ shuō shénme?","Hả? Bạn nói gì?"],
      ["{1|啊}，{2|原来是你}！","À, yuánlái shì nǐ!","À, hóa ra là bạn!"]]},
 {t:"嗯 ǹg / ńg / ňg，+ câu", sub:"（2）嗯", fx:[["嗯",null],["·",""],["câu",""]], mean:"ǹg: ừ, vâng · ńg: hử? · ňg: ơ, sao lại thế.",
  ex:[["{1|嗯}，{2|我知道了}。","Ǹg, wǒ zhīdào le.","Vâng, tôi biết rồi."],
      ["{1|嗯}？{2|钥匙怎么不见了}？","Ňg? Yàoshi zěnme bú jiàn le?","Ơ? Chìa khóa sao không thấy đâu rồi?"]]}],
cmp:[
 {vn:"Ừ, được.", zh:"[嗯]，好的。", py:"Ǹg, hǎo de.", ok:true, why:"嗯 đọc giọng đi xuống = ừ, vâng."}],
ex:[
 ["[啊]，太漂亮了！","Ā, tài piàoliang le!","A, đẹp quá!"],
 ["[啊]，我想起来了。","À, wǒ xiǎng qilai le.","À, tôi nhớ ra rồi."],
 ["“明天别迟到。”“[嗯]，放心吧。”","“Míngtiān bié chídào.” “Ǹg, fàngxīn ba.”","“Mai đừng đến muộn.” “Vâng, yên tâm nhé.”"]],
errs:[
 {bad:"啊下雪了！", good:"啊，下雪了！", why:"Thán từ đứng riêng, tách khỏi câu bằng dấu phẩy."},
 {bad:"“你懂了吗？”“啊？懂了。”（đọc á）", good:"“你懂了吗？”“嗯，懂了。”", why:"啊 đọc á là hỏi lại; trả lời “vâng” dùng 嗯 (ǹg) hoặc 啊 (à)."}],
practice:[
 {t:"A. Chọn đáp án", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Muốn hỏi lại “Hả?” thì đọc 啊 thế nào?", o:["ā","á","à"], a:1, why:"Thanh 2 đi lên = hỏi lại."},
  {q:"“记得带护照。”“＿，知道了。”", vi:"“Nhớ mang hộ chiếu.” “Vâng, biết rồi.”", o:["嗯","吗","呢"], a:0, why:"嗯 dùng để đáp."},
  {q:"“À, hóa ra là vậy!” đọc 啊 thế nào?", o:["á","à"], a:1, why:"Thanh 4 = vỡ lẽ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["啊，","原来","是","你"], a:"啊，原来是你。", vi:"À, hóa ra là bạn."},
  {w:["嗯，","我","知道","了"], a:"嗯，我知道了。", vi:"Vâng, tôi biết rồi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"A, tuyết rơi rồi!", a:"啊，下雪了！"},
  {q:"À, tôi nhớ ra rồi.", a:"啊，我想起来了。"}]}],
rel:["二34","二36"]
};
