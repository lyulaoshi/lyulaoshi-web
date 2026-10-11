# 词汇盒 · Flashcard

`courses/tu-vung/` → `lyulaoshi.com/tu-vung/`

## Nguồn dữ liệu

- HSK: `tro-choi/hsk-words.js`; nghĩa Việt HSK 1 ở `nghia-hsk1.js`
- Theo bài: `bai-data.js` — do `tools/extract_vocab.py` trích từ bài giảng trên web. **Chạy lại mỗi khi có bài mới.**
- Theo chủ đề: `chu-de.js` — soạn tay

## Link thẳng

`/tu-vung/#<môn>/bai-N` · `#chu-de/<id>`

Nút "Ôn từ vựng bài này" được `build_site.py` gắn vào bản ghép của mỗi bài có trong `bai-data.js` (không sửa bài gốc).

## Kết nối trò chơi

Trò Mưa chữ / Lật thẻ / Bóng bay nhận bộ từ qua `?bo=bai:<môn>:bai-N` · `cd:<id>` · `hsk:<cấp>:<vị trí>`. Nút "Chơi bộ này" mở `tro-choi/?bo=…`.
