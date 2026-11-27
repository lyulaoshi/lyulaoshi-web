// Bài ngữ pháp 【新6.15】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.15", title:"介词：因（引出目的、原因）", vi:"因 — do, vì", tag:"词类 · 介词",
goals:[
 "Dùng <b>因 + nguyên nhân</b> trong thông báo, tin tức.",
 "Dùng <b>因……而……</b>: vì … mà …"],
rules:[
 {"t": "因 + nguyên nhân，kết quả", "fx": [["因", null], ["nguyên nhân", ""], ["，", ""], ["kết quả", ""]], "mean": "Do, vì (văn viết của 因为).", "ex": [["{1|因}{2|天气原因}，{3|航班取消}。", "Yīn tiānqì yuányīn, hángbān qǔxiāo.", "Do thời tiết, chuyến bay bị hủy."], ["{1|因}{2|工作需要}，{3|他调到了上海}。", "Yīn gōngzuò xūyào, tā diàodàole Shànghǎi.", "Do yêu cầu công việc, anh ấy chuyển đến Thượng Hải."]]},
 {"t": "S + 因 + nguyên nhân + 而 + V", "fx": [["S", ""], ["因", null], ["nguyên nhân", ""], ["而", null], ["V", ""]], "mean": "Vì … mà.", "ex": [["{1|他}{2|因}{3|这件事}{4|而}{5|出名}。", "Tā yīn zhè jiàn shì ér chūmíng.", "Anh ấy nổi tiếng vì việc này."]]}],
cmp:[
 {"vn": "Cửa hàng nghỉ do sửa chữa.", "zh": "本店[因]装修暂停营业。", "py": "Běn diàn yīn zhuāngxiū zàntíng yíngyè.", "ok": true, "why": "Văn thông báo dùng 因."}],
ex:[
 ["[因]身体不适，他请假了。", "Yīn shēntǐ búshì, tā qǐngjià le.", "Do không khỏe, anh ấy xin nghỉ."],
 ["会议[因]故推迟。", "Huìyì yīn gù tuīchí.", "Hội nghị hoãn vì có việc."]],
errs:[
 {"bad": "因为故，会议推迟。", "good": "会议因故推迟。", "why": "Cụm cố định 因故."},
 {"bad": "因所以下雨，比赛取消。", "good": "因下雨，比赛取消。", "why": "因 không đi với 所以 ngay sau."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿交通事故，路上很堵。", "vi": "Do tai nạn giao thông nên đường tắc.", "o": ["于", "因", "除"], "a": 1, "why": "Nguyên nhân."}, {"q": "他因工作出色＿受到表扬。", "vi": "Anh ấy được khen vì làm tốt.", "o": ["而", "但", "却"], "a": 0, "why": "因……而……."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["会议", "因故", "推迟"], "a": "会议因故推迟。", "vi": "Hội nghị hoãn vì có việc."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Do thời tiết, chuyến bay bị hủy (dùng 因).", "a": "因天气原因，航班取消。 / 因天气原因，航班取消了。"}]}],
rel:["新4.16", "新4.35", "三25"]
};
