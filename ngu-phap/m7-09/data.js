// Bài ngữ pháp 【新7.09】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.09", title:"程度副词：大为、分外、何等、极度、极力、万分", vi:"大为, 分外, 何等, 极度, 极力, 万分", tag:"词类 · 副词",
goals:[
 "Diễn tả mức độ rất cao trong văn viết.",
 "Phân biệt <b>极度</b> (cực độ) và <b>极力</b> (hết sức, cố)."],
rules:[
 {"t": "大为 / 分外 / 极度 + V / Adj", "fx": [["大为 / 分外 / 极度", null], ["V / Adj", ""]], "mean": "大为 rất (thay đổi) · 分外 đặc biệt · 极度 cực độ.", "ex": [["听了报告，他{1|大为}{2|感动}。", "Tīngle bàogào, tā dàwéi gǎndòng.", "Nghe báo cáo xong, anh ấy rất cảm động."], ["节日的夜晚{1|分外}{2|美丽}。", "Jiérì de yèwǎn fènwài měilì.", "Đêm lễ đẹp lạ thường."], ["连续加班让他{1|极度}{2|疲劳}。", "Liánxù jiābān ràng tā jídù píláo.", "Tăng ca liên tục khiến anh ấy mệt cực độ."]]},
 {"t": "何等 + Adj", "fx": [["何等", null], ["Adj", ""]], "mean": "Biết bao (cảm thán).", "ex": [["这是{1|何等}{2|壮观}的景象！", "Zhè shì héděng zhuàngguān de jǐngxiàng!", "Cảnh tượng hùng vĩ biết bao!"]]},
 {"t": "极力 + V", "fx": [["极力", null], ["V", ""]], "mean": "Cố hết sức làm.", "ex": [["他{1|极力}{2|反对}这个计划。", "Tā jílì fǎnduì zhège jìhuà.", "Anh ấy ra sức phản đối kế hoạch."]]},
 {"t": "Adj + 万分", "fx": [["Adj / V", ""], ["万分", null]], "mean": "Đứng sau: vô cùng.", "ex": [["家人{1|焦急}{2|万分}。", "Jiārén jiāojí wànfēn.", "Người nhà sốt ruột vô cùng."]]}],
cmp:[
 {"vn": "Vô cùng biết ơn", "zh": "感激[万分]", "py": "gǎnjī wànfēn", "ok": true, "why": "万分 đứng sau."}],
ex:[
 ["市场情况[大为]好转。", "Shìchǎng qíngkuàng dàwéi hǎozhuǎn.", "Tình hình thị trường tốt lên rõ rệt."],
 ["他[极力]推荐这本书。", "Tā jílì tuījiàn zhè běn shū.", "Anh ấy hết lời giới thiệu cuốn sách."]],
errs:[
 {"bad": "他极力疲劳。", "good": "他极度疲劳。", "why": "Trạng thái → 极度; 极力 đi với hành động."},
 {"bad": "万分他感动。", "good": "他万分感动。", "why": "万分 đứng trước hoặc sau vị ngữ, không đứng trước chủ ngữ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他＿想改变父母的看法。", "vi": "Anh ấy hết sức muốn thay đổi ý bố mẹ.", "o": ["极度", "何等", "极力"], "a": 2, "why": "Hành động → 极力."}, {"q": "能见到您，我荣幸＿。", "vi": "Được gặp ngài, tôi vô cùng vinh hạnh.", "o": ["万分", "大为", "分外地"], "a": 0, "why": "Adj + 万分."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "极力", "反对", "这个计划"], "a": "他极力反对这个计划。", "vi": "Anh ấy ra sức phản đối kế hoạch."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Người nhà sốt ruột vô cùng (dùng 万分).", "a": "家人焦急万分。 / 家人万分焦急。"}]}],
rel:["新5.05", "新6.06", "新7.10"]
};
