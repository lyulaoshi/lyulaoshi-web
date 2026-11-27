// Bài ngữ pháp 【新5.41】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.41", title:"紧缩复句：没有……就没有……；不……不……；再……也……", vi:"Không có … thì không có …; không … thì không …; … mấy cũng …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>没有……就没有……</b> nói điều kiện không thể thiếu.",
 "Dùng <b>不……不……</b>: không … thì không …",
 "Dùng <b>再……也……</b>: dù … mấy cũng …"],
intro:"Ba mẫu câu nén thường gặp trong <b>tục ngữ, khẩu hiệu</b>: 不见不散 (không gặp không về).",
rules:[
 {t:"没有 + A，就没有 + B", sub:"（1）", fx:[["没有",null],["A",""],["，",""],["就没有",null],["B",""]], mean:"Không có A thì không có B.",
  ex:[["{1|没有}{2|你的帮助}，{3|就没有}{4|我的今天}。","Méiyǒu nǐ de bāngzhù, jiù méiyǒu wǒ de jīntiān.","Không có bạn giúp thì không có tôi hôm nay."]]},
 {t:"不 + V1 + 不 + V2", sub:"（2）", fx:[["不",null],["V1",""],["不",null],["V2",""]], mean:"Không V1 thì không V2.",
  ex:[["明天八点，咱们{1|不}{2|见}{3|不}{4|散}。","Míngtiān bā diǎn, zánmen bú jiàn bú sàn.","Tám giờ mai, không gặp không về nhé."]]},
 {t:"再 + Adj / V + 也 + …", sub:"（3）", fx:[["再",null],["Adj / V",""],["，",""],["也",null],["kết quả",""]], mean:"Dù … đến mấy cũng …",
  ex:[["工作{1|再}{2|忙}，{3|也}{4|要注意身体}。","Gōngzuò zài máng, yě yào zhùyì shēntǐ.","Công việc bận mấy cũng phải giữ sức khỏe."],
      ["你{1|再}{2|说}，他{3|也}{4|不会听的}。","Nǐ zài shuō, tā yě bú huì tīng de.","Bạn có nói nữa anh ấy cũng không nghe."]]}],
cmp:[
 {vn:"Đắt mấy cũng mua.", zh:"[再贵也]买。", py:"Zài guì yě mǎi.", ok:true, why:"“mấy cũng” → 再……也."}],
ex:[
 ["[没有]付出[就没有]收获。","Méiyǒu fùchū jiù méiyǒu shōuhuò.","Không bỏ công thì không có thu hoạch."],
 ["这个问题[不]解决[不]行。","Zhège wèntí bù jiějué bù xíng.","Vấn đề này không giải quyết không được."],
 ["天气[再]不好，我们[也]要去。","Tiānqì zài bù hǎo, wǒmen yě yào qù.","Thời tiết xấu mấy chúng tôi cũng đi."]],
errs:[
 {bad:"没有付出，就不有收获。", good:"没有付出，就没有收获。", why:"有 phủ định bằng 没."},
 {bad:"工作很再忙，也要注意身体。", good:"工作再忙，也要注意身体。", why:"再 đã chỉ mức độ, không thêm 很."},
 {bad:"再贵，就买。（muốn nói đắt mấy cũng mua）", good:"再贵也买。", why:"Cặp 再……也."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Công việc bận mấy cũng phải giữ sức khỏe.", o:["工作再忙，也要注意身体。","工作很忙，就要注意身体吗。"], a:0, why:"再……也."},
  {q:"明天八点，咱们不见不＿。", vi:"Tám giờ mai, không gặp không về.", o:["散","走吗","来"], a:0, why:"不见不散."},
  {q:"没有付出就＿收获。", vi:"Không bỏ công thì không thu hoạch.", o:["没有","不有","别有"], a:0, why:"就没有."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["没有","你的帮助，","就没有","我的","今天"], a:"没有你的帮助，就没有我的今天。", vi:"Không có bạn giúp thì không có tôi hôm nay."},
  {w:["天气","再不好，","我们","也","要去"], a:"天气再不好，我们也要去。", vi:"Thời tiết xấu mấy chúng tôi cũng đi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Không bỏ công thì không có thu hoạch.", a:"没有付出就没有收获。"},
  {q:"Đắt mấy cũng mua.", a:"再贵也买。/ 再贵我也买。/ 再贵也要买。"}]}],
rel:["新4.65","新5.38","三42"]
};
