// Bài ngữ pháp 【一15】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一15", title:"介词：从", vi:"Giới từ 从 — “từ” (nơi chốn, thời gian)", tag:"词类 · 介词 · 引出时间、处所",
goals:[
 "Dùng <b>从 + nơi chốn / thời gian</b> để nói điểm bắt đầu.",
 "Dùng khung <b>从……到……</b> (từ … đến …).",
 "Đặt cụm 从… <b>trước động từ</b>: 从越南来, không nói ✗ 来从越南."],
intro:"从 là giới từ: 从 + từ chỉ nơi chốn / thời gian tạo thành cụm giới từ, đứng <b>trước động từ</b> chính.",
rules:[
 {t:"从 + nơi chốn + động từ", sub:"处所起点", fx:[["Chủ ngữ",""],["从",null],["Nơi chốn",""],["来 / 去 / 回…",""]], mean:"Từ đâu đến, từ đâu đi.",
  ex:[["你[从]哪儿来？","Nǐ cóng nǎr lái?","Bạn từ đâu đến?","等级标准"],
      ["我[从]越南来。","Wǒ cóng Yuènán lái.","Tôi đến từ Việt Nam."]]},
 {t:"从……到……", sub:"时间 · 处所", fx:[["从",null],["điểm đầu",""],["到",null],["điểm cuối",""],["Động từ",""]], mean:"Từ … đến … (thời gian hoặc nơi chốn).",
  ex:[["我们[从]星期一[到]星期五工作。","Wǒmen cóng xīngqīyī dào xīngqīwǔ gōngzuò.","Chúng tôi làm việc từ thứ Hai đến thứ Sáu.","等级标准"],
      ["[从]八点[到]十点我们上课。","Cóng bā diǎn dào shí diǎn wǒmen shàng kè.","Từ 8 giờ đến 10 giờ chúng tôi học."]]}],
notes:[
 {t:"从 + người", html:"người không phải nơi chốn — thêm 这儿 / 那儿: <span class='zh'>从老师那儿</span> (từ chỗ cô giáo)."}],
cmp:[
 {vn:"Tôi đến từ Việt Nam.", zh:"我[从]越南来。", py:"Wǒ cóng Yuènán lái.", ok:true, why:"“từ Việt Nam” đứng sau động từ trong tiếng Việt; 从越南 đứng trước 来."},
 {vn:"Làm việc từ thứ Hai đến thứ Sáu.", zh:"[从]星期一[到]星期五工作。", py:"Cóng xīngqīyī dào xīngqīwǔ gōngzuò.", ok:true, why:"Khung thời gian đứng trước động từ."}],
ex:[
 ["他[从]学校回家。","Tā cóng xuéxiào huí jiā.","Anh ấy từ trường về nhà."],
 ["[从]这儿[到]那儿很近。","Cóng zhèr dào nàr hěn jìn.","Từ đây đến đó rất gần."],
 ["我[从]明天开始学中文。","Wǒ cóng míngtiān kāishǐ xué Zhōngwén.","Từ mai tôi bắt đầu học tiếng Trung."],
 ["她[从]中国来。","Tā cóng Zhōngguó lái.","Cô ấy đến từ Trung Quốc."]],
errs:[
 {bad:"我来从越南。", good:"我从越南来。", why:"Cụm 从… đứng <b>trước</b> động từ."},
 {bad:"我从河内。", good:"我从河内来。", why:"从 là giới từ, câu cần động từ."},
 {bad:"我们工作从星期一到星期五。", good:"我们从星期一到星期五工作。", why:"从……到…… đặt trước động từ."},
 {bad:"我从老师来。", good:"我从老师那儿来。", why:"Người cần thêm 那儿 / 这儿 để thành nơi chốn."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đến từ Việt Nam.", o:["我来从越南。","我从越南来。","从越南我来来。"], a:1, why:"从 + nơi + 来."},
  {q:"Chúng tôi học từ 8 giờ đến 10 giờ.", o:["我们从八点到十点上课。","我们上课从八点到十点。","我们从八点上课到十点。"], a:0, why:"从…到… + V."},
  {q:"Bạn từ đâu đến?", o:["你从哪儿来？","你来从哪儿？","你从哪儿来吗？"], a:0, why:"Có 哪儿 thì không thêm 吗."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","从","哪儿","来"], a:"你从哪儿来？", vi:"Bạn từ đâu đến?"},
  {w:["我们","从","星期一","到","星期五","工作"], a:"我们从星期一到星期五工作。", vi:"Chúng tôi làm việc từ thứ Hai đến thứ Sáu."},
  {w:["他","从","学校","回家"], a:"他从学校回家。", vi:"Anh ấy từ trường về nhà."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cô ấy đến từ Bắc Kinh.", a:"她从北京来。"},
  {q:"Từ đây đến đó rất gần.", a:"从这儿到那儿很近。"},
  {q:"Tôi học tiếng Trung từ thứ Hai đến thứ Năm.", a:"我从星期一到星期四学中文。"}]}],
rel:["一16","二24","三39","一28"]
};
