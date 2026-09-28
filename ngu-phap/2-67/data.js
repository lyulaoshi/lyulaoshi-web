// Bài ngữ pháp 【二67】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二67", title:"条件复句：只要……，就……", vi:"Câu ghép điều kiện — chỉ cần … là …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>只要……，就……</b> nói điều kiện <b>đủ</b> để có kết quả.",
 "Đặt 就 sau chủ ngữ vế sau.",
 "Phân biệt với 只有……才…… (chỉ có … mới …) 【三70】."],
intro:"只要 = “chỉ cần”: chỉ cần điều kiện này là <b>đủ</b> để có kết quả.",
rules:[
 {t:"只要 + điều kiện，(S) 就 + kết quả", sub:"只要……就……", fx:[["只要",null],["Điều kiện",""],["，(S) 就",null],["Kết quả",""]], mean:"",
  ex:[["[只要]你认真学习，[就]一定能取得好成绩。","Zhǐyào nǐ rènzhēn xuéxí, jiù yídìng néng qǔdé hǎo chéngjì.","Chỉ cần bạn chăm chỉ học là nhất định sẽ có thành tích tốt.","等级标准"],
      ["[只要]你通过这次考试，我[就]送你一件礼物。","Zhǐyào nǐ tōngguò zhè cì kǎoshì, wǒ jiù sòng nǐ yí jiàn lǐwù.","Chỉ cần con qua kỳ thi này là mẹ tặng con một món quà.","等级标准"]]}],
notes:[
 {t:"只要 và 只有", html:"<span class='zh'>只要……就……</span> điều kiện đủ (dễ); <span class='zh'>只有……才……</span> điều kiện duy nhất (khó) 【三70】."}],
cmp:[
 {vn:"Chỉ cần bạn đến là được.", zh:"[只要]你来[就]行。", py:"Zhǐyào nǐ lái jiù xíng.", ok:true, why:"“chỉ cần … là …” = 只要……就……"}],
ex:[
 ["[只要]有时间，我[就]去看你。","Zhǐyào yǒu shíjiān, wǒ jiù qù kàn nǐ.","Chỉ cần có thời gian là tôi đến thăm bạn."],
 ["[只要]每天练习，你的中文[就]会越来越好。","Zhǐyào měi tiān liànxí, nǐ de Zhōngwén jiù huì yuè lái yuè hǎo.","Chỉ cần luyện tập mỗi ngày là tiếng Trung của bạn sẽ ngày càng giỏi."]],
errs:[
 {bad:"只要你认真学习，才能取得好成绩。", good:"只要你认真学习，就能取得好成绩。", why:"只要 đi với 就 (才 đi với 只有)."},
 {bad:"只要你来，就我很高兴。", good:"只要你来，我就很高兴。", why:"就 sau chủ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chỉ cần bạn chăm là sẽ học tốt.", o:["只要你努力，才能学好。","只要你努力，就能学好。","只要你努力，所以能学好。"], a:1, why:"只要……就……"},
  {q:"Chỉ cần bạn đến là tôi vui.", o:["只要你来，就我很高兴。","只要你来，我就很高兴。","我就很高兴只要你来。"], a:1, why:"S + 就."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["只要","有时间","我","就","去看你"], a:"只要有时间，我就去看你。", vi:"Chỉ cần có thời gian là tôi đến thăm bạn."}]},
 {t:"C. Nối bằng 只要……就……", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"你认真学习 / 能取得好成绩", vi:"Bạn chăm chỉ học / có thể đạt thành tích tốt", a:"只要你认真学习，就能取得好成绩。"},
  {q:"你喜欢 / 我送给你", vi:"Bạn thích / tôi tặng bạn", a:"只要你喜欢，我就送给你。"}]}],
rel:["二66","三70","二17","二30"]
};
