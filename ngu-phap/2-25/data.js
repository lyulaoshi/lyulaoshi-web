// Bài ngữ pháp 【二25】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二25", title:"介词：对", vi:"Giới từ 对 — “đối với, với” (thái độ, đối tượng)", tag:"词类 · 介词 · 引出对象",
goals:[
 "Dùng <b>对 + người / vật + tính từ / động từ</b> để nói thái độ đối với ai, cái gì.",
 "Dùng <b>对 + người + 说</b> (nói với ai).",
 "Đặt cụm 对…… trước động từ / tính từ."],
intro:"对 dẫn ra <b>đối tượng</b> mà thái độ, hành động hướng tới. Tiếng Việt “nhiệt tình <b>với khách</b>” → tiếng Trung đưa <b>对顾客</b> lên trước tính từ.",
rules:[
 {t:"对 + đối tượng + tính từ / động từ", sub:"对", fx:[["Chủ ngữ",""],["对",null],["người / vật",""],["热情 / 好 / 感兴趣 / 说…",""]], mean:"Thái độ, cảm nhận, lời nói hướng về ai / cái gì.",
  ex:[["她[对]顾客非常热情。","Tā duì gùkè fēicháng rèqíng.","Cô ấy rất nhiệt tình với khách hàng.","等级标准"],
      ["这件事你[对]他说了吗？","Zhè jiàn shì nǐ duì tā shuō le ma?","Chuyện này bạn đã nói với anh ấy chưa?","等级标准"]]}],
notes:[
 {t:"Cụm hay gặp", html:"<span class='zh'>对……好</span> (tốt với) · <span class='zh'>对……感兴趣</span> (hứng thú với) · <span class='zh'>对身体好 / 不好</span> (tốt / không tốt cho sức khỏe)."},
 {t:"对 còn là tính từ", html:"= đúng: <span class='zh'>你说得对。</span>"}],
cmp:[
 {vn:"Mẹ rất tốt với tôi.", zh:"妈妈[对我]很好。", py:"Māma duì wǒ hěn hǎo.", ok:true, why:"“với tôi” lên trước tính từ."},
 {vn:"Hút thuốc không tốt cho sức khỏe.", zh:"抽烟[对身体]不好。", py:"Chōu yān duì shēntǐ bù hǎo.", ok:true, why:"“cho sức khỏe” → 对身体."}],
ex:[
 ["我[对]中国文化很感兴趣。","Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.","Tôi rất hứng thú với văn hóa Trung Quốc."],
 ["老师[对]我们很好。","Lǎoshī duì wǒmen hěn hǎo.","Thầy cô rất tốt với chúng tôi."],
 ["多运动[对]身体好。","Duō yùndòng duì shēntǐ hǎo.","Vận động nhiều tốt cho sức khỏe."]],
errs:[
 {bad:"她很热情对顾客。", good:"她对顾客很热情。", why:"对 + đối tượng trước tính từ."},
 {bad:"妈妈很好对我。", good:"妈妈对我很好。", why:"Cụm 对 trước 很好."},
 {bad:"我很感兴趣中国文化。", good:"我对中国文化很感兴趣。", why:"感兴趣 không mang tân ngữ; dùng 对…感兴趣."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy nhiệt tình với khách.", o:["她很热情对顾客。","她对顾客很热情。","对顾客她热情很。"], a:1, why:"对 + N + Adj."},
  {q:"Tôi hứng thú với tiếng Trung.", o:["我对中文很感兴趣。","我很感兴趣中文。","我感兴趣对中文。"], a:0, why:"对…感兴趣."},
  {q:"Vận động tốt cho sức khỏe.", o:["运动好对身体。","运动对身体好。","对运动身体好。"], a:1, why:"对身体好."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","对","顾客","非常","热情"], a:"她对顾客非常热情。", vi:"Cô ấy rất nhiệt tình với khách hàng."},
  {w:["老师","对","我们","很好"], a:"老师对我们很好。", vi:"Thầy cô rất tốt với chúng tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Hút thuốc không tốt cho sức khỏe.", a:"抽烟对身体不好。"},
  {q:"Chuyện này bạn đã nói với mẹ chưa?", a:"这件事你对妈妈说了吗？"}]}],
rel:["二26","三40","一17","二27"]
};
