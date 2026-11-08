// Thông điệp hôm nay (trang chủ, dùng trong lich-hom-nay.js): mỗi ngày một câu ngắn tiếng Trung; học viên chọn cung hoàng đạo thì có câu riêng
// + màu may mắn + chữ may mắn. Cung đã chọn nhớ ở localStorage.llCung. Bản nháp — cô duyệt lại câu.
window.TD_CAU=[ // [câu, pinyin, nghĩa]
["今天也要加油！","Jīntiān yě yào jiāyóu!","Hôm nay cũng cố lên nhé!"],
["慢慢来，比较快。","Mànmàn lái, bǐjiào kuài.","Chậm mà chắc."],
["每天进步一点点。","Měitiān jìnbù yìdiǎndiǎn.","Mỗi ngày tiến bộ một chút."],
["你比你想的更棒！","Nǐ bǐ nǐ xiǎng de gèng bàng!","Bạn giỏi hơn bạn nghĩ đó!"],
["学习使我快乐。","Xuéxí shǐ wǒ kuàilè.","Học tập làm mình vui."],
["今天是个好日子。","Jīntiān shì ge hǎo rìzi.","Hôm nay là một ngày đẹp."],
["别怕说错，大胆说！","Bié pà shuō cuò, dàdǎn shuō!","Đừng sợ nói sai, cứ mạnh dạn nói!"],
["多喝水，多休息。","Duō hē shuǐ, duō xiūxi.","Uống nhiều nước, nghỉ ngơi nhiều nha."],
["笑一笑，十年少。","Xiào yi xiào, shí nián shào.","Cười một cái, trẻ ra mười tuổi."],
["读书是最好的旅行。","Dúshū shì zuì hǎo de lǚxíng.","Đọc sách là chuyến đi tuyệt nhất."],
["今天给朋友打个电话吧。","Jīntiān gěi péngyou dǎ ge diànhuà ba.","Hôm nay gọi điện cho một người bạn nhé."],
["一步一个脚印。","Yí bù yí ge jiǎoyìn.","Từng bước một, chắc chắn."],
["好好吃饭，好好睡觉。","Hǎohāo chīfàn, hǎohāo shuìjiào.","Ăn ngon, ngủ kỹ nhé."],
["熟能生巧。","Shú néng shēng qiǎo.","Luyện nhiều thì giỏi (có công mài sắt có ngày nên kim)."],
["今天的你很可爱！","Jīntiān de nǐ hěn kě'ài!","Hôm nay bạn đáng yêu lắm!"],
["休息一下，再出发。","Xiūxi yíxià, zài chūfā.","Nghỉ một chút rồi đi tiếp."],
["相信自己！","Xiāngxìn zìjǐ!","Tin vào bản thân nhé!"],
["千里之行，始于足下。","Qiān lǐ zhī xíng, shǐ yú zú xià.","Đi ngàn dặm bắt đầu từ một bước chân."],
["有志者事竟成。","Yǒu zhì zhě shì jìng chéng.","Có chí thì nên."],
["今天对别人说声谢谢吧。","Jīntiān duì biérén shuō shēng xièxie ba.","Hôm nay nói lời cảm ơn với ai đó nha."],
["你已经很努力了。","Nǐ yǐjīng hěn nǔlì le.","Bạn đã cố gắng nhiều rồi đó."]
];
window.TD_CUNG=[ // [tên Trung, pinyin, tên Việt, tháng-ngày bắt đầu, khoảng ngày sinh]
["白羊座","Báiyáng zuò","Bạch Dương",321,"21/3 – 19/4"],["金牛座","Jīnniú zuò","Kim Ngưu",420,"20/4 – 20/5"],["双子座","Shuāngzǐ zuò","Song Tử",521,"21/5 – 21/6"],
["巨蟹座","Jùxiè zuò","Cự Giải",622,"22/6 – 22/7"],["狮子座","Shīzi zuò","Sư Tử",723,"23/7 – 22/8"],["处女座","Chǔnǚ zuò","Xử Nữ",823,"23/8 – 22/9"],
["天秤座","Tiānchèng zuò","Thiên Bình",923,"23/9 – 23/10"],["天蝎座","Tiānxiē zuò","Thiên Yết",1024,"24/10 – 22/11"],["射手座","Shèshǒu zuò","Nhân Mã",1123,"23/11 – 21/12"],
["摩羯座","Mójié zuò","Ma Kết",1222,"22/12 – 19/1"],["水瓶座","Shuǐpíng zuò","Bảo Bình",120,"20/1 – 18/2"],["双鱼座","Shuāngyú zuò","Song Ngư",219,"19/2 – 20/3"]];
window.TD_MAU=[["红色","hóngsè","đỏ","#E0545F"],["蓝色","lánsè","xanh dương","#3B87D6"],["绿色","lǜsè","xanh lá","#2E9E73"],["黄色","huángsè","vàng","#C99A14"],
  ["紫色","zǐsè","tím","#7C6BD6"],["橙色","chéngsè","cam","#E7823A"],["粉色","fěnsè","hồng","#D24E86"],["白色","báisè","trắng","#B9BCC9"]];
