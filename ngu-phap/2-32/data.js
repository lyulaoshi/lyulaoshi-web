// Bài ngữ pháp 【二32】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二32", title:"动态助词：过", vi:"Trợ từ động thái 过 — đã từng (trải nghiệm)", tag:"词类 · 助词",
goals:[
 "Dùng <b>động từ + 过</b> nói kinh nghiệm “đã từng”.",
 "Phủ định bằng <b>没（有）+ V + 过</b> — giữ 过 (khác 了).",
 "Hỏi bằng <b>V过……吗？ / V过……没有？</b>"],
intro:"过 (guo, thanh nhẹ) đứng ngay sau động từ, cho biết người đó <b>đã từng</b> trải qua việc gì trong quá khứ.",
rules:[
 {t:"V + 过 (+ số lần) + tân ngữ", sub:"过", fx:[["Chủ ngữ",""],["Động từ",""],["过",null],["(一次…) + tân ngữ",""]], mean:"Đã từng làm.",
  ex:[["我去[过]一次中国。","Wǒ qù guo yí cì Zhōngguó.","Tôi đã từng đi Trung Quốc một lần.","等级标准"],
      ["他学[过]一点儿中文。","Tā xué guo yìdiǎnr Zhōngwén.","Anh ấy từng học một chút tiếng Trung.","等级标准"]]},
 {t:"Phủ định: 没（有）+ V + 过", sub:"否定", fx:[["Chủ ngữ",""],["没（有）",null],["Động từ",""],["过",null],["tân ngữ",""]], mean:"Chưa từng. <b>Giữ</b> 过 (khác với 了 phải bỏ).",
  ex:[["我[没]去[过]中国。","Wǒ méi qù guo Zhōngguó.","Tôi chưa từng đi Trung Quốc.","等级标准"],
      ["他[没]学[过]中文。","Tā méi xué guo Zhōngwén.","Anh ấy chưa từng học tiếng Trung.","等级标准"]]}],
notes:[
 {t:"Câu hỏi", html:"<span class='zh'>你吃过烤鸭吗？/ 你吃过烤鸭没有？</span>"},
 {t:"过 và 了", html:"<span class='zh'>我吃了饺子。</span> (đã ăn — xong việc) · <span class='zh'>我吃过饺子。</span> (từng ăn — có kinh nghiệm). Xem 经历态 【二71】."}],
cmp:[
 {vn:"Tôi từng đến Bắc Kinh.", zh:"我去[过]北京。", py:"Wǒ qù guo Běijīng.", ok:true, why:"“từng” đứng trước động từ; 过 đứng sau."},
 {vn:"Tôi chưa từng ăn vịt quay.", zh:"我没吃[过]烤鸭。", py:"Wǒ méi chī guo kǎoyā.", ok:true, why:"没 + V + 过 (giữ 过)."}],
ex:[
 ["你看[过]这个电影吗？","Nǐ kàn guo zhège diànyǐng ma?","Bạn đã từng xem phim này chưa?"],
 ["我以前见[过]他。","Wǒ yǐqián jiàn guo tā.","Trước đây tôi từng gặp anh ấy."],
 ["我还没吃[过]北京烤鸭。","Wǒ hái méi chī guo Běijīng kǎoyā.","Tôi vẫn chưa được ăn vịt quay Bắc Kinh."]],
errs:[
 {bad:"我没去中国过。", good:"我没去过中国。", why:"过 ngay sau động từ."},
 {bad:"我没去中国。（ý: chưa từng）", good:"我没去过中国。", why:"Kinh nghiệm phải giữ 过."},
 {bad:"我过去中国。", good:"我去过中国。", why:"过 đứng sau động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi từng đi Trung Quốc một lần.", o:["我去过一次中国。","我过去一次中国。","我去一次过中国。"], a:0, why:"V过 + số lần + N."},
  {q:"Anh ấy chưa từng học tiếng Trung.", o:["他没学中文过。","他没学过中文。","他不学过中文。"], a:1, why:"没 + V过."},
  {q:"Bạn từng xem phim này chưa?", o:["你看过这个电影吗？","你过看这个电影吗？","你看这个电影过吗？"], a:0, why:"V过 + O + 吗."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","去","过","一次","中国"], a:"我去过一次中国。", vi:"Tôi từng đi Trung Quốc một lần."},
  {w:["他","没","学","过","中文"], a:"他没学过中文。", vi:"Anh ấy chưa từng học tiếng Trung."}]},
 {t:"C. Đổi sang phủ định", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"我吃过饺子。", vi:"Tôi từng ăn sủi cảo.", a:"我没吃过饺子。"},
  {ask:"Hỏi", q:"他去过上海。", vi:"Anh ấy từng đến Thượng Hải.", a:"他去过上海吗？/ 他去过上海没有？"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我没去过北京。", vi:"Tôi chưa từng đi Bắc Kinh.", o:["Đúng","Sai"], a:0, why:"没 + V + 过: giữ 过."},
  {q:"我没有吃过了烤鸭。", vi:"Tôi chưa từng ăn vịt quay.", o:["Đúng","Sai"], a:1, why:"Không thêm 了: 我没吃过烤鸭。"},
  {q:"我过去中国。", vi:"Tôi từng đi Trung Quốc.", o:["Đúng","Sai"], a:1, why:"过 đứng sau động từ: 我去过中国。"},
  {q:"你看过这个电影吗？", vi:"Bạn từng xem phim này chưa?", o:["Đúng","Sai"], a:0, why:"V过……吗？"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你吃＿烤鸭吗？(hỏi kinh nghiệm)", vi:"Bạn từng ăn vịt quay chưa?", o:["过", "了"], a:0, why:"Hỏi “đã từng” → 过."},
  {q:"我没去＿长城。(chưa từng)", vi:"Tôi chưa từng đi Trường Thành.", o:["过", "了"], a:0, why:"没 + V + 过; với 了 thì phải bỏ."},
  {q:"Tôi chưa từng học tiếng Nhật.", o:["我没学过日语。", "我没学日语过。", "我不学过日语。"], a:0, why:"没 + V + 过 + O."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi từng đến Bắc Kinh hai lần.", a:"我去过两次北京。/ 我去过北京两次。"},
  {q:"Bạn từng ăn đồ ăn Việt Nam chưa?", a:"你吃过越南菜吗？/ 你吃过越南菜没有？"},
  {q:"Tôi chưa từng gặp anh ấy.", a:"我没见过他。/ 我没有见过他。"}]}],
rel:["二71","一21","二33","二11"]
};
