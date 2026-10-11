# 考试盒 · Luyện thi HSK 3.0

`courses/luyen-thi/` → `lyulaoshi.com/luyen-thi/`

## Cấu trúc đề

Cấu trúc đề mô phỏng đúng 新版HSK: `cau-truc.js` (chép từ đề mẫu 汉考国际 — xem `shared/hsk/README.md`). Mỗi đề một file `de/<id>.js` (`KT_DS.push`); thêm `<script>` vào `index.html`. Hiện có: `hsk1-01`, `hsk1-02`, `hsk2-01`, `hsk2-02`. Dự tính 5 đề/cấp HSK 1–3.

## Quy tắc soạn

- Câu tự soạn, KHÔNG chép câu mẫu
- Từ vựng phải đúng cấp
- Hình = ảnh chụp Pexels ở `img/` (nguồn `img/nguon.txt`); KHÔNG dùng emoji/icon (Windows, Android hiện xấu)
- Mỗi câu gắn mã ngữ pháp `np` (link sang 语法盒)

## Kiểu câu HSK 2 bổ sung

- `zi` — 书写 一: ghép bộ phận
- `write` — 书写 二: ô gõ chữ Hán
- Phần 10 câu ghép chia 2 nhóm (6 lựa chọn có 示例 + 5 lựa chọn)
- Phần ghép A–F có câu 示例 như đề thật

## Kiểm tra sau khi soạn

```
shared/python/bin/python3 tools/kiem_tra_de.py
```
Kiểm tra: số câu từng phần, đáp án ghép trùng, từ vượt cấp, mã ngữ pháp, ảnh.
