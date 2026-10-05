// Bài ngữ pháp 【一03】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一03", title:"能愿动词：想、要", vi:"Động từ năng nguyện 想, 要 — “muốn”, “sẽ”", tag:"词类 · 动词",
goals:[
 "Dùng <b>想 + động từ</b> nói mong muốn (muốn làm gì).",
 "Dùng <b>要 + động từ</b> nói ý định chắc chắn, việc sắp làm.",
 "Phủ định cả hai thường bằng <b>不想</b>; phân biệt 要 + danh từ, 想 + người."],
intro:"想 và 要 đứng <b>trước động từ</b>. 想 nhẹ nhàng (mong, thích); 要 mạnh hơn (quyết định rồi, sẽ làm).",
rules:[
 {t:"想: muốn (mong muốn)", sub:"愿望", fx:[["Chủ ngữ",""],["想 / 不想",null],["Động từ","+ tân ngữ"]], mean:"Muốn làm gì; có thể thêm 很: 很想…",
  ex:[["我[想]学中文。","Wǒ xiǎng xué Zhōngwén.","Tôi muốn học tiếng Trung.","等级标准"],
      ["你[想]去哪儿？","Nǐ xiǎng qù nǎr?","Bạn muốn đi đâu?"]]},
 {t:"要: muốn / sẽ (ý định chắc chắn)", sub:"意志 · 打算", fx:[["Chủ ngữ",""],["要",null],["Động từ","+ tân ngữ"]], mean:"Đã quyết, sắp làm: “muốn, định, sẽ”.",
  ex:[["他[要]去书店。","Tā yào qù shūdiàn.","Anh ấy muốn (sẽ) đi hiệu sách.","等级标准"],
      ["明天我[要]去北京。","Míngtiān wǒ yào qù Běijīng.","Ngày mai tôi sẽ đi Bắc Kinh."]],
  note:"Phủ định của 要 (muốn) thường là <b>不想</b>: <span class='zh'>我不想去。</span> Vì <span class='zh'>不要 + động từ</span> hay mang nghĩa “<b>đừng</b>”: <span class='zh'>不要说话！</span> = Đừng nói chuyện!"}],
notes:[
 {t:"要 + danh từ", html:"= muốn có, cần (động từ thường): <span class='zh'>我要一杯水。</span> Tôi muốn một cốc nước. Không nói <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> <span class='zh'>我想一杯水。</span>"},
 {t:"想 + người", html:"= nhớ: <span class='zh'>我很想妈妈。</span> Tôi rất nhớ mẹ."}],
cmp:[
 {vn:"Tôi muốn học tiếng Trung.", zh:"我[想]学中文。", py:"Wǒ xiǎng xué Zhōngwén.", ok:true, why:"Muốn + động từ → 想 / 要."},
 {vn:"Tôi muốn một cốc trà.", zh:"我[要]一杯茶。", py:"Wǒ yào yì bēi chá.", ok:true, why:"Muốn + đồ vật → 要."},
 {vn:"Tôi không muốn đi.", zh:"我[不想]去。", py:"Wǒ bù xiǎng qù.", ok:true, why:"Phủ định thường dùng 不想."}],
ex:[
 ["我[想]学中文。","Wǒ xiǎng xué Zhōngwén.","Tôi muốn học tiếng Trung.","等级标准"],
 ["他[要]去书店。","Tā yào qù shūdiàn.","Anh ấy muốn đi hiệu sách.","等级标准"],
 ["我很[想]喝水。","Wǒ hěn xiǎng hē shuǐ.","Tôi rất muốn uống nước."],
 ["你[想]吃什么？——我[想]吃米饭。","Nǐ xiǎng chī shénme? —— Wǒ xiǎng chī mǐfàn.","Bạn muốn ăn gì? — Tôi muốn ăn cơm."],
 ["我们下午[要]考试。","Wǒmen xiàwǔ yào kǎoshì.","Chiều nay chúng tôi phải/sẽ thi."],
 ["他[不想]看电视。","Tā bù xiǎng kàn diànshì.","Anh ấy không muốn xem ti vi."]],
errs:[
 {bad:"我学中文想。", good:"我想学中文。", why:"想 đứng <b>trước</b> động từ."},
 {bad:"我不要去。（ý: không muốn）", good:"我不想去。", why:"不要 + động từ dễ hiểu thành “đừng”."},
 {bad:"我想一杯水。", good:"我要一杯水。", why:"Muốn có một vật → 要 + danh từ."},
 {bad:"他要不要去书店吗？", good:"他要不要去书店？", why:"Đã hỏi kiểu 要不要 thì không thêm 吗."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi muốn đi Trung Quốc.", o:["我去中国想。","我想去中国。","我想中国去。"], a:1, why:"想 + động từ + tân ngữ."},
  {q:"Tôi muốn hai quyển vở.", o:["我要两个本子。","我想两个本子。","我两个本子要。"], a:0, why:"Muốn có đồ vật → 要."},
  {q:"Anh ấy không muốn ăn cơm.", o:["他不要吃饭。","他没想吃饭。","他不想吃饭。"], a:2, why:"Phủ định mong muốn: 不想."},
  {q:"Bạn có muốn uống trà không?", o:["你想喝茶吗？","你想喝茶不想吗？","你喝茶想吗？"], a:0, why:"想 + V + 吗？"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","想","学","中文"], a:"我想学中文。", vi:"Tôi muốn học tiếng Trung."},
  {w:["他","要","去","书店"], a:"他要去书店。", vi:"Anh ấy muốn đi hiệu sách."},
  {w:["你","想","去","哪儿"], a:"你想去哪儿？", vi:"Bạn muốn đi đâu?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi rất nhớ mẹ.", a:"我很想妈妈。"},
  {q:"Tôi muốn một cốc cà phê.", a:"我要一杯咖啡。"},
  {q:"Ngày mai tôi sẽ đi Bắc Kinh.", a:"明天我要去北京。"},
  {q:"Tôi không muốn xem phim.", a:"我不想看电影。"}]}],
rel:["一02","二01","二02","二81"]
};
