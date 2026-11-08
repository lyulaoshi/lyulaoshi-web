// Dữ liệu lịch hôm nay (trang chủ): chữ HSK 1 (dùng làm 幸运字 trong thông điệp) + cặp 宜/忌. Mỗi ngày một chữ HSK 1, xoay vòng theo ngày — mọi học viên cùng thấy một chữ.
// Mỗi dòng: [chữ, pinyin, nghĩa, từ ghép, pinyin từ, nghĩa từ, câu ví dụ, pinyin câu, nghĩa câu]. Bản nháp — cô duyệt lại.
window.LICH_CHU=[
["人","rén","người","中国人","Zhōngguó rén","người Trung Quốc","我是越南人。","Wǒ shì Yuènán rén.","Tôi là người Việt Nam."],
["水","shuǐ","nước","喝水","hē shuǐ","uống nước","我想喝水。","Wǒ xiǎng hē shuǐ.","Tôi muốn uống nước."],
["大","dà","to, lớn","大学","dàxué","đại học","这个苹果很大。","Zhège píngguǒ hěn dà.","Quả táo này rất to."],
["小","xiǎo","nhỏ, bé","小狗","xiǎo gǒu","chó con","我的房间很小。","Wǒ de fángjiān hěn xiǎo.","Phòng của tôi rất nhỏ."],
["口","kǒu","miệng","门口","ménkǒu","cửa ra vào","我在门口等你。","Wǒ zài ménkǒu děng nǐ.","Tôi đợi bạn ở cửa."],
["日","rì","ngày; mặt trời","生日","shēngrì","sinh nhật","今天是我的生日。","Jīntiān shì wǒ de shēngrì.","Hôm nay là sinh nhật tôi."],
["月","yuè","tháng; mặt trăng","一月","yī yuè","tháng Một","我十一月去北京。","Wǒ shíyī yuè qù Běijīng.","Tháng Mười Một tôi đi Bắc Kinh."],
["山","shān","núi","爬山","pá shān","leo núi","周末我们去爬山。","Zhōumò wǒmen qù pá shān.","Cuối tuần chúng mình đi leo núi."],
["天","tiān","trời; ngày","今天","jīntiān","hôm nay","今天天气很好。","Jīntiān tiānqì hěn hǎo.","Hôm nay thời tiết rất đẹp."],
["心","xīn","tim, lòng","小心","xiǎoxīn","cẩn thận","路上小心！","Lùshang xiǎoxīn!","Đi đường cẩn thận nhé!"],
["书","shū","sách","看书","kàn shū","đọc sách","我喜欢看书。","Wǒ xǐhuan kàn shū.","Tôi thích đọc sách."],
["学","xué","học","学习","xuéxí","học tập","我学习汉语。","Wǒ xuéxí Hànyǔ.","Tôi học tiếng Trung."],
["家","jiā","nhà","回家","huí jiā","về nhà","我们回家吧。","Wǒmen huí jiā ba.","Chúng mình về nhà thôi."],
["吃","chī","ăn","吃饭","chī fàn","ăn cơm","你吃饭了吗？","Nǐ chī fàn le ma?","Bạn ăn cơm chưa?"],
["喝","hē","uống","喝茶","hē chá","uống trà","我们喝茶吧。","Wǒmen hē chá ba.","Chúng mình uống trà nhé."],
["你","nǐ","bạn","你们","nǐmen","các bạn","你今天忙吗？","Nǐ jīntiān máng ma?","Hôm nay bạn có bận không?"],
["我","wǒ","tôi","我们","wǒmen","chúng tôi","我们是朋友。","Wǒmen shì péngyou.","Chúng mình là bạn."],
["爱","ài","yêu","爱好","àihào","sở thích","我爱我的家。","Wǒ ài wǒ de jiā.","Tôi yêu gia đình tôi."],
["门","mén","cửa","开门","kāi mén","mở cửa","请开门。","Qǐng kāi mén.","Mời mở cửa."],
["手","shǒu","tay","手机","shǒujī","điện thoại di động","这是我的手机。","Zhè shì wǒ de shǒujī.","Đây là điện thoại của tôi."],
["车","chē","xe","车站","chēzhàn","bến xe","车站在哪儿？","Chēzhàn zài nǎr?","Bến xe ở đâu?"],
["雨","yǔ","mưa","下雨","xià yǔ","trời mưa","外面下雨了。","Wàimiàn xià yǔ le.","Bên ngoài mưa rồi."],
["花","huā","hoa","买花","mǎi huā","mua hoa","这些花很漂亮。","Zhèxiē huā hěn piàoliang.","Những bông hoa này đẹp quá."],
["星","xīng","sao","星期","xīngqī","tuần; thứ","今天星期五。","Jīntiān xīngqīwǔ.","Hôm nay thứ Sáu."],
["早","zǎo","sớm","早上","zǎoshang","buổi sáng","早上好！","Zǎoshang hǎo!","Chào buổi sáng!"],
["晚","wǎn","muộn; tối","晚上","wǎnshang","buổi tối","晚上我在家。","Wǎnshang wǒ zài jiā.","Buổi tối tôi ở nhà."],
["朋","péng","bạn","朋友","péngyou","bạn bè","他是我的好朋友。","Tā shì wǒ de hǎo péngyou.","Bạn ấy là bạn thân của tôi."],
["名","míng","tên","名字","míngzi","tên","你叫什么名字？","Nǐ jiào shénme míngzi?","Bạn tên là gì?"],
["字","zì","chữ","汉字","Hànzì","chữ Hán","汉字很有意思。","Hànzì hěn yǒu yìsi.","Chữ Hán rất thú vị."],
["飞","fēi","bay","飞机","fēijī","máy bay","我坐飞机去上海。","Wǒ zuò fēijī qù Shànghǎi.","Tôi đi máy bay đến Thượng Hải."],
["电","diàn","điện","电话","diànhuà","điện thoại","我给你打电话。","Wǒ gěi nǐ dǎ diànhuà.","Tôi gọi điện cho bạn."],
["买","mǎi","mua","买东西","mǎi dōngxi","mua đồ","我去商店买东西。","Wǒ qù shāngdiàn mǎi dōngxi.","Tôi ra cửa hàng mua đồ."],
["来","lái","đến","回来","huílai","trở về","你什么时候来？","Nǐ shénme shíhou lái?","Khi nào bạn đến?"],
["去","qù","đi","去学校","qù xuéxiào","đến trường","我们去学校吧。","Wǒmen qù xuéxiào ba.","Chúng mình đến trường thôi."],
["喜","xǐ","vui; thích","喜欢","xǐhuan","thích","我喜欢中国菜。","Wǒ xǐhuan Zhōngguó cài.","Tôi thích món Trung Quốc."],
["多","duō","nhiều","多少","duōshao","bao nhiêu","这个多少钱？","Zhège duōshao qián?","Cái này bao nhiêu tiền?"],
["年","nián","năm","新年","xīnnián","năm mới","新年快乐！","Xīnnián kuàilè!","Chúc mừng năm mới!"]
];
// 宜 (nên) · 忌 (kiêng) kiểu lịch vạn niên: [nên, nghĩa, kiêng, nghĩa]
window.LICH_YJ=[
["背单词","học thuộc từ","熬夜","thức khuya"],["读课文","đọc bài khoá","偷懒","lười biếng"],["练口语","luyện nói","害羞","ngại ngùng"],
["写汉字","viết chữ Hán","着急","vội vàng"],["听录音","nghe ghi âm","走神","lơ đãng"],["开盒子","mở hộp","拖延","để mai làm"],["问老师","hỏi cô","放弃","bỏ cuộc"]
];
