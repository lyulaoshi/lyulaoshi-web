// Bài ngữ pháp 【新7.34】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.34", title:"话语标记（3）：概括来说、简（而）言之、归根到底、无论如何、这样一来、综上所述、总的来说、总而言之", vi:"Câu tổng kết: tóm lại, xét cho cùng, dù sao đi nữa…", tag:"短语 · 话语标记",
goals:[
 "Tổng kết: <b>概括来说, 简而言之, 总的来说, 总而言之, 综上所述</b>.",
 "Dùng <b>归根到底, 无论如何, 这样一来</b>."],
rules:[
 {"t": "概括来说 / 简而言之 / 总而言之，…", "fx": [["概括来说 / 简而言之 / 总而言之", null], ["，", ""], ["kết luận", ""]], "mean": "Khái quát · nói gọn · tóm lại.", "ex": [["{1|概括来说}，{2|问题有三个}。", "Gàikuò lái shuō, wèntí yǒu sān gè.", "Khái quát lại, có ba vấn đề."], ["{1|简而言之}，{2|就是要节约}。", "Jiǎn ér yán zhī, jiùshì yào jiéyuē.", "Nói gọn là phải tiết kiệm."], ["{1|总而言之}，{2|身体最重要}。", "Zǒng ér yán zhī, shēntǐ zuì zhòngyào.", "Tóm lại, sức khỏe quan trọng nhất."]]},
 {"t": "总的来说 / 综上所述，…", "fx": [["总的来说 / 综上所述", null], ["，", ""], ["đánh giá", ""]], "mean": "Nhìn chung · tổng hợp những điều trên (văn viết).", "ex": [["{1|总的来说}，{2|这次活动很成功}。", "Zǒng de láishuō, zhè cì huódòng hěn chénggōng.", "Nhìn chung hoạt động rất thành công."], ["{1|综上所述}，{2|该方案是可行的}。", "Zōng shàng suǒ shù, gāi fāng'àn shì kěxíng de.", "Từ những điều trên, phương án khả thi."]]},
 {"t": "归根到底 / 无论如何 / 这样一来，…", "fx": [["归根到底 / 无论如何 / 这样一来", null], ["，", ""], ["ý", ""]], "mean": "Xét cho cùng · dù thế nào · như vậy thì.", "ex": [["{1|归根到底}，{2|还是钱的问题}。", "Guīgēn dàodǐ, háishi qián de wèntí.", "Xét cho cùng vẫn là chuyện tiền."], ["{1|无论如何}，{2|你要来一趟}。", "Wúlùn rúhé, nǐ yào lái yí tàng.", "Dù thế nào bạn cũng phải đến một chuyến."], ["公司搬到了郊区，{1|这样一来}，{2|上班远多了}。", "Gōngsī bāndàole jiāoqū, zhèyàng yìlái, shàngbān yuǎn duō le.", "Công ty dời ra ngoại ô, thế là đi làm xa hơn nhiều."]]}],
cmp:[
 {"vn": "Tóm lại một câu", "zh": "[一句话]", "py": "yí jù huà", "ok": true, "why": "Khẩu ngữ tương đương 总之."}],
ex:[
 ["[总的来说]，他是个好人。", "Zǒng de láishuō, tā shì gè hǎorén.", "Nhìn chung anh ấy là người tốt."],
 ["[无论如何]也不能放弃。", "Wúlùn rúhé yě bù néng fàngqì.", "Dù thế nào cũng không được bỏ."]],
errs:[
 {"bad": "总来说的，不错。", "good": "总的来说，不错。", "why": "Cụm cố định 总的来说."},
 {"bad": "无论如何，所以我去。", "good": "无论如何，我都要去。", "why": "Sau 无论如何 thường có 都 / 也."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "以上从三个方面做了分析，＿，我们建议暂缓。", "vi": "Từ các phân tích trên, đề nghị tạm hoãn.", "o": ["说真的", "综上所述", "可不是"], "a": 1, "why": "Văn viết."}, {"q": "成绩好坏，＿要看平时努不努力。", "vi": "Xét cho cùng do ngày thường có chăm không.", "o": ["这样一来就", "简直", "归根到底"], "a": 2, "why": "Cốt lõi."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["总的来说，", "这次活动", "很成功"], "a": "总的来说，这次活动很成功。", "vi": "Nhìn chung hoạt động rất thành công."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Dù thế nào bạn cũng phải đến một chuyến (dùng 无论如何).", "a": "无论如何你要来一趟。 / 无论如何，你都要来一趟。"}]}],
rel:["新5.17", "新7.33", "新4.61"]
};
