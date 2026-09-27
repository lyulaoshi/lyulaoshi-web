// Bài ngữ pháp 【一40】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一40", title:"变化态：了²", vi:"Thể biến đổi — 了 cuối câu: “… rồi”", tag:"动作的态",
goals:[
 "Dùng <b>了²</b> ở cuối câu để nói tình huống <b>mới xuất hiện / đã thay đổi</b>.",
 "Phủ định bằng <b>没 + V / Adj</b> (bỏ 了).",
 "Dùng <b>不……了</b> nghĩa “không … nữa”."],
intro:"了² đứng <b>cuối câu</b>, báo một tình huống mới so với trước: ốm rồi, mưa nhỏ rồi, ăn rồi. Gần với “… rồi” của tiếng Việt.",
rules:[
 {t:"Câu + 了: đã thay đổi / đã xảy ra", sub:"变化", fx:[["Chủ ngữ",""],["Động từ / tính từ (+ tân ngữ)",""],["了",null]], mean:"Trạng thái mới xuất hiện.",
  ex:[["她病[了]。","Tā bìng le.","Cô ấy ốm rồi.","等级标准"],
      ["雨小[了]。","Yǔ xiǎo le.","Mưa nhỏ rồi.","等级标准"],
      ["他吃早饭[了]。","Tā chī zǎofàn le.","Anh ấy ăn sáng rồi.","等级标准"]]},
 {t:"Phủ định: 没 + V / Adj", sub:"否定", fx:[["Chủ ngữ",""],["没",null],["Động từ / tính từ",""]], mean:"Tình huống chưa thay đổi. Bỏ 了.",
  ex:[["她[没]病。","Tā méi bìng.","Cô ấy không ốm.","等级标准"],
      ["雨[没]小。","Yǔ méi xiǎo.","Mưa chưa nhỏ.","等级标准"],
      ["他[没]吃早饭。","Tā méi chī zǎofàn.","Anh ấy chưa ăn sáng.","等级标准"]]},
 {t:"不……了: không … nữa", sub:"不……了", fx:[["Chủ ngữ",""],["不",null],["Động từ",""],["了",null]], mean:"Thay đổi ý định: trước muốn, giờ không.",
  ex:[["我[不]去[了]。","Wǒ bú qù le.","Tôi không đi nữa."],
      ["他[不]喝咖啡[了]。","Tā bù hē kāfēi le.","Anh ấy không uống cà phê nữa."]]}],
notes:[
 {t:"Câu hỏi", html:"<span class='zh'>你吃饭了吗？/ 你吃饭了没有？</span>"},
 {t:"了¹ và 了²", html:"了¹ ngay sau động từ, nhấn vào hành động hoàn thành 【一41】; 了² cuối câu, nhấn vào tình huống mới."}],
cmp:[
 {vn:"Tôi mệt rồi.", zh:"我累[了]。", py:"Wǒ lèi le.", ok:true, why:"“rồi” cuối câu → 了."},
 {vn:"Tôi không đi nữa.", zh:"我不去[了]。", py:"Wǒ bú qù le.", ok:true, why:"“nữa” → 不……了."},
 {vn:"Tôi chưa ăn.", zh:"我没吃。", py:"Wǒ méi chī.", ok:false, tag:"(không có 了)", why:"Phủ định với 没 thì bỏ 了."}],
ex:[
 ["天冷[了]。","Tiān lěng le.","Trời lạnh rồi."],
 ["我会说中文[了]。","Wǒ huì shuō Zhōngwén le.","Tôi biết nói tiếng Trung rồi."],
 ["他二十岁[了]。","Tā èrshí suì le.","Cậu ấy hai mươi tuổi rồi."],
 ["——你吃饭了吗？——吃[了]。","—— Nǐ chī fàn le ma? —— Chī le.","— Bạn ăn cơm chưa? — Ăn rồi."]],
errs:[
 {bad:"她没病了。", good:"她没病。", why:"Có 没 thì bỏ 了."},
 {bad:"我不去。（ý: không đi nữa）", good:"我不去了。", why:"Đổi ý phải có 了."},
 {bad:"了我累。", good:"我累了。", why:"了² đứng cuối câu."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mưa nhỏ rồi.", o:["雨小了。","雨了小。","了雨小。"], a:0, why:"Câu + 了."},
  {q:"Cô ấy không ốm.", o:["她没病了。","她不病了。","她没病。"], a:2, why:"没 + V, bỏ 了."},
  {q:"Tôi không đi nữa.", o:["我不去了。","我没去了。","我不去。"], a:0, why:"不……了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","吃","早饭","了"], a:"他吃早饭了。", vi:"Anh ấy ăn sáng rồi."},
  {w:["我","会","说","中文","了"], a:"我会说中文了。", vi:"Tôi biết nói tiếng Trung rồi."},
  {w:["他","不","喝","咖啡","了"], a:"他不喝咖啡了。", vi:"Anh ấy không uống cà phê nữa."}]},
 {t:"C. Đổi sang phủ định", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"他吃早饭了。", a:"他没吃早饭。"},
  {ask:"Phủ định", q:"雨小了。", a:"雨没小。"},
  {ask:"Hỏi", q:"你吃饭了。", a:"你吃饭了吗？/ 你吃饭了没有？"}]}],
rel:["一22","一41","一21","二81"]
};
