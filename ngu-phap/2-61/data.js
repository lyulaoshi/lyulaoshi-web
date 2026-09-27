// Bài ngữ pháp 【二61】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二61", title:"双宾语句", vi:"Câu hai tân ngữ — cho ai cái gì", tag:"句子的类型 · 特殊句型",
goals:[
 "Đặt câu <b>S + V + tân ngữ 1 (người) + tân ngữ 2 (vật)</b>: 给我一本书.",
 "Dùng <b>V + 给 + người + vật</b> với 送、借、还、交…",
 "Nhớ thứ tự: <b>người trước, vật sau</b>."],
intro:"Một số động từ (给、送、教、问、借、告诉…) mang được <b>hai tân ngữ</b>: người nhận đứng trước, sự vật đứng sau.",
rules:[
 {t:"S + V + O1 (người) + O2 (vật)", sub:"（1）", fx:[["Chủ ngữ",""],["给 / 送 / 教 / 问…",null],["Người",""],["Vật / việc",""]], mean:"",
  ex:[["我给妹妹一本书。","Wǒ gěi mèimei yì běn shū.","Tôi cho em gái một quyển sách.","等级标准"],
      ["爸爸送我一辆汽车。","Bàba sòng wǒ yí liàng qìchē.","Bố tặng tôi một chiếc ô tô.","等级标准"]]},
 {t:"S + V + 给 + O1 + O2", sub:"（2）", fx:[["Chủ ngữ",""],["借 / 送 / 还…",""],["给",null],["Người",""],["Vật",""]], mean:"Nhấn mạnh sự chuyển giao đến người nhận.",
  ex:[["朋友借给我一千块钱。","Péngyou jiè gěi wǒ yìqiān kuài qián.","Bạn cho tôi mượn 1.000 tệ.","等级标准"],
      ["姐姐送给我一个手机。","Jiějie sòng gěi wǒ yí ge shǒujī.","Chị tặng tôi một chiếc điện thoại.","等级标准"]]}],
cmp:[
 {vn:"Mẹ cho tôi một quyển sách.", zh:"妈妈给[我][一本书]。", py:"Māma gěi wǒ yì běn shū.", ok:true, why:"Giống tiếng Việt: người trước, vật sau."},
 {vn:"Cô giáo dạy chúng tôi tiếng Trung.", zh:"老师教[我们][中文]。", py:"Lǎoshī jiāo wǒmen Zhōngwén.", ok:true, why:"教 + người + môn học."}],
ex:[
 ["我问老师一个问题。","Wǒ wèn lǎoshī yí ge wèntí.","Tôi hỏi thầy một câu hỏi."],
 ["请告诉我你的电话号码。","Qǐng gàosu wǒ nǐ de diànhuà hàomǎ.","Hãy cho tôi biết số điện thoại của bạn."],
 ["他还给我一本书。","Tā huán gěi wǒ yì běn shū.","Anh ấy trả lại tôi một quyển sách."]],
errs:[
 {bad:"我给一本书妹妹。", good:"我给妹妹一本书。", why:"Người trước, vật sau."},
 {bad:"老师教中文我们。", good:"老师教我们中文。", why:"Người trước, vật sau."},
 {bad:"我说他一件事。", good:"我告诉他一件事。", why:"说 không mang hai tân ngữ; dùng 告诉."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi cho em gái một quyển sách.", o:["我给一本书妹妹。","我给妹妹一本书。","我妹妹给一本书。"], a:1, why:"V + người + vật."},
  {q:"Bạn cho tôi mượn 1.000 tệ.", o:["朋友借给我一千块钱。","朋友借一千块钱我。","朋友给借我一千块钱。"], a:0, why:"V + 给 + người + vật."},
  {q:"Hãy cho tôi biết số điện thoại.", o:["请说我你的电话号码。","请告诉我你的电话号码。","请告诉你的电话号码我。"], a:1, why:"告诉 + người + việc."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["爸爸","送","我","一辆","汽车"], a:"爸爸送我一辆汽车。", vi:"Bố tặng tôi một chiếc ô tô."},
  {w:["姐姐","送给","我","一个","手机"], a:"姐姐送给我一个手机。", vi:"Chị tặng tôi một chiếc điện thoại."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi hỏi thầy một câu hỏi.", a:"我问老师一个问题。"},
  {q:"Cô giáo dạy chúng tôi tiếng Trung.", a:"老师教我们中文。"}]}],
rel:["二26","一26","三54","二60"]
};
