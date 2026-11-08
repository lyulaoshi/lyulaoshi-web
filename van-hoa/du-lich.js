// 文化盒 · Hộ chiếu du hành — dữ liệu 8 trạm (BẢN NHÁP chờ cô duyệt nội dung).
// Mỗi trạm: id, zh (tên), py, vi (tên Việt), bd (biệt danh), mau (màu), cau (6 câu).
// Kiểu câu t: 'c' chọn đáp án · 'ds' Đúng/Sai · 'vt' Việt Nam / Trung Quốc / Cả hai.
// o: các lựa chọn (đáp án đúng ở vị trí a; máy tự xáo khi chơi, trừ ds/vt) · x: giải thích "Biết thêm"
// k: từ khoá thưởng vào Sổ từ [chữ Hán, pinyin, nghĩa]. Thêm trạm: thêm 1 khối + hình bưu thiếp ở HINH trong index.html.
window.VH_TRAM=[
{id:'bj',zh:'北京',py:'Běijīng',vi:'Bắc Kinh',bd:'首都 · Thủ đô',mau:'#C8423B',cau:[
 {t:'c',q:'<b class="zh">故宫</b> (Cố Cung) ngày xưa là gì?',o:['Cung điện của hoàng đế','Ngôi chùa lớn nhất','Trường học của vua','Khu chợ hoàng gia'],a:0,
  x:'Cố Cung, còn gọi Tử Cấm Thành, là hoàng cung của hai triều Minh và Thanh. Nay là bảo tàng, mái ngói vàng, tường đỏ.',k:['故宫','Gùgōng','Cố Cung']},
 {t:'ds',q:'Đứng trên Mặt Trăng có thể nhìn thấy <b class="zh">长城</b> (Vạn Lý Trường Thành) bằng mắt thường.',a:1,
  x:'Đây là chuyện đồn. Trường Thành rất dài nhưng chỉ rộng vài mét, từ Mặt Trăng không thể nhìn thấy. 长城 nghĩa đen là "thành dài".',k:['长城','Chángchéng','Vạn Lý Trường Thành']},
 {t:'c',q:'<b class="zh">京剧</b> là gì?',o:['Kinh kịch, nghệ thuật sân khấu','Một môn võ','Món ăn Bắc Kinh','Lễ hội mùa xuân'],a:0,
  x:'Kinh kịch có hát, múa, võ và vẽ mặt 脸谱. Mặt đỏ thường là người trung nghĩa (như Quan Vũ), mặt trắng là kẻ gian.',k:['京剧','jīngjù','Kinh kịch']},
 {t:'c',q:'"Vịt quay Bắc Kinh" tiếng Trung là gì?',o:['烤鸭','火锅','饺子','包子'],a:0,zh:1,
  x:'烤 kǎo là nướng, 鸭 yā là vịt. Vịt quay được thái mỏng, cuốn bánh tráng mỏng với hành và tương ngọt.',k:['烤鸭','kǎoyā','vịt quay']},
 {t:'c',q:'<b class="zh">胡同</b> ở Bắc Kinh là gì?',o:['Ngõ nhỏ truyền thống','Toà nhà chọc trời','Công viên lớn','Bến xe'],a:0,
  x:'Hutong là những con ngõ hẹp nối các nhà tứ hợp viện 四合院. Đi dạo hutong bằng xích lô là trải nghiệm quen thuộc của du khách.',k:['胡同','hútòng','ngõ nhỏ']},
 {t:'vt',q:'Ăn cơm bằng đũa.',a:2,
  x:'Việt Nam và Trung Quốc đều dùng đũa. Đũa tiếng Trung là 筷子, lượng từ là 双: 一双筷子.',k:['筷子','kuàizi','đũa']}
]},
{id:'xa',zh:'西安',py:'Xī\'ān',vi:'Tây An',bd:'古都 · Cố đô',mau:'#B5652B',cau:[
 {t:'c',q:'<b class="zh">兵马俑</b> là gì?',o:['Tượng lính và ngựa bằng đất nung','Bức tường thành cổ','Tranh vẽ trên lụa','Chuông đồng lớn'],a:0,
  x:'Hàng nghìn tượng binh mã đất nung được chôn theo lăng Tần Thuỷ Hoàng, mỗi tượng một khuôn mặt khác nhau.',k:['兵马俑','bīngmǎyǒng','tượng binh mã']},
 {t:'ds',q:'Ngày xưa Tây An có tên là <b class="zh">长安</b> (Trường An).',a:0,
  x:'Đúng. Trường An là kinh đô của nhiều triều đại, nổi tiếng nhất là nhà Hán và nhà Đường.',k:['长安','Cháng\'ān','Trường An']},
 {t:'c',q:'<b class="zh">秦始皇</b> (Tần Thuỷ Hoàng) nổi tiếng vì điều gì?',o:['Hoàng đế đầu tiên thống nhất Trung Quốc','Nhà thơ lớn đời Đường','Người viết Tây Du Ký','Người phát minh ra giấy'],a:0,
  x:'Năm 221 TCN, Tần Thuỷ Hoàng thống nhất Trung Quốc, thống nhất chữ viết, tiền tệ, đo lường.',k:['皇帝','huángdì','hoàng đế']},
 {t:'c',q:'Con đường thương mại <b class="zh">丝绸之路</b> nổi tiếng nhờ món hàng nào?',o:['Lụa','Gạo','Muối','Than'],a:0,
  x:'Con đường tơ lụa trên bộ khởi đầu từ Trường An, đưa lụa, trà, gốm sang phương Tây.',k:['丝绸','sīchóu','tơ lụa']},
 {t:'c',q:'Tây An nổi tiếng với các món mì. "Mì sợi" tiếng Trung là gì?',o:['面条','米饭','面包','包子'],a:0,zh:1,
  x:'Phương Bắc trồng nhiều lúa mì nên hay ăn mì, bánh bao, sủi cảo; phương Nam ăn cơm nhiều hơn.',k:['面条','miàntiáo','mì sợi']},
 {t:'c',q:'Năm Mão, Việt Nam là con mèo. Trong <b class="zh">十二生肖</b> của Trung Quốc là con gì?',o:['兔 · thỏ','猫 · mèo','虎 · hổ','狗 · chó'],a:0,
  x:'12 con giáp Trung Quốc có thỏ thay vì mèo. Còn lại giống Việt Nam, trừ năm Sửu: Việt Nam là trâu, Trung Quốc là bò 牛.',k:['兔','tù','con thỏ']}
]},
{id:'heb',zh:'哈尔滨',py:'Hā\'ěrbīn',vi:'Cáp Nhĩ Tân',bd:'冰城 · Thành phố băng',mau:'#2F7FC1',cau:[
 {t:'c',q:'Mùa đông, Cáp Nhĩ Tân nổi tiếng với lễ hội gì?',o:['Lễ hội băng tuyết','Lễ hội té nước','Lễ hội thuyền rồng','Lễ hội hoa đăng'],a:0,
  x:'Lễ hội băng tuyết 冰雪节 có lâu đài, tượng tạc bằng băng, ban đêm thắp đèn nhiều màu. Nhiệt độ có khi xuống −30°C.',k:['冰雪','bīngxuě','băng tuyết']},
 {t:'c',q:'Nhiều toà nhà cổ ở Cáp Nhĩ Tân, như nhà thờ <b class="zh">圣索菲亚教堂</b> mái vòm củ hành, mang phong cách nước nào?',o:['Nga','Anh','Nhật Bản','Tây Ban Nha'],a:0,
  x:'Đầu thế kỷ 20, người Nga đến làm đường sắt và sống ở đây rất đông. Phố 中央大街 lát đá, nhiều nhà kiểu châu Âu.',k:['教堂','jiàotáng','nhà thờ']},
 {t:'ds',q:'Mùa đông ở Cáp Nhĩ Tân, hắt cốc nước nóng lên không trung có thể thấy nước biến ngay thành sương băng.',a:0,
  x:'Đúng. Người ta gọi là 泼水成冰 "hắt nước thành băng", trò du khách rất thích thử khi trời dưới −20°C.',k:['冷','lěng','lạnh']},
 {t:'c',q:'Món ăn vặt mùa đông phương Bắc: quả sơn tra xiên que, phủ một lớp đường cứng bóng. Món đó là gì?',o:['冰糖葫芦','麻辣烫','小笼包','烤鸭'],a:0,zh:1,
  x:'冰糖 là đường phèn, 葫芦 là quả bầu hồ lô (xâu quả trông giống). Ngoài trời lạnh, lớp đường không bị chảy.',k:['冰糖葫芦','bīngtáng húlu','kẹo hồ lô']},
 {t:'c',q:'Người Đông Bắc hay nói <b class="zh">嘎哈</b> gàha. Từ này nghĩa là gì?',o:['干什么 · làm gì','多少钱 · bao nhiêu tiền','去哪儿 · đi đâu','几点 · mấy giờ'],a:0,
  x:'嘎哈 là cách nói Đông Bắc của 干什么 "làm gì thế". Tiếng Đông Bắc gần tiếng phổ thông, nghe vui tai, hay xuất hiện trong tiểu phẩm hài.',k:['干什么','gàn shénme','làm gì']},
 {t:'vt',q:'Mùa đông nhà nào cũng có sưởi ấm cả toà nhà, ở trong nhà mặc áo mỏng.',a:1,
  x:'Miền Bắc Trung Quốc có hệ thống sưởi tập trung 暖气: ngoài trời −20°C, trong nhà vẫn 20°C. Miền Bắc Việt Nam rét nhưng nhà thường không có sưởi.',k:['暖气','nuǎnqì','hệ thống sưởi']}
]},
{id:'hz',zh:'杭州',py:'Hángzhōu',vi:'Hàng Châu',bd:'人间天堂 · Thiên đường hạ giới',mau:'#2E8C6A',cau:[
 {t:'ds',q:'Câu <b class="zh">上有天堂，下有苏杭</b> khen Tô Châu và Hàng Châu đẹp như thiên đường.',a:0,
  x:'Đúng: "Trên có thiên đường, dưới có Tô Hàng".',k:['天堂','tiāntáng','thiên đường']},
 {t:'c',q:'<b class="zh">西湖</b> (Tây Hồ) gắn với truyện cổ nào?',o:['Bạch Xà truyện','Tây Du Ký','Tam Quốc diễn nghĩa','Thuỷ Hử'],a:0,
  x:'Trong 白蛇传, Bạch Nương Tử gặp Hứa Tiên ở cầu Đoạn Kiều 断桥 bên Tây Hồ, cạnh đó là tháp Lôi Phong.',k:['西湖','Xīhú','Tây Hồ']},
 {t:'c',q:'Trà Long Tỉnh 龙井 của Hàng Châu là loại trà gì?',o:['绿茶 · trà xanh','红茶 · hồng trà','奶茶 · trà sữa','花茶 · trà hoa'],a:0,
  x:'Long Tỉnh là trà xanh, lá dẹt, nước xanh trong. Lưu ý: 红茶 tiếng Việt gọi là "trà đen".',k:['绿茶','lǜchá','trà xanh']},
 {t:'c',q:'"Uống trà" tiếng Trung nói thế nào?',o:['喝茶','吃茶','打茶','看茶'],a:0,zh:1,
  x:'Đồ uống dùng 喝: 喝茶, 喝水, 喝咖啡. Đồ ăn dùng 吃: 吃饭.',k:['喝茶','hē chá','uống trà']},
 {t:'ds',q:'Rót trà mời khách nên rót thật đầy chén cho thể hiện lòng hiếu khách.',a:1,
  x:'Sai. Có câu 茶满欺人，酒满敬人: trà đầy là coi thường khách, rượu đầy mới là kính. Trà chỉ rót khoảng bảy phần chén.',k:['倒茶','dào chá','rót trà']},
 {t:'vt',q:'Có khách đến nhà, mời khách uống trà.',a:2,
  x:'Cả hai đều vậy. Chữ "trà" của tiếng Việt và 茶 chá có cùng gốc.',k:['茶','chá','trà']}
]},
{id:'qf',zh:'曲阜',py:'Qūfù',vi:'Khúc Phụ',bd:'孔子故乡 · Quê Khổng Tử',mau:'#7A55B8',cau:[
 {t:'c',q:'<b class="zh">孔子</b> (Khổng Tử) là ai?',o:['Nhà tư tưởng, nhà giáo thời Xuân Thu','Vị vua đầu tiên','Nhà thơ đời Đường','Tướng quân thời Tam Quốc'],a:0,
  x:'Khổng Tử sinh ở nước Lỗ, nay là Khúc Phụ, Sơn Đông. Câu nổi tiếng: 学而时习之 – học rồi thường xuyên ôn lại.',k:['孔子','Kǒngzǐ','Khổng Tử']},
 {t:'ds',q:'Tặng đồng hồ treo tường (<b class="zh">送钟</b>) cho ông bà là món quà rất ý nghĩa.',a:1,
  x:'Sai, nên tránh. 送钟 sòng zhōng đọc giống 送终 sòng zhōng là "lo hậu sự". Tặng ô 伞 (giống 散 "tan") cũng kiêng.',k:['钟','zhōng','đồng hồ treo']},
 {t:'c',q:'Người Trung Quốc thường tránh số nào vì đọc gần giống 死 "chết"?',o:['四','八','六','九'],a:0,zh:1,
  x:'四 sì gần 死 sǐ. Số 八 bā gần 发 fā "phát tài" nên được ưa chuộng; 六 là "thuận lợi" 六六大顺.',k:['四','sì','số bốn']},
 {t:'c',q:'Nhận quà hay danh thiếp từ người lớn tuổi, cách lịch sự là gì?',o:['Nhận bằng hai tay','Nhận bằng tay trái','Mở quà ngay và chê','Để quà xuống đất'],a:0,
  x:'Đưa và nhận bằng hai tay thể hiện sự tôn trọng, ở Việt Nam cũng vậy.',k:['双手','shuāngshǒu','hai tay']},
 {t:'vt',q:'Cắm đũa thẳng đứng vào bát cơm là điều kiêng.',a:2,
  x:'Cả hai đều kiêng vì giống bát cơm cúng người đã mất.',k:['碗','wǎn','cái bát']},
 {t:'vt',q:'Ngày Nhà giáo là ngày 20 tháng 11.',a:0,
  x:'Đó là Việt Nam. Ở Trung Quốc, Ngày Nhà giáo 教师节 là 10 tháng 9.',k:['老师','lǎoshī','thầy cô giáo']}
]},
{id:'cd',zh:'成都',py:'Chéngdū',vi:'Thành Đô',bd:'天府之国 · Xứ thiên phủ',mau:'#4E8A3A',cau:[
 {t:'c',q:'Tứ Xuyên là quê hương của con vật quý nào?',o:['熊猫','老虎','猴子','大象'],a:0,zh:1,
  x:'Gấu trúc 熊猫, chữ đầu là "gấu", chữ sau là "mèo". Thành Đô có trung tâm nuôi gấu trúc nổi tiếng.',k:['熊猫','xióngmāo','gấu trúc']},
 {t:'c',q:'<b class="zh">川剧变脸</b> (Xuyên kịch biến diện) là gì?',o:['Diễn viên đổi mặt nạ cực nhanh','Múa lân trên cột','Hát đối đáp','Ảo thuật với lửa'],a:0,
  x:'Diễn viên đổi nhiều mặt nạ chỉ trong chớp mắt, cách làm được giữ bí mật.',k:['变脸','biànliǎn','biến diện, đổi mặt']},
 {t:'c',q:'Đồ ăn Tứ Xuyên nổi tiếng với vị gì?',o:['麻辣 · tê cay','甜 · ngọt','酸 · chua','淡 · nhạt'],a:0,
  x:'Tiêu Tứ Xuyên 花椒 làm tê đầu lưỡi, cộng với ớt thành vị 麻辣.',k:['麻辣','málà','tê cay']},
 {t:'c',q:'"Lẩu" tiếng Trung là gì?',o:['火锅','烤鸭','米线','包子'],a:0,zh:1,
  x:'火 là lửa, 锅 là nồi: nồi trên lửa. Lẩu Tứ Xuyên và Trùng Khánh nổi tiếng nhất.',k:['火锅','huǒguō','lẩu']},
 {t:'ds',q:'Người Thành Đô rất thích ngồi quán trà <b class="zh">茶馆</b> trò chuyện, chơi mạt chược.',a:0,
  x:'Đúng. Thành Đô nổi tiếng nhịp sống thong thả, quán trà có ở khắp nơi.',k:['茶馆','cháguǎn','quán trà']},
 {t:'vt',q:'Trong bữa ăn, gắp thức ăn cho người khác để thể hiện quan tâm.',a:2,
  x:'Cả hai đều có. Gắp thức ăn tiếng Trung là 夹菜; mời ăn thì nói 多吃点儿！',k:['夹菜','jiā cài','gắp thức ăn']}
]},
{id:'gz',zh:'广州',py:'Guǎngzhōu',vi:'Quảng Châu',bd:'花城 · Thành phố hoa',mau:'#C2477F',cau:[
 {t:'c',q:'Buổi sáng uống trà, ăn điểm tâm (há cảo, xíu mại…) kiểu Quảng Đông gọi là gì?',o:['早茶','晚饭','夜宵','下午茶'],a:0,zh:1,
  x:'早茶 là "trà sáng". Người Quảng Đông hay nói 饮茶 (uống trà) theo tiếng Quảng.',k:['早茶','zǎochá','trà sáng, điểm tâm']},
 {t:'c',q:'Được rót trà, người Quảng Đông gõ nhẹ hai ngón tay lên bàn. Ý là gì?',o:['Cảm ơn','Gọi thêm món','Chê trà dở','Muốn thanh toán'],a:0,
  x:'Gõ ngón tay là cách cảm ơn không cần nói, tương truyền bắt đầu từ chuyện vua Càn Long đi vi hành.',k:['谢谢','xièxie','cảm ơn']},
 {t:'c',q:'Người Quảng Châu nói tiếng địa phương nào?',o:['粤语 · tiếng Quảng Đông','上海话 · tiếng Thượng Hải','四川话 · tiếng Tứ Xuyên','东北话 · tiếng Đông Bắc'],a:0,
  x:'Tiếng Quảng Đông 粤语 có nhiều thanh hơn tiếng phổ thông 普通话. Nhiều phim Hồng Kông nói tiếng Quảng.',k:['粤语','Yuèyǔ','tiếng Quảng Đông']},
 {t:'c',q:'Tết Trung thu ăn bánh gì?',o:['月饼','饺子','粽子','汤圆'],a:0,zh:1,
  x:'月饼 là bánh trung thu, hình tròn như trăng rằm, tượng trưng đoàn viên 团圆.',k:['月饼','yuèbing','bánh trung thu']},
 {t:'vt',q:'Trung thu được coi là Tết thiếu nhi, trẻ con là nhân vật chính.',a:0,
  x:'Đó là Việt Nam. Ở Trung Quốc, 中秋节 chủ yếu là ngày cả nhà đoàn tụ, ngắm trăng.',k:['中秋节','Zhōngqiū Jié','Tết Trung thu']},
 {t:'ds',q:'Quảng Châu được gọi là <b class="zh">花城</b> "thành phố hoa", trước Tết có chợ hoa lớn.',a:0,
  x:'Đúng. Đi chợ hoa ngày Tết 逛花市 là phong tục của người Quảng Châu, giống chợ hoa Tết ở Việt Nam.',k:['花','huā','hoa']}
]},
{id:'yn',zh:'云南',py:'Yúnnán',vi:'Vân Nam',bd:'七彩云南 · Vân Nam bảy sắc',mau:'#C99A14',cau:[
 {t:'c',q:'Chọn đúng chữ Hán của "Vân Nam" (phía nam mây):',o:['云南','河南','湖南','海南'],a:0,zh:1,
  x:'云 yún là mây, 南 nán là phía nam. 河南 Hà Nam, 湖南 Hồ Nam, 海南 Hải Nam cũng là tỉnh của Trung Quốc.',k:['云南','Yúnnán','Vân Nam']},
 {t:'c',q:'Trung Quốc có bao nhiêu dân tộc được công nhận chính thức?',o:['56','54','36','100'],a:0,
  x:'Trung Quốc có 56 dân tộc, đông nhất là người Hán. Việt Nam có 54 dân tộc. Vân Nam là tỉnh có nhiều dân tộc nhất.',k:['民族','mínzú','dân tộc']},
 {t:'c',q:'<b class="zh">泼水节</b> (Lễ té nước) của người Thái ở Vân Nam có ý nghĩa gì?',o:['Té nước chúc phúc, đón năm mới','Cầu mưa cho mùa màng','Tiễn mùa đông','Mừng thu hoạch lúa'],a:0,
  x:'Lễ té nước vào khoảng tháng 4, là Tết của người Thái 傣族. Bị té càng nhiều nước càng nhiều phúc.',k:['泼水节','Pōshuǐ Jié','lễ té nước']},
 {t:'c',q:'Món "bún qua cầu" nổi tiếng của Vân Nam là gì?',o:['过桥米线','炸酱面','牛肉面','担担面'],a:0,zh:1,
  x:'Tương truyền người vợ mang canh nóng qua cầu cho chồng đang học, lớp mỡ giữ canh nóng. 米线 là bún.',k:['米线','mǐxiàn','bún']},
 {t:'ds',q:'Tỉnh Vân Nam có đường biên giới với Việt Nam.',a:0,
  x:'Đúng. Ví dụ Lào Cai (Việt Nam) đối diện Hà Khẩu 河口 (Vân Nam).',k:['越南','Yuènán','Việt Nam']},
 {t:'vt',q:'Tết theo lịch âm là ngày lễ lớn nhất trong năm.',a:2,
  x:'Cả hai. Lịch âm tiếng Trung là 农历 (nông lịch), Tết Nguyên Đán là 春节.',k:['农历','nónglì','âm lịch']}
]}
];

