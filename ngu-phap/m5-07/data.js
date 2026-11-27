// Bài ngữ pháp 【新5.07】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.07", title:"频率副词：老是、通常、时常", vi:"老是, 通常, 时常 — cứ, thường, hay", tag:"词类 · 副词",
goals:[
 "Dùng <b>时常</b> = 常常 (văn viết).",
 "Dùng <b>通常</b>: thông thường, theo lệ.",
 "Dùng <b>老是</b>: cứ … mãi (phàn nàn)."],
intro:"Ba từ đều chỉ “thường”, khác ở <b>giọng điệu</b>: 通常 trung tính, 时常 văn nhã, 老是 chê trách.",
rules:[
 {t:"S + 时常 + V", sub:"（1）时常", fx:[["S",""],["时常",null],["V",""]], mean:"Thường hay.",
  ex:[["{1|我}{2|时常}{3|想起老朋友}。","Wǒ shícháng xiǎngqǐ lǎo péngyou.","Tôi thường nhớ đến bạn cũ."]]},
 {t:"(S) + 通常 + V", sub:"（2）通常", fx:[["S",""],["通常",null],["V",""]], mean:"Thông thường.",
  ex:[["{1|我}{2|通常}{3|七点起床}。","Wǒ tōngcháng qī diǎn qǐchuáng.","Thường tôi dậy lúc 7 giờ."]]},
 {t:"S + 老是 + V", sub:"（3）老是", fx:[["S",""],["老是",null],["V",""]], mean:"Cứ, suốt (không hài lòng).",
  ex:[["{1|你}怎么{2|老是}{3|迟到}？","Nǐ zěnme lǎoshì chídào?","Sao bạn cứ đi muộn thế?"]]}],
cmp:[
 {vn:"Anh ấy cứ quên mật khẩu.", zh:"他[老是]忘记密码。", py:"Tā lǎoshì wàngjì mìmǎ.", ok:true, why:"Phàn nàn → 老是."}],
ex:[
 ["周末他[时常]去看望父母。","Zhōumò tā shícháng qù kànwàng fùmǔ.","Cuối tuần anh ấy hay về thăm bố mẹ."],
 ["商店[通常]晚上十点关门。","Shāngdiàn tōngcháng wǎnshang shí diǎn guān mén.","Cửa hàng thường đóng cửa lúc 10 giờ tối."],
 ["最近我[老是]睡不好。","Zuìjìn wǒ lǎoshì shuì bu hǎo.","Dạo này tôi cứ ngủ không ngon."]],
errs:[
 {bad:"我老是很喜欢你。（muốn nói luôn quý）", good:"我一直很喜欢你。", why:"老是 mang giọng phàn nàn."},
 {bad:"我七点起床通常。", good:"我通常七点起床。", why:"Phó từ đứng trước phần vị ngữ."},
 {bad:"明天我时常去。", good:"明天我去。/ 我时常去。", why:"Từ tần suất không đi với một lần cụ thể."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你怎么＿忘带书？", vi:"Sao bạn cứ quên mang sách?", o:["老是","通常","即将"], a:0, why:"Chê trách → 老是."},
  {q:"这种手术＿需要两个小时。", vi:"Ca mổ này thường cần hai tiếng.", o:["通常","老是","偶尔地"], a:0, why:"Theo lệ → 通常."},
  {q:"“时常” gần nghĩa nhất với:", vi:"Chọn từ gần nghĩa.", o:["常常","从不","偶尔"], a:0, why:"Đều là “thường”."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","通常","七点","起床"], a:"我通常七点起床。", alt:["通常我七点起床。"], vi:"Thường tôi dậy lúc 7 giờ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Dạo này tôi cứ ngủ không ngon.", a:"最近我老是睡不好。/ 我最近老是睡不好。"}]}],
rel:["新4.08","二16","三15"]
};
