// Bài ngữ pháp 【二03】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二03", title:"能愿动词：愿意", vi:"Động từ năng nguyện 愿意 — “bằng lòng, sẵn lòng, muốn”", tag:"词类 · 动词",
goals:[
 "Dùng <b>愿意 + động từ</b> nói sự sẵn lòng, tự nguyện làm.",
 "Dùng <b>很愿意 / 不愿意</b>; hỏi <b>愿意不愿意 / 愿不愿意</b>.",
 "Phân biệt 愿意 (bằng lòng) với 想 (muốn, mong)."],
intro:"愿意 đứng <b>trước động từ</b>, nhấn vào <b>ý chí tự nguyện</b>: đồng ý, sẵn lòng làm (thường là việc có chút hy sinh hoặc lựa chọn).",
rules:[
 {t:"(很 / 不) 愿意 + V", sub:"愿意", fx:[["Chủ ngữ",""],["(很 / 不) 愿意",null],["Động từ",""]], mean:"Có thể thêm 很, 非常 trước 愿意.",
  ex:[["她很[愿意]帮助同学。","Tā hěn yuànyì bāngzhù tóngxué.","Cô ấy rất sẵn lòng giúp đỡ bạn học.","等级标准"],
      ["我[不愿意]去外地工作。","Wǒ bú yuànyì qù wàidì gōngzuò.","Tôi không muốn đi làm ở nơi khác.","等级标准"]]}],
notes:[
 {t:"Câu hỏi", html:"<span class='zh'>你愿意去吗？/ 你愿（意）不愿意去？</span> — trả lời <span class='zh'>愿意。/ 不愿意。</span>"},
 {t:"愿意 + danh từ / câu", html:"cũng dùng được: <span class='zh'>我愿意你来。</span> (tôi muốn bạn đến)."}],
cmp:[
 {vn:"Tôi sẵn lòng giúp bạn.", zh:"我[愿意]帮助你。", py:"Wǒ yuànyì bāngzhù nǐ.", ok:true, why:"“sẵn lòng” = 愿意 trước động từ."},
 {vn:"Anh ấy không muốn đi.", zh:"他[不愿意]去。", py:"Tā bú yuànyì qù.", ok:true, why:"Không bằng lòng đi → 不愿意."}],
ex:[
 ["你[愿意]跟我一起去吗？","Nǐ yuànyì gēn wǒ yìqǐ qù ma?","Bạn có muốn đi cùng tôi không?"],
 ["孩子[不愿意]吃药。","Háizi bú yuànyì chī yào.","Đứa bé không chịu uống thuốc."],
 ["我很[愿意]参加这个活动。","Wǒ hěn yuànyì cānjiā zhège huódòng.","Tôi rất sẵn lòng tham gia hoạt động này."]],
errs:[
 {bad:"我帮助你愿意。", good:"我愿意帮助你。", why:"愿意 đứng trước động từ."},
 {bad:"他没愿意去。", good:"他不愿意去。", why:"Phủ định bằng 不."},
 {bad:"你愿意不愿意去吗？", good:"你愿意不愿意去？", why:"Không thêm 吗."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy rất sẵn lòng giúp bạn học.", o:["她很愿意帮助同学。","她帮助同学很愿意。","她愿意很帮助同学。"], a:0, why:"很愿意 + V."},
  {q:"Tôi không muốn đi làm xa.", o:["我没愿意去外地工作。","我不愿意去外地工作。","我愿意不去外地工作。"], a:1, why:"不愿意."},
  {q:"Bạn có muốn đi cùng tôi không?", o:["你愿意跟我一起去吗？","你跟我一起去愿意吗？","你愿意不愿意跟我一起去吗？"], a:0, why:"愿意 + V + 吗."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","很","愿意","帮助","同学"], a:"她很愿意帮助同学。", vi:"Cô ấy rất sẵn lòng giúp bạn học."},
  {w:["我","不愿意","去","外地","工作"], a:"我不愿意去外地工作。", vi:"Tôi không muốn đi làm ở nơi khác."},
  {w:["孩子","不愿意","吃药"], a:"孩子不愿意吃药。", vi:"Đứa bé không chịu uống thuốc."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi sẵn lòng giúp bạn.", a:"我愿意帮助你。/ 我愿意帮你。"},
  {q:"Bạn có muốn học tiếng Trung với tôi không?", a:"你愿意跟我学中文吗？/ 你愿意不愿意跟我学中文？"}]}],
rel:["一03","二01","二02","一02"]
};
