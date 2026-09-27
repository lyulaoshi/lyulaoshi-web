// Bài ngữ pháp 【二73】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二73", title:"概数表示法1", vi:"Cách nói số ước lượng 1 — hơn (多)", tag:"特殊表达法 · 数的表示法",
goals:[
 "Nói “hơn …” bằng <b>số + 多 + lượng từ</b> (số tròn chục: 三十多本).",
 "Nói “hơn …” bằng <b>số + lượng từ + 多</b> (số lẻ, đơn vị: 三块多).",
 "Chọn đúng vị trí của 多."],
intro:"多 = “hơn”. Vị trí phụ thuộc vào số: <b>số tròn chục trở lên</b> → 多 trước lượng từ; <b>số từ 1 đến 9</b> → 多 sau lượng từ.",
rules:[
 {t:"Số tròn (十、百…) + 多 + lượng từ", sub:"（1）数词＋多＋量词", fx:[["Số tròn chục",""],["多",null],["Lượng từ",""]], mean:"Hơn 30 (31–39…).",
  ex:[["三十[多]本　五十[多]斤","sānshí duō běn　wǔshí duō jīn","hơn 30 quyển　hơn 50 cân","等级标准"]]},
 {t:"Số 1–9 + lượng từ + 多", sub:"（2）数词＋量词＋多", fx:[["Số 1–9",""],["Lượng từ",""],["多",null]], mean:"Hơn 3 tệ (3 tệ lẻ).",
  ex:[["三块[多]　四米[多]　七斤[多]","sān kuài duō　sì mǐ duō　qī jīn duō","hơn 3 tệ　hơn 4 mét　hơn 7 cân","等级标准"]]}],
cmp:[
 {vn:"hơn 30 người", zh:"三十[多]个人", py:"sānshí duō ge rén", ok:true, why:"Số tròn chục: 多 trước lượng từ."},
 {vn:"hơn 3 tệ", zh:"三块[多]", py:"sān kuài duō", ok:true, why:"Số lẻ: 多 sau lượng từ."}],
ex:[
 ["我们班有二十[多]个学生。","Wǒmen bān yǒu èrshí duō ge xuésheng.","Lớp tôi có hơn 20 học sinh."],
 ["他四十[多]岁。","Tā sìshí duō suì.","Anh ấy hơn 40 tuổi."],
 ["这个西瓜五斤[多]。","Zhège xīguā wǔ jīn duō.","Quả dưa hấu này hơn 5 cân."]],
errs:[
 {bad:"三十本多", good:"三十多本", why:"Số tròn chục: 多 trước lượng từ."},
 {bad:"三多块", good:"三块多", why:"Số 1–9: 多 sau lượng từ."}],
practice:[
 {t:"A. Chọn cách nói đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"hơn 30 quyển", o:["三十多本","三十本多","多三十本"], a:0, why:"Số tròn + 多 + LT."},
  {q:"hơn 3 tệ", o:["三多块","三块多","多三块"], a:1, why:"Số lẻ + LT + 多."},
  {q:"hơn 40 tuổi", o:["四十多岁","四十岁多","四多十岁"], a:0, why:"四十多岁."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们班","有","二十多个","学生"], a:"我们班有二十多个学生。", vi:"Lớp tôi có hơn 20 học sinh."},
  {w:["这个","西瓜","五斤多"], a:"这个西瓜五斤多。", vi:"Quả dưa hấu này hơn 5 cân."}]},
 {t:"C. Nói bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"hơn 50 người · hơn 2 mét", a:"五十多个人 · 两米多"},
  {q:"Cái áo này hơn 100 tệ.", a:"这件衣服一百多块。"}]}],
rel:["三74","二09","一07","二55"]
};
