// Bài ngữ pháp 【三68】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三68", title:"转折复句：……X是X，就是/不过……", vi:"X是X，就是 / 不过… — … thì … thật, nhưng …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>X是X</b> để <b>công nhận</b> một mặt, rồi <b>就是 / 不过</b> nêu mặt chưa tốt.",
 "Lặp đúng từ: 好看是好看, 方便是方便."],
intro:"Giống “đẹp thì đẹp thật, nhưng …” trong tiếng Việt — người nói thừa nhận một ưu điểm rồi chuyển ý.",
rules:[
 {t:"X + 是 + X，就是 / 不过 + ý trái", sub:"转折", fx:[["X 是 X",null],["·",""],["就是 / 不过",null],["điểm chưa tốt",""]], mean:"X là tính từ / động từ, lặp lại y nguyên.",
  ex:[["这件衣服[好看是好看]，[就是]有点儿贵。","Zhè jiàn yīfu hǎokàn shì hǎokàn, jiù shì yǒudiǎnr guì.","Chiếc áo này đẹp thì đẹp thật, chỉ là hơi đắt.","等级标准"],
      ["坐公交车[方便是方便]，[不过]人太多了。","Zuò gōngjiāochē fāngbiàn shì fāngbiàn, búguò rén tài duō le.","Đi xe buýt tiện thì tiện thật, nhưng đông người quá.","等级标准"]]}],
cmp:[
 {vn:"Ngon thì ngon thật, nhưng hơi mặn.", zh:"[好吃是好吃]，[就是]有点儿咸。", py:"Hǎochī shì hǎochī, jiù shì yǒudiǎnr xián.", ok:true, why:"Giống tiếng Việt: lặp từ + 是."}],
ex:[
 ["这本书[难是难]，[不过]很有用。","Zhè běn shū nán shì nán, búguò hěn yǒuyòng.","Quyển sách này khó thì khó thật, nhưng rất có ích."]],
errs:[
 {bad:"这件衣服好看是漂亮，就是有点儿贵。", good:"这件衣服好看是好看，就是有点儿贵。", why:"Hai bên 是 phải cùng một từ."},
 {bad:"这件衣服好看是好看，而且很便宜。", good:"这件衣服好看是好看，就是有点儿贵。", why:"Vế sau phải là ý trái (chuyển ý)."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Đẹp thì đẹp thật, chỉ là hơi đắt.", o:["好看是漂亮，就是有点儿贵。","好看是好看，就是有点儿贵。"], a:1, why:"Lặp cùng một từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["坐公交车","方便","是","方便，","不过","人太多了"], a:"坐公交车方便是方便，不过人太多了。", vi:"Đi xe buýt tiện thì tiện thật, nhưng đông người quá."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Ngon thì ngon thật, nhưng hơi mặn.", a:"好吃是好吃，就是有点儿咸。/ 好吃是好吃，不过有点儿咸。"}]}],
rel:["二65","三77","三80","三66"]
};
