// 课本盒 · Giá sách giáo trình — dữ liệu SOẠN TAY (sửa trực tiếp file này).
// Bài nào đã có trên web do tools/build_site.py tự dò các thư mục courses/<môn>/bai-N/ và ghi vào bai-co.js khi ghép;
// từ mới lấy từ ../tu-vung/bai-data.js, điểm ngữ pháp từ ../ngu-phap/bai-data.js — không cần khai ở đây.
//   id    : thư mục môn trong courses/        c    : màu (""=đỏ san hô, c-sky, c-mint, c-lav, c-peach)
//   seal  : chữ trên dấu triện ở gáy          dim  : [độ dày, chiều cao] gáy sách (px)
//   spine : tên in dọc trên gáy ("|" = xuống cột)
//   total : bài cuối cùng dạy trên lớp (null = chưa rõ → mục lục vẽ tới bài cuối đã có rồi thêm dòng "……")
//   from  : bài đầu tiên dạy trên lớp (mặc định 1) — vd. 301 học Bài 11–20
//   on    : bài ôn tập [{sau: ôn sau bài số, tu: từ bài số, id: tên thư mục khi lên web (courses/<môn>/<id>/), zh, vi}]
//           chưa có thư mục thì dòng ôn tập trong mục lục mở 词汇盒 ôn gộp từ vựng các bài đó
//   t     : tên bài {số: [tên Trung, nghĩa Việt]} — bài đã có mà chưa khai tên thì mục lục chỉ ghi 第N课
window.GT_SACH=[
 {id:"tttc",c:"",seal:"综",dim:[80,252],spine:"预科汉语|强化教程",zh:"预科汉语强化教程 综合课本",vi:"Giáo trình Tiếng Trung tăng cường giáo trình tổng hợp 1",short:"TTTC",total:12,
  on:[{sau:4,tu:1,id:"on-tap-1",zh:"复习（一）",vi:"Ôn tập Bài 1–4"},{sau:8,tu:5,id:"on-tap-2",zh:"复习（二）",vi:"Ôn tập Bài 5–8"},{sau:12,tu:9,id:"on-tap-3",zh:"复习（三）",vi:"Ôn tập Bài 9–12"}],
  t:{1:["你好","Chào hỏi, hỏi tên, quốc tịch"],2:["这是你的手机吗","Đây là điện thoại của bạn à?"],3:["你家有几口人","Nhà bạn có mấy người?"],4:["电影开始了吗","Phim đã bắt đầu chưa?"]}},
 {id:"ledu",c:"c-sky",seal:"乐",dim:[62,214],spine:"乐读 1",zh:"乐读 1",vi:"Giáo trình môn đọc hiểu tiếng Trung 1",short:"乐读",total:10,
  t:{1:["横、竖、撇、捺、点、提","Các nét cơ bản"],2:["一二三，三二一，一二三四五六七","Chữ số"],3:["象形字","Chữ tượng hình"],4:["木上末，木下本","Chữ chỉ sự · từ về thời gian"],5:["二人土上坐，一月日边明","Chữ hội ý"]}},
 {id:"yuedu",c:"c-mint",seal:"阅",dim:[72,246],spine:"汉语阅读教程",zh:"汉语阅读教程",vi:"Giáo trình Đọc hiểu Hán ngữ Tập 1",short:"阅读教程",from:16,total:25,   // học phần dạy Bài 16–25
  t:{19:["","Chọn quần áo"],20:["","Sinh nhật · 12 con giáp"]}},
 {id:"boya",c:"c-lav",seal:"博",dim:[68,226],spine:"博雅汉语",zh:"博雅汉语",vi:"Giáo trình BOYA sơ cấp 1",short:"博雅",total:10,   // sách 30 bài, học phần dạy 10 bài đầu
  t:{1:["你好","Chào hỏi · hỏi tên"],2:["你是哪国人","Bạn là người nước nào?"],3:["那是你的书吗","Kia là sách của bạn à?"],4:["图书馆在哪儿","Thư viện ở đâu?"],5:["在北京大学的东边","Ở phía đông của Đại học Bắc Kinh"]}},
 {id:"301",c:"c-peach",seal:"会",dim:[76,256],spine:"汉语会话301句",zh:"汉语会话301句",vi:"Giáo trình 301 câu đàm thoại tiếng Hoa",short:"301 câu",from:11,total:20,   // học phần dạy Bài 11–20 + 2 bài ôn (như sách: 复习 sau mỗi 5 bài)
  on:[{sau:15,tu:11,id:"on-tap-3",zh:"复习（三）",vi:"Ôn tập Bài 11–15"},{sau:20,tu:16,id:"on-tap-4",zh:"复习（四）",vi:"Ôn tập Bài 16–20"}],
  // tên bài theo sách (mục lục chỉ dùng Bài 11–20; bài chưa lên web hiện mờ) — cần cô đối chiếu với sách
  t:{1:["你好"],2:["你身体好吗"],3:["你工作忙吗"],4:["您贵姓"],5:["我介绍一下儿"],6:["你的生日是几月几号"],7:["你家有几口人"],8:["现在几点"],9:["你住在哪儿"],10:["邮局在哪儿"],
     11:["我要买橘子","Tôi muốn mua quýt"],12:["我想买毛衣","Tôi muốn mua áo len"],13:["要换车","Phải đổi xe"],14:["我要去换钱","Tôi phải đi đổi tiền"],
     15:["我要照张相"],16:["你看过京剧吗"],17:["去动物园"],18:["路上辛苦了"],19:["欢迎你"],20:["为我们的友谊干杯"],21:["请你参加"],22:["我不能去"],23:["对不起"],24:["真遗憾，我没见到他"],25:["这张画儿真美"],
     26:["祝贺你"],27:["你别抽烟了"],28:["今天比昨天冷"],29:["我也喜欢游泳"],30:["请你慢点儿说"],31:["那儿的风景美极了"],32:["买到票了没有"],33:["我们预订了两个房间"],34:["我头疼"],35:["你好点儿了吗"],
     36:["我要回国了"],37:["真舍不得你们走"],38:["这是托运单"],39:["不能送你去机场了"],40:["祝你一路平安"]}}
];
