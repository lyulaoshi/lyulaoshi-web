// Bài ngữ pháp 【新4.67】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.67", title:"小数、分数、百分数、倍数的表示法", vi:"Số thập phân, phân số, phần trăm, bội số", tag:"特殊表达法 · 数的表示法",
goals:[
 "Đọc <b>số thập phân</b> (点) và <b>phần trăm</b> (百分之).",
 "Đọc <b>phân số</b> theo thứ tự <b>mẫu trước, tử sau</b>.",
 "Nói <b>gấp mấy lần</b> (倍) và 增加了 / 增加到."],
intro:"Ngược tiếng Việt: “<b>hai phần ba</b>” tiếng Trung nói “<b>ba phần chi hai</b>”: <b>三</b>分之<b>二</b>. 30% = 百分之三十.",
rules:[
 {t:"Phần nguyên + 点 + từng chữ số", sub:"（1）小数", fx:[["phần nguyên",""],["点",null],["đọc từng số",""]], mean:"3.14 = 三点一四 · 0.5 = 零点五.",
  ex:[["他的身高是{1|一}{2|点}{3|七五}米。","Tā de shēngāo shì yì diǎn qī wǔ mǐ.","Anh ấy cao 1,75 mét."]]},
 {t:"Mẫu số + 分之 + tử số", sub:"（2）分数、百分数", fx:[["mẫu số",""],["分之",null],["tử số",""]], mean:"2/3 = 三分之二 · 30% = 百分之三十 · 100% = 百分之百.",
  ex:[["我们班{1|三}{2|分之}{3|二}的学生是女生。","Wǒmen bān sān fēnzhī èr de xuésheng shì nǚshēng.","Hai phần ba học sinh lớp tôi là nữ."],
      ["{1|百}{2|分之}{3|八十}的人同意。","Bǎi fēnzhī bāshí de rén tóngyì.","80% số người đồng ý."]]},
 {t:"A + 是 + B + 的 + số + 倍", sub:"（3）倍数", fx:[["A",""],["是",null],["B",""],["的",null],["số + 倍",""]], mean:"A gấp B mấy lần.",
  ex:[["{1|今年的人数}{2|是}{3|去年}{4|的}{5|两倍}。","Jīnnián de rénshù shì qùnián de liǎng bèi.","Số người năm nay gấp đôi năm ngoái."]]}],
notes:[
 {t:"增加了 và 增加到", html:"Từ 100 lên 300: <span class='zh'>增加了两倍</span> (phần tăng thêm) = <span class='zh'>增加到三倍</span> (tổng đạt tới)."},
 {t:"Giảm", html:"Giảm dùng phần trăm / phân số: <span class='zh'>减少了百分之十</span>; không nói giảm mấy 倍."}],
cmp:[
 {vn:"một phần tư", zh:"[四]分之[一]", py:"sì fēnzhī yī", ok:true, why:"Mẫu số 4 đọc trước."},
 {vn:"năm mươi phần trăm", zh:"[百分之]五十", py:"bǎi fēnzhī wǔshí", ok:true, why:"百分之 đứng trước con số."}],
ex:[
 ["这件衣服打八折，便宜了[百分之二十]。","Zhè jiàn yīfu dǎ bā zhé, piányile bǎi fēnzhī èrshí.","Áo này giảm còn 80%, rẻ đi 20%."],
 ["今天最高气温是[三十六点五]度。","Jīntiān zuì gāo qìwēn shì sānshíliù diǎn wǔ dù.","Nhiệt độ cao nhất hôm nay là 36,5 độ."],
 ["他一个月的工资是我的[三倍]。","Tā yí gè yuè de gōngzī shì wǒ de sān bèi.","Lương tháng của anh ấy gấp ba lương tôi."],
 ["公司的收入增加了[百分之十五]。","Gōngsī de shōurù zēngjiāle bǎi fēnzhī shíwǔ.","Thu nhập công ty tăng 15%."]],
errs:[
 {bad:"二分之三（muốn nói 2/3）", good:"三分之二", why:"Mẫu số đọc trước."},
 {bad:"八十百分之", good:"百分之八十", why:"百分之 đứng trước số."},
 {bad:"三点十四（đọc 3.14）", good:"三点一四", why:"Sau 点 đọc từng chữ số."},
 {bad:"人数减少了两倍。", good:"人数减少了一半。", why:"Giảm không dùng 倍."}],
practice:[
 {t:"A. Chọn cách đọc đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"3/4", o:["三分之四","四分之三","四三分之"], a:1, why:"Mẫu trước: 四分之三."},
  {q:"25%", o:["百分之二十五","二十五百分","分之百二十五"], a:0, why:"百分之 + số."},
  {q:"6.08", o:["六点八","六点零八","六零点八"], a:1, why:"Đọc từng chữ số sau 点."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["今年的人数","是","去年","的","两倍"], a:"今年的人数是去年的两倍。", vi:"Số người năm nay gấp đôi năm ngoái."},
  {w:["百分之","八十","的人","同意"], a:"百分之八十的人同意。", vi:"80% số người đồng ý."}]},
 {t:"C. Viết bằng chữ Hán", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"2/5", a:"五分之二"},
  {q:"100%", a:"百分之百 / 百分之一百"},
  {q:"1,75 mét", a:"一点七五米"}]},
 {t:"D. Đúng hay sai?", sub:"cách nói này đúng hay sai", type:"choice", items:[
  {q:"一半就是百分之五十。", vi:"Một nửa là 50%.", o:["Đúng","Sai"], a:0, why:"50% = 一半."},
  {q:"从十个人增加到三十个人，增加了三倍。", vi:"Từ 10 lên 30 người.", o:["Đúng","Sai"], a:1, why:"Tăng thêm 20 người = 增加了两倍 (增加到三倍)."},
  {q:"零点五和二分之一一样大。", vi:"0,5 và 1/2 bằng nhau.", o:["Đúng","Sai"], a:0, why:"Giá trị bằng nhau."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我们班三分＿一的人会游泳。", vi:"Một phần ba lớp tôi biết bơi.", o:["之","的","点"], a:0, why:"分之."},
  {q:"今年的收入是去年的三＿。", vi:"Thu nhập năm nay gấp ba năm ngoái.", o:["倍","次","遍"], a:0, why:"倍 = lần (bội số)."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hai phần ba học sinh lớp tôi là nữ.", a:"我们班三分之二的学生是女生。/ 我们班三分之二的学生是女的。/ 我们班的学生三分之二是女生。"},
  {q:"Lương của anh ấy gấp ba lương tôi.", a:"他的工资是我的三倍。"}]}],
rel:["一07","二09","一38"]
};
