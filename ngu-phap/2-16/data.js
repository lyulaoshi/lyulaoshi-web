// Bài ngữ pháp 【二16】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二16", title:"频率、重复副词：重新、经常、老、老是、又", vi:"Phó từ tần suất, lặp lại — làm lại, thường xuyên, cứ, lại", tag:"词类 · 副词",
goals:[
 "Dùng <b>经常</b> (thường xuyên) và <b>老 / 老是</b> (cứ, hay — thường than phiền).",
 "Dùng <b>又</b> cho việc <b>đã</b> lặp lại, phân biệt với <b>再</b> 【一12】.",
 "Dùng <b>重新</b> (làm lại từ đầu)."],
intro:"Các phó từ này đứng <b>trước động từ</b>. Điểm dễ nhầm nhất: <b>又</b> (đã lại) và <b>再</b> (sẽ lại).",
rules:[
 {t:"经常 · 老 · 老是", sub:"频率", fx:[["Chủ ngữ",""],["经常 / 老 / 老是",null],["Động từ",""]], mean:"经常 thường xuyên (trung tính) · 老 / 老是 cứ, lúc nào cũng (thường mang ý không vừa lòng).",
  ex:[["我[经常]看见他在图书馆学习。","Wǒ jīngcháng kànjiàn tā zài túshūguǎn xuéxí.","Tôi thường thấy anh ấy học ở thư viện.","等级标准"],
      ["这个汉字有点儿难，我[老]写错。","Zhège Hànzì yǒudiǎnr nán, wǒ lǎo xiěcuò.","Chữ Hán này hơi khó, tôi cứ viết sai.","等级标准"],
      ["这个月北京[老是]下雨。","Zhège yuè Běijīng lǎoshì xià yǔ.","Tháng này Bắc Kinh cứ mưa suốt.","等级标准"]]},
 {t:"又: lại (đã lặp lại)", sub:"又", fx:[["Chủ ngữ",""],["又",null],["Động từ","(+了)"]], mean:"Việc lặp lại <b>đã xảy ra</b>.",
  ex:[["我们队[又]进了一个球。","Wǒmen duì yòu jìn le yí ge qiú.","Đội chúng ta lại ghi thêm một bàn.","等级标准"]]},
 {t:"重新: (làm) lại từ đầu", sub:"重新", fx:[["Chủ ngữ",""],["重新",null],["Động từ",""]], mean:"Làm lại một lần nữa, thường vì lần trước chưa tốt.",
  ex:[["这篇作文我要[重新]写一遍。","Zhè piān zuòwén wǒ yào chóngxīn xiě yí biàn.","Bài văn này tôi phải viết lại một lượt.","等级标准"]]}],
notes:[
 {t:"又 hay 再?", html:"<span class='zh'>他昨天来了，今天又来了。</span> (đã) · <span class='zh'>欢迎你明天再来。</span> (sẽ) 【一12】."}],
cmp:[
 {vn:"Anh ấy lại đến rồi.", zh:"他[又]来了。", py:"Tā yòu lái le.", ok:true, why:"Đã xảy ra → 又."},
 {vn:"Mai lại đến nhé.", zh:"明天[再]来吧。", py:"Míngtiān zài lái ba.", ok:true, why:"Chưa xảy ra → 再."},
 {vn:"Tôi cứ quên.", zh:"我[老是]忘。", py:"Wǒ lǎoshì wàng.", ok:true, why:"“cứ” (than phiền) → 老 / 老是."}],
ex:[
 ["他[经常]迟到。","Tā jīngcháng chídào.","Anh ấy thường xuyên đến muộn."],
 ["你怎么[又]忘了？","Nǐ zěnme yòu wàng le?","Sao bạn lại quên nữa rồi?"],
 ["电脑[老是]有问题。","Diànnǎo lǎoshì yǒu wèntí.","Máy tính cứ có vấn đề suốt."],
 ["我们[重新]开始吧。","Wǒmen chóngxīn kāishǐ ba.","Chúng ta bắt đầu lại từ đầu nhé."]],
errs:[
 {bad:"他昨天来了，今天再来了。", good:"他昨天来了，今天又来了。", why:"Đã xảy ra dùng 又."},
 {bad:"明天你又来吧。", good:"明天你再来吧。", why:"Chưa xảy ra dùng 再."},
 {bad:"我写错老。", good:"我老写错。", why:"老 trước động từ."},
 {bad:"这篇作文我要写重新。", good:"这篇作文我要重新写。", why:"重新 trước động từ."}],
practice:[
 {t:"A. Điền 又 hoặc 再", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他昨天迟到了，今天＿＿迟到了。", vi:"Hôm qua anh ấy đến muộn, hôm nay ＿＿ đến muộn.", o:["又","再"], a:0, why:"Đã xảy ra."},
  {q:"这个电影很好看，我想＿＿看一遍。", vi:"Bộ phim này rất hay, tôi muốn ＿＿ xem một lần nữa.", o:["又","再"], a:1, why:"Chưa xảy ra."},
  {q:"你怎么＿＿忘带书了？", vi:"Sao bạn ＿＿ quên mang sách rồi?", o:["又","再"], a:0, why:"Đã xảy ra."},
  {q:"请您明天＿＿来。", vi:"Mời ông mai ＿＿ đến.", o:["又","再"], a:1, why:"Chưa xảy ra."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个月","北京","老是","下雨"], a:"这个月北京老是下雨。", vi:"Tháng này Bắc Kinh cứ mưa suốt."},
  {w:["我们队","又","进了","一个球"], a:"我们队又进了一个球。", vi:"Đội ta lại ghi thêm một bàn."},
  {w:["我","要","重新","写","一遍"], a:"我要重新写一遍。", vi:"Tôi phải viết lại một lượt."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi thường thấy anh ấy ở thư viện.", a:"我经常在图书馆看见他。/ 我经常看见他在图书馆。"},
  {q:"Sao bạn lại quên nữa rồi?", a:"你怎么又忘了？"},
  {q:"Chữ này tôi cứ viết sai.", a:"这个字我老（老是）写错。"}]}],
rel:["一12","二15","三15","二04"]
};
