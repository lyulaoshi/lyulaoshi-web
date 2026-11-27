// Bài ngữ pháp 【新7.23】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.23", title:"语气副词（4）：务必、幸好、幸亏、终究、何不、何尝、何苦", vi:"务必, 幸亏, 终究, 何不, 何尝, 何苦", tag:"词类 · 副词",
goals:[
 "Dùng <b>务必</b> (nhất thiết), <b>幸好 / 幸亏</b> (may mà), <b>终究</b> (rốt cuộc).",
 "Hỏi tu từ với <b>何不, 何尝, 何苦</b>."],
rules:[
 {"t": "务必 + V", "fx": [["务必", null], ["V", ""]], "mean": "Nhất thiết phải (yêu cầu trang trọng).", "ex": [["请{1|务必}{2|准时到场}。", "Qǐng wùbì zhǔnshí dàochǎng.", "Xin nhất thiết đến đúng giờ."]]},
 {"t": "幸好 / 幸亏 + việc may，…", "fx": [["幸好 / 幸亏", null], ["việc may", ""], ["，", ""], ["kết quả", ""]], "mean": "May mà.", "ex": [["{1|幸亏}{2|你提醒我}，{3|不然我就忘了}。", "Xìngkuī nǐ tíxǐng wǒ, bùrán wǒ jiù wàng le.", "May bạn nhắc, không thì tôi quên."], ["{1|幸好}{2|车上人不多}。", "Xìnghǎo chē shang rén bù duō.", "May trên xe ít người."]]},
 {"t": "终究 + V", "fx": [["终究", null], ["V", ""]], "mean": "Cuối cùng vẫn, rốt cuộc.", "ex": [["谎言{1|终究}{2|会被发现}。", "Huǎngyán zhōngjiū huì bèi fāxiàn.", "Lời dối rốt cuộc cũng bị phát hiện."]]},
 {"t": "何不 / 何苦 / 何尝 + V", "fx": [["何不 / 何苦 / 何尝", null], ["V", ""]], "mean": "Sao không · khổ làm gì · đâu phải không.", "ex": [["既然喜欢，{1|何不}{2|试试}？", "Jìrán xǐhuan, hébù shìshi?", "Đã thích thì sao không thử?"], ["你{1|何苦}{2|为难自己}？", "Nǐ hékǔ wéinán zìjǐ?", "Cậu khổ gì tự làm khó mình?"], ["我{1|何尝}{2|不想回家}？", "Wǒ hécháng bù xiǎng huí jiā?", "Tôi đâu phải không muốn về nhà?"]]}],
cmp:[
 {"vn": "Sao không hỏi thầy?", "zh": "[何不]问问老师？", "py": "Hébù wènwen lǎoshī?", "ok": true, "why": "何不 = 为什么不."}],
ex:[
 ["参会人员[务必]带身份证。", "Cānhuì rényuán wùbì dài shēnfènzhèng.", "Người dự họp nhất thiết mang căn cước."],
 ["他[终究]是个孩子。", "Tā zhōngjiū shì gè háizi.", "Rốt cuộc nó vẫn là trẻ con."]],
errs:[
 {"bad": "我务必昨天去了。", "good": "请你务必去。", "why": "务必 dùng cho yêu cầu."},
 {"bad": "我何尝想回家？（muốn nói rất muốn）", "good": "我何尝不想回家？", "why": "Hỏi tu từ: 何尝不 = rất muốn."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "收到邮件后请＿回复。", "vi": "Nhận thư xin nhất thiết trả lời.", "o": ["务必", "何苦", "终究"], "a": 0, "why": "Yêu cầu."}, {"q": "这么近，＿走着去？", "vi": "Gần thế, sao không đi bộ?", "o": ["幸亏", "何不", "务必"], "a": 1, "why": "Đề nghị."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["请", "务必", "准时", "到场"], "a": "请务必准时到场。", "vi": "Xin nhất thiết đến đúng giờ."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "May bạn nhắc tôi, không thì tôi quên (dùng 幸亏).", "a": "幸亏你提醒我，不然我就忘了。 / 幸亏你提醒我，否则我就忘了。"}]}],
rel:["新5.11", "新7.22", "新5.36"]
};
