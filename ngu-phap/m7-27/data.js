// Bài ngữ pháp 【新7.27】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.27", title:"连词：鉴于、况且、免得、若、倘若、以防", vi:"鉴于, 况且, 免得, 若, 倘若, 以防", tag:"词类 · 连词",
goals:[
 "Thêm lý do bằng <b>况且</b>; phòng tránh bằng <b>免得, 以防</b>.",
 "Giả thiết văn viết <b>若, 倘若</b>; nêu căn cứ <b>鉴于</b>."],
rules:[
 {"t": "Lý do 1，况且 + lý do 2", "fx": [["lý do 1", ""], ["，", ""], ["况且", null], ["lý do 2", ""]], "mean": "Hơn nữa.", "ex": [["{1|太远了}，{2|况且}{3|天也黑了}。", "Tài yuǎn le, kuàngqiě tiān yě hēi le.", "Xa quá, hơn nữa trời cũng tối."]]},
 {"t": "Hành động，免得 / 以防 + điều xấu", "fx": [["hành động", ""], ["，", ""], ["免得 / 以防", null], ["điều muốn tránh", ""]], "mean": "Kẻo · đề phòng.", "ex": [["{1|到了打个电话}，{2|免得}{3|家里担心}。", "Dàole dǎ gè diànhuà, miǎnde jiāli dānxīn.", "Đến nơi gọi điện kẻo nhà lo."], ["{1|多带点儿钱}，{2|以防}{3|万一}。", "Duō dài diǎnr qián, yǐfáng wànyī.", "Mang thêm tiền phòng khi bất trắc."]]},
 {"t": "若 / 倘若 + giả thiết，…", "fx": [["若 / 倘若", null], ["giả thiết", ""], ["，", ""], ["kết quả", ""]], "mean": "Nếu.", "ex": [["{1|倘若}{2|有问题}，{3|请及时联系}。", "Tǎngruò yǒu wèntí, qǐng jíshí liánxì.", "Nếu có vấn đề xin liên hệ kịp."]]},
 {"t": "鉴于 + vế 1，quyết định", "fx": [["鉴于", null], ["sự thật", ""], ["，", ""], ["quyết định", ""]], "mean": "Xét thấy (nối vế câu).", "ex": [["{1|鉴于}{2|他表现突出}，{3|公司决定奖励他}。", "Jiànyú tā biǎoxiàn tūchū, gōngsī juédìng jiǎnglì tā.", "Xét anh ấy thể hiện xuất sắc, công ty quyết định khen thưởng."]]}],
cmp:[
 {"vn": "Nhắc nó kẻo quên.", "zh": "提醒他一下儿，[免得]忘了。", "py": "Tíxǐng tā yíxiàr, miǎnde wàng le.", "ok": true, "why": "免得 = kẻo."}],
ex:[
 ["这件事不难，[况且]还有大家帮忙。", "Zhè jiàn shì bù nán, kuàngqiě hái yǒu dàjiā bāngmáng.", "Việc không khó, vả lại còn mọi người giúp."],
 ["[若]无意外，明天就能到。", "Ruò wú yìwài, míngtiān jiù néng dào.", "Nếu không có gì bất ngờ, mai đến."]],
errs:[
 {"bad": "免得家里担心，况且打电话。", "good": "打个电话，免得家里担心。", "why": "免得 đứng ở vế sau."},
 {"bad": "多带钱，以防不钱。", "good": "多带钱，以防万一。", "why": "Cụm quen 以防万一."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "现在走吧，＿迟到。", "vi": "Đi ngay kẻo muộn.", "o": ["况且", "免得", "倘若"], "a": 1, "why": "Kẻo."}, {"q": "房子很贵，＿位置也不好。", "vi": "Nhà đắt, hơn nữa vị trí không đẹp.", "o": ["况且", "以防", "若是不"], "a": 0, "why": "Thêm lý do."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["到了", "打个电话，", "免得", "家里担心"], "a": "到了打个电话，免得家里担心。", "vi": "Đến nơi gọi điện kẻo nhà lo."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Nếu có vấn đề xin liên hệ kịp thời (dùng 倘若).", "a": "倘若有问题，请及时联系。"}]}],
rel:["新7.26", "新6.46", "新5.36"]
};
