// Bài ngữ pháp 【新4.34】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.34", title:"怎么都／也＋不／没……", vi:"怎么都不, 怎么也没 — thế nào cũng không …", tag:"短语 · 固定格式",
goals:[
 "Nói <b>dù cố thế nào cũng không</b> được: 怎么都 / 也 + 不 / 没.",
 "Kết hợp bổ ngữ khả năng: 怎么也<b>睡不着</b>.",
 "Chọn 不 (không chịu, không thể) hay 没 (đã không)."],
intro:"怎么 ở đây không phải câu hỏi mà nghĩa là “<b>bằng cách nào đi nữa</b>”.",
rules:[
 {t:"S + 怎么也 / 都 + V + 不 + bổ ngữ", sub:"（1）không thể", fx:[["S",""],["怎么也",null],["V不 + bổ ngữ",""]], mean:"Làm thế nào cũng không … được.",
  ex:[["{1|我}{2|怎么也}{3|睡不着}。","Wǒ zěnme yě shuì bu zháo.","Tôi thế nào cũng không ngủ được."]]},
 {t:"S + 怎么都 / 也 + 不 + V", sub:"（2）không chịu", fx:[["S",""],["怎么都",null],["不 + V",""]], mean:"Nói gì cũng không chịu.",
  ex:[["{1|孩子}{2|怎么都}{3|不肯吃药}。","Háizi zěnme dōu bù kěn chī yào.","Đứa bé thế nào cũng không chịu uống thuốc."]]},
 {t:"S + 怎么都 / 也 + 没 + V", sub:"（3）đã không", fx:[["S",""],["怎么也",null],["没 + V",""]], mean:"Đã cố mà vẫn không.",
  ex:[["{1|我}{2|怎么也}{3|没想到}是他。","Wǒ zěnme yě méi xiǎngdào shì tā.","Tôi không thể ngờ là anh ấy."]]}],
cmp:[
 {vn:"Chữ này tôi nghĩ mãi không ra.", zh:"这个字我[怎么也]想不起来。", py:"Zhège zì wǒ zěnme yě xiǎng bu qǐlái.", ok:true, why:"“mãi không” → 怎么也 + V不…."}],
ex:[
 ["门[怎么也]打不开。","Mén zěnme yě dǎ bu kāi.","Cửa làm thế nào cũng không mở được."],
 ["我[怎么都]找不到我的钥匙。","Wǒ zěnme dōu zhǎo bu dào wǒ de yàoshi.","Tôi tìm thế nào cũng không thấy chìa khóa."],
 ["我劝了他半天，他[怎么也]不听。","Wǒ quànle tā bàntiān, tā zěnme yě bù tīng.","Tôi khuyên cả buổi, anh ấy vẫn không nghe."]],
errs:[
 {bad:"我睡不着怎么也。", good:"我怎么也睡不着。", why:"怎么也 đứng trước động từ."},
 {bad:"我怎么也不能睡着了觉。", good:"我怎么也睡不着。", why:"Dùng bổ ngữ khả năng 睡不着."},
 {bad:"我怎么不都想起来。", good:"我怎么都想不起来。", why:"怎么都 đi liền, phủ định nằm trong bổ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi thế nào cũng không ngủ được.", o:["我怎么也睡不着。","我睡不着怎么也。","我怎么睡不着也。"], a:0, why:"怎么也 + V不…."},
  {q:"Đứa bé thế nào cũng không chịu uống thuốc.", o:["孩子怎么都不肯吃药。","孩子不怎么肯吃药。"], a:0, why:"不怎么 = không … lắm, nghĩa khác."},
  {q:"我怎么也＿想到是他。", vi:"Tôi không ngờ là anh ấy.", o:["没","别","吗"], a:0, why:"Đã qua → 没想到."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["门","怎么也","打","不开"], a:"门怎么也打不开。", vi:"Cửa làm thế nào cũng không mở được."},
  {w:["这个字","我","怎么都","想","不起来"], a:"这个字我怎么都想不起来。", alt:["我怎么都想不起来这个字。"], vi:"Chữ này tôi nghĩ mãi không ra."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi tìm thế nào cũng không thấy chìa khóa.", a:"我怎么都找不到我的钥匙。/ 我怎么也找不到我的钥匙。/ 我怎么也找不到钥匙。/ 我怎么都找不到钥匙。"}]}],
rel:["三07","三48","新4.27"]
};
