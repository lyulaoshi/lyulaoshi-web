// Bài ngữ pháp 【新4.64】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.64", title:"让步复句：即使／就是……，也……", vi:"即使 / 就是…也… — cho dù … cũng …", tag:"句子的类型 · 复句",
goals:[
 "Nêu một <b>giả định</b> (chưa chắc xảy ra), kết quả vẫn không đổi.",
 "Dùng 即使 (viết) / 就是 (nói) … 也 ….",
 "Phân biệt với 虽然 (chuyện có thật)."],
intro:"“<b>Cho dù</b> mai mưa, tôi <b>cũng</b> đi.” Trời chưa mưa: đó là giả định → 即使, không dùng 虽然.",
rules:[
 {t:"即使 / 就是 + giả định，S + 也 + V", sub:"让步", fx:[["即使 / 就是",null],["giả định",""],["·",""],["S",""],["也",null],["V",""]], mean:"Dù giả sử như vậy, vẫn …",
  ex:[["{1|即使}{2|明天下雨}，{3|我}{4|也}{5|去}。","Jíshǐ míngtiān xià yǔ, wǒ yě qù.","Cho dù mai mưa, tôi cũng đi."],
      ["{1|就是}{2|再忙}，{3|你}{4|也}{5|得吃饭}。","Jiùshì zài máng, nǐ yě děi chī fàn.","Dù bận đến mấy, bạn cũng phải ăn cơm."]]}],
notes:[{t:"即使 + từ cực đoan", html:"<span class='zh'>即使是老师，也不一定认识这个字。</span> = ngay cả thầy cũng chưa chắc biết chữ này."}],
cmp:[
 {vn:"Dù đắt tôi cũng mua.", zh:"[就是]贵，我[也]买。", py:"Jiùshì guì, wǒ yě mǎi.", ok:true, why:"也 đứng sau chủ ngữ vế sau."}],
ex:[
 ["[即使]失败了，我们[也]不后悔。","Jíshǐ shībài le, wǒmen yě bú hòuhuǐ.","Cho dù thất bại, chúng ta cũng không hối tiếc."],
 ["[就是]你不同意，我[也]要试试。","Jiùshì nǐ bù tóngyì, wǒ yě yào shìshi.","Dù bạn không đồng ý, tôi cũng muốn thử."],
 ["[即使]有钱，[也]不应该浪费。","Jíshǐ yǒu qián, yě bù yīnggāi làngfèi.","Dù có tiền cũng không nên lãng phí."]],
errs:[
 {bad:"即使明天下雨，但是我去。", good:"即使明天下雨，我也去。", why:"Vế sau dùng 也, không dùng 但是."},
 {bad:"即使他昨天病了，也来上课了。（chuyện có thật）", good:"虽然他昨天病了，但还是来上课了。", why:"Sự thật đã xảy ra dùng 虽然."},
 {bad:"就是很忙，也我去。", good:"就是很忙，我也去。", why:"也 đứng sau chủ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cho dù mai mưa, tôi cũng đi.", o:["即使明天下雨，我也去。","虽然明天下雨，我也去。","即使明天下雨，但是我去。"], a:0, why:"Giả định → 即使……也……."},
  {q:"就是再忙，你＿得吃饭。", vi:"Dù bận đến mấy bạn cũng phải ăn.", o:["也","却","才"], a:0, why:"就是……也……."},
  {q:"Câu nào nói chuyện đã có thật?", vi:"Chọn câu nói về sự việc đã xảy ra.", o:["即使下雨，我们也去。","虽然下雨了，我们还是去了。"], a:1, why:"虽然 + sự thật."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["即使","失败了，","我们","也","不","后悔"], a:"即使失败了，我们也不后悔。", vi:"Cho dù thất bại, chúng ta cũng không hối tiếc."},
  {w:["就是","你不同意，","我","也","要","试试"], a:"就是你不同意，我也要试试。", vi:"Dù bạn không đồng ý, tôi cũng muốn thử."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Cho dù mai mưa, tôi cũng đi.", a:"即使明天下雨，我也去。/ 就是明天下雨，我也去。/ 即使明天下雨，我也要去。"},
  {q:"Dù có tiền cũng không nên lãng phí.", a:"即使有钱，也不应该浪费。/ 就是有钱，也不应该浪费。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"即使你不说，我也知道。", vi:"Dù bạn không nói tôi cũng biết.", o:["Đúng","Sai"], a:0, why:"即使……也……."},
  {q:"虽然明天很冷，我们也要去。", vi:"Cho dù mai lạnh, chúng ta cũng đi.", o:["Đúng","Sai"], a:1, why:"Ngày mai là giả định: 即使明天很冷，我们也要去。"},
  {q:"即使很难，我都没试过。", vi:"Dù khó, tôi cũng sẽ thử.", o:["Đúng","Sai"], a:1, why:"即使很难，我也要试试。"}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿是老师，也不一定认识这个字。", vi:"Ngay cả thầy cũng chưa chắc biết chữ này.", o:["即使","虽然","因为"], a:0, why:"即使……也……."},
  {q:"这件事就是你求我，我＿不答应。", vi:"Việc này dù bạn xin, tôi cũng không đồng ý.", o:["也","就","才"], a:0, why:"就是……也……."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Dù bạn không nói, tôi cũng biết.", a:"即使你不说，我也知道。/ 就是你不说，我也知道。/ 你就是不说，我也知道。"},
  {q:"Cho dù thất bại, chúng ta cũng không hối tiếc.", a:"即使失败了，我们也不后悔。/ 就是失败了，我们也不后悔。"}]}],
rel:["二65","新4.61","三60"]
};
