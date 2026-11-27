// Bài ngữ pháp 【新6.26】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.26", title:"东一A，西一A", vi:"东一A西一A — chỗ này một …, chỗ kia một …", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>东一A西一A</b> tả sự <b>lộn xộn, không tập trung</b>.",
 "A là động tác hoặc lượng từ."],
rules:[
 {"t": "东一 + A，西一 + A", "fx": [["东一", null], ["A", ""], ["，", ""], ["西一", null], ["A", ""]], "mean": "Chỗ này một tí, chỗ kia một tí.", "ex": [["他说话{1|东一}{2|句}，{3|西一}{4|句}。", "Tā shuōhuà dōng yí jù, xī yí jù.", "Anh ta nói câu trên trời câu dưới đất."], ["书{1|东一}{2|本}，{3|西一}{4|本}地扔着。", "Shū dōng yì běn, xī yì běn de rēngzhe.", "Sách vứt mỗi nơi một quyển."]]}],
cmp:[
 {"vn": "Làm việc đầu Ngô mình Sở", "zh": "做事[东一下儿，西一下儿]", "py": "zuò shì dōng yíxiàr, xī yíxiàr", "ok": true, "why": "Ý không tập trung."}],
ex:[
 ["他[东一脚，西一脚]地走回来了。", "Tā dōng yì jiǎo, xī yì jiǎo de zǒu huilai le.", "Anh ta bước thấp bước cao đi về."],
 ["衣服[东一件，西一件]。", "Yīfu dōng yí jiàn, xī yí jiàn.", "Quần áo vứt tứ tung."]],
errs:[
 {"bad": "书西一本东一本。", "good": "书东一本，西一本。", "why": "东 trước 西."},
 {"bad": "他东句一西句一。", "good": "他东一句，西一句。", "why": "东一 + lượng từ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他的东西东一件，＿，很乱。", "vi": "Đồ của anh ấy vứt tứ tung.", "o": ["南两件", "一西件", "西一件"], "a": 2, "why": "东一…西一…."}, {"q": "“东一句，西一句” tả cách nói:", "vi": "Chọn nghĩa.", "o": ["lộn xộn, không đầu đuôi", "mạch lạc rõ ràng"], "a": 0, "why": "Chê rời rạc."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他说话", "东一句，", "西一句"], "a": "他说话东一句，西一句。", "vi": "Anh ta nói câu trên trời câu dưới đất."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Sách vứt mỗi nơi một quyển.", "a": "书东一本，西一本地扔着。 / 书东一本，西一本。"}]}],
rel:["新6.25", "新6.21", "新4.23"]
};
