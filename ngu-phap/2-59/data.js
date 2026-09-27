// Bài ngữ pháp 【二59】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二59", title:"比较句3", vi:"Câu so sánh 3 — A 跟 B 一样 / 相同 (giống nhau, bằng nhau)", tag:"句子的类型 · 特殊句型",
goals:[
 "Nói hai thứ giống nhau: <b>A 跟 / 和 B 一样 / 相同</b>.",
 "Nói bằng nhau về một đặc điểm: <b>A 跟 B 一样 + Adj</b>.",
 "Phủ định: <b>A 跟 B 不一样</b>."],
intro:"So sánh ngang bằng: tiếng Việt “A cao <b>bằng</b> B”, “A <b>giống</b> B”. Tiếng Trung: <b>A 跟 B 一样(高)</b> — B và 一样 đứng trước tính từ.",
rules:[
 {t:"A 跟 / 和 B 一样 / 相同", sub:"（1）", fx:[["A",""],["跟 / 和",null],["B",""],["(不)一样 / 相同",null]], mean:"Giống / khác nhau.",
  ex:[["我的爱好跟姐姐[一样]。","Wǒ de àihào gēn jiějie yíyàng.","Sở thích của tôi giống chị gái.","等级标准"],
      ["他的想法跟我[相同]。","Tā de xiǎngfǎ gēn wǒ xiāngtóng.","Suy nghĩ của anh ấy giống tôi.","等级标准"],
      ["哥哥的手机跟我的[不一样]。","Gēge de shǒujī gēn wǒ de bù yíyàng.","Điện thoại của anh trai khác của tôi.","等级标准"],
      ["我跟她[一样]，都是这个学校的学生。","Wǒ gēn tā yíyàng, dōu shì zhège xuéxiào de xuésheng.","Tôi cũng như cô ấy, đều là học sinh trường này.","等级标准"]]},
 {t:"A 跟 B 一样 + Adj", sub:"（2）", fx:[["A 跟 B",""],["一样",null],["Tính từ",""]], mean:"A … bằng B.",
  ex:[["姐姐跟妹妹[一样]可爱。","Jiějie gēn mèimei yíyàng kě'ài.","Chị đáng yêu như em."],
      ["哥哥和弟弟[一样]高。","Gēge hé dìdi yíyàng gāo.","Anh cao bằng em.","等级标准"]]}],
cmp:[
 {vn:"Anh cao bằng em.", zh:"哥哥和弟弟[一样]高。", py:"Gēge hé dìdi yíyàng gāo.", ok:true, why:"“bằng em” → 和弟弟一样, đứng trước 高."},
 {vn:"Của tôi khác của bạn.", zh:"我的跟你的[不一样]。", py:"Wǒ de gēn nǐ de bù yíyàng.", ok:true, why:"Phủ định: 不一样."}],
ex:[
 ["这两件衣服[一样]贵。","Zhè liǎng jiàn yīfu yíyàng guì.","Hai chiếc áo này đắt như nhau."],
 ["北京的天气跟河内[不一样]。","Běijīng de tiānqì gēn Hénèi bù yíyàng.","Thời tiết Bắc Kinh khác Hà Nội."],
 ["你的书跟我的[一样]。","Nǐ de shū gēn wǒ de yíyàng.","Sách của bạn giống của tôi."]],
errs:[
 {bad:"哥哥高一样弟弟。", good:"哥哥跟弟弟一样高。", why:"跟 B 一样 + Adj."},
 {bad:"哥哥跟弟弟一样很高。", good:"哥哥跟弟弟一样高。", why:"Không dùng 很."},
 {bad:"我的手机跟你的一样不。", good:"我的手机跟你的不一样。", why:"不 trước 一样."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Anh cao bằng em.", o:["哥哥高一样弟弟。","哥哥跟弟弟一样高。","哥哥跟弟弟一样很高。"], a:1, why:"跟 B 一样 Adj."},
  {q:"Của tôi khác của bạn.", o:["我的跟你的不一样。","我的跟你的一样不。","我的不跟你的一样。"], a:0, why:"不一样."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我的爱好","跟","姐姐","一样"], a:"我的爱好跟姐姐一样。", vi:"Sở thích của tôi giống chị gái."},
  {w:["哥哥","和","弟弟","一样","高"], a:"哥哥和弟弟一样高。", vi:"Anh cao bằng em."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Thời tiết Bắc Kinh khác Hà Nội.", a:"北京的天气跟河内不一样。"},
  {q:"Hai chiếc áo này đắt như nhau.", a:"这两件衣服一样贵。"}]}],
rel:["二58","一38","一17","三58"]
};
