// Bài ngữ pháp 【新6.44】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.44", title:"条件复句：除非……，才……；除非……，否则／不然……", vi:"除非…才…; 除非…否则… — trừ khi …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>除非 A，才 B</b>: chỉ khi A thì mới B.",
 "Dùng <b>除非 A，否则 / 不然 B</b>: trừ khi A, không thì B."],
rules:[
 {"t": "除非 + điều kiện，(S) 才 + V", "fx": [["除非", null], ["điều kiện", ""], ["，", ""], ["S", ""], ["才", null], ["V", ""]], "mean": "Chỉ khi … mới …", "ex": [["{1|除非}{2|你亲自去}，{3|他}{4|才}{5|会答应}。", "Chúfēi nǐ qīnzì qù, tā cái huì dāying.", "Chỉ khi bạn đích thân đi, anh ấy mới đồng ý."]]},
 {"t": "除非 + điều kiện，否则 / 不然 + kết quả", "fx": [["除非", null], ["điều kiện", ""], ["，", ""], ["否则 / 不然", null], ["kết quả", ""]], "mean": "Trừ khi …, không thì …", "ex": [["{1|除非}{2|下大雨}，{3|否则}{4|比赛照常举行}。", "Chúfēi xià dà yǔ, fǒuzé bǐsài zhàocháng jǔxíng.", "Trừ khi mưa to, trận đấu vẫn diễn ra."]]}],
cmp:[
 {"vn": "Trừ khi anh xin lỗi, không thì tôi không tha thứ.", "zh": "[除非]你道歉，[否则]我不原谅你。", "py": "Chúfēi nǐ dàoqiàn, fǒuzé wǒ bù yuánliàng nǐ.", "ok": true, "why": "否则 nêu hậu quả khi không đạt điều kiện."}],
ex:[
 ["[除非]有急事，他[才]会打电话。", "Chúfēi yǒu jíshì, tā cái huì dǎ diànhuà.", "Chỉ khi có việc gấp anh ấy mới gọi."],
 ["[除非]现在出发，[不然]就赶不上了。", "Chúfēi xiànzài chūfā, bùrán jiù gǎn bu shàng le.", "Trừ khi đi ngay, không thì không kịp."]],
errs:[
 {"bad": "除非你去，就他答应。", "good": "除非你去，他才答应。", "why": "除非 đi với 才."},
 {"bad": "除非下雨，所以比赛。", "good": "除非下雨，否则比赛照常。", "why": "Cần 否则 / 不然 / 才."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "除非你帮我，＿我完不成。", "vi": "Trừ khi bạn giúp, không thì tôi không xong.", "o": ["才能", "因为", "否则"], "a": 2, "why": "除非…否则."}, {"q": "除非天气好，我们＿去爬山。", "vi": "Chỉ khi trời đẹp chúng tôi mới leo núi.", "o": ["才", "否则", "就不"], "a": 0, "why": "除非…才."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["除非", "下大雨，", "否则", "比赛", "照常举行"], "a": "除非下大雨，否则比赛照常举行。", "vi": "Trừ khi mưa to, trận đấu vẫn diễn ra."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Chỉ khi bạn đích thân đi, anh ấy mới đồng ý (dùng 除非).", "a": "除非你亲自去，他才会答应。 / 除非你亲自去，他才答应。"}]}],
rel:["三70", "新4.60", "新6.43"]
};
