// Bài ngữ pháp 【新6.18】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.18", title:"结构助词：所", vi:"所 — cái mà (đứng trước động từ)", tag:"词类 · 助词",
goals:[
 "Dùng <b>所 + V + 的</b> = cái mà (ai) làm.",
 "Hiểu <b>为……所……</b> và <b>所 + V</b> trong văn viết."],
rules:[
 {"t": "S + 所 + V + 的 (+ N)", "fx": [["S", ""], ["所", null], ["V", ""], ["的", null], ["(N)", ""]], "mean": "Cái mà S làm.", "ex": [["{1|我}{2|所}{3|知道}{4|的}就这些。", "Wǒ suǒ zhīdào de jiù zhèxiē.", "Những gì tôi biết chỉ có vậy."], ["{1|他}{2|所}{3|说}{4|的}{5|话}很有道理。", "Tā suǒ shuō de huà hěn yǒu dàolǐ.", "Lời anh ấy nói rất có lý."]]},
 {"t": "有所 / 无所 + V", "fx": [["有所 / 无所", null], ["V", ""]], "mean": "Có phần … / không có gì để …", "ex": [["今年的收入{1|有所}{2|提高}。", "Jīnnián de shōurù yǒu suǒ tígāo.", "Thu nhập năm nay có tăng phần nào."]]}],
cmp:[
 {"vn": "Điều chúng ta cần là thời gian.", "zh": "我们[所]需要的是时间。", "py": "Wǒmen suǒ xūyào de shì shíjiān.", "ok": true, "why": "Giống “điều mà chúng ta cần”."}],
ex:[
 ["这是大家[所]关心的问题。", "Zhè shì dàjiā suǒ guānxīn de wèntí.", "Đây là vấn đề mọi người quan tâm."],
 ["他对这件事一无[所]知。", "Tā duì zhè jiàn shì yìwúsuǒzhī.", "Anh ấy hoàn toàn không biết gì việc này."]],
errs:[
 {"bad": "我知道所的就这些。", "good": "我所知道的就这些。", "why": "所 đứng trước động từ."},
 {"bad": "他所睡觉的很晚。", "good": "他睡得很晚。", "why": "所 chỉ đi với động từ có đối tượng."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这是我＿看到的情况。", "vi": "Đây là tình hình tôi thấy.", "o": ["所", "得", "地"], "a": 0, "why": "所 + V + 的."}, {"q": "他的汉语水平有＿提高。", "vi": "Trình tiếng Trung của anh ấy có tiến bộ.", "o": ["的", "所", "些的"], "a": 1, "why": "有所提高."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["我们", "所", "需要", "的", "是", "时间"], "a": "我们所需要的是时间。", "vi": "Điều chúng ta cần là thời gian."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Lời anh ấy nói rất có lý (dùng 所).", "a": "他所说的话很有道理。"}]}],
rel:["新6.13", "三45", "一20"]
};
