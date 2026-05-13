import{c as Ut,a as V,f as Y}from"../chunks/4gcTZzGJ.js";import{h as ui,o as Uc,t as Sg,c as Fc,F as bg,f as wg,U as p,$ as Tg,ap as Ag,a0 as cd,n as Oc,e as Jo,C as Eg,aM as Cg,ay as ud,a as ys,b as Du,aV as Pg,s as Rg,aW as lp,ah as Ig,aX as Dg,aL as ah,aY as Lg,am as hd,aZ as Ng,a_ as Ug,aP as Fg,a$ as Mi,ac as Og,r as cp,p as up,b0 as Bc,q as Bg,b1 as zg,b2 as $g,aJ as kg,m as Vg,d as Gg,l as Hg,b3 as Wg,aQ as hp,Q as Vl,a3 as dp,al as Xg,at as dd,ax as fd,as as pd,A as md,b4 as qg,b5 as Hn,M as Ot,P as Gi,aS as R,b6 as Gl,b7 as Wn,v as fp,aa as Ct,u as Un,w as G,x as Fn,Y as Jt,Z as Kt,aR as Yt,aT as pp,_ as P,b8 as Es,a9 as Yg,y as zc,b9 as gd}from"../chunks/C7F92k6Z.js";import{c as Zg,d as Jg,e as Vs,a as Ii,s as Di}from"../chunks/BPpL76f-.js";import{r as Hl,i as gn,b as Lu,s as mp,p as qt,c as M}from"../chunks/CAPELuUC.js";import{s as Wl,a as Ji,r as vd}from"../chunks/BnhjXkRO.js";import{g as Kg,w as lh,d as gp,r as vp,b as _d}from"../chunks/CfljvR_Z.js";function jt(r,e){return e}function jg(r,e,t){for(var n=[],i=e.length,s,o=e.length,a=0;a<i;a++){let d=e[a];up(d,()=>{if(s){if(s.pending.delete(d),s.done.add(d),s.pending.size===0){var h=r.outrogroups;Nu(r,ah(s.done)),h.delete(s),h.size===0&&(r.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&t!==null;if(l){var c=t,u=c.parentNode;kg(u),u.append(c),r.items.clear()}Nu(r,e,!l)}else s={pending:new Set(e),done:new Set},(r.outrogroups??=new Set).add(s)}function Nu(r,e,t=!0){var n;if(r.pending.size>0){n=new Set;for(const o of r.pending.values())for(const a of o)n.add(r.items.get(a).e)}for(var i=0;i<e.length;i++){var s=e[i];if(n?.has(s)){s.f|=Mi;const o=document.createDocumentFragment();Vg(s,o)}else Gg(e[i],t)}}var xd;function Qt(r,e,t,n,i,s=null){var o=r,a=new Map,l=(e&lp)!==0;if(l){var c=r;o=ui?Uc(Sg(c)):c.appendChild(Fc())}ui&&bg();var u=null,d=Ig(()=>{var S=t();return Dg(S)?S:S==null?[]:ah(S)}),h,f=new Map,m=!0;function _(S){(x.effect.f&Og)===0&&(x.pending.delete(S),x.fallback=u,Qg(x,h,o,e,n),u!==null&&(h.length===0?(u.f&Mi)===0?cp(u):(u.f^=Mi,io(u,null,o)):up(u,()=>{u=null})))}function g(S){x.pending.delete(S)}var v=wg(()=>{h=p(d);var S=h.length;let b=!1;if(ui){var I=Tg(o)===Ag;I!==(S===0)&&(o=cd(),Uc(o),Oc(!1),b=!0)}for(var A=new Set,D=ys,w=Rg(),E=0;E<S;E+=1){ui&&Jo.nodeType===Eg&&Jo.data===Cg&&(o=Jo,b=!0,Oc(!1));var O=h[E],U=n(O,E),H=m?null:a.get(U);H?(H.v&&ud(H.v,O),H.i&&ud(H.i,E),w&&D.unskip_effect(H.e)):(H=e0(a,m?o:xd??=Fc(),O,U,E,i,e,t),m||(H.e.f|=Mi),a.set(U,H)),A.add(U)}if(S===0&&s&&!u&&(m?u=Du(()=>s(o)):(u=Du(()=>s(xd??=Fc())),u.f|=Mi)),S>A.size&&Pg(),ui&&S>0&&Uc(cd()),!m)if(f.set(D,A),w){for(const[ne,K]of a)A.has(ne)||D.skip_effect(K.e);D.oncommit(_),D.ondiscard(g)}else _(D);b&&Oc(!0),p(d)}),x={effect:v,items:a,pending:f,outrogroups:null,fallback:u};m=!1,ui&&(o=Jo)}function Gs(r){for(;r!==null&&(r.f&zg)===0;)r=r.next;return r}function Qg(r,e,t,n,i){var s=(n&$g)!==0,o=e.length,a=r.items,l=Gs(r.effect.first),c,u=null,d,h=[],f=[],m,_,g,v;if(s)for(v=0;v<o;v+=1)m=e[v],_=i(m,v),g=a.get(_).e,(g.f&Mi)===0&&(g.nodes?.a?.measure(),(d??=new Set).add(g));for(v=0;v<o;v+=1){if(m=e[v],_=i(m,v),g=a.get(_).e,r.outrogroups!==null)for(const O of r.outrogroups)O.pending.delete(g),O.done.delete(g);if((g.f&Bc)!==0&&(cp(g),s&&(g.nodes?.a?.unfix(),(d??=new Set).delete(g))),(g.f&Mi)!==0)if(g.f^=Mi,g===l)io(g,null,t);else{var x=u?u.next:l;g===r.effect.last&&(r.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),Ki(r,u,g),Ki(r,g,x),io(g,x,t),u=g,h=[],f=[],l=Gs(u.next);continue}if(g!==l){if(c!==void 0&&c.has(g)){if(h.length<f.length){var S=f[0],b;u=S.prev;var I=h[0],A=h[h.length-1];for(b=0;b<h.length;b+=1)io(h[b],S,t);for(b=0;b<f.length;b+=1)c.delete(f[b]);Ki(r,I.prev,A.next),Ki(r,u,I),Ki(r,A,S),l=S,u=A,v-=1,h=[],f=[]}else c.delete(g),io(g,l,t),Ki(r,g.prev,g.next),Ki(r,g,u===null?r.effect.first:u.next),Ki(r,u,g),u=g;continue}for(h=[],f=[];l!==null&&l!==g;)(c??=new Set).add(l),f.push(l),l=Gs(l.next);if(l===null)continue}(g.f&Mi)===0&&h.push(g),u=g,l=Gs(g.next)}if(r.outrogroups!==null){for(const O of r.outrogroups)O.pending.size===0&&(Nu(r,ah(O.done)),r.outrogroups?.delete(O));r.outrogroups.size===0&&(r.outrogroups=null)}if(l!==null||c!==void 0){var D=[];if(c!==void 0)for(g of c)(g.f&Bc)===0&&D.push(g);for(;l!==null;)(l.f&Bc)===0&&l!==r.fallback&&D.push(l),l=Gs(l.next);var w=D.length;if(w>0){var E=(n&lp)!==0&&o===0?t:null;if(s){for(v=0;v<w;v+=1)D[v].nodes?.a?.measure();for(v=0;v<w;v+=1)D[v].nodes?.a?.fix()}jg(r,D,E)}}s&&Bg(()=>{if(d!==void 0)for(g of d)g.nodes?.a?.apply()})}function e0(r,e,t,n,i,s,o,a){var l=(o&Ng)!==0?(o&Ug)===0?Fg(t,!1,!1):hd(t):null,c=(o&Lg)!==0?hd(i):null;return{v:l,i:c,e:Du(()=>(s(e,l??t,c??i,a),()=>{r.delete(n)}))}}function io(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&Mi)===0?e.nodes.start:t;n!==null;){var o=Hg(n);if(s.before(n),n===i)return;n=o}}function Ki(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}const yd=[...` 	
\r\f \v\uFEFF`];function t0(r,e,t){var n=r==null?"":""+r;if(t){for(var i of Object.keys(t))if(t[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||yd.includes(n[o-1]))&&(a===n.length||yd.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function n0(r,e){return r==null?null:String(r)}function Md(r,e,t,n,i,s){var o=r.__className;if(ui||o!==t||o===void 0){var a=t0(t,n,s);(!ui||a!==r.getAttribute("class"))&&(a==null?r.removeAttribute("class"):r.className=a),r.__className=t}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&r.classList.toggle(l,c)}return s}function Sd(r,e,t,n){var i=r.__style;if(ui||i!==e){var s=n0(e);(!ui||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r.__style=e}return n}function bd(r,e,t=e){var n=new WeakSet;Wg(r,"input",async i=>{var s=i?r.defaultValue:r.value;if(s=$c(r)?kc(s):s,t(s),ys!==null&&n.add(ys),await hp(),s!==(s=e())){var o=r.selectionStart,a=r.selectionEnd,l=r.value.length;if(r.value=s??"",a!==null){var c=r.value.length;o===a&&a===l&&c>l?(r.selectionStart=c,r.selectionEnd=c):(r.selectionStart=o,r.selectionEnd=Math.min(a,c))}}}),(ui&&r.defaultValue!==r.value||Vl(e)==null&&r.value)&&(t($c(r)?kc(r.value):r.value),ys!==null&&n.add(ys)),dp(()=>{var i=e();if(r===document.activeElement){var s=ys;if(n.has(s))return}$c(r)&&i===kc(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function $c(r){var e=r.type;return e==="number"||e==="range"}function kc(r){return r===""?null:+r}function i0(r,e){var t=md,n=fd,i=r();return{subscribe:lh(i,o=>{var a=i!==r(),l,c=fd,u=md;dd(n),pd(t);try{l=qg(()=>{dp(()=>{const d=r();a&&o(d)})})}finally{dd(c),pd(u)}return a=!0,l}).subscribe}}function Cs(r){let e;const t=Zg(i=>{let s=!1;const o=r.subscribe(a=>{e=a,s&&i()});return s=!0,o});function n(){return Xg()?(t(),e):Kg(r)}return"set"in r?{get current(){return n()},set current(i){r.set(i)}}:{get current(){return n()}}}const wd=(r,e)=>{if(r===e)return!0;if(!r||!e)return!1;const t=r.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0},r0=()=>{const r=[],n={items:r,remember:(i,s)=>{for(let a=0;a<r.length;a++){const l=r[a];if(wd(s,l.keys)&&l.promise)return l.promise}const o={promise:i(),keys:s};return r.push(o),o.promise},clear:i=>{for(let s=0;s<r.length;s++){const o=r[s];if(wd(i,o.keys)){r.splice(s,1);return}}}};return Hn("threlte-cache",n),n};const Xl="183",s0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},o0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_p=0,Uu=1,xp=2,a0=3,l0=0,ao=1,lo=2,Ms=3,Wi=0,Ln=1,Jn=2,wi=0,Br=1,Fu=2,Ou=3,Bu=4,yp=5,c0=6,or=100,Mp=101,Sp=102,bp=103,wp=104,Tp=200,Ap=201,Ep=202,Cp=203,Za=204,Ja=205,Pp=206,Rp=207,Ip=208,Dp=209,Lp=210,Np=211,Up=212,Fp=213,Op=214,Ka=0,ja=1,Qa=2,$r=3,el=4,tl=5,nl=6,il=7,ko=0,Bp=1,zp=2,fi=0,ch=1,uh=2,hh=3,dh=4,fh=5,Mo=6,ph=7,zu="attached",$p="detached",ql=300,Ai=301,ur=302,co=303,uo=304,Fs=306,So=1e3,Gn=1001,bo=1002,un=1003,mh=1004,u0=1004,Ss=1005,h0=1005,Zt=1006,ho=1007,d0=1007,Si=1008,f0=1008,kn=1009,gh=1010,vh=1011,Ps=1012,Yl=1013,ii=1014,In=1015,Ei=1016,Zl=1017,Jl=1018,Rs=1020,_h=35902,xh=35899,yh=1021,Mh=1022,Dn=1023,Ci=1026,ar=1027,Kl=1028,Vo=1029,kr=1030,jl=1031,p0=1032,Ql=1033,fo=33776,po=33777,mo=33778,go=33779,rl=35840,sl=35841,ol=35842,al=35843,ll=36196,cl=37492,ul=37496,hl=37488,dl=37489,fl=37490,pl=37491,ml=37808,gl=37809,vl=37810,_l=37811,xl=37812,yl=37813,Ml=37814,Sl=37815,bl=37816,wl=37817,Tl=37818,Al=37819,El=37820,Cl=37821,Pl=36492,Rl=36494,Il=36495,Dl=36283,Ll=36284,Nl=36285,Ul=36286,kp=2200,Vp=2201,Gp=2202,wo=2300,Fl=2301,Xa=2302,$u=2303,Ur=2400,Fr=2401,To=2402,ec=2500,Sh=2501,m0=0,g0=1,v0=2,Hp=3200,_0=3201,x0=3202,y0=3203,fr=0,Wp=1,ki="",$n="srgb",Vr="srgb-linear",Ao="linear",Vt="srgb",M0="",S0="rg",b0="ga",w0=0,Lr=7680,T0=7681,A0=7682,E0=7683,C0=34055,P0=34056,R0=5386,I0=512,D0=513,L0=514,N0=515,U0=516,F0=517,O0=518,ku=519,Xp=512,qp=513,Yp=514,tc=515,Zp=516,Jp=517,nc=518,Kp=519,Eo=35044,B0=35048,z0=35040,$0=35045,k0=35049,V0=35041,G0=35046,H0=35050,W0=35042,X0="100",Vu="300 es",Kn=2e3,Gr=2001,q0={COMPUTE:"compute",RENDER:"render"},Y0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Z0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},J0={TEXTURE_COMPARE:"depthTextureCompare"};function K0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const j0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function bs(r,e){return new j0[r](e)}function jp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Co(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qp(){const r=Co("canvas");return r.style.display="block",r}const Td={};let hr=null;function Q0(r){hr=r}function ev(){return hr}function Po(...r){const e="THREE."+r.shift();hr?hr("log",e,...r):console.log(e,...r)}function em(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=em(r);const e="THREE."+r.shift();if(hr)hr("warn",e,...r);else{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function St(...r){r=em(r);const e="THREE."+r.shift();if(hr)hr("error",e,...r);else{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ro(...r){const e=r.join(" ");e in Td||(Td[e]=!0,lt(...r))}function tv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const nv={[Ka]:ja,[Qa]:nl,[el]:il,[$r]:tl,[ja]:Ka,[nl]:Qa,[il]:el,[tl]:$r};class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ad=1234567;const zr=Math.PI/180,Is=180/Math.PI;function jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function bh(r,e){return(r%e+e)%e}function iv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function rv(r,e,t){return r!==e?(t-r)/(e-r):0}function vo(r,e,t){return(1-t)*r+t*e}function sv(r,e,t,n){return vo(r,e,1-Math.exp(-t*n))}function ov(r,e=1){return e-Math.abs(bh(r,e*2)-e)}function av(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function lv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function uv(r,e){return r+Math.random()*(e-r)}function hv(r){return r*(.5-Math.random())}function dv(r){r!==void 0&&(Ad=r);let e=Ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fv(r){return r*zr}function pv(r){return r*Is}function mv(r){return(r&r-1)===0&&r!==0}function gv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _v(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xv={DEG2RAD:zr,RAD2DEG:Is,generateUUID:jn,clamp:Pt,euclideanModulo:bh,mapLinear:iv,inverseLerp:rv,lerp:vo,damp:sv,pingpong:ov,smoothstep:av,smootherstep:lv,randInt:cv,randFloat:uv,randFloatSpread:hv,seededRandom:dv,degToRad:fv,radToDeg:pv,isPowerOfTwo:mv,ceilPowerOfTwo:gv,floorPowerOfTwo:vv,setQuaternionFromProperEuler:_v,normalize:Lt,denormalize:Rn};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==h||c!==f||u!==m){let g=l*h+c*f+u*m+d*_;g<0&&(h=-h,f=-f,m=-m,_=-_,g=-g);let v=1-a;if(g<.9995){const x=Math.acos(g),S=Math.sin(x);v=Math.sin(v*x)/S,a=Math.sin(a*x)/S,l=l*v+h*a,c=c*v+f*a,u=u*v+m*a,d=d*v+_*a}else{l=l*v+h*a,c=c*v+f*a,u=u*v+m*a,d=d*v+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-a*f,e[t+2]=c*m+u*f+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ed.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new B,Ed=new Nn;class It{constructor(e,t,n,i,s,o,a,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],_=i[0],g=i[3],v=i[6],x=i[1],S=i[4],b=i[7],I=i[2],A=i[5],D=i[8];return s[0]=o*_+a*x+l*I,s[3]=o*g+a*S+l*A,s[6]=o*v+a*b+l*D,s[1]=c*_+u*x+d*I,s[4]=c*g+u*S+d*A,s[7]=c*v+u*b+d*D,s[2]=h*_+f*x+m*I,s[5]=h*g+f*S+m*A,s[8]=h*v+f*b+m*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,m=t*d+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new It,Cd=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yv(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Vt&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?Ao:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vr]:{primaries:e,whitePoint:n,transfer:Ao,toXYZ:Cd,fromXYZ:Pd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:n,transfer:Vt,toXYZ:Cd,fromXYZ:Pd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),r}const Ft=yv();function Hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function As(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qr;class tm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=Co("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mv=0;class lr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Hc(i[o].image)):s.push(Hc(i[o]))}else s=Hc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Hc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let Sv=0;const Wc=new B;class on extends Pi{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Gn,i=Gn,s=Zt,o=Si,a=Dn,l=kn,c=on.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=jn(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case So:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case So:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=ql;on.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,i=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],_=l[2],g=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(f+1)/2,I=(v+1)/2,A=(u+h)/4,D=(d+_)/4,w=(m+g)/4;return S>b&&S>I?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=D/n):b>I?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=w/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=D/s,i=w/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wh extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new on(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new lr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends wh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ic extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bv extends Qn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ic(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class rc extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wv extends Qn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new rc(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class At{constructor(e,t,n,i,s,o,a,l,c,u,d,h,f,m,_,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,d,h,f,m,_,g)}set(e,t,n,i,s,o,a,l,c,u,d,h,f,m,_,g){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=h,v[3]=f,v[7]=m,v[11]=_,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,m=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,m=a*u,_=a*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,Av)}lookAt(e,t,n){const i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),ji.crossVectors(n,Yn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),ji.crossVectors(n,Yn)),ji.normalize(),Ko.crossVectors(Yn,ji),i[0]=ji.x,i[4]=Ko.x,i[8]=Yn.x,i[1]=ji.y,i[5]=Ko.y,i[9]=Yn.y,i[2]=ji.z,i[6]=Ko.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],_=n[6],g=n[10],v=n[14],x=n[3],S=n[7],b=n[11],I=n[15],A=i[0],D=i[4],w=i[8],E=i[12],O=i[1],U=i[5],H=i[9],ne=i[13],K=i[2],he=i[6],fe=i[10],ae=i[14],X=i[3],j=i[7],me=i[11],Re=i[15];return s[0]=o*A+a*O+l*K+c*X,s[4]=o*D+a*U+l*he+c*j,s[8]=o*w+a*H+l*fe+c*me,s[12]=o*E+a*ne+l*ae+c*Re,s[1]=u*A+d*O+h*K+f*X,s[5]=u*D+d*U+h*he+f*j,s[9]=u*w+d*H+h*fe+f*me,s[13]=u*E+d*ne+h*ae+f*Re,s[2]=m*A+_*O+g*K+v*X,s[6]=m*D+_*U+g*he+v*j,s[10]=m*w+_*H+g*fe+v*me,s[14]=m*E+_*ne+g*ae+v*Re,s[3]=x*A+S*O+b*K+I*X,s[7]=x*D+S*U+b*he+I*j,s[11]=x*w+S*H+b*fe+I*me,s[15]=x*E+S*ne+b*ae+I*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],_=e[7],g=e[11],v=e[15],x=l*f-c*h,S=a*f-c*d,b=a*h-l*d,I=o*f-c*u,A=o*h-l*u,D=o*d-a*u;return t*(_*x-g*S+v*b)-n*(m*x-g*I+v*A)+i*(m*S-_*I+v*D)-s*(m*b-_*A+g*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],_=e[13],g=e[14],v=e[15],x=t*a-n*o,S=t*l-i*o,b=t*c-s*o,I=n*l-i*a,A=n*c-s*a,D=i*c-s*l,w=u*_-d*m,E=u*g-h*m,O=u*v-f*m,U=d*g-h*_,H=d*v-f*_,ne=h*v-f*g,K=x*ne-S*H+b*U+I*O-A*E+D*w;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const he=1/K;return e[0]=(a*ne-l*H+c*U)*he,e[1]=(i*H-n*ne-s*U)*he,e[2]=(_*D-g*A+v*I)*he,e[3]=(h*A-d*D-f*I)*he,e[4]=(l*O-o*ne-c*E)*he,e[5]=(t*ne-i*O+s*E)*he,e[6]=(g*b-m*D-v*S)*he,e[7]=(u*D-h*b+f*S)*he,e[8]=(o*H-a*O+c*w)*he,e[9]=(n*O-t*H-s*w)*he,e[10]=(m*A-_*b+v*x)*he,e[11]=(d*b-u*A-f*x)*he,e[12]=(a*E-o*U-l*w)*he,e[13]=(t*U-n*E+i*w)*he,e[14]=(_*S-m*I-g*x)*he,e[15]=(u*I-d*S+h*x)*he,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,m=s*d,_=o*u,g=o*d,v=a*d,x=l*c,S=l*u,b=l*d,I=n.x,A=n.y,D=n.z;return i[0]=(1-(_+v))*I,i[1]=(f+b)*I,i[2]=(m-S)*I,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(h+v))*A,i[6]=(g+x)*A,i[7]=0,i[8]=(m+S)*D,i[9]=(g-x)*D,i[10]=(1-(h+_))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=es.set(i[0],i[1],i[2]).length();const a=es.set(i[4],i[5],i[6]).length(),l=es.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ai.copy(this);const c=1/o,u=1/a,d=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,t.setFromRotationMatrix(ai),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Kn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Kn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Gr)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Kn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Kn)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Gr)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new B,ai=new At,Tv=new B(0,0,0),Av=new B(1,1,1),ji=new B,Ko=new B,Yn=new B,Rd=new At,Id=new Nn;class ei{constructor(e=0,t=0,n=0,i=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const Dd=new B,ts=new Nn,Li=new At,jo=new B,Hs=new B,Cv=new B,Pv=new Nn,Ld=new B(1,0,0),Nd=new B(0,1,0),Ud=new B(0,0,1),Fd={type:"added"},Rv={type:"removed"},ns={type:"childadded",child:null},Xc={type:"childremoved",child:null};class Bt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new B,t=new ei,n=new Nn,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new It}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Ud,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jo.copy(e):jo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Hs,jo,this.up):Li.lookAt(jo,Hs,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Li),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fd),ns.child=e,this.dispatchEvent(ns),ns.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rv),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fd),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new B(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ws extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iv={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),v=this._getHandJoint(c,_);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ws;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function qc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ft.workingColorSpace){if(e=bh(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qc(o,s,e+1/3),this.g=qc(o,s,e),this.b=qc(o,s,e-1/3)}return Ft.colorSpaceToWorking(this,i),this}setStyle(e,t=$n){function n(s){s!==void 0&&parseFloat(s)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const n=nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Ft.workingToColorSpace(Tn.copy(this),e),Math.round(Pt(Tn.r*255,0,255))*65536+Math.round(Pt(Tn.g*255,0,255))*256+Math.round(Pt(Tn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Tn.copy(this),t);const n=Tn.r,i=Tn.g,s=Tn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=$n){Ft.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,i=Tn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Qo);const n=vo(Qi.h,Qo.h,t),i=vo(Qi.s,Qo.s,t),s=vo(Qi.l,Qo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new ht;ht.NAMES=nm;class oc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=t}clone(){return new oc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ac{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ht(e),this.near=t,this.far=n}clone(){return new ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Th=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const li=new B,Ni=new B,Yc=new B,Ui=new B,is=new B,rs=new B,Od=new B,Zc=new B,Jc=new B,Kc=new B,jc=new kt,Qc=new kt,eu=new kt;class Vn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){li.subVectors(i,t),Ni.subVectors(n,t),Yc.subVectors(e,t);const o=li.dot(li),a=li.dot(Ni),l=li.dot(Yc),c=Ni.dot(Ni),u=Ni.dot(Yc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return jc.setScalar(0),Qc.setScalar(0),eu.setScalar(0),jc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,n),eu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(jc,s.x),o.addScaledVector(Qc,s.y),o.addScaledVector(eu,s.z),o}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),Ni.subVectors(e,t),li.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;is.subVectors(i,n),rs.subVectors(s,n),Zc.subVectors(e,n);const l=is.dot(Zc),c=rs.dot(Zc);if(l<=0&&c<=0)return t.copy(n);Jc.subVectors(e,i);const u=is.dot(Jc),d=rs.dot(Jc);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(is,o);Kc.subVectors(e,s);const f=is.dot(Kc),m=rs.dot(Kc);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(rs,a);const g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return Od.subVectors(s,i),a=(d-u)/(d-u+(f-m)),t.copy(i).addScaledVector(Od,a);const v=1/(g+_+h);return o=_*v,a=h*v,t.copy(n).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),ta.subVectors(this.max,Ws),ss.subVectors(e.a,Ws),os.subVectors(e.b,Ws),as.subVectors(e.c,Ws),er.subVectors(os,ss),tr.subVectors(as,os),_r.subVectors(ss,as);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-_r.z,_r.y,er.z,0,-er.x,tr.z,0,-tr.x,_r.z,0,-_r.x,-er.y,er.x,0,-tr.y,tr.x,0,-_r.y,_r.x,0];return!tu(t,ss,os,as,ta)||(t=[1,0,0,0,1,0,0,0,1],!tu(t,ss,os,as,ta))?!1:(na.crossVectors(er,tr),t=[na.x,na.y,na.z],tu(t,ss,os,as,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new B,new B,new B,new B,new B,new B,new B,new B],ci=new B,ea=new pn,ss=new B,os=new B,as=new B,er=new B,tr=new B,_r=new B,Ws=new B,ta=new B,na=new B,xr=new B;function tu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xr.fromArray(r,s);const a=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),l=e.dot(xr),c=t.dot(xr),u=n.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Vi=Dv();function Dv(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function zn(r){Math.abs(r)>65504&&lt("DataUtils.toHalfFloat(): Value out of range."),r=Pt(r,-65504,65504),Vi.floatView[0]=r;const e=Vi.uint32View[0],t=e>>23&511;return Vi.baseTable[t]+((e&8388607)>>Vi.shiftTable[t])}function ro(r){const e=r>>10;return Vi.uint32View[0]=Vi.mantissaTable[Vi.offsetTable[e]+(r&1023)]+Vi.exponentTable[e],Vi.floatView[0]}class Lv{static toHalfFloat(e){return zn(e)}static fromHalfFloat(e){return ro(e)}}const fn=new B,ia=new We;let Nv=0;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eo,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eo&&(e.usage=this.usage),e}}class Uv extends Wt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Fv extends Wt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Ov extends Wt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Bv extends Wt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ah extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zv extends Wt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Eh extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $v extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ro(this.array[e*this.itemSize]);return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=zn(t),this}getY(e){let t=ro(this.array[e*this.itemSize+1]);return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=zn(t),this}getZ(e){let t=ro(this.array[e*this.itemSize+2]);return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=zn(t),this}getW(e){let t=ro(this.array[e*this.itemSize+3]);return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=zn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=zn(t),this.array[e+1]=zn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=zn(t),this.array[e+1]=zn(n),this.array[e+2]=zn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=zn(t),this.array[e+1]=zn(n),this.array[e+2]=zn(i),this.array[e+3]=zn(s),this}}class dt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const kv=new pn,Xs=new B,nu=new B;class mn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(nu)),this.expandByPoint(Xs.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vv=0;const ti=new At,iu=new Bt,ls=new B,Zn=new pn,qs=new pn,Mn=new B;class Rt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K0(e)?Eh:Ah)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Zn.min,qs.min),Zn.expandByPoint(Mn),Mn.addVectors(Zn.max,qs.max),Zn.expandByPoint(Mn)):(Zn.expandByPoint(qs.min),Zn.expandByPoint(qs.max))}Zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mn.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Mn.add(ls)),i=Math.max(i,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new B,l[w]=new B;const c=new B,u=new B,d=new B,h=new We,f=new We,m=new We,_=new B,g=new B;function v(w,E,O){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,O),h.fromBufferAttribute(s,w),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,O),u.sub(c),d.sub(c),f.sub(h),m.sub(h);const U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(U),a[w].add(_),a[E].add(_),a[O].add(_),l[w].add(g),l[E].add(g),l[O].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,E=x.length;w<E;++w){const O=x[w],U=O.start,H=O.count;for(let ne=U,K=U+H;ne<K;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const S=new B,b=new B,I=new B,A=new B;function D(w){I.fromBufferAttribute(i,w),A.copy(I);const E=a[w];S.copy(E),S.sub(I.multiplyScalar(I.dot(E))).normalize(),b.crossVectors(A,E);const U=b.dot(l[w])<0?-1:1;o.setXYZW(w,S.x,S.y,S.z,U)}for(let w=0,E=x.length;w<E;++w){const O=x[w],U=O.start,H=O.count;for(let ne=U,K=U+H;ne<K;ne+=3)D(e.getX(ne+0)),D(e.getX(ne+1)),D(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let v=0;v<u;v++)h[m++]=c[f++]}return new Wt(h,u,d)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eo,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new B;class Hr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Gv=0;class En extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Br,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ch extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const Ys=new B,us=new B,hs=new B,ds=new We,Zs=new We,im=new At,ra=new B,Js=new B,sa=new B,Bd=new We,ru=new We,zd=new We;class rm extends Bt{constructor(e=new Ch){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Rt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lc(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Hr(n,3,0,!1)),cs.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=cs,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&St('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),im.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-hs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;oa(ra.set(-.5,-.5,0),hs,o,us,i,s),oa(Js.set(.5,-.5,0),hs,o,us,i,s),oa(sa.set(.5,.5,0),hs,o,us,i,s),Bd.set(0,0),ru.set(1,0),zd.set(1,1);let a=e.ray.intersectTriangle(ra,Js,sa,!1,Ys);if(a===null&&(oa(Js.set(-.5,.5,0),hs,o,us,i,s),ru.set(0,1),a=e.ray.intersectTriangle(ra,sa,Js,!1,Ys),a===null))return;const l=e.ray.origin.distanceTo(Ys);l<e.near||l>e.far||t.push({distance:l,point:Ys.clone(),uv:Vn.getInterpolation(Ys,ra,Js,sa,Bd,ru,zd,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function oa(r,e,t,n,i,s){ds.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Zs.x=s*ds.x-i*ds.y,Zs.y=i*ds.x+s*ds.y):Zs.copy(ds),r.copy(e),r.x+=Zs.x,r.y+=Zs.y,r.applyMatrix4(im)}const aa=new B,$d=new B;class sm extends Bt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){aa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(aa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){aa.setFromMatrixPosition(e.matrixWorld),$d.setFromMatrixPosition(this.matrixWorld);const n=aa.distanceTo($d)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Oi=new B,su=new B,la=new B,nr=new B,ou=new B,ca=new B,au=new B;class pr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){su.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(su);const s=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=nr.dot(this.direction),l=-nr.dot(la),c=nr.lengthSq(),u=Math.abs(1-o*o);let d,h,f,m;if(u>0)if(d=o*l-a,h=o*a-l,m=s*u,d>=0)if(h>=-m)if(h<=m){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(su).addScaledVector(la,h),f}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,s){ou.subVectors(t,e),ca.subVectors(n,e),au.crossVectors(ou,ca);let o=this.direction.dot(au),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(nr,ca));if(l<0)return null;const c=a*this.direction.dot(ou.cross(nr));if(c<0||l+c>o)return null;const u=-a*nr.dot(au);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qi extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kd=new At,yr=new pr,ua=new mn,Vd=new B,ha=new B,da=new B,fa=new B,lu=new B,pa=new B,Gd=new B,ma=new B;class an extends Bt{constructor(e=new Rt,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(lu.fromBufferAttribute(d,e),o?pa.addScaledVector(lu,u):pa.addScaledVector(lu.sub(t),u))}t.add(pa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(ua.containsPoint(yr.origin)===!1&&(yr.intersectSphere(ua,Vd)===null||yr.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(kd.copy(s).invert(),yr.copy(e.ray).applyMatrix4(kd),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],v=o[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,I=S;b<I;b+=3){const A=a.getX(b),D=a.getX(b+1),w=a.getX(b+2);i=ga(this,v,e,n,c,u,d,A,D,w),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,v=_;g<v;g+=3){const x=a.getX(g),S=a.getX(g+1),b=a.getX(g+2);i=ga(this,o,e,n,c,u,d,x,S,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],v=o[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,I=S;b<I;b+=3){const A=b,D=b+1,w=b+2;i=ga(this,v,e,n,c,u,d,A,D,w),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,v=_;g<v;g+=3){const x=g,S=g+1,b=g+2;i=ga(this,o,e,n,c,u,d,x,S,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Hv(r,e,t,n,i,s,o,a){let l;if(e.side===Ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Wi,a),l===null)return null;ma.copy(a),ma.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:r}}function ga(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ha),r.getVertexPosition(l,da),r.getVertexPosition(c,fa);const u=Hv(r,e,t,n,ha,da,fa,Gd);if(u){const d=new B;Vn.getBarycoord(Gd,ha,da,fa,d),i&&(u.uv=Vn.getInterpolatedAttribute(i,a,l,c,d,new We)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,a,l,c,d,new We)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Vn.getNormal(ha,da,fa,h.normal),u.face=h,u.barycoord=d}return u}const Hd=new B,Wd=new kt,Xd=new kt,Wv=new B,qd=new At,va=new B,cu=new mn,Yd=new At,uu=new pr;class om extends an{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zu,this.bindMatrix=new At,this.bindMatrixInverse=new At,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,va),this.boundingBox.expandByPoint(va)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,va),this.boundingSphere.expandByPoint(va)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cu.copy(this.boundingSphere),cu.applyMatrix4(i),e.ray.intersectsSphere(cu)!==!1&&(Yd.copy(i).invert(),uu.copy(e.ray).applyMatrix4(Yd),!(this.boundingBox!==null&&uu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new kt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$p?this.bindMatrixInverse.copy(this.bindMatrix).invert():lt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wd.fromBufferAttribute(i.attributes.skinIndex,e),Xd.fromBufferAttribute(i.attributes.skinWeight,e),Hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Xd.getComponent(s);if(o!==0){const a=Wd.getComponent(s);qd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Wv.copy(Hd).applyMatrix4(qd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ph extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pi extends on{constructor(e=null,t=1,n=1,i,s,o,a,l,c=un,u=un,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new At,Xv=new At;class cc{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){lt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new At)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new At;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Xv;Zd.multiplyMatrices(a,t[s]),Zd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new cc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pi(t,e,e,Dn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(lt("Skeleton: No bone found with UUID:",s),o=new Ph),this.bones.push(o),this.boneInverses.push(new At().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ds extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new At,Jd=new At,_a=[],Kd=new pn,qv=new At,Ks=new an,js=new mn;class am extends an{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ds(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Kd.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(Kd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),js.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),e.ray.intersectsSphere(js)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fs),Jd.multiplyMatrices(n,fs),Ks.matrixWorld=Jd,Ks.raycast(e,_a);for(let o=0,a=_a.length;o<a;o++){const l=_a[o];l.instanceId=s,l.object=this,t.push(l)}_a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(i*this.count),i,this.count,Kl,In));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const hu=new B,Yv=new B,Zv=new It;class $i{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=hu.subVectors(n,t).cross(Yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zv.getNormalMatrix(e),i=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new mn,Jv=new We(.5,.5),xa=new B;class Os{constructor(e=new $i,t=new $i,n=new $i,i=new $i,s=new $i,o=new $i){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],v=s[11],x=s[12],S=s[13],b=s[14],I=s[15];if(i[0].setComponents(c-o,f-u,v-m,I-x).normalize(),i[1].setComponents(c+o,f+u,v+m,I+x).normalize(),i[2].setComponents(c+a,f+d,v+_,I+S).normalize(),i[3].setComponents(c-a,f-d,v-_,I-S).normalize(),n)i[4].setComponents(l,h,g,b).normalize(),i[5].setComponents(c-l,f-h,v-g,I-b).normalize();else if(i[4].setComponents(c-l,f-h,v-g,I-b).normalize(),t===Kn)i[5].setComponents(c+l,f+h,v+g,I+b).normalize();else if(t===Gr)i[5].setComponents(l,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const t=Jv.distanceTo(e.center);return Mr.radius=.7071067811865476+t,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xa.x=i.normal.x>0?e.max.x:e.min.x,xa.y=i.normal.y>0?e.max.y:e.min.y,xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vi=new At,_i=new Os;class uc{constructor(){this.coordinateSystem=Kn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(vi,i.coordinateSystem,i.reversedDepth),_i.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(vi,i.coordinateSystem,i.reversedDepth),_i.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(vi,i.coordinateSystem,i.reversedDepth),_i.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(vi,i.coordinateSystem,i.reversedDepth),_i.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(vi,i.coordinateSystem,i.reversedDepth),_i.containsPoint(e))return!0}return!1}clone(){return new uc}}function du(r,e){return r-e}function Kv(r,e){return r.z-e.z}function jv(r,e){return e.z-r.z}class Qv{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Bn=new At,e_=new ht(1,1,1),jd=new Os,t_=new uc,ya=new pn,Sr=new mn,Qs=new B,Qd=new B,n_=new B,fu=new Qv,An=new an,Ma=[];function i_(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function br(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class lm extends an{constructor(e,t,n=t*2,i){super(new Rt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new pi(t,e,e,Dn,In);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new pi(t,e,e,Vo,ii);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new pi(t,e,e,Dn,In);n.colorSpace=Ft.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),d=new Wt(u,l,c);t.setAttribute(s,d)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Wt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Bn),this.getBoundingBoxAt(s,ya).applyMatrix4(Bn),e.union(ya)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Bn),this.getBoundingSphereAt(s,Sr).applyMatrix4(Bn),e.union(Sr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(du),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Bn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(e_.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(du),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const d=t.getAttribute(u),h=n.getAttribute(u);i_(d,h,l);const f=d.itemSize;for(let m=d.count,_=c;m<_;m++){const g=l+m;for(let v=0;v<f;v++)h.setComponent(g,v,0)}h.needsUpdate=!0,h.addUpdateRange(l*f,c*f)}if(i){const u=a.indexStart,d=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let h=0;h<o.count;h++)s.setX(u+h,l+o.getX(h));for(let h=o.count,f=d;h<f;h++)s.setX(u+h,l);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=c,f=s.index,m=f.array,_=e-d;for(let g=u;g<u+h;g++)m[g]=m[g]+_;f.array.copyWithin(t,u,u+h),f.addUpdateRange(t,h),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:d}=c,h=s.attributes;for(const f in h){const m=h[f],{array:_,itemSize:g}=m;_.copyWithin(e*g,u*g,(u+d)*g),m.addUpdateRange(e*g,d*g),m.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new pn,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;o&&(u=o.getX(u)),s.expandByPoint(Qs.fromBufferAttribute(a,u))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new mn;this.getBoundingBoxAt(e,ya),ya.getCenter(s.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let d=c;o&&(d=o.getX(d)),Qs.fromBufferAttribute(a,d),l=Math.max(l,s.center.distanceToSquared(Qs))}s.radius=Math.sqrt(l),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(du);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);br(this._multiDrawCounts,i),br(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),br(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),br(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),br(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Rt,this._initializeGeometry(s));const o=this.geometry;s.index&&br(s.index.array,o.index.array);for(const a in s.attributes)br(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;An.material=this.material,An.geometry.index=o.index,An.geometry.attributes=o.attributes,An.geometry.boundingBox===null&&(An.geometry.boundingBox=new pn),An.geometry.boundingSphere===null&&(An.geometry.boundingSphere=new mn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=i[c];An.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,An.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,An.geometry.boundingBox),this.getBoundingSphereAt(c,An.geometry.boundingSphere),An.raycast(e,Ma);for(let d=0,h=Ma.length;d<h;d++){const f=Ma[d];f.object=this,f.batchId=a,t.push(f)}Ma.length=0}An.material=null,An.geometry.index=null,An.geometry.attributes={},An.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex();let a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,a=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,u=this._multiDrawStarts,d=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,m=this._indirectTexture,_=m.image.data,g=n.isArrayCamera?t_:jd;f&&!n.isArrayCamera&&(Bn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),jd.setFromProjectionMatrix(Bn,n.coordinateSystem,n.reversedDepth));let v=0;if(this.sortObjects){Bn.copy(this.matrixWorld).invert(),Qs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Bn),Qd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Bn);for(let b=0,I=c.length;b<I;b++)if(c[b].visible&&c[b].active){const A=c[b].geometryIndex;this.getMatrixAt(b,Bn),this.getBoundingSphereAt(A,Sr).applyMatrix4(Bn);let D=!1;if(f&&(D=!g.intersectsSphere(Sr,n)),!D){const w=h[A],E=n_.subVectors(Sr.center,Qs).dot(Qd);fu.push(w.start,w.count,E,b)}}const x=fu.list,S=this.customSort;S===null?x.sort(s.transparent?jv:Kv):S.call(this,x,n);for(let b=0,I=x.length;b<I;b++){const A=x[b];u[v]=A.start*a*l,d[v]=A.count*l,_[v]=A.index,v++}fu.reset()}else for(let x=0,S=c.length;x<S;x++)if(c[x].visible&&c[x].active){const b=c[x].geometryIndex;let I=!1;if(f&&(this.getMatrixAt(x,Bn),this.getBoundingSphereAt(b,Sr).applyMatrix4(Bn),I=!g.intersectsSphere(Sr,n)),!I){const A=h[b];u[v]=A.start*a*l,d[v]=A.count*l,_[v]=x,v++}}m.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class On extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new B,Bl=new B,ef=new At,eo=new pr,Sa=new mn,pu=new B,tf=new B;class dr extends Bt{constructor(e=new Rt,t=new On){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ol.fromBufferAttribute(t,i-1),Bl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ol.distanceTo(Bl);e.setAttribute("lineDistance",new dt(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=s,e.ray.intersectsSphere(Sa)===!1)return;ef.copy(i).invert(),eo.copy(e.ray).applyMatrix4(ef);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const v=u.getX(_),x=u.getX(_+1),S=ba(this,e,eo,l,v,x,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),v=ba(this,e,eo,l,_,g,m-1);v&&t.push(v)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const v=ba(this,e,eo,l,_,_+1,_);v&&t.push(v)}if(this.isLineLoop){const _=ba(this,e,eo,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ba(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ol.fromBufferAttribute(a,i),Bl.fromBufferAttribute(a,s),t.distanceSqToSegment(Ol,Bl,pu,tf)>n)return;pu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(pu);if(!(c<e.near||c>e.far))return{distance:c,point:tf.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const nf=new B,rf=new B;class Ri extends dr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)nf.fromBufferAttribute(t,i),rf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nf.distanceTo(rf);e.setAttribute("lineDistance",new dt(n,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cm extends dr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Rh=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const sf=new At,Gu=new pr,wa=new mn,Ta=new B;class um extends Bt{constructor(e=new Rt,t=new Rh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=s,e.ray.intersectsSphere(wa)===!1)return;sf.copy(i).invert(),Gu.copy(e.ray).applyMatrix4(sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=h,_=f;m<_;m++){const g=c.getX(m);Ta.fromBufferAttribute(d,g),of(Ta,g,l,i,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=h,_=f;m<_;m++)Ta.fromBufferAttribute(d,m),of(Ta,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function of(r,e,t,n,i,s,o){const a=Gu.distanceSqToPoint(r);if(a<t){const l=new B;Gu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hm extends on{constructor(e,t,n,i,s=Zt,o=Zt,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class r_ extends hm{constructor(e,t,n,i,s,o,a,l){super({},e,t,n,i,s,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class s_ extends on{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=un,this.minFilter=un,this.generateMipmaps=!1,this.needsUpdate=!0}}class hc extends on{constructor(e,t,n,i,s,o,a,l,c,u,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class o_ extends hc{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Gn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a_ extends hc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ai),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Go extends on{constructor(e=[],t=Ai,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l_ extends on{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends on{constructor(e,t,n=ii,i,s,o,a=un,l=un,c,u=Ci,d=1){if(u!==Ci&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dm extends Ls{constructor(e,t=ii,n=Ai,i,s,o=un,a=un,l,c=Ci){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ih extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qr extends Rt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function m(_,g,v,x,S,b,I,A,D,w,E){const O=b/D,U=I/w,H=b/2,ne=I/2,K=A/2,he=D+1,fe=w+1;let ae=0,X=0;const j=new B;for(let me=0;me<fe;me++){const Re=me*U-ne;for(let be=0;be<he;be++){const Ve=be*O-H;j[_]=Ve*x,j[g]=Re*S,j[v]=K,c.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[v]=A>0?1:-1,u.push(j.x,j.y,j.z),d.push(be/D),d.push(1-me/w),ae+=1}}for(let me=0;me<w;me++)for(let Re=0;Re<D;Re++){const be=h+Re+he*me,Ve=h+Re+he*(me+1),Qe=h+(Re+1)+he*(me+1),Ge=h+(Re+1)+he*me;l.push(be,Ve,Ge),l.push(Ve,Qe,Ge),X+=6}a.addGroup(f,X,E),f+=X,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dc extends Rt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,m=n*2+s,_=i+1,g=new B,v=new B;for(let x=0;x<=m;x++){let S=0,b=0,I=0,A=0;if(x<=n){const E=x/n,O=E*Math.PI/2;b=-u-e*Math.cos(O),I=e*Math.sin(O),A=-e*Math.cos(O),S=E*d}else if(x<=n+s){const E=(x-n)/s;b=-u+E*t,I=e,A=0,S=d+E*h}else{const E=(x-n-s)/n,O=E*Math.PI/2;b=u+e*Math.sin(O),I=e*Math.cos(O),A=e*Math.sin(O),S=d+h+E*d}const D=Math.max(0,Math.min(1,S/f));let w=0;x===0?w=.5/i:x===m&&(w=-.5/i);for(let E=0;E<=i;E++){const O=E/i,U=O*Math.PI*2,H=Math.sin(U),ne=Math.cos(U);v.x=-I*ne,v.y=b,v.z=I*H,a.push(v.x,v.y,v.z),g.set(-I*ne,A,I*H),g.normalize(),l.push(g.x,g.y,g.z),c.push(O+w,D)}if(x>0){const E=(x-1)*_;for(let O=0;O<i;O++){const U=E+O,H=E+O+1,ne=x*_+O,K=x*_+O+1;o.push(U,H,ne),o.push(H,K,ne)}}}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class fc extends Rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new B,u=new We;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ho extends Rt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let m=0;const _=[],g=n/2;let v=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function x(){const b=new B,I=new B;let A=0;const D=(t-e)/n;for(let w=0;w<=s;w++){const E=[],O=w/s,U=O*(t-e)+e;for(let H=0;H<=i;H++){const ne=H/i,K=ne*l+a,he=Math.sin(K),fe=Math.cos(K);I.x=U*he,I.y=-O*n+g,I.z=U*fe,d.push(I.x,I.y,I.z),b.set(he,D,fe).normalize(),h.push(b.x,b.y,b.z),f.push(ne,1-O),E.push(m++)}_.push(E)}for(let w=0;w<i;w++)for(let E=0;E<s;E++){const O=_[E][w],U=_[E+1][w],H=_[E+1][w+1],ne=_[E][w+1];(e>0||E!==0)&&(u.push(O,U,ne),A+=3),(t>0||E!==s-1)&&(u.push(U,H,ne),A+=3)}c.addGroup(v,A,0),v+=A}function S(b){const I=m,A=new We,D=new B;let w=0;const E=b===!0?e:t,O=b===!0?1:-1;for(let H=1;H<=i;H++)d.push(0,g*O,0),h.push(0,O,0),f.push(.5,.5),m++;const U=m;for(let H=0;H<=i;H++){const K=H/i*l+a,he=Math.cos(K),fe=Math.sin(K);D.x=E*fe,D.y=g*O,D.z=E*he,d.push(D.x,D.y,D.z),h.push(0,O,0),A.x=he*.5+.5,A.y=fe*.5*O+.5,f.push(A.x,A.y),m++}for(let H=0;H<i;H++){const ne=I+H,K=U+H;b===!0?u.push(K,K+1,ne):u.push(K+1,K,ne),w+=3}c.addGroup(v,w,b===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends Ho{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const S=new B,b=new B,I=new B;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],b),f(t[A+2],I),l(S,b,I,x)}function l(x,S,b,I){const A=I+1,D=[];for(let w=0;w<=A;w++){D[w]=[];const E=x.clone().lerp(b,w/A),O=S.clone().lerp(b,w/A),U=A-w;for(let H=0;H<=U;H++)H===0&&w===A?D[w][H]=E:D[w][H]=E.clone().lerp(O,H/U)}for(let w=0;w<A;w++)for(let E=0;E<2*(A-w)-1;E++){const O=Math.floor(E/2);E%2===0?(h(D[w][O+1]),h(D[w+1][O]),h(D[w][O])):(h(D[w][O+1]),h(D[w+1][O+1]),h(D[w+1][O]))}}function c(x){const S=new B;for(let b=0;b<s.length;b+=3)S.x=s[b+0],S.y=s[b+1],S.z=s[b+2],S.normalize().multiplyScalar(x),s[b+0]=S.x,s[b+1]=S.y,s[b+2]=S.z}function u(){const x=new B;for(let S=0;S<s.length;S+=3){x.x=s[S+0],x.y=s[S+1],x.z=s[S+2];const b=g(x)/2/Math.PI+.5,I=v(x)/Math.PI+.5;o.push(b,1-I)}m(),d()}function d(){for(let x=0;x<o.length;x+=6){const S=o[x+0],b=o[x+2],I=o[x+4],A=Math.max(S,b,I),D=Math.min(S,b,I);A>.9&&D<.1&&(S<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),I<.2&&(o[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function f(x,S){const b=x*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function m(){const x=new B,S=new B,b=new B,I=new B,A=new We,D=new We,w=new We;for(let E=0,O=0;E<s.length;E+=9,O+=6){x.set(s[E+0],s[E+1],s[E+2]),S.set(s[E+3],s[E+4],s[E+5]),b.set(s[E+6],s[E+7],s[E+8]),A.set(o[O+0],o[O+1]),D.set(o[O+2],o[O+3]),w.set(o[O+4],o[O+5]),I.copy(x).add(S).add(b).divideScalar(3);const U=g(I);_(A,O+0,x,U),_(D,O+2,S,U),_(w,O+4,b,U)}}function _(x,S,b,I){I<0&&x.x===1&&(o[S]=x.x-1),b.x===0&&b.z===0&&(o[S]=I/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function v(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.vertices,e.indices,e.radius,e.detail)}}class pc extends mr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pc(e.radius,e.detail)}}const Aa=new B,Ea=new B,mu=new B,Ca=new Vn;class fm extends Rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(zr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:v}=Ca;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),v.fromBufferAttribute(a,c[2]),Ca.getNormal(mu),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const S=(x+1)%3,b=d[x],I=d[S],A=Ca[u[x]],D=Ca[u[S]],w=`${b}_${I}`,E=`${I}_${b}`;E in h&&h[E]?(mu.dot(h[E].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(D.x,D.y,D.z)),h[E]=null):w in h||(h[w]={index0:c[x],index1:c[S],normal:mu.clone()})}}for(const m in h)if(h[m]){const{index0:_,index1:g}=h[m];Aa.fromBufferAttribute(a,_),Ea.fromBufferAttribute(a,g),f.push(Aa.x,Aa.y,Aa.z),f.push(Ea.x,Ea.y,Ea.z)}this.setAttribute("position",new dt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new We:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,i=[],s=[],o=[],a=new B,l=new At;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Pt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Pt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mc extends mi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new We){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pm extends mc{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dh(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Pa=new B,gu=new Dh,vu=new Dh,_u=new Dh;class mm extends mi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Pa.subVectors(i[0],i[1]).add(i[0]),c=Pa);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Pa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),gu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,_,g),vu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,_,g),_u.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(gu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),vu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),_u.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(gu.calc(l),vu.calc(l),_u.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function af(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function c_(r,e){const t=1-r;return t*t*e}function u_(r,e){return 2*(1-r)*r*e}function h_(r,e){return r*r*e}function _o(r,e,t,n){return c_(r,e)+u_(r,t)+h_(r,n)}function d_(r,e){const t=1-r;return t*t*t*e}function f_(r,e){const t=1-r;return 3*t*t*r*e}function p_(r,e){return 3*(1-r)*r*r*e}function m_(r,e){return r*r*r*e}function xo(r,e,t,n,i){return d_(r,e)+f_(r,t)+p_(r,n)+m_(r,i)}class Lh extends mi{constructor(e=new We,t=new We,n=new We,i=new We){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new We){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xo(e,i.x,s.x,o.x,a.x),xo(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gm extends mi{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xo(e,i.x,s.x,o.x,a.x),xo(e,i.y,s.y,o.y,a.y),xo(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nh extends mi{constructor(e=new We,t=new We){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new We){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new We){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vm extends mi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uh extends mi{constructor(e=new We,t=new We,n=new We){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new We){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(_o(e,i.x,s.x,o.x),_o(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fh extends mi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(_o(e,i.x,s.x,o.x),_o(e,i.y,s.y,o.y),_o(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new We){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(af(a,l.x,c.x,u.x,d.x),af(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new We().fromArray(i))}return this}}var zl=Object.freeze({__proto__:null,ArcCurve:pm,CatmullRomCurve3:mm,CubicBezierCurve:Lh,CubicBezierCurve3:gm,EllipseCurve:mc,LineCurve:Nh,LineCurve3:vm,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:Fh,SplineCurve:Oh});class _m extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zl[i.type]().fromJSON(i))}return this}}class $l extends _m{constructor(e){super(),this.type="Path",this.currentPoint=new We,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Nh(this.currentPoint.clone(),new We(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Uh(this.currentPoint.clone(),new We(e,t),new We(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Lh(this.currentPoint.clone(),new We(e,t),new We(n,i),new We(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Oh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new mc(e,t,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ti extends $l{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new $l().fromJSON(i))}return this}}function g_(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=xm(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=M_(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let u=a,d=l;for(let h=t;h<i;h+=t){const f=r[h],m=r[h+1];f<a&&(a=f),m<l&&(l=m),f>u&&(u=f),m>d&&(d=m)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Io(s,o,t,a,l,c,0),o}function xm(r,e,t,n,i){let s;if(i===D_(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=lf(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=lf(o/n|0,r[o],r[o+1],s);return s&&Ns(s,s.next)&&(Lo(s),s=s.next),s}function Wr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ns(t,t.next)||en(t.prev,t,t.next)===0)){if(Lo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Io(r,e,t,n,i,s,o){if(!r)return;!o&&s&&A_(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?__(r,n,i,s):v_(r)){e.push(l.i,r.i,c.i),Lo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=x_(Wr(r),e),Io(r,e,t,n,i,s,2)):o===2&&y_(r,e,t,n,i,s):Io(Wr(r),e,t,n,i,s,1);break}}}function v_(r){const e=r.prev,t=r,n=r.next;if(en(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,s,o),d=Math.min(a,l,c),h=Math.max(i,s,o),f=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&so(i,a,s,l,o,c,m.x,m.y)&&en(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function __(r,e,t,n){const i=r.prev,s=r,o=r.next;if(en(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,d=s.y,h=o.y,f=Math.min(a,l,c),m=Math.min(u,d,h),_=Math.max(a,l,c),g=Math.max(u,d,h),v=Hu(f,m,e,t,n),x=Hu(_,g,e,t,n);let S=r.prevZ,b=r.nextZ;for(;S&&S.z>=v&&b&&b.z<=x;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&so(a,u,l,d,c,h,S.x,S.y)&&en(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=f&&b.x<=_&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&so(a,u,l,d,c,h,b.x,b.y)&&en(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=v;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&so(a,u,l,d,c,h,S.x,S.y)&&en(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=x;){if(b.x>=f&&b.x<=_&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&so(a,u,l,d,c,h,b.x,b.y)&&en(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function x_(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ns(n,i)&&Mm(n,t,t.next,i)&&Do(n,i)&&Do(i,n)&&(e.push(n.i,t.i,i.i),Lo(t),Lo(t.next),t=r=i),t=t.next}while(t!==r);return Wr(t)}function y_(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&P_(o,a)){let l=Sm(o,a);o=Wr(o,o.next),l=Wr(l,l.next),Io(o,e,t,n,i,s,0),Io(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function M_(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=xm(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(C_(c))}i.sort(S_);for(let s=0;s<i.length;s++)t=b_(i[s],t);return t}function S_(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function b_(r,e){const t=w_(r,e);if(!t)return e;const n=Sm(t,r);return Wr(n,n.next),Wr(t,t.next)}function w_(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Ns(r,t))return t;do{if(Ns(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ym(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Do(t,r)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&T_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function T_(r,e){return en(r.prev,r,e.prev)<0&&en(e.next,r,r.next)<0}function A_(r,e,t,n){let i=r;do i.z===0&&(i.z=Hu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,E_(i)}function E_(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Hu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function C_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ym(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function so(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&ym(r,e,t,n,i,s,o,a)}function P_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!R_(r,e)&&(Do(r,e)&&Do(e,r)&&I_(r,e)&&(en(r.prev,r,e.prev)||en(r,e.prev,e))||Ns(r,e)&&en(r.prev,r,r.next)>0&&en(e.prev,e,e.next)>0)}function en(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ns(r,e){return r.x===e.x&&r.y===e.y}function Mm(r,e,t,n){const i=Ia(en(r,e,t)),s=Ia(en(r,e,n)),o=Ia(en(t,n,r)),a=Ia(en(t,n,e));return!!(i!==s&&o!==a||i===0&&Ra(r,t,e)||s===0&&Ra(r,n,e)||o===0&&Ra(t,r,n)||a===0&&Ra(t,e,n))}function Ra(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ia(r){return r>0?1:r<0?-1:0}function R_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Mm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Do(r,e){return en(r.prev,r,r.next)<0?en(r,e,r.next)>=0&&en(r,r.prev,e)>=0:en(r,e,r.prev)<0||en(r,r.next,e)<0}function I_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Sm(r,e){const t=Wu(r.i,r.x,r.y),n=Wu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function lf(r,e,t,n){const i=Wu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Lo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Wu(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function D_(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class L_{static triangulate(e,t,n=2){return g_(e,t,n)}}class di{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];cf(e),uf(n,e);let o=e.length;t.forEach(cf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,uf(n,t[l]);const a=L_.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function cf(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function uf(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class gc extends Rt{constructor(e=new Ti([new We(.5,.5),new We(-.5,.5),new We(-.5,-.5),new We(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new dt(i,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:N_;let S,b=!1,I,A,D,w;if(v){S=v.getSpacedPoints(u),b=!0,h=!1;const ie=v.isCatmullRomCurve3?v.closed:!1;I=v.computeFrenetFrames(u,ie),A=new B,D=new B,w=new B}h||(g=0,f=0,m=0,_=0);const E=a.extractPoints(c);let O=E.shape;const U=E.holes;if(!di.isClockWise(O)){O=O.reverse();for(let ie=0,pe=U.length;ie<pe;ie++){const ue=U[ie];di.isClockWise(ue)&&(U[ie]=ue.reverse())}}function ne(ie){const ue=10000000000000001e-36;let Ae=ie[0];for(let N=1;N<=ie.length;N++){const Se=N%ie.length,Ce=ie[Se],Ie=Ce.x-Ae.x,ye=Ce.y-Ae.y,L=Ie*Ie+ye*ye,T=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(Ae.x),Math.abs(Ae.y)),W=ue*T*T;if(L<=W){ie.splice(Se,1),N--;continue}Ae=Ce}}ne(O),U.forEach(ne);const K=U.length,he=O;for(let ie=0;ie<K;ie++){const pe=U[ie];O=O.concat(pe)}function fe(ie,pe,ue){return pe||St("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(pe,ue)}const ae=O.length;function X(ie,pe,ue){let Ae,N,Se;const Ce=ie.x-pe.x,Ie=ie.y-pe.y,ye=ue.x-ie.x,L=ue.y-ie.y,T=Ce*Ce+Ie*Ie,W=Ce*L-Ie*ye;if(Math.abs(W)>Number.EPSILON){const ve=Math.sqrt(T),Ne=Math.sqrt(ye*ye+L*L),_e=pe.x-Ie/ve,Pe=pe.y+Ce/ve,Me=ue.x-L/Ne,He=ue.y+ye/Ne,qe=((Me-_e)*L-(He-Pe)*ye)/(Ce*L-Ie*ye);Ae=_e+Ce*qe-ie.x,N=Pe+Ie*qe-ie.y;const Ee=Ae*Ae+N*N;if(Ee<=2)return new We(Ae,N);Se=Math.sqrt(Ee/2)}else{let ve=!1;Ce>Number.EPSILON?ye>Number.EPSILON&&(ve=!0):Ce<-Number.EPSILON?ye<-Number.EPSILON&&(ve=!0):Math.sign(Ie)===Math.sign(L)&&(ve=!0),ve?(Ae=-Ie,N=Ce,Se=Math.sqrt(T)):(Ae=Ce,N=Ie,Se=Math.sqrt(T/2))}return new We(Ae/Se,N/Se)}const j=[];for(let ie=0,pe=he.length,ue=pe-1,Ae=ie+1;ie<pe;ie++,ue++,Ae++)ue===pe&&(ue=0),Ae===pe&&(Ae=0),j[ie]=X(he[ie],he[ue],he[Ae]);const me=[];let Re,be=j.concat();for(let ie=0,pe=K;ie<pe;ie++){const ue=U[ie];Re=[];for(let Ae=0,N=ue.length,Se=N-1,Ce=Ae+1;Ae<N;Ae++,Se++,Ce++)Se===N&&(Se=0),Ce===N&&(Ce=0),Re[Ae]=X(ue[Ae],ue[Se],ue[Ce]);me.push(Re),be=be.concat(Re)}let Ve;if(g===0)Ve=di.triangulateShape(he,U);else{const ie=[],pe=[];for(let ue=0;ue<g;ue++){const Ae=ue/g,N=f*Math.cos(Ae*Math.PI/2),Se=m*Math.sin(Ae*Math.PI/2)+_;for(let Ce=0,Ie=he.length;Ce<Ie;Ce++){const ye=fe(he[Ce],j[Ce],Se);xe(ye.x,ye.y,-N),Ae===0&&ie.push(ye)}for(let Ce=0,Ie=K;Ce<Ie;Ce++){const ye=U[Ce];Re=me[Ce];const L=[];for(let T=0,W=ye.length;T<W;T++){const ve=fe(ye[T],Re[T],Se);xe(ve.x,ve.y,-N),Ae===0&&L.push(ve)}Ae===0&&pe.push(L)}}Ve=di.triangulateShape(ie,pe)}const Qe=Ve.length,Ge=m+_;for(let ie=0;ie<ae;ie++){const pe=h?fe(O[ie],be[ie],Ge):O[ie];b?(D.copy(I.normals[0]).multiplyScalar(pe.x),A.copy(I.binormals[0]).multiplyScalar(pe.y),w.copy(S[0]).add(D).add(A),xe(w.x,w.y,w.z)):xe(pe.x,pe.y,0)}for(let ie=1;ie<=u;ie++)for(let pe=0;pe<ae;pe++){const ue=h?fe(O[pe],be[pe],Ge):O[pe];b?(D.copy(I.normals[ie]).multiplyScalar(ue.x),A.copy(I.binormals[ie]).multiplyScalar(ue.y),w.copy(S[ie]).add(D).add(A),xe(w.x,w.y,w.z)):xe(ue.x,ue.y,d/u*ie)}for(let ie=g-1;ie>=0;ie--){const pe=ie/g,ue=f*Math.cos(pe*Math.PI/2),Ae=m*Math.sin(pe*Math.PI/2)+_;for(let N=0,Se=he.length;N<Se;N++){const Ce=fe(he[N],j[N],Ae);xe(Ce.x,Ce.y,d+ue)}for(let N=0,Se=U.length;N<Se;N++){const Ce=U[N];Re=me[N];for(let Ie=0,ye=Ce.length;Ie<ye;Ie++){const L=fe(Ce[Ie],Re[Ie],Ae);b?xe(L.x,L.y+S[u-1].y,S[u-1].x+ue):xe(L.x,L.y,d+ue)}}}oe(),te();function oe(){const ie=i.length/3;if(h){let pe=0,ue=ae*pe;for(let Ae=0;Ae<Qe;Ae++){const N=Ve[Ae];Le(N[2]+ue,N[1]+ue,N[0]+ue)}pe=u+g*2,ue=ae*pe;for(let Ae=0;Ae<Qe;Ae++){const N=Ve[Ae];Le(N[0]+ue,N[1]+ue,N[2]+ue)}}else{for(let pe=0;pe<Qe;pe++){const ue=Ve[pe];Le(ue[2],ue[1],ue[0])}for(let pe=0;pe<Qe;pe++){const ue=Ve[pe];Le(ue[0]+ae*u,ue[1]+ae*u,ue[2]+ae*u)}}n.addGroup(ie,i.length/3-ie,0)}function te(){const ie=i.length/3;let pe=0;re(he,pe),pe+=he.length;for(let ue=0,Ae=U.length;ue<Ae;ue++){const N=U[ue];re(N,pe),pe+=N.length}n.addGroup(ie,i.length/3-ie,1)}function re(ie,pe){let ue=ie.length;for(;--ue>=0;){const Ae=ue;let N=ue-1;N<0&&(N=ie.length-1);for(let Se=0,Ce=u+g*2;Se<Ce;Se++){const Ie=ae*Se,ye=ae*(Se+1),L=pe+Ae+Ie,T=pe+N+Ie,W=pe+N+ye,ve=pe+Ae+ye;Te(L,T,W,ve)}}}function xe(ie,pe,ue){l.push(ie),l.push(pe),l.push(ue)}function Le(ie,pe,ue){$e(ie),$e(pe),$e(ue);const Ae=i.length/3,N=x.generateTopUV(n,i,Ae-3,Ae-2,Ae-1);Oe(N[0]),Oe(N[1]),Oe(N[2])}function Te(ie,pe,ue,Ae){$e(ie),$e(pe),$e(Ae),$e(pe),$e(ue),$e(Ae);const N=i.length/3,Se=x.generateSideWallUV(n,i,N-6,N-3,N-2,N-1);Oe(Se[0]),Oe(Se[1]),Oe(Se[3]),Oe(Se[1]),Oe(Se[2]),Oe(Se[3])}function $e(ie){i.push(l[ie*3+0]),i.push(l[ie*3+1]),i.push(l[ie*3+2])}function Oe(ie){s.push(ie.x),s.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return U_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new zl[i.type]().fromJSON(i)),new gc(n,e.options)}}const N_={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new We(s,o),new We(a,l),new We(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[s*3],g=e[s*3+1],v=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new We(o,1-l),new We(c,1-d),new We(h,1-m),new We(_,1-v)]:[new We(a,1-l),new We(u,1-d),new We(f,1-m),new We(g,1-v)]}};function U_(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class vc extends mr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vc(e.radius,e.detail)}}class _c extends Rt{constructor(e=[new We(0,-.5),new We(.5,0),new We(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pt(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,d=new B,h=new We,f=new B,m=new B,_=new B;let g=0,v=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,v=e[x+1].y-e[x].y,f.x=v*1,f.y=-g,f.z=v*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,v=e[x+1].y-e[x].y,f.x=v*1,f.y=-g,f.z=v*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let x=0;x<=t;x++){const S=n+x*u*i,b=Math.sin(S),I=Math.cos(S);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*b,d.y=e[A].y,d.z=e[A].x*I,o.push(d.x,d.y,d.z),h.x=x/t,h.y=A/(e.length-1),a.push(h.x,h.y);const D=l[3*A+0]*b,w=l[3*A+1],E=l[3*A+0]*I;c.push(D,w,E)}}for(let x=0;x<t;x++)for(let S=0;S<e.length-1;S++){const b=S+x*e.length,I=b,A=b+e.length,D=b+e.length+1,w=b+1;s.push(I,A,w),s.push(D,w,A)}this.setIndex(s),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.points,e.segments,e.phiStart,e.phiLength)}}class Xo extends mr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xo(e.radius,e.detail)}}class Bs extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],m=[],_=[],g=[];for(let v=0;v<u;v++){const x=v*h-o;for(let S=0;S<c;S++){const b=S*d-s;m.push(b,-x,0),_.push(0,0,1),g.push(S/a),g.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const S=x+c*v,b=x+c*(v+1),I=x+1+c*(v+1),A=x+1+c*v;f.push(S,b,A),f.push(b,I,A)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class xc extends Rt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,f=new B,m=new We;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const v=s+g/n*o;f.x=d*Math.cos(v),f.y=d*Math.sin(v),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let _=0;_<i;_++){const g=_*(n+1);for(let v=0;v<n;v++){const x=v+g,S=x,b=x+n+1,I=x+n+2,A=x+1;a.push(S,b,A),a.push(b,I,A)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yc extends Rt{constructor(e=new Ti([new We(0,.5),new We(-.5,-.5),new We(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(i,3)),this.setAttribute("normal",new dt(s,3)),this.setAttribute("uv",new dt(o,2));function c(u){const d=i.length/3,h=u.extractPoints(t);let f=h.shape;const m=h.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,v=m.length;g<v;g++){const x=m[g];di.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=di.triangulateShape(f,m);for(let g=0,v=m.length;g<v;g++){const x=m[g];f=f.concat(x)}for(let g=0,v=f.length;g<v;g++){const x=f[g];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,v=_.length;g<v;g++){const x=_[g],S=x[0]+d,b=x[1]+d,I=x[2]+d;n.push(S,b,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return F_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new yc(n,e.curveSegments)}}function F_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class qo extends Rt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new B,h=new B,f=[],m=[],_=[],g=[];for(let v=0;v<=n;v++){const x=[],S=v/n;let b=0;v===0&&o===0?b=.5/t:v===n&&l===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const A=I/t;d.x=-e*Math.cos(i+A*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(i+A*s)*Math.sin(o+S*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(A+b,1-S),x.push(c++)}u.push(x)}for(let v=0;v<n;v++)for(let x=0;x<t;x++){const S=u[v][x+1],b=u[v][x],I=u[v+1][x],A=u[v+1][x+1];(v!==0||o>0)&&f.push(S,b,A),(v!==n-1||l<Math.PI)&&f.push(b,I,A)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mc extends mr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mc(e.radius,e.detail)}}class Sc extends Rt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new B,f=new B,m=new B;for(let _=0;_<=n;_++){const g=o+_/n*a;for(let v=0;v<=i;v++){const x=v/i*s;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(v/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){const v=(i+1)*_+g-1,x=(i+1)*(_-1)+g-1,S=(i+1)*(_-1)+g,b=(i+1)*_+g;l.push(v,x,b),l.push(x,S,b)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bc extends Rt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],d=new B,h=new B,f=new B,m=new B,_=new B,g=new B,v=new B;for(let S=0;S<=n;++S){const b=S/n*s*Math.PI*2;x(b,s,o,e,f),x(b+.01,s,o,e,m),g.subVectors(m,f),v.addVectors(m,f),_.crossVectors(g,v),v.crossVectors(_,g),_.normalize(),v.normalize();for(let I=0;I<=i;++I){const A=I/i*Math.PI*2,D=-t*Math.cos(A),w=t*Math.sin(A);d.x=f.x+(D*v.x+w*_.x),d.y=f.y+(D*v.y+w*_.y),d.z=f.z+(D*v.z+w*_.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(S/n),u.push(I/i)}}for(let S=1;S<=n;S++)for(let b=1;b<=i;b++){const I=(i+1)*(S-1)+(b-1),A=(i+1)*S+(b-1),D=(i+1)*S+b,w=(i+1)*(S-1)+b;a.push(I,A,w),a.push(A,D,w)}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2));function x(S,b,I,A,D){const w=Math.cos(S),E=Math.sin(S),O=I/b*S,U=Math.cos(O);D.x=A*(2+U)*.5*w,D.y=A*(2+U)*E*.5,D.z=A*Math.sin(O)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class wc extends Rt{constructor(e=new Fh(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new We;let u=new B;const d=[],h=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function _(){for(let S=0;S<t;S++)g(S);g(s===!1?t:0),x(),v()}function g(S){u=e.getPointAt(S/t,u);const b=o.normals[S],I=o.binormals[S];for(let A=0;A<=i;A++){const D=A/i*Math.PI*2,w=Math.sin(D),E=-Math.cos(D);l.x=E*b.x+w*I.x,l.y=E*b.y+w*I.y,l.z=E*b.z+w*I.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function v(){for(let S=1;S<=t;S++)for(let b=1;b<=i;b++){const I=(i+1)*(S-1)+(b-1),A=(i+1)*S+(b-1),D=(i+1)*S+b,w=(i+1)*(S-1)+b;m.push(I,A,w),m.push(A,D,w)}}function x(){for(let S=0;S<=t;S++)for(let b=0;b<=i;b++)c.x=S/t,c.y=b/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new wc(new zl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class bm extends Rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new B,s=new B;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let m=h,_=h+f;m<_;m+=3)for(let g=0;g<3;g++){const v=a.getX(m+g),x=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,v),s.fromBufferAttribute(o,x),hf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),hf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function hf(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var df=Object.freeze({__proto__:null,BoxGeometry:qr,CapsuleGeometry:dc,CircleGeometry:fc,ConeGeometry:Wo,CylinderGeometry:Ho,DodecahedronGeometry:pc,EdgesGeometry:fm,ExtrudeGeometry:gc,IcosahedronGeometry:vc,LatheGeometry:_c,OctahedronGeometry:Xo,PlaneGeometry:Bs,PolyhedronGeometry:mr,RingGeometry:xc,ShapeGeometry:yc,SphereGeometry:qo,TetrahedronGeometry:Mc,TorusGeometry:Sc,TorusKnotGeometry:bc,TubeGeometry:wc,WireframeGeometry:bm});class wm extends En{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ht(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Us(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const n=Us(r[t]);for(const i in n)e[i]=n[i]}return e}function O_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const Bh={clone:Us,merge:Pn};var B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=O_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zh extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $h extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Am extends $h{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Em extends En{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cm extends En{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Pm extends En{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Rm extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kh extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vh extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Im extends En{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ht(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dm extends On{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Or(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Lm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Gh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function $_(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){d.push(c.times[f]);for(let _=0;_<u;++_)h.push(c.values[f*u+_])}}d.length!==0&&(c.times=Or(d,c.times.constructor),c.values=Or(h,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function k_(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(v){return v.name===a.name&&v.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const m=a.times.length-1;let _;if(s<=a.times[0]){const v=u,x=d-u;_=a.values.slice(v,x)}else if(s>=a.times[m]){const v=m*d+u,x=v+d-u;_=a.values.slice(v,x)}else{const v=a.createInterpolant(),x=u,S=d-u;v.evaluate(s),_=v.resultBuffer.slice(x,S)}l==="quaternion"&&new Nn().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let v=0;v<g;++v){const x=v*f+h;if(l==="quaternion")Nn.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{const S=f-h*2;for(let b=0;b<S;++b)c.values[x+b]-=_[b]}}}return r.blendMode=Sh,r}class V_{static convertArray(e,t){return Or(e,t)}static isTypedArray(e){return jp(e)}static getKeyframeOrder(e){return Lm(e)}static sortedArray(e,t,n){return Xu(e,t,n)}static flattenJSON(e,t,n,i){Gh(e,t,n,i)}static subclip(e,t,n,i,s=30){return $_(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return k_(e,t,n,i)}}class zs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nm extends zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ur,endingEnd:Ur}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fr:s=e,a=2*t-n;break;case To:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fr:o=e,l=2*n-t;break;case To:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,v=-h*g+2*h*_-h*m,x=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,S=(-1-f)*g+(1.5+f)*_+.5*m,b=f*g-f*_;for(let I=0;I!==a;++I)s[I]=v*o[u+I]+x*o[c+I]+S*o[l+I]+b*o[d+I];return s}}class Hh extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class Um extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fm extends zs{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const _=(n-t)/(i-t),g=1-_;for(let v=0;v!==a;++v)s[v]=o[c+v]*g+o[l+v]*_;return s}const f=a*2,m=e-1;for(let _=0;_!==a;++_){const g=o[c+_],v=o[l+_],x=m*f+_*2,S=h[x],b=h[x+1],I=e*f+_*2,A=d[I],D=d[I+1];let w=(n-t)/(i-t),E,O,U,H,ne;for(let K=0;K<8;K++){E=w*w,O=E*w,U=1-w,H=U*U,ne=H*U;const fe=ne*t+3*H*w*S+3*U*E*A+O*i-n;if(Math.abs(fe)<1e-10)break;const ae=3*H*(S-t)+6*U*w*(A-S)+3*E*(i-A);if(Math.abs(ae)<1e-10)break;w=w-fe/ae,w=Math.max(0,Math.min(1,w))}s[_]=ne*g+3*H*w*b+3*U*E*D+O*v}return s}}class si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Um(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Fm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Fl:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break;case $u:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return $u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(St("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(St("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){St("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){St("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&jp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){St("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){const _=t[d+m];if(_!==t[h+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Fl;class Yr extends si{constructor(e,t,n){super(e,t,n)}}Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=wo;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wh extends si{constructor(e,t,n,i){super(e,t,n,i)}}Wh.prototype.ValueTypeName="color";class No extends si{constructor(e,t,n,i){super(e,t,n,i)}}No.prototype.ValueTypeName="number";class Om extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Nn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Yo extends si{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Om(this.times,this.values,this.getValueSize(),e)}}Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends si{constructor(e,t,n){super(e,t,n)}}Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=wo;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends si{constructor(e,t,n,i){super(e,t,n,i)}}Uo.prototype.ValueTypeName="vector";class Fo{constructor(e="",t=-1,n=[],i=ec){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(H_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(si.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Lm(l);l=Xu(l,1,u),c=Xu(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new No(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(lt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return St("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,m,_){if(f.length!==0){const g=[],v=[];Gh(f,g,v,m),g.length!==0&&_.push(new d(h,g,v))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)f[h[m].morphTargets[_]]=-1;for(const _ in f){const g=[],v=[];for(let x=0;x!==h[m].morphTargets.length;++x){const S=h[m];g.push(S.time),v.push(S.morphTarget===_?1:0)}i.push(new No(".morphTargetInfluence["+_+"]",g,v))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(Uo,f+".position",h,"pos",i),n(Yo,f+".quaternion",h,"rot",i),n(Uo,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function G_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return No;case"vector":case"vector2":case"vector3":case"vector4":return Uo;case"color":return Wh;case"quaternion":return Yo;case"bool":case"boolean":return Yr;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function H_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=G_(r.type);if(r.times===void 0){const t=[],n=[];Gh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(ff(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!ff(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function ff(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Xh{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Jr=new Xh;class Xn{constructor(e){this.manager=e!==void 0?e:Jr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class W_ extends Error{constructor(e,t){super(e),this.response=t}}class Xi extends Xn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:i});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&lt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0;let _=0;const g=new ReadableStream({start(v){x();function x(){d.read().then(({done:S,value:b})=>{if(S)v.close();else{_+=b.byteLength;const I=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,D=u.length;A<D;A++){const w=u[A];w.onProgress&&w.onProgress(I)}v.enqueue(b),x()}},S=>{v.error(S)})}}});return new Response(g)}else throw new W_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{bi.add(`file:${e}`,c);const u=Bi[e];delete Bi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class X_ extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Xi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):St(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Fo.parse(e[n]);t.push(i)}return t}}class q_ extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new hc,l=new Xi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(d){l.load(e[d],function(h){const f=s.parse(h,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=Zt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){const h=s.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let m=0;m<f;m++){o[m]={mipmaps:[]};for(let _=0;_<h.mipmapCount;_++)o[m].mipmaps.push(h.mipmaps[m*h.mipmapCount+_]),o[m].format=h.format,o[m].width=h.width,o[m].height=h.height}a.image=o}else a.image.width=h.width,a.image.height=h.height,a.mipmaps=h.mipmaps;h.mipmapCount===1&&(a.minFilter=Zt),a.format=h.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}const ps=new WeakMap;class Oo extends Xn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=ps.get(o);d===void 0&&(d=[],ps.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Co("img");function l(){u(),t&&t(this);const d=ps.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}ps.delete(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),bi.remove(`image:${e}`);const h=ps.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onError&&m.onError(d)}ps.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Y_ extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=new Go;s.colorSpace=$n;const o=new Oo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Z_ extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new pi,a=new Xi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{u(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Gn,o.wrapT=c.wrapT!==void 0?c.wrapT:Gn,o.magFilter=c.magFilter!==void 0?c.magFilter:Zt,o.minFilter=c.minFilter!==void 0?c.minFilter:Zt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Si),c.mipmapCount===1&&(o.minFilter=Zt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class J_ extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=new on,o=new Oo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class gr extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Bm extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xu=new At,pf=new B,mf=new B;class qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Gr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Da=new B,La=new Nn,xi=new B;class Tc extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Da,La,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,La,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Da,La,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,La,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new B,gf=new We,vf=new We;class vn extends Tc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,gf,vf),t.subVectors(vf,gf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class K_ extends qh{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zm extends gr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new K_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class j_ extends qh{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class $m extends gr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class $s extends Tc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q_ extends qh{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yh extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Q_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Zh extends gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class km extends gr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Jh{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new B)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Vm extends gr{constructor(e=new Jh,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ac extends Xn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Xi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):St(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&lt("MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new ht().setHex(o.value);break;case"v2":i.uniforms[s].value=new We().fromArray(o.value);break;case"v3":i.uniforms[s].value=new B().fromArray(o.value);break;case"v4":i.uniforms[s].value=new kt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new It().fromArray(o.value);break;case"m4":i.uniforms[s].value=new At().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new We().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Ac.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:wm,SpriteMaterial:Ch,RawShaderMaterial:zh,ShaderMaterial:ri,PointsMaterial:Rh,MeshPhysicalMaterial:Am,MeshStandardMaterial:$h,MeshPhongMaterial:Em,MeshToonMaterial:Cm,MeshNormalMaterial:Pm,MeshLambertMaterial:Rm,MeshDepthMaterial:kh,MeshDistanceMaterial:Vh,MeshBasicMaterial:qi,MeshMatcapMaterial:Im,LineDashedMaterial:Dm,LineBasicMaterial:On,Material:En};return new t[e]}}class qu{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Gm extends Rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Hm extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Xi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):St(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const g=f.interleavedBuffers[m],v=s(f,g.buffer),x=bs(g.type,v),S=new lc(x,g.stride);return S.uuid=g.uuid,t[m]=S,S}function s(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],v=new Uint32Array(g).buffer;return n[m]=v,v}const o=e.isInstancedBufferGeometry?new Gm:new Rt,a=e.data.index;if(a!==void 0){const f=bs(a.type,a.array);o.setIndex(new Wt(f,1))}const l=e.data.attributes;for(const f in l){const m=l[f];let _;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);_=new Hr(g,m.itemSize,m.offset,m.normalized)}else{const g=bs(m.type,m.array),v=m.isInstancedBufferAttribute?Ds:Wt;_=new v(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(f,_)}const c=e.data.morphAttributes;if(c)for(const f in c){const m=c[f],_=[];for(let g=0,v=m.length;g<v;g++){const x=m[g];let S;if(x.isInterleavedBufferAttribute){const b=i(e.data,x.data);S=new Hr(b,x.itemSize,x.offset,x.normalized)}else{const b=bs(x.type,x.array);S=new Wt(b,x.itemSize,x.normalized)}x.name!==void 0&&(S.name=x.name),_.push(S)}o.morphAttributes[f]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,m=d.length;f!==m;++f){const _=d[f];o.addGroup(_.start,_.count,_.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(o.boundingSphere=new mn().fromJSON(h)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class ex extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?qu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Xi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),d("ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),St("ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?qu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Xi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t);let a;try{a=JSON.parse(o)}catch(c){throw new Error("ObjectLoader: Can't parse "+e+". "+c.message)}const l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(const h in o)if(o[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Ti().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new cc().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Hm;for(let s=0,o=e.length;s<o;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in df?a=df[l.type].fromJSON(l,t):lt(`ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Ac;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Fo.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:bs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Xh(t);s=new Oo(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],h=d.url;if(Array.isArray(h)){const f=[];for(let m=0,_=h.length;m<_;m++){const g=h[m],v=a(g);v!==null&&(v instanceof HTMLImageElement?f.push(v):f.push(new pi(v.data,v.width,v.height)))}i[d.uuid]=new lr(f)}else{const f=a(d.url);i[d.uuid]=new lr(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:bs(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Oo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=await s(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new pi(m.data,m.width,m.height)))}n[l.uuid]=new lr(u)}else{const u=await s(l.url);n[l.uuid]=new lr(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(lt("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&lt('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&lt("ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let u;Array.isArray(c)?(u=new Go,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new pi:u=new on,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,tx)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],_f),u.wrapT=n(a.wrap[1],_f)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,xf)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,xf)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(h){return t[h]===void 0&&lt("ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let m=0,_=h.length;m<_;m++){const g=h[m];n[g]===void 0&&lt("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&lt("ObjectLoader: Undefined material",h),n[h]}}function c(h){return i[h]===void 0&&lt("ObjectLoader: Undefined texture",h),i[h]}let u,d;switch(e.type){case"Scene":o=new Th,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new ht(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new ac(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new oc(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new vn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new $s(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Zh(e.color,e.intensity);break;case"DirectionalLight":o=new Yh(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new $m(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new km(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new zm(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new Bm(e.color,e.groundColor,e.intensity);break;case"LightProbe":const h=new Jh().fromArray(e.sh);o=new Vm(h,e.intensity);break;case"SkinnedMesh":u=a(e.geometry),d=l(e.material),o=new om(u,d),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),d=l(e.material),o=new an(u,d);break;case"InstancedMesh":u=a(e.geometry),d=l(e.material);const f=e.count,m=e.instanceMatrix,_=e.instanceColor;o=new am(u,d,f),o.instanceMatrix=new Ds(new Float32Array(m.array),16),_!==void 0&&(o.instanceColor=new Ds(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":u=a(e.geometry),d=l(e.material),o=new lm(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(g=>{let v=null,x=null;return g.boundingBox!==void 0&&(v=new pn().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(x=new mn().fromJSON(g.boundingSphere)),{...g,boundingBox:v,boundingSphere:x}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new mn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new pn().fromJSON(e.boundingBox));break;case"LOD":o=new sm;break;case"Line":o=new dr(a(e.geometry),l(e.material));break;case"LineLoop":o=new cm(a(e.geometry),l(e.material));break;case"LineSegments":o=new Ri(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new um(a(e.geometry),l(e.material));break;case"Sprite":o=new rm(l(e.material));break;case"Group":o=new ws;break;case"Bone":o=new Ph;break;default:o=new Bt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.pivot!==void 0&&(o.pivot=new B().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.static!==void 0&&(o.static=e.static),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let f=0;f<h.length;f++)o.add(this.parseObject(h[f],t,n,i,s))}if(e.animations!==void 0){const h=e.animations;for(let f=0;f<h.length;f++){const m=h[f];o.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const h=e.levels;for(let f=0;f<h.length;f++){const m=h[f],_=o.getObjectByProperty("uuid",m.object);_!==void 0&&o.addLevel(_,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?lt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Bt}})}}const tx={UVMapping:ql,CubeReflectionMapping:Ai,CubeRefractionMapping:ur,EquirectangularReflectionMapping:co,EquirectangularRefractionMapping:uo,CubeUVReflectionMapping:Fs},_f={RepeatWrapping:So,ClampToEdgeWrapping:Gn,MirroredRepeatWrapping:bo},xf={NearestFilter:un,NearestMipmapNearestFilter:mh,NearestMipmapLinearFilter:Ss,LinearFilter:Zt,LinearMipmapNearestFilter:ho,LinearMipmapLinearFilter:Si},yu=new WeakMap;class nx extends Xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&lt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&lt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(yu.has(o)===!0)i&&i(yu.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return bi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),yu.set(l,c),bi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Na;class Kh{static getContext(){return Na===void 0&&(Na=new(window.AudioContext||window.webkitAudioContext)),Na}static setContext(e){Na=e}}class ix extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Xi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);Kh.getContext().decodeAudioData(c,function(d){t(d)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):St(l),s.manager.itemError(e)}}}const yf=new At,Mf=new At,wr=new At;class rx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new vn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new vn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,wr.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(zr*t.fov*.5)/t.zoom;let a,l;Mf.elements[12]=-i,yf.elements[12]=i,a=-o*t.aspect+s,l=o*t.aspect+s,wr.elements[0]=2*t.near/(l-a),wr.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(wr),a=-o*t.aspect-s,l=o*t.aspect-s,wr.elements[0]=2*t.near/(l-a),wr.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(wr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Mf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(yf)}}const ms=-90,gs=1;class Wm extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(ms,gs,e,t);i.layers=this.layers,this.add(i);const s=new vn(ms,gs,e,t);s.layers=this.layers,this.add(s);const o=new vn(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new vn(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new vn(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new vn(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xm extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function sx(){this._document.hidden===!1&&this.reset()}const Tr=new B,Mu=new Nn,ox=new B,Ar=new B,Er=new B;class ax extends Bt{constructor(){super(),this.type="AudioListener",this.context=Kh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new qm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Tr,Mu,ox),Ar.set(0,0,-1).applyQuaternion(Mu),Er.set(0,1,0).applyQuaternion(Mu),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Tr.x,n),t.positionY.linearRampToValueAtTime(Tr.y,n),t.positionZ.linearRampToValueAtTime(Tr.z,n),t.forwardX.linearRampToValueAtTime(Ar.x,n),t.forwardY.linearRampToValueAtTime(Ar.y,n),t.forwardZ.linearRampToValueAtTime(Ar.z,n),t.upX.linearRampToValueAtTime(Er.x,n),t.upY.linearRampToValueAtTime(Er.y,n),t.upZ.linearRampToValueAtTime(Er.z,n)}else t.setPosition(Tr.x,Tr.y,Tr.z),t.setOrientation(Ar.x,Ar.y,Ar.z,Er.x,Er.y,Er.z)}}class Ym extends Bt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){lt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(lt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(lt("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Cr=new B,Sf=new Nn,lx=new B,Pr=new B;class cx extends Ym{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cr,Sf,lx),Pr.set(0,0,1).applyQuaternion(Sf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Cr.x,n),t.positionY.linearRampToValueAtTime(Cr.y,n),t.positionZ.linearRampToValueAtTime(Cr.z,n),t.orientationX.linearRampToValueAtTime(Pr.x,n),t.orientationY.linearRampToValueAtTime(Pr.y,n),t.orientationZ.linearRampToValueAtTime(Pr.z,n)}else t.setPosition(Cr.x,Cr.y,Cr.z),t.setOrientation(Pr.x,Pr.y,Pr.z)}}class ux{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Zm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Nn.multiplyQuaternionsFlat(e,o,e,t,e,n),Nn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const jh="\\[\\]\\.:\\/",hx=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",dx="[^"+jh.replace("\\.","")+"]",fx=/((?:WC+[\/:])*)/.source.replace("WC",Qh),px=/(WCOD+)?/.source.replace("WCOD",dx),mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),vx=new RegExp("^"+fx+px+mx+gx+"$"),_x=["material","materials","bones","map"];class xx{constructor(e,t,n){const i=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class zt{constructor(e,t,n){this.path=t,this.parsedPath=n||zt.parseTrackName(t),this.node=zt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new zt.Composite(e,t,n):new zt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(e){const t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);_x.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=zt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){St("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){St("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){St("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){St("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){St("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){St("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){St("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;St("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){St("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){St("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zt.Composite=xx;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=jn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(h);for(let _=0,g=o;_!==g;++_)s[_].push(new zt(h,n[_],i[_]))}else if(m<c){a=e[m];const _=--c,g=e[_];t[g.uuid]=m,e[m]=g,t[f]=_,e[_]=h;for(let v=0,x=o;v!==x;++v){const S=s[v],b=S[_];let I=S[m];S[m]=b,I===void 0&&(I=new zt(h,n[v],i[v])),S[_]=I}}else e[m]!==a&&St("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const d=s++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,m=i;f!==m;++f){const _=n[f],g=_[d],v=_[u];_[u]=g,_[d]=v}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<s){const h=--s,f=e[h],m=--o,_=e[m];t[f.uuid]=d,e[d]=f,t[_.uuid]=h,e[h]=_,e.pop();for(let g=0,v=i;g!==v;++g){const x=n[g],S=x[h],b=x[m];x[d]=S,x[h]=b,x.pop()}}else{const h=--o,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let m=0,_=i;m!==_;++m){const g=n[m];g[d]=g[h],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(d);for(let h=u,f=l.length;h!==f;++h){const m=l[h];d[h]=new zt(m,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class Jm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ur,endingEnd:Ur};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Sh:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ec:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Gp;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===kp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Fr,i.endingEnd=Fr):(e?i.endingStart=this.zeroSlopeAtStart?Fr:Ur:i.endingStart=To,t?i.endingEnd=this.zeroSlopeAtEnd?Fr:Ur:i.endingEnd=To)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const Mx=new Float32Array(1);class Sx extends Pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const h=i[d],f=h.name;let m=u[f];if(m!==void 0)++m.referenceCount,o[d]=m;else{if(m=o[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;m=new Zm(zt.create(n,f,_),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[d]=m}a[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Hh(new Float32Array(2),new Float32Array(2),1,Mx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Fo.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ec),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Jm(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Fo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class bx extends wh{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new rc(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class ed{constructor(e){this.value=e}clone(){return new ed(this.value.clone===void 0?this.value:this.value.clone())}}let wx=0;class Tx extends Pi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.usage=Eo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class Ax extends lc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ex{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const bf=new At;class Km{constructor(e,t,n=0,i=1/0){this.ray=new pr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):St("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bf),this}intersectObject(e,t=!0,n=[]){return Yu(e,this,n,t),n.sort(wf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Yu(e[i],this,n,t);return n.sort(wf),n}}function wf(r,e){return r.distance-e.distance}function Yu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Yu(s[o],e,t,!0)}}class Cx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Px{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rx{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class td{constructor(e,t,n,i){td.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Tf=new We;class Ix{constructor(e=new We(1/0,1/0),t=new We(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Af=new B,Ua=new B,vs=new B,_s=new B,Su=new B,Dx=new B,Lx=new B;class jm{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Af.subVectors(e,this.start),Ua.subVectors(this.end,this.start);const n=Ua.dot(Ua);let s=Ua.dot(Af)/n;return t&&(s=Pt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Dx,n=Lx){const i=10000000000000001e-32;let s,o;const a=this.start,l=e.start,c=this.end,u=e.end;vs.subVectors(c,a),_s.subVectors(u,l),Su.subVectors(a,l);const d=vs.dot(vs),h=_s.dot(_s),f=_s.dot(Su);if(d<=i&&h<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(d<=i)s=0,o=f/h,o=Pt(o,0,1);else{const m=vs.dot(Su);if(h<=i)o=0,s=Pt(-m/d,0,1);else{const _=vs.dot(_s),g=d*h-_*_;g!==0?s=Pt((_*f-m*h)/g,0,1):s=0,o=(_*s+f)/h,o<0?(o=0,s=Pt(-m/d,0,1)):o>1&&(o=1,s=Pt((_-m)/d,0,1))}}return t.copy(a).addScaledVector(vs,s),n.copy(l).addScaledVector(_s,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Ef=new B;class Nx extends Bt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Rt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new dt(i,3));const s=new On({fog:!1,toneMapped:!1});this.cone=new Ri(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Ef.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ef),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const rr=new B,Fa=new At,bu=new At;class Ux extends Ri{constructor(e){const t=Qm(e),n=new Rt,i=[],s=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new dt(i,3)),n.setAttribute("color",new dt(s,3));const o=new On({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new ht(255),l=new ht(65280);this.setColors(a,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");bu.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Fa.multiplyMatrices(bu,a.matrixWorld),rr.setFromMatrixPosition(Fa),i.setXYZ(o,rr.x,rr.y,rr.z),Fa.multiplyMatrices(bu,a.parent.matrixWorld),rr.setFromMatrixPosition(Fa),i.setXYZ(o+1,rr.x,rr.y,rr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qm(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...Qm(r.children[t]));return e}class Fx extends an{constructor(e,t,n){const i=new qo(t,4,2),s=new qi({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Ox=new B,Cf=new ht,Pf=new ht;class Bx extends Bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Xo(t);i.rotateY(Math.PI*.5),this.material=new qi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Wt(o,3)),this.add(new an(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Cf.copy(this.light.color),Pf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Cf:Pf;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Ox.setFromMatrixPosition(this.light.matrixWorld).negate())}}class zx extends Ri{constructor(e=10,t=10,n=4473924,i=8947848){n=new ht(n),i=new ht(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,m=-a;h<=t;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=h===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Rt;u.setAttribute("position",new dt(l,3)),u.setAttribute("color",new dt(c,3));const d=new On({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class $x extends Ri{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new ht(s),o=new ht(o);const a=[],l=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,m=Math.cos(h)*e;a.push(0,0,0),a.push(f,0,m);const _=d&1?s:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const h=d&1?s:o,f=e-e/n*d;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*f,v=Math.cos(_)*f;a.push(g,0,v),l.push(h.r,h.g,h.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*f,v=Math.cos(_)*f,a.push(g,0,v),l.push(h.r,h.g,h.b)}}const c=new Rt;c.setAttribute("position",new dt(a,3)),c.setAttribute("color",new dt(l,3));const u=new On({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Rf=new B,Oa=new B,If=new B;class kx extends Bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Rt;i.setAttribute("position",new dt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new On({fog:!1,toneMapped:!1});this.lightPlane=new dr(i,s),this.add(this.lightPlane),i=new Rt,i.setAttribute("position",new dt([0,0,0,0,0,1],3)),this.targetLine=new dr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Rf.setFromMatrixPosition(this.light.matrixWorld),Oa.setFromMatrixPosition(this.light.target.matrixWorld),If.subVectors(Oa,Rf),this.lightPlane.lookAt(Oa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Oa),this.targetLine.scale.z=If.length()}}const Ba=new B,rn=new Tc;class Vx extends Ri{constructor(e){const t=new Rt,n=new On({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,_){l(m),l(_)}function l(m){i.push(0,0,0),s.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}t.setAttribute("position",new dt(i,3)),t.setAttribute("color",new dt(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new ht(16755200),u=new ht(16711680),d=new ht(43775),h=new ht(16777215),f=new ht(3355443);this.setColors(c,u,d,h,f)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(rn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===Kn)s=-1,o=1;else if(this.camera.coordinateSystem===Gr)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);cn("c",t,e,rn,0,0,s),cn("t",t,e,rn,0,0,o),cn("n1",t,e,rn,-n,-i,s),cn("n2",t,e,rn,n,-i,s),cn("n3",t,e,rn,-n,i,s),cn("n4",t,e,rn,n,i,s),cn("f1",t,e,rn,-n,-i,o),cn("f2",t,e,rn,n,-i,o),cn("f3",t,e,rn,-n,i,o),cn("f4",t,e,rn,n,i,o),cn("u1",t,e,rn,n*.7,i*1.1,s),cn("u2",t,e,rn,-n*.7,i*1.1,s),cn("u3",t,e,rn,0,i*2,s),cn("cf1",t,e,rn,-n,0,o),cn("cf2",t,e,rn,n,0,o),cn("cf3",t,e,rn,0,-i,o),cn("cf4",t,e,rn,0,i,o),cn("cn1",t,e,rn,-n,0,s),cn("cn2",t,e,rn,n,0,s),cn("cn3",t,e,rn,0,-i,s),cn("cn4",t,e,rn,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function cn(r,e,t,n,i,s,o){Ba.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Ba.x,Ba.y,Ba.z)}}const za=new pn;class Gx extends Ri{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new Rt;s.setIndex(new Wt(n,1)),s.setAttribute("position",new Wt(i,3)),super(s,new On({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&za.setFromObject(this.object),za.isEmpty())return;const e=za.min,t=za.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hx extends Ri{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Rt;s.setIndex(new Wt(n,1)),s.setAttribute("position",new dt(i,3)),super(s,new On({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wx extends dr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Rt;o.setAttribute("position",new dt(s,3)),o.computeBoundingSphere(),super(o,new On({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Rt;l.setAttribute("position",new dt(a,3)),l.computeBoundingSphere(),this.add(new an(l,new qi({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Df=new B;let $a,wu;class Xx extends Bt{constructor(e=new B(0,0,1),t=new B(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",$a===void 0&&($a=new Rt,$a.setAttribute("position",new dt([0,0,0,0,1,0],3)),wu=new Wo(.5,1,5,1),wu.translate(0,-.5,0)),this.position.copy(t),this.line=new dr($a,new On({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new an(wu,new qi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Df.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Df,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class qx extends Ri{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Rt;i.setAttribute("position",new dt(t,3)),i.setAttribute("color",new dt(n,3));const s=new On({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ht,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yx{constructor(){this.type="ShapePath",this.color=new ht,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new $l,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const x=[];for(let S=0,b=v.length;S<b;S++){const I=v[S],A=new Ti;A.curves=I.curves,x.push(A)}return x}function n(v,x){const S=x.length;let b=!1;for(let I=S-1,A=0;A<S;I=A++){let D=x[I],w=x[A],E=w.x-D.x,O=w.y-D.y;if(Math.abs(O)>Number.EPSILON){if(O<0&&(D=x[A],E=-E,w=x[I],O=-O),v.y<D.y||v.y>w.y)continue;if(v.y===D.y){if(v.x===D.x)return!0}else{const U=O*(v.x-D.x)-E*(v.y-D.y);if(U===0)return!0;if(U<0)continue;b=!b}}else{if(v.y!==D.y)continue;if(w.x<=v.x&&v.x<=D.x||D.x<=v.x&&v.x<=w.x)return!0}}return b}const i=di.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ti,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const d=[],h=[];let f=[],m=0,_;h[m]=void 0,f[m]=[];for(let v=0,x=s.length;v<x;v++)a=s[v],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&h[m]&&m++,h[m]={s:new Ti,p:_},h[m].s.curves=a.curves,u&&m++,f[m]=[]):f[m].push({h:a,p:_[0]});if(!h[0])return t(s);if(h.length>1){let v=!1,x=0;for(let S=0,b=h.length;S<b;S++)d[S]=[];for(let S=0,b=h.length;S<b;S++){const I=f[S];for(let A=0;A<I.length;A++){const D=I[A];let w=!0;for(let E=0;E<h.length;E++)n(D.p,h[E].p)&&(S!==E&&x++,w?(w=!1,d[E].push(D)):v=!0);w&&d[S].push(D)}}x>0&&v===!1&&(f=d)}let g;for(let v=0,x=h.length;v<x;v++){l=h[v].s,c.push(l),g=f[v];for(let S=0,b=g.length;S<b;S++)l.holes.push(g[S].h)}return c}}class Zx extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jx(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function Kx(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function jx(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Zu(r,e,t,n){const i=Qx(n);switch(t){case yh:return r*e;case Kl:return r*e/i.components*i.byteLength;case Vo:return r*e/i.components*i.byteLength;case kr:return r*e*2/i.components*i.byteLength;case jl:return r*e*2/i.components*i.byteLength;case Mh:return r*e*3/i.components*i.byteLength;case Dn:return r*e*4/i.components*i.byteLength;case Ql:return r*e*4/i.components*i.byteLength;case fo:case po:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sl:case al:return Math.max(r,16)*Math.max(e,8)/4;case rl:case ol:return Math.max(r,8)*Math.max(e,8)/2;case ll:case cl:case hl:case dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ul:case fl:case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Rl:case Il:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Dl:case Ll:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Nl:case Ul:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qx(r){switch(r){case kn:case gh:return{byteLength:1,components:1};case Ps:case vh:case Ei:return{byteLength:2,components:1};case Zl:case Jl:return{byteLength:2,components:4};case ii:case Yl:case In:return{byteLength:4,components:1};case _h:case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class ey{static contain(e,t){return Jx(e,t)}static cover(e,t){return Kx(e,t)}static fill(e){return jx(e)}static getByteLength(e,t,n,i){return Zu(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);function eg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ty(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,my=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ey=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:hy,begin_vertex:dy,beginnormal_vertex:fy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:vy,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:xy,clipping_planes_vertex:yy,color_fragment:My,color_pars_fragment:Sy,color_pars_vertex:by,color_vertex:wy,common:Ty,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Ey,displacementmap_pars_vertex:Cy,displacementmap_vertex:Py,emissivemap_fragment:Ry,emissivemap_pars_fragment:Iy,colorspace_fragment:Dy,colorspace_pars_fragment:Ly,envmap_fragment:Ny,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Fy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:Yy,envmap_vertex:By,fog_vertex:zy,fog_pars_vertex:$y,fog_fragment:ky,fog_pars_fragment:Vy,gradientmap_pars_fragment:Gy,lightmap_pars_fragment:Hy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:Xy,lights_pars_begin:qy,lights_toon_fragment:Zy,lights_toon_pars_fragment:Jy,lights_phong_fragment:Ky,lights_phong_pars_fragment:jy,lights_physical_fragment:Qy,lights_physical_pars_fragment:eM,lights_fragment_begin:tM,lights_fragment_maps:nM,lights_fragment_end:iM,logdepthbuf_fragment:rM,logdepthbuf_pars_fragment:sM,logdepthbuf_pars_vertex:oM,logdepthbuf_vertex:aM,map_fragment:lM,map_pars_fragment:cM,map_particle_fragment:uM,map_particle_pars_fragment:hM,metalnessmap_fragment:dM,metalnessmap_pars_fragment:fM,morphinstance_vertex:pM,morphcolor_vertex:mM,morphnormal_vertex:gM,morphtarget_pars_vertex:vM,morphtarget_vertex:_M,normal_fragment_begin:xM,normal_fragment_maps:yM,normal_pars_fragment:MM,normal_pars_vertex:SM,normal_vertex:bM,normalmap_pars_fragment:wM,clearcoat_normal_fragment_begin:TM,clearcoat_normal_fragment_maps:AM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:CM,opaque_fragment:PM,packing:RM,premultiplied_alpha_fragment:IM,project_vertex:DM,dithering_fragment:LM,dithering_pars_fragment:NM,roughnessmap_fragment:UM,roughnessmap_pars_fragment:FM,shadowmap_pars_fragment:OM,shadowmap_pars_vertex:BM,shadowmap_vertex:zM,shadowmask_pars_fragment:$M,skinbase_vertex:kM,skinning_pars_vertex:VM,skinning_vertex:GM,skinnormal_vertex:HM,specularmap_fragment:WM,specularmap_pars_fragment:XM,tonemapping_fragment:qM,tonemapping_pars_fragment:YM,transmission_fragment:ZM,transmission_pars_fragment:JM,uv_pars_fragment:KM,uv_pars_vertex:jM,uv_vertex:QM,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distance_vert:cS,distance_frag:uS,equirect_vert:hS,equirect_frag:dS,linedashed_vert:fS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:vS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:yS,meshnormal_vert:MS,meshnormal_frag:SS,meshphong_vert:bS,meshphong_frag:wS,meshphysical_vert:TS,meshphysical_frag:AS,meshtoon_vert:ES,meshtoon_frag:CS,points_vert:PS,points_frag:RS,shadow_vert:IS,shadow_frag:DS,sprite_vert:LS,sprite_frag:NS},at={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},ni={basic:{uniforms:Pn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Pn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Pn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Pn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Pn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new ht(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Pn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Pn([at.points,at.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Pn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Pn([at.common,at.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Pn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Pn([at.sprite,at.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Pn([at.common,at.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Pn([at.lights,at.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ni.physical={uniforms:Pn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const ka={r:0,b:0,g:0},Rr=new ei,US=new At;function FS(r,e,t,n,i,s){const o=new ht(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const b=x.backgroundBlurriness>0;S=e.get(S,b)}return S}function m(x){let S=!1;const b=f(x);b===null?g(o,a):b&&b.isColor&&(g(b,1),S=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,S){const b=f(S);b&&(b.isCubeTexture||b.mapping===Fs)?(c===void 0&&(c=new an(new qr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Us(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Rr.copy(S.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(US.makeRotationFromEuler(Rr)),c.material.toneMapped=Ft.getTransfer(b.colorSpace)!==Vt,(u!==b||d!==b.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new an(new Bs(2,2),new ri({name:"BackgroundMaterial",uniforms:Us(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ft.getTransfer(b.colorSpace)!==Vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,S){x.getRGB(ka,Tm(r)),t.buffers.color.setClear(ka.r,ka.g,ka.b,S,s)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:m,addToRenderList:_,dispose:v}}function OS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(U,H,ne,K,he){let fe=!1;const ae=d(U,K,ne,H);s!==ae&&(s=ae,c(s.object)),fe=f(U,K,ne,he),fe&&m(U,K,ne,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(fe||o)&&(o=!1,b(U,H,ne,K),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function l(){return r.createVertexArray()}function c(U){return r.bindVertexArray(U)}function u(U){return r.deleteVertexArray(U)}function d(U,H,ne,K){const he=K.wireframe===!0;let fe=n[H.id];fe===void 0&&(fe={},n[H.id]=fe);const ae=U.isInstancedMesh===!0?U.id:0;let X=fe[ae];X===void 0&&(X={},fe[ae]=X);let j=X[ne.id];j===void 0&&(j={},X[ne.id]=j);let me=j[he];return me===void 0&&(me=h(l()),j[he]=me),me}function h(U){const H=[],ne=[],K=[];for(let he=0;he<t;he++)H[he]=0,ne[he]=0,K[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ne,attributeDivisors:K,object:U,attributes:{},index:null}}function f(U,H,ne,K){const he=s.attributes,fe=H.attributes;let ae=0;const X=ne.getAttributes();for(const j in X)if(X[j].location>=0){const Re=he[j];let be=fe[j];if(be===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(be=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(be=U.instanceColor)),Re===void 0||Re.attribute!==be||be&&Re.data!==be.data)return!0;ae++}return s.attributesNum!==ae||s.index!==K}function m(U,H,ne,K){const he={},fe=H.attributes;let ae=0;const X=ne.getAttributes();for(const j in X)if(X[j].location>=0){let Re=fe[j];Re===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(Re=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(Re=U.instanceColor));const be={};be.attribute=Re,Re&&Re.data&&(be.data=Re.data),he[j]=be,ae++}s.attributes=he,s.attributesNum=ae,s.index=K}function _(){const U=s.newAttributes;for(let H=0,ne=U.length;H<ne;H++)U[H]=0}function g(U){v(U,0)}function v(U,H){const ne=s.newAttributes,K=s.enabledAttributes,he=s.attributeDivisors;ne[U]=1,K[U]===0&&(r.enableVertexAttribArray(U),K[U]=1),he[U]!==H&&(r.vertexAttribDivisor(U,H),he[U]=H)}function x(){const U=s.newAttributes,H=s.enabledAttributes;for(let ne=0,K=H.length;ne<K;ne++)H[ne]!==U[ne]&&(r.disableVertexAttribArray(ne),H[ne]=0)}function S(U,H,ne,K,he,fe,ae){ae===!0?r.vertexAttribIPointer(U,H,ne,he,fe):r.vertexAttribPointer(U,H,ne,K,he,fe)}function b(U,H,ne,K){_();const he=K.attributes,fe=ne.getAttributes(),ae=H.defaultAttributeValues;for(const X in fe){const j=fe[X];if(j.location>=0){let me=he[X];if(me===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),me!==void 0){const Re=me.normalized,be=me.itemSize,Ve=e.get(me);if(Ve===void 0)continue;const Qe=Ve.buffer,Ge=Ve.type,oe=Ve.bytesPerElement,te=Ge===r.INT||Ge===r.UNSIGNED_INT||me.gpuType===Yl;if(me.isInterleavedBufferAttribute){const re=me.data,xe=re.stride,Le=me.offset;if(re.isInstancedInterleavedBuffer){for(let Te=0;Te<j.locationSize;Te++)v(j.location+Te,re.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Te=0;Te<j.locationSize;Te++)g(j.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Te=0;Te<j.locationSize;Te++)S(j.location+Te,be/j.locationSize,Ge,Re,xe*oe,(Le+be/j.locationSize*Te)*oe,te)}else{if(me.isInstancedBufferAttribute){for(let re=0;re<j.locationSize;re++)v(j.location+re,me.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let re=0;re<j.locationSize;re++)g(j.location+re);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let re=0;re<j.locationSize;re++)S(j.location+re,be/j.locationSize,Ge,Re,be*oe,be/j.locationSize*re*oe,te)}}else if(ae!==void 0){const Re=ae[X];if(Re!==void 0)switch(Re.length){case 2:r.vertexAttrib2fv(j.location,Re);break;case 3:r.vertexAttrib3fv(j.location,Re);break;case 4:r.vertexAttrib4fv(j.location,Re);break;default:r.vertexAttrib1fv(j.location,Re)}}}}x()}function I(){E();for(const U in n){const H=n[U];for(const ne in H){const K=H[ne];for(const he in K){const fe=K[he];for(const ae in fe)u(fe[ae].object),delete fe[ae];delete K[he]}}delete n[U]}}function A(U){if(n[U.id]===void 0)return;const H=n[U.id];for(const ne in H){const K=H[ne];for(const he in K){const fe=K[he];for(const ae in fe)u(fe[ae].object),delete fe[ae];delete K[he]}}delete n[U.id]}function D(U){for(const H in n){const ne=n[H];for(const K in ne){const he=ne[K];if(he[U.id]===void 0)continue;const fe=he[U.id];for(const ae in fe)u(fe[ae].object),delete fe[ae];delete he[U.id]}}}function w(U){for(const H in n){const ne=n[H],K=U.isInstancedMesh===!0?U.id:0,he=ne[K];if(he!==void 0){for(const fe in he){const ae=he[fe];for(const X in ae)u(ae[X].object),delete ae[X];delete he[fe]}delete ne[K],Object.keys(ne).length===0&&delete n[H]}}}function E(){O(),o=!0,s!==i&&(s=i,c(s.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:O,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:w,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function BS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_]*h[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){return!(D!==Dn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const w=D===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==kn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==In&&!w)}function l(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(lt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:b,maxSamples:I,samples:A}}function $S(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new $i,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,v=r.get(d);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,S=x*4;let b=v.clippingState||null;l.value=b,b=u(m,h,S,f);for(let I=0;I!==S;++I)b[I]=t[I];v.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const v=f+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<v)&&(g=new Float32Array(v));for(let S=0,b=f;S!==_;++S,b+=4)o.copy(d[S]).applyMatrix4(x,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const cr=4,Lf=[.125,.215,.35,.446,.526,.582],Nr=20,kS=256,to=new $s,Nf=new ht;let Tu=null,Au=0,Eu=0,Cu=!1;const VS=new B;class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=VS}=s;Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Au,Eu),this._renderer.xr.enabled=Cu,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ei,format:Dn,colorSpace:Vr,depthBuffer:!1},i=Uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=GS(s)),this._blurMaterial=WS(s,e,t),this._ggxMaterial=HS(s,e,t)}return i}_compileMaterial(e){const t=new an(new Rt,e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,i,s){const l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Nf),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new qr,new qi({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let v=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,v=!0):(g.color.copy(Nf),v=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const I=this._cubeSize;xs(i,b*I,S>2?I:0,I,I),d.setRenderTarget(i),v&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ai||e.mapping===ur;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ff());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-cr?n-m+cr:0),v=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,xs(s,g,v,3*_,2*_),i.setRenderTarget(s),i.render(a,to),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,xs(e,g,v,3*_,2*_),i.setRenderTarget(e),i.render(a,to)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&St("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Nr-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Nr;g>Nr&&lt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const v=[];let x=0;for(let D=0;D<Nr;++D){const w=D/_,E=Math.exp(-w*w/2);v.push(E),D===0?x+=E:D<g&&(x+=2*E)}for(let D=0;D<v.length;D++)v[D]=v[D]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=m,h.mipInt.value=S-n;const b=this._sizeLods[i],I=3*b*(i>S-cr?i-S+cr:0),A=4*(this._cubeSize-b);xs(t,I,A,3*b,2*b),l.setRenderTarget(t),l.render(d,to)}}function GS(r){const e=[],t=[],n=[];let i=r;const s=r-cr+1+Lf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-cr?l=Lf[o-r+cr-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,_=3,g=2,v=1,x=new Float32Array(_*m*f),S=new Float32Array(g*m*f),b=new Float32Array(v*m*f);for(let A=0;A<f;A++){const D=A%3*2/3-1,w=A>2?0:-1,E=[D,w,0,D+2/3,w,0,D+2/3,w+1,0,D,w,0,D+2/3,w+1,0,D,w+1,0];x.set(E,_*m*A),S.set(h,g*m*A);const O=[A,A,A,A,A,A];b.set(O,v*m*A)}const I=new Rt;I.setAttribute("position",new Wt(x,_)),I.setAttribute("uv",new Wt(S,g)),I.setAttribute("faceIndex",new Wt(b,v)),n.push(new an(I,null)),i>cr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Uf(r,e,t){const n=new Qn(r,e,t);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function HS(r,e,t){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function WS(r,e,t){const n=new Float32Array(Nr),i=new B(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ff(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Of(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class nd extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Go(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qr(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:wi});s.uniforms.tEquirect.value=t;const o=new an(i,s),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Zt),new Wm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function XS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===co||f===uo)if(e.has(h)){const m=e.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new nd(m.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,m=f===co||f===uo,_=f===Ai||f===ur;if(m||_){let g=t.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new Ju(r)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return m&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Ju(r)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,f){return f===co?h.mapping=Ai:f===uo&&(h.mapping=ur),h}function l(h){let f=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function c(h){const f=h.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function qS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ro("WebGLRenderer: "+n+" extension not supported."),i}}}function YS(r,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let S=0,b=x.length;S<b;S+=3){const I=x[S+0],A=x[S+1],D=x[S+2];h.push(I,A,A,D,D,I)}}else{const x=m.array;_=m.version;for(let S=0,b=x.length/3-1;S<b;S+=3){const I=S+0,A=S+1,D=S+2;h.push(I,A,A,D,D,I)}}const g=new(m.count>=65535?Eh:Ah)(h,1);g.version=_;const v=s.get(d);v&&e.remove(v),s.set(d,g)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function ZS(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,h*o,m),t.update(f,n,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,m);let g=0;for(let v=0;v<m;v++)g+=f[v];t.update(g,n,1)}function d(h,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<h.length;v++)c(h[v]/o,f[v],_[v]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,m);let v=0;for(let x=0;x<m;x++)v+=f[x]*_[x];t.update(v,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function JS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:St("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function KS(r,e,t){const n=new WeakMap,i=new kt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let E=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let b=a.attributes.position.count*S,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*I*4*d),D=new ic(A,b,I,d);D.type=In,D.needsUpdate=!0;const w=S*4;for(let O=0;O<d;O++){const U=g[O],H=v[O],ne=x[O],K=b*I*4*O;for(let he=0;he<U.count;he++){const fe=he*w;f===!0&&(i.fromBufferAttribute(U,he),A[K+fe+0]=i.x,A[K+fe+1]=i.y,A[K+fe+2]=i.z,A[K+fe+3]=0),m===!0&&(i.fromBufferAttribute(H,he),A[K+fe+4]=i.x,A[K+fe+5]=i.y,A[K+fe+6]=i.z,A[K+fe+7]=0),_===!0&&(i.fromBufferAttribute(ne,he),A[K+fe+8]=i.x,A[K+fe+9]=i.y,A[K+fe+10]=i.z,A[K+fe+11]=ne.itemSize===4?i.w:1)}}h={count:d,texture:D,size:new We(b,I)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function jS(r,e,t,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const QS={[ch]:"LINEAR_TONE_MAPPING",[uh]:"REINHARD_TONE_MAPPING",[hh]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function eb(r,e,t,n,i){const s=new Qn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Qn(e,t,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),a=new Rt;a.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new dt([0,2,0,0,2,0],2));const l=new zh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new an(a,l),u=new $s(-1,1,1,-1,0,1);let d=null,h=null,f=!1,m,_=null,g=[],v=!1;this.setSize=function(x,S){s.setSize(x,S),o.setSize(x,S);for(let b=0;b<g.length;b++){const I=g[b];I.setSize&&I.setSize(x,S)}},this.setEffects=function(x){g=x,v=g.length>0&&g[0].isRenderPass===!0;const S=s.width,b=s.height;for(let I=0;I<g.length;I++){const A=g[I];A.setSize&&A.setSize(S,b)}},this.begin=function(x,S){if(f||x.toneMapping===fi&&g.length===0)return!1;if(_=S,S!==null){const b=S.width,I=S.height;(s.width!==b||s.height!==I)&&this.setSize(b,I)}return v===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=fi,!0},this.hasRenderPass=function(){return v},this.end=function(x,S){x.toneMapping=m,f=!0;let b=s,I=o;for(let A=0;A<g.length;A++){const D=g[A];if(D.enabled!==!1&&(D.render(x,I,b,S),D.needsSwap!==!1)){const w=b;b=I,I=w}}if(d!==x.outputColorSpace||h!==x.toneMapping){d=x.outputColorSpace,h=x.toneMapping,l.defines={},Ft.getTransfer(d)===Vt&&(l.defines.SRGB_TRANSFER="");const A=QS[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(_),x.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const tg=new on,Ku=new Ls(1,1),ng=new ic,ig=new rc,rg=new Go,Bf=[],zf=[],$f=new Float32Array(16),kf=new Float32Array(9),Vf=new Float32Array(4);function ks(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Bf[i];if(s===void 0&&(s=new Float32Array(i),Bf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function _n(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function xn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Cc(r,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2fv(this.addr,e),xn(t,e)}}function ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;r.uniform3fv(this.addr,e),xn(t,e)}}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4fv(this.addr,e),xn(t,e)}}function sb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;Vf.set(n),r.uniformMatrix2fv(this.addr,!1,Vf),xn(t,n)}}function ob(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;kf.set(n),r.uniformMatrix3fv(this.addr,!1,kf),xn(t,n)}}function ab(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;$f.set(n),r.uniformMatrix4fv(this.addr,!1,$f),xn(t,n)}}function lb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2iv(this.addr,e),xn(t,e)}}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3iv(this.addr,e),xn(t,e)}}function hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4iv(this.addr,e),xn(t,e)}}function db(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2uiv(this.addr,e),xn(t,e)}}function pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3uiv(this.addr,e),xn(t,e)}}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4uiv(this.addr,e),xn(t,e)}}function gb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ku.compareFunction=t.isReversedDepthBuffer()?nc:tc,s=Ku):s=tg,t.setTexture2D(e||s,i)}function vb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ig,i)}function _b(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rg,i)}function xb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ng,i)}function yb(r){switch(r){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return hb;case 5125:return db;case 36294:return fb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return xb}}function Mb(r,e){r.uniform1fv(this.addr,e)}function Sb(r,e){const t=ks(e,this.size,2);r.uniform2fv(this.addr,t)}function bb(r,e){const t=ks(e,this.size,3);r.uniform3fv(this.addr,t)}function wb(r,e){const t=ks(e,this.size,4);r.uniform4fv(this.addr,t)}function Tb(r,e){const t=ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ab(r,e){const t=ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Eb(r,e){const t=ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Cb(r,e){r.uniform1iv(this.addr,e)}function Pb(r,e){r.uniform2iv(this.addr,e)}function Rb(r,e){r.uniform3iv(this.addr,e)}function Ib(r,e){r.uniform4iv(this.addr,e)}function Db(r,e){r.uniform1uiv(this.addr,e)}function Lb(r,e){r.uniform2uiv(this.addr,e)}function Nb(r,e){r.uniform3uiv(this.addr,e)}function Ub(r,e){r.uniform4uiv(this.addr,e)}function Fb(r,e,t){const n=this.cache,i=e.length,s=Cc(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Ku:o=tg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Ob(r,e,t){const n=this.cache,i=e.length,s=Cc(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ig,s[o])}function Bb(r,e,t){const n=this.cache,i=e.length,s=Cc(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||rg,s[o])}function zb(r,e,t){const n=this.cache,i=e.length,s=Cc(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ng,s[o])}function $b(r){switch(r){case 5126:return Mb;case 35664:return Sb;case 35665:return bb;case 35666:return wb;case 35674:return Tb;case 35675:return Ab;case 35676:return Eb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Rb;case 35669:case 35673:return Ib;case 5125:return Db;case 36294:return Lb;case 36295:return Nb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return zb}}class kb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yb(t.type)}}class Vb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$b(t.type)}}class Gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Gf(r,e){r.seq.push(e),r.map[e.id]=e}function Hb(r,e,t){const n=r.name,i=n.length;for(Pu.lastIndex=0;;){const s=Pu.exec(n),o=Pu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gf(t,c===void 0?new kb(a,r,e):new Vb(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Gb(a),Gf(t,d)),t=d}}}class Ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Hb(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Hf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Wb=37297;let Xb=0;function qb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wf=new It;function Yb(r){Ft._getMatrix(Wf,Ft.workingColorSpace,r);const e=`mat3( ${Wf.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(r)){case Ao:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+qb(r.getShaderSource(e),a)}else return s}function Zb(r,e){const t=Yb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jb={[ch]:"Linear",[uh]:"Reinhard",[hh]:"Cineon",[dh]:"ACESFilmic",[Mo]:"AgX",[ph]:"Neutral",[fh]:"Custom"};function Kb(r,e){const t=Jb[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new B;function jb(){Ft.getLuminanceCoefficients(Va);const r=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function e1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function oo(r){return r!==""}function qf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(r){return r.replace(n1,r1)}const i1=new Map;function r1(r,e){let t=Et[e];if(t===void 0){const n=i1.get(e);if(n!==void 0)t=Et[n],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ju(t)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(r){return r.replace(s1,o1)}function o1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const a1={[ao]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function l1(r){return a1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c1={[Ai]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE_UV"};function u1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":c1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const h1={[ur]:"ENVMAP_MODE_REFRACTION"};function d1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":h1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const f1={[ko]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[zp]:"ENVMAP_BLENDING_ADD"};function p1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":f1[r.combine]||"ENVMAP_BLENDING_NONE"}function m1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=l1(t),c=u1(t),u=d1(t),d=p1(t),h=m1(t),f=Qb(t),m=e1(s),_=i.createProgram();let g,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(oo).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(oo).join(`
`),v.length>0&&(v+=`
`)):(g=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),v=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Et.tonemapping_pars_fragment:"",t.toneMapping!==fi?Kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,Zb("linearToOutputTexel",t.outputColorSpace),jb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),o=ju(o),o=qf(o,t),o=Yf(o,t),a=ju(a),a=qf(a,t),a=Yf(a,t),o=Zf(o),a=Zf(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=x+g+o,b=x+v+a,I=Hf(i,i.VERTEX_SHADER,S),A=Hf(i,i.FRAGMENT_SHADER,b);i.attachShader(_,I),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function D(U){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(_)||"",ne=i.getShaderInfoLog(I)||"",K=i.getShaderInfoLog(A)||"",he=H.trim(),fe=ne.trim(),ae=K.trim();let X=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,I,A);else{const me=Xf(i,I,"vertex"),Re=Xf(i,A,"fragment");St("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+he+`
`+me+`
`+Re)}else he!==""?lt("WebGLProgram: Program Info Log:",he):(fe===""||ae==="")&&(j=!1);j&&(U.diagnostics={runnable:X,programLog:he,vertexShader:{log:fe,prefix:g},fragmentShader:{log:ae,prefix:v}})}i.deleteShader(I),i.deleteShader(A),w=new Ya(i,_),E=t1(i,_)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(_,Wb)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let v1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x1(e),t.set(e,n)),n}}class x1{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}}function y1(r,e,t,n,i,s){const o=new sc,a=new _1,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return l.add(w),w===0?"uv":`uv${w}`}function _(w,E,O,U,H){const ne=U.fog,K=H.geometry,he=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,ae=e.get(w.envMap||he,fe),X=ae&&ae.mapping===Fs?ae.image.height:null,j=f[w.type];w.precision!==null&&(h=n.getMaxPrecision(w.precision),h!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Re=me!==void 0?me.length:0;let be=0;K.morphAttributes.position!==void 0&&(be=1),K.morphAttributes.normal!==void 0&&(be=2),K.morphAttributes.color!==void 0&&(be=3);let Ve,Qe,Ge,oe;if(j){const Ue=ni[j];Ve=Ue.vertexShader,Qe=Ue.fragmentShader}else Ve=w.vertexShader,Qe=w.fragmentShader,a.update(w),Ge=a.getVertexShaderID(w),oe=a.getFragmentShaderID(w);const te=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),xe=H.isInstancedMesh===!0,Le=H.isBatchedMesh===!0,Te=!!w.map,$e=!!w.matcap,Oe=!!ae,ie=!!w.aoMap,pe=!!w.lightMap,ue=!!w.bumpMap,Ae=!!w.normalMap,N=!!w.displacementMap,Se=!!w.emissiveMap,Ce=!!w.metalnessMap,Ie=!!w.roughnessMap,ye=w.anisotropy>0,L=w.clearcoat>0,T=w.dispersion>0,W=w.iridescence>0,ve=w.sheen>0,Ne=w.transmission>0,_e=ye&&!!w.anisotropyMap,Pe=L&&!!w.clearcoatMap,Me=L&&!!w.clearcoatNormalMap,He=L&&!!w.clearcoatRoughnessMap,qe=W&&!!w.iridescenceMap,Ee=W&&!!w.iridescenceThicknessMap,De=ve&&!!w.sheenColorMap,we=ve&&!!w.sheenRoughnessMap,k=!!w.specularMap,Z=!!w.specularColorMap,le=!!w.specularIntensityMap,F=Ne&&!!w.transmissionMap,ee=Ne&&!!w.thicknessMap,Q=!!w.gradientMap,ce=!!w.alphaMap,$=w.alphaTest>0,z=!!w.alphaHash,ge=!!w.extensions;let ze=fi;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ze=r.toneMapping);const ke={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:Qe,defines:w.defines,customVertexShaderID:Ge,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Le,batchingColor:Le&&H._colorsTexture!==null,instancing:xe,instancingColor:xe&&H.instanceColor!==null,instancingMorph:xe&&H.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Vr,alphaToCoverage:!!w.alphaToCoverage,map:Te,matcap:$e,envMap:Oe,envMapMode:Oe&&ae.mapping,envMapCubeUVHeight:X,aoMap:ie,lightMap:pe,bumpMap:ue,normalMap:Ae,displacementMap:N,emissiveMap:Se,normalMapObjectSpace:Ae&&w.normalMapType===Wp,normalMapTangentSpace:Ae&&w.normalMapType===fr,metalnessMap:Ce,roughnessMap:Ie,anisotropy:ye,anisotropyMap:_e,clearcoat:L,clearcoatMap:Pe,clearcoatNormalMap:Me,clearcoatRoughnessMap:He,dispersion:T,iridescence:W,iridescenceMap:qe,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:we,specularMap:k,specularColorMap:Z,specularIntensityMap:le,transmission:Ne,transmissionMap:F,thicknessMap:ee,gradientMap:Q,opaque:w.transparent===!1&&w.blending===Br&&w.alphaToCoverage===!1,alphaMap:ce,alphaTest:$,alphaHash:z,combine:w.combine,mapUv:Te&&m(w.map.channel),aoMapUv:ie&&m(w.aoMap.channel),lightMapUv:pe&&m(w.lightMap.channel),bumpMapUv:ue&&m(w.bumpMap.channel),normalMapUv:Ae&&m(w.normalMap.channel),displacementMapUv:N&&m(w.displacementMap.channel),emissiveMapUv:Se&&m(w.emissiveMap.channel),metalnessMapUv:Ce&&m(w.metalnessMap.channel),roughnessMapUv:Ie&&m(w.roughnessMap.channel),anisotropyMapUv:_e&&m(w.anisotropyMap.channel),clearcoatMapUv:Pe&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(w.sheenRoughnessMap.channel),specularMapUv:k&&m(w.specularMap.channel),specularColorMapUv:Z&&m(w.specularColorMap.channel),specularIntensityMapUv:le&&m(w.specularIntensityMap.channel),transmissionMapUv:F&&m(w.transmissionMap.channel),thicknessMapUv:ee&&m(w.thicknessMap.channel),alphaMapUv:ce&&m(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ae||ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(Te||ce),fog:!!ne,useFog:w.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||K.attributes.normal===void 0&&Ae===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ze,decodeVideoTexture:Te&&w.map.isVideoTexture===!0&&Ft.getTransfer(w.map.colorSpace)===Vt,decodeVideoTextureEmissive:Se&&w.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(w.emissiveMap.colorSpace)===Vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jn,flipSided:w.side===Ln,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ge&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&w.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function g(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const O in w.defines)E.push(O),E.push(w.defines[O]);return w.isRawShaderMaterial===!1&&(v(E,w),x(E,w),E.push(r.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function v(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function x(w,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const E=f[w.type];let O;if(E){const U=ni[E];O=Bh.clone(U.uniforms)}else O=w.uniforms;return O}function b(w,E){let O=u.get(E);return O!==void 0?++O.usedTimes:(O=new g1(r,E,w,i),c.push(O),u.set(E,O)),O}function I(w){if(--w.usedTimes===0){const E=c.indexOf(w);c[E]=c[c.length-1],c.pop(),u.delete(w.cacheKey),w.destroy()}}function A(w){a.remove(w)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:b,releaseProgram:I,releaseShaderCache:A,programs:c,dispose:D}}function M1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function S1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Kf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,m,_,g,v){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:v},r[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.materialVariant=o(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=g,x.group=v),e++,x}function l(h,f,m,_,g,v){const x=a(h,f,m,_,g,v);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(h,f,m,_,g,v){const x=a(h,f,m,_,g,v);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function u(h,f){t.length>1&&t.sort(h||S1),n.length>1&&n.sort(f||Kf),i.length>1&&i.sort(f||Kf)}function d(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function b1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new jf,r.set(n,[o])):i>=s.length?(o=new jf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function w1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ht};break;case"SpotLight":t={position:new B,direction:new B,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function T1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let A1=0;function E1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function C1(r){const e=new w1,t=T1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new At,o=new At;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,v=0,x=0,S=0,b=0,I=0,A=0,D=0;c.sort(E1);for(let E=0,O=c.length;E<O;E++){const U=c[E],H=U.color,ne=U.intensity,K=U.distance;let he=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===kr?he=U.shadow.map.texture:he=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=H.r*ne,d+=H.g*ne,h+=H.b*ne;else if(U.isLightProbe){for(let fe=0;fe<9;fe++)n.probe[fe].addScaledVector(U.sh.coefficients[fe],ne);D++}else if(U.isDirectionalLight){const fe=e.get(U);if(fe.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ae=U.shadow,X=t.get(U);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=he,n.directionalShadowMatrix[f]=U.shadow.matrix,x++}n.directional[f]=fe,f++}else if(U.isSpotLight){const fe=e.get(U);fe.position.setFromMatrixPosition(U.matrixWorld),fe.color.copy(H).multiplyScalar(ne),fe.distance=K,fe.coneCos=Math.cos(U.angle),fe.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),fe.decay=U.decay,n.spot[_]=fe;const ae=U.shadow;if(U.map&&(n.spotLightMap[I]=U.map,I++,ae.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[_]=ae.matrix,U.castShadow){const X=t.get(U);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=he,b++}_++}else if(U.isRectAreaLight){const fe=e.get(U);fe.color.copy(H).multiplyScalar(ne),fe.halfWidth.set(U.width*.5,0,0),fe.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=fe,g++}else if(U.isPointLight){const fe=e.get(U);if(fe.color.copy(U.color).multiplyScalar(U.intensity),fe.distance=U.distance,fe.decay=U.decay,U.castShadow){const ae=U.shadow,X=t.get(U);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,X.shadowCameraNear=ae.camera.near,X.shadowCameraFar=ae.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=he,n.pointShadowMatrix[m]=U.shadow.matrix,S++}n.point[m]=fe,m++}else if(U.isHemisphereLight){const fe=e.get(U);fe.skyColor.copy(U.color).multiplyScalar(ne),fe.groundColor.copy(U.groundColor).multiplyScalar(ne),n.hemi[v]=fe,v++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const w=n.hash;(w.directionalLength!==f||w.pointLength!==m||w.spotLength!==_||w.rectAreaLength!==g||w.hemiLength!==v||w.numDirectionalShadows!==x||w.numPointShadows!==S||w.numSpotShadows!==b||w.numSpotMaps!==I||w.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,w.directionalLength=f,w.pointLength=m,w.spotLength=_,w.rectAreaLength=g,w.hemiLength=v,w.numDirectionalShadows=x,w.numPointShadows=S,w.numSpotShadows=b,w.numSpotMaps=I,w.numLightProbes=D,n.version=A1++)}function l(c,u){let d=0,h=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const S=c[v];if(S.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(S.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(S.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Qf(r){const e=new C1(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function P1(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Qf(r),e.set(i,[a])):s>=o.length?(a=new Qf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,D1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],L1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ep=new At,no=new B,Ru=new B;function N1(r,e,t){let n=new Os;const i=new We,s=new We,o=new kt,a=new kh,l=new Vh,c={},u=t.maxTextureSize,d={[Wi]:Ln,[Ln]:Wi,[Jn]:Jn},h=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:R1,fragmentShader:I1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Rt;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new an(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let v=this.type;this.render=function(A,D,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===lo&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ao);const E=r.getRenderTarget(),O=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),H=r.state;H.setBlending(wi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ne=v!==this.type;ne&&D.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(he=>he.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,he=A.length;K<he;K++){const fe=A[K],ae=fe.shadow;if(ae===void 0){lt("WebGLShadowMap:",fe,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;i.copy(ae.mapSize);const X=ae.getFrameExtents();i.multiply(X),s.copy(ae.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,ae.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,ae.mapSize.y=s.y));const j=r.state.buffers.depth.getReversed();if(ae.camera._reversedDepth=j,ae.map===null||ne===!0){if(ae.map!==null&&(ae.map.depthTexture!==null&&(ae.map.depthTexture.dispose(),ae.map.depthTexture=null),ae.map.dispose()),this.type===Ms){if(fe.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ae.map=new Qn(i.x,i.y,{format:kr,type:Ei,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),ae.map.texture.name=fe.name+".shadowMap",ae.map.depthTexture=new Ls(i.x,i.y,In),ae.map.depthTexture.name=fe.name+".shadowMapDepth",ae.map.depthTexture.format=Ci,ae.map.depthTexture.compareFunction=null,ae.map.depthTexture.minFilter=un,ae.map.depthTexture.magFilter=un}else fe.isPointLight?(ae.map=new nd(i.x),ae.map.depthTexture=new dm(i.x,ii)):(ae.map=new Qn(i.x,i.y),ae.map.depthTexture=new Ls(i.x,i.y,ii)),ae.map.depthTexture.name=fe.name+".shadowMap",ae.map.depthTexture.format=Ci,this.type===ao?(ae.map.depthTexture.compareFunction=j?nc:tc,ae.map.depthTexture.minFilter=Zt,ae.map.depthTexture.magFilter=Zt):(ae.map.depthTexture.compareFunction=null,ae.map.depthTexture.minFilter=un,ae.map.depthTexture.magFilter=un);ae.camera.updateProjectionMatrix()}const me=ae.map.isWebGLCubeRenderTarget?6:1;for(let Re=0;Re<me;Re++){if(ae.map.isWebGLCubeRenderTarget)r.setRenderTarget(ae.map,Re),r.clear();else{Re===0&&(r.setRenderTarget(ae.map),r.clear());const be=ae.getViewport(Re);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),H.viewport(o)}if(fe.isPointLight){const be=ae.camera,Ve=ae.matrix,Qe=fe.distance||be.far;Qe!==be.far&&(be.far=Qe,be.updateProjectionMatrix()),no.setFromMatrixPosition(fe.matrixWorld),be.position.copy(no),Ru.copy(be.position),Ru.add(D1[Re]),be.up.copy(L1[Re]),be.lookAt(Ru),be.updateMatrixWorld(),Ve.makeTranslation(-no.x,-no.y,-no.z),ep.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),ae._frustum.setFromProjectionMatrix(ep,be.coordinateSystem,be.reversedDepth)}else ae.updateMatrices(fe);n=ae.getFrustum(),b(D,w,ae.camera,fe,this.type)}ae.isPointLightShadow!==!0&&this.type===Ms&&x(ae,w),ae.needsUpdate=!1}v=this.type,g.needsUpdate=!1,r.setRenderTarget(E,O,U)};function x(A,D){const w=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qn(i.x,i.y,{format:kr,type:Ei})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(D,null,w,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(D,null,w,f,_,null)}function S(A,D,w,E){let O=null;const U=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)O=U;else if(O=w.isPointLight===!0?l:a,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const H=O.uuid,ne=D.uuid;let K=c[H];K===void 0&&(K={},c[H]=K);let he=K[ne];he===void 0&&(he=O.clone(),K[ne]=he,D.addEventListener("dispose",I)),O=he}if(O.visible=D.visible,O.wireframe=D.wireframe,E===Ms?O.side=D.shadowSide!==null?D.shadowSide:D.side:O.side=D.shadowSide!==null?D.shadowSide:d[D.side],O.alphaMap=D.alphaMap,O.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,O.map=D.map,O.clipShadows=D.clipShadows,O.clippingPlanes=D.clippingPlanes,O.clipIntersection=D.clipIntersection,O.displacementMap=D.displacementMap,O.displacementScale=D.displacementScale,O.displacementBias=D.displacementBias,O.wireframeLinewidth=D.wireframeLinewidth,O.linewidth=D.linewidth,w.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const H=r.properties.get(O);H.light=w}return O}function b(A,D,w,E,O){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===Ms)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const ne=e.update(A),K=A.material;if(Array.isArray(K)){const he=ne.groups;for(let fe=0,ae=he.length;fe<ae;fe++){const X=he[fe],j=K[X.materialIndex];if(j&&j.visible){const me=S(A,j,E,O);A.onBeforeShadow(r,A,D,w,ne,me,X),r.renderBufferDirect(w,null,ne,me,A,X),A.onAfterShadow(r,A,D,w,ne,me,X)}}}else if(K.visible){const he=S(A,K,E,O);A.onBeforeShadow(r,A,D,w,ne,he,null),r.renderBufferDirect(w,null,ne,he,A,null),A.onAfterShadow(r,A,D,w,ne,he,null)}}const H=A.children;for(let ne=0,K=H.length;ne<K;ne++)b(H[ne],D,w,E,O)}function I(A){A.target.removeEventListener("dispose",I);for(const w in c){const E=c[w],O=A.target.uuid;O in E&&(E[O].dispose(),delete E[O])}}}function U1(r,e){function t(){let F=!1;const ee=new kt;let Q=null;const ce=new kt(0,0,0,0);return{setMask:function($){Q!==$&&!F&&(r.colorMask($,$,$,$),Q=$)},setLocked:function($){F=$},setClear:function($,z,ge,ze,ke){ke===!0&&($*=ze,z*=ze,ge*=ze),ee.set($,z,ge,ze),ce.equals(ee)===!1&&(r.clearColor($,z,ge,ze),ce.copy(ee))},reset:function(){F=!1,Q=null,ce.set(-1,0,0,0)}}}function n(){let F=!1,ee=!1,Q=null,ce=null,$=null;return{setReversed:function(z){if(ee!==z){const ge=e.get("EXT_clip_control");z?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ee=z;const ze=$;$=null,this.setClear(ze)}},getReversed:function(){return ee},setTest:function(z){z?te(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(z){Q!==z&&!F&&(r.depthMask(z),Q=z)},setFunc:function(z){if(ee&&(z=nv[z]),ce!==z){switch(z){case Ka:r.depthFunc(r.NEVER);break;case ja:r.depthFunc(r.ALWAYS);break;case Qa:r.depthFunc(r.LESS);break;case $r:r.depthFunc(r.LEQUAL);break;case el:r.depthFunc(r.EQUAL);break;case tl:r.depthFunc(r.GEQUAL);break;case nl:r.depthFunc(r.GREATER);break;case il:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=z}},setLocked:function(z){F=z},setClear:function(z){$!==z&&($=z,ee&&(z=1-z),r.clearDepth(z))},reset:function(){F=!1,Q=null,ce=null,$=null,ee=!1}}}function i(){let F=!1,ee=null,Q=null,ce=null,$=null,z=null,ge=null,ze=null,ke=null;return{setTest:function(Ue){F||(Ue?te(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(Ue){ee!==Ue&&!F&&(r.stencilMask(Ue),ee=Ue)},setFunc:function(Ue,je,ot){(Q!==Ue||ce!==je||$!==ot)&&(r.stencilFunc(Ue,je,ot),Q=Ue,ce=je,$=ot)},setOp:function(Ue,je,ot){(z!==Ue||ge!==je||ze!==ot)&&(r.stencilOp(Ue,je,ot),z=Ue,ge=je,ze=ot)},setLocked:function(Ue){F=Ue},setClear:function(Ue){ke!==Ue&&(r.clearStencil(Ue),ke=Ue)},reset:function(){F=!1,ee=null,Q=null,ce=null,$=null,z=null,ge=null,ze=null,ke=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],m=null,_=!1,g=null,v=null,x=null,S=null,b=null,I=null,A=null,D=new ht(0,0,0),w=0,E=!1,O=null,U=null,H=null,ne=null,K=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,ae=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(X)[1]),fe=ae>=1):X.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),fe=ae>=2);let j=null,me={};const Re=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),Ve=new kt().fromArray(Re),Qe=new kt().fromArray(be);function Ge(F,ee,Q,ce){const $=new Uint8Array(4),z=r.createTexture();r.bindTexture(F,z),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ge=0;ge<Q;ge++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(ee+ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return z}const oe={};oe[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc($r),ue(!1),Ae(Uu),te(r.CULL_FACE),ie(wi);function te(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function re(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function xe(F,ee){return d[F]!==ee?(r.bindFramebuffer(F,ee),d[F]=ee,F===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ee),F===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function Le(F,ee){let Q=f,ce=!1;if(F){Q=h.get(ee),Q===void 0&&(Q=[],h.set(ee,Q));const $=F.textures;if(Q.length!==$.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let z=0,ge=$.length;z<ge;z++)Q[z]=r.COLOR_ATTACHMENT0+z;Q.length=$.length,ce=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,ce=!0);ce&&r.drawBuffers(Q)}function Te(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const $e={[or]:r.FUNC_ADD,[Mp]:r.FUNC_SUBTRACT,[Sp]:r.FUNC_REVERSE_SUBTRACT};$e[bp]=r.MIN,$e[wp]=r.MAX;const Oe={[Tp]:r.ZERO,[Ap]:r.ONE,[Ep]:r.SRC_COLOR,[Za]:r.SRC_ALPHA,[Lp]:r.SRC_ALPHA_SATURATE,[Ip]:r.DST_COLOR,[Pp]:r.DST_ALPHA,[Cp]:r.ONE_MINUS_SRC_COLOR,[Ja]:r.ONE_MINUS_SRC_ALPHA,[Dp]:r.ONE_MINUS_DST_COLOR,[Rp]:r.ONE_MINUS_DST_ALPHA,[Np]:r.CONSTANT_COLOR,[Up]:r.ONE_MINUS_CONSTANT_COLOR,[Fp]:r.CONSTANT_ALPHA,[Op]:r.ONE_MINUS_CONSTANT_ALPHA};function ie(F,ee,Q,ce,$,z,ge,ze,ke,Ue){if(F===wi){_===!0&&(re(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),F!==yp){if(F!==g||Ue!==E){if((v!==or||b!==or)&&(r.blendEquation(r.FUNC_ADD),v=or,b=or),Ue)switch(F){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fu:r.blendFunc(r.ONE,r.ONE);break;case Ou:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:St("WebGLState: Invalid blending: ",F);break}else switch(F){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ou:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bu:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",F);break}x=null,S=null,I=null,A=null,D.set(0,0,0),w=0,g=F,E=Ue}return}$=$||ee,z=z||Q,ge=ge||ce,(ee!==v||$!==b)&&(r.blendEquationSeparate($e[ee],$e[$]),v=ee,b=$),(Q!==x||ce!==S||z!==I||ge!==A)&&(r.blendFuncSeparate(Oe[Q],Oe[ce],Oe[z],Oe[ge]),x=Q,S=ce,I=z,A=ge),(ze.equals(D)===!1||ke!==w)&&(r.blendColor(ze.r,ze.g,ze.b,ke),D.copy(ze),w=ke),g=F,E=!1}function pe(F,ee){F.side===Jn?re(r.CULL_FACE):te(r.CULL_FACE);let Q=F.side===Ln;ee&&(Q=!Q),ue(Q),F.blending===Br&&F.transparent===!1?ie(wi):ie(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ce=F.stencilWrite;a.setTest(ce),ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(F){O!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),O=F)}function Ae(F){F!==_p?(te(r.CULL_FACE),F!==U&&(F===Uu?r.cullFace(r.BACK):F===xp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),U=F}function N(F){F!==H&&(fe&&r.lineWidth(F),H=F)}function Se(F,ee,Q){F?(te(r.POLYGON_OFFSET_FILL),(ne!==ee||K!==Q)&&(ne=ee,K=Q,o.getReversed()&&(ee=-ee),r.polygonOffset(ee,Q))):re(r.POLYGON_OFFSET_FILL)}function Ce(F){F?te(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function Ie(F){F===void 0&&(F=r.TEXTURE0+he-1),j!==F&&(r.activeTexture(F),j=F)}function ye(F,ee,Q){Q===void 0&&(j===null?Q=r.TEXTURE0+he-1:Q=j);let ce=me[Q];ce===void 0&&(ce={type:void 0,texture:void 0},me[Q]=ce),(ce.type!==F||ce.texture!==ee)&&(j!==Q&&(r.activeTexture(Q),j=Q),r.bindTexture(F,ee||oe[F]),ce.type=F,ce.texture=ee)}function L(){const F=me[j];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(F){St("WebGLState:",F)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(F){St("WebGLState:",F)}}function ve(){try{r.texSubImage2D(...arguments)}catch(F){St("WebGLState:",F)}}function Ne(){try{r.texSubImage3D(...arguments)}catch(F){St("WebGLState:",F)}}function _e(){try{r.compressedTexSubImage2D(...arguments)}catch(F){St("WebGLState:",F)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(F){St("WebGLState:",F)}}function Me(){try{r.texStorage2D(...arguments)}catch(F){St("WebGLState:",F)}}function He(){try{r.texStorage3D(...arguments)}catch(F){St("WebGLState:",F)}}function qe(){try{r.texImage2D(...arguments)}catch(F){St("WebGLState:",F)}}function Ee(){try{r.texImage3D(...arguments)}catch(F){St("WebGLState:",F)}}function De(F){Ve.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ve.copy(F))}function we(F){Qe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Qe.copy(F))}function k(F,ee){let Q=c.get(ee);Q===void 0&&(Q=new WeakMap,c.set(ee,Q));let ce=Q.get(F);ce===void 0&&(ce=r.getUniformBlockIndex(ee,F.name),Q.set(F,ce))}function Z(F,ee){const ce=c.get(ee).get(F);l.get(ee)!==ce&&(r.uniformBlockBinding(ee,ce,F.__bindingPointIndex),l.set(ee,ce))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},j=null,me={},d={},h=new WeakMap,f=[],m=null,_=!1,g=null,v=null,x=null,S=null,b=null,I=null,A=null,D=new ht(0,0,0),w=0,E=!1,O=null,U=null,H=null,ne=null,K=null,Ve.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:re,bindFramebuffer:xe,drawBuffers:Le,useProgram:Te,setBlending:ie,setMaterial:pe,setFlipSided:ue,setCullFace:Ae,setLineWidth:N,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:Ie,bindTexture:ye,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:qe,texImage3D:Ee,updateUBOMapping:k,uniformBlockBinding:Z,texStorage2D:Me,texStorage3D:He,texSubImage2D:ve,texSubImage3D:Ne,compressedTexSubImage2D:_e,compressedTexSubImage3D:Pe,scissor:De,viewport:we,reset:le}}function F1(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,T){return f?new OffscreenCanvas(L,T):Co("canvas")}function _(L,T,W){let ve=1;const Ne=ye(L);if((Ne.width>W||Ne.height>W)&&(ve=W/Math.max(Ne.width,Ne.height)),ve<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _e=Math.floor(ve*Ne.width),Pe=Math.floor(ve*Ne.height);d===void 0&&(d=m(_e,Pe));const Me=T?m(_e,Pe):d;return Me.width=_e,Me.height=Pe,Me.getContext("2d").drawImage(L,0,0,_e,Pe),lt("WebGLRenderer: Texture has been resized from ("+Ne.width+"x"+Ne.height+") to ("+_e+"x"+Pe+")."),Me}else return"data"in L&&lt("WebGLRenderer: Image in DataTexture is too big ("+Ne.width+"x"+Ne.height+")."),L;return L}function g(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(L,T,W,ve,Ne=!1){if(L!==null){if(r[L]!==void 0)return r[L];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e=T;if(T===r.RED&&(W===r.FLOAT&&(_e=r.R32F),W===r.HALF_FLOAT&&(_e=r.R16F),W===r.UNSIGNED_BYTE&&(_e=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(_e=r.R8UI),W===r.UNSIGNED_SHORT&&(_e=r.R16UI),W===r.UNSIGNED_INT&&(_e=r.R32UI),W===r.BYTE&&(_e=r.R8I),W===r.SHORT&&(_e=r.R16I),W===r.INT&&(_e=r.R32I)),T===r.RG&&(W===r.FLOAT&&(_e=r.RG32F),W===r.HALF_FLOAT&&(_e=r.RG16F),W===r.UNSIGNED_BYTE&&(_e=r.RG8)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(_e=r.RG8UI),W===r.UNSIGNED_SHORT&&(_e=r.RG16UI),W===r.UNSIGNED_INT&&(_e=r.RG32UI),W===r.BYTE&&(_e=r.RG8I),W===r.SHORT&&(_e=r.RG16I),W===r.INT&&(_e=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(_e=r.RGB8UI),W===r.UNSIGNED_SHORT&&(_e=r.RGB16UI),W===r.UNSIGNED_INT&&(_e=r.RGB32UI),W===r.BYTE&&(_e=r.RGB8I),W===r.SHORT&&(_e=r.RGB16I),W===r.INT&&(_e=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(_e=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(_e=r.RGBA16UI),W===r.UNSIGNED_INT&&(_e=r.RGBA32UI),W===r.BYTE&&(_e=r.RGBA8I),W===r.SHORT&&(_e=r.RGBA16I),W===r.INT&&(_e=r.RGBA32I)),T===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(_e=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(_e=r.R11F_G11F_B10F)),T===r.RGBA){const Pe=Ne?Ao:Ft.getTransfer(ve);W===r.FLOAT&&(_e=r.RGBA32F),W===r.HALF_FLOAT&&(_e=r.RGBA16F),W===r.UNSIGNED_BYTE&&(_e=Pe===Vt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function b(L,T){let W;return L?T===null||T===ii||T===Rs?W=r.DEPTH24_STENCIL8:T===In?W=r.DEPTH32F_STENCIL8:T===Ps&&(W=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ii||T===Rs?W=r.DEPTH_COMPONENT24:T===In?W=r.DEPTH_COMPONENT32F:T===Ps&&(W=r.DEPTH_COMPONENT16),W}function I(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==un&&L.minFilter!==Zt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function A(L){const T=L.target;T.removeEventListener("dispose",A),w(T),T.isVideoTexture&&u.delete(T)}function D(L){const T=L.target;T.removeEventListener("dispose",D),O(T)}function w(L){const T=n.get(L);if(T.__webglInit===void 0)return;const W=L.source,ve=h.get(W);if(ve){const Ne=ve[T.__cacheKey];Ne.usedTimes--,Ne.usedTimes===0&&E(L),Object.keys(ve).length===0&&h.delete(W)}n.remove(L)}function E(L){const T=n.get(L);r.deleteTexture(T.__webglTexture);const W=L.source,ve=h.get(W);delete ve[T.__cacheKey],o.memory.textures--}function O(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Ne=0;Ne<T.__webglFramebuffer[ve].length;Ne++)r.deleteFramebuffer(T.__webglFramebuffer[ve][Ne]);else r.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[ve]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=L.textures;for(let ve=0,Ne=W.length;ve<Ne;ve++){const _e=n.get(W[ve]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(W[ve])}n.remove(L)}let U=0;function H(){U=0}function ne(){const L=U;return L>=i.maxTextures&&lt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),U+=1,L}function K(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function he(L,T){const W=n.get(L);if(L.isVideoTexture&&Ce(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const ve=L.image;if(ve===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(W,L,T);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function fe(L,T){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){oe(W,L,T);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function ae(L,T){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){oe(W,L,T);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function X(L,T){const W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){te(W,L,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}const j={[So]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},me={[un]:r.NEAREST,[mh]:r.NEAREST_MIPMAP_NEAREST,[Ss]:r.NEAREST_MIPMAP_LINEAR,[Zt]:r.LINEAR,[ho]:r.LINEAR_MIPMAP_NEAREST,[Si]:r.LINEAR_MIPMAP_LINEAR},Re={[Xp]:r.NEVER,[Kp]:r.ALWAYS,[qp]:r.LESS,[tc]:r.LEQUAL,[Yp]:r.EQUAL,[nc]:r.GEQUAL,[Zp]:r.GREATER,[Jp]:r.NOTEQUAL};function be(L,T){if(T.type===In&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zt||T.magFilter===ho||T.magFilter===Ss||T.magFilter===Si||T.minFilter===Zt||T.minFilter===ho||T.minFilter===Ss||T.minFilter===Si)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,j[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,j[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,j[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,me[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,me[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===un||T.minFilter!==Ss&&T.minFilter!==Si||T.type===In&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ve(L,T){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",A));const ve=T.source;let Ne=h.get(ve);Ne===void 0&&(Ne={},h.set(ve,Ne));const _e=K(T);if(_e!==L.__cacheKey){Ne[_e]===void 0&&(Ne[_e]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Ne[_e].usedTimes++;const Pe=Ne[L.__cacheKey];Pe!==void 0&&(Ne[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&E(T)),L.__cacheKey=_e,L.__webglTexture=Ne[_e].texture}return W}function Qe(L,T,W){return Math.floor(Math.floor(L/W)/T)}function Ge(L,T,W,ve){const _e=L.updateRanges;if(_e.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,W,ve,T.data);else{_e.sort((Ee,De)=>Ee.start-De.start);let Pe=0;for(let Ee=1;Ee<_e.length;Ee++){const De=_e[Pe],we=_e[Ee],k=De.start+De.count,Z=Qe(we.start,T.width,4),le=Qe(De.start,T.width,4);we.start<=k+1&&Z===le&&Qe(we.start+we.count-1,T.width,4)===Z?De.count=Math.max(De.count,we.start+we.count-De.start):(++Pe,_e[Pe]=we)}_e.length=Pe+1;const Me=r.getParameter(r.UNPACK_ROW_LENGTH),He=r.getParameter(r.UNPACK_SKIP_PIXELS),qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,De=_e.length;Ee<De;Ee++){const we=_e[Ee],k=Math.floor(we.start/4),Z=Math.ceil(we.count/4),le=k%T.width,F=Math.floor(k/T.width),ee=Z,Q=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,le,F,ee,Q,W,ve,T.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Me),r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,qe)}}function oe(L,T,W){let ve=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=r.TEXTURE_3D);const Ne=Ve(L,T),_e=T.source;t.bindTexture(ve,L.__webglTexture,r.TEXTURE0+W);const Pe=n.get(_e);if(_e.version!==Pe.__version||Ne===!0){t.activeTexture(r.TEXTURE0+W);const Me=Ft.getPrimaries(Ft.workingColorSpace),He=T.colorSpace===ki?null:Ft.getPrimaries(T.colorSpace),qe=T.colorSpace===ki||Me===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ee=_(T.image,!1,i.maxTextureSize);Ee=Ie(T,Ee);const De=s.convert(T.format,T.colorSpace),we=s.convert(T.type);let k=S(T.internalFormat,De,we,T.colorSpace,T.isVideoTexture);be(ve,T);let Z;const le=T.mipmaps,F=T.isVideoTexture!==!0,ee=Pe.__version===void 0||Ne===!0,Q=_e.dataReady,ce=I(T,Ee);if(T.isDepthTexture)k=b(T.format===ar,T.type),ee&&(F?t.texStorage2D(r.TEXTURE_2D,1,k,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,k,Ee.width,Ee.height,0,De,we,null));else if(T.isDataTexture)if(le.length>0){F&&ee&&t.texStorage2D(r.TEXTURE_2D,ce,k,le[0].width,le[0].height);for(let $=0,z=le.length;$<z;$++)Z=le[$],F?Q&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Z.width,Z.height,De,we,Z.data):t.texImage2D(r.TEXTURE_2D,$,k,Z.width,Z.height,0,De,we,Z.data);T.generateMipmaps=!1}else F?(ee&&t.texStorage2D(r.TEXTURE_2D,ce,k,Ee.width,Ee.height),Q&&Ge(T,Ee,De,we)):t.texImage2D(r.TEXTURE_2D,0,k,Ee.width,Ee.height,0,De,we,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,k,le[0].width,le[0].height,Ee.depth);for(let $=0,z=le.length;$<z;$++)if(Z=le[$],T.format!==Dn)if(De!==null)if(F){if(Q)if(T.layerUpdates.size>0){const ge=Zu(Z.width,Z.height,T.format,T.type);for(const ze of T.layerUpdates){const ke=Z.data.subarray(ze*ge/Z.data.BYTES_PER_ELEMENT,(ze+1)*ge/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ze,Z.width,Z.height,1,De,ke)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Z.width,Z.height,Ee.depth,De,Z.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,k,Z.width,Z.height,Ee.depth,0,Z.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Q&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Z.width,Z.height,Ee.depth,De,we,Z.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,k,Z.width,Z.height,Ee.depth,0,De,we,Z.data)}else{F&&ee&&t.texStorage2D(r.TEXTURE_2D,ce,k,le[0].width,le[0].height);for(let $=0,z=le.length;$<z;$++)Z=le[$],T.format!==Dn?De!==null?F?Q&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Z.width,Z.height,De,Z.data):t.compressedTexImage2D(r.TEXTURE_2D,$,k,Z.width,Z.height,0,Z.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Q&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Z.width,Z.height,De,we,Z.data):t.texImage2D(r.TEXTURE_2D,$,k,Z.width,Z.height,0,De,we,Z.data)}else if(T.isDataArrayTexture)if(F){if(ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,k,Ee.width,Ee.height,Ee.depth),Q)if(T.layerUpdates.size>0){const $=Zu(Ee.width,Ee.height,T.format,T.type);for(const z of T.layerUpdates){const ge=Ee.data.subarray(z*$/Ee.data.BYTES_PER_ELEMENT,(z+1)*$/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,z,Ee.width,Ee.height,1,De,we,ge)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,we,Ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,k,Ee.width,Ee.height,Ee.depth,0,De,we,Ee.data);else if(T.isData3DTexture)F?(ee&&t.texStorage3D(r.TEXTURE_3D,ce,k,Ee.width,Ee.height,Ee.depth),Q&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,we,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,k,Ee.width,Ee.height,Ee.depth,0,De,we,Ee.data);else if(T.isFramebufferTexture){if(ee)if(F)t.texStorage2D(r.TEXTURE_2D,ce,k,Ee.width,Ee.height);else{let $=Ee.width,z=Ee.height;for(let ge=0;ge<ce;ge++)t.texImage2D(r.TEXTURE_2D,ge,k,$,z,0,De,we,null),$>>=1,z>>=1}}else if(le.length>0){if(F&&ee){const $=ye(le[0]);t.texStorage2D(r.TEXTURE_2D,ce,k,$.width,$.height)}for(let $=0,z=le.length;$<z;$++)Z=le[$],F?Q&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,De,we,Z):t.texImage2D(r.TEXTURE_2D,$,k,De,we,Z);T.generateMipmaps=!1}else if(F){if(ee){const $=ye(Ee);t.texStorage2D(r.TEXTURE_2D,ce,k,$.width,$.height)}Q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,De,we,Ee)}else t.texImage2D(r.TEXTURE_2D,0,k,De,we,Ee);g(T)&&v(ve),Pe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function te(L,T,W){if(T.image.length!==6)return;const ve=Ve(L,T),Ne=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+W);const _e=n.get(Ne);if(Ne.version!==_e.__version||ve===!0){t.activeTexture(r.TEXTURE0+W);const Pe=Ft.getPrimaries(Ft.workingColorSpace),Me=T.colorSpace===ki?null:Ft.getPrimaries(T.colorSpace),He=T.colorSpace===ki||Pe===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const qe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,De=[];for(let z=0;z<6;z++)!qe&&!Ee?De[z]=_(T.image[z],!0,i.maxCubemapSize):De[z]=Ee?T.image[z].image:T.image[z],De[z]=Ie(T,De[z]);const we=De[0],k=s.convert(T.format,T.colorSpace),Z=s.convert(T.type),le=S(T.internalFormat,k,Z,T.colorSpace),F=T.isVideoTexture!==!0,ee=_e.__version===void 0||ve===!0,Q=Ne.dataReady;let ce=I(T,we);be(r.TEXTURE_CUBE_MAP,T);let $;if(qe){F&&ee&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,le,we.width,we.height);for(let z=0;z<6;z++){$=De[z].mipmaps;for(let ge=0;ge<$.length;ge++){const ze=$[ge];T.format!==Dn?k!==null?F?Q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge,0,0,ze.width,ze.height,k,ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge,le,ze.width,ze.height,0,ze.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge,0,0,ze.width,ze.height,k,Z,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge,le,ze.width,ze.height,0,k,Z,ze.data)}}}else{if($=T.mipmaps,F&&ee){$.length>0&&ce++;const z=ye(De[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,le,z.width,z.height)}for(let z=0;z<6;z++)if(Ee){F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,De[z].width,De[z].height,k,Z,De[z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,le,De[z].width,De[z].height,0,k,Z,De[z].data);for(let ge=0;ge<$.length;ge++){const ke=$[ge].image[z].image;F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge+1,0,0,ke.width,ke.height,k,Z,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge+1,le,ke.width,ke.height,0,k,Z,ke.data)}}else{F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,k,Z,De[z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,le,k,Z,De[z]);for(let ge=0;ge<$.length;ge++){const ze=$[ge];F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge+1,0,0,k,Z,ze.image[z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge+1,le,k,Z,ze.image[z])}}}g(T)&&v(r.TEXTURE_CUBE_MAP),_e.__version=Ne.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function re(L,T,W,ve,Ne,_e){const Pe=s.convert(W.format,W.colorSpace),Me=s.convert(W.type),He=S(W.internalFormat,Pe,Me,W.colorSpace),qe=n.get(T),Ee=n.get(W);if(Ee.__renderTarget=T,!qe.__hasExternalTextures){const De=Math.max(1,T.width>>_e),we=Math.max(1,T.height>>_e);Ne===r.TEXTURE_3D||Ne===r.TEXTURE_2D_ARRAY?t.texImage3D(Ne,_e,He,De,we,T.depth,0,Pe,Me,null):t.texImage2D(Ne,_e,He,De,we,0,Pe,Me,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Se(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,Ne,Ee.__webglTexture,0,N(T)):(Ne===r.TEXTURE_2D||Ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,Ne,Ee.__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(L,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const ve=T.depthTexture,Ne=ve&&ve.isDepthTexture?ve.type:null,_e=b(T.stencilBuffer,Ne),Pe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Se(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(T),_e,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(T),_e,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,_e,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,L)}else{const ve=T.textures;for(let Ne=0;Ne<ve.length;Ne++){const _e=ve[Ne],Pe=s.convert(_e.format,_e.colorSpace),Me=s.convert(_e.type),He=S(_e.internalFormat,Pe,Me,_e.colorSpace);Se(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(T),He,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(T),He,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,He,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(L,T,W){const ve=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ne=n.get(T.depthTexture);if(Ne.__renderTarget=T,(!Ne.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ve){if(Ne.__webglInit===void 0&&(Ne.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),Ne.__webglTexture===void 0){Ne.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Ne.__webglTexture),be(r.TEXTURE_CUBE_MAP,T.depthTexture);const qe=s.convert(T.depthTexture.format),Ee=s.convert(T.depthTexture.type);let De;T.depthTexture.format===Ci?De=r.DEPTH_COMPONENT24:T.depthTexture.format===ar&&(De=r.DEPTH24_STENCIL8);for(let we=0;we<6;we++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,De,T.width,T.height,0,qe,Ee,null)}}else he(T.depthTexture,0);const _e=Ne.__webglTexture,Pe=N(T),Me=ve?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,He=T.depthTexture.format===ar?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ci)Se(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,He,Me,_e,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,He,Me,_e,0);else if(T.depthTexture.format===ar)Se(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,He,Me,_e,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,He,Me,_e,0);else throw new Error("Unknown depthTexture format")}function Te(L){const T=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ve=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Ne)};ve.addEventListener("dispose",Ne),T.__depthDisposeCallback=Ne}T.__boundDepthTexture=ve}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let ve=0;ve<6;ve++)Le(T.__webglFramebuffer[ve],L,ve);else{const ve=L.texture.mipmaps;ve&&ve.length>0?Le(T.__webglFramebuffer[0],L,0):Le(T.__webglFramebuffer,L,0)}else if(W){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=r.createRenderbuffer(),xe(T.__webglDepthbuffer[ve],L,!1);else{const Ne=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer[ve];r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,_e)}}else{const ve=L.texture.mipmaps;if(ve&&ve.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),xe(T.__webglDepthbuffer,L,!1);else{const Ne=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,_e)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(L,T,W){const ve=n.get(L);T!==void 0&&re(ve.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Te(L)}function Oe(L){const T=L.texture,W=n.get(L),ve=n.get(T);L.addEventListener("dispose",D);const Ne=L.textures,_e=L.isWebGLCubeRenderTarget===!0,Pe=Ne.length>1;if(Pe||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=T.version,o.memory.textures++),_e){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let He=0;He<T.mipmaps.length;He++)W.__webglFramebuffer[Me][He]=r.createFramebuffer()}else W.__webglFramebuffer[Me]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<T.mipmaps.length;Me++)W.__webglFramebuffer[Me]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let Me=0,He=Ne.length;Me<He;Me++){const qe=n.get(Ne[Me]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&Se(L)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<Ne.length;Me++){const He=Ne[Me];W.__webglColorRenderbuffer[Me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);const qe=s.convert(He.format,He.colorSpace),Ee=s.convert(He.type),De=S(He.internalFormat,qe,Ee,He.colorSpace,L.isXRRenderTarget===!0),we=N(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,De,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),be(r.TEXTURE_CUBE_MAP,T);for(let Me=0;Me<6;Me++)if(T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)re(W.__webglFramebuffer[Me][He],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He);else re(W.__webglFramebuffer[Me],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(T)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let Me=0,He=Ne.length;Me<He;Me++){const qe=Ne[Me],Ee=n.get(qe);let De=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(De,Ee.__webglTexture),be(De,qe),re(W.__webglFramebuffer,L,qe,r.COLOR_ATTACHMENT0+Me,De,0),g(qe)&&v(De)}t.unbindTexture()}else{let Me=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,ve.__webglTexture),be(Me,T),T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)re(W.__webglFramebuffer[He],L,T,r.COLOR_ATTACHMENT0,Me,He);else re(W.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,Me,0);g(T)&&v(Me),t.unbindTexture()}L.depthBuffer&&Te(L)}function ie(L){const T=L.textures;for(let W=0,ve=T.length;W<ve;W++){const Ne=T[W];if(g(Ne)){const _e=x(L),Pe=n.get(Ne).__webglTexture;t.bindTexture(_e,Pe),v(_e),t.unbindTexture()}}}const pe=[],ue=[];function Ae(L){if(L.samples>0){if(Se(L)===!1){const T=L.textures,W=L.width,ve=L.height;let Ne=r.COLOR_BUFFER_BIT;const _e=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=n.get(L),Me=T.length>1;if(Me)for(let qe=0;qe<T.length;qe++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const He=L.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let qe=0;qe<T.length;qe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Ne|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Ne|=r.STENCIL_BUFFER_BIT)),Me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[qe]);const Ee=n.get(T[qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,W,ve,0,0,W,ve,Ne,r.NEAREST),l===!0&&(pe.length=0,ue.length=0,pe.push(r.COLOR_ATTACHMENT0+qe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(pe.push(_e),ue.push(_e),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ue)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let qe=0;qe<T.length;qe++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[qe]);const Ee=n.get(T[qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function N(L){return Math.min(i.maxSamples,L.samples)}function Se(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ie(L,T){const W=L.colorSpace,ve=L.format,Ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Vr&&W!==ki&&(Ft.getTransfer(W)===Vt?(ve!==Dn||Ne!==kn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",W)),T}function ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=ne,this.resetTextureUnits=H,this.setTexture2D=he,this.setTexture2DArray=fe,this.setTexture3D=ae,this.setTextureCube=X,this.rebindTextures=$e,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sg(r,e){function t(n,i=ki){let s;const o=Ft.getTransfer(i);if(n===kn)return r.UNSIGNED_BYTE;if(n===Zl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===gh)return r.BYTE;if(n===vh)return r.SHORT;if(n===Ps)return r.UNSIGNED_SHORT;if(n===Yl)return r.INT;if(n===ii)return r.UNSIGNED_INT;if(n===In)return r.FLOAT;if(n===Ei)return r.HALF_FLOAT;if(n===yh)return r.ALPHA;if(n===Mh)return r.RGB;if(n===Dn)return r.RGBA;if(n===Ci)return r.DEPTH_COMPONENT;if(n===ar)return r.DEPTH_STENCIL;if(n===Kl)return r.RED;if(n===Vo)return r.RED_INTEGER;if(n===kr)return r.RG;if(n===jl)return r.RG_INTEGER;if(n===Ql)return r.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===sl||n===ol||n===al)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ll||n===cl)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ul)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return s.COMPRESSED_R11_EAC;if(n===dl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fl)return s.COMPRESSED_RG11_EAC;if(n===pl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ml||n===gl||n===vl||n===_l||n===xl||n===yl||n===Ml||n===Sl||n===bl||n===wl||n===Tl||n===Al||n===El||n===Cl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ml)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Rl||n===Il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Pl)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Ll||n===Nl||n===Ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Dl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const O1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ih(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:O1,fragmentShader:B1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $1 extends Pi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new z1,v={},x=t.getContextAttributes();let S=null,b=null;const I=[],A=[],D=new We;let w=null;const E=new vn;E.viewport=new kt;const O=new vn;O.viewport=new kt;const U=[E,O],H=new Xm;let ne=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let te=I[oe];return te===void 0&&(te=new qa,I[oe]=te),te.getTargetRaySpace()},this.getControllerGrip=function(oe){let te=I[oe];return te===void 0&&(te=new qa,I[oe]=te),te.getGripSpace()},this.getHand=function(oe){let te=I[oe];return te===void 0&&(te=new qa,I[oe]=te),te.getHandSpace()};function he(oe){const te=A.indexOf(oe.inputSource);if(te===-1)return;const re=I[te];re!==void 0&&(re.update(oe.inputSource,oe.frame,c||o),re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function fe(){i.removeEventListener("select",he),i.removeEventListener("selectstart",he),i.removeEventListener("selectend",he),i.removeEventListener("squeeze",he),i.removeEventListener("squeezestart",he),i.removeEventListener("squeezeend",he),i.removeEventListener("end",fe),i.removeEventListener("inputsourceschange",ae);for(let oe=0;oe<I.length;oe++){const te=A[oe];te!==null&&(A[oe]=null,I[oe].disconnect(te))}ne=null,K=null,g.reset();for(const oe in v)delete v[oe];e.setRenderTarget(S),f=null,h=null,d=null,i=null,b=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(oe){if(i=oe,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",he),i.addEventListener("selectstart",he),i.addEventListener("selectend",he),i.addEventListener("squeeze",he),i.addEventListener("squeezestart",he),i.addEventListener("squeezeend",he),i.addEventListener("end",fe),i.addEventListener("inputsourceschange",ae),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,xe=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=x.stencil?ar:Ci,xe=x.stencil?Rs:ii);const Te={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Te),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Qn(h.textureWidth,h.textureHeight,{format:Dn,type:kn,depthTexture:new Ls(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Qn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(oe){for(let te=0;te<oe.removed.length;te++){const re=oe.removed[te],xe=A.indexOf(re);xe>=0&&(A[xe]=null,I[xe].disconnect(re))}for(let te=0;te<oe.added.length;te++){const re=oe.added[te];let xe=A.indexOf(re);if(xe===-1){for(let Te=0;Te<I.length;Te++)if(Te>=A.length){A.push(re),xe=Te;break}else if(A[Te]===null){A[Te]=re,xe=Te;break}if(xe===-1)break}const Le=I[xe];Le&&Le.connect(re)}}const X=new B,j=new B;function me(oe,te,re){X.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(re.matrixWorld);const xe=X.distanceTo(j),Le=te.projectionMatrix.elements,Te=re.projectionMatrix.elements,$e=Le[14]/(Le[10]-1),Oe=Le[14]/(Le[10]+1),ie=(Le[9]+1)/Le[5],pe=(Le[9]-1)/Le[5],ue=(Le[8]-1)/Le[0],Ae=(Te[8]+1)/Te[0],N=$e*ue,Se=$e*Ae,Ce=xe/(-ue+Ae),Ie=Ce*-ue;if(te.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ie),oe.translateZ(Ce),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Le[10]===-1)oe.projectionMatrix.copy(te.projectionMatrix),oe.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ye=$e+Ce,L=Oe+Ce,T=N-Ie,W=Se+(xe-Ie),ve=ie*Oe/L*ye,Ne=pe*Oe/L*ye;oe.projectionMatrix.makePerspective(T,W,ve,Ne,ye,L),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Re(oe,te){te===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(te.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(i===null)return;let te=oe.near,re=oe.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(re=g.depthFar)),H.near=O.near=E.near=te,H.far=O.far=E.far=re,(ne!==H.near||K!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),ne=H.near,K=H.far),H.layers.mask=oe.layers.mask|6,E.layers.mask=H.layers.mask&-5,O.layers.mask=H.layers.mask&-3;const xe=oe.parent,Le=H.cameras;Re(H,xe);for(let Te=0;Te<Le.length;Te++)Re(Le[Te],xe);Le.length===2?me(H,E,O):H.projectionMatrix.copy(E.projectionMatrix),be(oe,H,xe)};function be(oe,te,re){re===null?oe.matrix.copy(te.matrixWorld):(oe.matrix.copy(re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(te.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(te.projectionMatrix),oe.projectionMatrixInverse.copy(te.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Is*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(oe){l=oe,h!==null&&(h.fixedFoveation=oe),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(oe){return v[oe]};let Ve=null;function Qe(oe,te){if(u=te.getViewerPose(c||o),m=te,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let xe=!1;re.length!==H.cameras.length&&(H.cameras.length=0,xe=!0);for(let Oe=0;Oe<re.length;Oe++){const ie=re[Oe];let pe=null;if(f!==null)pe=f.getViewport(ie);else{const Ae=d.getViewSubImage(h,ie);pe=Ae.viewport,Oe===0&&(e.setRenderTargetTextures(b,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(b))}let ue=U[Oe];ue===void 0&&(ue=new vn,ue.layers.enable(Oe),ue.viewport=new kt,U[Oe]=ue),ue.matrix.fromArray(ie.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ie.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(pe.x,pe.y,pe.width,pe.height),Oe===0&&(H.matrix.copy(ue.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),xe===!0&&H.cameras.push(ue)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Oe=d.getDepthInformation(re[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,i.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Oe=0;Oe<re.length;Oe++){const ie=re[Oe].camera;if(ie){let pe=v[ie];pe||(pe=new Ih,v[ie]=pe);const ue=d.getCameraImage(ie);pe.sourceTexture=ue}}}}for(let re=0;re<I.length;re++){const xe=A[re],Le=I[re];xe!==null&&Le!==void 0&&Le.update(xe,te,c||o)}Ve&&Ve(oe,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}const Ge=new eg;Ge.setAnimationLoop(Qe),this.setAnimationLoop=function(oe){Ve=oe},this.dispose=function(){}}}const Ir=new ei,k1=new At;function V1(r,e){function t(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function n(g,v){v.color.getRGB(g.fogColor.value,Tm(r)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function i(g,v,x,S,b){v.isMeshBasicMaterial?s(g,v):v.isMeshLambertMaterial?(s(g,v),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(s(g,v),d(g,v)):v.isMeshPhongMaterial?(s(g,v),u(g,v),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(s(g,v),h(g,v),v.isMeshPhysicalMaterial&&f(g,v,b)):v.isMeshMatcapMaterial?(s(g,v),m(g,v)):v.isMeshDepthMaterial?s(g,v):v.isMeshDistanceMaterial?(s(g,v),_(g,v)):v.isMeshNormalMaterial?s(g,v):v.isLineBasicMaterial?(o(g,v),v.isLineDashedMaterial&&a(g,v)):v.isPointsMaterial?l(g,v,x,S):v.isSpriteMaterial?c(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,t(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===Ln&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,t(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===Ln&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,t(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,t(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const x=e.get(v),S=x.envMap,b=x.envMapRotation;S&&(g.envMap.value=S,Ir.copy(b),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),g.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(Ir)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,g.aoMapTransform))}function o(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform))}function a(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function l(g,v,x,S){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*x,g.scale.value=S*.5,v.map&&(g.map.value=v.map,t(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function c(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function u(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function d(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function h(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function f(g,v,x){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ln&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,v){v.matcap&&(g.matcap.value=v.matcap)}function _(g,v){const x=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G1(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=i[x.id];b===void 0&&(m(x),b=u(x),i[x.id]=b,x.addEventListener("dispose",g));const I=S.program;n.updateUBOMapping(x,I);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function u(x){const S=d();x.__bindingPointIndex=S;const b=r.createBuffer(),I=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,I,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=i[x.id],b=x.uniforms,I=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,D=b.length;A<D;A++){const w=Array.isArray(b[A])?b[A]:[b[A]];for(let E=0,O=w.length;E<O;E++){const U=w[E];if(f(U,A,E,I)===!0){const H=U.__offset,ne=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let he=0;he<ne.length;he++){const fe=ne[he],ae=_(fe);typeof fe=="number"||typeof fe=="boolean"?(U.__data[0]=fe,r.bufferSubData(r.UNIFORM_BUFFER,H+K,U.__data)):fe.isMatrix3?(U.__data[0]=fe.elements[0],U.__data[1]=fe.elements[1],U.__data[2]=fe.elements[2],U.__data[3]=0,U.__data[4]=fe.elements[3],U.__data[5]=fe.elements[4],U.__data[6]=fe.elements[5],U.__data[7]=0,U.__data[8]=fe.elements[6],U.__data[9]=fe.elements[7],U.__data[10]=fe.elements[8],U.__data[11]=0):(fe.toArray(U.__data,K),K+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,S,b,I){const A=x.value,D=S+"_"+b;if(I[D]===void 0)return typeof A=="number"||typeof A=="boolean"?I[D]=A:I[D]=A.clone(),!0;{const w=I[D];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return I[D]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function m(x){const S=x.uniforms;let b=0;const I=16;for(let D=0,w=S.length;D<w;D++){const E=Array.isArray(S[D])?S[D]:[S[D]];for(let O=0,U=E.length;O<U;O++){const H=E[O],ne=Array.isArray(H.value)?H.value:[H.value];for(let K=0,he=ne.length;K<he;K++){const fe=ne[K],ae=_(fe),X=b%I,j=X%ae.boundary,me=X+j;b+=j,me!==0&&I-me<ae.storage&&(b+=I-me),H.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=ae.storage}}}const A=b%I;return A>0&&(b+=I-A),x.__size=b,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",x),S}function g(x){const S=x.target;S.removeEventListener("dispose",g);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function v(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:v}}const H1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function W1(){return yi===null&&(yi=new pi(H1,16,16,kr,Ei),yi.name="DFG_LUT",yi.minFilter=Zt,yi.magFilter=Zt,yi.wrapS=Gn,yi.wrapT=Gn,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class og{constructor(e={}){const{canvas:t=Qp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=kn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,g=new Set([Ql,jl,Vo]),v=new Set([kn,ii,Ps,Rs,Zl,Jl]),x=new Uint32Array(4),S=new Int32Array(4);let b=null,I=null;const A=[],D=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let O=!1;this._outputColorSpace=$n;let U=0,H=0,ne=null,K=-1,he=null;const fe=new kt,ae=new kt;let X=null;const j=new ht(0);let me=0,Re=t.width,be=t.height,Ve=1,Qe=null,Ge=null;const oe=new kt(0,0,Re,be),te=new kt(0,0,Re,be);let re=!1;const xe=new Os;let Le=!1,Te=!1;const $e=new At,Oe=new B,ie=new kt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Ae(){return ne===null?Ve:1}let N=n;function Se(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",ke,!1),N===null){const q="webgl2";if(N=Se(q,C),N===null)throw Se(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw St("WebGLRenderer: "+C.message),C}let Ce,Ie,ye,L,T,W,ve,Ne,_e,Pe,Me,He,qe,Ee,De,we,k,Z,le,F,ee,Q,ce;function $(){Ce=new qS(N),Ce.init(),ee=new sg(N,Ce),Ie=new zS(N,Ce,e,ee),ye=new U1(N,Ce),Ie.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),L=new JS(N),T=new M1,W=new F1(N,Ce,ye,T,Ie,ee,L),ve=new XS(E),Ne=new ty(N),Q=new OS(N,Ne),_e=new YS(N,Ne,L,Q),Pe=new jS(N,_e,Ne,Q,L),Z=new KS(N,Ie,W),De=new $S(T),Me=new y1(E,ve,Ce,Ie,Q,De),He=new V1(E,T),qe=new b1,Ee=new P1(Ce),k=new FS(E,ve,ye,Pe,m,l),we=new N1(E,Pe,Ie),ce=new G1(N,L,Ie,ye),le=new BS(N,Ce,L),F=new ZS(N,Ce,L),L.programs=Me.programs,E.capabilities=Ie,E.extensions=Ce,E.properties=T,E.renderLists=qe,E.shadowMap=we,E.state=ye,E.info=L}$(),_!==kn&&(w=new eb(_,t.width,t.height,i,s));const z=new $1(E,N);this.xr=z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(C){C!==void 0&&(Ve=C,this.setSize(Re,be,!1))},this.getSize=function(C){return C.set(Re,be)},this.setSize=function(C,q,de=!0){if(z.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=C,be=q,t.width=Math.floor(C*Ve),t.height=Math.floor(q*Ve),de===!0&&(t.style.width=C+"px",t.style.height=q+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Re*Ve,be*Ve).floor()},this.setDrawingBufferSize=function(C,q,de){Re=C,be=q,Ve=de,t.width=Math.floor(C*de),t.height=Math.floor(q*de),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(_===kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(fe)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,q,de,J){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,q,de,J),ye.viewport(fe.copy(oe).multiplyScalar(Ve).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,q,de,J){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,q,de,J),ye.scissor(ae.copy(te).multiplyScalar(Ve).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){ye.setScissorTest(re=C)},this.setOpaqueSort=function(C){Qe=C},this.setTransparentSort=function(C){Ge=C},this.getClearColor=function(C){return C.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,de=!0){let J=0;if(C){let se=!1;if(ne!==null){const Xe=ne.texture.format;se=g.has(Xe)}if(se){const Xe=ne.texture.type,mt=v.has(Xe),ut=k.getClearColor(),yt=k.getClearAlpha(),wt=ut.r,Dt=ut.g,Nt=ut.b;mt?(x[0]=wt,x[1]=Dt,x[2]=Nt,x[3]=yt,N.clearBufferuiv(N.COLOR,0,x)):(S[0]=wt,S[1]=Dt,S[2]=Nt,S[3]=yt,N.clearBufferiv(N.COLOR,0,S))}else J|=N.COLOR_BUFFER_BIT}q&&(J|=N.DEPTH_BUFFER_BIT),de&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),k.dispose(),qe.dispose(),Ee.dispose(),T.dispose(),ve.dispose(),Pe.dispose(),Q.dispose(),ce.dispose(),Me.dispose(),z.dispose(),z.removeEventListener("sessionstart",bt),z.removeEventListener("sessionend",ft),_t.stop()};function ge(C){C.preventDefault(),Po("WebGLRenderer: Context Lost."),O=!0}function ze(){Po("WebGLRenderer: Context Restored."),O=!1;const C=L.autoReset,q=we.enabled,de=we.autoUpdate,J=we.needsUpdate,se=we.type;$(),L.autoReset=C,we.enabled=q,we.autoUpdate=de,we.needsUpdate=J,we.type=se}function ke(C){St("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ue(C){const q=C.target;q.removeEventListener("dispose",Ue),je(q)}function je(C){ot(C),T.remove(C)}function ot(C){const q=T.get(C).programs;q!==void 0&&(q.forEach(function(de){Me.releaseProgram(de)}),C.isShaderMaterial&&Me.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,de,J,se,Xe){q===null&&(q=pe);const mt=se.isMesh&&se.matrixWorld.determinant()<0,ut=Ye(C,q,de,J,se);ye.setMaterial(J,mt);let yt=de.index,wt=1;if(J.wireframe===!0){if(yt=_e.getWireframeAttribute(de),yt===void 0)return;wt=2}const Dt=de.drawRange,Nt=de.attributes.position;let Tt=Dt.start*wt,Gt=(Dt.start+Dt.count)*wt;Xe!==null&&(Tt=Math.max(Tt,Xe.start*wt),Gt=Math.min(Gt,(Xe.start+Xe.count)*wt)),yt!==null?(Tt=Math.max(Tt,0),Gt=Math.min(Gt,yt.count)):Nt!=null&&(Tt=Math.max(Tt,0),Gt=Math.min(Gt,Nt.count));const ln=Gt-Tt;if(ln<0||ln===1/0)return;Q.setup(se,J,ut,de,yt);let nn,Ht=le;if(yt!==null&&(nn=Ne.get(yt),Ht=F,Ht.setIndex(nn)),se.isMesh)J.wireframe===!0?(ye.setLineWidth(J.wireframeLinewidth*Ae()),Ht.setMode(N.LINES)):Ht.setMode(N.TRIANGLES);else if(se.isLine){let bn=J.linewidth;bn===void 0&&(bn=1),ye.setLineWidth(bn*Ae()),se.isLineSegments?Ht.setMode(N.LINES):se.isLineLoop?Ht.setMode(N.LINE_LOOP):Ht.setMode(N.LINE_STRIP)}else se.isPoints?Ht.setMode(N.POINTS):se.isSprite&&Ht.setMode(N.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)Ro("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ht.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const bn=se._multiDrawStarts,Mt=se._multiDrawCounts,qn=se._multiDrawCount,$t=yt?Ne.get(yt).bytesPerElement:1,oi=T.get(J).currentProgram.getUniforms();for(let gi=0;gi<qn;gi++)oi.setValue(N,"_gl_DrawID",gi),Ht.render(bn[gi]/$t,Mt[gi])}else if(se.isInstancedMesh)Ht.renderInstances(Tt,ln,se.count);else if(de.isInstancedBufferGeometry){const bn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Mt=Math.min(de.instanceCount,bn);Ht.renderInstances(Tt,ln,Mt)}else Ht.render(Tt,ln)};function Ze(C,q,de){C.transparent===!0&&C.side===Jn&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,Be(C,q,de),C.side=Wi,C.needsUpdate=!0,Be(C,q,de),C.side=Jn):Be(C,q,de)}this.compile=function(C,q,de=null){de===null&&(de=C),I=Ee.get(de),I.init(q),D.push(I),de.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(I.pushLight(se),se.castShadow&&I.pushShadow(se))}),C!==de&&C.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(I.pushLight(se),se.castShadow&&I.pushShadow(se))}),I.setupLights();const J=new Set;return C.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Xe=se.material;if(Xe)if(Array.isArray(Xe))for(let mt=0;mt<Xe.length;mt++){const ut=Xe[mt];Ze(ut,de,se),J.add(ut)}else Ze(Xe,de,se),J.add(Xe)}),I=D.pop(),J},this.compileAsync=function(C,q,de=null){const J=this.compile(C,q,de);return new Promise(se=>{function Xe(){if(J.forEach(function(mt){T.get(mt).currentProgram.isReady()&&J.delete(mt)}),J.size===0){se(C);return}setTimeout(Xe,10)}Ce.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let rt=null;function vt(C){rt&&rt(C)}function bt(){_t.stop()}function ft(){_t.start()}const _t=new eg;_t.setAnimationLoop(vt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(C){rt=C,z.setAnimationLoop(C),C===null?_t.stop():_t.start()},z.addEventListener("sessionstart",bt),z.addEventListener("sessionend",ft),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const de=z.enabled===!0&&z.isPresenting===!0,J=w!==null&&(ne===null||de)&&w.begin(E,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(q),q=z.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,q,ne),I=Ee.get(C,D.length),I.init(q),D.push(I),$e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),xe.setFromProjectionMatrix($e,Kn,q.reversedDepth),Te=this.localClippingEnabled,Le=De.init(this.clippingPlanes,Te),b=qe.get(C,A.length),b.init(),A.push(b),z.enabled===!0&&z.isPresenting===!0){const mt=E.xr.getDepthSensingMesh();mt!==null&&pt(mt,q,-1/0,E.sortObjects)}pt(C,q,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(Qe,Ge),ue=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ue&&k.addToRenderList(b,C),this.info.render.frame++,Le===!0&&De.beginShadows();const se=I.state.shadowsArray;if(we.render(se,C,q),Le===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&w.hasRenderPass())===!1){const mt=b.opaque,ut=b.transmissive;if(I.setupLights(),q.isArrayCamera){const yt=q.cameras;if(ut.length>0)for(let wt=0,Dt=yt.length;wt<Dt;wt++){const Nt=yt[wt];ct(mt,ut,C,Nt)}ue&&k.render(C);for(let wt=0,Dt=yt.length;wt<Dt;wt++){const Nt=yt[wt];gt(b,C,Nt,Nt.viewport)}}else ut.length>0&&ct(mt,ut,C,q),ue&&k.render(C),gt(b,C,q)}ne!==null&&H===0&&(W.updateMultisampleRenderTarget(ne),W.updateRenderTargetMipmap(ne)),J&&w.end(E),C.isScene===!0&&C.onAfterRender(E,C,q),Q.resetDefaultState(),K=-1,he=null,D.pop(),D.length>0?(I=D[D.length-1],Le===!0&&De.setGlobalState(E.clippingPlanes,I.state.camera)):I=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function pt(C,q,de,J){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){J&&ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4($e);const mt=Pe.update(C),ut=C.material;ut.visible&&b.push(C,mt,ut,de,ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){const mt=Pe.update(C),ut=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ie.copy(C.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),ie.copy(mt.boundingSphere.center)),ie.applyMatrix4(C.matrixWorld).applyMatrix4($e)),Array.isArray(ut)){const yt=mt.groups;for(let wt=0,Dt=yt.length;wt<Dt;wt++){const Nt=yt[wt],Tt=ut[Nt.materialIndex];Tt&&Tt.visible&&b.push(C,mt,Tt,de,ie.z,Nt)}}else ut.visible&&b.push(C,mt,ut,de,ie.z,null)}}const Xe=C.children;for(let mt=0,ut=Xe.length;mt<ut;mt++)pt(Xe[mt],q,de,J)}function gt(C,q,de,J){const{opaque:se,transmissive:Xe,transparent:mt}=C;I.setupLightsView(de),Le===!0&&De.setGlobalState(E.clippingPlanes,de),J&&ye.viewport(fe.copy(J)),se.length>0&&xt(se,q,de),Xe.length>0&&xt(Xe,q,de),mt.length>0&&xt(mt,q,de),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ct(C,q,de,J){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[J.id]===void 0){const Tt=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[J.id]=new Qn(1,1,{generateMipmaps:!0,type:Tt?Ei:kn,minFilter:Si,samples:Math.max(4,Ie.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const Xe=I.state.transmissionRenderTarget[J.id],mt=J.viewport||fe;Xe.setSize(mt.z*E.transmissionResolutionScale,mt.w*E.transmissionResolutionScale);const ut=E.getRenderTarget(),yt=E.getActiveCubeFace(),wt=E.getActiveMipmapLevel();E.setRenderTarget(Xe),E.getClearColor(j),me=E.getClearAlpha(),me<1&&E.setClearColor(16777215,.5),E.clear(),ue&&k.render(de);const Dt=E.toneMapping;E.toneMapping=fi;const Nt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),I.setupLightsView(J),Le===!0&&De.setGlobalState(E.clippingPlanes,J),xt(C,de,J),W.updateMultisampleRenderTarget(Xe),W.updateRenderTargetMipmap(Xe),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Gt=0,ln=q.length;Gt<ln;Gt++){const nn=q[Gt],{object:Ht,geometry:bn,material:Mt,group:qn}=nn;if(Mt.side===Jn&&Ht.layers.test(J.layers)){const $t=Mt.side;Mt.side=Ln,Mt.needsUpdate=!0,et(Ht,de,J,bn,Mt,qn),Mt.side=$t,Mt.needsUpdate=!0,Tt=!0}}Tt===!0&&(W.updateMultisampleRenderTarget(Xe),W.updateRenderTargetMipmap(Xe))}E.setRenderTarget(ut,yt,wt),E.setClearColor(j,me),Nt!==void 0&&(J.viewport=Nt),E.toneMapping=Dt}function xt(C,q,de){const J=q.isScene===!0?q.overrideMaterial:null;for(let se=0,Xe=C.length;se<Xe;se++){const mt=C[se],{object:ut,geometry:yt,group:wt}=mt;let Dt=mt.material;Dt.allowOverride===!0&&J!==null&&(Dt=J),ut.layers.test(de.layers)&&et(ut,q,de,yt,Dt,wt)}}function et(C,q,de,J,se,Xe){C.onBeforeRender(E,q,de,J,se,Xe),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(E,q,de,J,C,Xe),se.transparent===!0&&se.side===Jn&&se.forceSinglePass===!1?(se.side=Ln,se.needsUpdate=!0,E.renderBufferDirect(de,q,J,se,C,Xe),se.side=Wi,se.needsUpdate=!0,E.renderBufferDirect(de,q,J,se,C,Xe),se.side=Jn):E.renderBufferDirect(de,q,J,se,C,Xe),C.onAfterRender(E,q,de,J,se,Xe)}function Be(C,q,de){q.isScene!==!0&&(q=pe);const J=T.get(C),se=I.state.lights,Xe=I.state.shadowsArray,mt=se.state.version,ut=Me.getParameters(C,se.state,Xe,q,de),yt=Me.getProgramCacheKey(ut);let wt=J.programs;J.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,J.fog=q.fog;const Dt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;J.envMap=ve.get(C.envMap||J.environment,Dt),J.envMapRotation=J.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,wt===void 0&&(C.addEventListener("dispose",Ue),wt=new Map,J.programs=wt);let Nt=wt.get(yt);if(Nt!==void 0){if(J.currentProgram===Nt&&J.lightsStateVersion===mt)return tt(C,ut),Nt}else ut.uniforms=Me.getUniforms(C),C.onBeforeCompile(ut,E),Nt=Me.acquireProgram(ut,yt),wt.set(yt,Nt),J.uniforms=ut.uniforms;const Tt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Tt.clippingPlanes=De.uniform),tt(C,ut),J.needsLights=it(C),J.lightsStateVersion=mt,J.needsLights&&(Tt.ambientLightColor.value=se.state.ambient,Tt.lightProbe.value=se.state.probe,Tt.directionalLights.value=se.state.directional,Tt.directionalLightShadows.value=se.state.directionalShadow,Tt.spotLights.value=se.state.spot,Tt.spotLightShadows.value=se.state.spotShadow,Tt.rectAreaLights.value=se.state.rectArea,Tt.ltc_1.value=se.state.rectAreaLTC1,Tt.ltc_2.value=se.state.rectAreaLTC2,Tt.pointLights.value=se.state.point,Tt.pointLightShadows.value=se.state.pointShadow,Tt.hemisphereLights.value=se.state.hemi,Tt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Tt.spotLightMatrix.value=se.state.spotLightMatrix,Tt.spotLightMap.value=se.state.spotLightMap,Tt.pointShadowMatrix.value=se.state.pointShadowMatrix),J.currentProgram=Nt,J.uniformsList=null,Nt}function Je(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Ya.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function tt(C,q){const de=T.get(C);de.outputColorSpace=q.outputColorSpace,de.batching=q.batching,de.batchingColor=q.batchingColor,de.instancing=q.instancing,de.instancingColor=q.instancingColor,de.instancingMorph=q.instancingMorph,de.skinning=q.skinning,de.morphTargets=q.morphTargets,de.morphNormals=q.morphNormals,de.morphColors=q.morphColors,de.morphTargetsCount=q.morphTargetsCount,de.numClippingPlanes=q.numClippingPlanes,de.numIntersection=q.numClipIntersection,de.vertexAlphas=q.vertexAlphas,de.vertexTangents=q.vertexTangents,de.toneMapping=q.toneMapping}function Ye(C,q,de,J,se){q.isScene!==!0&&(q=pe),W.resetTextureUnits();const Xe=q.fog,mt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?q.environment:null,ut=ne===null?E.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Vr,yt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,wt=ve.get(J.envMap||mt,yt),Dt=J.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Nt=!!de.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Tt=!!de.morphAttributes.position,Gt=!!de.morphAttributes.normal,ln=!!de.morphAttributes.color;let nn=fi;J.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(nn=E.toneMapping);const Ht=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,bn=Ht!==void 0?Ht.length:0,Mt=T.get(J),qn=I.state.lights;if(Le===!0&&(Te===!0||C!==he)){const yn=C===he&&J.id===K;De.setState(J,C,yn)}let $t=!1;J.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==qn.state.version||Mt.outputColorSpace!==ut||se.isBatchedMesh&&Mt.batching===!1||!se.isBatchedMesh&&Mt.batching===!0||se.isBatchedMesh&&Mt.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Mt.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Mt.instancing===!1||!se.isInstancedMesh&&Mt.instancing===!0||se.isSkinnedMesh&&Mt.skinning===!1||!se.isSkinnedMesh&&Mt.skinning===!0||se.isInstancedMesh&&Mt.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Mt.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Mt.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Mt.instancingMorph===!1&&se.morphTexture!==null||Mt.envMap!==wt||J.fog===!0&&Mt.fog!==Xe||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==De.numPlanes||Mt.numIntersection!==De.numIntersection)||Mt.vertexAlphas!==Dt||Mt.vertexTangents!==Nt||Mt.morphTargets!==Tt||Mt.morphNormals!==Gt||Mt.morphColors!==ln||Mt.toneMapping!==nn||Mt.morphTargetsCount!==bn)&&($t=!0):($t=!0,Mt.__version=J.version);let oi=Mt.currentProgram;$t===!0&&(oi=Be(J,q,se));let gi=!1,vr=!1,Kr=!1;const Xt=oi.getUniforms(),Sn=Mt.uniforms;if(ye.useProgram(oi.program)&&(gi=!0,vr=!0,Kr=!0),J.id!==K&&(K=J.id,vr=!0),gi||he!==C){ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xt.setValue(N,"projectionMatrix",C.projectionMatrix),Xt.setValue(N,"viewMatrix",C.matrixWorldInverse);const Zi=Xt.map.cameraPosition;Zi!==void 0&&Zi.setValue(N,Oe.setFromMatrixPosition(C.matrixWorld)),Ie.logarithmicDepthBuffer&&Xt.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Xt.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),he!==C&&(he=C,vr=!0,Kr=!0)}if(Mt.needsLights&&(qn.state.directionalShadowMap.length>0&&Xt.setValue(N,"directionalShadowMap",qn.state.directionalShadowMap,W),qn.state.spotShadowMap.length>0&&Xt.setValue(N,"spotShadowMap",qn.state.spotShadowMap,W),qn.state.pointShadowMap.length>0&&Xt.setValue(N,"pointShadowMap",qn.state.pointShadowMap,W)),se.isSkinnedMesh){Xt.setOptional(N,se,"bindMatrix"),Xt.setOptional(N,se,"bindMatrixInverse");const yn=se.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Xt.setValue(N,"boneTexture",yn.boneTexture,W))}se.isBatchedMesh&&(Xt.setOptional(N,se,"batchingTexture"),Xt.setValue(N,"batchingTexture",se._matricesTexture,W),Xt.setOptional(N,se,"batchingIdTexture"),Xt.setValue(N,"batchingIdTexture",se._indirectTexture,W),Xt.setOptional(N,se,"batchingColorTexture"),se._colorsTexture!==null&&Xt.setValue(N,"batchingColorTexture",se._colorsTexture,W));const Yi=de.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Z.update(se,de,oi),(vr||Mt.receiveShadow!==se.receiveShadow)&&(Mt.receiveShadow=se.receiveShadow,Xt.setValue(N,"receiveShadow",se.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=W1()),vr&&(Xt.setValue(N,"toneMappingExposure",E.toneMappingExposure),Mt.needsLights&&Fe(Sn,Kr),Xe&&J.fog===!0&&He.refreshFogUniforms(Sn,Xe),He.refreshMaterialUniforms(Sn,J,Ve,be,I.state.transmissionRenderTarget[C.id]),Ya.upload(N,Je(Mt),Sn,W)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ya.upload(N,Je(Mt),Sn,W),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Xt.setValue(N,"center",se.center),Xt.setValue(N,"modelViewMatrix",se.modelViewMatrix),Xt.setValue(N,"normalMatrix",se.normalMatrix),Xt.setValue(N,"modelMatrix",se.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const yn=J.uniformsGroups;for(let Zi=0,jr=yn.length;Zi<jr;Zi++){const ld=yn[Zi];ce.update(ld,oi),ce.bind(ld,oi)}}return oi}function Fe(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function it(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,q,de){const J=T.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),T.get(C.texture).__webglTexture=q,T.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:de,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const de=T.get(C);de.__webglFramebuffer=q,de.__useDefaultFramebuffer=q===void 0};const nt=N.createFramebuffer();this.setRenderTarget=function(C,q=0,de=0){ne=C,U=q,H=de;let J=null,se=!1,Xe=!1;if(C){const ut=T.get(C);if(ut.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(N.FRAMEBUFFER,ut.__webglFramebuffer),fe.copy(C.viewport),ae.copy(C.scissor),X=C.scissorTest,ye.viewport(fe),ye.scissor(ae),ye.setScissorTest(X),K=-1;return}else if(ut.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(ut.__hasExternalTextures)W.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Dt=C.depthTexture;if(ut.__boundDepthTexture!==Dt){if(Dt!==null&&T.has(Dt)&&(C.width!==Dt.image.width||C.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const yt=C.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(Xe=!0);const wt=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(wt[q])?J=wt[q][de]:J=wt[q],se=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?J=T.get(C).__webglMultisampledFramebuffer:Array.isArray(wt)?J=wt[de]:J=wt,fe.copy(C.viewport),ae.copy(C.scissor),X=C.scissorTest}else fe.copy(oe).multiplyScalar(Ve).floor(),ae.copy(te).multiplyScalar(Ve).floor(),X=re;if(de!==0&&(J=nt),ye.bindFramebuffer(N.FRAMEBUFFER,J)&&ye.drawBuffers(C,J),ye.viewport(fe),ye.scissor(ae),ye.setScissorTest(X),se){const ut=T.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,ut.__webglTexture,de)}else if(Xe){const ut=q;for(let yt=0;yt<C.textures.length;yt++){const wt=T.get(C.textures[yt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+yt,wt.__webglTexture,de,ut)}}else if(C!==null&&de!==0){const ut=T.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ut.__webglTexture,de)}K=-1},this.readRenderTargetPixels=function(C,q,de,J,se,Xe,mt,ut=0){if(!(C&&C.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt){ye.bindFramebuffer(N.FRAMEBUFFER,yt);try{const wt=C.textures[ut],Dt=wt.format,Nt=wt.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ut),!Ie.textureFormatReadable(Dt)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Nt)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-J&&de>=0&&de<=C.height-se&&N.readPixels(q,de,J,se,ee.convert(Dt),ee.convert(Nt),Xe)}finally{const wt=ne!==null?T.get(ne).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(C,q,de,J,se,Xe,mt,ut=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt)if(q>=0&&q<=C.width-J&&de>=0&&de<=C.height-se){ye.bindFramebuffer(N.FRAMEBUFFER,yt);const wt=C.textures[ut],Dt=wt.format,Nt=wt.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ut),!Ie.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.bufferData(N.PIXEL_PACK_BUFFER,Xe.byteLength,N.STREAM_READ),N.readPixels(q,de,J,se,ee.convert(Dt),ee.convert(Nt),0);const Gt=ne!==null?T.get(ne).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,Gt);const ln=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tv(N,ln,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Xe),N.deleteBuffer(Tt),N.deleteSync(ln),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,de=0){const J=Math.pow(2,-de),se=Math.floor(C.image.width*J),Xe=Math.floor(C.image.height*J),mt=q!==null?q.x:0,ut=q!==null?q.y:0;W.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,de,0,0,mt,ut,se,Xe),ye.unbindTexture()};const Ke=N.createFramebuffer(),st=N.createFramebuffer();this.copyTextureToTexture=function(C,q,de=null,J=null,se=0,Xe=0){let mt,ut,yt,wt,Dt,Nt,Tt,Gt,ln;const nn=C.isCompressedTexture?C.mipmaps[Xe]:C.image;if(de!==null)mt=de.max.x-de.min.x,ut=de.max.y-de.min.y,yt=de.isBox3?de.max.z-de.min.z:1,wt=de.min.x,Dt=de.min.y,Nt=de.isBox3?de.min.z:0;else{const Sn=Math.pow(2,-se);mt=Math.floor(nn.width*Sn),ut=Math.floor(nn.height*Sn),C.isDataArrayTexture?yt=nn.depth:C.isData3DTexture?yt=Math.floor(nn.depth*Sn):yt=1,wt=0,Dt=0,Nt=0}J!==null?(Tt=J.x,Gt=J.y,ln=J.z):(Tt=0,Gt=0,ln=0);const Ht=ee.convert(q.format),bn=ee.convert(q.type);let Mt;q.isData3DTexture?(W.setTexture3D(q,0),Mt=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Mt=N.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const qn=N.getParameter(N.UNPACK_ROW_LENGTH),$t=N.getParameter(N.UNPACK_IMAGE_HEIGHT),oi=N.getParameter(N.UNPACK_SKIP_PIXELS),gi=N.getParameter(N.UNPACK_SKIP_ROWS),vr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,nn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const Kr=C.isDataArrayTexture||C.isData3DTexture,Xt=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Sn=T.get(C),Yi=T.get(q),yn=T.get(Sn.__renderTarget),Zi=T.get(Yi.__renderTarget);ye.bindFramebuffer(N.READ_FRAMEBUFFER,yn.__webglFramebuffer),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let jr=0;jr<yt;jr++)Kr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,T.get(C).__webglTexture,se,Nt+jr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,T.get(q).__webglTexture,Xe,ln+jr)),N.blitFramebuffer(wt,Dt,mt,ut,Tt,Gt,mt,ut,N.DEPTH_BUFFER_BIT,N.NEAREST);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(se!==0||C.isRenderTargetTexture||T.has(C)){const Sn=T.get(C),Yi=T.get(q);ye.bindFramebuffer(N.READ_FRAMEBUFFER,Ke),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,st);for(let yn=0;yn<yt;yn++)Kr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Sn.__webglTexture,se,Nt+yn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Sn.__webglTexture,se),Xt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yi.__webglTexture,Xe,ln+yn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yi.__webglTexture,Xe),se!==0?N.blitFramebuffer(wt,Dt,mt,ut,Tt,Gt,mt,ut,N.COLOR_BUFFER_BIT,N.NEAREST):Xt?N.copyTexSubImage3D(Mt,Xe,Tt,Gt,ln+yn,wt,Dt,mt,ut):N.copyTexSubImage2D(Mt,Xe,Tt,Gt,wt,Dt,mt,ut);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Xt?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Mt,Xe,Tt,Gt,ln,mt,ut,yt,Ht,bn,nn.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,Xe,Tt,Gt,ln,mt,ut,yt,Ht,nn.data):N.texSubImage3D(Mt,Xe,Tt,Gt,ln,mt,ut,yt,Ht,bn,nn):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Xe,Tt,Gt,mt,ut,Ht,bn,nn.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Xe,Tt,Gt,nn.width,nn.height,Ht,nn.data):N.texSubImage2D(N.TEXTURE_2D,Xe,Tt,Gt,mt,ut,Ht,bn,nn);N.pixelStorei(N.UNPACK_ROW_LENGTH,qn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$t),N.pixelStorei(N.UNPACK_SKIP_PIXELS,oi),N.pixelStorei(N.UNPACK_SKIP_ROWS,gi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,vr),Xe===0&&q.generateMipmaps&&N.generateMipmap(Mt),ye.unbindTexture()},this.initRenderTarget=function(C){T.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){U=0,H=0,ne=null,ye.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}}const X1=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:dh,AddEquation:or,AddOperation:zp,AdditiveAnimationBlendMode:Sh,AdditiveBlending:Fu,AgXToneMapping:Mo,AlphaFormat:yh,AlwaysCompare:Kp,AlwaysDepth:ja,AlwaysStencilFunc:ku,AmbientLight:Zh,AnimationAction:Jm,AnimationClip:Fo,AnimationLoader:X_,AnimationMixer:Sx,AnimationObjectGroup:yx,AnimationUtils:V_,ArcCurve:pm,ArrayCamera:Xm,ArrowHelper:Xx,AttachedBindMode:zu,Audio:Ym,AudioAnalyser:ux,AudioContext:Kh,AudioListener:ax,AudioLoader:ix,AxesHelper:qx,BackSide:Ln,BasicDepthPacking:Hp,BasicShadowMap:l0,BatchedMesh:lm,BezierInterpolant:Fm,Bone:Ph,BooleanKeyframeTrack:Yr,Box2:Ix,Box3:pn,Box3Helper:Hx,BoxGeometry:qr,BoxHelper:Gx,BufferAttribute:Wt,BufferGeometry:Rt,BufferGeometryLoader:Hm,ByteType:gh,Cache:bi,Camera:Tc,CameraHelper:Vx,CanvasTexture:l_,CapsuleGeometry:dc,CatmullRomCurve3:mm,CineonToneMapping:hh,CircleGeometry:fc,ClampToEdgeWrapping:Gn,Clock:Cx,Color:ht,ColorKeyframeTrack:Wh,ColorManagement:Ft,Compatibility:J0,CompressedArrayTexture:o_,CompressedCubeTexture:a_,CompressedTexture:hc,CompressedTextureLoader:q_,ConeGeometry:Wo,ConstantAlphaFactor:Fp,ConstantColorFactor:Np,Controls:Zx,CubeCamera:Wm,CubeDepthTexture:dm,CubeReflectionMapping:Ai,CubeRefractionMapping:ur,CubeTexture:Go,CubeTextureLoader:Y_,CubeUVReflectionMapping:Fs,CubicBezierCurve:Lh,CubicBezierCurve3:gm,CubicInterpolant:Nm,CullFaceBack:Uu,CullFaceFront:xp,CullFaceFrontBack:a0,CullFaceNone:_p,Curve:mi,CurvePath:_m,CustomBlending:yp,CustomToneMapping:fh,CylinderGeometry:Ho,Cylindrical:Rx,Data3DTexture:rc,DataArrayTexture:ic,DataTexture:pi,DataTextureLoader:Z_,DataUtils:Lv,DecrementStencilOp:E0,DecrementWrapStencilOp:P0,DefaultLoadingManager:Jr,DepthFormat:Ci,DepthStencilFormat:ar,DepthTexture:Ls,DetachedBindMode:$p,DirectionalLight:Yh,DirectionalLightHelper:kx,DiscreteInterpolant:Um,DodecahedronGeometry:pc,DoubleSide:Jn,DstAlphaFactor:Pp,DstColorFactor:Ip,DynamicCopyUsage:H0,DynamicDrawUsage:B0,DynamicReadUsage:k0,EdgesGeometry:fm,EllipseCurve:mc,EqualCompare:Yp,EqualDepth:el,EqualStencilFunc:L0,EquirectangularReflectionMapping:co,EquirectangularRefractionMapping:uo,Euler:ei,EventDispatcher:Pi,ExternalTexture:Ih,ExtrudeGeometry:gc,FileLoader:Xi,Float16BufferAttribute:$v,Float32BufferAttribute:dt,FloatType:In,Fog:ac,FogExp2:oc,FramebufferTexture:s_,FrontSide:Wi,Frustum:Os,FrustumArray:uc,GLBufferAttribute:Ex,GLSL1:X0,GLSL3:Vu,GreaterCompare:Zp,GreaterDepth:nl,GreaterEqualCompare:nc,GreaterEqualDepth:tl,GreaterEqualStencilFunc:O0,GreaterStencilFunc:U0,GridHelper:zx,Group:ws,HalfFloatType:Ei,HemisphereLight:Bm,HemisphereLightHelper:Bx,IcosahedronGeometry:vc,ImageBitmapLoader:nx,ImageLoader:Oo,ImageUtils:tm,IncrementStencilOp:A0,IncrementWrapStencilOp:C0,InstancedBufferAttribute:Ds,InstancedBufferGeometry:Gm,InstancedInterleavedBuffer:Ax,InstancedMesh:am,Int16BufferAttribute:Bv,Int32BufferAttribute:zv,Int8BufferAttribute:Uv,IntType:Yl,InterleavedBuffer:lc,InterleavedBufferAttribute:Hr,Interpolant:zs,InterpolateBezier:$u,InterpolateDiscrete:wo,InterpolateLinear:Fl,InterpolateSmooth:Xa,InterpolationSamplingMode:Z0,InterpolationSamplingType:Y0,InvertStencilOp:R0,KeepStencilOp:Lr,KeyframeTrack:si,LOD:sm,LatheGeometry:_c,Layers:sc,LessCompare:qp,LessDepth:Qa,LessEqualCompare:tc,LessEqualDepth:$r,LessEqualStencilFunc:N0,LessStencilFunc:D0,Light:gr,LightProbe:Vm,Line:dr,Line3:jm,LineBasicMaterial:On,LineCurve:Nh,LineCurve3:vm,LineDashedMaterial:Dm,LineLoop:cm,LineSegments:Ri,LinearFilter:Zt,LinearInterpolant:Hh,LinearMipMapLinearFilter:f0,LinearMipMapNearestFilter:d0,LinearMipmapLinearFilter:Si,LinearMipmapNearestFilter:ho,LinearSRGBColorSpace:Vr,LinearToneMapping:ch,LinearTransfer:Ao,Loader:Xn,LoaderUtils:qu,LoadingManager:Xh,LoopOnce:kp,LoopPingPong:Gp,LoopRepeat:Vp,MOUSE:s0,Material:En,MaterialBlending:c0,MaterialLoader:Ac,MathUtils:xv,Matrix2:td,Matrix3:It,Matrix4:At,MaxEquation:wp,Mesh:an,MeshBasicMaterial:qi,MeshDepthMaterial:kh,MeshDistanceMaterial:Vh,MeshLambertMaterial:Rm,MeshMatcapMaterial:Im,MeshNormalMaterial:Pm,MeshPhongMaterial:Em,MeshPhysicalMaterial:Am,MeshStandardMaterial:$h,MeshToonMaterial:Cm,MinEquation:bp,MirroredRepeatWrapping:bo,MixOperation:Bp,MultiplyBlending:Bu,MultiplyOperation:ko,NearestFilter:un,NearestMipMapLinearFilter:h0,NearestMipMapNearestFilter:u0,NearestMipmapLinearFilter:Ss,NearestMipmapNearestFilter:mh,NeutralToneMapping:ph,NeverCompare:Xp,NeverDepth:Ka,NeverStencilFunc:I0,NoBlending:wi,NoColorSpace:ki,NoNormalPacking:M0,NoToneMapping:fi,NormalAnimationBlendMode:ec,NormalBlending:Br,NormalGAPacking:b0,NormalRGPacking:S0,NotEqualCompare:Jp,NotEqualDepth:il,NotEqualStencilFunc:F0,NumberKeyframeTrack:No,Object3D:Bt,ObjectLoader:ex,ObjectSpaceNormalMap:Wp,OctahedronGeometry:Xo,OneFactor:Ap,OneMinusConstantAlphaFactor:Op,OneMinusConstantColorFactor:Up,OneMinusDstAlphaFactor:Rp,OneMinusDstColorFactor:Dp,OneMinusSrcAlphaFactor:Ja,OneMinusSrcColorFactor:Cp,OrthographicCamera:$s,PCFShadowMap:ao,PCFSoftShadowMap:lo,PMREMGenerator:Ju,Path:$l,PerspectiveCamera:vn,Plane:$i,PlaneGeometry:Bs,PlaneHelper:Wx,PointLight:$m,PointLightHelper:Fx,Points:um,PointsMaterial:Rh,PolarGridHelper:$x,PolyhedronGeometry:mr,PositionalAudio:cx,PropertyBinding:zt,PropertyMixer:Zm,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:Fh,Quaternion:Nn,QuaternionKeyframeTrack:Yo,QuaternionLinearInterpolant:Om,R11_EAC_Format:hl,RED_GREEN_RGTC2_Format:Nl,RED_RGTC1_Format:Dl,REVISION:Xl,RG11_EAC_Format:fl,RGBADepthPacking:_0,RGBAFormat:Dn,RGBAIntegerFormat:Ql,RGBA_ASTC_10x10_Format:Al,RGBA_ASTC_10x5_Format:bl,RGBA_ASTC_10x6_Format:wl,RGBA_ASTC_10x8_Format:Tl,RGBA_ASTC_12x10_Format:El,RGBA_ASTC_12x12_Format:Cl,RGBA_ASTC_4x4_Format:ml,RGBA_ASTC_5x4_Format:gl,RGBA_ASTC_5x5_Format:vl,RGBA_ASTC_6x5_Format:_l,RGBA_ASTC_6x6_Format:xl,RGBA_ASTC_8x5_Format:yl,RGBA_ASTC_8x6_Format:Ml,RGBA_ASTC_8x8_Format:Sl,RGBA_BPTC_Format:Pl,RGBA_ETC2_EAC_Format:ul,RGBA_PVRTC_2BPPV1_Format:al,RGBA_PVRTC_4BPPV1_Format:ol,RGBA_S3TC_DXT1_Format:po,RGBA_S3TC_DXT3_Format:mo,RGBA_S3TC_DXT5_Format:go,RGBDepthPacking:x0,RGBFormat:Mh,RGBIntegerFormat:p0,RGB_BPTC_SIGNED_Format:Rl,RGB_BPTC_UNSIGNED_Format:Il,RGB_ETC1_Format:ll,RGB_ETC2_Format:cl,RGB_PVRTC_2BPPV1_Format:sl,RGB_PVRTC_4BPPV1_Format:rl,RGB_S3TC_DXT1_Format:fo,RGDepthPacking:y0,RGFormat:kr,RGIntegerFormat:jl,RawShaderMaterial:zh,Ray:pr,Raycaster:Km,RectAreaLight:km,RedFormat:Kl,RedIntegerFormat:Vo,ReinhardToneMapping:uh,RenderTarget:wh,RenderTarget3D:bx,RepeatWrapping:So,ReplaceStencilOp:T0,ReverseSubtractEquation:Sp,RingGeometry:xc,SIGNED_R11_EAC_Format:dl,SIGNED_RED_GREEN_RGTC2_Format:Ul,SIGNED_RED_RGTC1_Format:Ll,SIGNED_RG11_EAC_Format:pl,SRGBColorSpace:$n,SRGBTransfer:Vt,Scene:Th,ShaderChunk:Et,ShaderLib:ni,ShaderMaterial:ri,ShadowMaterial:wm,Shape:Ti,ShapeGeometry:yc,ShapePath:Yx,ShapeUtils:di,ShortType:vh,Skeleton:cc,SkeletonHelper:Ux,SkinnedMesh:om,Source:lr,Sphere:mn,SphereGeometry:qo,Spherical:Px,SphericalHarmonics3:Jh,SplineCurve:Oh,SpotLight:zm,SpotLightHelper:Nx,Sprite:rm,SpriteMaterial:Ch,SrcAlphaFactor:Za,SrcAlphaSaturateFactor:Lp,SrcColorFactor:Ep,StaticCopyUsage:G0,StaticDrawUsage:Eo,StaticReadUsage:$0,StereoCamera:rx,StreamCopyUsage:W0,StreamDrawUsage:z0,StreamReadUsage:V0,StringKeyframeTrack:Zr,SubtractEquation:Mp,SubtractiveBlending:Ou,TOUCH:o0,TangentSpaceNormalMap:fr,TetrahedronGeometry:Mc,Texture:on,TextureLoader:J_,TextureUtils:ey,Timer:qm,TimestampQuery:q0,TorusGeometry:Sc,TorusKnotGeometry:bc,Triangle:Vn,TriangleFanDrawMode:v0,TriangleStripDrawMode:g0,TrianglesDrawMode:m0,TubeGeometry:wc,UVMapping:ql,Uint16BufferAttribute:Ah,Uint32BufferAttribute:Eh,Uint8BufferAttribute:Fv,Uint8ClampedBufferAttribute:Ov,Uniform:ed,UniformsGroup:Tx,UniformsLib:at,UniformsUtils:Bh,UnsignedByteType:kn,UnsignedInt101111Type:xh,UnsignedInt248Type:Rs,UnsignedInt5999Type:_h,UnsignedIntType:ii,UnsignedShort4444Type:Zl,UnsignedShort5551Type:Jl,UnsignedShortType:Ps,VSMShadowMap:Ms,Vector2:We,Vector3:B,Vector4:kt,VectorKeyframeTrack:Uo,VideoFrameTexture:r_,VideoTexture:hm,WebGL3DRenderTarget:wv,WebGLArrayRenderTarget:bv,WebGLCoordinateSystem:Kn,WebGLCubeRenderTarget:nd,WebGLRenderTarget:Qn,WebGLRenderer:og,WebGLUtils:sg,WebGPUCoordinateSystem:Gr,WebXRController:qa,WireframeGeometry:bm,WrapAroundEnding:To,ZeroCurvatureEnding:Ur,ZeroFactor:Tp,ZeroSlopeEnding:Fr,ZeroStencilOp:w0,createCanvasElement:Qp,error:St,getConsoleFunction:ev,log:Po,setConsoleFunction:Q0,warn:lt,warnOnce:Ro},Symbol.toStringTag,{value:"Module"})),tp=Symbol(),q1=r=>typeof r?.subscribe=="function",ag=(r,e,t)=>{const n=r().map(o=>q1(o)?Cs(o):tp),i=R(()=>r().map((o,a)=>n[a]===tp?o:n[a].current)),s=()=>{p(i);let o;return Vl(()=>{o=e(p(i))}),o};t?Ot(s):Gi(s)},Y1=(r,e)=>ag(r,e,!1),Z1=(r,e)=>ag(r,e,!0),J1=Object.assign(Y1,{pre:Z1}),hi=(r,e)=>r?.[`is${e}`]===!0,K1=typeof window<"u",zi=(r,e)=>{const t=gp(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});Gl(()=>{i(),n&&n()})},sn=r=>{const e=lh(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},j1=r=>({subscribe:r.subscribe,get current(){return r.current}}),lg=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Q1=r=>{const{dom:e,canvas:t}=r,n=sn({width:e.offsetWidth,height:e.offsetHeight});fp(()=>{const s=new ResizeObserver(()=>{const{offsetWidth:o,offsetHeight:a}=e;(n.current.width!==o||n.current.height!==a)&&n.set({width:o,height:a})});return s.observe(e),()=>{s.disconnect()}});const i={dom:e,canvas:t,size:j1(n)};return Hn("threlte-dom-context",i),i},Pc=()=>{const r=Wn("threlte-dom-context");if(!r)throw new Error("useDOM can only be used in a child component to <Canvas>.");return r};function ew(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class sr{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=ew();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!n?.after&&!n?.before&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n?.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const l=this.getKey(a),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n?.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const l=this.getKey(a),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((o,a)=>{o===0&&t.push(a)});t.length>0;){const o=t.shift();n.push(o);const a=i.find(l=>l===o);a&&this.connectedVertices[a]?.next.forEach(l=>{const c=(e.get(l)||0)-1;e.set(l,c),c===0&&t.push(l)})}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class tw{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class nw extends sr{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const i=new tw(this,e,t);return this.add(e,i,n),i}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(i=>{const s=performance.now();i.run(n??e);const o=performance.now()-s;t[i.key]=o})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class iw extends sr{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new nw(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},i=performance.now();return this.forEachNode(s=>{const o=performance.now(),a=s.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-o;n[s.key.toString()]={duration:l,tasks:a}}),{total:performance.now()-i,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const rw=r=>{const e=new iw,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:sn(r.autoRender??!0),renderMode:sn(r.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,s){n.shouldRender()&&s()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return Gi(()=>{n.autoRender.set(r.autoRender??!0)}),Gi(()=>{n.renderMode.set(r.renderMode??"on-demand")}),Gl(()=>{n.scheduler.dispose()}),Hn("threlte-scheduler-context",n),n},Rc=()=>{const r=Wn("threlte-scheduler-context");if(!r)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return r},sw=()=>{const{size:r}=Pc(),{invalidate:e}=Rc(),t=new vn(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=sn(t);zi(r,s=>{if(n.current===t){const o=n.current;o.aspect=s.width/s.height,o.updateProjectionMatrix(),e()}}),zi(n,s=>{s===void 0&&n.set(t)});const i={camera:n};return Hn("threlte-camera-context",i),i},cg=()=>{const r=Wn("threlte-camera-context");if(!r)throw new Error("useCamera can only be used in a child component to <Canvas>.");return r},ow=()=>{const r={removeObjectFromDisposal:e=>{r.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=r.disposableObjects.get(e);t?r.disposableObjects.set(e,t+1):r.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=r.disposableObjects.get(e);t&&t>0&&(r.disposableObjects.set(e,t-1),t-1<=0&&(r.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await hp(),!(!r.shouldDispose&&!e)&&(r.disposableObjects.forEach((t,n)=>{(t===0||e)&&(n?.dispose?.(),r.disposableObjects.delete(n))}),r.shouldDispose=!1)}};return Gl(()=>{r.dispose(!0)}),Hn("threlte-disposal-context",r),r},ug=()=>{const r=Wn("threlte-disposal-context");if(!r)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return r},hg=Symbol("threlte-parent-context"),dg=r=>{const e=sn(r);return Hn(hg,e),e},aw=()=>Wn(hg),kl=Symbol("threlte-parent-object3d-context"),lw=r=>{const e=vp(r);return Hn(kl,e),e},cw=r=>{const e=Wn(kl),t=lh(r),n=gp([t,e],([i,s])=>i??s);return Hn(kl,n),t},uw=()=>Wn(kl);function fg(r,e,t){if(!K1)return{task:void 0,start:()=>{},stop:()=>{},started:vp(!1)};let n,i,s;sr.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=Rc(),a=s?.autoInvalidate??!0;let l=o.mainStage,c=R(()=>s?.running?.()??s?.autoStart??!0);if(s){if(s.stage)if(sr.isValue(s.stage))l=s.stage;else{const d=o.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);l=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const h=s.after[d];if(sr.isValue(h)){l=h.stage;break}}else sr.isValue(s.after)&&(l=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const h=s.before[d];if(sr.isValue(h)){l=h.stage;break}}else sr.isValue(s.before)&&(l=s.before.stage)}const u=l.createTask(n,i,s);return Ot(()=>{if(p(c))return u.start(),a&&o.autoInvalidations.add(i),()=>{u.stop(),a&&o.autoInvalidations.delete(i)}}),Ot(()=>()=>{l.removeTask(n)}),{task:u,start:()=>{Ct(c,!0)},stop:()=>{Ct(c,!1)},started:i0(()=>p(c))}}const hw=r=>{const e={scene:new Th};return Hn("threlte-scene-context",e),e},pg=()=>{const r=Wn("threlte-scene-context");if(!r)throw new Error("useScene can only be used in a child component to <Canvas>.");return r},dw=r=>{const{dispose:e}=ug(),{camera:t}=cg(),{scene:n}=pg(),{invalidate:i,renderStage:s,autoRender:o,scheduler:a,resetFrameInvalidation:l}=Rc(),{size:c,canvas:u}=Pc(),d=r.createRenderer?r.createRenderer(u):new og({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}),h=s.createTask(Symbol("threlte-auto-render-task"),()=>{d.render(n,t.current)}),f={renderer:d,colorManagementEnabled:sn(r.colorManagementEnabled??!0),colorSpace:sn(r.colorSpace??"srgb"),dpr:sn(r.dpr??window.devicePixelRatio),shadows:sn(r.shadows??lo),toneMapping:sn(r.toneMapping??Mo),autoRenderTask:h};Hn("threlte-renderer-context",f),zi([f.colorManagementEnabled],([g])=>{Ft.enabled=g}),zi([f.colorSpace],([g])=>{"outputColorSpace"in d&&(d.outputColorSpace=g)}),zi([f.dpr],([g])=>{"setPixelRatio"in d&&d.setPixelRatio(g)});const{start:m,stop:_}=fg(()=>{!("xr"in d)||d.xr?.isPresenting||(d.setSize(c.current.width,c.current.height),i(),_())},{before:h,autoStart:!1,autoInvalidate:!1});return zi([c],()=>{m()}),zi([f.shadows],([g])=>{"shadowMap"in d&&(d.shadowMap.enabled=!!g,g&&g!==!0?d.shadowMap.type=g:g===!0&&(d.shadowMap.type=lo))}),zi([f.toneMapping],([g])=>{"toneMapping"in d&&(d.toneMapping=g)}),zi([o],([g])=>(g?f.autoRenderTask.start():f.autoRenderTask.stop(),()=>{f.autoRenderTask.stop()})),"setAnimationLoop"in f.renderer&&f.renderer.setAnimationLoop(v=>{e(),a.run(v),l()}),Gl(()=>{if("dispose"in f.renderer){const g=f.renderer.dispose;g()}}),Ot(()=>{f.colorManagementEnabled.set(r.colorManagementEnabled??!0)}),Ot(()=>{f.colorSpace.set(r.colorSpace??"srgb")}),Ot(()=>{f.toneMapping.set(r.toneMapping??Mo)}),Ot(()=>{f.shadows.set(r.shadows??lo)}),Ot(()=>{f.dpr.set(r.dpr??window.devicePixelRatio)}),f},fw=()=>{const r=Wn("threlte-renderer-context");if(!r)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return r},pw=()=>{const r=sn({});return Hn("threlte-user-context",r),r},mw=r=>{const{scene:e}=hw();return{scene:e,...Q1(r),...r0(),...dg(e),...lw(e),...ow(),...rw(r),...sw(),...dw(r),...pw()}};function gw(r,e){Un(e,!0);let t=Hl(e,["$$slots","$$events","$$legacy","children"]);mw(t);var n=Ut(),i=G(n);Wl(i,()=>e.children),V(r,n),Fn()}var vw=Y('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function _w(r,e){let t=Hl(e,["$$slots","$$events","$$legacy","children"]),n=Yt(void 0),i=Yt(void 0);var s=vw(),o=Jt(s),a=Jt(o);{var l=c=>{gw(c,mp({get dom(){return p(i)},get canvas(){return p(n)}},()=>t,{children:(u,d)=>{var h=Ut(),f=G(h);Wl(f,()=>e.children??pp),V(u,h)},$$slots:{default:!0}}))};gn(a,c=>{p(n)&&p(i)&&c(l)})}Kt(o),Lu(o,c=>Ct(n,c),()=>p(n)),Kt(s),Lu(s,c=>Ct(i,c),()=>p(i)),V(r,s)}const Zo=()=>{const r=Rc(),e=fw(),t=cg(),n=pg(),i=Pc();return{advance:r.advance,autoRender:r.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:r.invalidate,mainStage:r.mainStage,renderer:e.renderer,renderMode:r.renderMode,renderStage:r.renderStage,scheduler:r.scheduler,shadows:e.shadows,shouldRender:r.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(o){n.scene=o}}},xw=r=>typeof r=="object"&&r!==null,yw=(r,e)=>{const{invalidate:t}=Zo(),n=R(r),i=R(e),s=Cs(aw()),o=Cs(uw()),a=dg(),l=cw();Ot(()=>{a.set(p(n)),hi(p(n),"Object3D")&&l.set(p(n)),t()}),Ot(()=>{t();const c=p(n);if(p(i)===void 0&&hi(c,"Object3D"))return o.current?.add(c),()=>{t(),o.current?.remove(c)};if(p(i)===void 0&&xw(s.current)){const u=s.current;if(hi(c,"Material")){const d=u.material;return u.material=c,()=>{t(),u.material=d}}else if(hi(c,"BufferGeometry")){const d=u.geometry;return u.geometry=c,()=>{t(),u.geometry=d}}}if(p(i)===!1)return()=>{t()};if(typeof p(i)=="function"){const u=p(i)({ref:c,parent:s.current,parentObject3D:o.current});return()=>{t(),u?.()}}if(typeof p(i)=="string"){const{target:u,key:d}=lg(s.current,p(i));if(d in u){const h=u[d];return u[d]=c,()=>{t(),u[d]=h}}else return u[d]=c,()=>{t(),delete u[d]}}if(hi(p(i),"Object3D")&&hi(c,"Object3D"))return p(i).add(c),()=>{t(),p(i).remove(c)}})},Mw=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom","filmGauge","filmOffset"]),Iu=new Set,Sw=(r,e,t,n)=>{const{invalidate:i,size:s,camera:o}=Zo(),a=R(r),l=R(e),c=Cs(s);Ot(()=>{if(!t())return;const u=p(a);return Iu.add(u),o.set(u),i(),()=>{Iu.delete(u),Iu.size===0&&(o.set(void 0),i())}}),Ot(()=>{if(!p(l)){for(const u in n())if(Mw.has(u)){p(a).updateProjectionMatrix(),i();break}}}),Ot(()=>{if(e())return;const{width:u,height:d}=c.current;hi(p(a),"PerspectiveCamera")?p(a).aspect=u/d:hi(p(a),"OrthographicCamera")&&(p(a).left=u/-2,p(a).right=u/2,p(a).top=d/2,p(a).bottom=d/-2),p(a).updateProjectionMatrix(),p(a).updateMatrixWorld(),i()})},Qu=Symbol("threlte-disposable-object-context"),bw=r=>typeof r?.dispose=="function",ww=r=>{const e=Wn(Qu),t=R(()=>r()??e?.()??!0);Hn(Qu,()=>p(t))},Tw=r=>{const e=R(r),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:i}=ug(),s=Wn(Qu),o=R(()=>s?.()??!0);Gi(()=>{if(p(o))return t(p(e)),()=>n(p(e));i(p(e))})};let eh;const Aw=r=>{eh=r},Ew=()=>{const r=eh;return eh=void 0,r},th="threlte-plugin-context",Cw=r=>{const e=Wn(th);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const i=r();for(let s=0;s<n.length;s++){const o=n[s],a=o(i);a&&a.pluginProps&&t.push(...a.pluginProps)}}return{pluginsProps:t}},Pw=new Set(["$$scope","$$slots","type","args","attach","instance"]),Rw=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Iw=(r,e,t)=>{!Array.isArray(t)&&typeof t=="number"&&typeof r[e]=="object"&&r[e]!==null&&typeof r[e]?.setScalar=="function"&&!r[e]?.isColor?r[e].setScalar(t):typeof r[e]?.set=="function"&&typeof r[e]=="object"&&r[e]!==null?Array.isArray(t)?r[e].set(...t):r[e].set(t):r[e]=t},Dw=(r,e,t)=>{const{invalidate:n}=Zo(),i=new Map,s=(o,a,l)=>{if(Rw(l)){const d=i.get(a);if(d&&d.instance===o&&d.value===l)return;i.set(a,{instance:o,value:l})}else i.delete(a);const{key:c,target:u}=lg(o,a);if(typeof l=="function"&&c.startsWith("on")&&!a.includes(".")&&"addEventListener"in u){const d=u,h=c.slice(2);return d.addEventListener(h,l),()=>{d.removeEventListener?.(h,l)}}l!=null?Iw(u,c,l):u[c]=l,n()};Ot(()=>{const o=r(),a=e(),l=t();Vl(()=>{for(const c in a)Ot(()=>{if(!(l?.includes(c)||Pw.has(c)))return s(o,c,a[c])})})})},Lw=r=>typeof r=="function"&&Function.prototype.toString.call(r).startsWith("class "),Nw=(r,e)=>Lw(r)?Array.isArray(e)?new r(...e):new r:r;function np(r,e){Un(e,!0);let t=qt(e,"is",19,Ew),n=qt(e,"manual",3,!1),i=qt(e,"makeDefault",3,!1),s=qt(e,"ref",15),o=Hl(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const a=R(()=>Nw(t(),e.args));Ot(()=>{s()!==p(a)&&s(p(a))});const l=Cw(()=>({get ref(){return p(a)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return o}}));Dw(()=>p(a),()=>o,()=>l?.pluginsProps),yw(()=>p(a),()=>e.attach),Ot(()=>{(hi(p(a),"PerspectiveCamera")||hi(p(a),"OrthographicCamera"))&&Sw(()=>p(a),()=>n(),()=>i(),()=>o)}),ww(()=>e.dispose),Ot(()=>{bw(p(a))&&Tw(()=>p(a))}),Gi(()=>{p(a);let d;return Vl(()=>{d=e.oncreate?.(p(a))}),d});var c=Ut(),u=G(c);Wl(u,()=>e.children??pp,()=>({ref:p(a)})),V(r,c),Fn()}const Uw={},y=new Proxy(np,{get(r,e){if(typeof e!="string")return Reflect.get(r,e);const t=Uw[e]||X1[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return Aw(t),np}});function Fw(r,e){e&&Hn(th,{...Wn(th),[r]:e})}const Dr=r=>({subscribe:r.subscribe,get current(){return r.current}});let yo=0;const id=sn(!1),Ic=sn(!1),rd=sn(void 0),sd=sn(0),od=sn(0),mg=sn([]),ad=sn(0),{onStart:Ow,onLoad:Bw,onError:zw}=Jr;Jr.onStart=(r,e,t)=>{Ow?.(r,e,t),Ic.set(!0),rd.set(r),sd.set(e),od.set(t);const n=(e-yo)/(t-yo);ad.set(n),n===1&&id.set(!0)};Jr.onLoad=()=>{Bw?.(),Ic.set(!1)};Jr.onError=r=>{zw?.(r),mg.update(e=>[...e,r])};Jr.onProgress=(r,e,t)=>{e===t&&(yo=t),Ic.set(!0),rd.set(r),sd.set(e),od.set(t);const n=(e-yo)/(t-yo)||1;ad.set(n),n===1&&id.set(!0)};Dr(Ic),Dr(rd),Dr(sd),Dr(od),Dr(mg),Dr(ad),Dr(id);new B;new B;new B;new mn;new At;new pr;new B;new B;new At;new B;new B;new Bt;new B;new B;new B;new We;const $w="Right",kw="Top",Vw="Front",Gw="Left",Hw="Bottom",Ww="Back";[$w,kw,Vw,Gw,Hw,Ww].map(r=>r.toLocaleLowerCase());new pn;new B;at.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new We(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ni.line={uniforms:Bh.merge([at.common,at.fog,at.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new kt;new B;new B;new kt;new kt;new kt;new B;new At;new jm;new B;new pn;new mn;new kt;const Xw=`
  varying vec3 localPosition;
  varying vec4 worldPosition;

  uniform vec3 worldCamProjPosition;
	uniform vec3 worldPlanePosition;
	uniform float fadeDistance;
	uniform bool infiniteGrid;
	uniform bool followCamera;

	uniform int coord0;
	uniform int coord1;
	uniform int coord2;

	void main() {
		localPosition = vec3(
		  position[coord0],
			position[coord1],
			position[coord2]
		);

		if (infiniteGrid) {
		  localPosition *= 1.0 + fadeDistance;
		}

		worldPosition = modelMatrix * vec4(localPosition, 1.0);
		if (followCamera) {
		  worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
      localPosition = (inverse(modelMatrix) * worldPosition).xyz;
		}

		gl_Position = projectionMatrix * viewMatrix * worldPosition;
	}
`,qw=`
  #define PI 3.141592653589793

	varying vec3 localPosition;
	varying vec4 worldPosition;

	uniform vec3 worldCamProjPosition;
	uniform float cellSize;
	uniform float sectionSize;
	uniform vec3 cellColor;
	uniform vec3 sectionColor;
	uniform float fadeDistance;
	uniform float fadeStrength;
	uniform vec3 fadeOrigin;
	uniform float cellThickness;
	uniform float sectionThickness;
	uniform vec3 backgroundColor;
	uniform float backgroundOpacity;

	uniform bool infiniteGrid;

	uniform int coord0;
	uniform int coord1;
	uniform int coord2;

	// 0 - default; 1 - lines; 2 - circles; 3 - polar
	uniform int gridType;

  // lineGrid coord for lines
	uniform int lineGridCoord;

	// circlegrid max radius
	uniform float circleGridMaxRadius;

	// polar grid dividers
	uniform float polarCellDividers;
	uniform float polarSectionDividers;

	float getSquareGrid(float size, float thickness, vec3 localPos) {
		vec2 coord = localPos.xy / size;

		vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
		float line = min(grid.x, grid.y) + 1.0 - thickness;

		return 1.0 - min(line, 1.0);
	}

	float getLinesGrid(float size, float thickness, vec3 localPos) {
		float coord = localPos[lineGridCoord] / size;
		float line = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) - thickness * 0.2;

		return 1.0 - min(line, 1.0);
	}

	float getCirclesGrid(float size, float thickness, vec3 localPos) {
		float coord = length(localPos.xy) / size;
		float line = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) - thickness * 0.2;

		if (!infiniteGrid && circleGridMaxRadius > 0. && coord > circleGridMaxRadius + thickness * 0.05) {
		  discard;
		}

		return 1.0 - min(line, 1.0);
	}

	float getPolarGrid(float size, float thickness, float polarDividers, vec3 localPos) {
		float rad = length(localPos.xy) / size;
		vec2 coord = vec2(rad, atan(localPos.x, localPos.y) * polarDividers / PI) ;

		vec2 wrapped = vec2(coord.x, fract(coord.y / (2.0 * polarDividers)) * (2.0 * polarDividers));
		vec2 coordWidth = fwidth(coord);
		vec2 wrappedWidth = fwidth(wrapped);
		vec2 width = (coord.y < -polarDividers * 0.5 || coord.y > polarDividers * 0.5 ? wrappedWidth : coordWidth) * (1.+thickness*0.25);

		// Compute anti-aliased world-space grid lines
		vec2 grid = abs(fract(coord - 0.5) - 0.5) / width;
		float line = min(grid.x, grid.y);

if (!infiniteGrid && circleGridMaxRadius > 0.0 && rad > circleGridMaxRadius + thickness * 0.05) {
		  discard;
		}

		return 1.0 - min(line, 1.0);
	}

	void main() {
		float g1 = 0.0;
		float g2 = 0.0;

		vec3 localPos = vec3(localPosition[coord0], localPosition[coord1], localPosition[coord2]);

		if (gridType == 0) {
			g1 = getSquareGrid(cellSize, cellThickness, localPos);
			g2 = getSquareGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 1) {
			g1 = getLinesGrid(cellSize, cellThickness, localPos);
			g2 = getLinesGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 2) {
			g1 = getCirclesGrid(cellSize, cellThickness, localPos);
			g2 = getCirclesGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 3) {
			g1 = getPolarGrid(cellSize, cellThickness, polarCellDividers, localPos);
			g2 = getPolarGrid(sectionSize, sectionThickness, polarSectionDividers, localPos);
		}

		float dist = distance(fadeOrigin, worldPosition.xyz);
		float d = 1.0 - min(dist / fadeDistance, 1.0);
		float fadeFactor = pow(d, fadeStrength) * 0.95;

		vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

		if (backgroundOpacity > 0.0) {
			float linesAlpha = clamp((g1 + g2) * fadeFactor, 0.0,1.0);
			vec3 finalColor = mix(backgroundColor, color, linesAlpha);
			float blendedAlpha = max(linesAlpha, backgroundOpacity * fadeFactor);
			gl_FragColor = vec4(finalColor, blendedAlpha);

		} else {
			gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
			gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
		}

		if (gl_FragColor.a <= 0.0) {
		  discard;
		}

		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`;var Yw=Y("<!> <!>",1);function Zw(r,e){Un(e,!0);let t=qt(e,"cellColor",3,"#000000"),n=qt(e,"sectionColor",3,"#0000ee"),i=qt(e,"cellSize",3,1),s=qt(e,"backgroundColor",3,"#dadada"),o=qt(e,"backgroundOpacity",3,0),a=qt(e,"sectionSize",3,10),l=qt(e,"plane",3,"xz"),c=qt(e,"gridSize",19,()=>[20,20]),u=qt(e,"followCamera",3,!1),d=qt(e,"infiniteGrid",3,!1),h=qt(e,"fadeDistance",3,100),f=qt(e,"fadeStrength",3,1),m=qt(e,"fadeOrigin",3,void 0),_=qt(e,"cellThickness",3,1),g=qt(e,"sectionThickness",3,2),v=qt(e,"side",3,Jn),x=qt(e,"type",3,"grid"),S=qt(e,"axis",3,"x"),b=qt(e,"maxRadius",3,0),I=qt(e,"cellDividers",3,6),A=qt(e,"sectionDividers",3,2),D=qt(e,"ref",15),w=Hl(e,["$$slots","$$events","$$legacy","cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","fadeOrigin","cellThickness","sectionThickness","side","type","axis","maxRadius","cellDividers","sectionDividers","ref","children"]);const E=new an,{invalidate:O,camera:U}=Zo(),H=new $i,ne=new B(0,1,0),K=new B(0,0,0),he={x:0,y:1,z:2},fe={xz:"xzy",xy:"xyz",zy:"zyx"},ae={grid:0,lines:1,circular:2,polar:3},X={cellSize:{value:i()},sectionSize:{value:a()},cellColor:{value:new ht(t())},sectionColor:{value:new ht(n())},backgroundColor:{value:new ht(s())},backgroundOpacity:{value:o()},fadeDistance:{value:h()},fadeStrength:{value:f()},fadeOrigin:{value:new B},cellThickness:{value:_()},sectionThickness:{value:g()},infiniteGrid:{value:d()},followCamera:{value:u()},coord0:{value:0},coord1:{value:2},coord2:{value:1},gridType:{value:ae.grid},lineGridCoord:{value:he[S()]},circleGridMaxRadius:{value:b()},polarCellDividers:{value:I()},polarSectionDividers:{value:A()},worldCamProjPosition:{value:new B},worldPlanePosition:{value:new B}};Ot(()=>{const j=fe[l()],me=j.charAt(0),Re=j.charAt(1),be=j.charAt(2);X.coord0.value=he[me],X.coord1.value=he[Re],X.coord2.value=he[be],O()}),Ot(()=>{X.cellSize.value=i(),O()}),Ot(()=>{X.sectionSize.value=a(),O()}),Ot(()=>{X.cellColor.value.set(t()),O()}),Ot(()=>{X.sectionColor.value.set(n()),O()}),Ot(()=>{X.backgroundColor.value.set(s()),O()}),Ot(()=>{X.backgroundOpacity.value=o(),O()}),Ot(()=>{X.fadeDistance.value=h(),O()}),Ot(()=>{X.fadeStrength.value=f(),O()}),Ot(()=>{m()&&(X.fadeOrigin.value=m(),O())}),Ot(()=>{X.cellThickness.value=_(),O()}),Ot(()=>{X.sectionThickness.value=g(),O()}),Ot(()=>{X.followCamera.value=u(),O()}),Ot(()=>{X.infiniteGrid.value=d(),O()}),Ot(()=>{switch(x()){case"grid":{X.gridType.value=ae.grid;break}case"lines":{X.gridType.value=ae.lines,X.lineGridCoord.value=he[S()];break}case"circular":{X.gridType.value=ae.circular,X.circleGridMaxRadius.value=b();break}case"polar":{X.gridType.value=ae.polar,X.circleGridMaxRadius.value=b(),X.polarCellDividers.value=I(),X.polarSectionDividers.value=A();break}}O()}),fg(()=>{H.setFromNormalAndCoplanarPoint(ne,K).applyMatrix4(E.matrixWorld);const j=E.material,me=j.uniforms.worldCamProjPosition,Re=j.uniforms.worldPlanePosition,be=j.uniforms.fadeOrigin,Ve=H.projectPoint(U.current.position,me.value);m()||(be.value=Ve),Re.value.set(0,0,0).applyMatrix4(E.matrixWorld)},{autoInvalidate:!1}),y(r,mp({get is(){return E},frustumCulled:!1},()=>w,{get ref(){return D()},set ref(j){D(j)},children:(j,me)=>{var Re=Yw(),be=G(Re);M(be,()=>y.ShaderMaterial,(oe,te)=>{te(oe,{get fragmentShader(){return qw},get vertexShader(){return Xw},get uniforms(){return X},transparent:!0,get side(){return v()}})});var Ve=P(be,2);{var Qe=oe=>{var te=Ut(),re=G(te);Wl(re,()=>e.children,()=>({ref:E})),V(oe,te)},Ge=oe=>{var te=Ut(),re=G(te);{let xe=R(()=>typeof c()=="number"?[c(),c()]:c());M(re,()=>y.PlaneGeometry,(Le,Te)=>{Te(Le,{get args(){return p(xe)}})})}V(oe,te)};gn(Ve,oe=>{e.children?oe(Qe):oe(Ge,-1)})}V(j,Re)},$$slots:{default:!0}})),Fn()}new At;new At;new an;`${Et.logdepthbuf_pars_vertex}${Et.fog_pars_vertex}${Et.logdepthbuf_vertex}${Et.fog_vertex}`;`${Et.tonemapping_fragment}${Et.colorspace_fragment}`;`${Et.tonemapping_fragment}${Et.colorspace_fragment}`;const Jw=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Kw=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`,jw=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Qw=jw,e2=`
	${Jw}
	${Kw}
`;`${Qw}${e2}${Et.tonemapping_fragment}${Et.colorspace_fragment}`;new pn;typeof window<"u"&&document.createElement("div");const t2=r=>{const{camera:e}=Zo();let t=r.current.clientWidth,n=r.current.clientHeight;const i=new ResizeObserver(([o])=>{t=o.contentRect.width,n=o.contentRect.height}),s=Cs(r);return Ot(()=>{const{current:o}=s;if(o)return i.observe(o),()=>i.unobserve(o)}),(o,a)=>{a.pointer.update(l=>(l.set(o.offsetX/t*2-1,-(o.offsetY/n)*2+1),l)),a.raycaster.setFromCamera(a.pointer.current,e.current)}},gg=Symbol("interactivity-context"),n2=()=>Wn(gg),i2=r=>{const e=sn(Pc().dom),t={enabled:sn(!0),pointer:sn(new We),pointerOverTarget:sn(!1),lastEvent:void 0,raycaster:new Km,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,handlers:new WeakMap,compute:t2(e),filter:r?.filter,addInteractiveObject:(n,i)=>{t.interactiveObjects.indexOf(n)>-1||(t.handlers.set(n,i),t.interactiveObjects.push(n))},removeInteractiveObject:n=>{const i=t.interactiveObjects.indexOf(n);t.interactiveObjects.splice(i,1),t.handlers.delete(n)}};return Hn(gg,t),t},vg=()=>{const r=n2();if(!r)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");return r},ip=["onclick","oncontextmenu","ondblclick","onwheel","onpointerup","onpointerdown","onpointerover","onpointerout","onpointerenter","onpointerleave","onpointermove","onpointermissed"],r2=()=>{Fw("interactivity",r=>{if(!hi(r.ref,"Object3D")||!Object.entries(r.props).some(([i,s])=>s!==void 0&&ip.includes(i)))return;const{addInteractiveObject:t,removeInteractiveObject:n}=vg();return J1.pre(()=>[r.ref],([i])=>(t(i,r.props),()=>{n(i)})),{pluginProps:ip}})};function rp(r){return`${(r.eventObject||r.object).uuid}|${r.index}|${r.instanceId}`}const sp=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],s2=r=>{const{handlers:e}=vg(),t=x=>{const S=x.offsetX-r.initialClick[0],b=x.offsetY-r.initialClick[1];return Math.round(Math.hypot(S,b))},n=x=>{if(r.hovered.size===0)return;const S=new Set;for(const b of x)S.add(rp(b));for(const[b,I]of r.hovered)if(!S.has(b)){const{eventObject:A}=I;r.hovered.delete(b);const D=e.get(A);if(D){const w={...I,intersections:x};D.onpointerout?.(w),D.onpointerleave?.(w)}}},i=()=>{if(!r.enabled.current)return[];const x=[],S=r.raycaster.intersectObjects(r.interactiveObjects,!0),b=r.filter===void 0?S:r.filter(S,r);for(const I of b){let A=I.object;for(;A;)e.has(A)&&x.push({...I,eventObject:A}),A=A.parent}return x},s=(x,S)=>{for(const b of S)e.get(b)?.onpointermissed?.(x)},o=()=>{r.pointerOverTarget.set(!1),n([])},a=()=>{r.pointerOverTarget.set(!0)},l=x=>{const S=x.type,b=S==="pointermove",I=S==="click"||S==="contextmenu"||S==="dblclick";r.compute(x,r);const A=i(),D=I?t(x):0;S==="pointerdown"&&(r.initialClick=[x.offsetX,x.offsetY],r.initialHits=A.map(E=>E.eventObject)),I&&A.length===0&&D<=2&&s(x,r.interactiveObjects),b&&n(A);let w=!1;e:for(const E of A){const O=e.get(E.eventObject);if(!O)continue;const U={stopped:w,...E,intersections:A,stopPropagation(){if(w=!0,U.stopped=!0,r.hovered.size>0&&Array.from(r.hovered.values()).some(H=>H.eventObject===E.eventObject)){const H=A.slice(0,A.indexOf(E));n([...H,E])}},camera:r.raycaster.camera,delta:D,nativeEvent:x,pointer:r.pointer.current,ray:r.raycaster.ray};if(b){if(O.onpointerover||O.onpointerenter||O.onpointerout||O.onpointerleave){const H=rp(U),ne=r.hovered.get(H);ne?ne.stopped&&U.stopPropagation():(r.hovered.set(H,U),O.onpointerover?.(U),O.onpointerenter?.(U))}O.onpointermove?.(U)}else O[`on${S}`]?(!I||r.initialHits.includes(E.eventObject))&&(s(x,r.interactiveObjects.filter(H=>!r.initialHits.includes(H))),O[`on${S}`]?.(U)):I&&r.initialHits.includes(E.eventObject)&&s(x,r.interactiveObjects.filter(H=>!r.initialHits.includes(H)));if(w)break e}};let c=0,u=null,d=-1/0,h=-1/0;const f=.25,m=x=>{Math.abs(x.offsetX-d)<f&&Math.abs(x.offsetY-h)<f||(d=x.offsetX,h=x.offsetY,u=x,c||(c=requestAnimationFrame(()=>{c=0,u&&(l(u),u=null)})))},_=x=>{for(const[S]of sp)S==="pointerleave"||S==="pointercancel"?x.removeEventListener(S,o):S==="pointermove"?x.removeEventListener(S,m):S==="pointerenter"?x.removeEventListener(S,a):x.removeEventListener(S,l)},g=x=>{for(const[S,b]of sp)S==="pointerleave"||S==="pointercancel"?x.addEventListener(S,o,{passive:b}):S==="pointermove"?x.addEventListener(S,m,{passive:b}):S==="pointerenter"?x.addEventListener(S,a,{passive:b}):x.addEventListener(S,l,{passive:b})},v=Cs(r.target);Ot(()=>{const{current:x}=v;if(x)return g(x),()=>{_(x)}})},o2=r=>{const e=i2(r);return r2(),s2(e),e};for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);new $s(-1,1,1,-1,0,1);class a2 extends Rt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}new a2;var _g={exports:{}};_g.exports=Dc;_g.exports.default=Dc;function Dc(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=xg(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,u,d,h,f;if(n&&(s=d2(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(var m=t;m<i;m+=t)d=r[m],h=r[m+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Bo(s,o,t,a,l,f,0),o}function xg(r,e,t,n,i){var s,o;if(i===rh(r,e,t,n)>0)for(s=e;s<t;s+=n)o=op(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=op(s,r[s],r[s+1],o);return o&&Lc(o,o.next)&&($o(o),o=o.next),o}function Xr(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Lc(t,t.next)||tn(t.prev,t,t.next)===0)){if($o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Bo(r,e,t,n,i,s,o){if(r){!o&&s&&v2(r,n,i,s);for(var a=r,l,c;r.prev!==r.next;){if(l=r.prev,c=r.next,s?c2(r,n,i,s):l2(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),$o(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=u2(Xr(r),e,t),Bo(r,e,t,n,i,s,2)):o===2&&h2(r,e,t,n,i,s):Bo(Xr(r),e,t,n,i,s,1);break}}}}function l2(r){var e=r.prev,t=r,n=r.next;if(tn(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Ts(i,a,s,l,o,c,m.x,m.y)&&tn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function c2(r,e,t,n){var i=r.prev,s=r,o=r.next;if(tn(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,u=i.y,d=s.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<d?u<h?u:h:d<h?d:h,_=a>l?a>c?a:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,v=nh(f,m,e,t,n),x=nh(_,g,e,t,n),S=r.prevZ,b=r.nextZ;S&&S.z>=v&&b&&b.z<=x;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Ts(a,u,l,d,c,h,S.x,S.y)&&tn(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=f&&b.x<=_&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ts(a,u,l,d,c,h,b.x,b.y)&&tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=v;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Ts(a,u,l,d,c,h,S.x,S.y)&&tn(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=x;){if(b.x>=f&&b.x<=_&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ts(a,u,l,d,c,h,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function u2(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Lc(i,s)&&yg(i,n,n.next,s)&&zo(i,s)&&zo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),$o(n),$o(n.next),n=r=s),n=n.next}while(n!==r);return Xr(n)}function h2(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&y2(o,a)){var l=Mg(o,a);o=Xr(o,o.next),l=Xr(l,l.next),Bo(o,e,t,n,i,s,0),Bo(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function d2(r,e,t,n){var i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=xg(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(x2(c));for(i.sort(f2),s=0;s<i.length;s++)t=p2(i[s],t);return t}function f2(r,e){return r.x-e.x}function p2(r,e){var t=m2(r,e);if(!t)return e;var n=Mg(t,r);return Xr(n,n.next),Xr(t,t.next)}function m2(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var l=o,c=o.x,u=o.y,d=1/0,h;t=o;do n>=t.x&&t.x>=c&&n!==t.x&&Ts(i<u?n:s,i,c,u,i<u?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),zo(t,r)&&(h<d||h===d&&(t.x>o.x||t.x===o.x&&g2(o,t)))&&(o=t,d=h)),t=t.next;while(t!==l);return o}function g2(r,e){return tn(r.prev,r,e.prev)<0&&tn(e.next,r,r.next)<0}function v2(r,e,t,n){var i=r;do i.z===0&&(i.z=nh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,_2(i)}function _2(r){var e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function nh(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function x2(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ts(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function y2(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!M2(r,e)&&(zo(r,e)&&zo(e,r)&&S2(r,e)&&(tn(r.prev,r,e.prev)||tn(r,e.prev,e))||Lc(r,e)&&tn(r.prev,r,r.next)>0&&tn(e.prev,e,e.next)>0)}function tn(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Lc(r,e){return r.x===e.x&&r.y===e.y}function yg(r,e,t,n){var i=Ha(tn(r,e,t)),s=Ha(tn(r,e,n)),o=Ha(tn(t,n,r)),a=Ha(tn(t,n,e));return!!(i!==s&&o!==a||i===0&&Ga(r,t,e)||s===0&&Ga(r,n,e)||o===0&&Ga(t,r,n)||a===0&&Ga(t,e,n))}function Ga(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ha(r){return r>0?1:r<0?-1:0}function M2(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&yg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function zo(r,e){return tn(r.prev,r,r.next)<0?tn(r,e,r.next)>=0&&tn(r,r.prev,e)>=0:tn(r,e,r.prev)<0||tn(r,r.next,e)<0}function S2(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Mg(r,e){var t=new ih(r.i,r.x,r.y),n=new ih(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function op(r,e,t,n){var i=new ih(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $o(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ih(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Dc.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(rh(r,0,s,t));if(i)for(var a=0,l=e.length;a<l;a++){var c=e[a]*t,u=a<l-1?e[a+1]*t:r.length;o-=Math.abs(rh(r,c,u,t))}var d=0;for(a=0;a<n.length;a+=3){var h=n[a]*t,f=n[a+1]*t,m=n[a+2]*t;d+=Math.abs((r[h]-r[m])*(r[f+1]-r[h+1])-(r[h]-r[f])*(r[m+1]-r[h+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function rh(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Dc.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new We;new We;var ap;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const l=i[a];for(;s.length>=2;){const c=s[s.length-1],u=s[s.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))s.pop();else break}s.push(l)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const l=i[a];for(;o.length>=2;){const c=o[o.length-1],u=o[o.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))o.pop();else break}o.push(l)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(ap||(ap={}));new qi;new B;new At;new pr;new mn;new pn;new B;new B;const Nc=[{stepNumber:1,title:"前期准备与施工许可",description:"在任何实质性物理施工开始之前，必须完成繁琐但至关重要的行政审批与场地规划工作。承包商需要向当地建筑与安全局提交详细的施工图纸，以申请并获得多项施工许可证，包括但不限于区划、场地平整、主体结构、水管、电气及暖通空调等专项许可。此外，这一阶段还包括现场的初步勘察、临时设施的搭建（如安全围栏、便携式厕所），以及临时水电的接入，确保施工现场符合OSHA安全规范并具备正式开工条件。",visibleComponentIds:[],audio:"1.mp3",imageLink:"https://www.google.com/search?q=empty+site+before+construction&udm=2"},{stepNumber:2,title:"场地放线与土方开挖",description:"取得所有必要许可后，施工团队正式进场。首先使用测量仪器进行精确的场地放线，设置龙门板和参考拉线，以严格对应建筑图纸确定房屋的确切位置和边界。随后，使用重型机械清理地表植被、岩石和废弃物，并根据设计标高进行土方开挖与场地平整。挖掘工作不仅涉及房屋主体结构的地基沟槽，还可能包括地下公用设施（如化粪池、下水道主管道）的深沟开挖。",visibleComponentIds:[],audio:"2.mp3",imageLink:"https://www.google.com/search?q=construction+site+digging+and+batter+board&udm=2"},{stepNumber:3,title:"浇筑地基",description:"地基是整个建筑的重中之重。在挖掘好的沟槽内，工人们会先铺设碎石垫层并组装木制或金属模板，随后严格按照结构图纸绑扎钢筋以增强地基的抗拉强度。对于板上地基，还需要在浇筑前铺设防潮膜并预埋底层的水管和电线管。一切就绪并经过市政检查官的首次查验后，方可浇筑混凝土。在混凝土未完全凝固时，必须精准预埋地脚螺栓和抗震连接件，以便日后将上层木结构底梁牢牢锚固在地基上。混凝土需经过充分养护才能达到设计强度。",visibleComponentIds:[],audio:"3.mp3",imageLink:"https://www.google.com/search?q=concrete+foundation+construction&udm=2"},{stepNumber:4,title:"完成主体结构框架",description:"这一阶段将构筑房屋的骨架，是视觉上变化最快的过程。木工团队首先在混凝土地基上安装经过防腐处理的底梁，接着搭建承重和非承重的木板墙体框架，包括墙骨柱、顶梁以及门窗洞口的过梁。如果是多层建筑，还会安装楼板托梁和底基板。最后搭建屋顶结构，通常使用预制屋顶桁架或现场切割的椽子和屋脊板。结构外侧会钉上定向刨花板（OSB）或胶合板作为剪力墙面板，并覆上防风雨透气膜，使房屋初具雏形。",visibleComponentIds:[],audio:"4.mp3",imageLink:"https://www.google.com/search?q=rough+framing+construction&udm=2"},{stepNumber:5,title:"水电及暖通空调管线预埋",description:"房屋骨架搭建完毕后，机电分包商开始进行隐蔽工程的“粗装”。水管工将在墙体和地板骨架之间穿插布设给水管和带有排气系统的排水管道。电工将安装主配电箱、走线盒，并将各种规格的电线穿过墙骨柱引至各个插座、开关和照明设备的预定位置。同时，暖通空调技术人员会安装室内主机，并在天花板或地板下布置复杂的金属或柔性通风管道。所有这些管线在被墙板封闭前，都必须经过严格的市政合规性检查。",visibleComponentIds:[],audio:"5.mp3",imageLink:"https://www.google.com/search?q=rough+framing+rough+wire+sewer+hvac+install&udm=2"},{stepNumber:6,title:"安装室外配电箱与空调室外机",description:"配合室内的隐蔽工程，外部的机电核心设备也开始就位。在房屋侧面或后方的指定区域，电工会安装连接市政电网的主服务配电箱，并确保其接地系统符合国家电气法规的要求。同时，暖通空调团队会为室外冷凝机组专门浇筑或放置一块平整的混凝土设备地基，将厚重的室外机安放其上，并完成与室内系统相连的冷媒铜管和控制线的对接与测试。",visibleComponentIds:[],audio:"6.mp3",imageLink:"https://www.google.com/search?q=construction+electrical+panel+AC+condensor&udm=2"},{stepNumber:7,title:"安装保温隔热层",description:"在所有墙内管线通过市政检查后，开始安装保温材料以控制热量传递，提高房屋的能源效率并满足节能建筑标准。工人们会在外墙的墙骨柱之间、阁楼的托梁之间以及悬空地板下方填充玻璃纤维棉、吹入式纤维素质或喷涂隔热泡沫。对于不同气候区，材料的热阻值（R-value）有严格的规范要求。保温层内侧通常还会配备防潮层，以防止室内湿气进入墙体深处导致霉菌生长或结构木材腐烂。",visibleComponentIds:[],audio:"7.mp3",imageLink:"https://www.google.com/search?q=construction+insulation&udm=2"},{stepNumber:8,title:"施工外墙饰面",description:"外部防护与装饰工程同步展开，为房屋穿上最终的外衣。在之前铺设的防风雨透气膜之外，承包商会根据设计要求安装外墙饰面材料。这可能是横向的纤维水泥挂板、传统的实木挂板、砖石贴面，或者是加州非常典型的灰泥涂层（Stucco）。如果是灰泥，则需要先钉上金属网，然后分多层涂抹并刮平砂浆。这一步骤不仅决定了房屋的最终立面风格，更构成了抵御风吹雨打、保护内部结构的坚固防线。",visibleComponentIds:[],audio:"8.mp3",imageLink:"https://www.google.com/search?q=construction+siding+stucco+work&udm=2"},{stepNumber:9,title:"安装屋面系统",description:"与外墙饰面同时或稍早进行的是屋顶封顶工程，这是实现房屋完全封闭防雨的关键一步。在屋顶桁架上铺设完木质覆面板后，屋顶工会铺上一层高分子防水卷材或油毡。接着，从屋檐开始自下而上交错安装金属泛水板和屋面表层材料。材料选择十分多样，包括沥青瓦、陶土瓦、混凝土瓦或金属屋面板。屋顶系统的正确安装和密封对于防止漏水、保障房屋内部财产及整体结构寿命至关重要。",visibleComponentIds:[],audio:"9.mp3",imageLink:"https://www.google.com/search?q=construction+roofing+work&udm=2"},{stepNumber:10,title:"安装室内硬装与室外硬化铺装",description:"当房屋内部完成石膏板的安装、填缝和打磨，并涂刷完底漆后，工程正式进入精装修阶段。室内将开始大面积铺设硬面材料，例如实木地板、复合地板或瓷砖。同时，厨房和浴室的定制橱柜被牢牢固定在墙体骨架上，随后安装石材台面以及各类卫浴洁具。在室外，混凝土团队则忙于完成庭院的硬化景观，包括浇筑车道、迎宾步道、后院露台以及必要的挡水墙，并确保所有硬化地面都有适当的排水坡度。",visibleComponentIds:[],audio:"10.mp3",imageLink:"https://www.google.com/search?q=construction+interior+finish+work&udm=2"},{stepNumber:11,title:"门窗工程安装",description:"门窗的精准安装是完善建筑外壳保温和安保功能的关键。工人们将预制好的窗户单元和外门（如正门、侧门及滑动玻璃门）小心地放入框架阶段留出的预留洞口中。安装过程中必须反复使用水平尺和垫片确保门窗绝对水平和垂直，然后将其固定在木骨架上。随后，在门窗周围的缝隙中填充低膨胀泡沫保温剂，并在外部贴覆防水胶带和施打耐候密封胶，以彻底阻断空气泄漏和雨水渗透。",visibleComponentIds:[],audio:"11.mp3",imageLink:"https://www.google.com/search?q=construction+door+and+window+installing&udm=2"},{stepNumber:12,title:"完善室外景观绿化",description:"建筑工程的最后收尾阶段是将冰冷的建筑物完美融入自然环境之中。专业的景观团队会对庭院土壤进行最后的细致平整，确保所有地表径流都顺着坡度远离房屋地基。接着，他们会开沟铺设地下自动灌溉系统，并根据景观设计图纸铺设草皮、播种草籽，栽种各类乔木、灌木和装饰花卉。完善的绿化不仅极大地提升了房产的街景颜值，也有助于调节局部微气候。待这一步完成且房屋内部全部保洁完毕后，即可申请最终的入住许可证。",visibleComponentIds:[],audio:"12.mp3",imageLink:""}];function b2(r){return Nc.find(e=>e.stepNumber===r)}const Wa=Nc.length;let sh=Yt(1),oh=Yt(null);function dn(r){Ct(oh,r,!0)}function w2(r){return r.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}const T2={"ac-condenser":"空调冷凝机","anchor-bolt":"地脚螺栓",bathtub:"浴缸","batter-board":"定位板","ceiling-joist":"天花搁栅",chimney:"烟囱","concrete-slab":"混凝土板",countertop:"台面","coffee-table":"茶几",door:"门","door-knob":"门把手","dining-chair":"餐椅","dining-table":"餐桌","dog-house":"狗屋","dog-plate":"狗碗",driveway:"车道","dry-grass":"枯草",drywall:"石膏板","electrical-box":"配电箱","electrical-panel":"配电箱","electrical-wire":"电线","equipment-slab":"设备地基",fascia:"檐板",fence:"围栏",flooring:"地板",footing:"地基底脚",formwork:"模板",header:"过梁","hvac-duct":"暖通风管",insulation:"保温层","jack-stud":"托柱","plumbing-cold":"冷水管","plumbing-hot":"热水管","rabbit-hole":"兔子洞",rebar:"钢筋","ridge-board":"屋脊板",rock:"岩石","roof-rafter":"屋椽","roof-vent":"屋顶通风口",roofing:"屋面","rough-sill":"窗台梁","sewer-line":"污水管","sewer-vent":"排污通气管",shrub:"灌木",skylight:"天窗",siding:"外墙挂板","sill-plate":"底板",sofa:"沙发",bed:"床","kitchen-counter":"厨房柜台",nightstand:"床头柜",toilet:"马桶","toilet-tank":"马桶水箱","top-plate":"顶板","tree-foliage":"树叶","tree-trunk":"树干","tub-surround":"浴缸围板",vanity:"浴室柜","vanity-top":"浴室柜台面",walkway:"人行道","wall-stud":"墙立柱","window-frame":"窗框","window-glass":"窗玻璃"};function A2(r){const e=w2(r);return{english:e,chinese:T2[r]??e}}const E2={get(){return p(oh)},set(r){Ct(oh,r,!0)}},hn={get(){return p(sh)},set(r){r>=1&&r<=Nc.length&&Ct(sh,r,!0)}};function C2(){return b2(p(sh))??Nc[0]}var P2=Y("<!> <!>",1),R2=Y("<!> <!>",1),I2=Y("<!> <!>",1),D2=Y("<!> <!>",1),L2=Y("<!> <!>",1),N2=Y("<!> <!>",1),U2=Y("<!> <!>",1),F2=Y("<!> <!>",1),O2=Y("<!> <!> <!> <!> <!> <!> <!> <!>",1);function B2(r,e){Un(e,!0);const t=12,n=10,i=t-.6,s=n-.6,o=.04,a=.08,l="#6f6f6f",c=6,u="#9a7a53",d=1.4,h=.08,f=1.4,m=.1,_=.08,g=.2,v="#8b6a45",x=.22,S=.08,b=.04,I="#4fc3f7";let A=Yt(null);function D(U,H){U.stopPropagation(),dn(H),Ct(A,H,!0)}function w(){dn(null),Ct(A,null)}var E=Ut(),O=G(E);{let U=R(()=>hn.get()===2);M(O,()=>y.Group,(H,ne)=>{ne(H,{get visible(){return p(U)},children:(K,he)=>{var fe=O2(),ae=G(fe);Qt(ae,17,()=>Array(c),jt,(Ge,oe,te)=>{const re=R(()=>-s/2+te*s/(c-1));var xe=Ut(),Le=G(xe);{let Te=R(()=>[0,a,p(re)]);M(Le,()=>y.Mesh,($e,Oe)=>{Oe($e,{get position(){return p(Te)},rotation:[0,0,Math.PI/2],name:"rebar",onpointerenter:ie=>D(ie,"rebar"),onpointerleave:w,children:(ie,pe)=>{var ue=P2(),Ae=G(ue);M(Ae,()=>y.CylinderGeometry,(Se,Ce)=>{Ce(Se,{args:[o,o,i,8]})});var N=P(Ae,2);{let Se=R(()=>p(A)==="rebar"?I:l);M(N,()=>y.MeshStandardMaterial,(Ce,Ie)=>{Ie(Ce,{get color(){return p(Se)}})})}V(ie,ue)},$$slots:{default:!0}})})}V(Ge,xe)});var X=P(ae,2);M(X,()=>y.Mesh,(Ge,oe)=>{oe(Ge,{position:[0,x/2,n/2-S/2-b],name:"formwork",onpointerenter:te=>D(te,"formwork"),onpointerleave:w,children:(te,re)=>{var xe=R2(),Le=G(xe);M(Le,()=>y.BoxGeometry,($e,Oe)=>{Oe($e,{args:[t,x,S]})});var Te=P(Le,2);{let $e=R(()=>p(A)==="formwork"?I:v);M(Te,()=>y.MeshStandardMaterial,(Oe,ie)=>{ie(Oe,{get color(){return p($e)}})})}V(te,xe)},$$slots:{default:!0}})});var j=P(X,2);M(j,()=>y.Mesh,(Ge,oe)=>{oe(Ge,{position:[0,x/2,-n/2+S/2+b],name:"formwork",onpointerenter:te=>D(te,"formwork"),onpointerleave:w,children:(te,re)=>{var xe=I2(),Le=G(xe);M(Le,()=>y.BoxGeometry,($e,Oe)=>{Oe($e,{args:[t,x,S]})});var Te=P(Le,2);{let $e=R(()=>p(A)==="formwork"?I:v);M(Te,()=>y.MeshStandardMaterial,(Oe,ie)=>{ie(Oe,{get color(){return p($e)}})})}V(te,xe)},$$slots:{default:!0}})});var me=P(j,2);M(me,()=>y.Mesh,(Ge,oe)=>{oe(Ge,{position:[-t/2+S/2+b,x/2,0],name:"formwork",onpointerenter:te=>D(te,"formwork"),onpointerleave:w,children:(te,re)=>{var xe=D2(),Le=G(xe);M(Le,()=>y.BoxGeometry,($e,Oe)=>{Oe($e,{args:[S,x,n-S*2]})});var Te=P(Le,2);{let $e=R(()=>p(A)==="formwork"?I:v);M(Te,()=>y.MeshStandardMaterial,(Oe,ie)=>{ie(Oe,{get color(){return p($e)}})})}V(te,xe)},$$slots:{default:!0}})});var Re=P(me,2);M(Re,()=>y.Mesh,(Ge,oe)=>{oe(Ge,{position:[t/2-S/2-b,x/2,0],name:"formwork",onpointerenter:te=>D(te,"formwork"),onpointerleave:w,children:(te,re)=>{var xe=L2(),Le=G(xe);M(Le,()=>y.BoxGeometry,($e,Oe)=>{Oe($e,{args:[S,x,n-S*2]})});var Te=P(Le,2);{let $e=R(()=>p(A)==="formwork"?I:v);M(Te,()=>y.MeshStandardMaterial,(Oe,ie)=>{ie(Oe,{get color(){return p($e)}})})}V(te,xe)},$$slots:{default:!0}})});var be=P(Re,2);Qt(be,17,()=>Array(c),jt,(Ge,oe,te)=>{const re=R(()=>-i/2+te*i/(c-1));var xe=Ut(),Le=G(xe);{let Te=R(()=>[p(re),a,0]);M(Le,()=>y.Mesh,($e,Oe)=>{Oe($e,{get position(){return p(Te)},rotation:[Math.PI/2,0,0],name:"rebar",onpointerenter:ie=>D(ie,"rebar"),onpointerleave:w,children:(ie,pe)=>{var ue=N2(),Ae=G(ue);M(Ae,()=>y.CylinderGeometry,(Se,Ce)=>{Ce(Se,{args:[o,o,s,8]})});var N=P(Ae,2);{let Se=R(()=>p(A)==="rebar"?I:l);M(N,()=>y.MeshStandardMaterial,(Ce,Ie)=>{Ie(Ce,{get color(){return p(Se)}})})}V(ie,ue)},$$slots:{default:!0}})})}V(Ge,xe)});var Ve=P(be,2);Qt(Ve,17,()=>[[-t/2-g,n/2+g,0],[t/2+g,n/2+g,0],[-t/2-g,-n/2-g,0],[t/2+g,-n/2-g,0]],jt,(Ge,oe)=>{var te=R(()=>Es(p(oe),2));let re=()=>p(te)[0],xe=()=>p(te)[1];var Le=Ut(),Te=G(Le);{let $e=R(()=>[re(),d/2,xe()]);M(Te,()=>y.Mesh,(Oe,ie)=>{ie(Oe,{get position(){return p($e)},name:"batter-board",onpointerenter:pe=>D(pe,"batter-board"),onpointerleave:w,children:(pe,ue)=>{var Ae=U2(),N=G(Ae);M(N,()=>y.BoxGeometry,(Ce,Ie)=>{Ie(Ce,{args:[h,d,h]})});var Se=P(N,2);{let Ce=R(()=>p(A)==="batter-board"?I:u);M(Se,()=>y.MeshStandardMaterial,(Ie,ye)=>{ye(Ie,{get color(){return p(Ce)}})})}V(pe,Ae)},$$slots:{default:!0}})})}V(Ge,Le)});var Qe=P(Ve,2);Qt(Qe,17,()=>[[0,n/2+g,f,m,_],[0,-n/2-g,f,m,_],[-t/2-g,0,_,m,f],[t/2+g,0,_,m,f]],jt,(Ge,oe)=>{var te=R(()=>Es(p(oe),5));let re=()=>p(te)[0],xe=()=>p(te)[1],Le=()=>p(te)[2],Te=()=>p(te)[3],$e=()=>p(te)[4];var Oe=Ut(),ie=G(Oe);{let pe=R(()=>[re(),d-.2,xe()]);M(ie,()=>y.Mesh,(ue,Ae)=>{Ae(ue,{get position(){return p(pe)},name:"batter-board",onpointerenter:N=>D(N,"batter-board"),onpointerleave:w,children:(N,Se)=>{var Ce=F2(),Ie=G(Ce);{let L=R(()=>[Le(),Te(),$e()]);M(Ie,()=>y.BoxGeometry,(T,W)=>{W(T,{get args(){return p(L)}})})}var ye=P(Ie,2);{let L=R(()=>p(A)==="batter-board"?I:u);M(ye,()=>y.MeshStandardMaterial,(T,W)=>{W(T,{get color(){return p(L)}})})}V(N,Ce)},$$slots:{default:!0}})})}V(Ge,Oe)}),V(K,fe)},$$slots:{default:!0}})})}V(r,E),Fn()}var z2=Y("<!> <!>",1),$2=Y("<!> <!>",1),k2=Y("<!> <!>",1),V2=Y("<!> <!> <!>",1);function G2(r,e){Un(e,!0);const t=30,n=30,i="#6b5a45",s="#7b7469",o="#a79d71",a="#4fc3f7";let l=Yt(null);function c(f){f.stopPropagation();const m=f?.object?.name??null;dn(m),Ct(l,m,!0)}function u(){dn(null),Ct(l,null)}var d=Ut(),h=G(d);M(h,()=>y.Group,(f,m)=>{m(f,{onpointermove:c,onpointerleave:u,children:(_,g)=>{var v=V2(),x=G(v);M(x,()=>y.Mesh,(I,A)=>{A(I,{position:[0,-.48,0],rotation:[-Math.PI/2,0,0],children:(D,w)=>{var E=z2(),O=G(E);M(O,()=>y.PlaneGeometry,(H,ne)=>{ne(H,{args:[t,n]})});var U=P(O,2);M(U,()=>y.MeshStandardMaterial,(H,ne)=>{ne(H,{color:i})}),V(D,E)},$$slots:{default:!0}})});var S=P(x,2);Qt(S,16,()=>[[-7,-4,.55],[3,-6,.42],[8,1,.5],[-2,5,.38],[10,-8,.46],[-10,8,.44]],jt,(I,A)=>{var D=R(()=>Es(A,3));let w=()=>p(D)[0],E=()=>p(D)[1],O=()=>p(D)[2];var U=Ut(),H=G(U);{let ne=R(()=>[w(),-.42+O()/2,E()]);M(H,()=>y.Mesh,(K,he)=>{he(K,{get position(){return p(ne)},name:"rock",children:(fe,ae)=>{var X=$2(),j=G(X);{let Re=R(()=>[O(),0]);M(j,()=>y.DodecahedronGeometry,(be,Ve)=>{Ve(be,{get args(){return p(Re)}})})}var me=P(j,2);{let Re=R(()=>p(l)==="rock"?a:s);M(me,()=>y.MeshStandardMaterial,(be,Ve)=>{Ve(be,{get color(){return p(Re)}})})}V(fe,X)},$$slots:{default:!0}})})}V(I,U)});var b=P(S,2);Qt(b,16,()=>[[-5,7],[6,6],[9,-3],[-8,-7],[1,-9],[11,9],[-11,2]],jt,(I,A)=>{var D=R(()=>Es(A,2));let w=()=>p(D)[0],E=()=>p(D)[1];var O=Ut(),U=G(O);{let H=R(()=>[w(),-.34,E()]);M(U,()=>y.Mesh,(ne,K)=>{K(ne,{get position(){return p(H)},name:"dry-grass",children:(he,fe)=>{var ae=k2(),X=G(ae);M(X,()=>y.ConeGeometry,(me,Re)=>{Re(me,{args:[.22,.42,8]})});var j=P(X,2);{let me=R(()=>p(l)==="dry-grass"?a:o);M(j,()=>y.MeshStandardMaterial,(Re,be)=>{be(Re,{get color(){return p(me)}})})}V(he,ae)},$$slots:{default:!0}})})}V(I,O)}),V(_,v)},$$slots:{default:!0}})}),V(r,d),Fn()}var H2=Y("<!> <!>",1),W2=Y("<!> <!>",1),X2=Y("<!> <!>",1),q2=Y("<!> <!>",1),Y2=Y("<!> <!>",1),Z2=Y("<!> <!>",1),J2=Y("<!> <!>",1),K2=Y("<!> <!>",1),j2=Y("<!> <!>",1),Q2=Y("<!> <!> <!> <!>",1),eT=Y("<!> <!>",1),tT=Y("<!> <!>",1),nT=Y("<!> <!>",1),iT=Y("<!> <!>",1),rT=Y("<!> <!> <!> <!>",1),sT=Y("<!> <!>",1),oT=Y("<!> <!> <!> <!> <!> <!>",1);function aT(r,e){Un(e,!0);const t=12,n=10,i=.5,s=.75,o=1,a="#a0a0a0",l="#888888",c="#4f4f4f",u="#4fc3f7",d=i/2,h=i,f=.08,m=.5,_=.45,g=.2,v=.05,x=[-4,-2,0,2,4],S=[-3,-1,1,3];let b=Yt(null);function I(E,O){E.stopPropagation(),dn(O),Ct(b,O,!0)}function A(){dn(null),Ct(b,null)}var D=Ut(),w=G(D);{let E=R(()=>hn.get()>=3);M(w,()=>y.Group,(O,U)=>{U(O,{get visible(){return p(E)},children:(H,ne)=>{var K=oT(),he=G(K);M(he,()=>y.Mesh,(Re,be)=>{be(Re,{position:[0,d,0],name:"concrete-slab",onpointerenter:Ve=>I(Ve,"concrete-slab"),onpointerleave:A,children:(Ve,Qe)=>{var Ge=H2(),oe=G(Ge);M(oe,()=>y.BoxGeometry,(re,xe)=>{xe(re,{args:[t,i,n]})});var te=P(oe,2);{let re=R(()=>p(b)==="concrete-slab"?u:a);M(te,()=>y.MeshStandardMaterial,(xe,Le)=>{Le(xe,{get color(){return p(re)}})})}V(Ve,Ge)},$$slots:{default:!0}})});var fe=P(he,2);M(fe,()=>y.Mesh,(Re,be)=>{be(Re,{position:[0,-s/2,n/2-o/2],name:"footing",onpointerenter:Ve=>I(Ve,"footing"),onpointerleave:A,children:(Ve,Qe)=>{var Ge=W2(),oe=G(Ge);M(oe,()=>y.BoxGeometry,(re,xe)=>{xe(re,{args:[t,s,o]})});var te=P(oe,2);{let re=R(()=>p(b)==="footing"?u:l);M(te,()=>y.MeshStandardMaterial,(xe,Le)=>{Le(xe,{get color(){return p(re)}})})}V(Ve,Ge)},$$slots:{default:!0}})});var ae=P(fe,2);M(ae,()=>y.Mesh,(Re,be)=>{be(Re,{position:[0,-s/2,-n/2+o/2],name:"footing",onpointerenter:Ve=>I(Ve,"footing"),onpointerleave:A,children:(Ve,Qe)=>{var Ge=X2(),oe=G(Ge);M(oe,()=>y.BoxGeometry,(re,xe)=>{xe(re,{args:[t,s,o]})});var te=P(oe,2);{let re=R(()=>p(b)==="footing"?u:l);M(te,()=>y.MeshStandardMaterial,(xe,Le)=>{Le(xe,{get color(){return p(re)}})})}V(Ve,Ge)},$$slots:{default:!0}})});var X=P(ae,2);M(X,()=>y.Mesh,(Re,be)=>{be(Re,{position:[-t/2+o/2,-s/2,0],name:"footing",onpointerenter:Ve=>I(Ve,"footing"),onpointerleave:A,children:(Ve,Qe)=>{var Ge=q2(),oe=G(Ge);M(oe,()=>y.BoxGeometry,(re,xe)=>{xe(re,{args:[o,s,n-o*2]})});var te=P(oe,2);{let re=R(()=>p(b)==="footing"?u:l);M(te,()=>y.MeshStandardMaterial,(xe,Le)=>{Le(xe,{get color(){return p(re)}})})}V(Ve,Ge)},$$slots:{default:!0}})});var j=P(X,2);M(j,()=>y.Mesh,(Re,be)=>{be(Re,{position:[t/2-o/2,-s/2,0],name:"footing",onpointerenter:Ve=>I(Ve,"footing"),onpointerleave:A,children:(Ve,Qe)=>{var Ge=Y2(),oe=G(Ge);M(oe,()=>y.BoxGeometry,(re,xe)=>{xe(re,{args:[o,s,n-o*2]})});var te=P(oe,2);{let re=R(()=>p(b)==="footing"?u:l);M(te,()=>y.MeshStandardMaterial,(xe,Le)=>{Le(xe,{get color(){return p(re)}})})}V(Ve,Ge)},$$slots:{default:!0}})});var me=P(j,2);{let Re=R(()=>hn.get()<4);M(me,()=>y.Group,(be,Ve)=>{Ve(be,{get visible(){return p(Re)},children:(Qe,Ge)=>{var oe=sT(),te=G(oe);Qt(te,17,()=>x,jt,(xe,Le)=>{var Te=Q2(),$e=G(Te);{let ue=R(()=>[p(Le),h+m/2,n/2-_]);M($e,()=>y.Mesh,(Ae,N)=>{N(Ae,{get position(){return p(ue)},name:"anchor-bolt",onpointerenter:Se=>I(Se,"anchor-bolt"),onpointerleave:A,children:(Se,Ce)=>{var Ie=Z2(),ye=G(Ie);M(ye,()=>y.CylinderGeometry,(T,W)=>{W(T,{args:[f,f,m,12]})});var L=P(ye,2);{let T=R(()=>p(b)==="anchor-bolt"?u:c);M(L,()=>y.MeshStandardMaterial,(W,ve)=>{ve(W,{get color(){return p(T)}})})}V(Se,Ie)},$$slots:{default:!0}})})}var Oe=P($e,2);{let ue=R(()=>[p(Le),h+m+v/2,n/2-_]);M(Oe,()=>y.Mesh,(Ae,N)=>{N(Ae,{get position(){return p(ue)},name:"anchor-bolt",onpointerenter:Se=>I(Se,"anchor-bolt"),onpointerleave:A,children:(Se,Ce)=>{var Ie=J2(),ye=G(Ie);M(ye,()=>y.BoxGeometry,(T,W)=>{W(T,{args:[g,v,g]})});var L=P(ye,2);{let T=R(()=>p(b)==="anchor-bolt"?u:c);M(L,()=>y.MeshStandardMaterial,(W,ve)=>{ve(W,{get color(){return p(T)}})})}V(Se,Ie)},$$slots:{default:!0}})})}var ie=P(Oe,2);{let ue=R(()=>[p(Le),h+m/2,-n/2+_]);M(ie,()=>y.Mesh,(Ae,N)=>{N(Ae,{get position(){return p(ue)},name:"anchor-bolt",onpointerenter:Se=>I(Se,"anchor-bolt"),onpointerleave:A,children:(Se,Ce)=>{var Ie=K2(),ye=G(Ie);M(ye,()=>y.CylinderGeometry,(T,W)=>{W(T,{args:[f,f,m,12]})});var L=P(ye,2);{let T=R(()=>p(b)==="anchor-bolt"?u:c);M(L,()=>y.MeshStandardMaterial,(W,ve)=>{ve(W,{get color(){return p(T)}})})}V(Se,Ie)},$$slots:{default:!0}})})}var pe=P(ie,2);{let ue=R(()=>[p(Le),h+m+v/2,-n/2+_]);M(pe,()=>y.Mesh,(Ae,N)=>{N(Ae,{get position(){return p(ue)},name:"anchor-bolt",onpointerenter:Se=>I(Se,"anchor-bolt"),onpointerleave:A,children:(Se,Ce)=>{var Ie=j2(),ye=G(Ie);M(ye,()=>y.BoxGeometry,(T,W)=>{W(T,{args:[g,v,g]})});var L=P(ye,2);{let T=R(()=>p(b)==="anchor-bolt"?u:c);M(L,()=>y.MeshStandardMaterial,(W,ve)=>{ve(W,{get color(){return p(T)}})})}V(Se,Ie)},$$slots:{default:!0}})})}V(xe,Te)});var re=P(te,2);Qt(re,17,()=>S,jt,(xe,Le)=>{var Te=rT(),$e=G(Te);{let ue=R(()=>[-t/2+_,h+m/2,p(Le)]);M($e,()=>y.Mesh,(Ae,N)=>{N(Ae,{get position(){return p(ue)},name:"anchor-bolt",onpointerenter:Se=>I(Se,"anchor-bolt"),onpointerleave:A,children:(Se,Ce)=>{var Ie=eT(),ye=G(Ie);M(ye,()=>y.CylinderGeometry,(T,W)=>{W(T,{args:[f,f,m,12]})});var L=P(ye,2);{let T=R(()=>p(b)==="anchor-bolt"?u:c);M(L,()=>y.MeshStandardMaterial,(W,ve)=>{ve(W,{get color(){return p(T)}})})}V(Se,Ie)},$$slots:{default:!0}})})}var Oe=P($e,2);{let ue=R(()=>[-t/2+_,h+m+v/2,p(Le)]);M(Oe,()=>y.Mesh,(Ae,N)=>{N(Ae,{get position(){return p(ue)},name:"anchor-bolt",onpointerenter:Se=>I(Se,"anchor-bolt"),onpointerleave:A,children:(Se,Ce)=>{var Ie=tT(),ye=G(Ie);M(ye,()=>y.BoxGeometry,(T,W)=>{W(T,{args:[g,v,g]})});var L=P(ye,2);{let T=R(()=>p(b)==="anchor-bolt"?u:c);M(L,()=>y.MeshStandardMaterial,(W,ve)=>{ve(W,{get color(){return p(T)}})})}V(Se,Ie)},$$slots:{default:!0}})})}var ie=P(Oe,2);{let ue=R(()=>[t/2-_,h+m/2,p(Le)]);M(ie,()=>y.Mesh,(Ae,N)=>{N(Ae,{get position(){return p(ue)},name:"anchor-bolt",onpointerenter:Se=>I(Se,"anchor-bolt"),onpointerleave:A,children:(Se,Ce)=>{var Ie=nT(),ye=G(Ie);M(ye,()=>y.CylinderGeometry,(T,W)=>{W(T,{args:[f,f,m,12]})});var L=P(ye,2);{let T=R(()=>p(b)==="anchor-bolt"?u:c);M(L,()=>y.MeshStandardMaterial,(W,ve)=>{ve(W,{get color(){return p(T)}})})}V(Se,Ie)},$$slots:{default:!0}})})}var pe=P(ie,2);{let ue=R(()=>[t/2-_,h+m+v/2,p(Le)]);M(pe,()=>y.Mesh,(Ae,N)=>{N(Ae,{get position(){return p(ue)},name:"anchor-bolt",onpointerenter:Se=>I(Se,"anchor-bolt"),onpointerleave:A,children:(Se,Ce)=>{var Ie=iT(),ye=G(Ie);M(ye,()=>y.BoxGeometry,(T,W)=>{W(T,{args:[g,v,g]})});var L=P(ye,2);{let T=R(()=>p(b)==="anchor-bolt"?u:c);M(L,()=>y.MeshStandardMaterial,(W,ve)=>{ve(W,{get color(){return p(T)}})})}V(Se,Ie)},$$slots:{default:!0}})})}V(xe,Te)}),V(Qe,oe)},$$slots:{default:!0}})})}V(H,K)},$$slots:{default:!0}})})}V(r,D),Fn()}var lT=Y("<!> <!>",1),cT=Y("<!> <!>",1),uT=Y("<!> <!>",1),hT=Y("<!> <!>",1),dT=Y("<!> <!>",1),fT=Y("<!> <!>",1),pT=Y("<!> <!>",1),mT=Y("<!> <!>",1),gT=Y("<!> <!>",1),vT=Y("<!> <!>",1),_T=Y("<!> <!>",1),xT=Y("<!> <!>",1),yT=Y("<!> <!>",1),MT=Y("<!> <!>",1),ST=Y("<!> <!>",1),bT=Y("<!> <!>",1),wT=Y("<!> <!>",1),TT=Y("<!> <!>",1),AT=Y("<!> <!>",1),ET=Y("<!> <!>",1),CT=Y("<!> <!>",1),PT=Y("<!> <!>",1),RT=Y("<!> <!>",1),IT=Y("<!> <!>",1),DT=Y("<!> <!>",1),LT=Y("<!> <!>",1),NT=Y("<!> <!>",1),UT=Y("<!> <!>",1),FT=Y("<!> <!>",1),OT=Y("<!> <!> <!> <!>  <!> <!>  <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function BT(r,e){Un(e,!0);const t=12,n=10,i=8,s=.15,o=.35,a=.35,l=.15,c="#c4956a",u="#4fc3f7",d=1.5,h=Math.floor(t/d)+1,f=Math.floor(n/d)+1,m=Math.floor(h/3),_=Math.floor(h*2/3),g=7,v=.4,x=3,S=3.4,b=-S/2,I=S/2,A=.5+l,w=t/2*(4/12),E=Math.sqrt((t/2)**2+w**2),O=Math.atan2(w,t/2),U=.22,H=s/2,ne=n-s,K=n/2-o/2,he=K-s,fe=d*2-s,ae=d*2;let X=Yt(null);function j(Qe,Ge){Qe.stopPropagation(),dn(Ge),Ct(X,Ge,!0)}function me(){dn(null),Ct(X,null)}function Re(Qe){return-t/2+Qe*t/(h-1)}var be=Ut(),Ve=G(be);{let Qe=R(()=>hn.get()>=4);M(Ve,()=>y.Group,(Ge,oe)=>{oe(Ge,{get visible(){return p(Qe)},children:(te,re)=>{const xe=R(()=>Re(_)+d);var Le=OT(),Te=G(Le);M(Te,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,l/2+.5,n/2-a/2],name:"sill-plate",onpointerenter:le=>j(le,"sill-plate"),onpointerleave:me,children:(le,F)=>{var ee=lT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[t,l,a]})});var ce=P(Q,2);{let $=R(()=>p(X)==="sill-plate"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var $e=P(Te,2);M($e,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,l/2+.5,-n/2+a/2],name:"sill-plate",onpointerenter:le=>j(le,"sill-plate"),onpointerleave:me,children:(le,F)=>{var ee=cT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[t,l,a]})});var ce=P(Q,2);{let $=R(()=>p(X)==="sill-plate"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var Oe=P($e,2);M(Oe,()=>y.Mesh,(k,Z)=>{Z(k,{position:[-t/2+a/2,l/2+.5,0],name:"sill-plate",onpointerenter:le=>j(le,"sill-plate"),onpointerleave:me,children:(le,F)=>{var ee=uT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[a,l,n-a*2]})});var ce=P(Q,2);{let $=R(()=>p(X)==="sill-plate"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var ie=P(Oe,2);M(ie,()=>y.Mesh,(k,Z)=>{Z(k,{position:[t/2-a/2,l/2+.5,0],name:"sill-plate",onpointerenter:le=>j(le,"sill-plate"),onpointerleave:me,children:(le,F)=>{var ee=hT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[a,l,n-a*2]})});var ce=P(Q,2);{let $=R(()=>p(X)==="sill-plate"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var pe=P(ie,2);Qt(pe,17,()=>Array(h),jt,(k,Z,le)=>{const F=R(()=>Re(le)),ee=R(()=>le===m+1),Q=R(()=>le===_+1),ce=R(()=>p(ee)||p(Q));var $=Ut(),z=G($);{var ge=ke=>{},ze=ke=>{var Ue=Ut(),je=G(Ue);{let ot=R(()=>[p(F),i/2+A,K]);M(je,()=>y.Mesh,(Ze,rt)=>{rt(Ze,{get position(){return p(ot)},name:"wall-stud",onpointerenter:vt=>j(vt,"wall-stud"),onpointerleave:me,children:(vt,bt)=>{var ft=dT(),_t=G(ft);M(_t,()=>y.BoxGeometry,(gt,ct)=>{ct(gt,{args:[s,i,o]})});var pt=P(_t,2);{let gt=R(()=>p(X)==="wall-stud"?u:c);M(pt,()=>y.MeshStandardMaterial,(ct,xt)=>{xt(ct,{get color(){return p(gt)}})})}V(vt,ft)},$$slots:{default:!0}})})}V(ke,Ue)};gn(z,ke=>{p(ce)?ke(ge):ke(ze,-1)})}V(k,$)});var ue=P(pe,2);Qt(ue,17,()=>[m,_],jt,(k,Z)=>{const le=R(()=>Re(p(Z))),F=R(()=>Re(p(Z)+2));var ee=mT(),Q=G(ee);{let $=R(()=>[p(le),g/2+A,he]);M(Q,()=>y.Mesh,(z,ge)=>{ge(z,{get position(){return p($)},name:"wall-stud",onpointerenter:ze=>j(ze,"wall-stud"),onpointerleave:me,children:(ze,ke)=>{var Ue=fT(),je=G(Ue);M(je,()=>y.BoxGeometry,(Ze,rt)=>{rt(Ze,{args:[s,g,o]})});var ot=P(je,2);{let Ze=R(()=>p(X)==="wall-stud"?u:c);M(ot,()=>y.MeshStandardMaterial,(rt,vt)=>{vt(rt,{get color(){return p(Ze)}})})}V(ze,Ue)},$$slots:{default:!0}})})}var ce=P(Q,2);{let $=R(()=>[p(F),g/2+A,he]);M(ce,()=>y.Mesh,(z,ge)=>{ge(z,{get position(){return p($)},name:"wall-stud",onpointerenter:ze=>j(ze,"wall-stud"),onpointerleave:me,children:(ze,ke)=>{var Ue=pT(),je=G(Ue);M(je,()=>y.BoxGeometry,(Ze,rt)=>{rt(Ze,{args:[s,g,o]})});var ot=P(je,2);{let Ze=R(()=>p(X)==="wall-stud"?u:c);M(ot,()=>y.MeshStandardMaterial,(rt,vt)=>{vt(rt,{get color(){return p(Ze)}})})}V(ze,Ue)},$$slots:{default:!0}})})}V(k,ee)});var Ae=P(ue,2);{let k=R(()=>[p(xe),x+s/2+A,K]);M(Ae,()=>y.Mesh,(Z,le)=>{le(Z,{get position(){return p(k)},name:"rough-sill",onpointerenter:F=>j(F,"rough-sill"),onpointerleave:me,children:(F,ee)=>{var Q=gT(),ce=G(Q);M(ce,()=>y.BoxGeometry,(z,ge)=>{ge(z,{args:[fe,s,o]})});var $=P(ce,2);{let z=R(()=>p(X)==="rough-sill"?u:c);M($,()=>y.MeshStandardMaterial,(ge,ze)=>{ze(ge,{get color(){return p(z)}})})}V(F,Q)},$$slots:{default:!0}})})}var N=P(Ae,2);{let k=R(()=>[p(xe),x/2+A,K]);M(N,()=>y.Mesh,(Z,le)=>{le(Z,{get position(){return p(k)},name:"jack-stud",onpointerenter:F=>j(F,"jack-stud"),onpointerleave:me,children:(F,ee)=>{var Q=vT(),ce=G(Q);M(ce,()=>y.BoxGeometry,(z,ge)=>{ge(z,{args:[s,x,o]})});var $=P(ce,2);{let z=R(()=>p(X)==="jack-stud"?u:c);M($,()=>y.MeshStandardMaterial,(ge,ze)=>{ze(ge,{get color(){return p(z)}})})}V(F,Q)},$$slots:{default:!0}})})}var Se=P(N,2);M(Se,()=>y.Mesh,(k,Z)=>{Z(k,{position:[-t/2+m*d+d,g+v/2+A,n/2-o/2],name:"header",onpointerenter:le=>j(le,"header"),onpointerleave:me,children:(le,F)=>{var ee=_T(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[ae,v,o]})});var ce=P(Q,2);{let $=R(()=>p(X)==="header"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var Ce=P(Se,2);M(Ce,()=>y.Mesh,(k,Z)=>{Z(k,{position:[-t/2+_*d+d,g+v/2+A,n/2-o/2],name:"header",onpointerenter:le=>j(le,"header"),onpointerleave:me,children:(le,F)=>{var ee=xT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[ae,v,o]})});var ce=P(Q,2);{let $=R(()=>p(X)==="header"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var Ie=P(Ce,2);Qt(Ie,17,()=>Array(h),jt,(k,Z,le)=>{const F=R(()=>-t/2+le*t/(h-1)),ee=R(()=>p(F)>b&&p(F)<I);var Q=Ut(),ce=G(Q);{var $=ge=>{},z=ge=>{var ze=Ut(),ke=G(ze);{let Ue=R(()=>[p(F),i/2+A,-n/2+o/2]);M(ke,()=>y.Mesh,(je,ot)=>{ot(je,{get position(){return p(Ue)},name:"wall-stud",onpointerenter:Ze=>j(Ze,"wall-stud"),onpointerleave:me,children:(Ze,rt)=>{var vt=yT(),bt=G(vt);M(bt,()=>y.BoxGeometry,(_t,pt)=>{pt(_t,{args:[s,i,o]})});var ft=P(bt,2);{let _t=R(()=>p(X)==="wall-stud"?u:c);M(ft,()=>y.MeshStandardMaterial,(pt,gt)=>{gt(pt,{get color(){return p(_t)}})})}V(Ze,vt)},$$slots:{default:!0}})})}V(ge,ze)};gn(ce,ge=>{p(ee)?ge($):ge(z,-1)})}V(k,Q)});var ye=P(Ie,2);M(ye,()=>y.Mesh,(k,Z)=>{Z(k,{position:[b,g/2+A,-n/2+o/2],name:"wall-stud",onpointerenter:le=>j(le,"wall-stud"),onpointerleave:me,children:(le,F)=>{var ee=MT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[s,g,o]})});var ce=P(Q,2);{let $=R(()=>p(X)==="wall-stud"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var L=P(ye,2);M(L,()=>y.Mesh,(k,Z)=>{Z(k,{position:[I,g/2+A,-n/2+o/2],name:"wall-stud",onpointerenter:le=>j(le,"wall-stud"),onpointerleave:me,children:(le,F)=>{var ee=ST(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[s,g,o]})});var ce=P(Q,2);{let $=R(()=>p(X)==="wall-stud"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var T=P(L,2);M(T,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,g+v/2+A,-n/2+o/2],name:"header",onpointerenter:le=>j(le,"header"),onpointerleave:me,children:(le,F)=>{var ee=bT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[S,v,o]})});var ce=P(Q,2);{let $=R(()=>p(X)==="header"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var W=P(T,2);M(W,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,x+s/2+A,-n/2+o/2],name:"rough-sill",onpointerenter:le=>j(le,"rough-sill"),onpointerleave:me,children:(le,F)=>{var ee=wT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[S,s,o]})});var ce=P(Q,2);{let $=R(()=>p(X)==="rough-sill"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var ve=P(W,2);M(ve,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,x/2+A,-n/2+o/2],name:"jack-stud",onpointerenter:le=>j(le,"jack-stud"),onpointerleave:me,children:(le,F)=>{var ee=TT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[s,x,o]})});var ce=P(Q,2);{let $=R(()=>p(X)==="jack-stud"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var Ne=P(ve,2);Qt(Ne,17,()=>Array(f),jt,(k,Z,le)=>{const F=R(()=>-n/2+H+le*ne/(f-1));var ee=Ut(),Q=G(ee);{let ce=R(()=>[-t/2+o/2,i/2+A,p(F)]);M(Q,()=>y.Mesh,($,z)=>{z($,{get position(){return p(ce)},name:"wall-stud",onpointerenter:ge=>j(ge,"wall-stud"),onpointerleave:me,children:(ge,ze)=>{var ke=AT(),Ue=G(ke);M(Ue,()=>y.BoxGeometry,(ot,Ze)=>{Ze(ot,{args:[o,i,s]})});var je=P(Ue,2);{let ot=R(()=>p(X)==="wall-stud"?u:c);M(je,()=>y.MeshStandardMaterial,(Ze,rt)=>{rt(Ze,{get color(){return p(ot)}})})}V(ge,ke)},$$slots:{default:!0}})})}V(k,ee)});var _e=P(Ne,2);Qt(_e,17,()=>Array(f),jt,(k,Z,le)=>{const F=R(()=>-n/2+H+le*ne/(f-1));var ee=Ut(),Q=G(ee);{let ce=R(()=>[t/2-o/2,i/2+A,p(F)]);M(Q,()=>y.Mesh,($,z)=>{z($,{get position(){return p(ce)},name:"wall-stud",onpointerenter:ge=>j(ge,"wall-stud"),onpointerleave:me,children:(ge,ze)=>{var ke=ET(),Ue=G(ke);M(Ue,()=>y.BoxGeometry,(ot,Ze)=>{Ze(ot,{args:[o,i,s]})});var je=P(Ue,2);{let ot=R(()=>p(X)==="wall-stud"?u:c);M(je,()=>y.MeshStandardMaterial,(Ze,rt)=>{rt(Ze,{get color(){return p(ot)}})})}V(ge,ke)},$$slots:{default:!0}})})}V(k,ee)});var Pe=P(_e,2);M(Pe,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,i+0+l*2,n/2-a/2],name:"top-plate",onpointerenter:le=>j(le,"top-plate"),onpointerleave:me,children:(le,F)=>{var ee=CT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[t,l,a]})});var ce=P(Q,2);{let $=R(()=>p(X)==="top-plate"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var Me=P(Pe,2);M(Me,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,i+0+l*2,-n/2+a/2],name:"top-plate",onpointerenter:le=>j(le,"top-plate"),onpointerleave:me,children:(le,F)=>{var ee=PT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[t,l,a]})});var ce=P(Q,2);{let $=R(()=>p(X)==="top-plate"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var He=P(Me,2);M(He,()=>y.Mesh,(k,Z)=>{Z(k,{position:[-t/2+a/2,i+0+l*2,0],name:"top-plate",onpointerenter:le=>j(le,"top-plate"),onpointerleave:me,children:(le,F)=>{var ee=RT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[a,l,n-a*2]})});var ce=P(Q,2);{let $=R(()=>p(X)==="top-plate"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var qe=P(He,2);M(qe,()=>y.Mesh,(k,Z)=>{Z(k,{position:[t/2-a/2,i+0+l*2,0],name:"top-plate",onpointerenter:le=>j(le,"top-plate"),onpointerleave:me,children:(le,F)=>{var ee=IT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[a,l,n-a*2]})});var ce=P(Q,2);{let $=R(()=>p(X)==="top-plate"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var Ee=P(qe,2);Qt(Ee,16,()=>Array(5),jt,(k,Z,le)=>{const F=R(()=>-n/2+1+le*(n-2)/4);var ee=Ut(),Q=G(ee);{let ce=R(()=>[0,i+.5+l*3,p(F)]);M(Q,()=>y.Mesh,($,z)=>{z($,{get position(){return p(ce)},name:"ceiling-joist",onpointerenter:ge=>j(ge,"ceiling-joist"),onpointerleave:me,children:(ge,ze)=>{var ke=DT(),Ue=G(ke);M(Ue,()=>y.BoxGeometry,(ot,Ze)=>{Ze(ot,{args:[t-a*2,l,a]})});var je=P(Ue,2);{let ot=R(()=>p(X)==="ceiling-joist"?u:c);M(je,()=>y.MeshStandardMaterial,(Ze,rt)=>{rt(Ze,{get color(){return p(ot)}})})}V(ge,ke)},$$slots:{default:!0}})})}V(k,ee)});var De=P(Ee,2);M(De,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,i+.5+l*3+w-U,0],name:"ridge-board",onpointerenter:le=>j(le,"ridge-board"),onpointerleave:me,children:(le,F)=>{var ee=LT(),Q=G(ee);M(Q,()=>y.BoxGeometry,($,z)=>{z($,{args:[a,l,n+1]})});var ce=P(Q,2);{let $=R(()=>p(X)==="ridge-board"?u:c);M(ce,()=>y.MeshStandardMaterial,(z,ge)=>{ge(z,{get color(){return p($)}})})}V(le,ee)},$$slots:{default:!0}})});var we=P(De,2);Qt(we,16,()=>Array(5),jt,(k,Z,le)=>{const F=R(()=>-n/2+.5+le*n/4);var ee=FT(),Q=G(ee);{let $=R(()=>[-t/4,i+.5+l*3+w/2-U,p(F)]);M(Q,()=>y.Mesh,(z,ge)=>{ge(z,{get position(){return p($)},rotation:[0,0,O],name:"roof-rafter",onpointerenter:ze=>j(ze,"roof-rafter"),onpointerleave:me,children:(ze,ke)=>{var Ue=NT(),je=G(Ue);M(je,()=>y.BoxGeometry,(Ze,rt)=>{rt(Ze,{args:[E+.15,l,a]})});var ot=P(je,2);{let Ze=R(()=>p(X)==="roof-rafter"?u:c);M(ot,()=>y.MeshStandardMaterial,(rt,vt)=>{vt(rt,{get color(){return p(Ze)}})})}V(ze,Ue)},$$slots:{default:!0}})})}var ce=P(Q,2);{let $=R(()=>[t/4,i+.5+l*3+w/2-U,p(F)]);M(ce,()=>y.Mesh,(z,ge)=>{ge(z,{get position(){return p($)},rotation:[0,0,-O],name:"roof-rafter",onpointerenter:ze=>j(ze,"roof-rafter"),onpointerleave:me,children:(ze,ke)=>{var Ue=UT(),je=G(Ue);M(je,()=>y.BoxGeometry,(Ze,rt)=>{rt(Ze,{args:[E+.15,l,a]})});var ot=P(je,2);{let Ze=R(()=>p(X)==="roof-rafter"?u:c);M(ot,()=>y.MeshStandardMaterial,(rt,vt)=>{vt(rt,{get color(){return p(Ze)}})})}V(ze,Ue)},$$slots:{default:!0}})})}V(k,ee)}),V(te,Le)},$$slots:{default:!0}})})}V(r,be),Fn()}var zT=Y("<!> <!>",1),$T=Y("<!> <!>",1),kT=Y("<!> <!>",1),VT=Y("<!> <!>",1),GT=Y("<!> <!>",1),HT=Y("<!> <!>",1),WT=Y("<!> <!>",1),XT=Y("<!> <!>",1),qT=Y("<!> <!>",1),YT=Y("<!> <!>",1),ZT=Y("<!> <!>",1),JT=Y("<!> <!>",1),KT=Y("<!> <!>",1),jT=Y("<!> <!>",1),QT=Y("<!> <!>",1),eA=Y("<!> <!> <!> <!>",1),tA=Y("<!> <!>",1),nA=Y("<!> <!>",1),iA=Y("<!> <!>",1),rA=Y("<!> <!> <!>",1),sA=Y("<!> <!>",1),oA=Y("<!> <!>",1),aA=Y("<!> <!>  <!> <!> <!> <!>  <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function lA(r,e){Un(e,!0);const t=12,n=10,i=8,s=.15,o=1,a=.6,l=.08,c=.04,u=.14,d=.35,h=.08,f=i+.5+s*3,m=1.5,_=.78,g="#707070",v="#cc3333",x="#3366cc",S="#ccaa33",b="#4b4b4b",I="#9a9a9a",A="#b7c1c9",D="#8f9aa3",w="#a8b0b7",E="#4fc3f7";let O=Yt(null);const U=2.2,H=.18,ne=1.5,fe=t/2+d+h+.75+U/2,ae=1.1,X=.02+H/2,j=1.55,me=1.25,Re=1.2,be=.24,Ve=.56,Qe=.84,Ge=t/2+h+be/2+.01;function oe(Le){Le.stopPropagation();const Te=Le?.object?.name??null;dn(Te),Ct(O,Te,!0)}function te(){dn(null),Ct(O,null)}var re=Ut(),xe=G(re);{let Le=R(()=>hn.get()>=5);M(xe,()=>y.Group,(Te,$e)=>{$e(Te,{get visible(){return p(Le)},onpointermove:oe,onpointerleave:te,children:(Oe,ie)=>{var pe=aA(),ue=G(pe);M(ue,()=>y.Mesh,(we,k)=>{k(we,{position:[2,f-a/2,0],name:"hvac-duct",children:(Z,le)=>{var F=zT(),ee=G(F);M(ee,()=>y.BoxGeometry,(ce,$)=>{$(ce,{args:[t-4,a,o]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="hvac-duct"?E:g);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var Ae=P(ue,2);M(Ae,()=>y.Mesh,(we,k)=>{k(we,{position:[2,f-a/2,-n/4],name:"hvac-duct",children:(Z,le)=>{var F=$T(),ee=G(F);M(ee,()=>y.BoxGeometry,(ce,$)=>{$(ce,{args:[o,a,n/2-.5]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="hvac-duct"?E:g);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var N=P(Ae,2);M(N,()=>y.Mesh,(we,k)=>{k(we,{position:[-t/2+.3,i/2+.5,2],name:"plumbing-hot",children:(Z,le)=>{var F=kT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[l,l,i,16]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="plumbing-hot"?E:v);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var Se=P(N,2);M(Se,()=>y.Mesh,(we,k)=>{k(we,{position:[0,i+.5+s,2],rotation:[0,0,Math.PI/2],name:"plumbing-hot",children:(Z,le)=>{var F=VT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[l,l,t-2,16]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="plumbing-hot"?E:v);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var Ce=P(Se,2);M(Ce,()=>y.Mesh,(we,k)=>{k(we,{position:[-t/2+.28,i/2+.5,2],name:"plumbing-cold",children:(Z,le)=>{var F=GT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[l,l,i,16]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="plumbing-cold"?E:x);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var Ie=P(Ce,2);M(Ie,()=>y.Mesh,(we,k)=>{k(we,{position:[0,i+.5+s+.2,2.2],rotation:[0,0,Math.PI/2],name:"plumbing-cold",children:(Z,le)=>{var F=HT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[l,l,t-2,16]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="plumbing-cold"?E:x);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var ye=P(Ie,2);M(ye,()=>y.Mesh,(we,k)=>{k(we,{position:[0,m+.5,-n/2+.3],rotation:[0,0,Math.PI/2],name:"electrical-wire",children:(Z,le)=>{var F=WT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[c,c,t-1,8]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="electrical-wire"?E:S);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var L=P(ye,2);M(L,()=>y.Mesh,(we,k)=>{k(we,{position:[-t/2+.3,m+.5,0],rotation:[Math.PI/2,0,0],name:"electrical-wire",children:(Z,le)=>{var F=XT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[c,c,n-1,8]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="electrical-wire"?E:S);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var T=P(L,2);M(T,()=>y.Mesh,(we,k)=>{k(we,{position:[t/2-.3,m+.5,0],rotation:[Math.PI/2,0,0],name:"electrical-wire",children:(Z,le)=>{var F=qT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[c,c,n-1,8]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="electrical-wire"?E:S);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var W=P(T,2);M(W,()=>y.Mesh,(we,k)=>{k(we,{position:[-3,m/2+.5,-n/2+.3],name:"electrical-wire",children:(Z,le)=>{var F=YT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[c,c,m,8]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="electrical-wire"?E:S);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var ve=P(W,2);M(ve,()=>y.Mesh,(we,k)=>{k(we,{position:[3,m/2+.5,-n/2+.3],name:"electrical-wire",children:(Z,le)=>{var F=ZT(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[c,c,m,8]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="electrical-wire"?E:S);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var Ne=P(ve,2);{var _e=we=>{var k=eA(),Z=G(k);M(Z,()=>y.Mesh,(Q,ce)=>{ce(Q,{position:[fe,X,ae],rotation:[0,Math.PI/2,0],name:"equipment-slab",children:($,z)=>{var ge=JT(),ze=G(ge);M(ze,()=>y.BoxGeometry,(Ue,je)=>{je(Ue,{args:[U,H,ne]})});var ke=P(ze,2);{let Ue=R(()=>p(O)==="equipment-slab"?E:I);M(ke,()=>y.MeshStandardMaterial,(je,ot)=>{ot(je,{get color(){return p(Ue)}})})}V($,ge)},$$slots:{default:!0}})});var le=P(Z,2);M(le,()=>y.Mesh,(Q,ce)=>{ce(Q,{position:[fe,X+H/2+.525,ae],rotation:[0,Math.PI/2,0],name:"ac-condenser",children:($,z)=>{var ge=KT(),ze=G(ge);M(ze,()=>y.BoxGeometry,(Ue,je)=>{je(Ue,{args:[j,me,Re]})});var ke=P(ze,2);{let Ue=R(()=>p(O)==="ac-condenser"?E:A);M(ke,()=>y.MeshStandardMaterial,(je,ot)=>{ot(je,{get color(){return p(Ue)}})})}V($,ge)},$$slots:{default:!0}})});var F=P(le,2);M(F,()=>y.Mesh,(Q,ce)=>{ce(Q,{position:[fe,X+H/2+me+.05,ae],rotation:[0,Math.PI/2,0],name:"ac-condenser",children:($,z)=>{var ge=jT(),ze=G(ge);M(ze,()=>y.CylinderGeometry,(Ue,je)=>{je(Ue,{args:[.42,.42,.1,16]})});var ke=P(ze,2);{let Ue=R(()=>p(O)==="ac-condenser"?E:D);M(ke,()=>y.MeshStandardMaterial,(je,ot)=>{ot(je,{get color(){return p(Ue)}})})}V($,ge)},$$slots:{default:!0}})});var ee=P(F,2);M(ee,()=>y.Mesh,(Q,ce)=>{ce(Q,{position:[Ge,3.35,2.2],name:"electrical-panel",children:($,z)=>{var ge=QT(),ze=G(ge);M(ze,()=>y.BoxGeometry,(Ue,je)=>{je(Ue,{args:[be,Qe,Ve]})});var ke=P(ze,2);{let Ue=R(()=>p(O)==="electrical-panel"?E:w);M(ke,()=>y.MeshStandardMaterial,(je,ot)=>{ot(je,{get color(){return p(Ue)}})})}V($,ge)},$$slots:{default:!0}})}),V(we,k)},Pe=R(()=>hn.get()>=6);gn(Ne,we=>{p(Pe)&&we(_e)})}var Me=P(Ne,2);{var He=we=>{var k=rA(),Z=G(k);M(Z,()=>y.Mesh,(ee,Q)=>{Q(ee,{position:[0,_,2.8],rotation:[0,0,Math.PI/2+.05],name:"sewer-line",children:(ce,$)=>{var z=tA(),ge=G(z);M(ge,()=>y.CylinderGeometry,(ke,Ue)=>{Ue(ke,{args:[u,u,t-2.2,12]})});var ze=P(ge,2);{let ke=R(()=>p(O)==="sewer-line"?E:b);M(ze,()=>y.MeshStandardMaterial,(Ue,je)=>{je(Ue,{get color(){return p(ke)}})})}V(ce,z)},$$slots:{default:!0}})});var le=P(Z,2);M(le,()=>y.Mesh,(ee,Q)=>{Q(ee,{position:[t/2-2.1,_+.05,-1.3],rotation:[Math.PI/2-.08,0,0],name:"sewer-line",children:(ce,$)=>{var z=nA(),ge=G(z);M(ge,()=>y.CylinderGeometry,(ke,Ue)=>{Ue(ke,{args:[u*.85,u*.85,4.2,12]})});var ze=P(ge,2);{let ke=R(()=>p(O)==="sewer-line"?E:b);M(ze,()=>y.MeshStandardMaterial,(Ue,je)=>{je(Ue,{get color(){return p(ke)}})})}V(ce,z)},$$slots:{default:!0}})});var F=P(le,2);M(F,()=>y.Mesh,(ee,Q)=>{Q(ee,{position:[-t/2+2.4,_+.03,-.7],rotation:[Math.PI/2-.06,0,0],name:"sewer-line",children:(ce,$)=>{var z=iA(),ge=G(z);M(ge,()=>y.CylinderGeometry,(ke,Ue)=>{Ue(ke,{args:[u*.8,u*.8,3.4,12]})});var ze=P(ge,2);{let ke=R(()=>p(O)==="sewer-line"?E:b);M(ze,()=>y.MeshStandardMaterial,(Ue,je)=>{je(Ue,{get color(){return p(ke)}})})}V(ce,z)},$$slots:{default:!0}})}),V(we,k)},qe=R(()=>hn.get()<7);gn(Me,we=>{p(qe)&&we(He)})}var Ee=P(Me,2);M(Ee,()=>y.Mesh,(we,k)=>{k(we,{position:[t/2-2.1,i/2+.5,-1.3],name:"sewer-vent",children:(Z,le)=>{var F=sA(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[u*.75,u*.75,i,12]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="sewer-vent"?E:b);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})});var De=P(Ee,2);M(De,()=>y.Mesh,(we,k)=>{k(we,{position:[t/2-2.1,i+1.5,-1.3],name:"sewer-vent",children:(Z,le)=>{var F=oA(),ee=G(F);M(ee,()=>y.CylinderGeometry,(ce,$)=>{$(ce,{args:[u*.65,u*.65,2,12]})});var Q=P(ee,2);{let ce=R(()=>p(O)==="sewer-vent"?E:b);M(Q,()=>y.MeshStandardMaterial,($,z)=>{z($,{get color(){return p(ce)}})})}V(Z,F)},$$slots:{default:!0}})}),V(Oe,pe)},$$slots:{default:!0}})})}V(r,re),Fn()}var cA=Y("<!> <!>",1),uA=Y("<!> <!>",1),hA=Y("<!> <!>",1),dA=Y("<!> <!>",1),fA=Y("<!> <!>",1),pA=Y("<!> <!>",1),mA=Y("<!> <!>",1),gA=Y("<!> <!>",1),vA=Y("<!> <!>",1),_A=Y("<!> <!>",1),xA=Y("<!> <!>",1),yA=Y("<!> <!>",1),MA=Y("<!> <!> <!> <!> <!> <!>  <!> <!> <!> <!> <!> <!>",1);function SA(r,e){Un(e,!0);const t=12,n=10,i=8,s=.15,o=.35,a=.15,l=1.5,c=Math.floor(t/l)+1,u=Math.floor(n/l)+1,d=Math.floor(c/3),h=Math.floor(c*2/3),f=7,m=3,_=3.4,g=-_/2,v=_/2,x=.25,S="#ffc0cb",b="#4fc3f7";let I=Yt(null);const A=.5+a;function D(ne){return-t/2+ne*t/(c-1)}function w(ne){return-n/2+ne*n/(u-1)}function E(ne){ne.stopPropagation();const K=ne?.object?.name??null;dn(K),Ct(I,K,!0)}function O(){dn(null),Ct(I,null)}var U=Ut(),H=G(U);{let ne=R(()=>hn.get()>=7);M(H,()=>y.Group,(K,he)=>{he(K,{get visible(){return p(ne)},onpointerenter:E,onpointerleave:O,children:(fe,ae)=>{const X=R(()=>g+t/2),j=R(()=>t/2-v),me=R(()=>i-f);var Re=MA(),be=G(Re);M(be,()=>y.Mesh,(ie,pe)=>{pe(ie,{position:[-t/2+p(X)/2,i/2+A,-n/2+o/2+x/2],name:"insulation",children:(ue,Ae)=>{var N=cA(),Se=G(N);M(Se,()=>y.BoxGeometry,(Ie,ye)=>{ye(Ie,{args:[p(X),i,x]})});var Ce=P(Se,2);{let Ie=R(()=>p(I)==="insulation"?b:S);M(Ce,()=>y.MeshStandardMaterial,(ye,L)=>{L(ye,{get color(){return p(Ie)}})})}V(ue,N)},$$slots:{default:!0}})});var Ve=P(be,2);M(Ve,()=>y.Mesh,(ie,pe)=>{pe(ie,{position:[v+p(j)/2,i/2+A,-n/2+o/2+x/2],name:"insulation",children:(ue,Ae)=>{var N=uA(),Se=G(N);M(Se,()=>y.BoxGeometry,(Ie,ye)=>{ye(Ie,{args:[p(j),i,x]})});var Ce=P(Se,2);{let Ie=R(()=>p(I)==="insulation"?b:S);M(Ce,()=>y.MeshStandardMaterial,(ye,L)=>{L(ye,{get color(){return p(Ie)}})})}V(ue,N)},$$slots:{default:!0}})});var Qe=P(Ve,2);M(Qe,()=>y.Mesh,(ie,pe)=>{pe(ie,{position:[0,f+p(me)/2+A,-n/2+o/2+x/2],name:"insulation",children:(ue,Ae)=>{var N=hA(),Se=G(N);M(Se,()=>y.BoxGeometry,(Ie,ye)=>{ye(Ie,{args:[_,p(me),x]})});var Ce=P(Se,2);{let Ie=R(()=>p(I)==="insulation"?b:S);M(Ce,()=>y.MeshStandardMaterial,(ye,L)=>{L(ye,{get color(){return p(Ie)}})})}V(ue,N)},$$slots:{default:!0}})});var Ge=P(Qe,2);M(Ge,()=>y.Mesh,(ie,pe)=>{pe(ie,{position:[0,m/2+A,-n/2+o/2+x/2],name:"insulation",children:(ue,Ae)=>{var N=dA(),Se=G(N);M(Se,()=>y.BoxGeometry,(Ie,ye)=>{ye(Ie,{args:[_,m,x]})});var Ce=P(Se,2);{let Ie=R(()=>p(I)==="insulation"?b:S);M(Ce,()=>y.MeshStandardMaterial,(ye,L)=>{L(ye,{get color(){return p(Ie)}})})}V(ue,N)},$$slots:{default:!0}})});var oe=P(Ge,2);Qt(oe,17,()=>Array(u-1),jt,(ie,pe,ue)=>{const Ae=R(()=>(w(ue)+w(ue+1))/2),N=R(()=>l-s);var Se=Ut(),Ce=G(Se);{let Ie=R(()=>[-t/2+o/2+x/2,i/2+A,p(Ae)]);M(Ce,()=>y.Mesh,(ye,L)=>{L(ye,{get position(){return p(Ie)},name:"insulation",children:(T,W)=>{var ve=fA(),Ne=G(ve);M(Ne,()=>y.BoxGeometry,(Pe,Me)=>{Me(Pe,{args:[x,i,p(N)]})});var _e=P(Ne,2);{let Pe=R(()=>p(I)==="insulation"?b:S);M(_e,()=>y.MeshStandardMaterial,(Me,He)=>{He(Me,{get color(){return p(Pe)}})})}V(T,ve)},$$slots:{default:!0}})})}V(ie,Se)});var te=P(oe,2);Qt(te,17,()=>Array(u-1),jt,(ie,pe,ue)=>{const Ae=R(()=>(w(ue)+w(ue+1))/2),N=R(()=>l-s);var Se=Ut(),Ce=G(Se);{let Ie=R(()=>[t/2-o/2-x/2,i/2+A,p(Ae)]);M(Ce,()=>y.Mesh,(ye,L)=>{L(ye,{get position(){return p(Ie)},name:"insulation",children:(T,W)=>{var ve=pA(),Ne=G(ve);M(Ne,()=>y.BoxGeometry,(Pe,Me)=>{Me(Pe,{args:[x,i,p(N)]})});var _e=P(Ne,2);{let Pe=R(()=>p(I)==="insulation"?b:S);M(_e,()=>y.MeshStandardMaterial,(Me,He)=>{He(Me,{get color(){return p(Pe)}})})}V(T,ve)},$$slots:{default:!0}})})}V(ie,Se)});var re=P(te,2);Qt(re,17,()=>Array(d),jt,(ie,pe,ue)=>{const Ae=R(()=>(D(ue)+D(ue+1))/2),N=R(()=>l-s);var Se=Ut(),Ce=G(Se);{let Ie=R(()=>[p(Ae),i/2+A,n/2-o/2-x/2]);M(Ce,()=>y.Mesh,(ye,L)=>{L(ye,{get position(){return p(Ie)},name:"insulation",children:(T,W)=>{var ve=mA(),Ne=G(ve);M(Ne,()=>y.BoxGeometry,(Pe,Me)=>{Me(Pe,{args:[p(N),i,x]})});var _e=P(Ne,2);{let Pe=R(()=>p(I)==="insulation"?b:S);M(_e,()=>y.MeshStandardMaterial,(Me,He)=>{He(Me,{get color(){return p(Pe)}})})}V(T,ve)},$$slots:{default:!0}})})}V(ie,Se)});var xe=P(re,2);{let ie=R(()=>[D(d)+l,(i-f)/2+f+A,n/2-o/2-x/2]);M(xe,()=>y.Mesh,(pe,ue)=>{ue(pe,{get position(){return p(ie)},name:"insulation",children:(Ae,N)=>{var Se=gA(),Ce=G(Se);M(Ce,()=>y.BoxGeometry,(ye,L)=>{L(ye,{args:[l*2-s,i-f,x]})});var Ie=P(Ce,2);{let ye=R(()=>p(I)==="insulation"?b:S);M(Ie,()=>y.MeshStandardMaterial,(L,T)=>{T(L,{get color(){return p(ye)}})})}V(Ae,Se)},$$slots:{default:!0}})})}var Le=P(xe,2);Qt(Le,17,()=>Array(h-d-2),jt,(ie,pe,ue)=>{const Ae=R(()=>d+2+ue),N=R(()=>(D(p(Ae))+D(p(Ae)+1))/2),Se=R(()=>l-s);var Ce=Ut(),Ie=G(Ce);{let ye=R(()=>[p(N),i/2+A,n/2-o/2-x/2]);M(Ie,()=>y.Mesh,(L,T)=>{T(L,{get position(){return p(ye)},name:"insulation",children:(W,ve)=>{var Ne=vA(),_e=G(Ne);M(_e,()=>y.BoxGeometry,(Me,He)=>{He(Me,{args:[p(Se),i,x]})});var Pe=P(_e,2);{let Me=R(()=>p(I)==="insulation"?b:S);M(Pe,()=>y.MeshStandardMaterial,(He,qe)=>{qe(He,{get color(){return p(Me)}})})}V(W,Ne)},$$slots:{default:!0}})})}V(ie,Ce)});var Te=P(Le,2);{let ie=R(()=>[D(h)+l,(i-f)/2+f+A,n/2-o/2-x/2]);M(Te,()=>y.Mesh,(pe,ue)=>{ue(pe,{get position(){return p(ie)},name:"insulation",children:(Ae,N)=>{var Se=_A(),Ce=G(Se);M(Ce,()=>y.BoxGeometry,(ye,L)=>{L(ye,{args:[l*2-s,i-f,x]})});var Ie=P(Ce,2);{let ye=R(()=>p(I)==="insulation"?b:S);M(Ie,()=>y.MeshStandardMaterial,(L,T)=>{T(L,{get color(){return p(ye)}})})}V(Ae,Se)},$$slots:{default:!0}})})}var $e=P(Te,2);{let ie=R(()=>[D(h)+l,m/2+A,n/2-o/2-x/2]);M($e,()=>y.Mesh,(pe,ue)=>{ue(pe,{get position(){return p(ie)},name:"insulation",children:(Ae,N)=>{var Se=xA(),Ce=G(Se);M(Ce,()=>y.BoxGeometry,(ye,L)=>{L(ye,{args:[l*2-s,m,x]})});var Ie=P(Ce,2);{let ye=R(()=>p(I)==="insulation"?b:S);M(Ie,()=>y.MeshStandardMaterial,(L,T)=>{T(L,{get color(){return p(ye)}})})}V(Ae,Se)},$$slots:{default:!0}})})}var Oe=P($e,2);Qt(Oe,17,()=>Array(c-h-3),jt,(ie,pe,ue)=>{const Ae=R(()=>h+2+ue),N=R(()=>(D(p(Ae))+D(p(Ae)+1))/2),Se=R(()=>l-s);var Ce=Ut(),Ie=G(Ce);{let ye=R(()=>[p(N),i/2+A,n/2-o/2-x/2]);M(Ie,()=>y.Mesh,(L,T)=>{T(L,{get position(){return p(ye)},name:"insulation",children:(W,ve)=>{var Ne=yA(),_e=G(Ne);M(_e,()=>y.BoxGeometry,(Me,He)=>{He(Me,{args:[p(Se),i,x]})});var Pe=P(_e,2);{let Me=R(()=>p(I)==="insulation"?b:S);M(Pe,()=>y.MeshStandardMaterial,(He,qe)=>{qe(He,{get color(){return p(Me)}})})}V(W,Ne)},$$slots:{default:!0}})})}V(ie,Ce)}),V(fe,Re)},$$slots:{default:!0}})})}V(r,U),Fn()}var bA=Y("<!> <!>",1),wA=Y("<!> <!>",1),TA=Y("<!> <!>",1),AA=Y("<!> <!>",1),EA=Y("<!> <!>",1),CA=Y("<!> <!>",1),PA=Y("<!> <!>",1),RA=Y("<!> <!>",1),IA=Y("<!> <!>",1),DA=Y("<!> <!>",1),LA=Y("<!> <!>",1),NA=Y("<!> <!>",1),UA=Y("<!> <!>",1),FA=Y("<!> <!> <!> <!> <!> <!>   <!>  <!>   <!>  <!> <!>  <!> <!>",1);function OA(r,e){Un(e,!0);const t=12,n=10,i=8,s=.15,o=.35,a=.15,c=Math.floor(t/1.5)+1,u=Math.floor(c/3),d=Math.floor(c*2/3),h=7,f=.1,m="#f5f5f5",_="#4fc3f7";let g=Yt(null);const v=.5+a,x=i+v+a;function S(ae){return-t/2+ae*t/(c-1)}const b=S(u)+s/2,I=S(u+2)-s/2,A=S(d)+s/2,D=S(d+2)-s/2,w=3.4,E=-w/2,O=w/2,U=3,H=o+f;function ne(ae){ae.stopPropagation();const X=ae?.object?.name??null;dn(X),Ct(g,X,!0)}function K(){dn(null),Ct(g,null)}var he=Ut(),fe=G(he);{let ae=R(()=>hn.get()>=8);M(fe,()=>y.Group,(X,j)=>{j(X,{get visible(){return p(ae)},onpointerenter:ne,onpointerleave:K,children:(me,Re)=>{const be=R(()=>E+t/2),Ve=R(()=>t/2-O),Qe=R(()=>i-h),Ge=R(()=>b+t/2),oe=R(()=>-t/2+p(Ge)/2),te=R(()=>I-b),re=R(()=>I),xe=R(()=>A),Le=R(()=>p(xe)-p(re)),Te=R(()=>D-A),$e=R(()=>t/2-D),Oe=R(()=>D+p($e)/2);var ie=FA(),pe=G(ie);M(pe,()=>y.Mesh,(_e,Pe)=>{Pe(_e,{position:[-t/2+p(be)/2,i/2+v,-n/2+H],name:"drywall",children:(Me,He)=>{var qe=bA(),Ee=G(qe);M(Ee,()=>y.BoxGeometry,(we,k)=>{k(we,{args:[p(be),i,f]})});var De=P(Ee,2);{let we=R(()=>p(g)==="drywall"?_:m);M(De,()=>y.MeshStandardMaterial,(k,Z)=>{Z(k,{get color(){return p(we)}})})}V(Me,qe)},$$slots:{default:!0}})});var ue=P(pe,2);M(ue,()=>y.Mesh,(_e,Pe)=>{Pe(_e,{position:[O+p(Ve)/2,i/2+v,-n/2+H],name:"drywall",children:(Me,He)=>{var qe=wA(),Ee=G(qe);M(Ee,()=>y.BoxGeometry,(we,k)=>{k(we,{args:[p(Ve),i,f]})});var De=P(Ee,2);{let we=R(()=>p(g)==="drywall"?_:m);M(De,()=>y.MeshStandardMaterial,(k,Z)=>{Z(k,{get color(){return p(we)}})})}V(Me,qe)},$$slots:{default:!0}})});var Ae=P(ue,2);M(Ae,()=>y.Mesh,(_e,Pe)=>{Pe(_e,{position:[0,h+p(Qe)/2+v,-n/2+H],name:"drywall",children:(Me,He)=>{var qe=TA(),Ee=G(qe);M(Ee,()=>y.BoxGeometry,(we,k)=>{k(we,{args:[w,p(Qe),f]})});var De=P(Ee,2);{let we=R(()=>p(g)==="drywall"?_:m);M(De,()=>y.MeshStandardMaterial,(k,Z)=>{Z(k,{get color(){return p(we)}})})}V(Me,qe)},$$slots:{default:!0}})});var N=P(Ae,2);M(N,()=>y.Mesh,(_e,Pe)=>{Pe(_e,{position:[0,U/2+v,-n/2+H],name:"drywall",children:(Me,He)=>{var qe=AA(),Ee=G(qe);M(Ee,()=>y.BoxGeometry,(we,k)=>{k(we,{args:[w,U,f]})});var De=P(Ee,2);{let we=R(()=>p(g)==="drywall"?_:m);M(De,()=>y.MeshStandardMaterial,(k,Z)=>{Z(k,{get color(){return p(we)}})})}V(Me,qe)},$$slots:{default:!0}})});var Se=P(N,2);M(Se,()=>y.Mesh,(_e,Pe)=>{Pe(_e,{position:[-t/2+H,i/2+v,0],name:"drywall",children:(Me,He)=>{var qe=EA(),Ee=G(qe);M(Ee,()=>y.BoxGeometry,(we,k)=>{k(we,{args:[f,i,n]})});var De=P(Ee,2);{let we=R(()=>p(g)==="drywall"?_:m);M(De,()=>y.MeshStandardMaterial,(k,Z)=>{Z(k,{get color(){return p(we)}})})}V(Me,qe)},$$slots:{default:!0}})});var Ce=P(Se,2);M(Ce,()=>y.Mesh,(_e,Pe)=>{Pe(_e,{position:[t/2-H,i/2+v,0],name:"drywall",children:(Me,He)=>{var qe=CA(),Ee=G(qe);M(Ee,()=>y.BoxGeometry,(we,k)=>{k(we,{args:[f,i,n]})});var De=P(Ee,2);{let we=R(()=>p(g)==="drywall"?_:m);M(De,()=>y.MeshStandardMaterial,(k,Z)=>{Z(k,{get color(){return p(we)}})})}V(Me,qe)},$$slots:{default:!0}})});var Ie=P(Ce,2);{let _e=R(()=>[p(oe),i/2+v,n/2-H]);M(Ie,()=>y.Mesh,(Pe,Me)=>{Me(Pe,{get position(){return p(_e)},name:"drywall",children:(He,qe)=>{var Ee=PA(),De=G(Ee);{let k=R(()=>[p(Ge),i,f]);M(De,()=>y.BoxGeometry,(Z,le)=>{le(Z,{get args(){return p(k)}})})}var we=P(De,2);{let k=R(()=>p(g)==="drywall"?_:m);M(we,()=>y.MeshStandardMaterial,(Z,le)=>{le(Z,{get color(){return p(k)}})})}V(He,Ee)},$$slots:{default:!0}})})}var ye=P(Ie,2);{let _e=R(()=>[(b+I)/2,h+p(Qe)/2+v,n/2-H]);M(ye,()=>y.Mesh,(Pe,Me)=>{Me(Pe,{get position(){return p(_e)},name:"drywall",children:(He,qe)=>{var Ee=RA(),De=G(Ee);{let k=R(()=>[p(te),p(Qe),f]);M(De,()=>y.BoxGeometry,(Z,le)=>{le(Z,{get args(){return p(k)}})})}var we=P(De,2);{let k=R(()=>p(g)==="drywall"?_:m);M(we,()=>y.MeshStandardMaterial,(Z,le)=>{le(Z,{get color(){return p(k)}})})}V(He,Ee)},$$slots:{default:!0}})})}var L=P(ye,2);{let _e=R(()=>[(p(re)+p(xe))/2,i/2+v,n/2-H]);M(L,()=>y.Mesh,(Pe,Me)=>{Me(Pe,{get position(){return p(_e)},name:"drywall",children:(He,qe)=>{var Ee=IA(),De=G(Ee);{let k=R(()=>[p(Le),i,f]);M(De,()=>y.BoxGeometry,(Z,le)=>{le(Z,{get args(){return p(k)}})})}var we=P(De,2);{let k=R(()=>p(g)==="drywall"?_:m);M(we,()=>y.MeshStandardMaterial,(Z,le)=>{le(Z,{get color(){return p(k)}})})}V(He,Ee)},$$slots:{default:!0}})})}var T=P(L,2);{let _e=R(()=>[(A+D)/2,h+p(Qe)/2+v,n/2-H]);M(T,()=>y.Mesh,(Pe,Me)=>{Me(Pe,{get position(){return p(_e)},name:"drywall",children:(He,qe)=>{var Ee=DA(),De=G(Ee);{let k=R(()=>[p(Te),p(Qe),f]);M(De,()=>y.BoxGeometry,(Z,le)=>{le(Z,{get args(){return p(k)}})})}var we=P(De,2);{let k=R(()=>p(g)==="drywall"?_:m);M(we,()=>y.MeshStandardMaterial,(Z,le)=>{le(Z,{get color(){return p(k)}})})}V(He,Ee)},$$slots:{default:!0}})})}var W=P(T,2);{let _e=R(()=>[(A+D)/2,U/2+v,n/2-H]);M(W,()=>y.Mesh,(Pe,Me)=>{Me(Pe,{get position(){return p(_e)},name:"drywall",children:(He,qe)=>{var Ee=LA(),De=G(Ee);{let k=R(()=>[p(Te),U,f]);M(De,()=>y.BoxGeometry,(Z,le)=>{le(Z,{get args(){return p(k)}})})}var we=P(De,2);{let k=R(()=>p(g)==="drywall"?_:m);M(we,()=>y.MeshStandardMaterial,(Z,le)=>{le(Z,{get color(){return p(k)}})})}V(He,Ee)},$$slots:{default:!0}})})}var ve=P(W,2);{let _e=R(()=>[p(Oe),i/2+v,n/2-H]);M(ve,()=>y.Mesh,(Pe,Me)=>{Me(Pe,{get position(){return p(_e)},name:"drywall",children:(He,qe)=>{var Ee=NA(),De=G(Ee);{let k=R(()=>[p($e),i,f]);M(De,()=>y.BoxGeometry,(Z,le)=>{le(Z,{get args(){return p(k)}})})}var we=P(De,2);{let k=R(()=>p(g)==="drywall"?_:m);M(we,()=>y.MeshStandardMaterial,(Z,le)=>{le(Z,{get color(){return p(k)}})})}V(He,Ee)},$$slots:{default:!0}})})}var Ne=P(ve,2);M(Ne,()=>y.Mesh,(_e,Pe)=>{Pe(_e,{position:[0,x-f/2,0],name:"drywall",children:(Me,He)=>{var qe=UA(),Ee=G(qe);M(Ee,()=>y.BoxGeometry,(we,k)=>{k(we,{args:[t-o*2,f,n-o*2]})});var De=P(Ee,2);{let we=R(()=>p(g)==="drywall"?_:m);M(De,()=>y.MeshStandardMaterial,(k,Z)=>{Z(k,{get color(){return p(we)}})})}V(Me,qe)},$$slots:{default:!0}})}),V(me,ie)},$$slots:{default:!0}})})}V(r,he),Fn()}var BA=Y("<!> <!>",1),zA=Y("<!> <!>",1),$A=Y("<!> <!>",1),kA=Y("<!> <!>",1),VA=Y("<!> <!>",1),GA=Y("<!> <!>",1),HA=Y("<!> <!>",1),WA=Y("<!> <!>",1),XA=Y("<!> <!>",1),qA=Y("<!> <!>",1),YA=Y("<!> <!>",1),ZA=Y("<!> <!>",1),JA=Y("<!> <!>",1),KA=Y("<!> <!>",1),jA=Y("<!> <!>",1),QA=Y("<!> <!>",1),eE=Y("<!> <!> <!> <!> <!> <!> <!> <!>   <!>  <!>  <!>  <!> <!>  <!> <!> <!>",1),tE=Y("<!> <!>",1),nE=Y("<!> <!>",1),iE=Y("<!> <!>",1),rE=Y("<!> <!>",1),sE=Y("<!> <!>",1),oE=Y("<!> <!>",1),aE=Y("<!> <!>",1),lE=Y("<!> <!>",1),cE=Y("<!> <!>",1),uE=Y("<!> <!>",1),hE=Y("<!> <!>",1),dE=Y("<!> <!>",1),fE=Y("<!> <!>",1),pE=Y("<!> <!>",1),mE=Y("<!> <!>",1),gE=Y("<!> <!>",1),vE=Y("<!> <!>",1),_E=Y("<!> <!>",1),xE=Y("<!> <!>",1),yE=Y("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>  <!> <!> <!> <!> <!> <!> <!>",1),ME=Y("<!> <!>",1),SE=Y("<!> <!>",1),bE=Y("<!> <!>",1),wE=Y("<!> <!>",1),TE=Y("<!> <!>",1),AE=Y("<!> <!>",1),EE=Y("<!> <!>",1),CE=Y("<!> <!>",1),PE=Y("<!> <!>",1),RE=Y("<!> <!>",1),IE=Y("<!> <!>",1),DE=Y("<!> <!>",1),LE=Y("<!> <!>",1),NE=Y("<!> <!>   <!> <!>   <!> <!>   <!> <!> <!> <!> <!>",1),UE=Y("<!> <!> <!>",1);function FE(r,e){Un(e,!0);const t=12,n=10,i=8,s=.15,o=.35,a=.15,c=Math.floor(t/1.5)+1,u=Math.floor(c/3),d=Math.floor(c*2/3),h=7,m=t/2*(4/12),_=.5,g=.12,v=.3,x=.08,S=x,b=0,I=o*2+x,A="#8b7355",D="#705b40",w="#3a3a3a",E="#5b2d0c",O="#c9c9c9",U="#d9d9d9",H="#b7d8eb",ne="#6f757d",K="#7a4e2f",he="#3f4348",fe="#2f3438",ae="#8fb6c7",X="#4fc3f7";let j=Yt(null);const me=.5+a,Re=i+me+a,be=x/2;function Ve(Pe){return-t/2+Pe*t/(c-1)}const Qe=Ve(u)+s/2,Ge=Ve(u+2)-s/2,oe=Ve(d)+s/2,te=Ve(d+2)-s/2,re=3.4,xe=-re/2,Le=re/2,Te=3,$e=Math.atan2(m,t/2),Oe=t/2+_,ie=n+_*2,pe=Math.sqrt(Oe**2+m**2),ue=.12;function Ae(Pe){const Me=Math.min(Math.abs(Pe)/Oe,1);return Re+m*(1-Me)}const N=new Ti().moveTo(-t/2,0).lineTo(0,m).lineTo(t/2,0).lineTo(-t/2,0);function Se(Pe){Pe.stopPropagation();const Me=Pe?.object?.name??null;dn(Me),Ct(j,Me,!0)}function Ce(){dn(null),Ct(j,null)}var Ie=UE(),ye=G(Ie);{let Pe=R(()=>hn.get()>=8);M(ye,()=>y.Group,(Me,He)=>{He(Me,{get visible(){return p(Pe)},onpointermove:Se,onpointerleave:Ce,children:(qe,Ee)=>{const De=R(()=>xe+t/2),we=R(()=>t/2-Le),k=R(()=>i-h),Z=R(()=>Qe+t/2),le=R(()=>-t/2+p(Z)/2),F=R(()=>Ge-Qe),ee=R(()=>i-h),Q=R(()=>oe-Ge),ce=R(()=>te-oe),$=R(()=>t/2-te);var z=eE(),ge=G(z);M(ge,()=>y.Mesh,(et,Be)=>{Be(et,{position:[-t/2+p(De)/2,i/2+me,-n/2-be],name:"siding",children:(Je,tt)=>{var Ye=BA(),Fe=G(Ye);M(Fe,()=>y.BoxGeometry,(nt,Ke)=>{Ke(nt,{args:[p(De),i,x]})});var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:D);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)}})})}V(Je,Ye)},$$slots:{default:!0}})});var ze=P(ge,2);M(ze,()=>y.Mesh,(et,Be)=>{Be(et,{position:[Le+p(we)/2,i/2+me,-n/2-be],name:"siding",children:(Je,tt)=>{var Ye=zA(),Fe=G(Ye);M(Fe,()=>y.BoxGeometry,(nt,Ke)=>{Ke(nt,{args:[p(we),i,x]})});var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:D);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)}})})}V(Je,Ye)},$$slots:{default:!0}})});var ke=P(ze,2);M(ke,()=>y.Mesh,(et,Be)=>{Be(et,{position:[0,h+p(k)/2+me,-n/2-be],name:"siding",children:(Je,tt)=>{var Ye=$A(),Fe=G(Ye);M(Fe,()=>y.BoxGeometry,(nt,Ke)=>{Ke(nt,{args:[re,p(k),x]})});var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:D);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)}})})}V(Je,Ye)},$$slots:{default:!0}})});var Ue=P(ke,2);M(Ue,()=>y.Mesh,(et,Be)=>{Be(et,{position:[0,Te/2+me,-n/2-be],name:"siding",children:(Je,tt)=>{var Ye=kA(),Fe=G(Ye);M(Fe,()=>y.BoxGeometry,(nt,Ke)=>{Ke(nt,{args:[re,Te,x]})});var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:D);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)}})})}V(Je,Ye)},$$slots:{default:!0}})});var je=P(Ue,2);M(je,()=>y.Mesh,(et,Be)=>{Be(et,{position:[-t/2-be,i/2+me,0],name:"siding",children:(Je,tt)=>{var Ye=VA(),Fe=G(Ye);M(Fe,()=>y.BoxGeometry,(nt,Ke)=>{Ke(nt,{args:[x,i,n+S*2]})});var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:A);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)}})})}V(Je,Ye)},$$slots:{default:!0}})});var ot=P(je,2);M(ot,()=>y.Mesh,(et,Be)=>{Be(et,{position:[t/2+be,i/2+me,0],name:"siding",children:(Je,tt)=>{var Ye=GA(),Fe=G(Ye);M(Fe,()=>y.BoxGeometry,(nt,Ke)=>{Ke(nt,{args:[x,i,n+S*2]})});var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:A);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)}})})}V(Je,Ye)},$$slots:{default:!0}})});var Ze=P(ot,2);M(Ze,()=>y.Mesh,(et,Be)=>{Be(et,{position:[t/2+be,i/2+me,n/2+be-I/2],name:"siding",children:(Je,tt)=>{var Ye=HA(),Fe=G(Ye);M(Fe,()=>y.BoxGeometry,(nt,Ke)=>{Ke(nt,{args:[x,i,I]})});var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:A);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)}})})}V(Je,Ye)},$$slots:{default:!0}})});var rt=P(Ze,2);M(rt,()=>y.Mesh,(et,Be)=>{Be(et,{position:[-t/2-be,i/2+me,n/2+be-I/2],name:"siding",children:(Je,tt)=>{var Ye=WA(),Fe=G(Ye);M(Fe,()=>y.BoxGeometry,(nt,Ke)=>{Ke(nt,{args:[x,i,I]})});var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:A);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)}})})}V(Je,Ye)},$$slots:{default:!0}})});var vt=P(rt,2);{let et=R(()=>[p(le)-b/2,i/2+me,n/2+be]);M(vt,()=>y.Mesh,(Be,Je)=>{Je(Be,{get position(){return p(et)},name:"siding",children:(tt,Ye)=>{var Fe=XA(),it=G(Fe);{let Ke=R(()=>[p(Z)+b,i,x]);M(it,()=>y.BoxGeometry,(st,C)=>{C(st,{get args(){return p(Ke)}})})}var nt=P(it,2);{let Ke=R(()=>p(j)==="siding"?X:A);M(nt,()=>y.MeshStandardMaterial,(st,C)=>{C(st,{get color(){return p(Ke)}})})}V(tt,Fe)},$$slots:{default:!0}})})}var bt=P(vt,2);{let et=R(()=>[(Qe+Ge)/2,h+p(ee)/2+me,n/2+be]);M(bt,()=>y.Mesh,(Be,Je)=>{Je(Be,{get position(){return p(et)},name:"siding",children:(tt,Ye)=>{var Fe=qA(),it=G(Fe);{let Ke=R(()=>[p(F),p(ee),x]);M(it,()=>y.BoxGeometry,(st,C)=>{C(st,{get args(){return p(Ke)}})})}var nt=P(it,2);{let Ke=R(()=>p(j)==="siding"?X:A);M(nt,()=>y.MeshStandardMaterial,(st,C)=>{C(st,{get color(){return p(Ke)}})})}V(tt,Fe)},$$slots:{default:!0}})})}var ft=P(bt,2);{let et=R(()=>[(Ge+oe)/2,i/2+me,n/2+be]);M(ft,()=>y.Mesh,(Be,Je)=>{Je(Be,{get position(){return p(et)},name:"siding",children:(tt,Ye)=>{var Fe=YA(),it=G(Fe);{let Ke=R(()=>[p(Q),i,x]);M(it,()=>y.BoxGeometry,(st,C)=>{C(st,{get args(){return p(Ke)}})})}var nt=P(it,2);{let Ke=R(()=>p(j)==="siding"?X:A);M(nt,()=>y.MeshStandardMaterial,(st,C)=>{C(st,{get color(){return p(Ke)}})})}V(tt,Fe)},$$slots:{default:!0}})})}var _t=P(ft,2);{let et=R(()=>[(oe+te)/2,h+p(ee)/2+me,n/2+be]);M(_t,()=>y.Mesh,(Be,Je)=>{Je(Be,{get position(){return p(et)},name:"siding",children:(tt,Ye)=>{var Fe=ZA(),it=G(Fe);{let Ke=R(()=>[p(ce),p(ee),x]);M(it,()=>y.BoxGeometry,(st,C)=>{C(st,{get args(){return p(Ke)}})})}var nt=P(it,2);{let Ke=R(()=>p(j)==="siding"?X:A);M(nt,()=>y.MeshStandardMaterial,(st,C)=>{C(st,{get color(){return p(Ke)}})})}V(tt,Fe)},$$slots:{default:!0}})})}var pt=P(_t,2);{let et=R(()=>[(oe+te)/2,Te/2+me,n/2+be]);M(pt,()=>y.Mesh,(Be,Je)=>{Je(Be,{get position(){return p(et)},name:"siding",children:(tt,Ye)=>{var Fe=JA(),it=G(Fe);{let Ke=R(()=>[p(ce),Te,x]);M(it,()=>y.BoxGeometry,(st,C)=>{C(st,{get args(){return p(Ke)}})})}var nt=P(it,2);{let Ke=R(()=>p(j)==="siding"?X:A);M(nt,()=>y.MeshStandardMaterial,(st,C)=>{C(st,{get color(){return p(Ke)}})})}V(tt,Fe)},$$slots:{default:!0}})})}var gt=P(pt,2);{let et=R(()=>[te+p($)/2+b/2,i/2+me,n/2+be]);M(gt,()=>y.Mesh,(Be,Je)=>{Je(Be,{get position(){return p(et)},name:"siding",children:(tt,Ye)=>{var Fe=KA(),it=G(Fe);{let Ke=R(()=>[p($)+b,i,x]);M(it,()=>y.BoxGeometry,(st,C)=>{C(st,{get args(){return p(Ke)}})})}var nt=P(it,2);{let Ke=R(()=>p(j)==="siding"?X:A);M(nt,()=>y.MeshStandardMaterial,(st,C)=>{C(st,{get color(){return p(Ke)}})})}V(tt,Fe)},$$slots:{default:!0}})})}var ct=P(gt,2);M(ct,()=>y.Mesh,(et,Be)=>{Be(et,{position:[0,i+me,n/2+be-x/2],name:"siding",children:(Je,tt)=>{var Ye=jA(),Fe=G(Ye);{let nt=R(()=>[N,{depth:x,bevelEnabled:!1}]);M(Fe,()=>y.ExtrudeGeometry,(Ke,st)=>{st(Ke,{get args(){return p(nt)}})})}var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:A);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)},get side(){return Jn}})})}V(Je,Ye)},$$slots:{default:!0}})});var xt=P(ct,2);M(xt,()=>y.Mesh,(et,Be)=>{Be(et,{position:[0,i+me,-n/2-be-x/2],name:"siding",children:(Je,tt)=>{var Ye=QA(),Fe=G(Ye);{let nt=R(()=>[N,{depth:x,bevelEnabled:!1}]);M(Fe,()=>y.ExtrudeGeometry,(Ke,st)=>{st(Ke,{get args(){return p(nt)}})})}var it=P(Fe,2);{let nt=R(()=>p(j)==="siding"?X:D);M(it,()=>y.MeshStandardMaterial,(Ke,st)=>{st(Ke,{get color(){return p(nt)},get side(){return Jn}})})}V(Je,Ye)},$$slots:{default:!0}})}),V(qe,z)},$$slots:{default:!0}})})}var L=P(ye,2);{var T=Pe=>{var Me=Ut(),He=G(Me);M(He,()=>y.Group,(qe,Ee)=>{Ee(qe,{onpointermove:Se,onpointerleave:Ce,children:(De,we)=>{const k=R(()=>n/2+be-x/2),Z=R(()=>Ge-Qe),le=R(()=>h-.2),F=R(()=>te-oe),ee=R(()=>h-Te),Q=R(()=>.12),ce=R(()=>.1),$=R(()=>.01),z=R(()=>-n/2-be-p(Q)/2),ge=R(()=>h-Te);var ze=yE(),ke=G(ze);{let Fe=R(()=>[(Qe+Ge)/2,p(le)/2+me,p(k)]);M(ke,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"door",children:(Ke,st)=>{var C=tE(),q=G(C);{let J=R(()=>[p(Z)-.12,p(le),p(Q)]);M(q,()=>y.BoxGeometry,(se,Xe)=>{Xe(se,{get args(){return p(J)}})})}var de=P(q,2);{let J=R(()=>p(j)==="door"?X:E);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var Ue=P(ke,2);{let Fe=R(()=>[Ge-.22,me+p(le)*.52,p(k)+p(Q)/2+.04]);M(Ue,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"door-knob",children:(Ke,st)=>{var C=nE(),q=G(C);M(q,()=>y.SphereGeometry,(J,se)=>{se(J,{args:[.11,14,12]})});var de=P(q,2);{let J=R(()=>p(j)==="door-knob"?X:O);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var je=P(Ue,2);{let Fe=R(()=>[(Qe+Ge)/2,p(le)+me+.05,p(k)]);M(je,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-frame",children:(Ke,st)=>{var C=iE(),q=G(C);{let J=R(()=>[p(Z),.1,p(Q)]);M(q,()=>y.BoxGeometry,(se,Xe)=>{Xe(se,{get args(){return p(J)}})})}var de=P(q,2);{let J=R(()=>p(j)==="window-frame"?X:U);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var ot=P(je,2);{let Fe=R(()=>[Qe+.05,p(le)/2+me,p(k)]);M(ot,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-frame",children:(Ke,st)=>{var C=rE(),q=G(C);M(q,()=>y.BoxGeometry,(J,se)=>{se(J,{args:[.1,p(le),p(Q)]})});var de=P(q,2);{let J=R(()=>p(j)==="window-frame"?X:U);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var Ze=P(ot,2);{let Fe=R(()=>[Ge-.05,p(le)/2+me,p(k)]);M(Ze,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-frame",children:(Ke,st)=>{var C=sE(),q=G(C);M(q,()=>y.BoxGeometry,(J,se)=>{se(J,{args:[.1,p(le),p(Q)]})});var de=P(q,2);{let J=R(()=>p(j)==="window-frame"?X:U);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var rt=P(Ze,2);{let Fe=R(()=>[(oe+te)/2,h+me-.05,p(k)]);M(rt,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-frame",children:(Ke,st)=>{var C=oE(),q=G(C);{let J=R(()=>[p(F),.1,p(ce)]);M(q,()=>y.BoxGeometry,(se,Xe)=>{Xe(se,{get args(){return p(J)}})})}var de=P(q,2);{let J=R(()=>p(j)==="window-frame"?X:U);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var vt=P(rt,2);{let Fe=R(()=>[(oe+te)/2,Te+me+.05,p(k)]);M(vt,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-frame",children:(Ke,st)=>{var C=aE(),q=G(C);{let J=R(()=>[p(F),.1,p(ce)]);M(q,()=>y.BoxGeometry,(se,Xe)=>{Xe(se,{get args(){return p(J)}})})}var de=P(q,2);{let J=R(()=>p(j)==="window-frame"?X:U);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var bt=P(vt,2);{let Fe=R(()=>[oe+.05,(h+Te)/2+me,p(k)]);M(bt,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-frame",children:(Ke,st)=>{var C=lE(),q=G(C);M(q,()=>y.BoxGeometry,(J,se)=>{se(J,{args:[.1,p(ee),p(ce)]})});var de=P(q,2);{let J=R(()=>p(j)==="window-frame"?X:U);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var ft=P(bt,2);{let Fe=R(()=>[te-.05,(h+Te)/2+me,p(k)]);M(ft,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-frame",children:(Ke,st)=>{var C=cE(),q=G(C);M(q,()=>y.BoxGeometry,(J,se)=>{se(J,{args:[.1,p(ee),p(ce)]})});var de=P(q,2);{let J=R(()=>p(j)==="window-frame"?X:U);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var _t=P(ft,2);{let Fe=R(()=>[(oe+te)/2,(h+Te)/2+me,p(k)]);M(_t,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-frame",children:(Ke,st)=>{var C=uE(),q=G(C);M(q,()=>y.BoxGeometry,(J,se)=>{se(J,{args:[.06,p(ee),p(ce)]})});var de=P(q,2);{let J=R(()=>p(j)==="window-frame"?X:U);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)}})})}V(Ke,C)},$$slots:{default:!0}})})}var pt=P(_t,2);{let Fe=R(()=>[(oe+te)/2-p(F)/4,(h+Te)/2+me,p(k)-p($)]);M(pt,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-glass",children:(Ke,st)=>{var C=hE(),q=G(C);{let J=R(()=>[p(F)/2-.08,p(ee)-.12,.02]);M(q,()=>y.BoxGeometry,(se,Xe)=>{Xe(se,{get args(){return p(J)}})})}var de=P(q,2);{let J=R(()=>p(j)==="window-glass"?X:H);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)},transparent:!0,opacity:.65})})}V(Ke,C)},$$slots:{default:!0}})})}var gt=P(pt,2);{let Fe=R(()=>[(oe+te)/2+p(F)/4,(h+Te)/2+me,p(k)-p($)]);M(gt,()=>y.Mesh,(it,nt)=>{nt(it,{get position(){return p(Fe)},name:"window-glass",children:(Ke,st)=>{var C=dE(),q=G(C);{let J=R(()=>[p(F)/2-.08,p(ee)-.12,.02]);M(q,()=>y.BoxGeometry,(se,Xe)=>{Xe(se,{get args(){return p(J)}})})}var de=P(q,2);{let J=R(()=>p(j)==="window-glass"?X:H);M(de,()=>y.MeshStandardMaterial,(se,Xe)=>{Xe(se,{get color(){return p(J)},transparent:!0,opacity:.65})})}V(Ke,C)},$$slots:{default:!0}})})}var ct=P(gt,2);M(ct,()=>y.Mesh,(Fe,it)=>{it(Fe,{position:[0,h+me-.05,p(z)],name:"window-frame",children:(nt,Ke)=>{var st=fE(),C=G(st);M(C,()=>y.BoxGeometry,(de,J)=>{J(de,{args:[re,.1,p(Q)]})});var q=P(C,2);{let de=R(()=>p(j)==="window-frame"?X:U);M(q,()=>y.MeshStandardMaterial,(J,se)=>{se(J,{get color(){return p(de)}})})}V(nt,st)},$$slots:{default:!0}})});var xt=P(ct,2);M(xt,()=>y.Mesh,(Fe,it)=>{it(Fe,{position:[0,Te+me+.05,p(z)],name:"window-frame",children:(nt,Ke)=>{var st=pE(),C=G(st);M(C,()=>y.BoxGeometry,(de,J)=>{J(de,{args:[re,.1,p(Q)]})});var q=P(C,2);{let de=R(()=>p(j)==="window-frame"?X:U);M(q,()=>y.MeshStandardMaterial,(J,se)=>{se(J,{get color(){return p(de)}})})}V(nt,st)},$$slots:{default:!0}})});var et=P(xt,2);M(et,()=>y.Mesh,(Fe,it)=>{it(Fe,{position:[xe+.05,(h+Te)/2+me,p(z)],name:"window-frame",children:(nt,Ke)=>{var st=mE(),C=G(st);M(C,()=>y.BoxGeometry,(de,J)=>{J(de,{args:[.1,p(ge),p(Q)]})});var q=P(C,2);{let de=R(()=>p(j)==="window-frame"?X:U);M(q,()=>y.MeshStandardMaterial,(J,se)=>{se(J,{get color(){return p(de)}})})}V(nt,st)},$$slots:{default:!0}})});var Be=P(et,2);M(Be,()=>y.Mesh,(Fe,it)=>{it(Fe,{position:[Le-.05,(h+Te)/2+me,p(z)],name:"window-frame",children:(nt,Ke)=>{var st=gE(),C=G(st);M(C,()=>y.BoxGeometry,(de,J)=>{J(de,{args:[.1,p(ge),p(Q)]})});var q=P(C,2);{let de=R(()=>p(j)==="window-frame"?X:U);M(q,()=>y.MeshStandardMaterial,(J,se)=>{se(J,{get color(){return p(de)}})})}V(nt,st)},$$slots:{default:!0}})});var Je=P(Be,2);M(Je,()=>y.Mesh,(Fe,it)=>{it(Fe,{position:[0,(h+Te)/2+me,p(z)],name:"window-frame",children:(nt,Ke)=>{var st=vE(),C=G(st);M(C,()=>y.BoxGeometry,(de,J)=>{J(de,{args:[.08,p(ge),p(Q)]})});var q=P(C,2);{let de=R(()=>p(j)==="window-frame"?X:U);M(q,()=>y.MeshStandardMaterial,(J,se)=>{se(J,{get color(){return p(de)}})})}V(nt,st)},$$slots:{default:!0}})});var tt=P(Je,2);M(tt,()=>y.Mesh,(Fe,it)=>{it(Fe,{position:[-re/4,(h+Te)/2+me,p(z)-p($)],name:"window-glass",children:(nt,Ke)=>{var st=_E(),C=G(st);M(C,()=>y.BoxGeometry,(de,J)=>{J(de,{args:[re/2-.15,p(ge)-.14,.02]})});var q=P(C,2);{let de=R(()=>p(j)==="window-glass"?X:H);M(q,()=>y.MeshStandardMaterial,(J,se)=>{se(J,{get color(){return p(de)},transparent:!0,opacity:.65})})}V(nt,st)},$$slots:{default:!0}})});var Ye=P(tt,2);M(Ye,()=>y.Mesh,(Fe,it)=>{it(Fe,{position:[re/4,(h+Te)/2+me,p(z)-p($)],name:"window-glass",children:(nt,Ke)=>{var st=xE(),C=G(st);M(C,()=>y.BoxGeometry,(de,J)=>{J(de,{args:[re/2-.15,p(ge)-.14,.02]})});var q=P(C,2);{let de=R(()=>p(j)==="window-glass"?X:H);M(q,()=>y.MeshStandardMaterial,(J,se)=>{se(J,{get color(){return p(de)},transparent:!0,opacity:.65})})}V(nt,st)},$$slots:{default:!0}})}),V(De,ze)},$$slots:{default:!0}})}),V(Pe,Me)},W=R(()=>hn.get()>=11);gn(L,Pe=>{p(W)&&Pe(T)})}var ve=P(L,2);{var Ne=Pe=>{var Me=Ut(),He=G(Me);M(He,()=>y.Group,(qe,Ee)=>{Ee(qe,{onpointermove:Se,onpointerleave:Ce,children:(De,we)=>{const k=R(()=>2.4),Z=R(()=>1.3),le=R(()=>Ae(p(k))+ue),F=R(()=>-2.3),ee=R(()=>-1.8),Q=R(()=>Ae(p(F))+ue),ce=R(()=>-3.6),$=R(()=>-.45),z=R(()=>Ae(p(ce))+ue);var ge=NE(),ze=G(ge);M(ze,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[-Oe/2,Re+m/2,0],rotation:[0,0,$e],name:"roofing",children:(ct,xt)=>{var et=ME(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[pe,.15,ie]})});var Je=P(Be,2);{let tt=R(()=>p(j)==="roofing"?X:w);M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var ke=P(ze,2);M(ke,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[Oe/2,Re+m/2,0],rotation:[0,0,-$e],name:"roofing",children:(ct,xt)=>{var et=SE(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[pe,.15,ie]})});var Je=P(Be,2);{let tt=R(()=>p(j)==="roofing"?X:w);M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var Ue=P(ke,2);{let pt=R(()=>[p(k),p(le)+.55,p(Z)]);M(Ue,()=>y.Mesh,(gt,ct)=>{ct(gt,{get position(){return p(pt)},name:"roof-vent",children:(xt,et)=>{var Be=bE(),Je=G(Be);M(Je,()=>y.CylinderGeometry,(Ye,Fe)=>{Fe(Ye,{args:[.18,.18,1.1,12]})});var tt=P(Je,2);{let Ye=R(()=>p(j)==="roof-vent"?X:ne);M(tt,()=>y.MeshStandardMaterial,(Fe,it)=>{it(Fe,{get color(){return p(Ye)}})})}V(xt,Be)},$$slots:{default:!0}})})}var je=P(Ue,2);{let pt=R(()=>[p(k),p(le)+1.22,p(Z)]);M(je,()=>y.Mesh,(gt,ct)=>{ct(gt,{get position(){return p(pt)},name:"roof-vent",children:(xt,et)=>{var Be=wE(),Je=G(Be);M(Je,()=>y.ConeGeometry,(Ye,Fe)=>{Fe(Ye,{args:[.34,.24,12]})});var tt=P(Je,2);{let Ye=R(()=>p(j)==="roof-vent"?X:ne);M(tt,()=>y.MeshStandardMaterial,(Fe,it)=>{it(Fe,{get color(){return p(Ye)}})})}V(xt,Be)},$$slots:{default:!0}})})}var ot=P(je,2);{let pt=R(()=>[p(F),p(Q)+.95,p(ee)]);M(ot,()=>y.Mesh,(gt,ct)=>{ct(gt,{get position(){return p(pt)},name:"chimney",children:(xt,et)=>{var Be=TE(),Je=G(Be);M(Je,()=>y.BoxGeometry,(Ye,Fe)=>{Fe(Ye,{args:[1,1.9,1]})});var tt=P(Je,2);{let Ye=R(()=>p(j)==="chimney"?X:K);M(tt,()=>y.MeshStandardMaterial,(Fe,it)=>{it(Fe,{get color(){return p(Ye)}})})}V(xt,Be)},$$slots:{default:!0}})})}var Ze=P(ot,2);{let pt=R(()=>[p(F),p(Q)+1.98,p(ee)]);M(Ze,()=>y.Mesh,(gt,ct)=>{ct(gt,{get position(){return p(pt)},name:"chimney",children:(xt,et)=>{var Be=AE(),Je=G(Be);M(Je,()=>y.BoxGeometry,(Ye,Fe)=>{Fe(Ye,{args:[1.2,.16,1.2]})});var tt=P(Je,2);{let Ye=R(()=>p(j)==="chimney"?X:he);M(tt,()=>y.MeshStandardMaterial,(Fe,it)=>{it(Fe,{get color(){return p(Ye)}})})}V(xt,Be)},$$slots:{default:!0}})})}var rt=P(Ze,2);{let pt=R(()=>[p(ce),p(z),p($)]);M(rt,()=>y.Group,(gt,ct)=>{ct(gt,{get position(){return p(pt)},rotation:[0,0,$e],children:(xt,et)=>{var Be=PE(),Je=G(Be);M(Je,()=>y.Mesh,(Ye,Fe)=>{Fe(Ye,{name:"skylight",children:(it,nt)=>{var Ke=EE(),st=G(Ke);M(st,()=>y.BoxGeometry,(q,de)=>{de(q,{args:[1.35,.1,1.05]})});var C=P(st,2);{let q=R(()=>p(j)==="skylight"?X:fe);M(C,()=>y.MeshStandardMaterial,(de,J)=>{J(de,{get color(){return p(q)}})})}V(it,Ke)},$$slots:{default:!0}})});var tt=P(Je,2);M(tt,()=>y.Mesh,(Ye,Fe)=>{Fe(Ye,{position:[0,.06,0],name:"skylight",children:(it,nt)=>{var Ke=CE(),st=G(Ke);M(st,()=>y.BoxGeometry,(q,de)=>{de(q,{args:[1.05,.04,.75]})});var C=P(st,2);{let q=R(()=>p(j)==="skylight"?X:ae);M(C,()=>y.MeshStandardMaterial,(de,J)=>{J(de,{get color(){return p(q)},transparent:!0,opacity:.72})})}V(it,Ke)},$$slots:{default:!0}})}),V(xt,Be)},$$slots:{default:!0}})})}var vt=P(rt,2);M(vt,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[-t/2-_,Re-v/2,0],name:"fascia",children:(ct,xt)=>{var et=RE(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[g,v,ie]})});var Je=P(Be,2);{let tt=R(()=>p(j)==="fascia"?X:"#5a4a3a");M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var bt=P(vt,2);M(bt,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[t/2+_,Re-v/2,0],name:"fascia",children:(ct,xt)=>{var et=IE(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[g,v,ie]})});var Je=P(Be,2);{let tt=R(()=>p(j)==="fascia"?X:"#5a4a3a");M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var ft=P(bt,2);M(ft,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[-Oe/2,Re+m/2,-n/2-_],rotation:[0,0,$e],name:"fascia",children:(ct,xt)=>{var et=DE(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[pe,v,g]})});var Je=P(Be,2);{let tt=R(()=>p(j)==="fascia"?X:"#5a4a3a");M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var _t=P(ft,2);M(_t,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[Oe/2,Re+m/2,-n/2-_],rotation:[0,0,-$e],name:"fascia",children:(ct,xt)=>{var et=LE(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[pe,v,g]})});var Je=P(Be,2);{let tt=R(()=>p(j)==="fascia"?X:"#5a4a3a");M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})}),V(De,ge)},$$slots:{default:!0}})}),V(Pe,Me)},_e=R(()=>hn.get()>=9);gn(ve,Pe=>{p(_e)&&Pe(Ne)})}V(r,Ie),Fn()}var OE=Y("<!> <!>",1),BE=Y("<!> <!>",1),zE=Y("<!> <!>",1),$E=Y("<!> <!>",1),kE=Y("<!> <!>",1),VE=Y("<!> <!>",1),GE=Y("<!> <!>",1),HE=Y("<!> <!> <!> <!> <!> <!>",1),WE=Y("<!> <!>",1),XE=Y("<!> <!>",1),qE=Y("<!> <!>",1),YE=Y("<!> <!>",1),ZE=Y("<!> <!>",1),JE=Y("<!> <!>",1),KE=Y("<!> <!>",1),jE=Y("<!> <!>",1),QE=Y("<!> <!>",1),eC=Y("<!> <!>",1),tC=Y("<!> <!>",1),nC=Y("<!> <!>",1),iC=Y("<!> <!>",1),rC=Y("<!> <!>",1),sC=Y("<!> <!>",1),oC=Y("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),aC=Y("<!> <!> <!>",1);function lC(r,e){Un(e,!0);const t=12,n=10,i=.35,s="#b8945e",o="#6b4423",a="#ffffff",l="#3f5f7f",c="#7a5334",u="#5c4030",d="#6b4423",h="#f0eee8",f="#d8e7f0",m="#4fc3f7";let _=Yt(null);const g=.55,v=.05;function x(w){w.stopPropagation();const E=w?.object?.name??null;dn(E),Ct(_,E,!0)}function S(){dn(null),Ct(_,null)}var b=aC(),I=G(b);{let w=R(()=>hn.get()>=10);M(I,()=>y.Group,(E,O)=>{O(E,{get visible(){return p(w)},onpointerenter:x,onpointerleave:S,children:(U,H)=>{var ne=Ut(),K=G(ne);M(K,()=>y.Mesh,(he,fe)=>{fe(he,{position:[0,g+v/2,0],name:"flooring",children:(ae,X)=>{var j=OE(),me=G(j);M(me,()=>y.BoxGeometry,(be,Ve)=>{Ve(be,{args:[t-i*2,v,n-i*2]})});var Re=P(me,2);{let be=R(()=>p(_)==="flooring"?m:s);M(Re,()=>y.MeshStandardMaterial,(Ve,Qe)=>{Qe(Ve,{get color(){return p(be)}})})}V(ae,j)},$$slots:{default:!0}})}),V(U,ne)},$$slots:{default:!0}})})}var A=P(I,2);{let w=R(()=>hn.get()>=10);M(A,()=>y.Group,(E,O)=>{O(E,{get visible(){return p(w)},onpointerenter:x,onpointerleave:S,children:(U,H)=>{var ne=HE(),K=G(ne);M(K,()=>y.Mesh,(me,Re)=>{Re(me,{position:[t/2-1.5,.75+g,-n/2+1.5],name:"bathtub",children:(be,Ve)=>{var Qe=BE(),Ge=G(Qe);M(Ge,()=>y.BoxGeometry,(te,re)=>{re(te,{args:[2.5,1.5,2.5]})});var oe=P(Ge,2);{let te=R(()=>p(_)==="bathtub"?m:a);M(oe,()=>y.MeshStandardMaterial,(re,xe)=>{xe(re,{get color(){return p(te)}})})}V(be,Qe)},$$slots:{default:!0}})});var he=P(K,2);M(he,()=>y.Mesh,(me,Re)=>{Re(me,{position:[t/2-.3,2.5+g,-n/2+1.5],name:"tub-surround",children:(be,Ve)=>{var Qe=zE(),Ge=G(Qe);M(Ge,()=>y.BoxGeometry,(te,re)=>{re(te,{args:[.15,4,2.5]})});var oe=P(Ge,2);{let te=R(()=>p(_)==="tub-surround"?m:"#e8e8e8");M(oe,()=>y.MeshStandardMaterial,(re,xe)=>{xe(re,{get color(){return p(te)}})})}V(be,Qe)},$$slots:{default:!0}})});var fe=P(he,2);M(fe,()=>y.Mesh,(me,Re)=>{Re(me,{position:[t/2-1.5,1.5+g,-n/2+4],name:"vanity",children:(be,Ve)=>{var Qe=$E(),Ge=G(Qe);M(Ge,()=>y.BoxGeometry,(te,re)=>{re(te,{args:[2,3,1]})});var oe=P(Ge,2);{let te=R(()=>p(_)==="vanity"?m:o);M(oe,()=>y.MeshStandardMaterial,(re,xe)=>{xe(re,{get color(){return p(te)}})})}V(be,Qe)},$$slots:{default:!0}})});var ae=P(fe,2);M(ae,()=>y.Mesh,(me,Re)=>{Re(me,{position:[t/2-1.5,3+g+.05,-n/2+4],name:"vanity-top",children:(be,Ve)=>{var Qe=kE(),Ge=G(Qe);M(Ge,()=>y.BoxGeometry,(te,re)=>{re(te,{args:[2.1,.1,1.1]})});var oe=P(Ge,2);{let te=R(()=>p(_)==="vanity-top"?m:a);M(oe,()=>y.MeshStandardMaterial,(re,xe)=>{xe(re,{get color(){return p(te)}})})}V(be,Qe)},$$slots:{default:!0}})});var X=P(ae,2);M(X,()=>y.Mesh,(me,Re)=>{Re(me,{position:[t/2-1.5,.75+g,-n/2+5.5],name:"toilet",children:(be,Ve)=>{var Qe=VE(),Ge=G(Qe);M(Ge,()=>y.BoxGeometry,(te,re)=>{re(te,{args:[.8,1.5,1]})});var oe=P(Ge,2);{let te=R(()=>p(_)==="toilet"?m:a);M(oe,()=>y.MeshStandardMaterial,(re,xe)=>{xe(re,{get color(){return p(te)}})})}V(be,Qe)},$$slots:{default:!0}})});var j=P(X,2);M(j,()=>y.Mesh,(me,Re)=>{Re(me,{position:[t/2-1.5,1.2+g,-n/2+5.8],name:"toilet-tank",children:(be,Ve)=>{var Qe=GE(),Ge=G(Qe);M(Ge,()=>y.BoxGeometry,(te,re)=>{re(te,{args:[.6,1.2,.4]})});var oe=P(Ge,2);{let te=R(()=>p(_)==="toilet-tank"?m:a);M(oe,()=>y.MeshStandardMaterial,(re,xe)=>{xe(re,{get color(){return p(te)}})})}V(be,Qe)},$$slots:{default:!0}})}),V(U,ne)},$$slots:{default:!0}})})}var D=P(A,2);{let w=R(()=>hn.get()>=11);M(D,()=>y.Group,(E,O)=>{O(E,{get visible(){return p(w)},onpointerenter:x,onpointerleave:S,children:(U,H)=>{var ne=oC(),K=G(ne);M(K,()=>y.Mesh,(te,re)=>{re(te,{position:[-3.5,g+.45,2.4],name:"sofa",children:(xe,Le)=>{var Te=WE(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[3.2,.9,1]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="sofa"?m:l);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var he=P(K,2);M(he,()=>y.Mesh,(te,re)=>{re(te,{position:[-3.5,g+1.05,2],name:"sofa",children:(xe,Le)=>{var Te=XE(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[3.2,1.1,.22]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="sofa"?m:l);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var fe=P(he,2);M(fe,()=>y.Mesh,(te,re)=>{re(te,{position:[-3.5,g+.32,.95],name:"coffee-table",children:(xe,Le)=>{var Te=qE(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[2,.18,.9]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="coffee-table"?m:c);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var ae=P(fe,2);Qt(ae,16,()=>[-4.25,-2.75],jt,(te,re)=>{var xe=Ut(),Le=G(xe);{let Te=R(()=>[re,g+.15,.95]);M(Le,()=>y.Mesh,($e,Oe)=>{Oe($e,{get position(){return p(Te)},name:"coffee-table",children:(ie,pe)=>{var ue=YE(),Ae=G(ue);M(Ae,()=>y.BoxGeometry,(Se,Ce)=>{Ce(Se,{args:[.12,.3,.12]})});var N=P(Ae,2);{let Se=R(()=>p(_)==="coffee-table"?m:c);M(N,()=>y.MeshStandardMaterial,(Ce,Ie)=>{Ie(Ce,{get color(){return p(Se)}})})}V(ie,ue)},$$slots:{default:!0}})})}V(te,xe)});var X=P(ae,2);M(X,()=>y.Mesh,(te,re)=>{re(te,{position:[1.1,g+.42,2.1],name:"dining-table",children:(xe,Le)=>{var Te=ZE(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[2.1,.18,1.25]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="dining-table"?m:c);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var j=P(X,2);M(j,()=>y.Mesh,(te,re)=>{re(te,{position:[1.1,g+.2,2.1],name:"dining-table",children:(xe,Le)=>{var Te=JE(),$e=G(Te);M($e,()=>y.CylinderGeometry,(ie,pe)=>{pe(ie,{args:[.12,.16,.4,10]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="dining-table"?m:c);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var me=P(j,2);Qt(me,16,()=>[[-.2,2.1],[2.4,2.1],[1.1,.95],[1.1,3.25]],jt,(te,re)=>{var xe=R(()=>Es(re,2));let Le=()=>p(xe)[0],Te=()=>p(xe)[1];var $e=QE(),Oe=G($e);{let pe=R(()=>[Le(),g+.28,Te()]);M(Oe,()=>y.Mesh,(ue,Ae)=>{Ae(ue,{get position(){return p(pe)},name:"dining-chair",children:(N,Se)=>{var Ce=KE(),Ie=G(Ce);M(Ie,()=>y.BoxGeometry,(L,T)=>{T(L,{args:[.55,.18,.55]})});var ye=P(Ie,2);{let L=R(()=>p(_)==="dining-chair"?m:u);M(ye,()=>y.MeshStandardMaterial,(T,W)=>{W(T,{get color(){return p(L)}})})}V(N,Ce)},$$slots:{default:!0}})})}var ie=P(Oe,2);{let pe=R(()=>[Le(),g+.72,Te()+.18]);M(ie,()=>y.Mesh,(ue,Ae)=>{Ae(ue,{get position(){return p(pe)},name:"dining-chair",children:(N,Se)=>{var Ce=jE(),Ie=G(Ce);M(Ie,()=>y.BoxGeometry,(L,T)=>{T(L,{args:[.55,.85,.12]})});var ye=P(Ie,2);{let L=R(()=>p(_)==="dining-chair"?m:u);M(ye,()=>y.MeshStandardMaterial,(T,W)=>{W(T,{get color(){return p(L)}})})}V(N,Ce)},$$slots:{default:!0}})})}V(te,$e)});var Re=P(me,2);M(Re,()=>y.Mesh,(te,re)=>{re(te,{position:[-3.5,g+.28,-2.9],name:"bed",children:(xe,Le)=>{var Te=eC(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[2.5,.35,3.1]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="bed"?m:d);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var be=P(Re,2);M(be,()=>y.Mesh,(te,re)=>{re(te,{position:[-3.5,g+.55,-2.9],name:"bed",children:(xe,Le)=>{var Te=tC(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[2.3,.35,2.75]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="bed"?m:h);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var Ve=P(be,2);M(Ve,()=>y.Mesh,(te,re)=>{re(te,{position:[-4.1,g+.78,-4],name:"bed",children:(xe,Le)=>{var Te=nC(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[.9,.18,.45]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="bed"?m:f);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var Qe=P(Ve,2);M(Qe,()=>y.Mesh,(te,re)=>{re(te,{position:[-2,g+.38,-4.15],name:"nightstand",children:(xe,Le)=>{var Te=iC(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[.75,.75,.65]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="nightstand"?m:c);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var Ge=P(Qe,2);M(Ge,()=>y.Mesh,(te,re)=>{re(te,{position:[2,g+.65,-1.6],name:"kitchen-counter",children:(xe,Le)=>{var Te=rC(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[2.8,1.3,.9]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="kitchen-counter"?m:o);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})});var oe=P(Ge,2);M(oe,()=>y.Mesh,(te,re)=>{re(te,{position:[2,g+1.34,-1.6],name:"countertop",children:(xe,Le)=>{var Te=sC(),$e=G(Te);M($e,()=>y.BoxGeometry,(ie,pe)=>{pe(ie,{args:[3,.12,1.05]})});var Oe=P($e,2);{let ie=R(()=>p(_)==="countertop"?m:a);M(Oe,()=>y.MeshStandardMaterial,(pe,ue)=>{ue(pe,{get color(){return p(ie)}})})}V(xe,Te)},$$slots:{default:!0}})}),V(U,ne)},$$slots:{default:!0}})})}V(r,b),Fn()}var cC=Y("<!> <!>",1),uC=Y("<!> <!>",1),hC=Y("<!> <!>",1),dC=Y("<!> <!>",1),fC=Y("<!> <!>",1),pC=Y("<!> <!>",1),mC=Y("<!> <!>",1),gC=Y("<!> <!>",1),vC=Y("<!> <!>",1),_C=Y("<!> <!> <!>  <!> <!> <!>",1),xC=Y("<!> <!>",1),yC=Y("<!> <!>",1),MC=Y("<!> <!>",1),SC=Y("<!> <!>",1),bC=Y("<!> <!> <!>",1),wC=Y("<!> <!>",1),TC=Y("<!> <!>",1),AC=Y("<!> <!>",1),EC=Y("<!> <!> <!>",1),CC=Y("<!> <!>",1),PC=Y("<!> <!>",1),RC=Y("<!> <!>",1),IC=Y("<!> <!>",1),DC=Y("<!> <!>",1),LC=Y("<!> <!>",1),NC=Y("<!> <!>",1),UC=Y("<!> <!>",1),FC=Y("<!> <!>",1),OC=Y("<!> <!>",1),BC=Y("<!> <!>",1),zC=Y("<!> <!>",1),$C=Y("<!> <!> <!> <!> <!>",1),kC=Y("<!> <!>",1),VC=Y("<!> <!>",1),GC=Y("<!> <!>",1),HC=Y("<!> <!>",1),WC=Y("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),XC=Y("<!> <!> <!> <!>",1);function qC(r,e){Un(e,!0);const t=12,n=10,i=.15,o=Math.floor(t/1.5)+1,a=Math.floor(o/3);function l(Pe){return-t/2+Pe*t/(o-1)}const c=l(a)+i/2,u=l(a+2)-i/2,d=(c+u)/2,h="#555555",f="#3d7a3d",m="#5a4a3a",_="#2d5a2d",g="#b99d78",v="#8a4f2a",x="#4b2f25",S="#d0b28c",b="#b9c2c8",I="#050505",A="#4fc3f7";let D=Yt(null);const w=new Ti().moveTo(-.5,0).lineTo(-.5,.56).quadraticCurveTo(0,1.05,.5,.56).lineTo(.5,0).lineTo(-.5,0),E=new Ti().moveTo(-.39,0).lineTo(-.39,.52).quadraticCurveTo(0,.88,.39,.52).lineTo(.39,0).lineTo(-.39,0),O=6,U=10.4,H=30,ne=30,K=0,he=.9,fe=1.7,ae=.12,X=1.2,j=.09,me=O+1.2,Re=Math.max(ae,j)/2,be=-H/2+he+Re,Ve=H/2-he-Re,Qe=.48,Ge=.45,oe=ne/2-he-Re+Ge,te=-ne/2+he+Re+Ge,re=be+Qe,xe=Ve+Qe,Le=(re+xe)/2,Te=(oe+te)/2,$e=xe-re,Oe=oe-te,ie=d-me/2,pe=d+me/2,ue=ie+Qe,Ae=pe+Qe,N=[[re,oe],[xe,oe],[re,te],[xe,te],[ue,oe],[Ae,oe],[re,Te],[xe,Te],[Le,te]];function Se(Pe,Me){return[(Pe[0]+Me[0])/2,(Pe[1]+Me[1])/2]}const Ce=[Se([re,oe],[ue,oe]),Se([Ae,oe],[xe,oe]),Se([re,oe],[re,Te]),Se([re,Te],[re,te]),Se([xe,oe],[xe,Te]),Se([xe,Te],[xe,te]),Se([re,te],[Le,te]),Se([Le,te],[xe,te])],Ie=[...N,...Ce];function ye(Pe){Pe.stopPropagation();const Me=Pe?.object?.name??null;dn(Me),Ct(D,Me,!0)}function L(){dn(null),Ct(D,null)}var T=XC(),W=G(T);{let Pe=R(()=>hn.get()>=10);M(W,()=>y.Group,(Me,He)=>{He(Me,{get visible(){return p(Pe)},onpointermove:ye,onpointerleave:L,children:(qe,Ee)=>{var De=hC(),we=G(De);{let Z=R(()=>[d,.02,n/2+U/2]);M(we,()=>y.Mesh,(le,F)=>{F(le,{get position(){return p(Z)},name:"walkway",children:(ee,Q)=>{var ce=cC(),$=G(ce);M($,()=>y.BoxGeometry,(ge,ze)=>{ze(ge,{args:[O,.08,U]})});var z=P($,2);{let ge=R(()=>p(D)==="walkway"?A:h);M(z,()=>y.MeshStandardMaterial,(ze,ke)=>{ke(ze,{get color(){return p(ge)}})})}V(ee,ce)},$$slots:{default:!0}})})}var k=P(we,2);{let Z=R(()=>[d,.02,n/2+1.5]);M(k,()=>y.Mesh,(le,F)=>{F(le,{get position(){return p(Z)},name:"walkway",children:(ee,Q)=>{var ce=uC(),$=G(ce);M($,()=>y.BoxGeometry,(ge,ze)=>{ze(ge,{args:[1.5,.06,3]})});var z=P($,2);{let ge=R(()=>p(D)==="walkway"?A:h);M(z,()=>y.MeshStandardMaterial,(ze,ke)=>{ke(ze,{get color(){return p(ge)}})})}V(ee,ce)},$$slots:{default:!0}})})}V(qe,De)},$$slots:{default:!0}})})}var ve=P(W,2);{let Pe=R(()=>hn.get()>=12);M(ve,()=>y.Group,(Me,He)=>{He(Me,{get visible(){return p(Pe)},onpointermove:ye,onpointerleave:L,children:(qe,Ee)=>{const De=R(()=>ue-re),we=R(()=>xe-Ae);var k=_C(),Z=G(k);M(Z,()=>y.Mesh,($,z)=>{z($,{position:[Le,X,te],name:"fence",children:(ge,ze)=>{var ke=dC(),Ue=G(ke);M(Ue,()=>y.BoxGeometry,(ot,Ze)=>{Ze(ot,{args:[$e,j,j]})});var je=P(Ue,2);{let ot=R(()=>p(D)==="fence"?A:g);M(je,()=>y.MeshStandardMaterial,(Ze,rt)=>{rt(Ze,{get color(){return p(ot)}})})}V(ge,ke)},$$slots:{default:!0}})});var le=P(Z,2);M(le,()=>y.Mesh,($,z)=>{z($,{position:[re,X,Te],name:"fence",children:(ge,ze)=>{var ke=fC(),Ue=G(ke);M(Ue,()=>y.BoxGeometry,(ot,Ze)=>{Ze(ot,{args:[j,j,Oe]})});var je=P(Ue,2);{let ot=R(()=>p(D)==="fence"?A:g);M(je,()=>y.MeshStandardMaterial,(Ze,rt)=>{rt(Ze,{get color(){return p(ot)}})})}V(ge,ke)},$$slots:{default:!0}})});var F=P(le,2);M(F,()=>y.Mesh,($,z)=>{z($,{position:[xe,X,Te],name:"fence",children:(ge,ze)=>{var ke=pC(),Ue=G(ke);M(Ue,()=>y.BoxGeometry,(ot,Ze)=>{Ze(ot,{args:[j,j,Oe]})});var je=P(Ue,2);{let ot=R(()=>p(D)==="fence"?A:g);M(je,()=>y.MeshStandardMaterial,(Ze,rt)=>{rt(Ze,{get color(){return p(ot)}})})}V(ge,ke)},$$slots:{default:!0}})});var ee=P(F,2);{let $=R(()=>[re+p(De)/2,X,oe]);M(ee,()=>y.Mesh,(z,ge)=>{ge(z,{get position(){return p($)},name:"fence",children:(ze,ke)=>{var Ue=mC(),je=G(Ue);{let Ze=R(()=>[p(De),j,j]);M(je,()=>y.BoxGeometry,(rt,vt)=>{vt(rt,{get args(){return p(Ze)}})})}var ot=P(je,2);{let Ze=R(()=>p(D)==="fence"?A:g);M(ot,()=>y.MeshStandardMaterial,(rt,vt)=>{vt(rt,{get color(){return p(Ze)}})})}V(ze,Ue)},$$slots:{default:!0}})})}var Q=P(ee,2);{let $=R(()=>[Ae+p(we)/2,X,oe]);M(Q,()=>y.Mesh,(z,ge)=>{ge(z,{get position(){return p($)},name:"fence",children:(ze,ke)=>{var Ue=gC(),je=G(Ue);{let Ze=R(()=>[p(we),j,j]);M(je,()=>y.BoxGeometry,(rt,vt)=>{vt(rt,{get args(){return p(Ze)}})})}var ot=P(je,2);{let Ze=R(()=>p(D)==="fence"?A:g);M(ot,()=>y.MeshStandardMaterial,(rt,vt)=>{vt(rt,{get color(){return p(Ze)}})})}V(ze,Ue)},$$slots:{default:!0}})})}var ce=P(Q,2);Qt(ce,17,()=>Ie,jt,($,z)=>{var ge=R(()=>Es(p(z),2));let ze=()=>p(ge)[0],ke=()=>p(ge)[1];var Ue=Ut(),je=G(Ue);{let ot=R(()=>[ze(),fe/2,ke()]);M(je,()=>y.Mesh,(Ze,rt)=>{rt(Ze,{get position(){return p(ot)},name:"fence",children:(vt,bt)=>{var ft=vC(),_t=G(ft);M(_t,()=>y.BoxGeometry,(gt,ct)=>{ct(gt,{args:[ae,fe,ae]})});var pt=P(_t,2);{let gt=R(()=>p(D)==="fence"?A:g);M(pt,()=>y.MeshStandardMaterial,(ct,xt)=>{xt(ct,{get color(){return p(gt)}})})}V(vt,ft)},$$slots:{default:!0}})})}V($,Ue)}),V(qe,k)},$$slots:{default:!0}})})}var Ne=P(ve,2);{let Pe=R(()=>hn.get()>=12);M(Ne,()=>y.Group,(Me,He)=>{He(Me,{get visible(){return p(Pe)},onpointermove:ye,onpointerleave:L,children:(qe,Ee)=>{var De=Ut(),we=G(De);M(we,()=>y.Mesh,(k,Z)=>{Z(k,{position:[0,K,0],rotation:[-Math.PI/2,0,0],children:(le,F)=>{var ee=xC(),Q=G(ee);M(Q,()=>y.PlaneGeometry,($,z)=>{z($,{args:[H,ne]})});var ce=P(Q,2);M(ce,()=>y.MeshStandardMaterial,($,z)=>{z($,{color:f})}),V(le,ee)},$$slots:{default:!0}})}),V(qe,De)},$$slots:{default:!0}})})}var _e=P(Ne,2);{let Pe=R(()=>hn.get()>=12);M(_e,()=>y.Group,(Me,He)=>{He(Me,{get visible(){return p(Pe)},onpointermove:ye,onpointerleave:L,children:(qe,Ee)=>{var De=WC(),we=G(De);M(we,()=>y.Group,(ke,Ue)=>{Ue(ke,{position:[-10,0,n/2+8],children:(je,ot)=>{var Ze=bC(),rt=G(Ze);M(rt,()=>y.Mesh,(ft,_t)=>{_t(ft,{position:[0,1.5,0],name:"tree-trunk",children:(pt,gt)=>{var ct=yC(),xt=G(ct);M(xt,()=>y.CylinderGeometry,(Be,Je)=>{Je(Be,{args:[.3,.4,3,8]})});var et=P(xt,2);{let Be=R(()=>p(D)==="tree-trunk"?A:m);M(et,()=>y.MeshStandardMaterial,(Je,tt)=>{tt(Je,{get color(){return p(Be)}})})}V(pt,ct)},$$slots:{default:!0}})});var vt=P(rt,2);M(vt,()=>y.Mesh,(ft,_t)=>{_t(ft,{position:[0,4.5,0],name:"tree-foliage",children:(pt,gt)=>{var ct=MC(),xt=G(ct);M(xt,()=>y.ConeGeometry,(Be,Je)=>{Je(Be,{args:[2,4,8]})});var et=P(xt,2);{let Be=R(()=>p(D)==="tree-foliage"?A:_);M(et,()=>y.MeshStandardMaterial,(Je,tt)=>{tt(Je,{get color(){return p(Be)}})})}V(pt,ct)},$$slots:{default:!0}})});var bt=P(vt,2);M(bt,()=>y.Mesh,(ft,_t)=>{_t(ft,{position:[0,3.5,0],name:"tree-foliage",children:(pt,gt)=>{var ct=SC(),xt=G(ct);M(xt,()=>y.ConeGeometry,(Be,Je)=>{Je(Be,{args:[2.5,3,8]})});var et=P(xt,2);{let Be=R(()=>p(D)==="tree-foliage"?A:_);M(et,()=>y.MeshStandardMaterial,(Je,tt)=>{tt(Je,{get color(){return p(Be)}})})}V(pt,ct)},$$slots:{default:!0}})}),V(je,Ze)},$$slots:{default:!0}})});var k=P(we,2);M(k,()=>y.Group,(ke,Ue)=>{Ue(ke,{position:[8,0,-n/2-6],children:(je,ot)=>{var Ze=EC(),rt=G(Ze);M(rt,()=>y.Mesh,(ft,_t)=>{_t(ft,{position:[0,1.75,0],name:"tree-trunk",children:(pt,gt)=>{var ct=wC(),xt=G(ct);M(xt,()=>y.CylinderGeometry,(Be,Je)=>{Je(Be,{args:[.35,.45,3.5,8]})});var et=P(xt,2);{let Be=R(()=>p(D)==="tree-trunk"?A:m);M(et,()=>y.MeshStandardMaterial,(Je,tt)=>{tt(Je,{get color(){return p(Be)}})})}V(pt,ct)},$$slots:{default:!0}})});var vt=P(rt,2);M(vt,()=>y.Mesh,(ft,_t)=>{_t(ft,{position:[0,5,0],name:"tree-foliage",children:(pt,gt)=>{var ct=TC(),xt=G(ct);M(xt,()=>y.ConeGeometry,(Be,Je)=>{Je(Be,{args:[2.2,4,8]})});var et=P(xt,2);{let Be=R(()=>p(D)==="tree-foliage"?A:_);M(et,()=>y.MeshStandardMaterial,(Je,tt)=>{tt(Je,{get color(){return p(Be)}})})}V(pt,ct)},$$slots:{default:!0}})});var bt=P(vt,2);M(bt,()=>y.Mesh,(ft,_t)=>{_t(ft,{position:[0,3.8,0],name:"tree-foliage",children:(pt,gt)=>{var ct=AC(),xt=G(ct);M(xt,()=>y.ConeGeometry,(Be,Je)=>{Je(Be,{args:[2.8,3,8]})});var et=P(xt,2);{let Be=R(()=>p(D)==="tree-foliage"?A:_);M(et,()=>y.MeshStandardMaterial,(Je,tt)=>{tt(Je,{get color(){return p(Be)}})})}V(pt,ct)},$$slots:{default:!0}})}),V(je,Ze)},$$slots:{default:!0}})});var Z=P(k,2);M(Z,()=>y.Mesh,(ke,Ue)=>{Ue(ke,{position:[-5,.6,n/2+.8],name:"shrub",children:(je,ot)=>{var Ze=CC(),rt=G(Ze);M(rt,()=>y.SphereGeometry,(bt,ft)=>{ft(bt,{args:[.8,8,6]})});var vt=P(rt,2);{let bt=R(()=>p(D)==="shrub"?A:_);M(vt,()=>y.MeshStandardMaterial,(ft,_t)=>{_t(ft,{get color(){return p(bt)}})})}V(je,Ze)},$$slots:{default:!0}})});var le=P(Z,2);M(le,()=>y.Mesh,(ke,Ue)=>{Ue(ke,{position:[-3.5,.5,n/2+.8],name:"shrub",children:(je,ot)=>{var Ze=PC(),rt=G(Ze);M(rt,()=>y.SphereGeometry,(bt,ft)=>{ft(bt,{args:[.7,8,6]})});var vt=P(rt,2);{let bt=R(()=>p(D)==="shrub"?A:_);M(vt,()=>y.MeshStandardMaterial,(ft,_t)=>{_t(ft,{get color(){return p(bt)}})})}V(je,Ze)},$$slots:{default:!0}})});var F=P(le,2);M(F,()=>y.Mesh,(ke,Ue)=>{Ue(ke,{position:[5,.55,n/2+.8],name:"shrub",children:(je,ot)=>{var Ze=RC(),rt=G(Ze);M(rt,()=>y.SphereGeometry,(bt,ft)=>{ft(bt,{args:[.75,8,6]})});var vt=P(rt,2);{let bt=R(()=>p(D)==="shrub"?A:_);M(vt,()=>y.MeshStandardMaterial,(ft,_t)=>{_t(ft,{get color(){return p(bt)}})})}V(je,Ze)},$$slots:{default:!0}})});var ee=P(F,2);M(ee,()=>y.Mesh,(ke,Ue)=>{Ue(ke,{position:[3.5,.45,n/2+.8],name:"shrub",children:(je,ot)=>{var Ze=IC(),rt=G(Ze);M(rt,()=>y.SphereGeometry,(bt,ft)=>{ft(bt,{args:[.6,8,6]})});var vt=P(rt,2);{let bt=R(()=>p(D)==="shrub"?A:_);M(vt,()=>y.MeshStandardMaterial,(ft,_t)=>{_t(ft,{get color(){return p(bt)}})})}V(je,Ze)},$$slots:{default:!0}})});var Q=P(ee,2);M(Q,()=>y.Mesh,(ke,Ue)=>{Ue(ke,{position:[-3,.5,-n/2-.8],name:"shrub",children:(je,ot)=>{var Ze=DC(),rt=G(Ze);M(rt,()=>y.SphereGeometry,(bt,ft)=>{ft(bt,{args:[.7,8,6]})});var vt=P(rt,2);{let bt=R(()=>p(D)==="shrub"?A:_);M(vt,()=>y.MeshStandardMaterial,(ft,_t)=>{_t(ft,{get color(){return p(bt)}})})}V(je,Ze)},$$slots:{default:!0}})});var ce=P(Q,2);M(ce,()=>y.Mesh,(ke,Ue)=>{Ue(ke,{position:[3,.55,-n/2-.8],name:"shrub",children:(je,ot)=>{var Ze=LC(),rt=G(Ze);M(rt,()=>y.SphereGeometry,(bt,ft)=>{ft(bt,{args:[.75,8,6]})});var vt=P(rt,2);{let bt=R(()=>p(D)==="shrub"?A:_);M(vt,()=>y.MeshStandardMaterial,(ft,_t)=>{_t(ft,{get color(){return p(bt)}})})}V(je,Ze)},$$slots:{default:!0}})});var $=P(ce,2);Qt($,16,()=>[-12.5,-10.5,-8.5,-6.5,-4.5,-2.5,-.5,1.5,3.5,5.5,7.5,9.5,11.5,13.5],jt,(ke,Ue)=>{var je=Ut(),ot=G(je);{let Ze=R(()=>[Ue,.58,te+.9]);M(ot,()=>y.Mesh,(rt,vt)=>{vt(rt,{get position(){return p(Ze)},name:"shrub",children:(bt,ft)=>{var _t=NC(),pt=G(_t);M(pt,()=>y.SphereGeometry,(ct,xt)=>{xt(ct,{args:[.72,8,6]})});var gt=P(pt,2);{let ct=R(()=>p(D)==="shrub"?A:_);M(gt,()=>y.MeshStandardMaterial,(xt,et)=>{et(xt,{get color(){return p(ct)}})})}V(bt,_t)},$$slots:{default:!0}})})}V(ke,je)});var z=P($,2);M(z,()=>y.Group,(ke,Ue)=>{Ue(ke,{position:[-t/2-3.4,0,-1.5],children:(je,ot)=>{var Ze=$C(),rt=G(Ze);M(rt,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[0,.8,0],name:"dog-house",children:(ct,xt)=>{var et=UC(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[2.1,1.6,1.8]})});var Je=P(Be,2);{let tt=R(()=>p(D)==="dog-house"?A:v);M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var vt=P(rt,2);M(vt,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[0,1.78,-.48],rotation:[-.35,0,0],name:"dog-house",children:(ct,xt)=>{var et=FC(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[2.35,.16,1.18]})});var Je=P(Be,2);{let tt=R(()=>p(D)==="dog-house"?A:x);M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var bt=P(vt,2);M(bt,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[0,1.78,.48],rotation:[.35,0,0],name:"dog-house",children:(ct,xt)=>{var et=OC(),Be=G(et);M(Be,()=>y.BoxGeometry,(tt,Ye)=>{Ye(tt,{args:[2.35,.16,1.18]})});var Je=P(Be,2);{let tt=R(()=>p(D)==="dog-house"?A:x);M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var ft=P(bt,2);M(ft,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[0,.18,.93],name:"dog-house",children:(ct,xt)=>{var et=BC(),Be=G(et);{let tt=R(()=>[w]);M(Be,()=>y.ShapeGeometry,(Ye,Fe)=>{Fe(Ye,{get args(){return p(tt)}})})}var Je=P(Be,2);{let tt=R(()=>p(D)==="dog-house"?A:S);M(Je,()=>y.MeshStandardMaterial,(Ye,Fe)=>{Fe(Ye,{get color(){return p(tt)}})})}V(ct,et)},$$slots:{default:!0}})});var _t=P(ft,2);M(_t,()=>y.Mesh,(pt,gt)=>{gt(pt,{position:[0,.18,.96],name:"dog-house",children:(ct,xt)=>{var et=zC(),Be=G(et);{let tt=R(()=>[E]);M(Be,()=>y.ShapeGeometry,(Ye,Fe)=>{Fe(Ye,{get args(){return p(tt)}})})}var Je=P(Be,2);M(Je,()=>y.MeshStandardMaterial,(tt,Ye)=>{Ye(tt,{color:"#171717"})}),V(ct,et)},$$slots:{default:!0}})}),V(je,Ze)},$$slots:{default:!0}})});var ge=P(z,2);M(ge,()=>y.Group,(ke,Ue)=>{Ue(ke,{position:[-t/2-2.4,.08,1],children:(je,ot)=>{var Ze=GC(),rt=G(Ze);M(rt,()=>y.Mesh,(bt,ft)=>{ft(bt,{name:"dog-plate",children:(_t,pt)=>{var gt=kC(),ct=G(gt);M(ct,()=>y.CylinderGeometry,(et,Be)=>{Be(et,{args:[.48,.58,.16,24]})});var xt=P(ct,2);{let et=R(()=>p(D)==="dog-plate"?A:b);M(xt,()=>y.MeshStandardMaterial,(Be,Je)=>{Je(Be,{get color(){return p(et)}})})}V(_t,gt)},$$slots:{default:!0}})});var vt=P(rt,2);M(vt,()=>y.Mesh,(bt,ft)=>{ft(bt,{position:[0,.08,0],name:"dog-plate",children:(_t,pt)=>{var gt=VC(),ct=G(gt);M(ct,()=>y.CylinderGeometry,(et,Be)=>{Be(et,{args:[.36,.42,.05,24]})});var xt=P(ct,2);{let et=R(()=>p(D)==="dog-plate"?A:"#6f777d");M(xt,()=>y.MeshStandardMaterial,(Be,Je)=>{Je(Be,{get color(){return p(et)}})})}V(_t,gt)},$$slots:{default:!0}})}),V(je,Ze)},$$slots:{default:!0}})});var ze=P(ge,2);M(ze,()=>y.Mesh,(ke,Ue)=>{Ue(ke,{position:[-2.5,.04,te+2.2],name:"rabbit-hole",children:(je,ot)=>{var Ze=HC(),rt=G(Ze);M(rt,()=>y.CylinderGeometry,(bt,ft)=>{ft(bt,{args:[.48,.48,.05,32]})});var vt=P(rt,2);{let bt=R(()=>p(D)==="rabbit-hole"?A:I);M(vt,()=>y.MeshStandardMaterial,(ft,_t)=>{_t(ft,{get color(){return p(bt)}})})}V(je,Ze)},$$slots:{default:!0}})}),V(qe,De)},$$slots:{default:!0}})})}V(r,T),Fn()}var YC=Y("<!> <!>",1),ZC=Y("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function JC(r,e){Un(e,!0),o2();const t=new B(0,4,0),n=38,i=22;let s=Yt(void 0),o=R(()=>[Math.sin(e.viewAngle*Math.PI/180)*n,i,Math.cos(e.viewAngle*Math.PI/180)*n]);Gi(()=>{p(o),p(s)&&(p(s).lookAt(t),p(s).updateMatrixWorld())});var a=ZC(),l=G(a);y(l,{get is(){return vn},makeDefault:!0,fov:42,near:.1,far:1e3,get position(){return p(o)},get ref(){return p(s)},set ref(K){Ct(s,K,!0)}});var c=P(l,2);y(c,{get is(){return Zh},intensity:.7});var u=P(c,2);y(u,{get is(){return Yh},position:[15,20,10],intensity:1});var d=P(u,2);Zw(d,{position:[0,-.5,0],plane:"xz",cellColor:"#444444",cellThickness:.5,cellSize:1,fadeDistance:50,fadeStrength:1,followCamera:!1,infiniteGrid:!1,sectionColor:"#666666",sectionThickness:1,sectionSize:5,gridSize:[25,25]});var h=P(d,2);{var f=K=>{G2(K,{})};gn(h,K=>{e.step===1&&K(f)})}var m=P(h,2);{var _=K=>{B2(K,{})};gn(m,K=>{e.step===2&&K(_)})}var g=P(m,2);{var v=K=>{aT(K,{})};gn(g,K=>{e.step>=3&&K(v)})}var x=P(g,2);{var S=K=>{BT(K,{})};gn(x,K=>{e.step>=4&&K(S)})}var b=P(x,2);{var I=K=>{lA(K,{})};gn(b,K=>{e.step>=5&&K(I)})}var A=P(b,2);{var D=K=>{SA(K,{})};gn(A,K=>{e.step>=7&&K(D)})}var w=P(A,2);{var E=K=>{FE(K,{})};gn(w,K=>{e.step>=8&&K(E)})}var O=P(w,2);{var U=K=>{var he=YC(),fe=G(he);OA(fe,{});var ae=P(fe,2);lC(ae,{}),V(K,he)};gn(O,K=>{e.step>=10&&K(U)})}var H=P(O,2);{var ne=K=>{qC(K,{})};gn(H,K=>{e.step>=12&&K(ne)})}V(r,a),Fn()}var KC=Y('<div class="hover-tooltip svelte-1uha8ag"><span class="hover-tooltip-english svelte-1uha8ag"> </span> <span class="hover-tooltip-chinese svelte-1uha8ag"> </span></div>'),jC=Y('<div class="final-image-overlay svelte-1uha8ag" role="button" tabindex="0" aria-label="Close final image"><img alt="Final result" class="svelte-1uha8ag"/></div>'),QC=Y('<div class="container svelte-1uha8ag"><div class="control-panel svelte-1uha8ag"><header class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">飞牛培训</h1> <p class="subtitle svelte-1uha8ag">B类建筑承包商可交互式课程</p></header> <div class="step-info svelte-1uha8ag"><div class="step-number svelte-1uha8ag"> </div> <h2 class="svelte-1uha8ag"> </h2> <p class="description svelte-1uha8ag"> </p></div> <div aria-label="Audio player"><audio preload="auto" class="svelte-1uha8ag"></audio> <button class="audio-toggle svelte-1uha8ag" type="button"><span aria-hidden="true"> </span></button> <div class="audio-progress svelte-1uha8ag" role="slider" tabindex="0" aria-label="Audio seek"><div class="audio-progress-fill svelte-1uha8ag"></div></div> <div class="audio-time svelte-1uha8ag"> </div></div> <button class="image-button svelte-1uha8ag" type="button">查看此阶段真实图片</button> <div class="slider-container svelte-1uha8ag"><input type="range" min="1" class="slider svelte-1uha8ag"/> <div class="slider-labels svelte-1uha8ag"><span class="svelte-1uha8ag">1</span> <span class="svelte-1uha8ag"> </span></div></div> <div class="navigation svelte-1uha8ag"><button class="svelte-1uha8ag">上一步</button> <button class="svelte-1uha8ag">下一步</button></div></div> <div class="canvas-container svelte-1uha8ag" role="presentation"><!> <div class="view-angle-control svelte-1uha8ag" aria-label="3D view angle control"><label for="view-angle" class="svelte-1uha8ag"> </label> <input id="view-angle" type="range" min="0" max="360" step="1" class="slider svelte-1uha8ag"/></div> <!> <!></div></div>');function l3(r,e){Un(e,!0);let t=Yt(Yg(hn.get())),n=Yt(45),i=Yt(!1);fp(()=>{localStorage.getItem("house-visualizer-visited")||(Ct(i,!0),localStorage.setItem("house-visualizer-visited","true"),setTimeout(()=>{Ct(i,!1)},1e4))}),Gi(()=>{hn.set(p(t)),dn(null)});let s=R(C2),o=R(()=>E2.get()),a=R(()=>p(o)?A2(p(o)):null),l=Yt(0),c=Yt(0);function u(k){Ct(l,k.clientX,!0),Ct(c,k.clientY,!0)}function d(){p(t)>1&&gd(t,-1)}function h(){p(t)<Wa&&gd(t)}let f=Yt(void 0),m=Yt(!1),_=Yt(0),g=Yt(0);function v(k){if(Number.isFinite(k.duration)&&k.duration>0)return k.duration;if(k.seekable.length>0){const Z=k.seekable.end(k.seekable.length-1);if(Number.isFinite(Z)&&Z>0)return Z}return 0}function x(k){if(!isFinite(k)||isNaN(k))return"00:00";const Z=Math.floor(k/60),le=Math.floor(k%60);return`${Z.toString().padStart(2,"0")}:${le.toString().padStart(2,"0")}`}function S(){p(f)&&(p(m)?p(f).pause():p(f).play())}function b(){p(f)&&(Ct(_,p(f).currentTime,!0),Ct(g,v(p(f)),!0))}function I(){p(f)&&Ct(g,v(p(f)),!0)}function A(){Ct(m,!1)}function D(){Ct(m,!0)}function w(){Ct(m,!1)}function E(k){if(!p(f))return;const le=k.currentTarget.getBoundingClientRect();if(le.width<=0)return;const F=k.clientX-le.left,ee=Math.min(1,Math.max(0,F/le.width)),Q=v(p(f));Q&&(p(f).currentTime=ee*Q,Ct(_,p(f).currentTime,!0),Ct(g,Q,!0))}function O(k){if(!p(f))return;const Z=v(p(f));if(!Z)return;const le=10,F=5;switch(k.key){case"ArrowLeft":case"ArrowDown":k.preventDefault(),p(f).currentTime=Math.max(0,p(f).currentTime-F);break;case"ArrowRight":case"ArrowUp":k.preventDefault(),p(f).currentTime=Math.min(Z,p(f).currentTime+F);break;case"PageDown":k.preventDefault(),p(f).currentTime=Math.max(0,p(f).currentTime-le);break;case"PageUp":k.preventDefault(),p(f).currentTime=Math.min(Z,p(f).currentTime+le);break;case"Home":k.preventDefault(),p(f).currentTime=0;break;case"End":k.preventDefault(),p(f).currentTime=Z;break;default:return}Ct(_,p(f).currentTime,!0),Ct(g,Z,!0)}Gi(()=>{p(t),p(f)&&(p(f).pause(),p(f).currentTime=0,p(f).load(),Ct(m,!1),Ct(_,0),Ct(g,0))});let U=R(()=>p(g)>0?p(_)/p(g)*100:0),H=R(()=>`${_d}/audio/${p(s).audio}`),ne=Yt(!1);Gi(()=>{p(t),Ct(ne,!1)});function K(){p(s).imageLink?window.open(p(s).imageLink,"_blank"):Ct(ne,!p(ne))}function he(){Ct(ne,!1)}function fe(k){(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),he())}var ae=QC(),X=Jt(ae),j=P(Jt(X),2),me=Jt(j),Re=Jt(me);Kt(me);var be=P(me,2),Ve=Jt(be,!0);Kt(be);var Qe=P(be,2),Ge=Jt(Qe,!0);Kt(Qe),Kt(j);var oe=P(j,2);let te;var re=Jt(oe);Lu(re,k=>Ct(f,k),()=>p(f));var xe=P(re,2),Le=Jt(xe);let Te;var $e=Jt(Le,!0);Kt(Le),Kt(xe);var Oe=P(xe,2);Ji(Oe,"aria-valuemin",0);var ie=Jt(Oe);Kt(Oe);var pe=P(Oe,2),ue=Jt(pe);Kt(pe),Kt(oe);var Ae=P(oe,2),N=P(Ae,2),Se=Jt(N);vd(Se);var Ce=P(Se,2),Ie=P(Jt(Ce),2),ye=Jt(Ie,!0);Kt(Ie),Kt(Ce),Kt(N);var L=P(N,2),T=Jt(L),W=P(T,2);Kt(L),Kt(X);var ve=P(X,2),Ne=Jt(ve);_w(Ne,{children:(k,Z)=>{JC(k,{get step(){return p(t)},get viewAngle(){return p(n)}})},$$slots:{default:!0}});var _e=P(Ne,2),Pe=Jt(_e),Me=Jt(Pe);Kt(Pe);var He=P(Pe,2);vd(He),Kt(_e);var qe=P(_e,2);{var Ee=k=>{var Z=KC(),le=Jt(Z),F=Jt(le,!0);Kt(le);var ee=P(le,2),Q=Jt(ee,!0);Kt(ee),Kt(Z),zc(()=>{Sd(Z,`left: ${p(l)+14}px; top: ${p(c)+14}px;`),Di(F,p(a).english),Di(Q,p(a).chinese)}),V(k,Z)};gn(qe,k=>{p(a)&&k(Ee)})}var De=P(qe,2);{var we=k=>{var Z=jC(),le=Jt(Z);Kt(Z),zc(()=>Ji(le,"src",`${_d??""}/image/final.webp`)),Ii("click",Z,he),Ii("keydown",Z,fe),V(k,Z)};gn(De,k=>{p(ne)&&k(we)})}Kt(ve),Kt(ae),zc((k,Z,le)=>{Di(Re,`第 ${p(t)??""} 阶段`),Di(Ve,p(s).title),Di(Ge,p(s).description),te=Md(oe,1,"audio-player svelte-1uha8ag",null,te,{highlight:p(i)}),Ji(re,"src",p(H)),Ji(xe,"aria-label",p(m)?"Pause":"Play"),Te=Md(Le,1,"svelte-1uha8ag",null,Te,{playing:p(m)}),Di($e,p(m)?"⏸":"▶"),Ji(Oe,"aria-valuemax",p(g)>0?p(g):0),Ji(Oe,"aria-valuenow",p(_)),Ji(Oe,"aria-valuetext",k),Sd(ie,`width: ${p(U)??""}%`),Di(ue,`${Z??""} / ${le??""}`),Ji(Se,"max",Wa),Di(ye,Wa),T.disabled=p(t)===1,W.disabled=p(t)===Wa,Di(Me,`视角 ${p(n)??""}°`)},[()=>`${x(p(_))} of ${x(p(g))}`,()=>x(p(_)),()=>x(p(g))]),Vs("timeupdate",re,b),Vs("loadedmetadata",re,I),Vs("ended",re,A),Vs("play",re,D),Vs("pause",re,w),Ii("click",xe,S),Ii("click",Oe,E),Ii("keydown",Oe,O),Ii("click",Ae,K),bd(Se,()=>p(t),k=>Ct(t,k)),Ii("click",T,d),Ii("click",W,h),Ii("pointermove",ve,u),bd(He,()=>p(n),k=>Ct(n,k)),V(r,ae),Fn()}Jg(["click","keydown","pointermove"]);export{l3 as component};
