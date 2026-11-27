// Bài ngữ pháp 【新7.49】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.49", title:"假设复句：假若／假使……，……；幸亏／幸好……，不然／否则……；纵然／纵使……，也……", vi:"Giả sử…; may mà… không thì…; dẫu cho… cũng…", tag:"句子的类型 · 复句",
goals:[
 "Giả thiết văn viết <b>假若 / 假使</b>.",
 "Dùng <b>幸亏……不然……</b> và <b>纵然……也……</b>."],
rules:[
 {"t": "假若 / 假使 + giả thiết，…", "fx": [["假若 / 假使", null], ["giả thiết", ""], ["，", ""], ["kết quả", ""]], "mean": "Giả sử.", "ex": [["{1|假若}{2|没有水}，{3|人类就无法生存}。", "Jiǎruò méiyǒu shuǐ, rénlèi jiù wúfǎ shēngcún.", "Giả sử không có nước, loài người không thể sống."]]},
 {"t": "幸亏 / 幸好 + A，不然 / 否则 + B", "fx": [["幸亏 / 幸好", null], ["A", ""], ["，", ""], ["不然 / 否则", null], ["B", ""]], "mean": "May mà …, không thì …", "ex": [["{1|幸好}{2|发现得早}，{3|否则}{4|后果很严重}。", "Xìnghǎo fāxiàn de zǎo, fǒuzé hòuguǒ hěn yánzhòng.", "May phát hiện sớm, không thì hậu quả nghiêm trọng."]]},
 {"t": "纵然 / 纵使 + A，也 + B", "fx": [["纵然 / 纵使", null], ["A", ""], ["，", ""], ["也", null], ["B", ""]], "mean": "Dẫu cho … cũng.", "ex": [["{1|纵然}{2|困难再大}，{3|也}{4|不能退缩}。", "Zòngrán kùnnan zài dà, yě bù néng tuìsuō.", "Dẫu khó đến mấy cũng không được chùn bước."]]}],
cmp:[
 {"vn": "Giả sử là tôi", "zh": "[假使]是我", "py": "jiǎshǐ shì wǒ", "ok": true, "why": "假使 = giả sử."}],
ex:[
 ["[假使]时间可以倒流，你想做什么？", "Jiǎshǐ shíjiān kěyǐ dàoliú, nǐ xiǎng zuò shénme?", "Nếu thời gian quay lại, bạn muốn làm gì?"],
 ["[纵使]全世界反对，我[也]相信你。", "Zòngshǐ quán shìjiè fǎnduì, wǒ yě xiāngxìn nǐ.", "Dẫu cả thế giới phản đối, tôi vẫn tin bạn."]],
errs:[
 {"bad": "纵然下雨，但是去。", "good": "纵然下雨，也要去。", "why": "纵然 đi với 也."},
 {"bad": "幸亏他来了，所以不然。", "good": "幸亏他来了，不然我就麻烦了。", "why": "不然 nêu hậu quả xấu."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿失败一百次，我也要再试。", "vi": "Dẫu thất bại trăm lần…", "o": ["纵然", "幸亏", "以免"], "a": 0, "why": "纵然…也."}, {"q": "幸亏带了地图，＿就迷路了。", "vi": "May mang bản đồ, không thì lạc.", "o": ["不然", "纵然", "假若"], "a": 0, "why": "幸亏…不然."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["纵然", "困难再大，", "也不能", "退缩"], "a": "纵然困难再大，也不能退缩。", "vi": "Dẫu khó đến mấy cũng không được chùn bước."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "May phát hiện sớm, không thì hậu quả rất nghiêm trọng.", "a": "幸好发现得早，否则后果很严重。 / 幸亏发现得早，不然后果很严重。"}]}],
rel:["新6.45", "新5.38", "新7.23"]
};
