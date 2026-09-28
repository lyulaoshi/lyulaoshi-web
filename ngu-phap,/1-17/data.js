// Bài ngữ pháp 【一17】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一17", title:"介词：跟、和", vi:"Giới từ 跟, 和 — “với, cùng (ai)”", tag:"词类 · 介词 · 引出对象",
goals:[
 "Dùng <b>跟 / 和 + người + động từ</b> để nói làm gì <b>với ai</b>.",
 "Kết hợp với <b>一起</b>: 跟朋友一起去.",
 "Đặt phủ định 不 / 没 <b>trước 跟 / 和</b>."],
intro:"跟 và 和 ở đây là <b>giới từ</b>, dẫn ra người cùng tham gia. Cụm “跟 + người” đứng <b>trước động từ</b>, không đứng cuối câu như “với bạn” trong tiếng Việt.",
rules:[
 {t:"跟 / 和 + người + động từ", sub:"跟¹ · 和¹", fx:[["Chủ ngữ",""],["跟 / 和",null],["Người",""],["(一起)",""],["Động từ",""]], mean:"Làm gì với ai / cùng ai. 跟 dùng nhiều trong khẩu ngữ.",
  ex:[["他[跟]老师请假了。","Tā gēn lǎoshī qǐng jià le.","Anh ấy đã xin phép nghỉ với thầy.","等级标准"],
      ["我没[和]姐姐一起去中国。","Wǒ méi hé jiějie yìqǐ qù Zhōngguó.","Tôi không đi Trung Quốc cùng chị.","等级标准"],
      ["我想[跟]你说一件事。","Wǒ xiǎng gēn nǐ shuō yí jiàn shì.","Tôi muốn nói với bạn một chuyện."]]}],
notes:[
 {t:"Phủ định, năng nguyện", html:"不 / 没 / 想 / 要… đứng <b>trước</b> 跟 / 和: <span class='zh'>我不想跟他去。</span>"},
 {t:"跟, 和 còn là liên từ", html:"nối hai danh từ (“và”) 【一19】: <span class='zh'>我和弟弟</span>."}],
cmp:[
 {vn:"Tôi nói chuyện với anh ấy.", zh:"我[跟他]说话。", py:"Wǒ gēn tā shuō huà.", ok:true, why:"“với anh ấy” chuyển lên trước động từ."},
 {vn:"Tôi đi Bắc Kinh cùng bố mẹ.", zh:"我[跟]爸爸妈妈一起去北京。", py:"Wǒ gēn bàba māma yìqǐ qù Běijīng.", ok:true, why:"跟 + người + 一起 + V."}],
ex:[
 ["我常[跟]朋友一起打球。","Wǒ cháng gēn péngyou yìqǐ dǎ qiú.","Tôi thường chơi bóng với bạn."],
 ["你[和]谁一起去？","Nǐ hé shéi yìqǐ qù?","Bạn đi cùng ai?"],
 ["妈妈[跟]我说：“你好好学习。”","Māma gēn wǒ shuō: “Nǐ hǎohāo xuéxí.”","Mẹ nói với tôi: “Con học cho tốt nhé.”"],
 ["我不想[跟]他去。","Wǒ bù xiǎng gēn tā qù.","Tôi không muốn đi với anh ấy."]],
errs:[
 {bad:"我去中国跟姐姐。", good:"我跟姐姐一起去中国。", why:"跟 + người đứng <b>trước</b> động từ."},
 {bad:"我说话跟他。", good:"我跟他说话。", why:"Cụm giới từ trước động từ."},
 {bad:"我跟他不去。（ý: không đi với anh ấy）", good:"我不跟他去。", why:"Phủ định đặt trước 跟."},
 {bad:"你去一起和谁？", good:"你和谁一起去？", why:"和 + 谁 + 一起 + V."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi nói chuyện với anh ấy.", o:["我说话跟他。","我跟他说话。","跟他我说话。"], a:1, why:"跟 + người + V."},
  {q:"Bạn đi cùng ai?", o:["你和谁一起去？","你去一起和谁？","你一起去和谁？"], a:0, why:"和谁一起 + V."},
  {q:"Tôi không đi Trung Quốc cùng chị.", o:["我和姐姐没一起去中国。","我没和姐姐一起去中国。","我和姐姐一起没去中国。"], a:1, why:"没 + 和 + người."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","跟","老师","请假","了"], a:"他跟老师请假了。", vi:"Anh ấy đã xin phép nghỉ với thầy."},
  {w:["我","常","跟","朋友","一起","打球"], a:"我常跟朋友一起打球。", vi:"Tôi thường chơi bóng với bạn."},
  {w:["我","想","跟","你","说","一件事"], a:"我想跟你说一件事。", vi:"Tôi muốn nói với bạn một chuyện."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Tôi đi Bắc Kinh cùng bố mẹ.", a:"我跟（和）爸爸妈妈一起去北京。"},
  {q:"Tôi không muốn nói chuyện với anh ấy.", a:"我不想跟他说话。"},
  {q:"Bạn học tiếng Trung với ai?", a:"你跟谁学中文？"}]}],
rel:["一19","一10","二25","二59"]
};
