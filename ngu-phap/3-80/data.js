// Bài ngữ pháp 【三80】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三80", title:"X就X（点儿）吧", vi:"X就X（点儿）吧 — … thì … thôi", tag:"口语格式",
goals:[
 "Dùng <b>X 就 X (点儿) 吧</b> để <b>chấp nhận</b> một điều chưa tốt.",
 "Vế sau nêu lý do có thể chấp nhận."],
intro:"Giống “chậm thì chậm thôi”, “bận thì bận chút vậy” — người nói nhượng bộ, không phàn nàn nữa.",
rules:[
 {t:"X + 就 + X + (点儿) + 吧，lý do", sub:"口语", fx:[["X 就 X",null],["(点儿) 吧",""],["·",""],["lý do chấp nhận",""]], mean:"X là tính từ / động từ, lặp lại y nguyên.",
  ex:[["[慢就慢]吧，他能完成任务就很不错了。","Màn jiù màn ba, tā néng wánchéng rènwu jiù hěn búcuò le.","Chậm thì chậm thôi, anh ấy hoàn thành được nhiệm vụ là tốt lắm rồi.","等级标准"],
      ["[忙就忙]点儿吧，我们过几天就能休息了。","Máng jiù máng diǎnr ba, wǒmen guò jǐ tiān jiù néng xiūxi le.","Bận thì bận chút vậy, mấy hôm nữa chúng ta được nghỉ rồi.","等级标准"]]}],
cmp:[
 {vn:"Đắt thì đắt chút thôi, đồ tốt là được.", zh:"[贵就贵]点儿吧，东西好就行。", py:"Guì jiù guì diǎnr ba, dōngxi hǎo jiù xíng.", ok:true, why:"Giống tiếng Việt: lặp X, 就 = “thì”."}],
ex:[
 ["[远就远]吧，我们打车去。","Yuǎn jiù yuǎn ba, wǒmen dǎ chē qù.","Xa thì xa thôi, chúng ta bắt taxi đi."]],
errs:[
 {bad:"慢就快吧，…", good:"慢就慢吧，…", why:"Hai bên 就 là cùng một từ."},
 {bad:"忙就忙点儿吧，所以我们不能休息。", good:"忙就忙点儿吧，我们过几天就能休息了。", why:"Vế sau nêu lý do chấp nhận được, không nêu kết quả xấu."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Xa thì xa thôi, chúng ta bắt taxi đi.", o:["远就近吧，我们打车去。","远就远吧，我们打车去。"], a:1, why:"Lặp cùng một từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["贵","就","贵","点儿","吧"], a:"贵就贵点儿吧。", vi:"Đắt thì đắt chút thôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chậm thì chậm thôi, hoàn thành được là tốt rồi.", a:"慢就慢吧，能完成就很不错了。/ 慢就慢吧，能完成就好了。/ 慢就慢吧，能完成就行了。"}]}],
rel:["三68","三79","三81","二45"]
};
