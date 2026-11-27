// Bài ngữ pháp 【新6.17】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.17", title:"连词：不料", vi:"不料 — không ngờ", tag:"词类 · 连词",
goals:[
 "Dùng <b>不料</b> nối hai vế: việc xảy ra <b>ngoài dự đoán</b>.",
 "Phân biệt 不料 với <b>没想到</b>."],
rules:[
 {"t": "Dự định，不料 + (S) + việc bất ngờ", "fx": [["dự định", ""], ["，", ""], ["不料", null], ["việc bất ngờ", ""]], "mean": "Không ngờ, nào ngờ (đầu vế sau).", "ex": [["{1|我正要出门}，{2|不料}{3|下起了大雨}。", "Wǒ zhèng yào chūmén, búliào xiàqǐle dà yǔ.", "Tôi đang định ra ngoài, nào ngờ mưa to."], ["{1|大家都以为他会输}，{2|不料}{3|他得了第一}。", "Dàjiā dōu yǐwéi tā huì shū, búliào tā déle dì-yī.", "Ai cũng tưởng anh ấy thua, không ngờ lại đứng nhất."]]}],
cmp:[
 {"vn": "Tôi định gọi cho cậu, ai ngờ cậu gọi trước.", "zh": "我想给你打电话，[不料]你先打来了。", "py": "Wǒ xiǎng gěi nǐ dǎ diànhuà, búliào nǐ xiān dǎlái le.", "ok": true, "why": "不料 đứng đầu vế sau."}],
ex:[
 ["天气很好，[不料]下午突然变了。", "Tiānqì hěn hǎo, búliào xiàwǔ tūrán biàn le.", "Trời đẹp, ai ngờ chiều đổi đột ngột."],
 ["他本想休息，[不料]又来了任务。", "Tā běn xiǎng xiūxi, búliào yòu láile rènwu.", "Định nghỉ, nào ngờ lại có nhiệm vụ."]],
errs:[
 {"bad": "我不料他来了。（muốn nói “tôi không ngờ”）", "good": "我没想到他来了。", "why": "不料 là liên từ nối hai vế, không làm động từ sau chủ ngữ theo kiểu này."},
 {"bad": "不料明天会下雨。", "good": "也许明天会下雨。", "why": "不料 kể việc đã xảy ra."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "我以为很简单，＿这么难。", "vi": "Tưởng dễ, ai ngờ khó thế.", "o": ["未必", "以便", "不料"], "a": 2, "why": "Bất ngờ."}, {"q": "他刚要睡觉，＿电话响了。", "vi": "Vừa định ngủ thì chuông reo.", "o": ["不料", "要么", "除非"], "a": 0, "why": "不料."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["不料", "下起了", "大雨"], "a": "不料下起了大雨。", "vi": "Nào ngờ mưa to."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Ai cũng tưởng anh ấy thua, không ngờ anh ấy đứng nhất.", "a": "大家都以为他会输，不料他得了第一。 / 大家都以为他会输，没想到他得了第一。"}]}],
rel:["新4.10", "新5.11", "三61"]
};
