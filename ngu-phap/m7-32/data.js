// Bài ngữ pháp 【新7.32】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.32", title:"话语标记（1）：不瞒你说、不是、不是我说你、老实说、说真的、你看你、真是的、说到哪儿去了", vi:"Câu mào đầu: nói thật, không phải tôi nói đâu, nhìn cậu kìa…", tag:"短语 · 话语标记",
goals:[
 "Mở lời thật lòng: <b>不瞒你说, 老实说, 说真的</b>.",
 "Trách nhẹ: <b>不是我说你, 你看你, 真是的</b>; khách sáo: <b>说到哪儿去了</b>."],
rules:[
 {"t": "不瞒你说 / 老实说 / 说真的，…", "fx": [["不瞒你说 / 老实说 / 说真的", null], ["，", ""], ["lời thật", ""]], "mean": "Nói thật.", "ex": [["{1|不瞒你说}，{2|我也没把握}。", "Bùmán nǐ shuō, wǒ yě méi bǎwò.", "Chẳng giấu gì bạn, tôi cũng không chắc."], ["{1|老实说}，{2|我不太喜欢}。", "Lǎoshi shuō, wǒ bú tài xǐhuan.", "Nói thật, tôi không thích lắm."], ["{1|说真的}，{2|你应该休息了}。", "Shuō zhēnde, nǐ yīnggāi xiūxi le.", "Nói thật đấy, bạn nên nghỉ đi."]]},
 {"t": "不是我说你 / 你看你，…", "fx": [["不是我说你 / 你看你", null], ["，", ""], ["lời trách", ""]], "mean": "Không phải mắng chứ… · nhìn cậu kìa.", "ex": [["{1|不是我说你}，{2|你太粗心了}。", "Búshì wǒ shuō nǐ, nǐ tài cūxīn le.", "Không phải tôi trách đâu, cậu ẩu quá."], ["{1|你看你}，{2|又把衣服弄脏了}。", "Nǐ kàn nǐ, yòu bǎ yīfu nòngzāng le.", "Nhìn con kìa, lại làm bẩn áo."]]},
 {"t": "不是，… / …真是的", "fx": [["不是 / 真是的", null], ["，", ""], ["câu", ""]], "mean": "Không, ý là… · thật là…", "ex": [["{1|不是}，{2|你听我解释}。", "Búshì, nǐ tīng wǒ jiěshì.", "Không, nghe tôi giải thích đã."], ["这人也{1|真是的}，说走就走。", "Zhè rén yě zhēnshi de, shuō zǒu jiù zǒu.", "Người đâu mà thật là, nói đi là đi."]]},
 {"t": "(看你) 说到哪儿去了", "fx": [["说到哪儿去了", null], ["，", ""], ["lời đáp", ""]], "mean": "Nói gì thế (khiêm tốn, gạt đi).", "ex": [["{1|说到哪儿去了}，{2|这是应该的}。", "Shuōdào nǎr qù le, zhè shì yīnggāi de.", "Bạn nói gì thế, đó là việc nên làm."]]}],
cmp:[
 {"vn": "Nói thật lòng", "zh": "[说心里话]", "py": "shuō xīnli huà", "ok": true, "why": "Cùng nhóm với 说真的."}],
ex:[
 ["[不瞒你说]，我早就想换工作了。", "Bùmán nǐ shuō, wǒ zǎo jiù xiǎng huàn gōngzuò le.", "Chẳng giấu gì, tôi muốn đổi việc từ lâu."],
 ["[真是的]，也不提前说一声。", "Zhēnshi de, yě bù tíqián shuō yì shēng.", "Thật là, cũng chẳng báo trước."]],
errs:[
 {"bad": "不瞒说你，我不知道。", "good": "不瞒你说，我不知道。", "why": "Cụm cố định."},
 {"bad": "“谢谢你！”“不是我说你。”", "good": "“谢谢你！”“说到哪儿去了。”", "why": "Đáp lời cảm ơn khiêm tốn dùng 说到哪儿去了."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "“太麻烦你了。”“＿，咱们是朋友嘛。”", "vi": "“Phiền bạn quá.” “Nói gì thế, bạn bè mà.”", "o": ["不是我说你", "说到哪儿去了", "你看你"], "a": 1, "why": "Gạt lời khách sáo."}, {"q": "＿，这道菜做得不怎么样。", "vi": "Nói thật, món này chưa ngon.", "o": ["说到哪儿去了", "老实说", "真是的呢"], "a": 1, "why": "Nói thật."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["不瞒你说，", "我也", "没把握"], "a": "不瞒你说，我也没把握。", "vi": "Chẳng giấu gì bạn, tôi cũng không chắc."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Nói thật, tôi không thích lắm (dùng 老实说).", "a": "老实说，我不太喜欢。"}]}],
rel:["新7.33", "新6.30", "新5.22"]
};
