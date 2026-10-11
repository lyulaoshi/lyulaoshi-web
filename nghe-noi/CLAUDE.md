# 听说盒 · Nghe – nói

`courses/nghe-noi/` → `lyulaoshi.com/nghe-noi/` (bản mẫu, chưa mở trên trang chủ)

## Cấu trúc

- `data.js` — `NN_BAI.push`: hội thoại + câu hỏi + câu nghe – viết
- `nn.js` — khung 4 bước: nghe hiểu · shadowing có ghi âm · đóng vai · nghe – viết
- Giọng máy TTS

## Font Khải

`kai.woff` = LXGW WenKai cắt theo chữ trong hộp. **Chạy lại mỗi khi thêm bài:**
```
shared/python/bin/python3 tools/subset_kai.py courses/nghe-noi
```

## Công cụ thanh điệu

`website/chung/thanh-dieu.js` dùng lại được (xem `luyen-doc/CLAUDE.md`).
