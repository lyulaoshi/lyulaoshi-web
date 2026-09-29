// Bài ngữ pháp 【新1.45】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新1.45", title:"存现句1：处所＋是/有＋名词", vi:"Câu tồn hiện 1 — ở đâu có / là cái gì", tag:"句子的类型 · 特殊句型",
goals:[
 "Nói <b>ở đâu có cái gì</b>: nơi chốn + 有 + (số lượng) + danh từ.",
 "Nói <b>ở chỗ đó là cái gì</b>: nơi chốn + 是 + danh từ.",
 "Đặt <b>nơi chốn ở đầu câu</b>, không thêm 在."],
intro:"Tiếng Việt: “Trên bàn có một quyển sách.” Tiếng Trung cũng bắt đầu bằng nơi chốn: <b>桌子上有一本书</b>. Nơi chốn thường là danh từ + phương vị (上, 里, 前…).",
rules:[
 {t:"Nơi chốn + 有 + (số lượng) + danh từ", sub:"有", fx:[["Nơi chốn",""],["有",null],["(số lượng)",""],["Danh từ",""]], mean:"Ở đâu có cái gì / ai (chưa biết cụ thể).",
  ex:[["{1|桌子上}{2|有}{3|一本}{4|书}。","Zhuōzi shang yǒu yì běn shū.","Trên bàn có một quyển sách."],
      ["{1|教室里}{2|有}{3|很多}{4|学生}。","Jiàoshì li yǒu hěn duō xuésheng.","Trong lớp có rất nhiều học sinh."]]},
 {t:"Nơi chốn + 是 + danh từ", sub:"是", fx:[["Nơi chốn",""],["是",null],["Danh từ",""]], mean:"Chỗ đó là cái gì (xác định cái nằm ở đó).",
  ex:[["{1|学校前边}{2|是}{3|医院}。","Xuéxiào qiánbian shì yīyuàn.","Phía trước trường là bệnh viện."],
      ["{1|我家后边}{2|是}{3|一个商店}。","Wǒ jiā hòubian shì yí gè shāngdiàn.","Phía sau nhà tôi là một cửa hàng."]]}],
notes:[{t:"有 hay 是", html:"<span class='zh'>有</span> = ở đó <b>có</b> (còn có thể có thứ khác); <span class='zh'>是</span> = chỗ đó <b>chính là</b> cái gì."}],
cmp:[
 {vn:"Trên bàn có một cái cốc.", zh:"桌子上[有]一个杯子。", py:"Zhuōzi shang yǒu yí gè bēizi.", ok:true, why:"Trật tự giống tiếng Việt; không thêm 在 ở đầu câu."}],
ex:[
 ["我家[有]一只猫。","Wǒ jiā yǒu yì zhī māo.","Nhà tôi có một con mèo."],
 ["医院旁边[是]饭店。","Yīyuàn pángbiān shì fàndiàn.","Bên cạnh bệnh viện là nhà hàng."],
 ["房间里[有]两张桌子。","Fángjiān li yǒu liǎng zhāng zhuōzi.","Trong phòng có hai cái bàn."]],
errs:[
 {bad:"在桌子上有一本书。", good:"桌子上有一本书。", why:"Câu tồn hiện bắt đầu thẳng bằng nơi chốn, không thêm 在."},
 {bad:"桌子有一本书。", good:"桌子上有一本书。", why:"Nơi chốn cần từ phương vị: 桌子上, 教室里."},
 {bad:"一本书有桌子上。", good:"桌子上有一本书。", why:"Nơi chốn đứng đầu, vật đứng sau 有."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trên bàn có một quyển sách.", o:["在桌子上有一本书。","桌子上有一本书。","一本书有桌子上。"], a:1, why:"Nơi chốn + 有 + vật."},
  {q:"Phía trước trường là bệnh viện.", o:["学校前边是医院。","学校前边医院是。"], a:0, why:"Nơi chốn + 是 + danh từ."},
  {q:"Trong lớp có rất nhiều học sinh.", o:["教室有很多学生。","教室里有很多学生。"], a:1, why:"Cần 里 chỉ nơi chốn."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["房间里","有","两张","桌子"], a:"房间里有两张桌子。", vi:"Trong phòng có hai cái bàn."},
  {w:["我家","后边","是","商店"], a:"我家后边是商店。", vi:"Phía sau nhà tôi là cửa hàng."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Nhà tôi có một con mèo.", a:"我家有一只猫。/ 我家有一个猫。"},
  {q:"Trên bàn có một cái cốc.", a:"桌子上有一个杯子。"}]}],
rel:["一37","一01","二56","一36"]
};
