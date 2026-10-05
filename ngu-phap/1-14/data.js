// Bài ngữ pháp 【一14】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一14", title:"否定副词：别、不、没、没有", vi:"Phó từ phủ định — 不, 没 (没有), 别", tag:"词类 · 副词",
goals:[
 "Dùng <b>不</b> phủ định hiện tại, tương lai, thói quen, tính từ và 是 / 会 / 能 / 想.",
 "Dùng <b>没 / 没有</b> phủ định việc <b>đã xảy ra</b> và phủ định 有.",
 "Dùng <b>别</b> để khuyên, cấm (“đừng”)."],
intro:"Tiếng Việt có “không, chưa, đừng”; tiếng Trung chọn phủ định theo <b>thời điểm và loại từ</b>: 不 hay 没. Cả ba đều đứng <b>trước động từ / tính từ</b>.",
rules:[
 {t:"不: không (bây giờ, sau này, thói quen, tính chất)", sub:"不", fx:[["Chủ ngữ",""],["不",null],["Động từ / tính từ",""]], mean:"Ý muốn, thói quen, sự thật, tính từ, 是、会、能、想…",
  ex:[["今天[不]热。","Jīntiān bú rè.","Hôm nay không nóng.","等级标准"],
      ["我明天[不]去。","Wǒ míngtiān bú qù.","Mai tôi không đi."]]},
 {t:"没 / 没有: không, chưa (đã không xảy ra)", sub:"没 · 没有", fx:[["Chủ ngữ",""],["没 / 没有",null],["Động từ",""]], mean:"Phủ định việc đã qua; câu có 没 bỏ 了. Phủ định 有 luôn là 没有.",
  ex:[["他昨天[没]上课。","Tā zuótiān méi shàng kè.","Hôm qua anh ấy không lên lớp.","等级标准"],
      ["我今天[没有]吃早饭。","Wǒ jīntiān méiyǒu chī zǎofàn.","Hôm nay tôi chưa ăn sáng.","等级标准"]]},
 {t:"别: đừng", sub:"别", fx:[["(你)",""],["别",null],["Động từ",""]], mean:"Câu cầu khiến: khuyên, ngăn cản 【一34】.",
  ex:[["你[别]进来。","Nǐ bié jìnlai.","Bạn đừng vào.","等级标准"],
      ["[别]说了！","Bié shuō le!","Đừng nói nữa!"]]}],
notes:[
 {t:"Không dùng 没 với 是", html:"<span class='zh'>他不是老师。</span> (<svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> 没是)"},
 {t:"不 biến điệu", html:"trước thanh 4 đọc <b>bú</b>: <span class='zh'>不是 bú shì、不去 bú qù</span>."}],
cmp:[
 {vn:"Mai tôi không đi.", zh:"我明天[不]去。", py:"Wǒ míngtiān bú qù.", ok:true, why:"Tương lai → 不."},
 {vn:"Hôm qua tôi không đi.", zh:"我昨天[没]去。", py:"Wǒ zuótiān méi qù.", ok:true, why:"Đã qua → 没."},
 {vn:"Tôi chưa ăn sáng.", zh:"我[没有]吃早饭。", py:"Wǒ méiyǒu chī zǎofàn.", ok:true, why:"“chưa” (việc chưa xảy ra) → 没(有)."},
 {vn:"Đừng nói nữa!", zh:"[别]说了！", py:"Bié shuō le!", ok:true, why:"“đừng” → 别."}],
ex:[
 ["我[不]喜欢喝咖啡。","Wǒ bù xǐhuan hē kāfēi.","Tôi không thích uống cà phê."],
 ["他[不]会游泳。","Tā bú huì yóuyǒng.","Anh ấy không biết bơi."],
 ["我[没有]哥哥。","Wǒ méiyǒu gēge.","Tôi không có anh trai."],
 ["昨天我[没]看电视。","Zuótiān wǒ méi kàn diànshì.","Hôm qua tôi không xem ti vi."],
 ["上课了，[别]说话。","Shàng kè le, bié shuō huà.","Vào học rồi, đừng nói chuyện."]],
