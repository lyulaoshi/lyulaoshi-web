// Bài ngữ pháp 【新7.29】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.29", title:"语气助词：罢了、也罢、矣", vi:"罢了, 也罢, 矣 — thôi mà, … cũng được, rồi vậy", tag:"词类 · 助词",
goals:[
 "Dùng <b>罢了</b> hạ thấp sự việc: chỉ … thôi.",
 "Dùng <b>也罢</b> chấp nhận; <b>矣</b> trong văn ngôn."],
rules:[
 {"t": "(只是 / 不过) …… 罢了", "fx": [["只是 / 不过", null], ["sự việc", ""], ["罢了", null]], "mean": "Chỉ … thôi.", "ex": [["我{1|只是}{2|开个玩笑}{3|罢了}。", "Wǒ zhǐshì kāi gè wánxiào bàle.", "Tôi chỉ đùa thôi."]]},
 {"t": "…… 也罢", "fx": [["sự việc", ""], ["也罢", null]], "mean": "Thì thôi vậy cũng được.", "ex": [["{1|不去}{2|也罢}。", "Bú qù yěbà.", "Không đi cũng được."]]},
 {"t": "…… 矣", "fx": [["sự việc", ""], ["矣", null]], "mean": "Văn ngôn, như 了.", "ex": [["{1|悔之晚}{2|矣}。", "Huǐ zhī wǎn yǐ.", "Hối thì đã muộn."]]}],
cmp:[
 {"vn": "Chẳng qua may mắn thôi.", "zh": "不过是运气好[罢了]。", "py": "Búguò shì yùnqi hǎo bàle.", "ok": true, "why": "罢了 đứng cuối."}],
ex:[
 ["他不过说说[罢了]。", "Tā búguò shuōshuo bàle.", "Anh ta chỉ nói thế thôi."],
 ["他不愿意[也罢]，我们自己干。", "Tā bú yuànyì yěbà, wǒmen zìjǐ gàn.", "Anh ta không muốn thì thôi, ta tự làm."]],
errs:[
 {"bad": "我罢了只是开玩笑。", "good": "我只是开玩笑罢了。", "why": "罢了 cuối câu."},
 {"bad": "昨天我吃饭矣。", "good": "昨天我吃饭了。", "why": "矣 chỉ dùng trong văn ngôn, thành ngữ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这点儿东西不过是一点心意＿。", "vi": "Chút quà chỉ là tấm lòng thôi.", "o": ["矣了", "罢了", "吗"], "a": 1, "why": "不过……罢了."}, {"q": "你不说＿，我自己查。", "vi": "Cậu không nói cũng được, tôi tự tra.", "o": ["罢了吗", "矣", "也罢"], "a": 2, "why": "Chấp nhận."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我", "只是", "开个玩笑", "罢了"], "a": "我只是开个玩笑罢了。", "vi": "Tôi chỉ đùa thôi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ta chỉ nói thế thôi (dùng 罢了).", "a": "他不过说说罢了。 / 他只是说说罢了。"}]}],
rel:["新6.19", "新6.20", "新5.18"]
};
