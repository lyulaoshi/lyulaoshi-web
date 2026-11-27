// Bài ngữ pháp 【新7.47】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.47", title:"转折复句：X（倒）是X（了），……；别看……，……；虽说……，但／可……", vi:"… thì … thật; đừng thấy… mà…; tuy nói… nhưng…", tag:"句子的类型 · 复句",
goals:[
 "Thừa nhận rồi chuyển ý: <b>X倒是X了</b>.",
 "Dùng <b>别看……</b> và <b>虽说……但</b>."],
rules:[
 {"t": "X (倒) 是 X (了)，(不过) …", "fx": [["X (倒)是", ""], ["X (了)", ""], ["，", ""], ["điều còn lại", ""]], "mean": "… thì có …, nhưng …", "ex": [["{1|房子好倒是}{2|好}，{3|就是太贵}。", "Fángzi hǎo dàoshì hǎo, jiùshì tài guì.", "Nhà tốt thì tốt thật, có điều đắt."]]},
 {"t": "别看 + A，(可) + B", "fx": [["别看", null], ["A", ""], ["，", ""], ["B", ""]], "mean": "Đừng thấy A mà (tưởng).", "ex": [["{1|别看}{2|他年纪小}，{3|知道的事可不少}。", "Bié kàn tā niánjì xiǎo, zhīdào de shì kě bù shǎo.", "Đừng thấy nó nhỏ tuổi mà biết không ít đâu."]]},
 {"t": "虽说 + A，但 / 可 + B", "fx": [["虽说", null], ["A", ""], ["，", ""], ["但 / 可", null], ["B", ""]], "mean": "Tuy nói … nhưng.", "ex": [["{1|虽说}{2|是周末}，{3|可}{4|他还在加班}。", "Suīshuō shì zhōumò, kě tā hái zài jiābān.", "Tuy nói là cuối tuần mà anh ấy vẫn tăng ca."]]}],
cmp:[
 {"vn": "Trông vậy chứ khỏe lắm.", "zh": "[别看]他瘦，力气可大了。", "py": "Bié kàn tā shòu, lìqi kě dà le.", "ok": true, "why": "别看 ≈ “đừng thấy”."}],
ex:[
 ["我去[倒是]去了，没见到他。", "Wǒ qù dàoshì qù le, méi jiàndào tā.", "Đi thì tôi có đi, mà không gặp."],
 ["[虽说]天气不好，[但]大家兴致很高。", "Suīshuō tiānqì bù hǎo, dàn dàjiā xìngzhì hěn gāo.", "Tuy trời xấu nhưng ai cũng hứng thú."]],
errs:[
 {"bad": "看别他小，懂很多。", "good": "别看他小，懂得很多。", "why": "Cụm 别看."},
 {"bad": "虽说下雨，所以去。", "good": "虽说下雨，但还是去了。", "why": "虽说 đi với 但 / 可."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿这家店小，生意可好了。", "vi": "Đừng thấy quán nhỏ mà đông khách lắm.", "o": ["虽然不", "别看", "宁可"], "a": 1, "why": "别看."}, {"q": "虽说很难，＿我们要试试。", "vi": "Tuy khó nhưng ta cứ thử.", "o": ["因此", "否则", "但"], "a": 2, "why": "虽说…但."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["别看", "他年纪小，", "知道的事", "可不少"], "a": "别看他年纪小，知道的事可不少。", "vi": "Đừng thấy nó nhỏ mà biết không ít đâu."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Tuy nói là cuối tuần nhưng anh ấy vẫn tăng ca (dùng 虽说).", "a": "虽说是周末，但他还在加班。 / 虽说是周末，可他还在加班。"}]}],
rel:["新6.42", "新4.59", "新6.12"]
};
