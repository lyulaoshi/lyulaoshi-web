// Bài ngữ pháp 【新4.50】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.50", title:"“把”字句2", vi:"Câu chữ “把” 2 — lặp động từ, động lượng, trạng ngữ", tag:"句子的类型 · 特殊句型",
goals:[
 "Đặt câu 把 với <b>V一V / V了V</b>: 把房间收拾一下.",
 "Đặt câu 把 với <b>V + 了</b> (mất đi, bỏ đi) và <b>V + số lần / thời lượng</b>.",
 "Đặt câu 把 với <b>trạng ngữ + V</b>: 把书往桌子上一放."],
intro:"【三54】 đã học 把 + bổ ngữ (放在, 送给, 做完). HSK 4 thêm <b>bốn kiểu “phần sau động từ”</b>. Quy tắc cũ vẫn đúng: động từ <b>không đứng trơn</b>.",
rules:[
 {t:"S + 把 + O + V (一 / 了) + V", sub:"（1）重叠", fx:[["S",""],["把",null],["O",""],["V (一/了) V",""]], mean:"Làm một chút / đã làm nhẹ một cái.",
  ex:[["{1|你}{2|把}{3|房间}{4|收拾收拾}。","Nǐ bǎ fángjiān shōushi shōushi.","Bạn dọn phòng một chút đi."],
      ["{1|他}{2|把}{3|手}{4|摇了摇}。","Tā bǎ shǒu yáole yáo.","Anh ấy xua xua tay."]]},
 {t:"S + 把 + O + V + 了", sub:"（2）V了", fx:[["S",""],["把",null],["O",""],["V了",""]], mean:"Dùng với động từ có nghĩa “mất, hết”: 丢, 忘, 卖, 吃, 喝, 扔.",
  ex:[["{1|我}{2|把}{3|钱包}{4|丢了}。","Wǒ bǎ qiánbāo diū le.","Tôi làm mất ví rồi."]]},
 {t:"S + 把 + O + V + số lần / thời lượng", sub:"（3）补语", fx:[["S",""],["把",null],["O",""],["V (了)",""],["三遍 / 一个小时",""]], mean:"Làm mấy lần / dời bao lâu.",
  ex:[["{1|我}{2|把}{3|课文}{4|读了}{5|三遍}。","Wǒ bǎ kèwén dúle sān biàn.","Tôi đọc bài khóa ba lần."],
      ["{1|经理}{2|把}{3|会议}{4|推迟了}{5|一个小时}。","Jīnglǐ bǎ huìyì tuīchíle yí gè xiǎoshí.","Giám đốc hoãn cuộc họp một tiếng."]]},
 {t:"S + 把 + O + trạng ngữ + V", sub:"（4）状语", fx:[["S",""],["把",null],["O",""],["往桌子上 / 到处",""],["一V / 乱V",""]], mean:"Trạng ngữ đứng ngay trước động từ.",
  ex:[["{1|他}{2|把}{3|书包}{4|往床上}{5|一扔}，就出去了。","Tā bǎ shūbāo wǎng chuáng shang yì rēng, jiù chūqu le.","Nó quăng cặp lên giường rồi đi ra ngoài."],
      ["{1|别}{2|把}{3|东西}{4|到处}{5|乱放}。","Bié bǎ dōngxi dàochù luàn fàng.","Đừng để đồ lung tung khắp nơi."]]}],
cmp:[
 {vn:"Bạn đọc bài khóa hai lần đi.", zh:"{1|你}{2|把}{3|课文}{4|读}{5|两遍}。", py:"Nǐ bǎ kèwén dú liǎng biàn.", ok:true, why:"Số lần đứng sau động từ, giống tiếng Việt."}],
ex:[
 ["你{2|把}{3|这件事}{4|考虑考虑}。","Nǐ bǎ zhè jiàn shì kǎolǜ kǎolǜ.","Bạn cân nhắc việc này một chút."],
 ["他{2|把}{3|生日}{4|忘了}。","Tā bǎ shēngrì wàng le.","Anh ấy quên mất ngày sinh nhật."],
 ["妈妈{2|把}{3|菜}{4|又热了一下}。","Māma bǎ cài yòu rèle yíxià.","Mẹ hâm lại thức ăn một chút."],
 ["她{2|把}{3|头发}{4|往后一梳}，显得很精神。","Tā bǎ tóufa wǎng hòu yì shū, xiǎnde hěn jīngshen.","Cô ấy chải tóc ra sau, trông rất tươi tỉnh."]],
