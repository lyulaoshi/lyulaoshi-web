// Bài ngữ pháp 【三59】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三59", title:"重动句", vi:"Câu lặp động từ — S + V + O + V + bổ ngữ", tag:"句子的类型 · 特殊句型",
goals:[
 "Khi có cả <b>tân ngữ</b> và <b>bổ ngữ</b> (trạng thái, kết quả, thời lượng), <b>lặp lại động từ</b>.",
 "Nhớ khung: <b>S + V + O + V + 得 / 了 + bổ ngữ</b>.",
 "Không đặt bổ ngữ ngay sau tân ngữ."],
intro:"Động từ tiếng Trung khó mang cả tân ngữ lẫn bổ ngữ cùng lúc. Cách giải quyết: <b>nói động từ hai lần</b> — lần đầu kèm tân ngữ, lần sau kèm bổ ngữ.",
rules:[
 {t:"S + V + O + V + bổ ngữ", sub:"重动", fx:[["S",""],["V + O",""],["V",null],["得 / 了 + bổ ngữ",""]], mean:"",
  ex:[["他打篮球打[得很好]。","Tā dǎ lánqiú dǎ de hěn hǎo.","Anh ấy chơi bóng rổ rất giỏi.","等级标准"],
      ["她游泳游[得很快]。","Tā yóuyǒng yóu de hěn kuài.","Cô ấy bơi rất nhanh.","等级标准"],
      ["她走路走[累]了。","Tā zǒu lù zǒulèi le.","Cô ấy đi bộ đến mệt rồi.","等级标准"],
      ["我看电视看了[两个小时]。","Wǒ kàn diànshì kàn le liǎng ge xiǎoshí.","Tôi xem ti vi hai tiếng.","等级标准"]]}],
cmp:[
 {vn:"Anh ấy viết chữ Hán rất đẹp.", zh:"他写汉字写[得很漂亮]。", py:"Tā xiě Hànzì xiě de hěn piàoliang.", ok:true, why:"Lặp 写: lần đầu với 汉字, lần sau với 得."}],
ex:[
 ["我等你等了[半天]。","Wǒ děng nǐ děng le bàntiān.","Tôi đợi bạn cả buổi."],
 ["他说中文说[得很流利]。","Tā shuō Zhōngwén shuō de hěn liúlì.","Anh ấy nói tiếng Trung rất lưu loát."]],
errs:[
 {bad:"他打篮球得很好。", good:"他打篮球打得很好。", why:"得 phải đứng ngay sau động từ → lặp động từ."},
 {bad:"我看电视两个小时。", good:"我看电视看了两个小时。/ 我看了两个小时电视。", why:"Thời lượng + tân ngữ → lặp động từ hoặc đổi vị trí."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy chơi bóng rổ rất giỏi.", o:["他打篮球得很好。","他打篮球打得很好。"], a:1, why:"Lặp động từ."},
  {q:"Tôi xem ti vi hai tiếng.", o:["我看电视两个小时。","我看电视看了两个小时。"], a:1, why:"Lặp động từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["她","游泳","游","得","很快"], a:"她游泳游得很快。", vi:"Cô ấy bơi rất nhanh."},
  {w:["她","走路","走累","了"], a:"她走路走累了。", vi:"Cô ấy đi bộ đến mệt rồi."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Anh ấy nói tiếng Trung rất lưu loát.", a:"他说中文说得很流利。/ 他中文说得很流利。"},
  {q:"Tôi đợi bạn cả buổi.", a:"我等你等了半天。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"他打篮球打得很好。", vi:"Anh ấy chơi bóng rổ rất giỏi.", o:["Đúng","Sai"], a:0, why:"V + O + V得 + Adj."},
  {q:"她说汉语得很流利。", vi:"Cô ấy nói tiếng Trung rất lưu loát.", o:["Đúng","Sai"], a:1, why:"得 phải ngay sau động từ: 她说汉语说得很流利。"},
  {q:"我看书看了一个下午。", vi:"Tôi đọc sách cả buổi chiều.", o:["Đúng","Sai"], a:0, why:"V + O + V + 了 + thời lượng."},
  {q:"他写汉字写很快。", vi:"Anh ấy viết chữ Hán rất nhanh.", o:["Đúng","Sai"], a:1, why:"Thiếu 得: 他写汉字写得很快。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Cô ấy nấu ăn rất ngon.", o:["她做饭做得很好吃。", "她做饭得很好吃。"], a:0, why:"Lặp động từ."},
  {q:"Tôi chơi game đến mệt.", o:["我玩游戏玩累了。", "我玩游戏累了玩。"], a:0, why:"V + O + V + bổ ngữ kết quả."},
  {q:"Anh ấy lái xe rất chậm.", o:["他开车开得很慢。", "他开车很慢得。"], a:0, why:"V + O + V得 + Adj."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy nói tiếng Anh rất lưu loát.", a:"他说英语说得很流利。/ 他英语说得很流利。"},
  {q:"Tôi học tiếng Trung được ba năm.", a:"我学中文学了三年。/ 我学了三年中文。"},
  {q:"Cô ấy hát rất hay.", a:"她唱歌唱得很好。/ 她唱歌唱得很好听。/ 她唱得很好。/ 她唱得很好听。"}]}],
rel:["二51","二52","二49","三48"]
};
