// Bài ngữ pháp 【二57】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二57", title:"连动句1：表示前后动作先后发生", vi:"Câu liên động 1 — hai hành động nối tiếp nhau", tag:"句子的类型 · 特殊句型",
goals:[
 "Đặt câu có <b>hai động từ nối tiếp</b>, cùng chủ ngữ, theo đúng trình tự xảy ra.",
 "Dùng <b>V1 + 完 / 了 + O + V2</b> (làm xong việc này rồi làm việc kia).",
 "Không chèn 和 giữa hai động từ."],
intro:"Câu liên động xếp các động từ <b>theo thứ tự thời gian</b>: việc nào xảy ra trước đứng trước.",
rules:[
 {t:"S + V1 (+ O1) + V2 (+ O2)", sub:"先后发生", fx:[["Chủ ngữ",""],["V1 (+ O1)",null],["V2 (+ O2)",null]], mean:"V1 xong rồi đến V2.",
  ex:[["他开门出去了。","Tā kāi mén chūqu le.","Anh ấy mở cửa đi ra ngoài.","等级标准"],
      ["我们吃完饭去图书馆吧。","Wǒmen chīwán fàn qù túshūguǎn ba.","Chúng mình ăn cơm xong thì đi thư viện nhé.","等级标准"]]}],
cmp:[
 {vn:"Anh ấy mở cửa đi ra ngoài.", zh:"他开门出去了。", py:"Tā kāi mén chūqu le.", ok:true, why:"Hai động từ nối liền, không cần “và”."}],
ex:[
 ["我下了课回家。","Wǒ xià le kè huí jiā.","Tôi tan học rồi về nhà."],
 ["他拿起手机打电话。","Tā náqǐ shǒujī dǎ diànhuà.","Anh ấy cầm điện thoại lên gọi."],
 ["她洗完脸睡觉了。","Tā xǐwán liǎn shuì jiào le.","Cô ấy rửa mặt xong đi ngủ."]],
errs:[
 {bad:"他开门和出去了。", good:"他开门出去了。", why:"Không dùng 和 nối hai động từ."},
 {bad:"我们去图书馆吃完饭吧。（ý: ăn xong mới đi）", good:"我们吃完饭去图书馆吧。", why:"Việc trước đứng trước."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy mở cửa đi ra ngoài.", o:["他开门和出去了。","他开门出去了。","他出去开门了。"], a:1, why:"V1 V2 theo trình tự."},
  {q:"Ăn xong rồi đi thư viện.", o:["吃完饭去图书馆。","去图书馆吃完饭。","吃完饭和去图书馆。"], a:0, why:"Trình tự."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","吃完饭","去","图书馆","吧"], a:"我们吃完饭去图书馆吧。", vi:"Chúng mình ăn xong thì đi thư viện nhé."},
  {w:["我","下了课","回家"], a:"我下了课回家。", vi:"Tôi tan học rồi về nhà."}]},
 {t:"C. Nối hai hành động", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"洗完脸 / 睡觉", vi:"rửa mặt xong / đi ngủ", a:"她洗完脸睡觉了。"},
  {q:"拿起手机 / 打电话", vi:"cầm điện thoại lên / gọi điện", a:"他拿起手机打电话。"}]}],
rel:["二38","三56","二62","二47"]
};
