// Bài ngữ pháp 【三27】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三27", title:"介词：把、被、叫、让", vi:"Giới từ 把, 被, 叫, 让 — xử trí và bị động", tag:"词类 · 介词 · 引出施事、受事",
goals:[
 "Dùng <b>把 + tân ngữ</b> đưa đối tượng bị tác động lên trước động từ.",
 "Dùng <b>被 / 叫 / 让 + người làm</b> trong câu bị động.",
 "Biết động từ sau các giới từ này phải có thành phần khác (了, bổ ngữ…)."],
intro:"把 dẫn ra <b>vật bị tác động</b>; 被 / 叫 / 让 dẫn ra <b>người gây ra</b> hành động (bị động). Chi tiết kiểu câu ở 【三54】【三55】.",
rules:[
 {t:"S + 把 + O + V + thành phần khác", sub:"把", fx:[["Chủ ngữ",""],["把",null],["Đối tượng",""],["V + 在 / 了 / bổ ngữ…",""]], mean:"Nhấn mạnh xử lý đối tượng thế nào.",
  ex:[["我看见你[把]手机放在书包里了。","Wǒ kànjiàn nǐ bǎ shǒujī fàng zài shūbāo li le.","Tôi thấy bạn để điện thoại vào cặp rồi.","等级标准"]]},
 {t:"O + 被 / 叫 / 让 + người + V + thành phần khác", sub:"被 · 叫 · 让", fx:[["Đối tượng",""],["被 / 叫 / 让",null],["người",""],["V + 了 / bổ ngữ…",""]], mean:"叫, 让 mang màu khẩu ngữ, phải có người làm; 被 có thể lược người làm.",
  ex:[["裙子[被]我弄脏了。","Qúnzi bèi wǒ nòngzāng le.","Váy bị tôi làm bẩn rồi.","等级标准"],
      ["手机[叫]我弄坏了。","Shǒujī jiào wǒ nònghuài le.","Điện thoại bị tôi làm hỏng rồi.","等级标准"],
      ["我的车[让]朋友借走了。","Wǒ de chē ràng péngyou jièzǒu le.","Xe của tôi bị bạn mượn đi rồi.","等级标准"]]}],
cmp:[
 {vn:"Điện thoại bị tôi làm hỏng rồi.", zh:"手机[被]我弄坏了。", py:"Shǒujī bèi wǒ nònghuài le.", ok:true, why:"“bị” = 被, trật tự giống tiếng Việt, nhưng cần bổ ngữ 坏 + 了."}],
ex:[
 ["请[把]门关上。","Qǐng bǎ mén guānshang.","Làm ơn đóng cửa lại."],
 ["我的自行车[被]偷了。","Wǒ de zìxíngchē bèi tōu le.","Xe đạp của tôi bị lấy trộm rồi."]],
errs:[
 {bad:"我把手机放。", good:"我把手机放在书包里了。", why:"Sau 把 + O + V phải có thành phần khác."},
 {bad:"手机叫弄坏了。", good:"手机叫我弄坏了。/ 手机被弄坏了。", why:"叫 / 让 phải có người làm."},
 {bad:"我被老师表扬。", good:"我被老师表扬了。", why:"Động từ cần 了 / bổ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Váy bị tôi làm bẩn rồi.", o:["裙子被我弄脏了。","裙子被我弄脏。","我被裙子弄脏了。"], a:0, why:"O + 被 + người + V + bổ ngữ + 了."},
  {q:"Làm ơn đóng cửa lại.", o:["请把门关。","请把门关上。","请门把关上。"], a:1, why:"把 + O + V + bổ ngữ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我的车","让","朋友","借走了"], a:"我的车让朋友借走了。", vi:"Xe của tôi bị bạn mượn đi rồi."},
  {w:["你","把","手机","放在","书包里","了"], a:"你把手机放在书包里了。", vi:"Bạn để điện thoại vào cặp rồi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Xe đạp của tôi bị lấy trộm rồi.", a:"我的自行车被偷了。/ 我的自行车被人偷了。"}]}],
rel:["三54","三55","二49","一41"]
};
