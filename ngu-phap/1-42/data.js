// Bài ngữ pháp 【一42】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一42", title:"进行态", vi:"Thể tiếp diễn — đang: 在 / 正 / 正在 … 呢", tag:"动作的态",
goals:[
 "Nói hành động <b>đang diễn ra</b> bằng 3 khung của đề cương.",
 "Biết 正 cần có 呢, còn 在 / 正在 thì 呢 có thể có hoặc không.",
 "Phủ định bằng <b>没（在）</b>; không dùng 了 trong câu “đang”."],
intro:"“Đang” trong tiếng Trung có thể thể hiện bằng phó từ <b>在、正、正在</b> trước động từ, bằng <b>呢</b> cuối câu, hoặc cả hai.",
rules:[
 {t:"… 在 / 正在 + động từ", sub:"（1）", fx:[["Chủ ngữ",""],["在 / 正在",null],["Động từ (+ tân ngữ)",""]], mean:"Đang làm gì.",
  ex:[["孩子[正在]睡觉，你别说话。","Háizi zhèngzài shuì jiào, nǐ bié shuō huà.","Con đang ngủ, bạn đừng nói chuyện.","等级标准"],
      ["外边[正在]下雨。","Wàibian zhèngzài xià yǔ.","Bên ngoài đang mưa.","等级标准"]]},
 {t:"… 在 / 正 / 正在 + động từ … + 呢", sub:"（2）", fx:[["Chủ ngữ",""],["在 / 正 / 正在",null],["Động từ …",""],["呢",null]], mean:"Thêm 呢 cho tự nhiên (khẩu ngữ); 正 thường bắt buộc có 呢.",
  ex:[["你等一下儿，他[在]打电话[呢]。","Nǐ děng yíxiàr, tā zài dǎ diànhuà ne.","Bạn đợi một chút, anh ấy đang gọi điện.","等级标准"],
      ["老师进来的时候，我[正]听歌[呢]。","Lǎoshī jìnlai de shíhou, wǒ zhèng tīng gē ne.","Lúc cô giáo đi vào, tôi đang nghe nhạc.","等级标准"],
      ["同学们[正在]考试[呢]。","Tóngxuémen zhèngzài kǎoshì ne.","Các bạn đang thi.","等级标准"]]},
 {t:"… 呢 (chỉ dùng 呢)", sub:"（3）", fx:[["Chủ ngữ",""],["Động từ …",""],["呢",null]], mean:"Khẩu ngữ, thường trong câu trả lời.",
  ex:[["我没看电视，看书[呢]。","Wǒ méi kàn diànshì, kàn shū ne.","Tôi không xem ti vi, đang đọc sách.","等级标准"],
      ["——你在做什么？——我洗衣服[呢]。","—— Nǐ zài zuò shénme? —— Wǒ xǐ yīfu ne.","— Bạn đang làm gì thế? — Mình đang giặt quần áo.","等级标准"]]}],
notes:[
 {t:"Phủ định", html:"<span class='zh'>没（在）+ V</span>: <span class='zh'>我没在看电视。</span>"},
 {t:"Quá khứ cũng dùng được", html:"<span class='zh'>昨天你来的时候，我正在吃饭。</span> — “đang” tại một thời điểm trong quá khứ."}],
cmp:[
 {vn:"Tôi đang xem ti vi.", zh:"我[在]看电视[呢]。", py:"Wǒ zài kàn diànshì ne.", ok:true, why:"“đang” = 在 cùng vị trí; thêm 呢 cho tự nhiên."},
 {vn:"Tôi không đang ngủ.", zh:"我[没在]睡觉。", py:"Wǒ méi zài shuì jiào.", ok:true, why:"Phủ định “đang” dùng 没."}],
ex:[
 ["妈妈[正在]做饭[呢]。","Māma zhèngzài zuò fàn ne.","Mẹ đang nấu cơm."],
 ["他们[在]上课。","Tāmen zài shàng kè.","Họ đang học."],
 ["我[正]想给你打电话[呢]。","Wǒ zhèng xiǎng gěi nǐ dǎ diànhuà ne.","Tôi đang định gọi điện cho bạn đấy."]],
errs:[
 {bad:"他正在打电话了。", good:"他正在打电话（呢）。", why:"Câu “đang” không dùng 了."},
 {bad:"他正打电话。", good:"他正打电话呢。", why:"正 thường cần 呢."},
 {bad:"我不在看电视。", good:"我没在看电视。", why:"Phủ định dùng 没."},
 {bad:"我在看电视在。", good:"我在看电视。", why:"在 chỉ đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bên ngoài đang mưa.", o:["外边正在下雨。","外边下雨正在。","外边正在下雨了。"], a:0, why:"正在 + V."},
  {q:"Anh ấy đang gọi điện.", o:["他正打电话。","他正打电话呢。","他打电话正呢。"], a:1, why:"正…呢."},
  {q:"Tôi không đang xem ti vi.", o:["我不在看电视。","我没在看电视。","我在不看电视。"], a:1, why:"没在."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["孩子","正在","睡觉"], a:"孩子正在睡觉。", vi:"Con đang ngủ."},
  {w:["他","在","打电话","呢"], a:"他在打电话呢。", vi:"Anh ấy đang gọi điện."},
  {w:["同学们","正在","考试","呢"], a:"同学们正在考试呢。", vi:"Các bạn đang thi."}]},
 {t:"C. Trả lời câu hỏi “你在做什么？”", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"(đọc sách)", a:"我在看书（呢）。"},
  {q:"(giặt quần áo)", a:"我在洗衣服（呢）。/ 我洗衣服呢。"},
  {q:"(ăn cơm)", a:"我正在吃饭（呢）。"}]}],
rel:["一11","一22","一16","二70"]
};
