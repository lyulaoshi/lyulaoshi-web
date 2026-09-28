// Bài ngữ pháp 【三40】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三40", title:"对……来说", vi:"对……来说 — đối với … mà nói", tag:"固定格式",
goals:[
 "Dùng <b>对 + người / nhóm + 来说，……</b> để nêu đánh giá từ góc nhìn của ai.",
 "Đặt cụm ở đầu câu, ngăn bằng dấu phẩy.",
 "Không bỏ 来说."],
intro:"对……来说 = “đối với … (mà nói)”: nhận xét tiếp theo đúng với <b>người / nhóm đó</b>.",
rules:[
 {t:"对 + người + 来说，nhận xét", sub:"对……来说", fx:[["对",null],["người / nhóm",""],["来说",null],["，nhận xét",""]], mean:"",
  ex:[["[对]日本留学生[来说]，汉字不太难。","Duì Rìběn liúxuéshēng láishuō, Hànzì bú tài nán.","Đối với du học sinh Nhật Bản, chữ Hán không khó lắm.","等级标准"],
      ["[对]专家[来说]，这个问题很容易解决。","Duì zhuānjiā láishuō, zhège wèntí hěn róngyì jiějué.","Đối với chuyên gia, vấn đề này rất dễ giải quyết.","等级标准"]]}],
cmp:[
 {vn:"Đối với tôi, tiếng Trung rất thú vị.", zh:"[对]我[来说]，中文很有意思。", py:"Duì wǒ láishuō, Zhōngwén hěn yǒu yìsi.", ok:true, why:"Giống khung tiếng Việt “đối với … mà nói”."}],
ex:[
 ["[对]越南人[来说]，声调不太难。","Duì Yuènán rén láishuō, shēngdiào bú tài nán.","Đối với người Việt, thanh điệu không khó lắm."],
 ["[对]孩子[来说]，玩儿也是学习。","Duì háizi láishuō, wánr yě shì xuéxí.","Đối với trẻ con, chơi cũng là học."]],
errs:[
 {bad:"对我，中文很有意思。", good:"对我来说，中文很有意思。", why:"Cần 来说."},
 {bad:"来说对我，……", good:"对我来说，……", why:"Thứ tự: 对 + người + 来说."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Đối với tôi, tiếng Trung rất thú vị.", o:["对我，中文很有意思。","对我来说，中文很有意思。"], a:1, why:"对……来说."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["对","专家","来说","这个问题","很容易","解决"], a:"对专家来说，这个问题很容易解决。", vi:"Đối với chuyên gia, vấn đề này rất dễ giải quyết."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Đối với người Việt, thanh điệu không khó lắm.", a:"对越南人来说，声调不太难。"}]}],
rel:["二25","一28","三28","三39"]
};
