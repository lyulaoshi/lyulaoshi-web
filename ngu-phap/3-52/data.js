// Bài ngữ pháp 【三52】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三52", title:"数量补语5：动词＋时量补语（动作结束后到某个时间点的间隔）", vi:"Bổ ngữ số lượng 5 — V + thời lượng: đã … được bao lâu", tag:"句子成分 · 补语",
goals:[
 "Nói từ khi hành động <b>xảy ra xong</b> đến nay đã bao lâu: 来中国两个月了.",
 "Dùng với động từ không kéo dài được (来、去、结婚、毕业、离开…).",
 "Tân ngữ đứng <b>trước</b> thời lượng; câu thường có 了 cuối."],
intro:"Khác 【三51】 (hành động kéo dài bao lâu), ở đây hành động xảy ra <b>trong chốc lát</b>, thời lượng là <b>khoảng thời gian từ đó đến nay</b>.",
rules:[
 {t:"S + V (+ O) + thời lượng + 了", sub:"间隔", fx:[["Chủ ngữ",""],["V + tân ngữ",""],["thời lượng",null],["了",null]], mean:"",
  ex:[["他们来中国[两个月]了。","Tāmen lái Zhōngguó liǎng ge yuè le.","Họ đến Trung Quốc được hai tháng rồi.","等级标准"],
      ["哥哥去北京[一个星期]了。","Gēge qù Běijīng yí ge xīngqī le.","Anh trai đi Bắc Kinh được một tuần rồi.","等级标准"],
      ["我父母结婚[二十年]了。","Wǒ fùmǔ jié hūn èrshí nián le.","Bố mẹ tôi cưới nhau được 20 năm rồi.","等级标准"]]}],
cmp:[
 {vn:"Tôi tốt nghiệp được ba năm rồi.", zh:"我毕业[三年]了。", py:"Wǒ bìyè sān nián le.", ok:true, why:"Động từ tức thời (毕业) + thời lượng + 了 = đã … được bao lâu."}],
ex:[
 ["他离开家[半年]了。","Tā líkāi jiā bàn nián le.","Anh ấy rời nhà được nửa năm rồi."],
 ["我到这儿[十分钟]了。","Wǒ dào zhèr shí fēnzhōng le.","Tôi đến đây được 10 phút rồi."]],
errs:[
 {bad:"他们来了两个月中国。", good:"他们来中国两个月了。", why:"Tân ngữ trước thời lượng."},
 {bad:"我两年毕业了。", good:"我毕业两年了。", why:"Thời lượng sau động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Họ đến Trung Quốc hai tháng rồi.", o:["他们来了两个月中国。","他们来中国两个月了。"], a:1, why:"V + O + thời lượng + 了."},
  {q:"Tôi tốt nghiệp hai năm rồi.", o:["我两年毕业了。","我毕业两年了。"], a:1, why:"V + thời lượng + 了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我父母","结婚","二十年","了"], a:"我父母结婚二十年了。", vi:"Bố mẹ tôi cưới nhau được 20 năm rồi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Anh ấy rời nhà được nửa năm rồi.", a:"他离开家半年了。"},
  {q:"Tôi đến đây được 10 phút rồi.", a:"我到这儿十分钟了。/ 我来这儿十分钟了。"}]}],
rel:["三51","二12","三05","一40"]
};
