// Câu khen / trêu dí dỏm dùng chung cho mọi trò trong 游戏盒. Sửa câu ở đây là đổi cho tất cả các trò.
// VUI.dung(chuỗi) · VUI.sai(chuỗi trước khi sai) · VUI.hetgio() · VUI.mang(số mạng còn) · VUI.combo(n)
// VUI.rank(bậc 0–3) → [zh, vi] · VUI.rankHTML([zh,vi], bậc) · VUI.pop(chữ, phần tử, 'good'|'bad')
// Mỗi trò có thêm kho câu riêng (RIENG, theo tên thư mục của trò); câu khen / trêu lấy nửa từ kho riêng, nửa từ kho chung.
window.VUI=(function(){
  const any=a=>a[Math.random()*a.length|0];
  const KHEN=['Chuẩn luôn!','对了！','好！','Đỉnh!','Ngon lành!','太棒了！','Chuẩn không cần chỉnh!','Giỏi ghê!','Quá dữ!','漂亮！','Xịn xò!'];
  const COMBO={
    3:['Ba câu liền! Nóng tay rồi 🔥','连对三个！Đang lên phong độ 🔥'],
    5:['Năm liền! Cao thủ lộ diện 😎','手感不错！Tay đang vào phom 🎯'],
    8:['Tám liền! Ai cản nổi em đây? 🚀','Tám liền! Chữ Hán bắt đầu run rồi 😱'],
    10:['Mười liền! 无敌了！Vô đối 👑','Mười liền! Cô phải xin chữ ký rồi ✍️'],
    15:['Mười lăm liền! Em là máy à? 🤖','Mười lăm liền! Bàn phím bốc khói rồi 🔥'],
    20:['Hai mươi liền! 学霸 chính hiệu 🏆','Hai mươi liền! Huyền thoại của lớp 🌟'],
    30:['Ba mươi liền!!! Cho em ra đề luôn đi 🎓']};
  const TREU=['Ối, trật lất rồi 🙈','Chữ Hán vừa lừa em một vố 😜','Suýt… mà cũng chưa suýt lắm 😆','Không sao, té rồi đứng dậy 💪','Mắt nhắm mắt mở hả? 😴','Sai nhưng mà sai rất tự tin 😂','Chữ này đang cười em đó 😏','Hít thở sâu, làm lại nào 🧘','Não đang load hả? ⏳'];
  // câu riêng theo từng trò: [khen, trêu]
  const RIENG={
    'mua-chu':[['Hứng chữ như hứng mưa ☔','Gõ nhanh như chớp ⚡','Mưa to cỡ nào cũng không sợ 💪','Tay nhanh hơn mưa rơi!','Ô dù chắc chắn ghê ☂️','好快！Nhanh quá trời!'],
      ['Chữ rơi ướt hết sân rồi 💦','Ô bị thủng lỗ rồi hả? 🌂','Chữ rơi nhanh quá, chóng mặt chưa? 😵‍💫','Bàn phím trơn quá hả? 😆','Mưa dầm thấm lâu, từ từ thôi ☔']],
    'bay-chu':[['Tinh mắt ghê!','火眼金睛！Mắt thần!','Bẫy giăng đầy mà không dính 😎','Thám tử chữ Hán đây rồi 🕵️','Né bẫy nhẹ như lông hồng 🪶','Nhìn một phát ra ngay!','Mắt thần đây rồi!'],
      ['Hai chữ này sinh đôi mà 👯','Bẫy giăng khéo quá 🪤','Kính lúp đâu, soi kỹ từng nét nha 🔍','Ơ kìa, bẫy đó bẫy đó! 🪤','Chữ này đội lốt giỏi ghê 🥸','Mắt hoa rồi hả? 👀']],
    'thanh-dieu':[['Tai thính ghê!','Tai thính như radar 📡','字正腔圆！Chuẩn phát thanh viên 🎙️','Thanh điệu lên xuống đúng nhịp 🎵','Tai vàng đây rồi 👂✨','Nghe là biết liền!'],
      ['Thanh 2 với thanh 3 lại cãi nhau rồi 🙉','Lên núi xuống dốc lộn đường rồi ⛰️','Tai đang nghỉ trưa hả? 😴','mā má mǎ mà… mẹ hay ngựa đây? 🐴','Nghe lại lần nữa nha 👂']],
    'dap-chuot':[['Tai thính như radar 📡','Búa thần giáng xuống! 🔨','Chuột chạy đằng trời 🐭','Đập đâu trúng đó!','Vua đập chuột đây rồi 👑','Nhanh tay lẹ mắt ghê!'],
      ['Đập nhầm con chuột vô tội rồi 😢','Búa hụt rồi, chuột cười kìa 😝','Nghe kỹ thanh điệu rồi hẵng đập nha 👂','Ối, oan cho chú chuột này 🥺','Chuột trốn nhanh quá 💨']],
    'lat-the':[['Trí nhớ siêu phàm 🧠','过目不忘！Nhìn qua là nhớ','Não như máy chụp hình 📸','Trúng phóc!','Nhớ dai ghê!','Đôi này về với nhau rồi 💞'],
      ['Trí nhớ cá vàng hả? 🐠','Nhớ kỹ vị trí nha 🧠','Ơ, lật nhầm rồi 😜','Hai thẻ này không phải một cặp đâu 💔','Não cần thêm ly trà sữa 🧋']],
    'ghep-bo':[['Khéo tay ghê!','Ghép chuẩn!','Thợ lắp chữ lành nghề 🔧','Bộ thủ về đúng nhà rồi 🏠','字字珠玑！','Lắp ráp như LEGO 🧱'],
      ['Bộ thủ đang chơi trốn tìm 🙈','Ghép vậy thành chữ ngoài hành tinh rồi 👽','Mảnh ghép đi lạc nhà rồi 🧩','Lắp ngược rồi hả? 🔄','Thợ lắp hôm nay hơi run tay 😅']],
    'viet-chu':[['Nét chữ ngay ngắn ghê ✍️','写得好！','Tay vững ghê!','Nét nào ra nét nấy!','Chữ đẹp lên thấy rõ 📈'],
      ['Cây bút đang giận dỗi à? 🖊️','Nét này khó ở ghê 😤','Bình tĩnh, thở đều, viết lại 🧘','Thứ tự nét lạc đường rồi 🧭','Nét bút hơi “phiêu” rồi 🌬️']],
    'noi-tu':[['接得好！','Nối hay!','Nối dài như rồng 🐉','Rồng dài thêm một khúc 🐲','Vua nối từ đây rồi 👑','Tiếp nào, rồng đang lớn!'],
      ['Rồng đứt đuôi rồi 🐲','Chữ đầu phải trùng chữ cuối nha 🔗','Nối lạc sang rồng khác rồi 😆','Rồng bị nghẹn rồi 🤧','Đuôi rồng rơi đâu mất 😭']],
    'ran-san-chu':[['Rắn no căng bụng 🐍','Ngon! Rắn khen ngon 😋','Rắn lớn nhanh như thổi 📏','蛇王 tương lai 🐍👑','Ăn đúng thứ tự, chuẩn!','Măm măm ngon lành!'],
      ['Rắn ăn bậy đau bụng rồi 🤢','Rắn đói quá ăn nhầm 😵','Ăn từ từ thôi, nghẹn bây giờ 🥴','Rắn cần đeo kính rồi 👓','Thứ tự nha, rắn ơi 🐍']],
    'bong-bay':[['Tai thính ghê!','Bùm! Trúng rồi!','Bắn đâu trúng đó 🎯','神射手！Xạ thủ thần sầu','Bóng nổ cái bụp 🎈💥','Phi tiêu bách phát bách trúng 🎯'],
      ['Bóng bay lên trời gặp ông trăng rồi 🌙','Bắn trượt, bóng cười khẩy 🎈😏','Bóng này giả dạng giỏi ghê 🥸','Phi tiêu bay đi đâu rồi? 🤷','Nghe kỹ lại nha 👂']],
    'tim-tu':[['Tinh mắt ghê!','好眼力！','Mắt đại bàng 🦅','Soi đâu ra đó 🔍','Tìm nhanh như chớp ⚡'],
      ['Từ này trốn kỹ lắm 🙈','Kính lúp đâu rồi? 🔍','Đọc kỹ từng chữ nha 👀','Chữ nhiễu lừa em rồi 😜','Khoanh nhầm rồi, không sao 😅']]};
  const TRO=(location.pathname.match(/tro-choi\/([^/]+)\//)||[])[1],MINE=RIENG[TRO];
  const khen=()=>MINE&&Math.random()<.5?any(MINE[0]):any(KHEN),treu=()=>MINE&&Math.random()<.5?any(MINE[1]):any(TREU);
  const DUT=['Ối, chuỗi đứt mất rồi 💔','Tiếc ghê, đang chuỗi đẹp mà 😭','Chuỗi đẹp thế mà… thôi làm lại 🥲'];
  const HETGIO=['Hết giờ! Đồng hồ không chờ ai ⏰','Tích tắc… hết giờ mất rồi 🐢','Nghĩ lâu quá, câu hỏi bỏ chạy rồi 🏃','Hết giờ! Đang ngủ gật hả? 😴'];
  const MANG={2:['Mất một mạng 💔 còn 2, bình tĩnh!','Ui da 💔 còn 2 mạng thôi nha'],1:['Còn đúng 1 mạng! Cẩn thận từng chữ 😬','Mạng cuối rồi, dồn hết nội công 🥋']};
  const RANK=[
    [['别灰心','Hôm nay chữ Hán thắng, mai tới lượt em!'],['慢慢来','Chậm mà chắc, cô tin em 🐢'],['热身','Mới khởi động thôi mà 😉']],
    [['加油！','Cũng được… nhưng em làm được hơn thế 😉'],['还行','Tạm ổn! Luyện thêm chút là lên hạng 💪'],['不错','Khá đấy, sắp thành cao thủ rồi!']],
    [['厉害！','Giỏi lắm, cả lớp phải nể 👏'],['真棒！','Tuyệt vời! Tay nghề lên thấy rõ 🚀'],['很好！','Rất tốt! Chỉ còn một bước tới đỉnh ⛰️']],
    [['无敌！','Vô đối! Không ai cản nổi 👑'],['学霸！','Học bá chính hiệu 🏆'],['神了！','Đỉnh của chóp!']]];
  const QUIP=[
    ['Không sao, thiên tài nào cũng từng thua 😌','Chữ Hán hôm nay hơi khó ở, thử lại nha 🙃','Thua keo này ta bày keo khác 💪'],
    ['Làm ván nữa đi, ván sau chắc chắn hơn 🎯','Kỷ lục đang vẫy tay chờ em đó 👋','Ổn áp! Nhưng em còn giấu nghề phải không? 🤨'],
    ['Thêm chút nữa là chạm đỉnh rồi ⛰️','Phong độ ổn định, chữ Hán bắt đầu sợ em 😏','Chụp màn hình khoe lớp được rồi đó 📸'],
    ['Chụp màn hình khoe cả lớp đi! 📸','Chữ Hán nhìn thấy em là run 😎','Cô xin phép gọi em là sư phụ 🙇']];
  // chữ nổi bay lên (cho trò hành động): VUI.pop('Năm liền!', phần tử, 'good')
  const st=document.createElement('style');
  st.textContent='.vui-pop{position:fixed;z-index:70;pointer-events:none;transform:translate(-50%,0);font-family:var(--vi,system-ui);font-weight:800;font-size:clamp(16px,3.6vw,22px);padding:6px 14px;border-radius:999px;white-space:nowrap;box-shadow:0 6px 18px rgba(0,0,0,.15);animation:vuiPop 1.5s ease-out forwards}'+
    '.vui-pop.good{background:#FFF4C9;color:#8A5A00}.vui-pop.bad{background:#FFE1E1;color:#B3261E}'+
    '.vui-quip{display:block;font-family:var(--vi,system-ui);font-size:15px;font-weight:600;color:var(--muted,#777);margin-top:4px}'+
    '@keyframes vuiPop{0%{opacity:0;transform:translate(-50%,10px) scale(.7)}15%{opacity:1;transform:translate(-50%,0) scale(1.08)}25%{transform:translate(-50%,0) scale(1)}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-46px)}}'+
    '@media (prefers-reduced-motion:reduce){.vui-pop{animation-duration:1.2s}}';
  document.head.appendChild(st);
  function pop(text,el,kind){
    let x=innerWidth/2,y=innerHeight*.3;
    if(el&&el.getBoundingClientRect){const r=el.getBoundingClientRect();x=Math.min(Math.max(r.left+r.width/2,120),innerWidth-120);y=Math.max(r.top-10,70)}
    const d=document.createElement('div');d.className='vui-pop '+(kind||'good');d.textContent=text;d.style.left=x+'px';d.style.top=y+'px';
    document.body.appendChild(d);setTimeout(()=>d.remove(),1600);
  }
  return{
    any,pop,
    khen,treu,
    combo:n=>COMBO[n]?any(COMBO[n]):null,
    dung:n=>(COMBO[n]&&any(COMBO[n]))||khen(),
    sai:was=>was>=3?any(DUT):treu(),
    hetgio:()=>any(HETGIO),
    mang:(n,pre)=>MANG[n]?(pre||'')+any(MANG[n]):'',
    rank:t=>any(RANK[Math.max(0,Math.min(3,t))]),
    rankHTML:(rk,t)=>'<span class="zh" lang="zh">'+rk[0]+'</span>'+rk[1]+'<span class="vui-quip">'+any(QUIP[Math.max(0,Math.min(3,t))])+'</span>'
  };
})();
