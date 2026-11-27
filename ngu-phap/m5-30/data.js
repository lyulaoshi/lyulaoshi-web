// Bài ngữ pháp 【新5.30】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.30", title:"“把”字句3", vi:"Câu chữ “把” 3 — 把…一V; 把 + O1 + V + O2", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng <b>把 + O + 一 + V</b> để tả động tác nhanh, dứt khoát (thường còn vế sau).",
 "Dùng <b>把 + O1 + V + O2</b>: xử lý O1 bằng cách gắn thêm O2.",
 "Hiểu quan hệ giữa O1 và O2 (bộ phận, kết quả)."],
intro:"Sau 【三54】 và 【新4.50】, HSK 5 thêm hai mẫu: <b>把书一扔</b> (quẳng sách cái rụp) và <b>把门上了锁</b> (khoá cửa).",
rules:[
 {t:"S + 把 + O + 一 + V，vế sau", sub:"（1）", fx:[["S",""],["把",null],["O",""],["一 + V",null],["，",""],["vế sau",""]], mean:"Vừa … một cái thì …",
  ex:[["{1|他}{2|把}{3|书}{4|一扔}，{5|就跑出去了}。","Tā bǎ shū yì rēng, jiù pǎo chuqu le.","Nó quẳng sách một cái rồi chạy ra ngoài."],
      ["{1|她}{2|把}{3|眼睛}{4|一闭}，{5|什么也不想看}。","Tā bǎ yǎnjing yí bì, shénme yě bù xiǎng kàn.","Cô ấy nhắm mắt lại, chẳng muốn nhìn gì."]]},
 {t:"S + 把 + O1 + V + O2", sub:"（2）", fx:[["S",""],["把",null],["O1",""],["V (了)",""],["O2",""]], mean:"O2 là thứ gắn vào O1, hoặc kết quả / một phần của O1.",
  ex:[["{1|我}{2|把}{3|门}{4|上了}{5|锁}。","Wǒ bǎ mén shàngle suǒ.","Tôi khoá cửa rồi."],
      ["{1|他}{2|把}{3|苹果}{4|削了}{5|皮}。","Tā bǎ píngguǒ xiāole pí.","Anh ấy gọt vỏ táo."],
      ["{1|妈妈}{2|把}{3|这件事}{4|告诉了}{5|爸爸}。","Māma bǎ zhè jiàn shì gàosule bàba.","Mẹ kể việc này cho bố."]]}],
cmp:[
 {vn:"Anh ấy bóc vỏ quýt.", zh:"他把橘子剥了皮。", py:"Tā bǎ júzi bāole pí.", ok:true, why:"O1 = quả quýt, O2 = vỏ."}],
ex:[
 ["她[把]嘴一撇，什么也没说。","Tā bǎ zuǐ yì piě, shénme yě méi shuō.","Cô ấy bĩu môi, chẳng nói gì."],
 ["请[把]这个好消息告诉大家。","Qǐng bǎ zhège hǎo xiāoxi gàosu dàjiā.","Hãy báo tin vui này cho mọi người."],
 ["爸爸[把]鱼去了刺给孩子吃。","Bàba bǎ yú qùle cì gěi háizi chī.","Bố gỡ xương cá cho con ăn."]],
errs:[
 {bad:"他一扔把书就跑了。", good:"他把书一扔就跑了。", why:"把 + O đứng trước 一 + V."},
 {bad:"我把锁上了门。", good:"我把门上了锁。", why:"O1 là vật bị xử lý (cửa), O2 là thứ gắn vào (khoá)."},
 {bad:"他把苹果削皮了的。", good:"他把苹果削了皮。", why:"了 đứng sau động từ, trước O2; không thêm 的."},
 {bad:"我把一个门上了锁。", good:"我把门上了锁。", why:"Tân ngữ của 把 là vật đã xác định."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi khoá cửa rồi.", o:["我把门上了锁。","我把锁上了门。","我门把上了锁。"], a:0, why:"把 + 门 + 上了 + 锁."},
  {q:"Nó quẳng sách một cái rồi chạy đi.", o:["他把书一扔就跑了。","他一把书扔就跑了。"], a:0, why:"把 + O + 一V."},
  {q:"他把苹果削了＿。", vi:"Anh ấy gọt vỏ táo.", o:["皮","刺","锁"], a:0, why:"Vỏ = 皮."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["妈妈","把","这件事","告诉了","爸爸"], a:"妈妈把这件事告诉了爸爸。", vi:"Mẹ kể việc này cho bố."},
  {w:["她","把","眼睛","一闭，","什么也不想看"], a:"她把眼睛一闭，什么也不想看。", vi:"Cô ấy nhắm mắt, chẳng muốn nhìn gì."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 把)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy gọt vỏ táo.", a:"他把苹果削了皮。/ 他把苹果的皮削了。"},
  {q:"Hãy báo tin vui này cho mọi người.", a:"请把这个好消息告诉大家。/ 请你把这个好消息告诉大家。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"他把头一低，没有回答。", vi:"Anh ấy cúi đầu, không trả lời.", o:["Đúng","Sai"], a:0, why:"把 + O + 一V + vế sau."},
  {q:"我把衣服洗了干净。", vi:"Tôi giặt sạch quần áo.", o:["Đúng","Sai"], a:1, why:"Bổ ngữ kết quả đi liền: 我把衣服洗干净了。"},
  {q:"护士把他的伤口上了药。", vi:"Y tá bôi thuốc vào vết thương cho anh ấy.", o:["Đúng","Sai"], a:0, why:"O1 = vết thương, O2 = thuốc."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"他把手＿挥，大家就安静了。", vi:"Anh ấy phẩy tay một cái, mọi người im lặng.", o:["一","了一","着"], a:0, why:"一挥."},
  {q:"请把这封信交＿经理。", vi:"Hãy đưa thư này cho giám đốc.", o:["给","在","到了的"], a:0, why:"交给 + người."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Tôi khoá cửa rồi.", a:"我把门上了锁。/ 我把门锁上了。/ 我把门锁了。"},
  {q:"Mẹ kể việc này cho bố (dùng 把).", a:"妈妈把这件事告诉了爸爸。/ 妈妈把这件事告诉爸爸了。"}]}],
rel:["三54","新4.50","三55"]
};
