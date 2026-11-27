// Bài ngữ pháp 【新5.03】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.03", title:"名量词：册、朵、届、颗、匹、批、副、集、周……", vi:"Lượng từ HSK 5 — 册, 朵, 届, 颗, 匹, 根, 批, 副, 集, 周", tag:"词类 · 量词",
goals:[
 "Ghép lượng từ theo <b>hình dạng</b>: 朵, 颗, 根.",
 "Dùng <b>匹, 副</b> cho ngựa và đồ đi theo bộ.",
 "Dùng <b>届, 批, 册, 集, 周</b> cho khóa, đợt, quyển, tập, vòng."],
intro:"Điểm này còn gồm 行, 架, 群, 支, 束 đã học ở 【三09】.",
rules:[
 {t:"朵 / 颗 / 根", sub:"（1）hình dạng", fx:[["Số",""],["朵 / 颗 / 根",null],["Danh từ",""]], mean:"朵 bông hoa, đám mây · 颗 vật tròn nhỏ (星星, 心) · 根 vật dài mảnh.",
  ex:[["天上飘着{1|一}{2|朵}{3|白云}。","Tiān shang piāozhe yì duǒ báiyún.","Trên trời trôi một đám mây trắng."],
      ["天上有{1|一}{2|颗}很亮的{3|星星}。","Tiān shang yǒu yì kē hěn liàng de xīngxing.","Trên trời có một ngôi sao rất sáng."],
      ["他递给我{1|一}{2|根}{3|绳子}。","Tā dì gěi wǒ yì gēn shéngzi.","Anh ấy đưa tôi một sợi dây."]]},
 {t:"匹 / 副", sub:"（2）ngựa, bộ", fx:[["Số",""],["匹 / 副",null],["Danh từ",""]], mean:"匹 pǐ: ngựa; vải · 副 đồ theo đôi, bộ (眼镜, 手套); vẻ mặt.",
  ex:[["草地上有{1|两}{2|匹}{3|马}。","Cǎodì shang yǒu liǎng pǐ mǎ.","Trên bãi cỏ có hai con ngựa."],
      ["我新配了{1|一}{2|副}{3|眼镜}。","Wǒ xīn pèile yí fù yǎnjìng.","Tôi mới cắt một cặp kính."]]},
 {t:"届 / 批", sub:"（3）khóa, đợt", fx:[["Số / 这",""],["届 / 批",null],["Danh từ",""]], mean:"届 khóa, kỳ (đại hội) · 批 đợt, lô.",
  ex:[["这是{1|第一}{2|届}{3|文化节}。","Zhè shì dì-yī jiè wénhuàjié.","Đây là lễ hội văn hóa lần thứ nhất."],
      ["商店新到了{1|一}{2|批}{3|货}。","Shāngdiàn xīn dàole yì pī huò.","Cửa hàng mới về một lô hàng."]]},
 {t:"册 / 集 / 周", sub:"（4）quyển, tập, vòng", fx:[["Số",""],["册 / 集 / 周",null],["Danh từ / (bỏ trống)",""]], mean:"册 quyển (bộ sách) · 集 tập phim · 周 vòng.",
  ex:[["这套书一共{1|三}{2|册}。","Zhè tào shū yígòng sān cè.","Bộ sách này gồm ba quyển."],
      ["这个电视剧有{1|四十}{2|集}。","Zhège diànshìjù yǒu sìshí jí.","Phim này dài 40 tập."],
      ["他绕操场跑了{1|两}{2|周}。","Tā rào cāochǎng pǎole liǎng zhōu.","Anh ấy chạy hai vòng quanh sân."]]}],
cmp:[
 {vn:"Một đôi găng tay", zh:"一[副]手套", py:"yí fù shǒutào", ok:true, why:"Đồ đeo theo đôi → 副."}],
ex:[
 ["她手里拿着一[朵]花。","Tā shǒu li názhe yì duǒ huā.","Cô ấy cầm một bông hoa."],
 ["学校今年招了一[批]新老师。","Xuéxiào jīnnián zhāole yì pī xīn lǎoshī.","Năm nay trường tuyển một đợt giáo viên mới."],
 ["他是我们学校上一[届]的学生。","Tā shì wǒmen xuéxiào shàng yí jiè de xuésheng.","Anh ấy là học sinh khóa trước của trường."]],
errs:[
 {bad:"一个马", good:"一匹马", why:"Ngựa dùng 匹."},
 {bad:"一对眼镜", good:"一副眼镜", why:"Kính mắt dùng 副."},
 {bad:"一根星星", good:"一颗星星", why:"Vật tròn nhỏ dùng 颗."}],
practice:[
 {t:"A. Chọn lượng từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"花园里开了几＿花。", vi:"Trong vườn nở mấy bông hoa.", o:["朵","匹","届"], a:0, why:"Hoa → 朵."},
  {q:"这部电视剧一共三十＿。", vi:"Bộ phim gồm 30 tập.", o:["集","册","批"], a:0, why:"Tập phim → 集."},
  {q:"他买了一＿手套。", vi:"Anh ấy mua một đôi găng.", o:["副","根","颗"], a:0, why:"Đôi → 副."},
  {q:"第三＿运动会下周开始。", vi:"Đại hội thể thao lần ba bắt đầu tuần sau.", o:["届","批","周"], a:0, why:"Kỳ đại hội → 届."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["草地上","有","两","匹","马"], a:"草地上有两匹马。", vi:"Trên bãi cỏ có hai con ngựa."},
  {w:["商店","新到了","一","批","货"], a:"商店新到了一批货。", vi:"Cửa hàng mới về một lô hàng."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bộ sách này gồm ba quyển (dùng 册).", a:"这套书一共三册。/ 这套书有三册。/ 这套书一共有三册。"}]}],
rel:["三09","新4.03","三11"]
};
