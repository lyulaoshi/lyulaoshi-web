// Bài ngữ pháp 【二11】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二11", title:"动量词：遍、次、场、回、下", vi:"Lượng từ động tác — lần, lượt, trận, cái", tag:"词类 · 量词",
goals:[
 "Đếm số lần làm bằng <b>động từ + số + 次 / 回 / 遍 / 场 / 下</b>.",
 "Phân biệt <b>遍</b> (một lượt từ đầu đến cuối) với <b>次</b> (một lần).",
 "Dùng <b>一下(儿)</b> để nói hành động ngắn, nhẹ."],
intro:"Lượng từ động tác đi <b>sau động từ</b> để đếm số lần: 去<b>一次</b> (đi một lần). Tiếng Việt cũng đặt “một lần” sau động từ.",
rules:[
 {t:"Động từ + số + lượng từ động tác", sub:"动量词", fx:[["Động từ",""],["Số",""],["遍 / 次 / 场 / 回 / 下",null]], mean:"<b>次 / 回</b> lần (回 khẩu ngữ) · <b>遍</b> lượt trọn vẹn (đọc, xem, nghe hết một lượt) · <b>场</b> trận, cơn, buổi (khóc, mưa, phim, bóng) · <b>下</b> cái, phát (hành động ngắn).",
  ex:[["看两[遍]　去一[次]　哭一[场]","kàn liǎng biàn　qù yí cì　kū yì cháng","xem hai lượt　đi một lần　khóc một trận","等级标准"],
      ["来两[回]　打一[下]儿","lái liǎng huí　dǎ yí xiàr","đến hai lần　đánh một cái","等级标准"]]}],
notes:[
 {t:"Có tân ngữ", html:"tân ngữ là người / đại từ: đứng trước lượng từ (<span class='zh'>我找了他两次</span>); tân ngữ là vật: thường đứng sau (<span class='zh'>我去过一次中国</span>) — chi tiết ở 【二52】【三50】."},
 {t:"一下(儿)", html:"sau động từ = làm thử, làm nhanh: <span class='zh'>你等一下儿。请看一下。</span>"}],
cmp:[
 {vn:"Tôi đi Bắc Kinh một lần rồi.", zh:"我去过[一次]北京。", py:"Wǒ qù guo yí cì Běijīng.", ok:true, why:"Số lần sau động từ, tân ngữ địa danh sau cùng."},
 {vn:"Đọc lại bài khóa một lượt.", zh:"再读一[遍]课文。", py:"Zài dú yí biàn kèwén.", ok:true, why:"Trọn một lượt → 遍."}],
ex:[
 ["这个电影我看了三[遍]。","Zhège diànyǐng wǒ kàn le sān biàn.","Bộ phim này tôi xem ba lượt rồi."],
 ["我去过两[次]上海。","Wǒ qù guo liǎng cì Shànghǎi.","Tôi đã đi Thượng Hải hai lần."],
 ["昨天下了一[场]大雨。","Zuótiān xià le yì cháng dà yǔ.","Hôm qua mưa một trận to."],
 ["你等一[下]儿，我马上来。","Nǐ děng yíxiàr, wǒ mǎshàng lái.","Bạn đợi một chút, tôi đến ngay."]],
errs:[
 {bad:"我一次去过北京。", good:"我去过一次北京。", why:"Số lần đứng sau động từ."},
 {bad:"请再说一次遍。", good:"请再说一遍。", why:"Chỉ dùng một lượng từ."},
 {bad:"你等一个下。", good:"你等一下。", why:"一下 không có 个."}],
practice:[
 {t:"A. Chọn lượng từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这本书我看了两＿＿。(đọc hết hai lượt)", o:["遍","场","下"], a:0, why:"Trọn lượt → 遍."},
  {q:"昨天下了一＿＿大雨。", o:["次","场","下"], a:1, why:"Trận mưa → 场."},
  {q:"你等一＿＿儿。", o:["下","遍","回"], a:0, why:"一下儿."},
  {q:"我去过三＿＿中国。", o:["次","场","下"], a:0, why:"Lần → 次."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","去过","两次","上海"], a:"我去过两次上海。", vi:"Tôi đã đi Thượng Hải hai lần."},
  {w:["请","再","说","一遍"], a:"请再说一遍。", vi:"Xin nói lại một lượt."},
  {w:["你","等","一下儿"], a:"你等一下儿。", vi:"Bạn đợi một chút."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bộ phim này tôi xem hai lượt rồi.", a:"这个电影我看了两遍。"},
  {q:"Anh ấy đến ba lần rồi.", a:"他来了三次（回）了。"},
  {q:"Mời xem một chút.", a:"请看一下。"}]}],
rel:["二52","三50","二10","二32"]
};
