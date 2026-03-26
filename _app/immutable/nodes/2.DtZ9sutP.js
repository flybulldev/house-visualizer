import{c as Et,a as Z,f as ae}from"../chunks/4gcTZzGJ.js";import{h as ei,o as Ec,t as _g,c as Cc,F as xg,f as yg,U as v,$ as Mg,ap as Sg,a0 as id,n as Pc,e as Go,C as bg,aM as wg,ay as rd,a as us,b as wh,aV as Tg,s as Ag,aW as Qf,ah as Eg,aX as Cg,aL as Qh,aY as Pg,am as sd,aZ as Rg,a_ as Ig,aP as Dg,a$ as di,ac as Lg,r as ep,p as tp,b0 as Rc,q as Ng,b1 as Ug,b2 as Fg,aJ as Og,m as Bg,d as zg,l as kg,b3 as Vg,aQ as np,Q as Nl,a3 as ip,al as Gg,at as od,ax as ad,as as ld,A as cd,b4 as $g,b5 as Un,M as Ct,P as Ki,aS as I,b6 as Ul,b7 as Fn,v as Hg,aa as xt,u as An,w as K,x as En,Y as Xt,Z as qt,aR as Yt,aT as rp,_ as F,b8 as ho,a9 as Wg,y as Ic,b9 as hd}from"../chunks/C7F92k6Z.js";import{c as Xg,d as qg,e as Is,a as ar,s as Oi}from"../chunks/BPpL76f-.js";import{r as Fl,i as un,b as Th,s as sp,p as Bt,c as T}from"../chunks/CAPELuUC.js";import{s as Ol,a as Ds,r as Yg}from"../chunks/BnhjXkRO.js";import{g as Zg,w as eu,d as op,r as ap,b as ud}from"../chunks/Bxz6GZ13.js";function kt(r,e){return e}function Jg(r,e,t){for(var n=[],i=e.length,s,o=e.length,a=0;a<i;a++){let d=e[a];tp(d,()=>{if(s){if(s.pending.delete(d),s.done.add(d),s.pending.size===0){var u=r.outrogroups;Ah(r,Qh(s.done)),u.delete(s),u.size===0&&(r.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&t!==null;if(l){var c=t,h=c.parentNode;Og(h),h.append(c),r.items.clear()}Ah(r,e,!l)}else s={pending:new Set(e),done:new Set},(r.outrogroups??=new Set).add(s)}function Ah(r,e,t=!0){var n;if(r.pending.size>0){n=new Set;for(const o of r.pending.values())for(const a of o)n.add(r.items.get(a).e)}for(var i=0;i<e.length;i++){var s=e[i];if(n?.has(s)){s.f|=di;const o=document.createDocumentFragment();Bg(s,o)}else zg(e[i],t)}}var dd;function Vt(r,e,t,n,i,s=null){var o=r,a=new Map,l=(e&Qf)!==0;if(l){var c=r;o=ei?Ec(_g(c)):c.appendChild(Cc())}ei&&xg();var h=null,d=Eg(()=>{var y=t();return Cg(y)?y:y==null?[]:Qh(y)}),u,f=new Map,p=!0;function x(y){(_.effect.f&Lg)===0&&(_.pending.delete(y),_.fallback=h,Kg(_,u,o,e,n),h!==null&&(u.length===0?(h.f&di)===0?ep(h):(h.f^=di,qs(h,null,o)):tp(h,()=>{h=null})))}function m(y){_.pending.delete(y)}var g=yg(()=>{u=v(d);var y=u.length;let M=!1;if(ei){var C=Mg(o)===Sg;C!==(y===0)&&(o=id(),Ec(o),Pc(!1),M=!0)}for(var E=new Set,L=us,S=Ag(),A=0;A<y;A+=1){ei&&Go.nodeType===bg&&Go.data===wg&&(o=Go,M=!0,Pc(!1));var R=u[A],U=n(R,A),W=p?null:a.get(U);W?(W.v&&rd(W.v,R),W.i&&rd(W.i,A),S&&L.unskip_effect(W.e)):(W=jg(a,p?o:dd??=Cc(),R,U,A,i,e,t),p||(W.e.f|=di),a.set(U,W)),E.add(U)}if(y===0&&s&&!h&&(p?h=wh(()=>s(o)):(h=wh(()=>s(dd??=Cc())),h.f|=di)),y>E.size&&Tg(),ei&&y>0&&Ec(id()),!p)if(f.set(L,E),S){for(const[Y,ne]of a)E.has(Y)||L.skip_effect(ne.e);L.oncommit(x),L.ondiscard(m)}else x(L);M&&Pc(!0),v(d)}),_={effect:g,items:a,pending:f,outrogroups:null,fallback:h};p=!1,ei&&(o=Go)}function Ls(r){for(;r!==null&&(r.f&Ug)===0;)r=r.next;return r}function Kg(r,e,t,n,i){var s=(n&Fg)!==0,o=e.length,a=r.items,l=Ls(r.effect.first),c,h=null,d,u=[],f=[],p,x,m,g;if(s)for(g=0;g<o;g+=1)p=e[g],x=i(p,g),m=a.get(x).e,(m.f&di)===0&&(m.nodes?.a?.measure(),(d??=new Set).add(m));for(g=0;g<o;g+=1){if(p=e[g],x=i(p,g),m=a.get(x).e,r.outrogroups!==null)for(const R of r.outrogroups)R.pending.delete(m),R.done.delete(m);if((m.f&Rc)!==0&&(ep(m),s&&(m.nodes?.a?.unfix(),(d??=new Set).delete(m))),(m.f&di)!==0)if(m.f^=di,m===l)qs(m,null,t);else{var _=h?h.next:l;m===r.effect.last&&(r.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Bi(r,h,m),Bi(r,m,_),qs(m,_,t),h=m,u=[],f=[],l=Ls(h.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(u.length<f.length){var y=f[0],M;h=y.prev;var C=u[0],E=u[u.length-1];for(M=0;M<u.length;M+=1)qs(u[M],y,t);for(M=0;M<f.length;M+=1)c.delete(f[M]);Bi(r,C.prev,E.next),Bi(r,h,C),Bi(r,E,y),l=y,h=E,g-=1,u=[],f=[]}else c.delete(m),qs(m,l,t),Bi(r,m.prev,m.next),Bi(r,m,h===null?r.effect.first:h.next),Bi(r,h,m),h=m;continue}for(u=[],f=[];l!==null&&l!==m;)(c??=new Set).add(l),f.push(l),l=Ls(l.next);if(l===null)continue}(m.f&di)===0&&u.push(m),h=m,l=Ls(m.next)}if(r.outrogroups!==null){for(const R of r.outrogroups)R.pending.size===0&&(Ah(r,Qh(R.done)),r.outrogroups?.delete(R));r.outrogroups.size===0&&(r.outrogroups=null)}if(l!==null||c!==void 0){var L=[];if(c!==void 0)for(m of c)(m.f&Rc)===0&&L.push(m);for(;l!==null;)(l.f&Rc)===0&&l!==r.fallback&&L.push(l),l=Ls(l.next);var S=L.length;if(S>0){var A=(n&Qf)!==0&&o===0?t:null;if(s){for(g=0;g<S;g+=1)L[g].nodes?.a?.measure();for(g=0;g<S;g+=1)L[g].nodes?.a?.fix()}Jg(r,L,A)}}s&&Ng(()=>{if(d!==void 0)for(m of d)m.nodes?.a?.apply()})}function jg(r,e,t,n,i,s,o,a){var l=(o&Rg)!==0?(o&Ig)===0?Dg(t,!1,!1):sd(t):null,c=(o&Pg)!==0?sd(i):null;return{v:l,i:c,e:wh(()=>(s(e,l??t,c??i,a),()=>{r.delete(n)}))}}function qs(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&di)===0?e.nodes.start:t;n!==null;){var o=kg(n);if(s.before(n),n===i)return;n=o}}function Bi(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}const fd=[...` 	
\r\f \v\uFEFF`];function Qg(r,e,t){var n=""+r;if(t){for(var i of Object.keys(t))if(t[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||fd.includes(n[o-1]))&&(a===n.length||fd.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function e0(r,e){return r==null?null:String(r)}function t0(r,e,t,n,i,s){var o=r.__className;if(ei||o!==t||o===void 0){var a=Qg(t,n,s);(!ei||a!==r.getAttribute("class"))&&(a==null?r.removeAttribute("class"):r.className=a),r.__className=t}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&r.classList.toggle(l,c)}return s}function pd(r,e,t,n){var i=r.__style;if(ei||i!==e){var s=e0(e);(!ei||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r.__style=e}return n}function n0(r,e,t=e){var n=new WeakSet;Vg(r,"input",async i=>{var s=i?r.defaultValue:r.value;if(s=Dc(r)?Lc(s):s,t(s),us!==null&&n.add(us),await np(),s!==(s=e())){var o=r.selectionStart,a=r.selectionEnd,l=r.value.length;if(r.value=s??"",a!==null){var c=r.value.length;o===a&&a===l&&c>l?(r.selectionStart=c,r.selectionEnd=c):(r.selectionStart=o,r.selectionEnd=Math.min(a,c))}}}),(ei&&r.defaultValue!==r.value||Nl(e)==null&&r.value)&&(t(Dc(r)?Lc(r.value):r.value),us!==null&&n.add(us)),ip(()=>{var i=e();if(r===document.activeElement){var s=us;if(n.has(s))return}Dc(r)&&i===Lc(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function Dc(r){var e=r.type;return e==="number"||e==="range"}function Lc(r){return r===""?null:+r}function i0(r,e){var t=cd,n=ad,i=r();return{subscribe:eu(i,o=>{var a=i!==r(),l,c=ad,h=cd;od(n),ld(t);try{l=$g(()=>{ip(()=>{const d=r();a&&o(d)})})}finally{od(c),ld(h)}return a=!0,l}).subscribe}}function _s(r){let e;const t=Xg(i=>{let s=!1;const o=r.subscribe(a=>{e=a,s&&i()});return s=!0,o});function n(){return Gg()?(t(),e):Zg(r)}return"set"in r?{get current(){return n()},set current(i){r.set(i)}}:{get current(){return n()}}}const md=(r,e)=>{if(r===e)return!0;if(!r||!e)return!1;const t=r.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0},r0=()=>{const r=[],n={items:r,remember:(i,s)=>{for(let a=0;a<r.length;a++){const l=r[a];if(md(s,l.keys)&&l.promise)return l.promise}const o={promise:i(),keys:s};return r.push(o),o.promise},clear:i=>{for(let s=0;s<r.length;s++){const o=r[s];if(md(i,o.keys)){r.splice(s,1);return}}}};return Un("threlte-cache",n),n};const Bl="183",s0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},o0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lp=0,Eh=1,cp=2,a0=3,l0=0,Ks=1,js=2,ds=3,Di=0,wn=1,ni=2,mi=0,Cr=1,Ch=2,Ph=3,Rh=4,hp=5,c0=6,qi=100,up=101,dp=102,fp=103,pp=104,mp=200,gp=201,vp=202,_p=203,Va=204,Ga=205,xp=206,yp=207,Mp=208,Sp=209,bp=210,wp=211,Tp=212,Ap=213,Ep=214,$a=0,Ha=1,Wa=2,Rr=3,Xa=4,qa=5,Ya=6,Za=7,Do=0,Cp=1,Pp=2,ri=0,tu=1,nu=2,iu=3,ru=4,su=5,uo=6,ou=7,Ih="attached",Rp="detached",zl=300,gi=301,Qi=302,Qs=303,eo=304,As=306,fo=1e3,Nn=1001,po=1002,en=1003,au=1004,h0=1004,fs=1005,u0=1005,zt=1006,to=1007,d0=1007,fi=1008,f0=1008,Dn=1009,lu=1010,cu=1011,xs=1012,kl=1013,qn=1014,Sn=1015,vi=1016,Vl=1017,Gl=1018,ys=1020,hu=35902,uu=35899,du=1021,fu=1022,bn=1023,_i=1026,Yi=1027,$l=1028,Lo=1029,Ir=1030,Hl=1031,p0=1032,Wl=1033,no=33776,io=33777,ro=33778,so=33779,Ja=35840,Ka=35841,ja=35842,Qa=35843,el=36196,tl=37492,nl=37496,il=37488,rl=37489,sl=37490,ol=37491,al=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,vl=37818,_l=37819,xl=37820,yl=37821,Ml=36492,Sl=36494,bl=36495,wl=36283,Tl=36284,Al=36285,El=36286,Ip=2200,Dp=2201,Lp=2202,mo=2300,Cl=2301,Ba=2302,Dh=2303,Tr=2400,Ar=2401,go=2402,Xl=2500,pu=2501,m0=0,g0=1,v0=2,Np=3200,_0=3201,x0=3202,y0=3203,nr=0,Up=1,Pi="",In="srgb",Dr="srgb-linear",vo="linear",Lt="srgb",M0="",S0="rg",b0="ga",w0=0,br=7680,T0=7681,A0=7682,E0=7683,C0=34055,P0=34056,R0=5386,I0=512,D0=513,L0=514,N0=515,U0=516,F0=517,O0=518,Lh=519,Fp=512,Op=513,Bp=514,ql=515,zp=516,kp=517,Yl=518,Vp=519,_o=35044,B0=35048,z0=35040,k0=35045,V0=35049,G0=35041,$0=35046,H0=35050,W0=35042,X0="100",Nh="300 es",Vn=2e3,Lr=2001,q0={COMPUTE:"compute",RENDER:"render"},Y0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Z0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},J0={TEXTURE_COMPARE:"depthTextureCompare"};function K0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const j0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ps(r,e){return new j0[r](e)}function Gp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $p(){const r=xo("canvas");return r.style.display="block",r}const gd={};let er=null;function Q0(r){er=r}function ev(){return er}function yo(...r){const e="THREE."+r.shift();er?er("log",e,...r):console.log(e,...r)}function Hp(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Qe(...r){r=Hp(r);const e="THREE."+r.shift();if(er)er("warn",e,...r);else{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ht(...r){r=Hp(r);const e="THREE."+r.shift();if(er)er("error",e,...r);else{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Mo(...r){const e=r.join(" ");e in gd||(gd[e]=!0,Qe(...r))}function tv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const nv={[$a]:Ha,[Wa]:Ya,[Xa]:Za,[Rr]:qa,[Ha]:$a,[Ya]:Wa,[Za]:Xa,[qa]:Rr};class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vd=1234567;const Pr=Math.PI/180,Ms=180/Math.PI;function Gn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function mu(r,e){return(r%e+e)%e}function iv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function rv(r,e,t){return r!==e?(t-r)/(e-r):0}function oo(r,e,t){return(1-t)*r+t*e}function sv(r,e,t,n){return oo(r,e,1-Math.exp(-t*n))}function ov(r,e=1){return e-Math.abs(mu(r,e*2)-e)}function av(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function lv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function hv(r,e){return r+Math.random()*(e-r)}function uv(r){return r*(.5-Math.random())}function dv(r){r!==void 0&&(vd=r);let e=vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fv(r){return r*Pr}function pv(r){return r*Ms}function mv(r){return(r&r-1)===0&&r!==0}function gv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _v(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),u=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xv={DEG2RAD:Pr,RAD2DEG:Ms,generateUUID:Gn,clamp:_t,euclideanModulo:mu,mapLinear:iv,inverseLerp:rv,lerp:oo,damp:sv,pingpong:ov,smoothstep:av,smootherstep:lv,randInt:cv,randFloat:hv,randFloatSpread:uv,seededRandom:dv,degToRad:fv,radToDeg:pv,isPowerOfTwo:mv,ceilPowerOfTwo:gv,floorPowerOfTwo:vv,setQuaternionFromProperEuler:_v,normalize:bt,denormalize:Mn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const _=Math.acos(m),y=Math.sin(_);g=Math.sin(g*_)/y,a=Math.sin(a*_)/y,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new B,_d=new Tn;class Mt{constructor(e,t,n,i,s,o,a,l,c){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],_=i[1],y=i[4],M=i[7],C=i[2],E=i[5],L=i[8];return s[0]=o*x+a*_+l*C,s[3]=o*m+a*y+l*E,s[6]=o*g+a*M+l*L,s[1]=c*x+h*_+d*C,s[4]=c*m+h*y+d*E,s[7]=c*g+h*M+d*L,s[2]=u*x+f*_+p*C,s[5]=u*m+f*y+p*E,s[8]=u*g+f*M+p*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new Mt,xd=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yv(){const r={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Lt&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Dr]:{primaries:e,whitePoint:n,transfer:vo,toXYZ:xd,fromXYZ:yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:xd,fromXYZ:yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),r}const At=yv();function Ii(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hr;class Wp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=xo("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mv=0;class Zi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Fc(i[o].image)):s.push(Fc(i[o]))}else s=Fc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let Sv=0;const Oc=new B;class Jt extends xi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Nn,i=Nn,s=zt,o=fi,a=bn,l=Dn,c=Jt.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Gn(),this.name="",this.source=new Zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=zl;Jt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,C=(g+1)/2,E=(h+u)/4,L=(d+x)/4,S=(p+m)/4;return y>M&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=L/n):M>C?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=S/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=L/s,i=S/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gu extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Jt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends gu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zl extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bv extends $n{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Zl(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Jl extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wv extends $n{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Jl(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class ft{constructor(e,t,n,i,s,o,a,l,c,h,d,u,f,p,x,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,d,u,f,p,x,m)}set(e,t,n,i,s,o,a,l,c,h,d,u,f,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){const u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,Av)}lookAt(e,t,n){const i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),zi.crossVectors(n,zn),zi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),zi.crossVectors(n,zn)),zi.normalize(),$o.crossVectors(zn,zi),i[0]=zi.x,i[4]=$o.x,i[8]=zn.x,i[1]=zi.y,i[5]=$o.y,i[9]=zn.y,i[2]=zi.z,i[6]=$o.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],y=n[7],M=n[11],C=n[15],E=i[0],L=i[4],S=i[8],A=i[12],R=i[1],U=i[5],W=i[9],Y=i[13],ne=i[2],k=i[6],G=i[10],V=i[14],se=i[3],de=i[7],Ae=i[11],me=i[15];return s[0]=o*E+a*R+l*ne+c*se,s[4]=o*L+a*U+l*k+c*de,s[8]=o*S+a*W+l*G+c*Ae,s[12]=o*A+a*Y+l*V+c*me,s[1]=h*E+d*R+u*ne+f*se,s[5]=h*L+d*U+u*k+f*de,s[9]=h*S+d*W+u*G+f*Ae,s[13]=h*A+d*Y+u*V+f*me,s[2]=p*E+x*R+m*ne+g*se,s[6]=p*L+x*U+m*k+g*de,s[10]=p*S+x*W+m*G+g*Ae,s[14]=p*A+x*Y+m*V+g*me,s[3]=_*E+y*R+M*ne+C*se,s[7]=_*L+y*U+M*k+C*de,s[11]=_*S+y*W+M*G+C*Ae,s[15]=_*A+y*Y+M*V+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=l*f-c*u,y=a*f-c*d,M=a*u-l*d,C=o*f-c*h,E=o*u-l*h,L=o*d-a*h;return t*(x*_-m*y+g*M)-n*(p*_-m*C+g*E)+i*(p*y-x*C+g*L)-s*(p*M-x*E+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*a-n*o,y=t*l-i*o,M=t*c-s*o,C=n*l-i*a,E=n*c-s*a,L=i*c-s*l,S=h*x-d*p,A=h*m-u*p,R=h*g-f*p,U=d*m-u*x,W=d*g-f*x,Y=u*g-f*m,ne=_*Y-y*W+M*U+C*R-E*A+L*S;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/ne;return e[0]=(a*Y-l*W+c*U)*k,e[1]=(i*W-n*Y-s*U)*k,e[2]=(x*L-m*E+g*C)*k,e[3]=(u*E-d*L-f*C)*k,e[4]=(l*R-o*Y-c*A)*k,e[5]=(t*Y-i*R+s*A)*k,e[6]=(m*M-p*L-g*y)*k,e[7]=(h*L-u*M+f*y)*k,e[8]=(o*W-a*R+c*S)*k,e[9]=(n*R-t*W-s*S)*k,e[10]=(p*E-x*M+g*_)*k,e[11]=(d*M-h*E-f*_)*k,e[12]=(a*A-o*U-l*S)*k,e[13]=(t*U-n*A+i*S)*k,e[14]=(x*y-p*C-m*_)*k,e[15]=(h*C-d*y+u*_)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,x=o*h,m=o*d,g=a*d,_=l*c,y=l*h,M=l*d,C=n.x,E=n.y,L=n.z;return i[0]=(1-(x+g))*C,i[1]=(f+M)*C,i[2]=(p-y)*C,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(u+g))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(p+y)*L,i[9]=(m-_)*L,i[10]=(1-(u+x))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Wr.set(i[0],i[1],i[2]).length();const a=Wr.set(i[4],i[5],i[6]).length(),l=Wr.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Kn.copy(this);const c=1/o,h=1/a,d=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,t.setFromRotationMatrix(Kn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Vn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Vn)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Lr)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Vn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Vn)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Lr)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wr=new B,Kn=new ft,Tv=new B(0,0,0),Av=new B(1,1,1),zi=new B,$o=new B,zn=new B,Md=new ft,Sd=new Tn;class Hn{constructor(e=0,t=0,n=0,i=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Md,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const bd=new B,Xr=new Tn,Mi=new ft,Ho=new B,Ns=new B,Cv=new B,Pv=new Tn,wd=new B(1,0,0),Td=new B(0,1,0),Ad=new B(0,0,1),Ed={type:"added"},Rv={type:"removed"},qr={type:"childadded",child:null},Bc={type:"childremoved",child:null};class Pt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new B,t=new Hn,n=new Tn,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Mt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return bd.copy(e).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ho.copy(e):Ho.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ns,Ho,this.up):Mi.lookAt(Ho,Ns,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),Xr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),qr.child=e,this.dispatchEvent(qr),qr.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rv),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new B(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ms extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iv={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function zc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=At.workingColorSpace){if(e=mu(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zc(o,s,e+1/3),this.g=zc(o,s,e),this.b=zc(o,s,e-1/3)}return At.colorSpaceToWorking(this,i),this}setStyle(e,t=In){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=Xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return At.workingToColorSpace(gn.copy(this),e),Math.round(_t(gn.r*255,0,255))*65536+Math.round(_t(gn.g*255,0,255))*256+Math.round(_t(gn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(gn.copy(this),t);const n=gn.r,i=gn.g,s=gn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=In){At.workingToColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,i=gn.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Wo);const n=oo(ki.h,Wo.h,t),i=oo(ki.s,Wo.s,t),s=oo(ki.l,Wo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new it;it.NAMES=Xp;class jl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=t}clone(){return new jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ql{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=n}clone(){return new Ql(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let vu=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const jn=new B,Si=new B,kc=new B,bi=new B,Yr=new B,Zr=new B,Cd=new B,Vc=new B,Gc=new B,$c=new B,Hc=new Dt,Wc=new Dt,Xc=new Dt;class Ln{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jn.subVectors(e,t),i.cross(jn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jn.subVectors(i,t),Si.subVectors(n,t),kc.subVectors(e,t);const o=jn.dot(jn),a=jn.dot(Si),l=jn.dot(kc),c=Si.dot(Si),h=Si.dot(kc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Hc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Hc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Hc,s.x),o.addScaledVector(Wc,s.y),o.addScaledVector(Xc,s.z),o}static isFrontFacing(e,t,n,i){return jn.subVectors(n,t),Si.subVectors(e,t),jn.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Yr.subVectors(i,n),Zr.subVectors(s,n),Vc.subVectors(e,n);const l=Yr.dot(Vc),c=Zr.dot(Vc);if(l<=0&&c<=0)return t.copy(n);Gc.subVectors(e,i);const h=Yr.dot(Gc),d=Zr.dot(Gc);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Yr,o);$c.subVectors(e,s);const f=Yr.dot($c),p=Zr.dot($c);if(p>=0&&f<=p)return t.copy(s);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Zr,a);const m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Cd.subVectors(s,i),a=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector(Cd,a);const g=1/(m+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Yr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),qo.subVectors(this.max,Us),Jr.subVectors(e.a,Us),Kr.subVectors(e.b,Us),jr.subVectors(e.c,Us),Vi.subVectors(Kr,Jr),Gi.subVectors(jr,Kr),lr.subVectors(Jr,jr);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-lr.z,lr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,lr.z,0,-lr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-lr.y,lr.x,0];return!qc(t,Jr,Kr,jr,qo)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,Jr,Kr,jr,qo))?!1:(Yo.crossVectors(Vi,Gi),t=[Yo.x,Yo.y,Yo.z],qc(t,Jr,Kr,jr,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,Xo=new sn,Jr=new B,Kr=new B,jr=new B,Vi=new B,Gi=new B,lr=new B,Us=new B,qo=new B,Yo=new B,cr=new B;function qc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){cr.fromArray(r,s);const a=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),h=n.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ri=Dv();function Dv(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Rn(r){Math.abs(r)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),r=_t(r,-65504,65504),Ri.floatView[0]=r;const e=Ri.uint32View[0],t=e>>23&511;return Ri.baseTable[t]+((e&8388607)>>Ri.shiftTable[t])}function Ys(r){const e=r>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[e]+(r&1023)]+Ri.exponentTable[e],Ri.floatView[0]}class Lv{static toHalfFloat(e){return Rn(e)}static fromHalfFloat(e){return Ys(e)}}const nn=new B,Zo=new ke;let Nv=0;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}}class Uv extends Ft{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Fv extends Ft{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Ov extends Ft{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Bv extends Ft{constructor(e,t,n){super(new Int16Array(e),t,n)}}class _u extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zv extends Ft{constructor(e,t,n){super(new Int32Array(e),t,n)}}class xu extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kv extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ys(this.array[e*this.itemSize]);return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=Rn(t),this}getY(e){let t=Ys(this.array[e*this.itemSize+1]);return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=Rn(t),this}getZ(e){let t=Ys(this.array[e*this.itemSize+2]);return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=Rn(t),this}getW(e){let t=Ys(this.array[e*this.itemSize+3]);return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=Rn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=Rn(t),this.array[e+1]=Rn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=Rn(t),this.array[e+1]=Rn(n),this.array[e+2]=Rn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=Rn(t),this.array[e+1]=Rn(n),this.array[e+2]=Rn(i),this.array[e+3]=Rn(s),this}}class rt extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Vv=new sn,Fs=new B,Yc=new B;class on{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Yc)),this.expandByPoint(Fs.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gv=0;const Wn=new ft,Zc=new Pt,Qr=new B,kn=new sn,Os=new sn,hn=new B;class yt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K0(e)?xu:_u)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(kn.min,Os.min),kn.expandByPoint(hn),hn.addVectors(kn.max,Os.max),kn.expandByPoint(hn)):(kn.expandByPoint(Os.min),kn.expandByPoint(Os.max))}kn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),hn.add(Qr)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new B,l[S]=new B;const c=new B,h=new B,d=new B,u=new ke,f=new ke,p=new ke,x=new B,m=new B;function g(S,A,R){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,S),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(U),a[S].add(x),a[A].add(x),a[R].add(x),l[S].add(m),l[A].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,A=_.length;S<A;++S){const R=_[S],U=R.start,W=R.count;for(let Y=U,ne=U+W;Y<ne;Y+=3)g(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const y=new B,M=new B,C=new B,E=new B;function L(S){C.fromBufferAttribute(i,S),E.copy(C);const A=a[S];y.copy(A),y.sub(C.multiplyScalar(C.dot(A))).normalize(),M.crossVectors(E,A);const U=M.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,U)}for(let S=0,A=_.length;S<A;++S){const R=_[S],U=R.start,W=R.count;for(let Y=U,ne=U+W;Y<ne;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){const p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Ft(u,h,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ec{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_o,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new B;class Nr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let $v=0;class _n extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Cr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yu extends _n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let es;const Bs=new B,ts=new B,ns=new B,is=new ke,zs=new ke,qp=new ft,Jo=new B,ks=new B,Ko=new B,Pd=new ke,Jc=new ke,Rd=new ke;class Yp extends Pt{constructor(e=new yu){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ec(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Nr(n,3,0,!1)),es.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=es,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),qp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;jo(Jo.set(-.5,-.5,0),ns,o,ts,i,s),jo(ks.set(.5,-.5,0),ns,o,ts,i,s),jo(Ko.set(.5,.5,0),ns,o,ts,i,s),Pd.set(0,0),Jc.set(1,0),Rd.set(1,1);let a=e.ray.intersectTriangle(Jo,ks,Ko,!1,Bs);if(a===null&&(jo(ks.set(-.5,.5,0),ns,o,ts,i,s),Jc.set(0,1),a=e.ray.intersectTriangle(Jo,Ko,ks,!1,Bs),a===null))return;const l=e.ray.origin.distanceTo(Bs);l<e.near||l>e.far||t.push({distance:l,point:Bs.clone(),uv:Ln.getInterpolation(Bs,Jo,ks,Ko,Pd,Jc,Rd,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jo(r,e,t,n,i,s){is.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(zs.x=s*is.x-i*is.y,zs.y=i*is.x+s*is.y):zs.copy(is),r.copy(e),r.x+=zs.x,r.y+=zs.y,r.applyMatrix4(qp)}const Qo=new B,Id=new B;class Zp extends Pt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Qo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Qo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Qo.setFromMatrixPosition(e.matrixWorld),Id.setFromMatrixPosition(this.matrixWorld);const n=Qo.distanceTo(Id)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Ti=new B,Kc=new B,ea=new B,$i=new B,jc=new B,ta=new B,Qc=new B;class ir{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kc.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Kc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ea),a=$i.dot(this.direction),l=-$i.dot(ea),c=$i.lengthSq(),h=Math.abs(1-o*o);let d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Kc).addScaledVector(ea,u),f}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,s){jc.subVectors(t,e),ta.subVectors(n,e),Qc.crossVectors(jc,ta);let o=this.direction.dot(Qc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors($i,ta));if(l<0)return null;const c=a*this.direction.dot(jc.cross($i));if(c<0||l+c>o)return null;const h=-a*$i.dot(Qc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ni extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dd=new ft,hr=new ir,na=new on,Ld=new B,ia=new B,ra=new B,sa=new B,eh=new B,oa=new B,Nd=new B,aa=new B;class Kt extends Pt{constructor(e=new yt,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(eh.fromBufferAttribute(d,e),o?oa.addScaledVector(eh,h):oa.addScaledVector(eh.sub(t),h))}t.add(oa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(na.containsPoint(hr.origin)===!1&&(hr.intersectSphere(na,Ld)===null||hr.origin.distanceToSquared(Ld)>(e.far-e.near)**2))&&(Dd.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,C=y;M<C;M+=3){const E=a.getX(M),L=a.getX(M+1),S=a.getX(M+2);i=la(this,g,e,n,c,h,d,E,L,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);i=la(this,o,e,n,c,h,d,_,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,C=y;M<C;M+=3){const E=M,L=M+1,S=M+2;i=la(this,g,e,n,c,h,d,E,L,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=m,y=m+1,M=m+2;i=la(this,o,e,n,c,h,d,_,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hv(r,e,t,n,i,s,o,a){let l;if(e.side===wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Di,a),l===null)return null;aa.copy(a),aa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:r}}function la(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ia),r.getVertexPosition(l,ra),r.getVertexPosition(c,sa);const h=Hv(r,e,t,n,ia,ra,sa,Nd);if(h){const d=new B;Ln.getBarycoord(Nd,ia,ra,sa,d),i&&(h.uv=Ln.getInterpolatedAttribute(i,a,l,c,d,new ke)),s&&(h.uv1=Ln.getInterpolatedAttribute(s,a,l,c,d,new ke)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new B,materialIndex:0};Ln.getNormal(ia,ra,sa,u.normal),h.face=u,h.barycoord=d}return h}const Ud=new B,Fd=new Dt,Od=new Dt,Wv=new B,Bd=new ft,ca=new B,th=new on,zd=new ft,nh=new ir;class Jp extends Kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ih,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingSphere.expandByPoint(ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),th.copy(this.boundingSphere),th.applyMatrix4(i),e.ray.intersectsSphere(th)!==!1&&(zd.copy(i).invert(),nh.copy(e.ray).applyMatrix4(zd),!(this.boundingBox!==null&&nh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Fd.fromBufferAttribute(i.attributes.skinIndex,e),Od.fromBufferAttribute(i.attributes.skinWeight,e),Ud.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Od.getComponent(s);if(o!==0){const a=Fd.getComponent(s);Bd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Wv.copy(Ud).applyMatrix4(Bd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mu extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class si extends Jt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=en,h=en,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kd=new ft,Xv=new ft;class tc{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Xv;kd.multiplyMatrices(a,t[s]),kd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new si(t,e,e,bn,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Qe("Skeleton: No bone found with UUID:",s),o=new Mu),this.bones.push(o),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ss extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rs=new ft,Vd=new ft,ha=[],Gd=new sn,qv=new ft,Vs=new Kt,Gs=new on;class Kp extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Gd.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(Gd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Gs.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,rs),Vd.multiplyMatrices(n,rs),Vs.matrixWorld=Vd,Vs.raycast(e,ha);for(let o=0,a=ha.length;o<a;o++){const l=ha[o];l.instanceId=s,l.object=this,t.push(l)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(i*this.count),i,this.count,$l,Sn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ih=new B,Yv=new B,Zv=new Mt;class Ci{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ih.subVectors(n,t).cross(Yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ih),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zv.getNormalMatrix(e),i=this.coplanarPoint(ih).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new on,Jv=new ke(.5,.5),ua=new B;class Es{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,s=new Ci,o=new Ci){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],x=s[9],m=s[10],g=s[11],_=s[12],y=s[13],M=s[14],C=s[15];if(i[0].setComponents(c-o,f-h,g-p,C-_).normalize(),i[1].setComponents(c+o,f+h,g+p,C+_).normalize(),i[2].setComponents(c+a,f+d,g+x,C+y).normalize(),i[3].setComponents(c-a,f-d,g-x,C-y).normalize(),n)i[4].setComponents(l,u,m,M).normalize(),i[5].setComponents(c-l,f-u,g-m,C-M).normalize();else if(i[4].setComponents(c-l,f-u,g-m,C-M).normalize(),t===Vn)i[5].setComponents(c+l,f+u,g+m,C+M).normalize();else if(t===Lr)i[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);const t=Jv.distanceTo(e.center);return ur.radius=.7071067811865476+t,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ua.x=i.normal.x>0?e.max.x:e.min.x,ua.y=i.normal.y>0?e.max.y:e.min.y,ua.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const li=new ft,ci=new Es;class nc{constructor(){this.coordinateSystem=Vn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(li.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ci.setFromProjectionMatrix(li,i.coordinateSystem,i.reversedDepth),ci.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(li.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ci.setFromProjectionMatrix(li,i.coordinateSystem,i.reversedDepth),ci.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(li.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ci.setFromProjectionMatrix(li,i.coordinateSystem,i.reversedDepth),ci.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(li.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ci.setFromProjectionMatrix(li,i.coordinateSystem,i.reversedDepth),ci.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(li.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ci.setFromProjectionMatrix(li,i.coordinateSystem,i.reversedDepth),ci.containsPoint(e))return!0}return!1}clone(){return new nc}}function rh(r,e){return r-e}function Kv(r,e){return r.z-e.z}function jv(r,e){return e.z-r.z}class Qv{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Pn=new ft,e_=new it(1,1,1),$d=new Es,t_=new nc,da=new sn,dr=new on,$s=new B,Hd=new B,n_=new B,sh=new Qv,vn=new Kt,fa=[];function i_(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function fr(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class jp extends Kt{constructor(e,t,n=t*2,i){super(new yt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new si(t,e,e,bn,Sn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new si(t,e,e,Lo,qn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new si(t,e,e,bn,Sn);n.colorSpace=At.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),d=new Ft(h,l,c);t.setAttribute(s,d)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Ft(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Pn),this.getBoundingBoxAt(s,da).applyMatrix4(Pn),e.union(da)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Pn),this.getBoundingSphereAt(s,dr).applyMatrix4(Pn),e.union(dr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(rh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Pn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(e_.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(rh),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const d=t.getAttribute(h),u=n.getAttribute(h);i_(d,u,l);const f=d.itemSize;for(let p=d.count,x=c;p<x;p++){const m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){const h=a.indexStart,d=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let u=0;u<o.count;u++)s.setX(h+u,l+o.getX(u));for(let u=o.count,f=d;u<f;u++)s.setX(h+u,l);s.needsUpdate=!0,s.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=s.index,p=f.array,x=e-d;for(let m=h;m<h+u;m++)p[m]=p[m]+x;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:d}=c,u=s.attributes;for(const f in u){const p=u[f],{array:x,itemSize:m}=p;x.copyWithin(e*m,h*m,(h+d)*m),p.addUpdateRange(e*m,d*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new sn,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),s.expandByPoint($s.fromBufferAttribute(a,h))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new on;this.getBoundingBoxAt(e,da),da.getCenter(s.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;o&&(d=o.getX(d)),$s.fromBufferAttribute(a,d),l=Math.max(l,s.center.distanceToSquared($s))}s.radius=Math.sqrt(l),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(rh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);fr(this._multiDrawCounts,i),fr(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),fr(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),fr(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),fr(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new yt,this._initializeGeometry(s));const o=this.geometry;s.index&&fr(s.index.array,o.index.array);for(const a in s.attributes)fr(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;vn.material=this.material,vn.geometry.index=o.index,vn.geometry.attributes=o.attributes,vn.geometry.boundingBox===null&&(vn.geometry.boundingBox=new sn),vn.geometry.boundingSphere===null&&(vn.geometry.boundingSphere=new on);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];vn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,vn.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,vn.geometry.boundingBox),this.getBoundingSphereAt(c,vn.geometry.boundingSphere),vn.raycast(e,fa);for(let d=0,u=fa.length;d<u;d++){const f=fa[d];f.object=this,f.batchId=a,t.push(f)}fa.length=0}vn.material=null,vn.geometry.index=null,vn.geometry.attributes={},vn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex();let a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,a=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data,m=n.isArrayCamera?t_:$d;f&&!n.isArrayCamera&&(Pn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),$d.setFromProjectionMatrix(Pn,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){Pn.copy(this.matrixWorld).invert(),$s.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Pn),Hd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Pn);for(let M=0,C=c.length;M<C;M++)if(c[M].visible&&c[M].active){const E=c[M].geometryIndex;this.getMatrixAt(M,Pn),this.getBoundingSphereAt(E,dr).applyMatrix4(Pn);let L=!1;if(f&&(L=!m.intersectsSphere(dr,n)),!L){const S=u[E],A=n_.subVectors(dr.center,$s).dot(Hd);sh.push(S.start,S.count,A,M)}}const _=sh.list,y=this.customSort;y===null?_.sort(s.transparent?jv:Kv):y.call(this,_,n);for(let M=0,C=_.length;M<C;M++){const E=_[M];h[g]=E.start*a*l,d[g]=E.count*l,x[g]=E.index,g++}sh.reset()}else for(let _=0,y=c.length;_<y;_++)if(c[_].visible&&c[_].active){const M=c[_].geometryIndex;let C=!1;if(f&&(this.getMatrixAt(_,Pn),this.getBoundingSphereAt(M,dr).applyMatrix4(Pn),C=!m.intersectsSphere(dr,n)),!C){const E=u[M];h[g]=E.start*a*l,d[g]=E.count*l,x[g]=_,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class Cn extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pl=new B,Rl=new B,Wd=new ft,Hs=new ir,pa=new on,oh=new B,Xd=new B;class tr extends Pt{constructor(e=new yt,t=new Cn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Pl.fromBufferAttribute(t,i-1),Rl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pl.distanceTo(Rl);e.setAttribute("lineDistance",new rt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=s,e.ray.intersectsSphere(pa)===!1)return;Wd.copy(i).invert(),Hs.copy(e.ray).applyMatrix4(Wd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=h.getX(x),_=h.getX(x+1),y=ma(this,e,Hs,l,g,_,x);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(f),g=ma(this,e,Hs,l,x,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=ma(this,e,Hs,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=ma(this,e,Hs,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ma(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Pl.fromBufferAttribute(a,i),Rl.fromBufferAttribute(a,s),t.distanceSqToSegment(Pl,Rl,oh,Xd)>n)return;oh.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(oh);if(!(c<e.near||c>e.far))return{distance:c,point:Xd.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const qd=new B,Yd=new B;class yi extends tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)qd.fromBufferAttribute(t,i),Yd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new rt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qp extends tr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Su=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Zd=new ft,Uh=new ir,ga=new on,va=new B;class em extends Pt{constructor(e=new yt,t=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;Zd.copy(i).invert(),Uh.copy(e.ray).applyMatrix4(Zd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){const m=c.getX(p);va.fromBufferAttribute(d,m),Jd(va,m,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)va.fromBufferAttribute(d,p),Jd(va,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jd(r,e,t,n,i,s,o){const a=Uh.distanceSqToPoint(r);if(a<t){const l=new B;Uh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tm extends Jt{constructor(e,t,n,i,s=zt,o=zt,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class r_ extends tm{constructor(e,t,n,i,s,o,a,l){super({},e,t,n,i,s,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class s_ extends Jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=en,this.minFilter=en,this.generateMipmaps=!1,this.needsUpdate=!0}}class ic extends Jt{constructor(e,t,n,i,s,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class o_ extends ic{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Nn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a_ extends ic{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,gi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class No extends Jt{constructor(e=[],t=gi,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l_ extends Jt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bs extends Jt{constructor(e,t,n=qn,i,s,o,a=en,l=en,c,h=_i,d=1){if(h!==_i&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nm extends bs{constructor(e,t=qn,n=gi,i,s,o=en,a=en,l,c=_i){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bu extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends yt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function p(x,m,g,_,y,M,C,E,L,S,A){const R=M/L,U=C/S,W=M/2,Y=C/2,ne=E/2,k=L+1,G=S+1;let V=0,se=0;const de=new B;for(let Ae=0;Ae<G;Ae++){const me=Ae*U-Y;for(let we=0;we<k;we++){const Be=we*R-W;de[x]=Be*_,de[m]=me*y,de[g]=ne,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[g]=E>0?1:-1,h.push(de.x,de.y,de.z),d.push(we/L),d.push(1-Ae/S),V+=1}}for(let Ae=0;Ae<S;Ae++)for(let me=0;me<L;me++){const we=u+me+k*Ae,Be=u+me+k*(Ae+1),st=u+(me+1)+k*(Ae+1),$e=u+(me+1)+k*Ae;l.push(we,Be,$e),l.push(Be,st,$e),se+=6}a.addGroup(f,se,A),f+=se,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rc extends yt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+s,x=i+1,m=new B,g=new B;for(let _=0;_<=p;_++){let y=0,M=0,C=0,E=0;if(_<=n){const A=_/n,R=A*Math.PI/2;M=-h-e*Math.cos(R),C=e*Math.sin(R),E=-e*Math.cos(R),y=A*d}else if(_<=n+s){const A=(_-n)/s;M=-h+A*t,C=e,E=0,y=d+A*u}else{const A=(_-n-s)/n,R=A*Math.PI/2;M=h+e*Math.sin(R),C=e*Math.cos(R),E=e*Math.sin(R),y=d+u+A*d}const L=Math.max(0,Math.min(1,y/f));let S=0;_===0?S=.5/i:_===p&&(S=-.5/i);for(let A=0;A<=i;A++){const R=A/i,U=R*Math.PI*2,W=Math.sin(U),Y=Math.cos(U);g.x=-C*Y,g.y=M,g.z=C*W,a.push(g.x,g.y,g.z),m.set(-C*Y,E,C*W),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,L)}if(_>0){const A=(_-1)*x;for(let R=0;R<i;R++){const U=A+R,W=A+R+1,Y=_*x+R,ne=_*x+R+1;o.push(U,W,Y),o.push(W,ne,Y)}}}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class sc extends yt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new B,h=new ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Uo extends yt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let p=0;const x=[],m=n/2;let g=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function _(){const M=new B,C=new B;let E=0;const L=(t-e)/n;for(let S=0;S<=s;S++){const A=[],R=S/s,U=R*(t-e)+e;for(let W=0;W<=i;W++){const Y=W/i,ne=Y*l+a,k=Math.sin(ne),G=Math.cos(ne);C.x=U*k,C.y=-R*n+m,C.z=U*G,d.push(C.x,C.y,C.z),M.set(k,L,G).normalize(),u.push(M.x,M.y,M.z),f.push(Y,1-R),A.push(p++)}x.push(A)}for(let S=0;S<i;S++)for(let A=0;A<s;A++){const R=x[A][S],U=x[A+1][S],W=x[A+1][S+1],Y=x[A][S+1];(e>0||A!==0)&&(h.push(R,U,Y),E+=3),(t>0||A!==s-1)&&(h.push(U,W,Y),E+=3)}c.addGroup(g,E,0),g+=E}function y(M){const C=p,E=new ke,L=new B;let S=0;const A=M===!0?e:t,R=M===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;const U=p;for(let W=0;W<=i;W++){const ne=W/i*l+a,k=Math.cos(ne),G=Math.sin(ne);L.x=A*G,L.y=m*R,L.z=A*k,d.push(L.x,L.y,L.z),u.push(0,R,0),E.x=k*.5+.5,E.y=G*.5*R+.5,f.push(E.x,E.y),p++}for(let W=0;W<i;W++){const Y=C+W,ne=U+W;M===!0?h.push(ne,ne+1,Y):h.push(ne+1,ne,Y),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fo extends Uo{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Fo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rr extends yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new B,M=new B,C=new B;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],M),f(t[E+2],C),l(y,M,C,_)}function l(_,y,M,C){const E=C+1,L=[];for(let S=0;S<=E;S++){L[S]=[];const A=_.clone().lerp(M,S/E),R=y.clone().lerp(M,S/E),U=E-S;for(let W=0;W<=U;W++)W===0&&S===E?L[S][W]=A:L[S][W]=A.clone().lerp(R,W/U)}for(let S=0;S<E;S++)for(let A=0;A<2*(E-S)-1;A++){const R=Math.floor(A/2);A%2===0?(u(L[S][R+1]),u(L[S+1][R]),u(L[S][R])):(u(L[S][R+1]),u(L[S+1][R+1]),u(L[S+1][R]))}}function c(_){const y=new B;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(_),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function h(){const _=new B;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const M=m(_)/2/Math.PI+.5,C=g(_)/Math.PI+.5;o.push(M,1-C)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){const y=o[_+0],M=o[_+2],C=o[_+4],E=Math.max(y,M,C),L=Math.min(y,M,C);E>.9&&L<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function f(_,y){const M=_*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function p(){const _=new B,y=new B,M=new B,C=new B,E=new ke,L=new ke,S=new ke;for(let A=0,R=0;A<s.length;A+=9,R+=6){_.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),M.set(s[A+6],s[A+7],s[A+8]),E.set(o[R+0],o[R+1]),L.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),C.copy(_).add(y).add(M).divideScalar(3);const U=m(C);x(E,R+0,_,U),x(L,R+2,y,U),x(S,R+4,M,U)}}function x(_,y,M,C){C<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.vertices,e.indices,e.radius,e.detail)}}class oc extends rr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oc(e.radius,e.detail)}}const _a=new B,xa=new B,ah=new B,ya=new Ln;class im extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Pr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:m,c:g}=ya;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),ya.getNormal(ah),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const y=(_+1)%3,M=d[_],C=d[y],E=ya[h[_]],L=ya[h[y]],S=`${M}_${C}`,A=`${C}_${M}`;A in u&&u[A]?(ah.dot(u[A].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(L.x,L.y,L.z)),u[A]=null):S in u||(u[S]={index0:c[_],index1:c[y],normal:ah.clone()})}}for(const p in u)if(u[p]){const{index0:x,index1:m}=u[p];_a.fromBufferAttribute(a,x),xa.fromBufferAttribute(a,m),f.push(_a.x,_a.y,_a.z),f.push(xa.x,xa.y,xa.z)}this.setAttribute("position",new rt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ke:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,i=[],s=[],o=[],a=new B,l=new ft;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(_t(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(_t(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ac extends oi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ke){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rm extends ac{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wu(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ma=new B,lh=new wu,ch=new wu,hh=new wu;class sm extends oi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Ma.subVectors(i[0],i[1]).add(i[0]),c=Ma);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ma.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),lh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),ch.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),hh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ch.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),hh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(lh.calc(l),ch.calc(l),hh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kd(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function c_(r,e){const t=1-r;return t*t*e}function h_(r,e){return 2*(1-r)*r*e}function u_(r,e){return r*r*e}function ao(r,e,t,n){return c_(r,e)+h_(r,t)+u_(r,n)}function d_(r,e){const t=1-r;return t*t*t*e}function f_(r,e){const t=1-r;return 3*t*t*r*e}function p_(r,e){return 3*(1-r)*r*r*e}function m_(r,e){return r*r*r*e}function lo(r,e,t,n,i){return d_(r,e)+f_(r,t)+p_(r,n)+m_(r,i)}class Tu extends oi{constructor(e=new ke,t=new ke,n=new ke,i=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ke){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,i.x,s.x,o.x,a.x),lo(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class om extends oi{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,i.x,s.x,o.x,a.x),lo(e,i.y,s.y,o.y,a.y),lo(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Au extends oi{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends oi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eu extends oi{constructor(e=new ke,t=new ke,n=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ke){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ao(e,i.x,s.x,o.x),ao(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cu extends oi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ao(e,i.x,s.x,o.x),ao(e,i.y,s.y,o.y),ao(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pu extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Kd(a,l.x,c.x,h.x,d.x),Kd(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ke().fromArray(i))}return this}}var Il=Object.freeze({__proto__:null,ArcCurve:rm,CatmullRomCurve3:sm,CubicBezierCurve:Tu,CubicBezierCurve3:om,EllipseCurve:ac,LineCurve:Au,LineCurve3:am,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:Cu,SplineCurve:Pu});class lm extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Il[i.type]().fromJSON(i))}return this}}class Dl extends lm{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Au(this.currentPoint.clone(),new ke(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Eu(this.currentPoint.clone(),new ke(e,t),new ke(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Tu(this.currentPoint.clone(),new ke(e,t),new ke(n,i),new ke(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new ac(e,t,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ji extends Dl{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Dl().fromJSON(i))}return this}}function g_(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=cm(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=M_(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let h=a,d=l;for(let u=t;u<i;u+=t){const f=r[u],p=r[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return So(s,o,t,a,l,c,0),o}function cm(r,e,t,n,i){let s;if(i===D_(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=jd(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=jd(o/n|0,r[o],r[o+1],s);return s&&ws(s,s.next)&&(wo(s),s=s.next),s}function Ur(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ws(t,t.next)||Gt(t.prev,t,t.next)===0)){if(wo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function So(r,e,t,n,i,s,o){if(!r)return;!o&&s&&A_(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?__(r,n,i,s):v_(r)){e.push(l.i,r.i,c.i),wo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=x_(Ur(r),e),So(r,e,t,n,i,s,2)):o===2&&y_(r,e,t,n,i,s):So(Ur(r),e,t,n,i,s,1);break}}}function v_(r){const e=r.prev,t=r,n=r.next;if(Gt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),d=Math.min(a,l,c),u=Math.max(i,s,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Zs(i,a,s,l,o,c,p.x,p.y)&&Gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function __(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Gt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),g=Fh(f,p,e,t,n),_=Fh(x,m,e,t,n);let y=r.prevZ,M=r.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Zs(a,h,l,d,c,u,y.x,y.y)&&Gt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Zs(a,h,l,d,c,u,M.x,M.y)&&Gt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Zs(a,h,l,d,c,u,y.x,y.y)&&Gt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Zs(a,h,l,d,c,u,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function x_(r,e){let t=r;do{const n=t.prev,i=t.next.next;!ws(n,i)&&um(n,t,t.next,i)&&bo(n,i)&&bo(i,n)&&(e.push(n.i,t.i,i.i),wo(t),wo(t.next),t=r=i),t=t.next}while(t!==r);return Ur(t)}function y_(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&P_(o,a)){let l=dm(o,a);o=Ur(o,o.next),l=Ur(l,l.next),So(o,e,t,n,i,s,0),So(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function M_(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=cm(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(C_(c))}i.sort(S_);for(let s=0;s<i.length;s++)t=b_(i[s],t);return t}function S_(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function b_(r,e){const t=w_(r,e);if(!t)return e;const n=dm(t,r);return Ur(n,n.next),Ur(t,t.next)}function w_(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(ws(r,t))return t;do{if(ws(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hm(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);bo(t,r)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&T_(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function T_(r,e){return Gt(r.prev,r,e.prev)<0&&Gt(e.next,r,r.next)<0}function A_(r,e,t,n){let i=r;do i.z===0&&(i.z=Fh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,E_(i)}function E_(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Fh(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function C_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function hm(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Zs(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&hm(r,e,t,n,i,s,o,a)}function P_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!R_(r,e)&&(bo(r,e)&&bo(e,r)&&I_(r,e)&&(Gt(r.prev,r,e.prev)||Gt(r,e.prev,e))||ws(r,e)&&Gt(r.prev,r,r.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ws(r,e){return r.x===e.x&&r.y===e.y}function um(r,e,t,n){const i=ba(Gt(r,e,t)),s=ba(Gt(r,e,n)),o=ba(Gt(t,n,r)),a=ba(Gt(t,n,e));return!!(i!==s&&o!==a||i===0&&Sa(r,t,e)||s===0&&Sa(r,n,e)||o===0&&Sa(t,r,n)||a===0&&Sa(t,e,n))}function Sa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ba(r){return r>0?1:r<0?-1:0}function R_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&um(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function bo(r,e){return Gt(r.prev,r,r.next)<0?Gt(r,e,r.next)>=0&&Gt(r,r.prev,e)>=0:Gt(r,e,r.prev)<0||Gt(r,r.next,e)<0}function I_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function dm(r,e){const t=Oh(r.i,r.x,r.y),n=Oh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function jd(r,e,t,n){const i=Oh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function wo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Oh(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function D_(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class L_{static triangulate(e,t,n=2){return g_(e,t,n)}}class ii{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ii.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Qd(e),ef(n,e);let o=e.length;t.forEach(Qd);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,ef(n,t[l]);const a=L_.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Qd(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function ef(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class lc extends yt{constructor(e=new ji([new ke(.5,.5),new ke(-.5,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new rt(i,3)),this.setAttribute("uv",new rt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:N_;let y,M=!1,C,E,L,S;if(g){y=g.getSpacedPoints(h),M=!0,u=!1;const fe=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(h,fe),E=new B,L=new B,S=new B}u||(m=0,f=0,p=0,x=0);const A=a.extractPoints(c);let R=A.shape;const U=A.holes;if(!ii.isClockWise(R)){R=R.reverse();for(let fe=0,Ee=U.length;fe<Ee;fe++){const _e=U[fe];ii.isClockWise(_e)&&(U[fe]=_e.reverse())}}function Y(fe){const _e=10000000000000001e-36;let Ie=fe[0];for(let N=1;N<=fe.length;N++){const Ne=N%fe.length,Te=fe[Ne],ve=Te.x-Ie.x,pe=Te.y-Ie.y,P=ve*ve+pe*pe,b=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(Ie.x),Math.abs(Ie.y)),z=_e*b*b;if(P<=z){fe.splice(Ne,1),N--;continue}Ie=Te}}Y(R),U.forEach(Y);const ne=U.length,k=R;for(let fe=0;fe<ne;fe++){const Ee=U[fe];R=R.concat(Ee)}function G(fe,Ee,_e){return Ee||ht("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(Ee,_e)}const V=R.length;function se(fe,Ee,_e){let Ie,N,Ne;const Te=fe.x-Ee.x,ve=fe.y-Ee.y,pe=_e.x-fe.x,P=_e.y-fe.y,b=Te*Te+ve*ve,z=Te*P-ve*pe;if(Math.abs(z)>Number.EPSILON){const q=Math.sqrt(b),he=Math.sqrt(pe*pe+P*P),X=Ee.x-ve/q,Me=Ee.y+Te/q,j=_e.x-P/he,Oe=_e.y+pe/he,Re=((j-X)*P-(Oe-Me)*pe)/(Te*P-ve*pe);Ie=X+Te*Re-fe.x,N=Me+ve*Re-fe.y;const le=Ie*Ie+N*N;if(le<=2)return new ke(Ie,N);Ne=Math.sqrt(le/2)}else{let q=!1;Te>Number.EPSILON?pe>Number.EPSILON&&(q=!0):Te<-Number.EPSILON?pe<-Number.EPSILON&&(q=!0):Math.sign(ve)===Math.sign(P)&&(q=!0),q?(Ie=-ve,N=Te,Ne=Math.sqrt(b)):(Ie=Te,N=ve,Ne=Math.sqrt(b/2))}return new ke(Ie/Ne,N/Ne)}const de=[];for(let fe=0,Ee=k.length,_e=Ee-1,Ie=fe+1;fe<Ee;fe++,_e++,Ie++)_e===Ee&&(_e=0),Ie===Ee&&(Ie=0),de[fe]=se(k[fe],k[_e],k[Ie]);const Ae=[];let me,we=de.concat();for(let fe=0,Ee=ne;fe<Ee;fe++){const _e=U[fe];me=[];for(let Ie=0,N=_e.length,Ne=N-1,Te=Ie+1;Ie<N;Ie++,Ne++,Te++)Ne===N&&(Ne=0),Te===N&&(Te=0),me[Ie]=se(_e[Ie],_e[Ne],_e[Te]);Ae.push(me),we=we.concat(me)}let Be;if(m===0)Be=ii.triangulateShape(k,U);else{const fe=[],Ee=[];for(let _e=0;_e<m;_e++){const Ie=_e/m,N=f*Math.cos(Ie*Math.PI/2),Ne=p*Math.sin(Ie*Math.PI/2)+x;for(let Te=0,ve=k.length;Te<ve;Te++){const pe=G(k[Te],de[Te],Ne);De(pe.x,pe.y,-N),Ie===0&&fe.push(pe)}for(let Te=0,ve=ne;Te<ve;Te++){const pe=U[Te];me=Ae[Te];const P=[];for(let b=0,z=pe.length;b<z;b++){const q=G(pe[b],me[b],Ne);De(q.x,q.y,-N),Ie===0&&P.push(q)}Ie===0&&Ee.push(P)}}Be=ii.triangulateShape(fe,Ee)}const st=Be.length,$e=p+x;for(let fe=0;fe<V;fe++){const Ee=u?G(R[fe],we[fe],$e):R[fe];M?(L.copy(C.normals[0]).multiplyScalar(Ee.x),E.copy(C.binormals[0]).multiplyScalar(Ee.y),S.copy(y[0]).add(L).add(E),De(S.x,S.y,S.z)):De(Ee.x,Ee.y,0)}for(let fe=1;fe<=h;fe++)for(let Ee=0;Ee<V;Ee++){const _e=u?G(R[Ee],we[Ee],$e):R[Ee];M?(L.copy(C.normals[fe]).multiplyScalar(_e.x),E.copy(C.binormals[fe]).multiplyScalar(_e.y),S.copy(y[fe]).add(L).add(E),De(S.x,S.y,S.z)):De(_e.x,_e.y,d/h*fe)}for(let fe=m-1;fe>=0;fe--){const Ee=fe/m,_e=f*Math.cos(Ee*Math.PI/2),Ie=p*Math.sin(Ee*Math.PI/2)+x;for(let N=0,Ne=k.length;N<Ne;N++){const Te=G(k[N],de[N],Ie);De(Te.x,Te.y,d+_e)}for(let N=0,Ne=U.length;N<Ne;N++){const Te=U[N];me=Ae[N];for(let ve=0,pe=Te.length;ve<pe;ve++){const P=G(Te[ve],me[ve],Ie);M?De(P.x,P.y+y[h-1].y,y[h-1].x+_e):De(P.x,P.y,d+_e)}}}oe(),ce();function oe(){const fe=i.length/3;if(u){let Ee=0,_e=V*Ee;for(let Ie=0;Ie<st;Ie++){const N=Be[Ie];Ce(N[2]+_e,N[1]+_e,N[0]+_e)}Ee=h+m*2,_e=V*Ee;for(let Ie=0;Ie<st;Ie++){const N=Be[Ie];Ce(N[0]+_e,N[1]+_e,N[2]+_e)}}else{for(let Ee=0;Ee<st;Ee++){const _e=Be[Ee];Ce(_e[2],_e[1],_e[0])}for(let Ee=0;Ee<st;Ee++){const _e=Be[Ee];Ce(_e[0]+V*h,_e[1]+V*h,_e[2]+V*h)}}n.addGroup(fe,i.length/3-fe,0)}function ce(){const fe=i.length/3;let Ee=0;ge(k,Ee),Ee+=k.length;for(let _e=0,Ie=U.length;_e<Ie;_e++){const N=U[_e];ge(N,Ee),Ee+=N.length}n.addGroup(fe,i.length/3-fe,1)}function ge(fe,Ee){let _e=fe.length;for(;--_e>=0;){const Ie=_e;let N=_e-1;N<0&&(N=fe.length-1);for(let Ne=0,Te=h+m*2;Ne<Te;Ne++){const ve=V*Ne,pe=V*(Ne+1),P=Ee+Ie+ve,b=Ee+N+ve,z=Ee+N+pe,q=Ee+Ie+pe;Fe(P,b,z,q)}}}function De(fe,Ee,_e){l.push(fe),l.push(Ee),l.push(_e)}function Ce(fe,Ee,_e){qe(fe),qe(Ee),qe(_e);const Ie=i.length/3,N=_.generateTopUV(n,i,Ie-3,Ie-2,Ie-1);ze(N[0]),ze(N[1]),ze(N[2])}function Fe(fe,Ee,_e,Ie){qe(fe),qe(Ee),qe(Ie),qe(Ee),qe(_e),qe(Ie);const N=i.length/3,Ne=_.generateSideWallUV(n,i,N-6,N-3,N-2,N-1);ze(Ne[0]),ze(Ne[1]),ze(Ne[3]),ze(Ne[1]),ze(Ne[2]),ze(Ne[3])}function qe(fe){i.push(l[fe*3+0]),i.push(l[fe*3+1]),i.push(l[fe*3+2])}function ze(fe){s.push(fe.x),s.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return U_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Il[i.type]().fromJSON(i)),new lc(n,e.options)}}const N_={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ke(s,o),new ke(a,l),new ke(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ke(o,1-l),new ke(c,1-d),new ke(u,1-p),new ke(x,1-g)]:[new ke(a,1-l),new ke(h,1-d),new ke(f,1-p),new ke(m,1-g)]}};function U_(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class cc extends rr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cc(e.radius,e.detail)}}class hc extends yt{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=_t(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/t,d=new B,u=new ke,f=new B,p=new B,x=new B;let m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){const y=n+_*h*i,M=Math.sin(y),C=Math.cos(y);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*M,d.y=e[E].y,d.z=e[E].x*C,o.push(d.x,d.y,d.z),u.x=_/t,u.y=E/(e.length-1),a.push(u.x,u.y);const L=l[3*E+0]*M,S=l[3*E+1],A=l[3*E+0]*C;c.push(L,S,A)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const M=y+_*e.length,C=M,E=M+e.length,L=M+e.length+1,S=M+1;s.push(C,E,S),s.push(L,S,E)}this.setIndex(s),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.points,e.segments,e.phiStart,e.phiLength)}}class Oo extends rr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oo(e.radius,e.detail)}}class Cs extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const _=g*u-o;for(let y=0;y<c;y++){const M=y*d-s;p.push(M,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const y=_+c*g,M=_+c*(g+1),C=_+1+c*(g+1),E=_+1+c*g;f.push(y,M,E),f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class uc extends yt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new B,p=new ke;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const g=s+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let g=0;g<n;g++){const _=g+m,y=_,M=_+n+1,C=_+n+2,E=_+1;a.push(y,M,E),a.push(M,C,E)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class dc extends yt{constructor(e=new ji([new ke(0,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new rt(i,3)),this.setAttribute("normal",new rt(s,3)),this.setAttribute("uv",new rt(o,2));function c(h){const d=i.length/3,u=h.extractPoints(t);let f=u.shape;const p=u.holes;ii.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const _=p[m];ii.isClockWise(_)===!0&&(p[m]=_.reverse())}const x=ii.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const _=p[m];f=f.concat(_)}for(let m=0,g=f.length;m<g;m++){const _=f[m];i.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){const _=x[m],y=_[0]+d,M=_[1]+d,C=_[2]+d;n.push(y,M,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return F_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new dc(n,e.curveSegments)}}function F_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Bo extends yt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new B,u=new B,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const _=[],y=g/n;let M=0;g===0&&o===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const E=C/t;d.x=-e*Math.cos(i+E*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(i+E*s)*Math.sin(o+y*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+M,1-y),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){const y=h[g][_+1],M=h[g][_],C=h[g+1][_],E=h[g+1][_+1];(g!==0||o>0)&&f.push(y,M,E),(g!==n-1||l<Math.PI)&&f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fc extends rr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fc(e.radius,e.detail)}}class pc extends yt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new B,f=new B,p=new B;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let g=0;g<=i;g++){const _=g/i*s;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,_=(i+1)*(x-1)+m-1,y=(i+1)*(x-1)+m,M=(i+1)*x+m;l.push(g,_,M),l.push(_,y,M)}this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mc extends yt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],d=new B,u=new B,f=new B,p=new B,x=new B,m=new B,g=new B;for(let y=0;y<=n;++y){const M=y/n*s*Math.PI*2;_(M,s,o,e,f),_(M+.01,s,o,e,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let C=0;C<=i;++C){const E=C/i*Math.PI*2,L=-t*Math.cos(E),S=t*Math.sin(E);d.x=f.x+(L*g.x+S*x.x),d.y=f.y+(L*g.y+S*x.y),d.z=f.z+(L*g.z+S*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(y/n),h.push(C/i)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){const C=(i+1)*(y-1)+(M-1),E=(i+1)*y+(M-1),L=(i+1)*y+M,S=(i+1)*(y-1)+M;a.push(C,E,S),a.push(E,L,S)}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2));function _(y,M,C,E,L){const S=Math.cos(y),A=Math.sin(y),R=C/M*y,U=Math.cos(R);L.x=E*(2+U)*.5*S,L.y=E*(2+U)*A*.5,L.z=E*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class gc extends yt{constructor(e=new Cu(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new ke;let h=new B;const d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function x(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),_(),g()}function m(y){h=e.getPointAt(y/t,h);const M=o.normals[y],C=o.binormals[y];for(let E=0;E<=i;E++){const L=E/i*Math.PI*2,S=Math.sin(L),A=-Math.cos(L);l.x=A*M.x+S*C.x,l.y=A*M.y+S*C.y,l.z=A*M.z+S*C.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let M=1;M<=i;M++){const C=(i+1)*(y-1)+(M-1),E=(i+1)*y+(M-1),L=(i+1)*y+M,S=(i+1)*(y-1)+M;p.push(C,E,S),p.push(E,L,S)}}function _(){for(let y=0;y<=t;y++)for(let M=0;M<=i;M++)c.x=y/t,c.y=M/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gc(new Il[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fm extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new B,s=new B;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),_=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),s.fromBufferAttribute(o,_),tf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,d),tf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new rt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function tf(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var nf=Object.freeze({__proto__:null,BoxGeometry:Or,CapsuleGeometry:rc,CircleGeometry:sc,ConeGeometry:Fo,CylinderGeometry:Uo,DodecahedronGeometry:oc,EdgesGeometry:im,ExtrudeGeometry:lc,IcosahedronGeometry:cc,LatheGeometry:hc,OctahedronGeometry:Oo,PlaneGeometry:Cs,PolyhedronGeometry:rr,RingGeometry:uc,ShapeGeometry:dc,SphereGeometry:Bo,TetrahedronGeometry:fc,TorusGeometry:pc,TorusKnotGeometry:mc,TubeGeometry:gc,WireframeGeometry:fm});class pm extends _n{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const n=Ts(r[t]);for(const i in n)e[i]=n[i]}return e}function O_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Ru={clone:Ts,merge:yn};var B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=O_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Iu extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Du extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gm extends Du{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vm extends _n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Do,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _m extends _n{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new it(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class xm extends _n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ym extends _n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Do,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lu extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nu extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mm extends _n{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new it(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sm extends Cn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Er(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function bm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Uu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function k_(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=Er(d,c.times.constructor),c.values=Er(u,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function V_(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=a.times.length-1;let x;if(s<=a.times[0]){const g=h,_=d-h;x=a.values.slice(g,_)}else if(s>=a.times[p]){const g=p*d+h,_=g+d-h;x=a.values.slice(g,_)}else{const g=a.createInterpolant(),_=h,y=d-h;g.evaluate(s),x=g.resultBuffer.slice(_,y)}l==="quaternion"&&new Tn().fromArray(x).normalize().conjugate().toArray(x);const m=c.times.length;for(let g=0;g<m;++g){const _=g*f+u;if(l==="quaternion")Tn.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{const y=f-u*2;for(let M=0;M<y;++M)c.values[_+M]-=x[M]}}}return r.blendMode=pu,r}class G_{static convertArray(e,t){return Er(e,t)}static isTypedArray(e){return Gp(e)}static getKeyframeOrder(e){return bm(e)}static sortedArray(e,t,n){return Bh(e,t,n)}static flattenJSON(e,t,n,i){Uu(e,t,n,i)}static subclip(e,t,n,i,s=30){return k_(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return V_(e,t,n,i)}}class Ps{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wm extends Ps{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tr,endingEnd:Tr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ar:s=e,a=2*t-n;break;case go:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ar:o=e,l=2*n-t;break;case go:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,y=(-1-f)*m+(1.5+f)*x+.5*p,M=f*m-f*x;for(let C=0;C!==a;++C)s[C]=g*o[h+C]+_*o[c+C]+y*o[l+C]+M*o[d+C];return s}}class Fu extends Ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}}class Tm extends Ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Am extends Ps{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){const x=(n-t)/(i-t),m=1-x;for(let g=0;g!==a;++g)s[g]=o[c+g]*m+o[l+g]*x;return s}const f=a*2,p=e-1;for(let x=0;x!==a;++x){const m=o[c+x],g=o[l+x],_=p*f+x*2,y=u[_],M=u[_+1],C=e*f+x*2,E=d[C],L=d[C+1];let S=(n-t)/(i-t),A,R,U,W,Y;for(let ne=0;ne<8;ne++){A=S*S,R=A*S,U=1-S,W=U*U,Y=W*U;const G=Y*t+3*W*S*y+3*U*A*E+R*i-n;if(Math.abs(G)<1e-10)break;const V=3*W*(y-t)+6*U*S*(E-y)+3*A*(i-E);if(Math.abs(V)<1e-10)break;S=S-G/V,S=Math.max(0,Math.min(1,S))}s[x]=Y*m+3*W*S*M+3*U*A*L+R*g}return s}}class Zn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Am(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case Cl:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break;case Dh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){ht("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ht("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Gp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){ht("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ba,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Cl;class Br extends Zn{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=mo;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Ou extends Zn{constructor(e,t,n,i){super(e,t,n,i)}}Ou.prototype.ValueTypeName="color";class To extends Zn{constructor(e,t,n,i){super(e,t,n,i)}}To.prototype.ValueTypeName="number";class Em extends Ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Tn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class zo extends Zn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Em(this.times,this.values,this.getValueSize(),e)}}zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends Zn{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=mo;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends Zn{constructor(e,t,n,i){super(e,t,n,i)}}Ao.prototype.ValueTypeName="vector";class Eo{constructor(e="",t=-1,n=[],i=Xl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(H_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Zn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=bm(l);l=Bh(l,1,h),c=Bh(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new To(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Qe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ht("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,p,x){if(f.length!==0){const m=[],g=[];Uu(f,m,g,p),m.length!==0&&x.push(new d(u,m,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let x=0;x<u[p].morphTargets.length;x++)f[u[p].morphTargets[x]]=-1;for(const x in f){const m=[],g=[];for(let _=0;_!==u[p].morphTargets.length;++_){const y=u[p];m.push(y.time),g.push(y.morphTarget===x?1:0)}i.push(new To(".morphTargetInfluence["+x+"]",m,g))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(Ao,f+".position",u,"pos",i),n(zo,f+".quaternion",u,"rot",i),n(Ao,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function $_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return To;case"vector":case"vector2":case"vector3":case"vector4":return Ao;case"color":return Ou;case"quaternion":return zo;case"bool":case"boolean":return Br;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function H_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$_(r.type);if(r.times===void 0){const t=[],n=[];Uu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const pi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(rf(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!rf(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function rf(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Bu{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kr=new Bu;class On{constructor(e){this.manager=e!==void 0?e:kr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}On.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class W_ extends Error{constructor(e,t){super(e),this.response=t}}class Li extends On{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:i});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ai[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){_();function _(){d.read().then(({done:y,value:M})=>{if(y)g.close();else{x+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let E=0,L=h.length;E<L;E++){const S=h[E];S.onProgress&&S.onProgress(C)}g.enqueue(M),_()}},y=>{g.error(y)})}}});return new Response(m)}else throw new W_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{pi.add(`file:${e}`,c);const h=Ai[e];delete Ai[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class X_ extends On{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Li(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):ht(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Eo.parse(e[n]);t.push(i)}return t}}class q_ extends On{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new ic,l=new Li(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(d){l.load(e[d],function(u){const f=s.parse(u,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=zt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){const u=s.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)o[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),o[p].format=u.format,o[p].width=u.width,o[p].height=u.height}a.image=o}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=zt),a.format=u.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}const ss=new WeakMap;class Co extends On{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=ss.get(o);d===void 0&&(d=[],ss.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=xo("img");function l(){h(),t&&t(this);const d=ss.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}ss.delete(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),pi.remove(`image:${e}`);const u=ss.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}ss.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Y_ extends On{constructor(e){super(e)}load(e,t,n,i){const s=new No;s.colorSpace=In;const o=new Co(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Z_ extends On{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new si,a=new Li(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{h(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Nn,o.wrapT=c.wrapT!==void 0?c.wrapT:Nn,o.magFilter=c.magFilter!==void 0?c.magFilter:zt,o.minFilter=c.minFilter!==void 0?c.minFilter:zt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=fi),c.mipmapCount===1&&(o.minFilter=zt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class J_ extends On{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,o=new Co(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class sr extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Cm extends sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const uh=new ft,sf=new B,of=new B;class zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Lr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wa=new B,Ta=new Tn,hi=new B;class vc extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Ta,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wa,Ta,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new B,af=new ke,lf=new ke;class dn extends vc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,af,lf),t.subVectors(lf,af)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class K_ extends zu{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pm extends sr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new K_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class j_ extends zu{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}}class Rm extends sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Vr extends vc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q_ extends zu{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ku extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Q_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Vu extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Im extends sr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Gu{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new B)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Dm extends sr{constructor(e=new Gu,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class _c extends On{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Li(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):ht(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&Qe("MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new it().setHex(o.value);break;case"v2":i.uniforms[s].value=new ke().fromArray(o.value);break;case"v3":i.uniforms[s].value=new B().fromArray(o.value);break;case"v4":i.uniforms[s].value=new Dt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new Mt().fromArray(o.value);break;case"m4":i.uniforms[s].value=new ft().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ke().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return _c.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:pm,SpriteMaterial:yu,RawShaderMaterial:Iu,ShaderMaterial:Yn,PointsMaterial:Su,MeshPhysicalMaterial:gm,MeshStandardMaterial:Du,MeshPhongMaterial:vm,MeshToonMaterial:_m,MeshNormalMaterial:xm,MeshLambertMaterial:ym,MeshDepthMaterial:Lu,MeshDistanceMaterial:Nu,MeshBasicMaterial:Ni,MeshMatcapMaterial:Mm,LineDashedMaterial:Sm,LineBasicMaterial:Cn,Material:_n};return new t[e]}}class zh{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Lm extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Nm extends On{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Li(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):ht(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const m=f.interleavedBuffers[p],g=s(f,m.buffer),_=ps(m.type,g),y=new ec(_,m.stride);return y.uuid=m.uuid,t[p]=y,y}function s(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=e.isInstancedBufferGeometry?new Lm:new yt,a=e.data.index;if(a!==void 0){const f=ps(a.type,a.array);o.setIndex(new Ft(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);x=new Nr(m,p.itemSize,p.offset,p.normalized)}else{const m=ps(p.type,p.array),g=p.isInstancedBufferAttribute?Ss:Ft;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),o.setAttribute(f,x)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let m=0,g=p.length;m<g;m++){const _=p[m];let y;if(_.isInterleavedBufferAttribute){const M=i(e.data,_.data);y=new Nr(M,_.itemSize,_.offset,_.normalized)}else{const M=ps(_.type,_.array);y=new Ft(M,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),x.push(y)}o.morphAttributes[f]=x}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const x=d[f];o.addGroup(x.start,x.count,x.materialIndex)}const u=e.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new on().fromJSON(u)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class ex extends On{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?zh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Li(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),d("ObjectLoader: Can't parse "+e+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),ht("ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?zh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Li(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t);let a;try{a=JSON.parse(o)}catch(c){throw new Error("ObjectLoader: Can't parse "+e+". "+c.message)}const l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(const u in o)if(o[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new ji().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new tc().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Nm;for(let s=0,o=e.length;s<o;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in nf?a=nf[l.type].fromJSON(l,t):Qe(`ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new _c;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Eo.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:ps(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Bu(t);s=new Co(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const d=e[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const m=u[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new si(g.data,g.width,g.height)))}i[d.uuid]=new Zi(f)}else{const f=a(d.url);i[d.uuid]=new Zi(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:ps(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Co(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await s(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new si(p.data,p.width,p.height)))}n[l.uuid]=new Zi(h)}else{const h=await s(l.url);n[l.uuid]=new Zi(h)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(Qe("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&Qe('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&Qe("ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let h;Array.isArray(c)?(h=new No,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new si:h=new Jt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,tx)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],cf),h.wrapT=n(a.wrap[1],cf)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,hf)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,hf)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,s){let o;function a(u){return t[u]===void 0&&Qe("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const m=u[p];n[m]===void 0&&Qe("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&Qe("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&Qe("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(e.type){case"Scene":o=new vu,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new it(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Ql(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new jl(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new dn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Vr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Vu(e.color,e.intensity);break;case"DirectionalLight":o=new ku(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Rm(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Im(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Pm(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new Cm(e.color,e.groundColor,e.intensity);break;case"LightProbe":const u=new Gu().fromArray(e.sh);o=new Dm(u,e.intensity);break;case"SkinnedMesh":h=a(e.geometry),d=l(e.material),o=new Jp(h,d),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),d=l(e.material),o=new Kt(h,d);break;case"InstancedMesh":h=a(e.geometry),d=l(e.material);const f=e.count,p=e.instanceMatrix,x=e.instanceColor;o=new Kp(h,d,f),o.instanceMatrix=new Ss(new Float32Array(p.array),16),x!==void 0&&(o.instanceColor=new Ss(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(e.geometry),d=l(e.material),o=new jp(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(m=>{let g=null,_=null;return m.boundingBox!==void 0&&(g=new sn().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(_=new on().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:_}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new on().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new sn().fromJSON(e.boundingBox));break;case"LOD":o=new Zp;break;case"Line":o=new tr(a(e.geometry),l(e.material));break;case"LineLoop":o=new Qp(a(e.geometry),l(e.material));break;case"LineSegments":o=new yi(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new em(a(e.geometry),l(e.material));break;case"Sprite":o=new Yp(l(e.material));break;case"Group":o=new ms;break;case"Bone":o=new Mu;break;default:o=new Pt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.pivot!==void 0&&(o.pivot=new B().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.static!==void 0&&(o.static=e.static),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let f=0;f<u.length;f++)o.add(this.parseObject(u[f],t,n,i,s))}if(e.animations!==void 0){const u=e.animations;for(let f=0;f<u.length;f++){const p=u[f];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const u=e.levels;for(let f=0;f<u.length;f++){const p=u[f],x=o.getObjectByProperty("uuid",p.object);x!==void 0&&o.addLevel(x,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?Qe("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Pt}})}}const tx={UVMapping:zl,CubeReflectionMapping:gi,CubeRefractionMapping:Qi,EquirectangularReflectionMapping:Qs,EquirectangularRefractionMapping:eo,CubeUVReflectionMapping:As},cf={RepeatWrapping:fo,ClampToEdgeWrapping:Nn,MirroredRepeatWrapping:po},hf={NearestFilter:en,NearestMipmapNearestFilter:au,NearestMipmapLinearFilter:fs,LinearFilter:zt,LinearMipmapNearestFilter:to,LinearMipmapLinearFilter:fi},dh=new WeakMap;class nx extends On{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(dh.has(o)===!0)i&&i(dh.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return pi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),dh.set(l,c),pi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});pi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Aa;class $u{static getContext(){return Aa===void 0&&(Aa=new(window.AudioContext||window.webkitAudioContext)),Aa}static setContext(e){Aa=e}}class ix extends On{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Li(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);$u.getContext().decodeAudioData(c,function(d){t(d)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):ht(l),s.manager.itemError(e)}}}const uf=new ft,df=new ft,pr=new ft;class rx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new dn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new dn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,pr.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Pr*t.fov*.5)/t.zoom;let a,l;df.elements[12]=-i,uf.elements[12]=i,a=-o*t.aspect+s,l=o*t.aspect+s,pr.elements[0]=2*t.near/(l-a),pr.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(pr),a=-o*t.aspect-s,l=o*t.aspect-s,pr.elements[0]=2*t.near/(l-a),pr.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(pr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(df),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(uf)}}const os=-90,as=1;class Um extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(os,as,e,t);i.layers=this.layers,this.add(i);const s=new dn(os,as,e,t);s.layers=this.layers,this.add(s);const o=new dn(os,as,e,t);o.layers=this.layers,this.add(o);const a=new dn(os,as,e,t);a.layers=this.layers,this.add(a);const l=new dn(os,as,e,t);l.layers=this.layers,this.add(l);const c=new dn(os,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Fm extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Om{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function sx(){this._document.hidden===!1&&this.reset()}const mr=new B,fh=new Tn,ox=new B,gr=new B,vr=new B;class ax extends Pt{constructor(){super(),this.type="AudioListener",this.context=$u.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Om}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(mr,fh,ox),gr.set(0,0,-1).applyQuaternion(fh),vr.set(0,1,0).applyQuaternion(fh),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(mr.x,n),t.positionY.linearRampToValueAtTime(mr.y,n),t.positionZ.linearRampToValueAtTime(mr.z,n),t.forwardX.linearRampToValueAtTime(gr.x,n),t.forwardY.linearRampToValueAtTime(gr.y,n),t.forwardZ.linearRampToValueAtTime(gr.z,n),t.upX.linearRampToValueAtTime(vr.x,n),t.upY.linearRampToValueAtTime(vr.y,n),t.upZ.linearRampToValueAtTime(vr.z,n)}else t.setPosition(mr.x,mr.y,mr.z),t.setOrientation(gr.x,gr.y,gr.z,vr.x,vr.y,vr.z)}}class Bm extends Pt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Qe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Qe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Qe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Qe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Qe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Qe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Qe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Qe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const _r=new B,ff=new Tn,lx=new B,xr=new B;class cx extends Bm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_r,ff,lx),xr.set(0,0,1).applyQuaternion(ff);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(_r.x,n),t.positionY.linearRampToValueAtTime(_r.y,n),t.positionZ.linearRampToValueAtTime(_r.z,n),t.orientationX.linearRampToValueAtTime(xr.x,n),t.orientationY.linearRampToValueAtTime(xr.y,n),t.orientationZ.linearRampToValueAtTime(xr.z,n)}else t.setPosition(_r.x,_r.y,_r.z),t.setOrientation(xr.x,xr.y,xr.z)}}class hx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class zm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Tn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Tn.multiplyQuaternionsFlat(e,o,e,t,e,n),Tn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Hu="\\[\\]\\.:\\/",ux=new RegExp("["+Hu+"]","g"),Wu="[^"+Hu+"]",dx="[^"+Hu.replace("\\.","")+"]",fx=/((?:WC+[\/:])*)/.source.replace("WC",Wu),px=/(WCOD+)?/.source.replace("WCOD",dx),mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),vx=new RegExp("^"+fx+px+mx+gx+"$"),_x=["material","materials","bones","map"];class xx{constructor(e,t,n){const i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ux,"")}static parseTrackName(e){const t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);_x.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=xx;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Gn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(u);for(let x=0,m=o;x!==m;++x)s[x].push(new Rt(u,n[x],i[x]))}else if(p<c){a=e[p];const x=--c,m=e[x];t[m.uuid]=p,e[p]=m,t[f]=x,e[x]=u;for(let g=0,_=o;g!==_;++g){const y=s[g],M=y[x];let C=y[p];y[p]=M,C===void 0&&(C=new Rt(u,n[g],i[g])),y[x]=C}}else e[p]!==a&&ht("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const d=s++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,p=i;f!==p;++f){const x=n[f],m=x[d],g=x[h];x[h]=m,x[d]=g}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<s){const u=--s,f=e[u],p=--o,x=e[p];t[f.uuid]=d,e[d]=f,t[x.uuid]=u,e[u]=x,e.pop();for(let m=0,g=i;m!==g;++m){const _=n[m],y=_[u],M=_[p];_[d]=y,_[u]=M,_.pop()}}else{const u=--o,f=e[u];u>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,x=i;p!==x;++p){const m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new Rt(p,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class km{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Tr,endingEnd:Tr};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Dp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case pu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Xl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Lp;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ip){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ar,i.endingEnd=Ar):(e?i.endingStart=this.zeroSlopeAtStart?Ar:Tr:i.endingStart=go,t?i.endingEnd=this.zeroSlopeAtEnd?Ar:Tr:i.endingEnd=go)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const Mx=new Float32Array(1);class Sx extends xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=t&&t._propertyBindings[d].binding.parsedPath;p=new zm(Rt.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Fu(new Float32Array(2),new Float32Array(2),1,Mx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Eo.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xl),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new km(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Eo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class bx extends gu{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Jl(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Xu{constructor(e){this.value=e}clone(){return new Xu(this.value.clone===void 0?this.value:this.value.clone())}}let wx=0;class Tx extends xi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.usage=_o,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class Ax extends ec{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ex{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const pf=new ft;class Vm{constructor(e,t,n=0,i=1/0){this.ray=new ir(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pf),this}intersectObject(e,t=!0,n=[]){return kh(e,this,n,t),n.sort(mf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)kh(e[i],this,n,t);return n.sort(mf),n}}function mf(r,e){return r.distance-e.distance}function kh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)kh(s[o],e,t,!0)}}class Cx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Qe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Px{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rx{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class qu{constructor(e,t,n,i){qu.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const gf=new ke;class Ix{constructor(e=new ke(1/0,1/0),t=new ke(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vf=new B,Ea=new B,ls=new B,cs=new B,ph=new B,Dx=new B,Lx=new B;class Gm{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vf.subVectors(e,this.start),Ea.subVectors(this.end,this.start);const n=Ea.dot(Ea);let s=Ea.dot(vf)/n;return t&&(s=_t(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Dx,n=Lx){const i=10000000000000001e-32;let s,o;const a=this.start,l=e.start,c=this.end,h=e.end;ls.subVectors(c,a),cs.subVectors(h,l),ph.subVectors(a,l);const d=ls.dot(ls),u=cs.dot(cs),f=cs.dot(ph);if(d<=i&&u<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(d<=i)s=0,o=f/u,o=_t(o,0,1);else{const p=ls.dot(ph);if(u<=i)o=0,s=_t(-p/d,0,1);else{const x=ls.dot(cs),m=d*u-x*x;m!==0?s=_t((x*f-p*u)/m,0,1):s=0,o=(x*s+f)/u,o<0?(o=0,s=_t(-p/d,0,1)):o>1&&(o=1,s=_t((x-p)/d,0,1))}}return t.copy(a).addScaledVector(ls,s),n.copy(l).addScaledVector(cs,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const _f=new B;class Nx extends Pt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new yt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new rt(i,3));const s=new Cn({fog:!1,toneMapped:!1});this.cone=new yi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),_f.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(_f),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Wi=new B,Ca=new ft,mh=new ft;class Ux extends yi{constructor(e){const t=$m(e),n=new yt,i=[],s=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new rt(i,3)),n.setAttribute("color",new rt(s,3));const o=new Cn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new it(255),l=new it(65280);this.setColors(a,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");mh.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Ca.multiplyMatrices(mh,a.matrixWorld),Wi.setFromMatrixPosition(Ca),i.setXYZ(o,Wi.x,Wi.y,Wi.z),Ca.multiplyMatrices(mh,a.parent.matrixWorld),Wi.setFromMatrixPosition(Ca),i.setXYZ(o+1,Wi.x,Wi.y,Wi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function $m(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...$m(r.children[t]));return e}class Fx extends Kt{constructor(e,t,n){const i=new Bo(t,4,2),s=new Ni({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Ox=new B,xf=new it,yf=new it;class Bx extends Pt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Oo(t);i.rotateY(Math.PI*.5),this.material=new Ni({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Ft(o,3)),this.add(new Kt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");xf.copy(this.light.color),yf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?xf:yf;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Ox.setFromMatrixPosition(this.light.matrixWorld).negate())}}class zx extends yi{constructor(e=10,t=10,n=4473924,i=8947848){n=new it(n),i=new it(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,p=-a;u<=t;u++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const x=u===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new yt;h.setAttribute("position",new rt(l,3)),h.setAttribute("color",new rt(c,3));const d=new Cn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class kx extends yi{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new it(s),o=new it(o);const a=[],l=[];if(t>1)for(let d=0;d<t;d++){const u=d/t*(Math.PI*2),f=Math.sin(u)*e,p=Math.cos(u)*e;a.push(0,0,0),a.push(f,0,p);const x=d&1?s:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){const u=d&1?s:o,f=e-e/n*d;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;a.push(m,0,g),l.push(u.r,u.g,u.b),x=(p+1)/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,a.push(m,0,g),l.push(u.r,u.g,u.b)}}const c=new yt;c.setAttribute("position",new rt(a,3)),c.setAttribute("color",new rt(l,3));const h=new Cn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Mf=new B,Pa=new B,Sf=new B;class Vx extends Pt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new yt;i.setAttribute("position",new rt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Cn({fog:!1,toneMapped:!1});this.lightPlane=new tr(i,s),this.add(this.lightPlane),i=new yt,i.setAttribute("position",new rt([0,0,0,0,0,1],3)),this.targetLine=new tr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Mf.setFromMatrixPosition(this.light.matrixWorld),Pa.setFromMatrixPosition(this.light.target.matrixWorld),Sf.subVectors(Pa,Mf),this.lightPlane.lookAt(Pa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Pa),this.targetLine.scale.z=Sf.length()}}const Ra=new B,Wt=new vc;class Gx extends yi{constructor(e){const t=new yt,n=new Cn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,x){l(p),l(x)}function l(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new rt(i,3)),t.setAttribute("color",new rt(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new it(16755200),h=new it(16711680),d=new it(43775),u=new it(16777215),f=new it(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(Wt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===Vn)s=-1,o=1;else if(this.camera.coordinateSystem===Lr)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Qt("c",t,e,Wt,0,0,s),Qt("t",t,e,Wt,0,0,o),Qt("n1",t,e,Wt,-n,-i,s),Qt("n2",t,e,Wt,n,-i,s),Qt("n3",t,e,Wt,-n,i,s),Qt("n4",t,e,Wt,n,i,s),Qt("f1",t,e,Wt,-n,-i,o),Qt("f2",t,e,Wt,n,-i,o),Qt("f3",t,e,Wt,-n,i,o),Qt("f4",t,e,Wt,n,i,o),Qt("u1",t,e,Wt,n*.7,i*1.1,s),Qt("u2",t,e,Wt,-n*.7,i*1.1,s),Qt("u3",t,e,Wt,0,i*2,s),Qt("cf1",t,e,Wt,-n,0,o),Qt("cf2",t,e,Wt,n,0,o),Qt("cf3",t,e,Wt,0,-i,o),Qt("cf4",t,e,Wt,0,i,o),Qt("cn1",t,e,Wt,-n,0,s),Qt("cn2",t,e,Wt,n,0,s),Qt("cn3",t,e,Wt,0,-i,s),Qt("cn4",t,e,Wt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qt(r,e,t,n,i,s,o){Ra.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Ra.x,Ra.y,Ra.z)}}const Ia=new sn;class $x extends yi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new yt;s.setIndex(new Ft(n,1)),s.setAttribute("position",new Ft(i,3)),super(s,new Cn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ia.setFromObject(this.object),Ia.isEmpty())return;const e=Ia.min,t=Ia.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hx extends yi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new yt;s.setIndex(new Ft(n,1)),s.setAttribute("position",new rt(i,3)),super(s,new Cn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wx extends tr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new yt;o.setAttribute("position",new rt(s,3)),o.computeBoundingSphere(),super(o,new Cn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new yt;l.setAttribute("position",new rt(a,3)),l.computeBoundingSphere(),this.add(new Kt(l,new Ni({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const bf=new B;let Da,gh;class Xx extends Pt{constructor(e=new B(0,0,1),t=new B(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Da===void 0&&(Da=new yt,Da.setAttribute("position",new rt([0,0,0,0,1,0],3)),gh=new Fo(.5,1,5,1),gh.translate(0,-.5,0)),this.position.copy(t),this.line=new tr(Da,new Cn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Kt(gh,new Ni({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{bf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(bf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class qx extends yi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new yt;i.setAttribute("position",new rt(t,3)),i.setAttribute("color",new rt(n,3));const s=new Cn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new it,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yx{constructor(){this.type="ShapePath",this.color=new it,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Dl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const _=[];for(let y=0,M=g.length;y<M;y++){const C=g[y],E=new ji;E.curves=C.curves,_.push(E)}return _}function n(g,_){const y=_.length;let M=!1;for(let C=y-1,E=0;E<y;C=E++){let L=_[C],S=_[E],A=S.x-L.x,R=S.y-L.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(L=_[E],A=-A,S=_[C],R=-R),g.y<L.y||g.y>S.y)continue;if(g.y===L.y){if(g.x===L.x)return!0}else{const U=R*(g.x-L.x)-A*(g.y-L.y);if(U===0)return!0;if(U<0)continue;M=!M}}else{if(g.y!==L.y)continue;if(S.x<=g.x&&g.x<=L.x||L.x<=g.x&&g.x<=S.x)return!0}}return M}const i=ii.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ji,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const d=[],u=[];let f=[],p=0,x;u[p]=void 0,f[p]=[];for(let g=0,_=s.length;g<_;g++)a=s[g],x=a.getPoints(),o=i(x),o=e?!o:o,o?(!h&&u[p]&&p++,u[p]={s:new ji,p:x},u[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:x[0]});if(!u[0])return t(s);if(u.length>1){let g=!1,_=0;for(let y=0,M=u.length;y<M;y++)d[y]=[];for(let y=0,M=u.length;y<M;y++){const C=f[y];for(let E=0;E<C.length;E++){const L=C[E];let S=!0;for(let A=0;A<u.length;A++)n(L.p,u[A].p)&&(y!==A&&_++,S?(S=!1,d[A].push(L)):g=!0);S&&d[y].push(L)}}_>0&&g===!1&&(f=d)}let m;for(let g=0,_=u.length;g<_;g++){l=u[g].s,c.push(l),m=f[g];for(let y=0,M=m.length;y<M;y++)l.holes.push(m[y].h)}return c}}class Zx extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jx(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function Kx(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function jx(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Vh(r,e,t,n){const i=Qx(n);switch(t){case du:return r*e;case $l:return r*e/i.components*i.byteLength;case Lo:return r*e/i.components*i.byteLength;case Ir:return r*e*2/i.components*i.byteLength;case Hl:return r*e*2/i.components*i.byteLength;case fu:return r*e*3/i.components*i.byteLength;case bn:return r*e*4/i.components*i.byteLength;case Wl:return r*e*4/i.components*i.byteLength;case no:case io:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ro:case so:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Qa:return Math.max(r,16)*Math.max(e,8)/4;case Ja:case ja:return Math.max(r,8)*Math.max(e,8)/2;case el:case tl:case il:case rl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nl:case sl:case ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Sl:case bl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case wl:case Tl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Al:case El:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qx(r){switch(r){case Dn:case lu:return{byteLength:1,components:1};case xs:case cu:case vi:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case qn:case kl:case Sn:return{byteLength:4,components:1};case hu:case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class ey{static contain(e,t){return Jx(e,t)}static cover(e,t){return Kx(e,t)}static fill(e){return jx(e)}static getByteLength(e,t,n,i){return Vh(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);function Hm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ty(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ny=`#ifdef USE_ALPHAHASH
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
#endif`,hy=`#ifdef USE_BATCHING
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
#endif`,uy=`#ifdef USE_BATCHING
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
#endif`,ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$y=`#ifdef USE_GRADIENTMAP
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
#endif`,hM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uM=`#if defined( USE_POINTS_UV )
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
#endif`,kM=`float getShadowMask() {
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
}`,VM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GM=`#ifdef USE_SKINNING
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
#endif`,$M=`#ifdef USE_SKINNING
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
}`,hS=`#define DISTANCE
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
}`,uS=`varying vec3 vWorldDirection;
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
}`,mt={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:hy,batching_vertex:uy,begin_vertex:dy,beginnormal_vertex:fy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:vy,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:xy,clipping_planes_vertex:yy,color_fragment:My,color_pars_fragment:Sy,color_pars_vertex:by,color_vertex:wy,common:Ty,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Ey,displacementmap_pars_vertex:Cy,displacementmap_vertex:Py,emissivemap_fragment:Ry,emissivemap_pars_fragment:Iy,colorspace_fragment:Dy,colorspace_pars_fragment:Ly,envmap_fragment:Ny,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Fy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:Yy,envmap_vertex:By,fog_vertex:zy,fog_pars_vertex:ky,fog_fragment:Vy,fog_pars_fragment:Gy,gradientmap_pars_fragment:$y,lightmap_pars_fragment:Hy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:Xy,lights_pars_begin:qy,lights_toon_fragment:Zy,lights_toon_pars_fragment:Jy,lights_phong_fragment:Ky,lights_phong_pars_fragment:jy,lights_physical_fragment:Qy,lights_physical_pars_fragment:eM,lights_fragment_begin:tM,lights_fragment_maps:nM,lights_fragment_end:iM,logdepthbuf_fragment:rM,logdepthbuf_pars_fragment:sM,logdepthbuf_pars_vertex:oM,logdepthbuf_vertex:aM,map_fragment:lM,map_pars_fragment:cM,map_particle_fragment:hM,map_particle_pars_fragment:uM,metalnessmap_fragment:dM,metalnessmap_pars_fragment:fM,morphinstance_vertex:pM,morphcolor_vertex:mM,morphnormal_vertex:gM,morphtarget_pars_vertex:vM,morphtarget_vertex:_M,normal_fragment_begin:xM,normal_fragment_maps:yM,normal_pars_fragment:MM,normal_pars_vertex:SM,normal_vertex:bM,normalmap_pars_fragment:wM,clearcoat_normal_fragment_begin:TM,clearcoat_normal_fragment_maps:AM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:CM,opaque_fragment:PM,packing:RM,premultiplied_alpha_fragment:IM,project_vertex:DM,dithering_fragment:LM,dithering_pars_fragment:NM,roughnessmap_fragment:UM,roughnessmap_pars_fragment:FM,shadowmap_pars_fragment:OM,shadowmap_pars_vertex:BM,shadowmap_vertex:zM,shadowmask_pars_fragment:kM,skinbase_vertex:VM,skinning_pars_vertex:GM,skinning_vertex:$M,skinnormal_vertex:HM,specularmap_fragment:WM,specularmap_pars_fragment:XM,tonemapping_fragment:qM,tonemapping_pars_fragment:YM,transmission_fragment:ZM,transmission_pars_fragment:JM,uv_pars_fragment:KM,uv_pars_vertex:jM,uv_vertex:QM,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distance_vert:cS,distance_frag:hS,equirect_vert:uS,equirect_frag:dS,linedashed_vert:fS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:vS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:yS,meshnormal_vert:MS,meshnormal_frag:SS,meshphong_vert:bS,meshphong_frag:wS,meshphysical_vert:TS,meshphysical_frag:AS,meshtoon_vert:ES,meshtoon_frag:CS,points_vert:PS,points_frag:RS,shadow_vert:IS,shadow_frag:DS,sprite_vert:LS,sprite_frag:NS},je={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Xn={basic:{uniforms:yn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:yn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:yn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:yn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:yn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new it(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:yn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:yn([je.points,je.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:yn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:yn([je.common,je.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:yn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:yn([je.sprite,je.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:yn([je.common,je.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:yn([je.lights,je.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Xn.physical={uniforms:yn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const La={r:0,b:0,g:0},yr=new Hn,US=new ft;function FS(r,e,t,n,i,s){const o=new it(0);let a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const M=_.backgroundBlurriness>0;y=e.get(y,M)}return y}function p(_){let y=!1;const M=f(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(_,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===As)?(c===void 0&&(c=new Kt(new Or(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ts(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),yr.copy(y.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(US.makeRotationFromEuler(yr)),c.material.toneMapped=At.getTransfer(M.colorSpace)!==Lt,(h!==M||d!==M.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Kt(new Cs(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ts(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=At.getTransfer(M.colorSpace)!==Lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(La,mm(r)),t.buffers.color.setClear(La.r,La.g,La.b,y,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function OS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(U,W,Y,ne,k){let G=!1;const V=d(U,ne,Y,W);s!==V&&(s=V,c(s.object)),G=f(U,ne,Y,k),G&&p(U,ne,Y,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(U,W,Y,ne),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(U){return r.bindVertexArray(U)}function h(U){return r.deleteVertexArray(U)}function d(U,W,Y,ne){const k=ne.wireframe===!0;let G=n[W.id];G===void 0&&(G={},n[W.id]=G);const V=U.isInstancedMesh===!0?U.id:0;let se=G[V];se===void 0&&(se={},G[V]=se);let de=se[Y.id];de===void 0&&(de={},se[Y.id]=de);let Ae=de[k];return Ae===void 0&&(Ae=u(l()),de[k]=Ae),Ae}function u(U){const W=[],Y=[],ne=[];for(let k=0;k<t;k++)W[k]=0,Y[k]=0,ne[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:ne,object:U,attributes:{},index:null}}function f(U,W,Y,ne){const k=s.attributes,G=W.attributes;let V=0;const se=Y.getAttributes();for(const de in se)if(se[de].location>=0){const me=k[de];let we=G[de];if(we===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(we=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(we=U.instanceColor)),me===void 0||me.attribute!==we||we&&me.data!==we.data)return!0;V++}return s.attributesNum!==V||s.index!==ne}function p(U,W,Y,ne){const k={},G=W.attributes;let V=0;const se=Y.getAttributes();for(const de in se)if(se[de].location>=0){let me=G[de];me===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(me=U.instanceColor));const we={};we.attribute=me,me&&me.data&&(we.data=me.data),k[de]=we,V++}s.attributes=k,s.attributesNum=V,s.index=ne}function x(){const U=s.newAttributes;for(let W=0,Y=U.length;W<Y;W++)U[W]=0}function m(U){g(U,0)}function g(U,W){const Y=s.newAttributes,ne=s.enabledAttributes,k=s.attributeDivisors;Y[U]=1,ne[U]===0&&(r.enableVertexAttribArray(U),ne[U]=1),k[U]!==W&&(r.vertexAttribDivisor(U,W),k[U]=W)}function _(){const U=s.newAttributes,W=s.enabledAttributes;for(let Y=0,ne=W.length;Y<ne;Y++)W[Y]!==U[Y]&&(r.disableVertexAttribArray(Y),W[Y]=0)}function y(U,W,Y,ne,k,G,V){V===!0?r.vertexAttribIPointer(U,W,Y,k,G):r.vertexAttribPointer(U,W,Y,ne,k,G)}function M(U,W,Y,ne){x();const k=ne.attributes,G=Y.getAttributes(),V=W.defaultAttributeValues;for(const se in G){const de=G[se];if(de.location>=0){let Ae=k[se];if(Ae===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(Ae=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(Ae=U.instanceColor)),Ae!==void 0){const me=Ae.normalized,we=Ae.itemSize,Be=e.get(Ae);if(Be===void 0)continue;const st=Be.buffer,$e=Be.type,oe=Be.bytesPerElement,ce=$e===r.INT||$e===r.UNSIGNED_INT||Ae.gpuType===kl;if(Ae.isInterleavedBufferAttribute){const ge=Ae.data,De=ge.stride,Ce=Ae.offset;if(ge.isInstancedInterleavedBuffer){for(let Fe=0;Fe<de.locationSize;Fe++)g(de.location+Fe,ge.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<de.locationSize;Fe++)m(de.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,st);for(let Fe=0;Fe<de.locationSize;Fe++)y(de.location+Fe,we/de.locationSize,$e,me,De*oe,(Ce+we/de.locationSize*Fe)*oe,ce)}else{if(Ae.isInstancedBufferAttribute){for(let ge=0;ge<de.locationSize;ge++)g(de.location+ge,Ae.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ge=0;ge<de.locationSize;ge++)m(de.location+ge);r.bindBuffer(r.ARRAY_BUFFER,st);for(let ge=0;ge<de.locationSize;ge++)y(de.location+ge,we/de.locationSize,$e,me,we*oe,we/de.locationSize*ge*oe,ce)}}else if(V!==void 0){const me=V[se];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(de.location,me);break;case 3:r.vertexAttrib3fv(de.location,me);break;case 4:r.vertexAttrib4fv(de.location,me);break;default:r.vertexAttrib1fv(de.location,me)}}}}_()}function C(){A();for(const U in n){const W=n[U];for(const Y in W){const ne=W[Y];for(const k in ne){const G=ne[k];for(const V in G)h(G[V].object),delete G[V];delete ne[k]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;const W=n[U.id];for(const Y in W){const ne=W[Y];for(const k in ne){const G=ne[k];for(const V in G)h(G[V].object),delete G[V];delete ne[k]}}delete n[U.id]}function L(U){for(const W in n){const Y=n[W];for(const ne in Y){const k=Y[ne];if(k[U.id]===void 0)continue;const G=k[U.id];for(const V in G)h(G[V].object),delete G[V];delete k[U.id]}}}function S(U){for(const W in n){const Y=n[W],ne=U.isInstancedMesh===!0?U.id:0,k=Y[ne];if(k!==void 0){for(const G in k){const V=k[G];for(const se in V)h(V[se].object),delete V[se];delete k[G]}delete Y[ne],Object.keys(Y).length===0&&delete n[W]}}}function A(){R(),o=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function BS(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let p=0;p<d;p++)f+=h[p];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x]*u[x];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==bn&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const S=L===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Dn&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Sn&&!S)}function l(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:C,samples:E}}function kS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ci,a=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,y=_*4;let M=g.clippingState||null;l.value=M,M=h(p,u,y,f);for(let C=0;C!==y;++C)M[C]=t[C];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=f;y!==x;++y,M+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Ji=4,wf=[.125,.215,.35,.446,.526,.582],wr=20,VS=256,Ws=new Vr,Tf=new it;let vh=null,_h=0,xh=0,yh=!1;const GS=new B;class Gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=GS}=s;vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,_h,xh),this._renderer.xr.enabled=yh,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:vi,format:bn,colorSpace:Dr,depthBuffer:!1},i=Af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Af(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$S(s)),this._blurMaterial=WS(s,e,t),this._ggxMaterial=HS(s,e,t)}return i}_compileMaterial(e){const t=new Kt(new yt,e);this._renderer.compile(t,Ws)}_sceneToCubeUV(e,t,n,i,s){const l=new dn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Tf),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new Or,new Ni({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(Tf),g=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const C=this._cubeSize;hs(i,M*C,y>2?C:0,C,C),d.setRenderTarget(i),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gi||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Ji?n-p+Ji:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,hs(s,m,g,3*x,2*x),i.setRenderTarget(s),i.render(a,Ws),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,hs(e,m,g,3*x,2*x),i.setRenderTarget(e),i.render(a,Ws)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*wr-1),x=s/p,m=isFinite(s)?1+Math.floor(h*x):wr;m>wr&&Qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const g=[];let _=0;for(let L=0;L<wr;++L){const S=L/x,A=Math.exp(-S*S/2);g.push(A),L===0?_+=A:L<m&&(_+=2*A)}for(let L=0;L<g.length;L++)g[L]=g[L]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-n;const M=this._sizeLods[i],C=3*M*(i>y-Ji?i-y+Ji:0),E=4*(this._cubeSize-M);hs(t,C,E,3*M,2*M),l.setRenderTarget(t),l.render(d,Ws)}}function $S(r){const e=[],t=[],n=[];let i=r;const s=r-Ji+1+wf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ji?l=wf[o-r+Ji-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,x=3,m=2,g=1,_=new Float32Array(x*p*f),y=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let E=0;E<f;E++){const L=E%3*2/3-1,S=E>2?0:-1,A=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];_.set(A,x*p*E),y.set(u,m*p*E);const R=[E,E,E,E,E,E];M.set(R,g*p*E)}const C=new yt;C.setAttribute("position",new Ft(_,x)),C.setAttribute("uv",new Ft(y,m)),C.setAttribute("faceIndex",new Ft(M,g)),n.push(new Kt(C,null)),i>Ji&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Af(r,e,t){const n=new $n(r,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function HS(r,e,t){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function WS(r,e,t){const n=new Float32Array(wr),i=new B(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ef(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Cf(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}class Yu extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new No(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Or(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:mi});s.uniforms.tEquirect.value=t;const o=new Kt(i,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=zt),new Um(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function XS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Qs||f===eo)if(e.has(u)){const p=e.get(u).texture;return a(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new Yu(p.height);return x.fromEquirectangularTexture(r,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,p=f===Qs||f===eo,x=f===gi||f===Qi;if(p||x){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Gh(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Gh(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Qs?u.mapping=gi:f===eo&&(u.mapping=Qi),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function qS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Mo("WebGLRenderer: "+n+" extension not supported."),i}}}function YS(r,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const _=f.array;x=f.version;for(let y=0,M=_.length;y<M;y+=3){const C=_[y+0],E=_[y+1],L=_[y+2];u.push(C,E,E,L,L,C)}}else{const _=p.array;x=p.version;for(let y=0,M=_.length/3-1;y<M;y+=3){const C=y+0,E=y+1,L=y+2;u.push(C,E,E,L,L,C)}}const m=new(p.count>=65535?xu:_u)(u,1);m.version=x;const g=s.get(d);g&&e.remove(g),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ZS(r,e,t){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),t.update(f,n,1)}function c(u,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,u*o,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function d(u,f,p,x){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)c(u[g]/o,f[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,x,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_]*x[_];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function JS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function KS(r,e,t){const n=new WeakMap,i=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let A=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*C*4*d),L=new Zl(E,M,C,d);L.type=Sn,L.needsUpdate=!0;const S=y*4;for(let R=0;R<d;R++){const U=m[R],W=g[R],Y=_[R],ne=M*C*4*R;for(let k=0;k<U.count;k++){const G=k*S;f===!0&&(i.fromBufferAttribute(U,k),E[ne+G+0]=i.x,E[ne+G+1]=i.y,E[ne+G+2]=i.z,E[ne+G+3]=0),p===!0&&(i.fromBufferAttribute(W,k),E[ne+G+4]=i.x,E[ne+G+5]=i.y,E[ne+G+6]=i.z,E[ne+G+7]=0),x===!0&&(i.fromBufferAttribute(Y,k),E[ne+G+8]=i.x,E[ne+G+9]=i.y,E[ne+G+10]=i.z,E[ne+G+11]=Y.itemSize===4?i.w:1)}}u={count:d,texture:L,size:new ke(M,C)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function jS(r,e,t,n,i){let s=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const QS={[tu]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[iu]:"CINEON_TONE_MAPPING",[ru]:"ACES_FILMIC_TONE_MAPPING",[uo]:"AGX_TONE_MAPPING",[ou]:"NEUTRAL_TONE_MAPPING",[su]:"CUSTOM_TONE_MAPPING"};function eb(r,e,t,n,i){const s=new $n(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new $n(e,t,{type:vi,depthBuffer:!1,stencilBuffer:!1}),a=new yt;a.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new rt([0,2,0,0,2,0],2));const l=new Iu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Kt(a,l),h=new Vr(-1,1,1,-1,0,1);let d=null,u=null,f=!1,p,x=null,m=[],g=!1;this.setSize=function(_,y){s.setSize(_,y),o.setSize(_,y);for(let M=0;M<m.length;M++){const C=m[M];C.setSize&&C.setSize(_,y)}},this.setEffects=function(_){m=_,g=m.length>0&&m[0].isRenderPass===!0;const y=s.width,M=s.height;for(let C=0;C<m.length;C++){const E=m[C];E.setSize&&E.setSize(y,M)}},this.begin=function(_,y){if(f||_.toneMapping===ri&&m.length===0)return!1;if(x=y,y!==null){const M=y.width,C=y.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return g===!1&&_.setRenderTarget(s),p=_.toneMapping,_.toneMapping=ri,!0},this.hasRenderPass=function(){return g},this.end=function(_,y){_.toneMapping=p,f=!0;let M=s,C=o;for(let E=0;E<m.length;E++){const L=m[E];if(L.enabled!==!1&&(L.render(_,C,M,y),L.needsSwap!==!1)){const S=M;M=C,C=S}}if(d!==_.outputColorSpace||u!==_.toneMapping){d=_.outputColorSpace,u=_.toneMapping,l.defines={},At.getTransfer(d)===Lt&&(l.defines.SRGB_TRANSFER="");const E=QS[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(x),_.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Wm=new Jt,$h=new bs(1,1),Xm=new Zl,qm=new Jl,Ym=new No,Pf=[],Rf=[],If=new Float32Array(16),Df=new Float32Array(9),Lf=new Float32Array(4);function Rs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pf[i];if(s===void 0&&(s=new Float32Array(i),Pf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yc(r,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function sb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Lf.set(n),r.uniformMatrix2fv(this.addr,!1,Lf),ln(t,n)}}function ob(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Df.set(n),r.uniformMatrix3fv(this.addr,!1,Df),ln(t,n)}}function ab(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;If.set(n),r.uniformMatrix4fv(this.addr,!1,If),ln(t,n)}}function lb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function db(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function gb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?($h.compareFunction=t.isReversedDepthBuffer()?Yl:ql,s=$h):s=Wm,t.setTexture2D(e||s,i)}function vb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qm,i)}function _b(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ym,i)}function xb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xm,i)}function yb(r){switch(r){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return hb;case 35669:case 35673:return ub;case 5125:return db;case 36294:return fb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return xb}}function Mb(r,e){r.uniform1fv(this.addr,e)}function Sb(r,e){const t=Rs(e,this.size,2);r.uniform2fv(this.addr,t)}function bb(r,e){const t=Rs(e,this.size,3);r.uniform3fv(this.addr,t)}function wb(r,e){const t=Rs(e,this.size,4);r.uniform4fv(this.addr,t)}function Tb(r,e){const t=Rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ab(r,e){const t=Rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Eb(r,e){const t=Rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Cb(r,e){r.uniform1iv(this.addr,e)}function Pb(r,e){r.uniform2iv(this.addr,e)}function Rb(r,e){r.uniform3iv(this.addr,e)}function Ib(r,e){r.uniform4iv(this.addr,e)}function Db(r,e){r.uniform1uiv(this.addr,e)}function Lb(r,e){r.uniform2uiv(this.addr,e)}function Nb(r,e){r.uniform3uiv(this.addr,e)}function Ub(r,e){r.uniform4uiv(this.addr,e)}function Fb(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=$h:o=Wm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Ob(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||qm,s[o])}function Bb(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ym,s[o])}function zb(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xm,s[o])}function kb(r){switch(r){case 5126:return Mb;case 35664:return Sb;case 35665:return bb;case 35666:return wb;case 35674:return Tb;case 35675:return Ab;case 35676:return Eb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Rb;case 35669:case 35673:return Ib;case 5125:return Db;case 36294:return Lb;case 36295:return Nb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return zb}}class Vb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yb(t.type)}}class Gb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kb(t.type)}}class $b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function Nf(r,e){r.seq.push(e),r.map[e.id]=e}function Hb(r,e,t){const n=r.name,i=n.length;for(Mh.lastIndex=0;;){const s=Mh.exec(n),o=Mh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nf(t,c===void 0?new Vb(a,r,e):new Gb(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new $b(a),Nf(t,d)),t=d}}}class ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Hb(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Uf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Wb=37297;let Xb=0;function qb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ff=new Mt;function Yb(r){At._getMatrix(Ff,At.workingColorSpace,r);const e=`mat3( ${Ff.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(r)){case vo:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Of(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+qb(r.getShaderSource(e),a)}else return s}function Zb(r,e){const t=Yb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jb={[tu]:"Linear",[nu]:"Reinhard",[iu]:"Cineon",[ru]:"ACESFilmic",[uo]:"AgX",[ou]:"Neutral",[su]:"Custom"};function Kb(r,e){const t=Jb[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Na=new B;function jb(){At.getLuminanceCoefficients(Na);const r=Na.x.toFixed(4),e=Na.y.toFixed(4),t=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function e1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Js(r){return r!==""}function Bf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(r){return r.replace(n1,r1)}const i1=new Map;function r1(r,e){let t=mt[e];if(t===void 0){const n=i1.get(e);if(n!==void 0)t=mt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(r){return r.replace(s1,o1)}function o1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vf(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const a1={[Ks]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function l1(r){return a1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c1={[gi]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE_UV"};function h1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":c1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const u1={[Qi]:"ENVMAP_MODE_REFRACTION"};function d1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":u1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const f1={[Do]:"ENVMAP_BLENDING_MULTIPLY",[Cp]:"ENVMAP_BLENDING_MIX",[Pp]:"ENVMAP_BLENDING_ADD"};function p1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":f1[r.combine]||"ENVMAP_BLENDING_NONE"}function m1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=l1(t),c=h1(t),h=d1(t),d=p1(t),u=m1(t),f=Qb(t),p=e1(s),x=i.createProgram();let m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Js).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Js).join(`
`),g.length>0&&(g+=`
`)):(m=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),g=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?mt.tonemapping_pars_fragment:"",t.toneMapping!==ri?Kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Zb("linearToOutputTexel",t.outputColorSpace),jb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=Hh(o),o=Bf(o,t),o=zf(o,t),a=Hh(a),a=Bf(a,t),a=zf(a,t),o=kf(o),a=kf(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+m+o,M=_+g+a,C=Uf(i,i.VERTEX_SHADER,y),E=Uf(i,i.FRAGMENT_SHADER,M);i.attachShader(x,C),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function L(U){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(x)||"",Y=i.getShaderInfoLog(C)||"",ne=i.getShaderInfoLog(E)||"",k=W.trim(),G=Y.trim(),V=ne.trim();let se=!0,de=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(se=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,C,E);else{const Ae=Of(i,C,"vertex"),me=Of(i,E,"fragment");ht("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+Ae+`
`+me)}else k!==""?Qe("WebGLProgram: Program Info Log:",k):(G===""||V==="")&&(de=!1);de&&(U.diagnostics={runnable:se,programLog:k,vertexShader:{log:G,prefix:m},fragmentShader:{log:V,prefix:g}})}i.deleteShader(C),i.deleteShader(E),S=new ka(i,x),A=t1(i,x)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,Wb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}let v1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x1(e),t.set(e,n)),n}}class x1{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}}function y1(r,e,t,n,i,s){const o=new Kl,a=new _1,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,A,R,U,W){const Y=U.fog,ne=W.geometry,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,V=e.get(S.envMap||k,G),se=V&&V.mapping===As?V.image.height:null,de=f[S.type];S.precision!==null&&(u=n.getMaxPrecision(S.precision),u!==S.precision&&Qe("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const Ae=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,me=Ae!==void 0?Ae.length:0;let we=0;ne.morphAttributes.position!==void 0&&(we=1),ne.morphAttributes.normal!==void 0&&(we=2),ne.morphAttributes.color!==void 0&&(we=3);let Be,st,$e,oe;if(de){const Ue=Xn[de];Be=Ue.vertexShader,st=Ue.fragmentShader}else Be=S.vertexShader,st=S.fragmentShader,a.update(S),$e=a.getVertexShaderID(S),oe=a.getFragmentShaderID(S);const ce=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),De=W.isInstancedMesh===!0,Ce=W.isBatchedMesh===!0,Fe=!!S.map,qe=!!S.matcap,ze=!!V,fe=!!S.aoMap,Ee=!!S.lightMap,_e=!!S.bumpMap,Ie=!!S.normalMap,N=!!S.displacementMap,Ne=!!S.emissiveMap,Te=!!S.metalnessMap,ve=!!S.roughnessMap,pe=S.anisotropy>0,P=S.clearcoat>0,b=S.dispersion>0,z=S.iridescence>0,q=S.sheen>0,he=S.transmission>0,X=pe&&!!S.anisotropyMap,Me=P&&!!S.clearcoatMap,j=P&&!!S.clearcoatNormalMap,Oe=P&&!!S.clearcoatRoughnessMap,Re=z&&!!S.iridescenceMap,le=z&&!!S.iridescenceThicknessMap,xe=q&&!!S.sheenColorMap,ie=q&&!!S.sheenRoughnessMap,J=!!S.specularMap,ee=!!S.specularColorMap,Le=!!S.specularIntensityMap,O=he&&!!S.transmissionMap,Q=he&&!!S.thicknessMap,re=!!S.gradientMap,te=!!S.alphaMap,H=S.alphaTest>0,$=!!S.alphaHash,Se=!!S.extensions;let He=ri;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(He=r.toneMapping);const Je={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:st,defines:S.defines,customVertexShaderID:$e,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&W._colorsTexture!==null,instancing:De,instancingColor:De&&W.instanceColor!==null,instancingMorph:De&&W.morphTexture!==null,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Dr,alphaToCoverage:!!S.alphaToCoverage,map:Fe,matcap:qe,envMap:ze,envMapMode:ze&&V.mapping,envMapCubeUVHeight:se,aoMap:fe,lightMap:Ee,bumpMap:_e,normalMap:Ie,displacementMap:N,emissiveMap:Ne,normalMapObjectSpace:Ie&&S.normalMapType===Up,normalMapTangentSpace:Ie&&S.normalMapType===nr,metalnessMap:Te,roughnessMap:ve,anisotropy:pe,anisotropyMap:X,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:j,clearcoatRoughnessMap:Oe,dispersion:b,iridescence:z,iridescenceMap:Re,iridescenceThicknessMap:le,sheen:q,sheenColorMap:xe,sheenRoughnessMap:ie,specularMap:J,specularColorMap:ee,specularIntensityMap:Le,transmission:he,transmissionMap:O,thicknessMap:Q,gradientMap:re,opaque:S.transparent===!1&&S.blending===Cr&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:H,alphaHash:$,combine:S.combine,mapUv:Fe&&p(S.map.channel),aoMapUv:fe&&p(S.aoMap.channel),lightMapUv:Ee&&p(S.lightMap.channel),bumpMapUv:_e&&p(S.bumpMap.channel),normalMapUv:Ie&&p(S.normalMap.channel),displacementMapUv:N&&p(S.displacementMap.channel),emissiveMapUv:Ne&&p(S.emissiveMap.channel),metalnessMapUv:Te&&p(S.metalnessMap.channel),roughnessMapUv:ve&&p(S.roughnessMap.channel),anisotropyMapUv:X&&p(S.anisotropyMap.channel),clearcoatMapUv:Me&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:j&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(S.sheenRoughnessMap.channel),specularMapUv:J&&p(S.specularMap.channel),specularColorMapUv:ee&&p(S.specularColorMap.channel),specularIntensityMapUv:Le&&p(S.specularIntensityMap.channel),transmissionMapUv:O&&p(S.transmissionMap.channel),thicknessMapUv:Q&&p(S.thicknessMap.channel),alphaMapUv:te&&p(S.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ie||pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ne.attributes.uv&&(Fe||te),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||ne.attributes.normal===void 0&&Ie===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:W.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:we,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&At.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ne&&S.emissiveMap.isVideoTexture===!0&&At.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)A.push(R),A.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(g(A,S),_(A,S),A.push(r.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function g(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const A=f[S.type];let R;if(A){const U=Xn[A];R=Ru.clone(U.uniforms)}else R=S.uniforms;return R}function M(S,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new g1(r,A,S,i),c.push(R),h.set(A,R)),R}function C(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function E(S){a.remove(S)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:L}}function M1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function S1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Gf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $f(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let _=r[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},r[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=m,_.group=g),e++,_}function l(u,f,p,x,m,g){const _=a(u,f,p,x,m,g);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function c(u,f,p,x,m,g){const _=a(u,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||S1),n.length>1&&n.sort(f||Gf),i.length>1&&i.sort(f||Gf)}function d(){for(let u=e,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function b1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new $f,r.set(n,[o])):i>=s.length?(o=new $f,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function w1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new it};break;case"SpotLight":t={position:new B,direction:new B,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function T1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let A1=0;function E1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function C1(r){const e=new w1,t=T1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new ft,o=new ft;function a(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,y=0,M=0,C=0,E=0,L=0;c.sort(E1);for(let A=0,R=c.length;A<R;A++){const U=c[A],W=U.color,Y=U.intensity,ne=U.distance;let k=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ir?k=U.shadow.map.texture:k=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=W.r*Y,d+=W.g*Y,u+=W.b*Y;else if(U.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(U.sh.coefficients[G],Y);L++}else if(U.isDirectionalLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,se=t.get(U);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,n.directionalShadow[f]=se,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=U.shadow.matrix,_++}n.directional[f]=G,f++}else if(U.isSpotLight){const G=e.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(W).multiplyScalar(Y),G.distance=ne,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,n.spot[x]=G;const V=U.shadow;if(U.map&&(n.spotLightMap[C]=U.map,C++,V.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[x]=V.matrix,U.castShadow){const se=t.get(U);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,n.spotShadow[x]=se,n.spotShadowMap[x]=k,M++}x++}else if(U.isRectAreaLight){const G=e.get(U);G.color.copy(W).multiplyScalar(Y),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=G,m++}else if(U.isPointLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){const V=U.shadow,se=t.get(U);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,se.shadowCameraNear=V.camera.near,se.shadowCameraFar=V.camera.far,n.pointShadow[p]=se,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=U.shadow.matrix,y++}n.point[p]=G,p++}else if(U.isHemisphereLight){const G=e.get(U);G.skyColor.copy(U.color).multiplyScalar(Y),G.groundColor.copy(U.groundColor).multiplyScalar(Y),n.hemi[g]=G,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=je.LTC_FLOAT_1,n.rectAreaLTC2=je.LTC_FLOAT_2):(n.rectAreaLTC1=je.LTC_HALF_1,n.rectAreaLTC2=je.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const S=n.hash;(S.directionalLength!==f||S.pointLength!==p||S.spotLength!==x||S.rectAreaLength!==m||S.hemiLength!==g||S.numDirectionalShadows!==_||S.numPointShadows!==y||S.numSpotShadows!==M||S.numSpotMaps!==C||S.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=L,S.directionalLength=f,S.pointLength=p,S.spotLength=x,S.rectAreaLength=m,S.hemiLength=g,S.numDirectionalShadows=_,S.numPointShadows=y,S.numSpotShadows=M,S.numSpotMaps=C,S.numLightProbes=L,n.version=A1++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0;const m=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const y=c[g];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Hf(r){const e=new C1(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function P1(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Hf(r),e.set(i,[a])):s>=o.length?(a=new Hf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const R1=`void main() {
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
}`,D1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],L1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Wf=new ft,Xs=new B,Sh=new B;function N1(r,e,t){let n=new Es;const i=new ke,s=new ke,o=new Dt,a=new Lu,l=new Nu,c={},h=t.maxTextureSize,d={[Di]:wn,[wn]:Di,[ni]:ni},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:R1,fragmentShader:I1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new yt;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let g=this.type;this.render=function(E,L,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===js&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ks);const A=r.getRenderTarget(),R=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),W=r.state;W.setBlending(mi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=g!==this.type;Y&&L.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(k=>k.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,k=E.length;ne<k;ne++){const G=E[ne],V=G.shadow;if(V===void 0){Qe("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const se=V.getFrameExtents();i.multiply(se),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/se.x),i.x=s.x*se.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/se.y),i.y=s.y*se.y,V.mapSize.y=s.y));const de=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=de,V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ds){if(G.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new $n(i.x,i.y,{format:Ir,type:vi,minFilter:zt,magFilter:zt,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new bs(i.x,i.y,Sn),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=_i,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=en,V.map.depthTexture.magFilter=en}else G.isPointLight?(V.map=new Yu(i.x),V.map.depthTexture=new nm(i.x,qn)):(V.map=new $n(i.x,i.y),V.map.depthTexture=new bs(i.x,i.y,qn)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=_i,this.type===Ks?(V.map.depthTexture.compareFunction=de?Yl:ql,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=en,V.map.depthTexture.magFilter=en);V.camera.updateProjectionMatrix()}const Ae=V.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<Ae;me++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,me),r.clear();else{me===0&&(r.setRenderTarget(V.map),r.clear());const we=V.getViewport(me);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),W.viewport(o)}if(G.isPointLight){const we=V.camera,Be=V.matrix,st=G.distance||we.far;st!==we.far&&(we.far=st,we.updateProjectionMatrix()),Xs.setFromMatrixPosition(G.matrixWorld),we.position.copy(Xs),Sh.copy(we.position),Sh.add(D1[me]),we.up.copy(L1[me]),we.lookAt(Sh),we.updateMatrixWorld(),Be.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Wf.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Wf,we.coordinateSystem,we.reversedDepth)}else V.updateMatrices(G);n=V.getFrustum(),M(L,S,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===ds&&_(V,S),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(A,R,U)};function _(E,L){const S=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $n(i.x,i.y,{format:Ir,type:vi})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(L,null,S,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(L,null,S,f,x,null)}function y(E,L,S,A){let R=null;const U=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)R=U;else if(R=S.isPointLight===!0?l:a,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const W=R.uuid,Y=L.uuid;let ne=c[W];ne===void 0&&(ne={},c[W]=ne);let k=ne[Y];k===void 0&&(k=R.clone(),ne[Y]=k,L.addEventListener("dispose",C)),R=k}if(R.visible=L.visible,R.wireframe=L.wireframe,A===ds?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:d[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const W=r.properties.get(R);W.light=S}return R}function M(E,L,S,A,R){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===ds)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const Y=e.update(E),ne=E.material;if(Array.isArray(ne)){const k=Y.groups;for(let G=0,V=k.length;G<V;G++){const se=k[G],de=ne[se.materialIndex];if(de&&de.visible){const Ae=y(E,de,A,R);E.onBeforeShadow(r,E,L,S,Y,Ae,se),r.renderBufferDirect(S,null,Y,Ae,E,se),E.onAfterShadow(r,E,L,S,Y,Ae,se)}}}else if(ne.visible){const k=y(E,ne,A,R);E.onBeforeShadow(r,E,L,S,Y,k,null),r.renderBufferDirect(S,null,Y,k,E,null),E.onAfterShadow(r,E,L,S,Y,k,null)}}const W=E.children;for(let Y=0,ne=W.length;Y<ne;Y++)M(W[Y],L,S,A,R)}function C(E){E.target.removeEventListener("dispose",C);for(const S in c){const A=c[S],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function U1(r,e){function t(){let O=!1;const Q=new Dt;let re=null;const te=new Dt(0,0,0,0);return{setMask:function(H){re!==H&&!O&&(r.colorMask(H,H,H,H),re=H)},setLocked:function(H){O=H},setClear:function(H,$,Se,He,Je){Je===!0&&(H*=He,$*=He,Se*=He),Q.set(H,$,Se,He),te.equals(Q)===!1&&(r.clearColor(H,$,Se,He),te.copy(Q))},reset:function(){O=!1,re=null,te.set(-1,0,0,0)}}}function n(){let O=!1,Q=!1,re=null,te=null,H=null;return{setReversed:function($){if(Q!==$){const Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Q=$;const He=H;H=null,this.setClear(He)}},getReversed:function(){return Q},setTest:function($){$?ce(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function($){re!==$&&!O&&(r.depthMask($),re=$)},setFunc:function($){if(Q&&($=nv[$]),te!==$){switch($){case $a:r.depthFunc(r.NEVER);break;case Ha:r.depthFunc(r.ALWAYS);break;case Wa:r.depthFunc(r.LESS);break;case Rr:r.depthFunc(r.LEQUAL);break;case Xa:r.depthFunc(r.EQUAL);break;case qa:r.depthFunc(r.GEQUAL);break;case Ya:r.depthFunc(r.GREATER);break;case Za:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=$}},setLocked:function($){O=$},setClear:function($){H!==$&&(H=$,Q&&($=1-$),r.clearDepth($))},reset:function(){O=!1,re=null,te=null,H=null,Q=!1}}}function i(){let O=!1,Q=null,re=null,te=null,H=null,$=null,Se=null,He=null,Je=null;return{setTest:function(Ue){O||(Ue?ce(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(Ue){Q!==Ue&&!O&&(r.stencilMask(Ue),Q=Ue)},setFunc:function(Ue,We,Ze){(re!==Ue||te!==We||H!==Ze)&&(r.stencilFunc(Ue,We,Ze),re=Ue,te=We,H=Ze)},setOp:function(Ue,We,Ze){($!==Ue||Se!==We||He!==Ze)&&(r.stencilOp(Ue,We,Ze),$=Ue,Se=We,He=Ze)},setLocked:function(Ue){O=Ue},setClear:function(Ue){Je!==Ue&&(r.clearStencil(Ue),Je=Ue)},reset:function(){O=!1,Q=null,re=null,te=null,H=null,$=null,Se=null,He=null,Je=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],p=null,x=!1,m=null,g=null,_=null,y=null,M=null,C=null,E=null,L=new it(0,0,0),S=0,A=!1,R=null,U=null,W=null,Y=null,ne=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(se)[1]),G=V>=1):se.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),G=V>=2);let de=null,Ae={};const me=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),Be=new Dt().fromArray(me),st=new Dt().fromArray(we);function $e(O,Q,re,te){const H=new Uint8Array(4),$=r.createTexture();r.bindTexture(O,$),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<re;Se++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,H):r.texImage2D(Q+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,H);return $}const oe={};oe[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(r.DEPTH_TEST),o.setFunc(Rr),_e(!1),Ie(Eh),ce(r.CULL_FACE),fe(mi);function ce(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function ge(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function De(O,Q){return d[O]!==Q?(r.bindFramebuffer(O,Q),d[O]=Q,O===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=Q),O===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ce(O,Q){let re=f,te=!1;if(O){re=u.get(Q),re===void 0&&(re=[],u.set(Q,re));const H=O.textures;if(re.length!==H.length||re[0]!==r.COLOR_ATTACHMENT0){for(let $=0,Se=H.length;$<Se;$++)re[$]=r.COLOR_ATTACHMENT0+$;re.length=H.length,te=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,te=!0);te&&r.drawBuffers(re)}function Fe(O){return p!==O?(r.useProgram(O),p=O,!0):!1}const qe={[qi]:r.FUNC_ADD,[up]:r.FUNC_SUBTRACT,[dp]:r.FUNC_REVERSE_SUBTRACT};qe[fp]=r.MIN,qe[pp]=r.MAX;const ze={[mp]:r.ZERO,[gp]:r.ONE,[vp]:r.SRC_COLOR,[Va]:r.SRC_ALPHA,[bp]:r.SRC_ALPHA_SATURATE,[Mp]:r.DST_COLOR,[xp]:r.DST_ALPHA,[_p]:r.ONE_MINUS_SRC_COLOR,[Ga]:r.ONE_MINUS_SRC_ALPHA,[Sp]:r.ONE_MINUS_DST_COLOR,[yp]:r.ONE_MINUS_DST_ALPHA,[wp]:r.CONSTANT_COLOR,[Tp]:r.ONE_MINUS_CONSTANT_COLOR,[Ap]:r.CONSTANT_ALPHA,[Ep]:r.ONE_MINUS_CONSTANT_ALPHA};function fe(O,Q,re,te,H,$,Se,He,Je,Ue){if(O===mi){x===!0&&(ge(r.BLEND),x=!1);return}if(x===!1&&(ce(r.BLEND),x=!0),O!==hp){if(O!==m||Ue!==A){if((g!==qi||M!==qi)&&(r.blendEquation(r.FUNC_ADD),g=qi,M=qi),Ue)switch(O){case Cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ch:r.blendFunc(r.ONE,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ht("WebGLState: Invalid blending: ",O);break}else switch(O){case Cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ch:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ph:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",O);break}_=null,y=null,C=null,E=null,L.set(0,0,0),S=0,m=O,A=Ue}return}H=H||Q,$=$||re,Se=Se||te,(Q!==g||H!==M)&&(r.blendEquationSeparate(qe[Q],qe[H]),g=Q,M=H),(re!==_||te!==y||$!==C||Se!==E)&&(r.blendFuncSeparate(ze[re],ze[te],ze[$],ze[Se]),_=re,y=te,C=$,E=Se),(He.equals(L)===!1||Je!==S)&&(r.blendColor(He.r,He.g,He.b,Je),L.copy(He),S=Je),m=O,A=!1}function Ee(O,Q){O.side===ni?ge(r.CULL_FACE):ce(r.CULL_FACE);let re=O.side===wn;Q&&(re=!re),_e(re),O.blending===Cr&&O.transparent===!1?fe(mi):fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const te=O.stencilWrite;a.setTest(te),te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ne(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function _e(O){R!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),R=O)}function Ie(O){O!==lp?(ce(r.CULL_FACE),O!==U&&(O===Eh?r.cullFace(r.BACK):O===cp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),U=O}function N(O){O!==W&&(G&&r.lineWidth(O),W=O)}function Ne(O,Q,re){O?(ce(r.POLYGON_OFFSET_FILL),(Y!==Q||ne!==re)&&(Y=Q,ne=re,o.getReversed()&&(Q=-Q),r.polygonOffset(Q,re))):ge(r.POLYGON_OFFSET_FILL)}function Te(O){O?ce(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function ve(O){O===void 0&&(O=r.TEXTURE0+k-1),de!==O&&(r.activeTexture(O),de=O)}function pe(O,Q,re){re===void 0&&(de===null?re=r.TEXTURE0+k-1:re=de);let te=Ae[re];te===void 0&&(te={type:void 0,texture:void 0},Ae[re]=te),(te.type!==O||te.texture!==Q)&&(de!==re&&(r.activeTexture(re),de=re),r.bindTexture(O,Q||oe[O]),te.type=O,te.texture=Q)}function P(){const O=Ae[de];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function q(){try{r.texSubImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function he(){try{r.texSubImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function j(){try{r.texStorage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function Oe(){try{r.texStorage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function Re(){try{r.texImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function le(){try{r.texImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function xe(O){Be.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Be.copy(O))}function ie(O){st.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),st.copy(O))}function J(O,Q){let re=c.get(Q);re===void 0&&(re=new WeakMap,c.set(Q,re));let te=re.get(O);te===void 0&&(te=r.getUniformBlockIndex(Q,O.name),re.set(O,te))}function ee(O,Q){const te=c.get(Q).get(O);l.get(Q)!==te&&(r.uniformBlockBinding(Q,te,O.__bindingPointIndex),l.set(Q,te))}function Le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},de=null,Ae={},d={},u=new WeakMap,f=[],p=null,x=!1,m=null,g=null,_=null,y=null,M=null,C=null,E=null,L=new it(0,0,0),S=0,A=!1,R=null,U=null,W=null,Y=null,ne=null,Be.set(0,0,r.canvas.width,r.canvas.height),st.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:ge,bindFramebuffer:De,drawBuffers:Ce,useProgram:Fe,setBlending:fe,setMaterial:Ee,setFlipSided:_e,setCullFace:Ie,setLineWidth:N,setPolygonOffset:Ne,setScissorTest:Te,activeTexture:ve,bindTexture:pe,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:Re,texImage3D:le,updateUBOMapping:J,uniformBlockBinding:ee,texStorage2D:j,texStorage3D:Oe,texSubImage2D:q,texSubImage3D:he,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:xe,viewport:ie,reset:Le}}function F1(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,b){return f?new OffscreenCanvas(P,b):xo("canvas")}function x(P,b,z){let q=1;const he=pe(P);if((he.width>z||he.height>z)&&(q=z/Math.max(he.width,he.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const X=Math.floor(q*he.width),Me=Math.floor(q*he.height);d===void 0&&(d=p(X,Me));const j=b?p(X,Me):d;return j.width=X,j.height=Me,j.getContext("2d").drawImage(P,0,0,X,Me),Qe("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+X+"x"+Me+")."),j}else return"data"in P&&Qe("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function m(P){return P.generateMipmaps}function g(P){r.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,b,z,q,he=!1){if(P!==null){if(r[P]!==void 0)return r[P];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=b;if(b===r.RED&&(z===r.FLOAT&&(X=r.R32F),z===r.HALF_FLOAT&&(X=r.R16F),z===r.UNSIGNED_BYTE&&(X=r.R8)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.R8UI),z===r.UNSIGNED_SHORT&&(X=r.R16UI),z===r.UNSIGNED_INT&&(X=r.R32UI),z===r.BYTE&&(X=r.R8I),z===r.SHORT&&(X=r.R16I),z===r.INT&&(X=r.R32I)),b===r.RG&&(z===r.FLOAT&&(X=r.RG32F),z===r.HALF_FLOAT&&(X=r.RG16F),z===r.UNSIGNED_BYTE&&(X=r.RG8)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.RG8UI),z===r.UNSIGNED_SHORT&&(X=r.RG16UI),z===r.UNSIGNED_INT&&(X=r.RG32UI),z===r.BYTE&&(X=r.RG8I),z===r.SHORT&&(X=r.RG16I),z===r.INT&&(X=r.RG32I)),b===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.RGB8UI),z===r.UNSIGNED_SHORT&&(X=r.RGB16UI),z===r.UNSIGNED_INT&&(X=r.RGB32UI),z===r.BYTE&&(X=r.RGB8I),z===r.SHORT&&(X=r.RGB16I),z===r.INT&&(X=r.RGB32I)),b===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),z===r.UNSIGNED_INT&&(X=r.RGBA32UI),z===r.BYTE&&(X=r.RGBA8I),z===r.SHORT&&(X=r.RGBA16I),z===r.INT&&(X=r.RGBA32I)),b===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),b===r.RGBA){const Me=he?vo:At.getTransfer(q);z===r.FLOAT&&(X=r.RGBA32F),z===r.HALF_FLOAT&&(X=r.RGBA16F),z===r.UNSIGNED_BYTE&&(X=Me===Lt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(P,b){let z;return P?b===null||b===qn||b===ys?z=r.DEPTH24_STENCIL8:b===Sn?z=r.DEPTH32F_STENCIL8:b===xs&&(z=r.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qn||b===ys?z=r.DEPTH_COMPONENT24:b===Sn?z=r.DEPTH_COMPONENT32F:b===xs&&(z=r.DEPTH_COMPONENT16),z}function C(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==zt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){const b=P.target;b.removeEventListener("dispose",E),S(b),b.isVideoTexture&&h.delete(b)}function L(P){const b=P.target;b.removeEventListener("dispose",L),R(b)}function S(P){const b=n.get(P);if(b.__webglInit===void 0)return;const z=P.source,q=u.get(z);if(q){const he=q[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&A(P),Object.keys(q).length===0&&u.delete(z)}n.remove(P)}function A(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const z=P.source,q=u.get(z);delete q[b.__cacheKey],o.memory.textures--}function R(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let he=0;he<b.__webglFramebuffer[q].length;he++)r.deleteFramebuffer(b.__webglFramebuffer[q][he]);else r.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)r.deleteFramebuffer(b.__webglFramebuffer[q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=P.textures;for(let q=0,he=z.length;q<he;q++){const X=n.get(z[q]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(P)}let U=0;function W(){U=0}function Y(){const P=U;return P>=i.maxTextures&&Qe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),U+=1,P}function ne(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function k(P,b){const z=n.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const q=P.image;if(q===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(z,P,b);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function G(P,b){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){oe(z,P,b);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function V(P,b){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){oe(z,P,b);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function se(P,b){const z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){ce(z,P,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}const de={[fo]:r.REPEAT,[Nn]:r.CLAMP_TO_EDGE,[po]:r.MIRRORED_REPEAT},Ae={[en]:r.NEAREST,[au]:r.NEAREST_MIPMAP_NEAREST,[fs]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[to]:r.LINEAR_MIPMAP_NEAREST,[fi]:r.LINEAR_MIPMAP_LINEAR},me={[Fp]:r.NEVER,[Vp]:r.ALWAYS,[Op]:r.LESS,[ql]:r.LEQUAL,[Bp]:r.EQUAL,[Yl]:r.GEQUAL,[zp]:r.GREATER,[kp]:r.NOTEQUAL};function we(P,b){if(b.type===Sn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zt||b.magFilter===to||b.magFilter===fs||b.magFilter===fi||b.minFilter===zt||b.minFilter===to||b.minFilter===fs||b.minFilter===fi)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,de[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,de[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,de[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Ae[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Ae[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===en||b.minFilter!==fs&&b.minFilter!==fi||b.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Be(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));const q=b.source;let he=u.get(q);he===void 0&&(he={},u.set(q,he));const X=ne(b);if(X!==P.__cacheKey){he[X]===void 0&&(he[X]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),he[X].usedTimes++;const Me=he[P.__cacheKey];Me!==void 0&&(he[P.__cacheKey].usedTimes--,Me.usedTimes===0&&A(b)),P.__cacheKey=X,P.__webglTexture=he[X].texture}return z}function st(P,b,z){return Math.floor(Math.floor(P/z)/b)}function $e(P,b,z,q){const X=P.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,z,q,b.data);else{X.sort((le,xe)=>le.start-xe.start);let Me=0;for(let le=1;le<X.length;le++){const xe=X[Me],ie=X[le],J=xe.start+xe.count,ee=st(ie.start,b.width,4),Le=st(xe.start,b.width,4);ie.start<=J+1&&ee===Le&&st(ie.start+ie.count-1,b.width,4)===ee?xe.count=Math.max(xe.count,ie.start+ie.count-xe.start):(++Me,X[Me]=ie)}X.length=Me+1;const j=r.getParameter(r.UNPACK_ROW_LENGTH),Oe=r.getParameter(r.UNPACK_SKIP_PIXELS),Re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let le=0,xe=X.length;le<xe;le++){const ie=X[le],J=Math.floor(ie.start/4),ee=Math.ceil(ie.count/4),Le=J%b.width,O=Math.floor(J/b.width),Q=ee,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Le),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Le,O,Q,re,z,q,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,j),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function oe(P,b,z){let q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=r.TEXTURE_3D);const he=Be(P,b),X=b.source;t.bindTexture(q,P.__webglTexture,r.TEXTURE0+z);const Me=n.get(X);if(X.version!==Me.__version||he===!0){t.activeTexture(r.TEXTURE0+z);const j=At.getPrimaries(At.workingColorSpace),Oe=b.colorSpace===Pi?null:At.getPrimaries(b.colorSpace),Re=b.colorSpace===Pi||j===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let le=x(b.image,!1,i.maxTextureSize);le=ve(b,le);const xe=s.convert(b.format,b.colorSpace),ie=s.convert(b.type);let J=y(b.internalFormat,xe,ie,b.colorSpace,b.isVideoTexture);we(q,b);let ee;const Le=b.mipmaps,O=b.isVideoTexture!==!0,Q=Me.__version===void 0||he===!0,re=X.dataReady,te=C(b,le);if(b.isDepthTexture)J=M(b.format===Yi,b.type),Q&&(O?t.texStorage2D(r.TEXTURE_2D,1,J,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,J,le.width,le.height,0,xe,ie,null));else if(b.isDataTexture)if(Le.length>0){O&&Q&&t.texStorage2D(r.TEXTURE_2D,te,J,Le[0].width,Le[0].height);for(let H=0,$=Le.length;H<$;H++)ee=Le[H],O?re&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ee.width,ee.height,xe,ie,ee.data):t.texImage2D(r.TEXTURE_2D,H,J,ee.width,ee.height,0,xe,ie,ee.data);b.generateMipmaps=!1}else O?(Q&&t.texStorage2D(r.TEXTURE_2D,te,J,le.width,le.height),re&&$e(b,le,xe,ie)):t.texImage2D(r.TEXTURE_2D,0,J,le.width,le.height,0,xe,ie,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&Q&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,J,Le[0].width,Le[0].height,le.depth);for(let H=0,$=Le.length;H<$;H++)if(ee=Le[H],b.format!==bn)if(xe!==null)if(O){if(re)if(b.layerUpdates.size>0){const Se=Vh(ee.width,ee.height,b.format,b.type);for(const He of b.layerUpdates){const Je=ee.data.subarray(He*Se/ee.data.BYTES_PER_ELEMENT,(He+1)*Se/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,He,ee.width,ee.height,1,xe,Je)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,ee.width,ee.height,le.depth,xe,ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,J,ee.width,ee.height,le.depth,0,ee.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,ee.width,ee.height,le.depth,xe,ie,ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,J,ee.width,ee.height,le.depth,0,xe,ie,ee.data)}else{O&&Q&&t.texStorage2D(r.TEXTURE_2D,te,J,Le[0].width,Le[0].height);for(let H=0,$=Le.length;H<$;H++)ee=Le[H],b.format!==bn?xe!==null?O?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,ee.width,ee.height,xe,ee.data):t.compressedTexImage2D(r.TEXTURE_2D,H,J,ee.width,ee.height,0,ee.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?re&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ee.width,ee.height,xe,ie,ee.data):t.texImage2D(r.TEXTURE_2D,H,J,ee.width,ee.height,0,xe,ie,ee.data)}else if(b.isDataArrayTexture)if(O){if(Q&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,J,le.width,le.height,le.depth),re)if(b.layerUpdates.size>0){const H=Vh(le.width,le.height,b.format,b.type);for(const $ of b.layerUpdates){const Se=le.data.subarray($*H/le.data.BYTES_PER_ELEMENT,($+1)*H/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,le.width,le.height,1,xe,ie,Se)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,ie,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,J,le.width,le.height,le.depth,0,xe,ie,le.data);else if(b.isData3DTexture)O?(Q&&t.texStorage3D(r.TEXTURE_3D,te,J,le.width,le.height,le.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,ie,le.data)):t.texImage3D(r.TEXTURE_3D,0,J,le.width,le.height,le.depth,0,xe,ie,le.data);else if(b.isFramebufferTexture){if(Q)if(O)t.texStorage2D(r.TEXTURE_2D,te,J,le.width,le.height);else{let H=le.width,$=le.height;for(let Se=0;Se<te;Se++)t.texImage2D(r.TEXTURE_2D,Se,J,H,$,0,xe,ie,null),H>>=1,$>>=1}}else if(Le.length>0){if(O&&Q){const H=pe(Le[0]);t.texStorage2D(r.TEXTURE_2D,te,J,H.width,H.height)}for(let H=0,$=Le.length;H<$;H++)ee=Le[H],O?re&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,xe,ie,ee):t.texImage2D(r.TEXTURE_2D,H,J,xe,ie,ee);b.generateMipmaps=!1}else if(O){if(Q){const H=pe(le);t.texStorage2D(r.TEXTURE_2D,te,J,H.width,H.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,ie,le)}else t.texImage2D(r.TEXTURE_2D,0,J,xe,ie,le);m(b)&&g(q),Me.__version=X.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ce(P,b,z){if(b.image.length!==6)return;const q=Be(P,b),he=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);const X=n.get(he);if(he.version!==X.__version||q===!0){t.activeTexture(r.TEXTURE0+z);const Me=At.getPrimaries(At.workingColorSpace),j=b.colorSpace===Pi?null:At.getPrimaries(b.colorSpace),Oe=b.colorSpace===Pi||Me===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let $=0;$<6;$++)!Re&&!le?xe[$]=x(b.image[$],!0,i.maxCubemapSize):xe[$]=le?b.image[$].image:b.image[$],xe[$]=ve(b,xe[$]);const ie=xe[0],J=s.convert(b.format,b.colorSpace),ee=s.convert(b.type),Le=y(b.internalFormat,J,ee,b.colorSpace),O=b.isVideoTexture!==!0,Q=X.__version===void 0||q===!0,re=he.dataReady;let te=C(b,ie);we(r.TEXTURE_CUBE_MAP,b);let H;if(Re){O&&Q&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,Le,ie.width,ie.height);for(let $=0;$<6;$++){H=xe[$].mipmaps;for(let Se=0;Se<H.length;Se++){const He=H[Se];b.format!==bn?J!==null?O?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,He.width,He.height,J,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Le,He.width,He.height,0,He.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,He.width,He.height,J,ee,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Le,He.width,He.height,0,J,ee,He.data)}}}else{if(H=b.mipmaps,O&&Q){H.length>0&&te++;const $=pe(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,Le,$.width,$.height)}for(let $=0;$<6;$++)if(le){O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xe[$].width,xe[$].height,J,ee,xe[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Le,xe[$].width,xe[$].height,0,J,ee,xe[$].data);for(let Se=0;Se<H.length;Se++){const Je=H[Se].image[$].image;O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,Je.width,Je.height,J,ee,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Le,Je.width,Je.height,0,J,ee,Je.data)}}else{O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,J,ee,xe[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Le,J,ee,xe[$]);for(let Se=0;Se<H.length;Se++){const He=H[Se];O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,J,ee,He.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Le,J,ee,He.image[$])}}}m(b)&&g(r.TEXTURE_CUBE_MAP),X.__version=he.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ge(P,b,z,q,he,X){const Me=s.convert(z.format,z.colorSpace),j=s.convert(z.type),Oe=y(z.internalFormat,Me,j,z.colorSpace),Re=n.get(b),le=n.get(z);if(le.__renderTarget=b,!Re.__hasExternalTextures){const xe=Math.max(1,b.width>>X),ie=Math.max(1,b.height>>X);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,X,Oe,xe,ie,b.depth,0,Me,j,null):t.texImage2D(he,X,Oe,xe,ie,0,Me,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Ne(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,he,le.__webglTexture,0,N(b)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,he,le.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(P,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const q=b.depthTexture,he=q&&q.isDepthTexture?q.type:null,X=M(b.stencilBuffer,he),Me=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ne(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(b),X,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(b),X,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,X,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,P)}else{const q=b.textures;for(let he=0;he<q.length;he++){const X=q[he],Me=s.convert(X.format,X.colorSpace),j=s.convert(X.type),Oe=y(X.internalFormat,Me,j,X.colorSpace);Ne(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(b),Oe,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(b),Oe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(P,b,z){const q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",E)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),we(r.TEXTURE_CUBE_MAP,b.depthTexture);const Re=s.convert(b.depthTexture.format),le=s.convert(b.depthTexture.type);let xe;b.depthTexture.format===_i?xe=r.DEPTH_COMPONENT24:b.depthTexture.format===Yi&&(xe=r.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,xe,b.width,b.height,0,Re,le,null)}}else k(b.depthTexture,0);const X=he.__webglTexture,Me=N(b),j=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,Oe=b.depthTexture.format===Yi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===_i)Ne(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Oe,j,X,0,Me):r.framebufferTexture2D(r.FRAMEBUFFER,Oe,j,X,0);else if(b.depthTexture.format===Yi)Ne(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Oe,j,X,0,Me):r.framebufferTexture2D(r.FRAMEBUFFER,Oe,j,X,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const b=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",he)};q.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=q}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)Ce(b.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?Ce(b.__webglFramebuffer[0],P,0):Ce(b.__webglFramebuffer,P,0)}else if(z){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=r.createRenderbuffer(),De(b.__webglDepthbuffer[q],P,!1);else{const he=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,X)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),De(b.__webglDepthbuffer,P,!1);else{const he=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(P,b,z){const q=n.get(P);b!==void 0&&ge(q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Fe(P)}function ze(P){const b=P.texture,z=n.get(P),q=n.get(b);P.addEventListener("dispose",L);const he=P.textures,X=P.isWebGLCubeRenderTarget===!0,Me=he.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=b.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)z.__webglFramebuffer[j][Oe]=r.createFramebuffer()}else z.__webglFramebuffer[j]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)z.__webglFramebuffer[j]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Me)for(let j=0,Oe=he.length;j<Oe;j++){const Re=n.get(he[j]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&Ne(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<he.length;j++){const Oe=he[j];z.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[j]);const Re=s.convert(Oe.format,Oe.colorSpace),le=s.convert(Oe.type),xe=y(Oe.internalFormat,Re,le,Oe.colorSpace,P.isXRRenderTarget===!0),ie=N(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,xe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,z.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),De(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),we(r.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)ge(z.__webglFramebuffer[j][Oe],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe);else ge(z.__webglFramebuffer[j],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(b)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let j=0,Oe=he.length;j<Oe;j++){const Re=he[j],le=n.get(Re);let xe=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,le.__webglTexture),we(xe,Re),ge(z.__webglFramebuffer,P,Re,r.COLOR_ATTACHMENT0+j,xe,0),m(Re)&&g(xe)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),we(j,b),b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)ge(z.__webglFramebuffer[Oe],P,b,r.COLOR_ATTACHMENT0,j,Oe);else ge(z.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,j,0);m(b)&&g(j),t.unbindTexture()}P.depthBuffer&&Fe(P)}function fe(P){const b=P.textures;for(let z=0,q=b.length;z<q;z++){const he=b[z];if(m(he)){const X=_(P),Me=n.get(he).__webglTexture;t.bindTexture(X,Me),g(X),t.unbindTexture()}}}const Ee=[],_e=[];function Ie(P){if(P.samples>0){if(Ne(P)===!1){const b=P.textures,z=P.width,q=P.height;let he=r.COLOR_BUFFER_BIT;const X=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(P),j=b.length>1;if(j)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Oe=P.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[Re]);const le=n.get(b[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,z,q,0,0,z,q,he,r.NEAREST),l===!0&&(Ee.length=0,_e.length=0,Ee.push(r.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ee.push(X),_e.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_e)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Me.__webglColorRenderbuffer[Re]);const le=n.get(b[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function N(P){return Math.min(i.maxSamples,P.samples)}function Ne(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function ve(P,b){const z=P.colorSpace,q=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Dr&&z!==Pi&&(At.getTransfer(z)===Lt?(q!==bn||he!==Dn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",z)),b}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=se,this.rebindTextures=qe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zm(r,e){function t(n,i=Pi){let s;const o=At.getTransfer(i);if(n===Dn)return r.UNSIGNED_BYTE;if(n===Vl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return r.BYTE;if(n===cu)return r.SHORT;if(n===xs)return r.UNSIGNED_SHORT;if(n===kl)return r.INT;if(n===qn)return r.UNSIGNED_INT;if(n===Sn)return r.FLOAT;if(n===vi)return r.HALF_FLOAT;if(n===du)return r.ALPHA;if(n===fu)return r.RGB;if(n===bn)return r.RGBA;if(n===_i)return r.DEPTH_COMPONENT;if(n===Yi)return r.DEPTH_STENCIL;if(n===$l)return r.RED;if(n===Lo)return r.RED_INTEGER;if(n===Ir)return r.RG;if(n===Hl)return r.RG_INTEGER;if(n===Wl)return r.RGBA_INTEGER;if(n===no||n===io||n===ro||n===so)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Ka||n===ja||n===Qa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===el||n===tl)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===il)return s.COMPRESSED_R11_EAC;if(n===rl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===sl)return s.COMPRESSED_RG11_EAC;if(n===ol)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===vl||n===_l||n===xl||n===yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===al)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===bl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ml)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Tl||n===Al||n===El)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const O1=`
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

}`;class z1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yn({vertexShader:O1,fragmentShader:B1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k1 extends xi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new z1,g={},_=t.getContextAttributes();let y=null,M=null;const C=[],E=[],L=new ke;let S=null;const A=new dn;A.viewport=new Dt;const R=new dn;R.viewport=new Dt;const U=[A,R],W=new Fm;let Y=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ce=C[oe];return ce===void 0&&(ce=new za,C[oe]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(oe){let ce=C[oe];return ce===void 0&&(ce=new za,C[oe]=ce),ce.getGripSpace()},this.getHand=function(oe){let ce=C[oe];return ce===void 0&&(ce=new za,C[oe]=ce),ce.getHandSpace()};function k(oe){const ce=E.indexOf(oe.inputSource);if(ce===-1)return;const ge=C[ce];ge!==void 0&&(ge.update(oe.inputSource,oe.frame,c||o),ge.dispatchEvent({type:oe.type,data:oe.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",V);for(let oe=0;oe<C.length;oe++){const ce=E[oe];ce!==null&&(E[oe]=null,C[oe].disconnect(ce))}Y=null,ne=null,m.reset();for(const oe in g)delete g[oe];e.setRenderTarget(y),f=null,u=null,d=null,i=null,M=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(oe){if(i=oe,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,De=null,Ce=null;_.depth&&(Ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?Yi:_i,De=_.stencil?ys:qn);const Fe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Fe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new $n(u.textureWidth,u.textureHeight,{format:bn,type:Dn,depthTexture:new bs(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new $n(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(oe){for(let ce=0;ce<oe.removed.length;ce++){const ge=oe.removed[ce],De=E.indexOf(ge);De>=0&&(E[De]=null,C[De].disconnect(ge))}for(let ce=0;ce<oe.added.length;ce++){const ge=oe.added[ce];let De=E.indexOf(ge);if(De===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=E.length){E.push(ge),De=Fe;break}else if(E[Fe]===null){E[Fe]=ge,De=Fe;break}if(De===-1)break}const Ce=C[De];Ce&&Ce.connect(ge)}}const se=new B,de=new B;function Ae(oe,ce,ge){se.setFromMatrixPosition(ce.matrixWorld),de.setFromMatrixPosition(ge.matrixWorld);const De=se.distanceTo(de),Ce=ce.projectionMatrix.elements,Fe=ge.projectionMatrix.elements,qe=Ce[14]/(Ce[10]-1),ze=Ce[14]/(Ce[10]+1),fe=(Ce[9]+1)/Ce[5],Ee=(Ce[9]-1)/Ce[5],_e=(Ce[8]-1)/Ce[0],Ie=(Fe[8]+1)/Fe[0],N=qe*_e,Ne=qe*Ie,Te=De/(-_e+Ie),ve=Te*-_e;if(ce.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ve),oe.translateZ(Te),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ce[10]===-1)oe.projectionMatrix.copy(ce.projectionMatrix),oe.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const pe=qe+Te,P=ze+Te,b=N-ve,z=Ne+(De-ve),q=fe*ze/P*pe,he=Ee*ze/P*pe;oe.projectionMatrix.makePerspective(b,z,q,he,pe,P),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function me(oe,ce){ce===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ce.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(i===null)return;let ce=oe.near,ge=oe.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),W.near=R.near=A.near=ce,W.far=R.far=A.far=ge,(Y!==W.near||ne!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),Y=W.near,ne=W.far),W.layers.mask=oe.layers.mask|6,A.layers.mask=W.layers.mask&-5,R.layers.mask=W.layers.mask&-3;const De=oe.parent,Ce=W.cameras;me(W,De);for(let Fe=0;Fe<Ce.length;Fe++)me(Ce[Fe],De);Ce.length===2?Ae(W,A,R):W.projectionMatrix.copy(A.projectionMatrix),we(oe,W,De)};function we(oe,ce,ge){ge===null?oe.matrix.copy(ce.matrixWorld):(oe.matrix.copy(ge.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ce.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ce.projectionMatrix),oe.projectionMatrixInverse.copy(ce.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ms*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(oe){l=oe,u!==null&&(u.fixedFoveation=oe),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(oe){return g[oe]};let Be=null;function st(oe,ce){if(h=ce.getViewerPose(c||o),p=ce,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let De=!1;ge.length!==W.cameras.length&&(W.cameras.length=0,De=!0);for(let ze=0;ze<ge.length;ze++){const fe=ge[ze];let Ee=null;if(f!==null)Ee=f.getViewport(fe);else{const Ie=d.getViewSubImage(u,fe);Ee=Ie.viewport,ze===0&&(e.setRenderTargetTextures(M,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(M))}let _e=U[ze];_e===void 0&&(_e=new dn,_e.layers.enable(ze),_e.viewport=new Dt,U[ze]=_e),_e.matrix.fromArray(fe.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(fe.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ze===0&&(W.matrix.copy(_e.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),De===!0&&W.cameras.push(_e)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const ze=d.getDepthInformation(ge[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,i.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<ge.length;ze++){const fe=ge[ze].camera;if(fe){let Ee=g[fe];Ee||(Ee=new bu,g[fe]=Ee);const _e=d.getCameraImage(fe);Ee.sourceTexture=_e}}}}for(let ge=0;ge<C.length;ge++){const De=E[ge],Ce=C[ge];De!==null&&Ce!==void 0&&Ce.update(De,ce,c||o)}Be&&Be(oe,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),p=null}const $e=new Hm;$e.setAnimationLoop(st),this.setAnimationLoop=function(oe){Be=oe},this.dispose=function(){}}}const Mr=new Hn,V1=new ft;function G1(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,mm(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,y,M){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===wn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===wn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=e.get(g),y=_.envMap,M=_.envMapRotation;y&&(m.envMap.value=y,Mr.copy(M),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Mr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $1(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const M=y.program;n.uniformBlockBinding(_,M)}function c(_,y){let M=i[_.id];M===void 0&&(p(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(_,C);const E=e.render.frame;s[_.id]!==E&&(u(_),s[_.id]=E)}function h(_){const y=d();_.__bindingPointIndex=y;const M=r.createBuffer(),C=_.__size,E=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=i[_.id],M=_.uniforms,C=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,L=M.length;E<L;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let A=0,R=S.length;A<R;A++){const U=S[A];if(f(U,E,A,C)===!0){const W=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let ne=0;for(let k=0;k<Y.length;k++){const G=Y[k],V=x(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,W+ne,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,ne),ne+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,y,M,C){const E=_.value,L=y+"_"+M;if(C[L]===void 0)return typeof E=="number"||typeof E=="boolean"?C[L]=E:C[L]=E.clone(),!0;{const S=C[L];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return C[L]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function p(_){const y=_.uniforms;let M=0;const C=16;for(let L=0,S=y.length;L<S;L++){const A=Array.isArray(y[L])?y[L]:[y[L]];for(let R=0,U=A.length;R<U;R++){const W=A[R],Y=Array.isArray(W.value)?W.value:[W.value];for(let ne=0,k=Y.length;ne<k;ne++){const G=Y[ne],V=x(G),se=M%C,de=se%V.boundary,Ae=se+de;M+=de,Ae!==0&&C-Ae<V.storage&&(M+=C-Ae),W.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=V.storage}}}const E=M%C;return E>0&&(M+=C-E),_.__size=M,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Qe("WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}const H1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function W1(){return ui===null&&(ui=new si(H1,16,16,Ir,vi),ui.name="DFG_LUT",ui.minFilter=zt,ui.magFilter=zt,ui.wrapS=Nn,ui.wrapT=Nn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class Jm{constructor(e={}){const{canvas:t=$p(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Dn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([Wl,Hl,Lo]),g=new Set([Dn,qn,xs,ys,Vl,Gl]),_=new Uint32Array(4),y=new Int32Array(4);let M=null,C=null;const E=[],L=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=In;let U=0,W=0,Y=null,ne=-1,k=null;const G=new Dt,V=new Dt;let se=null;const de=new it(0);let Ae=0,me=t.width,we=t.height,Be=1,st=null,$e=null;const oe=new Dt(0,0,me,we),ce=new Dt(0,0,me,we);let ge=!1;const De=new Es;let Ce=!1,Fe=!1;const qe=new ft,ze=new B,fe=new Dt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Ie(){return Y===null?Be:1}let N=n;function Ne(D,ue){return t.getContext(D,ue)}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bl}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Je,!1),N===null){const ue="webgl2";if(N=Ne(ue,D),N===null)throw Ne(ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw ht("WebGLRenderer: "+D.message),D}let Te,ve,pe,P,b,z,q,he,X,Me,j,Oe,Re,le,xe,ie,J,ee,Le,O,Q,re,te;function H(){Te=new qS(N),Te.init(),Q=new Zm(N,Te),ve=new zS(N,Te,e,Q),pe=new U1(N,Te),ve.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),P=new JS(N),b=new M1,z=new F1(N,Te,pe,b,ve,Q,P),q=new XS(A),he=new ty(N),re=new OS(N,he),X=new YS(N,he,P,re),Me=new jS(N,X,he,re,P),ee=new KS(N,ve,z),xe=new kS(b),j=new y1(A,q,Te,ve,re,xe),Oe=new G1(A,b),Re=new b1,le=new P1(Te),J=new FS(A,q,pe,Me,p,l),ie=new N1(A,Me,ve),te=new $1(N,P,ve,pe),Le=new BS(N,Te,P),O=new ZS(N,Te,P),P.programs=j.programs,A.capabilities=ve,A.extensions=Te,A.properties=b,A.renderLists=Re,A.shadowMap=ie,A.state=pe,A.info=P}H(),x!==Dn&&(S=new eb(x,t.width,t.height,i,s));const $=new k1(A,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const D=Te.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Te.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(D){D!==void 0&&(Be=D,this.setSize(me,we,!1))},this.getSize=function(D){return D.set(me,we)},this.setSize=function(D,ue,Pe=!0){if($.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}me=D,we=ue,t.width=Math.floor(D*Be),t.height=Math.floor(ue*Be),Pe===!0&&(t.style.width=D+"px",t.style.height=ue+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,D,ue)},this.getDrawingBufferSize=function(D){return D.set(me*Be,we*Be).floor()},this.setDrawingBufferSize=function(D,ue,Pe){me=D,we=ue,Be=Pe,t.width=Math.floor(D*Pe),t.height=Math.floor(ue*Pe),this.setViewport(0,0,D,ue)},this.setEffects=function(D){if(x===Dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let ue=0;ue<D.length;ue++)if(D[ue].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(G)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,ue,Pe,be){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,ue,Pe,be),pe.viewport(G.copy(oe).multiplyScalar(Be).round())},this.getScissor=function(D){return D.copy(ce)},this.setScissor=function(D,ue,Pe,be){D.isVector4?ce.set(D.x,D.y,D.z,D.w):ce.set(D,ue,Pe,be),pe.scissor(V.copy(ce).multiplyScalar(Be).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(D){pe.setScissorTest(ge=D)},this.setOpaqueSort=function(D){st=D},this.setTransparentSort=function(D){$e=D},this.getClearColor=function(D){return D.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(D=!0,ue=!0,Pe=!0){let be=0;if(D){let ye=!1;if(Y!==null){const tt=Y.texture.format;ye=m.has(tt)}if(ye){const tt=Y.texture.type,ot=g.has(tt),nt=J.getClearColor(),at=J.getClearAlpha(),ut=nt.r,St=nt.g,wt=nt.b;ot?(_[0]=ut,_[1]=St,_[2]=wt,_[3]=at,N.clearBufferuiv(N.COLOR,0,_)):(y[0]=ut,y[1]=St,y[2]=wt,y[3]=at,N.clearBufferiv(N.COLOR,0,y))}else be|=N.COLOR_BUFFER_BIT}ue&&(be|=N.DEPTH_BUFFER_BIT),Pe&&(be|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),be!==0&&N.clear(be)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),J.dispose(),Re.dispose(),le.dispose(),b.dispose(),q.dispose(),Me.dispose(),re.dispose(),te.dispose(),j.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ke),$.removeEventListener("sessionend",ct),Ye.stop()};function Se(D){D.preventDefault(),yo("WebGLRenderer: Context Lost."),R=!0}function He(){yo("WebGLRenderer: Context Restored."),R=!1;const D=P.autoReset,ue=ie.enabled,Pe=ie.autoUpdate,be=ie.needsUpdate,ye=ie.type;H(),P.autoReset=D,ie.enabled=ue,ie.autoUpdate=Pe,ie.needsUpdate=be,ie.type=ye}function Je(D){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ue(D){const ue=D.target;ue.removeEventListener("dispose",Ue),We(ue)}function We(D){Ze(D),b.remove(D)}function Ze(D){const ue=b.get(D).programs;ue!==void 0&&(ue.forEach(function(Pe){j.releaseProgram(Pe)}),D.isShaderMaterial&&j.releaseShaderCache(D))}this.renderBufferDirect=function(D,ue,Pe,be,ye,tt){ue===null&&(ue=Ee);const ot=ye.isMesh&&ye.matrixWorld.determinant()<0,nt=dg(D,ue,Pe,be,ye);pe.setMaterial(be,ot);let at=Pe.index,ut=1;if(be.wireframe===!0){if(at=X.getWireframeAttribute(Pe),at===void 0)return;ut=2}const St=Pe.drawRange,wt=Pe.attributes.position;let dt=St.start*ut,Nt=(St.start+St.count)*ut;tt!==null&&(dt=Math.max(dt,tt.start*ut),Nt=Math.min(Nt,(tt.start+tt.count)*ut)),at!==null?(dt=Math.max(dt,0),Nt=Math.min(Nt,at.count)):wt!=null&&(dt=Math.max(dt,0),Nt=Math.min(Nt,wt.count));const jt=Nt-dt;if(jt<0||jt===1/0)return;re.setup(ye,be,nt,Pe,at);let Ht,Ut=Le;if(at!==null&&(Ht=he.get(at),Ut=O,Ut.setIndex(Ht)),ye.isMesh)be.wireframe===!0?(pe.setLineWidth(be.wireframeLinewidth*Ie()),Ut.setMode(N.LINES)):Ut.setMode(N.TRIANGLES);else if(ye.isLine){let pn=be.linewidth;pn===void 0&&(pn=1),pe.setLineWidth(pn*Ie()),ye.isLineSegments?Ut.setMode(N.LINES):ye.isLineLoop?Ut.setMode(N.LINE_LOOP):Ut.setMode(N.LINE_STRIP)}else ye.isPoints?Ut.setMode(N.POINTS):ye.isSprite&&Ut.setMode(N.TRIANGLES);if(ye.isBatchedMesh)if(ye._multiDrawInstances!==null)Mo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount,ye._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount);else{const pn=ye._multiDrawStarts,lt=ye._multiDrawCounts,Bn=ye._multiDrawCount,It=at?he.get(at).bytesPerElement:1,Jn=b.get(be).currentProgram.getUniforms();for(let ai=0;ai<Bn;ai++)Jn.setValue(N,"_gl_DrawID",ai),Ut.render(pn[ai]/It,lt[ai])}else if(ye.isInstancedMesh)Ut.renderInstances(dt,jt,ye.count);else if(Pe.isInstancedBufferGeometry){const pn=Pe._maxInstanceCount!==void 0?Pe._maxInstanceCount:1/0,lt=Math.min(Pe.instanceCount,pn);Ut.renderInstances(dt,jt,lt)}else Ut.render(dt,jt)};function Xe(D,ue,Pe){D.transparent===!0&&D.side===ni&&D.forceSinglePass===!1?(D.side=wn,D.needsUpdate=!0,Vo(D,ue,Pe),D.side=Di,D.needsUpdate=!0,Vo(D,ue,Pe),D.side=ni):Vo(D,ue,Pe)}this.compile=function(D,ue,Pe=null){Pe===null&&(Pe=D),C=le.get(Pe),C.init(ue),L.push(C),Pe.traverseVisible(function(ye){ye.isLight&&ye.layers.test(ue.layers)&&(C.pushLight(ye),ye.castShadow&&C.pushShadow(ye))}),D!==Pe&&D.traverseVisible(function(ye){ye.isLight&&ye.layers.test(ue.layers)&&(C.pushLight(ye),ye.castShadow&&C.pushShadow(ye))}),C.setupLights();const be=new Set;return D.traverse(function(ye){if(!(ye.isMesh||ye.isPoints||ye.isLine||ye.isSprite))return;const tt=ye.material;if(tt)if(Array.isArray(tt))for(let ot=0;ot<tt.length;ot++){const nt=tt[ot];Xe(nt,Pe,ye),be.add(nt)}else Xe(tt,Pe,ye),be.add(tt)}),C=L.pop(),be},this.compileAsync=function(D,ue,Pe=null){const be=this.compile(D,ue,Pe);return new Promise(ye=>{function tt(){if(be.forEach(function(ot){b.get(ot).currentProgram.isReady()&&be.delete(ot)}),be.size===0){ye(D);return}setTimeout(tt,10)}Te.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ge=null;function Ve(D){Ge&&Ge(D)}function Ke(){Ye.stop()}function ct(){Ye.start()}const Ye=new Hm;Ye.setAnimationLoop(Ve),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(D){Ge=D,$.setAnimationLoop(D),D===null?Ye.stop():Ye.start()},$.addEventListener("sessionstart",Ke),$.addEventListener("sessionend",ct),this.render=function(D,ue){if(ue!==void 0&&ue.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const Pe=$.enabled===!0&&$.isPresenting===!0,be=S!==null&&(Y===null||Pe)&&S.begin(A,Y);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.parent===null&&ue.matrixWorldAutoUpdate===!0&&ue.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(ue),ue=$.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,ue,Y),C=le.get(D,L.length),C.init(ue),L.push(C),qe.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),De.setFromProjectionMatrix(qe,Vn,ue.reversedDepth),Fe=this.localClippingEnabled,Ce=xe.init(this.clippingPlanes,Fe),M=Re.get(D,E.length),M.init(),E.push(M),$.enabled===!0&&$.isPresenting===!0){const ot=A.xr.getDepthSensingMesh();ot!==null&&et(ot,ue,-1/0,A.sortObjects)}et(D,ue,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(st,$e),_e=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,_e&&J.addToRenderList(M,D),this.info.render.frame++,Ce===!0&&xe.beginShadows();const ye=C.state.shadowsArray;if(ie.render(ye,D,ue),Ce===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(be&&S.hasRenderPass())===!1){const ot=M.opaque,nt=M.transmissive;if(C.setupLights(),ue.isArrayCamera){const at=ue.cameras;if(nt.length>0)for(let ut=0,St=at.length;ut<St;ut++){const wt=at[ut];vt(ot,nt,D,wt)}_e&&J.render(D);for(let ut=0,St=at.length;ut<St;ut++){const wt=at[ut];gt(M,D,wt,wt.viewport)}}else nt.length>0&&vt(ot,nt,D,ue),_e&&J.render(D),gt(M,D,ue)}Y!==null&&W===0&&(z.updateMultisampleRenderTarget(Y),z.updateRenderTargetMipmap(Y)),be&&S.end(A),D.isScene===!0&&D.onAfterRender(A,D,ue),re.resetDefaultState(),ne=-1,k=null,L.pop(),L.length>0?(C=L[L.length-1],Ce===!0&&xe.setGlobalState(A.clippingPlanes,C.state.camera)):C=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function et(D,ue,Pe,be){if(D.visible===!1)return;if(D.layers.test(ue.layers)){if(D.isGroup)Pe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ue);else if(D.isLight)C.pushLight(D),D.castShadow&&C.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||De.intersectsSprite(D)){be&&fe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(qe);const ot=Me.update(D),nt=D.material;nt.visible&&M.push(D,ot,nt,Pe,fe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||De.intersectsObject(D))){const ot=Me.update(D),nt=D.material;if(be&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),fe.copy(D.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),fe.copy(ot.boundingSphere.center)),fe.applyMatrix4(D.matrixWorld).applyMatrix4(qe)),Array.isArray(nt)){const at=ot.groups;for(let ut=0,St=at.length;ut<St;ut++){const wt=at[ut],dt=nt[wt.materialIndex];dt&&dt.visible&&M.push(D,ot,dt,Pe,fe.z,wt)}}else nt.visible&&M.push(D,ot,nt,Pe,fe.z,null)}}const tt=D.children;for(let ot=0,nt=tt.length;ot<nt;ot++)et(tt[ot],ue,Pe,be)}function gt(D,ue,Pe,be){const{opaque:ye,transmissive:tt,transparent:ot}=D;C.setupLightsView(Pe),Ce===!0&&xe.setGlobalState(A.clippingPlanes,Pe),be&&pe.viewport(G.copy(be)),ye.length>0&&pt(ye,ue,Pe),tt.length>0&&pt(tt,ue,Pe),ot.length>0&&pt(ot,ue,Pe),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function vt(D,ue,Pe,be){if((Pe.isScene===!0?Pe.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[be.id]===void 0){const dt=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[be.id]=new $n(1,1,{generateMipmaps:!0,type:dt?vi:Dn,minFilter:fi,samples:Math.max(4,ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const tt=C.state.transmissionRenderTarget[be.id],ot=be.viewport||G;tt.setSize(ot.z*A.transmissionResolutionScale,ot.w*A.transmissionResolutionScale);const nt=A.getRenderTarget(),at=A.getActiveCubeFace(),ut=A.getActiveMipmapLevel();A.setRenderTarget(tt),A.getClearColor(de),Ae=A.getClearAlpha(),Ae<1&&A.setClearColor(16777215,.5),A.clear(),_e&&J.render(Pe);const St=A.toneMapping;A.toneMapping=ri;const wt=be.viewport;if(be.viewport!==void 0&&(be.viewport=void 0),C.setupLightsView(be),Ce===!0&&xe.setGlobalState(A.clippingPlanes,be),pt(D,Pe,be),z.updateMultisampleRenderTarget(tt),z.updateRenderTargetMipmap(tt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Nt=0,jt=ue.length;Nt<jt;Nt++){const Ht=ue[Nt],{object:Ut,geometry:pn,material:lt,group:Bn}=Ht;if(lt.side===ni&&Ut.layers.test(be.layers)){const It=lt.side;lt.side=wn,lt.needsUpdate=!0,Tt(Ut,Pe,be,pn,lt,Bn),lt.side=It,lt.needsUpdate=!0,dt=!0}}dt===!0&&(z.updateMultisampleRenderTarget(tt),z.updateRenderTargetMipmap(tt))}A.setRenderTarget(nt,at,ut),A.setClearColor(de,Ae),wt!==void 0&&(be.viewport=wt),A.toneMapping=St}function pt(D,ue,Pe){const be=ue.isScene===!0?ue.overrideMaterial:null;for(let ye=0,tt=D.length;ye<tt;ye++){const ot=D[ye],{object:nt,geometry:at,group:ut}=ot;let St=ot.material;St.allowOverride===!0&&be!==null&&(St=be),nt.layers.test(Pe.layers)&&Tt(nt,ue,Pe,at,St,ut)}}function Tt(D,ue,Pe,be,ye,tt){D.onBeforeRender(A,ue,Pe,be,ye,tt),D.modelViewMatrix.multiplyMatrices(Pe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ye.onBeforeRender(A,ue,Pe,be,D,tt),ye.transparent===!0&&ye.side===ni&&ye.forceSinglePass===!1?(ye.side=wn,ye.needsUpdate=!0,A.renderBufferDirect(Pe,ue,be,ye,D,tt),ye.side=Di,ye.needsUpdate=!0,A.renderBufferDirect(Pe,ue,be,ye,D,tt),ye.side=ni):A.renderBufferDirect(Pe,ue,be,ye,D,tt),D.onAfterRender(A,ue,Pe,be,ye,tt)}function Vo(D,ue,Pe){ue.isScene!==!0&&(ue=Ee);const be=b.get(D),ye=C.state.lights,tt=C.state.shadowsArray,ot=ye.state.version,nt=j.getParameters(D,ye.state,tt,ue,Pe),at=j.getProgramCacheKey(nt);let ut=be.programs;be.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?ue.environment:null,be.fog=ue.fog;const St=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;be.envMap=q.get(D.envMap||be.environment,St),be.envMapRotation=be.environment!==null&&D.envMap===null?ue.environmentRotation:D.envMapRotation,ut===void 0&&(D.addEventListener("dispose",Ue),ut=new Map,be.programs=ut);let wt=ut.get(at);if(wt!==void 0){if(be.currentProgram===wt&&be.lightsStateVersion===ot)return td(D,nt),wt}else nt.uniforms=j.getUniforms(D),D.onBeforeCompile(nt,A),wt=j.acquireProgram(nt,at),ut.set(at,wt),be.uniforms=nt.uniforms;const dt=be.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(dt.clippingPlanes=xe.uniform),td(D,nt),be.needsLights=pg(D),be.lightsStateVersion=ot,be.needsLights&&(dt.ambientLightColor.value=ye.state.ambient,dt.lightProbe.value=ye.state.probe,dt.directionalLights.value=ye.state.directional,dt.directionalLightShadows.value=ye.state.directionalShadow,dt.spotLights.value=ye.state.spot,dt.spotLightShadows.value=ye.state.spotShadow,dt.rectAreaLights.value=ye.state.rectArea,dt.ltc_1.value=ye.state.rectAreaLTC1,dt.ltc_2.value=ye.state.rectAreaLTC2,dt.pointLights.value=ye.state.point,dt.pointLightShadows.value=ye.state.pointShadow,dt.hemisphereLights.value=ye.state.hemi,dt.directionalShadowMatrix.value=ye.state.directionalShadowMatrix,dt.spotLightMatrix.value=ye.state.spotLightMatrix,dt.spotLightMap.value=ye.state.spotLightMap,dt.pointShadowMatrix.value=ye.state.pointShadowMatrix),be.currentProgram=wt,be.uniformsList=null,wt}function ed(D){if(D.uniformsList===null){const ue=D.currentProgram.getUniforms();D.uniformsList=ka.seqWithValue(ue.seq,D.uniforms)}return D.uniformsList}function td(D,ue){const Pe=b.get(D);Pe.outputColorSpace=ue.outputColorSpace,Pe.batching=ue.batching,Pe.batchingColor=ue.batchingColor,Pe.instancing=ue.instancing,Pe.instancingColor=ue.instancingColor,Pe.instancingMorph=ue.instancingMorph,Pe.skinning=ue.skinning,Pe.morphTargets=ue.morphTargets,Pe.morphNormals=ue.morphNormals,Pe.morphColors=ue.morphColors,Pe.morphTargetsCount=ue.morphTargetsCount,Pe.numClippingPlanes=ue.numClippingPlanes,Pe.numIntersection=ue.numClipIntersection,Pe.vertexAlphas=ue.vertexAlphas,Pe.vertexTangents=ue.vertexTangents,Pe.toneMapping=ue.toneMapping}function dg(D,ue,Pe,be,ye){ue.isScene!==!0&&(ue=Ee),z.resetTextureUnits();const tt=ue.fog,ot=be.isMeshStandardMaterial||be.isMeshLambertMaterial||be.isMeshPhongMaterial?ue.environment:null,nt=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Dr,at=be.isMeshStandardMaterial||be.isMeshLambertMaterial&&!be.envMap||be.isMeshPhongMaterial&&!be.envMap,ut=q.get(be.envMap||ot,at),St=be.vertexColors===!0&&!!Pe.attributes.color&&Pe.attributes.color.itemSize===4,wt=!!Pe.attributes.tangent&&(!!be.normalMap||be.anisotropy>0),dt=!!Pe.morphAttributes.position,Nt=!!Pe.morphAttributes.normal,jt=!!Pe.morphAttributes.color;let Ht=ri;be.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ht=A.toneMapping);const Ut=Pe.morphAttributes.position||Pe.morphAttributes.normal||Pe.morphAttributes.color,pn=Ut!==void 0?Ut.length:0,lt=b.get(be),Bn=C.state.lights;if(Ce===!0&&(Fe===!0||D!==k)){const cn=D===k&&be.id===ne;xe.setState(be,D,cn)}let It=!1;be.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Bn.state.version||lt.outputColorSpace!==nt||ye.isBatchedMesh&&lt.batching===!1||!ye.isBatchedMesh&&lt.batching===!0||ye.isBatchedMesh&&lt.batchingColor===!0&&ye.colorTexture===null||ye.isBatchedMesh&&lt.batchingColor===!1&&ye.colorTexture!==null||ye.isInstancedMesh&&lt.instancing===!1||!ye.isInstancedMesh&&lt.instancing===!0||ye.isSkinnedMesh&&lt.skinning===!1||!ye.isSkinnedMesh&&lt.skinning===!0||ye.isInstancedMesh&&lt.instancingColor===!0&&ye.instanceColor===null||ye.isInstancedMesh&&lt.instancingColor===!1&&ye.instanceColor!==null||ye.isInstancedMesh&&lt.instancingMorph===!0&&ye.morphTexture===null||ye.isInstancedMesh&&lt.instancingMorph===!1&&ye.morphTexture!==null||lt.envMap!==ut||be.fog===!0&&lt.fog!==tt||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==xe.numPlanes||lt.numIntersection!==xe.numIntersection)||lt.vertexAlphas!==St||lt.vertexTangents!==wt||lt.morphTargets!==dt||lt.morphNormals!==Nt||lt.morphColors!==jt||lt.toneMapping!==Ht||lt.morphTargetsCount!==pn)&&(It=!0):(It=!0,lt.__version=be.version);let Jn=lt.currentProgram;It===!0&&(Jn=Vo(be,ue,ye));let ai=!1,or=!1,Gr=!1;const Ot=Jn.getUniforms(),fn=lt.uniforms;if(pe.useProgram(Jn.program)&&(ai=!0,or=!0,Gr=!0),be.id!==ne&&(ne=be.id,or=!0),ai||k!==D){pe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ot.setValue(N,"projectionMatrix",D.projectionMatrix),Ot.setValue(N,"viewMatrix",D.matrixWorldInverse);const Fi=Ot.map.cameraPosition;Fi!==void 0&&Fi.setValue(N,ze.setFromMatrixPosition(D.matrixWorld)),ve.logarithmicDepthBuffer&&Ot.setValue(N,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(be.isMeshPhongMaterial||be.isMeshToonMaterial||be.isMeshLambertMaterial||be.isMeshBasicMaterial||be.isMeshStandardMaterial||be.isShaderMaterial)&&Ot.setValue(N,"isOrthographic",D.isOrthographicCamera===!0),k!==D&&(k=D,or=!0,Gr=!0)}if(lt.needsLights&&(Bn.state.directionalShadowMap.length>0&&Ot.setValue(N,"directionalShadowMap",Bn.state.directionalShadowMap,z),Bn.state.spotShadowMap.length>0&&Ot.setValue(N,"spotShadowMap",Bn.state.spotShadowMap,z),Bn.state.pointShadowMap.length>0&&Ot.setValue(N,"pointShadowMap",Bn.state.pointShadowMap,z)),ye.isSkinnedMesh){Ot.setOptional(N,ye,"bindMatrix"),Ot.setOptional(N,ye,"bindMatrixInverse");const cn=ye.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ot.setValue(N,"boneTexture",cn.boneTexture,z))}ye.isBatchedMesh&&(Ot.setOptional(N,ye,"batchingTexture"),Ot.setValue(N,"batchingTexture",ye._matricesTexture,z),Ot.setOptional(N,ye,"batchingIdTexture"),Ot.setValue(N,"batchingIdTexture",ye._indirectTexture,z),Ot.setOptional(N,ye,"batchingColorTexture"),ye._colorsTexture!==null&&Ot.setValue(N,"batchingColorTexture",ye._colorsTexture,z));const Ui=Pe.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&ee.update(ye,Pe,Jn),(or||lt.receiveShadow!==ye.receiveShadow)&&(lt.receiveShadow=ye.receiveShadow,Ot.setValue(N,"receiveShadow",ye.receiveShadow)),(be.isMeshStandardMaterial||be.isMeshLambertMaterial||be.isMeshPhongMaterial)&&be.envMap===null&&ue.environment!==null&&(fn.envMapIntensity.value=ue.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=W1()),or&&(Ot.setValue(N,"toneMappingExposure",A.toneMappingExposure),lt.needsLights&&fg(fn,Gr),tt&&be.fog===!0&&Oe.refreshFogUniforms(fn,tt),Oe.refreshMaterialUniforms(fn,be,Be,we,C.state.transmissionRenderTarget[D.id]),ka.upload(N,ed(lt),fn,z)),be.isShaderMaterial&&be.uniformsNeedUpdate===!0&&(ka.upload(N,ed(lt),fn,z),be.uniformsNeedUpdate=!1),be.isSpriteMaterial&&Ot.setValue(N,"center",ye.center),Ot.setValue(N,"modelViewMatrix",ye.modelViewMatrix),Ot.setValue(N,"normalMatrix",ye.normalMatrix),Ot.setValue(N,"modelMatrix",ye.matrixWorld),be.isShaderMaterial||be.isRawShaderMaterial){const cn=be.uniformsGroups;for(let Fi=0,$r=cn.length;Fi<$r;Fi++){const nd=cn[Fi];te.update(nd,Jn),te.bind(nd,Jn)}}return Jn}function fg(D,ue){D.ambientLightColor.needsUpdate=ue,D.lightProbe.needsUpdate=ue,D.directionalLights.needsUpdate=ue,D.directionalLightShadows.needsUpdate=ue,D.pointLights.needsUpdate=ue,D.pointLightShadows.needsUpdate=ue,D.spotLights.needsUpdate=ue,D.spotLightShadows.needsUpdate=ue,D.rectAreaLights.needsUpdate=ue,D.hemisphereLights.needsUpdate=ue}function pg(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(D,ue,Pe){const be=b.get(D);be.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,be.__autoAllocateDepthBuffer===!1&&(be.__useRenderToTexture=!1),b.get(D.texture).__webglTexture=ue,b.get(D.depthTexture).__webglTexture=be.__autoAllocateDepthBuffer?void 0:Pe,be.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,ue){const Pe=b.get(D);Pe.__webglFramebuffer=ue,Pe.__useDefaultFramebuffer=ue===void 0};const mg=N.createFramebuffer();this.setRenderTarget=function(D,ue=0,Pe=0){Y=D,U=ue,W=Pe;let be=null,ye=!1,tt=!1;if(D){const nt=b.get(D);if(nt.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(N.FRAMEBUFFER,nt.__webglFramebuffer),G.copy(D.viewport),V.copy(D.scissor),se=D.scissorTest,pe.viewport(G),pe.scissor(V),pe.setScissorTest(se),ne=-1;return}else if(nt.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(nt.__hasExternalTextures)z.rebindTextures(D,b.get(D.texture).__webglTexture,b.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const St=D.depthTexture;if(nt.__boundDepthTexture!==St){if(St!==null&&b.has(St)&&(D.width!==St.image.width||D.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const at=D.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(tt=!0);const ut=b.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ut[ue])?be=ut[ue][Pe]:be=ut[ue],ye=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?be=b.get(D).__webglMultisampledFramebuffer:Array.isArray(ut)?be=ut[Pe]:be=ut,G.copy(D.viewport),V.copy(D.scissor),se=D.scissorTest}else G.copy(oe).multiplyScalar(Be).floor(),V.copy(ce).multiplyScalar(Be).floor(),se=ge;if(Pe!==0&&(be=mg),pe.bindFramebuffer(N.FRAMEBUFFER,be)&&pe.drawBuffers(D,be),pe.viewport(G),pe.scissor(V),pe.setScissorTest(se),ye){const nt=b.get(D.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+ue,nt.__webglTexture,Pe)}else if(tt){const nt=ue;for(let at=0;at<D.textures.length;at++){const ut=b.get(D.textures[at]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+at,ut.__webglTexture,Pe,nt)}}else if(D!==null&&Pe!==0){const nt=b.get(D.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,nt.__webglTexture,Pe)}ne=-1},this.readRenderTargetPixels=function(D,ue,Pe,be,ye,tt,ot,nt=0){if(!(D&&D.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=b.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ot!==void 0&&(at=at[ot]),at){pe.bindFramebuffer(N.FRAMEBUFFER,at);try{const ut=D.textures[nt],St=ut.format,wt=ut.type;if(D.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+nt),!ve.textureFormatReadable(St)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(wt)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ue>=0&&ue<=D.width-be&&Pe>=0&&Pe<=D.height-ye&&N.readPixels(ue,Pe,be,ye,Q.convert(St),Q.convert(wt),tt)}finally{const ut=Y!==null?b.get(Y).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(D,ue,Pe,be,ye,tt,ot,nt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=b.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ot!==void 0&&(at=at[ot]),at)if(ue>=0&&ue<=D.width-be&&Pe>=0&&Pe<=D.height-ye){pe.bindFramebuffer(N.FRAMEBUFFER,at);const ut=D.textures[nt],St=ut.format,wt=ut.type;if(D.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+nt),!ve.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),N.readPixels(ue,Pe,be,ye,Q.convert(St),Q.convert(wt),0);const Nt=Y!==null?b.get(Y).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Nt);const jt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tv(N,jt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(dt),N.deleteSync(jt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,ue=null,Pe=0){const be=Math.pow(2,-Pe),ye=Math.floor(D.image.width*be),tt=Math.floor(D.image.height*be),ot=ue!==null?ue.x:0,nt=ue!==null?ue.y:0;z.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,Pe,0,0,ot,nt,ye,tt),pe.unbindTexture()};const gg=N.createFramebuffer(),vg=N.createFramebuffer();this.copyTextureToTexture=function(D,ue,Pe=null,be=null,ye=0,tt=0){let ot,nt,at,ut,St,wt,dt,Nt,jt;const Ht=D.isCompressedTexture?D.mipmaps[tt]:D.image;if(Pe!==null)ot=Pe.max.x-Pe.min.x,nt=Pe.max.y-Pe.min.y,at=Pe.isBox3?Pe.max.z-Pe.min.z:1,ut=Pe.min.x,St=Pe.min.y,wt=Pe.isBox3?Pe.min.z:0;else{const fn=Math.pow(2,-ye);ot=Math.floor(Ht.width*fn),nt=Math.floor(Ht.height*fn),D.isDataArrayTexture?at=Ht.depth:D.isData3DTexture?at=Math.floor(Ht.depth*fn):at=1,ut=0,St=0,wt=0}be!==null?(dt=be.x,Nt=be.y,jt=be.z):(dt=0,Nt=0,jt=0);const Ut=Q.convert(ue.format),pn=Q.convert(ue.type);let lt;ue.isData3DTexture?(z.setTexture3D(ue,0),lt=N.TEXTURE_3D):ue.isDataArrayTexture||ue.isCompressedArrayTexture?(z.setTexture2DArray(ue,0),lt=N.TEXTURE_2D_ARRAY):(z.setTexture2D(ue,0),lt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,ue.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,ue.unpackAlignment);const Bn=N.getParameter(N.UNPACK_ROW_LENGTH),It=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jn=N.getParameter(N.UNPACK_SKIP_PIXELS),ai=N.getParameter(N.UNPACK_SKIP_ROWS),or=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,St),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wt);const Gr=D.isDataArrayTexture||D.isData3DTexture,Ot=ue.isDataArrayTexture||ue.isData3DTexture;if(D.isDepthTexture){const fn=b.get(D),Ui=b.get(ue),cn=b.get(fn.__renderTarget),Fi=b.get(Ui.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,cn.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let $r=0;$r<at;$r++)Gr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,b.get(D).__webglTexture,ye,wt+$r),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,b.get(ue).__webglTexture,tt,jt+$r)),N.blitFramebuffer(ut,St,ot,nt,dt,Nt,ot,nt,N.DEPTH_BUFFER_BIT,N.NEAREST);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(ye!==0||D.isRenderTargetTexture||b.has(D)){const fn=b.get(D),Ui=b.get(ue);pe.bindFramebuffer(N.READ_FRAMEBUFFER,gg),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,vg);for(let cn=0;cn<at;cn++)Gr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,fn.__webglTexture,ye,wt+cn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fn.__webglTexture,ye),Ot?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ui.__webglTexture,tt,jt+cn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ui.__webglTexture,tt),ye!==0?N.blitFramebuffer(ut,St,ot,nt,dt,Nt,ot,nt,N.COLOR_BUFFER_BIT,N.NEAREST):Ot?N.copyTexSubImage3D(lt,tt,dt,Nt,jt+cn,ut,St,ot,nt):N.copyTexSubImage2D(lt,tt,dt,Nt,ut,St,ot,nt);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ot?D.isDataTexture||D.isData3DTexture?N.texSubImage3D(lt,tt,dt,Nt,jt,ot,nt,at,Ut,pn,Ht.data):ue.isCompressedArrayTexture?N.compressedTexSubImage3D(lt,tt,dt,Nt,jt,ot,nt,at,Ut,Ht.data):N.texSubImage3D(lt,tt,dt,Nt,jt,ot,nt,at,Ut,pn,Ht):D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,tt,dt,Nt,ot,nt,Ut,pn,Ht.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,tt,dt,Nt,Ht.width,Ht.height,Ut,Ht.data):N.texSubImage2D(N.TEXTURE_2D,tt,dt,Nt,ot,nt,Ut,pn,Ht);N.pixelStorei(N.UNPACK_ROW_LENGTH,Bn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,It),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ai),N.pixelStorei(N.UNPACK_SKIP_IMAGES,or),tt===0&&ue.generateMipmaps&&N.generateMipmap(lt),pe.unbindTexture()},this.initRenderTarget=function(D){b.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),pe.unbindTexture()},this.resetState=function(){U=0,W=0,Y=null,pe.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const X1=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ru,AddEquation:qi,AddOperation:Pp,AdditiveAnimationBlendMode:pu,AdditiveBlending:Ch,AgXToneMapping:uo,AlphaFormat:du,AlwaysCompare:Vp,AlwaysDepth:Ha,AlwaysStencilFunc:Lh,AmbientLight:Vu,AnimationAction:km,AnimationClip:Eo,AnimationLoader:X_,AnimationMixer:Sx,AnimationObjectGroup:yx,AnimationUtils:G_,ArcCurve:rm,ArrayCamera:Fm,ArrowHelper:Xx,AttachedBindMode:Ih,Audio:Bm,AudioAnalyser:hx,AudioContext:$u,AudioListener:ax,AudioLoader:ix,AxesHelper:qx,BackSide:wn,BasicDepthPacking:Np,BasicShadowMap:l0,BatchedMesh:jp,BezierInterpolant:Am,Bone:Mu,BooleanKeyframeTrack:Br,Box2:Ix,Box3:sn,Box3Helper:Hx,BoxGeometry:Or,BoxHelper:$x,BufferAttribute:Ft,BufferGeometry:yt,BufferGeometryLoader:Nm,ByteType:lu,Cache:pi,Camera:vc,CameraHelper:Gx,CanvasTexture:l_,CapsuleGeometry:rc,CatmullRomCurve3:sm,CineonToneMapping:iu,CircleGeometry:sc,ClampToEdgeWrapping:Nn,Clock:Cx,Color:it,ColorKeyframeTrack:Ou,ColorManagement:At,Compatibility:J0,CompressedArrayTexture:o_,CompressedCubeTexture:a_,CompressedTexture:ic,CompressedTextureLoader:q_,ConeGeometry:Fo,ConstantAlphaFactor:Ap,ConstantColorFactor:wp,Controls:Zx,CubeCamera:Um,CubeDepthTexture:nm,CubeReflectionMapping:gi,CubeRefractionMapping:Qi,CubeTexture:No,CubeTextureLoader:Y_,CubeUVReflectionMapping:As,CubicBezierCurve:Tu,CubicBezierCurve3:om,CubicInterpolant:wm,CullFaceBack:Eh,CullFaceFront:cp,CullFaceFrontBack:a0,CullFaceNone:lp,Curve:oi,CurvePath:lm,CustomBlending:hp,CustomToneMapping:su,CylinderGeometry:Uo,Cylindrical:Rx,Data3DTexture:Jl,DataArrayTexture:Zl,DataTexture:si,DataTextureLoader:Z_,DataUtils:Lv,DecrementStencilOp:E0,DecrementWrapStencilOp:P0,DefaultLoadingManager:kr,DepthFormat:_i,DepthStencilFormat:Yi,DepthTexture:bs,DetachedBindMode:Rp,DirectionalLight:ku,DirectionalLightHelper:Vx,DiscreteInterpolant:Tm,DodecahedronGeometry:oc,DoubleSide:ni,DstAlphaFactor:xp,DstColorFactor:Mp,DynamicCopyUsage:H0,DynamicDrawUsage:B0,DynamicReadUsage:V0,EdgesGeometry:im,EllipseCurve:ac,EqualCompare:Bp,EqualDepth:Xa,EqualStencilFunc:L0,EquirectangularReflectionMapping:Qs,EquirectangularRefractionMapping:eo,Euler:Hn,EventDispatcher:xi,ExternalTexture:bu,ExtrudeGeometry:lc,FileLoader:Li,Float16BufferAttribute:kv,Float32BufferAttribute:rt,FloatType:Sn,Fog:Ql,FogExp2:jl,FramebufferTexture:s_,FrontSide:Di,Frustum:Es,FrustumArray:nc,GLBufferAttribute:Ex,GLSL1:X0,GLSL3:Nh,GreaterCompare:zp,GreaterDepth:Ya,GreaterEqualCompare:Yl,GreaterEqualDepth:qa,GreaterEqualStencilFunc:O0,GreaterStencilFunc:U0,GridHelper:zx,Group:ms,HalfFloatType:vi,HemisphereLight:Cm,HemisphereLightHelper:Bx,IcosahedronGeometry:cc,ImageBitmapLoader:nx,ImageLoader:Co,ImageUtils:Wp,IncrementStencilOp:A0,IncrementWrapStencilOp:C0,InstancedBufferAttribute:Ss,InstancedBufferGeometry:Lm,InstancedInterleavedBuffer:Ax,InstancedMesh:Kp,Int16BufferAttribute:Bv,Int32BufferAttribute:zv,Int8BufferAttribute:Uv,IntType:kl,InterleavedBuffer:ec,InterleavedBufferAttribute:Nr,Interpolant:Ps,InterpolateBezier:Dh,InterpolateDiscrete:mo,InterpolateLinear:Cl,InterpolateSmooth:Ba,InterpolationSamplingMode:Z0,InterpolationSamplingType:Y0,InvertStencilOp:R0,KeepStencilOp:br,KeyframeTrack:Zn,LOD:Zp,LatheGeometry:hc,Layers:Kl,LessCompare:Op,LessDepth:Wa,LessEqualCompare:ql,LessEqualDepth:Rr,LessEqualStencilFunc:N0,LessStencilFunc:D0,Light:sr,LightProbe:Dm,Line:tr,Line3:Gm,LineBasicMaterial:Cn,LineCurve:Au,LineCurve3:am,LineDashedMaterial:Sm,LineLoop:Qp,LineSegments:yi,LinearFilter:zt,LinearInterpolant:Fu,LinearMipMapLinearFilter:f0,LinearMipMapNearestFilter:d0,LinearMipmapLinearFilter:fi,LinearMipmapNearestFilter:to,LinearSRGBColorSpace:Dr,LinearToneMapping:tu,LinearTransfer:vo,Loader:On,LoaderUtils:zh,LoadingManager:Bu,LoopOnce:Ip,LoopPingPong:Lp,LoopRepeat:Dp,MOUSE:s0,Material:_n,MaterialBlending:c0,MaterialLoader:_c,MathUtils:xv,Matrix2:qu,Matrix3:Mt,Matrix4:ft,MaxEquation:pp,Mesh:Kt,MeshBasicMaterial:Ni,MeshDepthMaterial:Lu,MeshDistanceMaterial:Nu,MeshLambertMaterial:ym,MeshMatcapMaterial:Mm,MeshNormalMaterial:xm,MeshPhongMaterial:vm,MeshPhysicalMaterial:gm,MeshStandardMaterial:Du,MeshToonMaterial:_m,MinEquation:fp,MirroredRepeatWrapping:po,MixOperation:Cp,MultiplyBlending:Rh,MultiplyOperation:Do,NearestFilter:en,NearestMipMapLinearFilter:u0,NearestMipMapNearestFilter:h0,NearestMipmapLinearFilter:fs,NearestMipmapNearestFilter:au,NeutralToneMapping:ou,NeverCompare:Fp,NeverDepth:$a,NeverStencilFunc:I0,NoBlending:mi,NoColorSpace:Pi,NoNormalPacking:M0,NoToneMapping:ri,NormalAnimationBlendMode:Xl,NormalBlending:Cr,NormalGAPacking:b0,NormalRGPacking:S0,NotEqualCompare:kp,NotEqualDepth:Za,NotEqualStencilFunc:F0,NumberKeyframeTrack:To,Object3D:Pt,ObjectLoader:ex,ObjectSpaceNormalMap:Up,OctahedronGeometry:Oo,OneFactor:gp,OneMinusConstantAlphaFactor:Ep,OneMinusConstantColorFactor:Tp,OneMinusDstAlphaFactor:yp,OneMinusDstColorFactor:Sp,OneMinusSrcAlphaFactor:Ga,OneMinusSrcColorFactor:_p,OrthographicCamera:Vr,PCFShadowMap:Ks,PCFSoftShadowMap:js,PMREMGenerator:Gh,Path:Dl,PerspectiveCamera:dn,Plane:Ci,PlaneGeometry:Cs,PlaneHelper:Wx,PointLight:Rm,PointLightHelper:Fx,Points:em,PointsMaterial:Su,PolarGridHelper:kx,PolyhedronGeometry:rr,PositionalAudio:cx,PropertyBinding:Rt,PropertyMixer:zm,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:Cu,Quaternion:Tn,QuaternionKeyframeTrack:zo,QuaternionLinearInterpolant:Em,R11_EAC_Format:il,RED_GREEN_RGTC2_Format:Al,RED_RGTC1_Format:wl,REVISION:Bl,RG11_EAC_Format:sl,RGBADepthPacking:_0,RGBAFormat:bn,RGBAIntegerFormat:Wl,RGBA_ASTC_10x10_Format:_l,RGBA_ASTC_10x5_Format:ml,RGBA_ASTC_10x6_Format:gl,RGBA_ASTC_10x8_Format:vl,RGBA_ASTC_12x10_Format:xl,RGBA_ASTC_12x12_Format:yl,RGBA_ASTC_4x4_Format:al,RGBA_ASTC_5x4_Format:ll,RGBA_ASTC_5x5_Format:cl,RGBA_ASTC_6x5_Format:hl,RGBA_ASTC_6x6_Format:ul,RGBA_ASTC_8x5_Format:dl,RGBA_ASTC_8x6_Format:fl,RGBA_ASTC_8x8_Format:pl,RGBA_BPTC_Format:Ml,RGBA_ETC2_EAC_Format:nl,RGBA_PVRTC_2BPPV1_Format:Qa,RGBA_PVRTC_4BPPV1_Format:ja,RGBA_S3TC_DXT1_Format:io,RGBA_S3TC_DXT3_Format:ro,RGBA_S3TC_DXT5_Format:so,RGBDepthPacking:x0,RGBFormat:fu,RGBIntegerFormat:p0,RGB_BPTC_SIGNED_Format:Sl,RGB_BPTC_UNSIGNED_Format:bl,RGB_ETC1_Format:el,RGB_ETC2_Format:tl,RGB_PVRTC_2BPPV1_Format:Ka,RGB_PVRTC_4BPPV1_Format:Ja,RGB_S3TC_DXT1_Format:no,RGDepthPacking:y0,RGFormat:Ir,RGIntegerFormat:Hl,RawShaderMaterial:Iu,Ray:ir,Raycaster:Vm,RectAreaLight:Im,RedFormat:$l,RedIntegerFormat:Lo,ReinhardToneMapping:nu,RenderTarget:gu,RenderTarget3D:bx,RepeatWrapping:fo,ReplaceStencilOp:T0,ReverseSubtractEquation:dp,RingGeometry:uc,SIGNED_R11_EAC_Format:rl,SIGNED_RED_GREEN_RGTC2_Format:El,SIGNED_RED_RGTC1_Format:Tl,SIGNED_RG11_EAC_Format:ol,SRGBColorSpace:In,SRGBTransfer:Lt,Scene:vu,ShaderChunk:mt,ShaderLib:Xn,ShaderMaterial:Yn,ShadowMaterial:pm,Shape:ji,ShapeGeometry:dc,ShapePath:Yx,ShapeUtils:ii,ShortType:cu,Skeleton:tc,SkeletonHelper:Ux,SkinnedMesh:Jp,Source:Zi,Sphere:on,SphereGeometry:Bo,Spherical:Px,SphericalHarmonics3:Gu,SplineCurve:Pu,SpotLight:Pm,SpotLightHelper:Nx,Sprite:Yp,SpriteMaterial:yu,SrcAlphaFactor:Va,SrcAlphaSaturateFactor:bp,SrcColorFactor:vp,StaticCopyUsage:$0,StaticDrawUsage:_o,StaticReadUsage:k0,StereoCamera:rx,StreamCopyUsage:W0,StreamDrawUsage:z0,StreamReadUsage:G0,StringKeyframeTrack:zr,SubtractEquation:up,SubtractiveBlending:Ph,TOUCH:o0,TangentSpaceNormalMap:nr,TetrahedronGeometry:fc,Texture:Jt,TextureLoader:J_,TextureUtils:ey,Timer:Om,TimestampQuery:q0,TorusGeometry:pc,TorusKnotGeometry:mc,Triangle:Ln,TriangleFanDrawMode:v0,TriangleStripDrawMode:g0,TrianglesDrawMode:m0,TubeGeometry:gc,UVMapping:zl,Uint16BufferAttribute:_u,Uint32BufferAttribute:xu,Uint8BufferAttribute:Fv,Uint8ClampedBufferAttribute:Ov,Uniform:Xu,UniformsGroup:Tx,UniformsLib:je,UniformsUtils:Ru,UnsignedByteType:Dn,UnsignedInt101111Type:uu,UnsignedInt248Type:ys,UnsignedInt5999Type:hu,UnsignedIntType:qn,UnsignedShort4444Type:Vl,UnsignedShort5551Type:Gl,UnsignedShortType:xs,VSMShadowMap:ds,Vector2:ke,Vector3:B,Vector4:Dt,VectorKeyframeTrack:Ao,VideoFrameTexture:r_,VideoTexture:tm,WebGL3DRenderTarget:wv,WebGLArrayRenderTarget:bv,WebGLCoordinateSystem:Vn,WebGLCubeRenderTarget:Yu,WebGLRenderTarget:$n,WebGLRenderer:Jm,WebGLUtils:Zm,WebGPUCoordinateSystem:Lr,WebXRController:za,WireframeGeometry:fm,WrapAroundEnding:go,ZeroCurvatureEnding:Tr,ZeroFactor:mp,ZeroSlopeEnding:Ar,ZeroStencilOp:w0,createCanvasElement:$p,error:ht,getConsoleFunction:ev,log:yo,setConsoleFunction:Q0,warn:Qe,warnOnce:Mo},Symbol.toStringTag,{value:"Module"})),Xf=Symbol(),q1=r=>typeof r?.subscribe=="function",Km=(r,e,t)=>{const n=r().map(o=>q1(o)?_s(o):Xf),i=I(()=>r().map((o,a)=>n[a]===Xf?o:n[a].current)),s=()=>{v(i);let o;return Nl(()=>{o=e(v(i))}),o};t?Ct(s):Ki(s)},Y1=(r,e)=>Km(r,e,!1),Z1=(r,e)=>Km(r,e,!0),J1=Object.assign(Y1,{pre:Z1}),ti=(r,e)=>r?.[`is${e}`]===!0,K1=typeof window<"u",Ei=(r,e)=>{const t=op(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});Ul(()=>{i(),n&&n()})},Zt=r=>{const e=eu(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},j1=r=>({subscribe:r.subscribe,get current(){return r.current}}),jm=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Q1=r=>{const{dom:e,canvas:t}=r,n=Zt({width:e.offsetWidth,height:e.offsetHeight});Hg(()=>{const s=new ResizeObserver(()=>{const{offsetWidth:o,offsetHeight:a}=e;(n.current.width!==o||n.current.height!==a)&&n.set({width:o,height:a})});return s.observe(e),()=>{s.disconnect()}});const i={dom:e,canvas:t,size:j1(n)};return Un("threlte-dom-context",i),i},Mc=()=>{const r=Fn("threlte-dom-context");if(!r)throw new Error("useDOM can only be used in a child component to <Canvas>.");return r};function ew(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Xi{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=ew();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!n?.after&&!n?.before&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n?.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const l=this.getKey(a),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n?.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const l=this.getKey(a),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((o,a)=>{o===0&&t.push(a)});t.length>0;){const o=t.shift();n.push(o);const a=i.find(l=>l===o);a&&this.connectedVertices[a]?.next.forEach(l=>{const c=(e.get(l)||0)-1;e.set(l,c),c===0&&t.push(l)})}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class tw{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class nw extends Xi{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const i=new tw(this,e,t);return this.add(e,i,n),i}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(i=>{const s=performance.now();i.run(n??e);const o=performance.now()-s;t[i.key]=o})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class iw extends Xi{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new nw(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},i=performance.now();return this.forEachNode(s=>{const o=performance.now(),a=s.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-o;n[s.key.toString()]={duration:l,tasks:a}}),{total:performance.now()-i,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const rw=r=>{const e=new iw,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:Zt(r.autoRender??!0),renderMode:Zt(r.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,s){n.shouldRender()&&s()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return Ki(()=>{n.autoRender.set(r.autoRender??!0)}),Ki(()=>{n.renderMode.set(r.renderMode??"on-demand")}),Ul(()=>{n.scheduler.dispose()}),Un("threlte-scheduler-context",n),n},Sc=()=>{const r=Fn("threlte-scheduler-context");if(!r)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return r},sw=()=>{const{size:r}=Mc(),{invalidate:e}=Sc(),t=new dn(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=Zt(t);Ei(r,s=>{if(n.current===t){const o=n.current;o.aspect=s.width/s.height,o.updateProjectionMatrix(),e()}}),Ei(n,s=>{s===void 0&&n.set(t)});const i={camera:n};return Un("threlte-camera-context",i),i},Qm=()=>{const r=Fn("threlte-camera-context");if(!r)throw new Error("useCamera can only be used in a child component to <Canvas>.");return r},ow=()=>{const r={removeObjectFromDisposal:e=>{r.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=r.disposableObjects.get(e);t?r.disposableObjects.set(e,t+1):r.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=r.disposableObjects.get(e);t&&t>0&&(r.disposableObjects.set(e,t-1),t-1<=0&&(r.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await np(),!(!r.shouldDispose&&!e)&&(r.disposableObjects.forEach((t,n)=>{(t===0||e)&&(n?.dispose?.(),r.disposableObjects.delete(n))}),r.shouldDispose=!1)}};return Ul(()=>{r.dispose(!0)}),Un("threlte-disposal-context",r),r},eg=()=>{const r=Fn("threlte-disposal-context");if(!r)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return r},tg=Symbol("threlte-parent-context"),ng=r=>{const e=Zt(r);return Un(tg,e),e},aw=()=>Fn(tg),Ll=Symbol("threlte-parent-object3d-context"),lw=r=>{const e=ap(r);return Un(Ll,e),e},cw=r=>{const e=Fn(Ll),t=eu(r),n=op([t,e],([i,s])=>i??s);return Un(Ll,n),t},hw=()=>Fn(Ll);function ig(r,e,t){if(!K1)return{task:void 0,start:()=>{},stop:()=>{},started:ap(!1)};let n,i,s;Xi.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=Sc(),a=s?.autoInvalidate??!0;let l=o.mainStage,c=I(()=>s?.running?.()??s?.autoStart??!0);if(s){if(s.stage)if(Xi.isValue(s.stage))l=s.stage;else{const d=o.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);l=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const u=s.after[d];if(Xi.isValue(u)){l=u.stage;break}}else Xi.isValue(s.after)&&(l=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const u=s.before[d];if(Xi.isValue(u)){l=u.stage;break}}else Xi.isValue(s.before)&&(l=s.before.stage)}const h=l.createTask(n,i,s);return Ct(()=>{if(v(c))return h.start(),a&&o.autoInvalidations.add(i),()=>{h.stop(),a&&o.autoInvalidations.delete(i)}}),Ct(()=>()=>{l.removeTask(n)}),{task:h,start:()=>{xt(c,!0)},stop:()=>{xt(c,!1)},started:i0(()=>v(c))}}const uw=r=>{const e={scene:new vu};return Un("threlte-scene-context",e),e},rg=()=>{const r=Fn("threlte-scene-context");if(!r)throw new Error("useScene can only be used in a child component to <Canvas>.");return r},dw=r=>{const{dispose:e}=eg(),{camera:t}=Qm(),{scene:n}=rg(),{invalidate:i,renderStage:s,autoRender:o,scheduler:a,resetFrameInvalidation:l}=Sc(),{size:c,canvas:h}=Mc(),d=r.createRenderer?r.createRenderer(h):new Jm({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),u=s.createTask(Symbol("threlte-auto-render-task"),()=>{d.render(n,t.current)}),f={renderer:d,colorManagementEnabled:Zt(r.colorManagementEnabled??!0),colorSpace:Zt(r.colorSpace??"srgb"),dpr:Zt(r.dpr??window.devicePixelRatio),shadows:Zt(r.shadows??js),toneMapping:Zt(r.toneMapping??uo),autoRenderTask:u};Un("threlte-renderer-context",f),Ei([f.colorManagementEnabled],([m])=>{At.enabled=m}),Ei([f.colorSpace],([m])=>{"outputColorSpace"in d&&(d.outputColorSpace=m)}),Ei([f.dpr],([m])=>{"setPixelRatio"in d&&d.setPixelRatio(m)});const{start:p,stop:x}=ig(()=>{!("xr"in d)||d.xr?.isPresenting||(d.setSize(c.current.width,c.current.height),i(),x())},{before:u,autoStart:!1,autoInvalidate:!1});return Ei([c],()=>{p()}),Ei([f.shadows],([m])=>{"shadowMap"in d&&(d.shadowMap.enabled=!!m,m&&m!==!0?d.shadowMap.type=m:m===!0&&(d.shadowMap.type=js))}),Ei([f.toneMapping],([m])=>{"toneMapping"in d&&(d.toneMapping=m)}),Ei([o],([m])=>(m?f.autoRenderTask.start():f.autoRenderTask.stop(),()=>{f.autoRenderTask.stop()})),"setAnimationLoop"in f.renderer&&f.renderer.setAnimationLoop(g=>{e(),a.run(g),l()}),Ul(()=>{if("dispose"in f.renderer){const m=f.renderer.dispose;m()}}),Ct(()=>{f.colorManagementEnabled.set(r.colorManagementEnabled??!0)}),Ct(()=>{f.colorSpace.set(r.colorSpace??"srgb")}),Ct(()=>{f.toneMapping.set(r.toneMapping??uo)}),Ct(()=>{f.shadows.set(r.shadows??js)}),Ct(()=>{f.dpr.set(r.dpr??window.devicePixelRatio)}),f},fw=()=>{const r=Fn("threlte-renderer-context");if(!r)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return r},pw=()=>{const r=Zt({});return Un("threlte-user-context",r),r},mw=r=>{const{scene:e}=uw();return{scene:e,...Q1(r),...r0(),...ng(e),...lw(e),...ow(),...rw(r),...sw(),...dw(r),...pw()}};function gw(r,e){An(e,!0);let t=Fl(e,["$$slots","$$events","$$legacy","children"]);mw(t);var n=Et(),i=K(n);Ol(i,()=>e.children),Z(r,n),En()}var vw=ae('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function _w(r,e){let t=Fl(e,["$$slots","$$events","$$legacy","children"]),n=Yt(void 0),i=Yt(void 0);var s=vw(),o=Xt(s),a=Xt(o);{var l=c=>{gw(c,sp({get dom(){return v(i)},get canvas(){return v(n)}},()=>t,{children:(h,d)=>{var u=Et(),f=K(u);Ol(f,()=>e.children??rp),Z(h,u)},$$slots:{default:!0}}))};un(a,c=>{v(n)&&v(i)&&c(l)})}qt(o),Th(o,c=>xt(n,c),()=>v(n)),qt(s),Th(s,c=>xt(i,c),()=>v(i)),Z(r,s)}const ko=()=>{const r=Sc(),e=fw(),t=Qm(),n=rg(),i=Mc();return{advance:r.advance,autoRender:r.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:r.invalidate,mainStage:r.mainStage,renderer:e.renderer,renderMode:r.renderMode,renderStage:r.renderStage,scheduler:r.scheduler,shadows:e.shadows,shouldRender:r.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(o){n.scene=o}}},xw=r=>typeof r=="object"&&r!==null,yw=(r,e)=>{const{invalidate:t}=ko(),n=I(r),i=I(e),s=_s(aw()),o=_s(hw()),a=ng(),l=cw();Ct(()=>{a.set(v(n)),ti(v(n),"Object3D")&&l.set(v(n)),t()}),Ct(()=>{t();const c=v(n);if(v(i)===void 0&&ti(c,"Object3D"))return o.current?.add(c),()=>{t(),o.current?.remove(c)};if(v(i)===void 0&&xw(s.current)){const h=s.current;if(ti(c,"Material")){const d=h.material;return h.material=c,()=>{t(),h.material=d}}else if(ti(c,"BufferGeometry")){const d=h.geometry;return h.geometry=c,()=>{t(),h.geometry=d}}}if(v(i)===!1)return()=>{t()};if(typeof v(i)=="function"){const h=v(i)({ref:c,parent:s.current,parentObject3D:o.current});return()=>{t(),h?.()}}if(typeof v(i)=="string"){const{target:h,key:d}=jm(s.current,v(i));if(d in h){const u=h[d];return h[d]=c,()=>{t(),h[d]=u}}else return h[d]=c,()=>{t(),delete h[d]}}if(ti(v(i),"Object3D")&&ti(c,"Object3D"))return v(i).add(c),()=>{t(),v(i).remove(c)}})},Mw=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom","filmGauge","filmOffset"]),bh=new Set,Sw=(r,e,t,n)=>{const{invalidate:i,size:s,camera:o}=ko(),a=I(r),l=I(e),c=_s(s);Ct(()=>{if(!t())return;const h=v(a);return bh.add(h),o.set(h),i(),()=>{bh.delete(h),bh.size===0&&(o.set(void 0),i())}}),Ct(()=>{if(!v(l)){for(const h in n())if(Mw.has(h)){v(a).updateProjectionMatrix(),i();break}}}),Ct(()=>{if(e())return;const{width:h,height:d}=c.current;ti(v(a),"PerspectiveCamera")?v(a).aspect=h/d:ti(v(a),"OrthographicCamera")&&(v(a).left=h/-2,v(a).right=h/2,v(a).top=d/2,v(a).bottom=d/-2),v(a).updateProjectionMatrix(),v(a).updateMatrixWorld(),i()})},Wh=Symbol("threlte-disposable-object-context"),bw=r=>typeof r?.dispose=="function",ww=r=>{const e=Fn(Wh),t=I(()=>r()??e?.()??!0);Un(Wh,()=>v(t))},Tw=r=>{const e=I(r),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:i}=eg(),s=Fn(Wh),o=I(()=>s?.()??!0);Ki(()=>{if(v(o))return t(v(e)),()=>n(v(e));i(v(e))})};let Xh;const Aw=r=>{Xh=r},Ew=()=>{const r=Xh;return Xh=void 0,r},qh="threlte-plugin-context",Cw=r=>{const e=Fn(qh);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const i=r();for(let s=0;s<n.length;s++){const o=n[s],a=o(i);a&&a.pluginProps&&t.push(...a.pluginProps)}}return{pluginsProps:t}},Pw=new Set(["$$scope","$$slots","type","args","attach","instance"]),Rw=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Iw=(r,e,t)=>{!Array.isArray(t)&&typeof t=="number"&&typeof r[e]=="object"&&r[e]!==null&&typeof r[e]?.setScalar=="function"&&!r[e]?.isColor?r[e].setScalar(t):typeof r[e]?.set=="function"&&typeof r[e]=="object"&&r[e]!==null?Array.isArray(t)?r[e].set(...t):r[e].set(t):r[e]=t},Dw=(r,e,t)=>{const{invalidate:n}=ko(),i=new Map,s=(o,a,l)=>{if(Rw(l)){const d=i.get(a);if(d&&d.instance===o&&d.value===l)return;i.set(a,{instance:o,value:l})}else i.delete(a);const{key:c,target:h}=jm(o,a);if(typeof l=="function"&&c.startsWith("on")&&!a.includes(".")&&"addEventListener"in h){const d=h,u=c.slice(2);return d.addEventListener(u,l),()=>{d.removeEventListener?.(u,l)}}l!=null?Iw(h,c,l):h[c]=l,n()};Ct(()=>{const o=r(),a=e(),l=t();Nl(()=>{for(const c in a)Ct(()=>{if(!(l?.includes(c)||Pw.has(c)))return s(o,c,a[c])})})})},Lw=r=>typeof r=="function"&&Function.prototype.toString.call(r).startsWith("class "),Nw=(r,e)=>Lw(r)?Array.isArray(e)?new r(...e):new r:r;function qf(r,e){An(e,!0);let t=Bt(e,"is",19,Ew),n=Bt(e,"manual",3,!1),i=Bt(e,"makeDefault",3,!1),s=Bt(e,"ref",15),o=Fl(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const a=I(()=>Nw(t(),e.args));Ct(()=>{s()!==v(a)&&s(v(a))});const l=Cw(()=>({get ref(){return v(a)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return o}}));Dw(()=>v(a),()=>o,()=>l?.pluginsProps),yw(()=>v(a),()=>e.attach),Ct(()=>{(ti(v(a),"PerspectiveCamera")||ti(v(a),"OrthographicCamera"))&&Sw(()=>v(a),()=>n(),()=>i(),()=>o)}),ww(()=>e.dispose),Ct(()=>{bw(v(a))&&Tw(()=>v(a))}),Ki(()=>{v(a);let d;return Nl(()=>{d=e.oncreate?.(v(a))}),d});var c=Et(),h=K(c);Ol(h,()=>e.children??rp,()=>({ref:v(a)})),Z(r,c),En()}const Uw={},w=new Proxy(qf,{get(r,e){if(typeof e!="string")return Reflect.get(r,e);const t=Uw[e]||X1[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return Aw(t),qf}});function Fw(r,e){e&&Un(qh,{...Fn(qh),[r]:e})}const Sr=r=>({subscribe:r.subscribe,get current(){return r.current}});let co=0;const Zu=Zt(!1),bc=Zt(!1),Ju=Zt(void 0),Ku=Zt(0),ju=Zt(0),sg=Zt([]),Qu=Zt(0),{onStart:Ow,onLoad:Bw,onError:zw}=kr;kr.onStart=(r,e,t)=>{Ow?.(r,e,t),bc.set(!0),Ju.set(r),Ku.set(e),ju.set(t);const n=(e-co)/(t-co);Qu.set(n),n===1&&Zu.set(!0)};kr.onLoad=()=>{Bw?.(),bc.set(!1)};kr.onError=r=>{zw?.(r),sg.update(e=>[...e,r])};kr.onProgress=(r,e,t)=>{e===t&&(co=t),bc.set(!0),Ju.set(r),Ku.set(e),ju.set(t);const n=(e-co)/(t-co)||1;Qu.set(n),n===1&&Zu.set(!0)};Sr(bc),Sr(Ju),Sr(Ku),Sr(ju),Sr(sg),Sr(Qu),Sr(Zu);new B;new B;new B;new on;new ft;new ir;new B;new B;new ft;new B;new B;new Pt;new B;new B;new B;new ke;const kw="Right",Vw="Top",Gw="Front",$w="Left",Hw="Bottom",Ww="Back";[kw,Vw,Gw,$w,Hw,Ww].map(r=>r.toLocaleLowerCase());new sn;new B;je.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ke(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xn.line={uniforms:Ru.merge([je.common,je.fog,je.line]),vertexShader:`
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
		`};new Dt;new B;new B;new Dt;new Dt;new Dt;new B;new ft;new Gm;new B;new sn;new on;new Dt;const Xw=`
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
`;var Yw=ae("<!> <!>",1);function Zw(r,e){An(e,!0);let t=Bt(e,"cellColor",3,"#000000"),n=Bt(e,"sectionColor",3,"#0000ee"),i=Bt(e,"cellSize",3,1),s=Bt(e,"backgroundColor",3,"#dadada"),o=Bt(e,"backgroundOpacity",3,0),a=Bt(e,"sectionSize",3,10),l=Bt(e,"plane",3,"xz"),c=Bt(e,"gridSize",19,()=>[20,20]),h=Bt(e,"followCamera",3,!1),d=Bt(e,"infiniteGrid",3,!1),u=Bt(e,"fadeDistance",3,100),f=Bt(e,"fadeStrength",3,1),p=Bt(e,"fadeOrigin",3,void 0),x=Bt(e,"cellThickness",3,1),m=Bt(e,"sectionThickness",3,2),g=Bt(e,"side",3,ni),_=Bt(e,"type",3,"grid"),y=Bt(e,"axis",3,"x"),M=Bt(e,"maxRadius",3,0),C=Bt(e,"cellDividers",3,6),E=Bt(e,"sectionDividers",3,2),L=Bt(e,"ref",15),S=Fl(e,["$$slots","$$events","$$legacy","cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","fadeOrigin","cellThickness","sectionThickness","side","type","axis","maxRadius","cellDividers","sectionDividers","ref","children"]);const A=new Kt,{invalidate:R,camera:U}=ko(),W=new Ci,Y=new B(0,1,0),ne=new B(0,0,0),k={x:0,y:1,z:2},G={xz:"xzy",xy:"xyz",zy:"zyx"},V={grid:0,lines:1,circular:2,polar:3},se={cellSize:{value:i()},sectionSize:{value:a()},cellColor:{value:new it(t())},sectionColor:{value:new it(n())},backgroundColor:{value:new it(s())},backgroundOpacity:{value:o()},fadeDistance:{value:u()},fadeStrength:{value:f()},fadeOrigin:{value:new B},cellThickness:{value:x()},sectionThickness:{value:m()},infiniteGrid:{value:d()},followCamera:{value:h()},coord0:{value:0},coord1:{value:2},coord2:{value:1},gridType:{value:V.grid},lineGridCoord:{value:k[y()]},circleGridMaxRadius:{value:M()},polarCellDividers:{value:C()},polarSectionDividers:{value:E()},worldCamProjPosition:{value:new B},worldPlanePosition:{value:new B}};Ct(()=>{const de=G[l()],Ae=de.charAt(0),me=de.charAt(1),we=de.charAt(2);se.coord0.value=k[Ae],se.coord1.value=k[me],se.coord2.value=k[we],R()}),Ct(()=>{se.cellSize.value=i(),R()}),Ct(()=>{se.sectionSize.value=a(),R()}),Ct(()=>{se.cellColor.value.set(t()),R()}),Ct(()=>{se.sectionColor.value.set(n()),R()}),Ct(()=>{se.backgroundColor.value.set(s()),R()}),Ct(()=>{se.backgroundOpacity.value=o(),R()}),Ct(()=>{se.fadeDistance.value=u(),R()}),Ct(()=>{se.fadeStrength.value=f(),R()}),Ct(()=>{p()&&(se.fadeOrigin.value=p(),R())}),Ct(()=>{se.cellThickness.value=x(),R()}),Ct(()=>{se.sectionThickness.value=m(),R()}),Ct(()=>{se.followCamera.value=h(),R()}),Ct(()=>{se.infiniteGrid.value=d(),R()}),Ct(()=>{switch(_()){case"grid":{se.gridType.value=V.grid;break}case"lines":{se.gridType.value=V.lines,se.lineGridCoord.value=k[y()];break}case"circular":{se.gridType.value=V.circular,se.circleGridMaxRadius.value=M();break}case"polar":{se.gridType.value=V.polar,se.circleGridMaxRadius.value=M(),se.polarCellDividers.value=C(),se.polarSectionDividers.value=E();break}}R()}),ig(()=>{W.setFromNormalAndCoplanarPoint(Y,ne).applyMatrix4(A.matrixWorld);const de=A.material,Ae=de.uniforms.worldCamProjPosition,me=de.uniforms.worldPlanePosition,we=de.uniforms.fadeOrigin,Be=W.projectPoint(U.current.position,Ae.value);p()||(we.value=Be),me.value.set(0,0,0).applyMatrix4(A.matrixWorld)},{autoInvalidate:!1}),w(r,sp({get is(){return A},frustumCulled:!1},()=>S,{get ref(){return L()},set ref(de){L(de)},children:(de,Ae)=>{var me=Yw(),we=K(me);T(we,()=>w.ShaderMaterial,(oe,ce)=>{ce(oe,{get fragmentShader(){return qw},get vertexShader(){return Xw},get uniforms(){return se},transparent:!0,get side(){return g()}})});var Be=F(we,2);{var st=oe=>{var ce=Et(),ge=K(ce);Ol(ge,()=>e.children,()=>({ref:A})),Z(oe,ce)},$e=oe=>{var ce=Et(),ge=K(ce);{let De=I(()=>typeof c()=="number"?[c(),c()]:c());T(ge,()=>w.PlaneGeometry,(Ce,Fe)=>{Fe(Ce,{get args(){return v(De)}})})}Z(oe,ce)};un(Be,oe=>{e.children?oe(st):oe($e,-1)})}Z(de,me)},$$slots:{default:!0}})),En()}new ft;new ft;new Kt;`${mt.logdepthbuf_pars_vertex}${mt.fog_pars_vertex}${mt.logdepthbuf_vertex}${mt.fog_vertex}`;`${mt.tonemapping_fragment}${mt.colorspace_fragment}`;`${mt.tonemapping_fragment}${mt.colorspace_fragment}`;const Jw=`

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
`,Qw=jw,eT=`
	${Jw}
	${Kw}
`;`${Qw}${eT}${mt.tonemapping_fragment}${mt.colorspace_fragment}`;new sn;typeof window<"u"&&document.createElement("div");const tT=r=>{const{camera:e}=ko();let t=r.current.clientWidth,n=r.current.clientHeight;const i=new ResizeObserver(([o])=>{t=o.contentRect.width,n=o.contentRect.height}),s=_s(r);return Ct(()=>{const{current:o}=s;if(o)return i.observe(o),()=>i.unobserve(o)}),(o,a)=>{a.pointer.update(l=>(l.set(o.offsetX/t*2-1,-(o.offsetY/n)*2+1),l)),a.raycaster.setFromCamera(a.pointer.current,e.current)}},og=Symbol("interactivity-context"),nT=()=>Fn(og),iT=r=>{const e=Zt(Mc().dom),t={enabled:Zt(!0),pointer:Zt(new ke),pointerOverTarget:Zt(!1),lastEvent:void 0,raycaster:new Vm,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,handlers:new WeakMap,compute:tT(e),filter:r?.filter,addInteractiveObject:(n,i)=>{t.interactiveObjects.indexOf(n)>-1||(t.handlers.set(n,i),t.interactiveObjects.push(n))},removeInteractiveObject:n=>{const i=t.interactiveObjects.indexOf(n);t.interactiveObjects.splice(i,1),t.handlers.delete(n)}};return Un(og,t),t},ag=()=>{const r=nT();if(!r)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");return r},Yf=["onclick","oncontextmenu","ondblclick","onwheel","onpointerup","onpointerdown","onpointerover","onpointerout","onpointerenter","onpointerleave","onpointermove","onpointermissed"],rT=()=>{Fw("interactivity",r=>{if(!ti(r.ref,"Object3D")||!Object.entries(r.props).some(([i,s])=>s!==void 0&&Yf.includes(i)))return;const{addInteractiveObject:t,removeInteractiveObject:n}=ag();return J1.pre(()=>[r.ref],([i])=>(t(i,r.props),()=>{n(i)})),{pluginProps:Yf}})};function Zf(r){return`${(r.eventObject||r.object).uuid}|${r.index}|${r.instanceId}`}const Jf=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],sT=r=>{const{handlers:e}=ag(),t=_=>{const y=_.offsetX-r.initialClick[0],M=_.offsetY-r.initialClick[1];return Math.round(Math.hypot(y,M))},n=_=>{if(r.hovered.size===0)return;const y=new Set;for(const M of _)y.add(Zf(M));for(const[M,C]of r.hovered)if(!y.has(M)){const{eventObject:E}=C;r.hovered.delete(M);const L=e.get(E);if(L){const S={...C,intersections:_};L.onpointerout?.(S),L.onpointerleave?.(S)}}},i=()=>{if(!r.enabled.current)return[];const _=[],y=r.raycaster.intersectObjects(r.interactiveObjects,!0),M=r.filter===void 0?y:r.filter(y,r);for(const C of M){let E=C.object;for(;E;)e.has(E)&&_.push({...C,eventObject:E}),E=E.parent}return _},s=(_,y)=>{for(const M of y)e.get(M)?.onpointermissed?.(_)},o=()=>{r.pointerOverTarget.set(!1),n([])},a=()=>{r.pointerOverTarget.set(!0)},l=_=>{const y=_.type,M=y==="pointermove",C=y==="click"||y==="contextmenu"||y==="dblclick";r.compute(_,r);const E=i(),L=C?t(_):0;y==="pointerdown"&&(r.initialClick=[_.offsetX,_.offsetY],r.initialHits=E.map(A=>A.eventObject)),C&&E.length===0&&L<=2&&s(_,r.interactiveObjects),M&&n(E);let S=!1;e:for(const A of E){const R=e.get(A.eventObject);if(!R)continue;const U={stopped:S,...A,intersections:E,stopPropagation(){if(S=!0,U.stopped=!0,r.hovered.size>0&&Array.from(r.hovered.values()).some(W=>W.eventObject===A.eventObject)){const W=E.slice(0,E.indexOf(A));n([...W,A])}},camera:r.raycaster.camera,delta:L,nativeEvent:_,pointer:r.pointer.current,ray:r.raycaster.ray};if(M){if(R.onpointerover||R.onpointerenter||R.onpointerout||R.onpointerleave){const W=Zf(U),Y=r.hovered.get(W);Y?Y.stopped&&U.stopPropagation():(r.hovered.set(W,U),R.onpointerover?.(U),R.onpointerenter?.(U))}R.onpointermove?.(U)}else R[`on${y}`]?(!C||r.initialHits.includes(A.eventObject))&&(s(_,r.interactiveObjects.filter(W=>!r.initialHits.includes(W))),R[`on${y}`]?.(U)):C&&r.initialHits.includes(A.eventObject)&&s(_,r.interactiveObjects.filter(W=>!r.initialHits.includes(W)));if(S)break e}};let c=0,h=null,d=-1/0,u=-1/0;const f=.25,p=_=>{Math.abs(_.offsetX-d)<f&&Math.abs(_.offsetY-u)<f||(d=_.offsetX,u=_.offsetY,h=_,c||(c=requestAnimationFrame(()=>{c=0,h&&(l(h),h=null)})))},x=_=>{for(const[y]of Jf)y==="pointerleave"||y==="pointercancel"?_.removeEventListener(y,o):y==="pointermove"?_.removeEventListener(y,p):y==="pointerenter"?_.removeEventListener(y,a):_.removeEventListener(y,l)},m=_=>{for(const[y,M]of Jf)y==="pointerleave"||y==="pointercancel"?_.addEventListener(y,o,{passive:M}):y==="pointermove"?_.addEventListener(y,p,{passive:M}):y==="pointerenter"?_.addEventListener(y,a,{passive:M}):_.addEventListener(y,l,{passive:M})},g=_s(r.target);Ct(()=>{const{current:_}=g;if(_)return m(_),()=>{x(_)}})},oT=r=>{const e=iT(r);return rT(),sT(e),e};for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);new Vr(-1,1,1,-1,0,1);class aT extends yt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}new aT;var lg={exports:{}};lg.exports=wc;lg.exports.default=wc;function wc(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=cg(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,h,d,u,f;if(n&&(s=dT(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(var p=t;p<i;p+=t)d=r[p],u=r[p+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Po(s,o,t,a,l,f,0),o}function cg(r,e,t,n,i){var s,o;if(i===Jh(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Kf(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Kf(s,r[s],r[s+1],o);return o&&Tc(o,o.next)&&(Io(o),o=o.next),o}function Fr(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Tc(t,t.next)||$t(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Po(r,e,t,n,i,s,o){if(r){!o&&s&&vT(r,n,i,s);for(var a=r,l,c;r.prev!==r.next;){if(l=r.prev,c=r.next,s?cT(r,n,i,s):lT(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Io(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=hT(Fr(r),e,t),Po(r,e,t,n,i,s,2)):o===2&&uT(r,e,t,n,i,s):Po(Fr(r),e,t,n,i,s,1);break}}}}function lT(r){var e=r.prev,t=r,n=r.next;if($t(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,u=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&gs(i,a,s,l,o,c,p.x,p.y)&&$t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cT(r,e,t,n){var i=r.prev,s=r,o=r.next;if($t(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<d?h<u?h:u:d<u?d:u,x=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,g=Yh(f,p,e,t,n),_=Yh(x,m,e,t,n),y=r.prevZ,M=r.nextZ;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&gs(a,h,l,d,c,u,y.x,y.y)&&$t(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&gs(a,h,l,d,c,u,M.x,M.y)&&$t(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&gs(a,h,l,d,c,u,y.x,y.y)&&$t(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&gs(a,h,l,d,c,u,M.x,M.y)&&$t(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function hT(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Tc(i,s)&&hg(i,n,n.next,s)&&Ro(i,s)&&Ro(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Io(n),Io(n.next),n=r=s),n=n.next}while(n!==r);return Fr(n)}function uT(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&yT(o,a)){var l=ug(o,a);o=Fr(o,o.next),l=Fr(l,l.next),Po(o,e,t,n,i,s,0),Po(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function dT(r,e,t,n){var i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=cg(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(xT(c));for(i.sort(fT),s=0;s<i.length;s++)t=pT(i[s],t);return t}function fT(r,e){return r.x-e.x}function pT(r,e){var t=mT(r,e);if(!t)return e;var n=ug(t,r);return Fr(n,n.next),Fr(t,t.next)}function mT(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var l=o,c=o.x,h=o.y,d=1/0,u;t=o;do n>=t.x&&t.x>=c&&n!==t.x&&gs(i<h?n:s,i,c,h,i<h?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Ro(t,r)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&gT(o,t)))&&(o=t,d=u)),t=t.next;while(t!==l);return o}function gT(r,e){return $t(r.prev,r,e.prev)<0&&$t(e.next,r,r.next)<0}function vT(r,e,t,n){var i=r;do i.z===0&&(i.z=Yh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,_T(i)}function _T(r){var e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Yh(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function xT(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function gs(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function yT(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!MT(r,e)&&(Ro(r,e)&&Ro(e,r)&&ST(r,e)&&($t(r.prev,r,e.prev)||$t(r,e.prev,e))||Tc(r,e)&&$t(r.prev,r,r.next)>0&&$t(e.prev,e,e.next)>0)}function $t(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Tc(r,e){return r.x===e.x&&r.y===e.y}function hg(r,e,t,n){var i=Fa($t(r,e,t)),s=Fa($t(r,e,n)),o=Fa($t(t,n,r)),a=Fa($t(t,n,e));return!!(i!==s&&o!==a||i===0&&Ua(r,t,e)||s===0&&Ua(r,n,e)||o===0&&Ua(t,r,n)||a===0&&Ua(t,e,n))}function Ua(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Fa(r){return r>0?1:r<0?-1:0}function MT(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&hg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ro(r,e){return $t(r.prev,r,r.next)<0?$t(r,e,r.next)>=0&&$t(r,r.prev,e)>=0:$t(r,e,r.prev)<0||$t(r,r.next,e)<0}function ST(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ug(r,e){var t=new Zh(r.i,r.x,r.y),n=new Zh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Kf(r,e,t,n){var i=new Zh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Io(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Zh(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}wc.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(Jh(r,0,s,t));if(i)for(var a=0,l=e.length;a<l;a++){var c=e[a]*t,h=a<l-1?e[a+1]*t:r.length;o-=Math.abs(Jh(r,c,h,t))}var d=0;for(a=0;a<n.length;a+=3){var u=n[a]*t,f=n[a+1]*t,p=n[a+2]*t;d+=Math.abs((r[u]-r[p])*(r[f+1]-r[u+1])-(r[u]-r[f])*(r[p+1]-r[u+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function Jh(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}wc.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new ke;new ke;var jf;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const l=i[a];for(;s.length>=2;){const c=s[s.length-1],h=s[s.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))s.pop();else break}s.push(l)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const l=i[a];for(;o.length>=2;){const c=o[o.length-1],h=o[o.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))o.pop();else break}o.push(l)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(jf||(jf={}));new Ni;new B;new ft;new ir;new on;new sn;new B;new B;const Ac=[{stepNumber:1,title:"前期准备与施工许可",description:"在任何实质性物理施工开始之前，必须完成繁琐但至关重要的行政审批与场地规划工作。承包商需要向当地建筑与安全局提交详细的施工图纸，以申请并获得多项施工许可证，包括但不限于区划、场地平整、主体结构、水管、电气及暖通空调等专项许可。此外，这一阶段还包括现场的初步勘察、临时设施的搭建（如安全围栏、便携式厕所），以及临时水电的接入，确保施工现场符合OSHA安全规范并具备正式开工条件。",visibleComponentIds:[],audio:"1.mp3",imageLink:"https://www.google.com/search?q=empty+site+before+construction&udm=2"},{stepNumber:2,title:"场地放线与土方开挖",description:"取得所有必要许可后，施工团队正式进场。首先使用测量仪器进行精确的场地放线，设置龙门板和参考拉线，以严格对应建筑图纸确定房屋的确切位置和边界。随后，使用重型机械清理地表植被、岩石和废弃物，并根据设计标高进行土方开挖与场地平整。挖掘工作不仅涉及房屋主体结构的地基沟槽，还可能包括地下公用设施（如化粪池、下水道主管道）的深沟开挖。",visibleComponentIds:[],audio:"2.mp3",imageLink:"https://www.google.com/search?q=construction+site+digging+and+batter+board&udm=2"},{stepNumber:3,title:"浇筑地基",description:"地基是整个建筑的重中之重。在挖掘好的沟槽内，工人们会先铺设碎石垫层并组装木制或金属模板，随后严格按照结构图纸绑扎钢筋以增强地基的抗拉强度。对于板上地基，还需要在浇筑前铺设防潮膜并预埋底层的水管和电线管。一切就绪并经过市政检查官的首次查验后，方可浇筑混凝土。在混凝土未完全凝固时，必须精准预埋地脚螺栓和抗震连接件，以便日后将上层木结构底梁牢牢锚固在地基上。混凝土需经过充分养护才能达到设计强度。",visibleComponentIds:[],audio:"3.mp3",imageLink:"https://www.google.com/search?q=concrete+foundation+construction&udm=2"},{stepNumber:4,title:"完成主体结构框架",description:"这一阶段将构筑房屋的骨架，是视觉上变化最快的过程。木工团队首先在混凝土地基上安装经过防腐处理的底梁，接着搭建承重和非承重的木板墙体框架，包括墙骨柱、顶梁以及门窗洞口的过梁。如果是多层建筑，还会安装楼板托梁和底基板。最后搭建屋顶结构，通常使用预制屋顶桁架或现场切割的椽子和屋脊板。结构外侧会钉上定向刨花板（OSB）或胶合板作为剪力墙面板，并覆上防风雨透气膜，使房屋初具雏形。",visibleComponentIds:[],audio:"4.mp3",imageLink:"https://www.google.com/search?q=rough+framing+construction&udm=2"},{stepNumber:5,title:"水电及暖通空调管线预埋",description:"房屋骨架搭建完毕后，机电分包商开始进行隐蔽工程的“粗装”。水管工将在墙体和地板骨架之间穿插布设给水管和带有排气系统的排水管道。电工将安装主配电箱、走线盒，并将各种规格的电线穿过墙骨柱引至各个插座、开关和照明设备的预定位置。同时，暖通空调技术人员会安装室内主机，并在天花板或地板下布置复杂的金属或柔性通风管道。所有这些管线在被墙板封闭前，都必须经过严格的市政合规性检查。",visibleComponentIds:[],audio:"5.mp3",imageLink:"https://www.google.com/search?q=rough+framing+rough+wire+sewer+hvac+install&udm=2"},{stepNumber:6,title:"安装室外配电箱与空调室外机",description:"配合室内的隐蔽工程，外部的机电核心设备也开始就位。在房屋侧面或后方的指定区域，电工会安装连接市政电网的主服务配电箱，并确保其接地系统符合国家电气法规的要求。同时，暖通空调团队会为室外冷凝机组专门浇筑或放置一块平整的混凝土设备地基，将厚重的室外机安放其上，并完成与室内系统相连的冷媒铜管和控制线的对接与测试。",visibleComponentIds:[],audio:"6.mp3",imageLink:"https://www.google.com/search?q=construction+electrical+panel+AC+condensor&udm=2"},{stepNumber:7,title:"安装保温隔热层",description:"在所有墙内管线通过市政检查后，开始安装保温材料以控制热量传递，提高房屋的能源效率并满足节能建筑标准。工人们会在外墙的墙骨柱之间、阁楼的托梁之间以及悬空地板下方填充玻璃纤维棉、吹入式纤维素质或喷涂隔热泡沫。对于不同气候区，材料的热阻值（R-value）有严格的规范要求。保温层内侧通常还会配备防潮层，以防止室内湿气进入墙体深处导致霉菌生长或结构木材腐烂。",visibleComponentIds:[],audio:"7.mp3",imageLink:"https://www.google.com/search?q=construction+insulation&udm=2"},{stepNumber:8,title:"施工外墙饰面",description:"外部防护与装饰工程同步展开，为房屋穿上最终的外衣。在之前铺设的防风雨透气膜之外，承包商会根据设计要求安装外墙饰面材料。这可能是横向的纤维水泥挂板、传统的实木挂板、砖石贴面，或者是加州非常典型的灰泥涂层（Stucco）。如果是灰泥，则需要先钉上金属网，然后分多层涂抹并刮平砂浆。这一步骤不仅决定了房屋的最终立面风格，更构成了抵御风吹雨打、保护内部结构的坚固防线。",visibleComponentIds:[],audio:"8.mp3",imageLink:"https://www.google.com/search?q=construction+siding+stucco+work&udm=2"},{stepNumber:9,title:"安装屋面系统",description:"与外墙饰面同时或稍早进行的是屋顶封顶工程，这是实现房屋完全封闭防雨的关键一步。在屋顶桁架上铺设完木质覆面板后，屋顶工会铺上一层高分子防水卷材或油毡。接着，从屋檐开始自下而上交错安装金属泛水板和屋面表层材料。材料选择十分多样，包括沥青瓦、陶土瓦、混凝土瓦或金属屋面板。屋顶系统的正确安装和密封对于防止漏水、保障房屋内部财产及整体结构寿命至关重要。",visibleComponentIds:[],audio:"9.mp3",imageLink:"https://www.google.com/search?q=construction+roofing+work&udm=2"},{stepNumber:10,title:"安装室内硬装与室外硬化铺装",description:"当房屋内部完成石膏板的安装、填缝和打磨，并涂刷完底漆后，工程正式进入精装修阶段。室内将开始大面积铺设硬面材料，例如实木地板、复合地板或瓷砖。同时，厨房和浴室的定制橱柜被牢牢固定在墙体骨架上，随后安装石材台面以及各类卫浴洁具。在室外，混凝土团队则忙于完成庭院的硬化景观，包括浇筑车道、迎宾步道、后院露台以及必要的挡水墙，并确保所有硬化地面都有适当的排水坡度。",visibleComponentIds:[],audio:"10.mp3",imageLink:"https://www.google.com/search?q=construction+interior+finish+work&udm=2"},{stepNumber:11,title:"门窗工程安装",description:"门窗的精准安装是完善建筑外壳保温和安保功能的关键。工人们将预制好的窗户单元和外门（如正门、侧门及滑动玻璃门）小心地放入框架阶段留出的预留洞口中。安装过程中必须反复使用水平尺和垫片确保门窗绝对水平和垂直，然后将其固定在木骨架上。随后，在门窗周围的缝隙中填充低膨胀泡沫保温剂，并在外部贴覆防水胶带和施打耐候密封胶，以彻底阻断空气泄漏和雨水渗透。",visibleComponentIds:[],audio:"11.mp3",imageLink:"https://www.google.com/search?q=construction+door+and+window+installing&udm=2"},{stepNumber:12,title:"完善室外景观绿化",description:"建筑工程的最后收尾阶段是将冰冷的建筑物完美融入自然环境之中。专业的景观团队会对庭院土壤进行最后的细致平整，确保所有地表径流都顺着坡度远离房屋地基。接着，他们会开沟铺设地下自动灌溉系统，并根据景观设计图纸铺设草皮、播种草籽，栽种各类乔木、灌木和装饰花卉。完善的绿化不仅极大地提升了房产的街景颜值，也有助于调节局部微气候。待这一步完成且房屋内部全部保洁完毕后，即可申请最终的入住许可证。",visibleComponentIds:[],audio:"12.mp3",imageLink:""}];function bT(r){return Ac.find(e=>e.stepNumber===r)}const Oa=Ac.length;let Kh=Yt(1),jh=Yt(null);function tn(r){xt(jh,r,!0)}function wT(r){return r.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}const TT={"ac-condenser":"空调冷凝机","anchor-bolt":"地脚螺栓",bathtub:"浴缸","batter-board":"定位板","ceiling-joist":"天花搁栅",chimney:"烟囱","concrete-slab":"混凝土板",door:"门","door-knob":"门把手",driveway:"车道","dry-grass":"枯草",drywall:"石膏板","electrical-box":"配电箱","electrical-panel":"配电箱","electrical-wire":"电线","equipment-slab":"设备地基",fascia:"檐板",fence:"围栏",flooring:"地板",footing:"地基底脚",formwork:"模板",header:"过梁","hvac-duct":"暖通风管",insulation:"保温层","jack-stud":"托柱","plumbing-cold":"冷水管","plumbing-hot":"热水管",rebar:"钢筋","ridge-board":"屋脊板",rock:"岩石","roof-rafter":"屋椽","roof-vent":"屋顶通风口",roofing:"屋面","rough-sill":"窗台梁","sewer-line":"污水管","sewer-vent":"排污通气管",shrub:"灌木",siding:"外墙挂板","sill-plate":"底板",toilet:"马桶","toilet-tank":"马桶水箱","top-plate":"顶板","tree-foliage":"树叶","tree-trunk":"树干","tub-surround":"浴缸围板",vanity:"浴室柜","vanity-top":"浴室柜台面",walkway:"人行道","wall-stud":"墙立柱","window-frame":"窗框","window-glass":"窗玻璃"};function AT(r){const e=wT(r);return{english:e,chinese:TT[r]??e}}const ET={get(){return v(jh)},set(r){xt(jh,r,!0)}},rn={get(){return v(Kh)},set(r){r>=1&&r<=Ac.length&&xt(Kh,r,!0)}};function CT(){return bT(v(Kh))??Ac[0]}var PT=ae("<!> <!>",1),RT=ae("<!> <!>",1),IT=ae("<!> <!>",1),DT=ae("<!> <!>",1),LT=ae("<!> <!>",1),NT=ae("<!> <!>",1),UT=ae("<!> <!>",1),FT=ae("<!> <!>",1),OT=ae("<!> <!> <!> <!> <!> <!> <!> <!>",1);function BT(r,e){An(e,!0);const t=12,n=10,i=t-.6,s=n-.6,o=.04,a=.08,l="#6f6f6f",c=6,h="#9a7a53",d=1.4,u=.08,f=1.4,p=.1,x=.08,m=.2,g="#8b6a45",_=.22,y=.08,M=.04,C="#4fc3f7";let E=Yt(null);function L(U,W){U.stopPropagation(),tn(W),xt(E,W,!0)}function S(){tn(null),xt(E,null)}var A=Et(),R=K(A);{let U=I(()=>rn.get()===2);T(R,()=>w.Group,(W,Y)=>{Y(W,{get visible(){return v(U)},children:(ne,k)=>{var G=OT(),V=K(G);Vt(V,17,()=>Array(c),kt,($e,oe,ce)=>{const ge=I(()=>-s/2+ce*s/(c-1));var De=Et(),Ce=K(De);{let Fe=I(()=>[0,a,v(ge)]);T(Ce,()=>w.Mesh,(qe,ze)=>{ze(qe,{get position(){return v(Fe)},rotation:[0,0,Math.PI/2],name:"rebar",onpointerenter:fe=>L(fe,"rebar"),onpointerleave:S,children:(fe,Ee)=>{var _e=PT(),Ie=K(_e);T(Ie,()=>w.CylinderGeometry,(Ne,Te)=>{Te(Ne,{args:[o,o,i,8]})});var N=F(Ie,2);{let Ne=I(()=>v(E)==="rebar"?C:l);T(N,()=>w.MeshStandardMaterial,(Te,ve)=>{ve(Te,{get color(){return v(Ne)}})})}Z(fe,_e)},$$slots:{default:!0}})})}Z($e,De)});var se=F(V,2);T(se,()=>w.Mesh,($e,oe)=>{oe($e,{position:[0,_/2,n/2-y/2-M],name:"formwork",onpointerenter:ce=>L(ce,"formwork"),onpointerleave:S,children:(ce,ge)=>{var De=RT(),Ce=K(De);T(Ce,()=>w.BoxGeometry,(qe,ze)=>{ze(qe,{args:[t,_,y]})});var Fe=F(Ce,2);{let qe=I(()=>v(E)==="formwork"?C:g);T(Fe,()=>w.MeshStandardMaterial,(ze,fe)=>{fe(ze,{get color(){return v(qe)}})})}Z(ce,De)},$$slots:{default:!0}})});var de=F(se,2);T(de,()=>w.Mesh,($e,oe)=>{oe($e,{position:[0,_/2,-n/2+y/2+M],name:"formwork",onpointerenter:ce=>L(ce,"formwork"),onpointerleave:S,children:(ce,ge)=>{var De=IT(),Ce=K(De);T(Ce,()=>w.BoxGeometry,(qe,ze)=>{ze(qe,{args:[t,_,y]})});var Fe=F(Ce,2);{let qe=I(()=>v(E)==="formwork"?C:g);T(Fe,()=>w.MeshStandardMaterial,(ze,fe)=>{fe(ze,{get color(){return v(qe)}})})}Z(ce,De)},$$slots:{default:!0}})});var Ae=F(de,2);T(Ae,()=>w.Mesh,($e,oe)=>{oe($e,{position:[-t/2+y/2+M,_/2,0],name:"formwork",onpointerenter:ce=>L(ce,"formwork"),onpointerleave:S,children:(ce,ge)=>{var De=DT(),Ce=K(De);T(Ce,()=>w.BoxGeometry,(qe,ze)=>{ze(qe,{args:[y,_,n-y*2]})});var Fe=F(Ce,2);{let qe=I(()=>v(E)==="formwork"?C:g);T(Fe,()=>w.MeshStandardMaterial,(ze,fe)=>{fe(ze,{get color(){return v(qe)}})})}Z(ce,De)},$$slots:{default:!0}})});var me=F(Ae,2);T(me,()=>w.Mesh,($e,oe)=>{oe($e,{position:[t/2-y/2-M,_/2,0],name:"formwork",onpointerenter:ce=>L(ce,"formwork"),onpointerleave:S,children:(ce,ge)=>{var De=LT(),Ce=K(De);T(Ce,()=>w.BoxGeometry,(qe,ze)=>{ze(qe,{args:[y,_,n-y*2]})});var Fe=F(Ce,2);{let qe=I(()=>v(E)==="formwork"?C:g);T(Fe,()=>w.MeshStandardMaterial,(ze,fe)=>{fe(ze,{get color(){return v(qe)}})})}Z(ce,De)},$$slots:{default:!0}})});var we=F(me,2);Vt(we,17,()=>Array(c),kt,($e,oe,ce)=>{const ge=I(()=>-i/2+ce*i/(c-1));var De=Et(),Ce=K(De);{let Fe=I(()=>[v(ge),a,0]);T(Ce,()=>w.Mesh,(qe,ze)=>{ze(qe,{get position(){return v(Fe)},rotation:[Math.PI/2,0,0],name:"rebar",onpointerenter:fe=>L(fe,"rebar"),onpointerleave:S,children:(fe,Ee)=>{var _e=NT(),Ie=K(_e);T(Ie,()=>w.CylinderGeometry,(Ne,Te)=>{Te(Ne,{args:[o,o,s,8]})});var N=F(Ie,2);{let Ne=I(()=>v(E)==="rebar"?C:l);T(N,()=>w.MeshStandardMaterial,(Te,ve)=>{ve(Te,{get color(){return v(Ne)}})})}Z(fe,_e)},$$slots:{default:!0}})})}Z($e,De)});var Be=F(we,2);Vt(Be,17,()=>[[-t/2-m,n/2+m,0],[t/2+m,n/2+m,0],[-t/2-m,-n/2-m,0],[t/2+m,-n/2-m,0]],kt,($e,oe)=>{var ce=I(()=>ho(v(oe),2));let ge=()=>v(ce)[0],De=()=>v(ce)[1];var Ce=Et(),Fe=K(Ce);{let qe=I(()=>[ge(),d/2,De()]);T(Fe,()=>w.Mesh,(ze,fe)=>{fe(ze,{get position(){return v(qe)},name:"batter-board",onpointerenter:Ee=>L(Ee,"batter-board"),onpointerleave:S,children:(Ee,_e)=>{var Ie=UT(),N=K(Ie);T(N,()=>w.BoxGeometry,(Te,ve)=>{ve(Te,{args:[u,d,u]})});var Ne=F(N,2);{let Te=I(()=>v(E)==="batter-board"?C:h);T(Ne,()=>w.MeshStandardMaterial,(ve,pe)=>{pe(ve,{get color(){return v(Te)}})})}Z(Ee,Ie)},$$slots:{default:!0}})})}Z($e,Ce)});var st=F(Be,2);Vt(st,17,()=>[[0,n/2+m,f,p,x],[0,-n/2-m,f,p,x],[-t/2-m,0,x,p,f],[t/2+m,0,x,p,f]],kt,($e,oe)=>{var ce=I(()=>ho(v(oe),5));let ge=()=>v(ce)[0],De=()=>v(ce)[1],Ce=()=>v(ce)[2],Fe=()=>v(ce)[3],qe=()=>v(ce)[4];var ze=Et(),fe=K(ze);{let Ee=I(()=>[ge(),d-.2,De()]);T(fe,()=>w.Mesh,(_e,Ie)=>{Ie(_e,{get position(){return v(Ee)},name:"batter-board",onpointerenter:N=>L(N,"batter-board"),onpointerleave:S,children:(N,Ne)=>{var Te=FT(),ve=K(Te);{let P=I(()=>[Ce(),Fe(),qe()]);T(ve,()=>w.BoxGeometry,(b,z)=>{z(b,{get args(){return v(P)}})})}var pe=F(ve,2);{let P=I(()=>v(E)==="batter-board"?C:h);T(pe,()=>w.MeshStandardMaterial,(b,z)=>{z(b,{get color(){return v(P)}})})}Z(N,Te)},$$slots:{default:!0}})})}Z($e,ze)}),Z(ne,G)},$$slots:{default:!0}})})}Z(r,A),En()}var zT=ae("<!> <!>",1),kT=ae("<!> <!>",1),VT=ae("<!> <!>",1),GT=ae("<!> <!> <!>",1);function $T(r,e){An(e,!0);const t=30,n=30,i="#6b5a45",s="#7b7469",o="#a79d71",a="#4fc3f7";let l=Yt(null);function c(f){f.stopPropagation();const p=f?.object?.name??null;tn(p),xt(l,p,!0)}function h(){tn(null),xt(l,null)}var d=Et(),u=K(d);T(u,()=>w.Group,(f,p)=>{p(f,{onpointermove:c,onpointerleave:h,children:(x,m)=>{var g=GT(),_=K(g);T(_,()=>w.Mesh,(C,E)=>{E(C,{position:[0,-.48,0],rotation:[-Math.PI/2,0,0],children:(L,S)=>{var A=zT(),R=K(A);T(R,()=>w.PlaneGeometry,(W,Y)=>{Y(W,{args:[t,n]})});var U=F(R,2);T(U,()=>w.MeshStandardMaterial,(W,Y)=>{Y(W,{color:i})}),Z(L,A)},$$slots:{default:!0}})});var y=F(_,2);Vt(y,16,()=>[[-7,-4,.55],[3,-6,.42],[8,1,.5],[-2,5,.38],[10,-8,.46],[-10,8,.44]],kt,(C,E)=>{var L=I(()=>ho(E,3));let S=()=>v(L)[0],A=()=>v(L)[1],R=()=>v(L)[2];var U=Et(),W=K(U);{let Y=I(()=>[S(),-.42+R()/2,A()]);T(W,()=>w.Mesh,(ne,k)=>{k(ne,{get position(){return v(Y)},name:"rock",children:(G,V)=>{var se=kT(),de=K(se);{let me=I(()=>[R(),0]);T(de,()=>w.DodecahedronGeometry,(we,Be)=>{Be(we,{get args(){return v(me)}})})}var Ae=F(de,2);{let me=I(()=>v(l)==="rock"?a:s);T(Ae,()=>w.MeshStandardMaterial,(we,Be)=>{Be(we,{get color(){return v(me)}})})}Z(G,se)},$$slots:{default:!0}})})}Z(C,U)});var M=F(y,2);Vt(M,16,()=>[[-5,7],[6,6],[9,-3],[-8,-7],[1,-9],[11,9],[-11,2]],kt,(C,E)=>{var L=I(()=>ho(E,2));let S=()=>v(L)[0],A=()=>v(L)[1];var R=Et(),U=K(R);{let W=I(()=>[S(),-.34,A()]);T(U,()=>w.Mesh,(Y,ne)=>{ne(Y,{get position(){return v(W)},name:"dry-grass",children:(k,G)=>{var V=VT(),se=K(V);T(se,()=>w.ConeGeometry,(Ae,me)=>{me(Ae,{args:[.22,.42,8]})});var de=F(se,2);{let Ae=I(()=>v(l)==="dry-grass"?a:o);T(de,()=>w.MeshStandardMaterial,(me,we)=>{we(me,{get color(){return v(Ae)}})})}Z(k,V)},$$slots:{default:!0}})})}Z(C,R)}),Z(x,g)},$$slots:{default:!0}})}),Z(r,d),En()}var HT=ae("<!> <!>",1),WT=ae("<!> <!>",1),XT=ae("<!> <!>",1),qT=ae("<!> <!>",1),YT=ae("<!> <!>",1),ZT=ae("<!> <!>",1),JT=ae("<!> <!>",1),KT=ae("<!> <!>",1),jT=ae("<!> <!>",1),QT=ae("<!> <!> <!> <!>",1),eA=ae("<!> <!>",1),tA=ae("<!> <!>",1),nA=ae("<!> <!>",1),iA=ae("<!> <!>",1),rA=ae("<!> <!> <!> <!>",1),sA=ae("<!> <!>",1),oA=ae("<!> <!> <!> <!> <!> <!>",1);function aA(r,e){An(e,!0);const t=12,n=10,i=.5,s=.75,o=1,a="#a0a0a0",l="#888888",c="#4f4f4f",h="#4fc3f7",d=i/2,u=i,f=.08,p=.5,x=.45,m=.2,g=.05,_=[-4,-2,0,2,4],y=[-3,-1,1,3];let M=Yt(null);function C(A,R){A.stopPropagation(),tn(R),xt(M,R,!0)}function E(){tn(null),xt(M,null)}var L=Et(),S=K(L);{let A=I(()=>rn.get()>=3);T(S,()=>w.Group,(R,U)=>{U(R,{get visible(){return v(A)},children:(W,Y)=>{var ne=oA(),k=K(ne);T(k,()=>w.Mesh,(me,we)=>{we(me,{position:[0,d,0],name:"concrete-slab",onpointerenter:Be=>C(Be,"concrete-slab"),onpointerleave:E,children:(Be,st)=>{var $e=HT(),oe=K($e);T(oe,()=>w.BoxGeometry,(ge,De)=>{De(ge,{args:[t,i,n]})});var ce=F(oe,2);{let ge=I(()=>v(M)==="concrete-slab"?h:a);T(ce,()=>w.MeshStandardMaterial,(De,Ce)=>{Ce(De,{get color(){return v(ge)}})})}Z(Be,$e)},$$slots:{default:!0}})});var G=F(k,2);T(G,()=>w.Mesh,(me,we)=>{we(me,{position:[0,-s/2,n/2-o/2],name:"footing",onpointerenter:Be=>C(Be,"footing"),onpointerleave:E,children:(Be,st)=>{var $e=WT(),oe=K($e);T(oe,()=>w.BoxGeometry,(ge,De)=>{De(ge,{args:[t,s,o]})});var ce=F(oe,2);{let ge=I(()=>v(M)==="footing"?h:l);T(ce,()=>w.MeshStandardMaterial,(De,Ce)=>{Ce(De,{get color(){return v(ge)}})})}Z(Be,$e)},$$slots:{default:!0}})});var V=F(G,2);T(V,()=>w.Mesh,(me,we)=>{we(me,{position:[0,-s/2,-n/2+o/2],name:"footing",onpointerenter:Be=>C(Be,"footing"),onpointerleave:E,children:(Be,st)=>{var $e=XT(),oe=K($e);T(oe,()=>w.BoxGeometry,(ge,De)=>{De(ge,{args:[t,s,o]})});var ce=F(oe,2);{let ge=I(()=>v(M)==="footing"?h:l);T(ce,()=>w.MeshStandardMaterial,(De,Ce)=>{Ce(De,{get color(){return v(ge)}})})}Z(Be,$e)},$$slots:{default:!0}})});var se=F(V,2);T(se,()=>w.Mesh,(me,we)=>{we(me,{position:[-t/2+o/2,-s/2,0],name:"footing",onpointerenter:Be=>C(Be,"footing"),onpointerleave:E,children:(Be,st)=>{var $e=qT(),oe=K($e);T(oe,()=>w.BoxGeometry,(ge,De)=>{De(ge,{args:[o,s,n-o*2]})});var ce=F(oe,2);{let ge=I(()=>v(M)==="footing"?h:l);T(ce,()=>w.MeshStandardMaterial,(De,Ce)=>{Ce(De,{get color(){return v(ge)}})})}Z(Be,$e)},$$slots:{default:!0}})});var de=F(se,2);T(de,()=>w.Mesh,(me,we)=>{we(me,{position:[t/2-o/2,-s/2,0],name:"footing",onpointerenter:Be=>C(Be,"footing"),onpointerleave:E,children:(Be,st)=>{var $e=YT(),oe=K($e);T(oe,()=>w.BoxGeometry,(ge,De)=>{De(ge,{args:[o,s,n-o*2]})});var ce=F(oe,2);{let ge=I(()=>v(M)==="footing"?h:l);T(ce,()=>w.MeshStandardMaterial,(De,Ce)=>{Ce(De,{get color(){return v(ge)}})})}Z(Be,$e)},$$slots:{default:!0}})});var Ae=F(de,2);{let me=I(()=>rn.get()<4);T(Ae,()=>w.Group,(we,Be)=>{Be(we,{get visible(){return v(me)},children:(st,$e)=>{var oe=sA(),ce=K(oe);Vt(ce,17,()=>_,kt,(De,Ce)=>{var Fe=QT(),qe=K(Fe);{let _e=I(()=>[v(Ce),u+p/2,n/2-x]);T(qe,()=>w.Mesh,(Ie,N)=>{N(Ie,{get position(){return v(_e)},name:"anchor-bolt",onpointerenter:Ne=>C(Ne,"anchor-bolt"),onpointerleave:E,children:(Ne,Te)=>{var ve=ZT(),pe=K(ve);T(pe,()=>w.CylinderGeometry,(b,z)=>{z(b,{args:[f,f,p,12]})});var P=F(pe,2);{let b=I(()=>v(M)==="anchor-bolt"?h:c);T(P,()=>w.MeshStandardMaterial,(z,q)=>{q(z,{get color(){return v(b)}})})}Z(Ne,ve)},$$slots:{default:!0}})})}var ze=F(qe,2);{let _e=I(()=>[v(Ce),u+p+g/2,n/2-x]);T(ze,()=>w.Mesh,(Ie,N)=>{N(Ie,{get position(){return v(_e)},name:"anchor-bolt",onpointerenter:Ne=>C(Ne,"anchor-bolt"),onpointerleave:E,children:(Ne,Te)=>{var ve=JT(),pe=K(ve);T(pe,()=>w.BoxGeometry,(b,z)=>{z(b,{args:[m,g,m]})});var P=F(pe,2);{let b=I(()=>v(M)==="anchor-bolt"?h:c);T(P,()=>w.MeshStandardMaterial,(z,q)=>{q(z,{get color(){return v(b)}})})}Z(Ne,ve)},$$slots:{default:!0}})})}var fe=F(ze,2);{let _e=I(()=>[v(Ce),u+p/2,-n/2+x]);T(fe,()=>w.Mesh,(Ie,N)=>{N(Ie,{get position(){return v(_e)},name:"anchor-bolt",onpointerenter:Ne=>C(Ne,"anchor-bolt"),onpointerleave:E,children:(Ne,Te)=>{var ve=KT(),pe=K(ve);T(pe,()=>w.CylinderGeometry,(b,z)=>{z(b,{args:[f,f,p,12]})});var P=F(pe,2);{let b=I(()=>v(M)==="anchor-bolt"?h:c);T(P,()=>w.MeshStandardMaterial,(z,q)=>{q(z,{get color(){return v(b)}})})}Z(Ne,ve)},$$slots:{default:!0}})})}var Ee=F(fe,2);{let _e=I(()=>[v(Ce),u+p+g/2,-n/2+x]);T(Ee,()=>w.Mesh,(Ie,N)=>{N(Ie,{get position(){return v(_e)},name:"anchor-bolt",onpointerenter:Ne=>C(Ne,"anchor-bolt"),onpointerleave:E,children:(Ne,Te)=>{var ve=jT(),pe=K(ve);T(pe,()=>w.BoxGeometry,(b,z)=>{z(b,{args:[m,g,m]})});var P=F(pe,2);{let b=I(()=>v(M)==="anchor-bolt"?h:c);T(P,()=>w.MeshStandardMaterial,(z,q)=>{q(z,{get color(){return v(b)}})})}Z(Ne,ve)},$$slots:{default:!0}})})}Z(De,Fe)});var ge=F(ce,2);Vt(ge,17,()=>y,kt,(De,Ce)=>{var Fe=rA(),qe=K(Fe);{let _e=I(()=>[-t/2+x,u+p/2,v(Ce)]);T(qe,()=>w.Mesh,(Ie,N)=>{N(Ie,{get position(){return v(_e)},name:"anchor-bolt",onpointerenter:Ne=>C(Ne,"anchor-bolt"),onpointerleave:E,children:(Ne,Te)=>{var ve=eA(),pe=K(ve);T(pe,()=>w.CylinderGeometry,(b,z)=>{z(b,{args:[f,f,p,12]})});var P=F(pe,2);{let b=I(()=>v(M)==="anchor-bolt"?h:c);T(P,()=>w.MeshStandardMaterial,(z,q)=>{q(z,{get color(){return v(b)}})})}Z(Ne,ve)},$$slots:{default:!0}})})}var ze=F(qe,2);{let _e=I(()=>[-t/2+x,u+p+g/2,v(Ce)]);T(ze,()=>w.Mesh,(Ie,N)=>{N(Ie,{get position(){return v(_e)},name:"anchor-bolt",onpointerenter:Ne=>C(Ne,"anchor-bolt"),onpointerleave:E,children:(Ne,Te)=>{var ve=tA(),pe=K(ve);T(pe,()=>w.BoxGeometry,(b,z)=>{z(b,{args:[m,g,m]})});var P=F(pe,2);{let b=I(()=>v(M)==="anchor-bolt"?h:c);T(P,()=>w.MeshStandardMaterial,(z,q)=>{q(z,{get color(){return v(b)}})})}Z(Ne,ve)},$$slots:{default:!0}})})}var fe=F(ze,2);{let _e=I(()=>[t/2-x,u+p/2,v(Ce)]);T(fe,()=>w.Mesh,(Ie,N)=>{N(Ie,{get position(){return v(_e)},name:"anchor-bolt",onpointerenter:Ne=>C(Ne,"anchor-bolt"),onpointerleave:E,children:(Ne,Te)=>{var ve=nA(),pe=K(ve);T(pe,()=>w.CylinderGeometry,(b,z)=>{z(b,{args:[f,f,p,12]})});var P=F(pe,2);{let b=I(()=>v(M)==="anchor-bolt"?h:c);T(P,()=>w.MeshStandardMaterial,(z,q)=>{q(z,{get color(){return v(b)}})})}Z(Ne,ve)},$$slots:{default:!0}})})}var Ee=F(fe,2);{let _e=I(()=>[t/2-x,u+p+g/2,v(Ce)]);T(Ee,()=>w.Mesh,(Ie,N)=>{N(Ie,{get position(){return v(_e)},name:"anchor-bolt",onpointerenter:Ne=>C(Ne,"anchor-bolt"),onpointerleave:E,children:(Ne,Te)=>{var ve=iA(),pe=K(ve);T(pe,()=>w.BoxGeometry,(b,z)=>{z(b,{args:[m,g,m]})});var P=F(pe,2);{let b=I(()=>v(M)==="anchor-bolt"?h:c);T(P,()=>w.MeshStandardMaterial,(z,q)=>{q(z,{get color(){return v(b)}})})}Z(Ne,ve)},$$slots:{default:!0}})})}Z(De,Fe)}),Z(st,oe)},$$slots:{default:!0}})})}Z(W,ne)},$$slots:{default:!0}})})}Z(r,L),En()}var lA=ae("<!> <!>",1),cA=ae("<!> <!>",1),hA=ae("<!> <!>",1),uA=ae("<!> <!>",1),dA=ae("<!> <!>",1),fA=ae("<!> <!>",1),pA=ae("<!> <!>",1),mA=ae("<!> <!>",1),gA=ae("<!> <!>",1),vA=ae("<!> <!>",1),_A=ae("<!> <!>",1),xA=ae("<!> <!>",1),yA=ae("<!> <!>",1),MA=ae("<!> <!>",1),SA=ae("<!> <!>",1),bA=ae("<!> <!>",1),wA=ae("<!> <!>",1),TA=ae("<!> <!>",1),AA=ae("<!> <!>",1),EA=ae("<!> <!>",1),CA=ae("<!> <!>",1),PA=ae("<!> <!>",1),RA=ae("<!> <!>",1),IA=ae("<!> <!>",1),DA=ae("<!> <!> <!> <!>  <!> <!>  <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function LA(r,e){An(e,!0);const t=12,n=10,i=8,s=.15,o=.35,a=.35,l=.15,c="#c4956a",h="#4fc3f7",d=1.5,u=Math.floor(t/d)+1,f=Math.floor(n/d)+1,p=Math.floor(u/3),x=Math.floor(u*2/3),m=7,g=.4,_=3,y=.5+l,C=t/2*(4/12),E=Math.sqrt((t/2)**2+C**2),L=Math.atan2(C,t/2),S=.22,A=s/2,R=n-s,U=n/2-o/2,W=U-s,Y=d*2-s,ne=d*2;let k=Yt(null);function G(me,we){me.stopPropagation(),tn(we),xt(k,we,!0)}function V(){tn(null),xt(k,null)}function se(me){return-t/2+me*t/(u-1)}var de=Et(),Ae=K(de);{let me=I(()=>rn.get()>=4);T(Ae,()=>w.Group,(we,Be)=>{Be(we,{get visible(){return v(me)},children:(st,$e)=>{const oe=I(()=>se(x)+d);var ce=DA(),ge=K(ce);T(ge,()=>w.Mesh,(X,Me)=>{Me(X,{position:[0,l/2+.5,n/2-a/2],name:"sill-plate",onpointerenter:j=>G(j,"sill-plate"),onpointerleave:V,children:(j,Oe)=>{var Re=lA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[t,l,a]})});var xe=F(le,2);{let ie=I(()=>v(k)==="sill-plate"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var De=F(ge,2);T(De,()=>w.Mesh,(X,Me)=>{Me(X,{position:[0,l/2+.5,-n/2+a/2],name:"sill-plate",onpointerenter:j=>G(j,"sill-plate"),onpointerleave:V,children:(j,Oe)=>{var Re=cA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[t,l,a]})});var xe=F(le,2);{let ie=I(()=>v(k)==="sill-plate"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var Ce=F(De,2);T(Ce,()=>w.Mesh,(X,Me)=>{Me(X,{position:[-t/2+a/2,l/2+.5,0],name:"sill-plate",onpointerenter:j=>G(j,"sill-plate"),onpointerleave:V,children:(j,Oe)=>{var Re=hA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[a,l,n-a*2]})});var xe=F(le,2);{let ie=I(()=>v(k)==="sill-plate"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var Fe=F(Ce,2);T(Fe,()=>w.Mesh,(X,Me)=>{Me(X,{position:[t/2-a/2,l/2+.5,0],name:"sill-plate",onpointerenter:j=>G(j,"sill-plate"),onpointerleave:V,children:(j,Oe)=>{var Re=uA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[a,l,n-a*2]})});var xe=F(le,2);{let ie=I(()=>v(k)==="sill-plate"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var qe=F(Fe,2);Vt(qe,17,()=>Array(u),kt,(X,Me,j)=>{const Oe=I(()=>se(j)),Re=I(()=>j===p+1),le=I(()=>j===x+1),xe=I(()=>v(Re)||v(le));var ie=Et(),J=K(ie);{var ee=O=>{},Le=O=>{var Q=Et(),re=K(Q);{let te=I(()=>[v(Oe),i/2+y,U]);T(re,()=>w.Mesh,(H,$)=>{$(H,{get position(){return v(te)},name:"wall-stud",onpointerenter:Se=>G(Se,"wall-stud"),onpointerleave:V,children:(Se,He)=>{var Je=dA(),Ue=K(Je);T(Ue,()=>w.BoxGeometry,(Ze,Xe)=>{Xe(Ze,{args:[s,i,o]})});var We=F(Ue,2);{let Ze=I(()=>v(k)==="wall-stud"?h:c);T(We,()=>w.MeshStandardMaterial,(Xe,Ge)=>{Ge(Xe,{get color(){return v(Ze)}})})}Z(Se,Je)},$$slots:{default:!0}})})}Z(O,Q)};un(J,O=>{v(xe)?O(ee):O(Le,-1)})}Z(X,ie)});var ze=F(qe,2);Vt(ze,17,()=>[p,x],kt,(X,Me)=>{const j=I(()=>se(v(Me))),Oe=I(()=>se(v(Me)+2));var Re=mA(),le=K(Re);{let ie=I(()=>[v(j),m/2+y,W]);T(le,()=>w.Mesh,(J,ee)=>{ee(J,{get position(){return v(ie)},name:"wall-stud",onpointerenter:Le=>G(Le,"wall-stud"),onpointerleave:V,children:(Le,O)=>{var Q=fA(),re=K(Q);T(re,()=>w.BoxGeometry,(H,$)=>{$(H,{args:[s,m,o]})});var te=F(re,2);{let H=I(()=>v(k)==="wall-stud"?h:c);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})})}var xe=F(le,2);{let ie=I(()=>[v(Oe),m/2+y,W]);T(xe,()=>w.Mesh,(J,ee)=>{ee(J,{get position(){return v(ie)},name:"wall-stud",onpointerenter:Le=>G(Le,"wall-stud"),onpointerleave:V,children:(Le,O)=>{var Q=pA(),re=K(Q);T(re,()=>w.BoxGeometry,(H,$)=>{$(H,{args:[s,m,o]})});var te=F(re,2);{let H=I(()=>v(k)==="wall-stud"?h:c);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})})}Z(X,Re)});var fe=F(ze,2);{let X=I(()=>[v(oe),_+s/2+y,U]);T(fe,()=>w.Mesh,(Me,j)=>{j(Me,{get position(){return v(X)},name:"rough-sill",onpointerenter:Oe=>G(Oe,"rough-sill"),onpointerleave:V,children:(Oe,Re)=>{var le=gA(),xe=K(le);T(xe,()=>w.BoxGeometry,(J,ee)=>{ee(J,{args:[Y,s,o]})});var ie=F(xe,2);{let J=I(()=>v(k)==="rough-sill"?h:c);T(ie,()=>w.MeshStandardMaterial,(ee,Le)=>{Le(ee,{get color(){return v(J)}})})}Z(Oe,le)},$$slots:{default:!0}})})}var Ee=F(fe,2);{let X=I(()=>[v(oe),_/2+y,U]);T(Ee,()=>w.Mesh,(Me,j)=>{j(Me,{get position(){return v(X)},name:"jack-stud",onpointerenter:Oe=>G(Oe,"jack-stud"),onpointerleave:V,children:(Oe,Re)=>{var le=vA(),xe=K(le);T(xe,()=>w.BoxGeometry,(J,ee)=>{ee(J,{args:[s,_,o]})});var ie=F(xe,2);{let J=I(()=>v(k)==="jack-stud"?h:c);T(ie,()=>w.MeshStandardMaterial,(ee,Le)=>{Le(ee,{get color(){return v(J)}})})}Z(Oe,le)},$$slots:{default:!0}})})}var _e=F(Ee,2);T(_e,()=>w.Mesh,(X,Me)=>{Me(X,{position:[-t/2+p*d+d,m+g/2+y,n/2-o/2],name:"header",onpointerenter:j=>G(j,"header"),onpointerleave:V,children:(j,Oe)=>{var Re=_A(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[ne,g,o]})});var xe=F(le,2);{let ie=I(()=>v(k)==="header"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var Ie=F(_e,2);T(Ie,()=>w.Mesh,(X,Me)=>{Me(X,{position:[-t/2+x*d+d,m+g/2+y,n/2-o/2],name:"header",onpointerenter:j=>G(j,"header"),onpointerleave:V,children:(j,Oe)=>{var Re=xA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[ne,g,o]})});var xe=F(le,2);{let ie=I(()=>v(k)==="header"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var N=F(Ie,2);Vt(N,17,()=>Array(u),kt,(X,Me,j)=>{const Oe=I(()=>-t/2+j*t/(u-1));var Re=Et(),le=K(Re);{let xe=I(()=>[v(Oe),i/2+y,-n/2+o/2]);T(le,()=>w.Mesh,(ie,J)=>{J(ie,{get position(){return v(xe)},name:"wall-stud",onpointerenter:ee=>G(ee,"wall-stud"),onpointerleave:V,children:(ee,Le)=>{var O=yA(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[s,i,o]})});var re=F(Q,2);{let te=I(()=>v(k)==="wall-stud"?h:c);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})})}Z(X,Re)});var Ne=F(N,2);Vt(Ne,17,()=>Array(f),kt,(X,Me,j)=>{const Oe=I(()=>-n/2+A+j*R/(f-1));var Re=Et(),le=K(Re);{let xe=I(()=>[-t/2+o/2,i/2+y,v(Oe)]);T(le,()=>w.Mesh,(ie,J)=>{J(ie,{get position(){return v(xe)},name:"wall-stud",onpointerenter:ee=>G(ee,"wall-stud"),onpointerleave:V,children:(ee,Le)=>{var O=MA(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[o,i,s]})});var re=F(Q,2);{let te=I(()=>v(k)==="wall-stud"?h:c);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})})}Z(X,Re)});var Te=F(Ne,2);Vt(Te,17,()=>Array(f),kt,(X,Me,j)=>{const Oe=I(()=>-n/2+A+j*R/(f-1));var Re=Et(),le=K(Re);{let xe=I(()=>[t/2-o/2,i/2+y,v(Oe)]);T(le,()=>w.Mesh,(ie,J)=>{J(ie,{get position(){return v(xe)},name:"wall-stud",onpointerenter:ee=>G(ee,"wall-stud"),onpointerleave:V,children:(ee,Le)=>{var O=SA(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[o,i,s]})});var re=F(Q,2);{let te=I(()=>v(k)==="wall-stud"?h:c);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})})}Z(X,Re)});var ve=F(Te,2);T(ve,()=>w.Mesh,(X,Me)=>{Me(X,{position:[0,i+0+l*2,n/2-a/2],name:"top-plate",onpointerenter:j=>G(j,"top-plate"),onpointerleave:V,children:(j,Oe)=>{var Re=bA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[t,l,a]})});var xe=F(le,2);{let ie=I(()=>v(k)==="top-plate"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var pe=F(ve,2);T(pe,()=>w.Mesh,(X,Me)=>{Me(X,{position:[0,i+0+l*2,-n/2+a/2],name:"top-plate",onpointerenter:j=>G(j,"top-plate"),onpointerleave:V,children:(j,Oe)=>{var Re=wA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[t,l,a]})});var xe=F(le,2);{let ie=I(()=>v(k)==="top-plate"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var P=F(pe,2);T(P,()=>w.Mesh,(X,Me)=>{Me(X,{position:[-t/2+a/2,i+0+l*2,0],name:"top-plate",onpointerenter:j=>G(j,"top-plate"),onpointerleave:V,children:(j,Oe)=>{var Re=TA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[a,l,n-a*2]})});var xe=F(le,2);{let ie=I(()=>v(k)==="top-plate"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var b=F(P,2);T(b,()=>w.Mesh,(X,Me)=>{Me(X,{position:[t/2-a/2,i+0+l*2,0],name:"top-plate",onpointerenter:j=>G(j,"top-plate"),onpointerleave:V,children:(j,Oe)=>{var Re=AA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[a,l,n-a*2]})});var xe=F(le,2);{let ie=I(()=>v(k)==="top-plate"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var z=F(b,2);Vt(z,16,()=>Array(5),kt,(X,Me,j)=>{const Oe=I(()=>-n/2+1+j*(n-2)/4);var Re=Et(),le=K(Re);{let xe=I(()=>[0,i+.5+l*3,v(Oe)]);T(le,()=>w.Mesh,(ie,J)=>{J(ie,{get position(){return v(xe)},name:"ceiling-joist",onpointerenter:ee=>G(ee,"ceiling-joist"),onpointerleave:V,children:(ee,Le)=>{var O=EA(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[t-a*2,l,a]})});var re=F(Q,2);{let te=I(()=>v(k)==="ceiling-joist"?h:c);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})})}Z(X,Re)});var q=F(z,2);T(q,()=>w.Mesh,(X,Me)=>{Me(X,{position:[0,i+.5+l*3+C-S,0],name:"ridge-board",onpointerenter:j=>G(j,"ridge-board"),onpointerleave:V,children:(j,Oe)=>{var Re=CA(),le=K(Re);T(le,()=>w.BoxGeometry,(ie,J)=>{J(ie,{args:[a,l,n+1]})});var xe=F(le,2);{let ie=I(()=>v(k)==="ridge-board"?h:c);T(xe,()=>w.MeshStandardMaterial,(J,ee)=>{ee(J,{get color(){return v(ie)}})})}Z(j,Re)},$$slots:{default:!0}})});var he=F(q,2);Vt(he,16,()=>Array(5),kt,(X,Me,j)=>{const Oe=I(()=>-n/2+.5+j*n/4);var Re=IA(),le=K(Re);{let ie=I(()=>[-t/4,i+.5+l*3+C/2-S,v(Oe)]);T(le,()=>w.Mesh,(J,ee)=>{ee(J,{get position(){return v(ie)},rotation:[0,0,L],name:"roof-rafter",onpointerenter:Le=>G(Le,"roof-rafter"),onpointerleave:V,children:(Le,O)=>{var Q=PA(),re=K(Q);T(re,()=>w.BoxGeometry,(H,$)=>{$(H,{args:[E+.15,l,a]})});var te=F(re,2);{let H=I(()=>v(k)==="roof-rafter"?h:c);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})})}var xe=F(le,2);{let ie=I(()=>[t/4,i+.5+l*3+C/2-S,v(Oe)]);T(xe,()=>w.Mesh,(J,ee)=>{ee(J,{get position(){return v(ie)},rotation:[0,0,-L],name:"roof-rafter",onpointerenter:Le=>G(Le,"roof-rafter"),onpointerleave:V,children:(Le,O)=>{var Q=RA(),re=K(Q);T(re,()=>w.BoxGeometry,(H,$)=>{$(H,{args:[E+.15,l,a]})});var te=F(re,2);{let H=I(()=>v(k)==="roof-rafter"?h:c);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})})}Z(X,Re)}),Z(st,ce)},$$slots:{default:!0}})})}Z(r,de),En()}var NA=ae("<!> <!>",1),UA=ae("<!> <!>",1),FA=ae("<!> <!>",1),OA=ae("<!> <!>",1),BA=ae("<!> <!>",1),zA=ae("<!> <!>",1),kA=ae("<!> <!>",1),VA=ae("<!> <!>",1),GA=ae("<!> <!>",1),$A=ae("<!> <!>",1),HA=ae("<!> <!>",1),WA=ae("<!> <!>",1),XA=ae("<!> <!>",1),qA=ae("<!> <!>",1),YA=ae("<!> <!>",1),ZA=ae("<!> <!> <!> <!>",1),JA=ae("<!> <!>",1),KA=ae("<!> <!>",1),jA=ae("<!> <!>",1),QA=ae("<!> <!> <!>",1),eE=ae("<!> <!>",1),tE=ae("<!> <!>",1),nE=ae("<!> <!>  <!> <!> <!> <!>  <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function iE(r,e){An(e,!0);const t=12,n=10,i=8,s=.15,o=1,a=.6,l=.08,c=.04,h=.14,d=.35,u=.08,f=i+.5+s*3,p=1.5,x=.78,m="#707070",g="#cc3333",_="#3366cc",y="#ccaa33",M="#4b4b4b",C="#9a9a9a",E="#b7c1c9",L="#8f9aa3",S="#a8b0b7",A="#4fc3f7";let R=Yt(null);const U=2.2,W=.18,Y=1.5,ne=t/2+d+u,G=ne+.75+U/2,V=1.1,se=.02+W/2,de=1.55,Ae=1.25,me=1.2,we=.24,Be=.56,st=.84,$e=ne+we/2+.08;function oe(Ce){Ce.stopPropagation();const Fe=Ce?.object?.name??null;tn(Fe),xt(R,Fe,!0)}function ce(){tn(null),xt(R,null)}var ge=Et(),De=K(ge);{let Ce=I(()=>rn.get()>=5);T(De,()=>w.Group,(Fe,qe)=>{qe(Fe,{get visible(){return v(Ce)},onpointermove:oe,onpointerleave:ce,children:(ze,fe)=>{var Ee=nE(),_e=K(Ee);T(_e,()=>w.Mesh,(ie,J)=>{J(ie,{position:[2,f-a/2,0],name:"hvac-duct",children:(ee,Le)=>{var O=NA(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[t-4,a,o]})});var re=F(Q,2);{let te=I(()=>v(R)==="hvac-duct"?A:m);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var Ie=F(_e,2);T(Ie,()=>w.Mesh,(ie,J)=>{J(ie,{position:[2,f-a/2,-n/4],name:"hvac-duct",children:(ee,Le)=>{var O=UA(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[o,a,n/2-.5]})});var re=F(Q,2);{let te=I(()=>v(R)==="hvac-duct"?A:m);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var N=F(Ie,2);T(N,()=>w.Mesh,(ie,J)=>{J(ie,{position:[-t/2+.3,i/2+.5,2],name:"plumbing-hot",children:(ee,Le)=>{var O=FA(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[l,l,i,16]})});var re=F(Q,2);{let te=I(()=>v(R)==="plumbing-hot"?A:g);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var Ne=F(N,2);T(Ne,()=>w.Mesh,(ie,J)=>{J(ie,{position:[0,i+.5+s,2],rotation:[0,0,Math.PI/2],name:"plumbing-hot",children:(ee,Le)=>{var O=OA(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[l,l,t-2,16]})});var re=F(Q,2);{let te=I(()=>v(R)==="plumbing-hot"?A:g);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var Te=F(Ne,2);T(Te,()=>w.Mesh,(ie,J)=>{J(ie,{position:[-t/2+.5,i/2+.5,2],name:"plumbing-cold",children:(ee,Le)=>{var O=BA(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[l,l,i,16]})});var re=F(Q,2);{let te=I(()=>v(R)==="plumbing-cold"?A:_);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var ve=F(Te,2);T(ve,()=>w.Mesh,(ie,J)=>{J(ie,{position:[0,i+.5+s+.2,2.2],rotation:[0,0,Math.PI/2],name:"plumbing-cold",children:(ee,Le)=>{var O=zA(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[l,l,t-2,16]})});var re=F(Q,2);{let te=I(()=>v(R)==="plumbing-cold"?A:_);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var pe=F(ve,2);T(pe,()=>w.Mesh,(ie,J)=>{J(ie,{position:[0,p+.5,-n/2+.3],rotation:[0,0,Math.PI/2],name:"electrical-wire",children:(ee,Le)=>{var O=kA(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[c,c,t-1,8]})});var re=F(Q,2);{let te=I(()=>v(R)==="electrical-wire"?A:y);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var P=F(pe,2);T(P,()=>w.Mesh,(ie,J)=>{J(ie,{position:[-t/2+.3,p+.5,0],rotation:[Math.PI/2,0,0],name:"electrical-wire",children:(ee,Le)=>{var O=VA(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[c,c,n-1,8]})});var re=F(Q,2);{let te=I(()=>v(R)==="electrical-wire"?A:y);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var b=F(P,2);T(b,()=>w.Mesh,(ie,J)=>{J(ie,{position:[t/2-.3,p+.5,0],rotation:[Math.PI/2,0,0],name:"electrical-wire",children:(ee,Le)=>{var O=GA(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[c,c,n-1,8]})});var re=F(Q,2);{let te=I(()=>v(R)==="electrical-wire"?A:y);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var z=F(b,2);T(z,()=>w.Mesh,(ie,J)=>{J(ie,{position:[-3,p/2+.5,-n/2+.3],name:"electrical-wire",children:(ee,Le)=>{var O=$A(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[c,c,p,8]})});var re=F(Q,2);{let te=I(()=>v(R)==="electrical-wire"?A:y);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var q=F(z,2);T(q,()=>w.Mesh,(ie,J)=>{J(ie,{position:[3,p/2+.5,-n/2+.3],name:"electrical-wire",children:(ee,Le)=>{var O=HA(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[c,c,p,8]})});var re=F(Q,2);{let te=I(()=>v(R)==="electrical-wire"?A:y);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var he=F(q,2);{var X=ie=>{var J=ZA(),ee=K(J);T(ee,()=>w.Mesh,(re,te)=>{te(re,{position:[G,se,V],rotation:[0,Math.PI/2,0],name:"equipment-slab",children:(H,$)=>{var Se=WA(),He=K(Se);T(He,()=>w.BoxGeometry,(Ue,We)=>{We(Ue,{args:[U,W,Y]})});var Je=F(He,2);{let Ue=I(()=>v(R)==="equipment-slab"?A:C);T(Je,()=>w.MeshStandardMaterial,(We,Ze)=>{Ze(We,{get color(){return v(Ue)}})})}Z(H,Se)},$$slots:{default:!0}})});var Le=F(ee,2);T(Le,()=>w.Mesh,(re,te)=>{te(re,{position:[G,se+W/2+.525,V],rotation:[0,Math.PI/2,0],name:"ac-condenser",children:(H,$)=>{var Se=XA(),He=K(Se);T(He,()=>w.BoxGeometry,(Ue,We)=>{We(Ue,{args:[de,Ae,me]})});var Je=F(He,2);{let Ue=I(()=>v(R)==="ac-condenser"?A:E);T(Je,()=>w.MeshStandardMaterial,(We,Ze)=>{Ze(We,{get color(){return v(Ue)}})})}Z(H,Se)},$$slots:{default:!0}})});var O=F(Le,2);T(O,()=>w.Mesh,(re,te)=>{te(re,{position:[G,se+W/2+Ae+.05,V],rotation:[0,Math.PI/2,0],name:"ac-condenser",children:(H,$)=>{var Se=qA(),He=K(Se);T(He,()=>w.CylinderGeometry,(Ue,We)=>{We(Ue,{args:[.42,.42,.1,16]})});var Je=F(He,2);{let Ue=I(()=>v(R)==="ac-condenser"?A:L);T(Je,()=>w.MeshStandardMaterial,(We,Ze)=>{Ze(We,{get color(){return v(Ue)}})})}Z(H,Se)},$$slots:{default:!0}})});var Q=F(O,2);T(Q,()=>w.Mesh,(re,te)=>{te(re,{position:[$e,3.35,2.2],name:"electrical-panel",children:(H,$)=>{var Se=YA(),He=K(Se);T(He,()=>w.BoxGeometry,(Ue,We)=>{We(Ue,{args:[we,st,Be]})});var Je=F(He,2);{let Ue=I(()=>v(R)==="electrical-panel"?A:S);T(Je,()=>w.MeshStandardMaterial,(We,Ze)=>{Ze(We,{get color(){return v(Ue)}})})}Z(H,Se)},$$slots:{default:!0}})}),Z(ie,J)},Me=I(()=>rn.get()>=6);un(he,ie=>{v(Me)&&ie(X)})}var j=F(he,2);{var Oe=ie=>{var J=QA(),ee=K(J);T(ee,()=>w.Mesh,(Q,re)=>{re(Q,{position:[0,x,2.8],rotation:[0,0,Math.PI/2+.05],name:"sewer-line",children:(te,H)=>{var $=JA(),Se=K($);T(Se,()=>w.CylinderGeometry,(Je,Ue)=>{Ue(Je,{args:[h,h,t-2.2,12]})});var He=F(Se,2);{let Je=I(()=>v(R)==="sewer-line"?A:M);T(He,()=>w.MeshStandardMaterial,(Ue,We)=>{We(Ue,{get color(){return v(Je)}})})}Z(te,$)},$$slots:{default:!0}})});var Le=F(ee,2);T(Le,()=>w.Mesh,(Q,re)=>{re(Q,{position:[t/2-2.1,x+.05,-1.3],rotation:[Math.PI/2-.08,0,0],name:"sewer-line",children:(te,H)=>{var $=KA(),Se=K($);T(Se,()=>w.CylinderGeometry,(Je,Ue)=>{Ue(Je,{args:[h*.85,h*.85,4.2,12]})});var He=F(Se,2);{let Je=I(()=>v(R)==="sewer-line"?A:M);T(He,()=>w.MeshStandardMaterial,(Ue,We)=>{We(Ue,{get color(){return v(Je)}})})}Z(te,$)},$$slots:{default:!0}})});var O=F(Le,2);T(O,()=>w.Mesh,(Q,re)=>{re(Q,{position:[-t/2+2.4,x+.03,-.7],rotation:[Math.PI/2-.06,0,0],name:"sewer-line",children:(te,H)=>{var $=jA(),Se=K($);T(Se,()=>w.CylinderGeometry,(Je,Ue)=>{Ue(Je,{args:[h*.8,h*.8,3.4,12]})});var He=F(Se,2);{let Je=I(()=>v(R)==="sewer-line"?A:M);T(He,()=>w.MeshStandardMaterial,(Ue,We)=>{We(Ue,{get color(){return v(Je)}})})}Z(te,$)},$$slots:{default:!0}})}),Z(ie,J)},Re=I(()=>rn.get()<7);un(j,ie=>{v(Re)&&ie(Oe)})}var le=F(j,2);T(le,()=>w.Mesh,(ie,J)=>{J(ie,{position:[t/2-2.1,i/2+.5,-1.3],name:"sewer-vent",children:(ee,Le)=>{var O=eE(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[h*.75,h*.75,i,12]})});var re=F(Q,2);{let te=I(()=>v(R)==="sewer-vent"?A:M);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var xe=F(le,2);T(xe,()=>w.Mesh,(ie,J)=>{J(ie,{position:[t/2-2.1,i+1.5,-1.3],name:"sewer-vent",children:(ee,Le)=>{var O=tE(),Q=K(O);T(Q,()=>w.CylinderGeometry,(te,H)=>{H(te,{args:[h*.65,h*.65,2,12]})});var re=F(Q,2);{let te=I(()=>v(R)==="sewer-vent"?A:M);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})}),Z(ze,Ee)},$$slots:{default:!0}})})}Z(r,ge),En()}var rE=ae("<!> <!>",1),sE=ae("<!> <!>",1),oE=ae("<!> <!>",1),aE=ae("<!> <!>",1),lE=ae("<!> <!>",1),cE=ae("<!> <!>",1),hE=ae("<!> <!>",1),uE=ae("<!> <!>",1),dE=ae("<!> <!>",1),fE=ae("<!> <!> <!>  <!> <!> <!> <!> <!> <!>",1);function pE(r,e){An(e,!0);const t=12,n=10,i=8,s=.15,o=.35,a=.15,l=1.5,c=Math.floor(t/l)+1,h=Math.floor(n/l)+1,d=Math.floor(c/3),u=Math.floor(c*2/3),f=7,p=3,x=.25,m="#ffc0cb",g="#4fc3f7";let _=Yt(null);const y=.5+a;function M(R){return-t/2+R*t/(c-1)}function C(R){return-n/2+R*n/(h-1)}function E(R){R.stopPropagation();const U=R?.object?.name??null;tn(U),xt(_,U,!0)}function L(){tn(null),xt(_,null)}var S=Et(),A=K(S);{let R=I(()=>rn.get()>=7);T(A,()=>w.Group,(U,W)=>{W(U,{get visible(){return v(R)},onpointerenter:E,onpointerleave:L,children:(Y,ne)=>{var k=fE(),G=K(k);Vt(G,17,()=>Array(c-1),kt,($e,oe,ce)=>{const ge=I(()=>(M(ce)+M(ce+1))/2),De=I(()=>l-s);var Ce=Et(),Fe=K(Ce);{let qe=I(()=>[v(ge),i/2+y,-n/2+o/2+x/2]);T(Fe,()=>w.Mesh,(ze,fe)=>{fe(ze,{get position(){return v(qe)},name:"insulation",children:(Ee,_e)=>{var Ie=rE(),N=K(Ie);T(N,()=>w.BoxGeometry,(Te,ve)=>{ve(Te,{args:[v(De),i,x]})});var Ne=F(N,2);{let Te=I(()=>v(_)==="insulation"?g:m);T(Ne,()=>w.MeshStandardMaterial,(ve,pe)=>{pe(ve,{get color(){return v(Te)}})})}Z(Ee,Ie)},$$slots:{default:!0}})})}Z($e,Ce)});var V=F(G,2);Vt(V,17,()=>Array(h-1),kt,($e,oe,ce)=>{const ge=I(()=>(C(ce)+C(ce+1))/2),De=I(()=>l-s);var Ce=Et(),Fe=K(Ce);{let qe=I(()=>[-t/2+o/2+x/2,i/2+y,v(ge)]);T(Fe,()=>w.Mesh,(ze,fe)=>{fe(ze,{get position(){return v(qe)},name:"insulation",children:(Ee,_e)=>{var Ie=sE(),N=K(Ie);T(N,()=>w.BoxGeometry,(Te,ve)=>{ve(Te,{args:[x,i,v(De)]})});var Ne=F(N,2);{let Te=I(()=>v(_)==="insulation"?g:m);T(Ne,()=>w.MeshStandardMaterial,(ve,pe)=>{pe(ve,{get color(){return v(Te)}})})}Z(Ee,Ie)},$$slots:{default:!0}})})}Z($e,Ce)});var se=F(V,2);Vt(se,17,()=>Array(h-1),kt,($e,oe,ce)=>{const ge=I(()=>(C(ce)+C(ce+1))/2),De=I(()=>l-s);var Ce=Et(),Fe=K(Ce);{let qe=I(()=>[t/2-o/2-x/2,i/2+y,v(ge)]);T(Fe,()=>w.Mesh,(ze,fe)=>{fe(ze,{get position(){return v(qe)},name:"insulation",children:(Ee,_e)=>{var Ie=oE(),N=K(Ie);T(N,()=>w.BoxGeometry,(Te,ve)=>{ve(Te,{args:[x,i,v(De)]})});var Ne=F(N,2);{let Te=I(()=>v(_)==="insulation"?g:m);T(Ne,()=>w.MeshStandardMaterial,(ve,pe)=>{pe(ve,{get color(){return v(Te)}})})}Z(Ee,Ie)},$$slots:{default:!0}})})}Z($e,Ce)});var de=F(se,2);Vt(de,17,()=>Array(d),kt,($e,oe,ce)=>{const ge=I(()=>(M(ce)+M(ce+1))/2),De=I(()=>l-s);var Ce=Et(),Fe=K(Ce);{let qe=I(()=>[v(ge),i/2+y,n/2-o/2-x/2]);T(Fe,()=>w.Mesh,(ze,fe)=>{fe(ze,{get position(){return v(qe)},name:"insulation",children:(Ee,_e)=>{var Ie=aE(),N=K(Ie);T(N,()=>w.BoxGeometry,(Te,ve)=>{ve(Te,{args:[v(De),i,x]})});var Ne=F(N,2);{let Te=I(()=>v(_)==="insulation"?g:m);T(Ne,()=>w.MeshStandardMaterial,(ve,pe)=>{pe(ve,{get color(){return v(Te)}})})}Z(Ee,Ie)},$$slots:{default:!0}})})}Z($e,Ce)});var Ae=F(de,2);{let $e=I(()=>[M(d)+l,(i-f)/2+f+y,n/2-o/2-x/2]);T(Ae,()=>w.Mesh,(oe,ce)=>{ce(oe,{get position(){return v($e)},name:"insulation",children:(ge,De)=>{var Ce=lE(),Fe=K(Ce);T(Fe,()=>w.BoxGeometry,(ze,fe)=>{fe(ze,{args:[l*2-s,i-f,x]})});var qe=F(Fe,2);{let ze=I(()=>v(_)==="insulation"?g:m);T(qe,()=>w.MeshStandardMaterial,(fe,Ee)=>{Ee(fe,{get color(){return v(ze)}})})}Z(ge,Ce)},$$slots:{default:!0}})})}var me=F(Ae,2);Vt(me,17,()=>Array(u-d-2),kt,($e,oe,ce)=>{const ge=I(()=>d+2+ce),De=I(()=>(M(v(ge))+M(v(ge)+1))/2),Ce=I(()=>l-s);var Fe=Et(),qe=K(Fe);{let ze=I(()=>[v(De),i/2+y,n/2-o/2-x/2]);T(qe,()=>w.Mesh,(fe,Ee)=>{Ee(fe,{get position(){return v(ze)},name:"insulation",children:(_e,Ie)=>{var N=cE(),Ne=K(N);T(Ne,()=>w.BoxGeometry,(ve,pe)=>{pe(ve,{args:[v(Ce),i,x]})});var Te=F(Ne,2);{let ve=I(()=>v(_)==="insulation"?g:m);T(Te,()=>w.MeshStandardMaterial,(pe,P)=>{P(pe,{get color(){return v(ve)}})})}Z(_e,N)},$$slots:{default:!0}})})}Z($e,Fe)});var we=F(me,2);{let $e=I(()=>[M(u)+l,(i-f)/2+f+y,n/2-o/2-x/2]);T(we,()=>w.Mesh,(oe,ce)=>{ce(oe,{get position(){return v($e)},name:"insulation",children:(ge,De)=>{var Ce=hE(),Fe=K(Ce);T(Fe,()=>w.BoxGeometry,(ze,fe)=>{fe(ze,{args:[l*2-s,i-f,x]})});var qe=F(Fe,2);{let ze=I(()=>v(_)==="insulation"?g:m);T(qe,()=>w.MeshStandardMaterial,(fe,Ee)=>{Ee(fe,{get color(){return v(ze)}})})}Z(ge,Ce)},$$slots:{default:!0}})})}var Be=F(we,2);{let $e=I(()=>[M(u)+l,p/2+y,n/2-o/2-x/2]);T(Be,()=>w.Mesh,(oe,ce)=>{ce(oe,{get position(){return v($e)},name:"insulation",children:(ge,De)=>{var Ce=uE(),Fe=K(Ce);T(Fe,()=>w.BoxGeometry,(ze,fe)=>{fe(ze,{args:[l*2-s,p,x]})});var qe=F(Fe,2);{let ze=I(()=>v(_)==="insulation"?g:m);T(qe,()=>w.MeshStandardMaterial,(fe,Ee)=>{Ee(fe,{get color(){return v(ze)}})})}Z(ge,Ce)},$$slots:{default:!0}})})}var st=F(Be,2);Vt(st,17,()=>Array(c-u-3),kt,($e,oe,ce)=>{const ge=I(()=>u+2+ce),De=I(()=>(M(v(ge))+M(v(ge)+1))/2),Ce=I(()=>l-s);var Fe=Et(),qe=K(Fe);{let ze=I(()=>[v(De),i/2+y,n/2-o/2-x/2]);T(qe,()=>w.Mesh,(fe,Ee)=>{Ee(fe,{get position(){return v(ze)},name:"insulation",children:(_e,Ie)=>{var N=dE(),Ne=K(N);T(Ne,()=>w.BoxGeometry,(ve,pe)=>{pe(ve,{args:[v(Ce),i,x]})});var Te=F(Ne,2);{let ve=I(()=>v(_)==="insulation"?g:m);T(Te,()=>w.MeshStandardMaterial,(pe,P)=>{P(pe,{get color(){return v(ve)}})})}Z(_e,N)},$$slots:{default:!0}})})}Z($e,Fe)}),Z(Y,k)},$$slots:{default:!0}})})}Z(r,S),En()}var mE=ae("<!> <!>",1),gE=ae("<!> <!>",1),vE=ae("<!> <!>",1),_E=ae("<!> <!>",1),xE=ae("<!> <!>",1),yE=ae("<!> <!>",1),ME=ae("<!> <!>",1),SE=ae("<!> <!>",1),bE=ae("<!> <!>",1),wE=ae("<!> <!>",1),TE=ae("<!> <!> <!>   <!>  <!>   <!>  <!>  <!>  <!> <!>",1);function AE(r,e){An(e,!0);const t=12,n=10,i=8,s=.15,o=.35,a=.15,c=Math.floor(t/1.5)+1,h=Math.floor(c/3),d=Math.floor(c*2/3),u=7,f=.1,p="#f5f5f5",x="#4fc3f7";let m=Yt(null);const g=.5+a,_=i+g+a;function y(Y){return-t/2+Y*t/(c-1)}const M=y(h)+s/2,C=y(h+2)-s/2,E=y(d)+s/2,L=y(d+2)-s/2,S=o+f;function A(Y){Y.stopPropagation();const ne=Y?.object?.name??null;tn(ne),xt(m,ne,!0)}function R(){tn(null),xt(m,null)}var U=Et(),W=K(U);{let Y=I(()=>rn.get()>=8);T(W,()=>w.Group,(ne,k)=>{k(ne,{get visible(){return v(Y)},onpointerenter:A,onpointerleave:R,children:(G,V)=>{const se=I(()=>M+t/2),de=I(()=>-t/2+v(se)/2),Ae=I(()=>C-M),me=I(()=>i-u),we=I(()=>C),Be=I(()=>E),st=I(()=>v(Be)-v(we)),$e=I(()=>L-E),oe=I(()=>3),ce=I(()=>t/2-L),ge=I(()=>L+v(ce)/2);var De=TE(),Ce=K(De);T(Ce,()=>w.Mesh,(Te,ve)=>{ve(Te,{position:[0,i/2+g,-n/2+S],name:"drywall",children:(pe,P)=>{var b=mE(),z=K(b);T(z,()=>w.BoxGeometry,(he,X)=>{X(he,{args:[t,i,f]})});var q=F(z,2);{let he=I(()=>v(m)==="drywall"?x:p);T(q,()=>w.MeshStandardMaterial,(X,Me)=>{Me(X,{get color(){return v(he)}})})}Z(pe,b)},$$slots:{default:!0}})});var Fe=F(Ce,2);T(Fe,()=>w.Mesh,(Te,ve)=>{ve(Te,{position:[-t/2+S,i/2+g,0],name:"drywall",children:(pe,P)=>{var b=gE(),z=K(b);T(z,()=>w.BoxGeometry,(he,X)=>{X(he,{args:[f,i,n]})});var q=F(z,2);{let he=I(()=>v(m)==="drywall"?x:p);T(q,()=>w.MeshStandardMaterial,(X,Me)=>{Me(X,{get color(){return v(he)}})})}Z(pe,b)},$$slots:{default:!0}})});var qe=F(Fe,2);T(qe,()=>w.Mesh,(Te,ve)=>{ve(Te,{position:[t/2-S,i/2+g,0],name:"drywall",children:(pe,P)=>{var b=vE(),z=K(b);T(z,()=>w.BoxGeometry,(he,X)=>{X(he,{args:[f,i,n]})});var q=F(z,2);{let he=I(()=>v(m)==="drywall"?x:p);T(q,()=>w.MeshStandardMaterial,(X,Me)=>{Me(X,{get color(){return v(he)}})})}Z(pe,b)},$$slots:{default:!0}})});var ze=F(qe,2);{let Te=I(()=>[v(de),i/2+g,n/2-S]);T(ze,()=>w.Mesh,(ve,pe)=>{pe(ve,{get position(){return v(Te)},name:"drywall",children:(P,b)=>{var z=_E(),q=K(z);{let X=I(()=>[v(se),i,f]);T(q,()=>w.BoxGeometry,(Me,j)=>{j(Me,{get args(){return v(X)}})})}var he=F(q,2);{let X=I(()=>v(m)==="drywall"?x:p);T(he,()=>w.MeshStandardMaterial,(Me,j)=>{j(Me,{get color(){return v(X)}})})}Z(P,z)},$$slots:{default:!0}})})}var fe=F(ze,2);{let Te=I(()=>[(M+C)/2,u+v(me)/2+g,n/2-S]);T(fe,()=>w.Mesh,(ve,pe)=>{pe(ve,{get position(){return v(Te)},name:"drywall",children:(P,b)=>{var z=xE(),q=K(z);{let X=I(()=>[v(Ae),v(me),f]);T(q,()=>w.BoxGeometry,(Me,j)=>{j(Me,{get args(){return v(X)}})})}var he=F(q,2);{let X=I(()=>v(m)==="drywall"?x:p);T(he,()=>w.MeshStandardMaterial,(Me,j)=>{j(Me,{get color(){return v(X)}})})}Z(P,z)},$$slots:{default:!0}})})}var Ee=F(fe,2);{let Te=I(()=>[(v(we)+v(Be))/2,i/2+g,n/2-S]);T(Ee,()=>w.Mesh,(ve,pe)=>{pe(ve,{get position(){return v(Te)},name:"drywall",children:(P,b)=>{var z=yE(),q=K(z);{let X=I(()=>[v(st),i,f]);T(q,()=>w.BoxGeometry,(Me,j)=>{j(Me,{get args(){return v(X)}})})}var he=F(q,2);{let X=I(()=>v(m)==="drywall"?x:p);T(he,()=>w.MeshStandardMaterial,(Me,j)=>{j(Me,{get color(){return v(X)}})})}Z(P,z)},$$slots:{default:!0}})})}var _e=F(Ee,2);{let Te=I(()=>[(E+L)/2,u+v(me)/2+g,n/2-S]);T(_e,()=>w.Mesh,(ve,pe)=>{pe(ve,{get position(){return v(Te)},name:"drywall",children:(P,b)=>{var z=ME(),q=K(z);{let X=I(()=>[v($e),v(me),f]);T(q,()=>w.BoxGeometry,(Me,j)=>{j(Me,{get args(){return v(X)}})})}var he=F(q,2);{let X=I(()=>v(m)==="drywall"?x:p);T(he,()=>w.MeshStandardMaterial,(Me,j)=>{j(Me,{get color(){return v(X)}})})}Z(P,z)},$$slots:{default:!0}})})}var Ie=F(_e,2);{let Te=I(()=>[(E+L)/2,v(oe)/2+g,n/2-S]);T(Ie,()=>w.Mesh,(ve,pe)=>{pe(ve,{get position(){return v(Te)},name:"drywall",children:(P,b)=>{var z=SE(),q=K(z);{let X=I(()=>[v($e),v(oe),f]);T(q,()=>w.BoxGeometry,(Me,j)=>{j(Me,{get args(){return v(X)}})})}var he=F(q,2);{let X=I(()=>v(m)==="drywall"?x:p);T(he,()=>w.MeshStandardMaterial,(Me,j)=>{j(Me,{get color(){return v(X)}})})}Z(P,z)},$$slots:{default:!0}})})}var N=F(Ie,2);{let Te=I(()=>[v(ge),i/2+g,n/2-S]);T(N,()=>w.Mesh,(ve,pe)=>{pe(ve,{get position(){return v(Te)},name:"drywall",children:(P,b)=>{var z=bE(),q=K(z);{let X=I(()=>[v(ce),i,f]);T(q,()=>w.BoxGeometry,(Me,j)=>{j(Me,{get args(){return v(X)}})})}var he=F(q,2);{let X=I(()=>v(m)==="drywall"?x:p);T(he,()=>w.MeshStandardMaterial,(Me,j)=>{j(Me,{get color(){return v(X)}})})}Z(P,z)},$$slots:{default:!0}})})}var Ne=F(N,2);T(Ne,()=>w.Mesh,(Te,ve)=>{ve(Te,{position:[0,_-f/2,0],name:"drywall",children:(pe,P)=>{var b=wE(),z=K(b);T(z,()=>w.BoxGeometry,(he,X)=>{X(he,{args:[t-o*2,f,n-o*2]})});var q=F(z,2);{let he=I(()=>v(m)==="drywall"?x:p);T(q,()=>w.MeshStandardMaterial,(X,Me)=>{Me(X,{get color(){return v(he)}})})}Z(pe,b)},$$slots:{default:!0}})}),Z(G,De)},$$slots:{default:!0}})})}Z(r,U),En()}var EE=ae("<!> <!>",1),CE=ae("<!> <!>",1),PE=ae("<!> <!>",1),RE=ae("<!> <!>",1),IE=ae("<!> <!>",1),DE=ae("<!> <!>",1),LE=ae("<!> <!>",1),NE=ae("<!> <!>",1),UE=ae("<!> <!>",1),FE=ae("<!> <!>",1),OE=ae("<!> <!>",1),BE=ae("<!> <!>",1),zE=ae("<!> <!> <!> <!> <!>   <!>  <!>  <!>  <!> <!>  <!> <!>",1),kE=ae("<!> <!>",1),VE=ae("<!> <!>",1),GE=ae("<!> <!>",1),$E=ae("<!> <!>",1),HE=ae("<!> <!>",1),WE=ae("<!> <!>",1),XE=ae("<!> <!>",1),qE=ae("<!> <!>",1),YE=ae("<!> <!>",1),ZE=ae("<!> <!>",1),JE=ae("<!> <!>",1),KE=ae("<!> <!>",1),jE=ae("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),QE=ae("<!> <!>",1),e2=ae("<!> <!>",1),t2=ae("<!> <!>",1),n2=ae("<!> <!>",1),i2=ae("<!> <!>",1),r2=ae("<!> <!>",1),s2=ae("<!> <!>",1),o2=ae("<!> <!>",1),a2=ae("<!> <!>   <!> <!>   <!> <!> <!> <!>",1),l2=ae("<!> <!> <!>",1);function c2(r,e){An(e,!0);const t=12,n=10,i=8,s=.15,o=.35,a=.15,c=Math.floor(t/1.5)+1,h=Math.floor(c/3),d=Math.floor(c*2/3),u=7,p=t/2*(4/12),x=.5,m=.12,g=.3,_=.08,y=_,M=0,C=o*2+_,E="#8b7355",L="#3a3a3a",S="#5b2d0c",A="#c9c9c9",R="#d9d9d9",U="#b7d8eb",W="#6f757d",Y="#7a4e2f",ne="#3f4348",k="#4fc3f7";let G=Yt(null);const V=.5+a,se=i+V+a,de=_/2;function Ae(P){return-t/2+P*t/(c-1)}const me=Ae(h)+s/2,we=Ae(h+2)-s/2,Be=Ae(d)+s/2,st=Ae(d+2)-s/2,$e=3,oe=Math.atan2(p,t/2),ce=t/2+x,ge=n+x*2,De=Math.sqrt(ce**2+p**2),Ce=.12;function Fe(P){const b=Math.min(Math.abs(P)/ce,1);return se+p*(1-b)}const qe=new ji().moveTo(-t/2,0).lineTo(0,p).lineTo(t/2,0).lineTo(-t/2,0);function ze(P){P.stopPropagation();const b=P?.object?.name??null;tn(b),xt(G,b,!0)}function fe(){tn(null),xt(G,null)}var Ee=l2(),_e=K(Ee);{let P=I(()=>rn.get()>=8);T(_e,()=>w.Group,(b,z)=>{z(b,{get visible(){return v(P)},onpointermove:ze,onpointerleave:fe,children:(q,he)=>{const X=I(()=>me+t/2),Me=I(()=>-t/2+v(X)/2),j=I(()=>we-me),Oe=I(()=>i-u),Re=I(()=>Be-we),le=I(()=>st-Be),xe=I(()=>t/2-st);var ie=zE(),J=K(ie);T(J,()=>w.Mesh,(Ue,We)=>{We(Ue,{position:[0,i/2+V,-n/2-de],name:"siding",children:(Ze,Xe)=>{var Ge=EE(),Ve=K(Ge);T(Ve,()=>w.BoxGeometry,(ct,Ye)=>{Ye(ct,{args:[t,i,_]})});var Ke=F(Ve,2);{let ct=I(()=>v(G)==="siding"?k:E);T(Ke,()=>w.MeshStandardMaterial,(Ye,et)=>{et(Ye,{get color(){return v(ct)}})})}Z(Ze,Ge)},$$slots:{default:!0}})});var ee=F(J,2);T(ee,()=>w.Mesh,(Ue,We)=>{We(Ue,{position:[-t/2-de,i/2+V,0],name:"siding",children:(Ze,Xe)=>{var Ge=CE(),Ve=K(Ge);T(Ve,()=>w.BoxGeometry,(ct,Ye)=>{Ye(ct,{args:[_,i,n+y*2]})});var Ke=F(Ve,2);{let ct=I(()=>v(G)==="siding"?k:E);T(Ke,()=>w.MeshStandardMaterial,(Ye,et)=>{et(Ye,{get color(){return v(ct)}})})}Z(Ze,Ge)},$$slots:{default:!0}})});var Le=F(ee,2);T(Le,()=>w.Mesh,(Ue,We)=>{We(Ue,{position:[t/2+de,i/2+V,0],name:"siding",children:(Ze,Xe)=>{var Ge=PE(),Ve=K(Ge);T(Ve,()=>w.BoxGeometry,(ct,Ye)=>{Ye(ct,{args:[_,i,n+y*2]})});var Ke=F(Ve,2);{let ct=I(()=>v(G)==="siding"?k:E);T(Ke,()=>w.MeshStandardMaterial,(Ye,et)=>{et(Ye,{get color(){return v(ct)}})})}Z(Ze,Ge)},$$slots:{default:!0}})});var O=F(Le,2);T(O,()=>w.Mesh,(Ue,We)=>{We(Ue,{position:[t/2+de,i/2+V,n/2+de-C/2],name:"siding",children:(Ze,Xe)=>{var Ge=RE(),Ve=K(Ge);T(Ve,()=>w.BoxGeometry,(ct,Ye)=>{Ye(ct,{args:[_,i,C]})});var Ke=F(Ve,2);{let ct=I(()=>v(G)==="siding"?k:E);T(Ke,()=>w.MeshStandardMaterial,(Ye,et)=>{et(Ye,{get color(){return v(ct)}})})}Z(Ze,Ge)},$$slots:{default:!0}})});var Q=F(O,2);T(Q,()=>w.Mesh,(Ue,We)=>{We(Ue,{position:[-t/2-de,i/2+V,n/2+de-C/2],name:"siding",children:(Ze,Xe)=>{var Ge=IE(),Ve=K(Ge);T(Ve,()=>w.BoxGeometry,(ct,Ye)=>{Ye(ct,{args:[_,i,C]})});var Ke=F(Ve,2);{let ct=I(()=>v(G)==="siding"?k:E);T(Ke,()=>w.MeshStandardMaterial,(Ye,et)=>{et(Ye,{get color(){return v(ct)}})})}Z(Ze,Ge)},$$slots:{default:!0}})});var re=F(Q,2);{let Ue=I(()=>[v(Me)-M/2,i/2+V,n/2+de]);T(re,()=>w.Mesh,(We,Ze)=>{Ze(We,{get position(){return v(Ue)},name:"siding",children:(Xe,Ge)=>{var Ve=DE(),Ke=K(Ve);{let Ye=I(()=>[v(X)+M,i,_]);T(Ke,()=>w.BoxGeometry,(et,gt)=>{gt(et,{get args(){return v(Ye)}})})}var ct=F(Ke,2);{let Ye=I(()=>v(G)==="siding"?k:E);T(ct,()=>w.MeshStandardMaterial,(et,gt)=>{gt(et,{get color(){return v(Ye)}})})}Z(Xe,Ve)},$$slots:{default:!0}})})}var te=F(re,2);{let Ue=I(()=>[(me+we)/2,u+v(Oe)/2+V,n/2+de]);T(te,()=>w.Mesh,(We,Ze)=>{Ze(We,{get position(){return v(Ue)},name:"siding",children:(Xe,Ge)=>{var Ve=LE(),Ke=K(Ve);{let Ye=I(()=>[v(j),v(Oe),_]);T(Ke,()=>w.BoxGeometry,(et,gt)=>{gt(et,{get args(){return v(Ye)}})})}var ct=F(Ke,2);{let Ye=I(()=>v(G)==="siding"?k:E);T(ct,()=>w.MeshStandardMaterial,(et,gt)=>{gt(et,{get color(){return v(Ye)}})})}Z(Xe,Ve)},$$slots:{default:!0}})})}var H=F(te,2);{let Ue=I(()=>[(we+Be)/2,i/2+V,n/2+de]);T(H,()=>w.Mesh,(We,Ze)=>{Ze(We,{get position(){return v(Ue)},name:"siding",children:(Xe,Ge)=>{var Ve=NE(),Ke=K(Ve);{let Ye=I(()=>[v(Re),i,_]);T(Ke,()=>w.BoxGeometry,(et,gt)=>{gt(et,{get args(){return v(Ye)}})})}var ct=F(Ke,2);{let Ye=I(()=>v(G)==="siding"?k:E);T(ct,()=>w.MeshStandardMaterial,(et,gt)=>{gt(et,{get color(){return v(Ye)}})})}Z(Xe,Ve)},$$slots:{default:!0}})})}var $=F(H,2);{let Ue=I(()=>[(Be+st)/2,u+v(Oe)/2+V,n/2+de]);T($,()=>w.Mesh,(We,Ze)=>{Ze(We,{get position(){return v(Ue)},name:"siding",children:(Xe,Ge)=>{var Ve=UE(),Ke=K(Ve);{let Ye=I(()=>[v(le),v(Oe),_]);T(Ke,()=>w.BoxGeometry,(et,gt)=>{gt(et,{get args(){return v(Ye)}})})}var ct=F(Ke,2);{let Ye=I(()=>v(G)==="siding"?k:E);T(ct,()=>w.MeshStandardMaterial,(et,gt)=>{gt(et,{get color(){return v(Ye)}})})}Z(Xe,Ve)},$$slots:{default:!0}})})}var Se=F($,2);{let Ue=I(()=>[(Be+st)/2,$e/2+V,n/2+de]);T(Se,()=>w.Mesh,(We,Ze)=>{Ze(We,{get position(){return v(Ue)},name:"siding",children:(Xe,Ge)=>{var Ve=FE(),Ke=K(Ve);{let Ye=I(()=>[v(le),$e,_]);T(Ke,()=>w.BoxGeometry,(et,gt)=>{gt(et,{get args(){return v(Ye)}})})}var ct=F(Ke,2);{let Ye=I(()=>v(G)==="siding"?k:E);T(ct,()=>w.MeshStandardMaterial,(et,gt)=>{gt(et,{get color(){return v(Ye)}})})}Z(Xe,Ve)},$$slots:{default:!0}})})}var He=F(Se,2);{let Ue=I(()=>[st+v(xe)/2+M/2,i/2+V,n/2+de]);T(He,()=>w.Mesh,(We,Ze)=>{Ze(We,{get position(){return v(Ue)},name:"siding",children:(Xe,Ge)=>{var Ve=OE(),Ke=K(Ve);{let Ye=I(()=>[v(xe)+M,i,_]);T(Ke,()=>w.BoxGeometry,(et,gt)=>{gt(et,{get args(){return v(Ye)}})})}var ct=F(Ke,2);{let Ye=I(()=>v(G)==="siding"?k:E);T(ct,()=>w.MeshStandardMaterial,(et,gt)=>{gt(et,{get color(){return v(Ye)}})})}Z(Xe,Ve)},$$slots:{default:!0}})})}var Je=F(He,2);T(Je,()=>w.Mesh,(Ue,We)=>{We(Ue,{position:[0,i+V,n/2+de-_/2],name:"siding",children:(Ze,Xe)=>{var Ge=BE(),Ve=K(Ge);{let ct=I(()=>[qe,{depth:_,bevelEnabled:!1}]);T(Ve,()=>w.ExtrudeGeometry,(Ye,et)=>{et(Ye,{get args(){return v(ct)}})})}var Ke=F(Ve,2);{let ct=I(()=>v(G)==="siding"?k:E);T(Ke,()=>w.MeshStandardMaterial,(Ye,et)=>{et(Ye,{get color(){return v(ct)}})})}Z(Ze,Ge)},$$slots:{default:!0}})}),Z(q,ie)},$$slots:{default:!0}})})}var Ie=F(_e,2);{var N=P=>{var b=Et(),z=K(b);T(z,()=>w.Group,(q,he)=>{he(q,{onpointermove:ze,onpointerleave:fe,children:(X,Me)=>{const j=I(()=>n/2+de-_/2),Oe=I(()=>we-me),Re=I(()=>u-.2),le=I(()=>st-Be),xe=I(()=>u-$e),ie=I(()=>.12),J=I(()=>.1),ee=I(()=>.01);var Le=jE(),O=K(Le);{let Xe=I(()=>[(me+we)/2,v(Re)/2+V,v(j)]);T(O,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"door",children:(Ke,ct)=>{var Ye=kE(),et=K(Ye);{let vt=I(()=>[v(Oe)-.12,v(Re),v(ie)]);T(et,()=>w.BoxGeometry,(pt,Tt)=>{Tt(pt,{get args(){return v(vt)}})})}var gt=F(et,2);{let vt=I(()=>v(G)==="door"?k:S);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var Q=F(O,2);{let Xe=I(()=>[we-.22,V+v(Re)*.52,v(j)+v(ie)/2+.04]);T(Q,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"door-knob",children:(Ke,ct)=>{var Ye=VE(),et=K(Ye);T(et,()=>w.SphereGeometry,(vt,pt)=>{pt(vt,{args:[.11,14,12]})});var gt=F(et,2);{let vt=I(()=>v(G)==="door-knob"?k:A);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var re=F(Q,2);{let Xe=I(()=>[(me+we)/2,v(Re)+V+.05,v(j)]);T(re,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-frame",children:(Ke,ct)=>{var Ye=GE(),et=K(Ye);{let vt=I(()=>[v(Oe),.1,v(ie)]);T(et,()=>w.BoxGeometry,(pt,Tt)=>{Tt(pt,{get args(){return v(vt)}})})}var gt=F(et,2);{let vt=I(()=>v(G)==="window-frame"?k:R);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var te=F(re,2);{let Xe=I(()=>[me+.05,v(Re)/2+V,v(j)]);T(te,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-frame",children:(Ke,ct)=>{var Ye=$E(),et=K(Ye);T(et,()=>w.BoxGeometry,(vt,pt)=>{pt(vt,{args:[.1,v(Re),v(ie)]})});var gt=F(et,2);{let vt=I(()=>v(G)==="window-frame"?k:R);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var H=F(te,2);{let Xe=I(()=>[we-.05,v(Re)/2+V,v(j)]);T(H,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-frame",children:(Ke,ct)=>{var Ye=HE(),et=K(Ye);T(et,()=>w.BoxGeometry,(vt,pt)=>{pt(vt,{args:[.1,v(Re),v(ie)]})});var gt=F(et,2);{let vt=I(()=>v(G)==="window-frame"?k:R);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var $=F(H,2);{let Xe=I(()=>[(Be+st)/2,u+V-.05,v(j)]);T($,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-frame",children:(Ke,ct)=>{var Ye=WE(),et=K(Ye);{let vt=I(()=>[v(le),.1,v(J)]);T(et,()=>w.BoxGeometry,(pt,Tt)=>{Tt(pt,{get args(){return v(vt)}})})}var gt=F(et,2);{let vt=I(()=>v(G)==="window-frame"?k:R);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var Se=F($,2);{let Xe=I(()=>[(Be+st)/2,$e+V+.05,v(j)]);T(Se,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-frame",children:(Ke,ct)=>{var Ye=XE(),et=K(Ye);{let vt=I(()=>[v(le),.1,v(J)]);T(et,()=>w.BoxGeometry,(pt,Tt)=>{Tt(pt,{get args(){return v(vt)}})})}var gt=F(et,2);{let vt=I(()=>v(G)==="window-frame"?k:R);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var He=F(Se,2);{let Xe=I(()=>[Be+.05,(u+$e)/2+V,v(j)]);T(He,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-frame",children:(Ke,ct)=>{var Ye=qE(),et=K(Ye);T(et,()=>w.BoxGeometry,(vt,pt)=>{pt(vt,{args:[.1,v(xe),v(J)]})});var gt=F(et,2);{let vt=I(()=>v(G)==="window-frame"?k:R);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var Je=F(He,2);{let Xe=I(()=>[st-.05,(u+$e)/2+V,v(j)]);T(Je,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-frame",children:(Ke,ct)=>{var Ye=YE(),et=K(Ye);T(et,()=>w.BoxGeometry,(vt,pt)=>{pt(vt,{args:[.1,v(xe),v(J)]})});var gt=F(et,2);{let vt=I(()=>v(G)==="window-frame"?k:R);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var Ue=F(Je,2);{let Xe=I(()=>[(Be+st)/2,(u+$e)/2+V,v(j)]);T(Ue,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-frame",children:(Ke,ct)=>{var Ye=ZE(),et=K(Ye);T(et,()=>w.BoxGeometry,(vt,pt)=>{pt(vt,{args:[.06,v(xe),v(J)]})});var gt=F(et,2);{let vt=I(()=>v(G)==="window-frame"?k:R);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)}})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var We=F(Ue,2);{let Xe=I(()=>[(Be+st)/2-v(le)/4,(u+$e)/2+V,v(j)-v(ee)]);T(We,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-glass",children:(Ke,ct)=>{var Ye=JE(),et=K(Ye);{let vt=I(()=>[v(le)/2-.08,v(xe)-.12,.02]);T(et,()=>w.BoxGeometry,(pt,Tt)=>{Tt(pt,{get args(){return v(vt)}})})}var gt=F(et,2);{let vt=I(()=>v(G)==="window-glass"?k:U);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)},transparent:!0,opacity:.65})})}Z(Ke,Ye)},$$slots:{default:!0}})})}var Ze=F(We,2);{let Xe=I(()=>[(Be+st)/2+v(le)/4,(u+$e)/2+V,v(j)-v(ee)]);T(Ze,()=>w.Mesh,(Ge,Ve)=>{Ve(Ge,{get position(){return v(Xe)},name:"window-glass",children:(Ke,ct)=>{var Ye=KE(),et=K(Ye);{let vt=I(()=>[v(le)/2-.08,v(xe)-.12,.02]);T(et,()=>w.BoxGeometry,(pt,Tt)=>{Tt(pt,{get args(){return v(vt)}})})}var gt=F(et,2);{let vt=I(()=>v(G)==="window-glass"?k:U);T(gt,()=>w.MeshStandardMaterial,(pt,Tt)=>{Tt(pt,{get color(){return v(vt)},transparent:!0,opacity:.65})})}Z(Ke,Ye)},$$slots:{default:!0}})})}Z(X,Le)},$$slots:{default:!0}})}),Z(P,b)},Ne=I(()=>rn.get()>=11);un(Ie,P=>{v(Ne)&&P(N)})}var Te=F(Ie,2);{var ve=P=>{var b=Et(),z=K(b);T(z,()=>w.Group,(q,he)=>{he(q,{onpointermove:ze,onpointerleave:fe,children:(X,Me)=>{const j=I(()=>2.4),Oe=I(()=>1.3),Re=I(()=>Fe(v(j))+Ce),le=I(()=>-2.3),xe=I(()=>-1.8),ie=I(()=>Fe(v(le))+Ce);var J=a2(),ee=K(J);T(ee,()=>w.Mesh,(Se,He)=>{He(Se,{position:[-ce/2,se+p/2,0],rotation:[0,0,oe],name:"roofing",children:(Je,Ue)=>{var We=QE(),Ze=K(We);T(Ze,()=>w.BoxGeometry,(Ge,Ve)=>{Ve(Ge,{args:[De,.15,ge]})});var Xe=F(Ze,2);{let Ge=I(()=>v(G)==="roofing"?k:L);T(Xe,()=>w.MeshStandardMaterial,(Ve,Ke)=>{Ke(Ve,{get color(){return v(Ge)}})})}Z(Je,We)},$$slots:{default:!0}})});var Le=F(ee,2);T(Le,()=>w.Mesh,(Se,He)=>{He(Se,{position:[ce/2,se+p/2,0],rotation:[0,0,-oe],name:"roofing",children:(Je,Ue)=>{var We=e2(),Ze=K(We);T(Ze,()=>w.BoxGeometry,(Ge,Ve)=>{Ve(Ge,{args:[De,.15,ge]})});var Xe=F(Ze,2);{let Ge=I(()=>v(G)==="roofing"?k:L);T(Xe,()=>w.MeshStandardMaterial,(Ve,Ke)=>{Ke(Ve,{get color(){return v(Ge)}})})}Z(Je,We)},$$slots:{default:!0}})});var O=F(Le,2);{let Se=I(()=>[v(j),v(Re)+.55,v(Oe)]);T(O,()=>w.Mesh,(He,Je)=>{Je(He,{get position(){return v(Se)},name:"roof-vent",children:(Ue,We)=>{var Ze=t2(),Xe=K(Ze);T(Xe,()=>w.CylinderGeometry,(Ve,Ke)=>{Ke(Ve,{args:[.18,.18,1.1,12]})});var Ge=F(Xe,2);{let Ve=I(()=>v(G)==="roof-vent"?k:W);T(Ge,()=>w.MeshStandardMaterial,(Ke,ct)=>{ct(Ke,{get color(){return v(Ve)}})})}Z(Ue,Ze)},$$slots:{default:!0}})})}var Q=F(O,2);{let Se=I(()=>[v(j),v(Re)+1.22,v(Oe)]);T(Q,()=>w.Mesh,(He,Je)=>{Je(He,{get position(){return v(Se)},name:"roof-vent",children:(Ue,We)=>{var Ze=n2(),Xe=K(Ze);T(Xe,()=>w.ConeGeometry,(Ve,Ke)=>{Ke(Ve,{args:[.34,.24,12]})});var Ge=F(Xe,2);{let Ve=I(()=>v(G)==="roof-vent"?k:W);T(Ge,()=>w.MeshStandardMaterial,(Ke,ct)=>{ct(Ke,{get color(){return v(Ve)}})})}Z(Ue,Ze)},$$slots:{default:!0}})})}var re=F(Q,2);{let Se=I(()=>[v(le),v(ie)+1.35,v(xe)]);T(re,()=>w.Mesh,(He,Je)=>{Je(He,{get position(){return v(Se)},name:"chimney",children:(Ue,We)=>{var Ze=i2(),Xe=K(Ze);T(Xe,()=>w.BoxGeometry,(Ve,Ke)=>{Ke(Ve,{args:[1,2.7,1]})});var Ge=F(Xe,2);{let Ve=I(()=>v(G)==="chimney"?k:Y);T(Ge,()=>w.MeshStandardMaterial,(Ke,ct)=>{ct(Ke,{get color(){return v(Ve)}})})}Z(Ue,Ze)},$$slots:{default:!0}})})}var te=F(re,2);{let Se=I(()=>[v(le),v(ie)+2.78,v(xe)]);T(te,()=>w.Mesh,(He,Je)=>{Je(He,{get position(){return v(Se)},name:"chimney",children:(Ue,We)=>{var Ze=r2(),Xe=K(Ze);T(Xe,()=>w.BoxGeometry,(Ve,Ke)=>{Ke(Ve,{args:[1.2,.16,1.2]})});var Ge=F(Xe,2);{let Ve=I(()=>v(G)==="chimney"?k:ne);T(Ge,()=>w.MeshStandardMaterial,(Ke,ct)=>{ct(Ke,{get color(){return v(Ve)}})})}Z(Ue,Ze)},$$slots:{default:!0}})})}var H=F(te,2);T(H,()=>w.Mesh,(Se,He)=>{He(Se,{position:[-t/2-x,se-g/2,0],name:"fascia",children:(Je,Ue)=>{var We=s2(),Ze=K(We);T(Ze,()=>w.BoxGeometry,(Ge,Ve)=>{Ve(Ge,{args:[m,g,ge]})});var Xe=F(Ze,2);{let Ge=I(()=>v(G)==="fascia"?k:"#5a4a3a");T(Xe,()=>w.MeshStandardMaterial,(Ve,Ke)=>{Ke(Ve,{get color(){return v(Ge)}})})}Z(Je,We)},$$slots:{default:!0}})});var $=F(H,2);T($,()=>w.Mesh,(Se,He)=>{He(Se,{position:[t/2+x,se-g/2,0],name:"fascia",children:(Je,Ue)=>{var We=o2(),Ze=K(We);T(Ze,()=>w.BoxGeometry,(Ge,Ve)=>{Ve(Ge,{args:[m,g,ge]})});var Xe=F(Ze,2);{let Ge=I(()=>v(G)==="fascia"?k:"#5a4a3a");T(Xe,()=>w.MeshStandardMaterial,(Ve,Ke)=>{Ke(Ve,{get color(){return v(Ge)}})})}Z(Je,We)},$$slots:{default:!0}})}),Z(X,J)},$$slots:{default:!0}})}),Z(P,b)},pe=I(()=>rn.get()>=9);un(Te,P=>{v(pe)&&P(ve)})}Z(r,Ee),En()}var h2=ae("<!> <!>",1),u2=ae("<!> <!>",1),d2=ae("<!> <!>",1),f2=ae("<!> <!>",1),p2=ae("<!> <!>",1),m2=ae("<!> <!>",1),g2=ae("<!> <!>",1),v2=ae("<!> <!> <!> <!> <!> <!>",1),_2=ae("<!> <!>",1);function x2(r,e){An(e,!0);const t=12,n=10,i=.35,s="#b8945e",o="#6b4423",a="#ffffff",l="#4fc3f7";let c=Yt(null);const h=.55,d=.05;function u(g){g.stopPropagation();const _=g?.object?.name??null;tn(_),xt(c,_,!0)}function f(){tn(null),xt(c,null)}var p=_2(),x=K(p);{let g=I(()=>rn.get()>=10);T(x,()=>w.Group,(_,y)=>{y(_,{get visible(){return v(g)},onpointerenter:u,onpointerleave:f,children:(M,C)=>{var E=Et(),L=K(E);T(L,()=>w.Mesh,(S,A)=>{A(S,{position:[0,h+d/2,0],name:"flooring",children:(R,U)=>{var W=h2(),Y=K(W);T(Y,()=>w.BoxGeometry,(k,G)=>{G(k,{args:[t-i*2,d,n-i*2]})});var ne=F(Y,2);{let k=I(()=>v(c)==="flooring"?l:s);T(ne,()=>w.MeshStandardMaterial,(G,V)=>{V(G,{get color(){return v(k)}})})}Z(R,W)},$$slots:{default:!0}})}),Z(M,E)},$$slots:{default:!0}})})}var m=F(x,2);{let g=I(()=>rn.get()>=10);T(m,()=>w.Group,(_,y)=>{y(_,{get visible(){return v(g)},onpointerenter:u,onpointerleave:f,children:(M,C)=>{var E=v2(),L=K(E);T(L,()=>w.Mesh,(Y,ne)=>{ne(Y,{position:[t/2-1.5,.75+h,-n/2+1.5],name:"bathtub",children:(k,G)=>{var V=u2(),se=K(V);T(se,()=>w.BoxGeometry,(Ae,me)=>{me(Ae,{args:[2.5,1.5,2.5]})});var de=F(se,2);{let Ae=I(()=>v(c)==="bathtub"?l:a);T(de,()=>w.MeshStandardMaterial,(me,we)=>{we(me,{get color(){return v(Ae)}})})}Z(k,V)},$$slots:{default:!0}})});var S=F(L,2);T(S,()=>w.Mesh,(Y,ne)=>{ne(Y,{position:[t/2-.3,2.5+h,-n/2+1.5],name:"tub-surround",children:(k,G)=>{var V=d2(),se=K(V);T(se,()=>w.BoxGeometry,(Ae,me)=>{me(Ae,{args:[.15,4,2.5]})});var de=F(se,2);{let Ae=I(()=>v(c)==="tub-surround"?l:"#e8e8e8");T(de,()=>w.MeshStandardMaterial,(me,we)=>{we(me,{get color(){return v(Ae)}})})}Z(k,V)},$$slots:{default:!0}})});var A=F(S,2);T(A,()=>w.Mesh,(Y,ne)=>{ne(Y,{position:[t/2-1.5,1.5+h,-n/2+4],name:"vanity",children:(k,G)=>{var V=f2(),se=K(V);T(se,()=>w.BoxGeometry,(Ae,me)=>{me(Ae,{args:[2,3,1]})});var de=F(se,2);{let Ae=I(()=>v(c)==="vanity"?l:o);T(de,()=>w.MeshStandardMaterial,(me,we)=>{we(me,{get color(){return v(Ae)}})})}Z(k,V)},$$slots:{default:!0}})});var R=F(A,2);T(R,()=>w.Mesh,(Y,ne)=>{ne(Y,{position:[t/2-1.5,3+h+.05,-n/2+4],name:"vanity-top",children:(k,G)=>{var V=p2(),se=K(V);T(se,()=>w.BoxGeometry,(Ae,me)=>{me(Ae,{args:[2.1,.1,1.1]})});var de=F(se,2);{let Ae=I(()=>v(c)==="vanity-top"?l:a);T(de,()=>w.MeshStandardMaterial,(me,we)=>{we(me,{get color(){return v(Ae)}})})}Z(k,V)},$$slots:{default:!0}})});var U=F(R,2);T(U,()=>w.Mesh,(Y,ne)=>{ne(Y,{position:[t/2-1.5,.75+h,-n/2+5.5],name:"toilet",children:(k,G)=>{var V=m2(),se=K(V);T(se,()=>w.BoxGeometry,(Ae,me)=>{me(Ae,{args:[.8,1.5,1]})});var de=F(se,2);{let Ae=I(()=>v(c)==="toilet"?l:a);T(de,()=>w.MeshStandardMaterial,(me,we)=>{we(me,{get color(){return v(Ae)}})})}Z(k,V)},$$slots:{default:!0}})});var W=F(U,2);T(W,()=>w.Mesh,(Y,ne)=>{ne(Y,{position:[t/2-1.5,1.2+h,-n/2+5.8],name:"toilet-tank",children:(k,G)=>{var V=g2(),se=K(V);T(se,()=>w.BoxGeometry,(Ae,me)=>{me(Ae,{args:[.6,1.2,.4]})});var de=F(se,2);{let Ae=I(()=>v(c)==="toilet-tank"?l:a);T(de,()=>w.MeshStandardMaterial,(me,we)=>{we(me,{get color(){return v(Ae)}})})}Z(k,V)},$$slots:{default:!0}})}),Z(M,E)},$$slots:{default:!0}})})}Z(r,p),En()}var y2=ae("<!> <!>",1),M2=ae("<!> <!>",1),S2=ae("<!> <!>",1),b2=ae("<!> <!>",1),w2=ae("<!> <!>",1),T2=ae("<!> <!>",1),A2=ae("<!> <!>",1),E2=ae("<!> <!>",1),C2=ae("<!> <!>",1),P2=ae("<!> <!> <!>  <!> <!> <!>",1),R2=ae("<!> <!>",1),I2=ae("<!> <!>",1),D2=ae("<!> <!>",1),L2=ae("<!> <!>",1),N2=ae("<!> <!> <!>",1),U2=ae("<!> <!>",1),F2=ae("<!> <!>",1),O2=ae("<!> <!>",1),B2=ae("<!> <!> <!>",1),z2=ae("<!> <!>",1),k2=ae("<!> <!>",1),V2=ae("<!> <!>",1),G2=ae("<!> <!>",1),$2=ae("<!> <!>",1),H2=ae("<!> <!>",1),W2=ae("<!> <!>",1),X2=ae("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1),q2=ae("<!> <!> <!> <!>",1);function Y2(r,e){An(e,!0);const t=12,n=10,i=.15,o=Math.floor(t/1.5)+1,a=Math.floor(o/3);function l(ve){return-t/2+ve*t/(o-1)}const c=l(a)+i/2,h=l(a+2)-i/2,d=(c+h)/2,u="#555555",f="#3d7a3d",p="#5a4a3a",x="#2d5a2d",m="#b99d78",g="#4fc3f7";let _=Yt(null);const y=6,M=10.4,C=30,E=30,L=.9,S=1.7,A=.12,R=1.2,U=.09,W=y+1.2,Y=Math.max(A,U)/2,ne=-C/2+L+Y,k=C/2-L-Y,G=.48,V=.45,se=E/2-L-Y+V,de=-E/2+L+Y+V,Ae=ne+G,me=k+G,we=(Ae+me)/2,Be=(se+de)/2,st=me-Ae,$e=se-de,oe=d-W/2,ce=d+W/2,ge=oe+G,De=ce+G,Ce=[[Ae,se],[me,se],[Ae,de],[me,de],[ge,se],[De,se],[Ae,Be],[me,Be],[we,de]];function Fe(ve,pe){return[(ve[0]+pe[0])/2,(ve[1]+pe[1])/2]}const qe=[Fe([Ae,se],[ge,se]),Fe([De,se],[me,se]),Fe([Ae,se],[Ae,Be]),Fe([Ae,Be],[Ae,de]),Fe([me,se],[me,Be]),Fe([me,Be],[me,de]),Fe([Ae,de],[we,de]),Fe([we,de],[me,de])],ze=[...Ce,...qe];function fe(ve){ve.stopPropagation();const pe=ve?.object?.name??null;tn(pe),xt(_,pe,!0)}function Ee(){tn(null),xt(_,null)}var _e=q2(),Ie=K(_e);{let ve=I(()=>rn.get()>=10);T(Ie,()=>w.Group,(pe,P)=>{P(pe,{get visible(){return v(ve)},onpointermove:fe,onpointerleave:Ee,children:(b,z)=>{var q=S2(),he=K(q);{let Me=I(()=>[d,.02,n/2+M/2]);T(he,()=>w.Mesh,(j,Oe)=>{Oe(j,{get position(){return v(Me)},name:"driveway",children:(Re,le)=>{var xe=y2(),ie=K(xe);T(ie,()=>w.BoxGeometry,(ee,Le)=>{Le(ee,{args:[y,.08,M]})});var J=F(ie,2);{let ee=I(()=>v(_)==="driveway"?g:u);T(J,()=>w.MeshStandardMaterial,(Le,O)=>{O(Le,{get color(){return v(ee)}})})}Z(Re,xe)},$$slots:{default:!0}})})}var X=F(he,2);{let Me=I(()=>[d,.02,n/2+1.5]);T(X,()=>w.Mesh,(j,Oe)=>{Oe(j,{get position(){return v(Me)},name:"walkway",children:(Re,le)=>{var xe=M2(),ie=K(xe);T(ie,()=>w.BoxGeometry,(ee,Le)=>{Le(ee,{args:[1.5,.06,3]})});var J=F(ie,2);{let ee=I(()=>v(_)==="walkway"?g:u);T(J,()=>w.MeshStandardMaterial,(Le,O)=>{O(Le,{get color(){return v(ee)}})})}Z(Re,xe)},$$slots:{default:!0}})})}Z(b,q)},$$slots:{default:!0}})})}var N=F(Ie,2);{let ve=I(()=>rn.get()>=12);T(N,()=>w.Group,(pe,P)=>{P(pe,{get visible(){return v(ve)},onpointermove:fe,onpointerleave:Ee,children:(b,z)=>{const q=I(()=>ge-Ae),he=I(()=>me-De);var X=P2(),Me=K(X);T(Me,()=>w.Mesh,(ie,J)=>{J(ie,{position:[we,R,de],name:"fence",children:(ee,Le)=>{var O=b2(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[st,U,U]})});var re=F(Q,2);{let te=I(()=>v(_)==="fence"?g:m);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var j=F(Me,2);T(j,()=>w.Mesh,(ie,J)=>{J(ie,{position:[Ae,R,Be],name:"fence",children:(ee,Le)=>{var O=w2(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[U,U,$e]})});var re=F(Q,2);{let te=I(()=>v(_)==="fence"?g:m);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var Oe=F(j,2);T(Oe,()=>w.Mesh,(ie,J)=>{J(ie,{position:[me,R,Be],name:"fence",children:(ee,Le)=>{var O=T2(),Q=K(O);T(Q,()=>w.BoxGeometry,(te,H)=>{H(te,{args:[U,U,$e]})});var re=F(Q,2);{let te=I(()=>v(_)==="fence"?g:m);T(re,()=>w.MeshStandardMaterial,(H,$)=>{$(H,{get color(){return v(te)}})})}Z(ee,O)},$$slots:{default:!0}})});var Re=F(Oe,2);{let ie=I(()=>[Ae+v(q)/2,R,se]);T(Re,()=>w.Mesh,(J,ee)=>{ee(J,{get position(){return v(ie)},name:"fence",children:(Le,O)=>{var Q=A2(),re=K(Q);{let H=I(()=>[v(q),U,U]);T(re,()=>w.BoxGeometry,($,Se)=>{Se($,{get args(){return v(H)}})})}var te=F(re,2);{let H=I(()=>v(_)==="fence"?g:m);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})})}var le=F(Re,2);{let ie=I(()=>[De+v(he)/2,R,se]);T(le,()=>w.Mesh,(J,ee)=>{ee(J,{get position(){return v(ie)},name:"fence",children:(Le,O)=>{var Q=E2(),re=K(Q);{let H=I(()=>[v(he),U,U]);T(re,()=>w.BoxGeometry,($,Se)=>{Se($,{get args(){return v(H)}})})}var te=F(re,2);{let H=I(()=>v(_)==="fence"?g:m);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})})}var xe=F(le,2);Vt(xe,17,()=>ze,kt,(ie,J)=>{var ee=I(()=>ho(v(J),2));let Le=()=>v(ee)[0],O=()=>v(ee)[1];var Q=Et(),re=K(Q);{let te=I(()=>[Le(),S/2,O()]);T(re,()=>w.Mesh,(H,$)=>{$(H,{get position(){return v(te)},name:"fence",children:(Se,He)=>{var Je=C2(),Ue=K(Je);T(Ue,()=>w.BoxGeometry,(Ze,Xe)=>{Xe(Ze,{args:[A,S,A]})});var We=F(Ue,2);{let Ze=I(()=>v(_)==="fence"?g:m);T(We,()=>w.MeshStandardMaterial,(Xe,Ge)=>{Ge(Xe,{get color(){return v(Ze)}})})}Z(Se,Je)},$$slots:{default:!0}})})}Z(ie,Q)}),Z(b,X)},$$slots:{default:!0}})})}var Ne=F(N,2);{let ve=I(()=>rn.get()>=12);T(Ne,()=>w.Group,(pe,P)=>{P(pe,{get visible(){return v(ve)},onpointermove:fe,onpointerleave:Ee,children:(b,z)=>{var q=Et(),he=K(q);T(he,()=>w.Mesh,(X,Me)=>{Me(X,{position:[0,-.48,0],rotation:[-Math.PI/2,0,0],children:(j,Oe)=>{var Re=R2(),le=K(Re);T(le,()=>w.PlaneGeometry,(ie,J)=>{J(ie,{args:[C,E]})});var xe=F(le,2);T(xe,()=>w.MeshStandardMaterial,(ie,J)=>{J(ie,{color:f})}),Z(j,Re)},$$slots:{default:!0}})}),Z(b,q)},$$slots:{default:!0}})})}var Te=F(Ne,2);{let ve=I(()=>rn.get()>=12);T(Te,()=>w.Group,(pe,P)=>{P(pe,{get visible(){return v(ve)},onpointermove:fe,onpointerleave:Ee,children:(b,z)=>{var q=X2(),he=K(q);T(he,()=>w.Group,(J,ee)=>{ee(J,{position:[-10,0,n/2+8],children:(Le,O)=>{var Q=N2(),re=K(Q);T(re,()=>w.Mesh,($,Se)=>{Se($,{position:[0,1.5,0],name:"tree-trunk",children:(He,Je)=>{var Ue=I2(),We=K(Ue);T(We,()=>w.CylinderGeometry,(Xe,Ge)=>{Ge(Xe,{args:[.3,.4,3,8]})});var Ze=F(We,2);{let Xe=I(()=>v(_)==="tree-trunk"?g:p);T(Ze,()=>w.MeshStandardMaterial,(Ge,Ve)=>{Ve(Ge,{get color(){return v(Xe)}})})}Z(He,Ue)},$$slots:{default:!0}})});var te=F(re,2);T(te,()=>w.Mesh,($,Se)=>{Se($,{position:[0,4.5,0],name:"tree-foliage",children:(He,Je)=>{var Ue=D2(),We=K(Ue);T(We,()=>w.ConeGeometry,(Xe,Ge)=>{Ge(Xe,{args:[2,4,8]})});var Ze=F(We,2);{let Xe=I(()=>v(_)==="tree-foliage"?g:x);T(Ze,()=>w.MeshStandardMaterial,(Ge,Ve)=>{Ve(Ge,{get color(){return v(Xe)}})})}Z(He,Ue)},$$slots:{default:!0}})});var H=F(te,2);T(H,()=>w.Mesh,($,Se)=>{Se($,{position:[0,3.5,0],name:"tree-foliage",children:(He,Je)=>{var Ue=L2(),We=K(Ue);T(We,()=>w.ConeGeometry,(Xe,Ge)=>{Ge(Xe,{args:[2.5,3,8]})});var Ze=F(We,2);{let Xe=I(()=>v(_)==="tree-foliage"?g:x);T(Ze,()=>w.MeshStandardMaterial,(Ge,Ve)=>{Ve(Ge,{get color(){return v(Xe)}})})}Z(He,Ue)},$$slots:{default:!0}})}),Z(Le,Q)},$$slots:{default:!0}})});var X=F(he,2);T(X,()=>w.Group,(J,ee)=>{ee(J,{position:[8,0,-n/2-6],children:(Le,O)=>{var Q=B2(),re=K(Q);T(re,()=>w.Mesh,($,Se)=>{Se($,{position:[0,1.75,0],name:"tree-trunk",children:(He,Je)=>{var Ue=U2(),We=K(Ue);T(We,()=>w.CylinderGeometry,(Xe,Ge)=>{Ge(Xe,{args:[.35,.45,3.5,8]})});var Ze=F(We,2);{let Xe=I(()=>v(_)==="tree-trunk"?g:p);T(Ze,()=>w.MeshStandardMaterial,(Ge,Ve)=>{Ve(Ge,{get color(){return v(Xe)}})})}Z(He,Ue)},$$slots:{default:!0}})});var te=F(re,2);T(te,()=>w.Mesh,($,Se)=>{Se($,{position:[0,5,0],name:"tree-foliage",children:(He,Je)=>{var Ue=F2(),We=K(Ue);T(We,()=>w.ConeGeometry,(Xe,Ge)=>{Ge(Xe,{args:[2.2,4,8]})});var Ze=F(We,2);{let Xe=I(()=>v(_)==="tree-foliage"?g:x);T(Ze,()=>w.MeshStandardMaterial,(Ge,Ve)=>{Ve(Ge,{get color(){return v(Xe)}})})}Z(He,Ue)},$$slots:{default:!0}})});var H=F(te,2);T(H,()=>w.Mesh,($,Se)=>{Se($,{position:[0,3.8,0],name:"tree-foliage",children:(He,Je)=>{var Ue=O2(),We=K(Ue);T(We,()=>w.ConeGeometry,(Xe,Ge)=>{Ge(Xe,{args:[2.8,3,8]})});var Ze=F(We,2);{let Xe=I(()=>v(_)==="tree-foliage"?g:x);T(Ze,()=>w.MeshStandardMaterial,(Ge,Ve)=>{Ve(Ge,{get color(){return v(Xe)}})})}Z(He,Ue)},$$slots:{default:!0}})}),Z(Le,Q)},$$slots:{default:!0}})});var Me=F(X,2);T(Me,()=>w.Mesh,(J,ee)=>{ee(J,{position:[-5,.6,n/2+.8],name:"shrub",children:(Le,O)=>{var Q=z2(),re=K(Q);T(re,()=>w.SphereGeometry,(H,$)=>{$(H,{args:[.8,8,6]})});var te=F(re,2);{let H=I(()=>v(_)==="shrub"?g:x);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})});var j=F(Me,2);T(j,()=>w.Mesh,(J,ee)=>{ee(J,{position:[-3.5,.5,n/2+.8],name:"shrub",children:(Le,O)=>{var Q=k2(),re=K(Q);T(re,()=>w.SphereGeometry,(H,$)=>{$(H,{args:[.7,8,6]})});var te=F(re,2);{let H=I(()=>v(_)==="shrub"?g:x);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})});var Oe=F(j,2);T(Oe,()=>w.Mesh,(J,ee)=>{ee(J,{position:[5,.55,n/2+.8],name:"shrub",children:(Le,O)=>{var Q=V2(),re=K(Q);T(re,()=>w.SphereGeometry,(H,$)=>{$(H,{args:[.75,8,6]})});var te=F(re,2);{let H=I(()=>v(_)==="shrub"?g:x);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})});var Re=F(Oe,2);T(Re,()=>w.Mesh,(J,ee)=>{ee(J,{position:[3.5,.45,n/2+.8],name:"shrub",children:(Le,O)=>{var Q=G2(),re=K(Q);T(re,()=>w.SphereGeometry,(H,$)=>{$(H,{args:[.6,8,6]})});var te=F(re,2);{let H=I(()=>v(_)==="shrub"?g:x);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})});var le=F(Re,2);T(le,()=>w.Mesh,(J,ee)=>{ee(J,{position:[-3,.5,-n/2-.8],name:"shrub",children:(Le,O)=>{var Q=$2(),re=K(Q);T(re,()=>w.SphereGeometry,(H,$)=>{$(H,{args:[.7,8,6]})});var te=F(re,2);{let H=I(()=>v(_)==="shrub"?g:x);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})});var xe=F(le,2);T(xe,()=>w.Mesh,(J,ee)=>{ee(J,{position:[3,.55,-n/2-.8],name:"shrub",children:(Le,O)=>{var Q=H2(),re=K(Q);T(re,()=>w.SphereGeometry,(H,$)=>{$(H,{args:[.75,8,6]})});var te=F(re,2);{let H=I(()=>v(_)==="shrub"?g:x);T(te,()=>w.MeshStandardMaterial,($,Se)=>{Se($,{get color(){return v(H)}})})}Z(Le,Q)},$$slots:{default:!0}})});var ie=F(xe,2);Vt(ie,16,()=>[-12.5,-10.5,-8.5,-6.5,-4.5,-2.5,-.5,1.5,3.5,5.5,7.5,9.5,11.5,13.5],kt,(J,ee)=>{var Le=Et(),O=K(Le);{let Q=I(()=>[ee,.58,de+.9]);T(O,()=>w.Mesh,(re,te)=>{te(re,{get position(){return v(Q)},name:"shrub",children:(H,$)=>{var Se=W2(),He=K(Se);T(He,()=>w.SphereGeometry,(Ue,We)=>{We(Ue,{args:[.72,8,6]})});var Je=F(He,2);{let Ue=I(()=>v(_)==="shrub"?g:x);T(Je,()=>w.MeshStandardMaterial,(We,Ze)=>{Ze(We,{get color(){return v(Ue)}})})}Z(H,Se)},$$slots:{default:!0}})})}Z(J,Le)}),Z(b,q)},$$slots:{default:!0}})})}Z(r,_e),En()}var Z2=ae("<!> <!>",1),J2=ae("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function K2(r,e){An(e,!0),oT();const t=new B(0,4,0);var n=J2(),i=K(n);w(i,{get is(){return Vr},makeDefault:!0,near:.1,far:1e3,position:[25,25,25],zoom:25,left:-15,right:15,top:15,bottom:-15,oncreate:R=>R.lookAt(t)});var s=F(i,2);w(s,{get is(){return Vu},intensity:.7});var o=F(s,2);w(o,{get is(){return ku},position:[15,20,10],intensity:1});var a=F(o,2);Zw(a,{position:[0,-.5,0],plane:"xz",cellColor:"#444444",cellThickness:.5,cellSize:1,fadeDistance:50,fadeStrength:1,followCamera:!1,infiniteGrid:!1,sectionColor:"#666666",sectionThickness:1,sectionSize:5,gridSize:[25,25]});var l=F(a,2);{var c=R=>{$T(R,{})};un(l,R=>{e.step===1&&R(c)})}var h=F(l,2);{var d=R=>{BT(R,{})};un(h,R=>{e.step===2&&R(d)})}var u=F(h,2);{var f=R=>{aA(R,{})};un(u,R=>{e.step>=3&&R(f)})}var p=F(u,2);{var x=R=>{LA(R,{})};un(p,R=>{e.step>=4&&R(x)})}var m=F(p,2);{var g=R=>{iE(R,{})};un(m,R=>{e.step>=5&&R(g)})}var _=F(m,2);{var y=R=>{pE(R,{})};un(_,R=>{e.step>=7&&R(y)})}var M=F(_,2);{var C=R=>{var U=Z2(),W=K(U);AE(W,{});var Y=F(W,2);c2(Y,{}),Z(R,U)};un(M,R=>{e.step>=8&&R(C)})}var E=F(M,2);{var L=R=>{x2(R,{})};un(E,R=>{e.step>=10&&R(L)})}var S=F(E,2);{var A=R=>{Y2(R,{})};un(S,R=>{e.step>=12&&R(A)})}Z(r,n),En()}var j2=ae('<div class="hover-tooltip svelte-1uha8ag"><span class="hover-tooltip-english svelte-1uha8ag"> </span> <span class="hover-tooltip-chinese svelte-1uha8ag"> </span></div>'),Q2=ae('<div class="final-image-overlay svelte-1uha8ag"><img alt="Final result" class="svelte-1uha8ag"/></div>'),eC=ae('<div class="container svelte-1uha8ag"><div class="control-panel svelte-1uha8ag"><header class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">飞牛培训</h1> <p class="subtitle svelte-1uha8ag">B类建筑承包商可交互式课程</p></header> <div class="step-info svelte-1uha8ag"><div class="step-number svelte-1uha8ag"> </div> <h2 class="svelte-1uha8ag"> </h2> <p class="description svelte-1uha8ag"> </p></div> <div class="audio-player svelte-1uha8ag" aria-label="Audio player"><audio preload="auto"></audio> <button class="audio-toggle svelte-1uha8ag" type="button"><span aria-hidden="true"> </span></button> <div class="audio-progress svelte-1uha8ag" role="progressbar" aria-valuemin="0" aria-valuemax="100"><div class="audio-progress-fill svelte-1uha8ag"></div></div> <div class="audio-time svelte-1uha8ag"> </div></div> <button class="image-button svelte-1uha8ag" type="button">查看此阶段真实图片</button> <div class="slider-container svelte-1uha8ag"><input type="range" min="1" class="slider svelte-1uha8ag"/> <div class="slider-labels svelte-1uha8ag"><span>1</span> <span> </span></div></div> <div class="navigation svelte-1uha8ag"><button class="svelte-1uha8ag">上一步</button> <button class="svelte-1uha8ag">下一步</button></div></div> <div class="canvas-container svelte-1uha8ag" role="presentation"><!> <!> <!></div></div>');function cC(r,e){An(e,!0);let t=Yt(Wg(rn.get()));Ki(()=>{rn.set(v(t)),tn(null)});let n=I(CT),i=I(()=>ET.get()),s=I(()=>v(i)?AT(v(i)):null),o=Yt(0),a=Yt(0);function l(q){xt(o,q.clientX,!0),xt(a,q.clientY,!0)}function c(){v(t)>1&&hd(t,-1)}function h(){v(t)<Oa&&hd(t)}let d=Yt(void 0),u=Yt(!1),f=Yt(0),p=Yt(0);function x(q){if(Number.isFinite(q.duration)&&q.duration>0)return q.duration;if(q.seekable.length>0){const he=q.seekable.end(q.seekable.length-1);if(Number.isFinite(he)&&he>0)return he}return 0}function m(q){if(!isFinite(q)||isNaN(q))return"00:00";const he=Math.floor(q/60),X=Math.floor(q%60);return`${he.toString().padStart(2,"0")}:${X.toString().padStart(2,"0")}`}function g(){v(d)&&(v(u)?v(d).pause():v(d).play())}function _(){v(d)&&(xt(f,v(d).currentTime,!0),xt(p,x(v(d)),!0))}function y(){v(d)&&xt(p,x(v(d)),!0)}function M(){xt(u,!1)}function C(){xt(u,!0)}function E(){xt(u,!1)}function L(q){if(!v(d))return;const X=q.currentTarget.getBoundingClientRect();if(X.width<=0)return;const Me=q.clientX-X.left,j=Math.min(1,Math.max(0,Me/X.width)),Oe=x(v(d));Oe&&(v(d).currentTime=j*Oe,xt(f,v(d).currentTime,!0),xt(p,Oe,!0))}Ki(()=>{v(t),v(d)&&(v(d).pause(),v(d).currentTime=0,v(d).load(),xt(u,!1),xt(f,0),xt(p,0))});let S=I(()=>v(p)>0?v(f)/v(p)*100:0),A=I(()=>`${ud}/audio/${v(n).audio}`),R=Yt(!1);Ki(()=>{v(t),xt(R,!1)});function U(){v(n).imageLink?window.open(v(n).imageLink,"_blank"):xt(R,!v(R))}var W=eC(),Y=Xt(W),ne=F(Xt(Y),2),k=Xt(ne),G=Xt(k);qt(k);var V=F(k,2),se=Xt(V,!0);qt(V);var de=F(V,2),Ae=Xt(de,!0);qt(de),qt(ne);var me=F(ne,2),we=Xt(me);Th(we,q=>xt(d,q),()=>v(d));var Be=F(we,2),st=Xt(Be);let $e;var oe=Xt(st,!0);qt(st),qt(Be);var ce=F(Be,2),ge=Xt(ce);qt(ce);var De=F(ce,2),Ce=Xt(De);qt(De),qt(me);var Fe=F(me,2),qe=F(Fe,2),ze=Xt(qe);Yg(ze);var fe=F(ze,2),Ee=F(Xt(fe),2),_e=Xt(Ee,!0);qt(Ee),qt(fe),qt(qe);var Ie=F(qe,2),N=Xt(Ie),Ne=F(N,2);qt(Ie),qt(Y);var Te=F(Y,2),ve=Xt(Te);_w(ve,{children:(q,he)=>{K2(q,{get step(){return v(t)}})},$$slots:{default:!0}});var pe=F(ve,2);{var P=q=>{var he=j2(),X=Xt(he),Me=Xt(X,!0);qt(X);var j=F(X,2),Oe=Xt(j,!0);qt(j),qt(he),Ic(()=>{pd(he,`left: ${v(o)+14}px; top: ${v(a)+14}px;`),Oi(Me,v(s).english),Oi(Oe,v(s).chinese)}),Z(q,he)};un(pe,q=>{v(s)&&q(P)})}var b=F(pe,2);{var z=q=>{var he=Q2(),X=Xt(he);qt(he),Ic(()=>Ds(X,"src",`${ud??""}/image/final.webp`)),ar("click",he,()=>xt(R,!1)),Z(q,he)};un(b,q=>{v(R)&&q(z)})}qt(Te),qt(W),Ic((q,he)=>{Oi(G,`第 ${v(t)??""} 阶段`),Oi(se,v(n).title),Oi(Ae,v(n).description),Ds(we,"src",v(A)),Ds(Be,"aria-label",v(u)?"Pause":"Play"),$e=t0(st,1,"svelte-1uha8ag",null,$e,{playing:v(u)}),Oi(oe,v(u)?"⏸":"▶"),Ds(ce,"aria-valuenow",v(S)),pd(ge,`width: ${v(S)??""}%`),Oi(Ce,`${q??""} / ${he??""}`),Ds(ze,"max",Oa),Oi(_e,Oa),N.disabled=v(t)===1,Ne.disabled=v(t)===Oa},[()=>m(v(f)),()=>m(v(p))]),Is("timeupdate",we,_),Is("loadedmetadata",we,y),Is("ended",we,M),Is("play",we,C),Is("pause",we,E),ar("click",Be,g),ar("click",ce,L),ar("click",Fe,U),n0(ze,()=>v(t),q=>xt(t,q)),ar("click",N,c),ar("click",Ne,h),ar("pointermove",Te,l),Z(r,W),En()}qg(["click","pointermove"]);export{cC as component};
