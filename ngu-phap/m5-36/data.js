// Bài ngữ pháp 【新5.36】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.36", title:"假设复句：一旦、假如、万一、不然", vi:"Giả thiết: một khi, giả như, lỡ như, nếu không", tag:"句子的类型 · 复句",
goals:[
 "Phân biệt <b>一旦</b> (một khi), <b>假如</b> (giả như), <b>万一</b> (lỡ như).",
 "Dùng <b>要不然 / 不然</b>: nếu không thì.",
 "Đặt 就 sau chủ ngữ vế sau."],
intro:"<b>万一</b> nói chuyện <b>khó xảy ra</b> và thường là xấu. <b>不然</b> đứng ở vế sau, nói hậu quả nếu không làm.",
rules:[
 {t:"一旦 / 假如 + giả thiết，(S) 就 …", sub:"（1）", fx:[["一旦 / 假如",null],["giả thiết",""],["，",""],["就",null],["kết quả",""]], mean:"Một khi / giả như … thì …",
  ex:[["{1|一旦}{2|养成习惯}，{3|就}{4|很难改了}。","Yídàn yǎngchéng xíguàn, jiù hěn nán gǎi le.","Một khi thành thói quen thì khó sửa."],
      ["{1|假如}{2|有时间}，我{3|就}{4|去看看你}。","Jiǎrú yǒu shíjiān, wǒ jiù qù kànkan nǐ.","Giả như có thời gian, tôi sẽ đến thăm bạn."]]},
 {t:"万一 + chuyện xấu，(S) 就 …", sub:"（2）", fx:[["万一",null],["chuyện không may",""],["，",""],["đối phó",""]], mean:"Lỡ như …",
  ex:[["{1|万一}{2|下雨了}，{3|我们就改天去}。","Wànyī xià yǔ le, wǒmen jiù gǎitiān qù.","Lỡ trời mưa thì chúng ta đi hôm khác."]]},
 {t:"Việc nên làm，要不然 / 不然 + hậu quả", sub:"（3）", fx:[["việc nên làm",""],["，",""],["要不然 / 不然",null],["hậu quả",""]], mean:"… , nếu không thì …",
  ex:[["{1|快走吧}，{2|要不然}{3|就迟到了}。","Kuài zǒu ba, yàobùrán jiù chídào le.","Đi mau, không thì muộn mất."],
      ["{1|你得多休息}，{2|不然}{3|身体会出问题}。","Nǐ děi duō xiūxi, bùrán shēntǐ huì chū wèntí.","Bạn phải nghỉ nhiều, không thì sức khỏe có vấn đề."]]}],
cmp:[
 {vn:"Mang theo ô đi, lỡ mưa thì sao.", zh:"带上伞吧，[万一]下雨呢。", py:"Dàishang sǎn ba, wànyī xià yǔ ne.", ok:true, why:"万一 = lỡ như."}],
ex:[
 ["[一旦]决定了，我[就]不会改变。","Yídàn juédìng le, wǒ jiù bú huì gǎibiàn.","Một khi đã quyết, tôi sẽ không đổi."],
 ["[万一]找不到路，[就]给我打电话。","Wànyī zhǎo bu dào lù, jiù gěi wǒ dǎ diànhuà.","Lỡ không tìm được đường thì gọi cho tôi."],
 ["幸亏你提醒我，[不然]我[就]忘了。","Xìngkuī nǐ tíxǐng wǒ, bùrán wǒ jiù wàng le.","May bạn nhắc, không thì tôi quên mất."]],
errs:[
 {bad:"万一考试得了一百分，我就请客。", good:"要是考试得了一百分，我就请客。", why:"万一 thường dành cho chuyện không mong muốn."},
 {bad:"不然快走，就迟到了。", good:"快走吧，不然就迟到了。", why:"不然 đứng đầu vế sau."},
 {bad:"假如下雨，就我们不去。", good:"假如下雨，我们就不去。", why:"就 sau chủ ngữ."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"带点儿药吧，＿生病了呢。", vi:"Mang ít thuốc đi, lỡ ốm thì sao.", o:["万一","一直","从而"], a:0, why:"Lỡ như."},
  {q:"你快点儿，＿就赶不上车了。", vi:"Nhanh lên, không thì lỡ xe.", o:["不然","假如","一旦"], a:0, why:"Nếu không."},
  {q:"＿养成习惯，就很难改。", vi:"Một khi thành thói quen thì khó sửa.", o:["一旦","不然","因而"], a:0, why:"一旦……就……."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["万一","下雨了，","我们","就","改天去"], a:"万一下雨了，我们就改天去。", vi:"Lỡ mưa thì chúng ta đi hôm khác."},
  {w:["快走吧，","要不然","就","迟到了"], a:"快走吧，要不然就迟到了。", vi:"Đi mau, không thì muộn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Lỡ không tìm được đường thì gọi cho tôi.", a:"万一找不到路，就给我打电话。/ 万一找不到路，你就给我打电话。"},
  {q:"May bạn nhắc tôi, không thì tôi quên mất.", a:"幸亏你提醒我，不然我就忘了。/ 幸亏你提醒我，要不然我就忘了。"}]}],
rel:["新5.09","二66","三69"]
};
