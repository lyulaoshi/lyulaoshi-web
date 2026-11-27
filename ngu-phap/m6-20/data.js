// Bài ngữ pháp 【新6.20】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.20", title:"其他助词：也好", vi:"也好 — … cũng được, … hay … cũng", tag:"词类 · 助词",
goals:[
 "Dùng <b>A 也好，B 也好，都……</b> = dù A hay B cũng.",
 "Dùng <b>……也好</b> để tán thành miễn cưỡng."],
rules:[
 {"t": "A + 也好，B + 也好，都 …", "fx": [["A", ""], ["也好", null], ["，", ""], ["B", ""], ["也好", null], ["都…", ""]], "mean": "Dù A hay B đều.", "ex": [["{1|唱歌}{2|也好}，{3|跳舞}{4|也好}，{5|他都喜欢}。", "Chànggē yě hǎo, tiàowǔ yě hǎo, tā dōu xǐhuan.", "Hát cũng được, múa cũng được, anh ấy đều thích."]]},
 {"t": "Sự việc + 也好", "fx": [["sự việc", ""], ["也好", null]], "mean": "Vậy cũng được (có mặt tốt).", "ex": [["{1|你自己去}{2|也好}，可以锻炼锻炼。", "Nǐ zìjǐ qù yě hǎo, kěyǐ duànliàn duànliàn.", "Cậu tự đi cũng được, rèn luyện luôn."]]}],
cmp:[
 {"vn": "Mưa cũng tốt, trời mát hơn.", "zh": "下雨[也好]，天气凉快了。", "py": "Xià yǔ yě hǎo, tiānqì liángkuai le.", "ok": true, "why": "Nhìn mặt tích cực."}],
ex:[
 ["工作[也好]，学习[也好]，都要认真。", "Gōngzuò yě hǎo, xuéxí yě hǎo, dōu yào rènzhēn.", "Làm hay học đều phải nghiêm túc."],
 ["让他知道[也好]。", "Ràng tā zhīdào yě hǎo.", "Để anh ấy biết cũng được."]],
errs:[
 {"bad": "唱歌好也，跳舞好也。", "good": "唱歌也好，跳舞也好。", "why": "Thứ tự 也好."},
 {"bad": "你来也好，他来也好，谁来。", "good": "你来也好，他来也好，我都欢迎。", "why": "Vế sau thường có 都."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "茶也好，咖啡也好，我＿可以。", "vi": "Trà hay cà phê tôi đều được.", "o": ["都", "才", "却"], "a": 0, "why": "……也好……也好，都."}, {"q": "你早点儿回去＿，家里人放心。", "vi": "Bạn về sớm cũng được, nhà yên tâm.", "o": ["好也", "也好", "也很"], "a": 1, "why": "……也好."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["让他", "知道", "也好"], "a": "让他知道也好。", "vi": "Để anh ấy biết cũng được."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Làm hay học đều phải nghiêm túc.", "a": "工作也好，学习也好，都要认真。 / 工作也好，学习也好，都应该认真。"}]}],
rel:["新6.19", "新4.61", "二29"]
};
