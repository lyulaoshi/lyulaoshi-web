// Bài ngữ pháp 【三62】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三62", title:"并列复句：一方面……，另一方面……", vi:"一方面…，另一方面… — một mặt …, mặt khác …", tag:"句子的类型 · 复句",
goals:[
 "Trình bày <b>hai mặt</b> của một vấn đề bằng 一方面……，另一方面…….",
 "Vế sau thường có <b>也 / 还</b>; mẫu này dùng nhiều trong văn viết, lời nói trang trọng."],
intro:"Giống “một mặt …, mặt khác …” trong tiếng Việt, dùng khi lập luận, bàn bạc.",
rules:[
 {t:"一方面 + vế 1，另一方面 + (也 / 还) + vế 2", sub:"并列", fx:[["一方面",null],["vế 1",""],["·",""],["另一方面",null],["(也) vế 2",""]], mean:"",
  ex:[["我们[一方面]要看到他们的优点，[另一方面]也要指出他们的缺点。","Wǒmen yì fāngmiàn yào kàndào tāmen de yōudiǎn, lìng yì fāngmiàn yě yào zhǐchū tāmen de quēdiǎn.","Một mặt chúng ta phải thấy ưu điểm của họ, mặt khác cũng phải chỉ ra khuyết điểm.","等级标准"],
      ["他们在实习中[一方面]可以增加工作经验，[另一方面]可以学习新的知识。","Tāmen zài shíxí zhōng yì fāngmiàn kěyǐ zēngjiā gōngzuò jīngyàn, lìng yì fāngmiàn kěyǐ xuéxí xīn de zhīshi.","Khi thực tập, một mặt họ tăng thêm kinh nghiệm làm việc, mặt khác học được kiến thức mới.","等级标准"]]}],
cmp:[
 {vn:"Mặt khác, …", zh:"[另一方面]……", py:"lìng yì fāngmiàn……", ok:true, why:"Không nói <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> 别的方面; nhớ có 另."}],
ex:[
 ["学中文[一方面]要多听，[另一方面]也要多说。","Xué Zhōngwén yì fāngmiàn yào duō tīng, lìng yì fāngmiàn yě yào duō shuō.","Học tiếng Trung, một mặt phải nghe nhiều, mặt khác cũng phải nói nhiều."]],
errs:[
 {bad:"一方面要多听，一方面也要多说。", good:"一方面要多听，另一方面也要多说。", why:"Vế sau dùng 另一方面."},
 {bad:"我们要一方面看到优点，…", good:"我们一方面要看到优点，…", why:"一方面 đứng trước động từ năng nguyện 要."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Một mặt phải nghe nhiều, mặt khác cũng phải nói nhiều.", o:["一方面要多听，另一方面也要多说。","一方面要多听，别的方面也要多说。"], a:0, why:"另一方面."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["一方面","可以","增加经验，","另一方面","可以","学习知识"], a:"一方面可以增加经验，另一方面可以学习知识。", vi:"Một mặt tăng thêm kinh nghiệm, mặt khác học được kiến thức."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Học tiếng Trung, một mặt phải nghe nhiều, mặt khác cũng phải nói nhiều.", a:"学中文一方面要多听，另一方面也要多说。"}]}],
rel:["三60","三66","三65","三64"]
};
