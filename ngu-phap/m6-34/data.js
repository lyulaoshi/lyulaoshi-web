// Bài ngữ pháp 【新6.34】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.34", title:"X了就X了，（没）有……", vi:"X了就X了 — … thì thôi, có gì mà …", tag:"短语 · 固定格式",
goals:[
 "Tỏ thái độ <b>không bận tâm</b>: 丢了就丢了。",
 "Thêm 没(有)什么大不了的."],
rules:[
 {"t": "V + 了 + 就 + V + 了，…", "fx": [["V了", ""], ["就", null], ["V了", ""], ["，", ""], ["nhận xét", ""]], "mean": "… rồi thì thôi.", "ex": [["{1|丢了}{2|就}{3|丢了}，{4|没什么大不了的}。", "Diūle jiù diū le, méi shénme dàbùliǎo de.", "Mất thì mất, có gì to tát."], ["{1|输了}{2|就}{3|输了}，{4|下次再来}。", "Shūle jiù shū le, xià cì zài lái.", "Thua thì thôi, lần sau làm lại."]]}],
cmp:[
 {"vn": "Hỏng thì hỏng, mua cái mới.", "zh": "[坏了就坏了]，买个新的。", "py": "Huàile jiù huài le, mǎi gè xīn de.", "ok": true, "why": "Gần “… thì thôi”."}],
ex:[
 ["[错了就错了]，改过来就好。", "Cuòle jiù cuò le, gǎi guolai jiù hǎo.", "Sai thì sai, sửa là được."],
 ["[忘了就忘了]，有什么可着急的？", "Wàngle jiù wàng le, yǒu shénme kě zháojí de?", "Quên thì thôi, có gì phải cuống?"]],
errs:[
 {"bad": "丢就丢了了。", "good": "丢了就丢了。", "why": "Hai vế đều V了."},
 {"bad": "丢了就忘了。（muốn nói mất thì thôi）", "good": "丢了就丢了。", "why": "Lặp cùng động từ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "迟到了就迟到＿，别紧张。", "vi": "Muộn thì muộn rồi, đừng căng.", "o": ["过", "了", "着呢"], "a": 1, "why": "V了就V了."}, {"q": "卖了就卖了，没有什么好后悔＿。", "vi": "Bán thì bán rồi, có gì mà tiếc.", "o": ["了", "得", "的"], "a": 2, "why": "没什么好V的."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["输了", "就输了，", "下次", "再来"], "a": "输了就输了，下次再来。", "vi": "Thua thì thôi, lần sau làm lại."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mất thì mất, có gì to tát.", "a": "丢了就丢了，没什么大不了的。"}]}],
rel:["新4.45", "新4.46", "新4.37"]
};
