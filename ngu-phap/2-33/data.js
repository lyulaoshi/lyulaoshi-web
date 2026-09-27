// Bài ngữ pháp 【二33】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二33", title:"动态助词：着", vi:"Trợ từ động thái 着 — trạng thái đang duy trì", tag:"词类 · 助词",
goals:[
 "Dùng <b>động từ + 着</b> nói trạng thái đang kéo dài (cửa mở, đèn sáng, mặc áo…).",
 "Phủ định bằng <b>没 + V + 着</b>.",
 "Dùng <b>V1 着 + V2</b> nói cách thức làm việc thứ hai (ngồi mà nói, cười mà hát)."],
intro:"着 (zhe, thanh nhẹ) đứng sau động từ, nhấn vào <b>trạng thái được duy trì</b> — khác 在 / 正在 nhấn vào hành động đang tiến hành.",
rules:[
 {t:"V + 着: trạng thái duy trì", sub:"着", fx:[["Chủ ngữ",""],["Động từ",""],["着",null],["(呢)",""]], mean:"Cửa đang mở, ti vi đang bật, đang mặc…",
  ex:[["门开[着]。/ 门没开[着]。","Mén kāi zhe. / Mén méi kāi zhe.","Cửa đang mở. / Cửa không mở.","等级标准"],
      ["电视开[着]呢。/ 电视没开[着]。","Diànshì kāi zhe ne. / Diànshì méi kāi zhe.","Ti vi đang bật. / Ti vi không bật.","等级标准"],
      ["他穿[着]一件黑大衣。","Tā chuān zhe yí jiàn hēi dàyī.","Anh ấy mặc một chiếc áo khoác đen.","等级标准"]]},
 {t:"V + 着 (+ tân ngữ) trong hành động", sub:"动作持续", fx:[["(在)",""],["Động từ",""],["着",null],["tân ngữ",""]], mean:"Hành động kéo dài một lúc.",
  ex:[["孩子们在教室里高兴地唱[着]歌。","Háizimen zài jiàoshì li gāoxìng de chàng zhe gē.","Bọn trẻ đang vui vẻ hát trong lớp.","等级标准"]]}],
notes:[
 {t:"V1 着 + V2", html:"= làm V2 trong trạng thái V1: <span class='zh'>他笑着说……、坐着吃饭、站着上课</span>. Xem 持续态 【二70】, câu tồn hiện 【二56】."}],
cmp:[
 {vn:"Cửa đang mở.", zh:"门开[着]。", py:"Mén kāi zhe.", ok:true, why:"Trạng thái → 着, không dùng 在."},
 {vn:"Anh ấy cười nói: “…”", zh:"他笑[着]说：“……”", py:"Tā xiào zhe shuō: “……”", ok:true, why:"V1着 + V2."}],
ex:[
 ["灯还亮[着]。","Dēng hái liàng zhe.","Đèn vẫn đang sáng."],
 ["她笑[着]说：“欢迎！”","Tā xiào zhe shuō: “Huānyíng!”","Cô ấy cười nói: “Chào mừng!”"],
 ["我们坐[着]聊天儿吧。","Wǒmen zuò zhe liáo tiānr ba.","Chúng mình ngồi nói chuyện nhé."],
 ["桌子上放[着]一本书。","Zhuōzi shang fàng zhe yì běn shū.","Trên bàn có đặt một quyển sách."]],
errs:[
 {bad:"门在开。（ý: cửa đang mở）", good:"门开着。", why:"Trạng thái duy trì dùng 着."},
 {bad:"门不开着。", good:"门没开着。", why:"Phủ định dùng 没."},
 {bad:"他穿一件黑大衣着。", good:"他穿着一件黑大衣。", why:"着 ngay sau động từ."},
 {bad:"她说着笑。（ý: cười mà nói）", good:"她笑着说。", why:"Động từ chỉ cách thức đứng trước, kèm 着."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cửa đang mở.", o:["门在开。","门开着。","门着开。"], a:1, why:"V + 着."},
  {q:"Ti vi không bật.", o:["电视不开着。","电视没开着。","电视开着没。"], a:1, why:"没 + V + 着."},
  {q:"Cô ấy cười nói.", o:["她笑着说。","她说着笑。","她着笑说。"], a:0, why:"V1着V2."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","穿","着","一件","黑大衣"], a:"他穿着一件黑大衣。", vi:"Anh ấy mặc một chiếc áo khoác đen."},
  {w:["我们","坐","着","聊天儿","吧"], a:"我们坐着聊天儿吧。", vi:"Chúng mình ngồi nói chuyện nhé."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Đèn vẫn đang sáng.", a:"灯还亮着。"},
  {q:"Cô ấy mặc một chiếc váy đỏ.", a:"她穿着一条红裙子。"}]}],
rel:["二70","二56","一42","二32"]
};
