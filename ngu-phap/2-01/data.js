// Bài ngữ pháp 【二01】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二01", title:"能愿动词：可能、可以", vi:"Động từ năng nguyện 可能 “có lẽ, có thể” và 可以 “được phép, có thể”", tag:"词类 · 动词",
goals:[
 "Dùng <b>可能</b> để phỏng đoán (có lẽ, có khả năng).",
 "Dùng <b>可以</b> để xin phép, cho phép, hoặc nói điều kiện cho phép.",
 "Phân biệt 可以 với 会 / 能 【一02】; phủ định 不可以 = không được (cấm)."],
intro:"Cả hai đứng <b>trước động từ</b>. 可能 nói về <b>khả năng xảy ra</b> (đoán); 可以 nói về <b>sự cho phép</b>.",
rules:[
 {t:"可能 + V: có lẽ, có thể (phỏng đoán)", sub:"可能", fx:[["Chủ ngữ",""],["(不)可能",null],["Động từ",""]], mean:"Người nói đoán việc có khả năng xảy ra. 可能 còn đứng được ở đầu câu.",
  ex:[["他[可能]出去了。","Tā kěnéng chūqu le.","Có lẽ anh ấy ra ngoài rồi.","等级标准"],
      ["我今天[不可能]写完这么多作业。","Wǒ jīntiān bù kěnéng xiěwán zhème duō zuòyè.","Hôm nay tôi không thể nào làm xong nhiều bài tập thế này.","等级标准"]]},
 {t:"可以 + V: được phép, có thể", sub:"可以", fx:[["Chủ ngữ",""],["可以 / 不可以",null],["Động từ",""]], mean:"Xin phép, cho phép; 不可以 = không được (cấm).",
  ex:[["老师，我[可以]进来吗？","Lǎoshī, wǒ kěyǐ jìnlai ma?","Thưa thầy, em vào được không ạ?","等级标准"],
      ["这儿[不可以]停车。","Zhèr bù kěyǐ tíng chē.","Ở đây không được đỗ xe.","等级标准"]]}],
notes:[
 {t:"Trả lời xin phép", html:"<span class='zh'>可以。</span> (được) / <span class='zh'>不行。/ 不可以。</span> (không được)."},
 {t:"可以 và 能", html:"cùng nói điều kiện cho phép: <span class='zh'>明天我可以 / 能来。</span> Nhưng xin phép, cấm đoán thường dùng 可以; khả năng về sức lực, kỹ năng thường dùng 能 / 会."}],
cmp:[
 {vn:"Có lẽ anh ấy đi rồi.", zh:"他[可能]走了。", py:"Tā kěnéng zǒu le.", ok:true, why:"“có lẽ” = 可能 trước động từ."},
 {vn:"Em vào được không ạ?", zh:"我[可以]进来吗？", py:"Wǒ kěyǐ jìnlai ma?", ok:true, why:"“được không” cuối câu → 可以 trước động từ + 吗."}],
ex:[
 ["明天[可能]下雨。","Míngtiān kěnéng xià yǔ.","Mai có thể trời mưa."],
 ["我[可以]用一下你的手机吗？","Wǒ kěyǐ yòng yíxià nǐ de shǒujī ma?","Tôi dùng điện thoại của bạn một chút được không?"],
 ["上课的时候[不可以]玩儿手机。","Shàng kè de shíhou bù kěyǐ wánr shǒujī.","Trong giờ học không được chơi điện thoại."],
 ["他[可能]不知道这件事。","Tā kěnéng bù zhīdào zhè jiàn shì.","Có lẽ anh ấy không biết chuyện này."]],
errs:[
 {bad:"我进来可以吗？", good:"我可以进来吗？", why:"可以 đứng trước động từ."},
 {bad:"他出去了可能。", good:"他可能出去了。", why:"可能 không đứng cuối câu."},
 {bad:"这儿没可以停车。", good:"这儿不可以停车。", why:"Phủ định bằng 不."},
 {bad:"我可以说中文。（ý: biết nói）", good:"我会说中文。", why:"Kỹ năng đã học dùng 会."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Có lẽ mai trời mưa.", o:["明天下雨可能。","明天可能下雨。","可能下雨明天吗。"], a:1, why:"可能 + V."},
  {q:"Em vào được không ạ?", o:["我进来可以吗？","我可以进来吗？","我可以进来不吗？"], a:1, why:"可以 + V + 吗."},
  {q:"Ở đây không được đỗ xe.", o:["这儿不可以停车。","这儿没可以停车。","这儿停车不可以了。"], a:0, why:"不可以."},
  {q:"Tôi biết lái xe.", o:["我可以开车。","我可能开车。","我会开车。"], a:2, why:"Kỹ năng → 会."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","可能","出去","了"], a:"他可能出去了。", vi:"Có lẽ anh ấy ra ngoài rồi."},
  {w:["老师","我","可以","进来","吗"], a:"老师，我可以进来吗？", vi:"Thưa thầy, em vào được không ạ?"},
  {w:["这儿","不可以","停车"], a:"这儿不可以停车。", vi:"Ở đây không được đỗ xe."}]},
 {t:"C. Điền 可能 hoặc 可以", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"天这么黑，＿＿要下雨了。", a:"可能"},
  {q:"妈妈，我＿＿出去玩儿吗？", a:"可以"},
  {q:"他今天没来，＿＿病了。", a:"可能"}]}],
rel:["一02","二02","二19","一03"]
};
