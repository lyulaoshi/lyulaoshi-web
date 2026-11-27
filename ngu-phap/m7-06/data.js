// Bài ngữ pháp 【新7.06】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.06", title:"代词：何、怎么着、这么着", vi:"何, 怎么着, 这么着", tag:"词类 · 代词",
goals:[
 "Dùng <b>何</b> (gì, nào, sao) trong văn viết và cụm cố định.",
 "Dùng khẩu ngữ <b>怎么着</b> (thế nào), <b>这么着</b> (thế này)."],
rules:[
 {"t": "何 + danh từ / V", "fx": [["何", null], ["N / V", ""]], "mean": "何时 khi nào · 何处 ở đâu · 何必 hà tất.", "ex": [["请问会议{1|何}{2|时}开始？", "Qǐngwèn huìyì héshí kāishǐ?", "Xin hỏi khi nào họp bắt đầu?"], ["我们将{1|何}{2|去}{1|何}{2|从}？", "Wǒmen jiāng héqù-hécóng?", "Chúng ta sẽ đi đâu về đâu?"]]},
 {"t": "(你想) 怎么着？", "fx": [["怎么着", null]], "mean": "Thế nào, làm sao (khẩu ngữ, có khi thách thức).", "ex": [["你到底想{1|怎么着}？", "Nǐ dàodǐ xiǎng zěnmezhe?", "Rốt cuộc cậu muốn thế nào?"]]},
 {"t": "这么着，+ đề nghị", "fx": [["这么着", null], ["，", ""], ["đề nghị", ""]], "mean": "Thế này nhé.", "ex": [["{1|这么着}，{2|我先去看看}。", "Zhèmezhe, wǒ xiān qù kànkan.", "Thế này, tôi đi xem trước."]]}],
cmp:[
 {"vn": "Sao phải khổ thế?", "zh": "[何]苦呢？", "py": "Hékǔ ne?", "ok": true, "why": "何 = sao, hà."}],
ex:[
 ["你来自[何]处？", "Nǐ láizì héchù?", "Bạn đến từ đâu?"],
 ["你不同意，又[怎么着]？", "Nǐ bù tóngyì, yòu zěnmezhe?", "Cậu không đồng ý thì sao nào?"]],
errs:[
 {"bad": "何时候开始？", "good": "何时开始？/ 什么时候开始？", "why": "何 ghép với một chữ: 何时."},
 {"bad": "这么着的我去。", "good": "这么着，我去。", "why": "Sau 这么着 ngắt câu."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "事情已经这样，＿必再说？", "vi": "Việc đã rồi, hà tất nói nữa?", "o": ["彼", "兹", "何"], "a": 2, "why": "何必."}, {"q": "＿吧，明天我请客。", "vi": "Thế này nhé, mai tôi mời.", "o": ["何处", "若干", "这么着"], "a": 2, "why": "Đề nghị."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["你", "到底", "想", "怎么着"], "a": "你到底想怎么着。", "vi": "Rốt cuộc cậu muốn thế nào?"}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Thế này nhé, tôi đi xem trước.", "a": "这么着，我先去看看。 / 这么着吧，我先去看看。"}]}],
rel:["新7.05", "二07", "新3.53"]
};
