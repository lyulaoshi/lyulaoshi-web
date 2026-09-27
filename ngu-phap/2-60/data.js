// Bài ngữ pháp 【二60】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二60", title:"“是……的”句1", vi:"Câu “是……的” 1 — nhấn mạnh thời gian, nơi chốn, cách thức, người làm", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng <b>是 + (thời gian / nơi chốn / cách thức / người làm) + V + 的</b> để nhấn mạnh chi tiết của việc <b>đã xảy ra</b>.",
 "Biết 是 có thể lược, còn 的 thì không.",
 "Phủ định bằng <b>不是……的</b>."],
intro:"Khi mọi người đã biết việc đã xảy ra, và ta muốn nói rõ <b>khi nào, ở đâu, bằng cách nào, ai làm</b>, dùng khung 是……的. Phần được nhấn mạnh đứng ngay sau 是.",
rules:[
 {t:"S + 是 + chi tiết cần nhấn mạnh + V + 的", sub:"强调时间、地点、方式、动作者", fx:[["Chủ ngữ",""],["(是)",null],["thời gian / nơi chốn / cách thức / người làm",""],["Động từ",""],["的",null]], mean:"",
  ex:[["我[是]昨天到北京[的]。","Wǒ shì zuótiān dào Běijīng de.","Tôi đến Bắc Kinh (là) hôm qua.","等级标准"],
      ["他[是]在网上买[的]手机。","Tā shì zài wǎngshang mǎi de shǒujī.","Anh ấy mua điện thoại (là) trên mạng.","等级标准"],
      ["我们[是]坐飞机来[的]。","Wǒmen shì zuò fēijī lái de.","Chúng tôi đến (là) bằng máy bay.","等级标准"],
      ["这件事[是]老师告诉我[的]。","Zhè jiàn shì shì lǎoshī gàosu wǒ de.","Chuyện này (là) thầy giáo nói cho tôi.","等级标准"]]}],
notes:[
 {t:"Phủ định", html:"<span class='zh'>我不是昨天到的，是前天到的。</span>"},
 {t:"Chỉ dùng cho việc đã xảy ra", html:"✗ <span class='zh'>我是明天去的。</span>"}],
cmp:[
 {vn:"Bạn đến lúc nào? — Tôi đến hôm qua.", zh:"你[是]什么时候来[的]？——我是昨天来的。", py:"Nǐ shì shénme shíhou lái de? —— Wǒ shì zuótiān lái de.", ok:true, why:"Việc “đến” đã biết; hỏi / nhấn mạnh thời gian → 是……的."}],
ex:[
 ["你[是]怎么来[的]？——我[是]坐地铁来[的]。","Nǐ shì zěnme lái de? —— Wǒ shì zuò dìtiě lái de.","Bạn đến bằng gì? — Tôi đi tàu điện ngầm đến."],
 ["你[是]在哪儿学[的]中文？","Nǐ shì zài nǎr xué de Zhōngwén?","Bạn học tiếng Trung ở đâu?"],
 ["这个菜[是]我妈妈做[的]。","Zhège cài shì wǒ māma zuò de.","Món này là mẹ tôi nấu."]],
errs:[
 {bad:"我是昨天到北京。", good:"我是昨天到北京的。", why:"Phải có 的."},
 {bad:"我是明天去的。", good:"我明天去。", why:"是……的 chỉ dùng cho việc đã xảy ra."},
 {bad:"我没是坐飞机来的。", good:"我不是坐飞机来的。", why:"Phủ định dùng 不是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi đến bằng máy bay.", o:["我是坐飞机来的。","我是坐飞机来。","我坐飞机是来的。"], a:0, why:"是 + cách thức + V + 的."},
  {q:"Bạn đến lúc nào?", o:["你是什么时候来的？","你什么时候是来？","你是来什么时候的？"], a:0, why:"是 + thời gian + V + 的."},
  {q:"Tôi không đến hôm qua.", o:["我没是昨天来的。","我不是昨天来的。","我是不昨天来的。"], a:1, why:"不是……的."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","是","昨天","到","北京","的"], a:"我是昨天到北京的。", vi:"Tôi đến Bắc Kinh hôm qua."},
  {w:["这件事","是","老师","告诉","我","的"], a:"这件事是老师告诉我的。", vi:"Chuyện này là thầy giáo nói cho tôi."}]},
 {t:"C. Đặt câu hỏi với 是……的", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"(hỏi thời gian) 你来中国", a:"你是什么时候来中国的？"},
  {q:"(hỏi cách thức) 你来学校", a:"你是怎么来学校的？"},
  {q:"(hỏi nơi chốn) 你买衣服", a:"你（的衣服）是在哪儿买的？"}]}],
rel:["二34","三77","一36","二74"]
};
