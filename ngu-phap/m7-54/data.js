// Bài ngữ pháp 【新7.54】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.54", title:"紧缩复句：非得……才……；任……也……", vi:"非得…才…; 任…也… — phải … mới …; dù … cũng …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>非得……才……</b> nói điều kiện bắt buộc.",
 "Dùng <b>任……也……</b>: mặc cho … cũng."],
rules:[
 {"t": "(S) 非得 + A + 才 + B", "fx": [["S", ""], ["非得", null], ["A", ""], ["才", null], ["B", ""]], "mean": "Phải A mới B.", "ex": [["{1|他}{2|非得}{3|亲眼看见}{4|才}{5|相信}。", "Tā fēiděi qīnyǎn kànjiàn cái xiāngxìn.", "Anh ta phải tận mắt thấy mới tin."]]},
 {"t": "任 + ai + 怎么 + V，也 + B", "fx": [["任", null], ["ai + cách", ""], ["，", ""], ["也", null], ["B", ""]], "mean": "Mặc cho … cũng.", "ex": [["{1|任}{2|我怎么说}，他{3|也}{4|不听}。", "Rèn wǒ zěnme shuō, tā yě bù tīng.", "Mặc tôi nói thế nào anh ta cũng không nghe."]]}],
cmp:[
 {"vn": "Phải mắng mới chịu làm.", "zh": "[非得]骂[才]做", "py": "fēiděi mà cái zuò", "ok": true, "why": "非得…才."}],
ex:[
 ["这种药[非得]医生开[才]能买。", "Zhè zhǒng yào fēiděi yīshēng kāi cái néng mǎi.", "Thuốc này phải bác sĩ kê mới mua được."],
 ["[任]风吹雨打，他[也]不动摇。", "Rèn fēngchuī-yǔdǎ, tā yě bù dòngyáo.", "Mặc mưa gió, anh ấy không lay chuyển."]],
errs:[
 {"bad": "非得他去就行。", "good": "非得他去才行。", "why": "非得…才."},
 {"bad": "任他怎么说，我就不信吗。", "good": "任他怎么说，我也不信。", "why": "任…也."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这孩子＿哄着才睡觉。", "vi": "Đứa bé phải dỗ mới ngủ.", "o": ["非得", "任凭也", "不见得"], "a": 0, "why": "非得…才."}, {"q": "任你怎么劝，他＿不改。", "vi": "Khuyên thế nào cũng không đổi.", "o": ["也", "才", "就要"], "a": 0, "why": "任…也."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "非得", "亲眼看见", "才相信"], "a": "他非得亲眼看见才相信。", "vi": "Anh ta phải tận mắt thấy mới tin."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Mặc tôi nói thế nào anh ta cũng không nghe (dùng 任).", "a": "任我怎么说，他也不听。 / 任我怎么说，他都不听。"}]}],
rel:["新5.41", "新7.20", "新4.65"]
};
