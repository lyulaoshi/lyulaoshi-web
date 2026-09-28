// Bài ngữ pháp 【三10】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三10", title:"动量词：顿、口、眼", vi:"Lượng từ động tác 顿, 口, 眼 — trận, ngụm, cái (nhìn)", tag:"词类 · 量词",
goals:[
 "Dùng <b>顿</b> cho bữa ăn, trận mắng; <b>口</b> cho ngụm, miếng; <b>眼</b> cho cái nhìn.",
 "Đặt <b>động từ + số + 顿 / 口 / 眼</b>.",
 "Dùng 一眼、一口 cho hành động nhanh, ít."],
intro:"Ba lượng từ động tác này mượn danh từ chỉ <b>bộ phận / dụng cụ</b> của hành động: 口 (miệng), 眼 (mắt).",
rules:[
 {t:"V + số + 顿 / 口 / 眼", sub:"动量词", fx:[["Động từ",""],["Số",""],["顿 / 口 / 眼",null]], mean:"批评一顿 mắng một trận · 喝一口 uống một ngụm · 看一眼 nhìn một cái.",
  ex:[["批评一[顿]　喝一[口]　看一[眼]","pīpíng yí dùn　hē yì kǒu　kàn yì yǎn","mắng một trận　uống một ngụm　nhìn một cái","等级标准"]]}],
notes:[{t:"顿 cho bữa ăn", html:"<span class='zh'>一天吃三顿饭</span> (một ngày ăn ba bữa) — ở đây 顿 là lượng từ danh từ."}],
cmp:[
 {vn:"Bạn nếm thử một miếng đi.", zh:"你尝一[口]吧。", py:"Nǐ cháng yì kǒu ba.", ok:true, why:"“một miếng” sau động từ."},
 {vn:"Anh ấy nhìn tôi một cái.", zh:"他看了我一[眼]。", py:"Tā kàn le wǒ yì yǎn.", ok:true, why:"Người (tân ngữ đại từ) đứng trước 一眼."}],
ex:[
 ["妈妈把我批评了一[顿]。","Māma bǎ wǒ pīpíng le yí dùn.","Mẹ mắng tôi một trận."],
 ["我只喝了一[口]咖啡。","Wǒ zhǐ hē le yì kǒu kāfēi.","Tôi chỉ uống một ngụm cà phê."],
 ["他看了一[眼]手机。","Tā kàn le yì yǎn shǒujī.","Anh ấy liếc nhìn điện thoại một cái."]],
errs:[
 {bad:"我一口喝了。", good:"我喝了一口。", why:"Số lần sau động từ."},
 {bad:"他看了一眼我。", good:"他看了我一眼。", why:"Tân ngữ là đại từ chỉ người đứng trước 一眼."}],
practice:[
 {t:"A. Chọn lượng từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"喝一＿水", vi:"uống một ＿ nước", o:["口","眼","顿"], a:0, why:"Ngụm → 口."},
  {q:"看一＿", vi:"nhìn một ＿", o:["口","眼","顿"], a:1, why:"Cái nhìn → 眼."},
  {q:"批评一＿", vi:"mắng một ＿", o:["口","眼","顿"], a:2, why:"Trận → 顿."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","看了","我","一眼"], a:"他看了我一眼。", vi:"Anh ấy nhìn tôi một cái."},
  {w:["我","只","喝了","一口","咖啡"], a:"我只喝了一口咖啡。", vi:"Tôi chỉ uống một ngụm cà phê."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bạn nếm thử một miếng đi.", a:"你尝一口吧。"},
  {q:"Một ngày tôi ăn ba bữa.", a:"我一天吃三顿饭。"}]}],
rel:["二11","三09","二52","三50"]
};
