// Bài ngữ pháp 【新5.33】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.33", title:"被动句3：主语＋被／叫／让＋宾语＋给＋动词＋其他成分", vi:"Câu bị động 3 — 被 / 叫 / 让 … 给 …", tag:"句子的类型 · 特殊句型",
goals:[
 "Thêm <b>给</b> trước động từ trong câu bị động: 被风<b>给</b>吹倒了.",
 "Hiểu 给 làm câu <b>khẩu ngữ, nhấn mạnh</b>.",
 "Nhớ phủ định, phó từ đứng trước 被."],
intro:"<b>给</b> ở đây không có nghĩa “cho”. Nó chỉ nhấn vào việc bị tác động; bỏ đi câu vẫn đúng.",
rules:[
 {t:"S + 被 / 叫 / 让 + người, vật + 给 + V + thành phần khác", sub:"被动", fx:[["S",""],["被 / 叫 / 让",null],["tác nhân",""],["给",null],["V + …",""]], mean:"Bị … (làm) mất.",
  ex:[["{1|树}{2|被}{3|大风}{4|给}{5|刮倒了}。","Shù bèi dà fēng gěi guādǎo le.","Cây bị gió to thổi đổ."],
      ["{1|我的自行车}{2|让}{3|人}{4|给}{5|借走了}。","Wǒ de zìxíngchē ràng rén gěi jièzǒu le.","Xe đạp của tôi bị người ta mượn đi rồi."],
      ["{1|蛋糕}{2|叫}{3|弟弟}{4|给}{5|吃光了}。","Dàngāo jiào dìdi gěi chīguāng le.","Bánh bị em trai ăn hết rồi."]]}],
notes:[{t:"给 đứng một mình", html:"<span class='zh'>钱包给偷了。</span> khẩu ngữ, 给 đóng vai trò như 被."}],
cmp:[
 {vn:"Chuyện này tôi quên béng mất.", zh:"这件事让我给忘了。", py:"Zhè jiàn shì ràng wǒ gěi wàng le.", ok:true, why:"让 … 给 … nói việc ngoài ý muốn."}],
ex:[
 ["衣服[被]雨[给]淋湿了。","Yīfu bèi yǔ gěi línshī le.","Quần áo bị mưa làm ướt."],
 ["手机[叫]我[给]摔坏了。","Shǒujī jiào wǒ gěi shuāihuài le.","Điện thoại bị tôi làm rơi hỏng."],
 ["他[被]老师[给]批评了一顿。","Tā bèi lǎoshī gěi pīpíngle yí dùn.","Em ấy bị thầy phê bình một trận."]],
errs:[
 {bad:"树给被大风刮倒了。", good:"树被大风给刮倒了。", why:"给 đứng sát trước động từ."},
 {bad:"蛋糕让给吃光了。", good:"蛋糕让弟弟给吃光了。", why:"Sau 让 / 叫 phải có tác nhân."},
 {bad:"手机被我给摔。", good:"手机被我给摔坏了。", why:"Động từ cần thành phần khác."},
 {bad:"钱包被小偷没给偷走。", good:"钱包没被小偷偷走。", why:"没 đứng trước 被; câu phủ định thường không dùng 给."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cây bị gió to thổi đổ.", o:["树被大风给刮倒了。","树给大风被刮倒了。","树被给大风刮倒了。"], a:0, why:"被 + tác nhân + 给 + V."},
  {q:"蛋糕让弟弟＿吃光了。", vi:"Bánh bị em ăn hết rồi.", o:["给","把","向"], a:0, why:"让……给……."},
  {q:"Bỏ 给 đi thì câu 衣服被雨给淋湿了:", vi:"Chọn nhận xét đúng.", o:["vẫn đúng","sai ngữ pháp"], a:0, why:"给 có thể bỏ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["手机","叫","我","给","摔坏了"], a:"手机叫我给摔坏了。", vi:"Điện thoại bị tôi làm rơi hỏng."},
  {w:["这件事","让","我","给","忘了"], a:"这件事让我给忘了。", vi:"Chuyện này tôi quên béng mất."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Quần áo bị mưa làm ướt (dùng 被…给).", a:"衣服被雨给淋湿了。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"杯子被他给打破了。", vi:"Cái cốc bị anh ấy làm vỡ.", o:["Đúng","Sai"], a:0, why:"被……给…… đúng."},
  {q:"我的书让给拿走了。", vi:"Sách của tôi bị cầm đi.", o:["Đúng","Sai"], a:1, why:"让 cần tác nhân: 我的书让人给拿走了。"},
  {q:"房间叫孩子给弄得很乱。", vi:"Phòng bị bọn trẻ bày bừa.", o:["Đúng","Sai"], a:0, why:"Bổ ngữ 得很乱."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"钱包＿小偷给偷走了。", vi:"Ví bị kẻ trộm lấy mất.", o:["被","把","从"], a:0, why:"被 + tác nhân."},
  {q:"自行车让朋友给骑＿了。", vi:"Xe đạp bị bạn đạp đi rồi.", o:["走","在","的"], a:0, why:"Cần bổ ngữ."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bánh bị em trai ăn hết rồi (dùng 让…给).", a:"蛋糕让弟弟给吃光了。/ 蛋糕让弟弟给吃完了。"},
  {q:"Em ấy bị thầy phê bình một trận (dùng 被…给).", a:"他被老师给批评了一顿。"}]}],
rel:["三55","新4.50","新5.30"]
};
