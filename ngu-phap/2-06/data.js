// Bài ngữ pháp 【二06】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二06", title:"人称代词：别人、大家、它、它们、咱、咱们、自己", vi:"Đại từ nhân xưng mở rộng — người khác, mọi người, nó, chúng ta, tự mình", tag:"词类 · 代词",
goals:[
 "Dùng <b>别人</b> (người khác), <b>大家</b> (mọi người), <b>自己</b> (tự mình, bản thân).",
 "Dùng <b>它 / 它们</b> cho con vật, đồ vật.",
 "Phân biệt <b>咱们</b> (chúng ta — gồm cả người nghe) với <b>我们</b>."],
intro:"HSK 2 bổ sung các đại từ giúp nói tự nhiên hơn. Quan trọng nhất: <b>咱们</b> luôn bao gồm người nghe (“chúng ta”), còn 我们 có thể không (“chúng tôi”).",
rules:[
 {t:"别人 · 大家 · 自己", sub:"", fx:[["别人",null],["·",""],["大家",null],["·",""],["自己",null]], mean:"别人 người khác · 大家 mọi người · 自己 tự mình / chính mình (đứng sau đại từ để nhấn mạnh: 我自己).",
  ex:[["我想听听[别人]的意见。","Wǒ xiǎng tīngting biérén de yìjiàn.","Tôi muốn nghe ý kiến của người khác.","等级标准"],
      ["[大家]一起唱歌吧。","Dàjiā yìqǐ chàng gē ba.","Mọi người cùng hát nhé.","等级标准"],
      ["你一定要相信[自己]。","Nǐ yídìng yào xiāngxìn zìjǐ.","Bạn nhất định phải tin vào bản thân.","等级标准"],
      ["[自己]的事[自己]做。","Zìjǐ de shì zìjǐ zuò.","Việc của mình thì tự mình làm.","等级标准"]]},
 {t:"它 · 它们: nó, chúng (vật, con vật)", sub:"", fx:[["它 / 它们",null]], mean:"Đọc tā / tāmen như 他, 她.",
  ex:[["那个书包很好看，我喜欢[它]的颜色。","Nàge shūbāo hěn hǎokàn, wǒ xǐhuan tā de yánsè.","Cái cặp đó rất đẹp, tôi thích màu của nó.","等级标准"],
      ["我家有猫有狗，[它们]都是我的朋友。","Wǒ jiā yǒu māo yǒu gǒu, tāmen dōu shì wǒ de péngyou.","Nhà tôi có mèo có chó, chúng đều là bạn của tôi.","等级标准"]]},
 {t:"咱 · 咱们: chúng ta (gồm người nghe)", sub:"", fx:[["咱 / 咱们",null]], mean:"Khẩu ngữ, thân mật.",
  ex:[["[咱]一起走吧。","Zán yìqǐ zǒu ba.","Mình cùng đi nhé.","等级标准"],
      ["明天[咱们]去动物园，怎么样？","Míngtiān zánmen qù dòngwùyuán, zěnmeyàng?","Mai chúng ta đi sở thú, thế nào?","等级标准"]]}],
cmp:[
 {vn:"Chúng tôi đi, các bạn ở lại.", zh:"我们走，你们留下。", py:"Wǒmen zǒu, nǐmen liúxia.", ok:false, tag:"(không dùng 咱们)", why:"Không gồm người nghe → 我们."},
 {vn:"Chúng ta cùng đi nhé!", zh:"[咱们]一起走吧！", py:"Zánmen yìqǐ zǒu ba!", ok:true, why:"Gồm cả người nghe → 咱们 (hoặc 我们)."},
 {vn:"Tôi thích màu của nó (cái cặp).", zh:"我喜欢[它]的颜色。", py:"Wǒ xǐhuan tā de yánsè.", ok:true, why:"Đồ vật → 它."}],
ex:[
 ["[大家]好！","Dàjiā hǎo!","Chào mọi người!"],
 ["这是我[自己]做的菜。","Zhè shì wǒ zìjǐ zuò de cài.","Đây là món tôi tự nấu."],
 ["别拿[别人]的东西。","Bié ná biérén de dōngxi.","Đừng lấy đồ của người khác."],
 ["我有一只猫，[它]很可爱。","Wǒ yǒu yì zhī māo, tā hěn kě'ài.","Tôi có một con mèo, nó rất đáng yêu."]],
errs:[
 {bad:"咱们走，你们留下。", good:"我们走，你们留下。", why:"咱们 phải gồm người nghe."},
 {bad:"那本书很好，我喜欢他。", good:"那本书很好，我喜欢它。", why:"Đồ vật viết 它."},
 {bad:"大家们好！", good:"大家好！", why:"大家 đã là số nhiều."},
 {bad:"我做自己。（ý: tự tôi làm）", good:"我自己做。", why:"自己 đứng trước động từ khi nghĩa “tự làm”."}],
practice:[
 {t:"A. Chọn đại từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿＿好！我是新老师。(chào cả lớp)", vi:"Chào ＿＿! Tôi là giáo viên mới.", o:["大家","别人","自己"], a:0, why:"Mọi người."},
  {q:"我家有一只狗，＿＿很聪明。", vi:"Nhà tôi có một con chó, ＿＿ rất thông minh.", o:["他","它","她"], a:1, why:"Con vật → 它."},
  {q:"这是我＿＿做的。(tự tay)", vi:"Đây là do tôi ＿＿ làm.", o:["别人","大家","自己"], a:2, why:"Tự mình."},
  {q:"Chúng ta (gồm bạn) cùng đi nhé:", o:["咱们一起走吧。","我们们一起走吧。","他们一起走吧。"], a:0, why:"咱们."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["大家","一起","唱歌","吧"], a:"大家一起唱歌吧。", vi:"Mọi người cùng hát nhé."},
  {w:["你","一定","要","相信","自己"], a:"你一定要相信自己。", vi:"Bạn nhất định phải tin vào bản thân."},
  {w:["我","想","听听","别人的","意见"], a:"我想听听别人的意见。", vi:"Tôi muốn nghe ý kiến người khác."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Việc của mình thì tự mình làm.", a:"自己的事自己做。"},
  {q:"Mai chúng ta đi sở thú, thế nào?", a:"明天咱们去动物园，怎么样？"},
  {q:"Cái cặp này đẹp, tôi thích màu của nó.", a:"这个书包很好看，我喜欢它的颜色。"}]}],
rel:["一05","二07","一10","三08"]
};
