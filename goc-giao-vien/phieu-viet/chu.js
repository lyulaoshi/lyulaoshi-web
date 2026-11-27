// Thông tin RIÊNG TỪNG CHỮ cho Phiếu tập viết: tách pinyin của từ ra từng chữ, tra nghĩa chữ.
// Dữ liệu: chu-nghia.js (do tools/chu_nghia.py sinh — đừng sửa tay).
window.CHU=(function(){
const boDau=s=>s.normalize('NFD').replace(/[̀́̄̌]/g,'').normalize('NFC');
/* âm tiết: thanh mẫu + vận mẫu, hoặc âm không thanh mẫu (chỉ bắt đầu bằng a, o, e — i/u/ü đứng đầu đã viết thành y, w) */
const AM=/^(?:(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])(?:iang|iong|uang|ueng|ang|eng|ing|ong|iao|ian|uai|uan|üan|ai|ei|ao|ou|an|en|er|ia|ie|iu|in|ua|uo|ui|un|üe|ün|ue|a|o|e|i|u|ü)|ang|eng|ai|ei|ao|ou|an|en|er|a|o|e|r|ng)$/;
const HAN=/\p{Script=Han}/u;
/* (从 "老师","lǎoshī") → ['lǎo','shī'] ; không tách được thì trả null */
function tach(z,p){
  const chu=[...z].filter(c=>HAN.test(c));if(!chu.length||!p||/[A-Za-z0-9]/.test(z))return null;
  /* "jué / jiào": lấy âm đầu */
  const kh=[...p.split('/')[0].normalize('NFC').toLowerCase()],chuoi=[],dau=new Set([0]);   // dau: vị trí bắt đầu một cụm (sau dấu cách, dấu ')
  let moi=false;kh.forEach(k=>{if(/\p{L}/u.test(k)){if(moi)dau.add(chuoi.length);moi=false;chuoi.push(k)}else if(!/\p{M}/u.test(k))moi=true});
  const tron=chuoi.map(boDau).join('');if(tron.length!==chuoi.length)return null;
  function do_(i,n,chat){
    if(n===chu.length)return i===tron.length?[]:null;
    for(let l=Math.min(6,tron.length-i);l>0;l--){const a=tron.slice(i,i+l);
      if(!AM.test(a))continue;
      if(a==='r'&&chu[n]!=='儿')continue;
      /* viết đúng chính tả: âm tiết bắt đầu bằng a, o, e đứng giữa cụm phải có dấu ' */
      if(chat&&!dau.has(i)&&/^[aoe]/.test(a))continue;
      let cat=false;for(let k=i+1;k<i+l;k++)if(dau.has(k))cat=true;if(cat)continue;
      const r=do_(i+l,n+1,chat);if(r)return[chuoi.slice(i,i+l).join(''),...r]}
    return null}
  return do_(0,0,true)||do_(0,0,false)}
let BANG=null;
function bang(){if(BANG)return BANG;BANG=new Map();(window.CHU_NGHIA||'').split('\n').forEach(d=>{const [c,p,v]=d.split('|');if(!v)return;if(!BANG.has(c))BANG.set(c,[]);BANG.get(c).push([p,v])});return BANG}
/* chữ c trong ngữ cảnh âm py → {p, vi}; không có nghĩa đúng âm đó thì vi rỗng */
function tra(c,py){
  const ds=bang().get(c)||[];
  if(!py){const d=ds[0];return{p:d?d[0]:'',vi:d?d[1]:''}}
  const k=s=>s.split('/')[0].toLowerCase().replace(/[^\p{L}]/gu,''),a=k(py);
  let d=ds.find(x=>k(x[0])===a);
  /* âm nhẹ (妈妈 māma), biến điệu 一 不, 儿化: so bỏ thanh điệu */
  if(!d&&(boDau(a)===a||'一不'.includes(c)))d=ds.find(x=>boDau(k(x[0]))===boDau(a));
  if(!d&&c==='儿'&&a==='r')d=ds.find(x=>boDau(k(x[0]))==='er');
  return{p:py.split('/')[0].trim(),vi:d?d[1]:''}}
/* thông tin chữ c nằm trong từ x = {z,p} */
function cua(c,x){const i=x?[...x.z].filter(k=>HAN.test(k)).indexOf(c):-1,t=i>=0?tach(x.z,x.p):null;
  return tra(c,t?t[i]:(x&&x.z===c?x.p:''))}
return{tach,tra,cua};
})();
