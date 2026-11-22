/* Logo theo mùa lễ hội (22/11/2026). Logo gốc giữ nguyên; trong mùa lễ, script này phủ thêm lớp trang trí vẽ tay
   (SVG, không emoji) lên hình hộp 哈喽 ở đầu trang chủ + món nhỏ lên logo thanh đầu trang.
   Thêm mùa mới: thêm 1 mục vào MUA (tu/den = "tháng-ngày", tính cả 2 đầu; kieu = kiểu đang dùng) + hình trong VE + CSS trong mua-le.css.
   Xem thử ngoài mùa: ?mua=giang-sinh (kiểu đang chọn), ?mua=giang-sinh&kieu=3 (xem kiểu khác); tắt hẳn: ?mua=khong. */
(function(){
  var MUA=[
    {ten:"giang-sinh",tu:"12-01",den:"12-26",kieu:1}
  ];
  var q=(location.search.match(/[?&]mua=([\w-]+)/)||[])[1];
  var qk=(location.search.match(/[?&]kieu=(\d+)/)||[])[1];
  if(q==="khong")return;
  var d=new Date(),md=("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);
  var mua=null;
  for(var i=0;i<MUA.length;i++){
    if(q?MUA[i].ten===q:(md>=MUA[i].tu&&md<=MUA[i].den)){mua=MUA[i];break}
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

  var VE={
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

      /* Kiểu 3 — Hộp tuần lộc: sừng trên nắp, mặt cười + mũi đỏ phát sáng, khăn len quàng cổ */
      3:{tuyet:10,
        nho:'<path class="ml-sung" d="M40 64C36 46 28 36 20 22M34 46c6-6 10-12 10-20M28 36c-6-2-12-4-16-10M70 66c4-18 10-28 18-42M74 48c-6-6-10-12-10-20M80 38c6-2 12-4 16-10"/>',
        duoi:'',
        tren:
        '<g class="ml-nap">'+
          '<path class="ml-sung" d="M520 668C510 620 490 588 466 540M506 616c24-18 42-34 50-66M490 588c-18-8-36-18-46-44"/>'+
          '<path class="ml-sung" d="M1104 690c10-48 30-80 56-126M1118 636c-24-18-42-34-50-66M1136 604c18-8 36-18 46-44"/>'+
        '</g>'+
        /* mặt */
        '<ellipse class="ml-ma" cx="590" cy="1040" rx="38" ry="20"/><ellipse class="ml-ma" cx="944" cy="1040" rx="38" ry="20"/>'+
        '<ellipse class="ml-mat" cx="640" cy="975" rx="16" ry="24"/><ellipse class="ml-mat" cx="890" cy="975" rx="16" ry="24"/>'+
        '<circle class="ml-sao" cx="646" cy="966" r="6"/><circle class="ml-sao" cx="896" cy="966" r="6"/>'+
        '<path class="ml-mieng" d="M708 1070q58 46 116 0"/>'+
        '<circle class="ml-mui" cx="766" cy="1022" r="46"/><ellipse class="ml-sao" cx="750" cy="1006" rx="14" ry="9"/>'+
        /* khăn len */
        '<path class="ml-khan" d="M262 862c200 30 420 34 560 30c180-6 330-14 438-34l6 62c-120 22-270 28-446 32c-150 4-360 0-556-28z"/>'+
        '<path class="ml-soc" d="M300 884c190 26 400 30 530 26c170-6 320-14 420-32"/>'+
        '<path class="ml-khan" d="M1150 880c6 70 30 150 70 230l-62 28c-34-80-58-160-64-244z"/>'+
        '<path class="ml-soc" d="M1162 940l-48 16M1176 1000l-50 18M1194 1062l-52 20"/>'+
        '<path class="ml-tua" d="M1160 1140l-8 36M1182 1130l-4 38M1204 1120l2 38M1224 1110l8 34"/>'},

      /* Kiểu 4 — Người tuyết: tuyết dày trên nắp + đỉnh bong bóng, nhũ băng, người tuyết vẫy tay đứng cạnh hộp */
      4:{tuyet:22,
        nho:'<path class="ml-tuyet" d="M6 44c10-16 30-10 40-16c14-8 30-6 40 2c10 8 16 18 8 22c-16 2-30-2-46 0c-16 2-30 4-40 0c-6-2-6-4-2-8z"/>',
        duoi:'',
        tren:
        '<path class="ml-tuyet" d="M498 132c30-46 100-74 180-80c90-6 170 12 230 44c40 22 70 50 84 74c6 14-6 22-20 16c-30-14-60-6-90-14c-36-10-60 10-96 4c-40-6-70-20-110-10c-40 10-80-6-120 4c-30 8-56 2-62-14c-4-8 0-16 4-24z"/>'+
        '<g class="ml-nap">'+
          '<path class="ml-tuyet" d="M340 676c30-50 100-40 150-50c56-12 100 0 160-8c60-8 110 6 170 4c70-2 120 18 180 22c60 4 110 26 150 40c22 8 24 30 6 36c-40 0-60 30-90 10c-30-20-60 10-100 0c-40-8-60 24-96 6c-36-18-60 8-110 0c-40-6-70 26-110 4c-36-20-70 6-116 0c-40-6-60 18-100 0c-30-14-60-8-80-20c-18-12-20-30-14-44z"/>'+
          '<path class="ml-bang2" d="M420 712l14 60l14-58M560 714l12 74l14-74M700 716l12 50l12-50M840 718l14 84l14-82M980 724l12 56l12-54M1120 730l14 70l14-66"/>'+
        '</g>'+
        /* nền tuyết */
        '<path class="ml-tuyet" d="M120 1250c80-40 200-30 320-26c160 4 300-20 460-10c150 8 280-10 400 4c60 6 120 10 170 34c14 8 6 40-10 40H130c-20 0-26-30-10-42z"/>'+
        /* người tuyết */
        '<g class="ml-nguoi">'+
          '<path class="ml-tay" d="M1316 1050l-82-46M1262 1020l-14-30"/><path class="ml-tay ml-vay" d="M1466 1040l40-60M1492 1002l14 4"/>'+
          '<circle class="ml-tuyet" cx="1390" cy="1168" r="104"/>'+
          '<circle class="ml-tuyet" cx="1390" cy="980" r="76"/>'+
          '<circle class="ml-than" cx="1390" cy="1120" r="10"/><circle class="ml-than" cx="1390" cy="1170" r="10"/>'+
          '<circle class="ml-than" cx="1364" cy="964" r="9"/><circle class="ml-than" cx="1414" cy="964" r="9"/>'+
          '<path class="ml-cu" d="M1390 984l66 16l-64 12z"/>'+
          '<path class="ml-mieng2" d="M1362 1018q28 18 56 0"/>'+
          '<path class="ml-khan" d="M1316 1040c40 22 110 22 150-2l8 34c-46 26-122 26-166 0z"/>'+
          '<path class="ml-khan" d="M1430 1066c10 40 14 70 8 100l-40-6c4-26 2-56-6-86z"/>'+
          '<path class="ml-mulen" d="M1322 940c-4-60 40-96 70-96s76 30 70 96c-40-14-100-14-140 0z"/>'+
          '<path class="ml-vien" d="M1312 936c40-18 116-18 160 0l-4 30c-44-16-108-16-152 0z"/>'+
          '<circle class="ml-vien" cx="1392" cy="840" r="22"/>'+
        '</g>'}
    }
  }[mua.ten];
  if(!VE)return;
  var kieu=VE[qk]?+qk:mua.kieu;VE=VE[kieu];
  document.documentElement.classList.add("mua-"+mua.ten,"ml-k"+kieu);

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
      art.appendChild(svg("0 0 1508 1298","ml-art",VE.tren));
      var roi=document.createElement("span");roi.className="ml-roi";roi.setAttribute("aria-hidden","true");
      for(var k=0;k<VE.tuyet;k++){var b=document.createElement("i"),r=function(a,z){return a+((k*7919+a*31)%97)/97*(z-a)};b.style.cssText="--x:"+(k*(98/VE.tuyet)+1).toFixed(1)+"%;--s:"+r(5,11).toFixed(1)+"px;--t:"+r(7,13).toFixed(1)+"s;--dl:"+(-k*1.3).toFixed(1)+"s;--dx:"+r(-18,18).toFixed(0)+"px";roi.appendChild(b)}
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
})();
