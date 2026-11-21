// 文化盒 · Thành phố 平遥 (BẢN THỬ, chờ cô duyệt nội dung). Cùng khung với bac-kinh.js, thien-tan.js, thua-duc.js.
// diem: 8 điểm trên bản đồ (x = X/4, y ≈ Y/3 − 6 theo bản vẽ 400×300). tq: 4 景点, tn: 4 体验, sanh: sảnh ga.
// Ảnh: Wikimedia Commons, giấy phép tự do, đã tải về anh/ (WebP); a = [ảnh, trang nguồn, giấy phép, tác giả].
window.VH_PY={
diem:[
 {id:'chengqiang',loai:'tq',zh:'平遥城墙',vi:'Tường thành',x:19,y:38,ic:'khien'},
 {id:'rishengchang',loai:'tq',zh:'日升昌',vi:'Tiền trang Nhật Thăng Xương',ngan:'Nhật Thăng Xương',x:41,y:60,ic:'tui-tien'},
 {id:'shilou',loai:'tq',zh:'市楼',vi:'Chợ lầu',x:50,y:47,ic:'den-long'},
 {id:'shuanglin',loai:'tq',zh:'双林寺',vi:'Chùa Song Lâm',x:14,y:82,ic:'vuong-mien'},
 {id:'chi',loai:'tn',zh:'吃',vi:'Quán mì Sơn Tây',ngan:'Ẩm thực',x:68,y:33,ic:'tra-sua'},
 {id:'shuo',loai:'tn',zh:'说',vi:'Trò chuyện với chủ trọ',ngan:'Tiếng nói',x:39,y:22,ic:'tin-nhan'},
 {id:'zhu',loai:'tn',zh:'住',vi:'Nhà hang 窑洞',ngan:'Nhà hang',x:70,y:68,ic:'mu'},
 {id:'su',loai:'tn',zh:'俗',vi:'Nghề xưa của thương nhân',ngan:'Phong tục',x:72,y:14,ic:'manh-ghep'}],
tq:{
chengqiang:{zh:'平遥城墙',py:'Píngyáo Chéngqiáng',vi:'Tường thành Bình Dao',ten2:'Thành hình con rùa',chuTay:'平遥城墙 · 龟城',
 anh:["anh/py-cw6-lon.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_city_wall.jpg", "CC BY 3.0", "Gisling"],
 alt:'Tường thành gạch xám rất dài, cứ một quãng lại có một vọng lâu vuông nhô ra',
 gioi:'Tường thành xây lại năm 1370 đời Minh, dài khoảng 6,2 km, cao khoảng 12 m, đến nay vẫn gần như nguyên vẹn. Trên tường có 72 vọng lâu và khoảng 3.000 lỗ châu mai. Thành có 6 cổng: cổng nam là đầu, cổng bắc là đuôi, bốn cổng đông tây là bốn chân, nên người ta gọi là "thành rùa" 龟城, mong thành bền vững, sống lâu như rùa.',
 nhan:[['lich','Xây lại năm 1370'],['khien','Dài khoảng 6,2 km'],['cup','Di sản thế giới 1997']],
 the:[
  {c:'#A4532D',chu:'门',ten:'Cổng nam',phu:'"Đầu rùa" 迎薰门',ic:'sach',tieu:'Cổng Nghênh Huân 迎薰门',p:'Cổng nam 迎薰门 là "đầu rùa". Trên cổng có lầu nhiều tầng mái để canh gác; người ta kể hai giếng nước ngoài cổng là đôi "mắt rùa".',k:['城门','chéngmén','cổng thành'],
   a:["anh/py-cm1.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_Yingxun_Gate.jpg", "CC BY-SA 4.0", "Bairuilong"],alt:'Cổng thành có lầu ba tầng mái trên bức tường gạch, lối vào vòm phía dưới',s:'object-position:50% 40%'},
  {c:'#8A6B4A',chu:'瓮',ten:'Ủng thành',phu:'Vòng tường bọc ngoài cổng',ic:'khien',tieu:'Ủng thành 瓮城',p:'Ngoài mỗi cổng có thêm một vòng tường nhỏ gọi là 瓮城 "thành hình cái vò". Giặc phá được cổng ngoài vẫn bị kẹt trong vòng tường, lính trên cao bắn xuống.',k:['瓮','wèng','cái vò, cái chum'],
   a:["anh/py-cw3.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_City_Wall_2018-06-13_160901.png", "CC BY-SA 4.0", "David290"],alt:'Nhìn từ trên cao: vòng tường vuông bọc ngoài cổng thành',s:'object-position:45% 50%'},
  {c:'#2E8C6A',chu:'楼',ten:'Vọng lâu',phu:'72 lầu canh trên tường',ic:'mat',tieu:'Vọng lâu 敌楼',p:'Cứ một quãng tường lại có một vọng lâu vuông nhô ra ngoài, cả thành có 72 cái. Lính đứng trong đó canh gác và bắn tên sang hai bên chân tường. Người ta kể 72 vọng lâu, 3.000 lỗ châu mai ứng với 72 học trò giỏi và 3.000 học trò của Khổng Tử.',k:['孔子','Kǒngzǐ','Khổng Tử'],
   a:["anh/py-cw1.webp", "https://commons.wikimedia.org/wiki/File:PingYaoCityWall.jpg", "Public domain", "Peellden"],alt:'Dãy vọng lâu vuông mái ngói nhô ra khỏi bức tường thành cao',s:'object-position:30% 40%'},
  {c:'#2F7FC1',chu:'走',ten:'Đi trên tường',phu:'Ngắm cả thành cổ',ic:'diem',tieu:'Đi bộ trên tường thành',p:'Mặt tường rộng, lát gạch, du khách đi bộ trên đó: một bên là mái nhà xám của thành cổ, một bên là phố mới bên ngoài.',k:['走路','zǒulù','đi bộ'],
   a:["anh/py-cw7.webp", "https://commons.wikimedia.org/wiki/File:China_-_Pingyao_8_-_old_city_wall_(135945415).jpg", "CC BY 2.0", "McKay Savage from London, UK"],alt:'Lối đi lát gạch rộng trên mặt tường thành, xa xa là vọng lâu',s:'object-position:50% 55%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh">平遥古<span class="o-trong"></span></b>',o:['城','都','镇','村'],a:0,zh:1,
   x:'古城 gǔchéng là thành cổ. 城 là thành, cũng là thành phố.',k:['古城','gǔchéng','thành cổ']},
  {t:'c',q:'Thành Bình Dao được ví với con vật nào?',o:['Con rùa','Con rồng','Con hổ','Con cá'],a:0,
   x:'Cổng nam là đầu, cổng bắc là đuôi, bốn cổng đông tây là bốn chân. Rùa sống lâu, mong thành vững bền.',k:['乌龟','wūguī','con rùa']},
  {t:'c',anh:'50% 40%',tam:'72% 28%',khung:'Nhìn trên mặt tường',q:'Quan sát ảnh: trên tường thành, cứ một quãng lại có gì?',o:['Một vọng lâu nhỏ','Một cây cổ thụ','Một tượng sư tử','Một cầu thang gỗ'],a:0,
   x:'Đó là vọng lâu 敌楼 để canh gác. Tường thành Bình Dao có 72 vọng lâu.',k:['城墙','chéngqiáng','tường thành']},
  {t:'ds',q:'Thành Bình Dao có 6 cổng thành.',a:0,
   x:'Đúng: 1 cổng nam, 1 cổng bắc, 2 cổng đông, 2 cổng tây. Ngoài mỗi cổng có ủng thành 瓮城 bảo vệ.',k:['六','liù','sáu']},
  {t:'vt',q:'Có thành cổ với tường thành và cổng thành còn đứng vững.',a:2,
   x:'Cả hai: ở Việt Nam có thành nhà Hồ (Thanh Hoá) xây bằng đá khối, là di sản thế giới; Kinh thành Huế cũng còn tường và cổng thành.',k:['历史','lìshǐ','lịch sử']}]},

rishengchang:{zh:'日升昌',py:'Rìshēngchāng',vi:'Tiền trang Nhật Thăng Xương',ten2:'Tiền trang đầu tiên của Trung Quốc',chuTay:'日升昌 · 汇通天下',
 anh:["anh/py-rs1-lon.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_Rishengchang_Jiuzhi_2013.08.25_19-13-15.jpg", "CC BY-SA 3.0", "Zhangzhugang"],
 alt:'Mặt tiền tiền trang Nhật Thăng Xương: dãy nhà gỗ màu sẫm, cửa treo đèn lồng đỏ, trước có bia đá',
 gioi:'Mở năm 1823, là tiền trang 票号 đầu tiên của Trung Quốc. Xưa mang bạc đi xa vừa nặng vừa dễ bị cướp; người buôn chỉ cần gửi bạc ở đây, cầm tờ phiếu 汇票 đến chi nhánh ở thành khác là nhận lại được bạc. Lúc thịnh nhất, Nhật Thăng Xương có chi nhánh ở hàng chục thành phố. Nay đây là bảo tàng tiền trang Trung Quốc.',
 nhan:[['lich','Mở năm 1823'],['tui-tien','Gửi và chuyển tiền'],['cup','Tiền trang đầu tiên']],
 the:[
  {c:'#2E8C6A',chu:'汇',ten:'Biển 汇通天下',phu:'Khẩu hiệu của tiền trang',ic:'sach',tieu:'汇通天下',p:'Tấm biển chữ phồn thể 匯通天下, đọc từ phải sang trái, nghĩa là "chuyển tiền thông suốt khắp thiên hạ", khẩu hiệu của Nhật Thăng Xương.',k:['汇款','huìkuǎn','chuyển tiền'],
   a:["anh/py-rs3.webp", "https://commons.wikimedia.org/wiki/File:%E6%97%A5%E6%98%87%E6%98%8C%E5%8C%AF%E9%80%9A%E5%A4%A9%E4%B8%8B%E5%8C%BE%E9%A1%8D.JPG", "CC BY-SA 3.0", "Gisling"],alt:'Tấm biển gỗ nền xanh chữ vàng 匯通天下',s:'object-position:50% 45%'},
  {c:'#8A6B4A',chu:'院',ten:'Sân trong',phu:'Phía sau quầy giao dịch',ic:'mu',tieu:'Sân trong tiền trang',p:'Phía trước là quầy giao dịch, phía sau là sân trong với phòng sổ sách, phòng tiếp khách quý. Tường cao, cửa chắc để giữ an toàn cho bạc.',k:['院子','yuànzi','cái sân'],
   a:["anh/py-rs11.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_Rishengchang_Jiuzhi_2013.08.25_19-05-06.jpg", "CC BY-SA 3.0", "Zhangzhugang"],alt:'Sân trong lát đá, hai bên là dãy nhà cửa sổ gỗ chạm hoa, giữa sân có chum nước',s:'object-position:50% 45%'},
  {c:'#C99A1E',chu:'号',ten:'Bảo tàng',phu:'Phiếu, sổ sách xưa',ic:'tui-tien',tieu:'Bảo tàng tiền trang',p:'Nay các gian nhà trưng bày phiếu chuyển tiền, sổ sách, con dấu xưa. Phiếu có mật mã riêng để chống làm giả; người làm ở tiền trang phải giỏi bàn tính, viết chữ đẹp và giữ bí mật.',k:['票号','piàohào','tiền trang'],
   a:["anh/py-rs8.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_Rishengchang_Jiuzhi_2013.08.25_19-07-22.jpg", "CC BY-SA 3.0", "Zhangzhugang"],alt:'Phòng trưng bày trong tiền trang: tủ kính phủ vải đỏ, tranh ảnh treo tường',s:'object-position:50% 50%'},
  {c:'#B0352F',chu:'晋',ten:'Thương nhân Sơn Tây',phu:'Giữ chữ tín',ic:'bat-tay',tieu:'Thương nhân Sơn Tây 晋商',p:'Thương nhân Sơn Tây 晋商 buôn bán khắp nước suốt mấy trăm năm, nổi tiếng giữ chữ tín. Cửa hiệu cũ ở Bình Dao còn treo biển gỗ, cửa chạm khắc rất đẹp.',k:['诚信','chéngxìn','trung thực, giữ chữ tín'],
   a:["anh/py-wx7.webp", "https://commons.wikimedia.org/wiki/File:%E5%B9%B3%E9%81%A5%E5%8F%A4%E5%9F%8E%E6%BA%90%E5%9F%8E%E8%A3%95%E6%A0%BC%E5%AD%90%E9%97%A8.JPG", "CC BY-SA 3.0", "Gisling"],alt:'Mặt tiền cửa hiệu cũ ở Bình Dao: biển gỗ chữ vàng, cửa gỗ chạm khắc, đèn lồng đỏ',s:'object-position:50% 40%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu vào tên tiền trang: <b class="zh">日<span class="o-trong"></span>昌</b>',o:['升','生','中','东'],a:0,zh:1,
   x:'日升昌: mặt trời (日) mọc lên (升), làm ăn hưng thịnh (昌).',k:['升','shēng','lên, mọc lên']},
  {t:'c',q:'票号 ngày xưa làm việc gì?',o:['Nhận gửi và chuyển tiền','Bán vé tàu','Bán thuốc','Dạy học'],a:0,
   x:'票号 piàohào là tiền trang, giống ngân hàng 银行 ngày nay.',k:['银行','yínháng','ngân hàng']},
  {t:'c',anh:'50% 40%',tam:'50% 30%',khung:'Nhìn trên mái hiên',q:'Quan sát ảnh: dưới mái hiên tiền trang treo gì màu đỏ?',o:['Đèn lồng','Cờ','Pháo','Áo'],a:0,
   x:'Đèn lồng đỏ 红灯笼 treo trước cửa hiệu cho đẹp và lấy may.',k:['灯笼','dēnglong','đèn lồng']},
  {t:'ds',q:'Gửi bạc ở Nhật Thăng Xương rồi, người buôn vẫn phải tự mang bạc theo khi đi xa.',a:1,
   x:'Sai: chỉ cần mang tờ phiếu 汇票 nhẹ tênh, đến chi nhánh ở nơi khác đổi lại thành bạc.',k:['汇票','huìpiào','phiếu chuyển tiền']},
  {t:'c',q:'Vì sao Bình Dao từng được gọi là "phố Wall của nhà Thanh"?',o:['Vì có rất nhiều tiền trang','Vì tường thành rất dài','Vì có nhiều chợ','Vì từng là kinh đô'],a:0,
   x:'Thời Thanh, rất nhiều tiền trang của thương nhân Sơn Tây đặt trụ sở ở Bình Dao.',k:['晋商','Jìnshāng','thương nhân Sơn Tây']}]},

shilou:{zh:'市楼',py:'Shìlóu',vi:'Chợ lầu',ten2:'Toà lầu giữa phố cổ',chuTay:'市楼 · 南大街',
 anh:["anh/py-sl2-lon.webp", "https://commons.wikimedia.org/wiki/File:Market_Tower_(6239314132).jpg", "CC BY 2.0", "Francisco Anzola"],
 alt:'Phố cổ lát đá, hai bên là cửa hàng nhà gỗ, cuối phố là toà lầu ba tầng mái',
 gioi:'Toà lầu ba tầng mái cao khoảng 18,5 m, đứng giữa phố Nam 南大街, con phố buôn bán sầm uất nhất thành. Xưa đây là trung tâm chợ nên gọi là 市楼 "lầu chợ"; người đi đường đi xuyên qua cửa vòm dưới chân lầu. Lên tầng trên nhìn được mái ngói xám của cả thành cổ.',
 nhan:[['mu','Lầu ba tầng mái'],['diem','Giữa phố Nam'],['mat','Ngắm cả thành cổ']],
 the:[
  {c:'#B0352F',chu:'街',ten:'Phố Minh Thanh',phu:'Con phố buôn bán',ic:'diem',tieu:'Phố Nam 南大街',p:'Phố Nam còn gọi là "phố Minh Thanh" 明清街: hai bên là cửa hàng nhà cũ bán giấm, thịt bò, đồ sơn mài, quà lưu niệm.',k:['街','jiē','phố'],
   a:["anh/py-nd12.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_South_Street.jpg", "CC BY-SA 4.0", "Bairuilong"],alt:'Phố cổ đông khách, hai bên cửa hàng mái ngói, xa xa là Chợ lầu',s:'object-position:50% 45%'},
  {c:'#C99A1E',chu:'寿',ten:'Mái ngói lưu ly',phu:'Chữ trên mái',ic:'lap-lanh',tieu:'Chữ ghép bằng ngói',p:'Mái lầu lợp ngói lưu ly vàng xanh; người ta ghép màu ngói thành chữ 囍 (song hỷ) và chữ 寿 (thọ), cầu vui vẻ và sống lâu.',k:['寿','shòu','sống lâu, thọ'],
   a:["anh/py-sl3.webp", "https://commons.wikimedia.org/wiki/File:Tour_du_march%C3%A9.jpg", "CC BY-SA 3.0", "Shakti"],alt:'Chợ lầu ba tầng mái nhìn gần, cột gỗ và lan can, phía dưới là cửa vòm',s:'object-position:50% 35%'},
  {c:'#D23A2E',chu:'灯',ten:'Phố đèn lồng',phu:'Tối đến sáng rực',ic:'den-long',tieu:'Đèn lồng đỏ',p:'Hai bên phố treo đèn lồng đỏ; tối đến cả phố sáng rực. Phía cuối là lầu cổng thành.',k:['红','hóng','màu đỏ'],
   a:["anh/py-nd4.webp", "https://commons.wikimedia.org/wiki/File:Pedestrian_Street,_Pingyao_-_panoramio.jpg", "CC BY 3.0", "Raki_Man"],alt:'Phố đi bộ treo đèn lồng đỏ, cuối phố là lầu cổng',s:'object-position:50% 45%'},
  {c:'#5E6870',chu:'瓦',ten:'Nhìn từ trên cao',phu:'Biển mái ngói xám',ic:'mat',tieu:'Mái ngói thành cổ',p:'Từ trên cao nhìn xuống: mái ngói xám nối nhau, phố thẳng như bàn cờ. Thành cổ còn gần 3.800 ngôi nhà cổ thời Minh – Thanh.',k:['房子','fángzi','ngôi nhà'],
   a:["anh/py-sl1.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_marketstreet.jpg", "CC BY-SA 3.0", "severin.stalder"],alt:'Nhìn từ trên cao xuống phố cổ: hai dãy mái ngói xám, người đi ô ở giữa phố',s:'object-position:50% 45%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh"><span class="o-trong"></span>楼</b> (lầu giữa chợ)',o:['市','城','钟','鼓'],a:0,zh:1,
   x:'市 shì là chợ, cũng là thành phố. 超市 chāoshì là siêu thị.',k:['超市','chāoshì','siêu thị']},
  {t:'c',q:'Người đi đường đi qua Chợ lầu bằng cách nào?',o:['Đi xuyên qua cửa vòm dưới chân lầu','Đi thuyền','Leo thang dây','Không đi qua được'],a:0,
   x:'Lầu xây ngay giữa phố, chân lầu là cửa vòm cho người qua lại.',k:['穿过','chuānguò','đi xuyên qua']},
  {t:'c',anh:'50% 50%',tam:'22% 58%',khung:'Nhìn hai bên phố',q:'Quan sát ảnh: hai bên phố là gì?',o:['Cửa hàng nhà cổ','Cánh đồng','Bãi biển','Nhà chọc trời'],a:0,
   x:'Phố Nam là phố buôn bán từ xưa: nhà cổ mái ngói, tầng dưới là cửa hàng.',k:['商店','shāngdiàn','cửa hàng']},
  {t:'ds',q:'Mái Chợ lầu ghép ngói màu thành chữ 囍 và chữ 寿.',a:0,
   x:'Đúng: 囍 là song hỷ (vui vẻ), 寿 là sống lâu.',k:['喜','xǐ','vui mừng']},
  {t:'vt',q:'Có phố cổ nhà mái ngói, treo đèn lồng đỏ, khách du lịch đông vui.',a:2,
   x:'Cả hai: phố cổ Hội An cũng nổi tiếng với nhà cổ và đèn lồng.',k:['灯笼','dēnglong','đèn lồng']}]},

shuanglin:{zh:'双林寺',py:'Shuānglín Sì',vi:'Chùa Song Lâm',ten2:'Kho báu tượng màu',chuTay:'双林寺 · 彩塑',
 anh:["anh/py-sls28-lon.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_Shuanglin_Si_2013.08.26_09-06-29.jpg", "CC BY-SA 3.0", "Zhangzhugang"],
 alt:'Sân chùa Song Lâm lát đá, cây xanh hai bên, phía sau là điện mái ngói xám',
 gioi:'Ngôi chùa cách thành cổ khoảng 6 km về phía tây nam, được xây lại năm 571. Trong chùa còn hơn 2.000 pho tượng đất sét tô màu 彩塑, phần lớn làm vào thời Minh, được gọi là "kho báu tượng màu phương Đông". Chùa là một phần của di sản thế giới Thành cổ Bình Dao.',
 nhan:[['lich','Xây lại năm 571'],['vuong-mien','Hơn 2.000 tượng màu'],['cup','Di sản thế giới 1997']],
 the:[
  {c:'#B0352F',chu:'护',ten:'Tượng hộ pháp',phu:'Mắt trợn, mặt dữ',ic:'khien',tieu:'Tượng thần hộ pháp',p:'Tượng thần hộ pháp đội mũ vàng, mắt trợn, đứng canh cửa điện. Nghệ nhân nặn bằng đất sét trộn rơm, để khô rồi mới tô màu.',k:['泥塑','nísù','tượng nặn đất'],
   a:["anh/py-sls1.webp", "https://commons.wikimedia.org/wiki/File:Pingyao-shuanglin-si-c02.jpg", "CC BY-SA 2.1 es", "Colegota"],alt:'Tượng thần mặt trắng, mắt trợn, đội mũ vàng',s:'object-position:50% 35%'},
  {c:'#C99A1E',chu:'手',ten:'Quan Âm nghìn tay',phu:'Cánh tay xoè như quạt',ic:'vuong-mien',tieu:'Tượng Quan Âm nghìn tay',p:'Tượng Quan Âm nghìn tay trong chùa, các cánh tay toả ra hai bên như cánh quạt, mỗi tay một tư thế.',k:['手','shǒu','tay'],
   a:["anh/py-sls2.webp", "https://commons.wikimedia.org/wiki/File:D%C3%A9esse_de_la_mis%C3%A9ricorde_aux_mille_bras.jpg", "CC BY-SA 1.0", "Shakti"],alt:'Tượng Quan Âm nhiều tay toả ra hai bên',s:'object-position:50% 35%'},
  {c:'#5E6870',chu:'佛',ten:'Điện Thiên Phật',phu:'Điện nghìn Phật',ic:'sach',tieu:'Điện Thiên Phật 千佛殿',p:'Biển 千佛殿 "điện nghìn Phật". Bên trong, quanh tường điện có rất nhiều tượng nhỏ xếp tầng tầng lớp lớp.',k:['佛','fó','Phật'],
   a:["anh/py-sls26.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_Shuanglin_Si_2013.08.26_09-38-00.jpg", "CC BY-SA 3.0", "Zhangzhugang"],alt:'Mặt tiền điện cổ có tấm biển 千佛殿 trên cửa',s:'object-position:50% 40%'},
  {c:'#8A6B4A',chu:'拱',ten:'Đấu củng',phu:'Gỗ xếp không cần đinh',ic:'manh-ghep',tieu:'Đấu củng 斗拱',p:'Những khối gỗ 斗拱 xếp chồng lên nhau dưới mái, không cần đinh mà vẫn đỡ được mái ngói nặng.',k:['木头','mùtou','gỗ'],
   a:["anh/py-sls27.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_Shuanglin_Si_2013.08.26_09-17-59.jpg", "CC BY-SA 3.0", "Zhangzhugang"],alt:'Các khối gỗ xếp chồng dưới mái hiên điện cổ',s:'object-position:50% 50%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu vào tên chùa: <b class="zh">双<span class="o-trong"></span>寺</b>',o:['林','木','森','树'],a:0,zh:1,
   x:'双林 là "hai rừng cây": nhắc tích Đức Phật nhập niết bàn giữa hai hàng cây sa la.',k:['树林','shùlín','rừng cây']},
  {t:'c',q:'Tượng ở chùa Song Lâm chủ yếu làm bằng gì?',o:['Đất sét rồi tô màu','Đồng','Ngọc','Giấy'],a:0,
   x:'彩塑 cǎisù là tượng nặn rồi tô màu. Chùa còn hơn 2.000 pho.',k:['彩塑','cǎisù','tượng nặn tô màu']},
  {t:'c',anh:'50% 50%',tam:'50% 38%',khung:'Nhìn ngôi điện',q:'Quan sát ảnh: mái ngói của điện chính màu gì?',o:['Xám','Vàng','Xanh lá','Đỏ'],a:0,
   x:'Chùa Song Lâm dùng ngói xám giản dị, khác mái ngói vàng của cung vua.',k:['灰色','huīsè','màu xám']},
  {t:'ds',q:'Chùa Song Lâm nằm ngay giữa phố Nam trong thành cổ.',a:1,
   x:'Sai: chùa ở ngoài thành, cách khoảng 6 km về phía tây nam.',k:['公里','gōnglǐ','ki-lô-mét']},
  {t:'vt',q:'Có chùa cổ với nhiều tượng La Hán, tượng Phật rất sống động.',a:2,
   x:'Cả hai: chùa Tây Phương (Hà Nội) nổi tiếng với các tượng La Hán bằng gỗ.',k:['寺庙','sìmiào','chùa miếu']}]}
}};

