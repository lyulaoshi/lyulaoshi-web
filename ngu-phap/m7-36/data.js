// Bài ngữ pháp 【新7.36】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.36", title:"固定格式（2）：X了Y，Y了X、X也好，Y也罢、别提（有）多＋形容词＋了、不亚于……", vi:"Hết … lại …, dù … hay …, khỏi nói … cỡ nào, không thua gì", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>V1了V2，V2了V1</b> và <b>X也好，Y也罢</b>.",
 "Nhấn mạnh với <b>别提多……了</b> và so sánh <b>不亚于</b>."],
rules:[
 {"t": "A 了 B，B 了 A", "fx": [["A", ""], ["了", null], ["B", ""], ["，", ""], ["B", ""], ["了", null]], "mean": "Hết A lại B, rồi lại A.", "ex": [["这件衣服她{1|试}{2|了}{3|脱}，{4|脱}{5|了}又试。", "Zhè jiàn yīfu tā shìle tuō, tuōle yòu shì.", "Cái áo cô ấy mặc rồi cởi, cởi rồi lại mặc."]]},
 {"t": "X 也好，Y 也罢，都 …", "fx": [["X 也好", null], ["，", ""], ["Y 也罢", null], ["，", ""], ["都…", ""]], "mean": "Dù X hay Y cũng.", "ex": [["{1|成功也好}，{2|失败也罢}，{3|我都接受}。", "Chénggōng yě hǎo, shībài yěbà, wǒ dōu jiēshòu.", "Thành công hay thất bại tôi đều chấp nhận."]]},
 {"t": "别提 (有) 多 + Adj + 了", "fx": [["别提(有)多", null], ["Adj", ""], ["了", null]], "mean": "Khỏi phải nói … cỡ nào.", "ex": [["听到这个消息，他{1|别提多}{2|高兴}{3|了}。", "Tīngdào zhège xiāoxi, tā biétí duō gāoxìng le.", "Nghe tin, anh ấy mừng khỏi phải nói."]]},
 {"t": "A + 不亚于 + B", "fx": [["A", ""], ["不亚于", null], ["B", ""]], "mean": "A không thua kém B.", "ex": [["{1|他的汉语水平}{2|不亚于}{3|中国人}。", "Tā de Hànyǔ shuǐpíng bú yàyú Zhōngguórén.", "Trình tiếng Trung của anh ấy không thua người Trung Quốc."]]}],
cmp:[
 {"vn": "Khỏi nói đẹp cỡ nào!", "zh": "[别提多]美[了]！", "py": "Biétí duō měi le!", "ok": true, "why": "Cảm thán mức cao."}],
ex:[
 ["这里的风景[不亚于]任何名胜。", "Zhèlǐ de fēngjǐng bú yàyú rènhé míngshèng.", "Phong cảnh đây không thua danh thắng nào."],
 ["你来[也好]，不来[也罢]，我们照常开始。", "Nǐ lái yě hǎo, bù lái yěbà, wǒmen zhàocháng kāishǐ.", "Bạn đến hay không chúng tôi vẫn bắt đầu."]],
errs:[
 {"bad": "他别提很高兴了。", "good": "他别提多高兴了。", "why": "Khung dùng 多."},
 {"bad": "他的水平不亚中国人。", "good": "他的水平不亚于中国人。", "why": "Cần 于."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "那天的场面别提多热闹＿。", "vi": "Cảnh hôm đó nhộn khỏi nói.", "o": ["了", "的", "吗"], "a": 0, "why": "别提多…了."}, {"q": "愿意也好，不愿意也＿，都得参加。", "vi": "Muốn hay không đều phải dự.", "o": ["罢", "了", "吧吗"], "a": 0, "why": "也好…也罢."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他的汉语水平", "不亚于", "中国人"], "a": "他的汉语水平不亚于中国人。", "vi": "Trình của anh ấy không thua người Trung Quốc."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Nghe tin, anh ấy mừng khỏi phải nói (dùng 别提多……了).", "a": "听到这个消息，他别提多高兴了。 / 听到这个消息，他别提有多高兴了。"}]}],
rel:["新6.20", "新4.31", "新7.35"]
};
