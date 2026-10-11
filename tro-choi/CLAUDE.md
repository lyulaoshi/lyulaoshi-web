# 游戏盒 · Trò chơi

`courses/tro-choi/` → `lyulaoshi.com/tro-choi/`

## Trò chơi hiện có

Mưa chữ (`mua-chu/`), Bóng bay (`bay-chu/`), Lật thẻ — nhận bộ từ qua `?bo=bai:<môn>:bai-N` · `cd:<id>` · `hsk:<cấp>:<vị trí>` (xử lý ở `tro-choi/bo-tu.js`). Nút "Chơi bộ này" từ 词汇盒 mở `tro-choi/?bo=…` (游戏盒 xếp 3 trò này lên đầu).

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
