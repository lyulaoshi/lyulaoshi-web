/* Logo theo mùa lễ hội (22/11/2026). Logo gốc giữ nguyên; trong mùa lễ, script này phủ thêm lớp trang trí vẽ tay
   (SVG, không emoji) lên hình hộp 哈喽 ở đầu trang chủ + món nhỏ lên logo thanh đầu trang + biểu tượng tab trình duyệt.
   Thêm mùa mới: thêm 1 mục vào MUA (tu/den = "tháng-ngày", tính cả 2 đầu; kieu = kiểu đang dùng) + hình trong VE + CSS trong mua-le.css.
   Mùa vắt qua năm mới thì tu > den (vd 12-27 → 01-10).
   Xem thử ngoài mùa: ?mua=giang-sinh hoặc ?mua=nam-moi (kiểu đang chọn), ?mua=giang-sinh&kieu=3 (xem kiểu khác); tắt hẳn: ?mua=khong. */
(function(){
  var MUA=[
    {ten:"giang-sinh",tu:"12-01",den:"12-26",kieu:5},  /* cô chốt kiểu 5 (tuần lộc giữa trời tuyết) 23/11/2026 */
    {ten:"nam-moi",tu:"12-27",den:"01-10",kieu:5}      /* Tết Dương lịch, vắt qua năm mới (tu > den); cô chốt kiểu 5 (pháo hoa + bóng bay số) 23/11/2026 */
  ];
  var q=(location.search.match(/[?&]mua=([\w-]+)/)||[])[1];
  var qk=(location.search.match(/[?&]kieu=(\d+)/)||[])[1];
  if(q==="khong")return;
  var d=new Date(),md=("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);
  var mua=null;
  for(var i=0;i<MUA.length;i++){
    var m=MUA[i],trong=m.tu<=m.den?(md>=m.tu&&md<=m.den):(md>=m.tu||md<=m.den);
    if(q?m.ten===q:trong){mua=m;break}
  }
  if(!mua)return;

  /* ——— các mảnh vẽ dùng chung (khung toạ độ = khung .art 1508 x 1298) ——— */
  var TUYET_NAP='<path class="ml-tuyet" d="M352 664c40-26 92-6 138-18c52-14 96 8 150 2c58-6 104 10 160 8c62-2 110 22 170 22c50 0 100 22 136 30c14 4 18 18 4 22c-30-6-70-4-104 0c-40 4-74-10-112-6c-44 4-80-6-122-6c-46 0-84-8-128-6c-44 2-84-8-126-4c-40 4-76-6-112-2c-28 2-58-6-60-22c0-12 2-28 6-38z"/>';
  var MU_NHO='<path class="ml-do" d="M16 58c4-26 22-46 46-48c14-2 26 8 32 22c-8-6-18-6-22-2c-6 6-2 18 0 28z"/>'+
    '<path class="ml-vien" d="M10 60c16-6 50-8 66-2c4 2 4 12 0 14c-16-6-48-4-66 2c-4-2-4-12 0-14z"/>'+
    '<circle class="ml-vien" cx="94" cy="34" r="10"/>';
  function f(n){return Math.round(n)}

  /* vòng hoa lá thông ôm quanh bong bóng 哈喽 (chừa chỗ đuôi bong bóng) */
  function vongHoa(){
    var cx=770,cy=318,rx=394,ry=254,s="",N=40;
    for(var i=0;i<N;i++){
      var t=i/N*2*Math.PI,deg=t*180/Math.PI;
      if(deg>100&&deg<142)continue;
      var x=cx+rx*Math.cos(t),y=cy+ry*Math.sin(t),g=Math.atan2(ry*Math.cos(t),-rx*Math.sin(t))*180/Math.PI;
      s+='<ellipse class="ml-la1" cx="'+f(x)+'" cy="'+f(y)+'" rx="52" ry="22" transform="rotate('+f(g+30)+' '+f(x)+' '+f(y)+')"/>'+
         '<ellipse class="ml-la2" cx="'+f(x)+'" cy="'+f(y)+'" rx="48" ry="20" transform="rotate('+f(g-32)+' '+f(x)+' '+f(y)+')"/>';
    }
    for(i=0;i<N;i+=4){
      t=(i+2.5)/N*2*Math.PI;deg=t*180/Math.PI;
      if(deg>96&&deg<146)continue;
      x=cx+rx*Math.cos(t);y=cy+ry*Math.sin(t);
      s+='<circle class="ml-qua" cx="'+f(x-9)+'" cy="'+f(y+4)+'" r="17"/><circle class="ml-qua" cx="'+f(x+12)+'" cy="'+f(y-8)+'" r="16"/>';
    }
    return s;
  }
  /* dây đèn nháy võng 2 nhịp trước mặt hộp */
  function dayDen(){
    var nhip=[[268,884,520,1004,762,892],[762,892,1004,1004,1252,880]],day="",den="",mau=["do","vang","xanh","lam"],n=0;
    nhip.forEach(function(p){
      day+='M'+p[0]+' '+p[1]+'Q'+p[2]+' '+p[3]+' '+p[4]+' '+p[5];
      for(var k=1;k<=5;k++){
        var t=k/6,x=(1-t)*(1-t)*p[0]+2*(1-t)*t*p[2]+t*t*p[4],y=(1-t)*(1-t)*p[1]+2*(1-t)*t*p[3]+t*t*p[5],
            g=Math.atan2(2*(1-t)*(p[3]-p[1])+2*t*(p[5]-p[3]),2*(1-t)*(p[2]-p[0])+2*t*(p[4]-p[2]))*180/Math.PI;
        den+='<g transform="translate('+f(x)+' '+f(y)+') rotate('+f(g)+')"><rect class="ml-chui" x="-12" y="0" width="24" height="20" rx="4"/>'+
             '<ellipse class="ml-den ml-'+mau[n%4]+'" style="--n:'+n+'" cx="0" cy="48" rx="23" ry="31"/></g>';
        n++;
      }
    });
    return '<path class="ml-day2" d="'+day+'"/>'+den;
  }


  /* sừng tuần lộc (CLS thay bằng lớp nét viền / nét màu) */
  var SUNG_T='<path class="CLS" d="M520 668C512 622 494 590 470 546c-8-16-14-30-18-48M507 620c23-18 41-34 53-64M490 590c-20-10-38-24-48-50M474 552c16-16 26-32 28-54"/>',
      SUNG_P='<path class="CLS" d="M1106 690c8-46 26-78 50-122c8-16 14-30 18-48M1119 642c-23-18-41-34-53-64M1136 612c20-10 38-24 48-50M1152 574c-16-16-26-32-28-54"/>';
  function SUNG(cls){
    return '<g transform="translate(520 668) scale(1.4) translate(-520 -668)">'+SUNG_T.replace(/CLS/g,"ml-sung-v")+SUNG_T.replace(/CLS/g,"ml-sung")+'</g>'+
           '<g transform="translate(1106 690) scale(1.4) translate(-1106 -690)">'+SUNG_P.replace(/CLS/g,"ml-sung-v")+SUNG_P.replace(/CLS/g,"ml-sung")+'</g>';
  }
  /* tai tuần lộc (2 góc nắp) */
  var TAI='<g transform="rotate(-32 430 668)"><path class="ml-tai" d="M486 668c-30-34-90-40-128-6c40 30 96 34 128 6z"/><path class="ml-tai2" d="M470 668c-24-18-58-20-82-4c26 16 58 18 82 4z"/></g>'+'<g transform="rotate(30 1196 692)"><path class="ml-tai" d="M1140 692c30-34 90-40 128-6c-40 30-96 34-128 6z"/><path class="ml-tai2" d="M1156 692c24-18 58-20 82-4c-26 16-58 18-82 4z"/></g>';
  /* bông tuyết 6 cánh vẽ tay */
  function BONG(x,y,r){
    var s="",i,a,c,e;
    for(i=0;i<6;i++){a=i*Math.PI/3;c=Math.cos(a);e=Math.sin(a);
      s+="M"+f(x)+" "+f(y)+"L"+f(x+r*c)+" "+f(y+r*e);
      var mx=x+r*.6*c,my=y+r*.6*e,b1=a+.7,b2=a-.7;
      s+="M"+f(mx)+" "+f(my)+"l"+f(r*.32*Math.cos(b1))+" "+f(r*.32*Math.sin(b1))+"M"+f(mx)+" "+f(my)+"l"+f(r*.32*Math.cos(b2))+" "+f(r*.32*Math.sin(b2));
    }
    return '<path class="ml-bongtuyet" style="transform-origin:'+f(x)+'px '+f(y)+'px" d="'+s+'"/>';
  }
  /* lớp tuyết ôm đỉnh bong bóng (ellipse cx,cy,rx,ry), mép dưới có giọt tuyết chảy */
  function capTuyet(cx,cy,rx,ry){
    var ngoai=[],trong=[],N=16,a0=200,a1=340,i,t,o;
    for(i=0;i<=N;i++){t=(a0+(a1-a0)*i/N)*Math.PI/180;o=12+8*Math.sin(i*2.3);
      ngoai.push([cx+(rx+o)*Math.cos(t),cy+(ry+o)*Math.sin(t)]);}
    for(i=N;i>=0;i--){t=(a0+(a1-a0)*i/N)*Math.PI/180;o=(i===0||i===N)?0:(i%3===1?-54:-26-6*Math.cos(i*1.9));
      trong.push([cx+(rx+o)*Math.cos(t),cy+(ry+o)*Math.sin(t)]);}
    var p=ngoai.concat(trong),d="M"+f(p[0][0])+" "+f(p[0][1]);
    for(i=1;i<p.length;i++){var m=[(p[i-1][0]+p[i][0])/2,(p[i-1][1]+p[i][1])/2];d+="Q"+f(p[i-1][0])+" "+f(p[i-1][1])+" "+f(m[0])+" "+f(m[1]);}
    d+="L"+f(p[p.length-1][0])+" "+f(p[p.length-1][1])+"Z";
    var bt="";for(i=2;i<=N-2;i++){t=(a0+(a1-a0)*i/N)*Math.PI/180;bt+=(i===2?"M":"L")+f(cx+(rx-4)*Math.cos(t))+" "+f(cy+(ry-4)*Math.sin(t));}
    return '<path class="ml-tuyet" d="'+d+'"/><path class="ml-bt" d="'+bt+'"/>';
  }


  /* —— Tết Dương lịch —— */
  /* năm mới: từ tháng 7 trở đi tính sang năm sau (xem thử trong tháng 11–12 vẫn ra đúng năm sắp tới) */
  var NAM=d.getFullYear()+(d.getMonth()>=6?1:0);
  /* pháo hoa: tia + chấm, nở theo vòng (--dl lệch nhịp) */
  function PHAO(x,y,r,mau,dl){
    var s="",c="",i,a,n=14;
    for(i=0;i<n;i++){a=i*2*Math.PI/n;
      s+="M"+f(x+r*.32*Math.cos(a))+" "+f(y+r*.32*Math.sin(a))+"L"+f(x+r*.86*Math.cos(a))+" "+f(y+r*.86*Math.sin(a));
      c+='<circle cx="'+f(x+r*Math.cos(a+.22))+'" cy="'+f(y+r*Math.sin(a+.22))+'" r="'+f(r*.05+3)+'"/>';}
    return '<g class="ml-phao ml-'+mau+'" style="transform-origin:'+f(x)+'px '+f(y)+'px;--dl:'+dl+'s"><path d="'+s+'"/>'+c+'<circle cx="'+f(x)+'" cy="'+f(y)+'" r="'+f(r*.09)+'"/></g>';
  }
  /* dây kim tuyến xoắn rủ xuống */
  function XOAN(x,y,dai,lech,mau){
    var s="M"+x+" "+y,k;for(k=0;k<dai;k++)s+="c"+lech+" 14 "+lech+" 34 0 44c"+(-lech)+" 10 "+(-lech)+" 30 0 44";
    return '<path class="ml-xoan ml-'+mau+'" d="'+s+'"/>';
  }


  /* ngôi sao 4 cánh lấp lánh */
  function SAO(x,y,r,mau,dl){
    return '<path class="ml-sao4 ml-'+mau+'" style="transform-origin:'+x+'px '+y+'px;--dl:'+(dl||0)+'s" d="M'+x+' '+(y-r)+'Q'+x+' '+y+' '+(x+r)+' '+y+'Q'+x+' '+y+' '+x+' '+(y+r)+'Q'+x+' '+y+' '+(x-r)+' '+y+'Q'+x+' '+y+' '+x+' '+(y-r)+'z"/>';
  }
  /* bảng lật số năm: 4 thẻ, thẻ cuối lật từ năm cũ sang năm mới */
  function BANG_LAT(){
    var cu=String(NAM-1),moi=String(NAM),s="",i,x;
    for(i=0;i<4;i++){x=456+i*160;
      s+='<rect class="ml-the2" x="'+x+'" y="886" width="140" height="160" rx="16"/>'+
         '<circle class="ml-khoen" cx="'+(x+36)+'" cy="886" r="9"/><circle class="ml-khoen" cx="'+(x+104)+'" cy="886" r="9"/>';
      if(cu[i]===moi[i])s+='<text class="ml-so2" x="'+(x+70)+'" y="1012">'+moi[i]+'</text>';
      else s+='<text class="ml-so2 ml-so-cu" x="'+(x+70)+'" y="1012">'+cu[i]+'</text><text class="ml-so2 ml-so-moi" x="'+(x+70)+'" y="1012">'+moi[i]+'</text>';
      s+='<path class="ml-gach" d="M'+(x+4)+' 966h132"/>';
    }
    return s;
  }
  /* bóng bay số (giấy bạc vàng) + dây buộc về nắp hộp */
  function BONG_SO(ch,x,y,goc,dx,dy,dl){
    return '<g class="ml-bay" style="--dl:'+dl+'s"><path class="ml-daybay" d="M'+x+' '+(y+96)+'Q'+f((x+dx)/2+(dx>x?-50:50))+' '+f((y+96+dy)/2)+' '+dx+' '+dy+'"/>'+
      '<text class="ml-so3" x="'+x+'" y="'+(y+80)+'" transform="rotate('+goc+' '+x+' '+y+')">'+ch+'</text>'+
      '<text class="ml-so3b" x="'+(x-14)+'" y="'+(y+66)+'" transform="rotate('+goc+' '+x+' '+y+')">'+ch+'</text></g>';
  }

  /* nón tiệc nhỏ cho logo thanh đầu trang */
  var NON_NHO='<path class="ml-non" d="M18 62L54 4l26 52z"/><circle class="ml-cham" cx="40" cy="44" r="5"/><circle class="ml-cham" cx="58" cy="34" r="4"/><circle class="ml-cham" cx="50" cy="18" r="3.5"/>'+
      '<path class="ml-vien-vang" d="M16 62c20-6 44-8 66-6"/><circle class="ml-vang2" cx="54" cy="4" r="9"/>';
  /* giấy màu + sao bung từ miệng hộp (kiểu bật nắp): mỗi mảnh bay tới (--tx,--ty) */
  function BUNG(){
    var s="",i,mau=["do","vang","lam","xanh","tim"],n=16;
    for(i=0;i<n;i++){
      var h=i<n/2?-1:1,j=i%(n/2),a=(h<0?(-178+j*5.5):(-2-j*5.5))*Math.PI/180,r=330+((i*53)%5)*60,tx=f(r*Math.cos(a)),ty=f(r*Math.sin(a)*1.1),
          st='style="--tx:'+tx+'px;--ty:'+ty+'px;--xoay:'+((i%2?1:-1)*(180+i*20))+'deg;--dl:'+(-(i%4)*.05).toFixed(2)+'s"';
      if(i%3===0)s+='<g class="ml-manh" '+st+'>'+SAO(780,690,52,mau[i%5])+'</g>';
      else if(i%3===1)s+='<g class="ml-manh" '+st+'><rect class="ml-'+mau[i%5]+'" x="760" y="680" width="40" height="22" rx="4"/></g>';
      else s+='<g class="ml-manh" '+st+'><circle class="ml-'+mau[i%5]+'" cx="780" cy="690" r="16"/></g>';
    }
    return s;
  }

  /* Tết Dương lịch: 3 chùm pháo hoa (kiểu 1) + chùm bóng bay số năm mới (kiểu 3) — kiểu 5 ghép 2 thứ này */
  var NM_PHAO=PHAO(185,150,118,"vang",0)+PHAO(1395,330,92,"lam",-1.1)+PHAO(105,870,78,"tim",-2.1);
  var NM_BONG=
        BONG_SO(String(NAM)[0],150,170,-10,380,690,0)+BONG_SO(String(NAM)[1],250,470,8,420,700,-1.2)+
        BONG_SO(String(NAM)[2],1290,150,10,1250,712,-.6)+BONG_SO(String(NAM)[3],1360,440,-8,1280,716,-1.8)+
        /* vài bóng tròn nhỏ */
        '<g class="ml-bay" style="--dl:-.9s"><path class="ml-daybay" d="M80 820c-10 40 20 60 0 100"/><ellipse class="ml-bongtron ml-lam" cx="80" cy="770" rx="44" ry="54"/><path class="ml-nut" d="M72 822h16l-8-8z"/><ellipse class="ml-bongsang" cx="64" cy="748" rx="10" ry="16"/></g>'+
        '<g class="ml-bay" style="--dl:-2.2s"><path class="ml-daybay" d="M1440 860c10 40-20 60 0 100"/><ellipse class="ml-bongtron ml-tim" cx="1440" cy="810" rx="44" ry="54"/><path class="ml-nut" d="M1432 862h16l-8-8z"/><ellipse class="ml-bongsang" cx="1424" cy="788" rx="10" ry="16"/></g>'+
        /* nơ buộc dây trên 2 góc nắp */
        '<g class="ml-nap"><circle class="ml-vang2" cx="390" cy="690" r="16"/><circle class="ml-vang2" cx="1266" cy="714" r="16"/></g>';
  var VE={
    "nam-moi":{
      /* Kiểu 1 — Pháo hoa: 3 chùm pháo hoa nở, nón tiệc trên bong bóng 哈喽, băng rôn 新年快乐 + năm mới trước hộp, kim tuyến rủ 2 bên, giấy màu rơi */
      1:{tuyet:22,giay:1,
        nho:NON_NHO,
        tren:
        NM_PHAO+
        '<g class="ml-nap">'+XOAN(372,688,3,-26,"tim")+XOAN(1288,716,3,26,"lam")+
          '<rect class="ml-vang" x="520" y="650" width="22" height="12" rx="2" transform="rotate(-20 531 656)"/><rect class="ml-lam" x="700" y="656" width="22" height="12" rx="2" transform="rotate(25 711 662)"/>'+
          '<rect class="ml-do" x="880" y="664" width="22" height="12" rx="2" transform="rotate(-35 891 670)"/><rect class="ml-xanh" x="1040" y="676" width="22" height="12" rx="2" transform="rotate(15 1051 682)"/>'+
        '</g>'+
        '<path class="ml-duoi" d="M318 948l-96 6l40 50l-44 52l112-6zM1212 948l96 6l-40 50l44 52l-112-6z"/>'+
        '<path class="ml-bangron" d="M300 930c160 26 300 34 466 34s306-8 466-34v124c-160 26-300 34-466 34s-306-8-466-34z"/>'+
        '<path class="ml-vien-vang" d="M318 952c160 24 296 32 448 32s288-8 448-32M318 1066c160 24 296 32 448 32s288-8 448-32"/>'+
        '<text class="ml-chu2" x="766" y="1056" lang="zh">新年快乐</text>'+   /* cô bỏ số năm trên băng rôn 23/11 (năm đã có ở bóng bay) */
        '<g class="ml-mu" transform="translate(0 40) translate(916 160) scale(1.12) translate(-916 -160)">'+
          '<path class="ml-non" d="M836 150L944 -6l52 178c-56-26-110-34-160-22z"/>'+
          '<path class="ml-soc3" d="M872 98c30-6 62-4 98 6M906 50c18-4 38-2 56 4"/>'+
          '<circle class="ml-cham" cx="884" cy="132" r="10"/><circle class="ml-cham" cx="952" cy="118" r="9"/><circle class="ml-cham" cx="930" cy="72" r="8"/><circle class="ml-cham" cx="946" cy="30" r="6"/>'+
          '<path class="ml-vien-vang" d="M826 154c48-18 112-14 176 20"/>'+
          '<circle class="ml-vang2" cx="944" cy="-8" r="26"/><path class="ml-tua3" d="M930 -30l-8-14M944 -34v-16M958 -30l8-14"/>'+
        '</g>'},

      /* Kiểu 2 — Đếm ngược: bảng lật số trên thân hộp (năm cũ lật sang năm mới), đồng hồ báo thức sắp điểm 12 giờ reo trên nắp, sao lấp lánh */
      2:{tuyet:16,giay:1,nho:NON_NHO,
        tren:
        SAO(220,120,46,"vang",0)+SAO(330,250,26,"vang",-.7)+SAO(1300,200,38,"vang",-1.3)+SAO(1440,700,30,"vang",-.4)+SAO(110,760,32,"vang",-1)+
        BANG_LAT()+
        '<text class="ml-chu3 ml-nho3" x="766" y="1112" lang="zh">元旦快乐</text>'+
        /* đồng hồ báo thức */
        '<g class="ml-nap"><g transform="translate(1107 704) scale(1.24) translate(-1131 -704)"><g class="ml-dongho">'+
          '<path class="ml-reo" d="M1040 520c-14 10-22 24-24 40M1022 500c-22 16-34 38-36 62M1222 520c14 10 22 24 24 40M1240 500c22 16 34 38 36 62"/>'+
          '<path class="ml-chan" d="M1080 676l-22 30M1182 676l22 30"/>'+
          '<path class="ml-chuongdh" d="M1052 560c-6-40 30-66 62-56zM1210 560c6-40-30-66-62-56z"/>'+
          '<circle class="ml-matdh" cx="1131" cy="610" r="82"/>'+
          '<path class="ml-vach" d="M1131 540v14M1131 666v14M1061 610h14M1187 610h14"/>'+
          '<path class="ml-kim" d="M1131 610v-52M1131 610l-10-58"/><circle class="ml-tamdh" cx="1131" cy="610" r="9"/>'+
        '</g></g></g>'},

      /* Kiểu 3 — Bóng bay số: 4 bóng bay giấy bạc ghép thành năm mới bay quanh bong bóng 哈喽 (thay 4 bong bóng chữ nhỏ), dây buộc về nắp */
      3:{tuyet:16,giay:1,an_pop:1,
        nho:'<path class="ml-daybay" d="M60 66c-8 10 6 18-2 30"/><ellipse class="ml-bongtron ml-do" cx="60" cy="36" rx="24" ry="30"/><path class="ml-nut" d="M54 66h12l-6-6z"/>',
        duoi:'',
        tren:
        NM_BONG+
        '<text class="ml-chu3 ml-to3" x="766" y="1060" lang="zh">新年快乐</text>'},

      /* Kiểu 4 — Bật nắp: nắp hộp bật mở theo nhịp, giấy màu + sao bung ra từ trong hộp, chữ 新年好 + năm in trên thân hộp */
      4:{tuyet:10,giay:1,bung:1,nho:NON_NHO,
        tren:
        BUNG()+
        '<text class="ml-chu3 ml-to4" x="766" y="990" lang="zh">新年好!</text>'+
        '<text class="ml-so4" x="766" y="1118">'+NAM+'</text>'}
    },
    "giang-sinh":{
      /* Kiểu 1 — Hộp quà: nơ + ruy băng xanh, thẻ 圣诞快乐, nhành thông, mũ Noel trên bong bóng */
      1:{tuyet:14,nho:MU_NHO,tren:
        '<g class="ml-nap">'+TUYET_NAP+
          '<path class="ml-bang" d="M728 652l84 4l2 220l-88-4z"/>'+
          '<g class="ml-no" transform="translate(776 668) scale(1.35) translate(-776 -668)">'+
            '<path class="ml-bang" d="M772 668c-60-80-170-96-178-40c-8 50 90 66 172 50z"/>'+
            '<path class="ml-bang" d="M780 668c50-86 166-118 182-62c14 50-84 72-174 70z"/>'+
            '<path class="ml-bong" d="M640 630c20-14 70-4 112 30M916 612c-22-14-74 6-118 46"/>'+
            '<path class="ml-bang" d="M760 676c-24 40-48 78-84 104l26 18c30-30 54-66 72-108z"/>'+
            '<path class="ml-bang" d="M788 676c20 44 40 80 74 110l-28 16c-28-30-46-70-60-112z"/>'+
            '<ellipse class="ml-bang" cx="776" cy="672" rx="34" ry="28"/>'+
          '</g>'+
        '</g>'+
        '<path class="ml-bang" d="M726 872l88 4l-4 282l-88-2z"/>'+
        '<g class="ml-the">'+
          '<path class="ml-day" d="M820 800c40 30 80 60 110 104"/>'+
          '<path class="ml-giay" d="M900 908l120-24l34 150l-120 26z"/>'+
          '<circle class="ml-lo" cx="934" cy="912" r="9"/>'+
          '<text class="ml-chu" x="978" y="990" transform="rotate(-11 978 990)" lang="zh">圣诞</text>'+
          '<text class="ml-chu" x="986" y="1034" transform="rotate(-11 986 1034)" lang="zh">快乐</text>'+
        '</g>'+
        '<g>'+
          '<path class="ml-thong" d="M262 900c40 10 70 40 86 80M300 914l-24-34M318 934l-36-14M334 956l-12-40M346 976l-40-6"/>'+
          '<path class="ml-ruoi" d="M300 1010c-30-30-6-54 20-44c10-28 44-20 40 10c26 10 16 46-16 40c-10 22-40 20-44-6z"/>'+
          '<circle class="ml-qua" cx="354" cy="1000" r="15"/><circle class="ml-qua" cx="378" cy="984" r="13"/><circle class="ml-qua" cx="376" cy="1012" r="12"/>'+
        '</g>'+
        '<g class="ml-mu" transform="translate(-70 -6) rotate(10 1040 150)">'+
          '<path class="ml-do" d="M930 190c10-90 70-160 150-170c50-6 96 30 120 80c-30-20-60-24-80-8c-20 18-10 60 0 100z"/>'+
          '<path class="ml-vien" d="M908 196c50-22 170-30 222-6c12 6 12 38 0 44c-56-18-160-14-220 8c-12-8-14-38-2-46z"/>'+
          '<circle class="ml-vien" cx="1206" cy="108" r="34"/>'+
        '</g>'},

      /* Kiểu 2 — Đèn nháy: vòng hoa lá thông ôm bong bóng, nơ đỏ, dây đèn 4 màu nhấp nháy trước hộp */
      2:{tuyet:10,nho:MU_NHO,
        tren:
        '<g class="ml-nap">'+TUYET_NAP+'</g>'+vongHoa()+
        '<g transform="translate(1086 470) rotate(-24)">'+
          '<path class="ml-do" d="M0 0c-40-50-110-56-112-14c-2 36 64 34 112 14z"/>'+
          '<path class="ml-do" d="M0 0c40-50 110-56 112-14c2 36-64 34-112 14z"/>'+
          '<path class="ml-do" d="M-6 6c-14 40-34 70-58 92l24 14c22-26 38-60 46-100zM6 6c10 42 26 72 50 96l-26 12c-18-28-28-62-36-104z"/>'+
          '<ellipse class="ml-do" cx="0" cy="2" rx="24" ry="20"/>'+
        '</g>'+
        dayDen()},

      /* Kiểu 3 — Hộp tuần lộc: sừng 2 màu + tai trên nắp (lớp giữa: ngọn sừng khuất sau bong bóng), mặt cười chớp mắt, mũi đỏ phát sáng, khăn len sọc + chuông vàng */
      3:{tuyet:10,
        nho:'<path class="ml-sung-v" d="M38 66C34 48 28 38 20 24M33 48c7-6 11-13 11-22M27 38c-7-2-13-5-17-12M70 66c4-18 10-28 18-42M75 48c-7-6-11-13-11-22M81 38c7-2 13-5 17-12"/>'+
             '<path class="ml-sung" d="M38 66C34 48 28 38 20 24M33 48c7-6 11-13 11-22M27 38c-7-2-13-5-17-12M70 66c4-18 10-28 18-42M75 48c-7-6-11-13-11-22M81 38c7-2 13-5 17-12"/>',
        giua:
        '<g class="ml-nap">'+
          TAI+
          /* sừng: nét viền đậm + nét màu gỗ */
          SUNG()+
        '</g>',
        tren:
        '<defs><radialGradient id="ml-mui-g" cx=".38" cy=".34" r=".7"><stop offset="0" stop-color="#ff8a7a"/><stop offset=".55" stop-color="#e8343c"/><stop offset="1" stop-color="#b3212a"/></radialGradient></defs>'+

        /* mặt */
        '<ellipse class="ml-ma" cx="584" cy="1046" rx="40" ry="21"/><ellipse class="ml-ma" cx="948" cy="1046" rx="40" ry="21"/>'+
        '<g class="ml-chop"><ellipse class="ml-mat" cx="636" cy="976" rx="25" ry="36"/><ellipse class="ml-mat" cx="894" cy="976" rx="25" ry="36"/>'+
          '<circle class="ml-sao" cx="645" cy="962" r="10"/><circle class="ml-sao" cx="903" cy="962" r="10"/><circle class="ml-sao" cx="628" cy="992" r="5"/><circle class="ml-sao" cx="886" cy="992" r="5"/></g>'+
        '<path class="ml-may" d="M606 934l-12-16M636 926v-18M666 934l12-16M864 934l-12-16M894 926v-18M924 934l12-16"/>'+
        '<path class="ml-mieng" d="M714 1074q52 40 104 0"/><path class="ml-luoi" d="M748 1090q18 22 36 0z"/>'+
        '<circle class="ml-mui" cx="766" cy="1024" r="48"/><ellipse class="ml-sao" cx="748" cy="1006" rx="15" ry="10" transform="rotate(-24 748 1006)"/>'+
        /* khăn len sọc trắng + xanh, 2 đuôi có tua */
        '<path class="ml-khan" d="M262 860c200 30 420 34 560 30c180-6 330-14 440-34l6 66c-120 22-272 28-448 32c-150 4-360 0-558-28z"/>'+
        '<path class="ml-soc" d="M268 884c200 28 420 32 560 28c178-6 326-14 432-32"/>'+
        '<path class="ml-soc2" d="M266 904c200 28 420 32 562 28c178-6 326-14 434-32"/>'+
        '<path class="ml-khan" d="M1178 880c4 66 22 138 52 212l-58 24c-28-76-42-152-46-232z"/>'+
        '<path class="ml-khan" d="M1128 884c-6 72-2 150 16 232l62-10c-14-78-16-152-14-224z"/>'+
        '<path class="ml-soc" d="M1134 950l60-6M1138 1010l62-8"/><path class="ml-soc2" d="M1136 970l60-6M1140 1030l62-8"/>'+
        '<path class="ml-tua" d="M1150 1124l-4 34M1168 1122l0 36M1186 1118l4 36M1204 1114l6 34"/>'+
        /* chuông vàng */
        '<g class="ml-chuong"><path class="ml-day" d="M436 900v28"/><circle class="ml-vang2" cx="436" cy="962" r="36"/>'+
          '<path class="ml-ranh" d="M408 960h56M436 970v22"/><circle class="ml-sao" cx="422" cy="946" r="7"/></g>'},

      /* Kiểu 4 — Người tuyết: tuyết ôm đỉnh bong bóng, tuyết dày + nhũ băng trên nắp, bông tuyết vẽ tay, người tuyết mũ len vẫy tay */
      4:{tuyet:22,
        nho:'<path class="ml-tuyet" d="M4 46c8-18 30-14 42-20c14-8 32-6 42 4c8 8 12 16 4 20c-14 2-26-2-40 0c-16 2-30 6-42 2c-8-2-8-4-6-6z"/>'+
            '<path class="ml-bt" d="M14 50c14 2 30-2 44-2s26 2 34 0"/>',
        tren:
        capTuyet(778,362,380,230)+
        '<g class="ml-nap">'+
          '<path class="ml-tuyet" d="M340 676c30-50 100-40 150-50c56-12 100 0 160-8c60-8 110 6 170 4c70-2 120 18 180 22c60 4 110 26 150 40c22 8 24 30 6 36c-40 0-60 30-90 10c-30-20-60 10-100 0c-40-8-60 24-96 6c-36-18-60 8-110 0c-40-6-70 26-110 4c-36-20-70 6-116 0c-40-6-60 18-100 0c-30-14-60-8-80-20c-18-12-20-30-14-44z"/>'+
          '<path class="ml-bt" d="M370 700c40 10 80 4 120 2c60-4 120 6 180 2c70-4 140 8 210 8c80 0 160 16 240 26"/>'+
          '<path class="ml-bang2" d="M418 714l12 44l12-42M512 716l10 64l12-62M610 718l10 34l10-32M720 718l12 76l12-74M842 720l10 46l10-44M948 724l12 66l12-62M1064 730l10 38l10-34M1170 736l12 58l12-52"/>'+
          '<path class="ml-sang2" d="M432 724v18M526 728v32M734 730v38M962 736v32M1184 748v26"/>'+
        '</g>'+
        /* bông tuyết vẽ tay */
        BONG(150,840,46)+BONG(1290,770,34)+BONG(220,110,30)+
        /* nền tuyết 2 lớp */
        '<path class="ml-tuyet2" d="M90 1262c90-44 220-40 340-34c160 6 300-22 460-12c150 8 290-10 420 6c70 8 120 14 160 34c12 8 6 40-10 40H100c-22 0-28-24-10-34z"/>'+
        '<path class="ml-tuyet" d="M140 1276c80-30 200-26 320-22c160 6 300-16 460-8c150 8 280-6 400 6c50 6 90 12 120 24c10 6 4 22-8 22H150c-18 0-24-16-10-22z"/>'+
        /* người tuyết */
        '<g class="ml-nguoi" transform="translate(1384 1282) scale(.84) translate(-1384 -1282)">'+
          '<path class="ml-tay" d="M1306 1060l-84-40M1252 1034l-20-30M1258 1036l-28 6"/>'+
          '<g class="ml-vay"><path class="ml-tay" d="M1460 1050l30-76M1480 1000l20 2"/><ellipse class="ml-gang" cx="1496" cy="962" rx="22" ry="26" transform="rotate(14 1496 962)"/></g>'+
          '<circle class="ml-tuyet" cx="1384" cy="1170" r="110"/><path class="ml-bong2" d="M1440 1078c40 30 58 80 46 128c-8 34-34 58-64 70c40-34 52-128 18-198z"/>'+
          '<circle class="ml-tuyet" cx="1384" cy="976" r="82"/><path class="ml-bong2" d="M1426 906c30 24 44 60 36 96c-6 26-24 44-46 52c30-30 34-104 10-148z"/>'+
          '<circle class="ml-than" cx="1384" cy="1110" r="11"/><circle class="ml-than" cx="1384" cy="1154" r="11"/><circle class="ml-than" cx="1384" cy="1198" r="11"/>'+
          '<ellipse class="ml-than" cx="1356" cy="958" rx="10" ry="13"/><ellipse class="ml-than" cx="1410" cy="958" rx="10" ry="13"/>'+
          '<circle class="ml-sao" cx="1360" cy="953" r="4"/><circle class="ml-sao" cx="1414" cy="953" r="4"/>'+
          '<ellipse class="ml-ma" cx="1340" cy="990" rx="16" ry="9"/><ellipse class="ml-ma" cx="1430" cy="990" rx="16" ry="9"/>'+
          '<path class="ml-cu" d="M1382 972c26 4 56 12 80 22c-26 6-56 8-80 6z"/><path class="ml-cu2" d="M1404 978l-2 16M1426 984l-2 12"/>'+
          '<circle class="ml-than" cx="1360" cy="1016" r="5"/><circle class="ml-than" cx="1372" cy="1025" r="5"/><circle class="ml-than" cx="1386" cy="1028" r="5"/><circle class="ml-than" cx="1400" cy="1025" r="5"/><circle class="ml-than" cx="1412" cy="1016" r="5"/>'+
          /* khăn xanh sọc trắng */
          '<path class="ml-khan-x" d="M1306 1046c44 24 116 24 158-2l10 36c-50 28-128 28-176 0z"/>'+
          '<path class="ml-khan-x" d="M1424 1070c12 40 16 74 8 106l-44-6c6-28 4-60-6-92z"/>'+
          '<path class="ml-soc" d="M1430 1104l-40 4M1434 1140l-42 2"/><path class="ml-tua2" d="M1394 1172l-4 22M1408 1174v24M1422 1176l4 22"/>'+
          /* mũ len đỏ sọc trắng */
          '<path class="ml-do" d="M1310 930c-6-66 36-104 74-104s82 34 76 104c-44-16-106-16-150 0z"/>'+
          '<path class="ml-soc" d="M1326 880c36-12 82-12 118 0M1318 906c42-12 96-12 136 0"/>'+
          '<path class="ml-vien" d="M1300 926c44-20 124-20 170 0l-4 34c-46-18-114-18-162 0z"/>'+
          '<circle class="ml-vien" cx="1386" cy="822" r="26"/>'+
        '</g>'}
    }
  }[mua.ten];
  if(!VE)return;
  /* Kiểu 5 — ghép 3 + 4: hộp tuần lộc (sừng, tai, mặt, khăn, chuông) đứng giữa trời tuyết (tuyết ôm bong bóng, tuyết nắp, nhũ băng, bông tuyết, người tuyết) */
  /* sừng kiểu 5 vẽ lọt khe giữa bong bóng 哈喽 và 2 bong bóng nhỏ (非常好 / 打开书) nên nằm lớp trên, không bị che */
  var SUNG5='<path class="CLS" d="M470 672C462 630 452 600 440 560c-6-20-10-36-12-54M456 618c22-18 38-34 44-58M444 574c14-14 24-28 26-46M436 548c-12-8-22-18-26-30"/>'+
            '<path class="CLS" d="M1112 694c8-44 22-78 38-118c8-20 16-40 20-64M1124 640c-24-18-38-36-44-62M1140 600c-20-16-30-34-32-56M1158 560c18-8 32-20 38-36"/>';
  if(mua.ten==="giang-sinh")VE[5]={tuyet:18,nho:VE[3].nho,
    tren:VE[4].tren+'<g class="ml-nap">'+TAI+SUNG5.replace(/CLS/g,"ml-sung-v")+SUNG5.replace(/CLS/g,"ml-sung")+'</g>'+VE[3].tren};   /* tai + sừng nằm trên lớp tuyết nắp */
  /* Tết Dương lịch kiểu 5 — cô chọn 23/11: kiểu 1 (nón tiệc, băng rôn, kim tuyến, giấy màu) + bóng bay số của kiểu 3;
     pháo hoa lùi xuống lớp dưới làm nền trời, nhường chỗ cho bóng bay (4 bong bóng chữ nhỏ tạm ẩn như kiểu 3) */
  if(mua.ten==="nam-moi")VE[5]={tuyet:22,giay:1,an_pop:1,nho:NON_NHO,
    duoi:PHAO(330,120,124,"vang",0)+PHAO(1180,290,104,"lam",-1.1)+PHAO(620,40,78,"tim",-2.1),
    tren:NM_BONG+VE[1].tren.replace(NM_PHAO,"")};
  var kieu=VE[qk]?+qk:mua.kieu;VE=VE[kieu];
  document.documentElement.classList.add("mua-"+mua.ten,"ml-k"+kieu);
  if(VE.an_pop)document.documentElement.classList.add("ml-an-pop");   /* kiểu bóng bay số thay chỗ 4 bong bóng chữ nhỏ */
  if(VE.bung)document.documentElement.classList.add("ml-bung");


  /* biểu tượng tab trình duyệt (favicon) theo mùa: vẽ logo nhỏ + món trang trí (VE.nho) lên canvas rồi thay link rel=icon.
     Biểu tượng app trên màn hình điện thoại (apple-touch-icon, manifest) giữ nguyên vì máy chỉ lưu 1 lần lúc cài.
     Toạ độ trong khung 64: logo [x,y,cỡ], món [x,y,cỡ,góc xoay] */
  var FAV={"giang-sinh":{logo:[6,14,52],phu:[12,-6,40,0]},"nam-moi":{logo:[2,12,52],phu:[22,-1,31,14]}}[mua.ten];
  var FAV_CSS='path,circle,ellipse{stroke:#8b3538;stroke-width:6;stroke-linejoin:round;stroke-linecap:round}'+
    '.ml-non{fill:#4f8ff0}.ml-cham{fill:#fff;stroke:none}.ml-vien-vang{fill:none;stroke:#f6c945;stroke-width:9}.ml-vang2{fill:#f6c945;stroke:#9a6a10}'+
    '.ml-sung-v{fill:none;stroke:#5a3418;stroke-width:16}.ml-sung{fill:none;stroke:#b9804a;stroke-width:9}'+
    '.ml-do{fill:#e0464b}.ml-vien,.ml-tuyet{fill:#fff}.ml-bt{fill:none;stroke:#bcd3ec}.ml-daybay{fill:none;stroke:#c9ced8}.ml-bongtron{fill:#e0464b}.ml-nut{fill:#8b3538;stroke:none}';
  function doiIcon(){
    if(!FAV||!VE.nho)return;
    var K=2,c=document.createElement("canvas");c.width=c.height=64*K;var g=c.getContext("2d"),logo=new Image(),phu=new Image(),xong=0;
    function ve(){
      if(++xong<2)return;
      var L=FAV.logo,a=FAV.phu;
      g.drawImage(logo,L[0]*K,L[1]*K,L[2]*K,L[2]*K);
      g.save();g.translate((a[0]+a[2]/2)*K,(a[1]+a[2]/2)*K);g.rotate(a[3]*Math.PI/180);g.drawImage(phu,-a[2]/2*K,-a[2]/2*K,a[2]*K,a[2]*K);g.restore();
      try{var u=c.toDataURL("image/png");document.querySelectorAll('link[rel="icon"]').forEach(function(l){l.href=u;l.type="image/png"})}catch(e){}
    }
    logo.onload=phu.onload=ve;
    logo.src="/img/logo-hallo-128.png";
    phu.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><style>'+FAV_CSS+'</style>'+VE.nho+'</svg>');
  }

  var NS="http://www.w3.org/2000/svg";
  function svg(box,cls,html){
    var s=document.createElementNS(NS,"svg");
    s.setAttribute("viewBox",box);s.setAttribute("class","ml-lop "+cls);s.setAttribute("aria-hidden","true");s.setAttribute("focusable","false");
    s.innerHTML=html;return s;
  }
  function gan(){
    var art=document.querySelector(".hero .art");
    if(art&&!art.querySelector(".ml-lop")){
      if(VE.duoi)art.insertBefore(svg("0 0 1508 1298","ml-art",VE.duoi),art.firstChild);
      /* lớp giữa: trên nắp hộp, dưới bong bóng 哈喽 + 4 bong bóng nhỏ */
      var lid=art.querySelector(".lid");if(VE.giua&&lid)lid.parentNode.insertBefore(svg("0 0 1508 1298","ml-art",VE.giua),lid.nextSibling);
      art.appendChild(svg("0 0 1508 1298","ml-art",VE.tren));
      var roi=document.createElement("span");roi.className="ml-roi"+(VE.giay?" ml-giaymau":"");roi.setAttribute("aria-hidden","true");
      for(var k=0;k<VE.tuyet;k++){var b=document.createElement("i"),r=function(a,z){return a+((k*7919+a*31)%97)/97*(z-a)};b.style.cssText="--x:"+(k*(98/VE.tuyet)+1).toFixed(1)+"%;--s:"+r(5,11).toFixed(1)+"px;--t:"+r(7,13).toFixed(1)+"s;--dl:"+(-k*1.3).toFixed(1)+"s;--dx:"+r(-18,18).toFixed(0)+"px;--c:"+["#e0464b","#f6c945","#4f8ff0","#3cbf74","#9b6ce0"][k%5];roi.appendChild(b)}
      art.appendChild(roi);
    }
    document.querySelectorAll("img.logo").forEach(function(im){
      if(im.parentNode.querySelector(".ml-nho"))return;
      var vo=document.createElement("span");vo.className="ml-vo";
      im.parentNode.insertBefore(vo,im);vo.appendChild(im);
      vo.appendChild(svg("0 0 100 100","ml-nho",VE.nho));
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",gan);else gan();
  doiIcon();
})();
