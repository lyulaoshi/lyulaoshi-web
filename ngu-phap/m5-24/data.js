// Bài ngữ pháp 【新5.24】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.24", title:"多项状语", vi:"Trạng ngữ nhiều tầng — sắp xếp nhiều trạng ngữ", tag:"句子成分 · 状语",
goals:[
 "Xếp đúng thứ tự khi một câu có <b>nhiều trạng ngữ</b>.",
 "Nhớ trình tự chính: <b>thời gian → phó từ → nơi chốn / đối tượng → cách thức → động từ</b>.",
 "Không đặt trạng ngữ sau động từ theo thói quen tiếng Việt."],
intro:"Tiếng Việt: “Hôm qua tôi cũng đã nói chuyện vui vẻ <b>với anh ấy ở trường</b>.” Tiếng Trung xếp <b>hết trước động từ</b>: 我昨天也在学校高兴地跟他聊了聊.",
rules:[
 {t:"S + thời gian + phó từ + nơi chốn + V", sub:"（1）", fx:[["S",""],["thời gian",""],["phó từ",""],["nơi chốn",""],["V",""]], mean:"也, 都, 又, 一直… đứng sau từ chỉ thời gian.",
  ex:[["{1|我}{2|昨天}{3|也}{4|在图书馆}{5|看书}。","Wǒ zuótiān yě zài túshūguǎn kàn shū.","Hôm qua tôi cũng đọc sách ở thư viện."],
      ["{1|他}{2|每天早上}{3|都}{4|在公园里}{5|锻炼}。","Tā měi tiān zǎoshang dōu zài gōngyuán li duànliàn.","Sáng nào anh ấy cũng tập ở công viên."]]},
 {t:"S + phó từ + cách thức + đối tượng + V", sub:"（2）", fx:[["S",""],["phó từ",""],["cách thức",""],["跟 / 对 + người",""],["V",""]], mean:"Tính từ + 地 thường đứng trước cụm 跟 / 对.",
  ex:[["{1|她}{2|总是}{3|热情地}{4|向客人}{5|介绍}。","Tā zǒngshì rèqíng de xiàng kèrén jièshào.","Cô ấy luôn nhiệt tình giới thiệu với khách."],
      ["{1|老师}{2|又}{3|耐心地}{4|给我们}{5|讲了一遍}。","Lǎoshī yòu nàixīn de gěi wǒmen jiǎngle yí biàn.","Thầy lại kiên nhẫn giảng cho chúng tôi một lần."]]}],
notes:[{t:"Thời gian", html:"Từ chỉ thời gian có thể đứng trước chủ ngữ: <span class='zh'>昨天我也在图书馆看书。</span>"}],
cmp:[
 {vn:"Tôi muốn nói chuyện với bạn ở đây một lát.", zh:"我想[在这儿跟你]聊一会儿。", py:"Wǒ xiǎng zài zhèr gēn nǐ liáo yíhuìr.", ok:true, why:"Nơi chốn và đối tượng đều đứng trước 聊."}],
ex:[
 ["我们[明天上午][一起][从学校]出发。","Wǒmen míngtiān shàngwǔ yìqǐ cóng xuéxiào chūfā.","Sáng mai chúng ta cùng xuất phát từ trường."],
 ["他[已经][认真地][把作业]做完了。","Tā yǐjīng rènzhēn de bǎ zuòyè zuòwán le.","Em ấy đã nghiêm túc làm xong bài tập."],
 ["孩子们[正在][院子里][高兴地]玩儿呢。","Háizimen zhèngzài yuànzi li gāoxìng de wánr ne.","Bọn trẻ đang vui vẻ chơi trong sân."]],
errs:[
 {bad:"我看书在图书馆昨天。", good:"我昨天在图书馆看书。", why:"Trạng ngữ đứng trước động từ."},
 {bad:"他也昨天来了。", good:"他昨天也来了。", why:"Thời gian trước, 也 sau."},
 {bad:"我跟他昨天在学校见面了。", good:"我昨天在学校跟他见面了。", why:"Thời gian → nơi chốn → đối tượng."},
 {bad:"老师讲了耐心地一遍。", good:"老师耐心地讲了一遍。", why:"Cách thức + 地 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Hôm qua tôi cũng đọc sách ở thư viện.", o:["我昨天也在图书馆看书。","我也在图书馆看书昨天。","我在图书馆看书也昨天。"], a:0, why:"Thời gian + 也 + nơi + V."},
  {q:"Cô ấy luôn nhiệt tình giới thiệu với khách.", o:["她总是热情地向客人介绍。","她热情地总是介绍向客人。"], a:0, why:"总是 → 热情地 → 向客人 → V."},
  {q:"Sáng mai chúng ta cùng xuất phát từ trường.", o:["我们明天上午一起从学校出发。","我们一起出发从学校明天上午。"], a:0, why:"Tất cả đứng trước 出发."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","每天早上","都","在公园里","锻炼"], a:"他每天早上都在公园里锻炼。", alt:["每天早上他都在公园里锻炼。"], vi:"Sáng nào anh ấy cũng tập ở công viên."},
  {w:["老师","又","耐心地","给我们","讲了","一遍"], a:"老师又耐心地给我们讲了一遍。", vi:"Thầy lại kiên nhẫn giảng cho chúng tôi một lần."},
  {w:["我","昨天","在学校","跟他","见面了"], a:"我昨天在学校跟他见面了。", alt:["昨天我在学校跟他见面了。"], vi:"Hôm qua tôi gặp anh ấy ở trường."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Sáng mai chúng ta cùng xuất phát từ trường.", a:"我们明天上午一起从学校出发。/ 明天上午我们一起从学校出发。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"他已经在北京住了三年。", vi:"Anh ấy đã sống ở Bắc Kinh ba năm.", o:["Đúng","Sai"], a:0, why:"已经 + nơi chốn + V."},
  {q:"我们都昨天很高兴地回家了。", vi:"Hôm qua chúng tôi đều vui vẻ về nhà.", o:["Đúng","Sai"], a:1, why:"我们昨天都很高兴地回家了。"},
  {q:"孩子们正在院子里玩儿呢。", vi:"Bọn trẻ đang chơi trong sân.", o:["Đúng","Sai"], a:0, why:"正在 + nơi + V."}]},
 {t:"E. Chọn vị trí đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我＿给你打电话。(dùng 晚上)", vi:"Tối tôi gọi điện cho bạn.", o:["晚上","晚上的","在晚上里"], a:0, why:"Thời gian đứng trước 给你."},
  {q:"他＿跟我说了这件事。", vi:"Anh ấy lén nói chuyện này với tôi.", o:["偷偷地","得偷偷","偷偷得很"], a:0, why:"Cách thức + 地 trước cụm 跟我."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi muốn nói chuyện với bạn ở đây một lát.", a:"我想在这儿跟你聊一会儿。/ 我想在这里跟你聊一会儿。/ 我想在这儿跟你聊聊。"},
  {q:"Hôm qua anh ấy cũng đến.", a:"他昨天也来了。/ 昨天他也来了。"}]}],
rel:["一28","一20","二15"]
};
