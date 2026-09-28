// Bài ngữ pháp 【三54】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三54", title:"“把”字句1：表处置", vi:"Câu chữ “把” 1 — câu xử trí", tag:"句子的类型 · 特殊句型",
goals:[
 "Đặt câu <b>S + 把 + O + V + thành phần khác</b> để nói xử lý đối tượng thế nào, đưa đi đâu, cho ai.",
 "Nhớ 3 khung HSK 3: V + 在 / 到 + nơi chốn · V + (给) + người · V + bổ ngữ.",
 "Không để động từ đứng trơn; phủ định / năng nguyện đặt trước 把."],
intro:"Câu 把 đưa <b>tân ngữ (vật đã xác định)</b> lên trước động từ để nhấn mạnh <b>kết quả xử lý</b> nó. Người Việt hay tránh câu 把, nhưng nhiều trường hợp tiếng Trung <b>bắt buộc</b> dùng (như đặt vật vào đâu).",
rules:[
 {t:"S + 把 + O + V + 在 / 到 + nơi chốn", sub:"（1）", fx:[["S",""],["把",null],["O",""],["V + 在 / 到",""],["nơi chốn",""]], mean:"Đặt / đưa vật đến đâu.",
  ex:[["老师[把]书放在桌子上了。","Lǎoshī bǎ shū fàng zài zhuōzi shang le.","Thầy đặt sách lên bàn rồi.","等级标准"],
      ["我[把]朋友送到车站了。","Wǒ bǎ péngyou sòngdào chēzhàn le.","Tôi tiễn bạn ra đến bến xe rồi.","等级标准"]]},
 {t:"S + 把 + O1 + V + (给) + O2", sub:"（2）", fx:[["S",""],["把",null],["O1",""],["V (+ 给)",""],["người nhận",""]], mean:"Đưa vật cho ai.",
  ex:[["爸爸[把]新买的手机送给妹妹了。","Bàba bǎ xīn mǎi de shǒujī sòng gěi mèimei le.","Bố tặng em gái chiếc điện thoại mới mua.","等级标准"],
      ["他们[把]作业交给老师了。","Tāmen bǎ zuòyè jiāo gěi lǎoshī le.","Họ đã nộp bài tập cho thầy.","等级标准"]]},
 {t:"S + 把 + O + V + bổ ngữ", sub:"（3）", fx:[["S",""],["把",null],["O",""],["V + kết quả / xu hướng / trạng thái",""]], mean:"",
  ex:[["你[把]书摆好。","Nǐ bǎ shū bǎihǎo.","Bạn xếp sách cho gọn vào.","等级标准"],
      ["他[把]洗好的衣服拿回来了。","Tā bǎ xǐhǎo de yīfu ná huilai le.","Anh ấy mang quần áo đã giặt xong về rồi.","等级标准"],
      ["孩子们[把]手洗得干干净净的。","Háizimen bǎ shǒu xǐ de gāngānjìngjìng de.","Bọn trẻ rửa tay sạch sẽ tinh tươm.","等级标准"]]}],
notes:[{t:"Phủ định, năng nguyện", html:"đặt trước 把: <span class='zh'>我没把书放在桌子上。你应该把作业交给老师。</span>"}],
cmp:[
 {vn:"Tôi để điện thoại trên bàn.", zh:"我[把]手机放在桌子上。", py:"Wǒ bǎ shǒujī fàng zài zhuōzi shang.", ok:false, tag:"(phải dùng 把)", why:"Không nói ✗ 我放手机在桌子上."}],
ex:[
 ["请[把]门关上。","Qǐng bǎ mén guānshang.","Làm ơn đóng cửa lại."],
 ["我[把]作业做完了。","Wǒ bǎ zuòyè zuòwán le.","Tôi làm xong bài tập rồi."],
 ["你[把]这本书还给图书馆吧。","Nǐ bǎ zhè běn shū huán gěi túshūguǎn ba.","Bạn trả quyển sách này cho thư viện đi."]],
errs:[
 {bad:"我放手机在桌子上。", good:"我把手机放在桌子上。", why:"V + 在 + nơi chốn với tân ngữ → dùng 把."},
 {bad:"我把作业做。", good:"我把作业做完了。", why:"Sau 把 + O + V phải có thành phần khác."},
 {bad:"我把书没放在桌子上。", good:"我没把书放在桌子上。", why:"没 đứng trước 把."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi để điện thoại trên bàn.", o:["我放手机在桌子上。","我把手机放在桌子上。","我把手机放。"], a:1, why:"把 + O + V + 在 + nơi."},
  {q:"Tôi không để sách trên bàn.", o:["我把书没放在桌子上。","我没把书放在桌子上。"], a:1, why:"没 trước 把."},
  {q:"Họ nộp bài tập cho thầy rồi.", o:["他们把作业交给老师了。","他们交作业给老师把了。"], a:0, why:"把 + O + V给 + người."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["老师","把","书","放在","桌子上","了"], a:"老师把书放在桌子上了。", vi:"Thầy đặt sách lên bàn rồi."},
  {w:["我","把","作业","做完","了"], a:"我把作业做完了。", vi:"Tôi làm xong bài tập rồi."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 把)", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Làm ơn đóng cửa lại.", a:"请把门关上。"},
  {q:"Bạn trả quyển sách này cho thư viện đi.", a:"你把这本书还给图书馆吧。"}]}],
rel:["三27","三55","三46","二50"]
};
