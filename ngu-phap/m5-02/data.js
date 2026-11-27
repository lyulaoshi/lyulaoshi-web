// Bài ngữ pháp 【新5.02】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.02", title:"指示代词：彼此、如此、本", vi:"彼此, 如此, 本 — lẫn nhau, như thế, (bên) này", tag:"词类 · 代词",
goals:[
 "Dùng <b>彼此</b> để nói hai bên / các bên <b>lẫn nhau</b>.",
 "Dùng <b>如此</b> thay cho 这么, 这样 trong văn viết.",
 "Dùng <b>本</b> để chỉ “bên mình / … này” trong ngôn ngữ trang trọng."],
intro:"Ba đại từ này đều <b>trang trọng</b> hơn 互相, 这样, 这个: hay gặp trong bài viết, thông báo, phát biểu.",
rules:[
 {t:"(S) + 彼此 + V", sub:"（1）彼此", fx:[["S (số nhiều)",""],["彼此",null],["V",""]], mean:"Lẫn nhau, bên này bên kia.",
  ex:[["{1|我们}应该{2|彼此}{3|尊重}。","Wǒmen yīnggāi bǐcǐ zūnzhòng.","Chúng ta nên tôn trọng lẫn nhau."],
      ["{1|他们}{2|彼此}之间很{3|了解}。","Tāmen bǐcǐ zhījiān hěn liǎojiě.","Giữa họ rất hiểu nhau."]]},
 {t:"如此 + Adj / V", sub:"（2）如此", fx:[["S",""],["如此",null],["Adj / V",""]], mean:"Như thế, đến thế.",
  ex:[["没想到{1|结果}{2|如此}{3|顺利}。","Méi xiǎngdào jiéguǒ rúcǐ shùnlì.","Không ngờ kết quả thuận lợi đến thế."]]},
 {t:"本 + danh từ", sub:"（3）本", fx:[["本",null],["đơn vị / thời gian",""]], mean:"… này, … của chúng tôi.",
  ex:[["{1|本}{2|公司}欢迎您的到来。","Běn gōngsī huānyíng nín de dàolái.","Công ty chúng tôi hoan nghênh quý vị."],
      ["{1|本}{2|书}一共有十课。","Běn shū yígòng yǒu shí kè.","Cuốn sách này gồm mười bài."]]}],
cmp:[
 {vn:"Vợ chồng nên thông cảm cho nhau.", zh:"夫妻之间应该[彼此]理解。", py:"Fūqī zhījiān yīnggāi bǐcǐ lǐjiě.", ok:true, why:"彼此 đứng trước động từ như “lẫn nhau”."}],
ex:[
 ["我们认识多年，[彼此]都很熟悉。","Wǒmen rènshi duō nián, bǐcǐ dōu hěn shúxī.","Chúng tôi quen nhau nhiều năm, đều rất hiểu nhau."],
 ["他[如此]努力，一定会成功。","Tā rúcǐ nǔlì, yídìng huì chénggōng.","Anh ấy nỗ lực như thế, nhất định thành công."],
 ["[本]店周末照常营业。","Běn diàn zhōumò zhàocháng yíngyè.","Cửa hàng chúng tôi cuối tuần vẫn mở cửa."]],
errs:[
 {bad:"他们帮助彼此。", good:"他们彼此帮助。", why:"彼此 thường đứng trước động từ."},
 {bad:"结果顺利如此。", good:"结果如此顺利。", why:"如此 đứng trước tính từ."},
 {bad:"本这个公司欢迎您。", good:"本公司欢迎您。", why:"Sau 本 đặt thẳng danh từ, không thêm 这个."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"同学之间要＿帮助。", vi:"Bạn học với nhau phải giúp đỡ lẫn nhau.", o:["彼此","如此","本"], a:0, why:"Lẫn nhau → 彼此."},
  {q:"天气＿热，大家都不想出门。", vi:"Trời nóng đến thế, mọi người đều không muốn ra ngoài.", o:["本","如此","彼此"], a:1, why:"如此 + Adj."},
  {q:"＿次会议到此结束。", vi:"Cuộc họp lần này đến đây kết thúc.", o:["本","彼此","如此"], a:0, why:"本次 = lần này."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","应该","彼此","尊重"], a:"我们应该彼此尊重。", vi:"Chúng ta nên tôn trọng lẫn nhau."},
  {w:["没想到","结果","如此","顺利"], a:"没想到结果如此顺利。", vi:"Không ngờ kết quả thuận lợi đến thế."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Công ty chúng tôi hoan nghênh quý vị (dùng 本).", a:"本公司欢迎您。/ 本公司欢迎您的到来。"},
  {q:"Chúng ta nên hiểu nhau (dùng 彼此).", a:"我们应该彼此了解。/ 我们应该彼此理解。/ 我们要彼此理解。/ 我们要彼此了解。"}]}],
rel:["三17","二07","新4.18"]
};
