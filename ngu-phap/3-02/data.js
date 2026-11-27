// Bài ngữ pháp 【三02】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三02", title:"后缀：-儿、-家、-们、-头、-子", vi:"Hậu tố -儿, -家, -们, -头, -子", tag:"语素 · 后缀",
goals:[
 "Nhận biết 5 hậu tố tạo danh từ: <b>-儿、-家、-们、-头、-子</b>.",
 "Dùng <b>-家</b> chỉ chuyên gia, nhà (画家、作家) và <b>-们</b> chỉ số nhiều của người.",
 "Đọc đúng: -儿 cuộn lưỡi, -头 / -子 thanh nhẹ."],
intro:"Hậu tố đứng <b>sau</b> một chữ để tạo danh từ. Chúng không có nghĩa riêng rõ ràng, nhưng cho biết từ đó là danh từ.",
rules:[
 {t:"-儿: âm cuộn lưỡi, tạo danh từ", sub:"-儿", fx:[["Chữ gốc",""],["儿",null]], mean:"画 (vẽ) → 画儿 (bức tranh); 空 → 空儿 (lúc rảnh).",
  ex:[["{1|画}{2|儿}　{1|空}{2|儿}","huàr　kòngr","bức tranh　lúc rảnh","等级标准"]]},
 {t:"-家: người chuyên nghề", sub:"-家", fx:[["Lĩnh vực",""],["家",null]], mean:"画家 họa sĩ, 作家 nhà văn.",
  ex:[["{1|画}{2|家}　{1|作}{2|家}","huàjiā　zuòjiā","họa sĩ　nhà văn","等级标准"]]},
 {t:"-们: số nhiều của người", sub:"-们", fx:[["Danh từ chỉ người",""],["们",null]], mean:"Chỉ dùng với người; có số lượng cụ thể thì không thêm 们.",
  ex:[["{1|朋友}{2|们}　{1|老师}{2|们}","péngyoumen　lǎoshīmen","các bạn　các thầy cô","等级标准"]]},
 {t:"-头 · -子: danh từ đồ vật, nơi chốn", sub:"-头 · -子", fx:[["Chữ gốc",""],["头 / 子",null]], mean:"Đọc thanh nhẹ: tou, zi.",
  ex:[["{1|石}{2|头}　{1|里}{2|头}","shítou　lǐtou","hòn đá　bên trong","等级标准"],
      ["{1|瓶}{2|子}　{1|屋}{2|子}","píngzi　wūzi","cái chai　căn phòng","等级标准"]]},
 {t:"-员: người làm một việc, thành viên", sub:"-员 · HSK 3", fx:[["Công việc / tổ chức",""],["员",null]], mean:"服务员 nhân viên phục vụ · 售货员 người bán hàng · 运动员 vận động viên.",
  ex:[["{1|服务}{2|员}，请给我一杯水。", "Fúwùyuán, qǐng gěi wǒ yì bēi shuǐ.", "Em ơi, cho tôi một cốc nước."],
      ["他哥哥是{1|运动}{2|员}。", "Tā gēge shì yùndòngyuán.", "Anh trai bạn ấy là vận động viên."],
      ["{1|售货}{2|员}很热情。", "Shòuhuòyuán hěn rèqíng.", "Người bán hàng rất nhiệt tình."]]}],
cmp:[
 {vn:"các bạn học sinh", zh:"同学[们]", py:"tóngxuémen", ok:true, why:"“các” đứng trước; 们 đứng sau."},
 {vn:"ba người bạn", zh:"三个朋友", py:"sān ge péngyou", ok:false, tag:"(không thêm 们)", why:"Đã có số lượng thì không thêm 们."}],
ex:[
 ["你有[空儿]吗？","Nǐ yǒu kòngr ma?","Bạn có rảnh không?"],
 ["他是一位有名的画[家]。","Tā shì yí wèi yǒumíng de huàjiā.","Ông ấy là một họa sĩ nổi tiếng."],
 ["同学[们]，上课了！","Tóngxuémen, shàng kè le!","Các em, vào học rồi!"],
 ["瓶[子]里没有水了。","Píngzi li méiyǒu shuǐ le.","Trong chai hết nước rồi."]],
errs:[
 {bad:"三个朋友们", good:"三个朋友", why:"Có số lượng thì bỏ 们."},
 {bad:"书们", good:"书 / 这些书", why:"们 chỉ dùng cho người."},
 {bad:"家画", good:"画家", why:"Hậu tố đứng sau."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"họa sĩ", o:["家画","画家","画们"], a:1, why:"画 + 家."},
  {q:"ba người bạn", o:["三个朋友们","三个朋友","三朋友们"], a:1, why:"Có số lượng bỏ 们."},
  {q:"Chọn cách nói SAI:", o:["同学们","老师们","桌子们"], a:2, why:"们 chỉ dùng cho người."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","是","一位","有名的","画家"], a:"他是一位有名的画家。", vi:"Ông ấy là một họa sĩ nổi tiếng."},
  {w:["瓶子里","没有","水","了"], a:"瓶子里没有水了。", vi:"Trong chai hết nước rồi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bạn có rảnh không?", a:"你有空儿吗？/ 你有空吗？"},
  {q:"Các em, vào học rồi!", a:"同学们，上课了！"}]},
 {t:"D. Từ bổ sung", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"她在商店工作，是一名售货＿。", vi:"Chị ấy làm ở cửa hàng, là người bán hàng.", o:["员", "家", "子"], a:0, why:"Người làm nghề → 员."}]}],
rel:["三01","一05","二06","一08"]
};
