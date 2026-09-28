// Bài ngữ pháp 【三79】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三79", title:"都……了", vi:"都…了 — đã … rồi (mà …)", tag:"口语格式",
goals:[
 "Dùng <b>都 + thời gian / số lượng + 了</b> để nhấn mạnh <b>đã muộn, đã nhiều</b>.",
 "Vế sau thường là lời khuyên, trách móc hoặc thắc mắc."],
intro:"Ở đây 都 = “đã”, không phải “đều”. Giống “Đã 11 giờ rồi (mà) …”.",
rules:[
 {t:"都 + thời gian / số lượng + 了，…", sub:"口语", fx:[["都",null],["thời gian / số lượng",""],["了",null],["·",""],["lời khuyên / thắc mắc",""]], mean:"",
  ex:[["[都]十一点[了]，你别看电视了。","Dōu shíyī diǎn le, nǐ bié kàn diànshì le.","Đã 11 giờ rồi, con đừng xem ti vi nữa.","等级标准"],
      ["[都]三天[了]，他怎么还没回来？","Dōu sān tiān le, tā zěnme hái méi huílai?","Đã ba ngày rồi, sao anh ấy vẫn chưa về?","等级标准"]]}],
cmp:[
 {vn:"Đã 20 tuổi rồi mà còn …", zh:"[都]二十岁[了]，还……", py:"Dōu èrshí suì le, hái……", ok:true, why:"都 = “đã”, cuối cụm có 了."}],
ex:[
 ["[都]这么晚[了]，快睡吧。","Dōu zhème wǎn le, kuài shuì ba.","Muộn thế này rồi, mau ngủ đi."]],
errs:[
 {bad:"都十一点，你别看电视了。", good:"都十一点了，你别看电视了。", why:"Cần 了 sau thời gian."},
 {bad:"十一点都了，…", good:"都十一点了，…", why:"都 đứng trước thời gian."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Đã 11 giờ rồi, đừng xem ti vi nữa.", o:["都十一点，别看电视了。","都十一点了，别看电视了。"], a:1, why:"都…了."},
  {q:"“都三天了” — 都 ở đây nghĩa là gì?", vi:"Đã ba ngày rồi.", o:["đều","đã"], a:1, why:"都 = đã."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["都","三天","了，","他","怎么","还没","回来"], a:"都三天了，他怎么还没回来？", vi:"Đã ba ngày rồi, sao anh ấy vẫn chưa về?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Muộn thế này rồi, mau ngủ đi.", a:"都这么晚了，快睡吧。"}]}],
rel:["二81","二80","三80","一34"]
};
