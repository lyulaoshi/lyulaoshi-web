// Bài ngữ pháp 【三48】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三48", title:"可能补语1", vi:"Bổ ngữ khả năng 1 — V得 / 不 + bổ ngữ; V得了 / V不了", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>V + 得 / 不 + bổ ngữ kết quả / xu hướng</b>: làm được / không làm được (听得懂、洗不干净).",
 "Dùng <b>V + 得了 / 不了 (liǎo)</b>: có thể / không thể làm (去不了).",
 "Hỏi bằng <b>V得C V不C？</b> hoặc V得C吗？"],
intro:"Bổ ngữ khả năng cho biết <b>có đủ khả năng / điều kiện</b> để đạt kết quả hay không. Rất hay dùng trong khẩu ngữ, nhất là dạng phủ định.",
rules:[
 {t:"V + 得 / 不 + bổ ngữ", sub:"可能补语", fx:[["Động từ",""],["得 / 不",null],["động từ / tính từ (bổ ngữ)",""]], mean:"",
  ex:[["老师的话我都听[得]懂。","Lǎoshī de huà wǒ dōu tīng de dǒng.","Lời thầy tôi đều nghe hiểu được.","等级标准"],
      ["这件衣服太脏了，洗[不]干净了。","Zhè jiàn yīfu tài zāng le, xǐ bu gānjìng le.","Chiếc áo này bẩn quá, giặt không sạch được nữa.","等级标准"]]},
 {t:"V + 得了 / 不了", sub:"得了 · 不了", fx:[["Động từ",""],["得了 / 不了",null]], mean:"了 đọc liǎo: có thể / không thể thực hiện.",
  ex:[["明天的比赛你参加[得了]吗？","Míngtiān de bǐsài nǐ cānjiā de liǎo ma?","Trận đấu ngày mai bạn tham gia được không?","等级标准"],
      ["我病了，明天上[不了]课。","Wǒ bìng le, míngtiān shàng bu liǎo kè.","Tôi ốm rồi, mai không lên lớp được.","等级标准"]]}],
notes:[{t:"不能 và V不C", html:"Không làm được vì <b>khả năng / điều kiện thực tế</b>: <span class='zh'>听不懂、买不到</span>. Không được phép: <span class='zh'>不能</span> (<span class='zh'>这儿不能抽烟</span>)."}],
cmp:[
 {vn:"Tôi nghe không hiểu.", zh:"我听[不]懂。", py:"Wǒ tīng bu dǒng.", ok:true, why:"“không … được / không hiểu” (khả năng) → V不C."},
 {vn:"Mai tôi không đi được.", zh:"明天我去[不了]。", py:"Míngtiān wǒ qù bu liǎo.", ok:true, why:"“không … được” (điều kiện) → V不了."}],
ex:[
 ["黑板上的字你看[得]清楚吗？","Hēibǎn shang de zì nǐ kàn de qīngchu ma?","Chữ trên bảng bạn nhìn rõ không?"],
 ["这么多菜，我吃[不]完。","Zhème duō cài, wǒ chī bu wán.","Nhiều món thế này, tôi ăn không hết."],
 ["你听[得懂][听不懂]？","Nǐ tīng de dǒng tīng bu dǒng?","Bạn nghe có hiểu không?"]],
errs:[
 {bad:"我不听懂。", good:"我听不懂。", why:"Không hiểu (khả năng) → V不C."},
 {bad:"我吃完不。", good:"我吃不完。", why:"不 chen giữa động từ và bổ ngữ."},
 {bad:"我听不懂了老师的话。", good:"老师的话我听不懂。", why:"Bổ ngữ khả năng không đi với 了 ở giữa."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi nghe không hiểu.", o:["我不听懂。","我听不懂。","我听懂不。"], a:1, why:"V不C."},
  {q:"Nhiều thế này tôi ăn không hết.", o:["这么多，我吃不完。","这么多，我不吃完。"], a:0, why:"V不C."},
  {q:"Mai tôi ốm, không lên lớp được.", o:["明天我上不了课。","明天我不上了课。"], a:0, why:"V不了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["老师的话","我","都","听得懂"], a:"老师的话我都听得懂。", vi:"Lời thầy tôi đều nghe hiểu được."},
  {w:["这件衣服","洗不干净","了"], a:"这件衣服洗不干净了。", vi:"Chiếc áo này giặt không sạch được nữa."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chữ trên bảng bạn nhìn rõ không?", a:"黑板上的字你看得清楚吗？/ 黑板上的字你看得清楚看不清楚？"},
  {q:"Mai tôi không đi được.", a:"明天我去不了。/ 我明天去不了。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我听不懂他说的话。", vi:"Tôi nghe không hiểu lời anh ấy nói.", o:["Đúng","Sai"], a:0, why:"V + 不 + bổ ngữ."},
  {q:"我不听懂你的话。", vi:"Tôi không hiểu lời bạn.", o:["Đúng","Sai"], a:1, why:"Không thể hiểu → bổ ngữ khả năng: 我听不懂你的话。"},
  {q:"黑板上的字我看得清楚。", vi:"Chữ trên bảng tôi nhìn rõ được.", o:["Đúng","Sai"], a:0, why:"V + 得 + bổ ngữ."},
  {q:"今天太忙，我去得不了。", vi:"Hôm nay bận quá, tôi không đi được.", o:["Đúng","Sai"], a:1, why:"Phủ định là V不了: 我去不了。"}]},
 {t:"E. Chọn câu đúng nghĩa", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nhiều quá, tôi ăn không hết (không thể).", o:["我吃不完。", "我不吃完。", "我没吃完。"], a:0, why:"Không thể → V不C."},
  {q:"Hôm qua tôi chưa ăn hết (sự thật đã xảy ra).", o:["我吃不完。", "我没吃完。"], a:1, why:"Kết quả thực tế → 没 + V + C."},
  {q:"Chữ nhỏ quá, tôi nhìn không rõ.", o:["我看不清楚。", "我不看清楚。"], a:0, why:"V不C."},
  {q:"Bạn nghe có hiểu không?", o:["你听得懂吗？", "你得听懂吗？"], a:0, why:"V得C + 吗."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi nghe không hiểu.", a:"我听不懂。"},
  {q:"Mai tôi bận, không đến được.", a:"明天我很忙，来不了。/ 我明天很忙，来不了。/ 明天我很忙，去不了。/ 我明天很忙，去不了。"},
  {q:"Bạn nhìn có rõ không?", a:"你看得清楚吗？/ 你看得清楚看不清楚？"}]}],
rel:["二49","三06","三46","二31"]
};
