// Bài ngữ pháp 【新4.59】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.59", title:"转折复句：尽管……，但是……；……，然而……", vi:"Mặc dù … nhưng; … tuy nhiên …; … thì … thật nhưng", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>尽管……，但是 / 可是……</b>: mặc dù … nhưng.",
 "Dùng <b>然而</b>: tuy nhiên (văn viết).",
 "Ôn <b>X是X，就是 / 不过……</b> (【三68】)."],
intro:"尽管 nói <b>sự thật đã có</b> (như 虽然), khác 即使 (giả định).",
rules:[
 {t:"尽管 + sự thật，但是 / 可是 + …", sub:"（1）尽管", fx:[["尽管",null],["sự thật",""],["，",""],["但是 / 可是",null],["điều ngược lại",""]], mean:"Mặc dù … nhưng.",
  ex:[["{1|尽管}{2|天气很冷}，{3|但是}{4|他还是去游泳了}。","Jǐnguǎn tiānqì hěn lěng, dànshì tā háishi qù yóuyǒng le.","Mặc dù trời lạnh, anh ấy vẫn đi bơi."]]},
 {t:"Vế 1，然而 + …", sub:"（2）然而", fx:[["vế 1",""],["，",""],["然而",null],["vế trái ý",""]], mean:"Tuy nhiên, thế nhưng.",
  ex:[["{1|大家都以为他会放弃}，{2|然而}{3|他坚持下来了}。","Dàjiā dōu yǐwéi tā huì fàngqì, rán'ér tā jiānchí xialai le.","Ai cũng tưởng anh ấy bỏ cuộc, thế nhưng anh ấy đã trụ được."]]},
 {t:"X 是 X，就是 / 不过 …", sub:"（3）", fx:[["X是X",""],["，",""],["就是 / 不过",null],["điểm trừ",""]], mean:"… thì … thật, nhưng.",
  ex:[["{1|好看是好看}，{2|就是}{3|太贵了}。","Hǎokàn shì hǎokàn, jiùshì tài guì le.","Đẹp thì đẹp thật, có điều đắt quá."]]}],
cmp:[
 {vn:"Mặc dù rất bận, thầy vẫn giúp tôi.", zh:"[尽管]很忙，老师[还是]帮了我。", py:"Jǐnguǎn hěn máng, lǎoshī háishi bāngle wǒ.", ok:true, why:"Vế sau có thể dùng 还是."}],
ex:[
 ["[尽管]他很努力，[可是]成绩还是不太好。","Jǐnguǎn tā hěn nǔlì, kěshì chéngjì háishi bú tài hǎo.","Dù em ấy cố gắng nhưng thành tích vẫn chưa tốt."],
 ["他看起来很年轻，[然而]已经五十岁了。","Tā kàn qilai hěn niánqīng, rán'ér yǐjīng wǔshí suì le.","Trông anh ấy trẻ, thế mà đã 50 tuổi."],
 ["[尽管]下着雨，比赛[仍然]按时开始。","Jǐnguǎn xiàzhe yǔ, bǐsài réngrán ànshí kāishǐ.","Dù đang mưa, trận đấu vẫn bắt đầu đúng giờ."]],
errs:[
 {bad:"尽管明天下雨，我们也去。（chưa xảy ra）", good:"即使明天下雨，我们也去。", why:"Giả định dùng 即使."},
 {bad:"尽管很忙，所以他帮了我。", good:"尽管很忙，他还是帮了我。", why:"尽管 đi với ý trái ngược."},
 {bad:"然而尽管他很累。", good:"尽管他很累，可是还在工作。", why:"尽管 cần vế chính đi sau."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿很累，但是他还在工作。", vi:"Mặc dù mệt, anh ấy vẫn làm việc.", o:["尽管","即使吗","因为"], a:0, why:"Sự thật → 尽管."},
  {q:"我们准备了很久，＿比赛取消了。", vi:"Chúng tôi chuẩn bị lâu, thế nhưng trận đấu bị hủy.", o:["然而","于是","因此"], a:0, why:"Trái ý → 然而."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["尽管","天气很冷，","但是","他还是","去游泳了"], a:"尽管天气很冷，但是他还是去游泳了。", vi:"Mặc dù trời lạnh, anh ấy vẫn đi bơi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Dù em ấy rất cố gắng nhưng thành tích vẫn chưa tốt (dùng 尽管).", a:"尽管他很努力，可是成绩还是不太好。/ 尽管他很努力，但是成绩还是不太好。"}]}],
rel:["三68","二65","新4.64"]
};
