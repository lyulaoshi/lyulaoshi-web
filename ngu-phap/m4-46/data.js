// Bài ngữ pháp 【新4.46】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt. Hai cách dùng đối chiếu 现代汉语八百词 (吕叔湘), mục 是: A是A (3) nhấn mạnh tính khách quan, A是A (4) nhượng bộ.
window.NP_LESSON={
code:"新4.46", title:"X是X", vi:"X是X — X ra X, X thì X thật", tag:"短语 · 固定格式",
goals:[
 "Nhấn mạnh <b>nguyên tắc rõ ràng</b>: 规定就是规定, 错了就是错了.",
 "<b>Thừa nhận</b> một điều rồi nói ý khác: 喜欢是喜欢，可是……",
 "Đọc giọng nhấn vào 是."],
intro:"Lặp cùng một từ hai bên 是 / 就是 để nói “<b>đã là … thì là …</b>”, hoặc “… <b>thì … thật</b>” trước khi chuyển ý.",
rules:[
 {t:"X + (就) 是 + X", sub:"（1）khẳng định", fx:[["X",""],["(就) 是",null],["X",""]], mean:"X ra X, không bàn cãi.",
  ex:[["{1|规定}{2|就是}{3|规定}，谁都得遵守。","Guīdìng jiùshì guīdìng, shéi dōu děi zūnshǒu.","Quy định là quy định, ai cũng phải tuân theo."],
      ["{1|错了}{2|就是}{3|错了}，别找理由。","Cuòle jiùshì cuòle, bié zhǎo lǐyóu.","Sai là sai, đừng kiếm cớ."]]},
 {t:"X + 是 + X，可是 / 不过 …", sub:"（2）thừa nhận", fx:[["X",""],["是",null],["X",""],["·",""],["可是 + ý khác",""]], mean:"X thì X thật, nhưng …",
  ex:[["我{1|喜欢}{2|是}{3|喜欢}，{4|可是太贵了}。","Wǒ xǐhuan shì xǐhuan, kěshì tài guì le.","Tôi thích thì thích thật, nhưng đắt quá."]]}],
notes:[
 {t:"Từ hay đi kèm", html:"Khi nhấn mạnh, trước 是 hay thêm <span class='zh'>总、就、到底</span>: <span class='zh'>事实总是事实。</span> Khi nhượng bộ, vế sau thường có <span class='zh'>但是、可是、就是</span>."},
 {t:"Phân biệt", html:"Nói hai thứ khác nhau, không lẫn lộn thì dùng cặp <span class='zh'>X是X，Y是Y</span> (xem 新4.38)."}],
cmp:[
 {vn:"Đã nói không đi là không đi.", zh:"说不去[就是]不去。", py:"Shuō bú qù jiùshì bú qù.", ok:true, why:"Nhấn mạnh sự dứt khoát."}],
ex:[
 ["事实[就是]事实，改变不了。","Shìshí jiùshì shìshí, gǎibiàn bu liǎo.","Sự thật là sự thật, không thay đổi được."],
 ["他[忙是忙]，不过还是每天给家里打电话。","Tā máng shì máng, búguò háishi měi tiān gěi jiāli dǎ diànhuà.","Anh ấy bận thì bận thật, nhưng ngày nào cũng gọi về nhà."],
 ["不行[就是]不行，你别再问了。","Bùxíng jiùshì bùxíng, nǐ bié zài wèn le.","Không được là không được, bạn đừng hỏi nữa."]],
errs:[
 {bad:"喜欢是很喜欢是，可是太贵。", good:"喜欢是喜欢，可是太贵了。", why:"Chỉ một chữ 是 nối hai X."},
 {bad:"规定就是规定的。（muốn nhấn mạnh）", good:"规定就是规定。", why:"Không thêm 的."},
 {bad:"错了是对了。（muốn nói sai là sai）", good:"错了就是错了。", why:"Hai bên phải cùng một từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Sai là sai, đừng kiếm cớ.", o:["错了就是错了，别找理由。","错了就是对了，别找理由。"], a:0, why:"X就是X."},
  {q:"我喜欢是喜欢，＿太贵了。", vi:"Tôi thích thì thích thật, nhưng đắt quá.", o:["可是","所以","因为"], a:0, why:"Chuyển ý."},
  {q:"事实就是＿。", vi:"Sự thật là sự thật.", o:["事实","事情","真的吗"], a:0, why:"Lặp lại 事实."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["规定","就是","规定，","谁","都得","遵守"], a:"规定就是规定，谁都得遵守。", vi:"Quy định là quy định, ai cũng phải tuân theo."},
  {w:["不行","就是","不行，","你","别","再问了"], a:"不行就是不行，你别再问了。", vi:"Không được là không được, đừng hỏi nữa."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi thích thì thích thật, nhưng đắt quá.", a:"我喜欢是喜欢，可是太贵了。/ 我喜欢是喜欢，但是太贵了。/ 我喜欢是喜欢，不过太贵了。"}]}],
rel:["三68","新4.38"]
};
