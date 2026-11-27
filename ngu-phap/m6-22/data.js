// Bài ngữ pháp 【新6.22】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.22", title:"好（不）容易", vi:"好容易 / 好不容易 — mãi mới", tag:"短语 · 固定短语",
goals:[
 "Hiểu <b>好容易 = 好不容易</b> = rất khó khăn mới.",
 "Kết hợp với <b>才</b>."],
rules:[
 {"t": "好(不)容易 + 才 + V", "fx": [["好(不)容易", null], ["才", null], ["V", ""]], "mean": "Mãi mới, vất vả lắm mới.", "ex": [["我{1|好不容易}{2|才}{3|买到票}。", "Wǒ hǎobù róngyì cái mǎidào piào.", "Tôi mãi mới mua được vé."], ["他{1|好容易}{2|才}{3|睡着}。", "Tā hǎoróngyì cái shuìzháo.", "Anh ấy khó khăn lắm mới ngủ được."]]},
 {"t": "好不容易 + V，…", "fx": [["好不容易", null], ["V", ""], ["，", ""], ["việc sau", ""]], "mean": "Vất vả lắm mới …, vậy mà.", "ex": [["{1|好不容易}{2|放了假}，{3|他又病了}。", "Hǎobù róngyì fàngle jià, tā yòu bìng le.", "Mãi mới được nghỉ thì anh ấy lại ốm."]]}],
cmp:[
 {"vn": "Khó khăn lắm mới gặp được cậu.", "zh": "[好不容易]才见到你。", "py": "Hǎobù róngyì cái jiàndào nǐ.", "ok": true, "why": "Hai dạng cùng nghĩa “không dễ”."}],
ex:[
 ["我们[好容易]找到了这个地方。", "Wǒmen hǎoróngyì zhǎodàole zhège dìfang.", "Chúng tôi mãi mới tìm được chỗ này."],
 ["雨[好不容易]停了。", "Yǔ hǎobù róngyì tíng le.", "Mưa mãi mới tạnh."]],
errs:[
 {"bad": "我好容易就买到票。（muốn nói khó mới mua được）", "good": "我好不容易才买到票。", "why": "Đi với 才, không đi với 就."},
 {"bad": "这个题好容易。（muốn nói rất dễ, dễ gây hiểu nhầm）", "good": "这个题很容易。", "why": "好容易 trước động từ nghĩa là “khó khăn mới”."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "排了两个小时队，好不容易＿轮到我。", "vi": "Xếp hàng hai tiếng mãi mới đến lượt.", "o": ["就", "才", "却是"], "a": 1, "why": "好不容易才."}, {"q": "“好容易” trong 好容易才找到 nghĩa là:", "vi": "Chọn nghĩa.", "o": ["rất dễ dàng", "rất khó mới"], "a": 1, "why": "Cùng nghĩa 好不容易."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我", "好不容易", "才", "买到", "票"], "a": "我好不容易才买到票。", "vi": "Tôi mãi mới mua được vé."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy khó khăn lắm mới ngủ được.", "a": "他好不容易才睡着。 / 他好容易才睡着。"}]}],
rel:["二20", "三19", "新6.23"]
};
