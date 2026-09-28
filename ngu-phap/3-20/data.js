// Bài ngữ pháp 【三20】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三20", title:"介词：由", vi:"Giới từ 由¹ — từ (điểm xuất phát, lối đi)", tag:"词类 · 介词 · 引出时间、处所",
goals:[
 "Dùng <b>由 + nơi chốn + động từ</b>: xuất phát từ đâu, đi qua lối nào.",
 "Biết 由 mang sắc thái trang trọng hơn 从.",
 "Đặt cụm 由…… trước động từ."],
intro:"由¹ gần nghĩa 从 (từ, qua), thường gặp trong văn viết, thông báo, biển chỉ dẫn.",
rules:[
 {t:"由 + nơi chốn + V", sub:"由¹", fx:[["(S)",""],["由",null],["nơi chốn",""],["出发 / 进入 / 开往…",""]], mean:"",
  ex:[["这路公交车[由]北京机场出发。","Zhè lù gōngjiāochē yóu Běijīng jīchǎng chūfā.","Tuyến xe buýt này xuất phát từ sân bay Bắc Kinh.","等级标准"],
      ["我们[由]南门进入公园。","Wǒmen yóu nánmén jìnrù gōngyuán.","Chúng tôi vào công viên qua cổng Nam.","等级标准"]]}],
cmp:[
 {vn:"Chuyến bay xuất phát từ Hà Nội.", zh:"航班[由]河内出发。", py:"Hángbān yóu Hénèi chūfā.", ok:true, why:"“từ Hà Nội” lên trước động từ; 由 trang trọng như thông báo."}],
ex:[
 ["[由]这儿往前走就是车站。","Yóu zhèr wǎng qián zǒu jiù shì chēzhàn.","Từ đây đi thẳng là đến bến xe."],
 ["比赛[由]下午两点开始。","Bǐsài yóu xiàwǔ liǎng diǎn kāishǐ.","Trận đấu bắt đầu từ 2 giờ chiều."]],
errs:[
 {bad:"我们进入公园由南门。", good:"我们由南门进入公园。", why:"Cụm 由 trước động từ."},
 {bad:"这路车出发由机场。", good:"这路车由机场出发。", why:"Cụm 由 trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chúng tôi vào công viên qua cổng Nam.", o:["我们进入公园由南门。","我们由南门进入公园。"], a:1, why:"由 + nơi + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这路","公交车","由","北京机场","出发"], a:"这路公交车由北京机场出发。", vi:"Tuyến xe buýt này xuất phát từ sân bay Bắc Kinh."},
  {w:["比赛","由","下午两点","开始"], a:"比赛由下午两点开始。", vi:"Trận đấu bắt đầu từ 2 giờ chiều."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chuyến bay xuất phát từ Hà Nội.", a:"航班由河内出发。/ 飞机由河内出发。"}]}],
rel:["一15","二24","三21","三25"]
};
