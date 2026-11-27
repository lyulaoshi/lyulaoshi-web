// Bài ngữ pháp 【新7.37】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.37", title:"固定格式（3）：不知X是／才好、动不动就……、动词＋得个……、动词＋个X", vi:"Không biết … mới phải, hơi tí là…, … đến mức, … cho …", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>不知……是好 / 才好</b> khi lúng túng.",
 "Phàn nàn <b>动不动就……</b>; khẩu ngữ <b>V得个 / V个</b>."],
rules:[
 {"t": "不知 + 疑问词 + V + 才好 / 是好", "fx": [["不知", null], ["怎么办 / 说什么", ""], ["才好 / 是好", null]], "mean": "Không biết … mới phải.", "ex": [["我{1|不知}{2|说什么}{3|才好}。", "Wǒ bùzhī shuō shénme cái hǎo.", "Tôi không biết nói gì cho phải."]]},
 {"t": "(S) 动不动就 + V", "fx": [["S", ""], ["动不动就", null], ["V", ""]], "mean": "Hơi tí là.", "ex": [["{1|他}{2|动不动就}{3|发脾气}。", "Tā dòngbudòng jiù fā píqi.", "Anh ta hơi tí là nổi cáu."]]},
 {"t": "V + 得个 + kết quả", "fx": [["V", ""], ["得个", null], ["kết quả", ""]], "mean": "… đến nỗi (thành).", "ex": [["雨{1|下}{2|得个}{3|没完}。", "Yǔ xià de gè méiwán.", "Mưa không dứt."]]},
 {"t": "V + 个 + X", "fx": [["V", ""], ["个", null], ["X", ""]], "mean": "Làm … cho … (thoải mái, hết).", "ex": [["他{1|笑}{2|个}{3|不停}。", "Tā xiào gè bùtíng.", "Anh ấy cười không ngớt."]]}],
cmp:[
 {"vn": "Không biết làm sao cho phải.", "zh": "[不知]如何[是好]。", "py": "Bùzhī rúhé shì hǎo.", "ok": true, "why": "是好 trang trọng hơn."}],
ex:[
 ["他[动不动就]请假。", "Tā dòngbudòng jiù qǐngjià.", "Anh ta hơi tí là xin nghỉ."],
 ["周末我要睡[个]够。", "Zhōumò wǒ yào shuì gè gòu.", "Cuối tuần tôi phải ngủ cho đã."]],
errs:[
 {"bad": "他动不动发脾气就。", "good": "他动不动就发脾气。", "why": "就 đứng ngay sau 动不动."},
 {"bad": "我不知才好说什么。", "good": "我不知说什么才好。", "why": "才好 đứng cuối."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这孩子＿就哭。", "vi": "Đứa bé hơi tí là khóc.", "o": ["动不动", "不知", "别提"], "a": 0, "why": "Hơi tí."}, {"q": "面对这么多礼物，她不知选哪个＿。", "vi": "…không biết chọn cái nào.", "o": ["才好", "就好了吗", "得个"], "a": 0, "why": "不知…才好."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "动不动就", "发脾气"], "a": "他动不动就发脾气。", "vi": "Anh ta hơi tí là nổi cáu."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Tôi không biết nói gì cho phải.", "a": "我不知说什么才好。 / 我不知道说什么才好。 / 我不知说什么是好。"}]}],
rel:["新6.29", "新5.28", "新7.35"]
};
