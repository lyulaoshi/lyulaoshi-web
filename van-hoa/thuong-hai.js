// 文化盒 · Thành phố 上海 (BẢN THỬ, chờ cô duyệt nội dung). Ga 1 tuyến Giang Nam; cùng khung với các thành phố tuyến Hoa Bắc.
// diem: 8 điểm trên bản đồ (x = X/4, y ≈ Y/3 − 6 theo bản vẽ 400×300). tq: 4 景点, tn: 4 体验, sanh: sảnh ga.
// Ảnh: Wikimedia Commons, giấy phép tự do, đã tải về anh/ (WebP); a = [ảnh, trang nguồn, giấy phép, tác giả].
window.VH_SH={
diem:[
 {id:'waitan',loai:'tq',zh:'外滩',vi:'Bến Thượng Hải',x:58,y:37,ic:'den'},
 {id:'lujiazui',loai:'tq',zh:'陆家嘴',vi:'Lục Gia Chủy',x:75,y:41,ic:'ten-lua'},
 {id:'yuyuan',loai:'tq',zh:'豫园',vi:'Dự Viên',x:50,y:66,ic:'la'},
 {id:'nanjinglu',loai:'tq',zh:'南京路',vi:'Phố Nam Kinh',ngan:'Phố Nam Kinh',x:40,y:35,ic:'tui-tien'},
 {id:'chi',loai:'tn',zh:'吃',vi:'Bữa sáng Thượng Hải',ngan:'Ẩm thực',x:44,y:52,ic:'tra-sua'},
 {id:'shuo',loai:'tn',zh:'说',vi:'Trò chuyện với cô hàng xóm',ngan:'Tiếng nói',x:22,y:54,ic:'tin-nhan'},
 {id:'zhu',loai:'tn',zh:'住',vi:'Nhà thạch khố môn',ngan:'Nhà ở',x:32,y:66,ic:'mu'},
 {id:'su',loai:'tn',zh:'俗',vi:'Thượng Hải xưa và nay',ngan:'Phong tục',x:65,y:17,ic:'dong-ho'}],
tq:{
waitan:{zh:'外滩',py:'Wàitān',vi:'Bến Thượng Hải',ten2:'Dãy nhà cổ ven sông',chuTay:'外滩 · 万国建筑',
 anh:["anh/sh-wt12-lon.webp", "https://commons.wikimedia.org/wiki/File:20264-Shanghai,_The_Bund.jpg", "CC BY 2.0", "xiquinhosilva"],
 alt:'Dãy toà nhà cổ kiểu châu Âu bằng đá ven sông, có toà mái vòm và toà tháp đồng hồ, phía trước là lối đi rộng',
 gioi:'Bến Thượng Hải là con đường dài khoảng 1,5 km ở bờ tây sông Hoàng Phố 黄浦江. Hai bên đường là hơn 50 toà nhà cổ kiểu châu Âu, phần lớn xây đầu thế kỷ 20, nên được gọi là "triển lãm kiến trúc vạn quốc" 万国建筑博览群. Đứng trên bờ đê nhìn sang bên kia sông là những toà nhà chọc trời của khu Phố Đông.',
 nhan:[['diem','Dài khoảng 1,5 km'],['mu','Hơn 50 toà nhà cổ'],['den','Buổi tối lên đèn']],
 the:[
  {c:'#8A6B4A',chu:'钟',ten:'Tháp đồng hồ',phu:'Toà nhà Hải quan',ic:'dong-ho',tieu:'Tháp đồng hồ Hải quan',p:'Toà nhà Hải quan xây năm 1927 có tháp đồng hồ lớn trên nóc. Đồng hồ điểm chuông mỗi giờ, người đi đường nghe thấy cả một đoạn sông.',k:['钟','zhōng','đồng hồ, chuông'],
   a:["anh/sh-wt21.webp", "https://commons.wikimedia.org/wiki/File:2014.11.16.140720_Clock_Customs_House_Shanghai.jpg", "CC0", "Hermann Luyken"],alt:'Tháp đồng hồ vuông có mặt đồng hồ lớn trên nóc toà nhà đá',s:'object-position:50% 40%'},
  {c:'#C99A1E',chu:'夜',ten:'Bến lúc đêm',phu:'Cả dãy nhà sáng đèn',ic:'den',tieu:'Bến Thượng Hải về đêm',p:'Tối đến, cả dãy nhà cổ được chiếu đèn vàng, in bóng xuống mặt sông. Đây là lúc Bến Thượng Hải đông khách nhất.',k:['晚上','wǎnshang','buổi tối'],
   a:["anh/sh-wt5.webp", "https://commons.wikimedia.org/wiki/File:The_Bund,_Shanghai_at_night.jpg", "CC BY-SA 4.0", "Lloyd Tudor"],alt:'Dãy nhà cổ sáng đèn vàng ven sông trong đêm',s:'object-position:50% 55%'},
  {c:'#2F7FC1',chu:'江',ten:'Sông Hoàng Phố',phu:'Tàu thuyền qua lại',ic:'song',tieu:'Sông Hoàng Phố 黄浦江',p:'Sông Hoàng Phố chảy qua giữa thành phố rồi đổ ra sông Trường Giang. Tàu chở hàng, tàu du lịch, phà qua lại suốt ngày.',k:['江','jiāng','sông lớn'],
   a:["anh/sh-wt2.webp", "https://commons.wikimedia.org/wiki/File:Shanghai_Bund-20150516-RM-173803.jpg", "CC BY-SA 4.0", "Ermell"],alt:'Mặt sông rộng có tàu chạy, bên kia là dãy nhà cổ và nhà cao tầng',s:'object-position:50% 55%'},
  {c:'#5E6870',chu:'旧',ten:'Bến năm 1988',phu:'Hơn 30 năm trước',ic:'anh',tieu:'Bến Thượng Hải năm 1988',p:'Ảnh chụp năm 1988: đường còn ít ô tô, nhiều xe đạp, xe buýt. Các toà nhà cổ thì vẫn đứng đó đến ngày nay.',k:['以前','yǐqián','trước kia'],
   a:["anh/sh-wt6.webp", "https://commons.wikimedia.org/wiki/File:The_Bund_in_Shanghai_in_1988.jpg", "CC0", "Jan Kranendonk (https://www.jankranendon"],alt:'Ảnh cũ: dãy nhà cổ bên con đường có xe buýt và người đi xe đạp',s:'object-position:50% 45%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh">外<span class="o-trong"></span></b> (Bến Thượng Hải)',o:['滩','摊','难','汉'],a:0,zh:1,
   x:'滩 tān là bãi đất ven sông. 外滩 là "bãi bên ngoài", nằm ngoài thành cổ Thượng Hải xưa.',k:['外','wài','bên ngoài']},
  {t:'c',q:'Vì sao Bến Thượng Hải được gọi là "triển lãm kiến trúc vạn quốc"?',o:['Vì có rất nhiều toà nhà kiểu châu Âu khác nhau','Vì có nhiều bảo tàng','Vì có nhiều cờ các nước','Vì có nhiều chợ'],a:0,
   x:'万国 là "muôn nước": các toà nhà theo nhiều phong cách châu Âu, mỗi toà một vẻ.',k:['建筑','jiànzhù','kiến trúc']},
  {t:'c',anh:'50% 50%',tam:'60% 30%',khung:'Nhìn nóc các toà nhà',q:'Quan sát ảnh: trên nóc một toà nhà có gì?',o:['Một tháp đồng hồ','Một cối xay gió','Một lá cờ rất to','Một bể bơi'],a:0,
   x:'Đó là tháp đồng hồ của toà nhà Hải quan, xây năm 1927.',k:['钟楼','zhōnglóu','tháp đồng hồ']},
  {t:'ds',q:'Các toà nhà cổ ở Bến Thượng Hải đều xây theo kiểu nhà truyền thống Trung Quốc mái ngói cong.',a:1,
   x:'Sai: phần lớn là nhà đá kiểu châu Âu, có cột, mái vòm, tháp đồng hồ.',k:['欧洲','Ōuzhōu','châu Âu']},
  {t:'c',q:'Bến Thượng Hải nằm ở bờ nào của sông Hoàng Phố?',o:['Bờ tây, khu Phố Tây 浦西','Bờ đông, khu Phố Đông 浦东','Giữa sông','Bên bờ biển'],a:0,
   x:'浦西 là phía tây sông (khu phố cũ), 浦东 là phía đông sông (khu mới).',k:['西','xī','phía tây']}]},

lujiazui:{zh:'陆家嘴',py:'Lùjiāzuǐ',vi:'Lục Gia Chủy',ten2:'Rừng nhà chọc trời',chuTay:'陆家嘴 · 浦东',
 anh:["anh/sh-lj9-lon.webp", "https://commons.wikimedia.org/wiki/File:20191112_Lujiazui_skyline-22.jpg", "CC0", "Balon Greyjoy"],
 alt:'Bên kia sông là tháp truyền hình có những quả cầu tròn và rất nhiều nhà chọc trời, cao nhất là toà tháp xoắn',
 gioi:'Lục Gia Chủy là khu tài chính ở bờ đông sông Hoàng Phố. Năm 1990, nơi này còn là ruộng, nhà kho và nhà thấp; chỉ hơn 30 năm sau đã thành "rừng" nhà chọc trời. Nổi bật nhất là tháp truyền hình Đông Phương Minh Châu cao 468 m và tháp Thượng Hải cao 632 m, toà nhà cao nhất Trung Quốc.',
 nhan:[['lich','Xây dựng từ 1990'],['ten-lua','Tháp Thượng Hải 632 m'],['mat','Ngắm từ bên kia sông']],
 the:[
  {c:'#C8423B',chu:'珠',ten:'Đông Phương Minh Châu',phu:'Tháp truyền hình 468 m',ic:'lap-lanh',tieu:'Tháp Đông Phương Minh Châu',p:'Tháp truyền hình xây xong năm 1994, có những quả cầu màu hồng to nhỏ xâu trên thân tháp, như hạt ngọc rơi xuống mâm ngọc. Lên quả cầu có sàn kính, đứng nhìn thẳng xuống đất.',k:['珍珠','zhēnzhū','ngọc trai'],
   a:["anh/sh-lj211.webp", "https://commons.wikimedia.org/wiki/File:2010_Oriental_Pearl_Tower,_Shanghai_01.jpg", "CC0", "Gary Todd"],alt:'Tháp truyền hình nhìn từ dưới lên, thân tháp xâu những quả cầu màu hồng',s:'object-position:50% 40%'},
  {c:'#2F7FC1',chu:'高',ten:'Tháp Thượng Hải',phu:'Cao nhất Trung Quốc',ic:'ten-lua',tieu:'Tháp Thượng Hải 上海中心',p:'Toà nhà cao 632 m, xoắn dần lên như dải lụa. Hình xoắn giúp toà nhà đỡ bị gió lớn xô vào. Thang máy chạy rất nhanh lên đài ngắm cảnh.',k:['高','gāo','cao'],
   a:["anh/sh-lj32.webp", "https://commons.wikimedia.org/wiki/File:Shanghai_Shanghai_Tower_5166304.jpg", "CC0", "Ermell"],alt:'Toà tháp kính xanh xoắn dần lên trời, nhìn từ chân tháp',s:'object-position:50% 40%'},
  {c:'#5E6870',chu:'塔',ten:'Kim Mậu và "cái mở nắp chai"',phu:'Hai toà nhà nổi tiếng',ic:'mu',tieu:'Tháp Kim Mậu và Trung tâm Tài chính',p:'Tháp Kim Mậu (420 m) có dáng như một ngôi tháp chùa nhiều tầng. Bên cạnh là Trung tâm Tài chính Thế giới (492 m), đỉnh có ô trống hình thang nên được gọi vui là "cái mở nắp chai".',k:['大楼','dàlóu','toà nhà lớn'],
   a:["anh/sh-lj1.webp", "https://commons.wikimedia.org/wiki/File:Lujiazui_skyline-20071023-RM-091435.jpg", "CC BY-SA 4.0", "Reinhold Möller Ermell"],alt:'Hai toà nhà chọc trời đứng cạnh nhau: một toà nhiều tầng thu nhỏ dần như tháp, một toà đỉnh có ô trống',s:'object-position:50% 35%'},
  {c:'#B0352F',chu:'灯',ten:'Lục Gia Chủy về đêm',phu:'Nhà cao tầng đổi màu',ic:'den',tieu:'Lục Gia Chủy về đêm',p:'Tối đến, mặt các toà nhà chiếu đèn nhiều màu, tháp truyền hình đổi màu liên tục, in bóng lấp lánh xuống mặt sông.',k:['灯光','dēngguāng','ánh đèn'],
   a:["anh/sh-lj3.webp", "https://commons.wikimedia.org/wiki/File:Shanghai_Lujiazui_night_skyline_2017_-_Flickr.jpg", "CC0", "Larry Qian"],alt:'Nhà chọc trời và tháp truyền hình sáng đèn nhiều màu bên sông về đêm',s:'object-position:40% 50%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh">东方明<span class="o-trong"></span></b>',o:['珠','猪','朱','竹'],a:0,zh:1,
   x:'明珠 là viên ngọc sáng. 珠, 猪 (lợn), 朱 (đỏ), 竹 (tre) đều đọc zhū hoặc gần giống.',k:['明珠','míngzhū','viên ngọc sáng']},
  {t:'c',q:'Vì sao tháp Thượng Hải được xây xoắn dần lên?',o:['Để đỡ bị gió lớn xô vào','Để trông giống cái bánh','Vì xây nhầm','Để có nhiều tầng hầm'],a:0,
   x:'Hình xoắn làm gió trượt quanh toà nhà, nhà cao 632 m nên càng cần đỡ gió.',k:['风','fēng','gió']},
  {t:'c',anh:'50% 50%',tam:'14% 45%',khung:'Nhìn tháp truyền hình',q:'Quan sát ảnh: trên thân tháp truyền hình có gì?',o:['Những quả cầu tròn','Những cánh quạt','Những lá cờ','Những chiếc thuyền'],a:0,
   x:'Những quả cầu to nhỏ xâu trên thân tháp, như hạt ngọc: vì thế tháp tên là "Minh Châu".',k:['球','qiú','quả cầu, quả bóng']},
  {t:'ds',q:'Năm 1990, Phố Đông đã có rất nhiều nhà chọc trời.',a:1,
   x:'Sai: năm 1990 Phố Đông còn ruộng, nhà kho; nhà chọc trời mọc lên sau đó.',k:['变化','biànhuà','thay đổi']},
  {t:'c',q:'Toà nhà cao nhất Trung Quốc tên là gì?',o:['Tháp Thượng Hải 上海中心','Tháp Đông Phương Minh Châu','Tháp Kim Mậu','Tháp chuông Hải quan'],a:0,
   x:'上海中心大厦 cao 632 m. Đông Phương Minh Châu cao 468 m.',k:['最高','zuì gāo','cao nhất']}]},

yuyuan:{zh:'豫园',py:'Yùyuán',vi:'Dự Viên',ten2:'Khu vườn để cha mẹ vui',chuTay:'豫园 · 江南园林',
 anh:["anh/sh-yy2-lon.webp", "https://commons.wikimedia.org/wiki/File:Shanghai_-_Yu_Garden_-_0035.jpg", "CC BY-SA 3.0", "Stefan Fussan"],
 alt:'Toà lầu gỗ mái cong vút soi bóng xuống hồ, quanh hồ là cây xanh và đá, xa xa là nhà chọc trời',
 gioi:'Dự Viên là khu vườn cổ kiểu Giang Nam giữa lòng thành phố, do quan nhà Minh Phan Doãn Đoan 潘允端 cho làm từ năm 1559, để cha mẹ tuổi già được vui vẻ. 豫 nghĩa là vui vẻ, yên vui. Trong vườn có lầu gác, hành lang, hồ nước, non bộ đá; ngoài cổng vườn là đình giữa hồ và cây cầu chín khúc.',
 nhan:[['lich','Làm từ năm 1559'],['la','Vườn kiểu Giang Nam'],['tim','Món quà cho cha mẹ']],
 the:[
  {c:'#B0352F',chu:'桥',ten:'Cầu chín khúc',phu:'Và đình giữa hồ',ic:'song',tieu:'Cầu chín khúc 九曲桥',p:'Cây cầu đá gấp khúc nhiều lần dẫn tới quán trà Hồ Tâm Đình 湖心亭 giữa hồ. Người ta kể cầu làm gấp khúc vì ma quỷ chỉ đi được đường thẳng.',k:['桥','qiáo','cây cầu'],
   a:["anh/sh-qq1.webp", "https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E6%B5%B7%E5%9F%8E%E9%9A%8D%E5%BA%99%EF%BC%8C_Shanghai_Yu_Garden_-_panoramio_(1).jpg", "CC BY-SA 3.0", "Aaron Zhu"],alt:'Đình gỗ hai tầng mái cong giữa hồ, có cây cầu gấp khúc dẫn tới',s:'object-position:40% 45%'},
  {c:'#5E6870',chu:'石',ten:'Ngọc Linh Lung',phu:'Hòn đá nhiều lỗ',ic:'lap-lanh',tieu:'Đá Ngọc Linh Lung 玉玲珑',p:'Hòn đá cao hơn 3 m, khắp mình có lỗ, là một trong ba hòn đá nổi tiếng nhất Giang Nam. Người ta kể đốt hương dưới chân đá thì khói bay ra từ tất cả các lỗ.',k:['石头','shítou','hòn đá'],
   a:["anh/sh-yl1.webp", "https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E6%B5%B7%E8%B1%AB%E5%9B%AD%E7%8E%89%E7%8E%B2%E7%8F%91-1.jpg", "CC BY-SA 3.0", "Gisling"],alt:'Hòn đá cao màu xám nhiều lỗ thủng đứng trên bệ, phía sau là tường trắng',s:'object-position:50% 40%'},
  {c:'#2E8C6A',chu:'山',ten:'Non bộ',phu:'Núi đá trong vườn',ic:'la',tieu:'Non bộ 假山',p:'Đá chồng lên nhau thành núi nhỏ có hang, có lối đi, có thác nước. 假山 là "núi giả": thu nhỏ núi non vào trong vườn.',k:['假','jiǎ','giả'],
   a:["anh/sh-yy8.webp", "https://commons.wikimedia.org/wiki/File:Yu_Garden_Shanghai_November_2017_013.jpg", "CC BY-SA 4.0", "King of Hearts"],alt:'Hồ nước trong vườn, bờ hồ xếp đá lởm chởm thành núi nhỏ, phía sau là lầu gỗ',s:'object-position:60% 55%'},
  {c:'#C99A1E',chu:'堂',ten:'Biển Tam Tuệ Đường',phu:'Chữ viết trên biển gỗ',ic:'sach',tieu:'Tam Tuệ Đường 三穗堂',p:'Gian nhà lớn nhất vườn treo nhiều tấm biển chữ vàng: 三穗堂 nghĩa là "nhà ba bông lúa", cầu mùa màng bội thu.',k:['堂','táng','gian nhà lớn'],
   a:["anh/sh-yy12.webp", "https://commons.wikimedia.org/wiki/File:Yu_Garden_Shanghai_November_2017_005.jpg", "CC BY-SA 4.0", "King of Hearts"],alt:'Ba tấm biển gỗ chữ Hán treo chồng lên nhau trong gian nhà cổ',s:'object-position:50% 50%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh"><span class="o-trong"></span>园</b> (khu vườn làm cho cha mẹ vui)',o:['豫','雨','鱼','玉'],a:0,zh:1,
   x:'豫 yù là vui vẻ, yên vui. 雨 mưa, 鱼 cá, 玉 ngọc (đọc yǔ, yú, yù).',k:['园','yuán','khu vườn']},
  {t:'c',q:'Phan Doãn Đoan làm Dự Viên để làm gì?',o:['Để cha mẹ tuổi già vui vẻ','Để bán vé','Để làm chợ','Để luyện võ'],a:0,
   x:'Một món quà hiếu thảo: 孝顺 xiàoshùn là hiếu thảo với cha mẹ.',k:['孝顺','xiàoshùn','hiếu thảo']},
  {t:'c',anh:'50% 50%',tam:'45% 35%',khung:'Nhìn mái lầu',q:'Quan sát ảnh: các góc mái lầu trông thế nào?',o:['Cong vút lên','Bằng phẳng','Tròn như cái bát','Nhọn như kim'],a:0,
   x:'Mái nhà Giang Nam có góc cong vút lên, trông nhẹ nhàng như sắp bay.',k:['屋顶','wūdǐng','mái nhà']},
  {t:'ds',q:'Cầu chín khúc là cây cầu thẳng tắp.',a:1,
   x:'Sai: 九曲 là "chín khúc", cầu gấp khúc nhiều lần, đi chậm để ngắm hồ.',k:['弯','wān','cong, khúc quanh']},
  {t:'vt',q:'Giữa hồ có đình, có cây cầu dẫn khách ra đình.',a:2,
   x:'Cả hai: ở Hà Nội có cầu Thê Húc dẫn ra đền Ngọc Sơn trên hồ Hoàn Kiếm.',k:['湖','hú','hồ']}]},

nanjinglu:{zh:'南京路',py:'Nánjīng Lù',vi:'Phố Nam Kinh',ten2:'Phố buôn bán số một',chuTay:'南京路 · 步行街',
 anh:["anh/sh-nl5-lon.webp", "https://commons.wikimedia.org/wiki/File:Nanjing_Pedestrian_Shopping_Street_at_Evening.jpg", "CC BY-SA 4.0", "TheBlueRutabaga"],
 alt:'Phố đi bộ đông người lúc chiều tối, hai bên là cửa hàng nhà cao tầng, bên phải có chiếc xe nhỏ chở khách',
 gioi:'Phố Nam Kinh bắt đầu từ Bến Thượng Hải, chạy về phía tây hơn 5 km. Đoạn phố đi bộ Nam Kinh Đông dài khoảng 1,2 km, chỉ dành cho người đi bộ. Từ đầu thế kỷ 20, nơi đây đã có những bách hoá lớn nhất Trung Quốc, nên được gọi là "phố buôn bán số một Trung Hoa" 中华商业第一街.',
 nhan:[['diem','Dài hơn 5 km'],['tui-tien','Phố buôn bán số một'],['den','Biển đèn rực rỡ']],
 the:[
  {c:'#C8423B',chu:'人',ten:'Phố đông người',phu:'Khách khắp nơi',ic:'mat-cuoi',tieu:'Phố đi bộ',p:'Ngày lễ, mỗi ngày có hàng chục vạn người đi trên phố. Ô tô không được vào đoạn phố đi bộ.',k:['步行街','bùxíngjiē','phố đi bộ'],
   a:["anh/sh-nl3.webp", "https://commons.wikimedia.org/wiki/File:2014.11.15.181414_Nanjing_Road_Pedestrian_Zone_Shanghai.jpg", "CC0", "Hermann Luyken"],alt:'Rất đông người đi bộ trên phố sáng đèn buổi tối',s:'object-position:50% 55%'},
  {c:'#C99A1E',chu:'楼',ten:'Bách hoá xưa',phu:'Hơn 100 năm',ic:'mu',tieu:'Những bách hoá lâu đời',p:'Hai bên phố còn những toà nhà bách hoá xây từ đầu thế kỷ 20, có tháp đồng hồ trên nóc. Ngày ấy, vào bách hoá đi thang máy là chuyện rất mới lạ.',k:['百货','bǎihuò','bách hoá'],
   a:["anh/sh-nl7.webp", "https://commons.wikimedia.org/wiki/File:2014.11.15.184722_East_Nanjing_Road_Pedestrian_Zone_Shanghai.jpg", "CC0", "Hermann Luyken"],alt:'Toà nhà cổ có tháp đồng hồ trên nóc sáng đèn vàng buổi tối',s:'object-position:50% 40%'},
  {c:'#2F7FC1',chu:'灯',ten:'Biển đèn',phu:'Chữ sáng rực',ic:'den',tieu:'Biển đèn neon',p:'Biển hiệu đèn neon dựng dọc theo nhà, chữ Hán to sáng rực. Đi trên phố buổi tối như đi giữa rừng chữ.',k:['招牌','zhāopai','biển hiệu'],
   a:["anh/sh-nl1.webp", "https://commons.wikimedia.org/wiki/File:2014.11.15.181427_Nanjing_Road_Pedestrian_Zone_Shanghai.jpg", "CC0", "Hermann Luyken"],alt:'Biển hiệu đèn neon nhiều màu dựng dọc các toà nhà trên phố đêm',s:'object-position:50% 40%'},
  {c:'#2E8C6A',chu:'街',ten:'Phố ban ngày',phu:'Thong thả mua sắm',ic:'tui-tien',tieu:'Phố Nam Kinh ban ngày',p:'Ban ngày phố rộng rãi, có ghế ngồi, cây xanh; khách thong thả mua sắm, ăn quà, chụp ảnh.',k:['买东西','mǎi dōngxi','mua đồ'],
   a:["anh/sh-nl12.webp", "https://commons.wikimedia.org/wiki/File:East_Nanjing_Road_(40559723522).jpg", "CC BY 2.0", "David Stanley from Nanaimo, Canada"],alt:'Phố đi bộ ban ngày lát gạch đỏ, hai bên là cửa hàng nhà cao tầng',s:'object-position:50% 50%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh">步行<span class="o-trong"></span></b> (phố đi bộ)',o:['街','接','节','姐'],a:0,zh:1,
   x:'街 jiē là phố. 步行 bùxíng là đi bộ.',k:['街','jiē','phố']},
  {t:'c',q:'"中华商业第一街" nghĩa là gì?',o:['Phố buôn bán số một Trung Hoa','Con phố dài nhất','Con phố đầu tiên được xây','Phố có nhiều cây nhất'],a:0,
   x:'商业 là buôn bán, thương mại; 第一 là số một.',k:['第一','dì-yī','thứ nhất']},
  {t:'c',anh:'50% 50%',tam:'85% 62%',khung:'Nhìn bên phải phố',q:'Quan sát ảnh: bên phải phố có chiếc xe gì?',o:['Xe nhỏ chở khách đi dạo','Xe cứu hoả','Xe tải chở hàng','Xe đạp ba bánh'],a:0,
   x:'Trên phố đi bộ có xe nhỏ chạy chậm chở khách đi dạo, người ta gọi là "xe leng keng" 铛铛车.',k:['车','chē','xe']},
  {t:'ds',q:'Ô tô được chạy tự do trên đoạn phố đi bộ Nam Kinh Đông.',a:1,
   x:'Sai: đoạn phố đi bộ chỉ dành cho người đi bộ (và xe nhỏ chở khách).',k:['走路','zǒulù','đi bộ']},
  {t:'vt',q:'Có phố đi bộ buổi tối đông vui, nhiều cửa hàng và biển đèn.',a:2,
   x:'Cả hai: ở Hà Nội có phố đi bộ quanh hồ Hoàn Kiếm, ở TP. Hồ Chí Minh có phố đi bộ Nguyễn Huệ.',k:['热闹','rènao','náo nhiệt']}]}
}};

