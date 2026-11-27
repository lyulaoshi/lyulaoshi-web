// Bài ngữ pháp 【新7.25】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.25", title:"介词：打、当着、就", vi:"打 (từ), 当着 (trước mặt), 就 (về)", tag:"词类 · 介词",
goals:[
 "Dùng <b>打</b> = 从 trong khẩu ngữ.",
 "Dùng <b>当着……的面</b>: trước mặt ai.",
 "Dùng <b>就</b> nêu vấn đề bàn tới."],
rules:[
 {"t": "打 + điểm đầu + V", "fx": [["打", null], ["điểm đầu", ""], ["V", ""]], "mean": "Từ (khẩu ngữ).", "ex": [["你{1|打}{2|哪儿}{3|来}？", "Nǐ dǎ nǎr lái?", "Bạn từ đâu đến?"]]},
 {"t": "当着 + người (+ 的面) + V", "fx": [["当着", null], ["người", ""], ["(的面)", ""], ["V", ""]], "mean": "Trước mặt.", "ex": [["别{1|当着}{2|孩子}{3|的面}{4|吵架}。", "Bié dāngzhe háizi de miàn chǎojià.", "Đừng cãi nhau trước mặt con."]]},
 {"t": "就 + vấn đề + 进行 / 谈", "fx": [["就", null], ["vấn đề", ""], ["V (讨论、交换意见)", ""]], "mean": "Về (trang trọng).", "ex": [["双方{1|就}{2|经济合作}{3|交换了意见}。", "Shuāngfāng jiù jīngjì hézuò jiāohuànle yìjiàn.", "Hai bên trao đổi ý kiến về hợp tác kinh tế."]]}],
cmp:[
 {"vn": "Từ nhỏ tôi đã thích.", "zh": "我[打]小就喜欢。", "py": "Wǒ dǎxiǎo jiù xǐhuan.", "ok": true, "why": "打小 = 从小."}],
ex:[
 ["[打]今天起，我早睡。", "Dǎ jīntiān qǐ, wǒ zǎo shuì.", "Từ hôm nay tôi ngủ sớm."],
 ["他[当着]大家把礼物打开了。", "Tā dāngzhe dàjiā bǎ lǐwù dǎkāi le.", "Anh ấy mở quà trước mặt mọi người."]],
errs:[
 {"bad": "别当孩子面着吵架。", "good": "别当着孩子的面吵架。", "why": "当着……的面."},
 {"bad": "就问题这个讨论。", "good": "就这个问题进行讨论。", "why": "就 + vấn đề + V."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "大会＿环保问题进行了讨论。", "vi": "Đại hội thảo luận về môi trường.", "o": ["就", "打", "当着"], "a": 0, "why": "Nêu vấn đề."}, {"q": "你＿哪儿听说的？", "vi": "Bạn nghe ở đâu ra?", "o": ["就", "打", "当着面"], "a": 1, "why": "打 = 从."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["别", "当着", "孩子的面", "吵架"], "a": "别当着孩子的面吵架。", "vi": "Đừng cãi nhau trước mặt con."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Từ hôm nay tôi ngủ sớm (dùng 打).", "a": "打今天起，我早睡。 / 打今天起我早点儿睡。"}]}],
rel:["新4.13", "新5.15", "新7.26"]
};
