# 课本盒 · Giáo trình

`courses/giao-trinh/` → `lyulaoshi.com/giao-trinh/`

## Cấu trúc

Gáy sách + mục lục 目录 + thẻ bài (ngữ pháp, Ôn từ, Chơi, ôn gộp `bai:<môn>:bai-11+bai-12`).

- `sach.js` — tên bài, tổng số bài, màu gáy (soạn tay)
- `bai-co.js` — bài nào đã có (do `build_site.py` tự dò, chỉ có trong bản ghép)
- Số từ lấy từ `tu-vung/bai-data.js`, ngữ pháp từ `ngu-phap/bai-data.js`

## Thêm giáo trình mới

Thêm vào `sach.js` + `TEXTBOOKS` trong `tools/build_site.py`.

## Tên giáo trình trên trang chủ

Chỉ ghi tên giáo trình, không ghi tên môn:
- 预科汉语强化教程 综合课本
- 乐读 1
- 汉语阅读教程
- 博雅汉语
- 汉语会话301句
