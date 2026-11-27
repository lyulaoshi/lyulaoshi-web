// Bài ngữ pháp 【新6.27】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.27", title:"到……为止", vi:"到…为止 — cho đến …", tag:"短语 · 固定格式",
goals:[
 "Nêu <b>điểm kết thúc</b> bằng 到……为止.",
 "Dùng 到目前为止, 到此为止."],
rules:[
 {"t": "到 + mốc + 为止，…", "fx": [["到", null], ["mốc", ""], ["为止", null], ["，", ""], ["tình hình", ""]], "mean": "Tính đến, cho đến hết.", "ex": [["{1|到}{2|目前}{3|为止}，{4|报名的人已经超过一百}。", "Dào mùqián wéizhǐ, bàomíng de rén yǐjīng chāoguò yìbǎi.", "Tính đến nay người đăng ký đã hơn 100."], ["今天的课就{1|到}{2|这儿}{3|为止}。", "Jīntiān de kè jiù dào zhèr wéizhǐ.", "Bài hôm nay dừng ở đây."]]}],
cmp:[
 {"vn": "Cho đến hôm qua vẫn chưa có tin.", "zh": "[到]昨天[为止]，还没有消息。", "py": "Dào zuótiān wéizhǐ, hái méiyǒu xiāoxi.", "ok": true, "why": "为止 đứng sau mốc."}],
ex:[
 ["我的报告[到此为止]。", "Wǒ de bàogào dào cǐ wéizhǐ.", "Báo cáo của tôi đến đây là hết."],
 ["[到]月底[为止]都可以报名。", "Dào yuèdǐ wéizhǐ dōu kěyǐ bàomíng.", "Đăng ký được đến hết tháng."]],
errs:[
 {"bad": "为止到现在没有问题。", "good": "到现在为止没有问题。", "why": "到……为止."},
 {"bad": "到现在为了止，没问题。", "good": "到现在为止，没问题。", "why": "Cụm cố định 为止."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "到目前＿，一切顺利。", "vi": "Đến giờ mọi thứ suôn sẻ.", "o": ["为止", "以来", "来看"], "a": 0, "why": "到……为止."}, {"q": "今天就到这儿＿。", "vi": "Hôm nay đến đây thôi.", "o": ["为止", "为了", "之间"], "a": 0, "why": "为止."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["到目前", "为止，", "一切", "顺利"], "a": "到目前为止，一切顺利。", "vi": "Đến giờ mọi thứ suôn sẻ."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Đăng ký được đến hết tháng (dùng 为止).", "a": "到月底为止都可以报名。"}]}],
rel:["新5.21", "新5.02", "三39"]
};
