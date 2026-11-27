// Bài ngữ pháp 【新5.18】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.18", title:"助词：似的", vi:"似的 (shìde) — như là", tag:"词类 · 助词",
goals:[
 "Dùng <b>……似的</b> để so sánh ví von hoặc đoán theo vẻ ngoài.",
 "Đọc đúng <b>shìde</b>.",
 "Kết hợp với 像, 好像, 仿佛."],
intro:"似的 đứng <b>sau</b> hình ảnh đem ra ví: 像孩子<b>似的</b> = như trẻ con.",
rules:[
 {t:"像 / 好像 + N / cụm + 似的 (+ Adj / V)", sub:"（1）比喻", fx:[["像 / 好像",null],["hình ảnh",""],["似的",null],["Adj / V",""]], mean:"Như là …",
  ex:[["他高兴得{1|像}{2|个孩子}{3|似的}。","Tā gāoxìng de xiàng gè háizi shìde.","Anh ấy vui như một đứa trẻ."],
      ["外面的雨{1|像}{2|倒水}{3|似的}{4|下个不停}。","Wàimian de yǔ xiàng dào shuǐ shìde xià gè bù tíng.","Mưa bên ngoài như trút không ngớt."]]},
 {t:"S + 好像 + … + 似的", sub:"（2）推测", fx:[["S",""],["好像",null],["tình trạng",""],["似的",null]], mean:"Trông như thể …",
  ex:[["{1|他}{2|好像}{3|没睡醒}{4|似的}。","Tā hǎoxiàng méi shuìxǐng shìde.","Anh ấy trông như chưa tỉnh ngủ."]]}],
cmp:[
 {vn:"Cô ấy như không nghe thấy gì.", zh:"她好像什么也没听见[似的]。", py:"Tā hǎoxiàng shénme yě méi tīngjiàn shìde.", ok:true, why:"似的 đặt cuối cụm ví."}],
ex:[
 ["他像没事[似的]笑了笑。","Tā xiàng méi shì shìde xiàole xiào.","Anh ấy cười như không có chuyện gì."],
 ["今天热得跟夏天[似的]。","Jīntiān rè de gēn xiàtiān shìde.","Hôm nay nóng như mùa hè."],
 ["你看起来好像有心事[似的]。","Nǐ kàn qilai hǎoxiàng yǒu xīnshì shìde.","Trông bạn như có tâm sự."]],
errs:[
 {bad:"他像似的个孩子。", good:"他像个孩子似的。", why:"似的 đứng sau hình ảnh ví."},
 {bad:"他高兴得似的孩子。", good:"他高兴得像个孩子似的。", why:"Cần 像 trước hình ảnh."},
 {bad:"他像孩子是的。", good:"他像孩子似的。", why:"Viết 似的 (đọc shìde), không viết 是的."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy vui như một đứa trẻ.", o:["他高兴得像个孩子似的。","他高兴得似的像个孩子。"], a:0, why:"像……似的."},
  {q:"“似的” đọc là:", vi:"Chọn cách đọc.", o:["shìde","sìde","sìdì"], a:0, why:"Trợ từ đọc shìde."},
  {q:"他好像没睡醒＿。", vi:"Anh ấy như chưa tỉnh ngủ.", o:["似的","一样地","一旦"], a:0, why:"好像……似的."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","像","没事","似的","笑了笑"], a:"他像没事似的笑了笑。", vi:"Anh ấy cười như không có chuyện gì."},
  {w:["今天","热得","跟","夏天","似的"], a:"今天热得跟夏天似的。", vi:"Hôm nay nóng như mùa hè."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 似的)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy vui như một đứa trẻ.", a:"他高兴得像个孩子似的。/ 他像个孩子似的高兴。/ 他高兴得跟个孩子似的。"}]}],
rel:["二59","新5.10","三46"]
};
