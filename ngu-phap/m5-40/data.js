// Bài ngữ pháp 【新5.40】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.40", title:"目的复句：……，为的是……", vi:"…, 为的是… — … là để …", tag:"句子的类型 · 复句",
goals:[
 "Nói hành động trước, <b>mục đích</b> sau bằng 为的是.",
 "So với 为了 (đứng trước).",
 "Dùng khi muốn <b>nhấn mạnh mục đích</b>."],
intro:"“Anh ấy dậy sớm, <b>là để</b> tránh tắc đường.” → 他很早起床，<b>为的是</b>避开堵车。",
rules:[
 {t:"Hành động，为的是 + mục đích", sub:"目的", fx:[["hành động",""],["，",""],["为的是",null],["mục đích",""]], mean:"Làm vậy là để …",
  ex:[["{1|他每天很早出门}，{2|为的是}{3|避开堵车}。","Tā měi tiān hěn zǎo chūmén, wèi de shì bìkāi dǔchē.","Ngày nào anh ấy cũng đi sớm, là để tránh tắc đường."],
      ["{1|父母辛苦工作}，{2|为的是}{3|让孩子过得更好}。","Fùmǔ xīnkǔ gōngzuò, wèi de shì ràng háizi guò de gèng hǎo.","Bố mẹ vất vả làm việc, là để con sống tốt hơn."]]}],
cmp:[
 {vn:"Tôi nói vậy là để bạn yên tâm.", zh:"我这么说，[为的是]让你放心。", py:"Wǒ zhème shuō, wèi de shì ràng nǐ fàngxīn.", ok:true, why:"为的是 = là để."}],
ex:[
 ["他学汉语，[为的是]去中国工作。","Tā xué Hànyǔ, wèi de shì qù Zhōngguó gōngzuò.","Anh ấy học tiếng Trung là để sang Trung Quốc làm việc."],
 ["我提前来，[为的是]帮你准备一下。","Wǒ tíqián lái, wèi de shì bāng nǐ zhǔnbèi yíxià.","Tôi đến sớm là để giúp bạn chuẩn bị."],
 ["商店打折，[为的是]吸引顾客。","Shāngdiàn dǎzhé, wèi de shì xīyǐn gùkè.","Cửa hàng giảm giá là để thu hút khách."]],
errs:[
 {bad:"为的是避开堵车，他很早出门。", good:"为了避开堵车，他很早出门。", why:"Mục đích đứng trước dùng 为了."},
 {bad:"他很早出门，是为的避开堵车。", good:"他很早出门，为的是避开堵车。", why:"Thứ tự cố định 为的是."},
 {bad:"他学汉语，为了是去中国工作。", good:"他学汉语，为的是去中国工作。", why:"Không viết 为了是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy đi sớm là để tránh tắc đường.", o:["他很早出门，为的是避开堵车。","他很早出门，为了是避开堵车。"], a:0, why:"为的是."},
  {q:"＿避开堵车，他很早出门。", vi:"Để tránh tắc đường, anh ấy đi sớm.", o:["为了","为的是","因而"], a:0, why:"Đứng đầu câu → 为了."},
  {q:"我提前来，为的＿帮你。", vi:"Tôi đến sớm là để giúp bạn.", o:["是","了","在"], a:0, why:"为的是."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["商店","打折，","为的是","吸引","顾客"], a:"商店打折，为的是吸引顾客。", vi:"Cửa hàng giảm giá là để thu hút khách."},
  {w:["我","这么说，","为的是","让你","放心"], a:"我这么说，为的是让你放心。", vi:"Tôi nói vậy là để bạn yên tâm."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 为的是)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy học tiếng Trung là để sang Trung Quốc làm việc.", a:"他学汉语，为的是去中国工作。/ 他学中文，为的是去中国工作。"}]}],
rel:["新4.63","三72","三26"]
};
