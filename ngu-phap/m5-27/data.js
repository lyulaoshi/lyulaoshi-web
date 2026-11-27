// Bài ngữ pháp 【新5.27】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.27", title:"趋向补语3：引申用法表示状态意义", vi:"Bổ ngữ xu hướng 3 — 下来, 下去, 起来, 过来, 过去 chỉ trạng thái", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>起来</b> (bắt đầu), <b>下去</b> (tiếp tục), <b>下来</b> (dần lắng xuống).",
 "Dùng <b>过来</b> (trở lại bình thường), <b>过去</b> (mất trạng thái bình thường).",
 "Không dịch theo hướng lên, xuống."],
intro:"Ở đây 来 / 去 không chỉ hướng đi mà chỉ <b>sự thay đổi trạng thái</b>: 安静下来 = yên dần, 暗下去 = tối dần đi.",
rules:[
 {t:"V / Adj + 起来", sub:"（1）bắt đầu, tăng lên", fx:[["V / Adj",""],["起来",null]], mean:"Bắt đầu và tiếp diễn.",
  ex:[["天气{1|暖和}{2|起来}了。","Tiānqì nuǎnhuo qilai le.","Trời ấm dần lên."]]},
 {t:"Adj + 下来", sub:"（2）lắng xuống", fx:[["Adj (静、慢、黑…)",""],["下来",null]], mean:"Chuyển dần sang trạng thái yên, chậm, tối.",
  ex:[["老师一进来，教室就{1|安静}{2|下来}了。","Lǎoshī yí jìnlai, jiàoshì jiù ānjìng xialai le.","Thầy vừa vào, lớp liền yên lặng."]]},
 {t:"V / Adj + 下去", sub:"（3）tiếp tục", fx:[["V / Adj",""],["下去",null]], mean:"Cứ tiếp tục như thế.",
  ex:[["虽然很难，我还是要{1|坚持}{2|下去}。","Suīrán hěn nán, wǒ háishi yào jiānchí xiaqu.","Tuy khó, tôi vẫn phải kiên trì tiếp."],
      ["再这样{1|瘦}{2|下去}，身体会出问题的。","Zài zhèyàng shòu xiaqu, shēntǐ huì chū wèntí de.","Cứ gầy đi thế này sức khỏe sẽ có vấn đề."]]},
 {t:"V + 过来 / 过去", sub:"（4）tỉnh lại / ngất đi", fx:[["V",""],["过来 / 过去",null]], mean:"过来: về bình thường · 过去: mất bình thường.",
  ex:[["病人终于{1|醒}{2|过来}了。","Bìngrén zhōngyú xǐng guolai le.","Bệnh nhân cuối cùng đã tỉnh lại."],
      ["他累得{1|晕}{2|过去}了。","Tā lèi de yūn guoqu le.","Anh ấy mệt đến ngất đi."]]}],
cmp:[
 {vn:"Nói tiếp đi.", zh:"你[说下去]。", py:"Nǐ shuō xiaqu.", ok:true, why:"“tiếp” → 下去."}],
ex:[
 ["车慢慢停[下来]了。","Chē mànmàn tíng xialai le.","Xe từ từ dừng lại."],
 ["听了笑话，大家都笑[起来]。","Tīngle xiàohua, dàjiā dōu xiào qilai.","Nghe chuyện cười, ai cũng bật cười."],
 ["错的地方要改[过来]。","Cuò de dìfang yào gǎi guolai.","Chỗ sai phải sửa lại."]],
errs:[
 {bad:"教室安静起去了。", good:"教室安静下来了。", why:"Yên dần → 下来."},
 {bad:"请你继续说起来。", good:"请你说下去。", why:"Tiếp tục → 下去."},
 {bad:"他晕过来了。（muốn nói ngất）", good:"他晕过去了。", why:"Mất tỉnh táo → 过去."}],
practice:[
 {t:"A. Chọn đáp án", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"天气慢慢冷＿了。", vi:"Trời dần lạnh lên.", o:["起来","过去","过来"], a:0, why:"Bắt đầu và tăng → 起来."},
  {q:"请安静＿。", vi:"Xin giữ yên lặng.", o:["下来","过去","起去"], a:0, why:"Yên dần → 下来."},
  {q:"这种生活我过不＿了。", vi:"Cuộc sống này tôi không sống tiếp nổi.", o:["下去","起来","过来"], a:0, why:"Tiếp tục → 下去."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["病人","终于","醒","过来","了"], a:"病人终于醒过来了。", vi:"Bệnh nhân cuối cùng đã tỉnh lại."},
  {w:["我","还是","要","坚持","下去"], a:"我还是要坚持下去。", vi:"Tôi vẫn phải kiên trì tiếp."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Xe từ từ dừng lại.", a:"车慢慢停下来了。/ 车慢慢地停下来了。"},
  {q:"Nói tiếp đi.", a:"你说下去。/ 说下去。/ 说下去吧。/ 你说下去吧。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"天黑下来了。", vi:"Trời tối dần.", o:["Đúng","Sai"], a:0, why:"黑下来 đúng."},
  {q:"这个坏习惯你要改过去。", vi:"Thói xấu này bạn phải sửa.", o:["Đúng","Sai"], a:1, why:"Sửa về đúng → 改过来。"},
  {q:"孩子突然哭起来了。", vi:"Đứa bé đột nhiên khóc.", o:["Đúng","Sai"], a:0, why:"Bắt đầu khóc → 起来."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你要把这个好习惯保持＿。", vi:"Bạn phải giữ tiếp thói quen tốt này.", o:["下去","过来","起来"], a:0, why:"保持下去."},
  {q:"我还没反应＿呢。", vi:"Tôi còn chưa kịp phản ứng.", o:["过来","下去","起去"], a:0, why:"反应过来."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Trời ấm dần lên.", a:"天气暖和起来了。/ 天气慢慢暖和起来了。/ 天暖和起来了。"},
  {q:"Anh ấy mệt đến ngất đi.", a:"他累得晕过去了。/ 他累得昏过去了。"}]}],
rel:["三47","新3.49","二50"]
};
