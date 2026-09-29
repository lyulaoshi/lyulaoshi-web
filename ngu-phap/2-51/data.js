// Bài ngữ pháp 【二51】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二51", title:"状态补语1", vi:"Bổ ngữ trạng thái — V + 得 + tính từ", tag:"句子成分 · 补语",
goals:[
 "Nhận xét, đánh giá hành động bằng <b>V + 得 + (很 / 不) + Adj</b>.",
 "Xử lý tân ngữ: <b>(V) + O + V + 得 + Adj</b>.",
 "Hỏi bằng <b>V + 得 + 怎么样？ / V 得 Adj 不 Adj？</b>"],
intro:"Bổ ngữ trạng thái nói hành động <b>diễn ra thế nào</b> (nhanh, tốt, vui…), thường là việc đã / hay xảy ra. Xem trợ từ 得 ở 【二31】.",
rules:[
 {t:"V + 得 + (很 / 不) + Adj", sub:"状态补语", fx:[["Chủ ngữ",""],["Động từ",""],["得",null],["(很 / 不) + tính từ",""]], mean:"",
  ex:[["她跑[得]很快。","Tā pǎo de hěn kuài.","Cô ấy chạy rất nhanh.","等级标准"],
      ["我们玩儿[得]很高兴。","Wǒmen wánr de hěn gāoxìng.","Chúng tôi chơi rất vui.","等级标准"]]},
 {t:"Có tân ngữ", sub:"带宾语", fx:[["(V) + tân ngữ",""],["V",""],["得",null],["Tính từ",""]], mean:"Lặp động từ, hoặc đưa tân ngữ lên trước động từ.",
  ex:[["他打篮球打[得]很好。","Tā dǎ lánqiú dǎ de hěn hǎo.","Anh ấy chơi bóng rổ rất giỏi."],
      ["他汉字写[得]很漂亮。","Tā Hànzì xiě de hěn piàoliang.","Anh ấy viết chữ Hán rất đẹp."]]},
 {t:"Câu hỏi", sub:"疑问", fx:[["V + 得",""],["怎么样？",null],["/ Adj 不 Adj？",null]], mean:"",
  ex:[["你昨天睡[得]怎么样？","Nǐ zuótiān shuì de zěnmeyàng?","Hôm qua bạn ngủ thế nào?"],
      ["他说[得]快不快？","Tā shuō de kuài bu kuài?","Anh ấy nói có nhanh không?"]]}],
cmp:[
 {vn:"Cô ấy chạy rất nhanh.", zh:"她跑[得]很快。", py:"Tā pǎo de hěn kuài.", ok:true, why:"Thêm 得 giữa động từ và tính từ."},
 {vn:"Anh ấy nói tiếng Trung rất lưu loát.", zh:"他中文说[得]很流利。", py:"Tā Zhōngwén shuō de hěn liúlì.", ok:true, why:"Tân ngữ lên trước động từ."}],
ex:[
 ["你来[得]太晚了。","Nǐ lái de tài wǎn le.","Bạn đến muộn quá."],
 ["她唱歌唱[得]不太好。","Tā chàng gē chàng de bú tài hǎo.","Cô ấy hát không hay lắm."],
 ["今天我们玩儿[得]非常开心。","Jīntiān wǒmen wánr de fēicháng kāixīn.","Hôm nay chúng tôi chơi rất vui."]],
errs:[
 {bad:"她跑很快。", good:"她跑得很快。", why:"Cần 得."},
 {bad:"他打篮球得很好。", good:"他打篮球打得很好。", why:"得 ngay sau động từ; lặp động từ."},
 {bad:"她不跑得快。", good:"她跑得不快。", why:"Phủ định đặt sau 得."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy chạy không nhanh.", o:["她不跑得快。","她跑得不快。","她跑不得快。"], a:1, why:"V得不Adj."},
  {q:"Anh ấy viết chữ Hán rất đẹp.", o:["他写汉字得很漂亮。","他汉字写得很漂亮。","他汉字很漂亮写得。"], a:1, why:"O + V得 + Adj."},
  {q:"Hôm qua bạn ngủ thế nào?", o:["你昨天睡得怎么样？","你昨天怎么样睡得？","你昨天睡怎么样得？"], a:0, why:"V得怎么样."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","玩儿","得","很","高兴"], a:"我们玩儿得很高兴。", vi:"Chúng tôi chơi rất vui."},
  {w:["他","打篮球","打","得","很好"], a:"他打篮球打得很好。", vi:"Anh ấy chơi bóng rổ rất giỏi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bạn đến muộn quá.", a:"你来得太晚了。"},
  {q:"Cô ấy hát không hay lắm.", a:"她唱歌唱得不太好。/ 她歌唱得不太好。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"他说汉语说得很流利。", vi:"Anh ấy nói tiếng Trung rất lưu loát.", o:["Đúng","Sai"], a:0, why:"V + O + V得 + Adj."},
  {q:"她跑得不快。", vi:"Cô ấy chạy không nhanh.", o:["Đúng","Sai"], a:0, why:"Phủ định: V得 + 不 + Adj."},
  {q:"我睡了很好。", vi:"Tôi ngủ rất ngon.", o:["Đúng","Sai"], a:1, why:"Đánh giá hành động dùng 得: 我睡得很好。"},
  {q:"他很好地唱歌。", vi:"Anh ấy hát rất hay.", o:["Đúng","Sai"], a:1, why:"Nhận xét kết quả dùng bổ ngữ trạng thái: 他唱歌唱得很好。/ 他唱得很好。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy nấu ăn thế nào?", o:["她做饭做得怎么样？", "她做饭怎么样得？", "她怎么样做饭？"], a:0, why:"V得 + 怎么样."},
  {q:"Anh ấy đến rất sớm.", o:["他来得很早。", "他来很早。", "他来得早很。"], a:0, why:"V得 + 很 + Adj."},
  {q:"Họ chơi không vui lắm.", o:["他们玩儿得不太高兴。", "他们不玩儿得太高兴。"], a:0, why:"不 đứng sau 得."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy chạy rất nhanh.", a:"他跑得很快。"},
  {q:"Bạn viết chữ Hán rất đẹp.", a:"你写汉字写得很漂亮。/ 你汉字写得很漂亮。/ 你的汉字写得很漂亮。/ 你写汉字写得很好看。/ 你汉字写得很好看。"},
  {q:"Hôm qua tôi ngủ không ngon.", a:"昨天我睡得不好。/ 我昨天睡得不好。/ 昨天我睡得不太好。/ 我昨天睡得不太好。"}]}],
rel:["二31","三49","三59","二49"]
};
