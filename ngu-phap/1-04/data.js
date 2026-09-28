// Bài ngữ pháp 【一04】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一04", title:"疑问代词", vi:"Đại từ nghi vấn — ai, gì, nào, đâu, mấy, bao nhiêu…", tag:"词类 · 代词",
goals:[
 "Nhớ nghĩa 10 đại từ nghi vấn HSK 1: <b>谁、什么、哪、哪儿、哪里、哪些、几、多少、多、怎么</b>.",
 "Đặt từ để hỏi <b>đúng chỗ</b> của thông tin cần hỏi — không đảo lên đầu câu.",
 "Không thêm <b>吗</b> vào câu đã có từ để hỏi; 几 luôn đi với lượng từ."],
intro:"Câu hỏi bằng đại từ nghi vấn giữ nguyên trật tự câu trần thuật: <b>chỗ nào muốn hỏi thì thay bằng từ để hỏi</b>. Điểm này giống tiếng Việt.",
rules:[
 {t:"Hỏi người, vật: 谁、什么、哪", sub:"ai · gì · nào", fx:[["Chủ ngữ",""],["Động từ",""],["谁 / 什么 / 哪 + lượng từ + N",null]], mean:"哪 phải có lượng từ: 哪个、哪本、哪国…",
  ex:[["[谁]是老师？","Shéi shì lǎoshī?","Ai là giáo viên?","等级标准"],
      ["你买[什么]？","Nǐ mǎi shénme?","Bạn mua gì?","等级标准"],
      ["你喜欢[哪个]电影？","Nǐ xǐhuan nǎge diànyǐng?","Bạn thích bộ phim nào?","等级标准"]]},
 {t:"Hỏi nơi chốn: 哪儿、哪里", sub:"ở đâu · đi đâu", fx:[["Chủ ngữ",""],["在 / 去",""],["哪儿 / 哪里",null]], mean:"哪儿 (khẩu ngữ phương Bắc) = 哪里.",
  ex:[["你们去[哪儿]？","Nǐmen qù nǎr?","Các bạn đi đâu?","等级标准"],
      ["车站在[哪里]？","Chēzhàn zài nǎli?","Nhà ga ở đâu?","等级标准"]]},
 {t:"Hỏi số lượng: 几、多少", sub:"mấy · bao nhiêu", fx:[["几",null],["Lượng từ","bắt buộc"],["Danh từ",""]], mean:"几 cho số nhỏ (thường dưới 10), luôn có lượng từ; 多少 cho số lớn / chưa đoán, lượng từ có thể bỏ.",
  ex:[["现在[几]点？","Xiànzài jǐ diǎn?","Bây giờ mấy giờ?","等级标准"],
      ["你们班有[多少]个学生？","Nǐmen bān yǒu duōshao ge xuésheng?","Lớp các bạn có bao nhiêu học sinh?","等级标准"]]},
 {t:"多 + tính từ; 怎么 + động từ; 哪些", sub:"bao (nhiêu) · thế nào · những … nào", fx:[["多",null],["大 / 高 / 远…",""]], mean:"多大 = bao nhiêu tuổi / to bao nhiêu; 怎么 + V = làm thế nào; 哪些 = những… nào.",
  ex:[["他[多]大？","Tā duō dà?","Anh ấy bao nhiêu tuổi?","等级标准"],
      ["你[怎么]去医院？","Nǐ zěnme qù yīyuàn?","Bạn đi bệnh viện bằng cách nào?","等级标准"],
      ["你们班有[哪些]国家的学生？","Nǐmen bān yǒu nǎxiē guójiā de xuésheng?","Lớp các bạn có học sinh những nước nào?","等级标准"]]}],
notes:[
 {t:"Không thêm 吗", html:"<span class='zh'>你去哪儿？</span> đã là câu hỏi. Có thể thêm <span class='zh'>呢</span> cho mềm: <span class='zh'>你去哪儿呢？</span>"},
 {t:"Đọc", html:"谁 đọc <b>shéi</b> (khẩu ngữ) hoặc <b>shuí</b>; 多少 đọc <b>duōshao</b> (thanh nhẹ)."}],
