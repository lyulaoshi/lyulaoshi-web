// Bài ngữ pháp 【新4.44】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.44", title:"说什么／怎么（着）也得X", vi:"说什么也得, 怎么着也得 — nói gì thì cũng phải …", tag:"短语 · 固定格式",
goals:[
 "Thể hiện <b>quyết tâm</b>: nói gì cũng phải làm.",
 "Dùng 说什么也得 / 怎么（着）也得 + V.",
 "Dạng 怎么着也得 còn nghĩa “ít nhất cũng phải” (ước lượng)."],
intro:"“<b>Dù thế nào cũng phải</b> đi.” → 说什么<b>也得</b>去。得 đọc <b>děi</b>.",
rules:[
 {t:"S + 说什么 / 怎么(着) + 也得 + V", sub:"（1）quyết tâm", fx:[["S",""],["说什么 / 怎么着",null],["也得",null],["V",""]], mean:"Dù sao cũng phải.",
  ex:[["今天{1|我}{2|说什么}{3|也得}{4|把作业做完}。","Jīntiān wǒ shuō shénme yě děi bǎ zuòyè zuòwán.","Hôm nay nói gì tôi cũng phải làm xong bài tập."]]},
 {t:"怎么着也得 + số lượng", sub:"（2）ít nhất", fx:[["việc",""],["怎么着也得",null],["số lượng",""]], mean:"Ít ra cũng phải …",
  ex:[["{1|修好这台电脑}，{2|怎么着也得}{3|两天}。","Xiūhǎo zhè tái diànnǎo, zěnmezhe yě děi liǎng tiān.","Sửa xong máy này ít cũng phải hai ngày."]]}],
cmp:[
 {vn:"Dù sao tôi cũng phải đi thăm bà.", zh:"我[怎么也得]去看看奶奶。", py:"Wǒ zěnme yě děi qù kànkan nǎinai.", ok:true, why:"怎么也得 = dù sao cũng phải."}],
ex:[
 ["你难得来一次，[说什么也得]吃了饭再走。","Nǐ nándé lái yí cì, shuō shénme yě děi chīle fàn zài zǒu.","Hiếm khi bạn đến, nói gì cũng phải ăn cơm rồi hãy về."],
 ["这个机会很好，我[怎么着也得]试一试。","Zhège jīhuì hěn hǎo, wǒ zěnmezhe yě děi shì yi shì.","Cơ hội này tốt, dù sao tôi cũng phải thử."],
 ["从这儿走到车站，[怎么也得]半个小时。","Cóng zhèr zǒudào chēzhàn, zěnme yě děi bàn gè xiǎoshí.","Đi bộ từ đây ra bến ít cũng nửa tiếng."]],
errs:[
 {bad:"我说什么得也去。", good:"我说什么也得去。", why:"也 đứng trước 得."},
 {bad:"我说什么也不得去。（muốn nói phải đi）", good:"我说什么也得去。", why:"也得 = phải; muốn phủ định: 说什么也不去."},
 {bad:"怎么着我也得了试试。", good:"我怎么着也得试试。", why:"得 đọc děi, không thêm 了."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Dù sao tôi cũng phải thử.", o:["我怎么着也得试试。","我怎么着得也试试。"], a:0, why:"也得 + V."},
  {q:"修好电脑怎么着也得两天。", vi:"Chọn nghĩa của câu.", o:["Ít nhất cũng phải hai ngày","Tối đa chỉ hai ngày"], a:0, why:"Ước lượng mức tối thiểu."},
  {q:"你难得来一次，说什么也得吃了饭＿走。", vi:"Hiếm khi bạn đến, nói gì cũng phải ăn cơm rồi hãy về.", o:["再","又","也"], a:0, why:"……了再…… = xong rồi mới."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","说什么","也得","把作业","做完"], a:"我说什么也得把作业做完。", vi:"Nói gì tôi cũng phải làm xong bài tập."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Dù sao tôi cũng phải thử.", a:"我怎么也得试试。/ 我怎么着也得试试。/ 我说什么也得试试。/ 我怎么也得试一试。/ 我怎么着也得试一试。"}]}],
rel:["新4.39","新4.34","三04"]
};
