// Bài ngữ pháp 【一25】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一25", title:"谓语", vi:"Vị ngữ — động từ, tính từ (và cụm của chúng)", tag:"句子成分 · 谓语",
goals:[
 "Nhận ra vị ngữ: phần nói chủ ngữ <b>làm gì / thế nào</b>, đứng sau chủ ngữ.",
 "Dùng <b>động từ</b> và <b>tính từ</b> làm vị ngữ trực tiếp.",
 "Không chèn 是 trước tính từ hoặc động từ làm vị ngữ."],
intro:"Vị ngữ HSK 1 là <b>động từ (+ tân ngữ)</b> hoặc <b>tính từ</b>. Tính từ làm vị ngữ trực tiếp — không cần “là” (是).",
rules:[
 {t:"Động từ / cụm động từ làm vị ngữ", sub:"动词性谓语", fx:[["Chủ ngữ",""],["Động từ (+ tân ngữ)",null]], mean:"Nói chủ ngữ làm gì, bị gì.",
  ex:[["他[病了]。","Tā bìng le.","Anh ấy bị ốm rồi.","等级标准"],
      ["我们[学中文]。","Wǒmen xué Zhōngwén.","Chúng tôi học tiếng Trung.","等级标准"]]},
 {t:"Tính từ / cụm tính từ làm vị ngữ", sub:"形容词性谓语", fx:[["Chủ ngữ",""],["(很 / 不…) + tính từ",null]], mean:"Nói chủ ngữ thế nào. Xem kỹ 【一30】.",
  ex:[["今天[不冷]。","Jīntiān bù lěng.","Hôm nay không lạnh.","等级标准"],
      ["这个菜[很好吃]。","Zhège cài hěn hǎochī.","Món này rất ngon.","等级标准"]]}],
cmp:[
 {vn:"Hôm nay (trời) lạnh.", zh:"今天[很冷]。", py:"Jīntiān hěn lěng.", ok:true, why:"Tính từ làm vị ngữ, không có 是."},
 {vn:"Anh ấy bị ốm.", zh:"他[病了]。", py:"Tā bìng le.", ok:true, why:"“bị” không dịch thành chữ riêng."}],
ex:[
 ["我[喜欢唱歌]。","Wǒ xǐhuan chàng gē.","Tôi thích hát."],
 ["她[很忙]。","Tā hěn máng.","Cô ấy rất bận."],
 ["我们明天[去北京]。","Wǒmen míngtiān qù Běijīng.","Mai chúng tôi đi Bắc Kinh."],
 ["这件衣服[太贵了]。","Zhè jiàn yīfu tài guì le.","Cái áo này đắt quá."]],
errs:[
 {bad:"今天是冷。", good:"今天很冷。", why:"Tính từ làm vị ngữ không cần 是."},
 {bad:"他是病了。", good:"他病了。", why:"Động từ làm vị ngữ không cần 是."},
 {bad:"我是喜欢唱歌。", good:"我喜欢唱歌。", why:"Không chèn 是 trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy rất bận.", o:["她是很忙。","她很忙。","她是忙。"], a:1, why:"Tính từ làm vị ngữ."},
  {q:"Anh ấy ốm rồi.", o:["他是病了。","他病了。","他病是了。"], a:1, why:"Không có 是."},
  {q:"Chúng tôi học tiếng Trung.", o:["我们学中文。","我们是学中文。","我们中文学。"], a:0, why:"S + V + O."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个","菜","很","好吃"], a:"这个菜很好吃。", vi:"Món này rất ngon."},
  {w:["我们","学","中文"], a:"我们学中文。", vi:"Chúng tôi học tiếng Trung."},
  {w:["今天","不","冷"], a:"今天不冷。", vi:"Hôm nay không lạnh."}]},
 {t:"C. Tìm vị ngữ", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我妈妈做饭。", a:"做饭"},
  {q:"这本书很有意思。", a:"很有意思"},
  {q:"他们都去图书馆。", a:"都去图书馆"}]}],
rel:["一29","一30","一24","二48"]
};
