// Bài ngữ pháp 【新7.38】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.38", title:"固定格式（4）：该X（就）X，该Y（就）Y、何至于……、仅次于X、看在X的面子上", vi:"Cần gì làm nấy, đâu đến mức, chỉ sau, nể mặt", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>该X就X</b> và <b>何至于</b>.",
 "Xếp hạng <b>仅次于</b>; xin nể <b>看在……的面子上</b>."],
rules:[
 {"t": "该 X 就 X，该 Y 就 Y", "fx": [["该", null], ["X", ""], ["就 X", null], ["，", ""], ["该 Y 就 Y", ""]], "mean": "Đến lúc nào làm việc nấy.", "ex": [["{1|该}{2|吃}{3|就吃}，{4|该睡就睡}。", "Gāi chī jiù chī, gāi shuì jiù shuì.", "Đến lúc ăn thì ăn, lúc ngủ thì ngủ."]]},
 {"t": "(S) 何至于 + V (呢)", "fx": [["(S)", ""], ["何至于", null], ["V", ""]], "mean": "Đâu đến mức.", "ex": [["一点儿小事，{2|何至于}{3|生这么大气}？", "Yìdiǎnr xiǎoshì, hézhìyú shēng zhème dà qì?", "Chuyện nhỏ, đâu đến mức giận thế?"]]},
 {"t": "A + 仅次于 + B", "fx": [["A", ""], ["仅次于", null], ["B", ""]], "mean": "A chỉ đứng sau B.", "ex": [["{1|我们的产量}{2|仅次于}{3|他们}。", "Wǒmen de chǎnliàng jǐn cìyú tāmen.", "Sản lượng của ta chỉ sau họ."]]},
 {"t": "看在 + X + 的面子上，…", "fx": [["看在", null], ["X", ""], ["的面子上", null], ["，", ""], ["lời xin", ""]], "mean": "Nể mặt X.", "ex": [["{1|看在}{2|老师}{3|的面子上}，{4|别跟他计较了}。", "Kànzài lǎoshī de miànzi shang, bié gēn tā jìjiào le.", "Nể mặt thầy, đừng chấp nó nữa."]]}],
cmp:[
 {"vn": "Nể tình bạn bè", "zh": "[看在]朋友[的份上]", "py": "kànzài péngyou de fènshang", "ok": true, "why": "份上 cũng được."}],
ex:[
 ["他的成绩[仅次于]第一名。", "Tā de chéngjì jǐn cìyú dì-yī míng.", "Thành tích của cậu ấy chỉ sau người đứng đầu."],
 ["她[何至于]连这点儿道理都不懂？", "Tā hézhìyú lián zhè diǎnr dàolǐ dōu bù dǒng?", "Cô ấy đâu đến mức không hiểu lẽ này?"]],
errs:[
 {"bad": "他仅次第一名。", "good": "他仅次于第一名。", "why": "Cần 于."},
 {"bad": "看面子老师上。", "good": "看在老师的面子上", "why": "Cụm cố định."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿我的面子上，原谅他吧。", "vi": "Nể mặt tôi, tha cho nó.", "o": ["仅次于", "看在", "何至于"], "a": 1, "why": "看在…面子上."}, {"q": "该花的钱就花，该＿的就省。", "vi": "Cần chi thì chi, cần tiết kiệm thì tiết kiệm.", "o": ["省", "花", "睡"], "a": 0, "why": "Đối nhau."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["看在", "老师的面子上，", "别", "跟他", "计较了"], "a": "看在老师的面子上，别跟他计较了。", "vi": "Nể mặt thầy, đừng chấp nó."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Chuyện nhỏ, đâu đến mức giận thế (dùng 何至于)?", "a": "一点儿小事，何至于生这么大气？"}]}],
rel:["新7.35", "新6.28", "新7.39"]
};
