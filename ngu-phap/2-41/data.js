// Bài ngữ pháp 【二41】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二41", title:"形容词性短语", vi:"Cụm tính từ — cụm có tính từ làm trung tâm", tag:"短语 · 功能类型",
goals:[
 "Nhận ra cụm tính từ: <b>phó từ + tính từ</b>, <b>tính từ + 一点儿</b>, <b>又 A 又 B</b>.",
 "Dùng cụm tính từ làm vị ngữ, định ngữ (thêm 的).",
 "Không dùng 是 trước cụm tính từ làm vị ngữ."],
intro:"Cụm tính từ hoạt động như <b>một tính từ</b>: làm vị ngữ (房间很舒服) hoặc định ngữ (很舒服的房间).",
rules:[
 {t:"Các dạng cụm tính từ", sub:"形容词性短语", fx:[["(很 / 非常…)",""],["Tính từ",null],["(一点儿)",""]], mean:"",
  ex:[["很舒服　非常高兴","hěn shūfu　fēicháng gāoxìng","rất thoải mái　vô cùng vui","等级标准"],
      ["大一点儿　又漂亮又可爱","dà yìdiǎnr　yòu piàoliang yòu kě'ài","to hơn một chút　vừa xinh vừa đáng yêu","等级标准"]]}],
cmp:[
 {vn:"Căn phòng rất thoải mái.", zh:"房间[很舒服]。", py:"Fángjiān hěn shūfu.", ok:true, why:"Cụm tính từ làm vị ngữ, không có 是."},
 {vn:"một căn phòng rất thoải mái", zh:"一个[很舒服的]房间", py:"yí ge hěn shūfu de fángjiān", ok:true, why:"Làm định ngữ: thêm 的, đặt trước danh từ."}],
ex:[
 ["今天我[非常高兴]。","Jīntiān wǒ fēicháng gāoxìng.","Hôm nay tôi vô cùng vui."],
 ["有没有[大一点儿]的？","Yǒu méiyǒu dà yìdiǎnr de?","Có cái nào to hơn một chút không?"],
 ["她的女儿[又漂亮又可爱]。","Tā de nǚ'ér yòu piàoliang yòu kě'ài.","Con gái chị ấy vừa xinh vừa đáng yêu."]],
errs:[
 {bad:"房间是很舒服。", good:"房间很舒服。", why:"Không dùng 是 trước cụm tính từ."},
 {bad:"一点儿大", good:"大一点儿", why:"一点儿 đứng sau tính từ khi so sánh."},
 {bad:"很舒服房间", good:"很舒服的房间", why:"Làm định ngữ cần 的."}],
practice:[
 {t:"A. Chọn cụm đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"to hơn một chút", o:["一点儿大","大一点儿","有点儿大"], a:1, why:"Adj + 一点儿."},
  {q:"căn phòng rất thoải mái", o:["很舒服房间","很舒服的房间","房间很舒服的"], a:1, why:"很 Adj 的 N."},
  {q:"Chọn cụm tính từ:", o:["买水果","非常高兴","两本书"], a:1, why:"Phó từ + tính từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她的女儿","又漂亮","又可爱"], a:"她的女儿又漂亮又可爱。", vi:"Con gái chị ấy vừa xinh vừa đáng yêu."},
  {w:["有没有","大一点儿","的"], a:"有没有大一点儿的？", vi:"Có cái nào to hơn một chút không?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Hôm nay tôi vô cùng vui.", a:"今天我非常高兴。"},
  {q:"một quán ăn vừa rẻ vừa ngon", a:"一个又便宜又好吃的饭馆"}]}],
rel:["二37","二46","二53","一30"]
};
