// Bài ngữ pháp 【新5.23】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.23", title:"固定格式：X什么X、不X白不X…", vi:"Khẩu ngữ: X cái gì mà X, không … thì phí, nói sao thì vậy…", tag:"短语 · 固定格式",
goals:[
 "Gạt đi / ngăn cản bằng <b>X什么X</b>, <b>什么X不X的</b>.",
 "Dùng <b>不X白不X</b>: không làm thì phí.",
 "Dùng <b>X来X去…</b> và <b>V什么就是什么</b>."],
intro:"Các khuôn khẩu ngữ giọng <b>mạnh, thân mật</b>. Tránh dùng với người trên.",
rules:[
 {t:"V / Adj + 什么 + V / Adj", sub:"（1）gạt đi", fx:[["X",""],["什么",null],["X",""]], mean:"X cái gì mà X.",
  ex:[["{1|笑}{2|什么}{3|笑}，快干活儿！","Xiào shénme xiào, kuài gànhuór!","Cười cái gì mà cười, làm việc mau!"]]},
 {t:"什么 + X + 不 + X + 的", sub:"（2）không câu nệ", fx:[["什么",null],["X",""],["不",null],["X",""],["的",null]], mean:"X với chả không.",
  ex:[["咱们是朋友，{1|什么}{2|谢}{3|不}{4|谢}{5|的}。","Zánmen shì péngyou, shénme xiè bú xiè de.","Bạn bè cả, ơn với huệ gì."]]},
 {t:"不 + X + 白 + 不 + X", sub:"（3）không làm thì phí", fx:[["不",null],["X",""],["白不",null],["X",""]], mean:"Không … thì uổng.",
  ex:[["今天经理请客，{1|不}{2|吃}{3|白不}{4|吃}。","Jīntiān jīnglǐ qǐngkè, bù chī bái bù chī.","Hôm nay giám đốc đãi, không ăn thì phí."]]},
 {t:"X来X去，都是 / 就是 …", sub:"（4）rốt cuộc vẫn", fx:[["X来X去",""],["，",""],["都是 / 就是",null],["điều chính",""]], mean:"… đi … lại thì vẫn là.",
  ex:[["他{1|说来说去}，{2|就是}{3|不想去}。","Tā shuō lái shuō qù, jiùshì bù xiǎng qù.","Anh ta nói đi nói lại, tóm lại là không muốn đi."]]},
 {t:"V + 什么 + (就) 是 + 什么", sub:"（5）tùy theo", fx:[["V什么",""],["就是",null],["什么",null]], mean:"… sao thì là vậy.",
  ex:[["在家里，{1|妈妈说什么}{2|就是}{3|什么}。","Zài jiāli, māma shuō shénme jiùshì shénme.","Ở nhà, mẹ nói sao thì là vậy."]]}],
cmp:[
 {vn:"Khóc cái gì mà khóc!", zh:"[哭什么哭]！", py:"Kū shénme kū!", ok:true, why:"Cùng một động từ ở hai bên 什么."}],
ex:[
 ["[怕什么怕]，有我呢。","Pà shénme pà, yǒu wǒ ne.","Sợ gì mà sợ, có tôi đây."],
 ["免费的票，[不看白不看]。","Miǎnfèi de piào, bú kàn bái bú kàn.","Vé miễn phí, không xem thì phí."],
 ["[想来想去]，[还是]你的办法好。","Xiǎng lái xiǎng qù, háishi nǐ de bànfǎ hǎo.","Nghĩ tới nghĩ lui vẫn là cách của bạn hay."]],
errs:[
 {bad:"笑什么哭！", good:"笑什么笑！", why:"Hai chữ X phải giống nhau."},
 {bad:"不吃不白吃。", good:"不吃白不吃。", why:"Thứ tự cố định: 不X白不X."},
 {bad:"你说什么就是怎么。", good:"你说什么就是什么。", why:"Hai chỗ đều dùng 什么."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Vé miễn phí, không xem thì phí.", o:["免费的票，不看白不看。","免费的票，白看不看。"], a:0, why:"不X白不X."},
  {q:"急什么＿，时间还早呢。", vi:"Vội gì mà vội, còn sớm mà.", o:["急","快","忙吗"], a:0, why:"X什么X."},
  {q:"他说来说去，＿不想去。", vi:"Anh ta nói đi nói lại, tóm lại là không muốn đi.", o:["就是","什么","白"], a:0, why:"X来X去，就是……."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["妈妈","说","什么","就是","什么"], a:"妈妈说什么就是什么。", vi:"Mẹ nói sao thì là vậy."},
  {w:["咱们是朋友，","什么","谢","不谢","的"], a:"咱们是朋友，什么谢不谢的。", vi:"Bạn bè cả, ơn huệ gì."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Sợ gì mà sợ, có tôi đây.", a:"怕什么怕，有我呢。/ 怕什么怕，有我在呢。"},
  {q:"Hôm nay giám đốc đãi, không ăn thì phí.", a:"今天经理请客，不吃白不吃。"}]}],
rel:["新4.37","新5.19","三07"]
};
