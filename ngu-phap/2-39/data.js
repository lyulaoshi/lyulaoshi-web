// Bài ngữ pháp 【二39】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二39", title:"名词性短语", vi:"Cụm danh từ — cụm có danh từ làm trung tâm", tag:"短语 · 功能类型",
goals:[
 "Nhận ra cụm danh từ: <b>(định ngữ) + danh từ</b>, hoặc số lượng / chỉ thị + lượng từ.",
 "Dùng cụm danh từ làm <b>chủ ngữ, tân ngữ</b>.",
 "Giữ phần bổ nghĩa ở trước danh từ trung tâm."],
intro:"Cụm danh từ hoạt động trong câu <b>như một danh từ</b>: làm chủ ngữ, tân ngữ, định ngữ.",
rules:[
 {t:"Định ngữ + danh từ; số / chỉ thị + lượng từ (+ N)", sub:"名词性短语", fx:[["Định ngữ / số lượng",""],["Danh từ (trung tâm)",null]], mean:"",
  ex:[["新书　我的衣服　中文水平","xīn shū　wǒ de yīfu　Zhōngwén shuǐpíng","sách mới　quần áo của tôi　trình độ tiếng Trung","等级标准"],
      ["一条河　两本　这件","yì tiáo hé　liǎng běn　zhè jiàn","một con sông　hai quyển　chiếc này","等级标准"]]}],
cmp:[
 {vn:"trình độ tiếng Trung của tôi", zh:"我的[中文水平]", py:"wǒ de Zhōngwén shuǐpíng", ok:true, why:"Phần bổ nghĩa đứng trước, danh từ trung tâm cuối."}],
ex:[
 ["[我的中文水平]不太高。","Wǒ de Zhōngwén shuǐpíng bú tài gāo.","Trình độ tiếng Trung của tôi không cao lắm."],
 ["我想买[这件]。","Wǒ xiǎng mǎi zhè jiàn.","Tôi muốn mua chiếc này."],
 ["[那条河]很长。","Nà tiáo hé hěn cháng.","Con sông kia rất dài."]],
errs:[
 {bad:"水平中文我的", good:"我的中文水平", why:"Bổ nghĩa đứng trước."},
 {bad:"河一条", good:"一条河", why:"Số lượng trước danh từ."}],
practice:[
 {t:"A. Đâu là cụm danh từ?", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chọn cụm danh từ:", o:["买水果","我的衣服","很舒服"], a:1, why:"Trung tâm là danh từ 衣服."},
  {q:"Chọn cụm danh từ:", o:["两本","写完","非常高兴"], a:0, why:"Số + lượng từ."}]},
 {t:"B. Sắp xếp thành cụm / câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我的","中文","水平","不太高"], a:"我的中文水平不太高。", vi:"Trình độ tiếng Trung của tôi không cao lắm."},
  {w:["那条","河","很","长"], a:"那条河很长。", vi:"Con sông kia rất dài."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"điện thoại mới của mẹ tôi", a:"我妈妈的新手机"},
  {q:"ba chiếc áo này", a:"这三件衣服"}]}],
rel:["二37","二40","二41","一27"]
};
