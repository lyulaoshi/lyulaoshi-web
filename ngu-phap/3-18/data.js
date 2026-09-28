// Bài ngữ pháp 【三18】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三18", title:"情态副词：大概、恐怕", vi:"Phó từ tình thái 大概, 恐怕 — có lẽ, e rằng", tag:"词类 · 副词",
goals:[
 "Dùng <b>大概</b> (có lẽ, khoảng) để phỏng đoán.",
 "Dùng <b>恐怕</b> (e rằng) khi phỏng đoán điều <b>không mong muốn</b>.",
 "Dùng 大概 trước số lượng nghĩa “khoảng”."],
intro:"Hai phó từ phỏng đoán. <b>恐怕</b> mang sắc thái lo ngại, thường đi với tin không tốt.",
rules:[
 {t:"大概 / 恐怕 + V / số lượng", sub:"推测", fx:[["(S)",""],["大概 / 恐怕",null],["Động từ / số lượng",""]], mean:"",
  ex:[["他病了，今天[大概]不会来上课了。","Tā bìng le, jīntiān dàgài bú huì lái shàng kè le.","Anh ấy ốm rồi, hôm nay có lẽ sẽ không đến lớp.","等级标准"],
      ["天这么阴，[大概]要下雨。","Tiān zhème yīn, dàgài yào xià yǔ.","Trời âm u thế này, có lẽ sắp mưa.","等级标准"],
      ["我头有点儿疼，[恐怕]是感冒了。","Wǒ tóu yǒudiǎnr téng, kǒngpà shì gǎnmào le.","Tôi hơi đau đầu, e là bị cảm rồi.","等级标准"],
      ["他出国[恐怕]已经有三年多了吧。","Tā chū guó kǒngpà yǐjīng yǒu sān nián duō le ba.","Anh ấy ra nước ngoài e rằng đã hơn ba năm rồi.","等级标准"]]}],
cmp:[
 {vn:"E là không kịp rồi.", zh:"[恐怕]来不及了。", py:"Kǒngpà láibují le.", ok:true, why:"Điều không mong muốn → 恐怕."},
 {vn:"Có lẽ khoảng 50 người.", zh:"[大概]有五十个人。", py:"Dàgài yǒu wǔshí ge rén.", ok:true, why:"大概 + số lượng = khoảng."}],
ex:[
 ["从这儿到机场[大概]要一个小时。","Cóng zhèr dào jīchǎng dàgài yào yí ge xiǎoshí.","Từ đây ra sân bay mất khoảng một tiếng."],
 ["[恐怕]他不会同意。","Kǒngpà tā bú huì tóngyì.","E rằng anh ấy sẽ không đồng ý."]],
errs:[
 {bad:"恐怕明天是好天气。", good:"明天大概是好天气。", why:"Tin tốt không dùng 恐怕."},
 {bad:"他不会大概来。", good:"他大概不会来。", why:"大概 đứng trước 不."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"天这么阴，＿＿要下雨。", vi:"Trời âm u thế này, ＿＿ sắp mưa.", o:["大概","恐怕"], a:0, why:"Phỏng đoán trung tính."},
  {q:"明天＿＿是好天气，我们去爬山吧。", vi:"Mai ＿＿ trời đẹp, chúng mình đi leo núi nhé.", o:["大概","恐怕"], a:0, why:"Tin tốt không dùng 恐怕."},
  {q:"Anh ấy có lẽ sẽ không đến.", o:["他不会大概来。","他大概不会来。"], a:1, why:"大概 + 不会."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","今天","大概","不会","来了"], a:"他今天大概不会来了。", vi:"Hôm nay có lẽ anh ấy sẽ không đến."},
  {w:["我","恐怕","是","感冒了"], a:"我恐怕是感冒了。", vi:"E là tôi bị cảm rồi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Ra sân bay mất khoảng một tiếng.", a:"去机场大概要一个小时。/ 到机场大概要一个小时。"},
  {q:"E rằng anh ấy sẽ không đồng ý.", a:"恐怕他不会同意。/ 他恐怕不会同意。"}]}],
rel:["二19","二01","三74","二79"]
};
