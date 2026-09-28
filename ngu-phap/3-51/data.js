// Bài ngữ pháp 【三51】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三51", title:"数量补语4：动词＋时量补语（动作持续的时间）", vi:"Bổ ngữ số lượng 4 — V + thời lượng: làm bao lâu", tag:"句子成分 · 补语",
goals:[
 "Nói hành động <b>kéo dài bao lâu</b>: V + (了) + thời lượng.",
 "Có tân ngữ: <b>lặp động từ</b> (学中文学了两年) hoặc <b>thời lượng + 的 + tân ngữ</b> (学了两年的中文).",
 "Đại từ chỉ người: V + người + thời lượng (等了他半个小时)."],
intro:"Bổ ngữ thời lượng đứng <b>sau động từ</b>. Khi có tân ngữ, cần sắp xếp theo một trong các cách dưới đây.",
rules:[
 {t:"V + O + V + 了 + thời lượng", sub:"重复动词", fx:[["V + tân ngữ",""],["V + 了",null],["thời lượng",""]], mean:"",
  ex:[["我学中文学了[两年]。","Wǒ xué Zhōngwén xué le liǎng nián.","Tôi học tiếng Trung được hai năm.","等级标准"],
      ["我等他等了[半个多小时]。","Wǒ děng tā děng le bàn ge duō xiǎoshí.","Tôi đợi anh ấy hơn nửa tiếng.","等级标准"],
      ["他游泳游了[四十分钟]。","Tā yóuyǒng yóu le sìshí fēnzhōng.","Anh ấy bơi 40 phút.","等级标准"]]},
 {t:"V + 了 + thời lượng (+ 的) + O", sub:"时量在前", fx:[["V + 了",""],["thời lượng (+ 的)",null],["tân ngữ",""]], mean:"Tân ngữ là người: V + người + thời lượng.",
  ex:[["我学了[两年]中文。","Wǒ xué le liǎng nián Zhōngwén.","Tôi học hai năm tiếng Trung.","等级标准"],
      ["我等了他[半个多小时]。","Wǒ děng le tā bàn ge duō xiǎoshí.","Tôi đợi anh ấy hơn nửa tiếng.","等级标准"],
      ["他游了[四十分钟]的泳。","Tā yóu le sìshí fēnzhōng de yǒng.","Anh ấy bơi 40 phút.","等级标准"]]}],
cmp:[
 {vn:"Tôi học tiếng Trung hai năm rồi.", zh:"我学中文学了[两年]了。", py:"Wǒ xué Zhōngwén xué le liǎng nián le.", ok:true, why:"Có 了 cuối câu = đến giờ vẫn đang học."}],
ex:[
 ["我昨天睡了[八个小时]。","Wǒ zuótiān shuì le bā ge xiǎoshí.","Hôm qua tôi ngủ tám tiếng."],
 ["他看电视看了[两个小时]。","Tā kàn diànshì kàn le liǎng ge xiǎoshí.","Anh ấy xem ti vi hai tiếng."]],
errs:[
 {bad:"我学中文了两年。", good:"我学中文学了两年。/ 我学了两年中文。", why:"Có tân ngữ thì lặp động từ hoặc đặt thời lượng trước tân ngữ."},
 {bad:"我两年学中文。", good:"我学了两年中文。", why:"Thời lượng đứng sau động từ."},
 {bad:"我等了半个小时他。", good:"我等了他半个小时。", why:"Người đứng trước thời lượng."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi học tiếng Trung hai năm.", o:["我学中文了两年。","我学了两年中文。","我两年学中文。"], a:1, why:"V了 + thời lượng + O."},
  {q:"Tôi đợi anh ấy nửa tiếng.", o:["我等了半个小时他。","我等了他半个小时。"], a:1, why:"Người trước thời lượng."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","看电视","看了","两个小时"], a:"他看电视看了两个小时。", vi:"Anh ấy xem ti vi hai tiếng."},
  {w:["我","学了","两年","中文"], a:"我学了两年中文。", vi:"Tôi học hai năm tiếng Trung."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Hôm qua tôi ngủ tám tiếng.", a:"我昨天睡了八个小时。/ 昨天我睡了八个小时。"},
  {q:"Anh ấy bơi 40 phút.", a:"他游泳游了四十分钟。/ 他游了四十分钟的泳。"}]}],
rel:["二12","三52","三59","三50"]
};
