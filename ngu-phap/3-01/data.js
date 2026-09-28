// Bài ngữ pháp 【三01】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三01", title:"前缀：第-、老-、小-", vi:"Tiền tố 第-, 老-, 小- — thứ…, (gọi thân) lão…, tiểu…", tag:"语素 · 前缀",
goals:[
 "Dùng <b>第 + số</b> tạo số thứ tự: 第一、第三.",
 "Dùng <b>老 / 小 + họ</b> để gọi người thân mật: 老王、小李.",
 "Dùng <b>老 + số</b> chỉ thứ bậc anh em trong nhà: 老二."],
intro:"Tiền tố là thành phần đứng <b>trước</b> một từ để tạo từ mới. HSK 3 học ba tiền tố thường gặp: 第、老、小.",
rules:[
 {t:"第 + số: số thứ tự", sub:"第-", fx:[["第",null],["Số",""]], mean:"thứ nhất, thứ ba… (xem 【二72】).",
  ex:[["[第]一　[第]三","dì-yī　dì-sān","thứ nhất　thứ ba","等级标准"]]},
 {t:"老 / 小 + họ: cách gọi thân mật", sub:"老- · 小-", fx:[["老 / 小",null],["Họ",""]], mean:"老 + họ: gọi người lớn tuổi hơn hoặc ngang hàng, thân quen; 小 + họ: gọi người trẻ hơn. Không dùng với người lạ, cấp trên.",
  ex:[["[老]王　[小]李　[小]王","Lǎo Wáng　Xiǎo Lǐ　Xiǎo Wáng","anh / ông Vương　cậu / em Lý　cậu / em Vương","等级标准"]]},
 {t:"老 + số: thứ bậc con trong nhà", sub:"老二", fx:[["老",null],["二 / 三…",""]], mean:"老大 con cả, 老二 con thứ hai…",
  ex:[["[老]二","lǎo'èr","con thứ hai","等级标准"],
      ["他是我们家的[老]大。","Tā shì wǒmen jiā de lǎodà.","Anh ấy là con cả nhà tôi."]]}],
notes:[{t:"老师 ≠ 老 + họ", html:"老 trong <span class='zh'>老师、老虎</span> là một phần của từ, không mang nghĩa “già”."}],
cmp:[
 {vn:"anh Vương (bạn đồng nghiệp lớn tuổi)", zh:"[老]王", py:"Lǎo Wáng", ok:true, why:"Tiếng Việt gọi “anh / chú”; tiếng Trung dùng 老 + họ."},
 {vn:"lần thứ ba", zh:"[第]三次", py:"dì-sān cì", ok:true, why:"“thứ” = 第 đứng trước số."}],
ex:[
 ["[小]李，你过来一下儿。","Xiǎo Lǐ, nǐ guòlai yíxiàr.","Tiểu Lý, em qua đây một chút."],
 ["[老]张是我的同事。","Lǎo Zhāng shì wǒ de tóngshì.","Anh Trương là đồng nghiệp của tôi."],
 ["这是我[第]二次来中国。","Zhè shì wǒ dì-èr cì lái Zhōngguó.","Đây là lần thứ hai tôi đến Trung Quốc."]],
errs:[
 {bad:"一第", good:"第一", why:"第 đứng trước số."},
 {bad:"王老（ý: anh Vương）", good:"老王", why:"老 đứng trước họ."},
 {bad:"小李经理（gọi cấp trên）", good:"李经理", why:"Không gọi cấp trên, người lạ bằng 小 / 老 + họ."}],
practice:[
 {t:"A. Chọn cách nói đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"lần thứ nhất", o:["一第次","第一次","次第一"], a:1, why:"第 + số."},
  {q:"Gọi thân mật người đồng nghiệp trẻ họ Vương:", o:["王小","小王","王老"], a:1, why:"小 + họ."},
  {q:"con thứ hai trong nhà", o:["老二","二老","第老二"], a:0, why:"老 + số."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这是","我","第二次","来","中国"], a:"这是我第二次来中国。", vi:"Đây là lần thứ hai tôi đến Trung Quốc."},
  {w:["老张","是","我的","同事"], a:"老张是我的同事。", vi:"Anh Trương là đồng nghiệp của tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Anh ấy là con cả nhà tôi.", a:"他是我们家的老大。"},
  {q:"Tiểu Lý, em qua đây một chút.", a:"小李，你过来一下儿。/ 小李，你过来一下。"}]}],
rel:["二72","三02","一07","一05"]
};
