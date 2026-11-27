// Bài ngữ pháp 【新7.35】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.35", title:"固定格式（1）：X到这个地步／份上、X得要命／要死、X都不／没X、X就X个Y", vi:"Đến nước này, … chết đi được, không thèm …, đã … thì … cho đã", tag:"短语 · 固定格式",
goals:[
 "Nói mức độ tột cùng: <b>到这个地步 / 份上</b>, <b>得要命 / 要死</b>.",
 "Dùng <b>X都不 / 没X</b> và <b>X就X个Y</b>."],
rules:[
 {"t": "X + 到这个地步 / 份上", "fx": [["X", ""], ["到这个地步 / 份上", null]], "mean": "Đến nước này.", "ex": [["事情{1|发展}{2|到这个地步}，谁也没想到。", "Shìqing fāzhǎn dào zhège dìbù, shéi yě méi xiǎngdào.", "Chuyện đến nước này không ai ngờ."]]},
 {"t": "Adj + 得要命 / 要死", "fx": [["Adj", ""], ["得要命 / 得要死", null]], "mean": "… chết đi được.", "ex": [["天气{1|热}{2|得要命}。", "Tiānqì rè de yàomìng.", "Trời nóng chết đi được."]]},
 {"t": "V + 都不 / 没 + V", "fx": [["V", ""], ["都不 / 都没", null], ["V", ""]], "mean": "Chẳng thèm, chưa hề.", "ex": [["他{1|看}{2|都不}{3|看}我一眼。", "Tā kàn dōu bú kàn wǒ yì yǎn.", "Anh ta chẳng thèm nhìn tôi."]]},
 {"t": "V + 就 + V + 个 + Y", "fx": [["V", ""], ["就", null], ["V", ""], ["个", null], ["Y", ""]], "mean": "Đã làm thì làm cho đã.", "ex": [["今天我们{1|喝}{2|就}{3|喝}{4|个}{5|痛快}。", "Jīntiān wǒmen hē jiù hē gè tòngkuài.", "Hôm nay uống thì uống cho thỏa."]]}],
cmp:[
 {"vn": "Đã đến nước này rồi thì nói thật đi.", "zh": "话说[到这个份上]，就直说吧。", "py": "Huà shuōdào zhège fènshang, jiù zhí shuō ba.", "ok": true, "why": "份上 ≈ “nước”."}],
ex:[
 ["我饿[得要死]。", "Wǒ è de yàosǐ.", "Tôi đói chết đi được."],
 ["他[问都没问]就走了。", "Tā wèn dōu méi wèn jiù zǒu le.", "Anh ta chẳng hỏi gì đã đi."]],
errs:[
 {"bad": "天气热要命得。", "good": "天气热得要命。", "why": "Adj + 得要命."},
 {"bad": "他看不都看。", "good": "他看都不看。", "why": "V 都不 V."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这么重要的事，他问都＿问。", "vi": "Việc quan trọng vậy mà nó chẳng hỏi.", "o": ["别", "勿", "没"], "a": 2, "why": "V都没V."}, {"q": "玩儿就玩儿＿痛快。", "vi": "Chơi thì chơi cho đã.", "o": ["的", "个", "了吗"], "a": 1, "why": "X就X个Y."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "看都不看", "我", "一眼"], "a": "他看都不看我一眼。", "vi": "Anh ta chẳng thèm nhìn tôi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Trời nóng chết đi được (dùng 得要命).", "a": "天气热得要命。 / 天热得要命。"}]}],
rel:["新4.47", "新5.26", "新6.38"]
};
