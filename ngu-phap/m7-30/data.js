// Bài ngữ pháp 【新7.30】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.30", title:"四字格（1）：爱A不A、半A半B、不A不B、不A而B、东A西B、非A非B、忽A忽B、或A或B", vi:"Khuôn bốn chữ 爱A不A, 半A半B, 忽A忽B…", tag:"短语 · 固定短语",
goals:[
 "Hiểu nghĩa khung <b>爱A不A, 半A半B, 不A不B, 不A而B</b>.",
 "Dùng <b>东A西B, 非A非B, 忽A忽B, 或A或B</b>."],
rules:[
 {"t": "爱A不A / 半A半B", "fx": [["爱…不 / 半…半", null], ["A, B", ""]], "mean": "爱理不理 hờ hững · 半信半疑 nửa tin nửa ngờ.", "ex": [["他对我{1|爱理不}{2|理}。", "Tā duì wǒ àilǐ-bùlǐ.", "Anh ta đối với tôi hờ hững."], ["听了他的话，我{1|半信半}{2|疑}。", "Tīngle tā de huà, wǒ bànxìn-bànyí.", "Nghe anh ta nói, tôi nửa tin nửa ngờ."]]},
 {"t": "不A不B / 不A而B", "fx": [["不…不 / 不…而", null], ["A, B", ""]], "mean": "不冷不热 vừa phải · 不约而同 không hẹn mà cùng.", "ex": [["今天天气{1|不冷不}{2|热}。", "Jīntiān tiānqì bùlěng-búrè.", "Hôm nay trời mát mẻ vừa phải."], ["大家{1|不约而}{2|同}地站了起来。", "Dàjiā bùyuē'értóng de zhànle qilai.", "Mọi người không hẹn mà cùng đứng dậy."]]},
 {"t": "东A西B / 非A非B", "fx": [["东…西 / 非…非", null], ["A, B", ""]], "mean": "东张西望 ngó nghiêng · 非亲非故 không thân thích.", "ex": [["他在门口{1|东张西}{2|望}。", "Tā zài ménkǒu dōngzhāng-xīwàng.", "Anh ta ngó nghiêng trước cửa."], ["我们{1|非亲非}{2|故}，他却帮了我。", "Wǒmen fēiqīn-fēigù, tā què bāngle wǒ.", "Không thân thích mà anh ấy giúp tôi."]]},
 {"t": "忽A忽B / 或A或B", "fx": [["忽…忽 / 或…或", null], ["A, B", ""]], "mean": "忽冷忽热 lúc nóng lúc lạnh · 或多或少 ít nhiều.", "ex": [["最近天气{1|忽冷忽}{2|热}。", "Zuìjìn tiānqì hūlěng-hūrè.", "Dạo này trời lúc nóng lúc lạnh."], ["每个人{1|或多或}{2|少}都有缺点。", "Měi gè rén huòduō-huòshǎo dōu yǒu quēdiǎn.", "Ai ít nhiều cũng có khuyết điểm."]]}],
cmp:[
 {"vn": "Nửa sống nửa chín", "zh": "[半生半熟]", "py": "bànshēng-bànshú", "ok": true, "why": "半A半B giống “nửa … nửa …”."}],
ex:[
 ["他[爱听不听]，我也没办法。", "Tā àitīng-bùtīng, wǒ yě méi bànfǎ.", "Nó nghe hay không mặc nó, tôi chịu."],
 ["灯光[忽明忽暗]。", "Dēngguāng hūmíng-hū'àn.", "Ánh đèn lúc sáng lúc tối."]],
errs:[
 {"bad": "我信半疑半。", "good": "我半信半疑。", "why": "Giữ nguyên thứ tự khung."},
 {"bad": "天气很忽冷忽热。", "good": "天气忽冷忽热。", "why": "Cụm bốn chữ không thêm 很."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "老师问完，同学们不约＿同地举起手。", "vi": "Cả lớp không hẹn mà cùng giơ tay.", "o": ["而", "和", "又"], "a": 0, "why": "不约而同."}, {"q": "他对客人爱答不＿。", "vi": "Anh ta tiếp khách hờ hững.", "o": ["理", "来", "去"], "a": 0, "why": "爱答不理."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["每个人", "或多或少", "都有缺点"], "a": "每个人或多或少都有缺点。", "vi": "Ai ít nhiều cũng có khuyết điểm."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Dạo này trời lúc nóng lúc lạnh.", "a": "最近天气忽冷忽热。 / 最近忽冷忽热。"}]}],
rel:["新4.23", "新6.21", "新7.31"]
};
