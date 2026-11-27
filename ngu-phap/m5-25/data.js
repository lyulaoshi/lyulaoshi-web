// Bài ngữ pháp 【新5.25】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.25", title:"可能补语：动词＋得／不得", vi:"Bổ ngữ khả năng V得 / V不得 — được phép / không được", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>V + 不得</b>: không được làm (kẻo có hậu quả).",
 "Dùng <b>V + 得</b>: làm được (chủ yếu trong câu hỏi, so sánh).",
 "Phân biệt với V不了, V不下."],
intro:"<b>这东西吃不得</b> = thứ này ăn không được (ăn vào là hại). Khác 吃不了 (ăn không hết, không ăn nổi).",
rules:[
 {t:"(đối tượng) + V + 不得", sub:"（1）cấm kỵ", fx:[["đối tượng",""],["V",""],["不得",null]], mean:"Không được …, … là hỏng.",
  ex:[["{1|这蘑菇有毒}，{2|吃}{3|不得}。","Zhè mógu yǒu dú, chī bude.","Nấm này có độc, không ăn được."],
      ["{1|开车的事}{2|马虎}{3|不得}。","Kāichē de shì mǎhu bude.","Chuyện lái xe không được qua loa."]]},
 {t:"V + 得 / V + 得 + V + 不得？", sub:"（2）được không", fx:[["đối tượng",""],["V得",""],["V不得",""]], mean:"Có được … không?",
  ex:[["{1|这种水}{2|喝得}{3|喝不得}？","Zhè zhǒng shuǐ hē de hē bude?","Loại nước này uống được không?"]]}],
notes:[{t:"Cụm cố định", html:"<span class='zh'>舍不得</span> (không nỡ), <span class='zh'>怪不得</span> (thảo nào), <span class='zh'>恨不得</span> (chỉ muốn)."}],
cmp:[
 {vn:"Việc này gấp, không chậm trễ được.", zh:"这件事很急，[耽误不得]。", py:"Zhè jiàn shì hěn jí, dānwu bude.", ok:true, why:"V + 不得 đặt sau đối tượng."}],
ex:[
 ["他脾气不好，我们[惹不得]。","Tā píqi bù hǎo, wǒmen rě bude.","Anh ta nóng tính, chúng ta không động vào được."],
 ["这件衣服太贵了，我[舍不得]买。","Zhè jiàn yīfu tài guì le, wǒ shěbude mǎi.","Áo này đắt quá, tôi tiếc không mua."],
 ["健康的问题[大意不得]。","Jiànkāng de wèntí dàyi bude.","Chuyện sức khỏe không được lơ là."]],
errs:[
 {bad:"这蘑菇不吃得。", good:"这蘑菇吃不得。", why:"不得 đứng sau động từ."},
 {bad:"菜太多了，我吃不得。（muốn nói ăn không hết）", good:"菜太多了，我吃不了。", why:"Không đủ sức / không hết → V不了."},
 {bad:"这件事马虎不得做。", good:"这件事马虎不得。", why:"V不得 đã trọn, không thêm động từ sau."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nấm này độc, không ăn được.", o:["这蘑菇有毒，吃不得。","这蘑菇有毒，吃不了。"], a:0, why:"Cấm kỵ → 不得."},
  {q:"Nhiều quá, tôi ăn không hết.", o:["太多了，我吃不得。","太多了，我吃不了。"], a:1, why:"Không hết → 不了."},
  {q:"这件事很急，＿不得。", vi:"Việc này gấp, không chậm trễ được.", o:["耽误","高兴","喜欢"], a:0, why:"耽误不得."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["开车的事","马虎","不得"], a:"开车的事马虎不得。", vi:"Chuyện lái xe không được qua loa."},
  {w:["他脾气不好，","我们","惹不得"], a:"他脾气不好，我们惹不得。", vi:"Anh ta nóng tính, không động vào được."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Chuyện sức khỏe không được lơ là.", a:"健康的问题大意不得。/ 健康问题大意不得。/ 健康的问题马虎不得。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"这种药不能多吃，大意不得。", vi:"Thuốc này không được uống nhiều, chớ lơ là.", o:["Đúng","Sai"], a:0, why:"大意不得 dùng đúng."},
  {q:"箱子太重，我拿不得。", vi:"Vali nặng quá, tôi xách không nổi.", o:["Đúng","Sai"], a:1, why:"Không đủ sức → 我拿不动。"},
  {q:"怪不得他今天这么高兴。", vi:"Thảo nào hôm nay anh ấy vui thế.", o:["Đúng","Sai"], a:0, why:"怪不得 = thảo nào."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我＿不得离开这里。", vi:"Tôi không nỡ rời nơi này.", o:["舍","怪","恨"], a:0, why:"舍不得."},
  {q:"我恨不得＿回家。", vi:"Tôi chỉ muốn về nhà ngay.", o:["马上","已经","不用"], a:0, why:"恨不得马上……."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Áo này đắt quá, tôi tiếc không mua.", a:"这件衣服太贵了，我舍不得买。"},
  {q:"Nấm này có độc, không ăn được.", a:"这蘑菇有毒，吃不得。/ 这种蘑菇有毒，吃不得。"}]}],
rel:["三48","新4.48","新5.26"]
};
