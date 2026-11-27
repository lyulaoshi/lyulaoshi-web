// Bài ngữ pháp 【新6.09】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.09", title:"频率副词：一再、再三", vi:"一再, 再三 — nhiều lần", tag:"词类 · 副词",
goals:[
 "Dùng <b>一再</b> (hết lần này đến lần khác).",
 "Dùng <b>再三</b> (năm lần bảy lượt), kể cả sau động từ: 考虑再三."],
rules:[
 {"t": "S + 一再 / 再三 + V", "fx": [["S", ""], ["一再 / 再三", null], ["V", ""]], "mean": "Lặp lại nhiều lần.", "ex": [["{1|妈妈}{2|一再}{3|提醒我注意安全}。", "Māma yízài tíxǐng wǒ zhùyì ānquán.", "Mẹ nhắc đi nhắc lại tôi chú ý an toàn."], ["{1|他}{2|再三}{3|向我道歉}。", "Tā zàisān xiàng wǒ dàoqiàn.", "Anh ấy xin lỗi tôi mấy lần liền."]]},
 {"t": "V + 再三", "fx": [["V", ""], ["再三", null]], "mean": "Chỉ 再三 đứng sau được.", "ex": [["我{1|考虑}{2|再三}，决定不去了。", "Wǒ kǎolǜ zàisān, juédìng bú qù le.", "Tôi cân nhắc mãi rồi quyết định không đi."]]}],
cmp:[
 {"vn": "Giá cả liên tục tăng.", "zh": "价格[一再]上涨。", "py": "Jiàgé yízài shàngzhǎng.", "ok": true, "why": "一再 dùng cả cho sự việc xấu lặp lại."}],
ex:[
 ["会议时间[一再]推迟。", "Huìyì shíjiān yízài tuīchí.", "Giờ họp bị hoãn hết lần này đến lần khác."],
 ["老师[再三]强调这一点。", "Lǎoshī zàisān qiángdiào zhè yì diǎn.", "Thầy nhấn mạnh điểm này nhiều lần."]],
errs:[
 {"bad": "他考虑一再。", "good": "他考虑再三。", "why": "Chỉ 再三 đứng sau động từ."},
 {"bad": "明天我一再给你打电话。", "good": "明天我再给你打电话。", "why": "Việc chưa xảy ra một lần dùng 再."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "她考虑＿，还是拒绝了。", "vi": "Cô ấy cân nhắc mãi vẫn từ chối.", "o": ["一再", "一向", "再三"], "a": 2, "why": "V + 再三."}, {"q": "公司＿提高要求。", "vi": "Công ty liên tục nâng yêu cầu.", "o": ["一时", "未必", "一再"], "a": 2, "why": "一再 + V."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "再三", "向我", "道歉"], "a": "他再三向我道歉。", "vi": "Anh ấy xin lỗi tôi mấy lần liền."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mẹ nhắc đi nhắc lại tôi chú ý an toàn.", "a": "妈妈一再提醒我注意安全。 / 妈妈再三提醒我注意安全。"}]}],
rel:["新4.08", "新5.07", "一12"]
};
