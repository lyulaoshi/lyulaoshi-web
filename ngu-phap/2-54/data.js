// Bài ngữ pháp 【二54】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二54", title:"主谓句3：名词谓语句", vi:"Câu vị ngữ danh từ — 明天阴天。他中国人。", tag:"句子的类型 · 句型",
goals:[
 "Đặt câu có <b>danh từ / cụm danh từ làm vị ngữ</b> để nói thời gian, thời tiết, quê quán, tuổi, giá.",
 "Biết câu khẳng định không cần 是, còn phủ định phải có <b>不是</b>.",
 "Nhận ra loại câu này là kiểu câu thứ ba sau câu vị ngữ động từ 【一29】 và tính từ 【一30】."],
intro:"Đây là <b>kiểu câu</b> tương ứng với thành phần vị ngữ danh từ 【二48】. Chủ ngữ + danh từ, không có động từ.",
rules:[
 {t:"Chủ ngữ + danh từ / cụm danh từ", sub:"名词谓语句", fx:[["Chủ ngữ",""],["Danh từ / cụm danh từ",null]], mean:"Chỉ dùng trong câu khẳng định ngắn, khẩu ngữ.",
  ex:[["明天[阴天]。","Míngtiān yīntiān.","Mai trời âm u.","等级标准"],
      ["他[中国人]。","Tā Zhōngguó rén.","Anh ấy người Trung Quốc.","等级标准"],
      ["现在[八点二十分]。","Xiànzài bā diǎn èrshí fēn.","Bây giờ 8 giờ 20.","等级标准"]]}],
notes:[
 {t:"Phủ định", html:"<span class='zh'>他不是中国人。明天不是阴天。</span>"}],
cmp:[
 {vn:"Mai trời âm u.", zh:"明天[阴天]。", py:"Míngtiān yīntiān.", ok:true, why:"Không cần động từ."},
 {vn:"Anh ấy không phải người Trung Quốc.", zh:"他[不是]中国人。", py:"Tā bú shì Zhōngguó rén.", ok:true, why:"Phủ định cần 不是."}],
ex:[
 ["今天星期三。","Jīntiān xīngqīsān.","Hôm nay thứ Tư."],
 ["这件衣服一百块。","Zhè jiàn yīfu yìbǎi kuài.","Chiếc áo này 100 tệ."],
 ["我今年十九岁。","Wǒ jīnnián shíjiǔ suì.","Năm nay tôi 19 tuổi."]],
errs:[
 {bad:"他不中国人。", good:"他不是中国人。", why:"Phủ định phải có 是."},
 {bad:"今天没星期三。", good:"今天不是星期三。", why:"Dùng 不是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy không phải người Trung Quốc.", o:["他不中国人。","他不是中国人。","他没中国人。"], a:1, why:"不是."},
  {q:"Bây giờ 8 giờ 20.", o:["现在八点二十分。","现在是八点二十分了的。","现在在八点二十分。"], a:0, why:"Danh từ làm vị ngữ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["明天","阴天"], a:"明天阴天。", vi:"Mai trời âm u."},
  {w:["我","今年","十九岁"], a:"我今年十九岁。", vi:"Năm nay tôi 19 tuổi."}]},
 {t:"C. Đổi sang phủ định", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"今天星期三。", a:"今天不是星期三。"},
  {ask:"Phủ định", q:"他中国人。", a:"他不是中国人。"}]}],
rel:["二48","一29","一30","三53"]
};
