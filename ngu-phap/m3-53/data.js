// Bài ngữ pháp 【新3.53】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新3.53", title:"“怎样＋动词”的特指问句", vi:"Hỏi bằng 怎样 + động từ — làm thế nào?", tag:"句子的类型 · 疑问句",
goals:[
 "Hỏi <b>cách làm</b> bằng <b>怎样 + động từ</b>: 怎样学好中文?",
 "Biết 怎样 = 怎么 (hỏi cách thức) nhưng trang trọng hơn, hay gặp trong văn viết, đề bài.",
 "Đặt 怎样 ngay trước động từ."],
intro:"【一46】 đã học 怎么 + động từ để hỏi cách làm (怎么走?). 怎样 cùng nghĩa, dùng nhiều trong <b>câu hỏi của bài đọc, thông báo, đề thi</b>.",
rules:[
 {t:"S + 怎样 + V (+ O)？", sub:"怎样 + V", fx:[["S",""],["怎样",null],["V + O",""],["？",""]], mean:"Làm thế nào để …?",
  ex:[["我们[怎样]学好中文？","Wǒmen zěnyàng xuéhǎo Zhōngwén?","Chúng ta học giỏi tiếng Trung bằng cách nào?"],
      ["这个字[怎样]写？","Zhège zì zěnyàng xiě?","Chữ này viết thế nào?"],
      ["去火车站[怎样]走？","Qù huǒchēzhàn zěnyàng zǒu?","Đến ga tàu đi thế nào?"]]}],
notes:[{t:"怎样 và 怎么样", html:"<span class='zh'>怎样 + V</span> hỏi <b>cách làm</b>. <span class='zh'>……怎么样？</span> ở cuối câu hỏi <b>ý kiến, tình trạng</b>: <span class='zh'>这个菜怎么样？</span>"}],
cmp:[
 {vn:"Làm thế nào để giữ sức khỏe?", zh:"[怎样]保持身体健康？", py:"Zěnyàng bǎochí shēntǐ jiànkāng?", ok:false, tag:"(từ hỏi đứng trước)", why:"Tiếng Việt “làm thế nào” có thể đứng đầu; tiếng Trung 怎样 đứng ngay trước động từ."}],
ex:[
 ["你是[怎样]认识他的？","Nǐ shì zěnyàng rènshi tā de?","Bạn quen anh ấy thế nào?"],
 ["[怎样]才能说得更流利？","Zěnyàng cái néng shuō de gèng liúlì?","Làm thế nào mới nói lưu loát hơn?"]],
errs:[
 {bad:"我们学好中文怎样？", good:"我们怎样学好中文？", why:"Hỏi cách làm: 怎样 đứng trước động từ."},
 {bad:"这个字写怎样？", good:"这个字怎样写？/ 这个字怎么写？", why:"怎样 + V."},
 {bad:"这个菜怎样好吃？（ý: có ngon không）", good:"这个菜怎么样？", why:"Hỏi ý kiến dùng ……怎么样？ ở cuối câu."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chữ này viết thế nào?", o:["这个字写怎样？","这个字怎样写？"], a:1, why:"怎样 + V."},
  {q:"Món này thế nào? (hỏi ý kiến)", o:["这个菜怎么样？","这个菜怎样？"], a:0, why:"Hỏi ý kiến → 怎么样 cuối câu."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","怎样","学好","中文"], a:"我们怎样学好中文？", vi:"Chúng ta học giỏi tiếng Trung bằng cách nào?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Đến ga tàu đi thế nào?", a:"去火车站怎样走？/ 去火车站怎么走？"},
  {q:"Bạn quen anh ấy thế nào?", a:"你是怎样认识他的？/ 你是怎么认识他的？/ 你怎样认识他的？"}]}],
rel:["一46","二05","二76","二60"]
};
