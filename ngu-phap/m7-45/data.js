// Bài ngữ pháp 【新7.45】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.45", title:"解说复句：所谓……，就是……", vi:"所谓…就是… — cái gọi là … chính là …", tag:"句子的类型 · 复句",
goals:[
 "Định nghĩa, giải thích bằng <b>所谓……就是……</b>.",
 "Phân biệt 所谓 mang ý mỉa."],
rules:[
 {"t": "所谓 + khái niệm，就是 + giải thích", "fx": [["所谓", null], ["khái niệm", ""], ["，", ""], ["就是", null], ["giải thích", ""]], "mean": "Cái gọi là … nghĩa là …", "ex": [["{1|所谓}{2|“低碳生活”}，{3|就是}{4|节约能源的生活方式}。", "Suǒwèi dītàn shēnghuó, jiùshì jiéyuē néngyuán de shēnghuó fāngshì.", "Cái gọi là “sống ít các-bon” là lối sống tiết kiệm năng lượng."], ["{1|所谓}{2|朋友}，{3|就是}{4|在你困难时帮助你的人}。", "Suǒwèi péngyou, jiùshì zài nǐ kùnnan shí bāngzhù nǐ de rén.", "Bạn là người giúp bạn lúc khó khăn."]]}],
cmp:[
 {"vn": "Cái gọi là hạnh phúc chính là bình an.", "zh": "[所谓]幸福，[就是]平平安安。", "py": "Suǒwèi xìngfú, jiùshì píngpíng'ān'ān.", "ok": true, "why": "Trùng cách nói tiếng Việt."}],
ex:[
 ["[所谓]“月光族”，[就是]每月把钱花光的人。", "Suǒwèi yuèguāngzú, jiùshì měi yuè bǎ qián huāguāng de rén.", "“Tộc trăng sáng” là người tháng nào tiêu hết tháng đó."],
 ["他的[所谓]“帮忙”，[就是]添乱。", "Tā de suǒwèi bāngmáng, jiùshì tiānluàn.", "Cái gọi là “giúp” của anh ta chính là phá đám."]],
errs:[
 {"bad": "所谓朋友是就帮助你的人。", "good": "所谓朋友，就是帮助你的人。", "why": "Khung 所谓…就是."},
 {"bad": "所谓就是朋友帮助。", "good": "所谓朋友，就是互相帮助的人。", "why": "Khái niệm đứng sau 所谓."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿孝顺，就是关心父母。", "vi": "Hiếu thảo là quan tâm cha mẹ.", "o": ["无谓", "可谓是否", "所谓"], "a": 2, "why": "所谓."}, {"q": "所谓成功，＿实现自己的目标。", "vi": "Thành công là đạt mục tiêu.", "o": ["就是", "就算", "就此"], "a": 0, "why": "就是."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["所谓", "朋友，", "就是", "互相帮助的人"], "a": "所谓朋友，就是互相帮助的人。", "vi": "Bạn là người giúp đỡ lẫn nhau."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Cái gọi là hạnh phúc chính là bình an (dùng 所谓).", "a": "所谓幸福，就是平平安安。 / 所谓幸福，就是平安。"}]}],
rel:["新7.04", "新4.28", "新7.44"]
};
