// Bài ngữ pháp 【新5.34】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.34", title:"承接复句：……，便……", vi:"…, 便… — … liền … (nối tiếp)", tag:"句子的类型 · 复句",
goals:[
 "Nối hai việc <b>xảy ra liên tiếp</b> bằng 便 trong văn kể.",
 "Kết hợp <b>一……便……</b>.",
 "Biết 便 là cách viết của 就."],
intro:"Trong truyện và bài viết, “<b>… xong thì liền …</b>” thường dùng 便 thay 就.",
rules:[
 {t:"Việc 1，(S) 便 + việc 2", sub:"（1）", fx:[["việc 1",""],["，",""],["S",""],["便",null],["việc 2",""]], mean:"Việc 2 theo ngay sau việc 1.",
  ex:[["{1|他放下行李}，{3|便}{4|出去找饭馆了}。","Tā fàngxià xíngli, biàn chūqu zhǎo fànguǎn le.","Anh ấy đặt hành lý xuống liền ra ngoài tìm quán ăn."],
      ["{1|老师刚说完}，{2|大家}{3|便}{4|讨论起来}。","Lǎoshī gāng shuōwán, dàjiā biàn tǎolùn qilai.","Thầy vừa nói xong, mọi người liền bàn luận."]]},
 {t:"S 一 + V1，便 + V2", sub:"（2）", fx:[["S",""],["一",null],["V1",""],["，",""],["便",null],["V2",""]], mean:"Hễ / vừa … là …",
  ex:[["{1|她}{2|一}{3|进门}，{4|便}{5|闻到了香味儿}。","Tā yí jìn mén, biàn wéndàole xiāngwèir.","Cô ấy vừa vào cửa liền ngửi thấy mùi thơm."]]}],
cmp:[
 {vn:"Tan học xong, nó liền chạy đi đá bóng.", zh:"放了学，他[便]跑去踢球了。", py:"Fàngle xué, tā biàn pǎoqu tī qiú le.", ok:true, why:"便 đứng sau chủ ngữ của vế sau."}],
ex:[
 ["天一亮，我们[便]出发了。","Tiān yí liàng, wǒmen biàn chūfā le.","Trời vừa sáng chúng tôi đã lên đường."],
 ["听完我的话，他[便]笑了。","Tīngwán wǒ de huà, tā biàn xiào le.","Nghe tôi nói xong, anh ấy cười."],
 ["他大学一毕业[便]回家乡工作了。","Tā dàxué yí bìyè biàn huí jiāxiāng gōngzuò le.","Vừa tốt nghiệp đại học, anh ấy liền về quê làm việc."]],
errs:[
 {bad:"放下行李，便他出去了。", good:"放下行李，他便出去了。", why:"便 đứng sau chủ ngữ."},
 {bad:"她一进门，便就闻到了香味儿。", good:"她一进门，便闻到了香味儿。", why:"便 = 就, không dùng cả hai."},
 {bad:"请你吃完饭便洗碗吧！", good:"请你吃完饭就洗碗吧！", why:"Câu sai bảo khẩu ngữ dùng 就."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trời vừa sáng chúng tôi đã đi.", o:["天一亮，我们便出发了。","天一亮，便我们出发了。"], a:0, why:"S + 便 + V."},
  {q:"听完我的话，他＿笑了。", vi:"Nghe xong, anh ấy cười.", o:["便","才能","却不"], a:0, why:"Nối tiếp."},
  {q:"“便” gần nghĩa nhất với:", vi:"Chọn từ gần nghĩa.", o:["就","才","还"], a:0, why:"便 là 就 văn viết."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","一进门，","便","闻到了","香味儿"], a:"她一进门，便闻到了香味儿。", vi:"Cô ấy vừa vào cửa liền ngửi thấy mùi thơm."},
  {w:["老师刚说完，","大家","便","讨论起来"], a:"老师刚说完，大家便讨论起来。", vi:"Thầy vừa nói xong, mọi người liền bàn luận."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 便)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tan học xong, nó liền chạy đi đá bóng.", a:"放了学，他便跑去踢球了。/ 放学后，他便跑去踢球了。/ 下了课，他便去踢球了。"}]}],
rel:["新5.09","二69","二62"]
};
