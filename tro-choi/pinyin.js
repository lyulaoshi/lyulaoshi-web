// Tách pinyin thành âm tiết (thanh mẫu + vận mẫu + thanh điệu). Dùng chung cho Săn thanh điệu và Đoán từ 汉兜.
(function(){
const INI=['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s'];
const FIN=['a','o','e','ai','ei','ao','ou','an','en','ang','eng','ong','i','ia','ie','iao','iu','ian','in','iang','ing','iong','u','ua','uo','uai','ui','uan','un','uang','ü','üe','ue','üan','ün'];
const SYL=new Set();INI.forEach(i=>FIN.forEach(f=>SYL.add(i+f)));
['a','o','e','er','ai','ei','ao','ou','an','en','ang','eng'].forEach(f=>SYL.add(f));
['a','o','e','ai','ao','ou','an','in','ang','ing','ong','i','u','ue','uan','un'].forEach(f=>SYL.add('y'+f));
['a','o','ai','ei','an','en','ang','eng','u'].forEach(f=>SYL.add('w'+f));
['ng','n','m','hm','hng'].forEach(x=>SYL.add(x));
const MARK={'̄':1,'́':2,'̌':3,'̀':4};
function parse(py,n){ // → [{bare,tone}] hoặc null; dấu cách, ' và - là ranh giới âm tiết
  const ch=[];for(const c of py.toLowerCase().replace(/[\s'\-]+/g,'|')){if(c==='|'){ch.push(['|',0]);continue}
    const d=c.normalize('NFD');let t=0,b=d[0];for(const m of d.slice(1)){if(MARK[m])t=MARK[m];if(m==='\u0308')b='ü'}ch.push([b,t])}
  const s=ch.map(x=>x[0]).join(''),memo={};
  function go(i,k){if(s[i]==='|')return go(i+1,k);if(i===s.length)return k===0?[]:null;if(k===0)return null;
    const key=i+','+k;if(key in memo)return memo[key];
    for(let L=Math.min(6,s.length-i);L>=1;L--){const w=s.slice(i,i+L);if(SYL.has(w)){const r=go(i+L,k-1);if(r)return memo[key]=[[i,L],...r]}}
    return memo[key]=null}
  const seg=go(0,n);if(!seg)return null;
  return seg.map(([i,L])=>({bare:s.slice(i,i+L),tone:Math.max(0,...ch.slice(i,i+L).map(x=>x[1]))}));
}
const V={a:'āáǎà',e:'ēéěè',i:'īíǐì',o:'ōóǒò',u:'ūúǔù','ü':'ǖǘǚǜ'};
function mark(b,t){if(!t)return b;let i=b.indexOf('a');if(i<0)i=b.indexOf('e');if(i<0&&b.includes('ou'))i=b.indexOf('o');
  if(i<0){for(let k=b.length-1;k>=0;k--)if(V[b[k]]){i=k;break}}if(i<0)return b;return b.slice(0,i)+V[b[i]][t-1]+b.slice(i+1)}
const show=ss=>ss.map(x=>mark(x.bare,x.tone)).join('');
// tách thanh mẫu / vận mẫu (y, w tính là thanh mẫu cho dễ nhìn)
const INI2=['zh','ch','sh','b','p','m','f','d','t','n','l','g','k','h','j','q','x','r','z','c','s','y','w'];
function split(bare){for(const i of INI2)if(bare.startsWith(i)&&bare.length>i.length)return[i,bare.slice(i.length)];return['',bare]}
window.PY={parse,mark,show,split};
})();
