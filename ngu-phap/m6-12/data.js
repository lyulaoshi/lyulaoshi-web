// Bài ngữ pháp 【新6.12】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.12", title:"语气副词：恰好、倒是、干脆、明明、总算", vi:"恰好, 倒是, 干脆, 明明, 总算 — vừa khéo, thì lại, dứt khoát, rõ ràng, rốt cuộc cũng", tag:"词类 · 副词",
goals:[
 "Dùng <b>恰好</b> (đúng lúc), <b>干脆</b> (dứt khoát), <b>总算</b> (cuối cùng cũng).",
 "Dùng <b>明明</b> (rõ ràng là… mà) và <b>倒是</b> (thì lại)."],
rules:[
 {"t": "S + 恰好 / 总算 + V", "fx": [["S", ""], ["恰好 / 总算", null], ["V", ""]], "mean": "恰好 vừa khéo · 总算 mãi rồi cũng (nhẹ nhõm).", "ex": [["{1|我到车站时}，车{2|恰好}{3|进站}。", "Wǒ dào chēzhàn shí, chē qiàhǎo jìn zhàn.", "Tôi đến bến thì xe vừa khéo vào."], ["{1|作业}{2|总算}{3|写完了}。", "Zuòyè zǒngsuàn xiěwán le.", "Bài tập cuối cùng cũng làm xong."]]},
 {"t": "干脆 + đề nghị", "fx": [["干脆", null], ["cách giải quyết", ""]], "mean": "Dứt khoát, thôi thì … luôn.", "ex": [["车太堵了，我们{1|干脆}{2|走过去吧}。", "Chē tài dǔ le, wǒmen gāncuì zǒu guoqu ba.", "Tắc quá, thôi mình đi bộ luôn."]]},
 {"t": "明明 + sự thật，(S) 却 / 还 …", "fx": [["明明", null], ["sự thật", ""], ["，", ""], ["điều trái ngược", ""]], "mean": "Rõ ràng là … mà.", "ex": [["{1|明明}{2|是你弄坏的}，{3|你还不承认}。", "Míngmíng shì nǐ nònghuài de, nǐ hái bù chéngrèn.", "Rõ ràng cậu làm hỏng mà còn không nhận."]]},
 {"t": "S + 倒是 + Adj / V", "fx": [["S", ""], ["倒是", null], ["V / Adj", ""]], "mean": "Thì lại (đối lập nhẹ, nhượng bộ).", "ex": [["房子小，{1|房租}{2|倒是}{3|很便宜}。", "Fángzi xiǎo, fángzū dàoshì hěn piányi.", "Nhà nhỏ nhưng tiền thuê thì lại rẻ."]]}],
cmp:[
 {"vn": "Thôi đừng đi nữa cho xong.", "zh": "[干脆]别去了。", "py": "Gāncuì bié qù le.", "ok": true, "why": "干脆 đứng trước đề nghị."}],
ex:[
 ["你来得[恰好]，帮我一下儿。", "Nǐ lái de qiàhǎo, bāng wǒ yíxiàr.", "Cậu đến vừa khéo, giúp mình tí."],
 ["他[明明]知道，却装不知道。", "Tā míngmíng zhīdào, què zhuāng bù zhīdào.", "Anh ta rõ ràng biết mà giả không biết."]],
errs:[
 {"bad": "你总算明天来了。", "good": "你总算来了。", "why": "总算 cho việc đã thành sau khi chờ đợi."},
 {"bad": "干脆我们昨天走了。", "good": "我们干脆走吧。", "why": "干脆 dùng đưa ra quyết định."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "等了一个小时，他＿来了。", "vi": "Đợi một tiếng, cuối cùng anh ấy cũng đến.", "o": ["干脆", "总算", "明明"], "a": 1, "why": "Mãi rồi cũng."}, {"q": "这么晚了，你＿住这儿吧。", "vi": "Muộn rồi, bạn ở lại luôn đi.", "o": ["总算", "恰好", "干脆"], "a": 2, "why": "Đề nghị dứt khoát."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["房租", "倒是", "很便宜"], "a": "房租倒是很便宜。", "vi": "Tiền thuê thì lại rẻ."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Rõ ràng cậu làm hỏng mà còn không nhận.", "a": "明明是你弄坏的，你还不承认。 / 明明是你弄坏的，你还不承认？"}]}],
rel:["新5.11", "新4.12", "三19"]
};
