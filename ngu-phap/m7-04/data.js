// Bài ngữ pháp 【新7.04】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.04", title:"动词：除外、可否、可谓、所谓、有所、予以", vi:"除外, 可否, 可谓, 所谓, 有所, 予以", tag:"词类 · 动词",
goals:[
 "Dùng <b>除外</b> (trừ ra), <b>可否</b> (có thể … không), <b>可谓</b> (có thể nói là).",
 "Dùng <b>所谓</b> (cái gọi là), <b>有所</b> (có phần), <b>予以</b> (cho, trao)."],
rules:[
 {"t": "A + 除外 / 可否 + V", "fx": [["đối tượng", ""], ["除外 / 可否", null], ["(V)", ""]], "mean": "除外 đặt sau · 可否 hỏi trang trọng.", "ex": [["{1|周末}{2|除外}，每天都营业。", "Zhōumò chúwài, měi tiān dōu yíngyè.", "Trừ cuối tuần, ngày nào cũng mở cửa."], ["请问{1|您}{2|可否}{3|帮我一下}？", "Qǐngwèn nín kěfǒu bāng wǒ yíxià?", "Xin hỏi ngài có thể giúp tôi không?"]]},
 {"t": "可谓 / 所谓 + cụm", "fx": [["可谓 / 所谓", null], ["cụm", ""]], "mean": "可谓 đáng gọi là · 所谓 cái gọi là.", "ex": [["这次活动{1|可谓}{2|非常成功}。", "Zhè cì huódòng kěwèi fēicháng chénggōng.", "Hoạt động lần này có thể nói rất thành công."], ["{1|所谓}{2|朋友}，就是能互相帮助的人。", "Suǒwèi péngyou, jiùshì néng hùxiāng bāngzhù de rén.", "Cái gọi là bạn, là người giúp được nhau."]]},
 {"t": "有所 / 予以 + động từ hai âm tiết", "fx": [["有所 / 予以", null], ["V hai âm tiết", ""]], "mean": "有所 có phần · 予以 tiến hành, dành cho.", "ex": [["他的态度{1|有所}{2|改变}。", "Tā de tàidu yǒu suǒ gǎibiàn.", "Thái độ anh ấy có thay đổi."], ["对优秀员工{1|予以}{2|奖励}。", "Duì yōuxiù yuángōng yǔyǐ jiǎnglì.", "Khen thưởng nhân viên xuất sắc."]]}],
cmp:[
 {"vn": "Cái gọi là “người bận rộn” ấy mà", "zh": "[所谓]的“忙人”", "py": "suǒwèi de mángrén", "ok": true, "why": "所谓 có thể mang ý mỉa."}],
ex:[
 ["老人和儿童[除外]。", "Lǎorén hé értóng chúwài.", "Trừ người già và trẻ em."],
 ["公司对这个问题[予以]高度重视。", "Gōngsī duì zhège wèntí yǔyǐ gāodù zhòngshì.", "Công ty hết sức coi trọng vấn đề này."]],
errs:[
 {"bad": "除外周末，每天营业。", "good": "周末除外，每天营业。", "why": "除外 đứng sau đối tượng."},
 {"bad": "他的态度有所了。", "good": "他的态度有所改变。", "why": "有所 phải có động từ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他三年写了十本书，＿高产。", "vi": "Ba năm mười cuốn, đáng gọi là năng suất.", "o": ["可谓", "可否", "除外"], "a": 0, "why": "Đáng gọi là."}, {"q": "对违反规定的人要＿处理。", "vi": "Người vi phạm phải bị xử lý.", "o": ["所谓", "有所谓的", "予以"], "a": 2, "why": "予以 + V."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他的", "态度", "有所", "改变"], "a": "他的态度有所改变。", "vi": "Thái độ anh ấy có thay đổi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Trừ cuối tuần, ngày nào cũng mở cửa (dùng 除外).", "a": "周末除外，每天都营业。 / 周末除外，每天营业。"}]}],
rel:["新6.16", "新6.18", "新7.03"]
};
