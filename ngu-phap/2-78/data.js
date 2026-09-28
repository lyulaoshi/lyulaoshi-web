// Bài ngữ pháp 【二78】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二78", title:"用“是不是”提问", vi:"Hỏi bằng 是不是 — “có phải … không?”", tag:"提问的方法",
goals:[
 "Hỏi để <b>xác nhận</b> điều đã đoán bằng <b>是不是</b>.",
 "Đặt 是不是 ở <b>cuối câu</b>, <b>đầu câu</b> hoặc <b>trước vị ngữ</b>.",
 "Không thêm 吗."],
intro:"Khi người hỏi đã đoán điều gì và muốn xác nhận, dùng <b>是不是</b>: “… phải không?”, “có phải … không?”.",
rules:[
 {t:"Ba vị trí của 是不是", sub:"", fx:[["Câu，是不是？",null],["·",""],["是不是 + câu？",null],["·",""],["S + 是不是 + V？",null]], mean:"",
  ex:[["你要去体育馆打球，[是不是]？","Nǐ yào qù tǐyùguǎn dǎ qiú, shì bu shì?","Bạn định đến nhà thi đấu chơi bóng, phải không?","等级标准"],
      ["[是不是]你拿了我的笔？","Shì bu shì nǐ ná le wǒ de bǐ?","Có phải bạn cầm bút của tôi không?","等级标准"],
      ["你[是不是]有很多中国朋友？","Nǐ shì bu shì yǒu hěn duō Zhōngguó péngyou?","Có phải bạn có nhiều bạn Trung Quốc không?","等级标准"]]}],
cmp:[
 {vn:"Bạn mệt rồi, phải không?", zh:"你累了，[是不是]？", py:"Nǐ lèi le, shì bu shì?", ok:true, why:"“phải không” cuối câu = 是不是."},
 {vn:"Có phải bạn là người Hà Nội không?", zh:"你[是不是]河内人？", py:"Nǐ shì bu shì Hénèi rén?", ok:true, why:"“có phải … không” = 是不是."}],
ex:[
 ["他今天[是不是]不来了？","Tā jīntiān shì bu shì bù lái le?","Có phải hôm nay anh ấy không đến nữa không?"],
 ["这本书是你的，[是不是]？","Zhè běn shū shì nǐ de, shì bu shì?","Quyển sách này của bạn, phải không?"]],
errs:[
 {bad:"你是不是有很多中国朋友吗？", good:"你是不是有很多中国朋友？", why:"Không thêm 吗."},
 {bad:"你有是不是很多中国朋友？", good:"你是不是有很多中国朋友？", why:"是不是 trước vị ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Có phải bạn cầm bút của tôi không?", o:["是不是你拿了我的笔？","是不是你拿了我的笔吗？","你拿了是不是我的笔？"], a:0, why:"Không 吗."},
  {q:"Bạn mệt rồi, phải không?", o:["你累了，是不是？","你累了，是不是吗？","你是累了不是？"], a:0, why:"……，是不是？"}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","是不是","有","很多","中国朋友"], a:"你是不是有很多中国朋友？", vi:"Có phải bạn có nhiều bạn Trung Quốc không?"},
  {w:["这本书","是","你的","是不是"], a:"这本书是你的，是不是？", vi:"Quyển sách này của bạn, phải không?"}]},
 {t:"C. Đổi sang câu hỏi 是不是", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"你是老师吗？", vi:"Bạn là giáo viên à?", a:"你是不是老师？"},
  {q:"他今天不来了。(xác nhận)", vi:"Hôm nay anh ấy không đến nữa.", a:"他今天不来了，是不是？/ 他今天是不是不来了？"}]}],
rel:["一48","一45","二79","一36"]
};
