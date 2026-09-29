// Bài ngữ pháp 【三58】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三58", title:"比较句4", vi:"Câu so sánh 4 — 比 với bổ ngữ trạng thái, 不比, 多 / 少 / 早 / 晚", tag:"句子的类型 · 特殊句型",
goals:[
 "So sánh hành động: <b>A 比 B + V得 + Adj</b> hoặc <b>A + V得 + 比 B + Adj</b>.",
 "Dùng <b>A 不比 B + Adj</b> (A không hơn B — khoảng bằng).",
 "So sánh số lượng: <b>A 比 B + 多 / 少 / 早 / 晚 + V + số lượng</b>."],
intro:"Bốn khung so sánh mở rộng của HSK 3, tiếp nối 【一38】【二58】【二59】.",
rules:[
 {t:"A 比 B + V得 + Adj · A + V得 + 比 B + Adj", sub:"（1）（3）", fx:[["A",""],["(比 B)",""],["V得",null],["(比 B)",""],["Adj",""]], mean:"比 B đứng trước hoặc sau V得 đều được.",
  ex:[["我比他跑[得快]。","Wǒ bǐ tā pǎo de kuài.","Tôi chạy nhanh hơn anh ấy.","等级标准"],
      ["我跑得[比他]快。","Wǒ pǎo de bǐ tā kuài.","Tôi chạy nhanh hơn anh ấy.","等级标准"],
      ["姐姐中文说得[比我]流利。","Jiějie Zhōngwén shuō de bǐ wǒ liúlì.","Chị nói tiếng Trung lưu loát hơn tôi.","等级标准"]]},
 {t:"A 不比 B + Adj", sub:"（2）", fx:[["A",""],["不比",null],["B",""],["Adj",""]], mean:"A không hơn B (khoảng bằng nhau, hoặc bác bỏ ý “A hơn B”).",
  ex:[["姐姐[不比]我高。","Jiějie bù bǐ wǒ gāo.","Chị không cao hơn tôi (cũng chỉ ngang tôi).","等级标准"],
      ["这个笔记本[不比]那个大。","Zhège bǐjìběn bù bǐ nàge dà.","Cuốn sổ này không to hơn cuốn kia.","等级标准"]]},
 {t:"A 比 B + 多 / 少 / 早 / 晚 + V + số lượng", sub:"（4）", fx:[["A 比 B",""],["多 / 少 / 早 / 晚",null],["V",""],["số lượng",""]], mean:"",
  ex:[["我比他[多]吃了五个饺子。","Wǒ bǐ tā duō chī le wǔ ge jiǎozi.","Tôi ăn nhiều hơn anh ấy năm cái sủi cảo.","等级标准"],
      ["我比姐姐[早]回来十分钟。","Wǒ bǐ jiějie zǎo huílai shí fēnzhōng.","Tôi về sớm hơn chị 10 phút.","等级标准"],
      ["哥哥昨天比前天[晚]睡半个小时。","Gēge zuótiān bǐ qiántiān wǎn shuì bàn ge xiǎoshí.","Hôm qua anh trai ngủ muộn hơn hôm kia nửa tiếng.","等级标准"]]}],
cmp:[
 {vn:"Tôi đến sớm hơn anh ấy 10 phút.", zh:"我比他[早]来十分钟。", py:"Wǒ bǐ tā zǎo lái shí fēnzhōng.", ok:true, why:"“sớm hơn” = 早 đứng trước động từ; số lượng sau động từ."},
 {vn:"Tôi chạy nhanh hơn anh ấy.", zh:"我跑得[比他]快。", py:"Wǒ pǎo de bǐ tā kuài.", ok:true, why:"Không nói <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg#sai'/></svg> 我跑快比他."}],
ex:[
 ["他比我少买一个苹果。","Tā bǐ wǒ shǎo mǎi yí ge píngguǒ.","Anh ấy mua ít hơn tôi một quả táo.","等级标准"],
 ["她唱歌唱得比我好。","Tā chàng gē chàng de bǐ wǒ hǎo.","Cô ấy hát hay hơn tôi."]],
errs:[
 {bad:"我跑快比他。", good:"我跑得比他快。/ 我比他跑得快。", why:"So sánh hành động dùng V得."},
 {bad:"我比他吃了多五个饺子。", good:"我比他多吃了五个饺子。", why:"多 đứng trước động từ."},
 {bad:"我比姐姐回来早十分钟。", good:"我比姐姐早回来十分钟。", why:"早 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi chạy nhanh hơn anh ấy.", o:["我跑快比他。","我跑得比他快。"], a:1, why:"V得 比 B Adj."},
  {q:"Tôi ăn nhiều hơn anh ấy năm cái.", o:["我比他多吃了五个。","我比他吃了多五个。"], a:0, why:"多 + V."},
  {q:"Tôi về sớm hơn chị 10 phút.", o:["我比姐姐早回来十分钟。","我比姐姐回来早十分钟。"], a:0, why:"早 + V + số lượng."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["姐姐","中文","说得","比我","流利"], a:"姐姐中文说得比我流利。", vi:"Chị nói tiếng Trung lưu loát hơn tôi."},
  {w:["这个笔记本","不比","那个","大"], a:"这个笔记本不比那个大。", vi:"Cuốn sổ này không to hơn cuốn kia."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cô ấy hát hay hơn tôi.", a:"她唱歌唱得比我好。/ 她唱得比我好。/ 她比我唱得好。"},
  {q:"Tôi đến sớm hơn anh ấy 10 phút.", a:"我比他早来十分钟。/ 我比他早到十分钟。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我跑得比他快。", vi:"Tôi chạy nhanh hơn anh ấy.", o:["Đúng","Sai"], a:0, why:"V得 + 比 B + Adj."},
  {q:"我比他跑快。", vi:"Tôi chạy nhanh hơn anh ấy.", o:["Đúng","Sai"], a:1, why:"Cần 得: 我比他跑得快。"},
  {q:"我比他多吃了两个饺子。", vi:"Tôi ăn nhiều hơn anh ấy hai cái sủi cảo.", o:["Đúng","Sai"], a:0, why:"比 B + 多 + V + số lượng."},
  {q:"我比姐姐回来早十分钟。", vi:"Tôi về sớm hơn chị 10 phút.", o:["Đúng","Sai"], a:1, why:"早 đứng trước động từ: 我比姐姐早回来十分钟。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy nói tiếng Trung lưu loát hơn tôi.", o:["她说中文说得比我流利。", "她说中文比我说流利。"], a:0, why:"V得 + 比 B + Adj."},
  {q:"Tôi đến sớm hơn anh ấy 5 phút.", o:["我比他早来五分钟。", "我比他来早五分钟。"], a:0, why:"早 + V + số lượng."},
  {q:"Chị không cao hơn tôi (cũng xêm xêm).", o:["姐姐不比我高。", "姐姐比我不高。"], a:0, why:"A 不比 B + Adj."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy chạy nhanh hơn tôi.", a:"他跑得比我快。/ 他比我跑得快。"},
  {q:"Tôi mua nhiều hơn bạn hai quả táo.", a:"我比你多买了两个苹果。/ 我比你多买两个苹果。"},
  {q:"Hôm nay tôi dậy muộn hơn hôm qua nửa tiếng.", a:"今天我比昨天晚起了半个小时。/ 我今天比昨天晚起了半个小时。/ 今天我比昨天晚起半个小时。/ 我今天比昨天晚起半个小时。"}]}],
rel:["一38","二58","二51","二59"]
};
