// Bài ngữ pháp 【二68】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二68", title:"因果复句", vi:"Câu ghép nhân quả — vì … nên …", tag:"句子的类型 · 复句",
goals:[
 "Nói nguyên nhân – kết quả, có hoặc không có từ nối.",
 "Dùng <b>因为……，所以……</b>.",
 "Trả lời câu hỏi 为什么 bằng 因为……"],
intro:"Vế trước nêu <b>nguyên nhân</b>, vế sau nêu <b>kết quả</b>. Tiếng Việt: “Vì … nên …”.",
rules:[
 {t:"Không dùng từ nối", sub:"（1）", fx:[["Nguyên nhân",""],["，",null],["Kết quả",""]], mean:"",
  ex:[["我今天太忙了，午饭都没吃。","Wǒ jīntiān tài máng le, wǔfàn dōu méi chī.","Hôm nay tôi bận quá, cơm trưa cũng chưa ăn.","等级标准"],
      ["那个学生病了，没来上课。","Nàge xuésheng bìng le, méi lái shàng kè.","Bạn học sinh đó ốm, không đến lớp.","等级标准"]]},
 {t:"因为……，所以……", sub:"（2）", fx:[["因为",null],["Nguyên nhân",""],["，所以",null],["Kết quả",""]], mean:"Có thể chỉ dùng một trong hai từ.",
  ex:[["[因为]很累，[所以]我今天不想做饭了。","Yīnwèi hěn lèi, suǒyǐ wǒ jīntiān bù xiǎng zuò fàn le.","Vì rất mệt nên hôm nay tôi không muốn nấu cơm.","等级标准"],
      ["[因为]明天有考试，[所以]我想早一点儿睡觉。","Yīnwèi míngtiān yǒu kǎoshì, suǒyǐ wǒ xiǎng zǎo yìdiǎnr shuì jiào.","Vì mai có bài thi nên tôi muốn ngủ sớm một chút.","等级标准"]]}],
cmp:[
 {vn:"Vì trời mưa nên tôi không đi.", zh:"[因为]下雨，[所以]我没去。", py:"Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.", ok:true, why:"Giống khung tiếng Việt."}],
ex:[
 ["——你为什么没来？——[因为]我病了。","—— Nǐ wèi shénme méi lái? —— Yīnwèi wǒ bìng le.","— Sao bạn không đến? — Vì tôi ốm."],
 ["[因为]他很努力，[所以]进步很快。","Yīnwèi tā hěn nǔlì, suǒyǐ jìnbù hěn kuài.","Vì anh ấy rất cố gắng nên tiến bộ rất nhanh."]],
errs:[
 {bad:"因为下雨，但是我没去。", good:"因为下雨，所以我没去。", why:"因为 đi với 所以."},
 {bad:"所以下雨，因为我没去。", good:"因为下雨，所以我没去。", why:"因为 ở vế nguyên nhân, 所以 ở vế kết quả."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Vì mệt nên không muốn nấu cơm.", o:["因为很累，所以不想做饭。","因为很累，但是不想做饭。","所以很累，因为不想做饭。"], a:0, why:"因为……所以……"},
  {q:"— Sao bạn không đến? — Vì tôi ốm.", o:["所以我病了。","因为我病了。","因为我病了所以。"], a:1, why:"因为……"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["因为","明天有考试","所以","我","想","早点儿","睡觉"], a:"因为明天有考试，所以我想早点儿睡觉。", vi:"Vì mai có thi nên tôi muốn ngủ sớm."}]},
 {t:"C. Nối bằng 因为……所以……", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"他病了 / 没来上课", vi:"Anh ấy bị ốm / không đến lớp", a:"因为他病了，所以没来上课。"},
  {q:"今天很冷 / 我不想出去", vi:"Hôm nay rất lạnh / tôi không muốn ra ngoài", a:"因为今天很冷，所以我不想出去。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"因为下雨，所以我没去。", vi:"Vì trời mưa nên tôi không đi.", o:["Đúng","Sai"], a:0, why:"因为……，所以……"},
  {q:"因为他病了，但是没来上课。", vi:"Vì anh ấy ốm nên không đến lớp.", o:["Đúng","Sai"], a:1, why:"Kết quả dùng 所以: 因为他病了，所以没来上课。"},
  {q:"所以我很累，因为昨天没睡好。", vi:"Tôi rất mệt vì hôm qua ngủ không ngon.", o:["Đúng","Sai"], a:1, why:"所以 không đứng ở vế đầu: 我很累，因为昨天没睡好。/ 因为昨天没睡好，所以我很累。"},
  {q:"我没来，因为我病了。", vi:"Tôi không đến vì tôi ốm.", o:["Đúng","Sai"], a:0, why:"Kết quả trước, 因为 + lý do sau."}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Vì bận nên tôi không gọi điện cho bạn.", o:["因为很忙，所以没给你打电话。", "因为很忙，但是没给你打电话。"], a:0, why:"因为 đi với 所以."},
  {q:"你为什么来晚了？——＿＿路上堵车。", vi:"Sao bạn đến muộn? — ＿＿ tắc đường.", o:["因为", "所以"], a:0, why:"Trả lời lý do → 因为."},
  {q:"Vì trời lạnh nên tôi mặc nhiều quần áo.", o:["因为天气冷，所以我穿了很多衣服。", "因为天气冷，我所以穿了很多衣服。"], a:0, why:"所以 đứng đầu vế sau."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Vì ốm nên hôm nay tôi không đi học.", a:"因为我病了，所以今天没去上课。/ 因为我病了，所以我今天没去上课。/ 因为我病了，所以今天不去上课。/ 因为我病了，所以我今天不去上课。/ 因为生病了，所以今天没去上课。"},
  {q:"Vì thích tiếng Trung nên tôi học tiếng Trung.", a:"因为我喜欢中文，所以我学中文。/ 因为喜欢中文，所以我学中文。/ 因为我喜欢汉语，所以我学汉语。/ 因为喜欢汉语，所以我学汉语。"},
  {q:"Tôi không đi vì bận.", a:"我没去，因为我很忙。/ 我不去，因为我很忙。/ 我没去，因为很忙。/ 我不去，因为很忙。"}]}],
rel:["二05","三71","三25","二66"]
};