errs:[
 {bad:"我没是学生。", good:"我不是学生。", why:"是 chỉ phủ định bằng 不."},
 {bad:"他昨天不上课。（ý: đã không đi học）", good:"他昨天没上课。", why:"Việc đã qua dùng 没."},
 {bad:"我不有哥哥。", good:"我没有哥哥。", why:"有 phủ định bằng 没."},
 {bad:"我没吃了早饭。", good:"我没吃早饭。", why:"Có 没 thì bỏ 了."},
 {bad:"别你说话。", good:"你别说话。", why:"别 đứng sau chủ ngữ, trước động từ."}],
practice:[
 {t:"A. Điền 不 / 没 / 别", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我明天＿＿去学校。", vi:"Mai tôi ＿＿ đến trường.", o:["不","没","别"], a:0, why:"Tương lai → 不."},
  {q:"他昨天＿＿来上课。", vi:"Hôm qua anh ấy ＿＿ đến lớp.", o:["不","没","别"], a:1, why:"Đã qua → 没."},
  {q:"我＿＿有中文书。", vi:"Tôi ＿＿ có sách tiếng Trung.", o:["不","没","别"], a:1, why:"没有."},
  {q:"你＿＿喝了，太晚了。", vi:"Bạn ＿＿ uống nữa, muộn quá rồi.", o:["不","没","别"], a:2, why:"Khuyên ngăn → 别."},
  {q:"她＿＿是我姐姐。", vi:"Cô ấy ＿＿ phải là chị gái tôi.", o:["不","没","别"], a:0, why:"不是."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","昨天","没","上课"], a:"他昨天没上课。", alt:["昨天他没上课。"], vi:"Hôm qua anh ấy không lên lớp."},
  {w:["你","别","进来"], a:"你别进来。", vi:"Bạn đừng vào."},
  {w:["今天","不","热"], a:"今天不热。", vi:"Hôm nay không nóng."}]},
 {t:"C. Sửa câu sai", sub:"tự sửa rồi xem đáp án", type:"show", items:[
  {q:"我不有时间。", vi:"(ý: Tôi không có thời gian.)", bad:true, a:"我没有时间。"},
  {q:"他没是中国人。", vi:"(ý: Anh ấy không phải người Trung Quốc.)", bad:true, a:"他不是中国人。"},
  {q:"昨天我没去了商店。", vi:"(ý: Hôm qua tôi không đi cửa hàng.)", bad:true, a:"昨天我没去商店。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我昨天不去学校。", vi:"Hôm qua tôi không đến trường.", o:["Đúng","Sai"], a:1, why:"Việc đã qua dùng 没: 我昨天没去学校。"},
  {q:"他没是老师。", vi:"Anh ấy không phải giáo viên.", o:["Đúng","Sai"], a:1, why:"是 chỉ phủ định bằng 不: 他不是老师。"},
  {q:"我不喜欢吃辣的。", vi:"Tôi không thích ăn cay.", o:["Đúng","Sai"], a:0, why:"Sở thích → 不."},
  {q:"你别说话了。", vi:"Bạn đừng nói nữa.", o:["Đúng","Sai"], a:0, why:"别 + V: khuyên ngăn."}]},
 {t:"E. Chọn 不 hay 没", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我以前＿＿喜欢喝茶，现在喜欢了。", vi:"Trước đây tôi ＿＿ thích uống trà, giờ thì thích rồi.", o:["不", "没"], a:0, why:"Thích / không thích (tâm lý, trạng thái) → 不, kể cả trong quá khứ."},
  {q:"他今天＿＿来上课，他病了。", vi:"Hôm nay anh ấy ＿＿ đến lớp, anh ấy ốm rồi.", o:["不", "没"], a:1, why:"Việc đã (không) xảy ra → 没."},
  {q:"我＿＿会说日语。", vi:"Tôi ＿＿ biết nói tiếng Nhật.", o:["不", "没"], a:0, why:"会 phủ định bằng 不."},
  {q:"我还＿＿吃晚饭呢。", vi:"Tôi vẫn ＿＿ ăn tối.", o:["不", "没"], a:1, why:"“chưa” (việc chưa xảy ra) → 还没……呢."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Hôm qua tôi không đi siêu thị.", a:"昨天我没去超市。/ 我昨天没去超市。/ 昨天我没有去超市。/ 我昨天没有去超市。"},
  {q:"Anh ấy không phải giáo viên.", a:"他不是老师。"},
  {q:"Đừng uống nữa!", a:"别喝了！/ 你别喝了！"}]}],
rel:["一34","一21","一40","一37"]
};
