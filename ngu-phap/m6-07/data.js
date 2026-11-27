// Bài ngữ pháp 【新6.07】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.07", title:"范围副词：净、一同、大都", vi:"净, 一同, 大都 — toàn, cùng nhau, phần lớn", tag:"词类 · 副词",
goals:[
 "Dùng <b>净</b> = toàn, chỉ toàn (thường chê).",
 "Dùng <b>一同</b> (cùng) và <b>大都</b> (đa phần)."],
rules:[
 {"t": "净 + V", "fx": [["净", null], ["V", ""]], "mean": "Toàn, chỉ toàn (khẩu ngữ).", "ex": [["你别{1|净}{2|说没用的话}。", "Nǐ bié jìng shuō méiyòng de huà.", "Cậu đừng toàn nói chuyện vô ích."]]},
 {"t": "S + 一同 + V", "fx": [["一同", null], ["V", ""]], "mean": "Cùng nhau (văn viết).", "ex": [["我们{1|一同}{2|前往北京}。", "Wǒmen yìtóng qiánwǎng Běijīng.", "Chúng tôi cùng đến Bắc Kinh."]]},
 {"t": "S + 大都 + V / Adj", "fx": [["S (số nhiều)", ""], ["大都", null], ["V / Adj", ""]], "mean": "Phần lớn đều.", "ex": [["{1|来这儿的人}{2|大都}{3|是学生}。", "Lái zhèr de rén dàdōu shì xuésheng.", "Người đến đây phần lớn là học sinh."]]}],
cmp:[
 {"vn": "Cậu toàn đến muộn.", "zh": "你[净]迟到。", "py": "Nǐ jìng chídào.", "ok": true, "why": "净 mang giọng trách."}],
ex:[
 ["老师和学生[一同]参加了活动。", "Lǎoshī hé xuésheng yìtóng cānjiāle huódòng.", "Thầy trò cùng tham gia hoạt động."],
 ["这些书[大都]是旧的。", "Zhèxiē shū dàdōu shì jiù de.", "Sách này đa phần là sách cũ."]],
errs:[
 {"bad": "他大都喜欢我。（chỉ một người）", "good": "他很喜欢我。", "why": "大都 cần đối tượng số nhiều."},
 {"bad": "我们一同的去吧。", "good": "我们一同去吧。", "why": "Không thêm 的."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "地上＿是水，小心点儿。", "vi": "Dưới đất toàn nước, cẩn thận.", "o": ["净", "一同", "未必"], "a": 0, "why": "净是 = toàn là."}, {"q": "年轻人＿喜欢上网。", "vi": "Người trẻ phần lớn thích lên mạng.", "o": ["大都", "一再", "特意"], "a": 0, "why": "Phần lớn."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我们", "一同", "前往", "北京"], "a": "我们一同前往北京。", "vi": "Chúng tôi cùng đến Bắc Kinh."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Người đến đây phần lớn là học sinh.", "a": "来这儿的人大都是学生。 / 来这里的人大都是学生。"}]}],
rel:["三13", "二14", "新6.06"]
};
