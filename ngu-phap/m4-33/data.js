// Bài ngữ pháp 【新4.33】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.33", title:"再也不／没……", vi:"再也不 / 再也没 — không … nữa, chưa bao giờ … lại", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>再也不 + V</b> để quyết tâm: từ nay không bao giờ … nữa.",
 "Dùng <b>再也没 + V + 过</b> để kể: từ đó chưa lần nào … lại.",
 "Phân biệt 不 (ý muốn, tương lai) và 没 (đã qua)."],
intro:"再 = lại, 也 = nhấn mạnh. 再也不去了 = <b>không bao giờ đi nữa</b>.",
rules:[
 {t:"(S) + 再也不 + V (+ 了)", sub:"（1）từ nay", fx:[["S",""],["再也不",null],["V",""],["了",null]], mean:"Quyết không … nữa.",
  ex:[["{1|我}{2|再也不}{3|抽烟}{4|了}。","Wǒ zài yě bù chōuyān le.","Tôi sẽ không bao giờ hút thuốc nữa."]]},
 {t:"(S) + 再也没 + V + 过", sub:"（2）đã qua", fx:[["S",""],["再也没",null],["V",""],["过",null]], mean:"Từ đó chưa … lại lần nào.",
  ex:[["毕业以后，{1|我们}{2|再也没}{3|见}{4|过}面。","Bìyè yǐhòu, wǒmen zài yě méi jiànguo miàn.","Sau khi tốt nghiệp, chúng tôi chưa gặp lại lần nào."]]}],
notes:[{t:"Dạng 再也 + V + 不 / 不到", html:"<span class='zh'>再也找不到了</span> = không bao giờ tìm được nữa."}],
cmp:[
 {vn:"Tôi không bao giờ tin anh ta nữa.", zh:"我[再也不]相信他了。", py:"Wǒ zài yě bù xiāngxìn tā le.", ok:true, why:"“không … nữa” → 再也不……了."}],
ex:[
 ["那家饭馆太差了，我[再也不]去了。","Nà jiā fànguǎn tài chà le, wǒ zài yě bú qù le.","Quán đó tệ quá, tôi không bao giờ đến nữa."],
 ["他离开以后，[再也没]回来过。","Tā líkāi yǐhòu, zài yě méi huílaiguo.","Sau khi đi, anh ấy chưa từng quay lại."],
 ["别担心，以后[再也不]会这样了。","Bié dānxīn, yǐhòu zài yě bú huì zhèyàng le.","Đừng lo, sau này sẽ không như thế nữa."]],
errs:[
 {bad:"我不再也去那儿了。", good:"我再也不去那儿了。", why:"Thứ tự cố định: 再也不."},
 {bad:"毕业以后我们再也不见过面。", good:"毕业以后我们再也没见过面。", why:"Có 过 / chuyện đã qua → 没."},
 {bad:"我再也没去那儿了，我决定了。（nói ý định）", good:"我决定了，再也不去那儿了。", why:"Quyết tâm cho tương lai → 不."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi sẽ không bao giờ hút thuốc nữa.", o:["我再也没抽烟了。","我再也不抽烟了。","我不再也抽烟了。"], a:1, why:"Ý định → 再也不."},
  {q:"Từ đó anh ấy chưa quay lại lần nào.", o:["他再也没回来过。","他再也不回来过。"], a:0, why:"再也没 + V + 过."},
  {q:"钥匙丢了，再也找＿了。", vi:"Mất chìa khóa rồi, không bao giờ tìm được nữa.", o:["不到","没到","到不"], a:0, why:"找不到 = không tìm được."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["那家饭馆","我","再也","不","去","了"], a:"那家饭馆我再也不去了。", vi:"Quán đó tôi không bao giờ đến nữa."},
  {w:["毕业以后，","我们","再也","没","见过","面"], a:"毕业以后，我们再也没见过面。", vi:"Sau khi tốt nghiệp, chúng tôi chưa gặp lại lần nào."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi không bao giờ tin anh ta nữa.", a:"我再也不相信他了。"},
  {q:"Sau khi đi, anh ấy chưa từng quay lại.", a:"他离开以后，再也没回来过。/ 他走了以后，再也没回来过。"}]}],
rel:["三16","一12","一14"]
};
