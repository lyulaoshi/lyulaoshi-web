// Dữ liệu LƯỢNG TỪ 量词 dùng chung cho bài học luong-tu/ và 2 trò xep-hop/, tap-hoa/.
// Cấp lượng từ theo đề cương thi HSK mới 2025 (语法大纲 1.12 · 2.11 · 3.11 · 动量词 2.12 · 3.12); cấp danh từ theo 词汇大纲 2025 (hsk-words.js).
// Cấp của một cặp (lượng từ + danh từ) = cấp cao hơn trong hai cấp.
window.LT=(function(){
  // nhóm: [id, tên Việt, tên Trung, màu]
  const G=[
    ['nguoi','Người','人','coral'],
    ['vat','Con vật','动物','mint'],
    ['hinh','Theo hình dạng','形状','sky'],
    ['do','Đồ vật & sự việc','东西','lav'],
    ['noi','Nơi chốn','地方','peach'],
    ['dung','Đồ đựng & đơn vị','容器·单位','teal'],
    ['tg','Thời gian & động tác','时间·动作','rose']];
  // hình vẽ tay (lưới 48, nét), class f = phần tô nhạt
  const T=s=>'<text x="24" y="'+s[1]+'" text-anchor="middle" font-size="'+s[2]+'" font-weight="800" fill="currentColor" stroke="none" font-family="Be Vietnam Pro,sans-serif">'+s[0]+'</text>';
  const IC={
    '个':'<circle class="f" cx="24" cy="25" r="15"/><path d="M16 20a9 9 0 0 1 7-6"/>',
    '本':'<path class="f" d="M10 8h24a4 4 0 0 1 4 4v28H14a4 4 0 0 1-4-4z"/><path d="M10 36a4 4 0 0 1 4-4h24M18 15h13M18 21h9"/>',
    '家':'<path class="f" d="M9 19h30v21H9z"/><path d="M6 11h36l-2 8H8z"/><path d="M8 19c0 3 5.5 3 5.5 0 0 3 5.5 3 5.5 0 0 3 5 3 5 0 0 3 5.5 3 5.5 0 0 3 5.5 3 5.5 0M20 40V29h8v11"/>',
    '口':'<circle cx="13" cy="20" r="4.5"/><circle class="f" cx="24" cy="15" r="5.5"/><circle cx="35" cy="20" r="4.5"/><path d="M5 38c0-6 3.5-10 8-10s8 4 8 10M14 38c0-8 4.5-13 10-13s10 5 10 13M27 38c0-6 3.5-10 8-10s8 4 8 10"/>',
    '块':'<path class="f" d="M24 8l15 7.5v17L24 40 9 32.5v-17z"/><path d="M9 15.5l15 7.5 15-7.5M24 23v17"/>',
    '元':'<circle class="f" cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="11.5"/>'+T(['¥',30,15]),
    '件':'<path class="f" d="M17 8l-10 5 3.5 8.5 5-2V41h17V19.5l5 2L41 13 31 8c-1 3.5-3.8 5.5-7 5.5S18 11.5 17 8z"/>',
    '只':'<path class="f" d="M9 30c0-8 6-13 13-13 1.5-5 7-8 12-5l5 2.5-5 2c1 9-5 16.5-13 16.5h-7c-3 0-5-1-5-3z"/><circle cx="32" cy="15" r="1.3" fill="currentColor"/><path d="M19 33l-2 7M25 33l1 7"/>',
    '杯':'<path class="f" d="M11 11h21l-2.5 27a3 3 0 0 1-3 2.7H16.5a3 3 0 0 1-3-2.7z"/><path d="M31.5 17H35a5 5 0 0 1 0 10h-4.3M12.2 20h19"/>',
    '条':'<path d="M4 19c6-6 10-6 16 0s10 6 16 0 6-4 8-4M4 31c6-6 10-6 16 0s10 6 16 0 6-4 8-4"/><path class="f" stroke="none" d="M4 19c6-6 10-6 16 0s10 6 16 0 6-4 8-4v12c-2 0-2 0-8 4s-10 6-16 0-10-6-16 0z"/>',
    '位':'<circle cx="24" cy="13" r="6.5"/><path class="f" d="M11 42c0-10 5.5-16 13-16s13 6 13 16z"/><path d="M24 27l-2.5 4 2.5 8 2.5-8z"/>',
    '名':'<rect class="f" x="7" y="12" width="34" height="27" rx="4"/><circle cx="17" cy="23" r="4"/><path d="M11 34c1-4 3-5.5 6-5.5s5 1.5 6 5.5M28 21h8M28 27h6M20 12V7h8v5"/>',
    '间':'<path class="f" d="M8 10h32v30H8z"/><path d="M27 40V26h8v14M13 16h9v8h-9zM17.5 16v8"/>',
    '包':'<path class="f" d="M12 13l3-3.5 3 3.5 3-3.5 3 3.5 3-3.5 3 3.5 3-3.5 3 3.5v25a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z"/><path d="M18 24h12M18 30h8"/>',
    '把':'<path class="f" d="M6 24a18 18 0 0 1 36 0z"/><path d="M24 24v13a4 4 0 0 1-8 0M24 6v0M15 24a9 18 0 0 1 9-18 9 18 0 0 1 9 18"/>',
    '双':'<path class="f" d="M4 30V17h7.5l3 6 8.5 3v4z"/><path class="f" d="M24 39V26h7.5l3 6 8.5 3v4z"/><path d="M4 26h8M24 35h8"/>',
    '张':'<path class="f" d="M8 11h24l8 8v19H8z"/><path d="M32 11v8h8M14 24h14M14 30h19"/>',
    '种':'<circle class="f" cx="14" cy="16" r="7"/><path class="f" d="M34 9l8 13.5H26z"/><rect class="f" x="17" y="28" width="14" height="13" rx="2"/>',
    '层':'<path class="f" d="M24 8l17 7.5L24 23 7 15.5z"/><path d="M7 23.5L24 31l17-7.5M7 31.5L24 39l17-7.5"/>',
    '封':'<rect class="f" x="6" y="12" width="36" height="25" rx="3"/><path d="M7 14l17 12.5L41 14"/>',
    '页':'<path class="f" d="M11 6h19l8 8v28H11z"/><path d="M30 6v8h8M16 18h16M16 24h16M16 30h10"/>'+T(['12',40,7]),
    '辆':'<path class="f" d="M5 31v-6.5l5.5-2 5.5-8.5h15l6.5 8.5 5.5 2V31z"/><circle cx="14" cy="32" r="4.5"/><circle cx="34" cy="32" r="4.5"/><path d="M17 22.5h16M24 14v8.5"/>',
    '节':'<path class="f" d="M19 4h10v40H19z"/><path d="M17.5 17h13M17.5 31h13M29 23c4-2.5 7.5-2.5 11 0-3.5 2.5-7 2.5-11 0z"/>',
    '所':'<path class="f" d="M6 41V23l18-10 18 10v18z"/><path d="M20 41v-9h8v9M24 13V4l8 2.5-8 2.5M11 28h4M33 28h4"/>',
    '段':'<path d="M4 24h7M37 24h7" stroke-dasharray="1 4"/><path d="M13 16v16M35 16v16"/><path class="f" d="M13 21h22v6H13z"/>',
    '头':'<path class="f" d="M14 17c0 14 4 24 10 24s10-10 10-24z"/><path d="M14 19c-6 0-9.5-4-9.5-10M34 19c6 0 9.5-4 9.5-10M20 35h8"/><circle cx="19.5" cy="25" r="1.4" fill="currentColor"/><circle cx="28.5" cy="25" r="1.4" fill="currentColor"/>',
    '句':'<path class="f" d="M8 9h32a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H21l-9 7v-7H8a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3z"/><path d="M12 18h24M12 24h14"/>',
    '公斤':'<path d="M17 20a7 8 0 0 1 14 0"/><path class="f" d="M11 32a13 13 0 0 1 26 0v6a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3z"/>'+T(['kg',37,9]),
    '碗':'<path class="f" d="M6 22h36a18 17 0 0 1-36 0z"/><path d="M18 41h12M17 16c0-3 3-3 3-7M25 16c0-3 3-3 3-7"/>',
    '盘':'<ellipse class="f" cx="24" cy="29" rx="19" ry="8"/><ellipse cx="24" cy="28" rx="11" ry="4"/><path d="M15 26c1-8 17-8 18 0"/>',
    '下':'<path d="M24 6v17M16.5 16l7.5 7.5 7.5-7.5M8 38h32M14 33l-3.5-3.5M34 33l3.5-3.5"/><path class="f" stroke="none" d="M8 38h32v4H8z"/>',
    '次':'<path d="M11 12v24M18 12v24M25 12v24M32 12v24M6 31l34-13"/>',
    '遍':'<path d="M38.5 26A14.5 14.5 0 1 1 33 12.5"/><path d="M35.5 5v8.5H27"/><circle class="f" cx="24" cy="24" r="4"/>'
  };
  // lượng từ: chữ → [pinyin, cấp, nhóm, nghĩa Việt, mẹo, [câu ví dụ Hán, pinyin, Việt]]
  const MW={
    '个':['gè',1,'nguoi','cái, chiếc, người (dùng chung)','Lượng từ “vạn năng”: người, đồ vật tròn hoặc không rõ hình, khái niệm (问题, 字). Không chắc thì 个 vẫn hiểu được, nhưng đừng lạm dụng.',['我有两个中国朋友。','Wǒ yǒu liǎng ge Zhōngguó péngyou.','Tôi có hai người bạn Trung Quốc.']],
    '位':['wèi',2,'nguoi','vị, người (lịch sự)','Nói về người một cách kính trọng: 老师, 客人, 先生. Không dùng cho chính mình.',['这位是我们的老师。','Zhè wèi shì wǒmen de lǎoshī.','Vị này là thầy giáo của chúng tôi.']],
    '名':['míng',2,'nguoi','người (theo nghề, danh sách)','Đếm người theo nghề nghiệp, trong danh sách, văn phong trang trọng: 学生, 医生, 司机. Tự giới thiệu được: 我是一名医生.',['我是一名医生。','Wǒ shì yì míng yīshēng.','Tôi là một bác sĩ.']],
    '口':['kǒu',1,'nguoi','người (trong gia đình)','Chỉ dùng khi đếm người trong nhà: 你家有几口人? Mỗi người là một “miệng ăn”.',['我家有五口人。','Wǒ jiā yǒu wǔ kǒu rén.','Nhà tôi có năm người.']],
    '只':['zhī',1,'vat','con; chiếc (một bên của đôi)','Phần lớn con vật: mèo, chó, chim, gà. Và một bên của thứ đi đôi: 一只手, 一只鞋.',['我家有一只小猫。','Wǒ jiā yǒu yì zhī xiǎo māo.','Nhà tôi có một con mèo nhỏ.']],
    '头':['tóu',3,'vat','con (gia súc lớn)','Con vật to, nặng: bò, lợn, voi.',['山上有一头牛。','Shān shang yǒu yì tóu niú.','Trên núi có một con bò.']],
    '条':['tiáo',2,'hinh','con, chiếc, cái (vật dài)','Vật dài, mềm hoặc uốn lượn: cá, đường, sông, phố, quần, váy.',['这条路很长。','Zhè tiáo lù hěn cháng.','Con đường này rất dài.']],
    '张':['zhāng',3,'hinh','tờ, tấm, cái (vật phẳng)','Vật có mặt phẳng: giấy, vé, ảnh, bản đồ, và cả bàn, giường (vì có mặt phẳng).',['我有两张电影票。','Wǒ yǒu liǎng zhāng diànyǐng piào.','Tôi có hai vé xem phim.']],
    '块':['kuài',1,'hinh','miếng, cục; đồng (tiền)','Vật thành miếng, cục: bánh mì, bánh ngọt, đồng hồ đeo tay. Nói giá tiền hằng ngày: 十块钱.',['我吃了一块蛋糕。','Wǒ chīle yí kuài dàngāo.','Tôi đã ăn một miếng bánh ngọt.']],
    '把':['bǎ',3,'hinh','cái (có tay cầm)','Đồ có tay cầm, cán, chỗ tựa: ghế, ô, dao, chìa khoá.',['门口有一把伞。','Ménkǒu yǒu yì bǎ sǎn.','Ở cửa có một cái ô.']],
    '双':['shuāng',3,'hinh','đôi','Hai thứ đi thành đôi: giày, đũa, mắt, tay. Một chiếc lẻ thì dùng 只.',['这双鞋多少钱？','Zhè shuāng xié duōshao qián?','Đôi giày này bao nhiêu tiền?']],
    '本':['běn',1,'do','quyển, cuốn','Thứ đóng thành quyển: sách, vở, từ điển.',['这本书是我的。','Zhè běn shū shì wǒ de.','Quyển sách này là của tôi.']],
    '件':['jiàn',1,'do','chiếc (áo); việc; món (quà)','Áo, quần áo mặc phía trên; sự việc (事); món quà.',['我想买一件衣服。','Wǒ xiǎng mǎi yí jiàn yīfu.','Tôi muốn mua một chiếc áo.']],
    '辆':['liàng',3,'do','chiếc (xe)','Xe có bánh: 车, 汽车, 自行车, 出租车.',['他买了一辆新车。','Tā mǎile yí liàng xīn chē.','Anh ấy đã mua một chiếc xe mới.']],
    '封':['fēng',3,'do','lá, bức (thư)','Thư từ (thứ được dán kín): 一封信.',['我给妈妈写了一封信。','Wǒ gěi māma xiěle yì fēng xìn.','Tôi đã viết cho mẹ một lá thư.']],
    '页':['yè',3,'do','trang','Trang sách, trang giấy; hay đi với 第: 第十页.',['请打开书，看第十页。','Qǐng dǎkāi shū, kàn dì shí yè.','Mời mở sách, xem trang 10.']],
    '句':['jù',3,'do','câu','Lời nói, câu văn: 一句话.',['我想说几句话。','Wǒ xiǎng shuō jǐ jù huà.','Tôi muốn nói vài câu.']],
    '种':['zhǒng',3,'do','loại, kiểu','Chỉ chủng loại, đi được với rất nhiều danh từ: 这种水果, 两种办法.',['这种水果叫什么？','Zhè zhǒng shuǐguǒ jiào shénme?','Loại hoa quả này gọi là gì?']],
    '家':['jiā',1,'noi','(cửa hàng, công ty…)','Nơi làm ăn, kinh doanh: 商店, 饭店, 公司, 超市, 银行. Tiếng Việt không cần loại từ, tiếng Trung phải có.',['学校旁边有一家超市。','Xuéxiào pángbiān yǒu yì jiā chāoshì.','Cạnh trường có một siêu thị.']],
    '间':['jiān',2,'noi','gian, căn (phòng)','Phòng, gian: 房间, 教室.',['这间教室很大。','Zhè jiān jiàoshì hěn dà.','Phòng học này rất rộng.']],
    '所':['suǒ',3,'noi','ngôi (trường, viện)','Cơ sở như trường học, bệnh viện (trang trọng hơn 个).',['这是一所很有名的大学。','Zhè shì yì suǒ hěn yǒumíng de dàxué.','Đây là một trường đại học rất nổi tiếng.']],
    '层':['céng',3,'noi','tầng, lớp','Tầng nhà, lớp chồng lên nhau.',['我住在三层。','Wǒ zhù zài sān céng.','Tôi sống ở tầng ba.']],
    '杯':['bēi',1,'dung','cốc, tách, ly','Đồ uống đựng trong cốc: nước, trà, sữa, cà phê. Nhưng cái cốc rỗng thì là 一个杯子!',['请给我一杯茶。','Qǐng gěi wǒ yì bēi chá.','Cho tôi một tách trà.']],
    '碗':['wǎn',3,'dung','bát','Thứ đựng trong bát: cơm, mì, canh.',['我吃了两碗米饭。','Wǒ chīle liǎng wǎn mǐfàn.','Tôi đã ăn hai bát cơm.']],
    '盘':['pán',3,'dung','đĩa','Thức ăn bày trên đĩa: 菜, 饺子, 水果.',['我们要了三盘菜。','Wǒmen yàole sān pán cài.','Chúng tôi gọi ba đĩa thức ăn.']],
    '包':['bāo',2,'dung','gói, bao','Thứ đóng gói: kẹo, thuốc, trà…',['我买了两包糖。','Wǒ mǎile liǎng bāo táng.','Tôi đã mua hai gói kẹo.']],
    '公斤':['gōngjīn',3,'dung','ki-lô-gam, cân','Đơn vị cân nặng, đứng thẳng trước danh từ: 两公斤苹果 (không thêm 个). 斤 = nửa cân.',['我要两公斤苹果。','Wǒ yào liǎng gōngjīn píngguǒ.','Tôi lấy hai cân táo.']],
    '元':['yuán',1,'dung','đồng (tiền, văn viết)','元 viết trên bảng giá, hoá đơn; nói chuyện hằng ngày thường dùng 块.',['这本书三十元。','Zhè běn shū sānshí yuán.','Quyển sách này 30 đồng.']],
    '节':['jié',3,'tg','tiết (học); đốt','Tiết học — chia đều như đốt tre: 一节课.',['今天上午有四节课。','Jīntiān shàngwǔ yǒu sì jié kè.','Sáng nay có bốn tiết học.']],
    '段':['duàn',3,'tg','đoạn, khoảng','Một đoạn của thứ kéo dài: thời gian, đường, bài văn.',['这段时间我很忙。','Zhè duàn shíjiān wǒ hěn máng.','Dạo này tôi rất bận.']],
    '下':['xià',1,'tg','một chút, một cái (động tác)','Động từ + 一下: làm thử, làm một chút cho nhẹ nhàng, lịch sự.',['请等一下。','Qǐng děng yíxià.','Xin chờ một chút.']],
    '次':['cì',2,'tg','lần','Số lần làm việc gì: 去过两次. Đứng sau động từ.',['我去过两次北京。','Wǒ qùguo liǎng cì Běijīng.','Tôi đã đến Bắc Kinh hai lần.']],
    '遍':['biàn',3,'tg','lượt (từ đầu đến cuối)','Làm trọn một lượt từ đầu đến cuối: 读一遍, 听两遍.',['请再读一遍。','Qǐng zài dú yí biàn.','Mời đọc lại một lượt.']]
  };
  // danh từ: [chữ, pinyin, 'loại từ Việt|nghĩa', cấp từ, lượng từ chính, lượng từ khác cũng đúng (cách bằng dấu cách), bán ở Tiệm tạp hoá (1/0)]
  const N=[
    ['书','shū','quyển|sách',1,'本','',1],['本子','běnzi','quyển|vở',2,'本','',1],['词典','cídiǎn','cuốn|từ điển',3,'本','',1],
    ['苹果','píngguǒ','quả|táo',1,'个','',1],['鸡蛋','jīdàn','quả|trứng gà',1,'个','',1],['包子','bāozi','cái|bánh bao',1,'个','',1],['杯子','bēizi','cái|cốc',1,'个','只',1],
    ['问题','wèntí','|câu hỏi',1,'个','',0],['字','zì','|chữ',1,'个','',0],['学生','xuésheng','|học sinh',1,'个','名',0],['朋友','péngyou','người|bạn',1,'个','位',0],
    ['商店','shāngdiàn','|cửa hàng',1,'家','个',0],['饭店','fàndiàn','|nhà hàng',1,'家','个',0],['公司','gōngsī','|công ty',1,'家','个',0],['超市','chāoshì','|siêu thị',1,'家','个',0],['银行','yínháng','|ngân hàng',3,'家','个',0],['医院','yīyuàn','|bệnh viện',1,'家','个 所',0],
    ['人','rén','|người (trong nhà)',1,'口','个',0],
    ['面包','miànbāo','miếng|bánh mì',1,'块','个',1],['蛋糕','dàngāo','miếng|bánh ngọt',3,'块','个',1],['手表','shǒubiǎo','chiếc|đồng hồ đeo tay',2,'块','个',1],['钱','qián','|đồng (tiền)',1,'块','元',0],
    ['衣服','yīfu','chiếc|áo',1,'件','',1],['事','shì','|việc',1,'件','',0],['事情','shìqing','|chuyện',2,'件','个',0],['衬衫','chènshān','chiếc|áo sơ mi',3,'件','',1],['礼物','lǐwù','món|quà',3,'件','个',1],
    ['猫','māo','con|mèo',1,'只','',0],['狗','gǒu','con|chó',1,'只','条',0],['鸟','niǎo','con|chim',2,'只','',0],['鸡','jī','con|gà',3,'只','',1],['羊','yáng','con|cừu',3,'只','头',0],['手','shǒu','|bàn tay (một bên)',2,'只','',0],['脚','jiǎo','|bàn chân (một bên)',3,'只','',0],
    ['水','shuǐ','cốc|nước',1,'杯','',1],['茶','chá','tách|trà',1,'杯','',1],['牛奶','niúnǎi','cốc|sữa',1,'杯','',1],['咖啡','kāfēi','cốc|cà phê',2,'杯','',1],['啤酒','píjiǔ','cốc|bia',3,'杯','',1],
    ['鱼','yú','con|cá',2,'条','',1],['路','lù','con|đường',2,'条','段',0],['河','hé','con|sông',3,'条','',0],['街','jiē','con|phố',3,'条','',0],['裤子','kùzi','chiếc|quần',2,'条','',1],['裙子','qúnzi','chiếc|váy',3,'条','',1],['腿','tuǐ','|cẳng chân',3,'条','只',0],
    ['老师','lǎoshī','|thầy / cô giáo',1,'位','个 名',0],['客人','kèrén','vị|khách',3,'位','个',0],['先生','xiānsheng','quý|ông',1,'位','个',0],
    ['医生','yīshēng','|bác sĩ',1,'名','个 位',0],['司机','sījī','|tài xế',3,'名','个 位',0],['运动员','yùndòngyuán','|vận động viên',3,'名','个 位',0],
    ['房间','fángjiān','căn|phòng',1,'间','个',0],['教室','jiàoshì','|phòng học',2,'间','个',0],
    ['糖','táng','gói|kẹo',3,'包','块',1],['药','yào','gói|thuốc',2,'包','种',1],
    ['椅子','yǐzi','cái|ghế',1,'把','',1],['伞','sǎn','cái|ô',3,'把','',1],
    ['鞋','xié','đôi|giày',3,'双','只',1],['筷子','kuàizi','đôi|đũa',3,'双','',1],['眼睛','yǎnjing','đôi|mắt',2,'双','只',0],
    ['桌子','zhuōzi','cái|bàn',1,'张','',1],['床','chuáng','cái|giường',2,'张','',1],['照片','zhàopiàn','tấm|ảnh',3,'张','',1],['纸','zhǐ','tờ|giấy',3,'张','',1],['票','piào','tấm|vé',2,'张','',1],['地图','dìtú','tấm|bản đồ',3,'张','',1],
    ['楼','lóu','|tầng (nhà)',2,'层','',0],
    ['信','xìn','lá|thư',3,'封','',1],
    ['车','chē','chiếc|xe',1,'辆','',1],['汽车','qìchē','chiếc|ô tô',3,'辆','',1],['自行车','zìxíngchē','chiếc|xe đạp',3,'辆','',1],['出租车','chūzūchē','chiếc|taxi',1,'辆','',0],
    ['课','kè','tiết|học',1,'节','',0],
    ['时间','shíjiān','khoảng|thời gian',1,'段','',0],
    ['牛','niú','con|bò',3,'头','',0],
    ['话','huà','câu|nói',3,'句','',0],
    ['肉','ròu','cân|thịt',2,'公斤','块 斤',1],['米','mǐ','cân|gạo',3,'公斤','斤',1],
    ['米饭','mǐfàn','bát|cơm',1,'碗','',1],
    ['菜','cài','đĩa|thức ăn',1,'盘','个',1],['饺子','jiǎozi','đĩa|sủi cảo',1,'盘','个',1],
    ['学校','xuéxiào','ngôi|trường',1,'所','个',0],['大学','dàxué','|trường đại học',1,'所','个',0]
  ].map(([zh,py,v,lv,m,ok,shop])=>{const [cls,vi]=v.split('|');
    return{zh,py,vi,cls,vc:(cls?cls+' ':'')+vi,lv:Math.max(lv,MW[m][1]),m,ok:[m,...(ok?ok.split(' '):[])],shop:!!shop}});
  const NUM=['','一','两','三','四','五','六','七','八','九','十'],NPY=['','yī','liǎng','sān','sì','wǔ','liù','qī','bā','jiǔ','shí'],
        NVI=['','một','hai','ba','bốn','năm','sáu','bảy','tám','chín','mười'];
  // thanh của âm tiết đầu = dấu thanh đầu tiên gặp (mỗi âm tiết một dấu) → quyết định 一 đọc yí hay yì
  const tone4=p=>{const m=p.match(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/);return !!m&&'àèìòùǜ'.includes(m[0])};
  const mwPy=k=>k==='个'?'ge':MW[k][0];
  // cụm số lượng: LT.cum(2,'杯','咖啡') → {zh:'两杯咖啡', py:'liǎng bēi kāfēi'}; n có thể là '这','那','几'
  function cum(n,k,noun){
    const pre=typeof n==='number'?NUM[n]:n;
    let pp=typeof n==='number'?NPY[n]:{这:'zhè',那:'nà',几:'jǐ'}[n];
    if(n===1)pp=tone4(MW[k][0])?'yí':'yì';
    const nn=noun?(typeof noun==='string'?N.find(x=>x.zh===noun):noun):null;
    return{zh:pre+k+(nn?nn.zh:''),py:pp+' '+mwPy(k)+(nn?' '+nn.py:'')};
  }
  const IB=k=>'<svg class="lt-ic" viewBox="0 0 48 48" aria-hidden="true">'+(IC[k]||'')+'</svg>';
  const css=document.createElement('style');
  css.textContent='.lt-ic{display:block;width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;overflow:visible}.lt-ic .f{fill:currentColor;fill-opacity:.16}';
  document.head.appendChild(css);
  return{G,MW,N,IC,icon:IB,cum,NUM,NPY,NVI,
    group:id=>G.find(g=>g[0]===id),
    color:k=>'var(--'+G.find(g=>g[0]===MW[k][2])[3]+')',
    nouns:(lv,shop)=>N.filter(x=>x.lv<=lv&&(!shop||x.shop)),
    mws:lv=>Object.keys(MW).filter(k=>MW[k][1]<=lv)};
})();
