// Bài ngữ pháp 【新5.09】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.09", title:"关联副词：便、一旦", vi:"便, 一旦 — liền, một khi", tag:"词类 · 副词",
goals:[
 "Dùng <b>便</b> như 就 trong văn viết: liền, thì.",
 "Dùng <b>一旦</b> nêu giả thiết quan trọng: một khi …",
 "Đặt 便 <b>sau chủ ngữ</b>, trước động từ."],
intro:"<b>便</b> = <b>就</b> nhưng trang trọng. <b>一旦</b> = “<b>một khi</b>”, thường báo trước một hệ quả đáng chú ý.",
rules:[
 {t:"S + 便 + V", sub:"（1）便", fx:[["S",""],["便",null],["V",""]], mean:"Liền, ngay, thì.",
  ex:[["说完，{1|他}{2|便}{3|离开了}。","Shuōwán, tā biàn líkāi le.","Nói xong, anh ấy liền rời đi."],
      ["只要有时间，{1|我}{2|便}{3|去看他}。","Zhǐyào yǒu shíjiān, wǒ biàn qù kàn tā.","Hễ có thời gian là tôi đi thăm ông ấy."]]},
 {t:"一旦 + giả thiết，(S) 就 + kết quả", sub:"（2）一旦", fx:[["一旦",null],["giả thiết",""],["，",""],["就",null],["kết quả",""]], mean:"Một khi … thì …",
  ex:[["{1|一旦}{2|决定了}，{3|就}{4|不要后悔}。","Yídàn juédìng le, jiù búyào hòuhuǐ.","Một khi đã quyết thì đừng hối hận."]]}],
notes:[{t:"S 一旦…", html:"一旦 có thể đứng sau chủ ngữ: <span class='zh'>他一旦知道了，就会很生气。</span>"}],
cmp:[
 {vn:"Một khi mất niềm tin thì rất khó lấy lại.", zh:"[一旦]失去信任，就很难找回来。", py:"Yídàn shīqù xìnrèn, jiù hěn nán zhǎo huilai.", ok:true, why:"Trùng cách nói “một khi … thì”."}],
ex:[
 ["吃过晚饭，他[便]回房间工作了。","Chīguo wǎnfàn, tā biàn huí fángjiān gōngzuò le.","Ăn tối xong, anh ấy liền về phòng làm việc."],
 ["没过几天，天气[便]暖和起来了。","Méi guò jǐ tiān, tiānqì biàn nuǎnhuo qilai le.","Chưa được mấy ngày trời đã ấm lên."],
 ["[一旦]发现问题，请马上告诉我。","Yídàn fāxiàn wèntí, qǐng mǎshàng gàosu wǒ.","Một khi phát hiện vấn đề, xin báo tôi ngay."]],
errs:[
 {bad:"说完，便他离开了。", good:"说完，他便离开了。", why:"便 là phó từ, đứng sau chủ ngữ."},
 {bad:"一旦决定了，不要就后悔。", good:"一旦决定了，就不要后悔。", why:"就 đứng trước 不要."},
 {bad:"一旦昨天下雨，我们就没去。", good:"昨天下雨了，我们就没去。", why:"一旦 chỉ giả thiết, không dùng cho việc đã xảy ra."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nói xong, anh ấy liền đi.", o:["说完，他便走了。","说完，便他走了。"], a:0, why:"S + 便 + V."},
  {q:"＿决定了，就不要后悔。", vi:"Một khi đã quyết thì đừng hối hận.", o:["一旦","一直","一定"], a:0, why:"一旦……就……."},
  {q:"只要有空儿，我＿去看书。", vi:"Hễ rảnh là tôi đi đọc sách.", o:["便","才","却"], a:0, why:"便 = 就."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["吃过晚饭，","他","便","回房间","工作了"], a:"吃过晚饭，他便回房间工作了。", vi:"Ăn tối xong, anh ấy liền về phòng làm việc."},
  {w:["一旦","发现问题，","请","马上","告诉我"], a:"一旦发现问题，请马上告诉我。", vi:"Một khi phát hiện vấn đề, xin báo tôi ngay."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Một khi đã quyết thì đừng hối hận.", a:"一旦决定了，就不要后悔。/ 一旦决定了，就别后悔。"},
  {q:"Nói xong, anh ấy liền rời đi (dùng 便).", a:"说完，他便离开了。/ 说完，他便走了。"}]}],
rel:["二17","二69","新5.36"]
};
