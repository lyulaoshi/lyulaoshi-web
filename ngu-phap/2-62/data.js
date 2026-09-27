// Bài ngữ pháp 【二62】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二62", title:"承接复句", vi:"Câu ghép nối tiếp — trước …, rồi / sau đó …", tag:"句子的类型 · 复句",
goals:[
 "Kể các việc nối tiếp nhau, có hoặc không có từ nối.",
 "Dùng <b>先……，再……</b> và <b>先……，然后……</b>.",
 "Đặt 先, 再 <b>sau chủ ngữ, trước động từ</b>; 然后 đứng đầu vế sau."],
intro:"Câu ghép nối tiếp kể các hành động <b>theo thứ tự thời gian</b>. Tiếng Việt: “Trước …, rồi / sau đó …”.",
rules:[
 {t:"Không dùng từ nối", sub:"（1）", fx:[["Việc 1",""],["，",null],["Việc 2",""]], mean:"Thứ tự câu = thứ tự việc.",
  ex:[["吃了晚饭，我们出去走走。","Chī le wǎnfàn, wǒmen chūqu zǒuzou.","Ăn tối xong, chúng tôi ra ngoài đi dạo.","等级标准"],
      ["他回房间拿了衣服，去教室上课了。","Tā huí fángjiān ná le yīfu, qù jiàoshì shàng kè le.","Anh ấy về phòng lấy quần áo, rồi lên lớp học.","等级标准"]]},
 {t:"先……，再 / 然后……", sub:"（2）", fx:[["(S) 先",null],["Việc 1",""],["，再 / 然后",null],["Việc 2",""]], mean:"再 đứng trước động từ (sau chủ ngữ); 然后 đứng đầu vế sau, có thể thêm 再.",
  ex:[["你[先]去超市买东西，[再]回家。","Nǐ xiān qù chāoshì mǎi dōngxi, zài huí jiā.","Bạn đi siêu thị mua đồ trước, rồi hẵng về nhà.","等级标准"],
      ["我[先]去吃午饭，[然后]回房间休息。","Wǒ xiān qù chī wǔfàn, ránhòu huí fángjiān xiūxi.","Tôi đi ăn trưa trước, sau đó về phòng nghỉ.","等级标准"]]}],
cmp:[
 {vn:"Trước hết làm bài tập, rồi xem ti vi.", zh:"[先]做作业，[再]看电视。", py:"Xiān zuò zuòyè, zài kàn diànshì.", ok:true, why:"“trước … rồi …” = 先……再……"}],
ex:[
 ["我们[先]吃饭，[然后]去看电影吧。","Wǒmen xiān chī fàn, ránhòu qù kàn diànyǐng ba.","Mình ăn cơm trước, sau đó đi xem phim nhé."],
 ["你[先]听我说，[再]问问题。","Nǐ xiān tīng wǒ shuō, zài wèn wèntí.","Bạn nghe tôi nói trước, rồi hẵng hỏi."],
 ["下了课，他就回家了。","Xià le kè, tā jiù huí jiā le.","Tan học xong anh ấy về nhà ngay."]],
errs:[
 {bad:"先你去超市，再你回家。", good:"你先去超市，再回家。", why:"先, 再 đứng sau chủ ngữ."},
 {bad:"我吃饭先，然后休息。", good:"我先吃饭，然后休息。", why:"先 đứng trước động từ, không đặt sau như “ăn cơm trước”."},
 {bad:"你先做作业，又看电视。（ý: rồi mới xem）", good:"你先做作业，再看电视。", why:"Việc chưa làm dùng 再."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn đi siêu thị trước, rồi về nhà.", o:["先你去超市，再你回家。","你先去超市，再回家。","你去超市先，回家再。"], a:1, why:"S + 先 + V1，再 + V2."},
  {q:"Tôi ăn trưa trước, sau đó nghỉ.", o:["我先吃午饭，然后休息。","我然后吃午饭，先休息。","我吃午饭先，然后休息。"], a:0, why:"先……然后……"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","先","去超市","买东西","再","回家"], a:"你先去超市买东西，再回家。", vi:"Bạn đi siêu thị mua đồ trước, rồi về nhà."},
  {w:["我","先","去吃午饭","然后","回房间","休息"], a:"我先去吃午饭，然后回房间休息。", vi:"Tôi đi ăn trưa trước, sau đó về phòng nghỉ."}]},
 {t:"C. Nối các việc bằng 先……再 / 然后……", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"做作业 → 看电视", a:"我先做作业，再（然后）看电视。"},
  {q:"洗手 → 吃饭", a:"你先洗手，再吃饭。"}]}],
rel:["一11","二57","三64","二47"]
};
