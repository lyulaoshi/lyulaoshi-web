// Bài ngữ pháp 【新5.29】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新5.29", title:"“有”字句3：表示存在、具有；表示附着", vi:"Câu chữ 有 3 — 有着, V + 有", tag:"句子的类型 · 特殊句型",
goals:[
 "Dùng <b>有着 + danh từ trừu tượng</b> để nói “mang, có”.",
 "Dùng <b>động từ + 有</b> để nói trên đó có gì (viết, vẽ, treo…).",
 "Dùng trong văn miêu tả."],
intro:"<b>有着</b> trang trọng hơn 有, đi với lịch sử, ý nghĩa, quan hệ. <b>写有, 画有</b> = “có viết, có vẽ”.",
rules:[
 {t:"S + 有着 + danh từ", sub:"（1）tồn tại, sở hữu", fx:[["S",""],["有着",null],["định ngữ + danh từ",""]], mean:"Mang, có (trừu tượng).",
  ex:[["{1|中国}{2|有着}{3|悠久的历史}。","Zhōngguó yǒuzhe yōujiǔ de lìshǐ.","Trung Quốc có lịch sử lâu đời."],
      ["{1|两国之间}{2|有着}{3|密切的关系}。","Liǎng guó zhījiān yǒuzhe mìqiè de guānxi.","Hai nước có quan hệ mật thiết."]]},
 {t:"Nơi / vật + V + 有 + danh từ", sub:"（2）gắn trên đó", fx:[["nơi / vật",""],["V (写、画、挂…)",""],["有",null],["danh từ",""]], mean:"Trên đó có …",
  ex:[["{1|信封上}{2|写}{3|有}{4|他的地址}。","Xìnfēng shang xiěyǒu tā de dìzhǐ.","Trên phong bì có ghi địa chỉ của anh ấy."],
      ["{1|杯子上}{2|印}{3|有}{4|一朵花}。","Bēizi shang yìnyǒu yì duǒ huā.","Trên cốc có in một bông hoa."]]}],
cmp:[
 {vn:"Công việc này mang ý nghĩa quan trọng.", zh:"这项工作[有着]重要的意义。", py:"Zhè xiàng gōngzuò yǒuzhe zhòngyào de yìyì.", ok:true, why:"有着 + 意义."}],
ex:[
 ["他对音乐[有着]浓厚的兴趣。","Tā duì yīnyuè yǒuzhe nónghòu de xìngqù.","Anh ấy rất hứng thú với âm nhạc."],
 ["墙上挂[有]一幅地图。","Qiáng shang guàyǒu yì fú dìtú.","Trên tường có treo một tấm bản đồ."],
 ["这本书上写[有]我的名字。","Zhè běn shū shang xiěyǒu wǒ de míngzi.","Trong sách này có ghi tên tôi."]],
errs:[
 {bad:"我有着两块钱。", good:"我有两块钱。", why:"有着 dùng với danh từ trừu tượng, không dùng cho đồ vật đếm cụ thể."},
 {bad:"信封上有写他的地址。", good:"信封上写有他的地址。", why:"Động từ đứng trước 有."},
 {bad:"墙上挂有着一幅画。", good:"墙上挂着一幅画。/ 墙上挂有一幅画。", why:"Chọn 着 hoặc 有, không dùng cả hai."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trung Quốc có lịch sử lâu đời.", o:["中国有着悠久的历史。","中国历史有着悠久。"], a:0, why:"有着 + định ngữ + danh từ."},
  {q:"杯子上印＿一朵花。", vi:"Trên cốc có in một bông hoa.", o:["有","在","给"], a:0, why:"V + 有."},
  {q:"Câu nào dùng 有着 đúng?", o:["他对中国文化有着很深的了解。","桌子上有着一支笔钱。"], a:0, why:"Danh từ trừu tượng."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["两国之间","有着","密切的","关系"], a:"两国之间有着密切的关系。", vi:"Hai nước có quan hệ mật thiết."},
  {w:["信封上","写","有","他的","地址"], a:"信封上写有他的地址。", vi:"Trên phong bì có ghi địa chỉ."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Trên tường có treo một tấm bản đồ (dùng 挂有).", a:"墙上挂有一幅地图。/ 墙上挂有一张地图。"},
  {q:"Công việc này mang ý nghĩa quan trọng (dùng 有着).", a:"这项工作有着重要的意义。/ 这个工作有着重要的意义。"}]}],
rel:["一37","二56","二55"]
};
