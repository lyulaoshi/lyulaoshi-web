// Bài ngữ pháp 【新4.54】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.54", title:"双重否定句", vi:"Câu phủ định kép — nhấn mạnh khẳng định", tag:"句子的类型 · 特殊句型",
goals:[
 "Hiểu <b>hai lần phủ định = khẳng định mạnh</b>.",
 "Dùng <b>不能不, 不得不, 没有……不……</b>.",
 "Phân biệt 不得不 (buộc phải) và 不能不 (không thể không)."],
intro:"“<b>Không ai không</b> biết” = ai cũng biết. Tiếng Trung dùng hai từ phủ định để nói khẳng định chắc hơn.",
rules:[
 {t:"S + 不能不 / 不得不 + V", sub:"（1）", fx:[["S",""],["不能不 / 不得不",null],["V",""]], mean:"不能不: không thể không (nên làm) · 不得不: đành phải, buộc phải.",
  ex:[["{1|这件事}你{2|不能不}{3|管}。","Zhè jiàn shì nǐ bù néng bù guǎn.","Việc này bạn không thể không quan tâm."],
      ["下大雨了，{1|我们}{2|不得不}{3|取消活动}。","Xià dà yǔ le, wǒmen bùdébù qǔxiāo huódòng.","Mưa to, chúng tôi buộc phải hủy hoạt động."]]},
 {t:"没有 + N + 不 + V", sub:"（2）", fx:[["没有",null],["người / vật",""],["不",null],["V",""]], mean:"Không ai là không …",
  ex:[["{1|没有}{2|一个人}{3|不}{4|喜欢她}。","Méiyǒu yí gè rén bù xǐhuan tā.","Không một ai không thích cô ấy."]]},
 {t:"S + 不是不 + V，(而是) …", sub:"（3）", fx:[["S",""],["不是不",null],["V",""],["·",""],["lý do thật",""]], mean:"Không phải là không …, mà …",
  ex:[["{1|我}{2|不是不}{3|想去}，{4|是没时间}。","Wǒ bú shì bù xiǎng qù, shì méi shíjiān.","Không phải tôi không muốn đi, là không có thời gian."]]}],
notes:[{t:"非……不可", html:"<span class='zh'>要学好汉语，非多练不可。</span> = muốn học giỏi thì nhất định phải luyện nhiều."}],
cmp:[
 {vn:"Không ai không biết chuyện này.", zh:"[没有]人[不]知道这件事。", py:"Méiyǒu rén bù zhīdào zhè jiàn shì.", ok:true, why:"Trùng cấu trúc tiếng Việt."}],
ex:[
 ["他的要求很合理，我[不能不]同意。","Tā de yāoqiú hěn hélǐ, wǒ bù néng bù tóngyì.","Yêu cầu của anh ấy hợp lý, tôi không thể không đồng ý."],
 ["车坏了，他[不得不]走路回家。","Chē huài le, tā bùdébù zǒulù huí jiā.","Xe hỏng, anh ấy đành đi bộ về."],
 ["这里[没有]一个地方我[没]去过。","Zhèlǐ méiyǒu yí gè dìfang wǒ méi qùguo.","Ở đây không chỗ nào tôi chưa đến."],
 ["你[不会不]知道吧？","Nǐ bú huì bù zhīdào ba?","Bạn không lẽ lại không biết?"]],
errs:[
 {bad:"下大雨了，我们不得取消活动。（muốn nói buộc phải hủy）", good:"下大雨了，我们不得不取消活动。", why:"不得 = không được phép; 不得不 = buộc phải."},
 {bad:"没有人不知道这件事吗。（muốn khẳng định）", good:"没有人不知道这件事。", why:"Phủ định kép là câu trần thuật khẳng định."},
 {bad:"没有一个人喜欢她不。", good:"没有一个人不喜欢她。", why:"不 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu cùng nghĩa", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"没有人不喜欢她。", vi:"Chọn câu cùng nghĩa.", o:["大家都喜欢她。","没有人喜欢她。","有人不喜欢她。"], a:0, why:"Hai lần phủ định = ai cũng."},
  {q:"我不能不去。", vi:"Chọn câu cùng nghĩa.", o:["我必须去。","我可以不去。","我不想去。"], a:0, why:"不能不 = phải."},
  {q:"Xe hỏng, anh ấy đành đi bộ.", o:["车坏了，他不得不走路。","车坏了，他不得走路。"], a:0, why:"不得不 = đành phải."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["没有","一个人","不","喜欢","她"], a:"没有一个人不喜欢她。", vi:"Không một ai không thích cô ấy."},
  {w:["我","不是","不想去，","是","没时间"], a:"我不是不想去，是没时间。", vi:"Không phải tôi không muốn đi, là không có thời gian."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Không ai không biết chuyện này.", a:"没有人不知道这件事。/ 没有一个人不知道这件事。"},
  {q:"Mưa to, chúng tôi buộc phải hủy hoạt động.", a:"下大雨了，我们不得不取消活动。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"他太忙了，不得不加班。", vi:"Anh ấy bận quá, đành tăng ca.", o:["Đúng","Sai"], a:0, why:"不得不 + V."},
  {q:"这里禁止停车，你不得不停。", vi:"Ở đây cấm đỗ xe, bạn không được đỗ.", o:["Đúng","Sai"], a:1, why:"Cấm → 你不得停车 / 你不能停车。"},
  {q:"没有一个学生没完成作业。", vi:"Không học sinh nào chưa làm xong bài.", o:["Đúng","Sai"], a:0, why:"没有……没…… = tất cả đều đã."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"要想身体好，＿锻炼不可。", vi:"Muốn khỏe thì nhất định phải rèn luyện.", o:["非","不","没"], a:0, why:"非……不可."},
  {q:"这么大的事，你不能＿告诉家里。", vi:"Chuyện lớn thế, bạn không thể không báo gia đình.", o:["不","没","别"], a:0, why:"不能不."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi không thể không đồng ý.", a:"我不能不同意。"},
  {q:"Không phải tôi không muốn đi, là không có thời gian.", a:"我不是不想去，是没时间。/ 我不是不想去，而是没时间。/ 我不是不想去，是没有时间。"}]}],
rel:["一14","三76","新4.65"]
};
