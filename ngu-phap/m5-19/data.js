// Bài ngữ pháp 【新5.19】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.19", title:"四字格：A来A去、A着A着、没A没B、说A就A", vi:"A来A去, A着A着, 没A没B, 说A就A", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>A来A去</b> (làm đi làm lại) và <b>A着A着</b> (đang … thì).",
 "Dùng <b>没A没B</b> (không … không …).",
 "Dùng <b>说A就A</b> (nói là làm ngay)."],
intro:"Bốn khuôn khẩu ngữ: giữ nguyên chữ khung, thay <b>A, B</b> bằng động từ hoặc danh từ một âm tiết.",
rules:[
 {t:"A来A去", sub:"（1）lặp lại", fx:[["A",""],["来",null],["A",""],["去",null]], mean:"想来想去 nghĩ tới nghĩ lui · 走来走去 đi đi lại lại.",
  ex:[["我{1|想}{2|来}{3|想}{4|去}，还是决定留下。","Wǒ xiǎng lái xiǎng qù, háishi juédìng liúxià.","Tôi nghĩ tới nghĩ lui, vẫn quyết định ở lại."]]},
 {t:"A着A着，…", sub:"（2）đang … thì", fx:[["A",""],["着",null],["A",""],["着",null],["，",""],["việc xảy ra",""]], mean:"Đang làm A thì (bất ngờ) …",
  ex:[["他{1|看}{2|着}{3|看}{4|着}，{5|就睡着了}。","Tā kànzhe kànzhe, jiù shuìzháo le.","Anh ấy đang xem thì ngủ mất."]]},
 {t:"没A没B", sub:"（3）không … không …", fx:[["没",null],["A",""],["没",null],["B",""]], mean:"没完没了 không dứt · 没大没小 không biết trên dưới.",
  ex:[["他一说起来就{1|没}{2|完}{3|没}{4|了}。","Tā yì shuō qilai jiù méiwán-méiliǎo.","Anh ấy hễ nói là không dứt."]]},
 {t:"说A就A", sub:"（4）làm ngay", fx:[["说",null],["A",""],["就",null],["A",""]], mean:"说走就走 nói đi là đi.",
  ex:[["我们来一次{1|说}{2|走}{3|就}{4|走}的旅行吧。","Wǒmen lái yí cì shuō zǒu jiù zǒu de lǚxíng ba.","Chúng ta làm một chuyến đi nói là đi nhé."]]}],
cmp:[
 {vn:"Anh ta cứ đi đi lại lại trong phòng.", zh:"他在房间里[走来走去]。", py:"Tā zài fángjiān li zǒu lái zǒu qù.", ok:true, why:"Giống “đi đi lại lại”."}],
ex:[
 ["孩子们在操场上[跑来跑去]。","Háizimen zài cāochǎng shang pǎo lái pǎo qù.","Bọn trẻ chạy tới chạy lui trên sân."],
 ["她[说着说着]哭了起来。","Tā shuōzhe shuōzhe kūle qilai.","Cô ấy đang nói thì bật khóc."],
 ["天气[说变就变]。","Tiānqì shuō biàn jiù biàn.","Thời tiết nói đổi là đổi."]],
errs:[
 {bad:"他走去走来。", good:"他走来走去。", why:"Thứ tự cố định: 来 trước, 去 sau."},
 {bad:"我看着看着书睡着了。", good:"我看书看着看着就睡着了。", why:"Khung A着A着 không mang tân ngữ ở giữa hay sau."},
 {bad:"他说就走走。", good:"他说走就走。", why:"Đúng khung 说A就A."}],
practice:[
 {t:"A. Chọn đáp án", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我想＿想去，还是不明白。", vi:"Tôi nghĩ tới nghĩ lui vẫn không hiểu.", o:["来","着","就"], a:0, why:"想来想去."},
  {q:"他听＿听着就睡着了。", vi:"Anh ấy đang nghe thì ngủ mất.", o:["着","来","了"], a:0, why:"A着A着."},
  {q:"“没完没了” nghĩa là:", vi:"Chọn nghĩa.", o:["không dứt","chưa xong việc"], a:0, why:"Cứ kéo dài mãi."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["孩子们","在操场上","跑来","跑去"], a:"孩子们在操场上跑来跑去。", vi:"Bọn trẻ chạy tới chạy lui trên sân."},
  {w:["天气","说变","就变"], a:"天气说变就变。", vi:"Thời tiết nói đổi là đổi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Cô ấy đang nói thì bật khóc.", a:"她说着说着哭了起来。/ 她说着说着就哭了。/ 她说着说着就哭了起来。"},
  {q:"Anh ta cứ đi đi lại lại trong phòng.", a:"他在房间里走来走去。"}]}],
rel:["新4.23","二33","三63"]
};
