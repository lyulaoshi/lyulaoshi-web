// Bài ngữ pháp 【新7.43】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.43", title:"比较句5：A＋形容词＋于／过＋B", vi:"Câu so sánh 5 — A + Adj + 于 / 过 + B", tag:"句子的类型 · 特殊句型",
goals:[
 "So sánh kiểu văn viết: <b>A 高于 B</b>.",
 "Dùng <b>过</b> trong thành ngữ: 大过天."],
rules:[
 {"t": "A + Adj + 于 + B", "fx": [["A", ""], ["Adj", ""], ["于", null], ["B", ""]], "mean": "A … hơn B (văn viết).", "ex": [["{1|今年的产量}{2|高}{3|于}{4|去年}。", "Jīnnián de chǎnliàng gāo yú qùnián.", "Sản lượng năm nay cao hơn năm ngoái."], ["{1|健康}{2|重}{3|于}{4|金钱}。", "Jiànkāng zhòng yú jīnqián.", "Sức khỏe quan trọng hơn tiền bạc."]]},
 {"t": "A + Adj + 过 + B", "fx": [["A", ""], ["Adj", ""], ["过", null], ["B", ""]], "mean": "A … hơn cả B (khẩu ngữ, thành ngữ).", "ex": [["{1|孩子的事}{2|大}{3|过}{4|天}。", "Háizi de shì dà guò tiān.", "Chuyện của con lớn hơn trời."]]}],
cmp:[
 {"vn": "Cao hơn mức trung bình", "zh": "[高于]平均水平", "py": "gāo yú píngjūn shuǐpíng", "ok": true, "why": "于 như “hơn” đặt sau tính từ."}],
ex:[
 ["这个城市的人口[少于]十万。", "Zhège chéngshì de rénkǒu shǎo yú shíwàn.", "Dân số thành phố này ít hơn 100 nghìn."],
 ["事实[胜过]雄辩。", "Shìshí shèngguò xióngbiàn.", "Sự thật hơn mọi lời hùng biện."]],
errs:[
 {"bad": "今年的产量比高于去年。", "good": "今年的产量高于去年。", "why": "Đã dùng 于 thì không dùng 比."},
 {"bad": "健康于重金钱。", "good": "健康重于金钱。", "why": "Adj + 于."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "出生人数低＿死亡人数。", "vi": "Số sinh thấp hơn số tử.", "o": ["于", "比", "从"], "a": 0, "why": "低于."}, {"q": "他把朋友看得重＿一切。", "vi": "Anh ấy coi bạn bè nặng hơn tất cả.", "o": ["比", "对着", "过"], "a": 2, "why": "重过."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["健康", "重于", "金钱"], "a": "健康重于金钱。", "vi": "Sức khỏe quan trọng hơn tiền bạc."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Sản lượng năm nay cao hơn năm ngoái (dùng 于).", "a": "今年的产量高于去年。 / 今年产量高于去年。"}]}],
rel:["新5.32", "新4.53", "新6.13"]
};
