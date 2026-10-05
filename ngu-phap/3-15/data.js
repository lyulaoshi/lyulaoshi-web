// Bài ngữ pháp 【三15】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三15", title:"频率、重复副词：通常、往往、总、总是", vi:"Phó từ tần suất 通常, 往往, 总, 总是 — thường, hay, luôn luôn", tag:"词类 · 副词",
goals:[
 "Dùng <b>通常</b> (thông thường) và <b>往往</b> (thường hay, theo quy luật).",
 "Dùng <b>总 / 总是</b> (luôn luôn, lúc nào cũng).",
 "Phân biệt 往往 (nói quy luật đã có) với 常常 (có thể dùng cho tương lai)."],
intro:"Bốn phó từ tần suất HSK 3, đứng <b>trước động từ</b>. 通常 có thể đứng đầu câu.",
rules:[
 {t:"通常 · 往往 · 总 · 总是 + V", sub:"频率", fx:[["(S)",""],["通常 / 往往 / 总 / 总是",null],["Động từ",""]], mean:"通常 thông thường · 往往 thường hay (khi có điều kiện nào đó) · 总 / 总是 luôn luôn.",
  ex:[["李经理[通常]很早就到公司。","Lǐ jīnglǐ tōngcháng hěn zǎo jiù dào gōngsī.","Giám đốc Lý thường đến công ty rất sớm.","等级标准"],
      ["为了记住一个汉字，他[往往]要写很多遍。","Wèile jìzhù yí ge Hànzì, tā wǎngwǎng yào xiě hěn duō biàn.","Để nhớ một chữ Hán, anh ấy thường phải viết rất nhiều lượt.","等级标准"],
      ["我[总]弄不明白什么时候用“把”字句，常常一说就错。","Wǒ zǒng nòng bu míngbai shénme shíhou yòng “bǎ” zì jù, chángcháng yì shuō jiù cuò.","Tôi mãi không hiểu khi nào dùng câu chữ “把”, hay nói là sai.","等级标准"],
      ["他去机场[总是]提前两个小时出发。","Tā qù jīchǎng zǒngshì tíqián liǎng ge xiǎoshí chūfā.","Anh ấy ra sân bay lúc nào cũng xuất phát sớm hai tiếng.","等级标准"]]}],
notes:[{t:"往往 và 常常", html:"<span class='zh'>我以后会常常来。</span> <svg class='lli ok' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#tick'/></svg> · <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> <span class='zh'>我以后会往往来。</span> — 往往 chỉ nói quy luật đã quan sát được."}],
cmp:[
 {vn:"Anh ấy lúc nào cũng đến muộn.", zh:"他[总是]迟到。", py:"Tā zǒngshì chídào.", ok:true, why:"“lúc nào cũng” = 总是."}],
ex:[
 ["周末我[通常]在家休息。","Zhōumò wǒ tōngcháng zài jiā xiūxi.","Cuối tuần tôi thường nghỉ ở nhà."],
 ["她[总是]笑着跟大家说话。","Tā zǒngshì xiào zhe gēn dàjiā shuō huà.","Cô ấy lúc nào cũng cười nói với mọi người."],
 ["天气冷的时候，人们[往往]不想出门。","Tiānqì lěng de shíhou, rénmen wǎngwǎng bù xiǎng chū mén.","Khi trời lạnh, người ta thường không muốn ra ngoài."]],
errs:[
 {bad:"我以后往往来看你。", good:"我以后常常来看你。", why:"往往 không dùng cho tương lai."},
 {bad:"他迟到总是。", good:"他总是迟到。", why:"总是 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy lúc nào cũng đến muộn.", o:["他迟到总是。","他总是迟到。","总是迟到他。"], a:1, why:"总是 + V."},
  {q:"Sau này tôi sẽ thường đến thăm bạn.", o:["我以后往往来看你。","我以后常常来看你。"], a:1, why:"Tương lai dùng 常常."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["周末","我","通常","在家","休息"], a:"周末我通常在家休息。", alt:["我周末通常在家休息。"], vi:"Cuối tuần tôi thường nghỉ ở nhà."},
  {w:["他","去机场","总是","提前","出发"], a:"他去机场总是提前出发。", vi:"Anh ấy ra sân bay lúc nào cũng đi sớm."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cô ấy lúc nào cũng cười.", a:"她总是笑。/ 她总是笑着。"},
  {q:"Giám đốc Lý thường đến công ty rất sớm.", a:"李经理通常很早就到公司。"}]}],
rel:["一12","二16","三14","一11"]
};
