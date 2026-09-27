// Bài ngữ pháp 【一09】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一09", title:"程度副词：非常、很、太、真、最", vi:"Phó từ chỉ mức độ — rất, quá, thật, nhất", tag:"词类 · 副词",
goals:[
 "Dùng 5 phó từ mức độ <b>非常、很、太、真、最</b> trước tính từ và động từ tâm lý (喜欢…).",
 "Nhớ trật tự <b>phó từ + tính từ</b> — ngược với “ngon <b>lắm</b>, đắt <b>quá</b>” của tiếng Việt.",
 "Dùng <b>太……了</b> và <b>真……</b> trong câu cảm thán."],
intro:"Phó từ mức độ luôn đứng <b>trước</b> tính từ hoặc động từ chỉ tâm lý (喜欢、想…).",
rules:[
 {t:"Phó từ mức độ + tính từ / động từ tâm lý", sub:"程度副词", fx:[["Chủ ngữ",""],["非常 / 很 / 真 / 最",null],["Tính từ / 喜欢…",""]], mean:"非常 vô cùng · 很 rất (câu tính từ thường có 很) · 真 thật là · 最 nhất",
  ex:[["我[非常]喜欢这本书。","Wǒ fēicháng xǐhuan zhè běn shū.","Tôi vô cùng thích quyển sách này.","等级标准"],
      ["那个本子[很]好看。","Nàge běnzi hěn hǎokàn.","Quyển vở kia rất đẹp.","等级标准"],
      ["你的房间[真]干净！","Nǐ de fángjiān zhēn gānjìng!","Phòng bạn thật là sạch!","等级标准"],
      ["我[最]喜欢打球。","Wǒ zuì xǐhuan dǎ qiú.","Tôi thích chơi bóng nhất.","等级标准"]]},
 {t:"太 + tính từ + 了: quá", sub:"太……了", fx:[["太",null],["Tính từ",""],["了",null]], mean:"Mức độ vượt quá, hoặc cảm thán; thường có 了 ở cuối.",
  ex:[["这里[太]冷[了]。","Zhèli tài lěng le.","Ở đây lạnh quá.","等级标准"],
      ["[太]好[了]！","Tài hǎo le!","Tốt quá!"]]}],
notes:[
 {t:"很 trong câu tính từ", html:"<span class='zh'>他很高。</span> 很 ở đây nghĩa nhẹ, gần như chỉ để câu trọn vẹn 【一30】. Bỏ 很 (<span class='zh'>他高。</span>) nghe như đang so sánh."},
 {t:"Phủ định", html:"<span class='zh'>不太 + tính từ</span> = không … lắm: <span class='zh'>今天不太冷。</span>"}],
cmp:[
 {vn:"Món này ngon lắm.", zh:"这个菜[很]好吃。", py:"Zhège cài hěn hǎochī.", ok:true, why:"“lắm” đứng sau, 很 đứng trước tính từ."},
 {vn:"Đắt quá!", zh:"[太]贵[了]！", py:"Tài guì le!", ok:true, why:"“quá” đứng sau, 太…了 bao quanh tính từ."},
 {vn:"Tôi thích nhất môn tiếng Trung.", zh:"我[最]喜欢中文课。", py:"Wǒ zuì xǐhuan Zhōngwén kè.", ok:true, why:"最 đứng trước động từ tâm lý."}],
ex:[
 ["今天[非常]热。","Jīntiān fēicháng rè.","Hôm nay vô cùng nóng."],
 ["这件衣服[太]贵[了]。","Zhè jiàn yīfu tài guì le.","Cái áo này đắt quá."],
 ["你说得[真]好！","Nǐ shuō de zhēn hǎo!","Bạn nói thật là hay!"],
 ["他是我们班[最]高的学生。","Tā shì wǒmen bān zuì gāo de xuésheng.","Cậu ấy là học sinh cao nhất lớp tôi."],
 ["今天不[太]冷。","Jīntiān bú tài lěng.","Hôm nay không lạnh lắm."]],
errs:[
 {bad:"这个菜好吃很。", good:"这个菜很好吃。", why:"Phó từ mức độ đứng <b>trước</b> tính từ."},
 {bad:"这里冷太了。", good:"这里太冷了。", why:"太 + tính từ + 了."},
 {bad:"他高最。", good:"他最高。", why:"最 đứng trước tính từ."},
 {bad:"我喜欢很这本书。", good:"我很喜欢这本书。", why:"很 đứng trước 喜欢."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Món này ngon lắm.", o:["这个菜好吃很。","这个菜很好吃。","很这个菜好吃。"], a:1, why:"很 + tính từ."},
  {q:"Ở đây lạnh quá.", o:["这里太冷了。","这里冷太了。","这里太冷。"], a:0, why:"太…了."},
  {q:"Tôi thích chơi bóng nhất.", o:["我喜欢最打球。","我最喜欢打球。","我喜欢打球最。"], a:1, why:"最 + 喜欢."},
  {q:"Hôm nay không nóng lắm.", o:["今天不太热。","今天太不热。","今天热不太。"], a:0, why:"不太 + tính từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","非常","喜欢","这本书"], a:"我非常喜欢这本书。", vi:"Tôi vô cùng thích quyển sách này."},
  {w:["你的","房间","真","干净"], a:"你的房间真干净！", vi:"Phòng bạn thật là sạch!"},
  {w:["这件","衣服","太","贵","了"], a:"这件衣服太贵了。", vi:"Cái áo này đắt quá."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cô ấy rất đẹp.", a:"她很漂亮。"},
  {q:"Tốt quá!", a:"太好了！"},
  {q:"Anh ấy là người cao nhất lớp tôi.", a:"他是我们班最高的（人）。"}]}],
rel:["一30","一35","二13","三12"]
};
