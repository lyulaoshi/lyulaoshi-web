// Bài ngữ pháp 【新4.13】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.13", title:"介词：自、当、由、随着、等", vi:"自, 当, 由, 随着, 等 — từ, khi, cùng với, đợi đến", tag:"词类 · 介词",
goals:[
 "Dùng <b>自 / 由</b> chỉ điểm xuất phát (văn viết).",
 "Dùng <b>随着</b>: cùng với (sự thay đổi).",
 "Dùng <b>等</b>: đợi đến khi … (thì)."],
intro:"随着 nói A thay đổi thì B <b>thay đổi theo</b>. 等 đứng đầu vế = “<b>đợi</b> … rồi hẵng”.",
rules:[
 {t:"自 / 由 + nơi chốn, thời gian", sub:"（1）", fx:[["自 / 由",null],["điểm đầu",""],["V / 起 / 到…",""]], mean:"Từ.",
  ex:[["本次列车{1|由}{2|北京}{3|开往上海}。","Běn cì lièchē yóu Běijīng kāiwǎng Shànghǎi.","Chuyến tàu này chạy từ Bắc Kinh đi Thượng Hải."],
      ["{1|自}{2|今天}{3|起}，图书馆晚上开门。","Zì jīntiān qǐ, túshūguǎn wǎnshang kāi mén.","Từ hôm nay thư viện mở cả buổi tối."]]},
 {t:"当 + sự việc + 的时候", sub:"（2）当", fx:[["当",null],["sự việc",""],["的时候",null],["，",""],["vế chính",""]], mean:"Khi.",
  ex:[["{1|当}{2|我回到家}{3|的时候}，{4|天已经黑了}。","Dāng wǒ huídào jiā de shíhou, tiān yǐjīng hēi le.","Khi tôi về đến nhà, trời đã tối."]]},
 {t:"随着 + sự thay đổi，kết quả", sub:"（3）随着", fx:[["随着",null],["sự thay đổi",""],["，",""],["thay đổi theo",""]], mean:"Cùng với.",
  ex:[["{1|随着}{2|经济的发展}，{3|人们的生活越来越好}。","Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó yuèláiyuè hǎo.","Cùng với kinh tế phát triển, đời sống ngày càng tốt."]]},
 {t:"等 + sự việc + (以后)，(再 / 就) …", sub:"（4）等", fx:[["等",null],["sự việc",""],["，",""],["再 / 就 + V",""]], mean:"Đợi đến khi.",
  ex:[["{1|等}{2|我做完作业}，{3|再跟你玩儿}。","Děng wǒ zuòwán zuòyè, zài gēn nǐ wánr.","Đợi mình làm xong bài rồi chơi với bạn."]]}],
cmp:[
 {vn:"Cùng với tuổi tác, trí nhớ kém đi.", zh:"[随着]年龄的增长，记忆力变差了。", py:"Suízhe niánlíng de zēngzhǎng, jìyìlì biànchà le.", ok:true, why:"随着 + cụm danh từ chỉ thay đổi."}],
ex:[
 ["他[自]小就喜欢画画儿。","Tā zìxiǎo jiù xǐhuan huà huàr.","Từ nhỏ anh ấy đã thích vẽ."],
 ["[随着]天气变暖，花都开了。","Suízhe tiānqì biàn nuǎn, huā dōu kāi le.","Trời ấm dần, hoa nở cả."],
 ["[等]你有时间了，我们一起去吧。","Děng nǐ yǒu shíjiān le, wǒmen yìqǐ qù ba.","Đợi bạn rảnh rồi mình cùng đi."]],
errs:[
 {bad:"随着他，我去商店。（muốn nói đi cùng anh ấy）", good:"我跟他一起去商店。", why:"随着 dùng cho sự thay đổi, không phải đi cùng người."},
 {bad:"当我回家，天黑了。", good:"当我回家的时候，天黑了。", why:"当 thường đi với 的时候."},
 {bad:"我等做完作业你再。", good:"等我做完作业你再来。", why:"等 đứng đầu vế điều kiện thời gian."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿科技的发展，手机越来越方便。", vi:"Cùng với công nghệ phát triển, điện thoại ngày càng tiện.", o:["随着","等","当"], a:0, why:"Thay đổi kéo theo → 随着."},
  {q:"＿雨停了再走吧。", vi:"Đợi tạnh mưa hãy đi.", o:["等","由","随着"], a:0, why:"Đợi đến → 等."},
  {q:"代表团＿北京出发。", vi:"Đoàn xuất phát từ Bắc Kinh.", o:["由","当","等"], a:0, why:"由 = từ."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["等","我做完作业，","再","跟你","玩儿"], a:"等我做完作业，再跟你玩儿。", vi:"Đợi mình làm xong bài rồi chơi với bạn."},
  {w:["随着","天气","变暖，","花","都开了"], a:"随着天气变暖，花都开了。", vi:"Trời ấm dần, hoa nở cả."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Từ nhỏ anh ấy đã thích vẽ.", a:"他自小就喜欢画画儿。/ 他从小就喜欢画画儿。/ 他从小就喜欢画画。"}]}],
rel:["二21","三20","三21"]
};
