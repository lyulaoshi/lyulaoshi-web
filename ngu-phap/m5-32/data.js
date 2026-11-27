// Bài ngữ pháp 【新5.32】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.32", title:"比较句4：A＋形容词＋B＋数量补语", vi:"Câu so sánh 4 — A 大 B 两岁", tag:"句子的类型 · 特殊句型",
goals:[
 "So sánh không dùng 比: <b>A + Adj + B + số lượng</b>.",
 "Dùng cho tuổi, chiều cao, giá, số lượng.",
 "Luôn phải có <b>con số chênh lệch</b>."],
intro:"<b>我大他两岁</b> = <b>我比他大两岁</b>. Cách nói gọn, rất khẩu ngữ.",
rules:[
 {t:"A + Adj + B + số lượng", sub:"比较", fx:[["A",""],["Adj",""],["B",""],["số + lượng từ",""]], mean:"A hơn B bao nhiêu.",
  ex:[["{1|哥哥}{2|大}{3|我}{4|三岁}。","Gēge dà wǒ sān suì.","Anh trai hơn tôi ba tuổi."],
      ["{1|他}{2|高}{3|我}{4|一头}。","Tā gāo wǒ yì tóu.","Anh ấy cao hơn tôi một cái đầu."],
      ["{1|这个}{2|贵}{3|那个}{4|十块钱}。","Zhège guì nàge shí kuài qián.","Cái này đắt hơn cái kia mười tệ."]]}],
notes:[{t:"Phủ định / hỏi", html:"<span class='zh'>他大你几岁？</span> · <span class='zh'>他不大我几岁。</span>"}],
cmp:[
 {vn:"Em gái nhỏ hơn tôi hai tuổi.", zh:"妹妹[小我两岁]。", py:"Mèimei xiǎo wǒ liǎng suì.", ok:true, why:"Trật tự giống tiếng Việt “nhỏ hơn tôi 2 tuổi”, bỏ 比."}],
ex:[
 ["姐姐[大我两岁]。","Jiějie dà wǒ liǎng suì.","Chị hơn tôi hai tuổi."],
 ["今天的气温[高昨天五度]。","Jīntiān de qìwēn gāo zuótiān wǔ dù.","Nhiệt độ hôm nay cao hơn hôm qua năm độ."],
 ["我们班[多他们班三个人]。","Wǒmen bān duō tāmen bān sān gè rén.","Lớp tôi đông hơn lớp họ ba người."]],
errs:[
 {bad:"哥哥大我。", good:"哥哥大我三岁。/ 哥哥比我大。", why:"Mẫu này bắt buộc có số lượng."},
 {bad:"哥哥大三岁我。", good:"哥哥大我三岁。", why:"B đứng trước số lượng."},
 {bad:"他高比我一头。", good:"他高我一头。/ 他比我高一头。", why:"Dùng 比 hoặc không, mỗi cách một trật tự."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh trai hơn tôi ba tuổi.", o:["哥哥大我三岁。","哥哥大三岁我。","哥哥我大三岁。"], a:0, why:"A + Adj + B + số."},
  {q:"Câu nào thiếu thành phần?", o:["他高我。","他高我一头。"], a:0, why:"Thiếu số chênh lệch."},
  {q:"这件衣服贵那件五十＿。", vi:"Áo này đắt hơn áo kia 50 tệ.", o:["块钱","个人","岁"], a:0, why:"Giá tiền."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["妹妹","小","我","两岁"], a:"妹妹小我两岁。", vi:"Em gái nhỏ hơn tôi hai tuổi."},
  {w:["他","高","我","一头"], a:"他高我一头。", vi:"Anh ấy cao hơn tôi một cái đầu."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Chị hơn tôi hai tuổi.", a:"姐姐大我两岁。/ 姐姐比我大两岁。"},
  {q:"Nhiệt độ hôm nay cao hơn hôm qua năm độ.", a:"今天的气温高昨天五度。/ 今天的气温比昨天高五度。/ 今天气温比昨天高五度。"}]}],
rel:["二53","一38","新4.67"]
};
