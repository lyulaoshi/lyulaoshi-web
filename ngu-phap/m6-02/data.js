// Bài ngữ pháp 【新6.02】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.02", title:"类后缀：—化、—式、—型、—性", vi:"Hậu tố 化, 式, 型, 性", tag:"语素 · 类后缀",
goals:[
 "Dùng <b>化</b> (hóa) biến từ thành quá trình thay đổi.",
 "Dùng <b>式、型、性</b> chỉ kiểu, loại, tính chất."],
intro:"Giống Hán Việt “hóa, thức, hình, tính” nhưng đứng <b>sau</b> từ gốc: 现代化 = hiện đại hóa.",
rules:[
 {"t": "Adj / N + 化", "fx": [["Adj / N", ""], ["化", null]], "mean": "Hóa: làm cho trở nên.", "ex": [["城市{1|现代}{2|化}发展得很快。", "Chéngshì xiàndàihuà fāzhǎn de hěn kuài.", "Thành phố hiện đại hóa phát triển rất nhanh."], ["我们要{1|绿}{2|化}环境。", "Wǒmen yào lǜhuà huánjìng.", "Chúng ta phải phủ xanh môi trường."]]},
 {"t": "từ gốc + 式 / 型 / 性", "fx": [["từ gốc", ""], ["式 / 型 / 性", null], ["Danh từ", ""]], "mean": "式 kiểu dáng · 型 loại hình · 性 tính.", "ex": [["我喜欢{1|中}{2|式}{3|家具}。", "Wǒ xǐhuan Zhōngshì jiājù.", "Tôi thích đồ gỗ kiểu Trung Quốc."], ["他是一个{1|研究}{2|型}{3|人才}。", "Tā shì yí gè yánjiūxíng réncái.", "Anh ấy là nhân tài kiểu nghiên cứu."], ["这个问题很有{1|重要}{2|性}。", "Zhège wèntí hěn yǒu zhòngyàoxìng.", "Vấn đề này có tầm quan trọng lớn."]]}],
cmp:[
 {"vn": "Tự động hóa", "zh": "自动[化]", "py": "zìdònghuà", "ok": true, "why": "化 đứng sau như “hóa” nhưng trật tự từ gốc đặt trước."}],
ex:[
 ["工厂实现了机械[化]。", "Gōngchǎng shíxiànle jīxièhuà.", "Nhà máy đã cơ giới hóa."],
 ["要提高工作的积极[性]。", "Yào tígāo gōngzuò de jījíxìng.", "Cần nâng cao tính tích cực trong công việc."]],
errs:[
 {"bad": "化现代城市", "good": "现代化城市", "why": "化 đứng sau từ gốc."},
 {"bad": "这个问题很有重要。", "good": "这个问题很重要。", "why": "Sau 有 cần danh từ (重要性) hoặc dùng thẳng tính từ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这是一种新＿手机。", "vi": "Đây là điện thoại kiểu mới.", "o": ["化", "性", "型"], "a": 2, "why": "新型 = kiểu mới."}, {"q": "经济全球＿是大趋势。", "vi": "Toàn cầu hóa kinh tế là xu thế lớn.", "o": ["化", "式", "性"], "a": 0, "why": "全球化."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我", "喜欢", "中式", "家具"], "a": "我喜欢中式家具。", "vi": "Tôi thích đồ gỗ kiểu Trung Quốc."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Chúng ta phải phủ xanh môi trường.", "a": "我们要绿化环境。"}]}],
rel:["三02", "新6.01"]
};
