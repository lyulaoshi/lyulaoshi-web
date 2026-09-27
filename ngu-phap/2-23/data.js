// Bài ngữ pháp 【二23】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二23", title:"介词：向", vi:"Giới từ 向¹ — “về phía, hướng về” (phương hướng)", tag:"词类 · 介词 · 引出方向、路径",
goals:[
 "Dùng <b>向 + hướng / nơi chốn + động từ</b> để chỉ hướng.",
 "Đặt 向…… <b>trước động từ</b>.",
 "Biết 向 còn dẫn ra người (向老师学习) — nghĩa 向² 【三24】."],
intro:"向¹ chỉ <b>phương hướng</b> của động tác, gần nghĩa với 往. Cụm “向 + hướng” đứng trước động từ.",
rules:[
 {t:"向 + hướng / nơi chốn + V", sub:"向¹", fx:[["(S)",""],["向",null],["hướng / nơi chốn",""],["Động từ",""]], mean:"Nhìn, đi, chạy… về phía nào.",
  ex:[["你[向]西边看，看见西山了吗？","Nǐ xiàng xībian kàn, kànjiàn Xī Shān le ma?","Bạn nhìn về phía tây, thấy núi Tây Sơn chưa?","等级标准"],
      ["他[向]图书馆走去了。","Tā xiàng túshūguǎn zǒuqu le.","Anh ấy đi về phía thư viện rồi.","等级标准"]]}],
cmp:[
 {vn:"Nhìn về phía tây.", zh:"[向西边]看。", py:"Xiàng xībian kàn.", ok:true, why:"“về phía tây” lên trước động từ."}],
ex:[
 ["他[向]我走来。","Tā xiàng wǒ zǒulai.","Anh ấy đi về phía tôi."],
 ["请大家[向]前看。","Qǐng dàjiā xiàng qián kàn.","Mời mọi người nhìn về phía trước."],
 ["孩子们[向]门口跑去。","Háizimen xiàng ménkǒu pǎoqu.","Bọn trẻ chạy về phía cửa."]],
errs:[
 {bad:"你向看西边。", good:"你向西边看。", why:"向 + hướng rồi mới đến động từ."},
 {bad:"他走去向图书馆了。", good:"他向图书馆走去了。", why:"Cụm 向 trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy đi về phía thư viện.", o:["他向图书馆走去了。","他走去向图书馆了。","向他图书馆走去了。"], a:0, why:"向 + nơi + V."},
  {q:"Mời mọi người nhìn về phía trước.", o:["请大家看向前。","请大家向前看。","请向前大家看。"], a:1, why:"向前 + 看."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","向","西边","看"], a:"你向西边看。", vi:"Bạn nhìn về phía tây."},
  {w:["他","向","我","走来"], a:"他向我走来。", vi:"Anh ấy đi về phía tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bọn trẻ chạy về phía cửa.", a:"孩子们向门口跑去。"},
  {q:"Nhìn về bên phải.", a:"向右看。"}]}],
rel:["二22","三24","二50","二24"]
};
