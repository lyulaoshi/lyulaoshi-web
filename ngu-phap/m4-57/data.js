// Bài ngữ pháp 【新4.57】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.57", title:"递进复句：甚至；不仅／不光……，还／而且……；连……也／都……", vi:"Thậm chí; không chỉ … mà còn; ngay cả … cũng", tag:"句子的类型 · 复句",
goals:[
 "Đẩy ý lên cao bằng <b>甚至</b>.",
 "Dùng <b>连……也 / 都……</b>: ngay cả … cũng.",
 "Ôn <b>不仅 / 不光……还 / 而且</b>, <b>并且</b>."],
intro:"连……都…… nêu <b>trường hợp khó tin nhất</b> để nhấn mạnh.",
rules:[
 {t:"…，甚至 + mức cao hơn", sub:"（1）甚至", fx:[["sự việc",""],["，",""],["甚至",null],["mức cao hơn",""]], mean:"Thậm chí.",
  ex:[["{1|他病得很重}，{2|甚至}{3|不能起床}。","Tā bìng de hěn zhòng, shènzhì bù néng qǐchuáng.","Anh ấy ốm nặng, thậm chí không dậy nổi."]]},
 {t:"(S) 连 + X + 也 / 都 + V", sub:"（2）连……都", fx:[["S",""],["连",null],["X",""],["也 / 都",null],["V",""]], mean:"Ngay cả X cũng …",
  ex:[["{1|他}{2|连}{3|早饭}{4|都}{5|没吃}。","Tā lián zǎofàn dōu méi chī.","Anh ấy đến bữa sáng cũng chưa ăn."],
      ["{2|连}{3|小孩子}{4|也}{5|知道这件事}。","Lián xiǎoháizi yě zhīdào zhè jiàn shì.","Ngay cả trẻ con cũng biết việc này."]]},
 {t:"不仅 / 不光 + A，还 / 而且 + B", sub:"（3）", fx:[["不仅 / 不光",null],["A",""],["，",""],["还 / 而且",null],["B",""]], mean:"Không chỉ A mà còn B.",
  ex:[["他{1|不仅}{2|会开车}，{3|还}{4|会修车}。","Tā bùjǐn huì kāi chē, hái huì xiū chē.","Anh ấy không chỉ biết lái xe mà còn biết sửa xe."]]}],
notes:[{t:"并且", html:"<span class='zh'>大家讨论并且通过了计划。</span> xem 【三65】."}],
cmp:[
 {vn:"Chữ này đến thầy cũng không biết.", zh:"这个字[连]老师[也]不认识。", py:"Zhège zì lián lǎoshī yě bú rènshi.", ok:true, why:"连 đặt trước phần được nhấn."}],
ex:[
 ["我忙得[连]喝水的时间[都]没有。","Wǒ máng de lián hē shuǐ de shíjiān dōu méiyǒu.","Tôi bận đến mức không có cả thời gian uống nước."],
 ["他很喜欢中国，[甚至]想在那儿生活。","Tā hěn xǐhuan Zhōngguó, shènzhì xiǎng zài nàr shēnghuó.","Anh ấy rất thích Trung Quốc, thậm chí muốn sống ở đó."],
 ["[不光]学生喜欢他，[而且]家长也很满意。","Bùguāng xuésheng xǐhuan tā, érqiě jiāzhǎng yě hěn mǎnyì.","Không chỉ học sinh quý thầy ấy mà phụ huynh cũng hài lòng."]],
errs:[
 {bad:"他连早饭没吃。", good:"他连早饭都没吃。", why:"连 phải đi với 都 / 也."},
 {bad:"连他早饭都吃没。", good:"他连早饭都没吃。", why:"连 đứng trước phần nhấn mạnh."},
 {bad:"他不仅会开车，反而会修车。", good:"他不仅会开车，还会修车。", why:"Tăng tiến thuận dùng 还 / 而且."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他＿自己的名字都忘了。", vi:"Anh ấy đến tên mình cũng quên.", o:["连","把的","被"], a:0, why:"连……都."},
  {q:"这么简单的问题，连孩子＿会。", vi:"Bài dễ thế, đến trẻ con cũng làm được.", o:["都","就","才"], a:0, why:"连……都."},
  {q:"他太累了，＿站着就睡着了。", vi:"Mệt quá, thậm chí đứng cũng ngủ.", o:["甚至","然而","否则"], a:0, why:"Thậm chí."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","连","早饭","都","没吃"], a:"他连早饭都没吃。", vi:"Anh ấy đến bữa sáng cũng chưa ăn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Ngay cả trẻ con cũng biết việc này.", a:"连小孩子也知道这件事。/ 连小孩子都知道这件事。/ 连孩子都知道这件事。/ 连孩子也知道这件事。"}]}],
rel:["三66","三65","二63"]
};
