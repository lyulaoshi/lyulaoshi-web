// Bài ngữ pháp 【新4.26】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.26", title:"说不定", vi:"说不定 — biết đâu, có khi", tag:"短语 · 固定短语",
goals:[
 "Dùng <b>说不定</b> để đoán một khả năng: biết đâu, có khi.",
 "Đặt 说不定 trước chủ ngữ hoặc trước động từ.",
 "Phân biệt với 一定 (chắc chắn)."],
intro:"说不定 = “<b>nói chưa chắc được</b>” → biết đâu, có khi là. Thường dùng trong khẩu ngữ để đưa ra phỏng đoán.",
rules:[
 {t:"说不定 + S + V / S + 说不定 + V", sub:"推测", fx:[["S",""],["说不定",null],["V / Adj",""]], mean:"Có khả năng, nhưng không chắc.",
  ex:[["{1|他}{2|说不定}{3|已经回家了}。","Tā shuōbudìng yǐjīng huí jiā le.","Có khi anh ấy về nhà rồi."],
      ["带上伞吧，{2|说不定}{1|下午}{3|会下雨}。","Dàishang sǎn ba, shuōbudìng xiàwǔ huì xià yǔ.","Mang ô theo đi, biết đâu chiều mưa."]]}],
notes:[{t:"Đứng một mình làm câu trả lời", html:"<span class='zh'>“他会来吗？”“说不定。”</span> = cũng chưa biết được."}],
cmp:[
 {vn:"Bạn thử xem, biết đâu thành công.", zh:"你试试看，[说不定]能成功。", py:"Nǐ shìshi kàn, shuōbudìng néng chénggōng.", ok:true, why:"Vị trí giống “biết đâu” trong tiếng Việt."}],
ex:[
 ["你问问老师，老师[说不定]知道。","Nǐ wènwen lǎoshī, lǎoshī shuōbudìng zhīdào.","Bạn hỏi thầy xem, có khi thầy biết."],
 ["[说不定]我明年去中国留学。","Shuōbudìng wǒ míngnián qù Zhōngguó liúxué.","Biết đâu sang năm tôi đi Trung Quốc du học."],
 ["快给他打个电话，他[说不定]还在等你呢。","Kuài gěi tā dǎ gè diànhuà, tā shuōbudìng hái zài děng nǐ ne.","Mau gọi cho anh ấy, có khi anh ấy còn đang đợi bạn đấy."]],
errs:[
 {bad:"他说不定一定来。", good:"他说不定会来。/ 他一定会来。", why:"说不定 (không chắc) và 一定 (chắc chắn) trái nghĩa, không dùng cùng."},
 {bad:"他会来说不定。", good:"他说不定会来。", why:"Đặt trước động từ, không để cuối câu."},
 {bad:"说不定他会来吗？", good:"他会不会来？/ 说不定他会来。", why:"说不定 là phỏng đoán, không dùng trong câu hỏi 吗."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Có khi anh ấy về nhà rồi.", o:["他说不定已经回家了。","他已经回家说不定了。"], a:0, why:"S + 说不定 + V."},
  {q:"Biết đâu chiều nay mưa.", o:["下午说不定会下雨。","下午一定说不定下雨。"], a:0, why:"Không dùng cùng 一定."},
  {q:"“他会来吗？”“＿。”(cũng chưa biết được)", vi:"“Anh ấy có đến không?” “Chưa biết được.”", o:["说不定","来不及","不怎么"], a:0, why:"说不定 đứng một mình làm câu trả lời."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["你","试试看，","说不定","能","成功"], a:"你试试看，说不定能成功。", vi:"Bạn thử xem, biết đâu thành công."},
  {w:["老师","说不定","知道","这件事"], a:"老师说不定知道这件事。", alt:["说不定老师知道这件事。"], vi:"Có khi thầy biết chuyện này."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 说不定)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Có khi anh ấy về nhà rồi.", a:"他说不定已经回家了。/ 说不定他已经回家了。"},
  {q:"Biết đâu sang năm tôi đi Trung Quốc du học.", a:"说不定我明年去中国留学。/ 我明年说不定去中国留学。/ 说不定我明年会去中国留学。"}]}],
rel:["二19","三18","三35"]
};
