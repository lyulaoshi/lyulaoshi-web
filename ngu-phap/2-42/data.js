// Bài ngữ pháp 【二42】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二42", title:"不一会儿", vi:"不一会儿 — “chẳng mấy chốc, một lát sau”", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>不一会儿</b> để nói thời gian rất ngắn trôi qua.",
 "Thường đi với <b>就……了</b>: 不一会儿就……了.",
 "Đặt 不一会儿 trước động từ hoặc đầu vế câu."],
intro:"不一会儿 = “chưa được một lúc” → chẳng mấy chốc. Hay đi cùng <b>就</b> (nhanh) và <b>了</b> (đã xong).",
rules:[
 {t:"(S) 不一会儿 (就) + V + 了", sub:"不一会儿", fx:[["(Chủ ngữ)",""],["不一会儿",null],["就",null],["Động từ … 了",""]], mean:"",
  ex:[["今天的作业我[不一会儿]就做完了。","Jīntiān de zuòyè wǒ bù yíhuìr jiù zuòwán le.","Bài tập hôm nay tôi chẳng mấy chốc đã làm xong.","等级标准"],
      ["我们走到车站，[不一会儿]，公交车就来了。","Wǒmen zǒudào chēzhàn, bù yíhuìr, gōngjiāochē jiù lái le.","Chúng tôi đi tới bến, một lát sau xe buýt đã đến.","等级标准"]]}],
cmp:[
 {vn:"Chẳng mấy chốc trời đã tối.", zh:"[不一会儿]，天就黑了。", py:"Bù yíhuìr, tiān jiù hēi le.", ok:true, why:"Đầu vế câu, kèm 就……了."}],
ex:[
 ["他[不一会儿]就回来了。","Tā bù yíhuìr jiù huílai le.","Anh ấy một lát sau đã về."],
 ["雨[不一会儿]就停了。","Yǔ bù yíhuìr jiù tíng le.","Mưa chẳng mấy chốc đã tạnh."]],
errs:[
 {bad:"我做完了作业不一会儿。", good:"我不一会儿就做完了作业。", why:"不一会儿 đứng trước động từ."},
 {bad:"他不一会儿回来。", good:"他不一会儿就回来了。", why:"Thường có 就……了."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mưa chẳng mấy chốc đã tạnh.", o:["雨不一会儿就停了。","雨停了不一会儿。","不一会儿雨停就了。"], a:0, why:"不一会儿就 V 了."},
  {q:"Anh ấy một lát sau đã về.", o:["他回来了不一会儿。","他不一会儿就回来了。","他就不一会儿回来了。"], a:1, why:"不一会儿就."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","不一会儿","就","做完","了"], a:"我不一会儿就做完了。", vi:"Tôi chẳng mấy chốc đã làm xong."},
  {w:["不一会儿","公交车","就","来了"], a:"不一会儿，公交车就来了。", vi:"Một lát sau xe buýt đã đến."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Chẳng mấy chốc trời đã tối.", a:"不一会儿，天就黑了。"},
  {q:"Anh ấy ăn một lát đã xong.", a:"他不一会儿就吃完了。"}]}],
rel:["二20","二17","一40","二69"]
};
