// Bài ngữ pháp 【新6.05】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.05", title:"动量词：番", vi:"Lượng từ động tác 番 — một phen", tag:"词类 · 量词",
goals:[
 "Dùng <b>一番</b> cho việc làm kỹ, tốn công: một phen.",
 "Dùng 番 nói <b>gấp đôi</b> (翻了一番)."],
intro:"番 trang trọng hơn 次, nhấn mạnh quá trình tốn tâm sức.",
rules:[
 {"t": "V + 了 + 一番", "fx": [["V", ""], ["一番", null]], "mean": "Một hồi, một phen (kỹ lưỡng).", "ex": [["他{1|考虑了}{2|一番}，终于同意了。", "Tā kǎolǜle yì fān, zhōngyú tóngyì le.", "Anh ấy cân nhắc một hồi rồi đồng ý."], ["我们把房间{1|收拾了}{2|一番}。", "Wǒmen bǎ fángjiān shōushile yì fān.", "Chúng tôi dọn dẹp phòng một phen."]]},
 {"t": "一番 + danh từ trừu tượng", "fx": [["一番", null], ["Danh từ", ""]], "mean": "Một tấm lòng, một lời.", "ex": [["谢谢你的{1|一番}{2|好意}。", "Xièxie nǐ de yì fān hǎoyì.", "Cảm ơn tấm lòng tốt của bạn."]]},
 {"t": "翻了 + số + 番", "fx": [["翻了", null], ["Số", ""], ["番", null]], "mean": "Tăng gấp đôi (mỗi 番 là nhân đôi).", "ex": [["产量{1|翻了}{2|一}{3|番}。", "Chǎnliàng fānle yì fān.", "Sản lượng tăng gấp đôi."]]}],
cmp:[
 {"vn": "Sau một hồi bàn bạc", "zh": "经过[一番]讨论", "py": "jīngguò yì fān tǎolùn", "ok": true, "why": "一番 đứng trước danh động từ."}],
ex:[
 ["他的一[番]话让我很感动。", "Tā de yì fān huà ràng wǒ hěn gǎndòng.", "Mấy lời của anh ấy khiến tôi cảm động."],
 ["经过一[番]努力，我们成功了。", "Jīngguò yì fān nǔlì, wǒmen chénggōng le.", "Qua một phen nỗ lực, chúng tôi đã thành công."]],
errs:[
 {"bad": "他考虑一个番。", "good": "他考虑了一番。", "why": "Không thêm 个."},
 {"bad": "我看了一番电视。", "good": "我看了一会儿电视。", "why": "番 dùng cho việc tốn công, không dùng cho việc giải trí thường."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "经过一＿调查，问题清楚了。", "vi": "Qua điều tra, vấn đề đã rõ.", "o": ["滴", "番", "扇"], "a": 1, "why": "一番调查."}, {"q": "收入翻了两＿。", "vi": "Thu nhập tăng gấp bốn.", "o": ["次", "遍", "番"], "a": 2, "why": "翻番."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "考虑了", "一番，", "终于", "同意了"], "a": "他考虑了一番，终于同意了。", "vi": "Anh ấy cân nhắc một hồi rồi đồng ý."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Cảm ơn tấm lòng tốt của bạn (dùng 一番).", "a": "谢谢你的一番好意。"}]}],
rel:["新4.04", "二11", "三10"]
};
