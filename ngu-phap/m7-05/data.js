// Bài ngữ pháp 【新7.05】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.05", title:"代词：我、彼、兹、若干", vi:"我 (phiếm chỉ), 彼, 兹, 若干", tag:"词类 · 代词",
goals:[
 "Hiểu <b>我</b> chỉ chung “bên ta” (我校, 我国) và 你…我… phiếm chỉ.",
 "Hiểu <b>彼</b> (kia), <b>兹</b> (nay, đây) trong văn trang trọng; <b>若干</b> (một số)."],
rules:[
 {"t": "我 + đơn vị / 你…我…", "fx": [["我", null], ["đơn vị", ""]], "mean": "我国 nước ta · 你一言我一语 người một câu.", "ex": [["{1|我}{2|校}今年招收新生五百人。", "Wǒ xiào jīnnián zhāoshōu xīnshēng wǔbǎi rén.", "Trường chúng tôi năm nay tuyển 500 tân sinh."], ["大家你一言{1|我}{2|一语}地讨论起来。", "Dàjiā nǐ yì yán wǒ yì yǔ de tǎolùn qilai.", "Mọi người người một câu bàn luận."]]},
 {"t": "彼 + 此 / 时", "fx": [["彼", null], ["此 / 时", ""]], "mean": "Kia (đối với 此).", "ex": [["此一时，{1|彼}{2|一时}。", "Cǐ yìshí, bǐ yìshí.", "Lúc này khác, lúc kia khác."]]},
 {"t": "兹 + V (công văn)", "fx": [["兹", null], ["V", ""]], "mean": "Nay (mở đầu giấy tờ).", "ex": [["{1|兹}{2|证明}张明是我校学生。", "Zī zhèngmíng Zhāng Míng shì wǒ xiào xuésheng.", "Nay chứng nhận Trương Minh là học sinh trường chúng tôi."]]},
 {"t": "若干 + (lượng từ) + N", "fx": [["若干", null], ["N", ""]], "mean": "Một số, vài.", "ex": [["关于这个问题的{1|若干}{2|意见}", "Guānyú zhège wèntí de ruògān yìjiàn", "Một số ý kiến về vấn đề này"]]}],
cmp:[
 {"vn": "Nước ta", "zh": "[我]国", "py": "wǒguó", "ok": true, "why": "Văn trang trọng dùng 我 thay 我们."}],
ex:[
 ["[我]方同意这个条件。", "Wǒfāng tóngyì zhège tiáojiàn.", "Phía chúng tôi đồng ý điều kiện này."],
 ["会议通过了[若干]决定。", "Huìyì tōngguòle ruògān juédìng.", "Hội nghị thông qua một số quyết định."]],
errs:[
 {"bad": "兹我昨天吃饭。", "good": "我昨天吃饭了。", "why": "兹 chỉ dùng trong công văn."},
 {"bad": "若干个很多人", "good": "若干人", "why": "若干 đã chỉ số lượng."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿证明李华曾在我公司工作。", "vi": "Nay chứng nhận…", "o": ["彼", "兹", "若干"], "a": 1, "why": "Công văn → 兹."}, {"q": "公司提出了＿条建议。", "vi": "Công ty đưa ra một số đề nghị.", "o": ["彼此", "若干", "兹"], "a": 1, "why": "Số lượng không xác định."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["此一时，", "彼一时"], "a": "此一时，彼一时。", "vi": "Lúc này khác, lúc kia khác."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Phía chúng tôi đồng ý điều kiện này (dùng 我方).", "a": "我方同意这个条件。"}]}],
rel:["新5.02", "新4.02", "新7.06"]
};
