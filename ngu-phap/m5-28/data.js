// Bài ngữ pháp 【新5.28】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.28", title:"状态补语2：动词／形容词＋得＋动词短语／主谓短语／固定短语", vi:"Bổ ngữ trạng thái 2 — … đến mức …", tag:"句子成分 · 补语",
goals:[
 "Sau <b>得</b> dùng <b>cụm động từ</b>: 累得走不动.",
 "Sau 得 dùng <b>cụm chủ – vị</b>: 哭得眼睛都红了.",
 "Sau 得 dùng <b>cụm cố định</b>: 忙得不可开交."],
intro:"Tiếng Việt: “mệt <b>đến mức không đi nổi</b>”. Tiếng Trung: 累<b>得</b>走不动了, không cần thêm 到.",
rules:[
 {t:"V / Adj + 得 + cụm động từ", sub:"（1）", fx:[["S",""],["V / Adj",""],["得",null],["cụm động từ",""]], mean:"Đến mức làm gì / không làm được gì.",
  ex:[["{1|我}{2|累}{3|得}{4|走不动了}。","Wǒ lèi de zǒu bu dòng le.","Tôi mệt đến không đi nổi."],
      ["{1|他}{2|气}{3|得}{4|说不出话来}。","Tā qì de shuō bu chū huà lái.","Anh ấy tức đến không nói nên lời."]]},
 {t:"V / Adj + 得 + chủ ngữ + vị ngữ", sub:"（2）", fx:[["S",""],["V / Adj",""],["得",null],["chủ – vị",""]], mean:"Đến mức cái gì thế nào.",
  ex:[["{1|她}{2|哭}{3|得}{4|眼睛都红了}。","Tā kū de yǎnjing dōu hóng le.","Cô ấy khóc đỏ cả mắt."]]},
 {t:"V / Adj + 得 + cụm cố định", sub:"（3）", fx:[["S",""],["V / Adj",""],["得",null],["cụm cố định",""]], mean:"",
  ex:[["{1|大家}{2|忙}{3|得}{4|不可开交}。","Dàjiā máng de bùkě-kāijiāo.","Mọi người bận túi bụi."],
      ["{1|孩子们}{2|玩儿}{3|得}{4|高高兴兴的}。","Háizimen wánr de gāogāoxìngxìng de.","Bọn trẻ chơi vui vẻ."]]}],
cmp:[
 {vn:"Tôi buồn ngủ đến mức mở mắt không ra.", zh:"我困[得]眼睛都睁不开了。", py:"Wǒ kùn de yǎnjing dōu zhēng bu kāi le.", ok:true, why:"“đến mức” = 得."}],
ex:[
 ["他紧张[得]手一直发抖。","Tā jǐnzhāng de shǒu yìzhí fādǒu.","Anh ấy căng thẳng đến run tay."],
 ["我们笑[得]肚子都疼了。","Wǒmen xiào de dùzi dōu téng le.","Chúng tôi cười đau cả bụng."],
 ["天热[得]让人受不了。","Tiān rè de ràng rén shòu bu liǎo.","Trời nóng đến không chịu nổi."]],
errs:[
 {bad:"我累到得走不动了。", good:"我累得走不动了。", why:"Chỉ dùng 得."},
 {bad:"她哭眼睛得红了。", good:"她哭得眼睛红了。", why:"得 đứng ngay sau động từ."},
 {bad:"他气得很说不出话。", good:"他气得说不出话来。", why:"Sau 得 chỉ một phần bổ ngữ, không chen 很."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy khóc đỏ cả mắt.", o:["她哭得眼睛都红了。","她哭眼睛得都红了。"], a:0, why:"V + 得 + chủ – vị."},
  {q:"我累＿走不动了。", vi:"Tôi mệt đến không đi nổi.", o:["得","的","地"], a:0, why:"Bổ ngữ dùng 得."},
  {q:"大家忙得不可＿。", vi:"Mọi người bận túi bụi.", o:["开交","开心","开始"], a:0, why:"不可开交."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","笑","得","肚子","都疼了"], a:"我们笑得肚子都疼了。", vi:"Chúng tôi cười đau cả bụng."},
  {w:["他","气","得","说不出","话来"], a:"他气得说不出话来。", vi:"Anh ấy tức đến không nói nên lời."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi buồn ngủ đến mức mở mắt không ra.", a:"我困得眼睛都睁不开了。/ 我困得睁不开眼睛了。/ 我困得眼睛睁不开了。"},
  {q:"Trời nóng đến không chịu nổi.", a:"天热得让人受不了。/ 天气热得让人受不了。/ 天热得受不了。"}]}],
rel:["二51","三48","新5.26"]
};
