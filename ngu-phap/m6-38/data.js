// Bài ngữ pháp 【新6.38】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.38", title:"程度补语3：动词／形容词＋透＋了", vi:"V / Adj + 透了 — … thấu xương, … hết sức", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>透了</b> chỉ mức độ triệt để.",
 "Biết 透了 hay đi với ý <b>tiêu cực</b> hoặc ướt, chín, hiểu thấu."],
rules:[
 {"t": "Adj + 透了", "fx": [["Adj", ""], ["透了", null]], "mean": "… hết mức.", "ex": [["今天{1|倒霉}{2|透了}。", "Jīntiān dǎoméi tòu le.", "Hôm nay xui tận mạng."], ["衣服全{1|湿}{2|透了}。", "Yīfu quán shī tòu le.", "Quần áo ướt sũng."]]},
 {"t": "V + 透了", "fx": [["V", ""], ["透了", null]], "mean": "Đến tận cùng, thấu đáo.", "ex": [["他的心思我{1|看}{2|透了}。", "Tā de xīnsi wǒ kàntòu le.", "Tâm tư anh ta tôi nhìn thấu rồi."]]}],
cmp:[
 {"vn": "Tôi chán ngấy rồi.", "zh": "我[烦透了]。", "py": "Wǒ fán tòu le.", "ok": true, "why": "透了 như “… hết sức”."}],
ex:[
 ["这个人[坏透了]。", "Zhège rén huài tòu le.", "Người này xấu hết chỗ nói."],
 ["苹果[熟透了]。", "Píngguǒ shú tòu le.", "Táo chín nẫu."]],
errs:[
 {"bad": "今天很倒霉透了。", "good": "今天倒霉透了。", "why": "Không thêm 很."},
 {"bad": "他高兴透了。（muốn nói rất vui）", "good": "他高兴极了。", "why": "透了 ít dùng cho ý tích cực thông thường."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "外面下大雨，我全身都湿＿了。", "vi": "Mưa to, tôi ướt sũng.", "o": ["极", "死去", "透"], "a": 2, "why": "湿透."}, {"q": "这个天气糟＿了。", "vi": "Thời tiết tệ hết sức.", "o": ["透", "很", "得"], "a": 0, "why": "糟透了."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["衣服", "全", "湿透了"], "a": "衣服全湿透了。", "vi": "Quần áo ướt sũng."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Hôm nay xui tận mạng (dùng 透了).", "a": "今天倒霉透了。"}]}],
rel:["新5.26", "新4.47", "三49"]
};
