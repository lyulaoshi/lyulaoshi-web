// Bài ngữ pháp 【一47】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一47", title:"用“还是”提问", vi:"Hỏi bằng 还是 — A hay B?", tag:"提问的方法",
goals:[
 "Đặt câu hỏi lựa chọn <b>A 还是 B？</b>",
 "Lặp lại động từ ở vế B khi cần cho rõ: 喝水<b>还是</b>喝牛奶.",
 "Không thêm 吗; trả lời bằng cách chọn một trong hai."],
intro:"Khi đưa ra hai khả năng để người nghe chọn, dùng <b>还是</b> (“hay là”) ở giữa. Xem liên từ 还是 ở 【一19】.",
rules:[
 {t:"(S) + A + 还是 + B？", sub:"选择问", fx:[["A",""],["还是",null],["B",""],["？",""]], mean:"A và B cùng loại: danh từ – danh từ, động từ – động từ…",
  ex:[["她妈妈是老师[还是]医生？","Tā māma shì lǎoshī háishi yīshēng?","Mẹ cô ấy là giáo viên hay bác sĩ?","等级标准"],
      ["你喝水[还是]喝牛奶？","Nǐ hē shuǐ háishi hē niúnǎi?","Bạn uống nước hay uống sữa?","等级标准"]]},
 {t:"Lựa chọn giữa hai chủ ngữ / thời gian", sub:"", fx:[["A",""],["还是",null],["B",""],["+ V？",""]], mean:"Đặt 还是 giữa hai phần muốn so.",
  ex:[["你去[还是]他去？","Nǐ qù háishi tā qù?","Bạn đi hay anh ấy đi?"],
      ["我们今天去[还是]明天去？","Wǒmen jīntiān qù háishi míngtiān qù?","Chúng ta đi hôm nay hay ngày mai?"]]}],
cmp:[
 {vn:"Bạn uống trà hay cà phê?", zh:"你喝茶[还是]喝咖啡？", py:"Nǐ hē chá háishi hē kāfēi?", ok:true, why:"“hay” trong câu hỏi = 还是."},
 {vn:"Trả lời: Cà phê.", zh:"喝咖啡。", py:"Hē kāfēi.", ok:true, why:"Chọn một vế, không trả lời 是 / 不是."}],
ex:[
 ["你是中国人[还是]越南人？","Nǐ shì Zhōngguó rén háishi Yuènán rén?","Bạn là người Trung Quốc hay người Việt Nam?"],
 ["这是你的[还是]他的？","Zhè shì nǐ de háishi tā de?","Cái này của bạn hay của anh ấy?"],
 ["你想吃米饭[还是]面条？","Nǐ xiǎng chī mǐfàn háishi miàntiáo?","Bạn muốn ăn cơm hay mì?"]],
errs:[
 {bad:"你喝水还是喝牛奶吗？", good:"你喝水还是喝牛奶？", why:"Không thêm 吗."},
 {bad:"你喝水或者喝牛奶？", good:"你喝水还是喝牛奶？", why:"Câu hỏi dùng 还是."},
 {bad:"——你喝茶还是喝咖啡？——是。", good:"——你喝茶还是喝咖啡？——喝茶。", why:"Phải chọn một vế."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn uống nước hay uống sữa?", o:["你喝水还是喝牛奶吗？","你喝水还是喝牛奶？","你喝水和喝牛奶？"], a:1, why:"还是, không 吗."},
  {q:"Chúng ta đi hôm nay hay mai?", o:["我们今天去还是明天去？","我们去今天还是明天？","我们今天还是去明天？"], a:0, why:"Thời gian trước động từ."},
  {q:"— 你是老师还是学生？ — ?", o:["是。","对。","我是学生。"], a:2, why:"Chọn một vế."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她妈妈","是","老师","还是","医生"], a:"她妈妈是老师还是医生？", vi:"Mẹ cô ấy là giáo viên hay bác sĩ?"},
  {w:["你","去","还是","他","去"], a:"你去还是他去？", vi:"Bạn đi hay anh ấy đi?"},
  {w:["你","想","吃","米饭","还是","面条"], a:"你想吃米饭还是面条？", vi:"Bạn muốn ăn cơm hay mì?"}]},
 {t:"C. Đặt câu hỏi với 还是", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"(trà / cà phê) 你喝……", a:"你喝茶还是喝咖啡？"},
  {q:"(hôm nay / ngày mai) 你……去北京", a:"你今天去北京还是明天去北京？/ 你今天还是明天去北京？"},
  {q:"(của bạn / của tôi) 这本书是……", a:"这本书是你的还是我的？"}]}],
rel:["一19","一33","一45","二64"]
};
