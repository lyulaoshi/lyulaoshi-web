// Bài ngữ pháp 【新7.42】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.42", title:"固定格式（8）：因……而……、（在）……之余、值此……之际，……", vi:"因…而… , 之余 (ngoài giờ…), 值此…之际 (nhân dịp)", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>因……而……</b>: vì … mà …",
 "Dùng <b>(在)……之余</b> và <b>值此……之际</b>."],
rules:[
 {"t": "因 + nguyên nhân + 而 + V", "fx": [["因", null], ["nguyên nhân", ""], ["而", null], ["V", ""]], "mean": "Vì … mà.", "ex": [["他{1|因}{2|一句话}{3|而}{4|生气}。", "Tā yīn yí jù huà ér shēngqì.", "Anh ấy giận vì một câu nói."]]},
 {"t": "(在) + công việc + 之余，…", "fx": [["(在)", null], ["công việc", ""], ["之余", null], ["，", ""], ["việc làm thêm", ""]], "mean": "Ngoài lúc …", "ex": [["{2|工作}{3|之余}，{4|他喜欢画画儿}。", "Gōngzuò zhī yú, tā xǐhuan huà huàr.", "Ngoài giờ làm, anh ấy thích vẽ."]]},
 {"t": "值此 + dịp + 之际，lời chúc", "fx": [["值此", null], ["dịp", ""], ["之际", null], ["，", ""], ["lời chúc", ""]], "mean": "Nhân dịp.", "ex": [["{1|值此}{2|新年}{3|之际}，{4|祝大家身体健康}。", "Zhí cǐ xīnnián zhī jì, zhù dàjiā shēntǐ jiànkāng.", "Nhân dịp năm mới, chúc mọi người mạnh khỏe."]]}],
cmp:[
 {"vn": "Nhân dịp khai giảng", "zh": "[值此]开学[之际]", "py": "zhí cǐ kāixué zhī jì", "ok": true, "why": "Văn chúc mừng trang trọng."}],
ex:[
 ["很多人[因]缺少锻炼[而]生病。", "Hěn duō rén yīn quēshǎo duànliàn ér shēngbìng.", "Nhiều người ốm vì thiếu vận động."],
 ["学习[之余]，他还打工。", "Xuéxí zhī yú, tā hái dǎgōng.", "Ngoài việc học, cậu ấy còn làm thêm."]],
errs:[
 {"bad": "他而一句话因生气。", "good": "他因一句话而生气。", "why": "因 trước, 而 sau."},
 {"bad": "之际值此新年。", "good": "值此新年之际", "why": "Cụm đúng thứ tự."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "值此公司成立十周年＿，感谢各位的支持。", "vi": "Nhân kỷ niệm 10 năm…", "o": ["之余", "以来看", "之际"], "a": 2, "why": "值此…之际."}, {"q": "忙碌之＿，别忘了休息。", "vi": "Bận rộn cũng đừng quên nghỉ.", "o": ["余", "际", "一"], "a": 0, "why": "之余."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["工作之余，", "他", "喜欢", "画画儿"], "a": "工作之余，他喜欢画画儿。", "vi": "Ngoài giờ làm, anh ấy thích vẽ."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy giận vì một câu nói (dùng 因……而……).", "a": "他因一句话而生气。"}]}],
rel:["新6.15", "新4.35", "新5.21"]
};
