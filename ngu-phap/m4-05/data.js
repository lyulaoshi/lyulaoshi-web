// Bài ngữ pháp 【新4.05】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.05", title:"程度副词：十分、更加、稍、稍微、尤其、多么", vi:"Phó từ mức độ — rất, càng, hơi, nhất là, biết bao", tag:"词类 · 副词",
goals:[
 "Dùng <b>稍 / 稍微 + V / Adj + 一点儿 / 一下儿</b>: hơi, một chút.",
 "Dùng <b>尤其</b>: nhất là.",
 "Ôn <b>十分、更加、多么</b>."],
intro:"稍微 luôn cần “cái đuôi” chỉ lượng: 稍微<b>等一下儿</b>, 稍微贵<b>一点儿</b>.",
rules:[
 {t:"稍 / 稍微 + V / Adj + 一下 / 一点儿", sub:"（1）", fx:[["稍 / 稍微",null],["V / Adj",""],["一下儿 / 一点儿",""]], mean:"Một chút, hơi.",
  ex:[["请{1|稍}{2|等}{3|一下儿}。","Qǐng shāo děng yíxiàr.","Xin đợi một chút."],
      ["这件{1|稍微}{2|大}了{3|一点儿}。","Zhè jiàn shāowēi dàle yìdiǎnr.","Cái này hơi rộng một chút."]]},
 {t:"…，尤其(是) + trường hợp nổi bật", sub:"（2）尤其", fx:[["ý chung",""],["，",""],["尤其是",null],["trường hợp nổi bật",""]], mean:"Nhất là.",
  ex:[["{1|我喜欢运动}，{2|尤其是}{3|游泳}。","Wǒ xǐhuan yùndòng, yóuqí shì yóuyǒng.","Tôi thích thể thao, nhất là bơi."]]},
 {t:"十分 / 更加 / 多么 + Adj", sub:"（3）", fx:[["十分 / 更加 / 多么",null],["Adj / V",""]], mean:"十分 rất · 更加 càng thêm · 多么 … biết bao.",
  ex:[["大家{1|十分}{2|高兴}。","Dàjiā shífēn gāoxìng.","Mọi người rất vui."],
      ["春天来了，公园{1|更加}{2|漂亮}了。","Chūntiān lái le, gōngyuán gèngjiā piàoliang le.","Xuân về, công viên càng đẹp."],
      ["这是{1|多么}{2|好}的机会啊！","Zhè shì duōme hǎo de jīhuì a!","Đây là cơ hội tốt biết bao!"]]}],
cmp:[
 {vn:"Nói chậm hơn một chút.", zh:"请[稍微]说慢一点儿。", py:"Qǐng shāowēi shuō màn yìdiǎnr.", ok:true, why:"稍微 + … + 一点儿."}],
ex:[
 ["你[稍微]休息一下儿吧。","Nǐ shāowēi xiūxi yíxiàr ba.","Bạn nghỉ một lát đi."],
 ["这里的水果很好吃，[尤其]是西瓜。","Zhèlǐ de shuǐguǒ hěn hǎochī, yóuqí shì xīguā.","Hoa quả ở đây ngon, nhất là dưa hấu."],
 ["他对这个结果[十分]满意。","Tā duì zhège jiéguǒ shífēn mǎnyì.","Anh ấy rất hài lòng với kết quả này."]],
errs:[
 {bad:"这件衣服稍微大。", good:"这件衣服稍微大了一点儿。", why:"稍微 cần 一点儿 / 一下儿."},
 {bad:"他十分很高兴。", good:"他十分高兴。", why:"Không dùng hai phó từ mức độ."},
 {bad:"尤其我喜欢游泳是。", good:"尤其是游泳，我很喜欢。/ 我尤其喜欢游泳。", why:"尤其 đứng trước phần nổi bật."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"请＿等一下儿。", vi:"Xin đợi một chút.", o:["稍","尤其","多么"], a:0, why:"稍等一下."},
  {q:"他喜欢看书，＿是历史书。", vi:"Anh ấy thích đọc sách, nhất là sách lịch sử.", o:["尤其","稍微","更加"], a:0, why:"尤其是."},
  {q:"这是＿美丽的地方啊！", vi:"Đây là nơi đẹp biết bao!", o:["多么","稍微","尤其"], a:0, why:"Cảm thán → 多么."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这件","稍微","大了","一点儿"], a:"这件稍微大了一点儿。", vi:"Cái này hơi rộng một chút."},
  {w:["大家","对这个结果","十分","满意"], a:"大家对这个结果十分满意。", vi:"Mọi người rất hài lòng với kết quả này."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi thích thể thao, nhất là bơi.", a:"我喜欢运动，尤其是游泳。/ 我喜欢运动，尤其喜欢游泳。"}]}],
rel:["三12","二13","新5.05"]
};
