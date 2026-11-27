// Bài ngữ pháp 【新6.14】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.14", title:"介词：至于（引出对象）", vi:"至于 — còn về", tag:"词类 · 介词",
goals:[
 "Dùng <b>至于</b> để chuyển sang một <b>đề tài khác</b> có liên quan.",
 "Đặt 至于 đầu vế mới, sau đề tài đã nói."],
rules:[
 {"t": "Câu trước。至于 + đề tài mới，…", "fx": [["至于", null], ["đề tài mới", ""], ["，", ""], ["nhận xét", ""]], "mean": "Còn về … thì.", "ex": [["我们先定时间，{1|至于}{2|地点}，{3|以后再说}。", "Wǒmen xiān dìng shíjiān, zhìyú dìdiǎn, yǐhòu zài shuō.", "Ta định giờ trước, còn địa điểm để sau."], ["这是我的看法，{1|至于}{2|对不对}，{3|请大家讨论}。", "Zhè shì wǒ de kànfǎ, zhìyú duì bu duì, qǐng dàjiā tǎolùn.", "Đó là ý tôi, còn đúng hay không xin mọi người bàn."]]}],
notes:[
 {"t": "Phân biệt", "html": "<span class='zh'>不至于</span> (không đến mức) là động từ, khác giới từ 至于: <span class='zh'>他不至于生气吧。</span>"}],
cmp:[
 {"vn": "Còn giá cả thì chưa biết.", "zh": "[至于]价格，还不知道。", "py": "Zhìyú jiàgé, hái bù zhīdào.", "ok": true, "why": "至于 đứng đầu vế mới."}],
ex:[
 ["他走了，[至于]去哪儿了，没人知道。", "Tā zǒu le, zhìyú qù nǎr le, méi rén zhīdào.", "Anh ấy đi rồi, còn đi đâu thì không ai biết."],
 ["菜很好吃，[至于]服务，就一般了。", "Cài hěn hǎochī, zhìyú fúwù, jiù yìbān le.", "Món ngon, còn phục vụ thì bình thường."]],
errs:[
 {"bad": "至于我很喜欢汉语。（mở đầu bài nói）", "good": "我很喜欢汉语。", "why": "至于 cần đề tài đã nói trước đó."},
 {"bad": "时间定了，对于地点以后再说。（muốn nói “còn về”）", "good": "时间定了，至于地点，以后再说。", "why": "Chuyển đề tài → 至于."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "价格合适，＿质量，还要看看。", "vi": "Giá hợp lý, còn chất lượng phải xem thêm.", "o": ["由于", "关于是", "至于"], "a": 2, "why": "Chuyển đề tài."}, {"q": "他肯定来，＿几点来，不一定。", "vi": "Chắc anh ấy đến, còn mấy giờ thì chưa chắc.", "o": ["对于说", "至于", "以便"], "a": 1, "why": "至于."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["至于", "地点，", "以后", "再说"], "a": "至于地点，以后再说。", "vi": "Còn địa điểm để sau."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy đi rồi, còn đi đâu thì không ai biết.", "a": "他走了，至于去哪儿了，没人知道。 / 他走了，至于去了哪儿，没人知道。"}]}],
rel:["新4.17", "三40", "新6.13"]
};
