// Bài ngữ pháp 【新5.05】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.05", title:"程度副词：过于、相当、较、可、格外、极其", vi:"过于, 相当, 较, 可, 格外, 极其 — quá, khá, đặc biệt, cực kỳ", tag:"词类 · 副词",
goals:[
 "Dùng <b>过于</b> (quá mức), <b>极其</b> (cực kỳ).",
 "Dùng <b>格外</b> (đặc biệt hơn bình thường).",
 "Dùng <b>可……了</b> để cảm thán."],
intro:"过于 thường mang ý <b>không tốt</b> (quá mức). 格外 là “<b>hơn hẳn mọi khi</b>”.",
rules:[
 {t:"过于 / 极其 + Adj", sub:"（1）", fx:[["S",""],["过于 / 极其",null],["Adj / V tâm lý",""]], mean:"过于 quá · 极其 hết sức (văn viết).",
  ex:[["{1|你}不要{2|过于}{3|担心}。","Nǐ búyào guòyú dānxīn.","Bạn đừng lo quá."],
      ["{1|这个问题}{2|极其}{3|重要}。","Zhège wèntí jíqí zhòngyào.","Vấn đề này cực kỳ quan trọng."]]},
 {t:"格外 + Adj / V", sub:"（2）格外", fx:[["S",""],["格外",null],["Adj / V",""]], mean:"Đặc biệt, hơn hẳn.",
  ex:[["雨后的{1|天空}{2|格外}{3|蓝}。","Yǔ hòu de tiānkōng géwài lán.","Trời sau mưa xanh lạ thường."]]},
 {t:"相当 / 较 + Adj", sub:"（3）", fx:[["S",""],["相当 / 较",null],["Adj",""]], mean:"相当 khá, tương đối cao · 较 khá (văn viết).",
  ex:[["{1|他的汉语}{2|相当}{3|好}。","Tā de Hànyǔ xiāngdāng hǎo.","Tiếng Trung của anh ấy khá giỏi."],
      ["今年{1|天气}{2|较}{3|热}。","Jīnnián tiānqì jiào rè.","Năm nay trời khá nóng."]]},
 {t:"S + 可 + Adj + 了", sub:"（4）可", fx:[["S",""],["可",null],["Adj",""],["了",null]], mean:"Cảm thán: … lắm đấy.",
  ex:[["{1|这儿的风景}{2|可}{3|美}{4|了}！","Zhèr de fēngjǐng kě měi le!","Phong cảnh ở đây đẹp lắm!"]]}],
cmp:[
 {vn:"Anh ấy quá tin người.", zh:"他[过于]相信别人。", py:"Tā guòyú xiāngxìn biérén.", ok:true, why:"Mức vượt quá → 过于."}],
ex:[
 ["节日的街道[格外]热闹。","Jiérì de jiēdào géwài rènao.","Đường phố ngày lễ náo nhiệt hơn hẳn."],
 ["大家对这件事[极其]关心。","Dàjiā duì zhè jiàn shì jíqí guānxīn.","Mọi người hết sức quan tâm việc này."],
 ["那天我[可]高兴了。","Nà tiān wǒ kě gāoxìng le.","Hôm đó tôi vui lắm."]],
errs:[
 {bad:"他过于很紧张。", good:"他过于紧张。", why:"Không thêm 很."},
 {bad:"这里的风景可美。", good:"这里的风景可美了。", why:"可 cảm thán thường kèm 了 / 啦."},
 {bad:"他极其得好。", good:"他极其认真。/ 他好极了。", why:"极其 đứng trước tính từ hai âm tiết, không thêm 得."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"考试的时候不要＿紧张。", vi:"Lúc thi đừng căng thẳng quá.", o:["过于","可","格外地了"], a:0, why:"Quá mức → 过于."},
  {q:"今天的月亮＿圆。", vi:"Trăng hôm nay tròn lạ thường.", o:["格外","过于","较为很"], a:0, why:"Hơn hẳn → 格外."},
  {q:"他讲的故事＿有意思了！", vi:"Chuyện anh ấy kể hay lắm!", o:["可","极其","过于"], a:0, why:"可……了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个问题","极其","重要"], a:"这个问题极其重要。", vi:"Vấn đề này cực kỳ quan trọng."},
  {w:["你","不要","过于","担心"], a:"你不要过于担心。", vi:"Bạn đừng lo quá."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Phong cảnh ở đây đẹp lắm (dùng 可……了)!", a:"这儿的风景可美了！/ 这里的风景可美了！/ 这里的风景可漂亮了！"}]}],
rel:["三12","新4.05","一09"]
};
