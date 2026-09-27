// Bài ngữ pháp 【二38】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二38", title:"其他结构类型1：“的”字短语、连谓短语", vi:"Cụm chữ 的 (… của / … cái) và cụm liên động", tag:"短语 · 结构类型",
goals:[
 "Dùng <b>cụm chữ 的</b> thay cho danh từ đã biết: 我的、红的、他买的.",
 "Dùng <b>cụm liên động</b>: hai động từ nối tiếp nhau cùng một chủ ngữ (去买东西).",
 "Nhớ thứ tự trong cụm liên động: <b>đi đâu / bằng gì trước, làm gì sau</b>."],
intro:"Cụm chữ 的 giúp <b>khỏi lặp danh từ</b>. Cụm liên động nối <b>nhiều động từ</b> theo đúng trình tự sự việc.",
rules:[
 {t:"Cụm chữ 的: … + 的 (= cái …)", sub:"“的”字短语", fx:[["Đại từ / tính từ / động từ",""],["的",null]], mean:"Thay cho danh từ đã rõ: 我的 (của tôi), 黑色的 (cái màu đen), 吃的 (đồ ăn), 他买的 (cái anh ấy mua).",
  ex:[["我的　黑色的　新的　吃的　他买的","wǒ de　hēisè de　xīn de　chī de　tā mǎi de","của tôi　cái màu đen　cái mới　đồ ăn　cái anh ấy mua","等级标准"],
      ["这本书是[我的]。","Zhè běn shū shì wǒ de.","Quyển sách này là của tôi."]]},
 {t:"Cụm liên động: V1 + V2", sub:"连谓短语", fx:[["V1 (+ O1)","đi đâu / bằng gì / thế nào"],["V2 (+ O2)",null]], mean:"Hai động từ cùng một chủ ngữ, theo trình tự; V1 thường là cách thức hoặc hướng đi, V2 là mục đích 【二57】【三56】.",
  ex:[["去买东西　哭着说　坐飞机去北京　去图书馆借书","qù mǎi dōngxi　kū zhe shuō　zuò fēijī qù Běijīng　qù túshūguǎn jiè shū","đi mua đồ　vừa khóc vừa nói　đi máy bay đến Bắc Kinh　đến thư viện mượn sách","等级标准"]]}],
cmp:[
 {vn:"Tôi thích cái màu đỏ.", zh:"我喜欢[红色的]。", py:"Wǒ xǐhuan hóngsè de.", ok:true, why:"“cái màu đỏ” = 红色的."},
 {vn:"Tôi đi Bắc Kinh bằng máy bay.", zh:"我[坐飞机去]北京。", py:"Wǒ zuò fēijī qù Běijīng.", ok:true, why:"“bằng máy bay” lên trước 去."}],
ex:[
 ["这个手机是[新的]。","Zhège shǒujī shì xīn de.","Cái điện thoại này là đồ mới."],
 ["[他买的]很好吃。","Tā mǎi de hěn hǎochī.","Đồ anh ấy mua rất ngon."],
 ["我[去图书馆借书]。","Wǒ qù túshūguǎn jiè shū.","Tôi đến thư viện mượn sách."],
 ["我们[坐地铁去]吧。","Wǒmen zuò dìtiě qù ba.","Chúng mình đi tàu điện ngầm nhé."]],
errs:[
 {bad:"我去北京坐飞机。（ý: đi bằng máy bay）", good:"我坐飞机去北京。", why:"Cách thức (坐飞机) đứng trước."},
 {bad:"我借书去图书馆。", good:"我去图书馆借书。", why:"Đi đâu trước, làm gì sau."},
 {bad:"这本书是我。", good:"这本书是我的。", why:"Sở hữu cần 的."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đến thư viện mượn sách.", o:["我借书去图书馆。","我去图书馆借书。","我图书馆去借书。"], a:1, why:"V1 đi đâu + V2 làm gì."},
  {q:"Tôi đi Bắc Kinh bằng máy bay.", o:["我去北京坐飞机。","我坐飞机去北京。","坐飞机我北京去。"], a:1, why:"Cách thức trước."},
  {q:"Quyển này là của tôi.", o:["这本是我。","这本是我的。","这本的是我。"], a:1, why:"我的."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","去","超市","买","东西"], a:"我去超市买东西。", vi:"Tôi đi siêu thị mua đồ."},
  {w:["这个","手机","是","新的"], a:"这个手机是新的。", vi:"Cái điện thoại này là đồ mới."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi thích cái màu đen.", a:"我喜欢黑色的。"},
  {q:"Chúng tôi đi tàu điện ngầm đến trường.", a:"我们坐地铁去学校。"}]}],
rel:["二37","二57","三56","一20"]
};
