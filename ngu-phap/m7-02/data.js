// Bài ngữ pháp 【新7.02】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.02", title:"类后缀：—观、—鬼、—界、—然、—坛、—为、—制", vi:"Hậu tố 观, 鬼, 界, 然, 坛, 为, 制", tag:"语素 · 类后缀",
goals:[
 "Hiểu các hậu tố <b>观</b> (quan niệm), <b>界</b> (giới), <b>坛</b> (đàn), <b>制</b> (chế độ).",
 "Hiểu <b>鬼</b> (kẻ…), <b>然</b> (đuôi trạng thái), <b>为</b> (làm, là)."],
rules:[
 {"t": "từ gốc + 观 / 界 / 坛 / 制", "fx": [["từ gốc", ""], ["观 / 界 / 坛 / 制", null]], "mean": "价值观 giá trị quan · 文艺界 giới văn nghệ · 体坛 làng thể thao · 学分制 chế độ tín chỉ.", "ex": [["年轻人的{1|价值}{2|观}不太一样。", "Niánqīngrén de jiàzhíguān bú tài yíyàng.", "Giá trị quan của người trẻ khác nhau."], ["他在{1|教育}{2|界}很有名。", "Tā zài jiàoyùjiè hěn yǒumíng.", "Ông ấy nổi tiếng trong giới giáo dục."], ["这是{1|体}{2|坛}的一件大事。", "Zhè shì tǐtán de yí jiàn dàshì.", "Đây là sự kiện lớn của làng thể thao."], ["大学实行{1|学分}{2|制}。", "Dàxué shíxíng xuéfēnzhì.", "Đại học áp dụng chế độ tín chỉ."]]},
 {"t": "từ gốc + 鬼 / 然 / 为", "fx": [["từ gốc", ""], ["鬼 / 然 / 为", null]], "mean": "胆小鬼 đồ nhát · 显然 hiển nhiên · 认为 cho là.", "ex": [["你这个{1|胆小}{2|鬼}！", "Nǐ zhège dǎnxiǎoguǐ!", "Cậu đúng là đồ nhát gan!"], ["他{1|显}{2|然}没听懂。", "Tā xiǎnrán méi tīngdǒng.", "Rõ ràng anh ấy không hiểu."], ["大家选他{1|作}{2|为}代表。", "Dàjiā xuǎn tā zuòwéi dàibiǎo.", "Mọi người chọn anh ấy làm đại diện."]]}],
cmp:[
 {"vn": "Nhân sinh quan", "zh": "人生[观]", "py": "rénshēngguān", "ok": true, "why": "Trật tự giống Hán Việt “nhân sinh quan”."}],
ex:[
 ["他是个[酒鬼]。", "Tā shì gè jiǔguǐ.", "Ông ấy là con sâu rượu."],
 ["商[界]对这件事很关注。", "Shāngjiè duì zhè jiàn shì hěn guānzhù.", "Giới kinh doanh rất quan tâm việc này."]],
errs:[
 {"bad": "观价值", "good": "价值观", "why": "Hậu tố đứng sau."},
 {"bad": "他是界教育的。", "good": "他是教育界的。", "why": "界 đứng sau lĩnh vực."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他在文艺＿工作了三十年。", "vi": "Ông ấy làm trong giới văn nghệ 30 năm.", "o": ["观", "制", "界"], "a": 2, "why": "文艺界."}, {"q": "公司实行八小时工作＿。", "vi": "Công ty áp dụng chế độ làm 8 giờ.", "o": ["坛", "制", "鬼"], "a": 1, "why": "工作制."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "在", "教育界", "很", "有名"], "a": "他在教育界很有名。", "vi": "Ông ấy nổi tiếng trong giới giáo dục."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Đại học áp dụng chế độ tín chỉ.", "a": "大学实行学分制。"}]}],
rel:["新6.02", "新7.01"]
};
