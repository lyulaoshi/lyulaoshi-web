// Bài ngữ pháp 【新6.29】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.29", title:"不X不……，一X……", vi:"不X不…，一X… — không … thì thôi, hễ … là …", tag:"短语 · 固定格式",
goals:[
 "Tả sự việc <b>bất ngờ</b>: bình thường không, đã làm là gây chú ý.",
 "Giữ cùng một động từ X ở hai chỗ."],
rules:[
 {"t": "不 X 不知道，一 X 吓一跳", "fx": [["不", null], ["X", ""], ["不…", null], ["，", ""], ["一", null], ["X…", ""]], "mean": "Không … thì không biết, … rồi mới giật mình.", "ex": [["{1|不}{2|看}{3|不知道}，{4|一}{5|看吓一跳}。", "Bú kàn bù zhīdào, yí kàn xià yí tiào.", "Không xem thì không biết, xem rồi giật mình."], ["他{1|不}{2|说}{3|不要紧}，{4|一}{5|说大家都笑了}。", "Tā bù shuō bú yàojǐn, yì shuō dàjiā dōu xiào le.", "Anh ta không nói thì thôi, vừa nói là ai cũng cười."]]}],
cmp:[
 {"vn": "Không đi thì không biết, đi rồi mới thấy đẹp.", "zh": "[不去不知道，一去]才发现很美。", "py": "Bú qù bù zhīdào, yí qù cái fāxiàn hěn měi.", "ok": true, "why": "Khung quen thuộc trong khẩu ngữ."}],
ex:[
 ["[不算不知道，一算]吓一跳。", "Bú suàn bù zhīdào, yí suàn xià yí tiào.", "Không tính thì thôi, tính ra giật mình."],
 ["这孩子[不哭不要紧，一哭]就停不下来。", "Zhè háizi bù kū bú yàojǐn, yì kū jiù tíng bu xiàlái.", "Đứa bé đã khóc là không nín."]],
errs:[
 {"bad": "不看不知道，吓一看一跳。", "good": "不看不知道，一看吓一跳。", "why": "一 + X đứng trước."},
 {"bad": "不看不知道，一听吓一跳。", "good": "不看不知道，一看吓一跳。", "why": "Hai chỗ cùng động từ."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "不问不知道，一＿吓一跳。", "vi": "Không hỏi thì thôi, hỏi ra giật mình.", "o": ["看", "问", "说话"], "a": 1, "why": "Lặp lại 问."}, {"q": "他＿唱不要紧，一唱把大家吓跑了。", "vi": "Nó không hát thì thôi, hát là mọi người chạy hết.", "o": ["不", "没的", "别要"], "a": 0, "why": "不X不要紧."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["不看", "不知道，", "一看", "吓一跳"], "a": "不看不知道，一看吓一跳。", "vi": "Không xem thì không biết, xem rồi giật mình."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Không tính thì không biết, tính ra giật mình.", "a": "不算不知道，一算吓一跳。"}]}],
rel:["新4.65", "二69", "新5.41"]
};
