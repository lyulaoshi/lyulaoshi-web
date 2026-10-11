# 阅读盒 · Luyện đọc

`courses/luyen-doc/` → `lyulaoshi.com/luyen-doc/` (hộp trang chủ vẫn "Sắp mở")

**Mục tiêu:** tập trung cho học viên ĐỌC — không làm kiểu bài giảng, không theo khung 我的一天.

## Cấu trúc trang

`index.html` + `doc.js`: mục lục + trang đọc `#<id>`. Văn bản chữ Khải + thanh công cụ dưới (Pinyin · Nghĩa · Nghe · Ghi âm · Cỡ chữ; nút là hình SVG tự vẽ, không emoji).

Mục lục 2 mảng:
- **阅读 · Đọc hiểu** (3 tab: Theo cấp HSK + lọc chủ đề · Theo chủ đề · Theo giáo trình `GT_SACH`)
- **朗读 · Đọc thành tiếng**

Mỗi bài 3 chế độ:
- `#<id>/doc-theo` — 跟读 · Đọc theo (chữ chạy + ghi âm)
- `#<id>/thu-am` — Ghi âm tự do
- `#<id>/podcast` — 播客 · Làm podcast

## Soạn bài (`bai-doc.js`)

`LD_BAI.push`:
- `cau` — mảng câu: `[chữ Hán tách từ bằng dấu cách, pinyin từng từ ghi biến điệu, nghĩa, [mã ngữ pháp]]`
- `tu` — nghĩa từng từ
- `rieng` — tên riêng
- `hoi` — câu hỏi sau bài

Chủ đề: mã `cd` theo `tu-vung/chu-de.js` + `CD_THEM` trong `doc.js`. Bài khoá gắn `sach` (cho tab Theo giáo trình, `GT_SACH`).

**Sau khi thêm bài chạy:**
```
shared/python/bin/python3 tools/kiem_tra_doc.py
shared/python/bin/python3 tools/subset_kai.py courses/luyen-doc courses/tu-vung/chu-de.js courses/giao-trinh/sach.js
```
(khớp từ/pinyin, thiếu nghĩa, từ ngoài cấp, mã ngữ pháp; font Khải cắt theo chữ thực)

## Truyện kể – ngụ ngôn (`cd:"truyen"`)

Truyện dân gian viết lại theo cấp. Trường bổ sung:
- `tn` — thành ngữ `{zh, py, vi}`: hiện ngay dưới tên bài (nghĩa ẩn, nút "Xem nghĩa")
- `y` — ý nghĩa câu chuyện: hiện sau khi đọc xong

Từ ngoài cấp chỉ là từ chính của truyện → gạch chân làm từ mới.

Truyện đã có: 乌鸦喝水, 龟兔赛跑, 守株待兔, 画蛇添足, 拔苗助长, 亡羊补牢 (HSK 3) · 刻舟求剑, 井底之蛙, 狐假虎威, 自相矛盾 (HSK 4) · 小猫找妈妈 (HSK 1) · 拔萝卜, 狐狸和葡萄, 小猫钓鱼 (HSK 2).

## Podcast (`podcast.js`)

Luồng: tên người dẫn → kịch bản (mở đầu "大家好…" · bài · kết "这个故事告诉我们：…") → thu từng phần → nhạc Web Audio (Nhẹ nhàng/Vui tươi/Cổ tích/Không nhạc) → ghép WAV 22 kHz có phụ đề → **5 mẫu ảnh** (`MAU`: Pastel · Đêm sao · Giấy cổ · Sôi động · Vở ô li 田字格; hàm `veMau`) → ảnh bìa TikTok 1080×1920 + ảnh vuông + hashtag → **Xuất video TikTok** 720×1280 (MediaRecorder: MP4 hoặc WebM).

Câu kết từng truyện ở `YZH` trong `podcast.js` — **truyện mới phải thêm vào đây**. Lưu podcast của học viên bằng IndexedDB `ld-podcast`.

## Tính năng đọc

- **Ghi âm:** đồng hồ + ghi âm cả bài → thời gian, chữ/phút (kỷ lục `ld-docto`), Nghe lại, **Đối chiếu từng câu** (tách câu theo chỗ ngừng ≥ 250 ms, hoặc chia theo số chữ).
- **Đọc theo (跟读):** đếm ngược 3-2-1 → chữ sáng dần từng từ, ghi âm cùng lúc; mốc lấy theo chữ chạy; Nghe lại có chữ chạy theo.
- **Bắt đầu đọc:** bấm giờ đọc thầm → "Đọc xong" → tốc độ chữ/phút (> 350 không ghi kỷ lục) → câu hỏi → từ mới → bài tiếp.
- Chạm từ → thẻ từ (nghĩa, cấp HSK 2025, nghe, thanh điệu, lưu từ, ngữ pháp của câu).

## Thanh điệu dùng chung

`website/chung/thanh-dieu.js` (`THANHDIEU.mo(chữ, pinyin)`): đường chuẩn từ pinyin có biến điệu 3-3, ghi âm, dò cao độ YIN trên máy, chấm từng âm tiết (dùng cho từ/câu ≤ 10 âm tiết). 拼音盒/听说盒 dùng lại được.

## Bài đọc trên lớp

Các bài slide (vd. `mot-ngay-cua-toi/`) do project `Documents/Luyen doc` đưa vào thư mục con; mục lục có mục "Bài đọc trên lớp" trỏ tới.
