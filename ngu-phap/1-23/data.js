// Bài ngữ pháp 【一23】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一23", title:"数量短语", vi:"Cụm số lượng — số từ + lượng từ", tag:"短语 · 结构类型",
goals:[
 "Ghép <b>số từ + lượng từ</b> thành cụm số lượng: 一个、两杯、三本…",
 "Dùng cụm số lượng trước danh từ, hoặc <b>đứng một mình</b> khi đã biết danh từ.",
 "Không bỏ lượng từ, không dùng hai lượng từ liền nhau."],
intro:"Cụm số lượng = <b>số từ + lượng từ</b>. Nó thường đứng trước danh từ (三本书), nhưng khi người nghe đã biết danh từ thì có thể đứng một mình (我要两个).",
rules:[
 {t:"Số từ + lượng từ", sub:"数词 + 量词", fx:[["Số từ","一、两、三…、几"],["Lượng từ",null]], mean:"Cụm số lượng hoàn chỉnh.",
  ex:[["一[个]　两[杯]　三[本]","yí ge　liǎng bēi　sān běn","một cái　hai cốc　ba quyển","等级标准"],
      ["四[包]　五[块]","sì bāo　wǔ kuài","bốn gói　năm miếng / năm đồng","等级标准"]]},
 {t:"Cụm số lượng + danh từ / đứng một mình", sub:"作定语 · 作宾语", fx:[["Số + lượng từ",null],["(Danh từ)",""]], mean:"Trước danh từ làm định ngữ; đứng một mình làm tân ngữ khi ngữ cảnh đã rõ.",
  ex:[["她买了[两杯]咖啡。","Tā mǎi le liǎng bēi kāfēi.","Cô ấy mua hai cốc cà phê."],
      ["——你要几个？——我要[三个]。","—— Nǐ yào jǐ ge? —— Wǒ yào sān ge.","— Bạn muốn mấy cái? — Tôi muốn ba cái."]]}],
notes:[
 {t:"包 và 块", html:"<span class='zh'>包</span> = gói, túi (一包茶); <span class='zh'>块</span> = miếng (一块面包) hoặc đồng tiền (五块钱) 【一43】."}],
cmp:[
 {vn:"Tôi muốn ba cái.", zh:"我要[三个]。", py:"Wǒ yào sān ge.", ok:true, why:"Giống tiếng Việt: có thể bỏ danh từ, giữ số + lượng từ."},
 {vn:"Cho tôi hai cốc.", zh:"给我[两杯]。", py:"Gěi wǒ liǎng bēi.", ok:true, why:"Không được bỏ lượng từ: ✗ 给我两."}],
ex:[
 ["我买了[四包]茶。","Wǒ mǎi le sì bāo chá.","Tôi mua bốn gói trà."],
 ["这个[五块]钱。","Zhège wǔ kuài qián.","Cái này năm đồng."],
 ["我家有[三口]人。","Wǒ jiā yǒu sān kǒu rén.","Nhà tôi có ba người."],
 ["苹果很好吃，我想再买[两个]。","Píngguǒ hěn hǎochī, wǒ xiǎng zài mǎi liǎng ge.","Táo rất ngon, tôi muốn mua thêm hai quả."]],
errs:[
 {bad:"我要两。", good:"我要两个。", why:"Số từ không đứng một mình, phải có lượng từ."},
 {bad:"三个本书", good:"三本书", why:"Chỉ dùng một lượng từ."},
 {bad:"两书", good:"两本书", why:"Giữa số và danh từ cần lượng từ."},
 {bad:"茶四包", good:"四包茶", why:"Cụm số lượng đứng trước danh từ."}],
practice:[
 {t:"A. Chọn cách nói đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi muốn hai cái.", o:["我要两。","我要两个。","我要个两。"], a:1, why:"Số + lượng từ."},
  {q:"ba quyển sách", o:["三个本书","三书","三本书"], a:2, why:"Một lượng từ."},
  {q:"bốn gói trà", o:["四包茶","茶四包","四茶包"], a:0, why:"Số lượng trước danh từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","买","了","两杯","咖啡"], a:"她买了两杯咖啡。", vi:"Cô ấy mua hai cốc cà phê."},
  {w:["我","要","三个"], a:"我要三个。", vi:"Tôi muốn ba cái."},
  {w:["这个","五块","钱"], a:"这个五块钱。", vi:"Cái này năm đồng."}]},
 {t:"C. Trả lời bằng cụm số lượng", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"你要几杯茶？(2)", a:"两杯。/ 我要两杯。"},
  {q:"你买了几本书？(3)", a:"三本。/ 我买了三本。"},
  {q:"你家有几口人？(4)", a:"四口。/ 我家有四口人。"}]}],
rel:["一07","一08","一27","二52"]
};
