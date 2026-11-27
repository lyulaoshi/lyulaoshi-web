// Bài ngữ pháp 【新6.10】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.10", title:"方式副词：不禁、赶忙、特地、特意、偷偷", vi:"不禁, 赶忙, 特地, 偷偷 — bất giác, vội, đặc biệt, lén", tag:"词类 · 副词",
goals:[
 "Dùng <b>不禁</b> (không kìm được), <b>赶忙</b> (vội vàng).",
 "Dùng <b>特地 / 特意</b> (cất công, cố ý vì ai) và <b>偷偷</b> (lén)."],
rules:[
 {"t": "不禁 / 赶忙 + V", "fx": [["不禁 / 赶忙", null], ["V", ""]], "mean": "不禁 bất giác · 赶忙 vội.", "ex": [["看到这里，我{1|不禁}{2|笑了起来}。", "Kàndào zhèlǐ, wǒ bùjīn xiàole qilai.", "Đọc đến đây tôi bất giác bật cười."], ["见老人上车，他{1|赶忙}{2|让座}。", "Jiàn lǎorén shàng chē, tā gǎnmáng ràng zuò.", "Thấy cụ già lên xe, anh ấy vội nhường chỗ."]]},
 {"t": "特地 / 特意 + V", "fx": [["特地 / 特意", null], ["V", ""]], "mean": "Cố ý, cất công làm riêng.", "ex": [["他{1|特地}{2|从上海赶来}。", "Tā tèdì cóng Shànghǎi gǎnlái.", "Anh ấy cất công từ Thượng Hải đến."], ["这是我{1|特意}{2|为你做的}。", "Zhè shì wǒ tèyì wèi nǐ zuò de.", "Đây là tôi làm riêng cho bạn."]]},
 {"t": "偷偷 (地) + V", "fx": [["偷偷", null], ["V", ""]], "mean": "Lén lút, thầm.", "ex": [["他{1|偷偷}地{2|看了我一眼}。", "Tā tōutōu de kànle wǒ yì yǎn.", "Anh ấy lén nhìn tôi một cái."]]}],
cmp:[
 {"vn": "Tôi không nhịn được rơi nước mắt.", "zh": "我[不禁]流下了眼泪。", "py": "Wǒ bùjīn liúxiàle yǎnlèi.", "ok": true, "why": "Phản ứng tự nhiên → 不禁."}],
ex:[
 ["听到敲门声，她[赶忙]去开门。", "Tīngdào qiāo mén shēng, tā gǎnmáng qù kāi mén.", "Nghe gõ cửa, cô ấy vội ra mở."],
 ["孩子[偷偷]地玩儿手机。", "Háizi tōutōu de wánr shǒujī.", "Đứa bé lén chơi điện thoại."]],
errs:[
 {"bad": "请你赶忙来。", "good": "请你赶快来。", "why": "赶忙 dùng để kể, không dùng để sai bảo."},
 {"bad": "我不禁地决定去。", "good": "我决定去。", "why": "不禁 cho phản ứng không tự chủ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "今天我是＿来看你的。", "vi": "Hôm nay tôi cất công đến thăm bạn.", "o": ["特地", "不禁", "赶忙"], "a": 0, "why": "特地 = cố ý đến."}, {"q": "听了他的话，大家都＿笑了。", "vi": "Nghe xong ai cũng bất giác cười.", "o": ["特意", "偷偷地都", "不禁"], "a": 2, "why": "Không kìm được."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "特地", "从上海", "赶来"], "a": "他特地从上海赶来。", "vi": "Anh ấy cất công từ Thượng Hải đến."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Đứa bé lén chơi điện thoại.", "a": "孩子偷偷地玩儿手机。 / 孩子偷偷玩儿手机。 / 孩子偷偷地玩手机。"}]}],
rel:["新5.06", "三17", "新4.09"]
};
