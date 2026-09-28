// Bài ngữ pháp 【一05】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一05", title:"人称代词", vi:"Đại từ nhân xưng — 我、你、您、他、她、我们…", tag:"词类 · 代词",
goals:[
 "Dùng đúng 9 đại từ nhân xưng HSK 1: <b>我、你、您、他、她、我们、你们、他们、她们</b>.",
 "Chuyển cách xưng hô nhiều tầng của tiếng Việt (anh, chị, em, cô…) sang hệ ngôi đơn giản của tiếng Trung.",
 "Biết khi nào đại từ + <b>的</b> (我的书) và khi nào bỏ 的 (我妈妈)."],
intro:"Tiếng Trung chỉ phân <b>ngôi</b> (tôi – bạn – người khác) và <b>số</b> (thêm 们). Không đổi theo tuổi tác như tiếng Việt; muốn lịch sự dùng <b>您</b>.",
rules:[
 {t:"Số ít và số nhiều: thêm 们", sub:"单数 · 复数", fx:[["我 / 你 / 他 / 她",""],["们",null]], mean:"我们 chúng tôi / chúng ta · 你们 các bạn · 他们 họ (nam hoặc cả nam lẫn nữ) · 她们 họ (toàn nữ)",
  ex:[["我们去书店，[你们]去哪儿？","Wǒmen qù shūdiàn, nǐmen qù nǎr?","Chúng tôi đi hiệu sách, các bạn đi đâu?","等级标准"],
      ["[他们]是学生。","Tāmen shì xuésheng.","Họ là học sinh.","等级标准"],
      ["[她们]是我的同学。","Tāmen shì wǒ de tóngxué.","Các bạn ấy (nữ) là bạn học của tôi.","等级标准"]]},
 {t:"您: “bạn” kính trọng", sub:"敬称", fx:[["您",null]], mean:"Dùng với thầy cô, người lớn tuổi, khách hàng. Số nhiều không nói 您们 — dùng <span class='zh'>你们 / 大家</span>.",
  ex:[["[您]好！","Nín hǎo!","Kính chào ông / bà / thầy / cô!","等级标准"],
      ["老师，[您]喝茶吗？","Lǎoshī, nín hē chá ma?","Thưa cô, cô uống trà không ạ?"]]},
 {t:"Làm chủ ngữ, tân ngữ, định ngữ", sub:"作主语 · 宾语 · 定语", fx:[["我 / 你 / 他…",""],["的",null],["Danh từ",""]], mean:"Chỉ đồ vật: <b>我的书</b>. Chỉ người thân, tập thể: thường bỏ 的 — <b>我妈妈、我们学校</b>.",
  ex:[["你好，[我]要两个本子。","Nǐ hǎo, wǒ yào liǎng ge běnzi.","Chào bạn, tôi muốn hai quyển vở.","等级标准"],
      ["[他]想喝水。","Tā xiǎng hē shuǐ.","Anh ấy muốn uống nước.","等级标准"],
      ["[她]很高。","Tā hěn gāo.","Cô ấy rất cao.","等级标准"]]}],
notes:[
 {t:"他 / 她 cùng đọc tā", html:"Nói thì như nhau, <b>viết</b> phải phân biệt: 他 (nam, hoặc không rõ), 她 (nữ). Nhóm có cả nam lẫn nữ viết <span class='zh'>他们</span>."}],
cmp:[
 {vn:"Em chào cô ạ!", zh:"老师好！/ [您]好！", py:"Lǎoshī hǎo! / Nín hǎo!", ok:true, why:"Không có “em”, “cô”; chào bằng chức danh hoặc 您."},
 {vn:"Anh ấy / Ông ấy / Cậu ấy", zh:"[他]", py:"tā", ok:true, why:"Mọi người nam ở ngôi thứ ba đều là 他."},
 {vn:"Mẹ của tôi", zh:"[我]妈妈", py:"wǒ māma", ok:true, why:"Người thân thường bỏ 的."}],
ex:[
 ["[我]是越南人，[你]呢？","Wǒ shì Yuènán rén, nǐ ne?","Tôi là người Việt Nam, còn bạn?"],
 ["[您]贵姓？","Nín guì xìng?","Ông / bà họ gì ạ?"],
 ["这是[我]的书，那是[他]的书。","Zhè shì wǒ de shū, nà shì tā de shū.","Đây là sách của tôi, kia là sách của anh ấy."],
 ["[我]爸爸是医生。","Wǒ bàba shì yīshēng.","Bố tôi là bác sĩ."],
 ["[你们]好！[我们]是新同学。","Nǐmen hǎo! Wǒmen shì xīn tóngxué.","Chào các bạn! Chúng tôi là bạn học mới."]],
errs:[
 {bad:"您们好！", good:"你们好！/ 大家好！", why:"Số nhiều lịch sự không dùng 您们."},
 {bad:"他是我妈妈。", good:"她是我妈妈。", why:"Viết 她 cho nữ."},
 {bad:"她们是我的哥哥和姐姐。", good:"他们是我的哥哥和姐姐。", why:"Nhóm có nam dùng 他们."},
 {bad:"这是我书。", good:"这是我的书。", why:"Đồ vật: cần 的."}],
practice:[
 {t:"A. Chọn đáp án đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chào thầy (lịch sự):", o:["你们好！","您好！","您们好！"], a:1, why:"Kính trọng → 您."},
  {q:"＿＿是我姐姐。(nữ)", vi:"＿＿ là chị gái tôi.", o:["他","它","她"], a:2, why:"Nữ → 她."},
  {q:"Anh trai và chị gái tôi → ＿＿都是老师。", vi:"＿＿ đều là giáo viên.", o:["他们","她们","您们"], a:0, why:"Nhóm có nam → 他们."},
  {q:"Sách của tôi:", o:["我书","我的书","的我书"], a:1, why:"Đồ vật + 的."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她们","是","我的","同学"], a:"她们是我的同学。", vi:"Các bạn ấy là bạn học của tôi."},
  {w:["我","要","两个","本子"], a:"我要两个本子。", vi:"Tôi muốn hai quyển vở."},
  {w:["我","妈妈","是","老师"], a:"我妈妈是老师。", vi:"Mẹ tôi là giáo viên."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chúng tôi là người Việt Nam, các bạn là người nước nào?", a:"我们是越南人，你们是哪国人？"},
  {q:"Cô ấy rất cao.", a:"她很高。"},
  {q:"Thưa cô, mời cô uống trà.", a:"老师，您喝茶。/ 老师，请喝茶。"}]}],
rel:["二06","一20","一24","一36"]
};
