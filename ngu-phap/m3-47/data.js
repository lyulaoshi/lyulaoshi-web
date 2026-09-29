// Bài ngữ pháp 【新3.47】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新3.47", title:"多项定语", vi:"Định ngữ nhiều tầng — 我的那本新汉语书", tag:"句子成分 · 定语",
goals:[
 "Xếp nhiều định ngữ trước danh từ theo đúng thứ tự.",
 "Nhớ khung: <b>của ai + 这/那 + số lượng + tính chất + danh từ</b>.",
 "Đặt 的 đúng chỗ (sau người sở hữu, sau cụm dài)."],
intro:"Tiếng Việt xếp bổ nghĩa <b>sau</b> danh từ (“quyển sách tiếng Trung mới đó của tôi”). Tiếng Trung xếp <b>tất cả trước</b> danh từ, theo thứ tự cố định — ngược hẳn tiếng Việt.",
rules:[
 {t:"Sở hữu + 的 + chỉ thị + số lượng + tính chất + N", sub:"顺序", fx:[["của ai + 的",""],["这 / 那",""],["số + lượng từ",""],["tính chất (新 / 大 / 汉语…)",""],["Danh từ",null]], mean:"",
  ex:[["{1|我的}{2|那}{3|本}{4|新汉语}{5|书}","wǒ de nà běn xīn Hànyǔ shū","quyển sách tiếng Trung mới đó của tôi"],
      ["{1|他的}{2|这}{3|两个}{4|好}{5|朋友}","tā de zhè liǎng gè hǎo péngyou","hai người bạn thân này của anh ấy"],
      ["{1|学校的}{2|那}{3|家}{4|中国}{5|饭店}","xuéxiào de nà jiā Zhōngguó fàndiàn","nhà hàng Trung Quốc đó của trường"]]}],
notes:[{t:"Mẹo nhớ", html:"Đọc tiếng Việt <b>từ cuối lên</b>: “quyển sách tiếng Trung mới đó <u>của tôi</u>” → 我的 → 那本 → 新 → 汉语书."}],
cmp:[
 {vn:"chiếc áo đỏ mới mua đó của mẹ", zh:"{1|妈妈的}{2|那}{3|件}{4|新买的红}{5|衣服}", py:"māma de nà jiàn xīn mǎi de hóng yīfu", ok:false, tag:"(trật tự ngược)", why:"Tiếng Trung: của ai → 这/那 → số lượng → tính chất → danh từ."}],
ex:[
 ["我喜欢[我们班的那个新]老师。","Wǒ xǐhuan wǒmen bān de nàge xīn lǎoshī.","Tôi thích cô giáo mới đó của lớp mình."],
 ["[他的两个中国]朋友明天来。","Tā de liǎng gè Zhōngguó péngyou míngtiān lái.","Hai người bạn Trung Quốc của anh ấy mai đến."]],
errs:[
 {bad:"那本我的新书", good:"我的那本新书", why:"Người sở hữu (我的) đứng đầu tiên."},
 {bad:"我的新那本书", good:"我的那本新书", why:"这 / 那 + số lượng đứng trước tính chất."},
 {bad:"书新我的", good:"我的新书", why:"Mọi định ngữ đứng trước danh từ."}],
practice:[
 {t:"A. Chọn cụm đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"quyển sách mới đó của tôi", o:["那本我的新书","我的那本新书","我的新那本书"], a:1, why:"của ai → 那本 → 新 → 书."},
  {q:"hai người bạn Trung Quốc của anh ấy", o:["他的两个中国朋友","两个他的中国朋友"], a:0, why:"Sở hữu đứng đầu."}]},
 {t:"B. Sắp xếp thành cụm", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["我的","那","本","新","汉语书"], a:"我的那本新汉语书", vi:"quyển sách tiếng Trung mới đó của tôi"},
  {w:["学校的","那","家","中国","饭店"], a:"学校的那家中国饭店", vi:"nhà hàng Trung Quốc đó của trường"}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"hai người bạn thân này của anh ấy", a:"他的这两个好朋友"},
  {q:"cái điện thoại mới đó của tôi", a:"我的那个新手机"}]}],
rel:["一27","三45","二38","一20"]
};
