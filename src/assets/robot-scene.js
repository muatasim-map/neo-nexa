"use strict";(()=>{var kh=0,mo=1,Wh=2,Ta=1,Xh=2,Yr=3,zi=0,kt=1,wi=2,Ai=0,gr=1,go=2,vo=3,_o=4,jh=5,Ki=100,qh=101,Yh=102,Zh=103,Jh=104,Kh=200,Qh=201,$h=202,ec=203,vn=204,_n=205,tc=206,ic=207,rc=208,ac=209,nc=210,sc=211,oc=212,lc=213,hc=214,xn=0,Mn=1,Sn=2,vr=3,yn=4,En=5,Tn=6,bn=7,xo=0,cc=1,uc=2,pi=0,Mo=1,So=2,yo=3,Eo=4,To=5,bo=6,wo=7,Ao=300,Qi=301,_r=302,wn=303,An=304,ba=306,Rn=1e3,Ri=1001,Cn=1002,Nt=1003,dc=1004,wa=1005,Dt=1006,Pn=1007,$i=1008,jt=1009,Ro=1010,Co=1011,Zr=1012,Ln=1013,fi=1014,mi=1015,Ci=1016,In=1017,Un=1018,Jr=1020,Po=35902,Lo=35899,Io=1021,Uo=1022,oi=1023,Pi=1026,er=1027,No=1028,Nn=1029,tr=1030,Dn=1031,On=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,Fn=35840,Bn=35841,zn=35842,Hn=35843,Vn=36196,Gn=37492,kn=37496,Wn=37488,Xn=37489,La=37490,jn=37491,qn=37808,Yn=37809,Zn=37810,Jn=37811,Kn=37812,Qn=37813,$n=37814,es=37815,ts=37816,is=37817,rs=37818,as=37819,ns=37820,ss=37821,os=36492,ls=36494,hs=36495,cs=36283,us=36284,Ia=36285,ds=36286,Ua=2300,ps=2301,fs=2302,Do=2303,Oo=2400,Fo=2401,Bo=2402,pc=3200,ms=0,fc=1,Hi="",zt="srgb",Na="srgb-linear",Da="linear",ut="srgb",xr=7680,zo=519,mc=512,gc=513,vc=514,gs=515,_c=516,xc=517,vs=518,Mc=519,Ho=35044,Vo="300 es",gi=2e3,Kr=2001;function Sc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function yc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Oa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ec(){let e=Oa("canvas");return e.style.display="block",e}var Go={},Mr=null;function ko(...e){let t="THREE."+e.shift();Mr?Mr("log",t,...e):console.log(t,...e)}function Wo(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function je(...e){e=Wo(e);let t="THREE."+e.shift();if(Mr)Mr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ye(...e){e=Wo(e);let t="THREE."+e.shift();if(Mr)Mr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Sr(...e){let t=e.join(" ");t in Go||(Go[t]=!0,je(...e))}function Tc(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var bc={[xn]:Mn,[Sn]:Tn,[yn]:bn,[vr]:En,[Mn]:xn,[Tn]:Sn,[bn]:yn,[En]:vr},ir=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xo=1234567,Qr=Math.PI/180,$r=180/Math.PI;function rr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ot[e&255]+Ot[e>>8&255]+Ot[e>>16&255]+Ot[e>>24&255]+"-"+Ot[t&255]+Ot[t>>8&255]+"-"+Ot[t>>16&15|64]+Ot[t>>24&255]+"-"+Ot[i&63|128]+Ot[i>>8&255]+"-"+Ot[i>>16&255]+Ot[i>>24&255]+Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]).toLowerCase()}function rt(e,t,i){return Math.max(t,Math.min(i,e))}function _s(e,t){return(e%t+t)%t}function wc(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function Ac(e,t,i){return e!==t?(i-e)/(t-e):0}function ea(e,t,i){return(1-i)*e+i*t}function Rc(e,t,i,r){return ea(e,t,1-Math.exp(-i*r))}function Cc(e,t=1){return t-Math.abs(_s(e,t*2)-t)}function Pc(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Lc(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Ic(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Uc(e,t){return e+Math.random()*(t-e)}function Nc(e){return e*(.5-Math.random())}function Dc(e){e!==void 0&&(Xo=e);let t=Xo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Oc(e){return e*Qr}function Fc(e){return e*$r}function Bc(e){return(e&e-1)===0&&e!==0}function zc(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Hc(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Vc(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),c=s((t+r)/2),d=n((t-r)/2),u=s((t-r)/2),f=n((r-t)/2),_=s((r-t)/2);switch(a){case"XYX":e.set(o*c,l*d,l*u,o*h);break;case"YZY":e.set(l*u,o*c,l*d,o*h);break;case"ZXZ":e.set(l*d,l*u,o*c,o*h);break;case"XZX":e.set(o*c,l*_,l*f,o*h);break;case"YXY":e.set(l*f,o*c,l*_,o*h);break;case"ZYZ":e.set(l*_,l*f,o*c,o*h);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function yr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ft={DEG2RAD:Qr,RAD2DEG:$r,generateUUID:rr,clamp:rt,euclideanModulo:_s,mapLinear:wc,inverseLerp:Ac,lerp:ea,damp:Rc,pingpong:Cc,smoothstep:Pc,smootherstep:Lc,randInt:Ic,randFloat:Uc,randFloatSpread:Nc,seededRandom:Dc,degToRad:Oc,radToDeg:Fc,isPowerOfTwo:Bc,ceilPowerOfTwo:zc,floorPowerOfTwo:Hc,setQuaternionFromProperEuler:Vc,normalize:Ht,denormalize:yr},Me=class Ah{static{Ah.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=rt(this.x,t.x,i.x),this.y=rt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=rt(this.x,t,i),this.y=rt(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(rt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ar=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=a[n+0],u=a[n+1],f=a[n+2],_=a[n+3];if(c!==_||o!==d||l!==u||h!==f){let x=o*d+l*u+h*f+c*_;x<0&&(d=-d,u=-u,f=-f,_=-_,x=-x);let m=1-s;if(x<.9995){let p=Math.acos(x),A=Math.sin(p);m=Math.sin(m*p)/A,s=Math.sin(s*p)/A,o=o*m+d*s,l=l*m+u*s,h=h*m+f*s,c=c*m+_*s}else{o=o*m+d*s,l=l*m+u*s,h=h*m+f*s,c=c*m+_*s;let p=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=p,l*=p,h*=p,c*=p}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],d=a[n+1],u=a[n+2],f=a[n+3];return e[t]=s*f+h*c+o*u-l*d,e[t+1]=o*f+h*d+l*c-s*u,e[t+2]=l*f+h*u+s*d-o*c,e[t+3]=h*f-s*c-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),d=o(i/2),u=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=d*h*c+l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c-d*u*f;break;case"YXZ":this._x=d*h*c+l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c+d*u*f;break;case"ZXY":this._x=d*h*c-l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c-d*u*f;break;case"ZYX":this._x=d*h*c-l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c+d*u*f;break;case"YZX":this._x=d*h*c+l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c-d*u*f;break;case"XZY":this._x=d*h*c-l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c+d*u*f;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],d=i+s+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class Rh{static{Rh.prototype.isVector3=!0}constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(jo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*h+s*d-o*c,this.y=r+l*c+o*h-n*d,this.z=a+l*d+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=rt(this.x,t.x,i.x),this.y=rt(this.y,t.y,i.y),this.z=rt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=rt(this.x,t,i),this.y=rt(this.y,t,i),this.z=rt(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return xs.copy(this).projectOnVector(t),this.sub(xs)}reflect(t){return this.sub(xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(rt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xs=new N,jo=new ar,$e=class Ch{static{Ch.prototype.isMatrix3=!0}constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],f=r[5],_=r[8],x=a[0],m=a[3],p=a[6],A=a[1],b=a[4],M=a[7],T=a[2],w=a[5],P=a[8];return n[0]=s*x+o*A+l*T,n[3]=s*m+o*b+l*w,n[6]=s*p+o*M+l*P,n[1]=h*x+c*A+d*T,n[4]=h*m+c*b+d*w,n[7]=h*p+c*M+d*P,n[2]=u*x+f*A+_*T,n[5]=u*m+f*b+_*w,n[8]=u*p+f*M+_*P,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*s-o*h,u=o*l-c*n,f=h*n-s*l,_=i*d+r*u+a*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=d*x,t[1]=(a*h-c*r)*x,t[2]=(o*r-a*s)*x,t[3]=u*x,t[4]=(c*i-a*l)*x,t[5]=(a*n-o*i)*x,t[6]=f*x,t[7]=(r*l-h*i)*x,t[8]=(s*i-r*n)*x,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ms.makeScale(t,i)),this}rotate(t){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ms.makeRotation(-t)),this}translate(t,i){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ms.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ms=new $e,qo=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yo=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gc(){let e={enabled:!0,workingColorSpace:Na,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===ut&&(a.r=Li(a.r),a.g=Li(a.g),a.b=Li(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(a.r=Er(a.r),a.g=Er(a.g),a.b=Er(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Hi?Da:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Na]:{primaries:t,whitePoint:r,transfer:Da,toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:t,whitePoint:r,transfer:ut,toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),e}var lt=Gc();function Li(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Er(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Tr,kc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Tr===void 0&&(Tr=Oa("canvas")),Tr.width=e.width,Tr.height=e.height;let r=Tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Li(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wc=0,Ss=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(ys(r[n].image)):a.push(ys(r[n]))}else a=ys(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function ys(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?kc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Xc=0,Es=new N,ri=class mn extends ir{constructor(t=mn.DEFAULT_IMAGE,i=mn.DEFAULT_MAPPING,r=Ri,a=Ri,n=Dt,s=$i,o=oi,l=jt,h=mn.DEFAULT_ANISOTROPY,c=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=rr(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Es).x}get height(){return this.source.getSize(Es).y}get depth(){return this.source.getSize(Es).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){je(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){je(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ao)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rn:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Cn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rn:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Cn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null,ri.DEFAULT_MAPPING=Ao,ri.DEFAULT_ANISOTROPY=1;var Et=class Ph{static{Ph.prototype.isVector4=!0}constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],d=s[5],u=s[9],f=s[2],_=s[6],x=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-f)<.01&&Math.abs(u-_)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(o+d+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,A=(d+1)/2,b=(x+1)/2,M=(l+c)/4,T=(h+f)/4,w=(u+_)/4;return p>A&&p>b?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=M/r,n=T/r):A>b?A<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(A),r=M/a,n=w/a):b<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(b),r=T/n,a=w/n),this.set(r,a,n,i),this}let m=Math.sqrt((_-u)*(_-u)+(h-f)*(h-f)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(_-u)/m,this.y=(h-f)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+x-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=rt(this.x,t.x,i.x),this.y=rt(this.y,t.y,i.y),this.z=rt(this.z,t.z,i.z),this.w=rt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=rt(this.x,t,i),this.y=rt(this.y,t,i),this.z=rt(this.z,t,i),this.w=rt(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends ir{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new ri(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ss(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends jc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Zo=class extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},qc=class extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tt=class fo{static{fo.prototype.isMatrix4=!0}constructor(t,i,r,a,n,s,o,l,h,c,d,u,f,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,d,u,f,_,x,m)}set(t,i,r,a,n,s,o,l,h,c,d,u,f,_,x,m){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fo().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/br.setFromMatrixColumn(t,0).length(),n=1/br.setFromMatrixColumn(t,1).length(),s=1/br.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*c,f=s*d,_=o*c,x=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=f+_*h,i[5]=u-x*h,i[9]=-o*l,i[2]=x-u*h,i[6]=_+f*h,i[10]=s*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,_=h*c,x=h*d;i[0]=u+x*o,i[4]=_*o-f,i[8]=s*h,i[1]=s*d,i[5]=s*c,i[9]=-o,i[2]=f*o-_,i[6]=x+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,_=h*c,x=h*d;i[0]=u-x*o,i[4]=-s*d,i[8]=_+f*o,i[1]=f+_*o,i[5]=s*c,i[9]=x-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*c,f=s*d,_=o*c,x=o*d;i[0]=l*c,i[4]=_*h-f,i[8]=u*h+x,i[1]=l*d,i[5]=x*h+u,i[9]=f*h-_,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,f=s*h,_=o*l,x=o*h;i[0]=l*c,i[4]=x-u*d,i[8]=_*d+f,i[1]=d,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=f*d+_,i[10]=u-x*d}else if(t.order==="XZY"){let u=s*l,f=s*h,_=o*l,x=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+x,i[5]=s*c,i[9]=f*d-_,i[2]=_*d-f,i[6]=o*c,i[10]=x*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yc,t,Zc)}lookAt(t,i,r){let a=this.elements;return qt.subVectors(t,i),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Vi.crossVectors(r,qt),Vi.lengthSq()===0&&(Math.abs(r.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Vi.crossVectors(r,qt)),Vi.normalize(),Fa.crossVectors(qt,Vi),a[0]=Vi.x,a[4]=Fa.x,a[8]=qt.x,a[1]=Vi.y,a[5]=Fa.y,a[9]=qt.y,a[2]=Vi.z,a[6]=Fa.z,a[10]=qt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],f=r[13],_=r[2],x=r[6],m=r[10],p=r[14],A=r[3],b=r[7],M=r[11],T=r[15],w=a[0],P=a[4],v=a[8],E=a[12],O=a[1],R=a[5],V=a[9],j=a[13],B=a[2],G=a[6],q=a[10],z=a[14],ne=a[3],re=a[7],se=a[11],Se=a[15];return n[0]=s*w+o*O+l*B+h*ne,n[4]=s*P+o*R+l*G+h*re,n[8]=s*v+o*V+l*q+h*se,n[12]=s*E+o*j+l*z+h*Se,n[1]=c*w+d*O+u*B+f*ne,n[5]=c*P+d*R+u*G+f*re,n[9]=c*v+d*V+u*q+f*se,n[13]=c*E+d*j+u*z+f*Se,n[2]=_*w+x*O+m*B+p*ne,n[6]=_*P+x*R+m*G+p*re,n[10]=_*v+x*V+m*q+p*se,n[14]=_*E+x*j+m*z+p*Se,n[3]=A*w+b*O+M*B+T*ne,n[7]=A*P+b*R+M*G+T*re,n[11]=A*v+b*V+M*q+T*se,n[15]=A*E+b*j+M*z+T*Se,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],_=t[3],x=t[7],m=t[11],p=t[15],A=l*f-h*u,b=o*f-h*d,M=o*u-l*d,T=s*f-h*c,w=s*u-l*c,P=s*d-o*c;return i*(x*A-m*b+p*M)-r*(_*A-m*T+p*w)+a*(_*b-x*T+p*P)-n*(_*M-x*w+m*P)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(s*c-o*h)-r*(n*c-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],_=t[12],x=t[13],m=t[14],p=t[15],A=i*o-r*s,b=i*l-a*s,M=i*h-n*s,T=r*l-a*o,w=r*h-n*o,P=a*h-n*l,v=c*x-d*_,E=c*m-u*_,O=c*p-f*_,R=d*m-u*x,V=d*p-f*x,j=u*p-f*m,B=A*j-b*V+M*R+T*O-w*E+P*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/B;return t[0]=(o*j-l*V+h*R)*G,t[1]=(a*V-r*j-n*R)*G,t[2]=(x*P-m*w+p*T)*G,t[3]=(u*w-d*P-f*T)*G,t[4]=(l*O-s*j-h*E)*G,t[5]=(i*j-a*O+n*E)*G,t[6]=(m*M-_*P-p*b)*G,t[7]=(c*P-u*M+f*b)*G,t[8]=(s*V-o*O+h*v)*G,t[9]=(r*O-i*V-n*v)*G,t[10]=(_*w-x*M+p*A)*G,t[11]=(d*M-c*w-f*A)*G,t[12]=(o*E-s*R-l*v)*G,t[13]=(i*R-r*E+a*v)*G,t[14]=(x*b-_*T-m*A)*G,t[15]=(c*T-d*b+u*A)*G,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,d=o+o,u=n*h,f=n*c,_=n*d,x=s*c,m=s*d,p=o*d,A=l*h,b=l*c,M=l*d,T=r.x,w=r.y,P=r.z;return a[0]=(1-(x+p))*T,a[1]=(f+M)*T,a[2]=(_-b)*T,a[3]=0,a[4]=(f-M)*w,a[5]=(1-(u+p))*w,a[6]=(m+A)*w,a[7]=0,a[8]=(_+b)*P,a[9]=(m-A)*P,a[10]=(1-(u+x))*P,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=br.set(a[0],a[1],a[2]).length(),o=br.set(a[4],a[5],a[6]).length(),l=br.set(a[8],a[9],a[10]).length();n<0&&(s=-s),li.copy(this);let h=1/s,c=1/o,d=1/l;return li.elements[0]*=h,li.elements[1]*=h,li.elements[2]*=h,li.elements[4]*=c,li.elements[5]*=c,li.elements[6]*=c,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,i.setFromRotationMatrix(li),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=gi,l=!1){let h=this.elements,c=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),f=(r+a)/(r-a),_,x;if(l)_=n/(s-n),x=s*n/(s-n);else if(o===gi)_=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===Kr)_=-s/(s-n),x=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=gi,l=!1){let h=this.elements,c=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),f=-(r+a)/(r-a),_,x;if(l)_=1/(s-n),x=s/(s-n);else if(o===gi)_=-2/(s-n),x=-(s+n)/(s-n);else if(o===Kr)_=-1/(s-n),x=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},br=new N,li=new Tt,Yc=new N(0,0,0),Zc=new N(1,1,1),Vi=new N,Fa=new N,qt=new N,Jo=new Tt,Ko=new ar,wr=class Lh{constructor(t=0,i=0,r=0,a=Lh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],d=a[2],u=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wr.DEFAULT_ORDER="XYZ";var Qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jc=0,$o=new N,Ar=new ar,Ii=new Tt,Ba=new N,ta=new N,Kc=new N,Qc=new ar,el=new N(1,0,0),tl=new N(0,1,0),il=new N(0,0,1),rl={type:"added"},$c={type:"removed"},Rr={type:"childadded",child:null},Ts={type:"childremoved",child:null},Vt=class gn extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();let t=new N,i=new wr,r=new ar,a=new N(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Tt},normalMatrix:{value:new $e}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(tl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,i){return $o.copy(t).applyQuaternion(this.quaternion),this.position.add($o.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(tl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ba.copy(t):Ba.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ta,Ba,this.up):Ii.lookAt(Ba,ta,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Ar.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rl),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($c),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rl),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,Kc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,Qc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),d=s(t.shapes),u=s(t.skeletons),f=s(t.animations),_=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),f.length>0&&(r.animations=f),_.length>0&&(r.nodes=_)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};Vt.DEFAULT_UP=new N(0,1,0),Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},eu={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,i),m=this._getHandJoint(l,_);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,f=.005;l.inputState.pinching&&d>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(eu)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},za={h:0,s:0,l:0};function ws(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var at=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=_s(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=ws(n,a,e+1/3),this.g=ws(n,a,e),this.b=ws(n,a,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function i(a){a!==void 0&&parseFloat(a)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=al[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return lt.workingToColorSpace(Bt.copy(this),e),Math.round(rt(Bt.r*255,0,255))*65536+Math.round(rt(Bt.g*255,0,255))*256+Math.round(rt(Bt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Bt.copy(this),t);let i=Bt.r,r=Bt.g,a=Bt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=zt){lt.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,r=Bt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(za);let i=ea(Gi.h,za.h,t),r=ea(Gi.s,za.s,t),a=ea(Gi.l,za.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new at;at.NAMES=al;var nl=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new N,Ui=new N,As=new N,Ni=new N,Cr=new N,Pr=new N,sl=new N,Rs=new N,Cs=new N,Ps=new N,Ls=new Et,Is=new Et,Us=new Et,ia=class jr{constructor(t=new N,i=new N,r=new N){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),hi.subVectors(t,i),a.cross(hi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){hi.subVectors(a,i),Ui.subVectors(r,i),As.subVectors(t,i);let s=hi.dot(hi),o=hi.dot(Ui),l=hi.dot(As),h=Ui.dot(Ui),c=Ui.dot(As),d=s*h-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,f=(h*l-o*c)*u,_=(s*c-o*l)*u;return n.set(1-f-_,_,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ni.x),l.addScaledVector(s,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Ls.setScalar(0),Is.setScalar(0),Us.setScalar(0),Ls.fromBufferAttribute(t,i),Is.fromBufferAttribute(t,r),Us.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ls,n.x),s.addScaledVector(Is,n.y),s.addScaledVector(Us,n.z),s}static isFrontFacing(t,i,r,a){return hi.subVectors(r,i),Ui.subVectors(t,i),hi.cross(Ui).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),hi.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return jr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return jr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return jr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return jr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return jr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Cr.subVectors(a,r),Pr.subVectors(n,r),Rs.subVectors(t,r);let l=Cr.dot(Rs),h=Pr.dot(Rs);if(l<=0&&h<=0)return i.copy(r);Cs.subVectors(t,a);let c=Cr.dot(Cs),d=Pr.dot(Cs);if(c>=0&&d<=c)return i.copy(a);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(Cr,s);Ps.subVectors(t,n);let f=Cr.dot(Ps),_=Pr.dot(Ps);if(_>=0&&f<=_)return i.copy(n);let x=f*h-l*_;if(x<=0&&h>=0&&_<=0)return o=h/(h-_),i.copy(r).addScaledVector(Pr,o);let m=c*_-f*d;if(m<=0&&d-c>=0&&f-_>=0)return sl.subVectors(n,a),o=(d-c)/(d-c+(f-_)),i.copy(a).addScaledVector(sl,o);let p=1/(m+x+u);return s=x*p,o=u*p,i.copy(r).addScaledVector(Cr,s).addScaledVector(Pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ra=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,ci):ci.fromBufferAttribute(a,n),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Va.subVectors(this.max,aa),Lr.subVectors(e.a,aa),Ir.subVectors(e.b,aa),Ur.subVectors(e.c,aa),ki.subVectors(Ir,Lr),Wi.subVectors(Ur,Ir),nr.subVectors(Lr,Ur);let t=[0,-ki.z,ki.y,0,-Wi.z,Wi.y,0,-nr.z,nr.y,ki.z,0,-ki.x,Wi.z,0,-Wi.x,nr.z,0,-nr.x,-ki.y,ki.x,0,-Wi.y,Wi.x,0,-nr.y,nr.x,0];return!Ns(t,Lr,Ir,Ur,Va)||(t=[1,0,0,0,1,0,0,0,1],!Ns(t,Lr,Ir,Ur,Va))?!1:(Ga.crossVectors(ki,Wi),t=[Ga.x,Ga.y,Ga.z],Ns(t,Lr,Ir,Ur,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new N,new N,new N,new N,new N,new N,new N,new N],ci=new N,Ha=new ra,Lr=new N,Ir=new N,Ur=new N,ki=new N,Wi=new N,nr=new N,aa=new N,Va=new N,Ga=new N,sr=new N;function Ns(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){sr.fromArray(e,n);let o=a.x*Math.abs(sr.x)+a.y*Math.abs(sr.y)+a.z*Math.abs(sr.z),l=t.dot(sr),h=i.dot(sr),c=r.dot(sr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var At=new N,ka=new Me,tu=0,_i=class extends ir{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ho,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},ol=class extends _i{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ll=class extends _i{constructor(e,t,i){super(new Uint32Array(e),t,i)}},vt=class extends _i{constructor(e,t,i){super(new Float32Array(e),t,i)}},iu=new ra,na=new N,Ds=new N,Os=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):iu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Ds)),this.expandByPoint(na.copy(e.center).sub(Ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ru=0,ai=new Tt,Fs=new Vt,Nr=new N,Yt=new ra,sa=new ra,Ut=new N,Zt=class Ih extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sc(t)?ll:ol)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new $e().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,i,r){return ai.makeTranslation(t,i,r),this.applyMatrix4(ai),this}scale(t,i,r){return ai.makeScale(t,i,r),this.applyMatrix4(ai),this}lookAt(t){return Fs.lookAt(t),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new vt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Yt.setFromBufferAttribute(n),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let r=this.boundingSphere.center;if(Yt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(Yt.min,sa.min),Yt.expandByPoint(Ut),Ut.addVectors(Yt.max,sa.max),Yt.expandByPoint(Ut)):(Yt.expandByPoint(sa.min),Yt.expandByPoint(sa.max))}Yt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Ut.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Ut));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Ut.fromBufferAttribute(o,h),l&&(Nr.fromBufferAttribute(t,h),Ut.add(Nr)),a=Math.max(a,r.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new _i(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let v=0;v<r.count;v++)o[v]=new N,l[v]=new N;let h=new N,c=new N,d=new N,u=new Me,f=new Me,_=new Me,x=new N,m=new N;function p(v,E,O){h.fromBufferAttribute(r,v),c.fromBufferAttribute(r,E),d.fromBufferAttribute(r,O),u.fromBufferAttribute(n,v),f.fromBufferAttribute(n,E),_.fromBufferAttribute(n,O),c.sub(h),d.sub(h),f.sub(u),_.sub(u);let R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(c,-_.x).multiplyScalar(R),o[v].add(x),o[E].add(x),o[O].add(x),l[v].add(m),l[E].add(m),l[O].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let v=0,E=A.length;v<E;++v){let O=A[v],R=O.start,V=O.count;for(let j=R,B=R+V;j<B;j+=3)p(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let b=new N,M=new N,T=new N,w=new N;function P(v){T.fromBufferAttribute(a,v),w.copy(T);let E=o[v];b.copy(E),b.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(w,E);let O=M.dot(l[v])<0?-1:1;s.setXYZW(v,b.x,b.y,b.z,O)}for(let v=0,E=A.length;v<E;++v){let O=A[v],R=O.start,V=O.count;for(let j=R,B=R+V;j<B;j+=3)P(t.getX(j+0)),P(t.getX(j+1)),P(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,f=r.count;u<f;u++)r.setXYZ(u,0,0,0);let a=new N,n=new N,s=new N,o=new N,l=new N,h=new N,c=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,_),n.fromBufferAttribute(i,x),s.fromBufferAttribute(i,m),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,x),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=i.count;u<f;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Ut.fromBufferAttribute(t,i),Ut.normalize(),t.setXYZ(i,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),f=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*c;for(let p=0;p<c;p++)u[_++]=h[f++]}return new _i(u,c,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Ih,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],d=n[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=0,oa=class extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=gr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vn,this.blendDst=_n,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vn&&(i.blendSrc=this.blendSrc),this.blendDst!==_n&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Me().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oi=new N,Bs=new N,Wa=new N,Xi=new N,zs=new N,Xa=new N,Hs=new N,nu=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Bs.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Bs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Wa),s=Xi.dot(this.direction),o=-Xi.dot(Wa),l=Xi.lengthSq(),h=Math.abs(1-n*n),c,d,u,f;if(h>0)if(c=n*o-s,d=n*s-o,f=a*h,c>=0)if(d>=-f)if(d<=f){let _=1/h;c*=_,d*=_,u=c*(c+n*d+2*s)+d*(n*c+d+2*o)+l}else d=a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d<=-f?(c=Math.max(0,-(-n*a+s)),d=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l):d<=f?(c=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(c=Math.max(0,-(n*a+s)),d=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l);else d=n>0?-a:a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Bs).addScaledVector(Wa,d),u}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);let i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(s=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,r,a){zs.subVectors(t,e),Xa.subVectors(i,e),Hs.crossVectors(zs,Xa);let n=this.direction.dot(Hs),s;if(n>0){if(r)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Xi.subVectors(this.origin,e);let o=s*this.direction.dot(Xa.crossVectors(Xi,Xa));if(o<0)return null;let l=s*this.direction.dot(zs.cross(Xi));if(l<0||o+l>n)return null;let h=-s*Xi.dot(Hs);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vs=class extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hl=new Tt,or=new nu,ja=new Os,cl=new N,qa=new N,Ya=new N,Za=new N,Gs=new N,Ja=new N,ul=new N,Ka=new N,ve=class extends Vt{constructor(e=new Zt,t=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Ja.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(Gs.fromBufferAttribute(c,e),n?Ja.addScaledVector(Gs,h):Ja.addScaledVector(Gs.sub(t),h))}t.add(Ja)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(a),or.copy(e.ray).recast(e.near),!(ja.containsPoint(or.origin)===!1&&(or.intersectSphere(ja,cl)===null||or.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(hl.copy(a).invert(),or.copy(e.ray).applyMatrix4(hl),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,_=d.length;f<_;f++){let x=d[f],m=n[x.materialIndex],p=Math.max(x.start,u.start),A=Math.min(s.count,Math.min(x.start+x.count,u.start+u.count));for(let b=p,M=A;b<M;b+=3){let T=s.getX(b),w=s.getX(b+1),P=s.getX(b+2);r=Qa(this,m,e,i,l,h,c,T,w,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let f=Math.max(0,u.start),_=Math.min(s.count,u.start+u.count);for(let x=f,m=_;x<m;x+=3){let p=s.getX(x),A=s.getX(x+1),b=s.getX(x+2);r=Qa(this,n,e,i,l,h,c,p,A,b),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,_=d.length;f<_;f++){let x=d[f],m=n[x.materialIndex],p=Math.max(x.start,u.start),A=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let b=p,M=A;b<M;b+=3){let T=b,w=b+1,P=b+2;r=Qa(this,m,e,i,l,h,c,T,w,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let f=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let x=f,m=_;x<m;x+=3){let p=x,A=x+1,b=x+2;r=Qa(this,n,e,i,l,h,c,p,A,b),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function su(e,t,i,r,a,n,s,o){let l;if(t.side===kt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===zi,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Ka);return h<i.near||h>i.far?null:{distance:h,point:Ka.clone(),object:e}}function Qa(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,qa),e.getVertexPosition(l,Ya),e.getVertexPosition(h,Za);let c=su(e,t,i,r,qa,Ya,Za,ul);if(c){let d=new N;ia.getBarycoord(ul,qa,Ya,Za,d),a&&(c.uv=ia.getInterpolatedAttribute(a,o,l,h,d,new Me)),n&&(c.uv1=ia.getInterpolatedAttribute(n,o,l,h,d,new Me)),s&&(c.normal=ia.getInterpolatedAttribute(s,o,l,h,d,new N),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new N,materialIndex:0};ia.getNormal(qa,Ya,Za,u.normal),c.face=u,c.barycoord=d}return c}var ou=class extends ri{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Nt,h=Nt,c,d){super(null,n,s,o,l,h,r,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ks=new N,lu=new N,hu=new $e,lr=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ks.subVectors(i,t).cross(lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(ks),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||hu.getNormalMatrix(e),r=this.coplanarPoint(ks).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hr=new Os,cu=new Me(.5,.5),$a=new N,Ws=class{constructor(e=new lr,t=new lr,i=new lr,r=new lr,a=new lr,n=new lr){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],d=a[6],u=a[7],f=a[8],_=a[9],x=a[10],m=a[11],p=a[12],A=a[13],b=a[14],M=a[15];if(r[0].setComponents(l-n,u-h,m-f,M-p).normalize(),r[1].setComponents(l+n,u+h,m+f,M+p).normalize(),r[2].setComponents(l+s,u+c,m+_,M+A).normalize(),r[3].setComponents(l-s,u-c,m-_,M-A).normalize(),i)r[4].setComponents(o,d,x,b).normalize(),r[5].setComponents(l-o,u-d,m-x,M-b).normalize();else if(r[4].setComponents(l-o,u-d,m-x,M-b).normalize(),t===gi)r[5].setComponents(l+o,u+d,m+x,M+b).normalize();else if(t===Kr)r[5].setComponents(o,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);let t=cu.distanceTo(e.center);return hr.radius=.7071067811865476+t,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if($a.x=r.normal.x>0?e.max.x:e.min.x,$a.y=r.normal.y>0?e.max.y:e.min.y,$a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dl=class extends ri{constructor(e=[],t=Qi,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uu=class extends ri{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dr=class extends ri{constructor(e,t,i=fi,r,a,n,s=Nt,o=Nt,l,h=Pi,c=1){if(h!==Pi&&h!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ss(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},du=class extends Dr{constructor(e,t=fi,i=Qi,r,a,n=Nt,s=Nt,o,l=Pi){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pl=class extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},la=class Uh extends Zt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=0,f=0;_("z","y","x",-1,-1,r,i,t,s,n,0),_("z","y","x",1,-1,r,i,-t,s,n,1),_("x","z","y",1,1,t,r,i,a,s,2),_("x","z","y",1,-1,t,r,-i,a,s,3),_("x","y","z",1,-1,t,i,r,a,n,4),_("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(d,2));function _(x,m,p,A,b,M,T,w,P,v,E){let O=M/P,R=T/v,V=M/2,j=T/2,B=w/2,G=P+1,q=v+1,z=0,ne=0,re=new N;for(let se=0;se<q;se++){let Se=se*R-j;for(let Pe=0;Pe<G;Pe++){let Ze=Pe*O-V;re[x]=Ze*A,re[m]=Se*b,re[p]=B,h.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[p]=w>0?1:-1,c.push(re.x,re.y,re.z),d.push(Pe/P),d.push(1-se/v),z+=1}}for(let se=0;se<v;se++)for(let Se=0;Se<P;Se++){let Pe=u+Se+G*se,Ze=u+Se+G*(se+1),et=u+(Se+1)+G*(se+1),K=u+(Se+1)+G*se;l.push(Pe,Ze,K),l.push(Ze,et,K),ne+=6}o.addGroup(f,ne,E),f+=ne,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ft=class Nh extends Zt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],d=[],u=[],f=[],_=0,x=[],m=r/2,p=0;A(),s===!1&&(t>0&&b(!0),i>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function A(){let M=new N,T=new N,w=0,P=(i-t)/r;for(let v=0;v<=n;v++){let E=[],O=v/n,R=O*(i-t)+t;for(let V=0;V<=a;V++){let j=V/a,B=j*l+o,G=Math.sin(B),q=Math.cos(B);T.x=R*G,T.y=-O*r+m,T.z=R*q,d.push(T.x,T.y,T.z),M.set(G,P,q).normalize(),u.push(M.x,M.y,M.z),f.push(j,1-O),E.push(_++)}x.push(E)}for(let v=0;v<a;v++)for(let E=0;E<n;E++){let O=x[E][v],R=x[E+1][v],V=x[E+1][v+1],j=x[E][v+1];(t>0||E!==0)&&(c.push(O,R,j),w+=3),(i>0||E!==n-1)&&(c.push(R,V,j),w+=3)}h.addGroup(p,w,0),p+=w}function b(M){let T=_,w=new Me,P=new N,v=0,E=M===!0?t:i,O=M===!0?1:-1;for(let V=1;V<=a;V++)d.push(0,m*O,0),u.push(0,O,0),f.push(.5,.5),_++;let R=_;for(let V=0;V<=a;V++){let j=V/a*l+o,B=Math.cos(j),G=Math.sin(j);P.x=E*G,P.y=m*O,P.z=E*B,d.push(P.x,P.y,P.z),u.push(0,O,0),w.x=B*.5+.5,w.y=G*.5*O+.5,f.push(w.x,w.y),_++}for(let V=0;V<a;V++){let j=T+V,B=R+V;M===!0?c.push(B,B+1,j):c.push(B+1,B,j),v+=3}h.addGroup(p,v,M===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,d=(n-h)/c;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new Me:new N);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new N,r=[],a=[],n=[],s=new N,o=new Tt;for(let u=0;u<=e;u++){let f=u/e;r[u]=this.getTangentAt(f,new N)}a[0]=new N,n[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(rt(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,f))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(rt(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(r[f],u*f)),n[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xs=class extends xi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Me){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pu=class extends Xs{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function js(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,d){let u=(s-n)/h-(o-n)/(h+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+d)+(l-o)/d;u*=c,f*=c,a(s,o,u,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var fl=new N,ml=new N,qs=new js,Ys=new js,Zs=new js,gl=class extends xi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(ml.subVectors(r[0],r[1]).add(r[0]),l=ml);let c=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(fl.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=fl),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),u),_=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),f<1e-4&&(f=_),x<1e-4&&(x=_),qs.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,f,_,x),Ys.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,f,_,x),Zs.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,f,_,x)}else this.curveType==="catmullrom"&&(qs.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),Ys.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),Zs.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(qs.calc(o),Ys.calc(o),Zs.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vl(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function fu(e,t){let i=1-e;return i*i*t}function mu(e,t){return 2*(1-e)*e*t}function gu(e,t){return e*e*t}function ha(e,t,i,r){return fu(e,t)+mu(e,i)+gu(e,r)}function vu(e,t){let i=1-e;return i*i*i*t}function _u(e,t){let i=1-e;return 3*i*i*e*t}function xu(e,t){return 3*(1-e)*e*e*t}function Mu(e,t){return e*e*e*t}function ca(e,t,i,r,a){return vu(e,t)+_u(e,i)+xu(e,r)+Mu(e,a)}var _l=class extends xi{constructor(e=new Me,t=new Me,i=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Me){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ca(e,r.x,a.x,n.x,s.x),ca(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Su=class extends xi{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ca(e,r.x,a.x,n.x,s.x),ca(e,r.y,a.y,n.y,s.y),ca(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xl=class extends xi{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yu=class extends xi{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends xi{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(ha(e,r.x,a.x,n.x),ha(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eu=class extends xi{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(ha(e,r.x,a.x,n.x),ha(e,r.y,a.y,n.y),ha(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(vl(s,o.x,l.x,h.x,c.x),vl(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Me().fromArray(r))}return this}},Js=Object.freeze({__proto__:null,ArcCurve:pu,CatmullRomCurve3:gl,CubicBezierCurve:_l,CubicBezierCurve3:Su,EllipseCurve:Xs,LineCurve:xl,LineCurve3:yu,QuadraticBezierCurve:Ml,QuadraticBezierCurve3:Eu,SplineCurve:Sl}),Tu=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Js[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Js[r.type]().fromJSON(r))}return this}},en=class extends Tu{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xl(this.currentPoint.clone(),new Me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Ml(this.currentPoint.clone(),new Me(e,t),new Me(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new _l(this.currentPoint.clone(),new Me(e,t),new Me(i,r),new Me(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Sl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new Xs(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ua=class extends en{constructor(e){super(e),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new en().fromJSON(r))}return this}};function bu(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=yl(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=Pu(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let c=o,d=l;for(let u=i;u<a;u+=i){let f=e[u],_=e[u+1];f<o&&(o=f),_<l&&(l=_),f>c&&(c=f),_>d&&(d=_)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return da(n,s,i,o,l,h,0),s}function yl(e,t,i,r,a){let n;if(a===Vu(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=wl(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=wl(s/r|0,e[s],e[s+1],n);return n&&Or(n,n.next)&&(ma(n),n=n.next),n}function cr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Or(i,i.next)||_t(i.prev,i,i.next)===0)){if(ma(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function da(e,t,i,r,a,n,s){if(!e)return;!s&&n&&Du(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?Au(e,r,a,n):wu(e)){t.push(l.i,e.i,h.i),ma(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=Ru(cr(e),t),da(e,t,i,r,a,n,2)):s===2&&Cu(e,t,i,r,a,n):da(cr(e),t,i,r,a,n,1);break}}}function wu(e){let t=e.prev,i=e,r=e.next;if(_t(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=Math.min(a,n,s),d=Math.min(o,l,h),u=Math.max(a,n,s),f=Math.max(o,l,h),_=r.next;for(;_!==t;){if(_.x>=c&&_.x<=u&&_.y>=d&&_.y<=f&&pa(a,o,n,l,s,h,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Au(e,t,i,r){let a=e.prev,n=e,s=e.next;if(_t(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,d=n.y,u=s.y,f=Math.min(o,l,h),_=Math.min(c,d,u),x=Math.max(o,l,h),m=Math.max(c,d,u),p=Ks(f,_,t,i,r),A=Ks(x,m,t,i,r),b=e.prevZ,M=e.nextZ;for(;b&&b.z>=p&&M&&M.z<=A;){if(b.x>=f&&b.x<=x&&b.y>=_&&b.y<=m&&b!==a&&b!==s&&pa(o,c,l,d,h,u,b.x,b.y)&&_t(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=x&&M.y>=_&&M.y<=m&&M!==a&&M!==s&&pa(o,c,l,d,h,u,M.x,M.y)&&_t(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=_&&b.y<=m&&b!==a&&b!==s&&pa(o,c,l,d,h,u,b.x,b.y)&&_t(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=A;){if(M.x>=f&&M.x<=x&&M.y>=_&&M.y<=m&&M!==a&&M!==s&&pa(o,c,l,d,h,u,M.x,M.y)&&_t(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ru(e,t){let i=e;do{let r=i.prev,a=i.next.next;!Or(r,a)&&Tl(r,i,i.next,a)&&fa(r,a)&&fa(a,r)&&(t.push(r.i,i.i,a.i),ma(i),ma(i.next),i=e=a),i=i.next}while(i!==e);return cr(i)}function Cu(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Bu(s,o)){let l=bl(s,o);s=cr(s,s.next),l=cr(l,l.next),da(s,t,i,r,a,n,0),da(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Pu(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=yl(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(Fu(h))}a.sort(Lu);for(let n=0;n<a.length;n++)i=Iu(a[n],i);return i}function Lu(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function Iu(e,t){let i=Uu(e,t);if(!i)return t;let r=bl(i,e);return cr(r,r.next),cr(i,i.next)}function Uu(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(Or(e,i))return i;do{if(Or(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&El(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);fa(i,e)&&(d<c||d===c&&(i.x>s.x||i.x===s.x&&Nu(s,i)))&&(s=i,c=d)}i=i.next}while(i!==o);return s}function Nu(e,t){return _t(e.prev,e,t.prev)<0&&_t(t.next,e,e.next)<0}function Du(e,t,i,r){let a=e;do a.z===0&&(a.z=Ks(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Ou(a)}function Ou(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function Ks(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Fu(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function El(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function pa(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&El(e,t,i,r,a,n,s,o)}function Bu(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!zu(e,t)&&(fa(e,t)&&fa(t,e)&&Hu(e,t)&&(_t(e.prev,e,t.prev)||_t(e,t.prev,t))||Or(e,t)&&_t(e.prev,e,e.next)>0&&_t(t.prev,t,t.next)>0)}function _t(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Or(e,t){return e.x===t.x&&e.y===t.y}function Tl(e,t,i,r){let a=rn(_t(e,t,i)),n=rn(_t(e,t,r)),s=rn(_t(i,r,e)),o=rn(_t(i,r,t));return!!(a!==n&&s!==o||a===0&&tn(e,i,t)||n===0&&tn(e,r,t)||s===0&&tn(i,e,r)||o===0&&tn(i,t,r))}function tn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function rn(e){return e>0?1:e<0?-1:0}function zu(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Tl(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function fa(e,t){return _t(e.prev,e,e.next)<0?_t(e,t,e.next)>=0&&_t(e,e.prev,t)>=0:_t(e,t,e.prev)<0||_t(e,e.next,t)<0}function Hu(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function bl(e,t){let i=Qs(e.i,e.x,e.y),r=Qs(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function wl(e,t,i,r){let a=Qs(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function ma(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Qs(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vu(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Gu=class{static triangulate(e,t,i=2){return bu(e,t,i)}},ur=class Dh{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Dh.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Al(t),Rl(r,t);let s=t.length;i.forEach(Al);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Rl(r,i[l]);let o=Gu.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Al(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Rl(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Fr=class Oh extends Zt{constructor(t=new ua([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new vt(a,3)),this.setAttribute("uv",new vt(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,_=i.bevelSize!==void 0?i.bevelSize:f-.1,x=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,p=i.extrudePath,A=i.UVGenerator!==void 0?i.UVGenerator:ku,b,M=!1,T,w,P,v;if(p){b=p.getSpacedPoints(c),M=!0,u=!1;let W=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(c,W),w=new N,P=new N,v=new N}u||(m=0,f=0,_=0,x=0);let E=o.extractPoints(h),O=E.shape,R=E.holes;if(!ur.isClockWise(O)){O=O.reverse();for(let W=0,$=R.length;W<$;W++){let J=R[W];ur.isClockWise(J)&&(R[W]=J.reverse())}}function V(W){let $=10000000000000001e-36,J=W[0];for(let ce=1;ce<=W.length;ce++){let pe=ce%W.length,_e=W[pe],Te=_e.x-J.x,De=_e.y-J.y,Oe=Te*Te+De*De,L=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(J.x),Math.abs(J.y)),Ke=$*L*L;if(Oe<=Ke){W.splice(pe,1),ce--;continue}J=_e}}V(O),R.forEach(V);let j=R.length,B=O;for(let W=0;W<j;W++){let $=R[W];O=O.concat($)}function G(W,$,J){return $||Ye("ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector($,J)}let q=O.length;function z(W,$,J){let ce,pe,_e,Te=W.x-$.x,De=W.y-$.y,Oe=J.x-W.x,L=J.y-W.y,Ke=Te*Te+De*De,ke=Te*L-De*Oe;if(Math.abs(ke)>Number.EPSILON){let Fe=Math.sqrt(Ke),y=Math.sqrt(Oe*Oe+L*L),g=$.x-De/Fe,C=$.y+Te/Fe,F=J.x-L/y,Y=J.y+Oe/y,ee=((F-g)*L-(Y-C)*Oe)/(Te*L-De*Oe);ce=g+Te*ee-W.x,pe=C+De*ee-W.y;let de=ce*ce+pe*pe;if(de<=2)return new Me(ce,pe);_e=Math.sqrt(de/2)}else{let Fe=!1;Te>Number.EPSILON?Oe>Number.EPSILON&&(Fe=!0):Te<-Number.EPSILON?Oe<-Number.EPSILON&&(Fe=!0):Math.sign(De)===Math.sign(L)&&(Fe=!0),Fe?(ce=-De,pe=Te,_e=Math.sqrt(Ke)):(ce=Te,pe=De,_e=Math.sqrt(Ke/2))}return new Me(ce/_e,pe/_e)}let ne=[];for(let W=0,$=B.length,J=$-1,ce=W+1;W<$;W++,J++,ce++)J===$&&(J=0),ce===$&&(ce=0),ne[W]=z(B[W],B[J],B[ce]);let re=[],se,Se=ne.concat();for(let W=0,$=j;W<$;W++){let J=R[W];se=[];for(let ce=0,pe=J.length,_e=pe-1,Te=ce+1;ce<pe;ce++,_e++,Te++)_e===pe&&(_e=0),Te===pe&&(Te=0),se[ce]=z(J[ce],J[_e],J[Te]);re.push(se),Se=Se.concat(se)}let Pe;if(m===0)Pe=ur.triangulateShape(B,R);else{let W=[],$=[];for(let J=0;J<m;J++){let ce=J/m,pe=f*Math.cos(ce*Math.PI/2),_e=_*Math.sin(ce*Math.PI/2)+x;for(let Te=0,De=B.length;Te<De;Te++){let Oe=G(B[Te],ne[Te],_e);he(Oe.x,Oe.y,-pe),ce===0&&W.push(Oe)}for(let Te=0,De=j;Te<De;Te++){let Oe=R[Te];se=re[Te];let L=[];for(let Ke=0,ke=Oe.length;Ke<ke;Ke++){let Fe=G(Oe[Ke],se[Ke],_e);he(Fe.x,Fe.y,-pe),ce===0&&L.push(Fe)}ce===0&&$.push(L)}}Pe=ur.triangulateShape(W,$)}let Ze=Pe.length,et=_+x;for(let W=0;W<q;W++){let $=u?G(O[W],Se[W],et):O[W];M?(P.copy(T.normals[0]).multiplyScalar($.x),w.copy(T.binormals[0]).multiplyScalar($.y),v.copy(b[0]).add(P).add(w),he(v.x,v.y,v.z)):he($.x,$.y,0)}for(let W=1;W<=c;W++)for(let $=0;$<q;$++){let J=u?G(O[$],Se[$],et):O[$];M?(P.copy(T.normals[W]).multiplyScalar(J.x),w.copy(T.binormals[W]).multiplyScalar(J.y),v.copy(b[W]).add(P).add(w),he(v.x,v.y,v.z)):he(J.x,J.y,d/c*W)}for(let W=m-1;W>=0;W--){let $=W/m,J=f*Math.cos($*Math.PI/2),ce=_*Math.sin($*Math.PI/2)+x;for(let pe=0,_e=B.length;pe<_e;pe++){let Te=G(B[pe],ne[pe],ce);he(Te.x,Te.y,d+J)}for(let pe=0,_e=R.length;pe<_e;pe++){let Te=R[pe];se=re[pe];for(let De=0,Oe=Te.length;De<Oe;De++){let L=G(Te[De],se[De],ce);M?he(L.x,L.y+b[c-1].y,b[c-1].x+J):he(L.x,L.y,d+J)}}}K(),le();function K(){let W=a.length/3;if(u){let $=0,J=q*$;for(let ce=0;ce<Ze;ce++){let pe=Pe[ce];Ne(pe[2]+J,pe[1]+J,pe[0]+J)}$=c+m*2,J=q*$;for(let ce=0;ce<Ze;ce++){let pe=Pe[ce];Ne(pe[0]+J,pe[1]+J,pe[2]+J)}}else{for(let $=0;$<Ze;$++){let J=Pe[$];Ne(J[2],J[1],J[0])}for(let $=0;$<Ze;$++){let J=Pe[$];Ne(J[0]+q*c,J[1]+q*c,J[2]+q*c)}}r.addGroup(W,a.length/3-W,0)}function le(){let W=a.length/3,$=0;Ee(B,$),$+=B.length;for(let J=0,ce=R.length;J<ce;J++){let pe=R[J];Ee(pe,$),$+=pe.length}r.addGroup(W,a.length/3-W,1)}function Ee(W,$){let J=W.length;for(;--J>=0;){let ce=J,pe=J-1;pe<0&&(pe=W.length-1);for(let _e=0,Te=c+m*2;_e<Te;_e++){let De=q*_e,Oe=q*(_e+1),L=$+ce+De,Ke=$+pe+De,ke=$+pe+Oe,Fe=$+ce+Oe;He(L,Ke,ke,Fe)}}}function he(W,$,J){l.push(W),l.push($),l.push(J)}function Ne(W,$,J){fe(W),fe($),fe(J);let ce=a.length/3,pe=A.generateTopUV(r,a,ce-3,ce-2,ce-1);me(pe[0]),me(pe[1]),me(pe[2])}function He(W,$,J,ce){fe(W),fe($),fe(ce),fe($),fe(J),fe(ce);let pe=a.length/3,_e=A.generateSideWallUV(r,a,pe-6,pe-3,pe-2,pe-1);me(_e[0]),me(_e[1]),me(_e[3]),me(_e[1]),me(_e[2]),me(_e[3])}function fe(W){a.push(l[W*3+0]),a.push(l[W*3+1]),a.push(l[W*3+2])}function me(W){n.push(W.x),n.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Wu(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Js[a.type]().fromJSON(a)),new Oh(r,t.options)}},ku={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new Me(n,s),new Me(o,l),new Me(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],d=t[r*3+2],u=t[a*3],f=t[a*3+1],_=t[a*3+2],x=t[n*3],m=t[n*3+1],p=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new Me(s,1-l),new Me(h,1-d),new Me(u,1-_),new Me(x,1-p)]:[new Me(o,1-l),new Me(c,1-d),new Me(f,1-_),new Me(m,1-p)]}};function Wu(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Cl=class Fh extends Zt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,d=t/o,u=i/l,f=[],_=[],x=[],m=[];for(let p=0;p<c;p++){let A=p*u-s;for(let b=0;b<h;b++){let M=b*d-n;_.push(M,-A,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){let b=A+h*p,M=A+h*(p+1),T=A+1+h*(p+1),w=A+1+h*p;f.push(b,M,w),f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.width,t.height,t.widthSegments,t.heightSegments)}},Xu=class Bh extends Zt{constructor(t=new ua([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(n,3)),this.setAttribute("uv",new vt(s,2));function h(c){let d=a.length/3,u=c.extractPoints(i),f=u.shape,_=u.holes;ur.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=_.length;m<p;m++){let A=_[m];ur.isClockWise(A)===!0&&(_[m]=A.reverse())}let x=ur.triangulateShape(f,_);for(let m=0,p=_.length;m<p;m++){let A=_[m];f=f.concat(A)}for(let m=0,p=f.length;m<p;m++){let A=f[m];a.push(A.x,A.y,0),n.push(0,0,1),s.push(A.x,A.y)}for(let m=0,p=x.length;m<p;m++){let A=x[m],b=A[0]+d,M=A[1]+d,T=A[2]+d;r.push(b,M,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return ju(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Bh(r,t.curveSegments)}};function ju(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Pl=class zh extends Zt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],d=new N,u=new N,f=[],_=[],x=[],m=[];for(let p=0;p<=r;p++){let A=[],b=p/r,M=s+b*o,T=t*Math.cos(M),w=Math.sqrt(t*t-T*T),P=0;p===0&&s===0?P=.5/i:p===r&&l===Math.PI&&(P=-.5/i);for(let v=0;v<=i;v++){let E=v/i,O=a+E*n;d.x=-w*Math.cos(O),d.y=T,d.z=w*Math.sin(O),_.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+P,1-b),A.push(h++)}c.push(A)}for(let p=0;p<r;p++)for(let A=0;A<i;A++){let b=c[p][A+1],M=c[p][A],T=c[p+1][A],w=c[p+1][A+1];(p!==0||s>0)&&f.push(b,M,w),(p!==r-1||l<Math.PI)&&f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},qu=class Hh extends Zt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=new N,f=new N,_=new N;for(let x=0;x<=r;x++){let m=s+x/r*o;for(let p=0;p<=a;p++){let A=p/a*n;f.x=(t+i*Math.cos(m))*Math.cos(A),f.y=(t+i*Math.cos(m))*Math.sin(A),f.z=i*Math.sin(m),h.push(f.x,f.y,f.z),u.x=t*Math.cos(A),u.y=t*Math.sin(A),_.subVectors(f,u).normalize(),c.push(_.x,_.y,_.z),d.push(p/a),d.push(x/r)}}for(let x=1;x<=r;x++)for(let m=1;m<=a;m++){let p=(a+1)*x+m-1,A=(a+1)*(x-1)+m-1,b=(a+1)*(x-1)+m,M=(a+1)*x+m;l.push(p,A,M),l.push(A,b,M)}this.setIndex(l),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Br(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Ll(a))a.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Ll(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Gt(e){let t={};for(let i=0;i<e.length;i++){let r=Br(e[i]);for(let a in r)t[a]=r[a]}return t}function Ll(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Yu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Il(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:lt.workingColorSpace}var Zu={clone:Br,merge:Gt},Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=Yu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new at().setHex(r.value);break;case"v2":this.uniforms[i].value=new Me().fromArray(r.value);break;case"v3":this.uniforms[i].value=new N().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qu=class extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ct=class extends oa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ms,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$u=class extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ed=class extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function an(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var ga=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},td=class extends ga{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Fo:a=e,s=2*t-i;break;case Bo:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Fo:n=e,o=2*i-t;break;case Bo:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(i-t)/(r-t),_=f*f,x=_*f,m=-d*x+2*d*_-d*f,p=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*f+1,A=(-1-u)*x+(1.5+u)*_+.5*f,b=u*x-u*_;for(let M=0;M!==s;++M)a[M]=m*n[h+M]+p*n[l+M]+A*n[o+M]+b*n[c+M];return a}},id=class extends ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let d=0;d!==s;++d)a[d]=n[l+d]*c+n[o+d]*h;return a}},rd=class extends ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ad=class extends ga{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,c=this.outTangents;if(!h||!c){let f=(i-t)/(r-t),_=1-f;for(let x=0;x!==s;++x)a[x]=n[l+x]*_+n[o+x]*f;return a}let d=s*2,u=e-1;for(let f=0;f!==s;++f){let _=n[l+f],x=n[o+f],m=u*d+f*2,p=c[m],A=c[m+1],b=e*d+f*2,M=h[b],T=h[b+1],w=(i-t)/(r-t),P,v,E,O,R;for(let V=0;V<8;V++){P=w*w,v=P*w,E=1-w,O=E*E,R=O*E;let j=R*t+3*O*w*p+3*E*P*M+v*r-i;if(Math.abs(j)<1e-10)break;let B=3*O*(p-t)+6*E*w*(M-p)+3*P*(r-M);if(Math.abs(B)<1e-10)break;w=w-j/B,w=Math.max(0,Math.min(1,w))}a[f]=R*_+3*O*w*A+3*E*P*T+v*x}return a}},Si=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=an(t,this.TimeBufferType),this.values=an(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:an(e.times,Array),values:an(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new id(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ad(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case ps:t=this.InterpolantFactoryMethodLinear;break;case fs:t=this.InterpolantFactoryMethodSmooth;break;case Do:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return fs;case this.InterpolantFactoryMethodBezier:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Ye("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Ye("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&yc(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,d=c-i,u=c+i;for(let f=0;f!==i;++f){let _=t[c+f];if(_!==t[d+f]||_!==t[u+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Si.prototype.ValueTypeName="",Si.prototype.TimeBufferType=Float32Array,Si.prototype.ValueBufferType=Float32Array,Si.prototype.DefaultInterpolation=ps;var va=class extends Si{constructor(e,t,i){super(e,t,i)}};va.prototype.ValueTypeName="bool",va.prototype.ValueBufferType=Array,va.prototype.DefaultInterpolation=Ua,va.prototype.InterpolantFactoryMethodLinear=void 0,va.prototype.InterpolantFactoryMethodSmooth=void 0;var nd=class extends Si{constructor(e,t,i,r){super(e,t,i,r)}};nd.prototype.ValueTypeName="color";var sd=class extends Si{constructor(e,t,i,r){super(e,t,i,r)}};sd.prototype.ValueTypeName="number";var od=class extends ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)ar.slerpFlat(a,0,n,l-s,n,l,o);return a}},Ul=class extends Si{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new od(this.times,this.values,this.getValueSize(),e)}};Ul.prototype.ValueTypeName="quaternion",Ul.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Si{constructor(e,t,i){super(e,t,i)}};_a.prototype.ValueTypeName="string",_a.prototype.ValueBufferType=Array,_a.prototype.DefaultInterpolation=Ua,_a.prototype.InterpolantFactoryMethodLinear=void 0,_a.prototype.InterpolantFactoryMethodSmooth=void 0;var ld=class extends Si{constructor(e,t,i,r){super(e,t,i,r)}};ld.prototype.ValueTypeName="vector";var hd=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],f=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new hd,ud=class{constructor(e){this.manager=e!==void 0?e:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ud.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nl=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Dl=class extends Nl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},$s=new Tt,Ol=new N,Fl=new N,dd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ol),Fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fl),t.updateMatrixWorld(),$s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Kr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nn=new N,sn=new ar,yi=new N,Bl=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nn,sn,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nn,sn,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(nn,sn,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nn,sn,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new N,zl=new Me,Hl=new Me,Jt=class extends Bl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,zl,Hl),t.subVectors(Hl,zl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eo=class extends Bl{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pd=class extends dd{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},on=class extends Nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new pd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},zr=-90,Hr=1,fd=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(zr,Hr,e,t);r.layers=this.layers,this.add(r);let a=new Jt(zr,Hr,e,t);a.layers=this.layers,this.add(a);let n=new Jt(zr,Hr,e,t);n.layers=this.layers,this.add(n);let s=new Jt(zr,Hr,e,t);s.layers=this.layers,this.add(s);let o=new Jt(zr,Hr,e,t);o.layers=this.layers,this.add(o);let l=new Jt(zr,Hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,d,u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},md=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},to="\\[\\]\\.:\\/",gd=new RegExp("["+to+"]","g"),io="[^"+to+"]",vd="[^"+to.replace("\\.","")+"]",_d=/((?:WC+[\/:])*)/.source.replace("WC",io),xd=/(WCOD+)?/.source.replace("WCOD",vd),Md=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",io),Sd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",io),yd=new RegExp("^"+_d+xd+Md+Sd+"$"),Ed=["material","materials","bones","map"],Td=class{constructor(e,t,i){let r=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class qr{constructor(t,i,r){this.path=i,this.parsedPath=r||qr.parseTrackName(i),this.node=qr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new qr.Composite(t,i,r):new qr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gd,"")}static parseTrackName(t){let i=yd.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Ed.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=qr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;Ye("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Td,Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray],Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P0=new Float32Array(1),L0=class Vh{static{Vh.prototype.isMatrix2=!0}constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}};function Vl(e,t,i,r){let a=bd(r);switch(i){case Io:return e*t;case No:return e*t/a.components*a.byteLength;case Nn:return e*t/a.components*a.byteLength;case tr:return e*t*2/a.components*a.byteLength;case Dn:return e*t*2/a.components*a.byteLength;case Uo:return e*t*3/a.components*a.byteLength;case oi:return e*t*4/a.components*a.byteLength;case On:return e*t*4/a.components*a.byteLength;case Aa:case Ra:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Pa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bn:case Hn:return Math.max(e,16)*Math.max(t,8)/4;case Fn:case zn:return Math.max(e,8)*Math.max(t,8)/2;case Vn:case Gn:case Wn:case Xn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kn:case La:case jn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Zn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Jn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Kn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Qn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case $n:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case es:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ts:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case is:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case rs:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case as:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ns:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ss:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case os:case ls:case hs:return Math.ceil(e/4)*Math.ceil(t/4)*16;case cs:case us:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ia:case ds:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bd(e){switch(e){case jt:case Ro:return{byteLength:1,components:1};case Zr:case Co:case Ci:return{byteLength:2,components:1};case In:case Un:return{byteLength:2,components:4};case fi:case Ln:case mi:return{byteLength:4,components:1};case Po:case Lo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Gl(){let e=null,t=!1,i=null,r=null;function a(n,s){i(n,s),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function wd(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,c);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],x=d[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let x=d[f];e.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
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
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,bp=`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
}`,wp=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fp=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,pf=`float getShadowMask() {
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
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yf=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
}`,Of=`#define DISTANCE
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
}`,Ff=`#define DISTANCE
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
void main() {
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,kf=`uniform vec3 diffuse;
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define LAMBERT
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
}`,jf=`#define MATCAP
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define NORMAL
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
}`,Zf=`#define NORMAL
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
}`,Jf=`#define PHONG
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
}`,Kf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,$f=`#define STANDARD
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
}`,em=`#define TOON
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
}`,tm=`#define TOON
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
}`,im=`uniform float size;
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,sm=`uniform float rotation;
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
}`,om=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Ad,alphahash_pars_fragment:Rd,alphamap_fragment:Cd,alphamap_pars_fragment:Pd,alphatest_fragment:Ld,alphatest_pars_fragment:Id,aomap_fragment:Ud,aomap_pars_fragment:Nd,batching_pars_vertex:Dd,batching_vertex:Od,begin_vertex:Fd,beginnormal_vertex:Bd,bsdfs:zd,iridescence_fragment:Hd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:jd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:Zd,common:Jd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:$d,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:ip,colorspace_fragment:rp,colorspace_pars_fragment:ap,envmap_fragment:np,envmap_common_pars_fragment:sp,envmap_pars_fragment:op,envmap_pars_vertex:lp,envmap_physical_pars_fragment:xp,envmap_vertex:hp,fog_vertex:cp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:pp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:vp,lights_pars_begin:_p,lights_toon_fragment:Mp,lights_toon_pars_fragment:Sp,lights_phong_fragment:yp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Tp,lights_physical_pars_fragment:bp,lights_fragment_begin:wp,lights_fragment_maps:Ap,lights_fragment_end:Rp,lightprobes_pars_fragment:Cp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:Dp,map_particle_fragment:Op,map_particle_pars_fragment:Fp,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Hp,morphcolor_vertex:Vp,morphnormal_vertex:Gp,morphtarget_pars_vertex:kp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:jp,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:ef,opaque_fragment:tf,packing:rf,premultiplied_alpha_fragment:af,project_vertex:nf,dithering_fragment:sf,dithering_pars_fragment:of,roughnessmap_fragment:lf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:uf,shadowmap_vertex:df,shadowmask_pars_fragment:pf,skinbase_vertex:ff,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:vf,specularmap_fragment:_f,specularmap_pars_fragment:xf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:yf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:bf,uv_vertex:wf,worldpos_vertex:Af,background_vert:Rf,background_frag:Cf,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:If,cube_frag:Uf,depth_vert:Nf,depth_frag:Df,distance_vert:Of,distance_frag:Ff,equirect_vert:Bf,equirect_frag:zf,linedashed_vert:Hf,linedashed_frag:Vf,meshbasic_vert:Gf,meshbasic_frag:kf,meshlambert_vert:Wf,meshlambert_frag:Xf,meshmatcap_vert:jf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:Zf,meshphong_vert:Jf,meshphong_frag:Kf,meshphysical_vert:Qf,meshphysical_frag:$f,meshtoon_vert:em,meshtoon_frag:tm,points_vert:im,points_frag:rm,shadow_vert:am,shadow_frag:nm,sprite_vert:sm,sprite_frag:om},we={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ei={basic:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Gt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Gt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new at(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Gt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Gt([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Gt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Gt([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Gt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Gt([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Gt([we.common,we.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Gt([we.lights,we.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Ei.physical={uniforms:Gt([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var ln={r:0,b:0,g:0},lm=new Tt,kl=new $e;kl.set(-1,0,0,0,1,0,0,0,1);function hm(e,t,i,r,a,n){let s=new at(0),o=a===!0?0:1,l,h,c=null,d=0,u=null;function f(A){let b=A.isScene===!0?A.background:null;if(b&&b.isTexture){let M=A.backgroundBlurriness>0;b=t.get(b,M)}return b}function _(A){let b=!1,M=f(A);M===null?m(s,o):M&&M.isColor&&(m(M,1),b=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(A,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===ba)?(h===void 0&&(h=new ve(new la(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Br(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(kl),h.material.toneMapped=lt.getTransfer(M.colorSpace)!==ut,(c!==M||d!==M.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=M,d=M.version,u=e.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ve(new Cl(2,2),new Mi({name:"BackgroundMaterial",uniforms:Br(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||d!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=M,d=M.version,u=e.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,b){A.getRGB(ln,Il(e)),i.buffers.color.setClear(ln.r,ln.g,ln.b,b,n)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,b=1){s.set(A),o=b,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(s,o)},render:_,addToRenderList:x,dispose:p}}function cm(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(R,V,j,B,G){let q=!1,z=d(R,B,j,V);n!==z&&(n=z,h(n.object)),q=f(R,B,j,G),q&&_(R,B,j,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,M(R,V,j,B),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function h(R){return e.bindVertexArray(R)}function c(R){return e.deleteVertexArray(R)}function d(R,V,j,B){let G=B.wireframe===!0,q=r[V.id];q===void 0&&(q={},r[V.id]=q);let z=R.isInstancedMesh===!0?R.id:0,ne=q[z];ne===void 0&&(ne={},q[z]=ne);let re=ne[j.id];re===void 0&&(re={},ne[j.id]=re);let se=re[G];return se===void 0&&(se=u(l()),re[G]=se),se}function u(R){let V=[],j=[],B=[];for(let G=0;G<i;G++)V[G]=0,j[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:B,object:R,attributes:{},index:null}}function f(R,V,j,B){let G=n.attributes,q=V.attributes,z=0,ne=j.getAttributes();for(let re in ne)if(ne[re].location>=0){let se=G[re],Se=q[re];if(Se===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor)),se===void 0||se.attribute!==Se||Se&&se.data!==Se.data)return!0;z++}return n.attributesNum!==z||n.index!==B}function _(R,V,j,B){let G={},q=V.attributes,z=0,ne=j.getAttributes();for(let re in ne)if(ne[re].location>=0){let se=q[re];se===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));let Se={};Se.attribute=se,se&&se.data&&(Se.data=se.data),G[re]=Se,z++}n.attributes=G,n.attributesNum=z,n.index=B}function x(){let R=n.newAttributes;for(let V=0,j=R.length;V<j;V++)R[V]=0}function m(R){p(R,0)}function p(R,V){let j=n.newAttributes,B=n.enabledAttributes,G=n.attributeDivisors;j[R]=1,B[R]===0&&(e.enableVertexAttribArray(R),B[R]=1),G[R]!==V&&(e.vertexAttribDivisor(R,V),G[R]=V)}function A(){let R=n.newAttributes,V=n.enabledAttributes;for(let j=0,B=V.length;j<B;j++)V[j]!==R[j]&&(e.disableVertexAttribArray(j),V[j]=0)}function b(R,V,j,B,G,q,z){z===!0?e.vertexAttribIPointer(R,V,j,G,q):e.vertexAttribPointer(R,V,j,B,G,q)}function M(R,V,j,B){x();let G=B.attributes,q=j.getAttributes(),z=V.defaultAttributeValues;for(let ne in q){let re=q[ne];if(re.location>=0){let se=G[ne];if(se===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),se!==void 0){let Se=se.normalized,Pe=se.itemSize,Ze=t.get(se);if(Ze===void 0)continue;let et=Ze.buffer,K=Ze.type,le=Ze.bytesPerElement,Ee=K===e.INT||K===e.UNSIGNED_INT||se.gpuType===Ln;if(se.isInterleavedBufferAttribute){let he=se.data,Ne=he.stride,He=se.offset;if(he.isInstancedInterleavedBuffer){for(let fe=0;fe<re.locationSize;fe++)p(re.location+fe,he.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let fe=0;fe<re.locationSize;fe++)m(re.location+fe);e.bindBuffer(e.ARRAY_BUFFER,et);for(let fe=0;fe<re.locationSize;fe++)b(re.location+fe,Pe/re.locationSize,K,Se,Ne*le,(He+Pe/re.locationSize*fe)*le,Ee)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<re.locationSize;he++)p(re.location+he,se.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<re.locationSize;he++)m(re.location+he);e.bindBuffer(e.ARRAY_BUFFER,et);for(let he=0;he<re.locationSize;he++)b(re.location+he,Pe/re.locationSize,K,Se,Pe*le,Pe/re.locationSize*he*le,Ee)}}else if(z!==void 0){let Se=z[ne];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(re.location,Se);break;case 3:e.vertexAttrib3fv(re.location,Se);break;case 4:e.vertexAttrib4fv(re.location,Se);break;default:e.vertexAttrib1fv(re.location,Se)}}}}A()}function T(){E();for(let R in r){let V=r[R];for(let j in V){let B=V[j];for(let G in B){let q=B[G];for(let z in q)c(q[z].object),delete q[z];delete B[G]}}delete r[R]}}function w(R){if(r[R.id]===void 0)return;let V=r[R.id];for(let j in V){let B=V[j];for(let G in B){let q=B[G];for(let z in q)c(q[z].object),delete q[z];delete B[G]}}delete r[R.id]}function P(R){for(let V in r){let j=r[V];for(let B in j){let G=j[B];if(G[R.id]===void 0)continue;let q=G[R.id];for(let z in q)c(q[z].object),delete q[z];delete G[R.id]}}}function v(R){for(let V in r){let j=r[V],B=R.isInstancedMesh===!0?R.id:0,G=j[B];if(G!==void 0){for(let q in G){let z=G[q];for(let ne in z)c(z[ne].object),delete z[ne];delete G[q]}delete j[B],Object.keys(j).length===0&&delete r[V]}}}function E(){O(),s=!0,n!==a&&(n=a,h(n.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function um(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function dm(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(P){return!(P!==oi&&r.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===Ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==jt&&r.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==mi&&!v)}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(je("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:w}}function pm(e){let t=this,i=null,r=0,a=!1,n=!1,s=new lr,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||r!==0||a;return a=u,r=d.length,f},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!a||_===null||_.length===0||n&&!m)n?c(null):h();else{let A=n?0:r,b=A*4,M=p.clippingState||null;l.value=M,M=c(_,u,b,f);for(let T=0;T!==b;++T)M[T]=i[T];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(d,u,f,_){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let p=f+x*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==x;++b,M+=4)s.copy(d[b]).applyMatrix4(A,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var qi=4,Wl=[.125,.215,.35,.446,.526,.582],dr=20,fm=256,xa=new eo,Xl=new at,ro=null,ao=0,no=0,so=!1,mm=new N,jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=mm}=a;ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,ao,no),this._renderer.xr.enabled=so,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ci,format:oi,colorSpace:Na,depthBuffer:!1},r=ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gm(a)),this._blurMaterial=_m(a,e,t),this._ggxMaterial=vm(a,e,t)}return r}_compileMaterial(e){let t=new ve(new Zt,e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,i,r,a){let n=new Jt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Xl),l.toneMapping=pi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new la,new Vs({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,f=!1,_=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,f=!0):(u.color.copy(Xl),f=!0);for(let x=0;x<6;x++){let m=x%3;m===0?(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[x],a.y,a.z)):m===1?(n.up.set(0,0,s[x]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[x],a.z)):(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[x]));let p=this._cubeSize;Vr(r,m*p,x>2?p:0,p,p),l.setRenderTarget(r),f&&l.render(d,n),l.render(e,n)}l.toneMapping=c,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Qi||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Vr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,xa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=0+l*1.25,u=c*d,{_lodMax:f}=this,_=this._sizeLods[i],x=3*_*(i>f-qi?i-f+qi:0),m=4*(this._cubeSize-_);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=f-t,Vr(a,x,m,3*_,2*_),r.setRenderTarget(a),r.render(s,xa),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,Vr(e,x,m,3*_,2*_),r.setRenderTarget(e),r.render(s,xa)}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");let h=3,c=this._lodMeshes[r];c.material=l;let d=l.uniforms,u=this._sizeLods[i]-1,f=isFinite(a)?Math.PI/(2*u):2*Math.PI/(2*dr-1),_=a/f,x=isFinite(a)?1+Math.floor(h*_):dr;x>dr&&je(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${dr}`);let m=[],p=0;for(let w=0;w<dr;++w){let P=w/_,v=Math.exp(-P*P/2);m.push(v),w===0?p+=v:w<x&&(p+=2*v)}for(let w=0;w<m.length;w++)m[w]=m[w]/p;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=n==="latitudinal",s&&(d.poleAxis.value=s);let{_lodMax:A}=this;d.dTheta.value=f,d.mipInt.value=A-i;let b=this._sizeLods[r],M=3*b*(r>A-qi?r-A+qi:0),T=4*(this._cubeSize-b);Vr(t,M,T,3*b,2*b),o.setRenderTarget(t),o.render(c,xa)}};function gm(e){let t=[],i=[],r=[],a=e,n=e-qi+1+Wl.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);t.push(o);let l=1/o;s>e-qi?l=Wl[s-e+qi-1]:s===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,_=6,x=3,m=2,p=1,A=new Float32Array(x*_*f),b=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let w=0;w<f;w++){let P=w%3*2/3-1,v=w>2?0:-1,E=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];A.set(E,x*_*w),b.set(u,m*_*w);let O=[w,w,w,w,w,w];M.set(O,p*_*w)}let T=new Zt;T.setAttribute("position",new _i(A,x)),T.setAttribute("uv",new _i(b,m)),T.setAttribute("faceIndex",new _i(M,p)),r.push(new ve(T,null)),a>qi&&a--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function ql(e,t,i){let r=new vi(e,t,i);return r.texture.mapping=ba,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function vm(e,t,i){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hn(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function _m(e,t,i){let r=new Float32Array(dr),a=new N(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hn(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Yl(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hn(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Zl(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function hn(){return`

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
	`}var Jl=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new la(5,5,5),a=new Mi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:Ai});a.uniforms.tEquirect.value=t;let n=new ve(r,a),s=t.minFilter;return t.minFilter===$i&&(t.minFilter=Dt),new fd(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function xm(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,f=!1){return u==null?null:f?s(u):n(u)}function n(u){if(u&&u.isTexture){let f=u.mapping;if(f===wn||f===An)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let x=new Jl(_.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",h),o(x.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let f=u.mapping,_=f===wn||f===An,x=f===Qi||f===_r;if(_||x){let m=i.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return r===null&&(r=new jl(e)),m=_?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let A=u.image;return _&&A&&A.height>0||x&&A&&l(A)?(r===null&&(r=new jl(e)),m=_?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,f){return f===wn?u.mapping=Qi:f===An&&(u.mapping=_r),u}function l(u){let f=0,_=6;for(let x=0;x<_;x++)u[x]!==void 0&&f++;return f===_}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=i.get(f);_!==void 0&&(i.delete(f),_.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function Mm(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Sr("WebGLRenderer: "+r+" extension not supported."),a}}}function Sm(e,t,i,r){let a={},n=new WeakMap;function s(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete a[u.id];let f=n.get(u);f&&(t.remove(f),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function h(d){let u=[],f=d.index,_=d.attributes.position,x=0;if(_===void 0)return;if(f!==null){let A=f.array;x=f.version;for(let b=0,M=A.length;b<M;b+=3){let T=A[b+0],w=A[b+1],P=A[b+2];u.push(T,w,w,P,P,T)}}else{let A=_.array;x=_.version;for(let b=0,M=A.length/3-1;b<M;b+=3){let T=b+0,w=b+1,P=b+2;u.push(T,w,w,P,P,T)}}let m=new(_.count>=65535?ll:ol)(u,1);m.version=x;let p=n.get(d);p&&t.remove(p),n.set(d,m)}function c(d){let u=n.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function ym(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function h(d,u,f){f!==0&&(e.drawElementsInstanced(r,u,n,d*s,f),i.update(u,r,f))}function c(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x];i.update(_,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Em(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Ye("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Tm(e,t,i){let r=new WeakMap,a=new Et;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let f=function(){v.dispose(),r.delete(o),o.removeEventListener("dispose",f)};u!==void 0&&u.texture.dispose();let _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let P=new Float32Array(T*w*4*d),v=new Zo(P,T,w,d);v.type=mi,v.needsUpdate=!0;let E=M*4;for(let O=0;O<d;O++){let R=p[O],V=A[O],j=b[O],B=T*w*4*O;for(let G=0;G<R.count;G++){let q=G*E;_===!0&&(a.fromBufferAttribute(R,G),P[B+q+0]=a.x,P[B+q+1]=a.y,P[B+q+2]=a.z,P[B+q+3]=0),x===!0&&(a.fromBufferAttribute(V,G),P[B+q+4]=a.x,P[B+q+5]=a.y,P[B+q+6]=a.z,P[B+q+7]=0),m===!0&&(a.fromBufferAttribute(j,G),P[B+q+8]=a.x,P[B+q+9]=a.y,P[B+q+10]=a.z,P[B+q+11]=j.itemSize===4?a.w:1)}}u={count:d,texture:v,size:new Me(T,w)},r.set(o,u),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function bm(e,t,i,r,a){let n=new WeakMap;function s(h){let c=a.render.frame,d=h.geometry,u=t.get(h,d);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}var wm={[Mo]:"LINEAR_TONE_MAPPING",[So]:"REINHARD_TONE_MAPPING",[yo]:"CINEON_TONE_MAPPING",[Eo]:"ACES_FILMIC_TONE_MAPPING",[bo]:"AGX_TONE_MAPPING",[wo]:"NEUTRAL_TONE_MAPPING",[To]:"CUSTOM_TONE_MAPPING"};function Am(e,t,i,r,a,n){let s=new vi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,depthTexture:a?new Dr(t,i):void 0}),o=new vi(t,i,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new Zt;l.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new vt([0,2,0,0,2,0],2));let h=new Qu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ve(l,h),d=new eo(-1,1,1,-1,0,1),u=null,f=null,_=!1,x,m=null,p=[],A=!1;this.setSize=function(b,M){s.setSize(b,M),o.setSize(b,M);for(let T=0;T<p.length;T++){let w=p[T];w.setSize&&w.setSize(b,M)}},this.setEffects=function(b){p=b,A=p.length>0&&p[0].isRenderPass===!0;let M=s.width,T=s.height;for(let w=0;w<p.length;w++){let P=p[w];P.setSize&&P.setSize(M,T)}},this.begin=function(b,M){if(_||b.toneMapping===pi&&p.length===0)return!1;if(m=M,M!==null){let T=M.width,w=M.height;(s.width!==T||s.height!==w)&&this.setSize(T,w)}return A===!1&&b.setRenderTarget(s),x=b.toneMapping,b.toneMapping=pi,!0},this.hasRenderPass=function(){return A},this.end=function(b,M){b.toneMapping=x,_=!0;let T=s,w=o;for(let P=0;P<p.length;P++){let v=p[P];if(v.enabled!==!1&&(v.render(b,w,T,M),v.needsSwap!==!1)){let E=T;T=w,w=E}}if(u!==b.outputColorSpace||f!==b.toneMapping){u=b.outputColorSpace,f=b.toneMapping,h.defines={},lt.getTransfer(u)===ut&&(h.defines.SRGB_TRANSFER="");let P=wm[f];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(m),b.render(c,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),h.dispose()}}var Kl=new ri,oo=new Dr(1,1),Ql=new Zo,$l=new qc,eh=new dl,th=[],ih=[],rh=new Float32Array(16),ah=new Float32Array(9),nh=new Float32Array(4);function Gr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=th[a];if(n===void 0&&(n=new Float32Array(a),th[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Pt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Lt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function cn(e,t){let i=ih[t];i===void 0&&(i=new Int32Array(t),ih[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Rm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Cm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pt(i,t))return;e.uniform2fv(this.addr,t),Lt(i,t)}}function Pm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Pt(i,t))return;e.uniform3fv(this.addr,t),Lt(i,t)}}function Lm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pt(i,t))return;e.uniform4fv(this.addr,t),Lt(i,t)}}function Im(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Pt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Lt(i,t)}else{if(Pt(i,r))return;nh.set(r),e.uniformMatrix2fv(this.addr,!1,nh),Lt(i,r)}}function Um(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Pt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Lt(i,t)}else{if(Pt(i,r))return;ah.set(r),e.uniformMatrix3fv(this.addr,!1,ah),Lt(i,r)}}function Nm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Pt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Lt(i,t)}else{if(Pt(i,r))return;rh.set(r),e.uniformMatrix4fv(this.addr,!1,rh),Lt(i,r)}}function Dm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Om(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pt(i,t))return;e.uniform2iv(this.addr,t),Lt(i,t)}}function Fm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pt(i,t))return;e.uniform3iv(this.addr,t),Lt(i,t)}}function Bm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pt(i,t))return;e.uniform4iv(this.addr,t),Lt(i,t)}}function zm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Hm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pt(i,t))return;e.uniform2uiv(this.addr,t),Lt(i,t)}}function Vm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pt(i,t))return;e.uniform3uiv(this.addr,t),Lt(i,t)}}function Gm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pt(i,t))return;e.uniform4uiv(this.addr,t),Lt(i,t)}}function km(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(oo.compareFunction=i.isReversedDepthBuffer()?vs:gs,n=oo):n=Kl,i.setTexture2D(t||n,a)}function Wm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||$l,a)}function Xm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||eh,a)}function jm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Ql,a)}function qm(e){switch(e){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Lm;case 35674:return Im;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Dm;case 35667:case 35671:return Om;case 35668:case 35672:return Fm;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Hm;case 36295:return Vm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return jm}}function Ym(e,t){e.uniform1fv(this.addr,t)}function Zm(e,t){let i=Gr(t,this.size,2);e.uniform2fv(this.addr,i)}function Jm(e,t){let i=Gr(t,this.size,3);e.uniform3fv(this.addr,i)}function Km(e,t){let i=Gr(t,this.size,4);e.uniform4fv(this.addr,i)}function Qm(e,t){let i=Gr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function $m(e,t){let i=Gr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function eg(e,t){let i=Gr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function tg(e,t){e.uniform1iv(this.addr,t)}function ig(e,t){e.uniform2iv(this.addr,t)}function rg(e,t){e.uniform3iv(this.addr,t)}function ag(e,t){e.uniform4iv(this.addr,t)}function ng(e,t){e.uniform1uiv(this.addr,t)}function sg(e,t){e.uniform2uiv(this.addr,t)}function og(e,t){e.uniform3uiv(this.addr,t)}function lg(e,t){e.uniform4uiv(this.addr,t)}function hg(e,t,i){let r=this.cache,a=t.length,n=cn(i,a);Pt(r,n)||(e.uniform1iv(this.addr,n),Lt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=oo:s=Kl;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function cg(e,t,i){let r=this.cache,a=t.length,n=cn(i,a);Pt(r,n)||(e.uniform1iv(this.addr,n),Lt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||$l,n[s])}function ug(e,t,i){let r=this.cache,a=t.length,n=cn(i,a);Pt(r,n)||(e.uniform1iv(this.addr,n),Lt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||eh,n[s])}function dg(e,t,i){let r=this.cache,a=t.length,n=cn(i,a);Pt(r,n)||(e.uniform1iv(this.addr,n),Lt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Ql,n[s])}function pg(e){switch(e){case 5126:return Ym;case 35664:return Zm;case 35665:return Jm;case 35666:return Km;case 35674:return Qm;case 35675:return $m;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ig;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return ng;case 36294:return sg;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}var fg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}},mg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}},gg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},lo=/(\w+)(\])?(\[|\.)?/g;function sh(e,t){e.seq.push(t),e.map[t.id]=t}function vg(e,t,i){let r=e.name,a=r.length;for(lo.lastIndex=0;;){let n=lo.exec(r),s=lo.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){sh(i,h===void 0?new fg(o,e,t):new mg(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new gg(o),sh(i,c)),i=c}}}var un=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);vg(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function oh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var _g=37297,xg=0;function Mg(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var lh=new $e;function Sg(e){lt._getMatrix(lh,lt.workingColorSpace,e);let t=`mat3( ${lh.elements.map(i=>i.toFixed(4))} )`;switch(lt.getTransfer(e)){case Da:return[t,"LinearTransferOETF"];case ut:return[t,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function hh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Mg(e.getShaderSource(t),s)}else return a}function yg(e,t){let i=Sg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Eg={[Mo]:"Linear",[So]:"Reinhard",[yo]:"Cineon",[Eo]:"ACESFilmic",[bo]:"AgX",[wo]:"Neutral",[To]:"Custom"};function Tg(e,t){let i=Eg[t];return i===void 0?(je("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var dn=new N;function bg(){lt.getLuminanceCoefficients(dn);let e=dn.x.toFixed(4),t=dn.y.toFixed(4),i=dn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Ag(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Rg(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Ma(e){return e!==""}function ch(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(e){return e.replace(Cg,Lg)}var Pg=new Map;function Lg(e,t){let i=tt[t];if(i===void 0){let r=Pg.get(t);if(r!==void 0)i=tt[r],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ho(i)}var Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(e){return e.replace(Ig,Ug)}function Ug(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function ph(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ng={[Ta]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function Dg(e){return Ng[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Og={[Qi]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE_UV"};function Fg(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Og[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bg={[_r]:"ENVMAP_MODE_REFRACTION"};function zg(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Bg[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hg={[xo]:"ENVMAP_BLENDING_MULTIPLY",[cc]:"ENVMAP_BLENDING_MIX",[uc]:"ENVMAP_BLENDING_ADD"};function Vg(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Hg[e.combine]||"ENVMAP_BLENDING_NONE"}function Gg(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function kg(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=Dg(i),h=Fg(i),c=zg(i),d=Vg(i),u=Gg(i),f=wg(i),_=Ag(n),x=a.createProgram(),m,p,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(m=[ph(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[ph(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pi?"#define TONE_MAPPING":"",i.toneMapping!==pi?tt.tonemapping_pars_fragment:"",i.toneMapping!==pi?Tg("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,yg("linearToOutputTexel",i.outputColorSpace),bg(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ma).join(`
`)),s=ho(s),s=ch(s,i),s=uh(s,i),o=ho(o),o=ch(o,i),o=uh(o,i),s=dh(s),o=dh(o),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",i.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=A+m+s,M=A+p+o,T=oh(a,a.VERTEX_SHADER,b),w=oh(a,a.FRAGMENT_SHADER,M);a.attachShader(x,T),a.attachShader(x,w),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function P(R){if(e.debug.checkShaderErrors){let V=a.getProgramInfoLog(x)||"",j=a.getShaderInfoLog(T)||"",B=a.getShaderInfoLog(w)||"",G=V.trim(),q=j.trim(),z=B.trim(),ne=!0,re=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,T,w);else{let se=hh(a,T,"vertex"),Se=hh(a,w,"fragment");Ye("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+se+`
`+Se)}else G!==""?je("WebGLProgram: Program Info Log:",G):(q===""||z==="")&&(re=!1);re&&(R.diagnostics={runnable:ne,programLog:G,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:p}})}a.deleteShader(T),a.deleteShader(w),v=new un(a,x),E=Rg(a,x)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(x,_g)),O},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var Wg=0,Xg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new jg(e),t.set(e,i)),i}},jg=class{constructor(e){this.id=Wg++,this.code=e,this.usedTimes=0}};function qg(e){return e===tr||e===La||e===Ia}function Yg(e,t,i,r,a,n){let s=new Qo,o=new Xg,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,O,R,V,j){let B=R.fog,G=V.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=t.get(v.envMap||q,z),re=ne&&ne.mapping===ba?ne.image.height:null,se=f[v.type];v.precision!==null&&(u=r.getMaxPrecision(v.precision),u!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Pe=Se!==void 0?Se.length:0,Ze=0;G.morphAttributes.position!==void 0&&(Ze=1),G.morphAttributes.normal!==void 0&&(Ze=2),G.morphAttributes.color!==void 0&&(Ze=3);let et,K,le,Ee;if(se){let ye=Ei[se];et=ye.vertexShader,K=ye.fragmentShader}else{et=v.vertexShader,K=v.fragmentShader;let ye=o.getVertexShaderStage(v),ht=o.getFragmentShaderStage(v);o.update(v,ye,ht),le=ye.id,Ee=ht.id}let he=e.getRenderTarget(),Ne=e.state.buffers.depth.getReversed(),He=V.isInstancedMesh===!0,fe=V.isBatchedMesh===!0,me=!!v.map,W=!!v.matcap,$=!!ne,J=!!v.aoMap,ce=!!v.lightMap,pe=!!v.bumpMap&&v.wireframe===!1,_e=!!v.normalMap,Te=!!v.displacementMap,De=!!v.emissiveMap,Oe=!!v.metalnessMap,L=!!v.roughnessMap,Ke=v.anisotropy>0,ke=v.clearcoat>0,Fe=v.dispersion>0,y=v.iridescence>0,g=v.sheen>0,C=v.transmission>0,F=Ke&&!!v.anisotropyMap,Y=ke&&!!v.clearcoatMap,ee=ke&&!!v.clearcoatNormalMap,de=ke&&!!v.clearcoatRoughnessMap,I=y&&!!v.iridescenceMap,ie=y&&!!v.iridescenceThicknessMap,oe=g&&!!v.sheenColorMap,ge=g&&!!v.sheenRoughnessMap,te=!!v.specularMap,Re=!!v.specularColorMap,Le=!!v.specularIntensityMap,Ge=C&&!!v.transmissionMap,Je=C&&!!v.thicknessMap,U=!!v.gradientMap,Q=!!v.alphaMap,ae=v.alphaTest>0,Ae=!!v.alphaHash,Ie=!!v.extensions,Z=pi;v.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Z=e.toneMapping);let ue={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:et,fragmentShader:K,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:Ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:fe,batchingColor:fe&&V._colorsTexture!==null,instancing:He,instancingColor:He&&V.instanceColor!==null,instancingMorph:He&&V.morphTexture!==null,outputColorSpace:he===null?e.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:me,matcap:W,envMap:$,envMapMode:$&&ne.mapping,envMapCubeUVHeight:re,aoMap:J,lightMap:ce,bumpMap:pe,normalMap:_e,displacementMap:Te,emissiveMap:De,normalMapObjectSpace:_e&&v.normalMapType===fc,normalMapTangentSpace:_e&&v.normalMapType===ms,packedNormalMap:_e&&v.normalMapType===ms&&qg(v.normalMap.format),metalnessMap:Oe,roughnessMap:L,anisotropy:Ke,anisotropyMap:F,clearcoat:ke,clearcoatMap:Y,clearcoatNormalMap:ee,clearcoatRoughnessMap:de,dispersion:Fe,iridescence:y,iridescenceMap:I,iridescenceThicknessMap:ie,sheen:g,sheenColorMap:oe,sheenRoughnessMap:ge,specularMap:te,specularColorMap:Re,specularIntensityMap:Le,transmission:C,transmissionMap:Ge,thicknessMap:Je,gradientMap:U,opaque:v.transparent===!1&&v.blending===gr&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:ae,alphaHash:Ae,combine:v.combine,mapUv:me&&_(v.map.channel),aoMapUv:J&&_(v.aoMap.channel),lightMapUv:ce&&_(v.lightMap.channel),bumpMapUv:pe&&_(v.bumpMap.channel),normalMapUv:_e&&_(v.normalMap.channel),displacementMapUv:Te&&_(v.displacementMap.channel),emissiveMapUv:De&&_(v.emissiveMap.channel),metalnessMapUv:Oe&&_(v.metalnessMap.channel),roughnessMapUv:L&&_(v.roughnessMap.channel),anisotropyMapUv:F&&_(v.anisotropyMap.channel),clearcoatMapUv:Y&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:I&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(v.sheenRoughnessMap.channel),specularMapUv:te&&_(v.specularMap.channel),specularColorMapUv:Re&&_(v.specularColorMap.channel),specularIntensityMapUv:Le&&_(v.specularIntensityMap.channel),transmissionMapUv:Ge&&_(v.transmissionMap.channel),thicknessMapUv:Je&&_(v.thicknessMap.channel),alphaMapUv:Q&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(_e||Ke),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(me||Q),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&_e===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:Z,decodeVideoTexture:me&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wi,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function m(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)E.push(O),E.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(p(E,v),A(E,v),E.push(e.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function A(v,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function b(v){let E=f[v.type],O;if(E){let R=Ei[E];O=Zu.clone(R.uniforms)}else O=v.uniforms;return O}function M(v,E){let O=c.get(E);return O!==void 0?++O.usedTimes:(O=new kg(e,E,v,a),h.push(O),c.set(E,O)),O}function T(v){if(--v.usedTimes===0){let E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function P(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:P}}function Zg(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function Jg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function fh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function mh(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,x,m,p){let A=e[t];return A===void 0?(A={id:u.id,object:u,geometry:f,material:_,materialVariant:s(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},e[t]=A):(A.id=u.id,A.object=u,A.geometry=f,A.material=_,A.materialVariant=s(u),A.groupOrder=x,A.renderOrder=u.renderOrder,A.z=m,A.group=p),t++,A}function l(u,f,_,x,m,p){let A=o(u,f,_,x,m,p);_.transmission>0?r.push(A):_.transparent===!0?a.push(A):i.push(A)}function h(u,f,_,x,m,p){let A=o(u,f,_,x,m,p);_.transmission>0?r.unshift(A):_.transparent===!0?a.unshift(A):i.unshift(A)}function c(u,f,_){i.length>1&&i.sort(u||Jg),r.length>1&&r.sort(f||fh),a.length>1&&a.sort(f||fh),_&&(i.reverse(),r.reverse(),a.reverse())}function d(){for(let u=t,f=e.length;u<f;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:d,sort:c}}function Kg(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new mh,e.set(r,[s])):a>=n.length?(s=new mh,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Qg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new N,color:new at};break;case"SpotLight":i={position:new N,direction:new N,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new N,color:new at,distance:0,decay:0};break;case"HemisphereLight":i={direction:new N,skyColor:new at,groundColor:new at};break;case"RectAreaLight":i={color:new at,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=i,i}}}function $g(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var e0=0;function t0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function i0(e){let t=new Qg,i=$g(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);let a=new N,n=new Tt,s=new Tt;function o(h){let c=0,d=0,u=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,A=0,b=0,M=0,T=0,w=0,P=0;h.sort(t0);for(let E=0,O=h.length;E<O;E++){let R=h[E],V=R.color,j=R.intensity,B=R.distance,G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===tr?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=V.r*j,d+=V.g*j,u+=V.b*j;else if(R.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(R.sh.coefficients[q],j);P++}else if(R.isDirectionalLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,ne=i.get(R);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,r.directionalShadow[f]=ne,r.directionalShadowMap[f]=G,r.directionalShadowMatrix[f]=R.shadow.matrix,A++}r.directional[f]=q,f++}else if(R.isSpotLight){let q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(V).multiplyScalar(j),q.distance=B,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,r.spot[x]=q;let z=R.shadow;if(R.map&&(r.spotLightMap[T]=R.map,T++,z.updateMatrices(R),R.castShadow&&w++),r.spotLightMatrix[x]=z.matrix,R.castShadow){let ne=i.get(R);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,r.spotShadow[x]=ne,r.spotShadowMap[x]=G,M++}x++}else if(R.isRectAreaLight){let q=t.get(R);q.color.copy(V).multiplyScalar(j),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),r.rectArea[m]=q,m++}else if(R.isPointLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let z=R.shadow,ne=i.get(R);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,ne.shadowCameraNear=z.camera.near,ne.shadowCameraFar=z.camera.far,r.pointShadow[_]=ne,r.pointShadowMap[_]=G,r.pointShadowMatrix[_]=R.shadow.matrix,b++}r.point[_]=q,_++}else if(R.isHemisphereLight){let q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(j),q.groundColor.copy(R.groundColor).multiplyScalar(j),r.hemi[p]=q,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let v=r.hash;(v.directionalLength!==f||v.pointLength!==_||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==A||v.numPointShadows!==b||v.numSpotShadows!==M||v.numSpotMaps!==T||v.numLightProbes!==P)&&(r.directional.length=f,r.spot.length=x,r.rectArea.length=m,r.point.length=_,r.hemi.length=p,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=M+T-w,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=P,v.directionalLength=f,v.pointLength=_,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=A,v.numPointShadows=b,v.numSpotShadows=M,v.numSpotMaps=T,v.numLightProbes=P,r.version=e0++)}function l(h,c){let d=0,u=0,f=0,_=0,x=0,m=c.matrixWorldInverse;for(let p=0,A=h.length;p<A;p++){let b=h[p];if(b.isDirectionalLight){let M=r.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=r.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=r.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),s.identity(),n.copy(b.matrixWorld),n.premultiply(m),s.extractRotation(n),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){let M=r.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let M=r.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:r}}function gh(e){let t=new i0(e),i=[],r=[],a=[];function n(u){d.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:h,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function r0(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new gh(e),t.set(a,[o])):n>=s.length?(o=new gh(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`,s0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],o0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],vh=new Tt,Sa=new N,co=new N;function l0(e,t,i){let r=new Ws,a=new Me,n=new Me,s=new Et,o=new $u,l=new ed,h={},c=i.maxTextureSize,d={[zi]:kt,[kt]:zi,[wi]:wi},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:a0,fragmentShader:n0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Zt;_.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ve(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let p=this.type;this.render=function(w,P,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Xh&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ta);let E=e.getRenderTarget(),O=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Ai),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let j=p!==this.type;j&&P.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(G=>G.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,G=w.length;B<G;B++){let q=w[B],z=q.shadow;if(z===void 0){je("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);let ne=z.getFrameExtents();a.multiply(ne),n.copy(z.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/ne.x),a.x=n.x*ne.x,z.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/ne.y),a.y=n.y*ne.y,z.mapSize.y=n.y));let re=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=re,z.map===null||j===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Yr){if(q.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new vi(a.x,a.y,{format:tr,type:Ci,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Dr(a.x,a.y,mi),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Pi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nt,z.map.depthTexture.magFilter=Nt}else q.isPointLight?(z.map=new Jl(a.x),z.map.depthTexture=new du(a.x,fi)):(z.map=new vi(a.x,a.y),z.map.depthTexture=new Dr(a.x,a.y,fi)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Pi,this.type===Ta?(z.map.depthTexture.compareFunction=re?vs:gs,z.map.depthTexture.minFilter=Dt,z.map.depthTexture.magFilter=Dt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nt,z.map.depthTexture.magFilter=Nt);z.camera.updateProjectionMatrix()}let se=z.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<se;Se++){if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,Se),e.clear();else{Se===0&&(e.setRenderTarget(z.map),e.clear());let Pe=z.getViewport(Se);s.set(n.x*Pe.x,n.y*Pe.y,n.x*Pe.z,n.y*Pe.w),V.viewport(s)}if(q.isPointLight){let Pe=z.camera,Ze=z.matrix,et=q.distance||Pe.far;et!==Pe.far&&(Pe.far=et,Pe.updateProjectionMatrix()),Sa.setFromMatrixPosition(q.matrixWorld),Pe.position.copy(Sa),co.copy(Pe.position),co.add(s0[Se]),Pe.up.copy(o0[Se]),Pe.lookAt(co),Pe.updateMatrixWorld(),Ze.makeTranslation(-Sa.x,-Sa.y,-Sa.z),vh.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(vh,Pe.coordinateSystem,Pe.reversedDepth)}else z.updateMatrices(q);r=z.getFrustum(),M(P,v,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Yr&&A(z,v),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(E,O,R)};function A(w,P){let v=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vi(a.x,a.y,{format:tr,type:Ci})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(P,null,v,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(P,null,v,f,x,null)}function b(w,P,v,E){let O=null,R=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)O=R;else if(O=v.isPointLight===!0?l:o,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let V=O.uuid,j=P.uuid,B=h[V];B===void 0&&(B={},h[V]=B);let G=B[j];G===void 0&&(G=O.clone(),B[j]=G,P.addEventListener("dispose",T)),O=G}if(O.visible=P.visible,O.wireframe=P.wireframe,E===Yr?O.side=P.shadowSide!==null?P.shadowSide:P.side:O.side=P.shadowSide!==null?P.shadowSide:d[P.side],O.alphaMap=P.alphaMap,O.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,O.map=P.map,O.clipShadows=P.clipShadows,O.clippingPlanes=P.clippingPlanes,O.clipIntersection=P.clipIntersection,O.displacementMap=P.displacementMap,O.displacementScale=P.displacementScale,O.displacementBias=P.displacementBias,O.wireframeLinewidth=P.wireframeLinewidth,O.linewidth=P.linewidth,v.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let V=e.properties.get(O);V.light=v}return O}function M(w,P,v,E,O){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Yr)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let V=t.update(w),j=w.material;if(Array.isArray(j)){let B=V.groups;for(let G=0,q=B.length;G<q;G++){let z=B[G],ne=j[z.materialIndex];if(ne&&ne.visible){let re=b(w,ne,E,O);w.onBeforeShadow(e,w,P,v,V,re,z),e.renderBufferDirect(v,null,V,re,w,z),w.onAfterShadow(e,w,P,v,V,re,z)}}}else if(j.visible){let B=b(w,j,E,O);w.onBeforeShadow(e,w,P,v,V,B,null),e.renderBufferDirect(v,null,V,B,w,null),w.onAfterShadow(e,w,P,v,V,B,null)}}let R=w.children;for(let V=0,j=R.length;V<j;V++)M(R[V],P,v,E,O)}function T(w){w.target.removeEventListener("dispose",T);for(let P in h){let v=h[P],E=w.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function h0(e,t){function i(){let U=!1,Q=new Et,ae=null,Ae=new Et(0,0,0,0);return{setMask:function(Ie){ae!==Ie&&!U&&(e.colorMask(Ie,Ie,Ie,Ie),ae=Ie)},setLocked:function(Ie){U=Ie},setClear:function(Ie,Z,ue,ye,ht){ht===!0&&(Ie*=ye,Z*=ye,ue*=ye),Q.set(Ie,Z,ue,ye),Ae.equals(Q)===!1&&(e.clearColor(Ie,Z,ue,ye),Ae.copy(Q))},reset:function(){U=!1,ae=null,Ae.set(-1,0,0,0)}}}function r(){let U=!1,Q=!1,ae=null,Ae=null,Ie=null;return{setReversed:function(Z){if(Q!==Z){let ue=t.get("EXT_clip_control");Z?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),Q=Z;let ye=Ie;Ie=null,this.setClear(ye)}},getReversed:function(){return Q},setTest:function(Z){Z?he(e.DEPTH_TEST):Ne(e.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!U&&(e.depthMask(Z),ae=Z)},setFunc:function(Z){if(Q&&(Z=bc[Z]),Ae!==Z){switch(Z){case xn:e.depthFunc(e.NEVER);break;case Mn:e.depthFunc(e.ALWAYS);break;case Sn:e.depthFunc(e.LESS);break;case vr:e.depthFunc(e.LEQUAL);break;case yn:e.depthFunc(e.EQUAL);break;case En:e.depthFunc(e.GEQUAL);break;case Tn:e.depthFunc(e.GREATER);break;case bn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ae=Z}},setLocked:function(Z){U=Z},setClear:function(Z){Ie!==Z&&(Ie=Z,Q&&(Z=1-Z),e.clearDepth(Z))},reset:function(){U=!1,ae=null,Ae=null,Ie=null,Q=!1}}}function a(){let U=!1,Q=null,ae=null,Ae=null,Ie=null,Z=null,ue=null,ye=null,ht=null;return{setTest:function(We){U||(We?he(e.STENCIL_TEST):Ne(e.STENCIL_TEST))},setMask:function(We){Q!==We&&!U&&(e.stencilMask(We),Q=We)},setFunc:function(We,it,St){(ae!==We||Ae!==it||Ie!==St)&&(e.stencilFunc(We,it,St),ae=We,Ae=it,Ie=St)},setOp:function(We,it,St){(Z!==We||ue!==it||ye!==St)&&(e.stencilOp(We,it,St),Z=We,ue=it,ye=St)},setLocked:function(We){U=We},setClear:function(We){ht!==We&&(e.clearStencil(We),ht=We)},reset:function(){U=!1,Q=null,ae=null,Ae=null,Ie=null,Z=null,ue=null,ye=null,ht=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},d={},u={},f=new WeakMap,_=[],x=null,m=!1,p=null,A=null,b=null,M=null,T=null,w=null,P=null,v=new at(0,0,0),E=0,O=!1,R=null,V=null,j=null,B=null,G=null,q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),z=ne>=1):re.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),z=ne>=2);let se=null,Se={},Pe=e.getParameter(e.SCISSOR_BOX),Ze=e.getParameter(e.VIEWPORT),et=new Et().fromArray(Pe),K=new Et().fromArray(Ze);function le(U,Q,ae,Ae){let Ie=new Uint8Array(4),Z=e.createTexture();e.bindTexture(U,Z),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ue=0;ue<ae;ue++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(Q,0,e.RGBA,1,1,Ae,0,e.RGBA,e.UNSIGNED_BYTE,Ie):e.texImage2D(Q+ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ie);return Z}let Ee={};Ee[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),Ee[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ee[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(e.DEPTH_TEST),s.setFunc(vr),pe(!1),_e(mo),he(e.CULL_FACE),J(Ai);function he(U){c[U]!==!0&&(e.enable(U),c[U]=!0)}function Ne(U){c[U]!==!1&&(e.disable(U),c[U]=!1)}function He(U,Q){return u[U]!==Q?(e.bindFramebuffer(U,Q),u[U]=Q,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Q),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Q),!0):!1}function fe(U,Q){let ae=_,Ae=!1;if(U){ae=f.get(Q),ae===void 0&&(ae=[],f.set(Q,ae));let Ie=U.textures;if(ae.length!==Ie.length||ae[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,ue=Ie.length;Z<ue;Z++)ae[Z]=e.COLOR_ATTACHMENT0+Z;ae.length=Ie.length,Ae=!0}}else ae[0]!==e.BACK&&(ae[0]=e.BACK,Ae=!0);Ae&&e.drawBuffers(ae)}function me(U){return x!==U?(e.useProgram(U),x=U,!0):!1}let W={[Ki]:e.FUNC_ADD,[qh]:e.FUNC_SUBTRACT,[Yh]:e.FUNC_REVERSE_SUBTRACT};W[Zh]=e.MIN,W[Jh]=e.MAX;let $={[Kh]:e.ZERO,[Qh]:e.ONE,[$h]:e.SRC_COLOR,[vn]:e.SRC_ALPHA,[nc]:e.SRC_ALPHA_SATURATE,[rc]:e.DST_COLOR,[tc]:e.DST_ALPHA,[ec]:e.ONE_MINUS_SRC_COLOR,[_n]:e.ONE_MINUS_SRC_ALPHA,[ac]:e.ONE_MINUS_DST_COLOR,[ic]:e.ONE_MINUS_DST_ALPHA,[sc]:e.CONSTANT_COLOR,[oc]:e.ONE_MINUS_CONSTANT_COLOR,[lc]:e.CONSTANT_ALPHA,[hc]:e.ONE_MINUS_CONSTANT_ALPHA};function J(U,Q,ae,Ae,Ie,Z,ue,ye,ht,We){if(U===Ai){m===!0&&(Ne(e.BLEND),m=!1);return}if(m===!1&&(he(e.BLEND),m=!0),U!==jh){if(U!==p||We!==O){if((A!==Ki||T!==Ki)&&(e.blendEquation(e.FUNC_ADD),A=Ki,T=Ki),We)switch(U){case gr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case go:e.blendFunc(e.ONE,e.ONE);break;case vo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _o:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ye("WebGLState: Invalid blending: ",U);break}else switch(U){case gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case go:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case vo:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _o:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",U);break}b=null,M=null,w=null,P=null,v.set(0,0,0),E=0,p=U,O=We}return}Ie=Ie||Q,Z=Z||ae,ue=ue||Ae,(Q!==A||Ie!==T)&&(e.blendEquationSeparate(W[Q],W[Ie]),A=Q,T=Ie),(ae!==b||Ae!==M||Z!==w||ue!==P)&&(e.blendFuncSeparate($[ae],$[Ae],$[Z],$[ue]),b=ae,M=Ae,w=Z,P=ue),(ye.equals(v)===!1||ht!==E)&&(e.blendColor(ye.r,ye.g,ye.b,ht),v.copy(ye),E=ht),p=U,O=!1}function ce(U,Q){U.side===wi?Ne(e.CULL_FACE):he(e.CULL_FACE);let ae=U.side===kt;Q&&(ae=!ae),pe(ae),U.blending===gr&&U.transparent===!1?J(Ai):J(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),n.setMask(U.colorWrite);let Ae=U.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),De(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):Ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(U){R!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),R=U)}function _e(U){U!==kh?(he(e.CULL_FACE),U!==V&&(U===mo?e.cullFace(e.BACK):U===Wh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ne(e.CULL_FACE),V=U}function Te(U){U!==j&&(z&&e.lineWidth(U),j=U)}function De(U,Q,ae){U?(he(e.POLYGON_OFFSET_FILL),(B!==Q||G!==ae)&&(B=Q,G=ae,s.getReversed()&&(Q=-Q),e.polygonOffset(Q,ae))):Ne(e.POLYGON_OFFSET_FILL)}function Oe(U){U?he(e.SCISSOR_TEST):Ne(e.SCISSOR_TEST)}function L(U){U===void 0&&(U=e.TEXTURE0+q-1),se!==U&&(e.activeTexture(U),se=U)}function Ke(U,Q,ae){ae===void 0&&(se===null?ae=e.TEXTURE0+q-1:ae=se);let Ae=Se[ae];Ae===void 0&&(Ae={type:void 0,texture:void 0},Se[ae]=Ae),(Ae.type!==U||Ae.texture!==Q)&&(se!==ae&&(e.activeTexture(ae),se=ae),e.bindTexture(U,Q||Ee[U]),Ae.type=U,Ae.texture=Q)}function ke(){let U=Se[se];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Fe(){try{e.compressedTexImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function y(){try{e.compressedTexImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function g(){try{e.texSubImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function C(){try{e.texSubImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function ee(){try{e.texStorage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function de(){try{e.texStorage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function I(){try{e.texImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function ie(){try{e.texImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function oe(U){return d[U]!==void 0?d[U]:e.getParameter(U)}function ge(U,Q){d[U]!==Q&&(e.pixelStorei(U,Q),d[U]=Q)}function te(U){et.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function Re(U){K.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function Le(U,Q){let ae=h.get(Q);ae===void 0&&(ae=new WeakMap,h.set(Q,ae));let Ae=ae.get(U);Ae===void 0&&(Ae=e.getUniformBlockIndex(Q,U.name),ae.set(U,Ae))}function Ge(U,Q){let ae=h.get(Q).get(U);l.get(Q)!==ae&&(e.uniformBlockBinding(Q,ae,U.__bindingPointIndex),l.set(Q,ae))}function Je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},se=null,Se={},u={},f=new WeakMap,_=[],x=null,m=!1,p=null,A=null,b=null,M=null,T=null,w=null,P=null,v=new at(0,0,0),E=0,O=!1,R=null,V=null,j=null,B=null,G=null,et.set(0,0,e.canvas.width,e.canvas.height),K.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:he,disable:Ne,bindFramebuffer:He,drawBuffers:fe,useProgram:me,setBlending:J,setMaterial:ce,setFlipSided:pe,setCullFace:_e,setLineWidth:Te,setPolygonOffset:De,setScissorTest:Oe,activeTexture:L,bindTexture:Ke,unbindTexture:ke,compressedTexImage2D:Fe,compressedTexImage3D:y,texImage2D:I,texImage3D:ie,pixelStorei:ge,getParameter:oe,updateUBOMapping:Le,uniformBlockBinding:Ge,texStorage2D:ee,texStorage3D:de,texSubImage2D:g,texSubImage3D:C,compressedTexSubImage2D:F,compressedTexSubImage3D:Y,scissor:te,viewport:Re,reset:Je}}function c0(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Me,c=new WeakMap,d=new Set,u,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,g){return _?new OffscreenCanvas(y,g):Oa("canvas")}function m(y,g,C){let F=1,Y=Fe(y);if((Y.width>C||Y.height>C)&&(F=C/Math.max(Y.width,Y.height)),F<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let ee=Math.floor(F*Y.width),de=Math.floor(F*Y.height);u===void 0&&(u=x(ee,de));let I=g?x(ee,de):u;return I.width=ee,I.height=de,I.getContext("2d").drawImage(y,0,0,ee,de),je("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ee+"x"+de+")."),I}else return"data"in y&&je("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),y;return y}function p(y){return y.generateMipmaps}function A(y){e.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?e.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(y,g,C,F,Y,ee=!1){if(y!==null){if(e[y]!==void 0)return e[y];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let de;F&&(de=t.get("EXT_texture_norm16"),de||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=g;if(g===e.RED&&(C===e.FLOAT&&(I=e.R32F),C===e.HALF_FLOAT&&(I=e.R16F),C===e.UNSIGNED_BYTE&&(I=e.R8),C===e.UNSIGNED_SHORT&&de&&(I=de.R16_EXT),C===e.SHORT&&de&&(I=de.R16_SNORM_EXT)),g===e.RED_INTEGER&&(C===e.UNSIGNED_BYTE&&(I=e.R8UI),C===e.UNSIGNED_SHORT&&(I=e.R16UI),C===e.UNSIGNED_INT&&(I=e.R32UI),C===e.BYTE&&(I=e.R8I),C===e.SHORT&&(I=e.R16I),C===e.INT&&(I=e.R32I)),g===e.RG&&(C===e.FLOAT&&(I=e.RG32F),C===e.HALF_FLOAT&&(I=e.RG16F),C===e.UNSIGNED_BYTE&&(I=e.RG8),C===e.UNSIGNED_SHORT&&de&&(I=de.RG16_EXT),C===e.SHORT&&de&&(I=de.RG16_SNORM_EXT)),g===e.RG_INTEGER&&(C===e.UNSIGNED_BYTE&&(I=e.RG8UI),C===e.UNSIGNED_SHORT&&(I=e.RG16UI),C===e.UNSIGNED_INT&&(I=e.RG32UI),C===e.BYTE&&(I=e.RG8I),C===e.SHORT&&(I=e.RG16I),C===e.INT&&(I=e.RG32I)),g===e.RGB_INTEGER&&(C===e.UNSIGNED_BYTE&&(I=e.RGB8UI),C===e.UNSIGNED_SHORT&&(I=e.RGB16UI),C===e.UNSIGNED_INT&&(I=e.RGB32UI),C===e.BYTE&&(I=e.RGB8I),C===e.SHORT&&(I=e.RGB16I),C===e.INT&&(I=e.RGB32I)),g===e.RGBA_INTEGER&&(C===e.UNSIGNED_BYTE&&(I=e.RGBA8UI),C===e.UNSIGNED_SHORT&&(I=e.RGBA16UI),C===e.UNSIGNED_INT&&(I=e.RGBA32UI),C===e.BYTE&&(I=e.RGBA8I),C===e.SHORT&&(I=e.RGBA16I),C===e.INT&&(I=e.RGBA32I)),g===e.RGB&&(C===e.UNSIGNED_SHORT&&de&&(I=de.RGB16_EXT),C===e.SHORT&&de&&(I=de.RGB16_SNORM_EXT),C===e.UNSIGNED_INT_5_9_9_9_REV&&(I=e.RGB9_E5),C===e.UNSIGNED_INT_10F_11F_11F_REV&&(I=e.R11F_G11F_B10F)),g===e.RGBA){let ie=ee?Da:lt.getTransfer(Y);C===e.FLOAT&&(I=e.RGBA32F),C===e.HALF_FLOAT&&(I=e.RGBA16F),C===e.UNSIGNED_BYTE&&(I=ie===ut?e.SRGB8_ALPHA8:e.RGBA8),C===e.UNSIGNED_SHORT&&de&&(I=de.RGBA16_EXT),C===e.SHORT&&de&&(I=de.RGBA16_SNORM_EXT),C===e.UNSIGNED_SHORT_4_4_4_4&&(I=e.RGBA4),C===e.UNSIGNED_SHORT_5_5_5_1&&(I=e.RGB5_A1)}return(I===e.R16F||I===e.R32F||I===e.RG16F||I===e.RG32F||I===e.RGBA16F||I===e.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function T(y,g){let C;return y?g===null||g===fi||g===Jr?C=e.DEPTH24_STENCIL8:g===mi?C=e.DEPTH32F_STENCIL8:g===Zr&&(C=e.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===fi||g===Jr?C=e.DEPTH_COMPONENT24:g===mi?C=e.DEPTH_COMPONENT32F:g===Zr&&(C=e.DEPTH_COMPONENT16),C}function w(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Nt&&y.minFilter!==Dt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function P(y){let g=y.target;g.removeEventListener("dispose",P),E(g),g.isVideoTexture&&c.delete(g),g.isHTMLTexture&&d.delete(g)}function v(y){let g=y.target;g.removeEventListener("dispose",v),R(g)}function E(y){let g=r.get(y);if(g.__webglInit===void 0)return;let C=y.source,F=f.get(C);if(F){let Y=F[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&O(y),Object.keys(F).length===0&&f.delete(C)}r.remove(y)}function O(y){let g=r.get(y);e.deleteTexture(g.__webglTexture);let C=y.source,F=f.get(C);delete F[g.__cacheKey],s.memory.textures--}function R(y){let g=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(g.__webglFramebuffer[F]))for(let Y=0;Y<g.__webglFramebuffer[F].length;Y++)e.deleteFramebuffer(g.__webglFramebuffer[F][Y]);else e.deleteFramebuffer(g.__webglFramebuffer[F]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[F])}else{if(Array.isArray(g.__webglFramebuffer))for(let F=0;F<g.__webglFramebuffer.length;F++)e.deleteFramebuffer(g.__webglFramebuffer[F]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let F=0;F<g.__webglColorRenderbuffer.length;F++)g.__webglColorRenderbuffer[F]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[F]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let C=y.textures;for(let F=0,Y=C.length;F<Y;F++){let ee=r.get(C[F]);ee.__webglTexture&&(e.deleteTexture(ee.__webglTexture),s.memory.textures--),r.remove(C[F])}r.remove(y)}let V=0;function j(){V=0}function B(){return V}function G(y){V=y}function q(){let y=V;return y>=a.maxTextures&&je("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+a.maxTextures),V+=1,y}function z(y){let g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function ne(y,g){let C=r.get(y);if(y.isVideoTexture&&Ke(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&C.__version!==y.version){let F=y.image;if(F===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(C,y,g);return}}else y.isExternalTexture&&(C.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,C.__webglTexture,e.TEXTURE0+g)}function re(y,g){let C=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&C.__version!==y.version){Ne(C,y,g);return}else y.isExternalTexture&&(C.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,C.__webglTexture,e.TEXTURE0+g)}function se(y,g){let C=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&C.__version!==y.version){Ne(C,y,g);return}i.bindTexture(e.TEXTURE_3D,C.__webglTexture,e.TEXTURE0+g)}function Se(y,g){let C=r.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&C.__version!==y.version){He(C,y,g);return}i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+g)}let Pe={[Rn]:e.REPEAT,[Ri]:e.CLAMP_TO_EDGE,[Cn]:e.MIRRORED_REPEAT},Ze={[Nt]:e.NEAREST,[dc]:e.NEAREST_MIPMAP_NEAREST,[wa]:e.NEAREST_MIPMAP_LINEAR,[Dt]:e.LINEAR,[Pn]:e.LINEAR_MIPMAP_NEAREST,[$i]:e.LINEAR_MIPMAP_LINEAR},et={[mc]:e.NEVER,[Mc]:e.ALWAYS,[gc]:e.LESS,[gs]:e.LEQUAL,[vc]:e.EQUAL,[vs]:e.GEQUAL,[_c]:e.GREATER,[xc]:e.NOTEQUAL};function K(y,g){if(g.type===mi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Dt||g.magFilter===Pn||g.magFilter===wa||g.magFilter===$i||g.minFilter===Dt||g.minFilter===Pn||g.minFilter===wa||g.minFilter===$i)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(y,e.TEXTURE_WRAP_S,Pe[g.wrapS]),e.texParameteri(y,e.TEXTURE_WRAP_T,Pe[g.wrapT]),(y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY)&&e.texParameteri(y,e.TEXTURE_WRAP_R,Pe[g.wrapR]),e.texParameteri(y,e.TEXTURE_MAG_FILTER,Ze[g.magFilter]),e.texParameteri(y,e.TEXTURE_MIN_FILTER,Ze[g.minFilter]),g.compareFunction&&(e.texParameteri(y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(y,e.TEXTURE_COMPARE_FUNC,et[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nt||g.minFilter!==wa&&g.minFilter!==$i||g.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");e.texParameterf(y,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function le(y,g){let C=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",P));let F=g.source,Y=f.get(F);Y===void 0&&(Y={},f.set(F,Y));let ee=z(g);if(ee!==y.__cacheKey){Y[ee]===void 0&&(Y[ee]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,C=!0),Y[ee].usedTimes++;let de=Y[y.__cacheKey];de!==void 0&&(Y[y.__cacheKey].usedTimes--,de.usedTimes===0&&O(g)),y.__cacheKey=ee,y.__webglTexture=Y[ee].texture}return C}function Ee(y,g,C){return Math.floor(Math.floor(y/C)/g)}function he(y,g,C,F){let Y=y.updateRanges;if(Y.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,C,F,g.data);else{Y.sort((oe,ge)=>oe.start-ge.start);let ee=0;for(let oe=1;oe<Y.length;oe++){let ge=Y[ee],te=Y[oe],Re=ge.start+ge.count,Le=Ee(te.start,g.width,4),Ge=Ee(ge.start,g.width,4);te.start<=Re+1&&Le===Ge&&Ee(te.start+te.count-1,g.width,4)===Le?ge.count=Math.max(ge.count,te.start+te.count-ge.start):(++ee,Y[ee]=te)}Y.length=ee+1;let de=i.getParameter(e.UNPACK_ROW_LENGTH),I=i.getParameter(e.UNPACK_SKIP_PIXELS),ie=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let oe=0,ge=Y.length;oe<ge;oe++){let te=Y[oe],Re=Math.floor(te.start/4),Le=Math.ceil(te.count/4),Ge=Re%g.width,Je=Math.floor(Re/g.width),U=Le;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(e.UNPACK_SKIP_ROWS,Je),i.texSubImage2D(e.TEXTURE_2D,0,Ge,Je,U,1,C,F,g.data)}y.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,de),i.pixelStorei(e.UNPACK_SKIP_PIXELS,I),i.pixelStorei(e.UNPACK_SKIP_ROWS,ie)}}function Ne(y,g,C){let F=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(F=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(F=e.TEXTURE_3D);let Y=le(y,g),ee=g.source;i.bindTexture(F,y.__webglTexture,e.TEXTURE0+C);let de=r.get(ee);if(ee.version!==de.__version||Y===!0){if(i.activeTexture(e.TEXTURE0+C),!(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)){let Q=lt.getPrimaries(lt.workingColorSpace),ae=g.colorSpace===Hi?null:lt.getPrimaries(g.colorSpace),Ae=g.colorSpace===Hi||Q===ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}i.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment);let I=m(g.image,!1,a.maxTextureSize);I=ke(g,I);let ie=n.convert(g.format,g.colorSpace),oe=n.convert(g.type),ge=M(g.internalFormat,ie,oe,g.normalized,g.colorSpace,g.isVideoTexture);K(F,g);let te,Re=g.mipmaps,Le=g.isVideoTexture!==!0,Ge=de.__version===void 0||Y===!0,Je=ee.dataReady,U=w(g,I);if(g.isDepthTexture)ge=T(g.format===er,g.type),Ge&&(Le?i.texStorage2D(e.TEXTURE_2D,1,ge,I.width,I.height):i.texImage2D(e.TEXTURE_2D,0,ge,I.width,I.height,0,ie,oe,null));else if(g.isDataTexture)if(Re.length>0){Le&&Ge&&i.texStorage2D(e.TEXTURE_2D,U,ge,Re[0].width,Re[0].height);for(let Q=0,ae=Re.length;Q<ae;Q++)te=Re[Q],Le?Je&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,te.width,te.height,ie,oe,te.data):i.texImage2D(e.TEXTURE_2D,Q,ge,te.width,te.height,0,ie,oe,te.data);g.generateMipmaps=!1}else Le?(Ge&&i.texStorage2D(e.TEXTURE_2D,U,ge,I.width,I.height),Je&&he(g,I,ie,oe)):i.texImage2D(e.TEXTURE_2D,0,ge,I.width,I.height,0,ie,oe,I.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Le&&Ge&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,ge,Re[0].width,Re[0].height,I.depth);for(let Q=0,ae=Re.length;Q<ae;Q++)if(te=Re[Q],g.format!==oi)if(ie!==null)if(Le){if(Je)if(g.layerUpdates.size>0){let Ae=Vl(te.width,te.height,g.format,g.type);for(let Ie of g.layerUpdates){let Z=te.data.subarray(Ie*Ae/te.data.BYTES_PER_ELEMENT,(Ie+1)*Ae/te.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,Ie,te.width,te.height,1,ie,Z)}g.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,te.width,te.height,I.depth,ie,te.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,ge,te.width,te.height,I.depth,0,te.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?Je&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,te.width,te.height,I.depth,ie,oe,te.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Q,ge,te.width,te.height,I.depth,0,ie,oe,te.data)}else{Le&&Ge&&i.texStorage2D(e.TEXTURE_2D,U,ge,Re[0].width,Re[0].height);for(let Q=0,ae=Re.length;Q<ae;Q++)te=Re[Q],g.format!==oi?ie!==null?Le?Je&&i.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,te.width,te.height,ie,te.data):i.compressedTexImage2D(e.TEXTURE_2D,Q,ge,te.width,te.height,0,te.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?Je&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,te.width,te.height,ie,oe,te.data):i.texImage2D(e.TEXTURE_2D,Q,ge,te.width,te.height,0,ie,oe,te.data)}else if(g.isDataArrayTexture)if(Le){if(Ge&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,ge,I.width,I.height,I.depth),Je)if(g.layerUpdates.size>0){let Q=Vl(I.width,I.height,g.format,g.type);for(let ae of g.layerUpdates){let Ae=I.data.subarray(ae*Q/I.data.BYTES_PER_ELEMENT,(ae+1)*Q/I.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ae,I.width,I.height,1,ie,oe,Ae)}g.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,ie,oe,I.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ge,I.width,I.height,I.depth,0,ie,oe,I.data);else if(g.isData3DTexture)Le?(Ge&&i.texStorage3D(e.TEXTURE_3D,U,ge,I.width,I.height,I.depth),Je&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,ie,oe,I.data)):i.texImage3D(e.TEXTURE_3D,0,ge,I.width,I.height,I.depth,0,ie,oe,I.data);else if(g.isFramebufferTexture){if(Ge)if(Le)i.texStorage2D(e.TEXTURE_2D,U,ge,I.width,I.height);else{let Q=I.width,ae=I.height;for(let Ae=0;Ae<U;Ae++)i.texImage2D(e.TEXTURE_2D,Ae,ge,Q,ae,0,ie,oe,null),Q>>=1,ae>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in e){let Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),I.parentNode!==Q){Q.appendChild(I),d.add(g),Q.onpaint=ae=>{let Ae=ae.changedElements;for(let Ie of d)Ae.includes(Ie.image)&&(Ie.needsUpdate=!0)},Q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,I);else{let ae=e.RGBA,Ae=e.RGBA,Ie=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ae,Ae,Ie,I)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Le&&Ge){let Q=Fe(Re[0]);i.texStorage2D(e.TEXTURE_2D,U,ge,Q.width,Q.height)}for(let Q=0,ae=Re.length;Q<ae;Q++)te=Re[Q],Le?Je&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,ie,oe,te):i.texImage2D(e.TEXTURE_2D,Q,ge,ie,oe,te);g.generateMipmaps=!1}else if(Le){if(Ge){let Q=Fe(I);i.texStorage2D(e.TEXTURE_2D,U,ge,Q.width,Q.height)}Je&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,oe,I)}else i.texImage2D(e.TEXTURE_2D,0,ge,ie,oe,I);p(g)&&A(F),de.__version=ee.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function He(y,g,C){if(g.image.length!==6)return;let F=le(y,g),Y=g.source;i.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+C);let ee=r.get(Y);if(Y.version!==ee.__version||F===!0){i.activeTexture(e.TEXTURE0+C);let de=lt.getPrimaries(lt.workingColorSpace),I=g.colorSpace===Hi?null:lt.getPrimaries(g.colorSpace),ie=g.colorSpace===Hi||de===I?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let oe=g.isCompressedTexture||g.image[0].isCompressedTexture,ge=g.image[0]&&g.image[0].isDataTexture,te=[];for(let Z=0;Z<6;Z++)!oe&&!ge?te[Z]=m(g.image[Z],!0,a.maxCubemapSize):te[Z]=ge?g.image[Z].image:g.image[Z],te[Z]=ke(g,te[Z]);let Re=te[0],Le=n.convert(g.format,g.colorSpace),Ge=n.convert(g.type),Je=M(g.internalFormat,Le,Ge,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,Q=ee.__version===void 0||F===!0,ae=Y.dataReady,Ae=w(g,Re);K(e.TEXTURE_CUBE_MAP,g);let Ie;if(oe){U&&Q&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,Je,Re.width,Re.height);for(let Z=0;Z<6;Z++){Ie=te[Z].mipmaps;for(let ue=0;ue<Ie.length;ue++){let ye=Ie[ue];g.format!==oi?Le!==null?U?ae&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,ye.width,ye.height,Le,ye.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Je,ye.width,ye.height,0,ye.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,ye.width,ye.height,Le,Ge,ye.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Je,ye.width,ye.height,0,Le,Ge,ye.data)}}}else{if(Ie=g.mipmaps,U&&Q){Ie.length>0&&Ae++;let Z=Fe(te[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,Je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ge){U?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,te[Z].width,te[Z].height,Le,Ge,te[Z].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,te[Z].width,te[Z].height,0,Le,Ge,te[Z].data);for(let ue=0;ue<Ie.length;ue++){let ye=Ie[ue].image[Z].image;U?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,ye.width,ye.height,Le,Ge,ye.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Je,ye.width,ye.height,0,Le,Ge,ye.data)}}else{U?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,Ge,te[Z]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,Le,Ge,te[Z]);for(let ue=0;ue<Ie.length;ue++){let ye=Ie[ue];U?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Le,Ge,ye.image[Z]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Je,Le,Ge,ye.image[Z])}}}p(g)&&A(e.TEXTURE_CUBE_MAP),ee.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function fe(y,g,C,F,Y,ee){let de=n.convert(C.format,C.colorSpace),I=n.convert(C.type),ie=M(C.internalFormat,de,I,C.normalized,C.colorSpace),oe=r.get(g),ge=r.get(C);if(ge.__renderTarget=g,!oe.__hasExternalTextures){let te=Math.max(1,g.width>>ee),Re=Math.max(1,g.height>>ee);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?i.texImage3D(Y,ee,ie,te,Re,g.depth,0,de,I,null):i.texImage2D(Y,ee,ie,te,Re,0,de,I,null)}i.bindFramebuffer(e.FRAMEBUFFER,y),L(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,F,Y,ge.__webglTexture,0,Oe(g)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,F,Y,ge.__webglTexture,ee),i.bindFramebuffer(e.FRAMEBUFFER,null)}function me(y,g,C){if(e.bindRenderbuffer(e.RENDERBUFFER,y),g.depthBuffer){let F=g.depthTexture,Y=F&&F.isDepthTexture?F.type:null,ee=T(g.stencilBuffer,Y),de=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(g),ee,g.width,g.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(g),ee,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,ee,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,y)}else{let F=g.textures;for(let Y=0;Y<F.length;Y++){let ee=F[Y],de=n.convert(ee.format,ee.colorSpace),I=n.convert(ee.type),ie=M(ee.internalFormat,de,I,ee.normalized,ee.colorSpace);L(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(g),ie,g.width,g.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(g),ie,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,ie,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function W(y,g,C){let F=g.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=r.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),F){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),K(e.TEXTURE_CUBE_MAP,g.depthTexture);let oe=n.convert(g.depthTexture.format),ge=n.convert(g.depthTexture.type),te;g.depthTexture.format===Pi?te=e.DEPTH_COMPONENT24:g.depthTexture.format===er&&(te=e.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,te,g.width,g.height,0,oe,ge,null)}}else ne(g.depthTexture,0);let ee=Y.__webglTexture,de=Oe(g),I=F?e.TEXTURE_CUBE_MAP_POSITIVE_X+C:e.TEXTURE_2D,ie=g.depthTexture.format===er?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===Pi)L(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,I,ee,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,ie,I,ee,0);else if(g.depthTexture.format===er)L(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,I,ee,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,ie,I,ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(y){let g=r.get(y),C=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){let F=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),F){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,F.removeEventListener("dispose",Y)};F.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=F}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(C)for(let F=0;F<6;F++)W(g.__webglFramebuffer[F],y,F);else{let F=y.texture.mipmaps;F&&F.length>0?W(g.__webglFramebuffer[0],y,0):W(g.__webglFramebuffer,y,0)}else if(C){g.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(i.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[F]),g.__webglDepthbuffer[F]===void 0)g.__webglDepthbuffer[F]=e.createRenderbuffer(),me(g.__webglDepthbuffer[F],y,!1);else{let Y=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=g.__webglDepthbuffer[F];e.bindRenderbuffer(e.RENDERBUFFER,ee),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,ee)}}else{let F=y.texture.mipmaps;if(F&&F.length>0?i.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),me(g.__webglDepthbuffer,y,!1);else{let Y=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ee),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,ee)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function J(y,g,C){let F=r.get(y);g!==void 0&&fe(F.__webglFramebuffer,y,y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),C!==void 0&&$(y)}function ce(y){let g=y.texture,C=r.get(y),F=r.get(g);y.addEventListener("dispose",v);let Y=y.textures,ee=y.isWebGLCubeRenderTarget===!0,de=Y.length>1;if(de||(F.__webglTexture===void 0&&(F.__webglTexture=e.createTexture()),F.__version=g.version,s.memory.textures++),ee){C.__webglFramebuffer=[];for(let I=0;I<6;I++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[I]=[];for(let ie=0;ie<g.mipmaps.length;ie++)C.__webglFramebuffer[I][ie]=e.createFramebuffer()}else C.__webglFramebuffer[I]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let I=0;I<g.mipmaps.length;I++)C.__webglFramebuffer[I]=e.createFramebuffer()}else C.__webglFramebuffer=e.createFramebuffer();if(de)for(let I=0,ie=Y.length;I<ie;I++){let oe=r.get(Y[I]);oe.__webglTexture===void 0&&(oe.__webglTexture=e.createTexture(),s.memory.textures++)}if(y.samples>0&&L(y)===!1){C.__webglMultisampledFramebuffer=e.createFramebuffer(),C.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let I=0;I<Y.length;I++){let ie=Y[I];C.__webglColorRenderbuffer[I]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,C.__webglColorRenderbuffer[I]);let oe=n.convert(ie.format,ie.colorSpace),ge=n.convert(ie.type),te=M(ie.internalFormat,oe,ge,ie.normalized,ie.colorSpace,y.isXRRenderTarget===!0),Re=Oe(y);e.renderbufferStorageMultisample(e.RENDERBUFFER,Re,te,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+I,e.RENDERBUFFER,C.__webglColorRenderbuffer[I])}e.bindRenderbuffer(e.RENDERBUFFER,null),y.depthBuffer&&(C.__webglDepthRenderbuffer=e.createRenderbuffer(),me(C.__webglDepthRenderbuffer,y,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ee){i.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture),K(e.TEXTURE_CUBE_MAP,g);for(let I=0;I<6;I++)if(g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)fe(C.__webglFramebuffer[I][ie],y,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I,ie);else fe(C.__webglFramebuffer[I],y,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);p(g)&&A(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(de){for(let I=0,ie=Y.length;I<ie;I++){let oe=Y[I],ge=r.get(oe),te=e.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(te=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(te,ge.__webglTexture),K(te,oe),fe(C.__webglFramebuffer,y,oe,e.COLOR_ATTACHMENT0+I,te,0),p(oe)&&A(te)}i.unbindTexture()}else{let I=e.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(I=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(I,F.__webglTexture),K(I,g),g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)fe(C.__webglFramebuffer[ie],y,g,e.COLOR_ATTACHMENT0,I,ie);else fe(C.__webglFramebuffer,y,g,e.COLOR_ATTACHMENT0,I,0);p(g)&&A(I),i.unbindTexture()}y.depthBuffer&&$(y)}function pe(y){let g=y.textures;for(let C=0,F=g.length;C<F;C++){let Y=g[C];if(p(Y)){let ee=b(y),de=r.get(Y).__webglTexture;i.bindTexture(ee,de),A(ee),i.unbindTexture()}}}let _e=[],Te=[];function De(y){if(y.samples>0){if(L(y)===!1){let g=y.textures,C=y.width,F=y.height,Y=e.COLOR_BUFFER_BIT,ee=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=r.get(y),I=g.length>1;if(I)for(let oe=0;oe<g.length;oe++)i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let ie=y.texture.mipmaps;ie&&ie.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),I){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,de.__webglColorRenderbuffer[oe]);let ge=r.get(g[oe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ge,0)}e.blitFramebuffer(0,0,C,F,0,0,C,F,Y,e.NEAREST),l===!0&&(_e.length=0,Te.length=0,_e.push(e.COLOR_ATTACHMENT0+oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(_e.push(ee),Te.push(ee),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_e))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),I)for(let oe=0;oe<g.length;oe++){i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.RENDERBUFFER,de.__webglColorRenderbuffer[oe]);let ge=r.get(g[oe]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.TEXTURE_2D,ge,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){let g=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function Oe(y){return Math.min(a.maxSamples,y.samples)}function L(y){let g=r.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ke(y){let g=s.render.frame;c.get(y)!==g&&(c.set(y,g),y.update())}function ke(y,g){let C=y.colorSpace,F=y.format,Y=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||C!==Na&&C!==Hi&&(lt.getTransfer(C)===ut?(F!==oi||Y!==jt)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",C)),g}function Fe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(h.width=y.naturalWidth||y.width,h.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(h.width=y.displayWidth,h.height=y.displayHeight):(h.width=y.width,h.height=y.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.getTextureUnits=B,this.setTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=se,this.setTextureCube=Se,this.rebindTextures=J,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function u0(e,t){function i(r,a=Hi){let n,s=lt.getTransfer(a);if(r===jt)return e.UNSIGNED_BYTE;if(r===In)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Un)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Po)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Lo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ro)return e.BYTE;if(r===Co)return e.SHORT;if(r===Zr)return e.UNSIGNED_SHORT;if(r===Ln)return e.INT;if(r===fi)return e.UNSIGNED_INT;if(r===mi)return e.FLOAT;if(r===Ci)return e.HALF_FLOAT;if(r===Io)return e.ALPHA;if(r===Uo)return e.RGB;if(r===oi)return e.RGBA;if(r===Pi)return e.DEPTH_COMPONENT;if(r===er)return e.DEPTH_STENCIL;if(r===No)return e.RED;if(r===Nn)return e.RED_INTEGER;if(r===tr)return e.RG;if(r===Dn)return e.RG_INTEGER;if(r===On)return e.RGBA_INTEGER;if(r===Aa||r===Ra||r===Ca||r===Pa)if(s===ut)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Aa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ra)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ca)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Aa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fn||r===Bn||r===zn||r===Hn)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Fn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vn||r===Gn||r===kn||r===Wn||r===Xn||r===La||r===jn)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Vn||r===Gn)return s===ut?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===kn)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Wn)return n.COMPRESSED_R11_EAC;if(r===Xn)return n.COMPRESSED_SIGNED_R11_EAC;if(r===La)return n.COMPRESSED_RG11_EAC;if(r===jn)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qn||r===Yn||r===Zn||r===Jn||r===Kn||r===Qn||r===$n||r===es||r===ts||r===is||r===rs||r===as||r===ns||r===ss)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===qn)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yn)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zn)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jn)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kn)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qn)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$n)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===es)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ts)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===is)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rs)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===as)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ns)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ss)return s===ut?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===os||r===ls||r===hs)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===os)return s===ut?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ls)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hs)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cs||r===us||r===Ia||r===ds)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===cs)return n.COMPRESSED_RED_RGTC1_EXT;if(r===us)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ia)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ds)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
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

}`,f0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new pl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mi({vertexShader:d0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Cl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},m0=class extends ir{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,f=null,_=typeof XRWebGLBinding<"u",x=new f0,m={},p=t.getContextAttributes(),A=null,b=null,M=[],T=[],w=new Me,P=null,v=new Jt;v.viewport=new Et;let E=new Jt;E.viewport=new Et;let O=[v,E],R=new md,V=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=M[K];return le===void 0&&(le=new bs,M[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=M[K];return le===void 0&&(le=new bs,M[K]=le),le.getGripSpace()},this.getHand=function(K){let le=M[K];return le===void 0&&(le=new bs,M[K]=le),le.getHandSpace()};function B(K){let le=T.indexOf(K.inputSource);if(le===-1)return;let Ee=M[le];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,l||n),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let K=0;K<M.length;K++){let le=T[K];le!==null&&(T[K]=null,M[K].disconnect(le))}V=null,j=null,x.reset();for(let K in m)delete m[K];e.setRenderTarget(A),u=null,d=null,c=null,r=null,b=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){s=K,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ee=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?er:Pi,Ee=p.stencil?Jr:fi);let Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new vi(d.textureWidth,d.textureHeight,{format:oi,type:jt,depthTexture:new Dr(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new vi(u.framebufferWidth,u.framebufferHeight,{format:oi,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let le=0;le<K.removed.length;le++){let Ee=K.removed[le],he=T.indexOf(Ee);he>=0&&(T[he]=null,M[he].disconnect(Ee))}for(let le=0;le<K.added.length;le++){let Ee=K.added[le],he=T.indexOf(Ee);if(he===-1){for(let He=0;He<M.length;He++)if(He>=T.length){T.push(Ee),he=He;break}else if(T[He]===null){T[He]=Ee,he=He;break}if(he===-1)break}let Ne=M[he];Ne&&Ne.connect(Ee)}}let z=new N,ne=new N;function re(K,le,Ee){z.setFromMatrixPosition(le.matrixWorld),ne.setFromMatrixPosition(Ee.matrixWorld);let he=z.distanceTo(ne),Ne=le.projectionMatrix.elements,He=Ee.projectionMatrix.elements,fe=Ne[14]/(Ne[10]-1),me=Ne[14]/(Ne[10]+1),W=(Ne[9]+1)/Ne[5],$=(Ne[9]-1)/Ne[5],J=(Ne[8]-1)/Ne[0],ce=(He[8]+1)/He[0],pe=fe*J,_e=fe*ce,Te=he/(-J+ce),De=Te*-J;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(De),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let Oe=fe+Te,L=me+Te,Ke=pe-De,ke=_e+(he-De),Fe=W*me/L*Oe,y=$*me/L*Oe;K.projectionMatrix.makePerspective(Ke,ke,Fe,y,Oe,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let le=K.near,Ee=K.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),R.near=E.near=v.near=le,R.far=E.far=v.far=Ee,(V!==R.near||j!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,j=R.far),R.layers.mask=K.layers.mask|6,v.layers.mask=R.layers.mask&-5,E.layers.mask=R.layers.mask&-3;let he=K.parent,Ne=R.cameras;se(R,he);for(let He=0;He<Ne.length;He++)se(Ne[He],he);Ne.length===2?re(R,v,E):R.projectionMatrix.copy(v.projectionMatrix),Se(K,R,he)};function Se(K,le,Ee){Ee===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$r*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(K){o=K,d!==null&&(d.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(R)},this.getCameraTexture=function(K){return m[K]};let Pe=null;function Ze(K,le){if(h=le.getViewerPose(l||n),f=le,h!==null){let Ee=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let he=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,he=!0);for(let He=0;He<Ee.length;He++){let fe=Ee[He],me=null;if(u!==null)me=u.getViewport(fe);else{let $=c.getViewSubImage(d,fe);me=$.viewport,He===0&&(e.setRenderTargetTextures(b,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(b))}let W=O[He];W===void 0&&(W=new Jt,W.layers.enable(He),W.viewport=new Et,O[He]=W),W.matrix.fromArray(fe.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(fe.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(me.x,me.y,me.width,me.height),He===0&&(R.matrix.copy(W.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),he===!0&&R.cameras.push(W)}let Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){c=i.getBinding();let He=c.getDepthInformation(Ee[0]);He&&He.isValid&&He.texture&&x.init(He,r.renderState)}if(Ne&&Ne.includes("camera-access")&&_){e.state.unbindTexture(),c=i.getBinding();for(let He=0;He<Ee.length;He++){let fe=Ee[He].camera;if(fe){let me=m[fe];me||(me=new pl,m[fe]=me);let W=c.getCameraImage(fe);me.sourceTexture=W}}}}for(let Ee=0;Ee<M.length;Ee++){let he=T[Ee],Ne=M[Ee];he!==null&&Ne!==void 0&&Ne.update(he,le,l||n)}Pe&&Pe(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),f=null}let et=new Gl;et.setAnimationLoop(Ze),this.setAnimationLoop=function(K){Pe=K},this.dispose=function(){}}},g0=new Tt,_h=new $e;_h.set(-1,0,0,0,1,0,0,0,1);function v0(e,t){function i(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,Il(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,A,b,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(m,p),d(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(n(m,p),_(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),x(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,i(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,i(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,i(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,i(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=t.get(p),b=A.envMap,M=A.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_h),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=b*.5,p.map&&(m.map.value=p.map,i(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function _0(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){let w=T.program;r.uniformBlockBinding(M,w)}function h(M,T){let w=a[M.id];w===void 0&&(m(M),w=c(M),a[M.id]=w,M.addEventListener("dispose",A));let P=T.program;r.updateUBOMapping(M,P);let v=t.render.frame;n[M.id]!==v&&(u(M),n[M.id]=v)}function c(M){let T=d();M.__bindingPointIndex=T;let w=e.createBuffer(),P=M.__size,v=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,P,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,w),w}function d(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let T=a[M.id],w=M.uniforms,P=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let v=0,E=w.length;v<E;v++){let O=w[v];if(Array.isArray(O))for(let R=0,V=O.length;R<V;R++)f(O[R],v,R,P);else f(O,v,0,P)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(M,T,w,P){if(x(M,T,w,P)===!0){let v=M.__offset,E=M.value;if(Array.isArray(E)){let O=0;for(let R=0;R<E.length;R++){let V=E[R],j=p(V);_(V,M.__data,O),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,M.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,M.__data)}}function _(M,T,w){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,w)}function x(M,T,w,P){let v=M.value,E=T+"_"+w;if(P[E]===void 0)return typeof v=="number"||typeof v=="boolean"?P[E]=v:ArrayBuffer.isView(v)?P[E]=v.slice():P[E]=v.clone(),!0;{let O=P[E];if(typeof v=="number"||typeof v=="boolean"){if(O!==v)return P[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(O.equals(v)===!1)return O.copy(v),!0}}return!1}function m(M){let T=M.uniforms,w=0,P=16;for(let E=0,O=T.length;E<O;E++){let R=Array.isArray(T[E])?T[E]:[T[E]];for(let V=0,j=R.length;V<j;V++){let B=R[V],G=Array.isArray(B.value)?B.value:[B.value];for(let q=0,z=G.length;q<z;q++){let ne=G[q],re=p(ne),se=w%P,Se=se%re.boundary,Pe=se+Se;w+=Se,Pe!==0&&P-Pe<re.storage&&(w+=P-Pe),B.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=re.storage}}}let v=w%P;return v>0&&(w+=P-v),M.__size=w,M.__cache={},this}function p(M){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):je("WebGLRenderer: Unsupported uniform value type.",M),T}function A(M){let T=M.target;T.removeEventListener("dispose",A);let w=s.indexOf(T.__bindingPointIndex);s.splice(w,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function b(){for(let M in a)e.deleteBuffer(a[M]);s=[],a={},n={}}return{bind:l,update:h,dispose:b}}var x0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function M0(){return Ti===null&&(Ti=new ou(x0,16,16,tr,Ci),Ti.name="DFG_LUT",Ti.minFilter=Dt,Ti.magFilter=Dt,Ti.wrapS=Ri,Ti.wrapT=Ri,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var xh=class{constructor(e={}){let{canvas:t=Ec(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=jt}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;let _=u,x=new Set([On,Dn,Nn]),m=new Set([jt,fi,Zr,Jr,In,Un]),p=new Uint32Array(4),A=new Int32Array(4),b=new N,M=null,T=null,w=[],P=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,O=!1,R=null,V=null,j=null,B=null;this._outputColorSpace=zt;let G=0,q=0,z=null,ne=-1,re=null,se=new Et,Se=new Et,Pe=null,Ze=new at(0),et=0,K=t.width,le=t.height,Ee=1,he=null,Ne=null,He=new Et(0,0,K,le),fe=new Et(0,0,K,le),me=!1,W=new Ws,$=!1,J=!1,ce=new Tt,pe=new N,_e=new Et,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return z===null?Ee:1}let L=i;function Ke(S,D){return t.getContext(S,D)}try{let S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r185"),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",We,!1),L===null){let D="webgl2";if(L=Ke(D,S),L===null)throw Ke(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ye("WebGLRenderer: "+S.message),S}let ke,Fe,y,g,C,F,Y,ee,de,I,ie,oe,ge,te,Re,Le,Ge,Je,U,Q,ae,Ae,Ie;function Z(){ke=new Mm(L),ke.init(),ae=new u0(L,ke),Fe=new dm(L,ke,e,ae),y=new h0(L,ke),Fe.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),V=L.createFramebuffer(),j=L.createFramebuffer(),B=L.createFramebuffer(),g=new Em(L),C=new Zg,F=new c0(L,ke,y,C,Fe,ae,g),Y=new xm(E),ee=new wd(L),Ae=new cm(L,ee),de=new Sm(L,ee,g,Ae),I=new bm(L,de,ee,Ae,g),Je=new Tm(L,Fe,F),Re=new pm(C),ie=new Yg(E,Y,ke,Fe,Ae,Re),oe=new v0(E,C),ge=new Kg,te=new r0(ke),Ge=new hm(E,Y,y,I,f,o),Le=new l0(E,I,Fe),Ie=new _0(L,g,Fe,y),U=new um(L,ke,g),Q=new ym(L,ke,g),g.programs=ie.programs,E.capabilities=Fe,E.extensions=ke,E.properties=C,E.renderLists=ge,E.shadowMap=Le,E.state=y,E.info=g}Z(),_!==jt&&(v=new Am(_,t.width,t.height,s,r,a));let ue=new m0(E,L);this.xr=ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(S){S!==void 0&&(Ee=S,this.setSize(K,le,!1))},this.getSize=function(S){return S.set(K,le)},this.setSize=function(S,D,X=!0){if(ue.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,le=D,t.width=Math.floor(S*Ee),t.height=Math.floor(D*Ee),X===!0&&(t.style.width=S+"px",t.style.height=D+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(K*Ee,le*Ee).floor()},this.setDrawingBufferSize=function(S,D,X){K=S,le=D,Ee=X,t.width=Math.floor(S*X),t.height=Math.floor(D*X),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(_===jt){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(se)},this.getViewport=function(S){return S.copy(He)},this.setViewport=function(S,D,X,k){S.isVector4?He.set(S.x,S.y,S.z,S.w):He.set(S,D,X,k),y.viewport(se.copy(He).multiplyScalar(Ee).round())},this.getScissor=function(S){return S.copy(fe)},this.setScissor=function(S,D,X,k){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,D,X,k),y.scissor(Se.copy(fe).multiplyScalar(Ee).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(S){y.setScissorTest(me=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){Ne=S},this.getClearColor=function(S){return S.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,X=!0){let k=0;if(S){let H=!1;if(z!==null){let xe=z.texture.format;H=x.has(xe)}if(H){let xe=z.texture.type,be=m.has(xe),Ce=Ge.getClearColor(),Ue=Ge.getClearAlpha(),Xe=Ce.r,Qe=Ce.g,ot=Ce.b;be?(p[0]=Xe,p[1]=Qe,p[2]=ot,p[3]=Ue,L.clearBufferuiv(L.COLOR,0,p)):(A[0]=Xe,A[1]=Qe,A[2]=ot,A[3]=Ue,L.clearBufferiv(L.COLOR,0,A))}else k|=L.COLOR_BUFFER_BIT}D&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),R=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",We,!1),Ge.dispose(),ge.dispose(),te.dispose(),C.dispose(),Y.dispose(),I.dispose(),Ae.dispose(),Ie.dispose(),ie.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ve),ue.removeEventListener("sessionend",Be),st.stop()};function ye(S){S.preventDefault(),ko("WebGLRenderer: Context Lost."),O=!0}function ht(){ko("WebGLRenderer: Context Restored."),O=!1;let S=g.autoReset,D=Le.enabled,X=Le.autoUpdate,k=Le.needsUpdate,H=Le.type;Z(),g.autoReset=S,Le.enabled=D,Le.autoUpdate=X,Le.needsUpdate=k,Le.type=H}function We(S){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function it(S){let D=S.target;D.removeEventListener("dispose",it),St(D)}function St(S){Kt(S),C.remove(S)}function Kt(S){let D=C.get(S).programs;D!==void 0&&(D.forEach(function(X){ie.releaseProgram(X)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,X,k,H,xe){D===null&&(D=Te);let be=H.isMesh&&H.matrixWorld.determinantAffine()<0,Ce=pn(S,D,X,k,H);y.setMaterial(k,be);let Ue=X.index,Xe=1;if(k.wireframe===!0){if(Ue=de.getWireframeAttribute(X),Ue===void 0)return;Xe=2}let Qe=X.drawRange,ot=X.attributes.position,qe=Qe.start*Xe,mt=(Qe.start+Qe.count)*Xe;xe!==null&&(qe=Math.max(qe,xe.start*Xe),mt=Math.min(mt,(xe.start+xe.count)*Xe)),Ue!==null?(qe=Math.max(qe,0),mt=Math.min(mt,Ue.count)):ot!=null&&(qe=Math.max(qe,0),mt=Math.min(mt,ot.count));let bt=mt-qe;if(bt<0||bt===1/0)return;Ae.setup(H,k,Ce,X,Ue);let xt,gt=U;if(Ue!==null&&(xt=ee.get(Ue),gt=Q,gt.setIndex(xt)),H.isMesh)k.wireframe===!0?(y.setLineWidth(k.wireframeLinewidth*Oe()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(H.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),y.setLineWidth(yt*Oe()),H.isLineSegments?gt.setMode(L.LINES):H.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else H.isPoints?gt.setMode(L.POINTS):H.isSprite&&gt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let yt=H._multiDrawStarts,ze=H._multiDrawCounts,ii=H._multiDrawCount,mr=Ue?ee.get(Ue).bytesPerElement:1,si=C.get(k).currentProgram.getUniforms();for(let bi=0;bi<ii;bi++)si.setValue(L,"_gl_DrawID",bi),gt.render(yt[bi]/mr,ze[bi])}else if(H.isInstancedMesh)gt.renderInstances(qe,bt,H.count);else if(X.isInstancedBufferGeometry){let yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ze=Math.min(X.instanceCount,yt);gt.renderInstances(qe,bt,ze)}else gt.render(qe,bt)};function It(S,D,X){S.transparent===!0&&S.side===wi&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,ei(S,D,X),S.side=zi,S.needsUpdate=!0,ei(S,D,X),S.side=wi):ei(S,D,X)}this.compile=function(S,D,X=null){X===null&&(X=S),T=te.get(X),T.init(D),P.push(T),X.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();let k=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let xe=H.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){let Ce=xe[be];It(Ce,X,H),k.add(Ce)}else It(xe,X,H),k.add(xe)}),T=P.pop(),k},this.compileAsync=function(S,D,X=null){let k=this.compile(S,D,X);return new Promise(H=>{function xe(){if(k.forEach(function(be){C.get(be).currentProgram.isReady()&&k.delete(be)}),k.size===0){H(S);return}setTimeout(xe,10)}ke.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Wt=null;function Qt(S){Wt&&Wt(S)}function Ve(){st.stop()}function Be(){st.start()}let st=new Gl;st.setAnimationLoop(Qt),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(S){Wt=S,ue.setAnimationLoop(S),S===null?st.stop():st.start()},ue.addEventListener("sessionstart",Ve),ue.addEventListener("sessionend",Be),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;R!==null&&R.renderStart(S,D);let X=ue.enabled===!0&&ue.isPresenting===!0,k=v!==null&&(z===null||X)&&v.begin(E,z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(D),D=ue.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,D,z),T=te.get(S,P.length),T.init(D),T.state.textureUnits=F.getTextureUnits(),P.push(T),ce.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(ce,gi,D.reversedDepth),J=this.localClippingEnabled,$=Re.init(this.clippingPlanes,J),M=ge.get(S,w.length),M.init(),w.push(M),ue.enabled===!0&&ue.isPresenting===!0){let xe=E.xr.getDepthSensingMesh();xe!==null&&Rt(xe,D,-1/0,E.sortObjects)}Rt(S,D,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(he,Ne,D.reversedDepth),De=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,De&&Ge.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$===!0&&Re.beginShadows();let H=T.state.shadowsArray;if(Le.render(H,S,D),$===!0&&Re.endShadows(),(k&&v.hasRenderPass())===!1){let xe=M.opaque,be=M.transmissive;if(T.setupLights(),D.isArrayCamera){let Ce=D.cameras;if(be.length>0)for(let Ue=0,Xe=Ce.length;Ue<Xe;Ue++){let Qe=Ce[Ue];di(xe,be,S,Qe)}De&&Ge.render(S);for(let Ue=0,Xe=Ce.length;Ue<Xe;Ue++){let Qe=Ce[Ue];ui(M,S,Qe,Qe.viewport)}}else be.length>0&&di(xe,be,S,D),De&&Ge.render(S),ui(M,S,D)}z!==null&&q===0&&(F.updateMultisampleRenderTarget(z),F.updateRenderTargetMipmap(z)),k&&v.end(E),S.isScene===!0&&S.onAfterRender(E,S,D),Ae.resetDefaultState(),ne=-1,re=null,P.pop(),P.length>0?(T=P[P.length-1],F.setTextureUnits(T.state.textureUnits),$===!0&&Re.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,R!==null&&R.renderEnd()};function Rt(S,D,X,k){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){k&&_e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);let xe=I.update(S),be=S.material;be.visible&&M.push(S,xe,be,X,_e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){let xe=I.update(S),be=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),_e.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),_e.copy(xe.boundingSphere.center)),_e.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(be)){let Ce=xe.groups;for(let Ue=0,Xe=Ce.length;Ue<Xe;Ue++){let Qe=Ce[Ue],ot=be[Qe.materialIndex];ot&&ot.visible&&M.push(S,xe,ot,X,_e.z,Qe)}}else be.visible&&M.push(S,xe,be,X,_e.z,null)}}let H=S.children;for(let xe=0,be=H.length;xe<be;xe++)Rt(H[xe],D,X,k)}function ui(S,D,X,k){let{opaque:H,transmissive:xe,transparent:be}=S;T.setupLightsView(X),$===!0&&Re.setGlobalState(E.clippingPlanes,X),k&&y.viewport(se.copy(k)),H.length>0&&Xt(H,D,X),xe.length>0&&Xt(xe,D,X),be.length>0&&Xt(be,D,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function di(S,D,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let ot=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new vi(1,1,{generateMipmaps:!0,type:ot?Ci:jt,minFilter:$i,samples:Math.max(4,Fe.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let H=T.state.transmissionRenderTarget[k.id],xe=k.viewport||se;H.setSize(xe.z*E.transmissionResolutionScale,xe.w*E.transmissionResolutionScale);let be=E.getRenderTarget(),Ce=E.getActiveCubeFace(),Ue=E.getActiveMipmapLevel();E.setRenderTarget(H),E.getClearColor(Ze),et=E.getClearAlpha(),et<1&&E.setClearColor(16777215,.5),E.clear(),De&&Ge.render(X);let Xe=E.toneMapping;E.toneMapping=pi;let Qe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),$===!0&&Re.setGlobalState(E.clippingPlanes,k),Xt(S,X,k),F.updateMultisampleRenderTarget(H),F.updateRenderTargetMipmap(H),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let qe=0,mt=D.length;qe<mt;qe++){let bt=D[qe],{object:xt,geometry:gt,material:yt,group:ze}=bt;if(yt.side===wi&&xt.layers.test(k.layers)){let ii=yt.side;yt.side=kt,yt.needsUpdate=!0,$t(xt,X,k,gt,yt,ze),yt.side=ii,yt.needsUpdate=!0,ot=!0}}ot===!0&&(F.updateMultisampleRenderTarget(H),F.updateRenderTargetMipmap(H))}E.setRenderTarget(be,Ce,Ue),E.setClearColor(Ze,et),Qe!==void 0&&(k.viewport=Qe),E.toneMapping=Xe}function Xt(S,D,X){let k=D.isScene===!0?D.overrideMaterial:null;for(let H=0,xe=S.length;H<xe;H++){let be=S[H],{object:Ce,geometry:Ue,group:Xe}=be,Qe=be.material;Qe.allowOverride===!0&&k!==null&&(Qe=k),Ce.layers.test(X.layers)&&$t(Ce,D,X,Ue,Qe,Xe)}}function $t(S,D,X,k,H,xe){S.onBeforeRender(E,D,X,k,H,xe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(E,D,X,k,S,xe),H.transparent===!0&&H.side===wi&&H.forceSinglePass===!1?(H.side=kt,H.needsUpdate=!0,E.renderBufferDirect(X,D,k,H,S,xe),H.side=zi,H.needsUpdate=!0,E.renderBufferDirect(X,D,k,H,S,xe),H.side=wi):E.renderBufferDirect(X,D,k,H,S,xe),S.onAfterRender(E,D,X,k,H,xe)}function ei(S,D,X){D.isScene!==!0&&(D=Te);let k=C.get(S),H=T.state.lights,xe=T.state.shadowsArray,be=H.state.version,Ce=ie.getParameters(S,H.state,xe,D,X,T.state.lightProbeGridArray),Ue=ie.getProgramCacheKey(Ce),Xe=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let Qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=Y.get(S.envMap||k.environment,Qe),k.envMapRotation=k.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Xe===void 0&&(S.addEventListener("dispose",it),Xe=new Map,k.programs=Xe);let ot=Xe.get(Ue);if(ot!==void 0){if(k.currentProgram===ot&&k.lightsStateVersion===be)return Bi(S,Ce),ot}else Ce.uniforms=ie.getUniforms(S),R!==null&&S.isNodeMaterial&&R.build(S,X,Ce),S.onBeforeCompile(Ce,E),ot=ie.acquireProgram(Ce,Ue),Xe.set(Ue,ot),k.uniforms=Ce.uniforms;let qe=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(qe.clippingPlanes=Re.uniform),Bi(S,Ce),k.needsLights=fr(S),k.lightsStateVersion=be,k.needsLights&&(qe.ambientLightColor.value=H.state.ambient,qe.lightProbe.value=H.state.probe,qe.directionalLights.value=H.state.directional,qe.directionalLightShadows.value=H.state.directionalShadow,qe.spotLights.value=H.state.spot,qe.spotLightShadows.value=H.state.spotShadow,qe.rectAreaLights.value=H.state.rectArea,qe.ltc_1.value=H.state.rectAreaLTC1,qe.ltc_2.value=H.state.rectAreaLTC2,qe.pointLights.value=H.state.point,qe.pointLightShadows.value=H.state.pointShadow,qe.hemisphereLights.value=H.state.hemi,qe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qe.spotLightMatrix.value=H.state.spotLightMatrix,qe.spotLightMap.value=H.state.spotLightMap,qe.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=ot,k.uniformsList=null,ot}function ti(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=un.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Bi(S,D){let X=C.get(S);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Yi(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(D.matrixWorld);for(let X=0,k=S.length;X<k;X++){let H=S[X];if(H.texture!==null&&H.boundingBox.containsPoint(b))return H}return null}function pn(S,D,X,k,H){D.isScene!==!0&&(D=Te),F.resetTextureUnits();let xe=D.fog,be=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,Ce=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:lt.workingColorSpace,Ue=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Xe=Y.get(k.envMap||be,Ue),Qe=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ot=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),qe=!!X.morphAttributes.position,mt=!!X.morphAttributes.normal,bt=!!X.morphAttributes.color,xt=pi;k.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(xt=E.toneMapping);let gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=gt!==void 0?gt.length:0,ze=C.get(k),ii=T.state.lights;if($===!0&&(J===!0||S!==re)){let dt=S===re&&k.id===ne;Re.setState(k,S,dt)}let mr=!1;k.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ii.state.version||ze.outputColorSpace!==Ce||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isBatchedMesh&&ze.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ze.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ze.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ze.instancingMorph===!1&&H.morphTexture!==null||ze.envMap!==Xe||k.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Re.numPlanes||ze.numIntersection!==Re.numIntersection)||ze.vertexAlphas!==Qe||ze.vertexTangents!==ot||ze.morphTargets!==qe||ze.morphNormals!==mt||ze.morphColors!==bt||ze.toneMapping!==xt||ze.morphTargetsCount!==yt||!!ze.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(mr=!0):(mr=!0,ze.__version=k.version);let si=ze.currentProgram;mr===!0&&(si=ei(k,D,H),R&&k.isNodeMaterial&&R.onUpdateProgram(k,si,ze));let bi=!1,Zi=!1,Wr=!1,pt=si.getUniforms(),wt=ze.uniforms;if(y.useProgram(si.program)&&(bi=!0,Zi=!0,Wr=!0),k.id!==ne&&(ne=k.id,Zi=!0),ze.needsLights){let dt=Yi(T.state.lightProbeGridArray,H);ze.lightProbeGrid!==dt&&(ze.lightProbeGrid=dt,Zi=!0)}if(bi||re!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",S.projectionMatrix),pt.setValue(L,"viewMatrix",S.matrixWorldInverse);let dt=pt.map.cameraPosition;dt!==void 0&&dt.setValue(L,pe.setFromMatrixPosition(S.matrixWorld)),Fe.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),re!==S&&(re=S,Zi=!0,Wr=!0)}if(ze.needsLights&&(ii.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",ii.state.directionalShadowMap,F),ii.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",ii.state.spotShadowMap,F),ii.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",ii.state.pointShadowMap,F)),H.isSkinnedMesh){pt.setOptional(L,H,"bindMatrix"),pt.setOptional(L,H,"bindMatrixInverse");let dt=H.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),pt.setValue(L,"boneTexture",dt.boneTexture,F))}H.isBatchedMesh&&(pt.setOptional(L,H,"batchingTexture"),pt.setValue(L,"batchingTexture",H._matricesTexture,F),pt.setOptional(L,H,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",H._indirectTexture,F),pt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",H._colorsTexture,F));let Ji=X.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Je.update(H,X,si),(Zi||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,pt.setValue(L,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(wt.envMapIntensity.value=D.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=M0()),Zi){if(pt.setValue(L,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&fn(wt,Wr),xe&&k.fog===!0&&oe.refreshFogUniforms(wt,xe),oe.refreshMaterialUniforms(wt,k,Ee,le,T.state.transmissionRenderTarget[S.id]),ze.needsLights&&ze.lightProbeGrid){let dt=ze.lightProbeGrid;wt.probesSH.value=dt.texture,wt.probesMin.value.copy(dt.boundingBox.min),wt.probesMax.value.copy(dt.boundingBox.max),wt.probesResolution.value.copy(dt.resolution)}un.upload(L,ti(ze),wt,F)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(un.upload(L,ti(ze),wt,F),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pt.setValue(L,"center",H.center),pt.setValue(L,"modelViewMatrix",H.modelViewMatrix),pt.setValue(L,"normalMatrix",H.normalMatrix),pt.setValue(L,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let dt=k.uniformsGroups;for(let Ea=0,Xr=dt.length;Ea<Xr;Ea++){let wh=dt[Ea];Ie.update(wh,si),Ie.bind(wh,si)}}return si}function fn(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function fr(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,D,X){let k=C.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),C.get(S.texture).__webglTexture=D,C.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let X=C.get(S);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,X=0){z=S,G=D,q=X;let k=null,H=!1,xe=!1;if(S){let be=C.get(S);if(be.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,be.__webglFramebuffer),se.copy(S.viewport),Se.copy(S.scissor),Pe=S.scissorTest,y.viewport(se),y.scissor(Se),y.setScissorTest(Pe),ne=-1;return}else if(be.__webglFramebuffer===void 0)F.setupRenderTarget(S);else if(be.__hasExternalTextures)F.rebindTextures(S,C.get(S.texture).__webglTexture,C.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Xe=S.depthTexture;if(be.__boundDepthTexture!==Xe){if(Xe!==null&&C.has(Xe)&&(S.width!==Xe.image.width||S.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(S)}}let Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);let Ue=C.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[D])?k=Ue[D][X]:k=Ue[D],H=!0):S.samples>0&&F.useMultisampledRTT(S)===!1?k=C.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[X]:k=Ue,se.copy(S.viewport),Se.copy(S.scissor),Pe=S.scissorTest}else se.copy(He).multiplyScalar(Ee).floor(),Se.copy(fe).multiplyScalar(Ee).floor(),Pe=me;if(X!==0&&(k=V),y.bindFramebuffer(L.FRAMEBUFFER,k)&&y.drawBuffers(S,k),y.viewport(se),y.scissor(Se),y.setScissorTest(Pe),H){let be=C.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,X)}else if(xe){let be=D;for(let Ce=0;Ce<S.textures.length;Ce++){let Ue=C.get(S.textures[Ce]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ce,Ue.__webglTexture,X,be)}}else if(S!==null&&X!==0){let be=C.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,X)}ne=-1},this.readRenderTargetPixels=function(S,D,X,k,H,xe,be,Ce=0){if(!(S&&S.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=C.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){y.bindFramebuffer(L.FRAMEBUFFER,Ue);try{let Xe=S.textures[Ce],Qe=Xe.format,ot=Xe.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ce),!Fe.textureFormatReadable(Qe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(ot)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-k&&X>=0&&X<=S.height-H&&L.readPixels(D,X,k,H,ae.convert(Qe),ae.convert(ot),xe)}finally{let Xe=z!==null?C.get(z).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(S,D,X,k,H,xe,be,Ce=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=C.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue)if(D>=0&&D<=S.width-k&&X>=0&&X<=S.height-H){y.bindFramebuffer(L.FRAMEBUFFER,Ue);let Xe=S.textures[Ce],Qe=Xe.format,ot=Xe.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ce),!Fe.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(D,X,k,H,ae.convert(Qe),ae.convert(ot),0);let mt=z!==null?C.get(z).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,mt);let bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Tc(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(qe),L.deleteSync(bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,X=0){let k=Math.pow(2,-X),H=Math.floor(S.image.width*k),xe=Math.floor(S.image.height*k),be=D!==null?D.x:0,Ce=D!==null?D.y:0;F.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,be,Ce,H,xe),y.unbindTexture()},this.copyTextureToTexture=function(S,D,X=null,k=null,H=0,xe=0){let be,Ce,Ue,Xe,Qe,ot,qe,mt,bt,xt=S.isCompressedTexture?S.mipmaps[xe]:S.image;if(X!==null)be=X.max.x-X.min.x,Ce=X.max.y-X.min.y,Ue=X.isBox3?X.max.z-X.min.z:1,Xe=X.min.x,Qe=X.min.y,ot=X.isBox3?X.min.z:0;else{let wt=Math.pow(2,-H);be=Math.floor(xt.width*wt),Ce=Math.floor(xt.height*wt),S.isDataArrayTexture?Ue=xt.depth:S.isData3DTexture?Ue=Math.floor(xt.depth*wt):Ue=1,Xe=0,Qe=0,ot=0}k!==null?(qe=k.x,mt=k.y,bt=k.z):(qe=0,mt=0,bt=0);let gt=ae.convert(D.format),yt=ae.convert(D.type),ze;D.isData3DTexture?(F.setTexture3D(D,0),ze=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(F.setTexture2DArray(D,0),ze=L.TEXTURE_2D_ARRAY):(F.setTexture2D(D,0),ze=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let ii=y.getParameter(L.UNPACK_ROW_LENGTH),mr=y.getParameter(L.UNPACK_IMAGE_HEIGHT),si=y.getParameter(L.UNPACK_SKIP_PIXELS),bi=y.getParameter(L.UNPACK_SKIP_ROWS),Zi=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),y.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ot);let Wr=S.isDataArrayTexture||S.isData3DTexture,pt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let wt=C.get(S),Ji=C.get(D),dt=C.get(wt.__renderTarget),Ea=C.get(Ji.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,dt.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let Xr=0;Xr<Ue;Xr++)Wr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,C.get(S).__webglTexture,H,ot+Xr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,C.get(D).__webglTexture,xe,bt+Xr)),L.blitFramebuffer(Xe,Qe,be,Ce,qe,mt,be,Ce,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||C.has(S)){let wt=C.get(S),Ji=C.get(D);y.bindFramebuffer(L.READ_FRAMEBUFFER,j),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let dt=0;dt<Ue;dt++)Wr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,H,ot+dt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,H),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ji.__webglTexture,xe,bt+dt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ji.__webglTexture,xe),H!==0?L.blitFramebuffer(Xe,Qe,be,Ce,qe,mt,be,Ce,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(ze,xe,qe,mt,bt+dt,Xe,Qe,be,Ce):L.copyTexSubImage2D(ze,xe,qe,mt,Xe,Qe,be,Ce);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(ze,xe,qe,mt,bt,be,Ce,Ue,gt,yt,xt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(ze,xe,qe,mt,bt,be,Ce,Ue,gt,xt.data):L.texSubImage3D(ze,xe,qe,mt,bt,be,Ce,Ue,gt,yt,xt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,xe,qe,mt,be,Ce,gt,yt,xt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,xe,qe,mt,xt.width,xt.height,gt,xt.data):L.texSubImage2D(L.TEXTURE_2D,xe,qe,mt,be,Ce,gt,yt,xt);y.pixelStorei(L.UNPACK_ROW_LENGTH,ii),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mr),y.pixelStorei(L.UNPACK_SKIP_PIXELS,si),y.pixelStorei(L.UNPACK_SKIP_ROWS,bi),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Zi),xe===0&&D.generateMipmaps&&L.generateMipmap(ze),y.unbindTexture()},this.initRenderTarget=function(S){C.get(S).__webglFramebuffer===void 0&&F.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?F.setTextureCube(S,0):S.isData3DTexture?F.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?F.setTexture2DArray(S,0):F.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){G=0,q=0,z=null,y.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}},ya=new N;function ni(e,t,i,r,a,n){let s=2*Math.PI*a/4,o=Math.max(n-2*a,0),l=Math.PI/4;ya.copy(t),ya[r]=0,ya.normalize();let h=.5*s/(s+o),c=1-ya.angleTo(e)/l;return Math.sign(ya[i])===1?c*h:o/(s+o)+h+h*(1-c)}var ct=class Gh extends la{constructor(t=1,i=1,r=1,a=2,n=.1){let s=a*2+1;if(n=Math.min(t/2,i/2,r/2,n),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:r,segments:a,radius:n},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new N,h=new N,c=new N(t,i,r).divideScalar(2).subScalar(n),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,x=new N,m=.5/s;for(let p=0,A=0;p<d.length;p+=3,A+=2)switch(l.fromArray(d,p),h.copy(l),h.x-=Math.sign(h.x)*m,h.y-=Math.sign(h.y)*m,h.z-=Math.sign(h.z)*m,h.normalize(),d[p+0]=c.x*Math.sign(l.x)+h.x*n,d[p+1]=c.y*Math.sign(l.y)+h.y*n,d[p+2]=c.z*Math.sign(l.z)+h.z*n,u[p+0]=h.x,u[p+1]=h.y,u[p+2]=h.z,Math.floor(p/_)){case 0:x.set(1,0,0),f[A+0]=ni(x,h,"z","y",n,r),f[A+1]=1-ni(x,h,"y","z",n,i);break;case 1:x.set(-1,0,0),f[A+0]=1-ni(x,h,"z","y",n,r),f[A+1]=1-ni(x,h,"y","z",n,i);break;case 2:x.set(0,1,0),f[A+0]=1-ni(x,h,"x","z",n,t),f[A+1]=ni(x,h,"z","x",n,r);break;case 3:x.set(0,-1,0),f[A+0]=1-ni(x,h,"x","z",n,t),f[A+1]=1-ni(x,h,"z","x",n,r);break;case 4:x.set(0,0,1),f[A+0]=1-ni(x,h,"x","y",n,t),f[A+1]=1-ni(x,h,"y","x",n,i);break;case 5:x.set(0,0,-1),f[A+0]=ni(x,h,"x","y",n,t),f[A+1]=1-ni(x,h,"y","x",n,i);break}}static fromJSON(t){return new Gh(t.width,t.height,t.depth,t.segments,t.radius)}};function Fi(e,t,i){let r=new ua,a=-e/2,n=-t/2,s=Math.min(i,e/2,t/2);return r.moveTo(a+s,n),r.lineTo(a+e-s,n),r.quadraticCurveTo(a+e,n,a+e,n+s),r.lineTo(a+e,n+t-s),r.quadraticCurveTo(a+e,n+t,a+e-s,n+t),r.lineTo(a+s,n+t),r.quadraticCurveTo(a,n+t,a,n+t-s),r.lineTo(a,n+s),r.quadraticCurveTo(a,n,a+s,n),r}function S0(e){let t=["neutral","curious","recognised","satisfied"],i={};for(let r of t){let a=document.createElement("canvas");a.width=512,a.height=340;let n=a.getContext("2d");n.fillStyle="#071421",n.fillRect(0,0,a.width,a.height);let s=n.createRadialGradient(256,170,30,256,170,270);s.addColorStop(0,"rgba(20, 52, 82, 0.22)"),s.addColorStop(1,"rgba(3, 9, 16, 0.65)"),n.fillStyle=s,n.fillRect(0,0,a.width,a.height),n.strokeStyle="rgba(120, 217, 238, 0.035)",n.lineWidth=1;for(let u=0;u<a.height;u+=6)n.beginPath(),n.moveTo(0,u),n.lineTo(a.width,u),n.stroke();let o="#78D9EE";n.fillStyle=o,n.strokeStyle=o,n.shadowColor="rgba(120, 217, 238, 0.45)",n.shadowBlur=12,n.lineCap="round",n.lineJoin="round";let l=166,h=346,c=172;r==="neutral"?(pr(n,l-32,c-44,64,88,28,!0,!1),pr(n,h-32,c-44,64,88,28,!0,!1)):r==="curious"?(pr(n,l-42,c-48,66,96,30,!0,!1),pr(n,h-48,c-34,62,72,26,!0,!1),n.lineWidth=11,n.beginPath(),n.arc(432,118,22,Math.PI*.85,Math.PI*.15,!1),n.quadraticCurveTo(454,138,432,152),n.lineTo(432,166),n.stroke(),n.beginPath(),n.arc(432,192,6.5,0,Math.PI*2),n.fill()):r==="recognised"?(pr(n,l-30,c-42,60,84,26,!0,!1),pr(n,h-30,c-42,60,84,26,!0,!1),n.lineWidth=6,pr(n,88,86,336,172,20,!1,!0),n.fillRect(236,80,40,6)):r==="satisfied"&&(n.lineWidth=18,n.beginPath(),n.arc(l,c+24,42,Math.PI*1.18,Math.PI*1.82,!1),n.stroke(),n.beginPath(),n.arc(h,c+24,42,Math.PI*1.18,Math.PI*1.82,!1),n.stroke());let d=new uu(a);d.colorSpace=zt,d.anisotropy=4,d.needsUpdate=!0,i[r]=e(d)}return i}function pr(e,t,i,r,a,n,s,o){e.beginPath(),e.moveTo(t+n,i),e.lineTo(t+r-n,i),e.quadraticCurveTo(t+r,i,t+r,i+n),e.lineTo(t+r,i+a-n),e.quadraticCurveTo(t+r,i+a,t+r-n,i+a),e.lineTo(t+n,i+a),e.quadraticCurveTo(t,i+a,t,i+a-n),e.lineTo(t,i+n),e.quadraticCurveTo(t,i,t+n,i),e.closePath(),s&&e.fill(),o&&e.stroke()}function y0(){let e=new Set,t=new Set,i=new Set,r=Ve=>(e.add(Ve),Ve),a=Ve=>(t.add(Ve),Ve),n=Ve=>(i.add(Ve),Ve),s={ivoryShell:a(new Ct({color:15262938,roughness:.34,metalness:.04})),cobaltAccent:a(new Ct({color:2119589,roughness:.38,metalness:.12})),satinSilver:a(new Ct({color:11188421,roughness:.28,metalness:.78})),darkHardware:a(new Ct({color:1450545,roughness:.5,metalness:.35})),bezelDark:a(new Ct({color:858922,roughness:.26,metalness:.18})),gripPad:a(new Ct({color:1910838,roughness:.78,metalness:.05}))},o=S0(n),l=a(new Ct({color:16777215,map:o.neutral,emissive:16777215,emissiveMap:o.neutral,emissiveIntensity:.68,roughness:.16,metalness:.05})),h={fastenerPin:r(new ft(.007,.007,.006,16)),fastenerRing:r(new ft(.011,.011,.003,16)),jointCap:r(new ft(.022,.022,.008,24)),knucklePin:r(new ft(.0085,.0085,.04,16))},c=Ve=>{Ve.traverse(Be=>{Be.isMesh&&(Be.castShadow=!0,Be.receiveShadow=!0)})},d=new nt;d.name="robotRoot";let u=new nt;u.name="legsAndFeet",d.add(u);let f=r(new ct(.155,.026,.235,5,.01)),_=r(new ct(.146,.058,.215,6,.024)),x=r(new ct(.118,.036,.085,4,.015)),m=r(new ft(.044,.048,.028,24)),p=r(new Pl(.039,24,18)),A=r(new ct(.084,.145,.098,5,.024)),b=r(new ct(.088,.018,.102,3,.005)),M=r(new ft(.038,.038,.088,24));[-1,1].forEach(Ve=>{let Be=Ve*.108,st=new nt;st.name=Ve<0?"leftLegAssembly":"rightLegAssembly";let Rt=new ve(f,s.gripPad);Rt.position.set(Be,.013,.018),st.add(Rt);let ui=new ve(_,s.ivoryShell);ui.position.set(Be,.044,.014),st.add(ui);let di=new ve(x,s.cobaltAccent);di.position.set(Be,.04,.086),st.add(di);let Xt=new ve(m,s.darkHardware);Xt.position.set(Be,.078,0),st.add(Xt);let $t=new ve(p,s.satinSilver);$t.position.set(Be,.095,0),st.add($t);let ei=new ve(A,s.ivoryShell);ei.position.set(Be,.172,0),st.add(ei);let ti=new ve(b,s.darkHardware);ti.position.set(Be,.172,0),st.add(ti);let Bi=new ve(h.jointCap,s.satinSilver);Bi.rotation.z=Math.PI/2,Bi.position.set(Be+Ve*.044,.13,0),st.add(Bi);let Yi=new ve(M,s.satinSilver);Yi.rotation.z=Math.PI/2,Yi.position.set(Be,.258,0),st.add(Yi),u.add(st)});let T=new nt;T.name="torso",d.add(T);let w=r(new ct(.31,.075,.22,6,.032)),P=new ve(w,s.satinSilver);P.position.set(0,.285,0),T.add(P);let v=r(new ct(.328,.02,.236,6,.01)),E=new ve(v,s.darkHardware);E.position.set(0,.324,0),T.add(E);let O=r(new ct(.37,.375,.265,8,.078)),R=new ve(O,s.ivoryShell);R.position.set(0,.505,0),T.add(R);let V=r(new ft(.088,.104,.026,32)),j=new ve(V,s.cobaltAccent);j.position.set(0,.692,0),T.add(j);let B=r(new ct(.156,.078,.018,4,.008)),G=new ve(B,s.satinSilver);G.position.set(0,.535,.128),T.add(G);let q=r(new ct(.138,.06,.018,4,.006)),z=new ve(q,s.cobaltAccent);z.position.set(0,.535,.132),T.add(z);let ne=r(new ft(.007,.007,.01,16)),re=a(new Vs({color:7920110})),se=new ve(ne,re);se.rotation.x=Math.PI/2,se.position.set(-.044,.535,.138),T.add(se);let Se=r(new ct(.214,.214,.016,4,.008)),Pe=new ve(Se,s.darkHardware);Pe.position.set(0,.5,-.128),T.add(Pe);let Ze=r(new ct(.198,.198,.018,4,.008)),et=new ve(Ze,s.ivoryShell);et.position.set(0,.5,-.131),T.add(et);let K=r(new ct(.056,.016,.014,2,.004)),le=new ve(K,s.cobaltAccent);le.position.set(0,.57,-.136),T.add(le),[[-.076,.576],[.076,.576],[-.076,.424],[.076,.424]].forEach(([Ve,Be])=>{let st=new ve(h.fastenerRing,s.darkHardware);st.rotation.x=Math.PI/2,st.position.set(Ve,Be,-.139),T.add(st);let Rt=new ve(h.fastenerPin,s.satinSilver);Rt.rotation.x=Math.PI/2,Rt.position.set(Ve,Be,-.14),T.add(Rt)});let Ee=r(new ft(.052,.058,.036,24));[-1,1].forEach(Ve=>{let Be=new ve(Ee,s.satinSilver);Be.rotation.z=Math.PI/2,Be.position.set(Ve*.188,.585,0),T.add(Be)});let he=new nt;he.name="neckPivot",he.position.set(0,.705,0),d.add(he);let Ne=r(new ft(.046,.052,.088,24)),He=new ve(Ne,s.satinSilver);He.position.set(0,.025,0),he.add(He);let fe=r(new qu(.049,.006,12,28));[-.002,.018,.038].forEach(Ve=>{let Be=new ve(fe,s.darkHardware);Be.rotation.x=Math.PI/2,Be.position.set(0,Ve,0),he.add(Be)});let me=r(new ft(.024,.024,.115,20)),W=new ve(me,s.satinSilver);W.rotation.z=Math.PI/2,W.position.set(0,.058,0),he.add(W);let $=new nt;$.name="head",$.position.set(0,.255,0),he.add($);let J=new nt;J.name="shell",$.add(J);let ce=r(new ct(.51,.37,.295,8,.068)),pe=new ve(ce,s.ivoryShell);pe.position.set(0,0,-.022),J.add(pe);let _e=Fi(.495,.355,.062),Te=Fi(.415,.275,.038);_e.holes.push(Te);let De=r(new Fr(_e,{depth:.055,bevelEnabled:!0,bevelThickness:.016,bevelSize:.014,bevelSegments:5,curveSegments:24})),Oe=new ve(De,s.ivoryShell);Oe.position.set(0,0,.095),J.add(Oe);let L=r(new ft(.064,.068,.018,28)),Ke=r(new ft(.045,.045,.022,24));[-1,1].forEach(Ve=>{let Be=new ve(L,s.cobaltAccent);Be.rotation.z=Math.PI/2,Be.position.set(Ve*.254,0,-.01),J.add(Be);let st=new ve(Ke,s.satinSilver);st.rotation.z=Math.PI/2,st.position.set(Ve*.257,0,-.01),J.add(st)});let ke=r(new ct(.18,.09,.014,4,.006)),Fe=new ve(ke,s.satinSilver);Fe.position.set(0,0,-.166),J.add(Fe),[-.062,.062].forEach(Ve=>{let Be=new ve(h.fastenerPin,s.darkHardware);Be.rotation.x=Math.PI/2,Be.position.set(Ve,0,-.172),J.add(Be)});let y=r(new ct(.15,.024,.14,4,.008)),g=new ve(y,s.darkHardware);g.position.set(0,-.182,-.01),J.add(g);let C=Fi(.422,.282,.04),F=Fi(.376,.238,.028);C.holes.push(F);let Y=r(new Fr(C,{depth:.036,bevelEnabled:!0,bevelThickness:.008,bevelSize:.007,bevelSegments:4,curveSegments:24})),ee=new ve(Y,s.bezelDark);ee.name="bezel",ee.position.set(0,0,.114),$.add(ee);let de=Fi(.382,.244,.028),I=r(new Xu(de,24));I.computeBoundingBox();let ie=I.boundingBox,oe=I.attributes.uv,ge=I.attributes.position;for(let Ve=0;Ve<ge.count;Ve++){let Be=(ge.getX(Ve)-ie.min.x)/(ie.max.x-ie.min.x),st=(ge.getY(Ve)-ie.min.y)/(ie.max.y-ie.min.y);oe.setXY(Ve,Be,st)}oe.needsUpdate=!0;let te=new ve(I,l);te.name="faceDisplay",te.position.set(0,0,.126),$.add(te);let Re=r(new ct(.088,.105,.105,6,.032)),Le=r(new ft(.036,.036,.072,24)),Ge=r(new ct(.066,.135,.072,5,.022)),Je=r(new ft(.038,.038,.078,24)),U=r(new ft(.029,.029,.086,20)),Q=r(new ct(.074,.138,.082,6,.024)),ae=r(new ft(.033,.036,.022,20)),Ae=r(new ft(.027,.027,.024,20)),Ie=r(new ct(.072,.044,.054,4,.012)),Z=r(new ct(.016,.044,.026,3,.005)),ue=r(new ct(.014,.036,.022,3,.004)),ye=r(new ct(.006,.03,.018,2,.002));function ht(Ve){let Be=Ve<0?"left":"right",st=new nt;st.name=`${Be}ShoulderPivot`,st.position.set(Ve*.215,.585,0);let Rt=new nt;Rt.name="upperArm",st.add(Rt);let ui=new ve(Le,s.satinSilver);ui.rotation.z=Math.PI/2,Rt.add(ui);let di=new ve(Re,s.cobaltAccent);di.position.set(Ve*.016,.004,0),Rt.add(di);let Xt=new ve(h.jointCap,s.satinSilver);Xt.rotation.z=Math.PI/2,Xt.position.set(Ve*.061,.004,0),Rt.add(Xt);let $t=new ve(Ge,s.ivoryShell);$t.position.set(Ve*.016,-.095,0),Rt.add($t);let ei=new nt;ei.name="elbowPivot",ei.position.set(Ve*.016,-.185,0),Rt.add(ei);let ti=new nt;ti.name="forearm",ei.add(ti);let Bi=new ve(Je,s.satinSilver);Bi.rotation.z=Math.PI/2,ti.add(Bi);let Yi=new ve(U,s.cobaltAccent);Yi.rotation.z=Math.PI/2,ti.add(Yi);let pn=new ve(Q,s.ivoryShell);pn.position.set(0,-.092,0),ti.add(pn);let fn=new ve(ae,s.darkHardware);fn.position.set(0,-.162,0),ti.add(fn);let fr=new nt;fr.name="wristPivot",fr.position.set(0,-.178,0),ti.add(fr);let S=new nt;S.name="gripper",fr.add(S);let D=new ve(Ae,s.satinSilver);D.position.set(0,-.008,0),S.add(D);let X=new ve(Ie,s.satinSilver);X.position.set(0,-.034,0),S.add(X);let k=new nt;k.name=`${Be}InnerFingerPivot`,k.position.set(-Ve*.022,-.052,0),S.add(k);let H=new nt;H.name=`${Be}OuterFingerPivot`,H.position.set(Ve*.022,-.052,0),S.add(H),[-1,1].forEach(be=>{let Ce=new ve(h.knucklePin,s.darkHardware);Ce.rotation.x=Math.PI/2,Ce.position.set(be*.022,-.052,0),S.add(Ce)});let xe=(be,Ce)=>{let Ue=new ve(Z,s.cobaltAccent);Ue.position.set(0,-.02,0),be.add(Ue);let Xe=new ve(ue,s.satinSilver);Xe.position.set(Ce*.005,-.052,0),Xe.rotation.z=-Ce*.22,be.add(Xe);let Qe=new ve(ye,s.gripPad);Qe.position.set(Ce*.012,-.052,0),Qe.rotation.z=-Ce*.22,be.add(Qe)};return xe(k,Ve),xe(H,-Ve),{shoulderPivot:st,elbowPivot:ei,wristPivot:fr,gripper:S,innerFingerPivot:k,outerFingerPivot:H}}let We=ht(-1),it=ht(1);d.add(We.shoulderPivot),d.add(it.shoulderPivot),c(d);let St={neckPivot:he,head:$,leftShoulderPivot:We.shoulderPivot,leftElbowPivot:We.elbowPivot,leftWristPivot:We.wristPivot,leftInnerFingerPivot:We.innerFingerPivot,leftOuterFingerPivot:We.outerFingerPivot,rightShoulderPivot:it.shoulderPivot,rightElbowPivot:it.elbowPivot,rightWristPivot:it.wristPivot,rightInnerFingerPivot:it.innerFingerPivot,rightOuterFingerPivot:it.outerFingerPivot},Kt={headYaw:0,headPitch:0,headTilt:0,leftShoulder:0,leftElbow:0,rightShoulder:0,rightElbow:0,leftGrip:.2,rightGrip:.2};function It(Ve={}){let Be={...Kt,...Ve};he.rotation.set(Be.headPitch,Be.headYaw,Be.headTilt,"YXZ"),We.shoulderPivot.rotation.set(Be.leftShoulder,0,-.035),We.elbowPivot.rotation.set(Be.leftElbow,0,0),it.shoulderPivot.rotation.set(Be.rightShoulder,0,Be.rightShoulderRoll??.035),it.wristPivot.rotation.x=Be.rightWrist??0,it.elbowPivot.rotation.set(Be.rightElbow,0,0);let st=Ft.clamp(Be.leftGrip,0,1),Rt=Ft.clamp(Be.rightGrip,0,1),ui=-.08,di=.48,Xt=Ft.lerp(ui,di,st);We.innerFingerPivot.rotation.set(0,0,Xt),We.outerFingerPivot.rotation.set(0,0,-Xt);let $t=Ft.lerp(ui,di,Rt);it.innerFingerPivot.children.at(-1).rotation.z=$t,it.outerFingerPivot.children.at(-1).rotation.z=-$t,it.innerFingerPivot.rotation.set(0,0,-$t),it.outerFingerPivot.rotation.set(0,0,$t)}function Wt(Ve="neutral"){let Be=o[Ve]||o.neutral;l.map!==Be&&(l.map=Be,l.emissiveMap=Be,l.needsUpdate=!0)}function Qt(){e.forEach(Ve=>Ve.dispose()),t.forEach(Ve=>Ve.dispose()),i.forEach(Ve=>Ve.dispose()),e.clear(),t.clear(),i.clear()}return It(Kt),Wt("neutral"),{group:d,joints:St,setPose:It,setExpression:Wt,dispose:Qt}}var E0=Object.freeze({shoulderHeight:.585,shoulderOffsetX:.215,elbowLateralOffset:.016,armPlaneX:.231,upperArmLength:.185,forearmToWristLength:.178,wristToKnuckleLength:.052,knuckleToPadCenterLength:.052,elbowToGripCenterLength:.282,shoulderRestingSplayZ:.035,maxGripperOpening:.0596,closedGripperOpening:.0156,jointLimits:{shoulderMin:-1.5,shoulderMax:.5,elbowMin:-1.45,elbowMax:.25}});function Mh(e,t,i){let r=Fi(e,e,i),a=e-t*2,n=Math.max(.002,i-t),s=Fi(a,a,n);r.holes.push(s);let o=new Fr(r,{depth:.0018,bevelEnabled:!1,curveSegments:20});return o.rotateX(-Math.PI/2),o}function uo(e,t){let i=new ua;i.absarc(0,0,e,0,Math.PI*2,!1);let r=new en;r.absarc(0,0,e-t,0,Math.PI*2,!0),i.holes.push(r);let a=new Fr(i,{depth:.0018,bevelEnabled:!1,curveSegments:40});return a.rotateX(-Math.PI/2),a}function Sh(e,t,i=!1){let r=i?new en:new ua,a=e.length;for(let n=0;n<a;n++){let s=e[(n-1+a)%a],o=e[n],l=e[(n+1)%a],h=new Me().subVectors(s,o).normalize(),c=new Me().subVectors(l,o).normalize(),d=o.clone().addScaledVector(h,t),u=o.clone().addScaledVector(c,t);n===0?r.moveTo(d.x,d.y):r.lineTo(d.x,d.y),r.quadraticCurveTo(o.x,o.y,u.x,u.y)}return r.closePath(),r}function yh(e,t){let i=e*.54,r=e*.48,a=-e*.4,n=[new Me(0,r),new Me(-i,a),new Me(i,a)],s=Sh(n,.006,!1),o=t*1.65,l=[new Me(0,r-o*1.35),new Me(-i+o*1.15,a+o*.78),new Me(i-o*1.15,a+o*.78)],h=Sh(l,.003,!0);s.holes.push(h);let c=new Fr(s,{depth:.0018,bevelEnabled:!1,curveSegments:16});return c.rotateX(-Math.PI/2),c}function T0(e,t){let i=new ft(.0035,e/Math.SQRT2,t,4,16,!1);i.rotateY(Math.PI/4),i.translate(0,t/2,0);let r=i.attributes.position,a=new N;for(let n=0;n<r.count;n++){a.fromBufferAttribute(r,n);let s=Ft.clamp(a.y/t,0,1),o=1;if(s<.06){let l=s/.06;o=.96+.04*Math.sin(l*Math.PI*.5)}else if(s>.92){let l=(1-s)/.08;o=.85+.15*Math.sin(l*Math.PI*.5)}r.setXYZ(n,a.x*o,a.y,a.z*o)}return i.computeVertexNormals(),i}function b0(e={}){let t={...E0,...e},i=new Set,r=new Set,a=Z=>(i.add(Z),Z),n=Z=>(r.add(Z),Z),s=Number((t.maxGripperOpening*(1-.161)).toFixed(3)),o=.05,l=.052,h=.054,c={tableWidth:.64,tableDepth:.28,assembledHeight:.296,foldedHeight:.072,topThickness:.022,frameThickness:.014,legLength:.24,legBasePivotY:.028,upperHingeOffsetY:-.028,robotMountZ:-.25,cubeEdgeLength:s,sphereDiameter:o,pyramidBase:l,pyramidHeight:h,maxGripperOpening:t.maxGripperOpening,closedGripperOpening:t.closedGripperOpening,gripperClearanceRatio:(t.maxGripperOpening-s)/t.maxGripperOpening,pickupRowZ:.052,targetRowZ:-.052,columnX:{pyramid:-.185,sphere:.023,cube:t.armPlaneX}},d={ivoryTabletop:n(new Ct({color:15262938,roughness:.36,metalness:.04})),cobaltFrame:n(new Ct({color:2119589,roughness:.38,metalness:.14})),satinSilver:n(new Ct({color:11188421,roughness:.28,metalness:.78})),darkInset:n(new Ct({color:463905,roughness:.48,metalness:.18})),darkPad:n(new Ct({color:1450545,roughness:.76,metalness:.08})),cubeMaterial:n(new Ct({color:2119589,roughness:.34,metalness:.12})),sphereMaterial:n(new Ct({color:11188421,roughness:.26,metalness:.74})),pyramidMaterial:n(new Ct({color:14001998,roughness:.38,metalness:.22})),highlightCubeMat:n(new Ct({color:463905,emissive:7920110,emissiveIntensity:0,roughness:.3,metalness:.1})),highlightSphereMat:n(new Ct({color:463905,emissive:7920110,emissiveIntensity:0,roughness:.3,metalness:.1})),highlightPyramidMat:n(new Ct({color:463905,emissive:7920110,emissiveIntensity:0,roughness:.3,metalness:.1}))},u=new nt;u.name="sortingWorkstation";let f=new nt;f.name="tabletopAssembly",f.position.set(0,c.assembledHeight,0),u.add(f);let _=new nt;_.name="tabletop",f.add(_);let x=a(new ct(c.tableWidth,c.topThickness,c.tableDepth,6,.008)),m=new ve(x,d.ivoryTabletop);m.position.set(0,-c.topThickness/2,0),_.add(m);let p=a(new ct(c.tableWidth-.012,.004,c.tableDepth-.012,4,.002)),A=new ve(p,d.darkInset);A.position.set(0,-c.topThickness-.001,0),_.add(A);let b=a(new ct(.56,.0016,.001,2,5e-4)),M=new ve(b,d.darkInset);M.position.set(0,2e-4,0),_.add(M);let T=a(new ft(.005,.005,.003,16));[[-.295,-.115],[.295,-.115],[-.295,.115],[.295,.115]].forEach(([Z,ue])=>{let ye=new ve(T,d.satinSilver);ye.position.set(Z,-5e-4,ue),_.add(ye)});let w=new nt;w.name="undersideFrame",f.add(w);let P=Fi(.608,.248,.016),v=Fi(.544,.184,.01);P.holes.push(v);let E=a(new Fr(P,{depth:c.frameThickness,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:3,curveSegments:20}));E.rotateX(Math.PI/2);let O=new ve(E,d.cobaltFrame);O.position.set(0,-c.topThickness-.002,0),w.add(O);let R=a(new ft(.014,.014,.196,20)),V=a(new ft(.007,.007,.214,16)),j=a(new ct(.028,.024,.018,3,.004)),B=.26;[-1,1].forEach(Z=>{let ue=Z*B,ye=c.upperHingeOffsetY,ht=new ve(R,d.satinSilver);ht.rotation.x=Math.PI/2,ht.position.set(ue,ye,0),w.add(ht);let We=new ve(V,d.darkInset);We.rotation.x=Math.PI/2,We.position.set(ue,ye,0),w.add(We),[-.082,.082].forEach(it=>{let St=new ve(j,d.cobaltFrame);St.position.set(ue,ye+.006,it),w.add(St)})});let G=new nt;G.name="targetInlays",f.add(G);let q=a(uo(.032,.003)),z=a(new ft(.004,.004,.0016,16));["pyramid","sphere","cube"].forEach(Z=>{let ue=c.columnX[Z],ye=c.pickupRowZ,ht=new ve(q,d.darkInset);ht.position.set(ue,-6e-4,ye),G.add(ht);let We=new ve(z,d.satinSilver);We.position.set(ue,-2e-4,ye),G.add(We)});let ne=a(Mh(.072,.0065,.008)),re=a(uo(.037,.0065)),se=a(yh(.078,.0065)),Se=new ve(ne,d.darkInset);Se.name="cubeTargetInlay",Se.position.set(c.columnX.cube,-6e-4,c.targetRowZ),G.add(Se);let Pe=new ve(re,d.darkInset);Pe.name="sphereTargetInlay",Pe.position.set(c.columnX.sphere,-6e-4,c.targetRowZ),G.add(Pe);let Ze=new ve(se,d.darkInset);Ze.name="pyramidTargetInlay",Ze.position.set(c.columnX.pyramid,-6e-4,c.targetRowZ),G.add(Ze);let et=new nt;et.name="highlight",f.add(et);let K=a(Mh(.068,.0032,.006)),le=a(uo(.035,.0032)),Ee=a(yh(.074,.0032)),he=new ve(K,d.highlightCubeMat);he.name="cubeHighlight",he.position.set(c.columnX.cube,-1e-4,c.targetRowZ),et.add(he);let Ne=new ve(le,d.highlightSphereMat);Ne.name="sphereHighlight",Ne.position.set(c.columnX.sphere,-1e-4,c.targetRowZ),et.add(Ne);let He=new ve(Ee,d.highlightPyramidMat);He.name="pyramidHighlight",He.position.set(c.columnX.pyramid,-1e-4,c.targetRowZ),et.add(He);let fe=new nt;fe.name="pickupAndTargetAnchors",f.add(fe);let me=(Z,ue,ye,ht,We=fe)=>{let it=new Vt;return it.name=Z,it.position.set(ue,ye,ht),We.add(it),it},W=new Vt;W.name="robotMount",W.position.set(0,0,c.robotMountZ),W.rotation.set(0,0,0),u.add(W);let $={robotMount:W,cubePickup:me("cubePickup",c.columnX.cube,0,c.pickupRowZ),cubeTarget:me("cubeTarget",c.columnX.cube,0,c.targetRowZ),cubeApproach:me("cubeApproach",c.columnX.cube,.085,c.pickupRowZ),cubeLift:me("cubeLift",c.columnX.cube,.105,0),spherePickup:me("spherePickup",c.columnX.sphere,0,c.pickupRowZ),sphereTarget:me("sphereTarget",c.columnX.sphere,0,c.targetRowZ),pyramidPickup:me("pyramidPickup",c.columnX.pyramid,0,c.pickupRowZ),pyramidTarget:me("pyramidTarget",c.columnX.pyramid,0,c.targetRowZ)},J=new nt;J.name="supportBaseFeet",u.add(J);let ce=a(new ct(.052,.016,.236,4,.005)),pe=a(new ct(.056,.006,.24,3,.002)),_e=a(new ct(.036,.028,.022,3,.005)),Te=a(new De(.007,.52));function De(Z,ue){let ye=new ft(Z,Z,ue,16);return ye.rotateZ(Math.PI/2),ye}let Oe=new ve(Te,d.darkInset);Oe.position.set(0,.012,-.095),J.add(Oe);let L=a(new ct(.018,c.legLength,.026,4,.005)),Ke=a(new ft(.0155,.0155,.028,20));function ke(Z){let ue=Z<0,ye=Z*B,ht=new ve(pe,d.darkPad);ht.position.set(ye,.003,0),J.add(ht);let We=new ve(ce,d.cobaltFrame);We.position.set(ye,.012,0),J.add(We),[-.082,.082].forEach(Wt=>{let Qt=new ve(_e,d.cobaltFrame);Qt.position.set(ye,.022,Wt),J.add(Qt)});let it=new ve(R,d.satinSilver);it.rotation.x=Math.PI/2,it.position.set(ye,c.legBasePivotY,0),J.add(it);let St=new ve(V,d.darkInset);St.rotation.x=Math.PI/2,St.position.set(ye,c.legBasePivotY,0),J.add(St);let Kt=new nt;Kt.name=ue?"leftSupportPivot":"rightSupportPivot",Kt.position.set(ye,c.legBasePivotY,0),u.add(Kt);let It=new nt;return It.name=ue?"leftSupportFrame":"rightSupportFrame",Kt.add(It),[-.056,.056].forEach(Wt=>{let Qt=new ve(L,d.satinSilver);Qt.position.set(0,c.legLength/2,Wt),It.add(Qt);let Ve=new ve(Ke,d.satinSilver);Ve.rotation.x=Math.PI/2,Ve.position.set(0,0,Wt),It.add(Ve);let Be=new ve(Ke,d.satinSilver);Be.rotation.x=Math.PI/2,Be.position.set(0,c.legLength,Wt),It.add(Be)}),[.075,.165].forEach(Wt=>{let Qt=new ve(a(new ft(.0075,.0075,.112,16)),d.cobaltFrame);Qt.rotation.x=Math.PI/2,Qt.position.set(0,Wt,0),It.add(Qt)}),{supportPivot:Kt,supportFrame:It}}let Fe=ke(-1),y=ke(1),g=new nt;g.name="movableObjects",f.add(g);let C=new nt;C.name="cube";let F=a(new ct(s,s,s,5,.0045));F.translate(0,s/2,0);let Y=new ve(F,d.cubeMaterial);Y.name="cubeMesh",C.add(Y),C.userData.material=d.cubeMaterial,g.add(C);let ee=new nt;ee.name="sphere";let de=o/2,I=a(new Pl(de,36,28));I.translate(0,de,0);let ie=new ve(I,d.sphereMaterial);ie.name="sphereMesh",ee.add(ie),ee.userData.material=d.sphereMaterial,g.add(ee);let oe=new nt;oe.name="pyramid";let ge=a(T0(l,h)),te=new ve(ge,d.pyramidMaterial);te.name="pyramidMesh",oe.add(te),oe.userData.material=d.pyramidMaterial,g.add(oe);function Re(){C.parent!==g&&g.add(C),ee.parent!==g&&g.add(ee),oe.parent!==g&&g.add(oe),C.position.copy($.cubePickup.position),C.rotation.set(0,0,0),C.scale.set(1,1,1),ee.position.copy($.spherePickup.position),ee.rotation.set(0,0,0),ee.scale.set(1,1,1),oe.position.copy($.pyramidPickup.position),oe.rotation.set(0,0,0),oe.scale.set(1,1,1)}Re(),u.traverse(Z=>{Z.isMesh&&(Z.castShadow=!0,Z.receiveShadow=!0)});let Le=[],Ge=[];w.children.forEach(Z=>{Z.position.x<-.1&&Le.push({mesh:Z,baseX:Z.position.x}),Z.position.x>.1&&Ge.push({mesh:Z,baseX:Z.position.x})});function Je(Z=1){let ue=Ft.clamp(Number(Z),0,1),ye=Ft.lerp(c.foldedHeight,c.assembledHeight,ue);f.position.set(0,ye,0);let ht=ye+c.upperHingeOffsetY,We=Ft.clamp(ht-c.legBasePivotY,.01,c.legLength),it=Ft.clamp(We/c.legLength,0,1),St=Math.acos(it),Kt=c.legLength*Math.sin(St);Fe.supportPivot.rotation.set(0,0,-St),y.supportPivot.rotation.set(0,0,St),Le.forEach(It=>{It.mesh.position.x=It.baseX+Kt}),Ge.forEach(It=>{It.mesh.position.x=It.baseX-Kt})}let U={cube:d.highlightCubeMat,sphere:d.highlightSphereMat,pyramid:d.highlightPyramidMat},Q=new at(7440791),ae=new at(7920110);function Ae(Z=null,ue=1){let ye=Ft.clamp(Number(ue),0,1);Object.entries(U).forEach(([ht,We])=>{let it=ht===Z&&ye>0?ye:0;We.color.copy(Q).lerp(ae,it*.85),We.emissiveIntensity=it*.72})}function Ie(){i.forEach(Z=>Z.dispose()),r.forEach(Z=>Z.dispose()),i.clear(),r.clear()}return Je(1),Ae("cube",1),{group:u,table:{tabletopAssembly:f,tabletop:_,undersideFrame:w,leftSupportPivot:Fe.supportPivot,leftSupportFrame:Fe.supportFrame,rightSupportPivot:y.supportPivot,rightSupportFrame:y.supportFrame},objects:{group:g,cube:C,sphere:ee,pyramid:oe,materials:{cube:d.cubeMaterial,sphere:d.sphereMaterial,pyramid:d.pyramidMaterial}},targets:{group:G,highlights:et,cubeInlay:Se,sphereInlay:Pe,pyramidInlay:Ze},anchors:$,dimensions:c,setFold:Je,setHighlight:Ae,resetObjects:Re,dispose:Ie}}var po=e=>Math.max(0,Math.min(1,e)),kr=e=>{let t=po(e);return t*t*t*(t*(t*6-15)+10)},w0=1.45;function A0(){let e=new nt;e.name="ai-learning-workshop";let t=new nt;t.scale.setScalar(w0),e.add(t);let i=y0(),r=b0();t.add(i.group,r.group),i.group.position.z=-.25;let a=[i.joints.rightInnerFingerPivot,i.joints.rightOuterFingerPivot].map(b=>b.children[b.children.length-1]),n=r.dimensions.assembledHeight+r.dimensions.cubeEdgeLength/2,s=new N(.231,n,.052),o=new N(.231,n,-.052),l=[new N,new N];function h(b,M,T){let w=-.08+.56*M,P=.052+.052*Math.cos(w)+.012*Math.sin(w),v=b.y+P-.585,E=b.z+.25,O=.185,R=.178,V=(v*v+E*E-O*O-R*R)/(2*O*R),j=-Math.acos(Ft.clamp(V,-1,1)),B=Math.atan2(-E,-v)-Math.atan2(R*Math.sin(j),O+R*Math.cos(j));i.setPose({headPitch:.22*(1-kr((T-.85)/.15)),headYaw:-.13,leftElbow:-.12,rightShoulder:B,rightElbow:j,rightWrist:-B-j,rightShoulderRoll:0,rightGrip:M})}let c=0,d=1;for(let b=0;b<24;b++){let M=(c+d)/2;h(s,M,0),t.updateMatrixWorld(!0),a.forEach((T,w)=>t.worldToLocal(T.getWorldPosition(l[w]))),Math.abs(l[0].x-l[1].x)-.006<r.dimensions.cubeEdgeLength?c=M:d=M}let u=(c+d)/2,f=[0,.24,.39,.48,.59,.72,.82,.9,1],_=[s.clone().add(new N(0,.065,-.055)),s.clone().add(new N(0,.065,0)),s.clone(),s.clone(),s.clone().add(new N(0,.055,0)),o.clone().add(new N(0,.055,0)),o.clone(),o.clone(),o.clone().add(new N(0,.065,0))],x=new N,m=-1,p=-1;function A(b,M=0){let T=po(b),w=po(M);if(m===T&&p===w||(m=T,p=w,e.visible=T>.001,!e.visible))return;r.setFold(T);let P=kr((T-.12)/.88);i.group.scale.y=.015+.985*P,i.group.rotation.x=-.3*(1-P);for(let O of[r.objects.cube,r.objects.sphere,r.objects.pyramid])O.scale.setScalar(kr((T-.2)/.6));let v=0;for(;v<f.length-2&&w>f[v+1];)v++;x.copy(_[v]).lerp(_[v+1],kr((w-f[v])/(f[v+1]-f[v])));let E=w<.39?1:w<.48?Ft.lerp(1,u,kr((w-.39)/.09)):w<.82?u:w<.9?Ft.lerp(u,1,kr((w-.82)/.08)):1;if(h(x,E,w),r.resetObjects(),T>=.999){let O=w<.48?s:w>.82?o:x;r.objects.cube.position.set(O.x,O.y-n,O.z)}i.setExpression(w<.16?"curious":w<.82?"recognised":"satisfied"),r.setHighlight(w>.16?"cube":null,w>.82?1:.7)}return A(0,0),{group:e,update:A,dispose(){i.dispose(),r.dispose()}}}window.createNexaGift=function(e){const t={BoxGeometry:la,BufferGeometry:Zt,CatmullRomCurve3:gl,Color:at,Float32BufferAttribute:vt,Group:nt,MathUtils:Ft,Mesh:ve,MeshStandardMaterial:Ct,Vector2:Me,Vector3:N},i=new nl,r=new Jt(25,1,.1,30);r.position.set(-4.15,3.15,9.65),r.lookAt(0,.37,0);const a=new xh({alpha:!0,antialias:!0,powerPreference:"low-power"});a.setPixelRatio(Math.min(devicePixelRatio,1.5)),a.outputColorSpace=zt,i.add(new Dl(16182015,9325798,2.5));const n=new on(16775679,3),s=new on(16769710,1.4);n.position.set(-5.2,7.8,6.4),s.position.set(4,5,-4),i.add(n,s);const o=new t.MeshStandardMaterial({color:new t.Color("#A938FF"),emissive:new t.Color("#300568"),emissiveIntensity:.24,roughness:.18,metalness:.02}),l=new t.MeshStandardMaterial({color:new t.Color("#FFBF10"),emissive:new t.Color("#6E3500"),emissiveIntensity:.22,roughness:.23,metalness:.22}),h=new t.Group;i.add(h);function c(fe,me,W,$){const{halfW:J,halfH:ce,halfD:pe,cornerRadius:_e,inflateAmount:Te=0,bottomPuff:De=0,topDome:Oe=0,seamCurve:L=0,isLid:Ke=!1}=$,ke=fe*J,Fe=me*ce,y=W*pe,g=Math.max(.001,J-_e),C=Math.max(.001,ce-_e),F=Math.max(.001,pe-_e),Y=Math.max(-g,Math.min(g,ke)),ee=Math.max(-C,Math.min(C,Fe)),de=Math.max(-F,Math.min(F,y)),I=ke-Y,ie=Fe-ee,oe=y-de;let ge=Y,te=ee,Re=de;const Le=Math.sqrt(I*I+ie*ie+oe*oe);if(Le>1e-6){const Q=Math.max(Math.abs(I),Math.abs(ie),Math.abs(oe))/_e*_e/Le;ge+=I*Q,te+=ie*Q,Re+=oe*Q}if(Te!==0){const Je=Math.max(0,1-ge/J*(ge/J)),U=Math.max(0,1-te/ce*(te/ce)),Q=Math.max(0,1-Re/pe*(Re/pe));ge+=Math.sign(ge)*Te*U*Q*(Math.abs(ge)/J),Re+=Math.sign(Re)*Te*U*Je*(Math.abs(Re)/pe)}const Ge=Math.max(0,(1-Math.pow(ge/J,2))*(1-Math.pow(Re/pe,2)));if(d(me)>0&&Oe!==0&&(te+=Oe*Ge*Math.max(0,me)),d(me)<0&&De!==0&&(te-=De*Ge*Math.max(0,-me)),L!==0){const Je=(1-Math.min(1,Math.pow(ge/J,2)*Math.pow(Re/pe,2)))*L;if(Ke&&me<.2){const U=Math.max(0,(.2-me)/1.2);te-=Je*U}else if(!Ke&&me>-.2){const U=Math.max(0,(me+.2)/1.2);te-=Je*U}}return new t.Vector3(ge,te,Re)}function d(fe){return fe>=0?1:-1}function u(fe,me=48){const W=new t.BoxGeometry(2,2,2,me,me,me),$=W.attributes.position,J=new t.Vector3;for(let ce=0;ce<$.count;ce++){J.fromBufferAttribute($,ce);const pe=c(J.x,J.y,J.z,fe);$.setXYZ(ce,pe.x,pe.y,pe.z)}return W.computeVertexNormals(),W}const f=-.34,_={halfW:1.04,halfH:.72,halfD:1.04,cornerRadius:.16,inflateAmount:.008,bottomPuff:.006,topDome:0,seamCurve:.004,isLid:!1},x=.715,m={halfW:1.075,halfH:.325,halfD:1.075,cornerRadius:.16,inflateAmount:.008,bottomPuff:0,topDome:.012,seamCurve:.004,isLid:!0},p=new t.Group;h.add(p);const A=u(_,24),b=new t.Mesh(A,o);b.position.y=f,b.castShadow=!0,b.receiveShadow=!0,p.add(b);const M=u(m,24),T=new t.Mesh(M,o);T.position.y=x,T.castShadow=!0,T.receiveShadow=!0,p.add(T);const w={halfW:1,halfH:.1,halfD:1,cornerRadius:.14,inflateAmount:0,bottomPuff:0,topDome:0,seamCurve:0,isLid:!1},P=new t.MeshStandardMaterial({color:new t.Color("#5A12A8"),roughness:.35,metalness:0}),v=new t.Mesh(u(w,16),P);v.position.y=.385,p.add(v);function E(fe,me){const W=Math.cos(fe),$=Math.sin(fe),J=f-_.halfH,ce=x+m.halfH,pe=.5*(J+ce),_e=.5*(ce-J),Te=Math.max(Math.abs(W),Math.abs($))||1,De=W/Te,Oe=$/Te,L=pe+Oe*_e,Ke=.385,ke=me==="z"?De:0,Fe=me==="x"?De:0,y=Math.max(-1,Math.min(1,(L-f)/_.halfH)),g=c(ke,y,Fe,_);g.y+=f;const C=Math.max(-1,Math.min(1,(L-x)/m.halfH)),F=c(ke,C,Fe,m);F.y+=x;const Y=.035,ee=t.MathUtils.smoothstep(L,Ke-Y,Ke+Y);return new t.Vector3().lerpVectors(g,F,ee)}function O(fe="x",me=.44,W=.034){const ce=[];for(let g=0;g<160;g++){const C=g/160*Math.PI*2;ce.push(E(C,fe))}const Te=new t.CatmullRomCurve3(ce,!0,"centripetal",.25).getSpacedPoints(160),De=[];for(let g=0;g<=18;g++){const C=g/18*Math.PI*2,F=Math.cos(C),Y=Math.sin(C),ee=Math.sign(F)*Math.pow(Math.abs(F),.35)*(me*.5),de=Math.sign(Y)*Math.pow(Math.abs(Y),.65)*(W*.5);De.push(new t.Vector2(ee,de))}const Oe=[],L=[],Ke=[],ke=fe==="x"?new t.Vector3(1,0,0):new t.Vector3(0,0,1);for(let g=0;g<=160;g++){const C=g%160,F=(C-1+160)%160,Y=(C+1)%160,ee=Te[C],de=new t.Vector3().subVectors(Te[Y],Te[F]).normalize(),I=new t.Vector3().crossVectors(de,ke).normalize();I.dot(ee)<0&&I.negate();const ie=W*.42+(fe==="x"?.003:0);for(let oe=0;oe<=18;oe++){const ge=De[oe],te=ee.x+ke.x*ge.x+I.x*(ge.y+ie),Re=ee.y+ke.y*ge.x+I.y*(ge.y+ie),Le=ee.z+ke.z*ge.x+I.z*(ge.y+ie);Oe.push(te,Re,Le),L.push(g/160,oe/18)}}const Fe=19;for(let g=0;g<160;g++)for(let C=0;C<18;C++){const F=g*Fe+C,Y=(g+1)*Fe+C,ee=(g+1)*Fe+(C+1),de=g*Fe+(C+1);Ke.push(F,Y,de),Ke.push(Y,ee,de)}const y=new t.BufferGeometry;return y.setAttribute("position",new t.Float32BufferAttribute(Oe,3)),y.setAttribute("uv",new t.Float32BufferAttribute(L,2)),y.setIndex(Ke),y.computeVertexNormals(),y}const R=new t.Mesh(O("x",.44,.036),l);R.castShadow=!0,R.receiveShadow=!0,p.add(R);const V=new t.Mesh(O("z",.44,.036),l);V.castShadow=!0,V.receiveShadow=!0,p.add(V);function j({spinePoints:fe,baseWidth:me=.56,thickness:W=.044,pinchStart:$=.42,pinchEnd:J=.42,cupAmount:ce=.028}){const pe=new t.CatmullRomCurve3(fe,!1,"centripetal",.45),_e=120,Te=20,De=pe.getSpacedPoints(_e),Oe=[],L=[],Ke=[];for(let y=0;y<=Te;y++){const g=y/Te*Math.PI*2,C=Math.cos(g),F=Math.sin(g),Y=Math.sign(C)*Math.pow(Math.abs(C),.42),ee=Math.sign(F)*Math.pow(Math.abs(F),.72);Ke.push(new t.Vector2(Y,ee))}for(let y=0;y<=_e;y++){const g=y/_e,C=De[y],F=De[Math.max(0,y-1)],Y=De[Math.min(_e,y+1)],ee=new t.Vector3().subVectors(Y,F).normalize(),de=new t.Vector3(0,0,1),I=new t.Vector3().crossVectors(ee,de).normalize(),ie=new t.Vector3().crossVectors(I,ee).normalize(),oe=Math.sin(g*Math.PI),ge=(1-g)*$+g*J,te=me*(ge+(1-ge)*Math.pow(oe,.65)),Re=ce*Math.sin(g*Math.PI*2);for(let Le=0;Le<=Te;Le++){const Ge=Ke[Le],Je=Ge.x*(te*.5),U=Ge.y*(W*.5)+Ge.x*Ge.x*Re,Q=C.x+ie.x*Je+I.x*U,ae=C.y+ie.y*Je+I.y*U,Ae=C.z+ie.z*Je+I.z*U;Oe.push(Q,ae,Ae)}}const ke=Te+1;for(let y=0;y<_e;y++)for(let g=0;g<Te;g++){const C=y*ke+g,F=(y+1)*ke+g,Y=(y+1)*ke+(g+1),ee=y*ke+(g+1);L.push(C,F,ee),L.push(F,Y,ee)}const Fe=new t.BufferGeometry;return Fe.setAttribute("position",new t.Float32BufferAttribute(Oe,3)),Fe.setIndex(L),Fe.computeVertexNormals(),Fe}const B=new t.Group;B.position.set(0,1.055,0),p.add(B);function G(fe=1,me=1,W=0){return[new t.Vector3(.03*fe,.025*me,.02+W*.1),new t.Vector3(.24*fe,.075*me,.04+W*.25),new t.Vector3(.46*fe,.36*me,.03+W*.45),new t.Vector3(.76*fe,.44*me,0+W*.7),new t.Vector3(1*fe,.31*me,-.02+W*.9),new t.Vector3(1.03*fe,.1*me,-.01+W*1),new t.Vector3(.84*fe,-.01*me,.02+W*.8),new t.Vector3(.46*fe,-.015*me,.03+W*.45),new t.Vector3(.05*fe,.012*me,.01+W*.1)]}const q=j({spinePoints:G(1.02,1,0),baseWidth:.56,thickness:.045,pinchStart:.46,pinchEnd:.52,cupAmount:.022}),z=new t.Mesh(q,l);z.rotation.y=Math.PI-.36,z.rotation.z=-.03,z.castShadow=!0,z.receiveShadow=!0,B.add(z);const ne=j({spinePoints:G(1.02,1,0),baseWidth:.56,thickness:.045,pinchStart:.46,pinchEnd:.52,cupAmount:.022}),re=new t.Mesh(ne,l);re.rotation.y=-.34,re.rotation.z=.03,re.castShadow=!0,re.receiveShadow=!0,B.add(re);const se=j({spinePoints:G(.95,1.14,0),baseWidth:.54,thickness:.044,pinchStart:.44,pinchEnd:.48,cupAmount:-.02}),Se=new t.Mesh(se,l);Se.rotation.y=Math.PI+.46,Se.rotation.x=.06,Se.position.y=.02,Se.castShadow=!0,Se.receiveShadow=!0,B.add(Se);const Pe=j({spinePoints:G(.95,1.14,0),baseWidth:.54,thickness:.044,pinchStart:.44,pinchEnd:.48,cupAmount:-.02}),Ze=new t.Mesh(Pe,l);Ze.rotation.y=.48,Ze.rotation.x=.06,Ze.position.y=.02,Ze.castShadow=!0,Ze.receiveShadow=!0,B.add(Ze);const et=[new t.Vector3(0,-.01,-.2),new t.Vector3(0,.085,-.14),new t.Vector3(0,.115,0),new t.Vector3(0,.085,.14),new t.Vector3(0,-.01,.2)],K=j({spinePoints:et,baseWidth:.34,thickness:.048,pinchStart:.78,pinchEnd:.78,cupAmount:-.015});K.rotateY(Math.PI*.5);const le=new t.Mesh(K,l);le.position.set(0,.01,.02),le.castShadow=!0,le.receiveShadow=!0,B.add(le),B.rotation.y=.12;const Ee=new t.Group;p.add(Ee),Ee.add(T,B);for(const fe of[R,V]){const me=fe.geometry,W=me.getAttribute("position"),$=me.getIndex().array,J=[],ce=[];for(let _e=0;_e<$.length;_e+=3){const Te=$[_e],De=$[_e+1],Oe=$[_e+2];((W.getY(Te)+W.getY(De)+W.getY(Oe))/3>.385?J:ce).push(Te,De,Oe)}const pe=me.clone();pe.setIndex(J),me.setIndex(ce),Ee.add(new t.Mesh(pe,l))}h.rotation.set(.035,.08,-.048);const he=a.domElement;he.addEventListener("webglcontextlost",()=>{delete e.dataset.rendered}),e.append(he);let Ne,He;return function(me){const W=e.clientWidth,$=e.clientHeight;if(!W||!$||a.getContext().isContextLost())return;(W!==Ne||$!==He)&&(Ne=W,He=$,r.aspect=W/$,r.updateProjectionMatrix(),a.setSize(W,$,!1));const J=1-Math.pow(1-me,3),ce=Math.sin(me*Math.PI)*.16;Ee.position.set(J*.33,J*.92+ce,J*-.16),Ee.rotation.set(J*-.15,J*-.12,J*-.22),a.render(i,r),e.dataset.rendered=""}};var Eh=document.querySelector("#robot-journey"),Th=document.querySelector("#robot-canvas"),bh=matchMedia("(prefers-reduced-motion: reduce)");if(Eh&&Th){let e=Eh,t=Th;try{let i=function(){if(d=0,!c||document.hidden)return;let f=e.getBoundingClientRect(),_=Math.min(80,innerHeight*.1),x=Math.max(1,e.offsetHeight-t.clientHeight-_),m=Ft.clamp((_-f.top)/x,0,1),p=bh.matches?1:Ft.smootherstep(m,.08,.92),A=t.clientWidth,b=t.clientHeight;if(!A||!b)return;a.setSize(A,b,!1),s.aspect=A/b;let M=Math.sin(p*Math.PI)*(s.aspect<1?.1:.16);s.position.set(...s.aspect<1?[1.75-M,1.35-M*.35,2.7-M]:[1.4-M,1.15-M*.35,2.1-M]),s.lookAt(-.1,.54,-.08),s.updateProjectionMatrix(),h.update(1,p),a.render(n,s),e.dataset.ready="true"},r=function(){d||(d=requestAnimationFrame(i))};R0=i,C0=r;let a=new xh({canvas:t,antialias:!0,alpha:!0});a.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.25:1.5)),a.outputColorSpace=zt;let n=new nl,s=new Jt(38,1,.01,30);s.position.set(1.4,1.15,2.1),s.lookAt(-.1,.54,-.08),n.add(new Dl(14282751,1520722,2));let o=new on(16777215,3);o.position.set(-1.5,3,2),n.add(o);let l=new on(7650803,2);l.position.set(1,1,-2),n.add(l);let h=A0();h.group.scale.setScalar(1/1.45),n.add(h.group);let c=!1,d=0,u=new IntersectionObserver(f=>{c=f[0].isIntersecting,c&&r()},{rootMargin:"100px"});u.observe(e),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),document.addEventListener("visibilitychange",r),bh.addEventListener("change",r),t.addEventListener("webglcontextlost",f=>{f.preventDefault(),delete e.dataset.ready}),t.addEventListener("webglcontextrestored",r),window.addEventListener("pagehide",()=>{u.disconnect(),h.dispose(),a.dispose()},{once:!0})}catch(i){console.warn("Robot scene unavailable",i)}}var R0,C0})();
