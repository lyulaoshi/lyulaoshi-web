// Bài ngữ pháp 【三66】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三66", title:"递进复句：不仅/不光……，还/而且……", vi:"不仅 / 不光…，还 / 而且… — không chỉ …, mà còn …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>不仅 / 不光……，还 / 而且……</b> để tiến thêm một bước.",
 "Nhớ vị trí: <b>cùng chủ ngữ</b> → 不仅 sau chủ ngữ; <b>khác chủ ngữ</b> → 不仅 trước chủ ngữ vế 1.",
 "还 đứng sau chủ ngữ, 而且 đứng đầu vế."],
intro:"不仅 = 不光 (khẩu ngữ hơn) = “không chỉ”. Vế sau có 还 / 而且 / 也 = “mà còn”.",
rules:[
 {t:"S + 不仅 / 不光 + V1，还 + V2", sub:"cùng chủ ngữ", fx:[["S",""],["不仅 / 不光",null],["V1",""],["·",""],["还 / 而且",null],["V2",""]], mean:"",
  ex:[["那个地方我[不仅]去过，[还]去过好几次呢。","Nàge dìfang wǒ bùjǐn qù guo, hái qù guo hǎo jǐ cì ne.","Chỗ đó tôi không chỉ từng đi, mà còn đi mấy lần rồi.","等级标准"]]},
 {t:"不仅 / 不光 + S1 + V，而且 + S2 + 也 + V", sub:"khác chủ ngữ", fx:[["不仅 / 不光",null],["S1 + V",""],["·",""],["而且",null],["S2 也 V",""]], mean:"",
  ex:[["[不光]我会说中文，[而且]我姐姐也会说中文。","Bùguāng wǒ huì shuō Zhōngwén, érqiě wǒ jiějie yě huì shuō Zhōngwén.","Không chỉ tôi biết nói tiếng Trung, mà chị tôi cũng biết.","等级标准"]]}],
cmp:[
 {vn:"Cô ấy không chỉ xinh mà còn thông minh.", zh:"她[不仅]漂亮，[而且]很聪明。", py:"Tā bùjǐn piàoliang, érqiě hěn cōngming.", ok:true, why:"Cùng chủ ngữ → 不仅 sau 她."}],
ex:[
 ["这家饭馆儿的菜[不光]好吃，[还]很便宜。","Zhè jiā fànguǎnr de cài bùguāng hǎochī, hái hěn piányi.","Món ở quán này không chỉ ngon mà còn rẻ."]],
errs:[
 {bad:"不仅她漂亮，而且很聪明。", good:"她不仅漂亮，而且很聪明。", why:"Cùng chủ ngữ → đặt 不仅 sau chủ ngữ."},
 {bad:"她不仅漂亮，还而且聪明。", good:"她不仅漂亮，还很聪明。", why:"Chọn một: 还 hoặc 而且."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy không chỉ xinh mà còn thông minh.", o:["不仅她漂亮，而且很聪明。","她不仅漂亮，而且很聪明。"], a:1, why:"Cùng chủ ngữ."},
  {q:"Không chỉ tôi, chị tôi cũng biết tiếng Trung.", o:["不光我会中文，而且我姐姐也会。","我不光会中文，而且我姐姐也会。"], a:0, why:"Khác chủ ngữ → 不光 trước chủ ngữ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这家的","菜","不光","好吃，","还","很便宜"], a:"这家的菜不光好吃，还很便宜。", vi:"Món quán này không chỉ ngon mà còn rẻ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cô ấy không chỉ xinh mà còn thông minh.", a:"她不仅漂亮，而且很聪明。/ 她不仅漂亮，还很聪明。/ 她不光漂亮，而且很聪明。/ 她不光漂亮，还很聪明。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"她不仅漂亮，而且很聪明。", vi:"Cô ấy không chỉ xinh mà còn thông minh.", o:["Đúng","Sai"], a:0, why:"Cùng chủ ngữ: S + 不仅……，而且……"},
  {q:"不光我喜欢，而且我朋友也喜欢。", vi:"Không chỉ tôi thích mà bạn tôi cũng thích.", o:["Đúng","Sai"], a:0, why:"Khác chủ ngữ → 不光 trước chủ ngữ."},
  {q:"他不仅会说中文，还会说日语。", vi:"Anh ấy không chỉ biết tiếng Trung mà còn biết tiếng Nhật.", o:["Đúng","Sai"], a:0, why:"不仅……，还……"},
  {q:"不仅他会做饭，而且做得很好吃。", vi:"Anh ấy không chỉ biết nấu mà còn nấu rất ngon.", o:["Đúng","Sai"], a:1, why:"Cùng chủ ngữ → 不仅 sau chủ ngữ: 他不仅会做饭，而且做得很好吃。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chỗ này không chỉ đẹp mà còn yên tĩnh.", o:["这儿不仅很漂亮，而且很安静。", "不仅这儿很漂亮，而且很安静。"], a:0, why:"Cùng chủ ngữ."},
  {q:"Không chỉ học sinh mà giáo viên cũng đến rồi.", o:["不光学生来了，老师也来了。", "学生不光来了，老师也来了。"], a:0, why:"Khác chủ ngữ → 不光 trước chủ ngữ."},
  {q:"Anh ấy không chỉ biết mà còn biết rất rõ.", o:["他不仅知道，而且知道得很清楚。", "他不仅知道，但是知道得很清楚。"], a:0, why:"不仅 đi với 而且 / 还."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy không chỉ biết nấu ăn mà còn nấu rất ngon.", a:"他不仅会做饭，而且做得很好吃。/ 他不光会做饭，而且做得很好吃。/ 他不仅会做饭，还做得很好吃。/ 他不光会做饭，还做得很好吃。"},
  {q:"Không chỉ tôi mà bạn tôi cũng thích bộ phim này.", a:"不光我喜欢这个电影，我朋友也喜欢。/ 不仅我喜欢这个电影，我朋友也喜欢。/ 不光我喜欢这个电影，而且我朋友也喜欢。/ 不仅我喜欢这个电影，而且我朋友也喜欢。"}]}],
rel:["三30","三65","二63","三62"]
};
