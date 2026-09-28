// Bài ngữ pháp 【二34】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二34", title:"语气助词：啊、吧、的", vi:"Trợ từ ngữ khí 啊¹, 吧², 的² — cảm thán, phỏng đoán, khẳng định", tag:"词类 · 助词",
goals:[
 "Dùng <b>啊</b> cuối câu để cảm thán, làm mềm giọng.",
 "Dùng <b>吧²</b> để hỏi kiểu <b>phỏng đoán</b> (… phải không nhỉ?).",
 "Dùng <b>的²</b> cuối câu khẳng định, nhất là trong 是……的."],
intro:"Ba trợ từ ngữ khí mới của HSK 2, đều đứng <b>cuối câu</b>, đọc thanh nhẹ.",
rules:[
 {t:"啊: cảm thán, làm mềm", sub:"啊¹", fx:[["Câu",""],["啊",null],["！",""]], mean:"Thường đi với 真、多、好…",
  ex:[["今天真冷[啊]！","Jīntiān zhēn lěng a!","Hôm nay lạnh thật đấy!","等级标准"]]},
 {t:"吧: phỏng đoán (… phải không?)", sub:"吧²", fx:[["Câu (đoán)",""],["吧",null],["？",""]], mean:"Người hỏi đã đoán gần chắc, muốn xác nhận 【二79】.",
  ex:[["您是老师[吧]？","Nín shì lǎoshī ba?","Ông là thầy giáo phải không ạ?","等级标准"]]},
 {t:"的: khẳng định", sub:"的²", fx:[["(是)……",""],["的",null]], mean:"Nhấn mạnh sự việc đã xảy ra như thế (câu 是……的 【二60】).",
  ex:[["我是昨天来[的]。","Wǒ shì zuótiān lái de.","Tôi đến (là) hôm qua.","等级标准"]]}],
cmp:[
 {vn:"Đẹp quá đi!", zh:"真漂亮[啊]！", py:"Zhēn piàoliang a!", ok:true, why:"“đi / thế / nhỉ” cảm thán → 啊."},
 {vn:"Bạn là người Việt Nam phải không?", zh:"你是越南人[吧]？", py:"Nǐ shì Yuènán rén ba?", ok:true, why:"Đoán → 吧; hỏi trung tính → 吗."}],
ex:[
 ["你的中文说得多好[啊]！","Nǐ de Zhōngwén shuō de duō hǎo a!","Bạn nói tiếng Trung giỏi biết bao!"],
 ["你累了[吧]？","Nǐ lèi le ba?","Bạn mệt rồi phải không?"],
 ["这件衣服是在网上买[的]。","Zhè jiàn yīfu shì zài wǎngshang mǎi de.","Cái áo này mua trên mạng."]],
errs:[
 {bad:"您是老师吗吧？", good:"您是老师吧？", why:"Chỉ dùng một trợ từ cuối câu."},
 {bad:"我是昨天来。", good:"我是昨天来的。", why:"Câu 是……的 phải có 的."},
 {bad:"今天真冷了啊！", good:"今天真冷啊！", why:"真 + Adj + 啊, không thêm 了."}],
practice:[
 {t:"A. Điền 啊 / 吧 / 的", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这儿的风景多美＿！", vi:"Phong cảnh ở đây đẹp biết bao ＿!", o:["啊","吧","的"], a:0, why:"Cảm thán."},
  {q:"你是新来的同学＿？(đoán)", vi:"Bạn là bạn học mới đến ＿?", o:["啊","吧","的"], a:1, why:"Đoán."},
  {q:"我是坐飞机来＿。", vi:"Tôi đến bằng máy bay ＿.", o:["啊","吧","的"], a:2, why:"是……的."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["今天","真","冷","啊"], a:"今天真冷啊！", vi:"Hôm nay lạnh thật đấy!"},
  {w:["您","是","老师","吧"], a:"您是老师吧？", vi:"Ông là thầy giáo phải không ạ?"},
  {w:["我","是","昨天","来","的"], a:"我是昨天来的。", vi:"Tôi đến hôm qua."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bạn mệt rồi phải không?", a:"你累了吧？"},
  {q:"Món này ngon thật đấy!", a:"这个菜真好吃啊！"}]}],
rel:["一22","二79","二60","一35"]
};
