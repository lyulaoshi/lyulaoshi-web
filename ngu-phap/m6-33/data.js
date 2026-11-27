// Bài ngữ pháp 【新6.33】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.33", title:"放着X不Y", vi:"放着X不Y — có sẵn X mà không Y", tag:"短语 · 固定格式",
goals:[
 "Trách ai <b>có sẵn điều tốt mà không dùng</b>.",
 "X là vật / việc, Y là hành động đáng làm."],
rules:[
 {"t": "放着 + X + 不 + Y，(却/偏) …", "fx": [["放着", null], ["X", ""], ["不", null], ["Y", ""], ["，", ""], ["việc lại làm", ""]], "mean": "Có … mà không …, lại đi …", "ex": [["{1|放着}{2|现成的饭}{3|不}{4|吃}，{5|非要出去买}。", "Fàngzhe xiànchéng de fàn bù chī, fēi yào chūqu mǎi.", "Cơm sẵn không ăn, cứ đòi ra ngoài mua."], ["他{1|放着}{2|好好的工作}{3|不}{4|干}，{5|去创业了}。", "Tā fàngzhe hǎohāo de gōngzuò bú gàn, qù chuàngyè le.", "Anh ấy bỏ công việc tốt để đi khởi nghiệp."]]}],
cmp:[
 {"vn": "Có đường lớn không đi", "zh": "[放着大路不走]", "py": "fàngzhe dà lù bù zǒu", "ok": true, "why": "Gần “có … mà không …”."}],
ex:[
 ["你怎么[放着电梯不坐]，走楼梯？", "Nǐ zěnme fàngzhe diàntī bú zuò, zǒu lóutī?", "Sao có thang máy không đi lại leo bộ?"],
 ["[放着]老师[不问]，你问谁呢？", "Fàngzhe lǎoshī bú wèn, nǐ wèn shéi ne?", "Thầy ở đó không hỏi thì hỏi ai?"]],
errs:[
 {"bad": "不放着饭吃。", "good": "放着饭不吃。", "why": "不 đứng trước Y."},
 {"bad": "放着现成的饭吃不。", "good": "放着现成的饭不吃。", "why": "Thứ tự 放着X不Y."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他放着汽车不＿，每天走路。", "vi": "Có ô tô không lái, ngày nào cũng đi bộ.", "o": ["走", "开", "吃"], "a": 1, "why": "开车."}, {"q": "＿好日子不过，自找麻烦。", "vi": "Sung sướng không hưởng, tự chuốc phiền.", "o": ["看着", "放着", "等了"], "a": 1, "why": "放着X不Y."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["放着", "现成的饭", "不吃"], "a": "放着现成的饭不吃。", "vi": "Cơm sẵn không ăn."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Sao có thang máy không đi lại leo bộ?", "a": "你怎么放着电梯不坐，走楼梯？ / 为什么放着电梯不坐，走楼梯？"}]}],
rel:["新5.31", "新6.34", "二33"]
};
