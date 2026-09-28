// Bài ngữ pháp 【二64】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二64", title:"选择复句", vi:"Câu ghép lựa chọn — (là) … hay là …?", tag:"句子的类型 · 复句",
goals:[
 "Hỏi lựa chọn giữa hai vế câu, có hoặc không có từ nối.",
 "Dùng khung <b>(是)……，还是……？</b>",
 "Không thêm 吗 vào câu hỏi lựa chọn."],
intro:"Câu ghép lựa chọn đưa ra <b>hai vế câu</b> để người nghe chọn. Khác 【一47】 ở chỗ mỗi lựa chọn là cả một vế.",
rules:[
 {t:"Không dùng từ nối", sub:"（1）", fx:[["Vế 1？",""],["Vế 2？",null]], mean:"Hai câu hỏi ngắn nối nhau.",
  ex:[["这次旅行你坐火车？坐飞机？","Zhè cì lǚxíng nǐ zuò huǒchē? Zuò fēijī?","Chuyến du lịch này bạn đi tàu? Hay đi máy bay?","等级标准"],
      ["我们星期六去，星期天去？","Wǒmen xīngqīliù qù, xīngqītiān qù?","Mình đi thứ Bảy, hay Chủ nhật?","等级标准"]]},
 {t:"(是)……，还是……？", sub:"（2）", fx:[["(是)",null],["Vế 1",""],["，还是",null],["Vế 2？",""]], mean:"",
  ex:[["你[是]坐火车来的，[还是]坐飞机来的？","Nǐ shì zuò huǒchē lái de, háishi zuò fēijī lái de?","Bạn đến bằng tàu hay bằng máy bay?","等级标准"],
      ["周末你们想去打排球，[还是]想去打篮球？","Zhōumò nǐmen xiǎng qù dǎ páiqiú, háishi xiǎng qù dǎ lánqiú?","Cuối tuần các bạn muốn đi chơi bóng chuyền hay bóng rổ?","等级标准"]]}],
cmp:[
 {vn:"Bạn đi hôm nay hay ngày mai?", zh:"你今天去，[还是]明天去？", py:"Nǐ jīntiān qù, háishi míngtiān qù?", ok:true, why:"“hay” trong câu hỏi = 还是."}],
ex:[
 ["你想在家休息，[还是]想出去玩儿？","Nǐ xiǎng zài jiā xiūxi, háishi xiǎng chūqu wánr?","Bạn muốn ở nhà nghỉ hay muốn ra ngoài chơi?"],
 ["[是]你去，[还是]我去？","Shì nǐ qù, háishi wǒ qù?","Bạn đi hay tôi đi?"]],
errs:[
 {bad:"你想在家休息，还是想出去玩儿吗？", good:"你想在家休息，还是想出去玩儿？", why:"Không thêm 吗."},
 {bad:"你坐火车来的，或者坐飞机来的？", good:"你是坐火车来的，还是坐飞机来的？", why:"Câu hỏi dùng 还是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn đi hôm nay hay ngày mai?", o:["你今天去，还是明天去？","你今天去，还是明天去吗？","你今天去，或者明天去？"], a:0, why:"还是, không 吗."},
  {q:"Bạn đi hay tôi đi?", o:["是你去，还是我去？","你去或者我去吗？","是你去，还是我去吗？"], a:0, why:"是……还是……"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","是","坐火车来的","还是","坐飞机来的"], a:"你是坐火车来的，还是坐飞机来的？", vi:"Bạn đến bằng tàu hay bằng máy bay?"},
  {w:["你","想在家休息","还是","想出去玩儿"], a:"你想在家休息，还是想出去玩儿？", vi:"Bạn muốn ở nhà nghỉ hay ra ngoài chơi?"}]},
 {t:"C. Đặt câu hỏi lựa chọn", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"看电影 / 听音乐", vi:"xem phim / nghe nhạc", a:"你想看电影，还是想听音乐？"},
  {q:"星期六去 / 星期天去", vi:"đi thứ Bảy / đi Chủ nhật", a:"我们星期六去，还是星期天去？"}]}],
rel:["一47","一19","二29","一33"]
};
