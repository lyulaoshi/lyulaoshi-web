// Bài ngữ pháp 【新5.38】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.38", title:"让步复句：哪怕……，也……", vi:"哪怕…也… — dù cho … cũng …", tag:"句子的类型 · 复句",
goals:[
 "Nêu giả định <b>cực đoan</b> rồi khẳng định kết quả không đổi.",
 "Dùng <b>哪怕……也 / 都……</b> trong khẩu ngữ.",
 "So với 即使."],
intro:"<b>哪怕</b> = 即使 nhưng <b>khẩu ngữ và mạnh hơn</b>: “dù có … đi nữa”.",
rules:[
 {t:"哪怕 + giả định，(S) 也 / 都 + V", sub:"让步", fx:[["哪怕",null],["giả định",""],["，",""],["S",""],["也 / 都",null],["V",""]], mean:"Dù cho …",
  ex:[["{1|哪怕}{2|只有一点儿希望}，{3|我们}{4|也}{5|要试试}。","Nǎpà zhǐ yǒu yìdiǎnr xīwàng, wǒmen yě yào shìshi.","Dù chỉ có chút hy vọng, chúng ta cũng phải thử."],
      ["{1|哪怕}{2|工作到半夜}，{3|他}{4|也}{5|要做完}。","Nǎpà gōngzuò dào bànyè, tā yě yào zuòwán.","Dù làm đến nửa đêm anh ấy cũng phải xong."]]}],
notes:[{t:"Đặt vế sau", html:"<span class='zh'>我一定要去，哪怕下大雨。</span> 哪怕 có thể đứng ở vế sau để bổ sung."}],
cmp:[
 {vn:"Dù bận đến mấy cũng phải ăn sáng.", zh:"[哪怕]再忙，[也]要吃早饭。", py:"Nǎpà zài máng, yě yào chī zǎofàn.", ok:true, why:"再 + Adj = đến mấy."}],
ex:[
 ["[哪怕]别人都反对，我[也]支持你。","Nǎpà biérén dōu fǎnduì, wǒ yě zhīchí nǐ.","Dù mọi người phản đối, tôi vẫn ủng hộ bạn."],
 ["[哪怕]走路去，我[也]不坐他的车。","Nǎpà zǒulù qù, wǒ yě bú zuò tā de chē.","Thà đi bộ tôi cũng không ngồi xe anh ta."],
 ["[哪怕]只见过一面，他[都]记得。","Nǎpà zhǐ jiànguo yí miàn, tā dōu jìde.","Dù chỉ gặp một lần, anh ấy cũng nhớ."]],
errs:[
 {bad:"哪怕下雨，但是我也去。", good:"哪怕下雨，我也去。", why:"Không thêm 但是."},
 {bad:"哪怕再忙，也我要吃早饭。", good:"哪怕再忙，我也要吃早饭。", why:"也 sau chủ ngữ."},
 {bad:"哪怕他昨天病了，也来了。", good:"虽然他昨天病了，可是还是来了。", why:"哪怕 cho giả định, không cho việc đã có thật."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Dù mọi người phản đối, tôi vẫn ủng hộ bạn.", o:["哪怕别人都反对，我也支持你。","虽然别人反对，我就支持你吗。"], a:0, why:"哪怕……也……."},
  {q:"哪怕再难，我们＿要坚持。", vi:"Dù khó đến mấy cũng phải kiên trì.", o:["也","才","却不"], a:0, why:"Cặp 哪怕……也."},
  {q:"“哪怕” gần nghĩa nhất với:", vi:"Chọn từ gần nghĩa.", o:["即使","因为","不然"], a:0, why:"Đều là “cho dù”."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["哪怕","工作到半夜，","他","也","要","做完"], a:"哪怕工作到半夜，他也要做完。", vi:"Dù làm đến nửa đêm anh ấy cũng phải xong."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 哪怕)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Dù bận đến mấy cũng phải ăn sáng.", a:"哪怕再忙，也要吃早饭。/ 哪怕再忙也要吃早饭。"},
  {q:"Dù chỉ có chút hy vọng, chúng ta cũng phải thử.", a:"哪怕只有一点儿希望，我们也要试试。/ 哪怕只有一点希望，我们也要试一试。"}]}],
rel:["新4.64","新4.61","二65"]
};
