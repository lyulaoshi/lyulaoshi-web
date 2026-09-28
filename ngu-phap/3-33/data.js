// Bài ngữ pháp 【三33】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三33", title:"数量重叠：数词＋量词＋数词＋量词", vi:"Lặp số lượng — 一个一个, 一遍一遍: từng … từng …", tag:"短语 · 结构类型",
goals:[
 "Lặp cụm số lượng để nói <b>lần lượt, từng cái một</b>, hoặc <b>nhiều, liên tục</b>.",
 "Dùng làm định ngữ (+ 的) hoặc trạng ngữ (+ 地).",
 "Phân biệt với lặp lượng từ AA 【三11】."],
intro:"一排一排、两个两个、一遍一遍… diễn tả sự việc diễn ra <b>theo từng đơn vị</b>, liên tiếp.",
rules:[
 {t:"Số + lượng từ + số + lượng từ (+ 的 / 地)", sub:"数量重叠", fx:[["一 / 两 + lượng từ",""],["一 / 两 + lượng từ",null],["的 / 地",""]], mean:"",
  ex:[["图书馆里放着[一排一排]的书架。","Túshūguǎn li fàng zhe yì pái yì pái de shūjià.","Trong thư viện đặt từng dãy từng dãy giá sách.","等级标准"],
      ["老师让学生[两个两个]地进教室。","Lǎoshī ràng xuésheng liǎng ge liǎng ge de jìn jiàoshì.","Thầy cho học sinh vào lớp từng tốp hai người.","等级标准"],
      ["妈妈[一遍一遍]地告诉我要注意安全。","Māma yí biàn yí biàn de gàosu wǒ yào zhùyì ānquán.","Mẹ dặn đi dặn lại tôi phải chú ý an toàn.","等级标准"],
      ["日子[一天一天]过去了。","Rìzi yì tiān yì tiān guòqu le.","Ngày tháng cứ thế trôi qua từng ngày.","等级标准"]]}],
cmp:[
 {vn:"Đọc từng chữ một.", zh:"[一个字一个字]地读。", py:"Yí ge zì yí ge zì de dú.", ok:true, why:"“từng … một” = lặp cụm số lượng."}],
ex:[
 ["请大家[一个一个]地说。","Qǐng dàjiā yí ge yí ge de shuō.","Mời mọi người lần lượt từng người nói."],
 ["他[一口一口]地喝完了。","Tā yì kǒu yì kǒu de hēwán le.","Anh ấy uống từng ngụm một cho đến hết."]],
errs:[
 {bad:"一个个一地说", good:"一个一个地说", why:"Lặp cả cụm số + lượng từ."},
 {bad:"两个两个进教室地。", good:"两个两个地进教室。", why:"地 đứng ngay sau cụm lặp, trước động từ."}],
practice:[
 {t:"A. Chọn cách nói đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"lần lượt từng người nói", o:["一个一个地说","一个个一地说","说一个一个地"], a:0, why:"Cụm lặp + 地 + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["日子","一天一天","过去了"], a:"日子一天一天过去了。", vi:"Ngày tháng trôi qua từng ngày."},
  {w:["请大家","一个一个地","说"], a:"请大家一个一个地说。", vi:"Mời mọi người lần lượt từng người nói."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Mẹ dặn đi dặn lại tôi phải chú ý an toàn.", a:"妈妈一遍一遍地告诉我要注意安全。"}]}],
rel:["三11","二04","一23","一20"]
};
