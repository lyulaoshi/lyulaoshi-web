// Bài ngữ pháp 【新6.40】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.40", title:"并列复句：一时……一时……", vi:"一时…一时… — lúc thì … lúc thì …", tag:"句子的类型 · 复句",
goals:[
 "Tả trạng thái <b>thay đổi liên tục</b> bằng 一时……一时…….",
 "So với 一会儿……一会儿……."],
rules:[
 {"t": "一时 + A，一时 + B", "fx": [["一时", null], ["A", ""], ["，", ""], ["一时", null], ["B", ""]], "mean": "Lúc A lúc B.", "ex": [["他的病{1|一时}{2|好}，{3|一时}{4|坏}。", "Tā de bìng yìshí hǎo, yìshí huài.", "Bệnh ông ấy lúc đỡ lúc nặng."], ["天气{1|一时}{2|晴}，{3|一时}{4|雨}。", "Tiānqì yìshí qíng, yìshí yǔ.", "Trời lúc nắng lúc mưa."]]}],
cmp:[
 {"vn": "Cô ấy lúc cười lúc khóc.", "zh": "她[一时]笑，[一时]哭。", "py": "Tā yìshí xiào, yìshí kū.", "ok": true, "why": "Văn viết hơn 一会儿."}],
ex:[
 ["他的想法[一时]这样，[一时]那样。", "Tā de xiǎngfǎ yìshí zhèyàng, yìshí nàyàng.", "Ý anh ta lúc thế này lúc thế khác."],
 ["远处的灯光[一时]亮，[一时]暗。", "Yuǎnchù de dēngguāng yìshí liàng, yìshí àn.", "Ánh đèn xa lúc sáng lúc tối."]],
errs:[
 {"bad": "他一时笑，两时哭。", "good": "他一时笑，一时哭。", "why": "Hai vế đều 一时."},
 {"bad": "天气一时晴一直雨。", "good": "天气一时晴，一时雨。", "why": "Cặp 一时……一时."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "风一时大，＿小。", "vi": "Gió lúc to lúc nhỏ.", "o": ["一直", "一向", "一时"], "a": 2, "why": "一时…一时."}, {"q": "“一时…一时…” gần nghĩa nhất với:", "vi": "Chọn cặp gần nghĩa.", "o": ["一边…一边…", "一会儿…一会儿…"], "a": 1, "why": "Thay đổi luân phiên."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["天气", "一时晴，", "一时雨"], "a": "天气一时晴，一时雨。", "vi": "Trời lúc nắng lúc mưa."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Bệnh ông ấy lúc đỡ lúc nặng (dùng 一时).", "a": "他的病一时好，一时坏。"}]}],
rel:["三61", "新6.08", "一39"]
};
