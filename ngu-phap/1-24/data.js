// Bài ngữ pháp 【一24】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"一24", title:"主语", vi:"Chủ ngữ — danh từ, đại từ, cụm danh từ", tag:"句子成分 · 主语",
goals:[
 "Nhận ra chủ ngữ: người / vật được nói tới, đứng <b>đầu câu, trước vị ngữ</b>.",
 "Dùng danh từ, đại từ và <b>cụm danh từ</b> (这个房间、我的朋友) làm chủ ngữ.",
 "Giữ cả cụm chủ ngữ ở đầu câu, không tách phần bổ nghĩa ra sau."],
intro:"Câu tiếng Trung cơ bản: <b>Chủ ngữ + Vị ngữ</b>. Chủ ngữ ở HSK 1 là danh từ, đại từ hoặc cụm danh từ. Trật tự này giống tiếng Việt.",
rules:[
 {t:"Danh từ / đại từ / cụm danh từ làm chủ ngữ", sub:"名词、代词或名词性短语作主语", fx:[["Chủ ngữ",null],["Vị ngữ","động từ / tính từ…"]], mean:"Chủ ngữ đứng trước; mọi phần bổ nghĩa của nó (这个、我的…) đứng trước danh từ chính.",
  ex:[["[衣服]很好看。","Yīfu hěn hǎokàn.","Quần áo rất đẹp.","等级标准"],
      ["[他]在看电视。","Tā zài kàn diànshì.","Anh ấy đang xem ti vi.","等级标准"],
      ["[这个房间]很干净。","Zhège fángjiān hěn gānjìng.","Căn phòng này rất sạch.","等级标准"]]}],
notes:[
 {t:"Lược chủ ngữ", html:"Khi ngữ cảnh rõ, chủ ngữ có thể lược: <span class='zh'>——你去吗？——去。</span>"}],
cmp:[
 {vn:"Căn phòng này rất sạch.", zh:"[这个房间]很干净。", py:"Zhège fángjiān hěn gānjìng.", ok:true, why:"“này” đứng sau trong tiếng Việt; 这个 đứng trước 房间, nhưng cả cụm vẫn ở đầu câu."},
 {vn:"Bạn tôi là người Trung Quốc.", zh:"[我的朋友]是中国人。", py:"Wǒ de péngyou shì Zhōngguó rén.", ok:true, why:"“của tôi” đưa lên trước."}],
ex:[
 ["[我妈妈]是老师。","Wǒ māma shì lǎoshī.","Mẹ tôi là giáo viên."],
 ["[我们学校]很大。","Wǒmen xuéxiào hěn dà.","Trường chúng tôi rất rộng."],
 ["[这些苹果]很好吃。","Zhèxiē píngguǒ hěn hǎochī.","Những quả táo này rất ngon."],
 ["[中文]不太难。","Zhōngwén bú tài nán.","Tiếng Trung không khó lắm."]],
errs:[
 {bad:"房间这个很干净。", good:"这个房间很干净。", why:"这个 đứng trước danh từ."},
 {bad:"朋友我的是中国人。", good:"我的朋友是中国人。", why:"我的 đứng trước danh từ."},
 {bad:"在看电视他。", good:"他在看电视。", why:"Chủ ngữ đứng đầu câu."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Căn phòng này rất sạch.", o:["房间这个很干净。","这个房间很干净。","很干净这个房间。"], a:1, why:"这个 + N ở đầu câu."},
  {q:"Bạn tôi là người Trung Quốc.", o:["我的朋友是中国人。","朋友我的是中国人。","是中国人我的朋友。"], a:0, why:"Chủ ngữ + 是 + N."},
  {q:"Những quả táo này rất ngon.", o:["苹果这些很好吃。","这些苹果很好吃。","这些很好吃苹果。"], a:1, why:"这些 + N."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["这个","房间","很","干净"], a:"这个房间很干净。", vi:"Căn phòng này rất sạch."},
  {w:["我们","学校","很","大"], a:"我们学校很大。", vi:"Trường chúng tôi rất rộng."},
  {w:["我","妈妈","是","老师"], a:"我妈妈是老师。", vi:"Mẹ tôi là giáo viên."}]},
 {t:"C. Tìm chủ ngữ", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"我的新手机很好看。", vi:"Điện thoại mới của tôi rất đẹp.", a:"我的新手机"},
  {q:"那些学生都是越南人。", vi:"Những học sinh kia đều là người Việt Nam.", a:"那些学生"},
  {q:"今天很冷。", vi:"Hôm nay rất lạnh.", a:"今天"}]}],
rel:["一25","一26","一27","三43"]
};
