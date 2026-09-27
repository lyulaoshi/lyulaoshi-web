// Bài ngữ pháp 【二27】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二27", title:"介词：离", vi:"Giới từ 离 — “cách” (khoảng cách không gian, thời gian)", tag:"词类 · 介词 · 引出对象",
goals:[
 "Nói khoảng cách bằng <b>A 离 B + 远 / 近</b>.",
 "Nói còn bao lâu nữa bằng <b>离 + mốc + 还有……</b>.",
 "Không dùng 从 thay cho 离 khi nói khoảng cách."],
intro:"离 = “cách”. Khác 从 (từ đâu), 离 so <b>khoảng cách</b> giữa hai điểm, sau đó là 远 / 近 hoặc số lượng.",
rules:[
 {t:"A 离 B + 远 / 近", sub:"距离", fx:[["A",""],["离",null],["B",""],["(很 / 有点儿) 远 / 近",""]], mean:"A cách B xa / gần.",
  ex:[["这儿[离]车站有点儿远。","Zhèr lí chēzhàn yǒudiǎnr yuǎn.","Chỗ này cách ga hơi xa.","等级标准"],
      ["我家[离]学校很近。","Wǒ jiā lí xuéxiào hěn jìn.","Nhà tôi cách trường rất gần."]]},
 {t:"离 + mốc thời gian + 还有 + thời lượng", sub:"时间", fx:[["(现在)",""],["离",null],["mốc",""],["(还)有 + thời gian",""]], mean:"Còn bao lâu nữa đến …",
  ex:[["现在[离]放假有一个星期的时间。","Xiànzài lí fàng jià yǒu yí ge xīngqī de shíjiān.","Bây giờ còn một tuần nữa là nghỉ.","等级标准"],
      ["[离]考试还有三天。","Lí kǎoshì hái yǒu sān tiān.","Còn ba ngày nữa là thi."]]}],
cmp:[
 {vn:"Nhà tôi cách trường 2 km.", zh:"我家[离]学校两公里。", py:"Wǒ jiā lí xuéxiào liǎng gōnglǐ.", ok:true, why:"“cách” = 离 — giống trật tự tiếng Việt."},
 {vn:"Còn ba ngày nữa là thi.", zh:"[离]考试还有三天。", py:"Lí kǎoshì hái yǒu sān tiān.", ok:true, why:"离 + mốc + 还有."}],
ex:[
 ["你家[离]这儿远吗？","Nǐ jiā lí zhèr yuǎn ma?","Nhà bạn cách đây có xa không?"],
 ["[离]上课还有十分钟。","Lí shàng kè hái yǒu shí fēnzhōng.","Còn 10 phút nữa là vào học."],
 ["医院[离]这儿不太远。","Yīyuàn lí zhèr bú tài yuǎn.","Bệnh viện cách đây không xa lắm."]],
errs:[
 {bad:"我家从学校很近。", good:"我家离学校很近。", why:"Khoảng cách dùng 离."},
 {bad:"我家很近离学校。", good:"我家离学校很近。", why:"离 + B trước 近 / 远."},
 {bad:"离考试有三天还。", good:"离考试还有三天。", why:"还 đứng trước 有."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nhà tôi cách trường rất gần.", o:["我家从学校很近。","我家离学校很近。","我家很近离学校。"], a:1, why:"离."},
  {q:"Còn 10 phút nữa là vào học.", o:["离上课还有十分钟。","从上课还有十分钟。","离上课有十分钟还。"], a:0, why:"离 + mốc + 还有."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这儿","离","车站","有点儿","远"], a:"这儿离车站有点儿远。", vi:"Chỗ này cách ga hơi xa."},
  {w:["离","考试","还有","三天"], a:"离考试还有三天。", vi:"Còn ba ngày nữa là thi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Nhà bạn cách đây có xa không?", a:"你家离这儿远吗？"},
  {q:"Còn một tuần nữa là nghỉ.", a:"离放假还有一个星期。"}]}],
rel:["一15","二24","二12","一30"]
};
