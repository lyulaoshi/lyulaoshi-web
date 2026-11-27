// Bài ngữ pháp 【新7.22】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.22", title:"语气副词（3）：碰巧、偏偏、恰巧、切、情愿、势必、索性、万万、未免", vi:"偏偏, 恰巧, 切, 势必, 索性, 万万, 未免", tag:"词类 · 副词",
goals:[
 "Phân biệt <b>碰巧 / 恰巧</b> (tình cờ) và <b>偏偏</b> (lại cứ).",
 "Dùng <b>切, 情愿, 势必, 索性, 万万, 未免</b>."],
rules:[
 {"t": "碰巧 / 恰巧 / 偏偏 + V", "fx": [["碰巧 / 恰巧 / 偏偏", null], ["V", ""]], "mean": "Tình cờ, đúng lúc · lại cứ (trái ý).", "ex": [["我{1|碰巧}{2|在街上遇到他}。", "Wǒ pèngqiǎo zài jiē shang yùdào tā.", "Tôi tình cờ gặp anh ấy ngoài phố."], ["你来的时候我{1|恰巧}{2|不在}。", "Nǐ lái de shíhou wǒ qiàqiǎo bú zài.", "Bạn đến đúng lúc tôi không có nhà."], ["越忙电脑{1|偏偏}{2|越出问题}。", "Yuè máng diànnǎo piānpiān yuè chū wèntí.", "Càng bận máy tính lại càng trục trặc."]]},
 {"t": "切 / 万万 + phủ định", "fx": [["切 / 万万", null], ["不可 / 不要 + V", ""]], "mean": "Tuyệt đối (đừng).", "ex": [["开车{1|切}{2|不可大意}。", "Kāichē qiè bùkě dàyi.", "Lái xe tuyệt đối không được lơ là."], ["这种事{1|万万}{2|做不得}。", "Zhè zhǒng shì wànwàn zuò bude.", "Chuyện này tuyệt đối không được làm."]]},
 {"t": "势必 / 索性 / 情愿 + V", "fx": [["势必 / 索性 / 情愿", null], ["V", ""]], "mean": "势必 ắt phải · 索性 dứt khoát … luôn · 情愿 thà.", "ex": [["不改革，{1|势必}{2|落后}。", "Bù gǎigé, shìbì luòhòu.", "Không cải cách ắt tụt hậu."], ["既然来了，{1|索性}{2|多住几天}。", "Jìrán lái le, suǒxìng duō zhù jǐ tiān.", "Đã đến thì ở thêm vài hôm luôn."], ["我{1|情愿}{2|自己受累}。", "Wǒ qíngyuàn zìjǐ shòulèi.", "Tôi thà tự mình chịu mệt."]]},
 {"t": "未免 + 太 + Adj", "fx": [["未免", null], ["太 / 有点儿 + Adj", ""]], "mean": "Hơi … quá đấy (phê bình nhẹ).", "ex": [["你这样说{1|未免}{2|太过分了}。", "Nǐ zhèyàng shuō wèimiǎn tài guòfèn le.", "Cậu nói vậy hơi quá đáng đấy."]]}],
cmp:[
 {"vn": "Hay là thôi đi cho xong.", "zh": "[索性]别去了。", "py": "Suǒxìng bié qù le.", "ok": true, "why": "索性 gần 干脆."}],
ex:[
 ["他[偏偏]不信。", "Tā piānpiān bú xìn.", "Anh ta lại cứ không tin."],
 ["这个价格[未免]高了点儿。", "Zhège jiàgé wèimiǎn gāole diǎnr.", "Giá này hơi cao đấy."]],
errs:[
 {"bad": "你万万要去。（muốn nói nhất định đi）", "good": "你一定要去。", "why": "万万 chủ yếu đi với phủ định."},
 {"bad": "他未免很帮助我。", "good": "他帮了我很多。", "why": "未免 dùng để phê bình nhẹ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "本来想出门，＿下起雨来。", "vi": "Định ra ngoài thì lại mưa.", "o": ["索性", "情愿", "偏偏"], "a": 2, "why": "Trái ý."}, {"q": "衣服都湿了，＿洗个澡吧。", "vi": "Quần áo ướt hết, tắm luôn cho xong.", "o": ["势必", "索性", "切"], "a": 1, "why": "Dứt khoát."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["开车", "切不可", "大意"], "a": "开车切不可大意。", "vi": "Lái xe tuyệt đối không được lơ là."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Tôi tình cờ gặp anh ấy ngoài phố (dùng 碰巧).", "a": "我碰巧在街上遇到他。 / 我碰巧在街上遇到了他。"}]}],
rel:["新6.12", "新7.23", "新7.21"]
};
