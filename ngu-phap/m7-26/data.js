// Bài ngữ pháp 【新7.26】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.26", title:"介词：本着、基于、鉴于、经、依", vi:"本着, 基于, 鉴于, 经, 依 — dựa trên, xét thấy, qua", tag:"词类 · 介词",
goals:[
 "Nêu nguyên tắc, căn cứ: <b>本着, 基于, 依</b>.",
 "Dùng <b>鉴于</b> (xét thấy), <b>经</b> (qua)."],
rules:[
 {"t": "本着 / 基于 + nguyên tắc, cơ sở + V", "fx": [["本着 / 基于", null], ["nguyên tắc / cơ sở", ""], ["V", ""]], "mean": "Theo tinh thần · dựa trên.", "ex": [["我们{1|本着}{2|互利的原则}{3|开展合作}。", "Wǒmen běnzhe hùlì de yuánzé kāizhǎn hézuò.", "Chúng ta hợp tác trên tinh thần cùng có lợi."], ["{1|基于}{2|以上理由}，{3|我反对}。", "Jīyú yǐshàng lǐyóu, wǒ fǎnduì.", "Dựa trên các lý do trên, tôi phản đối."]]},
 {"t": "鉴于 + tình hình，quyết định", "fx": [["鉴于", null], ["tình hình", ""], ["，", ""], ["quyết định", ""]], "mean": "Xét thấy.", "ex": [["{1|鉴于}{2|天气原因}，{3|活动延期}。", "Jiànyú tiānqì yuányīn, huódòng yánqī.", "Xét thời tiết, hoạt động hoãn lại."]]},
 {"t": "经 + người / quá trình + V", "fx": [["经", null], ["người / quá trình", ""], ["V", ""]], "mean": "Qua, được.", "ex": [["{1|经}{2|老师介绍}，{3|我认识了他}。", "Jīng lǎoshī jièshào, wǒ rènshile tā.", "Qua thầy giới thiệu, tôi quen anh ấy."]]},
 {"t": "依 + người / tình hình + 看 / 说", "fx": [["依", null], ["người / tình hình", ""], ["看 / V", ""]], "mean": "Theo (ý kiến, tình hình).", "ex": [["{1|依}{2|我}{3|看}，这个办法可行。", "Yī wǒ kàn, zhège bànfǎ kěxíng.", "Theo tôi, cách này khả thi."]]}],
cmp:[
 {"vn": "Qua kiểm tra, không có vấn đề.", "zh": "[经]检查，没有问题。", "py": "Jīng jiǎnchá, méiyǒu wèntí.", "ok": true, "why": "经 + động danh từ."}],
ex:[
 ["[本着]自愿的原则报名。", "Běnzhe zìyuàn de yuánzé bàomíng.", "Đăng ký theo tinh thần tự nguyện."],
 ["[依]目前的情况，很难完成。", "Yī mùqián de qíngkuàng, hěn nán wánchéng.", "Theo tình hình hiện nay, khó hoàn thành."]],
errs:[
 {"bad": "鉴于我喜欢你，吃饭吧。", "good": "我喜欢你，一起吃饭吧。", "why": "鉴于 là văn công vụ."},
 {"bad": "基于这个理由上。", "good": "基于这个理由", "why": "Không thêm 上."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿专家分析，价格还会上涨。", "vi": "Qua chuyên gia phân tích…", "o": ["本着", "经", "当着"], "a": 1, "why": "经 + phân tích."}, {"q": "＿安全考虑，景区暂时关闭。", "vi": "Vì lý do an toàn, khu du lịch tạm đóng.", "o": ["基于", "依看", "打"], "a": 0, "why": "Dựa trên."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["依我看，", "这个办法", "可行"], "a": "依我看，这个办法可行。", "vi": "Theo tôi, cách này khả thi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Xét thời tiết, hoạt động hoãn lại (dùng 鉴于).", "a": "鉴于天气原因，活动延期。 / 鉴于天气原因，活动延期举行。"}]}],
rel:["新5.14", "新4.15", "新7.27"]
};
