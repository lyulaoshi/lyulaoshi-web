// Service worker của lyulaoshi.com — để web "cài" được như ứng dụng trên điện thoại (09/11/2026).
// CỐ Ý KHÔNG lưu bài vào máy: luôn lấy bản mới nhất trên mạng, nên cô sửa bài là học viên thấy ngay.
// Chỉ khi mất mạng mới hiện trang báo nhẹ nhàng (không lưu audio/bài nặng vào điện thoại học viên).
// Đổi file này thì tăng số phiên bản để máy học viên nhận bản mới.
const PHIEN_BAN = 'll-1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);   // dọn bộ nhớ cũ nếu có
  await self.clients.claim();
})()));

const MAT_MANG = `<!doctype html><html lang="vi"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#F7F5FB">
<title>Mất mạng · 吕老师汉语盒</title>
<style>:root{color-scheme:light dark}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#F7F5FB;color:#2B2E45;
font:16px/1.55 "Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",sans-serif;text-align:center;padding:24px;box-sizing:border-box}
@media (prefers-color-scheme:dark){body{background:#1B1C27;color:#ECEBF5}}
.zh{font:32px/1.2 "STKaiti","KaiTi","Kaiti SC",serif;color:#E0545F;margin:0 0 8px}
p{margin:0 0 18px;max-width:320px}button{font:inherit;font-weight:700;border:0;border-radius:999px;padding:10px 22px;background:#E0545F;color:#fff;cursor:pointer}</style>
</head><body><div><p class="zh">网络断了…</p><p>Máy em đang mất mạng. Em kiểm tra Wi-Fi hoặc 4G rồi bấm thử lại nhé.</p>
<button onclick="location.reload()">Thử lại</button></div></body></html>`;

self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;          // ảnh, audio, script… để trình duyệt tự tải như bình thường
  e.respondWith(fetch(e.request).catch(() =>
    new Response(MAT_MANG, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
