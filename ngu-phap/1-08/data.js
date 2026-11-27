// Bài ngữ pháp 【一08】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一08", title:"名量词", vi:"Lượng từ danh từ — 杯、本、个、家、间、口、块、页", tag:"词类 · 量词",
goals:[
 "Nhớ 8 lượng từ HSK 1 và danh từ đi kèm: <b>杯、本、个、家、间、口、块、页</b>.",
 "Dùng trật tự <b>số / 这 / 那 + lượng từ + danh từ</b>.",
 "Biết những chỗ tiếng Việt không dùng loại từ nhưng tiếng Trung bắt buộc có."],
intro:"Giống tiếng Việt (“ba <b>quyển</b> sách”), giữa số và danh từ phải có <b>lượng từ</b>. Mỗi danh từ có lượng từ quen dùng; 个 là lượng từ chung.",
rules:[
 {cap:[1,2], t:"Số + lượng từ + danh từ", sub:"数词 + 量词 + 名词", fx:[["Số / 这 / 那 / 几",""],["Lượng từ",null],["Danh từ",""]], mean:"Không bỏ lượng từ: <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=39804db7#sai'/></svg> 三书 → 三本书.",
  ex:[["{1|两}{2|杯}{3|牛奶}　{1|三}{2|本}{3|书}　{1|四}{2|个}{3|学生}","liǎng bēi niúnǎi　sān běn shū　sì ge xuésheng","hai cốc sữa　ba quyển sách　bốn học sinh","等级标准"],
      ["{1|五}{2|家}{3|商店}　{1|六}{2|间}{3|房子}","wǔ jiā shāngdiàn　liù jiān fángzi","năm cửa hàng　sáu gian phòng","等级标准"],
      ["{1|三}{2|口}{3|人}　{1|七}{2|块}{3|面包}","sān kǒu rén　qī kuài miànbāo","(nhà) ba người　bảy miếng bánh mì","等级标准"]]},
 {cap:[1,2], t:"Lượng từ nào đi với danh từ nào?", sub:"搭配", fx:[["杯 · 本 · 个 · 家",null],["·",""],["间 · 口 · 块 · 页",null]], mean:"<b>杯</b> cốc, ly (茶、水、牛奶) · <b>本</b> quyển (书、本子) · <b>个</b> cái, người (chung) · <b>家</b> cửa hàng, công ty, nhà hàng · <b>间</b> gian phòng · <b>口</b> người trong gia đình · <b>块</b> miếng, cục; đồng (tiền) · <b>页</b> trang",
  ex:[["我家有四{2|口}人。","Wǒ jiā yǒu sì kǒu rén.","Nhà tôi có bốn người."],
      ["请看第十{2|页}。","Qǐng kàn dì shí yè.","Mời xem trang 10."]]},
 {cap:[1], t:"元：đơn vị tiền", sub:"元 = 块", fx:[["Số",""],["元",null]], mean:"元 dùng trên bảng giá, văn viết; khẩu ngữ nói 块.",
  ex:[["这本书{1|二十}{2|元}。", "Zhè běn shū èrshí yuán.", "Quyển sách này 20 tệ."],
      ["一共{1|一百}{2|元}。", "Yígòng yìbǎi yuán.", "Tổng cộng 100 tệ."]]}],
notes:[
 {t:"Học mà chơi", html:"Bài tổng hợp mọi lượng từ HSK 1–3 theo hình dạng, kèm 2 trò chơi Xếp hàng vào hộp và Tiệm tạp hoá: <a href='/ngu-phap/luong-tu/'>Lượng từ 量词 →</a>"},
 {t:"口 chỉ dùng khi đếm người trong nhà", html:"<span class='zh'>你家有几口人？</span> Còn đếm người nói chung dùng <span class='zh'>个</span>: <span class='zh'>教室里有二十个人。</span>"}],
cmp:[
 {vn:"ba quyển sách", zh:"三[本]书", py:"sān běn shū", ok:true, why:"Giống tiếng Việt: số + loại từ + danh từ."},
 {vn:"năm cửa hàng", zh:"五[家]商店", py:"wǔ jiā shāngdiàn", ok:true, why:"Tiếng Việt không cần loại từ, tiếng Trung phải có 家."},
 {vn:"Nhà tôi có bốn người.", zh:"我家有四[口]人。", py:"Wǒ jiā yǒu sì kǒu rén.", ok:true, why:"Người trong gia đình → 口."}],
ex:[
 ["我要一[杯]水。","Wǒ yào yì bēi shuǐ.","Tôi muốn một cốc nước."],
 ["这[本]书很好看。","Zhè běn shū hěn hǎokàn.","Quyển sách này rất hay."],
 ["学校前边有一[家]饭店。","Xuéxiào qiánbian yǒu yì jiā fàndiàn.","Trước trường có một nhà hàng."],
 ["这儿有两[间]教室。","Zhèr yǒu liǎng jiān jiàoshì.","Ở đây có hai phòng học."],
 ["一[块]面包多少钱？","Yí kuài miànbāo duōshao qián?","Một miếng bánh mì bao nhiêu tiền?"]],
errs:[
 {bad:"我有三书。", good:"我有三本书。", why:"Phải có lượng từ giữa số và danh từ."},
 {bad:"我买了一个书。", good:"我买了一本书。", why:"Sách dùng 本."},
 {bad:"书三本", good:"三本书", why:"Số + lượng từ đứng <b>trước</b> danh từ."},
 {bad:"学校前边有一个商店们。", good:"学校前边有一家商店。", why:"Cửa hàng dùng 家; đồ vật không thêm 们."}],
practice:[
 {t:"A. Chọn lượng từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"两＿＿牛奶", vi:"hai ＿＿ sữa", o:["本","杯","口"], a:1, why:"Cốc sữa → 杯."},
  {q:"你家有几＿＿人？", vi:"Nhà bạn có mấy ＿＿ người?", o:["口","家","块"], a:0, why:"Người trong gia đình → 口."},
  {q:"三＿＿书", vi:"ba ＿＿ sách", o:["个","页","本"], a:2, why:"Quyển → 本."},
  {q:"一＿＿商店", vi:"một ＿＿ cửa hàng", o:["家","间","杯"], a:0, why:"Cửa hàng → 家."},
  {q:"七＿＿面包", vi:"bảy ＿＿ bánh mì", o:["页","块","本"], a:1, why:"Miếng → 块."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我家","有","四","口","人"], a:"我家有四口人。", vi:"Nhà tôi có bốn người."},
  {w:["我","要","一","杯","水"], a:"我要一杯水。", vi:"Tôi muốn một cốc nước."},
  {w:["这","本","书","很","好看"], a:"这本书很好看。", vi:"Quyển sách này rất hay."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"sáu gian phòng", a:"六间房子"},
  {q:"Mời xem trang 20.", a:"请看第二十页。"},
  {q:"Trước trường có hai nhà hàng.", a:"学校前边有两家饭店。"}]},
 {t:"D. Từ bổ sung", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这个本子五＿。", vi:"Cuốn vở này 5 tệ.", o:["元", "个", "本"], a:0, why:"元 là đơn vị tiền."}]}],
rel:["一07","一23","一06","二10"]
};
