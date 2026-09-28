// Bài ngữ pháp 【三17】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三17", title:"方式副词：互相、尽量、亲自、相互", vi:"Phó từ cách thức 互相, 尽量, 亲自 — lẫn nhau, cố hết sức, đích thân", tag:"词类 · 副词",
goals:[
 "Dùng <b>互相 / 相互</b> (lẫn nhau) trước động từ.",
 "Dùng <b>尽量</b> (cố gắng hết mức).",
 "Dùng <b>亲自</b> (đích thân, tự mình)."],
intro:"Phó từ cách thức cho biết hành động được làm <b>như thế nào</b>, đứng trước động từ.",
rules:[
 {t:"互相 / 相互 + V", sub:"lẫn nhau", fx:[["Chủ ngữ số nhiều",""],["互相 / 相互",null],["Động từ",""]], mean:"",
  ex:[["大家要[互相]帮助。","Dàjiā yào hùxiāng bāngzhù.","Mọi người phải giúp đỡ lẫn nhau.","等级标准"],
      ["我们要[相互]关心，[相互]照顾。","Wǒmen yào xiānghù guānxīn, xiānghù zhàogù.","Chúng ta phải quan tâm, chăm sóc lẫn nhau.","等级标准"]]},
 {t:"尽量 · 亲自 + V", sub:"cách làm", fx:[["尽量 / 亲自",null],["Động từ",""]], mean:"尽量 cố hết mức có thể · 亲自 đích thân.",
  ex:[["志愿者要[尽量]自己克服困难。","Zhìyuànzhě yào jǐnliàng zìjǐ kèfú kùnnan.","Tình nguyện viên phải cố gắng tự khắc phục khó khăn.","等级标准"],
      ["校长[亲自]联系学生实习的公司。","Xiàozhǎng qīnzì liánxì xuésheng shíxí de gōngsī.","Hiệu trưởng đích thân liên hệ công ty cho sinh viên thực tập.","等级标准"]]}],
cmp:[
 {vn:"Chúng ta giúp đỡ lẫn nhau.", zh:"我们[互相]帮助。", py:"Wǒmen hùxiāng bāngzhù.", ok:true, why:"“lẫn nhau” cuối câu → 互相 trước động từ."}],
ex:[
 ["我会[尽量]早点儿来。","Wǒ huì jǐnliàng zǎo diǎnr lái.","Tôi sẽ cố đến sớm một chút."],
 ["这件事我要[亲自]去做。","Zhè jiàn shì wǒ yào qīnzì qù zuò.","Việc này tôi phải đích thân đi làm."],
 ["同学们[互相]学习。","Tóngxuémen hùxiāng xuéxí.","Các bạn học hỏi lẫn nhau."]],
errs:[
 {bad:"我们帮助互相。", good:"我们互相帮助。", why:"互相 đứng trước động từ."},
 {bad:"我互相帮助他。", good:"我们互相帮助。/ 我帮助他。", why:"互相 cần chủ ngữ số nhiều, không có tân ngữ riêng."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Mọi người phải giúp đỡ lẫn nhau.", o:["大家要帮助互相。","大家要互相帮助。","互相大家要帮助。"], a:1, why:"互相 + V."},
  {q:"Tôi sẽ cố đến sớm.", o:["我会尽量早点儿来。","我会早点儿来尽量。"], a:0, why:"尽量 + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["校长","亲自","联系","公司"], a:"校长亲自联系公司。", vi:"Hiệu trưởng đích thân liên hệ công ty."},
  {w:["同学们","互相","学习"], a:"同学们互相学习。", vi:"Các bạn học hỏi lẫn nhau."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Việc này tôi phải đích thân làm.", a:"这件事我要亲自做。/ 这件事我要亲自去做。"},
  {q:"Chúng ta quan tâm lẫn nhau.", a:"我们互相关心。/ 我们相互关心。"}]}],
rel:["一28","三12","二18","二06"]
};
