// Thông điệp hôm nay (trang chủ, dùng trong lich-hom-nay.js): mỗi ngày một câu ngắn tiếng Trung; học viên chọn cung hoàng đạo thì có câu riêng
// + màu may mắn + chữ may mắn. Cung đã chọn nhớ ở localStorage.llCung. Bản nháp — cô duyệt lại câu.
window.TD_CAU=[ // [câu, pinyin, nghĩa] — đời thường, cảm xúc, chăm sóc bản thân, thêm thành ngữ/tục ngữ (HSK 1–6); cô dặn: đừng nhắc chuyện học quá nhiều
["今天也要加油！","Jīntiān yě yào jiāyóu!","Hôm nay cũng cố lên nhé!"],
["慢慢来，比较快。","Mànmàn lái, bǐjiào kuài.","Chậm mà chắc."],
["你比你想的更棒！","Nǐ bǐ nǐ xiǎng de gèng bàng!","Bạn giỏi hơn bạn nghĩ đó!"],
["今天是个好日子。","Jīntiān shì ge hǎo rìzi.","Hôm nay là một ngày đẹp."],
["笑一笑，十年少。","Xiào yi xiào, shí nián shào.","Cười một cái, trẻ ra mười tuổi."],
["多喝水，多休息。","Duō hē shuǐ, duō xiūxi.","Uống nhiều nước, nghỉ ngơi nhiều nha."],
["好好吃饭，好好睡觉。","Hǎohāo chīfàn, hǎohāo shuìjiào.","Ăn ngon, ngủ kỹ nhé."],
["休息一下，再出发。","Xiūxi yíxià, zài chūfā.","Nghỉ một chút rồi đi tiếp."],
["相信自己！","Xiāngxìn zìjǐ!","Tin vào bản thân nhé!"],
["今天的你很可爱！","Jīntiān de nǐ hěn kě'ài!","Hôm nay bạn đáng yêu lắm!"],
["今天给朋友打个电话吧。","Jīntiān gěi péngyou dǎ ge diànhuà ba.","Hôm nay gọi điện cho một người bạn nhé."],
["今天对别人说声谢谢吧。","Jīntiān duì biérén shuō shēng xièxie ba.","Hôm nay nói lời cảm ơn với ai đó nha."],
["你已经很努力了。","Nǐ yǐjīng hěn nǔlì le.","Bạn đã cố gắng nhiều rồi đó."],
["出去走走，看看天空吧。","Chūqu zǒuzou, kànkan tiānkōng ba.","Ra ngoài dạo một chút, ngắm bầu trời nhé."],
["开心最重要！","Kāixīn zuì zhòngyào!","Vui vẻ là quan trọng nhất!"],
["今天吃点儿好吃的吧！","Jīntiān chī diǎnr hǎochī de ba!","Hôm nay ăn món gì ngon ngon đi!"],
["天气好，心情也好。","Tiānqì hǎo, xīnqíng yě hǎo.","Trời đẹp, lòng cũng vui."],
["每一天都是新的开始。","Měi yì tiān dōu shì xīn de kāishǐ.","Mỗi ngày đều là một khởi đầu mới."],
["给自己一个拥抱。","Gěi zìjǐ yí ge yōngbào.","Tự ôm mình một cái nhé."],
["千里之行，始于足下。","Qiān lǐ zhī xíng, shǐ yú zú xià.","Đi ngàn dặm bắt đầu từ một bước chân."],
["有你在，真好。","Yǒu nǐ zài, zhēn hǎo.","Có bạn ở đây, thật tốt."],
["船到桥头自然直。","Chuán dào qiáotóu zìrán zhí.","Rồi mọi chuyện sẽ ổn thôi (thuyền đến đầu cầu ắt sẽ thẳng)."],
["好事多磨。","Hǎoshì duō mó.","Việc tốt thường lắm gian nan."],
["知足常乐。","Zhīzú cháng lè.","Biết đủ thì luôn vui."],
["塞翁失马，焉知非福。","Sàiwēng shī mǎ, yān zhī fēi fú.","Tái ông mất ngựa, biết đâu lại là phúc."],
["一切都会好起来的。","Yíqiè dōu huì hǎo qǐlai de.","Mọi thứ rồi sẽ tốt lên."],
["不怕慢，就怕站。","Bú pà màn, jiù pà zhàn.","Không sợ chậm, chỉ sợ đứng yên."],
["心若向阳，无畏悲伤。","Xīn ruò xiàng yáng, wú wèi bēishāng.","Lòng hướng về mặt trời thì chẳng sợ buồn đau."],
["万事开头难。","Wànshì kāitóu nán.","Vạn sự khởi đầu nan."],
["世上无难事，只怕有心人。","Shìshàng wú nán shì, zhǐ pà yǒuxīn rén.","Không có việc gì khó, chỉ sợ lòng không bền."],
["平安是福。","Píng'ān shì fú.","Bình an là phúc."],
["今天的努力，是明天的礼物。","Jīntiān de nǔlì, shì míngtiān de lǐwù.","Cố gắng hôm nay là món quà của ngày mai."],
["生活需要一点儿甜。","Shēnghuó xūyào yìdiǎnr tián.","Cuộc sống cần chút ngọt ngào."],
["做自己就好。","Zuò zìjǐ jiù hǎo.","Cứ là chính mình là được."],
["雨后总会有彩虹。","Yǔ hòu zǒng huì yǒu cǎihóng.","Sau cơn mưa trời lại sáng."],
["微笑是最美的语言。","Wēixiào shì zuì měi de yǔyán.","Nụ cười là ngôn ngữ đẹp nhất."],
["珍惜身边的人。","Zhēnxī shēnbiān de rén.","Trân trọng những người bên cạnh."],
["别和别人比，和昨天的自己比。","Bié hé biérén bǐ, hé zuótiān de zìjǐ bǐ.","Đừng so với người khác, hãy so với chính mình hôm qua."],
["今天也是值得开心的一天。","Jīntiān yě shì zhídé kāixīn de yì tiān.","Hôm nay cũng là một ngày đáng vui."],
["心情不好的时候，就去晒晒太阳。","Xīnqíng bù hǎo de shíhou, jiù qù shàishai tàiyáng.","Lúc buồn thì ra phơi nắng một chút."],
["慢一点儿，生活会更美。","Màn yìdiǎnr, shēnghuó huì gèng měi.","Chậm lại một chút, cuộc sống sẽ đẹp hơn."],
["你的善良很珍贵。","Nǐ de shànliáng hěn zhēnguì.","Lòng tốt của bạn rất quý giá."],
["少一点儿担心，多一点儿开心。","Shǎo yìdiǎnr dānxīn, duō yìdiǎnr kāixīn.","Bớt lo một chút, vui thêm một chút."],
["有梦想，就去追吧！","Yǒu mèngxiǎng, jiù qù zhuī ba!","Có ước mơ thì hãy theo đuổi!"],
["好心情，从早餐开始。","Hǎo xīnqíng, cóng zǎocān kāishǐ.","Tâm trạng tốt bắt đầu từ bữa sáng."],
["累了就停下来，看看风景。","Lèi le jiù tíng xiàlai, kànkan fēngjǐng.","Mệt thì dừng lại ngắm cảnh."],
["每个人都有自己的花期。","Měi ge rén dōu yǒu zìjǐ de huāqī.","Mỗi người đều có mùa hoa nở của riêng mình."],
["有朋自远方来，不亦乐乎。","Yǒu péng zì yuǎnfāng lái, bú yì lè hū.","Có bạn từ phương xa đến, chẳng vui lắm sao."],
["海内存知己，天涯若比邻。","Hǎinèi cún zhījǐ, tiānyá ruò bǐlín.","Bốn bể có tri kỷ, chân trời góc biển cũng như láng giềng."],
["明天会更好。","Míngtiān huì gèng hǎo.","Ngày mai sẽ tốt đẹp hơn."]
];
window.TD_CUNG=[ // [tên Trung, pinyin, tên Việt, tháng-ngày bắt đầu, khoảng ngày sinh]
["白羊座","Báiyáng zuò","Bạch Dương",321,"21/3 – 19/4"],["金牛座","Jīnniú zuò","Kim Ngưu",420,"20/4 – 20/5"],["双子座","Shuāngzǐ zuò","Song Tử",521,"21/5 – 21/6"],
["巨蟹座","Jùxiè zuò","Cự Giải",622,"22/6 – 22/7"],["狮子座","Shīzi zuò","Sư Tử",723,"23/7 – 22/8"],["处女座","Chǔnǚ zuò","Xử Nữ",823,"23/8 – 22/9"],
["天秤座","Tiānchèng zuò","Thiên Bình",923,"23/9 – 23/10"],["天蝎座","Tiānxiē zuò","Thiên Yết",1024,"24/10 – 22/11"],["射手座","Shèshǒu zuò","Nhân Mã",1123,"23/11 – 21/12"],
["摩羯座","Mójié zuò","Ma Kết",1222,"22/12 – 19/1"],["水瓶座","Shuǐpíng zuò","Bảo Bình",120,"20/1 – 18/2"],["双鱼座","Shuāngyú zuò","Song Ngư",219,"19/2 – 20/3"]];
// Câu riêng cho từng cung (cùng thứ tự TD_CUNG): dựa trên nét tính cách quen thuộc của cung; chủ yếu đời sống, cảm xúc,
// ít câu nhắc tới tiếng Trung (≈1/10). Mỗi cung 10 câu, xoay vòng theo ngày. [câu, pinyin, nghĩa] — bản nháp, cô duyệt lại.
window.TD_CUNG_CAU=[
[ // 白羊座 Bạch Dương: năng động, dũng cảm, nghĩ là làm
["白羊座今天很有活力，去运动一下吧！","Báiyáng zuò jīntiān hěn yǒu huólì, qù yùndòng yíxià ba!","Bạch Dương hôm nay tràn năng lượng, đi vận động chút nhé!"],
["想到就去做，别犹豫！","Xiǎngdào jiù qù zuò, bié yóuyù!","Nghĩ là làm, đừng do dự!"],
["你很勇敢，今天试试新东西吧。","Nǐ hěn yǒnggǎn, jīntiān shìshi xīn dōngxi ba.","Bạn rất dũng cảm, hôm nay thử điều gì mới nhé."],
["别着急，慢一点儿也没关系。","Bié zháojí, màn yìdiǎnr yě méi guānxi.","Đừng vội, chậm một chút cũng không sao."],
["大声说中文，你最棒！","Dàshēng shuō Zhōngwén, nǐ zuì bàng!","Nói to tiếng Trung lên, bạn giỏi nhất!"],
["勇往直前，你可以的！","Yǒngwǎng zhíqián, nǐ kěyǐ de!","Cứ dũng cảm tiến lên, bạn làm được!"],
["今天的热情会感染身边的人。","Jīntiān de rèqíng huì gǎnrǎn shēnbiān de rén.","Nhiệt huyết hôm nay sẽ lan sang người bên cạnh."],
["先深呼吸，再出发。","Xiān shēn hūxī, zài chūfā.","Hít thở sâu rồi hãy xuất phát."],
["失败了也没关系，再来一次！","Shībài le yě méi guānxi, zài lái yí cì!","Thất bại cũng không sao, làm lại lần nữa!"],
["给自己一点儿掌声。","Gěi zìjǐ yìdiǎnr zhǎngshēng.","Vỗ tay cho chính mình một chút."]],
[ // 金牛座 Kim Ngưu: bền bỉ, kiên nhẫn, thích ăn ngon
["今天给自己买点儿好吃的！","Jīntiān gěi zìjǐ mǎi diǎnr hǎochī de!","Hôm nay mua cho mình chút đồ ngon nhé!"],
["慢慢来，好事会来的。","Mànmàn lái, hǎoshì huì lái de.","Từ từ thôi, điều tốt sẽ đến."],
["一边喝茶，一边听音乐吧。","Yìbiān hē chá, yìbiān tīng yīnyuè ba.","Vừa uống trà vừa nghe nhạc nhé."],
["你很有耐心，大家都喜欢你。","Nǐ hěn yǒu nàixīn, dàjiā dōu xǐhuan nǐ.","Bạn rất kiên nhẫn, ai cũng quý bạn."],
["今天用中文说说你最爱吃的菜。","Jīntiān yòng Zhōngwén shuōshuo nǐ zuì ài chī de cài.","Hôm nay dùng tiếng Trung kể món bạn thích nhất nhé."],
["慢慢享受今天的阳光。","Mànmàn xiǎngshòu jīntiān de yángguāng.","Từ từ tận hưởng nắng hôm nay."],
["好好照顾自己的身体。","Hǎohāo zhàogù zìjǐ de shēntǐ.","Chăm sóc sức khỏe của mình thật tốt."],
["稳稳地走，就是最快的路。","Wěnwěn de zǒu, jiù shì zuì kuài de lù.","Đi vững vàng chính là con đường nhanh nhất."],
["今天适合做一顿好吃的饭。","Jīntiān shìhé zuò yí dùn hǎochī de fàn.","Hôm nay hợp nấu một bữa thật ngon."],
["你的坚持，会开出花来。","Nǐ de jiānchí, huì kāi chū huā lái.","Sự bền bỉ của bạn rồi sẽ nở hoa."]],
[ // 双子座 Song Tử: tò mò, thích trò chuyện
["今天多跟朋友聊聊天吧！","Jīntiān duō gēn péngyou liáoliao tiān ba!","Hôm nay trò chuyện với bạn bè nhiều nhé!"],
["你的好奇心是一个宝贝。","Nǐ de hàoqíxīn shì yí ge bǎobèi.","Sự tò mò của bạn là một báu vật."],
["一次做一件事，心情更好。","Yí cì zuò yí jiàn shì, xīnqíng gèng hǎo.","Mỗi lần làm một việc, tâm trạng sẽ tốt hơn."],
["听一首新歌，换个好心情。","Tīng yì shǒu xīn gē, huàn ge hǎo xīnqíng.","Nghe một bài hát mới, đổi tâm trạng vui."],
["有问题就问老师，别客气！","Yǒu wèntí jiù wèn lǎoshī, bié kèqi!","Có thắc mắc cứ hỏi cô, đừng ngại!"],
["今天会有一个有趣的发现。","Jīntiān huì yǒu yí ge yǒuqù de fāxiàn.","Hôm nay sẽ có một phát hiện thú vị."],
["说出你的想法，大家想听。","Shuō chū nǐ de xiǎngfǎ, dàjiā xiǎng tīng.","Nói ra suy nghĩ của bạn, mọi người muốn nghe."],
["换个角度看，世界不一样。","Huàn ge jiǎodù kàn, shìjiè bù yíyàng.","Đổi góc nhìn, thế giới sẽ khác."],
["和老朋友见个面吧。","Hé lǎo péngyou jiàn ge miàn ba.","Gặp lại một người bạn cũ nhé."],
["今天少看手机，多看看身边的人。","Jīntiān shǎo kàn shǒujī, duō kànkan shēnbiān de rén.","Hôm nay bớt nhìn điện thoại, nhìn người bên cạnh nhiều hơn."]],
[ // 巨蟹座 Cự Giải: yêu gia đình, chu đáo
["今天给家人一个大大的拥抱。","Jīntiān gěi jiārén yí ge dàdà de yōngbào.","Hôm nay ôm người nhà một cái thật chặt."],
["在家休息一下，很舒服。","Zài jiā xiūxi yíxià, hěn shūfu.","Ở nhà nghỉ ngơi một chút, thật dễ chịu."],
["别忘了照顾好自己。","Bié wàngle zhàogù hǎo zìjǐ.","Đừng quên chăm sóc bản thân nhé."],
["给妈妈打个电话，说“我爱你”。","Gěi māma dǎ ge diànhuà, shuō “wǒ ài nǐ”.","Gọi điện cho mẹ, nói “wǒ ài nǐ”."],
["今天适合和家人一起吃饭。","Jīntiān shìhé hé jiārén yìqǐ chīfàn.","Hôm nay hợp để ăn cơm cùng gia đình."],
["家是最温暖的地方。","Jiā shì zuì wēnnuǎn de dìfang.","Nhà là nơi ấm áp nhất."],
["你的关心让别人很感动。","Nǐ de guānxīn ràng biérén hěn gǎndòng.","Sự quan tâm của bạn làm người khác cảm động."],
["今天对自己也温柔一点儿。","Jīntiān duì zìjǐ yě wēnróu yìdiǎnr.","Hôm nay cũng dịu dàng với chính mình nhé."],
["难过的时候，记得还有我们。","Nánguò de shíhou, jìde hái yǒu wǒmen.","Lúc buồn, nhớ là còn có chúng mình."],
["泡一杯热茶，慢慢喝。","Pào yì bēi rè chá, mànmàn hē.","Pha một tách trà nóng, uống thật chậm."]],
[ // 狮子座 Sư Tử: tự tin, thích tỏa sáng
["你是最亮的星，加油！","Nǐ shì zuì liàng de xīng, jiāyóu!","Bạn là ngôi sao sáng nhất, cố lên!"],
["今天穿你最喜欢的衣服吧！","Jīntiān chuān nǐ zuì xǐhuan de yīfu ba!","Hôm nay mặc bộ đồ bạn thích nhất nhé!"],
["自信的你最好看。","Zìxìn de nǐ zuì hǎokàn.","Bạn tự tin là đẹp nhất."],
["今天对自己说：“我真棒！”","Jīntiān duì zìjǐ shuō: “Wǒ zhēn bàng!”","Hôm nay tự nói với mình: “Mình giỏi thật!”"],
["狮子座今天适合大声说中文！","Shīzi zuò jīntiān shìhé dàshēng shuō Zhōngwén!","Sư Tử hôm nay hợp để nói tiếng Trung thật to!"],
["你的笑容像太阳一样。","Nǐ de xiàoróng xiàng tàiyáng yíyàng.","Nụ cười của bạn như mặt trời."],
["舞台已经准备好了，就等你了！","Wǔtái yǐjīng zhǔnbèi hǎo le, jiù děng nǐ le!","Sân khấu đã sẵn sàng, chỉ chờ bạn thôi!"],
["今天帮助一个需要帮助的人。","Jīntiān bāngzhù yí ge xūyào bāngzhù de rén.","Hôm nay giúp một người cần giúp đỡ."],
["大方地接受别人的赞美吧。","Dàfang de jiēshòu biérén de zànměi ba.","Hãy vui vẻ đón nhận lời khen của người khác."],
["做最好的自己，就是成功。","Zuò zuì hǎo de zìjǐ, jiù shì chénggōng.","Làm phiên bản tốt nhất của mình chính là thành công."]],
[ // 处女座 Xử Nữ: cẩn thận, tỉ mỉ
["你很细心，朋友都很放心。","Nǐ hěn xìxīn, péngyou dōu hěn fàngxīn.","Bạn rất chu đáo, bạn bè ai cũng yên tâm."],
["不用太完美，开心就好。","Búyòng tài wánměi, kāixīn jiù hǎo.","Không cần quá hoàn hảo, vui là được."],
["今天整理一下房间吧。","Jīntiān zhěnglǐ yíxià fángjiān ba.","Hôm nay dọn dẹp phòng một chút nhé."],
["放轻松，事情会越来越好。","Fàng qīngsōng, shìqing huì yuè lái yuè hǎo.","Thả lỏng đi, mọi việc sẽ ngày càng tốt."],
["把笔顺写对，汉字更漂亮。","Bǎ bǐshùn xiě duì, Hànzì gèng piàoliang.","Viết đúng thứ tự nét, chữ Hán sẽ đẹp hơn."],
["小事做好了，就是大事。","Xiǎoshì zuò hǎo le, jiù shì dàshì.","Làm tốt việc nhỏ cũng là việc lớn."],
["今天对自己宽容一点儿。","Jīntiān duì zìjǐ kuānróng yìdiǎnr.","Hôm nay bao dung với bản thân một chút."],
["列一个清单，心里更踏实。","Liè yí ge qīngdān, xīnli gèng tāshi.","Lập một danh sách, trong lòng sẽ yên tâm hơn."],
["干净的桌子，带来好心情。","Gānjìng de zhuōzi, dàilái hǎo xīnqíng.","Bàn sạch sẽ mang lại tâm trạng tốt."],
["你的认真，大家都看得见。","Nǐ de rènzhēn, dàjiā dōu kàn de jiàn.","Sự chăm chỉ của bạn, mọi người đều thấy."]],
[ // 天秤座 Thiên Bình: cân bằng, hòa đồng, yêu cái đẹp
["和朋友一起，更开心！","Hé péngyou yìqǐ, gèng kāixīn!","Ở cùng bạn bè, vui hơn!"],
["工作和休息，都很重要。","Gōngzuò hé xiūxi, dōu hěn zhòngyào.","Làm việc và nghỉ ngơi đều quan trọng."],
["选不好的时候，听听自己的心。","Xuǎn bu hǎo de shíhou, tīngting zìjǐ de xīn.","Khi phân vân, hãy lắng nghe lòng mình."],
["你的笑容很好看，今天多笑笑。","Nǐ de xiàoróng hěn hǎokàn, jīntiān duō xiàoxiao.","Nụ cười của bạn rất đẹp, hôm nay cười nhiều nhé."],
["今天用中文夸一夸朋友吧。","Jīntiān yòng Zhōngwén kuā yi kuā péngyou ba.","Hôm nay dùng tiếng Trung khen bạn bè một chút nhé."],
["今天适合穿得漂漂亮亮的。","Jīntiān shìhé chuān de piàopiaoliàngliàng de.","Hôm nay hợp diện thật đẹp."],
["家和万事兴。","Jiā hé wànshì xīng.","Gia đình hòa thuận thì vạn sự hưng thịnh."],
["去喝杯咖啡，享受一下时光。","Qù hē bēi kāfēi, xiǎngshòu yíxià shíguāng.","Đi uống ly cà phê, tận hưởng chút thời gian."],
["你让身边的人感到舒服。","Nǐ ràng shēnbiān de rén gǎndào shūfu.","Bạn làm người bên cạnh thấy dễ chịu."],
["美好的事情正在发生。","Měihǎo de shìqing zhèngzài fāshēng.","Những điều tốt đẹp đang diễn ra."]],
[ // 天蝎座 Thiên Yết: tập trung, sâu sắc, kiên trì
["你很专心，今天的事一定能做好。","Nǐ hěn zhuānxīn, jīntiān de shì yídìng néng zuò hǎo.","Bạn rất tập trung, việc hôm nay chắc chắn sẽ làm tốt."],
["有心事就说出来，别放在心里。","Yǒu xīnshì jiù shuō chūlai, bié fàng zài xīnli.","Có tâm sự thì nói ra, đừng giữ trong lòng."],
["坚持下去，你会看到结果。","Jiānchí xiàqu, nǐ huì kàndào jiéguǒ.","Cứ kiên trì, bạn sẽ thấy kết quả."],
["关上手机，好好休息一下。","Guānshang shǒujī, hǎohāo xiūxi yíxià.","Tắt điện thoại, nghỉ ngơi cho thật tốt."],
["今天学一个有意思的中文词吧。","Jīntiān xué yí ge yǒu yìsi de Zhōngwén cí ba.","Hôm nay học một từ tiếng Trung thú vị nhé."],
["相信你的直觉。","Xiāngxìn nǐ de zhíjué.","Hãy tin vào trực giác của bạn."],
["真正的朋友，一个就够了。","Zhēnzhèng de péngyou, yí ge jiù gòu le.","Bạn thật lòng, một người là đủ."],
["放下过去，轻松向前。","Fàngxià guòqù, qīngsōng xiàng qián.","Buông bỏ quá khứ, nhẹ nhàng bước tiếp."],
["你比你想的更坚强。","Nǐ bǐ nǐ xiǎng de gèng jiānqiáng.","Bạn mạnh mẽ hơn bạn nghĩ."],
["今天给自己一点儿安静的时间。","Jīntiān gěi zìjǐ yìdiǎnr ānjìng de shíjiān.","Hôm nay dành cho mình chút thời gian yên tĩnh."]],
[ // 射手座 Nhân Mã: thích đi đây đi đó, lạc quan
["世界很大，出去走走吧！","Shìjiè hěn dà, chūqu zǒuzou ba!","Thế giới rộng lớn, ra ngoài dạo chơi nhé!"],
["开开心心的一天，从现在开始。","Kāikāixīnxīn de yì tiān, cóng xiànzài kāishǐ.","Một ngày vui vẻ bắt đầu từ bây giờ."],
["计划一次小旅行吧。","Jìhuà yí cì xiǎo lǚxíng ba.","Lên kế hoạch cho một chuyến đi nhỏ nhé."],
["你的笑声能让大家开心。","Nǐ de xiàoshēng néng ràng dàjiā kāixīn.","Tiếng cười của bạn làm mọi người vui."],
["想去中国旅行？先学会问路吧！","Xiǎng qù Zhōngguó lǚxíng? Xiān xuéhuì wèn lù ba!","Muốn đi du lịch Trung Quốc? Học cách hỏi đường trước nhé!"],
["读万卷书，行万里路。","Dú wàn juàn shū, xíng wàn lǐ lù.","Đọc vạn quyển sách, đi vạn dặm đường."],
["今天去一个没去过的地方。","Jīntiān qù yí ge méi qùguo de dìfang.","Hôm nay đến một nơi chưa từng đến."],
["你的乐观会带来好运。","Nǐ de lèguān huì dàilái hǎoyùn.","Sự lạc quan của bạn sẽ mang lại may mắn."],
["拍一张好看的照片吧。","Pāi yì zhāng hǎokàn de zhàopiàn ba.","Chụp một tấm ảnh thật đẹp nhé."],
["自由的风，正在等你。","Zìyóu de fēng, zhèngzài děng nǐ.","Ngọn gió tự do đang chờ bạn."]],
[ // 摩羯座 Ma Kết: chăm chỉ, có mục tiêu
["你很努力，别忘了休息。","Nǐ hěn nǔlì, bié wàngle xiūxi.","Bạn rất chăm chỉ, đừng quên nghỉ ngơi."],
["给自己定一个小目标吧。","Gěi zìjǐ dìng yí ge xiǎo mùbiāo ba.","Đặt cho mình một mục tiêu nhỏ nhé."],
["今天早点儿睡觉。","Jīntiān zǎo diǎnr shuìjiào.","Hôm nay đi ngủ sớm một chút."],
["认真的人最漂亮。","Rènzhēn de rén zuì piàoliang.","Người chăm chỉ nghiêm túc là đẹp nhất."],
["一步一步来，HSK考试没问题！","Yí bù yí bù lái, HSK kǎoshì méi wèntí!","Từng bước một, thi HSK không thành vấn đề!"],
["天道酬勤。","Tiān dào chóu qín.","Trời không phụ người chăm chỉ."],
["今天给自己放个小假。","Jīntiān gěi zìjǐ fàng ge xiǎo jià.","Hôm nay cho mình nghỉ một chút."],
["你走的每一步都算数。","Nǐ zǒu de měi yí bù dōu suànshù.","Mỗi bước bạn đi đều có giá trị."],
["成功不着急，慢慢来。","Chénggōng bù zháojí, mànmàn lái.","Thành công không vội, cứ từ từ."],
["和家人一起吃顿饭吧。","Hé jiārén yìqǐ chī dùn fàn ba.","Ăn một bữa cơm với gia đình nhé."]],
[ // 水瓶座 Bảo Bình: sáng tạo, nhiều ý tưởng mới
["你的想法很特别，说出来吧。","Nǐ de xiǎngfǎ hěn tèbié, shuō chūlai ba.","Ý tưởng của bạn rất đặc biệt, nói ra đi."],
["今天试试一条新的路回家。","Jīntiān shìshi yì tiáo xīn de lù huí jiā.","Hôm nay thử đi một con đường mới về nhà."],
["画一幅小画，放松一下。","Huà yì fú xiǎo huà, fàngsōng yíxià.","Vẽ một bức tranh nhỏ, thư giãn chút."],
["和新朋友聊聊天吧。","Hé xīn péngyou liáoliao tiān ba.","Trò chuyện với một người bạn mới nhé."],
["玩一个汉字游戏，放松一下。","Wán yí ge Hànzì yóuxì, fàngsōng yíxià.","Chơi một trò chơi chữ Hán, thư giãn chút."],
["与众不同，才是你。","Yǔ zhòng bù tóng, cái shì nǐ.","Khác biệt mới đúng là bạn."],
["今天会遇到一个有趣的人。","Jīntiān huì yùdào yí ge yǒuqù de rén.","Hôm nay sẽ gặp một người thú vị."],
["看看星星，想想未来。","Kànkan xīngxing, xiǎngxiang wèilái.","Ngắm sao, nghĩ về tương lai."],
["给朋友一个小惊喜吧。","Gěi péngyou yí ge xiǎo jīngxǐ ba.","Tạo cho bạn bè một bất ngờ nhỏ nhé."],
["你的创意会让世界更有趣。","Nǐ de chuàngyì huì ràng shìjiè gèng yǒuqù.","Sự sáng tạo của bạn sẽ làm thế giới thú vị hơn."]],
[ // 双鱼座 Song Ngư: mơ mộng, dịu dàng, yêu nghệ thuật
["听着音乐，做个白日梦吧。","Tīngzhe yīnyuè, zuò ge báirìmèng ba.","Vừa nghe nhạc vừa mơ mộng một chút nhé."],
["今天看一部好看的电影。","Jīntiān kàn yí bù hǎokàn de diànyǐng.","Hôm nay xem một bộ phim hay."],
["你很温柔，说话也很好听。","Nǐ hěn wēnróu, shuōhuà yě hěn hǎotīng.","Bạn rất dịu dàng, nói chuyện cũng dễ nghe."],
["做个好梦，明天继续加油！","Zuò ge hǎo mèng, míngtiān jìxù jiāyóu!","Mơ một giấc mơ đẹp, mai lại tiếp tục cố gắng!"],
["用中文写一首小诗吧。","Yòng Zhōngwén xiě yì shǒu xiǎo shī ba.","Viết một bài thơ nhỏ bằng tiếng Trung nhé."],
["月亮很美，你也是。","Yuèliang hěn měi, nǐ yě shì.","Trăng rất đẹp, bạn cũng vậy."],
["今天写下三件开心的事。","Jīntiān xiě xià sān jiàn kāixīn de shì.","Hôm nay viết ra ba điều vui."],
["你的善良会被温柔以待。","Nǐ de shànliáng huì bèi wēnróu yǐ dài.","Lòng tốt của bạn sẽ được đáp lại dịu dàng."],
["去看看海，或者看看海的照片。","Qù kànkan hǎi, huòzhě kànkan hǎi de zhàopiàn.","Đi ngắm biển, hoặc ngắm ảnh biển cũng được."],
["相信美好，美好就会来。","Xiāngxìn měihǎo, měihǎo jiù huì lái.","Tin vào điều tốt đẹp, điều tốt đẹp sẽ đến."]]
];
// Chữ may mắn 幸运字: chữ mang ý tốt lành (không theo cấp HSK). [chữ, pinyin, nghĩa]
window.TD_CHU=[["福","fú","phúc"],["喜","xǐ","vui mừng"],["乐","lè","vui vẻ"],["安","ān","bình an"],["和","hé","hòa thuận"],["美","měi","đẹp"],["爱","ài","yêu thương"],["春","chūn","mùa xuân"],["光","guāng","ánh sáng"],["心","xīn","tấm lòng"],["梦","mèng","giấc mơ"],["笑","xiào","nụ cười"],["暖","nuǎn","ấm áp"],["星","xīng","ngôi sao"],["花","huā","hoa"],["甜","tián","ngọt ngào"],["勇","yǒng","dũng cảm"],["顺","shùn","thuận lợi"],["吉","jí","cát tường"],["运","yùn","vận may"],["康","kāng","khỏe mạnh"],["静","jìng","yên tĩnh"],["晴","qíng","trời quang"],["力","lì","sức mạnh"],["新","xīn","mới mẻ"],["真","zhēn","chân thật"],["善","shàn","lương thiện"],["慧","huì","trí tuệ"],["恩","ēn","ơn nghĩa"],["诚","chéng","chân thành"],["信","xìn","niềm tin"],["望","wàng","hy vọng"],["飞","fēi","bay cao"],["海","hǎi","biển cả"],["山","shān","núi non"],["月","yuè","trăng"],["风","fēng","làn gió"],["云","yún","mây"],["晨","chén","sớm mai"],["进","jìn","tiến lên"],["成","chéng","thành công"],["圆","yuán","viên mãn"],["宁","níng","an yên"],["欢","huān","hân hoan"],["友","yǒu","bạn bè"],["家","jiā","gia đình"],["闲","xián","thong thả"]];
window.TD_MAU=[["红色","hóngsè","đỏ","#E0545F"],["蓝色","lánsè","xanh dương","#3B87D6"],["绿色","lǜsè","xanh lá","#2E9E73"],["黄色","huángsè","vàng","#C99A14"],
  ["紫色","zǐsè","tím","#7C6BD6"],["橙色","chéngsè","cam","#E7823A"],["粉色","fěnsè","hồng","#D24E86"],["白色","báisè","trắng","#B9BCC9"]];
