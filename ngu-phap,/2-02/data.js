// Bài ngữ pháp 【二02】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二02", title:"能愿动词：该、应该", vi:"Động từ năng nguyện 该, 应该 — “nên, phải”", tag:"词类 · 动词",
goals:[
 "Dùng <b>应该 / 该 + động từ</b> để khuyên, nói điều nên làm theo lẽ thường.",
 "Phủ định bằng <b>不应该</b> (không nên).",
 "Phân biệt 该……了 (đến lúc…) 【二80】."],
intro:"应该 và 该 đứng <b>trước động từ</b>, nói về việc <b>nên</b> làm, <b>phải</b> làm theo lý lẽ, bổn phận. 该 ngắn gọn, khẩu ngữ hơn.",
rules:[
 {t:"应该 / 该 + V", sub:"应该 · 该", fx:[["Chủ ngữ",""],["应该 / 该",null],["Động từ",""]], mean:"Nên, cần phải (lời khuyên, bổn phận).",
  ex:[["你[该]吃药了。","Nǐ gāi chī yào le.","Đến lúc con phải uống thuốc rồi.","等级标准"],
      ["你们[应该]去检查一下儿身体。","Nǐmen yīnggāi qù jiǎnchá yíxiàr shēntǐ.","Các bạn nên đi kiểm tra sức khỏe một chút.","等级标准"]]},
 {t:"Phủ định: 不应该", sub:"否定", fx:[["Chủ ngữ",""],["不应该",null],["Động từ",""]], mean:"Không nên (thường mang ý trách).",
  ex:[["你[不应该]这么晚回家。","Nǐ bù yīnggāi zhème wǎn huí jiā.","Con không nên về nhà muộn thế này."],
      ["我[不应该]跟你说这些。","Wǒ bù yīnggāi gēn nǐ shuō zhèxiē.","Tôi không nên nói với bạn những chuyện này."]]}],
notes:[
 {t:"Trả lời ngắn", html:"<span class='zh'>——我应该去吗？——应该。/ 不应该。</span>"}],
cmp:[
 {vn:"Bạn nên nghỉ ngơi một chút.", zh:"你[应该]休息一下。", py:"Nǐ yīnggāi xiūxi yíxià.", ok:true, why:"“nên” trước động từ — giống tiếng Việt."},
 {vn:"Bạn không nên hút thuốc.", zh:"你[不应该]抽烟。", py:"Nǐ bù yīnggāi chōu yān.", ok:true, why:"不 đứng trước 应该."}],
ex:[
 ["学生[应该]认真学习。","Xuésheng yīnggāi rènzhēn xuéxí.","Học sinh nên chăm chỉ học tập."],
 ["明天有考试，我[应该]早点儿睡觉。","Míngtiān yǒu kǎoshì, wǒ yīnggāi zǎo diǎnr shuì jiào.","Mai có bài thi, tôi nên ngủ sớm một chút."],
 ["这件事你[应该]告诉老师。","Zhè jiàn shì nǐ yīnggāi gàosu lǎoshī.","Chuyện này bạn nên nói với thầy cô."]],
errs:[
 {bad:"你休息应该。", good:"你应该休息。", why:"应该 đứng trước động từ."},
 {bad:"你应该不去。（ý: không nên đi）", good:"你不应该去。", why:"不 đứng trước 应该."},
 {bad:"你没应该这么说。", good:"你不应该这么说。", why:"Phủ định bằng 不."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn nên đi khám bệnh.", o:["你应该去看病。","你去看病应该。","你应该看病去了。"], a:0, why:"应该 + V."},
  {q:"Con không nên về muộn thế.", o:["你应该不这么晚回家。","你不应该这么晚回家。","你没应该这么晚回家。"], a:1, why:"不应该."},
  {q:"Đến lúc uống thuốc rồi.", o:["你该吃药了。","你吃药该了。","你了该吃药。"], a:0, why:"该 + V + 了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你们","应该","去","检查","一下儿","身体"], a:"你们应该去检查一下儿身体。", vi:"Các bạn nên đi kiểm tra sức khỏe."},
  {w:["学生","应该","认真","学习"], a:"学生应该认真学习。", vi:"Học sinh nên chăm chỉ học tập."},
  {w:["你","不应该","这么","晚","回家"], a:"你不应该这么晚回家。", vi:"Con không nên về muộn thế này."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Mai có bài thi, tôi nên ngủ sớm.", a:"明天有考试，我应该早点儿睡觉。"},
  {q:"Bạn không nên nói như vậy.", a:"你不应该这么说。"},
  {q:"Chuyện này bạn nên nói với mẹ.", a:"这件事你应该告诉妈妈。"}]}],
rel:["二80","二19","二01","一02"]
};
