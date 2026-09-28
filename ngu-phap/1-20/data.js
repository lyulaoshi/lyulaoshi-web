// Bài ngữ pháp 【一20】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一20", title:"结构助词：的、地", vi:"Trợ từ kết cấu 的 và 地", tag:"词类 · 助词",
goals:[
 "Dùng <b>的</b> nối định ngữ với danh từ: <b>我的书、很漂亮的衣服</b>.",
 "Dùng <b>地</b> nối trạng ngữ với động từ: <b>高兴地说</b>.",
 "Nhớ trật tự <b>phần bổ nghĩa + 的 + danh từ</b> — ngược “sách <b>của tôi</b>”."],
intro:"的 và 地 đều đọc <b>de</b> (thanh nhẹ). 的 đứng trước <b>danh từ</b>; 地 đứng trước <b>động từ</b>.",
rules:[
 {t:"Định ngữ + 的 + danh từ", sub:"的¹", fx:[["Người / tính từ / cụm từ",""],["的",null],["Danh từ",""]], mean:"“của…”, “…mà…”, “(tính chất)”. Phần bổ nghĩa luôn đứng <b>trước</b>.",
  ex:[["你[的]衣服很好看。","Nǐ de yīfu hěn hǎokàn.","Quần áo của bạn rất đẹp.","等级标准"],
      ["这是很漂亮[的]衣服。","Zhè shì hěn piàoliang de yīfu.","Đây là bộ quần áo rất đẹp."]]},
 {t:"Tính từ + 地 + động từ", sub:"地", fx:[["Tính từ","高兴、认真…"],["地",null],["Động từ",""]], mean:"Nói cách thức làm việc: vui vẻ nói, chăm chỉ học…",
  ex:[["他高兴[地]说：“我明天回家。”","Tā gāoxìng de shuō: “Wǒ míngtiān huí jiā.”","Anh ấy vui vẻ nói: “Mai tôi về nhà.”","等级标准"],
      ["同学们认真[地]学习。","Tóngxuémen rènzhēn de xuéxí.","Các bạn chăm chỉ học tập."]]}],
notes:[
 {t:"Khi nào bỏ 的", html:"đại từ + người thân / tập thể: <span class='zh'>我妈妈、我们学校</span>; tính từ một âm tiết + danh từ: <span class='zh'>好朋友、新书</span>; danh từ chỉ loại: <span class='zh'>中文书</span>."}],
cmp:[
 {vn:"sách của tôi", zh:"我[的]书", py:"wǒ de shū", ok:true, why:"“của tôi” lên trước danh từ."},
 {vn:"người mà tôi thích", zh:"我喜欢[的]人", py:"wǒ xǐhuan de rén", ok:true, why:"Cả cụm bổ nghĩa đứng trước 的 + danh từ."},
 {vn:"vui vẻ nói", zh:"高兴[地]说", py:"gāoxìng de shuō", ok:true, why:"Cách thức trước động từ, nối bằng 地."}],
ex:[
 ["这是谁[的]手机？","Zhè shì shéi de shǒujī?","Đây là điện thoại của ai?"],
 ["我喜欢红色[的]衣服。","Wǒ xǐhuan hóngsè de yīfu.","Tôi thích quần áo màu đỏ."],
 ["他是我[的]好朋友。","Tā shì wǒ de hǎo péngyou.","Anh ấy là bạn thân của tôi."],
 ["孩子们快乐[地]唱歌。","Háizimen kuàilè de chàng gē.","Bọn trẻ vui vẻ hát."]],
errs:[
 {bad:"书的我", good:"我的书", why:"Người sở hữu đứng trước."},
 {bad:"这是很漂亮衣服。", good:"这是很漂亮的衣服。", why:"很 + tính từ làm định ngữ cần 的."},
 {bad:"他高兴的说。", good:"他高兴地说。", why:"Trước động từ viết 地."},
 {bad:"我喜欢的人他。", good:"我喜欢他。/ 他是我喜欢的人。", why:"Cụm 的 phải đi với danh từ đứng sau."}],
practice:[
 {t:"A. Điền 的 hoặc 地", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这是我＿＿书。", vi:"Đây là sách ＿＿ tôi.", o:["的","地"], a:0, why:"Trước danh từ → 的."},
  {q:"他认真＿＿写汉字。", vi:"Anh ấy chăm chú ＿＿ viết chữ Hán.", o:["的","地"], a:1, why:"Trước động từ → 地."},
  {q:"她是很好＿＿老师。", vi:"Cô ấy là một giáo viên rất tốt ＿＿.", o:["的","地"], a:0, why:"Trước danh từ → 的."},
  {q:"妈妈高兴＿＿笑了。", vi:"Mẹ vui vẻ ＿＿ cười.", o:["的","地"], a:1, why:"Trước động từ → 地."}]},
 {t:"B. Sắp xếp thành cụm / câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你的","衣服","很","好看"], a:"你的衣服很好看。", vi:"Quần áo của bạn rất đẹp."},
  {w:["这","是","谁的","手机"], a:"这是谁的手机？", vi:"Đây là điện thoại của ai?"},
  {w:["他","高兴地","说"], a:"他高兴地说。", vi:"Anh ấy vui vẻ nói."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"điện thoại của mẹ tôi", a:"我妈妈的手机"},
  {q:"cuốn sách tôi mua hôm qua", a:"我昨天买的书"},
  {q:"Các bạn chăm chỉ học tập.", a:"同学们认真地学习。"}]}],
rel:["一27","一28","二31","二38"]
};
