import f from"node:fs";
const{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
let w,n,e,P;
function S(t){
w=t.indexOf("\n");t=t.replace(/\n/g,"");n=t.length;e=[-w,w,-1,1];
let F=r=>[...t.matchAll(r)].map(m=>m.index),g=F(/[.*+]/g),o=F(/[$*]/g),p=F(/[@+]/g)[0];
let pr=p/w|0,R=[];
for(let a of[[o,0],[g,1]])for(let x of a[0]){let k=(x<pr*w?0:2)+(x%w/7|0);(R[k]=R[k]||[[],[]])[a[1]].push(x);}
R=R.filter(q=>q[0].length);
P=new Int32Array(n);
let B=(W,gs,b,pl)=>{
let ok=x=>x.every((y,i)=>y==gs[i]);
let SB=[b],SP=[pl],MS=[""],M=new Map();
M.set(b+","+pl,0);
let c=new Uint8Array(n),fd=-1,K2;
for(let q=0;q<SB.length&&fd<0&&SB.length<5e5;q++){
let x=SB[q];c.fill(0);x.forEach(y=>c[y]=1);
P.fill(-1);P[SP[q]]=SP[q];
let Y=[SP[q]];
for(let i=0;i<Y.length;i++){let u=Y[i];
for(let d of e){let z=u+d;
if(!W[z]&&!c[z]&&P[z]<0){P[z]=u;Y.push(z);}}}
for(let i=0;i<x.length;i++){let y=x[i];
for(let d of e){let t=y+d,s=y-d;
if(P[s]<0||W[t]||c[t])continue;
let z=x.slice();z[i]=t;z.sort((a,v)=>a-v),K2=z+","+y;
if(M.has(K2))continue;
M.set(K2,SB.length);SB.push(z);SP.push(y);
let m="";for(let u=s;u!=SP[q];u=P[u])m="udlr"[e.indexOf(u-P[u])]+m;
MS.push(MS[q]+m+"UDLR"[e.indexOf(d)]);
if(ok(z)){fd=SB.length-1;break;}}}}
if(fd<0)return null;
return[MS[fd],SP[fd]];};
let m="",pl=p,cur=o.slice();
for(let r2 of R){
let W=new Uint8Array(n);
for(let i=0;i<n;i++)W[i]=t[i]=="#";
for(let x of cur)if(!r2[0].includes(x))W[x]=1;
let z=B(W,r2[1],r2[0],pl);
if(!z)return null;
m+=z[0];pl=z[1];
cur=cur.filter(x=>!r2[0].includes(x)).concat(r2[1]);}
return m;}
for(let i of f.readdirSync(I)){let s=S(f.readFileSync(I+"/"+i+"/level.txt")+"");f.mkdirSync(O+"/"+i);f.writeFileSync(O+"/"+i+"/solution.txt",s||"");}
