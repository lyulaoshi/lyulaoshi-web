// Bài ngữ pháp 【三49】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三49", title:"程度补语1", vi:"Bổ ngữ mức độ 1 — …得很, …极了, …死了", tag:"句子成分 · 补语",
goals:[
 "Nói mức độ rất cao bằng <b>Adj / động từ tâm lý + 得很 / 极了 / 死了</b>.",
 "Biết 死了 thường dùng cho cảm giác khó chịu (mệt chết, nóng chết), khẩu ngữ.",
 "Không thêm 很 phía trước."],
intro:"Bổ ngữ mức độ đứng <b>sau</b> tính từ — giống “mệt <b>lắm</b>, đẹp <b>cực</b>” của tiếng Việt.",
rules:[
 {t:"Adj / động từ tâm lý + 得很 / 极了 / 死了", sub:"程度补语", fx:[["Tính từ / 喜欢…",""],["得很 / 极了 / 死了",null]], mean:"",
  ex:[["我累[得很]。","Wǒ lèi de hěn.","Tôi mệt lắm.","等级标准"],
      ["外面冷[极了]。","Wàimiàn lěng jí le.","Bên ngoài lạnh cực kỳ.","等级标准"],
      ["这个游戏孩子们喜欢[极了]。","Zhège yóuxì háizimen xǐhuan jí le.","Trò chơi này bọn trẻ thích lắm.","等级标准"],
      ["他们今天忙[死了]。","Tāmen jīntiān máng sǐ le.","Hôm nay họ bận chết đi được.","等级标准"]]}],
cmp:[
 {vn:"Đẹp cực!", zh:"漂亮[极了]！", py:"Piàoliang jí le!", ok:true, why:"“cực” sau tính từ — giống tiếng Việt."},
 {vn:"Nóng chết đi được!", zh:"热[死了]！", py:"Rè sǐ le!", ok:true, why:"“chết đi được” = 死了."}],
ex:[
 ["今天好[得很]。","Jīntiān hǎo de hěn.","Hôm nay tốt lắm."],
 ["这个菜好吃[极了]！","Zhège cài hǎochī jí le!","Món này ngon cực!"],
 ["我饿[死了]。","Wǒ è sǐ le.","Tôi đói chết mất."]],
errs:[
 {bad:"我很累极了。", good:"我累极了。", why:"Không thêm 很."},
 {bad:"我极了累。", good:"我累极了。", why:"极了 đứng sau tính từ."},
 {bad:"我累得很了。", good:"我累得很。", why:"得很 không thêm 了."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bên ngoài lạnh cực.", o:["外面冷极了。","外面很冷极了。","外面极了冷。"], a:0, why:"Adj + 极了."},
  {q:"Tôi mệt lắm.", o:["我累得很。","我累得很了。","我得很累。"], a:0, why:"Adj + 得很."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个游戏","孩子们","喜欢","极了"], a:"这个游戏孩子们喜欢极了。", vi:"Trò chơi này bọn trẻ thích lắm."},
  {w:["他们","今天","忙","死了"], a:"他们今天忙死了。", vi:"Hôm nay họ bận chết đi được."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Món này ngon cực!", a:"这个菜好吃极了！"},
  {q:"Tôi đói chết mất.", a:"我饿死了。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"今天热极了。", vi:"Hôm nay nóng vô cùng.", o:["Đúng","Sai"], a:0, why:"Adj + 极了."},
  {q:"我累得很。", vi:"Tôi mệt lắm.", o:["Đúng","Sai"], a:0, why:"Adj + 得很."},
  {q:"我很累死了。", vi:"Tôi mệt chết đi được.", o:["Đúng","Sai"], a:1, why:"Đã có bổ ngữ mức độ thì bỏ 很: 我累死了。"},
  {q:"他高兴得极了。", vi:"Anh ấy vui vô cùng.", o:["Đúng","Sai"], a:1, why:"极了 đứng ngay sau tính từ, không có 得: 他高兴极了。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm nay nóng kinh khủng.", o:["今天热死了。", "今天死热了。"], a:0, why:"Adj + 死了."},
  {q:"Món này ngon tuyệt.", o:["这个菜好吃极了。", "这个菜极了好吃。", "这个菜好吃得极了。"], a:0, why:"Adj + 极了."},
  {q:"Tôi mệt lắm.", o:["我累得很。", "我得很累。"], a:0, why:"Adj + 得很."},
  {q:"Hôm nay đẹp trời vô cùng.", o:["今天天气好极了。", "今天天气很好极了。"], a:0, why:"Không thêm 很."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Mệt chết đi được!", a:"累死了！/ 我累死了！"},
  {q:"Hôm nay lạnh vô cùng.", a:"今天冷极了。/ 今天冷死了。/ 今天冷得很。"},
  {q:"Câu hỏi này khó lắm.", a:"这个问题难极了。/ 这个问题难得很。/ 这个问题难死了。"}]}],
rel:["二51","一09","二31","三75"]
};
