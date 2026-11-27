// Bài ngữ pháp 【新4.53】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.53", title:"比较句3：A不如B；跟……相比", vi:"Câu so sánh 3 — 不如, 跟…相比", tag:"句子的类型 · 特殊句型",
goals:[
 "Nói <b>A không bằng B</b> bằng 不如.",
 "Dùng <b>跟……相比</b>: so với …",
 "Không thêm 很 sau tính từ trong câu so sánh."],
intro:"Điểm này tiếp nối 【二58】 (不如) và thêm khung <b>跟 B 相比</b> đặt đầu câu.",
rules:[
 {t:"A + 不如 + B (+ Adj)", sub:"（1）不如", fx:[["A",""],["不如",null],["B",""],["(Adj)",""]], mean:"A không bằng B.",
  ex:[["{1|我的汉语}{2|不如}{3|他}{4|好}。","Wǒ de Hànyǔ bùrú tā hǎo.","Tiếng Trung của tôi không giỏi bằng anh ấy."]]},
 {t:"跟 + B + 相比，A + …", sub:"（2）相比", fx:[["跟",null],["B",""],["相比",null],["，",""],["A + nhận xét",""]], mean:"So với B thì A …",
  ex:[["{1|跟}{2|去年}{3|相比}，{4|今年的人更多}。","Gēn qùnián xiāngbǐ, jīnnián de rén gèng duō.","So với năm ngoái, năm nay đông người hơn."],
      ["{1|跟}{2|城市}{3|相比}，{4|农村安静多了}。","Gēn chéngshì xiāngbǐ, nóngcūn ānjìng duō le.","So với thành phố, nông thôn yên tĩnh hơn nhiều."]]}],
cmp:[
 {vn:"Đi xe buýt không bằng đi tàu điện.", zh:"坐公交车[不如]坐地铁。", py:"Zuò gōngjiāochē bùrú zuò dìtiě.", ok:true, why:"A, B có thể là cụm động từ."}],
ex:[
 ["这个房间[不如]那个大。","Zhège fángjiān bùrú nàge dà.","Phòng này không rộng bằng phòng kia."],
 ["[跟]他[相比]，我的经验太少了。","Gēn tā xiāngbǐ, wǒ de jīngyàn tài shǎo le.","So với anh ấy, kinh nghiệm của tôi quá ít."],
 ["百闻[不如]一见。","Bǎi wén bùrú yí jiàn.","Trăm nghe không bằng một thấy."]],
errs:[
 {bad:"我不如他很高。", good:"我不如他高。", why:"Không thêm 很."},
 {bad:"相比跟去年，今年人多。", good:"跟去年相比，今年人多。", why:"Khung 跟……相比."},
 {bad:"他比我不如。", good:"他不如我。", why:"Chọn 比 hoặc 不如."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi không cao bằng anh ấy.", o:["我不如他高。","我不如他很高。","我高不如他。"], a:0, why:"A 不如 B + Adj."},
  {q:"＿去年相比，今年人更多。", vi:"So với năm ngoái, năm nay đông hơn.", o:["跟","把","让"], a:0, why:"跟……相比."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["跟","城市","相比，","农村","安静多了"], a:"跟城市相比，农村安静多了。", vi:"So với thành phố, nông thôn yên tĩnh hơn nhiều."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Phòng này không rộng bằng phòng kia (dùng 不如).", a:"这个房间不如那个大。/ 这个房间不如那个房间大。"}]}],
rel:["二58","一38","新5.32"]
};
