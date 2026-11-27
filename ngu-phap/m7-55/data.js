// Bài ngữ pháp 【新7.55】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.55", title:"多重复句", vi:"Câu ghép nhiều tầng — song song, chuyển ý, giả thiết, nhân quả, tăng tiến", tag:"句子的类型 · 复句",
goals:[
 "Tách câu dài thành <b>tầng lớn</b> và <b>tầng nhỏ</b>.",
 "Nhận ra cặp từ nối lồng nhau: nhân quả, chuyển ý, giả thiết, tăng tiến, song song."],
intro:"Câu ghép nhiều tầng là câu có từ <b>ba phân câu</b> trở lên, quan hệ chia thành nhiều lớp. Khi đọc, tìm quan hệ <b>lớn nhất</b> trước.",
rules:[
 {"t": "Chuyển ý lồng nhân quả", "fx": [["虽然", null], ["A", ""], ["，", ""], ["但是", null], ["因为 B，所以 C", ""]], "mean": "Tầng 1: 虽然/但是 · tầng 2: 因为/所以.", "ex": [["{1|虽然}{2|天气不好}，{3|但是}{4|因为大家早有准备，所以活动照常进行}。", "Suīrán tiānqì bù hǎo, dànshì yīnwèi dàjiā zǎo yǒu zhǔnbèi, suǒyǐ huódòng zhàocháng jìnxíng.", "Tuy trời xấu, nhưng vì mọi người chuẩn bị sớm nên hoạt động vẫn diễn ra."]]},
 {"t": "Giả thiết lồng song song", "fx": [["如果", null], ["A，也 B", ""], ["，", ""], ["那么", null], ["C", ""]], "mean": "Tầng 1: 如果/那么 · trong điều kiện có hai vế song song.", "ex": [["{1|如果}{2|你不学，也不问}，{3|那么}{4|永远也不会明白}。", "Rúguǒ nǐ bù xué, yě bú wèn, nàme yǒngyuǎn yě bú huì míngbai.", "Nếu bạn không học cũng không hỏi thì mãi không hiểu."]]},
 {"t": "Tăng tiến lồng chuyển ý", "fx": [["不但", null], ["A", ""], ["，", ""], ["而且", null], ["B，只是 C", ""]], "mean": "Tầng 1: 不但/而且 hoặc 只是.", "ex": [["他{1|不但}{2|会说汉语}，{3|而且}{4|说得很好，只是不太会写}。", "Tā búdàn huì shuō Hànyǔ, érqiě shuō de hěn hǎo, zhǐshì bú tài huì xiě.", "Anh ấy không những nói được tiếng Trung mà còn nói hay, chỉ là viết chưa giỏi."]]}],
cmp:[
 {"vn": "Vì bận nên tuy muốn đi cũng đành thôi.", "zh": "因为很忙，所以[虽然]想去，[也]只好算了。", "py": "Yīnwèi hěn máng, suǒyǐ suīrán xiǎng qù, yě zhǐhǎo suàn le.", "ok": true, "why": "Dịch theo từng tầng sẽ không bị rối."}],
ex:[
 ["他既没打电话，也没发信息，所以大家很担心。", "Tā jì méi dǎ diànhuà, yě méi fā xìnxī, suǒyǐ dàjiā hěn dānxīn.", "Anh ấy không gọi cũng không nhắn, nên mọi người rất lo."],
 ["即使有困难，只要大家一起想办法，就一定能解决。", "Jíshǐ yǒu kùnnan, zhǐyào dàjiā yìqǐ xiǎng bànfǎ, jiù yídìng néng jiějué.", "Dù khó khăn, chỉ cần cùng nghĩ cách thì nhất định giải quyết được."]],
errs:[
 {"bad": "虽然下雨，但是所以我们没去。", "good": "虽然想去，但是因为下雨，所以我们没去。", "why": "Mỗi tầng giữ đủ cặp từ nối, không chồng hai từ cuối tầng."},
 {"bad": "如果你来，那么因为我很忙。", "good": "如果你来，那么我再忙也陪你。", "why": "Vế sau của 那么 phải là kết quả."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "“虽然很贵，但是因为喜欢，所以买了。” Quan hệ lớn nhất là:", "vi": "Tìm tầng 1.", "o": ["nhân quả", "chuyển ý", "giả thiết"], "a": 1, "why": "虽然…但是 bao ngoài."}, {"q": "即使下雨，只要不太大，我们＿去。", "vi": "Dù mưa, miễn không to, ta vẫn đi.", "o": ["但是", "就", "因此却"], "a": 1, "why": "只要…就."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["即使有困难，", "只要", "大家一起想办法，", "就一定能解决"], "a": "即使有困难，只要大家一起想办法，就一定能解决。", "vi": "Dù khó, chỉ cần cùng nghĩ cách thì giải quyết được."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy không gọi điện cũng không nhắn tin, nên mọi người rất lo (dùng 既……也……所以).", "a": "他既没打电话，也没发信息，所以大家很担心。"}]}],
rel:["新4.62", "新6.45", "新5.39"]
};
