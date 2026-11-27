// Bài ngữ pháp 【新6.19】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.19", title:"语气助词：啦、嘛", vi:"啦, 嘛 — trợ từ ngữ khí", tag:"词类 · 助词",
goals:[
 "Dùng <b>啦</b> (了 + 啊) khi vui, khi báo tin, liệt kê.",
 "Dùng <b>嘛</b> tỏ ý “hiển nhiên mà”, hoặc làm nũng."],
rules:[
 {"t": "Câu + 啦", "fx": [["Câu", ""], ["啦", null]], "mean": "Giọng phấn khởi, cảm thán.", "ex": [["{1|下雪}{2|啦}！", "Xià xuě la!", "Tuyết rơi rồi kìa!"], ["水果{1|啦}、点心{1|啦}，什么都有。", "Shuǐguǒ la, diǎnxin la, shénme dōu yǒu.", "Hoa quả này, bánh này, có đủ."]]},
 {"t": "Câu + 嘛", "fx": [["Câu", ""], ["嘛", null]], "mean": "Điều hiển nhiên; đề nghị nũng nịu; ngắt đề tài.", "ex": [["{1|他是新来的}{2|嘛}，不熟悉很正常。", "Tā shì xīn lái de ma, bù shúxī hěn zhèngcháng.", "Anh ấy mới đến mà, chưa quen là thường."], ["{1|陪我去}{2|嘛}！", "Péi wǒ qù ma!", "Đi với mình đi mà!"]]}],
cmp:[
 {"vn": "Thì cứ từ từ mà làm chứ.", "zh": "慢慢儿来[嘛]。", "py": "Mànmānr lái ma.", "ok": true, "why": "嘛 gần “mà, chứ”."}],
ex:[
 ["好[啦]好[啦]，别哭了。", "Hǎo la hǎo la, bié kū le.", "Thôi nào thôi nào, đừng khóc."],
 ["这个问题[嘛]，我们明天再谈。", "Zhège wèntí ma, wǒmen míngtiān zài tán.", "Vấn đề này ấy à, mai bàn."]],
errs:[
 {"bad": "你是学生嘛？（muốn hỏi）", "good": "你是学生吗？", "why": "Hỏi dùng 吗, không dùng 嘛."},
 {"bad": "下啦雪！", "good": "下雪啦！", "why": "啦 đứng cuối câu."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "他还小＿，你别怪他。", "vi": "Nó còn nhỏ mà, đừng trách.", "o": ["吗", "嘛", "呢？"], "a": 1, "why": "Hiển nhiên → 嘛."}, {"q": "我们赢＿！", "vi": "Chúng ta thắng rồi!", "o": ["吗", "吧？", "啦"], "a": 2, "why": "Reo vui."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["陪我", "去嘛"], "a": "陪我去嘛。", "vi": "Đi với mình đi mà."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Tuyết rơi rồi kìa (dùng 啦)!", "a": "下雪啦！"}]}],
rel:["新4.21", "二34", "一22"]
};
