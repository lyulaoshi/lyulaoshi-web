// Bài ngữ pháp 【新3.59】 — điểm chỉ có trong đề cương thi HSK mới 2025. Câu ví dụ do cô / Lyu Laoshi soạn.
window.NP_LESSON={
code:"新3.59", title:"存现句3：表示出现、消失", vi:"Câu tồn hiện 3 — ở đâu xuất hiện / mất đi ai, cái gì", tag:"句子的类型 · 特殊句型",
goals:[
 "Nói <b>ở đâu xuất hiện</b> ai / cái gì: nơi chốn + V + 来 / 出 (+了) + số lượng + người/vật.",
 "Nói <b>ở đâu mất đi</b> ai / cái gì: nơi chốn + V + 走 / 掉 (+了) + số lượng + người/vật.",
 "Đặt người / vật <b>sau</b> động từ (người vật chưa xác định)."],
intro:"Tiếng Việt: “Lớp mình <b>đến thêm</b> một bạn mới.” Tiếng Trung cũng để <b>nơi chốn đầu câu</b>, người / vật mới xuất hiện đứng <b>sau</b> động từ: 我们班来了一个新同学.",
rules:[
 {t:"Nơi chốn + V + 来 / 出 (+了) + số lượng + N", sub:"（1）出现", fx:[["Nơi chốn",""],["V + bổ ngữ (了)",null],["số lượng",""],["người / vật",""]], mean:"Xuất hiện.",
  ex:[["{1|我们班}{2|来了}{3|一个}{4|新同学}。","Wǒmen bān láile yí gè xīn tóngxué.","Lớp mình đến một bạn mới."],
      ["{1|前面}{2|开过来}{3|一辆}{4|车}。","Qiánmian kāi guolai yí liàng chē.","Phía trước có một chiếc xe chạy tới."]]},
 {t:"Nơi chốn + V + 走 / 掉 (+了) + số lượng + N", sub:"（2）消失", fx:[["Nơi chốn",""],["V + bổ ngữ (了)",null],["số lượng",""],["người / vật",""]], mean:"Mất đi, rời đi.",
  ex:[["{1|宿舍里}{2|搬走了}{3|两个}{4|人}。","Sùshè li bānzǒule liǎng gè rén.","Ký túc xá chuyển đi mất hai người."],
      ["{1|书架上}{2|少了}{3|一本}{4|书}。","Shūjià shang shǎole yì běn shū.","Trên giá sách mất một quyển."]]}],
cmp:[
 {vn:"Nhà bên cạnh mới chuyển đến một gia đình.", zh:"旁边[搬来了]一家人。", py:"Pángbiān bānláile yì jiā rén.", ok:true, why:"Nơi chốn đầu câu, người mới đến đứng SAU động từ."}],
ex:[
 ["门口[走过来]一个人。","Ménkǒu zǒu guolai yí gè rén.","Ở cửa có một người đi tới."],
 ["我们公司[走了]三个人。","Wǒmen gōngsī zǒule sān gè rén.","Công ty chúng tôi đi mất ba người."]],
errs:[
 {bad:"一个新同学来了我们班。", good:"我们班来了一个新同学。", why:"Nơi chốn đứng đầu, người mới xuất hiện đứng sau động từ."},
 {bad:"在我们班来了一个新同学。", good:"我们班来了一个新同学。", why:"Không thêm 在 ở đầu câu tồn hiện."},
 {bad:"我们班来了那个新同学。", good:"我们班来了一个新同学。/ 那个新同学来我们班了。", why:"Người / vật trong câu tồn hiện là chưa xác định (一个…); đã xác định thì đổi cách nói."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Lớp mình đến một bạn mới.", o:["一个新同学来了我们班。","我们班来了一个新同学。","在我们班来了一个新同学。"], a:1, why:"Nơi chốn + V了 + số lượng + người."},
  {q:"Trên giá sách mất một quyển.", o:["书架上少了一本书。","一本书少了书架上。"], a:0, why:"Nơi chốn đứng đầu."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["门口","走过来","一个","人"], a:"门口走过来一个人。", vi:"Ở cửa có một người đi tới."},
  {w:["宿舍里","搬走了","两个","人"], a:"宿舍里搬走了两个人。", vi:"Ký túc xá chuyển đi mất hai người."}]},
 {t:"C. Dịch sang tiếng Trung", sub:"gõ chữ Hán rồi bấm Kiểm tra", type:"show", items:[
  {q:"Lớp mình đến một bạn mới.", a:"我们班来了一个新同学。/ 我们班来了一位新同学。"},
  {q:"Công ty chúng tôi đi mất ba người.", a:"我们公司走了三个人。"}]}],
rel:["新1.45","二56","三47","一37"]
};
