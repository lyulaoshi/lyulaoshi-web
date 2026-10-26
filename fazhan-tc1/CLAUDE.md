# 发展汉语中级综合 I · Phát triển Hán ngữ Trung cấp 1

`courses/fazhan-tc1/` → `lyulaoshi.com/fazhan-tc1/` (id sách trong 词汇盒 / 游戏盒 / 课本盒: `fazhan-tc1`)

## Cấu trúc

- `index.html` — trang giáo trình (chép khung từ `fazhan-sc2/index.html`: đổi tên sách, thẻ bài, lộ trình 12 bài).
- `bai-N/index.html` — mỗi bài 1 file tự chứa (font, nét chữ, audio nhúng base64, ~4 MB).
- Giáo trình gốc: 《发展汉语·中级综合（I）》第二版, 15 bài; mỗi bài có 1 bài khoá dài, 词语学习 ~40 từ, 综合注释 ~5 điểm, 综合练习 一→九.

## Bài đã có

- `bai-1/` — 北京的四季 · Bốn mùa Bắc Kinh (42 từ, 5 điểm ngữ pháp, 6 nhóm bài tập bổ sung, nghe – viết bài khoá).

## Khác với kit TTTC

- Thẻ từ có: Hán Việt, chiết tự + mẹo nhớ từng chữ, 解释 (giải thích tiếng Trung), công thức viết tắt (S, V, O, N, Adj…), 3 câu ví dụ, 3 câu tập dịch (mỗi câu có 2 đáp án khác).
- Bấm cụm từ / câu ví dụ: pinyin → nghĩa Việt → ẩn (thay cho nút bật/tắt).
- Bài tập kéo thả (điền từ, phân loại, sắp xếp câu); bấm "Xem đáp án": đúng → xanh, sai / trống → đỏ + đáp án.
- Bài viết có "Chấm tự động" theo tiêu chí. KHÔNG dùng AI (học viên không cần tài khoản Claude).
- Audio thật: file 生词 + 课文 của giáo trình (cắt theo khoảng lặng, đối chiếu bằng nhận dạng giọng nói; cần nghe kiểm tra từ ngắn).

## Link sang các hộp (đã gắn trong bài)

- 词汇盒 `../../tu-vung/#fazhan-tc1/bai-N` · 游戏盒 `../../tro-choi/<trò>/?bo=bai:fazhan-tc1:bai-N` (Mưa chữ, Săn bóng bay, Lật thẻ, Nghiêng đầu) · 语法盒 chỉ gắn khi có bài tương ứng (Bài 1: 3-54, 3-40, 2-13, 1-04).

## Sau khi thêm bài

1. Chép `bai-N/index.html` vào đây (đổi link tuyệt đối `https://lyulaoshi.com/` thành `../../` nếu có).
2. Sửa `index.html` (thẻ bài + lộ trình), `courses/giao-trinh/sach.js` (mục `t:` tên bài), `website/lyulaoshi-home.html` (dòng "Mới bỏ vào hộp").
3. `shared/python/bin/python3 tools/extract_vocab.py` rồi `shared/python/bin/python3 tools/build_site.py --onedrive`.
