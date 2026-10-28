// Vượt ải 闯关 — đề ôn 汉语阅读教程 Bài 16–25. TỰ SINH bởi tools/vuot_ai_yuedu.py từ dữ liệu trong bài giảng (scrambleData, clozeItems, grammarData, dialogue, qaItems) — đừng sửa tay, sửa bài gốc rồi chạy lại. CHỜ CÔ DUYỆT.
// Đáp án nhiễu ở chặng Trả lời là các câu đáp khác trong cùng bài.
window.VA_SACH=(window.VA_SACH||[]).concat([{id:"yuedu",zh:"汉语阅读教程",vi:"Đọc hiểu Hán ngữ, Tập 1"}]);
window.VA_BAI=(window.VA_BAI||[]).concat([
 {
  "id": "yuedu-bai-16",
  "mon": "yuedu",
  "n": 16,
  "zh": "第十六课",
  "vi": "Bài 16",
  "lk": "../../yuedu/bai-16/",
  "gr": {
   "freq": {
    "zh": "常常 / 有时候",
    "vi": "Sub + 常常 / 有时候 + V(O)",
    "huy": "Điểm 常常 / 有时候",
    "ct": "Sub + 常常 / 有时候 + V(O) — 常常/有时候 đứng sau chủ ngữ, TRƯỚC động từ vị ngữ."
   },
   "first": {
    "zh": "第一次 + V",
    "vi": "这是 + Sub + 第一次 + V(O)",
    "huy": "Điểm 第一次 + V",
    "ct": "这是 + Sub + 第一次 + V(O) — 第一次 đứng trước động từ — khác trật tự tiếng Việt “làm gì lần đầu tiên”."
   },
   "about": {
    "zh": "关于...的",
    "vi": "关于 + N/cụm từ + 的 + N(trung tâm)",
    "huy": "Điểm 关于...的",
    "ct": "关于 + N/cụm từ + 的 + N(trung tâm) — Cụm “关于+N”+的 đứng TRƯỚC danh từ trung tâm — ngược trật tự tiếng Việt."
   },
   "also": {
    "zh": "也",
    "vi": "Sub + 也 + V(O)",
    "huy": "Điểm 也",
    "ct": "Sub + 也 + V(O) — 也 đứng trước động từ, sau chủ ngữ (nếu có)."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "我们学校",
     "有",
     "一个",
     "图书馆"
    ],
    "py": "Wǒmen xuéxiào yǒu yí gè túshūguǎn.",
    "vi": "Trường chúng tôi có một thư viện.",
    "g": "ju"
   },
   {
    "id": "s2",
    "p": [
     "图书馆",
     "很大，",
     "有",
     "很多书"
    ],
    "py": "Túshūguǎn hěn dà, yǒu hěn duō shū.",
    "vi": "Thư viện rất lớn, có rất nhiều sách.",
    "g": "ju"
   },
   {
    "id": "s3",
    "p": [
     "这",
     "是",
     "我",
     "第一次",
     "用汉语写文章"
    ],
    "py": "Zhè shì wǒ dì-yī cì yòng Hànyǔ xiě wénzhāng.",
    "vi": "Đây là lần đầu tiên tôi viết văn bằng tiếng Trung.",
    "g": "first"
   },
   {
    "id": "s4",
    "p": [
     "你",
     "今天",
     "想",
     "跟我一起去",
     "吗"
    ],
    "py": "",
    "vi": "Hôm nay cậu có muốn đi cùng tớ không?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s5",
    "p": [
     "你",
     "去",
     "借书",
     "吗"
    ],
    "py": "Nǐ qù jiè shū ma?",
    "vi": "Cậu đi mượn sách à?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s6",
    "p": [
     "我",
     "也",
     "去",
     "借",
     "几本书"
    ],
    "py": "",
    "vi": "Tớ cũng đi mượn vài quyển sách.",
    "g": "also"
   },
   {
    "id": "s7",
    "p": [
     "我",
     "常常",
     "在那儿看书，",
     "有时候",
     "查资料"
    ],
    "py": "",
    "vi": "Tớ thường ở đó đọc sách, thỉnh thoảng tra tài liệu.",
    "g": "freq"
   },
   {
    "id": "s8",
    "p": [
     "我",
     "想",
     "写一篇文章，",
     "是",
     "关于中国历史的"
    ],
    "py": "",
    "vi": "Tôi muốn viết một bài văn, về lịch sử Trung Quốc.",
    "g": "about"
   },
   {
    "id": "s9",
    "p": [
     "每天",
     "都有",
     "很多人",
     "去那儿",
     "看书、借书、还书"
    ],
    "py": "Měitiān dōu yǒu hěn duō rén qù nàr kàn shū, jiè shū, huán shū.",
    "vi": "Mỗi ngày đều có rất nhiều người đến đó đọc sách, mượn sách, trả sách.",
    "g": "ju"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "山田",
    "q": "玛丽，你去哪儿？",
    "ok": [
     "我去图书馆。"
    ],
    "bad": [
     [
      "我不常去。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "好，我也去借几本书。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h2",
    "who": "山田",
    "q": "你去借书吗？",
    "ok": [
     "对，借书，也还书。"
    ],
    "bad": [
     [
      "我去图书馆。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我不常去。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "also"
   },
   {
    "id": "h3",
    "who": "山田",
    "q": "你常常去图书馆吗？",
    "ok": [
     "常去。我常常在那儿看书，有时候查资料。你呢？"
    ],
    "bad": [
     [
      "我去图书馆。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我不常去。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "freq"
   },
   {
    "id": "h4",
    "who": "玛丽",
    "q": "常去。我常常在那儿看书，有时候查资料。你呢？",
    "ok": [
     "我不常去。"
    ],
    "bad": [
     [
      "对，借书，也还书。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我去图书馆。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "freq"
   },
   {
    "id": "h5",
    "who": "玛丽",
    "q": "今天想跟我一起去吗？",
    "ok": [
     "好，我也去借几本书。"
    ],
    "bad": [
     [
      "我去图书馆。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我不常去。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "also"
   },
   {
    "id": "h6",
    "who": "课文",
    "q": "这个学校的图书馆怎么样？",
    "ok": [
     "图书馆很大，有很多书。"
    ],
    "bad": [
     [
      "“我”常去那儿看书、学习，有时候查资料。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "“我”要写一篇关于中国历史的文章。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "about"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "“我”常去图书馆做什么？",
    "ok": [
     "“我”常去那儿看书、学习，有时候查资料。"
    ],
    "bad": [
     [
      "“我”要写一篇关于中国历史的文章。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "图书馆很大，有很多书。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "freq"
   },
   {
    "id": "h8",
    "who": "课文",
    "q": "今天“我”去图书馆做什么？",
    "ok": [
     "今天“我”去图书馆查资料。"
    ],
    "bad": [
     [
      "图书馆很大，有很多书。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "“我”要写一篇关于中国历史的文章。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "常常",
     "进来",
     "看书"
    ],
    "ok": 0,
    "s": "你_去图书馆吗？",
    "why": "常常 (thường xuyên) đứng trước động từ 去 — hỏi về tần suất.",
    "g": "freq"
   },
   {
    "id": "d2",
    "o": [
     "也",
     "常常",
     "在"
    ],
    "ok": 0,
    "s": "我借书，_还书。",
    "why": "也 (cũng) — thêm một hành động tương tự: vừa mượn sách, cũng trả sách.",
    "g": "also"
   },
   {
    "id": "d3",
    "o": [
     "第一次",
     "有时候",
     "常常"
    ],
    "ok": 0,
    "s": "这是我_用汉语写文章。",
    "why": "第一次 + V — cấu trúc “lần đầu tiên làm gì”, nhấn mạnh hành động chưa từng xảy ra.",
    "g": "first"
   },
   {
    "id": "d4",
    "o": [
     "关于",
     "对于",
     "因为"
    ],
    "ok": 0,
    "s": "我想写一篇_中国历史的文章。",
    "why": "关于 + N + 的 + N — giới thiệu chủ đề của bài văn.",
    "g": "about"
   },
   {
    "id": "d5",
    "o": [
     "常常",
     "一起",
     "也"
    ],
    "ok": 0,
    "s": "我_在那儿看书，有时候查资料。",
    "why": "常常 (thường xuyên) đối lập với 有时候 (thỉnh thoảng) ngay sau đó trong câu.",
    "g": "freq"
   },
   {
    "id": "d6",
    "o": [
     "跟",
     "在",
     "去"
    ],
    "ok": 0,
    "s": "今天你想_我一起去吗？",
    "why": "跟 + người + 一起 + V — “cùng ai đó làm gì”.",
    "g": "ju"
   },
   {
    "id": "d7",
    "o": [
     "也",
     "常",
     "在"
    ],
    "ok": 0,
    "s": "好，我_去借几本书。",
    "why": "也 (cũng) — 山田 đồng ý hưởng ứng, cũng đi mượn sách.",
    "g": "also"
   },
   {
    "id": "d8",
    "o": [
     "都",
     "也",
     "常"
    ],
    "ok": 0,
    "s": "每天_有很多人去那儿看书。",
    "why": "都 (đều) — nhấn mạnh không ngày nào thiếu, ngày nào cũng vậy.",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Đây là lần đầu tiên tôi viết văn bằng tiếng Trung.",
    "p": [
     "这",
     "是",
     "我",
     "第一次",
     "用汉语写文章"
    ],
    "nhieu": [
     "想",
     "查资料"
    ],
    "py": "Zhè shì wǒ dì-yī cì yòng Hànyǔ xiě wénzhāng.",
    "g": "first",
    "boss": 0
   },
   {
    "id": "t2",
    "vi": "Hôm nay cậu có muốn đi cùng tớ không?",
    "p": [
     "你",
     "今天",
     "想",
     "跟我一起去",
     "吗"
    ],
    "nhieu": [
     "有时候",
     "去"
    ],
    "py": "",
    "g": "ju",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t3",
    "vi": "Tớ cũng đi mượn vài quyển sách.",
    "p": [
     "我",
     "也",
     "去",
     "借",
     "几本书"
    ],
    "nhieu": [
     "你",
     "很多人"
    ],
    "py": "",
    "g": "also",
    "boss": 1
   }
  ]
 },
 {
  "id": "yuedu-bai-17",
  "mon": "yuedu",
  "n": 17,
  "zh": "第十七课",
  "vi": "Bài 17",
  "lk": "../../yuedu/bai-17/",
  "gr": {
   "progress": {
    "zh": "(正)在...呢",
    "vi": "Sub + (正)在 + V(O) + 呢",
    "huy": "Điểm (正)在...呢",
    "ct": "Sub + (正)在 + V(O) + 呢 — (正)在 đứng trước động từ; 呢 đặt cuối câu, có thể dùng riêng lẻ hoặc kết hợp cả hai."
   },
   "everyday": {
    "zh": "每天都 + V",
    "vi": "Sub + 每天 + 都 + V(O)",
    "huy": "Điểm 每天都 + V",
    "ct": "Sub + 每天 + 都 + V(O) — 每天 (mỗi ngày) đặt trước 都, 都 đặt ngay trước động từ vị ngữ."
   },
   "twotime": {
    "zh": "时间1 和 时间2 + V",
    "vi": "时间1 + 和 + 时间2 + V(O)",
    "huy": "Điểm 时间1 和 时间2 + V",
    "ct": "时间1 + 和 + 时间2 + V(O) — 和 nối hai mốc thời gian, cả cụm thời gian đứng trước động từ (như mọi trạng ngữ chỉ thời gian)."
   },
   "then": {
    "zh": "V1，然后 V2 / V1 + 以后，V2",
    "vi": "V1(O)，然后 + V2(O)  ｜  V1(O) + 以后，V2(O)",
    "huy": "Điểm V1，然后 V2 / V1 + 以后，V2",
    "ct": "V1(O)，然后 + V2(O)  ｜  V1(O) + 以后，V2(O) — 以后 đặt SAU động từ/cụm động từ đầu tiên; 然后 đặt ĐẦU vế câu thứ hai, trước động từ tiếp theo."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "山田，",
     "你在",
     "做什么",
     "呢"
    ],
    "py": "Shāntián, nǐ zài zuò shénme ne?",
    "vi": "Sơn Điền, cậu đang làm gì đấy?",
    "g": "progress",
    "pu": "？"
   },
   {
    "id": "s2",
    "p": [
     "下午",
     "我要",
     "去商店",
     "买东西，",
     "你跟我",
     "一起去吧"
    ],
    "py": "Xiàwǔ wǒ yào qù shāngdiàn mǎi dōngxi, nǐ gēn wǒ yìqǐ qù ba.",
    "vi": "Chiều nay tớ phải đi cửa hàng mua đồ, cậu đi cùng tớ nhé.",
    "g": "ju"
   },
   {
    "id": "s3",
    "p": [
     "我们",
     "四点",
     "在学校门口",
     "见面"
    ],
    "py": "",
    "vi": "Chúng ta hẹn 4 giờ gặp nhau ở cổng trường.",
    "g": "ju"
   },
   {
    "id": "s4",
    "p": [
     "你",
     "哪天",
     "有",
     "综合课"
    ],
    "py": "",
    "vi": "Cậu có môn tổng hợp vào ngày nào?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s5",
    "p": [
     "我",
     "每天",
     "都有",
     "综合课"
    ],
    "py": "Wǒ měitiān dōu yǒu zōnghé kè.",
    "vi": "Ngày nào tớ cũng có môn tổng hợp.",
    "g": "everyday"
   },
   {
    "id": "s6",
    "p": [
     "星期一",
     "和",
     "星期三",
     "有听力课"
    ],
    "py": "",
    "vi": "Thứ Hai và thứ Tư có môn nghe.",
    "g": "twotime"
   },
   {
    "id": "s7",
    "p": [
     "今天",
     "要做的",
     "事",
     "很多"
    ],
    "py": "",
    "vi": "Hôm nay có rất nhiều việc phải làm.",
    "g": "ju"
   },
   {
    "id": "s8",
    "p": [
     "下课",
     "以后",
     "去，",
     "行吗"
    ],
    "py": "",
    "vi": "Tan học rồi đi, được không?",
    "g": "then",
    "pu": "？"
   },
   {
    "id": "s9",
    "p": [
     "然后",
     "回宿舍",
     "看杂志、",
     "听音乐"
    ],
    "py": "",
    "vi": "Sau đó về ký túc xá đọc tạp chí, nghe nhạc.",
    "g": "then"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "玛丽",
    "q": "山田，你在做什么呢？",
    "ok": [
     "听音乐呢。有事吗？"
    ],
    "bad": [
     [
      "我每天都有综合课。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "下午我要去商店买东西，你跟我一起去吧。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "progress"
   },
   {
    "id": "h2",
    "who": "山田",
    "q": "听音乐呢。有事吗？",
    "ok": [
     "下午我要去商店买东西，你跟我一起去吧。"
    ],
    "bad": [
     [
      "我每天都有综合课。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行，我们四点在学校门口见面。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "progress"
   },
   {
    "id": "h3",
    "who": "山田",
    "q": "下午我有阅读课，下课以后去，行吗？",
    "ok": [
     "行，我们四点在学校门口见面。"
    ],
    "bad": [
     [
      "我每天都有综合课。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "下午我要去商店买东西，你跟我一起去吧。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "then"
   },
   {
    "id": "h4",
    "who": "山田",
    "q": "玛丽，你哪天有综合课？",
    "ok": [
     "我每天都有综合课。"
    ],
    "bad": [
     [
      "有，星期三下午有汉字课。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行，我们四点在学校门口见面。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "everyday"
   },
   {
    "id": "h5",
    "who": "山田",
    "q": "听力课和阅读课呢？",
    "ok": [
     "星期一和星期三有听力课，星期二和星期四有阅读课。"
    ],
    "bad": [
     [
      "下午我要去商店买东西，你跟我一起去吧。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行，我们四点在学校门口见面。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "progress"
   },
   {
    "id": "h6",
    "who": "山田",
    "q": "有汉字课吗？",
    "ok": [
     "有，星期三下午有汉字课。"
    ],
    "bad": [
     [
      "行，我们四点在学校门口见面。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我每天都有综合课。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "今天星期几？",
    "ok": [
     "今天星期日。"
    ],
    "bad": [
     [
      "山本上午要写阅读课的作业、预习星期一的语法和生词；下午要去邮局寄信、去银行换钱、去书店买词典；晚上要去大使馆看朋友。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "不，马丁下午跟山本一起去邮局买杂志，不去商店。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h8",
    "who": "课文",
    "q": "山本今天要做什么？",
    "ok": [
     "山本上午要写阅读课的作业、预习星期一的语法和生词；下午要去邮局寄信、去银行换钱、去书店买词典；晚上要去大使馆看朋友。"
    ],
    "bad": [
     [
      "不，马丁下午跟山本一起去邮局买杂志，不去商店。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "今天星期日。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "twotime"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "呢",
     "了",
     "过"
    ],
    "ok": 0,
    "s": "你在做什么_？",
    "why": "呢 đặt cuối câu hỏi về hành động đang diễn ra (kết hợp với 在...).",
    "g": "progress"
   },
   {
    "id": "d2",
    "o": [
     "每天都",
     "常常",
     "有时候"
    ],
    "ok": 0,
    "s": "我_有综合课。",
    "why": "每天都 (ngày nào cũng) — 玛丽 khẳng định không ngày nào thiếu môn tổng hợp.",
    "g": "everyday"
   },
   {
    "id": "d3",
    "o": [
     "和",
     "跟",
     "也"
    ],
    "ok": 0,
    "s": "星期一和星期三有听力课，星期二_星期四有阅读课。",
    "why": "和 nối hai mốc thời gian tương đương (星期二 và 星期四), không dùng 跟 vì đây không phải giới từ chỉ đối tượng cùng làm.",
    "g": "twotime"
   },
   {
    "id": "d4",
    "o": [
     "以后",
     "然后",
     "的时候"
    ],
    "ok": 0,
    "s": "下课_去，行吗？",
    "why": "以后 đặt SAU cụm V(O) để chỉ mốc 'sau khi làm gì'.",
    "g": "then"
   },
   {
    "id": "d5",
    "o": [
     "想",
     "看",
     "听"
    ],
    "ok": 0,
    "s": "山本_了想，说今天事很多。",
    "why": "想了想 — dạng láy động từ 'suy nghĩ một chút', từ 想 (nghĩ).",
    "g": "ju"
   },
   {
    "id": "d6",
    "o": [
     "然后",
     "以后",
     "正在"
    ],
    "ok": 0,
    "s": "去邮局买杂志，_回宿舍看杂志。",
    "why": "然后 mở đầu vế câu thứ hai, chỉ hành động tiếp theo trong trình tự.",
    "g": "then"
   },
   {
    "id": "d7",
    "o": [
     "门口",
     "里边",
     "旁边"
    ],
    "ok": 0,
    "s": "我们四点在学校_见面。",
    "why": "门口 (cổng, cửa ra vào) — địa điểm hẹn gặp trong bài.",
    "g": "ju"
   },
   {
    "id": "d8",
    "o": [
     "事",
     "东西",
     "书"
    ],
    "ok": 0,
    "s": "今天要做的_很多。",
    "why": "事 (việc, sự việc) — 要做的事 nghĩa là những việc cần làm.",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Sơn Điền, cậu đang làm gì đấy?",
    "p": [
     "山田，",
     "你在",
     "做什么",
     "呢"
    ],
    "nhieu": [
     "每天",
     "我"
    ],
    "py": "Shāntián, nǐ zài zuò shénme ne?",
    "g": "progress",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t2",
    "vi": "Chiều nay tớ phải đi cửa hàng mua đồ, cậu đi cùng tớ nhé.",
    "p": [
     "下午",
     "我要",
     "去商店",
     "买东西，",
     "你跟我",
     "一起去吧"
    ],
    "nhieu": [
     "星期一",
     "综合课"
    ],
    "py": "Xiàwǔ wǒ yào qù shāngdiàn mǎi dōngxi, nǐ gēn wǒ yìqǐ qù ba.",
    "g": "ju",
    "boss": 0
   },
   {
    "id": "t3",
    "vi": "Chúng ta hẹn 4 giờ gặp nhau ở cổng trường.",
    "p": [
     "我们",
     "四点",
     "在学校门口",
     "见面"
    ],
    "nhieu": [
     "行吗",
     "每天"
    ],
    "py": "",
    "g": "ju",
    "boss": 1
   }
  ]
 },
 {
  "id": "yuedu-bai-18",
  "mon": "yuedu",
  "n": 18,
  "zh": "第十八课",
  "vi": "Bài 18",
  "lk": "../../yuedu/bai-18/",
  "gr": {
   "ti": {
    "zh": "替 + người + V",
    "vi": "Sub + 替 + Obj(người) + V(O)",
    "huy": "Điểm 替 + người + V",
    "ct": "Sub + 替 + Obj(người) + V(O) — 替 + người + V đứng sau chủ ngữ, trước động từ chính — 替 mang nghĩa “thay, giúp”."
   },
   "dang": {
    "zh": "给 + người + 当 + vai trò",
    "vi": "给 + Obj(người) + 当 + N(vai trò/nghề)",
    "huy": "Điểm 给 + người + 当 + vai trò",
    "ct": "给 + Obj(người) + 当 + N(vai trò/nghề) — 给 + người đứng trước 当 + danh từ chỉ vai trò, không dùng 是."
   },
   "haishi": {
    "zh": "VP1 还是 VP2",
    "vi": "VP1 + 还是 + VP2？",
    "huy": "Điểm VP1 还是 VP2",
    "ct": "VP1 + 还是 + VP2？ — 还是 nối 2 phương án lựa chọn, đặt giữa hai cụm động từ/vị ngữ song song."
   },
   "gen": {
    "zh": "跟 + người + 一起 + V",
    "vi": "Sub + 跟 + Obj(người) + 一起 + V(O)",
    "huy": "Điểm 跟 + người + 一起 + V",
    "ct": "Sub + 跟 + Obj(người) + 一起 + V(O) — 跟 + người + 一起 đứng trước động từ chính, làm trạng ngữ chỉ đối tượng cùng thực hiện."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "你",
     "替我",
     "还",
     "一本书，",
     "行吗"
    ],
    "py": "Nǐ tì wǒ huán yì běn shū, xíng ma?",
    "vi": "Cậu trả giúp tớ một quyển sách được không?",
    "g": "ti",
    "pu": "？"
   },
   {
    "id": "s2",
    "p": [
     "明天",
     "我",
     "跟朋友",
     "一起",
     "去上海"
    ],
    "py": "",
    "vi": "Ngày mai tớ cùng bạn đi Thượng Hải.",
    "g": "gen"
   },
   {
    "id": "s3",
    "p": [
     "给",
     "我的朋友",
     "当",
     "翻译"
    ],
    "py": "",
    "vi": "Làm phiên dịch cho bạn tớ.",
    "g": "dang"
   },
   {
    "id": "s4",
    "p": [
     "你们",
     "怎么去？",
     "坐飞机去",
     "还是",
     "坐火车去"
    ],
    "py": "Nǐmen zěnme qù? Zuò fēijī qù háishi zuò huǒchē qù?",
    "vi": "Các cậu đi bằng gì? Đi máy bay hay đi tàu hỏa?",
    "g": "haishi",
    "pu": "？"
   },
   {
    "id": "s5",
    "p": [
     "书",
     "我",
     "替你",
     "还，",
     "放心吧"
    ],
    "py": "",
    "vi": "Sách để tớ trả giúp cậu, yên tâm đi.",
    "g": "ti"
   },
   {
    "id": "s6",
    "p": [
     "马丁",
     "来中国",
     "学习",
     "汉语"
    ],
    "py": "Mǎdīng lái Zhōngguó xuéxí Hànyǔ.",
    "vi": "Martin đến Trung Quốc học tiếng Hán.",
    "g": "ju"
   },
   {
    "id": "s7",
    "p": [
     "上星期",
     "马丁的姐姐",
     "来",
     "中国了"
    ],
    "py": "Shàng xīngqī Mǎdīng de jiějie lái Zhōngguó le.",
    "vi": "Tuần trước chị gái của Martin đã đến Trung Quốc.",
    "g": "ju"
   },
   {
    "id": "s8",
    "p": [
     "马丁",
     "要",
     "跟姐姐",
     "去上海",
     "旅行"
    ],
    "py": "Mǎdīng yào gēn jiějie qù Shànghǎi lǚxíng,",
    "vi": "Martin sẽ cùng chị gái đi Thượng Hải du lịch,",
    "g": "gen"
   },
   {
    "id": "s9",
    "p": [
     "他们",
     "想",
     "坐火车",
     "去"
    ],
    "py": "tāmen xiǎng zuò huǒchē qù.",
    "vi": "Họ muốn đi bằng tàu hỏa.",
    "g": "ju"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "玛丽",
    "q": "山田，你去哪儿？",
    "ok": [
     "我去图书馆借书。"
    ],
    "bad": [
     [
      "不客气。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "好，书我替你还，放心吧。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h2",
    "who": "玛丽",
    "q": "你替我还一本书，行吗？",
    "ok": [
     "没问题。玛丽，你去哪儿？"
    ],
    "bad": [
     [
      "谢谢！",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "不客气。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ti"
   },
   {
    "id": "h3",
    "who": "山田",
    "q": "没问题。玛丽，你去哪儿？",
    "ok": [
     "去买票，明天我跟朋友一起去上海。"
    ],
    "bad": [
     [
      "好，书我替你还，放心吧。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "不，去工作，给我的朋友当翻译。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "gen"
   },
   {
    "id": "h4",
    "who": "山田",
    "q": "去旅行？",
    "ok": [
     "不，去工作，给我的朋友当翻译。"
    ],
    "bad": [
     [
      "我去图书馆借书。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "不客气。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "dang"
   },
   {
    "id": "h5",
    "who": "山田",
    "q": "你们怎么去？坐飞机去还是坐火车去？",
    "ok": [
     "坐飞机去。"
    ],
    "bad": [
     [
      "谢谢！",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我去图书馆借书。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "haishi"
   },
   {
    "id": "h6",
    "who": "课文",
    "q": "马丁来中国做什么？ A.旅行 B.学汉语 C.做翻译",
    "ok": [
     "Đáp án: B. 学汉语 — 马丁来中国学习汉语。"
    ],
    "bad": [
     [
      "Đáp án: B. 坐火车 — 他们想坐火车去。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "Đáp án: B. 不会 — vì 马丁要给姐姐当翻译，chứng tỏ chị gái không biết nói tiếng Hán。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "马丁的姐姐会说汉语吗？ A.会 B.不会 C.汉语很好",
    "ok": [
     "Đáp án: B. 不会 — vì 马丁要给姐姐当翻译，chứng tỏ chị gái không biết nói tiếng Hán。"
    ],
    "bad": [
     [
      "Đáp án: B. 学汉语 — 马丁来中国学习汉语。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "老师、医生、公司职员，还有各国的留学生。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "dang"
   },
   {
    "id": "h8",
    "who": "课文",
    "q": "他们想怎么去旅行？ A.坐飞机 B.坐火车 C.坐汽车",
    "ok": [
     "Đáp án: B. 坐火车 — 他们想坐火车去。"
    ],
    "bad": [
     [
      "Đáp án: B. 不会 — vì 马丁要给姐姐当翻译，chứng tỏ chị gái không biết nói tiếng Hán。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "Đáp án: B. 学汉语 — 马丁来中国学习汉语。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "替",
     "跟",
     "给"
    ],
    "ok": 0,
    "s": "你_我还一本书，行吗？",
    "why": "替 + người + V — nhờ ai làm thay việc gì.",
    "g": "ti"
   },
   {
    "id": "d2",
    "o": [
     "跟",
     "替",
     "当"
    ],
    "ok": 0,
    "s": "去买票，明天我_朋友一起去上海。",
    "why": "跟 + người + 一起 + V — cùng ai đó làm gì.",
    "g": "gen"
   },
   {
    "id": "d3",
    "o": [
     "当",
     "是",
     "做"
    ],
    "ok": 0,
    "s": "不，去工作，给我的朋友_翻译。",
    "why": "给 + người + 当 + vai trò — đảm nhận vai trò/nghề nghiệp cho ai.",
    "g": "dang"
   },
   {
    "id": "d4",
    "o": [
     "还是",
     "或者",
     "也"
    ],
    "ok": 0,
    "s": "你们怎么去？坐飞机去_坐火车去？",
    "why": "还是 nối 2 phương án trong câu hỏi lựa chọn.",
    "g": "haishi"
   },
   {
    "id": "d5",
    "o": [
     "放心",
     "小心",
     "开心"
    ],
    "ok": 0,
    "s": "好，书我替你还，_吧。",
    "why": "放心 (yên tâm) — trấn an người nghe đừng lo lắng.",
    "g": "ju"
   },
   {
    "id": "d6",
    "o": [
     "来",
     "去",
     "到"
    ],
    "ok": 0,
    "s": "马丁_中国学习汉语。",
    "why": "来 + địa điểm — đến một nơi (góc nhìn từ nơi người nói đang ở).",
    "g": "ju"
   },
   {
    "id": "d7",
    "o": [
     "旅行",
     "代表",
     "参观"
    ],
    "ok": 0,
    "s": "马丁要跟姐姐去上海_。",
    "why": "旅行 (đi du lịch, đi xa) — phù hợp ngữ cảnh đi chơi cùng chị gái.",
    "g": "ju"
   },
   {
    "id": "d8",
    "o": [
     "想",
     "当",
     "替"
    ],
    "ok": 0,
    "s": "他们_坐火车去。",
    "why": "想 + V — muốn làm gì, diễn tả ý định.",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Cậu trả giúp tớ một quyển sách được không?",
    "p": [
     "你",
     "替我",
     "还",
     "一本书，",
     "行吗"
    ],
    "nhieu": [
     "还，",
     "马丁"
    ],
    "py": "Nǐ tì wǒ huán yì běn shū, xíng ma?",
    "g": "ti",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t2",
    "vi": "Ngày mai tớ cùng bạn đi Thượng Hải.",
    "p": [
     "明天",
     "我",
     "跟朋友",
     "一起",
     "去上海"
    ],
    "nhieu": [
     "还",
     "替你"
    ],
    "py": "",
    "g": "gen",
    "boss": 0
   },
   {
    "id": "t3",
    "vi": "Các cậu đi bằng gì? Đi máy bay hay đi tàu hỏa?",
    "p": [
     "你们",
     "怎么去？",
     "坐飞机去",
     "还是",
     "坐火车去"
    ],
    "nhieu": [
     "跟姐姐",
     "他们"
    ],
    "py": "Nǐmen zěnme qù? Zuò fēijī qù háishi zuò huǒchē qù?",
    "g": "haishi",
    "boss": 1,
    "pu": "？"
   }
  ]
 },
 {
  "id": "yuedu-bai-19",
  "mon": "yuedu",
  "n": 19,
  "zh": "第十九课",
  "vi": "Bài 19",
  "lk": "../../yuedu/bai-19/",
  "gr": {
   "tai": {
    "zh": "太 + Adj + 了",
    "vi": "Sub + 太 + Adj + 了",
    "huy": "Điểm 太 + Adj + 了",
    "ct": "Sub + 太 + Adj + 了 — 太 là phó từ chỉ mức độ, đứng TRƯỚC tính từ; cuối câu thường có 了 đi kèm (太…了). Theo HSK 3.0: phó từ mức độ 太 thuộc HSK1."
   },
   "youdianr": {
    "zh": "有点儿 + Adj ⟷ Adj + 一点儿",
    "vi": "有点儿 + Adj (hơi… — không vừa ý)　|　Adj + 一点儿 (…hơn một chút — so sánh/đề nghị)",
    "huy": "Điểm 有点儿 + Adj ⟷ Adj + 一点儿",
    "ct": "有点儿 + Adj (hơi… — không vừa ý)　|　Adj + 一点儿 (…hơn một chút — so sánh/đề nghị) — 有点儿 là phó từ, đứng TRƯỚC tính từ; 一点儿 là bổ ngữ số lượng, đứng SAU tính từ. Theo HSK 3.0: 有（一）点儿 thuộc HSK1."
   },
   "de": {
    "zh": "的字短语: Adj/N + 的",
    "vi": "(这件) + Adj/N + 的　=　(这件) + Adj/N + 的 + 衣服",
    "huy": "Điểm 的字短语: Adj/N + 的",
    "ct": "(这件) + Adj/N + 的　=　(这件) + Adj/N + 的 + 衣服 — Tính từ / danh từ + 的 tạo thành một cụm danh từ, danh từ trung tâm (衣服) được lược bỏ. Theo HSK 3.0: “的”字短语 thuộc HSK2."
   },
   "bubu": {
    "zh": "不 A 不 B",
    "vi": "不 + A + 不 + B (A, B là cặp tính từ trái nghĩa)",
    "huy": "Điểm 不 A 不 B",
    "ct": "不 + A + 不 + B (A, B là cặp tính từ trái nghĩa) — A, B là cặp tính từ đơn âm tiết trái nghĩa: 长/短、大/小、肥/瘦、深/浅. Theo HSK 3.0: cấu trúc cố định 不A不B thuộc HSK3."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "山田，",
     "你看",
     "这件衣服",
     "怎么样"
    ],
    "py": "Shāntián, nǐ kàn zhè jiàn yīfu zěnmeyàng?",
    "vi": "Sơn Điền, cậu xem bộ quần áo này thế nào?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s2",
    "p": [
     "不好，",
     "颜色",
     "太深",
     "了"
    ],
    "py": "Bù hǎo, yánsè tài shēn le.",
    "vi": "Không đẹp, màu đậm quá.",
    "g": "tai"
   },
   {
    "id": "s3",
    "p": [
     "长短",
     "还可以，",
     "是不是",
     "太红了"
    ],
    "py": "Chángduǎn hái kěyǐ, shì bu shì tài hóng le?",
    "vi": "Độ dài thì tạm được, có phải đỏ quá không?",
    "g": "tai",
    "pu": "？"
   },
   {
    "id": "s4",
    "p": [
     "这件",
     "浅蓝色的",
     "行吗"
    ],
    "py": "Zhè jiàn qiǎnlánsè de xíng ma?",
    "vi": "Cái màu xanh nhạt này được không?",
    "g": "de",
    "pu": "？"
   },
   {
    "id": "s5",
    "p": [
     "不长",
     "不短，",
     "颜色好，",
     "样子",
     "也很漂亮"
    ],
    "py": "",
    "vi": "Không dài không ngắn, màu đẹp, kiểu dáng cũng rất đẹp.",
    "g": "bubu"
   },
   {
    "id": "s6",
    "p": [
     "最好",
     "是去",
     "商场",
     "和服装店"
    ],
    "py": "Zuì hǎo shì qù shāngchǎng hé fúzhuāngdiàn.",
    "vi": "Tốt nhất là đến trung tâm thương mại và cửa hàng thời trang.",
    "g": "ju"
   },
   {
    "id": "s7",
    "p": [
     "各种",
     "颜色的",
     "都有，",
     "也",
     "不太贵"
    ],
    "py": "",
    "vi": "Màu nào cũng có, lại không đắt lắm.",
    "g": "tai"
   },
   {
    "id": "s8",
    "p": [
     "还可以",
     "问售货员：",
     "“可以",
     "便宜一点儿吗？”"
    ],
    "py": "hái kěyǐ wèn shòuhuòyuán: “Kěyǐ piányi yìdiǎnr ma?”",
    "vi": "Còn có thể hỏi người bán hàng: “Có thể rẻ hơn một chút không?”",
    "g": "youdianr"
   },
   {
    "id": "s9",
    "p": [
     "你可以",
     "花不太多的钱",
     "买到",
     "很好看的",
     "衣服"
    ],
    "py": "",
    "vi": "Bạn có thể tiêu không nhiều tiền mà mua được quần áo rất đẹp.",
    "g": "tai"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "玛丽",
    "q": "山田，你看这件衣服怎么样？",
    "ok": [
     "不好，颜色太深了。"
    ],
    "bad": [
     [
      "有点儿小。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行，不长不短，颜色好，样子也很漂亮。穿这件吧。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "tai"
   },
   {
    "id": "h2",
    "who": "玛丽",
    "q": "这件红色的怎么样？",
    "ok": [
     "长短还可以，是不是太红了？"
    ],
    "bad": [
     [
      "不好，颜色太深了。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行，不长不短，颜色好，样子也很漂亮。穿这件吧。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "tai"
   },
   {
    "id": "h3",
    "who": "山田",
    "q": "长短还可以，是不是太红了？",
    "ok": [
     "这件绿色的呢？"
    ],
    "bad": [
     [
      "行，不长不短，颜色好，样子也很漂亮。穿这件吧。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行，穿这件。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "tai"
   },
   {
    "id": "h4",
    "who": "玛丽",
    "q": "这件绿色的呢？",
    "ok": [
     "有点儿小。"
    ],
    "bad": [
     [
      "不好，颜色太深了。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行，穿这件。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "youdianr"
   },
   {
    "id": "h5",
    "who": "玛丽",
    "q": "这件浅蓝色的行吗？",
    "ok": [
     "行，不长不短，颜色好，样子也很漂亮。穿这件吧。"
    ],
    "bad": [
     [
      "不好，颜色太深了。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行，穿这件。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "de"
   },
   {
    "id": "h6",
    "who": "课文",
    "q": "(1) 谁晚上去看朋友？",
    "ok": [
     "玛丽晚上去看朋友。"
    ],
    "bad": [
     [
      "长短还可以，可是（是不是）太红了。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "Đáp án: B. 有点儿小 — 山田 nói: “有点儿小。”",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "(2) 玛丽晚上穿什么颜色的衣服？",
    "ok": [
     "玛丽晚上穿浅蓝色的衣服。"
    ],
    "bad": [
     [
      "Đáp án: B. 有点儿小 — 山田 nói: “有点儿小。”",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "因为这件浅蓝色的衣服不长不短，颜色好，样子也很漂亮。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "de"
   },
   {
    "id": "h8",
    "who": "课文",
    "q": "(3) 红色的衣服怎么样？",
    "ok": [
     "长短还可以，可是（是不是）太红了。"
    ],
    "bad": [
     [
      "玛丽晚上去看朋友。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "玛丽晚上穿浅蓝色的衣服。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "tai"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "太",
     "一点儿",
     "不"
    ],
    "ok": 0,
    "s": "不好，颜色_深了。",
    "why": "太 + Adj + 了 — mức độ vượt quá, ý không hài lòng.",
    "g": "tai"
   },
   {
    "id": "d2",
    "o": [
     "有点儿",
     "一点儿",
     "太"
    ],
    "ok": 0,
    "s": "这件绿色的_小。",
    "why": "有点儿 + Adj — hơi… (không vừa ý); 有点儿 đứng TRƯỚC tính từ.",
    "g": "youdianr"
   },
   {
    "id": "d3",
    "o": [
     "一点儿",
     "有点儿",
     "太"
    ],
    "ok": 0,
    "s": "可以便宜_吗？",
    "why": "Adj + 一点儿 — …hơn một chút; dùng khi mặc cả, đề nghị.",
    "g": "youdianr"
   },
   {
    "id": "d4",
    "o": [
     "不",
     "也",
     "很"
    ],
    "ok": 0,
    "s": "行，不长_短，颜色好。",
    "why": "不A不B — vừa phải, không quá A cũng không quá B.",
    "g": "bubu"
   },
   {
    "id": "d5",
    "o": [
     "的",
     "了",
     "吗"
    ],
    "ok": 0,
    "s": "这件红色_怎么样？",
    "why": "的字短语 — 红色的 = 红色的衣服 (lược bỏ danh từ trung tâm).",
    "g": "de"
   },
   {
    "id": "d6",
    "o": [
     "了",
     "的",
     "吗"
    ],
    "ok": 0,
    "s": "长短还可以，是不是太红_？",
    "why": "太…了 — 了 đi kèm cuối câu; câu hỏi đã có 是不是 nên không thêm 吗.",
    "g": "tai"
   },
   {
    "id": "d7",
    "o": [
     "试",
     "适",
     "是"
    ],
    "ok": 0,
    "s": "您_试这件衣服。",
    "why": "试试 — thử xem (động từ lặp lại). 试/适/是/市 đều đọc shì — phân biệt bằng bộ thủ!",
    "g": "ju"
   },
   {
    "id": "d8",
    "o": [
     "适",
     "试",
     "是"
    ],
    "ok": 0,
    "s": "这件衣服不长不短很合_。",
    "why": "合适 — vừa vặn, phù hợp (bộ 辶).",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Không dài không ngắn, màu đẹp, kiểu dáng cũng rất đẹp.",
    "p": [
     "不长",
     "不短，",
     "颜色好，",
     "样子",
     "也很漂亮"
    ],
    "nhieu": [
     "山田，",
     "都有，"
    ],
    "py": "",
    "g": "bubu",
    "boss": 0
   },
   {
    "id": "t2",
    "vi": "Màu nào cũng có, lại không đắt lắm.",
    "p": [
     "各种",
     "颜色的",
     "都有，",
     "也",
     "不太贵"
    ],
    "nhieu": [
     "山田，",
     "“可以"
    ],
    "py": "",
    "g": "tai",
    "boss": 0
   },
   {
    "id": "t3",
    "vi": "Bạn có thể tiêu không nhiều tiền mà mua được quần áo rất đẹp.",
    "p": [
     "你可以",
     "花不太多的钱",
     "买到",
     "很好看的",
     "衣服"
    ],
    "nhieu": [
     "不太贵",
     "“可以"
    ],
    "py": "",
    "g": "tai",
    "boss": 1
   }
  ]
 },
 {
  "id": "yuedu-bai-20",
  "mon": "yuedu",
  "n": 20,
  "zh": "第二十课",
  "vi": "Bài 20",
  "lk": "../../yuedu/bai-20/",
  "gr": {
   "zhu": {
    "zh": "祝 + người + lời chúc",
    "vi": "祝 + Obj(người) + (Adj/cụm chúc)",
    "huy": "Điểm 祝 + người + lời chúc",
    "ct": "祝 + Obj(người) + (Adj/cụm chúc) — 祝 đứng đầu, sau là người được chúc, cuối cùng là nội dung lời chúc (生日快乐、身体健康、一路平安). Theo HSK 3.0: 祝 thuộc từ vựng HSK4."
   },
   "dasuan": {
    "zh": "打算 + V",
    "vi": "Sub + 打算 + V(O) / 打算 + 怎么 + V？",
    "huy": "Điểm 打算 + V",
    "ct": "Sub + 打算 + V(O) / 打算 + 怎么 + V？ — 打算 là động từ, đứng trước động từ chính; có thể đứng một mình làm danh từ: 你有什么打算？ Theo HSK 3.0: 打算 thuộc HSK3."
   },
   "yiding": {
    "zh": "一定 / 不一定 / 一定不",
    "vi": "Sub + 一定 + V (nhất định)　|　不一定 + V (chưa chắc)　|　一定不 + V (nhất định không)",
    "huy": "Điểm 一定 / 不一定 / 一定不",
    "ct": "Sub + 一定 + V (nhất định)　|　不一定 + V (chưa chắc)　|　一定不 + V (nhất định không) — 一定 là phó từ, đứng trước động từ. Vị trí của 不 quyết định nghĩa: 不一定 (phủ định 一定) ≠ 一定不 (phủ định động từ). Theo HSK 3.0: phó từ tình thái 一定 thuộc HSK3."
   },
   "shide": {
    "zh": "是……的 (nhấn mạnh thời gian)",
    "vi": "Sub + 是 + thời gian/nơi chốn/cách thức + V + 的",
    "huy": "Điểm 是……的 (nhấn mạnh thời gian)",
    "ct": "Sub + 是 + thời gian/nơi chốn/cách thức + V + 的 — 是 đứng trước thành phần cần nhấn mạnh (thời gian 1982年), 的 đặt cuối câu (hoặc trước tân ngữ). 是 có thể lược trong khẩu ngữ, 的 thì không. Theo HSK 3.0: “是……的”句1 thuộc HSK2."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "玛丽，",
     "你今天",
     "为什么",
     "这么高兴"
    ],
    "py": "Mǎlì, nǐ jīntiān wèi shénme zhème gāoxìng?",
    "vi": "Mary, sao hôm nay cậu vui thế?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s2",
    "p": [
     "是吗？",
     "祝你",
     "生日",
     "快乐"
    ],
    "py": "Shì ma? Zhù nǐ shēngrì kuàilè!",
    "vi": "Thế à? Chúc cậu sinh nhật vui vẻ!",
    "g": "zhu",
    "pu": "！"
   },
   {
    "id": "s3",
    "p": [
     "在中国，",
     "一般",
     "可以",
     "问年龄"
    ],
    "py": "",
    "vi": "Ở Trung Quốc, thường thì có thể hỏi tuổi.",
    "g": "ju"
   },
   {
    "id": "s4",
    "p": [
     "你",
     "打算",
     "怎么",
     "过生日呢"
    ],
    "py": "Nǐ dǎsuàn zěnme guò shēngrì ne?",
    "vi": "Cậu định tổ chức sinh nhật thế nào?",
    "g": "dasuan",
    "pu": "？"
   },
   {
    "id": "s5",
    "p": [
     "今晚7点，",
     "在",
     "我的",
     "宿舍"
    ],
    "py": "Jīnwǎn qī diǎn, zài wǒ de sùshè.",
    "vi": "7 giờ tối nay, ở ký túc xá của tớ.",
    "g": "shide"
   },
   {
    "id": "s6",
    "p": [
     "她",
     "第一次",
     "在中国",
     "过生日"
    ],
    "py": "Tā dì-yī cì zài Zhōngguó guò shēngrì.",
    "vi": "Đây là lần đầu tiên cô ấy đón sinh nhật ở Trung Quốc.",
    "g": "ju"
   },
   {
    "id": "s7",
    "p": [
     "晚会",
     "在",
     "玛丽的宿舍",
     "举行"
    ],
    "py": "Wǎnhuì zài Mǎlì de sùshè jǔxíng.",
    "vi": "Buổi tiệc được tổ chức ở ký túc xá của Mary.",
    "g": "shide"
   },
   {
    "id": "s8",
    "p": [
     "玛丽",
     "是",
     "1982年",
     "出生的"
    ],
    "py": "",
    "vi": "Mary sinh năm 1982.",
    "g": "shide"
   },
   {
    "id": "s9",
    "p": [
     "朋友们",
     "唱“生日歌”，",
     "祝玛丽",
     "生日快乐"
    ],
    "py": "péngyoumen chàng “Shēngrì gē”, zhù Mǎlì shēngrì kuàilè.",
    "vi": "Các bạn hát bài “Chúc mừng sinh nhật”, chúc Mary sinh nhật vui vẻ.",
    "g": "zhu"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "张华",
    "q": "玛丽，你今天为什么这么高兴？",
    "ok": [
     "今天是我的生日。"
    ],
    "bad": [
     [
      "对不起，这是秘密，不能告诉你。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我一定去。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "shide"
   },
   {
    "id": "h2",
    "who": "张华",
    "q": "玛丽，你今年多大？",
    "ok": [
     "对不起，这是秘密，不能告诉你。"
    ],
    "bad": [
     [
      "真对不起，我不知道。在中国，一般可以问年龄。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我一定去。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "shide"
   },
   {
    "id": "h3",
    "who": "张华",
    "q": "你打算怎么过生日呢？",
    "ok": [
     "安娜她们说开一个生日晚会，你也参加吧。"
    ],
    "bad": [
     [
      "今晚7点，在我的宿舍。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "是吗？祝你生日快乐！",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "dasuan"
   },
   {
    "id": "h4",
    "who": "张华",
    "q": "好。什么时间？",
    "ok": [
     "今晚7点，在我的宿舍。"
    ],
    "bad": [
     [
      "安娜她们说开一个生日晚会，你也参加吧。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "谢谢！",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "shide"
   },
   {
    "id": "h5",
    "who": "课文",
    "q": "(1) 朋友们打算怎样为玛丽过生日？",
    "ok": [
     "朋友们打算开一个生日晚会。"
    ],
    "bad": [
     [
      "因为玛丽是1982年出生的，这一年是狗年（玛丽属狗）。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "安娜、山田、田中和张华（玛丽的朋友们）参加了玛丽的生日晚会。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "dasuan"
   },
   {
    "id": "h6",
    "who": "课文",
    "q": "(2) 谁参加了玛丽的生日晚会？",
    "ok": [
     "安娜、山田、田中和张华（玛丽的朋友们）参加了玛丽的生日晚会。"
    ],
    "bad": [
     [
      "因为玛丽是1982年出生的，这一年是狗年（玛丽属狗）。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "朋友们打算开一个生日晚会。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "shide"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "(3) 张华为什么送玛丽一只玩具狗？",
    "ok": [
     "因为玛丽是1982年出生的，这一年是狗年（玛丽属狗）。"
    ],
    "bad": [
     [
      "安娜、山田、田中和张华（玛丽的朋友们）参加了玛丽的生日晚会。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "朋友们打算开一个生日晚会。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "shide"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "祝",
     "说",
     "送"
    ],
    "ok": 0,
    "s": "是吗？_你生日快乐！",
    "why": "祝 + người + lời chúc — chúc ai điều gì.",
    "g": "zhu"
   },
   {
    "id": "d2",
    "o": [
     "打算",
     "一定",
     "准备"
    ],
    "ok": 0,
    "s": "你_怎么过生日呢？",
    "why": "打算 + V — dự định làm gì; 打算怎么……？ hỏi kế hoạch.",
    "g": "dasuan"
   },
   {
    "id": "d3",
    "o": [
     "一定",
     "不一定",
     "一定不"
    ],
    "ok": 0,
    "s": "好。什么时间？— 今晚7点。— 我_去。",
    "why": "一定 + V — nhất định, hứa chắc chắn sẽ làm.",
    "g": "yiding"
   },
   {
    "id": "d4",
    "o": [
     "的",
     "了",
     "吗"
    ],
    "ok": 0,
    "s": "他说玛丽是1982年出生_。",
    "why": "是……的 — nhấn mạnh thời gian của việc đã xảy ra (1982年).",
    "g": "shide"
   },
   {
    "id": "d5",
    "o": [
     "大",
     "少",
     "几"
    ],
    "ok": 0,
    "s": "玛丽，你今年多_？",
    "why": "你今年多大？— hỏi tuổi người ngang hàng; trẻ nhỏ hỏi 你几岁？",
    "g": "ju"
   },
   {
    "id": "d6",
    "o": [
     "举行",
     "参加",
     "准备"
    ],
    "ok": 0,
    "s": "晚会在玛丽的宿舍_。",
    "why": "举行 — tổ chức, cử hành (buổi tiệc, hội nghị).",
    "g": "ju"
   },
   {
    "id": "d7",
    "o": [
     "参加",
     "举行",
     "打算"
    ],
    "ok": 0,
    "s": "安娜她们说开一个生日晚会，你也_吧。",
    "why": "参加 — tham gia (hoạt động, buổi tiệc).",
    "g": "ju"
   },
   {
    "id": "d8",
    "o": [
     "狗",
     "句",
     "够"
    ],
    "ok": 0,
    "s": "张华送玛丽一只玩具小_。",
    "why": "狗 (犭+句) — con chó; 句/够/苟 cùng có bộ phận 句.",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Mary, sao hôm nay cậu vui thế?",
    "p": [
     "玛丽，",
     "你今天",
     "为什么",
     "这么高兴"
    ],
    "nhieu": [
     "第一次",
     "玛丽"
    ],
    "py": "Mǎlì, nǐ jīntiān wèi shénme zhème gāoxìng?",
    "g": "ju",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t2",
    "vi": "Thế à? Chúc cậu sinh nhật vui vẻ!",
    "p": [
     "是吗？",
     "祝你",
     "生日",
     "快乐"
    ],
    "nhieu": [
     "第一次",
     "玛丽"
    ],
    "py": "Shì ma? Zhù nǐ shēngrì kuàilè!",
    "g": "zhu",
    "boss": 0,
    "pu": "！"
   },
   {
    "id": "t3",
    "vi": "Ở Trung Quốc, thường thì có thể hỏi tuổi.",
    "p": [
     "在中国，",
     "一般",
     "可以",
     "问年龄"
    ],
    "nhieu": [
     "为什么",
     "是吗？"
    ],
    "py": "",
    "g": "ju",
    "boss": 1
   }
  ]
 },
 {
  "id": "yuedu-bai-21",
  "mon": "yuedu",
  "n": 21,
  "zh": "第二十一课",
  "vi": "Bài 21",
  "lk": "../../yuedu/bai-21/",
  "gr": {
   "shijian": {
    "zh": "Nói giờ: 点 · 分 · 刻 · 半 · 差",
    "vi": "… 点 (+ … 分 / 一刻 / 半 / 三刻)　|　差 + … 分 / 一刻 + … 点",
    "huy": "Điểm Nói giờ: 点 · 分 · 刻 · 半 · 差",
    "ct": "… 点 (+ … 分 / 一刻 / 半 / 三刻)　|　差 + … 分 / 一刻 + … 点 — Giờ đặt TRƯỚC động từ (时间 + V): 八点半吃早饭, không nói 吃早饭八点半. 差 đứng ĐẦU cụm giờ: 差一刻八点. Theo HSK 3.0: 钟点表示法 thuộc HSK1, lượng từ 刻 thuộc HSK3."
   },
   "yihou": {
    "zh": "V / N + 以后 (后)",
    "vi": "V/N + 以后 / 后, + mệnh đề sau",
    "huy": "Điểm V / N + 以后 (后)",
    "ct": "V/N + 以后 / 后, + mệnh đề sau — 以后/后 đứng SAU động từ hoặc danh từ chỉ sự việc, làm trạng ngữ thời gian ở đầu câu. Theo HSK 3.0: （在）……以前/以后/前/后 thuộc HSK3."
   },
   "youshihou": {
    "zh": "有时候……，有时候……",
    "vi": "有时候 + V1 (O1)，有时候 + V2 (O2)",
    "huy": "Điểm 有时候……，有时候……",
    "ct": "有时候 + V1 (O1)，有时候 + V2 (O2) — 有时候 đặt trước động từ (hoặc đầu câu), lặp lại hai lần để nối hai hành động luân phiên."
   },
   "zuoyou": {
    "zh": "thời gian / số lượng + 左右",
    "vi": "Số (thời gian, tuổi, tiền…) + 左右",
    "huy": "Điểm thời gian / số lượng + 左右",
    "ct": "Số (thời gian, tuổi, tiền…) + 左右 — 左右 đứng SAU con số (khác tiếng Việt “khoảng” đứng trước). Theo HSK 3.0: dùng 大约、左右 biểu thị số ước lượng thuộc HSK4."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "玛丽，",
     "你",
     "周末",
     "常常",
     "做什么"
    ],
    "py": "Mǎlì, nǐ zhōumò chángcháng zuò shénme?",
    "vi": "Mary, cuối tuần cậu thường làm gì?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s2",
    "p": [
     "我",
     "星期六早上",
     "差一刻八点",
     "起床"
    ],
    "py": "",
    "vi": "Sáng thứ Bảy tớ dậy lúc 8 giờ kém 15.",
    "g": "shijian"
   },
   {
    "id": "s3",
    "p": [
     "早饭后",
     "我",
     "骑自行车",
     "出去"
    ],
    "py": "",
    "vi": "Ăn sáng xong tớ đạp xe ra ngoài.",
    "g": "ju"
   },
   {
    "id": "s4",
    "p": [
     "有时候",
     "去看朋友，",
     "有时候",
     "去公园"
    ],
    "py": "",
    "vi": "Có khi đi thăm bạn, có khi đi công viên.",
    "g": "youshihou"
   },
   {
    "id": "s5",
    "p": [
     "晚上",
     "我常常",
     "跟朋友一起",
     "在饭馆儿",
     "吃晚饭"
    ],
    "py": "",
    "vi": "Buổi tối tớ thường cùng bạn ăn tối ở quán.",
    "g": "ju"
   },
   {
    "id": "s6",
    "p": [
     "很多",
     "中国人",
     "常常",
     "早睡早起"
    ],
    "py": "Hěn duō Zhōngguórén chángcháng zǎo shuì zǎo qǐ.",
    "vi": "Nhiều người Trung Quốc thường ngủ sớm dậy sớm.",
    "g": "ju"
   },
   {
    "id": "s7",
    "p": [
     "起床以后",
     "去",
     "锻炼",
     "身体"
    ],
    "py": "",
    "vi": "Dậy xong đi tập thể dục.",
    "g": "yihou"
   },
   {
    "id": "s8",
    "p": [
     "十二点",
     "一刻",
     "吃",
     "午饭"
    ],
    "py": "",
    "vi": "12 giờ 15 ăn trưa.",
    "g": "shijian"
   },
   {
    "id": "s9",
    "p": [
     "很多人",
     "十点半",
     "左右",
     "睡觉"
    ],
    "py": "hěn duō rén shí diǎn bàn zuǒyòu shuìjiào.",
    "vi": "Nhiều người đi ngủ khoảng 10 giờ rưỡi.",
    "g": "zuoyou"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "山田",
    "q": "玛丽，你周末常常做什么？",
    "ok": [
     "我星期六早上差一刻八点起床，八点半吃早饭。早饭后我骑自行车出去，有时候去看朋友，有时候去公园。"
    ],
    "bad": [
     [
      "有时候打电话，有时候发微信。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "下午回学校。晚上我常常跟朋友一起在饭馆儿吃晚饭。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "youshihou"
   },
   {
    "id": "h2",
    "who": "山田",
    "q": "你什么时候回学校？",
    "ok": [
     "下午回学校。晚上我常常跟朋友一起在饭馆儿吃晚饭。"
    ],
    "bad": [
     [
      "星期日我常常在宿舍里看书，听音乐，预习下星期的生词、语法。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我星期六早上差一刻八点起床，八点半吃早饭。早饭后我骑自行车出去，有时候去看朋友，有时候去公园。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h3",
    "who": "山田",
    "q": "星期日你做什么呢？",
    "ok": [
     "星期日我常常在宿舍里看书，听音乐，预习下星期的生词、语法。"
    ],
    "bad": [
     [
      "我星期六早上差一刻八点起床，八点半吃早饭。早饭后我骑自行车出去，有时候去看朋友，有时候去公园。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "有时候打电话，有时候发微信。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h4",
    "who": "山田",
    "q": "你常常给爸爸、妈妈打电话吗？",
    "ok": [
     "有时候打电话，有时候发微信。"
    ],
    "bad": [
     [
      "下午回学校。晚上我常常跟朋友一起在饭馆儿吃晚饭。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "星期日我常常在宿舍里看书，听音乐，预习下星期的生词、语法。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "youshihou"
   },
   {
    "id": "h5",
    "who": "课文",
    "q": "(1) 人们常常几点起床？",
    "ok": [
     "人们常常早上六点半起床。"
    ],
    "bad": [
     [
      "下班后很多人去商店、超市买菜，然后回家做饭。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "晚饭后人们常常看电视、看书、看报、聊天儿。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "shijian"
   },
   {
    "id": "h6",
    "who": "课文",
    "q": "(2) 他们每天工作几个小时？",
    "ok": [
     "他们每天工作八个小时（上午四个小时，下午四个小时）。"
    ],
    "bad": [
     [
      "人们常常早上六点半起床。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "下班后很多人去商店、超市买菜，然后回家做饭。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "(3) 下班后人们做什么？",
    "ok": [
     "下班后很多人去商店、超市买菜，然后回家做饭。"
    ],
    "bad": [
     [
      "他们每天工作八个小时（上午四个小时，下午四个小时）。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "人们常常早上六点半起床。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h8",
    "who": "课文",
    "q": "(4) 晚饭后人们常常做什么？",
    "ok": [
     "晚饭后人们常常看电视、看书、看报、聊天儿。"
    ],
    "bad": [
     [
      "下班后很多人去商店、超市买菜，然后回家做饭。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "他们每天工作八个小时（上午四个小时，下午四个小时）。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "差",
     "半",
     "分"
    ],
    "ok": 0,
    "s": "我星期六早上_一刻八点起床。",
    "why": "差一刻八点 = 8 giờ kém 15 (7:45).",
    "g": "shijian"
   },
   {
    "id": "d2",
    "o": [
     "半",
     "刻",
     "差"
    ],
    "ok": 0,
    "s": "八点_吃早饭。",
    "why": "八点半 = 8 giờ rưỡi (8:30).",
    "g": "shijian"
   },
   {
    "id": "d3",
    "o": [
     "刻",
     "半",
     "节"
    ],
    "ok": 0,
    "s": "十二点一_吃午饭。",
    "why": "一刻 = 15 phút → 12:15.",
    "g": "shijian"
   },
   {
    "id": "d4",
    "o": [
     "以后",
     "以前",
     "左右"
    ],
    "ok": 0,
    "s": "起床_去锻炼身体。",
    "why": "V + 以后 — sau khi làm gì.",
    "g": "yihou"
   },
   {
    "id": "d5",
    "o": [
     "有时候",
     "常常",
     "每天"
    ],
    "ok": 0,
    "s": "有时候去看朋友，_去公园。",
    "why": "有时候……，有时候…… — có khi…, có khi…",
    "g": "youshihou"
   },
   {
    "id": "d6",
    "o": [
     "左右",
     "以后",
     "前"
    ],
    "ok": 0,
    "s": "晚饭在七点_。",
    "why": "Số + 左右 — khoảng (đứng SAU con số).",
    "g": "zuoyou"
   },
   {
    "id": "d7",
    "o": [
     "起",
     "床",
     "上"
    ],
    "ok": 0,
    "s": "很多中国人常常早睡早_。",
    "why": "早睡早起 — ngủ sớm dậy sớm.",
    "g": "ju"
   },
   {
    "id": "d8",
    "o": [
     "炼",
     "练",
     "连"
    ],
    "ok": 0,
    "s": "起床以后去锻_身体。",
    "why": "锻炼 (炼 có bộ 火) — rèn luyện thân thể.",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Mary, cuối tuần cậu thường làm gì?",
    "p": [
     "玛丽，",
     "你",
     "周末",
     "常常",
     "做什么"
    ],
    "nhieu": [
     "我常常",
     "左右"
    ],
    "py": "Mǎlì, nǐ zhōumò chángcháng zuò shénme?",
    "g": "ju",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t2",
    "vi": "Sáng thứ Bảy tớ dậy lúc 8 giờ kém 15.",
    "p": [
     "我",
     "星期六早上",
     "差一刻八点",
     "起床"
    ],
    "nhieu": [
     "很多人",
     "午饭"
    ],
    "py": "",
    "g": "shijian",
    "boss": 0
   },
   {
    "id": "t3",
    "vi": "Buổi tối tớ thường cùng bạn ăn tối ở quán.",
    "p": [
     "晚上",
     "我常常",
     "跟朋友一起",
     "在饭馆儿",
     "吃晚饭"
    ],
    "nhieu": [
     "我",
     "起床"
    ],
    "py": "",
    "g": "ju",
    "boss": 1
   }
  ]
 },
 {
  "id": "yuedu-bai-22",
  "mon": "yuedu",
  "n": 22,
  "zh": "第二十二课",
  "vi": "Bài 22",
  "lk": "../../yuedu/bai-22/",
  "gr": {
   "dui": {
    "zh": "对 + N + 感兴趣",
    "vi": "Sub + 对 + N/V + (很/非常) 感兴趣",
    "huy": "Điểm 对 + N + 感兴趣",
    "ct": "Sub + 对 + N/V + (很/非常) 感兴趣 — 对 + đối tượng đứng TRƯỚC 感兴趣; phó từ mức độ (很、非常、特别) đặt trước 感兴趣. Theo HSK 3.0: giới từ 对 thuộc HSK1, 感兴趣 thuộc HSK3."
   },
   "aihao": {
    "zh": "喜欢 + V(O) · 爱好是 + N/V",
    "vi": "Sub + 喜欢 + V + O　|　Sub 的爱好是 + N / V(O)",
    "huy": "Điểm 喜欢 + V(O) · 爱好是 + N/V",
    "ct": "Sub + 喜欢 + V + O　|　Sub 的爱好是 + N / V(O) — 喜欢 có thể mang trực tiếp cụm động từ làm tân ngữ (喜欢写汉字). 爱好 là danh từ, dùng 是 để nêu nội dung: 我的爱好是……. Theo HSK 3.0: 喜欢 thuộc HSK1, 爱好 thuộc HSK2."
   },
   "juede": {
    "zh": "觉得 + nhận xét",
    "vi": "Sub + 觉得 + (O) + Adj / mệnh đề",
    "huy": "Điểm 觉得 + nhận xét",
    "ct": "Sub + 觉得 + (O) + Adj / mệnh đề — 觉得 là động từ, theo sau là cả một mệnh đề nhận xét. Theo HSK 3.0: 觉得 thuộc HSK1."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "我是记者，",
     "想",
     "跟你们",
     "谈谈"
    ],
    "py": "",
    "vi": "Tôi là phóng viên, muốn nói chuyện với các bạn một chút.",
    "g": "ju"
   },
   {
    "id": "s2",
    "p": [
     "请问，",
     "你们",
     "是做什么",
     "工作的"
    ],
    "py": "Qǐngwèn, nǐmen shì zuò shénme gōngzuò de?",
    "vi": "Xin hỏi, các bạn làm nghề gì?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s3",
    "p": [
     "我来中国前",
     "也是",
     "一名",
     "记者"
    ],
    "py": "Wǒ lái Zhōngguó qián yě shì yì míng jìzhě.",
    "vi": "Trước khi đến Trung Quốc tôi cũng là một phóng viên.",
    "g": "ju"
   },
   {
    "id": "s4",
    "p": [
     "汉字",
     "很难写，",
     "可是",
     "很有意思"
    ],
    "py": "",
    "vi": "Chữ Hán rất khó viết, nhưng rất thú vị.",
    "g": "ju"
   },
   {
    "id": "s5",
    "p": [
     "我的爱好",
     "是体育，",
     "我喜欢",
     "中国功夫"
    ],
    "py": "Wǒ de àihào shì tǐyù, wǒ xǐhuan Zhōngguó gōngfu.",
    "vi": "Sở thích của tôi là thể thao, tôi thích võ thuật Trung Quốc.",
    "g": "aihao"
   },
   {
    "id": "s6",
    "p": [
     "那",
     "请你",
     "表演表演，",
     "好吗"
    ],
    "py": "",
    "vi": "Vậy mời bạn biểu diễn một chút được không?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s7",
    "p": [
     "她觉得",
     "书法",
     "太有意思",
     "了"
    ],
    "py": "",
    "vi": "Cô ấy thấy thư pháp thú vị lắm.",
    "g": "juede"
   },
   {
    "id": "s8",
    "p": [
     "我",
     "对书法",
     "很",
     "感兴趣"
    ],
    "py": "",
    "vi": "Tôi rất hứng thú với thư pháp.",
    "g": "dui"
   },
   {
    "id": "s9",
    "p": [
     "这些地方",
     "我都想去，",
     "我一定",
     "要去"
    ],
    "py": "Zhèxiē dìfang wǒ dōu xiǎng qù, wǒ yídìng yào qù.",
    "vi": "Những nơi này tôi đều muốn đi, tôi nhất định phải đi.",
    "g": "ju"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "记者",
    "q": "请问，你们是做什么工作的？",
    "ok": [
     "我来中国前也是一名记者。"
    ],
    "bad": [
     [
      "我的爱好是体育，我喜欢中国功夫。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "你们好！我是记者，想跟你们谈谈。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h2",
    "who": "记者",
    "q": "你们有什么爱好？",
    "ok": [
     "我喜欢写汉字。汉字很难写，可是很有意思。"
    ],
    "bad": [
     [
      "好。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我以前是英语老师。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "aihao"
   },
   {
    "id": "h3",
    "who": "记者",
    "q": "是吗？那请你表演表演，好吗？",
    "ok": [
     "现在还不行，以后吧。"
    ],
    "bad": [
     [
      "现在我们都是学生。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "我以前是英语老师。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h4",
    "who": "课文",
    "q": "(1) 山田、安娜、玛丽在一个班学习吗？",
    "ok": [
     "是的，他们是同班同学，在一个班学习。"
    ],
    "bad": [
     [
      "玛丽喜欢中国书法，她觉得书法太有意思了。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "山田喜欢中国功夫，他每天都练习。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h5",
    "who": "课文",
    "q": "(2) 山田有什么爱好？",
    "ok": [
     "山田喜欢中国功夫，他每天都练习。"
    ],
    "bad": [
     [
      "玛丽喜欢中国书法，她觉得书法太有意思了。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "是的，他们是同班同学，在一个班学习。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "aihao"
   },
   {
    "id": "h6",
    "who": "课文",
    "q": "(3) 玛丽喜欢什么？",
    "ok": [
     "玛丽喜欢中国书法，她觉得书法太有意思了。"
    ],
    "bad": [
     [
      "安娜说京剧里的衣服真漂亮。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "“我”的爱好是旅行，想去上海、西安、杭州、桂林。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "aihao"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "(4) 安娜觉得京剧里的衣服怎么样？",
    "ok": [
     "安娜说京剧里的衣服真漂亮。"
    ],
    "bad": [
     [
      "是的，他们是同班同学，在一个班学习。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "“我”的爱好是旅行，想去上海、西安、杭州、桂林。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "juede"
   },
   {
    "id": "h8",
    "who": "课文",
    "q": "(5) “我”喜欢什么？“我”想去哪些地方旅行？",
    "ok": [
     "“我”的爱好是旅行，想去上海、西安、杭州、桂林。"
    ],
    "bad": [
     [
      "安娜说京剧里的衣服真漂亮。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "玛丽喜欢中国书法，她觉得书法太有意思了。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "aihao"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "兴趣",
     "爱好",
     "喜欢"
    ],
    "ok": 0,
    "s": "我对书法很感_。",
    "why": "对……感兴趣 — hứng thú với…",
    "g": "dui"
   },
   {
    "id": "d2",
    "o": [
     "谈谈",
     "谈一谈谈",
     "谈了"
    ],
    "ok": 0,
    "s": "你们好！我是记者，想跟你们_。",
    "why": "Động từ lặp AA — làm một chút, giọng nhẹ nhàng.",
    "g": "ju"
   },
   {
    "id": "d3",
    "o": [
     "表演表演",
     "表表演演",
     "表演演"
    ],
    "ok": 0,
    "s": "那请你_，好吗？",
    "why": "Động từ hai âm tiết lặp ABAB, không lặp AABB.",
    "g": "ju"
   },
   {
    "id": "d4",
    "o": [
     "爱好",
     "喜欢",
     "高兴"
    ],
    "ok": 0,
    "s": "你们有什么_？",
    "why": "爱好 là danh từ — sở thích; 喜欢 là động từ.",
    "g": "aihao"
   },
   {
    "id": "d5",
    "o": [
     "是",
     "有",
     "喜欢"
    ],
    "ok": 0,
    "s": "我的爱好_体育。",
    "why": "……的爱好是 + N/V — sở thích của … là …",
    "g": "aihao"
   },
   {
    "id": "d6",
    "o": [
     "可是",
     "所以",
     "因为"
    ],
    "ok": 0,
    "s": "汉字很难写，_很有意思。",
    "why": "可是 — nhưng (chuyển ý).",
    "g": "ju"
   },
   {
    "id": "d7",
    "o": [
     "觉得",
     "感到",
     "喜欢"
    ],
    "ok": 0,
    "s": "她_书法太有意思了。",
    "why": "觉得 + mệnh đề nhận xét — thấy rằng…",
    "g": "juede"
   },
   {
    "id": "d8",
    "o": [
     "名",
     "个人",
     "本"
    ],
    "ok": 0,
    "s": "我来中国前也是一_记者。",
    "why": "名 — lượng từ chỉ người theo nghề nghiệp (一名记者、一名老师).",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Tôi là phóng viên, muốn nói chuyện với các bạn một chút.",
    "p": [
     "我是记者，",
     "想",
     "跟你们",
     "谈谈"
    ],
    "nhieu": [
     "可是",
     "了"
    ],
    "py": "",
    "g": "ju",
    "boss": 0
   },
   {
    "id": "t2",
    "vi": "Xin hỏi, các bạn làm nghề gì?",
    "p": [
     "请问，",
     "你们",
     "是做什么",
     "工作的"
    ],
    "nhieu": [
     "跟你们",
     "很"
    ],
    "py": "Qǐngwèn, nǐmen shì zuò shénme gōngzuò de?",
    "g": "ju",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t3",
    "vi": "Trước khi đến Trung Quốc tôi cũng là một phóng viên.",
    "p": [
     "我来中国前",
     "也是",
     "一名",
     "记者"
    ],
    "nhieu": [
     "我喜欢",
     "要去"
    ],
    "py": "Wǒ lái Zhōngguó qián yě shì yì míng jìzhě.",
    "g": "ju",
    "boss": 1
   }
  ]
 },
 {
  "id": "yuedu-bai-23",
  "mon": "yuedu",
  "n": 23,
  "zh": "第二十三课",
  "vi": "Bài 23",
  "lk": "../../yuedu/bai-23/",
  "gr": {
   "fangwei": {
    "zh": "Phương vị từ: 东/西/南/北/左/右/前/后 + 边",
    "vi": "方位 + 边 (东边、左边…)　|　N + (的) + 方位边 (宿舍楼的东边)",
    "huy": "Điểm Phương vị từ: 东/西/南/北/左/右/前/后 + 边",
    "ct": "方位 + 边 (东边、左边…)　|　N + (的) + 方位边 (宿舍楼的东边) — Phương vị từ đứng SAU danh từ chỉ vật mốc: 图书馆南边 (phía nam thư viện) — ngược trật tự tiếng Việt. 的 có thể có hoặc lược. Theo HSK 3.0: 方位名词 thuộc HSK1."
   },
   "li": {
    "zh": "A 离 B + 远 / 近",
    "vi": "A + 离 + B + (很/不) 远 / 近　|　A 离 B 有 + khoảng cách",
    "huy": "Điểm A 离 B + 远 / 近",
    "ct": "A + 离 + B + (很/不) 远 / 近　|　A 离 B 有 + khoảng cách — 离 là giới từ, đặt trước vật mốc B; vị ngữ là 远/近 hoặc 有 + số đo. Theo HSK 3.0: giới từ 离 thuộc HSK2."
   },
   "cunzai": {
    "zh": "Chỉ vị trí: 在 · 是 · 有",
    "vi": "N + 在 + nơi chốn　|　nơi chốn + 是 + N　|　nơi chốn + 有 + N",
    "huy": "Điểm Chỉ vị trí: 在 · 是 · 有",
    "ct": "N + 在 + nơi chốn　|　nơi chốn + 是 + N　|　nơi chốn + 有 + N — 在: vật đã biết đứng đầu câu; 是 / 有: nơi chốn đứng đầu câu, vật đứng sau. Theo HSK 3.0: câu chữ 是, câu chữ 有 thuộc HSK1."
   },
   "xian": {
    "zh": "先……，然后……",
    "vi": "Sub + 先 + V1，然后 + V2",
    "huy": "Điểm 先……，然后……",
    "ct": "Sub + 先 + V1，然后 + V2 — 先 đứng trước động từ thứ nhất, 然后 đứng đầu vế sau. Theo HSK 3.0: 承接复句 先……，再/然后…… thuộc HSK2."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "你们",
     "学校里",
     "有",
     "书店吗"
    ],
    "py": "",
    "vi": "Trong trường các cậu có hiệu sách không?",
    "g": "cunzai",
    "pu": "？"
   },
   {
    "id": "s2",
    "p": [
     "书店",
     "离",
     "这儿",
     "远吗"
    ],
    "py": "Shūdiàn lí zhèr yuǎn ma?",
    "vi": "Hiệu sách cách đây có xa không?",
    "g": "li",
    "pu": "？"
   },
   {
    "id": "s3",
    "p": [
     "不远，",
     "就在",
     "宿舍楼的",
     "东边"
    ],
    "py": "Bù yuǎn, jiù zài sùshèlóu de dōngbian.",
    "vi": "Không xa, ngay phía đông khu ký túc xá.",
    "g": "fangwei"
   },
   {
    "id": "s4",
    "p": [
     "图书馆",
     "南边",
     "还有",
     "一个篮球场"
    ],
    "py": "",
    "vi": "Phía nam thư viện còn có một sân bóng rổ.",
    "g": "fangwei"
   },
   {
    "id": "s5",
    "p": [
     "那我们",
     "先去书店，",
     "然后",
     "去踢足球"
    ],
    "py": "",
    "vi": "Vậy mình đi hiệu sách trước, rồi đi đá bóng.",
    "g": "xian"
   },
   {
    "id": "s6",
    "p": [
     "教学楼",
     "离",
     "宿舍楼",
     "不远"
    ],
    "py": "",
    "vi": "Khu giảng đường cách ký túc xá không xa.",
    "g": "li"
   },
   {
    "id": "s7",
    "p": [
     "教学楼",
     "北边",
     "是",
     "图书馆"
    ],
    "py": "Jiàoxuélóu běibian shì túshūguǎn.",
    "vi": "Phía bắc khu giảng đường là thư viện.",
    "g": "fangwei"
   },
   {
    "id": "s8",
    "p": [
     "运动场",
     "在",
     "图书馆",
     "西边"
    ],
    "py": "Yùndòngchǎng zài túshūguǎn xībian.",
    "vi": "Sân vận động ở phía tây thư viện.",
    "g": "fangwei"
   },
   {
    "id": "s9",
    "p": [
     "医院",
     "离银行",
     "有500米",
     "左右"
    ],
    "py": "",
    "vi": "Bệnh viện cách ngân hàng khoảng 500 mét.",
    "g": "fangwei"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "田中",
    "q": "山田，我想去书店看看，你们学校里有书店吗？",
    "ok": [
     "有。"
    ],
    "bad": [
     [
      "在图书馆西边。图书馆南边还有一个篮球场。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "不远，就在宿舍楼的东边。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "cunzai"
   },
   {
    "id": "h2",
    "who": "田中",
    "q": "书店离这儿远吗？",
    "ok": [
     "不远，就在宿舍楼的东边。"
    ],
    "bad": [
     [
      "在图书馆西边。图书馆南边还有一个篮球场。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "行。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "fangwei"
   },
   {
    "id": "h3",
    "who": "田中",
    "q": "我们现在去，好吗？",
    "ok": [
     "好。"
    ],
    "bad": [
     [
      "行。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "有。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "cunzai"
   },
   {
    "id": "h4",
    "who": "田中",
    "q": "山田，你们学校有足球场吗？",
    "ok": [
     "有啊。你想踢足球吗？"
    ],
    "bad": [
     [
      "行。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "在图书馆西边。图书馆南边还有一个篮球场。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "cunzai"
   },
   {
    "id": "h5",
    "who": "山田",
    "q": "有啊。你想踢足球吗？",
    "ok": [
     "是啊。足球场在哪儿？"
    ],
    "bad": [
     [
      "有。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "在图书馆西边。图书馆南边还有一个篮球场。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "cunzai"
   },
   {
    "id": "h6",
    "who": "田中",
    "q": "是啊。足球场在哪儿？",
    "ok": [
     "在图书馆西边。图书馆南边还有一个篮球场。"
    ],
    "bad": [
     [
      "不远，就在宿舍楼的东边。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "好。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "fangwei"
   },
   {
    "id": "h7",
    "who": "田中",
    "q": "那我们先去书店，然后去踢足球，好吗？",
    "ok": [
     "行。"
    ],
    "bad": [
     [
      "不远，就在宿舍楼的东边。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "好。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "xian"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "离",
     "从",
     "在"
    ],
    "ok": 0,
    "s": "书店_这儿远吗？",
    "why": "A 离 B 远/近 — A cách B xa/gần.",
    "g": "li"
   },
   {
    "id": "d2",
    "o": [
     "边",
     "方",
     "前"
    ],
    "ok": 0,
    "s": "不远，就在宿舍楼的东_。",
    "why": "东边 — phía đông (方位 + 边).",
    "g": "fangwei"
   },
   {
    "id": "d3",
    "o": [
     "在",
     "是",
     "有"
    ],
    "ok": 0,
    "s": "足球场_图书馆西边。",
    "why": "N + 在 + nơi chốn — vật ở đâu.",
    "g": "cunzai"
   },
   {
    "id": "d4",
    "o": [
     "是",
     "在",
     "离"
    ],
    "ok": 0,
    "s": "教学楼北边_图书馆。",
    "why": "Nơi chốn + 是 + N — chỗ đó là cái gì.",
    "g": "cunzai"
   },
   {
    "id": "d5",
    "o": [
     "有",
     "是",
     "在"
    ],
    "ok": 0,
    "s": "图书馆南边还_一个篮球场。",
    "why": "Nơi chốn + 有 + N — chỗ đó có cái gì.",
    "g": "cunzai"
   },
   {
    "id": "d6",
    "o": [
     "先",
     "再",
     "还"
    ],
    "ok": 0,
    "s": "那我们_去书店，然后去踢足球，好吗？",
    "why": "先……，然后…… — trước … rồi …",
    "g": "xian"
   },
   {
    "id": "d7",
    "o": [
     "然后",
     "以前",
     "所以"
    ],
    "ok": 0,
    "s": "那我们先去书店，_去踢足球，好吗？",
    "why": "然后 — sau đó (đứng đầu vế sau).",
    "g": "xian"
   },
   {
    "id": "d8",
    "o": [
     "左右",
     "前后",
     "上下"
    ],
    "ok": 0,
    "s": "医院离银行有500米_。",
    "why": "Số + 左右 — khoảng (Bài 21).",
    "g": "fangwei"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Trong trường các cậu có hiệu sách không?",
    "p": [
     "你们",
     "学校里",
     "有",
     "书店吗"
    ],
    "nhieu": [
     "医院",
     "然后"
    ],
    "py": "",
    "g": "cunzai",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t2",
    "vi": "Hiệu sách cách đây có xa không?",
    "p": [
     "书店",
     "离",
     "这儿",
     "远吗"
    ],
    "nhieu": [
     "教学楼",
     "东边"
    ],
    "py": "Shūdiàn lí zhèr yuǎn ma?",
    "g": "li",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t3",
    "vi": "Không xa, ngay phía đông khu ký túc xá.",
    "p": [
     "不远，",
     "就在",
     "宿舍楼的",
     "东边"
    ],
    "nhieu": [
     "图书馆",
     "有"
    ],
    "py": "Bù yuǎn, jiù zài sùshèlóu de dōngbian.",
    "g": "fangwei",
    "boss": 1
   }
  ]
 },
 {
  "id": "yuedu-bai-24",
  "mon": "yuedu",
  "n": 24,
  "zh": "第二十四课",
  "vi": "Bài 24",
  "lk": "../../yuedu/bai-24/",
  "gr": {
   "huineng": {
    "zh": "会 / 能 + V · 会不会 / 能不能",
    "vi": "Sub + 会/能 + V　|　Sub + 会不会/能不能 + V ？",
    "huy": "Điểm 会 / 能 + V · 会不会 / 能不能",
    "ct": "Sub + 会/能 + V　|　Sub + 会不会/能不能 + V ？ — 会 / 能 là động từ năng nguyện, đứng trước động từ chính. Câu hỏi chính phản: 会不会 / 能不能 + V (không thêm 吗). Theo HSK 3.0: 能愿动词 会、能 và câu hỏi chính phản thuộc HSK1."
   },
   "dongliang": {
    "zh": "V + (一) 遍 / 次",
    "vi": "V + số + 遍/次 (+ O)　|　再 + V + 一遍",
    "huy": "Điểm V + (一) 遍 / 次",
    "ct": "V + số + 遍/次 (+ O)　|　再 + V + 一遍 — 遍、次 là lượng từ động tác, đứng SAU động từ làm bổ ngữ số lượng (说一遍), khác tiếng Việt “một lần nói”. Theo HSK 3.0: 动量词 遍、次 và 动词+动量补语 thuộc HSK2."
   },
   "zenme": {
    "zh": "怎么 + 没/不 + V (sao lại…)",
    "vi": "Sub + (时间) + 怎么 + 没/不 + V ？",
    "huy": "Điểm 怎么 + 没/不 + V (sao lại…)",
    "ct": "Sub + (时间) + 怎么 + 没/不 + V ？ — 怎么 đặt trước 没/不 + động từ để hỏi lý do; đứng một mình đầu câu (怎么，……) là câu hỏi ngạc nhiên. Theo HSK 3.0: đại từ nghi vấn 怎么 thuộc HSK1."
   },
   "le": {
    "zh": "了 cuối câu: thay đổi, tình huống mới",
    "vi": "Câu + 了 (cuối câu)",
    "huy": "Điểm 了 cuối câu: thay đổi, tình huống mới",
    "ct": "Câu + 了 (cuối câu) — 了 đứng cuối câu (了²), sau cả cụm động từ hoặc tính từ. Theo HSK 3.0: 变化态 dùng 了 thuộc HSK1."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "山田，",
     "你",
     "每天早上",
     "做什么"
    ],
    "py": "Shāntián, nǐ měi tiān zǎoshang zuò shénme?",
    "vi": "Yamada, sáng nào cậu cũng làm gì?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s2",
    "p": [
     "跑步，",
     "打",
     "太极拳"
    ],
    "py": "Pǎobù, dǎ tàijíquán.",
    "vi": "Chạy bộ, tập Thái cực quyền.",
    "g": "ju"
   },
   {
    "id": "s3",
    "p": [
     "怎么，",
     "你",
     "想学",
     "吗"
    ],
    "py": "",
    "vi": "Sao, cậu muốn học à?",
    "g": "zenme",
    "pu": "？"
   },
   {
    "id": "s4",
    "p": [
     "他每天早上",
     "六点半",
     "在小操场",
     "教我们"
    ],
    "py": "",
    "vi": "Sáng nào thầy cũng dạy bọn tớ lúc 6 giờ rưỡi ở sân tập nhỏ.",
    "g": "ju"
   },
   {
    "id": "s5",
    "p": [
     "学",
     "太极拳的人",
     "多",
     "吗"
    ],
    "py": "",
    "vi": "Người học Thái cực quyền có đông không?",
    "g": "ju",
    "pu": "？"
   },
   {
    "id": "s6",
    "p": [
     "你",
     "能不能",
     "再说",
     "一遍"
    ],
    "py": "",
    "vi": "Bạn có thể nói lại một lần nữa không?",
    "g": "huineng",
    "pu": "？"
   },
   {
    "id": "s7",
    "p": [
     "玛丽",
     "今天",
     "怎么",
     "没来上课"
    ],
    "py": "",
    "vi": "Sao hôm nay Mary không đến lớp?",
    "g": "zenme",
    "pu": "？"
   },
   {
    "id": "s8",
    "p": [
     "上课的时候，",
     "她",
     "认真听，",
     "认真练"
    ],
    "py": "Shàng kè de shíhou, tā rènzhēn tīng, rènzhēn liàn.",
    "vi": "Trong giờ học, cô chăm chú nghe, chăm chỉ luyện.",
    "g": "ju"
   },
   {
    "id": "s9",
    "p": [
     "下课以后，",
     "她",
     "在宿舍",
     "继续练习"
    ],
    "py": "Xià kè yǐhòu, tā zài sùshè jìxù liànxí.",
    "vi": "Tan học, cô tiếp tục luyện ở ký túc xá.",
    "g": "ju"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "玛丽",
    "q": "山田，你每天早上做什么？",
    "ok": [
     "跑步，打太极拳。"
    ],
    "bad": [
     [
      "不少。有老师，也有留学生。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "在马老师那儿。他每天早上六点半在小操场教我们，你明天去吧。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h2",
    "who": "玛丽",
    "q": "谁教太极拳？",
    "ok": [
     "马老师。怎么，你想学吗？"
    ],
    "bad": [
     [
      "好，明天早上小操场见。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "不少。有老师，也有留学生。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "zenme"
   },
   {
    "id": "h3",
    "who": "山田",
    "q": "马老师。怎么，你想学吗？",
    "ok": [
     "想学。在哪儿报名？"
    ],
    "bad": [
     [
      "不少。有老师，也有留学生。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "好，明天早上小操场见。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "zenme"
   },
   {
    "id": "h4",
    "who": "玛丽",
    "q": "想学。在哪儿报名？",
    "ok": [
     "在马老师那儿。他每天早上六点半在小操场教我们，你明天去吧。"
    ],
    "bad": [
     [
      "再见。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "不难。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h5",
    "who": "玛丽",
    "q": "好。山田，学太极拳的人多吗？",
    "ok": [
     "不少。有老师，也有留学生。"
    ],
    "bad": [
     [
      "不难。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "跑步，打太极拳。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "zenme"
   },
   {
    "id": "h6",
    "who": "玛丽",
    "q": "难学吗？",
    "ok": [
     "不难。"
    ],
    "bad": [
     [
      "好，明天早上小操场见。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "跑步，打太极拳。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "zenme"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "(1) 玛丽喜欢什么？",
    "ok": [
     "玛丽很喜欢中国的书法。"
    ],
    "bad": [
     [
      "每星期一和星期五下午有书法课。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "练。下课以后，她在宿舍继续练习。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h8",
    "who": "课文",
    "q": "(2) 她什么时候有书法课？",
    "ok": [
     "每星期一和星期五下午有书法课。"
    ],
    "bad": [
     [
      "练书法可以帮助她学习汉语，帮助她学习汉字，还能帮助她了解中国文化。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "玛丽很喜欢中国的书法。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "会不会",
     "会吗",
     "不会会"
    ],
    "ok": 0,
    "s": "你_打太极拳？",
    "why": "Câu hỏi chính phản 会不会 + V — không thêm 吗.",
    "g": "huineng"
   },
   {
    "id": "d2",
    "o": [
     "遍",
     "次",
     "个"
    ],
    "ok": 0,
    "s": "你能不能再说一_？",
    "why": "再说一遍 — nói lại một lượt (từ đầu đến cuối).",
    "g": "dongliang"
   },
   {
    "id": "d3",
    "o": [
     "怎么",
     "什么",
     "哪儿"
    ],
    "ok": 0,
    "s": "玛丽今天_没来上课？",
    "why": "怎么 + 没 + V — sao lại không …? (hỏi lý do).",
    "g": "zenme"
   },
   {
    "id": "d4",
    "o": [
     "了",
     "的",
     "吗"
    ],
    "ok": 0,
    "s": "我感冒_，头疼，发烧。",
    "why": "了 cuối câu — tình hình đã thay đổi (bị cảm rồi).",
    "g": "le"
   },
   {
    "id": "d5",
    "o": [
     "教",
     "学",
     "问"
    ],
    "ok": 0,
    "s": "他每天早上六点半在小操场_我们。",
    "why": "教 + người — dạy ai; 学 — học.",
    "g": "ju"
   },
   {
    "id": "d6",
    "o": [
     "报",
     "打",
     "请"
    ],
    "ok": 0,
    "s": "在哪儿_名？",
    "why": "报名 — đăng ký.",
    "g": "ju"
   },
   {
    "id": "d7",
    "o": [
     "假",
     "次",
     "遍"
    ],
    "ok": 0,
    "s": "我病了，想请_。",
    "why": "请假 — xin nghỉ phép (假 đọc jià).",
    "g": "ju"
   },
   {
    "id": "d8",
    "o": [
     "意思",
     "意见",
     "思想"
    ],
    "ok": 0,
    "s": "她觉得练书法很有_。",
    "why": "有意思 — thú vị.",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Yamada, sáng nào cậu cũng làm gì?",
    "p": [
     "山田，",
     "你",
     "每天早上",
     "做什么"
    ],
    "nhieu": [
     "再说",
     "吗"
    ],
    "py": "Shāntián, nǐ měi tiān zǎoshang zuò shénme?",
    "g": "ju",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t2",
    "vi": "Sao, cậu muốn học à?",
    "p": [
     "怎么，",
     "你",
     "想学",
     "吗"
    ],
    "nhieu": [
     "学",
     "多"
    ],
    "py": "",
    "g": "zenme",
    "boss": 0,
    "pu": "？"
   },
   {
    "id": "t3",
    "vi": "Sáng nào thầy cũng dạy bọn tớ lúc 6 giờ rưỡi ở sân tập nhỏ.",
    "p": [
     "他每天早上",
     "六点半",
     "在小操场",
     "教我们"
    ],
    "nhieu": [
     "你",
     "她"
    ],
    "py": "",
    "g": "ju",
    "boss": 1
   }
  ]
 },
 {
  "id": "yuedu-bai-25",
  "mon": "yuedu",
  "n": 25,
  "zh": "第二十五课",
  "vi": "Bài 25",
  "lk": "../../yuedu/bai-25/",
  "gr": {
   "de": {
    "zh": "V + 得 + tính từ (bổ ngữ trạng thái)",
    "vi": "Sub + V + 得 + (很/太/不) + Adj　|　Sub + O + V + 得 + Adj",
    "huy": "Điểm V + 得 + tính từ (bổ ngữ trạng thái)",
    "ct": "Sub + V + 得 + (很/太/不) + Adj　|　Sub + O + V + 得 + Adj — 得 đứng ngay sau động từ, tính từ đứng sau 得. Có tân ngữ thì đưa tân ngữ lên trước hoặc lặp động từ: 你汉语说得很流利 / 你说汉语说得很流利 (không nói 说汉语得…). Phủ định đặt 不 trước tính từ: 学得不好. Theo HSK 3.0: 状态补语 V＋得＋形容词 thuộc HSK2."
   },
   "dewen": {
    "zh": "Hỏi: V得怎么样？ · V得 Adj 不 Adj？",
    "vi": "(O) + V + 得 + 怎么样？　|　(O) + V + 得 + Adj + 不 + Adj？",
    "huy": "Điểm Hỏi: V得怎么样？ · V得 Adj 不 Adj？",
    "ct": "(O) + V + 得 + 怎么样？　|　(O) + V + 得 + Adj + 不 + Adj？ — 怎么样 hoặc dạng chính phản (好不好、流利不流利) đặt sau 得; không thêm 吗 khi đã dùng chính phản. Theo HSK 3.0: hỏi bằng 怎么样 và câu hỏi chính phản thuộc HSK1–2."
   },
   "weishenme": {
    "zh": "为什么……？— 因为……",
    "vi": "为什么 + V？ — 因为……(，所以……)",
    "huy": "Điểm 为什么……？— 因为……",
    "ct": "为什么 + V？ — 因为……(，所以……) — 为什么 đứng trước động từ (hoặc đầu câu, một mình); trả lời bằng 因为…… (có thể nối 所以……). Theo HSK 3.0: 为什么 thuộc HSK2, câu ghép 因为……，所以…… thuộc HSK2."
   },
   "qianxu": {
    "zh": "Khiêm tốn: 哪里哪里 · 还差得远呢",
    "vi": "A khen: 你……真不错 / 说得很好　→　B: 哪里，哪里 / 还差得远呢",
    "huy": "Điểm Khiêm tốn: 哪里哪里 · 还差得远呢",
    "ct": "A khen: 你……真不错 / 说得很好　→　B: 哪里，哪里 / 还差得远呢 — Cụm cố định, đứng độc lập làm câu trả lời; 还差得远呢 dùng bổ ngữ 得 + 远, cuối câu có 呢."
   },
   "ju": {
    "zh": "课文句子",
    "vi": "Câu trong bài khoá",
    "huy": "Đọc hiểu giỏi",
    "ct": "Ôn các câu trong hội thoại và đoạn văn của bài."
   }
  },
  "sap": [
   {
    "id": "s1",
    "p": [
     "马丁，",
     "你的",
     "发音",
     "真不错"
    ],
    "py": "Mǎdīng, nǐ de fāyīn zhēn búcuò.",
    "vi": "Martin, phát âm của cậu thật không tồi.",
    "g": "dewen"
   },
   {
    "id": "s2",
    "p": [
     "我的",
     "汉字",
     "写得",
     "也很好"
    ],
    "py": "",
    "vi": "Chữ Hán của tớ viết cũng rất đẹp.",
    "g": "de"
   },
   {
    "id": "s3",
    "p": [
     "你",
     "课文",
     "念得",
     "怎么样"
    ],
    "py": "Nǐ kèwén niàn de zěnmeyàng?",
    "vi": "Cậu đọc bài khoá thế nào?",
    "g": "de",
    "pu": "？"
   },
   {
    "id": "s4",
    "p": [
     "我",
     "什么地方",
     "说得",
     "不对"
    ],
    "py": "",
    "vi": "Tớ nói sai chỗ nào?",
    "g": "de",
    "pu": "？"
   },
   {
    "id": "s5",
    "p": [
     "哪里，",
     "哪里，",
     "还差得远",
     "呢"
    ],
    "py": "",
    "vi": "Đâu có, đâu có, còn kém xa lắm.",
    "g": "qianxu"
   },
   {
    "id": "s6",
    "p": [
     "不能",
     "自己",
     "说",
     "自己好"
    ],
    "py": "",
    "vi": "Không được tự khen mình.",
    "g": "dewen"
   },
   {
    "id": "s7",
    "p": [
     "早上，",
     "山田",
     "起得",
     "很早"
    ],
    "py": "Zǎoshang, Shāntián qǐ de hěn zǎo.",
    "vi": "Buổi sáng, Yamada dậy rất sớm.",
    "g": "de"
   },
   {
    "id": "s8",
    "p": [
     "他",
     "学得",
     "很认真，",
     "进步很快"
    ],
    "py": "",
    "vi": "Cậu ấy học rất chăm, tiến bộ rất nhanh.",
    "g": "de"
   },
   {
    "id": "s9",
    "p": [
     "下次比赛",
     "要得",
     "第一",
     "名"
    ],
    "py": "",
    "vi": "Lần thi sau phải được giải nhất.",
    "g": "de"
   }
  ],
  "hoi": [
   {
    "id": "h1",
    "who": "玛丽",
    "q": "你课文念得怎么样？",
    "ok": [
     "念得太流利了，听力就更没问题了。"
    ],
    "bad": [
     [
      "是，我的汉字写得也很好。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "对，你的发音很好，可是不能自己说自己好。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "de"
   },
   {
    "id": "h2",
    "who": "马丁",
    "q": "为什么？我什么地方说得不对？",
    "ok": [
     "说得都很好。可是，中国人不这样说。"
    ],
    "bad": [
     [
      "我说“你的发音真不错”，你应该说“哪里，哪里，还差得远呢”。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "为什么要这样说？我觉得我的发音不错。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "weishenme"
   },
   {
    "id": "h3",
    "who": "马丁",
    "q": "是吗？那我应该怎么说？",
    "ok": [
     "我说“你的发音真不错”，你应该说“哪里，哪里，还差得远呢”。"
    ],
    "bad": [
     [
      "对，你的发音很好，可是不能自己说自己好。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "为什么要这样说？我觉得我的发音不错。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "qianxu"
   },
   {
    "id": "h4",
    "who": "课文",
    "q": "(1) 早上山田做什么？",
    "ok": [
     "他先去大操场跑步，然后到小操场打太极拳。"
    ],
    "bad": [
     [
      "打得很好，他得了第二名。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "山田太极拳打得不错。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "ju"
   },
   {
    "id": "h5",
    "who": "课文",
    "q": "(2) 山田太极拳打得怎么样？",
    "ok": [
     "山田太极拳打得不错。"
    ],
    "bad": [
     [
      "老师说他学得很认真，进步很快。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "山田说他还差得远，还要继续练，下次比赛要得第一名。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "de"
   },
   {
    "id": "h6",
    "who": "课文",
    "q": "(3) 上星期的太极拳比赛，山田打得好不好？",
    "ok": [
     "打得很好，他得了第二名。"
    ],
    "bad": [
     [
      "他先去大操场跑步，然后到小操场打太极拳。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "老师说他学得很认真，进步很快。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "de"
   },
   {
    "id": "h7",
    "who": "课文",
    "q": "(4) 山田的老师说什么？",
    "ok": [
     "老师说他学得很认真，进步很快。"
    ],
    "bad": [
     [
      "他先去大操场跑步，然后到小操场打太极拳。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "打得很好，他得了第二名。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "de"
   },
   {
    "id": "h8",
    "who": "课文",
    "q": "(5) 山田觉得自己怎么样？",
    "ok": [
     "山田说他还差得远，还要继续练，下次比赛要得第一名。"
    ],
    "bad": [
     [
      "他先去大操场跑步，然后到小操场打太极拳。",
      "Câu này không đáp lại câu hỏi."
     ],
     [
      "山田太极拳打得不错。",
      "Câu này không đáp lại câu hỏi."
     ]
    ],
    "g": "de"
   }
  ],
  "dien": [
   {
    "id": "d1",
    "o": [
     "得",
     "的",
     "地"
    ],
    "ok": 0,
    "s": "我的汉字写_也很好。",
    "why": "V + 得 + Adj — bổ ngữ trạng thái.",
    "g": "de"
   },
   {
    "id": "d2",
    "o": [
     "怎么样",
     "什么",
     "为什么"
    ],
    "ok": 0,
    "s": "你课文念得_？",
    "why": "V得怎么样？ — hỏi đánh giá.",
    "g": "dewen"
   },
   {
    "id": "d3",
    "o": [
     "不",
     "没",
     "吗"
    ],
    "ok": 0,
    "s": "他汉语说得好_好？",
    "why": "Câu hỏi chính phản: 好不好.",
    "g": "dewen"
   },
   {
    "id": "d4",
    "o": [
     "远",
     "近",
     "多"
    ],
    "ok": 0,
    "s": "—你的发音真不错。—哪里，哪里，还差得_呢。",
    "why": "还差得远呢 — còn kém xa (lời khiêm tốn).",
    "g": "qianxu"
   },
   {
    "id": "d5",
    "o": [
     "为什么",
     "因为",
     "所以"
    ],
    "ok": 0,
    "s": "_？我什么地方说得不对？",
    "why": "为什么 — tại sao (hỏi lý do).",
    "g": "weishenme"
   },
   {
    "id": "d6",
    "o": [
     "早",
     "好",
     "多"
    ],
    "ok": 0,
    "s": "早上，山田起得很_。",
    "why": "起得很早 — dậy rất sớm.",
    "g": "de"
   },
   {
    "id": "d7",
    "o": [
     "然后",
     "因为",
     "可是"
    ],
    "ok": 0,
    "s": "他先去大操场跑步，_到小操场打太极拳。",
    "why": "先……，然后…… (Bài 23).",
    "g": "ju"
   },
   {
    "id": "d8",
    "o": [
     "认真",
     "认识",
     "真认"
    ],
    "ok": 0,
    "s": "老师说他学得很_，进步很快。",
    "why": "认真 — chăm chỉ, nghiêm túc.",
    "g": "ju"
   }
  ],
  "dich": [
   {
    "id": "t1",
    "vi": "Martin, phát âm của cậu thật không tồi.",
    "p": [
     "马丁，",
     "你的",
     "发音",
     "真不错"
    ],
    "nhieu": [
     "早上，",
     "怎么样"
    ],
    "py": "Mǎdīng, nǐ de fāyīn zhēn búcuò.",
    "g": "dewen",
    "boss": 0
   },
   {
    "id": "t2",
    "vi": "Chữ Hán của tớ viết cũng rất đẹp.",
    "p": [
     "我的",
     "汉字",
     "写得",
     "也很好"
    ],
    "nhieu": [
     "自己好",
     "你的"
    ],
    "py": "",
    "g": "de",
    "boss": 0
   },
   {
    "id": "t3",
    "vi": "Cậu đọc bài khoá thế nào?",
    "p": [
     "你",
     "课文",
     "念得",
     "怎么样"
    ],
    "nhieu": [
     "说",
     "名"
    ],
    "py": "Nǐ kèwén niàn de zěnmeyàng?",
    "g": "de",
    "boss": 1,
    "pu": "？"
   }
  ]
 }
]);