// ---- 06/11/2026: 10 ga mới cho tuyến Hoa Bắc và Giang Nam (BẢN NHÁP chờ cô duyệt)
VH_TRAM.push(
{id:'tj',zh:'天津',py:'Tiānjīn',vi:'Thiên Tân',bd:'相声之乡 · Quê tướng thanh',mau:'#2C7A9E',cau:[
 {t:'c',q:'Bánh <b class="zh">狗不理</b> nổi tiếng của Thiên Tân là loại bánh gì?',o:['包子 · bánh bao','月饼 · bánh trung thu','面包 · bánh mì','饺子 · sủi cảo'],a:0,
  x:'Tương truyền ông chủ quán có biệt danh 狗子, bán đắt đến mức không kịp nói chuyện với khách, nên người ta gọi vui là "狗不理" (Cẩu chẳng thèm để ý).',k:['包子','bāozi','bánh bao']},
 {t:'c',q:'<b class="zh">相声</b> mà người Thiên Tân rất mê là gì?',o:['Tấu hài đối đáp','Hát kinh kịch','Múa rối','Ảo thuật'],a:0,
  x:'Tướng thanh thường do hai người diễn: một người pha trò 逗哏, một người phụ hoạ 捧哏. Thiên Tân có rất nhiều rạp tướng thanh.',k:['相声','xiàngsheng','tướng thanh, tấu hài']},
 {t:'ds',q:'Đi tàu cao tốc <b class="zh">高铁</b> từ Bắc Kinh đến Thiên Tân chỉ mất khoảng nửa tiếng.',a:0,
  x:'Đúng. Tuyến Bắc Kinh – Thiên Tân là một trong những tuyến tàu cao tốc đầu tiên của Trung Quốc.',k:['高铁','gāotiě','tàu cao tốc']},
 {t:'c',q:'Món bánh xoắn chiên giòn, giống quai chèo, nổi tiếng ở Thiên Tân gọi là gì?',o:['麻花','油条','月饼','粽子'],a:0,zh:1,
  x:'麻花 xoắn như sợi dây gai 麻. Còn 油条 là quẩy, thường ăn sáng với sữa đậu nành 豆浆.',k:['麻花','máhuā','bánh quai chèo xoắn']},
 {t:'c',q:'<b class="zh">天津之眼</b> (Mắt Thiên Tân) là gì?',o:['Vòng đu quay khổng lồ trên cầu','Ngọn hải đăng','Đài thiên văn','Một bức tượng'],a:0,
  x:'Đây là vòng đu quay xây ngay trên một cây cầu bắc qua sông Hải Hà 海河. Vòng đu quay tiếng Trung là 摩天轮.',k:['摩天轮','mótiānlún','vòng đu quay']},
 {t:'vt',q:'Buổi sáng ra quán ăn sáng: quẩy, bánh bao, sữa đậu nành…',a:2,
  x:'Cả hai đều quen ăn sáng ngoài hàng. Bữa sáng tiếng Trung là 早饭 hoặc 早餐.',k:['早饭','zǎofàn','bữa sáng']}
]},
{id:'cde',zh:'承德',py:'Chéngdé',vi:'Thừa Đức',bd:'避暑山庄 · Sơn trang tránh nóng',mau:'#3F8A4E',cau:[
 {t:'c',q:'<b class="zh">避暑山庄</b> ở Thừa Đức ngày xưa dùng để làm gì?',o:['Nơi vua nhà Thanh nghỉ hè tránh nóng','Trường thi của triều đình','Nơi cất lương thực','Doanh trại quân đội'],a:0,
  x:'避暑 là tránh nóng. Mùa hè các vua nhà Thanh rời Bắc Kinh lên đây ở, có khi vài tháng.',k:['避暑','bìshǔ','tránh nóng']},
 {t:'c',q:'Thừa Đức thuộc tỉnh nào?',o:['河北','河南','山东','山西'],a:0,zh:1,
  x:'河北 Hà Bắc là "phía bắc sông" (Hoàng Hà), 河南 Hà Nam là phía nam sông. 山东, 山西 là phía đông, phía tây núi Thái Hành.',k:['河北','Héběi','tỉnh Hà Bắc']},
 {t:'ds',q:'Sơn trang tránh nóng rộng hơn cả Cố Cung ở Bắc Kinh.',a:0,
  x:'Đúng, rộng gấp mấy lần Cố Cung, có hồ, núi, rừng. Đây là vườn hoàng gia 皇家园林 lớn nhất còn lại ở Trung Quốc.',k:['皇家','huángjiā','hoàng gia']},
 {t:'c',q:'Mùa thu, các vua nhà Thanh thường đến vùng gần Thừa Đức để làm gì?',o:['Đi săn','Đi thi','Gặt lúa','Đánh cá'],a:0,
  x:'Khu săn bắn Mộc Lan 木兰围场 ở gần đó. Đi săn vừa để giải trí vừa để luyện quân.',k:['打猎','dǎliè','đi săn']},
 {t:'c',q:'"Mùa hè" tiếng Trung là gì?',o:['夏天','春天','秋天','冬天'],a:0,zh:1,
  x:'Bốn mùa: 春天 xuân, 夏天 hạ, 秋天 thu, 冬天 đông.',k:['夏天','xiàtiān','mùa hè']},
 {t:'vt',q:'Mùa hè nóng thì lên vùng núi nghỉ mát.',a:2,
  x:'Cả hai. Việt Nam có Đà Lạt, Sa Pa; vua nhà Thanh có Thừa Đức. "Mát mẻ" tiếng Trung là 凉快.',k:['凉快','liángkuai','mát mẻ']}
]},
{id:'py',zh:'平遥',py:'Píngyáo',vi:'Bình Dao',bd:'古城 · Thành cổ',mau:'#A4532D',cau:[
 {t:'c',q:'<b class="zh">平遥古城</b> (tỉnh Sơn Tây) nổi tiếng vì điều gì?',o:['Thành cổ còn nguyên tường thành và phố xưa','Có toà nhà cao nhất nước','Có bãi biển đẹp','Có núi tuyết quanh năm'],a:0,
  x:'Tường thành, phố cổ, nhà cổ thời Minh – Thanh còn giữ gần như nguyên vẹn.',k:['古城','gǔchéng','thành cổ']},
 {t:'c',q:'<b class="zh">日升昌</b> ở Bình Dao là gì?',o:['Tiệm hối phiếu, kiểu "ngân hàng" đầu tiên của Trung Quốc','Quán trà cổ nhất','Lò gốm của vua','Trường học cổ'],a:0,
  x:'Tiệm hối phiếu 票号 giúp thương nhân gửi tiền đi xa bằng giấy, khỏi mang bạc. Thương nhân Sơn Tây 晋商 rất nổi tiếng.',k:['银行','yínháng','ngân hàng']},
 {t:'c',q:'Người Sơn Tây nổi tiếng thích ăn chua. "Giấm" tiếng Trung là gì?',o:['醋','酱','盐','糖'],a:0,zh:1,
  x:'Giấm già Sơn Tây 老陈醋 rất nổi tiếng. 酱 là tương, 盐 là muối, 糖 là đường.',k:['醋','cù','giấm']},
 {t:'ds',q:'<b class="zh">吃醋</b> ngoài nghĩa "ăn giấm" còn có nghĩa là "ghen".',a:0,
  x:'Đúng. 他吃醋了 có thể là "Anh ấy ghen rồi".',k:['吃醋','chīcù','ghen']},
 {t:'c',q:'<b class="zh">刀削面</b> của Sơn Tây là loại mì gì?',o:['Mì được dùng dao gọt thẳng vào nồi','Mì kéo bằng tay','Mì làm từ gạo','Mì ăn liền'],a:0,
  x:'刀 là dao, 削 là gọt. Đầu bếp cầm khối bột, dùng dao gọt từng sợi bay vào nồi nước sôi.',k:['刀削面','dāoxiāomiàn','mì đao tước']},
 {t:'vt',q:'Có thành phố cổ được UNESCO công nhận là di sản thế giới.',a:2,
  x:'Cả hai: Việt Nam có phố cổ Hội An, Trung Quốc có thành cổ Bình Dao (đều được công nhận cuối thập niên 1990).',k:['世界遗产','shìjiè yíchǎn','di sản thế giới']}
]},
{id:'dt',zh:'大同',py:'Dàtóng',vi:'Đại Đồng',bd:'石窟之城 · Thành phố hang đá',mau:'#6B5B95',cau:[
 {t:'c',q:'<b class="zh">云冈石窟</b> (hang đá Vân Cương) có gì?',o:['Hàng vạn tượng Phật khắc vào vách đá','Suối nước nóng','Mỏ vàng cổ','Thư viện cổ'],a:0,
  x:'Các hang được đục từ hơn 1500 năm trước, tượng lớn cao hơn 10 mét, tượng nhỏ chỉ vài phân.',k:['石窟','shíkū','hang đá']},
 {t:'c',q:'<b class="zh">悬空寺</b> gần Đại Đồng đặc biệt ở chỗ nào?',o:['Chùa xây treo trên vách núi','Chùa nằm dưới đáy hồ','Chùa làm hoàn toàn bằng băng','Chùa nhỏ nhất thế giới'],a:0,
  x:'悬空 là treo lơ lửng giữa không trung. Chùa bám vào vách đá dựng đứng, nhìn từ dưới như sắp rơi.',k:['悬空','xuánkōng','treo lơ lửng']},
 {t:'ds',q:'Bức <b class="zh">九龙壁</b> ở Đại Đồng có 9 con rồng.',a:0,
  x:'Đúng. 九 là số lẻ lớn nhất trong 1–9 nên gắn với nhà vua, lại đọc giống 久 "lâu dài".',k:['九','jiǔ','số chín']},
 {t:'c',q:'Đại Đồng được gọi là <b class="zh">煤都</b> "thủ đô ___" vì có rất nhiều thứ này:',o:['Than đá','Muối','Lụa','Trà'],a:0,
  x:'煤 là than. Sơn Tây là một trong những vùng nhiều than đá nhất Trung Quốc.',k:['煤','méi','than đá']},
 {t:'c',q:'"Chùa" trong tên 悬空寺 là chữ nào?',o:['寺','桥','楼','门'],a:0,zh:1,
  x:'寺 sì là chùa (như 寒山寺, 少林寺). 桥 cầu, 楼 lầu, 门 cửa.',k:['寺庙','sìmiào','chùa chiền']},
 {t:'vt',q:'Rồng là biểu tượng của vua chúa.',a:2,
  x:'Cả hai. Nhưng rồng Trung Quốc thời Minh – Thanh của vua thường có 5 móng; rồng Việt thời Lý thì mềm mại như con rắn.',k:['龙','lóng','rồng']}
]},
{id:'nmg',zh:'内蒙古',py:'Nèiměnggǔ',vi:'Nội Mông',bd:'大草原 · Thảo nguyên',mau:'#3D8FA8',cau:[
 {t:'c',q:'Nhà lều tròn của người Mông Cổ trên thảo nguyên gọi là gì?',o:['蒙古包','四合院','土楼','竹楼'],a:0,zh:1,
  x:'Lều tròn dễ tháo lắp để mang theo khi chăn thả gia súc. 四合院 là nhà Bắc Kinh, 土楼 là nhà đất Phúc Kiến, 竹楼 là nhà sàn tre.',k:['蒙古包','Ménggǔbāo','lều Mông Cổ']},
 {t:'c',q:'Lễ hội <b class="zh">那达慕</b> có ba môn thi truyền thống nào?',o:['Đấu vật, đua ngựa, bắn cung','Bơi, chạy, nhảy xa','Cờ tướng, thư pháp, vẽ','Đua thuyền, kéo co, múa lân'],a:0,
  x:'Ba môn "của nam nhi" trên thảo nguyên. Đua ngựa tiếng Trung là 赛马.',k:['赛马','sàimǎ','đua ngựa']},
 {t:'c',q:'<b class="zh">马头琴</b> là nhạc cụ gì?',o:['Đàn kéo có đầu đàn khắc hình đầu ngựa','Trống da ngựa','Sáo trúc','Đàn tranh 21 dây'],a:0,
  x:'马 ngựa, 头 đầu, 琴 đàn. Tiếng đàn trầm, gợi tiếng ngựa hí trên thảo nguyên.',k:['马头琴','mǎtóuqín','đàn đầu ngựa']},
 {t:'ds',q:'Trà sữa truyền thống của người Mông Cổ thường nêm muối chứ không ngọt.',a:0,
  x:'Đúng, gọi là trà sữa mặn 咸奶茶. Trà sữa trân châu ngọt là kiểu uống hiện đại.',k:['奶茶','nǎichá','trà sữa']},
 {t:'c',q:'Đón khách quý, người Mông Cổ thường dâng tặng gì?',o:['哈达 · khăn lụa','花 · bó hoa','钱 · tiền','茶 · gói trà'],a:0,
  x:'Khăn 哈达 (người Mông Cổ hay dùng màu xanh lam) dâng bằng hai tay, kèm chén rượu mời khách.',k:['哈达','hǎdá','khăn ha-đa']},
 {t:'c',q:'<b class="zh">草原</b> là gì?',o:['Thảo nguyên, đồng cỏ rộng','Sa mạc','Rừng rậm','Bờ biển'],a:0,
  x:'草 là cỏ, 原 là đồng bằng rộng. Sa mạc là 沙漠.',k:['草原','cǎoyuán','thảo nguyên']}
]},
{id:'sh',zh:'上海',py:'Shànghǎi',vi:'Thượng Hải',bd:'魔都 · Thành phố hiện đại',mau:'#3A5BA8',cau:[
 {t:'c',q:'<b class="zh">外滩</b> (Bến Thượng Hải) là gì?',o:['Phố ven sông Hoàng Phố với nhiều toà nhà kiểu phương Tây','Khu chợ cá','Bãi tắm biển','Công viên giải trí'],a:0,
  x:'Bên này sông là những toà nhà cổ kiểu châu Âu, bên kia là khu nhà chọc trời Phố Đông 浦东.',k:['外滩','Wàitān','Bến Thượng Hải']},
 {t:'c',q:'Bánh bao nhỏ hấp trong xửng tre, bên trong nhiều nước súp, gọi là gì?',o:['小笼包','烤鸭','麻花','粽子'],a:0,zh:1,
  x:'小 nhỏ, 笼 xửng hấp, 包 bánh bao. Ăn thì cắn một lỗ nhỏ, húp nước trước kẻo bỏng.',k:['小笼包','xiǎolóngbāo','bánh bao súp']},
 {t:'c',q:'<b class="zh">东方明珠</b> ở Thượng Hải là gì?',o:['Tháp truyền hình','Viên ngọc của vua','Một con tàu','Bảo tàng ngọc trai'],a:0,
  x:'Tháp có những quả cầu tròn như hạt ngọc, nên gọi là "Minh châu phương Đông". Tháp truyền hình là 电视塔.',k:['电视塔','diànshìtǎ','tháp truyền hình']},
 {t:'ds',q:'Hai chữ <b class="zh">上海</b> nghĩa là "trên" và "biển".',a:0,
  x:'Đúng: 上 là trên, 海 là biển. Thượng Hải nằm ở cửa sông Trường Giang đổ ra biển.',k:['海','hǎi','biển']},
 {t:'c',q:'Người Thượng Hải chào nhau <b class="zh">侬好</b> nóng hǎo. Đó là tiếng gì?',o:['Tiếng Thượng Hải','Tiếng Quảng Đông','Tiếng Nhật','Tiếng phổ thông'],a:0,
  x:'侬 là "bạn" trong tiếng Thượng Hải; tiếng phổ thông nói 你好.',k:['上海话','Shànghǎihuà','tiếng Thượng Hải']},
 {t:'c',q:'<b class="zh">豫园</b> (Dự Viên) giữa lòng Thượng Hải là gì?',o:['Khu vườn cổ kiểu Giang Nam','Sân vận động','Ga tàu điện ngầm','Trung tâm thương mại'],a:0,
  x:'Dự Viên có non bộ, hồ cá, đình nghỉ; xung quanh là phố cổ bán đồ ăn vặt.',k:['花园','huāyuán','vườn hoa']}
]},
{id:'sz',zh:'苏州',py:'Sūzhōu',vi:'Tô Châu',bd:'园林之城 · Thành phố vườn',mau:'#4A7F7A',cau:[
 {t:'c',q:'Tô Châu nổi tiếng nhất với điều gì?',o:['园林 · vườn cổ','沙漠 · sa mạc','雪山 · núi tuyết','草原 · thảo nguyên'],a:0,
  x:'Vườn Tô Châu như 拙政园 (Chuyết Chính viên) thu nhỏ núi, hồ, cây cối trong một khoảnh sân.',k:['园林','yuánlín','vườn cảnh']},
 {t:'c',q:'Tô Châu được gọi là "Venice phương Đông" vì sao?',o:['Có nhiều kênh nước và cầu đá','Có nhiều người Ý sống ở đó','Có lễ hội mặt nạ','Có nhiều núi cao'],a:0,
  x:'Cảnh 小桥流水人家 – cầu nhỏ, nước chảy, nhà dân – là hình ảnh tiêu biểu của Giang Nam.',k:['小桥流水','xiǎo qiáo liú shuǐ','cầu nhỏ nước chảy']},
 {t:'vt',q:'Nhiều người thuộc câu thơ "Cô Tô thành ngoại Hàn San tự" (姑苏城外寒山寺).',a:2,
  x:'Cả hai. Bài 枫桥夜泊 (Phong Kiều dạ bạc) của Trương Kế đời Đường rất nổi tiếng ở Việt Nam. 姑苏 là tên cũ của Tô Châu.',k:['寒山寺','Hánshān Sì','chùa Hàn San']},
 {t:'c',q:'<b class="zh">苏绣</b> là gì?',o:['Tranh thêu Tô Châu','Bánh ngọt Tô Châu','Điệu hát Tô Châu','Lụa nhuộm Tô Châu'],a:0,
  x:'Thêu Tô Châu nổi tiếng mịn, có tranh thêu hai mặt, mỗi mặt một hình. Thêu là 刺绣.',k:['刺绣','cìxiù','thêu']},
 {t:'ds',q:'Món ăn Tô Châu thiên về vị tê cay như món Tứ Xuyên.',a:1,
  x:'Sai. Món Tô Châu và Giang Nam thường thanh, hơi ngọt. Ngọt là 甜.',k:['甜','tián','ngọt']},
 {t:'c',q:'"Cây cầu" tiếng Trung là gì?',o:['桥','楼','门','路'],a:0,zh:1,
  x:'桥 có bộ 木 (gỗ) vì cầu xưa làm bằng gỗ. Lượng từ: 一座桥.',k:['桥','qiáo','cây cầu']}
]},
{id:'wz',zh:'乌镇',py:'Wūzhèn',vi:'Ô Trấn',bd:'江南水乡 · Thị trấn sông nước',mau:'#2F6F8F',cau:[
 {t:'c',q:'乌镇 là kiểu thị trấn gì?',o:['Thị trấn sông nước, nhà cổ ven kênh','Thị trấn trên núi tuyết','Làng chài ven biển','Thị trấn giữa sa mạc'],a:0,
  x:'水乡 là "làng sông nước". Nhà cổ hai bên kênh, đi lại bằng thuyền và cầu đá.',k:['水乡','shuǐxiāng','vùng sông nước']},
 {t:'c',q:'Từ năm 2014, Ô Trấn là nơi tổ chức hội nghị gì hằng năm?',o:['Hội nghị Internet thế giới','Thế vận hội','Hội chợ trà','Liên hoan phim quốc tế'],a:0,
  x:'Thị trấn cổ mà lại gắn với công nghệ: 世界互联网大会. Internet là 互联网.',k:['互联网','hùliánwǎng','internet']},
 {t:'c',q:'<b class="zh">蓝印花布</b> ở Ô Trấn là gì?',o:['Vải in hoa trắng trên nền xanh chàm','Giấy vẽ tranh màu xanh','Gốm men lam','Áo dài lụa đỏ'],a:0,
  x:'Vải được nhuộm chàm, chỗ in hoa giữ màu trắng. 蓝 là xanh lam.',k:['蓝色','lánsè','màu xanh lam']},
 {t:'c',q:'"Con thuyền" tiếng Trung là gì?',o:['船','车','马','桥'],a:0,zh:1,
  x:'船 chuán. Đi thuyền: 坐船. Lượng từ: 一条船.',k:['船','chuán','thuyền']},
 {t:'ds',q:'Ô Trấn là quê của nhà văn Mao Thuẫn <b class="zh">茅盾</b>.',a:0,
  x:'Đúng. Ở Ô Trấn có nhà cũ của Mao Thuẫn. Nhà văn là 作家.',k:['作家','zuòjiā','nhà văn']},
 {t:'vt',q:'Phố cổ ven sông, du khách ngồi thuyền ngắm nhà cổ.',a:2,
  x:'Cả hai: Hội An có sông Hoài, Giang Nam có Ô Trấn, Chu Trang… Thị trấn cổ là 古镇.',k:['古镇','gǔzhèn','thị trấn cổ']}
]},
{id:'sx',zh:'绍兴',py:'Shàoxīng',vi:'Thiệu Hưng',bd:'鲁迅故乡 · Quê Lỗ Tấn',mau:'#8A3B4A',cau:[
 {t:'c',q:'Thiệu Hưng là quê của nhà văn nào, tác giả "AQ chính truyện"?',o:['鲁迅 · Lỗ Tấn','李白 · Lý Bạch','孔子 · Khổng Tử','曹雪芹 · Tào Tuyết Cần'],a:0,
  x:'Ở Thiệu Hưng có nhà cũ của Lỗ Tấn và trường tư thục 三味书屋 nơi ông đi học hồi nhỏ.',k:['鲁迅','Lǔ Xùn','Lỗ Tấn']},
 {t:'c',q:'Rượu vàng <b class="zh">黄酒</b> Thiệu Hưng chủ yếu ủ từ gì?',o:['Gạo nếp','Nho','Táo','Khoai lang'],a:0,
  x:'Rượu vàng ủ từ gạo nếp, vừa để uống vừa để nấu ăn. Xưa nhà sinh con gái thì chôn rượu, đến khi con lấy chồng mới đào lên: 女儿红.',k:['黄酒','huángjiǔ','rượu vàng']},
 {t:'c',q:'Vương Hy Chi <b class="zh">王羲之</b> được gọi là 书圣 "Thư thánh" vì sao?',o:['Viết thư pháp đẹp bậc nhất','Viết nhiều sách nhất','Mở thư viện đầu tiên','Phát minh ra giấy'],a:0,
  x:'Bài 兰亭序 (Lan Đình tự) của ông viết ở Lan Đình, Thiệu Hưng. Thư pháp là 书法.',k:['书法','shūfǎ','thư pháp']},
 {t:'c',q:'Thuyền <b class="zh">乌篷船</b> của Thiệu Hưng có mui màu gì? (乌 = ?)',o:['Đen','Trắng','Đỏ','Vàng'],a:0,
  x:'乌 là đen (như 乌鸦 con quạ). Người lái vừa chèo tay vừa đạp mái chèo bằng chân.',k:['乌篷船','wūpéngchuán','thuyền mui đen']},
 {t:'ds',q:'<b class="zh">臭豆腐</b> (đậu phụ thối) ngửi thì thối nhưng ăn thì thơm.',a:0,
  x:'Đúng như câu 闻着臭，吃着香. Đậu phụ là 豆腐.',k:['豆腐','dòufu','đậu phụ']},
 {t:'vt',q:'Học sinh phổ thông học truyện của Lỗ Tấn trong giờ Văn.',a:2,
  x:'Cả hai. Học sinh Việt Nam từng học truyện "Thuốc" của Lỗ Tấn; ở Trung Quốc có nhiều bài của ông trong sách giáo khoa.',k:['语文','yǔwén','môn Ngữ văn']}
]},
{id:'nj',zh:'南京',py:'Nánjīng',vi:'Nam Kinh',bd:'六朝古都 · Cố đô sáu triều',mau:'#7A4FA0',cau:[
 {t:'c',q:'Tên <b class="zh">南京</b> nghĩa là gì?',o:['Kinh đô phía nam','Thành phố phía tây','Sông lớn phía nam','Cửa biển phía nam'],a:0,
  x:'京 là kinh đô: 北京 kinh đô phía bắc, 南京 kinh đô phía nam. Nam Kinh từng là kinh đô của nhiều triều đại, trong đó có đầu đời Minh.',k:['京','jīng','kinh đô']},
 {t:'c',q:'Món vịt nổi tiếng của Nam Kinh là gì?',o:['盐水鸭','烤鸭','火锅','麻辣'],a:0,zh:1,
  x:'盐水鸭 là vịt luộc muối, da trắng, thịt mềm. 盐 là muối. Người Nam Kinh được trêu là ăn vịt nhiều nhất nước.',k:['盐','yán','muối']},
 {t:'c',q:'<b class="zh">夫子庙</b> bên sông Tần Hoài là miếu thờ ai?',o:['Khổng Tử','Phật Thích Ca','Quan Vũ','Tần Thuỷ Hoàng'],a:0,
  x:'夫子 ở đây chỉ Khổng Tử. Quanh miếu là phố cổ, tối có thuyền đèn trên sông Tần Hoài 秦淮河.',k:['夫子庙','Fūzǐ Miào','miếu Khổng Tử']},
 {t:'vt',q:'Có Văn Miếu thờ Khổng Tử.',a:2,
  x:'Cả hai. Hà Nội có Văn Miếu – Quốc Tử Giám. Văn Miếu tiếng Trung là 文庙.',k:['文庙','Wénmiào','Văn Miếu']},
 {t:'ds',q:'Nam Kinh từng được gọi là một trong các "lò lửa" <b class="zh">火炉</b> vì mùa hè rất nóng.',a:0,
  x:'Đúng. Nam Kinh, Vũ Hán, Trùng Khánh thường được gọi là "ba lò lửa lớn" 三大火炉.',k:['火炉','huǒlú','lò lửa']},
 {t:'c',q:'<b class="zh">雨花石</b> nổi tiếng ở Nam Kinh là gì?',o:['Đá cuội nhiều màu, vân đẹp','Một loại trà','Hoa nở trong mưa','Gạch xây tường thành'],a:0,
  x:'Tương truyền có vị sư giảng kinh hay đến mức trời mưa hoa, hoa rơi xuống thành đá. 石头 là đá.',k:['石头','shítou','hòn đá']}
]}
);

