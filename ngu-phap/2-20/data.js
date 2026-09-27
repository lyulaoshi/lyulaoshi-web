// Bài ngữ pháp 【二20】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二20", title:"语气副词：才、都、就、正好", vi:"Phó từ ngữ khí — mới (muộn / ít), đã (… rồi), (sớm) đã, vừa đúng", tag:"词类 · 副词",
goals:[
 "Dùng <b>才¹</b> khi người nói thấy <b>muộn, chậm, ít</b>; <b>就²</b> khi thấy <b>sớm, nhanh, dễ</b>.",
 "Dùng <b>都²……了</b> nghĩa “đã … rồi” (nhấn mạnh thời gian đã muộn).",
 "Dùng <b>正好</b> (vừa đúng, vừa khéo)."],
intro:"Đây là các phó từ thể hiện <b>cảm nhận của người nói</b>. Cặp quan trọng: <b>才</b> (muộn hơn mong đợi) ↔ <b>就</b> (sớm hơn mong đợi). Câu có 才 thường <b>không có 了</b>, câu có 就 thường <b>có 了</b>.",
rules:[
 {t:"才: mới (muộn, chậm, ít hơn mong đợi)", sub:"才¹", fx:[["Thời gian / số lượng",""],["才",null],["Động từ","(không có 了)"]], mean:"",
  ex:[["我今天八点[才]起床。","Wǒ jīntiān bā diǎn cái qǐ chuáng.","Hôm nay 8 giờ tôi mới dậy.","等级标准"],
      ["她一百块钱[才]买了两本书。","Tā yìbǎi kuài qián cái mǎi le liǎng běn shū.","Cô ấy 100 tệ mà chỉ mua được hai quyển sách.","等级标准"]]},
 {t:"就: (sớm, nhanh) đã", sub:"就²", fx:[["Thời gian / số lượng",""],["就",null],["Động từ","(+了)"]], mean:"Sớm hơn, nhanh hơn, dễ hơn mong đợi.",
  ex:[["班长七点半[就]到教室了。","Bānzhǎng qī diǎn bàn jiù dào jiàoshì le.","Lớp trưởng 7 rưỡi đã đến lớp rồi.","等级标准"],
      ["他一遍[就]听懂了这个很长的句子。","Tā yí biàn jiù tīngdǒng le zhège hěn cháng de jùzi.","Anh ấy nghe một lượt đã hiểu câu dài này.","等级标准"]]},
 {t:"都……了: đã … rồi", sub:"都²", fx:[["都",null],["thời gian / tình huống",""],["了",null]], mean:"Nhấn mạnh đã muộn, đã nhiều.",
  ex:[["[都]十二点[了]，我们该睡觉了。","Dōu shí'èr diǎn le, wǒmen gāi shuì jiào le.","Đã 12 giờ rồi, chúng ta nên đi ngủ.","等级标准"]]},
 {t:"正好: vừa đúng, vừa khéo", sub:"正好", fx:[["正好",null],["Động từ / 是…",""]], mean:"",
  ex:[["今年我的生日[正好]是星期天。","Jīnnián wǒ de shēngrì zhènghǎo shì xīngqītiān.","Năm nay sinh nhật tôi đúng vào Chủ nhật.","等级标准"]]}],
cmp:[
 {vn:"10 giờ anh ấy mới đến.", zh:"他十点[才]来。", py:"Tā shí diǎn cái lái.", ok:true, why:"“mới” (muộn) = 才, không có 了."},
 {vn:"7 giờ anh ấy đã đến rồi.", zh:"他七点[就]来了。", py:"Tā qī diǎn jiù lái le.", ok:true, why:"“đã … rồi” (sớm) = 就……了."}],
ex:[
 ["他学了三年中文，[才]会说一点儿。","Tā xué le sān nián Zhōngwén, cái huì shuō yìdiǎnr.","Anh ấy học tiếng Trung ba năm mới nói được một chút."],
 ["我五分钟[就]做完了。","Wǒ wǔ fēnzhōng jiù zuòwán le.","Tôi năm phút đã làm xong."],
 ["[都]九月[了]，天还这么热。","Dōu jiǔ yuè le, tiān hái zhème rè.","Đã tháng Chín rồi mà trời vẫn nóng thế."],
 ["你来得[正好]，我们一起吃饭吧。","Nǐ lái de zhènghǎo, wǒmen yìqǐ chī fàn ba.","Bạn đến đúng lúc quá, mình cùng ăn cơm nhé."]],
errs:[
 {bad:"我八点才起床了。", good:"我八点才起床。", why:"Câu có 才 không dùng 了."},
 {bad:"他七点就来。（ý: đã đến rồi）", good:"他七点就来了。", why:"Việc đã xảy ra với 就 thường có 了."},
 {bad:"才我八点起床。", good:"我八点才起床。", why:"才 đứng trước động từ, sau thời gian."}],
practice:[
 {t:"A. Điền 才 hoặc 就", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他十点＿＿起床，太晚了。", o:["才","就"], a:0, why:"Muộn → 才."},
  {q:"我六点＿＿起床了，很早。", o:["才","就"], a:1, why:"Sớm → 就……了."},
  {q:"这么难的题，他五分钟＿＿做完了。", o:["才","就"], a:1, why:"Nhanh → 就."},
  {q:"我等了一个小时，他＿＿来。", o:["才","就"], a:0, why:"Chậm → 才."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","今天","八点","才","起床"], a:"我今天八点才起床。", vi:"Hôm nay 8 giờ tôi mới dậy."},
  {w:["班长","七点半","就","到","教室","了"], a:"班长七点半就到教室了。", vi:"Lớp trưởng 7 rưỡi đã đến lớp rồi."},
  {w:["都","十二点","了","我们","该","睡觉","了"], a:"都十二点了，我们该睡觉了。", vi:"Đã 12 giờ rồi, chúng ta nên đi ngủ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Năm nay sinh nhật tôi đúng vào Chủ nhật.", a:"今年我的生日正好是星期天。"},
  {q:"Tôi năm phút đã làm xong.", a:"我五分钟就做完了。"},
  {q:"11 giờ anh ấy mới về nhà.", a:"他十一点才回家。"}]}],
rel:["二17","二15","三14","二80"]
};
