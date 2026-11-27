// Bài ngữ pháp 【新6.46】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.46", title:"目的复句：……，以便……", vi:"…，以便… — … để tiện …", tag:"句子的类型 · 复句",
goals:[
 "Nêu mục đích trang trọng bằng <b>以便</b>.",
 "So với 好 (khẩu ngữ) và 为的是."],
rules:[
 {"t": "Hành động，以便 + mục đích", "fx": [["hành động", ""], ["，", ""], ["以便", null], ["mục đích", ""]], "mean": "Để thuận tiện cho …", "ex": [["{1|请留下电话}，{2|以便}{3|我们联系您}。", "Qǐng liúxià diànhuà, yǐbiàn wǒmen liánxì nín.", "Xin để lại số để chúng tôi liên hệ."], ["{1|他提前到了会场}，{2|以便}{3|做好准备}。", "Tā tíqián dàole huìchǎng, yǐbiàn zuòhǎo zhǔnbèi.", "Anh ấy đến sớm để chuẩn bị."]]}],
cmp:[
 {"vn": "Ghi lại để sau tra cứu.", "zh": "请记下来，[以便]以后查找。", "py": "Qǐng jì xialai, yǐbiàn yǐhòu cházhǎo.", "ok": true, "why": "以便 đứng đầu vế mục đích."}],
ex:[
 ["请早点儿通知大家，[以便]安排时间。", "Qǐng zǎo diǎnr tōngzhī dàjiā, yǐbiàn ānpái shíjiān.", "Báo sớm để mọi người xếp lịch."],
 ["他每天写日记，[以便]提高汉语水平。", "Tā měi tiān xiě rìjì, yǐbiàn tígāo Hànyǔ shuǐpíng.", "Ngày nào anh ấy cũng viết nhật ký để nâng tiếng Trung."]],
errs:[
 {"bad": "以便我们联系您，请留下电话。", "good": "请留下电话，以便我们联系您。", "why": "以便 ở vế sau."},
 {"bad": "请留下电话，以便不联系。", "good": "请留下电话，以免联系不上。", "why": "Muốn tránh điều xấu dùng 以免."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "请写清楚地址，＿我们寄给您。", "vi": "Ghi rõ địa chỉ để chúng tôi gửi.", "o": ["以免", "不料", "以便"], "a": 2, "why": "Mục đích thuận lợi."}, {"q": "“以便” thường dùng trong:", "vi": "Chọn văn phong.", "o": ["nói đùa với trẻ con", "văn viết, thông báo"], "a": 1, "why": "Trang trọng."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "提前到了", "会场，", "以便", "做好准备"], "a": "他提前到了会场，以便做好准备。", "vi": "Anh ấy đến sớm để chuẩn bị."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Xin để lại số để chúng tôi liên hệ (dùng 以便).", "a": "请留下电话，以便我们联系您。 / 请留下您的电话，以便我们联系您。"}]}],
rel:["新4.63", "新5.40", "三72"]
};
