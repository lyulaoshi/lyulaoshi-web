// Bài ngữ pháp 【二17】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二17", title:"关联副词：就", vi:"Phó từ nối 就¹ — “thì” (nối điều kiện với kết quả)", tag:"词类 · 副词",
goals:[
 "Dùng <b>就</b> ở vế sau để nối điều kiện / giả định với kết quả: “(nếu) … thì …”.",
 "Đặt 就 <b>sau chủ ngữ vế sau, trước động từ</b> — không đặt trước chủ ngữ như “thì tôi”.",
 "Kết hợp với 如果……就、……的话，就、只要……就."],
intro:"就 ở đây là <b>phó từ nối</b>: đứng ở vế sau, nối với điều kiện ở vế trước. Tiếng Việt “thì” đứng trước chủ ngữ, còn 就 đứng <b>sau</b> chủ ngữ.",
rules:[
 {t:"(如果) A，(S) 就 B", sub:"就¹", fx:[["(如果) điều kiện",""],["，Chủ ngữ",""],["就",null],["Động từ",""]], mean:"Nếu A thì B.",
  ex:[["如果明天天气好，我[就]去爬山。","Rúguǒ míngtiān tiānqì hǎo, wǒ jiù qù pá shān.","Nếu mai trời đẹp thì tôi đi leo núi.","等级标准"],
      ["你有时间的话，我们[就]一起出去走走吧。","Nǐ yǒu shíjiān dehuà, wǒmen jiù yìqǐ chūqu zǒuzou ba.","Nếu bạn có thời gian thì chúng mình cùng ra ngoài dạo nhé.","等级标准"]]}],
notes:[
 {t:"Không có từ nối ở vế trước", html:"vẫn dùng được: <span class='zh'>你不去，我就不去。</span> (Bạn không đi thì tôi cũng không đi.)"},
 {t:"Xem thêm", html:"假设复句 【二66】, 条件复句 【二67】, 一……就…… 【二69】."}],
cmp:[
 {vn:"Nếu mai mưa thì tôi không đi.", zh:"如果明天下雨，我[就]不去。", py:"Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù.", ok:true, why:"“thì tôi” → 我就 (就 sau chủ ngữ)."}],
ex:[
 ["你去，我[就]去。","Nǐ qù, wǒ jiù qù.","Bạn đi thì tôi đi."],
 ["不舒服的话，你[就]休息吧。","Bù shūfu dehuà, nǐ jiù xiūxi ba.","Nếu không khỏe thì bạn nghỉ đi."],
 ["如果你喜欢，[就]买吧。","Rúguǒ nǐ xǐhuan, jiù mǎi ba.","Nếu bạn thích thì mua đi."]],
errs:[
 {bad:"如果明天天气好，就我去爬山。", good:"如果明天天气好，我就去爬山。", why:"就 đứng sau chủ ngữ."},
 {bad:"如果你有时间，我们一起就去吧。", good:"如果你有时间，我们就一起去吧。", why:"就 đứng trước các trạng ngữ khác của vế sau."},
 {bad:"如果明天下雨，我不就去。", good:"如果明天下雨，我就不去。", why:"就 đứng trước 不."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nếu mai trời đẹp thì tôi đi leo núi.", o:["如果明天天气好，就我去爬山。","如果明天天气好，我就去爬山。","如果明天天气好，我去就爬山。"], a:1, why:"S + 就 + V."},
  {q:"Bạn không đi thì tôi cũng không đi.", o:["你不去，我就不去。","你不去，我不就去。","你不去，就我不去。"], a:0, why:"就 + 不 + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["如果","明天","天气好","我","就","去","爬山"], a:"如果明天天气好，我就去爬山。", vi:"Nếu mai trời đẹp thì tôi đi leo núi."},
  {w:["你","去","我","就","去"], a:"你去，我就去。", vi:"Bạn đi thì tôi đi."}]},
 {t:"C. Nối hai vế bằng 就", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"如果你累了 / 我们休息吧", a:"如果你累了，我们就休息吧。"},
  {q:"你喜欢的话 / 买吧", a:"你喜欢的话，就买吧。"},
  {q:"明天下雨 / 我不去公园", a:"（如果）明天下雨，我就不去公园。"}]}],
rel:["二66","二67","二69","二20"]
};
