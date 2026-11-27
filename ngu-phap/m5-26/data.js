// Bài ngữ pháp 【新5.26】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.26", title:"程度补语2：形容词／心理动词＋得＋不得了", vi:"… 得不得了 — … hết sức", tag:"句子成分 · 补语",
goals:[
 "Nói mức độ rất cao bằng <b>Adj + 得 + 不得了</b>.",
 "Dùng với tính từ và <b>động từ tâm lý</b> (喜欢, 想, 担心).",
 "Không thêm 很, 非常 phía trước."],
intro:"<b>高兴得不得了</b> = vui hết chỗ nói. Cùng nhóm với 得很, 极了, 死了 nhưng nhấn mạnh hơn, khẩu ngữ.",
rules:[
 {t:"S + Adj + 得 + 不得了", sub:"（1）形容词", fx:[["S",""],["Adj",""],["得",null],["不得了",null]], mean:"… hết sức.",
  ex:[["{1|今天}{2|热}{3|得}{4|不得了}。","Jīntiān rè de bùdéliǎo.","Hôm nay nóng kinh khủng."],
      ["{1|他们}{2|高兴}{3|得}{4|不得了}。","Tāmen gāoxìng de bùdéliǎo.","Họ mừng hết sức."]]},
 {t:"S + V tâm lý + 得 + 不得了 / V + O 的话", sub:"（2）心理动词", fx:[["S",""],["V tâm lý",""],["得",null],["不得了",null]], mean:"Thích, nhớ, lo … vô cùng.",
  ex:[["{1|妈妈}{2|担心}{3|得}{4|不得了}。","Māma dānxīn de bùdéliǎo.","Mẹ lo vô cùng."]]}],
notes:[{t:"Có tân ngữ", html:"Đưa tân ngữ lên trước: <span class='zh'>这个玩具孩子喜欢得不得了。</span>"}],
cmp:[
 {vn:"Con bé thích con mèo này lắm lắm.", zh:"这只猫她喜欢[得不得了]。", py:"Zhè zhī māo tā xǐhuan de bùdéliǎo.", ok:true, why:"Tân ngữ lên đầu câu."}],
ex:[
 ["听到这个消息，他激动[得不得了]。","Tīngdào zhège xiāoxi, tā jīdòng de bùdéliǎo.","Nghe tin, anh ấy xúc động vô cùng."],
 ["我现在饿[得不得了]。","Wǒ xiànzài è de bùdéliǎo.","Bây giờ tôi đói quá chừng."],
 ["周末商场里人多[得不得了]。","Zhōumò shāngchǎng li rén duō de bùdéliǎo.","Cuối tuần trung tâm thương mại đông khủng khiếp."]],
errs:[
 {bad:"今天很热得不得了。", good:"今天热得不得了。", why:"Đã có bổ ngữ mức độ, không thêm 很."},
 {bad:"她喜欢得不得了这只猫。", good:"这只猫她喜欢得不得了。", why:"Sau bổ ngữ không mang tân ngữ."},
 {bad:"他高兴不得了得。", good:"他高兴得不得了。", why:"Thứ tự: Adj + 得 + 不得了."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay nóng kinh khủng.", o:["今天热得不得了。","今天很热得不得了。","今天热不得了得。"], a:0, why:"Adj + 得不得了."},
  {q:"我现在饿＿不得了。", vi:"Bây giờ tôi đói quá chừng.", o:["得","地","的"], a:0, why:"Bổ ngữ dùng 得."},
  {q:"Con bé thích con mèo này vô cùng.", o:["这只猫她喜欢得不得了。","她喜欢得不得了这只猫。"], a:0, why:"Tân ngữ đưa lên trước."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["听到这个消息，","他","激动","得","不得了"], a:"听到这个消息，他激动得不得了。", vi:"Nghe tin, anh ấy xúc động vô cùng."},
  {w:["妈妈","担心","得","不得了"], a:"妈妈担心得不得了。", vi:"Mẹ lo vô cùng."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 得不得了)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Họ mừng hết sức.", a:"他们高兴得不得了。"},
  {q:"Cuối tuần trung tâm thương mại đông khủng khiếp.", a:"周末商场里人多得不得了。/ 周末商场人多得不得了。"}]}],
rel:["三49","新4.47","新5.20"]
};
