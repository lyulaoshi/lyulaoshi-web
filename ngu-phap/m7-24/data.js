// Bài ngữ pháp 【新7.24】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.24", title:"判断副词：乃", vi:"乃 — chính là (văn ngôn)", tag:"词类 · 副词",
goals:[
 "Hiểu <b>乃</b> = 就是, 是 trong văn viết, tục ngữ.",
 "Nhận ra các câu cố định có 乃."],
rules:[
 {"t": "A + 乃 + B", "fx": [["A", ""], ["乃", null], ["B", ""]], "mean": "A chính là B.", "ex": [["{1|失败}{2|乃}{3|成功之母}。", "Shībài nǎi chénggōng zhī mǔ.", "Thất bại là mẹ thành công."], ["{1|诚信}{2|乃}{3|立身之本}。", "Chéngxìn nǎi lìshēn zhī běn.", "Thành tín là gốc làm người."], ["{1|这}{2|乃}{3|常见现象}。", "Zhè nǎi chángjiàn xiànxiàng.", "Đây là hiện tượng thường gặp."]]}],
cmp:[
 {"vn": "Có chí thì nên (câu cổ)", "zh": "有志者[乃]成", "py": "yǒuzhìzhě nǎi chéng", "ok": true, "why": "乃 còn nghĩa “bèn, mới”."}],
ex:[
 ["此[乃]人之常情。", "Cǐ nǎi rén zhī chángqíng.", "Đó là lẽ thường tình."],
 ["健康[乃]幸福的基础。", "Jiànkāng nǎi xìngfú de jīchǔ.", "Sức khỏe là nền tảng hạnh phúc."]],
errs:[
 {"bad": "我乃喜欢吃面条儿。", "good": "我就是喜欢吃面条儿。", "why": "乃 không dùng trong khẩu ngữ."},
 {"bad": "失败成功乃之母。", "good": "失败乃成功之母。", "why": "乃 đứng giữa A và B."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "勤奋＿成功的关键。", "vi": "Chăm chỉ là chìa khóa thành công.", "o": ["之", "乃", "者"], "a": 1, "why": "A 乃 B."}, {"q": "“乃” trong 失败乃成功之母 gần nghĩa:", "vi": "Chọn nghĩa.", "o": ["的", "和", "是"], "a": 2, "why": "Phán đoán."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["失败", "乃", "成功之母"], "a": "失败乃成功之母。", "vi": "Thất bại là mẹ thành công."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Thất bại là mẹ thành công (dùng 乃).", "a": "失败乃成功之母。"}]}],
rel:["一36", "新7.05", "新4.20"]
};
