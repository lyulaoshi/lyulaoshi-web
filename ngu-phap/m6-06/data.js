// Bài ngữ pháp 【新6.06】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.06", title:"程度副词：特、异常、较为", vi:"特, 异常, 较为 — rất, khác thường, tương đối", tag:"词类 · 副词",
goals:[
 "Dùng <b>特</b> trong khẩu ngữ = 特别.",
 "Dùng <b>异常</b> (vô cùng) và <b>较为</b> (tương đối) trong văn viết."],
rules:[
 {"t": "特 + Adj", "fx": [["特", null], ["Adj / V tâm lý", ""]], "mean": "Khẩu ngữ: cực.", "ex": [["这家的菜{1|特}{2|好吃}。", "Zhè jiā de cài tè hǎochī.", "Món nhà này ngon cực."]]},
 {"t": "异常 + Adj", "fx": [["异常", null], ["Adj", ""]], "mean": "Vô cùng, khác thường (thường 2 âm tiết).", "ex": [["听到这个消息，他{1|异常}{2|激动}。", "Tīngdào zhège xiāoxi, tā yìcháng jīdòng.", "Nghe tin, anh ấy xúc động khác thường."]]},
 {"t": "较为 + Adj", "fx": [["较为", null], ["Adj", ""]], "mean": "Tương đối (trang trọng).", "ex": [["目前的情况{1|较为}{2|复杂}。", "Mùqián de qíngkuàng jiàowéi fùzá.", "Tình hình hiện tại tương đối phức tạp."]]}],
cmp:[
 {"vn": "Giá ở đây khá rẻ.", "zh": "这里的价格[较为]便宜。", "py": "Zhèlǐ de jiàgé jiàowéi piányi.", "ok": true, "why": "Văn trang trọng dùng 较为."}],
ex:[
 ["今天天气[异常]闷热。", "Jīntiān tiānqì yìcháng mēnrè.", "Hôm nay trời oi bức khác thường."],
 ["我[特]喜欢这首歌。", "Wǒ tè xǐhuan zhè shǒu gē.", "Tôi cực thích bài này."]],
errs:[
 {"bad": "他异常很高兴。", "good": "他异常高兴。", "why": "Không thêm 很."},
 {"bad": "这个较为好。", "good": "这个办法较为合适。", "why": "较为 đi với tính từ hai âm tiết."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "湖水＿平静。", "vi": "Mặt hồ yên ả lạ thường.", "o": ["特地", "异常", "一向"], "a": 1, "why": "异常 + Adj."}, {"q": "这种方法＿简单。", "vi": "Cách này tương đối đơn giản.", "o": ["不禁", "未必", "较为"], "a": 2, "why": "较为 = tương đối."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["听到这个消息，", "他", "异常", "激动"], "a": "听到这个消息，他异常激动。", "vi": "Nghe tin, anh ấy xúc động khác thường."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Món nhà này ngon cực (dùng 特).", "a": "这家的菜特好吃。 / 这家菜特好吃。"}]}],
rel:["新5.05", "新4.05", "三12"]
};
