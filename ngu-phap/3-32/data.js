// Bài ngữ pháp 【三32】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三32", title:"其他结构类型2：介宾、方位、兼语、同位短语", vi:"Cụm giới từ, cụm phương vị, cụm kiêm ngữ, cụm đồng vị", tag:"短语 · 结构类型",
goals:[
 "Nhận biết <b>cụm giới từ</b> (在房间) và <b>cụm phương vị</b> (桌子上边).",
 "Nhận biết <b>cụm kiêm ngữ</b> (请他进来) — người ở giữa vừa là tân ngữ vừa là chủ ngữ.",
 "Nhận biết <b>cụm đồng vị</b> (我的朋友小张) — hai tên gọi cùng chỉ một người / vật."],
intro:"Bốn kiểu cấu trúc cụm từ HSK 3, bổ sung cho 【二37】【二38】.",
rules:[
 {t:"Cụm giới từ · cụm phương vị", sub:"介宾 · 方位", fx:[["Giới từ + danh từ",null],["·",""],["Danh từ / động từ + phương vị",null]], mean:"",
  ex:[["在房间　从前边　往左　把他　按照规定","zài fángjiān　cóng qiánbian　wǎng zuǒ　bǎ tā　ànzhào guīdìng","ở trong phòng　từ phía trước　về bên trái　(đem) anh ấy　theo quy định","等级标准"],
      ["教室里　桌子上边　学校的东边　起床后　睡觉以前","jiàoshì li　zhuōzi shàngbian　xuéxiào de dōngbian　qǐ chuáng hòu　shuì jiào yǐqián","trong lớp　trên bàn　phía đông trường　sau khi dậy　trước khi ngủ","等级标准"]]},
 {t:"Cụm kiêm ngữ", sub:"兼语", fx:[["请 / 叫 / 让…",null],["người",""],["Động từ",""]], mean:"Người ở giữa là tân ngữ của động từ trước, đồng thời là chủ ngữ của động từ sau 【三57】.",
  ex:[["请他进来　叫他上车　通知他开会　建议大家休息","qǐng tā jìnlai　jiào tā shàng chē　tōngzhī tā kāi huì　jiànyì dàjiā xiūxi","mời anh ấy vào　bảo anh ấy lên xe　báo anh ấy họp　đề nghị mọi người nghỉ","等级标准"]]},
 {t:"Cụm đồng vị", sub:"同位", fx:[["Danh từ A",null],["Danh từ B (cùng chỉ một)",null]], mean:"",
  ex:[["我的朋友小张　他妈妈李老师　游泳这种运动","wǒ de péngyou Xiǎo Zhāng　tā māma Lǐ lǎoshī　yóuyǒng zhè zhǒng yùndòng","bạn tôi Tiểu Trương　mẹ anh ấy, cô Lý　môn thể thao bơi lội này","等级标准"]]}],
cmp:[
 {vn:"bạn tôi là Tiểu Trương", zh:"我的朋友小张", py:"wǒ de péngyou Xiǎo Zhāng", ok:true, why:"Đồng vị: hai danh từ đứng liền, không cần “là”."}],
ex:[
 ["我的朋友小张明天来。","Wǒ de péngyou Xiǎo Zhāng míngtiān lái.","Bạn tôi Tiểu Trương mai đến."],
 ["老师请他进来。","Lǎoshī qǐng tā jìnlai.","Thầy mời anh ấy vào."]],
errs:[
 {bad:"里教室", good:"教室里", why:"Phương vị đứng sau."},
 {bad:"请进来他。", good:"请他进来。", why:"Kiêm ngữ: người đứng giữa hai động từ."}],
practice:[
 {t:"A. Đây là kiểu cụm từ nào?", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"在房间", vi:"ở trong phòng", o:["介宾","方位","兼语","同位"], a:0, why:"Giới từ + danh từ."},
  {q:"桌子上边", vi:"trên bàn", o:["介宾","方位","兼语","同位"], a:1, why:"Danh từ + phương vị."},
  {q:"请他进来", vi:"mời anh ấy vào", o:["介宾","方位","兼语","同位"], a:2, why:"Người ở giữa hai động từ."},
  {q:"我的朋友小张", vi:"bạn tôi Tiểu Trương", o:["介宾","方位","兼语","同位"], a:3, why:"Hai tên cùng chỉ một người."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["老师","请","他","进来"], a:"老师请他进来。", vi:"Thầy mời anh ấy vào."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bạn tôi Tiểu Trương mai đến.", a:"我的朋友小张明天来。"}]}],
rel:["二37","二38","三57","一01"]
};
