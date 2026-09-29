// Bài ngữ pháp 【二50】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二50", title:"趋向补语1", vi:"Bổ ngữ xu hướng đơn — V + 来 / 去; V + 上 / 下 / 进 / 出 / 起 / 过 / 回 / 开", tag:"句子成分 · 补语",
goals:[
 "Dùng <b>V + 来 / 去</b>: hướng lại gần (来) hay ra xa (去) người nói.",
 "Dùng <b>V + 上 / 下 / 进 / 出 / 起 / 过 / 回 / 开</b> chỉ hướng lên, xuống, vào, ra…",
 "Đặt đúng tân ngữ chỉ nơi chốn: <b>V + nơi chốn + 来 / 去</b> (进教室来)."],
intro:"Bổ ngữ xu hướng cho biết <b>động tác đi theo hướng nào</b>. 来 = về phía người nói, 去 = rời xa người nói.",
rules:[
 {t:"V + 来 / 去", sub:"（1）", fx:[["Động từ",""],["来 / 去",null]], mean:"Tân ngữ chỉ nơi chốn đứng <b>trước</b> 来 / 去; tân ngữ chỉ vật đứng trước hoặc sau.",
  ex:[["你看，他向这边走[来]了。","Nǐ kàn, tā xiàng zhèbian zǒulai le.","Nhìn kìa, anh ấy đang đi về phía này.","等级标准"],
      ["——这件礼物怎么给他？——你给他带[去]吧。","—— Zhè jiàn lǐwù zěnme gěi tā? —— Nǐ gěi tā dàiqu ba.","— Món quà này đưa cho anh ấy thế nào? — Bạn mang đến cho anh ấy đi.","等级标准"],
      ["我明天带一个相机[来]。／他昨天带[来]了一个相机。","Wǒ míngtiān dài yí ge xiàngjī lái. / Tā zuótiān dàilai le yí ge xiàngjī.","Mai tôi mang một chiếc máy ảnh đến. / Hôm qua anh ấy mang đến một chiếc máy ảnh.","等级标准"],
      ["——你的词典呢？——不好意思，我没拿[来]。","—— Nǐ de cídiǎn ne? —— Bù hǎoyìsi, wǒ méi nálai.","— Từ điển của bạn đâu? — Xin lỗi, tôi không mang đến.","等级标准"]]},
 {t:"V + 上 / 下 / 进 / 出 / 起 / 过 / 回 / 开", sub:"（2）", fx:[["Động từ",""],["上 / 下 / 进 / 出 / 起 / 过 / 回 / 开",null],["(nơi chốn / vật)",""]], mean:"lên · xuống · vào · ra · dậy / lên · qua · về · mở ra",
  ex:[["你爬[上]十九楼了没有？——我没爬[上]十九楼，到十楼就不行了。","Nǐ páshang shíjiǔ lóu le méiyǒu? —— Wǒ méi páshang shíjiǔ lóu, dào shí lóu jiù bù xíng le.","Bạn leo lên tầng 19 chưa? — Tôi không leo lên nổi, đến tầng 10 là chịu rồi.","等级标准"],
      ["爸爸从车上拿[下]电脑，放[回]房间。","Bàba cóng chē shang náxia diànnǎo, fànghuí fángjiān.","Bố lấy máy tính từ trên xe xuống, cất về phòng.","等级标准"],
      ["妈妈走[上]二楼，从包里拿[出]一封信。","Māma zǒushang èr lóu, cóng bāo li náchu yì fēng xìn.","Mẹ đi lên tầng hai, lấy từ trong túi ra một bức thư.","等级标准"],
      ["车开[进]学校了，我们快[过]去吧。","Chē kāijìn xuéxiào le, wǒmen kuài guòqu ba.","Xe chạy vào trường rồi, mình mau qua đó đi.","等级标准"],
      ["你打[开]包让我看看。","Nǐ dǎkāi bāo ràng wǒ kànkan.","Bạn mở túi ra cho tôi xem."]]}],
notes:[
 {t:"Nơi chốn + 来 / 去", html:"<span class='zh'>他进教室来了。</span> (<svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg#sai'/></svg> 他进来教室了) — nơi chốn chen giữa. Bổ ngữ xu hướng kép (走进来、拿出去…) học ở 【三47】."}],
