// Bài ngữ pháp 【新6.37】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.37", title:"看你X的／瞧他X的", vi:"看你…的 — xem cậu … kìa", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>看你……的 / 瞧他……的</b> nhận xét thái độ, vẻ mặt.",
 "Hiểu giọng trêu hoặc trách."],
rules:[
 {"t": "看你 / 瞧他 + Adj / V + 的", "fx": [["看你 / 瞧他", null], ["Adj / V", ""], ["的", null]], "mean": "Xem … kìa.", "ex": [["{1|看你}{2|急}{3|的}！", "Kàn nǐ jí de!", "Xem cậu cuống kìa!"], ["{1|瞧他}{2|美}{3|的}！", "Qiáo tā měi de!", "Nhìn nó sướng chưa kìa!"]]}],
cmp:[
 {"vn": "Nhìn cậu nói kìa!", "zh": "[看你说的]！", "py": "Kàn nǐ shuō de!", "ok": true, "why": "Dùng để khiêm tốn hoặc trách lời nói."}],
ex:[
 ["[看你说的]，这是我应该做的。", "Kàn nǐ shuō de, zhè shì wǒ yīnggāi zuò de.", "Cậu nói thế, đó là việc tôi nên làm."],
 ["[瞧你忙的]，坐下喝口水吧。", "Qiáo nǐ máng de, zuòxia hē kǒu shuǐ ba.", "Xem cậu bận kìa, ngồi uống ngụm nước."]],
errs:[
 {"bad": "你看急的很！", "good": "看你急的！", "why": "Cụm cố định 看你……的."},
 {"bad": "看你急得很的。", "good": "看你急的！", "why": "Không thêm 很."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿高兴的！", "vi": "Xem cậu mừng kìa!", "o": ["你看把", "看你", "看着你们的把"], "a": 1, "why": "看你X的."}, {"q": "“看你说的” dùng khi:", "vi": "Chọn tình huống.", "o": ["đáp lại lời khen hoặc lời nói quá", "hỏi giờ"], "a": 0, "why": "Câu đáp lịch sự, thân mật."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["瞧", "他", "美的"], "a": "瞧他美的。", "vi": "Nhìn nó sướng chưa kìa!"}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Xem cậu cuống kìa!", "a": "看你急的！ / 瞧你急的！"}]}],
rel:["新6.32", "新4.31", "新6.30"]
};
