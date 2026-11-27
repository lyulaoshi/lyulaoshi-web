// Bài ngữ pháp 【新6.42】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.42", title:"转折复句：虽……，但／可／却／也……", vi:"虽…但/却… — tuy … nhưng …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>虽</b> (văn viết của 虽然).",
 "Kết hợp <b>但 / 可 / 却 / 也</b>."],
rules:[
 {"t": "(S) 虽 + A，但 / 可 + B", "fx": [["(S)", ""], ["虽", null], ["A", ""], ["，", ""], ["但 / 可", null], ["B", ""]], "mean": "Tuy A nhưng B.", "ex": [["{1|房子}{2|虽}{3|小}，{4|但}{5|很舒适}。", "Fángzi suī xiǎo, dàn hěn shūshì.", "Nhà tuy nhỏ nhưng thoải mái."], ["{1|他}{2|虽}{3|年轻}，{4|可}{5|经验丰富}。", "Tā suī niánqīng, kě jīngyàn fēngfù.", "Anh ấy tuy trẻ nhưng giàu kinh nghiệm."]]},
 {"t": "虽 + A，S + 却 / 也 + B", "fx": [["虽", null], ["A", ""], ["，", ""], ["S", ""], ["却 / 也", null], ["B", ""]], "mean": "却, 也 đứng sau chủ ngữ.", "ex": [["{1|虽}{2|很累}，{3|他}{4|却}{5|不肯休息}。", "Suī hěn lèi, tā què bù kěn xiūxi.", "Tuy mệt, anh ấy lại không chịu nghỉ."]]}],
cmp:[
 {"vn": "Tuy thua nhưng vẫn vui.", "zh": "[虽]败[犹]荣。", "py": "Suī bài yóu róng.", "ok": true, "why": "Thành ngữ dùng 虽 trong văn ngôn."}],
ex:[
 ["价格[虽]高，质量[却]一般。", "Jiàgé suī gāo, zhìliàng què yìbān.", "Giá cao mà chất lượng bình thường."],
 ["路[虽]远，我们[也]要去。", "Lù suī yuǎn, wǒmen yě yào qù.", "Đường tuy xa, chúng tôi cũng đi."]],
errs:[
 {"bad": "虽房子小，所以很舒适。", "good": "房子虽小，但很舒适。", "why": "虽 đi với ý trái ngược."},
 {"bad": "虽很累，却他不休息。", "good": "虽很累，他却不休息。", "why": "却 sau chủ ngữ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他虽小，＿懂很多事。", "vi": "Nó tuy nhỏ nhưng hiểu nhiều.", "o": ["但", "就", "因此"], "a": 0, "why": "虽……但."}, {"q": "天气虽冷，大家的热情＿很高。", "vi": "Trời lạnh mà ai cũng hăng hái.", "o": ["所以", "因而", "却"], "a": 2, "why": "却."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["房子", "虽小，", "但", "很舒适"], "a": "房子虽小，但很舒适。", "vi": "Nhà tuy nhỏ nhưng thoải mái."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy tuy trẻ nhưng giàu kinh nghiệm (dùng 虽).", "a": "他虽年轻，但经验丰富。 / 他虽年轻，可经验丰富。 / 他虽然年轻，但经验丰富。"}]}],
rel:["二65", "新4.10", "新4.59"]
};
