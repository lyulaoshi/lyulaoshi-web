// Bài ngữ pháp 【新4.22】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.22", title:"数词＋形容词＋量词", vi:"Số từ + tính từ + lượng từ (一大碗)", tag:"短语 · 结构类型",
goals:[
 "Chen <b>tính từ</b> vào giữa số từ và lượng từ: 一<b>大</b>碗米饭.",
 "Dùng chủ yếu 大, 小, 长, 厚, 满, 整.",
 "Hiểu sắc thái: nhấn mạnh <b>to, nhiều, trọn vẹn</b>."],
intro:"Tiếng Việt nói “một bát <b>to</b>”, tính từ đứng sau lượng từ. Tiếng Trung đặt tính từ <b>trước lượng từ</b>: 一<b>大</b>碗.",
rules:[
 {t:"Số + Adj + lượng từ (+ N)", sub:"短语", fx:[["số từ",""],["大 / 小 / 满 / 整",null],["lượng từ",""],["N",""]], mean:"",
  ex:[["他吃了{1|一}{2|大}{3|碗}{4|面条儿}。","Tā chīle yí dà wǎn miàntiáor.","Anh ấy ăn một bát mì to."],
      ["妈妈买了{1|一}{2|大}{3|包}{4|东西}。","Māma mǎile yí dà bāo dōngxi.","Mẹ mua một túi to đồ."],
      ["他喝了{1|一}{2|满}{3|杯}{4|水}。","Tā hēle yì mǎn bēi shuǐ.","Anh ấy uống một cốc nước đầy."]]}],
notes:[{t:"整 + lượng từ", html:"<span class='zh'>一整天、一整个晚上</span> = cả một ngày, cả một buổi tối."}],
cmp:[
 {vn:"Một đống sách dày", zh:"一[大]堆书", py:"yí dà duī shū", ok:true, why:"Tính từ đứng trước lượng từ 堆."},
 {vn:"Hai quyển sách dày", zh:"两[厚]本书", py:"liǎng hòu běn shū", ok:true, why:"厚 cũng chen được trước 本."}],
ex:[
 ["桌子上放着一[大]堆书。","Zhuōzi shang fàngzhe yí dà duī shū.","Trên bàn để một đống sách to."],
 ["我昨天睡了一[整]天。","Wǒ zuótiān shuìle yì zhěng tiān.","Hôm qua tôi ngủ cả ngày."],
 ["前面走过来一[大]群人。","Qiánmian zǒu guolai yí dà qún rén.","Phía trước có một đám đông đi tới."]],
errs:[
 {bad:"一碗大的米饭", good:"一大碗米饭", why:"Muốn nói “một bát to” thì đặt 大 trước lượng từ 碗."},
 {bad:"他喝了一杯满水。", good:"他喝了一满杯水。", why:"满 đứng trước lượng từ 杯."},
 {bad:"我睡了整一天。", good:"我睡了一整天。", why:"Số từ + 整 + lượng từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy ăn một bát cơm to.", o:["他吃了一大碗米饭。","他吃了一碗大的米饭。","他吃了大一碗米饭。"], a:0, why:"Số + 大 + lượng từ + N."},
  {q:"Tôi đợi cả một buổi sáng.", o:["我等了整一个上午。","我等了一整个上午。"], a:1, why:"一 + 整 + 个."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["妈妈","买了","一","大","包","东西"], a:"妈妈买了一大包东西。", vi:"Mẹ mua một túi to đồ."},
  {w:["我","昨天","睡了","一","整","天"], a:"我昨天睡了一整天。", alt:["昨天我睡了一整天。"], vi:"Hôm qua tôi ngủ cả ngày."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy uống một cốc nước đầy.", a:"他喝了一满杯水。/ 他喝了满满一杯水。"},
  {q:"Trên bàn để một đống sách to.", a:"桌子上放着一大堆书。"}]}],
rel:["一23","三09","三11"]
};
