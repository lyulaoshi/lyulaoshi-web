// Bài ngữ pháp 【三56】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三56", title:"连动句2", vi:"Câu liên động 2 — cách thức, mục đích", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng <b>V1 = cách thức</b> của V2: 坐飞机去北京, 笑着说.",
 "Dùng <b>V2 = mục đích</b> của V1: 去超市买水果.",
 "Giữ đúng thứ tự: cách thức / đi đâu trước, mục đích sau."],
intro:"Mở rộng câu liên động 【二57】: hai động từ cùng chủ ngữ, nhưng quan hệ là <b>cách thức</b> hoặc <b>mục đích</b>, không chỉ trình tự thời gian.",
rules:[
 {t:"V1 là cách thức của V2", sub:"（1）方式", fx:[["V1 (着) + O1","cách thức"],["V2 + O2",null]], mean:"",
  ex:[["他笑着说：“没事儿。”","Tā xiào zhe shuō: “Méi shìr.”","Anh ấy cười nói: “Không sao.”","等级标准"],
      ["我明天坐飞机去北京。","Wǒ míngtiān zuò fēijī qù Běijīng.","Mai tôi đi máy bay đến Bắc Kinh.","等级标准"]]},
 {t:"V2 là mục đích của V1", sub:"（2）目的", fx:[["去 / 来 + nơi chốn",""],["V2 + O2","mục đích"]], mean:"",
  ex:[["他去超市买水果。","Tā qù chāoshì mǎi shuǐguǒ.","Anh ấy đi siêu thị mua hoa quả.","等级标准"],
      ["我来中国学习中文。","Wǒ lái Zhōngguó xuéxí Zhōngwén.","Tôi sang Trung Quốc học tiếng Trung.","等级标准"]]}],
cmp:[
 {vn:"Tôi đi Bắc Kinh bằng máy bay.", zh:"我[坐飞机]去北京。", py:"Wǒ zuò fēijī qù Běijīng.", ok:true, why:"“bằng máy bay” đưa lên trước 去."},
 {vn:"Tôi sang Trung Quốc để học.", zh:"我来中国[学习]。", py:"Wǒ lái Zhōngguó xuéxí.", ok:true, why:"Mục đích đứng sau, không cần “để”."}],
ex:[
 ["我们骑自行车去公园吧。","Wǒmen qí zìxíngchē qù gōngyuán ba.","Chúng mình đạp xe đi công viên nhé."],
 ["他去图书馆借书。","Tā qù túshūguǎn jiè shū.","Anh ấy đến thư viện mượn sách."]],
errs:[
 {bad:"我去北京坐飞机。（ý: bằng máy bay）", good:"我坐飞机去北京。", why:"Cách thức đứng trước."},
 {bad:"他买水果去超市。", good:"他去超市买水果。", why:"Đi đâu trước, mục đích sau."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đi Bắc Kinh bằng máy bay.", o:["我去北京坐飞机。","我坐飞机去北京。"], a:1, why:"Cách thức trước."},
  {q:"Anh ấy đi siêu thị mua hoa quả.", o:["他去超市买水果。","他买水果去超市。"], a:0, why:"Mục đích sau."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","来","中国","学习","中文"], a:"我来中国学习中文。", vi:"Tôi sang Trung Quốc học tiếng Trung."},
  {w:["他","笑着","说"], a:"他笑着说。", vi:"Anh ấy cười nói."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chúng mình đạp xe đi công viên nhé.", a:"我们骑自行车去公园吧。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我坐飞机去北京。", vi:"Tôi đi Bắc Kinh bằng máy bay.", o:["Đúng","Sai"], a:0, why:"Cách thức (坐飞机) đứng trước."},
  {q:"他去超市买东西。", vi:"Anh ấy đi siêu thị mua đồ.", o:["Đúng","Sai"], a:0, why:"Đi đâu trước, mục đích sau."},
  {q:"他买东西去超市。", vi:"Anh ấy đi siêu thị mua đồ.", o:["Đúng","Sai"], a:1, why:"他去超市买东西。"},
  {q:"她笑说：“没事儿。”", vi:"Cô ấy cười nói: “Không sao.”", o:["Đúng","Sai"], a:1, why:"Cách thức dùng V着: 她笑着说：“没事儿。”"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đến thư viện mượn sách.", o:["我去图书馆借书。", "我借书去图书馆。"], a:0, why:"Đi đâu + làm gì."},
  {q:"Anh ấy đi làm bằng xe đạp.", o:["他骑自行车去上班。", "他去上班骑自行车。"], a:0, why:"Cách thức trước."},
  {q:"Cô ấy đứng nói chuyện.", o:["她站着说话。", "她说话站着。"], a:0, why:"V1着 + V2."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi đi taxi đến sân bay.", a:"我坐出租车去机场。/ 我打车去机场。"},
  {q:"Chúng tôi đến Trung Quốc học tiếng Trung.", a:"我们来中国学习中文。/ 我们来中国学中文。/ 我们去中国学习中文。/ 我们去中国学中文。/ 我们来中国学习汉语。/ 我们去中国学习汉语。"},
  {q:"Anh ấy về nhà ăn cơm.", a:"他回家吃饭。"}]}],
rel:["二57","二70","三57","三72"]
};
