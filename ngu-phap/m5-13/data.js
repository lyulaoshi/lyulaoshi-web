// Bài ngữ pháp 【新5.13】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.13", title:"介词：朝、沿（着）", vi:"朝, 沿着 — hướng về, dọc theo", tag:"词类 · 介词",
goals:[
 "Dùng <b>朝</b>: quay / đi về phía.",
 "Dùng <b>沿（着）</b>: men theo, dọc theo.",
 "Đặt cụm giới từ trước động từ."],
intro:"<b>朝</b> chỉ <b>hướng</b>, <b>沿着</b> chỉ <b>đường đi dọc theo</b> sông, đường, tường.",
rules:[
 {t:"朝 + hướng / người + V", sub:"（1）朝", fx:[["S",""],["朝",null],["hướng / người",""],["V",""]], mean:"Về phía.",
  ex:[["{1|他}{2|朝}{3|我}{4|点了点头}。","Tā cháo wǒ diǎnle diǎn tóu.","Anh ấy gật đầu với tôi."],
      ["{1|窗户}{2|朝}{3|南}{4|开}。","Chuānghu cháo nán kāi.","Cửa sổ mở về hướng nam."]]},
 {t:"沿(着) + con đường + V", sub:"（2）沿（着）", fx:[["S",""],["沿着",null],["đường, sông…",""],["V",""]], mean:"Men theo.",
  ex:[["{1|我们}{2|沿着}{3|河边}{4|散步}。","Wǒmen yánzhe hébiān sànbù.","Chúng tôi đi dạo dọc bờ sông."],
      ["{1|你}{2|沿着}{3|这条路}{4|一直走}。","Nǐ yánzhe zhè tiáo lù yìzhí zǒu.","Bạn đi thẳng theo con đường này."]]}],
cmp:[
 {vn:"Đi dọc theo đường này là đến.", zh:"[沿着]这条路走就到了。", py:"Yánzhe zhè tiáo lù zǒu jiù dào le.", ok:true, why:"沿着 + đường + 走."}],
ex:[
 ["孩子笑着[朝]妈妈跑去。","Háizi xiàozhe cháo māma pǎoqu.","Đứa bé cười chạy về phía mẹ."],
 ["车[沿着]海边开了一个小时。","Chē yánzhe hǎibiān kāile yí gè xiǎoshí.","Xe chạy dọc bờ biển một tiếng."],
 ["[沿]墙放着一排椅子。","Yán qiáng fàngzhe yì pái yǐzi.","Dọc tường kê một dãy ghế."]],
errs:[
 {bad:"他点头朝我。", good:"他朝我点头。", why:"Cụm giới từ đứng trước động từ."},
 {bad:"沿着南开。（muốn nói mở hướng nam）", good:"朝南开。", why:"Chỉ hướng dùng 朝."},
 {bad:"我们朝着河边散步。（muốn nói đi dọc sông）", good:"我们沿着河边散步。", why:"Dọc theo → 沿着."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他＿我笑了笑。", vi:"Anh ấy cười với tôi.", o:["朝","沿着","凭"], a:0, why:"Hướng về người → 朝."},
  {q:"＿这条街一直走，就能看见银行。", vi:"Đi thẳng theo phố này sẽ thấy ngân hàng.", o:["沿着","朝着南","替"], a:0, why:"Dọc theo."},
  {q:"我家大门＿东。", vi:"Cổng nhà tôi hướng đông.", o:["朝","沿","同"], a:0, why:"Hướng → 朝."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","沿着","河边","散步"], a:"我们沿着河边散步。", vi:"Chúng tôi đi dạo dọc bờ sông."},
  {w:["他","朝","我","点了点头"], a:"他朝我点了点头。", vi:"Anh ấy gật đầu với tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bạn đi thẳng theo con đường này.", a:"你沿着这条路一直走。/ 你沿这条路一直走。"}]}],
rel:["三22","二23","二22"]
};
