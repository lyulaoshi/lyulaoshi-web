// Bài ngữ pháp 【二65】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二65", title:"转折复句", vi:"Câu ghép chuyển ý — tuy … nhưng …", tag:"句子的类型 · 复句",
goals:[
 "Nói hai ý trái ngược nhau, có hoặc không có từ nối.",
 "Dùng <b>虽然……，但是 / 可是……</b> và <b>……，不过……</b>.",
 "Nhớ: 虽然 thường phải đi với 但是 / 可是 ở vế sau."],
intro:"Vế sau <b>ngược lại</b> với điều vế trước khiến ta chờ đợi. Tiếng Việt: “tuy … nhưng …”, “…, có điều …”.",
rules:[
 {t:"Không dùng từ nối", sub:"（1）", fx:[["Vế 1",""],["，",null],["Vế 2 (ngược ý)",""]], mean:"",
  ex:[["这件衣服样子不错，有点儿贵。","Zhè jiàn yīfu yàngzi búcuò, yǒudiǎnr guì.","Kiểu áo này đẹp, (nhưng) hơi đắt.","等级标准"],
      ["这次去饭店，我们花钱不多，吃得很不错。","Zhè cì qù fàndiàn, wǒmen huā qián bù duō, chī de hěn búcuò.","Lần này đi nhà hàng, chúng tôi tiêu không nhiều mà ăn rất ngon.","等级标准"]]},
 {t:"虽然……，但是 / 可是……", sub:"（2）", fx:[["虽然",null],["Vế 1",""],["，但是 / 可是",null],["Vế 2",""]], mean:"",
  ex:[["那个公园[虽然]不大，[但是]非常漂亮。","Nàge gōngyuán suīrán bú dà, dànshì fēicháng piàoliang.","Công viên đó tuy không lớn nhưng rất đẹp.","等级标准"],
      ["[虽然]明天可能下雨，[可是]我还是想去那儿看看。","Suīrán míngtiān kěnéng xià yǔ, kěshì wǒ háishi xiǎng qù nàr kànkan.","Tuy mai có thể mưa, nhưng tôi vẫn muốn đến đó xem.","等级标准"]]},
 {t:"……，不过……", sub:"（3）", fx:[["Vế 1",""],["，不过",null],["Vế 2",""]], mean:"Nhẹ nhàng hơn 但是: “có điều…”.",
  ex:[["这个房间不太大，[不过]住着很舒服。","Zhège fángjiān bú tài dà, búguò zhù zhe hěn shūfu.","Phòng này không rộng lắm, có điều ở rất thoải mái.","等级标准"]]}],
cmp:[
 {vn:"Tuy mệt nhưng vui.", zh:"[虽然]很累，[但是]很高兴。", py:"Suīrán hěn lèi, dànshì hěn gāoxìng.", ok:true, why:"Giống khung tiếng Việt."}],
ex:[
 ["[虽然]中文很难，[但是]很有意思。","Suīrán Zhōngwén hěn nán, dànshì hěn yǒu yìsi.","Tuy tiếng Trung khó nhưng rất thú vị."],
 ["他很想去，[可是]没有时间。","Tā hěn xiǎng qù, kěshì méiyǒu shíjiān.","Anh ấy rất muốn đi, nhưng không có thời gian."],
 ["这个手机很好，[不过]有点儿贵。","Zhège shǒujī hěn hǎo, búguò yǒudiǎnr guì.","Điện thoại này tốt, có điều hơi đắt."]],