window.VH_SH.tn={
chi:{loai:'menu',zh:'吃',py:'chī',vi:'Bữa sáng Thượng Hải',ten2:'Bánh bao có nước canh',chuTay:'小笼包 · 上海早餐',anh:["anh/sh-xl3-lon.webp", "https://commons.wikimedia.org/wiki/File:2019-02-22_Xiaolongbao_in_%22Taste_Of_Shanghai%22_restaurant,_Sydney,_Australia.jpg", "CC BY-SA 4.0", "Maksym Kozlenko"],alt:'Xửng tre đầy bánh bao nhỏ vỏ mỏng xếp sát nhau',
 gioi:'Người Thượng Hải ăn sáng rất phong phú: bánh bao nhỏ có nước canh, bánh bao rán, mì trộn mỡ hành, nắm cơm nếp, sữa đậu nành với quẩy. Món ăn Thượng Hải thường có vị ngọt đậm. Hôm nay em đứng quán: đọc yêu cầu của khách rồi chọn đúng món trên thực đơn.',
 nhan:[['tra-sua','6 món đặc sản'],['but','Đọc thực đơn chữ Hán'],['tin-nhan','6 vị khách']],nut:'Mở quán · 6 vị khách',
 mon:[
  {id:'xiaolong',zh:'小笼包',py:'xiǎolóngbāo',vi:'bánh bao nhỏ hấp',gia:20,a:["anh/sh-xl2.webp", "https://commons.wikimedia.org/wiki/File:Xiaolongbao_Shanghai.jpg", "CC BY-SA 4.0", "Robigasp"],mo:'Vỏ mỏng, nhân thịt có nước canh nóng bên trong. Ăn phải cắn một lỗ nhỏ, húp nước canh trước, kẻo bỏng lưỡi.'},
  {id:'shengjian',zh:'生煎包',py:'shēngjiānbāo',vi:'bánh bao rán',gia:12,a:["anh/sh-sj2.webp", "https://commons.wikimedia.org/wiki/File:Shengjian_Mantou_on_a_Pan.jpg", "CC BY-SA 2.0", "Luca Mascaro"],mo:'Bánh bao nhân thịt rán trong chảo to, đáy giòn vàng, mặt rắc vừng và hành; bên trong cũng có nước thịt.'},
  {id:'congyou',zh:'葱油拌面',py:'cōngyóu bànmiàn',vi:'mì trộn mỡ hành',gia:15,a:["anh/sh-cy2.webp", "https://commons.wikimedia.org/wiki/File:Food_%E4%B8%8A%E6%B5%B7%E8%8F%9C,_%E6%BB%AC%E8%8F%9C,_%E6%9C%AC%E5%B9%AB%E8%8F%9C,_%E4%B8%8A%E6%B5%B7,_%E4%B8%AD%E8%8F%AF%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9C%8B,_%E4%B8%AD%E5%9C%8B,_Shanghai,_People%27s_Republic_of_China,_PRC,_China_(30427507516).jpg", "CC BY-SA 2.0", "bryan... from Taipei, Taiwan"],mo:'Hành lá phi trong dầu cho đến khi giòn và thơm, trộn với mì và nước tương. Món mì đơn giản mà người Thượng Hải rất thích.'},
  {id:'cifantuan',zh:'粢饭团',py:'cífàntuán',vi:'nắm cơm nếp',gia:8,a:["anh/sh-cf23.webp", "https://commons.wikimedia.org/wiki/File:CiFanTuan2.jpg", "CC BY-SA 3.0", "Galaxyharrylion"],mo:'Cơm nếp nắm tròn, bên trong cuộn quẩy giòn, ruốc thịt, dưa muối. Cầm tay vừa đi vừa ăn, tiện cho buổi sáng vội đi làm.'},
  {id:'doujiang',zh:'豆浆油条',py:'dòujiāng yóutiáo',vi:'sữa đậu nành và quẩy',gia:6,a:["anh/sh-yt1.webp", "https://commons.wikimedia.org/wiki/File:Doujiang_and_youtiao_Taipei.jpg", "CC BY-SA 4.0", "KQuhen"],mo:'Một cốc sữa đậu nành nóng và một chiếc quẩy chiên giòn: bữa sáng quen thuộc của nhiều người Trung Quốc.'},
  {id:'hongshao',zh:'红烧肉',py:'hóngshāoròu',vi:'thịt kho đỏ',gia:48,a:["anh/sh-hs1.webp", "https://commons.wikimedia.org/wiki/File:Red_braised_pork_(20141106191221).JPG", "CC BY-SA 4.0", "N509FZ"],mo:'Thịt ba chỉ kho với nước tương và đường phèn cho đến khi đỏ bóng, mềm. Kiểu Thượng Hải có vị ngọt đậm, ăn với cơm trắng.'}],
 don:[
  {zh:'我要一笼小包子，咬开里面有热汤的那种。',py:'Wǒ yào yì lóng xiǎo bāozi, yǎokāi lǐmiàn yǒu rè tāng de nà zhǒng.',vi:'Cho tôi một xửng bánh bao nhỏ, loại cắn ra bên trong có nước canh nóng ấy.',a:'xiaolong',k:['汤','tāng','nước canh']},
  {zh:'我想吃底下煎得脆脆的包子，上面有芝麻和葱。',py:'Wǒ xiǎng chī dǐxia jiān de cuìcuì de bāozi, shàngmiàn yǒu zhīma hé cōng.',vi:'Tôi muốn ăn bánh bao đáy rán giòn giòn, bên trên có vừng và hành.',a:'shengjian',k:['煎','jiān','rán áp chảo']},
  {zh:'来一碗面，拌上香香的葱油。',py:'Lái yì wǎn miàn, bàn shàng xiāngxiāng de cōngyóu.',vi:'Cho một bát mì, trộn với mỡ hành thơm thơm.',a:'congyou',k:['葱','cōng','hành lá']},
  {zh:'我赶时间，要一个可以拿着走的糯米饭团。',py:'Wǒ gǎn shíjiān, yào yí ge kěyǐ názhe zǒu de nuòmǐ fàntuán.',vi:'Tôi đang vội, cho một nắm cơm nếp cầm đi được.',a:'cifantuan',k:['糯米','nuòmǐ','gạo nếp']},
  {zh:'给我一杯热豆浆，再来一根油条。',py:'Gěi wǒ yì bēi rè dòujiāng, zài lái yì gēn yóutiáo.',vi:'Cho tôi một cốc sữa đậu nành nóng, thêm một chiếc quẩy.',a:'doujiang',k:['根','gēn','chiếc, cây (lượng từ vật dài)']},
  {zh:'中午我想吃米饭，配一盘甜甜的、红红的肉。',py:'Zhōngwǔ wǒ xiǎng chī mǐfàn, pèi yì pán tiántián de, hónghóng de ròu.',vi:'Trưa nay tôi muốn ăn cơm, kèm một đĩa thịt ngọt ngọt, đỏ đỏ.',a:'hongshao',k:['甜','tián','ngọt']}]},

shuo:{loai:'chat',av:'阿',zh:'说',py:'shuō',vi:'Trò chuyện với cô hàng xóm',ten2:'Vài câu tiếng Thượng Hải',chuTay:'上海话 · 弄堂',anh:["anh/sh-jz8-lon.webp", "https://commons.wikimedia.org/wiki/File:Street_scenes_in_Shanghai_06.jpg", "CC0", "Brakeet"],alt:'Con phố Thượng Hải rợp bóng cây, có người đi xe đạp trên vỉa hè',
 gioi:'Người Thượng Hải nói tiếng phổ thông, nhưng ở nhà, ngoài ngõ còn nói tiếng Thượng Hải 上海话, nghe khác hẳn. Em gặp một cô hàng xóm 阿姨 trong ngõ: nghe cô nói rồi chọn câu đáp.',
 nhan:[['tin-nhan','Hội thoại 5 lượt'],['loa','Nghe cô hàng xóm'],['lap-lanh','Vài từ tiếng Thượng Hải']],nut:'Vào ngõ · 5 lượt nói',
 luot:[
  {zh:'侬好！你是来上海玩的吧？',py:'Nóng hǎo! Nǐ shì lái Shànghǎi wán de ba?',vi:'Chào cháu! Cháu đến Thượng Hải chơi phải không?',hoi:'"侬好" trong tiếng Thượng Hải nghĩa là gì?',o:['你好 xin chào','再见 tạm biệt','谢谢 cảm ơn'],a:0,
   x:'侬 nóng là "bạn, cháu" trong tiếng Thượng Hải. 侬好 = 你好.',k:['你好','nǐ hǎo','xin chào']},
  {zh:'我们上海人说"阿拉"，意思就是"我们"。',py:'Wǒmen Shànghǎi rén shuō "ālā", yìsi jiù shì "wǒmen".',vi:'Người Thượng Hải chúng tôi nói "a-la", nghĩa là "chúng tôi".',hoi:'"阿拉" nghĩa là gì?',o:['我们 chúng tôi','他们 họ','你们 các bạn'],a:0,
   x:'阿拉 ālā = 我们. Người Thượng Hải hay tự gọi mình là "阿拉上海人".',k:['意思','yìsi','ý nghĩa']},
  {zh:'早饭吃了吗？弄堂口的生煎，老好吃的！',py:'Zǎofàn chīle ma? Lòngtáng kǒu de shēngjiān, lǎo hǎochī de!',vi:'Ăn sáng chưa? Bánh bao rán ở đầu ngõ ngon lắm đấy!',hoi:'Cô giới thiệu món gì ở đầu ngõ?',o:['生煎 bánh bao rán','火锅 lẩu','烤鸭 vịt quay'],a:0,
   x:'弄堂 lòngtáng là ngõ nhỏ Thượng Hải. Tiếng Thượng Hải nói 老 lǎo thay cho 很: 老好吃 = rất ngon.',k:['弄堂','lòngtáng','ngõ nhỏ']},
  {zh:'晚上去外滩走走，两边的灯都亮了，特别漂亮。',py:'Wǎnshang qù Wàitān zǒuzou, liǎngbiān de dēng dōu liàng le, tèbié piàoliang.',vi:'Tối cháu ra Bến Thượng Hải dạo đi, đèn hai bên sông đều sáng, đẹp lắm.',hoi:'Buổi tối cô khuyên đi đâu?',o:['Bến Thượng Hải','Sân bay','Bệnh viện'],a:0,
   x:'两边 liǎngbiān là hai bên: bên này nhà cổ, bên kia nhà chọc trời, đều sáng đèn.',k:['漂亮','piàoliang','đẹp']},
  {zh:'去哪儿都坐地铁吧，一张交通卡就行了。',py:'Qù nǎr dōu zuò dìtiě ba, yì zhāng jiāotōngkǎ jiù xíng le.',vi:'Đi đâu thì cứ đi tàu điện ngầm, một tấm thẻ giao thông là được.',hoi:'Đi tàu điện ngầm cần gì?',o:['thẻ giao thông','vé máy bay','hộ chiếu'],a:0,
   x:'交通卡 jiāotōngkǎ là thẻ đi tàu điện ngầm, xe buýt, phà. 就行了 là "là được rồi".',k:['地铁','dìtiě','tàu điện ngầm']}]},

zhu:{loai:'nha',zh:'住',py:'zhù',vi:'Nhà thạch khố môn',ten2:'Nhà trong ngõ Thượng Hải',chuTay:'石库门 · 里弄',anh:["anh/sh-sk2-lon.webp", "https://commons.wikimedia.org/wiki/File:Entrance_of_a_Shikumen_Lilong_on_Shanhaiguan_Rd..JPG", "CC BY-SA 3.0", "Livelikerw"],alt:'Cổng vào một con ngõ nhà thạch khố môn: khung cổng xây gạch, hai bên là dãy nhà hai tầng',
 gioi:'Từ cuối thế kỷ 19, người Thượng Hải ở trong những dãy nhà liền nhau trong ngõ 弄堂. Mỗi nhà có khung cổng bằng đá, cánh cửa gỗ sơn đen, nên gọi là 石库门 "thạch khố môn". Một căn thường có nhiều gia đình ở chung. Chạm vào từng phần của bản vẽ để khám phá, rồi trả lời câu hỏi bằng cách chạm vào bản vẽ.',
 nhan:[['mu','Nhà 石库门'],['kinh-lup','Khám phá 6 phần'],['tick','5 câu chạm bản vẽ']],nut:'Vào nhà · khám phá',
 khamT:'Khám phá nhà thạch khố môn',khamP:'Chạm vào từng phần: cổng đá, giếng trời, phòng khách, bếp, phòng nhỏ trên bếp, sân phơi… để xem tên gọi và công dụng.',
 khu:{
  shikumen:{zh:'石库门',py:'shíkùmén',vi:'cổng đá',mo:'Khung cổng bằng đá, hai cánh cửa gỗ sơn đen có vòng đồng để gõ; trên cổng có trán cửa đắp hoa văn.'},
  tianjing:{zh:'天井',py:'tiānjǐng',vi:'giếng trời',mo:'Khoảng sân nhỏ ngay sau cổng, không có mái, để lấy ánh sáng và gió; người ta đặt chậu cây, chum nước.'},
  ketang:{zh:'客堂',py:'kètáng',vi:'phòng khách',mo:'Gian giữa tầng dưới: tiếp khách, ăn cơm, ngày Tết cả nhà quây quần.'},
  zaopijian:{zh:'灶披间',py:'zàopījiān',vi:'bếp',mo:'Bếp ở phía sau nhà. Khi nhiều gia đình ở chung, mỗi nhà một cái bếp nhỏ trong cùng gian bếp.'},
  tingzijian:{zh:'亭子间',py:'tíngzijiān',vi:'phòng nhỏ trên bếp',mo:'Căn phòng nhỏ, thấp, nằm trên bếp. Giá thuê rẻ nên nhiều nhà văn, sinh viên nghèo từng ở đây.'},
  shaitai:{zh:'晒台',py:'shàitái',vi:'sân phơi',mo:'Sân nhỏ trên cùng, gác sào tre phơi quần áo, phơi chăn khi trời nắng.'}},
 cau:[
  {q:'Vào nhà phải đi qua đâu đầu tiên?',a:['shikumen'],x:'石库门 cổng đá: 石 là đá, 门 là cửa.',k:['门','mén','cửa']},
  {q:'Phơi quần áo ở đâu?',a:['shaitai'],x:'晒台 sân phơi: 晒 là phơi nắng.',k:['晒','shài','phơi nắng']},
  {q:'Nấu cơm ở đâu?',a:['zaopijian'],x:'灶披间 bếp: 灶 là bếp lò.',k:['做饭','zuò fàn','nấu cơm']},
  {q:'Cả nhà ngồi ăn cơm, tiếp khách ở đâu?',a:['ketang'],x:'客堂 phòng khách: 客 là khách.',k:['客人','kèrén','khách']},
  {q:'Khoảng sân nhỏ không có mái, lấy ánh sáng ở đâu?',a:['tianjing'],x:'天井 giếng trời: nhìn lên là thấy trời, như nhìn từ đáy giếng.',k:['天','tiān','trời']}]},

su:{loai:'ghep',zh:'俗',py:'sú',vi:'Thượng Hải xưa và nay',ten2:'Đồ vật kể chuyện thành phố',chuTay:'老上海 · 新上海',anh:["anh/sh-jz1-lon.webp", "https://commons.wikimedia.org/wiki/File:China_-_Volume_2_-_Street_Scene_in_Shanghai.jpg", "Public domain", "Captain F. Brinkley"],alt:'Ảnh cũ một con phố Thượng Hải xưa: nhà gỗ hai tầng, người kéo xe, người đi bộ mặc áo dài',
 gioi:'Hơn 100 năm trước, phố Thượng Hải có xe kéo, máy hát đĩa than; ngày nay có tàu điện ngầm, tàu đệm từ. Có những thứ đi cùng người Thượng Hải từ xưa đến nay, như chiếc phà qua sông hay viên kẹo sữa Thỏ Trắng. Ghép mỗi ảnh với đúng biển tên.',
 nhan:[['manh-ghep','Ghép 5 cặp'],['dong-ho','Xưa và nay'],['ten-lua','Tàu nhanh nhất']],nut:'Dạo phố · ghép 5 cặp',
 do:[
  {id:'cixuanfu',zh:'磁悬浮列车',py:'cíxuánfú lièchē',vi:'tàu đệm từ',a:["anh/sh-cf1.webp", "https://commons.wikimedia.org/wiki/File:Shanghai_Maglev_2.jpg", "CC BY-SA 4.0", "kallerna"],mo:'Tàu nổi lên khỏi đường ray nhờ nam châm, nối nội thành với sân bay Phố Đông dài khoảng 30 km. Chạy từ năm 2004, từng đạt hơn 430 km/h.'},
  {id:'ditie',zh:'地铁',py:'dìtiě',vi:'tàu điện ngầm',a:["anh/sh-dt1.webp", "https://commons.wikimedia.org/wiki/File:Type_1_%22Watermelon%22_Train_of_Line_2_leaving_Yuandong_Avenue_Station,_Shanghai_Metro,_Aug_11_2023.jpg", "CC BY-SA 4.0", "A Chinese ID"],mo:'Mạng tàu điện ngầm Thượng Hải dài hơn 800 km, một trong những mạng lớn nhất thế giới; mỗi ngày chở hàng triệu người.'},
  {id:'liushengji',zh:'留声机',py:'liúshēngjī',vi:'máy hát đĩa than',a:["anh/sh-sk10.webp", "https://commons.wikimedia.org/wiki/File:Record_player,_Shikumen_Open_House_Museum.JPG", "CC BY 3.0", "BrokenSphere"],mo:'Máy hát quay đĩa than, có loa hình loa kèn. Thượng Hải xưa là nơi nhiều bài hát nổi tiếng được thu đĩa.'},
  {id:'dabaitu',zh:'大白兔奶糖',py:'Dàbáitù nǎitáng',vi:'kẹo sữa Thỏ Trắng',a:["anh/sh-bt1.webp", "https://commons.wikimedia.org/wiki/File:White_Rabbit_Candy.jpg", "CC BY-SA 2.0", "Chris Palmer"],mo:'Kẹo sữa của Thượng Hải có từ năm 1959. Bên trong giấy gói còn một lớp giấy gạo mỏng ăn được, ngậm là tan.'},
  {id:'lundu',zh:'轮渡',py:'lúndù',vi:'phà qua sông',a:["anh/sh-ld23.webp", "https://commons.wikimedia.org/wiki/File:Hufeng_No.1_Ferry_was_sailing_across_the_Huangpu_River_torwards_the_Maqiao_dock.JPG", "CC BY-SA 3.0", "Fayhoo"],mo:'Phà chở người và xe đạp qua sông Hoàng Phố, vé rẻ, đi vài phút là sang bờ bên kia. Trước khi có cầu, hầm, đây là cách chính để qua sông.'}]}
};

