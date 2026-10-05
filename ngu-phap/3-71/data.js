// Bài ngữ pháp 【三71】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三71", title:"因果复句：（由于）……，所以/因此……", vi:"(由于)…，所以 / 因此… — do …, nên / vì vậy …", tag:"句子的类型 · 复句",
goals:[
 "Nêu nguyên nhân – kết quả bằng <b>由于……，所以……</b> hoặc <b>……，因此……</b>.",
 "Biết 由于, 因此 trang trọng hơn 因为, 所以.",
 "Không ghép <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> 由于……，因为…… hay <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> 因为……，因此…… lẫn lộn tùy tiện: 由于 đi được với 所以 / 因此; 因为 thường đi với 所以."],
intro:"Mở rộng 【二68】 因为……，所以……: thêm cặp <b>由于</b> (do) và <b>因此</b> (vì vậy), hay dùng khi viết.",
rules:[
 {t:"由于 + nguyên nhân，所以 / 因此 + kết quả", sub:"因果", fx:[["(由于)",null],["nguyên nhân",""],["·",""],["所以 / 因此",null],["kết quả",""]], mean:"Có thể chỉ dùng một từ ở một vế.",
  ex:[["[由于]身体不好，[所以]爸爸打算提前退休。","Yóuyú shēntǐ bù hǎo, suǒyǐ bàba dǎsuàn tíqián tuìxiū.","Do sức khỏe không tốt nên bố định nghỉ hưu sớm.","等级标准"],
      ["他工作很努力，[因此]取得了很大的成功。","Tā gōngzuò hěn nǔlì, yīncǐ qǔdé le hěn dà de chénggōng.","Anh ấy làm việc rất chăm chỉ, vì vậy đã đạt được thành công lớn.","等级标准"]]}],
cmp:[
 {vn:"Do trời mưa nên trận đấu bị hoãn.", zh:"[由于]下雨，比赛推迟了。", py:"Yóuyú xià yǔ, bǐsài tuīchí le.", ok:true, why:"Có thể chỉ dùng 由于 ở vế đầu."}],
ex:[
 ["路上堵车，[因此]我迟到了。","Lùshang dǔ chē, yīncǐ wǒ chídào le.","Trên đường tắc xe, vì vậy tôi đến muộn."]],
errs:[
 {bad:"由于身体不好，因为爸爸打算退休。", good:"由于身体不好，所以爸爸打算退休。", why:"Vế kết quả dùng 所以 / 因此, không dùng 因为."},
 {bad:"他因此工作很努力，取得了成功。", good:"他工作很努力，因此取得了成功。", why:"因此 mở đầu vế kết quả."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Do sức khỏe không tốt nên bố định nghỉ hưu.", o:["由于身体不好，所以爸爸打算退休。","由于身体不好，因为爸爸打算退休。"], a:0, why:"由于…所以…"},
  {q:"Tắc xe, vì vậy tôi đến muộn.", o:["因此堵车，我迟到了。","堵车，因此我迟到了。"], a:1, why:"因此 ở vế kết quả."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","工作","很努力，","因此","取得了","成功"], a:"他工作很努力，因此取得了成功。", vi:"Anh ấy làm việc chăm chỉ, vì vậy đã thành công."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Trên đường tắc xe, vì vậy tôi đến muộn.", a:"路上堵车，因此我迟到了。/ 由于路上堵车，所以我迟到了。/ 因为路上堵车，所以我迟到了。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"由于天气不好，比赛推迟了。", vi:"Do thời tiết xấu nên trận đấu bị hoãn.", o:["Đúng","Sai"], a:0, why:"由于 + nguyên nhân, kết quả."},
  {q:"由于下雨，因为我们没去。", vi:"Do trời mưa nên chúng tôi không đi.", o:["Đúng","Sai"], a:1, why:"Vế kết quả dùng 所以 / 因此: 由于下雨，所以我们没去。"},
  {q:"他很努力，因此成绩很好。", vi:"Anh ấy rất chăm, vì vậy thành tích rất tốt.", o:["Đúng","Sai"], a:0, why:"因此 mở đầu vế kết quả."},
  {q:"因此他很努力，成绩很好。", vi:"Anh ấy rất chăm, vì vậy thành tích rất tốt.", o:["Đúng","Sai"], a:1, why:"他很努力，因此成绩很好。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Do sức khỏe không tốt, anh ấy nghỉ một tháng.", o:["由于身体不好，他休息了一个月。", "由于身体不好，因为他休息了一个月。"], a:0, why:"Không ghép 由于 với 因为."},
  {q:"Tắc đường, vì vậy tôi đến muộn.", o:["路上堵车，因此我迟到了。", "路上堵车，由于我迟到了。"], a:0, why:"Kết quả → 因此."},
  {q:"Vì bài khóa khó nên chúng tôi học hai buổi.", o:["由于课文很难，所以我们学了两次。", "课文很难，由于我们学了两次。"], a:0, why:"由于 + nguyên nhân ở vế đầu."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Do trời mưa nên trận đấu bị hoãn.", a:"由于下雨，比赛推迟了。/ 由于下雨，所以比赛推迟了。/ 由于下雨，因此比赛推迟了。"},
  {q:"Anh ấy làm việc chăm chỉ, vì vậy rất thành công.", a:"他工作很努力，因此很成功。/ 他工作很努力，因此非常成功。"},
  {q:"Do không có thời gian nên tôi không đi.", a:"由于没有时间，所以我没去。/ 由于没有时间，我没去。/ 由于没有时间，因此我没去。/ 由于没时间，所以我没去。/ 由于没时间，我没去。"}]}],
rel:["二68","三25","三30","三72"]
};
