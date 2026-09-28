// Bài ngữ pháp 【三41】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三41", title:"一……也 / 都＋不 / 没……", vi:"一……也 / 都 + 不 / 没 — một … cũng không", tag:"固定格式",
goals:[
 "Nhấn mạnh phủ định tuyệt đối bằng <b>一 + lượng từ + N + 也 / 都 + 不 / 没 + V</b>.",
 "Đưa cụm “一 + lượng từ + N” lên <b>trước động từ</b>.",
 "Dùng 不 cho thói quen / khả năng, 没 cho việc đã qua."],
intro:"Tiếng Việt: “không biết <b>một câu</b> nào”. Tiếng Trung đưa “一句” lên trước: 他<b>一句</b>中文<b>也不</b>会说.",
rules:[
 {t:"一 + lượng từ (+ N) + 也 / 都 + 不 / 没 + V", sub:"强调否定", fx:[["(S)",""],["一 + lượng từ + N",null],["也 / 都",null],["不 / 没 + V",""]], mean:"",
  ex:[["他[一句]中文[也不]会说。","Tā yí jù Zhōngwén yě bú huì shuō.","Anh ấy không biết nói một câu tiếng Trung nào.","等级标准"],
      ["我上午[一口]水[也没]喝，现在渴极了。","Wǒ shàngwǔ yì kǒu shuǐ yě méi hē, xiànzài kě jí le.","Cả buổi sáng tôi chưa uống ngụm nước nào, giờ khát lắm.","等级标准"],
      ["他[一个]汉字[都不]认识。","Tā yí ge Hànzì dōu bú rènshi.","Anh ấy không biết một chữ Hán nào.","等级标准"],
      ["这个公园我[一次][都没]去过。","Zhège gōngyuán wǒ yí cì dōu méi qù guo.","Công viên này tôi chưa đến lần nào.","等级标准"]]}],
cmp:[
 {vn:"Tôi không có một đồng nào.", zh:"我[一分钱][也没]有。", py:"Wǒ yì fēn qián yě méi yǒu.", ok:true, why:"“một … nào” đưa lên trước 也没."}],
ex:[
 ["教室里[一个]人[也没]有。","Jiàoshì li yí ge rén yě méi yǒu.","Trong lớp không có một ai."],
 ["我[一点儿][也不]累。","Wǒ yìdiǎnr yě bú lèi.","Tôi không mệt chút nào."]],
errs:[
 {bad:"他也不会说一句中文。", good:"他一句中文也不会说。", why:"Cụm 一…… đứng trước 也不."},
 {bad:"我没喝一口水也。", good:"我一口水也没喝。", why:"Thứ tự: 一口水 + 也没 + 喝."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy không biết một chữ Hán nào.", o:["他都不认识一个汉字。","他一个汉字都不认识。"], a:1, why:"一…都不 + V."},
  {q:"Tôi chưa đến lần nào.", o:["我一次都没去过。","我一次都不去过。"], a:0, why:"Việc đã qua → 没."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","一句","中文","也不","会说"], a:"他一句中文也不会说。", vi:"Anh ấy không biết nói một câu tiếng Trung nào."},
  {w:["教室里","一个人","也","没有"], a:"教室里一个人也没有。", vi:"Trong lớp không có một ai."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi không mệt chút nào.", a:"我一点儿也不累。/ 我一点儿都不累。"},
  {q:"Tôi không có một đồng nào.", a:"我一分钱也没有。/ 我一分钱都没有。"}]}],
rel:["三75","三07","一14","二32"]
};
