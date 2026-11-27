// Bài ngữ pháp 【新4.17】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.17", title:"介词：对于、与（引出对象）", vi:"对于, 与 — đối với, với (nêu đối tượng)", tag:"词类 · 介词",
goals:[
 "Dùng <b>对于</b> nêu đối tượng được <b>bàn tới, đánh giá</b>.",
 "Dùng <b>与</b> thay cho 跟 / 和 trong văn viết, trang trọng.",
 "Biết 对于 <b>không dùng</b> cho hành động hướng thẳng tới người (dùng 对)."],
intro:"对于 + danh từ giống “<b>đối với</b> (việc …)”. 与 giống “<b>với</b>” nhưng trang trọng hơn 跟.",
rules:[
 {t:"对于 + đối tượng，S + 很 / 有 …", sub:"（1）对于", fx:[["对于",null],["việc / vấn đề",""],["·",""],["S + đánh giá",""]], mean:"Đối với … thì …",
  ex:[["{1|对于}{2|这个问题}，{3|大家有不同的看法}。","Duìyú zhège wèntí, dàjiā yǒu bù tóng de kànfǎ.","Đối với vấn đề này, mọi người có cách nhìn khác nhau."],
      ["{1|对于}{2|学汉语的人}，{3|这本词典很有用}。","Duìyú xué Hànyǔ de rén, zhè běn cídiǎn hěn yǒuyòng.","Đối với người học tiếng Trung, quyển từ điển này rất hữu ích."]]},
 {t:"A + 与 + B + V / 有关 / 不同", sub:"（2）与", fx:[["A",""],["与",null],["B",""],["V / Adj",""]], mean:"A … với B (văn viết).",
  ex:[["{1|他的成功}{2|与}{3|努力}{4|分不开}。","Tā de chénggōng yǔ nǔlì fēn bu kāi.","Thành công của anh ấy gắn liền với nỗ lực."],
      ["{1|这件事}{2|与}{3|我}{4|没有关系}。","Zhè jiàn shì yǔ wǒ méiyǒu guānxi.","Việc này không liên quan đến tôi."]]}],
notes:[{t:"对 và 对于", html:"Chỗ dùng 对于 thường thay được bằng 对. Nhưng thái độ / hành động với người thì chỉ dùng 对: <span class='zh'>老师对我们很好。</span>"}],
cmp:[
 {vn:"Thầy rất tốt với chúng tôi.", zh:"老师[对]我们很好。", py:"Lǎoshī duì wǒmen hěn hǎo.", ok:true, why:"Thái độ với người → 对, không dùng 对于."}],
ex:[
 ["[对于]这次比赛，我们很有信心。","Duìyú zhè cì bǐsài, wǒmen hěn yǒu xìnxīn.","Đối với cuộc thi lần này, chúng tôi rất tự tin."],
 ["健康[对于]每个人都很重要。","Jiànkāng duìyú měi gè rén dōu hěn zhòngyào.","Sức khỏe đối với ai cũng quan trọng."],
 ["现在的生活[与]过去完全不同。","Xiànzài de shēnghuó yǔ guòqù wánquán bù tóng.","Cuộc sống bây giờ hoàn toàn khác với trước kia."]],
errs:[
 {bad:"老师对于我们很热情。", good:"老师对我们很热情。", why:"Thái độ hướng tới người dùng 对."},
 {bad:"我们应该对于他说实话。", good:"我们应该对他说实话。", why:"Nói với ai dùng 对 / 跟."},
 {bad:"这件事没有关系与我。", good:"这件事与我没有关系。", why:"Cụm 与 + B đứng trước động từ."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿这个问题，我们还要讨论。", vi:"Đối với vấn đề này, chúng ta còn phải thảo luận.", o:["对于","与","给"], a:0, why:"Nêu vấn đề được bàn → 对于."},
  {q:"经理＿大家笑了笑。", vi:"Giám đốc cười với mọi người.", o:["对于","对","把"], a:1, why:"Hành động hướng tới người → 对."},
  {q:"这件事＿他无关。", vi:"Việc này không liên quan đến anh ấy.", o:["对于","与","从"], a:1, why:"与……无关 = không liên quan đến."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["健康","对于","每个人","都","很","重要"], a:"健康对于每个人都很重要。", alt:["对于每个人健康都很重要。"], vi:"Sức khỏe đối với ai cũng quan trọng."},
  {w:["这件事","与","我","没有","关系"], a:"这件事与我没有关系。", vi:"Việc này không liên quan đến tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Đối với vấn đề này, mọi người có cách nhìn khác nhau.", a:"对于这个问题，大家有不同的看法。/ 对这个问题，大家有不同的看法。"},
  {q:"Việc này không liên quan đến tôi (dùng 与).", a:"这件事与我没有关系。/ 这件事与我无关。"}]}],
rel:["二25","三40","新4.18"]
};
