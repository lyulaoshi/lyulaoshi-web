// Bài ngữ pháp 【一44】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一44", title:"时间表示法", vi:"Cách nói thời gian — ngày tháng năm, thứ, giờ", tag:"特殊表达法 · 时间表示法",
goals:[
 "Nói ngày tháng theo thứ tự <b>năm → tháng → ngày → thứ</b> (lớn trước, nhỏ sau).",
 "Nói giờ bằng <b>点、分、半、差</b>.",
 "Đặt thời gian <b>trước động từ</b> trong câu."],
intro:"Tiếng Việt nói từ nhỏ đến lớn (<i>thứ Hai, ngày 25 tháng 12 năm 2020</i>). Tiếng Trung ngược lại: <b>từ lớn đến nhỏ</b>.",
rules:[
 {t:"Năm · tháng · ngày · thứ", sub:"年、月、日、星期", fx:[["…年",null],["…月",null],["…日 / 号",null],["星期…",null]], mean:"Năm đọc từng chữ số: 2020 = 二〇二〇 èr líng èr líng. 日 (viết) = 号 (nói).",
  ex:[["2020年12月25日","èr líng èr líng nián shí'èr yuè èrshíwǔ rì","ngày 25 tháng 12 năm 2020","等级标准"],
      ["七月十号","qī yuè shí hào","ngày 10 tháng 7","等级标准"],
      ["星期一……星期六，星期日 / 星期天","xīngqīyī …… xīngqīliù, xīngqīrì / xīngqītiān","thứ Hai … thứ Bảy, Chủ nhật","等级标准"]]},
 {t:"Giờ: 点 · 分 · 半 · 差", sub:"钟点", fx:[["số",""],["点",null],["số",""],["(分)",null]], mean:"Phút dưới 10 đọc 零: 3:05 = 三点零五; 差 = kém: 7:58 = 差两分八点.",
  ex:[["两点（2:00）　两点二十五（分）（2:25）","liǎng diǎn　liǎng diǎn èrshíwǔ (fēn)","2 giờ　2 giờ 25","等级标准"],
      ["三点零五（分）（3:05）　五点半（5:30）","sān diǎn líng wǔ (fēn)　wǔ diǎn bàn","3 giờ 05　5 giờ rưỡi","等级标准"],
      ["差两分八点（7:58）","chà liǎng fēn bā diǎn","8 giờ kém 2 phút","等级标准"]]}],
notes:[
 {t:"2 giờ", html:"nói <span class='zh'>两点</span> (không nói 二点); nhưng <span class='zh'>十二点</span>."},
 {t:"Trong câu", html:"thời gian đứng <b>trước động từ</b> 【一28】; từ lớn đến nhỏ: <span class='zh'>明天上午九点</span>."}],
cmp:[
 {vn:"thứ Hai, ngày 25 tháng 12 năm 2020", zh:"2020年12月25日，星期一", py:"èr líng èr líng nián shí'èr yuè èrshíwǔ rì, xīngqīyī", ok:true, why:"Đảo ngược: năm trước, thứ sau."},
 {vn:"9 giờ sáng mai", zh:"明天上午九点", py:"míngtiān shàngwǔ jiǔ diǎn", ok:true, why:"Ngày → buổi → giờ."},
 {vn:"Tôi dậy lúc 6 giờ.", zh:"我[六点]起床。", py:"Wǒ liù diǎn qǐ chuáng.", ok:true, why:"Giờ đứng trước động từ."}],
ex:[
 ["今天几月几号？——[九月二十七号]。","Jīntiān jǐ yuè jǐ hào? —— Jiǔ yuè èrshíqī hào.","Hôm nay ngày mấy tháng mấy? — Ngày 27 tháng 9."],
 ["今天[星期几]？——[星期六]。","Jīntiān xīngqī jǐ? —— Xīngqīliù.","Hôm nay thứ mấy? — Thứ Bảy."],
 ["现在几点？——[八点半]。","Xiànzài jǐ diǎn? —— Bā diǎn bàn.","Bây giờ mấy giờ? — 8 giờ rưỡi."],
 ["我们[上午九点]上课。","Wǒmen shàngwǔ jiǔ diǎn shàng kè.","Chúng tôi vào học lúc 9 giờ sáng."]],
errs:[
 {bad:"25日12月2020年", good:"2020年12月25日", why:"Từ lớn đến nhỏ."},
 {bad:"二点", good:"两点", why:"2 giờ = 两点."},
 {bad:"三点五（= 3:05）", good:"三点零五", why:"Phút dưới 10 đọc 零; 三点五 dễ hiểu thành 3:50."},
 {bad:"我起床六点。", good:"我六点起床。", why:"Thời gian trước động từ."}],
practice:[
 {t:"A. Chọn cách nói đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"ngày 10 tháng 7", o:["十号七月","七月十号","七十月号"], a:1, why:"Tháng trước ngày."},
  {q:"2 giờ", o:["二点","两点","二时"], a:1, why:"两点."},
  {q:"3:05", o:["三点五","三点零五","三零五点"], a:1, why:"零五."},
  {q:"8 giờ kém 2 phút", o:["差两分八点","八点差两分钟了","两分差八点"], a:0, why:"差 + phút + giờ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","上午","九点","上课"], a:"我们上午九点上课。", vi:"Chúng tôi vào học lúc 9 giờ sáng."},
  {w:["今天","几月","几号"], a:"今天几月几号？", vi:"Hôm nay ngày mấy tháng mấy?"},
  {w:["我","六点","起床"], a:"我六点起床。", vi:"Tôi dậy lúc 6 giờ."}]},
 {t:"C. Viết bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"thứ Sáu, ngày 1 tháng 10 năm 2026", a:"2026年10月1日（号），星期五"},
  {q:"5:30 · 2:25", a:"五点半 · 两点二十五（分）"},
  {q:"Chủ nhật", a:"星期天 / 星期日"}]}],
rel:["一07","一28","一43","二12"]
};
