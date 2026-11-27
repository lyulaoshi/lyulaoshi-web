// Bài ngữ pháp 【新6.03】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.03", title:"人称代词：人家", vi:"人家 — người ta, mình", tag:"词类 · 代词",
goals:[
 "Dùng <b>人家</b> chỉ “người ta, họ” (người khác).",
 "Dùng 人家 tự xưng nũng nịu: “người ta”."],
intro:"人家 đọc rénjia (家 thanh nhẹ). Rất giống tiếng Việt “người ta”.",
rules:[
 {"t": "人家 = người khác", "fx": [["人家", null], ["V / Adj", ""]], "mean": "Chỉ người khác hoặc người vừa nhắc đến.", "ex": [["{1|人家}{2|能做到}，我们也能。", "Rénjia néng zuòdào, wǒmen yě néng.", "Người ta làm được thì chúng ta cũng làm được."], ["你别打扰{1|人家}{2|休息}。", "Nǐ bié dǎrǎo rénjia xiūxi.", "Đừng làm phiền người ta nghỉ ngơi."]]},
 {"t": "人家 + tên / đại từ", "fx": [["人家", null], ["người được nhắc", ""]], "mean": "Đồng vị: người ta, như ai đó.", "ex": [["你看{1|人家}{2|小王}多努力。", "Nǐ kàn rénjia Xiǎo Wáng duō nǔlì.", "Cậu xem Tiểu Vương người ta chăm thế nào."]]},
 {"t": "人家 = tôi (nũng nịu)", "fx": [["人家", null], ["lời trách", ""]], "mean": "Nói về mình, giọng dỗi.", "ex": [["{1|人家}{2|等了你半天了}！", "Rénjia děngle nǐ bàntiān le!", "Người ta đợi cậu nãy giờ đấy!"]]}],
cmp:[
 {"vn": "Người ta đã giúp thì phải cảm ơn.", "zh": "[人家]帮了你，应该谢谢[人家]。", "py": "Rénjia bāngle nǐ, yīnggāi xièxie rénjia.", "ok": true, "why": "Dùng giống “người ta”."}],
ex:[
 ["[人家]的事你少管。", "Rénjia de shì nǐ shǎo guǎn.", "Chuyện của người ta cậu bớt xen vào."],
 ["我把书还给[人家]了。", "Wǒ bǎ shū huán gěi rénjia le.", "Tôi trả sách cho người ta rồi."]],
errs:[
 {"bad": "人家们都走了。", "good": "人家都走了。", "why": "人家 không thêm 们."},
 {"bad": "他是一个人家。（muốn nói người khác）", "good": "他是别人。", "why": "人家 không làm tân ngữ của 是 theo kiểu này."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "你看＿小李，每天都锻炼。", "vi": "Cậu xem Tiểu Lý người ta ngày nào cũng tập.", "o": ["大家", "人家", "自己"], "a": 1, "why": "人家 + tên."}, {"q": "＿都说好，我也想试试。", "vi": "Người ta đều khen, tôi cũng muốn thử.", "o": ["人家", "本", "此"], "a": 0, "why": "Chỉ người khác."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["你", "别", "打扰", "人家", "休息"], "a": "你别打扰人家休息。", "vi": "Đừng làm phiền người ta nghỉ ngơi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Người ta làm được thì chúng ta cũng làm được.", "a": "人家能做到，我们也能做到。 / 人家能做到，我们也能。"}]}],
rel:["二06", "一05", "新6.30"]
};
