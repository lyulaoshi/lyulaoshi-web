// Bài ngữ pháp 【一38】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一38", title:"比较句1", vi:"Câu so sánh 1 — A 比 B + Adj · A 没有 B + Adj", tag:"句子的类型 · 特殊句型",
goals:[
 "So sánh hơn: <b>A 比 B + tính từ</b>.",
 "So sánh kém / phủ định: <b>A 没有 B + tính từ</b> (A không … bằng B).",
 "Không dùng 很 / 非常 trong câu so sánh; không dùng 不比 thay cho 没有."],
intro:"Đề cương HSK 1 có hai khung so sánh. Cả hai đều đặt <b>B trước tính từ</b>, ngược với “A cao <b>hơn B</b>”, “A không cao <b>bằng B</b>”.",
rules:[
 {t:"A 比 B + tính từ", sub:"A比B＋形容词", fx:[["A",""],["比",null],["B",""],["Tính từ",""]], mean:"A … hơn B.",
  ex:[["我朋友[比]我高。","Wǒ péngyou bǐ wǒ gāo.","Bạn tôi cao hơn tôi.","等级标准"],
      ["这个手机[比]那个贵。","Zhège shǒujī bǐ nàge guì.","Cái điện thoại này đắt hơn cái kia.","等级标准"]]},
 {t:"A 没有 B + tính từ", sub:"A没有B＋形容词", fx:[["A",""],["没有",null],["B",""],["Tính từ",""]], mean:"A không … bằng B (= B … hơn A).",
  ex:[["昨天[没有]今天热。","Zuótiān méiyǒu jīntiān rè.","Hôm qua không nóng bằng hôm nay.","等级标准"],
      ["这个书包[没有]那个好看。","Zhège shūbāo méiyǒu nàge hǎokàn.","Cái cặp này không đẹp bằng cái kia.","等级标准"]]}],
notes:[
 {t:"Không dùng 很", html:"✗ <span class='zh'>我朋友比我很高。</span>"},
 {t:"没有 hay 不比?", html:"Phủ định thông thường dùng <b>没有</b>. <span class='zh'>不比</span> mang ý “không hơn” (bằng nhau hoặc kém), dùng ở cấp cao hơn 【三58】."}],
cmp:[
 {vn:"Bạn tôi cao hơn tôi.", zh:"我朋友[比我]高。", py:"Wǒ péngyou bǐ wǒ gāo.", ok:true, why:"“hơn tôi” → 比我, đứng trước 高."},
 {vn:"Hôm qua không nóng bằng hôm nay.", zh:"昨天[没有今天]热。", py:"Zuótiān méiyǒu jīntiān rè.", ok:true, why:"“bằng hôm nay” → 没有今天, đứng trước 热."}],
ex:[
 ["坐地铁[比]坐公交车快。","Zuò dìtiě bǐ zuò gōngjiāochē kuài.","Đi tàu điện ngầm nhanh hơn đi xe buýt."],
 ["我的中文[没有]他好。","Wǒ de Zhōngwén méiyǒu tā hǎo.","Tiếng Trung của tôi không giỏi bằng anh ấy."],
 ["今天[比]昨天冷。","Jīntiān bǐ zuótiān lěng.","Hôm nay lạnh hơn hôm qua."],
 ["妹妹[没有]姐姐高。","Mèimei méiyǒu jiějie gāo.","Em gái không cao bằng chị."]],
errs:[
 {bad:"我朋友高比我。", good:"我朋友比我高。", why:"比 B đứng trước tính từ."},
 {bad:"我朋友比我很高。", good:"我朋友比我高。", why:"Không dùng 很."},
 {bad:"昨天不比今天热。（ý: không nóng bằng）", good:"昨天没有今天热。", why:"Phủ định so sánh dùng 没有."},
 {bad:"妹妹没有高姐姐。", good:"妹妹没有姐姐高。", why:"没有 + B + tính từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay lạnh hơn hôm qua.", o:["今天冷比昨天。","今天比昨天冷。","今天比昨天很冷。"], a:1, why:"A 比 B + Adj."},
  {q:"Em gái không cao bằng chị.", o:["妹妹没有姐姐高。","妹妹不比姐姐高。","妹妹没有高姐姐。"], a:0, why:"A 没有 B + Adj."},
  {q:"Cái này đắt hơn cái kia.", o:["这个比那个贵。","这个贵比那个。","这个比那个非常贵。"], a:0, why:"Không có 非常."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我朋友","比","我","高"], a:"我朋友比我高。", vi:"Bạn tôi cao hơn tôi."},
  {w:["昨天","没有","今天","热"], a:"昨天没有今天热。", vi:"Hôm qua không nóng bằng hôm nay."},
  {w:["这个","书包","没有","那个","好看"], a:"这个书包没有那个好看。", vi:"Cái cặp này không đẹp bằng cái kia."}]},
 {t:"C. Viết lại bằng 没有", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"哥哥比弟弟高。", a:"弟弟没有哥哥高。"},
  {q:"今天比昨天冷。", a:"昨天没有今天冷。"},
  {q:"他的汉字比我的好看。", a:"我的汉字没有他的好看。"}]}],
rel:["一18","二58","二59","三58"]
};
