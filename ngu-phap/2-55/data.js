// Bài ngữ pháp 【二55】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二55", title:"“有”字句2", vi:"Câu chữ “有” 2 — ước lượng, đạt tới (cao 1m8, hơn 30 tuổi)", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng <b>有 + số lượng (+ tính từ)</b> để ước lượng, nói “đạt tới” mức nào.",
 "Biết 有 ở đây mang nghĩa “chừng, khoảng, đến”.",
 "Liên hệ với <b>A 有 B (这么 / 那么) + Adj</b> trong so sánh 【二58】."],
intro:"Ngoài nghĩa “có” 【一37】, 有 còn dùng để <b>đánh giá, ước lượng</b> kích thước, tuổi tác: <b>他有一米八高</b> = anh ấy cao đến 1m8.",
rules:[
 {t:"S + 有 + số lượng (+ Adj)", sub:"表示评价、达到", fx:[["Chủ ngữ",""],["有",null],["số lượng",""],["(高 / 长 / 重…)",""]], mean:"Chừng, đạt tới.",
  ex:[["他[有]一米八高。","Tā yǒu yì mǐ bā gāo.","Anh ấy cao chừng 1m8.","等级标准"],
      ["他[有]三十多岁。","Tā yǒu sānshí duō suì.","Anh ấy chừng hơn 30 tuổi.","等级标准"]]}],
notes:[
 {t:"Nghĩa so sánh", html:"<span class='zh'>你哥哥有你高吗？</span> = Anh bạn có cao bằng bạn không? — xem 比较句2 【二58】."}],
cmp:[
 {vn:"Anh ấy cao khoảng 1m8.", zh:"他[有]一米八高。", py:"Tā yǒu yì mǐ bā gāo.", ok:true, why:"“khoảng / đến” → 有 trước số lượng."}],
ex:[
 ["这条河[有]一百米宽。","Zhè tiáo hé yǒu yìbǎi mǐ kuān.","Con sông này rộng chừng 100 mét."],
 ["这个箱子[有]二十公斤。","Zhège xiāngzi yǒu èrshí gōngjīn.","Cái vali này nặng chừng 20 cân."],
 ["从这儿到学校[有]两公里。","Cóng zhèr dào xuéxiào yǒu liǎng gōnglǐ.","Từ đây đến trường chừng 2 km."]],
errs:[
 {bad:"他一米八有高。", good:"他有一米八高。", why:"有 đứng trước số lượng."},
 {bad:"他是三十多岁有。", good:"他有三十多岁。", why:"Không dùng 是; 有 + số tuổi."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy cao chừng 1m8.", o:["他有一米八高。","他一米八有高。","他高有一米八。"], a:0, why:"有 + số + Adj."},
  {q:"Anh ấy chừng hơn 30 tuổi.", o:["他有三十多岁。","他三十多岁有。","他是有三十多岁的。"], a:0, why:"有 + tuổi."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","有","一米八","高"], a:"他有一米八高。", vi:"Anh ấy cao chừng 1m8."},
  {w:["这条河","有","一百米","宽"], a:"这条河有一百米宽。", vi:"Con sông này rộng chừng 100 mét."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Từ đây đến trường chừng 2 km.", a:"从这儿到学校有两公里。"},
  {q:"Cô ấy chừng hơn 20 tuổi.", a:"她有二十多岁。"}]}],
rel:["一37","二58","二73","二07"]
};
