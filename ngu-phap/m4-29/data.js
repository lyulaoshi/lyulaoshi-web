// Bài ngữ pháp 【新4.29】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.29", title:"一＋量词＋比＋一＋量词", vi:"一天比一天 — ngày càng", tag:"短语 · 固定格式",
goals:[
 "Nói sự thay đổi tăng dần theo thời gian: <b>一天比一天</b>, <b>一年比一年</b>.",
 "So sánh lần lượt: <b>一个比一个</b> — người sau hơn người trước.",
 "Không thêm 很, 非常 sau cụm này."],
intro:"“<b>Ngày càng</b> nóng” = 一天比一天热. Lấy cùng một lượng từ lặp lại hai bên 比.",
rules:[
 {t:"S + 一天 / 一年 比 一天 / 一年 + Adj", sub:"（1）theo thời gian", fx:[["S",""],["一 + 天",null],["比",null],["一 + 天",null],["Adj",""]], mean:"Càng ngày càng …",
  ex:[["{1|天气}{2|一天}{3|比}{4|一天}{5|热}。","Tiānqì yì tiān bǐ yì tiān rè.","Trời ngày càng nóng."],
      ["{1|我们的生活}{2|一年}{3|比}{4|一年}{5|好}。","Wǒmen de shēnghuó yì nián bǐ yì nián hǎo.","Cuộc sống của chúng tôi mỗi năm một tốt hơn."]]},
 {t:"N + 一个 比 一个 + Adj", sub:"（2）lần lượt", fx:[["N",""],["一个",null],["比",null],["一个",null],["Adj",""]], mean:"Cái sau hơn cái trước.",
  ex:[["{1|他的孩子}{2|一个}{3|比}{4|一个}{5|高}。","Tā de háizi yí gè bǐ yí gè gāo.","Con anh ấy đứa sau cao hơn đứa trước."]]}],
cmp:[
 {vn:"Tiếng Trung của bạn ngày càng giỏi.", zh:"你的汉语[一天比一天]好。", py:"Nǐ de Hànyǔ yì tiān bǐ yì tiān hǎo.", ok:true, why:"Cũng có thể nói 越来越好."}],
ex:[
 ["物价[一年比一年]高。","Wùjià yì nián bǐ yì nián gāo.","Giá cả mỗi năm một cao."],
 ["这几次考试的题[一次比一次]难。","Zhè jǐ cì kǎoshì de tí yí cì bǐ yí cì nán.","Đề thi mấy lần này lần sau khó hơn lần trước."],
 ["他们[一个比一个]跑得快。","Tāmen yí gè bǐ yí gè pǎo de kuài.","Họ người sau chạy nhanh hơn người trước."]],
errs:[
 {bad:"天气一天比一天很热。", good:"天气一天比一天热。", why:"Câu so sánh không dùng 很."},
 {bad:"天气比一天一天热。", good:"天气一天比一天热。", why:"比 nằm giữa hai cụm 一天."},
 {bad:"物价一年比一个年高。", good:"物价一年比一年高。", why:"年, 天 là lượng từ, không thêm 个."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trời ngày càng lạnh.", o:["天气一天比一天冷。","天气比一天一天冷。","天气一天比一天很冷。"], a:0, why:"一天比一天 + Adj."},
  {q:"考试一次比一次＿。", vi:"Thi lần sau khó hơn lần trước.", o:["难","很难","太难了"], a:0, why:"Không thêm 很 / 太."},
  {q:"物价一年比＿高。", vi:"Giá cả mỗi năm một cao.", o:["一年","年","一个年"], a:0, why:"Lặp lại 一年."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们的生活","一年","比","一年","好"], a:"我们的生活一年比一年好。", vi:"Cuộc sống của chúng tôi mỗi năm một tốt hơn."},
  {w:["他的孩子","一个","比","一个","高"], a:"他的孩子一个比一个高。", vi:"Con anh ấy đứa sau cao hơn đứa trước."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Trời ngày càng nóng (dùng 一天比一天).", a:"天气一天比一天热。/ 天一天比一天热。/ 天气一天比一天热了。"},
  {q:"Đề thi lần sau khó hơn lần trước.", a:"考试题一次比一次难。/ 考试的题一次比一次难。"}]}],
rel:["二44","三42","一38"]
};
