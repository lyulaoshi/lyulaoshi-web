// Bài ngữ pháp 【新3.45】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新3.45", title:"在……上/下/中", vi:"在……上 / 下 / 中 — về mặt; dưới (sự giúp đỡ); trong (quá trình)", tag:"短语 · 固定格式",
goals:[
 "Dùng <b>在……上</b> = về mặt, trong lĩnh vực: 在学习上.",
 "Dùng <b>在……下</b> = dưới (sự giúp đỡ, điều kiện): 在老师的帮助下.",
 "Dùng <b>在……中</b> = trong (quá trình, hoạt động): 在比赛中."],
intro:"Đây không phải vị trí thật (trên bàn, dưới ghế) mà là nghĩa <b>trừu tượng</b>. Cả cụm đứng <b>trước động từ</b> hoặc ở đầu câu.",
rules:[
 {t:"在 + lĩnh vực + 上", sub:"在……上", fx:[["在",null],["lĩnh vực",""],["上",null]], mean:"Về mặt …",
  ex:[["他[在学习上]很努力。","Tā zài xuéxí shang hěn nǔlì.","Về mặt học tập, anh ấy rất chăm chỉ."],
      ["[在工作上]，她帮了我很多。","Zài gōngzuò shang, tā bāngle wǒ hěn duō.","Trong công việc, chị ấy giúp tôi rất nhiều."]]},
 {t:"在 + (ai) 的帮助 + 下", sub:"在……下", fx:[["在",null],["điều kiện / sự giúp đỡ",""],["下",null]], mean:"Dưới (sự giúp đỡ, điều kiện) …",
  ex:[["[在老师的帮助下]，我的中文进步了。","Zài lǎoshī de bāngzhù xià, wǒ de Zhōngwén jìnbù le.","Nhờ sự giúp đỡ của thầy, tiếng Trung của tôi tiến bộ."]]},
 {t:"在 + hoạt động + 中", sub:"在……中", fx:[["在",null],["hoạt động / quá trình",""],["中",null]], mean:"Trong (quá trình) …",
  ex:[["[在比赛中]，他跑得最快。","Zài bǐsài zhōng, tā pǎo de zuì kuài.","Trong cuộc thi, anh ấy chạy nhanh nhất."]]}],
cmp:[
 {vn:"Nhờ bạn bè giúp, tôi tìm được việc.", zh:"[在朋友的帮助下]，我找到了工作。", py:"Zài péngyou de bāngzhù xià, wǒ zhǎodàole gōngzuò.", ok:true, why:"“nhờ sự giúp đỡ của …” = 在……的帮助下, đặt đầu câu."}],
ex:[
 ["[在生活上]，他很简单。","Zài shēnghuó shang, tā hěn jiǎndān.","Về mặt sinh hoạt, anh ấy rất đơn giản."],
 ["[在学习中]，有问题就问老师。","Zài xuéxí zhōng, yǒu wèntí jiù wèn lǎoshī.","Trong quá trình học, có vấn đề thì hỏi thầy."]],
errs:[
 {bad:"老师的帮助下，我进步了。", good:"在老师的帮助下，我进步了。", why:"Không bỏ 在."},
 {bad:"在老师的帮助中，我进步了。", good:"在老师的帮助下，我进步了。", why:"帮助 đi với 下: 在……的帮助下."},
 {bad:"他很努力在学习上。", good:"他在学习上很努力。", why:"Cụm 在……上 đứng trước vị ngữ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Nhờ sự giúp đỡ của thầy, tôi tiến bộ.", o:["在老师的帮助中，我进步了。","在老师的帮助下，我进步了。"], a:1, why:"帮助 + 下."},
  {q:"Về mặt học tập, anh ấy rất chăm.", o:["他在学习上很努力。","他很努力在学习上。"], a:0, why:"在……上 trước vị ngữ."},
  {q:"在比赛＿，他跑得最快。", vi:"Trong cuộc thi, anh ấy chạy nhanh nhất.", o:["中","下"], a:0, why:"Trong quá trình → 中."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["在","工作上，","她","帮了我","很多"], a:"在工作上，她帮了我很多。", vi:"Trong công việc, chị ấy giúp tôi rất nhiều."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Nhờ bạn bè giúp, tôi tìm được việc.", a:"在朋友的帮助下，我找到了工作。"}]}],
rel:["一16","一01","三40","新3.33"]
};
