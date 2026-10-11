# 语法盒 · Ngữ pháp HSK 3.0

`courses/ngu-phap/` → `lyulaoshi.com/ngu-phap/`

## Cấu trúc bài

Mỗi điểm trong 语法等级大纲 một bài giảng ở `ngu-phap/<cấp>-<số>/` (vd. `1-36/` = 【一36】"是"字句). HSK 1–3 = 210 bài theo mã 2021, đủ 224 bài kể cả 14 bài mã 新. HSK 4 chưa có danh mục đủ trong `shared/hsk/ngu-phap.js`.

Soạn tay `data.js`; `index.html` do `extract_grammar.py` tạo từ `tools/ngu_phap_trang.html` — **đừng sửa tay**. Kiểm tra: `osascript -l JavaScript tools/kiem_tra_ngu_phap.js`.

## Cấu trúc data.js (`window.NP_LESSON`)

- `goals` — mục tiêu bài
- `rules` + `fx` — công thức khối màu; viết `{n|chữ}` trong câu ví dụ (n = ô thứ n của fx)
- `notes` — ghi chú thêm
- `cmp` — so với tiếng Việt
- `ex` — câu ví dụ: `[hán, pinyin, nghĩa, nguồn]` — ưu tiên câu của 应用解读本 ghi "等级标准"
- `errs` — lỗi người Việt hay mắc
- `practice` — luyện tập:
  - `choice` / `order` / `show` — **đề bài có chữ Hán phải kèm `vi:` nghĩa tiếng Việt** (luôn hiện dưới đề, KHÔNG ẩn theo nút Nghĩa)
  - Câu `show` có đáp án chữ Hán → **ô gõ + Kiểm tra**; nhiều cách: `A / B`; phần có thể bỏ/thay: `別（不要）`, `我在看书（呢）`
- `rel` — điểm liên quan

Khung vẽ chung: `ngu-phap/bai.js` + `bai.css`; TTS máy; KHÔNG có nút Trình chiếu.

## Mục lục theo đề cương 2025

Danh mục 2025: `shared/hsk/ngu-phap-2025.js` (`HSK_NP25`: 185 điểm HSK 1–3; `NP_LV25`: cấp 2025 của từng bài). PDF nguồn: `OneDrive/4. E-BOOK/3. HSK(K)/HSK3.0/新版HSK考试大纲(词汇、汉字、语法).pdf` (语法大纲 tr.297–311). Tool chép sang `ngu-phap/hsk-ngu-phap-2025.js`.

Bài vẫn giữ mã/thư mục 2021 (【三54】, `3-54/`); trang bài hiện cấp + màu 2025 và dòng "Đề thi HSK mới: HSK 3.55 …". Điểm 2025 chưa có bài (mảng rỗng) hiện "Sắp có".

**Điểm chỉ có trong đề cương 2025** (không có mã 2021): thư mục `ngu-phap/m<cấp>-<số>/`, `code:"新3.59"` (số = mã 2025). Thêm `"新3.59"` vào mảng bài của điểm đó + `NP_LV25` + chữ biểu tượng ở `ky-hieu.js`.

Bài 2021 không có trong đề cương 2025 xếp nhóm "Bổ sung" qua `NP_THEM` (三78→1, 二27→2, 三44/三50/三77→3, 三31→5). Mục "HSK 4+ · khác" dùng "4"/"5"/"?" trong `NP_LV25`.

Danh mục cũng có **HSK 4 (67 điểm) và HSK 5 (41 điểm)** (PDF tr.306–311); điểm chưa có bài = "Sắp có". Số liệu đầu trang (224 bài · 293 điểm HSK 1–5) ghi tay trong `ngu-phap/index.html`.

Giao diện: màu theo cấp + chữ biểu tượng + danh sách điểm khó (nhóm D/E/F) ở `ngu-phap/ky-hieu.js`.

## Chuyên đề

Nút "Chuyên đề" cạnh các nút cấp HSK ở mục lục (link `#chuyen-de`); danh sách soạn tay ở mảng `CDZ` trong `ngu-phap/index.html`. Bài tổng hợp nhiều cấp, thư mục tên chữ (không theo mã) — hiện có `ngu-phap/luong-tu/` (Lượng từ, link sang 2 trò 游戏盒; 3 bài 【一08】【二10】【三09】 có ghi chú link về).

`build_site.py` chỉ đếm thư mục dạng `x-yy`/`mx-yy` là bài ngữ pháp.

## Tools

- `tools/extract_grammar.py` — trích điểm ngữ pháp từ bài 301/博雅/汉语阅读教程 → `bai-data.js` + `co-bai.js`; cấp HSK gán tay ở `XEP_CAP`. **Chạy lại mỗi khi có bài mới.**
- `shared/hsk/ngu-phap.js` — danh mục gốc [mã, tên Trung, nhóm, tên Việt]; điểm mới phải có tên Việt. Tool tự chép sang `courses/ngu-phap/hsk-ngu-phap.js`.
- `build_site.py` gắn `?v=` chống cache cho file dữ liệu; gắn script mở đúng tab cho link `/<môn>/bai-N/#np-<đích>`.

## In bài chỉ giáo viên (tạm TẮT)

Trạng thái: `IN_BAI=false` trong `bai.js` + `NP_IN=false` trong `ngu-phap/index.html`. Bật lại = đổi cả hai thành `true`.

Cơ chế: `?gv=<mã>` ở một bài → nhớ trong localStorage `np-gv`; tắt `?gv=0`. Code lưu SHA-256 của mã (`GV_HASH` trong `bai.js` + dòng kiểm tra trong `ngu-phap/index.html`) — đổi mã = tính lại hash, thay cả 2 chỗ. Menu In (Tóm tắt · Phiếu bài tập · Phiếu + đáp án) nằm trong công tắc Pinyin/Nghĩa; Ctrl+P ở máy học sinh chỉ in dòng "Bản in chỉ dành cho giáo viên".
