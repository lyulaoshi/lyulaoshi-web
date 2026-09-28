// Bài ngữ pháp 【三04】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三04", title:"能愿动词：需要", vi:"Động từ năng nguyện 需要 — cần", tag:"词类 · 动词",
goals:[
 "Dùng <b>需要 + động từ</b> (cần làm gì) và <b>需要 + danh từ</b> (cần cái gì).",
 "Phủ định bằng <b>不需要</b> (không cần), cũng hay nói <b>不用</b>.",
 "Phân biệt 需要 (cần, do hoàn cảnh) với 要 (muốn / phải)."],
intro:"需要 nói về <b>nhu cầu khách quan</b>: tình huống đòi hỏi phải làm / phải có.",
rules:[
 {t:"需要 + V / N", sub:"需要", fx:[["Chủ ngữ",""],["(不) 需要",null],["Động từ / danh từ",""]], mean:"",
  ex:[["她生病了，[需要]休息。","Tā shēng bìng le, xūyào xiūxi.","Cô ấy ốm rồi, cần nghỉ ngơi.","等级标准"],
      ["我们[需要]买吃的，家里没有很多。","Wǒmen xūyào mǎi chī de, jiā li méiyǒu hěn duō.","Chúng ta cần mua đồ ăn, trong nhà không còn nhiều.","等级标准"]]}],
notes:[{t:"不需要 · 不用", html:"<span class='zh'>你不需要来。= 你不用来。</span> (Bạn không cần đến.)"}],
cmp:[
 {vn:"Tôi cần một cái túi.", zh:"我[需要]一个袋子。", py:"Wǒ xūyào yí ge dàizi.", ok:true, why:"需要 + danh từ."},
 {vn:"Bạn không cần lo.", zh:"你[不用]担心。", py:"Nǐ bú yòng dānxīn.", ok:true, why:"“không cần” thường dùng 不用 / 不需要."}],
ex:[
 ["学中文[需要]多练习。","Xué Zhōngwén xūyào duō liànxí.","Học tiếng Trung cần luyện tập nhiều."],
 ["你[需要]什么帮助吗？","Nǐ xūyào shénme bāngzhù ma?","Bạn có cần giúp gì không?"],
 ["这件事[不需要]你做。","Zhè jiàn shì bù xūyào nǐ zuò.","Việc này không cần bạn làm."]],
errs:[
 {bad:"她需要不休息。", good:"她不需要休息。", why:"不 đứng trước 需要."},
 {bad:"我没需要帮助。", good:"我不需要帮助。", why:"Phủ định bằng 不."},
 {bad:"我休息需要。", good:"我需要休息。", why:"需要 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy ốm, cần nghỉ ngơi.", o:["她生病了，需要休息。","她生病了，休息需要。","她生病了，需要不休息。"], a:0, why:"需要 + V."},
  {q:"Tôi không cần giúp.", o:["我没需要帮助。","我不需要帮助。","我需要不帮助。"], a:1, why:"不需要."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["学中文","需要","多","练习"], a:"学中文需要多练习。", vi:"Học tiếng Trung cần luyện tập nhiều."},
  {w:["你","需要","什么","帮助","吗"], a:"你需要什么帮助吗？", vi:"Bạn có cần giúp gì không?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Việc này không cần bạn làm.", a:"这件事不需要你做。/ 这件事不用你做。"},
  {q:"Chúng ta cần mua đồ ăn.", a:"我们需要买吃的。"}]}],
rel:["一03","三03","二02","二19"]
};
