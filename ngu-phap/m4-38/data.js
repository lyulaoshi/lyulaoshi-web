// Bài ngữ pháp 【新4.38】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.38", title:"X是X，Y是Y", vi:"X是X，Y是Y — cái nào ra cái nấy", tag:"短语 · 固定格式",
goals:[
 "Nói hai thứ phải <b>tách bạch</b>, không lẫn lộn: 朋友是朋友，生意是生意.",
 "Hiểu giọng điệu dứt khoát.",
 "Phân biệt với X是X，就是…… (thừa nhận rồi chuyển ý)."],
intro:"Tiếng Việt: “<b>Bạn ra bạn, làm ăn ra làm ăn</b>.” → 朋友是朋友，生意是生意.",
rules:[
 {t:"X + 是 + X，Y + 是 + Y", sub:"区分", fx:[["X",""],["是",null],["X",""],["·",""],["Y",""],["是",null],["Y",""]], mean:"X ra X, Y ra Y.",
  ex:[["{1|朋友}{2|是}{3|朋友}，{4|生意}{5|是}{6|生意}。","Péngyou shì péngyou, shēngyi shì shēngyi.","Bạn bè ra bạn bè, làm ăn ra làm ăn."]]}],
notes:[{t:"X, Y là gì", html:"Có thể là danh từ hoặc động từ: <span class='zh'>玩儿是玩儿，学习是学习。</span>"}],
cmp:[
 {vn:"Anh là anh, tôi là tôi.", zh:"[你是你]，[我是我]。", py:"Nǐ shì nǐ, wǒ shì wǒ.", ok:true, why:"Cấu trúc trùng tiếng Việt."}],
ex:[
 ["[工作是工作]，[生活是生活]，别总想着加班。","Gōngzuò shì gōngzuò, shēnghuó shì shēnghuó, bié zǒng xiǎngzhe jiābān.","Việc ra việc, sống ra sống, đừng lúc nào cũng nghĩ tăng ca."],
 ["[学习是学习]，[玩儿是玩儿]，要分清楚。","Xuéxí shì xuéxí, wánr shì wánr, yào fēn qīngchu.","Học ra học, chơi ra chơi, phải phân rõ."],
 ["[现在是现在]，[过去是过去]。","Xiànzài shì xiànzài, guòqù shì guòqù.","Bây giờ là bây giờ, quá khứ là quá khứ."]],
errs:[
 {bad:"朋友是朋友，生意生意。", good:"朋友是朋友，生意是生意。", why:"Mỗi vế đều cần 是."},
 {bad:"朋友是生意，生意是朋友。（muốn nói tách bạch）", good:"朋友是朋友，生意是生意。", why:"Mỗi vế lặp lại chính từ đó."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Học ra học, chơi ra chơi.", o:["学习是学习，玩儿是玩儿。","学习是玩儿，玩儿是学习。"], a:0, why:"X是X，Y是Y."},
  {q:"工作是工作，生活是＿。", vi:"Việc ra việc, sống ra sống.", o:["生活","工作","时间"], a:0, why:"Lặp lại 生活."},
  {q:"“你是你，我是我” muốn nói:", o:["Hai người khác nhau, không lẫn lộn","Hai người giống hệt nhau"], a:0, why:"Phân biệt rạch ròi."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["朋友","是","朋友，","生意","是","生意"], a:"朋友是朋友，生意是生意。", alt:["生意是生意，朋友是朋友。"], vi:"Bạn bè ra bạn bè, làm ăn ra làm ăn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bây giờ là bây giờ, quá khứ là quá khứ.", a:"现在是现在，过去是过去。"},
  {q:"Việc ra việc, sống ra sống.", a:"工作是工作，生活是生活。"}]}],
rel:["三68","新4.46","一36"]
};
