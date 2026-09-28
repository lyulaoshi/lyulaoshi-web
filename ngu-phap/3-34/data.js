// Bài ngữ pháp 【三34】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三34", title:"不A不B", vi:"不A不B — không … cũng không … (vừa phải)", tag:"短语 · 固定短语 · 四字格",
goals:[
 "Dùng <b>不 + A + 不 + B</b> với hai tính từ trái nghĩa: vừa phải, không quá.",
 "Dùng làm vị ngữ, định ngữ (+ 的).",
 "Nhớ các cặp thường gặp: 不大不小、不冷不热、不早不晚…"],
intro:"不A不B với A, B trái nghĩa nghĩa là <b>vừa đúng, không quá mức nào</b> — thường là lời khen.",
rules:[
 {t:"不 + A + 不 + B (A, B trái nghĩa)", sub:"四字格", fx:[["不",null],["A",""],["不",null],["B (trái nghĩa A)",""]], mean:"",
  ex:[["不大不小　不长不短　不冷不热","bú dà bù xiǎo　bù cháng bù duǎn　bù lěng bú rè","không to không nhỏ　không dài không ngắn　không nóng không lạnh","等级标准"],
      ["不多不少　不早不晚","bù duō bù shǎo　bù zǎo bù wǎn","không nhiều không ít　không sớm không muộn","等级标准"]]}],
cmp:[
 {vn:"Cái áo này vừa khít (không to không nhỏ).", zh:"这件衣服[不大不小]。", py:"Zhè jiàn yīfu bú dà bù xiǎo.", ok:true, why:"Tiếng Việt “vừa”; tiếng Trung dùng 不A不B."}],
ex:[
 ["今天的天气[不冷不热]，很舒服。","Jīntiān de tiānqì bù lěng bú rè, hěn shūfu.","Thời tiết hôm nay không nóng không lạnh, rất dễ chịu."],
 ["你来得[不早不晚]，正好。","Nǐ lái de bù zǎo bù wǎn, zhènghǎo.","Bạn đến không sớm không muộn, vừa đúng lúc."]],
errs:[
 {bad:"不大不高", good:"不大不小 / 不高不矮", why:"A, B phải trái nghĩa."},
 {bad:"这件衣服很不大不小。", good:"这件衣服不大不小。", why:"Không thêm 很."}],
practice:[
 {t:"A. Chọn cặp đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"không nóng không lạnh", o:["不冷不热","不热不高","不冷不少"], a:0, why:"Cặp trái nghĩa 冷 – 热."},
  {q:"không sớm không muộn", o:["不早不晚","不早不快","不晚不慢"], a:0, why:"早 – 晚."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这件","衣服","不大不小"], a:"这件衣服不大不小。", vi:"Cái áo này vừa khít."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Thời tiết hôm nay không nóng không lạnh.", a:"今天的天气不冷不热。/ 今天天气不冷不热。"}]}],
rel:["二46","一14","二41","三63"]
};
