// Bài ngữ pháp 【一48】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一48", title:"用正反疑问形式提问", vi:"Hỏi bằng dạng chính phản — V 不 V, V 没 V, … 了没有", tag:"提问的方法",
goals:[
 "Hỏi bằng <b>V / Adj + 不 + V / Adj</b> (có … không).",
 "Hỏi việc đã qua bằng <b>V 没 V</b> hoặc <b>V … 了没有</b>.",
 "Không thêm 吗 và 很 vào câu chính phản."],
intro:"Ghép dạng khẳng định và phủ định của động từ / tính từ để hỏi: <b>去不去</b> = có đi không. Giống “có … không?” của tiếng Việt.",
rules:[
 {t:"V / Adj + 不 + V / Adj", sub:"正反问", fx:[["Chủ ngữ",""],["V / Adj",""],["不",null],["V / Adj",""],["(tân ngữ)？",""]], mean:"不 ở giữa đọc thanh nhẹ (bu). Từ hai âm tiết có thể rút gọn: 喜(欢)不喜欢.",
  ex:[["这本书贵[不]贵？","Zhè běn shū guì bu guì?","Quyển sách này có đắt không?","等级标准"],
      ["电影好看[不]好看？","Diànyǐng hǎokàn bu hǎokàn?","Phim có hay không?","等级标准"],
      ["你吃[不]吃包子？","Nǐ chī bu chī bāozi?","Bạn có ăn bánh bao không?","等级标准"]]},
 {t:"Việc đã qua: V 没 V · … 了没有", sub:"已然", fx:[["V",""],["没",null],["V + tân ngữ？",""],["/ V + tân ngữ + 了",""],["没有？",null]], mean:"Hỏi đã làm hay chưa.",
  ex:[["他去[没]去图书馆？","Tā qù méi qù túshūguǎn?","Anh ấy có đi thư viện không?","等级标准"],
      ["他回家了[没有]？","Tā huí jiā le méiyǒu?","Anh ấy về nhà chưa?","等级标准"],
      ["你饿了[没有]？","Nǐ è le méiyǒu?","Bạn đói chưa?","等级标准"]]}],
notes:[
 {t:"Có tân ngữ", html:"tân ngữ đặt sau cụm V不V (<span class='zh'>你吃不吃包子？</span>) hoặc sau V đầu (<span class='zh'>你吃包子不吃？</span>)."},
 {t:"Có động từ năng nguyện", html:"lặp động từ năng nguyện: <span class='zh'>你会不会说中文？你想不想去？</span>"}],
cmp:[
 {vn:"Bạn có đi không?", zh:"你[去不去]？", py:"Nǐ qù bu qù?", ok:true, why:"“có … không” = V 不 V."},
 {vn:"Anh ấy về nhà chưa?", zh:"他回家了[没有]？", py:"Tā huí jiā le méiyǒu?", ok:true, why:"“… chưa?” = … 了没有."}],
ex:[
 ["你是[不是]老师？","Nǐ shì bu shì lǎoshī?","Bạn có phải giáo viên không?"],
 ["你有[没有]哥哥？","Nǐ yǒu méiyǒu gēge?","Bạn có anh trai không?"],
 ["你喜[不]喜欢喝茶？","Nǐ xǐ bu xǐhuan hē chá?","Bạn có thích uống trà không?"],
 ["你会[不]会说中文？","Nǐ huì bu huì shuō Zhōngwén?","Bạn có biết nói tiếng Trung không?"]],
errs:[
 {bad:"你去不去吗？", good:"你去不去？", why:"Không thêm 吗."},
 {bad:"这本书很贵不贵？", good:"这本书贵不贵？", why:"Không dùng 很."},
 {bad:"你有不有哥哥？", good:"你有没有哥哥？", why:"有 → 有没有."},
 {bad:"他回家了不？", good:"他回家了没有？", why:"Việc đã qua dùng 没有."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn có anh trai không?", o:["你有不有哥哥？","你有没有哥哥？","你有哥哥没吗？"], a:1, why:"有没有."},
  {q:"Quyển sách này có đắt không?", o:["这本书很贵不贵？","这本书贵不贵吗？","这本书贵不贵？"], a:2, why:"Adj不Adj."},
  {q:"Anh ấy về nhà chưa?", o:["他回家了没有？","他回家了不？","他回家没了？"], a:0, why:"了没有."},
  {q:"Bạn có muốn đi không?", o:["你想去不去？","你想不想去？","你不想想去？"], a:1, why:"Lặp động từ năng nguyện."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","吃","不","吃","包子"], a:"你吃不吃包子？", vi:"Bạn có ăn bánh bao không?"},
  {w:["他","去","没","去","图书馆"], a:"他去没去图书馆？", vi:"Anh ấy có đi thư viện không?"},
  {w:["你","饿","了","没有"], a:"你饿了没有？", vi:"Bạn đói chưa?"}]},
 {t:"C. Đổi sang câu hỏi chính phản", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"你是学生吗？", vi:"Bạn là học sinh à?", a:"你是不是学生？"},
  {q:"今天冷吗？", vi:"Hôm nay lạnh không?", a:"今天冷不冷？"},
  {q:"你吃早饭了吗？", vi:"Bạn ăn sáng chưa?", a:"你吃早饭了没有？/ 你吃没吃早饭？"}]}],
rel:["一33","一45","二78","一29"]
};
