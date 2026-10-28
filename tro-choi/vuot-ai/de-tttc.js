// Vượt ải 闯关 — đề ôn Giáo trình tiếng Trung tăng cường (TTTC) Bài 1–7. CHỜ CÔ DUYỆT.
// Câu lấy từ bài khoá, ví dụ ngữ pháp và bài tập trong courses/tttc/bai-N; đáp án nhiễu + lời giải thích do Claude soạn nháp.
// Khuôn dữ liệu (dùng chung cho mọi giáo trình, xem README ở đầu de-301.js):
//   gr = điểm ngữ pháp của bài: {zh, vi, huy, ct, s} — s = số slide (#sN) trong bài giảng
//   sap  S(id,'mảnh|mảnh|…',pinyin,nghĩa,g)             xếp câu
//   hoi  H(id,người nói,câu hỏi,'đáp đúng|đáp đúng',['sai~lý do',…],g)   trả lời câu hỏi
//   dien D(id,'câu có _','đúng|sai|sai',lý do,g)         điền chỗ trống (từ đầu tiên là đáp án đúng, game tự xáo)
//   dich T(id,nghĩa Việt,'mảnh|…','mảnh nhiễu|…',pinyin,g,trùm?)   dịch Việt → Trung
(function(){
const S=(id,p,py,vi,g)=>({id,p:p.split('|'),py,vi,g});
const H=(id,who,q,ok,bad,g)=>({id,who,q,ok:ok.split('|'),bad:bad.map(b=>b.split('~')),g});
const D=(id,s,o,why,g)=>({id,s,o:o.split('|'),ok:0,why,g});
const T=(id,vi,p,nhieu,py,g,boss)=>({id,vi,p:p.split('|'),nhieu:nhieu.split('|'),py,g,boss:boss?1:0});
const B=(n,zh,vi,gr,sap,hoi,dien,dich)=>({id:'tttc-bai-'+n,mon:'tttc',n,zh,vi:'Bài '+n+' · '+vi,lk:'../../tttc/bai-'+n+'/',gr,sap,hoi,dien,dich});

window.VA_SACH=(window.VA_SACH||[]).concat([{id:'tttc',zh:'预科汉语强化教程',vi:'Tiếng Trung tăng cường 1'}]);
window.VA_BAI=(window.VA_BAI||[]).concat([

B(1,'你好','Xin chào',{
  yuxu:{zh:'语序',vi:'Trật tự từ trong câu',huy:'Xếp chữ cao thủ',ct:'Chủ ngữ + vị ngữ + tân ngữ, giống tiếng Việt: 我叫李白.',s:9},
  shenme:{zh:'什么 / 哪',vi:'Đại từ nghi vấn 什么、哪',huy:'Thám tử câu hỏi',ct:'Thay đúng phần cần hỏi bằng 什么 / 哪, giữ nguyên trật tự: 你叫什么名字？你是哪国人？',s:10},
  shi:{zh:'是',vi:'Câu chữ 是',huy:'Bậc thầy chữ 是',ct:'A + 是 + B. Không ghép 是 với 叫: 我叫李白 / 我是李白.',s:11},
  bu:{zh:'不',vi:'Phó từ 不',huy:'Vua phủ định',ct:'不 đứng ngay trước động từ: 我不是老师. Trước thanh 4 đọc bú.',s:24},
  ma:{zh:'吗',vi:'Trợ từ 吗',huy:'Hỏi có hay không',ct:'Câu trần thuật + 吗 thành câu hỏi có/không; đã có 什么 / 哪 thì không thêm 吗.',s:25},
  ne:{zh:'呢',vi:'Trợ từ 呢',huy:'Còn bạn thì sao',ct:'Danh từ / đại từ + 呢: hỏi lại “còn … thì sao?” theo câu vừa nói.',s:26}
},[
  S('s1','我|叫|李白','Wǒ jiào Lǐ Bái.','Em tên là Lý Bạch.','yuxu'),
  S('s2','你|叫|什么|名字','Nǐ jiào shénme míngzi?','Bạn tên là gì?','shenme'),
  S('s3','你|是|哪国|人','Nǐ shì nǎ guó rén?','Bạn là người nước nào?','shenme'),
  S('s4','我|是|法国人','Wǒ shì Fǎguórén.','Tôi là người Pháp.','shi'),
  S('s5','我|不|是|学生','Wǒ bú shì xuésheng.','Tôi không phải sinh viên.','bu'),
  S('s6','你|是|学生|吗','Nǐ shì xuésheng ma?','Bạn là sinh viên à?','ma'),
  S('s7','我|是|老师|，|你|呢','Wǒ shì lǎoshī, nǐ ne?','Tôi là giáo viên, còn bạn?','ne')
],[
  H('h1','Lǐ Sīqí 李思齐','你叫什么名字？','我叫李白。',['我是李白名字。~Hỏi 叫什么名字 thì đáp 我叫…, không nói “是 + 名字”.','我叫什么名字。~Phải nêu tên cụ thể, không lặp lại 什么.'],'shenme'),
  H('h2','Lǐ Sīqí 李思齐','你是哪国人？','我是法国人。|我是越南人。',['我是哪国人。~Câu hỏi có 哪 thì khi đáp phải thay bằng tên nước cụ thể.','我是法国。~Sau 是 phải có 人: 法国人 (người Pháp).'],'shenme'),
  H('h3','Wáng Yǔ 王语','你是学生吗？','是，我是学生。|不是，我是老师。',['是，你是学生。~Người hỏi nói 你 thì mình đáp bằng 我.','我是不学生。~Phủ định phải là 不是: 我不是学生.'],'bu'),
  H('h4','Lǐ Sīqí 李思齐','谢谢！','不用谢！|不客气。',['对不起。~“Xin lỗi” dùng khi làm phiền, không đáp lại lời cảm ơn.','没关系。~没关系 đáp lại lời xin lỗi, không đáp lời cảm ơn.'],'shi'),
  H('h5','Wáng Yǔ 王语','对不起。','没关系。',['不用谢。~不用谢 đáp lại lời cảm ơn, không đáp lời xin lỗi.','再见。~Không phù hợp tình huống: người ta đang xin lỗi.'],'shi'),
  H('h6','Wáng Yǔ 王语','我姓王，你呢？','我姓李。|我姓李，叫李白。',['我呢姓李。~呢 đứng cuối câu hỏi rút gọn, không đứng giữa câu trả lời.','你呢？~Đây là câu hỏi lại, không phải câu trả lời.'],'ne')
],[
  D('d1','你叫_名字？','什么|哪|几','Hỏi tên dùng 什么: 你叫什么名字？','shenme'),
  D('d2','你是_国人？','哪|什么|谁','Hỏi quốc tịch dùng 哪国人.','shenme'),
  D('d3','我_是学生，我是老师。','不|没|吗','Phủ định 是 dùng 不是.','bu'),
  D('d4','你是学生_？','吗|呢|的','Câu hỏi có/không: cuối câu thêm 吗.','ma'),
  D('d5','我是法国人，你_？','呢|吗|吧','Hỏi lại “còn bạn?” dùng 呢.','ne'),
  D('d6','请问，您_姓？','贵|什么|哪','Hỏi họ lịch sự dùng 您贵姓.','shenme'),
  D('d7','我不_学生，我是老师。','是|有|叫','不 đứng ngay trước 是: 不是.','bu')
],[
  T('t1','Mình tên là Lý Bạch.','我|叫|李白','是|吗','Wǒ jiào Lǐ Bái.','yuxu'),
  T('t2','Bạn là người nước nào?','你|是|哪国|人','什么|吗','Nǐ shì nǎ guó rén?','shenme'),
  T('t3','Tôi không phải sinh viên, tôi là giáo viên.','我|不|是|学生|，|我|是|老师','吗|没','Wǒ bú shì xuésheng, wǒ shì lǎoshī.','bu',1)
]),

B(2,'这是你的手机吗','Đây là điện thoại của bạn à?',{
  de:{zh:'的',vi:'Trợ từ kết cấu 的',huy:'Bậc thầy chữ 的',ct:'Định ngữ + 的 + trung tâm ngữ — ngược tiếng Việt: 我的手机 (điện thoại của tôi).',s:7},
  shei:{zh:'谁',vi:'Đại từ nghi vấn 谁',huy:'Thám tử 谁',ct:'谁的 + danh từ; đã có 谁 thì không thêm 吗.',s:8},
  ye:{zh:'也',vi:'Phó từ 也',huy:'Cũng thế nhỉ',ct:'也 đứng sau chủ ngữ, trước động từ; phủ định: 也不…, không nói 不也….',s:9},
  dou:{zh:'都',vi:'Phó từ 都',huy:'Tất cả đều đúng',ct:'都 đứng sau chủ ngữ, trước động từ: 我们都是学生.',s:22},
  tinh:{zh:'形容词谓语句',vi:'Câu vị ngữ tính từ',huy:'Tính từ không cần 是',ct:'Trước tính từ không thêm 是: 我的课本很好, 米雪的手机不新.',s:23}
},[
  S('s1','这|是|你|的|手机|吗','Zhè shì nǐ de shǒujī ma?','Đây là điện thoại của bạn à?','de'),
  S('s2','那|是|谁|的|手机','Nà shì shéi de shǒujī?','Kia là điện thoại của ai?','shei'),
  S('s3','我|也|不|知道','Wǒ yě bù zhīdào.','Mình cũng không biết.','ye'),
  S('s4','这些|都|是|你|的|书|吗','Zhèxiē dōu shì nǐ de shū ma?','Những cái này đều là sách của bạn à?','dou'),
  S('s5','我|的|课本|很|好','Wǒ de kèběn hěn hǎo.','Giáo trình của mình rất hay.','tinh'),
  S('s6','你|也|喜欢|黑色|的|手机|吗','Nǐ yě xǐhuan hēisè de shǒujī ma?','Cậu cũng thích điện thoại màu đen à?','ye')
],[
  H('h1','Tóngxué 同学','这是你的手机吗？','对，这是我的手机。',['对，这是你的手机。~Người hỏi nói “你” thì mình trả lời bằng “我”.','对，是手机的我。~Định ngữ phải đứng trước 的: 我的手机.'],'de'),
  H('h2','Lǐ Bái 李白','那是谁的手机？','我也不知道。|那是老师的手机。',['对，那是谁的手机。~Câu hỏi có 谁 thì không đáp “对”, phải nêu người cụ thể hoặc nói không biết.','不是，是手机。~Không trả lời đúng điều được hỏi (hỏi “của ai”).'],'shei'),
  H('h3','Tóngxué 同学','你们的汉语课本难吗？','不难。|很难。',['不是难。~Trước tính từ không thêm 是.','我们的汉语课本是难。~Trước tính từ không thêm 是.'],'tinh'),
  H('h4','Tóngxué 同学','你们都是学生吗？','对，我们都是学生。',['对，都我们是学生。~都 không đứng trước chủ ngữ.','对，我们是都学生。~都 phải đứng trước động từ 是, không đứng sau.'],'dou'),
  H('h5','Mǐ Xuě 米雪','你也喜欢黑色的手机吗？','我也喜欢黑色的手机。|我不喜欢黑色的手机。',['也我喜欢黑色的手机。~也 không đứng trước chủ ngữ.','我喜欢手机黑色的。~Định ngữ “黑色的” phải đứng trước 手机.'],'ye'),
  H('h6','Lǐ Bái 李白','我不知道老师的名字，你呢？','我也不知道。',['我不也知道。~Phủ định với 也 phải nói 也不…, không nói 不也….','也我不知道。~也 không đứng trước chủ ngữ.'],'ye')
],[
  D('d1','这是你_手机吗？','的|是|也','Định ngữ “你” + 的 + trung tâm ngữ “手机”.','de'),
  D('d2','那是_的手机？','谁|什么|吗','Hỏi “của ai” dùng 谁的.','shei'),
  D('d3','我是学生，他_是学生。','也|都|不','Chủ ngữ “他” chỉ một người, ý “cũng” dùng 也.','ye'),
  D('d4','这些_是你的书吗？','都|谁|的','“这些” là nhiều cái, ý “đều” dùng 都 trước động từ.','dou'),
  D('d5','我的课本_好。','很|是|吗','Trước tính từ dùng 很, không dùng 是.','tinh'),
  D('d6','我不知道，他_不知道。','也|都|的','Phủ định “cũng không” là 也不.','ye'),
  D('d7','这是谁_手机？','的|吗|是','谁的 + danh từ.','shei')
],[
  T('t1','Đây là điện thoại của tôi.','这|是|我|的|手机','吗|谁','Zhè shì wǒ de shǒujī.','de'),
  T('t2','Mình cũng không biết.','我|也|不|知道','都','Wǒ yě bù zhīdào.','ye'),
  T('t3','Những cái kia đều là sách của bạn à?','那些|都|是|你|的|书|吗','也|谁','Nàxiē dōu shì nǐ de shū ma?','dou',1)
]),

B(3,'你家有几口人','Nhà bạn có mấy người?',{
  you:{zh:'有',vi:'Câu chữ 有',huy:'Bậc thầy chữ 有',ct:'Phủ định 有 dùng 没(有), không dùng 不有: 我没有汉语课本.',s:9},
  liangci:{zh:'量词',vi:'Lượng từ',huy:'Vua lượng từ',ct:'Số từ + lượng từ + danh từ: 一个弟弟, 三口人.',s:11},
  ji:{zh:'几',vi:'Đại từ nghi vấn 几',huy:'Bao nhiêu thế',ct:'几 + lượng từ + danh từ, hỏi số lượng nhỏ; có 几 thì không thêm 吗.',s:12},
  yixia:{zh:'一下',vi:'Số lượng từ 一下',huy:'Một chút thôi',ct:'Động từ + 一下 = làm một chút; 一下 đứng sau động từ: 我介绍一下.',s:25},
  ba:{zh:'吧',vi:'Trợ từ ngữ khí 吧 (1)',huy:'Đoán trúng phóc',ct:'Câu đã đoán + 吧？ hỏi để xác nhận (khoảng 80% chắc chắn).',s:26},
  zhen:{zh:'真',vi:'Phó từ 真',huy:'Thật là tuyệt',ct:'真 + tính từ: “thật là…”, dùng trong câu cảm thán.',s:27}
},[
  S('s1','我|有|一个|弟弟|、|一个|妹妹','Wǒ yǒu yí ge dìdi, yí ge mèimei.','Mình có một em trai, một em gái.','liangci'),
  S('s2','你|有|哥哥|吗','Nǐ yǒu gēge ma?','Bạn có anh trai không?','you'),
  S('s3','你|家|有|几|口|人','Nǐ jiā yǒu jǐ kǒu rén?','Nhà bạn có mấy người?','ji'),
  S('s4','我|介绍|一下','Wǒ jièshào yíxià.','Mình giới thiệu một chút.','yixia'),
  S('s5','这|是|你|儿子|吧','Zhè shì nǐ érzi ba?','Đây là con trai chị phải không?','ba'),
  S('s6','他|真|可爱','Tā zhēn kě\'ài!','Bé đáng yêu thật!','zhen'),
  S('s7','我|没有|姐姐','Wǒ méiyǒu jiějie.','Mình không có chị gái.','you')
],[
  H('h1','Mǎ Xiǎojūn 马小军','你有哥哥、姐姐吗？','没有。|我没有哥哥，也没有姐姐。',['我不有哥哥、姐姐。~有 phủ định bằng 没有, không dùng 不有.','不是。~Hỏi 有…吗 thì đáp 有 / 没有, không đáp 不是.'],'you'),
  H('h2','Lǐ Bái 李白','你家有几口人？','三口。|我家有五口人。',['我家有几口人。~Câu hỏi có 几 thì khi đáp phải nêu số cụ thể.','我家有三个口人。~Lượng từ của số người trong gia đình là 口, không nói 个口.'],'ji'),
  H('h3','Mǎ Xiǎojūn 马小军','他是你弟弟吗？','对，他是我弟弟。',['对，他是你弟弟。~Người hỏi nói 你 thì mình đáp bằng 我.','有，他是我弟弟。~Hỏi 是…吗 thì đáp 是 / 对, không đáp 有.'],'you'),
  H('h4','Zhāng Méng 张萌','这是你儿子吧？','对，是我儿子。',['对，是你儿子。~Người hỏi nói 你 thì mình đáp bằng 我.','不是吧，我是儿子。~Không đúng nội dung: người hỏi đang hỏi về con trai của mình.'],'ba'),
  H('h5','Zhāng Méng 张萌','真可爱！','谢谢！',['对不起！~Lời khen đáp bằng cảm ơn, không đáp bằng xin lỗi.','没关系！~没关系 để đáp lời xin lỗi.'],'zhen'),
  H('h6','Mǎ Xiǎojūn 马小军','我介绍一下，这是我朋友。','你好！认识你很高兴。',['再见！~Lúc được giới thiệu thì chào hỏi, không chào tạm biệt.','不用谢！~Không ai vừa cảm ơn, nên đáp “không có gì” là không hợp.'],'yixia')
],[
  D('d1','我有一_弟弟。','个|本|条','Lượng từ của 弟弟 là 个.','liangci'),
  D('d2','你家有_口人？','几|什么|谁','Hỏi số lượng nhỏ dùng 几.','ji'),
  D('d3','我_有哥哥。','没|不|吗','Phủ định 有 dùng 没有.','you'),
  D('d4','我介绍_，这是我朋友。','一下|一个|一点儿','Động từ + 一下 = làm một chút.','yixia'),
  D('d5','你有哥哥_？','吗|的|几','Câu hỏi có/không: cuối câu thêm 吗.','you'),
  D('d6','这是你儿子_？','吧|几|一下','Đã đoán khá chắc, hỏi để xác nhận: dùng 吧.','ba'),
  D('d7','这个孩子_可爱！','真|吗|有','Câu cảm thán “thật là…” dùng 真 + tính từ.','zhen')
],[
  T('t1','Mình có một em trai.','我|有|一个|弟弟','没|吗','Wǒ yǒu yí ge dìdi.','liangci'),
  T('t2','Nhà bạn có mấy người?','你|家|有|几|口|人','谁|吗','Nǐ jiā yǒu jǐ kǒu rén?','ji'),
  T('t3','Mình giới thiệu một chút, đây là bạn mình.','我|介绍|一下|，|这|是|我|朋友','吗|真','Wǒ jièshào yíxià, zhè shì wǒ péngyou.','yixia',1)
]),

B(4,'电影开始了吗','Phim đã bắt đầu chưa?',{
  le:{zh:'了',vi:'Trợ từ 了 (1)',huy:'Xong rồi nhé',ct:'Động từ (+ tân ngữ) + 了: đã xảy ra; phủ định dùng 没(有) và bỏ 了: 我没看电影.',s:8},
  hai:{zh:'还',vi:'Phó từ 还 (1)',huy:'Vẫn chưa xong',ct:'还没 + động từ: “vẫn chưa…” — lúc nói việc đó chưa xảy ra.',s:9},
  sj1:{zh:'时间',vi:'Biểu đạt thời gian (1)',huy:'Đúng giờ chuẩn',ct:'số + 点 + số + 分; 2 giờ nói 两点; thời gian đứng trước động từ: 两点上课.',s:10},
  he:{zh:'和',vi:'Liên từ 和',huy:'Kết nối đôi bạn',ct:'Danh từ / đại từ + 和 + danh từ / đại từ; không nối động từ hay hai vế câu.',s:11},
  sj2:{zh:'半 / 刻',vi:'Biểu đạt thời gian (2)',huy:'Rưỡi và khắc',ct:'半 = 30 phút, 一刻 = 15 phút: 五点半, 五点一刻.',s:23},
  bumei:{zh:'不 / 没',vi:'Phó từ 不 / 没',huy:'Không hay chưa',ct:'不: hiện tại, tương lai, phủ định 是; 没: quá khứ, phủ định 有 và 了.',s:24},
  xiang:{zh:'想',vi:'Động từ năng nguyện 想',huy:'Muốn là làm',ct:'(不 / 很) + 想 + động từ: 你想喝咖啡吗？ Sau 想 phải có động từ.',s:25}
},[
  S('s1','你|睡觉|了|吗','Nǐ shuìjiào le ma?','Bạn ngủ chưa?','le'),
  S('s2','我|还|没|睡','Wǒ hái méi shuì.','Mình vẫn chưa ngủ.','hai'),
  S('s3','我|两点|上课','Wǒ liǎng diǎn shàngkè.','Hai giờ mình vào học.','sj1'),
  S('s4','明天|下午|我|和|朋友|去|看|电影','Míngtiān xiàwǔ wǒ hé péngyou qù kàn diànyǐng.','Chiều mai mình với bạn đi xem phim.','he'),
  S('s5','电影|五点半|开始','Diànyǐng wǔ diǎn bàn kāishǐ.','Phim 5 rưỡi bắt đầu.','sj2'),
  S('s6','你们|想|喝|咖啡|吗','Nǐmen xiǎng hē kāfēi ma?','Các cậu muốn uống cà phê không?','xiang'),
  S('s7','电影|还|没|开始','Diànyǐng hái méi kāishǐ.','Phim vẫn chưa bắt đầu.','bumei')
],[
  H('h1','Mǎ Xiǎojūn 马小军','你睡觉了吗？','睡了。|还没睡。|我还没睡。',['没睡了。~Phủ định của 了 là 没(有) và bỏ 了: 没睡.','不睡了。~“不睡了” nghĩa là “không ngủ nữa”, không trả lời câu “đã ngủ chưa”.'],'le'),
  H('h2','Mǎ Xiǎojūn 马小军','你明天下午有课吗？','有，我两点上课。|没有。',['有，我上课两点。~Thời gian đứng trước động từ: 两点上课.','不有。~Phủ định của 有 là 没有.'],'sj1'),
  H('h3','Mǎ Xiǎojūn 马小军','几点下课？','三点四十分下课。|四点下课。',['几点下课。~Câu hỏi có 几点 thì phải đáp bằng giờ cụ thể.','下课三点。~Thời gian đứng trước động từ: 三点下课.'],'sj1'),
  H('h4','Lǐ Bái 李白','你们想喝咖啡吗？','想，谢谢！|好，谢谢！',['想不喝。~Không muốn là 不想喝, 不 đứng trước 想.','想吗喝咖啡。~吗 đứng cuối câu, không xen giữa.'],'xiang'),
  H('h5','Lǐ Bái 李白','电影开始了吗？','还没开始。|开始了。',['不开始。~Việc chưa xảy ra dùng 没 / 还没, không dùng 不.','还没开始了。~Đã có 没 thì không thêm 了.'],'bumei'),
  H('h6','Lǐ Bái 李白','现在几点？','五点一刻。|现在五点半。',['现在几点。~Cần đáp bằng giờ cụ thể.','现在五点半分。~Không thêm 分 sau 半.'],'sj2')
],[
  D('d1','你睡觉_吗？','了|的|吧','Hỏi “đã ngủ chưa”: 睡觉了吗？','le'),
  D('d2','我_没睡。','还|很|吗','“Vẫn chưa” = 还没.','hai'),
  D('d3','我昨天_上课。','没|不|吗','Việc không xảy ra trong quá khứ dùng 没.','bumei'),
  D('d4','我_朋友去看电影。','和|吧|了','和 nối hai danh từ / đại từ: 我和朋友.','he'),
  D('d5','你们_喝咖啡吗？','想|了|的','Muốn làm gì: 想 + động từ.','xiang'),
  D('d6','五点_开始。','半|一|两','5 rưỡi = 五点半.','sj2'),
  D('d7','我们_点下课？','几|什么|哪','Hỏi giờ dùng 几点.','sj1')
],[
  T('t1','Mình chưa ngủ.','我|还|没|睡','了|不','Wǒ hái méi shuì.','hai'),
  T('t2','Cậu muốn uống cà phê không?','你|想|喝|咖啡|吗','了|和','Nǐ xiǎng hē kāfēi ma?','xiang'),
  T('t3','Chiều mai mình với bạn đi xem phim.','明天|下午|我|和|朋友|去|看|电影','了|吗','Míngtiān xiàwǔ wǒ hé péngyou qù kàn diànyǐng.','he',1)
]),

B(5,'办公楼在哪儿','Văn phòng ở đâu',{
  zai:{zh:'在',vi:'Động từ 在',huy:'Ở đâu cũng biết',ct:'Chủ ngữ + 在 + địa điểm: 我在办公楼的南边.',s:8},
  fangwei:{zh:'方位',vi:'Danh từ phương vị',huy:'Đông tây nam bắc',ct:'前边, 东边, 北边… là danh từ phương vị; “学校的东边” khác “东边的学校”.',s:9},
  nar:{zh:'哪儿',vi:'Đại từ nghi vấn 哪儿',huy:'Tìm đường giỏi',ct:'在 / 去 / 来 + 哪儿: hỏi nơi chốn.',s:10},
  ba:{zh:'吧',vi:'Trợ từ ngữ khí 吧 (2)',huy:'Rủ rê thành công',ct:'吧 cuối câu để đề nghị, rủ rê, làm dịu giọng: 你来我家玩儿吧.',s:22},
  li:{zh:'离',vi:'Động từ 离',huy:'Xa gần bao nhiêu',ct:'A 离 B + xa / gần / không xa: 我家离学校很远.',s:23},
  xingqi:{zh:'星期',vi:'Các ngày trong tuần',huy:'Thứ mấy hôm nay',ct:'星期一 … 星期六, 星期日 (星期天); hỏi: 今天星期几？',s:24},
  zaijie:{zh:'在',vi:'Giới từ 在',huy:'Làm gì ở đâu',ct:'Chủ ngữ + 在 + địa điểm + động từ: 我在图书馆看书.',s:25}
},[
  S('s1','办公楼|在|图书馆|的|北边','Bàngōnglóu zài túshūguǎn de běibian.','Tòa nhà văn phòng ở phía bắc thư viện.','fangwei'),
  S('s2','办公楼|在|哪儿','Bàngōnglóu zài nǎr?','Tòa nhà văn phòng ở đâu?','nar'),
  S('s3','你家|离|学校|远|吗','Nǐ jiā lí xuéxiào yuǎn ma?','Nhà bạn có xa trường không?','li'),
  S('s4','我家|在|学校|的|东边','Wǒ jiā zài xuéxiào de dōngbian.','Nhà mình ở phía đông trường.','fangwei'),
  S('s5','我们|星期天|早上|十点半|去','Wǒmen xīngqītiān zǎoshang shí diǎn bàn qù.','Chủ nhật 10 rưỡi sáng chúng mình đi.','xingqi'),
  S('s6','我|在|家|等|你们','Wǒ zài jiā děng nǐmen.','Mình ở nhà chờ các bạn.','zaijie'),
  S('s7','你们|一起|来|我家|玩儿|吧','Nǐmen yìqǐ lái wǒ jiā wánr ba.','Các bạn cùng đến nhà mình chơi nhé.','ba')
],[
  H('h1','Zhāng Méng 张萌','你家在哪儿？','在学校的东边。|我家在学校东边。',['在哪儿。~Phải nêu nơi cụ thể, không lặp lại câu hỏi.','我家在东边学校。~Danh từ phương vị đứng sau danh từ làm mốc: 学校的东边.'],'nar'),
  H('h2','Zhāng Méng 张萌','离学校远吗？','不远。|很远。',['不是远。~Trước tính từ không thêm 是.','离不远学校。~离 đứng trước nơi làm mốc: 离学校不远.'],'li'),
  H('h3','Wàimài 外卖送餐员','办公楼在哪儿？','在图书馆的北边。|在图书馆北边。',['在北边图书馆。~Danh từ phương vị đứng sau danh từ làm mốc: 图书馆的北边.','办公楼在哪儿。~Phải nêu vị trí cụ thể.'],'fangwei'),
  H('h4','Zhāng Méng 张萌','我们星期天早上十点半去，好吗？','好，我在家等你们。|好。',['好，我等在家你们。~Địa điểm với 在 đứng trước động từ: 在家等.','好，在家我你们等。~Trật tự sai: 我在家等你们.'],'zaijie'),
  H('h5','Mǐ Xuě 米雪','周末你来我家玩儿吧。','好啊。|好，我去。',['好吧不去。~Mâu thuẫn: vừa đồng ý vừa nói không đi.','你来我家吧不。~吧 đứng cuối câu, không thêm 不 sau đó.'],'ba'),
  H('h6','Zhāng Méng 张萌','今天星期几？','今天星期三。|星期五。',['今天几星期。~Hỏi thứ phải dùng 星期几.','今天星期几。~Lặp lại câu hỏi, chưa trả lời.'],'xingqi')
],[
  D('d1','办公楼_图书馆的北边。','在|有|是','Chỉ vị trí của sự vật: 在 + nơi chốn.','zai'),
  D('d2','你家在_？','哪儿|谁|什么','Hỏi nơi chốn dùng 哪儿.','nar'),
  D('d3','我家_学校不远。','离|在|从','“Cách trường không xa” = 离学校不远.','li'),
  D('d4','今天_几？','星期|点|号','Hỏi thứ trong tuần: 星期几.','xingqi'),
  D('d5','我_图书馆看书。','在|有|是','Địa điểm làm việc: 在 + nơi chốn + động từ.','zaijie'),
  D('d6','你们一起来我家玩儿_。','吧|的|几','Rủ rê, đề nghị: cuối câu thêm 吧.','ba'),
  D('d7','图书馆_学校很近。','离|在|有','A 离 B 很近.','li')
],[
  T('t1','Tòa nhà văn phòng ở đâu?','办公楼|在|哪儿','吗|离','Bàngōnglóu zài nǎr?','nar'),
  T('t2','Nhà mình ở phía đông trường.','我家|在|学校|的|东边','离|吗','Wǒ jiā zài xuéxiào de dōngbian.','fangwei'),
  T('t3','Nhà bạn có xa trường không?','你家|离|学校|远|吗','在|哪儿','Nǐ jiā lí xuéxiào yuǎn ma?','li',1)
]),

B(6,'苹果多少钱一斤','Táo bao nhiêu tiền một cân?',{
  you:{zh:'有',vi:'Câu chữ 有 (tồn tại)',huy:'Có gì trong đó',ct:'Nơi chốn + 有 + người / vật; phủ định dùng 没有, không dùng 不有.',s:8},
  zai:{zh:'再',vi:'Phó từ 再',huy:'Thêm một lần nữa',ct:'再 + động từ: lặp lại hoặc tiếp tục sau này: 再买两包牛奶.',s:9},
  yidianr:{zh:'一点儿',vi:'Số lượng từ 一点儿',huy:'Một xíu thôi',ct:'动词 + (一)点儿 + danh từ: số lượng ít, 一 thường bỏ.',s:10},
  de:{zh:'的字短语',vi:'Ngữ chữ 的',huy:'Cái của ai cũng biết',ct:'Danh / đại / tính / động từ + 的 làm chủ ngữ hoặc tân ngữ: 有便宜的吗？',s:22},
  duoshao:{zh:'多少',vi:'Đại từ nghi vấn 多少',huy:'Bao nhiêu cũng hỏi',ct:'多少 hỏi số lượng (thường > 10), hỏi giá: 多少钱？',s:23},
  qian:{zh:'钱',vi:'Biểu đạt tiền tệ',huy:'Đếm tiền như chớp',ct:'块 / 毛 / 分; đọc: 十六块九, 七块九毛九.',s:24},
  mingci:{zh:'名词谓语句',vi:'Câu vị ngữ danh từ',huy:'Không cần động từ',ct:'Danh từ làm vị ngữ, không dùng 是: 一斤十六块九.',s:25}
},[
  S('s1','冰箱|里|还|有|水果|吗','Bīngxiāng lǐ hái yǒu shuǐguǒ ma?','Trong tủ lạnh còn trái cây không?','you'),
  S('s2','我们|再|买|一点儿|水果|吧','Wǒmen zài mǎi yìdiǎnr shuǐguǒ ba.','Chúng mình mua thêm ít trái cây đi.','zai'),
  S('s3','再|买|两|包|牛奶','Zài mǎi liǎng bāo niúnǎi.','Mua thêm hai bịch sữa.','zai'),
  S('s4','多少|钱|一斤','Duōshao qián yì jīn?','Bao nhiêu tiền một cân?','duoshao'),
  S('s5','七块|九毛九|一斤','Qī kuài jiǔ máo jiǔ yì jīn.','Bảy đồng chín hào chín một cân.','qian'),
  S('s6','一斤|十六块九','Yì jīn shíliù kuài jiǔ.','Một cân mười sáu đồng chín.','mingci'),
  S('s7','这|本|书|是|爸爸|的','Zhè běn shū shì bàba de.','Quyển sách này là của ba.','de')
],[
  H('h1','Zhàngfu 丈夫','冰箱里还有水果吗？','还有一个苹果。|没有了。',['冰箱里有还水果。~还 đứng trước động từ 有: 还有.','没有不水果。~Phủ định 有 chỉ dùng 没有.'],'you'),
  H('h2','Zhàngfu 丈夫','我们再买一点儿水果吧。','好，再买两包牛奶。|好啊。',['好，买再两包牛奶。~再 đứng trước động từ: 再买.','好，再买吧两包牛奶。~吧 đứng cuối câu, không xen giữa.'],'zai'),
  H('h3','Wáng Yǔ 王语','多少钱一斤？','十六块九。|一斤十六块九。',['多少钱一斤。~Phải đáp bằng giá cụ thể.','十六九块。~Cách đọc tiền sai: 十六块九.'],'duoshao'),
  H('h4','Shòuhuòyuán 售货员','你要多少？','我要一点儿。|再来一点儿。',['我要点一儿。~一点儿 là một cụm, không tách ra.','我要多少。~Phải nêu số lượng cụ thể.'],'yidianr'),
  H('h5','Wáng Yǔ 王语','这个多少钱？','十块五。|十块五毛。',['十五块十。~Cách đọc tiền sai: 十块五.','多少钱十块。~Giá cụ thể trả lời trực tiếp, không lặp 多少钱.'],'qian')
],[
  D('d1','冰箱里还_水果吗？','有|在|是','Nơi chốn + 有 + vật: 冰箱里有水果.','you'),
  D('d2','我们_买一点儿吧。','再|很|吗','Mua thêm một lần nữa: 再 + động từ.','zai'),
  D('d3','我想买一_苹果。','点儿|个点|下','Số lượng ít: 一点儿 + danh từ.','yidianr'),
  D('d4','这个苹果_钱？','多少|几|什么','Hỏi giá: 多少钱.','duoshao'),
  D('d5','一斤十六块_。','九|了|的','Đọc tiền: 十六块九 (hào cuối có thể lược).','qian'),
  D('d6','有便宜_吗？','的|里|着','“Loại rẻ” = 便宜的 (ngữ chữ 的).','de')
],[
  T('t1','Trong tủ lạnh còn trái cây không?','冰箱|里|还|有|水果|吗','再|了','Bīngxiāng lǐ hái yǒu shuǐguǒ ma?','you'),
  T('t2','Một cân bao nhiêu tiền?','一斤|多少|钱','几|吗','Yì jīn duōshao qián?','duoshao'),
  T('t3','Chúng mình mua thêm một ít trái cây đi.','我们|再|买|一点儿|水果|吧','有|吗','Wǒmen zài mǎi yìdiǎnr shuǐguǒ ba.','zai',1)
]),

B(7,'你喜欢什么运动','Bạn thích môn thể thao nào?',{
  shihou:{zh:'时候',vi:'Danh từ 时候',huy:'Lúc nào cũng đúng',ct:'什么时候 · 有的时候…有的时候 · ……的时候.',s:8},
  chongdie:{zh:'重叠',vi:'Động từ lặp lại',huy:'Thử một chút',ct:'AA / A一A / ABAB = làm một chút; không dùng trong câu phủ định.',s:9},
  le:{zh:'了',vi:'Trợ từ 了 (2)',huy:'Mua xong rồi',ct:'Động từ + 了 + số lượng + tân ngữ: 我买了五个苹果; phủ định 没(有), bỏ 了.',s:10},
  haishi:{zh:'还是',vi:'Liên từ 还是',huy:'Chọn A hay B',ct:'A 还是 B？ dùng trong câu hỏi lựa chọn.',s:22},
  lihe:{zh:'离合词',vi:'Từ ly hợp',huy:'Tách ra mà vẫn hợp',ct:'游泳, 跑步: lặp kiểu AAB (跑跑步); thời gian đặt giữa: 游了两个小时泳.',s:23},
  huozhe:{zh:'或者',vi:'Liên từ 或者',huy:'A hoặc B',ct:'A 或者 B dùng trong câu kể; câu hỏi dùng 还是.',s:24}
},[
  S('s1','我|有的时候|在|房间|写写|作业','Wǒ yǒude shíhou zài fángjiān xiěxiě zuòyè.','Đôi khi mình ở phòng viết bài tập một chút.','shihou'),
  S('s2','你|现在|去|教室|还是|图书馆','Nǐ xiànzài qù jiàoshì háishi túshūguǎn?','Bây giờ bạn đi lớp học hay thư viện?','haishi'),
  S('s3','我|每天|都|跑跑|步','Wǒ měi tiān dōu pǎopao bù.','Mỗi ngày mình chạy bộ một chút.','lihe'),
  S('s4','我|在|房间|看看|电影','Wǒ zài fángjiān kànkan diànyǐng.','Mình ở phòng xem phim một chút.','chongdie'),
  S('s5','我们|下午|或者|晚上|去','Wǒmen xiàwǔ huòzhě wǎnshang qù.','Chúng mình đi vào buổi chiều hoặc buổi tối.','huozhe'),
  S('s6','米雪|看|了|两本书','Mǐ Xuě kàn le liǎng běn shū.','Michelle đã xem hai quyển sách.','le'),
  S('s7','你|喜欢|踢足球|还是|打篮球','Nǐ xǐhuan tī zúqiú háishi dǎ lánqiú?','Bạn thích đá bóng hay chơi bóng rổ?','haishi')
],[
  H('h1','Mǐ Xuě 米雪','周末你们一般做什么？','我经常去图书馆学习。|有的时候在房间看看电影。',['我周末做什么。~Phải nêu hoạt động cụ thể.','我看电影看看。~Động từ lặp lại phải đứng trước tân ngữ: 看看电影.'],'chongdie'),
  H('h2','Mǎ Xiǎojūn 马小军','你现在去教室还是图书馆？','我去图书馆。|去教室。',['对，去教室还是图书馆。~Câu hỏi lựa chọn phải chọn một trong hai, không đáp “对”.','我去教室或者图书馆。~Trả lời hãy chọn một nơi; 或者 dùng trong câu kể liệt kê.'],'haishi'),
  H('h3','Zhāng Méng 张萌','你想去哪儿旅游？','我想去法国旅游。|我想去法国或者英国旅游。',['我想去法国还是英国旅游。~还是 dùng trong câu hỏi; câu kể dùng 或者.','我想去哪儿旅游。~Phải nêu nơi cụ thể.'],'huozhe'),
  H('h4','Mǎ Xiǎojūn 马小军','你昨天游泳了吗？','游了两个小时泳。|没游泳。',['游泳了两个小时。~Theo bài: thời gian đặt giữa từ ly hợp 游…泳.','没游泳了。~Phủ định 了 dùng 没 và bỏ 了: 没游泳.'],'lihe'),
  H('h5','Zhāng Méng 张萌','你买了几个苹果？','我买了五个苹果。|我买了两个苹果。',['我买了几个苹果。~Phải nêu số cụ thể.','我买苹果了五个。~了 đứng ngay sau động từ, trước số lượng + tân ngữ: 买了五个苹果.'],'le'),
  H('h6','Mǎ Xiǎojūn 马小军','你每天锻炼吗？','我每天都锻炼，跑跑步或者游游泳。',['我每天都锻炼，跑跑步还是游游泳。~Câu kể dùng 或者, 还是 dành cho câu hỏi.','我每天都不锻炼跑跑步。~Động từ lặp lại không dùng trong câu phủ định.'],'huozhe')
],[
  D('d1','你喝咖啡_牛奶？','还是|或者|和','Câu hỏi lựa chọn dùng 还是.','haishi'),
  D('d2','我们下午_晚上去。','或者|还是|吗','Câu kể nối hai lựa chọn dùng 或者.','huozhe'),
  D('d3','我买_五个苹果。','了|过|着','Hoàn thành động tác: 动词 + 了 + số lượng + tân ngữ.','le'),
  D('d4','周末我去超市_东西。','买买|买不买|买吗','Động từ lặp lại AA: làm một chút.','chongdie'),
  D('d5','你什么_去北京？','时候|点|星期','Hỏi “khi nào”: 什么时候.','shihou'),
  D('d6','我昨天游_两个小时泳。','了|的|着','Thời gian đặt giữa từ ly hợp: 游了两个小时泳.','lihe'),
  D('d7','你喜欢踢足球_打篮球？','还是|或者|和','Hỏi chọn A hay B dùng 还是.','haishi')
],[
  T('t1','Hôm nay là thứ Tư hay thứ Năm?','今天|是|星期三|还是|星期四','或者|吗','Jīntiān shì xīngqīsān háishi xīngqīsì?','haishi'),
  T('t2','Mình mua rất nhiều quyển sách du lịch.','我|买|了|很多|本|旅游|的|书','过|着','Wǒ mǎi le hěn duō běn lǚyóu de shū.','le'),
  T('t3','Mỗi ngày mình chạy bộ hoặc bơi.','我|每天|都|跑跑|步|或者|游游|泳','还是|吗','Wǒ měi tiān dōu pǎopao bù huòzhě yóuyou yǒng.','huozhe',1)
])

]);
})();
