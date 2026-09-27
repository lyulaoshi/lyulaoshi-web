// Bài ngữ pháp 【二48】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二48", title:"名词、代词、数词或数量短语、名词性短语作谓语", vi:"Danh từ, số lượng làm vị ngữ — không cần 是", tag:"句子成分 · 谓语",
goals:[
 "Nói ngày tháng, thời tiết, tuổi, giá tiền, quê quán, ngoại hình… bằng <b>danh từ / số lượng làm vị ngữ</b>.",
 "Không chèn 是 trong câu khẳng định loại này.",
 "Phủ định phải thêm <b>不是</b>."],
intro:"Tiếng Việt: “Hôm nay (là) thứ Sáu”, “Anh ấy 40 tuổi”. Tiếng Trung khẩu ngữ cũng lược “là”: danh từ / cụm số lượng <b>trực tiếp làm vị ngữ</b>.",
rules:[
 {t:"Chủ ngữ + danh từ / số lượng", sub:"名词谓语", fx:[["Chủ ngữ",""],["Danh từ / số lượng / cụm danh từ",null]], mean:"Thời gian, thời tiết, tuổi, giá cả, quê quán, đặc điểm ngoại hình.",
  ex:[["今天晴天。","Jīntiān qíngtiān.","Hôm nay trời nắng.","等级标准"],
      ["明天星期五。","Míngtiān xīngqīwǔ.","Mai thứ Sáu.","等级标准"],
      ["这儿怎么样？","Zhèr zěnmeyàng?","Chỗ này thế nào?","等级标准"],
      ["他四十，女儿十六。","Tā sìshí, nǚ'ér shíliù.","Anh ấy 40, con gái 16.","等级标准"],
      ["这本中文书二十五块。","Zhè běn Zhōngwén shū èrshíwǔ kuài.","Quyển sách tiếng Trung này 25 tệ.","等级标准"],
      ["我北京人，今年二十五岁。","Wǒ Běijīng rén, jīnnián èrshíwǔ suì.","Tôi người Bắc Kinh, năm nay 25 tuổi.","等级标准"],
      ["她高个子，黄头发，很漂亮。","Tā gāo gèzi, huáng tóufa, hěn piàoliang.","Cô ấy dáng cao, tóc vàng, rất xinh.","等级标准"]]}],
notes:[
 {t:"Phủ định", html:"<span class='zh'>明天不是星期五。</span> <span class='zh'>他不是四十岁。</span> — phải có 不是."}],
cmp:[
 {vn:"Hôm nay thứ Sáu.", zh:"今天星期五。", py:"Jīntiān xīngqīwǔ.", ok:true, why:"Giống tiếng Việt: không cần “là”."},
 {vn:"Hôm nay không phải thứ Sáu.", zh:"今天[不是]星期五。", py:"Jīntiān bú shì xīngqīwǔ.", ok:true, why:"Phủ định phải có 是."}],
ex:[
 ["现在八点。","Xiànzài bā diǎn.","Bây giờ 8 giờ."],
 ["苹果五块一斤。","Píngguǒ wǔ kuài yì jīn.","Táo 5 tệ một cân."],
 ["我妈妈河内人。","Wǒ māma Hénèi rén.","Mẹ tôi người Hà Nội."]],
errs:[
 {bad:"今天不星期五。", good:"今天不是星期五。", why:"Phủ định cần 不是."},
 {bad:"他没四十岁。", good:"他不是四十岁。", why:"Phủ định loại câu này dùng 不是, không dùng 没."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mai không phải thứ Bảy.", o:["明天不星期六。","明天不是星期六。","明天星期六不。"], a:1, why:"不是."},
  {q:"Quyển sách này 25 tệ.", o:["这本书二十五块。","这本书是二十五块的了。","这本书有二十五块。"], a:0, why:"Số lượng làm vị ngữ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["明天","星期五"], a:"明天星期五。", vi:"Mai thứ Sáu."},
  {w:["我","北京人","今年","二十五岁"], a:"我北京人，今年二十五岁。", vi:"Tôi người Bắc Kinh, năm nay 25 tuổi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bây giờ 8 giờ 20.", a:"现在八点二十（分）。"},
  {q:"Hôm nay không phải thứ Hai.", a:"今天不是星期一。"}]}],
rel:["二54","一36","一25","一44"]
};
