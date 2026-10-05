// Bài ngữ pháp 【一18】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一18", title:"介词：比", vi:"Giới từ 比 — so sánh “hơn”", tag:"词类 · 介词 · 引出对象",
goals:[
 "Dùng <b>A 比 B + tính từ</b> để so sánh hơn.",
 "Sửa trật tự tiếng Việt “A cao <b>hơn</b> B” → A 比 B 高.",
 "Không đặt 很、非常、真 trước tính từ trong câu 比."],
intro:"比 dẫn ra đối tượng đem ra so sánh. Tiếng Việt: A + tính từ + <b>hơn</b> + B; tiếng Trung: A + <b>比 B</b> + tính từ.",
rules:[
 {t:"A 比 B + tính từ", sub:"比", fx:[["A",""],["比",null],["B",""],["Tính từ",""]], mean:"A … hơn B. Tính từ đứng <b>cuối</b>, không có 很.",
  ex:[["哥哥[比]弟弟高。","Gēge bǐ dìdi gāo.","Anh trai cao hơn em trai.","等级标准"],
      ["这个房间[比]那个房间大。","Zhège fángjiān bǐ nàge fángjiān dà.","Phòng này rộng hơn phòng kia.","等级标准"]]}],
notes:[
 {t:"Không dùng 很 / 非常 / 真", html:"<svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> <span class='zh'>他比我很高。</span> Muốn nhấn mạnh thì dùng 更 / 还 (HSK 2 【二58】): <span class='zh'>他比我更高。</span>"},
 {t:"Phủ định", html:"dùng <span class='zh'>A 没有 B + tính từ</span> 【一38】: <span class='zh'>弟弟没有哥哥高。</span>"},
 {t:"B có thể rút gọn", html:"<span class='zh'>我的手机比你的（手机）新。</span>"}],
cmp:[
 {vn:"Anh trai cao hơn em trai.", zh:"哥哥[比弟弟]高。", py:"Gēge bǐ dìdi gāo.", ok:true, why:"“hơn em trai” → 比弟弟 đứng trước tính từ."},
 {vn:"Hôm nay nóng hơn hôm qua.", zh:"今天[比昨天]热。", py:"Jīntiān bǐ zuótiān rè.", ok:true, why:"Thời gian cũng so sánh được."}],
ex:[
 ["今天[比]昨天热。","Jīntiān bǐ zuótiān rè.","Hôm nay nóng hơn hôm qua."],
 ["我的手机[比]你的新。","Wǒ de shǒujī bǐ nǐ de xīn.","Điện thoại của tôi mới hơn của bạn."],
 ["坐飞机[比]坐火车快。","Zuò fēijī bǐ zuò huǒchē kuài.","Đi máy bay nhanh hơn đi tàu hỏa."],
 ["她[比]我忙。","Tā bǐ wǒ máng.","Cô ấy bận hơn tôi."]],
errs:[
 {bad:"哥哥高比弟弟。", good:"哥哥比弟弟高。", why:"Dịch theo “cao hơn” — sai trật tự."},
 {bad:"哥哥比弟弟很高。", good:"哥哥比弟弟高。", why:"Không dùng 很 trong câu 比."},
 {bad:"哥哥比弟弟是高。", good:"哥哥比弟弟高。", why:"Câu tính từ không dùng 是."},
 {bad:"今天比昨天不热。", good:"今天没有昨天热。", why:"Phủ định dùng 没有 【一38】."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay nóng hơn hôm qua.", o:["今天热比昨天。","今天比昨天热。","今天比昨天很热。"], a:1, why:"A 比 B + adj."},
  {q:"Cô ấy bận hơn tôi.", o:["她比我忙。","她忙比我。","她比我是忙。"], a:0, why:"A 比 B + adj."},
  {q:"Phòng này rộng hơn phòng kia.", o:["这个房间比那个房间非常大。","这个房间大比那个房间。","这个房间比那个房间大。"], a:2, why:"Không có 非常."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["哥哥","比","弟弟","高"], a:"哥哥比弟弟高。", vi:"Anh trai cao hơn em trai."},
  {w:["我的","手机","比","你的","新"], a:"我的手机比你的新。", vi:"Điện thoại của tôi mới hơn của bạn."},
  {w:["坐飞机","比","坐火车","快"], a:"坐飞机比坐火车快。", vi:"Đi máy bay nhanh hơn đi tàu hỏa."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi cao hơn em gái.", a:"我比妹妹高。"},
  {q:"Cái áo này đắt hơn cái kia.", a:"这件衣服比那件贵。"},
  {q:"Tiếng Trung khó hơn tiếng Anh không?", a:"中文比英语难吗？"}]}],
rel:["一38","二58","二59","三58"]
};
