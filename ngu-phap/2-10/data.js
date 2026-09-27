// Bài ngữ pháp 【二10】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二10", title:"名量词：层、封、件、条、位", vi:"Lượng từ danh từ — 层、封、件、条、位", tag:"词类 · 量词",
goals:[
 "Nhớ 5 lượng từ HSK 2 và danh từ đi kèm: <b>层、封、件、条、位</b>.",
 "Dùng <b>位</b> khi nói về người một cách lịch sự.",
 "Dùng <b>件</b> cho áo và cho “việc”, <b>条</b> cho vật dài."],
intro:"Mỗi lượng từ gợi hình dạng hoặc loại của danh từ. Trật tự vẫn là <b>số / 这 / 那 + lượng từ + danh từ</b> 【一08】.",
rules:[
 {t:"5 lượng từ mới", sub:"层、封、件、条、位", fx:[["Số",""],["层 / 封 / 件 / 条 / 位",null],["Danh từ",""]], mean:"<b>层</b> tầng (楼) · <b>封</b> bức, lá (信) · <b>件</b> chiếc áo; việc (衣服、事) · <b>条</b> vật dài (河、路、裤子、鱼) · <b>位</b> vị, người (lịch sự: 老师、客人).",
  ex:[["两[层]楼　一[封]信　一[件]衣服","liǎng céng lóu　yì fēng xìn　yí jiàn yīfu","nhà hai tầng　một bức thư　một chiếc áo","等级标准"],
      ["一[条]河　一[位]老师","yì tiáo hé　yí wèi lǎoshī","một con sông　một vị giáo viên","等级标准"]]}],
notes:[
 {t:"件 cho “việc”", html:"<span class='zh'>一件事</span> = một việc, một chuyện."},
 {t:"位 lịch sự", html:"<span class='zh'>几位？</span> (Mấy vị ạ? — nhân viên nhà hàng hỏi khách). Không dùng 位 cho bản thân."}],
cmp:[
 {vn:"một bức thư", zh:"一[封]信", py:"yì fēng xìn", ok:true, why:"“bức” = 封."},
 {vn:"một cái quần", zh:"一[条]裤子", py:"yì tiáo kùzi", ok:true, why:"Quần dài → 条 (không phải 件)."},
 {vn:"Có mấy người ạ?", zh:"几[位]？", py:"Jǐ wèi?", ok:true, why:"Hỏi khách lịch sự → 位."}],
ex:[
 ["我家住在三[层]。","Wǒ jiā zhù zài sān céng.","Nhà tôi ở tầng ba."],
 ["我给妈妈写了一[封]信。","Wǒ gěi māma xiě le yì fēng xìn.","Tôi viết cho mẹ một bức thư."],
 ["这[件]衣服很好看。","Zhè jiàn yīfu hěn hǎokàn.","Chiếc áo này rất đẹp."],
 ["我想跟你说一[件]事。","Wǒ xiǎng gēn nǐ shuō yí jiàn shì.","Tôi muốn nói với bạn một chuyện."],
 ["这[条]路很长。","Zhè tiáo lù hěn cháng.","Con đường này rất dài."]],
errs:[
 {bad:"一个信", good:"一封信", why:"Thư dùng 封."},
 {bad:"一件裤子", good:"一条裤子", why:"Quần dài dùng 条."},
 {bad:"我是一位老师。", good:"我是一个老师。/ 我是老师。", why:"Không dùng 位 khi nói về mình."},
 {bad:"一条事", good:"一件事", why:"Việc, chuyện dùng 件."}],
practice:[
 {t:"A. Chọn lượng từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"一＿＿信", o:["件","封","条"], a:1, why:"封."},
  {q:"两＿＿楼", o:["层","位","件"], a:0, why:"层."},
  {q:"一＿＿河", o:["条","封","件"], a:0, why:"Vật dài → 条."},
  {q:"一＿＿客人 (lịch sự)", o:["条","位","层"], a:1, why:"位."},
  {q:"一＿＿事", o:["件","条","封"], a:0, why:"件."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","想","跟你","说","一件","事"], a:"我想跟你说一件事。", vi:"Tôi muốn nói với bạn một chuyện."},
  {w:["这条","路","很","长"], a:"这条路很长。", vi:"Con đường này rất dài."},
  {w:["我家","住在","三层"], a:"我家住在三层。", vi:"Nhà tôi ở tầng ba."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"một vị bác sĩ", a:"一位医生"},
  {q:"hai chiếc áo", a:"两件衣服"},
  {q:"Tôi viết cho bạn một bức thư.", a:"我给你写了一封信。"}]}],
rel:["一08","二11","三09","一23"]
};
