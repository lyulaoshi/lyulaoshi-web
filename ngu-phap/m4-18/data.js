// Bài ngữ pháp 【新4.18】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.18", title:"连词：并、而、与（连接词或词组）", vi:"并, 而, 与 — nối từ và cụm từ", tag:"词类 · 连词",
goals:[
 "Dùng <b>与</b> nối hai danh từ (văn viết, như 和).",
 "Dùng <b>并</b> nối hai động từ: làm việc này <b>rồi / đồng thời</b> việc kia.",
 "Dùng <b>而</b> nối hai tính từ: <b>… mà …</b>"],
intro:"Cả ba đều có thể hiểu là “và”, nhưng mỗi từ nối <b>một loại</b>: 与 nối danh từ, 并 nối động từ, 而 nối tính từ.",
rules:[
 {t:"N1 + 与 + N2", sub:"（1）名词", fx:[["N1",""],["与",null],["N2",""]], mean:"N1 và N2.",
  ex:[["我们要保护{1|环境}{2|与}{3|动物}。","Wǒmen yào bǎohù huánjìng yǔ dòngwù.","Chúng ta phải bảo vệ môi trường và động vật."]]},
 {t:"V1 + 并 + V2", sub:"（2）动词", fx:[["V1",""],["并",null],["V2",""]], mean:"Làm V1 rồi / đồng thời V2.",
  ex:[["会议{1|讨论}{2|并}{3|通过}了这个计划。","Huìyì tǎolùn bìng tōngguòle zhège jìhuà.","Cuộc họp đã thảo luận và thông qua kế hoạch này."],
      ["他{1|同意}{2|并}{3|支持}我的想法。","Tā tóngyì bìng zhīchí wǒ de xiǎngfǎ.","Anh ấy đồng ý và ủng hộ ý tưởng của tôi."]]},
 {t:"Adj1 + 而 + Adj2", sub:"（3）形容词", fx:[["Adj1",""],["而",null],["Adj2",""]], mean:"Adj1 mà Adj2.",
  ex:[["这是一个{1|安静}{2|而}{3|美丽}的地方。","Zhè shì yí gè ānjìng ér měilì de dìfang.","Đây là một nơi yên tĩnh mà đẹp."]]}],
cmp:[
 {vn:"Chúng tôi đã thảo luận và giải quyết vấn đề.", zh:"我们讨论[并]解决了问题。", py:"Wǒmen tǎolùn bìng jiějuéle wèntí.", ok:true, why:"Nối hai động từ dùng 并, không dùng 和 như tiếng Việt."}],
ex:[
 ["经理听了我的意见，[并]表示同意。","Jīnglǐ tīngle wǒ de yìjiàn, bìng biǎoshì tóngyì.","Giám đốc nghe ý kiến của tôi và tỏ ý đồng ý."],
 ["老师的话简单[而]清楚。","Lǎoshī de huà jiǎndān ér qīngchu.","Lời thầy nói đơn giản mà rõ ràng."],
 ["这本书介绍了中国的历史[与]文化。","Zhè běn shū jièshàole Zhōngguó de lìshǐ yǔ wénhuà.","Cuốn sách này giới thiệu lịch sử và văn hóa Trung Quốc."]],
errs:[
 {bad:"我们讨论和解决了问题。", good:"我们讨论并解决了问题。", why:"Nối hai động từ cùng làm tân ngữ phía sau → 并."},
 {bad:"这个房间干净与舒服。", good:"这个房间干净而舒服。", why:"Nối hai tính từ → 而 (hoặc 又干净又舒服)."},
 {bad:"我喜欢音乐并电影。", good:"我喜欢音乐与电影。", why:"Nối danh từ → 与 / 和."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"公司研究＿解决了这个问题。", vi:"Công ty đã nghiên cứu và giải quyết vấn đề này.", o:["与","并","而"], a:1, why:"Hai động từ → 并."},
  {q:"她是一个聪明＿可爱的孩子。", vi:"Cô bé là một đứa trẻ thông minh mà đáng yêu.", o:["并","与","而"], a:2, why:"Hai tính từ → 而."},
  {q:"我对中国的语言＿文化很感兴趣。", vi:"Tôi rất hứng thú với ngôn ngữ và văn hóa Trung Quốc.", o:["与","并","而"], a:0, why:"Hai danh từ → 与."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","同意","并","支持","我的想法"], a:"他同意并支持我的想法。", vi:"Anh ấy đồng ý và ủng hộ ý tưởng của tôi."},
  {w:["老师的话","简单","而","清楚"], a:"老师的话简单而清楚。", vi:"Lời thầy nói đơn giản mà rõ ràng."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Chúng tôi đã thảo luận và giải quyết vấn đề (dùng 并).", a:"我们讨论并解决了问题。/ 我们讨论并解决了这个问题。"},
  {q:"Đây là một nơi yên tĩnh mà đẹp (dùng 而).", a:"这是一个安静而美丽的地方。"}]}],
rel:["一19","新4.17"]
};
