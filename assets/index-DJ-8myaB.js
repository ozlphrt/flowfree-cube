(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Aa="183",sc=0,so=1,rc=2,Cs=1,ac=2,Gi=3,In=0,Pt=1,bt=2,_n=0,vi=1,ro=2,ao=3,oo=4,oc=5,Wn=100,lc=101,cc=102,hc=103,uc=104,dc=200,fc=201,pc=202,mc=203,Rr=204,Pr=205,gc=206,_c=207,xc=208,vc=209,Mc=210,Sc=211,yc=212,Ec=213,bc=214,Lr=0,Dr=1,Ir=2,yi=3,Ur=4,Nr=5,Fr=6,Or=7,wa=0,Tc=1,Ac=2,nn=0,fl=1,pl=2,ml=3,Ca=4,gl=5,_l=6,xl=7,vl=300,Kn=301,Ei=302,$s=303,Ks=304,ks=306,Xi=1e3,pn=1001,Br=1002,Mt=1003,wc=1004,es=1005,Tt=1006,Zs=1007,qn=1008,Ot=1009,Ml=1010,Sl=1011,qi=1012,Ra=1013,rn=1014,$t=1015,Mn=1016,Pa=1017,La=1018,Yi=1020,yl=35902,El=35899,bl=1021,Tl=1022,Kt=1023,Sn=1026,Yn=1027,Da=1028,Ia=1029,bi=1030,Ua=1031,Na=1033,Rs=33776,Ps=33777,Ls=33778,Ds=33779,zr=35840,Vr=35841,Gr=35842,kr=35843,Hr=36196,Wr=37492,Xr=37496,qr=37488,Yr=37489,$r=37490,Kr=37491,Zr=37808,jr=37809,Jr=37810,Qr=37811,ea=37812,ta=37813,na=37814,ia=37815,sa=37816,ra=37817,aa=37818,oa=37819,la=37820,ca=37821,ha=36492,ua=36494,da=36495,fa=36283,pa=36284,ma=36285,ga=36286,Cc=3200,Fa=0,Rc=1,Pn="",Gt="srgb",Ti="srgb-linear",Us="linear",Ze="srgb",ti=7680,lo=519,Pc=512,Lc=513,Dc=514,Oa=515,Ic=516,Uc=517,Ba=518,Nc=519,co=35044,ho="300 es",tn=2e3,$i=2001;function Fc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){const i=Ns("canvas");return i.style.display="block",i}const uo={};function fo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Al(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=Al(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Al(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){const e=i.join(" ");e in uo||(uo[e]=!0,we(...i))}function Bc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const zc={[Lr]:Dr,[Ir]:Fr,[Ur]:Or,[yi]:Nr,[Dr]:Lr,[Fr]:Ir,[Or]:Ur,[Nr]:yi};class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let po=1234567;const Mi=Math.PI/180,Ki=180/Math.PI;function Ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function za(i,e){return(i%e+e)%e}function Vc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gc(i,e,t){return i!==e?(t-i)/(e-i):0}function Wi(i,e,t){return(1-t)*i+t*e}function kc(i,e,t,n){return Wi(i,e,1-Math.exp(-t*n))}function Hc(i,e=1){return e-Math.abs(za(i,e*2)-e)}function Wc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yc(i,e){return i+Math.random()*(e-i)}function $c(i){return i*(.5-Math.random())}function Kc(i){i!==void 0&&(po=i);let e=po+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zc(i){return i*Mi}function jc(i){return i*Ki}function Jc(i){return(i&i-1)===0&&i!==0}function Qc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function th(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),h=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*u,c*h,o*l);break;case"YZY":i.set(c*h,o*d,c*u,o*l);break;case"ZXZ":i.set(c*u,c*h,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*d,o*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Li={DEG2RAD:Mi,RAD2DEG:Ki,generateUUID:Ci,clamp:Ve,euclideanModulo:za,mapLinear:Vc,inverseLerp:Gc,lerp:Wi,damp:kc,pingpong:Hc,smoothstep:Wc,smootherstep:Xc,randInt:qc,randFloat:Yc,randFloatSpread:$c,seededRandom:Kc,degToRad:Zc,radToDeg:jc,isPowerOfTwo:Jc,ceilPowerOfTwo:Qc,floorPowerOfTwo:eh,setQuaternionFromProperEuler:th,normalize:Ct,denormalize:_i};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],u=n[s+3],h=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||c!==h||l!==m||d!==g){let p=c*h+l*m+d*g+u*_;p<0&&(h=-h,m=-m,g=-g,_=-_,p=-p);let f=1-o;if(p<.9995){const M=Math.acos(p),b=Math.sin(M);f=Math.sin(f*M)/b,o=Math.sin(o*M)/b,c=c*f+h*o,l=l*f+m*o,d=d*f+g*o,u=u*f+_*o}else{c=c*f+h*o,l=l*f+m*o,d=d*f+g*o,u=u*f+_*o;const M=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=M,l*=M,d*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],u=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*u+c*m-l*h,e[t+1]=c*g+d*h+l*u-o*m,e[t+2]=l*g+d*m+o*h-c*u,e[t+3]=d*g-o*u-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),u=o(r/2),h=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*d*u+l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u-h*m*g;break;case"YXZ":this._x=h*d*u+l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u+h*m*g;break;case"ZXY":this._x=h*d*u-l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u-h*m*g;break;case"ZYX":this._x=h*d*u-l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u+h*m*g;break;case"YZX":this._x=h*d*u+l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u-h*m*g;break;case"XZY":this._x=h*d*u-l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u+h*m*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(d-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*d,this.y=n+c*d+o*l-r*u,this.z=s+c*u+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new L,mo=new Un;class Ie{constructor(e,t,n,s,r,a,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],M=s[1],b=s[4],y=s[7],R=s[2],A=s[5],C=s[8];return r[0]=a*_+o*M+c*R,r[3]=a*p+o*b+c*A,r[6]=a*f+o*y+c*C,r[1]=l*_+d*M+u*R,r[4]=l*p+d*b+u*A,r[7]=l*f+d*y+u*C,r[2]=h*_+m*M+g*R,r[5]=h*p+m*b+g*A,r[8]=h*f+m*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,h=o*c-d*r,m=l*r-a*c,g=t*u+n*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-d*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(d*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Ie,go=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_o=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nh(){const i={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ti]:{primaries:e,whitePoint:n,transfer:Us,toXYZ:go,fromXYZ:_o,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:go,fromXYZ:_o,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const Xe=nh();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class ih{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=Ns("canvas")),ni.width=e.width,ni.height=e.height;const s=ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sh=0;class Va{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qs(s[a].image)):r.push(Qs(s[a]))}else r=Qs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let rh=0;const er=new L;class At extends wi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=pn,s=pn,r=Tt,a=qn,o=Kt,c=Ot,l=At.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Ci(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=vl;At.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(m+1)/2,R=(f+1)/2,A=(d+h)/4,C=(u+_)/4,v=(g+p)/4;return b>y&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=C/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=v/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(h-d)/M,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ah extends wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new At(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Va(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends ah{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wl extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oh extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class je{constructor(e,t,n,s,r,a,o,c,l,d,u,h,m,g,_,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,u,h,m,g,_,p)}set(e,t,n,s,r,a,o,c,l,d,u,h,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=u,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ii.setFromMatrixColumn(e,0).length(),r=1/ii.setFromMatrixColumn(e,1).length(),a=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*d,m=a*u,g=o*d,_=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*d,m=c*u,g=l*d,_=l*u;t[0]=h+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*d,m=c*u,g=l*d,_=l*u;t[0]=h-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*d,m=a*u,g=o*d,_=o*u;t[0]=c*d,t[4]=g*l-m,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=_-h*u,t[8]=g*u+m,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+_,t[5]=a*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),bn.crossVectors(n,Ut),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),bn.crossVectors(n,Ut)),bn.normalize(),ts.crossVectors(Ut,bn),s[0]=bn.x,s[4]=ts.x,s[8]=Ut.x,s[1]=bn.y,s[5]=ts.y,s[9]=Ut.y,s[2]=bn.z,s[6]=ts.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],M=n[3],b=n[7],y=n[11],R=n[15],A=s[0],C=s[4],v=s[8],E=s[12],H=s[1],w=s[5],N=s[9],B=s[13],W=s[2],z=s[6],G=s[10],F=s[14],Q=s[3],Z=s[7],ce=s[11],pe=s[15];return r[0]=a*A+o*H+c*W+l*Q,r[4]=a*C+o*w+c*z+l*Z,r[8]=a*v+o*N+c*G+l*ce,r[12]=a*E+o*B+c*F+l*pe,r[1]=d*A+u*H+h*W+m*Q,r[5]=d*C+u*w+h*z+m*Z,r[9]=d*v+u*N+h*G+m*ce,r[13]=d*E+u*B+h*F+m*pe,r[2]=g*A+_*H+p*W+f*Q,r[6]=g*C+_*w+p*z+f*Z,r[10]=g*v+_*N+p*G+f*ce,r[14]=g*E+_*B+p*F+f*pe,r[3]=M*A+b*H+y*W+R*Q,r[7]=M*C+b*w+y*z+R*Z,r[11]=M*v+b*N+y*G+R*ce,r[15]=M*E+b*B+y*F+R*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15],M=c*m-l*h,b=o*m-l*u,y=o*h-c*u,R=a*m-l*d,A=a*h-c*d,C=a*u-o*d;return t*(_*M-p*b+f*y)-n*(g*M-p*R+f*A)+s*(g*b-_*R+f*C)-r*(g*y-_*A+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],M=t*o-n*a,b=t*c-s*a,y=t*l-r*a,R=n*c-s*o,A=n*l-r*o,C=s*l-r*c,v=d*_-u*g,E=d*p-h*g,H=d*f-m*g,w=u*p-h*_,N=u*f-m*_,B=h*f-m*p,W=M*B-b*N+y*w+R*H-A*E+C*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/W;return e[0]=(o*B-c*N+l*w)*z,e[1]=(s*N-n*B-r*w)*z,e[2]=(_*C-p*A+f*R)*z,e[3]=(h*A-u*C-m*R)*z,e[4]=(c*H-a*B-l*E)*z,e[5]=(t*B-s*H+r*E)*z,e[6]=(p*y-g*C-f*b)*z,e[7]=(d*C-h*y+m*b)*z,e[8]=(a*N-o*H+l*v)*z,e[9]=(n*H-t*N-r*v)*z,e[10]=(g*A-_*y+f*M)*z,e[11]=(u*y-d*A-m*M)*z,e[12]=(o*E-a*w-c*v)*z,e[13]=(t*w-n*E+s*v)*z,e[14]=(_*b-g*R-p*M)*z,e[15]=(d*R-u*b+h*M)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,u=o+o,h=r*l,m=r*d,g=r*u,_=a*d,p=a*u,f=o*u,M=c*l,b=c*d,y=c*u,R=n.x,A=n.y,C=n.z;return s[0]=(1-(_+f))*R,s[1]=(m+y)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(m-y)*A,s[5]=(1-(h+f))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+b)*C,s[9]=(p-M)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ii.set(s[0],s[1],s[2]).length();const o=ii.set(s[4],s[5],s[6]).length(),c=ii.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Xt.copy(this);const l=1/a,d=1/o,u=1/c;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=d,Xt.elements[5]*=d,Xt.elements[6]*=d,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=tn,c=!1){const l=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===tn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===$i)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=tn,c=!1){const l=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===tn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===$i)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new L,Xt=new je,lh=new L(0,0,0),ch=new L(1,1,1),bn=new L,ts=new L,Ut=new L,xo=new je,vo=new Un;class Bt{constructor(e=0,t=0,n=0,s=Bt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vo.setFromEuler(this),this.setFromQuaternion(vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bt.DEFAULT_ORDER="XYZ";class Ga{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hh=0;const Mo=new L,si=new Un,cn=new je,ns=new L,Di=new L,uh=new L,dh=new Un,So=new L(1,0,0),yo=new L(0,1,0),Eo=new L(0,0,1),bo={type:"added"},fh={type:"removed"},ri={type:"childadded",child:null},tr={type:"childremoved",child:null};class wt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new L,t=new Bt,n=new Un,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ie}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(So,e)}rotateY(e){return this.rotateOnAxis(yo,e)}rotateZ(e){return this.rotateOnAxis(Eo,e)}translateOnAxis(e,t){return Mo.copy(e).applyQuaternion(this.quaternion),this.position.add(Mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(So,e)}translateY(e){return this.translateOnAxis(yo,e)}translateZ(e){return this.translateOnAxis(Eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Di,ns,this.up):cn.lookAt(ns,Di,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),si.setFromRotationMatrix(cn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bo),ri.child=e,this.dispatchEvent(ri),ri.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fh),tr.child=e,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bo),ri.child=e,this.dispatchEvent(ri),ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new L(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xi extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ph={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ph)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},is={h:0,s:0,l:0};function ir(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=za(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ir(a,r,e+1/3),this.g=ir(a,r,e),this.b=ir(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Cl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Xe.workingToColorSpace(Et.copy(this),e),Math.round(Ve(Et.r*255,0,255))*65536+Math.round(Ve(Et.g*255,0,255))*256+Math.round(Ve(Et.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Et.copy(this),t);const n=Et.r,s=Et.g,r=Et.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Gt){Xe.workingToColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,s=Et.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(is);const n=Wi(Tn.h,is.h,t),s=Wi(Tn.s,is.s,t),r=Wi(Tn.l,is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Pe;Pe.NAMES=Cl;class Rl extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bt,this.environmentIntensity=1,this.environmentRotation=new Bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qt=new L,hn=new L,sr=new L,un=new L,ai=new L,oi=new L,To=new L,rr=new L,ar=new L,or=new L,lr=new ot,cr=new ot,hr=new ot;class kt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qt.subVectors(s,t),hn.subVectors(n,t),sr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(hn),c=qt.dot(sr),l=hn.dot(hn),d=hn.dot(sr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,m=(l*c-o*d)*h,g=(a*d-o*c)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,un.x),c.addScaledVector(a,un.y),c.addScaledVector(o,un.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return lr.setScalar(0),cr.setScalar(0),hr.setScalar(0),lr.fromBufferAttribute(e,t),cr.fromBufferAttribute(e,n),hr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lr,r.x),a.addScaledVector(cr,r.y),a.addScaledVector(hr,r.z),a}static isFrontFacing(e,t,n,s){return qt.subVectors(n,t),hn.subVectors(e,t),qt.cross(hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ai.subVectors(s,n),oi.subVectors(r,n),rr.subVectors(e,n);const c=ai.dot(rr),l=oi.dot(rr);if(c<=0&&l<=0)return t.copy(n);ar.subVectors(e,s);const d=ai.dot(ar),u=oi.dot(ar);if(d>=0&&u<=d)return t.copy(s);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(ai,a);or.subVectors(e,r);const m=ai.dot(or),g=oi.dot(or);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(oi,o);const p=d*g-m*u;if(p<=0&&u-d>=0&&m-g>=0)return To.subVectors(r,s),o=(u-d)/(u-d+(m-g)),t.copy(s).addScaledVector(To,o);const f=1/(p+_+h);return a=_*f,o=h*f,t.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),rs.subVectors(this.max,Ii),li.subVectors(e.a,Ii),ci.subVectors(e.b,Ii),hi.subVectors(e.c,Ii),An.subVectors(ci,li),wn.subVectors(hi,ci),On.subVectors(li,hi);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-On.z,On.y,An.z,0,-An.x,wn.z,0,-wn.x,On.z,0,-On.x,-An.y,An.x,0,-wn.y,wn.x,0,-On.y,On.x,0];return!ur(t,li,ci,hi,rs)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,li,ci,hi,rs))?!1:(as.crossVectors(An,wn),t=[as.x,as.y,as.z],ur(t,li,ci,hi,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new L,new L,new L,new L,new L,new L,new L,new L],Yt=new L,ss=new jn,li=new L,ci=new L,hi=new L,An=new L,wn=new L,On=new L,Ii=new L,rs=new L,as=new L,Bn=new L;function ur(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bn.fromArray(i,r);const o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),d=n.dot(Bn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const dt=new L,os=new ze;let mh=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=co,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==co&&(e.usage=this.usage),e}}class Pl extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const gh=new jn,Ui=new L,dr=new L;class Ri{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(dr)),this.expandByPoint(Ui.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _h=0;const Vt=new je,fr=new wt,ui=new L,Nt=new jn,Ni=new jn,_t=new L;class Dt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Ll:Pl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Nt.min,Ni.min),Nt.expandByPoint(_t),_t.addVectors(Nt.max,Ni.max),Nt.expandByPoint(_t)):(Nt.expandByPoint(Ni.min),Nt.expandByPoint(Ni.max))}Nt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)_t.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(e,l),_t.add(ui)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new L,c[v]=new L;const l=new L,d=new L,u=new L,h=new ze,m=new ze,g=new ze,_=new L,p=new L;function f(v,E,H){l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,H),h.fromBufferAttribute(r,v),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,H),d.sub(l),u.sub(l),m.sub(h),g.sub(h);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(w),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(w),o[v].add(_),o[E].add(_),o[H].add(_),c[v].add(p),c[E].add(p),c[H].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,E=M.length;v<E;++v){const H=M[v],w=H.start,N=H.count;for(let B=w,W=w+N;B<W;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new L,y=new L,R=new L,A=new L;function C(v){R.fromBufferAttribute(s,v),A.copy(R);const E=o[v];b.copy(E),b.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(A,E);const w=y.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,w)}for(let v=0,E=M.length;v<E;++v){const H=M[v],w=H.start,N=H.count;for(let B=w,W=w+N;B<W;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,d=new L,u=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,h=new l.constructor(c.length*d);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*d;for(let f=0;f<d;f++)h[g++]=l[m++]}return new Zt(h,d,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){const h=l[d],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const m=l[u];d.push(m.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],u=r[l];for(let h=0,m=u.length;h<m;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xh=0;class Jn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=vi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Pr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fn=new L,pr=new L,ls=new L,Cn=new L,mr=new L,cs=new L,gr=new L;class ka{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pr.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(pr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ls),o=Cn.dot(this.direction),c=-Cn.dot(ls),l=Cn.lengthSq(),d=Math.abs(1-a*a);let u,h,m,g;if(d>0)if(u=a*c-o,h=a*o-c,g=r*d,u>=0)if(h>=-g)if(h<=g){const _=1/d;u*=_,h*=_,m=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=r,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+h*(h+2*c)+l);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pr).addScaledVector(ls,h),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){mr.subVectors(t,e),cs.subVectors(n,e),gr.crossVectors(mr,cs);let a=this.direction.dot(gr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const c=o*this.direction.dot(cs.crossVectors(Cn,cs));if(c<0)return null;const l=o*this.direction.dot(mr.cross(Cn));if(l<0||c+l>a)return null;const d=-o*Cn.dot(gr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Os extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ao=new je,zn=new ka,hs=new Ri,wo=new L,us=new L,ds=new L,fs=new L,_r=new L,ps=new L,Co=new L,ms=new L;class Ge extends wt{constructor(e=new Dt,t=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],u=r[c];d!==0&&(_r.fromBufferAttribute(u,e),a?ps.addScaledVector(_r,d):ps.addScaledVector(_r.sub(t),d))}t.add(ps)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(hs.containsPoint(zn.origin)===!1&&(zn.intersectSphere(hs,wo)===null||zn.origin.distanceToSquared(wo)>(e.far-e.near)**2))&&(Ao.copy(r).invert(),zn.copy(e.ray).applyMatrix4(Ao),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,R=b;y<R;y+=3){const A=o.getX(y),C=o.getX(y+1),v=o.getX(y+2);s=gs(this,f,e,n,l,d,u,A,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);s=gs(this,a,e,n,l,d,u,M,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,R=b;y<R;y+=3){const A=y,C=y+1,v=y+2;s=gs(this,f,e,n,l,d,u,A,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=p,b=p+1,y=p+2;s=gs(this,a,e,n,l,d,u,M,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function vh(i,e,t,n,s,r,a,o){let c;if(e.side===Pt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===In,o),c===null)return null;ms.copy(o),ms.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ms);return l<t.near||l>t.far?null:{distance:l,point:ms.clone(),object:i}}function gs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,us),i.getVertexPosition(c,ds),i.getVertexPosition(l,fs);const d=vh(i,e,t,n,us,ds,fs,Co);if(d){const u=new L;kt.getBarycoord(Co,us,ds,fs,u),s&&(d.uv=kt.getInterpolatedAttribute(s,o,c,l,u,new ze)),r&&(d.uv1=kt.getInterpolatedAttribute(r,o,c,l,u,new ze)),a&&(d.normal=kt.getInterpolatedAttribute(a,o,c,l,u,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new L,materialIndex:0};kt.getNormal(us,ds,fs,h.normal),d.face=h,d.barycoord=u}return d}class Dl extends At{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Mt,d=Mt,u,h){super(null,a,o,c,l,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const di=new je,Po=new je,_s=[],Lo=new jn,Mh=new je,Fi=new Ge,Oi=new Ri;class Sh extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ro(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,di),Lo.copy(e.boundingBox).applyMatrix4(di),this.boundingBox.union(Lo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,di),Oi.copy(e.boundingSphere).applyMatrix4(di),this.boundingSphere.union(Oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),e.ray.intersectsSphere(Oi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,di),Po.multiplyMatrices(n,di),Fi.matrixWorld=Po,Fi.raycast(e,_s);for(let a=0,o=_s.length;a<o;a++){const c=_s[a];c.instanceId=r,c.object=this,t.push(c)}_s.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dl(new Float32Array(s*this.count),s,this.count,Da,$t));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xr=new L,yh=new L,Eh=new Ie;class Hn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xr.subVectors(n,t).cross(yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eh.getNormalMatrix(e),s=this.coplanarPoint(xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Ri,bh=new ze(.5,.5),xs=new L;class Ha{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],h=r[6],m=r[7],g=r[8],_=r[9],p=r[10],f=r[11],M=r[12],b=r[13],y=r[14],R=r[15];if(s[0].setComponents(l-a,m-d,f-g,R-M).normalize(),s[1].setComponents(l+a,m+d,f+g,R+M).normalize(),s[2].setComponents(l+o,m+u,f+_,R+b).normalize(),s[3].setComponents(l-o,m-u,f-_,R-b).normalize(),n)s[4].setComponents(c,h,p,y).normalize(),s[5].setComponents(l-c,m-h,f-p,R-y).normalize();else if(s[4].setComponents(l-c,m-h,f-p,R-y).normalize(),t===tn)s[5].setComponents(l+c,m+h,f+p,R+y).normalize();else if(t===$i)s[5].setComponents(c,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){Vn.center.set(0,0,0);const t=bh.distanceTo(e.center);return Vn.radius=.7071067811865476+t,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xs.x=s.normal.x>0?e.max.x:e.min.x,xs.y=s.normal.y>0?e.max.y:e.min.y,xs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Il extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bs=new L,zs=new L,Do=new je,Bi=new ka,vs=new Ri,vr=new L,Io=new L;class Th extends wt{constructor(e=new Dt,t=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bs.fromBufferAttribute(t,s-1),zs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bs.distanceTo(zs);e.setAttribute("lineDistance",new ht(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),vs.radius+=r,e.ray.intersectsSphere(vs)===!1)return;Do.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Do);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=l){const f=d.getX(_),M=d.getX(_+1),b=Ms(this,e,Bi,c,f,M,_);b&&t.push(b)}if(this.isLineLoop){const _=d.getX(g-1),p=d.getX(m),f=Ms(this,e,Bi,c,_,p,g-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=l){const f=Ms(this,e,Bi,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Ms(this,e,Bi,c,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ms(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Bs.fromBufferAttribute(o,s),zs.fromBufferAttribute(o,r),t.distanceSqToSegment(Bs,zs,vr,Io)>n)return;vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(vr);if(!(l<e.near||l>e.far))return{distance:l,point:Io.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Uo=new L,No=new L;class Ah extends Th{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Uo.fromBufferAttribute(t,s),No.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uo.distanceTo(No);e.setAttribute("lineDistance",new ht(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ul extends At{constructor(e=[],t=Kn,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _a extends At{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi extends At{constructor(e,t,n=rn,s,r,a,o=Mt,c=Mt,l,d=Sn,u=1){if(d!==Sn&&d!==Yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Va(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wh extends Zi{constructor(e,t=rn,n=Kn,s,r,a=Mt,o=Mt,c,l=Sn){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vn extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],u=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(u,2));function g(_,p,f,M,b,y,R,A,C,v,E){const H=y/C,w=R/v,N=y/2,B=R/2,W=A/2,z=C+1,G=v+1;let F=0,Q=0;const Z=new L;for(let ce=0;ce<G;ce++){const pe=ce*w-B;for(let ue=0;ue<z;ue++){const Ue=ue*H-N;Z[_]=Ue*M,Z[p]=pe*b,Z[f]=W,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[f]=A>0?1:-1,d.push(Z.x,Z.y,Z.z),u.push(ue/C),u.push(1-ce/v),F+=1}}for(let ce=0;ce<v;ce++)for(let pe=0;pe<C;pe++){const ue=h+pe+z*ce,Ue=h+pe+z*(ce+1),rt=h+(pe+1)+z*(ce+1),st=h+(pe+1)+z*ce;c.push(ue,Ue,st),c.push(Ue,rt,st),Q+=6}o.addGroup(m,Q,E),m+=Q,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $n extends Dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new L,d=new ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const m=n+u/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ji extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],m=[];let g=0;const _=[],p=n/2;let f=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(m,2));function M(){const y=new L,R=new L;let A=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const E=[],H=v/r,w=H*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,W=B*c+o,z=Math.sin(W),G=Math.cos(W);R.x=w*z,R.y=-H*n+p,R.z=w*G,u.push(R.x,R.y,R.z),y.set(z,C,G).normalize(),h.push(y.x,y.y,y.z),m.push(B,1-H),E.push(g++)}_.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const H=_[E][v],w=_[E+1][v],N=_[E+1][v+1],B=_[E][v+1];(e>0||E!==0)&&(d.push(H,w,B),A+=3),(t>0||E!==r-1)&&(d.push(w,N,B),A+=3)}l.addGroup(f,A,0),f+=A}function b(y){const R=g,A=new ze,C=new L;let v=0;const E=y===!0?e:t,H=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*H,0),h.push(0,H,0),m.push(.5,.5),g++;const w=g;for(let N=0;N<=s;N++){const W=N/s*c+o,z=Math.cos(W),G=Math.sin(W);C.x=E*G,C.y=p*H,C.z=E*z,u.push(C.x,C.y,C.z),h.push(0,H,0),A.x=z*.5+.5,A.y=G*.5*H+.5,m.push(A.x,A.y),g++}for(let N=0;N<s;N++){const B=R+N,W=w+N;y===!0?d.push(W,W+1,B):d.push(W+1,W,B),v+=3}l.addGroup(f,v,y===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ss=new L,ys=new L,Mr=new L,Es=new kt;class Ch extends Dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Mi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],d=["a","b","c"],u=new Array(3),h={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:p,c:f}=Es;if(_.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Es.getNormal(Mr),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const b=(M+1)%3,y=u[M],R=u[b],A=Es[d[M]],C=Es[d[b]],v=`${y}_${R}`,E=`${R}_${y}`;E in h&&h[E]?(Mr.dot(h[E].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(C.x,C.y,C.z)),h[E]=null):v in h||(h[v]={index0:l[M],index1:l[b],normal:Mr.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:p}=h[g];Ss.fromBufferAttribute(o,_),ys.fromBufferAttribute(o,p),m.push(Ss.x,Ss.y,Ss.z),m.push(ys.x,ys.y,ys.z)}this.setAttribute("position",new ht(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zn extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,u=e/o,h=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<d;f++){const M=f*h-a;for(let b=0;b<l;b++){const y=b*u-r;g.push(y,-M,0),_.push(0,0,1),p.push(b/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const b=M+l*f,y=M+l*(f+1),R=M+1+l*(f+1),A=M+1+l*f;m.push(b,y,A),m.push(y,R,A)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hs extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],u=new L,h=new L,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const M=[],b=f/n;let y=0;f===0&&a===0?y=.5/t:f===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const A=R/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),p.push(A+y,1-b),M.push(l++)}d.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const b=d[f][M+1],y=d[f][M],R=d[f+1][M],A=d[f+1][M+1];(f!==0||a>0)&&m.push(b,y,A),(f!==n-1||c<Math.PI)&&m.push(y,R,A)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=Ai(i[t]);for(const s in n)e[s]=n[s]}return e}function Rh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ph={clone:Ai,merge:Rt};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ih extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mn extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Uh extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nh extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fh extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ol extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Sr=new je,Fo=new L,Oo=new L;class Oh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Ot,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fo),Oo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oo),t.updateMatrixWorld(),Sr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===$i||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bs=new L,Ts=new Un,Jt=new L;class Bl extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bs,Ts,Jt),Jt.x===1&&Jt.y===1&&Jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,Ts,Jt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(bs,Ts,Jt),Jt.x===1&&Jt.y===1&&Jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,Ts,Jt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new L,Bo=new ze,zo=new ze;class Ft extends Bl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Bo,zo),t.subVectors(zo,Bo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bh extends Oh{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}}class Wa extends Ol{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class zl extends Bl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zh extends Ol{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fi=-90,pi=1;class Vh extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(fi,pi,e,t);s.layers=this.layers,this.add(s);const r=new Ft(fi,pi,e,t);r.layers=this.layers,this.add(r);const a=new Ft(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new Ft(fi,pi,e,t);o.layers=this.layers,this.add(o);const c=new Ft(fi,pi,e,t);c.layers=this.layers,this.add(c);const l=new Ft(fi,pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gh extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vo=new je;class kh{constructor(e,t,n=0,s=1/0){this.ray=new ka(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vo),this}intersectObject(e,t=!0,n=[]){return xa(e,this,n,t),n.sort(Go),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xa(e[s],this,n,t);return n.sort(Go),n}}function Go(i,e){return i.distance-e.distance}function xa(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)xa(r[a],e,t,!0)}}class Hh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,we("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ko(i,e,t,n){const s=Wh(n);switch(t){case bl:return i*e;case Da:return i*e/s.components*s.byteLength;case Ia:return i*e/s.components*s.byteLength;case bi:return i*e*2/s.components*s.byteLength;case Ua:return i*e*2/s.components*s.byteLength;case Tl:return i*e*3/s.components*s.byteLength;case Kt:return i*e*4/s.components*s.byteLength;case Na:return i*e*4/s.components*s.byteLength;case Rs:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vr:case kr:return Math.max(i,16)*Math.max(e,8)/4;case zr:case Gr:return Math.max(i,8)*Math.max(e,8)/2;case Hr:case Wr:case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xr:case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ha:case ua:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fa:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ma:case ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wh(i){switch(i){case Ot:case Ml:return{byteLength:1,components:1};case qi:case Sl:case Mn:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case rn:case Ra:case $t:return{byteLength:4,components:1};case yl:case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);function Vl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xh(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<u.length;m++){const g=u[h],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
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
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
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
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
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
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,su=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ru=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,du=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mu=`#define PI 3.141592653589793
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
} // validated`,gu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_u=`vec3 transformedNormal = objectNormal;
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
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
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
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
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
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
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
#endif`,Wu=`uniform sampler2D dfgLUT;
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
}`,Xu=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,td=`#if defined( USE_POINTS_UV )
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
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
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
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pd=`float getShadowMask() {
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
}`,Ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,Qd=`#define DISTANCE
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
}`,ef=`#define DISTANCE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`uniform float scale;
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
}`,rf=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,of=`uniform vec3 diffuse;
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
}`,lf=`#define LAMBERT
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
}`,cf=`#define LAMBERT
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
}`,hf=`#define MATCAP
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
}`,uf=`#define MATCAP
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
}`,df=`#define NORMAL
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
}`,ff=`#define NORMAL
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
}`,pf=`#define PHONG
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
}`,mf=`#define PHONG
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
}`,gf=`#define STANDARD
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
}`,_f=`#define STANDARD
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
}`,xf=`#define TOON
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
}`,vf=`#define TOON
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
}`,Mf=`uniform float size;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,yf=`#include <common>
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
}`,Ef=`uniform vec3 color;
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
}`,bf=`uniform float rotation;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:qh,alphahash_pars_fragment:Yh,alphamap_fragment:$h,alphamap_pars_fragment:Kh,alphatest_fragment:Zh,alphatest_pars_fragment:jh,aomap_fragment:Jh,aomap_pars_fragment:Qh,batching_pars_vertex:eu,batching_vertex:tu,begin_vertex:nu,beginnormal_vertex:iu,bsdfs:su,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:ou,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:cu,clipping_planes_vertex:hu,color_fragment:uu,color_pars_fragment:du,color_pars_vertex:fu,color_vertex:pu,common:mu,cube_uv_reflection_fragment:gu,defaultnormal_vertex:_u,displacementmap_pars_vertex:xu,displacementmap_vertex:vu,emissivemap_fragment:Mu,emissivemap_pars_fragment:Su,colorspace_fragment:yu,colorspace_pars_fragment:Eu,envmap_fragment:bu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:Au,envmap_pars_vertex:wu,envmap_physical_pars_fragment:Bu,envmap_vertex:Cu,fog_vertex:Ru,fog_pars_vertex:Pu,fog_fragment:Lu,fog_pars_fragment:Du,gradientmap_pars_fragment:Iu,lightmap_pars_fragment:Uu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:zu,lights_toon_pars_fragment:Vu,lights_phong_fragment:Gu,lights_phong_pars_fragment:ku,lights_physical_fragment:Hu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:ju,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:ed,map_particle_pars_fragment:td,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphinstance_vertex:sd,morphcolor_vertex:rd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:hd,normal_pars_fragment:ud,normal_pars_vertex:dd,normal_vertex:fd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:xd,opaque_fragment:vd,packing:Md,premultiplied_alpha_fragment:Sd,project_vertex:yd,dithering_fragment:Ed,dithering_pars_fragment:bd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:wd,shadowmap_pars_vertex:Cd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Pd,skinbase_vertex:Ld,skinning_pars_vertex:Dd,skinning_vertex:Id,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:Fd,tonemapping_fragment:Od,tonemapping_pars_fragment:Bd,transmission_fragment:zd,transmission_pars_fragment:Vd,uv_pars_fragment:Gd,uv_pars_vertex:kd,uv_vertex:Hd,worldpos_vertex:Wd,background_vert:Xd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:$d,cube_vert:Kd,cube_frag:Zd,depth_vert:jd,depth_frag:Jd,distance_vert:Qd,distance_frag:ef,equirect_vert:tf,equirect_frag:nf,linedashed_vert:sf,linedashed_frag:rf,meshbasic_vert:af,meshbasic_frag:of,meshlambert_vert:lf,meshlambert_frag:cf,meshmatcap_vert:hf,meshmatcap_frag:uf,meshnormal_vert:df,meshnormal_frag:ff,meshphong_vert:pf,meshphong_frag:mf,meshphysical_vert:gf,meshphysical_frag:_f,meshtoon_vert:xf,meshtoon_frag:vf,points_vert:Mf,points_frag:Sf,shadow_vert:yf,shadow_frag:Ef,sprite_vert:bf,sprite_frag:Tf},ae={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},en={basic:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Rt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Rt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Rt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Rt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Rt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Rt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Rt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Rt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Rt([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Rt([ae.lights,ae.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};en.physical={uniforms:Rt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const As={r:0,b:0,g:0},Gn=new Bt,Af=new je;function wf(i,e,t,n,s,r){const a=new Pe(0);let o=s===!0?0:1,c,l,d=null,u=0,h=null;function m(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const y=M.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(M){let b=!1;const y=m(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,b){const y=m(b);y&&(y.isCubeTexture||y.mapping===ks)?(l===void 0&&(l=new Ge(new vn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ai(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Gn.copy(b.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Af.makeRotationFromEuler(Gn)),l.material.toneMapped=Xe.getTransfer(y.colorSpace)!==Ze,(d!==y||u!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ge(new Zn(2,2),new an({name:"BackgroundMaterial",uniforms:Ai(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==Ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,b){M.getRGB(As,Fl(i)),t.buffers.color.setClear(As.r,As.g,As.b,b,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:_,dispose:f}}function Cf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(w,N,B,W,z){let G=!1;const F=u(w,W,B,N);r!==F&&(r=F,l(r.object)),G=m(w,W,B,z),G&&g(w,W,B,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(w,N,B,W),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function u(w,N,B,W){const z=W.wireframe===!0;let G=n[N.id];G===void 0&&(G={},n[N.id]=G);const F=w.isInstancedMesh===!0?w.id:0;let Q=G[F];Q===void 0&&(Q={},G[F]=Q);let Z=Q[B.id];Z===void 0&&(Z={},Q[B.id]=Z);let ce=Z[z];return ce===void 0&&(ce=h(c()),Z[z]=ce),ce}function h(w){const N=[],B=[],W=[];for(let z=0;z<t;z++)N[z]=0,B[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:W,object:w,attributes:{},index:null}}function m(w,N,B,W){const z=r.attributes,G=N.attributes;let F=0;const Q=B.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const pe=z[Z];let ue=G[Z];if(ue===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),pe===void 0||pe.attribute!==ue||ue&&pe.data!==ue.data)return!0;F++}return r.attributesNum!==F||r.index!==W}function g(w,N,B,W){const z={},G=N.attributes;let F=0;const Q=B.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let pe=G[Z];pe===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor));const ue={};ue.attribute=pe,pe&&pe.data&&(ue.data=pe.data),z[Z]=ue,F++}r.attributes=z,r.attributesNum=F,r.index=W}function _(){const w=r.newAttributes;for(let N=0,B=w.length;N<B;N++)w[N]=0}function p(w){f(w,0)}function f(w,N){const B=r.newAttributes,W=r.enabledAttributes,z=r.attributeDivisors;B[w]=1,W[w]===0&&(i.enableVertexAttribArray(w),W[w]=1),z[w]!==N&&(i.vertexAttribDivisor(w,N),z[w]=N)}function M(){const w=r.newAttributes,N=r.enabledAttributes;for(let B=0,W=N.length;B<W;B++)N[B]!==w[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function b(w,N,B,W,z,G,F){F===!0?i.vertexAttribIPointer(w,N,B,z,G):i.vertexAttribPointer(w,N,B,W,z,G)}function y(w,N,B,W){_();const z=W.attributes,G=B.getAttributes(),F=N.defaultAttributeValues;for(const Q in G){const Z=G[Q];if(Z.location>=0){let ce=z[Q];if(ce===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const pe=ce.normalized,ue=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const rt=Ue.buffer,st=Ue.type,$=Ue.bytesPerElement,ne=st===i.INT||st===i.UNSIGNED_INT||ce.gpuType===Ra;if(ce.isInterleavedBufferAttribute){const re=ce.data,De=re.stride,Te=ce.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Z.locationSize;Ce++)f(Z.location+Ce,re.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)p(Z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Ce=0;Ce<Z.locationSize;Ce++)b(Z.location+Ce,ue/Z.locationSize,st,pe,De*$,(Te+ue/Z.locationSize*Ce)*$,ne)}else{if(ce.isInstancedBufferAttribute){for(let re=0;re<Z.locationSize;re++)f(Z.location+re,ce.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<Z.locationSize;re++)p(Z.location+re);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let re=0;re<Z.locationSize;re++)b(Z.location+re,ue/Z.locationSize,st,pe,ue*$,ue/Z.locationSize*re*$,ne)}}else if(F!==void 0){const pe=F[Q];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(Z.location,pe);break;case 3:i.vertexAttrib3fv(Z.location,pe);break;case 4:i.vertexAttrib4fv(Z.location,pe);break;default:i.vertexAttrib1fv(Z.location,pe)}}}}M()}function R(){E();for(const w in n){const N=n[w];for(const B in N){const W=N[B];for(const z in W){const G=W[z];for(const F in G)d(G[F].object),delete G[F];delete W[z]}}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const N=n[w.id];for(const B in N){const W=N[B];for(const z in W){const G=W[z];for(const F in G)d(G[F].object),delete G[F];delete W[z]}}delete n[w.id]}function C(w){for(const N in n){const B=n[N];for(const W in B){const z=B[W];if(z[w.id]===void 0)continue;const G=z[w.id];for(const F in G)d(G[F].object),delete G[F];delete z[w.id]}}}function v(w){for(const N in n){const B=n[N],W=w.isInstancedMesh===!0?w.id:0,z=B[W];if(z!==void 0){for(const G in z){const F=z[G];for(const Q in F)d(F[Q].object),delete F[Q];delete z[G]}delete B[W],Object.keys(B).length===0&&delete n[N]}}}function E(){H(),a=!0,r!==s&&(r=s,l(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:H,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Rf(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=d[g];t.update(m,n,1)}function c(l,d,u,h){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],d[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*h[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Pf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Kt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ot&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$t&&!v)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(we("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:R,samples:A}}function Lf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Hn,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||s;return s=h,n=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):l();else{const M=r?0:n,b=M*4;let y=f.clippingState||null;c.value=y,y=d(g,h,b,m);for(let R=0;R!==b;++R)y[R]=t[R];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,y=m;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Dn=4,Ho=[.125,.215,.35,.446,.526,.582],Xn=20,Df=256,zi=new zl,Wo=new Pe;let yr=null,Er=0,br=0,Tr=!1;const If=new L;class va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=If}=r;yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,Er,br),this._renderer.xr.enabled=Tr,e.scissorTest=!1,mi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Mn,format:Kt,colorSpace:Ti,depthBuffer:!1},s=Xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Uf(r)),this._blurMaterial=Ff(r,e,t),this._ggxMaterial=Nf(r,e,t)}return s}_compileMaterial(e){const t=new Ge(new Dt,e);this._renderer.compile(t,zi)}_sceneToCubeUV(e,t,n,s,r){const c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Wo),u.toneMapping=nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new vn,new Os({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let f=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,f=!0):(p.color.copy(Wo),f=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[b]));const R=this._cubeSize;mi(s,y*R,b>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(_,c),u.render(e,c)}u.toneMapping=m,u.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Kn||e.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;mi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,m=u*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Dn?n-g+Dn:0),f=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,mi(r,p,f,3*_,2*_),s.setRenderTarget(r),s.render(o,zi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,mi(e,p,f,3*_,2*_),s.setRenderTarget(e),s.render(o,zi)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[s];u.material=l;const h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Xn-1),_=r/g,p=isFinite(r)?1+Math.floor(d*_):Xn;p>Xn&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const f=[];let M=0;for(let C=0;C<Xn;++C){const v=C/_,E=Math.exp(-v*v/2);f.push(E),C===0?M+=E:C<p&&(M+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const y=this._sizeLods[s],R=3*y*(s>b-Dn?s-b+Dn:0),A=4*(this._cubeSize-y);mi(t,R,A,3*y,2*y),c.setRenderTarget(t),c.render(u,zi)}}function Uf(i){const e=[],t=[],n=[];let s=i;const r=i-Dn+1+Ho.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Dn?c=Ho[a-i+Dn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,_=3,p=2,f=1,M=new Float32Array(_*g*m),b=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,v=A>2?0:-1,E=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(E,_*g*A),b.set(h,p*g*A);const H=[A,A,A,A,A,A];y.set(H,f*g*A)}const R=new Dt;R.setAttribute("position",new Zt(M,_)),R.setAttribute("uv",new Zt(b,p)),R.setAttribute("faceIndex",new Zt(y,f)),n.push(new Ge(R,null)),s>Dn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Xo(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Nf(i,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Df,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ff(i,e,t){const n=new Float32Array(Xn),s=new L(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function qo(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Yo(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ws(){return`

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
	`}class Gl extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ul(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:_n});r.uniforms.tEquirect.value=t;const a=new Ge(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Tt),new Vh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Of(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===$s||m===Ks)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Gl(g.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,g=m===$s||m===Ks,_=m===Kn||m===Ei;if(g||_){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new va(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new va(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,m){return m===$s?h.mapping=Kn:m===Ks&&(h.mapping=Ei),h}function c(h){let m=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&m++;return m===g}function l(h){const m=h.target;m.removeEventListener("dispose",l);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(h){const m=h.target;m.removeEventListener("dispose",d);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Bf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function zf(i,e,t,n){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function l(u){const h=[],m=u.index,g=u.attributes.position;let _=0;if(g===void 0)return;if(m!==null){const M=m.array;_=m.version;for(let b=0,y=M.length;b<y;b+=3){const R=M[b+0],A=M[b+1],C=M[b+2];h.push(R,A,A,C,C,R)}}else{const M=g.array;_=g.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const R=b+0,A=b+1,C=b+2;h.push(R,A,A,C,C,R)}}const p=new(g.count>=65535?Ll:Pl)(h,1);p.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,p)}function d(u){const h=r.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function Vf(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,m){i.drawElements(n,m,r,h*a),t.update(m,n,1)}function l(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,h*a,g),t.update(m,n,g))}function d(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function u(h,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)l(h[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,h,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=m[M]*_[M];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Gf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kf(i,e,t){const n=new WeakMap,s=new ot;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let H=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",H)};var m=H;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let R=o.attributes.position.count*y,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*u),v=new wl(C,R,A,u);v.type=$t,v.needsUpdate=!0;const E=y*4;for(let w=0;w<u;w++){const N=f[w],B=M[w],W=b[w],z=R*A*4*w;for(let G=0;G<N.count;G++){const F=G*E;g===!0&&(s.fromBufferAttribute(N,G),C[z+F+0]=s.x,C[z+F+1]=s.y,C[z+F+2]=s.z,C[z+F+3]=0),_===!0&&(s.fromBufferAttribute(B,G),C[z+F+4]=s.x,C[z+F+5]=s.y,C[z+F+6]=s.z,C[z+F+7]=0),p===!0&&(s.fromBufferAttribute(W,G),C[z+F+8]=s.x,C[z+F+9]=s.y,C[z+F+10]=s.z,C[z+F+11]=W.itemSize===4?s.w:1)}}h={count:u,texture:v,size:new ze(R,A)},n.set(o,h),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Hf(i,e,t,n,s){let r=new WeakMap;function a(l){const d=s.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return h}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Wf={[fl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[xl]:"NEUTRAL_TONE_MAPPING",[gl]:"CUSTOM_TONE_MAPPING"};function Xf(i,e,t,n,s){const r=new sn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new sn(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),o=new Dt;o.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ht([0,2,0,0,2,0],2));const c=new Ih({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ge(o,c),d=new zl(-1,1,1,-1,0,1);let u=null,h=null,m=!1,g,_=null,p=[],f=!1;this.setSize=function(M,b){r.setSize(M,b),a.setSize(M,b);for(let y=0;y<p.length;y++){const R=p[y];R.setSize&&R.setSize(M,b)}},this.setEffects=function(M){p=M,f=p.length>0&&p[0].isRenderPass===!0;const b=r.width,y=r.height;for(let R=0;R<p.length;R++){const A=p[R];A.setSize&&A.setSize(b,y)}},this.begin=function(M,b){if(m||M.toneMapping===nn&&p.length===0)return!1;if(_=b,b!==null){const y=b.width,R=b.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return f===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=nn,!0},this.hasRenderPass=function(){return f},this.end=function(M,b){M.toneMapping=g,m=!0;let y=r,R=a;for(let A=0;A<p.length;A++){const C=p[A];if(C.enabled!==!1&&(C.render(M,R,y,b),C.needsSwap!==!1)){const v=y;y=R,R=v}}if(u!==M.outputColorSpace||h!==M.toneMapping){u=M.outputColorSpace,h=M.toneMapping,c.defines={},Xe.getTransfer(u)===Ze&&(c.defines.SRGB_TRANSFER="");const A=Wf[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(_),M.render(l,d),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const kl=new At,Ma=new Zi(1,1),Hl=new wl,Wl=new oh,Xl=new Ul,$o=[],Ko=[],Zo=new Float32Array(16),jo=new Float32Array(9),Jo=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=$o[s];if(r===void 0&&(r=new Float32Array(s),$o[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xs(i,e){let t=Ko[e];t===void 0&&(t=new Int32Array(e),Ko[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Jo.set(n),i.uniformMatrix2fv(this.addr,!1,Jo),pt(t,n)}}function jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;jo.set(n),i.uniformMatrix3fv(this.addr,!1,jo),pt(t,n)}}function Jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Zo.set(n),i.uniformMatrix4fv(this.addr,!1,Zo),pt(t,n)}}function Qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function ip(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function op(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ma.compareFunction=t.isReversedDepthBuffer()?Ba:Oa,r=Ma):r=kl,t.setTexture2D(e||r,s)}function lp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wl,s)}function cp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xl,s)}function hp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hl,s)}function up(i){switch(i){case 5126:return qf;case 35664:return Yf;case 35665:return $f;case 35666:return Kf;case 35674:return Zf;case 35675:return jf;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return sp;case 36295:return rp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return hp}}function dp(i,e){i.uniform1fv(this.addr,e)}function fp(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function pp(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function mp(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function gp(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _p(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xp(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vp(i,e){i.uniform1iv(this.addr,e)}function Mp(i,e){i.uniform2iv(this.addr,e)}function Sp(i,e){i.uniform3iv(this.addr,e)}function yp(i,e){i.uniform4iv(this.addr,e)}function Ep(i,e){i.uniform1uiv(this.addr,e)}function bp(i,e){i.uniform2uiv(this.addr,e)}function Tp(i,e){i.uniform3uiv(this.addr,e)}function Ap(i,e){i.uniform4uiv(this.addr,e)}function wp(i,e,t){const n=this.cache,s=e.length,r=Xs(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ma:a=kl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Cp(i,e,t){const n=this.cache,s=e.length,r=Xs(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wl,r[a])}function Rp(i,e,t){const n=this.cache,s=e.length,r=Xs(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xl,r[a])}function Pp(i,e,t){const n=this.cache,s=e.length,r=Xs(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hl,r[a])}function Lp(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return xp;case 5124:case 35670:return vp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return yp;case 5125:return Ep;case 36294:return bp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=up(t.type)}}class Ip{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lp(t.type)}}class Up{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Qo(i,e){i.seq.push(e),i.map[e.id]=e}function Np(i,e,t){const n=i.name,s=n.length;for(Ar.lastIndex=0;;){const r=Ar.exec(n),a=Ar.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Qo(t,l===void 0?new Dp(o,i,e):new Ip(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Up(o),Qo(t,u)),t=u}}}class Is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Np(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function el(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fp=37297;let Op=0;function Bp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const tl=new Ie;function zp(i){Xe._getMatrix(tl,Xe.workingColorSpace,i);const e=`mat3( ${tl.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Us:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Bp(i.getShaderSource(e),o)}else return r}function Vp(i,e){const t=zp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Gp={[fl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[Ca]:"ACESFilmic",[_l]:"AgX",[xl]:"Neutral",[gl]:"Custom"};function kp(i,e){const t=Gp[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ws=new L;function Hp(){Xe.getLuminanceCoefficients(ws);const i=ws.x.toFixed(4),e=ws.y.toFixed(4),t=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function Xp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function il(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(Yp,Kp)}const $p=new Map;function Kp(i,e){let t=Ne[e];if(t===void 0){const n=$p.get(e);if(n!==void 0)t=Ne[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sa(t)}const Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(i){return i.replace(Zp,jp)}function jp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function al(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Jp={[Cs]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function Qp(i){return Jp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const em={[Kn]:"ENVMAP_TYPE_CUBE",[Ei]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE_UV"};function tm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":em[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const nm={[Ei]:"ENVMAP_MODE_REFRACTION"};function im(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sm={[wa]:"ENVMAP_BLENDING_MULTIPLY",[Tc]:"ENVMAP_BLENDING_MIX",[Ac]:"ENVMAP_BLENDING_ADD"};function rm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sm[i.combine]||"ENVMAP_BLENDING_NONE"}function am(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function om(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Qp(t),l=tm(t),d=im(t),u=rm(t),h=am(t),m=Wp(t),g=Xp(r),_=s.createProgram();let p,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),f.length>0&&(f+=`
`)):(p=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),f=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==nn?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Vp("linearToOutputTexel",t.outputColorSpace),Hp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Sa(a),a=il(a,t),a=sl(a,t),o=Sa(o),o=il(o,t),o=sl(o,t),a=rl(a),o=rl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+p+a,y=M+f+o,R=el(s,s.VERTEX_SHADER,b),A=el(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(w){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(A)||"",z=N.trim(),G=B.trim(),F=W.trim();let Q=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{const ce=nl(s,R,"vertex"),pe=nl(s,A,"fragment");We("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+ce+`
`+pe)}else z!==""?we("WebGLProgram: Program Info Log:",z):(G===""||F==="")&&(Z=!1);Z&&(w.diagnostics={runnable:Q,programLog:z,vertexShader:{log:G,prefix:p},fragmentShader:{log:F,prefix:f}})}s.deleteShader(R),s.deleteShader(A),v=new Is(s,_),E=qp(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(_,Fp)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Op++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hm(e),t.set(e,n)),n}}class hm{constructor(e){this.id=lm++,this.code=e,this.usedTimes=0}}function um(i,e,t,n,s,r){const a=new Ga,o=new cm,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,E,H,w,N){const B=w.fog,W=N.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||z,G),Q=F&&F.mapping===ks?F.image.height:null,Z=m[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&we("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ce!==void 0?ce.length:0;let ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let Ue,rt,st,$;if(Z){const Ke=en[Z];Ue=Ke.vertexShader,rt=Ke.fragmentShader}else Ue=v.vertexShader,rt=v.fragmentShader,o.update(v),st=o.getVertexShaderID(v),$=o.getFragmentShaderID(v);const ne=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,Ce=!!v.map,mt=!!v.matcap,ke=!!F,$e=!!v.aoMap,et=!!v.lightMap,Fe=!!v.bumpMap,lt=!!v.normalMap,P=!!v.displacementMap,ut=!!v.emissiveMap,Ye=!!v.metalnessMap,nt=!!v.roughnessMap,Me=v.anisotropy>0,T=v.clearcoat>0,x=v.dispersion>0,I=v.iridescence>0,Y=v.sheen>0,K=v.transmission>0,q=Me&&!!v.anisotropyMap,me=T&&!!v.clearcoatMap,ie=T&&!!v.clearcoatNormalMap,be=T&&!!v.clearcoatRoughnessMap,Ae=I&&!!v.iridescenceMap,j=I&&!!v.iridescenceThicknessMap,ee=Y&&!!v.sheenColorMap,ge=Y&&!!v.sheenRoughnessMap,xe=!!v.specularMap,he=!!v.specularColorMap,Oe=!!v.specularIntensityMap,D=K&&!!v.transmissionMap,se=K&&!!v.thicknessMap,te=!!v.gradientMap,fe=!!v.alphaMap,J=v.alphaTest>0,X=!!v.alphaHash,_e=!!v.extensions;let Re=nn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=i.toneMapping);const it={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:rt,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ti,alphaToCoverage:!!v.alphaToCoverage,map:Ce,matcap:mt,envMap:ke,envMapMode:ke&&F.mapping,envMapCubeUVHeight:Q,aoMap:$e,lightMap:et,bumpMap:Fe,normalMap:lt,displacementMap:P,emissiveMap:ut,normalMapObjectSpace:lt&&v.normalMapType===Rc,normalMapTangentSpace:lt&&v.normalMapType===Fa,metalnessMap:Ye,roughnessMap:nt,anisotropy:Me,anisotropyMap:q,clearcoat:T,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:be,dispersion:x,iridescence:I,iridescenceMap:Ae,iridescenceThicknessMap:j,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:ge,specularMap:xe,specularColorMap:he,specularIntensityMap:Oe,transmission:K,transmissionMap:D,thicknessMap:se,gradientMap:te,opaque:v.transparent===!1&&v.blending===vi&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:X,combine:v.combine,mapUv:Ce&&g(v.map.channel),aoMapUv:$e&&g(v.aoMap.channel),lightMapUv:et&&g(v.lightMap.channel),bumpMapUv:Fe&&g(v.bumpMap.channel),normalMapUv:lt&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:ut&&g(v.emissiveMap.channel),metalnessMapUv:Ye&&g(v.metalnessMap.channel),roughnessMapUv:nt&&g(v.roughnessMap.channel),anisotropyMapUv:q&&g(v.anisotropyMap.channel),clearcoatMapUv:me&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(v.sheenRoughnessMap.channel),specularMapUv:xe&&g(v.specularMap.channel),specularColorMapUv:he&&g(v.specularColorMap.channel),specularIntensityMapUv:Oe&&g(v.specularIntensityMap.channel),transmissionMapUv:D&&g(v.transmissionMap.channel),thicknessMapUv:se&&g(v.thicknessMap.channel),alphaMapUv:fe&&g(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(lt||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ce||fe),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:re,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===Ze,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===Ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bt,flipSided:v.side===Pt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)E.push(H),E.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(f(E,v),M(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function f(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const E=m[v.type];let H;if(E){const w=en[E];H=Ph.clone(w.uniforms)}else H=v.uniforms;return H}function y(v,E){let H=d.get(E);return H!==void 0?++H.usedTimes:(H=new om(i,E,v,s),l.push(H),d.set(E,H)),H}function R(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:C}}function dm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function fm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ol(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ll(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,g,_,p,f){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:f},i[e]=M):(M.id=h.id,M.object=h,M.geometry=m,M.material=g,M.materialVariant=a(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=p,M.group=f),e++,M}function c(h,m,g,_,p,f){const M=o(h,m,g,_,p,f);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(h,m,g,_,p,f){const M=o(h,m,g,_,p,f);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function d(h,m){t.length>1&&t.sort(h||fm),n.length>1&&n.sort(m||ol),s.length>1&&s.sort(m||ol)}function u(){for(let h=e,m=i.length;h<m;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:d}}function pm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ll,i.set(n,[a])):s>=r.length?(a=new ll,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function gm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _m=0;function xm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vm(i){const e=new mm,t=gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new je,a=new je;function o(l){let d=0,u=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,M=0,b=0,y=0,R=0,A=0,C=0;l.sort(xm);for(let E=0,H=l.length;E<H;E++){const w=l[E],N=w.color,B=w.intensity,W=w.distance;let z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===bi?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=N.r*B,u+=N.g*B,h+=N.b*B;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],B);C++}else if(w.isDirectionalLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const F=w.shadow,Q=t.get(w);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=w.shadow.matrix,M++}n.directional[m]=G,m++}else if(w.isSpotLight){const G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[_]=G;const F=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,F.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[_]=F.matrix,w.castShadow){const Q=t.get(w);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=z,y++}_++}else if(w.isRectAreaLight){const G=e.get(w);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=G,p++}else if(w.isPointLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const F=w.shadow,Q=t.get(w);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,Q.shadowCameraNear=F.camera.near,Q.shadowCameraFar=F.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=w.shadow.matrix,b++}n.point[g]=G,g++}else if(w.isHemisphereLight){const G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(B),G.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==m||v.pointLength!==g||v.spotLength!==_||v.rectAreaLength!==p||v.hemiLength!==f||v.numDirectionalShadows!==M||v.numPointShadows!==b||v.numSpotShadows!==y||v.numSpotMaps!==R||v.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,v.directionalLength=m,v.pointLength=g,v.spotLength=_,v.rectAreaLength=p,v.hemiLength=f,v.numDirectionalShadows=M,v.numPointShadows=b,v.numSpotShadows=y,v.numSpotMaps=R,v.numLightProbes=C,n.version=_m++)}function c(l,d){let u=0,h=0,m=0,g=0,_=0;const p=d.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const b=l[f];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(b.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function cl(i){const e=new vm(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Mm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new cl(i),e.set(s,[o])):r>=a.length?(o=new cl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
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
}`,Em=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],bm=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],hl=new je,Vi=new L,wr=new L;function Tm(i,e,t){let n=new Ha;const s=new ze,r=new ze,a=new ot,o=new Nh,c=new Fh,l={},d=t.maxTextureSize,u={[In]:Pt,[Pt]:In,[bt]:bt},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Sm,fragmentShader:ym}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ge(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let f=this.type;this.render=function(A,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===ac&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cs);const E=i.getRenderTarget(),H=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),N=i.state;N.setBlending(_n),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==this.type;B&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(z=>z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,z=A.length;W<z;W++){const G=A[W],F=G.shadow;if(F===void 0){we("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Q=F.getFrameExtents();s.multiply(Q),r.copy(F.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,F.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,F.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Gi){if(G.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new sn(s.x,s.y,{format:bi,type:Mn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new Zi(s.x,s.y,$t),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=Sn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Mt,F.map.depthTexture.magFilter=Mt}else G.isPointLight?(F.map=new Gl(s.x),F.map.depthTexture=new wh(s.x,rn)):(F.map=new sn(s.x,s.y),F.map.depthTexture=new Zi(s.x,s.y,rn)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=Sn,this.type===Cs?(F.map.depthTexture.compareFunction=Z?Ba:Oa,F.map.depthTexture.minFilter=Tt,F.map.depthTexture.magFilter=Tt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Mt,F.map.depthTexture.magFilter=Mt);F.camera.updateProjectionMatrix()}const ce=F.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ce;pe++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(F.map),i.clear());const ue=F.getViewport(pe);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),N.viewport(a)}if(G.isPointLight){const ue=F.camera,Ue=F.matrix,rt=G.distance||ue.far;rt!==ue.far&&(ue.far=rt,ue.updateProjectionMatrix()),Vi.setFromMatrixPosition(G.matrixWorld),ue.position.copy(Vi),wr.copy(ue.position),wr.add(Em[pe]),ue.up.copy(bm[pe]),ue.lookAt(wr),ue.updateMatrixWorld(),Ue.makeTranslation(-Vi.x,-Vi.y,-Vi.z),hl.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),F._frustum.setFromProjectionMatrix(hl,ue.coordinateSystem,ue.reversedDepth)}else F.updateMatrices(G);n=F.getFrustum(),y(C,v,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===Gi&&M(F,v),F.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(E,H,w)};function M(A,C){const v=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sn(s.x,s.y,{format:bi,type:Mn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,v,m,_,null)}function b(A,C,v,E){let H=null;const w=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)H=w;else if(H=v.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=H.uuid,B=C.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let z=W[B];z===void 0&&(z=H.clone(),W[B]=z,C.addEventListener("dispose",R)),H=z}if(H.visible=C.visible,H.wireframe=C.wireframe,E===Gi?H.side=C.shadowSide!==null?C.shadowSide:C.side:H.side=C.shadowSide!==null?C.shadowSide:u[C.side],H.alphaMap=C.alphaMap,H.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,H.map=C.map,H.clipShadows=C.clipShadows,H.clippingPlanes=C.clippingPlanes,H.clipIntersection=C.clipIntersection,H.displacementMap=C.displacementMap,H.displacementScale=C.displacementScale,H.displacementBias=C.displacementBias,H.wireframeLinewidth=C.wireframeLinewidth,H.linewidth=C.linewidth,v.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const N=i.properties.get(H);N.light=v}return H}function y(A,C,v,E,H){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&H===Gi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const z=B.groups;for(let G=0,F=z.length;G<F;G++){const Q=z[G],Z=W[Q.materialIndex];if(Z&&Z.visible){const ce=b(A,Z,E,H);A.onBeforeShadow(i,A,C,v,B,ce,Q),i.renderBufferDirect(v,null,B,ce,A,Q),A.onAfterShadow(i,A,C,v,B,ce,Q)}}}else if(W.visible){const z=b(A,W,E,H);A.onBeforeShadow(i,A,C,v,B,z,null),i.renderBufferDirect(v,null,B,z,A,null),A.onAfterShadow(i,A,C,v,B,z,null)}}const N=A.children;for(let B=0,W=N.length;B<W;B++)y(N[B],C,v,E,H)}function R(A){A.target.removeEventListener("dispose",R);for(const v in l){const E=l[v],H=A.target.uuid;H in E&&(E[H].dispose(),delete E[H])}}}function Am(i,e){function t(){let D=!1;const se=new ot;let te=null;const fe=new ot(0,0,0,0);return{setMask:function(J){te!==J&&!D&&(i.colorMask(J,J,J,J),te=J)},setLocked:function(J){D=J},setClear:function(J,X,_e,Re,it){it===!0&&(J*=Re,X*=Re,_e*=Re),se.set(J,X,_e,Re),fe.equals(se)===!1&&(i.clearColor(J,X,_e,Re),fe.copy(se))},reset:function(){D=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,te=null,fe=null,J=null;return{setReversed:function(X){if(se!==X){const _e=e.get("EXT_clip_control");X?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=X;const Re=J;J=null,this.setClear(Re)}},getReversed:function(){return se},setTest:function(X){X?ne(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(X){te!==X&&!D&&(i.depthMask(X),te=X)},setFunc:function(X){if(se&&(X=zc[X]),fe!==X){switch(X){case Lr:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Ir:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case Ur:i.depthFunc(i.EQUAL);break;case Nr:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case Or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=X}},setLocked:function(X){D=X},setClear:function(X){J!==X&&(J=X,se&&(X=1-X),i.clearDepth(X))},reset:function(){D=!1,te=null,fe=null,J=null,se=!1}}}function s(){let D=!1,se=null,te=null,fe=null,J=null,X=null,_e=null,Re=null,it=null;return{setTest:function(Ke){D||(Ke?ne(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!D&&(i.stencilMask(Ke),se=Ke)},setFunc:function(Ke,on,ln){(te!==Ke||fe!==on||J!==ln)&&(i.stencilFunc(Ke,on,ln),te=Ke,fe=on,J=ln)},setOp:function(Ke,on,ln){(X!==Ke||_e!==on||Re!==ln)&&(i.stencilOp(Ke,on,ln),X=Ke,_e=on,Re=ln)},setLocked:function(Ke){D=Ke},setClear:function(Ke){it!==Ke&&(i.clearStencil(Ke),it=Ke)},reset:function(){D=!1,se=null,te=null,fe=null,J=null,X=null,_e=null,Re=null,it=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,m=[],g=null,_=!1,p=null,f=null,M=null,b=null,y=null,R=null,A=null,C=new Pe(0,0,0),v=0,E=!1,H=null,w=null,N=null,B=null,W=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=F>=1):Q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=F>=2);let Z=null,ce={};const pe=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Ue=new ot().fromArray(pe),rt=new ot().fromArray(ue);function st(D,se,te,fe){const J=new Uint8Array(4),X=i.createTexture();i.bindTexture(D,X),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<te;_e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(se+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return X}const $={};$[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(yi),Fe(!1),lt(so),ne(i.CULL_FACE),$e(_n);function ne(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function re(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function De(D,se){return u[D]!==se?(i.bindFramebuffer(D,se),u[D]=se,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Te(D,se){let te=m,fe=!1;if(D){te=h.get(se),te===void 0&&(te=[],h.set(se,te));const J=D.textures;if(te.length!==J.length||te[0]!==i.COLOR_ATTACHMENT0){for(let X=0,_e=J.length;X<_e;X++)te[X]=i.COLOR_ATTACHMENT0+X;te.length=J.length,fe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,fe=!0);fe&&i.drawBuffers(te)}function Ce(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const mt={[Wn]:i.FUNC_ADD,[lc]:i.FUNC_SUBTRACT,[cc]:i.FUNC_REVERSE_SUBTRACT};mt[hc]=i.MIN,mt[uc]=i.MAX;const ke={[dc]:i.ZERO,[fc]:i.ONE,[pc]:i.SRC_COLOR,[Rr]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[xc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[mc]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[vc]:i.ONE_MINUS_DST_COLOR,[_c]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[Ec]:i.CONSTANT_ALPHA,[bc]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(D,se,te,fe,J,X,_e,Re,it,Ke){if(D===_n){_===!0&&(re(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),D!==oc){if(D!==p||Ke!==E){if((f!==Wn||y!==Wn)&&(i.blendEquation(i.FUNC_ADD),f=Wn,y=Wn),Ke)switch(D){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ro:i.blendFunc(i.ONE,i.ONE);break;case ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",D);break}else switch(D){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ao:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oo:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",D);break}M=null,b=null,R=null,A=null,C.set(0,0,0),v=0,p=D,E=Ke}return}J=J||se,X=X||te,_e=_e||fe,(se!==f||J!==y)&&(i.blendEquationSeparate(mt[se],mt[J]),f=se,y=J),(te!==M||fe!==b||X!==R||_e!==A)&&(i.blendFuncSeparate(ke[te],ke[fe],ke[X],ke[_e]),M=te,b=fe,R=X,A=_e),(Re.equals(C)===!1||it!==v)&&(i.blendColor(Re.r,Re.g,Re.b,it),C.copy(Re),v=it),p=D,E=!1}function et(D,se){D.side===bt?re(i.CULL_FACE):ne(i.CULL_FACE);let te=D.side===Pt;se&&(te=!te),Fe(te),D.blending===vi&&D.transparent===!1?$e(_n):$e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){H!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),H=D)}function lt(D){D!==sc?(ne(i.CULL_FACE),D!==w&&(D===so?i.cullFace(i.BACK):D===rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),w=D}function P(D){D!==N&&(G&&i.lineWidth(D),N=D)}function ut(D,se,te){D?(ne(i.POLYGON_OFFSET_FILL),(B!==se||W!==te)&&(B=se,W=te,a.getReversed()&&(se=-se),i.polygonOffset(se,te))):re(i.POLYGON_OFFSET_FILL)}function Ye(D){D?ne(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function nt(D){D===void 0&&(D=i.TEXTURE0+z-1),Z!==D&&(i.activeTexture(D),Z=D)}function Me(D,se,te){te===void 0&&(Z===null?te=i.TEXTURE0+z-1:te=Z);let fe=ce[te];fe===void 0&&(fe={type:void 0,texture:void 0},ce[te]=fe),(fe.type!==D||fe.texture!==se)&&(Z!==te&&(i.activeTexture(te),Z=te),i.bindTexture(D,se||$[D]),fe.type=D,fe.texture=se)}function T(){const D=ce[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function Y(){try{i.texSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function K(){try{i.texSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function me(){try{i.compressedTexSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function ie(){try{i.texStorage2D(...arguments)}catch(D){We("WebGLState:",D)}}function be(){try{i.texStorage3D(...arguments)}catch(D){We("WebGLState:",D)}}function Ae(){try{i.texImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function j(){try{i.texImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function ee(D){Ue.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ue.copy(D))}function ge(D){rt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),rt.copy(D))}function xe(D,se){let te=l.get(se);te===void 0&&(te=new WeakMap,l.set(se,te));let fe=te.get(D);fe===void 0&&(fe=i.getUniformBlockIndex(se,D.name),te.set(D,fe))}function he(D,se){const fe=l.get(se).get(D);c.get(se)!==fe&&(i.uniformBlockBinding(se,fe,D.__bindingPointIndex),c.set(se,fe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,ce={},u={},h=new WeakMap,m=[],g=null,_=!1,p=null,f=null,M=null,b=null,y=null,R=null,A=null,C=new Pe(0,0,0),v=0,E=!1,H=null,w=null,N=null,B=null,W=null,Ue.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:re,bindFramebuffer:De,drawBuffers:Te,useProgram:Ce,setBlending:$e,setMaterial:et,setFlipSided:Fe,setCullFace:lt,setLineWidth:P,setPolygonOffset:ut,setScissorTest:Ye,activeTexture:nt,bindTexture:Me,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:Ae,texImage3D:j,updateUBOMapping:xe,uniformBlockBinding:he,texStorage2D:ie,texStorage3D:be,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:me,scissor:ee,viewport:ge,reset:Oe}}function wm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,d=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):Ns("canvas")}function _(T,x,I){let Y=1;const K=Me(T);if((K.width>I||K.height>I)&&(Y=I/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*K.width),me=Math.floor(Y*K.height);u===void 0&&(u=g(q,me));const ie=x?g(q,me):u;return ie.width=q,ie.height=me,ie.getContext("2d").drawImage(T,0,0,q,me),we("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+me+")."),ie}else return"data"in T&&we("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function p(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,I,Y,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===i.RED&&(I===i.FLOAT&&(q=i.R32F),I===i.HALF_FLOAT&&(q=i.R16F),I===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.R8UI),I===i.UNSIGNED_SHORT&&(q=i.R16UI),I===i.UNSIGNED_INT&&(q=i.R32UI),I===i.BYTE&&(q=i.R8I),I===i.SHORT&&(q=i.R16I),I===i.INT&&(q=i.R32I)),x===i.RG&&(I===i.FLOAT&&(q=i.RG32F),I===i.HALF_FLOAT&&(q=i.RG16F),I===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RG8UI),I===i.UNSIGNED_SHORT&&(q=i.RG16UI),I===i.UNSIGNED_INT&&(q=i.RG32UI),I===i.BYTE&&(q=i.RG8I),I===i.SHORT&&(q=i.RG16I),I===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGB8UI),I===i.UNSIGNED_SHORT&&(q=i.RGB16UI),I===i.UNSIGNED_INT&&(q=i.RGB32UI),I===i.BYTE&&(q=i.RGB8I),I===i.SHORT&&(q=i.RGB16I),I===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),I===i.UNSIGNED_INT&&(q=i.RGBA32UI),I===i.BYTE&&(q=i.RGBA8I),I===i.SHORT&&(q=i.RGBA16I),I===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){const me=K?Us:Xe.getTransfer(Y);I===i.FLOAT&&(q=i.RGBA32F),I===i.HALF_FLOAT&&(q=i.RGBA16F),I===i.UNSIGNED_BYTE&&(q=me===Ze?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(T,x){let I;return T?x===null||x===rn||x===Yi?I=i.DEPTH24_STENCIL8:x===$t?I=i.DEPTH32F_STENCIL8:x===qi&&(I=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===rn||x===Yi?I=i.DEPTH_COMPONENT24:x===$t?I=i.DEPTH_COMPONENT32F:x===qi&&(I=i.DEPTH_COMPONENT16),I}function R(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Mt&&T.minFilter!==Tt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),v(x),x.isVideoTexture&&d.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),H(x)}function v(T){const x=n.get(T);if(x.__webglInit===void 0)return;const I=T.source,Y=h.get(I);if(Y){const K=Y[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(T),Object.keys(Y).length===0&&h.delete(I)}n.remove(T)}function E(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const I=T.source,Y=h.get(I);delete Y[x.__cacheKey],a.memory.textures--}function H(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let K=0;K<x.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=T.textures;for(let Y=0,K=I.length;Y<K;Y++){const q=n.get(I[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(I[Y])}n.remove(T)}let w=0;function N(){w=0}function B(){const T=w;return T>=s.maxTextures&&we("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),w+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function z(T,x){const I=n.get(T);if(T.isVideoTexture&&Ye(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const Y=T.image;if(Y===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,T,x);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function G(T,x){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){$(I,T,x);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function F(T,x){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){$(I,T,x);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function Q(T,x){const I=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){ne(I,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}const Z={[Xi]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},ce={[Mt]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[Zs]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},pe={[Pc]:i.NEVER,[Nc]:i.ALWAYS,[Lc]:i.LESS,[Oa]:i.LEQUAL,[Dc]:i.EQUAL,[Ba]:i.GEQUAL,[Ic]:i.GREATER,[Uc]:i.NOTEQUAL};function ue(T,x){if(x.type===$t&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Tt||x.magFilter===Zs||x.magFilter===es||x.magFilter===qn||x.minFilter===Tt||x.minFilter===Zs||x.minFilter===es||x.minFilter===qn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Z[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Z[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Z[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Mt||x.minFilter!==es&&x.minFilter!==qn||x.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ue(T,x){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const Y=x.source;let K=h.get(Y);K===void 0&&(K={},h.set(Y,K));const q=W(x);if(q!==T.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),K[q].usedTimes++;const me=K[T.__cacheKey];me!==void 0&&(K[T.__cacheKey].usedTimes--,me.usedTimes===0&&E(x)),T.__cacheKey=q,T.__webglTexture=K[q].texture}return I}function rt(T,x,I){return Math.floor(Math.floor(T/I)/x)}function st(T,x,I,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,I,Y,x.data);else{q.sort((j,ee)=>j.start-ee.start);let me=0;for(let j=1;j<q.length;j++){const ee=q[me],ge=q[j],xe=ee.start+ee.count,he=rt(ge.start,x.width,4),Oe=rt(ee.start,x.width,4);ge.start<=xe+1&&he===Oe&&rt(ge.start+ge.count-1,x.width,4)===he?ee.count=Math.max(ee.count,ge.start+ge.count-ee.start):(++me,q[me]=ge)}q.length=me+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let j=0,ee=q.length;j<ee;j++){const ge=q[j],xe=Math.floor(ge.start/4),he=Math.ceil(ge.count/4),Oe=xe%x.width,D=Math.floor(xe/x.width),se=he,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Oe,D,se,te,I,Y,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function $(T,x,I){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const K=Ue(T,x),q=x.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+I);const me=n.get(q);if(q.version!==me.__version||K===!0){t.activeTexture(i.TEXTURE0+I);const ie=Xe.getPrimaries(Xe.workingColorSpace),be=x.colorSpace===Pn?null:Xe.getPrimaries(x.colorSpace),Ae=x.colorSpace===Pn||ie===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let j=_(x.image,!1,s.maxTextureSize);j=nt(x,j);const ee=r.convert(x.format,x.colorSpace),ge=r.convert(x.type);let xe=b(x.internalFormat,ee,ge,x.colorSpace,x.isVideoTexture);ue(Y,x);let he;const Oe=x.mipmaps,D=x.isVideoTexture!==!0,se=me.__version===void 0||K===!0,te=q.dataReady,fe=R(x,j);if(x.isDepthTexture)xe=y(x.format===Yn,x.type),se&&(D?t.texStorage2D(i.TEXTURE_2D,1,xe,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,xe,j.width,j.height,0,ee,ge,null));else if(x.isDataTexture)if(Oe.length>0){D&&se&&t.texStorage2D(i.TEXTURE_2D,fe,xe,Oe[0].width,Oe[0].height);for(let J=0,X=Oe.length;J<X;J++)he=Oe[J],D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,ee,ge,he.data):t.texImage2D(i.TEXTURE_2D,J,xe,he.width,he.height,0,ee,ge,he.data);x.generateMipmaps=!1}else D?(se&&t.texStorage2D(i.TEXTURE_2D,fe,xe,j.width,j.height),te&&st(x,j,ee,ge)):t.texImage2D(i.TEXTURE_2D,0,xe,j.width,j.height,0,ee,ge,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,xe,Oe[0].width,Oe[0].height,j.depth);for(let J=0,X=Oe.length;J<X;J++)if(he=Oe[J],x.format!==Kt)if(ee!==null)if(D){if(te)if(x.layerUpdates.size>0){const _e=ko(he.width,he.height,x.format,x.type);for(const Re of x.layerUpdates){const it=he.data.subarray(Re*_e/he.data.BYTES_PER_ELEMENT,(Re+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Re,he.width,he.height,1,ee,it)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,j.depth,ee,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,xe,he.width,he.height,j.depth,0,he.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,j.depth,ee,ge,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,xe,he.width,he.height,j.depth,0,ee,ge,he.data)}else{D&&se&&t.texStorage2D(i.TEXTURE_2D,fe,xe,Oe[0].width,Oe[0].height);for(let J=0,X=Oe.length;J<X;J++)he=Oe[J],x.format!==Kt?ee!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(i.TEXTURE_2D,J,xe,he.width,he.height,0,he.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,ee,ge,he.data):t.texImage2D(i.TEXTURE_2D,J,xe,he.width,he.height,0,ee,ge,he.data)}else if(x.isDataArrayTexture)if(D){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,xe,j.width,j.height,j.depth),te)if(x.layerUpdates.size>0){const J=ko(j.width,j.height,x.format,x.type);for(const X of x.layerUpdates){const _e=j.data.subarray(X*J/j.data.BYTES_PER_ELEMENT,(X+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,j.width,j.height,1,ee,ge,_e)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ee,ge,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,j.width,j.height,j.depth,0,ee,ge,j.data);else if(x.isData3DTexture)D?(se&&t.texStorage3D(i.TEXTURE_3D,fe,xe,j.width,j.height,j.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ee,ge,j.data)):t.texImage3D(i.TEXTURE_3D,0,xe,j.width,j.height,j.depth,0,ee,ge,j.data);else if(x.isFramebufferTexture){if(se)if(D)t.texStorage2D(i.TEXTURE_2D,fe,xe,j.width,j.height);else{let J=j.width,X=j.height;for(let _e=0;_e<fe;_e++)t.texImage2D(i.TEXTURE_2D,_e,xe,J,X,0,ee,ge,null),J>>=1,X>>=1}}else if(Oe.length>0){if(D&&se){const J=Me(Oe[0]);t.texStorage2D(i.TEXTURE_2D,fe,xe,J.width,J.height)}for(let J=0,X=Oe.length;J<X;J++)he=Oe[J],D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ee,ge,he):t.texImage2D(i.TEXTURE_2D,J,xe,ee,ge,he);x.generateMipmaps=!1}else if(D){if(se){const J=Me(j);t.texStorage2D(i.TEXTURE_2D,fe,xe,J.width,J.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,ge,j)}else t.texImage2D(i.TEXTURE_2D,0,xe,ee,ge,j);p(x)&&f(Y),me.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ne(T,x,I){if(x.image.length!==6)return;const Y=Ue(T,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+I);const q=n.get(K);if(K.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+I);const me=Xe.getPrimaries(Xe.workingColorSpace),ie=x.colorSpace===Pn?null:Xe.getPrimaries(x.colorSpace),be=x.colorSpace===Pn||me===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!Ae&&!j?ee[X]=_(x.image[X],!0,s.maxCubemapSize):ee[X]=j?x.image[X].image:x.image[X],ee[X]=nt(x,ee[X]);const ge=ee[0],xe=r.convert(x.format,x.colorSpace),he=r.convert(x.type),Oe=b(x.internalFormat,xe,he,x.colorSpace),D=x.isVideoTexture!==!0,se=q.__version===void 0||Y===!0,te=K.dataReady;let fe=R(x,ge);ue(i.TEXTURE_CUBE_MAP,x);let J;if(Ae){D&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Oe,ge.width,ge.height);for(let X=0;X<6;X++){J=ee[X].mipmaps;for(let _e=0;_e<J.length;_e++){const Re=J[_e];x.format!==Kt?xe!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,Re.width,Re.height,xe,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Oe,Re.width,Re.height,0,Re.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,Re.width,Re.height,xe,he,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Oe,Re.width,Re.height,0,xe,he,Re.data)}}}else{if(J=x.mipmaps,D&&se){J.length>0&&fe++;const X=Me(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Oe,X.width,X.height)}for(let X=0;X<6;X++)if(j){D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,xe,he,ee[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,ee[X].width,ee[X].height,0,xe,he,ee[X].data);for(let _e=0;_e<J.length;_e++){const it=J[_e].image[X].image;D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,it.width,it.height,xe,he,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Oe,it.width,it.height,0,xe,he,it.data)}}else{D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,he,ee[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,xe,he,ee[X]);for(let _e=0;_e<J.length;_e++){const Re=J[_e];D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,xe,he,Re.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Oe,xe,he,Re.image[X])}}}p(x)&&f(i.TEXTURE_CUBE_MAP),q.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function re(T,x,I,Y,K,q){const me=r.convert(I.format,I.colorSpace),ie=r.convert(I.type),be=b(I.internalFormat,me,ie,I.colorSpace),Ae=n.get(x),j=n.get(I);if(j.__renderTarget=x,!Ae.__hasExternalTextures){const ee=Math.max(1,x.width>>q),ge=Math.max(1,x.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,q,be,ee,ge,x.depth,0,me,ie,null):t.texImage2D(K,q,be,ee,ge,0,me,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,j.__webglTexture,0,P(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,j.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const Y=x.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,q=y(x.stencilBuffer,K),me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(x),q,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,T)}else{const Y=x.textures;for(let K=0;K<Y.length;K++){const q=Y[K],me=r.convert(q.format,q.colorSpace),ie=r.convert(q.type),be=b(q.internalFormat,me,ie,q.colorSpace);ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(x),be,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(x),be,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,be,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(T,x,I){const Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ue(i.TEXTURE_CUBE_MAP,x.depthTexture);const Ae=r.convert(x.depthTexture.format),j=r.convert(x.depthTexture.type);let ee;x.depthTexture.format===Sn?ee=i.DEPTH_COMPONENT24:x.depthTexture.format===Yn&&(ee=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ee,x.width,x.height,0,Ae,j,null)}}else z(x.depthTexture,0);const q=K.__webglTexture,me=P(x),ie=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,be=x.depthTexture.format===Yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Sn)ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,ie,q,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,be,ie,q,0);else if(x.depthTexture.format===Yn)ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,ie,q,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,be,ie,q,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const x=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)Te(x.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?Te(x.__webglFramebuffer[0],T,0):Te(x.__webglFramebuffer,T,0)}else if(I){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),De(x.__webglDepthbuffer[Y],T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),De(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(T,x,I){const Y=n.get(T);x!==void 0&&re(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ce(T)}function ke(T){const x=T.texture,I=n.get(T),Y=n.get(x);T.addEventListener("dispose",C);const K=T.textures,q=T.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),q){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let be=0;be<x.mipmaps.length;be++)I.__webglFramebuffer[ie][be]=i.createFramebuffer()}else I.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)I.__webglFramebuffer[ie]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(me)for(let ie=0,be=K.length;ie<be;ie++){const Ae=n.get(K[ie]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ut(T)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){const be=K[ie];I.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);const Ae=r.convert(be.format,be.colorSpace),j=r.convert(be.type),ee=b(be.internalFormat,Ae,j,be.colorSpace,T.isXRRenderTarget===!0),ge=P(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),De(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ue(i.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)re(I.__webglFramebuffer[ie][be],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be);else re(I.__webglFramebuffer[ie],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,be=K.length;ie<be;ie++){const Ae=K[ie],j=n.get(Ae);let ee=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,j.__webglTexture),ue(ee,Ae),re(I.__webglFramebuffer,T,Ae,i.COLOR_ATTACHMENT0+ie,ee,0),p(Ae)&&f(ee)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),ue(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)re(I.__webglFramebuffer[be],T,x,i.COLOR_ATTACHMENT0,ie,be);else re(I.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ie,0);p(x)&&f(ie),t.unbindTexture()}T.depthBuffer&&Ce(T)}function $e(T){const x=T.textures;for(let I=0,Y=x.length;I<Y;I++){const K=x[I];if(p(K)){const q=M(T),me=n.get(K).__webglTexture;t.bindTexture(q,me),f(q),t.unbindTexture()}}}const et=[],Fe=[];function lt(T){if(T.samples>0){if(ut(T)===!1){const x=T.textures,I=T.width,Y=T.height;let K=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(T),ie=x.length>1;if(ie)for(let Ae=0;Ae<x.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const be=T.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ae]);const j=n.get(x[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,I,Y,0,0,I,Y,K,i.NEAREST),c===!0&&(et.length=0,Fe.length=0,et.push(i.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(q),Fe.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Ae=0;Ae<x.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ae]);const j=n.get(x[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function P(T){return Math.min(s.maxSamples,T.samples)}function ut(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(T){const x=a.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function nt(T,x){const I=T.colorSpace,Y=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Ti&&I!==Pn&&(Xe.getTransfer(I)===Ze?(Y!==Kt||K!==Ot)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",I)),x}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=mt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cm(i,e){function t(n,s=Pn){let r;const a=Xe.getTransfer(s);if(n===Ot)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ml)return i.BYTE;if(n===Sl)return i.SHORT;if(n===qi)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===rn)return i.UNSIGNED_INT;if(n===$t)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===bl)return i.ALPHA;if(n===Tl)return i.RGB;if(n===Kt)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===Yn)return i.DEPTH_STENCIL;if(n===Da)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Rs||n===Ps||n===Ls||n===Ds)if(a===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zr||n===Vr||n===Gr||n===kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Kr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hr||n===Wr)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qr)return r.COMPRESSED_R11_EAC;if(n===Yr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Kr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zr||n===jr||n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===ua||n===da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pm=`
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

}`;class Lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:Rm,fragmentShader:Pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dm extends wi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,h=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Lm,f={},M=t.getContextAttributes();let b=null,y=null;const R=[],A=[],C=new ze;let v=null;const E=new Ft;E.viewport=new ot;const H=new Ft;H.viewport=new ot;const w=[E,H],N=new Gh;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=R[$];return ne===void 0&&(ne=new nr,R[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=R[$];return ne===void 0&&(ne=new nr,R[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=R[$];return ne===void 0&&(ne=new nr,R[$]=ne),ne.getHandSpace()};function z($){const ne=A.indexOf($.inputSource);if(ne===-1)return;const re=R[ne];re!==void 0&&(re.update($.inputSource,$.frame,l||a),re.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",F);for(let $=0;$<R.length;$++){const ne=A[$];ne!==null&&(A[$]=null,R[$].disconnect(ne))}B=null,W=null,p.reset();for(const $ in f)delete f[$];e.setRenderTarget(b),m=null,h=null,u=null,s=null,y=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,De=null,Te=null;M.depth&&(Te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?Yn:Sn,De=M.stencil?Yi:rn);const Ce={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new sn(h.textureWidth,h.textureHeight,{format:Kt,type:Ot,depthTexture:new Zi(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new sn(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:Ot,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F($){for(let ne=0;ne<$.removed.length;ne++){const re=$.removed[ne],De=A.indexOf(re);De>=0&&(A[De]=null,R[De].disconnect(re))}for(let ne=0;ne<$.added.length;ne++){const re=$.added[ne];let De=A.indexOf(re);if(De===-1){for(let Ce=0;Ce<R.length;Ce++)if(Ce>=A.length){A.push(re),De=Ce;break}else if(A[Ce]===null){A[Ce]=re,De=Ce;break}if(De===-1)break}const Te=R[De];Te&&Te.connect(re)}}const Q=new L,Z=new L;function ce($,ne,re){Q.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);const De=Q.distanceTo(Z),Te=ne.projectionMatrix.elements,Ce=re.projectionMatrix.elements,mt=Te[14]/(Te[10]-1),ke=Te[14]/(Te[10]+1),$e=(Te[9]+1)/Te[5],et=(Te[9]-1)/Te[5],Fe=(Te[8]-1)/Te[0],lt=(Ce[8]+1)/Ce[0],P=mt*Fe,ut=mt*lt,Ye=De/(-Fe+lt),nt=Ye*-Fe;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Me=mt+Ye,T=ke+Ye,x=P-nt,I=ut+(De-nt),Y=$e*ke/T*Me,K=et*ke/T*Me;$.projectionMatrix.makePerspective(x,I,Y,K,Me,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ne=$.near,re=$.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(re=p.depthFar)),N.near=H.near=E.near=ne,N.far=H.far=E.far=re,(B!==N.near||W!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,W=N.far),N.layers.mask=$.layers.mask|6,E.layers.mask=N.layers.mask&-5,H.layers.mask=N.layers.mask&-3;const De=$.parent,Te=N.cameras;pe(N,De);for(let Ce=0;Ce<Te.length;Ce++)pe(Te[Ce],De);Te.length===2?ce(N,E,H):N.projectionMatrix.copy(E.projectionMatrix),ue($,N,De)};function ue($,ne,re){re===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ki*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function($){return f[$]};let Ue=null;function rt($,ne){if(d=ne.getViewerPose(l||a),g=ne,d!==null){const re=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let De=!1;re.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let ke=0;ke<re.length;ke++){const $e=re[ke];let et=null;if(m!==null)et=m.getViewport($e);else{const lt=u.getViewSubImage(h,$e);et=lt.viewport,ke===0&&(e.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(y))}let Fe=w[ke];Fe===void 0&&(Fe=new Ft,Fe.layers.enable(ke),Fe.viewport=new ot,w[ke]=Fe),Fe.matrix.fromArray($e.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray($e.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(et.x,et.y,et.width,et.height),ke===0&&(N.matrix.copy(Fe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Fe)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const ke=u.getDepthInformation(re[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,s.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let ke=0;ke<re.length;ke++){const $e=re[ke].camera;if($e){let et=f[$e];et||(et=new Nl,f[$e]=et);const Fe=u.getCameraImage($e);et.sourceTexture=Fe}}}}for(let re=0;re<R.length;re++){const De=A[re],Te=R[re];De!==null&&Te!==void 0&&Te.update(De,ne,l||a)}Ue&&Ue($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const st=new Vl;st.setAnimationLoop(rt),this.setAnimationLoop=function($){Ue=$},this.dispose=function(){}}}const kn=new Bt,Im=new je;function Um(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Fl(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,b,y){f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),d(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,M,b):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f),b=M.envMap,y=M.envMapRotation;b&&(p.envMap.value=b,kn.copy(y),kn.x*=-1,kn.y*=-1,kn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),p.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler(kn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const y=b.program;n.uniformBlockBinding(M,y)}function l(M,b){let y=s[M.id];y===void 0&&(g(M),y=d(M),s[M.id]=y,M.addEventListener("dispose",p));const R=b.program;n.updateUBOMapping(M,R);const A=e.render.frame;r[M.id]!==A&&(h(M),r[M.id]=A)}function d(M){const b=u();M.__bindingPointIndex=b;const y=i.createBuffer(),R=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,C=y.length;A<C;A++){const v=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,H=v.length;E<H;E++){const w=v[E];if(m(w,A,E,R)===!0){const N=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let z=0;z<B.length;z++){const G=B[z],F=_(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+W,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,b,y,R){const A=M.value,C=b+"_"+y;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const v=R[C];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return R[C]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function g(M){const b=M.uniforms;let y=0;const R=16;for(let C=0,v=b.length;C<v;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let H=0,w=E.length;H<w;H++){const N=E[H],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,z=B.length;W<z;W++){const G=B[W],F=_(G),Q=y%R,Z=Q%F.boundary,ce=Q+Z;y+=Z,ce!==0&&R-ce<F.storage&&(y+=R-ce),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=F.storage}}}const A=y%R;return A>0&&(y+=R-A),M.__size=y,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",M),b}function p(M){const b=M.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}const Fm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qt=null;function Om(){return Qt===null&&(Qt=new Dl(Fm,16,16,bi,Mn),Qt.name="DFG_LUT",Qt.minFilter=Tt,Qt.magFilter=Tt,Qt.wrapS=pn,Qt.wrapT=pn,Qt.generateMipmaps=!1,Qt.needsUpdate=!0),Qt}class Bm{constructor(e={}){const{canvas:t=Oc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Ot}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=m,p=new Set([Na,Ua,Ia]),f=new Set([Ot,rn,qi,Yi,Pa,La]),M=new Uint32Array(4),b=new Int32Array(4);let y=null,R=null;const A=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let H=!1;this._outputColorSpace=Gt;let w=0,N=0,B=null,W=-1,z=null;const G=new ot,F=new ot;let Q=null;const Z=new Pe(0);let ce=0,pe=t.width,ue=t.height,Ue=1,rt=null,st=null;const $=new ot(0,0,pe,ue),ne=new ot(0,0,pe,ue);let re=!1;const De=new Ha;let Te=!1,Ce=!1;const mt=new je,ke=new L,$e=new ot,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function lt(){return B===null?Ue:1}let P=n;function ut(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",it,!1),P===null){const U="webgl2";if(P=ut(U,S),P===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw We("WebGLRenderer: "+S.message),S}let Ye,nt,Me,T,x,I,Y,K,q,me,ie,be,Ae,j,ee,ge,xe,he,Oe,D,se,te,fe;function J(){Ye=new Bf(P),Ye.init(),se=new Cm(P,Ye),nt=new Pf(P,Ye,e,se),Me=new Am(P,Ye),nt.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),T=new Gf(P),x=new dm,I=new wm(P,Ye,Me,x,nt,se,T),Y=new Of(E),K=new Xh(P),te=new Cf(P,K),q=new zf(P,K,T,te),me=new Hf(P,q,K,te,T),he=new kf(P,nt,I),ee=new Lf(x),ie=new um(E,Y,Ye,nt,te,ee),be=new Um(E,x),Ae=new pm,j=new Mm(Ye),xe=new wf(E,Y,Me,me,g,c),ge=new Tm(E,me,nt),fe=new Nm(P,T,nt,Me),Oe=new Rf(P,Ye,T),D=new Vf(P,Ye,T),T.programs=ie.programs,E.capabilities=nt,E.extensions=Ye,E.properties=x,E.renderLists=Ae,E.shadowMap=ge,E.state=Me,E.info=T}J(),_!==Ot&&(v=new Xf(_,t.width,t.height,s,r));const X=new Dm(E,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(S){S!==void 0&&(Ue=S,this.setSize(pe,ue,!1))},this.getSize=function(S){return S.set(pe,ue)},this.setSize=function(S,U,k=!0){if(X.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=S,ue=U,t.width=Math.floor(S*Ue),t.height=Math.floor(U*Ue),k===!0&&(t.style.width=S+"px",t.style.height=U+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(pe*Ue,ue*Ue).floor()},this.setDrawingBufferSize=function(S,U,k){pe=S,ue=U,Ue=k,t.width=Math.floor(S*k),t.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===Ot){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,U,k,V){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,U,k,V),Me.viewport(G.copy($).multiplyScalar(Ue).round())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,U,k,V){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,U,k,V),Me.scissor(F.copy(ne).multiplyScalar(Ue).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(S){Me.setScissorTest(re=S)},this.setOpaqueSort=function(S){rt=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,k=!0){let V=0;if(S){let O=!1;if(B!==null){const oe=B.texture.format;O=p.has(oe)}if(O){const oe=B.texture.type,de=f.has(oe),le=xe.getClearColor(),ve=xe.getClearAlpha(),ye=le.r,Le=le.g,Be=le.b;de?(M[0]=ye,M[1]=Le,M[2]=Be,M[3]=ve,P.clearBufferuiv(P.COLOR,0,M)):(b[0]=ye,b[1]=Le,b[2]=Be,b[3]=ve,P.clearBufferiv(P.COLOR,0,b))}else V|=P.COLOR_BUFFER_BIT}U&&(V|=P.DEPTH_BUFFER_BIT),k&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",it,!1),xe.dispose(),Ae.dispose(),j.dispose(),x.dispose(),Y.dispose(),me.dispose(),te.dispose(),fe.dispose(),ie.dispose(),X.dispose(),X.removeEventListener("sessionstart",Za),X.removeEventListener("sessionend",ja),Nn.stop()};function _e(S){S.preventDefault(),fo("WebGLRenderer: Context Lost."),H=!0}function Re(){fo("WebGLRenderer: Context Restored."),H=!1;const S=T.autoReset,U=ge.enabled,k=ge.autoUpdate,V=ge.needsUpdate,O=ge.type;J(),T.autoReset=S,ge.enabled=U,ge.autoUpdate=k,ge.needsUpdate=V,ge.type=O}function it(S){We("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ke(S){const U=S.target;U.removeEventListener("dispose",Ke),on(U)}function on(S){ln(S),x.remove(S)}function ln(S){const U=x.get(S).programs;U!==void 0&&(U.forEach(function(k){ie.releaseProgram(k)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,V,O,oe){U===null&&(U=et);const de=O.isMesh&&O.matrixWorld.determinant()<0,le=Jl(S,U,k,V,O);Me.setMaterial(V,de);let ve=k.index,ye=1;if(V.wireframe===!0){if(ve=q.getWireframeAttribute(k),ve===void 0)return;ye=2}const Le=k.drawRange,Be=k.attributes.position;let Ee=Le.start*ye,Je=(Le.start+Le.count)*ye;oe!==null&&(Ee=Math.max(Ee,oe.start*ye),Je=Math.min(Je,(oe.start+oe.count)*ye)),ve!==null?(Ee=Math.max(Ee,0),Je=Math.min(Je,ve.count)):Be!=null&&(Ee=Math.max(Ee,0),Je=Math.min(Je,Be.count));const ct=Je-Ee;if(ct<0||ct===1/0)return;te.setup(O,V,le,k,ve);let at,Qe=Oe;if(ve!==null&&(at=K.get(ve),Qe=D,Qe.setIndex(at)),O.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*lt()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(O.isLine){let St=V.linewidth;St===void 0&&(St=1),Me.setLineWidth(St*lt()),O.isLineSegments?Qe.setMode(P.LINES):O.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else O.isPoints?Qe.setMode(P.POINTS):O.isSprite&&Qe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Fs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const St=O._multiDrawStarts,Se=O._multiDrawCounts,It=O._multiDrawCount,qe=ve?K.get(ve).bytesPerElement:1,Wt=x.get(V).currentProgram.getUniforms();for(let jt=0;jt<It;jt++)Wt.setValue(P,"_gl_DrawID",jt),Qe.render(St[jt]/qe,Se[jt])}else if(O.isInstancedMesh)Qe.renderInstances(Ee,ct,O.count);else if(k.isInstancedBufferGeometry){const St=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Se=Math.min(k.instanceCount,St);Qe.renderInstances(Ee,ct,Se)}else Qe.render(Ee,ct)};function Ka(S,U,k){S.transparent===!0&&S.side===bt&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,Qi(S,U,k),S.side=In,S.needsUpdate=!0,Qi(S,U,k),S.side=bt):Qi(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),R=j.get(k),R.init(U),C.push(R),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(R.pushLight(O),O.castShadow&&R.pushShadow(O))}),S!==k&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(R.pushLight(O),O.castShadow&&R.pushShadow(O))}),R.setupLights();const V=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){const le=oe[de];Ka(le,k,O),V.add(le)}else Ka(oe,k,O),V.add(oe)}),R=C.pop(),V},this.compileAsync=function(S,U,k=null){const V=this.compile(S,U,k);return new Promise(O=>{function oe(){if(V.forEach(function(de){x.get(de).currentProgram.isReady()&&V.delete(de)}),V.size===0){O(S);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let qs=null;function jl(S){qs&&qs(S)}function Za(){Nn.stop()}function ja(){Nn.start()}const Nn=new Vl;Nn.setAnimationLoop(jl),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(S){qs=S,X.setAnimationLoop(S),S===null?Nn.stop():Nn.start()},X.addEventListener("sessionstart",Za),X.addEventListener("sessionend",ja),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;const k=X.enabled===!0&&X.isPresenting===!0,V=v!==null&&(B===null||k)&&v.begin(E,B);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,U,B),R=j.get(S,C.length),R.init(U),C.push(R),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),De.setFromProjectionMatrix(mt,tn,U.reversedDepth),Ce=this.localClippingEnabled,Te=ee.init(this.clippingPlanes,Ce),y=Ae.get(S,A.length),y.init(),A.push(y),X.enabled===!0&&X.isPresenting===!0){const de=E.xr.getDepthSensingMesh();de!==null&&Ys(de,U,-1/0,E.sortObjects)}Ys(S,U,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(rt,st),Fe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Fe&&xe.addToRenderList(y,S),this.info.render.frame++,Te===!0&&ee.beginShadows();const O=R.state.shadowsArray;if(ge.render(O,S,U),Te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&v.hasRenderPass())===!1){const de=y.opaque,le=y.transmissive;if(R.setupLights(),U.isArrayCamera){const ve=U.cameras;if(le.length>0)for(let ye=0,Le=ve.length;ye<Le;ye++){const Be=ve[ye];Qa(de,le,S,Be)}Fe&&xe.render(S);for(let ye=0,Le=ve.length;ye<Le;ye++){const Be=ve[ye];Ja(y,S,Be,Be.viewport)}}else le.length>0&&Qa(de,le,S,U),Fe&&xe.render(S),Ja(y,S,U)}B!==null&&N===0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),V&&v.end(E),S.isScene===!0&&S.onAfterRender(E,S,U),te.resetDefaultState(),W=-1,z=null,C.pop(),C.length>0?(R=C[C.length-1],Te===!0&&ee.setGlobalState(E.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function Ys(S,U,k,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||De.intersectsSprite(S)){V&&$e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);const de=me.update(S),le=S.material;le.visible&&y.push(S,de,le,k,$e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||De.intersectsObject(S))){const de=me.update(S),le=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$e.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),$e.copy(de.boundingSphere.center)),$e.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(le)){const ve=de.groups;for(let ye=0,Le=ve.length;ye<Le;ye++){const Be=ve[ye],Ee=le[Be.materialIndex];Ee&&Ee.visible&&y.push(S,de,Ee,k,$e.z,Be)}}else le.visible&&y.push(S,de,le,k,$e.z,null)}}const oe=S.children;for(let de=0,le=oe.length;de<le;de++)Ys(oe[de],U,k,V)}function Ja(S,U,k,V){const{opaque:O,transmissive:oe,transparent:de}=S;R.setupLightsView(k),Te===!0&&ee.setGlobalState(E.clippingPlanes,k),V&&Me.viewport(G.copy(V)),O.length>0&&Ji(O,U,k),oe.length>0&&Ji(oe,U,k),de.length>0&&Ji(de,U,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Qa(S,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[V.id]===void 0){const Ee=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[V.id]=new sn(1,1,{generateMipmaps:!0,type:Ee?Mn:Ot,minFilter:qn,samples:Math.max(4,nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const oe=R.state.transmissionRenderTarget[V.id],de=V.viewport||G;oe.setSize(de.z*E.transmissionResolutionScale,de.w*E.transmissionResolutionScale);const le=E.getRenderTarget(),ve=E.getActiveCubeFace(),ye=E.getActiveMipmapLevel();E.setRenderTarget(oe),E.getClearColor(Z),ce=E.getClearAlpha(),ce<1&&E.setClearColor(16777215,.5),E.clear(),Fe&&xe.render(k);const Le=E.toneMapping;E.toneMapping=nn;const Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),R.setupLightsView(V),Te===!0&&ee.setGlobalState(E.clippingPlanes,V),Ji(S,k,V),I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Je=0,ct=U.length;Je<ct;Je++){const at=U[Je],{object:Qe,geometry:St,material:Se,group:It}=at;if(Se.side===bt&&Qe.layers.test(V.layers)){const qe=Se.side;Se.side=Pt,Se.needsUpdate=!0,eo(Qe,k,V,St,Se,It),Se.side=qe,Se.needsUpdate=!0,Ee=!0}}Ee===!0&&(I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe))}E.setRenderTarget(le,ve,ye),E.setClearColor(Z,ce),Be!==void 0&&(V.viewport=Be),E.toneMapping=Le}function Ji(S,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,oe=S.length;O<oe;O++){const de=S[O],{object:le,geometry:ve,group:ye}=de;let Le=de.material;Le.allowOverride===!0&&V!==null&&(Le=V),le.layers.test(k.layers)&&eo(le,U,k,ve,Le,ye)}}function eo(S,U,k,V,O,oe){S.onBeforeRender(E,U,k,V,O,oe),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(E,U,k,V,S,oe),O.transparent===!0&&O.side===bt&&O.forceSinglePass===!1?(O.side=Pt,O.needsUpdate=!0,E.renderBufferDirect(k,U,V,O,S,oe),O.side=In,O.needsUpdate=!0,E.renderBufferDirect(k,U,V,O,S,oe),O.side=bt):E.renderBufferDirect(k,U,V,O,S,oe),S.onAfterRender(E,U,k,V,O,oe)}function Qi(S,U,k){U.isScene!==!0&&(U=et);const V=x.get(S),O=R.state.lights,oe=R.state.shadowsArray,de=O.state.version,le=ie.getParameters(S,O.state,oe,U,k),ve=ie.getProgramCacheKey(le);let ye=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const Le=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=Y.get(S.envMap||V.environment,Le),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,ye===void 0&&(S.addEventListener("dispose",Ke),ye=new Map,V.programs=ye);let Be=ye.get(ve);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===de)return no(S,le),Be}else le.uniforms=ie.getUniforms(S),S.onBeforeCompile(le,E),Be=ie.acquireProgram(le,ve),ye.set(ve,Be),V.uniforms=le.uniforms;const Ee=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),no(S,le),V.needsLights=ec(S),V.lightsStateVersion=de,V.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function to(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Is.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function no(S,U){const k=x.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Jl(S,U,k,V,O){U.isScene!==!0&&(U=et),I.resetTextureUnits();const oe=U.fog,de=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,le=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ti,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,ye=Y.get(V.envMap||de,ve),Le=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let at=nn;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(at=E.toneMapping);const Qe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,St=Qe!==void 0?Qe.length:0,Se=x.get(V),It=R.state.lights;if(Te===!0&&(Ce===!0||S!==z)){const gt=S===z&&V.id===W;ee.setState(V,S,gt)}let qe=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==It.state.version||Se.outputColorSpace!==le||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==ye||V.fog===!0&&Se.fog!==oe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Le||Se.vertexTangents!==Be||Se.morphTargets!==Ee||Se.morphNormals!==Je||Se.morphColors!==ct||Se.toneMapping!==at||Se.morphTargetsCount!==St)&&(qe=!0):(qe=!0,Se.__version=V.version);let Wt=Se.currentProgram;qe===!0&&(Wt=Qi(V,U,O));let jt=!1,Fn=!1,Qn=!1;const tt=Wt.getUniforms(),vt=Se.uniforms;if(Me.useProgram(Wt.program)&&(jt=!0,Fn=!0,Qn=!0),V.id!==W&&(W=V.id,Fn=!0),jt||z!==S){Me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),tt.setValue(P,"projectionMatrix",S.projectionMatrix),tt.setValue(P,"viewMatrix",S.matrixWorldInverse);const En=tt.map.cameraPosition;En!==void 0&&En.setValue(P,ke.setFromMatrixPosition(S.matrixWorld)),nt.logarithmicDepthBuffer&&tt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&tt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),z!==S&&(z=S,Fn=!0,Qn=!0)}if(Se.needsLights&&(It.state.directionalShadowMap.length>0&&tt.setValue(P,"directionalShadowMap",It.state.directionalShadowMap,I),It.state.spotShadowMap.length>0&&tt.setValue(P,"spotShadowMap",It.state.spotShadowMap,I),It.state.pointShadowMap.length>0&&tt.setValue(P,"pointShadowMap",It.state.pointShadowMap,I)),O.isSkinnedMesh){tt.setOptional(P,O,"bindMatrix"),tt.setOptional(P,O,"bindMatrixInverse");const gt=O.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),tt.setValue(P,"boneTexture",gt.boneTexture,I))}O.isBatchedMesh&&(tt.setOptional(P,O,"batchingTexture"),tt.setValue(P,"batchingTexture",O._matricesTexture,I),tt.setOptional(P,O,"batchingIdTexture"),tt.setValue(P,"batchingIdTexture",O._indirectTexture,I),tt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&tt.setValue(P,"batchingColorTexture",O._colorsTexture,I));const yn=k.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&he.update(O,k,Wt),(Fn||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,tt.setValue(P,"receiveShadow",O.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(vt.envMapIntensity.value=U.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=Om()),Fn&&(tt.setValue(P,"toneMappingExposure",E.toneMappingExposure),Se.needsLights&&Ql(vt,Qn),oe&&V.fog===!0&&be.refreshFogUniforms(vt,oe),be.refreshMaterialUniforms(vt,V,Ue,ue,R.state.transmissionRenderTarget[S.id]),Is.upload(P,to(Se),vt,I)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Is.upload(P,to(Se),vt,I),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&tt.setValue(P,"center",O.center),tt.setValue(P,"modelViewMatrix",O.modelViewMatrix),tt.setValue(P,"normalMatrix",O.normalMatrix),tt.setValue(P,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const gt=V.uniformsGroups;for(let En=0,ei=gt.length;En<ei;En++){const io=gt[En];fe.update(io,Wt),fe.bind(io,Wt)}}return Wt}function Ql(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function ec(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(S,U,k){const V=x.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),x.get(S.texture).__webglTexture=U,x.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const k=x.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const tc=P.createFramebuffer();this.setRenderTarget=function(S,U=0,k=0){B=S,w=U,N=k;let V=null,O=!1,oe=!1;if(S){const le=x.get(S);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),G.copy(S.viewport),F.copy(S.scissor),Q=S.scissorTest,Me.viewport(G),Me.scissor(F),Me.setScissorTest(Q),W=-1;return}else if(le.__webglFramebuffer===void 0)I.setupRenderTarget(S);else if(le.__hasExternalTextures)I.rebindTextures(S,x.get(S.texture).__webglTexture,x.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Le=S.depthTexture;if(le.__boundDepthTexture!==Le){if(Le!==null&&x.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(S)}}const ve=S.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(oe=!0);const ye=x.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ye[U])?V=ye[U][k]:V=ye[U],O=!0):S.samples>0&&I.useMultisampledRTT(S)===!1?V=x.get(S).__webglMultisampledFramebuffer:Array.isArray(ye)?V=ye[k]:V=ye,G.copy(S.viewport),F.copy(S.scissor),Q=S.scissorTest}else G.copy($).multiplyScalar(Ue).floor(),F.copy(ne).multiplyScalar(Ue).floor(),Q=re;if(k!==0&&(V=tc),Me.bindFramebuffer(P.FRAMEBUFFER,V)&&Me.drawBuffers(S,V),Me.viewport(G),Me.scissor(F),Me.setScissorTest(Q),O){const le=x.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,le.__webglTexture,k)}else if(oe){const le=U;for(let ve=0;ve<S.textures.length;ve++){const ye=x.get(S.textures[ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ve,ye.__webglTexture,k,le)}}else if(S!==null&&k!==0){const le=x.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,k)}W=-1},this.readRenderTargetPixels=function(S,U,k,V,O,oe,de,le=0){if(!(S&&S.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=x.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Me.bindFramebuffer(P.FRAMEBUFFER,ve);try{const ye=S.textures[le],Le=ye.format,Be=ye.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!nt.textureFormatReadable(Le)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Be)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&k>=0&&k<=S.height-O&&P.readPixels(U,k,V,O,se.convert(Le),se.convert(Be),oe)}finally{const ye=B!==null?x.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,V,O,oe,de,le=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=x.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve)if(U>=0&&U<=S.width-V&&k>=0&&k<=S.height-O){Me.bindFramebuffer(P.FRAMEBUFFER,ve);const ye=S.textures[le],Le=ye.format,Be=ye.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!nt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(U,k,V,O,se.convert(Le),se.convert(Be),0);const Je=B!==null?x.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Je);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bc(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(Ee),P.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,k=0){const V=Math.pow(2,-k),O=Math.floor(S.image.width*V),oe=Math.floor(S.image.height*V),de=U!==null?U.x:0,le=U!==null?U.y:0;I.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,de,le,O,oe),Me.unbindTexture()};const nc=P.createFramebuffer(),ic=P.createFramebuffer();this.copyTextureToTexture=function(S,U,k=null,V=null,O=0,oe=0){let de,le,ve,ye,Le,Be,Ee,Je,ct;const at=S.isCompressedTexture?S.mipmaps[oe]:S.image;if(k!==null)de=k.max.x-k.min.x,le=k.max.y-k.min.y,ve=k.isBox3?k.max.z-k.min.z:1,ye=k.min.x,Le=k.min.y,Be=k.isBox3?k.min.z:0;else{const vt=Math.pow(2,-O);de=Math.floor(at.width*vt),le=Math.floor(at.height*vt),S.isDataArrayTexture?ve=at.depth:S.isData3DTexture?ve=Math.floor(at.depth*vt):ve=1,ye=0,Le=0,Be=0}V!==null?(Ee=V.x,Je=V.y,ct=V.z):(Ee=0,Je=0,ct=0);const Qe=se.convert(U.format),St=se.convert(U.type);let Se;U.isData3DTexture?(I.setTexture3D(U,0),Se=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),Se=P.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const It=P.getParameter(P.UNPACK_ROW_LENGTH),qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Wt=P.getParameter(P.UNPACK_SKIP_PIXELS),jt=P.getParameter(P.UNPACK_SKIP_ROWS),Fn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,at.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);const Qn=S.isDataArrayTexture||S.isData3DTexture,tt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const vt=x.get(S),yn=x.get(U),gt=x.get(vt.__renderTarget),En=x.get(yn.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,gt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let ei=0;ei<ve;ei++)Qn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(S).__webglTexture,O,Be+ei),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(U).__webglTexture,oe,ct+ei)),P.blitFramebuffer(ye,Le,de,le,Ee,Je,de,le,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||x.has(S)){const vt=x.get(S),yn=x.get(U);Me.bindFramebuffer(P.READ_FRAMEBUFFER,nc),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,ic);for(let gt=0;gt<ve;gt++)Qn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,O,Be+gt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,O),tt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yn.__webglTexture,oe,ct+gt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yn.__webglTexture,oe),O!==0?P.blitFramebuffer(ye,Le,de,le,Ee,Je,de,le,P.COLOR_BUFFER_BIT,P.NEAREST):tt?P.copyTexSubImage3D(Se,oe,Ee,Je,ct+gt,ye,Le,de,le):P.copyTexSubImage2D(Se,oe,Ee,Je,ye,Le,de,le);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else tt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Se,oe,Ee,Je,ct,de,le,ve,Qe,St,at.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,oe,Ee,Je,ct,de,le,ve,Qe,at.data):P.texSubImage3D(Se,oe,Ee,Je,ct,de,le,ve,Qe,St,at):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,Ee,Je,de,le,Qe,St,at.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,Ee,Je,at.width,at.height,Qe,at.data):P.texSubImage2D(P.TEXTURE_2D,oe,Ee,Je,de,le,Qe,St,at);P.pixelStorei(P.UNPACK_ROW_LENGTH,It),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fn),oe===0&&U.generateMipmaps&&P.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(S){x.get(S).__webglFramebuffer===void 0&&I.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?I.setTextureCube(S,0):S.isData3DTexture?I.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?I.setTexture2DArray(S,0):I.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){w=0,N=0,B=null,Me.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class Xa{static labelCache=new Map;static createLabeledTexture(e,t){const n=`${e}_${t}`;if(this.labelCache.has(n))return this.labelCache.get(n);const s=document.createElement("canvas");s.width=512,s.height=512;const r=s.getContext("2d"),a="white",o="black";r.clearRect(0,0,512,512),r.textAlign="center",r.textBaseline="middle",r.font='900 440px "Arial Black", Impact, sans-serif',r.strokeStyle=o,r.lineWidth=45,r.strokeText(t,256,256),r.fillStyle=a,r.fillText(t,256,256);const c=new _a(s);return c.name=`label_${t}`,c.anisotropy=16,c.needsUpdate=!0,this.labelCache.set(n,c),c}static createFlowTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="white",t.lineWidth=15,t.lineCap="round",t.lineJoin="round";const n=r=>{t.beginPath(),t.moveTo(32,20+r),t.lineTo(96,64+r),t.lineTo(32,108+r),t.stroke()};n(0),n(128),n(-128);const s=new _a(e);return s.wrapS=Xi,s.wrapT=Xi,s.repeat.set(1,1),s.needsUpdate=!0,s}}class zm{constructor(e,t=5,n=1){this.scene=e,this.size=t,this.cellSize=n,this.group=new xi,this.halfExtents=this.size*this.cellSize/2,this.cells=[],this.roughness=.2,this.ior=1.62,this.labelMeshes=[],this.initVisuals(),this.scene.add(this.group)}initVisuals(){const e=this.size*this.cellSize,t=new vn(e,e,e);this.coreMat=new ki({color:16777215,metalness:.05,roughness:this.roughness,transmission:.95,thickness:.05,clearcoat:1,clearcoatRoughness:.02,ior:this.ior,reflectivity:.5,transparent:!0,opacity:1,attenuationColor:new Pe(16777215),attenuationDistance:10,depthWrite:!1}),this.coreMesh=new Ge(t,this.coreMat),this.coreMesh.renderOrder=10,this.group.add(this.coreMesh);const n=new Ch(t),s=new Il({color:16777215,linewidth:1,transparent:!0,opacity:.45}),r=new Ah(n,s);this.group.add(r);const a=[{normal:new L(0,0,1)},{normal:new L(0,0,-1)},{normal:new L(1,0,0)},{normal:new L(-1,0,0)},{normal:new L(0,1,0)},{normal:new L(0,-1,0)}],o=new Zn(this.cellSize,this.cellSize),c=new Os({color:0,transparent:!0,opacity:0,depthWrite:!1}),l=.04;this.barMat=new Os({color:0,transparent:!0,opacity:.15}),this.faceGrids=[],a.forEach((d,u)=>{for(let _=0;_<this.size;_++)for(let p=0;p<this.size;p++){const f=new Ge(o,c.clone());f.userData={faceIndex:u,u:_,v:p,normal:d.normal};const M=(_-this.size/2+.5)*this.cellSize,b=(p-this.size/2+.5)*this.cellSize;f.position.copy(d.normal).multiplyScalar(this.halfExtents-.02),d.normal.z!==0?(f.position.x=d.normal.z>0?M:-M,f.position.y=b):d.normal.x!==0?(f.position.z=d.normal.x>0?-M:M,f.position.y=b):(f.position.x=M,f.position.z=d.normal.y>0?-b:b),f.lookAt(f.position.clone().add(d.normal)),this.group.add(f),this.cells.push({faceIndex:u,u:_,v:p,mesh:f})}const h=new xi,m=this.size*this.cellSize;for(let _=0;_<=this.size;_++){const p=new vn(l,m,l),f=new Ge(p,this.barMat);f.position.x=(_-this.size/2)*this.cellSize,h.add(f)}for(let _=0;_<=this.size;_++){const p=new vn(m,l,l),f=new Ge(p,this.barMat);f.position.y=(_-this.size/2)*this.cellSize,h.add(f)}h.position.copy(d.normal).multiplyScalar(this.halfExtents+.002),h.lookAt(h.position.clone().add(d.normal)),h.renderOrder=10,this.group.add(h),this.faceGrids.push({mesh:h,normal:d.normal})})}rebuild(e){for(this.size=e,this.halfExtents=this.size*this.cellSize/2,this.cells=[],this.faceGrids=[];this.group.children.length>0;)this.group.remove(this.group.children[0]);this.initVisuals()}getCell(e,t,n){return this.cells.find(s=>s.faceIndex===e&&s.u===t&&s.v===n)}getCellPosition(e,t,n){const s=this.getFaceNormal(e),r=(t-this.size/2+.5)*this.cellSize,a=(n-this.size/2+.5)*this.cellSize,o=s.clone().multiplyScalar(this.halfExtents);return s.z!==0?(o.x=s.z>0?r:-r,o.y=a):s.x!==0?(o.z=s.x>0?-r:r,o.y=a):(o.x=r,o.z=s.y>0?-a:a),o}getFaceNormal(e){return[new L(0,0,1),new L(0,0,-1),new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0)][e].clone()}getPathPoints(e){const t=[];if(e.length===0)return t;const n=.01;t.push({pos:this.getCellPosition(e[0].f,e[0].u,e[0].v),cellIdx:0,isCenter:!0});for(let s=0;s<e.length-1;s++){const r=e[s],a=e[s+1],o=this.getCellPosition(r.f,r.u,r.v),c=this.getCellPosition(a.f,a.u,a.v);if(r.f!==a.f){const l=this.getFaceNormal(r.f),d=this.getFaceNormal(a.f),u=this.halfExtents+n,h=new L;l.x!==0?h.x=u*l.x:d.x!==0?h.x=u*d.x:h.x=o.x,l.y!==0?h.y=u*l.y:d.y!==0?h.y=u*d.y:h.y=o.y,l.z!==0?h.z=u*l.z:d.z!==0?h.z=u*d.z:h.z=o.z,t.push({pos:h,cellIdx:s+1,isCenter:!1})}t.push({pos:c,cellIdx:s+1,isCenter:!0})}return t}addPlate(e,t,n,s){const r=this.getCellPosition(e,t,n),a=this.getFaceNormal(e),o=this.cellSize*.25,c=.04,l=new ji(o,o,c,32),d=new Pe(s),u=this.isEco?new mn({color:d,emissive:d,emissiveIntensity:.7,roughness:.4,metalness:0}):new ki({color:d,emissive:d,emissiveIntensity:.2,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.1,transparent:!1,opacity:1,side:bt,reflectivity:.5}),h=new Ge(l,u);h.position.copy(r).add(a.clone().multiplyScalar(c/2)),h.up.copy(this.getFaceUp(e)),h.lookAt(h.position.clone().add(a)),h.rotateX(Math.PI/2),h.renderOrder=50,this.group.add(h);const m=new $n(this.cellSize*.22,32),g=this.isEco?new mn({color:16777215,emissive:16777215,emissiveIntensity:1,transparent:!0,opacity:1,depthWrite:!1,side:bt}):new ki({color:16777215,emissive:16777215,emissiveIntensity:.8,transparent:!0,opacity:1,roughness:1,metalness:0,depthWrite:!1,side:bt}),_=new Ge(m,g);return _.position.set(0,c/2+.001,0),_.rotateX(-Math.PI/2),_.renderOrder=55,h.add(_),this.group.add(h),this.labelMeshes.push(_),{plate:h,label:_}}getFaceUp(e){return[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,-1),new L(0,0,1)][e].clone()}update(e){if(!e)return;const t=e.position,n=new L(0,1,0);this.faceGrids.forEach((s,r)=>{const a=this.getFaceNormal(r).multiplyScalar(this.size/2).applyQuaternion(this.group.quaternion),o=t.clone().sub(a).normalize().dot(this.getFaceNormal(r).applyQuaternion(this.group.quaternion));s.mesh.visible=o>.1}),this.labelMeshes.forEach(s=>{if(!s.parent)return;const r=new L(0,1,0).applyQuaternion(s.parent.quaternion).applyQuaternion(this.group.quaternion),a=n.clone().projectOnPlane(r).normalize();if(Math.abs(r.y)<.95&&a.length()>.1){const c=s.getWorldQuaternion(new Un).clone().invert(),l=a.clone().applyQuaternion(c),d=Math.atan2(l.x,l.y);s.rotation.z-=d*.05}})}removeLabels(e){!e||e.length===0||(this.labelMeshes=this.labelMeshes.filter(t=>!e.includes(t)))}getNeighborCells(e){const{f:t,u:n,v:s}=e,r=[];return n>0&&r.push({f:t,u:n-1,v:s}),n<this.size-1&&r.push({f:t,u:n+1,v:s}),s>0&&r.push({f:t,u:n,v:s-1}),s<this.size-1&&r.push({f:t,u:n,v:s+1}),n===0&&r.push(this.getCrossFaceNeighbor(t,"left",s)),n===this.size-1&&r.push(this.getCrossFaceNeighbor(t,"right",s)),s===0&&r.push(this.getCrossFaceNeighbor(t,"bottom",n)),s===this.size-1&&r.push(this.getCrossFaceNeighbor(t,"top",n)),r.filter(a=>a!==null)}createPathMeshes(e,t,n){const s={meshes:[],meshesByCell:{}};if(e.length<2)return s;const r=this.getPathPoints(e),a=.18,o=new Pe(t),c=new ki({color:o,emissive:o,emissiveIntensity:.2,roughness:.2,metalness:.1,clearcoat:0});if(this.isEco){const u=this.cellSize*.32,h=.003,m=new mn({color:o,emissive:o,emissiveIntensity:.7,roughness:.3,transparent:!1,opacity:1,side:bt,depthWrite:!0}),g=Xa.createLabeledTexture(t,n),_=new mn({map:g,emissiveMap:g,transparent:!0,opacity:1,depthWrite:!1,side:bt,emissive:16777215,emissiveIntensity:.6}),p=new $n(u/2,32),f=new $n(u*.45,32),M=new Zn(u,1);for(let b=0;b<r.length;b++){const y=r[b].pos,R=r[b].cellIdx;if(s.meshesByCell[R]||(s.meshesByCell[R]=[]),r[b].isCenter){const A=this.getFaceNormal(e[R].f),C=new Ge(p,m);C.position.copy(y).add(A.clone().multiplyScalar(h)),C.lookAt(C.position.clone().add(A)),C.renderOrder=50,this.group.add(C),s.meshes.push(C),s.meshesByCell[R].push(C);const v=new Ge(f,_);v.position.copy(C.position).add(A.clone().multiplyScalar(.001)),v.lookAt(v.position.clone().add(A)),v.renderOrder=51,this.group.add(v),s.meshes.push(v),s.meshesByCell[R].push(v)}if(b>0){const A=r[b-1],C=r[b],v=C.pos.distanceTo(A.pos);if(v>.001){const E=A.isCenter?e[A.cellIdx].f:e[C.cellIdx].f,H=this.getFaceNormal(E),w=new Ge(M,m);w.scale.y=v,w.position.copy(C.pos.clone().add(A.pos).multiplyScalar(.5)).add(H.clone().multiplyScalar(h)),w.quaternion.setFromRotationMatrix(new je().lookAt(C.pos,A.pos,H)),w.rotateX(Math.PI/2),w.renderOrder=50,this.group.add(w),s.meshes.push(w),s.meshesByCell[R].push(w)}}}return s}const l=12,d=new Hs(a,l,l);for(let u=0;u<r.length;u++){const h=r[u].pos,m=r[u].cellIdx,g=new Ge(d,c);if(g.position.copy(h),g.renderOrder=60,this.group.add(g),s.meshes.push(g),s.meshesByCell[m]||(s.meshesByCell[m]=[]),s.meshesByCell[m].push(g),u>0){const _=r[u-1].pos,p=h.distanceTo(_);if(p<.001)continue;const f=new ji(a,a,p,l),M=new Ge(f,c);M.position.copy(h).add(_).multiplyScalar(.5),M.lookAt(h),M.rotateX(Math.PI/2),M.renderOrder=60,this.group.add(M),s.meshes.push(M),s.meshesByCell[m].push(M)}}return s}getCrossFaceNeighbor(e,t,n){const s=this.size-1,a={0:{left:[3,s,n],right:[2,0,n],top:[4,n,0],bottom:[5,n,s]},1:{left:[2,s,n],right:[3,0,n],top:[4,s-n,s],bottom:[5,s-n,0]},2:{left:[0,s,n],right:[1,0,n],top:[4,s,n],bottom:[5,s,s-n]},3:{left:[1,s,n],right:[0,0,n],top:[4,0,s-n],bottom:[5,0,n]},4:{left:[3,s-n,s],right:[2,n,s],top:[1,s-n,s],bottom:[0,n,s]},5:{left:[3,n,0],right:[2,s-n,0],top:[0,n,0],bottom:[1,s-n,0]}}[e][t];return{f:a[0],u:a[1],v:a[2]}}}class Vm{constructor(){this.ctx=null,this.masterGain=null,this.isInitialized=!1,this.isMuted=!1}setMuted(e){this.isMuted=e,this.isMuted&&this.ctx?this.ctx.suspend():this.ctx&&this.ctx.resume()}setupUnlock(){const e=()=>{this.init(),this.resume(),this.ctx&&(window.removeEventListener("pointerdown",e),window.removeEventListener("touchstart",e),window.removeEventListener("keydown",e),console.log("Audio Context Unlocked"))};window.addEventListener("pointerdown",e),window.addEventListener("touchstart",e),window.addEventListener("keydown",e)}init(){if(!this.isInitialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.3,this.masterGain.connect(this.ctx.destination),this.isInitialized=!0}catch(e){console.warn("Web Audio API not supported",e)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}playClick(){if(this.init(),this.resume(),!this.isInitialized||this.isMuted)return;const e=this.ctx.sampleRate*.01,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let c=0;c<e;c++)n[c]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=t;const r=this.ctx.createGain();r.gain.setValueAtTime(.8,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.008);const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(1400,this.ctx.currentTime),a.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.03),o.gain.setValueAtTime(.4,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.03),s.connect(r),r.connect(this.masterGain),a.connect(o),o.connect(this.masterGain),s.start(),a.start(),a.stop(this.ctx.currentTime+.03)}playTick(e=1){if(this.init(),this.resume(),!this.isInitialized||this.isMuted)return;const t=220,n=880,s=Math.min((e-1)/15,1),r=t+(n-t)*s,a=this.ctx.sampleRate*.02,o=this.ctx.createBuffer(1,a,this.ctx.sampleRate),c=o.getChannelData(0);for(let g=0;g<a;g++)c[g]=Math.random()*2-1;const l=this.ctx.createBufferSource();l.buffer=o;const d=this.ctx.createBiquadFilter();d.type="highpass",d.frequency.setValueAtTime(4e3,this.ctx.currentTime);const u=this.ctx.createGain();u.gain.setValueAtTime(0,this.ctx.currentTime),u.gain.linearRampToValueAtTime(.2,this.ctx.currentTime+.002),u.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.015);const h=this.ctx.createOscillator();h.type="sine",h.frequency.setValueAtTime(r,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(0,this.ctx.currentTime),m.gain.linearRampToValueAtTime(.25,this.ctx.currentTime+.002),m.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.02),l.connect(d),d.connect(u),u.connect(this.masterGain),h.connect(m),m.connect(this.masterGain),l.start(),h.start(),h.stop(this.ctx.currentTime+.02)}playLock(){if(this.init(),this.resume(),!this.isInitialized||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,this.ctx.currentTime),t.gain.setValueAtTime(0,this.ctx.currentTime),t.gain.linearRampToValueAtTime(.3,this.ctx.currentTime+.005),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.06);const n=this.ctx.sampleRate*.02,s=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=s.getChannelData(0);for(let l=0;l<n;l++)r[l]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=s;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(500,this.ctx.currentTime);const c=this.ctx.createGain();c.gain.setValueAtTime(.25,this.ctx.currentTime),c.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.015),e.connect(t),t.connect(this.masterGain),a.connect(o),o.connect(c),c.connect(this.masterGain),e.start(),a.start(),e.stop(this.ctx.currentTime+.06)}playVent(){if(this.init(),this.resume(),!this.isInitialized||this.isMuted)return;const e=this.ctx.sampleRate*.1,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let o=0;o<e;o++)n[o]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=t;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(2e3,this.ctx.currentTime),r.frequency.linearRampToValueAtTime(100,this.ctx.currentTime+.1);const a=this.ctx.createGain();a.gain.setValueAtTime(.15,this.ctx.currentTime),a.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.1),s.connect(r),r.connect(a),a.connect(this.masterGain),s.start(),s.stop(this.ctx.currentTime+.1)}playVictory(){if(this.init(),this.resume(),!this.isInitialized||this.isMuted)return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.currentTime+n*.1;s.type="sine",s.frequency.setValueAtTime(t,a),r.gain.setValueAtTime(.04,a),r.gain.exponentialRampToValueAtTime(.01,a+.4),s.connect(r),r.connect(this.masterGain),s.start(a),s.stop(a+.4)})}}const Ln=new Vm;Ln.setupUnlock();const Gm={RED:15087942,GREEN:3703364,YELLOW:15118126,BLUE:4027576,ORANGE:14251814,PURPLE:9063336};class km{constructor(e=0){this.seed=e}next(){let e=this.seed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}nextInt(e){return Math.floor(this.next()*e)}shuffle(e){const t=[...e];for(let n=t.length-1;n>0;n--){const s=this.nextInt(n+1);[t[n],t[s]]=[t[s],t[n]]}return t}}class Hm{static generate(e,t=1){const n=Date.now(),s=new km(t*48271),r=e.size*e.size*6,a=t<6?.5:Math.min(.88,.6+Math.min(t,200)/200*.28);let o=3;t>=4&&(o=4),t>=6&&(o=8),t>=11&&(o=11),t>=26&&(o=15),t>=56&&(o=20);const c=Object.values(Gm);let l=.5;t>=3&&(l=.85),t>=6&&(l=1);const d=t<3?1:t<10?e.size+1:Math.floor(e.size*1.5),u=Math.max(10,Math.floor(r/4)),h=new Set,m=[],g=[];let _=0;(()=>{let b=0;const y=150,R=Math.floor(r*a);for(;(h.size<R||m.length<o)&&b<y&&!(Date.now()-n>2500);){const A=c[_%c.length],C=_+1,v=this.getStartEndCandidates(e,h,g,t>35,s);if(v.length===0){b++;continue}const E=v.filter(N=>Math.abs(N.start.u-N.end.u)+Math.abs(N.start.v-N.end.v)<d&&N.start.f===N.end.f?!1:t<3?!0:!(N.start.f===N.end.f)||s.next()>l);if(E.length===0){b++;continue}const H=E[Math.floor(s.next()*E.length)],w=this.findWindingPath(e,H.start,H.end,h,u,s);w?(w.forEach(N=>h.add(`${N.f},${N.u},${N.v}`)),g.push(H.start,H.end),m.push({color:A,label:C,points:[H.start,H.end],path:w}),_++,b=0):b++}})();const f=m.length*2,M=h.size-f;return console.log(`[SOVEREIGN GENERATOR] Level ${t}:`),m.forEach((b,y)=>console.log(`  Path ${y+1} (${b.color}): ${b.path.length-2} conduits`)),console.log(`  Sovereign Bridge Budget: ${M} cells`),{pairs:m,targetOccupied:M}}static getStartEndCandidates(e,t,n,s,r){const a=[];for(let d=0;d<6;d++)for(let u=0;u<e.size;u++)for(let h=0;h<e.size;h++){const m=`${d},${u},${h}`;if(!t.has(m)){if(s&&n.some(_=>_.f===d&&Math.abs(_.u-u)+Math.abs(_.v-h)<=2))continue;a.push({f:d,u,v:h})}}if(a.length<2)return[];const o=[],c=r.shuffle(a),l=Math.min(c.length,30);for(let d=0;d<l;d++)for(let u=d+1;u<l;u++)o.push({start:c[d],end:c[u]});return o}static findWindingPath(e,t,n,s,r,a){const o=[[t]],c=new Set;for(c.add(`${t.f},${t.u},${t.v}`);o.length>0;){const l=a.next()<.65?Math.floor(a.next()*o.length):0,d=o.splice(l,1)[0],u=d[d.length-1];if(u.f===n.f&&u.u===n.u&&u.v===n.v)return d;if(d.length>=r)continue;const h=e.getNeighborCells(u),m=a.shuffle(h);for(const g of m){const _=`${g.f},${g.u},${g.v}`;!c.has(_)&&!s.has(_)&&(c.add(_),o.push([...d,g]))}}return null}}const Cr="sovereign_cube_level";class Wm{constructor(e){if(this.grid=e,!this.grid){console.error("GameController: Grid is missing!");return}this.plates=[],this.stubs=[],this.completedPaths=[],this.onUpdate=null,localStorage.getItem("sovereign_sync_v1.187.7")!=="done"&&(localStorage.setItem(Cr,"1"),localStorage.setItem("sovereign_total_mastery","0"),localStorage.setItem("sovereign_sync_v1.187.7","done"),console.log("Sovereign: One-time Reset for Scoring Synchronization (v1.187.7)"));const t=localStorage.getItem(Cr);this.currentLevel=t?parseInt(t,10):1,this.loader=document.getElementById("loader-overlay"),this.lvlDisplay=document.getElementById("level-val"),this.livesDisplay=document.getElementById("lives-val"),this.cellsDisplay=document.getElementById("cells-val"),this.scoreDisplay=document.getElementById("score-val"),this.masteryContainer=document.querySelector(".cells-mastery-container"),this.masteryRing=document.getElementById("cells-progress"),this.targetOccupiedCells=0;const n=localStorage.getItem("sovereign_lives");this.lives=n!==null?parseInt(n,10):3,this.livesDisplay&&(this.livesDisplay.innerText=this.lives);const s=localStorage.getItem("sovereign_total_mastery");this.totalMastery=s!==null?parseInt(s,10):0,this.scoreDisplay&&(this.scoreDisplay.innerText=this.totalMastery),this.isSolving=!1,this.initLevel()}calculateTargetSize(e){return e<6?2:e<26?3:e<56?4:e<101?5:e<201?6:e<401?7:e<701?8:9}initLevel(){this.loader&&this.loader.classList.remove("hidden"),this.lvlDisplay&&(this.lvlDisplay.innerText=this.currentLevel);const e=this.calculateTargetSize(this.currentLevel);this.grid.size!==e&&this.grid.rebuild(e),window.fitCameraToCube&&window.fitCameraToCube(e),this.plates.forEach(t=>{this.grid.group.remove(t.mesh),t.labelMesh&&this.grid.group.remove(t.labelMesh)}),this.stubs.forEach(t=>t.meshes.forEach(n=>this.grid.group.remove(n))),this.completedPaths.forEach(t=>t.meshes.forEach(n=>this.grid.group.remove(n))),this.plates=[],this.stubs=[],this.completedPaths=[],setTimeout(()=>{const t=Hm.generate(this.grid,this.currentLevel),n=t.pairs;this.targetOccupiedCells=t.targetOccupied,this.currentPuzzle=n,n&&n.length>0?n.forEach(s=>{this.addPlate(s.points[0],s.color,s.label),this.addPlate(s.points[1],s.color,s.label)}):console.error(`Sovereign Generator: Failed Level ${this.currentLevel}`),this.updateCellCounter(),this.loader&&this.loader.classList.add("hidden"),this.onUpdate&&this.onUpdate()},100)}nextLevel(){this.currentLevel++,localStorage.setItem(Cr,this.currentLevel),this.initLevel()}addPlate(e,t,n){const{f:s,u:r,v:a}=e,{plate:o,label:c}=this.grid.addPlate(s,r,a,t),l=Xa.createLabeledTexture(t,n);c.material.map=l,c.material.emissiveMap=l,c.material.needsUpdate=!0,this.plates.push({f:s,u:r,v:a,color:t,label:n,mesh:o,labelMesh:c}),this.updateCellCounter()}updateCellCounter(){if(!this.cellsDisplay)return;let e=0;const t=[...this.stubs,...this.completedPaths],n=new Set;t.forEach(r=>{r.cells.forEach(a=>{this.plates.some(c=>c.f===a.f&&c.u===a.u&&c.v===a.v)||n.add(`${a.f},${a.u},${a.v}`)})}),e=n.size,console.log(`[SOVEREIGN AUDIT] Unified Conduits: ${e} (AI Budget ${this.targetOccupiedCells})`);const s=this.targetOccupiedCells-e;if(this.cellsDisplay.innerText=Math.abs(s),this.masteryRing&&this.masteryContainer){const r=this.targetOccupiedCells,a=Math.min(1.5,e/r),o=113.1;if(this.masteryRing.style.strokeDashoffset=o*(1-a),this.masteryContainer.classList.remove("mastery-perfect","mastery-over","mastery-low","mastery-mid","mastery-high"),s===0){this.masteryContainer.classList.add("mastery-perfect");const c=document.getElementById("perfect-label");c&&(c.classList.remove("hidden"),setTimeout(()=>c.classList.add("hidden"),1e3))}else s>0?this.masteryContainer.classList.add("mastery-high"):s>=-3?this.masteryContainer.classList.add("mastery-mid"):this.masteryContainer.classList.add("mastery-over")}this.cellsDisplay.style.transform="scale(1.2)",setTimeout(()=>{this.cellsDisplay.style.transform="scale(1)"},100)}refillLives(){this.lives=3,localStorage.setItem("sovereign_lives",this.lives),this.livesDisplay&&(this.livesDisplay.innerText=this.lives),Ln.playLock()}getPlateAt(e,t,n){return this.plates.find(s=>s.f===e&&s.u===t&&s.v===n)}getCompletedPathByPlate(e,t,n){return this.completedPaths.find(s=>s.cells.some(r=>r.f===e&&r.u===t&&r.v===n))}removeCompletedPath(e){this.completedPaths=this.completedPaths.filter(t=>t!==e),this.stubs.includes(e)||this.stubs.push(e),this.updateCellCounter(),this.onUpdate&&this.onUpdate()}addStub(e){this.stubs.indexOf(e)===-1&&this.stubs.push(e),this.updateCellCounter(),this.onUpdate&&this.onUpdate()}addCompletedPath(e){if(this.completedPaths.includes(e)||(this.completedPaths.push(e),e.isCompleted=!0,this.stubs=this.stubs.filter(t=>t!==e)),this.stats={completed:0,total:0},this.updateCellCounter(),this.onUpdate&&this.onUpdate(),this.completedPaths.length===this.plates.length/2){Ln.playVictory();const t=this.calculateCurrentConduits(),n=this.targetOccupiedCells-t;this.updateTotalMastery(n)}}calculateCurrentConduits(){const e=[...this.stubs,...this.completedPaths],t=new Set;return e.forEach(n=>{n.cells.forEach(s=>{this.plates.some(a=>a.f===s.f&&a.u===s.u&&a.v===s.v)||t.add(`${s.f},${s.u},${s.v}`)})}),t.size}updateTotalMastery(e){e!==0&&(this.totalMastery+=e,localStorage.setItem("sovereign_total_mastery",this.totalMastery),this.scoreDisplay&&(this.scoreDisplay.innerText=this.totalMastery,this.showMasteryPopup(e)))}showMasteryPopup(e){if(!this.masteryContainer||!this.masteryContainer.parentElement)return;const t=document.createElement("div"),n=e>0;t.className=`mastery-popup animate ${n?"positive":"negative"}`,t.innerText=(n?"+":"")+e;const s=this.masteryContainer.offsetLeft+this.masteryContainer.offsetWidth/2;t.style.left=`${s}px`,this.masteryContainer.parentElement.appendChild(t),setTimeout(()=>t.remove(),1500)}clearPath(e){e.meshes&&(e.meshes.forEach(n=>this.grid.group.remove(n)),e.meshes=[],e.meshesByCell={}),e.isCompleted=!1;const t=this.completedPaths.indexOf(e);t!==-1&&this.completedPaths.splice(t,1),this.updateCellCounter()}deletePathByPlate(e,t,n){const s=this.stubs.find(r=>r.cells.some(a=>a.f===e&&a.u===t&&a.v===n))||this.completedPaths.find(r=>r.cells.some(a=>a.f===e&&a.u===t&&a.v===n));return s?(this.clearPath(s),this.stubs=this.stubs.filter(r=>r!==s),this.completedPaths=this.completedPaths.filter(r=>r!==s),this.onUpdate&&this.onUpdate(),!0):!1}clearPathsByColor(e,t){const n=[...this.stubs.filter(s=>s.color===e&&s.label===t),...this.completedPaths.filter(s=>s.color===e&&s.label===t)];n.forEach(s=>{this.clearPath(s),this.stubs=this.stubs.filter(r=>r!==s),this.completedPaths=this.completedPaths.filter(r=>r!==s)}),n.length>0&&(Ln.playVent(),this.onUpdate&&this.onUpdate())}getCellOccupant(e,t,n){return this.stubs.find(s=>s.cells.some(r=>r.f===e&&r.u===t&&r.v===n))||this.completedPaths.find(s=>s.cells.some(r=>r.f===e&&r.u===t&&r.v===n))}getStats(){return{completed:this.completedPaths.length,total:this.plates.length/2}}resetLevel(){this.initLevel()}setPlateHighlight(e,t){e.labelMesh&&(e.labelMesh.material.emissiveIntensity=t?1:0)}async solveBoard(){if(!(!this.currentPuzzle||this.lives<=0||this.isSolving)){this.isSolving=!0;try{this.lives--,localStorage.setItem("sovereign_lives",this.lives),this.livesDisplay&&(this.livesDisplay.innerText=this.lives),this.stubs.forEach(e=>e.meshes.forEach(t=>this.grid.group.remove(t))),this.completedPaths.forEach(e=>e.meshes.forEach(t=>this.grid.group.remove(t))),this.stubs=[],this.completedPaths=[];for(const e of this.currentPuzzle){Ln.playVent();const t={cells:e.path,color:e.color,label:e.label,isCompleted:!0},{meshes:n,meshesByCell:s}=this.grid.createPathMeshes(t.cells,t.color,t.label),r=.18,a=new ki({color:new Pe(e.color),roughness:.2,metalness:.1,emissive:0,emissiveIntensity:0,clearcoat:0}),o=new Hs(r,12,12);this.addCompletedPath(t);for(let c=0;c<points.length;c++){const l=points[c].pos,d=points[c].cellIdx,u=new Ge(o,a);if(u.position.copy(l),u.renderOrder=60,this.grid.group.add(u),t.meshes.push(u),t.meshesByCell[d]||(t.meshesByCell[d]=[]),t.meshesByCell[d].push(u),c>0){const h=points[c-1].pos,m=l.distanceTo(h);if(m>.001){const g=new ji(r,r,m,12),_=new Ge(g,a);_.position.copy(l).add(h).multiplyScalar(.5),_.lookAt(l),_.rotateX(Math.PI/2),_.renderOrder=60,this.grid.group.add(_),t.meshes.push(_),t.meshesByCell[d].push(_)}}window.requestSovereignFrame&&window.requestSovereignFrame(),await new Promise(h=>setTimeout(h,40)),Ln.playTick(c)}}}finally{this.isSolving=!1,this.onUpdate&&this.onUpdate()}}}}class Xm{constructor(e,t,n,s,r){this.camera=e,this.grid=t,this.renderer=n,this.gameController=s,this.scene=r,this.clock=new Hh,this.raycaster=new kh,this.pointer=new ze,this.isDragging=!1,this.lastPointer=new ze,this.dragStartPoint=new ze,this.currentDragVector=new ze,this.activePath=null,this.activeColor=null,this.activeLabel=null,this.lastCell=null,this.currentSegmentAxis=null,this.longPressTimer=null,this.longPressStartTime=0,this.LONG_PRESS_DURATION=600,this.dialEl=document.getElementById("long-press-dial"),this.dialProgressEl=this.dialEl?.querySelector(".progress"),this.isLongPress=!1,this.currentRotationVelocity=0,this.targetRotationVelocity=0,this.lerpFactor=.25,this.sensitivityFactor=1,this.lockedLocalAxis=null,this.axisSign=1,this.lockedDragDir=null,this.sensitivityFactor=1,this.isResetting=!1,this.identityQuaternion=new Un,this.flashingPaths=new Map,this.isVictorious=!1,this.victoryTime=0,this.baseCameraDistance=11.5,this.targetCameraDistance=11.5,this.currentCameraDistance=11.5,this.minDistance=1.5,this.maxDistance=25,this.activePointers=new Map,this.initialPinchDistance=0,this.isVictorious=!1,this.lastNudgeTime=0,this.nudgeInterval=1500,this.victoryAxis=new L(0,1,0),this.initEvents()}initEvents(){const e=this.renderer.domElement;this.compassBtn=document.getElementById("compass-btn"),this.compassIcon=document.getElementById("compass-icon"),this.restartBtn=document.getElementById("restart-btn"),this.compassBtn&&this.compassBtn.addEventListener("pointerdown",t=>{t.stopPropagation(),this.resetOrientation()}),this.restartBtn&&this.restartBtn.addEventListener("pointerdown",t=>{t.stopPropagation(),this.gameController.initLevel(),this.resetOrientation()}),this.solveBtn=document.getElementById("solve-btn"),this.solveModal=document.getElementById("solve-modal"),this.solveConfirmBtn=document.getElementById("solve-confirm-btn"),this.solveCancelBtn=document.getElementById("solve-cancel-btn"),this.solveBtn&&this.solveModal&&(this.solveBtn.addEventListener("pointerdown",t=>{t.stopPropagation(),this.solveModal.classList.remove("hidden")}),this.solveConfirmBtn&&this.solveConfirmBtn.addEventListener("pointerdown",t=>{t.stopPropagation(),this.solveModal.classList.add("hidden"),this.gameController.solveBoard()}),this.solveCancelBtn&&this.solveCancelBtn.addEventListener("pointerdown",t=>{t.stopPropagation(),this.solveModal.classList.add("hidden")})),e.addEventListener("pointerdown",this.onPointerDown.bind(this)),window.addEventListener("pointermove",this.onPointerMove.bind(this)),window.addEventListener("pointerup",this.onPointerUp.bind(this)),window.addEventListener("pointercancel",this.onPointerUp.bind(this)),e.addEventListener("wheel",this.onWheel.bind(this),{passive:!1})}onWheel(e){e.preventDefault();const t=.5,n=Math.sign(e.deltaY);this.targetCameraDistance=Li.clamp(this.targetCameraDistance+n*t,this.minDistance,this.maxDistance),window.requestSovereignFrame&&window.requestSovereignFrame()}updatePointer(e){this.pointer.x=e.clientX/window.innerWidth*2-1,this.pointer.y=-(e.clientY/window.innerHeight)*2+1}onPointerDown(e){if(this.activePointers.set(e.pointerId,e),this.activePointers.size===2){const s=Array.from(this.activePointers.values());this.initialPinchDistance=Math.hypot(s[0].clientX-s[1].clientX,s[0].clientY-s[1].clientY),this.startPinchZoom=this.targetCameraDistance;return}if(this.isVictorious){this.isDragging=!0,this.updatePointer(e),this.lastPointer.copy(this.pointer),this.dragStartPoint.set(e.clientX,e.clientY),window.requestSovereignFrame&&window.requestSovereignFrame();return}this.isDragging=!0,this.isResetting=!1,this.updatePointer(e),this.lastPointer.copy(this.pointer),this.dragStartPoint.set(e.clientX,e.clientY),this.lockedLocalAxis=null,this.lockedDragDir=null,window.requestSovereignFrame&&window.requestSovereignFrame(),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.grid.cells.map(s=>s.mesh),n=this.raycaster.intersectObjects(t,!1)[0];if(n){const s=n.object.userData,r=this.gameController.getPlateAt(s.faceIndex,s.u,s.v),a=this.gameController.getCompletedPathByPlate(s.faceIndex,s.u,s.v)||this.gameController.stubs.find(o=>o.cells.some(c=>c.f===s.faceIndex&&c.u===s.u&&c.v===s.v));if(r||a){if(this.isLongPress=!1,this.longPressStartTime=Date.now(),this.dialEl&&(this.dialEl.style.left=`${e.clientX}px`,this.dialEl.style.top=`${e.clientY}px`,this.dialEl.classList.remove("hidden"),this.dialProgressEl&&(this.dialProgressEl.style.strokeDashoffset="151")),clearTimeout(this.longPressTimer),this.longPressTimer=setTimeout(()=>{this.isLongPress=!0,this.gameController.deletePathByPlate(s.faceIndex,s.u,s.v),this.onPointerUp()},this.LONG_PRESS_DURATION),r){this.gameController.clearPathsByColor(r.color,r.label),this.activeColor=r.color,this.activeLabel=r.label;const o=this.grid.getFaceNormal(s.faceIndex);this.lastCell={f:s.faceIndex,u:s.u,v:s.v,position:n.point.clone(),normal:o},this.activePath={color:this.activeColor,label:this.activeLabel,startPlate:r,cells:[{f:s.faceIndex,u:s.u,v:s.v}],meshesByCell:{},meshes:[],isCompleted:!1},this.gameController.setPlateHighlight(r,!0)}else if(a&&!a.isCompleted){this.activeColor=a.color,this.activeLabel=a.label,this.activePath=a,this.activePath.isCompleted=!1,this.gameController.removeCompletedPath(a);const o=a.cells.findIndex(l=>l.f===s.faceIndex&&l.u===s.u&&l.v===s.v);this.activePath.cells=this.activePath.cells.slice(0,o+1),this.redrawEntirePath(this.activePath,!0);const c=this.grid.getFaceNormal(s.faceIndex);this.lastCell={f:s.faceIndex,u:s.u,v:s.v,position:n.point.clone(),normal:c},this.gameController.setPlateHighlight(a.startPlate,!0)}}}}onPointerMove(e){if(this.activePointers.set(e.pointerId,e),this.activePointers.size===2){const l=Array.from(this.activePointers.values()),d=Math.hypot(l[0].clientX-l[1].clientX,l[0].clientY-l[1].clientY),u=(this.initialPinchDistance-d)*.05;this.targetCameraDistance=Li.clamp(this.startPinchZoom+u,this.minDistance,this.maxDistance),window.requestSovereignFrame&&window.requestSovereignFrame();return}if(!this.isDragging)return;Math.sqrt((e.clientX-this.dragStartPoint.x)**2+(e.clientY-this.dragStartPoint.y)**2)>15&&(clearTimeout(this.longPressTimer),this.dialEl?.classList.add("hidden")),this.updatePointer(e);const n=e.clientX-this.dragStartPoint.x,s=e.clientY-this.dragStartPoint.y;let r=Math.max(-1,Math.min(1,n/250)),a=Math.max(-1,Math.min(1,s/250));this.currentDragVector.set(r,a);let o=0;if(this.activePath){const{u:l,v:d}=this.lastCell;let u=!1;const h=.15;this.lockedDragDir==="x"?(l===0&&r<-h||l===this.grid.size-1&&r>h)&&(u=!0):this.lockedDragDir==="y"&&(d===0&&a<-h||d===this.grid.size-1&&a>h)&&(u=!0),o=u?-.15:0}else o=1.5;if(this.activePath){if(this.isVictorious)return;this.raycaster.setFromCamera(this.pointer,this.camera);const l=this.grid.cells.map(u=>u.mesh),d=this.raycaster.intersectObjects(l,!1)[0];if(d){const u=d.object.userData;if((u.faceIndex!==this.lastCell.f||u.u!==this.lastCell.u||u.v!==this.lastCell.v)&&this.grid.getNeighborCells(this.lastCell).some(m=>m.f===u.faceIndex&&m.u===u.u&&m.v===u.v)){const m=this.activePath.cells.findIndex(f=>f.f===u.faceIndex&&f.u===u.u&&f.v===u.v);if(m!==-1)this.activePath.cells=this.activePath.cells.slice(0,m+1);else{const f=this.gameController.getCellOccupant(u.faceIndex,u.u,u.v),M=this.gameController.getPlateAt(u.faceIndex,u.u,u.v),b=M&&M.color===this.activeColor&&M.label===this.activeLabel&&M!==this.activePath.startPlate;if(f&&f!==this.activePath&&!b)return;this.activePath.cells.push({f:u.faceIndex,u:u.u,v:u.v}),Ln.playTick(this.activePath.cells.length)}const g=this.activePath.cells[this.activePath.cells.length-1],_=this.grid.getFaceNormal(g.f);this.lastCell={...g,position:this.grid.getCellPosition(g.f,g.u,g.v).add(_.clone().multiplyScalar(.01)),normal:_};const p=this.gameController.getPlateAt(g.f,g.u,g.v);if(p&&p.color===this.activeColor&&p.label===this.activeLabel&&p!==this.activePath.startPlate){this.activePath.isCompleted=!0,this.gameController.addCompletedPath(this.activePath),this.redrawEntirePath(this.activePath,!0);const f=this.gameController.getPlateAt(this.activePath.cells[0].f,this.activePath.cells[0].u,this.activePath.cells[0].v),M=p;this.flashingPaths.set(this.activePath,{startTime:Date.now(),duration:333,plates:[f,M]}),Ln.playLock(),this.onPointerUp();return}this.redrawEntirePath(this.activePath)}}}const c=15;if(this.lockedLocalAxis===null&&(Math.abs(n)>c||Math.abs(s)>c)){this.lockedDragDir=Math.abs(n)>Math.abs(s)?"x":"y";const l=this.lockedDragDir==="x"?new L(0,1,0).applyQuaternion(this.camera.quaternion).normalize():new L(1,0,0).applyQuaternion(this.camera.quaternion).normalize(),d=[{axis:new L(1,0,0),dotWorld:new L(1,0,0).applyQuaternion(this.grid.group.quaternion)},{axis:new L(0,1,0),dotWorld:new L(0,1,0).applyQuaternion(this.grid.group.quaternion)},{axis:new L(0,0,1),dotWorld:new L(0,0,1).applyQuaternion(this.grid.group.quaternion)}];d.sort((u,h)=>Math.abs(h.dotWorld.dot(l))-Math.abs(u.dotWorld.dot(l))),this.lockedLocalAxis=d[0].axis,this.axisSign=Math.sign(d[0].dotWorld.dot(l))||1}if(this.lockedLocalAxis!==null){const l=this.pointer.x-this.lastPointer.x,d=this.pointer.y-this.lastPointer.y,u=this.lockedDragDir==="x"?l:-d*1.5;this.targetRotationVelocity=u*o*this.sensitivityFactor,window.requestSovereignFrame&&window.requestSovereignFrame()}this.lastPointer.copy(this.pointer)}onPointerUp(e){e?this.activePointers.delete(e.pointerId):this.activePointers.clear(),this.stopInteraction()}stopInteraction(){clearTimeout(this.longPressTimer),this.dialEl?.classList.add("hidden"),this.isDragging=!1,this.targetRotationVelocity=0,this.lockedLocalAxis=null,this.lockedDragDir=null,window.requestSovereignFrame&&window.requestSovereignFrame(),this.activePath&&!this.activePath.isCompleted&&(this.gameController.stubs.indexOf(this.activePath)===-1&&this.gameController.addStub(this.activePath),this.gameController.setPlateHighlight(this.activePath.startPlate,!1)),this.activePath=null,this.activeColor=null,this.lastCell=null}update(){const e=this.clock.getDelta(),t=e*60,n=1-Math.pow(1-.1,t);this.currentCameraDistance=Li.lerp(this.currentCameraDistance,this.targetCameraDistance,n);const s=this.camera.position.clone().normalize();if(this.camera.position.copy(s.multiplyScalar(this.currentCameraDistance)),this.compassIcon){const r=new Bt().setFromQuaternion(this.grid.group.quaternion,"YXZ"),a=-Li.radToDeg(r.y);this.compassIcon.style.transform=`rotate(${a}deg)`}if(this.isDragging&&!this.isLongPress&&this.longPressStartTime>0){const r=Date.now()-this.longPressStartTime,a=Math.min(1,r/this.LONG_PRESS_DURATION);if(this.dialProgressEl){const o=151*(1-a);this.dialProgressEl.style.strokeDashoffset=o.toString()}}if(this.flashingPaths.size>0){const r=Date.now();for(const[a,o]of this.flashingPaths.entries()){const c=r-o.startTime,l=Math.min(c/o.duration,1),m=1+Math.pow(Math.sin(l*Math.PI*3),4)*8*(1-l),g=[...a.meshes];o.plates&&o.plates.forEach(_=>{_.mesh&&g.push(_.mesh),_.labelMesh&&g.push(_.labelMesh)}),g.forEach(_=>{_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(f=>{f.emissiveIntensity!==void 0&&(f.emissiveIntensity=.2*m)})}),l>=1&&(g.forEach(_=>{_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(f=>{f.emissiveIntensity!==void 0&&(f.emissiveIntensity=.2)})}),this.flashingPaths.delete(a))}}if(this.isResetting)this.grid.group.quaternion.slerp(this.identityQuaternion,.15*t),this.grid.group.quaternion.angleTo(this.identityQuaternion)<.01&&(this.grid.group.quaternion.copy(this.identityQuaternion),this.isResetting=!1);else if(this.isVictorious){if(this.isDragging)this.victoryTime+=e;else{this.victoryTime+=e;const a=.25,o=Math.sin(this.victoryTime*.3)*a*e,c=Math.cos(this.victoryTime*.4)*a*e,l=Math.sin(this.victoryTime*.5)*a*e;this.grid.group.rotateX(o),this.grid.group.rotateY(c),this.grid.group.rotateZ(l)}const r=(Math.sin(this.victoryTime*3)*.5+.5)*.4;this.gameController.completedPaths.forEach(a=>{a.meshes.forEach(o=>{o.material&&(o.material.emissiveIntensity=r*.25)})})}else{const r=1-Math.pow(1-this.lerpFactor,t);this.currentRotationVelocity=Li.lerp(this.currentRotationVelocity,this.targetRotationVelocity,r),this.lockedLocalAxis!==null&&Math.abs(this.currentRotationVelocity)>1e-4&&this.grid.group.rotateOnAxis(this.lockedLocalAxis,this.currentRotationVelocity*this.axisSign*t)}this.grid.update(this.camera)}redrawEntirePath(e,t=!1){if(!t&&e._lastDrawnLength===e.cells.length)return;e._lastDrawnLength=e.cells.length,e.meshes.forEach(a=>this.grid.group.remove(a)),e.meshes=[],e.meshesByCell={},e.ribbonLabels=[];const n=e===this.activePath&&!e.isCompleted,s=this.grid.cellSize*.32,r=this.grid.getPathPoints(e.cells);if(n){const a=new Pe(e.color),o=new mn({color:a,emissive:a,emissiveIntensity:.7,roughness:.3,transparent:!1,opacity:1,side:bt,depthWrite:!0}),c=Xa.createLabeledTexture(e.color,e.label),l=new mn({map:c,emissiveMap:c,transparent:!0,opacity:1,depthWrite:!1,side:bt,emissive:16777215,emissiveIntensity:.8});for(let d=0;d<r.length;d++){const u=r[d].pos,h=r[d].cellIdx;if(e.meshesByCell[h]||(e.meshesByCell[h]=[]),r[d].isCenter||d===0||d===r.length-1){const m=this.grid.getFaceNormal(e.cells[h].f),g=.003,_=new $n(s/2,32),p=new Ge(_,o);p.position.copy(u).add(m.clone().multiplyScalar(g)),p.lookAt(p.position.clone().add(m)),p.renderOrder=60,this.grid.group.add(p),e.meshes.push(p),e.meshesByCell[h].push(p);const f=new $n(s*.45,32),M=new Ge(f,l);M.position.copy(p.position).add(m.clone().multiplyScalar(.001)),M.lookAt(M.position.clone().add(m)),M.renderOrder=61,this.grid.group.add(M),e.meshes.push(M),e.meshesByCell[h].push(M)}if(d>0){const m=r[d-1],g=r[d],_=g.pos.distanceTo(m.pos);if(_>.001){const p=m.isCenter?e.cells[m.cellIdx].f:e.cells[g.cellIdx].f,f=this.grid.getFaceNormal(p),M=new Zn(s,1),b=.003,y=new Ge(M,o);y.scale.y=_,y.position.copy(g.pos.clone().add(m.pos).multiplyScalar(.5)).add(f.clone().multiplyScalar(b)),y.quaternion.setFromRotationMatrix(new je().lookAt(g.pos,m.pos,f)),y.rotateX(Math.PI/2),y.renderOrder=60,this.grid.group.add(y),e.meshes.push(y),e.meshesByCell[h]||(e.meshesByCell[h]=[]),e.meshesByCell[h].push(y)}}}}else{const a=this.grid.createPathMeshes(e.cells,e.color,e.label);e.meshes=a.meshes,e.meshesByCell=a.meshesByCell}}setVictory(e){this.isVictorious=e,this.victoryTime=0,e?(this.targetRotationVelocity=.02,this.lastNudgeTime=Date.now(),this.victoryAxis=new L(Math.random(),Math.random(),Math.random()).normalize()):(this.grid.group.quaternion.identity(),this.currentRotationVelocity=0,this.targetRotationVelocity=0,this.resetOrientation())}updatePipeMaterials(e,t){const n=s=>{s.meshes.forEach(r=>{r.material&&(e!==void 0&&(r.material.roughness=e),t!==void 0&&(r.material.ior=t))})};this.gameController.completedPaths.forEach(n),this.gameController.stubs.forEach(n),this.activePath&&n(this.activePath)}setSensitivity(e){this.sensitivityFactor=e}resetOrientation(){const e=new Bt().setFromQuaternion(this.grid.group.quaternion,"YXZ");this.identityQuaternion.setFromAxisAngle(new L(0,1,0),e.y),this.targetRotationVelocity=0,this.currentRotationVelocity=0,this.lockedLocalAxis=null,this.lockedDragDir=null,this.isResetting=!0,window.requestSovereignFrame&&window.requestSovereignFrame()}}class qm{constructor(e){this.onChange=e,this.sensitivity=parseFloat(localStorage.getItem("flowfree_sensitivity"))||1,this.audioEnabled=localStorage.getItem("flowfree_audio")!=="false",this.darkMode=localStorage.getItem("flowfree_dark_mode")==="true",this.ecoMode=localStorage.getItem("flowfree_eco_mode")==="true",this.initUI(),this.triggerChange()}initUI(){this.btn=document.getElementById("settings-btn"),this.panel=document.getElementById("settings-panel"),this.audioBtn=document.getElementById("audio-icon-btn"),this.themeBtn=document.getElementById("theme-icon-btn"),this.ecoBtn=document.getElementById("eco-btn"),this.lvlBtn=document.getElementById("lvl-btn"),this.versionBtn=document.getElementById("version-btn"),!(!this.btn||!this.panel)&&(this.updateIconState(),this.btn.onclick=e=>{e.stopPropagation(),this.panel.classList.toggle("hidden")},this.audioBtn&&(this.audioBtn.onclick=e=>{e.stopPropagation(),this.audioEnabled=!this.audioEnabled,localStorage.setItem("flowfree_audio",this.audioEnabled),this.updateIconState(),this.triggerChange()}),this.themeBtn&&(this.themeBtn.onclick=e=>{e.stopPropagation(),this.darkMode=!this.darkMode,localStorage.setItem("flowfree_dark_mode",this.darkMode),this.updateIconState(),this.triggerChange()}),this.ecoBtn&&(this.ecoBtn.onclick=e=>{e.stopPropagation(),this.ecoMode=!this.ecoMode,localStorage.setItem("flowfree_eco_mode",this.ecoMode),this.updateIconState(),this.triggerChange()}),this.lvlBtn&&(this.lvlBtn.onclick=e=>{e.stopPropagation(),window.showLevelModal&&window.showLevelModal(),this.panel.classList.add("hidden")}),this.versionBtn&&(this.versionBtn.onclick=e=>{e.stopPropagation(),window.showVersionModal&&window.showVersionModal(),this.panel.classList.add("hidden")}),this.refillBtn=document.getElementById("refill-btn"),this.refillBtn&&(this.refillBtn.onclick=e=>{e.stopPropagation(),this.onRefill&&this.onRefill(),this.panel.classList.add("hidden")}),window.addEventListener("pointerdown",e=>{!this.panel.contains(e.target)&&e.target!==this.btn&&this.panel.classList.add("hidden")}))}updateIconState(){if(this.audioBtn){const e=this.audioBtn.querySelectorAll(".audio-on"),t=this.audioBtn.querySelectorAll(".audio-off");e.forEach(n=>n.classList.toggle("hidden",!this.audioEnabled)),t.forEach(n=>n.classList.toggle("hidden",this.audioEnabled)),this.audioBtn.querySelector(".settings-icon").classList.toggle("active",this.audioEnabled)}if(this.themeBtn){const e=this.themeBtn.querySelectorAll(".theme-sun"),t=this.themeBtn.querySelectorAll(".theme-moon");e.forEach(n=>n.classList.toggle("hidden",!this.darkMode)),t.forEach(n=>n.classList.toggle("hidden",this.darkMode)),this.themeBtn.querySelector(".settings-icon").classList.toggle("active",this.darkMode)}this.ecoBtn&&this.ecoBtn.querySelector(".settings-icon").classList.toggle("active",this.ecoMode)}triggerChange(e={}){this.onChange&&this.onChange({audioEnabled:this.audioEnabled,darkMode:this.darkMode,ecoMode:this.ecoMode,...e})}}class Ym{constructor(e,t,n,s,r,a){this.gameController=e,this.scene=t,this.renderer=n,this.cubeGrid=s,this.interactionManager=r,this.backgroundManager=a,this.visible=!1,this.panel=null,this.init()}init(){window.addEventListener("keydown",e=>{e.ctrlKey&&e.shiftKey&&e.altKey&&(e.key.toLowerCase()==="d"||e.code==="KeyD")&&(e.preventDefault(),this.toggle())})}toggle(){this.visible=!this.visible,this.visible&&!this.panel&&this.createPanel(),this.panel&&(this.panel.classList.toggle("hidden",!this.visible),console.log("Sovereign Debug Panel toggled:",this.visible))}createPanel(){this.panel=document.createElement("div"),this.panel.id="sovereign-debug-panel",this.panel.className="hidden",this.panel.addEventListener("pointerdown",_=>_.stopPropagation()),this.panel.addEventListener("mousedown",_=>_.stopPropagation()),this.panel.addEventListener("touchstart",_=>_.stopPropagation());const e=document.createElement("h3");e.innerText="SOVEREIGN DEBUG",this.panel.appendChild(e);let t=null,n=null,s=null;this.scene.traverse(_=>{_.isAmbientLight&&(t=_),_.isPointLight&&(n?s||(s=_):n=_)});const r=document.createElement("div");r.className="debug-row";const a=document.createElement("button");a.innerText="TOGGLE THEME (DARK/LIGHT)",a.style.width="100%",a.style.padding="8px",a.style.background="rgba(0,0,0,0.5)",a.style.color="#fff",a.style.border="1px solid #444",a.style.cursor="pointer";let o="dark";a.onclick=()=>{o=o==="dark"?"light":"dark",this.backgroundManager.setTheme(o),o==="light"?(t&&(t.intensity=0),this.scene.environmentIntensity=.6,n&&(n.intensity=4.5),s&&(s.intensity=1),this.renderer.toneMappingExposure=.9,this.backgroundManager.setIntensity(.7)):(t&&(t.intensity=.1),this.scene.environmentIntensity=1,n&&(n.intensity=4),this.renderer.toneMappingExposure=1,this.backgroundManager.setIntensity(1)),this.refreshControls()},r.appendChild(a),this.panel.appendChild(r);const c=document.createElement("div");c.className="debug-row";const l=document.createElement("button");l.innerText="RESET TOTAL MASTERY SCORE",l.style.width="100%",l.style.padding="8px",l.style.background="rgba(255, 59, 48, 0.2)",l.style.color="#ff3b30",l.style.border="1px solid #ff3b30",l.style.cursor="pointer",l.style.marginTop="10px",l.style.fontWeight="bold",l.onclick=()=>{confirm("Reset TOTAL Mastery Score to 0? This cannot be undone.")&&(localStorage.setItem("sovereign_total_mastery","0"),this.gameController.totalMastery=0,this.gameController.scoreDisplay&&(this.gameController.scoreDisplay.innerText="0"),console.log("Sovereign Debug: Total Mastery Score Reset."))},c.appendChild(l),this.panel.appendChild(c);const d=[{id:"ambient",label:"Ambient",min:0,max:2,step:.1,val:t?.intensity||0,cb:_=>{t&&(t.intensity=_)}},{id:"env",label:"Env Intensity",min:0,max:5,step:.1,val:this.scene.environmentIntensity,cb:_=>{this.scene.environmentIntensity=_}},{id:"bg-int",label:"BG Intensity",min:0,max:5,step:.1,val:this.backgroundManager.intensity,cb:_=>{this.backgroundManager.setIntensity(_)}},{id:"p1",label:"Point 1",min:0,max:20,step:.5,val:n?.intensity||0,cb:_=>{n&&(n.intensity=_)}},{id:"p2",label:"Point 2",min:0,max:10,step:.5,val:s?.intensity||0,cb:_=>{s&&(s.intensity=_)}},{id:"exposure",label:"Exposure",min:.1,max:3,step:.1,val:this.renderer.toneMappingExposure,cb:_=>{this.renderer.toneMappingExposure=_}},{id:"roughness",label:"Roughness",min:0,max:1,step:.05,val:this.cubeGrid.roughness,cb:_=>{this.cubeGrid.roughness=_,this.cubeGrid.coreMesh.material.roughness=_,this.interactionManager.updatePipeMaterials(_,void 0)}},{id:"ior",label:"IOR",min:1,max:2,step:.01,val:this.cubeGrid.ior,cb:_=>{this.cubeGrid.ior=_,this.cubeGrid.coreMesh.material.ior=_,this.interactionManager.updatePipeMaterials(void 0,_)}},{id:"opacity",label:"Pipe Opacity",min:.1,max:1,step:.05,val:window.activePipeOpacity||.5,cb:_=>{window.activePipeOpacity=_,this.interactionManager.activePath&&this.interactionManager.redrawEntirePath(this.interactionManager.activePath)}}];this.controlMap={},d.forEach(_=>{const p=document.createElement("div");p.className="debug-row";const f=document.createElement("label");f.innerText=_.label;const M=document.createElement("input");M.type="range",M.min=_.min,M.max=_.max,M.step=_.step,M.value=_.val;const b=document.createElement("span");b.className="debug-val",b.innerText=(_.val||0).toFixed(2),this.controlMap[_.id]={slider:M,valDisplay:b},M.addEventListener("input",()=>{const y=parseFloat(M.value);b.innerText=(y||0).toFixed(2),_.cb(y)}),p.appendChild(f),p.appendChild(M),p.appendChild(b),this.panel.appendChild(p)});const u=document.createElement("div");u.className="debug-row",u.style.display="flex",u.style.justifyContent="space-between",u.style.marginTop="10px";const h=(_,p,f)=>{const M=document.createElement("div"),b=document.createElement("div");b.innerText=_,b.style.fontSize="10px";const y=document.createElement("input");return y.type="color",y.value=p,y.oninput=()=>f(y.value),M.appendChild(b),M.appendChild(y),M},m=h("BG Top","#050505",_=>this.backgroundManager.setColors(_,void 0)),g=h("BG Bottom","#151515",_=>this.backgroundManager.setColors(void 0,_));u.appendChild(m),u.appendChild(g),this.panel.appendChild(u),document.body.appendChild(this.panel)}refreshControls(){if(!this.controlMap)return;const e=this.scene.children.find(t=>t.isAmbientLight);e&&this.controlMap.ambient&&(this.controlMap.ambient.slider.value=e.intensity,this.controlMap.ambient.valDisplay.innerText=e.intensity.toFixed(2)),this.controlMap.env&&(this.controlMap.env.slider.value=this.scene.environmentIntensity,this.controlMap.env.valDisplay.innerText=this.scene.environmentIntensity.toFixed(2)),this.controlMap["bg-int"]&&(this.controlMap["bg-int"].slider.value=this.backgroundManager.intensity,this.controlMap["bg-int"].valDisplay.innerText=this.backgroundManager.intensity.toFixed(2))}}class $m{constructor(e,t,n){this.scene=e,this.intensity=1,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=1024,this.canvas.height=1024,this.texture=new _a(this.canvas),this.gridColor="rgba(255,255,255,0.05)",this.topColor=t||"#050505",this.bottomColor=n||"#151515",this.init(),this.scene&&(this.scene.background=this.texture),window.addEventListener("resize",()=>{this.draw()})}init(){this.draw()}draw(){const e=this.context,t=window.innerWidth,n=window.innerHeight;this.canvas.width=t,this.canvas.height=n;const s=e.createRadialGradient(t/2,n/2,0,t/2,n/2,Math.max(t,n));s.addColorStop(0,this.topColor),s.addColorStop(1,this.bottomColor),e.fillStyle=s,e.fillRect(0,0,t,n);const r=12.5;e.strokeStyle=this.gridColor,e.lineWidth=1,e.beginPath();for(let a=r;a<t-1;a+=r)e.moveTo(a,0),e.lineTo(a,n);for(let a=r;a<n-1;a+=r)e.moveTo(0,a),e.lineTo(t,a);e.stroke(),this.texture.needsUpdate=!0}updateAspect(){}setColors(e,t){e&&(this.topColor=e),t&&(this.bottomColor=t),this.draw()}setTheme(e){e==="dark"?(this.gridColor="rgba(255,255,255,0.08)",this.topColor="#1e1e22",this.bottomColor="#0d0d0f",document.body.classList.add("dark-theme")):(this.gridColor="rgba(0,0,0,0.25)",this.topColor="#d8d8d8",this.bottomColor="#b0b0b0",document.body.classList.remove("dark-theme")),this.draw()}setIntensity(e){this.intensity=e,this.scene&&(this.scene.backgroundIntensity=e)}update(){}}const Km="modulepreload",Zm=function(i){return"/flowfree-cube/"+i},ul={},jm=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var a=l;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(t.map(d=>{if(d=Zm(d),d in ul)return;ul[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Km,u||(m.as="script"),m.crossOrigin="",m.href=d,c&&m.setAttribute("nonce",c),document.head.appendChild(m),u)return new Promise((g,_)=>{m.addEventListener("load",g),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function Jm(i={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:s,onRegisteredSW:r,onRegisterError:a}=i;let o,c;const l=async(u=!0)=>{await c};async function d(){if("serviceWorker"in navigator){if(o=await jm(async()=>{const{Workbox:u}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:u}},[]).then(({Workbox:u})=>new u("/flowfree-cube/sw.js",{scope:"/flowfree-cube/",type:"classic"})).catch(u=>{a?.(u)}),!o)return;o.addEventListener("activated",u=>{(u.isUpdate||u.isExternal)&&window.location.reload()}),o.addEventListener("installed",u=>{u.isUpdate||n?.()}),o.register({immediate:e}).then(u=>{r?r("/flowfree-cube/sw.js",u):s?.(u)}).catch(u=>{a?.(u)})}}return c=d(),l}class Qm extends Rl{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new vn;e.deleteAttribute("uv");const t=new mn({side:Pt}),n=new mn,s=new Wa(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Sh(e,n,6),o=new wt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new Ge(e,gi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Ge(e,gi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const d=new Ge(e,gi(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const u=new Ge(e,gi(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const h=new Ge(e,gi(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const m=new Ge(e,gi(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function gi(i){return new Uh({color:0,emissive:16777215,emissiveIntensity:i})}Jm({onOfflineReady(){}});const eg="1.187.22",tg="/flowfree-cube/version.json";async function qa(){try{const i=localStorage.getItem("lastUpdateReload");if(i&&Date.now()-parseInt(i)<300*1e3)return;const e=await fetch(`${tg}?t=${Date.now()}`,{cache:"no-store"});if(!e.ok)return;const{version:t}=await e.json();t&&t!==eg&&ng()}catch{}}function ng(){const i=document.getElementById("update-banner");if(!i||!i.classList.contains("hidden")||sessionStorage.getItem("dismissedUpdate"))return;i.classList.remove("hidden");const e=document.getElementById("reload-btn"),t=document.getElementById("dismiss-update-btn");e&&(e.onclick=()=>{localStorage.setItem("lastUpdateReload",Date.now().toString()),"serviceWorker"in navigator?navigator.serviceWorker.getRegistrations().then(n=>{for(let s of n)s.unregister();window.location.href=window.location.origin+window.location.pathname+"?v="+Date.now()}):window.location.reload(!0)}),t&&(t.onclick=()=>{sessionStorage.setItem("dismissedUpdate","true"),i.classList.add("hidden")})}qa();setInterval(qa,60*1e3);document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&qa()});const Lt=new Rl;Lt.background=new Pe(14540253);const xt=new Bm({antialias:!0,powerPreference:"default",alpha:!1});xt.setSize(window.innerWidth,window.innerHeight);xt.setClearColor(0,0);xt.setPixelRatio(Math.min(window.devicePixelRatio,1.5));xt.shadowMap.enabled=!0;xt.toneMapping=Ca;xt.toneMappingExposure=.9;document.body.appendChild(xt.domElement);Lt.environmentIntensity=.6;const ig=new va(xt),ql=ig.fromScene(new Qm(xt),.04).texture;Lt.environment=ql;const Ht=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3);Ht.position.set(7,6,7);Ht.lookAt(0,0,0);function Ya(i){i||(i=He.size);const e=Ht.fov*Math.PI/180,t=Ht.aspect,s=i*1*.75,a=window.innerWidth>768?1.75:1.1,o=s*a,c=2*Math.atan(Math.tan(e/2)*t),l=o/Math.tan(e/2),d=o/Math.tan(c/2),u=Math.max(l,d);try{window.interactionManager&&(window.interactionManager.targetCameraDistance=u,window.interactionManager.currentCameraDistance=u)}catch{}const h=Ht.position.clone().normalize();Ht.position.copy(h).multiplyScalar(u),Ht.updateProjectionMatrix()}window.fitCameraToCube=Ya;const ya=new zh(16777215,0);Lt.add(ya);const Vs=new Wa(16777215,4.5);Vs.position.set(20,20,20);Lt.add(Vs);const Gs=new Wa(16777215,1);Gs.position.set(-20,-10,-20);Lt.add(Gs);const He=new zm(Lt,5),zt=new Wm(He);window.gameController=zt;const gn=new Xm(Ht,He,xt,zt,Lt);window.interactionManager=gn;const Ea=new $m(Lt,"#020202","#0a0a0a");new Ym(zt,Lt,xt,He,gn,Ea);function sg(i){i.levelJump&&(zt.currentLevel=i.levelJump,zt.initLevel(),localStorage.setItem("sovereign_cube_level",i.levelJump));const e=!!i.ecoMode;document.body.classList.toggle("eco-mode",e),window.currentRenderTimeout=e?500:2e3;const t=e?1:Math.min(window.devicePixelRatio,1.5);xt.getPixelRatio()!==t&&(xt.setPixelRatio(t),xt.setSize(window.innerWidth,window.innerHeight)),Lt.environment=e?null:ql,e?He.coreMat&&(He.coreMat.roughness=1,He.coreMat.metalness=0,He.coreMat.clearcoat=0,He.coreMat.transmission=0,He.coreMat.opacity=i.darkMode?.8:.6,He.coreMat.color.set(16777215),He.coreMat.emissive.set(16777215),He.coreMat.emissiveIntensity=i.darkMode?.05:.25,He.isEco=!0):He.coreMat&&(He.coreMat.roughness=i.darkMode?.4:.3,He.coreMat.metalness=.05,He.coreMat.clearcoat=1,He.coreMat.transmission=.95,He.coreMat.opacity=1,He.coreMat.ior=i.darkMode?1.71:1.62,He.isEco=!1),i.darkMode?(Ea.setTheme("dark"),xt.toneMappingExposure=.7,Lt.environmentIntensity=.6,ya.intensity=.8,e||(He.coreMat.roughness=.4,He.coreMat.ior=1.71),Vs.intensity=1,Gs.intensity=.5,He.barMat&&(He.barMat.color.set(16777215),He.barMat.opacity=.1)):(Ea.setTheme("light"),xt.toneMappingExposure=.9,Lt.environmentIntensity=.6,ya.intensity=0,e||(He.coreMat.roughness=.3,He.coreMat.ior=1.62),Vs.intensity=4.5,Gs.intensity=1,He.barMat&&(He.barMat.color.set(0),He.barMat.opacity=.07))}const rg=new qm(sg);rg.onRefill=()=>zt.refillLives();const Yl=document.getElementById("victory-modal"),ag=document.getElementById("next-level-btn");function $l(){const{completed:i,total:e}=zt.getStats(),t=document.getElementById("level-val");t&&(t.textContent=zt.currentLevel),i===e&&e>0&&!gn.isVictorious&&(Yl.classList.remove("hidden"),gn.setVictory(!0))}zt.onUpdate=$l;$l();ag.onclick=()=>{Yl.classList.add("hidden"),gn.setVictory(!1),zt.nextLevel()};(async()=>{try{const i=await fetch("/flowfree-cube/version.json?t="+Date.now(),{cache:"no-store"});i.ok&&(window.appVersion=await i.json())}catch{}})();window.showVersionModal=()=>{const i=document.getElementById("version-modal"),e=window.appVersion||{version:"1.169.0",commit:"8f2a91b",buildDate:"2026-04-02"};document.getElementById("v-num").innerText=e.version,document.getElementById("v-commit").innerText=e.commit,document.getElementById("v-date").innerText=e.buildDate,i.classList.remove("hidden")};function og(){const i=document.getElementById("v-close-btn");i&&(i.onclick=()=>document.getElementById("version-modal").classList.add("hidden"));const e=document.getElementById("v-copy-btn");e&&(e.onclick=()=>{const s=window.appVersion||{version:"1.169.0",commit:"8f2a91b",buildDate:"2026-04-02"},r=`Sovereign Cube
Version: ${s.version}
Commit: ${s.commit}
Date: ${s.buildDate}`;navigator.clipboard.writeText(r);const a=document.getElementById("v-copy-btn");if(a){const o=a.innerText;a.innerText="COPIED!",setTimeout(()=>a.innerText=o,2e3)}});const t=document.getElementById("level-cancel-btn");t&&(t.onclick=()=>document.getElementById("level-modal").classList.add("hidden"));const n=document.getElementById("level-jump-btn");n&&(n.onclick=()=>{const s=document.getElementById("level-input"),r=parseInt(s.value,10);!isNaN(r)&&r>0&&(zt.currentLevel=r,zt.initLevel(),document.getElementById("level-modal").classList.add("hidden"),window.interactionManager&&window.interactionManager.resetOrientation())})}window.showLevelModal=()=>{const i=document.getElementById("level-modal"),e=document.getElementById("level-input");i&&e&&(e.value=zt.currentLevel,i.classList.remove("hidden"),e.focus(),e.select())};og();let ba=!0,Kl=Date.now();window.currentRenderTimeout=2e3;let dl=0;const lg=30,cg=1e3/lg;function $a(){ba=!0,Kl=Date.now()}window.requestSovereignFrame=$a;let Ta=!0;document.addEventListener("visibilitychange",()=>{Ta=document.visibilityState==="visible",Ta&&$a()});function Zl(){if(requestAnimationFrame(Zl),!Ta)return;const i=Date.now();if(document.body.classList.contains("eco-mode")&&i-dl<cg)return;const t=gn.isDragging||gn.isResetting||gn.isVictorious||i-Kl<window.currentRenderTimeout;(ba||t)&&(dl=i,gn.update(),He.update(Ht),xt.render(Lt,Ht),ba=!1)}window.addEventListener("resize",()=>{Ht.aspect=window.innerWidth/window.innerHeight,Ht.updateProjectionMatrix(),xt.setSize(window.innerWidth,window.innerHeight),Ya(),$a()});Zl();Ya();console.log("3D FlowFree Sovereign Restoration Complete. Battery Optimized v1.185.2");
//# sourceMappingURL=index-DJ-8myaB.js.map
