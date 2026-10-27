// Vượt ải 闯关 — đề ôn theo bài Giáo trình tiếng Trung tăng cường (TTTC).
// BẢN MẪU: Bài 2 · câu lấy từ bài khoá, ví dụ ngữ pháp và bài tập trong courses/tttc/bai-2. CHỜ CÔ DUYỆT.
// g = điểm ngữ pháp (khoá trong GR); s = số slide trong bài giảng (#sN) để nhảy về xem lại.
window.VA_GR={
  de:{zh:'的',vi:'Trợ từ kết cấu 的',huy:'Bậc thầy chữ 的',ct:'Định ngữ + 的 + trung tâm ngữ — ngược tiếng Việt: 我的手机 (điện thoại của tôi).',s:7},
  shei:{zh:'谁',vi:'Đại từ nghi vấn 谁',huy:'Thám tử 谁',ct:'谁的 + danh từ; đã có 谁 thì không thêm 吗.',s:8},
  ye:{zh:'也',vi:'Phó từ 也',huy:'Cũng thế nhỉ',ct:'也 đứng sau chủ ngữ, trước động từ; phủ định: 也不…, không nói 不也….',s:9},
  dou:{zh:'都',vi:'Phó từ 都',huy:'Tất cả đều đúng',ct:'都 đứng sau chủ ngữ, trước động từ: 我们都是学生.',s:22},
  tinh:{zh:'形容词谓语句',vi:'Câu vị ngữ tính từ',huy:'Tính từ không cần 是',ct:'Trước tính từ không thêm 是: 我的课本很好, 米雪的手机不新.',s:23}
};
window.VA_BAI=[{
  id:'tttc-bai-2',mon:'tttc',zh:'这是你的手机吗',vi:'Bài 2 · Đây là điện thoại của bạn à?',lk:'../../tttc/bai-2/',
  sap:[ // chặng 1: sắp xếp câu
    {id:'s1',p:['这','是','你','的','手机','吗'],py:'Zhè shì nǐ de shǒujī ma?',vi:'Đây là điện thoại của bạn à?',g:'de'},
    {id:'s2',p:['那','是','谁','的','手机'],py:'Nà shì shéi de shǒujī?',vi:'Kia là điện thoại của ai?',g:'shei'},
    {id:'s3',p:['我','也','不','知道'],py:'Wǒ yě bù zhīdào.',vi:'Mình cũng không biết.',g:'ye'},
    {id:'s4',p:['这些','都','是','你','的','书','吗'],py:'Zhèxiē dōu shì nǐ de shū ma?',vi:'Những cái này đều là sách của bạn à?',g:'dou'},
    {id:'s5',p:['我','的','课本','很','好'],py:'Wǒ de kèběn hěn hǎo.',vi:'Giáo trình của mình rất hay.',g:'tinh'},
    {id:'s6',p:['你','也','喜欢','黑色','的','手机','吗'],py:'Nǐ yě xǐhuan hēisè de shǒujī ma?',vi:'Cậu cũng thích điện thoại màu đen à?',g:'ye'}
  ],
  hoi:[ // chặng 2: trả lời câu hỏi (ok = các đáp án đúng; bad = lựa chọn sai + lý do)
    {id:'h1',who:'Tóngxué 同学',q:'这是你的手机吗？',ok:['对，这是我的手机。'],g:'de',
      bad:[['对，这是你的手机。','Người hỏi nói “你” thì mình trả lời bằng “我”.'],['对，是手机的我。','Định ngữ phải đứng trước 的: 我的手机.']]},
    {id:'h2',who:'Lǐ Bái 李白',q:'那是谁的手机？',ok:['我也不知道。','那是老师的手机。'],g:'shei',
      bad:[['对，那是谁的手机。','Câu hỏi có 谁 thì không đáp “对”, phải nêu người cụ thể hoặc nói không biết.'],['不是，是手机。','Không trả lời đúng điều được hỏi (hỏi “của ai”).']]},
    {id:'h3',who:'Tóngxué 同学',q:'你们的汉语课本难吗？',ok:['不难。','很难。'],g:'tinh',
      bad:[['不是难。','Trước tính từ không thêm 是.'],['我们的汉语课本是难。','Trước tính từ không thêm 是.']]},
    {id:'h4',who:'Tóngxué 同学',q:'你们都是学生吗？',ok:['对，我们都是学生。'],g:'dou',
      bad:[['对，都我们是学生。','都 không đứng trước chủ ngữ.'],['对，我们是都学生。','都 phải đứng trước động từ 是, không đứng sau.']]},
    {id:'h5',who:'Mǐ Xuě 米雪',q:'你也喜欢黑色的手机吗？',ok:['我也喜欢黑色的手机。','我不喜欢黑色的手机。'],g:'ye',
      bad:[['也我喜欢黑色的手机。','也 không đứng trước chủ ngữ.'],['我喜欢手机黑色的。','Định ngữ “黑色的” phải đứng trước 手机.']]},
    {id:'h6',who:'Lǐ Bái 李白',q:'我不知道老师的名字，你呢？',ok:['我也不知道。'],g:'ye',
      bad:[['我不也知道。','Phủ định với 也 phải nói 也不…, không nói 不也….'],['也我不知道。','也 không đứng trước chủ ngữ.']]}
  ],
  dien:[ // chặng 3: điền chỗ trống — dấu _ là chỗ trống, o = các lựa chọn, ok = chỉ số đáp án đúng
    {id:'d1',s:'这是你_手机吗？',o:['的','是','也'],ok:0,g:'de',why:'Định ngữ “你” + 的 + trung tâm ngữ “手机”.'},
    {id:'d2',s:'那是_的手机？',o:['谁','什么','吗'],ok:0,g:'shei',why:'Hỏi “của ai” dùng 谁的.'},
    {id:'d3',s:'我是学生，他_是学生。',o:['也','都','不'],ok:0,g:'ye',why:'Chủ ngữ “他” chỉ một người, ý “cũng” dùng 也.'},
    {id:'d4',s:'这些_是你的书吗？',o:['都','谁','的'],ok:0,g:'dou',why:'“这些” là nhiều cái, ý “đều” dùng 都 trước động từ.'},
    {id:'d5',s:'我的课本_好。',o:['很','是','吗'],ok:0,g:'tinh',why:'Trước tính từ dùng 很, không dùng 是.'},
    {id:'d6',s:'我不知道，他_不知道。',o:['也','都','的'],ok:0,g:'ye',why:'Phủ định “cũng không” là 也不.'},
    {id:'d7',s:'这是谁_手机？',o:['的','吗','是'],ok:0,g:'shei',why:'谁的 + danh từ.'}
  ],
  dich:[ // chặng 4: dịch Việt → Trung (nhiễu = mảnh thừa cho thêm khó)
    {id:'t1',vi:'Đây là điện thoại của tôi.',p:['这','是','我','的','手机'],nhieu:['吗','谁'],py:'Zhè shì wǒ de shǒujī.',g:'de'},
    {id:'t2',vi:'Mình cũng không biết.',p:['我','也','不','知道'],nhieu:['都'],py:'Wǒ yě bù zhīdào.',g:'ye'},
    {id:'t3',vi:'Những cái kia đều là sách của bạn à?',p:['那些','都','是','你','的','书','吗'],nhieu:['也','谁'],py:'Nàxiē dōu shì nǐ de shū ma?',g:'dou',boss:1}
  ]
}];
