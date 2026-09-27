// Bài ngữ pháp 【二74】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二74", title:"用“就”表示强调", vi:"Dùng 就 để nhấn mạnh — “chính là, ngay (ở)”", tag:"强调的方法",
goals:[
 "Dùng <b>就</b> trước 是 / 在 để nhấn mạnh: <b>就是</b> (chính là), <b>就在</b> (ngay ở).",
 "Chỉ đồ vật, nơi chốn gần ngay trước mắt.",
 "Nhận biết 就 nhấn mạnh khác 就 “thì” 【二17】."],
intro:"就 đặt trước 是 / 在 để <b>khẳng định mạnh</b>: không phải chỗ khác, chính là chỗ này.",
rules:[
 {t:"就 + 是 / 在", sub:"强调", fx:[["Chủ ngữ",""],["就",null],["是 / 在",""],["…",""]], mean:"chính là / ngay ở.",
  ex:[["教学楼[就]在前边。","Jiàoxuélóu jiù zài qiánbian.","Tòa giảng đường ở ngay phía trước.","等级标准"],
      ["你看，这[就]是我们上课的教室。","Nǐ kàn, zhè jiù shì wǒmen shàng kè de jiàoshì.","Bạn nhìn này, đây chính là phòng học của chúng tôi.","等级标准"]]}],
notes:[
 {t:"是……的 cũng nhấn mạnh", html:"xem 【二60】."}],
cmp:[
 {vn:"Nhà tôi ở ngay đằng kia.", zh:"我家[就]在那儿。", py:"Wǒ jiā jiù zài nàr.", ok:true, why:"“ngay” = 就 trước 在."},
 {vn:"Đây chính là thầy Vương.", zh:"这[就]是王老师。", py:"Zhè jiù shì Wáng lǎoshī.", ok:true, why:"“chính là” = 就是."}],
ex:[
 ["银行[就]在学校旁边。","Yínháng jiù zài xuéxiào pángbiān.","Ngân hàng ở ngay cạnh trường."],
 ["他[就]是我哥哥。","Tā jiù shì wǒ gēge.","Anh ấy chính là anh trai tôi."],
 ["我要的[就]是这个。","Wǒ yào de jiù shì zhège.","Cái tôi cần chính là cái này."]],
errs:[
 {bad:"教学楼在就前边。", good:"教学楼就在前边。", why:"就 đứng trước 在."},
 {bad:"这是就我们的教室。", good:"这就是我们的教室。", why:"就 đứng trước 是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Ngân hàng ở ngay cạnh trường.", o:["银行在就学校旁边。","银行就在学校旁边。","就银行在学校旁边。"], a:1, why:"就 + 在."},
  {q:"Đây chính là phòng học của chúng tôi.", o:["这就是我们的教室。","这是就我们的教室。","就这是我们的教室。"], a:0, why:"就 + 是."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["教学楼","就","在","前边"], a:"教学楼就在前边。", vi:"Tòa giảng đường ở ngay phía trước."},
  {w:["他","就","是","我哥哥"], a:"他就是我哥哥。", vi:"Anh ấy chính là anh trai tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Nhà tôi ở ngay đằng kia.", a:"我家就在那儿。"},
  {q:"Cái tôi cần chính là cái này.", a:"我要的就是这个。"}]}],
rel:["二17","二60","三77","一36"]
};
