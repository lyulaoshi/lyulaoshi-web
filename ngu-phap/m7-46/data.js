// Bài ngữ pháp 【新7.46】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.46", title:"选择复句：或……，或……；宁可／宁愿……，也不……；与其……，宁愿／宁可……", vi:"Hoặc…; thà…chứ không…; thay vì… thà…", tag:"句子的类型 · 复句",
goals:[
 "Chọn lựa văn viết <b>或……或……</b>.",
 "Dùng <b>宁可……也不……</b> và <b>与其……宁愿……</b>."],
rules:[
 {"t": "或 + A，或 + B", "fx": [["或", null], ["A", ""], ["，", ""], ["或", null], ["B", ""]], "mean": "Hoặc … hoặc …", "ex": [["他们{1|或}{2|坐}{3|或}{4|站}。", "Tāmen huò zuò huò zhàn.", "Họ người ngồi người đứng."]]},
 {"t": "宁可 / 宁愿 + A，也不 + B", "fx": [["宁可 / 宁愿", null], ["A", ""], ["，", ""], ["也不", null], ["B", ""]], "mean": "Thà A chứ không B.", "ex": [["我{1|宁可}{2|走路}，{3|也不}{4|坐他的车}。", "Wǒ nìngkě zǒulù, yě bú zuò tā de chē.", "Tôi thà đi bộ chứ không ngồi xe anh ta."]]},
 {"t": "与其 + A，宁愿 / 宁可 + B", "fx": [["与其", null], ["A", ""], ["，", ""], ["宁愿 / 宁可", null], ["B", ""]], "mean": "Thay vì A, thà B.", "ex": [["{1|与其}{2|在家闲着}，{3|宁可}{4|出去打工}。", "Yǔqí zài jiā xiánzhe, nìngkě chūqu dǎgōng.", "Thay vì ngồi không ở nhà, thà đi làm thêm."]]}],
cmp:[
 {"vn": "Thà thiếu còn hơn ẩu.", "zh": "[宁]缺毋滥", "py": "nìng quē wú làn", "ok": true, "why": "宁 = thà."}],
ex:[
 ["他[宁愿]不睡觉，[也不]放弃比赛。", "Tā nìngyuàn bú shuìjiào, yě bú fàngqì bǐsài.", "Anh ấy thà thức chứ không bỏ trận."],
 ["[或]早[或]晚，他总会知道。", "Huò zǎo huò wǎn, tā zǒng huì zhīdào.", "Sớm hay muộn anh ấy cũng biết."]],
errs:[
 {"bad": "宁可走路，不也坐车。", "good": "宁可走路，也不坐车。", "why": "也不."},
 {"bad": "与其在家，不宁可出去。", "good": "与其在家闲着，宁可出去走走。", "why": "与其…宁可."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他宁可自己辛苦，＿让父母操心。", "vi": "Thà mình vất vả chứ không để bố mẹ lo.", "o": ["就要", "也不", "才能"], "a": 1, "why": "宁可…也不."}, {"q": "＿等他，宁可自己动手。", "vi": "Thay vì đợi, thà tự làm.", "o": ["即使", "与其", "或是不"], "a": 1, "why": "与其."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我宁可", "走路，", "也不", "坐他的车"], "a": "我宁可走路，也不坐他的车。", "vi": "Tôi thà đi bộ chứ không ngồi xe anh ta."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Thay vì ngồi không ở nhà, thà ra ngoài làm thêm.", "a": "与其在家闲着，宁可出去打工。 / 与其在家闲着，宁愿出去打工。"}]}],
rel:["新5.35", "新7.21", "新6.41"]
};
