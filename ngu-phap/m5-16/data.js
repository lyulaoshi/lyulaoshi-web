// Bài ngữ pháp 【新5.16】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.16", title:"连词：以及、同", vi:"以及, 同 — cùng với, và", tag:"词类 · 连词",
goals:[
 "Dùng <b>以及</b> nối các thành phần trong văn viết, phần sau thường là <b>phụ hơn</b>.",
 "Dùng <b>同</b> = 和 giữa hai danh từ.",
 "Không dùng 以及 trong lời nói thân mật."],
intro:"以及 giống “<b>cùng, cũng như</b>”. Hay đứng trước mục <b>cuối cùng</b> trong một danh sách.",
rules:[
 {t:"A、B + 以及 + C", sub:"（1）以及", fx:[["A、B",""],["以及",null],["C",""]], mean:"A, B cũng như C.",
  ex:[["会议讨论了{1|时间、地点}{2|以及}{3|费用问题}。","Huìyì tǎolùnle shíjiān, dìdiǎn yǐjí fèiyòng wèntí.","Cuộc họp bàn thời gian, địa điểm cùng vấn đề chi phí."],
      ["欢迎{1|老师、同学}{2|以及}{3|各位家长}。","Huānyíng lǎoshī, tóngxué yǐjí gè wèi jiāzhǎng.","Hoan nghênh thầy cô, các bạn cũng như quý phụ huynh."]]},
 {t:"A + 同 + B", sub:"（2）同", fx:[["A",""],["同",null],["B",""]], mean:"A và B.",
  ex:[["{1|工业}{2|同}{3|农业}都很重要。","Gōngyè tóng nóngyè dōu hěn zhòngyào.","Công nghiệp và nông nghiệp đều quan trọng."]]}],
cmp:[
 {vn:"Mời mang theo hộ chiếu, ảnh và giấy tờ liên quan.", zh:"请带上护照、照片[以及]有关材料。", py:"Qǐng dàishang hùzhào, zhàopiàn yǐjí yǒuguān cáiliào.", ok:true, why:"以及 đứng trước mục cuối, giọng thông báo."}],
ex:[
 ["我们要考虑价格、质量[以及]服务。","Wǒmen yào kǎolǜ jiàgé, zhìliàng yǐjí fúwù.","Chúng ta phải xét giá cả, chất lượng và dịch vụ."],
 ["他介绍了自己的经历[以及]今后的打算。","Tā jièshàole zìjǐ de jīnglì yǐjí jīnhòu de dǎsuàn.","Anh ấy kể quá trình của mình cùng dự định sau này."],
 ["这件事[同]我没有关系。","Zhè jiàn shì tóng wǒ méiyǒu guānxi.","Việc này không liên quan đến tôi."]],
errs:[
 {bad:"以及时间、地点，会议讨论了费用。", good:"会议讨论了时间、地点以及费用。", why:"以及 nằm giữa các mục được liệt kê."},
 {bad:"他唱歌以及跳舞得很好。", good:"他唱歌和跳舞都很好。", why:"Lời nói thường dùng 和; 以及 hợp với văn bản liệt kê."},
 {bad:"价格以及，质量都要考虑。", good:"价格以及质量都要考虑。", why:"Không đặt dấu phẩy ngay sau 以及."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"请带上护照、照片＿有关材料。", vi:"Mời mang hộ chiếu, ảnh và giấy tờ liên quan.", o:["以及","从而","可见"], a:0, why:"Liệt kê → 以及."},
  {q:"这件事＿他没有关系。", vi:"Việc này không liên quan đến anh ấy.", o:["同","以及","总之"], a:0, why:"同……没有关系."},
  {q:"Câu nào dùng 以及 đúng chỗ?", o:["会议讨论了时间以及地点。","会议以及讨论了时间地点。"], a:0, why:"以及 nối hai danh từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","要考虑","价格、质量","以及","服务"], a:"我们要考虑价格、质量以及服务。", vi:"Chúng ta phải xét giá cả, chất lượng và dịch vụ."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 以及)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hoan nghênh thầy cô, các bạn cũng như quý phụ huynh.", a:"欢迎老师、同学以及各位家长。/ 欢迎各位老师、同学以及家长。"}]}],
rel:["一19","新4.18","新5.15"]
};
