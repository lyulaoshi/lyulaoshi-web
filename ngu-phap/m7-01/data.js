// Bài ngữ pháp 【新7.01】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.01", title:"类前缀：后—、亲—", vi:"Tiền tố 后-, 亲-", tag:"语素 · 类前缀",
goals:[
 "Dùng <b>后—</b> = hậu (sau thời kỳ nào).",
 "Dùng <b>亲—</b> = thân (nghiêng về) hoặc ruột thịt."],
rules:[
 {"t": "后 + danh từ", "fx": [["后", null], ["Danh từ", ""]], "mean": "Hậu: giai đoạn sau.", "ex": [["这是一个{1|后}{2|工业}社会。", "Zhè shì yí gè hòu gōngyè shèhuì.", "Đây là xã hội hậu công nghiệp."], ["{1|后}{2|现代}艺术很难懂。", "Hòu xiàndài yìshù hěn nán dǒng.", "Nghệ thuật hậu hiện đại khó hiểu."]]},
 {"t": "亲 + danh từ", "fx": [["亲", null], ["Danh từ", ""]], "mean": "Ruột thịt (亲兄弟) · thân, nghiêng về (亲华).", "ex": [["他们是{1|亲}{2|兄弟}。", "Tāmen shì qīn xiōngdì.", "Họ là anh em ruột."], ["这是一个{1|亲}{2|民}政策。", "Zhè shì yí gè qīnmín zhèngcè.", "Đây là chính sách thân dân."]]}],
cmp:[
 {"vn": "Hậu đại học (sau đại học)", "zh": "[后]大学时代", "py": "hòu dàxué shídài", "ok": true, "why": "后 như “hậu” Hán Việt."}],
ex:[
 ["进入[后]疫情时代，生活慢慢恢复。", "Jìnrù hòu yìqíng shídài, shēnghuó mànmàn huīfù.", "Bước vào thời hậu dịch, đời sống dần phục hồi."],
 ["她是我的[亲]姐姐。", "Tā shì wǒ de qīn jiějie.", "Chị ấy là chị ruột tôi."]],
errs:[
 {"bad": "工业后社会", "good": "后工业社会", "why": "后 đứng trước."},
 {"bad": "兄弟亲", "good": "亲兄弟", "why": "亲 đứng trước."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他们俩长得像，原来是＿姐妹。", "vi": "Hóa ra là chị em ruột.", "o": ["亲", "后", "超"], "a": 0, "why": "亲姐妹."}, {"q": "学者在研究＿现代主义。", "vi": "Học giả nghiên cứu chủ nghĩa hậu hiện đại.", "o": ["后", "亲", "反复"], "a": 0, "why": "后现代."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["她", "是", "我的", "亲姐姐"], "a": "她是我的亲姐姐。", "vi": "Chị ấy là chị ruột tôi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Họ là anh em ruột.", "a": "他们是亲兄弟。"}]}],
rel:["新6.01", "新7.02"]
};
