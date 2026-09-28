// Bài ngữ pháp 【三73】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三73", title:"紧缩复句：……了……（就）……", vi:"V1了…(就)V2 — (làm) xong … thì …", tag:"句子的类型 · 复句",
goals:[
 "Nói <b>xong việc 1 thì (liền) làm việc 2</b>: 下了课就去图书馆.",
 "Nói <b>hễ có A thì có B</b> (quy luật): 喝了酒就会脸红.",
 "了 đứng ngay sau động từ thứ nhất; 就 sau chủ ngữ, trước động từ thứ hai."],
intro:"Câu “nén”: hai vế không có dấu phẩy. 了 đánh dấu việc 1 đã xong, 就 nối sang việc 2.",
rules:[
 {t:"S + V1 + 了 + O1 + (就) + V2", sub:"紧缩", fx:[["S",""],["V1 了 O1",null],["就",null],["V2",""]], mean:"",
  ex:[["他下[了]课[就]去图书馆。","Tā xià le kè jiù qù túshūguǎn.","Tan học là anh ấy đi thư viện.","等级标准"],
      ["他喝[了]酒[就]会脸红。","Tā hē le jiǔ jiù huì liǎn hóng.","Anh ấy hễ uống rượu là đỏ mặt.","等级标准"]]}],
notes:[{t:"Nói về tương lai", html:"Mẫu này cũng dùng cho việc chưa xảy ra: <span class='zh'>明天我吃了早饭就走。</span> (Mai ăn sáng xong tôi đi luôn.)"}],
cmp:[
 {vn:"Ăn cơm xong tôi đi ngay.", zh:"我吃[了]饭[就]走。", py:"Wǒ chī le fàn jiù zǒu.", ok:true, why:"Không nói ✗ 我吃饭了就走 — 了 đứng sau động từ."}],
ex:[
 ["我到[了]北京[就]给你打电话。","Wǒ dào le Běijīng jiù gěi nǐ dǎ diànhuà.","Tôi đến Bắc Kinh là gọi điện cho bạn ngay."]],
errs:[
 {bad:"他下课了就去图书馆。", good:"他下了课就去图书馆。", why:"了 đứng ngay sau động từ 下, trước tân ngữ."},
 {bad:"他下了课去就图书馆。", good:"他下了课就去图书馆。", why:"就 đứng trước động từ thứ hai."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Ăn cơm xong tôi đi ngay.", o:["我吃了饭就走。","我吃饭了就走。","我吃了饭走就。"], a:0, why:"V了O 就 V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","下了","课","就","去","图书馆"], a:"他下了课就去图书馆。", vi:"Tan học là anh ấy đi thư viện."},
  {w:["他","喝了","酒","就","会","脸红"], a:"他喝了酒就会脸红。", vi:"Anh ấy hễ uống rượu là đỏ mặt."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi đến Bắc Kinh là gọi điện cho bạn ngay.", a:"我到了北京就给你打电话。"}]}],
rel:["二69","三64","二62","二47"]
};
