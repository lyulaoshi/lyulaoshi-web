// 文化盒 · Thành phố 大同 (BẢN THỬ, chờ cô duyệt nội dung). Cùng khung với bac-kinh.js, thien-tan.js, thua-duc.js, binh-dao.js.
// diem: 8 điểm trên bản đồ (x = X/4, y ≈ Y/3 − 6 theo bản vẽ 400×300). tq: 4 景点, tn: 4 体验, sanh: sảnh ga.
// Ảnh: Wikimedia Commons, giấy phép tự do, đã tải về anh/ (WebP); a = [ảnh, trang nguồn, giấy phép, tác giả].
window.VH_DT={
diem:[
 {id:'yungang',loai:'tq',zh:'云冈石窟',vi:'Hang đá Vân Cương',ngan:'Vân Cương',x:9,y:22,ic:'vuong-mien'},
 {id:'huayan',loai:'tq',zh:'华严寺',vi:'Chùa Hoa Nghiêm',x:35,y:34,ic:'sach'},
 {id:'jiulongbi',loai:'tq',zh:'九龙壁',vi:'Tường chín rồng',x:66,y:34,ic:'lap-lanh'},
 {id:'xuankong',loai:'tq',zh:'悬空寺',vi:'Chùa Treo',x:86,y:78,ic:'mu'},
 {id:'chi',loai:'tn',zh:'吃',vi:'Quán lẩu đồng',ngan:'Ẩm thực',x:60,y:57,ic:'tra-sua'},
 {id:'shuo',loai:'tn',zh:'说',vi:'Trò chuyện với ông cụ',ngan:'Tiếng nói',x:27,y:81,ic:'tin-nhan'},
 {id:'zhu',loai:'tn',zh:'住',vi:'Pháo đài Trường Thành',ngan:'Pháo đài',x:16,y:8,ic:'khien'},
 {id:'su',loai:'tn',zh:'俗',vi:'Tết ở Đại Đồng',ngan:'Phong tục',x:40,y:61,ic:'den-long'}],
tq:{
yungang:{zh:'云冈石窟',py:'Yúngāng Shíkū',vi:'Hang đá Vân Cương',ten2:'Hơn 51.000 pho tượng đá',chuTay:'云冈石窟 · 北魏',
 anh:["anh/dt-yg1-lon.webp", "https://commons.wikimedia.org/wiki/File:Yungang11_2010.JPG", "CC BY-SA 4.0", "Marcin Białek"],
 alt:'Tượng Phật ngồi rất lớn khắc vào vách đá vàng, bên cạnh là tượng Phật đứng, phía trước có hàng rào thấp',
 gioi:'Các hang đá nằm dưới chân núi Vũ Châu 武州山, cách trung tâm Đại Đồng khoảng 16 km về phía tây. Phần lớn được đục từ khoảng năm 460 đến năm 494, thời Bắc Nguỵ, khi Đại Đồng (tên cũ là Bình Thành 平城) còn là kinh đô. Nay còn 45 hang lớn với hơn 51.000 pho tượng, tượng lớn nhất cao khoảng 17 m, tượng nhỏ nhất chỉ vài phân.',
 nhan:[['lich','Đục từ năm 460'],['vuong-mien','Hơn 51.000 pho tượng'],['cup','Di sản thế giới 2001']],
 the:[
  {c:'#8A6B4A',chu:'大',ten:'Đại Phật ngoài trời',phu:'Hang số 20',ic:'vuong-mien',tieu:'Đại Phật ngoài trời',p:'Tượng Phật ngồi ở hang số 20 cao khoảng 13,7 m. Vách đá phía trước hang sập từ rất lâu nên tượng lộ ra ngoài trời. Người đứng dưới chân tượng trông nhỏ xíu.',k:['大佛','dàfó','tượng Phật lớn'],
   a:["anh/dt-yg24.webp", "https://commons.wikimedia.org/wiki/File:CHINA_-_Shanxi_-_Dave_devant_la_grotte_20_(2179012793).jpg", "CC BY-SA 2.0", "Charlotte Marillet from Tokyo, Japan"],alt:'Một người đứng trước tượng Phật ngồi khổng lồ, chỉ cao bằng bệ tượng',s:'object-position:50% 50%'},
  {c:'#2F7FC1',chu:'彩',ten:'Tượng tô màu',phu:'Xanh, đỏ, vàng',ic:'lap-lanh',tieu:'Tượng tô màu',p:'Trong nhiều hang, tượng và vách còn màu xanh, đỏ, vàng. Phần lớn lớp màu này được tô thêm ở các đời sau để tượng thêm rực rỡ.',k:['颜色','yánsè','màu sắc'],
   a:["anh/dt-yg11.webp", "https://commons.wikimedia.org/wiki/File:Yungang_Grottoes_03.2025._5.jpg", "CC0", "Dudva"],alt:'Tượng Phật ngồi trong khám đá, vòng hào quang và vách xung quanh tô màu xanh, đỏ',s:'object-position:50% 45%'},
  {c:'#C99A1E',chu:'千',ten:'Nghìn tượng nhỏ',phu:'Phật ngồi kín vách',ic:'sach',tieu:'Vách nghìn Phật 千佛',p:'Có những mảng vách khắc kín các tượng Phật nhỏ ngồi thành hàng, hàng nọ nối hàng kia, gọi là "nghìn Phật" 千佛.',k:['千','qiān','nghìn'],
   a:["anh/dt-yg9.webp", "https://commons.wikimedia.org/wiki/File:Yungang_Grottoes_03.2025._8.jpg", "CC0", "Dudva"],alt:'Vách đá khắc kín những hàng tượng Phật nhỏ ngồi trong khám',s:'object-position:50% 50%'},
  {c:'#B0352F',chu:'楼',ten:'Lầu gỗ trước hang',phu:'Che mưa gió cho tượng',ic:'mu',tieu:'Lầu gỗ trước hang',p:'Trước một số hang có lầu gỗ nhiều tầng dựng thêm về sau, che mưa gió cho tượng bên trong. Du khách đi qua cửa lầu để vào hang.',k:['木头','mùtou','gỗ'],
   a:["anh/dt-yg66.webp", "https://commons.wikimedia.org/wiki/File:Yungang_Grottoes_Cave_9_0.jpg", "CC BY-SA 4.0", "Thebrainchamber1"],alt:'Lầu gỗ nhiều tầng mái dựng sát vách đá, du khách đứng trước cửa',s:'object-position:50% 45%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh">云冈石<span class="o-trong"></span></b>',o:['窟','洞','山','门'],a:0,zh:1,
   x:'石窟 shíkū là hang đá có tượng, tranh Phật giáo. 洞 cũng là hang nhưng dùng cho hang nói chung.',k:['石窟','shíkū','hang đá']},
  {t:'c',q:'Tượng ở Vân Cương được làm bằng cách nào?',o:['Đục thẳng vào vách núi đá','Đúc bằng đồng','Nặn bằng đất sét','Xếp bằng gạch'],a:0,
   x:'Thợ đá đục vào vách núi đá cát, vừa đục hang vừa khắc tượng ngay trong lòng núi.',k:['山','shān','núi']},
  {t:'c',anh:'50% 40%',tam:'45% 32%',khung:'Nhìn quanh pho tượng',q:'Quan sát ảnh: pho tượng Phật lớn được khắc vào đâu?',o:['Vách đá của núi','Thân cây cổ thụ','Bức tường gạch','Tấm gỗ lớn'],a:0,
   x:'Tượng khắc thẳng vào vách đá; xung quanh còn thấy những lỗ, những khám nhỏ trên vách.',k:['石头','shítou','đá']},
  {t:'ds',q:'Hang Vân Cương được đục khi Đại Đồng là kinh đô của nhà Bắc Nguỵ.',a:0,
   x:'Đúng: Bắc Nguỵ đóng đô ở Bình Thành 平城, tức Đại Đồng ngày nay, từ năm 398 đến năm 494.',k:['首都','shǒudū','thủ đô']},
  {t:'c',q:'Ở Vân Cương còn khoảng bao nhiêu pho tượng?',o:['Hơn 51.000','Khoảng 50','Khoảng 500','Đúng 1.000'],a:0,
   x:'Hơn 51.000 pho, từ tượng cao khoảng 17 m đến tượng chỉ vài phân.',k:['万','wàn','vạn, mười nghìn']}]},

xuankong:{zh:'悬空寺',py:'Xuánkōng Sì',vi:'Chùa Treo',ten2:'Ngôi chùa bám vách núi',chuTay:'悬空寺 · 恒山',
 anh:["anh/dt-xk2-lon.webp", "https://commons.wikimedia.org/wiki/File:Xuankongsi.jpg", "Public domain", "BRUNNER Emmanuel (Manu25)"],
 alt:'Những toà lầu gỗ mái vàng nối nhau bằng cầu và lối đi, bám vào vách đá dựng đứng, bên dưới là những cây cột gỗ mảnh',
 gioi:'Chùa Treo ở huyện Hồn Nguyên 浑源, cách Đại Đồng khoảng 65 km, dưới chân núi Hằng Sơn 恒山. Chùa được dựng lần đầu vào khoảng năm 491 thời Bắc Nguỵ; các toà lầu hiện nay phần lớn được sửa lại thời Minh, Thanh. Hơn 40 gian nhà gỗ bám vào vách đá, cao hàng chục mét so với lòng khe. Những thanh dầm gỗ cắm sâu vào lỗ khoét trong vách đá giữ cho chùa đứng vững; các cây cột mảnh bên dưới trông như đang đỡ cả ngôi chùa.',
 nhan:[['lich','Dựng khoảng năm 491'],['mu','Hơn 40 gian nhà gỗ'],['mat','Bám trên vách đá']],
 the:[
  {c:'#C99A1E',chu:'三',ten:'Điện Tam Giáo',phu:'Phật, Lão, Nho chung một điện',ic:'sach',tieu:'Điện Tam Giáo 三教殿',p:'Trên tầng cao của chùa có điện Tam Giáo, thờ chung Phật Thích Ca, Lão Tử và Khổng Tử, ba người đứng đầu ba đạo Phật, Lão, Nho. Rất hiếm chùa thờ như vậy.',k:['三','sān','ba'],
   a:["anh/dt-xk27.webp", "https://commons.wikimedia.org/wiki/File:CHINA_-_Shanxi_-_Vue_du_temple_Xuankong_(de_plus_pr%C3%A8s)_(2178978921).jpg", "CC BY-SA 2.0", "Charlotte Marillet from Tokyo, Japan"],alt:'Ba toà lầu gỗ nhiều tầng mái nằm trên vách đá xám',s:'object-position:50% 55%'},
  {c:'#8A6B4A',chu:'栈',ten:'Lối đi trên vách',phu:'Cầu thang, cầu gỗ',ic:'diem',tieu:'Lối đi trên vách 栈道',p:'Các gian nhà nối với nhau bằng cầu thang và lối đi gỗ hẹp men theo vách đá. Du khách đi chậm từng người một, bên dưới là khoảng trống.',k:['楼梯','lóutī','cầu thang'],
   a:["anh/dt-xk7.webp", "https://commons.wikimedia.org/wiki/File:%E6%87%B8%E7%A9%BA%E5%AF%BA_Xuankong_Temple_-_panoramio_(1).jpg", "CC BY 3.0", "lienyuan lee"],alt:'Du khách đi trên lối đi lát đá dẫn lên toà lầu gỗ sát vách núi',s:'object-position:50% 45%'},
  {c:'#B0352F',chu:'窄',ten:'Hành lang hẹp',phu:'Chỉ vừa một người',ic:'mat',tieu:'Hành lang hẹp',p:'Hành lang trong chùa rất hẹp, có chỗ chỉ vừa một người đi. Đứng tựa lan can gỗ nhìn ra là thấy cả khe núi bên dưới.',k:['窄','zhǎi','hẹp'],
   a:["anh/dt-xk23.webp", "https://commons.wikimedia.org/wiki/File:CHINA_-_Shanxi_-_Dans_le_temple_Xuankong_(2178979599).jpg", "CC BY-SA 2.0", "Charlotte Marillet from Tokyo, Japan"],alt:'Du khách đứng tựa lan can gỗ trong hành lang hẹp của chùa, bên cạnh là vách đá',s:'object-position:50% 40%'},
  {c:'#2E8C6A',chu:'恒',ten:'Núi Hằng Sơn',phu:'Bắc Nhạc',ic:'la',tieu:'Hằng Sơn 恒山 · Bắc Nhạc',p:'Hằng Sơn là "Bắc Nhạc" 北岳, một trong Ngũ Nhạc 五岳, năm ngọn núi nổi tiếng ở năm phương của Trung Quốc. Chùa Treo nằm trong khe núi dưới chân Hằng Sơn.',k:['山','shān','núi'],
   a:["anh/dt-hm2.webp", "https://commons.wikimedia.org/wiki/File:Hunyuan_Hengshan_2013.08.30_11-27-32.jpg", "CC BY-SA 3.0", "Zhangzhugang"],alt:'Dãy núi đá xám kéo dài dưới bầu trời xanh, phía trước là cánh đồng',s:'object-position:40% 50%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh">悬<span class="o-trong"></span>寺</b> (chùa treo giữa không trung)',o:['空','高','山','天'],a:0,zh:1,
   x:'悬空 xuánkōng là treo lơ lửng giữa không trung. 空 là không trung, khoảng trống.',k:['悬空','xuánkōng','treo lơ lửng']},
  {t:'c',q:'Thật ra điều gì giữ cho Chùa Treo đứng vững?',o:['Dầm gỗ cắm sâu vào vách đá','Dây thừng buộc từ đỉnh núi','Keo dán','Những tảng đá to chèn bên dưới'],a:0,
   x:'Thợ khoét lỗ vào vách đá rồi cắm dầm gỗ vào. Các cây cột mảnh bên dưới chỉ đỡ thêm một phần.',k:['木梁','mùliáng','dầm gỗ']},
  {t:'c',anh:'50% 50%',tam:'55% 45%',khung:'Nhìn phía sau ngôi chùa',q:'Quan sát ảnh: các toà lầu được dựng sát vào đâu?',o:['Vách đá dựng đứng','Bờ biển','Bãi cỏ','Rừng tre'],a:0,
   x:'Chùa bám vào vách đá dựng đứng của khe núi, nhìn từ xa như treo lơ lửng.',k:['悬崖','xuányá','vách núi dựng đứng']},
  {t:'ds',q:'Điện Tam Giáo trong Chùa Treo thờ chung Phật Thích Ca, Lão Tử và Khổng Tử.',a:0,
   x:'Đúng: 三教 là ba đạo Phật, Lão, Nho, cùng được thờ trong một điện.',k:['孔子','Kǒngzǐ','Khổng Tử']},
  {t:'c',q:'Hằng Sơn 恒山 là "nhạc" ở phương nào trong Ngũ Nhạc?',o:['Phương Bắc','Phương Nam','Phương Đông','Phương Tây'],a:0,
   x:'恒山 là 北岳 Bắc Nhạc. Ngũ Nhạc gồm 泰山 (đông), 华山 (tây), 衡山 (nam), 恒山 (bắc), 嵩山 (giữa).',k:['北','běi','phía bắc']}]},

jiulongbi:{zh:'九龙壁',py:'Jiǔlóng Bì',vi:'Tường chín rồng',ten2:'Bức bình phong ngói lưu ly',chuTay:'九龙壁 · 代王府',
 anh:["anh/dt-jl2-lon.webp", "https://commons.wikimedia.org/wiki/File:Datong_Nine_dragon_wall_(2)_January_1985.jpg", "CC BY-SA 4.0", "BabelStone"],
 alt:'Bức tường dài ghép ngói lưu ly, trên nền sóng nước màu xanh nổi lên những con rồng vàng uốn lượn; một người đứng dưới chân tường',
 gioi:'Bức tường xây năm 1392 đời Minh, là bức bình phong 照壁 dựng trước cổng phủ của Đại vương 代王, con trai vua Chu Nguyên Chương. Tường dài khoảng 45,5 m, cao khoảng 8 m, ghép bằng hơn 400 khối ngói lưu ly nhiều màu thành chín con rồng. Đây là bức tường chín rồng lớn nhất và cổ nhất trong ba bức nổi tiếng của Trung Quốc (hai bức kia ở Bắc Kinh).',
 nhan:[['lich','Xây năm 1392'],['lap-lanh','Chín con rồng'],['cup','Dài khoảng 45,5 m']],
 the:[
  {c:'#C99A1E',chu:'龙',ten:'Rồng vàng',phu:'Mỗi con một dáng',ic:'lap-lanh',tieu:'Chín con rồng',p:'Chín con rồng uốn mình giữa mây và sóng nước, con vàng, con tím, con xanh, mỗi con một dáng. Con rồng vàng ở chính giữa là to nhất.',k:['龙','lóng','rồng'],
   a:["anh/dt-jl12.webp", "https://commons.wikimedia.org/wiki/File:The_3rd_Dragon_from_the_left,_Nine-Dragon_Wall,_Datong.jpg", "CC BY 2.0", "David Bacon"],alt:'Con rồng vàng uốn lượn trên nền ngói xanh lam và xanh lá',s:'object-position:50% 45%'},
  {c:'#2F7FC1',chu:'琉',ten:'Ngói lưu ly',phu:'Gốm tráng men bóng',ic:'manh-ghep',tieu:'Ngói lưu ly 琉璃',p:'Mỗi con rồng được ghép từ nhiều khối gốm nung tráng men bóng gọi là lưu ly 琉璃. Men giữ màu rất bền, hơn 600 năm vẫn còn tươi.',k:['琉璃','liúli','ngói lưu ly'],
   a:["anh/dt-jl10.webp", "https://commons.wikimedia.org/wiki/File:The_2nd_and_3rd_Dragon_from_right,_Nine-Dragon_Wall,_Datong.jpg", "CC BY 2.0", "David Bacon"],alt:'Hai con rồng vàng và tím trên nền ngói lưu ly xanh, thấy rõ từng khối ngói ghép',s:'object-position:50% 50%'},
  {c:'#2E8C6A',chu:'池',ten:'Ao soi bóng',phu:'Rồng như đang bơi',ic:'song',tieu:'Ao soi bóng 倒影池',p:'Trước tường có một ao nước nhỏ với cây cầu đá. Khi gió thổi, mặt nước gợn sóng, bóng chín con rồng dưới ao trông như đang bơi.',k:['倒影','dàoyǐng','bóng dưới nước'],
   a:["anh/dt-jl7.webp", "https://commons.wikimedia.org/wiki/File:Nine-Dragon_Wall_with_Stone_Bridge,_Datong.jpg", "CC BY 2.0", "David Bacon"],alt:'Cây cầu đá nhỏ bắc qua ao nước trước bức tường rồng',s:'object-position:50% 60%'},
  {c:'#5E6870',chu:'碑',ten:'Bia di tích',phu:'Di tích cấp quốc gia',ic:'sach',tieu:'Bia di tích',p:'Tấm bia ghi 全国重点文物保护单位 "đơn vị bảo vệ di tích trọng điểm toàn quốc", tức di tích cấp quốc gia, và tên 九龙壁.',k:['文物','wénwù','di vật, di tích'],
   a:["anh/dt-jl11.webp", "https://commons.wikimedia.org/wiki/File:Datong_Jiulongbi_2013.08.29_13-42-01.jpg", "CC BY-SA 3.0", "Zhangzhugang"],alt:'Tấm bia đá trắng ghi chữ 九龙壁 gắn trên tường đỏ',s:'object-position:50% 40%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh">九<span class="o-trong"></span>壁</b>',o:['龙','虎','马','凤'],a:0,zh:1,
   x:'九龙壁 là bức tường chín rồng. 虎 hổ, 马 ngựa, 凤 phượng.',k:['龙','lóng','rồng']},
  {t:'c',q:'Rồng trên tường được làm bằng gì?',o:['Ghép từ ngói lưu ly tráng men','Vẽ bằng sơn','Dán giấy màu','Khắc trên gỗ'],a:0,
   x:'Mỗi con rồng ghép từ nhiều khối gốm tráng men 琉璃 nên màu rất bền.',k:['琉璃','liúli','ngói lưu ly']},
  {t:'c',anh:'50% 40%',tam:'60% 45%',khung:'Nhìn nền phía sau rồng',q:'Quan sát ảnh: các con rồng nổi trên nền như thế nào?',o:['Mây và sóng nước màu xanh','Núi tuyết trắng','Hoa sen hồng','Nền đỏ trơn'],a:0,
   x:'Phía dưới là sóng nước màu xanh lá, phía trên là mây xanh lam, rồng uốn mình ở giữa.',k:['蓝色','lánsè','màu xanh lam']},
  {t:'ds',q:'Tường chín rồng ở Đại Đồng là bức bình phong dựng trước cổng phủ của một vị vương đời Minh.',a:0,
   x:'Đúng: 照壁 là bức bình phong che trước cổng, ở đây là phủ Đại vương 代王府.',k:['王','wáng','vua, vương']},
  {t:'c',q:'Chữ 九 đọc giống chữ nào, nghĩa là "lâu dài"?',o:['久','酒','走','就'],a:0,zh:1,
   x:'九 jiǔ (chín) đọc giống 久 jiǔ (lâu dài), nên số chín gắn với điều tốt lành, bền lâu.',k:['长久','chángjiǔ','lâu dài']}]},

huayan:{zh:'华严寺',py:'Huáyán Sì',vi:'Chùa Hoa Nghiêm',ten2:'Chùa cổ nhìn về hướng đông',chuTay:'华严寺 · 辽金',
 anh:["anh/dt-hy210-lon.webp", "https://commons.wikimedia.org/wiki/File:Huayan_Temple_(54578078357).jpg", "CC BY 2.0", "xiquinhosilva"],
 alt:'Ngôi điện rất lớn mái ngói xám, tường đỏ, đứng trên nền đá cao, trước là sân rộng',
 gioi:'Chùa nằm trong thành cổ Đại Đồng, được dựng thời Liêu, triều đại của người Khiết Đan 契丹. Điện Bạc Già Giáo Tạng 薄伽教藏殿 dựng năm 1038 còn nhiều tượng màu thời Liêu; điện Đại Hùng 大雄宝殿 dựng lại năm 1140 thời Kim, là một trong những ngôi điện thờ Phật lớn nhất còn lại từ thời ấy. Khác với phần lớn chùa quay về hướng nam, chùa Hoa Nghiêm quay mặt về hướng đông, theo tục thờ mặt trời của người Khiết Đan.',
 nhan:[['lich','Điện dựng năm 1038'],['mattroi','Quay về hướng đông'],['vuong-mien','Tượng màu thời Liêu']],
 the:[
  {c:'#C99A1E',chu:'佛',ten:'Năm vị Phật',phu:'Trong điện Đại Hùng',ic:'vuong-mien',tieu:'Năm vị Phật 五方佛',p:'Giữa điện Đại Hùng có năm pho tượng Phật lớn thếp vàng, ngồi trên toà sen, phía sau là vầng hào quang chạm trổ nhiều màu. Các tượng này được làm thời Minh.',k:['五','wǔ','năm'],
   a:["anh/dt-hy22.webp", "https://commons.wikimedia.org/wiki/File:Main_Hall_of_Huayan_Temple_(Datong).jpg", "CC0", "Dudva"],alt:'Các pho tượng Phật thếp vàng ngồi trên bệ cao, sau lưng là hào quang chạm trổ',s:'object-position:60% 40%'},
  {c:'#B0352F',chu:'天',ten:'Chư thiên',phu:'Nghiêng người như đang nghe',ic:'tai',tieu:'Tượng chư thiên 诸天',p:'Hai bên điện là hàng tượng thần đứng, mặc áo nhiều màu. Các tượng hơi nghiêng người về phía trước, như đang chăm chú nghe Phật giảng.',k:['听','tīng','nghe'],
   a:["anh/dt-hy23.webp", "https://commons.wikimedia.org/wiki/File:Main_Hall_of_Huayan_Temple_(Datong)_2.jpg", "CC0", "Dudva"],alt:'Hàng tượng thần đứng mặc áo xanh, đỏ, đội mũ, nghiêng người về phía trước',s:'object-position:60% 40%'},
  {c:'#5E6870',chu:'塔',ten:'Bảo tháp',phu:'Tháp gỗ nhiều tầng',ic:'mu',tieu:'Bảo tháp Hoa Nghiêm',p:'Trong khuôn viên chùa có ngôi tháp gỗ vuông nhiều tầng mái, mới được xây lại gần đây theo kiểu tháp thời Liêu.',k:['塔','tǎ','tháp'],
   a:["anh/dt-hy6.webp", "https://commons.wikimedia.org/wiki/File:Huayan_Temple_(Datong)_2.jpg", "CC0", "Dudva"],alt:'Tháp gỗ vuông nhiều tầng mái đỏ giữa những cây thông',s:'object-position:50% 40%'},
  {c:'#8A6B4A',chu:'狮',ten:'Sư tử đá',phu:'Canh cửa chùa',ic:'khien',tieu:'Sư tử đá',p:'Sư tử đá ngồi canh hai bên cửa, miệng ngậm hòn ngọc, cổ đeo chuông. Người Trung Quốc tin sư tử đá giữ cho nơi đó bình an.',k:['狮子','shīzi','sư tử'],
   a:["anh/dt-hy8.webp", "https://commons.wikimedia.org/wiki/File:Sculpture_of_a_beast_in_Huayan_Temple_(Datong).jpg", "CC0", "Dudva"],alt:'Tượng sư tử đá xám ngồi trên bệ, mắt to, cổ đeo chuông',s:'object-position:50% 30%'}],
 cau:[
  {t:'c',q:'Điền chữ còn thiếu: <b class="zh">华<span class="o-trong"></span>寺</b>',o:['严','言','盐','颜'],a:0,zh:1,
   x:'华严 là tên một bộ kinh Phật (kinh Hoa Nghiêm). 严 yán; các chữ kia cũng đọc yán nhưng khác nghĩa.',k:['寺','sì','chùa']},
  {t:'c',q:'Chùa Hoa Nghiêm quay mặt về hướng nào?',o:['Hướng đông','Hướng nam','Hướng tây','Hướng bắc'],a:0,
   x:'Người Khiết Đan thời Liêu thờ mặt trời, nên chùa quay về hướng đông, nơi mặt trời mọc.',k:['东','dōng','phía đông']},
  {t:'c',anh:'50% 50%',tam:'50% 62%',khung:'Nhìn tường hai bên cửa điện',q:'Quan sát ảnh: tường hai bên cửa điện màu gì?',o:['Đỏ','Trắng','Xanh lá','Vàng'],a:0,
   x:'Tường điện sơn đỏ, mái ngói xám, đứng trên nền đá cao.',k:['红色','hóngsè','màu đỏ']},
  {t:'ds',q:'Triều Liêu là triều đại của người Khiết Đan.',a:0,
   x:'Đúng: 辽 Liêu (916–1125) do người Khiết Đan 契丹 lập nên; Đại Đồng khi ấy là "Tây Kinh" 西京.',k:['西京','Xījīng','Tây Kinh']},
  {t:'vt',q:'Có chùa cổ với điện thờ lớn, trong điện có nhiều tượng Phật, tượng thần tô màu.',a:2,
   x:'Cả hai: ở Việt Nam, chùa Bút Tháp (Bắc Ninh) cũng có nhiều tượng cổ quý.',k:['佛像','fóxiàng','tượng Phật']}]}
}};

