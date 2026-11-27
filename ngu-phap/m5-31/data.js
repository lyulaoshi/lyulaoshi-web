// Bài ngữ pháp 【新5.31】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.31", title:"连动句3：前后动词有因果、转折、条件关系", vi:"Câu liên động 3 — hai động tác có quan hệ nhân quả, trái ý, điều kiện", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng chuỗi động từ chỉ <b>nguyên nhân</b>: 生病住院.",
 "Dùng chuỗi chỉ <b>trái ý</b>: 看见了装没看见.",
 "Dùng chuỗi chỉ <b>điều kiện</b>: 有事找我."],
intro:"Hai cụm động từ cùng một chủ ngữ đặt <b>liền nhau</b>, không cần từ nối. Quan hệ hiểu theo ngữ cảnh.",
rules:[
 {t:"S + V1 (nguyên nhân) + V2", sub:"（1）因果", fx:[["S",""],["V1 (vì)",""],["V2 (nên)",""]], mean:"Vì V1 nên V2.",
  ex:[["{1|他}{2|生病}{3|住院了}。","Tā shēngbìng zhùyuàn le.","Anh ấy bệnh phải nằm viện."],
      ["{1|她}{2|有事}{3|不能来}。","Tā yǒu shì bù néng lái.","Cô ấy có việc nên không đến được."]]},
 {t:"S + V1 + V2 (trái ý)", sub:"（2）转折", fx:[["S",""],["V1",""],["V2 (mà lại)",""]], mean:"V1 mà lại V2.",
  ex:[["{1|他}{2|看见了}{3|装没看见}。","Tā kànjiànle zhuāng méi kànjiàn.","Anh ta thấy mà giả vờ không thấy."]]},
 {t:"(S) + V1 (điều kiện) + V2", sub:"（3）条件", fx:[["S",""],["V1 (nếu)",""],["V2 (thì)",""]], mean:"Có V1 thì V2.",
  ex:[["{1|你}{2|有问题}{3|可以问我}。","Nǐ yǒu wèntí kěyǐ wèn wǒ.","Bạn có thắc mắc thì cứ hỏi tôi."]]}],
cmp:[
 {vn:"Có việc thì gọi cho tôi.", zh:"[有事给我打电话]。", py:"Yǒu shì gěi wǒ dǎ diànhuà.", ok:true, why:"Không cần 如果, 就."}],
ex:[
 ["我[听了这个消息很高兴]。","Wǒ tīngle zhège xiāoxi hěn gāoxìng.","Tôi nghe tin này rất vui."],
 ["他[知道了也不说]。","Tā zhīdàole yě bù shuō.","Anh ấy biết mà không nói."],
 ["你[没票不能进去]。","Nǐ méi piào bù néng jìnqu.","Không có vé thì không được vào."]],
errs:[
 {bad:"他住院生病了。", good:"他生病住院了。", why:"Nguyên nhân đứng trước."},
 {bad:"他看见了装没看见他看见。", good:"他看见了装没看见。", why:"Hai động từ chung một chủ ngữ, không lặp lại."},
 {bad:"有问题，你问可以我。", good:"有问题你可以问我。", why:"能愿动词 đứng trước động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy bệnh phải nằm viện.", o:["他生病住院了。","他住院生病了。"], a:0, why:"Nhân trước, quả sau."},
  {q:"“你没票不能进去” nghĩa là:", vi:"Chọn nghĩa.", o:["Không có vé thì không được vào","Bạn có vé nhưng không vào"], a:0, why:"Quan hệ điều kiện."},
  {q:"他看见了＿没看见。", vi:"Anh ta thấy mà giả vờ không thấy.", o:["装","穿","站"], a:0, why:"装 = giả vờ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","有事","不能","来"], a:"她有事不能来。", vi:"Cô ấy có việc nên không đến được."},
  {w:["你","有问题","可以","问我"], a:"你有问题可以问我。", vi:"Bạn có thắc mắc thì cứ hỏi tôi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy biết mà không nói.", a:"他知道了也不说。/ 他知道也不说。/ 他知道了不说。"},
  {q:"Có việc thì gọi cho tôi.", a:"有事给我打电话。/ 有事就给我打电话。"}]}],
rel:["三56","新4.65","新5.41"]
};
