// Bài ngữ pháp 【一07】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一07", title:"数词", vi:"Số từ — 零 đến 百, 二 và 两, 半", tag:"词类 · 数词",
goals:[
 "Đọc, viết số đến hàng trăm; biết đọc <b>零</b> khi giữa số có chữ số 0.",
 "Phân biệt <b>二</b> (đếm, số thứ tự) và <b>两</b> (trước lượng từ).",
 "Dùng <b>半</b>: 八点半, 半个小时."],
intro:"Cách ghép số của tiếng Trung rất giống tiếng Việt: 十五 = mười lăm, 二十 = hai mươi. Chỉ cần nhớ vài điểm khác: 零, 两, 半.",
rules:[
 {t:"Ghép số", sub:"十、百", fx:[["số","2–9"],["十 / 百",null],["số lẻ",""]], mean:"十五 (15) · 二十 (20) · 一百一十五 (115). Số trăm tròn chục có thể bỏ 十 cuối: 二百六(十) = 260.",
  ex:[["五　[十]五　一[百]一[十]五","wǔ　shíwǔ　yìbǎi yīshíwǔ","5　15　115","等级标准"],
      ["十二　二十　二[百]","shí'èr　èrshí　èrbǎi","12　20　200","等级标准"]]},
 {t:"Số 0 ở giữa đọc 零", sub:"零", fx:[["百","hàng trăm"],["零",null],["số lẻ",""]], mean:"206 = 二百<b>零</b>六 (“hai trăm linh sáu”). Còn 二百六 = 260.",
  ex:[["二百六（十）　二百[零]六","èrbǎi liù(shí)　èrbǎi líng liù","260　206","等级标准"]]},
 {t:"二 hay 两?", sub:"二 · 两", fx:[["两",null],["Lượng từ","个、本…"],["Danh từ",""]], mean:"<b>两</b> đứng trước lượng từ (hai cái, hai quyển); <b>二</b> dùng khi đếm, số thứ tự, trong số nhiều chữ số (十二, 二十, 第二). Hàng trăm nói được cả 二百 / 两百.",
  ex:[["[两]个人　[两]本书","liǎng ge rén　liǎng běn shū","hai người　hai quyển sách","等级标准"],
      ["二百 = [两]百","èrbǎi = liǎngbǎi","200","等级标准"]]},
 {t:"半: một nửa", sub:"半", fx:[["半",null],["Lượng từ",""],["Danh từ",""]], mean:"半 + lượng từ + N (半个小时 = nửa tiếng); số + 点 + 半 (八点半 = 8 giờ rưỡi).",
  ex:[["八点[半]","bā diǎn bàn","tám giờ rưỡi","等级标准"],
      ["[半]个小时","bàn ge xiǎoshí","nửa tiếng","等级标准"]]}],
notes:[
 {t:"Biến điệu của 一", html:"一 đứng trước thanh 4 đọc <b>yí</b> (一个 yí ge), trước thanh 1, 2, 3 đọc <b>yì</b> (一百 yìbǎi); khi đếm số đọc <b>yī</b>."}],
cmp:[
 {vn:"hai quyển sách", zh:"[两]本书", py:"liǎng běn shū", ok:true, why:"Trước lượng từ dùng 两, không dùng 二."},
 {vn:"hai trăm linh sáu", zh:"二百[零]六", py:"èrbǎi líng liù", ok:true, why:"“linh / lẻ” = 零."},
 {vn:"nửa tiếng", zh:"[半]个小时", py:"bàn ge xiǎoshí", ok:true, why:"半 đứng trước lượng từ."}],
ex:[
 ["我们班有[二十]个学生。","Wǒmen bān yǒu èrshí ge xuésheng.","Lớp chúng tôi có 20 học sinh."],
 ["我要[两]杯茶。","Wǒ yào liǎng bēi chá.","Tôi muốn hai cốc trà."],
 ["他[十二]岁。","Tā shí'èr suì.","Cậu ấy 12 tuổi."],
 ["这本书一[百]零八页。","Zhè běn shū yìbǎi líng bā yè.","Quyển sách này có 108 trang."],
 ["我等了[半]个小时。","Wǒ děng le bàn ge xiǎoshí.","Tôi đã đợi nửa tiếng."]],
errs:[
 {bad:"我有二本书。", good:"我有两本书。", why:"Trước lượng từ dùng 两."},
 {bad:"二百六（= 206）", good:"二百零六", why:"Có số 0 ở giữa phải đọc 零; 二百六 là 260."},
 {bad:"一十二", good:"十二", why:"Số 10–19 bắt đầu bằng 十, không có 一 ở đầu."},
 {bad:"一个小时半", good:"一个半小时", why:"半 đứng ngay sau lượng từ: 一个半小时 = một tiếng rưỡi."},
 {bad:"半小时一个", good:"半个小时", why:"半 + lượng từ + danh từ."}],
practice:[
 {t:"A. Chọn cách viết đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"hai người", o:["二个人","两个人","两人个"], a:1, why:"两 + lượng từ."},
  {q:"206", o:["二百六","二百零六","两零六"], a:1, why:"Có 0 ở giữa → 零."},
  {q:"12", o:["一十二","十二","二十"], a:1, why:"十 + 二."},
  {q:"8 giờ rưỡi", o:["八半点","半八点","八点半"], a:2, why:"số + 点 + 半."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","要","两","杯","茶"], a:"我要两杯茶。", vi:"Tôi muốn hai cốc trà."},
  {w:["我","等","了","半个","小时"], a:"我等了半个小时。", vi:"Tôi đã đợi nửa tiếng."},
  {w:["我们","班","有","二十个","学生"], a:"我们班有二十个学生。", vi:"Lớp chúng tôi có 20 học sinh."}]},
 {t:"C. Viết bằng chữ Hán", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"15 · 99 · 100", a:"十五 · 九十九 · 一百"},
  {q:"260 · 206", a:"二百六（十） · 二百零六"},
  {q:"2 quyển sách · 2 giờ", a:"两本书 · 两点"}]}],
rel:["一08","一23","一43","一44"]
};
