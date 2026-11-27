// Bài ngữ pháp 【新6.30】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.30", title:"好你个X", vi:"好你个X — giỏi cho cái đồ …", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>好你个 + tên / danh từ</b> để trách yêu hoặc mắng.",
 "Hiểu giọng thân mật hoặc tức giận theo ngữ cảnh."],
rules:[
 {"t": "好你个 + X，…", "fx": [["好你个", null], ["X", ""], ["，", ""], ["lý do trách", ""]], "mean": "Giỏi thật, cái đồ X.", "ex": [["{1|好你个}{2|小王}，{3|这么大的事都瞒着我}！", "Hǎo nǐ ge Xiǎo Wáng, zhème dà de shì dōu mánzhe wǒ!", "Giỏi cho cậu Vương, chuyện lớn vậy mà giấu tôi!"], ["{1|好你个}{2|懒虫}，{3|太阳都晒屁股了}！", "Hǎo nǐ ge lǎnchóng, tàiyáng dōu shài pìgu le!", "Cái đồ lười, mặt trời lên cao rồi đấy!"]]}],
cmp:[
 {"vn": "Hay cho cái đồ nói dối!", "zh": "[好你个]骗子！", "py": "Hǎo nǐ ge piànzi!", "ok": true, "why": "好 ở đây là mỉa."}],
ex:[
 ["[好你个]老李，来了也不告诉我。", "Hǎo nǐ ge Lǎo Lǐ, láile yě bú gàosu wǒ.", "Ông Lý giỏi thật, đến mà không báo."],
 ["[好你个]小家伙，敢骗我！", "Hǎo nǐ ge xiǎojiāhuo, gǎn piàn wǒ!", "Nhóc con giỏi nhỉ, dám lừa ta!"]],
errs:[
 {"bad": "你好个小王！", "good": "好你个小王！", "why": "Thứ tự 好你个."},
 {"bad": "好你个老师，谢谢您。（muốn khen trang trọng）", "good": "您真是位好老师，谢谢您。", "why": "好你个 là lời trách, không dùng khen trang trọng."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿小张，又迟到了！", "vi": "Giỏi cho cậu Trương, lại đi muộn!", "o": ["好你个", "你好个", "好个你"], "a": 0, "why": "Cụm cố định."}, {"q": "“好你个小王” thể hiện thái độ:", "vi": "Chọn nghĩa.", "o": ["trách móc", "khen ngợi trang trọng"], "a": 0, "why": "Mỉa trách."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["好你个小王，", "又", "迟到了"], "a": "好你个小王，又迟到了。", "vi": "Giỏi cho cậu Vương, lại đi muộn!"}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Giỏi cho cậu Vương, chuyện lớn vậy mà giấu tôi!", "a": "好你个小王，这么大的事都瞒着我！"}]}],
rel:["新4.41", "新5.22", "新6.37"]
};
