// Bài ngữ pháp 【新6.39】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.39", title:"“把”字句4", vi:"Câu chữ 把 4 — nguyên nhân làm ai thế nào", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng 把 với <b>chủ ngữ là sự vật</b> gây ra kết quả.",
 "Dùng 把 + <b>người chịu và cũng là người làm</b>: 把他累坏了."],
rules:[
 {"t": "Sự vật + 把 + O + V + kết quả", "fx": [["nguyên nhân", ""], ["把", null], ["O", ""], ["V + thành phần khác", ""]], "mean": "Cái gì làm O thế nào.", "ex": [["{1|这双鞋}{2|把}{3|我的脚}{4|磨破了}。", "Zhè shuāng xié bǎ wǒ de jiǎo mópò le.", "Đôi giày này làm chân tôi trầy."], ["{1|这个消息}{2|把}{3|大家}{4|高兴坏了}。", "Zhège xiāoxi bǎ dàjiā gāoxìng huài le.", "Tin này làm mọi người mừng quá."]]},
 {"t": "(S) + 把 + người (cũng là người làm) + V + …", "fx": [["(S)", ""], ["把", null], ["người", ""], ["V + kết quả", ""]], "mean": "Khiến ai làm gì / thế nào.", "ex": [["{1|这一天}{2|把}{3|我}{4|忙得连饭都没吃}。", "Zhè yì tiān bǎ wǒ máng de lián fàn dōu méi chī.", "Cả ngày bận đến cơm cũng không ăn."], ["{1|孩子的话}{2|把}{3|全家人}{4|都逗笑了}。", "Háizi de huà bǎ quán jiā rén dōu dòuxiào le.", "Lời đứa bé làm cả nhà bật cười."]]}],
cmp:[
 {"vn": "Công việc này làm tôi mệt rã rời.", "zh": "[这工作把我累坏了]。", "py": "Zhè gōngzuò bǎ wǒ lèihuài le.", "ok": true, "why": "Chủ ngữ là nguyên nhân."}],
ex:[
 ["[那场电影把她感动得哭了]。", "Nà chǎng diànyǐng bǎ tā gǎndòng de kū le.", "Bộ phim làm cô ấy cảm động phát khóc."],
 ["[一路上把他渴坏了]。", "Yílù shang bǎ tā kěhuài le.", "Suốt đường anh ấy khát khô."]],
errs:[
 {"bad": "这双鞋磨破了把我的脚。", "good": "这双鞋把我的脚磨破了。", "why": "把 + O đứng trước động từ."},
 {"bad": "这个消息把大家高兴。", "good": "这个消息把大家高兴坏了。", "why": "Cần thành phần chỉ kết quả."},
 {"bad": "我把这个消息高兴了。", "good": "这个消息把我高兴坏了。", "why": "Nguyên nhân làm chủ ngữ, người đứng sau 把."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这件事＿他急得睡不着。", "vi": "Việc này làm anh ấy lo không ngủ được.", "o": ["被", "把", "对"], "a": 1, "why": "把 + người + kết quả."}, {"q": "跑了一天，把我累＿了。", "vi": "Chạy cả ngày mệt rã rời.", "o": ["很", "着呢", "坏"], "a": 2, "why": "累坏了."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["这双鞋", "把", "我的脚", "磨破了"], "a": "这双鞋把我的脚磨破了。", "vi": "Đôi giày này làm chân tôi trầy."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Tin này làm mọi người mừng quá (dùng 把).", "a": "这个消息把大家高兴坏了。 / 这个消息把大家乐坏了。"}]}],
rel:["三54", "新5.30", "新4.50"]
};
