// Bài ngữ pháp 【二56】. Câu ví dụ: [chữ Hán, pinyin, nghĩa, nguồn]; [..] = phần tô đậm.
window.NP_LESSON={
code:"二56", title:"存现句1：表示存在", vi:"Câu tồn hiện 1 — Nơi chốn + V着 + (số lượng) + N", tag:"句子的类型 · 特殊句型",
goals:[
 "Miêu tả ở đâu có gì bằng <b>Nơi chốn + động từ + 着 + (số lượng) + danh từ</b>.",
 "Đặt <b>nơi chốn ở đầu câu</b>, người / vật ở cuối — không có 在 ở đầu.",
 "Biết câu tồn hiện cũng dùng <b>有</b> 【一37】."],
intro:"Câu tồn hiện miêu tả <b>cảnh vật</b>: ở chỗ nào có người / vật gì, trong trạng thái nào (đặt, ngồi, treo…).",
rules:[
 {t:"Nơi chốn + 有 + số lượng + N", sub:"（1）", fx:[["Nơi chốn",""],["有",null],["(số lượng) + N",""]], mean:"Xem 【一37】.",
  ex:[["房间里[有]两张桌子。","Fángjiān li yǒu liǎng zhāng zhuōzi.","Trong phòng có hai cái bàn."]]},
 {t:"Nơi chốn + V + 着 + (số lượng) + N", sub:"（2）", fx:[["Nơi chốn",""],["Động từ",""],["着",null],["(số lượng) + N",""]], mean:"放着 (đặt), 坐着 (ngồi), 挂着 (treo), 写着 (viết)…",
  ex:[["桌子上放[着]一本词典。","Zhuōzi shang fàng zhe yì běn cídiǎn.","Trên bàn đặt một quyển từ điển.","等级标准"],
      ["教室前边坐[着]一位老师。","Jiàoshì qiánbian zuò zhe yí wèi lǎoshī.","Phía trước lớp có một thầy giáo đang ngồi.","等级标准"],
      ["桌子上放[着]书、笔和本子。","Zhuōzi shang fàng zhe shū, bǐ hé běnzi.","Trên bàn để sách, bút và vở.","等级标准"]]}],
notes:[
 {t:"Không thêm 在 đầu câu", html:"✗ <span class='zh'>在桌子上放着一本书。</span> → ✓ <span class='zh'>桌子上放着一本书。</span>"}],
cmp:[
 {vn:"Trên tường treo một bức tranh.", zh:"墙上挂[着]一张画。", py:"Qiáng shang guà zhe yì zhāng huà.", ok:true, why:"Giống trật tự tiếng Việt, nhưng 上 sau danh từ và có 着."}],
ex:[
 ["门口站[着]很多人。","Ménkǒu zhàn zhe hěn duō rén.","Ở cửa có nhiều người đang đứng."],
 ["黑板上写[着]两个字。","Hēibǎn shang xiě zhe liǎng ge zì.","Trên bảng có viết hai chữ."],
 ["墙上挂[着]一张地图。","Qiáng shang guà zhe yì zhāng dìtú.","Trên tường treo một tấm bản đồ."]],
errs:[
 {bad:"在桌子上放着一本书。", good:"桌子上放着一本书。", why:"Câu tồn hiện không có 在 ở đầu."},
 {bad:"一本书放着桌子上。", good:"桌子上放着一本书。", why:"Nơi chốn đầu câu, vật cuối câu."},
 {bad:"桌子上放一本书着。", good:"桌子上放着一本书。", why:"着 ngay sau động từ."}],
practice:[
 {t:"A. Chọn câu đúng", sub:"bấm vào đáp án", type:"choice", items:[
  {q:"Trên bàn đặt một quyển từ điển.", o:["在桌子上放着一本词典。","桌子上放着一本词典。","一本词典放着桌子上。"], a:1, why:"Nơi chốn + V着 + N."},
  {q:"Trên tường treo một bức tranh.", o:["墙上挂着一张画。","墙上挂一张画着。","画挂着墙上。"], a:0, why:"V着."}]},
 {t:"B. Sắp xếp thành câu", sub:"bấm thẻ theo thứ tự", type:"order", items:[
  {w:["教室","前边","坐着","一位","老师"], a:"教室前边坐着一位老师。", vi:"Phía trước lớp có một thầy giáo đang ngồi."},
  {w:["黑板上","写着","两个","字"], a:"黑板上写着两个字。", vi:"Trên bảng có viết hai chữ."}]},
 {t:"C. Miêu tả bằng câu tồn hiện", sub:"tự làm rồi xem đáp án", type:"show", items:[
  {q:"Trên bàn để sách, bút và vở.", a:"桌子上放着书、笔和本子。"},
  {q:"Ở cửa có nhiều người đang đứng.", a:"门口站着很多人。"}]}],
rel:["一37","二33","一01","二70"]
};
