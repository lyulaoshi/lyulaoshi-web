// Bài ngữ pháp 【三72】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三72", title:"目的复句：为了……，……", vi:"为了…，… — để …, (thì) …", tag:"句子的类型 · 复句",
goals:[
 "Đưa <b>mục đích</b> lên đầu câu bằng 为了……，…….",
 "Nhớ: tiếng Việt “để” thường đứng sau, tiếng Trung 为了 thường đứng <b>đầu câu</b>."],
intro:"Tiếng Việt: “Anh ấy tập thể dục mỗi ngày <b>để</b> giữ sức khỏe.” Tiếng Trung: <b>为了</b>保持健康，他每天坚持运动。",
rules:[
 {t:"为了 + mục đích，(S) + hành động", sub:"目的", fx:[["为了",null],["mục đích",""],["·",""],["S + hành động",""]], mean:"",
  ex:[["[为了]保持健康，他每天坚持运动。","Wèile bǎochí jiànkāng, tā měi tiān jiānchí yùndòng.","Để giữ sức khỏe, anh ấy kiên trì tập thể dục mỗi ngày.","等级标准"],
      ["[为了]学好中文，我每天都要看中国电视剧。","Wèile xuéhǎo Zhōngwén, wǒ měi tiān dōu yào kàn Zhōngguó diànshìjù.","Để học giỏi tiếng Trung, ngày nào tôi cũng xem phim truyền hình Trung Quốc.","等级标准"]]}],
cmp:[
 {vn:"Tôi dậy sớm để kịp tàu.", zh:"[为了]赶上火车，我早早起床了。", py:"Wèile gǎnshang huǒchē, wǒ zǎozǎo qǐ chuáng le.", ok:true, why:"Đưa mục đích lên trước; không nói <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=893338cb#sai'/></svg> 我起床早为了赶火车."}],
ex:[
 ["[为了]找工作，他去了上海。","Wèile zhǎo gōngzuò, tā qù le Shànghǎi.","Để tìm việc, anh ấy đã đến Thượng Hải."]],
errs:[
 {bad:"他每天运动为了保持健康。", good:"为了保持健康，他每天运动。/ 他每天运动是为了保持健康。", why:"Đặt 为了 đầu câu; nếu để mục đích ở sau thì dùng 是为了."},
 {bad:"为了身体不好，他每天运动。", good:"因为身体不好，他每天运动。", why:"为了 nêu mục đích, không nêu nguyên nhân."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Để giữ sức khỏe, anh ấy tập thể dục mỗi ngày.", o:["为了保持健康，他每天运动。","因为保持健康，他每天运动。"], a:0, why:"Mục đích → 为了."},
  {q:"Vì sức khỏe không tốt, anh ấy tập thể dục mỗi ngày.", o:["为了身体不好，他每天运动。","因为身体不好，他每天运动。"], a:1, why:"Nguyên nhân → 因为."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["为了","找工作，","他","去了","上海"], a:"为了找工作，他去了上海。", vi:"Để tìm việc, anh ấy đã đến Thượng Hải."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Để học giỏi tiếng Trung, ngày nào tôi cũng xem phim Trung Quốc.", a:"为了学好中文，我每天都看中国电影。/ 为了学好中文，我每天都要看中国电影。/ 为了学好中文，我每天都看中国电视剧。"}]}],
rel:["三26","三71","三56","三25"]
};
