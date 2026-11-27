// Bài ngữ pháp 【新7.13】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.13", title:"时间副词：随即、向来、一经、暂且、早日", vi:"随即, 向来, 一经, 暂且, 早日", tag:"词类 · 副词",
goals:[
 "Dùng <b>随即</b> (liền sau đó), <b>一经</b> (một khi đã).",
 "Dùng <b>向来</b> (xưa nay), <b>暂且</b> (tạm), <b>早日</b> (sớm ngày)."],
rules:[
 {"t": "随即 / 向来 + V", "fx": [["随即 / 向来", null], ["V / Adj", ""]], "mean": "随即 ngay sau đó · 向来 từ trước đến nay.", "ex": [["他放下电话，{1|随即}{2|出了门}。", "Tā fàngxià diànhuà, suíjí chūle mén.", "Anh ấy đặt máy rồi ra ngoài ngay."], ["她{1|向来}{2|很细心}。", "Tā xiànglái hěn xìxīn.", "Cô ấy xưa nay rất cẩn thận."]]},
 {"t": "一经 + V，即 / 便 …", "fx": [["一经", null], ["V", ""], ["，", ""], ["kết quả", ""]], "mean": "Một khi đã … (văn viết).", "ex": [["产品{1|一经}{2|推出}，{3|便受到欢迎}。", "Chǎnpǐn yìjīng tuīchū, biàn shòudào huānyíng.", "Sản phẩm vừa tung ra liền được đón nhận."]]},
 {"t": "暂且 / 早日 + V", "fx": [["暂且 / 早日", null], ["V", ""]], "mean": "暂且 tạm thời cứ · 早日 mong sớm.", "ex": [["这件事{1|暂且}{2|放一放}。", "Zhè jiàn shì zànqiě fàng yi fàng.", "Việc này tạm gác lại."], ["祝你{1|早日}{2|康复}！", "Zhù nǐ zǎorì kāngfù!", "Chúc bạn sớm bình phục!"]]}],
cmp:[
 {"vn": "Chúc sớm thành công.", "zh": "祝你[早日]成功。", "py": "Zhù nǐ zǎorì chénggōng.", "ok": true, "why": "早日 dùng trong lời chúc."}],
ex:[
 ["灯灭了，[随即]又亮了。", "Dēng miè le, suíjí yòu liàng le.", "Đèn tắt rồi sáng lại ngay."],
 ["合同[一经]签字，就具有法律效力。", "Hétong yìjīng qiānzì, jiù jùyǒu fǎlǜ xiàolì.", "Hợp đồng một khi ký là có hiệu lực pháp lý."]],
errs:[
 {"bad": "祝你尽早康复了。", "good": "祝你早日康复。", "why": "Lời chúc dùng 早日, không thêm 了."},
 {"bad": "一经他昨天来。", "good": "他昨天一来就……", "why": "一经 đi với việc làm điều kiện, không dùng để kể thời điểm."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他＿不喝酒，今天怎么喝了？", "vi": "Anh ấy xưa nay không uống, sao hôm nay uống?", "o": ["向来", "随即", "早日"], "a": 0, "why": "Thói quen."}, {"q": "消息＿发布，立刻引起关注。", "vi": "Tin vừa công bố liền được chú ý.", "o": ["暂且", "一经", "向来都"], "a": 1, "why": "一经."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["祝", "你", "早日", "康复"], "a": "祝你早日康复。", "vi": "Chúc bạn sớm bình phục."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Việc này tạm gác lại (dùng 暂且).", "a": "这件事暂且放一放。 / 这件事暂且放一下。"}]}],
rel:["新7.12", "新5.34", "新6.08"]
};