cmp:[
 {vn:"Bạn đi đâu?", zh:"你去[哪儿]？", py:"Nǐ qù nǎr?", ok:true, why:"Vị trí từ để hỏi giống tiếng Việt."},
 {vn:"Nhà bạn có mấy người?", zh:"你家有[几口]人？", py:"Nǐ jiā yǒu jǐ kǒu rén?", ok:true, why:"几 phải có lượng từ (口)."},
 {vn:"Đây là sách của ai?", zh:"这是[谁的]书？", py:"Zhè shì shéi de shū?", ok:true, why:"“của ai” = 谁的, đứng trước danh từ."}],
ex:[
 ["你买[什么]？","Nǐ mǎi shénme?","Bạn mua gì?","等级标准"],
 ["现在[几]点？","Xiànzài jǐ diǎn?","Bây giờ mấy giờ?","等级标准"],
 ["[谁]是老师？","Shéi shì lǎoshī?","Ai là giáo viên?","等级标准"],
 ["你[怎么]去医院？","Nǐ zěnme qù yīyuàn?","Bạn đi bệnh viện bằng cách nào?","等级标准"],
 ["这个字[怎么]读？","Zhège zì zěnme dú?","Chữ này đọc thế nào?"],
 ["这件衣服[多少]钱？","Zhè jiàn yīfu duōshao qián?","Cái áo này bao nhiêu tiền?"],
 ["你是[哪]国人？","Nǐ shì nǎ guó rén?","Bạn là người nước nào?"]],
errs:[
 {bad:"你去哪儿吗？", good:"你去哪儿？", why:"Đã có từ để hỏi thì không thêm 吗."},
 {bad:"什么你买？", good:"你买什么？", why:"Không đảo từ để hỏi lên đầu câu."},
 {bad:"你有几书？", good:"你有几本书？", why:"几 + lượng từ + danh từ."},
 {bad:"这是谁书？", good:"这是谁的书？", why:"“của ai” cần 的."},
 {bad:"你是哪国人吗？", good:"你是哪国人？", why:"Không dùng 吗 với 哪."}],
practice:[
 {t:"A. Chọn từ để hỏi đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你家有＿＿口人？ (nhà có mấy người)", vi:"Nhà bạn có ＿＿ người?", o:["什么","几","哪"], a:1, why:"Số nhỏ, có lượng từ 口 → 几."},
  {q:"＿＿是你的老师？", vi:"＿＿ là thầy giáo của bạn?", o:["谁","哪儿","多少"], a:0, why:"Hỏi người → 谁."},
  {q:"你的手机在＿＿？", vi:"Điện thoại của bạn ở ＿＿?", o:["什么","谁","哪儿"], a:2, why:"Hỏi nơi chốn → 哪儿."},
  {q:"这个字＿＿写？", vi:"Chữ này viết ＿＿?", o:["怎么","多少","哪些"], a:0, why:"Hỏi cách làm → 怎么 + V."},
  {q:"你们学校有＿＿学生？ (số lớn)", vi:"Trường các bạn có ＿＿ học sinh?", o:["几","多少","多"], a:1, why:"Số lớn → 多少."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","喜欢","哪个","电影"], a:"你喜欢哪个电影？", vi:"Bạn thích bộ phim nào?"},
  {w:["车站","在","哪里"], a:"车站在哪里？", vi:"Nhà ga ở đâu?"},
  {w:["你","怎么","去","医院"], a:"你怎么去医院？", vi:"Bạn đi bệnh viện bằng cách nào?"}]},
 {t:"C. Đặt câu hỏi cho phần trong 【 】", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"他是【王老师】。", vi:"Anh ấy là 【thầy Vương】.", a:"他是谁？"},
  {q:"我去【图书馆】。", vi:"Tôi đi 【thư viện】.", a:"你去哪儿？"},
  {q:"我买【三本】书。", vi:"Tôi mua 【ba quyển】 sách.", a:"你买几本书？"},
  {q:"我喜欢【这个】书包。", vi:"Tôi thích cái cặp 【này】.", a:"你喜欢哪个书包？"}]}],
rel:["一46","一33","二05","三07"]
};
