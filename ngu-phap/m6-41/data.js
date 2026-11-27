// Bài ngữ pháp 【新6.41】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.41", title:"选择复句：要么……，要么……", vi:"要么…要么… — hoặc … hoặc …", tag:"句子的类型 · 复句",
goals:[
 "Đưa ra <b>hai khả năng phải chọn</b> bằng 要么……要么…….",
 "So với 或者……或者……."],
rules:[
 {"t": "要么 + A，要么 + B", "fx": [["要么", null], ["A", ""], ["，", ""], ["要么", null], ["B", ""]], "mean": "Hoặc là … hoặc là … (dứt khoát).", "ex": [["{1|要么}{2|你来}，{3|要么}{4|我去}。", "Yàome nǐ lái, yàome wǒ qù.", "Hoặc bạn đến, hoặc tôi đi."], ["周末他{1|要么}{2|睡觉}，{3|要么}{4|打游戏}。", "Zhōumò tā yàome shuìjiào, yàome dǎ yóuxì.", "Cuối tuần nó không ngủ thì chơi game."]]}],
cmp:[
 {"vn": "Không làm thì thôi, đã làm thì làm cho tốt.", "zh": "[要么]不做，[要么]做好。", "py": "Yàome bú zuò, yàome zuòhǎo.", "ok": true, "why": "Ép chọn một trong hai."}],
ex:[
 ["[要么]现在出发，[要么]明天再去。", "Yàome xiànzài chūfā, yàome míngtiān zài qù.", "Hoặc đi ngay, hoặc mai đi."],
 ["晚饭[要么]吃面，[要么]吃饺子。", "Wǎnfàn yàome chī miàn, yàome chī jiǎozi.", "Bữa tối ăn mì hoặc sủi cảo."]],
errs:[
 {"bad": "要么你来，还是我去？", "good": "你来还是我去？", "why": "Câu hỏi dùng 还是."},
 {"bad": "要么你来，或者我去。", "good": "要么你来，要么我去。", "why": "Giữ cặp 要么……要么."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "要么买下来，＿别看了。", "vi": "Hoặc mua, hoặc đừng xem nữa.", "o": ["要么", "否则的", "还是呢"], "a": 0, "why": "要么…要么."}, {"q": "＿坐火车，要么坐飞机。", "vi": "Hoặc đi tàu hoặc đi máy bay.", "o": ["要是", "要不是", "要么"], "a": 2, "why": "要么 ≠ 要是 (nếu)."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["要么", "你来，", "要么", "我去"], "a": "要么你来，要么我去。", "vi": "Hoặc bạn đến, hoặc tôi đi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Hoặc đi ngay, hoặc mai đi (dùng 要么).", "a": "要么现在出发，要么明天再去。 / 要么现在走，要么明天再去。"}]}],
rel:["新3.63", "新5.35", "三67"]
};
