// Bài ngữ pháp 【新7.20】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.20", title:"语气副词（1）：必定、必将、不妨、不免、反倒、非得、分明、怪不得", vi:"必定, 不妨, 不免, 反倒, 非得, 分明, 怪不得", tag:"词类 · 副词",
goals:[
 "Khẳng định bằng <b>必定, 必将, 分明</b>; đề nghị nhẹ bằng <b>不妨</b>.",
 "Dùng <b>不免, 反倒, 非得, 怪不得</b>."],
rules:[
 {"t": "必定 / 必将 / 分明 + V", "fx": [["必定 / 必将 / 分明", null], ["V", ""]], "mean": "Nhất định · ắt sẽ · rõ ràng.", "ex": [["他今天{1|必定}{2|会来}。", "Tā jīntiān bìdìng huì lái.", "Hôm nay anh ấy nhất định đến."], ["我们的努力{1|必将}{2|得到回报}。", "Wǒmen de nǔlì bìjiāng dédào huíbào.", "Nỗ lực của chúng ta ắt được đền đáp."], ["这{1|分明}{2|是他的错}。", "Zhè fēnmíng shì tā de cuò.", "Đây rõ ràng là lỗi của anh ta."]]},
 {"t": "不妨 + V", "fx": [["不妨", null], ["V (thử)", ""]], "mean": "Chi bằng cứ …, không ngại gì.", "ex": [["你{1|不妨}{2|试试这个办法}。", "Nǐ bùfáng shìshi zhège bànfǎ.", "Bạn thử cách này xem sao."]]},
 {"t": "不免 / 反倒 + V / Adj", "fx": [["不免 / 反倒", null], ["V / Adj", ""]], "mean": "不免 khó tránh · 反倒 trái lại.", "ex": [["第一次上台，{1|不免}{2|有点儿紧张}。", "Dì-yī cì shàng tái, bùmiǎn yǒudiǎnr jǐnzhāng.", "Lần đầu lên sân khấu khó tránh hồi hộp."], ["帮了他，他{1|反倒}{2|怪我}。", "Bāngle tā, tā fǎndào guài wǒ.", "Giúp anh ta, anh ta trái lại trách tôi."]]},
 {"t": "非得 + V (不可 / 才)", "fx": [["非得", null], ["V", ""], ["(不可 / 才)", ""]], "mean": "Nhất định phải.", "ex": [["这件事{1|非得}{2|你去}{3|不可}。", "Zhè jiàn shì fēiděi nǐ qù bùkě.", "Việc này nhất định phải bạn đi."]]},
 {"t": "怪不得 + kết quả", "fx": [["怪不得", null], ["điều đã hiểu", ""]], "mean": "Thảo nào.", "ex": [["原来他病了，{1|怪不得}{2|没来}。", "Yuánlái tā bìng le, guàibude méi lái.", "Hóa ra anh ấy ốm, thảo nào không đến."]]}],
cmp:[
 {"vn": "Hỏi thử cũng chẳng sao.", "zh": "[不妨]问一问。", "py": "Bùfáng wèn yi wèn.", "ok": true, "why": "不妨 = cứ thử."}],
ex:[
 ["离开家久了，[不免]想家。", "Líkāi jiā jiǔ le, bùmiǎn xiǎng jiā.", "Xa nhà lâu khó tránh nhớ nhà."],
 ["他[非得]亲自检查才放心。", "Tā fēiděi qīnzì jiǎnchá cái fàngxīn.", "Anh ấy phải tự kiểm tra mới yên tâm."]],
errs:[
 {"bad": "你不妨一定要试。", "good": "你不妨试试。", "why": "不妨 là gợi ý nhẹ, không đi với 一定要."},
 {"bad": "他怪不得昨天病了。", "good": "他昨天病了，怪不得没来。", "why": "怪不得 đứng trước kết quả đã hiểu."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "天气这么好，我们＿出去走走。", "vi": "Trời đẹp, ta ra ngoài đi dạo xem.", "o": ["不免", "不妨", "分明"], "a": 1, "why": "Đề nghị nhẹ."}, {"q": "他说不知道，其实他＿看见了。", "vi": "Nó bảo không biết, rõ ràng đã thấy.", "o": ["必将", "不妨", "分明"], "a": 2, "why": "Rõ ràng."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["你", "不妨", "试试", "这个办法"], "a": "你不妨试试这个办法。", "vi": "Bạn thử cách này xem sao."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Thảo nào anh ấy không đến.", "a": "怪不得他没来。 / 怪不得他没有来。"}]}],
rel:["新5.11", "新7.21", "新6.12"]
};
