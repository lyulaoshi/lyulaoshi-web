// Bài ngữ pháp 【三39】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三39", title:"从……起", vi:"从……起 — kể từ …", tag:"固定格式",
goals:[
 "Dùng <b>从 + thời điểm + 起</b> nói mốc bắt đầu (thường là hiện tại / tương lai).",
 "Đặt cụm ở <b>đầu câu</b> hoặc trước động từ.",
 "Phân biệt với 自从 (chỉ quá khứ) 【三21】."],
intro:"从……起 = “kể từ …” — mở đầu một việc mới, hay dùng với <b>现在、今天、明天</b>.",
rules:[
 {t:"从 + thời điểm + 起，……", sub:"从……起", fx:[["从",null],["thời điểm",""],["起",null],["，vế chính",""]], mean:"",
  ex:[["[从]现在[起]，你要努力学习了。","Cóng xiànzài qǐ, nǐ yào nǔlì xuéxí le.","Kể từ bây giờ, em phải chăm chỉ học rồi.","等级标准"],
      ["[从]今天[起]，我就用这台新电脑了。","Cóng jīntiān qǐ, wǒ jiù yòng zhè tái xīn diànnǎo le.","Kể từ hôm nay, tôi dùng chiếc máy tính mới này.","等级标准"]]}],
cmp:[
 {vn:"Kể từ mai, tôi sẽ dậy lúc 6 giờ.", zh:"[从]明天[起]，我六点起床。", py:"Cóng míngtiān qǐ, wǒ liù diǎn qǐ chuáng.", ok:true, why:"Mốc tương lai → 从……起 (không dùng 自从)."}],
ex:[
 ["[从]下个月[起]，我要去上海工作。","Cóng xià ge yuè qǐ, wǒ yào qù Shànghǎi gōngzuò.","Kể từ tháng sau, tôi sẽ đi làm ở Thượng Hải."],
 ["[从]那时[起]，他就爱上了中文。","Cóng nà shí qǐ, tā jiù àishang le Zhōngwén.","Kể từ lúc đó, anh ấy yêu tiếng Trung."]],
errs:[
 {bad:"自从明天起，……", good:"从明天起，……", why:"Tương lai dùng 从, không dùng 自从."},
 {bad:"从起今天，……", good:"从今天起，……", why:"Thời điểm nằm giữa 从 và 起."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Kể từ mai, tôi dậy sớm.", o:["自从明天起，我早起。","从明天起，我早起。"], a:1, why:"从……起."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["从","现在","起","你","要","努力学习"], a:"从现在起，你要努力学习。", vi:"Kể từ bây giờ, em phải chăm chỉ học."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Kể từ tháng sau, tôi sẽ đi làm ở Thượng Hải.", a:"从下个月起，我要去上海工作。/ 从下个月起，我去上海工作。"}]}],
rel:["三21","一15","二47","三20"]
};
