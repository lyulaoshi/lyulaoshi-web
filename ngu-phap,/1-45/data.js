// Bài ngữ pháp 【一45】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一45", title:"用“吗”提问", vi:"Hỏi bằng 吗 — câu hỏi có / không", tag:"提问的方法",
goals:[
 "Biến câu trần thuật thành câu hỏi bằng cách thêm <b>吗</b> cuối câu.",
 "Trả lời ngắn đúng: lặp lại <b>động từ / tính từ</b>, hoặc 是 / 不是, 对 / 不对.",
 "Không dùng 吗 cùng từ để hỏi, 还是, V 不 V."],
intro:"Cách hỏi đơn giản nhất: giữ nguyên câu trần thuật, thêm <b>吗</b> vào cuối. Giống “… à?”, “… không?” của tiếng Việt.",
rules:[
 {t:"Câu trần thuật + 吗？", sub:"是非问", fx:[["Câu trần thuật",""],["吗",null],["？",""]], mean:"Không đổi trật tự từ.",
  ex:[["他是老师[吗]？","Tā shì lǎoshī ma?","Anh ấy là giáo viên à?","等级标准"],
      ["这包子好吃[吗]？","Zhè bāozi hǎochī ma?","Bánh bao này có ngon không?","等级标准"]]},
 {t:"Trả lời ngắn", sub:"回答", fx:[["Lặp lại V / Adj",null],["hoặc",""],["不 / 没 + V / Adj",null]], mean:"Tiếng Trung ít dùng “có / vâng” chung chung; lặp lại động từ hoặc tính từ trong câu hỏi.",
  ex:[["你喜欢中文吗？——[喜欢]。/ [不喜欢]。","Nǐ xǐhuan Zhōngwén ma? —— Xǐhuan. / Bù xǐhuan.","Bạn thích tiếng Trung không? — Thích. / Không thích."],
      ["你是学生吗？——[是]。/ [不是]。","Nǐ shì xuésheng ma? —— Shì. / Bú shì.","Bạn là học sinh à? — Vâng. / Không phải."]]}],
notes:[
 {t:"Câu phủ định + 吗", html:"<span class='zh'>你不去吗？</span> = Bạn không đi à? (ngạc nhiên)."}],
cmp:[
 {vn:"Bạn là học sinh à?", zh:"你是学生[吗]？", py:"Nǐ shì xuésheng ma?", ok:true, why:"“à” cuối câu → 吗."},
 {vn:"Bạn có đi không? — Có.", zh:"你去吗？——[去]。", py:"Nǐ qù ma? —— Qù.", ok:true, why:"Trả lời bằng chính động từ 去."}],
ex:[
 ["你忙[吗]？","Nǐ máng ma?","Bạn có bận không?"],
 ["你有中文书[吗]？——有。","Nǐ yǒu Zhōngwén shū ma? —— Yǒu.","Bạn có sách tiếng Trung không? — Có."],
 ["你会说英语[吗]？——不会。","Nǐ huì shuō Yīngyǔ ma? —— Bú huì.","Bạn biết nói tiếng Anh không? — Không biết."],
 ["明天你来[吗]？","Míngtiān nǐ lái ma?","Mai bạn đến không?"]],
errs:[
 {bad:"你去哪儿吗？", good:"你去哪儿？", why:"Có từ để hỏi không dùng 吗."},
 {bad:"你去不去吗？", good:"你去不去？/ 你去吗？", why:"V不V không dùng 吗."},
 {bad:"吗你是学生？", good:"你是学生吗？", why:"吗 ở cuối câu."},
 {bad:"你很忙吗？", good:"你忙吗？", why:"Câu hỏi với tính từ thường bỏ 很."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn là học sinh à?", o:["吗你是学生？","你是学生吗？","你吗是学生？"], a:1, why:"Câu + 吗."},
  {q:"Bạn đi đâu?", o:["你去哪儿吗？","你去哪儿？","你吗去哪儿？"], a:1, why:"Không dùng 吗."},
  {q:"— 你喜欢喝茶吗？ — (Thích.)", vi:"— Bạn thích uống trà không? — (Thích.)", o:["是。","喜欢。","对喜欢。"], a:1, why:"Lặp lại động từ."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","是","老师","吗"], a:"他是老师吗？", vi:"Anh ấy là giáo viên à?"},
  {w:["这","包子","好吃","吗"], a:"这包子好吃吗？", vi:"Bánh bao này có ngon không?"},
  {w:["你","会","说","英语","吗"], a:"你会说英语吗？", vi:"Bạn biết nói tiếng Anh không?"}]},
 {t:"C. Đặt câu hỏi với 吗 rồi trả lời phủ định", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"他是中国人。", vi:"Anh ấy là người Trung Quốc.", a:"他是中国人吗？——不是。"},
  {q:"你有哥哥。", vi:"Bạn có anh trai.", a:"你有哥哥吗？——没有。"},
  {q:"今天冷。", vi:"Hôm nay lạnh.", a:"今天冷吗？——不冷。"}]}],
rel:["一33","一22","一48","二78","二79"]
};
