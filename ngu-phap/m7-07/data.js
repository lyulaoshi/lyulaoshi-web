// Bài ngữ pháp 【新7.07】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.07", title:"名量词：重、截、缕、码、枚、摊、丸、则、幢、宗", vi:"Lượng từ 重, 缕, 枚, 则, 幢, 宗…", tag:"词类 · 量词",
goals:[
 "Ghép lượng từ văn viết theo hình dạng: <b>缕, 截, 枚, 丸</b>.",
 "Dùng <b>重, 码, 摊, 则, 幢, 宗</b> đúng danh từ."],
rules:[
 {"t": "重 / 截 / 缕 / 摊 + N", "fx": [["Số", ""], ["重 / 截 / 缕 / 摊", null], ["Danh từ", ""]], "mean": "重 lớp, tầng · 截 khúc · 缕 sợi, làn · 摊 vũng.", "ex": [["我们克服了{1|一}{2|重}又一重{3|困难}。", "Wǒmen kèfúle yì chóng yòu yì chóng kùnnan.", "Chúng tôi vượt hết lớp khó khăn này đến lớp khác."], ["地上有{1|一}{2|截}{3|木头}。", "Dìshang yǒu yì jié mùtou.", "Dưới đất có một khúc gỗ."], ["{1|一}{2|缕}{3|阳光}照进房间。", "Yì lǚ yángguāng zhàojìn fángjiān.", "Một tia nắng rọi vào phòng."], ["桌上有{1|一}{2|摊}{3|水}。", "Zhuō shang yǒu yì tān shuǐ.", "Trên bàn có một vũng nước."]]},
 {"t": "码 / 枚 / 丸 + N", "fx": [["Số", ""], ["码 / 枚 / 丸", null], ["Danh từ", ""]], "mean": "码 chuyện (一码事) · 枚 huy chương, xu · 丸 viên thuốc.", "ex": [["这是{1|两}{2|码}{3|事}。", "Zhè shì liǎng mǎ shì.", "Đây là hai chuyện khác nhau."], ["她得了{1|三}{2|枚}{3|金牌}。", "Tā déle sān méi jīnpái.", "Cô ấy giành ba huy chương vàng."], ["每天吃{1|两}{2|丸}{3|药}。", "Měi tiān chī liǎng wán yào.", "Mỗi ngày uống hai viên thuốc."]]},
 {"t": "则 / 幢 / 宗 + N", "fx": [["Số", ""], ["则 / 幢 / 宗", null], ["Danh từ", ""]], "mean": "则 mẩu tin · 幢 tòa nhà · 宗 vụ, khoản.", "ex": [["报上有{1|一}{2|则}{3|消息}。", "Bào shang yǒu yì zé xiāoxi.", "Trên báo có một mẩu tin."], ["路边是{1|一}{2|幢}新{3|大楼}。", "Lù biān shì yí zhuàng xīn dàlóu.", "Bên đường là một tòa nhà mới."], ["公司接了{1|一}{2|宗}大{3|生意}。", "Gōngsī jiēle yì zōng dà shēngyi.", "Công ty nhận một thương vụ lớn."]]}],
cmp:[
 {"vn": "Chuyện nào ra chuyện đó.", "zh": "一[码]归一[码]。", "py": "Yì mǎ guī yì mǎ.", "ok": true, "why": "码 đếm “chuyện”."}],
ex:[
 ["墙上挂着一[则]通知。", "Qiáng shang guàzhe yì zé tōngzhī.", "Trên tường treo một thông báo."],
 ["一[缕]香味儿飘过来。", "Yì lǚ xiāngwèir piāo guolai.", "Một làn hương thoảng tới."]],
errs:[
 {"bad": "一个金牌（văn trang trọng）", "good": "一枚金牌", "why": "Huy chương dùng 枚."},
 {"bad": "一座新闻", "good": "一则新闻", "why": "Tin dùng 则."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他今天看到一＿有趣的广告。", "vi": "Hôm nay anh ấy thấy một mẩu quảng cáo hay.", "o": ["幢", "丸", "则"], "a": 2, "why": "一则广告."}, {"q": "山下有几＿别墅。", "vi": "Dưới núi có mấy tòa biệt thự.", "o": ["幢", "缕", "码"], "a": 0, "why": "Nhà → 幢."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["她", "得了", "三枚", "金牌"], "a": "她得了三枚金牌。", "vi": "Cô ấy giành ba huy chương vàng."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Đây là hai chuyện khác nhau (dùng 码).", "a": "这是两码事。"}]}],
rel:["新6.04", "新5.03", "新7.08"]
};
