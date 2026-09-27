// Bài ngữ pháp 【二46】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二46", title:"又……又……", vi:"又……又…… — “vừa … vừa …”", tag:"固定格式",
goals:[
 "Dùng <b>又 + A + 又 + B</b> nói hai đặc điểm cùng có.",
 "A, B cùng chiều (cùng tốt hoặc cùng xấu).",
 "Không thêm 很 trước tính từ trong khung này."],
intro:"又……又…… nối hai tính từ (hoặc động từ) cùng tồn tại: “vừa ngon vừa rẻ”.",
rules:[
 {t:"又 + Adj1 + 又 + Adj2", sub:"又……又……", fx:[["又",null],["Tính từ 1",""],["又",null],["Tính từ 2",""]], mean:"Hai đặc điểm cùng chiều.",
  ex:[["这个饭馆的菜[又]好吃[又]便宜。","Zhège fànguǎn de cài yòu hǎochī yòu piányi.","Món ở quán này vừa ngon vừa rẻ.","等级标准"],
      ["这球鞋[又]不大[又]不好看。","Zhè qiúxié yòu bú dà yòu bù hǎokàn.","Đôi giày thể thao này vừa không to vừa không đẹp.","等级标准"]]}],
notes:[
 {t:"Khác 一边……一边……", html:"一边…一边… 【一39】 là hai <b>hành động</b> cùng lúc; 又…又… thường là hai <b>đặc điểm</b>."}],
cmp:[
 {vn:"vừa ngon vừa rẻ", zh:"[又]好吃[又]便宜", py:"yòu hǎochī yòu piányi", ok:true, why:"Giống tiếng Việt."}],
ex:[
 ["她[又]聪明[又]漂亮。","Tā yòu cōngming yòu piàoliang.","Cô ấy vừa thông minh vừa xinh."],
 ["我[又]累[又]饿。","Wǒ yòu lèi yòu è.","Tôi vừa mệt vừa đói."],
 ["这个房间[又]大[又]干净。","Zhège fángjiān yòu dà yòu gānjìng.","Căn phòng này vừa rộng vừa sạch."]],
errs:[
 {bad:"又很好吃又很便宜", good:"又好吃又便宜", why:"Không thêm 很."},
 {bad:"又好吃又贵（ý khen）", good:"又好吃又便宜", why:"Hai đặc điểm phải cùng chiều."},
 {bad:"她又唱歌又跳舞一边。", good:"她一边唱歌一边跳舞。/ 她又唱歌又跳舞。", why:"Không trộn hai khung."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"vừa rộng vừa sạch", o:["又大又干净","又很大又很干净","又大干净"], a:0, why:"Không 很."},
  {q:"Câu nào hợp lý?", o:["这个菜又好吃又贵。","这个菜又好吃又便宜。"], a:1, why:"Cùng chiều tốt."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个","饭馆的菜","又","好吃","又","便宜"], a:"这个饭馆的菜又好吃又便宜。", vi:"Món ở quán này vừa ngon vừa rẻ."},
  {w:["我","又","累","又","饿"], a:"我又累又饿。", vi:"Tôi vừa mệt vừa đói."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Cô ấy vừa thông minh vừa xinh.", a:"她又聪明又漂亮。"},
  {q:"Cái áo này vừa đắt vừa xấu.", a:"这件衣服又贵又不好看。"}]}],
rel:["一39","三63","二41","一13"]
};
