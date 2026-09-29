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
  ex:[["{1|老师}{2|把}{3|书}{4|放在}{5|桌子上}了。","Lǎoshī bǎ shū fàng zài zhuōzi shang le.","Thầy đặt sách lên bàn rồi.","等级标准"],
      ["{1|我}{2|把}{3|朋友}{4|送到}{5|车站}了。","Wǒ bǎ péngyou sòngdào chēzhàn le.","Tôi tiễn bạn ra đến bến xe rồi.","等级标准"]]},
 {t:"S + 把 + O1 + V + (给) + O2", sub:"（2）", fx:[["S",""],["把",null],["O1",""],["V (+ 给)",""],["người nhận",""]], mean:"Đưa vật cho ai.",
  ex:[["{1|爸爸}{2|把}{3|新买的手机}{4|送给}{5|妹妹}了。","Bàba bǎ xīn mǎi de shǒujī sòng gěi mèimei le.","Bố tặng em gái chiếc điện thoại mới mua.","等级标准"],
      ["{1|他们}{2|把}{3|作业}{4|交给}{5|老师}了。","Tāmen bǎ zuòyè jiāo gěi lǎoshī le.","Họ đã nộp bài tập cho thầy.","等级标准"]]},
 {t:"S + 把 + O + V + bổ ngữ", sub:"（3）", fx:[["S",""],["把",null],["O",""],["V + kết quả / xu hướng / trạng thái",""]], mean:"",
  ex:[["{1|你}{2|把}{3|书}{4|摆好}。","Nǐ bǎ shū bǎihǎo.","Bạn xếp sách cho gọn vào.","等级标准"],
      ["{1|他}{2|把}{3|洗好的衣服}{4|拿回来}了。","Tā bǎ xǐhǎo de yīfu ná huilai le.","Anh ấy mang quần áo đã giặt xong về rồi.","等级标准"],
      ["{1|孩子们}{2|把}{3|手}{4|洗得干干净净的}。","Háizimen bǎ shǒu xǐ de gāngānjìngjìng de.","Bọn trẻ rửa tay sạch sẽ tinh tươm.","等级标准"]]}],
notes:[{t:"Phủ định, năng nguyện", html:"đặt trước 把: <span class='zh'>我没把书放在桌子上。你应该把作业交给老师。</span>"}],
cmp:[
 {vn:"Tôi để điện thoại trên bàn.", zh:"{1|我}{2|把}{3|手机}{4|放在}{5|桌子上}。", py:"Wǒ bǎ shǒujī fàng zài zhuōzi shang.", ok:false, tag:"(phải dùng 把)", why:"Không nói <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg#sai'/></svg> 我放手机在桌子上."}],
ex:[
 ["请{2|把}{3|门}{4|关上}。","Qǐng bǎ mén guānshang.","Làm ơn đóng cửa lại."],
 ["{1|我}{2|把}{3|作业}{4|做完}了。","Wǒ bǎ zuòyè zuòwán le.","Tôi làm xong bài tập rồi."],
 ["{1|你}{2|把}{3|这本书}{4|还给}{5|图书馆}吧。","Nǐ bǎ zhè běn shū huán gěi túshūguǎn ba.","Bạn trả quyển sách này cho thư viện đi."]],
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
  {q:"Bạn trả quyển sách này cho thư viện đi.", a:"你把这本书还给图书馆吧。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"我把作业做。", vi:"Tôi làm bài tập.", o:["Đúng","Sai"], a:1, why:"Sau động từ cần thành phần khác: 我把作业做完了。"},
  {q:"请把窗户打开。", vi:"Làm ơn mở cửa sổ ra.", o:["Đúng","Sai"], a:0, why:"把 + O + V + bổ ngữ."},
  {q:"我没把钱包带来。", vi:"Tôi không mang ví đến.", o:["Đúng","Sai"], a:0, why:"没 đứng trước 把."},
  {q:"他把一本书放在桌子上。", vi:"Anh ấy đặt một quyển sách lên bàn.", o:["Đúng","Sai"], a:1, why:"Tân ngữ sau 把 thường là vật đã xác định: 他把那本书放在桌子上。/ 他把书放在桌子上。"}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你把衣服放＿哪儿了？", vi:"Bạn để quần áo ở đâu rồi?", o:["在", "给", "了"], a:0, why:"放在 + nơi chốn."},
  {q:"我把这本书送＿你。", vi:"Tôi tặng bạn quyển sách này.", o:["给", "在", "好"], a:0, why:"送给 + người."},
  {q:"请把门关＿。", vi:"Làm ơn đóng cửa lại.", o:["上", "下", "给"], a:0, why:"关上 = đóng lại."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi để chìa khóa trên bàn rồi.", a:"我把钥匙放在桌子上了。/ 我把钥匙放桌子上了。"},
  {q:"Bạn đưa hộ chiếu cho tôi.", a:"你把护照给我。/ 请把护照给我。/ 请你把护照给我。/ 你把护照交给我。"},
  {q:"Tôi chưa làm xong bài tập (dùng 把).", a:"我没把作业做完。/ 我还没把作业做完。"}]}],
rel:["三27","三55","三46","二50"]
};
