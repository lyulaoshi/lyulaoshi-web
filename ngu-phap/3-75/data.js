// Bài ngữ pháp 【三75】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三75", title:"用“一点儿也不……”表示强调", vi:"Nhấn mạnh bằng 一点儿也不 — không … chút nào", tag:"强调的方法",
goals:[
 "Phủ định mạnh bằng <b>一点儿也 / 都 + 不 / 没 + Adj / V</b>.",
 "Đặt 一点儿也不 <b>trước</b> tính từ, không đặt sau."],
intro:"Giống “chẳng … chút nào / không … tí nào”. Tiếng Việt “chút nào” ở cuối, còn tiếng Trung 一点儿也不 ở <b>trước</b>.",
rules:[
 {t:"S + 一点儿 + 也 / 都 + 不 / 没 + Adj / V", sub:"强调", fx:[["S",""],["一点儿也 / 都",null],["不 / 没",null],["Adj / V",""]], mean:"",
  ex:[["中文[一点儿也不]简单。","Zhōngwén yìdiǎnr yě bù jiǎndān.","Tiếng Trung chẳng đơn giản chút nào.","等级标准"],
      ["这双球鞋穿着[一点儿也不]舒服。","Zhè shuāng qiúxié chuān zhe yìdiǎnr yě bù shūfu.","Đôi giày thể thao này đi chẳng thoải mái chút nào.","等级标准"]]}],
cmp:[
 {vn:"Tôi không mệt chút nào.", zh:"我[一点儿也不]累。", py:"Wǒ yìdiǎnr yě bú lèi.", ok:false, tag:"(trật tự khác)", why:"“chút nào” cuối câu → 一点儿也 lên trước 不."}],
ex:[
 ["我[一点儿都不]饿。","Wǒ yìdiǎnr dōu bú è.","Tôi chẳng đói tí nào."],
 ["他[一点儿也没]变。","Tā yìdiǎnr yě méi biàn.","Anh ấy chẳng thay đổi chút nào."]],
errs:[
 {bad:"我不累一点儿。", good:"我一点儿也不累。", why:"一点儿也 đứng trước 不."},
 {bad:"我一点儿不也累。", good:"我一点儿也不累。", why:"Thứ tự: 一点儿 + 也 + 不."},
 {bad:"这个菜有点儿也不好吃。", good:"这个菜一点儿也不好吃。", why:"Dùng 一点儿, không phải 有点儿."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi không mệt chút nào.", o:["我不累一点儿。","我一点儿也不累。","我有点儿也不累。"], a:1, why:"一点儿也不 + Adj."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["中文","一点儿","也","不","简单"], a:"中文一点儿也不简单。", vi:"Tiếng Trung chẳng đơn giản chút nào."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi chẳng đói tí nào.", a:"我一点儿也不饿。/ 我一点儿都不饿。"},
  {q:"Anh ấy chẳng thay đổi chút nào.", a:"他一点儿也没变。/ 他一点儿都没变。"}]}],
rel:["三41","二74","三76","三19"]
};
