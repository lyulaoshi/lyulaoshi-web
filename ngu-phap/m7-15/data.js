// Bài ngữ pháp 【新7.15】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.15", title:"方式副词（1）：按理、按说、百般、不由得、趁机、趁早、大肆、断然", vi:"按理, 百般, 不由得, 趁机, 趁早, 大肆, 断然", tag:"词类 · 副词",
goals:[
 "Dùng <b>按理 / 按说</b> (lẽ ra), <b>不由得</b> (bất giác), <b>趁机 / 趁早</b>.",
 "Dùng <b>百般</b> (trăm cách), <b>大肆</b> (rầm rộ, xấu), <b>断然</b> (dứt khoát)."],
rules:[
 {"t": "按理 / 按说 + 应该…", "fx": [["按理 / 按说", null], ["(应该) V", ""]], "mean": "Theo lẽ thường thì …", "ex": [["{1|按理}{2|他应该到了}。", "Ànlǐ tā yīnggāi dào le.", "Lẽ ra anh ấy phải đến rồi."], ["{1|按说}{2|这个季节不会下雪}。", "Ànshuō zhège jìjié bú huì xià xuě.", "Lẽ thường mùa này không có tuyết."]]},
 {"t": "趁机 / 趁早 + V", "fx": [["趁机 / 趁早", null], ["V", ""]], "mean": "趁机 thừa cơ · 趁早 nhân lúc còn sớm.", "ex": [["小偷{1|趁机}{2|逃走了}。", "Xiǎotōu chènjī táozǒu le.", "Tên trộm thừa cơ chạy mất."], ["有病要{1|趁早}{2|治}。", "Yǒu bìng yào chènzǎo zhì.", "Có bệnh phải chữa sớm."]]},
 {"t": "百般 / 不由得 + V", "fx": [["百般 / 不由得", null], ["V", ""]], "mean": "百般 bằng mọi cách · 不由得 không kìm được.", "ex": [["奶奶对孙子{1|百般}{2|照顾}。", "Nǎinai duì sūnzi bǎibān zhàogù.", "Bà chăm cháu hết mực."], ["听到这首歌，我{1|不由得}{2|想起了家乡}。", "Tīngdào zhè shǒu gē, wǒ bùyóude xiǎngqǐle jiāxiāng.", "Nghe bài hát tôi bất giác nhớ quê."]]},
 {"t": "大肆 / 断然 + V", "fx": [["大肆 / 断然", null], ["V", ""]], "mean": "大肆 rầm rộ (nghĩa xấu) · 断然 kiên quyết.", "ex": [["有些商家{1|大肆}{2|做广告}。", "Yǒuxiē shāngjiā dàsì zuò guǎnggào.", "Một số nhà buôn quảng cáo rầm rộ."], ["他{1|断然}{2|拒绝了对方}。", "Tā duànrán jùjuéle duìfāng.", "Anh ấy kiên quyết từ chối đối phương."]]}],
cmp:[
 {"vn": "Đi sớm đi kẻo muộn.", "zh": "[趁早]走吧。", "py": "Chènzǎo zǒu ba.", "ok": true, "why": "趁早 = nhân còn sớm."}],
ex:[
 ["他[趁机]提出了自己的要求。", "Tā chènjī tíchūle zìjǐ de yāoqiú.", "Anh ta thừa dịp nêu yêu cầu."],
 ["[按说]他不会不知道。", "Ànshuō tā bú huì bù zhīdào.", "Lẽ ra anh ấy không thể không biết."]],
errs:[
 {"bad": "他大肆帮助别人。", "good": "他热心帮助别人。", "why": "大肆 mang nghĩa xấu."},
 {"bad": "我趁早昨天走了。", "good": "我昨天很早就走了。", "why": "趁早 dùng để khuyên."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿他今天应该上班，怎么没来？", "vi": "Lẽ ra hôm nay anh ấy đi làm.", "o": ["趁机", "按理", "百般"], "a": 1, "why": "Lẽ thường."}, {"q": "看到这张照片，她＿笑了。", "vi": "Thấy ảnh, cô ấy bất giác cười.", "o": ["大肆", "不由得", "断然"], "a": 1, "why": "Không kìm được."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "断然", "拒绝了", "对方"], "a": "他断然拒绝了对方。", "vi": "Anh ấy kiên quyết từ chối."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Tên trộm thừa cơ chạy mất (dùng 趁机).", "a": "小偷趁机逃走了。 / 小偷趁机跑了。"}]}],
rel:["新6.10", "新7.16", "新5.11"]
};
