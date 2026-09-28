// Bài ngữ pháp 【三14】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三14", title:"时间副词：本来、才、曾经、从来、赶紧、赶快、立刻、连忙、始终、已、早已", vi:"Phó từ thời gian HSK 3 — vốn dĩ, mới, từng, xưa nay, lập tức…", tag:"词类 · 副词",
goals:[
 "Dùng <b>本来</b> (vốn dĩ), <b>曾经</b> (từng), <b>从来</b> (xưa nay, + 不 / 没).",
 "Dùng <b>赶紧、赶快、立刻、连忙</b> (vội, ngay lập tức).",
 "Dùng <b>才²</b> (vừa mới), <b>始终</b> (trước sau), <b>已 / 早已</b> (đã / từ lâu đã)."],
intro:"11 phó từ thời gian, đều đứng <b>sau chủ ngữ, trước động từ</b> (本来 có thể đứng đầu câu).",
rules:[
 {t:"本来 · 曾经 · 从来", sub:"quá khứ", fx:[["本来 / 曾经 / 从来(不·没)",null],["Động từ",""]], mean:"本来 vốn dĩ (giờ đã khác) · 曾经 đã từng · 从来 + 不 / 没 xưa nay chưa từng.",
  ex:[["会议[本来]在星期一举行，但是现在改时间了。","Huìyì běnlái zài xīngqīyī jǔxíng, dànshì xiànzài gǎi shíjiān le.","Cuộc họp vốn tổ chức thứ Hai, nhưng giờ đã đổi giờ.","等级标准"],
      ["我[曾经]学过一年中文。","Wǒ céngjīng xué guo yì nián Zhōngwén.","Tôi từng học tiếng Trung một năm.","等级标准"],
      ["他[从来]不喝酒。","Tā cónglái bù hē jiǔ.","Anh ấy xưa nay không uống rượu.","等级标准"]]},
 {t:"赶紧 · 赶快 · 立刻 · 连忙", sub:"ngay, vội", fx:[["赶紧 / 赶快 / 立刻 / 连忙",null],["Động từ",""]], mean:"赶快 hay dùng trong câu cầu khiến; 连忙 chỉ dùng kể việc đã xảy ra.",
  ex:[["听到这个消息，他[赶紧]跑回家去了。","Tīngdào zhège xiāoxi, tā gǎnjǐn pǎo huí jiā qu le.","Nghe tin này, anh ấy vội chạy về nhà.","等级标准"],
      ["他很不舒服，我们要[赶快]送他去医院。","Tā hěn bù shūfu, wǒmen yào gǎnkuài sòng tā qù yīyuàn.","Anh ấy rất khó chịu, chúng ta phải mau đưa anh ấy đi viện.","等级标准"],
      ["经理来电话，叫我[立刻]去她的办公室。","Jīnglǐ lái diànhuà, jiào wǒ lìkè qù tā de bàngōngshì.","Giám đốc gọi điện, bảo tôi lập tức đến văn phòng bà ấy.","等级标准"],
      ["看到一位老人上车，我[连忙]站起来让他坐。","Kàndào yí wèi lǎorén shàng chē, wǒ liánmáng zhàn qǐlai ràng tā zuò.","Thấy một cụ già lên xe, tôi vội đứng dậy nhường chỗ.","等级标准"]]},
 {t:"才² · 始终 · 已 · 早已", sub:"khác", fx:[["才 / 始终 / 已 / 早已",null],["Động từ",""]], mean:"才² vừa mới · 始终 trước sau như một · 已 = 已经 (văn viết) · 早已 từ lâu đã.",
  ex:[["他[才]起床，让我们等一下儿。","Tā cái qǐ chuáng, ràng wǒmen děng yíxiàr.","Anh ấy vừa mới dậy, bảo chúng ta đợi chút.","等级标准"],
      ["她在中国留学的时候，[始终]坚持每天说中文。","Tā zài Zhōngguó liúxué de shíhou, shǐzhōng jiānchí měi tiān shuō Zhōngwén.","Khi du học ở Trung Quốc, cô ấy trước sau vẫn kiên trì nói tiếng Trung mỗi ngày.","等级标准"],
      ["他[早已]离开北京了。","Tā zǎoyǐ líkāi Běijīng le.","Anh ấy đã rời Bắc Kinh từ lâu rồi.","等级标准"]]}],
cmp:[
 {vn:"Tôi chưa bao giờ đi Bắc Kinh.", zh:"我[从来]没去过北京。", py:"Wǒ cónglái méi qù guo Běijīng.", ok:true, why:"“chưa bao giờ” = 从来没 + V过."},
 {vn:"Mau lên!", zh:"[赶快]走吧！", py:"Gǎnkuài zǒu ba!", ok:true, why:"Câu giục dùng 赶快."}],
ex:[
 ["我[曾经]在北京住过两年。","Wǒ céngjīng zài Běijīng zhù guo liǎng nián.","Tôi từng sống ở Bắc Kinh hai năm."],
 ["[本来]我想去，后来没时间了。","Běnlái wǒ xiǎng qù, hòulái méi shíjiān le.","Lúc đầu tôi định đi, sau lại không có thời gian."],
 ["快迟到了，[赶快]走吧！","Kuài chídào le, gǎnkuài zǒu ba!","Sắp muộn rồi, mau đi thôi!"]],
errs:[
 {bad:"他从来喝酒。（ý: chưa bao giờ）", good:"他从来不喝酒。", why:"从来 thường đi với 不 / 没."},
 {bad:"你连忙走吧！", good:"你赶快走吧！", why:"连忙 chỉ kể việc đã xảy ra, không dùng để giục."},
 {bad:"我曾经学了一年中文。", good:"我曾经学过一年中文。", why:"曾经 thường đi với 过."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他＿＿不喝酒。(xưa nay)", vi:"Anh ấy ＿＿ không uống rượu.", o:["从来","连忙","赶快"], a:0, why:"从来不."},
  {q:"快迟到了，＿＿走吧！", vi:"Sắp muộn rồi, ＿＿ đi thôi!", o:["连忙","赶快","曾经"], a:1, why:"Giục → 赶快."},
  {q:"我＿＿学过中文。(từng)", vi:"Tôi ＿＿ học tiếng Trung.", o:["曾经","始终","立刻"], a:0, why:"曾经 + V过."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","早已","离开","北京","了"], a:"他早已离开北京了。", vi:"Anh ấy đã rời Bắc Kinh từ lâu rồi."},
  {w:["我","连忙","站起来","让他坐"], a:"我连忙站起来让他坐。", vi:"Tôi vội đứng dậy nhường chỗ cho ông ấy."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi chưa bao giờ đi Bắc Kinh.", a:"我从来没去过北京。"},
  {q:"Tôi từng sống ở Bắc Kinh hai năm.", a:"我曾经在北京住过两年。"}]}],
rel:["二15","二20","二32","一11"]
};
