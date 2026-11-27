// Bài ngữ pháp 【新7.56】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.56", title:"语段：时间顺序、空间顺序、逻辑顺序", vi:"Đoạn văn — trật tự thời gian, không gian, logic", tag:"语段 · 句群",
goals:[
 "Sắp xếp đoạn văn theo <b>thời gian</b>, <b>không gian</b> hoặc <b>logic</b>.",
 "Dùng từ nối đoạn: 起初, 随后, 最后; 东边, 往前; 首先, 因此."],
intro:"Đoạn văn (句群) là nhiều câu cùng một ý. Người đọc theo được là nhờ <b>trật tự</b> và <b>từ nối</b>.",
rules:[
 {"t": "Thời gian: 起初 …，随后 …，最后 …", "fx": [["起初", null], ["việc 1", ""], ["随后", null], ["việc 2", ""], ["最后", null], ["việc 3", ""]], "mean": "Kể theo diễn biến.", "ex": [["{1|起初}{2|我很紧张}。{3|随后}{4|老师鼓励了我}。{5|最后}{6|我顺利讲完了}。", "Qǐchū wǒ hěn jǐnzhāng. Suíhòu lǎoshī gǔlìle wǒ. Zuìhòu wǒ shùnlì jiǎngwán le.", "Lúc đầu tôi căng thẳng. Sau đó thầy động viên. Cuối cùng tôi nói xong suôn sẻ."]]},
 {"t": "Không gian: 进门 …，左边 …，往里 …", "fx": [["进门", null], ["vật đầu tiên", ""], ["左边", null], ["vật bên trái", ""], ["往里", null], ["phía trong", ""]], "mean": "Tả từ gần đến xa, ngoài vào trong.", "ex": [["{1|进门}{2|是一个小院子}。{3|左边}{4|种着花}。{5|往里}{6|走就是客厅}。", "Jìn mén shì yí gè xiǎo yuànzi. Zuǒbian zhòngzhe huā. Wǎng lǐ zǒu jiùshì kètīng.", "Vào cửa là khoảng sân nhỏ. Bên trái trồng hoa. Đi vào trong là phòng khách."]]},
 {"t": "Logic: 首先 …，其次 …，因此 …", "fx": [["首先", null], ["lý 1", ""], ["其次", null], ["lý 2", ""], ["因此", null], ["kết luận", ""]], "mean": "Lập luận.", "ex": [["{1|首先}，{2|运动能增强体质}。{3|其次}，{4|它能缓解压力}。{5|因此}，{6|我们应该坚持锻炼}。", "Shǒuxiān, yùndòng néng zēngqiáng tǐzhì. Qícì, tā néng huǎnjiě yālì. Yīncǐ, wǒmen yīnggāi jiānchí duànliàn.", "Một là vận động tăng thể chất. Hai là giảm căng thẳng. Vì vậy nên kiên trì tập luyện."]]}],
cmp:[
 {"vn": "Đầu tiên…, sau đó…", "zh": "[首先]……，[然后]……", "py": "shǒuxiān…, ránhòu…", "ok": true, "why": "Tiếng Việt cũng dùng từ nối thứ tự như vậy."}],
ex:[
 ["[早上]我去图书馆，[中午]在食堂吃饭，[晚上]回宿舍复习。", "Zǎoshang wǒ qù túshūguǎn, zhōngwǔ zài shítáng chī fàn, wǎnshang huí sùshè fùxí.", "Sáng tôi đến thư viện, trưa ăn ở nhà ăn, tối về ký túc ôn bài."],
 ["[教学楼的前面]是操场，[后面]是图书馆，[东边]是宿舍。", "Jiàoxuélóu de qiánmian shì cāochǎng, hòumian shì túshūguǎn, dōngbian shì sùshè.", "Trước giảng đường là sân, sau là thư viện, phía đông là ký túc."]],
errs:[
 {"bad": "最后我起床了。然后晚上睡觉。起初吃早饭。", "good": "起初我起床了，然后吃早饭，最后晚上睡觉。", "why": "Từ nối phải đúng thứ tự."},
 {"bad": "首先运动很好，因此，其次能减压。", "good": "首先运动很好，其次能减压，因此要坚持。", "why": "Kết luận 因此 đặt cuối."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "起初他不同意，＿被大家说服了。", "vi": "Lúc đầu không đồng ý, sau đó bị thuyết phục.", "o": ["首先", "东边", "后来"], "a": 2, "why": "Trật tự thời gian."}, {"q": "“进门是客厅，左边是书房，往里是卧室。” Đoạn này theo trật tự:", "vi": "Chọn loại trật tự.", "o": ["không gian", "thời gian", "logic"], "a": 0, "why": "Tả vị trí."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["首先要有目标，", "其次要有计划，", "最后要坚持"], "a": "首先要有目标，其次要有计划，最后要坚持。", "vi": "Trước hết cần mục tiêu, sau đó kế hoạch, cuối cùng kiên trì."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Trước giảng đường là sân vận động, phía sau là thư viện.", "a": "教学楼前面是操场，后面是图书馆。 / 教学楼的前面是操场，后面是图书馆。"}]}],
rel:["新4.56", "一01", "新7.57"]
};
