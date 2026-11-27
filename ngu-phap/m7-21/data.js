// Bài ngữ pháp 【新7.21】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.21", title:"语气副词（2）：果真、好在、何必、竟、愣、莫非、难怪、宁可、宁愿", vi:"果真, 好在, 何必, 莫非, 难怪, 宁可", tag:"词类 · 副词",
goals:[
 "Dùng <b>果真</b> (quả nhiên), <b>好在</b> (may mà), <b>何必</b> (cần gì).",
 "Dùng <b>竟, 愣, 莫非, 难怪, 宁可 / 宁愿</b>."],
rules:[
 {"t": "果真 / 好在 + sự việc", "fx": [["果真 / 好在", null], ["sự việc", ""]], "mean": "Quả thật · may mà.", "ex": [["他{1|果真}{2|来了}。", "Tā guǒzhēn lái le.", "Anh ấy quả nhiên đến."], ["{1|好在}{2|我带了伞}。", "Hǎozài wǒ dàile sǎn.", "May mà tôi mang ô."]]},
 {"t": "何必 + V (呢)", "fx": [["何必", null], ["V", ""], ["(呢)", ""]], "mean": "Cần gì phải.", "ex": [["小事一桩，{1|何必}{2|生气}{3|呢}？", "Xiǎoshì yì zhuāng, hébì shēngqì ne?", "Chuyện nhỏ, giận làm gì?"]]},
 {"t": "莫非 + phỏng đoán (不成)", "fx": [["莫非", null], ["phỏng đoán", ""]], "mean": "Chẳng lẽ.", "ex": [["他还没到，{1|莫非}{2|路上出事了}？", "Tā hái méi dào, mòfēi lùshang chū shì le?", "Anh ấy chưa đến, chẳng lẽ giữa đường có chuyện?"]]},
 {"t": "竟 / 愣 + V", "fx": [["竟 / 愣", null], ["V", ""]], "mean": "竟 vậy mà · 愣 (khẩu ngữ) cứ khăng khăng, vẫn cứ.", "ex": [["他{1|竟}{2|忘了自己说过的话}。", "Tā jìng wàngle zìjǐ shuōguo de huà.", "Anh ta vậy mà quên lời mình nói."], ["大家劝他，他{1|愣}{2|不听}。", "Dàjiā quàn tā, tā lèng bù tīng.", "Mọi người khuyên, anh ta cứ không nghe."]]},
 {"t": "难怪 / 宁可 / 宁愿 + V", "fx": [["难怪 / 宁可 / 宁愿", null], ["V", ""]], "mean": "难怪 thảo nào · thà.", "ex": [["{1|难怪}{2|你汉语这么好}。", "Nánguài nǐ Hànyǔ zhème hǎo.", "Thảo nào tiếng Trung bạn giỏi thế."], ["我{1|宁愿}{2|走路回去}。", "Wǒ nìngyuàn zǒulù huíqu.", "Tôi thà đi bộ về."]]}],
cmp:[
 {"vn": "Cần gì phải thế?", "zh": "[何必]呢？", "py": "Hébì ne?", "ok": true, "why": "何必 = hà tất."}],
ex:[
 ["[好在]发现得早，问题不大。", "Hǎozài fāxiàn de zǎo, wèntí bú dà.", "May phát hiện sớm, vấn đề không lớn."],
 ["他[宁可]自己吃亏，也不麻烦别人。", "Tā nìngkě zìjǐ chīkuī, yě bù máfan biérén.", "Anh ấy thà chịu thiệt chứ không phiền người."]],
errs:[
 {"bad": "你何必要生气吗？", "good": "你何必生气呢？", "why": "何必 đi với 呢, không dùng 吗."},
 {"bad": "莫非他来了吧了。", "good": "莫非他来了？", "why": "Câu phỏng đoán gọn."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿今天不上课，原来是放假。", "vi": "Thảo nào hôm nay không học.", "o": ["莫非", "何必", "难怪"], "a": 2, "why": "Thảo nào."}, {"q": "都是自己人，＿这么客气！", "vi": "Người nhà cả, cần gì khách sáo!", "o": ["好在", "何必", "果真"], "a": 1, "why": "Cần gì."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "还没到，", "莫非", "路上", "出事了"], "a": "他还没到，莫非路上出事了。", "vi": "Anh ấy chưa đến, chẳng lẽ có chuyện?"}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "May mà tôi mang ô (dùng 好在).", "a": "好在我带了伞。"}]}],
rel:["新5.11", "新7.20", "新7.22"]
};
