// Bài ngữ pháp 【二19】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二19", title:"情态副词：必须、差不多、好像、一定、也许", vi:"Phó từ tình thái — phải, gần như, hình như, nhất định, có lẽ", tag:"词类 · 副词",
goals:[
 "Nói bắt buộc bằng <b>必须</b>, chắc chắn bằng <b>一定</b>.",
 "Nói phỏng đoán bằng <b>好像</b> (hình như), <b>也许</b> (có lẽ).",
 "Nói gần đúng bằng <b>差不多</b> (khoảng, gần như); phân biệt <b>一定不 / 不一定</b>."],
intro:"Phó từ tình thái cho biết <b>thái độ</b> của người nói (chắc chắn, đoán, bắt buộc). Tất cả đứng <b>trước động từ</b>.",
rules:[
 {t:"必须 · 一定: phải, nhất định", sub:"必要 · 肯定", fx:[["Chủ ngữ",""],["必须 / 一定 (要)",null],["Động từ",""]], mean:"必须 bắt buộc (phủ định: 不必 / 不用); 一定 chắc chắn, nhất định.",
  ex:[["要取得好成绩，大家[必须]努力学习。","Yào qǔdé hǎo chéngjì, dàjiā bìxū nǔlì xuéxí.","Muốn có thành tích tốt, mọi người phải chăm chỉ học.","等级标准"],
      ["你到北京以后，[一定]要去看看王老师。","Nǐ dào Běijīng yǐhòu, yídìng yào qù kànkan Wáng lǎoshī.","Đến Bắc Kinh rồi, bạn nhất định phải đi thăm thầy Vương.","等级标准"]]},
 {t:"好像 · 也许: hình như, có lẽ", sub:"推测", fx:[["Chủ ngữ",""],["好像 / 也许",null],["Động từ",""]], mean:"Đoán, không chắc chắn.",
  ex:[["今天[好像]要下雨。","Jīntiān hǎoxiàng yào xià yǔ.","Hôm nay hình như sắp mưa.","等级标准"],
      ["我今年[也许]会去中国学习中文。","Wǒ jīnnián yěxǔ huì qù Zhōngguó xuéxí Zhōngwén.","Năm nay có lẽ tôi sẽ sang Trung Quốc học tiếng Trung.","等级标准"]]},
 {t:"差不多: khoảng, gần như", sub:"估计", fx:[["差不多",null],["Động từ / số lượng",""]], mean:"Gần bằng, xấp xỉ.",
  ex:[["机票[差不多]要两千块钱。","Jīpiào chàbuduō yào liǎngqiān kuài qián.","Vé máy bay khoảng 2.000 tệ.","等级标准"]]}],
notes:[
 {t:"一定不 ≠ 不一定", html:"<span class='zh'>我一定不去。</span> = chắc chắn không đi · <span class='zh'>我不一定去。</span> = chưa chắc đi."}],
cmp:[
 {vn:"Hình như trời sắp mưa.", zh:"[好像]要下雨了。", py:"Hǎoxiàng yào xià yǔ le.", ok:true, why:"“hình như” = 好像."},
 {vn:"Bạn nhất định phải đến.", zh:"你[一定]要来。", py:"Nǐ yídìng yào lái.", ok:true, why:"一定要 + V."},
 {vn:"Tôi chưa chắc đi.", zh:"我[不一定]去。", py:"Wǒ bù yídìng qù.", ok:true, why:"不一定 = chưa chắc."}],
ex:[
 ["上课[必须]关手机。","Shàng kè bìxū guān shǒujī.","Vào lớp phải tắt điện thoại."],
 ["他[好像]不太高兴。","Tā hǎoxiàng bú tài gāoxìng.","Anh ấy hình như không vui lắm."],
 ["我们[差不多]到了。","Wǒmen chàbuduō dào le.","Chúng ta sắp đến rồi (gần đến)."],
 ["明天我[也许]不来。","Míngtiān wǒ yěxǔ bù lái.","Mai có lẽ tôi không đến."]],
errs:[
 {bad:"你要一定来。", good:"你一定要来。", why:"一定 đứng trước 要."},
 {bad:"我一定不去。（ý: chưa chắc đi）", good:"我不一定去。", why:"Chưa chắc = 不一定."},
 {bad:"要下雨好像。", good:"好像要下雨。", why:"好像 đứng trước động từ."},
 {bad:"你必须不来。（ý: không cần đến）", good:"你不用来。/ 你不必来。", why:"Phủ định của 必须 là 不用 / 不必."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"考试的时候＿＿关手机。(bắt buộc)", vi:"Khi thi ＿＿ tắt điện thoại.", o:["必须","好像","也许"], a:0, why:"Bắt buộc → 必须."},
  {q:"天黑了，＿＿要下雨了。(hình như)", vi:"Trời tối rồi, ＿＿ sắp mưa.", o:["一定","好像","必须"], a:1, why:"Đoán → 好像."},
  {q:"机票＿＿要两千块。(khoảng)", vi:"Vé máy bay ＿＿ 2.000 tệ.", o:["差不多","一定","必须"], a:0, why:"Xấp xỉ → 差不多."},
  {q:"Tôi chưa chắc đi.", o:["我一定不去。","我不一定去。","我去不一定。"], a:1, why:"不一定."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["今天","好像","要","下雨"], a:"今天好像要下雨。", vi:"Hôm nay hình như sắp mưa."},
  {w:["你","一定","要","去","看看","王老师"], a:"你一定要去看看王老师。", vi:"Bạn nhất định phải đi thăm thầy Vương."},
  {w:["机票","差不多","要","两千块钱"], a:"机票差不多要两千块钱。", vi:"Vé máy bay khoảng 2.000 tệ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Năm nay có lẽ tôi sẽ sang Trung Quốc.", a:"我今年也许会去中国。"},
  {q:"Bạn không cần đến.", a:"你不用来。/ 你不必来。"},
  {q:"Anh ấy hình như không vui lắm.", a:"他好像不太高兴。"}]}],
rel:["二01","二02","三18","二20"]
};
