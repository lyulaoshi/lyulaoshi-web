// Bài ngữ pháp 【新4.30】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.30", title:"在……方面", vi:"在……方面 — về mặt …", tag:"短语 · 固定格式",
goals:[
 "Giới hạn phạm vi nhận xét bằng <b>在……方面</b>: về mặt …",
 "Đặt cụm ở đầu câu hoặc sau chủ ngữ.",
 "Phân biệt 方面 với 上 / 里."],
intro:"“<b>Về mặt</b> âm nhạc, anh ấy rất giỏi.” → 在音乐<b>方面</b>，他很厉害。",
rules:[
 {t:"在 + lĩnh vực + 方面，S + …", sub:"范围", fx:[["在",null],["lĩnh vực",""],["方面",null],["S + nhận xét",""]], mean:"Xét về …",
  ex:[["{1|在}{2|学习}{3|方面}，{4|他帮了我很多}。","Zài xuéxí fāngmiàn, tā bāngle wǒ hěn duō.","Về mặt học tập, anh ấy giúp tôi rất nhiều."],
      ["他{1|在}{2|音乐}{3|方面}{4|很有经验}。","Tā zài yīnyuè fāngmiàn hěn yǒu jīngyàn.","Anh ấy rất có kinh nghiệm về âm nhạc."]]}],
notes:[{t:"Số phương diện", html:"<span class='zh'>在很多方面、在这方面</span> = về nhiều mặt, về mặt này."}],
cmp:[
 {vn:"Về mặt này, tôi không bằng bạn.", zh:"[在]这[方面]，我不如你。", py:"Zài zhè fāngmiàn, wǒ bùrú nǐ.", ok:true, why:"在 + 这 + 方面."}],
ex:[
 ["[在]生活[方面]，他很简单。","Zài shēnghuó fāngmiàn, tā hěn jiǎndān.","Về sinh hoạt, anh ấy rất giản dị."],
 ["这两个城市[在]气候[方面]很不一样。","Zhè liǎng gè chéngshì zài qìhòu fāngmiàn hěn bù yíyàng.","Hai thành phố này rất khác nhau về khí hậu."],
 ["公司[在]技术[方面]进步很快。","Gōngsī zài jìshù fāngmiàn jìnbù hěn kuài.","Công ty tiến bộ rất nhanh về mặt kỹ thuật."]],
errs:[
 {bad:"在方面学习，他很好。", good:"在学习方面，他很好。", why:"Lĩnh vực đặt giữa 在 và 方面."},
 {bad:"关于学习方面里，他很好。", good:"在学习方面，他很好。", why:"Không chồng 关于 và 里."},
 {bad:"他在学习方面里很努力。", good:"他在学习方面很努力。", why:"Sau 方面 không thêm 里."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Về mặt học tập, anh ấy rất chăm.", o:["在学习方面，他很努力。","在方面学习，他很努力。","他学习在方面很努力。"], a:0, why:"在 + 学习 + 方面."},
  {q:"＿这方面，我不如你。", vi:"Về mặt này, tôi không bằng bạn.", o:["在","从","对于在"], a:0, why:"在这方面."},
  {q:"他在音乐＿很有经验。", vi:"Anh ấy rất có kinh nghiệm về âm nhạc.", o:["方面","方便","地方"], a:0, why:"方面 = mặt; 方便 = tiện lợi."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["公司","在","技术","方面","进步","很快"], a:"公司在技术方面进步很快。", alt:["在技术方面公司进步很快。"], vi:"Công ty tiến bộ rất nhanh về kỹ thuật."},
  {w:["在这方面，","我","不如","你"], a:"在这方面，我不如你。", vi:"Về mặt này, tôi không bằng bạn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Về mặt học tập, anh ấy giúp tôi rất nhiều.", a:"在学习方面，他帮了我很多。/ 在学习方面他帮助了我很多。"}]}],
rel:["三40","新4.32","新3.45"]
};
