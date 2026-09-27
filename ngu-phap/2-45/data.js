// Bài ngữ pháp 【二45】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二45", title:"还是……吧", vi:"还是……吧 — “tốt hơn là …, thôi thì … đi”", tag:"固定格式",
goals:[
 "Dùng <b>还是 + V + 吧</b> để khuyên / đề nghị lựa chọn tốt hơn sau khi cân nhắc.",
 "Phân biệt với 还是 trong câu hỏi lựa chọn 【一47】.",
 "Thường có lý do ở vế trước."],
intro:"Khi đã cân nhắc và chọn phương án tốt hơn, dùng <b>还是……吧</b>: “thôi, … đi”.",
rules:[
 {t:"(Lý do)，(S) 还是 + V + 吧", sub:"还是……吧", fx:[["(Lý do)，",""],["(S)",""],["还是",null],["Động từ",""],["吧",null]], mean:"",
  ex:[["打车太贵了，你[还是]坐地铁[吧]。","Dǎ chē tài guì le, nǐ háishi zuò dìtiě ba.","Đi taxi đắt quá, bạn đi tàu điện ngầm thì hơn.","等级标准"],
      ["外边下雨了，我们[还是]在房间看电视[吧]。","Wàibian xià yǔ le, wǒmen háishi zài fángjiān kàn diànshì ba.","Ngoài trời mưa rồi, thôi chúng mình ở trong phòng xem ti vi đi.","等级标准"]]}],
cmp:[
 {vn:"Muộn rồi, thôi bạn về đi.", zh:"太晚了，你[还是]回去[吧]。", py:"Tài wǎn le, nǐ háishi huíqu ba.", ok:true, why:"“thôi … đi” = 还是……吧."},
 {vn:"Bạn uống trà hay cà phê?", zh:"你喝茶[还是]喝咖啡？", py:"Nǐ hē chá háishi hē kāfēi?", ok:true, why:"Câu hỏi lựa chọn — nghĩa khác."}],
ex:[
 ["你病了，[还是]在家休息[吧]。","Nǐ bìng le, háishi zài jiā xiūxi ba.","Bạn ốm rồi, thôi ở nhà nghỉ đi."],
 ["这件太贵了，我们[还是]买那件[吧]。","Zhè jiàn tài guì le, wǒmen háishi mǎi nà jiàn ba.","Chiếc này đắt quá, mình mua chiếc kia thì hơn."]],
errs:[
 {bad:"你还是坐地铁吗？（ý: khuyên）", good:"你还是坐地铁吧。", why:"Khuyên dùng 吧, không dùng 吗."},
 {bad:"还是你坐地铁吧。", good:"你还是坐地铁吧。", why:"还是 thường sau chủ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mưa rồi, thôi mình ở nhà đi.", o:["下雨了，我们还是在家吧。","下雨了，我们还是在家吗？","下雨了，我们在家还是吧。"], a:0, why:"还是……吧."},
  {q:"还是 trong câu nào mang nghĩa “thôi thì”?", o:["你去还是我去？","你还是别去了吧。"], a:1, why:"Có 吧, khuyên."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["打车","太贵了","你","还是","坐地铁","吧"], a:"打车太贵了，你还是坐地铁吧。", vi:"Taxi đắt quá, bạn đi tàu điện ngầm thì hơn."},
  {w:["你","病了","还是","在家","休息","吧"], a:"你病了，还是在家休息吧。", vi:"Bạn ốm rồi, thôi ở nhà nghỉ đi."}]},
 {t:"C. Khuyên bằng 还是……吧", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"太晚了 / 你回家", a:"太晚了，你还是回家吧。"},
  {q:"这个太贵了 / 我们买那个", a:"这个太贵了，我们还是买那个吧。"}]}],
rel:["一47","一19","一22","二75"]
};
