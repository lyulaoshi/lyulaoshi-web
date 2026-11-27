// Bài ngữ pháp 【新7.31】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.31", title:"四字格（2）：可A可B、连A带B、七A八B、时A时B、无A不B、无A可B、自A自B", vi:"Khuôn bốn chữ 连A带B, 七A八B, 无A不B…", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>可A可B, 连A带B, 七A八B, 时A时B</b>.",
 "Dùng <b>无A不B, 无A可B, 自A自B</b>."],
rules:[
 {"t": "可A可B / 时A时B", "fx": [["可…可 / 时…时", null], ["A, B", ""]], "mean": "可有可无 có cũng được không cũng được · 时好时坏 lúc tốt lúc xấu.", "ex": [["这件事{1|可有可}{2|无}。", "Zhè jiàn shì kěyǒu-kěwú.", "Việc này có cũng được không cũng được."], ["他的成绩{1|时好时}{2|坏}。", "Tā de chéngjì shíhǎo-shíhuài.", "Thành tích của em ấy thất thường."]]},
 {"t": "连A带B / 七A八B", "fx": [["连…带 / 七…八", null], ["A, B", ""]], "mean": "连说带笑 vừa nói vừa cười · 七嘴八舌 năm mồm mười miệng.", "ex": [["孩子{1|连蹦带}{2|跳}地跑了过来。", "Háizi liánbèng-dàitiào de pǎole guolai.", "Đứa bé vừa nhảy vừa chạy tới."], ["大家{1|七嘴八}{2|舌}地议论。", "Dàjiā qīzuǐ-bāshé de yìlùn.", "Mọi người bàn tán xôn xao."]]},
 {"t": "无A不B / 无A可B", "fx": [["无…不 / 无…可", null], ["A, B", ""]], "mean": "无所不知 không gì không biết · 无话可说 không còn gì để nói.", "ex": [["他好像{1|无所不}{2|知}。", "Tā hǎoxiàng wúsuǒbùzhī.", "Ông ấy như cái gì cũng biết."], ["事实面前，他{1|无话可}{2|说}。", "Shìshí miànqián, tā wúhuà-kěshuō.", "Trước sự thật, anh ta không còn gì để nói."]]},
 {"t": "自A自B", "fx": [["自…自", null], ["A, B", ""]], "mean": "自言自语 lẩm bẩm một mình · 自作自受 tự làm tự chịu.", "ex": [["他一个人在那儿{1|自言自}{2|语}。", "Tā yí gè rén zài nàr zìyán-zìyǔ.", "Anh ta lẩm bẩm một mình ở đó."]]}],
cmp:[
 {"vn": "Tự làm tự chịu", "zh": "[自作自受]", "py": "zìzuò-zìshòu", "ok": true, "why": "Trùng thành ngữ tiếng Việt."}],
ex:[
 ["我现在[无家可归]。", "Wǒ xiànzài wújiā-kěguī.", "Giờ tôi không nhà để về."],
 ["他[连哭带闹]，谁也劝不住。", "Tā liánkū-dàinào, shéi yě quàn bu zhù.", "Nó vừa khóc vừa quấy, không ai dỗ được."]],
errs:[
 {"bad": "他言自语自。", "good": "他自言自语。", "why": "Đúng thứ tự khung."},
 {"bad": "大家八嘴七舌。", "good": "大家七嘴八舌。", "why": "七 trước 八."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "面对这个结果，我无话可＿。", "vi": "Trước kết quả này tôi không còn gì để nói.", "o": ["吃", "归", "说"], "a": 2, "why": "无话可说."}, {"q": "他连滚带＿地逃走了。", "vi": "Hắn lăn lê bò toài chạy mất.", "o": ["爬", "吃", "笑"], "a": 0, "why": "连滚带爬."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["大家", "七嘴八舌地", "议论"], "a": "大家七嘴八舌地议论。", "vi": "Mọi người bàn tán xôn xao."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Việc này có cũng được không cũng được.", "a": "这件事可有可无。"}]}],
rel:["新4.23", "新7.30", "新5.19"]
};
