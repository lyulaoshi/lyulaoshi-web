// Bài ngữ pháp 【二81】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二81", title:"要 / 快要 / 就要……了", vi:"要 / 快要 / 就要……了 — “sắp … rồi”", tag:"口语格式",
goals:[
 "Nói việc <b>sắp xảy ra</b> bằng <b>要 / 快要 / 就要 + V + 了</b>.",
 "Biết <b>就要</b> đi được với mốc thời gian cụ thể, còn <b>快要</b> thì không.",
 "Không bỏ 了 cuối câu."],
intro:"Khung “sắp … rồi”: động từ kẹp giữa <b>要 / 快要 / 就要</b> và <b>了</b>. 快要 nhấn mạnh “rất gần”, 就要 hay đi với thời gian cụ thể.",
rules:[
 {t:"(S) 要 / 快要 / 就要 + V + 了", sub:"将要", fx:[["(S)",""],["要 / 快要 / 就要",null],["Động từ",""],["了",null]], mean:"",
  ex:[["[要]下雨[了]。","Yào xià yǔ le.","Sắp mưa rồi.","等级标准"],
      ["我们[快要]放假[了]。","Wǒmen kuàiyào fàng jià le.","Chúng tôi sắp được nghỉ rồi.","等级标准"],
      ["他们明天[就要]考试[了]。","Tāmen míngtiān jiùyào kǎoshì le.","Mai họ đã thi rồi.","等级标准"]]}],
notes:[
 {t:"快要 và thời gian", html:"<svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=893338cb#sai'/></svg> <span class='zh'>他明天快要走了。</span> → <svg class='lli ok' aria-hidden='true'><use href='/chung/ic.svg?v=893338cb#tick'/></svg> <span class='zh'>他明天就要走了。</span> (có mốc thời gian dùng 就要)."}],
cmp:[
 {vn:"Sắp mưa rồi.", zh:"[要]下雨[了]。", py:"Yào xià yǔ le.", ok:true, why:"“sắp … rồi” = 要……了."},
 {vn:"Mai anh ấy đã đi rồi.", zh:"他明天[就要]走[了]。", py:"Tā míngtiān jiùyào zǒu le.", ok:true, why:"Có “mai” → 就要."}],
ex:[
 ["电影[快要]开始[了]。","Diànyǐng kuàiyào kāishǐ le.","Phim sắp bắt đầu rồi."],
 ["我[就要]毕业[了]。","Wǒ jiùyào bìyè le.","Tôi sắp tốt nghiệp rồi."],
 ["春节[快]到[了]。","Chūnjié kuài dào le.","Tết sắp đến rồi."]],
errs:[
 {bad:"他明天快要走了。", good:"他明天就要走了。", why:"Có mốc thời gian dùng 就要."},
 {bad:"要下雨。（ý: sắp mưa rồi）", good:"要下雨了。", why:"Khung cần 了."},
 {bad:"我们放假快要了。", good:"我们快要放假了。", why:"快要 trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mai anh ấy đã đi rồi.", o:["他明天快要走了。","他明天就要走了。","他明天要走快了。"], a:1, why:"Mốc thời gian + 就要."},
  {q:"Phim sắp bắt đầu rồi.", o:["电影快要开始了。","电影快要开始。","电影开始快要了。"], a:0, why:"快要……了."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","快要","放假","了"], a:"我们快要放假了。", vi:"Chúng tôi sắp được nghỉ rồi."},
  {w:["他们","明天","就要","考试","了"], a:"他们明天就要考试了。", vi:"Mai họ đã thi rồi."}]},
 {t:"C. Nói bằng tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Sắp mưa rồi.", a:"要下雨了。/ 快要下雨了。"},
  {q:"Tháng sau tôi sắp về nước rồi.", a:"下个月我就要回国了。"}]}],
rel:["二80","一40","一03","二15"]
};
