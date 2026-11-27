// Bài ngữ pháp 【新7.18】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.18", title:"方式副词（4）：一并、一举、一手、毅然、有意、照常、照例、照样、执意、骤然、逐一、专程", vi:"一并, 一举, 照常, 照样, 执意, 逐一, 专程…", tag:"词类 · 副词",
goals:[
 "Phân biệt <b>照常</b> (như thường), <b>照例</b> (theo lệ), <b>照样</b> (vẫn cứ).",
 "Dùng <b>一并, 一举, 一手, 毅然, 有意, 执意, 骤然, 逐一, 专程</b>."],
rules:[
 {"t": "照常 / 照例 / 照样 + V", "fx": [["照常 / 照例 / 照样", null], ["V", ""]], "mean": "Như mọi khi · theo lệ · vẫn cứ được.", "ex": [["节日期间商店{1|照常}{2|营业}。", "Jiérì qījiān shāngdiàn zhàocháng yíngyè.", "Ngày lễ cửa hàng vẫn mở như thường."], ["饭后他{1|照例}{2|去散步}。", "Fàn hòu tā zhàolì qù sànbù.", "Ăn xong ông ấy đi dạo theo lệ."], ["没有他，我们{1|照样}{2|能完成}。", "Méiyǒu tā, wǒmen zhàoyàng néng wánchéng.", "Không có anh ta chúng tôi vẫn làm xong."]]},
 {"t": "一并 / 一举 / 一手 + V", "fx": [["一并 / 一举 / 一手", null], ["V", ""]], "mean": "Gộp một lượt · một phát · một tay.", "ex": [["这几个问题{1|一并}{2|解决}。", "Zhè jǐ gè wèntí yíbìng jiějué.", "Mấy vấn đề này giải quyết một thể."], ["他{1|一举}{2|成名}。", "Tā yìjǔ chéngmíng.", "Anh ấy một bước nổi danh."], ["这个公司是他{1|一手}{2|建立的}。", "Zhège gōngsī shì tā yìshǒu jiànlì de.", "Công ty này do một tay ông ấy lập nên."]]},
 {"t": "毅然 / 执意 / 有意 + V", "fx": [["毅然 / 执意 / 有意", null], ["V", ""]], "mean": "Kiên quyết · khăng khăng · cố ý, có ý.", "ex": [["她{1|毅然}{2|回到了家乡}。", "Tā yìrán huídàole jiāxiāng.", "Cô ấy dứt khoát trở về quê."], ["他{1|执意}{2|要走}。", "Tā zhíyì yào zǒu.", "Anh ấy cứ khăng khăng đòi đi."], ["他{1|有意}{2|躲着我}。", "Tā yǒuyì duǒzhe wǒ.", "Anh ta cố ý tránh tôi."]]},
 {"t": "骤然 / 逐一 / 专程 + V", "fx": [["骤然 / 逐一 / 专程", null], ["V", ""]], "mean": "Đột ngột · lần lượt từng cái · cất công riêng.", "ex": [["气温{1|骤然}{2|下降}。", "Qìwēn zhòurán xiàjiàng.", "Nhiệt độ tụt đột ngột."], ["老师{1|逐一}{2|回答问题}。", "Lǎoshī zhúyī huídá wèntí.", "Thầy trả lời từng câu một."], ["他{1|专程}{2|来看望老师}。", "Tā zhuānchéng lái kànwàng lǎoshī.", "Anh ấy cất công đến thăm thầy."]]}],
cmp:[
 {"vn": "Mưa cũng vẫn đi.", "zh": "下雨[照样]去。", "py": "Xià yǔ zhàoyàng qù.", "ok": true, "why": "照样 = vẫn cứ."}],
ex:[
 ["春节他[照例]回老家。", "Chūnjié tā zhàolì huí lǎojiā.", "Tết anh ấy về quê như lệ."],
 ["请把表格[逐一]填好。", "Qǐng bǎ biǎogé zhúyī tiánhǎo.", "Hãy điền lần lượt từng mục."]],
errs:[
 {"bad": "他照样每年第一次来。", "good": "他第一次来。", "why": "照样 cần so với lệ đã có."},
 {"bad": "气温骤然慢慢下降。", "good": "气温慢慢下降。", "why": "骤然 là đột ngột."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "虽然停电了，工厂＿生产。", "vi": "Mất điện mà nhà máy vẫn sản xuất.", "o": ["一举", "照样", "专程"], "a": 1, "why": "Vẫn cứ."}, {"q": "他＿从北京赶来参加婚礼。", "vi": "Anh ấy cất công từ Bắc Kinh đến dự cưới.", "o": ["照例", "骤然", "专程"], "a": 2, "why": "Đi riêng vì việc đó."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["老师", "逐一", "回答", "问题"], "a": "老师逐一回答问题。", "vi": "Thầy trả lời từng câu một."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Ngày lễ cửa hàng vẫn mở như thường (dùng 照常).", "a": "节日期间商店照常营业。"}]}],
rel:["新7.17", "新6.10", "新5.02"]
};