window.VH_DT.tn={
chi:{loai:'menu',zh:'吃',py:'chī',vi:'Quán lẩu đồng',ten2:'Món ngon miền biên ải',chuTay:'铜火锅 · 大同',anh:["anh/dt-hg2x1-lon.webp", "https://commons.wikimedia.org/wiki/File:%E6%A6%86%E6%AC%A1_%E5%85%A8%E7%9B%9B%E5%9B%AD%E4%B9%8B%E4%BB%80%E9%94%A6%E9%93%9C%E7%81%AB%E9%94%85.jpg", "CC BY-SA 4.0", "Liuxingy"],alt:'Nồi lẩu bằng đồng có ống khói ở giữa, xung quanh là thịt viên, đậu phụ, miến, rau',
 gioi:'Đại Đồng ở phía bắc, mùa đông rất lạnh, nên người dân thích món nóng, nhiều thịt cừu: lẩu nồi đồng, canh lòng cừu, xíu mại nhân thịt cừu. Mùa hè lại có thạch mát trộn chua cay. Hôm nay em đứng quán: đọc yêu cầu của khách rồi chọn đúng món trên thực đơn.',
 nhan:[['tra-sua','6 món đặc sản'],['but','Đọc thực đơn chữ Hán'],['tin-nhan','6 vị khách']],nut:'Mở quán · 6 vị khách',
 mon:[
  {id:'huoguo',zh:'铜火锅',py:'tóng huǒguō',vi:'lẩu nồi đồng',gia:98,a:["anh/dt-hg2x2.webp", "https://commons.wikimedia.org/wiki/File:%E5%B2%B3%E8%AE%B0%E5%85%B4%E9%9A%86%C2%B7%E9%9D%92%E5%9F%8E%E8%85%8A%E6%8E%92%E9%93%9C%E7%81%AB%E9%94%85Yueji_Xinglong_%C2%B7_Qingcheng_Cured_Rib_Copper_Hot_Pot..jpg", "CC BY-SA 4.0", "Chensiyu2004"],mo:'Nồi đồng có ống khói ở giữa, đốt than bên trong; quanh ống xếp thịt, thịt viên, đậu phụ, miến, rau rồi chan nước dùng. Cả nhà ngồi quanh nồi ăn cho ấm.'},
  {id:'shaomai',zh:'烧卖',py:'shāomai',vi:'xíu mại',gia:30,a:["anh/dt-sm6.webp", "https://commons.wikimedia.org/wiki/File:Shaomai_stuffed_with_mutton_and_scallion_at_Kui_Sheng_Ge,_Liudaokou_(20220808115101).jpg", "CC BY-SA 4.0", "N509FZ"],mo:'Vỏ bột mỏng gói nhân, túm lại ở trên như bông hoa nhỏ, để hở miệng rồi hấp. Ở Đại Đồng, xíu mại thường nhân thịt cừu với hành.'},
  {id:'yangza',zh:'羊杂',py:'yángzá',vi:'canh lòng cừu',gia:20,a:["anh/dt-yz10.webp", "https://commons.wikimedia.org/wiki/File:%E7%BE%8A%E6%9D%82%E5%89%B2.JPG", "CC BY-SA 3.0", "AddisWang"],mo:'Lòng, gan, dạ dày cừu nấu thành canh nóng, rắc hành, ngò, thêm ớt dầu. Sáng mùa đông, người Đại Đồng hay ăn một bát cho ấm bụng.'},
  {id:'liangfen',zh:'浑源凉粉',py:'Húnyuán liángfěn',vi:'thạch mát Hồn Nguyên',gia:10,a:["anh/dt-lf2.webp", "https://commons.wikimedia.org/wiki/File:Liangfen_at_Moon_G%C3%BClhan_Restaurant,_Beijing_(20230318121632).jpg", "CC BY-SA 4.0", "N509FZ"],mo:'Thạch làm từ tinh bột, cắt miếng, trộn ớt dầu, giấm, tỏi; ăn mát, chua chua cay cay. Món nổi tiếng của huyện Hồn Nguyên, nơi có Chùa Treo.'},
  {id:'huanghua',zh:'黄花菜',py:'huánghuācài',vi:'hoa hiên vàng',gia:25,a:["anh/dt-hh2x6.webp", "https://commons.wikimedia.org/wiki/File:Hemerocallis_citrina_02.jpg", "CC BY 2.5", "Epibase"],mo:'Nụ hoa hiên màu vàng hái lúc sắp nở, hấp rồi phơi khô, dùng nấu canh, xào thịt. Đại Đồng trồng rất nhiều, được gọi là "quê hương hoa hiên".'},
  {id:'zhagao',zh:'油炸糕',py:'yóuzhágāo',vi:'bánh kê chiên',gia:6,a:["anh/dt-zh42.webp", "https://commons.wikimedia.org/wiki/File:Zhagao_in_Beijing.jpg", "CC BY-SA 4.0", "ZhengZhou"],mo:'Bột kê nếp vàng nhào, gói nhân đậu đỏ rồi chiên giòn. Chữ 糕 gāo đọc giống 高 gāo "cao", nên ngày vui người ta ăn bánh, chúc nhau "bước bước lên cao" 步步高.'}],
 don:[
  {zh:'天冷了，我们想吃一锅火锅，中间烧炭的那种。',py:'Tiān lěng le, wǒmen xiǎng chī yì guō huǒguō, zhōngjiān shāo tàn de nà zhǒng.',vi:'Trời lạnh rồi, chúng tôi muốn ăn một nồi lẩu, loại đốt than ở giữa ấy.',a:'huoguo',k:['火锅','huǒguō','lẩu']},
  {zh:'我要一笼像小花一样、顶上开口的羊肉包子。',py:'Wǒ yào yì lóng xiàng xiǎo huā yíyàng, dǐngshang kāikǒu de yángròu bāozi.',vi:'Cho tôi một xửng bánh nhân thịt cừu, trông như bông hoa nhỏ, hở miệng ở trên.',a:'shaomai',k:['羊肉','yángròu','thịt cừu']},
  {zh:'早上好冷，来一碗热乎乎的汤，里面有羊肚、羊肝。',py:'Zǎoshang hǎo lěng, lái yì wǎn rèhūhū de tāng, lǐmiàn yǒu yángdǔ, yánggān.',vi:'Sáng lạnh quá, cho một bát canh nóng hổi, trong có dạ dày cừu, gan cừu.',a:'yangza',k:['汤','tāng','canh']},
  {zh:'夏天太热了，我想吃一盘凉凉的、酸酸辣辣的。',py:'Xiàtiān tài rè le, wǒ xiǎng chī yì pán liángliáng de, suānsuān làlà de.',vi:'Mùa hè nóng quá, tôi muốn ăn một đĩa món mát mát, chua chua cay cay.',a:'liangfen',k:['凉','liáng','mát, lạnh']},
  {zh:'听说大同有一种黄色的花可以吃，给我来一盘！',py:'Tīngshuō Dàtóng yǒu yì zhǒng huángsè de huā kěyǐ chī, gěi wǒ lái yì pán!',vi:'Nghe nói Đại Đồng có một loại hoa màu vàng ăn được, cho tôi một đĩa!',a:'huanghua',k:['黄色','huángsè','màu vàng']},
  {zh:'今天我过生日，要吃“步步高”的糕，炸得黄黄的那种。',py:'Jīntiān wǒ guò shēngrì, yào chī “bùbù gāo” de gāo, zhá de huánghuáng de nà zhǒng.',vi:'Hôm nay sinh nhật tôi, tôi muốn ăn bánh "bước bước lên cao", loại chiên vàng ruộm ấy.',a:'zhagao',k:['生日','shēngrì','sinh nhật']}]},

shuo:{loai:'chat',av:'爷',zh:'说',py:'shuō',vi:'Trò chuyện với ông cụ',ten2:'Dạo trên tường thành cổ',chuTay:'大同城墙 · 永泰门',anh:["anh/dt-cw7-lon.webp", "https://commons.wikimedia.org/wiki/File:Datong_Ancient_City_Wall_13.jpg", "CC BY 4.0", "xiquinhosilva"],alt:'Lầu cổng thành hai tầng mái trên bức tường gạch cao, phía dưới là cửa vòm',
 gioi:'Tường thành cổ Đại Đồng xây đời Minh, dài khoảng 7 km, có bốn cổng, đã được tu sửa lại. Sáng sớm và chiều tối, người dân lên tường thành đi dạo. Em gặp một ông cụ người Đại Đồng: nghe ông nói rồi chọn câu đáp.',
 nhan:[['tin-nhan','Hội thoại 5 lượt'],['loa','Nghe ông cụ kể'],['khien','Trên tường thành']],nut:'Lên tường thành · 5 lượt nói',
 luot:[
  {zh:'小朋友，你从哪儿来呀？',py:'Xiǎopéngyou, nǐ cóng nǎr lái ya?',vi:'Cháu ơi, cháu từ đâu đến thế?',hoi:'Chọn câu đáp:',o:['我从越南来。','我是越南。','我去越南。'],a:0,
   x:'从…来 cóng… lái là "đến từ…". 我是越南 sai vì thiếu 人: phải nói 我是越南人.',k:['从','cóng','từ']},
  {zh:'这城墙是明朝修的，你看，一共有四个城门。',py:'Zhè chéngqiáng shì Míngcháo xiū de, nǐ kàn, yígòng yǒu sì ge chéngmén.',vi:'Tường thành này xây từ đời Minh, cháu xem, tất cả có bốn cổng thành.',hoi:'Thành cổ Đại Đồng có mấy cổng?',o:['4 cổng','6 cổng','9 cổng'],a:0,
   x:'一共 yígòng là "tất cả, tổng cộng". Thành Đại Đồng có 4 cổng đông, tây, nam, bắc; thành Bình Dao có 6 cổng.',k:['一共','yígòng','tổng cộng']},
  {zh:'过年的时候，大同家家门口都垒旺火，用煤块儿垒得高高的。',py:'Guònián de shíhou, Dàtóng jiājiā ménkǒu dōu lěi wànghuǒ, yòng méikuàir lěi de gāogāo de.',vi:'Dịp Tết, trước cửa nhà nào ở Đại Đồng cũng xếp đống lửa vượng, dùng than cục xếp thật cao.',hoi:'旺火 được xếp bằng gì?',o:['煤 than đá','冰 băng','书 sách'],a:0,
   x:'Đại Đồng có rất nhiều than. 旺 wàng là thịnh vượng: đống lửa cháy càng to, năm mới càng may mắn.',k:['煤','méi','than đá']},
  {zh:'明天去云冈石窟吧，大佛有十几米高！',py:'Míngtiān qù Yúngāng Shíkū ba, dàfó yǒu shí jǐ mǐ gāo!',vi:'Mai cháu đi hang đá Vân Cương đi, tượng Phật lớn cao mười mấy mét đấy!',hoi:'Tượng Phật lớn cao khoảng bao nhiêu?',o:['mười mấy mét','vài xăng-ti-mét','một trăm mét'],a:0,
   x:'十几 shí jǐ là "mười mấy". 米 mǐ là mét. Tượng lớn nhất ở Vân Cương cao khoảng 17 m.',k:['米','mǐ','mét']},
  {zh:'我们大同夏天不热，是避暑的好地方。',py:'Wǒmen Dàtóng xiàtiān bú rè, shì bìshǔ de hǎo dìfang.',vi:'Đại Đồng chúng tôi mùa hè không nóng, là nơi tránh nóng rất tốt.',hoi:'避暑 nghĩa là gì?',o:['tránh nóng mùa hè','tránh rét mùa đông','đi tắm biển'],a:0,
   x:'避 là tránh, 暑 là nóng bức. Đại Đồng cao khoảng 1.000 m so với mặt biển nên mùa hè mát.',k:['避暑','bìshǔ','tránh nóng']}]},

zhu:{loai:'nha',zh:'住',py:'zhù',vi:'Pháo đài Trường Thành',ten2:'Ở cùng lính giữ biên ải',chuTay:'长城 · 军堡',anh:["anh/dt-cc2-lon.webp", "https://commons.wikimedia.org/wiki/File:Greatwall_Shahukou_Datong_Shanxi.jpg", "CC0", "Chlukoe"],alt:'Một phong hoả đài bằng đất nện đứng trên đồi cỏ xanh, xa xa là tua-bin gió',
 gioi:'Thời Minh, Đại Đồng là một trấn lớn giữ biên giới phía bắc. Dọc Trường Thành có nhiều pháo đài nhỏ 堡 có tường đất bao quanh, cho lính và gia đình ở; trên núi có phong hoả đài để báo tin. Ngày nay trong một số pháo đài vẫn còn làng có người ở. Chạm vào từng phần của bản vẽ để khám phá, rồi trả lời câu hỏi bằng cách chạm vào bản vẽ.',
 nhan:[['khien','Pháo đài 堡'],['kinh-lup','Khám phá 6 phần'],['tick','5 câu chạm bản vẽ']],nut:'Vào pháo đài · khám phá',
 khamT:'Khám phá pháo đài',khamP:'Chạm vào từng phần: Trường Thành, phong hoả đài, cổng, trại lính, chuồng ngựa, giếng… để xem tên gọi và công dụng.',
 khu:{
  changcheng:{zh:'长城',py:'Chángchéng',vi:'Trường Thành',mo:'Bức tường dài vắt qua núi, chặn đường kỵ binh từ phương bắc. Đoạn Trường Thành gần Đại Đồng phần lớn đắp bằng đất nện.'},
  fenghuotai:{zh:'烽火台',py:'fēnghuǒtái',vi:'phong hoả đài',mo:'Tháp canh trên cao. Thấy giặc đến, ban ngày đốt khói, ban đêm đốt lửa; tháp này nối tháp kia, tin báo truyền đi rất nhanh.'},
  baomen:{zh:'堡门',py:'bǎomén',vi:'cổng pháo đài',mo:'Cổng duy nhất ra vào pháo đài, có cửa gỗ dày; tối đến là đóng cổng.'},
  bingying:{zh:'兵营',py:'bīngyíng',vi:'trại lính',mo:'Dãy nhà thấp cho lính ở. Nhiều người lính đưa cả vợ con theo, lâu dần pháo đài thành một ngôi làng.'},
  majiu:{zh:'马厩',py:'mǎjiù',vi:'chuồng ngựa',mo:'Nơi nuôi ngựa cho lính cưỡi đi tuần tra và đưa tin; trong chuồng có máng cỏ.'},
  shuijing:{zh:'水井',py:'shuǐjǐng',vi:'giếng nước',mo:'Giếng ở giữa pháo đài: dù bị vây, người bên trong vẫn có nước uống.'}},
 cau:[
  {q:'Thấy giặc đến, đốt lửa báo tin ở đâu?',a:['fenghuotai'],x:'烽火台 phong hoả đài: 烽火 là khói lửa báo tin.',k:['烽火台','fēnghuǒtái','phong hoả đài']},
  {q:'Ngựa của lính ở đâu?',a:['majiu'],x:'马厩 chuồng ngựa: 马 là ngựa.',k:['马','mǎ','ngựa']},
  {q:'Bị vây vẫn lấy được nước ở đâu?',a:['shuijing'],x:'水井 giếng nước: 水 là nước, 井 là giếng.',k:['水井','shuǐjǐng','giếng nước']},
  {q:'Lính ngủ ở đâu?',a:['bingying'],x:'兵营 trại lính: 兵 là lính.',k:['士兵','shìbīng','người lính']},
  {q:'Bức tường dài vắt qua núi là gì?',a:['changcheng'],x:'长城 Trường Thành: 长 là dài, 城 là thành.',k:['长城','Chángchéng','Trường Thành']}]},

su:{loai:'ghep',zh:'俗',py:'sú',vi:'Tết ở Đại Đồng',ten2:'Đón năm mới nơi biên ải',chuTay:'大同过年 · 旺火',anh:["anh/dt-dt2-lon.webp", "https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%90%8C%E5%A4%9C%E6%99%AF.jpg", "CC BY-SA 4.0", "LancelotZhu"],alt:'Tường thành Đại Đồng lúc chập tối, lầu cổng thành sáng đèn, bên dưới là hào nước',
 gioi:'Tết ở Đại Đồng rất lạnh nhưng rất vui: nhà nhà xếp đống lửa than, phố phố múa rồng múa lân, cổng thành treo đèn hoa. Ghép mỗi ảnh với đúng biển tên.',
 nhan:[['manh-ghep','Ghép 5 cặp'],['den-long','Phong tục Tết'],['lua','Lửa than 旺火']],nut:'Đón Tết · ghép 5 cặp',
 do:[
  {id:'wanghuo',zh:'旺火',py:'wànghuǒ',vi:'đống lửa vượng',a:["anh/dt-wh2.webp", "https://commons.wikimedia.org/wiki/File:%E5%91%BC%E5%B8%82%E9%93%B6%E4%BD%9B%E5%AF%BA%E5%A3%AC%E8%BE%B0%E5%B9%B4%E6%AD%A3%E6%9C%8815%E7%9A%84%E6%97%BA%E7%81%AB_-_panoramio.jpg", "CC BY 3.0", "月亮河呼和"],mo:'Than cục xếp thành tháp cao trước cửa nhà, cửa hàng. Đêm giao thừa châm lửa, lửa càng cháy to năm mới càng thịnh vượng. Phong tục quen thuộc ở Đại Đồng và miền bắc Sơn Tây.'},
  {id:'wulong',zh:'舞龙',py:'wǔlóng',vi:'múa rồng',a:["anh/dt-wl2.webp", "https://commons.wikimedia.org/wiki/File:Dragon_Dance_in_Binondo_Manila.jpg", "CC BY-SA 4.0", "Rauxilian"],mo:'Nhiều người cầm gậy đỡ thân rồng dài, cùng chạy, cùng uốn để con rồng như đang bay. Múa rồng cầu mưa thuận gió hoà.'},
  {id:'wushi',zh:'舞狮',py:'wǔshī',vi:'múa lân (múa sư tử)',a:["anh/dt-wl5.webp", "https://commons.wikimedia.org/wiki/File:Dragon_dancers_-_2015_500_Festival_Parade_-_Sarah_Stierch_2.jpg", "CC BY 4.0", "Sarah Stierch"],mo:'Hai người chui vào một con sư tử, một người làm đầu, một người làm đuôi, nhảy múa theo tiếng trống để xua điều xấu.'},
  {id:'jiaozi',zh:'饺子',py:'jiǎozi',vi:'sủi cảo',a:["anh/dt-sm7.webp", "https://commons.wikimedia.org/wiki/File:%E6%AD%A3%E5%AE%97%E5%8C%97%E6%96%B9%E6%B0%B4%E9%A5%BA_Peking_Pork_Dumpling_-_Happy_Dumpling_AUD8_for_15.jpg", "CC BY-SA 2.0", "avlxyz"],mo:'Đêm giao thừa, người miền bắc Trung Quốc quây quần gói sủi cảo, đến lúc sang năm mới thì cùng ăn.'},
  {id:'huadeng',zh:'花灯',py:'huādēng',vi:'đèn hoa',a:["anh/dt-cw1.webp", "https://commons.wikimedia.org/wiki/File:Datong_Ancient_City_Wall_09.jpg", "CC BY 4.0", "xiquinhosilva"],mo:'Dịp Tết và rằm tháng Giêng, cổng thành, phố xá Đại Đồng bày đèn hoa nhiều hình dáng; tối đến cả thành sáng rực.'}]}
};

