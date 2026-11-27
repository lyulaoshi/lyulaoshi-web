// Bài ngữ pháp 【新4.23】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.23", title:"四字格：一A一B、无A无B、有A有B", vi:"Cụm bốn chữ 一A一B, 无A无B, 有A有B", tag:"短语 · 固定短语",
goals:[
 "Hiểu và dùng khung <b>一A一B</b>: từng …, hoặc một … một …",
 "Dùng <b>无A无B</b>: không … không …",
 "Dùng <b>有A有B</b>: có … có …, vừa … vừa …"],
intro:"Đây là các “khuôn bốn chữ”: giữ nguyên chữ khung (一, 无, 有), điền A và B là hai chữ <b>gần nghĩa hoặc trái nghĩa</b>.",
rules:[
 {t:"一 + A + 一 + B", sub:"（1）", fx:[["一",null],["A",""],["一",null],["B",""]], mean:"一问一答 (hỏi đáp qua lại) · 一模一样 (giống hệt) · 一心一意 (một lòng một dạ).",
  ex:[["这两件衣服{1|一}{2|模}{3|一}{4|样}。","Zhè liǎng jiàn yīfu yìmú-yíyàng.","Hai chiếc áo này giống hệt nhau."],
      ["孩子们{1|一}{2|问}{3|一}{4|答}，很有意思。","Háizimen yí wèn yì dá, hěn yǒu yìsi.","Bọn trẻ hỏi đáp qua lại, rất thú vị."]]},
 {t:"无 + A + 无 + B", sub:"（2）", fx:[["无",null],["A",""],["无",null],["B",""]], mean:"无忧无虑 (vô tư lự) · 无边无际 (mênh mông) · 无亲无友 (không người thân thích).",
  ex:[["小时候的生活{1|无}{2|忧}{3|无}{4|虑}。","Xiǎoshíhou de shēnghuó wúyōu-wúlǜ.","Cuộc sống hồi nhỏ vô tư vô lự."]]},
 {t:"有 + A + 有 + B", sub:"（3）", fx:[["有",null],["A",""],["有",null],["B",""]], mean:"有说有笑 (cười cười nói nói) · 有山有水 (có núi có sông) · 有吃有喝 (có ăn có uống).",
  ex:[["他们{1|有}{2|说}{3|有}{4|笑}地走了进来。","Tāmen yǒushuō-yǒuxiào de zǒule jìnlai.","Họ cười cười nói nói đi vào."]]}],
cmp:[
 {vn:"Quê tôi có núi có sông.", zh:"我的家乡[有]山[有]水。", py:"Wǒ de jiāxiāng yǒu shān yǒu shuǐ.", ok:true, why:"Giống tiếng Việt “có … có …”."}],
ex:[
 ["他做什么事都[一]心[一]意。","Tā zuò shénme shì dōu yìxīn-yíyì.","Anh ấy làm việc gì cũng một lòng một dạ."],
 ["大海[无]边[无]际。","Dàhǎi wúbiān-wújì.","Biển cả mênh mông không bờ bến."],
 ["晚会上大家[有]唱[有]跳。","Wǎnhuì shang dàjiā yǒu chàng yǒu tiào.","Trong buổi liên hoan mọi người vừa hát vừa nhảy."]],
errs:[
 {bad:"这两件衣服一样一模。", good:"这两件衣服一模一样。", why:"Thành ngữ bốn chữ cố định, không đảo chữ."},
 {bad:"他们有说和笑。", good:"他们有说有笑。", why:"Không chen 和; lặp chữ khung 有."},
 {bad:"两个孩子很一模一样。", good:"两个孩子长得一模一样。", why:"一模一样 đã là mức tuyệt đối, không thêm 很."}],
practice:[
 {t:"A. Chọn đáp án", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这对姐妹长得一模一＿。", vi:"Hai chị em này trông giống hệt nhau.", o:["样","个","种"], a:0, why:"一模一样."},
  {q:"Vô tư vô lự là:", o:["无忧无虑","有忧有虑","一忧一虑"], a:0, why:"无 = không."},
  {q:"同学们有说有＿。", vi:"Các bạn học cười cười nói nói.", o:["哭","笑","看"], a:1, why:"有说有笑."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","做什么事","都","一心一意"], a:"他做什么事都一心一意。", vi:"Anh ấy làm việc gì cũng một lòng một dạ."},
  {w:["我的家乡","有山","有水，","很","漂亮"], a:"我的家乡有山有水，很漂亮。", vi:"Quê tôi có núi có sông, rất đẹp."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hai chiếc áo này giống hệt nhau.", a:"这两件衣服一模一样。"},
  {q:"Họ cười cười nói nói đi vào.", a:"他们有说有笑地走了进来。/ 他们有说有笑地走进来了。"}]}],
rel:["三34","三41","三63"]
};
