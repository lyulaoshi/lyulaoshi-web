// Bài ngữ pháp 【新5.22】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.22", title:"固定格式：X也不是、真有你的…", vi:"Khẩu ngữ: dở cả hai đường, ngồi không cũng vậy, giỏi thật đấy…", tag:"短语 · 固定格式",
goals:[
 "Diễn tả <b>khó xử cả hai đường</b>.",
 "Dùng <b>X着也是X着</b>, <b>X是它，Y也是它</b> khi đề nghị làm luôn.",
 "Dùng <b>不管怎样说</b> và <b>真有你的</b>."],
intro:"Đây là những câu khẩu ngữ cố định. Nên <b>học cả cụm</b> kèm tình huống.",
rules:[
 {t:"X也不是，Y也不是 / X也X不得，Y也Y不得", sub:"（1）khó xử", fx:[["X也不是 / X也X不得",""],["，",""],["Y也不是 / Y也Y不得",""]], mean:"Làm thế nào cũng không ổn.",
  ex:[["他站在那儿，{1|走也不是}，{2|留也不是}。","Tā zhàn zài nàr, zǒu yě búshì, liú yě búshì.","Anh ấy đứng đó, đi cũng dở, ở cũng không xong."],
      ["这件事真让人{1|哭也哭不得}，{2|笑也笑不得}。","Zhè jiàn shì zhēn ràng rén kū yě kū bude, xiào yě xiào bude.","Chuyện này làm người ta dở khóc dở cười."]]},
 {t:"X是它，Y也是它", sub:"（2）đằng nào cũng vậy", fx:[["X是它",""],["，",""],["Y也是它",""],["，",""],["đề nghị",""]], mean:"Thế nào kết cục cũng chỉ vậy: đành chấp nhận hoặc cứ làm.",
  ex:[["{1|早是它}，{2|晚也是它}，{3|现在就做吧}。","Zǎo shì tā, wǎn yě shì tā, xiànzài jiù zuò ba.","Sớm muộn gì cũng thế, làm luôn đi."],
      ["{1|贵是它}，{2|便宜也是它}，{3|就买这个吧}。","Guì shì tā, piányi yě shì tā, jiù mǎi zhège ba.","Đắt rẻ gì thì cũng chỉ có cái này, mua luôn đi."]]},
 {t:"X着也是X着，不如 …", sub:"（3）để không cũng phí", fx:[["X着也是X着",""],["，",""],["不如…",""]], mean:"Đằng nào cũng đang … , thà …",
  ex:[["{1|闲着也是闲着}，{2|不如出去走走}。","Xiánzhe yě shì xiánzhe, bùrú chūqu zǒuzou.","Ngồi không cũng vậy, chi bằng ra ngoài đi dạo."]]},
 {t:"不管怎样说 / 真有你的", sub:"（4）câu cố định", fx:[["不管怎样说 / 真有你的",null],["，",""],["ý tiếp theo",""]], mean:"Dù sao đi nữa · Giỏi thật đấy (khen hoặc trách).",
  ex:[["{1|不管怎样说}，{2|他是为你好}。","Bùguǎn zěnyàng shuō, tā shì wèi nǐ hǎo.","Dù sao đi nữa, anh ấy cũng vì muốn tốt cho bạn."],
      ["{1|真有你的}，{2|这么难的题都做出来了}！","Zhēn yǒu nǐ de, zhème nán de tí dōu zuò chulai le!","Bạn giỏi thật, bài khó thế cũng làm ra!"]]}],
cmp:[
 {vn:"Dở khóc dở cười", zh:"[哭也不是，笑也不是]", py:"kū yě búshì, xiào yě búshì", ok:true, why:"Hai động từ trái nhau đặt vào X, Y."}],
ex:[
 ["我[答应也不是，不答应也不是]。","Wǒ dāying yě búshì, bù dāying yě búshì.","Tôi nhận lời cũng dở, không nhận cũng dở."],
 ["票[放着也是放着]，你拿去用吧。","Piào fàngzhe yě shì fàngzhe, nǐ náqu yòng ba.","Vé để đó cũng phí, bạn lấy mà dùng."],
 ["[真有他的]，一个人就把事情办好了。","Zhēn yǒu tā de, yí gè rén jiù bǎ shìqing bànhǎo le.","Anh ta cừ thật, một mình lo xong việc."]],
errs:[
 {bad:"走不是也，留不是也。", good:"走也不是，留也不是。", why:"Thứ tự: X + 也不是."},
 {bad:"闲也是闲着。", good:"闲着也是闲着。", why:"Cả hai chỗ đều có 着."},
 {bad:"真有你。", good:"真有你的。", why:"Cụm cố định phải có 的."}],
practice:[
 {t:"A. Chọn đáp án", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我站在那儿，走也不是，留也＿。", vi:"Tôi đứng đó, đi cũng dở ở cũng không xong.", o:["不是","不得了","不着"], a:0, why:"X也不是，Y也不是."},
  {q:"闲着也是闲＿，帮我个忙吧。", vi:"Ngồi không cũng vậy, giúp tôi một tay đi.", o:["着","了","过"], a:0, why:"X着也是X着."},
  {q:"“真有你的” thường dùng để:", vi:"Chọn công dụng của câu.", o:["khen hoặc trách người nghe","hỏi đồ vật của ai"], a:0, why:"Câu cảm thán khẩu ngữ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["不管","怎样说，","他","是","为你好"], a:"不管怎样说，他是为你好。", vi:"Dù sao đi nữa, anh ấy cũng vì muốn tốt cho bạn."},
  {w:["闲着","也是闲着，","不如","出去","走走"], a:"闲着也是闲着，不如出去走走。", vi:"Ngồi không cũng vậy, chi bằng ra ngoài đi dạo."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi nhận lời cũng dở, không nhận cũng dở.", a:"我答应也不是，不答应也不是。"}]}],
rel:["新4.38","新4.61","新4.31"]
};
