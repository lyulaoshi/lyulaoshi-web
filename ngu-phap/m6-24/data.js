// Bài ngữ pháp 【新6.24】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.24", title:"算了；得了", vi:"算了, 得了 — thôi, được rồi", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>算了</b> để bỏ qua, thôi không làm nữa.",
 "Dùng <b>得了</b> (dé le) để ngăn lại, chấm dứt."],
intro:"得了 ở đây đọc <b>dé le</b>, khác 受得了 (de liǎo).",
rules:[
 {"t": "(việc) + 就 / 还是 + 算了", "fx": [["việc", ""], ["算了", null]], "mean": "Thôi, bỏ đi.", "ex": [["{1|不想去就}{2|算了}。", "Bù xiǎng qù jiù suàn le.", "Không muốn đi thì thôi."], ["{2|算了}，别生气了。", "Suàn le, bié shēngqì le.", "Thôi, đừng giận nữa."]]},
 {"t": "得了 / …得了", "fx": [["得了", null], ["câu", ""]], "mean": "Đủ rồi · cứ … cho xong.", "ex": [["{1|得了}，{2|别吹牛了}。", "Dé le, bié chuīniú le.", "Thôi đi, đừng khoác lác."], ["你直接问他{1|得了}。", "Nǐ zhíjiē wèn tā dé le.", "Cậu hỏi thẳng cho xong."]]}],
cmp:[
 {"vn": "Thôi bỏ đi, không nói nữa.", "zh": "[算了]，不说了。", "py": "Suàn le, bù shuō le.", "ok": true, "why": "算了 = thôi."}],
ex:[
 ["价钱太高，[算了]吧。", "Jiàqián tài gāo, suàn le ba.", "Giá cao quá, thôi vậy."],
 ["[得了]，就这么定了。", "Dé le, jiù zhème dìng le.", "Được rồi, quyết thế."]],
errs:[
 {"bad": "不想去就算。", "good": "不想去就算了。", "why": "Cần 了."},
 {"bad": "得了别说你。", "good": "得了，你别说了。", "why": "得了 tách riêng đầu câu."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "太远了，＿，不去了。", "vi": "Xa quá, thôi không đi.", "o": ["总算", "算了", "不料"], "a": 1, "why": "Bỏ qua."}, {"q": "“得了” trong 得了，别说了 đọc là:", "vi": "Chọn cách đọc.", "o": ["děi le", "dé le"], "a": 1, "why": "Đọc dé le."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["不想去", "就", "算了"], "a": "不想去就算了。", "vi": "Không muốn đi thì thôi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Thôi, đừng giận nữa.", "a": "算了，别生气了。 / 算了吧，别生气了。"}]}],
rel:["新4.40", "新6.23", "二19"]
};