window.VH_PY.tn={
chi:{loai:'menu',zh:'吃',py:'chī',vi:'Quán mì Sơn Tây',ten2:'Xứ sở của mì',chuTay:'山西面食 · 栲栳栳',anh:["anh/py-kl3-lon.webp", "https://commons.wikimedia.org/wiki/File:Mianku.jpg", "CC BY-SA 3.0", "Adlyn Teoh and Jenny Yap Hiasgourmet"],alt:'Đầu bếp đang xếp những ống bột yến mạch cuộn tròn sát nhau trong xửng hấp',
 gioi:'Sơn Tây được gọi là "quê hương của mì" 面食之乡: bột mì, bột yến mạch, bột cao lương… nặn ra hàng trăm món. Người Sơn Tây ăn mì thường chan thêm giấm. Hôm nay em đứng quán: đọc yêu cầu của khách rồi chọn đúng món trên thực đơn.',
 nhan:[['tra-sua','6 món đặc sản'],['but','Đọc thực đơn chữ Hán'],['tin-nhan','6 vị khách']],nut:'Mở quán · 6 vị khách',
 mon:[
  {id:'daoxiao',zh:'刀削面',py:'dāoxiāomiàn',vi:'mì gọt bằng dao',gia:15,a:["anh/py-dx1.webp", "https://commons.wikimedia.org/wiki/File:Daoxiaomian_at_Beixinqiao,_Beijing_(20201011183536).jpg", "CC BY-SA 4.0", "N509FZ"],mo:'Đầu bếp một tay cầm tảng bột, tay kia dùng dao cong gọt từng sợi bay thẳng vào nồi nước sôi. Sợi mì dày ở giữa, mỏng ở mép, rất dai. Món mì nổi tiếng nhất Sơn Tây.'},
  {id:'kaolao',zh:'莜面栲栳栳',py:'yóumiàn kǎolǎolao',vi:'bánh ống bột yến mạch',gia:22,a:["anh/py-kl1.webp", "https://commons.wikimedia.org/wiki/File:Oat_noodle_rolls_served_in_Beijing_(20170406174236).jpg", "CC BY-SA 4.0", "N509FZ"],mo:'Bột yến mạch 莜面 cán mỏng, cuộn thành từng ống nhỏ, xếp đứng sát nhau trong xửng như tổ ong rồi hấp; chấm nước dùng nóng.'},
  {id:'maoerduo',zh:'猫耳朵',py:'māo ěrduo',vi:'mì tai mèo',gia:14,a:["anh/py-me1.webp", "https://commons.wikimedia.org/wiki/File:Chinese_gnocchi_(Maoerduo).jpg", "CC0", "Fumikas Sagisavas"],mo:'Bột nhào véo từng miếng nhỏ, ấn ngón tay cho cong lại như tai mèo, rồi xào hoặc nấu canh. Trẻ con rất thích vì hình ngộ nghĩnh.'},
  {id:'niurou',zh:'平遥牛肉',py:'Píngyáo niúròu',vi:'thịt bò Bình Dao',gia:68,a:["anh/py-nr21.webp", "https://commons.wikimedia.org/wiki/File:%E5%B9%B3%E9%81%A5%E7%89%9B%E8%82%89%E5%BA%97.JPG", "CC BY-SA 3.0", "Gisling"],mo:'Thịt bò ướp muối, nấu lâu, thái miếng mỏng màu hồng, mềm và thơm, thường ăn nguội. Đặc sản nổi tiếng nhất của Bình Dao, khách hay mua làm quà.'},
  {id:'cu',zh:'老陈醋',py:'lǎochéncù',vi:'giấm lâu năm',gia:12,a:["anh/py-cu22.webp", "https://commons.wikimedia.org/wiki/File:Shanxi_Mature_Vinegar_at_a_supermarket_in_Beijing_(20241109164911).jpg", "CC BY-SA 4.0", "N509FZ"],mo:'Giấm làm chủ yếu từ cao lương, ủ và phơi rất lâu nên đậm, thơm. Giấm lâu năm Sơn Tây 山西老陈醋 nổi tiếng cả nước.'},
  {id:'huamo',zh:'花馍',py:'huāmó',vi:'bánh bao nặn hình',gia:8,a:["anh/py-hm2.webp", "https://commons.wikimedia.org/wiki/File:%E9%99%95%E8%A5%BF%E8%8A%B1%E9%A6%8D_02.jpg", "CC BY-SA 4.0", "Liuxingy"],mo:'Bột mì nặn thành hình chim, cá, hoa rồi hấp. Dịp lễ Tết, cưới hỏi, người Sơn Tây làm 花馍 để biếu nhau, cầu may mắn.'}],
 don:[
  {zh:'我要一碗面，厨师用刀削的那种！',py:'Wǒ yào yì wǎn miàn, chúshī yòng dāo xiāo de nà zhǒng!',vi:'Cho tôi một bát mì, loại đầu bếp gọt bằng dao ấy!',a:'daoxiao',k:['刀','dāo','con dao']},
  {zh:'我想吃一笼像蜂窝一样的面食。',py:'Wǒ xiǎng chī yì lóng xiàng fēngwō yíyàng de miànshí.',vi:'Tôi muốn ăn một xửng món bột trông như tổ ong.',a:'kaolao',k:['蜂窝','fēngwō','tổ ong']},
  {zh:'有没有样子像小猫耳朵的面？',py:'Yǒu méiyǒu yàngzi xiàng xiǎo māo ěrduo de miàn?',vi:'Có món mì hình giống tai mèo con không?',a:'maoerduo',k:['耳朵','ěrduo','cái tai']},
  {zh:'我想买平遥最有名的特产，带回家。',py:'Wǒ xiǎng mǎi Píngyáo zuì yǒumíng de tèchǎn, dài huí jiā.',vi:'Tôi muốn mua đặc sản nổi tiếng nhất Bình Dao, mang về nhà.',a:'niurou',k:['牛肉','niúròu','thịt bò']},
  {zh:'吃面没有醋，不香！给我拿一瓶。',py:'Chī miàn méiyǒu cù, bù xiāng! Gěi wǒ ná yì píng.',vi:'Ăn mì mà không có giấm thì không ngon! Lấy cho tôi một chai.',a:'cu',k:['瓶','píng','chai (lượng từ)']},
  {zh:'过年了，我要送给奶奶一个漂亮的小鸟馒头。',py:'Guònián le, wǒ yào sòng gěi nǎinai yí ge piàoliang de xiǎoniǎo mántou.',vi:'Tết rồi, tôi muốn tặng bà một cái bánh bao hình chú chim thật đẹp.',a:'huamo',k:['馒头','mántou','bánh bao không nhân']}]},

shuo:{loai:'chat',av:'掌',zh:'说',py:'shuō',vi:'Trò chuyện với chủ trọ',ten2:'Nghỉ ở nhà trọ cổ',chuTay:'客栈 · 平遥古城',anh:["anh/py-kz1-lon.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_2009_529.jpg", "CC BY-SA 4.0", "G41rn8"],alt:'Sân trong một nhà trọ cổ ở Bình Dao: nhà gỗ hai tầng, đèn lồng đỏ, cây cảnh',
 gioi:'Trong thành cổ có rất nhiều nhà trọ 客栈 làm trong những ngôi nhà cổ, có nhà là tiền trang, cửa hiệu ngày xưa. Người chủ trọ được gọi theo lối xưa là 掌柜 "chưởng quỹ". Em vừa đến nhà trọ: nghe ông chủ nói rồi chọn câu đáp.',
 nhan:[['tin-nhan','Hội thoại 5 lượt'],['loa','Nghe ông chủ trọ'],['mu','Nhà trọ cổ 客栈']],nut:'Vào nhà trọ · 5 lượt nói',
 luot:[
  {zh:'欢迎欢迎！住店还是吃饭？',py:'Huānyíng huānyíng! Zhùdiàn háishi chīfàn?',vi:'Chào mừng, chào mừng! Cháu thuê phòng hay ăn cơm?',hoi:'Chọn câu đáp:',o:['住店，我在网上订了房间。','我是饭。','不欢迎。'],a:0,
   x:'住店 zhùdiàn là thuê phòng nghỉ. 客栈 kèzhàn là nhà trọ kiểu xưa, người chủ gọi là 掌柜 zhǎngguì.',k:['住店','zhùdiàn','thuê phòng trọ']},
  {zh:'你的房间是窑洞，冬暖夏凉！',py:'Nǐ de fángjiān shì yáodòng, dōng nuǎn xià liáng!',vi:'Phòng của cháu là nhà hang, đông ấm hè mát!',hoi:'冬暖夏凉 nghĩa là gì?',o:['mùa đông ấm, mùa hè mát','mùa đông lạnh, mùa hè nóng','cả năm đều nóng'],a:0,
   x:'Nhà hang 窑洞 có mái vòm, tường rất dày, nên mùa đông giữ ấm, mùa hè mát mẻ.',k:['冬暖夏凉','dōng nuǎn xià liáng','đông ấm hè mát']},
  {zh:'我们山西人离不开醋，吃面一定要放醋。',py:'Wǒmen Shānxī rén lí bu kāi cù, chī miàn yídìng yào fàng cù.',vi:'Người Sơn Tây chúng tôi không thể thiếu giấm, ăn mì nhất định phải cho giấm.',hoi:'Người Sơn Tây ăn mì nhất định phải cho gì?',o:['醋 giấm','糖 đường','辣椒 ớt'],a:0,
   x:'离不开 lí bu kāi là "không rời được, không thể thiếu". Giấm lâu năm Sơn Tây nổi tiếng cả nước.',k:['醋','cù','giấm']},
  {zh:'明天白天可以上城墙走走，一圈六公里。',py:'Míngtiān báitiān kěyǐ shàng chéngqiáng zǒuzou, yì quān liù gōnglǐ.',vi:'Ban ngày mai cháu có thể lên tường thành đi dạo, một vòng sáu cây số.',hoi:'Đi hết một vòng tường thành dài bao nhiêu?',o:['khoảng 6 km','khoảng 16 km','khoảng 600 m'],a:0,
   x:'一圈 yì quān là một vòng; 公里 gōnglǐ là ki-lô-mét. Tường thành Bình Dao dài khoảng 6,2 km.',k:['一圈','yì quān','một vòng']},
  {zh:'我们这个院子，以前是一家票号。',py:'Wǒmen zhège yuànzi, yǐqián shì yì jiā piàohào.',vi:'Cái sân nhà trọ này, ngày xưa là một tiền trang đấy.',hoi:'票号 ngày xưa là gì?',o:['tiền trang, nơi gửi và chuyển tiền','tiệm bán vé','nhà hát'],a:0,
   x:'Bình Dao từng có rất nhiều tiền trang 票号; tiền trang đầu tiên là 日升昌, mở năm 1823.',k:['以前','yǐqián','trước đây']}]},

zhu:{loai:'nha',zh:'住',py:'zhù',vi:'Nhà hang 窑洞',ten2:'Ngủ trên giường lò',chuTay:'窑洞 · 晋中',anh:["anh/py-yd5-lon.webp", "https://commons.wikimedia.org/wiki/File:%E6%A2%81%E5%AE%B6%E6%B2%B3%E7%BA%A2%E8%89%B2%E6%95%99%E8%82%B2_09.jpg", "CC BY-SA 4.0", "Liuxingy"],alt:'Dãy nhà hang mái vòm xây gạch, cửa sổ vòm có song gỗ, trước là sân rộng',
 gioi:'Nhiều nhà ở Bình Dao là nhà hang 窑洞 xây bằng gạch: mỗi gian có mái vòm, tường dày, quây quanh một khoảng sân. Trong nhà có giường lò 炕 xây liền với bếp. Chạm vào từng phần của bản vẽ để khám phá, rồi trả lời câu hỏi bằng cách chạm vào bản vẽ.',
 nhan:[['mu','Nhà hang 窑洞'],['kinh-lup','Khám phá 6 phần'],['tick','5 câu chạm bản vẽ']],nut:'Vào nhà · khám phá',
 khamT:'Khám phá nhà hang',khamP:'Chạm vào từng phần: giường lò, bếp, cửa sổ, cửa, nóc nhà, sân… để xem tên gọi và công dụng.',
 khu:{
  yaoding:{zh:'窑顶',py:'yáodǐng',vi:'nóc nhà hang',mo:'Nóc nhà hang bằng phẳng, có tường thấp bao quanh; mùa thu người ta phơi ngô, phơi kê trên nóc.'},
  kang:{zh:'炕',py:'kàng',vi:'giường lò',mo:'Giường xây bằng gạch đất, bên dưới rỗng; hơi nóng từ bếp chạy qua lòng giường nên mùa đông nằm rất ấm.'},
  zaotai:{zh:'灶台',py:'zàotái',vi:'bếp',mo:'Bếp xây liền với giường lò: nấu cơm xong, hơi nóng còn sưởi ấm giường.'},
  chuanghua:{zh:'窗花',py:'chuānghuā',vi:'hoa dán cửa sổ',mo:'Cửa sổ vòm có song gỗ, dán giấy; Tết đến người ta dán hoa giấy cắt màu đỏ 窗花 lên cửa sổ.'},
  men:{zh:'门',py:'mén',vi:'cửa',mo:'Cửa gỗ ở gian giữa; mùa đông treo rèm bông dày 门帘 để chắn gió.'},
  yuanzi:{zh:'院子',py:'yuànzi',vi:'sân',mo:'Các gian nhà hang quây quanh một khoảng sân; trong sân có cối đá xay bột.'}},
 cau:[
  {q:'Mùa đông, ngủ ở đâu cho ấm?',a:['kang'],x:'炕 giường lò: hơi nóng từ bếp chạy dưới lòng giường.',k:['炕','kàng','giường lò']},
  {q:'Nấu cơm ở đâu? Hơi nóng của nó còn sưởi ấm giường.',a:['zaotai'],x:'灶台 bếp: 灶 là bếp lò, 台 là cái bệ.',k:['灶台','zàotái','bếp']},
  {q:'Tết đến, dán hoa giấy đỏ ở đâu?',a:['chuanghua'],x:'窗花 hoa dán cửa sổ: 窗 là cửa sổ, 花 là hoa.',k:['窗花','chuānghuā','hoa giấy dán cửa sổ']},
  {q:'Mùa thu phơi ngô ở đâu?',a:['yaoding'],x:'窑顶 nóc nhà hang bằng phẳng, đi lên phơi đồ được.',k:['窑洞','yáodòng','nhà hang']},
  {q:'Xay bột bằng cối đá ở đâu?',a:['yuanzi'],x:'院子 sân: cả nhà làm việc, phơi đồ, xay bột ngoài sân.',k:['院子','yuànzi','cái sân']}]},

su:{loai:'ghep',zh:'俗',py:'sú',vi:'Nghề xưa của thương nhân',ten2:'Đồ vật và nghề thủ công Bình Dao',chuTay:'晋商文化 · 平遥',anh:["anh/py-dl3-lon.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_2009_646.jpg", "CC BY-SA 4.0", "G41rn8"],alt:'Con ngõ trong nhà cổ Bình Dao, hai bên treo đèn lồng đỏ',
 gioi:'Thương nhân Sơn Tây để lại ở Bình Dao nhiều nghề và đồ vật: bàn tính, tiêu cục hộ tống tiền bạc, đồ sơn mài… Ghép mỗi ảnh với đúng biển tên.',
 nhan:[['manh-ghep','Ghép 5 cặp'],['qua','Đồ thủ công'],['tui-tien','Chuyện buôn bán']],nut:'Dạo phố · ghép 5 cặp',
 do:[
  {id:'qiqi',zh:'推光漆器',py:'tuīguāng qīqì',vi:'đồ sơn mài',a:["anh/py-qq21.webp", "https://commons.wikimedia.org/wiki/File:Piingyao_lacquer_screen.JPG", "CC BY-SA 3.0", "Gisling"],mo:'Đồ sơn mài Bình Dao được đánh bóng bằng lòng bàn tay nên gọi là 推光 "đẩy cho bóng". Đây là di sản văn hoá phi vật thể quốc gia.'},
  {id:'suanpan',zh:'算盘',py:'suànpán',vi:'bàn tính',a:["anh/py-sp8.webp", "https://commons.wikimedia.org/wiki/File:ROC-era_abacus_at_China_National_Museum_of_Women_and_Children_(20210909140914).jpg", "CC BY-SA 4.0", "N509FZ"],mo:'Bàn tính gảy hạt để cộng trừ. Người làm ở tiền trang, cửa hiệu Sơn Tây phải gảy bàn tính thật nhanh và chính xác.'},
  {id:'biaoju',zh:'镖局',py:'biāojú',vi:'tiêu cục',a:["anh/py-bj2.webp", "https://commons.wikimedia.org/wiki/File:Arm_escort_museum,_Pingyao.JPG", "CC BY-SA 3.0", "Gisling"],mo:'Tiêu cục là nơi thuê võ sĩ 镖师 hộ tống tiền bạc, hàng hoá đi đường xa. Bình Dao có Bảo tàng tiêu cục Trung Quốc.'},
  {id:'denglong',zh:'灯笼',py:'dēnglong',vi:'đèn lồng',a:["anh/py-dl2.webp", "https://commons.wikimedia.org/wiki/File:Lanternes_Pingyao.jpg", "CC BY-SA 3.0", "Shakti"],mo:'Đèn lồng đỏ treo trước cửa nhà, cửa hiệu cho đẹp và lấy may; dịp Tết cả thành cổ thắp đèn.'},
  {id:'mianhua',zh:'面花',py:'miànhuā',vi:'hoa bột nặn',a:["anh/py-hm1.webp", "https://commons.wikimedia.org/wiki/File:%E4%BB%A3%E5%8E%BF%E8%8A%B1%E9%A6%8D-%E5%A9%9A%E7%A4%BC%E9%99%AA%E5%AB%81%E8%8A%B1%E9%A6%8D.jpg", "CC BY-SA 3.0", "安昊帅"],mo:'Bột mì nhuộm màu nặn thành người, hoa, chim… để bày trong ngày lễ. Phụ nữ Sơn Tây nặn rất khéo.'}]}
};