errs:[
 {bad:"你把房间收拾。", good:"你把房间收拾收拾。/ 你把房间收拾一下。", why:"Động từ sau 把 không đứng trơn."},
 {bad:"我把课文三遍读了。", good:"我把课文读了三遍。", why:"Số lần đứng sau động từ."},
 {bad:"别把东西放到处乱。", good:"别把东西到处乱放。", why:"Trạng ngữ đứng trước động từ."},
 {bad:"我把一个钱包丢了。", good:"我把钱包丢了。", why:"Tân ngữ của 把 là vật đã xác định."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Bạn dọn phòng một chút đi.", o:["你把房间收拾。","你把房间收拾收拾。","你收拾把房间收拾。"], a:1, why:"V重叠."},
  {q:"Tôi đọc bài khóa ba lần.", o:["我把课文读了三遍。","我把课文三遍读了。"], a:0, why:"V + số lần."},
  {q:"Đừng để đồ lung tung.", o:["别把东西乱放。","把别东西乱放。","别把东西放乱。"], a:0, why:"别 + 把 + O + 乱 + V."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["经理","把","会议","推迟了","一个小时"], a:"经理把会议推迟了一个小时。", vi:"Giám đốc hoãn cuộc họp một tiếng."},
  {w:["他","把","书包","往床上","一扔"], a:"他把书包往床上一扔。", vi:"Nó quăng cặp lên giường."},
  {w:["我","把","钱包","丢","了"], a:"我把钱包丢了。", vi:"Tôi làm mất ví rồi."}]},
 {t:"C. Dịch sang tiếng Trung (dùng 把)", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bạn cân nhắc việc này một chút.", a:"你把这件事考虑考虑。/ 你把这件事考虑一下。"},
  {q:"Anh ấy quên mất ngày sinh nhật.", a:"他把生日忘了。"}]},
 {t:"D. Đúng hay sai?", sub:"câu này đúng hay sai — sai thì sửa thế nào?", type:"choice", items:[
  {q:"请你把窗户擦擦。", vi:"Bạn lau cửa sổ một chút.", o:["Đúng","Sai"], a:0, why:"V重叠 dùng được sau 把."},
  {q:"我把那本书看。", vi:"Tôi đọc quyển sách đó.", o:["Đúng","Sai"], a:1, why:"Động từ đứng trơn: 我把那本书看了一遍。"},
  {q:"他把作业两个小时做了。", vi:"Anh ấy làm bài tập hai tiếng.", o:["Đúng","Sai"], a:1, why:"Câu này nên nói: 他做作业做了两个小时。"},
  {q:"你别把垃圾到处扔。", vi:"Bạn đừng vứt rác khắp nơi.", o:["Đúng","Sai"], a:0, why:"Trạng ngữ 到处 đứng trước động từ."}]},
 {t:"E. Điền vào chỗ trống", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"你把这个句子再念一＿。", vi:"Bạn đọc câu này lại một lần.", o:["遍","个","本"], a:0, why:"Số lần: 一遍."},
  {q:"她把眼睛擦了＿擦。", vi:"Cô ấy dụi dụi mắt.", o:["了","一了","过"], a:0, why:"V了V."},
  {q:"他把帽子＿头上一戴。", vi:"Anh ấy đội phắt mũ lên đầu.", o:["往","从","离"], a:0, why:"往 + nơi chốn + 一V."}]},
 {t:"F. Dịch thêm", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Bạn đọc bài khóa hai lần đi (dùng 把).", a:"你把课文读两遍。/ 你把课文读两遍吧。/ 请把课文读两遍。"},
  {q:"Đừng để đồ lung tung khắp nơi.", a:"别把东西到处乱放。/ 不要把东西到处乱放。"}]}],
rel:["三54","三55","二04"]
};
