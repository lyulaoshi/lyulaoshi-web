// Bài ngữ pháp 【二47】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二47", title:"（在）……以前 / 以后 / 前 / 后", vi:"(在) … 以前 / 以后 — “trước khi …, sau khi …”", tag:"固定格式",
goals:[
 "Dùng <b>(在) + sự việc / thời gian + 以前 / 以后 / 前 / 后</b> làm trạng ngữ thời gian.",
 "Nhớ trật tự <b>ngược tiếng Việt</b>: “<b>trước khi</b> đến” → 来<b>以前</b>.",
 "Đặt cả cụm ở <b>đầu câu</b> hoặc trước động từ chính."],
intro:"Tiếng Việt: “<b>trước khi</b> ăn cơm”. Tiếng Trung: 吃饭<b>以前</b> — từ chỉ thời gian đứng <b>sau</b> sự việc.",
rules:[
 {t:"(在) + sự việc + 以前 / 前", sub:"以前", fx:[["(在)",""],["sự việc / thời gian",""],["以前 / 前",null],["，vế chính",""]], mean:"trước khi …",
  ex:[["[在]来中国[以前]，我只学过一点儿中文。","Zài lái Zhōngguó yǐqián, wǒ zhǐ xué guo yìdiǎnr Zhōngwén.","Trước khi đến Trung Quốc, tôi chỉ từng học một chút tiếng Trung.","等级标准"],
      ["你运动[前]应该活动一下儿身体。","Nǐ yùndòng qián yīnggāi huódòng yíxiàr shēntǐ.","Trước khi tập thể thao bạn nên khởi động một chút.","等级标准"]]},
 {t:"(在) + sự việc + 以后 / 后", sub:"以后", fx:[["(在)",""],["sự việc / thời gian",""],["以后 / 后",null],["，vế chính",""]], mean:"sau khi …",
  ex:[["吃完午饭[以后]，我常常会睡一会儿。","Chīwán wǔfàn yǐhòu, wǒ chángcháng huì shuì yíhuìr.","Ăn trưa xong, tôi thường ngủ một lát.","等级标准"],
      ["我明天下了课就去你那儿。","Wǒ míngtiān xià le kè jiù qù nǐ nàr.","Mai tan học xong tôi sẽ qua chỗ bạn ngay.","等级标准"]]}],
cmp:[
 {vn:"Trước khi ăn cơm phải rửa tay.", zh:"吃饭[以前]要洗手。", py:"Chī fàn yǐqián yào xǐ shǒu.", ok:true, why:"“trước khi” → 以前 đặt sau sự việc."},
 {vn:"Sau khi tan học tôi đi thư viện.", zh:"下课[以后]我去图书馆。", py:"Xià kè yǐhòu wǒ qù túshūguǎn.", ok:true, why:"“sau khi” → 以后 đặt sau sự việc."}],
ex:[
 ["睡觉[以前]别喝咖啡。","Shuì jiào yǐqián bié hē kāfēi.","Trước khi ngủ đừng uống cà phê."],
 ["毕业[以后]你想做什么？","Bìyè yǐhòu nǐ xiǎng zuò shénme?","Sau khi tốt nghiệp bạn muốn làm gì?"],
 ["三天[以后]我们再见。","Sān tiān yǐhòu wǒmen zài jiàn.","Ba ngày sau chúng ta gặp lại."]],
errs:[
 {bad:"以前吃饭要洗手。", good:"吃饭以前要洗手。", why:"以前 đứng sau sự việc."},
 {bad:"我去图书馆以后下课。（ý: sau khi tan học）", good:"下课以后我去图书馆。", why:"Cụm thời gian đứng trước vế chính."},
 {bad:"在以前来中国，……", good:"在来中国以前，……", why:"Sự việc nằm giữa 在 và 以前."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trước khi ngủ đừng uống cà phê.", o:["以前睡觉别喝咖啡。","睡觉以前别喝咖啡。","别喝咖啡睡觉以前。"], a:1, why:"Sự việc + 以前."},
  {q:"Sau khi tốt nghiệp bạn muốn làm gì?", o:["毕业以后你想做什么？","以后毕业你想做什么？","你想做什么以后毕业？"], a:0, why:"Sự việc + 以后."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["吃饭","以前","要","洗手"], a:"吃饭以前要洗手。", vi:"Trước khi ăn cơm phải rửa tay."},
  {w:["下课","以后","我","去","图书馆"], a:"下课以后我去图书馆。", vi:"Sau khi tan học tôi đi thư viện."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Trước khi đến Trung Quốc, tôi chưa từng học tiếng Trung.", a:"（在）来中国以前，我没学过中文。"},
  {q:"Ba ngày sau chúng ta gặp lại.", a:"三天以后我们再见。"}]}],
rel:["二21","一28","二62","一44"]
};
