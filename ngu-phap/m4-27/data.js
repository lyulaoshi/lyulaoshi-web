// Bài ngữ pháp 【新4.27】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.27", title:"不怎么", vi:"不怎么 — không … lắm", tag:"短语 · 固定短语",
goals:[
 "Nói <b>không … lắm</b> bằng 不怎么 + tính từ / động từ chỉ tâm lý.",
 "Nói <b>ít khi làm</b> bằng 不怎么 + động từ.",
 "So sánh mức độ với 不 và 不太."],
intro:"不怎么 làm câu phủ định <b>nhẹ đi</b>: 不喜欢 (không thích) → <b>不怎么</b>喜欢 (không thích lắm).",
rules:[
 {t:"S + 不怎么 + Adj / V tâm lý", sub:"（1）mức độ", fx:[["S",""],["不怎么",null],["Adj / 喜欢",""]], mean:"Không … lắm.",
  ex:[["{1|今天}{2|不怎么}{3|冷}。","Jīntiān bù zěnme lěng.","Hôm nay không lạnh lắm."],
      ["{1|我}{2|不怎么}{3|喜欢喝咖啡}。","Wǒ bù zěnme xǐhuan hē kāfēi.","Tôi không thích uống cà phê lắm."]]},
 {t:"S + 不怎么 + V", sub:"（2）tần suất", fx:[["S",""],["不怎么",null],["V",""]], mean:"Ít khi làm.",
  ex:[["{1|他}{2|不怎么}{3|看电视}。","Tā bù zěnme kàn diànshì.","Anh ấy ít khi xem ti vi."]]}],
notes:[{t:"Dạng 没怎么", html:"Việc đã qua dùng <span class='zh'>没怎么</span>: <span class='zh'>昨晚我没怎么睡。</span> = tối qua tôi hầu như không ngủ được mấy."}],
cmp:[
 {vn:"Món này không ngon lắm.", zh:"这个菜[不怎么]好吃。", py:"Zhège cài bù zěnme hǎochī.", ok:true, why:"“không … lắm” → 不怎么 đặt trước tính từ."}],
ex:[
 ["我跟他[不怎么]熟。","Wǒ gēn tā bù zěnme shú.","Tôi không thân với anh ấy lắm."],
 ["最近我[不怎么]忙。","Zuìjìn wǒ bù zěnme máng.","Dạo này tôi không bận lắm."],
 ["他平时[不怎么]说话。","Tā píngshí bù zěnme shuōhuà.","Bình thường anh ấy ít nói."]],
errs:[
 {bad:"今天不怎么很冷。", good:"今天不怎么冷。", why:"不怎么 đã chỉ mức độ, không thêm 很."},
 {bad:"今天冷不怎么。", good:"今天不怎么冷。", why:"不怎么 đứng trước tính từ."},
 {bad:"昨天我不怎么睡觉。", good:"昨天我没怎么睡觉。", why:"Việc đã qua dùng 没怎么."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay không lạnh lắm.", o:["今天不怎么冷。","今天冷不怎么。","今天不怎么很冷。"], a:0, why:"不怎么 + Adj."},
  {q:"Tối qua tôi không ngủ được mấy.", o:["昨晚我不怎么睡。","昨晚我没怎么睡。"], a:1, why:"Quá khứ → 没怎么."},
  {q:"Mức nào nhẹ hơn?", o:["我不喜欢他。","我不怎么喜欢他。"], a:1, why:"不怎么 làm phủ định nhẹ đi."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","不怎么","喜欢","喝","咖啡"], a:"我不怎么喜欢喝咖啡。", vi:"Tôi không thích uống cà phê lắm."},
  {w:["我","跟","他","不怎么","熟"], a:"我跟他不怎么熟。", vi:"Tôi không thân với anh ấy lắm."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 不怎么)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Món này không ngon lắm.", a:"这个菜不怎么好吃。"},
  {q:"Anh ấy ít khi xem ti vi.", a:"他不怎么看电视。"}]}],
rel:["一14","一09","新4.34"]
};
