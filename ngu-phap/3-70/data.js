// Bài ngữ pháp 【三70】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三70", title:"条件复句：只有……，才……", vi:"只有…，才… — chỉ có …, mới …", tag:"句子的类型 · 复句",
goals:[
 "Nêu <b>điều kiện duy nhất, bắt buộc</b> bằng 只有……，才…….",
 "Phân biệt với 只要……，就…… (chỉ cần … là …) 【二67】.",
 "才 đứng sau chủ ngữ, trước động từ."],
intro:"只有 = “chỉ có (làm thế) … mới …”: thiếu điều kiện thì không được. 只要 = “chỉ cần … là …”: có điều kiện là đủ.",
rules:[
 {t:"只有 + điều kiện，(S) + 才 + kết quả", sub:"条件", fx:[["只有",null],["điều kiện duy nhất",""],["·",""],["S + 才",null],["kết quả",""]], mean:"",
  ex:[["[只有]认真检查，我们[才]会发现问题、解决问题。","Zhǐyǒu rènzhēn jiǎnchá, wǒmen cái huì fāxiàn wèntí, jiějué wèntí.","Chỉ có kiểm tra kỹ, chúng ta mới phát hiện và giải quyết được vấn đề.","等级标准"],
      ["[只有]多练习，你[才]能提高中文水平。","Zhǐyǒu duō liànxí, nǐ cái néng tígāo Zhōngwén shuǐpíng.","Chỉ có luyện nhiều, bạn mới nâng cao được trình độ tiếng Trung.","等级标准"]]}],
cmp:[
 {vn:"Chỉ cần luyện nhiều là bạn sẽ tiến bộ.", zh:"[只要]多练习，你[就]会进步。", py:"Zhǐyào duō liànxí, nǐ jiù huì jìnbù.", ok:true, why:"“chỉ cần … là” = 只要…就, khác 只有…才."}],
ex:[
 ["[只有]他[才]知道这件事。","Zhǐyǒu tā cái zhīdào zhè jiàn shì.","Chỉ có anh ấy mới biết chuyện này."]],
errs:[
 {bad:"只有多练习，你就能提高水平。", good:"只有多练习，你才能提高水平。", why:"只有 đi với 才."},
 {bad:"只要多练习，你才能提高水平。", good:"只要多练习，你就能提高水平。", why:"只要 đi với 就."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chỉ có luyện nhiều bạn mới giỏi được.", o:["只有多练习，你才能学好。","只有多练习，你就能学好。"], a:0, why:"只有…才…"},
  {q:"Chỉ cần bạn đến là được.", o:["只有你来就行。","只要你来就行。"], a:1, why:"只要…就…"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["只有","他","才","知道","这件事"], a:"只有他才知道这件事。", vi:"Chỉ có anh ấy mới biết chuyện này."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chỉ có luyện nhiều, bạn mới nâng cao được trình độ tiếng Trung.", a:"只有多练习，你才能提高中文水平。"}]}],
rel:["二67","三30","三69","三13"]
};
