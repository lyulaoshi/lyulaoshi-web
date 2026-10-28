// Vượt ải 闯关 — đề ôn 汉语会话301句 Bài 11–14 (bài bản cũ: không chia slide, điểm ngữ pháp không có `s`, link về đầu bài). CHỜ CÔ DUYỆT.
// Câu lấy từ 8 câu mẫu (sentences), hội thoại, thẻ ngữ pháp và các bài tập (quizRedup, quizMoney, qtyQuiz, completeQuiz, fillQuiz, dlgQuiz) trong courses/301/bai-N.
// Đáp án nhiễu + lời giải thích do Claude soạn nháp. Khuôn dữ liệu giống de-tttc.js; id sách `301` dùng chung với de-301.js.
(function(){
const S=(id,p,py,vi,g)=>({id,p:p.split('|'),py,vi,g});
const H=(id,who,q,ok,bad,g)=>({id,who,q,ok:ok.split('|'),bad:bad.map(b=>b.split('~')),g});
const D=(id,s,o,why,g)=>({id,s,o:o.split('|'),ok:0,why,g});
const T=(id,vi,p,nhieu,py,g,boss)=>({id,vi,p:p.split('|'),nhieu:nhieu.split('|'),py,g,boss:boss?1:0});
const B=(n,zh,vi,gr,sap,hoi,dien,dich)=>({id:'301-bai-'+n,mon:'301',n,zh,vi:'Bài '+n+' · '+vi,lk:'../../301/bai-'+n+'/',gr,sap,hoi,dien,dich});
const G=(zh,vi,huy,ct)=>({zh,vi,huy,ct});
const JU=G('会话句子','Mẫu câu trong bài','Đàm thoại giỏi','Ôn các mẫu câu và hội thoại của bài.');

window.VA_BAI=(window.VA_BAI||[]).concat([

B(11,'我要买橘子','Tôi muốn mua quýt',{
  le:G('了','Trợ từ ngữ khí 了','Có gì đó đổi rồi','了 cuối câu: có tình huống thay đổi mới; 不要了 = “không cần nữa” (khác 不要).'),
  chongdie:G('动词重叠','Động từ trùng điệp AA / ABAB','Thử một chút','AA (尝尝) hoặc ABAB (休息休息): làm nhanh, nhẹ, thử một chút.'),
  qian:G('钱数','Cách đọc tiền','Đếm tiền như chớp','块 / 毛 / 分; hào trống thì thêm 零: 十块零五分; trước lượng từ dùng 两.'),
  ju:JU
},[
  S('s1','您|尝尝','Nín chángchang.','Mời ông/bà nếm thử.','chongdie'),
  S('s2','橘子|太|贵|了','Júzi tài guì le.','Quýt đắt quá.','le'),
  S('s3','苹果|多少钱|一斤','Píngguǒ duōshao qián yì jīn?','Táo bao nhiêu tiền một cân?','qian'),
  S('s4','您|还|要|别的|吗','Nín hái yào biéde ma?','Ông/bà còn cần cái khác không?','ju'),
  S('s5','我|要|买|橘子','Wǒ yào mǎi júzi.','Tôi muốn mua quýt.','ju'),
  S('s6','我|不要|了','Wǒ bú yào le.','Tôi không cần nữa.','le'),
  S('s7','两块|五|一斤','Liǎng kuài wǔ yì jīn.','Hai đồng năm một cân.','qian')
],[
  H('h1','Shòuhuòyuán 售货员','您要什么？','我要苹果。|我要买橘子。',['我要什么。~Phải nêu thứ cần mua cụ thể.','苹果要我。~Trật tự: chủ ngữ + 要 + tân ngữ.'],'ju'),
  H('h2','Dàwèi 大卫','苹果多少钱一斤？','两块五一斤。|两块五（毛）。',['多少钱两块五一斤。~Không lặp 多少钱: đáp bằng giá cụ thể.','两五块一斤。~Cách đọc tiền: 两块五.'],'qian'),
  H('h3','Shòuhuòyuán 售货员','您要多少？','两斤。|我要两斤。',['我要二斤。~Trước lượng từ dùng 两, không dùng 二: 两斤.','要多少。~Phải nêu số lượng cụ thể.'],'qian'),
  H('h4','Shòuhuòyuán 售货员','您还要别的吗？','不要了。',['不了要。~Trật tự: 不要了.','要不了。~Nghĩa khác (“không dùng nổi”), không phải “không cần nữa”.'],'le'),
  H('h5','Mǎlì 玛丽','那种好不好？','您尝尝。',['您尝尝了。~Động từ lặp lại biểu thị thử một chút, không thêm 了: 您尝尝.','您尝尝尝。~Chỉ lặp một lần: 尝尝.'],'chongdie'),
  H('h6','Shòuhuòyuán 售货员','橘子太贵了。','那种便宜。|那种便宜，您尝尝。',['那种便宜了。~Không cần thêm 了: 那种便宜.','那种便宜太。~太 đứng trước tính từ: 太便宜了.'],'ju')
],[
  D('d1','橘子太贵_。','了|的|吗','太……了 diễn tả mức độ cao, kết thúc bằng 了.','le'),
  D('d2','您尝_。','尝|了|吗','Động từ đơn âm lặp lại AA: 尝尝.','chongdie'),
  D('d3','请你_这段录音，回答问题。','听听|听了|听的','Động từ lặp lại AA: 听听 (nghe thử).','chongdie'),
  D('d4','这本书很有意思，你_吧。','看看|看了|看的','看 → 看看 (xem thử một chút).','chongdie'),
  D('d5','你工作太累了，先_吧。','休息休息|休休息息|休息息息','Động từ song âm lặp lại ABAB: 休息休息.','chongdie'),
  D('d6','不懂的地方，你可以_老师。','问问|问了|问的','问 → 问问 (hỏi thử một chút).','chongdie'),
  D('d7','十块_五分。','零|二|十','Hàng hào trống thì thêm 零: 十块零五分.','qian')
],[
  T('t1','Quýt đắt quá.','橘子|太|贵|了','吗|很','Júzi tài guì le.','le'),
  T('t2','Táo bao nhiêu tiền một cân?','苹果|多少钱|一斤','几|吗','Píngguǒ duōshao qián yì jīn?','qian'),
  T('t3','Ông/bà còn cần cái khác không?','您|还|要|别的|吗','了|什么','Nín hái yào biéde ma?','ju',1)
]),

B(12,'我想买件毛衣','Tôi muốn mua áo len',{
  le:G('了','形容词 + 了','Lạnh rồi nhé','Tính từ + 了: có sự thay đổi mới, ví dụ 天冷了.'),
  zhuwei:G('主谓谓语句','Câu vị ngữ chủ vị','Chủ ngữ lớn, chủ ngữ nhỏ','Vị ngữ là một cụm chủ–vị: 他身体很好, 星期天人太多.'),
  neng:G('能愿动词','Động từ năng nguyện','Muốn là làm','想 / 要 / 可以 đứng trước động từ; phủ định 不想 (không dùng 不要); câu hỏi chính phản: 想不想.'),
  jile:G('极了','Tính từ + 极了','Cực kỳ','Tính từ + 极了: mức độ rất cao, không có 得.'),
  liang:G('量词','Lượng từ','Vua lượng từ','瓶, 件, 口, 斤, 个: số từ + lượng từ + danh từ.'),
  ju:JU
},[
  S('s1','天|冷|了','Tiān lěng le.','Trời lạnh rồi.','le'),
  S('s2','我|想|买|件|毛衣','Wǒ xiǎng mǎi jiàn máoyī.','Tôi muốn mua chiếc áo len.','neng'),
  S('s3','星期天|人|太|多','Xīngqītiān rén tài duō.','Chủ nhật người đông quá.','zhuwei'),
  S('s4','他|身体|很|好','Tā shēntǐ hěn hǎo.','Sức khỏe anh ấy rất tốt.','zhuwei'),
  S('s5','这件|毛衣|我|可以|试试|吗','Zhè jiàn máoyī wǒ kěyǐ shìshi ma?','Chiếc áo len này tôi có thể thử không?','neng'),
  S('s6','好|极|了','Hǎo jí le.','Tốt cực kỳ!','jile'),
  S('s7','我|工作|很|忙','Wǒ gōngzuò hěn máng.','Công việc của tôi rất bận.','zhuwei')
],[
  H('h1','Mǎlì 玛丽','我们什么时候去？','星期天去，怎么样？|明天下午去吧。',['去星期天，怎么样？~Thời gian đứng trước động từ: 星期天去.','星期天去，什么怎么样？~Hỏi ý kiến dùng 怎么样, không thêm 什么.'],'ju'),
  H('h2','Dàwèi 大卫','星期天去，怎么样？','星期天人太多。|星期天人太多，明天下午去吧。',['星期天太多人。~Câu vị ngữ chủ vị: 星期天人太多 (chủ ngữ nhỏ 人 đứng trước).','星期天人多太。~太 đứng trước tính từ: 太多.'],'zhuwei'),
  H('h3','Dàwèi 大卫','这件毛衣我可以试试吗？','您试一下儿吧。|可以，您试试。',['可以吗试试。~Chỉ cuối câu hỏi mới có 吗; trả lời không lặp.','您试吧试一下儿。~Trật tự: 您试一下儿吧.'],'neng'),
  H('h4','Mǎlì 玛丽','你想不想去长城？','我想去。|我不想去。',['我想不想去。~Phải chọn một vế: 想 hoặc 不想.','我不要去。~Phủ định nguyện vọng dùng 不想, 不要 mang nghĩa cấm đoán.'],'neng'),
  H('h5','Dàwèi 大卫','你要喝饮料吗？','我现在不想喝。|我要喝。',['我现在不要喝。~Phủ định nguyện vọng của 要 dùng 不想; 不要 mang nghĩa “đừng”.','我现在想不喝。~不 đứng trước động từ năng nguyện: 不想喝.'],'neng'),
  H('h6','Shòuhuòyuán 售货员','这件毛衣怎么样？','不大也不小。|好极了。',['不大不也小。~Cấu trúc 不大也不小: mỗi vế có 不.','好了极。~极了 đứng sau tính từ: 好极了.'],'jile')
],[
  D('d1','天冷_，我想买件毛衣。','了|的|吗','Tính từ + 了: trạng thái mới thay đổi.','le'),
  D('d2','这件毛衣不大_不小。','也|都|很','Mẫu 不大也不小: vừa vặn.','ju'),
  D('d3','好_了！','极|很|太','Tính từ + 极了: mức độ cực cao.','jile'),
  D('d4','今天我累_了。','极|很|的','Tính từ + 极了: 累极了.','jile'),
  D('d5','他身体_好。','很|是|有','Vị ngữ tính từ cần 很, không dùng 是.','zhuwei'),
  D('d6','我_买件毛衣。','想|的|了','Nguyện vọng: 想 + động từ.','neng'),
  D('d7','我想喝一_可乐。','瓶|件|口','Lượng từ của đồ uống đựng chai: 瓶.','liang'),
  D('d8','我家有五_人。','口|件|瓶','Đếm thành viên gia đình dùng 口.','liang')
],[
  T('t1','Chủ nhật người đông quá.','星期天|人|太|多','了|很','Xīngqītiān rén tài duō.','zhuwei'),
  T('t2','Tôi muốn mua một chiếc áo len.','我|想|买|一件|毛衣','要|了','Wǒ xiǎng mǎi yí jiàn máoyī.','neng'),
  T('t3','Chiếc áo len này không to cũng không nhỏ.','这件|毛衣|不大|也|不小','很|了','Zhè jiàn máoyī bú dà yě bù xiǎo.','ju',1)
]),

B(13,'要换车','Phải chuyển xe',{
  shuangbin:G('双宾语','Câu có hai tân ngữ','Cho ai cái gì','Động từ + tân ngữ gián tiếp (người) + tân ngữ trực tiếp (vật): 给你一本书, 找我八毛钱.'),
  hui:G('会','Động từ năng nguyện 会','Biết và sẽ','会 = biết (nhờ học): 他会说汉语; 会 = có thể sẽ: 他不会来了.'),
  shuliang:G('数量词定语','Số lượng từ làm định ngữ','Số + lượng từ + danh từ','Số từ không đứng thẳng trước danh từ, phải thêm lượng từ: 两张票, 三个本子.'),
  zaiwang:G('在 / 往','在、往、去','Đi hướng nào','往 + hướng + V: 往前走; 在 + nơi chốn: 在北京.'),
  ju:JU
},[
  S('s1','这路车|到|天安门|吗','Zhè lù chē dào Tiān\'ānmén ma?','Tuyến xe này có đến Thiên An Môn không?','ju'),
  S('s2','我|买|两|张|票','Wǒ mǎi liǎng zhāng piào.','Tôi mua hai vé.','shuliang'),
  S('s3','给|你|两块钱','Gěi nǐ liǎng kuài qián.','Gửi bạn hai đồng.','shuangbin'),
  S('s4','他|找|我|八毛钱','Tā zhǎo wǒ bā máo qián.','Anh ấy trả lại tôi tám hào.','shuangbin'),
  S('s5','我|会|说|一点儿|汉语','Wǒ huì shuō yìdiǎnr Hànyǔ.','Tôi biết nói một chút tiếng Hán.','hui'),
  S('s6','到|天安门|还|有|几站','Dào Tiān\'ānmén hái yǒu jǐ zhàn?','Đến Thiên An Môn còn mấy trạm nữa?','ju'),
  S('s7','去|语言文化大学|要|换车|吗','Qù Yǔyán Wénhuà Dàxué yào huàn chē ma?','Đến Đại học Ngôn ngữ Văn hóa có phải đổi xe không?','ju')
],[
  H('h1','Mǎlì 玛丽','请问，这路车到天安门吗？','到。上车吧。|到。',['到天安门吗。~Không lặp câu hỏi; đáp 到 hoặc 不到.','天安门到这路车。~Trật tự: 这路车到天安门.'],'ju'),
  H('h2','Dàwèi 大卫','多少钱一张？','五毛。|五毛一张。',['五毛张。~Phải có 一: 五毛一张.','一张五毛钱了。~Không thêm 了: giá cả không có thay đổi.'],'ju'),
  H('h3','Dàwèi 大卫','你们会说汉语吗？','他会说一点儿。我不会。|我会说一点儿。',['我不说会。~不会: 不 đứng trước 会.','他会说汉语一点儿。~一点儿 đứng trước tân ngữ: 说一点儿汉语.'],'hui'),
  H('h4','Mǎlì 玛丽','现在九点半了，他会来吗？','他不会来了。',['他会不来了。~Phủ định của 会 là 不会: 不会来.','他不来会了。~Cấu trúc: 不会 + động từ.'],'hui'),
  H('h5','Dàwèi 大卫','去语言文化大学要换车吗？','要换车。',['要换车吗。~Không lặp 吗 khi đáp.','换车要。~Trật tự: 要 + động từ.'],'ju'),
  H('h6','Shòupiàoyuán 售票员','你买几张票？','我买两张。|我买两张票。',['我买二张票。~Trước lượng từ dùng 两, không dùng 二.','我买两票。~Thiếu lượng từ: 两张票.'],'shuliang')
],[
  D('d1','我买两_票。','张|个|本','Lượng từ của vé: 张.','shuliang'),
  D('d2','我有三_本子。','个|张|瓶','Lượng từ của vở trong bài: 个.','shuliang'),
  D('d3','他会_汉语。','说|来|吗','会 + động từ: 会说汉语.','hui'),
  D('d4','我不_做中国饭。','会|的|了','Chưa biết làm (do chưa học): 不会.','hui'),
  D('d5','他_找我八毛钱。','找|去|在','找 mang hai tân ngữ: 找我八毛钱.','shuangbin'),
  D('d6','我_你一本书。','给|去|在','给 mang hai tân ngữ: 给你一本书.','shuangbin'),
  D('d7','_前走，就是331路车站。','往|在|从','往 + hướng + động từ: 往前走.','zaiwang')
],[
  T('t1','Tôi mua hai vé.','我|买|两|张|票','个|二','Wǒ mǎi liǎng zhāng piào.','shuliang'),
  T('t2','Tôi biết nói một chút tiếng Hán.','我|会|说|一点儿|汉语','不|了','Wǒ huì shuō yìdiǎnr Hànyǔ.','hui'),
  T('t3','Đến Thiên An Môn còn mấy trạm nữa?','到|天安门|还|有|几站','吗|了','Dào Tiān\'ānmén hái yǒu jǐ zhàn?','ju',1)
]),

B(14,'我要去换钱','Tôi phải đi đổi tiền',{
  jianyu:G('兼语句','Câu kiêm ngữ','Một người hai vai','S + 请 / 让 / 叫 + O + V: O vừa là tân ngữ của động từ trước vừa là chủ ngữ của động từ sau.'),
  le:G('了','Trợ từ ngữ khí 了 (2)','Đã xảy ra rồi','你去哪儿了？ = việc đã xảy ra; phủ định 没(有) và bỏ 了; hỏi chính phản: ……了没有.'),
  neng:G('能愿动词','要 / 想 / 会 / 可以 / 能','Muốn, biết, được phép','Động từ năng nguyện đứng trước động từ; 不能 = không thể, 不会 = chưa biết, 能不能 = hỏi chính phản.'),
  ju:JU
},[
  S('s1','请|您|写|一下儿|钱数','Qǐng nín xiě yíxiàr qián shù.','Xin ông/bà viết số tiền ra.','jianyu'),
  S('s2','请|他|吃饭','Qǐng tā chīfàn.','Mời anh ấy ăn cơm.','jianyu'),
  S('s3','你|去|哪儿|了','Nǐ qù nǎr le?','Bạn đã đi đâu rồi?','le'),
  S('s4','我|没|钱|了','Wǒ méi qián le.','Tôi hết tiền rồi.','le'),
  S('s5','这儿|能|不|能|换钱','Zhèr néng bu néng huàn qián?','Ở đây có đổi tiền được không?','neng'),
  S('s6','时间|不|早|了','Shíjiān bù zǎo le.','Thời gian không còn sớm nữa.','le'),
  S('s7','我们|快|走|吧','Wǒmen kuài zǒu ba!','Chúng ta đi nhanh lên!','ju')
],[
  H('h1','Péngyou 朋友','你去哪儿了？','我去看朋友了。|我去商店了。',['我去看朋友。~Việc đã xảy ra phải có 了: 我去看朋友了.','我没去看朋友了。~Phủ định bỏ 了: 我没去看朋友.'],'le'),
  H('h2','Péngyou 朋友','你吃饭了没有？','吃了。|还没吃。|没吃。',['吃没了。~Đáp: 吃了 hoặc 没吃.','没吃了。~Phủ định bỏ 了: 没吃.'],'le'),
  H('h3','Mǎlì 玛丽','请问，这儿能不能换钱？','能。您带的什么钱？|能。',['能不能。~Phải chọn một vế: 能 hoặc 不能.','不能不能。~Không lặp: đáp 能 hoặc 不能.'],'neng'),
  H('h4','Yíngyèyuán 营业员','您带的什么钱？','美元。|美元，一百块。',['什么钱。~Phải nêu loại tiền cụ thể.','我带美元什么。~Không lặp từ để hỏi.'],'ju'),
  H('h5','Péngyou 朋友','你会说汉语吗？','我会说一点儿。|我不会。',['我会说汉语一点儿。~一点儿 đứng trước tân ngữ: 说一点儿汉语.','我不会说会。~不会 + động từ.'],'neng'),
  H('h6','Péngyou 朋友','明天你想去玩儿吗？（明天我有课）','不能去玩儿。|我也不能去。',['不能玩儿去。~Thứ tự: 能 + 去 + 玩儿.','不要去玩儿。~Từ chối vì có tiết dùng 不能; 不要 mang nghĩa cấm đoán.'],'neng')
],[
  D('d1','请您_一下儿钱数。','写|了|的','Câu kiêm ngữ: 请 + 您 + V.','jianyu'),
  D('d2','_他吃饭。','请|在|把','Mời ai làm gì: 请 + O + V.','jianyu'),
  D('d3','你去哪儿_？','了|的|吗','Hỏi việc đã xảy ra: 去哪儿了？','le'),
  D('d4','他_去商店。','没|不是|别','Phủ định việc đã xảy ra: 没 + V (bỏ 了).','le'),
  D('d5','这个汉字我不_写。','会|了|的','Chưa biết viết: 不会写.','neng'),
  D('d6','明天我有课，不_去玩儿。','能|了|的','Có tiết học nên không thể đi: 不能去玩儿.','neng'),
  D('d7','现在我_去上课，请你明天再来吧。','要|了|的','Sắp / phải đi học: 要去上课.','neng'),
  D('d8','你吃饭_没有？','了|的|吗','Hỏi chính phản: ……了没有.','le')
],[
  T('t1','Tôi hết tiền rồi.','我|没|钱|了','不|的','Wǒ méi qián le.','le'),
  T('t2','Xin ông/bà viết số tiền ra.','请|您|写|一下儿|钱数','了|吗','Qǐng nín xiě yíxiàr qián shù.','jianyu'),
  T('t3','Nghe nói trong khách sạn có thể đổi tiền.','听说|，|饭店里|可以|换钱','了|不','Tīngshuō, fàndiàn li kěyǐ huàn qián.','ju',1)
])

]);
})();
