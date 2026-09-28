// Bài ngữ pháp 【二31】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二31", title:"结构助词：得", vi:"Trợ từ kết cấu 得 — nối động từ với bổ ngữ trạng thái", tag:"词类 · 助词",
goals:[
 "Dùng <b>động từ + 得 + (phó từ) + tính từ</b> để đánh giá hành động (làm thế nào).",
 "Khi có tân ngữ: <b>(V) + O + V + 得 + Adj</b> — lặp động từ hoặc đưa tân ngữ lên trước.",
 "Phân biệt ba chữ de: 的 (trước danh từ), 地 (trước động từ), 得 (sau động từ)."],
intro:"得 đứng <b>sau động từ</b>, nối với phần nhận xét về cách làm, kết quả (nhanh, tốt, cao hứng…). Tiếng Việt: “chạy <b>(rất) nhanh</b>”.",
rules:[
 {t:"V + 得 + (很 / 不) + Adj", sub:"得", fx:[["Chủ ngữ",""],["Động từ",""],["得",null],["(很 / 不) + tính từ",""]], mean:"Phủ định: V + 得 + 不 + Adj.",
  ex:[["他走[得]有点儿快。","Tā zǒu de yǒudiǎnr kuài.","Anh ấy đi hơi nhanh.","等级标准"],
      ["她篮球打[得]很不错。","Tā lánqiú dǎ de hěn búcuò.","Cô ấy chơi bóng rổ khá giỏi.","等级标准"]]},
 {t:"Có tân ngữ: lặp động từ hoặc đảo tân ngữ", sub:"V + O + V + 得", fx:[["(V) + tân ngữ",""],["V",""],["得",null],["Tính từ",""]], mean:"✗ 他说中文得很好 → ✓ 他说中文说得很好 / 他中文说得很好.",
  ex:[["他说中文说[得]很流利。","Tā shuō Zhōngwén shuō de hěn liúlì.","Anh ấy nói tiếng Trung rất lưu loát."]]}],
notes:[
 {t:"的 · 地 · 得", html:"<span class='zh'>漂亮的衣服</span> (trước danh từ) · <span class='zh'>认真地学习</span> (trước động từ) · <span class='zh'>学得很认真</span> (sau động từ). Chi tiết bổ ngữ trạng thái: 【二51】."}],
cmp:[
 {vn:"Anh ấy chạy rất nhanh.", zh:"他跑[得]很快。", py:"Tā pǎo de hěn kuài.", ok:true, why:"Thêm 得 giữa động từ và tính từ."},
 {vn:"Cô ấy hát rất hay.", zh:"她唱歌唱[得]很好。", py:"Tā chàng gē chàng de hěn hǎo.", ok:true, why:"Có tân ngữ 歌 → lặp động từ 唱."}],
ex:[
 ["你说[得]很对。","Nǐ shuō de hěn duì.","Bạn nói rất đúng."],
 ["他写汉字写[得]很漂亮。","Tā xiě Hànzì xiě de hěn piàoliang.","Anh ấy viết chữ Hán rất đẹp."],
 ["我昨天睡[得]不好。","Wǒ zuótiān shuì de bù hǎo.","Hôm qua tôi ngủ không ngon."],
 ["你来[得]正好。","Nǐ lái de zhènghǎo.","Bạn đến đúng lúc."]],
errs:[
 {bad:"他跑很快。", good:"他跑得很快。", why:"Cần 得 nối động từ với bổ ngữ."},
 {bad:"他说中文得很好。", good:"他说中文说得很好。", why:"得 đứng ngay sau động từ, không sau tân ngữ."},
 {bad:"我昨天不睡得好。", good:"我昨天睡得不好。", why:"Phủ định: V + 得 + 不 + Adj."},
 {bad:"他跑的很快。", good:"他跑得很快。", why:"Sau động từ viết 得."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy hát rất hay.", o:["她唱歌得很好。","她唱歌唱得很好。","她唱得歌很好。"], a:1, why:"Lặp động từ."},
  {q:"Tôi ngủ không ngon.", o:["我睡得不好。","我不睡得好。","我睡不得好。"], a:0, why:"V得不Adj."},
  {q:"Anh ấy chạy nhanh.", o:["他跑的很快。","他跑得很快。","他跑地很快。"], a:1, why:"得."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","走","得","有点儿","快"], a:"他走得有点儿快。", vi:"Anh ấy đi hơi nhanh."},
  {w:["她","篮球","打","得","很不错"], a:"她篮球打得很不错。", vi:"Cô ấy chơi bóng rổ khá giỏi."},
  {w:["他","写汉字","写","得","很漂亮"], a:"他写汉字写得很漂亮。", vi:"Anh ấy viết chữ Hán rất đẹp."}]},
 {t:"C. Điền 的 / 地 / 得", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"她高兴＿说：“谢谢！”", vi:"Cô ấy vui vẻ ＿ nói: “Cảm ơn!”", a:"地"},
  {q:"这是我妈妈做＿菜。", vi:"Đây là món mẹ tôi nấu ＿.", a:"的"},
  {q:"你汉字写＿真好！", vi:"Bạn viết chữ Hán ＿ đẹp thật!", a:"得"}]}],
rel:["二51","一20","三49","三48"]
};
