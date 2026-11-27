// Bài ngữ pháp 【新7.39】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.39", title:"固定格式（5）：没什么＋动词＋头儿、没什么好＋动词＋的、有什么＋动词＋头儿、有何X、莫过于……", vi:"Chẳng có gì đáng…, có gì mà…, không gì bằng", tag:"短语 · 固定格式",
goals:[
 "Chê không đáng bằng <b>没什么V头儿, 没什么好V的</b>.",
 "Hỏi <b>有什么V头儿, 有何X</b>; nêu cái nhất <b>莫过于</b>."],
rules:[
 {"t": "没什么 / 有什么 + V + 头儿", "fx": [["没什么 / 有什么", null], ["V", ""], ["头儿", null]], "mean": "Chẳng đáng … / đáng … ở chỗ nào.", "ex": [["这个电影{1|没什么}{2|看}{3|头儿}。", "Zhège diànyǐng méi shénme kàntour.", "Phim này chẳng đáng xem."], ["那有什么{2|吃}{3|头儿}？", "Nà yǒu shénme chītour?", "Cái đó ăn có gì ngon?"]]},
 {"t": "没什么好 + V + 的", "fx": [["没什么好", null], ["V", ""], ["的", null]], "mean": "Không có gì để …", "ex": [["这事{1|没什么好}{2|说}{3|的}。", "Zhè shì méi shénme hǎo shuō de.", "Việc này chẳng có gì để nói."]]},
 {"t": "有何 + 意见 / 感想", "fx": [["有何", null], ["N", ""]], "mean": "Có … gì (trang trọng).", "ex": [["您对此{1|有何}{2|看法}？", "Nín duì cǐ yǒu hé kànfǎ?", "Ngài có ý kiến gì về việc này?"]]},
 {"t": "A + 的 + 事，莫过于 + B", "fx": [["điều nhất", ""], ["，", ""], ["莫过于", null], ["B", ""]], "mean": "Không gì hơn …", "ex": [["{1|人生最大的幸福}，{2|莫过于}{3|健康}。", "Rénshēng zuì dà de xìngfú, mò guòyú jiànkāng.", "Hạnh phúc lớn nhất đời không gì bằng sức khỏe."]]}],
cmp:[
 {"vn": "Chẳng có gì đáng ngại.", "zh": "[没什么好]怕[的]。", "py": "Méi shénme hǎo pà de.", "ok": true, "why": "Cùng họ với 新4.37."}],
ex:[
 ["这本书很有[看头儿]。", "Zhè běn shū hěn yǒu kàntour.", "Cuốn sách này rất đáng đọc."],
 ["最让人高兴的事[莫过于]全家团圆。", "Zuì ràng rén gāoxìng de shì mò guòyú quán jiā tuányuán.", "Vui nhất không gì bằng cả nhà sum họp."]],
errs:[
 {"bad": "没什么看的头。", "good": "没什么看头儿。", "why": "V + 头儿."},
 {"bad": "最好的事莫过健康。", "good": "最好的事莫过于健康。", "why": "Cần 于."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "请问您＿何感想？", "vi": "Xin hỏi ngài cảm tưởng thế nào?", "o": ["有", "无", "没什么"], "a": 0, "why": "有何感想."}, {"q": "这点儿事没什么好担心＿。", "vi": "Chuyện này chẳng có gì lo.", "o": ["头儿", "了吗", "的"], "a": 2, "why": "没什么好V的."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["这个电影", "没什么", "看头儿"], "a": "这个电影没什么看头儿。", "vi": "Phim này chẳng đáng xem."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Hạnh phúc lớn nhất đời không gì bằng sức khỏe (dùng 莫过于).", "a": "人生最大的幸福莫过于健康。 / 人生最大的幸福，莫过于健康。"}]}],
rel:["新4.37", "新7.38", "新7.40"]
};
