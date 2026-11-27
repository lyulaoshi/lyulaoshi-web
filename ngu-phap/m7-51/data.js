// Bài ngữ pháp 【新7.51】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.51", title:"递进复句（1）：别说……，都／也……；……不说，还……；连……都……，更不用说……了", vi:"Đừng nói…; đã… lại còn…; đến… còn…, nói gì…", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>别说……就是 / 连……也</b> và <b>……不说，还……</b>.",
 "Dùng <b>连……都……，更不用说……了</b>."],
rules:[
 {"t": "别说 + A，(连) B + 也 / 都 …", "fx": [["别说", null], ["A", ""], ["，", ""], ["B", ""], ["也 / 都", null], ["V", ""]], "mean": "Đừng nói A, đến B cũng …", "ex": [["{1|别说}{2|汉字}，{3|拼音他}{4|都}{5|不认识}。", "Bié shuō Hànzì, pīnyīn tā dōu bú rènshi.", "Đừng nói chữ Hán, pinyin nó còn không biết."]]},
 {"t": "A + 不说，还 + B", "fx": [["A", ""], ["不说", null], ["，", ""], ["还", null], ["B", ""]], "mean": "Đã A lại còn B.", "ex": [["他{1|迟到}{2|不说}，{3|还}{4|不道歉}。", "Tā chídào bù shuō, hái bú dàoqiàn.", "Anh ta đã đến muộn lại còn không xin lỗi."]]},
 {"t": "连 A 都 …，更不用说 B 了", "fx": [["连", null], ["A", ""], ["都…", null], ["，", ""], ["更不用说", null], ["B 了", ""]], "mean": "Đến A còn …, nói gì B.", "ex": [["{1|连}{2|老师}{3|都不会}，{4|更不用说}{5|我了}。", "Lián lǎoshī dōu bú huì, gèng búyòng shuō wǒ le.", "Đến thầy còn không làm được, nói gì tôi."]]}],
cmp:[
 {"vn": "Đừng nói mua nhà, thuê còn khó.", "zh": "[别说]买房，租房[都]难。", "py": "Bié shuō mǎi fáng, zū fáng dōu nán.", "ok": true, "why": "Cùng cấu trúc “đừng nói…”."}],
ex:[
 ["这个地方偏僻[不说]，[还]没有网络。", "Zhège dìfang piānpì bù shuō, hái méiyǒu wǎngluò.", "Chỗ này đã hẻo lánh lại còn không có mạng."],
 ["我[连]饭[都]没时间吃，[更不用说]看电影[了]。", "Wǒ lián fàn dōu méi shíjiān chī, gèng búyòng shuō kàn diànyǐng le.", "Tôi còn không có giờ ăn, nói gì xem phim."]],
errs:[
 {"bad": "说别汉字，拼音也不会。", "good": "别说汉字，连拼音也不会。", "why": "Cụm 别说."},
 {"bad": "他迟到不说，反而道歉。（muốn nói lại còn không xin lỗi）", "good": "他迟到不说，还不道歉。", "why": "Thêm điều xấu → 还."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "＿大人，小孩子都知道。（ý: đừng nói người lớn）", "vi": "Đừng nói người lớn, trẻ con cũng biết.", "o": ["别看着", "别说", "不说还"], "a": 1, "why": "Lưu ý chọn đúng mẫu."}, {"q": "他不帮忙＿，还添乱。", "vi": "Đã không giúp lại còn phá.", "o": ["不说", "别说", "说道"], "a": 0, "why": "…不说，还."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["连", "老师", "都不会，", "更不用说", "我了"], "a": "连老师都不会，更不用说我了。", "vi": "Đến thầy còn không làm được, nói gì tôi."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ta đã đến muộn lại còn không xin lỗi (dùng 不说).", "a": "他迟到不说，还不道歉。"}]}],
rel:["新4.57", "新5.39", "新7.52"]
};
