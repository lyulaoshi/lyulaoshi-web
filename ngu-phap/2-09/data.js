// Bài ngữ pháp 【二09】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二09", title:"数词：千、万、亿", vi:"Số lớn — nghìn, vạn (mười nghìn), trăm triệu", tag:"词类 · 数词",
goals:[
 "Đọc số đến hàng <b>千、万、亿</b>.",
 "Nhớ tiếng Trung đếm theo <b>vạn (10.000)</b>: 10 vạn = 100.000, 100 vạn = 1 triệu.",
 "Đọc <b>零</b> đúng chỗ khi giữa số có chữ số 0; lược đơn vị cuối."],
intro:"Tiếng Việt chia số theo nhóm 3 chữ số (nghìn, triệu, tỷ); tiếng Trung chia theo <b>nhóm 4 chữ số</b>: 万 (10⁴), 亿 (10⁸). 1.000.000 = 一百万.",
rules:[
 {t:"Hàng nghìn: 千", sub:"千", fx:[["số",""],["千",null],["số",""],["百…",""]], mean:"Đơn vị cuối có thể lược: 3500 = 三千五(百). Có 0 ở giữa đọc 零.",
  ex:[["一[千]三百五十二（1352）","yìqiān sānbǎi wǔshí'èr","1352","等级标准"],
      ["三[千]五（百）（3500）　三[千]零五十（3050）　三[千]零五（3005）","sānqiān wǔ(bǎi)　sānqiān líng wǔshí　sānqiān líng wǔ","3500　3050　3005","等级标准"]]},
 {t:"Hàng vạn: 万 (10.000)", sub:"万", fx:[["số",""],["万",null],["số",""],["千…",""]], mean:"两万 = 20.000; 五万六(千) = 56.000; 五万零六百 = 50.600.",
  ex:[["两[万]一千四百六十五（21465）","liǎngwàn yìqiān sìbǎi liùshíwǔ","21.465","等级标准"],
      ["五[万]六（千）（56000）　五[万]零六百（50600）　五[万]零六（50006）","wǔwàn liù(qiān)　wǔwàn líng liùbǎi　wǔwàn líng liù","56.000　50.600　50.006","等级标准"]]},
 {t:"Hàng trăm triệu: 亿", sub:"亿", fx:[["số",""],["亿",null],["số",""],["万…",""]], mean:"一亿 = 100.000.000 (một trăm triệu).",
  ex:[["四[亿]五千万（450000000）","sìyì wǔqiān wàn","450 triệu","等级标准"],
      ["四[亿]五千六百七十二万","sìyì wǔqiān liùbǎi qīshí'èr wàn","456.720.000","等级标准"]]}],
notes:[
 {t:"Quy đổi nhanh", html:"10 nghìn = 一万 · 100 nghìn = 十万 · 1 triệu = 一百万 · 10 triệu = 一千万 · 100 triệu = 一亿 · 1 tỷ = 十亿."},
 {t:"Nhiều số 0 liền nhau", html:"chỉ đọc một 零: 3005 = 三千零五."}],
cmp:[
 {vn:"một triệu", zh:"一百[万]", py:"yìbǎi wàn", ok:true, why:"Tiếng Trung không có đơn vị “triệu” riêng — 100 vạn."},
 {vn:"năm mươi nghìn", zh:"五[万]", py:"wǔwàn", ok:true, why:"50.000 = 5 vạn."}],
ex:[
 ["这个手机三[千]五。","Zhège shǒujī sānqiān wǔ.","Cái điện thoại này 3.500 (tệ)."],
 ["我们学校有一[万]多个学生。","Wǒmen xuéxiào yǒu yíwàn duō ge xuésheng.","Trường chúng tôi có hơn 10.000 học sinh."],
 ["中国有十四[亿]人。","Zhōngguó yǒu shísì yì rén.","Trung Quốc có 1,4 tỷ người."],
 ["这辆车二十[万]块。","Zhè liàng chē èrshí wàn kuài.","Chiếc xe này 200.000 tệ."]],
errs:[
 {bad:"一百千（= 100.000）", good:"十万", why:"Tiếng Trung đếm theo vạn."},
 {bad:"三千五（= 3050）", good:"三千零五十", why:"Có 0 ở giữa phải đọc 零; 三千五 là 3500."},
 {bad:"二万", good:"两万", why:"Đầu số trước 万、千 thường dùng 两."},
 {bad:"一千万（= 1 triệu）", good:"一百万", why:"1 triệu = 100 vạn; 一千万 = 10 triệu."}],
practice:[
 {t:"A. Chọn cách đọc đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"3050", o:["三千五","三千零五十","三千五十零"], a:1, why:"零 ở giữa."},
  {q:"100.000", o:["一百千","十万","一万"], a:1, why:"10 vạn."},
  {q:"1.000.000", o:["一百万","一千万","一万万"], a:0, why:"100 vạn."},
  {q:"20.000", o:["二万","两万","二十千"], a:1, why:"两万."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个","手机","三千五"], a:"这个手机三千五。", vi:"Cái điện thoại này 3.500 tệ."},
  {w:["中国","有","十四亿","人"], a:"中国有十四亿人。", vi:"Trung Quốc có 1,4 tỷ người."}]},
 {t:"C. Viết bằng chữ Hán", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"1352 · 3005", a:"一千三百五十二 · 三千零五"},
  {q:"21.465 · 56.000", a:"两万一千四百六十五 · 五万六（千）"},
  {q:"450.000.000", a:"四亿五千万"}]}],
rel:["一07","一43","二73","三74"]
};
