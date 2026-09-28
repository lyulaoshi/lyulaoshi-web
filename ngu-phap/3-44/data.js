// Bài ngữ pháp 【三44】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三44", title:"动词性词语、形容词性词语和主谓短语作宾语", vi:"Động từ, tính từ, cụm chủ – vị làm tân ngữ", tag:"句子成分 · 宾语",
goals:[
 "Sau các động từ như <b>打算、喜欢、觉得、感到、希望</b>, tân ngữ có thể là cụm động từ, tính từ hoặc cả một câu nhỏ.",
 "Đặt cả cụm tân ngữ <b>sau</b> động từ chính.",
 "Không chèn “rằng / là” thành 是."],
intro:"Tiếng Việt: “Tôi hy vọng <b>(rằng)</b> mọi người đều thi tốt”. Tiếng Trung: động từ + cả cụm, <b>không cần</b> từ nối.",
rules:[
 {t:"V + cụm động từ / tính từ / chủ – vị", sub:"谓词性宾语", fx:[["打算 / 喜欢 / 觉得 / 希望…",null],["cụm động từ / tính từ / câu nhỏ",""]], mean:"",
  ex:[["我打算[去上海]。","Wǒ dǎsuàn qù Shànghǎi.","Tôi định đi Thượng Hải.","等级标准"],
      ["她喜欢[安静]。","Tā xǐhuan ānjìng.","Cô ấy thích yên tĩnh.","等级标准"],
      ["我感到[不舒服]。","Wǒ gǎndào bù shūfu.","Tôi cảm thấy khó chịu.","等级标准"],
      ["老师希望[大家都能取得好成绩]。","Lǎoshī xīwàng dàjiā dōu néng qǔdé hǎo chéngjì.","Thầy cô hy vọng mọi người đều đạt thành tích tốt.","等级标准"]]}],
cmp:[
 {vn:"Tôi nghĩ (rằng) anh ấy nói đúng.", zh:"我觉得[他说得对]。", py:"Wǒ juéde tā shuō de duì.", ok:false, tag:"(không dịch “rằng”)", why:"Không có từ nối trước câu nhỏ."}],
ex:[
 ["我觉得[中文很有意思]。","Wǒ juéde Zhōngwén hěn yǒu yìsi.","Tôi thấy tiếng Trung rất thú vị."],
 ["我知道[他明天不来]。","Wǒ zhīdào tā míngtiān bù lái.","Tôi biết mai anh ấy không đến."]],
errs:[
 {bad:"我觉得是他说得对。", good:"我觉得他说得对。", why:"Không dịch “là / rằng” thành 是."},
 {bad:"我打算上海去。", good:"我打算去上海。", why:"Cụm động từ giữ trật tự V + O."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi nghĩ anh ấy nói đúng.", o:["我觉得是他说得对。","我觉得他说得对。"], a:1, why:"Không có 是."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["老师","希望","大家","都能","取得","好成绩"], a:"老师希望大家都能取得好成绩。", vi:"Thầy cô hy vọng mọi người đều đạt thành tích tốt."},
  {w:["我","打算","去","上海"], a:"我打算去上海。", vi:"Tôi định đi Thượng Hải."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi biết mai anh ấy không đến.", a:"我知道他明天不来。"}]}],
rel:["一26","三43","三45","二40"]
};
