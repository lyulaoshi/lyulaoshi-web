// Bài ngữ pháp 【二71】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二71", title:"经历态：用动态助词“过”表示", vi:"Thể trải nghiệm — đã từng (V + 过)", tag:"动作的态",
goals:[
 "Nói kinh nghiệm “đã từng / chưa từng” bằng <b>V + 过</b> / <b>没 + V + 过</b>.",
 "Phân biệt 过 (kinh nghiệm) với 了 (hoàn thành).",
 "Kết hợp với 以前, 从来没."],
intro:"Thể trải nghiệm nói người đó <b>đã từng</b> có việc gì trong quá khứ (không nhất thiết lúc nào). Trợ từ 过 xem 【二32】.",
rules:[
 {t:"V + 过 / 没 + V + 过", sub:"经历态", fx:[["Chủ ngữ",""],["(没)",""],["Động từ",""],["过",null],["tân ngữ",""]], mean:"",
  ex:[["他学[过]中文。/ 他没学[过]中文。","Tā xué guo Zhōngwén. / Tā méi xué guo Zhōngwén.","Anh ấy từng học tiếng Trung. / Anh ấy chưa từng học tiếng Trung.","等级标准"],
      ["我吃[过]饺子。/ 我没吃[过]饺子。","Wǒ chī guo jiǎozi. / Wǒ méi chī guo jiǎozi.","Tôi từng ăn sủi cảo. / Tôi chưa từng ăn sủi cảo.","等级标准"]]}],
notes:[
 {t:"过 hay 了?", html:"<span class='zh'>我去了北京。</span> (đã đi, có thể còn ở đó) · <span class='zh'>我去过北京。</span> (từng đi, giờ đã về)."}],
cmp:[
 {vn:"Bạn đã từng đến Việt Nam chưa?", zh:"你去[过]越南吗？", py:"Nǐ qù guo Yuènán ma?", ok:true, why:"“đã từng” → V过."},
 {vn:"Tôi chưa từng ăn sủi cảo.", zh:"我没吃[过]饺子。", py:"Wǒ méi chī guo jiǎozi.", ok:true, why:"Phủ định giữ 过."}],
ex:[
 ["我以前见[过]他。","Wǒ yǐqián jiàn guo tā.","Trước đây tôi từng gặp anh ấy."],
 ["你看[过]这本书没有？","Nǐ kàn guo zhè běn shū méiyǒu?","Bạn đã đọc quyển sách này chưa?"],
 ["她去[过]很多国家。","Tā qù guo hěn duō guójiā.","Cô ấy đã từng đi nhiều nước."]],
errs:[
 {bad:"我没吃饺子过。", good:"我没吃过饺子。", why:"过 ngay sau động từ."},
 {bad:"我不吃过饺子。", good:"我没吃过饺子。", why:"Phủ định dùng 没."},
 {bad:"我吃过了饺子。（ý: từng ăn）", good:"我吃过饺子。", why:"Kinh nghiệm chỉ cần 过."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi chưa từng ăn sủi cảo.", o:["我没吃饺子过。","我不吃过饺子。","我没吃过饺子。"], a:2, why:"没 + V过."},
  {q:"Bạn từng đến Việt Nam chưa?", o:["你去过越南吗？","你过去越南吗？","你去越南过吗？"], a:0, why:"V过 + O + 吗."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","去","过","很多","国家"], a:"她去过很多国家。", vi:"Cô ấy đã từng đi nhiều nước."},
  {w:["我","以前","见","过","他"], a:"我以前见过他。", vi:"Trước đây tôi từng gặp anh ấy."}]},
 {t:"C. Trả lời theo kinh nghiệm của em", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"你去过中国吗？", vi:"Bạn từng đến Trung Quốc chưa?", a:"去过。/ 我去过一次中国。/ 没去过。"},
  {q:"你吃过北京烤鸭吗？", vi:"Bạn từng ăn vịt quay Bắc Kinh chưa?", a:"吃过。/ 没吃过。"}]}],
rel:["二32","一41","二70","三14"]
};
