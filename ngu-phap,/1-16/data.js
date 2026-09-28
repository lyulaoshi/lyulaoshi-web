// Bài ngữ pháp 【一16】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一16", title:"介词：在", vi:"Giới từ 在 — làm gì ở đâu", tag:"词类 · 介词 · 引出时间、处所",
goals:[
 "Dùng <b>在 + nơi chốn + động từ</b> để nói hành động xảy ra ở đâu.",
 "Sửa thói quen tiếng Việt “học tiếng Trung <b>ở Bắc Kinh</b>” → 在北京学中文.",
 "Phân biệt 在 giới từ (làm gì ở đâu) với 在 động từ (ở đâu) và 在 phó từ (đang)."],
intro:"Tiếng Việt đặt nơi chốn <b>cuối câu</b>; tiếng Trung đưa <b>在 + nơi chốn lên trước động từ</b>. Đây là lỗi trật tự phổ biến nhất của người Việt.",
rules:[
 {t:"在 + nơi chốn + động từ", sub:"介词“在”", fx:[["Chủ ngữ",""],["在",null],["Nơi chốn",""],["Động từ + tân ngữ",""]], mean:"“làm gì ở đâu”: nơi chốn đứng giữa chủ ngữ và động từ.",
  ex:[["哥哥[在]北京学中文。","Gēge zài Běijīng xué Zhōngwén.","Anh trai học tiếng Trung ở Bắc Kinh.","等级标准"],
      ["他[在]手机上看电影。","Tā zài shǒujī shang kàn diànyǐng.","Anh ấy xem phim trên điện thoại.","等级标准"]]},
 {t:"Ba chữ 在 khác nhau", sub:"动词 · 介词 · 副词", fx:[["在 + nơi chốn","= ở (động từ)"],["·",""],["在 + nơi + V","= ở (giới từ)"],["·",""],["在 + V","= đang (phó từ)"]], mean:"<span class='zh'>我在家。</span> Tôi ở nhà. · <span class='zh'>我在家吃饭。</span> Tôi ăn cơm ở nhà. · <span class='zh'>我在吃饭。</span> Tôi đang ăn cơm 【一42】.",
  ex:[["我[在]家。","Wǒ zài jiā.","Tôi ở nhà."],
      ["我[在]家吃饭。","Wǒ zài jiā chī fàn.","Tôi ăn cơm ở nhà."]]}],
notes:[
 {t:"Phủ định", html:"不 / 没 đứng <b>trước</b> 在: <span class='zh'>我不在家吃饭。</span> <span class='zh'>他昨天没在学校。</span>"},
 {t:"Đồ vật làm nơi chốn", html:"thêm phương vị 【一01】: <span class='zh'>在手机上、在桌子上</span>."}],
cmp:[
 {vn:"Anh tôi học tiếng Trung ở Bắc Kinh.", zh:"哥哥[在北京]学中文。", py:"Gēge zài Běijīng xué Zhōngwén.", ok:true, why:"“ở Bắc Kinh” chuyển lên trước động từ."},
 {vn:"Tôi ăn trưa ở căng-tin.", zh:"我[在食堂]吃午饭。", py:"Wǒ zài shítáng chī wǔfàn.", ok:true, why:"Nơi chốn trước, hành động sau."}],
ex:[
 ["我[在]学校学习。","Wǒ zài xuéxiào xuéxí.","Tôi học ở trường."],
 ["他们[在]饭店吃饭。","Tāmen zài fàndiàn chī fàn.","Họ ăn cơm ở nhà hàng."],
 ["你[在]哪儿工作？","Nǐ zài nǎr gōngzuò?","Bạn làm việc ở đâu?"],
 ["她[在]网上买东西。","Tā zài wǎngshang mǎi dōngxi.","Cô ấy mua đồ trên mạng."],
 ["我不[在]家看电视。","Wǒ bú zài jiā kàn diànshì.","Tôi không xem ti vi ở nhà."]],
errs:[
 {bad:"我学中文在北京。", good:"我在北京学中文。", why:"在 + nơi chốn đứng <b>trước</b> động từ."},
 {bad:"他看电影在手机。", good:"他在手机上看电影。", why:"Trước động từ; đồ vật thêm 上."},
 {bad:"你工作在哪儿？", good:"你在哪儿工作？", why:"Hỏi nơi làm việc: 在哪儿 + V."},
 {bad:"我在家不吃饭。（ý: không ăn ở nhà）", good:"我不在家吃饭。", why:"Phủ định cả cụm: 不 đứng trước 在."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi học ở trường.", o:["我学习在学校。","我在学校学习。","在我学校学习。"], a:1, why:"在 + nơi + V."},
  {q:"Bạn làm việc ở đâu?", o:["你在哪儿工作？","你工作在哪儿？","你哪儿在工作？"], a:0, why:"在哪儿 + V."},
  {q:"Cô ấy mua đồ trên mạng.", o:["她买东西在网上。","她在网上买东西。","她网上在买东西。"], a:1, why:"在网上 + V."},
  {q:"Tôi không ăn cơm ở nhà.", o:["我在家不吃饭。","我不在家吃饭。","我在不家吃饭。"], a:1, why:"不 + 在 + nơi + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["哥哥","在","北京","学","中文"], a:"哥哥在北京学中文。", vi:"Anh trai học tiếng Trung ở Bắc Kinh."},
  {w:["他","在","手机上","看","电影"], a:"他在手机上看电影。", vi:"Anh ấy xem phim trên điện thoại."},
  {w:["他们","在","饭店","吃饭"], a:"他们在饭店吃饭。", vi:"Họ ăn cơm ở nhà hàng."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi làm việc ở Hà Nội.", a:"我在河内工作。"},
  {q:"Chúng tôi ăn trưa ở căng-tin.", a:"我们在食堂吃午饭。"},
  {q:"Mẹ tôi đang nấu cơm ở nhà.", a:"我妈妈在家做饭呢。"}]}],
rel:["一01","一15","一28","一42"]
};
