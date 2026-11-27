// Bài ngữ pháp 【新7.11】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.11", title:"范围副词：大体、概、皆、尽、均、通通、统统、唯、唯独、唯有、无非、一概", vi:"Phó từ phạm vi 皆, 均, 唯, 无非, 一概…", tag:"词类 · 副词",
goals:[
 "Dùng <b>皆、均、尽、统统、通通</b> = đều, tất cả.",
 "Dùng <b>唯、唯独、唯有</b> (chỉ riêng), <b>无非</b> (chẳng qua), <b>一概</b> (nhất loạt), <b>大体、概</b> (đại thể)."],
rules:[
 {"t": "S + 皆 / 均 / 尽 + V / Adj", "fx": [["S", ""], ["皆 / 均 / 尽", null], ["V / Adj", ""]], "mean": "Đều, hết (văn viết).", "ex": [["{1|此事}{2|人人皆知}。", "Cǐ shì rénrén jiē zhī.", "Việc này ai cũng biết."], ["{1|各项指标}{2|均}{3|已达标}。", "Gè xiàng zhǐbiāo jūn yǐ dábiāo.", "Các chỉ tiêu đều đã đạt."], ["眼前{2|尽}{3|是高楼}。", "Yǎnqián jìn shì gāolóu.", "Trước mắt toàn nhà cao tầng."]]},
 {"t": "统统 / 通通 / 一概 + V", "fx": [["统统 / 通通 / 一概", null], ["V", ""]], "mean": "Tất tật · nhất loạt không phân biệt.", "ex": [["旧东西{1|统统}{2|扔掉了}。", "Jiù dōngxi tǒngtǒng rēngdiào le.", "Đồ cũ vứt hết rồi."], ["把垃圾{1|通通}{2|清走}。", "Bǎ lājī tōngtōng qīngzǒu.", "Dọn sạch hết rác."], ["对这类要求{1|一概}{2|拒绝}。", "Duì zhè lèi yāoqiú yígài jùjué.", "Loại yêu cầu này từ chối hết."]]},
 {"t": "唯 / 唯独 / 唯有 + đối tượng", "fx": [["唯 / 唯独 / 唯有", null], ["đối tượng", ""]], "mean": "Chỉ riêng.", "ex": [["大家都来了，{1|唯独}{2|他没来}。", "Dàjiā dōu lái le, wéidú tā méi lái.", "Ai cũng đến, riêng anh ấy không."], ["{1|唯有}{2|努力}，才能成功。", "Wéiyǒu nǔlì, cái néng chénggōng.", "Chỉ có nỗ lực mới thành công."], ["他别无所求，{1|唯}{2|愿家人平安}。", "Tā bié wú suǒ qiú, wéi yuàn jiārén píng'ān.", "Ông không mong gì, chỉ mong gia đình bình an."]]},
 {"t": "无非 / 大体 / 概 + V", "fx": [["无非 / 大体 / 概", null], ["V", ""]], "mean": "无非 chẳng qua · 大体 đại thể · 概 nhất loạt (thông báo).", "ex": [["他{1|无非}{2|是想多赚点儿钱}。", "Tā wúfēi shì xiǎng duō zhuàn diǎnr qián.", "Anh ta chẳng qua muốn kiếm thêm tiền."], ["两种方法{1|大体}{2|相同}。", "Liǎng zhǒng fāngfǎ dàtǐ xiāngtóng.", "Hai cách đại thể giống nhau."], ["货物售出，{1|概}{2|不退换}。", "Huòwù shòuchū, gài bú tuìhuàn.", "Hàng đã bán không đổi trả."]]}],
cmp:[
 {"vn": "Hàng mua rồi miễn đổi trả.", "zh": "[概]不退换", "py": "gài bú tuìhuàn", "ok": true, "why": "Câu thông báo cố định."}],
ex:[
 ["这些问题[均]与管理有关。", "Zhèxiē wèntí jūn yǔ guǎnlǐ yǒuguān.", "Các vấn đề này đều liên quan quản lý."],
 ["别的我都喜欢，[唯独]不喜欢香菜。", "Bié de wǒ dōu xǐhuan, wéidú bù xǐhuan xiāngcài.", "Gì tôi cũng thích, trừ rau mùi."]],
errs:[
 {"bad": "皆人人知此事。", "good": "此事人人皆知。", "why": "皆 đứng trước động từ."},
 {"bad": "无非他想赚钱。", "good": "他无非想赚钱。", "why": "无非 đứng sau chủ ngữ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他说来说去，＿是不想帮忙。", "vi": "Nói gì thì cũng chỉ là không muốn giúp.", "o": ["唯独", "无非", "一概"], "a": 1, "why": "Chẳng qua."}, {"q": "与本案无关的问题，＿不回答。", "vi": "Câu hỏi ngoài vụ án nhất loạt không trả lời.", "o": ["大体", "唯有", "一概"], "a": 2, "why": "Nhất loạt."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["大家", "都来了，", "唯独", "他", "没来"], "a": "大家都来了，唯独他没来。", "vi": "Ai cũng đến, riêng anh ấy không."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Hai cách đại thể giống nhau (dùng 大体).", "a": "两种方法大体相同。 / 这两种方法大体相同。"}]}],
rel:["新6.07", "三13", "一10"]
};
