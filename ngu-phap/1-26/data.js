// Bài ngữ pháp 【一26】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一26", title:"宾语", vi:"Tân ngữ — danh từ, đại từ, cụm danh từ", tag:"句子成分 · 宾语",
goals:[
 "Đặt tân ngữ <b>sau động từ</b>: 吃面包, 看我.",
 "Dùng cụm danh từ có số lượng làm tân ngữ: 买了一个手机.",
 "Tránh gắn tân ngữ vào sau động từ ly hợp (帮忙, 见面…)."],
intro:"Tân ngữ là người / vật chịu tác động của động từ, đứng <b>ngay sau động từ</b> — giống tiếng Việt.",
rules:[
 {t:"Động từ + tân ngữ", sub:"名词、代词或名词性短语作宾语", fx:[["Chủ ngữ",""],["Động từ",""],["Tân ngữ",null]], mean:"Tân ngữ có thể là danh từ, đại từ, cụm danh từ.",
  ex:[["他吃[面包]。","Tā chī miànbāo.","Anh ấy ăn bánh mì.","等级标准"],
      ["妈妈来看[我]了。","Māma lái kàn wǒ le.","Mẹ đến thăm tôi rồi.","等级标准"],
      ["她买了[一个手机]。","Tā mǎi le yí ge shǒujī.","Cô ấy mua một chiếc điện thoại.","等级标准"]]}],
notes:[
 {t:"Động từ ly hợp", html:"帮忙、见面、睡觉… đã có “tân ngữ” bên trong, không thêm tân ngữ sau: <span class='zh'>我帮你。/ 我帮你的忙。</span> (<svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> 我帮忙你) 【三05】."}],
cmp:[
 {vn:"Tôi ăn bánh mì.", zh:"我吃[面包]。", py:"Wǒ chī miànbāo.", ok:true, why:"Giống tiếng Việt."},
 {vn:"Tôi giúp bạn.", zh:"我帮[你]。", py:"Wǒ bāng nǐ.", ok:true, why:"Dùng 帮 + người, không dùng 帮忙 + người."}],
ex:[
 ["我喜欢[中国菜]。","Wǒ xǐhuan Zhōngguó cài.","Tôi thích món Trung Quốc."],
 ["你认识[他]吗？","Nǐ rènshi tā ma?","Bạn quen anh ấy không?"],
 ["我想买[一件新衣服]。","Wǒ xiǎng mǎi yí jiàn xīn yīfu.","Tôi muốn mua một bộ quần áo mới."],
 ["他在看[电视]。","Tā zài kàn diànshì.","Anh ấy đang xem ti vi."]],
errs:[
 {bad:"我面包吃。", good:"我吃面包。", why:"Tân ngữ đứng sau động từ."},
 {bad:"我帮忙你。", good:"我帮你。", why:"帮忙 không mang tân ngữ."},
 {bad:"她买了手机一个。", good:"她买了一个手机。", why:"Số lượng đứng trước danh từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi giúp bạn.", o:["我帮忙你。","我帮你。","我你帮。"], a:1, why:"帮 + người."},
  {q:"Anh ấy ăn bánh mì.", o:["他面包吃。","他吃面包。","吃面包他。"], a:1, why:"V + O."},
  {q:"Cô ấy mua một chiếc điện thoại.", o:["她买了一个手机。","她买了手机一个。","她一个手机买了。"], a:0, why:"V + 了 + số lượng + N."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["妈妈","来","看","我","了"], a:"妈妈来看我了。", vi:"Mẹ đến thăm tôi rồi."},
  {w:["我","喜欢","中国菜"], a:"我喜欢中国菜。", vi:"Tôi thích món Trung Quốc."},
  {w:["你","认识","他","吗"], a:"你认识他吗？", vi:"Bạn quen anh ấy không?"}]},
 {t:"C. Tìm tân ngữ", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我想喝一杯茶。", vi:"Tôi muốn uống một cốc trà.", a:"一杯茶"},
  {q:"老师在找你。", vi:"Thầy giáo đang tìm bạn.", a:"你"},
  {q:"他们都喜欢这本书。", vi:"Họ đều thích quyển sách này.", a:"这本书"}]}],
rel:["一24","一27","三05","三44"]
};
