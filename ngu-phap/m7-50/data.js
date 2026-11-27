// Bài ngữ pháp 【新7.50】 — theo đề cương thi HSK mới 2025. Câu ví dụ biên soạn bổ sung, chờ cô duyệt.
window.NP_LESSON={
code:"新7.50", title:"因果复句：（因）……，故……；……，以至（于）……", vi:"Do… nên…; … đến mức…", tag:"句子的类型 · 复句",
goals:[
 "Nhân quả văn ngôn <b>因……故……</b>.",
 "Hệ quả tăng tiến <b>以至（于）</b>."],
rules:[
 {"t": "因 + nguyên nhân，故 + kết quả", "fx": [["因", null], ["nguyên nhân", ""], ["，", ""], ["故", null], ["kết quả", ""]], "mean": "Do … nên (công văn).", "ex": [["{1|因}{2|设备维修}，{3|故}{4|暂停开放}。", "Yīn shèbèi wéixiū, gù zàntíng kāifàng.", "Do bảo trì thiết bị nên tạm đóng cửa."]]},
 {"t": "Tình trạng，以至(于) + hệ quả", "fx": [["tình trạng", ""], ["，", ""], ["以至(于)", null], ["hệ quả", ""]], "mean": "Đến mức.", "ex": [["{1|他工作太专心了}，{2|以至于}{3|忘了吃饭}。", "Tā gōngzuò tài zhuānxīn le, yǐzhìyú wàngle chī fàn.", "Anh ấy làm việc quá chăm đến mức quên ăn."]]}],
cmp:[
 {"vn": "Mưa to đến mức đường ngập.", "zh": "雨下得很大，[以至于]道路积水。", "py": "Yǔ xià de hěn dà, yǐzhìyú dàolù jīshuǐ.", "ok": true, "why": "以至于 = đến nỗi."}],
ex:[
 ["[因]故不能出席，敬请原谅。", "Yīn gù bù néng chūxí, jìng qǐng yuánliàng.", "Vì có việc không dự được, mong lượng thứ."],
 ["变化太快，[以至]很多人不适应。", "Biànhuà tài kuài, yǐzhì hěn duō rén bú shìyìng.", "Thay đổi quá nhanh đến mức nhiều người không thích ứng."]],
errs:[
 {"bad": "故下雨，因比赛取消。", "good": "因下雨，故比赛取消。", "why": "因 trước, 故 sau."},
 {"bad": "以至于忘了吃饭，他很专心。", "good": "他很专心，以至于忘了吃饭。", "why": "以至于 ở vế sau."}],
practice:[
 {"t": "A. Chọn đáp án", "sub": "bấm vào đáp án", "type": "choice", "items": [{"q": "因天气恶劣，＿航班延误。", "vi": "Do thời tiết xấu nên chuyến bay trễ.", "o": ["但", "故", "若"], "a": 1, "why": "因…故."}, {"q": "他太激动了，＿说不出话来。", "vi": "Xúc động đến mức không nói nên lời.", "o": ["以便", "以至于", "以免"], "a": 1, "why": "Hệ quả."}]},
 {"t": "B. Sắp xếp thành câu", "sub": "bấm thẻ theo thứ tự", "type": "order", "items": [{"w": ["因", "设备维修，", "故", "暂停开放"], "a": "因设备维修，故暂停开放。", "vi": "Do bảo trì nên tạm đóng cửa."}]},
 {"t": "C. Dịch sang tiếng Trung", "sub": "gõ chữ Hán rồi bấm Kiểm tra", "type": "show", "items": [{"q": "Anh ấy làm việc quá chăm đến mức quên ăn (dùng 以至于).", "a": "他工作太专心了，以至于忘了吃饭。"}]}],
rel:["新5.37", "新6.15", "新4.62"]
};
