// Bài ngữ pháp 【一01】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一01", title:"方位名词", vi:"Danh từ phương vị — trên, dưới, trong, ngoài…", tag:"词类 · 名词",
goals:[
 "Dùng 12 phương vị đơn <b>上、下、里、外、前、后、左、右、东、南、西、北</b> và dạng kép <b>……边</b>.",
 "Nhớ trật tự ngược tiếng Việt: <b>danh từ + phương vị</b> (桌子上 = “trên bàn”).",
 "Biến một đồ vật thành <b>nơi chốn</b> để dùng với 在、有、去."],
intro:"Tiếng Việt nói “<b>trên</b> bàn, <b>trong</b> phòng” — phương vị đứng <b>trước</b>. Tiếng Trung đặt phương vị <b>sau</b> danh từ: 桌子<b>上</b>, 房间<b>里</b>.",
rules:[
 {t:"Phương vị đơn sau danh từ", sub:"上、下、里、外、前、后", fx:[["Danh từ","vật làm mốc"],["上 / 下 / 里 / 外 / 前 / 后",null]], mean:"trên / dưới / trong / ngoài / trước / sau + vật đó",
  ex:[["桌子[上]　树[下]　房间[里]","zhuōzi shang　shù xià　fángjiān li","trên bàn　dưới cây　trong phòng","等级标准"],
      ["门[外]　楼[前]　门[后]","mén wài　lóu qián　mén hòu","ngoài cửa　trước toà nhà　sau cửa","等级标准"]]},
 {t:"Phương vị kép: ……边", sub:"上边、里边、东边…", fx:[["Danh từ","(có thể thêm 的)"],["上边 / 里边 / 前边 / 东边…",null]], mean:"Dạng kép <b>đứng một mình được</b> (前边 = phía trước) và đứng sau danh từ, có thể thêm 的.",
  ex:[["桌子[上边]　书包[里边]","zhuōzi shàngbian　shūbāo lǐbian","trên mặt bàn　bên trong cặp sách","等级标准"],
      ["饭店的[前边]　图书馆的[北边]","fàndiàn de qiánbian　túshūguǎn de běibian","phía trước nhà hàng　phía bắc thư viện","等级标准"]]},
 {t:"Phương vị kép làm định ngữ", sub:"方位词 + 的 + N", fx:[["东边 / 南边…",null],["的",null],["Danh từ","vật được nói tới"]], mean:"“… ở phía đông / phía nam”: phương vị + 的 đứng <b>trước</b> danh từ.",
  ex:[["[东边的]车站　[南边的]房子","dōngbian de chēzhàn　nánbian de fángzi","nhà ga phía đông　ngôi nhà phía nam","等级标准"]]}],
notes:[
 {t:"Nơi chốn", html:"Đồ vật (桌子, 书包…) chưa phải nơi chốn; phải thêm phương vị mới đi được với <span class='zh'>在 / 有</span>: <span class='zh'>书在桌子上。</span> Tên nước, thành phố thì <b>không</b> thêm 里: <span class='zh'>在中国、在北京</span>."},
 {t:"Đọc", html:"上、里 sau danh từ thường đọc nhẹ (thanh nhẹ): <span class='zh'>桌子上 zhuōzi shang, 房间里 fángjiān li</span>."}],
cmp:[
 {vn:"Sách ở trên bàn.", zh:"书在桌子[上]。", py:"Shū zài zhuōzi shang.", ok:true, why:"“trên” đứng trước “bàn”, còn 上 đứng sau 桌子."},
 {vn:"Trong phòng không có ai.", zh:"房间[里]没有人。", py:"Fángjiān li méiyǒu rén.", ok:true, why:"Nơi chốn + 有 / 没有 + người, vật 【一37】."},
 {vn:"Nhà ga phía đông", zh:"[东边的]车站", py:"dōngbian de chēzhàn", ok:true, why:"Phần bổ nghĩa (phía đông) đứng trước danh từ."},
 {vn:"Tôi ở trong Hà Nội.", zh:"我在河内。", py:"Wǒ zài Hénèi.", ok:false, tag:"(không thêm 里)", why:"Địa danh đã là nơi chốn."}],
ex:[
 ["书在桌子[上]。","Shū zài zhuōzi shang.","Sách ở trên bàn.","等级标准"],
 ["手机在书包[里]。","Shǒujī zài shūbāo li.","Điện thoại ở trong cặp sách.","等级标准"],
 ["房间[里]没有人。","Fángjiān li méiyǒu rén.","Trong phòng không có ai.","等级标准"],
 ["他去[东边的]车站。","Tā qù dōngbian de chēzhàn.","Anh ấy đi đến nhà ga phía đông.","等级标准"],
 ["我家在学校[后边]。","Wǒ jiā zài xuéxiào hòubian.","Nhà tôi ở phía sau trường."],
 ["[外边]很冷，[里边]很热。","Wàibian hěn lěng, lǐbian hěn rè.","Bên ngoài rất lạnh, bên trong rất nóng."],
 ["医院在银行[左边]。","Yīyuàn zài yínháng zuǒbian.","Bệnh viện ở bên trái ngân hàng."]],
errs:[
 {bad:"手机在里书包。", good:"手机在书包里。", why:"Phương vị đứng <b>sau</b> danh từ, ngược tiếng Việt."},
 {bad:"书在桌子。", good:"书在桌子上。", why:"桌子 là đồ vật, cần 上 mới thành nơi chốn."},
 {bad:"我在北京里。", good:"我在北京。", why:"Tên thành phố, nước không thêm 里."},
 {bad:"他在前边学校。", good:"他在学校前边。", why:"“trước trường” = 学校前边."},
 {bad:"北边的图书馆是银行。", good:"图书馆的北边是银行。", why:"Muốn nói “phía bắc của thư viện” thì 图书馆 đứng trước: 图书馆(的)北边."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Điện thoại ở trong cặp sách.", o:["手机在里书包。","手机在书包里。","手机书包里在。"], a:1, why:"书包里 = trong cặp."},
  {q:"Sách ở trên bàn.", o:["书在桌子。","书在上桌子。","书在桌子上。"], a:2, why:"Đồ vật + 上 = nơi chốn."},
  {q:"Tôi ở Hà Nội.", o:["我在河内里。","我在河内。","我河内在。"], a:1, why:"Địa danh không thêm 里."},
  {q:"phía trước thư viện", o:["前边图书馆","图书馆前边","前图书馆边"], a:1, why:"Danh từ + 前边."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["手机","在","书包","里"], a:"手机在书包里。", vi:"Điện thoại ở trong cặp sách."},
  {w:["房间","里","没有","人"], a:"房间里没有人。", vi:"Trong phòng không có ai."},
  {w:["他","去","东边的","车站"], a:"他去东边的车站。", vi:"Anh ấy đi đến nhà ga phía đông."},
  {w:["我家","在","学校","后边"], a:"我家在学校后边。", vi:"Nhà tôi ở phía sau trường."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cặp sách ở dưới gầm bàn.", a:"书包在桌子下（边）。"},
  {q:"Bên ngoài rất lạnh.", a:"外边很冷。"},
  {q:"Nhà tôi ở phía bắc trường học.", a:"我家在学校（的）北边。"},
  {q:"Cửa hàng ở bên phải là của bạn tôi.", a:"右边的商店是我朋友的。"}]}],
rel:["一16","一37","一36","三32"]
};
