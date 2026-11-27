// Bài ngữ pháp 【新4.15】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新4.15", title:"介词：作为、按、按照（引出凭借、依据）", vi:"作为, 按, 按照 — với tư cách, theo", tag:"词类 · 介词",
goals:[
 "Dùng <b>作为</b>: với tư cách là …",
 "Dùng <b>按 / 按照</b>: theo (quy định, kế hoạch).",
 "Phân biệt 按 và 按照."],
intro:"<b>作为</b>老师 = “<b>là</b> một giáo viên thì …”. Sau đó chủ ngữ phải chính là người ấy.",
rules:[
 {t:"作为 + thân phận，S + …", sub:"（1）作为", fx:[["作为",null],["thân phận",""],["，",""],["S + 应该…",""]], mean:"Với tư cách là.",
  ex:[["{1|作为}{2|学生}，{3|我们应该认真学习}。","Zuòwéi xuésheng, wǒmen yīnggāi rènzhēn xuéxí.","Là học sinh, chúng ta nên học chăm."],
      ["{1|作为}{2|父母}，{3|他们很担心孩子}。","Zuòwéi fùmǔ, tāmen hěn dānxīn háizi.","Làm cha mẹ, họ rất lo cho con."]]},
 {t:"按 / 按照 + căn cứ + V", sub:"（2）按、按照", fx:[["按 / 按照",null],["quy định / kế hoạch",""],["V",""]], mean:"Theo. 按 đi được với từ một âm tiết (按时, 按天).",
  ex:[["请{1|按照}{2|老师的要求}{3|做}。","Qǐng ànzhào lǎoshī de yāoqiú zuò.","Hãy làm theo yêu cầu của thầy."],
      ["房租{1|按}{2|月}{3|交}。","Fángzū àn yuè jiāo.","Tiền nhà nộp theo tháng."]]}],
cmp:[
 {vn:"Là bạn của anh, tôi khuyên anh nghỉ ngơi.", zh:"[作为]你的朋友，我劝你休息一下。", py:"Zuòwéi nǐ de péngyou, wǒ quàn nǐ xiūxi yíxià.", ok:true, why:"Chủ ngữ 我 chính là người bạn."}],
ex:[
 ["[作为]一名医生，他每天都很忙。","Zuòwéi yì míng yīshēng, tā měi tiān dōu hěn máng.","Là bác sĩ, ngày nào anh ấy cũng bận."],
 ["我们[按]计划完成了工作。","Wǒmen àn jìhuà wánchéngle gōngzuò.","Chúng tôi hoàn thành công việc theo kế hoạch."],
 ["[按照]规定，这里不能抽烟。","Ànzhào guīdìng, zhèlǐ bù néng chōuyān.","Theo quy định, ở đây không được hút thuốc."]],
errs:[
 {bad:"作为学生，老师要求很高。", good:"对学生，老师要求很高。", why:"Chủ ngữ sau 作为 phải là chính người mang thân phận đó."},
 {bad:"房租按照月交。", good:"房租按月交。", why:"Trước từ một âm tiết dùng 按."},
 {bad:"请做按照老师的要求。", good:"请按照老师的要求做。", why:"Cụm giới từ đứng trước động từ."}],
practice:[
 {t:"A. Chọn từ đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"＿学生，我们应该按时上课。", vi:"Là học sinh, chúng ta nên đi học đúng giờ.", o:["作为","按照","由于"], a:0, why:"Thân phận → 作为."},
  {q:"工资＿天算。", vi:"Lương tính theo ngày.", o:["按","按照","作为"], a:0, why:"Trước 天 dùng 按."},
  {q:"请＿说明书使用。", vi:"Hãy dùng theo bản hướng dẫn.", o:["按照","作为","随着"], a:0, why:"Căn cứ → 按照."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我们","按计划","完成了","工作"], a:"我们按计划完成了工作。", vi:"Chúng tôi hoàn thành công việc theo kế hoạch."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Theo quy định, ở đây không được hút thuốc.", a:"按照规定，这里不能抽烟。/ 按规定，这里不能抽烟。/ 按照规定，这儿不能抽烟。"}]}],
rel:["三29","新5.14","新3.25"]
};
