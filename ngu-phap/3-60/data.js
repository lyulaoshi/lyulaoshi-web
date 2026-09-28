// Bài ngữ pháp 【三60】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三60", title:"并列复句：（也）……，也……", vi:"(也)…, 也… — … cũng …, … cũng …", tag:"句子的类型 · 复句",
goals:[
 "Nối hai vế song song, giống nhau về ý bằng <b>也……，也……</b>.",
 "Nhớ 也 đứng <b>sau chủ ngữ, trước động từ</b> của mỗi vế.",
 "Có thể lược 也 ở vế đầu."],
intro:"Câu ghép đẳng lập: hai vế nói hai việc tương tự. Tiếng Việt: “Bóng rổ anh ấy thích, bóng chuyền anh ấy cũng thích.”",
rules:[
 {t:"(S1) + (也) + V1, S2 + 也 + V2", sub:"并列", fx:[["Vế 1 (也)",""],["·",""],["Vế 2: S + 也 + V",null]], mean:"",
  ex:[["篮球他喜欢，排球他[也]喜欢。","Lánqiú tā xǐhuan, páiqiú tā yě xǐhuan.","Bóng rổ anh ấy thích, bóng chuyền anh ấy cũng thích.","等级标准"],
      ["面条儿我[也]爱吃，米饭我[也]爱吃。","Miàntiáor wǒ yě ài chī, mǐfàn wǒ yě ài chī.","Mì tôi cũng thích ăn, cơm tôi cũng thích ăn.","等级标准"]]}],
cmp:[
 {vn:"Tôi cũng thích ăn cơm.", zh:"我[也]爱吃米饭。", py:"Wǒ yě ài chī mǐfàn.", ok:true, why:"也 đứng sau chủ ngữ, không đứng đầu câu."}],
ex:[
 ["他会说中文，[也]会说英文。","Tā huì shuō Zhōngwén, yě huì shuō Yīngwén.","Anh ấy biết nói tiếng Trung, cũng biết nói tiếng Anh."],
 ["这儿[也]有，那儿[也]有。","Zhèr yě yǒu, nàr yě yǒu.","Chỗ này cũng có, chỗ kia cũng có."]],
errs:[
 {bad:"篮球他喜欢，也排球他喜欢。", good:"篮球他喜欢，排球他也喜欢。", why:"也 đứng trước động từ, không đứng đầu vế."},
 {bad:"我爱吃面条儿，也米饭。", good:"我爱吃面条儿，也爱吃米饭。", why:"Sau 也 cần động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bóng rổ anh ấy thích, bóng chuyền anh ấy cũng thích.", o:["篮球他喜欢，也排球他喜欢。","篮球他喜欢，排球他也喜欢。"], a:1, why:"S + 也 + V."},
  {q:"Anh ấy biết tiếng Trung, cũng biết tiếng Anh.", o:["他会中文，也会英文。","他会中文，也英文。"], a:0, why:"也 + động từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["面条儿","我","也","爱吃，","米饭","我","也","爱吃"], a:"面条儿我也爱吃，米饭我也爱吃。", vi:"Mì tôi cũng thích ăn, cơm tôi cũng thích ăn."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chỗ này cũng có, chỗ kia cũng có.", a:"这儿也有，那儿也有。/ 这里也有，那里也有。"}]}],
rel:["三63","三61","二46","三66"]
};
