// Bài ngữ pháp 【新4.10】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.10", title:"关联副词：却", vi:"却 — thế mà, lại (trái với điều nghĩ)", tag:"词类 · 副词",
goals:[
 "Dùng <b>却</b> để nói kết quả <b>trái với dự đoán</b> hoặc đối lập với vế trước.",
 "Đặt 却 <b>sau chủ ngữ</b>, trước động từ / tính từ.",
 "Kết hợp 虽然……，……却…… và phân biệt với 但是."],
intro:"却 gần với “<b>thế mà, vậy mà, lại</b>”. Khác 但是 (liên từ, đứng đầu vế), 却 là <b>phó từ</b> nên phải đứng <b>sau chủ ngữ</b>: 他<b>却</b>没来.",
rules:[
 {t:"Vế 1，S + 却 + V / Adj", sub:"转折", fx:[["Vế 1",""],["·",""],["S",""],["却",null],["V / Adj",""]], mean:"Trái ý, ngoài dự đoán.",
  ex:[["{1|我等了他很久}，{2|他}{3|却}{4|没来}。","Wǒ děngle tā hěn jiǔ, tā què méi lái.","Tôi đợi anh ấy rất lâu, thế mà anh ấy lại không đến."],
      ["{1|房间很小}，{2|房租}{3|却}{4|很贵}。","Fángjiān hěn xiǎo, fángzū què hěn guì.","Phòng thì nhỏ mà tiền thuê lại đắt."]]},
 {t:"虽然 / 尽管 …，S + 却 …", sub:"呼应", fx:[["虽然 + vế 1",""],["·",""],["S",""],["却",null],["V / Adj",""]], mean:"Tuy … nhưng (lại) …",
  ex:[["{1|虽然天气不好}，{2|大家}{3|却}{4|玩儿得很开心}。","Suīrán tiānqì bù hǎo, dàjiā què wánr de hěn kāixīn.","Tuy thời tiết không đẹp, mọi người vẫn chơi rất vui."]]}],
notes:[{t:"Dùng kèm 但是", html:"Có thể nói <span class='zh'>但是他却没来</span> để nhấn mạnh; khi đó 却 vẫn đứng sau chủ ngữ."}],
cmp:[
 {vn:"Ai cũng biết, thế mà anh ấy lại không biết.", zh:"大家都知道，他[却]不知道。", py:"Dàjiā dōu zhīdào, tā què bù zhīdào.", ok:true, why:"却 đứng sau chủ ngữ 他, không đứng đầu vế."}],
ex:[
 ["说起来容易，做起来[却]很难。","Shuō qilai róngyì, zuò qilai què hěn nán.","Nói thì dễ, làm lại rất khó."],
 ["他嘴上说没事，心里[却]很着急。","Tā zuǐshang shuō méi shì, xīnli què hěn zháojí.","Miệng anh ấy nói không sao, trong lòng lại rất sốt ruột."],
 ["十年过去了，这里[却]没什么变化。","Shí nián guòqu le, zhèlǐ què méi shénme biànhuà.","Mười năm trôi qua, nơi này lại chẳng thay đổi mấy."]],
errs:[
 {bad:"我叫他，却他没回答。", good:"我叫他，他却没回答。", why:"却 là phó từ, đứng sau chủ ngữ."},
 {bad:"房间很小，却房租很贵。", good:"房间很小，房租却很贵。", why:"Chủ ngữ 房租 phải đứng trước 却."},
 {bad:"他虽然很忙，却他每天锻炼。", good:"他虽然很忙，却每天锻炼。", why:"Hai vế cùng chủ ngữ thì vế sau bỏ 他, 却 đứng ngay trước cụm động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đợi mãi, thế mà anh ấy không đến.", o:["我等了很久，却他没来。","我等了很久，他却没来。"], a:1, why:"S + 却 + V."},
  {q:"Phòng nhỏ mà tiền thuê lại đắt.", o:["房间很小，房租却很贵。","房间很小，房租很却贵。","房间很小，却房租很贵。"], a:0, why:"却 đứng trước 很贵."},
  {q:"Nói thì dễ, làm lại khó.", o:["说起来容易，做起来却很难。","说起来容易，却做起来很难吗。"], a:0, why:"却 đứng sau phần chủ đề 做起来."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["大家","都","知道，","他","却","不知道"], a:"大家都知道，他却不知道。", vi:"Mọi người đều biết, thế mà anh ấy lại không biết."},
  {w:["天气","很冷，","他","却","穿得很少"], a:"天气很冷，他却穿得很少。", vi:"Trời rất lạnh, anh ấy lại mặc rất ít."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 却)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Nói thì dễ, làm lại rất khó.", a:"说起来容易，做起来却很难。/ 说起来很容易，做起来却很难。"},
  {q:"Tôi gọi anh ấy, anh ấy lại không trả lời.", a:"我叫他，他却没回答。"}]}],
rel:["二30","二65","三68"]
};
