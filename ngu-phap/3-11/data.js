// Bài ngữ pháp 【三11】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三11", title:"量词重叠：AA", vi:"Lặp lượng từ AA — 家家, 天天: nhà nào cũng, ngày nào cũng", tag:"词类 · 量词",
goals:[
 "Lặp lượng từ (hoặc danh từ đơn âm dùng như lượng từ) để nói <b>“mỗi / … nào cũng”</b>.",
 "Thường đi kèm <b>都</b> phía sau.",
 "Chỉ lặp trong vị trí chủ ngữ / trước động từ, không dùng làm tân ngữ."],
intro:"天天 = ngày nào cũng, 家家 = nhà nào cũng. Lặp lượng từ nhấn mạnh <b>không có ngoại lệ</b>.",
rules:[
 {t:"AA (+ 都)", sub:"量词重叠", fx:[["Lượng từ A",""],["A",null],["都",null],["Động từ / tính từ",""]], mean:"",
  ex:[["{1|家}{2|家}　{1|件}{2|件}　{1|条}{2|条}　{1|次}{2|次}","jiājiā　jiànjiàn　tiáotiáo　cìcì","nhà nào cũng　chiếc nào cũng　cái nào cũng　lần nào cũng","等级标准"],
      ["{1|回}{2|回}　{1|顿}{2|顿}　{1|天}{2|天}　{1|年}{2|年}","huíhuí　dùndùn　tiāntiān　niánnián","lần nào cũng　bữa nào cũng　ngày nào cũng　năm nào cũng","等级标准"]]},
 {t:"个个、张张", sub:"ai cũng, cái nào cũng", fx:[["N",""],["个个 / 张张",null],["都 + Adj",""]], mean:"Lặp lượng từ = mỗi một, tất cả đều.",
  ex:[["{1|孩子们}{2|个个}{3|都很可爱}。", "Háizimen gègè dōu hěn kě'ài.", "Bọn trẻ đứa nào cũng đáng yêu."],
      ["{1|他的画儿}{2|张张}{3|都很好看}。", "Tā de huàr zhāngzhāng dōu hěn hǎokàn.", "Tranh của anh ấy bức nào cũng đẹp."]]}],
cmp:[
 {vn:"Ngày nào tôi cũng tập thể dục.", zh:"我[天天]都运动。", py:"Wǒ tiāntiān dōu yùndòng.", ok:true, why:"“ngày nào cũng” = 天天都."}],
ex:[
 ["他[天天]都来图书馆。","Tā tiāntiān dōu lái túshūguǎn.","Ngày nào anh ấy cũng đến thư viện."],
 ["这些衣服[件件]都很漂亮。","Zhèxiē yīfu jiànjiàn dōu hěn piàoliang.","Chỗ quần áo này chiếc nào cũng đẹp."],
 ["过春节的时候，[家家]都很热闹。","Guò Chūnjié de shíhou, jiājiā dōu hěn rènao.","Dịp Tết, nhà nào cũng rộn ràng."]],
errs:[
 {bad:"我喜欢天天。", good:"我天天都很高兴。", why:"AA không làm tân ngữ; đứng trước động từ."},
 {bad:"他天天来都。", good:"他天天都来。", why:"都 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Ngày nào anh ấy cũng đến.", o:["他天天都来。","他都天天来。","他天天来都。"], a:0, why:"AA + 都 + V."},
  {q:"Chiếc nào cũng đẹp.", o:["件件都很漂亮。","都件件很漂亮。","件件很漂亮都。"], a:0, why:"AA + 都."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","天天","都","来","图书馆"], a:"他天天都来图书馆。", vi:"Ngày nào anh ấy cũng đến thư viện."},
  {w:["这些衣服","件件","都","很漂亮"], a:"这些衣服件件都很漂亮。", vi:"Chỗ quần áo này chiếc nào cũng đẹp."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Ngày nào tôi cũng tập thể dục.", a:"我天天都运动。/ 我天天运动。"},
  {q:"Năm nào cũng như vậy.", a:"年年都这样。"}]},
 {t:"D. Từ bổ sung", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这些照片＿都很漂亮。", vi:"Những tấm ảnh này tấm nào cũng đẹp.", o:["张张", "一张", "张的"], a:0, why:"张张 = tấm nào cũng."}]}],
rel:["三08","一10","三33","二04"]
};
