// 文化盒 · Tiến độ dạo phố các thành phố. localStorage 'vh-tp' = {mã ga: {id điểm: 1}}.
// Dùng chung cho sảnh ga (thu-thanh-pho), trang điểm (thu-diem), trang trải nghiệm (thu-trai-nghiem) và game tuyến tàu (index.html).
// Sao của ga thành phố: đi 3 điểm = 1 sao (nhận dấu, mở ga sau), 6 điểm = 2 sao, đi hết = 3 sao + dấu vàng.
window.VHTD=(function(){
  const K='vh-tp';
  const doc=()=>{
    let x={};try{x=JSON.parse(localStorage.getItem(K))||{}}catch(e){}
    // dữ liệu bản thử cũ 'vh-thu-diem' chỉ có Bắc Kinh: chuyển sang 'vh-tp'
    try{const cu=JSON.parse(localStorage.getItem('vh-thu-diem'));if(cu){x.bj=Object.assign(x.bj||{},cu);localStorage.setItem(K,JSON.stringify(x));localStorage.removeItem('vh-thu-diem')}}catch(e){}
    return x;
  };
  const thanhPho=()=>{const c=(new URLSearchParams(location.search).get('c')||'bj').replace(/[^a-z]/g,'');return window.VH_TP&&VH_TP[c]?c:'bj'};
  const lay=c=>doc()[c]||{};
  const ghi=(c,id)=>{const x=doc();x[c]=x[c]||{};x[c][id]=1;try{localStorage.setItem(K,JSON.stringify(x))}catch(e){}};
  const dem=c=>{const T=window.VH_TP&&VH_TP[c],X=lay(c);return T?T.diem.filter(d=>X[d.id]).length:0};
  const sao=c=>{const T=window.VH_TP&&VH_TP[c];if(!T)return 0;const n=dem(c),N=T.diem.length;return n>=N?3:n>=6?2:n>=3?1:0};
  const link=(c,d)=>{const T=VH_TP[c];return T.tq&&T.tq[d.id]?'thu-diem.html?c='+c+'&d='+d.id:T.tn&&T.tn[d.id]?'thu-trai-nghiem.html?c='+c+'&d='+d.id:''};
  // dấu thành phố: đỏ khi đủ 3 điểm, vàng (金章) khi đi hết
  const dau=(zh,vang)=>{const m=vang?'#C99A1E':'#C8423B';return '<svg class="dau-c" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="45" fill="'+(vang?'#FBF1CF':'none')+'" stroke="'+m+'" stroke-width="5"/><circle cx="50" cy="50" r="36" fill="none" stroke="'+m+'" stroke-width="1.8" stroke-dasharray="3 3"/><text x="50" y="'+(zh.length>2?57:59)+'" text-anchor="middle" font-family="STKaiti,KaiTi,serif" font-size="'+(zh.length>2?20:26)+'" fill="'+m+'">'+zh+'</text><text x="50" y="80" text-anchor="middle" font-family="STKaiti,KaiTi,serif" font-size="10" fill="'+m+'">'+(vang?'金章':'已到达')+'</text><path d="M30 26h40" stroke="'+m+'" stroke-width="2"/></svg>'};
  return {thanhPho,lay,ghi,dem,sao,link,dau};
})();
