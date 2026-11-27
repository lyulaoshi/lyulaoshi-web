// Bài ngữ pháp 【新7.08】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.08", title:"动量词：通；复合量词：人次", vi:"通 (một hồi), 人次 (lượt người)", tag:"词类 · 量词",
goals:[
 "Dùng <b>通 (tòng)</b> cho một hồi nói, mắng, gõ.",
 "Dùng <b>人次</b> đếm số <b>lượt người</b>."],
rules:[
 {"t": "V + (了) + 一通", "fx": [["V", ""], ["一通", null]], "mean": "Một hồi, một trận (thường dài, bừa).", "ex": [["妈妈把他{1|批评了}{2|一通}。", "Māma bǎ tā pīpíngle yí tòng.", "Mẹ mắng nó một trận."], ["他乱{1|说了}{2|一通}。", "Tā luàn shuōle yí tòng.", "Anh ta nói lung tung một hồi."]]},
 {"t": "số + 人次", "fx": [["Số", ""], ["人次", null]], "mean": "Tổng lượt người (một người đi hai lần tính hai).", "ex": [["今年参观博物馆的有{1|十万}{2|人次}。", "Jīnnián cānguān bówùguǎn de yǒu shíwàn réncì.", "Năm nay có 100 nghìn lượt tham quan bảo tàng."]]}],
cmp:[
 {"vn": "Mười nghìn lượt khách", "zh": "一万[人次]", "py": "yíwàn réncì", "ok": true, "why": "“lượt người” = 人次."}],
ex:[
 ["他对着电话喊了一[通]。", "Tā duìzhe diànhuà hǎnle yí tòng.", "Anh ta hét vào điện thoại một hồi."],
 ["这条线路每天运送乘客五万[人次]。", "Zhè tiáo xiànlù měi tiān yùnsòng chéngkè wǔwàn réncì.", "Tuyến này mỗi ngày chở 50 nghìn lượt khách."]],
errs:[
 {"bad": "今年有十万个人次参观。", "good": "今年有十万人次参观。", "why": "人次 không thêm 个."},
 {"bad": "他批评我一个通。", "good": "他批评了我一通。", "why": "通 không đi với 个."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "展览吸引了两万＿观众。", "vi": "Triển lãm thu hút 20 nghìn lượt khán giả.", "o": ["人次", "通", "番次"], "a": 0, "why": "Lượt người."}, {"q": "他发了一＿脾气。", "vi": "Anh ta nổi cáu một trận.", "o": ["人次", "枚", "通"], "a": 2, "why": "一通."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "乱说了", "一通"], "a": "他乱说了一通。", "vi": "Anh ta nói lung tung một hồi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mẹ mắng nó một trận (dùng 一通).", "a": "妈妈批评了他一通。 / 妈妈把他批评了一通。"}]}],
rel:["新6.05", "新4.04", "新7.07"]
};
