// Bài ngữ pháp 【新7.57】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.57", title:"语段：话题延伸、话题转换、承前省略、蒙后省略", vi:"Đoạn văn — mở rộng, chuyển đề tài, lược chủ ngữ", tag:"语段 · 句群",
goals:[
 "Mở rộng đề tài và <b>chuyển đề tài</b> mạch lạc.",
 "Hiểu <b>承前省略</b> (lược vì đã nói) và <b>蒙后省略</b> (lược vì sắp nói)."],
intro:"Tiếng Trung lược chủ ngữ rất nhiều. 承前省略: câu sau bỏ chủ ngữ đã có ở câu trước. 蒙后省略: câu trước bỏ chủ ngữ sẽ xuất hiện ở câu sau.",
rules:[
 {"t": "Mở rộng: A 有 B。B + …", "fx": [["đề tài", ""], ["thông tin mới", null], ["，", ""], ["nói tiếp về thông tin mới", ""]], "mean": "Câu sau lấy phần cuối câu trước làm đề tài.", "ex": [["{1|我家有一只猫}，{3|它很喜欢晒太阳}。", "Wǒ jiā yǒu yì zhī māo, tā hěn xǐhuan shài tàiyáng.", "Nhà tôi có con mèo, nó rất thích sưởi nắng."]]},
 {"t": "Chuyển đề tài: 说到 / 至于 + đề tài mới", "fx": [["说到 / 至于", null], ["đề tài mới", ""], ["，", ""], ["nội dung", ""]], "mean": "Báo hiệu đổi hướng.", "ex": [["{1|说到}{2|周末}，{3|我最想去爬山}。", "Shuōdào zhōumò, wǒ zuì xiǎng qù pá shān.", "Nói đến cuối tuần, tôi muốn đi leo núi nhất."]]},
 {"t": "承前省略: S + V1，(S) + V2", "fx": [["S + V1", ""], ["，", ""], ["V2 (bỏ S)", ""]], "mean": "Bỏ chủ ngữ đã nói.", "ex": [["{1|他起床以后}，{2|洗了个澡就出门了}。", "Tā qǐchuáng yǐhòu, xǐle gè zǎo jiù chūmén le.", "Anh ấy dậy, tắm rồi ra ngoài."]]},
 {"t": "蒙后省略: (S) + V1，S + V2", "fx": [["V1 (bỏ S)", ""], ["，", ""], ["S + V2", ""]], "mean": "Chủ ngữ xuất hiện sau.", "ex": [["{1|进了房间以后}，{2|他马上打开了窗户}。", "Jìnle fángjiān yǐhòu, tā mǎshàng dǎkāile chuānghu.", "Vào phòng xong, anh ấy mở ngay cửa sổ."]]}],
cmp:[
 {"vn": "Về đến nhà, mẹ đã nấu cơm xong. (ai về?)", "zh": "我回到家的时候，妈妈已经做好饭了。", "py": "Wǒ huídào jiā de shíhou, māma yǐjīng zuòhǎo fàn le.", "ok": true, "why": "Hai chủ ngữ khác nhau thì không được lược."}],
ex:[
 ["小王是我的同学，学习很好，也很热心。", "Xiǎo Wáng shì wǒ de tóngxué, xuéxí hěn hǎo, yě hěn rèxīn.", "Tiểu Vương là bạn học tôi, học giỏi, lại nhiệt tình."],
 ["这个问题先谈到这儿，下面说说费用。", "Zhège wèntí xiān tándào zhèr, xiàmian shuōshuo fèiyòng.", "Vấn đề này tạm dừng ở đây, tiếp theo nói về chi phí."]],
errs:[
 {"bad": "回到家的时候，已经睡了。（không rõ ai ngủ）", "good": "我回到家的时候，妈妈已经睡了。", "why": "Hai chủ ngữ khác nhau phải nêu rõ."},
 {"bad": "他起床以后，他洗了澡，他出门了。", "good": "他起床以后，洗了个澡就出门了。", "why": "Cùng chủ ngữ thì lược cho gọn."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "“看完电影，我们去吃饭。” Câu này thuộc loại:", "vi": "Chủ ngữ xuất hiện ở vế sau.", "o": ["蒙后省略", "承前省略", "话题转换"], "a": 0, "why": "Vế đầu bỏ 我们."}, {"q": "＿费用，我们下次再讨论。", "vi": "Còn chi phí thì lần sau bàn.", "o": ["承前", "省略", "至于"], "a": 2, "why": "Chuyển đề tài."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["说到周末，", "我最想", "去爬山"], "a": "说到周末，我最想去爬山。", "vi": "Nói đến cuối tuần, tôi muốn đi leo núi nhất."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy dậy, tắm rồi ra ngoài.", "a": "他起床以后，洗了个澡就出门了。 / 他起床后，洗了个澡就出门了。"}]}],
rel:["新7.56", "新6.14", "新3.47"]
};
