// Bài ngữ pháp 【一33】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一33", title:"疑问句", vi:"Câu nghi vấn — 4 kiểu câu hỏi", tag:"句子的类型 · 句类",
goals:[
 "Nhận ra và đặt được 4 kiểu câu hỏi: <b>是非问、特指问、选择问、正反问</b>.",
 "Chọn đúng dấu hiệu hỏi: <b>吗</b> / <b>từ để hỏi</b> / <b>还是</b> / <b>V 不 V</b>.",
 "Không ghép hai dấu hiệu hỏi trong một câu (<svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=893338cb#sai'/></svg> 还是……吗)."],
intro:"Tiếng Trung có 4 kiểu câu hỏi. Mỗi câu chỉ dùng <b>một</b> dấu hiệu hỏi. Chi tiết từng kiểu ở 【一45】–【一48】.",
rules:[
 {t:"Câu hỏi có / không: … 吗？", sub:"是非问句", fx:[["Câu trần thuật",""],["吗",null],["？",""]], mean:"Trả lời 是 / 不是, 对 / 不对, hoặc lặp lại động từ.",
  ex:[["他是老师[吗]？","Tā shì lǎoshī ma?","Anh ấy là giáo viên à?","等级标准"],
      ["那儿现在热[吗]？","Nàr xiànzài rè ma?","Ở đó bây giờ có nóng không?","等级标准"]]},
 {t:"Câu hỏi có từ để hỏi", sub:"特指问句", fx:[["…",""],["谁 / 什么 / 哪儿…",null],["…？",""]], mean:"Từ để hỏi đứng đúng chỗ thông tin cần hỏi 【一04】.",
  ex:[["[谁]跟你一起去书店？","Shéi gēn nǐ yìqǐ qù shūdiàn?","Ai đi hiệu sách cùng bạn?","等级标准"],
      ["你想买[什么]？","Nǐ xiǎng mǎi shénme?","Bạn muốn mua gì?","等级标准"]]},
 {t:"Câu hỏi lựa chọn: A 还是 B？", sub:"选择问句", fx:[["A",""],["还是",null],["B","？"]], mean:"Chọn một trong hai.",
  ex:[["你爸爸是老师[还是]医生？","Nǐ bàba shì lǎoshī háishi yīshēng?","Bố bạn là giáo viên hay bác sĩ?","等级标准"],
      ["你们坐火车去[还是]坐飞机去？","Nǐmen zuò huǒchē qù háishi zuò fēijī qù?","Các bạn đi tàu hỏa hay đi máy bay?","等级标准"]]},
 {t:"Câu hỏi chính phản: V 不 V？", sub:"正反问句", fx:[["V / Adj",""],["不 / 没",null],["V / Adj","？"]], mean:"Việc đã qua: <span class='zh'>V 没 V / V 了没有</span>.",
  ex:[["你[喝不喝]牛奶？","Nǐ hē bu hē niúnǎi?","Bạn có uống sữa không?","等级标准"],
      ["你[吃没吃]早饭？","Nǐ chī méi chī zǎofàn?","Bạn ăn sáng chưa?","等级标准"],
      ["你吃早饭了[没有]？","Nǐ chī zǎofàn le méiyǒu?","Bạn ăn sáng rồi chưa?","等级标准"],
      ["这个房间[干净不干净]？","Zhège fángjiān gānjìng bu gānjìng?","Căn phòng này có sạch không?","等级标准"]]}],
cmp:[
 {vn:"Bạn là học sinh à?", zh:"你是学生[吗]？", py:"Nǐ shì xuésheng ma?", ok:true, why:"“à / không” cuối câu → 吗."},
 {vn:"Bạn có đi không?", zh:"你[去不去]？", py:"Nǐ qù bu qù?", ok:true, why:"“có … không” → V 不 V."}],
ex:[
 ["你是中国人[吗]？","Nǐ shì Zhōngguó rén ma?","Bạn là người Trung Quốc à?"],
 ["你家在[哪儿]？","Nǐ jiā zài nǎr?","Nhà bạn ở đâu?"],
 ["你喝茶[还是]喝咖啡？","Nǐ hē chá háishi hē kāfēi?","Bạn uống trà hay cà phê?"],
 ["今天冷[不冷]？","Jīntiān lěng bu lěng?","Hôm nay có lạnh không?","等级标准"]],
errs:[
 {bad:"你喝茶还是喝咖啡吗？", good:"你喝茶还是喝咖啡？", why:"还是 không đi cùng 吗."},
 {bad:"你去不去吗？", good:"你去不去？", why:"V不V không đi cùng 吗."},
 {bad:"你想买什么吗？", good:"你想买什么？", why:"Từ để hỏi không đi cùng 吗."},
 {bad:"你很忙不忙？", good:"你忙不忙？", why:"Câu V不V / Adj不Adj không dùng 很."}],
practice:[
 {t:"A. Đây là kiểu câu hỏi nào?", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你是老师吗？", vi:"Bạn là giáo viên à?", o:["是非问","特指问","选择问","正反问"], a:0, why:"Có 吗."},
  {q:"你去哪儿？", vi:"Bạn đi đâu?", o:["是非问","特指问","选择问","正反问"], a:1, why:"Có từ để hỏi."},
  {q:"你喝茶还是喝水？", vi:"Bạn uống trà hay uống nước?", o:["是非问","特指问","选择问","正反问"], a:2, why:"Có 还是."},
  {q:"你忙不忙？", vi:"Bạn có bận không?", o:["是非问","特指问","选择问","正反问"], a:3, why:"Adj 不 Adj."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","喝","不","喝","牛奶"], a:"你喝不喝牛奶？", vi:"Bạn có uống sữa không?"},
  {w:["你","想","买","什么"], a:"你想买什么？", vi:"Bạn muốn mua gì?"},
  {w:["你爸爸","是","老师","还是","医生"], a:"你爸爸是老师还是医生？", vi:"Bố bạn là giáo viên hay bác sĩ?"}]},
 {t:"C. Hỏi theo 4 cách", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"吗", q:"他是学生。", vi:"Anh ấy là học sinh.", a:"他是学生吗？"},
  {ask:"正反问", q:"他是学生。", vi:"Anh ấy là học sinh.", a:"他是不是学生？"},
  {ask:"选择问", q:"他是学生。(学生 / 老师)", vi:"Anh ấy là học sinh. (học sinh / giáo viên)", a:"他是学生还是老师？"},
  {ask:"特指问", q:"他是学生。", vi:"Anh ấy là học sinh.", a:"他是谁？/ 他是做什么的？"}]}],
rel:["一45","一46","一47","一48","一04"]
};
