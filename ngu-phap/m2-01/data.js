// Bài ngữ pháp 【新2.01】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新2.01", title:"后缀：—面", vi:"Hậu tố -面 — 上面, 里面, 前面…", tag:"语素 · 后缀",
goals:[
 "Ghép từ phương vị với <b>—面</b>: 上面, 下面, 里面, 外面, 前面, 后面.",
 "Biết —面 và —边 nghĩa gần như nhau: 上面 = 上边.",
 "Dùng sau danh từ để chỉ vị trí: 桌子上面."],
intro:"HSK 1 đã học —边 (上边, 前边). HSK 2 thêm hậu tố <b>—面</b> (miàn, thường đọc nhẹ mian) — nghĩa giống —边, dùng rất nhiều khi chỉ vị trí.",
rules:[
 {t:"Phương vị + 面", sub:"—面", fx:[["上 / 下 / 里 / 外 / 前 / 后",""],["面",null]], mean:"上面 trên · 下面 dưới · 里面 trong · 外面 ngoài · 前面 trước · 后面 sau.",
  ex:[["书在桌子[上面]。","Shū zài zhuōzi shàngmian.","Sách ở trên bàn."],
      ["[外面]下雨了。","Wàimian xià yǔ le.","Bên ngoài mưa rồi."],
      ["学校[后面]有一个饭店。","Xuéxiào hòumian yǒu yí gè fàndiàn.","Phía sau trường có một nhà hàng."]]}],
notes:[{t:"面 và 边", html:"<span class='zh'>里面 = 里边、外面 = 外边、前面 = 前边</span>. Riêng <span class='zh'>旁边</span> (bên cạnh) không nói 旁面."}],
cmp:[
 {vn:"trong phòng", zh:"房间[里面]", py:"fángjiān lǐmian", ok:false, tag:"(trật tự ngược)", why:"Tiếng Việt “trong” đứng trước; tiếng Trung 里面 đứng SAU danh từ."}],
ex:[
 ["你的手机在书包[里面]。","Nǐ de shǒujī zài shūbāo lǐmian.","Điện thoại của bạn ở trong cặp."],
 ["[前面]就是医院。","Qiánmian jiù shì yīyuàn.","Phía trước chính là bệnh viện."]],
errs:[
 {bad:"里面房间有人。", good:"房间里面有人。", why:"Từ phương vị đứng sau danh từ."},
 {bad:"书在上面桌子。", good:"书在桌子上面。", why:"Danh từ + 上面."},
 {bad:"他坐在我的旁面。", good:"他坐在我的旁边。", why:"Chỉ nói 旁边, không có 旁面."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trong phòng có người.", o:["里面房间有人。","房间里面有人。"], a:1, why:"Danh từ + 里面."},
  {q:"Anh ấy ngồi bên cạnh tôi.", o:["他坐在我旁边。","他坐在我旁面。"], a:0, why:"旁边."},
  {q:"外面很冷。— 外面 nghĩa là gì?", vi:"Bên ngoài rất lạnh.", o:["bên ngoài","bên trong"], a:0, why:"外面 = bên ngoài."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["书","在","桌子","上面"], a:"书在桌子上面。", vi:"Sách ở trên bàn."},
  {w:["学校","后面","有","一个","饭店"], a:"学校后面有一个饭店。", vi:"Phía sau trường có một nhà hàng."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Điện thoại ở trong cặp.", a:"手机在书包里面。/ 手机在书包里边。/ 手机在书包里。"},
  {q:"Bên ngoài mưa rồi.", a:"外面下雨了。/ 外边下雨了。"}]}],
rel:["一01","三02","新1.45","一16"]
};
