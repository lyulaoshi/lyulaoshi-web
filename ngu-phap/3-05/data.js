// Bài ngữ pháp 【三05】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三05", title:"动宾式离合词", vi:"Động từ ly hợp kiểu động – tân (帮忙, 见面, 睡觉…)", tag:"词类 · 动词",
goals:[
 "Nhận biết động từ ly hợp: <b>帮忙、点头、放假、干杯、见面、结婚、看病、睡觉、洗澡、理发、说话</b>.",
 "Chèn <b>了 / 过 / số lượng / tân ngữ phụ</b> vào <b>giữa</b> hai chữ: 帮我的忙, 见过一次面.",
 "Không thêm tân ngữ sau cả từ: <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> 见面他 → <svg class='lli ok' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#tick'/></svg> 跟他见面."],
intro:"Động từ ly hợp gồm <b>động từ + danh từ</b> (帮 + 忙, 见 + 面). Vì phần sau đã là tân ngữ, nên người / số lần phải <b>chen vào giữa</b> hoặc đưa lên trước bằng giới từ.",
rules:[
 {t:"Chèn thành phần vào giữa", sub:"离合", fx:[["V",""],["(了 / 过 / 一下儿 / 的…)",null],["N",""]], mean:"帮 + 我的 + 忙；见 + 过一次 + 面；点 + 了一下儿 + 头.",
  ex:[["他经常帮我的[忙]。","Tā jīngcháng bāng wǒ de máng.","Anh ấy thường giúp tôi.","等级标准"],
      ["他点了一下儿头，表示同意。","Tā diǎn le yíxiàr tóu, biǎoshì tóngyì.","Anh ấy gật đầu một cái, tỏ ý đồng ý.","等级标准"],
      ["来中国以后，我们只见过一次面。","Lái Zhōngguó yǐhòu, wǒmen zhǐ jiàn guo yí cì miàn.","Từ khi sang Trung Quốc, chúng tôi chỉ gặp nhau một lần.","等级标准"],
      ["结了婚以后，她就不工作了。","Jié le hūn yǐhòu, tā jiù bù gōngzuò le.","Sau khi kết hôn, cô ấy không đi làm nữa.","等级标准"]]},
 {t:"Người liên quan dùng giới từ đưa lên trước", sub:"跟 / 给 + người", fx:[["跟 / 给 + người",null],["离合词",""]], mean:"跟他见面 (gặp anh ấy), 跟她结婚 (cưới cô ấy), 给他理发.",
  ex:[["我想放了假就去旅行。","Wǒ xiǎng fàng le jià jiù qù lǚxíng.","Tôi định được nghỉ là đi du lịch.","等级标准"],
      ["来，我们一起干一杯。","Lái, wǒmen yìqǐ gān yì bēi.","Nào, chúng ta cùng cạn một ly.","等级标准"],
      ["病人看完病就去取药了。","Bìngrén kànwán bìng jiù qù qǔ yào le.","Bệnh nhân khám xong thì đi lấy thuốc.","等级标准"]]}],
cmp:[
 {vn:"Tôi gặp anh ấy.", zh:"我[跟他]见面。", py:"Wǒ gēn tā jiàn miàn.", ok:false, tag:"(không nói 见面他)", why:"“anh ấy” đưa lên trước bằng 跟."},
 {vn:"Tôi ngủ hai tiếng.", zh:"我睡了两个小时[觉]。", py:"Wǒ shuì le liǎng ge xiǎoshí jiào.", ok:true, why:"Thời lượng chen vào giữa 睡 và 觉."}],
ex:[
 ["你能帮我一个[忙]吗？","Nǐ néng bāng wǒ yí ge máng ma?","Bạn giúp tôi một việc được không?"],
 ["我昨天只睡了五个小时[觉]。","Wǒ zuótiān zhǐ shuì le wǔ ge xiǎoshí jiào.","Hôm qua tôi chỉ ngủ năm tiếng."],
 ["我们明天[见]个[面]吧。","Wǒmen míngtiān jiàn ge miàn ba.","Mai chúng mình gặp nhau nhé."]],
errs:[
 {bad:"我见面他。", good:"我跟他见面。", why:"见面 không mang tân ngữ sau."},
 {bad:"我帮忙你。", good:"我帮你的忙。/ 我帮你。", why:"Người chen vào giữa hoặc dùng 帮 + người."},
 {bad:"我睡觉了两个小时。", good:"我睡了两个小时觉。", why:"了 và thời lượng chen vào giữa."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi gặp anh ấy rồi.", o:["我见面他了。","我跟他见面了。","我见他面了了。"], a:1, why:"跟 + người + 见面."},
  {q:"Chúng tôi chỉ gặp nhau một lần.", o:["我们只见面过一次。","我们只见过一次面。","我们只一次见过面。"], a:1, why:"见 + 过一次 + 面."},
  {q:"Anh ấy thường giúp tôi.", o:["他经常帮忙我。","他经常帮我的忙。","他经常帮忙我的。"], a:1, why:"帮 + người 的 + 忙."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","点了","一下儿","头"], a:"他点了一下儿头。", vi:"Anh ấy gật đầu một cái."},
  {w:["我们","一起","干","一杯"], a:"我们一起干一杯。", vi:"Chúng ta cùng cạn một ly."}]},
 {t:"C. Sửa câu sai", sub:"tự sửa rồi xem đáp án", type:"show", items:[
  {q:"我明天见面老师。", vi:"(ý: Mai tôi gặp thầy giáo.)", bad:true, a:"我明天跟老师见面。"},
  {q:"我睡觉了八个小时。", vi:"(ý: Tôi ngủ tám tiếng.)", bad:true, a:"我睡了八个小时觉。/ 我睡了八个小时。"}]}],
rel:["三06","二11","一17","一26"]
};
