// Bài ngữ pháp 【三47】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三47", title:"趋向补语2：复合趋向补语", vi:"Bổ ngữ xu hướng kép — 走进来, 拿出去, 站起来…", tag:"句子成分 · 补语",
goals:[
 "Ghép <b>上 / 下 / 进 / 出 / 回 / 过 / 起 + 来 / 去</b> thành bổ ngữ xu hướng kép.",
 "Đặt tân ngữ <b>nơi chốn</b> giữa: 走进教室来 / 走回宿舍去.",
 "Đặt tân ngữ <b>vật</b> ở 3 vị trí: 拿出一本书来 · 拿出来一本书 · 拿了一本书出来."],
intro:"Bổ ngữ xu hướng kép cho biết hướng đi (lên, xuống, vào, ra…) <b>và</b> hướng so với người nói (来 lại gần, 去 ra xa).",
rules:[
 {t:"V + 上 / 下 / 进 / 出 / 回 / 过 / 起 + 来 / 去", sub:"复合趋向", fx:[["Động từ",""],["上 / 下 / 进 / 出 / 回 / 过 / 起",null],["来 / 去",null]], mean:"起 chỉ đi với 来 (起来).",
  ex:[["汽车开[过来]了，咱们准备上车。","Qìchē kāi guolai le, zánmen zhǔnbèi shàng chē.","Xe chạy tới rồi, chúng ta chuẩn bị lên xe.","等级标准"],
      ["这儿离学校很远，我们走[回去]吧。","Zhèr lí xuéxiào hěn yuǎn, wǒmen zǒu huiqu ba.","Chỗ này xa trường, chúng ta đi bộ về nhé.","等级标准"],
      ["你站[起来]。","Nǐ zhàn qilai.","Em đứng dậy.","等级标准"],
      ["他从二楼走[下来]。","Tā cóng èr lóu zǒu xialai.","Anh ấy từ tầng hai đi xuống.","等级标准"]]},
 {t:"Tân ngữ nơi chốn: chen trước 来 / 去", sub:"处所宾语", fx:[["V + 进 / 上 / 回…",""],["nơi chốn",null],["来 / 去",""]], mean:"",
  ex:[["他慢慢地走出教室[去]了。","Tā mànmàn de zǒuchū jiàoshì qu le.","Anh ấy từ từ đi ra khỏi lớp.","等级标准"],
      ["他突然跑上二楼[去]了。","Tā tūrán pǎoshàng èr lóu qu le.","Anh ấy đột nhiên chạy lên tầng hai.","等级标准"]]},
 {t:"Tân ngữ vật: 3 vị trí", sub:"事物宾语", fx:[["V + O + 出来",null],["·",""],["V + 出来 + O",null],["·",""],["V + 出 + O + 来",null]], mean:"",
  ex:[["他从书包里拿了一本书出来。","Tā cóng shūbāo li ná le yì běn shū chulai.","Anh ấy lấy một quyển sách từ trong cặp ra.","等级标准"],
      ["他从书包里拿出来一本书。","Tā cóng shūbāo li ná chulai yì běn shū.","Anh ấy lấy ra từ trong cặp một quyển sách.","等级标准"],
      ["他从书包里拿出一本书来。","Tā cóng shūbāo li náchū yì běn shū lai.","Anh ấy lấy ra một quyển sách từ trong cặp.","等级标准"]]}],
cmp:[
 {vn:"Anh ấy đi vào lớp (về phía tôi).", zh:"他走进教室来了。", py:"Tā zǒujìn jiàoshì lai le.", ok:true, why:"Nơi chốn 教室 chen giữa 进 và 来."},
 {vn:"Mời mọi người đứng dậy.", zh:"请大家站[起来]。", py:"Qǐng dàjiā zhàn qilai.", ok:true, why:"“dậy” = 起来."}],