// TD_CHON(ngày): chọn thông điệp cho một ngày → {cau:[câu,pinyin,nghĩa], cung (-1 = theo ngày), mau, chu, mua}
window.TD_CHON=function(d){
  const C=window.TD_CAU,G=window.TD_CUNG,M=window.TD_MAU,CHU=window.LICH_CHU||[['爱','ài','yêu']];
  d=d||new Date();
  const k=Math.round((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(2026,0,1))/864e5),mod=(a,n)=>((a%n)+n)%n;
  const md=(d.getMonth()+1)*100+d.getDate();let mua=9,dau=0;G.forEach((g,i)=>{if(g[3]<=md&&g[3]>dau){dau=g[3];mua=i}});
  let cung='';try{cung=localStorage.getItem('llCung')||''}catch(e){}
  const ci=cung===''?-1:+cung;
  return{cau:C[mod(k+(ci<0?0:ci*5+3),C.length)],cung:ci,mau:ci<0?null:M[mod(k*3+ci,M.length)],chu:ci<0?null:CHU[mod(k*7+ci*11,CHU.length)],mua};
};
// TD_VE(el, ngày): vẽ khối thông điệp cho một ngày bất kỳ (lịch xé gọi lại khi xé sang ngày mai).
window.TD_VE=function(el,d){
  const C=window.TD_CAU,G=window.TD_CUNG,M=window.TD_MAU,CHU=window.LICH_CHU||[['爱','ài','yêu']];
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  d=d||new Date();
  const k=Math.round((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(2026,0,1))/864e5),mod=(a,n)=>((a%n)+n)%n;
  // cung của mùa (theo ngày dương); trước 20/1 vẫn là Ma Kết
  const md=(d.getMonth()+1)*100+d.getDate();let mua=9,dau=0;G.forEach((g,i)=>{if(g[3]<=md&&g[3]>dau){dau=g[3];mua=i}});
  let cung='';try{cung=localStorage.getItem('llCung')||''}catch(e){}
  const ci=cung===''?-1:+cung,c=C[mod(k+(ci<0?0:ci*5+3),C.length)];
  let may;
  if(ci>=0){const m=M[mod(k*3+ci,M.length)],z=CHU[mod(k*7+ci*11,CHU.length)];
    may='<div class="td-may"><span><b lang="zh">'+G[ci][0]+'</b>'+G[ci][2]+'</span><span>幸运色 <i style="--m:'+m[3]+'"></i><b lang="zh">'+m[0]+'</b>'+m[2]+'</span><span>幸运字 <b lang="zh">'+z[0]+'</b>'+esc(z[2])+'</span></div>';}
  else may='<div class="td-may nhe">Mùa này là <b lang="zh">'+G[mua][0]+'</b> '+G[mua][2]+' — chọn cung của bạn để nhận thông điệp riêng.</div>';
  el.innerHTML='<div class="td-dau"><span class="td-ten">Thông điệp hôm nay <b lang="zh">今日寄语</b></span><label class="td-chon">Cung của bạn <select><option value="">Theo ngày</option>'+
    G.map((g,i)=>'<option value="'+i+'">'+g[0]+' · '+g[2]+'</option>').join('')+'</select></label></div>'+
    '<p class="td-zh" lang="zh">'+c[0]+'</p><p class="td-py">'+esc(c[1])+'</p><p class="td-vi">'+esc(c[2])+'</p>'+may;
  const s=el.querySelector('select');s.value=cung;
  s.addEventListener('change',()=>{try{localStorage.setItem('llCung',s.value)}catch(e){}document.querySelectorAll('.td').forEach(x=>window.TD_VE(x,x._ngay))});
  el._ngay=d;
};
document.querySelectorAll('.td').forEach(el=>window.TD_VE(el));