cmp:[
 {vn:"Anh ấy đi vào lớp.", zh:"他走[进]教室。", py:"Tā zǒujìn jiàoshì.", ok:true, why:"“vào” sau động từ — giống tiếng Việt."},
 {vn:"Mang sách đến đây.", zh:"带书[来]。", py:"Dài shū lái.", ok:true, why:"来 = về phía người nói."}],
ex:[
 ["请进[来]！","Qǐng jìnlai!","Mời vào!"],
 ["他回家[去]了。","Tā huí jiā qu le.","Anh ấy về nhà rồi."],
 ["同学们站[起]来了。","Tóngxuémen zhàn qǐlai le.","Các bạn đứng dậy rồi."],
 ["你上[来]吧，我在二楼。","Nǐ shànglai ba, wǒ zài èr lóu.","Bạn lên đây đi, tôi ở tầng hai."]],
errs:[
 {bad:"他进来教室了。", good:"他进教室来了。", why:"Nơi chốn đứng trước 来 / 去."},
 {bad:"你上去吧，我在二楼。（người nói ở trên）", good:"你上来吧，我在二楼。", why:"Về phía người nói → 来."},
 {bad:"我回去家。", good:"我回家去。", why:"Nơi chốn trước 去."}],
practice:[
 {t:"A. Chọn 来 hoặc 去", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"(Tôi ở trong phòng) 请进＿！", o:["来","去"], a:0, why:"Về phía người nói."},
  {q:"(Tôi ở nhà, bạn đi ra) 你出＿吧。", o:["来","去"], a:1, why:"Rời xa người nói."},
  {q:"Anh ấy vào lớp rồi.", o:["他进来教室了。","他进教室来了。","他来进教室了。"], a:1, why:"Nơi chốn trước 来."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","昨天","带来","了","一个","相机"], a:"他昨天带来了一个相机。", vi:"Hôm qua anh ấy mang đến một chiếc máy ảnh."},
  {w:["妈妈","走上","二楼"], a:"妈妈走上二楼。", vi:"Mẹ đi lên tầng hai."},
  {w:["你","打开","包","让我","看看"], a:"你打开包让我看看。", vi:"Bạn mở túi ra cho tôi xem."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bố lấy máy tính từ trên xe xuống.", a:"爸爸从车上拿下电脑。"},
  {q:"Mai tôi mang một chiếc máy ảnh đến.", a:"我明天带一个相机来。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"他走进来教室了。", vi:"Anh ấy đi vào lớp.", o:["Đúng","Sai"], a:1, why:"Nơi chốn đứng trước 来 / 去: 他走进教室来了。"},
  {q:"请你上来吧。", vi:"Mời bạn lên đây.", o:["Đúng","Sai"], a:0, why:"Về phía người nói → 来."},
  {q:"他回去家了。", vi:"Anh ấy về nhà rồi.", o:["Đúng","Sai"], a:1, why:"Nơi chốn đứng trước 去: 他回家去了。"},
  {q:"妈妈买来了很多水果。", vi:"Mẹ mua về rất nhiều hoa quả.", o:["Đúng","Sai"], a:0, why:"V + 来 + 了 + tân ngữ (vật)."}]},
 {t:"E. Chọn 来 hay 去", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"(Bạn ở tầng trên, tôi ở dưới gọi) 你下＿吧！", vi:"Bạn xuống đây đi!", o:["来", "去"], a:0, why:"Về phía người nói → 来."},
  {q:"(Tôi ở trong lớp, nói với bạn ở ngoài) 快进＿！", vi:"Mau vào đây!", o:["来", "去"], a:0, why:"Đi vào chỗ người nói → 来."},
  {q:"(Chúng ta ở trong phòng, nói về anh ấy) 他出＿了。", vi:"Anh ấy ra ngoài rồi.", o:["来", "去"], a:1, why:"Rời xa người nói → 去."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy đi vào lớp rồi.", a:"他走进教室来了。/ 他进教室来了。/ 他走进教室了。/ 他进教室了。"},
  {q:"Bạn mang từ điển đến chưa?", a:"你带词典来了吗？/ 你带来词典了吗？/ 你带词典来了没有？"},
  {q:"Mẹ về nhà rồi.", a:"妈妈回家了。/ 妈妈回家去了。/ 妈妈回家来了。"}]}],
rel:["三47","二23","一01","二40"]
};