ex:[
 ["外边的桌子你搬[进来]了没有？——桌子我还没搬[进来]。","Wàibian de zhuōzi nǐ bān jinlai le méiyǒu? —— Zhuōzi wǒ hái méi bān jinlai.","Cái bàn ngoài kia bạn khiêng vào chưa? — Bàn tôi chưa khiêng vào.","等级标准"],
 ["行李你帮我拿[下去]吧。","Xíngli nǐ bāng wǒ ná xiaqu ba.","Bạn giúp tôi mang hành lý xuống nhé.","等级标准"],
 ["我昨天买[回来]了一些水果。","Wǒ zuótiān mǎi huilai le yìxiē shuǐguǒ.","Hôm qua tôi mua về một ít hoa quả.","等级标准"]],
errs:[
 {bad:"他走进来教室了。", good:"他走进教室来了。", why:"Tân ngữ nơi chốn đứng trước 来 / 去."},
 {bad:"他跑上去二楼了。", good:"他跑上二楼去了。", why:"Nơi chốn chen giữa."},
 {bad:"你站起去。", good:"你站起来。", why:"起 chỉ đi với 来."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh ấy đi vào lớp.", o:["他走进来教室了。","他走进教室来了。"], a:1, why:"Nơi chốn trước 来."},
  {q:"Em đứng dậy.", o:["你站起去。","你站起来。"], a:1, why:"起来."},
  {q:"Anh ấy chạy lên tầng hai.", o:["他跑上二楼去了。","他跑上去二楼了。"], a:0, why:"Nơi chốn trước 去."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","从书包里","拿出","一本书","来"], a:"他从书包里拿出一本书来。", vi:"Anh ấy lấy ra một quyển sách từ trong cặp."},
  {w:["他","从二楼","走下来"], a:"他从二楼走下来。", vi:"Anh ấy từ tầng hai đi xuống."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Hôm qua tôi mua về một ít hoa quả.", a:"我昨天买回来了一些水果。/ 我昨天买回来一些水果。/ 昨天我买回来了一些水果。"},
  {q:"Mời mọi người đứng dậy.", a:"请大家站起来。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"他跑上楼去了。", vi:"Anh ấy chạy lên lầu rồi.", o:["Đúng","Sai"], a:0, why:"Nơi chốn chen giữa 上 và 去."},
  {q:"她走回去宿舍了。", vi:"Cô ấy đi về ký túc xá rồi.", o:["Đúng","Sai"], a:1, why:"Nơi chốn đứng trước 去: 她走回宿舍去了。"},
  {q:"他从包里拿出来一本书。", vi:"Anh ấy lấy từ trong túi ra một quyển sách.", o:["Đúng","Sai"], a:0, why:"Tân ngữ vật có thể đứng sau 出来."},
  {q:"请大家站来起。", vi:"Mời mọi người đứng dậy.", o:["Đúng","Sai"], a:1, why:"请大家站起来。"}]},
 {t:"E. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"(Tôi đứng dưới lầu) Anh ấy từ tầng 2 đi xuống.", o:["他从二楼走下来。", "他从二楼走下去。"], a:0, why:"Về phía người nói → 来."},
  {q:"(Tôi ở trong phòng) Anh ấy đi ra ngoài rồi.", o:["他走出去了。", "他走出来了。"], a:0, why:"Rời xa người nói → 去."},
  {q:"Anh ấy chạy vào lớp.", o:["他跑进教室来了。", "他跑进来教室了。", "他跑教室进来了。"], a:0, why:"V + 进 + nơi chốn + 来."},
  {q:"Mọi người đứng dậy.", o:["大家站起来。", "大家站起去。"], a:0, why:"起 chỉ đi với 来."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Anh ấy lấy một quyển sách ra.", a:"他拿出一本书来。/ 他拿出来一本书。/ 他拿了一本书出来。"},
  {q:"Bạn đứng dậy đi.", a:"你站起来吧。/ 你站起来。/ 请你站起来。"},
  {q:"Anh ấy chạy lên tầng hai rồi.", a:"他跑上二楼去了。/ 他跑上二楼了。"},
  {q:"Mời vào! (tôi ở trong phòng)", a:"请进来！/ 请进！/ 快进来！"}]}],
rel:["二50","三46","三48","三35"]
};
