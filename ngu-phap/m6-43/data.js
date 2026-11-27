// Bài ngữ pháp 【新6.43】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.43", title:"条件复句：凡是……，都……", vi:"凡是…都… — hễ là … đều …", tag:"句子的类型 · 复句",
goals:[
 "Nêu quy tắc <b>không ngoại lệ</b> bằng 凡是……都…….",
 "Đặt 凡是 trước cả một loại người, vật."],
rules:[
 {"t": "凡是 + đối tượng，都 + V", "fx": [["凡是", null], ["đối tượng", ""], ["，", ""], ["都", null], ["V", ""]], "mean": "Hễ là … đều …", "ex": [["{1|凡是}{2|本校学生}，{3|都}{4|可以借书}。", "Fánshì běn xiào xuésheng, dōu kěyǐ jiè shū.", "Hễ là học sinh trường này đều được mượn sách."], ["{1|凡是}{2|他答应的事}，{3|都}{4|会做到}。", "Fánshì tā dāying de shì, dōu huì zuòdào.", "Việc gì anh ấy hứa đều làm được."]]}],
cmp:[
 {"vn": "Ai từng đến đó đều khen đẹp.", "zh": "[凡是]去过那儿的人，[都]说很美。", "py": "Fánshì qùguo nàr de rén, dōu shuō hěn měi.", "ok": true, "why": "Giống “hễ là … đều”."}],
ex:[
 ["[凡是]有问题，[都]可以问我。", "Fánshì yǒu wèntí, dōu kěyǐ wèn wǒ.", "Hễ có thắc mắc đều hỏi tôi được."],
 ["[凡是]新来的员工[都]要参加培训。", "Fánshì xīn lái de yuángōng dōu yào cānjiā péixùn.", "Nhân viên mới đều phải tập huấn."]],
errs:[
 {"bad": "凡是学生可以借书。", "good": "凡是学生都可以借书。", "why": "Vế sau cần 都."},
 {"bad": "凡是我昨天去了。", "good": "我昨天去了。", "why": "凡是 nói về cả một loại đối tượng."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "凡是他喜欢的，妈妈＿买给他。", "vi": "Hễ nó thích gì mẹ đều mua.", "o": ["都", "才", "却"], "a": 0, "why": "凡是…都."}, {"q": "＿报名的人，都能得到一本书。", "vi": "Ai đăng ký đều được một cuốn sách.", "o": ["除非", "凡是", "要么"], "a": 1, "why": "凡是."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["凡是", "本校学生", "都", "可以借书"], "a": "凡是本校学生都可以借书。", "vi": "Học sinh trường này đều được mượn sách."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Hễ có thắc mắc đều hỏi tôi được (dùng 凡是).", "a": "凡是有问题，都可以问我。 / 凡是有问题都可以问我。"}]}],
rel:["新4.61", "三08", "新6.44"]
};
