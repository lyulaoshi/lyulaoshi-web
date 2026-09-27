// Bài ngữ pháp 【二40】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二40", title:"动词性短语", vi:"Cụm động từ — cụm có động từ làm trung tâm", tag:"短语 · 功能类型",
goals:[
 "Nhận ra cụm động từ: <b>động từ + tân ngữ / bổ ngữ</b>, <b>trạng ngữ + động từ</b>, <b>năng nguyện + động từ</b>.",
 "Dùng cụm động từ làm vị ngữ.",
 "Giữ đúng vị trí: trạng ngữ / năng nguyện trước, tân ngữ / bổ ngữ sau."],
intro:"Cụm động từ hoạt động như <b>một động từ</b>, thường làm vị ngữ của câu.",
rules:[
 {t:"Các dạng cụm động từ", sub:"动词性短语", fx:[["(trạng ngữ / 能愿)",""],["Động từ",null],["(tân ngữ / bổ ngữ)",""]], mean:"",
  ex:[["买水果　写完　拿出来","mǎi shuǐguǒ　xiěwán　ná chūlai","mua hoa quả　viết xong　lấy ra","等级标准"],
      ["常常休息　可以去","chángcháng xiūxi　kěyǐ qù","thường nghỉ ngơi　có thể đi","等级标准"]]}],
cmp:[
 {vn:"có thể đi", zh:"[可以]去", py:"kěyǐ qù", ok:true, why:"Năng nguyện trước động từ — giống tiếng Việt."},
 {vn:"viết xong", zh:"写[完]", py:"xiěwán", ok:true, why:"Bổ ngữ kết quả sau động từ — giống tiếng Việt."}],
ex:[
 ["我[写完]作业了。","Wǒ xiěwán zuòyè le.","Tôi làm xong bài tập rồi."],
 ["他[常常休息]。","Tā chángcháng xiūxi.","Anh ấy thường nghỉ ngơi."],
 ["你[可以去]。","Nǐ kěyǐ qù.","Bạn có thể đi."],
 ["他从包里[拿出来]一本书。","Tā cóng bāo li ná chūlai yì běn shū.","Anh ấy lấy từ trong túi ra một quyển sách."]],
errs:[
 {bad:"休息常常", good:"常常休息", why:"Trạng ngữ trước động từ."},
 {bad:"去可以", good:"可以去", why:"Năng nguyện trước động từ."},
 {bad:"完写", good:"写完", why:"Bổ ngữ sau động từ."}],
practice:[
 {t:"A. Đâu là cụm động từ?", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chọn cụm động từ:", o:["新书","写完","很舒服"], a:1, why:"Động từ + bổ ngữ."},
  {q:"Chọn cụm động từ:", o:["可以去","我的衣服","一条河"], a:0, why:"Năng nguyện + động từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","写完","作业","了"], a:"我写完作业了。", vi:"Tôi làm xong bài tập rồi."},
  {w:["他","常常","休息"], a:"他常常休息。", vi:"Anh ấy thường nghỉ ngơi."}]},
 {t:"C. Mở rộng động từ thành cụm", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"看 (+ tân ngữ)", a:"看书、看电影…"},
  {q:"吃 (+ bổ ngữ kết quả)", a:"吃完、吃饱…"},
  {q:"去 (+ năng nguyện)", a:"想去、可以去、要去…"}]}],
rel:["二37","二39","二41","二49"]
};
