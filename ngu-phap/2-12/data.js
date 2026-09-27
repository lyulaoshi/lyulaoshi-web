// Bài ngữ pháp 【二12】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二12", title:"时量词：分钟、年、天、周", vi:"Lượng từ thời gian — phút, năm, ngày, tuần", tag:"词类 · 量词",
goals:[
 "Nói <b>khoảng thời gian</b>: 十分钟、两年、五天、三周.",
 "Biết 年、天、周 đứng thẳng sau số, không thêm 个; còn 小时、星期、月 thường cần 个.",
 "Phân biệt thời điểm (两点) với thời lượng (两个小时 / 两分钟)."],
intro:"Các từ 分钟、年、天、周 tự là lượng từ, nên <b>số + 年 / 天 / 周 / 分钟</b> — không chen 个.",
rules:[
 {t:"Số + 分钟 / 年 / 天 / 周", sub:"时量", fx:[["Số",""],["分钟 / 年 / 天 / 周",null]], mean:"Chỉ độ dài thời gian.",
  ex:[["十[分钟]　两[年]　五[天]　三[周]","shí fēnzhōng　liǎng nián　wǔ tiān　sān zhōu","10 phút　2 năm　5 ngày　3 tuần","等级标准"]]},
 {t:"So sánh: cần 个", sub:"个小时 · 个星期 · 个月", fx:[["Số",""],["个",null],["小时 / 星期 / 月",""]], mean:"两个小时 (2 tiếng), 三个星期 (3 tuần), 一个月 (1 tháng).",
  ex:[["我学了两个小时。","Wǒ xué le liǎng ge xiǎoshí.","Tôi học hai tiếng."],
      ["他在北京住了一个月。","Tā zài Běijīng zhù le yí ge yuè.","Anh ấy sống ở Bắc Kinh một tháng."]]}],
notes:[
 {t:"Thời lượng đứng sau động từ", html:"<span class='zh'>我等了十分钟。</span> — xem 【三51】 (bổ ngữ thời lượng)."},
 {t:"Thời điểm ≠ thời lượng", html:"<span class='zh'>两点</span> = 2 giờ (thời điểm); <span class='zh'>两个小时</span> = 2 tiếng (thời lượng)."}],
cmp:[
 {vn:"hai năm", zh:"两[年]", py:"liǎng nián", ok:true, why:"Không có 个."},
 {vn:"hai tiếng", zh:"两[个]小时", py:"liǎng ge xiǎoshí", ok:true, why:"小时 cần 个."},
 {vn:"Tôi đợi 10 phút.", zh:"我等了十[分钟]。", py:"Wǒ děng le shí fēnzhōng.", ok:true, why:"Thời lượng sau động từ — giống tiếng Việt."}],
ex:[
 ["我学中文学了两[年]。","Wǒ xué Zhōngwén xué le liǎng nián.","Tôi học tiếng Trung hai năm rồi."],
 ["我们休息十[分钟]吧。","Wǒmen xiūxi shí fēnzhōng ba.","Chúng mình nghỉ 10 phút nhé."],
 ["他病了三[天]。","Tā bìng le sān tiān.","Anh ấy ốm ba ngày."],
 ["这门课要上八[周]。","Zhè mén kè yào shàng bā zhōu.","Môn này học tám tuần."]],
errs:[
 {bad:"两个年", good:"两年", why:"年 không có 个."},
 {bad:"三个天", good:"三天", why:"天 không có 个."},
 {bad:"两小时（thiếu 个 khi nói）", good:"两个小时", why:"小时 thường cần 个."},
 {bad:"我十分钟等了。", good:"我等了十分钟。", why:"Thời lượng sau động từ."}],
practice:[
 {t:"A. Chọn cách nói đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"hai năm", o:["两个年","两年","二年个"], a:1, why:"Không 个."},
  {q:"ba tiếng", o:["三小时个","三个小时","三点"], a:1, why:"个小时."},
  {q:"Tôi đợi 10 phút.", o:["我等了十分钟。","我十分钟等了。","我等了十点。"], a:0, why:"V + thời lượng."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","休息","十分钟","吧"], a:"我们休息十分钟吧。", vi:"Chúng mình nghỉ 10 phút nhé."},
  {w:["他","病","了","三天"], a:"他病了三天。", vi:"Anh ấy ốm ba ngày."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"năm ngày · ba tuần", a:"五天 · 三周（三个星期）"},
  {q:"Tôi học tiếng Trung hai năm rồi.", a:"我学中文学了两年了。"},
  {q:"Anh ấy ở Bắc Kinh một tháng.", a:"他在北京住了一个月。"}]}],
rel:["二11","三51","一44","二52"]
};
