// Bài ngữ pháp 【三67】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三67", title:"选择复句：不是……，就是……", vi:"不是…，就是… — không phải … thì là …", tag:"句子的类型 · 复句",
goals:[
 "Nêu <b>hai khả năng, chắc chắn một trong hai</b> bằng 不是……，就是…….",
 "Phân biệt với 不是……，而是…… (không phải A mà là B)."],
intro:"Giống “không … thì …” trong tiếng Việt: “Anh ấy không ở văn phòng thì ở phòng thí nghiệm.”",
rules:[
 {t:"不是 + A，就是 + B", sub:"选择", fx:[["不是",null],["A",""],["·",""],["就是",null],["B",""]], mean:"Chỉ có A hoặc B.",
  ex:[["他[不是]在办公室，[就是]在实验室。","Tā bú shì zài bàngōngshì, jiù shì zài shíyànshì.","Anh ấy không ở văn phòng thì ở phòng thí nghiệm.","等级标准"],
      ["这些衣服都不合适，[不是]太大，[就是]太小。","Zhèxiē yīfu dōu bù héshì, bú shì tài dà, jiù shì tài xiǎo.","Mấy bộ quần áo này đều không vừa, không quá to thì quá nhỏ.","等级标准"]]}],
notes:[{t:"So sánh", html:"<span class='zh'>不是A，而是B</span> = không phải A mà là B (khẳng định B, phủ định A)."}],
cmp:[
 {vn:"Cuối tuần anh ấy không ngủ thì chơi game.", zh:"周末他[不是]睡觉，[就是]玩儿游戏。", py:"Zhōumò tā bú shì shuì jiào, jiù shì wánr yóuxì.", ok:true, why:"Hai khả năng, lúc nào cũng là một trong hai."}],
ex:[
 ["最近[不是]下雨，[就是]刮风。","Zuìjìn bú shì xià yǔ, jiù shì guā fēng.","Dạo này không mưa thì gió."]],
errs:[
 {bad:"他不是在办公室，也是在实验室。", good:"他不是在办公室，就是在实验室。", why:"Cặp cố định 不是…就是…."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy không ở văn phòng thì ở phòng thí nghiệm.", o:["他不是在办公室，就是在实验室。","他不是在办公室，而是在实验室。"], a:0, why:"Hai khả năng → 就是; 而是 = “mà là” (khẳng định chắc)."},
  {q:"Anh ấy không phải giáo viên mà là bác sĩ.", o:["他不是老师，就是医生。","他不是老师，而是医生。"], a:1, why:"Khẳng định B → 而是."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["不是","太大，","就是","太小"], a:"不是太大，就是太小。", vi:"Không quá to thì quá nhỏ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Dạo này không mưa thì gió.", a:"最近不是下雨，就是刮风。"}]}],
rel:["二64","三69","三66","三60"]
};
