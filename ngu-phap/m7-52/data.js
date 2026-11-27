// Bài ngữ pháp 【新7.52】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.52", title:"递进复句（2）：……尚且……，（更）何况……；……，更不用说……了", vi:"…尚且…何况… — …còn…, huống hồ…", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>A 尚且……，何况 B</b> (văn viết).",
 "Dùng <b>……，更不用说……了</b>."],
rules:[
 {"t": "A + 尚且 + V，(更) 何况 + B", "fx": [["A", ""], ["尚且", null], ["V", ""], ["，", ""], ["何况", null], ["B", ""]], "mean": "A còn …, huống chi B.", "ex": [["{1|大人}{2|尚且}{3|做不到}，{4|何况}{5|孩子}？", "Dàrén shàngqiě zuò bu dào, hékuàng háizi?", "Người lớn còn không làm được, huống chi trẻ con?"]]},
 {"t": "A + …，更不用说 + B + 了", "fx": [["A 的情况", ""], ["，", ""], ["更不用说", null], ["B", ""], ["了", null]], "mean": "…, nói gì đến B.", "ex": [["{1|走路都要一个小时}，{2|更不用说}{3|堵车}{4|了}。", "Zǒulù dōu yào yí gè xiǎoshí, gèng búyòng shuō dǔchē le.", "Đi bộ đã mất một tiếng, nói gì lúc tắc xe."]]}],
cmp:[
 {"vn": "Huống hồ là tôi", "zh": "[何况]是我", "py": "hékuàng shì wǒ", "ok": true, "why": "何况 = huống hồ."}],
ex:[
 ["这个问题专家[尚且]解决不了，[何况]我们？", "Zhège wèntí zhuānjiā shàngqiě jiějué bu liǎo, hékuàng wǒmen?", "Chuyên gia còn không giải quyết được, huống chi chúng ta?"],
 ["平时都很忙，[更不用说]年底[了]。", "Píngshí dōu hěn máng, gèng búyòng shuō niándǐ le.", "Ngày thường đã bận, nói gì cuối năm."]],
errs:[
 {"bad": "大人尚且做不到，所以孩子？", "good": "大人尚且做不到，何况孩子？", "why": "尚且…何况."},
 {"bad": "何况大人做不到，尚且孩子。", "good": "大人尚且做不到，何况孩子？", "why": "Thứ tự 尚且 trước."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "生命＿可以牺牲，何况金钱？", "vi": "Mạng sống còn hy sinh được, huống chi tiền?", "o": ["尚且", "况且", "姑且"], "a": 0, "why": "尚且."}, {"q": "老朋友都不告诉，＿别人了。", "vi": "Bạn cũ còn không nói, huống chi người khác.", "o": ["更不用说", "说不定", "不瞒你说"], "a": 0, "why": "更不用说."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["大人", "尚且做不到，", "何况", "孩子"], "a": "大人尚且做不到，何况孩子。", "vi": "Người lớn còn không làm được, huống chi trẻ con."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Chuyên gia còn không giải quyết được, huống chi chúng ta (dùng 尚且……何况)?", "a": "专家尚且解决不了，何况我们？ / 专家尚且解决不了，更何况我们？"}]}],
rel:["新7.51", "新7.27", "新4.57"]
};
