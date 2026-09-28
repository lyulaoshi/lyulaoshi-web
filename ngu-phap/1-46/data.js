// Bài ngữ pháp 【一46】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一46", title:"用疑问代词提问", vi:"Hỏi bằng đại từ nghi vấn — thay đúng chỗ cần hỏi", tag:"提问的方法",
goals:[
 "Đặt câu hỏi bằng <b>多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么</b>.",
 "Áp dụng quy tắc “<b>hỏi chỗ nào thay chỗ đó</b>”: câu trả lời lắp vào đúng vị trí từ để hỏi.",
 "Không thêm 吗; 几 đi với lượng từ."],
intro:"Muốn hỏi phần nào trong câu, chỉ cần <b>thay phần đó</b> bằng đại từ nghi vấn, giữ nguyên các phần còn lại. Nghĩa từng từ xem 【一04】.",
rules:[
 {t:"Thay đúng chỗ", sub:"原位提问", fx:[["Phần cần hỏi",""],["→",""],["谁 / 什么 / 哪儿…",null]], mean:"<span class='zh'>他去【北京】。→ 他去哪儿？</span> · <span class='zh'>【王老师】来了。→ 谁来了？</span>",
  ex:[["你哥哥[多]大？","Nǐ gēge duō dà?","Anh trai bạn bao nhiêu tuổi?","等级标准"],
      ["车上有[多少]个人？","Chē shang yǒu duōshao ge rén?","Trên xe có bao nhiêu người?","等级标准"],
      ["你家有[几]口人？","Nǐ jiā yǒu jǐ kǒu rén?","Nhà bạn có mấy người?","等级标准"],
      ["她是[哪]国人？","Tā shì nǎ guó rén?","Cô ấy là người nước nào?","等级标准"],
      ["我们在[哪儿]见面？","Wǒmen zài nǎr jiàn miàn?","Chúng ta gặp nhau ở đâu?","等级标准"]]},
 {t:"Các câu hỏi thường gặp", sub:"常用问句", fx:[["什么 / 谁 / 怎么 / 哪些",null]], mean:"Hỏi vật, người, cách thức, số nhiều.",
  ex:[["你去[哪里]了？","Nǐ qù nǎli le?","Bạn đã đi đâu thế?","等级标准"],
      ["你看了[哪些]书？","Nǐ kàn le nǎxiē shū?","Bạn đã đọc những quyển sách nào?","等级标准"],
      ["你星期天做[什么]？","Nǐ xīngqītiān zuò shénme?","Chủ nhật bạn làm gì?","等级标准"],
      ["[谁]要喝茶？","Shéi yào hē chá?","Ai muốn uống trà?","等级标准"],
      ["这个字[怎么]读？","Zhège zì zěnme dú?","Chữ này đọc thế nào?","等级标准"]]}],
cmp:[
 {vn:"Chủ nhật bạn làm gì?", zh:"你星期天做[什么]？", py:"Nǐ xīngqītiān zuò shénme?", ok:true, why:"“gì” đúng vị trí tân ngữ — giống tiếng Việt."},
 {vn:"Chúng ta gặp nhau ở đâu?", zh:"我们在[哪儿]见面？", py:"Wǒmen zài nǎr jiàn miàn?", ok:true, why:"“ở đâu” lên trước động từ như mọi trạng ngữ nơi chốn 【一28】."}],
ex:[
 ["你[什么]时候回家？","Nǐ shénme shíhou huí jiā?","Khi nào bạn về nhà?"],
 ["这是[谁]的手机？","Zhè shì shéi de shǒujī?","Đây là điện thoại của ai?"],
 ["你[怎么]来学校？——坐公交车。","Nǐ zěnme lái xuéxiào? —— Zuò gōngjiāochē.","Bạn đến trường bằng gì? — Đi xe buýt."],
 ["苹果[多少]钱一斤？","Píngguǒ duōshao qián yì jīn?","Táo bao nhiêu tiền một cân?"]],
errs:[
 {bad:"我们见面在哪儿？", good:"我们在哪儿见面？", why:"在哪儿 đứng trước động từ."},
 {bad:"你做什么星期天？", good:"你星期天做什么？", why:"Thời gian trước động từ."},
 {bad:"你家有几人？", good:"你家有几口人？", why:"几 + lượng từ."},
 {bad:"谁要喝茶吗？", good:"谁要喝茶？", why:"Không dùng 吗."}],
practice:[
 {t:"A. Chọn câu hỏi đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trả lời: 我们在【学校】见面。 → Câu hỏi?", vi:"Chúng tôi gặp nhau ở 【trường】.", o:["我们见面在哪儿？","我们在哪儿见面？","哪儿我们见面？"], a:1, why:"Thay 学校 bằng 哪儿."},
  {q:"Trả lời: 【我】要喝茶。 → Câu hỏi?", vi:"【Tôi】 muốn uống trà.", o:["谁要喝茶？","要喝茶谁？","你要喝茶谁？"], a:0, why:"Thay chủ ngữ bằng 谁."},
  {q:"Trả lời: 我家有【四口】人。 → Câu hỏi?", vi:"Nhà tôi có 【bốn】 người.", o:["你家有几人？","你家有几口人？","你家有什么人？"], a:1, why:"几 + 口."}]},
 {t:"B. Sắp xếp thành câu hỏi", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","星期天","做","什么"], a:"你星期天做什么？", vi:"Chủ nhật bạn làm gì?"},
  {w:["这个","字","怎么","读"], a:"这个字怎么读？", vi:"Chữ này đọc thế nào?"},
  {w:["你","看","了","哪些","书"], a:"你看了哪些书？", vi:"Bạn đã đọc những quyển sách nào?"}]},
 {t:"C. Đặt câu hỏi cho phần trong 【 】", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我哥哥【二十五岁】。", vi:"Anh trai tôi 【25 tuổi】.", a:"你哥哥多大？"},
  {q:"我【坐飞机】去北京。", vi:"Tôi 【đi máy bay】 đến Bắc Kinh.", a:"你怎么去北京？"},
  {q:"这是【老师】的书。", vi:"Đây là sách của 【thầy giáo】.", a:"这是谁的书？"},
  {q:"车上有【三十】个人。", vi:"Trên xe có 【30】 người.", a:"车上有多少个人？"}]}],
rel:["一04","一33","一45","二76"]
};
