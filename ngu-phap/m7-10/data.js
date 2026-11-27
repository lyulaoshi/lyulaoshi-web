// Bài ngữ pháp 【新7.10】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.10", title:"程度副词：略、略微、稍稍、微、颇、尤为、愈加、越发", vi:"略, 微, 颇, 尤为, 愈加, 越发", tag:"词类 · 副词",
goals:[
 "Dùng <b>略 / 略微 / 稍稍 / 微</b> cho mức nhẹ.",
 "Dùng <b>颇</b> (khá), <b>尤为</b> (đặc biệt), <b>愈加 / 越发</b> (càng thêm)."],
rules:[
 {"t": "略 / 略微 / 稍稍 / 微 + V / Adj", "fx": [["略 / 略微 / 稍稍 / 微", null], ["V / Adj", ""]], "mean": "Hơi, một chút.", "ex": [["价格{1|略}{2|有上涨}。", "Jiàgé lüè yǒu shàngzhǎng.", "Giá hơi tăng."], ["他{1|略微}{2|想了想}。", "Tā lüèwēi xiǎngle xiǎng.", "Anh ấy nghĩ một chút."], ["请{1|稍稍}{2|等一下}。", "Qǐng shāoshāo děng yíxià.", "Xin đợi một chút."], ["她{1|微}{2|笑}着点头。", "Tā wēixiàozhe diǎntóu.", "Cô ấy mỉm cười gật đầu."]]},
 {"t": "颇 / 尤为 + Adj / V", "fx": [["颇 / 尤为", null], ["Adj / V", ""]], "mean": "颇 khá · 尤为 nhất là, đặc biệt.", "ex": [["这本书{1|颇}{2|受欢迎}。", "Zhè běn shū pō shòu huānyíng.", "Cuốn sách khá được ưa chuộng."], ["这一点{1|尤为}{2|重要}。", "Zhè yì diǎn yóuwéi zhòngyào.", "Điểm này đặc biệt quan trọng."]]},
 {"t": "愈加 / 越发 + Adj / V", "fx": [["愈加 / 越发", null], ["Adj / V", ""]], "mean": "Càng thêm.", "ex": [["雨后的空气{1|愈加}{2|清新}。", "Yǔ hòu de kōngqì yùjiā qīngxīn.", "Sau mưa không khí càng trong lành."], ["几年不见，她{1|越发}{2|漂亮}了。", "Jǐ nián bú jiàn, tā yuèfā piàoliang le.", "Mấy năm không gặp, cô ấy càng xinh."]]}],
cmp:[
 {"vn": "Tôi cũng biết sơ sơ.", "zh": "我也[略]知一二。", "py": "Wǒ yě lüè zhī yī-èr.", "ok": true, "why": "略 = sơ qua."}],
ex:[
 ["他对历史[颇]有研究。", "Tā duì lìshǐ pō yǒu yánjiū.", "Ông ấy khá am hiểu lịch sử."],
 ["天气[越发]冷了。", "Tiānqì yuèfā lěng le.", "Trời càng lạnh hơn."]],
errs:[
 {"bad": "他颇很高兴。", "good": "他颇为高兴。", "why": "Không dùng thêm 很."},
 {"bad": "她越发越漂亮。", "good": "她越发漂亮了。", "why": "越发 đã có nghĩa “càng”."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这个结果让人＿感意外。", "vi": "Kết quả khiến người ta khá bất ngờ.", "o": ["颇", "微", "越发地更"], "a": 0, "why": "颇感意外."}, {"q": "夜深了，街上＿安静。", "vi": "Đêm khuya, phố càng yên.", "o": ["略微不", "尤其很", "愈加"], "a": 2, "why": "Càng thêm."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["这一点", "尤为", "重要"], "a": "这一点尤为重要。", "vi": "Điểm này đặc biệt quan trọng."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mấy năm không gặp, cô ấy càng xinh (dùng 越发).", "a": "几年不见，她越发漂亮了。"}]}],
rel:["新4.05", "新7.09", "二13"]
};