errs:[
 {bad:"虽然中文很难，很有意思。", good:"虽然中文很难，但是很有意思。", why:"虽然 đi với 但是 / 可是."},
 {bad:"虽然中文很难，而且很有意思。", good:"虽然中文很难，但是很有意思。", why:"Chuyển ý dùng 但是 / 可是, không dùng 而且 (tăng tiến)."},
 {bad:"中文很难虽然，但是很有意思。", good:"虽然中文很难，但是很有意思。", why:"虽然 đứng đầu vế (hoặc sau chủ ngữ)."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Công viên tuy nhỏ nhưng rất đẹp.", o:["公园虽然不大，但是非常漂亮。","公园虽然不大，非常漂亮但是。","虽然公园不大，和非常漂亮。"], a:0, why:"虽然……但是……"},
  {q:"Điện thoại tốt, có điều hơi đắt.", o:["手机很好，不过有点儿贵。","手机很好，不过一点儿贵。","不过手机很好，有点儿贵。"], a:0, why:"……，不过……"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["虽然","中文","很难","但是","很有意思"], a:"虽然中文很难，但是很有意思。", vi:"Tuy tiếng Trung khó nhưng rất thú vị."},
  {w:["这个房间","不太大","不过","住着","很舒服"], a:"这个房间不太大，不过住着很舒服。", vi:"Phòng này không rộng lắm, có điều ở rất thoải mái."}]},
 {t:"C. Nối bằng 虽然……但是……", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"他很忙 / 每天都运动", vi:"Anh ấy rất bận / ngày nào cũng tập thể dục", a:"虽然他很忙，但是每天都运动。/ 他虽然很忙，但是每天都运动。"},
  {q:"外边很冷 / 我想出去走走", vi:"Bên ngoài rất lạnh / tôi muốn ra ngoài đi dạo", a:"虽然外边很冷，但是我想出去走走。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"虽然他很忙，但是每天都运动。", vi:"Tuy anh ấy rất bận nhưng ngày nào cũng tập thể dục.", o:["Đúng","Sai"], a:0, why:"虽然……，但是……"},
  {q:"虽然中文很难，所以很有意思。", vi:"Tuy tiếng Trung khó nhưng rất thú vị.", o:["Đúng","Sai"], a:1, why:"Chuyển ý dùng 但是: 虽然中文很难，但是很有意思。"},
  {q:"他虽然很累，可是还在工作。", vi:"Tuy anh ấy mệt nhưng vẫn đang làm việc.", o:["Đúng","Sai"], a:0, why:"虽然……，可是……"},
  {q:"虽然下雨，我们但是去了公园。", vi:"Tuy trời mưa nhưng chúng tôi vẫn đi công viên.", o:["Đúng","Sai"], a:1, why:"但是 đứng đầu vế sau, trước chủ ngữ: 虽然下雨，但是我们去了公园。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tuy nhỏ nhưng rất sạch.", o:["虽然小，但是很干净。", "虽然小，所以很干净。"], a:0, why:"Chuyển ý → 但是."},
  {q:"Tuy anh ấy là người nước ngoài nhưng nói tiếng Trung rất giỏi.", o:["他虽然是外国人，但是中文说得很好。", "他虽然是外国人，而且中文说得很好。"], a:0, why:"虽然 đi với 但是 / 可是."},
  {q:"Món này ngon, có điều hơi cay.", o:["这个菜很好吃，不过有点儿辣。", "这个菜很好吃，不过辣一点儿。"], a:0, why:"Không vừa ý → 有点儿 + Adj."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tuy bài tập nhiều nhưng tôi đã làm xong.", a:"虽然作业很多，但是我做完了。/ 虽然作业很多，但是我都做完了。/ 虽然作业很多，可是我做完了。/ 虽然作业很多，可是我都做完了。"},
  {q:"Phòng này hơi nhỏ nhưng rất sáng.", a:"这个房间有点儿小，但是很亮。/ 这个房间虽然有点儿小，但是很亮。/ 这个房间有点儿小，不过很亮。"},
  {q:"Tuy anh ấy chưa từng đến Trung Quốc nhưng nói tiếng Trung rất giỏi.", a:"虽然他没去过中国，但是中文说得很好。/ 他虽然没去过中国，但是中文说得很好。/ 虽然他没去过中国，但是他中文说得很好。/ 他虽然没去过中国，但是他中文说得很好。"}]}],
rel:["二30","三68","二63","二66"]
};
