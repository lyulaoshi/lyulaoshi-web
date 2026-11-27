// Bài ngữ pháp 【新4.55】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.55", title:"并列复句：不是……，而是……；既……，又／也……", vi:"Không phải … mà là; vừa … vừa; một mặt … mặt khác", tag:"句子的类型 · 复句",
goals:[
 "Đính chính bằng <b>不是……，而是……</b>.",
 "Nêu hai đặc điểm bằng <b>既……又 / 也……</b>.",
 "Ôn <b>一方面……另一方面……</b> (【三62】)."],
intro:"不是 A 而是 B: phủ định A, khẳng định B. Đừng nhầm với <b>不是……就是</b> (không A thì B).",
rules:[
 {t:"不是 + A，而是 + B", sub:"（1）", fx:[["不是",null],["A",""],["，",""],["而是",null],["B",""]], mean:"Không phải A mà là B.",
  ex:[["他{1|不是}{2|老师}，{3|而是}{4|医生}。","Tā búshì lǎoshī, ér shì yīshēng.","Anh ấy không phải giáo viên mà là bác sĩ."],
      ["我{1|不是}{2|不想去}，{3|而是}{4|没时间}。","Wǒ búshì bù xiǎng qù, ér shì méi shíjiān.","Không phải tôi không muốn đi mà là không có thời gian."]]},
 {t:"既 + A，又 / 也 + B", sub:"（2）", fx:[["S",""],["既",null],["A",""],["，",""],["又 / 也",null],["B",""]], mean:"Vừa A vừa B.",
  ex:[["{1|这家店的菜}{2|既}{3|便宜}，{4|又}{5|好吃}。","Zhè jiā diàn de cài jì piányi, yòu hǎochī.","Món quán này vừa rẻ vừa ngon."],
      ["{1|他}{2|既}{3|会唱歌}，{4|也}{5|会跳舞}。","Tā jì huì chànggē, yě huì tiàowǔ.","Anh ấy vừa biết hát vừa biết múa."]]}],
notes:[{t:"一方面……另一方面……", html:"<span class='zh'>一方面要多听，另一方面要多说。</span> xem 【三62】."}],
cmp:[
 {vn:"Đây không phải lỗi của bạn mà là lỗi của tôi.", zh:"这[不是]你的错，[而是]我的错。", py:"Zhè búshì nǐ de cuò, ér shì wǒ de cuò.", ok:true, why:"Đính chính → 不是……而是."}],
ex:[
 ["他需要的[不是]钱，[而是]关心。","Tā xūyào de búshì qián, ér shì guānxīn.","Điều anh ấy cần không phải tiền mà là sự quan tâm."],
 ["这个工作[既]有意思，[又]有挑战。","Zhège gōngzuò jì yǒu yìsi, yòu yǒu tiǎozhàn.","Công việc này vừa thú vị vừa thử thách."],
 ["运动[既]能锻炼身体，[也]能让人开心。","Yùndòng jì néng duànliàn shēntǐ, yě néng ràng rén kāixīn.","Vận động vừa rèn sức khỏe vừa làm người ta vui."]],
errs:[
 {bad:"他不是老师，就是医生。（muốn nói không phải A mà là B）", good:"他不是老师，而是医生。", why:"就是 = không A thì B (chưa rõ)."},
 {bad:"这菜既便宜，和好吃。", good:"这菜既便宜又好吃。", why:"既 đi với 又 / 也."},
 {bad:"既他会唱歌，也我会。", good:"他会唱歌，我也会。", why:"既……又…… nói về cùng một chủ ngữ."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他不是老师，＿医生。", vi:"Anh ấy không phải giáo viên mà là bác sĩ.", o:["而是","就是","可是"], a:0, why:"不是……而是."},
  {q:"这菜＿便宜又好吃。", vi:"Món này vừa rẻ vừa ngon.", o:["既","即使","尽管"], a:0, why:"既……又."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这","不是","你的错，","而是","我的错"], a:"这不是你的错，而是我的错。", vi:"Đây không phải lỗi của bạn mà là của tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy vừa biết hát vừa biết múa (dùng 既).", a:"他既会唱歌，又会跳舞。/ 他既会唱歌，也会跳舞。"}]}],
rel:["三62","三63","三67"]
};
