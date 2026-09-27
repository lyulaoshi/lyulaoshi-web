// Bài ngữ pháp 【一27】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一27", title:"定语", vi:"Định ngữ — từ bổ nghĩa đứng trước danh từ", tag:"句子成分 · 定语",
goals:[
 "Đặt định ngữ (danh từ, tính từ, cụm số lượng) <b>trước danh từ</b>.",
 "Biết khi nào cần <b>的</b>, khi nào không.",
 "Sửa trật tự tiếng Việt “sách <b>tiếng Trung</b>, phòng <b>sạch</b>” → 中文书, 干净的房间."],
intro:"Tiếng Việt: danh từ + từ bổ nghĩa (“áo <b>mới</b>”). Tiếng Trung: <b>từ bổ nghĩa + (的) + danh từ</b> (新衣服). Đây là điểm ngược rõ nhất giữa hai ngôn ngữ.",
rules:[
 {t:"Danh từ làm định ngữ", sub:"名词性词语", fx:[["Danh từ (loại)",null],["Danh từ",""]], mean:"Chỉ loại, chất liệu: thường không cần 的.",
  ex:[["他在看[中文]书。","Tā zài kàn Zhōngwén shū.","Anh ấy đang đọc sách tiếng Trung.","等级标准"]]},
 {t:"Tính từ làm định ngữ", sub:"形容词性词语", fx:[["Tính từ",null],["(的)",""],["Danh từ",""]], mean:"Tính từ một âm tiết thường không cần 的 (新书包); tính từ hai âm tiết hoặc có 很 thì thêm 的 (干净的房间、很好的朋友).",
  ex:[["[新]书包很好看。","Xīn shūbāo hěn hǎokàn.","Cặp sách mới rất đẹp.","等级标准"],
      ["我喜欢[干净的]房间。","Wǒ xǐhuan gānjìng de fángjiān.","Tôi thích căn phòng sạch sẽ.","等级标准"]]},
 {t:"Cụm số lượng làm định ngữ", sub:"数量短语", fx:[["Số + lượng từ",null],["Danh từ",""]], mean:"Không dùng 的.",
  ex:[["她看了[两本]书。","Tā kàn le liǎng běn shū.","Cô ấy đọc hai quyển sách.","等级标准"]]}],
notes:[
 {t:"Người sở hữu", html:"đại từ / danh từ chỉ người + 的 【一20】: <span class='zh'>我的书、老师的手机</span>."},
 {t:"Nhiều định ngữ", html:"thứ tự thường: <b>sở hữu + số lượng + tính từ + loại</b>: <span class='zh'>我的两本新中文书</span>."}],
cmp:[
 {vn:"sách tiếng Trung", zh:"[中文]书", py:"Zhōngwén shū", ok:true, why:"Ngược tiếng Việt."},
 {vn:"căn phòng sạch sẽ", zh:"[干净的]房间", py:"gānjìng de fángjiān", ok:true, why:"Tính từ hai âm tiết + 的."},
 {vn:"cặp sách mới", zh:"[新]书包", py:"xīn shūbāo", ok:true, why:"Tính từ một âm tiết không cần 的."}],
ex:[
 ["这是[我的]手机。","Zhè shì wǒ de shǒujī.","Đây là điện thoại của tôi."],
 ["他是[好]学生。","Tā shì hǎo xuésheng.","Cậu ấy là học sinh giỏi."],
 ["我想买[一件红色的]衣服。","Wǒ xiǎng mǎi yí jiàn hóngsè de yīfu.","Tôi muốn mua một bộ quần áo màu đỏ."],
 ["[很多]人喜欢喝茶。","Hěn duō rén xǐhuan hē chá.","Rất nhiều người thích uống trà."]],
errs:[
 {bad:"书中文", good:"中文书", why:"Định ngữ đứng trước danh từ."},
 {bad:"我喜欢房间干净。", good:"我喜欢干净的房间。", why:"“phòng sạch” làm tân ngữ: tính từ + 的 + N."},
 {bad:"书两本", good:"两本书", why:"Số lượng trước danh từ."},
 {bad:"很好看衣服", good:"很好看的衣服", why:"Có 很 thì thêm 的."}],
practice:[
 {t:"A. Chọn cách nói đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"sách tiếng Trung", o:["书中文","中文书","中文的书的"], a:1, why:"Định ngữ trước."},
  {q:"căn phòng sạch sẽ", o:["房间干净","干净房间的","干净的房间"], a:2, why:"Tính từ 2 âm tiết + 的."},
  {q:"hai quyển sách", o:["两本书","书两本","两本的书"], a:0, why:"Số lượng không có 的."},
  {q:"bộ quần áo rất đẹp", o:["很好看衣服","很好看的衣服","衣服很好看的"], a:1, why:"很 + adj + 的 + N."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","在","看","中文","书"], a:"他在看中文书。", vi:"Anh ấy đang đọc sách tiếng Trung."},
  {w:["我","喜欢","干净的","房间"], a:"我喜欢干净的房间。", vi:"Tôi thích căn phòng sạch sẽ."},
  {w:["新","书包","很","好看"], a:"新书包很好看。", vi:"Cặp sách mới rất đẹp."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"điện thoại mới của tôi", a:"我的新手机"},
  {q:"một người bạn Trung Quốc", a:"一个中国朋友"},
  {q:"Tôi thích quần áo đẹp.", a:"我喜欢好看的衣服。"}]}],
rel:["一20","一23","三45","一24"]
};
