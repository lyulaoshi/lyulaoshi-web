// Bài ngữ pháp 【新4.63】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.63", title:"目的复句：……，好……", vi:"…, 好… — … để (cho dễ) …", tag:"句子的类型 · 复句",
goals:[
 "Nối <b>việc cần làm</b> với <b>mục đích</b> bằng 好 ở đầu vế sau.",
 "Hiểu 好 = “để, để cho tiện” (khẩu ngữ).",
 "Phân biệt với 为了 (đứng trước mục đích ở đầu câu)."],
intro:"“Nhắn tôi một tiếng, <b>để</b> tôi đi đón.” → 告诉我一声，我<b>好</b>去接你。",
rules:[
 {t:"Vế 1，(S) + 好 + V", sub:"目的", fx:[["việc làm trước",""],["·",""],["(S)",""],["好",null],["mục đích",""]], mean:"Làm việc 1 để việc 2 thuận lợi.",
  ex:[["{1|你到了给我打个电话}，{2|我}{3|好}{4|去接你}。","Nǐ dàole gěi wǒ dǎ gè diànhuà, wǒ hǎo qù jiē nǐ.","Đến nơi gọi cho tôi, để tôi đi đón."],
      ["{1|早点儿睡吧}，{2|明天}{3|好}{4|早起}。","Zǎo diǎnr shuì ba, míngtiān hǎo zǎo qǐ.","Ngủ sớm đi để mai dậy sớm."]]}],
notes:[{t:"好让 / 好叫", html:"<span class='zh'>说大声点儿，好让大家都听见。</span> = để mọi người đều nghe thấy."}],
cmp:[
 {vn:"Mở cửa sổ ra cho không khí vào.", zh:"把窗户打开，[好]让空气进来。", py:"Bǎ chuānghu dǎkāi, hǎo ràng kōngqì jìnlai.", ok:true, why:"好让 + người/vật + V."}],
ex:[
 ["请把地址写下来，我[好]给你寄过去。","Qǐng bǎ dìzhǐ xiě xialai, wǒ hǎo gěi nǐ jì guoqu.","Bạn ghi địa chỉ lại để tôi gửi cho."],
 ["多带点儿钱，[好]买点儿礼物。","Duō dài diǎnr qián, hǎo mǎi diǎnr lǐwù.","Mang thêm tiền để mua ít quà."],
 ["你先把时间告诉我，我[好]安排一下。","Nǐ xiān bǎ shíjiān gàosu wǒ, wǒ hǎo ānpái yíxià.","Bạn báo giờ trước để tôi sắp xếp."]],
errs:[
 {bad:"好早起，早点儿睡吧。", good:"早点儿睡吧，明天好早起。", why:"好 đứng ở vế sau."},
 {bad:"你告诉我，好我去接你。", good:"你告诉我，我好去接你。", why:"Chủ ngữ đứng trước 好."},
 {bad:"早点儿睡，为了好明天早起。", good:"早点儿睡，明天好早起。", why:"Không chồng 为了 và 好."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Đến nơi gọi cho tôi, để tôi đi đón.", o:["到了打个电话，我好去接你。","到了打个电话，好我去接你。"], a:0, why:"S + 好 + V."},
  {q:"早点儿睡吧，明天＿早起。", vi:"Ngủ sớm đi để mai dậy sớm.", o:["好","却","而"], a:0, why:"好 = để."},
  {q:"“好” trong 我好去接你 nghĩa là:", vi:"Chọn nghĩa của 好.", o:["để","tốt","khỏe"], a:0, why:"Liên kết mục đích."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","先","告诉我，","我","好","安排一下"], a:"你先告诉我，我好安排一下。", vi:"Bạn báo trước để tôi sắp xếp."},
  {w:["多带点儿钱，","好","买点儿","礼物"], a:"多带点儿钱，好买点儿礼物。", vi:"Mang thêm tiền để mua ít quà."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 好)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Ngủ sớm đi để mai dậy sớm.", a:"早点儿睡吧，明天好早起。/ 早点儿睡，明天好早起。/ 早点睡吧，明天好早起。"},
  {q:"Bạn ghi địa chỉ lại để tôi gửi cho.", a:"请把地址写下来，我好给你寄过去。/ 你把地址写下来，我好给你寄过去。"}]}],
rel:["三72","三26","新4.35"]
};
