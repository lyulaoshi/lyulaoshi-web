// Bài ngữ pháp 【新7.40】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.40", title:"固定格式（6）：你说你一个X，……、什么A的B的、视……而定、谈何……", vi:"Cậu là … mà, … này nọ, tùy … mà định, nói gì đến", tag:"短语 · 固定格式",
goals:[
 "Trách bằng <b>你说你一个X</b>, gom bằng <b>什么A的B的</b>.",
 "Văn viết: <b>视……而定</b>, <b>谈何……</b>."],
rules:[
 {"t": "你说你一个 + thân phận，…", "fx": [["你说你一个", null], ["thân phận", ""], ["，", ""], ["việc đáng trách", ""]], "mean": "Cậu là … mà lại …", "ex": [["{1|你说你一个}{2|大学生}，{3|怎么连这个都不会}？", "Nǐ shuō nǐ yí gè dàxuéshēng, zěnme lián zhège dōu bú huì?", "Cậu là sinh viên mà sao cái này cũng không biết?"]]},
 {"t": "什么 + A + 的 + B + 的", "fx": [["什么", null], ["A", ""], ["的", null], ["B", ""], ["的", null]], "mean": "Nào A nào B.", "ex": [["超市里{1|什么}{2|吃}{3|的}{4|喝}{5|的}都有。", "Chāoshì li shénme chī de hē de dōu yǒu.", "Siêu thị đồ ăn thức uống gì cũng có."]]},
 {"t": "视 + tình hình + 而定", "fx": [["视", null], ["tình hình", ""], ["而定", null]], "mean": "Tùy … mà quyết.", "ex": [["出发时间{1|视}{2|天气情况}{3|而定}。", "Chūfā shíjiān shì tiānqì qíngkuàng ér dìng.", "Giờ xuất phát tùy thời tiết."]]},
 {"t": "谈何 + 容易 / 成功", "fx": [["谈何", null], ["V / Adj", ""]], "mean": "Nói gì đến, đâu dễ.", "ex": [["不努力，{1|谈何}{2|成功}？", "Bù nǔlì, tánhé chénggōng?", "Không cố gắng thì nói gì thành công?"]]}],
cmp:[
 {"vn": "Nói dễ vậy sao!", "zh": "[谈何]容易！", "py": "Tánhé róngyì!", "ok": true, "why": "= làm gì dễ thế."}],
ex:[
 ["工资[视]工作经验[而定]。", "Gōngzī shì gōngzuò jīngyàn ér dìng.", "Lương tùy kinh nghiệm làm việc."],
 ["别整天[什么]房子[的]车子[的]。", "Bié zhěngtiān shénme fángzi de chēzi de.", "Đừng suốt ngày nhà với cửa, xe với cộ."]],
errs:[
 {"bad": "时间天气视而定。", "good": "时间视天气而定。", "why": "视 + X + 而定."},
 {"bad": "谈容易何。", "good": "谈何容易。", "why": "Cụm cố định."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "价格＿质量而定。", "vi": "Giá tùy chất lượng.", "o": ["谈", "凭什么", "视"], "a": 2, "why": "视…而定."}, {"q": "没有健康，＿幸福？", "vi": "Không có sức khỏe thì nói gì hạnh phúc?", "o": ["视为", "谈何", "何不"], "a": 1, "why": "谈何."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["出发时间", "视天气情况", "而定"], "a": "出发时间视天气情况而定。", "vi": "Giờ xuất phát tùy thời tiết."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Không cố gắng thì nói gì thành công (dùng 谈何)?", "a": "不努力，谈何成功？"}]}],
rel:["新7.39", "新5.23", "新6.37"]
};
