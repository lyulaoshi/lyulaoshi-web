// Bài ngữ pháp 【新5.39】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.39", title:"递进复句：反而；不是……，还……", vi:"Không những không … mà còn …; đã không … lại còn …", tag:"句子的类型 · 复句",
goals:[
 "Dùng <b>不但不 / 不但没有……，反而……</b> cho kết quả <b>ngược mong đợi</b>.",
 "Dùng <b>不是……，还 / 还是……</b> để nói điều đáng lẽ không nên mà vẫn.",
 "Phân biệt với 不但……而且…… (tăng tiến thuận)."],
intro:"“<b>Không những không</b> giúp <b>mà còn</b> cười” → 不但不帮忙，<b>反而</b>笑话我. 反而 báo hiệu điều trái ngược.",
rules:[
 {t:"S + 不但不 + V，反而 + V ngược", sub:"（1）", fx:[["S",""],["不但不",null],["V",""],["，",""],["反而",null],["điều ngược lại",""]], mean:"Không những không … mà trái lại.",
  ex:[["{1|他}{2|不但不}{3|生气}，{4|反而}{5|笑了}。","Tā búdàn bù shēngqì, fǎn'ér xiào le.","Anh ấy không những không giận mà còn cười."]]},
 {t:"S + 不但没(有) + V，反而 + …", sub:"（2）", fx:[["S",""],["不但没有",null],["V",""],["，",""],["反而",null],["điều ngược lại",""]], mean:"Đã không … mà lại.",
  ex:[["{1|吃了药}，病{2|不但没有}{3|好}，{4|反而}{5|更重了}。","Chīle yào, bìng búdàn méiyǒu hǎo, fǎn'ér gèng zhòng le.","Uống thuốc rồi, bệnh không những không đỡ mà còn nặng hơn."]]},
 {t:"不是 + điều đã làm / đã biết，还(是) + …", sub:"（3）", fx:[["不是",null],["việc trước",""],["，",""],["还 / 还是",null],["việc vẫn xảy ra",""]], mean:"Đã … rồi mà vẫn …",
  ex:[["你{1|不是}{2|吃过饭了吗}，{3|还}{4|吃}？","Nǐ búshì chīguo fàn le ma, hái chī?","Bạn ăn cơm rồi mà, còn ăn nữa?"],
      ["{1|不是}{2|提醒过你吗}，你怎么{3|还是}{4|忘了}？","Búshì tíxǐngguo nǐ ma, nǐ zěnme háishi wàng le?","Đã nhắc bạn rồi, sao vẫn quên?"]]}],
cmp:[
 {vn:"Anh ấy không những không xin lỗi mà còn trách tôi.", zh:"他[不但不]道歉，[反而]怪我。", py:"Tā búdàn bú dàoqiàn, fǎn'ér guài wǒ.", ok:true, why:"Trái mong đợi → 反而, không dùng 而且."}],
ex:[
 ["降价以后，买的人[不但没有]增加，[反而]减少了。","Jiàngjià yǐhòu, mǎi de rén búdàn méiyǒu zēngjiā, fǎn'ér jiǎnshǎo le.","Sau khi giảm giá, người mua không tăng mà còn giảm."],
 ["弟弟[不但不]怕，[反而]觉得很好玩儿。","Dìdi búdàn bú pà, fǎn'ér juéde hěn hǎowánr.","Em trai không những không sợ mà còn thấy vui."],
 ["你[不是]说不来吗，怎么[还是]来了？","Nǐ búshì shuō bù lái ma, zěnme háishi lái le?","Bạn bảo không đến mà, sao vẫn đến?"]],
errs:[
 {bad:"他不但不生气，而且笑了。", good:"他不但不生气，反而笑了。", why:"Kết quả ngược → 反而."},
 {bad:"病不但不有好，反而更重了。", good:"病不但没有好，反而更重了。", why:"有 phủ định bằng 没."},
 {bad:"他反而不但不帮忙，笑话我。", good:"他不但不帮忙，反而笑话我。", why:"反而 đứng ở vế sau."},
 {bad:"他不但会英语，反而会汉语。", good:"他不但会英语，而且会汉语。", why:"Tăng tiến thuận dùng 而且."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy không những không giận mà còn cười.", o:["他不但不生气，反而笑了。","他不但不生气，而且笑了。"], a:0, why:"反而 cho điều ngược."},
  {q:"病不但没有好，＿更重了。", vi:"Bệnh không đỡ mà còn nặng hơn.", o:["反而","而且也不","从而"], a:0, why:"反而."},
  {q:"他不但会英语，＿会汉语。", vi:"Anh ấy không những biết tiếng Anh mà còn biết tiếng Trung.", o:["而且","反而","因而"], a:0, why:"Tăng tiến thuận."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","不但不","道歉，","反而","怪我"], a:"他不但不道歉，反而怪我。", vi:"Anh ấy không những không xin lỗi mà còn trách tôi."},
  {w:["你","不是","吃过饭了吗，","还","吃"], a:"你不是吃过饭了吗，还吃？", vi:"Bạn ăn cơm rồi mà, còn ăn nữa?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Em trai không những không sợ mà còn thấy rất vui.", a:"弟弟不但不怕，反而觉得很好玩儿。/ 弟弟不但不害怕，反而觉得很好玩儿。/ 弟弟不但不怕，反而觉得很有意思。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"天气预报说晴天，不但没晴，反而下起雨来。", vi:"Dự báo nắng, không những không nắng mà còn mưa.", o:["Đúng","Sai"], a:0, why:"不但没……反而."},
  {q:"她不但漂亮，反而很聪明。", vi:"Cô ấy không những xinh mà còn thông minh.", o:["Đúng","Sai"], a:1, why:"她不但漂亮，而且很聪明。"},
  {q:"我帮了他，他不但不感谢我，反而生气了。", vi:"Tôi giúp anh ta, anh ta không cảm ơn mà còn giận.", o:["Đúng","Sai"], a:0, why:"Trái mong đợi."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他不但不批评孩子，＿表扬了他。", vi:"Anh ấy không những không mắng con mà còn khen.", o:["反而","因而","不然"], a:0, why:"反而."},
  {q:"你＿说不来吗？怎么来了？", vi:"Bạn bảo không đến mà, sao đến?", o:["不是","不但","不然"], a:0, why:"不是……吗."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Uống thuốc rồi, bệnh không những không đỡ mà còn nặng hơn.", a:"吃了药，病不但没有好，反而更重了。/ 吃了药，病不但没好，反而更重了。/ 吃了药，病不但没有好，反而更严重了。"},
  {q:"Anh ấy không những không xin lỗi mà còn trách tôi.", a:"他不但不道歉，反而怪我。/ 他不但不道歉，反而怪我了。"}]}],
rel:["二63","三66","新4.57"]
};
