// Bài ngữ pháp 【新7.17】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.17", title:"方式副词（3）：强行、任意、日趋、如期、擅自、私自、特此、瞎", vi:"强行, 任意, 日趋, 如期, 擅自, 私自, 特此, 瞎", tag:"词类 · 副词",
goals:[
 "Dùng phó từ hay gặp trong thông báo: <b>擅自, 私自, 特此, 如期</b>.",
 "Dùng <b>强行</b> (cưỡng ép), <b>任意</b> (tùy ý), <b>日趋</b> (ngày càng), <b>瞎</b> (bừa)."],
rules:[
 {"t": "擅自 / 私自 / 任意 / 强行 + V", "fx": [["擅自 / 私自 / 任意 / 强行", null], ["V", ""]], "mean": "Tự tiện · lén tự ý · tùy tiện · cưỡng ép.", "ex": [["不得{1|擅自}{2|离开岗位}。", "Bùdé shànzì líkāi gǎngwèi.", "Không được tự tiện rời vị trí."], ["他{1|私自}{2|用了公司的钱}。", "Tā sīzì yòngle gōngsī de qián.", "Anh ta lén dùng tiền công ty."], ["请勿{1|任意}{2|丢弃垃圾}。", "Qǐng wù rènyì diūqì lājī.", "Xin đừng vứt rác bừa bãi."], ["他们{1|强行}{2|进入房间}。", "Tāmen qiángxíng jìnrù fángjiān.", "Họ xông vào phòng."]]},
 {"t": "日趋 / 如期 + V / Adj", "fx": [["日趋 / 如期", null], ["V / Adj", ""]], "mean": "日趋 ngày một · 如期 đúng hạn.", "ex": [["市场{1|日趋}{2|稳定}。", "Shìchǎng rìqū wěndìng.", "Thị trường ngày một ổn định."], ["工程{1|如期}{2|完成}。", "Gōngchéng rúqī wánchéng.", "Công trình hoàn thành đúng hạn."]]},
 {"t": "特此 / 瞎 + V", "fx": [["特此 / 瞎", null], ["V", ""]], "mean": "特此 (công văn) nay xin · 瞎 bừa, vô ích.", "ex": [["{1|特此}{2|通知}。", "Tècǐ tōngzhī.", "Nay thông báo."], ["你别{1|瞎}{2|猜}。", "Nǐ bié xiā cāi.", "Cậu đừng đoán mò."]]}],
cmp:[
 {"vn": "Đừng nói bậy.", "zh": "别[瞎]说。", "py": "Bié xiā shuō.", "ok": true, "why": "瞎 = bừa."}],
ex:[
 ["未经允许，不得[擅自]拍照。", "Wèi jīng yǔnxǔ, bùdé shànzì pāizhào.", "Chưa được phép không tự ý chụp ảnh."],
 ["比赛[如期]举行。", "Bǐsài rúqī jǔxíng.", "Trận đấu diễn ra đúng lịch."]],
errs:[
 {"bad": "他如期很早来。", "good": "他很早就来了。", "why": "如期 = đúng thời hạn đã định."},
 {"bad": "通知特此。", "good": "特此通知。", "why": "特此 đứng trước động từ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "请不要＿改动合同内容。", "vi": "Xin đừng tự ý sửa hợp đồng.", "o": ["如期", "日趋", "擅自"], "a": 2, "why": "Tự tiện."}, {"q": "人们的环保意识＿提高。", "vi": "Ý thức môi trường ngày một cao.", "o": ["日趋", "私自", "强行"], "a": 0, "why": "Ngày một."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["工程", "如期", "完成"], "a": "工程如期完成。", "vi": "Công trình hoàn thành đúng hạn."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Cậu đừng đoán mò (dùng 瞎).", "a": "你别瞎猜。 / 你不要瞎猜。"}]}],
rel:["新7.16", "新7.18", "新7.19"]
};
