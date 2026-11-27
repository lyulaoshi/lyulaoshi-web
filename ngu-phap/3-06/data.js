// Bài ngữ pháp 【三06】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三06", title:"动补式离合词", vi:"Động từ ly hợp kiểu động – bổ (打开, 看见, 离开, 完成)", tag:"词类 · 动词",
goals:[
 "Nhận biết động từ ly hợp kiểu <b>động từ + kết quả</b>: 打开、看见、离开、完成.",
 "Chèn <b>得 / 不</b> vào giữa để nói có / không thể: 打得开, 看不见, 完不成.",
 "Dùng dạng này với nghĩa khả năng 【三48】."],
intro:"Những từ này gồm động từ + bổ ngữ kết quả. Khi muốn nói <b>làm được / không làm được</b>, chèn <b>得 / 不</b> vào giữa.",
rules:[
 {t:"V + 得 / 不 + bổ ngữ", sub:"离合", fx:[["V",""],["得 / 不",null],["bổ ngữ",""]], mean:"打得开 mở được · 打不开 không mở được.",
  ex:[["你的文件我{1|打}{2|不}{3|开}，你能再给我发一下儿吗？","Nǐ de wénjiàn wǒ dǎ bu kāi, nǐ néng zài gěi wǒ fā yíxiàr ma?","File của bạn tôi không mở được, bạn gửi lại cho tôi được không?","等级标准"],
      ["黑板上的字很小，我们都{1|看}{2|不}{3|见}。","Hēibǎn shang de zì hěn xiǎo, wǒmen dōu kàn bu jiàn.","Chữ trên bảng nhỏ quá, chúng tôi đều không nhìn thấy.","等级标准"],
      ["放心吧，孩子这么大，{1|离}{2|得}{3|开}妈妈了。","Fàngxīn ba, háizi zhème dà, lí de kāi māma le.","Yên tâm đi, con lớn thế này rồi, xa mẹ được rồi.","等级标准"],
      ["我们{1|完}{2|不}{3|成}这个任务。","Wǒmen wán bu chéng zhège rènwu.","Chúng tôi không hoàn thành được nhiệm vụ này.","等级标准"]]},
 {t:"分开", sub:"tách ra, xa nhau", fx:[["S / vật",""],["分开",null],["了 / thời lượng",""]], mean:"分开 = tách ra; thêm 得 / 不 vào giữa: 分得开, 分不开.",
  ex:[["{1|我们}{2|分开}{3|一年了}。", "Wǒmen fēnkāi yì nián le.", "Chúng tôi xa nhau một năm rồi."],
      ["请把{1|这两种东西}{2|分开}{3|放}。", "Qǐng bǎ zhè liǎng zhǒng dōngxi fēnkāi fàng.", "Hãy để riêng hai loại đồ này."]]}],
cmp:[
 {vn:"Tôi không nhìn thấy.", zh:"我看[不]见。", py:"Wǒ kàn bu jiàn.", ok:true, why:"“không … thấy (được)” → 不 chen vào giữa."},
 {vn:"Cửa không mở được.", zh:"门打[不]开。", py:"Mén dǎ bu kāi.", ok:true, why:"Không mở được vì điều kiện thực tế (kẹt, khóa…) thường nói 打不开."}],
ex:[
 ["这个门我打[不]开。","Zhège mén wǒ dǎ bu kāi.","Cái cửa này tôi mở không được."],
 ["你看[得]见吗？","Nǐ kàn de jiàn ma?","Bạn có nhìn thấy không?"],
 ["今天的作业你完[得]成吗？","Jīntiān de zuòyè nǐ wán de chéng ma?","Bài tập hôm nay bạn làm xong được không?"]],
errs:[
 {bad:"我不看见。", good:"我看不见。/ 我没看见。", why:"Không thấy được: 看不见; chưa thấy: 没看见."},
 {bad:"我打不开了门。", good:"我打不开门。", why:"Dạng khả năng không đi với 了 ở giữa."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Chữ nhỏ quá, tôi không nhìn thấy.", o:["字太小，我不看见。","字太小，我看不见。","字太小，我看见不。"], a:1, why:"看不见."},
  {q:"Bạn có mở được không?", o:["你打得开吗？","你得打开吗？","你打开得吗？"], a:0, why:"V得C."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","完不成","这个","任务"], a:"我们完不成这个任务。", vi:"Chúng tôi không hoàn thành được nhiệm vụ này."},
  {w:["这个门","我","打不开"], a:"这个门我打不开。", vi:"Cái cửa này tôi mở không được."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bạn có nhìn thấy không?", a:"你看得见吗？"},
  {q:"File này tôi không mở được.", a:"这个文件我打不开。"}]},
 {t:"D. Từ bổ sung", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这两个字太像了，我分＿开。", vi:"Hai chữ này giống quá, tôi không phân biệt được.", o:["不", "没的", "很"], a:0, why:"分不开."}]}],
rel:["三05","三48","二49","三46"]
};