// ===== Sảnh ga thành phố
window.VH_SH.sanh={zh:'上海',vi:'Thượng Hải',ga:'上海虹桥站',gaPy:'SHÀNGHǍI HÓNGQIÁO ZHÀN',tuyen:['江南线','Tuyến Giang Nam'],gaSo:'Ga 1/6',tram:'sh',
 chao:['欢迎来到上海！','Huānyíng lái dào Shànghǎi!','Chào mừng đến Thượng Hải!'],
 gioi:'Thượng Hải nằm nơi sông Trường Giang đổ ra biển, là thành phố đông dân nhất Trung Quốc. Hơn 180 năm trước, đây là một thị trấn ven sông; sau khi thành cảng buôn bán năm 1843, Thượng Hải lớn rất nhanh. Sông Hoàng Phố <b>黄浦江</b> chia thành phố làm hai: <b>浦西</b> Phố Tây có phố cũ, nhà cổ; <b>浦东</b> Phố Đông mới mọc lên từ năm 1990 với những toà nhà chọc trời.',
 tuKhoa:[['外滩','Wàitān','Bến Thượng Hải'],['浦东','Pǔdōng','Phố Đông'],['上海话','Shànghǎihuà','tiếng Thượng Hải']],
 bia:["anh/sh-gb1-lon.webp", "https://commons.wikimedia.org/wiki/File:Waibaidu_Bridge_Shanghai.jpg", "CC BY-SA 4.0", "kallerna"],biaAlt:'Cây cầu sắt Ngoại Bạch Độ bắc qua sông Tô Châu, phía sau là toà nhà gạch cao và các nhà cao tầng',chuTay:'外白渡桥 · 苏州河',phut:'一分钟上海',
 soLieu:[['人口','dân số','25','triệu','khoảng, đông nhất Trung Quốc'],['上海中心','tháp Thượng Hải','632','m','toà nhà cao nhất Trung Quốc'],['地铁','tàu điện ngầm','800+','km','một trong những mạng lớn nhất thế giới'],['开埠','thành cảng buôn bán','1843','năm','từ đó lớn nhanh thành đô thị']],
 thang:['dong','dong','xuan','xuan','xuan','ha','ha','ha','thu','thu','thu','dong'],dep:[10,11],
 mua:[
  {k:'xuan',ten:'Xuân · tháng 3–5',nd:'6–24°C',p:'Ấm dần, hoa nở, hay có mưa phùn. Tháng 4–5 đi dạo vườn, phố rất dễ chịu.',muc:'Khá hợp',dep:0},
  {k:'ha',ten:'Hạ · tháng 6–8',nd:'23–33°C',p:'Giữa tháng 6 đến đầu tháng 7 là mùa mưa dầm 梅雨; tháng 7–8 nóng ẩm, có khi có bão.',muc:'Nóng ẩm',dep:0},
  {k:'thu',ten:'Thu · tháng 9–11',nd:'12–28°C',p:'Trời trong, mát, ít mưa; tháng 10–11 đẹp nhất năm, đi bộ Bến Thượng Hải, Dự Viên đều thích.',muc:'Đẹp nhất năm',dep:1},
  {k:'dong',ten:'Đông · tháng 12–2',nd:'1–9°C',p:'Lạnh và ẩm, ít khi có tuyết. Tết Nguyên tiêu Dự Viên treo đèn hoa rất đẹp.',muc:'Lạnh ẩm',dep:0}],
 luuY:[['#3A5BA8','dong-ho','Ga Hồng Kiều','Ga 上海虹桥站 rất lớn, nối liền sân bay Hồng Kiều và tàu điện ngầm. Tàu cao tốc đi Tô Châu khoảng nửa tiếng, đi Hàng Châu khoảng một tiếng.'],
  ['#2E8C6A','diem','Đi tàu điện ngầm','Tàu điện ngầm đi tới hầu hết các điểm tham quan; mua thẻ giao thông dùng được cả xe buýt và phà.'],
  ['#C99A1E','den','Bến lúc đêm','Buổi tối nên ra Bến Thượng Hải: một bờ nhà cổ, một bờ nhà chọc trời, cả hai đều lên đèn.']],
 banDoTen:'上海地图',banDo:"<svg viewBox=\"0 0 400 300\" aria-hidden=\"true\">\n      <defs>\n        <pattern id=\"shCham\" width=\"12\" height=\"12\" patternUnits=\"userSpaceOnUse\"><circle cx=\"2\" cy=\"2\" r=\".7\" fill=\"#B9AE98\" opacity=\".45\"/></pattern>\n      </defs>\n      <rect width=\"400\" height=\"300\" fill=\"#F6F2E8\"/><rect width=\"400\" height=\"300\" fill=\"url(#shCham)\"/>\n      <!-- Phố Tây 浦西 / Phố Đông 浦东 -->\n      <path d=\"M180 300C200 240 250 222 255 170C258 130 236 112 250 80C264 50 320 40 400 50V300z\" fill=\"#EEF0E6\"/>\n      <!-- khối nhà Phố Tây -->\n      <g fill=\"#D8CDB6\" opacity=\".6\"><rect x=\"70\" y=\"60\" width=\"60\" height=\"44\" rx=\"4\"/><rect x=\"140\" y=\"56\" width=\"70\" height=\"40\" rx=\"4\"/><rect x=\"60\" y=\"150\" width=\"56\" height=\"40\" rx=\"4\"/><rect x=\"60\" y=\"220\" width=\"56\" height=\"44\" rx=\"4\"/><rect x=\"150\" y=\"235\" width=\"40\" height=\"36\" rx=\"4\"/></g>\n      <!-- nhà chọc trời Phố Đông -->\n      <g fill=\"#A9B9C6\"><rect x=\"284\" y=\"120\" width=\"8\" height=\"34\"/><rect x=\"296\" y=\"104\" width=\"10\" height=\"50\"/><rect x=\"310\" y=\"96\" width=\"9\" height=\"58\"/><rect x=\"323\" y=\"112\" width=\"8\" height=\"42\"/></g>\n      <g transform=\"translate(276 120)\"><path d=\"M0 34V-26\" stroke=\"#B0352F\" stroke-width=\"2\"/><circle cy=\"10\" r=\"5\" fill=\"#C8423B\"/><circle cy=\"-10\" r=\"3.5\" fill=\"#C8423B\"/></g>\n      <!-- sông Hoàng Phố -->\n      <path d=\"M180 300C200 240 250 222 255 170C258 130 236 112 250 80C264 50 320 40 400 50\" fill=\"none\" stroke=\"#9EC3D6\" stroke-width=\"16\" stroke-linecap=\"round\"/>\n      <text x=\"232\" y=\"250\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"9\" fill=\"#4E7A90\" transform=\"rotate(-40 232 250)\">黄浦江</text>\n      <!-- sông Tô Châu -->\n      <path d=\"M0 74C80 84 160 62 246 84\" fill=\"none\" stroke=\"#B7D2DE\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <text x=\"40\" y=\"70\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#6E8A98\">苏州河</text>\n      <!-- cầu Ngoại Bạch Độ -->\n      <path d=\"M238 84h14\" stroke=\"#5E6870\" stroke-width=\"3\"/>\n      <!-- phố Nam Kinh -->\n      <path d=\"M238 124H100\" stroke=\"#E2B66A\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <text x=\"118\" y=\"140\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#8A6B4A\">南京路</text>\n      <!-- Bến Thượng Hải: dãy nhà cổ ven sông -->\n      <g fill=\"#C9B48A\" stroke=\"#8A7A5A\" stroke-width=\".8\"><rect x=\"228\" y=\"100\" width=\"10\" height=\"12\"/><rect x=\"226\" y=\"114\" width=\"12\" height=\"12\"/><rect x=\"228\" y=\"128\" width=\"10\" height=\"14\"/><rect x=\"230\" y=\"144\" width=\"10\" height=\"12\"/></g>\n      <!-- Dự Viên -->\n      <g transform=\"translate(200 214)\"><rect x=\"-12\" y=\"-2\" width=\"24\" height=\"10\" fill=\"#B0352F\"/><path d=\"M-16-2h32l-6-7h-20z\" fill=\"#3E5A4A\"/><path d=\"M-18 14q18-8 36 0\" fill=\"none\" stroke=\"#9EC3D6\" stroke-width=\"3\"/></g>\n      <!-- khu nhà thạch khố môn -->\n      <g transform=\"translate(130 210)\" fill=\"#8A6B5A\"><rect x=\"-14\" y=\"-6\" width=\"10\" height=\"12\"/><rect x=\"-2\" y=\"-6\" width=\"10\" height=\"12\"/><rect x=\"10\" y=\"-6\" width=\"10\" height=\"12\"/></g>\n      <!-- ga Hồng Kiều -->\n      <g class=\"o-day\"><circle cx=\"16\" cy=\"266\" r=\"5\" fill=\"#C8423B\"/><circle cx=\"16\" cy=\"266\" r=\"2\" fill=\"#fff\"/></g>\n      <text class=\"chu-ga\" x=\"26\" y=\"262\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"8\" fill=\"#9A3A2E\">Bạn đang ở đây</text>\n      <text x=\"26\" y=\"274\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#9A3A2E\">← 虹桥站 · ~15 km</text>\n      <!-- la bàn -->\n      <g transform=\"translate(374 260)\"><circle r=\"14\" fill=\"#F6F2E8\" stroke=\"#B9AE98\" stroke-width=\"1.5\"/><path d=\"M0-10L3 0 0 10-3 0z\" fill=\"#C8423B\"/><path d=\"M0 10L3 0-3 0z\" fill=\"#8A7A6A\"/><text y=\"-17\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8.5\" fill=\"#C8423B\">北</text></g>\n      <text x=\"360\" y=\"200\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"9\" fill=\"#5E7080\">浦东</text>\n      <text x=\"40\" y=\"120\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"9\" fill=\"#8A6B4A\">浦西</text>\n      <!-- khung tiêu đề -->\n      <g transform=\"translate(6 8)\"><rect width=\"66\" height=\"34\" rx=\"6\" fill=\"#F6F2E8\" stroke=\"#3A5BA8\" stroke-width=\"1.6\"/><rect x=\"3\" y=\"3\" width=\"60\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"#3A5BA8\" stroke-width=\".6\" stroke-dasharray=\"2 2\"/><text x=\"33\" y=\"19\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"11.5\" fill=\"#3A5BA8\">上海地图</text><text x=\"33\" y=\"28\" text-anchor=\"middle\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"5.5\" fill=\"#6E5A40\">BẢN ĐỒ DẠO PHỐ</text></g>\n      <rect x=\"2\" y=\"2\" width=\"396\" height=\"296\" rx=\"16\" fill=\"none\" stroke=\"#B9AE98\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n    </svg>\n"};
// bản vẽ mặt cắt một căn nhà thạch khố môn 石库门 (khung 400×330): trái là cổng ra ngõ, phải là bếp và căn phòng nhỏ phía sau; khu(id, hình, x nhãn, y nhãn) do trang thu-trai-nghiem cung cấp
VH_SH.tn.zhu.nhaTen='Bản vẽ mặt cắt nhà thạch khố môn: cổng đá, giếng trời, phòng khách, bếp, căn phòng nhỏ trên bếp và sân phơi trên cùng';
VH_SH.tn.zhu.ve=function(khu){
 return '<rect x="0" y="0" width="400" height="300" fill="#E4EEF4"/><g fill="#fff" opacity=".9"><ellipse cx="70" cy="40" rx="26" ry="7"/><ellipse cx="330" cy="30" rx="22" ry="6"/></g>'+
  '<rect x="0" y="300" width="400" height="30" fill="#B8B0A2"/><path d="M0 300H400" stroke="#8A8274" stroke-width="2"/>'+
  // nhà chính hai tầng
  '<path d="M134 142L220 104L306 142z" fill="#6E5E52" stroke="#4E4038" stroke-width="2"/><g stroke="#5A4A40" stroke-width="1"><path d="M160 131L220 108M190 133L240 112M250 116L290 134"/></g>'+
  '<rect x="140" y="142" width="160" height="158" fill="#EFE6D6" stroke="#7A6A5A" stroke-width="2.4"/><path d="M140 220H300" stroke="#7A6A5A" stroke-width="3"/>'+
  '<g fill="#D9C7A6" stroke="#8A6B4A" stroke-width="1.2"><rect x="156" y="156" width="40" height="34"/><rect x="244" y="156" width="40" height="34"/></g><path d="M176 156v34M264 156v34" stroke="#8A6B4A" stroke-width="1"/>'+
  khu('ketang','<rect x="146" y="226" width="148" height="74" fill="#F6EEDD"/><rect x="200" y="236" width="40" height="26" fill="#C9A36A" stroke="#7A5232" stroke-width="1.4"/><path d="M206 244h28M206 252h28" stroke="#7A5232" stroke-width="1"/><rect x="196" y="268" width="48" height="8" fill="#8A5A32"/><path d="M200 276v24M240 276v24" stroke="#8A5A32" stroke-width="3"/><g fill="#8A5A32"><rect x="168" y="276" width="14" height="4"/><path d="M170 280v20M180 280v20" stroke="#8A5A32" stroke-width="2.4"/><rect x="258" y="276" width="14" height="4"/><path d="M260 280v20M270 280v20" stroke="#8A5A32" stroke-width="2.4"/></g>',220,250)+
  // phần sau: bếp, phòng nhỏ, sân phơi
  '<rect x="300" y="186" width="80" height="114" fill="#E9DFCC" stroke="#7A6A5A" stroke-width="2.4"/><path d="M300 240H380" stroke="#7A6A5A" stroke-width="3"/>'+
  khu('zaopijian','<rect x="306" y="246" width="70" height="54" fill="#F2E8D6"/><rect x="314" y="270" width="34" height="30" fill="#B8A48A" stroke="#6E5A44" stroke-width="1.4"/><ellipse cx="331" cy="270" rx="12" ry="4" fill="#3A3A3A"/><path d="M326 264q-3-8 2-14M334 264q-3-8 2-14" stroke="#9AA" stroke-width="1.3" fill="none"/><rect x="354" y="262" width="16" height="38" fill="#9EB4C2" stroke="#5E7080" stroke-width="1.2"/>',340,226)+
  khu('tingzijian','<rect x="306" y="192" width="70" height="44" fill="#F6EEDD"/><rect x="314" y="214" width="26" height="8" fill="#8A5A32"/><path d="M316 222v14M338 222v14" stroke="#8A5A32" stroke-width="2"/><rect x="318" y="206" width="12" height="8" fill="#F2F2EC" stroke="#8A8A80" stroke-width=".8"/><rect x="350" y="200" width="18" height="16" fill="#CFE0EA" stroke="#7A6A5A" stroke-width="1.2"/><path d="M359 200v16" stroke="#7A6A5A" stroke-width="1"/>',340,174)+
  khu('shaitai','<path d="M298 186H382" stroke="#7A6A5A" stroke-width="3"/><path d="M300 186v-14M380 186v-14M300 172H380" stroke="#8A8A80" stroke-width="2"/><path d="M304 150v36M376 150v36" stroke="#9A7A40" stroke-width="2.4"/><path d="M302 152H378" stroke="#B89A5A" stroke-width="2.6"/><g stroke="#7A6A5A" stroke-width=".8"><rect x="312" y="152" width="14" height="18" fill="#E26A5A"/><rect x="332" y="152" width="12" height="22" fill="#6FA0C8"/><rect x="350" y="152" width="16" height="14" fill="#F2D06A"/></g>',340,138)+
  // giếng trời + cổng đá
  khu('tianjing','<rect x="84" y="200" width="56" height="100" fill="#DCE8D8"/><rect x="92" y="276" width="14" height="24" fill="#B07A52"/><path d="M99 276c-8-10-6-22 0-26c6 4 8 16 0 26z" fill="#5E9A4E"/><rect x="118" y="282" width="16" height="18" fill="#8A8A80"/><ellipse cx="126" cy="282" rx="8" ry="3" fill="#6E8A9A"/>',112,186)+
  '<rect x="20" y="186" width="64" height="114" fill="#D9CDB8" stroke="#7A6A5A" stroke-width="2"/>'+
  khu('shikumen','<path d="M26 188l26-20 26 20z" fill="#C9B89A" stroke="#7A6A5A" stroke-width="1.6"/><rect x="30" y="196" width="44" height="104" fill="#BFB09A" stroke="#6E5E4E" stroke-width="2"/><rect x="36" y="214" width="32" height="86" fill="#2E2A28"/><path d="M52 214v86" stroke="#4E4A44" stroke-width="1.4"/><circle cx="47" cy="256" r="2.4" fill="#C99A1E"/><circle cx="57" cy="256" r="2.4" fill="#C99A1E"/><rect x="38" y="200" width="28" height="9" fill="#EFE6D6" stroke="#8A7A6A" stroke-width=".8"/>',52,160)+
  '';
};
window.VH_TP=window.VH_TP||{};window.VH_TP.sh=window.VH_SH;
