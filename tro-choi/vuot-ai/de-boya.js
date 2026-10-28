// Vượt ải 闯关 — đề ôn 博雅汉语 Bài 1–10 (sơ cấp, tập 1). CHỜ CÔ DUYỆT.
// Câu xếp lấy từ phần 排列句子 (data-segments), hội thoại, ví dụ ngữ pháp trong courses/boya/bai-N; đáp án nhiễu + lời giải thích do Claude soạn nháp.
// Bài giảng 博雅 không chia slide nên điểm ngữ pháp không có `s` (liên kết về đầu bài). Khuôn dữ liệu giống de-tttc.js.
(function(){
const S=(id,p,py,vi,g)=>({id,p:p.split('|'),py,vi,g});
const H=(id,who,q,ok,bad,g)=>({id,who,q,ok:ok.split('|'),bad:bad.map(b=>b.split('~')),g});
const D=(id,s,o,why,g)=>({id,s,o:o.split('|'),ok:0,why,g});
const T=(id,vi,p,nhieu,py,g,boss)=>({id,vi,p:p.split('|'),nhieu:nhieu.split('|'),py,g,boss:boss?1:0});
const B=(n,zh,vi,gr,sap,hoi,dien,dich)=>({id:'boya-bai-'+n,mon:'boya',n,zh,vi:'Bài '+n+' · '+vi,lk:'../../boya/bai-'+n+'/',gr,sap,hoi,dien,dich});
const G=(zh,vi,huy,ct)=>({zh,vi,huy,ct});

window.VA_SACH=(window.VA_SACH||[]).concat([{id:'boya',zh:'博雅汉语',vi:'Boya Hán ngữ, Sơ cấp 1'}]);
window.VA_BAI=(window.VA_BAI||[]).concat([

B(1,'你好','Chào bạn!',{
  shi:G('是','Câu chữ 是','Bậc thầy chữ 是','S + 是 + danh từ; phủ định S + 不是 + danh từ.'),
  ma:G('吗','Câu hỏi dùng 吗','Hỏi có hay không','Câu trần thuật + 吗？ thành câu hỏi có / không.')
},[
  S('s1','我|是|学生','Wǒ shì xuésheng.','Tôi là sinh viên.','shi'),
  S('s2','你|是|老师|吗','Nǐ shì lǎoshī ma?','Bạn là giáo viên à?','ma'),
  S('s3','我|不是|留学生','Wǒ bú shì liúxuéshēng.','Tôi không phải lưu học sinh.','shi'),
  S('s4','大卫|是|留学生|吗','Dàwèi shì liúxuéshēng ma?','David là lưu học sinh à?','ma'),
  S('s5','她|不是|老师','Tā bú shì lǎoshī.','Cô ấy không phải giáo viên.','shi')
],[
  H('h1','Dàwèi 大卫','你是老师吗？','不是，我不是老师，我是学生。|不是，我是学生。',['不是，我是不老师。~Phủ định của 是 là 不是: 我不是老师.','是，你是老师。~Hỏi 你 thì đáp bằng 我.'],'ma'),
  H('h2','Wáng lǎoshī 王老师','你是留学生吗？','是，我是留学生。',['是，我留学生。~Câu chữ 是 phải có 是 giữa hai danh từ: 我是留学生.','我是吗留学生。~吗 đứng cuối câu hỏi, không đứng trong câu đáp.'],'ma'),
  H('h3','Dàwèi 大卫','她是老师吗？','是，她是老师。|不是，她是学生。',['是，我是老师。~Hỏi về 她 thì đáp về 她, không phải 我.','是，她老师。~Thiếu 是: 她是老师.'],'shi'),
  H('h4','Wáng lǎoshī 王老师','你叫什么名字？','我叫大卫。',['我叫什么名字。~Phải nêu tên cụ thể, không lặp 什么.','我是叫大卫。~Không ghép 是 với 叫.'],'shi')
],[
  D('d1','你是老师_？','吗|的|吧','Câu hỏi có / không: cuối câu thêm 吗.','ma'),
  D('d2','我_是留学生，我是学生。','不|没|吗','Phủ định 是 dùng 不是.','shi'),
  D('d3','大卫是留学生_？','吗|呢|什么','Câu hỏi có / không: 吗.','ma'),
  D('d4','你好，我_大卫。','叫|吗|不','Giới thiệu tên: 我叫……','shi'),
  D('d5','她_是老师，她是学生。','不|没|很','Phủ định 是 dùng 不是.','shi')
],[
  T('t1','Tôi là sinh viên.','我|是|学生','吗|不','Wǒ shì xuésheng.','shi'),
  T('t2','Bạn là giáo viên à?','你|是|老师|吗','不|的','Nǐ shì lǎoshī ma?','ma'),
  T('t3','Tôi không phải giáo viên, tôi là sinh viên.','我|不是|老师|，|我|是|学生','吗|没','Wǒ bú shì lǎoshī, wǒ shì xuésheng.','shi',1)
]),

B(2,'你是哪国人','Bạn là người nước nào?',{
  men:G('们','Hậu tố 们','Số nhiều chuẩn','们 chỉ đi sau đại từ / danh từ chỉ người: 我们, 同学们.'),
  ye:G('也','Phó từ 也','Cũng thế nhỉ','S + 也 + V / Adj; phủ định 也不是, không nói 不也是.'),
  ne:G('呢','Trợ từ 呢 (1)','Còn bạn thì sao','A……，B + 呢？ = hỏi lại “còn B thì sao?”.')
},[
  S('s1','同学|们|好','Tóngxuémen hǎo!','Chào các bạn!','men'),
  S('s2','我|也|是|中国人','Wǒ yě shì Zhōngguó rén.','Tôi cũng là người Trung Quốc.','ye'),
  S('s3','他|是|我们|的|老师','Tā shì wǒmen de lǎoshī.','Thầy ấy là giáo viên của chúng tôi.','men'),
  S('s4','我|是|美国人|，|你|呢','Wǒ shì Měiguó rén, nǐ ne?','Tôi là người Mỹ, còn bạn?','ne'),
  S('s5','我|也|不|是|老师','Wǒ yě bú shì lǎoshī.','Tôi cũng không phải giáo viên.','ye')
],[
  H('h1','Lǐ Jūn 李军','我是中国人，你呢？','我是美国人。|我是日本人。',['你呢是美国人。~呢 đứng cuối câu hỏi, không đứng giữa.','我呢是美国人。~呢 dùng để hỏi lại, không dùng khi đáp.'],'ne'),
  H('h2','Mǎlì 玛丽','我是学生，你也是学生吗？','是，我也是学生。|不是，我是老师。',['是，也我是学生。~也 đứng sau chủ ngữ: 我也是.','是，我不也是学生。~Khẳng định thì nói 我也是; phủ định mới nói 我也不是.'],'ye'),
  H('h3','Liú lǎoshī 刘老师','同学们好！','老师好！',['同学好们！~们 đứng ngay sau 同学: 同学们.','老师们好！~Học sinh chào một thầy: 老师好.'],'men'),
  H('h4','Mǎlì 玛丽','认识你很高兴。','我也很高兴。|认识你我也很高兴。',['我很也高兴。~也 đứng sau chủ ngữ, trước 很: 我也很高兴.','也我很高兴。~也 không đứng trước chủ ngữ.'],'ye'),
  H('h5','Dàwèi 大卫','你叫李军，她呢？','她叫玛丽。',['她呢叫玛丽。~呢 chỉ dùng khi hỏi lại.','她是玛丽叫。~Trật tự: 她叫玛丽.'],'ne')
],[
  D('d1','同学_好！','们|的|吗','们 chỉ số nhiều của người: 同学们.','men'),
  D('d2','我_是学生。','也|们|呢','也 đứng sau chủ ngữ, trước động từ.','ye'),
  D('d3','你是美国人，我_是美国人。','也|都|很','“Cũng” dùng 也.','ye'),
  D('d4','我是中国人，你_？','呢|吗|的','Hỏi lại “còn bạn?”: 你呢？','ne'),
  D('d5','我们是学生，你_是学生吗？','们|的|吗','Đại từ số nhiều: 你们.','men')
],[
  T('t1','Chào các bạn!','同学|们|好','的|吗','Tóngxuémen hǎo!','men'),
  T('t2','Tôi cũng là người Trung Quốc.','我|也|是|中国人','不|吗','Wǒ yě shì Zhōngguó rén.','ye'),
  T('t3','Tôi là người Mỹ, còn bạn?','我|是|美国人|，|你|呢','吗|也','Wǒ shì Měiguó rén, nǐ ne?','ne',1)
]),

B(3,'那是你的书吗','Kia là sách của bạn phải không?',{
  zhena:G('这 / 那','Này, đây / Kia, đó','Gần xa phân minh','这 chỉ gần, 那 chỉ xa, 哪 dùng để hỏi.'),
  tewen:G('什么 / 谁 / 哪','Câu nghi vấn đặc biệt','Thám tử câu hỏi','Giữ trật tự câu trần thuật, thay phần cần hỏi bằng từ để hỏi; không thêm 吗.'),
  dingyu:G('定语','Định ngữ','Định ngữ chuẩn chỉnh','Định ngữ (+ 的) đứng trước danh từ; chỉ sở hữu thì thêm 的.')
},[
  S('s1','那|是|谁|的|书','Nà shì shéi de shū?','Kia là sách của ai?','tewen'),
  S('s2','这|是|什么|杂志','Zhè shì shénme zázhì?','Đây là tạp chí gì?','tewen'),
  S('s3','那|是|我|同屋|的|词典','Nà shì wǒ tóngwū de cídiǎn.','Kia là từ điển của bạn cùng phòng tôi.','dingyu'),
  S('s4','这|是|中国|的|音乐|杂志','Zhè shì Zhōngguó de yīnyuè zázhì.','Đây là tạp chí âm nhạc của Trung Quốc.','dingyu'),
  S('s5','他|是|大卫|的|朋友','Tā shì Dàwèi de péngyou.','Anh ấy là bạn của David.','dingyu'),
  S('s6','这|是|汉语|课本','Zhè shì Hànyǔ kèběn.','Đây là giáo trình tiếng Hán.','zhena')
],[
  H('h1','Dàwèi 大卫','那是谁的书？','那是我同屋的书。|那是我的书。',['那是谁的书。~Câu hỏi có 谁 thì phải đáp bằng người cụ thể.','那是书我同屋的。~Định ngữ đứng trước: 我同屋的书.'],'tewen'),
  H('h2','Mǎlì 玛丽','这是什么杂志？','音乐杂志。|这是音乐杂志。',['这是什么杂志。~Cần nêu loại tạp chí cụ thể.','这是杂志音乐。~Định ngữ đứng trước: 音乐杂志.'],'tewen'),
  H('h3','Mǎlì 玛丽','这是日本的杂志吗？','不是，是中国的杂志。',['不是，是杂志中国的。~Định ngữ + 的 đứng trước danh từ: 中国的杂志.','不是，中国的杂志是。~Phải có 是 trước danh từ: 是中国的杂志.'],'dingyu'),
  H('h4','Mǎlì 玛丽','那是你的词典吗？','不是，是我朋友的词典。|不是，是我朋友的。',['不是，是朋友我的词典。~Định ngữ: 我朋友的词典.','不是，是我朋友词典的。~Định ngữ (+ 的) đứng trước danh từ.'],'dingyu')
],[
  D('d1','_是谁的书？','那|哪|吗','那 chỉ vật ở xa; 哪 dùng để hỏi.','zhena'),
  D('d2','你是_国人？','哪|那|这','Hỏi quốc tịch: 哪国人.','zhena'),
  D('d3','这是我朋友_杂志。','的|吗|哪','Quan hệ sở hữu thêm 的.','dingyu'),
  D('d4','这是汉语课本，_是汉日词典。','那|哪|吗','Đối chiếu gần – xa: 这……，那……','zhena'),
  D('d5','你叫_名字？','什么|谁|哪','Hỏi tên dùng 什么.','tewen'),
  D('d6','她是_？','谁|吗|什么','Hỏi người dùng 谁.','tewen')
],[
  T('t1','Kia là sách của ai?','那|是|谁|的|书','吗|什么','Nà shì shéi de shū?','tewen'),
  T('t2','Đây là tạp chí âm nhạc Trung Quốc.','这|是|中国|的|音乐|杂志','吗|谁','Zhè shì Zhōngguó de yīnyuè zázhì.','dingyu'),
  T('t3','Kia là từ điển của bạn cùng phòng tôi.','那|是|我|同屋|的|词典','吗|什么','Nà shì wǒ tóngwū de cídiǎn.','dingyu',1)
]),

B(4,'图书馆在哪儿','Thư viện ở đâu?',{
  zaishi:G('在 / 是','在 và 是 chỉ vị trí','Ở đâu và là gì','Danh từ + 在 + vị trí; vị trí + 是 + danh từ.'),
  nar:G('哪儿','Đại từ nghi vấn 哪儿','Tìm đường giỏi','哪儿 hỏi nơi chốn; không thêm 吗.'),
  fangwei:G('方位名词','Danh từ phương vị (1)','Đông tây nam bắc','Danh từ + 的 + 北边 / 左边…: 图书馆的北边.')
},[
  S('s1','图书馆|在|哪儿','Túshūguǎn zài nǎr?','Thư viện ở đâu?','nar'),
  S('s2','这儿|是|图书馆|吗','Zhèr shì túshūguǎn ma?','Đây là thư viện à?','zaishi'),
  S('s3','图书馆|在|宿舍楼|的|北边','Túshūguǎn zài sùshèlóu de běibian.','Thư viện ở phía bắc ký túc xá.','fangwei'),
  S('s4','玛丽|的|左边|是|大卫','Mǎlì de zuǒbian shì Dàwèi.','Bên trái Mary là David.','zaishi'),
  S('s5','日本|在|中国|的|东边','Rìběn zài Zhōngguó de dōngbian.','Nhật Bản ở phía đông Trung Quốc.','fangwei')
],[
  H('h1','Mǎlì 玛丽','图书馆在哪儿？','在宿舍楼的北边。|在那儿。',['在哪儿。~Phải nêu vị trí cụ thể.','在北边宿舍楼的。~Danh từ + 的 + phương vị: 宿舍楼的北边.'],'nar'),
  H('h2','Mǎlì 玛丽','这儿是图书馆吗？','不是，这是教学楼。',['不是，这在教学楼。~Nói “đây là cái gì” dùng 是, không dùng 在.','不是，教学楼吗。~Không thêm 吗 vào câu trả lời.'],'zaishi'),
  H('h3','Mǎlì 玛丽','是左边的楼吗？','不，是右边的楼。',['不，在右边的楼。~Hỏi “là tòa nào” trả lời bằng 是.','不，右边是楼的。~Phương vị + 的 + danh từ: 右边的楼.'],'fangwei'),
  H('h4','Dàwèi 大卫','你们的宿舍楼在哪儿？','在图书馆的北边。',['在图书馆北边的。~Không thêm 的 ở cuối câu.','在哪儿图书馆的北边。~Không lặp 哪儿 khi đáp.'],'nar')
],[
  D('d1','图书馆_哪儿？','在|是|有','Hỏi vị trí của vật: 在哪儿.','nar'),
  D('d2','那儿_宿舍楼。','是|在|去','Vị trí + 是 + danh từ: 那儿是宿舍楼.','zaishi'),
  D('d3','教学楼在宿舍楼_右边。','的|了|吗','Danh từ + 的 + phương vị.','fangwei'),
  D('d4','日本在中国的_边。','东|大|很','Phương vị + 边: 东边.','fangwei'),
  D('d5','你们的宿舍楼在_？','哪儿|谁|吗','Hỏi nơi chốn: 哪儿, không thêm 吗.','nar')
],[
  T('t1','Thư viện ở đâu?','图书馆|在|哪儿','吗|是','Túshūguǎn zài nǎr?','nar'),
  T('t2','Đây là thư viện à?','这儿|是|图书馆|吗','在|哪儿','Zhèr shì túshūguǎn ma?','zaishi'),
  T('t3','Thư viện ở phía bắc của ký túc xá.','图书馆|在|宿舍楼|的|北边','是|吗','Túshūguǎn zài sùshèlóu de běibian.','fangwei',1)
]),

B(5,'在北京大学的东边','Ở phía đông của Đại học Bắc Kinh',{
  fuxi:G('在 + 方位','Ôn Bài 1–4: 在 và phương vị','Ôn bài chắc tay','Danh từ + 在 + danh từ + 的 + phương vị.'),
  zhuanye:G('我的专业是……','Giới thiệu chuyên ngành','Chuyên ngành của tôi','我的专业是 + tên chuyên ngành.'),
  ding:G('定语','Định ngữ nhiều tầng','Từ lớn đến nhỏ','Trường → khoa → người, từ lớn đến nhỏ: 清华大学中文系的研究生.'),
  yao:G('欢迎你去……','Lời mời','Mời khách chu đáo','有空儿的时候，欢迎你去 + nơi chốn + 玩儿.')
},[
  S('s1','我的|专业|是|国际|关系','Wǒ de zhuānyè shì guójì guānxi.','Chuyên ngành của mình là quan hệ quốc tế.','zhuanye'),
  S('s2','清华大学|在|北京大学|的|东边','Qīnghuá Dàxué zài Běijīng Dàxué de dōngbian.','Đại học Thanh Hoa ở phía đông Đại học Bắc Kinh.','fuxi'),
  S('s3','卫生间|在|教室|的|旁边','Wèishēngjiān zài jiàoshì de pángbiān.','Nhà vệ sinh ở bên cạnh phòng học.','fuxi'),
  S('s4','欢迎|你|去|清华大学|玩儿','Huānyíng nǐ qù Qīnghuá Dàxué wánr.','Hoan nghênh bạn đến Đại học Thanh Hoa chơi.','yao'),
  S('s5','我|是|清华大学|中文系|的|研究生','Wǒ shì Qīnghuá Dàxué Zhōngwén xì de yánjiūshēng.','Tôi là nghiên cứu sinh khoa tiếng Trung Đại học Thanh Hoa.','ding')
],[
  H('h1','Zhāng Hóng 张红','你的专业是什么？','我的专业是国际关系。|我的专业是现代文学。',['我是专业国际关系。~Mẫu: 我的专业是 + tên chuyên ngành.','我的专业国际关系是。~是 đứng giữa 专业 và tên chuyên ngành.'],'zhuanye'),
  H('h2','Mǎlì 玛丽','清华大学在哪儿？','在北京大学的东边。',['在东边北京大学的。~Danh từ + 的 + phương vị.','在北京大学东边的的。~Không lặp 的.'],'fuxi'),
  H('h3','Dàwèi 大卫','卫生间在哪儿？','在那儿，教室的旁边。',['在那儿，旁边教室的。~Danh từ + 的 + phương vị.','卫生间在哪儿，教室旁边。~Không lặp 哪儿 khi đáp.'],'fuxi'),
  H('h4','Zhāng Hóng 张红','有空儿的时候，欢迎你去玩儿。','好，谢谢！|谢谢，我一定去。',['不用谢。~Người ta mời, không đáp “không có gì”.','对不起。~Không phù hợp: không có lỗi nào.'],'yao')
],[
  D('d1','我的专业_国际关系。','是|在|有','Giới thiệu chuyên ngành: 我的专业是……','zhuanye'),
  D('d2','清华大学在北京大学的_。','东边|东|边东','Danh từ + 的 + 东边.','fuxi'),
  D('d3','卫生间在教室_旁边。','的|了|吗','Danh từ + 的 + phương vị.','fuxi'),
  D('d4','欢迎你去清华大学_。','玩儿|吗|的','Mời đến chơi: 欢迎你去……玩儿.','yao'),
  D('d5','我是清华大学中文系_研究生。','的|了|吗','Định ngữ + 的 + trung tâm ngữ.','ding')
],[
  T('t1','Chuyên ngành của mình là quan hệ quốc tế.','我的|专业|是|国际关系','在|吗','Wǒ de zhuānyè shì guójì guānxi.','zhuanye'),
  T('t2','Nhà vệ sinh ở bên cạnh phòng học.','卫生间|在|教室|的|旁边','是|吗','Wèishēngjiān zài jiàoshì de pángbiān.','fuxi'),
  T('t3','Hoan nghênh bạn đến Đại học Thanh Hoa chơi.','欢迎|你|去|清华大学|玩儿','吗|在','Huānyíng nǐ qù Qīnghuá Dàxué wánr.','yao',1)
]),

B(6,'现在几点','Bây giờ mấy giờ?',{
  zhongdian:G('钟点','Cách nói giờ','Đúng giờ chuẩn','Hỏi giờ dùng 几点; 点 + 分; 8:05 = 八点零五分; 半 = 30, 一刻 = 15; thời gian đứng trước động từ.')
},[
  S('s1','现在|几|点','Xiànzài jǐ diǎn?','Bây giờ mấy giờ?','zhongdian'),
  S('s2','讲座|几点|开始','Jiǎngzuò jǐ diǎn kāishǐ?','Buổi giảng mấy giờ bắt đầu?','zhongdian'),
  S('s3','差|一刻|六点','Chà yí kè liù diǎn.','Kém 15 phút nữa là 6 giờ.','zhongdian'),
  S('s4','你们|几点|下课','Nǐmen jǐ diǎn xiàkè?','Các bạn mấy giờ tan học?','zhongdian'),
  S('s5','北京大学|早上|八点|上课','Běijīng Dàxué zǎoshang bā diǎn shàngkè.','Đại học Bắc Kinh 8 giờ sáng vào học.','zhongdian')
],[
  H('h1','Dàwèi 大卫','现在几点？','差一刻六点。|现在八点半。',['现在几点。~Cần nêu giờ cụ thể.','现在点八半。~Số + 点 + 半: 八点半.'],'zhongdian'),
  H('h2','Mǎlì 玛丽','你们几点下课？','十点半下课。|十点半。',['下课十点半。~Thời gian đứng trước động từ: 十点半下课.','十半点。~Giờ rưỡi nói 十点半.'],'zhongdian'),
  H('h3','Mǎlì 玛丽','讲座几点开始？','六点开始。|六点。',['开始六点。~Thời gian đứng trước động từ.','六点钟几。~Phải đáp bằng giờ cụ thể.'],'zhongdian'),
  H('h4','Mǎlì 玛丽','你们学校早上几点上课？','我们学校八点五十分上课。',['我们学校上课八点五十分。~Thời gian đứng trước động từ.','我们学校八五十点上课。~Cách đọc giờ sai: 八点五十分.'],'zhongdian')
],[
  D('d1','现在_点？','几|什么|多少','Hỏi giờ: 几点.','zhongdian'),
  D('d2','8:05 = 八点_五分。','零|二|十','Số phút nhỏ hơn 10 thêm 零: 八点零五分.','zhongdian'),
  D('d3','3:15 = 三点_。','一刻|半|三刻','15 phút = 一刻.','zhongdian'),
  D('d4','8:30 = 八点_。','半|一刻|零','30 phút = 半.','zhongdian'),
  D('d5','讲座_点开始？','几|什么|哪','Hỏi giờ: 几点.','zhongdian')
],[
  T('t1','Bây giờ mấy giờ?','现在|几|点','吗|了','Xiànzài jǐ diǎn?','zhongdian'),
  T('t2','Các bạn mấy giờ tan học?','你们|几点|下课','吗|在','Nǐmen jǐ diǎn xiàkè?','zhongdian'),
  T('t3','Đại học Bắc Kinh 8 giờ sáng vào học.','北京大学|早上|八点|上课','吗|几','Běijīng Dàxué zǎoshang bā diǎn shàngkè.','zhongdian',1)
]),

B(7,'明天你有课吗','Ngày mai có lớp không?',{
  you:G('有','Câu chữ 有','Bậc thầy chữ 有','Phủ định của 有 là 没有, không dùng 不有.'),
  ba:G('吧','Trợ từ 吧 (1)','Đoán trúng phóc','Câu nghi vấn + 吧 = hỏi xác nhận điều đã tin là đúng.'),
  fangwei:G('方位名词','Danh từ phương vị (2)','Trên dưới trong ngoài','上 / 下 / 里 / 外 / 前 / 后 đặt ngay sau danh từ: 楼下, 车棚里.'),
  shijian:G('时间名词','Danh từ thời gian làm trạng ngữ','Đúng lúc đúng chỗ','Danh từ thời gian đứng trước động từ: 明天下午去.')
},[
  S('s1','明天|你|有课|吗','Míngtiān nǐ yǒu kè ma?','Ngày mai bạn có lớp không?','you'),
  S('s2','我|上午有课|，|下午|没有','Wǒ shàngwǔ yǒu kè, xiàwǔ méiyǒu.','Buổi sáng mình có lớp, buổi chiều thì không.','you'),
  S('s3','你|有|自行车|吧','Nǐ yǒu zìxíngchē ba?','Bạn có xe đạp phải không?','ba'),
  S('s4','车|在|楼下|车棚|里','Chē zài lóu xià chēpéng lǐ.','Xe ở trong nhà để xe dưới tầng.','fangwei'),
  S('s5','我|明天|下午|去|见|朋友','Wǒ míngtiān xiàwǔ qù jiàn péngyou.','Chiều mai mình đi gặp bạn.','shijian')
],[
  H('h1','Mǎlì 玛丽','明天你有课吗？','我上午有课，下午没有。|没有。',['我上午有课，下午不有。~Phủ định của 有 là 没有.','我有课上午。~Thời gian đứng trước động từ: 上午有课.'],'you'),
  H('h2','Mǎlì 玛丽','你有自行车吧？','有。|有，什么事？',['有吧。~Không thêm 吧 khi đáp.','不有。~Phủ định của 有 là 没有.'],'ba'),
  H('h3','Mǎlì 玛丽','你的车在哪儿？','在楼下车棚里。',['在车棚里楼下。~Vị trí lớn trước nhỏ sau: 楼下车棚里.','在里车棚。~Phương vị 里 đứng sau danh từ: 车棚里.'],'fangwei'),
  H('h4','Dàwèi 大卫','今天晚上你有时间吗？','有。|有，有事吗？',['有时间今天晚上。~Thời gian đứng trước 有: 今天晚上有时间.','没有不时间。~Phủ định có: 没有时间.'],'shijian')
],[
  D('d1','我_有自行车。','没|不|别','Phủ định 有 dùng 没有.','you'),
  D('d2','你有自行车_？','吧|的|了','Hỏi xác nhận điều đã tin là đúng: 吧.','ba'),
  D('d3','车在楼_。','下|在|有','Vị trí đặt ngay sau danh từ: 楼下.','fangwei'),
  D('d4','玛丽在车棚_。','里|的|吗','车棚里 = trong nhà để xe.','fangwei'),
  D('d5','明天下午我_见朋友。','去|有|在','Thời gian đứng trước động từ: 明天下午去见朋友.','shijian')
],[
  T('t1','Ngày mai bạn có lớp không?','明天|你|有|课|吗','没|吧','Míngtiān nǐ yǒu kè ma?','you'),
  T('t2','Xe ở trong nhà để xe dưới tầng.','车|在|楼下|车棚|里','有|吗','Chē zài lóu xià chēpéng lǐ.','fangwei'),
  T('t3','Chiều mai mình đi gặp bạn.','我|明天|下午|去|见|朋友','吗|有','Wǒ míngtiān xiàwǔ qù jiàn péngyou.','shijian',1)
]),

B(8,'你的电话号码是多少','Số điện thoại là bao nhiêu?',{
  jiu:G('就','Phó từ 就','Nhanh hơn dự kiến','Thời gian ngắn + 就 + V: sự việc đến sớm / dễ dàng: 十五分钟就到.'),
  ne:G('呢','Trợ từ 呢 (2)','Hỏi nhẹ nhàng','呢 ở cuối câu nghi vấn đặc biệt làm giọng mềm hơn.'),
  ba:G('吧','Trợ từ 吧 (2)','Rủ rê thành công','吧 cuối câu để đề nghị, rủ rê: 来我们学校玩儿吧.'),
  haoma:G('号码','Cách đọc số hiệu','Đọc số điện thoại','Số điện thoại, số phòng đọc từng chữ số; 1 thường đọc yāo (幺).'),
  duoshao:G('多少','几 và 多少 (1)','Bao nhiêu thế','Số lớn / nhiều chữ số hỏi bằng 多少.')
},[
  S('s1','去|你们|学校|怎么|走|呢','Qù nǐmen xuéxiào zěnme zǒu ne?','Đến trường các bạn đi thế nào nhỉ?','ne'),
  S('s2','你的|宿舍|在|哪儿|呢','Nǐ de sùshè zài nǎr ne?','Ký túc xá của bạn ở đâu nhỉ?','ne'),
  S('s3','你的|电话号码|是|多少','Nǐ de diànhuà hàomǎ shì duōshao?','Số điện thoại của bạn là bao nhiêu?','duoshao'),
  S('s4','骑自行车|十五分钟|就|到','Qí zìxíngchē shíwǔ fēnzhōng jiù dào.','Đạp xe 15 phút là tới.','jiu'),
  S('s5','来|我们|学校|玩儿|吧','Lái wǒmen xuéxiào wánr ba!','Đến trường chúng mình chơi nhé!','ba')
],[
  H('h1','Zhāng Hóng 张红','你的电话号码是多少？','63861023。|我的电话号码是63861023。',['我的电话号码是多少。~Phải nêu số cụ thể.','我的电话号码，63861023是。~是 đứng giữa: 号码是 + số.'],'haoma'),
  H('h2','Mǎlì 玛丽','去你们学校怎么走呢？','21路和106路公共汽车都到。|骑自行车十五分钟就到。',['去我们学校怎么走。~Cần trả lời cách đi cụ thể.','骑自行车就十五分钟到。~就 đứng sau thành phần chỉ thời gian: 十五分钟就到.'],'jiu'),
  H('h3','Zhāng Hóng 张红','来我们学校玩儿吧！','好啊！|好啊，谢谢！',['好吧啊。~Đáp đồng ý đơn giản: 好啊.','玩儿吧好啊。~Không lặp 吧 khi đáp.'],'ba'),
  H('h4','Mǎlì 玛丽','你的房间号是多少？','502号。|我的房间是502室。',['502多少。~Cần nêu số cụ thể, không lặp 多少.','五零二个号。~Số phòng đọc từng số: 五零二号.'],'haoma')
],[
  D('d1','你的电话号码是_？','多少|几|什么','Số lớn / nhiều chữ số hỏi bằng 多少.','duoshao'),
  D('d2','骑自行车十五分钟_到。','就|吗|的','Thời gian ngắn, tới sớm: 就.','jiu'),
  D('d3','去你们学校怎么走_？','呢|吗|吧','Câu hỏi đặc biệt cuối câu có thể thêm 呢.','ne'),
  D('d4','来我们学校玩儿_！','吧|吗|呢','Rủ rê, đề nghị: 吧.','ba'),
  D('d5','电话号码里的“1”常读_。','幺|七|二','Trong số điện thoại, 1 thường đọc yāo (幺).','haoma')
],[
  T('t1','Số điện thoại của bạn là bao nhiêu?','你的|电话号码|是|多少','几|吗','Nǐ de diànhuà hàomǎ shì duōshao?','duoshao'),
  T('t2','Đạp xe 15 phút là tới.','骑自行车|十五分钟|就|到','才|吗','Qí zìxíngchē shíwǔ fēnzhōng jiù dào.','jiu'),
  T('t3','Đến trường các bạn đi thế nào nhỉ?','去|你们|学校|怎么|走|呢','吗|吧','Qù nǐmen xuéxiào zěnme zǒu ne?','ne',1)
]),

B(9,'多少钱一瓶','Bao nhiêu tiền một chai?',{
  jiduoshao:G('几 / 多少','几 và 多少 (2)','Hỏi số lượng chuẩn','几 hỏi số nhỏ và cần lượng từ; 多少 hỏi số bất kỳ.'),
  erliang:G('二 / 两','二 và 两','Hai kiểu “hai”','Trước lượng từ dùng 两; đếm số, số thứ tự, số nhà dùng 二.'),
  liangci:G('量词','Lượng từ','Vua lượng từ','Số từ + lượng từ + danh từ: 两瓶水, 这本词典.'),
  qian:G('钱','Cách nói số tiền','Đếm tiền như chớp','块 (元), 毛 (角), 分: 九块四毛.')
},[
  S('s1','多少钱|一瓶','Duōshao qián yì píng?','Bao nhiêu tiền một chai?','jiduoshao'),
  S('s2','你|买|几|瓶','Nǐ mǎi jǐ píng?','Bạn mua mấy chai?','jiduoshao'),
  S('s3','我|买|两|瓶|啤酒','Wǒ mǎi liǎng píng píjiǔ.','Tôi mua hai chai bia.','erliang'),
  S('s4','我|要|这|本|小词典','Wǒ yào zhè běn xiǎo cídiǎn.','Tôi lấy quyển từ điển nhỏ này.','liangci'),
  S('s5','一共|是|九块|四毛钱','Yígòng shì jiǔ kuài sì máo qián.','Tổng cộng chín đồng bốn hào.','qian')
],[
  H('h1','Shòuhuòyuán 售货员','你买几瓶？','我买两瓶。|两瓶。',['我买二瓶。~Trước lượng từ dùng 两, không dùng 二.','我买两啤酒。~Thiếu lượng từ: 两瓶啤酒.'],'erliang'),
  H('h2','Dàwèi 大卫','多少钱一瓶？','三块五。|三块五一瓶。',['三五块。~Cách đọc tiền: 三块五.','三块五毛一。~Cách đọc sai: 三块五.'],'qian'),
  H('h3','Shòuhuòyuán 售货员','你要哪本呢？','我要这本小词典。',['我要这个本小词典。~Cấu trúc: 这 + lượng từ + danh từ: 这本小词典.','我要本这小词典。~Thứ tự: 这 + 本 + danh từ.'],'liangci'),
  H('h4','Mǎlì 玛丽','一共多少钱？','一共九块四毛钱。|九块四。',['一共九四块。~Cách đọc tiền: 九块四.','一共多少钱九块四。~Không lặp 多少钱 khi đáp.'],'qian'),
  H('h5','Mǎlì 玛丽','你有几本书？','我有五本书。',['我有五书。~Thiếu lượng từ: 五本书.','我有几本书。~Phải nêu số cụ thể.'],'jiduoshao')
],[
  D('d1','你买_瓶？','几|哪|谁','Hỏi số nhỏ có lượng từ: 几瓶.','jiduoshao'),
  D('d2','我买_瓶水。','两|二|多少','Trước lượng từ dùng 两.','erliang'),
  D('d3','二号楼 = _号楼。','二|两|几','Số nhà đọc 二, không dùng 两.','erliang'),
  D('d4','我要这_小词典。','本|瓶|条','Lượng từ của sách / từ điển: 本.','liangci'),
  D('d5','三_五。','块|个|瓶','Đọc tiền: 三块五.','qian')
],[
  T('t1','Bao nhiêu tiền một chai?','多少|钱|一瓶','几|吗','Duōshao qián yì píng?','jiduoshao'),
  T('t2','Tôi mua hai chai bia.','我|买|两|瓶|啤酒','二|吗','Wǒ mǎi liǎng píng píjiǔ.','erliang'),
  T('t3','Tổng cộng chín đồng bốn hào.','一共|是|九块|四毛钱','吗|几','Yígòng shì jiǔ kuài sì máo qián.','qian',1)
]),

B(10,'你家有几口人','Gia đình bạn có mấy người?',{
  kou:G('几口人','Hỏi số người trong nhà','Gia đình mấy người','你家有几口人？ — 我家有 + số + 口人; 口 đếm thành viên gia đình.'),
  haiyou:G('还有','还有 bổ sung','Còn nữa nhé','……，还有 + số + lượng từ + danh từ: bổ sung thêm.'),
  duiba:G('对吧','……，对吧？','Đúng không nè','Xác nhận: ……，对吧？ — 对。/ 不对，还有……')
},[
  S('s1','你家|有|几口人','Nǐ jiā yǒu jǐ kǒu rén?','Nhà bạn có mấy người?','kou'),
  S('s2','我家|有|五口人','Wǒ jiā yǒu wǔ kǒu rén.','Nhà mình có năm người.','kou'),
  S('s3','现在|中国家庭|一般|只有|一个孩子','Xiànzài Zhōngguó jiātíng yìbān zhǐyǒu yí ge háizi.','Hiện nay gia đình Trung Quốc thường chỉ có một con.','kou'),
  S('s4','不对|，|还有|一条狗','Bú duì, hái yǒu yì tiáo gǒu.','Không đúng, còn có một con chó.','haiyou'),
  S('s5','六口|，|对吧','Liù kǒu, duì ba?','Sáu người, đúng không?','duiba')
],[
  H('h1','Mǎlì 玛丽','你家有几口人？','我家有五口人。',['我家有五个口人。~Lượng từ của số người trong nhà là 口: 五口人.','我家有几口人。~Phải nêu số cụ thể.'],'kou'),
  H('h2','Zhāng Hóng 张红','一共六口人？','不，七口。',['不，七个口。~Dùng 口 để đếm thành viên: 七口.','不，还有七口。~“还有” dùng để bổ sung thêm; ở đây đáp thẳng số: 七口.'],'kou'),
  H('h3','Mǎlì 玛丽','你没有哥哥姐姐吗？','没有，现在中国家庭一般只有一个孩子。',['不有，我一个孩子。~Phủ định của 有 là 没有.','没有，只有一个孩子家庭中国。~Định ngữ đứng trước danh từ: 中国家庭.'],'kou'),
  H('h4','Zhāng Hóng 张红','六口，对吧？','不对，还有一条狗。|对。',['不对，有还一条狗。~还 đứng trước 有: 还有.','不对吧，还有一条狗。~Đáp “không đúng” không thêm 吧.'],'duiba')
],[
  D('d1','你家有几_人？','口|个|只','Đếm thành viên gia đình dùng 口.','kou'),
  D('d2','我家有爸爸、妈妈，_有一条狗。','还|再|很','Bổ sung thêm: 还有.','haiyou'),
  D('d3','六口，_？','对吧|什么|谁','Xác nhận: 对吧？','duiba'),
  D('d4','现在中国家庭一般_有一个孩子。','只|都|也','只有 = chỉ có.','kou'),
  D('d5','我家有_口人。','五|几个|什么','Nêu số cụ thể rồi 口人.','kou')
],[
  T('t1','Nhà bạn có mấy người?','你家|有|几口人','吗|多少','Nǐ jiā yǒu jǐ kǒu rén?','kou'),
  T('t2','Nhà mình có năm người.','我家|有|五口人','几|吗','Wǒ jiā yǒu wǔ kǒu rén.','kou'),
  T('t3','Không đúng, còn có một con chó.','不对|，|还有|一条狗','吧|没','Bú duì, hái yǒu yì tiáo gǒu.','haiyou',1)
])

]);
})();
