// Bài ngữ pháp 【新7.28】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.28", title:"连词：以及、加之、乃至、且", vi:"以及, 加之, 乃至, 且 — cùng, thêm vào đó, cho đến, vả lại", tag:"词类 · 连词",
goals:[
 "Nối thành phần: <b>以及, 乃至</b>.",
 "Thêm lý do: <b>加之, 且</b>."],
rules:[
 {"t": "A、B + 以及 / 乃至 + C", "fx": [["A、B", ""], ["以及 / 乃至", null], ["C", ""]], "mean": "以及 cùng với · 乃至 cho đến cả (tăng dần).", "ex": [["欢迎{1|老师}{2|以及}{3|家长}。", "Huānyíng lǎoshī yǐjí jiāzhǎng.", "Hoan nghênh thầy cô và phụ huynh."], ["这影响到{1|全市}{2|乃至}{3|全国}。", "Zhè yǐngxiǎng dào quán shì nǎizhì quán guó.", "Việc này ảnh hưởng cả thành phố, thậm chí cả nước."]]},
 {"t": "Lý do 1，加之 + lý do 2", "fx": [["lý do 1", ""], ["，", ""], ["加之", null], ["lý do 2", ""]], "mean": "Thêm vào đó.", "ex": [["{1|天气寒冷}，{2|加之}{3|缺少食物}，大家很困难。", "Tiānqì hánlěng, jiāzhī quēshǎo shíwù, dàjiā hěn kùnnan.", "Trời rét, thêm thiếu lương thực, mọi người rất khó khăn."]]},
 {"t": "Adj + 且 + Adj", "fx": [["Adj", ""], ["且", null], ["Adj", ""]], "mean": "… mà còn …", "ex": [["这个方法{1|简单}{2|且}{3|有效}。", "Zhège fāngfǎ jiǎndān qiě yǒuxiào.", "Cách này đơn giản mà hiệu quả."]]}],
cmp:[
 {"vn": "Giá rẻ mà chất lượng tốt", "zh": "价廉[且]物美", "py": "jià lián qiě wù měi", "ok": true, "why": "且 nối hai ưu điểm."}],
ex:[
 ["几年[乃至]几十年后，人们还记得他。", "Jǐ nián nǎizhì jǐ shí nián hòu, rénmen hái jìde tā.", "Mấy năm, thậm chí mấy chục năm sau, người ta vẫn nhớ ông."],
 ["他经验不足，[加之]准备不够，失败了。", "Tā jīngyàn bùzú, jiāzhī zhǔnbèi bú gòu, shībài le.", "Thiếu kinh nghiệm, thêm chuẩn bị kém, anh ấy thất bại."]],
errs:[
 {"bad": "全国乃至全市（muốn tăng dần）", "good": "全市乃至全国", "why": "乃至 đi từ nhỏ đến lớn."},
 {"bad": "天气冷，且之下雨。", "good": "天气冷，加之下雨。", "why": "Cụm 加之."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他的研究在国内＿世界上都很有影响。", "vi": "Nghiên cứu của ông ảnh hưởng trong nước và cả thế giới.", "o": ["乃至", "加之", "况且不"], "a": 0, "why": "Tăng dần."}, {"q": "房间干净＿安静。", "vi": "Phòng sạch mà yên tĩnh.", "o": ["之", "乃", "且"], "a": 2, "why": "Adj 且 Adj."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["这个方法", "简单", "且", "有效"], "a": "这个方法简单且有效。", "vi": "Cách này đơn giản mà hiệu quả."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Việc này ảnh hưởng cả thành phố, thậm chí cả nước (dùng 乃至).", "a": "这影响到全市乃至全国。"}]}],
rel:["新5.16", "新7.27", "新4.19"]
};
