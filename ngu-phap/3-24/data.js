// Bài ngữ pháp 【三24】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三24", title:"介词：向", vi:"Giới từ 向² — với, đối với (người): 向老师学习", tag:"词类 · 介词 · 引出对象",
goals:[
 "Dùng <b>向 + người + động từ</b>: học hỏi, xin, hỏi, giới thiệu… <b>với</b> ai.",
 "Hay gặp: 向……学习 / 请假 / 介绍 / 表示感谢.",
 "Phân biệt với 向¹ chỉ hướng 【二23】."],
intro:"向² dẫn ra <b>người mà hành động hướng tới</b> (học từ ai, xin phép ai, cảm ơn ai…).",
rules:[
 {t:"向 + người + V", sub:"向²", fx:[["(S)",""],["向",null],["người",""],["学习 / 请假 / 介绍…",""]], mean:"",
  ex:[["我们要[向]班长学习。","Wǒmen yào xiàng bānzhǎng xuéxí.","Chúng ta phải học tập lớp trưởng.","等级标准"],
      ["如果不能来上课，你要[向]老师请假。","Rúguǒ bù néng lái shàng kè, nǐ yào xiàng lǎoshī qǐng jià.","Nếu không đến lớp được, em phải xin phép thầy cô.","等级标准"]]}],
cmp:[
 {vn:"Tôi xin phép thầy nghỉ.", zh:"我[向老师]请假。", py:"Wǒ xiàng lǎoshī qǐng jià.", ok:true, why:"“xin phép thầy” → 向老师 + 请假."}],
ex:[
 ["我[向]大家介绍一下儿。","Wǒ xiàng dàjiā jièshào yíxiàr.","Tôi xin giới thiệu với mọi người."],
 ["他[向]我表示感谢。","Tā xiàng wǒ biǎoshì gǎnxiè.","Anh ấy bày tỏ lời cảm ơn với tôi."]],
errs:[
 {bad:"我请假向老师。", good:"我向老师请假。", why:"Cụm 向 trước động từ."},
 {bad:"我们要学习向班长。", good:"我们要向班长学习。", why:"Cụm 向 trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chúng ta phải học tập lớp trưởng.", o:["我们要学习向班长。","我们要向班长学习。"], a:1, why:"向 + người + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","要","向","老师","请假"], a:"你要向老师请假。", vi:"Em phải xin phép thầy cô."},
  {w:["我","向","大家","介绍","一下儿"], a:"我向大家介绍一下儿。", vi:"Tôi xin giới thiệu với mọi người."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Anh ấy bày tỏ lời cảm ơn với tôi.", a:"他向我表示感谢。"}]}],
rel:["二23","三22","二25","三23"]
};
