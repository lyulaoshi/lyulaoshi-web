// Bài ngữ pháp 【三22】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三22", title:"介词：朝", vi:"Giới từ 朝 — hướng về, quay về phía", tag:"词类 · 介词 · 引出方向、路径",
goals:[
 "Dùng <b>朝 + hướng / người + động từ</b>.",
 "Dùng 朝 cho hướng cửa, nhà (大门朝南开).",
 "Phân biệt nhẹ với 往 / 向 【二22】【二23】."],
intro:"朝 = “hướng về”, gần 向. Hay dùng khi nói <b>mặt / cửa quay về hướng nào</b> hoặc động tác hướng về ai.",
rules:[
 {t:"朝 + hướng / người + V", sub:"朝", fx:[["(S)",""],["朝",null],["hướng / người",""],["Động từ",""]], mean:"",
  ex:[["大门[朝]南开。","Dàmén cháo nán kāi.","Cổng chính quay về hướng Nam.","等级标准"],
      ["他[朝]左边看了一下儿。","Tā cháo zuǒbian kàn le yíxiàr.","Anh ấy nhìn sang bên trái một cái.","等级标准"],
      ["他[朝]我大喊：“小心！”","Tā cháo wǒ dà hǎn: “Xiǎoxīn!”","Anh ấy hét lớn về phía tôi: “Cẩn thận!”","等级标准"]]}],
cmp:[
 {vn:"Anh ấy vẫy tay với tôi.", zh:"他[朝]我挥手。", py:"Tā cháo wǒ huī shǒu.", ok:true, why:"“với tôi” (hướng về tôi) → 朝我 trước động từ."}],
ex:[
 ["我的房间[朝]东。","Wǒ de fángjiān cháo dōng.","Phòng tôi hướng Đông."],
 ["孩子们[朝]老师跑过去。","Háizimen cháo lǎoshī pǎo guoqu.","Bọn trẻ chạy về phía cô giáo."]],
errs:[
 {bad:"他看了一下儿朝左边。", good:"他朝左边看了一下儿。", why:"Cụm 朝 trước động từ."},
 {bad:"大门开朝南。", good:"大门朝南开。", why:"朝 + hướng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cổng chính quay về hướng Nam.", o:["大门开朝南。","大门朝南开。"], a:1, why:"朝 + hướng + V."},
  {q:"Anh ấy nhìn sang bên trái.", o:["他朝左边看。","他看朝左边。"], a:0, why:"朝 + hướng + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["孩子们","朝","老师","跑过去"], a:"孩子们朝老师跑过去。", vi:"Bọn trẻ chạy về phía cô giáo."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Phòng tôi hướng Đông.", a:"我的房间朝东。"},
  {q:"Anh ấy vẫy tay với tôi.", a:"他朝我挥手。/ 他朝我挥挥手。"}]}],
rel:["二22","二23","三24","一01"]
};
