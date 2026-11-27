// Bài ngữ pháp 【新7.19】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.19", title:"否定副词：不见得、绝不、无从、无须、无可、勿", vi:"不见得, 绝不, 无从, 无须, 无可, 勿", tag:"词类 · 副词",
goals:[
 "Dùng <b>不见得</b> (chưa hẳn), <b>绝不</b> (quyết không).",
 "Dùng <b>无从, 无须, 无可, 勿</b> trong văn viết."],
rules:[
 {"t": "不见得 / 绝不 + V", "fx": [["不见得 / 绝不", null], ["V / Adj", ""]], "mean": "不见得 chưa chắc · 绝不 tuyệt đối không.", "ex": [["贵的{1|不见得}{2|好}。", "Guì de bújiànde hǎo.", "Đắt chưa chắc đã tốt."], ["我们{1|绝不}{2|放弃}。", "Wǒmen juébù fàngqì.", "Chúng tôi quyết không bỏ cuộc."]]},
 {"t": "无从 / 无须 + V", "fx": [["无从 / 无须", null], ["V", ""]], "mean": "Không biết từ đâu mà · không cần.", "ex": [["材料太少，{1|无从}{2|判断}。", "Cáiliào tài shǎo, wúcóng pànduàn.", "Tư liệu quá ít, không có cơ sở phán đoán."], ["这件事{1|无须}{2|担心}。", "Zhè jiàn shì wúxū dānxīn.", "Việc này không cần lo."]]},
 {"t": "无可 + V / 勿 + V", "fx": [["无可 / 勿", null], ["V", ""]], "mean": "无可 không thể … được · 勿 chớ, đừng (biển báo).", "ex": [["事实{1|无可}{2|否认}。", "Shìshí wúkě fǒurèn.", "Sự thật không thể chối cãi."], ["请{1|勿}{2|吸烟}。", "Qǐng wù xīyān.", "Xin đừng hút thuốc."]]}],
cmp:[
 {"vn": "Không thể chê vào đâu được.", "zh": "[无可]挑剔", "py": "wúkě tiāoti", "ok": true, "why": "无可 + V."}],
ex:[
 ["他[不见得]会同意。", "Tā bújiànde huì tóngyì.", "Anh ấy chưa chắc đồng ý."],
 ["刚来这里，我[无从]下手。", "Gāng lái zhèlǐ, wǒ wúcóng xiàshǒu.", "Mới đến, tôi không biết bắt đầu từ đâu."]],
errs:[
 {"bad": "请不勿吸烟。", "good": "请勿吸烟。", "why": "勿 đã là phủ định."},
 {"bad": "这件事无须不担心。", "good": "这件事无须担心。", "why": "Không phủ định hai lần."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "公共场所请＿大声喧哗。", "vi": "Nơi công cộng xin đừng ồn ào.", "o": ["勿", "无从", "不见得"], "a": 0, "why": "Biển báo."}, {"q": "他的贡献＿置疑。", "vi": "Đóng góp của ông ấy không thể nghi ngờ.", "o": ["勿要", "无可", "无从地"], "a": 1, "why": "无可置疑."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我们", "绝不", "放弃"], "a": "我们绝不放弃。", "vi": "Chúng tôi quyết không bỏ cuộc."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Đắt chưa chắc đã tốt (dùng 不见得).", "a": "贵的不见得好。 / 贵的东西不见得好。"}]}],
rel:["新6.11", "一14", "新7.04"]
};
