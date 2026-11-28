// Bài ngữ pháp 【三05】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三05", title:"动宾式离合词", vi:"Động từ ly hợp kiểu động – tân (帮忙, 见面, 睡觉…)", tag:"词类 · 动词",
goals:[
 "Nhận biết động từ ly hợp: <b>帮忙、点头、放假、干杯、见面、结婚、看病、睡觉、洗澡、理发、说话</b>.",
 "Chèn <b>了 / 过 / số lượng / tân ngữ phụ</b> vào <b>giữa</b> hai chữ: 帮我的忙, 见过一次面.",
 "Không thêm tân ngữ sau cả từ: <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=9dad2f0a#sai'/></svg> 见面他 → <svg class='lli ok' aria-hidden='true'><use href='/chung/ic.svg?v=9dad2f0a#tick'/></svg> 跟他见面."],
intro:"Động từ ly hợp gồm <b>động từ + danh từ</b> (帮 + 忙, 见 + 面). Vì phần sau đã là tân ngữ, nên người / số lần phải <b>chen vào giữa</b> hoặc đưa lên trước bằng giới từ.",
rules:[
 {cap:[2,3], t:"Chèn thành phần vào giữa", sub:"离合", fx:[["V",""],["(了 / 过 / 一下儿 / 的…)",null],["N",""]], mean:"帮 + 我的 + 忙；见 + 过一次 + 面；点 + 了一下儿 + 头.",
  ex:[["他经常{1|帮}{2|我的}{3|忙}。","Tā jīngcháng bāng wǒ de máng.","Anh ấy thường giúp tôi.","等级标准"],
      ["他{1|点}{2|了一下儿}{3|头}，表示同意。","Tā diǎn le yíxiàr tóu, biǎoshì tóngyì.","Anh ấy gật đầu một cái, tỏ ý đồng ý.","等级标准"],
      ["来中国以后，我们只{1|见}{2|过一次}{3|面}。","Lái Zhōngguó yǐhòu, wǒmen zhǐ jiàn guo yí cì miàn.","Từ khi sang Trung Quốc, chúng tôi chỉ gặp nhau một lần.","等级标准"],
      ["{1|结}{2|了}{3|婚}以后，她就不工作了。","Jié le hūn yǐhòu, tā jiù bù gōngzuò le.","Sau khi kết hôn, cô ấy không đi làm nữa.","等级标准"]]},
 {cap:[1,3], t:"Người liên quan dùng giới từ đưa lên trước", sub:"跟 / 给 + người", fx:[["跟 / 给 + người",null],["离合词",""]], mean:"跟他见面 (gặp anh ấy), 跟她结婚 (cưới cô ấy), 给他理发.",
  ex:[["我想{2|放了假}就去旅行。","Wǒ xiǎng fàng le jià jiù qù lǚxíng.","Tôi định được nghỉ là đi du lịch.","等级标准"],
      ["来，我们一起{2|干一杯}。","Lái, wǒmen yìqǐ gān yì bēi.","Nào, chúng ta cùng cạn một ly.","等级标准"],
      ["病人{2|看完病}就去取药了。","Bìngrén kànwán bìng jiù qù qǔ yào le.","Bệnh nhân khám xong thì đi lấy thuốc.","等级标准"]]},
 {cap:[1], t:"离合词 cơ bản: 睡觉、上课、下班、生病…", fx:[["S",""],["V (+ 了…)",""],["N",""]], mean:"上课 vào học · 下课 tan học · 上班 đi làm · 下班 tan làm · 生病 bị ốm · 看病, 说话, 睡觉. Muốn thêm 了, số lượng thì chèn vào giữa.",
  ex:[["{1|我们}{2|八点上}{3|课}。", "Wǒmen bā diǎn shàng kè.", "Tám giờ chúng tôi vào học."],
      ["{1|他}{2|下了}{3|班}就回家。", "Tā xiàle bān jiù huí jiā.", "Tan làm là anh ấy về nhà."],
      ["{1|妹妹}昨天{2|生}{3|病}了。", "Mèimei zuótiān shēngbìng le.", "Hôm qua em gái bị ốm."],
      ["{1|老师}{2|下}{3|课}以后去开会。", "Lǎoshī xiàkè yǐhòu qù kāihuì.", "Tan học xong thầy đi họp."],
      ["{1|爸爸}每天九点{2|上}{3|班}。", "Bàba měi tiān jiǔ diǎn shàngbān.", "Hằng ngày bố đi làm lúc 9 giờ."]]},
 {cap:[2], t:"游泳、跳舞、跑步", fx:[["V",""],["了 + thời lượng",null],["N",""]], mean:"Thời lượng, số lần chen vào giữa động từ và danh từ.",
  ex:[["他{1|游}{2|了一个小时}{3|泳}。", "Tā yóule yí gè xiǎoshí yǒng.", "Anh ấy bơi một tiếng."],
      ["我们{1|跳}{2|了一会儿}{3|舞}。", "Wǒmen tiàole yíhuìr wǔ.", "Chúng tôi nhảy một lúc."],
      ["爷爷每天早上{1|跑}{2|半个小时}{3|步}。", "Yéye měi tiān zǎoshang pǎo bàn gè xiǎoshí bù.", "Sáng nào ông cũng chạy bộ nửa tiếng."]]}],
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
  {q:"我睡觉了八个小时。", vi:"(ý: Tôi ngủ tám tiếng.)", bad:true, a:"我睡了八个小时觉。/ 我睡了八个小时。"}]},
 {t:"D. Từ bổ sung", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我下＿课就去找你。", vi:"Tan học là mình đi tìm bạn.", o:["了", "过的", "着"], a:0, why:"了 chen giữa 下 và 课."},
  {q:"Anh ấy bơi một tiếng.", vi:"Chọn câu đúng.", o:["他游了一个小时泳。", "他游泳了一个小时泳。"], a:0, why:"V + thời lượng + N."}]}],
rel:["三06","二11","一17","一26"]
};
