// Bài ngữ pháp 【二37】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二37", title:"基本结构类型", vi:"5 kiểu cấu trúc cụm từ cơ bản", tag:"短语 · 结构类型",
goals:[
 "Nhận biết 5 kiểu cụm từ: <b>联合、偏正、动宾、动补、主谓</b>.",
 "Nhớ nguyên tắc <b>phần phụ đứng trước phần chính</b> (偏正) — ngược tiếng Việt.",
 "Phân biệt 动宾 (động + tân) với 动补 (động + bổ ngữ)."],
intro:"Mọi câu tiếng Trung đều ghép từ vài kiểu cụm từ cơ bản. Hiểu 5 kiểu này giúp đọc câu dài dễ hơn.",
rules:[
 {t:"联合: ngang hàng", sub:"联合短语", fx:[["A",""],["(和 / 又…又…)",null],["B",""]], mean:"Hai phần ngang nhau.",
  ex:[["北京上海　我和他　又大又干净　去不去","Běijīng Shànghǎi　wǒ hé tā　yòu dà yòu gānjìng　qù bu qù","Bắc Kinh, Thượng Hải　tôi và anh ấy　vừa rộng vừa sạch　đi hay không","等级标准"]]},
 {t:"偏正: phụ + chính", sub:"偏正短语", fx:[["Phần phụ","的 / 地"],["Phần chính",null]], mean:"Định ngữ + danh từ, trạng ngữ + động từ / tính từ. Phần phụ luôn đứng <b>trước</b>.",
  ex:[["新衣服　学校的图书馆　认真学习　特别开心","xīn yīfu　xuéxiào de túshūguǎn　rènzhēn xuéxí　tèbié kāixīn","quần áo mới　thư viện của trường　học chăm chỉ　đặc biệt vui","等级标准"]]},
 {t:"动宾: động từ + tân ngữ", sub:"动宾短语", fx:[["Động từ",null],["Tân ngữ",""]], mean:"",
  ex:[["买东西　吃水果　学习中文　进教室","mǎi dōngxi　chī shuǐguǒ　xuéxí Zhōngwén　jìn jiàoshì","mua đồ　ăn hoa quả　học tiếng Trung　vào lớp","等级标准"]]},
 {t:"动补: động từ + bổ ngữ", sub:"动补短语", fx:[["Động từ",null],["Bổ ngữ","kết quả, xu hướng, trạng thái, số lượng"]], mean:"Bổ ngữ nói kết quả, hướng, mức độ, số lần của động từ.",
  ex:[["听清楚　走来　说得很高兴　听两遍","tīng qīngchu　zǒulai　shuō de hěn gāoxìng　tīng liǎng biàn","nghe rõ　đi tới　nói rất vui　nghe hai lượt","等级标准"]]},
 {t:"主谓: chủ ngữ + vị ngữ", sub:"主谓短语", fx:[["Chủ ngữ",""],["Vị ngữ",null]], mean:"Cụm có cấu tạo như một câu, có thể làm thành phần của câu lớn hơn.",
  ex:[["我休息　他出国　教室很大　学习认真","wǒ xiūxi　tā chū guó　jiàoshì hěn dà　xuéxí rènzhēn","tôi nghỉ　anh ấy ra nước ngoài　lớp học rộng　học chăm","等级标准"]]}],
cmp:[
 {vn:"quần áo mới", zh:"[新]衣服", py:"xīn yīfu", ok:true, why:"偏正: phần phụ (新) trước — ngược tiếng Việt."},
 {vn:"học chăm chỉ", zh:"[认真]学习", py:"rènzhēn xuéxí", ok:true, why:"偏正: trạng ngữ trước động từ — ngược tiếng Việt."},
 {vn:"nghe rõ", zh:"听[清楚]", py:"tīng qīngchu", ok:true, why:"动补: bổ ngữ sau động từ — giống tiếng Việt."}],
ex:[
 ["我[和]他都是学生。","Wǒ hé tā dōu shì xuésheng.","Tôi và anh ấy đều là học sinh."],
 ["这是[学校的]图书馆。","Zhè shì xuéxiào de túshūguǎn.","Đây là thư viện của trường."],
 ["我听[清楚]了。","Wǒ tīng qīngchu le.","Tôi nghe rõ rồi."],
 ["[教室很大]，也很干净。","Jiàoshì hěn dà, yě hěn gānjìng.","Lớp học rộng, cũng rất sạch."]],
errs:[
 {bad:"我买了衣服新。", good:"我买了新衣服。", why:"偏正: phụ trước chính."},
 {bad:"学习认真地", good:"认真地学习", why:"Trạng ngữ đứng trước động từ."},
 {bad:"清楚听", good:"听清楚", why:"Bổ ngữ đứng sau động từ."}],
practice:[
 {t:"A. Đây là kiểu cụm từ nào?", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"又大又干净", o:["联合","偏正","动宾","动补","主谓"], a:0, why:"Ngang hàng."},
  {q:"学校的图书馆", o:["联合","偏正","动宾","动补","主谓"], a:1, why:"Phụ + chính."},
  {q:"学习中文", o:["联合","偏正","动宾","动补","主谓"], a:2, why:"Động + tân."},
  {q:"听两遍", o:["联合","偏正","动宾","动补","主谓"], a:3, why:"Động + bổ."},
  {q:"教室很大", o:["联合","偏正","动宾","动补","主谓"], a:4, why:"Chủ + vị."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这","是","学校的","图书馆"], a:"这是学校的图书馆。", vi:"Đây là thư viện của trường."},
  {w:["我们","认真","学习","中文"], a:"我们认真学习中文。", vi:"Chúng tôi chăm chỉ học tiếng Trung."}]},
 {t:"C. Cho 2 ví dụ mỗi kiểu", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"动宾", a:"看书、喝茶、打电话…"},
  {q:"偏正", a:"好朋友、很高兴、中文书…"},
  {q:"动补", a:"看完、写错、听懂…"}]}],
rel:["二38","二39","二40","二41"]
};
