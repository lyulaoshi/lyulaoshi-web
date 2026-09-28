// Bài ngữ pháp 【一12】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一12", title:"频率、重复副词：常、常常、再", vi:"Phó từ tần suất, lặp lại — thường, lại (lần nữa)", tag:"词类 · 副词",
goals:[
 "Dùng <b>常 / 常常</b> (thường, hay) trước động từ; phủ định là <b>不常</b>.",
 "Dùng <b>再¹</b> cho việc <b>sẽ</b> làm lại (chưa xảy ra).",
 "Không dùng 再 cho việc đã lặp lại trong quá khứ (dùng 又 【二16】)."],
intro:"常、常常、再 đều đứng <b>sau chủ ngữ, trước động từ</b>.",
rules:[
 {t:"常 / 常常: thường, hay", sub:"频率", fx:[["Chủ ngữ",""],["常 / 常常",null],["Động từ",""]], mean:"Việc xảy ra nhiều lần, thành thói quen. 常常 thường dùng hơn trong khẩu ngữ.",
  ex:[["他[常]去饭店吃饭。","Tā cháng qù fàndiàn chī fàn.","Anh ấy hay đi nhà hàng ăn cơm.","等级标准"],
      ["她[常常]不吃早饭。","Tā chángcháng bù chī zǎofàn.","Cô ấy thường không ăn sáng.","等级标准"]]},
 {t:"再: lại, nữa (sẽ lặp lại)", sub:"再¹", fx:[["Chủ ngữ",""],["(thời gian)",""],["再",null],["Động từ",""]], mean:"Lặp lại một việc trong <b>tương lai</b>: lần sau, mai, lát nữa lại…",
  ex:[["今天的电影太好看了，我们明天[再]去看吧。","Jīntiān de diànyǐng tài hǎokàn le, wǒmen míngtiān zài qù kàn ba.","Phim hôm nay hay quá, mai chúng mình lại đi xem nữa nhé.","等级标准"],
      ["请您[再]说一遍。","Qǐng nín zài shuō yí biàn.","Xin thầy nói lại một lần nữa."]]}],
notes:[
 {t:"Phủ định", html:"<span class='zh'>不常</span> = không hay (✗ <span class='zh'>不常常</span>): <span class='zh'>我不常喝咖啡。</span>"},
 {t:"再 hay 又?", html:"Chưa xảy ra → <b>再</b>: <span class='zh'>明天再来。</span> Đã xảy ra → <b>又</b> 【二16】: <span class='zh'>他昨天又来了。</span>"}],
cmp:[
 {vn:"Tôi hay uống trà.", zh:"我[常常]喝茶。", py:"Wǒ chángcháng hē chá.", ok:true, why:"“hay / thường” đứng trước động từ — giống tiếng Việt."},
 {vn:"Mai lại đến nhé.", zh:"明天[再]来吧。", py:"Míngtiān zài lái ba.", ok:true, why:"“lại” (tương lai) = 再."},
 {vn:"Xin nói lại lần nữa.", zh:"请[再]说一遍。", py:"Qǐng zài shuō yí biàn.", ok:true, why:"“nữa” ở cuối câu tiếng Việt → 再 đứng trước động từ."}],
ex:[
 ["我[常常]跟朋友一起打球。","Wǒ chángcháng gēn péngyou yìqǐ dǎ qiú.","Tôi thường chơi bóng cùng bạn."],
 ["他不[常]看电视。","Tā bù cháng kàn diànshì.","Anh ấy không hay xem ti vi."],
 ["我们下午[再]说吧。","Wǒmen xiàwǔ zài shuō ba.","Chiều mình nói tiếp nhé."],
 ["欢迎你[再]来！","Huānyíng nǐ zài lái!","Hoan nghênh bạn lại đến!"]],
errs:[
 {bad:"他去常饭店吃饭。", good:"他常去饭店吃饭。", why:"常 đứng trước động từ đầu tiên."},
 {bad:"我不常常喝咖啡。", good:"我不常喝咖啡。", why:"Phủ định dùng 不常."},
 {bad:"昨天他再来了。", good:"昨天他又来了。", why:"Việc đã xảy ra dùng 又 【二16】."},
 {bad:"我们明天去再看吧。", good:"我们明天再去看吧。", why:"再 đứng trước cụm động từ 去看."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy thường không ăn sáng.", o:["她常常不吃早饭。","她不吃常常早饭。","她吃早饭不常常。"], a:0, why:"常常 + 不 + V."},
  {q:"Tôi không hay xem ti vi.", o:["我不常常看电视。","我不常看电视。","我常不看电视看。"], a:1, why:"不常."},
  {q:"Xin nói lại một lần nữa.", o:["请说再一遍。","请再说一遍。","请说一遍再。"], a:1, why:"再 + V."},
  {q:"Mai chúng mình lại đi nhé.", o:["我们明天再去吧。","我们明天又去吧。","我们再明天去吧。"], a:0, why:"Tương lai → 再."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","常","去","饭店","吃饭"], a:"他常去饭店吃饭。", vi:"Anh ấy hay đi nhà hàng ăn cơm."},
  {w:["我们","明天","再","去","看","吧"], a:"我们明天再去看吧。", vi:"Mai chúng mình lại đi xem nhé."},
  {w:["欢迎","你","再","来"], a:"欢迎你再来！", vi:"Hoan nghênh bạn lại đến!"}]},
 {t:"C. Điền 再 hoặc 又", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"这个菜很好吃，我想＿＿吃一次。", vi:"Món này ngon lắm, tôi muốn ＿＿ ăn một lần nữa.", a:"再", why:"Muốn ăn lại — chưa xảy ra."},
  {q:"他昨天来了，今天＿＿来了。", vi:"Hôm qua anh ấy đến rồi, hôm nay ＿＿ đến.", a:"又", why:"Đã xảy ra 【二16】."},
  {q:"我没听懂，请您＿＿说一遍。", vi:"Em chưa nghe hiểu, xin thầy ＿＿ nói một lần nữa.", a:"再"}]}],
rel:["二16","一11","三15","二62"]
};
