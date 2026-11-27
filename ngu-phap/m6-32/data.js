// Bài ngữ pháp 【新6.32】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.32", title:"看／瞧＋把＋宾语（施事）＋X得", vi:"看把…X得 — xem làm … đến mức nào", tag:"短语 · 固定格式",
goals:[
 "Cảm thán mức độ cảm xúc của ai: <b>看把你高兴得！</b>",
 "Người sau 把 chính là người đang có cảm xúc đó."],
rules:[
 {"t": "看 / 瞧 + 把 + người + Adj + 得", "fx": [["看 / 瞧", null], ["把", null], ["người", ""], ["Adj", ""], ["得", null]], "mean": "Xem kìa, … đến thế.", "ex": [["{1|看}{2|把}{3|你}{4|高兴}{5|得}！", "Kàn bǎ nǐ gāoxìng de!", "Xem cậu mừng kìa!"], ["{1|瞧}{2|把}{3|孩子}{4|吓}{5|得}，脸都白了。", "Qiáo bǎ háizi xià de, liǎn dōu bái le.", "Xem làm đứa bé sợ đến tái mặt."]]}],
cmp:[
 {"vn": "Nhìn anh ta đắc ý chưa kìa!", "zh": "[看把]他[得意得]！", "py": "Kàn bǎ tā déyì de!", "ok": true, "why": "Có thể bỏ lửng sau 得."}],
ex:[
 ["[看把]你[累得]，快坐下。", "Kàn bǎ nǐ lèi de, kuài zuòxia.", "Nhìn bạn mệt kìa, ngồi xuống đi."],
 ["[瞧把]他[急得]满头大汗。", "Qiáo bǎ tā jí de mǎn tóu dà hàn.", "Xem anh ấy cuống đến mồ hôi đầy đầu."]],
errs:[
 {"bad": "看你把高兴得！", "good": "看把你高兴得！", "why": "Người đứng sau 把."},
 {"bad": "看把你高兴的很！", "good": "看把你高兴得！", "why": "Kết thúc bằng 得, không thêm 很."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "看把你急＿！", "vi": "Xem bạn cuống kìa!", "o": ["得", "很", "地很"], "a": 0, "why": "Kết thúc bằng 得."}, {"q": "＿把孩子冷得！", "vi": "Xem đứa bé lạnh kìa!", "o": ["被", "看", "从"], "a": 1, "why": "看把…."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["看把", "你", "高兴得"], "a": "看把你高兴得。", "vi": "Xem cậu mừng kìa!"}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Nhìn bạn mệt kìa (dùng 看把).", "a": "看把你累得！ / 瞧把你累得！"}]}],
rel:["新5.28", "三54", "新6.37"]
};