// ===== Sảnh ga thành phố
window.VH_DT.sanh={zh:'大同',vi:'Đại Đồng',ga:'大同南站',gaPy:'DÀTÓNG NÁN ZHÀN',tuyen:['华北线','Tuyến Hoa Bắc'],gaSo:'Ga 5/6',tram:'dt',
 chao:['欢迎来到大同！','Huānyíng lái dào Dàtóng!','Chào mừng đến Đại Đồng!'],
 gioi:'Đại Đồng ở phía bắc tỉnh Sơn Tây, sát Nội Mông và Trường Thành. Hơn 1.500 năm trước, đây là kinh đô Bình Thành <b>平城</b> của nhà Bắc Nguỵ; các vua Bắc Nguỵ cho đục hang đá Vân Cương ở phía tây thành. Thời Liêu, Kim, Đại Đồng là "Tây Kinh"; thời Minh là trấn lớn giữ biên giới phía bắc. Đại Đồng còn có rất nhiều than đá nên được gọi là <b>煤都</b> "thủ đô than".',
 tuKhoa:[['石窟','shíkū','hang đá'],['长城','Chángchéng','Trường Thành'],['煤','méi','than đá']],
 bia:["anh/dt-cw4-lon.webp", "https://commons.wikimedia.org/wiki/File:Datong_Ancient_City_Wall_01.jpg", "CC BY 4.0", "xiquinhosilva"],biaAlt:'Tường thành cổ Đại Đồng với các lầu canh, hào nước và vườn cây bên ngoài',chuTay:'大同古城 · 城墙',phut:'一分钟大同',
 soLieu:[['北魏','kinh đô Bắc Nguỵ','97','năm','tên cũ là Bình Thành 平城, năm 398–494'],['石窟','hang lớn ở Vân Cương','45','hang','với hơn 51.000 pho tượng'],['九龙壁','tường chín rồng','1392','năm','dài khoảng 45,5 m'],['海拔','độ cao','1.000','m','khoảng, nên mùa hè mát']],
 thang:['dong','dong','xuan','xuan','xuan','ha','ha','ha','thu','thu','dong','dong'],dep:[6,7,8],
 mua:[
  {k:'xuan',ten:'Xuân · tháng 3–5',nd:'−3–20°C',p:'Ấm dần nhưng khô, nhiều gió, có ngày bụi cát. Đầu xuân sáng tối còn rét.',muc:'Nhiều gió',dep:0},
  {k:'ha',ten:'Hạ · tháng 6–8',nd:'15–28°C',p:'Mát hơn hẳn đồng bằng, ít ngày oi bức; tháng 7–8 có mưa rào. Hợp đi Vân Cương, Chùa Treo, lên Trường Thành.',muc:'Đẹp nhất năm',dep:1},
  {k:'thu',ten:'Thu · tháng 9–10',nd:'3–23°C',p:'Trời trong, nắng nhẹ, ít mưa; cuối tháng 10 đã lạnh. Đi bộ trên tường thành rất dễ chịu.',muc:'Khá hợp',dep:0},
  {k:'dong',ten:'Đông · tháng 11–2',nd:'−17–2°C',p:'Rất lạnh, khô, gió mạnh, ít khách. Dịp Tết có lửa than 旺火, đèn hoa trên tường thành; phải mặc thật ấm.',muc:'Rất lạnh',dep:0}],
 luuY:[['#6B5B95','dong-ho','Đi tàu cao tốc','Ga Đại Đồng Nam 大同南站 có tàu cao tốc từ Bắc Kinh và từ Thái Nguyên, mỗi chặng khoảng 2 tiếng.'],
  ['#8A6B4A','diem','Điểm ở xa thành','Vân Cương cách trung tâm khoảng 16 km, Chùa Treo khoảng 65 km: nên đi xe, dành riêng mỗi nơi một buổi.'],
  ['#2F7FC1','mattroi','Sáng tối mát','Đại Đồng ở trên cao, chênh lệch nhiệt độ ngày đêm lớn: mùa hè buổi tối vẫn cần áo khoác mỏng.']],
 banDoTen:'大同地图',banDo:"<svg viewBox=\"0 0 400 300\" aria-hidden=\"true\">\n      <defs>\n        <radialGradient id=\"dtGiay\" cx=\".5\" cy=\".45\" r=\".75\"><stop offset=\"0\" stop-color=\"#F7F3EA\"/><stop offset=\"1\" stop-color=\"#E2DACB\"/></radialGradient>\n        <pattern id=\"dtCham\" width=\"12\" height=\"12\" patternUnits=\"userSpaceOnUse\"><circle cx=\"2\" cy=\"2\" r=\".7\" fill=\"#B9AE98\" opacity=\".45\"/></pattern>\n      </defs>\n      <rect width=\"400\" height=\"300\" fill=\"url(#dtGiay)\"/><rect width=\"400\" height=\"300\" fill=\"url(#dtCham)\"/>\n      <!-- núi phía bắc + Trường Thành -->\n      <path d=\"M0 34L40 12L80 30L130 8L180 28L230 6L280 26L330 4L400 22V0H0z\" fill=\"#D3C6A6\" opacity=\".7\"/>\n      <path d=\"M170 20L210 12L250 22L290 10L330 20L380 8\" fill=\"none\" stroke=\"#9A8462\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n      <text x=\"300\" y=\"34\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#7A6A50\">长城 · Trường Thành</text>\n      <!-- sông Ngự Hà phía đông -->\n      <path d=\"M352 0C340 60 360 120 344 180S356 260 348 300\" fill=\"none\" stroke=\"#B7CCD6\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <text x=\"362\" y=\"150\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#6E8A98\" transform=\"rotate(90 362 150)\">御河</text>\n      <!-- tường thành vuông -->\n      <path d=\"M90 56H310V262H90z\" fill=\"#EFE7D6\" stroke=\"#7E6E5E\" stroke-width=\"7\" stroke-linejoin=\"round\"/>\n      <path d=\"M90 56H310V262H90z\" fill=\"none\" stroke=\"#B8A88E\" stroke-width=\"2\" stroke-dasharray=\"3 5\"/>\n      <g fill=\"#7E6E5E\"><path d=\"M188 262h24v12h-24zM188 56h24v-12h-24zM90 147v24h-12v-24zM310 147v24h12v-24z\"/></g>\n      <g font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#5E5040\" text-anchor=\"middle\">\n        <text x=\"200\" y=\"40\">北门 武定门</text><text x=\"62\" y=\"162\">西门</text><text x=\"337\" y=\"140\">东门</text>\n      </g>\n      <!-- phố chính -->\n      <g stroke=\"#DCCFB6\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M200 60V258M94 159H306\"/></g>\n      <!-- mái nhà -->\n      <g fill=\"#B4A890\" opacity=\".5\">\n        <rect x=\"104\" y=\"70\" width=\"80\" height=\"78\" rx=\"3\"/><rect x=\"216\" y=\"70\" width=\"80\" height=\"34\" rx=\"3\"/>\n        <rect x=\"104\" y=\"170\" width=\"80\" height=\"80\" rx=\"3\"/><rect x=\"216\" y=\"170\" width=\"80\" height=\"80\" rx=\"3\"/>\n      </g>\n      <!-- 华严寺 -->\n      <g transform=\"translate(138 120)\"><rect x=\"-14\" y=\"-4\" width=\"28\" height=\"14\" fill=\"#B0352F\"/><path d=\"M-18-4h36l-6-8h-24z\" fill=\"#5E6870\"/></g>\n      <text x=\"138\" y=\"146\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#6E5A40\">华严寺</text>\n      <!-- 九龙壁 -->\n      <g transform=\"translate(262 120)\"><rect x=\"-22\" y=\"-6\" width=\"44\" height=\"12\" rx=\"1\" fill=\"#3E7FA8\" stroke=\"#2A5A78\" stroke-width=\"1\"/><path d=\"M-18 0q4-5 8 0t8 0 8 0 8 0 8 0\" fill=\"none\" stroke=\"#E0A800\" stroke-width=\"1.6\"/><path d=\"M-24-6h48l-3-4h-42z\" fill=\"#2E8C6A\"/></g>\n      <text x=\"262\" y=\"140\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#6E5A40\">九龙壁</text>\n      <!-- 鼓楼 -->\n      <g transform=\"translate(200 214)\"><rect x=\"-7\" y=\"-2\" width=\"14\" height=\"10\" fill=\"#B0352F\"/><path d=\"M-11-2h22l-4-5h-14z\" fill=\"#3E5A7A\"/><path d=\"M-9-9h18l-3-4h-12z\" fill=\"#3E5A7A\"/></g>\n      <text x=\"214\" y=\"226\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"7.5\" fill=\"#6E5A40\">鼓楼</text>\n      <!-- Vân Cương ngoài thành -->\n      <g transform=\"translate(36 84)\"><path d=\"M-22 12V-4q22-12 44 0V12z\" fill=\"#C9B48A\" stroke=\"#8A7A5A\" stroke-width=\"1.4\"/><path d=\"M-12 12V2a5 5 0 0 1 10 0V12zM4 12V2a5 5 0 0 1 10 0V12z\" fill=\"#6E5A40\"/></g>\n      <text x=\"8\" y=\"112\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"7\" fill=\"#6E8A98\">← 云冈石窟 · 16 km</text>\n      <!-- Chùa Treo ngoài thành -->\n      <g transform=\"translate(350 252)\"><path d=\"M14-22V20\" stroke=\"#8A7A5A\" stroke-width=\"5\"/><rect x=\"-6\" y=\"-6\" width=\"18\" height=\"10\" fill=\"#B0352F\"/><path d=\"M-10-6h24l-4-6h-16z\" fill=\"#E0A800\"/><path d=\"M-2 4v12M8 4v12\" stroke=\"#6E5A40\" stroke-width=\"1.2\"/></g>\n      <text x=\"318\" y=\"292\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"7\" fill=\"#6E8A98\">↘ 悬空寺 · 65 km</text>\n      <!-- bạn đang ở đây: cổng Nam -->\n      <g class=\"o-day\"><circle cx=\"226\" cy=\"274\" r=\"5\" fill=\"#C8423B\"/><circle cx=\"226\" cy=\"274\" r=\"2\" fill=\"#fff\"/></g>\n      <text class=\"chu-ga\" x=\"234\" y=\"277\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"8\" fill=\"#9A3A2E\">Bạn đang ở đây</text>\n      <text x=\"234\" y=\"287\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8\" fill=\"#9A3A2E\">南门 永泰门</text>\n      <!-- la bàn -->\n      <g transform=\"translate(372 66)\"><circle r=\"16\" fill=\"#F7F3EA\" stroke=\"#B9AE98\" stroke-width=\"1.5\"/><path d=\"M0-11L3.5 0 0 11-3.5 0z\" fill=\"#C8423B\"/><path d=\"M0 11L3.5 0-3.5 0z\" fill=\"#8A7A6A\"/><text y=\"-19\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"8.5\" fill=\"#C8423B\">北</text></g>\n      <!-- khung tiêu đề -->\n      <g transform=\"translate(8 190)\"><rect width=\"66\" height=\"34\" rx=\"6\" fill=\"#F7F3EA\" stroke=\"#6B5B95\" stroke-width=\"1.6\"/><rect x=\"3\" y=\"3\" width=\"60\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"#6B5B95\" stroke-width=\".6\" stroke-dasharray=\"2 2\"/><text x=\"33\" y=\"19\" text-anchor=\"middle\" font-family=\"STKaiti,KaiTi,serif\" font-size=\"11.5\" fill=\"#6B5B95\">大同古城图</text><text x=\"33\" y=\"28\" text-anchor=\"middle\" font-family=\"Be Vietnam Pro,sans-serif\" font-weight=\"700\" font-size=\"5.5\" fill=\"#6E5A40\">BẢN ĐỒ THÀNH CỔ</text></g>\n      <rect x=\"2\" y=\"2\" width=\"396\" height=\"296\" rx=\"16\" fill=\"none\" stroke=\"#B9AE98\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n    </svg>\n"};
// bản vẽ pháo đài nhỏ 军堡 dưới chân Trường Thành, nhìn chéo từ trên xuống (khung 400×330); khu(id, hình, x nhãn, y nhãn) do trang thu-trai-nghiem cung cấp
VH_DT.tn.zhu.nhaTen='Bản vẽ pháo đài nhỏ dưới chân Trường Thành: tường đất bao quanh, trong có trại lính, chuồng ngựa, giếng; trên núi là Trường Thành và phong hoả đài';
VH_DT.tn.zhu.ve=function(khu){
 var nha=function(x,y){return '<rect x="'+x+'" y="'+(y+10)+'" width="34" height="24" fill="#D9BC8C" stroke="#8A6640" stroke-width="1.6"/><path d="M'+(x-4)+' '+(y+12)+'L'+(x+17)+' '+y+'L'+(x+38)+' '+(y+12)+'z" fill="#7A6A5A" stroke="#5E4E40" stroke-width="1.4"/><rect x="'+(x+13)+'" y="'+(y+20)+'" width="8" height="14" fill="#6E4A2E"/>'};
 return '<rect x="0" y="0" width="400" height="140" fill="#E3EDF2"/>'+
  // núi
  '<path d="M0 120L50 70L95 100L150 55L205 95L255 62L310 92L350 50L400 80V140H0z" fill="#B9A37C"/><path d="M0 132L60 98L120 118L190 90L260 116L330 94L400 112V140H0z" fill="#C9B48A"/>'+
  khu('changcheng','<path d="M0 104L50 74L95 100L150 60L205 96L255 66L300 90" fill="none" stroke="#8E7A5A" stroke-width="7" stroke-linejoin="round"/><path d="M0 104L50 74L95 100L150 60L205 96L255 66L300 90" fill="none" stroke="#B8A47E" stroke-width="2.5" stroke-dasharray="3 3"/><rect x="144" y="46" width="13" height="14" fill="#8E7A5A"/><rect x="44" y="60" width="12" height="13" fill="#8E7A5A"/><rect x="249" y="52" width="12" height="13" fill="#8E7A5A"/>',150,30)+
  khu('fenghuotai','<path d="M330 92L336 50h22l6 42z" fill="#A88A5E" stroke="#6E5A3A" stroke-width="2"/><path d="M334 50h26v-6h-26z" fill="#8E7454"/><path d="M347 42c-6-8 4-12-2-20c8 2 10 10 4 14c8-4 10-12 6-20" fill="none" stroke="#7A7A78" stroke-width="3" stroke-linecap="round"/><g fill="#9A9A96" opacity=".75"><circle cx="350" cy="16" r="7"/><circle cx="362" cy="10" r="6"/><circle cx="340" cy="8" r="5"/></g><path d="M343 44q4-8 8 0z" fill="#E8842E"/>',346,112)+
  // đất trong pháo đài
  '<rect x="0" y="140" width="400" height="190" fill="#E2D1AE"/>'+
  '<path d="M36 150H364V300H36z" fill="#EADBB8"/>'+
  // tường bao quanh (đất nện)
  '<path d="M30 142H370V156H30z" fill="#B8955E" stroke="#8A6640" stroke-width="1.6"/><path d="M30 142V306H44V156M370 142V306H356V156" fill="#B8955E" stroke="#8A6640" stroke-width="1.6"/>'+
  '<g fill="#8A6640">'+[34,62,90,118,146,174,202,230,258,286,314,342].map(function(x){return '<rect x="'+x+'" y="136" width="14" height="6"/>'}).join('')+'</g>'+
  khu('bingying',nha(62,170)+nha(110,170)+nha(62,214)+nha(110,214)+'<path d="M70 262h80" stroke="#C4AE84" stroke-width="2"/>',104,164)+
  khu('majiu','<rect x="240" y="196" width="104" height="44" fill="#CFAE7A" stroke="#7A5232" stroke-width="1.6"/><path d="M234 198L292 176L350 198z" fill="#9C7A4E" stroke="#6E5032" stroke-width="1.6"/><path d="M262 240v-40M292 240v-40M322 240v-40" stroke="#7A5232" stroke-width="1.6"/><g transform="translate(270 222)" fill="#7A4A2A"><ellipse rx="12" ry="7"/><path d="M8-4l9-10 5 3-6 12z"/><path d="M-9 4v12M-4 5v11M5 5v11M9 4v12" stroke="#7A4A2A" stroke-width="2.4"/></g><path d="M300 236h30v-8h-30z" fill="#E0C27A" stroke="#9A7A40" stroke-width="1"/>',292,166)+
  khu('shuijing','<ellipse cx="200" cy="262" rx="20" ry="8" fill="#9A9A92" stroke="#5E5E58" stroke-width="2"/><ellipse cx="200" cy="260" rx="12" ry="4" fill="#3E5E7A"/><path d="M184 260v-28M216 260v-28M180 232h40" stroke="#6E4A2E" stroke-width="3"/><path d="M200 232v14" stroke="#555" stroke-width="1.4"/><rect x="195" y="244" width="10" height="8" fill="#8A6B4A"/>',200,212)+
  // tường trước + cổng
  '<path d="M30 300H182V322H30zM218 300H370V322H218z" fill="#B8955E" stroke="#8A6640" stroke-width="1.6"/>'+
  khu('baomen','<path d="M178 300V322H222V300z" fill="#A48250" stroke="#7A5232" stroke-width="1.6"/><path d="M188 322V310a12 12 0 0 1 24 0V322z" fill="#4A3020"/><path d="M174 300l26-18 26 18z" fill="#7A6A5A" stroke="#5E4E40" stroke-width="1.4"/><rect x="190" y="288" width="20" height="8" fill="#B0352F"/>',200,276)+
  '';
};
window.VH_TP=window.VH_TP||{};window.VH_TP.dt=window.VH_DT;
