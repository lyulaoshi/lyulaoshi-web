// Bài ngữ pháp 【新4.35】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.35", title:"为了……而……", vi:"为了……而…… — vì … mà …", tag:"短语 · 固定格式",
goals:[
 "Nêu mục đích rồi hành động bằng <b>为了 A 而 B</b>: vì A mà B.",
 "Dùng nhiều trong văn viết, phát biểu.",
 "Không bỏ 而 khi hai phần dùng chung một chủ ngữ trong khung này."],
intro:"Giống “<b>vì … mà …</b>” của tiếng Việt. 而 nối mục đích với hành động.",
rules:[
 {t:"S + 为了 + mục đích + 而 + V", sub:"目的", fx:[["S",""],["为了",null],["mục đích",""],["而",null],["V",""]], mean:"Vì A mà B.",
  ex:[["{1|他}{2|为了}{3|理想}{4|而}{5|努力}。","Tā wèile lǐxiǎng ér nǔlì.","Anh ấy vì lý tưởng mà nỗ lực."],
      ["{1|大家}{2|为了}{3|同一个目标}{4|而}{5|工作}。","Dàjiā wèile tóng yí gè mùbiāo ér gōngzuò.","Mọi người làm việc vì cùng một mục tiêu."]]}],
notes:[{t:"Phủ định", html:"<span class='zh'>不要为了小事而生气。</span> 不要 đặt trước 为了."}],
cmp:[
 {vn:"Đừng vì chuyện nhỏ mà tức giận.", zh:"别[为了]小事[而]生气。", py:"Bié wèile xiǎoshì ér shēngqì.", ok:true, why:"Cấu trúc giống tiếng Việt."}],
ex:[
 ["我们都在[为了]更好的生活[而]奋斗。","Wǒmen dōu zài wèile gèng hǎo de shēnghuó ér fèndòu.","Chúng ta đều đang phấn đấu vì cuộc sống tốt đẹp hơn."],
 ["他[为了]赚钱[而]放弃了休息时间。","Tā wèile zhuànqián ér fàngqìle xiūxi shíjiān.","Anh ấy vì kiếm tiền mà bỏ cả giờ nghỉ."],
 ["父母[为了]孩子[而]辛苦工作。","Fùmǔ wèile háizi ér xīnkǔ gōngzuò.","Bố mẹ vất vả làm việc vì con."]],
errs:[
 {bad:"别为了小事就而生气。", good:"别为了小事而生气。", why:"Chỉ dùng 而, không chồng 就."},
 {bad:"他而理想为了努力。", good:"他为了理想而努力。", why:"为了 đi trước mục đích, 而 đi trước hành động."},
 {bad:"为了小事别而生气。", good:"别为了小事而生气。", why:"别 đặt trước cả khung."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Đừng vì chuyện nhỏ mà giận.", o:["别为了小事而生气。","别而小事为了生气。"], a:0, why:"为了 + A + 而 + B."},
  {q:"父母为了孩子＿辛苦工作。", vi:"Bố mẹ vất vả làm việc vì con.", o:["而","但","却"], a:0, why:"为了……而……."},
  {q:"＿更好的生活而努力。", vi:"Nỗ lực vì cuộc sống tốt đẹp hơn.", o:["为了","因此","对于"], a:0, why:"Mục đích → 为了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","为了","理想","而","努力"], a:"他为了理想而努力。", vi:"Anh ấy vì lý tưởng mà nỗ lực."},
  {w:["大家","为了","同一个目标","而","工作"], a:"大家为了同一个目标而工作。", vi:"Mọi người làm việc vì cùng một mục tiêu."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 为了……而……)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Đừng vì chuyện nhỏ mà tức giận.", a:"别为了小事而生气。/ 不要为了小事而生气。"},
  {q:"Bố mẹ vất vả làm việc vì con.", a:"父母为了孩子而辛苦工作。/ 爸爸妈妈为了孩子而辛苦工作。"}]}],
rel:["三26","三72","新4.63"]
};
