// Bài ngữ pháp 【新6.45】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.45", title:"让步复句：就算……，也……", vi:"就算…也… — cứ cho là … cũng …", tag:"句子的类型 · 复句",
goals:[
 "Nhượng bộ khẩu ngữ bằng <b>就算……也…….</b>",
 "So với 即使, 哪怕."],
rules:[
 {"t": "就算 + giả định，(S) 也 + V", "fx": [["就算", null], ["giả định", ""], ["，", ""], ["S", ""], ["也", null], ["V", ""]], "mean": "Cho dù … cũng …", "ex": [["{1|就算}{2|他知道了}，{3|我}{4|也}{5|不怕}。", "Jiùsuàn tā zhīdào le, wǒ yě bú pà.", "Cho dù anh ta biết, tôi cũng không sợ."], ["{1|就算}{2|再贵}，{3|我}{4|也}{5|要买}。", "Jiùsuàn zài guì, wǒ yě yào mǎi.", "Cho dù đắt mấy tôi cũng mua."]]}],
cmp:[
 {"vn": "Dù sai thì cũng đừng mắng vậy.", "zh": "[就算]他错了，你[也]别这么骂他。", "py": "Jiùsuàn tā cuò le, nǐ yě bié zhème mà tā.", "ok": true, "why": "就算 = cứ cho là."}],
ex:[
 ["[就算]下雨，我们[也]照样去。", "Jiùsuàn xià yǔ, wǒmen yě zhàoyàng qù.", "Dù mưa chúng tôi vẫn đi."],
 ["[就算]没时间，[也]该打个电话。", "Jiùsuàn méi shíjiān, yě gāi dǎ gè diànhuà.", "Dù không rảnh cũng nên gọi một cuộc."]],
errs:[
 {"bad": "就算下雨，但是我去。", "good": "就算下雨，我也去。", "why": "Vế sau dùng 也."},
 {"bad": "就算他知道，也我不怕。", "good": "就算他知道，我也不怕。", "why": "也 sau chủ ngữ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "就算再忙，＿要吃饭。", "vi": "Dù bận mấy cũng phải ăn.", "o": ["才", "也", "但"], "a": 1, "why": "就算…也."}, {"q": "“就算” gần nghĩa nhất với:", "vi": "Chọn từ gần nghĩa.", "o": ["即使", "除非", "要是不"], "a": 0, "why": "Đều nhượng bộ."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["就算", "再贵，", "我", "也", "要买"], "a": "就算再贵，我也要买。", "vi": "Dù đắt mấy tôi cũng mua."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Cho dù anh ta biết, tôi cũng không sợ (dùng 就算).", "a": "就算他知道了，我也不怕。 / 就算他知道，我也不怕。"}]}],
rel:["新4.64", "新5.38", "新5.41"]
};
