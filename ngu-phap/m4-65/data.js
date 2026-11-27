// Bài ngữ pháp 【新4.65】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.65", title:"紧缩复句：不……也……", vi:"不…也… — không … cũng …", tag:"句子的类型 · 复句",
goals:[
 "Nói gọn hai vế thành một câu: <b>不 A 也 B</b>.",
 "Hiểu nghĩa ẩn “<b>cho dù không</b> A cũng B”.",
 "Phân biệt với 一…就… và 越…越… (cũng là câu nén)."],
intro:"“<b>Không</b> nói <b>cũng</b> biết.” → <b>不</b>说<b>也</b>知道。Không cần 即使, không cần dấu phẩy.",
rules:[
 {t:"(S) + 不 + V1 + 也 + V2", sub:"紧缩", fx:[["(S)",""],["不",null],["V1",""],["也",null],["V2",""]], mean:"Dù không V1 vẫn V2.",
  ex:[["{1|你}{2|不}{3|说}{4|也}{5|行}。","Nǐ bù shuō yě xíng.","Bạn không nói cũng được."],
      ["{1|他}{2|不}{3|看书}{4|也}{5|知道答案}。","Tā bú kàn shū yě zhīdào dá’àn.","Anh ấy không xem sách cũng biết đáp án."]]}],
notes:[{t:"没……也……", html:"Chuyện đã qua / sự vật không có: <span class='zh'>没带伞也没关系。</span>"}],
cmp:[
 {vn:"Không hỏi cũng biết.", zh:"[不]问[也]知道。", py:"Bú wèn yě zhīdào.", ok:true, why:"Trùng cách nói tiếng Việt."}],
ex:[
 ["这么简单的问题，[不]学[也]会。","Zhème jiǎndān de wèntí, bù xué yě huì.","Bài dễ thế, không học cũng làm được."],
 ["你[不]请他[也]会来。","Nǐ bù qǐng tā yě huì lái.","Bạn không mời anh ấy cũng đến."],
 ["天太热了，[不]运动[也]出汗。","Tiān tài rè le, bú yùndòng yě chū hàn.","Trời nóng quá, không vận động cũng toát mồ hôi."]],
errs:[
 {bad:"你说不也行。", good:"你不说也行。", why:"不 đứng trước V1."},
 {bad:"不问就也知道。", good:"不问也知道。", why:"Chỉ dùng 也, không chồng thêm 就."},
 {bad:"不请他会也来。", good:"不请他也会来。", why:"也 đứng trước 会."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Không hỏi cũng biết.", o:["不问也知道。","问不也知道。","也不问知道。"], a:0, why:"不 V1 也 V2."},
  {q:"你不请他＿会来。", vi:"Bạn không mời anh ấy cũng đến.", o:["也","就是","却不"], a:0, why:"不……也……."},
  {q:"不吃早饭也不饿。", vi:"Chọn nghĩa của câu.", o:["Cho dù không ăn sáng cũng không đói","Không ăn sáng thì sẽ đói"], a:0, why:"也 = cũng."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","不","看书","也","知道","答案"], a:"他不看书也知道答案。", vi:"Anh ấy không xem sách cũng biết đáp án."},
  {w:["天太热了，","不","运动","也","出汗"], a:"天太热了，不运动也出汗。", vi:"Trời nóng quá, không vận động cũng toát mồ hôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bạn không nói cũng được.", a:"你不说也行。/ 你不说也可以。"},
  {q:"Bạn không mời anh ấy cũng đến.", a:"你不请他也会来。/ 你不请他他也会来。"}]}],
rel:["新4.64","二69","三42"]
};
