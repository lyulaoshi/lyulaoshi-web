# 课本盒 · Giáo trình

`courses/giao-trinh/` → `lyulaoshi.com/giao-trinh/`

## Cấu trúc (thiết kế mới 25/10/2026)

Hàng **bìa sách** (6 cuốn, có thanh tiến độ "bài đã lên web / cả học phần", ruy băng ở cuốn đang học dở) → bấm bìa thì cuộn xuống **một danh sách duy nhất** các bài, chia **theo đợt ôn tập** (`on` trong `sach.js`), mỗi dòng bài có sẵn: Học bài, Ôn từ, Chơi, chip ngữ pháp. Không còn trang 目录 riêng + thẻ bài trùng nhau.

- **Ôn gộp**: ô tròn đầu mỗi dòng, nút "Chọn cả đợt" / "Chọn tất cả"; thanh dưới màn hình hiện từ bài thứ 1 được chọn, có chip bỏ từng bài, nút Ôn từ (词汇盒) và Chơi (游戏盒). Mỗi cuốn nhớ lựa chọn riêng trong phiên.
- Bản cũ (kệ sách đứng + mục lục trang giấy) lưu ở scratchpad phiên 25/10/2026, không còn trong repo.
- `sach.js` — tên bài, tổng số bài, màu bìa, bài ôn (soạn tay)
- `bai-co.js` — bài nào đã có (do `build_site.py` tự dò, chỉ có trong bản ghép)
- Số từ lấy từ `tu-vung/bai-data.js`, ngữ pháp từ `ngu-phap/bai-data.js`
- Điểm ngữ pháp chưa có mã HSK (`h` rỗng) vẫn hiện, như nhãn không có link — đừng giả định `x.h[0]` luôn có.

## Thêm giáo trình mới

Thêm vào `sach.js` + `TEXTBOOKS` trong `tools/build_site.py`.

## Tên giáo trình trên trang chủ

Chỉ ghi tên giáo trình, không ghi tên môn:
- 预科汉语强化教程 综合课本
- 乐读 1
- 汉语阅读教程
- 博雅汉语
- 汉语会话301句