// ===== Sảnh ga thành phố
window.VH_PY.sanh={zh:'平遥',vi:'Bình Dao',ga:'平遥古城站',gaPy:'PÍNGYÁO GǓCHÉNG ZHÀN',tuyen:['华北线','Tuyến Hoa Bắc'],gaSo:'Ga 4/6',tram:'py',
 chao:['欢迎来到平遥！','Huānyíng lái dào Píngyáo!','Chào mừng đến Bình Dao!'],
 gioi:'Bình Dao ở tỉnh Sơn Tây là một trong những thành cổ còn giữ gần như nguyên vẹn nhất Trung Quốc: tường thành, phố xá, nhà cửa vẫn như thời Minh – Thanh. Thời Thanh, thương nhân Sơn Tây <b>晋商</b> mở ở đây những tiền trang <b>票号</b> đầu tiên, gửi và chuyển tiền đi khắp nước, nên Bình Dao từng được gọi là "phố Wall của nhà Thanh". Năm 1997, thành cổ được công nhận là di sản thế giới.',
 tuKhoa:[['古城','gǔchéng','thành cổ'],['城墙','chéngqiáng','tường thành'],['晋商','Jìnshāng','thương nhân Sơn Tây']],
 bia:["anh/py-nd5-lon.webp", "https://commons.wikimedia.org/wiki/File:Pingyao_Mauerblick.jpg", "CC BY-SA 4.0", "ThomasMomas"],biaAlt:'Nhìn từ trên tường thành: phố thẳng dài, hai bên mái ngói xám của thành cổ',chuTay:'平遥古城 · 明清街巷',phut:'一分钟平遥',
 soLieu:[['城墙','tường thành','6,2','km','xây lại năm 1370, đời Minh'],['城门','cổng thành','6','cổng','như đầu, đuôi và bốn chân rùa'],['敌楼','vọng lâu','72','toà','cùng khoảng 3.000 lỗ châu mai'],['世遗','di sản thế giới','1997','năm','cùng chùa Song Lâm, chùa Trấn Quốc']],
 thang:['dong','dong','xuan','xuan','xuan','ha','ha','ha','thu','thu','dong','dong'],dep:[9,10],
 mua:[
  {k:'xuan',ten:'Xuân · tháng 3–5',nd:'0–24°C',p:'Ấm dần, khô và nhiều gió, có ngày bụi. Tháng 4–5 cây trong thành ra lá, đi dạo dễ chịu.',muc:'Khá hợp',dep:0},
  {k:'ha',ten:'Hạ · tháng 6–8',nd:'18–31°C',p:'Nóng, nắng gắt buổi trưa; tháng 7–8 có mưa rào. Nên đi tường thành vào sáng sớm hoặc chiều muộn.',muc:'Hơi nóng',dep:0},
  {k:'thu',ten:'Thu · tháng 9–10',nd:'6–25°C',p:'Trời trong, mát, ít mưa: đi bộ trên tường thành, chụp ảnh phố cổ đều đẹp. Tháng 9 thường có Liên hoan nhiếp ảnh quốc tế Bình Dao.',muc:'Đẹp nhất năm',dep:1},
  {k:'dong',ten:'Đông · tháng 11–2',nd:'−11–5°C',p:'Lạnh và khô, ít khách. Dịp Tết phố cổ treo đèn lồng đỏ, có nhiều hoạt động mừng năm mới; nhớ mặc thật ấm.',muc:'Lạnh',dep:0}],
 luuY:[['#A4532D','dong-ho','Đi tàu cao tốc','Ga Bình Dao Cổ Thành 平遥古城站 có tàu cao tốc từ Thái Nguyên (khoảng nửa tiếng) và từ Bắc Kinh. Ga ở ngoài thành cổ, cần đi xe vào.'],
  ['#C99A1E','the-bai','Vé chung','Một vé chung vào được nhiều điểm trong thành: tường thành, tiền trang 日升昌, huyện nha, văn miếu…, dùng được trong vài ngày.'],
  ['#2E8C6A','den-long','Ở lại một đêm','Buổi tối phố cổ lên đèn lồng rất đẹp; nhiều nhà trọ trong thành là nhà hang, sân cổ.']],
 banDoTen:'平遥地图',banDo:"<svg viewBox=\"0 0 400 300\" aria-hidden=\"true\">\n      <defs>\n        <radialGradient id=\"pyGiay\" cx=\".5\" cy=\".45\" r=\".75\"><stop offset=\"0\" stop-color=\"#FBF5E6\"/><stop offset=\"1\" stop-color=\"#EADCBC\"/></radialGradient>\n        <pattern id=\"pyCham\" width=\"12\" height=\"12\" patternUnits=\"userSpaceOnUse\"><circle cx=\"2\" cy=\"2\" r=\".7\" fill=\"#C9B68E\" opacity=\".45\"/></pattern>\n      </defs>\n      <rect width=\"400\" height=\"300\" fill=\"url(#pyGiay)\"/><rect width=\"400\" height=\"300\" fill=\"url(#pyCham)\"/>\n      <!-- ruộng ngoài thành -->\n      <g fill=\"#E3E6BE\" opacity=\".8\"><rect x=\"6\" y=\"8\" width=\"44\" height=\"30\" rx=\"4\"/><rect x=\"342\" y=\"236\" width=\"50\" height=\"34\" rx=\"4\"/><rect x=\"350\" y=\"60\" width=\"40\" height=\"40\" rx=\"4\"/></g>\n      <!-- tường thành hình rùa: cổng nam là đầu, cổng bắc là đuôi, 4 cổng đông tây là 4 chân -->\n      <path d=\"M78 46H322V256H78z\" fill=\"#F1E6CC\" stroke=\"#9A7A52\" stroke-width=\"7\" stroke-linejoin=\"round\"/>\n      <path d=\"M78 46H322V256H78z\" fill=\"none\" stroke=\"#C9A877\" stroke-width=\"2\" stroke-dasharray=\"3 5\"/>\n      <g fill=\"#9A7A52\">\n        <path d=\"M186 256h28v14h-28z\"/><path d=\"M180 270h40v8h-40z\"/>\n        <path d=\"M232 46h20v-12h-20z\"/>\n        <path d=\"M78 98h-14v18h14zM78 196h-14v18h14zM322 98h14v18h-14zM322 196h14v18h-14z\"/>\n      </g>\n      <g font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#6E5A40\" text-anchor=\"middle\">\n        <text x=\"200\" y=\"292\">南门 · đầu rùa</text><text x=\"242\" y=\"26\">北门 · đuôi</text>\n        <text x=\"46\" y=\"110\">西门</text><text x=\"46\" y=\"208\">西门</text><text x=\"354\" y=\"110\">东门</text><text x=\"354\" y=\"208\">东门</text>\n      </g>\n      <!-- phố xá trong thành -->\n      <g stroke=\"#E2CFA6\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M200 252V150M84 205H316M84 108H316M140 52V250M262 52V250\"/></g>\n      <g stroke=\"#D9C39A\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M200 252V150\"/></g>\n      <text x=\"206\" y=\"236\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#8A6B4A\" transform=\"rotate(-90 206 236)\">南大街</text>\n      <!-- mái nhà san sát -->\n      <g fill=\"#B9A58A\" opacity=\".55\">\n        <rect x=\"92\" y=\"60\" width=\"38\" height=\"36\" rx=\"2\"/><rect x=\"152\" y=\"60\" width=\"38\" height=\"36\" rx=\"2\"/><rect x=\"214\" y=\"60\" width=\"38\" height=\"36\" rx=\"2\"/><rect x=\"274\" y=\"60\" width=\"38\" height=\"36\" rx=\"2\"/>\n        <rect x=\"92\" y=\"120\" width=\"38\" height=\"74\" rx=\"2\"/><rect x=\"214\" y=\"120\" width=\"38\" height=\"20\" rx=\"2\"/><rect x=\"274\" y=\"120\" width=\"38\" height=\"74\" rx=\"2\"/>\n        <rect x=\"92\" y=\"216\" width=\"38\" height=\"32\" rx=\"2\"/><rect x=\"150\" y=\"216\" width=\"40\" height=\"32\" rx=\"2\"/><rect x=\"214\" y=\"216\" width=\"38\" height=\"32\" rx=\"2\"/><rect x=\"274\" y=\"216\" width=\"38\" height=\"32\" rx=\"2\"/>\n      </g>\n      <!-- chợ lầu 市楼 giữa phố Nam -->\n      <g transform=\"translate(200 160)\"><rect x=\"-8\" y=\"-2\" width=\"16\" height=\"12\" fill=\"#B0352F\"/><path d=\"M-12-2h24l-4-5h-16z\" fill=\"#2E8C6A\"/><rect x=\"-6\" y=\"-12\" width=\"12\" height=\"6\" fill=\"#B0352F\"/><path d=\"M-10-12h20l-4-5h-12z\" fill=\"#E0A800\"/><path d=\"M-3 10v-6h6v6z\" fill=\"#5E3A2A\"/></g>\n      <!-- tiền trang 日升昌 -->\n      <g transform=\"translate(166 196)\"><rect x=\"-10\" y=\"-4\" width=\"20\" height=\"12\" fill=\"#E9DFCB\" stroke=\"#8A6B4A\" stroke-width=\"1\"/><path d=\"M-12-4h24l-3-5h-18z\" fill=\"#5A4636\"/><rect x=\"-6\" y=\"-2\" width=\"12\" height=\"4\" fill=\"#B0352F\"/><circle cx=\"0\" cy=\"5\" r=\"2.4\" fill=\"#E0A800\" stroke=\"#8A6B4A\" stroke-width=\".6\"/></g>\n      <!-- huyện nha -->\n      <g transform=\"translate(110 160)\"><rect x=\"-10\" y=\"-4\" width=\"20\" height=\"12\" fill=\"#E9DFCB\" stroke=\"#8A6B4A\" stroke-width=\"1\"/><path d=\"M-12-4h24l-4-5h-16z\" fill=\"#3E5A7A\"/><path d=\"M-3 8v-5h6v5z\" fill=\"#B0352F\"/></g>\n      <text x=\"110\" y=\"180\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#8A6B4A\">县衙</text>\n      <!-- văn miếu -->\n      <g transform=\"translate(292 228)\"><rect x=\"-10\" y=\"-4\" width=\"20\" height=\"12\" fill=\"#B0352F\"/><path d=\"M-12-4h24l-4-5h-16z\" fill=\"#E0A800\"/></g>\n      <text x=\"292\" y=\"250\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#8A6B4A\">文庙</text>\n      <!-- vọng lâu trên tường -->\n      <g fill=\"#7A5E3E\"><rect x=\"74\" y=\"148\" width=\"8\" height=\"8\"/><rect x=\"318\" y=\"148\" width=\"8\" height=\"8\"/><rect x=\"128\" y=\"42\" width=\"8\" height=\"8\"/><rect x=\"276\" y=\"252\" width=\"8\" height=\"8\"/><rect x=\"128\" y=\"252\" width=\"8\" height=\"8\"/><rect x=\"318\" y=\"66\" width=\"8\" height=\"8\"/></g>\n      <!-- chùa Song Lâm ngoài thành -->\n      <g transform=\"translate(30 262)\"><rect x=\"-10\" y=\"-4\" width=\"20\" height=\"12\" fill=\"#B0352F\"/><path d=\"M-13-4h26l-4-6h-18z\" fill=\"#3E5A7A\"/></g>\n      <text x=\"8\" y=\"288\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"7\" fill=\"#6E8A98\">↙ 双林寺 · 6 km</text>\n      <!-- bạn đang ở đây: cổng Nam -->\n      <g class=\"o-day\"><circle cx=\"232\" cy=\"268\" r=\"5\" fill=\"#C8423B\"/><circle cx=\"232\" cy=\"268\" r=\"2\" fill=\"#fff\"/></g>\n      <text class=\"chu-ga\" x=\"240\" y=\"271\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"8\" fill=\"#9A3A2E\">Bạn đang ở đây</text>\n      <text x=\"240\" y=\"281\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#9A3A2E\">南门 迎薰门</text>\n      <!-- la bàn -->\n      <g transform=\"translate(372 160)\"><circle r=\"18\" fill=\"#FBF5E6\" stroke=\"#C9B68E\" stroke-width=\"1.5\"/><path d=\"M0-13L4 0 0 13-4 0z\" fill=\"#C8423B\"/><path d=\"M0 13L4 0-4 0z\" fill=\"#8A7A6A\"/><text y=\"-21\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"9\" fill=\"#C8423B\">北</text></g>\n      <!-- khung tiêu đề -->\n      <g transform=\"translate(6 46)\"><rect width=\"66\" height=\"34\" rx=\"6\" fill=\"#FBF5E6\" stroke=\"#A4532D\" stroke-width=\"1.6\"/><rect x=\"3\" y=\"3\" width=\"60\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"#A4532D\" stroke-width=\".6\" stroke-dasharray=\"2 2\"/><text x=\"33\" y=\"19\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"11.5\" fill=\"#A4532D\">平遥古城图</text><text x=\"33\" y=\"28\" text-anchor=\"middle\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"5.5\" fill=\"#8A6B4A\">BẢN ĐỒ THÀNH CỔ</text></g>\n      <rect x=\"2\" y=\"2\" width=\"396\" height=\"296\" rx=\"16\" fill=\"none\" stroke=\"#C9B68E\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n    </svg>\n"};
// bản vẽ dãy nhà hang 窑洞 trong sân nhà Bình Dao, gian trái cắt mở để thấy bên trong (khung 400×330); khu(id, hình, x nhãn, y nhãn) do trang thu-trai-nghiem cung cấp
VH_PY.tn.zhu.nhaTen='Bản vẽ dãy nhà hang có mái vòm, gian bên trái cắt mở để thấy bên trong';
VH_PY.tn.zhu.ve=function(khu){
 var vom=function(cx){return 'M'+(cx-46)+' 270V170a46 46 0 0 1 92 0V270z'};
 return '<rect x="0" y="0" width="400" height="290" fill="#E6EEF3"/><g fill="#fff" opacity=".85"><ellipse cx="70" cy="30" rx="26" ry="7"/><ellipse cx="320" cy="22" rx="22" ry="6"/></g>'+
  // mặt tường gạch
  '<rect x="16" y="92" width="368" height="180" fill="#C9A577"/><g stroke="#B08A5C" stroke-width="1" opacity=".7">'+[104,116,128,140,152,164,176,188,200,212,224,236,248,260].map(function(y){return '<path d="M16 '+y+'H384"/>'}).join('')+'</g>'+
  khu('yaoding','<rect x="10" y="70" width="380" height="24" fill="#B58A58" stroke="#8A6640" stroke-width="2"/><g fill="#9A7448">'+[20,44,68,92,116,140,164,188,212,236,260,284,308,332,356].map(function(x){return '<rect x="'+x+'" y="60" width="14" height="10"/>'}).join('')+'</g><g fill="#F2B632"><ellipse cx="300" cy="66" rx="5" ry="10" transform="rotate(20 300 66)"/><ellipse cx="312" cy="66" rx="5" ry="10" transform="rotate(-15 312 66)"/><ellipse cx="324" cy="66" rx="5" ry="10" transform="rotate(10 324 66)"/></g>',200,48)+
  // gian trái: cắt mở thấy bên trong
  '<path d="'+vom(84)+'" fill="#F3E4C8" stroke="#8A6640" stroke-width="3"/>'+
  khu('kang','<rect x="40" y="226" width="76" height="44" fill="#B57E4E" stroke="#7A5232" stroke-width="2"/><rect x="40" y="220" width="76" height="8" rx="2" fill="#D8523E"/><path d="M48 220v-6h22v6z" fill="#F2D49A"/><path d="M52 236h56M52 248h56M52 260h56" stroke="#9A6A40" stroke-width="1"/>',78,200)+
  khu('zaotai','<rect x="112" y="234" width="18" height="36" fill="#8A6B4A" stroke="#5E4630" stroke-width="2"/><ellipse cx="121" cy="234" rx="10" ry="4" fill="#3A3A3A"/><path d="M121 230q-4-8 0-14M126 230q-4-8 0-14" stroke="#9AA" stroke-width="1.4" fill="none"/>',122,176)+
  // gian giữa: cửa + cửa sổ ô hoa
  '<path d="'+vom(200)+'" fill="#E9D7B4" stroke="#8A6640" stroke-width="3"/>'+
  khu('chuanghua','<path d="M160 196V170a40 40 0 0 1 80 0V196z" fill="#F6EEDC" stroke="#7A5232" stroke-width="2.4"/><g stroke="#7A5232" stroke-width="1.2" fill="none"><path d="M160 183h80M173 196v-50M187 196v-60M200 196v-64M213 196v-60M227 196v-50M164 160h72"/></g><g fill="#D23A2E"><path d="M178 172l6-6 6 6-6 6z"/><path d="M206 172l6-6 6 6-6 6z"/><circle cx="200" cy="152" r="5"/><path d="M168 190l4-4 4 4-4 4zM224 190l4-4 4 4-4 4z"/></g>',200,120)+
  khu('men','<rect x="182" y="204" width="36" height="66" fill="#6E4A2E" stroke="#4A3020" stroke-width="2"/><rect x="186" y="210" width="28" height="60" fill="#3E6FA8"/><path d="M186 226h28M186 244h28" stroke="#F2D49A" stroke-width="1.5"/><circle cx="200" cy="236" r="5" fill="#F2D49A"/>',200,288)+
  // gian phải
  '<path d="'+vom(316)+'" fill="#E9D7B4" stroke="#8A6640" stroke-width="3"/><path d="M280 200V176a36 36 0 0 1 72 0V200z" fill="#F6EEDC" stroke="#7A5232" stroke-width="2"/><g stroke="#7A5232" stroke-width="1" fill="none"><path d="M280 188h72M298 200v-50M316 200v-56M334 200v-50"/></g><rect x="300" y="210" width="32" height="60" fill="#6E4A2E"/>'+
  khu('yuanzi','<rect x="0" y="272" width="400" height="58" fill="#D9C7A2"/><g stroke="#C4AE84" stroke-width="1.2"><path d="M0 290H400M0 310H400M40 272v58M120 272v58M280 272v58M360 272v58"/></g><g transform="translate(330 300)"><ellipse rx="22" ry="8" fill="#9A9A92" stroke="#6E6E66" stroke-width="1.5"/><ellipse cy="-6" rx="16" ry="6" fill="#B0B0A8" stroke="#6E6E66" stroke-width="1.5"/><path d="M8-8l18-10" stroke="#7A5232" stroke-width="3"/></g>',90,304)+
  '';
};
window.VH_TP=window.VH_TP||{};window.VH_TP.py=window.VH_PY;
