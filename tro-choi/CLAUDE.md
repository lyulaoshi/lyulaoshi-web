# 游戏盒 · Trò chơi

`courses/tro-choi/` → `lyulaoshi.com/tro-choi/`

## Trò chơi hiện có

Mưa chữ (`mua-chu/`), Bóng bay (`bay-chu/`), Lật thẻ — nhận bộ từ qua `?bo=bai:<môn>:bai-N` · `cd:<id>` · `hsk:<cấp>:<vị trí>` (xử lý ở `tro-choi/bo-tu.js`). Nút "Chơi bộ này" từ 词汇盒 mở `tro-choi/?bo=…` (游戏盒 xếp 3 trò này lên đầu).

Nghiêng đầu (`nghieng-dau/`, 19/10/2026; có trong danh sách "chơi với bộ từ này" khi `?bo=` là bai/cd; có thể tự thêm từ, chỉ gửi chữ Hán cũng được): quiz 2 thẻ, chơi bằng phím/chuột/camera. Tự nạp `tu-vung/bai-data.js` (giáo trình), `chu-de.js`, `hsk-words.js` + `nghia-hsk1.js` — bài mới thêm vào kho chung là tự có, không có ngân hàng câu riêng. Câu hỏi sinh từ dữ liệu, đáp án nhiễu chọn trong phạm vi đã chọn; từ thiếu nghĩa / chữ nhiều nghĩa được liệt kê ở mục "cần rà soát". Nhận `?bo=bai:<môn>:bai-N` hoặc `cd:<id>`. Chưa có dạng nghe (chưa có audio thật cho từng từ).

Lượng từ: `xep-hop/` (Xếp hàng vào hộp) + `tap-hoa/` (Tiệm tạp hoá) — dùng chung `tro-choi/luong-tu.js`.

## Dữ liệu từ vựng HSK

**Đề cương thi HSK mới 《HSK考试大纲》汉考国际 2025-11:**
- `hsk-words.js` — HSK 1–6 (mỗi cấp chỉ từ mới: 300/200/500/1000/1600/1800)
- `hsk79-words.js` — HSK 7–9 (5600 từ)
- Bản 2021 lưu ở `shared/hsk/tu-vung-2021-*.js`
- **KHÔNG dùng bộ HuongHSK**

## Lượng từ (`luong-tu.js`)

33 lượng từ + hình vẽ tay, ~90 danh từ, cấp theo đề cương 2025. Thêm danh từ/lượng từ ở file này. Bài học `ngu-phap/luong-tu/` cũng dùng file này.

## CSS icon màu

`tro-choi/game.css` có thêm `.lli-do/-xanh/-vang/-bac/-xanhla` (bản sao từ `website/chung/ic.css`).
