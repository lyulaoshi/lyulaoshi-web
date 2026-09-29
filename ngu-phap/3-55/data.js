// Bài ngữ pháp 【三55】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三55", title:"被动句1", vi:"Câu bị động 1 — O + 被 / 叫 / 让 + người + V + thành phần khác", tag:"句子的类型 · 特殊句型",
goals:[
 "Đặt câu bị động <b>đối tượng + 被 / 叫 / 让 + người làm + V + thành phần khác</b>.",
 "Biết 被 có thể lược người làm, còn 叫 / 让 thì không.",
 "Câu bị động tiếng Trung thường nói về việc <b>không như ý</b>."],
intro:"Tiếng Việt “bị / được”; tiếng Trung dùng 被 (叫, 让 khẩu ngữ). Động từ sau đó <b>không đứng trơn</b>: cần 了, bổ ngữ…",
rules:[
 {t:"O + 被 / 叫 / 让 + người + V + thành phần khác", sub:"被动", fx:[["Đối tượng",""],["被 / 叫 / 让",null],["người làm",""],["V + 坏 / 脏 / 了…",""]], mean:"",
  ex:[["那个手机早[被]我用坏了。","Nàge shǒujī zǎo bèi wǒ yònghuài le.","Chiếc điện thoại đó bị tôi dùng hỏng từ lâu rồi.","等级标准"],
      ["我的词典[叫]弟弟弄脏了。","Wǒ de cídiǎn jiào dìdi nòngzāng le.","Từ điển của tôi bị em trai làm bẩn rồi.","等级标准"],
      ["他完全[让]这位姑娘迷住了。","Tā wánquán ràng zhè wèi gūniang mízhù le.","Anh ấy hoàn toàn bị cô gái này hớp hồn rồi.","等级标准"]]}],
notes:[{t:"Phủ định", html:"没 đặt trước 被: <span class='zh'>我的钱包没被偷。</span>"}],
cmp:[
 {vn:"Tôi bị thầy phê bình.", zh:"我[被]老师批评了。", py:"Wǒ bèi lǎoshī pīpíng le.", ok:true, why:"Trật tự giống tiếng Việt, có 了 cuối."},
 {vn:"Tôi được thầy khen.", zh:"我[被]老师表扬了。", py:"Wǒ bèi lǎoshī biǎoyáng le.", ok:true, why:"“được” (tốt) cũng có thể dùng 被, nhưng ít hơn."}],
ex:[
 ["我的自行车[被]偷了。","Wǒ de zìxíngchē bèi tōu le.","Xe đạp của tôi bị lấy trộm rồi."],
 ["蛋糕[让]孩子们吃完了。","Dàngāo ràng háizimen chīwán le.","Bánh bị bọn trẻ ăn hết rồi."]],
errs:[
 {bad:"我的车被朋友借。", good:"我的车被朋友借走了。", why:"Động từ cần bổ ngữ / 了."},
 {bad:"我的词典叫弄脏了。", good:"我的词典叫弟弟弄脏了。", why:"叫 / 让 phải có người làm."},
 {bad:"我的钱包被没偷。", good:"我的钱包没被偷。", why:"没 đứng trước 被."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Xe đạp của tôi bị lấy trộm rồi.", o:["我的自行车被偷了。","我的自行车被偷。","我的自行车偷被了。"], a:0, why:"被 + V + 了."},
  {q:"Từ điển bị em trai làm bẩn.", o:["词典叫弄脏了。","词典叫弟弟弄脏了。"], a:1, why:"叫 cần người làm."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["那个手机","被","我","用坏了"], a:"那个手机被我用坏了。", vi:"Chiếc điện thoại đó bị tôi dùng hỏng rồi."},
  {w:["蛋糕","让","孩子们","吃完了"], a:"蛋糕让孩子们吃完了。", vi:"Bánh bị bọn trẻ ăn hết rồi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi bị thầy phê bình.", a:"我被老师批评了。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我的钱包被偷了。", vi:"Ví của tôi bị lấy trộm rồi.", o:["Đúng","Sai"], a:0, why:"被 + V + 了; không cần nói người làm."},
  {q:"我的手机被弟弟用。", vi:"Điện thoại của tôi bị em trai dùng.", o:["Đúng","Sai"], a:1, why:"Sau động từ cần thành phần khác: 我的手机被弟弟用坏了。"},
  {q:"我的衣服叫弄脏了。", vi:"Quần áo của tôi bị làm bẩn rồi.", o:["Đúng","Sai"], a:1, why:"叫 / 让 phải có người làm: 我的衣服叫弟弟弄脏了。"},
  {q:"我被老师没批评。", vi:"Tôi không bị thầy phê bình.", o:["Đúng","Sai"], a:1, why:"没 đứng trước 被: 我没被老师批评。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cái cốc bị em gái làm vỡ rồi.", o:["杯子被妹妹打破了。", "妹妹被杯子打破了。", "杯子被打破妹妹了。"], a:0, why:"Vật + 被 + người + V + bổ ngữ."},
  {q:"Tôi không bị mưa làm ướt.", o:["我没被雨淋湿。", "我被雨没淋湿。"], a:0, why:"没 trước 被."},
  {q:"Bánh bị ăn hết rồi (không nói ai ăn).", o:["蛋糕被吃完了。", "蛋糕让吃完了。"], a:0, why:"Không có người làm thì chỉ dùng 被."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Xe đạp của tôi bị bạn mượn đi rồi.", a:"我的自行车被朋友借走了。/ 我的自行车叫朋友借走了。/ 我的自行车让朋友借走了。"},
  {q:"Điện thoại của tôi bị lấy trộm rồi.", a:"我的手机被偷了。/ 我的手机被人偷了。/ 我的手机被偷走了。/ 我的手机被人偷走了。"},
  {q:"Tôi chưa bị thầy phê bình.", a:"我没被老师批评。/ 我没被老师批评过。"}]}],
rel:["三27","三54","二49","三46"]
};
