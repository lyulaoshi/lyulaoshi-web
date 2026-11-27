// Bài ngữ pháp 【新4.20】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.20", title:"助词：等、上、者、之、就是", vi:"Trợ từ 等, 者, 之, 上, 就是", tag:"词类 · 助词",
goals:[
 "Dùng <b>等</b> kết thúc phần liệt kê; <b>者</b> chỉ người làm gì.",
 "Dùng <b>之</b> trong 之一, 之间; <b>上</b> trong 事实上, 基本上.",
 "Dùng <b>就是</b> cuối câu để trấn an, dặn dò."],
intro:"Các trợ từ này phần lớn là <b>văn viết</b>, đi thành cụm cố định nên học theo cụm.",
rules:[
 {t:"A、B + 等 (+ danh từ chung)", sub:"（1）等", fx:[["A、B",""],["等",null],["danh từ chung",""]], mean:"… vân vân.",
  ex:[["我去过{1|北京、上海}{2|等}{3|城市}。","Wǒ qùguo Běijīng, Shànghǎi děng chéngshì.","Tôi từng đến các thành phố như Bắc Kinh, Thượng Hải."]]},
 {t:"V / Adj + 者", sub:"（2）者", fx:[["V / Adj",""],["者",null]], mean:"Người … (如 学习者, 爱好者, 志愿者).",
  ex:[["他是一个足球{1|爱好}{2|者}。","Tā shì yí gè zúqiú àihàozhě.","Anh ấy là người mê bóng đá."]]},
 {t:"N + 之 + 一 / 间 / 前 / 后", sub:"（3）之", fx:[["N",""],["之",null],["一 / 间 / 后",""]], mean:"之 gần nghĩa 的 trong văn cổ.",
  ex:[["长城是中国的{1|名胜}{2|之}{3|一}。","Chángchéng shì Zhōngguó de míngshèng zhī yī.","Trường Thành là một trong những danh thắng Trung Quốc."],
      ["{1|朋友}{2|之}{3|间}要互相帮助。","Péngyou zhījiān yào hùxiāng bāngzhù.","Giữa bạn bè phải giúp nhau."]]},
 {t:"事实 / 基本 + 上", sub:"（4）上", fx:[["事实 / 基本 / 实际",""],["上",null],["，",""],["nhận định",""]], mean:"Trên thực tế, về cơ bản.",
  ex:[["{1|事实}{2|上}，{3|他并不知道}。","Shìshí shang, tā bìng bù zhīdào.","Trên thực tế anh ấy không hề biết."]]},
 {t:"câu + 就是", sub:"（5）就是", fx:[["câu dặn dò",""],["就是",null]], mean:"Cứ … là được (như 就是了).",
  ex:[["{1|你放心}{2|就是}。","Nǐ fàngxīn jiùshì.","Bạn cứ yên tâm."]]}],
cmp:[
 {vn:"Một trong những người bạn tốt nhất của tôi", zh:"我最好的朋友[之]一", py:"wǒ zuì hǎo de péngyou zhī yī", ok:true, why:"“một trong” → 之一, đặt cuối cụm."}],
ex:[
 ["超市卖水果、牛奶[等]。","Chāoshì mài shuǐguǒ, niúnǎi děng.","Siêu thị bán hoa quả, sữa v.v."],
 ["报名[者]超过了一百人。","Bàomíngzhě chāoguòle yìbǎi rén.","Người đăng ký đã hơn 100."],
 ["这个工作基本[上]完成了。","Zhège gōngzuò jīběn shang wánchéng le.","Công việc này về cơ bản đã xong."]],
errs:[
 {bad:"之一我的朋友", good:"我的朋友之一", why:"之一 đứng sau danh từ."},
 {bad:"他是一个爱好足球者的。", good:"他是一个足球爱好者。", why:"者 đứng cuối, tạo danh từ chỉ người."},
 {bad:"事实里，他不知道。", good:"事实上，他不知道。", why:"Cụm cố định 事实上."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他是我们班最高的学生＿一。", vi:"Em ấy là một trong những người cao nhất lớp.", o:["之","的","者"], a:0, why:"之一."},
  {q:"公园里有很多音乐爱好＿。", vi:"Công viên có nhiều người yêu nhạc.", o:["者","之","等"], a:0, why:"爱好者."},
  {q:"我喜欢游泳、跑步＿运动。", vi:"Tôi thích các môn như bơi, chạy.", o:["等","者","上"], a:0, why:"A、B 等."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["朋友","之间","要","互相","帮助"], a:"朋友之间要互相帮助。", vi:"Giữa bạn bè phải giúp nhau."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Trên thực tế anh ấy không hề biết.", a:"事实上，他并不知道。/ 实际上，他并不知道。"}]}],
rel:["二35","新4.40","新5.18"]
};
