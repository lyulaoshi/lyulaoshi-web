// Bài ngữ pháp 【新3.49】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新3.49", title:"趋向补语2：趋向补语的引申用法", vi:"Bổ ngữ xu hướng nghĩa mở rộng — 想起来, 笑起来, 说下去…", tag:"句子成分 · 补语",
goals:[
 "Hiểu bổ ngữ xu hướng <b>không chỉ hướng đi</b> mà còn chỉ kết quả, bắt đầu, tiếp tục.",
 "Nhớ 3 nhóm HSK 3: <b>kết quả</b> (出 / 起 / 下) · <b>bắt đầu</b> (上 / 起来) · <b>tiếp tục</b> (下去 / 下来).",
 "Đặt tân ngữ đúng chỗ với 起来: 下起雨来 / 下起来雨."],
intro:"【二50】【三47】 học 来 / 去, 进来, 出去… chỉ <b>hướng di chuyển</b>. Ở HSK 3, chúng còn mang <b>nghĩa bóng</b> — không ai đi lên hay xuống cả.",
rules:[
 {t:"V + 出 / 起 / 下: kết quả", sub:"（1）结果", fx:[["V",""],["出 / 起 / 下",null]], mean:"出: làm ra, nhận ra · 起: nhớ ra (想起) · 下: giữ lại, chứa được (留下, 放得下).",
  ex:[["我[想出]了一个好办法。","Wǒ xiǎngchūle yí gè hǎo bànfǎ.","Tôi nghĩ ra một cách hay."],
      ["我[想起]他的名字了。","Wǒ xiǎngqǐ tā de míngzi le.","Tôi nhớ ra tên anh ấy rồi."],
      ["请[留下]你的电话。","Qǐng liúxià nǐ de diànhuà.","Xin để lại số điện thoại của bạn."]]},
 {t:"V + 上 / 起来: bắt đầu", sub:"（2）开始", fx:[["V / Adj",""],["上 / 起来",null]], mean:"Bắt đầu một hành động / trạng thái.",
  ex:[["他突然[笑起来]了。","Tā tūrán xiào qilai le.","Anh ấy đột nhiên bật cười."],
      ["我[爱上]了这个城市。","Wǒ àishàngle zhège chéngshì.","Tôi đã yêu thành phố này."],
      ["外面[下起雨来]了。","Wàimian xià qǐ yǔ lai le.","Bên ngoài bắt đầu mưa rồi."]]},
 {t:"V + 下去 / 下来: tiếp tục", sub:"（3）持续", fx:[["V",""],["下去 / 下来",null]], mean:"下去: tiếp tục (từ nay về sau) · 下来: kéo dài đến bây giờ, giữ lại được.",
  ex:[["你[说下去]，我在听。","Nǐ shuō xiaqu, wǒ zài tīng.","Bạn nói tiếp đi, tôi đang nghe."],
      ["他每天跑步，[坚持下来]了。","Tā měi tiān pǎobù, jiānchí xialai le.","Ngày nào anh ấy cũng chạy bộ, đã kiên trì được đến giờ."]]}],
notes:[{t:"Tân ngữ với 起来", html:"Tân ngữ chen giữa 起 và 来: <span class='zh'>下起雨来、唱起歌来</span> (không nói ✗ 下雨起来)."}],
cmp:[
 {vn:"Tôi nhớ ra rồi!", zh:"我[想起来]了！", py:"Wǒ xiǎng qilai le!", ok:true, why:"“nhớ ra” = 想起来 — 起来 ở đây không phải “đứng dậy”."},
 {vn:"Trời bắt đầu mưa.", zh:"天[下起雨来]了。", py:"Tiān xià qǐ yǔ lai le.", ok:false, tag:"(tân ngữ chen giữa)", why:"“bắt đầu” = V + 起 + tân ngữ + 来."}],
ex:[
 ["大家都[唱起歌来]了。","Dàjiā dōu chàng qǐ gē lai le.","Mọi người đều bắt đầu hát."],
 ["这件事我要[做下去]。","Zhè jiàn shì wǒ yào zuò xiaqu.","Việc này tôi sẽ làm tiếp."],
 ["你能[看出]他是哪国人吗？","Nǐ néng kànchū tā shì nǎ guó rén ma?","Bạn có nhìn ra anh ấy là người nước nào không?"]],
errs:[
 {bad:"外面下雨起来了。", good:"外面下起雨来了。", why:"Tân ngữ 雨 chen giữa 起 và 来."},
 {bad:"我想了起他的名字。", good:"我想起了他的名字。/ 我想起他的名字了。", why:"了 đứng sau cả cụm V + bổ ngữ (想起了)."},
 {bad:"你说下来，我在听。", good:"你说下去，我在听。", why:"Tiếp tục từ nay về sau → 下去."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bên ngoài bắt đầu mưa rồi.", o:["外面下雨起来了。","外面下起雨来了。"], a:1, why:"V + 起 + O + 来."},
  {q:"Bạn nói tiếp đi.", o:["你说下去。","你说下来。"], a:0, why:"Tiếp tục → 下去."},
  {q:"我想＿＿他的名字了。", vi:"Tôi nhớ ra tên anh ấy rồi.", o:["起","出"], a:0, why:"想起 = nhớ ra; 想出 = nghĩ ra (cách, ý)."},
  {q:"我想＿＿了一个好办法。", vi:"Tôi nghĩ ra một cách hay.", o:["起","出"], a:1, why:"想出 = nghĩ ra."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["大家","都","唱起","歌","来了"], a:"大家都唱起歌来了。", vi:"Mọi người đều bắt đầu hát."},
  {w:["请","留下","你的","电话"], a:"请留下你的电话。", vi:"Xin để lại số điện thoại của bạn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi nhớ ra rồi!", a:"我想起来了！"},
  {q:"Anh ấy đột nhiên bật cười.", a:"他突然笑起来了。/ 他突然笑了起来。"}]}],
rel:["二50","三47","三46","三48"]
};
