// Bài ngữ pháp 【二53】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二53", title:"数量补语2：形容词＋数量补语", vi:"Bổ ngữ số lượng 2 — tính từ + (hơn) bao nhiêu", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>tính từ + số lượng</b> để nói chênh lệch cụ thể: 大两岁 (lớn hơn hai tuổi).",
 "Dùng <b>tính từ + 一点儿 / 一些</b> (hơn một chút).",
 "Kết hợp với câu 比: A 比 B + Adj + số lượng."],
intro:"Số lượng đứng <b>sau tính từ</b>, cho biết hơn / kém <b>bao nhiêu</b> — giống “lớn hơn <b>hai tuổi</b>” của tiếng Việt.",
rules:[
 {t:"(A 比 B) + Adj + số lượng / 一点儿 / 一些", sub:"形容词＋数量补语", fx:[["(A 比 B)",""],["Tính từ",""],["số lượng / 一点儿 / 一些",null]], mean:"",
  ex:[["我比弟弟大[两岁]。","Wǒ bǐ dìdi dà liǎng suì.","Tôi lớn hơn em trai hai tuổi.","等级标准"],
      ["昨天很热，今天凉快[一点儿]。","Zuótiān hěn rè, jīntiān liángkuai yìdiǎnr.","Hôm qua rất nóng, hôm nay mát hơn một chút.","等级标准"],
      ["她的中文比我流利[一些]。","Tā de Zhōngwén bǐ wǒ liúlì yìxiē.","Tiếng Trung của cô ấy lưu loát hơn tôi một chút.","等级标准"]]}],
notes:[
 {t:"Adj + 一点儿 ≠ 有点儿 + Adj", html:"<span class='zh'>便宜一点儿</span> (rẻ hơn chút — so sánh) · <span class='zh'>有点儿贵</span> (hơi đắt — không vừa ý) 【二13】."}],
cmp:[
 {vn:"Tôi lớn hơn em hai tuổi.", zh:"我比弟弟大[两岁]。", py:"Wǒ bǐ dìdi dà liǎng suì.", ok:true, why:"Số tuổi sau tính từ — giống tiếng Việt."},
 {vn:"Rẻ hơn một chút được không?", zh:"便宜[一点儿]吧！", py:"Piányi yìdiǎnr ba!", ok:true, why:"一点儿 sau tính từ."}],
ex:[
 ["这件比那件贵[五十块]。","Zhè jiàn bǐ nà jiàn guì wǔshí kuài.","Chiếc này đắt hơn chiếc kia 50 tệ."],
 ["你说慢[一点儿]，好吗？","Nǐ shuō màn yìdiǎnr, hǎo ma?","Bạn nói chậm một chút được không?"],
 ["他比我高[一点儿]。","Tā bǐ wǒ gāo yìdiǎnr.","Anh ấy cao hơn tôi một chút."]],
errs:[
 {bad:"我比弟弟两岁大。", good:"我比弟弟大两岁。", why:"Số lượng đứng sau tính từ."},
 {bad:"今天一点儿凉快。", good:"今天凉快一点儿。", why:"一点儿 sau tính từ."},
 {bad:"他比我很高一点儿。", good:"他比我高一点儿。", why:"Không dùng 很."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi lớn hơn em hai tuổi.", o:["我比弟弟两岁大。","我比弟弟大两岁。","我大比弟弟两岁。"], a:1, why:"Adj + số lượng."},
  {q:"Nói chậm một chút.", o:["说一点儿慢。","说慢一点儿。","说有点儿慢。"], a:1, why:"Adj + 一点儿."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","比","弟弟","大","两岁"], a:"我比弟弟大两岁。", vi:"Tôi lớn hơn em trai hai tuổi."},
  {w:["今天","凉快","一点儿"], a:"今天凉快一点儿。", vi:"Hôm nay mát hơn một chút."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chiếc này đắt hơn chiếc kia 50 tệ.", a:"这件比那件贵五十块。"},
  {q:"Anh ấy cao hơn tôi một chút.", a:"他比我高一点儿。"}]}],
rel:["二58","二13","一18","二52"]
};
