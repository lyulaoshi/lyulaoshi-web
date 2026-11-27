// Bài ngữ pháp 【新6.16】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.16", title:"介词：除（表示排除）", vi:"除 — ngoài, trừ", tag:"词类 · 介词",
goals:[
 "Dùng <b>除……外 / 以外</b> trong văn viết: ngoài, trừ.",
 "Phân biệt trừ ra (<b>都</b>) và thêm vào (<b>还, 也</b>)."],
rules:[
 {"t": "除 + A + 外，都 / 还 …", "fx": [["除", null], ["A", ""], ["外", null], ["，", ""], ["phần còn lại", ""]], "mean": "Trừ A ra (都) · ngoài A còn (还, 也).", "ex": [["{1|除}{2|周一}{3|外}，{4|图书馆每天开放}。", "Chú zhōuyī wài, túshūguǎn měi tiān kāifàng.", "Trừ thứ Hai, thư viện mở hằng ngày."], ["{1|除}{2|工资}{3|外}，{4|公司还提供住房}。", "Chú gōngzī wài, gōngsī hái tígōng zhùfáng.", "Ngoài lương, công ty còn cấp chỗ ở."]]}],
cmp:[
 {"vn": "Vé người lớn, trẻ em miễn phí (trừ người lớn đều miễn phí).", "zh": "[除]成人[外]，儿童都免费。", "py": "Chú chéngrén wài, értóng dōu miǎnfèi.", "ok": true, "why": "除……外 gọn hơn 除了……以外."}],
ex:[
 ["[除]他之[外]，大家都同意。", "Chú tā zhī wài, dàjiā dōu tóngyì.", "Ngoài anh ấy, mọi người đều đồng ý."],
 ["本店[除]春节[外]全年营业。", "Běn diàn chú Chūnjié wài quánnián yíngyè.", "Quán mở cả năm, trừ Tết."]],
errs:[
 {"bad": "除周一，图书馆开放。", "good": "除周一外，图书馆每天开放。", "why": "Cần 外 / 以外."},
 {"bad": "外除他，都来了。", "good": "除他外，都来了。", "why": "Khung 除……外."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿此之外，没有别的办法。", "vi": "Ngoài cách này không còn cách nào.", "o": ["于", "除", "因"], "a": 1, "why": "除此之外."}, {"q": "除周末＿，他每天加班。", "vi": "Trừ cuối tuần, ngày nào anh ấy cũng tăng ca.", "o": ["中", "外", "上"], "a": 1, "why": "除……外."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["除他外，", "大家", "都", "同意"], "a": "除他外，大家都同意。", "vi": "Ngoài anh ấy, mọi người đều đồng ý."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Trừ thứ Hai, thư viện mở hằng ngày (dùng 除).", "a": "除周一外，图书馆每天开放。 / 除星期一外，图书馆每天开放。"}]}],
rel:["三28", "三38", "一16"]
};
