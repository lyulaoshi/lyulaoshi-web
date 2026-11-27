// Bài ngữ pháp 【新6.08】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.08", title:"时间副词：一时、不时、仍旧、依旧、一向", vi:"一时, 不时, 仍旧, 依旧, 一向", tag:"词类 · 副词",
goals:[
 "Phân biệt <b>一时</b> (nhất thời) và <b>不时</b> (thỉnh thoảng).",
 "Dùng <b>仍旧、依旧</b> (vẫn như cũ) và <b>一向</b> (trước nay)."],
rules:[
 {"t": "一时 / 不时 + V", "fx": [["一时 / 不时", null], ["V", ""]], "mean": "一时 trong chốc lát · 不时 chốc chốc lại.", "ex": [["他的名字我{1|一时}{2|想不起来}。", "Tā de míngzi wǒ yìshí xiǎng bu qǐlái.", "Nhất thời tôi không nhớ ra tên anh ấy."], ["她{1|不时}{2|看看手表}。", "Tā bùshí kànkan shǒubiǎo.", "Cô ấy chốc chốc lại xem đồng hồ."]]},
 {"t": "仍旧 / 依旧 + V / Adj", "fx": [["仍旧 / 依旧", null], ["V / Adj", ""]], "mean": "Vẫn như trước.", "ex": [["十年过去了，他{1|仍旧}{2|住在这儿}。", "Shí nián guòqu le, tā réngjiù zhù zài zhèr.", "Mười năm rồi, anh ấy vẫn ở đây."], ["风景{1|依旧}{2|美丽}。", "Fēngjǐng yījiù měilì.", "Phong cảnh vẫn đẹp như xưa."]]},
 {"t": "S + 一向 + V / Adj", "fx": [["S", ""], ["一向", null], ["V / Adj", ""]], "mean": "Trước nay luôn.", "ex": [["{1|他}{2|一向}{3|很守时}。", "Tā yíxiàng hěn shǒushí.", "Anh ấy trước nay luôn đúng giờ."]]}],
cmp:[
 {"vn": "Chị ấy xưa nay không thích náo nhiệt.", "zh": "她[一向]不喜欢热闹。", "py": "Tā yíxiàng bù xǐhuan rènao.", "ok": true, "why": "一向 nói thói quen từ trước đến nay."}],
ex:[
 ["远处[不时]传来鸟叫声。", "Yuǎnchù bùshí chuánlái niǎo jiào shēng.", "Xa xa chốc chốc vọng tiếng chim."],
 ["问题[依旧]没有解决。", "Wèntí yījiù méiyǒu jiějué.", "Vấn đề vẫn chưa giải quyết."]],
errs:[
 {"bad": "他一向昨天迟到了。", "good": "他昨天迟到了。", "why": "一向 không dùng cho một lần cụ thể."},
 {"bad": "我不时每天去。", "good": "我每天去。", "why": "不时 (thỉnh thoảng) không đi với 每天."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他＿工作认真，大家都很放心。", "vi": "Anh ấy trước nay làm việc nghiêm túc.", "o": ["一时", "一向", "不时"], "a": 1, "why": "Trước nay."}, {"q": "雨停了，天＿很阴。", "vi": "Mưa tạnh, trời vẫn âm u.", "o": ["一向地", "不时", "仍旧"], "a": 2, "why": "Vẫn."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["她", "不时", "看看", "手表"], "a": "她不时看看手表。", "vi": "Cô ấy chốc chốc lại xem đồng hồ."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mười năm rồi, anh ấy vẫn sống ở đây (dùng 仍旧).", "a": "十年过去了，他仍旧住在这儿。 / 十年过去了，他仍旧住在这里。"}]}],
rel:["新5.06", "三14", "二15"]
};
