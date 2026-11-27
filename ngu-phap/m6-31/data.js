// Bài ngữ pháp 【新6.31】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.31", title:"早（也）不X，晚（也）不X", vi:"早不X晚不X — không sớm không muộn lại đúng lúc này", tag:"短语 · 固定格式",
goals:[
 "Phàn nàn việc xảy ra <b>đúng lúc không mong</b>.",
 "Thêm 偏偏 ở vế sau."],
rules:[
 {"t": "早不 X，晚不 X，(偏偏) …", "fx": [["早(也)不", null], ["X", ""], ["，", ""], ["晚(也)不", null], ["X", ""], ["偏偏…", ""]], "mean": "Không sớm không muộn, lại …", "ex": [["{1|早不}{2|来}，{3|晚不}{4|来}，{5|偏偏吃饭时来}。", "Zǎo bù lái, wǎn bù lái, piānpiān chī fàn shí lái.", "Không sớm không muộn, đúng giờ ăn lại đến."], ["手机{1|早不}{2|坏}，{3|晚不}{4|坏}，{5|考试前坏了}。", "Shǒujī zǎo bú huài, wǎn bú huài, kǎoshì qián huài le.", "Điện thoại hỏng đúng ngay trước kỳ thi."]]}],
cmp:[
 {"vn": "Mưa đúng lúc mình ra đường", "zh": "[早不下，晚不下]，偏偏现在下", "py": "zǎo bú xià, wǎn bú xià, piānpiān xiànzài xià", "ok": true, "why": "“Không sớm không muộn”."}],
ex:[
 ["你[早也不说，晚也不说]，现在才说。", "Nǐ zǎo yě bù shuō, wǎn yě bù shuō, xiànzài cái shuō.", "Cậu không nói sớm, giờ mới nói."],
 ["他[早不病，晚不病]，偏偏今天病了。", "Tā zǎo bú bìng, wǎn bú bìng, piānpiān jīntiān bìng le.", "Anh ấy ốm đúng hôm nay."]],
errs:[
 {"bad": "早不来，晚来不。", "good": "早不来，晚不来。", "why": "不 đứng trước động từ."},
 {"bad": "早不来，晚不去，偏偏现在来。", "good": "早不来，晚不来，偏偏现在来。", "why": "Hai chỗ cùng một động từ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "车早不坏，晚不＿，偏偏今天坏。", "vi": "Xe hỏng đúng hôm nay.", "o": ["好", "坏", "开了"], "a": 1, "why": "Lặp lại 坏."}, {"q": "早不说，晚不说，＿现在说。", "vi": "Không nói sớm, lại nói lúc này.", "o": ["未必", "总算", "偏偏"], "a": 2, "why": "偏偏 = lại cứ."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["早不来，", "晚不来，", "偏偏", "现在来"], "a": "早不来，晚不来，偏偏现在来。", "vi": "Không sớm không muộn, lại đến lúc này."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy không ốm sớm không ốm muộn, lại ốm đúng hôm nay.", "a": "他早不病，晚不病，偏偏今天病了。"}]}],
rel:["新5.41", "新6.29", "新5.06"]
};
