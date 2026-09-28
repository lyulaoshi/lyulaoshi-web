// Bài ngữ pháp 【二77】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二77", title:"用“呢”构成的省略式疑问句提问", vi:"Câu hỏi tỉnh lược với 呢 — “Còn … thì sao?”, “… đâu?”", tag:"提问的方法",
goals:[
 "Hỏi lại cùng một ý cho người / vật khác bằng <b>đại từ / danh từ + 呢？</b> (còn … thì sao?).",
 "Hỏi vị trí bằng <b>N + 呢？</b> (… đâu rồi?) khi không có ngữ cảnh trước.",
 "Không thêm 吗 hay từ để hỏi vào câu này."],
intro:"Câu hỏi rút gọn: chỉ cần <b>một danh từ / đại từ + 呢</b>. Nghĩa được hiểu theo câu nói trước đó.",
rules:[
 {t:"(Câu trước)，đại từ / danh từ + 呢？", sub:"省略式", fx:[["(Ngữ cảnh)",""],["Đại từ / danh từ",""],["呢",null],["？",""]], mean:"Còn … thì sao? / … đâu?",
  ex:[["我去医院，你[呢]？","Wǒ qù yīyuàn, nǐ ne?","Tôi đi bệnh viện, còn bạn?","等级标准"],
      ["书在桌子上，笔[呢]？","Shū zài zhuōzi shang, bǐ ne?","Sách ở trên bàn, còn bút đâu?","等级标准"]]}],
cmp:[
 {vn:"Tôi khỏe, còn bạn?", zh:"我很好，你[呢]？", py:"Wǒ hěn hǎo, nǐ ne?", ok:true, why:"“còn bạn” = 你呢."},
 {vn:"Điện thoại của tôi đâu rồi?", zh:"我的手机[呢]？", py:"Wǒ de shǒujī ne?", ok:true, why:"Không ngữ cảnh → hỏi vị trí."}],
ex:[
 ["我是越南人，你[呢]？","Wǒ shì Yuènán rén, nǐ ne?","Tôi là người Việt Nam, còn bạn?"],
 ["妈妈在家，爸爸[呢]？","Māma zài jiā, bàba ne?","Mẹ ở nhà, còn bố?"],
 ["我的钥匙[呢]？","Wǒ de yàoshi ne?","Chìa khóa của tôi đâu?"]],
errs:[
 {bad:"我很好，你吗？", good:"我很好，你呢？", why:"Hỏi rút gọn dùng 呢."},
 {bad:"我的手机在哪儿呢吗？", good:"我的手机呢？/ 我的手机在哪儿？", why:"Không chồng dấu hiệu hỏi."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Tôi khỏe, còn bạn?", o:["我很好，你吗？","我很好，你呢？","我很好，呢你？"], a:1, why:"你呢."},
  {q:"Chìa khóa của tôi đâu?", o:["我的钥匙呢？","我的钥匙吗？","呢我的钥匙？"], a:0, why:"N + 呢."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我","去医院","你","呢"], a:"我去医院，你呢？", vi:"Tôi đi bệnh viện, còn bạn?"},
  {w:["书在桌子上","笔","呢"], a:"书在桌子上，笔呢？", vi:"Sách ở trên bàn, còn bút đâu?"}]},
 {t:"C. Hỏi lại bằng 呢", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我喜欢喝茶。(hỏi bạn)", vi:"Tôi thích uống trà.", a:"我喜欢喝茶，你呢？"},
  {q:"Mẹ ở nhà. (hỏi về bố)", a:"妈妈在家，爸爸呢？"}]}],
rel:["一22","一45","二79","二78"]
};
