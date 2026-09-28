// Bài ngữ pháp 【三09】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三09", title:"名量词：把、行、架、群、束、双、台、张、支、只、种", vi:"Lượng từ danh từ HSK 3 — 把, 张, 双, 只, 种…", tag:"词类 · 量词",
goals:[
 "Nhớ 11 lượng từ HSK 3 và danh từ đi kèm.",
 "Chọn lượng từ theo <b>hình dạng / loại</b> của vật.",
 "Dùng đúng trật tự <b>số + lượng từ + danh từ</b>."],
intro:"Mỗi lượng từ gợi hình dạng của vật: 张 phẳng, 支 thon dài, 双 một đôi, 把 có tay cầm…",
rules:[
 {t:"11 lượng từ và danh từ đi kèm", sub:"名量词", fx:[["Số",""],["把 / 行 / 架 / 群 / 束 / 双…",null],["Danh từ",""]], mean:"<b>把</b> vật có tay cầm (椅子、伞) · <b>行</b> hàng (字) · <b>架</b> máy bay · <b>群</b> đàn, nhóm · <b>束</b> bó (花) · <b>双</b> đôi (鞋) · <b>台</b> máy (电脑、电视) · <b>张</b> vật phẳng (桌子、纸、票) · <b>支</b> vật thon (笔) · <b>只</b> con vật · <b>种</b> loại",
  ex:[["一[把]椅子　两[行]汉字　一[架]飞机","yì bǎ yǐzi　liǎng háng Hànzì　yí jià fēijī","một cái ghế　hai hàng chữ Hán　một chiếc máy bay","等级标准"],
      ["一[群]学生　两[束]花　一[双]球鞋","yì qún xuésheng　liǎng shù huā　yì shuāng qiúxié","một nhóm học sinh　hai bó hoa　một đôi giày thể thao","等级标准"],
      ["两[台]电脑　一[张]桌子　一[支]笔","liǎng tái diànnǎo　yì zhāng zhuōzi　yì zhī bǐ","hai cái máy tính　một cái bàn　một cây bút","等级标准"],
      ["三[只]鸡　两[种]颜色","sān zhī jī　liǎng zhǒng yánsè","ba con gà　hai màu","等级标准"]]}],
cmp:[
 {vn:"một vé", zh:"一[张]票", py:"yì zhāng piào", ok:true, why:"Tiếng Việt “một cái vé”; vé là vật phẳng → 张."},
 {vn:"một đôi đũa", zh:"一[双]筷子", py:"yì shuāng kuàizi", ok:true, why:"“đôi” = 双."}],
ex:[
 ["我买了两[张]电影票。","Wǒ mǎi le liǎng zhāng diànyǐng piào.","Tôi mua hai vé xem phim."],
 ["他送了我一[束]花。","Tā sòng le wǒ yí shù huā.","Anh ấy tặng tôi một bó hoa."],
 ["我家有一[只]猫。","Wǒ jiā yǒu yì zhī māo.","Nhà tôi có một con mèo."]],
errs:[
 {bad:"一个笔", good:"一支笔", why:"Bút dùng 支."},
 {bad:"一个票", good:"一张票", why:"Vé dùng 张."},
 {bad:"一对鞋（ý thông thường）", good:"一双鞋", why:"Giày, tất, đũa dùng 双."}],
practice:[
 {t:"A. Chọn lượng từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"一＿＿椅子", vi:"một ＿＿ ghế", o:["把","张","支"], a:0, why:"Ghế có tay tựa → 把."},
  {q:"两＿＿电影票", vi:"hai ＿＿ vé xem phim", o:["支","张","台"], a:1, why:"Vật phẳng → 张."},
  {q:"一＿＿球鞋", vi:"một ＿＿ giày thể thao", o:["双","只","群"], a:0, why:"Đôi → 双."},
  {q:"三＿＿鸡", vi:"ba ＿＿ gà", o:["只","把","种"], a:0, why:"Con vật → 只."},
  {q:"两＿＿电脑", vi:"hai ＿＿ máy tính", o:["架","台","张"], a:1, why:"Máy → 台."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","买了","两张","电影票"], a:"我买了两张电影票。", vi:"Tôi mua hai vé xem phim."},
  {w:["他","送了","我","一束","花"], a:"他送了我一束花。", vi:"Anh ấy tặng tôi một bó hoa."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"một cây bút", a:"一支笔"},
  {q:"một nhóm học sinh", a:"一群学生"},
  {q:"một chiếc máy bay", a:"一架飞机"}]}],
rel:["一08","二10","三10","三11"]
};
