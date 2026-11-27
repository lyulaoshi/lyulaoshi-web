// Bài ngữ pháp 【新7.12】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.12", title:"时间副词：姑且、即、即时、届时、尽早、就此、历来、尚", vi:"姑且, 即, 届时, 就此, 历来, 尚…", tag:"词类 · 副词",
goals:[
 "Dùng phó từ thời gian văn viết: <b>届时</b> (đến lúc đó), <b>尽早</b> (sớm nhất), <b>历来</b> (xưa nay).",
 "Dùng <b>姑且, 就此, 即, 即时, 尚</b>."],
rules:[
 {"t": "届时 / 尽早 + V", "fx": [["届时 / 尽早", null], ["V", ""]], "mean": "届时 đến lúc đó · 尽早 càng sớm càng tốt.", "ex": [["{1|届时}{2|请准时出席}。", "Jièshí qǐng zhǔnshí chūxí.", "Đến lúc đó xin dự đúng giờ."], ["请大家{1|尽早}{2|报名}。", "Qǐng dàjiā jǐnzǎo bàomíng.", "Mong mọi người đăng ký sớm."]]},
 {"t": "历来 / 尚 + V / Adj", "fx": [["历来 / 尚", null], ["V / Adj", ""]], "mean": "历来 xưa nay vẫn · 尚 còn (chưa).", "ex": [["我国{1|历来}{2|重视教育}。", "Wǒguó lìlái zhòngshì jiàoyù.", "Nước ta xưa nay coi trọng giáo dục."], ["原因{1|尚}{2|不清楚}。", "Yuányīn shàng bù qīngchu.", "Nguyên nhân còn chưa rõ."]]},
 {"t": "姑且 / 就此 + V", "fx": [["姑且 / 就此", null], ["V", ""]], "mean": "姑且 tạm cứ · 就此 đến đây là, nhân đó.", "ex": [["这个问题我们{1|姑且}{2|不谈}。", "Zhège wèntí wǒmen gūqiě bù tán.", "Vấn đề này ta tạm chưa bàn."], ["会议{1|就此}{2|结束}。", "Huìyì jiùcǐ jiéshù.", "Hội nghị đến đây kết thúc."]]},
 {"t": "即 / 即时 + V", "fx": [["即 / 即时", null], ["V", ""]], "mean": "即 liền, tức là · 即时 ngay lập tức.", "ex": [["招满{1|即}{2|停止报名}。", "Zhāomǎn jí tíngzhǐ bàomíng.", "Đủ người là ngừng đăng ký ngay."], ["有问题可以{1|即时}{2|反映}。", "Yǒu wèntí kěyǐ jíshí fǎnyìng.", "Có vấn đề có thể phản ánh ngay."]]}],
cmp:[
 {"vn": "Tạm cứ tin anh một lần.", "zh": "我[姑且]相信你一次。", "py": "Wǒ gūqiě xiāngxìn nǐ yí cì.", "ok": true, "why": "姑且 = tạm thời cứ."}],
ex:[
 ["大会下月举行，[届时]将邀请各国代表。", "Dàhuì xià yuè jǔxíng, jièshí jiāng yāoqǐng gè guó dàibiǎo.", "Đại hội tổ chức tháng sau, khi đó sẽ mời đại biểu các nước."],
 ["从此，两人[就此]分手。", "Cóngcǐ, liǎng rén jiùcǐ fēnshǒu.", "Từ đó hai người chia tay."]],
errs:[
 {"bad": "昨天届时他没来。", "good": "昨天他没来。", "why": "届时 nói thời điểm trong tương lai."},
 {"bad": "他历来昨天迟到。", "good": "他昨天迟到了。", "why": "历来 nói việc xưa nay."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "展览下周开幕，＿欢迎光临。", "vi": "Triển lãm khai mạc tuần sau, khi đó mời ghé.", "o": ["历来", "届时", "尚且是"], "a": 1, "why": "Đến lúc đó."}, {"q": "这件事的结果＿未公布。", "vi": "Kết quả còn chưa công bố.", "o": ["就此", "尚", "姑且地"], "a": 1, "why": "尚未."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我国", "历来", "重视", "教育"], "a": "我国历来重视教育。", "vi": "Nước ta xưa nay coi trọng giáo dục."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mong mọi người đăng ký sớm (dùng 尽早).", "a": "请大家尽早报名。"}]}],
rel:["新7.13", "新5.06", "新6.08"]
};
