// Bài ngữ pháp 【新6.04】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.04", title:"名量词：串、滴、枝、扇、卷", vi:"Lượng từ 串, 滴, 枝, 扇, 卷", tag:"词类 · 量词",
goals:[
 "Dùng <b>串、滴、枝</b> cho chùm, giọt, cành.",
 "Dùng <b>扇、卷</b> cho cánh cửa, cuộn, quyển."],
intro:"卷 có hai cách đọc: <b>juǎn</b> (cuộn tròn) và <b>juàn</b> (quyển, tập trong bộ sách cổ).",
rules:[
 {"t": "Số + 串 / 滴 / 枝 + N", "fx": [["Số", ""], ["串 / 滴 / 枝", null], ["Danh từ", ""]], "mean": "串 chùm, xâu · 滴 giọt · 枝 cành, cây bút.", "ex": [["桌子上放着{1|一}{2|串}{3|钥匙}。", "Zhuōzi shang fàngzhe yí chuàn yàoshi.", "Trên bàn có một chùm chìa khóa."], ["{1|一}{2|滴}{3|水}也不能浪费。", "Yì dī shuǐ yě bù néng làngfèi.", "Một giọt nước cũng không được phí."], ["他送给我{1|一}{2|枝}{3|玫瑰}。", "Tā sòng gěi wǒ yì zhī méigui.", "Anh ấy tặng tôi một cành hồng."]]},
 {"t": "Số + 扇 / 卷 (juǎn / juàn) + N", "fx": [["Số", ""], ["扇 / 卷", null], ["Danh từ", ""]], "mean": "扇 cánh cửa · 卷 juǎn cuộn · 卷 juàn quyển.", "ex": [["房间里有{1|两}{2|扇}{3|窗户}。", "Fángjiān li yǒu liǎng shàn chuānghu.", "Phòng có hai cánh cửa sổ."], ["请给我{1|一}{2|卷}{3|胶带}。", "Qǐng gěi wǒ yì juǎn jiāodài.", "Cho tôi một cuộn băng dính."], ["这部书一共{1|十}{2|卷}。", "Zhè bù shū yígòng shí juàn.", "Bộ sách này gồm mười quyển."]]}],
cmp:[
 {"vn": "Một xâu kẹo hồ lô", "zh": "一[串]糖葫芦", "py": "yí chuàn tánghúlu", "ok": true, "why": "Vật xâu thành chuỗi dùng 串."}],
ex:[
 ["她脸上流下了几[滴]眼泪。", "Tā liǎn shang liúxiàle jǐ dī yǎnlèi.", "Trên mặt cô ấy lăn mấy giọt nước mắt."],
 ["请随手关上那[扇]门。", "Qǐng suíshǒu guānshang nà shàn mén.", "Tiện tay đóng cánh cửa đó lại."]],
errs:[
 {"bad": "一个钥匙串", "good": "一串钥匙", "why": "Lượng từ đứng trước danh từ."},
 {"bad": "两个窗户扇", "good": "两扇窗户", "why": "Cửa sổ dùng 扇."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "地上有几＿血。", "vi": "Dưới đất có mấy giọt máu.", "o": ["串", "滴", "扇"], "a": 1, "why": "Giọt → 滴."}, {"q": "他买了一＿葡萄。", "vi": "Anh ấy mua một chùm nho.", "o": ["卷", "串", "枝"], "a": 1, "why": "Chùm → 串."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["房间里", "有", "两扇", "窗户"], "a": "房间里有两扇窗户。", "vi": "Phòng có hai cánh cửa sổ."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Một giọt nước cũng không được phí.", "a": "一滴水也不能浪费。 / 一滴水都不能浪费。"}]}],
rel:["新5.03", "新4.03", "三09"]
};
