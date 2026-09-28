// Bài ngữ pháp 【三78】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"三78", title:"用疑问语调表示疑问", vi:"Hỏi bằng ngữ điệu — câu kể lên giọng thành câu hỏi", tag:"提问的方法",
goals:[
 "Biến câu kể thành câu hỏi <b>chỉ bằng lên giọng cuối câu</b> (viết thêm “？”).",
 "Hiểu sắc thái: <b>ngạc nhiên, muốn xác nhận lại</b>."],
intro:"Không cần 吗, không cần từ để hỏi: đọc lên giọng ở cuối câu. Tiếng Việt cũng có: “Hôm nay thứ Bảy?”",
rules:[
 {t:"Câu kể + ？ (lên giọng)", sub:"语调", fx:[["Câu kể",""],["↗ ？",null]], mean:"",
  ex:[["今天是星期六[？]","Jīntiān shì xīngqīliù?","Hôm nay thứ Bảy à?","等级标准"],
      ["你打算去旅行[？]","Nǐ dǎsuàn qù lǚxíng?","Bạn định đi du lịch à?","等级标准"]]}],
cmp:[
 {vn:"Bạn không đi à?", zh:"你不去[？]", py:"Nǐ bú qù?", ok:true, why:"Lên giọng cuối câu, thể hiện ngạc nhiên."}],
ex:[
 ["他是你哥哥[？]","Tā shì nǐ gēge?","Anh ấy là anh trai bạn á?"],
 ["你已经吃完了[？]","Nǐ yǐjīng chīwán le?","Bạn ăn xong rồi á?"]],
errs:[
 {bad:"你打算去旅行。（muốn hỏi）", good:"你打算去旅行？", why:"Khi viết, câu hỏi phải có dấu “？”; khi nói, phải lên giọng."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"“你打算去旅行？” mang sắc thái gì?", vi:"Bạn định đi du lịch à?", o:["Ngạc nhiên, muốn xác nhận lại","Ra lệnh"], a:0, why:"Hỏi bằng ngữ điệu = ngạc nhiên, xác nhận."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["他","是","你","哥哥","？"], a:"他是你哥哥？", vi:"Anh ấy là anh trai bạn á?"}]},
 {t:"C. Dịch sang tiếng Trung (không dùng 吗)", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Bạn không đi à?", a:"你不去？"},
  {q:"Hôm nay thứ Bảy à?", a:"今天是星期六？/ 今天星期六？"}]}],
rel:["一45","二79","二78","三76"]
};
