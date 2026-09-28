// Bài ngữ pháp 【三46】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三46", title:"结果补语2：动词＋到 / 住 / 走", vi:"Bổ ngữ kết quả 2 — V + 到 / 住 / 走", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>V + 到</b>: đạt được mục đích (mua được, tìm thấy).",
 "Dùng <b>V + 住</b>: giữ chặt, cố định lại (bắt được, nhớ được).",
 "Dùng <b>V + 走</b>: rời khỏi chỗ cũ (lấy đi, mang đi)."],
intro:"Ba bổ ngữ kết quả mới, bổ sung cho 【二49】. Phủ định bằng <b>没</b> + V + bổ ngữ.",
rules:[
 {t:"V + 到 / 住 / 走", sub:"结果补语", fx:[["Động từ",""],["到 / 住 / 走",null],["(了) + tân ngữ",""]], mean:"到 đạt được · 住 giữ chặt, dừng lại · 走 rời khỏi.",
  ex:[["他终于买[到]火车票了。","Tā zhōngyú mǎidào huǒchē piào le.","Cuối cùng anh ấy đã mua được vé tàu.","等级标准"],
      ["我把球传给他，可是他没接[住]。","Wǒ bǎ qiú chuán gěi tā, kěshì tā méi jiēzhù.","Tôi chuyền bóng cho anh ấy, nhưng anh ấy không bắt được.","等级标准"],
      ["那本书他拿[走]了吗？","Nà běn shū tā názǒu le ma?","Quyển sách đó anh ấy mang đi rồi à?","等级标准"]]}],
cmp:[
 {vn:"Tôi tìm thấy điện thoại rồi.", zh:"我找[到]手机了。", py:"Wǒ zhǎodào shǒujī le.", ok:true, why:"“thấy / được” (kết quả) = 到."},
 {vn:"Bạn nhớ kỹ nhé.", zh:"你记[住]啊。", py:"Nǐ jìzhù a.", ok:true, why:"“nhớ kỹ” = 记住."}],
ex:[
 ["我没找[到]他。","Wǒ méi zhǎodào tā.","Tôi không tìm thấy anh ấy."],
 ["请记[住]这个号码。","Qǐng jìzhù zhège hàomǎ.","Hãy nhớ kỹ số này."],
 ["谁把我的伞拿[走]了？","Shéi bǎ wǒ de sǎn názǒu le?","Ai lấy mất ô của tôi rồi?"]],
errs:[
 {bad:"我找手机到了。", good:"我找到手机了。", why:"Bổ ngữ dính liền sau động từ."},
 {bad:"我不找到他。（ý: đã không tìm thấy）", good:"我没找到他。", why:"Phủ định kết quả dùng 没."}],
practice:[
 {t:"A. Chọn bổ ngữ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他终于买＿火车票了。", vi:"Cuối cùng anh ấy đã mua ＿ vé tàu.", o:["到","住","走"], a:0, why:"Đạt được → 到."},
  {q:"请记＿这个号码。", vi:"Hãy nhớ ＿ số này.", o:["到","住","走"], a:1, why:"Giữ lại → 住."},
  {q:"那本书他拿＿了。", vi:"Quyển sách đó anh ấy mang ＿ rồi.", o:["到","住","走"], a:2, why:"Rời đi → 走."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","终于","买到","火车票","了"], a:"他终于买到火车票了。", vi:"Cuối cùng anh ấy đã mua được vé tàu."},
  {w:["我","没","找到","他"], a:"我没找到他。", vi:"Tôi không tìm thấy anh ấy."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi tìm thấy điện thoại rồi.", a:"我找到手机了。/ 我找到我的手机了。"},
  {q:"Ai lấy mất ô của tôi rồi?", a:"谁把我的伞拿走了？/ 谁拿走了我的伞？"}]}],
rel:["二49","三48","三47","三54"]
};
