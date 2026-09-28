// Bài ngữ pháp 【二49】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二49", title:"结果补语1", vi:"Bổ ngữ kết quả 1 — V + 错 / 懂 / 干净 / 好 / 会 / 清楚 / 完", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>động từ + bổ ngữ kết quả</b> để nói hành động đạt kết quả gì (viết sai, nghe hiểu, giặt sạch…).",
 "Phủ định bằng <b>没 + V + bổ ngữ</b>.",
 "Hỏi bằng <b>V + bổ ngữ + 了没有？</b>"],
intro:"Bổ ngữ kết quả đứng <b>ngay sau động từ</b>, dính liền với nó. Tiếng Việt cũng có: “viết <b>sai</b>, nghe <b>hiểu</b>, ăn <b>xong</b>”.",
rules:[
 {t:"V + 错 / 懂 / 干净 / 好 / 会 / 清楚 / 完", sub:"结果补语", fx:[["Động từ",""],["Bổ ngữ kết quả",null],["(了) + tân ngữ",""]], mean:"错 sai · 懂 hiểu · 干净 sạch · 好 xong, tốt · 会 biết (học được) · 清楚 rõ · 完 xong.",
  ex:[["写[错]　看[懂]　洗[干净]　做[好]","xiěcuò　kàndǒng　xǐ gānjìng　zuòhǎo","viết sai　xem hiểu　giặt sạch　làm xong","等级标准"],
      ["学[会]　听[清楚]　吃[完]","xuéhuì　tīng qīngchu　chīwán","học được　nghe rõ　ăn xong","等级标准"],
      ["你写[错]了两个汉字。","Nǐ xiěcuò le liǎng ge Hànzì.","Bạn viết sai hai chữ Hán.","等级标准"],
      ["衣服我洗[干净]了。","Yīfu wǒ xǐ gānjìng le.","Quần áo tôi giặt sạch rồi.","等级标准"]]},
 {t:"Phủ định và câu hỏi", sub:"否定 · 疑问", fx:[["没",null],["V + bổ ngữ",""],["/ V + bổ ngữ + 了没有？",null]], mean:"Không dùng 不 (trừ câu giả định).",
  ex:[["这个句子我[没]看[懂]。","Zhège jùzi wǒ méi kàndǒng.","Câu này tôi chưa đọc hiểu.","等级标准"],
      ["这道题你学[会]了[没有]？——这道题我学会了。","Zhè dào tí nǐ xuéhuì le méiyǒu? —— Zhè dào tí wǒ xuéhuì le.","Bài này bạn học được chưa? — Bài này tôi học được rồi.","等级标准"],
      ["你听[清楚]老师的话了吗？——老师的话我听清楚了。","Nǐ tīng qīngchu lǎoshī de huà le ma? —— Lǎoshī de huà wǒ tīng qīngchu le.","Bạn nghe rõ lời cô chưa? — Lời cô tôi nghe rõ rồi.","等级标准"]]}],
cmp:[
 {vn:"Tôi ăn xong rồi.", zh:"我吃[完]了。", py:"Wǒ chīwán le.", ok:true, why:"“xong” sau động từ — giống tiếng Việt."},
 {vn:"Tôi nghe không hiểu (chưa hiểu).", zh:"我[没]听[懂]。", py:"Wǒ méi tīngdǒng.", ok:true, why:"Phủ định kết quả: 没 + V + 懂."}],
ex:[
 ["作业我做[完]了。","Zuòyè wǒ zuòwán le.","Bài tập tôi làm xong rồi."],
 ["你说[错]了。","Nǐ shuōcuò le.","Bạn nói sai rồi."],
 ["饭做[好]了，快来吃吧！","Fàn zuòhǎo le, kuài lái chī ba!","Cơm nấu xong rồi, mau đến ăn đi!"]],
errs:[
 {bad:"我不听懂。（ý: chưa hiểu）", good:"我没听懂。", why:"Phủ định bổ ngữ kết quả dùng 没."},
 {bad:"我吃了完饭。", good:"我吃完了饭。/ 我吃完饭了。", why:"Bổ ngữ dính liền sau động từ, 了 sau bổ ngữ."},
 {bad:"我没听懂了。", good:"我没听懂。", why:"Có 没 thì bỏ 了."}],
practice:[
 {t:"A. Chọn bổ ngữ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你写＿＿了一个字。(sai)", vi:"Bạn viết ＿＿ một chữ.", o:["错","完","会"], a:0, why:"写错."},
  {q:"衣服我洗＿＿了。(sạch)", vi:"Quần áo tôi giặt ＿＿ rồi.", o:["好","干净","懂"], a:1, why:"洗干净."},
  {q:"这个句子我没看＿＿。(hiểu)", vi:"Câu này tôi đọc chưa ＿＿.", o:["懂","完","错"], a:0, why:"看懂."},
  {q:"Tôi chưa nghe rõ.", o:["我不听清楚。","我没听清楚。","我没听清楚了。"], a:1, why:"没 + V + bổ ngữ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","写错","了","两个","汉字"], a:"你写错了两个汉字。", vi:"Bạn viết sai hai chữ Hán."},
  {w:["这个","句子","我","没","看懂"], a:"这个句子我没看懂。", vi:"Câu này tôi chưa đọc hiểu."},
  {w:["衣服","我","洗","干净","了"], a:"衣服我洗干净了。", vi:"Quần áo tôi giặt sạch rồi."}]},
 {t:"C. Đổi sang phủ định / câu hỏi", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {ask:"Phủ định", q:"我做完作业了。", vi:"Tôi làm xong bài tập rồi.", a:"我没做完作业。"},
  {ask:"Hỏi", q:"你听清楚了。", vi:"Bạn nghe rõ rồi.", a:"你听清楚了没有？/ 你听清楚了吗？"}]}],
rel:["三46","二40","二37","三48"]
};
