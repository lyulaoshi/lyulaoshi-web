// Bài ngữ pháp 【三42】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三42", title:"越……越……", vi:"越……越…… — càng … càng …", tag:"固定格式",
goals:[
 "Dùng <b>越 + A + 越 + B</b>: B thay đổi theo A.",
 "Dùng cùng chủ ngữ (越学越…) hoặc hai chủ ngữ khác nhau.",
 "Không thêm 很 sau 越."],
intro:"越……越…… = “càng … càng …”. Khác với 越来越 【二44】 (thay đổi theo thời gian).",
rules:[
 {t:"(S1) 越 A，(S2) 越 B", sub:"越……越……", fx:[["(S)",""],["越",null],["A",""],["(S2)",""],["越",null],["B",""]], mean:"",
  ex:[["中文[越]学[越]有意思。","Zhōngwén yuè xué yuè yǒu yìsi.","Tiếng Trung càng học càng thú vị.","等级标准"],
      ["衣服的牌子[越]有名，价钱[越]贵。","Yīfu de páizi yuè yǒumíng, jiàqián yuè guì.","Nhãn hiệu quần áo càng nổi tiếng, giá càng đắt.","等级标准"]]}],
cmp:[
 {vn:"Càng nghĩ càng giận.", zh:"[越]想[越]生气。", py:"Yuè xiǎng yuè shēngqì.", ok:true, why:"Giống khung tiếng Việt."}],
ex:[
 ["雨[越]下[越]大。","Yǔ yuè xià yuè dà.","Mưa càng lúc càng to."],
 ["他[越]说[越]高兴。","Tā yuè shuō yuè gāoxìng.","Anh ấy càng nói càng vui."]],
errs:[
 {bad:"中文越学越很有意思。", good:"中文越学越有意思。", why:"Không thêm 很."},
 {bad:"越中文学越有意思。", good:"中文越学越有意思。", why:"越 đứng trước động từ / tính từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mưa càng lúc càng to.", o:["雨越下越大。","雨越下越很大。","越雨下越大。"], a:0, why:"越 V 越 Adj."},
  {q:"Tiếng Trung càng học càng thú vị.", o:["中文越学越有意思。","中文越来越学有意思。"], a:0, why:"越……越……"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","越说","越","高兴"], a:"他越说越高兴。", vi:"Anh ấy càng nói càng vui."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Càng nghĩ càng giận.", a:"越想越生气。"},
  {q:"Nhãn hiệu càng nổi tiếng, giá càng đắt.", a:"牌子越有名，价钱越贵。"}]}],
rel:["二44","二13","一40","三12"]
};
