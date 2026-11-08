// 文化盒 · Bưu thiếp 3D nhiều lớp (BẢN MẪU: 6 ga tuyến Hoa Bắc).
// Mỗi cảnh = 4 lớp, khung 160×100: [0 trời, 1 núi xa, 2 công trình, 3 cận cảnh].
// index.html dịch các lớp lệch nhau theo chuột (lớp càng gần càng trượt nhiều) → cảm giác chiều sâu.
// Lớp 2–3 vẽ tràn ra ngoài khung ~12 đơn vị để khi trượt không lộ mép. Màu chuyển dùng chung ở VH_3D_DEFS.
(function(){
const n=v=>Math.round(v*10)/10;
// đèn lồng đỏ treo từ y=top
const den=(x,y,r,top)=>'<path d="M'+x+' '+top+'V'+n(y-r*1.15)+'" stroke="#5A2A1A" stroke-width="1"/><ellipse cx="'+x+'" cy="'+y+'" rx="'+r+'" ry="'+n(r*1.15)+'" fill="url(#k-den)"/><rect x="'+n(x-r*.5)+'" y="'+n(y-r*1.15-1.5)+'" width="'+r+'" height="2.4" fill="#D9A441"/><rect x="'+n(x-r*.5)+'" y="'+n(y+r*1.15-1)+'" width="'+r+'" height="2.4" fill="#D9A441"/><path d="M'+x+' '+n(y+r*1.15+1.4)+'v'+n(r*.9)+'" stroke="#D9A441" stroke-width="1.2"/><ellipse cx="'+x+'" cy="'+y+'" rx="'+n(r*1.9)+'" ry="'+n(r*2)+'" fill="#FFB86B" opacity=".18"/>';
// tháp nhiều tầng (bóng mờ ở xa)
const thap=(x,y,t,w,h,c)=>{let s='';for(let i=0;i<t;i++){const ww=w*(1-i*.08),yy=y-i*h;s+='<rect x="'+n(x-ww*.32)+'" y="'+n(yy-h*.75)+'" width="'+n(ww*.64)+'" height="'+n(h*.75)+'" fill="'+c+'"/><path d="M'+n(x-ww/2)+' '+n(yy-h*.7)+'h'+n(ww)+'l-'+n(ww*.12)+' -'+n(h*.32)+'h-'+n(ww*.76)+'z" fill="'+c+'"/>'}return s+'<path d="M'+x+' '+n(y-t*h-h*.1)+'v-'+n(h*.9)+'" stroke="'+c+'" stroke-width=".8"/>'};
// lều Mông Cổ
const leu=(x,y,s)=>'<g transform="translate('+x+' '+y+') scale('+s+')"><ellipse cx="0" cy="1" rx="17" ry="2.6" fill="#2F5E2A" opacity=".35"/><path d="M-14 0v-11h28v11z" fill="#F6F2E8"/><path d="M4 0v-11h10v11z" fill="#D9D2C2"/><path d="M-14 -7h28" stroke="#3E7FB8" stroke-width="1.6"/><path d="M-16 -11q16-11 32 0z" fill="#FBF8F1"/><path d="M2 -16.6q8 2 14 5.6h-12z" fill="#DDD6C6"/><path d="M-16 -11q16-3 32 0" stroke="#3E7FB8" stroke-width="1.3" fill="none"/><ellipse cx="0" cy="-16.8" rx="3.4" ry="1.2" fill="#C8423B"/><path d="M-3.5 0v-7h7v7z" fill="#C8423B"/><path d="M-3.5 0v-7h7v7z" fill="none" stroke="#E0A800" stroke-width=".7"/></g>';
// ngựa (nhìn ngang, hướng phải)
const ngua=(x,y,s,c)=>'<g transform="translate('+x+' '+y+') scale('+s+')" fill="'+c+'" stroke="'+c+'"><ellipse cx="0" cy="0" rx="7" ry="3.2" stroke="none"/><path d="M4.5 -1.5L9 -8l2.6 1L8 0z" stroke="none"/><path d="M9 -8l4.6 2.4-.8 1.4-4.4-1.4z" stroke="none"/><path d="M-5 2v6M-3 2.4v5.6M4 2v6M5.6 1.6v6.4" stroke-width="1.1" fill="none"/><path d="M-7 -1q-3 2-2 7" stroke-width="1.1" fill="none"/></g>';
const cuu=(x,y)=>'<ellipse cx="'+x+'" cy="'+y+'" rx="2.6" ry="1.7" fill="#FAF8F2"/><circle cx="'+n(x+2.6)+'" cy="'+n(y-.4)+'" r=".9" fill="#3A3A3A"/>';
const may=(x,y,s)=>'<g transform="translate('+x+' '+y+') scale('+s+')"><ellipse cx="0" cy="2" rx="22" ry="5" fill="#DCE7F2"/><circle cx="-10" cy="-2" r="8" fill="#fff"/><circle cx="2" cy="-6" r="10" fill="#fff"/><circle cx="13" cy="-1" r="7" fill="#fff"/><ellipse cx="0" cy="1.5" rx="21" ry="3.6" fill="#fff"/><ellipse cx="2" cy="4" rx="18" ry="1.6" fill="#C9D8E8"/></g>';
// vòng đu quay Thiên Tân
const vong=()=>{let s='<g transform="translate(92 41)"><circle r="31" fill="none" stroke="#3F5468" stroke-width="2"/><circle r="26.5" fill="none" stroke="#3F5468" stroke-width=".7"/>';for(let i=0;i<16;i++){const a=i*Math.PI/8,c=Math.cos(a),si=Math.sin(a);s+='<path d="M0 0L'+n(31*c)+' '+n(31*si)+'" stroke="#3F5468" stroke-width=".45"/><rect x="'+n(33*c-1.8)+'" y="'+n(33*si-1.5)+'" width="3.6" height="3" rx=".8" fill="#F3EEE4" stroke="#3F5468" stroke-width=".4"/><circle cx="'+n(29*c)+'" cy="'+n(29*si)+'" r=".7" fill="#FFE9A8"/>'}return s+'<circle r="4" fill="#3F5468"/><circle r="1.5" fill="#FFE9A8"/></g>'};
const tuong=(x0,x1,y,w,g)=>{let s='';for(let x=x0;x<x1;x+=g)s+='<rect x="'+x+'" y="'+(y-3.4)+'" width="'+w+'" height="3.6" fill="url(#k-gach)"/>';return s};

window.VH_3D_DEFS='<linearGradient id="k-ngay" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FA8DC"/><stop offset=".62" stop-color="#C9E0F0"/><stop offset="1" stop-color="#F6E5C8"/></linearGradient>'+
 '<linearGradient id="k-chieu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5E6FA3"/><stop offset=".45" stop-color="#E59A7A"/><stop offset="1" stop-color="#FAD7A4"/></linearGradient>'+
 '<linearGradient id="k-sang" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9BCDE6"/><stop offset="1" stop-color="#F2F1DE"/></linearGradient>'+
 '<linearGradient id="k-tho" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3F8FD6"/><stop offset=".7" stop-color="#A9D2F0"/><stop offset="1" stop-color="#E4F1F8"/></linearGradient>'+
 '<radialGradient id="k-mt"><stop offset="0" stop-color="#FFF6D6"/><stop offset=".25" stop-color="#FFE9A8" stop-opacity=".8"/><stop offset="1" stop-color="#FFE9A8" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="k-xa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FA6BC"/><stop offset="1" stop-color="#CBD9E3"/></linearGradient>'+
 '<linearGradient id="k-ngoi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7D36A"/><stop offset=".6" stop-color="#E2A632"/><stop offset="1" stop-color="#A86E12"/></linearGradient>'+
 '<linearGradient id="k-ngoix" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6F7B80"/><stop offset="1" stop-color="#3C4549"/></linearGradient>'+
 '<linearGradient id="k-do" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C8423B"/><stop offset=".7" stop-color="#B0352F"/><stop offset="1" stop-color="#7E2522"/></linearGradient>'+
 '<linearGradient id="k-da" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E4D8BE"/><stop offset="1" stop-color="#B9A781"/></linearGradient>'+
 '<linearGradient id="k-nuoc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A7D3E2"/><stop offset="1" stop-color="#4F8FAE"/></linearGradient>'+
 '<linearGradient id="k-nuocc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C79A9E"/><stop offset="1" stop-color="#4C5C80"/></linearGradient>'+
 '<linearGradient id="k-co" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A5CF6E"/><stop offset="1" stop-color="#5E9A45"/></linearGradient>'+
 '<linearGradient id="k-gach" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9C8E80"/><stop offset="1" stop-color="#6E6258"/></linearGradient>'+
 '<linearGradient id="k-tuong" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A69585"/><stop offset="1" stop-color="#76665A"/></linearGradient>'+
 '<pattern id="k-gachp" width="8" height="4" patternUnits="userSpaceOnUse"><path d="M0 4h8M0 2h8M2 0v2M6 2v2" stroke="#4F443C" stroke-width=".35" opacity=".55"/></pattern>'+
 '<linearGradient id="k-vach" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D8B68E"/><stop offset="1" stop-color="#9A7656"/></linearGradient>'+
 '<radialGradient id="k-den" cx=".4" cy=".35"><stop offset="0" stop-color="#FF7A55"/><stop offset="1" stop-color="#B42820"/></radialGradient>';

window.VH_3D={
// 北京 · Thái Hoà điện, Tử Cấm Thành, chiều nắng
bj:['<rect x="-14" y="-14" width="188" height="128" fill="url(#k-ngay)"/><circle cx="128" cy="20" r="30" fill="url(#k-mt)"/>'+may(36,16,.55)+may(92,24,.35),
 '<path d="M-14 60Q6 46 24 52T62 47T100 50T134 44T174 52V74H-14Z" fill="url(#k-xa)"/><path d="M-14 64Q20 56 50 60T110 58T174 60V76H-14Z" fill="#B9C9D6" opacity=".75"/><g fill="#8FA5B8"><path d="M126 45h12l-2.5-3h-7z"/><rect x="128.5" y="45" width="7" height="3"/><path d="M127.5 42h9l-2-2.4h-5z"/></g>',
 '<path d="M22 80h116v7H22z" fill="#D2C7AF"/><path d="M22 78h116v2H22z" fill="#F6F1E6"/><path d="M33 73h94v5H33z" fill="#DCD2BD"/><path d="M33 71.5h94v1.5H33z" fill="#F8F4EB"/><path d="M22 78h116M33 71.5h94" stroke="#fff" stroke-width=".6" stroke-dasharray="1 1.4"/>'+
 '<path d="M71 71.5h18l4 15.5H67z" fill="#ECE4D3"/><path d="M70 75h20M69 79h22M68 83h24" stroke="#C8BDA6" stroke-width=".5"/><path d="M77.5 71.5h5l1.6 15.5h-8.2z" fill="#D8CDB6"/>'+
 '<rect x="42" y="55" width="76" height="16.5" fill="url(#k-do)"/><g fill="#B7463C"><rect x="65" y="60" width="6" height="11.5"/><rect x="73" y="60" width="6" height="11.5"/><rect x="81" y="60" width="6" height="11.5"/><rect x="89" y="60" width="6" height="11.5"/></g><path d="M65 63h30M65 66h30M65 69h30" stroke="#E3B04B" stroke-width=".35"/>'+
 '<path d="M48 58v13.5M56 58v13.5M64 58v13.5M72 58v13.5M80 58v13.5M88 58v13.5M96 58v13.5M104 58v13.5M112 58v13.5" stroke="#7A2420" stroke-width="1"/><rect x="42" y="55" width="76" height="3.4" fill="#3B1210" opacity=".5"/><rect x="42" y="53.6" width="76" height="2" fill="#2F6E78"/>'+
 '<path d="M28 56q10 0 15-6.5h74q5 6.5 15 6.5z" fill="url(#k-ngoi)"/><path d="M28 56h104" stroke="#8C5A10" stroke-width="1"/><path d="M117 49.5q5 6.5 15 6.5h-12z" fill="#8C5A10" opacity=".35"/>'+
 '<rect x="50" y="44" width="60" height="6" fill="#9E2F29"/><rect x="50" y="44" width="60" height="1.6" fill="#2F6E78"/>'+
 '<path d="M37 45q10 0 17-10h52q7 10 17 10z" fill="url(#k-ngoi)"/><path d="M106 35q7 10 17 10h-15z" fill="#8C5A10" opacity=".4"/><path d="M37 45h86" stroke="#8C5A10" stroke-width="1"/><path d="M60 35.5l-2 9M66 35.5l-1 9M72 35.5v9M78 35.5v9M84 35.5v9M90 35.5v9M96 35.5l1 9M102 35.5l2 9" stroke="#C78A22" stroke-width=".35"/>'+
 '<path d="M53 35h54" stroke="#A86F12" stroke-width="1.6"/><path d="M53.5 35l-2.5-4.5 4 1.5zM106.5 35l2.5-4.5-4 1.5z" fill="#A86F12"/>',
 '<path d="M-14 86h188v28H-14z" fill="url(#k-da)"/><path d="M80 86L-4 114M80 86L36 114M80 86L80 114M80 86L124 114M80 86L164 114M-14 93h188M-14 102h188" stroke="#B3A584" stroke-width=".5"/>'+
 '<path d="M-14 58h28v56H-14z" fill="url(#k-do)"/><path d="M-16 54.5h34l-3 5H-16z" fill="url(#k-ngoi)"/><path d="M14 59.5v54" stroke="#6E1F1B" stroke-width="2"/><path d="M14 59.5h4v54h-4z" fill="#6E1F1B" opacity=".35"/>'+
 '<g transform="translate(138 84)"><ellipse cx="2" cy="9" rx="14" ry="2.2" fill="#000" opacity=".15"/><path d="M-10 -6h20q0 13-10 14.5q-10-1.5-10-14.5z" fill="#8A5A22"/><path d="M2 -6h8q0 13-10 14.5q6-4 2-14.5z" fill="#5E3C16" opacity=".5"/><path d="M-10.5 -6h21" stroke="#C2873A" stroke-width="1.6"/><path d="M-5 -3q-2 5 0 10" stroke="#C99A4E" stroke-width="1.1" fill="none"/></g>'+
 '<path d="M176 4Q156 9 143 24" stroke="#4A3A2A" stroke-width="2.6" fill="none" stroke-linecap="round"/><g fill="#3E6B45"><ellipse cx="150" cy="17" rx="10" ry="3.6" transform="rotate(-20 150 17)"/><ellipse cx="163" cy="9" rx="11" ry="3.6"/><ellipse cx="141" cy="26" rx="8" ry="3" transform="rotate(-30 141 26)"/></g><g fill="#2B4C31"><ellipse cx="152" cy="19.5" rx="7" ry="1.8" transform="rotate(-20 152 19.5)"/><ellipse cx="165" cy="11.5" rx="8" ry="1.8"/></g>'],

// 天津 · Thiên Tân Chi Nhãn trên sông Hải Hà, hoàng hôn
tj:['<rect x="-14" y="-14" width="188" height="128" fill="url(#k-chieu)"/><circle cx="32" cy="60" r="36" fill="url(#k-mt)"/><g fill="#fff" opacity=".35"><ellipse cx="120" cy="14" rx="20" ry="2.4"/><ellipse cx="58" cy="22" rx="15" ry="2"/></g>',
 '<g fill="#A97F99" opacity=".8"><rect x="-14" y="52" width="16" height="26"/><rect x="4" y="44" width="10" height="34"/><rect x="16" y="56" width="12" height="22"/><rect x="116" y="40" width="9" height="38"/><rect x="127" y="50" width="12" height="28"/><rect x="141" y="32" width="8" height="46"/><rect x="151" y="50" width="22" height="28"/></g><path d="M145 32v-6" stroke="#A97F99" stroke-width=".8"/><g fill="#8C6283" opacity=".85"><rect x="32" y="60" width="16" height="18"/><rect x="134" y="58" width="10" height="20"/></g><g fill="#FFE2A6" opacity=".9"><rect x="118" y="45" width="1.4" height="1.4"/><rect x="121" y="52" width="1.4" height="1.4"/><rect x="143" y="38" width="1.4" height="1.4"/><rect x="143" y="48" width="1.4" height="1.4"/><rect x="7" y="50" width="1.4" height="1.4"/><rect x="10" y="58" width="1.4" height="1.4"/><rect x="155" y="56" width="1.4" height="1.4"/></g>',
 '<path d="M-14 76h188v38H-14z" fill="url(#k-nuocc)"/><ellipse cx="92" cy="98" rx="24" ry="6" fill="none" stroke="#FFE2A6" stroke-width=".7" opacity=".45" stroke-dasharray="2 2"/><path d="M22 86h22M26 90h14M29 94h9" stroke="#FFE2A6" stroke-width="1" opacity=".7"/>'+
 vong()+'<path d="M92 41L79 72M92 41L105 72" stroke="#33465A" stroke-width="2.2"/><path d="M92 41L85 72M92 41L99 72" stroke="#33465A" stroke-width="1"/>'+
 '<path d="M-14 71h188v4H-14z" fill="#5C6B7C"/><path d="M-14 75h188v2.4H-14z" fill="#3F4A57"/><path d="M6 77.4h6v7H6zM48 77.4h6v7h-6zM106 77.4h6v7h-6zM148 77.4h6v7h-6z" fill="#3F4A57"/><g fill="#FFE9A8"><circle cx="20" cy="68.8" r="1"/><circle cx="40" cy="68.8" r="1"/><circle cx="120" cy="68.8" r="1"/><circle cx="140" cy="68.8" r="1"/></g><path d="M20 71v-2M40 71v-2M120 71v-2M140 71v-2" stroke="#3F4A57" stroke-width=".6"/>',
 '<path d="M-14 99h80" stroke="#2B2E45" stroke-width="1.6"/><path d="M-6 99v15M8 99v15M22 99v15M36 99v15M50 99v15M64 99v15" stroke="#2B2E45" stroke-width="1.5"/><path d="M-6 105h70" stroke="#2B2E45" stroke-width=".8"/>'+
 '<path d="M6 114V66" stroke="#2B2E45" stroke-width="1.8"/><path d="M6 66q5-4 10 0" stroke="#2B2E45" stroke-width="1.5" fill="none"/><circle cx="16" cy="68" r="7" fill="#FFE9A8" opacity=".3"/><circle cx="16" cy="68" r="2.2" fill="#FFF1C7"/>'],

// 承德 · Tị thử sơn trang buổi sáng: hồ, đình Kim Sơn, núi Bổng Chuỳ
cde:['<rect x="-14" y="-14" width="188" height="128" fill="url(#k-sang)"/><circle cx="40" cy="22" r="24" fill="url(#k-mt)"/>'+may(120,18,.4),
 '<path d="M-14 54Q8 30 26 44T56 36T88 46T120 30T150 42T174 38V70H-14Z" fill="url(#k-xa)"/><path d="M21 42q-2-9 1-15q3-3 5 1q1 6-1 14z" fill="#7F94A4"/>'+thap(130,33,7,7,2.6,'#7F94A4')+'<path d="M-14 62Q20 48 50 56T100 52T140 58T174 54V74H-14Z" fill="#94B494"/><path d="M-14 66Q30 58 70 63T174 62V76H-14Z" fill="#7FA582"/>',
 '<path d="M-14 66h188v48H-14z" fill="url(#k-nuoc)"/><g stroke="#fff" stroke-width=".6" opacity=".55"><path d="M20 74h14M58 80h20M130 86h18M40 92h12"/></g>'+
 '<path d="M96 70q6-8 16-8t18 3q8 1 12 5z" fill="#7C7A6C"/><path d="M118 62q10 1 12 3q8 1 12 5h-14z" fill="#5E5C50"/><path d="M96 70q22 4 46 0q-23 6-46 0z" fill="#4D5E54" opacity=".4"/>'+
 '<path d="M108 63v-6M126 63v-6M112 63v-6M122 63v-6" stroke="#9A3A2E" stroke-width="1"/><path d="M104 57q4-1 7-3h20q3 2 7 3z" fill="url(#k-ngoix)"/><path d="M111 54h20v-4h-20z" fill="#9A3A2E"/><path d="M113 51v-4M129 51v-4" stroke="#9A3A2E" stroke-width=".8"/><path d="M108 50q3-1 6-3h14q3 2 6 3z" fill="url(#k-ngoix)"/><path d="M114 47h14v-3h-14z" fill="#9A3A2E"/><path d="M111 44q3-1 5-4h10q2 3 5 4z" fill="url(#k-ngoix)"/><path d="M121 40v-3" stroke="#3C4549" stroke-width="1"/>'+
 '<path d="M108 71q13 6 26 0" stroke="#5E5C50" stroke-width="3" opacity=".25" fill="none"/><path d="M111 72h22l-2 6h-18z" fill="#4F5B5E" opacity=".18"/>'+
 '<path d="M-14 72q20-6 40-2v10h-40z" fill="#6B8A4E"/><path d="M14 74V40" stroke="#5B4430" stroke-width="2.6"/><g stroke="#7FB25A" stroke-width="1.2" fill="none" stroke-linecap="round"><path d="M14 40q-10 12-8 32M14 40q-4 16-2 34M14 40q4 16 3 32M14 40q12 10 12 30M14 40q-16 6-18 26M14 40q18 2 22 22"/></g><g stroke="#5E9640" stroke-width=".9" fill="none"><path d="M14 42q-6 14-5 30M14 42q8 12 8 28"/></g>',
 '<g transform="translate(130 96)"><ellipse rx="22" ry="7" fill="#4E8A3A"/><path d="M0 0L22 -1L18 4z" fill="#3E7330"/><path d="M0 0L-18 -3M0 0L-6 6M0 0L12 5M0 0L4 -7" stroke="#6CA650" stroke-width=".7"/></g><g transform="translate(26 100)"><ellipse rx="18" ry="6" fill="#5A9642"/><path d="M0 0L-4 -6M0 0L14 -2M0 0L-14 2M0 0L6 5" stroke="#7BB65C" stroke-width=".7"/></g>'+
 '<path d="M146 98q2-14 0-20" stroke="#4E7A34" stroke-width="1.4" fill="none"/><g transform="translate(146 76)"><path d="M0 0q-7-4-6-12q4 2 6 6q2-4 6-6q1 8-6 12z" fill="#F29AB2"/><path d="M0 0q-3-6 0-13q3 7 0 13z" fill="#FBC7D5"/></g><path d="M44 100q1-10-1-14" stroke="#4E7A34" stroke-width="1.2" fill="none"/><ellipse cx="43" cy="84" rx="3" ry="4.5" fill="#F29AB2"/>'],

// 平遥 · Tường thành cổ, cổng thành, phố cổ, hiệu Nhật Thăng Xương
py:['<rect x="-14" y="-14" width="188" height="128" fill="url(#k-ngay)"/><circle cx="34" cy="18" r="26" fill="url(#k-mt)"/>'+may(120,16,.45),
 '<g fill="#A89C92" opacity=".8"><path d="M-14 52l10-6 10 6zM2 52l12-7 12 7zM118 52l12-7 12 7zM138 52l12-6 12 6zM156 52l10-6 10 6z"/><rect x="-14" y="52" width="188" height="6"/></g><g fill="#968A80"><rect x="22" y="38" width="10" height="14"/><path d="M18 40h18l-3-3H21z"/><rect x="24" y="31" width="6" height="6"/><path d="M20 32h14l-3-3h-8z"/><path d="M27 29v-3" stroke="#968A80"/></g>',
 '<path d="M-14 52h188v40H-14z" fill="url(#k-tuong)"/><path d="M-14 52h188v40H-14z" fill="url(#k-gachp)"/>'+tuong(-14,174,52,5,8)+'<path d="M-14 88h188v4H-14z" fill="#5E5248"/>'+
 '<path d="M68 92V76q12-12 24 0v16z" fill="#E1D3BE"/><path d="M70.5 92V77q9.5-9.5 19 0v15z" fill="#2A1A14"/>'+
 '<rect x="48" y="44" width="64" height="8" fill="#8C7E70"/><path d="M48 44h64" stroke="#B3A595" stroke-width="1"/>'+
 '<rect x="54" y="33" width="52" height="11" fill="#7E3A26"/><path d="M58 34v10M64 34v10M70 34v10M76 34v10M84 34v10M90 34v10M96 34v10M102 34v10" stroke="#5A2516" stroke-width=".9"/><rect x="54" y="33" width="52" height="2.4" fill="#2F2620" opacity=".55"/>'+
 '<path d="M42 34q8 0 12-6h52q4 6 12 6z" fill="url(#k-ngoix)"/><path d="M42 34h76" stroke="#2C3336" stroke-width="1"/>'+
 '<rect x="60" y="21" width="40" height="7" fill="#7E3A26"/><path d="M66 22v6M72 22v6M80 22v6M88 22v6M94 22v6" stroke="#5A2516" stroke-width=".8"/>'+
 '<path d="M50 22q8 0 12-7h36q4 7 12 7z" fill="url(#k-ngoix)"/><path d="M50 22h60" stroke="#2C3336" stroke-width="1"/><path d="M61 15h38" stroke="#2C3336" stroke-width="1.4"/><path d="M61.5 15l-2-3.5 3 1zM98.5 15l2-3.5-3 1z" fill="#2C3336"/>',
 '<path d="M-14 92h188v22H-14z" fill="#A08E79"/><g fill="#8A7864"><ellipse cx="6" cy="98" rx="5" ry="1.6"/><ellipse cx="22" cy="104" rx="6" ry="1.8"/><ellipse cx="44" cy="97" rx="5" ry="1.5"/><ellipse cx="66" cy="106" rx="6" ry="1.8"/><ellipse cx="96" cy="99" rx="5" ry="1.6"/><ellipse cx="118" cy="106" rx="6" ry="1.8"/><ellipse cx="140" cy="98" rx="5" ry="1.5"/><ellipse cx="160" cy="104" rx="6" ry="1.8"/></g>'+
 '<path d="M-16 -2h40l-6 8H-16z" fill="url(#k-ngoix)"/>'+den(4,18,4.5,6)+den(18,16,4,6)+
 '<rect x="148" y="-4" width="12" height="52" fill="#2B2E45"/><rect x="149.5" y="2" width="9" height="40" fill="none" stroke="#D9A441" stroke-width=".6"/><text x="154" y="15" text-anchor="middle" font-family="STKaiti,KaiTi,serif" font-size="9" fill="#E8C46A">日</text><text x="154" y="26" text-anchor="middle" font-family="STKaiti,KaiTi,serif" font-size="9" fill="#E8C46A">升</text><text x="154" y="37" text-anchor="middle" font-family="STKaiti,KaiTi,serif" font-size="9" fill="#E8C46A">昌</text>'],

// 大同 · Đại Phật hang 20 Vân Cương, vách sa thạch
dt:['<rect x="-14" y="-14" width="188" height="128" fill="url(#k-tho)"/><circle cx="140" cy="14" r="22" fill="url(#k-mt)"/>',
 '<path d="M-14 40Q20 30 50 36T110 32T174 36V60H-14Z" fill="#C9B79A" opacity=".75"/>',
 '<path d="M-14 22q30-6 60-2t60-4 68 6V114H-14z" fill="url(#k-vach)"/><g stroke="#8C6A4C" stroke-width=".6" opacity=".5" fill="none"><path d="M6 24q2 30-2 70M30 22q-3 36 2 74M128 20q3 40-1 74M150 24q-2 30 3 70"/></g>'+
 '<g fill="#5E4330"><rect x="2" y="34" width="9" height="11" rx="4"/><rect x="16" y="30" width="7" height="9" rx="3"/><rect x="26" y="44" width="8" height="10" rx="3.5"/><rect x="128" y="32" width="9" height="11" rx="4"/><rect x="142" y="40" width="7" height="9" rx="3"/><rect x="152" y="30" width="8" height="10" rx="3.5"/><rect x="134" y="54" width="8" height="10" rx="3.5"/><rect x="8" y="56" width="8" height="10" rx="3.5"/></g>'+
 '<g fill="#B08C68"><circle cx="6.5" cy="39" r="1.6"/><circle cx="132.5" cy="37" r="1.6"/><circle cx="30" cy="48" r="1.4"/><circle cx="12" cy="60" r="1.4"/></g>'+
 '<path d="M50 96V48q0-24 30-24t30 24v48z" fill="#7A5A40"/><path d="M80 24q30 0 30 24v48h-8V50q0-20-22-26z" fill="#5E4330" opacity=".55"/>'+
 '<g fill="none" stroke="#A88866" stroke-width=".9"><circle cx="80" cy="47" r="12"/><circle cx="80" cy="47" r="16" stroke-dasharray="2 1.6"/><path d="M58 92q0-34 22-56q22 22 22 56" opacity=".6"/></g>'+
 '<path d="M59 94q0-22 8-29q5-4 13-4t13 4q8 7 8 29z" fill="#BE9A74"/><path d="M80 61q8 0 13 4q8 7 8 29H85z" fill="#8F6E50" opacity=".55"/><path d="M65 72q15 8 30 0M63 80q17 8 34 0M62 88q18 7 36 0" stroke="#8C6A4C" stroke-width=".8" fill="none"/>'+
 '<ellipse cx="80" cy="85" rx="10" ry="3.6" fill="#A88563"/><rect x="77" y="57" width="6" height="5" fill="#B08C68"/>'+
 '<ellipse cx="80" cy="50" rx="7" ry="8.5" fill="#C9A47E"/><path d="M80 41.5a7 8.5 0 0 1 0 17z" fill="#8F6E50" opacity=".4"/><ellipse cx="80" cy="41.5" rx="4.2" ry="3" fill="#A88563"/><path d="M73 47v8M87 47v8" stroke="#A38160" stroke-width="2" stroke-linecap="round"/><path d="M76.5 50h2.5M81 50h2.5" stroke="#6A4C35" stroke-width=".6"/><path d="M78.6 55h2.8" stroke="#6A4C35" stroke-width=".5"/>',
 '<path d="M-14 94q40-4 90 0t98 -2V114H-14z" fill="#C2AA84"/><path d="M-14 100q60-3 188 0V114H-14z" fill="#A99170"/>'+
 '<g fill="#2B2E45"><circle cx="34" cy="86" r="1.6"/><path d="M32.4 88h3.2l.6 6h-4.4z"/><circle cx="40" cy="87" r="1.4"/><path d="M38.6 88.8h2.8l.5 5.2h-3.8z" fill="#C8423B"/></g>'+
 '<path d="M162 114V56" stroke="#5B4430" stroke-width="3"/><path d="M162 70q-8-6-14-4M162 62q6-6 12-4" stroke="#5B4430" stroke-width="1.6" fill="none"/><g fill="#5E8C3E"><circle cx="148" cy="62" r="9"/><circle cx="160" cy="52" r="11"/><circle cx="172" cy="60" r="10"/></g><g fill="#4A7330"><circle cx="152" cy="66" r="6"/><circle cx="166" cy="60" r="7"/></g>'],

// 内蒙古 · Thảo nguyên: lều, ngựa, cừu, đống đá thờ 敖包
nmg:['<rect x="-14" y="-14" width="188" height="128" fill="url(#k-tho)"/>'+may(40,22,.8)+may(124,14,.6)+may(150,34,.35),
 '<path d="M-14 58Q20 46 50 53T110 48T174 55V72H-14Z" fill="#8FB8A8"/><path d="M-14 62Q30 54 70 58T174 58V74H-14Z" fill="#82B08C"/>',
 '<path d="M-14 62Q30 52 70 60T140 57T174 60V114H-14Z" fill="url(#k-co)"/><path d="M-14 74q50-8 100-2t88-4" stroke="#C7E08E" stroke-width="1.2" fill="none" opacity=".6"/>'+
 leu(54,68,1)+leu(78,66,.72)+
 cuu(104,72)+cuu(110,74)+cuu(116,71.5)+cuu(108,77)+cuu(120,76)+cuu(98,76)+
 '<g transform="translate(18 64)"><path d="M-9 0q9-9 18 0z" fill="#9A9688"/><path d="M0 -6v-14" stroke="#5B4430" stroke-width="1"/><path d="M0 -20L-14 1M0 -20L14 1M0 -18L-10 2M0 -18L10 2" stroke="#7A7A7A" stroke-width=".3"/><g><path d="M-6 -11l-2 2M-9 -6l-2 2M6 -11l2 2M9 -6l2 2" stroke="#3E7FB8" stroke-width="1.6"/><path d="M-3 -15l-2 2M3 -15l2 2" stroke="#E0A800" stroke-width="1.6"/><path d="M-12 -2l-2 2M12 -2l2 2" stroke="#C8423B" stroke-width="1.6"/></g></g>'+ngua(118,81,1.3,'#7A4A2A')+ngua(136,84,1.45,'#3B2A22'),
 '<path d="M-14 97Q40 91 90 96T174 95V114H-14Z" fill="#5E9A45"/><g stroke="#3F7A30" stroke-width=".8" stroke-linecap="round"><path d="M4 104l-1-5M8 106l1-6M26 103l-1-5M48 106l1-6M70 104l-1-5M96 106l1-6M150 106l-1-5M164 104l1-6"/></g><g fill="#F2D24A"><circle cx="16" cy="102" r="1.2"/><circle cx="60" cy="104" r="1.2"/><circle cx="110" cy="103" r="1.2"/></g><g fill="#B98AD6"><circle cx="36" cy="105" r="1.2"/><circle cx="84" cy="101" r="1.2"/><circle cx="156" cy="106" r="1.2"/></g>']
};
})();
