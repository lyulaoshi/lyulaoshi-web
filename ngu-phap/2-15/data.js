// Bài ngữ pháp 【二15】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二15", title:"时间副词：刚、刚刚、还、忽然、一直、已经", vi:"Phó từ thời gian — vừa mới, vẫn còn, bỗng nhiên, luôn, đã", tag:"词类 · 副词",
goals:[
 "Dùng <b>刚 / 刚刚</b> (vừa mới), <b>已经……了</b> (đã … rồi).",
 "Dùng <b>还²</b> (vẫn còn), <b>一直</b> (suốt, luôn luôn), <b>忽然</b> (bỗng nhiên).",
 "Đặt tất cả <b>trước động từ</b>; 刚 không đi với 了 cuối câu."],
intro:"Sáu phó từ thời gian HSK 2, vị trí chung: <b>sau chủ ngữ, trước động từ / tính từ</b>.",
rules:[
 {t:"刚 / 刚刚: vừa mới", sub:"刚 · 刚刚", fx:[["Chủ ngữ",""],["刚 / 刚刚",null],["Động từ",""]], mean:"Việc xảy ra cách đây rất ngắn.",
  ex:[["我[刚]从学校回到家。","Wǒ gāng cóng xuéxiào huídào jiā.","Tôi vừa từ trường về đến nhà.","等级标准"],
      ["白老师[刚刚]从国外回来。","Bái lǎoshī gānggāng cóng guówài huílai.","Thầy Bạch vừa mới từ nước ngoài về.","等级标准"]]},
 {t:"还: vẫn còn", sub:"还²", fx:[["Chủ ngữ",""],["还",null],["(在) V / Adj",""],["(呢)",""]], mean:"Trạng thái, hành động vẫn tiếp tục.",
  ex:[["外边[还]在下雨呢。","Wàibian hái zài xià yǔ ne.","Bên ngoài vẫn đang mưa.","等级标准"]]},
 {t:"忽然 · 一直", sub:"忽然 · 一直", fx:[["忽然 / 一直",null],["Động từ",""]], mean:"忽然 bỗng nhiên (bất ngờ) · 一直 suốt, liên tục, luôn luôn.",
  ex:[["街上的灯[忽然]都亮了。","Jiē shang de dēng hūrán dōu liàng le.","Đèn trên phố bỗng nhiên sáng hết.","等级标准"],
      ["她[一直]在说话。","Tā yìzhí zài shuō huà.","Cô ấy nói suốt.","等级标准"]]},
 {t:"已经……了: đã … rồi", sub:"已经", fx:[["Chủ ngữ",""],["已经",null],["Động từ / Adj",""],["了",null]], mean:"Thường có 了 cuối câu.",
  ex:[["校长[已经]下班[了]。","Xiàozhǎng yǐjīng xià bān le.","Hiệu trưởng đã tan làm rồi.","等级标准"]]}],
notes:[
 {t:"刚 + thời lượng", html:"<span class='zh'>我刚来了两天。</span> <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=893338cb#sai'/></svg> → <span class='zh'>我刚来两天。</span> (vừa đến được hai ngày) — câu có 刚 thường không có 了 cuối."}],
cmp:[
 {vn:"Tôi vừa về đến nhà.", zh:"我[刚]回到家。", py:"Wǒ gāng huídào jiā.", ok:true, why:"“vừa” = 刚 trước động từ."},
 {vn:"Anh ấy đã đi rồi.", zh:"他[已经]走[了]。", py:"Tā yǐjīng zǒu le.", ok:true, why:"“đã … rồi” = 已经……了."},
 {vn:"Trời vẫn còn mưa.", zh:"[还]在下雨。", py:"Hái zài xià yǔ.", ok:true, why:"“vẫn còn” = 还."}],
ex:[
 ["我[刚]吃完饭。","Wǒ gāng chīwán fàn.","Tôi vừa ăn xong."],
 ["十一点了，他[还]没睡觉。","Shíyī diǎn le, tā hái méi shuì jiào.","11 giờ rồi, anh ấy vẫn chưa ngủ."],
 ["我[一直]想去中国。","Wǒ yìzhí xiǎng qù Zhōngguó.","Tôi luôn muốn đi Trung Quốc."],
 ["他[忽然]哭了。","Tā hūrán kū le.","Anh ấy bỗng nhiên khóc."],
 ["电影[已经]开始[了]。","Diànyǐng yǐjīng kāishǐ le.","Phim đã bắt đầu rồi."]],
errs:[
 {bad:"我回家刚。", good:"我刚回家。", why:"刚 trước động từ."},
 {bad:"我刚吃完饭了。", good:"我刚吃完饭。", why:"Câu có 刚 thường bỏ 了 cuối."},
 {bad:"他已经走。", good:"他已经走了。", why:"已经 thường đi với 了."},
 {bad:"他还不睡觉。（ý: vẫn chưa ngủ）", good:"他还没睡觉。", why:"“vẫn chưa” = 还没."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我＿＿从学校回来，很累。(vừa)", vi:"Tôi ＿＿ ở trường về, rất mệt.", o:["刚","已经","一直"], a:0, why:"Vừa mới → 刚."},
  {q:"外边＿＿在下雨呢。(vẫn)", vi:"Bên ngoài ＿＿ đang mưa.", o:["刚","还","忽然"], a:1, why:"Vẫn → 还."},
  {q:"电影＿＿开始了。(đã)", vi:"Phim ＿＿ bắt đầu rồi.", o:["已经","还","刚刚"], a:0, why:"已经……了."},
  {q:"她＿＿在说话，不停。(suốt)", vi:"Cô ấy ＿＿ nói, không ngừng.", o:["忽然","一直","刚"], a:1, why:"Liên tục → 一直."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["校长","已经","下班","了"], a:"校长已经下班了。", vi:"Hiệu trưởng đã tan làm rồi."},
  {w:["外边","还","在","下雨","呢"], a:"外边还在下雨呢。", vi:"Bên ngoài vẫn đang mưa."},
  {w:["我","刚","从","学校","回到家"], a:"我刚从学校回到家。", vi:"Tôi vừa từ trường về đến nhà."}]},
 {t:"C. Sửa câu sai", sub:"tự sửa rồi xem đáp án", type:"show", items:[
  {q:"我刚吃完饭了。", vi:"(ý: Tôi vừa ăn cơm xong.)", bad:true, a:"我刚吃完饭。"},
  {q:"他还不起床。(ý: vẫn chưa dậy)", vi:"(ý: Anh ấy vẫn chưa dậy.)", bad:true, a:"他还没起床。"},
  {q:"我一直想中国去。", vi:"(ý: Tôi luôn muốn đi Trung Quốc.)", bad:true, a:"我一直想去中国。"}]}],
rel:["一11","三14","二16","一40"]
};
