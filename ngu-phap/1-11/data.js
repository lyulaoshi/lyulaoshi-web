// Bài ngữ pháp 【一11】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一11", title:"时间副词：马上、先、有时、在、正、正在", vi:"Phó từ thời gian — ngay, trước, đôi khi, đang", tag:"词类 · 副词",
goals:[
 "Dùng <b>马上</b> (ngay), <b>先</b> (trước), <b>有时</b> (đôi khi) đúng vị trí: sau chủ ngữ, trước động từ.",
 "Dùng <b>在 / 正 / 正在</b> + động từ để nói hành động đang diễn ra, thường kèm <b>呢</b>.",
 "Không đặt các phó từ này ở cuối câu như trạng ngữ tiếng Việt (“đến <b>ngay</b>”)."],
intro:"Các phó từ thời gian đứng <b>trước động từ</b>. Tiếng Việt hay nói “đến ngay, làm trước” — tiếng Trung phải đưa lên: <b>马上来、先做</b>.",
rules:[
 {t:"马上: ngay, lập tức", sub:"马上", fx:[["Chủ ngữ",""],["马上",null],["Động từ",""]], mean:"Việc sắp xảy ra rất nhanh.",
  ex:[["医生[马上]来。","Yīshēng mǎshàng lái.","Bác sĩ đến ngay.","等级标准"]]},
 {t:"先: trước (làm trước)", sub:"先", fx:[["Chủ ngữ",""],["先",null],["Động từ",""]], mean:"Việc làm trước việc khác; sau này học thêm 先……再 / 然后…… 【二62】.",
  ex:[["老师，我[先]说吧。","Lǎoshī, wǒ xiān shuō ba.","Thưa cô, em nói trước nhé.","等级标准"]]},
 {t:"有时: đôi khi, có lúc", sub:"有时", fx:[["Chủ ngữ",""],["有时",null],["Động từ",""]], mean:"Tần suất thấp, không thường xuyên.",
  ex:[["他[有时]晚上上课。","Tā yǒushí wǎnshang shàng kè.","Anh ấy đôi khi học vào buổi tối.","等级标准"]]},
 {t:"在 / 正 / 正在: đang", sub:"进行", fx:[["Chủ ngữ",""],["在 / 正 / 正在",null],["Động từ",""],["(呢)",null]], mean:"Hành động đang diễn ra. 正 thường phải có 呢 đi kèm; 在, 正在 có thể có hoặc không. Xem thêm 【一42】.",
  ex:[["我[在]看电视[呢]。","Wǒ zài kàn diànshì ne.","Tôi đang xem ti vi.","等级标准"],
      ["你等一下儿，他[正]吃饭[呢]。","Nǐ děng yíxiàr, tā zhèng chī fàn ne.","Bạn đợi một chút, anh ấy đang ăn cơm.","等级标准"],
      ["他们[正在]唱歌。","Tāmen zhèngzài chàng gē.","Họ đang hát.","等级标准"]]}],
notes:[
 {t:"Phủ định “đang”", html:"dùng <span class='zh'>没（在）</span>: <span class='zh'>我没在看电视，我在看书呢。</span> Không dùng 了 cùng 在 / 正在."}],
cmp:[
 {vn:"Bác sĩ đến ngay.", zh:"医生[马上]来。", py:"Yīshēng mǎshàng lái.", ok:true, why:"“ngay” đứng sau động từ; 马上 đứng trước."},
 {vn:"Em nói trước nhé.", zh:"我[先]说吧。", py:"Wǒ xiān shuō ba.", ok:true, why:"“trước” đứng sau; 先 đứng trước động từ."},
 {vn:"Tôi đang xem ti vi.", zh:"我[在]看电视[呢]。", py:"Wǒ zài kàn diànshì ne.", ok:true, why:"“đang” = 在, cùng vị trí."}],
ex:[
 ["你等等，我[马上]回来。","Nǐ děngdeng, wǒ mǎshàng huílai.","Bạn đợi chút, tôi về ngay."],
 ["我们[先]吃饭吧。","Wǒmen xiān chī fàn ba.","Chúng ta ăn cơm trước đã."],
 ["我[有时]喝咖啡，[有时]喝茶。","Wǒ yǒushí hē kāfēi, yǒushí hē chá.","Tôi lúc uống cà phê, lúc uống trà."],
 ["妈妈[正在]做饭。","Māma zhèngzài zuò fàn.","Mẹ đang nấu cơm."],
 ["——你在做什么？——我[在]写汉字[呢]。","—— Nǐ zài zuò shénme? —— Wǒ zài xiě Hànzì ne.","— Bạn đang làm gì thế? — Mình đang viết chữ Hán."]],
errs:[
 {bad:"医生来马上。", good:"医生马上来。", why:"马上 đứng trước động từ."},
 {bad:"我说先。", good:"我先说。", why:"先 đứng trước động từ."},
 {bad:"他正在唱歌了。", good:"他正在唱歌（呢）。", why:"Câu “đang” không dùng 了."},
 {bad:"他正吃饭。", good:"他正吃饭呢。", why:"正 + động từ thường cần 呢 ở cuối."},
 {bad:"我不在看电视。", good:"我没在看电视。", why:"Phủ định “đang” dùng 没."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi về ngay.", o:["我回来马上。","我马上回来。","马上回来我。"], a:1, why:"马上 + V."},
  {q:"Chúng ta ăn cơm trước đã.", o:["我们先吃饭吧。","我们吃饭先吧。","先我们吃饭吧。"], a:0, why:"先 + V."},
  {q:"Mẹ đang nấu cơm.", o:["妈妈正在做饭了。","妈妈做饭正在。","妈妈正在做饭。"], a:2, why:"正在 + V, không có 了."},
  {q:"Tôi không (phải) đang ngủ.", o:["我不在睡觉。","我没在睡觉。","我在不睡觉。"], a:1, why:"没在 + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["医生","马上","来"], a:"医生马上来。", vi:"Bác sĩ đến ngay."},
  {w:["他","有时","晚上","上课"], a:"他有时晚上上课。", vi:"Anh ấy đôi khi học buổi tối."},
  {w:["他们","正在","唱歌"], a:"他们正在唱歌。", vi:"Họ đang hát."},
  {w:["我","在","看","电视","呢"], a:"我在看电视呢。", vi:"Tôi đang xem ti vi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Thưa cô, em nói trước nhé.", a:"老师，我先说吧。"},
  {q:"Bạn đợi một chút, anh ấy đang ăn cơm.", a:"你等一下儿，他正（在）吃饭呢。"},
  {q:"Tôi lúc uống cà phê, lúc uống trà.", a:"我有时喝咖啡，有时喝茶。"}]}],
rel:["一42","一12","二15","二62"]
};
