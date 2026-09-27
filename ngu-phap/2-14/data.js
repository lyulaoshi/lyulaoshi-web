// Bài ngữ pháp 【二14】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二14", title:"范围、协同副词：全、一共、只", vi:"Phó từ phạm vi — toàn bộ, tổng cộng, chỉ", tag:"词类 · 副词",
goals:[
 "Dùng <b>全</b> (toàn bộ, hết thảy) sau chủ ngữ số nhiều.",
 "Dùng <b>一共</b> (tổng cộng) trước động từ / số lượng.",
 "Dùng <b>只</b> (chỉ) trước động từ — không đặt cuối câu như “thôi”."],
intro:"Ba phó từ chỉ phạm vi, đều đứng <b>trước động từ</b> (hoặc trước số lượng với 一共).",
rules:[
 {t:"全: toàn bộ, hết", sub:"全", fx:[["Chủ ngữ số nhiều",""],["全",null],["V / Adj",""]], mean:"Gần nghĩa 都 nhưng nhấn mạnh “không sót ai”.",
  ex:[["同学们[全]来了。","Tóngxuémen quán lái le.","Các bạn đến đủ cả rồi.","等级标准"]]},
 {t:"一共: tổng cộng", sub:"一共", fx:[["Chủ ngữ",""],["一共",null],["(V) + số lượng",""]], mean:"Cộng tất cả lại.",
  ex:[["我们班[一共]有二十人。","Wǒmen bān yígòng yǒu èrshí rén.","Lớp chúng tôi tổng cộng có 20 người.","等级标准"],
      ["这些[一共]多少钱？","Zhèxiē yígòng duōshao qián?","Chỗ này tổng cộng bao nhiêu tiền?"]]},
 {t:"只: chỉ", sub:"只", fx:[["Chủ ngữ",""],["只",null],["V + (số lượng) + N",""]], mean:"Giới hạn số lượng, phạm vi. “… thôi” của tiếng Việt → 只 trước động từ.",
  ex:[["卡里[只]有二百块钱。","Kǎ li zhǐ yǒu èrbǎi kuài qián.","Trong thẻ chỉ có 200 tệ.","等级标准"],
      ["我[只]会说一点儿中文。","Wǒ zhǐ huì shuō yìdiǎnr Zhōngwén.","Tôi chỉ biết nói một chút tiếng Trung thôi."]]}],
cmp:[
 {vn:"Tôi chỉ có 20 tệ thôi.", zh:"我[只]有二十块钱。", py:"Wǒ zhǐ yǒu èrshí kuài qián.", ok:true, why:"“thôi” cuối câu không dịch; 只 trước động từ."},
 {vn:"Tổng cộng bao nhiêu tiền?", zh:"[一共]多少钱？", py:"Yígòng duōshao qián?", ok:true, why:"一共 đứng đầu phần vị ngữ."}],
ex:[
 ["他们[全]是我的朋友。","Tāmen quán shì wǒ de péngyou.","Họ toàn là bạn của tôi."],
 ["我们[一共]去了五个地方。","Wǒmen yígòng qù le wǔ ge dìfang.","Chúng tôi tổng cộng đã đi năm nơi."],
 ["我[只]喝了一杯咖啡。","Wǒ zhǐ hē le yì bēi kāfēi.","Tôi chỉ uống một cốc cà phê."],
 ["教室里[只]有两个人。","Jiàoshì li zhǐ yǒu liǎng ge rén.","Trong lớp chỉ có hai người."]],
errs:[
 {bad:"我有二十块钱只。", good:"我只有二十块钱。", why:"只 đứng trước động từ."},
 {bad:"只我有二十块钱。（ý: tôi chỉ có）", good:"我只有二十块钱。", why:"只 sau chủ ngữ."},
 {bad:"全同学们来了。", good:"同学们全来了。", why:"全 sau chủ ngữ."},
 {bad:"一共我们班有二十人。", good:"我们班一共有二十人。", why:"一共 sau chủ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trong thẻ chỉ có 200 tệ.", o:["卡里有二百块钱只。","卡里只有二百块钱。","只卡里有二百块钱。"], a:1, why:"只 + V."},
  {q:"Các bạn đến đủ cả rồi.", o:["同学们全来了。","全同学们来了。","同学们来全了。"], a:0, why:"S + 全 + V."},
  {q:"Tổng cộng bao nhiêu tiền?", o:["多少钱一共？","一共多少钱？","一共钱多少？"], a:1, why:"一共 + 多少钱."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们班","一共","有","二十人"], a:"我们班一共有二十人。", vi:"Lớp chúng tôi tổng cộng có 20 người."},
  {w:["我","只","会","说","一点儿","中文"], a:"我只会说一点儿中文。", vi:"Tôi chỉ biết nói một chút tiếng Trung."},
  {w:["他们","全","是","我的","朋友"], a:"他们全是我的朋友。", vi:"Họ toàn là bạn của tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi chỉ uống một cốc cà phê.", a:"我只喝了一杯咖啡。"},
  {q:"Chúng tôi tổng cộng đi năm nơi.", a:"我们一共去了五个地方。"}]}],
rel:["一10","三13","二20","一23"]
};
