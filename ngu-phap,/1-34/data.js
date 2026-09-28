// Bài ngữ pháp 【一34】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一34", title:"祈使句", vi:"Câu cầu khiến — mời, đề nghị, ra lệnh, ngăn cấm", tag:"句子的类型 · 句类",
goals:[
 "Mời, đề nghị lịch sự bằng <b>请 + động từ</b>.",
 "Ngăn cấm bằng <b>别 / 不要 + động từ</b>.",
 "Làm câu mềm hơn bằng <b>吧</b> cuối câu."],
intro:"Câu cầu khiến dùng để bảo người khác làm hay không làm việc gì. Chủ ngữ (你 / 您 / 你们) thường lược đi.",
rules:[
 {t:"Mời, yêu cầu: 请 + V", sub:"请求", fx:[["请",null],["Động từ",""],["！ / 。",""]], mean:"请 = mời, xin, vui lòng; đứng <b>đầu</b> câu.",
  ex:[["[请]进！","Qǐng jìn!","Mời vào!","等级标准"],
      ["[请]坐。","Qǐng zuò.","Mời ngồi."]]},
 {t:"Ngăn cấm: 别 / 不要 + V", sub:"禁止", fx:[["(你)",""],["别 / 不要",null],["Động từ",""],["(了)",""]], mean:"别 + V + 了 = đừng … nữa (đang làm thì dừng).",
  ex:[["[别]说了！","Bié shuō le!","Đừng nói nữa!","等级标准"],
      ["[不要]在这儿吃东西。","Bú yào zài zhèr chī dōngxi.","Đừng ăn uống ở đây."]]},
 {t:"Đề nghị mềm: … 吧", sub:"建议", fx:[["Câu",""],["吧",null]], mean:"…đi, …nhé.",
  ex:[["你休息一下[吧]。","Nǐ xiūxi yíxià ba.","Bạn nghỉ một lát đi."]]}],
cmp:[
 {vn:"Mời vào!", zh:"[请]进！", py:"Qǐng jìn!", ok:true, why:"“mời” đứng đầu — giống tiếng Việt."},
 {vn:"Đừng nói nữa!", zh:"[别]说了！", py:"Bié shuō le!", ok:true, why:"“nữa” → 了 cuối câu."}],
ex:[
 ["[请]喝茶。","Qǐng hē chá.","Mời uống trà."],
 ["[请]您再说一遍。","Qǐng nín zài shuō yí biàn.","Xin ông / bà nói lại một lần."],
 ["[别]看手机了！","Bié kàn shǒujī le!","Đừng xem điện thoại nữa!"],
 ["我们走[吧]！","Wǒmen zǒu ba!","Chúng mình đi thôi!"]],
errs:[
 {bad:"进请！", good:"请进！", why:"请 đứng trước động từ."},
 {bad:"不说了！（ý: đừng nói）", good:"别说了！", why:"Cấm, ngăn dùng 别 / 不要."},
 {bad:"别你说话。", good:"你别说话。", why:"别 sau chủ ngữ."},
 {bad:"请进吗？", good:"请进！", why:"Câu cầu khiến không dùng 吗."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mời ngồi.", o:["坐请。","请坐。","请坐吗？"], a:1, why:"请 + V."},
  {q:"Đừng xem điện thoại nữa!", o:["不看手机了！","别看手机了！","看手机别了！"], a:1, why:"别 + V + 了."},
  {q:"Bạn nghỉ một lát đi.", o:["你休息一下吧。","你休息一下吗。","你吧休息一下。"], a:0, why:"… 吧."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["请","喝","茶"], a:"请喝茶。", vi:"Mời uống trà."},
  {w:["你","别","说话"], a:"你别说话。", vi:"Bạn đừng nói chuyện."},
  {w:["请","您","再","说","一遍"], a:"请您再说一遍。", vi:"Xin ông nói lại một lần."}]},
 {t:"C. Nói bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Mời vào!", a:"请进！"},
  {q:"Đừng ăn uống trong lớp.", a:"别（不要）在教室里吃东西。"},
  {q:"Chúng mình về nhà thôi.", a:"我们回家吧。"}]}],
rel:["一14","一22","一32","一35"]
};
