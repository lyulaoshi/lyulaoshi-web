// Bài ngữ pháp 【新6.28】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.28", title:"X到Y头上来了", vi:"X到…头上来了 — dám … đến đầu ai", tag:"短语 · 固定格式",
goals:[
 "Phản đối khi ai <b>dám làm điều xấu với mình</b>.",
 "Nhận ra giọng gay gắt."],
rules:[
 {"t": "X + 到 + người + 头上来了", "fx": [["X (động từ)", ""], ["到", null], ["người", ""], ["头上来了", null]], "mean": "Dám … tới cả … à.", "ex": [["你{1|骗}{2|到}{3|我}{4|头上来了}！", "Nǐ piàndào wǒ tóu shang lái le!", "Cậu dám lừa cả tôi à!"], ["他居然{1|欺负}{2|到}{3|老人}{4|头上来了}。", "Tā jūrán qīfu dào lǎorén tóu shang lái le.", "Hắn dám bắt nạt cả người già."]]}],
cmp:[
 {"vn": "Dám trộm đến cả nhà cảnh sát.", "zh": "小偷[偷到]警察[头上来了]。", "py": "Xiǎotōu tōudào jǐngchá tóu shang lái le.", "ok": true, "why": "Ý “động đến đầu ai”."}],
ex:[
 ["这个人[管到]我[头上来了]。", "Zhège rén guǎndào wǒ tóu shang lái le.", "Người này quản cả đến tôi."],
 ["你怎么[怪到]我[头上来了]？", "Nǐ zěnme guàidào wǒ tóu shang lái le?", "Sao lại đổ lỗi lên đầu tôi?"]],
errs:[
 {"bad": "你骗我到头上来了。", "good": "你骗到我头上来了。", "why": "Người đứng giữa 到 và 头上."},
 {"bad": "他帮到我头上来了。（muốn cảm ơn）", "good": "他帮了我很多。", "why": "Khung dùng cho việc xấu, gây bực."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "你怎么怪到我＿来了？", "vi": "Sao đổ lỗi lên đầu tôi?", "o": ["眼里", "头上", "手下"], "a": 1, "why": "到…头上来."}, {"q": "骗子竟然骗＿警察头上来了。", "vi": "Kẻ lừa dám lừa cả cảnh sát.", "o": ["在", "到", "向着"], "a": 1, "why": "V + 到."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["你", "骗到", "我头上", "来了"], "a": "你骗到我头上来了。", "vi": "Cậu dám lừa cả tôi à!"}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Sao lại đổ lỗi lên đầu tôi?", "a": "你怎么怪到我头上来了？"}]}],
rel:["三46", "三47", "新6.30"]
};
