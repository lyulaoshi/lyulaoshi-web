// Bài ngữ pháp 【三74】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三74", title:"概数表示法2", vi:"Cách nói số ước lượng 2 — 大概, 大约, 几, 三四个, 左右, 前后", tag:"特殊表达法",
goals:[
 "Ước lượng bằng <b>大概 / 大约 + số</b> và <b>几 + lượng từ</b>.",
 "Ghép <b>hai số liền nhau</b>: 三四个, 十五六岁.",
 "Thêm <b>左右</b> (số lượng, giờ) hoặc <b>前后</b> (mốc thời gian) sau số."],
intro:"Tiếng Việt “khoảng, chừng, độ, tầm”, “ba bốn cái”. Tiếng Trung có ba cách nói ước lượng.",
rules:[
 {t:"大概 / 大约 + số · 几 + lượng từ", sub:"（1）", fx:[["大概 / 大约",null],["số + lượng từ",""],["·",""],["几",null],["lượng từ + N",""]], mean:"",
  ex:[["这个手机[大概]两千块。","Zhège shǒujī dàgài liǎngqiān kuài.","Chiếc điện thoại này khoảng hai nghìn tệ.","等级标准"],
      ["我的中文老师[大约]三十岁。","Wǒ de Zhōngwén lǎoshī dàyuē sānshí suì.","Cô giáo tiếng Trung của tôi chừng ba mươi tuổi.","等级标准"],
      ["我上网买了[几]本书。","Wǒ shàng wǎng mǎi le jǐ běn shū.","Tôi mua mấy quyển sách trên mạng.","等级标准"]]},
 {t:"Hai số liền nhau", sub:"（2）", fx:[["số n + số n+1",null],["lượng từ + N",""]], mean:"Số nhỏ trước, số lớn sau.",
  ex:[["[三四]个","sān sì ge","ba bốn cái","等级标准"],
      ["[十五六]岁","shíwǔ liù suì","mười lăm mười sáu tuổi","等级标准"],
      ["[七八十]个人","qī bāshí ge rén","bảy tám chục người","等级标准"],
      ["[五六百]块钱","wǔ liùbǎi kuài qián","năm sáu trăm tệ","等级标准"]]},
 {t:"Số / thời điểm + 左右 / 前后", sub:"（3）", fx:[["số / thời điểm",""],["左右 / 前后",null]], mean:"左右: sau số lượng, giờ giấc. 前后: sau mốc thời gian (ngày lễ, sự kiện).",
  ex:[["三十岁[左右]","sānshí suì zuǒyòu","khoảng ba mươi tuổi","等级标准"],
      ["八点[左右]","bā diǎn zuǒyòu","khoảng tám giờ","等级标准"],
      ["春节[前后]","Chūnjié qiánhòu","khoảng dịp Tết","等级标准"],
      ["五一[前后]","Wǔ-Yī qiánhòu","khoảng dịp 1/5","等级标准"]]}],
notes:[{t:"Không dùng chồng", html:"Đã có 大概 thì thường không thêm 左右: nói <span class='zh'>大概三十岁</span> hoặc <span class='zh'>三十岁左右</span>."}],
cmp:[
 {vn:"khoảng 8 giờ", zh:"八点[左右]", py:"bā diǎn zuǒyòu", ok:false, tag:"(trật tự ngược)", why:"“khoảng” đứng trước số, còn 左右 đứng sau số."}],
ex:[
 ["我们班有二十[几]个学生。","Wǒmen bān yǒu èrshí jǐ ge xuésheng.","Lớp chúng tôi có hai mươi mấy học sinh."],
 ["他每天睡七八个小时。","Tā měi tiān shuì qī bā ge xiǎoshí.","Mỗi ngày anh ấy ngủ bảy tám tiếng."]],
errs:[
 {bad:"左右八点", good:"八点左右", why:"左右 đứng sau số."},
 {bad:"四三个人", good:"三四个人", why:"Số nhỏ trước, số lớn sau."},
 {bad:"八点前后", good:"八点左右", why:"Giờ giấc dùng 左右; 前后 dùng với ngày lễ, sự kiện."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"khoảng tám giờ", o:["左右八点","八点左右"], a:1, why:"左右 sau số."},
  {q:"ba bốn người", o:["三四个人","四三个人"], a:0, why:"Nhỏ trước lớn sau."},
  {q:"khoảng dịp Tết", o:["春节左右","春节前后"], a:1, why:"Ngày lễ → 前后."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个","手机","大概","两千","块"], a:"这个手机大概两千块。", vi:"Chiếc điện thoại này khoảng hai nghìn tệ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Mỗi ngày anh ấy ngủ bảy tám tiếng.", a:"他每天睡七八个小时。"},
  {q:"Cô ấy khoảng ba mươi tuổi.", a:"她三十岁左右。/ 她大概三十岁。/ 她大约三十岁。"}]}],
rel:["二73","三18","二72","三12"]
};
