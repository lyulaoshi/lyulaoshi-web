// Bài ngữ pháp 【新7.41】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.41", title:"固定格式（7）：无非／不过／只是……罢了／而已、想X之所想，急X之所急、向……致以……、要X有／没X，要Y有／没Y", vi:"Chẳng qua … mà thôi, lo cái lo của người, gửi tới … lời …, cần … có …", tag:"短语 · 固定格式",
goals:[
 "Hạ thấp: <b>无非 / 不过 / 只是……罢了 / 而已</b>.",
 "Dùng <b>想X之所想，急X之所急</b>, <b>向……致以……</b>, <b>要X有X</b>."],
rules:[
 {"t": "无非 / 不过 / 只是 + … + 罢了 / 而已", "fx": [["无非 / 不过 / 只是", null], ["sự việc", ""], ["罢了 / 而已", null]], "mean": "Chẳng qua … mà thôi.", "ex": [["我{1|只是}{2|问问}{3|而已}。", "Wǒ zhǐshì wènwen éryǐ.", "Tôi chỉ hỏi thôi mà."]]},
 {"t": "想 X 之所想，急 X 之所急", "fx": [["想", null], ["X", ""], ["之所想", null], ["，", ""], ["急 X 之所急", ""]], "mean": "Nghĩ điều X nghĩ, lo điều X lo.", "ex": [["服务员应该{1|想}{2|顾客}{3|之所想}，{4|急顾客之所急}。", "Fúwùyuán yīnggāi xiǎng gùkè zhī suǒ xiǎng, jí gùkè zhī suǒ jí.", "Nhân viên nên nghĩ điều khách nghĩ, lo điều khách lo."]]},
 {"t": "向 + người + 致以 + lời trang trọng", "fx": [["向", null], ["người", ""], ["致以", null], ["lời chúc / cảm ơn", ""]], "mean": "Gửi tới … lời …", "ex": [["{1|向}{2|各位老师}{3|致以}{4|节日的问候}。", "Xiàng gè wèi lǎoshī zhìyǐ jiérì de wènhòu.", "Gửi tới quý thầy cô lời chúc ngày lễ."]]},
 {"t": "要 X 有 / 没 X，要 Y 有 / 没 Y", "fx": [["要", null], ["X", ""], ["有 / 没", null], ["X", ""], ["，", ""], ["要 Y 有 / 没 Y", ""]], "mean": "Cần gì có (không) nấy.", "ex": [["他{1|要}{2|钱}{3|有}{4|钱}，{5|要房子有房子}。", "Tā yào qián yǒu qián, yào fángzi yǒu fángzi.", "Anh ta tiền có tiền, nhà có nhà."]]}],
cmp:[
 {"vn": "Chỉ thế mà thôi.", "zh": "如此[而已]。", "py": "Rúcǐ éryǐ.", "ok": true, "why": "Câu quen thuộc."}],
ex:[
 ["他[不过]是个孩子[罢了]。", "Tā búguò shì gè háizi bàle.", "Nó chẳng qua là đứa trẻ thôi."],
 ["谨[向]您[致以]诚挚的感谢。", "Jǐn xiàng nín zhìyǐ chéngzhì de gǎnxiè.", "Trân trọng gửi tới ngài lời cảm ơn chân thành."]],
errs:[
 {"bad": "我而已只是问问。", "good": "我只是问问而已。", "why": "而已 cuối câu."},
 {"bad": "对您致以向感谢。", "good": "向您致以感谢。", "why": "向……致以."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这只是我个人的看法＿。", "vi": "Đó chỉ là ý riêng tôi thôi.", "o": ["之所", "而已", "致以"], "a": 1, "why": "只是……而已."}, {"q": "那个地方要什么没什么，生活很＿便。", "vi": "Chỗ đó cần gì cũng không có, rất bất tiện.", "o": ["方", "不", "很"], "a": 1, "why": "不便."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我", "只是", "问问", "而已"], "a": "我只是问问而已。", "vi": "Tôi chỉ hỏi thôi mà."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ta tiền có tiền, nhà có nhà (dùng 要……有……).", "a": "他要钱有钱，要房子有房子。"}]}],
rel:["新7.29", "新7.11", "新7.38"]
};
