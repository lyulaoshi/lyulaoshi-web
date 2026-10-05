// Bài ngữ pháp 【三63】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三63", title:"并列复句：又……，又……", vi:"又…，又… — vừa …, vừa … (nối hai vế câu)", tag:"句子的类型 · 复句",
goals:[
 "Nối hai <b>vế câu</b> (có dấu phẩy) cùng xảy ra / cùng đúng bằng 又……，又…….",
 "Đặt 又 trước động từ / tính từ của mỗi vế."],
intro:"【二46】 đã có 又 A 又 B trong một cụm ngắn (又高又大). Ở HSK 3, 又 nối <b>hai vế câu</b> dài hơn, mỗi vế có thể có tân ngữ, chủ ngữ riêng.",
rules:[
 {t:"(S) + 又 + V/Adj1 (…)，(S) + 又 + V/Adj2 (…)", sub:"并列", fx:[["又",null],["vế 1",""],["·",""],["又",null],["vế 2",""]], mean:"",
  ex:[["晚会上大家[又]唱歌，[又]跳舞，高兴极了。","Wǎnhuì shang dàjiā yòu chàng gē, yòu tiào wǔ, gāoxìng jí le.","Ở dạ hội mọi người vừa hát vừa nhảy, vui vô cùng.","等级标准"],
      ["这件衣服样子[又]好看，价格[又]便宜。","Zhè jiàn yīfu yàngzi yòu hǎokàn, jiàgé yòu piányi.","Chiếc áo này kiểu dáng vừa đẹp, giá lại vừa rẻ.","等级标准"]]}],
cmp:[
 {vn:"Căn phòng này vừa rộng vừa sáng.", zh:"这个房间[又]大[又]亮。", py:"Zhège fángjiān yòu dà yòu liàng.", ok:true, why:"Không dùng <svg class='lli no' aria-hidden='true'><use href='/chung/ic.svg?v=c0a8a094#sai'/></svg> 很大很亮 để nói “vừa … vừa”."}],
ex:[
 ["他[又]会唱歌，[又]会跳舞。","Tā yòu huì chàng gē, yòu huì tiào wǔ.","Anh ấy vừa biết hát, vừa biết nhảy."]],
errs:[
 {bad:"这件衣服又好看，价格便宜。", good:"这件衣服样子又好看，价格又便宜。", why:"Hai vế đều cần 又."},
 {bad:"这个房间又大，又不亮。", good:"这个房间又大又亮。/ 这个房间大是大，就是不亮。", why:"又…又… nối hai ý cùng chiều; trái chiều thì dùng 但是 / 就是."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Áo này kiểu vừa đẹp, giá vừa rẻ.", o:["样子又好看，价格又便宜。","样子又好看，价格便宜又。"], a:0, why:"又 + Adj."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["大家","又","唱歌，","又","跳舞"], a:"大家又唱歌，又跳舞。", vi:"Mọi người vừa hát vừa nhảy."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Anh ấy vừa biết hát, vừa biết nhảy.", a:"他又会唱歌，又会跳舞。/ 他又会唱歌又会跳舞。"}]}],
rel:["三60","三61","二46","三66"]
};
