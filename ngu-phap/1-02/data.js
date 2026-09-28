// Bài ngữ pháp 【一02】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一02", title:"能愿动词：会、能", vi:"Động từ năng nguyện 会, 能 — “biết”, “có thể”", tag:"词类 · 动词",
goals:[
 "Dùng <b>会 + động từ</b> nói kỹ năng đã học được (biết bơi, biết nói tiếng Trung).",
 "Dùng <b>能 + động từ</b> nói khả năng, điều kiện cho phép (đến được, đi được).",
 "Phủ định bằng <b>不会 / 不能</b>; hỏi bằng 吗 hoặc 会不会 / 能不能."],
intro:"会 và 能 là <b>động từ năng nguyện</b>: luôn đứng <b>trước động từ chính</b>, cho biết người đó “biết / có thể” làm việc gì.",
rules:[
 {t:"会: biết (do học mà có)", sub:"技能", fx:[["Chủ ngữ",""],["会 / 不会",null],["Động từ","+ tân ngữ"]], mean:"Kỹ năng: nói tiếng, bơi, lái xe, nấu ăn, viết chữ…",
  ex:[["我[不会]说中文。","Wǒ bú huì shuō Zhōngwén.","Tôi không biết nói tiếng Trung.","等级标准"],
      ["他[会]开车。","Tā huì kāi chē.","Anh ấy biết lái xe."]]},
 {t:"能: có thể (khả năng, điều kiện)", sub:"能力 · 条件", fx:[["Chủ ngữ",""],["能 / 不能",null],["Động từ","+ tân ngữ"]], mean:"Có đủ sức, đủ điều kiện, hoàn cảnh cho phép để làm.",
  ex:[["明天你[能]来吗？","Míngtiān nǐ néng lái ma?","Ngày mai bạn đến được không?","等级标准"],
      ["我今天很忙，[不能]去。","Wǒ jīntiān hěn máng, bù néng qù.","Hôm nay tôi rất bận, không đi được."]],
  note:"Mẹo HSK 1: <b>会</b> = đã <b>học</b> nên biết; <b>能</b> = <b>hôm nay / lúc này</b> có làm được không. <span class='zh'>我会游泳，今天我不能游泳。</span> = Tôi biết bơi, nhưng hôm nay không bơi được."}],
notes:[
 {t:"Phủ định", html:"chỉ dùng <b>不</b>: <span class='zh'>不会、不能</span> (không dùng 没会、没能 trong câu nói bình thường)."},
 {t:"Câu hỏi và trả lời ngắn", html:"<span class='zh'>你会说汉语吗？/ 你会不会说汉语？</span> — trả lời <span class='zh'>会。/ 不会。</span>; <span class='zh'>你能来吗？</span> — <span class='zh'>能。/ 不能。</span>"}],
cmp:[
 {vn:"Tôi biết bơi.", zh:"我[会]游泳。", py:"Wǒ huì yóuyǒng.", ok:true, why:"“biết” + kỹ năng → 会."},
 {vn:"Tôi biết anh ấy.", zh:"我认识他。", py:"Wǒ rènshi tā.", ok:false, tag:"(không dùng 会)", why:"“biết” một người → 认识."},
 {vn:"Mai bạn đến được không?", zh:"明天你[能]来吗？", py:"Míngtiān nǐ néng lái ma?", ok:true, why:"“được” của tiếng Việt đứng cuối, còn 能 đứng trước động từ."}],
ex:[
 ["我[不会]说中文。","Wǒ bú huì shuō Zhōngwén.","Tôi không biết nói tiếng Trung.","等级标准"],
 ["明天你[能]来吗？","Míngtiān nǐ néng lái ma?","Ngày mai bạn đến được không?","等级标准"],
 ["你[会]写这个字吗？","Nǐ huì xiě zhège zì ma?","Bạn biết viết chữ này không?"],
 ["我妈妈[会]做中国菜。","Wǒ māma huì zuò Zhōngguó cài.","Mẹ tôi biết nấu món Trung Quốc."],
 ["他病了，[不能]上课。","Tā bìng le, bù néng shàng kè.","Anh ấy ốm rồi, không lên lớp được."],
 ["你[能]不[能]帮我一下？","Nǐ néng bu néng bāng wǒ yíxià?","Bạn giúp tôi một chút được không?"]],
errs:[
 {bad:"我会中文说。", good:"我会说中文。", why:"会 + động từ + tân ngữ."},
 {bad:"我没会游泳。", good:"我不会游泳。", why:"Phủ định 会 / 能 bằng 不."},
 {bad:"明天你来能吗？", good:"明天你能来吗？", why:"能 đứng <b>trước</b> động từ, không đặt sau như “được”."},
 {bad:"我会他。", good:"我认识他。", why:"“Biết” một người là 认识."},
 {bad:"我知道游泳。", good:"我会游泳。", why:"“Biết” kỹ năng dùng 会, không dùng 知道."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi không biết lái xe.", o:["我没会开车。","我不会开车。","我会不开车。"], a:1, why:"不会 + động từ."},
  {q:"Ngày mai bạn đến được không?", o:["明天你能来吗？","明天你来能吗？","明天能你来吗？"], a:0, why:"Chủ ngữ + 能 + động từ."},
  {q:"Anh ấy biết nói tiếng Trung.", o:["他说会中文。","他知道说中文。","他会说中文。"], a:2, why:"Kỹ năng → 会."},
  {q:"Hôm nay tôi bận, không đi được.", o:["我今天很忙，不能去。","我今天很忙，去不能。","我今天很忙，能不去。"], a:0, why:"不能 + động từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","不会","说","中文"], a:"我不会说中文。", vi:"Tôi không biết nói tiếng Trung."},
  {w:["明天","你","能","来","吗"], a:"明天你能来吗？", alt:["你明天能来吗？"], vi:"Ngày mai bạn đến được không?"},
  {w:["他","会","写","汉字"], a:"他会写汉字。", vi:"Anh ấy biết viết chữ Hán."}]},
 {t:"C. Điền 会 hay 能", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我＿＿做饭，我妈妈教我的。", vi:"Tôi ＿＿ nấu cơm, mẹ tôi dạy tôi đấy.", a:"会", why:"Kỹ năng đã học."},
  {q:"今天下雨，我们不＿＿去公园。", vi:"Hôm nay trời mưa, chúng ta không ＿＿ đi công viên.", a:"能", why:"Điều kiện không cho phép."},
  {q:"你＿＿唱中文歌吗？", vi:"Bạn ＿＿ hát bài hát tiếng Trung không?", a:"会", why:"Kỹ năng."},
  {q:"我的手机没有电了，不＿＿打电话。", vi:"Điện thoại tôi hết pin rồi, không ＿＿ gọi điện.", a:"能", why:"Hoàn cảnh: hết pin."}]}],
rel:["一03","二01","二02","一14"]
};
