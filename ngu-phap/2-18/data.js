// Bài ngữ pháp 【二18】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二18", title:"方式副词：故意", vi:"Phó từ cách thức 故意 — cố ý, cố tình", tag:"词类 · 副词",
goals:[
 "Dùng <b>故意 + động từ</b> (cố ý làm).",
 "Dùng <b>不是故意的 / 不是故意 + V</b> để xin lỗi (không cố ý).",
 "Đặt 故意 trước động từ, sau chủ ngữ."],
intro:"故意 nói hành động được làm <b>có chủ đích</b>. Rất hay gặp trong câu xin lỗi: <b>我不是故意的</b>.",
rules:[
 {t:"故意 + V", sub:"故意", fx:[["Chủ ngữ",""],["故意",null],["Động từ",""]], mean:"Cố ý, cố tình làm.",
  ex:[["说话的时候，他[故意]提高声音，这样大家都能听见。","Shuō huà de shíhou, tā gùyì tígāo shēngyīn, zhèyàng dàjiā dōu néng tīngjiàn.","Khi nói, anh ấy cố ý nói to lên để mọi người đều nghe thấy.","等级标准"]]},
 {t:"不是故意 + V / 不是故意的", sub:"否定", fx:[["Chủ ngữ",""],["不是故意",null],["V / 的",""]], mean:"Không cố ý (xin lỗi).",
  ex:[["我[不是故意]弄坏电脑的。","Wǒ bú shì gùyì nònghuài diànnǎo de.","Tôi không cố ý làm hỏng máy tính.","等级标准"],
      ["对不起，我[不是故意的]。","Duìbuqǐ, wǒ bú shì gùyì de.","Xin lỗi, tôi không cố ý."]]}],
cmp:[
 {vn:"Xin lỗi, tôi không cố ý.", zh:"对不起，我[不是故意的]。", py:"Duìbuqǐ, wǒ bú shì gùyì de.", ok:true, why:"Câu xin lỗi cố định."},
 {vn:"Anh ấy cố tình đến muộn.", zh:"他[故意]来晚了。", py:"Tā gùyì lái wǎn le.", ok:true, why:"故意 trước động từ."}],
ex:[
 ["他[故意]不接我的电话。","Tā gùyì bù jiē wǒ de diànhuà.","Anh ấy cố tình không nghe điện thoại của tôi."],
 ["你是不是[故意]的？","Nǐ shì bu shì gùyì de?","Có phải bạn cố ý không?"],
 ["他[故意]不回答我的问题。","Tā gùyì bù huídá wǒ de wèntí.","Anh ấy cố tình không trả lời câu hỏi của tôi."]],
errs:[
 {bad:"他来晚故意。", good:"他故意来晚。", why:"故意 trước động từ."},
 {bad:"我没故意。", good:"我不是故意的。", why:"Phủ định dùng 不是故意（的）."},
 {bad:"故意他不接电话。", good:"他故意不接电话。", why:"故意 sau chủ ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Xin lỗi, tôi không cố ý.", o:["对不起，我没故意。","对不起，我不是故意的。","对不起，我故意不是。"], a:1, why:"不是故意的."},
  {q:"Anh ấy cố tình không nghe máy.", o:["他故意不接电话。","他不接电话故意。","他不故意接电话。"], a:0, why:"故意 + 不 + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","不是","故意","弄坏","电脑","的"], a:"我不是故意弄坏电脑的。", vi:"Tôi không cố ý làm hỏng máy tính."},
  {w:["他","故意","提高","声音"], a:"他故意提高声音。", vi:"Anh ấy cố ý nói to lên."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Có phải bạn cố ý không?", a:"你是不是故意的？"},
  {q:"Anh ấy cố tình đến muộn.", a:"他故意来晚了。/ 他故意迟到。"}]}],
rel:["二60","一28","三17","二19"]
};
