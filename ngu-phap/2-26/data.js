// Bài ngữ pháp 【二26】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二26", title:"介词：给", vi:"Giới từ 给 — “cho, gửi cho” (người nhận)", tag:"词类 · 介词 · 引出对象",
goals:[
 "Dùng <b>给 + người + động từ</b>: 给妈妈打电话 (gọi điện cho mẹ).",
 "Sửa trật tự tiếng Việt “gọi điện <b>cho mẹ</b>” → 给妈妈打电话.",
 "Phân biệt 给 giới từ với 给 động từ (cho, đưa)."],
intro:"给 giới từ dẫn ra <b>người nhận / người được hưởng</b> hành động. Cụm “给 + người” đứng <b>trước động từ</b>.",
rules:[
 {t:"给 + người + động từ (+ tân ngữ)", sub:"给", fx:[["Chủ ngữ",""],["给",null],["Người",""],["Động từ + tân ngữ",""]], mean:"Làm gì cho ai: gọi điện, viết thư, mua quà, gửi tin nhắn…",
  ex:[["我晚上要[给]女朋友打电话。","Wǒ wǎnshang yào gěi nǚpéngyou dǎ diànhuà.","Tối nay tôi phải gọi điện cho bạn gái.","等级标准"],
      ["她后天过生日，我们[给]她送什么礼物呢？","Tā hòutiān guò shēngrì, wǒmen gěi tā sòng shénme lǐwù ne?","Ngày kia là sinh nhật cô ấy, chúng ta tặng cô ấy quà gì nhỉ?","等级标准"]]}],
notes:[
 {t:"给 động từ", html:"<span class='zh'>妈妈给我一本书。</span> = Mẹ cho tôi một quyển sách (câu hai tân ngữ 【二61】)."},
 {t:"Phủ định, năng nguyện", html:"đứng trước 给: <span class='zh'>我没给他打电话。我想给你买一件衣服。</span>"}],
cmp:[
 {vn:"Tôi gọi điện cho mẹ.", zh:"我[给妈妈]打电话。", py:"Wǒ gěi māma dǎ diànhuà.", ok:true, why:"“cho mẹ” lên trước động từ."},
 {vn:"Tôi mua quà cho bạn.", zh:"我[给你]买礼物。", py:"Wǒ gěi nǐ mǎi lǐwù.", ok:true, why:"给 + người + mua."}],
ex:[
 ["我[给]你介绍一下儿。","Wǒ gěi nǐ jièshào yíxiàr.","Để tôi giới thiệu với bạn một chút."],
 ["他[给]我发了一个短信。","Tā gěi wǒ fā le yí ge duǎnxìn.","Anh ấy gửi cho tôi một tin nhắn."],
 ["妈妈[给]我做了很多好吃的。","Māma gěi wǒ zuò le hěn duō hǎochī de.","Mẹ nấu cho tôi nhiều món ngon."],
 ["我还没[给]他回电话。","Wǒ hái méi gěi tā huí diànhuà.","Tôi vẫn chưa gọi lại cho anh ấy."]],
errs:[
 {bad:"我打电话妈妈。", good:"我给妈妈打电话。", why:"“gọi điện cho mẹ” cần 给 dẫn ra người nhận; 打电话 không mang tân ngữ chỉ người."},
 {bad:"我买礼物给你。", good:"我给你买礼物。", why:"Cụm 给 trước động từ."},
 {bad:"我给他没打电话。", good:"我没给他打电话。", why:"没 đứng trước 给."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi gọi điện cho mẹ.", o:["我给妈妈打电话。","我打电话妈妈给。","给我妈妈打电话。"], a:0, why:"给 + người + V."},
  {q:"Tôi không gọi cho anh ấy.", o:["我给他没打电话。","我没给他打电话。","我给他打电话没。"], a:1, why:"没 + 给."},
  {q:"Mẹ nấu cho tôi món ngon.", o:["妈妈做好吃的给我。","妈妈给我做好吃的。","妈妈做给我好吃的了。"], a:1, why:"给 + người + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","晚上","要","给","女朋友","打电话"], a:"我晚上要给女朋友打电话。", vi:"Tối nay tôi phải gọi điện cho bạn gái."},
  {w:["我","给","你","介绍","一下儿"], a:"我给你介绍一下儿。", vi:"Để tôi giới thiệu với bạn một chút."},
  {w:["我们","给","她","送","什么","礼物"], a:"我们给她送什么礼物？", vi:"Chúng ta tặng cô ấy quà gì?"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Anh ấy gửi cho tôi một tin nhắn.", a:"他给我发了一个短信。"},
  {q:"Tôi muốn mua cho mẹ một chiếc áo.", a:"我想给妈妈买一件衣服。"}]}],
rel:["二61","二25","一17","二28"]
};
