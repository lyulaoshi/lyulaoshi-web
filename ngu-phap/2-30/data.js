// Bài ngữ pháp 【二30】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二30", title:"连词：不过、但、但是、而且、那、如果、虽然、只要", vi:"Liên từ nối vế câu — nhưng, mà còn, vậy thì, nếu, tuy, chỉ cần", tag:"词类 · 连词",
goals:[
 "Nhận biết 8 liên từ nối vế câu HSK 2 và nghĩa của chúng.",
 "Dùng <b>但（是）/ 不过</b> (nhưng), <b>而且</b> (mà còn), <b>那</b> (vậy thì).",
 "Biết các cặp đi kèm: <b>虽然……但是</b>, <b>如果……就</b>, <b>只要……就</b>."],
intro:"Đây là “bản đồ” các liên từ; cách dùng chi tiết trong từng loại câu ghép: 递进 【二63】, 转折 【二65】, 假设 【二66】, 条件 【二67】.",
rules:[
 {t:"Chuyển ý: 但、但是、不过", sub:"转折", fx:[["Vế 1",""],["，但(是) / 不过",null],["Vế 2",""]], mean:"nhưng; 不过 nhẹ nhàng, khẩu ngữ hơn.",
  ex:[["现在已经是冬天了，[但]北京还不太冷。","Xiànzài yǐjīng shì dōngtiān le, dàn Běijīng hái bú tài lěng.","Bây giờ đã là mùa đông, nhưng Bắc Kinh vẫn chưa lạnh lắm.","等级标准"]]},
 {t:"Tăng tiến: 而且", sub:"递进", fx:[["(不但) Vế 1",""],["，而且",null],["Vế 2",""]], mean:"mà còn, hơn nữa.",
  ex:[["她会说中文，[而且]说得很好。","Tā huì shuō Zhōngwén, érqiě shuō de hěn hǎo.","Cô ấy biết nói tiếng Trung, mà còn nói rất giỏi."]]},
 {t:"那: vậy thì", sub:"那", fx:[["(Nghe người khác nói)",""],["，那",null],["Vế sau",""]], mean:"Rút ra kết luận từ câu trước.",
  ex:[["你不去，[那]我就一个人去。","Nǐ bú qù, nà wǒ jiù yí ge rén qù.","Bạn không đi thì tôi đi một mình vậy.","等级标准"]]},
 {t:"如果 · 虽然 · 只要", sub:"假设 · 让步 · 条件", fx:[["如果 / 虽然 / 只要",null],["Vế 1",""],["，就 / 但是",null],["Vế 2",""]], mean:"如果 nếu · 虽然 tuy · 只要 chỉ cần — luôn có từ hô ứng ở vế sau.",
  ex:[["[如果]明天下雨，我们[就]不去了。","Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù le.","Nếu mai mưa thì chúng ta không đi nữa."],
      ["[虽然]很累，[但是]我很高兴。","Suīrán hěn lèi, dànshì wǒ hěn gāoxìng.","Tuy rất mệt nhưng tôi rất vui."],
      ["[只要]你愿意，[就]可以来。","Zhǐyào nǐ yuànyì, jiù kěyǐ lái.","Chỉ cần bạn muốn là có thể đến."]]}],
cmp:[
 {vn:"Tuy mệt nhưng vui.", zh:"[虽然]累，[但是]很高兴。", py:"Suīrán lèi, dànshì hěn gāoxìng.", ok:true, why:"Giống tiếng Việt: hai vế đều có liên từ."},
 {vn:"Nếu … thì …", zh:"[如果]……，（S）[就]……", py:"rúguǒ……, jiù……", ok:true, why:"“thì” = 就 đứng sau chủ ngữ vế sau."}],
ex:[
 ["这件衣服很好看，[不过]有点儿贵。","Zhè jiàn yīfu hěn hǎokàn, búguò yǒudiǎnr guì.","Cái áo này đẹp, có điều hơi đắt."],
 ["这个饭馆很便宜，[而且]很好吃。","Zhège fànguǎn hěn piányi, érqiě hěn hǎochī.","Quán này rẻ, mà còn ngon."],
 ["——我今天很忙。——[那]我们明天见吧。","—— Wǒ jīntiān hěn máng. —— Nà wǒmen míngtiān jiàn ba.","— Hôm nay tôi bận lắm. — Vậy mai mình gặp nhé."]],
errs:[
 {bad:"虽然很累，我很高兴。", good:"虽然很累，但是我很高兴。", why:"虽然 thường đi với 但是 / 可是."},
 {bad:"如果明天下雨，就我们不去。", good:"如果明天下雨，我们就不去。", why:"就 sau chủ ngữ."},
 {bad:"她会说中文，和说得很好。", good:"她会说中文，而且说得很好。", why:"Nối hai vế dùng 而且, không dùng 和."}],
practice:[
 {t:"A. Chọn liên từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"这个菜很好吃，＿＿有点儿辣。", vi:"Món này rất ngon, ＿＿ hơi cay.", o:["不过","而且","只要"], a:0, why:"Chuyển ý."},
  {q:"他会唱歌，＿＿唱得很好。", vi:"Anh ấy biết hát, ＿＿ hát rất hay.", o:["但是","而且","那"], a:1, why:"Tăng tiến."},
  {q:"＿＿你努力，就能学好。", vi:"＿＿ bạn cố gắng là sẽ học giỏi.", o:["虽然","只要","那"], a:1, why:"Điều kiện."},
  {q:"——我不想去。——＿＿我们在家吧。", vi:"— Tôi không muốn đi. — ＿＿ chúng ta ở nhà nhé.", o:["那","但是","如果"], a:0, why:"Vậy thì."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["虽然","很累","但是","我","很高兴"], a:"虽然很累，但是我很高兴。", vi:"Tuy rất mệt nhưng tôi rất vui."},
  {w:["你","不去","那","我","就","一个人","去"], a:"你不去，那我就一个人去。", vi:"Bạn không đi thì tôi đi một mình vậy."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Quán này rẻ mà còn ngon.", a:"这个饭馆很便宜，而且很好吃。"},
  {q:"Cái áo này đẹp, có điều hơi đắt.", a:"这件衣服很好看，不过有点儿贵。"}]}],
rel:["二63","二65","二66","二67"]
};
