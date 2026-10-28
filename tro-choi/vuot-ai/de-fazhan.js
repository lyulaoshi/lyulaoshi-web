// Vượt ải 闯关 — đề ôn 发展汉语 (初级综合 II Bài 1–2, 中级综合 I Bài 1). CHỜ CÔ DUYỆT.
// Câu xếp / dịch lấy từ các bài bổ sung (补二 连词成句, 补三 翻译, 补四/补五) và hội thoại 试一试 trong bài giảng; đáp án nhiễu + lời giải thích do Claude soạn nháp.
// Khuôn dữ liệu giống de-tttc.js. Điểm ngữ pháp `tu` = từ vựng và cấu trúc của phần bài bổ sung (补一).
(function(){
const S=(id,p,py,vi,g)=>({id,p:p.split('|'),py,vi,g});
const H=(id,who,q,ok,bad,g)=>({id,who,q,ok:ok.split('|'),bad:bad.map(b=>b.split('~')),g});
const D=(id,s,o,why,g)=>({id,s,o:o.split('|'),ok:0,why,g});
const T=(id,vi,p,nhieu,py,g,boss)=>({id,vi,p:p.split('|'),nhieu:nhieu.split('|'),py,g,boss:boss?1:0});
const B=(mon,n,zh,vi,gr,sap,hoi,dien,dich)=>({id:mon+'-bai-'+n,mon,n,zh,vi:'Bài '+n+' · '+vi,lk:'../../'+mon+'/bai-'+n+'/',gr,sap,hoi,dien,dich});

window.VA_SACH=(window.VA_SACH||[]).concat([
  {id:'fazhan-sc2',zh:'发展汉语 初级综合 II',vi:'Phát triển Hán ngữ, Sơ cấp II'},
  {id:'fazhan-tc1',zh:'发展汉语 中级综合 I',vi:'Phát triển Hán ngữ, Trung cấp I'}
]);
window.VA_BAI=(window.VA_BAI||[]).concat([

B('fazhan-sc2',1,'入乡随俗','Nhập gia tùy tục',{
  zhe:{zh:'V + 着',vi:'V + 着: trạng thái duy trì',huy:'Đang giữ nguyên đó',ct:'V + 着 (+ O): trạng thái đang duy trì; không dùng chung 着 và 了 sau một động từ.',s:11},
  bude:{zh:'不得不 / 不能不 / 不会不',vi:'Phủ định kép',huy:'Phủ định hai lần là chắc chắn',ct:'Hai lần phủ định = khẳng định mạnh: 不会不 (chắc chắn), 不能不 (phải), 不得不 (đành phải) + V.',s:12},
  bushi:{zh:'不是A，而是B',vi:'Không phải A mà là B',huy:'Không A mà là B',ct:'不是 + A，而是 + B: phủ nhận A, nhấn mạnh B mới đúng.',s:13},
  tu:{zh:'补充词语',vi:'Từ vựng bài bổ sung',huy:'Giỏi từ vựng',ct:'Ôn từ vựng và cấu trúc trong phần bài bổ sung.',s:24}
},[
  S('s1','我|每天|早上|都|跟邻居|打招呼','Wǒ měitiān zǎoshang dōu gēn línjū dǎ zhāohu.','Mỗi sáng tôi đều chào hỏi hàng xóm.','tu'),
  S('s2','为了|不迟到|，|他|买了|一个|闹钟','Wèile bù chídào, tā mǎi le yí ge nàozhōng.','Để không đến muộn, anh ấy mua một cái đồng hồ báo thức.','tu'),
  S('s3','外面|下着|雨呢|，|带伞了吗','Wàimiàn xià zhe yǔ ne, dài sǎn le ma?','Bên ngoài đang mưa, bạn mang ô chưa?','zhe'),
  S('s4','你放心|，|他|不会不|来的','Nǐ fàngxīn, tā bú huì bù lái de.','Bạn yên tâm, anh ấy chắc chắn sẽ đến.','bude'),
  S('s5','他|不是|不想学|，|而是|没时间','Tā bú shì bù xiǎng xué, ér shì méi shíjiān.','Anh ấy không phải không muốn học mà là không có thời gian.','bushi'),
  S('s6','我|渐渐|习惯了|这里的|生活','Wǒ jiànjiàn xíguàn le zhèlǐ de shēnghuó.','Dần dần tôi quen với cuộc sống ở đây.','tu')
],[
  H('h1','Péngyou 朋友','别人都去旅行了，你不想去吗？','我不是不想去，而是没有时间。|我不是不想去，而是没时间。',['我不是不想去，不是没有时间。~Vế sau phải là 而是 + lý do thật.','我不想去，而是没有时间。~Thiếu 不是 ở vế đầu: 不是……，而是…….'],'bushi'),
  H('h2','Péngyou 朋友','我们是这个星期三有考试吧？','不是这个星期三，而是星期四。',['不是这个星期三，是而星期四。~Thứ tự đúng: 不是 A，而是 B (而是 đi liền nhau).','这个星期三不是，而是星期四。~不是 phải đứng trước A: 不是这个星期三.'],'bushi'),
  H('h3','Péngyou 朋友','这件事他知道吗？','他不会不知道。|他不会不知道的。',['他不会知道不。~Phủ định kép đặt trước động từ: 不会不 + V.','他不会不没知道。~Chỉ dùng hai từ phủ định liên tiếp: 不会不知道.'],'bude'),
  H('h4','Péngyou 朋友','明天的活动很重要，你参加吗？','我不能不参加。',['我不能参加不。~Cấu trúc 不能不 + V đứng trước động từ.','我不能不参加了吗。~Đáp bằng câu khẳng định mạnh, không thêm 了吗.'],'bude'),
  H('h5','Péngyou 朋友','路上堵车了，你怎么去？','我不得不打车去。',['我不得打车不去。~Cấu trúc 不得不 + V: “đành phải”.','我不得不没打车去。~Không thêm 没: 不得不 + động từ.'],'bude'),
  H('h6','Péngyou 朋友','她手里拿着什么？','她拿着一束花。',['她拿一束花着。~着 đứng ngay sau động từ: 拿着一束花.','她拿了着一束花。~了 và 着 không đứng chung sau một động từ.'],'zhe')
],[
  D('d1','秋天到了，天气_变冷了。','渐渐|迟到|风俗','Quá trình thay đổi từ từ: 渐渐 + động từ.','tu'),
  D('d2','明天有考试，你可不能_！','迟到|邻居|风俗','Sau 不能 cần động từ: 迟到.','tu'),
  D('d3','外面下_雨呢。','着|过|的','Trạng thái đang diễn ra: 下着雨呢.','zhe'),
  D('d4','这件事他不会_知道。','不|没|很','不会不 + V = chắc chắn sẽ.','bude'),
  D('d5','他不是不会说汉语，_是不好意思说。','而|很|也','Mẫu 不是 A，而是 B.','bushi'),
  D('d6','她这么努力，_能考上大学。','肯定|适应|风俗','Phó từ chỉ sự chắc chắn: 肯定.','tu')
],[
  T('t1','Dần dần tôi quen với cuộc sống ở đây.','我|渐渐|习惯了|这里的|生活','却|了','Wǒ jiànjiàn xíguàn le zhèlǐ de shēnghuó.','tu'),
  T('t2','Cô ấy đang cầm một bó hoa.','她|拿|着|一束花','了|过','Tā ná zhe yí shù huā.','zhe'),
  T('t3','Không phải tôi không thích, mà là tôi quá bận.','我|不是|不喜欢|，|而是|太忙了','但是|吗','Wǒ bú shì bù xǐhuan, ér shì tài máng le.','bushi',1)
]),

B('fazhan-sc2',2,'儿子要回家','Con trai sắp về nhà',{
  conglai:{zh:'从来',vi:'从来 + 不 / 没(有)',huy:'Xưa nay chưa từng',ct:'从来不 + V: xưa nay không; 从来没(有) + V + 过: chưa từng.',s:11},
  bubu:{zh:'不A不B',vi:'不 A 不 B: vừa phải',huy:'Vừa vặn',ct:'不 + A + 不 + B (cặp tính từ trái nghĩa) = vừa phải: 不大不小.',s:12},
  chusuo:{zh:'处所 + V着 + N',vi:'Câu tồn hiện',huy:'Ở đó có gì',ct:'Nơi chốn đứng đầu câu + V着 + vật: 墙上挂着一幅地图.',s:13},
  tu:{zh:'补充词语',vi:'Từ vựng bài bổ sung',huy:'Giỏi từ vựng',ct:'Ôn từ vựng và cấu trúc trong phần bài bổ sung.',s:25}
},[
  S('s1','他|从来|不|吃|早饭','Tā cónglái bù chī zǎofàn.','Xưa nay anh ấy không ăn sáng.','conglai'),
  S('s2','墙角|放着|一个|垃圾箱','Qiángjiǎo fàng zhe yí ge lājīxiāng.','Ở góc tường đặt một cái thùng rác.','chusuo'),
  S('s3','我的|房间|不大|不小','Wǒ de fángjiān bú dà bù xiǎo.','Phòng của mình không to không nhỏ.','bubu'),
  S('s4','桌子上|摆着|许多|旧书','Zhuōzi shang bǎi zhe xǔduō jiù shū.','Trên bàn bày nhiều sách cũ.','chusuo'),
  S('s5','你|最好|小心|点儿','Nǐ zuìhǎo xiǎoxīn diǎnr.','Bạn nên cẩn thận một chút.','tu'),
  S('s6','这件事|跟我|没有|关系','Zhè jiàn shì gēn wǒ méiyǒu guānxi.','Chuyện này không liên quan đến tôi.','tu')
],[
  H('h1','Péngyou 朋友','你喝酒吗？','我从来不喝酒。|我从来都不喝酒。',['我不从来喝酒。~从来 đứng trước 不: 从来不 + V.','我从来喝酒不。~Thứ tự: 从来不喝酒.'],'conglai'),
  H('h2','Péngyou 朋友','你去过云南吗？','我从来没去过云南。|我从来没有去过云南。',['我从来没去云南过。~Địa điểm đứng sau động từ, trước 过 không đảo: 去过云南.','我从来不去过云南。~Chưa từng trải qua dùng 从来没(有) + V + 过, không dùng 不.'],'conglai'),
  H('h3','Péngyou 朋友','你的房间大吗？','不大不小，一个人住正合适。',['不大小。~Cấu trúc 不A不B cần đủ hai chữ: 不大不小.','不是大不是小。~Dùng 不A不B, không dùng 不是…不是….'],'bubu'),
  H('h4','Péngyou 朋友','今天天气怎么样？','不冷不热，很舒服。',['不冷热。~Cấu trúc 不A不B phải lặp 不: 不冷不热.','不冷不太热。~A, B phải là cặp tính từ trái nghĩa: 冷 – 热.'],'bubu'),
  H('h5','Péngyou 朋友','桌子上有什么？','桌子上摆着一束花。|桌子上放着一本书。',['一本书放着桌子上。~Nơi chốn đứng đầu câu: 桌子上放着一本书.','桌子上摆一束花着。~着 đứng ngay sau động từ: 摆着一束花.'],'chusuo'),
  H('h6','Péngyou 朋友','床下放着什么？','床下放着一堆脏衣服。',['放着床下一堆脏衣服。~Nơi chốn đứng đầu câu.','床下放一堆脏衣服着。~着 đứng ngay sau động từ.'],'chusuo')
],[
  D('d1','我_不喝咖啡。','从来|最好|渐渐','从来不 + V: xưa nay không làm.','conglai'),
  D('d2','他从来_迟到过。','没|不|别','从来没 + V + 过: chưa từng.','conglai'),
  D('d3','房间不大_小，住两个人正好。','不|也|很','Mẫu 不A不B: 不大不小.','bubu'),
  D('d4','你来得不早_晚，正好。','不|也|太','Mẫu 不A不B: 不早不晚.','bubu'),
  D('d5','门上贴_一个“福”字。','着|得|把','处所 + V着 + vật.','chusuo'),
  D('d6','听说你考上大学了，_你！','恭喜|毕业|自由','Lời chúc khi người ta đạt kết quả tốt: 恭喜.','tu')
],[
  T('t1','Xưa nay tôi chưa từng ăn món cay như vậy.','我|从来|没|吃|过|这么|辣|的|菜','不|了','Wǒ cónglái méi chī guo zhème là de cài.','conglai'),
  T('t2','Trên tường treo một tấm bản đồ thế giới.','墙上|挂着|一幅|世界|地图','了|的','Qiáng shang guà zhe yì fú shìjiè dìtú.','chusuo'),
  T('t3','Phòng của anh ấy không to không nhỏ, ở hai người vừa đẹp.','他的|房间|不大|不小|，|正好|住|两个人','很|了','Tā de fángjiān bú dà bù xiǎo, zhènghǎo zhù liǎng ge rén.','bubu',1)
]),

B('fazhan-tc1',1,'北京的四季','Bốn mùa Bắc Kinh',{
  ba:{zh:'把……V得+C',vi:'Câu chữ 把 có bổ ngữ trạng thái',huy:'Xử lý đâu ra đấy',ct:'把 + O + V + 得 + phần miêu tả kết quả (thường là tính từ lặp): 把房间打扫得干干净净.',s:14},
  jiushuo:{zh:'（就）拿……来说',vi:'Lấy … làm ví dụ',huy:'Nêu ví dụ gọn gàng',ct:'Nêu ý chung rồi (就)拿 + ví dụ + 来说(吧) + giải thích cụ thể.',s:15},
  yi:{zh:'“一”+名词',vi:'“一” + danh từ = cả, toàn bộ',huy:'Cả đêm cả ngày',ct:'一 + N đứng trước danh từ nghĩa là “cả / suốt / đầy”; vế sau hay có 都 / 没.',s:16},
  buzhidao:{zh:'不知道…多少 / 多…',vi:'Nhấn mạnh mức độ',huy:'Biết bao nhiêu mà kể',ct:'不知(道) + 多 + tính từ / 多少 + danh từ: nhấn mạnh rất nhiều, rất cao.',s:17},
  guan:{zh:'管A叫B',vi:'A còn gọi là B',huy:'Gọi tên đúng chuẩn',ct:'(Người ta) 管 + A + 叫 + B: gọi A là B.',s:18},
  tu:{zh:'补充词语',vi:'Từ vựng bài bổ sung',huy:'Giỏi từ vựng',ct:'Ôn từ vựng và cấu trúc trong phần bài bổ sung.',s:28}
},[
  S('s1','他|把|房间|打扫|得|干干净净','Tā bǎ fángjiān dǎsǎo de gānganjìngjìng.','Anh ấy dọn căn phòng sạch sẽ tinh tươm.','ba'),
  S('s2','就拿|汉字|来说吧|，|我|觉得|最难','Jiù ná Hànzì láishuō ba, wǒ juéde zuì nán.','Cứ lấy chữ Hán mà nói, tôi thấy khó nhất.','jiushuo'),
  S('s3','北京人|管|这种萝卜|叫|“心儿里美”','Běijīngrén guǎn zhè zhǒng luóbo jiào "xīnr lǐ měi".','Người Bắc Kinh gọi loại củ cải này là “tâm nhi lý mỹ”.','guan'),
  S('s4','一屋子|的|人|都|笑|了','Yì wūzi de rén dōu xiào le.','Cả phòng người đều bật cười.','yi'),
  S('s5','他|为这次旅行|不知道|要花|多少|钱','Tā wèi zhè cì lǚxíng bù zhīdào yào huā duōshao qián.','Không biết anh ấy tốn bao nhiêu tiền cho chuyến đi này.','buzhidao'),
  S('s6','我们|来不及|吃饭|了','Wǒmen láibují chīfàn le.','Chúng tôi không kịp ăn cơm rồi.','tu'),
  S('s7','风|把|树叶|吹|得|满地都是','Fēng bǎ shùyè chuī de mǎn dì dōu shì.','Gió thổi lá rụng đầy đất.','ba')
],[
  H('h1','Péngyou 朋友','那件事情他办得怎么样了？','放心吧，他把事情办得漂亮极了。',['放心吧，他把事情得办漂亮极了。~得 phải đứng ngay sau động từ 办: 办得….','放心吧，他办把事情得漂亮极了。~把 đứng trước tân ngữ, trước động từ: 把事情办得….'],'ba'),
  H('h2','Péngyou 朋友','你们把教室布置得怎么样？','我们把教室布置得很漂亮。',['我们把教室布置很漂亮得。~Phần miêu tả đứng sau 得.','我们布置把教室得很漂亮。~Trật tự: 把 + O + V + 得 + C.'],'ba'),
  H('h3','Péngyou 朋友','你们喜欢吃中国菜吗？','大家都喜欢，就拿我来说吧，我常常去中国饭馆吃饭。',['大家都喜欢，就拿说我来吧，我常常去中国饭馆。~Cấu trúc đúng: 就拿……来说吧.','大家都喜欢，我来说拿吧。~Thứ tự: 就拿 + ví dụ + 来说吧.'],'jiushuo'),
  H('h4','Péngyou 朋友','这个孩子怎么样？','这个孩子不知道多可爱！',['这个孩子多不知道可爱！~不知道 đứng trước 多: 不知道多 + tính từ.','这个孩子不知道可爱多！~Thứ tự: 不知道 + 多 + tính từ.'],'buzhidao'),
  H('h5','Péngyou 朋友','中国人管老师的妻子叫什么？','中国人管老师的妻子叫“师母”。',['中国人叫老师的妻子管“师母”。~Mẫu: 管 A 叫 B (管 đứng trước A).','中国人管“师母”叫老师的妻子。~A và B bị đảo: 管 + người + 叫 + tên gọi.'],'guan'),
  H('h6','Péngyou 朋友','去年冬天下雪了吗？','一冬都没下雪，真奇怪。',['冬一都没下雪。~“一 + N” phải đúng thứ tự: 一冬.','一冬没都下雪。~都 đứng trước 没: 都没下雪.'],'yi')
],[
  D('d1','他把房间打扫_干干净净。','得|的|了','把 + O + V + 得 + bổ ngữ trạng thái.','ba'),
  D('d2','_拿我来说吧，我从来没吃过涮羊肉。','就|在|给','Nêu ví dụ: 就拿……来说吧.','jiushuo'),
  D('d3','他一晚上_睡。','没|不|别','一晚上 = cả đêm; vế sau thường 没 / 都.','yi'),
  D('d4','这个孩子不知道_可爱！','多|多少|几','不知道 + 多 + tính từ.','buzhidao'),
  D('d5','人们_网上认识的朋友叫“网友”。','管|在|往','Mẫu 管 A 叫 B.','guan'),
  D('d6','去机场要_这座大桥。','经过|度过|然而','Đi ngang qua nơi chốn: 经过.','tu')
],[
  T('t1','Anh ấy lau căn phòng sạch bóng.','他|把|房间|擦|得|干干净净','了|很','Tā bǎ fángjiān cā de gānganjìngjìng.','ba'),
  T('t2','Cả đêm tôi không ngủ.','我|一夜|没|睡','不|了','Wǒ yí yè méi shuì.','yi'),
  T('t3','Người Trung Quốc gọi điện thoại di động là “shǒujī”.','中国人|管|移动电话|叫|“手机”','把|在','Zhōngguórén guǎn yídòng diànhuà jiào "shǒujī".','guan',1)
])

]);
})();
