// Bài ngữ pháp 【新6.35】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.35", title:"这／那也不X，那／这也不Y", vi:"这也不…那也不… — cái này cũng không, cái kia cũng chẳng", tag:"短语 · 固定格式",
goals:[
 "Phàn nàn ai <b>không chịu gì cả</b> hoặc bị cấm đủ thứ.",
 "Giữ cặp <b>这也不……那也不……</b>."],
rules:[
 {"t": "这也不 X，那也不 Y", "fx": [["这也不", null], ["X", ""], ["，", ""], ["那也不", null], ["Y", ""]], "mean": "Này cũng không, kia cũng không.", "ex": [["他{1|这也不}{2|吃}，{3|那也不}{4|吃}。", "Tā zhè yě bù chī, nà yě bù chī.", "Nó cái này không ăn, cái kia cũng không."], ["妈妈{1|这也不}{2|让做}，{3|那也不}{4|让做}。", "Māma zhè yě bú ràng zuò, nà yě bú ràng zuò.", "Mẹ chẳng cho làm cái gì cả."]]}],
cmp:[
 {"vn": "Kén cá chọn canh", "zh": "[这也不好，那也不行]", "py": "zhè yě bù hǎo, nà yě bùxíng", "ok": true, "why": "Tương đương “cái gì cũng chê”."}],
ex:[
 ["你[这也不懂，那也不会]，得学学了。", "Nǐ zhè yě bù dǒng, nà yě bú huì, děi xuéxue le.", "Cái gì cũng không biết, phải học đi."],
 ["老人[这也不放心，那也不放心]。", "Lǎorén zhè yě bú fàngxīn, nà yě bú fàngxīn.", "Người già cái gì cũng không yên tâm."]],
errs:[
 {"bad": "他不也这吃，不也那吃。", "good": "他这也不吃，那也不吃。", "why": "这 / 那 + 也不."},
 {"bad": "这不也吃那不也吃。", "good": "这也不吃，那也不吃。", "why": "也 trước 不."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "她这也不满意，＿也不满意。", "vi": "Cái gì cô ấy cũng không vừa ý.", "o": ["哪儿的", "它们", "那"], "a": 2, "why": "这…那…."}, {"q": "这＿不行，那也不行，到底怎么办？", "vi": "Thế này không được, thế kia không xong, rốt cuộc làm sao?", "o": ["就", "也", "才"], "a": 1, "why": "这也不."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "这也不吃，", "那也不吃"], "a": "他这也不吃，那也不吃。", "vi": "Nó cái này không ăn, cái kia cũng không."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mẹ chẳng cho làm cái gì cả (dùng 这也不……那也不).", "a": "妈妈这也不让做，那也不让做。"}]}],
rel:["新6.21", "三07", "新4.34"]
};
