// Bài ngữ pháp 【一28】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一28", title:"状语", vi:"Trạng ngữ — phó từ, tính từ, thời gian, nơi chốn trước động từ", tag:"句子成分 · 状语",
goals:[
 "Đặt trạng ngữ (phó từ, tính từ, thời gian, nơi chốn) <b>trước động từ</b>.",
 "Nhớ thứ tự: <b>Chủ ngữ + thời gian + phó từ + nơi chốn + động từ</b>.",
 "Bỏ thói quen đặt thời gian, nơi chốn <b>cuối câu</b> như tiếng Việt."],
intro:"Tiếng Việt: “Tôi ăn cơm <b>ở nhà lúc 7 giờ</b>.” Tiếng Trung: <b>我七点在家吃饭</b>. Mọi trạng ngữ dồn lên <b>trước động từ</b>.",
rules:[
 {t:"Phó từ, tính từ làm trạng ngữ", sub:"副词、形容词作状语", fx:[["Chủ ngữ",""],["不 / 非常 / 认真…",null],["Động từ / tính từ",""]], mean:"Phủ định, mức độ, cách thức.",
  ex:[["他[不]吃包子。","Tā bù chī bāozi.","Anh ấy không ăn bánh bao.","等级标准"],
      ["这个房间[非常]干净。","Zhège fángjiān fēicháng gānjìng.","Căn phòng này vô cùng sạch.","等级标准"],
      ["你[认真]写！","Nǐ rènzhēn xiě!","Em viết cẩn thận vào!","等级标准"]]},
 {t:"Thời gian, nơi chốn làm trạng ngữ", sub:"表示时间、处所的词语作状语", fx:[["Chủ ngữ",""],["Thời gian",null],["在 / 从 + nơi chốn",null],["Động từ",""]], mean:"Thời gian có thể đứng trước hoặc sau chủ ngữ, nhưng luôn trước động từ.",
  ex:[["他[十点]睡觉。","Tā shí diǎn shuì jiào.","Anh ấy đi ngủ lúc 10 giờ.","等级标准"],
      ["我们[下午]去吧。","Wǒmen xiàwǔ qù ba.","Chiều chúng mình đi nhé.","等级标准"],
      ["她[在网上]买了两本书。","Tā zài wǎngshang mǎi le liǎng běn shū.","Cô ấy mua hai quyển sách trên mạng.","等级标准"],
      ["哥哥[从北京]回来了。","Gēge cóng Běijīng huílai le.","Anh trai từ Bắc Kinh về rồi.","等级标准"]]}],
notes:[
 {t:"Thứ tự nhiều trạng ngữ", html:"<span class='zh'>我 + 明天 + 也 + 在家 + 吃饭</span> = thời gian → phó từ → nơi chốn → động từ."}],
cmp:[
 {vn:"Tôi ngủ lúc 10 giờ.", zh:"我[十点]睡觉。", py:"Wǒ shí diǎn shuì jiào.", ok:true, why:"Thời gian lên trước động từ."},
 {vn:"Cô ấy mua sách trên mạng.", zh:"她[在网上]买书。", py:"Tā zài wǎngshang mǎi shū.", ok:true, why:"Nơi chốn lên trước động từ."},
 {vn:"Tôi ăn cơm ở nhà lúc 7 giờ.", zh:"我[七点在家]吃饭。", py:"Wǒ qī diǎn zài jiā chī fàn.", ok:true, why:"Thời gian trước, nơi chốn sau, rồi mới đến động từ."}],
ex:[
 ["我[每天]八点上课。","Wǒ měi tiān bā diǎn shàng kè.","Hằng ngày tôi vào học lúc 8 giờ."],
 ["他们[明天也]在学校。","Tāmen míngtiān yě zài xuéxiào.","Mai họ cũng ở trường."],
 ["我[晚上在家]看书。","Wǒ wǎnshang zài jiā kàn shū.","Buổi tối tôi đọc sách ở nhà."],
 ["[今天]我[很]忙。","Jīntiān wǒ hěn máng.","Hôm nay tôi rất bận."]],
errs:[
 {bad:"他睡觉十点。", good:"他十点睡觉。", why:"Thời gian trước động từ."},
 {bad:"我们去下午吧。", good:"我们下午去吧。", why:"Thời gian trước động từ."},
 {bad:"她买了两本书在网上。", good:"她在网上买了两本书。", why:"Nơi chốn trước động từ."},
 {bad:"你写认真。", good:"你认真写。", why:"Cách thức trước động từ."},
 {bad:"我在家七点吃饭。", good:"我七点在家吃饭。", why:"Thời gian đứng trước nơi chốn."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy đi ngủ lúc 10 giờ.", o:["他睡觉十点。","他十点睡觉。","十点睡觉他。"], a:1, why:"Thời gian trước V."},
  {q:"Buổi tối tôi đọc sách ở nhà.", o:["我晚上在家看书。","我在家晚上看书。","我看书在家晚上。"], a:0, why:"Thời gian → nơi chốn → V."},
  {q:"Em viết cẩn thận vào!", o:["你写认真！","认真你写！","你认真写！"], a:2, why:"Tính từ trước V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","在网上","买了","两本书"], a:"她在网上买了两本书。", vi:"Cô ấy mua hai quyển sách trên mạng."},
  {w:["我们","下午","去","吧"], a:"我们下午去吧。", vi:"Chiều chúng mình đi nhé."},
  {w:["我","七点","在家","吃饭"], a:"我七点在家吃饭。", vi:"Tôi ăn cơm ở nhà lúc 7 giờ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Anh trai từ Bắc Kinh về rồi.", a:"哥哥从北京回来了。"},
  {q:"Hằng ngày tôi học tiếng Trung ở trường.", a:"我每天在学校学中文。"},
  {q:"Mai tôi cũng không đi.", a:"我明天也不去。/ 明天我也不去。"}]}],
rel:["一16","一15","一11","一20"]
};
