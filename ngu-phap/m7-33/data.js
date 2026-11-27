// Bài ngữ pháp 【新7.33】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.33", title:"话语标记（2）：反过来（说）、话（又）说回来、话是这么说、退一步说、换句话说、可不（是嘛）、（你）还别说、要（让）我说、这不", vi:"Câu chuyển ý: ngược lại, nói đi cũng phải nói lại, đổi cách nói…", tag:"短语 · 话语标记",
goals:[
 "Chuyển góc nhìn: <b>反过来说, 话又说回来, 话是这么说, 退一步说</b>.",
 "Diễn giải, tán thành: <b>换句话说, 可不是嘛, 还别说, 要我说, 这不</b>."],
rules:[
 {"t": "反过来说 / 话又说回来 / 退一步说，…", "fx": [["反过来说 / 话又说回来 / 退一步说", null], ["，", ""], ["góc nhìn khác", ""]], "mean": "Ngược lại · nói đi cũng phải nói lại · lùi một bước.", "ex": [["{1|反过来说}，{2|这也是个机会}。", "Fǎn guolai shuō, zhè yě shì gè jīhuì.", "Nhìn ngược lại, đây cũng là cơ hội."], ["他有缺点，可{1|话又说回来}，{2|谁没有缺点呢}？", "Tā yǒu quēdiǎn, kě huà yòu shuō huilai, shéi méiyǒu quēdiǎn ne?", "Anh ấy có khuyết điểm, nhưng nói đi cũng phải nói lại, ai chẳng có?"], ["{1|退一步说}，{2|就算失败了也没什么}。", "Tuì yí bù shuō, jiùsuàn shībàile yě méi shénme.", "Lùi một bước, dù thất bại cũng chẳng sao."]]},
 {"t": "话是这么说，可是 …", "fx": [["话是这么说", null], ["，", ""], ["可是…", ""]], "mean": "Nói thì nói vậy, nhưng.", "ex": [["{1|话是这么说}，{2|可是做起来很难}。", "Huà shì zhème shuō, kěshì zuò qilai hěn nán.", "Nói thì nói vậy, làm mới khó."]]},
 {"t": "换句话说 / 要我说，…", "fx": [["换句话说 / 要我说", null], ["，", ""], ["ý", ""]], "mean": "Nói cách khác · theo tôi.", "ex": [["{1|换句话说}，{2|我们没有时间了}。", "Huàn jù huà shuō, wǒmen méiyǒu shíjiān le.", "Nói cách khác, ta hết thời gian rồi."], ["{1|要我说}，{2|你应该去}。", "Yào wǒ shuō, nǐ yīnggāi qù.", "Theo tôi thì bạn nên đi."]]},
 {"t": "可不是嘛 / 还别说 / 这不，…", "fx": [["可不是嘛 / 还别说 / 这不", null], ["，", ""], ["câu", ""]], "mean": "Chứ còn gì · đúng thật đấy · đấy, vừa …", "ex": [["“今天真热。”“{1|可不是嘛}！”", "“Jīntiān zhēn rè.” “Kě búshì ma!”", "“Hôm nay nóng thật.” “Chứ còn gì!”"], ["{1|还别说}，{2|这个办法真管用}。", "Hái bié shuō, zhège bànfǎ zhēn guǎnyòng.", "Công nhận, cách này hiệu nghiệm thật."], ["他很关心你，{1|这不}，{2|又打电话来了}。", "Tā hěn guānxīn nǐ, zhè bù, yòu dǎ diànhuà lái le.", "Anh ấy quan tâm bạn lắm, đấy, lại gọi đến."]]}],
cmp:[
 {"vn": "Nói cách khác", "zh": "[换句话说]", "py": "huàn jù huà shuō", "ok": true, "why": "Trùng cách nói tiếng Việt."}],
ex:[
 ["[话是这么说]，可我还是担心。", "Huà shì zhème shuō, kě wǒ háishi dānxīn.", "Nói vậy thôi, tôi vẫn lo."],
 ["“她唱得真好。”“[可不]！”", "“Tā chàng de zhēn hǎo.” “Kě bù!”", "“Cô ấy hát hay thật.” “Đúng thế!”"]],
errs:[
 {"bad": "换话句说。", "good": "换句话说。", "why": "一句话 → 换句话说."},
 {"bad": "“真冷。”“可不是！”（muốn phản đối）", "good": "“真冷。”“我不觉得冷。”", "why": "可不是 là tán thành, không phải phủ định."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "“这家店很贵。”“＿，一碗面要五十块！”", "vi": "“Quán này đắt.” “Chứ còn gì!”", "o": ["退一步说", "可不是嘛", "反过来"], "a": 1, "why": "Tán thành."}, {"q": "他迟到不对，＿，你也不该骂他。", "vi": "…nói đi cũng phải nói lại, bạn không nên mắng.", "o": ["换句话", "还别", "话又说回来"], "a": 2, "why": "Chuyển góc nhìn."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["话是这么说，", "可是", "做起来", "很难"], "a": "话是这么说，可是做起来很难。", "vi": "Nói thì nói vậy, làm mới khó."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Theo tôi thì bạn nên đi (dùng 要我说).", "a": "要我说，你应该去。 / 要让我说，你应该去。"}]}],
rel:["新7.32", "新7.34", "新4.28"]
};
