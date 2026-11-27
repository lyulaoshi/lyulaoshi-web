// Bài ngữ pháp 【新6.01】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.01", title:"类前缀：超—、多—、反—、无—、亚—、准—", vi:"Tiền tố 超, 多, 反, 无, 亚, 准", tag:"语素 · 类前缀",
goals:[
 "Tạo từ mới bằng <b>超 / 多 / 反</b> (siêu, đa, phản).",
 "Hiểu <b>无 / 亚 / 准</b> (không, á, chuẩn bị thành)."],
intro:"Các tiền tố này gần với âm Hán Việt (siêu, đa, phản, vô, á, chuẩn) nên người Việt đoán nghĩa rất nhanh.",
rules:[
 {"t": "超 / 多 / 反 + danh từ", "fx": [["超 / 多 / 反", null], ["Danh từ", ""]], "mean": "超 siêu, vượt · 多 nhiều · 反 chống, ngược.", "ex": [["{1|超}{2|市}", "chāoshì", "siêu thị"], ["这是一个{1|多}{2|功能}手机。", "Zhè shì yí gè duō gōngnéng shǒujī.", "Đây là điện thoại đa chức năng."], ["他有很强的{1|反}{2|战}思想。", "Tā yǒu hěn qiáng de fǎnzhàn sīxiǎng.", "Ông ấy có tư tưởng phản chiến mạnh mẽ."]]},
 {"t": "无 / 亚 / 准 + danh từ", "fx": [["无 / 亚 / 准", null], ["Danh từ", ""]], "mean": "无 không có · 亚 á, thứ hai · 准 sắp thành, tương đương.", "ex": [["这里提供{1|无}{2|线}网络。", "Zhèlǐ tígōng wúxiàn wǎngluò.", "Ở đây có mạng không dây."], ["他得了这次比赛的{1|亚}{2|军}。", "Tā déle zhè cì bǐsài de yàjūn.", "Anh ấy được á quân cuộc thi này."], ["她已经是一位{1|准}{2|妈妈}了。", "Tā yǐjīng shì yí wèi zhǔn māma le.", "Chị ấy sắp làm mẹ rồi."]]}],
cmp:[
 {"vn": "Siêu sao điện ảnh", "zh": "电影[超]级明星", "py": "diànyǐng chāojí míngxīng", "ok": true, "why": "超级 = siêu cấp, đặt trước danh từ."}],
ex:[
 ["[超]高温天气持续了一周。", "Chāo gāowēn tiānqì chíxùle yì zhōu.", "Thời tiết siêu nóng kéo dài một tuần."],
 ["这是一种[无]糖饮料。", "Zhè shì yì zhǒng wútáng yǐnliào.", "Đây là đồ uống không đường."]],
errs:[
 {"bad": "手机功能多很。", "good": "手机是多功能的。", "why": "多 làm tiền tố đứng trước danh từ."},
 {"bad": "我得了军亚。", "good": "我得了亚军。", "why": "Tiền tố đứng trước."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他是这次比赛的＿军。", "vi": "Anh ấy là á quân.", "o": ["无", "反", "亚"], "a": 2, "why": "亚军 = giải nhì."}, {"q": "商店里卖＿糖口香糖。", "vi": "Cửa hàng bán kẹo cao su không đường.", "o": ["无", "超", "准"], "a": 0, "why": "无糖 = không đường."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["这里", "提供", "无线", "网络"], "a": "这里提供无线网络。", "vi": "Ở đây có mạng không dây."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Đây là điện thoại đa chức năng.", "a": "这是一个多功能手机。 / 这是一部多功能手机。"}]}],
rel:["一01", "三01", "新6.02"]
};