// TD_CHON(ngày): chọn thông điệp cho một ngày → {cau:[câu,pinyin,nghĩa], cung (-1 = theo ngày), mau, chu, mua}
window.TD_CHON=function(d){
  const C=window.TD_CAU,G=window.TD_CUNG,M=window.TD_MAU,CHU=window.TD_CHU;
  d=d||new Date();
  const k=Math.round((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(2026,0,1))/864e5),mod=(a,n)=>((a%n)+n)%n;
  const md=(d.getMonth()+1)*100+d.getDate();let mua=9,dau=0;G.forEach((g,i)=>{if(g[3]<=md&&g[3]>dau){dau=g[3];mua=i}});
  let cung='';try{cung=localStorage.getItem('llCung')||''}catch(e){}
  const ci=cung===''?-1:+cung;
  const R=window.TD_CUNG_CAU&&ci>=0&&window.TD_CUNG_CAU[ci];   // đã chọn cung: câu riêng của cung, xoay theo ngày
  return{cau:R?R[mod(k,R.length)]:C[mod(k,C.length)],cung:ci,mau:ci<0?null:M[mod(k*3+ci,M.length)],chu:ci<0?null:CHU[mod(k*7+ci*11,CHU.length)],mua};
};
// TD_VE(el, ngày): vẽ khối thông điệp cho một ngày bất kỳ (lịch xé gọi lại khi xé sang ngày mai).
window.TD_VE=function(el,d){
  const C=window.TD_CAU,G=window.TD_CUNG,M=window.TD_MAU,CHU=window.TD_CHU;
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  d=d||new Date();
  const k=Math.round((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(2026,0,1))/864e5),mod=(a,n)=>((a%n)+n)%n;
  // cung của mùa (theo ngày dương); trước 20/1 vẫn là Ma Kết
  const md=(d.getMonth()+1)*100+d.getDate();let mua=9,dau=0;G.forEach((g,i)=>{if(g[3]<=md&&g[3]>dau){dau=g[3];mua=i}});
  let cung='';try{cung=localStorage.getItem('llCung')||''}catch(e){}
  const ci=cung===''?-1:+cung,c=window.TD_CHON(d).cau;
  let may;
  if(ci>=0){const m=M[mod(k*3+ci,M.length)],z=CHU[mod(k*7+ci*11,CHU.length)];
    may='<div class="td-may"><span><b lang="zh">'+G[ci][0]+'</b>'+G[ci][2]+'</span><span>幸运色 <i style="--m:'+m[3]+'"></i><b lang="zh">'+m[0]+'</b>'+m[2]+'</span><span>幸运字 <b lang="zh">'+z[0]+'</b>'+esc(z[2])+'</span></div>';}
  else may='<div class="td-may nhe">Mùa này là <b lang="zh">'+G[mua][0]+'</b> '+G[mua][2]+' — chọn cung của bạn để nhận thông điệp riêng.</div>';
  el.innerHTML='<div class="td-dau"><span class="td-ten">Thông điệp hôm nay <b lang="zh">今日寄语</b></span><label class="td-chon">Cung của bạn <select><option value="">Theo ngày</option>'+
    G.map((g,i)=>'<option value="'+i+'">'+g[0]+' · '+g[2]+'</option>').join('')+'</select></label></div>'+
    '<p class="td-zh" lang="zh">'+c[0]+'</p><p class="td-py">'+esc(c[1])+'</p><p class="td-vi">'+esc(c[2])+'</p>'+may;
  const s=el.querySelector('select');s.value=cung;
  s.addEventListener('change',()=>{try{localStorage.setItem('llCung',s.value)}catch(e){}document.querySelectorAll('.td').forEach(x=>window.TD_VE(x,x._ngay))});
  el._ngay=d;
};
document.querySelectorAll('.td').forEach(el=>window.TD_VE(el));
