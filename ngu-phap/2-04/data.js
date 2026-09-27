// Bài ngữ pháp 【二04】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二04", title:"动词重叠", vi:"Lặp động từ — AA, A一A, A了A, ABAB", tag:"词类 · 动词",
goals:[
 "Lặp động từ để nói hành động <b>ngắn, nhẹ nhàng, thử làm</b> (… một chút, … thử).",
 "Dùng đúng 4 dạng: <b>AA、A一A、A了A、ABAB</b>.",
 "Không lặp động từ đang có 了 / 着 / 过 phía sau hay động từ không chỉ hành động (是、有、喜欢…)."],
intro:"Lặp động từ làm câu <b>mềm, thân mật</b> — giống “xem <b>thử</b>, nghỉ <b>một chút</b>” của tiếng Việt. Chữ lặp lại thường đọc thanh nhẹ.",
rules:[
 {t:"Động từ một âm tiết: AA / A一A", sub:"AA · A一A", fx:[["A",null],["(一)",""],["A",null]], mean:"看看 = 看一看 = xem một chút.",
  ex:[["我能[用用]你的手机吗？","Wǒ néng yòngyong nǐ de shǒujī ma?","Tôi dùng thử điện thoại của bạn được không?","等级标准"],
      ["你[想一想]这个字的意思。","Nǐ xiǎng yi xiǎng zhège zì de yìsi.","Bạn nghĩ thử nghĩa của chữ này xem.","等级标准"]]},
 {t:"Đã làm (nhanh, nhẹ): A了A", sub:"A了A", fx:[["A",null],["了",null],["A",null]], mean:"Hành động ngắn đã xảy ra.",
  ex:[["他[看了看]我，没说话。","Tā kàn le kàn wǒ, méi shuō huà.","Anh ấy nhìn tôi một cái, không nói gì.","等级标准"]]},
 {t:"Động từ hai âm tiết: ABAB", sub:"ABAB", fx:[["AB",null],["AB",null]], mean:"介绍介绍、休息休息、学习学习 (không nói ✗ 介介绍绍).",
  ex:[["请[介绍介绍]你的朋友。","Qǐng jièshào jièshào nǐ de péngyou.","Hãy giới thiệu bạn của bạn một chút.","等级标准"],
      ["累了吧？[休息休息]！","Lèi le ba? Xiūxi xiūxi!","Mệt rồi à? Nghỉ một lát đi!"]]}],
notes:[
 {t:"Không lặp", html:"động từ không chỉ hành động (<span class='zh'>是、有、在、喜欢、知道</span>), và không lặp khi có 着 / 过 hay trong câu đang diễn ra."},
 {t:"Động từ ly hợp", html:"lặp phần đầu: <span class='zh'>散散步、聊聊天、帮帮忙</span>."}],
cmp:[
 {vn:"Để tôi xem thử.", zh:"我[看看]。", py:"Wǒ kànkan.", ok:true, why:"“thử / một chút” = lặp động từ."},
 {vn:"Nghỉ một lát đi!", zh:"[休息休息]吧！", py:"Xiūxi xiūxi ba!", ok:true, why:"ABAB cho động từ hai âm tiết."}],
ex:[
 ["你[尝尝]这个菜。","Nǐ chángchang zhège cài.","Bạn nếm thử món này đi."],
 ["我们周末去公园[走走]吧。","Wǒmen zhōumò qù gōngyuán zǒuzou ba.","Cuối tuần mình đi dạo công viên nhé."],
 ["他[笑了笑]，说：“没关系。”","Tā xiào le xiào, shuō: “Méi guānxi.”","Anh ấy cười một cái, nói: “Không sao.”"],
 ["你们[讨论讨论]这个问题。","Nǐmen tǎolùn tǎolùn zhège wèntí.","Các bạn thảo luận vấn đề này một chút."]],
errs:[
 {bad:"请介介绍绍你的朋友。", good:"请介绍介绍你的朋友。", why:"Động từ hai âm tiết lặp theo ABAB."},
 {bad:"我喜欢喜欢她。", good:"我很喜欢她。", why:"喜欢 không lặp."},
 {bad:"他正在看看书。", good:"他正在看书。", why:"Câu “đang” không lặp động từ."},
 {bad:"我看看了那本书。", good:"我看了看那本书。", why:"Đã xảy ra: A了A."}],
practice:[
 {t:"A. Chọn dạng lặp đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Giới thiệu một chút:", o:["介介绍绍","介绍介绍","介绍绍"], a:1, why:"ABAB."},
  {q:"Anh ấy nhìn tôi một cái. 他＿＿我。", o:["看看了","看了看","看一看了"], a:1, why:"A了A."},
  {q:"Nếm thử món này:", o:["尝尝这个菜","尝了这个菜尝","尝一尝了这个菜"], a:0, why:"AA."},
  {q:"Câu nào SAI?", o:["你想一想。","我们休息休息。","我喜欢喜欢中文。"], a:2, why:"喜欢 không lặp."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","能","用用","你的","手机","吗"], a:"我能用用你的手机吗？", vi:"Tôi dùng thử điện thoại của bạn được không?"},
  {w:["他","看了看","我","没","说话"], a:"他看了看我，没说话。", vi:"Anh ấy nhìn tôi một cái, không nói gì."},
  {w:["请","介绍介绍","你的","朋友"], a:"请介绍介绍你的朋友。", vi:"Hãy giới thiệu bạn của bạn một chút."}]},
 {t:"C. Dùng dạng lặp để nói mềm hơn", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"你看这本书。", a:"你看看（看一看）这本书。"},
  {q:"我们休息吧。", a:"我们休息休息吧。"},
  {q:"你想这个问题。", a:"你想想（想一想）这个问题。"}]}],
rel:["二08","二52","三33","一21"]
};
