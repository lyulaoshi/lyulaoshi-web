// Bài ngữ pháp 【新4.08】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.08", title:"频率副词：重新、往往、偶尔、再次、老", vi:"重新, 往往, 偶尔, 再次, 老 — lại, thường, thỉnh thoảng", tag:"词类 · 副词",
goals:[
 "Dùng <b>偶尔</b>: thỉnh thoảng.",
 "Dùng <b>再次</b>: lần nữa (trang trọng).",
 "Ôn <b>重新、往往、老</b>."],
intro:"偶尔 là mức ít nhất: 经常 → 有时 → <b>偶尔</b>.",
rules:[
 {t:"S + 偶尔 + V", sub:"（1）偶尔", fx:[["S",""],["偶尔",null],["V",""]], mean:"Thỉnh thoảng, đôi khi lắm mới.",
  ex:[["{1|我}{2|偶尔}{3|去看电影}。","Wǒ ǒu'ěr qù kàn diànyǐng.","Thỉnh thoảng tôi mới đi xem phim."]]},
 {t:"S + 再次 + V", sub:"（2）再次", fx:[["S",""],["再次",null],["V",""]], mean:"Lần nữa (văn trang trọng).",
  ex:[["{1|我}{2|再次}{3|向大家表示感谢}。","Wǒ zàicì xiàng dàjiā biǎoshì gǎnxiè.","Tôi xin cảm ơn mọi người một lần nữa."]]},
 {t:"重新 / 往往 / 老 + V", sub:"（3）", fx:[["S",""],["重新 / 往往 / 老",null],["V",""]], mean:"重新 làm lại từ đầu · 往往 thường (theo quy luật) · 老 cứ, suốt (khẩu ngữ).",
  ex:[["{1|请你}{2|重新}{3|写一遍}。","Qǐng nǐ chóngxīn xiě yí biàn.","Bạn viết lại một lần."],
      ["{1|周末这里}{2|往往}{3|很热闹}。","Zhōumò zhèlǐ wǎngwǎng hěn rènao.","Cuối tuần ở đây thường rất đông vui."],
      ["{1|他}{2|老}{3|忘带钥匙}。","Tā lǎo wàng dài yàoshi.","Anh ấy cứ quên mang chìa khóa."]]}],
cmp:[
 {vn:"Anh ấy thỉnh thoảng mới uống rượu.", zh:"他只是[偶尔]喝点儿酒。", py:"Tā zhǐshì ǒu'ěr hē diǎnr jiǔ.", ok:true, why:"偶尔 đứng trước động từ."}],
ex:[
 ["[偶尔]迟到一次没关系。","Ǒu'ěr chídào yí cì méi guānxi.","Thỉnh thoảng muộn một lần không sao."],
 ["他[再次]获得了第一名。","Tā zàicì huòdéle dì-yī míng.","Anh ấy lại giành giải nhất."],
 ["电脑要[重新]开一下儿。","Diànnǎo yào chóngxīn kāi yíxiàr.","Máy tính cần khởi động lại."]],
errs:[
 {bad:"我经常偶尔去那儿。", good:"我偶尔去那儿。", why:"经常 và 偶尔 trái nhau."},
 {bad:"明天往往下雨。", good:"明天可能下雨。", why:"往往 nói quy luật, không dùng cho tương lai."},
 {bad:"请再次重新又写。", good:"请重新写一遍。", why:"Không chồng nhiều phó từ cùng nghĩa."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"我很忙，只是＿运动一下儿。", vi:"Tôi bận, chỉ thỉnh thoảng vận động.", o:["偶尔","往往地","再次"], a:0, why:"Ít khi → 偶尔."},
  {q:"这个字写错了，请＿写一遍。", vi:"Chữ này sai rồi, hãy viết lại.", o:["重新","偶尔","往往"], a:0, why:"Làm lại → 重新."},
  {q:"感冒的时候，人＿容易累。", vi:"Khi bị cảm người ta thường dễ mệt.", o:["往往","再次","重新"], a:0, why:"Quy luật → 往往."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","再次","获得了","第一名"], a:"他再次获得了第一名。", vi:"Anh ấy lại giành giải nhất."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Thỉnh thoảng tôi mới đi xem phim.", a:"我偶尔去看电影。/ 我偶尔去看一次电影。"}]}],
rel:["二16","三15","新5.07"]
};
