// Bài ngữ pháp 【新7.03】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.03", title:"动词：巴不得、恨不得、犯不着、犯得着、免不了、并非", vi:"巴不得, 恨不得, 犯得着, 免不了, 并非", tag:"词类 · 动词",
goals:[
 "Diễn tả mong muốn mạnh: <b>巴不得</b> (chỉ mong), <b>恨不得</b> (chỉ muốn).",
 "Dùng <b>犯得着 / 犯不着</b> (đáng / chẳng đáng), <b>免不了</b> (khó tránh), <b>并非</b> (không phải)."],
rules:[
 {"t": "巴不得 / 恨不得 + V", "fx": [["巴不得 / 恨不得", null], ["V (mong muốn)", ""]], "mean": "巴不得 mong điều có thể xảy ra · 恨不得 muốn điều khó làm được ngay.", "ex": [["我{1|巴不得}{2|早点儿放假}。", "Wǒ bābude zǎo diǎnr fàngjià.", "Tôi chỉ mong sớm được nghỉ."], ["他{1|恨不得}{2|马上飞回家}。", "Tā hènbude mǎshàng fēi huí jiā.", "Anh ấy chỉ muốn bay ngay về nhà."]]},
 {"t": "犯得着 / 犯不着 + V", "fx": [["犯得着 / 犯不着", null], ["V", ""]], "mean": "Đáng / chẳng đáng làm.", "ex": [["为这点儿小事，{1|犯得着}{2|生气吗}？", "Wèi zhè diǎnr xiǎoshì, fàndezháo shēngqì ma?", "Vì chuyện cỏn con, đáng giận không?"], ["你{1|犯不着}{2|跟他吵}。", "Nǐ fànbuzháo gēn tā chǎo.", "Cậu chẳng việc gì cãi với anh ta."]]},
 {"t": "免不了 / 并非 + V / cụm", "fx": [["免不了 / 并非", null], ["V / cụm", ""]], "mean": "免不了 khó tránh khỏi · 并非 hoàn toàn không phải (văn viết).", "ex": [["刚开始工作，{1|免不了}{2|出错}。", "Gāng kāishǐ gōngzuò, miǎnbuliǎo chūcuò.", "Mới đi làm khó tránh sai sót."], ["事情{1|并非}{2|你想的那样}。", "Shìqing bìngfēi nǐ xiǎng de nàyàng.", "Sự việc không phải như bạn nghĩ."]]}],
cmp:[
 {"vn": "Tôi mong còn chẳng được ấy chứ!", "zh": "我[巴不得]呢！", "py": "Wǒ bābude ne!", "ok": true, "why": "Đáp lại lời đề nghị hợp ý."}],
ex:[
 ["听说放假，孩子们[巴不得]呢。", "Tīngshuō fàngjià, háizimen bābude ne.", "Nghe được nghỉ, bọn trẻ mong còn không được."],
 ["搬家[免不了]要花钱。", "Bānjiā miǎnbuliǎo yào huā qián.", "Chuyển nhà khó tránh tốn tiền."]],
errs:[
 {"bad": "我巴不得很放假。", "good": "我巴不得早点儿放假。", "why": "Sau 巴不得 là cụm động từ."},
 {"bad": "事情并非是不你想的。", "good": "事情并非你想的那样。", "why": "并非 đã mang nghĩa phủ định."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "这点儿事，＿麻烦别人。", "vi": "Chuyện nhỏ, chẳng đáng phiền người khác.", "o": ["巴不得", "犯不着", "免不了"], "a": 1, "why": "Không đáng."}, {"q": "人多的地方＿会有点儿吵。", "vi": "Chỗ đông khó tránh ồn.", "o": ["恨不得", "免不了", "犯得着"], "a": 1, "why": "Khó tránh."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["他", "恨不得", "马上", "飞回家"], "a": "他恨不得马上飞回家。", "vi": "Anh ấy chỉ muốn bay ngay về nhà."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Sự việc không phải như bạn nghĩ (dùng 并非).", "a": "事情并非你想的那样。 / 事情并非像你想的那样。"}]}],
rel:["新5.25", "新7.04", "新5.20"]
};
