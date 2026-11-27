// Bài ngữ pháp 【新6.25】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.25", title:"A一＋量词，B一＋量词", vi:"A 一…, B 一… — người một …, kẻ một …", tag:"短语 · 固定格式",
goals:[
 "Dùng khung <b>A 一 + lượng từ，B 一 + lượng từ</b> tả nhiều thứ rải rác, thay phiên.",
 "Chọn A, B gần nghĩa hoặc đối nhau."],
rules:[
 {"t": "A 一 + LT，B 一 + LT", "fx": [["A", ""], ["一 + lượng từ", null], ["，", ""], ["B", ""], ["一 + lượng từ", null]], "mean": "Kẻ một …, người một …", "ex": [["大家{1|你}{2|一句}，{3|我}{4|一句}，很热闹。", "Dàjiā nǐ yí jù, wǒ yí jù, hěn rènao.", "Mọi người người một câu, kẻ một câu, rất rôm rả."], ["他身上{1|青}{2|一块}、{3|紫}{4|一块}的。", "Tā shēnshang qīng yí kuài, zǐ yí kuài de.", "Người anh ấy xanh một mảng tím một mảng."]]}],
cmp:[
 {"vn": "Anh một miếng, tôi một miếng", "zh": "[你一口，我一口]", "py": "nǐ yì kǒu, wǒ yì kǒu", "ok": true, "why": "Trùng cách nói tiếng Việt."}],
ex:[
 ["他们[你一下儿，我一下儿]地打了起来。", "Tāmen nǐ yíxiàr, wǒ yíxiàr de dǎle qilai.", "Họ người một cái đánh nhau."],
 ["墙上[红一块，白一块]。", "Qiáng shang hóng yí kuài, bái yí kuài.", "Tường loang đỏ loang trắng."]],
errs:[
 {"bad": "大家你说一句我。", "good": "大家你一句，我一句。", "why": "Hai vế cân nhau."},
 {"bad": "青块一紫块一。", "good": "青一块、紫一块", "why": "Màu + 一 + lượng từ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "孩子们你一个，我＿，很快分完了。", "vi": "Bọn trẻ đứa một cái, chẳng mấy chốc chia hết.", "o": ["一个", "个一", "两次"], "a": 0, "why": "Hai vế giống nhau."}, {"q": "衣服上黑一块白＿。", "vi": "Áo loang đen loang trắng.", "o": ["一块", "一句", "一口"], "a": 0, "why": "Mảng → 块."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["大家", "你一句，", "我一句"], "a": "大家你一句，我一句。", "vi": "Mọi người người một câu, kẻ một câu."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Người anh ấy xanh một mảng tím một mảng.", "a": "他身上青一块、紫一块的。 / 他身上青一块紫一块的。"}]}],
rel:["新4.23", "三33", "新6.26"]
};
