// Bài ngữ pháp 【一37】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一37", title:"“有”字句1", vi:"Câu chữ “有” — có (sở hữu, tồn tại)", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng <b>A 有 B</b> nói sở hữu (tôi có…).",
 "Dùng <b>Nơi chốn + 有 + người / vật</b> nói tồn tại (ở đâu có…).",
 "Phủ định luôn bằng <b>没有</b> (không bao giờ 不有)."],
intro:"有 = “có”. Đề cương HSK 1 dạy 2 nghĩa: <b>sở hữu</b> và <b>tồn tại</b>. Trật tự giống tiếng Việt.",
rules:[
 {t:"Sở hữu: A 有 B", sub:"表示领有", fx:[["Người / vật",""],["有 / 没有",null],["(số lượng) + N",""]], mean:"Ai có cái gì; một tổng thể có bao nhiêu phần.",
  ex:[["我[有]很多书。","Wǒ yǒu hěn duō shū.","Tôi có rất nhiều sách.","等级标准"],
      ["他[没有]哥哥。","Tā méiyǒu gēge.","Anh ấy không có anh trai.","等级标准"],
      ["一个星期[有]七天。","Yí ge xīngqī yǒu qī tiān.","Một tuần có bảy ngày.","等级标准"]]},
 {t:"Tồn tại: Nơi chốn + 有 + N", sub:"表示存在", fx:[["Nơi chốn","房间里、桌子上…"],["有 / 没有",null],["(số lượng) + N",""]], mean:"Ở đâu có gì. Nơi chốn đứng <b>đầu câu</b>; đồ vật cần phương vị 【一01】.",
  ex:[["房间里[有]两张桌子。","Fángjiān li yǒu liǎng zhāng zhuōzi.","Trong phòng có hai cái bàn.","等级标准"],
      ["房间里[没有]桌子。","Fángjiān li méiyǒu zhuōzi.","Trong phòng không có bàn.","等级标准"]]}],
notes:[
 {t:"有 hay 是 / 在?", html:"<span class='zh'>学校东边有一个医院。</span> (có một bệnh viện — mới giới thiệu) · <span class='zh'>学校东边是医院。</span> (là bệnh viện — nói rõ là gì 【一36】) · <span class='zh'>医院在学校东边。</span> (vật đã biết, hỏi vị trí 【一16】)."},
 {t:"Câu hỏi", html:"<span class='zh'>你有哥哥吗？/ 你有没有哥哥？</span>"}],
cmp:[
 {vn:"Nhà tôi có bốn người.", zh:"我家[有]四口人。", py:"Wǒ jiā yǒu sì kǒu rén.", ok:true, why:"Giống tiếng Việt."},
 {vn:"Trong phòng có hai cái bàn.", zh:"房间里[有]两张桌子。", py:"Fángjiān li yǒu liǎng zhāng zhuōzi.", ok:true, why:"Nơi chốn + 有 + vật — giống tiếng Việt, nhưng 里 đứng sau."},
 {vn:"Tôi không có thời gian.", zh:"我[没有]时间。", py:"Wǒ méiyǒu shíjiān.", ok:true, why:"“không có” = 没有."}],
ex:[
 ["你[有]中文书吗？","Nǐ yǒu Zhōngwén shū ma?","Bạn có sách tiếng Trung không?"],
 ["我家[有]一只猫。","Wǒ jiā yǒu yì zhī māo.","Nhà tôi có một con mèo."],
 ["学校前边[有]一个商店。","Xuéxiào qiánbian yǒu yí ge shāngdiàn.","Trước trường có một cửa hàng."],
 ["桌子上[没有]手机。","Zhuōzi shang méiyǒu shǒujī.","Trên bàn không có điện thoại."]],
errs:[
 {bad:"我不有哥哥。", good:"我没有哥哥。", why:"有 chỉ phủ định bằng 没."},
 {bad:"房间有两张桌子。（ý: trong phòng）", good:"房间里有两张桌子。", why:"Nói nơi chốn cần 里."},
 {bad:"两张桌子有房间里。", good:"房间里有两张桌子。", why:"Nơi chốn đứng đầu câu."},
 {bad:"我家在四口人。", good:"我家有四口人。", why:"“có” = 有, không phải 在."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi không có anh trai.", o:["我不有哥哥。","我没有哥哥。","我有不哥哥。"], a:1, why:"没有."},
  {q:"Trong phòng có hai cái bàn.", o:["房间里有两张桌子。","两张桌子有房间里。","房间有里两张桌子。"], a:0, why:"Nơi chốn + 有 + N."},
  {q:"Một tuần có bảy ngày.", o:["一个星期是七天。","一个星期在七天。","一个星期有七天。"], a:2, why:"有."},
  {q:"Bạn có sách tiếng Trung không?", o:["你有没有中文书吗？","你有中文书吗？","你中文书有吗？"], a:1, why:"有 + N + 吗."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","有","很多","书"], a:"我有很多书。", vi:"Tôi có rất nhiều sách."},
  {w:["房间里","没有","桌子"], a:"房间里没有桌子。", vi:"Trong phòng không có bàn."},
  {w:["学校","前边","有","一个","商店"], a:"学校前边有一个商店。", vi:"Trước trường có một cửa hàng."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Nhà tôi có bốn người.", a:"我家有四口人。"},
  {q:"Trên bàn không có điện thoại.", a:"桌子上没有手机。"},
  {q:"Bạn có anh chị em không?", a:"你有没有兄弟姐妹？/ 你有兄弟姐妹吗？"}]}],
rel:["一01","一36","一16","二55","二56"]
};
