// Bài ngữ pháp 【二52】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二52", title:"数量补语1：动词＋动量补语", vi:"Bổ ngữ số lượng 1 — động từ + số lần", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>V + (了 / 过) + số + 次 / 遍 / 下…</b> để nói số lần làm.",
 "Dùng <b>V + 一下(儿)</b> cho hành động ngắn.",
 "Đặt số lần <b>sau động từ</b>, không đặt trước."],
intro:"Bổ ngữ động lượng cho biết hành động xảy ra <b>bao nhiêu lần</b>. Lượng từ động tác xem 【二11】.",
rules:[
 {t:"V + (了 / 过) + số + lượng từ động tác", sub:"动量补语", fx:[["Động từ",""],["(了 / 过)",""],["số + 次 / 遍 / 下…",null]], mean:"",
  ex:[["我去过[一次]。","Wǒ qù guo yí cì.","Tôi đã đi một lần.","等级标准"],
      ["我们休息[一下儿]。","Wǒmen xiūxi yíxiàr.","Chúng ta nghỉ một chút.","等级标准"]]}],
notes:[
 {t:"Có tân ngữ", html:"vị trí tân ngữ với số lần học kỹ ở 【三50】: <span class='zh'>我找了他两次。我去过一次中国。</span>"}],
cmp:[
 {vn:"Tôi đã đi một lần.", zh:"我去过[一次]。", py:"Wǒ qù guo yí cì.", ok:true, why:"Số lần sau động từ — giống tiếng Việt."}],
ex:[
 ["这本书我看了[两遍]。","Zhè běn shū wǒ kàn le liǎng biàn.","Quyển sách này tôi đọc hai lượt."],
 ["请你等[一下儿]。","Qǐng nǐ děng yíxiàr.","Xin bạn đợi một chút."],
 ["我找了他[三次]。","Wǒ zhǎo le tā sān cì.","Tôi tìm anh ấy ba lần rồi."]],
errs:[
 {bad:"我一次去过。", good:"我去过一次。", why:"Số lần sau động từ."},
 {bad:"我们一下儿休息。", good:"我们休息一下儿。", why:"一下儿 sau động từ."},
 {bad:"我看了两本遍。", good:"我看了两遍。", why:"Chỉ dùng lượng từ động tác."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đã đi một lần.", o:["我一次去过。","我去过一次。","我去一次过。"], a:1, why:"V过 + 一次."},
  {q:"Chúng ta nghỉ một chút.", o:["我们一下儿休息。","我们休息一下儿。","我们休息儿一下。"], a:1, why:"V + 一下儿."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这本书","我","看","了","两遍"], a:"这本书我看了两遍。", vi:"Quyển sách này tôi đọc hai lượt."},
  {w:["请","你","等","一下儿"], a:"请你等一下儿。", vi:"Xin bạn đợi một chút."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi tìm anh ấy ba lần rồi.", a:"我找了他三次。"},
  {q:"Bài khóa này tôi đọc hai lượt.", a:"这篇课文我读了两遍。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我一次去过。", vi:"Tôi đã đi một lần.", o:["Đúng","Sai"], a:1, why:"Số lần đứng sau động từ: 我去过一次。"},
  {q:"请等一下儿。", vi:"Xin đợi một chút.", o:["Đúng","Sai"], a:0, why:"V + 一下儿."},
  {q:"这本书我看了两遍。", vi:"Quyển sách này tôi đọc hai lượt.", o:["Đúng","Sai"], a:0, why:"V + 了 + số lần."},
  {q:"我们两次去了。", vi:"Chúng tôi đi hai lần rồi.", o:["Đúng","Sai"], a:1, why:"我们去了两次。"}]},
 {t:"E. Chọn lượng từ / câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这个电影我看了三＿，从头到尾。", vi:"Bộ phim này tôi xem ba ＿, từ đầu đến cuối.", o:["遍", "下", "口"], a:0, why:"遍: trọn một lượt từ đầu đến cuối."},
  {q:"请你看一＿。", vi:"Bạn xem một ＿ nhé.", o:["下", "遍", "口"], a:0, why:"一下 = một chút, nói nhẹ nhàng."},
  {q:"我去过两＿长城。", vi:"Tôi đã đi Trường Thành hai ＿.", o:["次", "遍", "下"], a:0, why:"次: số lần đi."},
  {q:"Tôi đọc bài khóa hai lượt.", o:["我读了两遍课文。", "我两遍读了课文。"], a:0, why:"V + 了 + số lần + O."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi đã đi Trung Quốc một lần.", a:"我去过一次中国。/ 我去过中国一次。/ 我去了一次中国。"},
  {q:"Xin đợi một chút.", a:"请等一下。/ 请等一下儿。/ 请你等一下。/ 请你等一下儿。"},
  {q:"Bộ phim này tôi xem ba lần rồi.", a:"这个电影我看了三遍。/ 这个电影我看了三次。/ 我看了三遍这个电影。/ 我看了三次这个电影。"}]}],
rel:["二11","三50","二53","二32"]
};
