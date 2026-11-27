// Bài ngữ pháp 【新7.53】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.53", title:"目的复句：为（了）……起见，……；……，以……", vi:"Để cho …, …; … nhằm …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>为……起见</b> khi nêu biện pháp thận trọng.",
 "Dùng <b>……，以……</b> trong văn viết."],
rules:[
 {"t": "为(了) + mục đích + 起见，biện pháp", "fx": [["为(了)", null], ["mục đích", ""], ["起见", null], ["，", ""], ["biện pháp", ""]], "mean": "Để đảm bảo …", "ex": [["{1|为了}{2|安全}{3|起见}，{4|请系好安全带}。", "Wèile ānquán qǐjiàn, qǐng jìhǎo ānquándài.", "Để an toàn, xin thắt dây an toàn."]]},
 {"t": "Hành động，以 + mục đích", "fx": [["hành động", ""], ["，", ""], ["以", null], ["mục đích", ""]], "mean": "Nhằm.", "ex": [["{1|公司降低价格}，{2|以}{3|吸引顾客}。", "Gōngsī jiàngdī jiàgé, yǐ xīyǐn gùkè.", "Công ty hạ giá nhằm thu hút khách."]]}],
cmp:[
 {"vn": "Cho chắc chắn, kiểm tra lại.", "zh": "[为]保险[起见]，再检查一遍。", "py": "Wèi bǎoxiǎn qǐjiàn, zài jiǎnchá yí biàn.", "ok": true, "why": "起见 đặt sau mục đích."}],
ex:[
 ["[为]慎重[起见]，我们决定推迟发布。", "Wèi shènzhòng qǐjiàn, wǒmen juédìng tuīchí fābù.", "Để thận trọng, chúng tôi quyết định lùi ngày công bố."],
 ["他努力工作，[以]改善家庭生活。", "Tā nǔlì gōngzuò, yǐ gǎishàn jiātíng shēnghuó.", "Anh ấy chăm làm nhằm cải thiện đời sống gia đình."]],
errs:[
 {"bad": "起见为安全，请系好安全带。", "good": "为安全起见，请系好安全带。", "why": "为…起见."},
 {"bad": "以吸引顾客，公司降价。", "good": "公司降价，以吸引顾客。", "why": "以 ở vế sau."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "为方便＿，请提前预订。", "vi": "Để tiện, xin đặt trước.", "o": ["起来", "以来", "起见"], "a": 2, "why": "起见."}, {"q": "加强管理，＿提高质量。", "vi": "Tăng quản lý nhằm nâng chất lượng.", "o": ["故", "以", "若"], "a": 1, "why": "以 chỉ mục đích."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["公司降低价格，", "以", "吸引顾客"], "a": "公司降低价格，以吸引顾客。", "vi": "Công ty hạ giá nhằm thu hút khách."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Để an toàn, xin thắt dây an toàn (dùng 起见).", "a": "为了安全起见，请系好安全带。 / 为安全起见，请系好安全带。"}]}],
rel:["新6.46", "新5.40", "新4.63"]
};