// Tuyến tàu: thứ tự ga trong tuyến. du:1 = tuyến đã đủ ga; còn lại là tuyến đang soạn (ga cũ tạm xếp vào).
window.VH_TUYEN=[
 {id:'hb',zh:'华北线',vi:'Tuyến Hoa Bắc',mo:'Thủ đô, thành cổ và thảo nguyên',mau:'#C8423B',du:1,ga:['bj','tj','cde','py','dt','nmg']},
 {id:'jn',zh:'江南线',vi:'Tuyến Giang Nam',mo:'Sông nước, vườn cổ và thi nhân',mau:'#2E8C6A',du:1,ga:['sh','sz','wz','hz','sx','nj']},
 {id:'db',zh:'东北线',vi:'Tuyến Đông Bắc',mo:'Băng tuyết',mau:'#2F7FC1',ga:['heb']},
 {id:'hd',zh:'齐鲁线',vi:'Tuyến Sơn Đông',mo:'Quê hương Khổng Tử',mau:'#7A55B8',ga:['qf']},
 {id:'xb',zh:'西北线',vi:'Tuyến Tây Bắc',mo:'Cố đô và con đường tơ lụa',mau:'#B5652B',ga:['xa']},
 {id:'xn',zh:'西南线',vi:'Tuyến Tây Nam',mo:'Gấu trúc và các dân tộc',mau:'#4E8A3A',ga:['cd','yn']},
 {id:'hn',zh:'华南线',vi:'Tuyến Hoa Nam',mo:'Thành phố hoa và điểm tâm',mau:'#C2477F',ga:['gz']}
];
