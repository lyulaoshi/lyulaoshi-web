// Bài ngữ pháp 【二43】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二43", title:"什么的", vi:"什么的 — “… các thứ, vân vân” (khẩu ngữ)", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>什么的</b> cuối một danh sách để nói “… các thứ”.",
 "Phân biệt với 什么 (gì) trong câu hỏi.",
 "Biết 什么的 thân mật hơn 等 【二35】."],
intro:"什么的 đứng <b>sau một hay vài ví dụ</b>, cho biết còn những thứ tương tự nữa. Không phải câu hỏi.",
rules:[
 {t:"A、B + 什么的", sub:"什么的", fx:[["Một vài ví dụ",""],["什么的",null]], mean:"… các thứ, vân vân.",
  ex:[["考试前多做点儿练习[什么的]。","Kǎoshì qián duō zuò diǎnr liànxí shénmede.","Trước kỳ thi làm nhiều bài luyện tập các thứ.","等级标准"],
      ["我去超市买了一些水果、面包[什么的]。","Wǒ qù chāoshì mǎi le yìxiē shuǐguǒ, miànbāo shénmede.","Tôi đi siêu thị mua ít hoa quả, bánh mì các thứ.","等级标准"]]}],
cmp:[
 {vn:"Tôi thích bóng đá, bơi lội các thứ.", zh:"我喜欢踢足球、游泳[什么的]。", py:"Wǒ xǐhuan tī zúqiú, yóuyǒng shénmede.", ok:true, why:"“các thứ” cuối danh sách."}],
ex:[
 ["周末我常常看电影、听音乐[什么的]。","Zhōumò wǒ chángcháng kàn diànyǐng, tīng yīnyuè shénmede.","Cuối tuần tôi thường xem phim, nghe nhạc các thứ."],
 ["桌子上有书、本子[什么的]。","Zhuōzi shang yǒu shū, běnzi shénmede.","Trên bàn có sách, vở các thứ."]],
errs:[
 {bad:"什么的水果、面包", good:"水果、面包什么的", why:"什么的 đứng sau danh sách."},
 {bad:"我买了水果、面包什么的吗？", good:"你买了什么？", why:"什么的 không dùng để hỏi."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi mua hoa quả, bánh mì các thứ.", o:["我买了什么的水果、面包。","我买了水果、面包什么的。","我什么的买了水果、面包。"], a:1, why:"… 什么的."},
  {q:"Câu nào là câu hỏi?", o:["你买了什么？","我买了面包什么的。"], a:0, why:"什么 hỏi; 什么的 liệt kê."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["桌子上","有","书","本子","什么的"], a:"桌子上有书、本子什么的。", vi:"Trên bàn có sách, vở các thứ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cuối tuần tôi xem phim, nghe nhạc các thứ.", a:"周末我看电影、听音乐什么的。"},
  {q:"Tôi thích táo, chuối các thứ.", a:"我喜欢苹果、香蕉什么的。"}]}],
rel:["二35","一04","二37","三07"]
};
