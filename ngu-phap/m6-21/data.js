// Bài ngữ pháp 【新6.21】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.21", title:"四字格：A这A那、左A右B", vi:"A这A那, 左A右B — … này … kia; … tới … lui", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>A这A那</b> = làm đủ thứ này kia (lặp một động từ).",
 "Dùng <b>左A右B</b> = hết … lại …"],
rules:[
 {"t": "A这A那", "fx": [["A", ""], ["这", null], ["A", ""], ["那", null]], "mean": "问这问那 hỏi này hỏi nọ.", "ex": [["孩子对什么都好奇，总是{1|问}{2|这}{3|问}{4|那}。", "Háizi duì shénme dōu hàoqí, zǒngshì wènzhè-wènnà.", "Đứa bé tò mò mọi thứ, cứ hỏi này hỏi nọ."], ["你别{1|挑}{2|这}{3|挑}{4|那}了。", "Nǐ bié tiāozhè-tiāonà le.", "Đừng kén cá chọn canh nữa."]]},
 {"t": "左A右B", "fx": [["左", null], ["A", ""], ["右", null], ["B", ""]], "mean": "左思右想 nghĩ tới nghĩ lui · 左看右看 ngắm đi ngắm lại.", "ex": [["他{1|左}{2|思}{3|右}{4|想}，睡不着。", "Tā zuǒsī-yòuxiǎng, shuì bu zháo.", "Anh ấy nghĩ tới nghĩ lui, không ngủ được."]]}],
cmp:[
 {"vn": "Cô ấy nhìn trái nhìn phải.", "zh": "她[左看右看]。", "py": "Tā zuǒkàn-yòukàn.", "ok": true, "why": "Gần với “ngắm tới ngắm lui”."}],
ex:[
 ["他忙着[买这买那]。", "Tā mángzhe mǎizhè-mǎinà.", "Anh ấy bận mua cái này cái kia."],
 ["妈妈[左叮嘱右叮嘱]。", "Māma zuǒ dīngzhǔ yòu dīngzhǔ.", "Mẹ dặn đi dặn lại."]],
errs:[
 {"bad": "他问那问这看。", "good": "他问这问那。", "why": "这 trước, 那 sau."},
 {"bad": "他右思左想。", "good": "他左思右想。", "why": "左 trước, 右 sau."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "老人总是担心＿担心那。", "vi": "Người già hay lo này lo kia.", "o": ["左", "来", "这"], "a": 2, "why": "A这A那."}, {"q": "我左看＿看，也看不出问题。", "vi": "Ngắm đi ngắm lại cũng không thấy vấn đề.", "o": ["左", "这", "右"], "a": 2, "why": "左看右看."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "左思右想，", "睡不着"], "a": "他左思右想，睡不着。", "vi": "Anh ấy nghĩ tới nghĩ lui, không ngủ được."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Đứa bé cứ hỏi này hỏi nọ.", "a": "孩子总是问这问那。 / 孩子老是问这问那。"}]}],
rel:["新5.19", "新4.23", "三63"]
};
