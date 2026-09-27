// Bài ngữ pháp 【二21】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二21", title:"介词：当", vi:"Giới từ 当 — “khi, lúc” (当……的时候)", tag:"词类 · 介词 · 引出时间",
goals:[
 "Dùng khung <b>当 + sự việc + 的时候，……</b> (khi …, …).",
 "Đặt cả cụm thời gian <b>ở đầu câu</b>, trước chủ ngữ vế sau.",
 "Không quên <b>的时候</b> sau sự việc."],
intro:"当 dẫn ra thời điểm xảy ra một việc: <b>当……的时候</b> = “khi …”. Cụm này thường đứng <b>đầu câu</b>.",
rules:[
 {t:"当 + sự việc + 的时候，(S) + V", sub:"当……的时候", fx:[["当",null],["sự việc",""],["的时候",null],["，vế sau",""]], mean:"Khi (việc A xảy ra) thì (việc B).",
  ex:[["[当]他进来[的时候]，我们正在看电视。","Dāng tā jìnlai de shíhou, wǒmen zhèngzài kàn diànshì.","Khi anh ấy đi vào, chúng tôi đang xem ti vi.","等级标准"],
      ["[当]爸爸回来[的时候]，妈妈已经做好晚饭了。","Dāng bàba huílai de shíhou, māma yǐjīng zuòhǎo wǎnfàn le.","Khi bố về, mẹ đã nấu xong cơm tối rồi.","等级标准"]]}],
notes:[
 {t:"Có thể bỏ 当", html:"<span class='zh'>他进来的时候，……</span> cũng đúng; 当 làm câu trang trọng, rõ ràng hơn."}],
cmp:[
 {vn:"Khi tôi còn nhỏ, …", zh:"[当]我小[的时候]，……", py:"Dāng wǒ xiǎo de shíhou, ……", ok:true, why:"“khi” = 当 … 的时候, bao quanh sự việc."}],
ex:[
 ["[当]我到车站[的时候]，车已经走了。","Dāng wǒ dào chēzhàn de shíhou, chē yǐjīng zǒu le.","Khi tôi đến ga, xe đã đi rồi."],
 ["[当]我难过[的时候]，他总是帮助我。","Dāng wǒ nánguò de shíhou, tā zǒngshì bāngzhù wǒ.","Khi tôi buồn, anh ấy luôn giúp tôi."],
 ["[当]老师说话[的时候]，别玩儿手机。","Dāng lǎoshī shuō huà de shíhou, bié wánr shǒujī.","Khi thầy cô đang nói, đừng chơi điện thoại."]],
errs:[
 {bad:"当他进来，我们在看电视。", good:"当他进来的时候，我们在看电视。", why:"当 đi với 的时候."},
 {bad:"我们正在看电视当他进来的时候。", good:"当他进来的时候，我们正在看电视。", why:"Cụm thời gian đứng đầu câu."},
 {bad:"当的时候他进来，……", good:"当他进来的时候，……", why:"Sự việc nằm giữa 当 và 的时候."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Khi anh ấy đến, tôi đang ăn cơm.", o:["当他来的时候，我正在吃饭。","当他来，我正在吃饭的时候。","我正在吃饭当他来的时候。"], a:0, why:"当…的时候 đầu câu."},
  {q:"Khi tôi còn nhỏ, …", o:["当我小，……","当我小的时候，……","我小当的时候，……"], a:1, why:"当 + sự việc + 的时候."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["当","他","进来","的时候","我们","正在","看电视"], a:"当他进来的时候，我们正在看电视。", vi:"Khi anh ấy đi vào, chúng tôi đang xem ti vi."},
  {w:["当","我","到车站","的时候","车","已经","走了"], a:"当我到车站的时候，车已经走了。", vi:"Khi tôi đến ga, xe đã đi rồi."}]},
 {t:"C. Nối hai câu bằng 当……的时候", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"爸爸回来 / 妈妈已经做好晚饭了", a:"当爸爸回来的时候，妈妈已经做好晚饭了。"},
  {q:"我难过 / 朋友帮助我", a:"当我难过的时候，朋友帮助我。"}]}],
rel:["二47","一42","一28","三39"]
};
