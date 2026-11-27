// Bài ngữ pháp 【新6.36】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.36", title:"X归X，Y归Y", vi:"X归X，Y归Y — X ra X, Y ra Y", tag:"短语 · 固定格式",
goals:[
 "Tách bạch hai việc bằng <b>X归X，Y归Y</b>.",
 "Dùng một vế <b>X归X，……</b> để nhượng bộ."],
rules:[
 {"t": "X 归 X，Y 归 Y", "fx": [["X", ""], ["归", null], ["X", ""], ["，", ""], ["Y", ""], ["归", null], ["Y", ""]], "mean": "Việc nào ra việc đó.", "ex": [["{1|朋友}{2|归}{3|朋友}，{4|钱}{5|归}{6|钱}。", "Péngyou guī péngyou, qián guī qián.", "Bạn là bạn, tiền là tiền."]]},
 {"t": "X 归 X，可是 / 但 …", "fx": [["X", ""], ["归", null], ["X", ""], ["，", ""], ["可是 / 但…", ""]], "mean": "… thì … nhưng.", "ex": [["{1|喜欢}{2|归}{3|喜欢}，{4|可是不能天天吃}。", "Xǐhuan guī xǐhuan, kěshì bù néng tiāntiān chī.", "Thích thì thích nhưng không thể ngày nào cũng ăn."]]}],
cmp:[
 {"vn": "Nói đùa thì đùa, việc vẫn phải làm.", "zh": "[玩笑归玩笑]，事情还得做。", "py": "Wánxiào guī wánxiào, shìqing hái děi zuò.", "ok": true, "why": "Giống “… ra …”."}],
ex:[
 ["[工作归工作]，生活归生活。", "Gōngzuò guī gōngzuò, shēnghuó guī shēnghuó.", "Công việc ra công việc, đời sống ra đời sống."],
 ["[批评归批评]，他对学生还是很好的。", "Pīpíng guī pīpíng, tā duì xuésheng háishi hěn hǎo de.", "Mắng thì mắng, thầy vẫn rất tốt với trò."]],
errs:[
 {"bad": "归朋友朋友，归钱钱。", "good": "朋友归朋友，钱归钱。", "why": "归 đứng giữa hai X."},
 {"bad": "喜欢归爱，可是不买。", "good": "喜欢归喜欢，可是不买。", "why": "Hai bên 归 phải giống nhau."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "生气归生＿，事情还要办。", "vi": "Giận thì giận, việc vẫn phải làm.", "o": ["病", "活的", "气"], "a": 2, "why": "Lặp lại."}, {"q": "说归说，做＿做。", "vi": "Nói là nói, làm là làm.", "o": ["是的", "回", "归"], "a": 2, "why": "X归X."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["朋友", "归朋友，", "钱", "归钱"], "a": "朋友归朋友，钱归钱。", "vi": "Bạn là bạn, tiền là tiền."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Công việc ra công việc, đời sống ra đời sống.", "a": "工作归工作，生活归生活。"}]}],
rel:["新4.38", "新4.46", "三68"]
};
