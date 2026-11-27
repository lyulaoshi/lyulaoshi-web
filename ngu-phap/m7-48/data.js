// Bài ngữ pháp 【新7.48】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.48", title:"条件复句：无论……与否，都……；凡……（者），均（可）……", vi:"Dù … hay không đều…; hễ ai… đều được…", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>无论……与否，都……</b>.",
 "Đọc và viết thông báo với <b>凡……者，均可……</b>."],
rules:[
 {"t": "无论 + X + 与否，都 + V", "fx": [["无论", null], ["X", ""], ["与否", null], ["，", ""], ["都", null], ["V", ""]], "mean": "Dù X hay không đều.", "ex": [["{1|无论}{2|成功}{3|与否}，我们{4|都}{5|要坚持}。", "Wúlùn chénggōng yǔ fǒu, wǒmen dōu yào jiānchí.", "Dù thành công hay không ta đều phải kiên trì."]]},
 {"t": "凡 + điều kiện + 者，均可 + V", "fx": [["凡", null], ["điều kiện", ""], ["者", null], ["，", ""], ["均可", null], ["V", ""]], "mean": "Ai … đều được.", "ex": [["{1|凡}{2|年满十八岁}{3|者}，{4|均可}{5|报名}。", "Fán niánmǎn shíbā suì zhě, jūn kě bàomíng.", "Ai đủ 18 tuổi đều được đăng ký."]]}],
cmp:[
 {"vn": "Dù đồng ý hay không", "zh": "无论同意[与否]", "py": "wúlùn tóngyì yǔ fǒu", "ok": true, "why": "与否 = hay không."}],
ex:[
 ["[无论]天气好坏[与否]，比赛照常。", "Wúlùn tiānqì hǎo huài yǔ fǒu, bǐsài zhàocháng.", "Dù trời đẹp xấu, trận đấu vẫn diễn ra."],
 ["[凡]本店会员，[均可]享受优惠。", "Fán běn diàn huìyuán, jūn kě xiǎngshòu yōuhuì.", "Mọi hội viên của quán đều được ưu đãi."]],
errs:[
 {"bad": "无论成功不与否，都坚持。", "good": "无论成功与否，都要坚持。", "why": "与否 đã gồm “không”."},
 {"bad": "凡者年满十八岁，均报名可。", "good": "凡年满十八岁者，均可报名。", "why": "者 đứng cuối cụm điều kiện."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "无论他来＿，会议都按时开始。", "vi": "Dù anh ấy đến hay không…", "o": ["与其", "否则", "与否"], "a": 2, "why": "与否."}, {"q": "凡购物满一百元者，＿可抽奖。", "vi": "Ai mua đủ 100 tệ đều được bốc thăm.", "o": ["才", "均", "却"], "a": 1, "why": "均可."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["无论", "成功与否，", "我们", "都要坚持"], "a": "无论成功与否，我们都要坚持。", "vi": "Dù thành công hay không ta đều phải kiên trì."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Ai đủ 18 tuổi đều được đăng ký (dùng 凡……者).", "a": "凡年满十八岁者，均可报名。"}]}],
rel:["新6.43", "新4.61", "新7.11"]
};
