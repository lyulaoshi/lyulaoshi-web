// Bài ngữ pháp 【二79】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二79", title:"用“吧”提问", vi:"Hỏi bằng 吧 — hỏi phỏng đoán “… phải không nhỉ?”", tag:"提问的方法",
goals:[
 "Dùng <b>câu trần thuật + 吧？</b> khi người hỏi đã đoán gần chắc.",
 "Phân biệt với <b>吗</b> (hỏi trung tính, chưa biết).",
 "Phân biệt 吧 hỏi với 吧 đề nghị (我们走吧)."],
intro:"吗 hỏi khi <b>chưa biết</b>; 吧 hỏi khi <b>đã đoán được</b>, chỉ muốn người nghe xác nhận.",
rules:[
 {t:"Câu trần thuật + 吧？", sub:"吧²", fx:[["Câu (điều đoán)",""],["吧",null],["？",""]], mean:"",
  ex:[["您是经理[吧]？","Nín shì jīnglǐ ba?","Ông là giám đốc phải không ạ?","等级标准"],
      ["你以前学过中文[吧]？","Nǐ yǐqián xué guo Zhōngwén ba?","Trước đây bạn từng học tiếng Trung rồi phải không?","等级标准"]]}],
cmp:[
 {vn:"Bạn là người Việt Nam à? (chưa biết)", zh:"你是越南人[吗]？", py:"Nǐ shì Yuènán rén ma?", ok:true, why:"Hỏi trung tính → 吗."},
 {vn:"Bạn là người Việt Nam phải không? (đoán)", zh:"你是越南人[吧]？", py:"Nǐ shì Yuènán rén ba?", ok:true, why:"Đã đoán → 吧."}],
ex:[
 ["你累了[吧]？休息一下。","Nǐ lèi le ba? Xiūxi yíxià.","Bạn mệt rồi phải không? Nghỉ một chút đi."],
 ["这是你的[吧]？","Zhè shì nǐ de ba?","Cái này của bạn phải không?"],
 ["明天不会下雨[吧]？","Míngtiān bú huì xià yǔ ba?","Mai chắc không mưa đâu nhỉ?"]],
errs:[
 {bad:"您是经理吗吧？", good:"您是经理吧？", why:"Một câu chỉ một trợ từ hỏi."},
 {bad:"你去哪儿吧？", good:"你去哪儿？", why:"吧 hỏi không dùng với từ để hỏi."}],
practice:[
 {t:"A. Điền 吗 hoặc 吧", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"(Thấy bạn ngáp) 你困了＿？", vi:"Bạn buồn ngủ rồi ＿?", o:["吗","吧"], a:1, why:"Đoán."},
  {q:"(Hoàn toàn chưa biết) 你会游泳＿？", vi:"Bạn biết bơi ＿?", o:["吗","吧"], a:0, why:"Hỏi trung tính."},
  {q:"(Nghe giọng miền Bắc) 你是北京人＿？", vi:"Bạn là người Bắc Kinh ＿?", o:["吗","吧"], a:1, why:"Đoán."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["您","是","经理","吧"], a:"您是经理吧？", vi:"Ông là giám đốc phải không ạ?"},
  {w:["你","以前","学过","中文","吧"], a:"你以前学过中文吧？", vi:"Trước đây bạn học tiếng Trung rồi phải không?"}]},
 {t:"C. Hỏi phỏng đoán bằng 吧", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"(Đoán bạn mệt)", a:"你累了吧？"},
  {q:"(Đoán cái này của bạn)", a:"这是你的吧？"}]}],
rel:["二34","一45","二78","一22"]
};
