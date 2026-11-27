// Bài ngữ pháp 【新5.11】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.11", title:"语气副词：毕竟、居然、的确、反而、刚好、可……", vi:"毕竟, 居然, 的确, 反而, 刚好, 可 — dù sao, vậy mà, quả thật…", tag:"词类 · 副词",
goals:[
 "Dùng <b>毕竟</b> (dù sao cũng), <b>居然</b> (vậy mà).",
 "Dùng <b>的确</b> (quả thật), <b>刚好</b> (vừa khéo), <b>反而</b> (trái lại).",
 "Dùng <b>可</b> để nhấn mạnh lời dặn, cảm thán."],
intro:"Điểm này còn gồm 反正, 根本, 果然, 简直, 绝对, 白 (xem 【三19】).",
rules:[
 {t:"S + 毕竟 + sự thật", sub:"（1）毕竟", fx:[["S",""],["毕竟",null],["sự thật",""]], mean:"Dù sao cũng (nêu lý do để thông cảm).",
  ex:[["别怪他，{1|他}{2|毕竟}{3|还是个孩子}。","Bié guài tā, tā bìjìng háishi gè háizi.","Đừng trách nó, dù sao nó vẫn là trẻ con."]]},
 {t:"S + 居然 / 反而 + V", sub:"（2）trái dự đoán", fx:[["S",""],["居然 / 反而",null],["V / Adj",""]], mean:"居然 không ngờ · 反而 lại còn (ngược lại).",
  ex:[["{1|他}{2|居然}{3|忘了自己的生日}。","Tā jūrán wàngle zìjǐ de shēngrì.","Vậy mà anh ấy quên sinh nhật mình."],
      ["吃了药，{1|他}{2|反而}{3|更难受了}。","Chīle yào, tā fǎn'ér gèng nánshòu le.","Uống thuốc xong anh ấy lại khó chịu hơn."]]},
 {t:"的确 / 刚好 + V / Adj", sub:"（3）xác nhận, trùng khớp", fx:[["S",""],["的确 / 刚好",null],["V / Adj",""]], mean:"的确 quả đúng · 刚好 vừa khéo.",
  ex:[["{1|这本书}{2|的确}{3|值得看}。","Zhè běn shū díquè zhídé kàn.","Cuốn sách này quả thật đáng đọc."],
      ["{1|我身上的钱}{2|刚好}{3|够}。","Wǒ shēnshang de qián gānghǎo gòu.","Tiền trong người tôi vừa đủ."]]},
 {t:"(你) 可 + 要 / 别 + V", sub:"（4）可", fx:[["S",""],["可",null],["要 / 别 / 千万…",""]], mean:"Nhấn mạnh lời dặn: nhớ đấy.",
  ex:[["{1|你}{2|可}{3|别忘了}！","Nǐ kě bié wàng le!","Bạn đừng quên đấy!"]]}],
cmp:[
 {vn:"Cuối cùng cậu cũng đến!", zh:"你[可]来了！", py:"Nǐ kě lái le!", ok:true, why:"可 nhấn mạnh điều mong mãi."}],
ex:[
 ["[毕竟]是老朋友，帮个忙没什么。","Bìjìng shì lǎo péngyou, bāng gè máng méi shénme.","Dù sao cũng là bạn cũ, giúp tí có gì đâu."],
 ["这么晚了，他[居然]还没回来。","Zhème wǎn le, tā jūrán hái méi huílai.","Muộn thế này mà anh ấy vẫn chưa về."],
 ["你来得[刚好]，我们正要开饭。","Nǐ lái de gānghǎo, wǒmen zhèng yào kāifàn.","Bạn đến vừa khéo, chúng tôi sắp ăn."]],
errs:[
 {bad:"毕竟他还是个孩子吗？", good:"他毕竟还是个孩子。", why:"毕竟 dùng trong câu kể nêu lý do."},
 {bad:"居然他不来。", good:"他居然不来。", why:"居然 đứng sau chủ ngữ."},
 {bad:"我很的确喜欢。", good:"我的确很喜欢。", why:"的确 đứng trước 很."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他＿刚来，很多事还不懂。", vi:"Dù sao anh ấy mới đến, nhiều việc chưa biết.", o:["毕竟","居然","反而"], a:0, why:"Nêu lý do thông cảm."},
  {q:"这么贵的东西，他＿丢了！", vi:"Đồ đắt thế mà anh ấy làm mất!", o:["居然","的确","刚好"], a:0, why:"Không ngờ."},
  {q:"这里＿很安静。", vi:"Ở đây quả thật yên tĩnh.", o:["的确","居然的","可要"], a:0, why:"Xác nhận → 的确."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","可","别","忘了"], a:"你可别忘了！", vi:"Bạn đừng quên đấy!"},
  {w:["他","居然","忘了","自己的","生日"], a:"他居然忘了自己的生日。", vi:"Vậy mà anh ấy quên sinh nhật mình."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Đừng trách nó, dù sao nó vẫn là trẻ con.", a:"别怪他，他毕竟还是个孩子。/ 别怪他，他毕竟还是孩子。"}]}],
rel:["三19","新4.12","新5.39"]
};
