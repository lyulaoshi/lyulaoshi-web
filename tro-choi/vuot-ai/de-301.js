// Vượt ải 闯关 — đề ôn 汉语会话301句 Bài 15–20 (bài dùng khung kit, có số slide ngữ pháp). CHỜ CÔ DUYỆT.
// Bài 11–14 là bản cũ (không chia slide), làm sau. Khuôn dữ liệu giống de-tttc.js (xem chú thích ở đầu file đó).
// Câu lấy từ 8 câu mẫu, hội thoại và ví dụ ngữ pháp trong courses/301/bai-N; đáp án nhiễu + lời giải thích do Claude soạn nháp.
(function(){
const S=(id,p,py,vi,g)=>({id,p:p.split('|'),py,vi,g});
const H=(id,who,q,ok,bad,g)=>({id,who,q,ok:ok.split('|'),bad:bad.map(b=>b.split('~')),g});
const D=(id,s,o,why,g)=>({id,s,o:o.split('|'),ok:0,why,g});
const T=(id,vi,p,nhieu,py,g,boss)=>({id,vi,p:p.split('|'),nhieu:nhieu.split('|'),py,g,boss:boss?1:0});
const B=(n,zh,vi,gr,sap,hoi,dien,dich)=>({id:'301-bai-'+n,mon:'301',n,zh,vi:'Bài '+n+' · '+vi,lk:'../../301/bai-'+n+'/',gr,sap,hoi,dien,dich});

window.VA_SACH=(window.VA_SACH||[]).concat([{id:'301',zh:'汉语会话301句',vi:'Hán ngữ 301 câu'}]);
window.VA_BAI=(window.VA_BAI||[]).concat([

B(15,'我要打国际电话','Tôi muốn gọi điện thoại ra nước ngoài',{
  de:{zh:'是…的',vi:'Câu chữ 是 (2) — kết cấu chữ 的',huy:'Cái của ai cũng biết',ct:'Danh từ / đại từ / tính từ / động từ + 的 dùng độc lập, thường đứng sau 是: 这个本子是我的.',s:15},
  jieguo:{zh:'结果补语',vi:'Bổ ngữ kết quả',huy:'Làm là phải xong',ct:'Động từ + động từ / tính từ chỉ kết quả: 打通, 买到; phủ định 没(有) + V + kết quả, bỏ 了.',s:16}
},[
  S('s1','这|是|新出|的|纪念邮票','Zhè shì xīn chū de jìniàn yóupiào.','Đây là con tem kỷ niệm mới phát hành.','de'),
  S('s2','还|有|好看|的|吗','Hái yǒu hǎokàn de ma?','Còn loại nào đẹp nữa không?','de'),
  S('s3','这个|本子|是|我的','Zhège běnzi shì wǒ de.','Quyển vở này là của tôi.','de'),
  S('s4','电话|打|通|了','Diànhuà dǎ tōng le.','Điện thoại đã thông rồi.','jieguo'),
  S('s5','我|没|买到|那本书','Wǒ méi mǎidào nà běn shū.','Tôi không mua được quyển sách đó.','jieguo')
],[
  H('h1','Hézǐ 和子','有纪念邮票吗？','有，这是新出的。',['有，这是新出。~Thiếu 的: “新出的” là kết cấu chữ 的 làm tân ngữ sau 是.','有，是新出的邮票的。~Thừa 的: “新出的” đã đủ.'],'de'),
  H('h2','Yíngyèyuán 营业员','这个照相机是谁的？','这个照相机是大卫的。|是大卫的。',['这个照相机是大卫。~Thiếu 的 thì thành “máy ảnh là David”.','大卫是照相机的。~Đảo vị trí: người sở hữu + 的 đứng sau 是.'],'de'),
  H('h3','Hézǐ 和子','电话打通了吗？','打通了。|没打通。',['没打通了。~Phủ định bằng 没 thì bỏ 了.','不打通。~Kết quả chưa đạt dùng 没, không dùng 不.'],'jieguo'),
  H('h4','Dàwèi 大卫','你买到那本书了吗？','买到了。|没买到。',['没买到了。~Phủ định bằng 没 thì bỏ 了.','买了到。~Bổ ngữ kết quả đứng ngay sau động từ: 买到.'],'jieguo')
],[
  D('d1','这个本子是我_。','的|了|吗','Kết cấu chữ 的: 是 + 我的 (= 我的本子).','de'),
  D('d2','那套邮票是新_。','的|了|吧','Tính từ + 的 làm tân ngữ sau 是.','de'),
  D('d3','电话打_了。','通|的|里','“Gọi thông” = 打通; 通 là bổ ngữ kết quả.','jieguo'),
  D('d4','我没买_那本书。','到|了|的','没 + V + bổ ngữ kết quả: 没买到.','jieguo'),
  D('d5','他回_北京了。','到|的|得','到 làm bổ ngữ kết quả chỉ nơi đến.','jieguo'),
  D('d6','这件毛衣不是玛丽_。','的|了|吗','Không phải của Mary: 不是玛丽的.','de')
],[
  T('t1','Điện thoại đã thông rồi.','电话|打|通|了','的|没','Diànhuà dǎ tōng le.','jieguo'),
  T('t2','Quyển vở này là của tôi.','这个|本子|是|我的','了|吗','Zhège běnzi shì wǒ de.','de'),
  T('t3','Tôi không mua được quyển sách đó.','我|没|买到|那本书','了|不','Wǒ méi mǎidào nà běn shū.','jieguo',1)
]),

B(16,'你看过京剧吗','Bạn đã từng xem Kinh kịch chưa?',{
  guo:{zh:'过',vi:'Trợ từ động thái 过',huy:'Đã từng trải qua',ct:'Động từ + 过 = đã từng; phủ định 没(有) + V + 过.',s:14},
  wuzhu:{zh:'无主句',vi:'Câu vô chủ',huy:'Không chủ ngữ vẫn đúng',ct:'Câu không có chủ ngữ, thường mở đầu bằng 有 / 听说: 有朋友来看我.',s:15},
  haimei:{zh:'还没……呢',vi:'还没（有）……呢',huy:'Vẫn chưa nhé',ct:'还没(有) + V (+ 过) + 呢: nhấn mạnh “vẫn chưa”.',s:16}
},[
  S('s1','你|看|过|京剧|吗','Nǐ kàn guo Jīngjù ma?','Bạn đã từng xem Kinh kịch chưa?','guo'),
  S('s2','我|没|看|过|京剧','Wǒ méi kàn guo Jīngjù.','Tôi chưa từng xem Kinh kịch.','guo'),
  S('s3','我|还|没|吃|过|北京烤鸭|呢','Wǒ hái méi chī guo Běijīng kǎoyā ne!','Tôi còn chưa từng ăn vịt quay Bắc Kinh.','haimei'),
  S('s4','去年|他|在|这儿|学|过|汉语','Qùnián tā zài zhèr xué guo Hànyǔ.','Năm ngoái anh ấy từng học tiếng Hán ở đây.','guo'),
  S('s5','听说|，|烤鸭|是|北京|的|名菜','Tīngshuō, kǎoyā shì Běijīng de míngcài.','Nghe nói vịt quay là món nổi tiếng của Bắc Kinh.','wuzhu'),
  S('s6','有|朋友|来|看|我','Yǒu péngyou lái kàn wǒ.','Có bạn đến thăm tôi.','wuzhu')
],[
  H('h1','Mǎlì 玛丽','你看过京剧吗？','没看过。|看过。',['没看了。~Nói về kinh nghiệm “đã từng” dùng 过; phủ định là 没 + V + 过.','不看过。~Phủ định của 过 dùng 没(有), không dùng 不.'],'guo'),
  H('h2','Hézǐ 和子','你吃过北京烤鸭吗？','我还没吃过呢！|没吃过。',['我没过吃。~过 đứng ngay sau động từ: 吃过.','我还没吃过了呢。~Đã có 还没……呢 thì không thêm 了.'],'haimei'),
  H('h3','Mǎlì 玛丽','二十八号晚上我没事，你呢？','不行，有朋友来看我。',['不行，朋友来有看我。~Câu 有朋友来看我 mở đầu bằng 有, không có chủ ngữ.','不行，我朋友有来看我。~Câu vô chủ: bắt đầu bằng 有, không cần chủ ngữ 我朋友.'],'wuzhu')
],[
  D('d1','你看_京剧吗？','过|了|着','Hỏi “đã từng”: V + 过.','guo'),
  D('d2','我没看_京剧。','过|了|的','Phủ định kinh nghiệm: 没 + V + 过.','guo'),
  D('d3','我还没吃过北京烤鸭_！','呢|吗|吧','还没……呢 nhấn mạnh “vẫn chưa”.','haimei'),
  D('d4','_朋友来看我。','有|在|给','Câu vô chủ mở đầu bằng 有.','wuzhu'),
  D('d5','去年他在这儿学_汉语。','过|着|得','Nói chuyện đã từng làm: V + 过.','guo'),
  D('d6','我还_吃过北京烤鸭呢。','没|不|别','还没 = vẫn chưa.','haimei')
],[
  T('t1','Bạn đã từng xem Kinh kịch chưa?','你|看|过|京剧|吗','了|没','Nǐ kàn guo Jīngjù ma?','guo'),
  T('t2','Tôi chưa từng xem Kinh kịch.','我|没|看|过|京剧','不|了','Wǒ méi kàn guo Jīngjù.','guo'),
  T('t3','Tôi còn chưa từng ăn vịt quay Bắc Kinh.','我|还|没|吃|过|北京烤鸭|呢','了|吗','Wǒ hái méi chī guo Běijīng kǎoyā ne!','haimei',1)
]),

B(17,'去动物园','Đi sở thú',{
  xuanze:{zh:'还是',vi:'Câu hỏi lựa chọn',huy:'Chọn A hay B',ct:'A 还是 B？ — người nghe chọn một vế; không thêm 吗; câu kể dùng 或者.',s:14},
  liandong:{zh:'连动句',vi:'Liên động chỉ cách thức',huy:'Cách thức trước, hành động sau',ct:'V₁ (cách thức) + V₂ (hành động chính): 骑自行车去, 坐飞机来.',s:15},
  qushi:{zh:'来 / 去',vi:'Bổ ngữ xu hướng (1)',huy:'Hướng về hay ra xa',ct:'V + 来 (về phía người nói) / 去 (ra xa người nói): 进来, 出去.',s:16}
},[
  S('s1','我们|出去|玩儿玩儿|吧','Wǒmen chūqu wánr wanr ba.','Chúng ta ra ngoài chơi một chút nhé!','qushi'),
  S('s2','他|上午|到|还是|下午|到','Tā shàngwǔ dào háishi xiàwǔ dào?','Anh ấy đến buổi sáng hay buổi chiều?','xuanze'),
  S('s3','你|喝|咖啡|还是|喝|茶','Nǐ hē kāfēi háishi hē chá?','Bạn uống cà phê hay uống trà?','xuanze'),
  S('s4','我们|骑|自行车|去','Wǒmen qí zìxíngchē qù.','Chúng tôi đi xe đạp đến đó.','liandong'),
  S('s5','他|坐|飞机|来|中国','Tā zuò fēijī lái Zhōngguó.','Anh ấy đi máy bay đến Trung Quốc.','liandong'),
  S('s6','他|不|在家|，|出去|了','Tā bú zài jiā, chūqu le.','Anh ấy không có nhà, đi ra ngoài rồi.','qushi')
],[
  H('h1','Liú Jīng 刘京','你上午去还是下午去？','我上午去。|下午去。',['对，我上午去。~Câu hỏi lựa chọn không đáp “对 / 不对”, hãy chọn một vế.','上午还是下午去。~Phải chọn một phương án, không lặp lại 还是.'],'xuanze'),
  H('h2','Hézǐ 和子','你喝茶还是喝咖啡？','我喝茶。|喝咖啡。',['我喝茶或者咖啡。~Câu trả lời chọn một; 或者 dùng trong câu kể liệt kê.','是，我喝茶。~Câu hỏi lựa chọn không đáp “是”.'],'xuanze'),
  H('h3','Liú Jīng 刘京','怎么去？','坐车去。|坐地铁去。',['去坐车。~Cách thức đứng trước hành động chính: 坐车去.','车坐去。~Động từ 坐 đứng trước tân ngữ 车: 坐车.'],'liandong'),
  H('h4','Mǎlì 玛丽','他在家吗？','他不在家，出去了。',['他不在家，去出了。~Bổ ngữ xu hướng 去 đứng sau động từ: 出去.','他不在家，出了去。~Không tách: 出去.'],'qushi')
],[
  D('d1','你上午去_下午去？','还是|或者|和','Câu hỏi lựa chọn dùng 还是.','xuanze'),
  D('d2','他是日本人_中国人？','还是|或者|和','Hỏi chọn A hay B dùng 还是.','xuanze'),
  D('d3','我们骑自行车_。','去|的|吗','Cách thức + 去: 骑自行车去.','liandong'),
  D('d4','他_飞机来中国。','坐|在|有','Cách thức đi lại: 坐飞机.','liandong'),
  D('d5','他不在家，出_了。','去|着|过','Người nói ở trong nhà, người kia đi ra xa: 出去.','qushi'),
  D('d6','玛丽，快下_！（我在楼下，玛丽在楼上）','来|去|过','Hướng về phía người nói: 下来.','qushi')
],[
  T('t1','Bạn đi buổi sáng hay buổi chiều?','你|上午|去|还是|下午|去','或者|吗','Nǐ shàngwǔ qù háishi xiàwǔ qù?','xuanze'),
  T('t2','Anh ấy đi máy bay đến Trung Quốc.','他|坐|飞机|来|中国','在|吗','Tā zuò fēijī lái Zhōngguó.','liandong'),
  T('t3','Bạn đi xe đạp hay đi tàu điện ngầm?','你|骑|自行车|去|还是|坐|地铁|去','或者|吗','Nǐ qí zìxíngchē qù háishi zuò dìtiě qù?','xuanze',1)
]),

B(18,'路上辛苦了','Đi đường vất vả không?',{
  yaole:{zh:'要…了',vi:'“要……了” Sắp… rồi',huy:'Sắp rồi sắp rồi',ct:'(快)要 + V + 了: sắp xảy ra; 快 đứng trước 要.',s:13},
  shide:{zh:'是…的',vi:'“是……的” (Là)… đó',huy:'Chính là thế',ct:'是 + (thời gian / cách thức / người) + V + 的: nhấn mạnh phần ở giữa của việc đã xảy ra.',s:14}
},[
  S('s1','飞机|快要|起飞|了','Fēijī kuài yào qǐfēi le.','Máy bay sắp cất cánh rồi.','yaole'),
  S('s2','快|要|下雨|了','Kuài yào xiàyǔ le.','Sắp mưa rồi.','yaole'),
  S('s3','西川|要|来|了','Xīchuān yào lái le.','Nishikawa sắp đến rồi.','yaole'),
  S('s4','是|他|告诉|我|的','Shì tā gàosu wǒ de.','Chính anh ấy nói cho tôi biết.','shide'),
  S('s5','他|是|昨天|来|的','Tā shì zuótiān lái de.','Anh ấy đến từ hôm qua đấy (chính là hôm qua).','shide'),
  S('s6','你|是|怎么|来|的','Nǐ shì zěnme lái de?','Bạn đến bằng cách nào vậy?','shide')
],[
  H('h1','Hézǐ 和子','起飞了吗？','快要起飞了。',['要快起飞了。~Trật tự: 快要……了, 快 đứng trước 要.','快要起飞。~Thiếu 了 ở cuối câu.'],'yaole'),
  H('h2','Xīchuān 西川','你怎么知道我要来？','是她告诉我的。|是他告诉我的。',['她是告诉我。~Thiếu 的; mẫu nhấn mạnh người làm là 是 + người + V + 的.','是她告诉我。~Thiếu 的 ở cuối: 是……的.'],'shide'),
  H('h3','Liú Jīng 刘京','你是怎么来的？','我是坐车来的。|我是坐地铁来的。',['我坐车来是的。~Mẫu 是……的: 是 đứng trước phần nhấn mạnh, 的 ở cuối câu.','我是来坐车的。~Trật tự sai: cách thức 坐车 đứng trước 来.'],'shide'),
  H('h4','Liú Jīng 刘京','你什么时候来的？','我是昨天来的。|我是上星期来的。',['我是来昨天的。~Thời gian đứng trước động từ: 是昨天来的.','我昨天来是的。~Mẫu 是……的: 的 ở cuối câu.'],'shide')
],[
  D('d1','飞机快_起飞了。','要|想|能','Sắp xảy ra: 快要……了.','yaole'),
  D('d2','快要下雨_。','了|的|吗','要……了 kết thúc bằng 了.','yaole'),
  D('d3','是他告诉我_。','的|了|吗','Mẫu 是……的.','shide'),
  D('d4','我_昨天来的。','是|有|在','Nhấn mạnh thời gian: 是昨天来的.','shide'),
  D('d5','西川_来了。','要|在|有','Sắp đến rồi: 要来了.','yaole'),
  D('d6','你_怎么来的？','是|要|想','Hỏi cách thức của việc đã xảy ra: 是……的.','shide')
],[
  T('t1','Máy bay sắp cất cánh rồi.','飞机|快要|起飞|了','的|在','Fēijī kuài yào qǐfēi le.','yaole'),
  T('t2','Chính anh ấy nói cho tôi biết.','是|他|告诉|我|的','了|吗','Shì tā gàosu wǒ de.','shide'),
  T('t3','Bạn đến bằng cách nào vậy?','你|是|怎么|来|的','了|吗','Nǐ shì zěnme lái de?','shide',1)
]),

B(19,'欢迎你','Xin chào mừng ông!',{
  cong:{zh:'从 / 在 + 这儿 / 那儿',vi:'从、在 + 这儿、那儿',huy:'Người cũng thành nơi chốn',ct:'Danh từ chỉ người muốn làm nơi chốn thì thêm 这儿 / 那儿: 朋友那儿, 我从朋友那儿去.',s:12},
  jieci:{zh:'从 / 离',vi:'Giới từ 从、离',huy:'Từ đâu, cách bao xa',ct:'从 chỉ điểm xuất phát; A 离 B + xa / gần chỉ khoảng cách.',s:13},
  dingyu:{zh:'定语 + 的',vi:'Định ngữ + 的',huy:'Định ngữ chuẩn chỉnh',ct:'Định ngữ + 的 + trung tâm ngữ: 我们经理给您的信.',s:14}
},[
  S('s1','下午|我|去|朋友|那儿','Xiàwǔ wǒ qù péngyou nàr.','Buổi chiều tôi đến chỗ bạn.','cong'),
  S('s2','我|从|朋友|那儿|去|饭店','Wǒ cóng péngyou nàr qù fàndiàn.','Tôi từ chỗ bạn tôi đi đến khách sạn.','cong'),
  S('s3','我|家|离|学校|很|近','Wǒ jiā lí xuéxiào hěn jìn.','Nhà tôi rất gần trường.','jieci'),
  S('s4','这|是|我们|经理|给|您|的|信','Zhè shì wǒmen jīnglǐ gěi nín de xìn.','Đây là thư của giám đốc chúng tôi gửi cho ông.','dingyu'),
  S('s5','他|是|我们|公司|的|翻译','Tā shì wǒmen gōngsī de fānyì.','Anh ấy là phiên dịch của công ty chúng tôi.','dingyu')
],[
  H('h1','Jīnglǐ 经理','您下午去哪儿？','下午我去朋友那儿。',['下午我去朋友。~Danh từ chỉ người muốn thành nơi chốn phải thêm 那儿: 朋友那儿.','下午我去那儿朋友。~Trật tự: người + 那儿, không đảo.'],'cong'),
  H('h2','Jīnglǐ 经理','您从哪儿去饭店？','我从朋友那儿去。',['我从朋友去。~Thiếu 那儿: người không thể làm điểm xuất phát nếu không có 那儿.','我朋友那儿从去。~从 đứng trước điểm xuất phát: 从朋友那儿去.'],'cong'),
  H('h3','Xīchuān 西川','你家离学校远吗？','不远。|很远。',['我家远离学校。~Cấu trúc đúng: A 离 B + 远 / 近.','离我家学校不远。~离 đứng sau chủ ngữ A: 我家离学校.'],'jieci'),
  H('h4','Jīnglǐ 经理','这是谁的信？','这是我们经理给您的信。',['这是我们经理给您信。~Thiếu 的: định ngữ “我们经理给您” + 的 + 信.','这是信我们经理给您的。~Định ngữ đứng trước trung tâm ngữ.'],'dingyu')
],[
  D('d1','下午我去朋友_。','那儿|里|的','Người + 那儿 thành nơi chốn.','cong'),
  D('d2','我_朋友那儿去饭店。','从|在|离','Điểm xuất phát dùng 从.','cong'),
  D('d3','我家_学校很近。','离|从|在','Chỉ khoảng cách giữa hai nơi: A 离 B.','jieci'),
  D('d4','这是我们经理给您_信。','的|了|吗','Định ngữ + 的 + trung tâm ngữ.','dingyu'),
  D('d5','他_这儿走了。','从|离|给','Đi từ đây: 从这儿走.','cong')
],[
  T('t1','Buổi chiều tôi đến chỗ bạn.','下午|我|去|朋友|那儿','的|在','Xiàwǔ wǒ qù péngyou nàr.','cong'),
  T('t2','Tôi từ chỗ bạn tôi đi đến khách sạn.','我|从|朋友|那儿|去|饭店','离|的','Wǒ cóng péngyou nàr qù fàndiàn.','cong'),
  T('t3','Đây là thư của giám đốc chúng tôi gửi cho ông.','这|是|我们|经理|给|您|的|信','了|吗','Zhè shì wǒmen jīnglǐ gěi nín de xìn.','dingyu',1)
]),

B(20,'为我们的友谊干杯','Hãy cạn ly vì tình hữu nghị của chúng ta',{
  chengdu:{zh:'程度补语',vi:'Bổ ngữ trình độ',huy:'Cực kỳ luôn',ct:'Tính từ + 极了 / 死了…: mức độ cao, không có 得: 好吃极了.',s:13},
  qingtai:{zh:'情态补语',vi:'Bổ ngữ tình thái',huy:'Làm được đến đâu',ct:'V + 得 + tính từ; có tân ngữ thì lặp động từ: 做菜做得不好.',s:14}
},[
  S('s1','我|过|得|很|愉快','Wǒ guò de hěn yúkuài.','Tôi sống rất vui vẻ.','qingtai'),
  S('s2','这个|鱼|做|得|真|好吃','Zhège yú zuò de zhēn hǎochī!','Món cá này nấu thật ngon!','qingtai'),
  S('s3','我|做|菜|做|得|不|好','Wǒ zuò cài zuò de bù hǎo.','Tôi nấu ăn không được ngon.','qingtai'),
  S('s4','这个|菜|好吃|极|了','Zhège cài hǎochī jí le.','Món này ngon cực kỳ.','chengdu'),
  S('s5','他|高兴|极|了','Tā gāoxìng jí le.','Anh ấy vui cực kỳ.','chengdu'),
  S('s6','他|说|汉语|说|得|很|好','Tā shuō Hànyǔ shuō de hěn hǎo.','Anh ấy nói tiếng Hán rất giỏi.','qingtai')
],[
  H('h1','Jīnglǐ 经理','这两天过得怎么样？','过得很愉快。',['过很愉快得。~得 đứng ngay sau động từ, trước bổ ngữ: 过得很愉快.','过得愉快很。~Tính từ có 很 đứng trước: 很愉快.'],'qingtai'),
  H('h2','Liú Jīng 刘京','你做菜做得怎么样？','我做菜做得不好。|我做菜做得很好。',['我做菜得不好。~Có tân ngữ thì lặp động từ: 做菜做得….','我做得菜不好。~Tân ngữ đứng sau động từ thứ nhất: 做菜做得不好.'],'qingtai'),
  H('h3','Jīnglǐ 经理','您尝尝这个菜怎么样？','很好吃。|好吃极了。',['好吃得极了。~Bổ ngữ trình độ 极了 đứng thẳng sau tính từ, không thêm 得.','极好吃了。~Trật tự: tính từ + 极了.'],'chengdu'),
  H('h4','Liú Jīng 刘京','他说汉语说得怎么样？','他说汉语说得很好。|他说得不太好。',['他说汉语很好。~Thiếu bổ ngữ tình thái: 说汉语说得很好.','他说得汉语很好。~Tân ngữ 汉语 đứng sau động từ thứ nhất: 说汉语说得很好.'],'qingtai')
],[
  D('d1','我过_很愉快。','得|的|地','V + 得 + tính từ: 过得很愉快.','qingtai'),
  D('d2','这个鱼做_真好吃！','得|的|了','V + 得 + tính từ: 做得真好吃.','qingtai'),
  D('d3','他说汉语_得很好。','说|的|了','Có tân ngữ thì lặp động từ: 说汉语说得很好.','qingtai'),
  D('d4','这个菜好吃_了。','极|得|的','Bổ ngữ trình độ: tính từ + 极了.','chengdu'),
  D('d5','他高兴_了。','极|得|的','Bổ ngữ trình độ: 高兴极了.','chengdu'),
  D('d6','我做菜做_不好。','得|了|的','V + 得 + bổ ngữ: 做得不好.','qingtai')
],[
  T('t1','Tôi sống rất vui vẻ.','我|过|得|很|愉快','了|的','Wǒ guò de hěn yúkuài.','qingtai'),
  T('t2','Món cá này nấu thật ngon!','这个|鱼|做|得|真|好吃','了|极','Zhège yú zuò de zhēn hǎochī!','qingtai'),
  T('t3','Tôi nấu ăn không được ngon.','我|做|菜|做|得|不|好','了|的','Wǒ zuò cài zuò de bù hǎo.','qingtai',1)
])

]);
})();
