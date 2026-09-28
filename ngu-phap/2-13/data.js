// Bài ngữ pháp 【二13】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二13", title:"程度副词：多、多么、好、更、十分、特别、挺、有（一）点儿", vi:"Phó từ mức độ mở rộng — biết bao, hơn nữa, rất, khá, hơi", tag:"词类 · 副词",
goals:[
 "Cảm thán bằng <b>多 / 多么 / 好 + Adj + 啊</b>.",
 "Dùng <b>更</b> (hơn nữa), <b>十分 / 特别</b> (rất, đặc biệt), <b>挺……的</b> (khá).",
 "Dùng <b>有（一）点儿 + Adj</b> cho điều <b>không vừa ý</b> (hơi…)."],
intro:"Tất cả đứng <b>trước tính từ</b> (hoặc động từ tâm lý). Mỗi từ mang sắc thái riêng — học kèm khung câu hay đi cùng.",
rules:[
 {t:"多 / 多么 / 好 + Adj + 啊！", sub:"感叹", fx:[["多 / 多么 / 好",null],["Tính từ",""],["啊！",null]], mean:"… biết bao! (cảm thán).",
  ex:[["这孩子[多]可爱啊！","Zhè háizi duō kě'ài a!","Đứa bé này đáng yêu biết bao!","等级标准"],
      ["那些花[多么]漂亮！","Nàxiē huā duōme piàoliang!","Những bông hoa kia đẹp biết bao!","等级标准"],
      ["这个教室[好]大啊！","Zhège jiàoshì hǎo dà a!","Phòng học này to quá!","等级标准"]]},
 {t:"更: hơn nữa (so sánh)", sub:"更", fx:[["(B)",""],["更",null],["Tính từ",""]], mean:"Mức độ cao hơn cái đã nói.",
  ex:[["他很高，他弟弟[更]高。","Tā hěn gāo, tā dìdi gèng gāo.","Anh ấy cao, em trai anh ấy còn cao hơn.","等级标准"]]},
 {t:"十分 · 特别 · 挺……的", sub:"高程度", fx:[["十分 / 特别 / 挺",null],["Tính từ",""],["(的)",""]], mean:"十分 rất (trang trọng) · 特别 đặc biệt, rất · 挺……的 khá, rất (khẩu ngữ).",
  ex:[["这包子[十分]好吃。","Zhè bāozi shífēn hǎochī.","Bánh bao này rất ngon.","等级标准"],
      ["王老师的儿子[特别]可爱。","Wáng lǎoshī de érzi tèbié kě'ài.","Con trai cô Vương đặc biệt đáng yêu.","等级标准"],
      ["那儿[挺]安静[的]。","Nàr tǐng ānjìng de.","Chỗ đó khá yên tĩnh.","等级标准"]]},
 {t:"有（一）点儿 + Adj: hơi (không vừa ý)", sub:"有点儿", fx:[["有（一）点儿",null],["Tính từ","thường mang nghĩa tiêu cực"]], mean:"Hơi nóng, hơi đắt, hơi mệt… Khác 一点儿 đứng <b>sau</b> tính từ (so sánh) 【二53】.",
  ex:[["今天天气[有（一）点儿]热。","Jīntiān tiānqì yǒu (yì)diǎnr rè.","Hôm nay trời hơi nóng.","等级标准"]]}],
notes:[
 {t:"有点儿 ≠ 一点儿", html:"<span class='zh'>这件衣服有点儿贵。</span> (hơi đắt — chê) · <span class='zh'>便宜一点儿吧！</span> (rẻ hơn chút đi — so sánh, yêu cầu)."}],
cmp:[
 {vn:"Hôm nay hơi lạnh.", zh:"今天[有点儿]冷。", py:"Jīntiān yǒudiǎnr lěng.", ok:true, why:"“hơi” trước tính từ → 有点儿."},
 {vn:"Rẻ một chút đi!", zh:"便宜[一点儿]吧！", py:"Piányi yìdiǎnr ba!", ok:true, why:"“một chút” sau tính từ → 一点儿."},
 {vn:"Em trai còn cao hơn.", zh:"弟弟[更]高。", py:"Dìdi gèng gāo.", ok:true, why:"“còn … hơn” → 更 trước tính từ."}],
ex:[
 ["今天比昨天[更]冷。","Jīntiān bǐ zuótiān gèng lěng.","Hôm nay còn lạnh hơn hôm qua."],
 ["这个问题[有点儿]难。","Zhège wèntí yǒudiǎnr nán.","Câu hỏi này hơi khó."],
 ["我[特别]喜欢吃饺子。","Wǒ tèbié xǐhuan chī jiǎozi.","Tôi đặc biệt thích ăn sủi cảo."],
 ["你的中文说得[挺]好[的]。","Nǐ de Zhōngwén shuō de tǐng hǎo de.","Bạn nói tiếng Trung khá giỏi đấy."]],
errs:[
 {bad:"这件衣服贵有点儿。", good:"这件衣服有点儿贵。", why:"有点儿 đứng trước tính từ."},
 {bad:"这件衣服一点儿贵。", good:"这件衣服有点儿贵。", why:"“hơi” = 有点儿, không phải 一点儿."},
 {bad:"他比我很更高。", good:"他比我更高。", why:"Không dùng 很 cùng 更 / 比."},
 {bad:"今天有点儿好。", good:"今天挺好的。", why:"有点儿 thường đi với ý không vừa ý."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cái áo này hơi đắt.", o:["这件衣服一点儿贵。","这件衣服有点儿贵。","这件衣服贵有点儿。"], a:1, why:"有点儿 + Adj."},
  {q:"Hôm nay còn lạnh hơn hôm qua.", o:["今天比昨天更冷。","今天比昨天很冷。","今天更比昨天冷了。"], a:0, why:"比 + B + 更 + Adj."},
  {q:"Chỗ đó khá yên tĩnh.", o:["那儿挺安静的。","那儿安静挺的。","那儿挺的安静。"], a:0, why:"挺……的."},
  {q:"Đẹp biết bao!", o:["多么漂亮啊！","漂亮多么啊！","很多漂亮啊！"], a:0, why:"多么 + Adj + 啊."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["今天","天气","有点儿","热"], a:"今天天气有点儿热。", vi:"Hôm nay trời hơi nóng."},
  {w:["他很高","他弟弟","更","高"], a:"他很高，他弟弟更高。", vi:"Anh ấy cao, em trai còn cao hơn."},
  {w:["这孩子","多","可爱","啊"], a:"这孩子多可爱啊！", vi:"Đứa bé này đáng yêu biết bao!"}]},
 {t:"C. Điền 有点儿 hoặc 一点儿", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"这个菜＿＿辣，我不太喜欢。", vi:"Món này ＿＿ cay, tôi không thích lắm.", a:"有点儿"},
  {q:"你说慢＿＿，好吗？", vi:"Bạn nói chậm ＿＿, được không?", a:"一点儿"},
  {q:"我今天＿＿累。", vi:"Hôm nay tôi ＿＿ mệt.", a:"有点儿"}]}],
rel:["一09","二53","二58","一35"]
};
