// Bài ngữ pháp 【新7.44】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.44", title:"并列复句：一来……，二来……；一则……，二则……", vi:"一来…二来…; 一则…二则… — thứ nhất là…, thứ hai là…", tag:"句子的类型 · 复句",
goals:[
 "Liệt kê lý do bằng <b>一来……，二来……(三来……)</b>.",
 "Dùng <b>一则……二则……</b> trong văn viết."],
rules:[
 {"t": "一来 + lý do 1，二来 + lý do 2", "fx": [["一来", null], ["lý do 1", ""], ["，", ""], ["二来", null], ["lý do 2", ""]], "mean": "Một là …, hai là …", "ex": [["我常去那儿，{1|一来}{2|离家近}，{3|二来}{4|价钱便宜}。", "Wǒ cháng qù nàr, yīlái lí jiā jìn, èrlái jiàqián piányi.", "Tôi hay đến đó, một là gần nhà, hai là giá rẻ."]]},
 {"t": "一则 + A，二则 + B", "fx": [["一则", null], ["A", ""], ["，", ""], ["二则", null], ["B", ""]], "mean": "Văn viết.", "ex": [["他很高兴，{1|一则}{2|考试通过了}，{3|二则}{4|找到了工作}。", "Tā hěn gāoxìng, yìzé kǎoshì tōngguò le, èrzé zhǎodàole gōngzuò.", "Anh ấy rất vui, một là thi đỗ, hai là tìm được việc."]]}],
notes:[
 {t:"Ba lý do", html:"Thêm <span class='zh'>三则</span> (hoặc <span class='zh'>三来</span>) cho lý do thứ ba: <span class='zh'>一则太远，二则太贵，三则没时间。</span>"}],
cmp:[
 {"vn": "Thứ nhất bận, thứ hai mệt", "zh": "[一来]忙，[二来]累", "py": "yīlái máng, èrlái lèi", "ok": true, "why": "Giống “một là…, hai là…”."}],
ex:[
 ["学汉语，[一来]是兴趣，[二来]是工作需要，[三来]想去旅行。", "Xué Hànyǔ, yīlái shì xìngqù, èrlái shì gōngzuò xūyào, sānlái xiǎng qù lǚxíng.", "Học tiếng Trung: một vì thích, hai vì công việc, ba vì muốn du lịch."],
 ["我们提前出发，[一则]避开高峰，[二则]节省时间。", "Wǒmen tíqián chūfā, yìzé bìkāi gāofēng, èrzé jiéshěng shíjiān.", "Chúng tôi đi sớm, một là tránh cao điểm, hai là tiết kiệm thời gian."]],
errs:[
 {"bad": "一来离家近，两来便宜。", "good": "一来离家近，二来便宜。", "why": "Dùng 二, không dùng 两."},
 {"bad": "一则很忙，二来很累。", "good": "一来很忙，二来很累。", "why": "Giữ cùng một bộ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "不买了，一来太贵，＿用不着。", "vi": "Không mua, một là đắt, hai là không cần.", "o": ["然后", "二来", "其实"], "a": 1, "why": "一来…二来."}, {"q": "他没去，一则身体不好，＿天气太冷。", "vi": "…một là ốm, hai là rét.", "o": ["二次", "二则", "否则"], "a": 1, "why": "一则…二则."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["一来", "离家近，", "二来", "价钱便宜"], "a": "一来离家近，二来价钱便宜。", "vi": "Một là gần nhà, hai là giá rẻ."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Một là đắt quá, hai là không cần dùng (dùng 一来……二来).", "a": "一来太贵，二来用不着。"}]}],
rel:["新4.56", "新4.55", "新7.45"]
};
