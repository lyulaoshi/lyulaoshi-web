// Bài ngữ pháp 【二69】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二69", title:"紧缩复句：一……就……", vi:"Câu ghép rút gọn — hễ … là …, vừa … đã …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>一 + V1 + 就 + V2</b>: việc sau xảy ra ngay khi việc trước xảy ra.",
 "Dùng nghĩa thói quen: <b>hễ … là …</b>",
 "Đặt 一, 就 đều <b>sau chủ ngữ, trước động từ</b>."],
intro:"一……就…… nối hai hành động <b>liền nhau</b> (vừa … đã …) hoặc một quy luật (hễ … là …).",
rules:[
 {t:"S + 一 + V1，(S) + 就 + V2", sub:"一……就……", fx:[["Chủ ngữ",""],["一",null],["V1",""],["就",null],["V2",""]], mean:"",
  ex:[["他[一]起床[就]去洗脸。","Tā yì qǐ chuáng jiù qù xǐ liǎn.","Anh ấy vừa dậy là đi rửa mặt.","等级标准"],
      ["我[一]喝酒[就]脸红。","Wǒ yì hē jiǔ jiù liǎn hóng.","Tôi hễ uống rượu là đỏ mặt.","等级标准"]]}],
cmp:[
 {vn:"Tôi hễ uống rượu là đỏ mặt.", zh:"我[一]喝酒[就]脸红。", py:"Wǒ yì hē jiǔ jiù liǎn hóng.", ok:true, why:"“hễ … là …” = 一……就……"},
 {vn:"Vừa tan học anh ấy đã về nhà.", zh:"他[一]下课[就]回家了。", py:"Tā yí xià kè jiù huí jiā le.", ok:true, why:"“vừa … đã …” = 一……就……"}],
ex:[
 ["我[一]到家[就]给你打电话。","Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.","Tôi vừa về đến nhà là gọi cho bạn ngay."],
 ["他[一]看书[就]想睡觉。","Tā yí kàn shū jiù xiǎng shuì jiào.","Anh ấy hễ đọc sách là buồn ngủ."],
 ["天[一]冷，我[就]感冒。","Tiān yì lěng, wǒ jiù gǎnmào.","Trời hễ lạnh là tôi bị cảm."]],
errs:[
 {bad:"一他起床就去洗脸。", good:"他一起床就去洗脸。", why:"一 đứng sau chủ ngữ."},
 {bad:"我一到家，就我给你打电话。", good:"我一到家，就给你打电话。", why:"Cùng chủ ngữ thì không lặp; 就 trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy vừa dậy là đi rửa mặt.", o:["一他起床就去洗脸。","他一起床就去洗脸。","他起床一就去洗脸。"], a:1, why:"S + 一 + V1 + 就 + V2."},
  {q:"Trời hễ lạnh là tôi bị cảm.", o:["天一冷，我就感冒。","天一冷，就我感冒。","一天冷，我就感冒。"], a:0, why:"Hai chủ ngữ khác nhau: 天一…，我就…"}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","一","喝酒","就","脸红"], a:"我一喝酒就脸红。", vi:"Tôi hễ uống rượu là đỏ mặt."},
  {w:["我","一","到家","就","给你","打电话"], a:"我一到家就给你打电话。", vi:"Tôi vừa về đến nhà là gọi cho bạn."}]},
 {t:"C. Nối bằng 一……就……", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"他下课 / 回家了", vi:"Anh ấy tan học / về nhà", a:"他一下课就回家了。"},
  {q:"我看书 / 想睡觉", vi:"Tôi đọc sách / buồn ngủ", a:"我一看书就想睡觉。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我一到家，就给你打电话。", vi:"Tôi về đến nhà là gọi cho bạn ngay.", o:["Đúng","Sai"], a:0, why:"一 + V1，就 + V2."},
  {q:"他就一看书就睡觉。", vi:"Hễ đọc sách là anh ấy ngủ.", o:["Đúng","Sai"], a:1, why:"他一看书就睡觉。"},
  {q:"一下课，他就去食堂。", vi:"Vừa tan học anh ấy đi nhà ăn.", o:["Đúng","Sai"], a:0, why:"就 sau chủ ngữ vế sau."},
  {q:"天一黑，就路灯亮了。", vi:"Trời vừa tối là đèn đường sáng.", o:["Đúng","Sai"], a:1, why:"就 đứng sau chủ ngữ: 天一黑，路灯就亮了。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Vừa về nhà là tôi đi tắm.", o:["我一回家就洗澡。", "我回家一就洗澡。", "一我回家就洗澡。"], a:0, why:"S + 一 + V1 + 就 + V2."},
  {q:"Trời vừa mưa là đường tắc.", o:["一下雨，路上就堵车。", "一下雨，就路上堵车。"], a:0, why:"就 sau chủ ngữ vế sau."},
  {q:"Hễ uống cà phê là tôi không ngủ được.", o:["我一喝咖啡就睡不着。", "我喝咖啡一就睡不着。"], a:0, why:"一 đứng trước V1."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Vừa tan học anh ấy đi thư viện.", a:"他一下课就去图书馆。/ 一下课他就去图书馆。"},
  {q:"Tôi vừa nhìn là hiểu.", a:"我一看就懂了。/ 我一看就明白了。/ 我一看就懂。/ 我一看就明白。"},
  {q:"Về đến nhà tôi gọi cho bạn ngay.", a:"我一到家就给你打电话。/ 我一回家就给你打电话。"}]}],
rel:["二17","二20","三73","三41"]
};
