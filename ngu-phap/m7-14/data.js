// Bài ngữ pháp 【新7.14】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.14", title:"频率副词：连连、屡次、屡屡、频、时而、时时、相继、一个劲儿、一连、再度", vi:"Phó từ tần suất 屡次, 时而, 相继, 一连, 再度…", tag:"词类 · 副词",
goals:[
 "Nói việc <b>lặp lại nhiều lần</b>: 连连, 屡次, 屡屡, 频.",
 "Phân biệt <b>时而, 时时, 相继, 一个劲儿, 一连, 再度</b>."],
rules:[
 {"t": "连连 / 屡次 / 屡屡 / 频 + V", "fx": [["连连 / 屡次 / 屡屡 / 频", null], ["V", ""]], "mean": "Liên tiếp, nhiều lần.", "ex": [["他{1|连连}{2|点头}。", "Tā liánlián diǎntóu.", "Anh ấy gật đầu lia lịa."], ["他{1|屡次}{2|违反规定}。", "Tā lǚcì wéifǎn guīdìng.", "Anh ta nhiều lần vi phạm quy định."], ["这支球队{1|屡屡}{2|获胜}。", "Zhè zhī qiúduì lǚlǚ huòshèng.", "Đội này thắng liên tiếp."], ["她向观众{1|频}{2|频招手}。", "Tā xiàng guānzhòng pínpín zhāoshǒu.", "Cô ấy vẫy tay chào khán giả liên tục."]]},
 {"t": "时而 / 时时 / 一个劲儿 + V", "fx": [["时而 / 时时 / 一个劲儿", null], ["V", ""]], "mean": "时而 lúc lúc · 时时 luôn luôn · 一个劲儿 cứ liền một mạch.", "ex": [["天空中{1|时而}{2|飞过几只鸟}。", "Tiānkōng zhōng shí'ér fēiguò jǐ zhī niǎo.", "Trên trời chốc chốc bay qua vài con chim."], ["妈妈的话我{1|时时}{2|记在心里}。", "Māma de huà wǒ shíshí jì zài xīnli.", "Lời mẹ tôi luôn ghi trong lòng."], ["孩子{1|一个劲儿}地{2|哭}。", "Háizi yígejìnr de kū.", "Đứa bé cứ khóc mãi."]]},
 {"t": "相继 / 一连 / 再度 + V", "fx": [["相继 / 一连 / 再度", null], ["V", ""]], "mean": "相继 nối tiếp nhau · 一连 liền một mạch · 再度 một lần nữa.", "ex": [["几家公司{1|相继}{2|成立}。", "Jǐ jiā gōngsī xiāngjì chénglì.", "Mấy công ty nối nhau thành lập."], ["雨{1|一连}{2|下了三天}。", "Yǔ yìlián xiàle sān tiān.", "Mưa liền ba ngày."], ["两国{1|再度}{2|举行会谈}。", "Liǎng guó zàidù jǔxíng huìtán.", "Hai nước lại hội đàm."]]}],
cmp:[
 {"vn": "Anh ấy cứ xin lỗi mãi.", "zh": "他[一个劲儿]地道歉。", "py": "Tā yígejìnr de dàoqiàn.", "ok": true, "why": "一个劲儿 khẩu ngữ."}],
ex:[
 ["老人[连连]称赞。", "Lǎorén liánlián chēngzàn.", "Cụ già khen ngợi mãi."],
 ["他[一连]打了三个电话。", "Tā yìlián dǎle sān gè diànhuà.", "Anh ấy gọi liền ba cuộc."]],
errs:[
 {"bad": "他一连昨天打电话。", "good": "他昨天一连打了三个电话。", "why": "一连 đi với số lượng."},
 {"bad": "几家公司相继地一起成立。", "good": "几家公司相继成立。", "why": "相继 là lần lượt, không đi với 一起."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他＿熬夜了三个晚上。", "vi": "Anh ấy thức liền ba đêm.", "o": ["时时", "一连", "相继地都"], "a": 1, "why": "Liền một mạch."}, {"q": "她唱得好，观众＿鼓掌。", "vi": "Cô hát hay, khán giả vỗ tay lia lịa.", "o": ["再度", "连连", "时而的"], "a": 1, "why": "Liên tiếp."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["两国", "再度", "举行", "会谈"], "a": "两国再度举行会谈。", "vi": "Hai nước lại hội đàm."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mưa liền ba ngày (dùng 一连).", "a": "雨一连下了三天。"}]}],
rel:["新6.09", "新5.07", "新6.08"]
};
