// Bài ngữ pháp 【新6.11】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.11", title:"否定副词：未必", vi:"未必 — chưa chắc", tag:"词类 · 副词",
goals:[
 "Dùng <b>未必</b> = không hẳn, chưa chắc.",
 "Phân biệt 未必 với 不一定 và 一定不."],
rules:[
 {"t": "S + 未必 + V / Adj", "fx": [["S", ""], ["未必", null], ["V / Adj", ""]], "mean": "Phủ định sự chắc chắn, nhẹ nhàng, hơi văn viết.", "ex": [["{1|贵的东西}{2|未必}{3|好}。", "Guì de dōngxi wèibì hǎo.", "Đồ đắt chưa chắc đã tốt."], ["{1|他}{2|未必}{3|知道这件事}。", "Tā wèibì zhīdào zhè jiàn shì.", "Anh ấy chưa hẳn biết việc này."]]},
 {"t": "那也未必", "fx": [["那也未必", null]], "mean": "Đáp lại: cũng chưa chắc.", "ex": [["“他肯定会来。”“{1|那也未必}。”", "“Tā kěndìng huì lái.” “Nà yě wèibì.”", "“Chắc chắn anh ấy đến.” “Chưa chắc đâu.”"]]}],
cmp:[
 {"vn": "Học nhiều chưa chắc đã giỏi.", "zh": "学得多[未必]学得好。", "py": "Xué de duō wèibì xué de hǎo.", "ok": true, "why": "未必 đứng trước vị ngữ."}],
ex:[
 ["这个办法[未必]有用。", "Zhège bànfǎ wèibì yǒuyòng.", "Cách này chưa chắc có ích."],
 ["你说的[未必]对。", "Nǐ shuō de wèibì duì.", "Điều bạn nói chưa hẳn đúng."]],
errs:[
 {"bad": "他一定未必来。", "good": "他未必来。", "why": "未必 đã bao hàm “chưa chắc”."},
 {"bad": "未必他来。", "good": "他未必来。", "why": "未必 đứng sau chủ ngữ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "有钱的人＿幸福。", "vi": "Người có tiền chưa chắc hạnh phúc.", "o": ["未必", "一向", "不禁"], "a": 0, "why": "Chưa chắc."}, {"q": "“未必” gần nghĩa nhất với:", "vi": "Chọn từ gần nghĩa.", "o": ["不一定", "一定不", "从来不"], "a": 0, "why": "未必 = 不一定."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["贵的东西", "未必", "好"], "a": "贵的东西未必好。", "vi": "Đồ đắt chưa chắc đã tốt."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy chưa chắc biết việc này (dùng 未必).", "a": "他未必知道这件事。"}]}],
rel:["二19", "一14", "新6.12"]
};
