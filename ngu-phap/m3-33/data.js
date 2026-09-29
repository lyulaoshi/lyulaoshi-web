// Bài ngữ pháp 【新3.33】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新3.33", title:"看来；在……看来", vi:"看来, 在……看来 — xem ra; theo … thì", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>看来</b> để đưa ra nhận định dựa vào điều vừa thấy / nghe: “xem ra, có vẻ”.",
 "Dùng <b>在 + người + 看来</b> để nêu ý kiến của ai: “theo … thì”.",
 "Phân biệt 看来 với 看起来 (trông có vẻ)."],
intro:"Cả hai cách nói đều để <b>đưa ra ý kiến, suy đoán</b>. 看来 thường đứng đầu câu, sau một thông tin vừa nói; 在……看来 cho biết đó là ý kiến của ai.",
rules:[
 {t:"……，看来 + nhận định", sub:"看来", fx:[["thông tin",""],["·",""],["看来",null],["nhận định",""]], mean:"Dựa vào điều trên, người nói suy ra.",
  ex:[["他还没来，[看来]他不会来了。","Tā hái méi lái, kànlái tā bú huì lái le.","Anh ấy vẫn chưa đến, xem ra anh ấy sẽ không đến nữa."],
      ["天这么黑，[看来]要下雨了。","Tiān zhème hēi, kànlái yào xià yǔ le.","Trời tối thế này, xem ra sắp mưa rồi."]]},
 {t:"在 + người + 看来，……", sub:"在……看来", fx:[["在",null],["người",""],["看来",null],["ý kiến",""]], mean:"Theo ý kiến của ai.",
  ex:[["[在我看来]，学中文不太难。","Zài wǒ kànlái, xué Zhōngwén bú tài nán.","Theo tôi thì học tiếng Trung không khó lắm."],
      ["[在妈妈看来]，身体最重要。","Zài māma kànlái, shēntǐ zuì zhòngyào.","Theo mẹ thì sức khỏe quan trọng nhất."]]}],
notes:[{t:"看来 và 看起来", html:"<span class='zh'>看起来</span> = trông (bề ngoài): <span class='zh'>他看起来很累</span>. <span class='zh'>看来</span> = suy ra từ tình huống: <span class='zh'>看来他很累</span>. 【三35】"}],
cmp:[
 {vn:"Theo tôi thì bộ phim này rất hay.", zh:"[在我看来]，这个电影很好看。", py:"Zài wǒ kànlái, zhège diànyǐng hěn hǎokàn.", ok:true, why:"“theo tôi thì” = 在我看来, đặt đầu câu."}],
ex:[
 ["门关着，[看来]家里没有人。","Mén guānzhe, kànlái jiā li méiyǒu rén.","Cửa đóng, xem ra trong nhà không có ai."],
 ["[在老师看来]，多听多说很重要。","Zài lǎoshī kànlái, duō tīng duō shuō hěn zhòngyào.","Theo thầy thì nghe nhiều nói nhiều rất quan trọng."]],
errs:[
 {bad:"我看来，学中文不难。", good:"在我看来，学中文不难。", why:"Nêu ý kiến của ai cần đủ 在 + người + 看来."},
 {bad:"在我看起来，学中文不难。", good:"在我看来，学中文不难。", why:"Cụm cố định là 在……看来, không dùng 看起来."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Theo tôi thì học tiếng Trung không khó lắm.", o:["我看来，学中文不太难。","在我看来，学中文不太难。","在我看起来，学中文不太难。"], a:1, why:"在 + người + 看来."},
  {q:"他还没来，＿＿他不会来了。", vi:"Anh ấy vẫn chưa đến, xem ra anh ấy sẽ không đến nữa.", o:["看来","看起来"], a:0, why:"Suy ra từ tình huống → 看来."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["在","妈妈","看来，","身体","最重要"], a:"在妈妈看来，身体最重要。", vi:"Theo mẹ thì sức khỏe quan trọng nhất."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Trời tối thế này, xem ra sắp mưa rồi.", a:"天这么黑，看来要下雨了。/ 天这么黑，看来快要下雨了。"},
  {q:"Theo tôi thì bộ phim này rất hay.", a:"在我看来，这个电影很好看。/ 在我看来，这部电影很好看。/ 在我看来，这个电影很有意思。"}]}],
rel:["三35","三36","三40","新3.36"]
};
