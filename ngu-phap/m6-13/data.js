// Bài ngữ pháp 【新6.13】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新6.13", title:"介词：于（引出时间、处所）", vi:"于 — vào lúc, tại, từ", tag:"词类 · 介词",
goals:[
 "Dùng <b>于 + thời gian / nơi chốn</b> trong văn viết.",
 "Hiểu 于 đứng được <b>sau động từ</b>: 出生于, 位于."],
rules:[
 {"t": "S + 于 + thời gian + V", "fx": [["S", ""], ["于", null], ["thời gian", ""], ["V", ""]], "mean": "Vào (ngày, năm).", "ex": [["{1|新校区}{2|于}{3|去年}{4|建成}。", "Xīn xiàoqū yú qùnián jiànchéng.", "Cơ sở mới được xây xong vào năm ngoái."]]},
 {"t": "S + V + 于 + nơi chốn / thời gian", "fx": [["S", ""], ["V", ""], ["于", null], ["nơi / thời gian", ""]], "mean": "Ở, tại, vào.", "ex": [["{1|他}{2|出生}{3|于}{4|河内}。", "Tā chūshēng yú Hénèi.", "Anh ấy sinh tại Hà Nội."], ["{1|这所大学}{2|位}{3|于}{4|市中心}。", "Zhè suǒ dàxué wèiyú shì zhōngxīn.", "Trường đại học này nằm ở trung tâm thành phố."]]}],
cmp:[
 {"vn": "Công ty thành lập năm 2010.", "zh": "公司成立[于]2010年。", "py": "Gōngsī chénglì yú èr líng yī líng nián.", "ok": true, "why": "于 + mốc đặt sau động từ."}],
ex:[
 ["会议将[于]下周一举行。", "Huìyì jiāng yú xià zhōuyī jǔxíng.", "Hội nghị sẽ tổ chức thứ Hai tuần sau."],
 ["他毕业[于]北京大学。", "Tā bìyè yú Běijīng Dàxué.", "Anh ấy tốt nghiệp Đại học Bắc Kinh."]],
errs:[
 {"bad": "他于河内出生了在。", "good": "他出生于河内。", "why": "Không chồng 于 và 在."},
 {"bad": "我于昨天跟朋友吃饭呢。", "good": "我昨天跟朋友吃饭了。", "why": "于 không dùng trong khẩu ngữ đời thường."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这本书出版＿2020年。", "vi": "Sách xuất bản năm 2020.", "o": ["于", "在了", "从"], "a": 0, "why": "出版于."}, {"q": "学校位＿城市北边。", "vi": "Trường nằm phía bắc thành phố.", "o": ["在", "从", "于"], "a": 2, "why": "位于."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "毕业于", "北京大学"], "a": "他毕业于北京大学。", "vi": "Anh ấy tốt nghiệp Đại học Bắc Kinh."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Hội nghị sẽ tổ chức vào thứ Hai tuần sau (dùng 于).", "a": "会议将于下周一举行。"}]}],
rel:["新4.13", "一16", "新6.15"]
};
