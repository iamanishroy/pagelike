(()=>{var dr=Object.create;var Ne=Object.defineProperty;var mr=Object.getOwnPropertyDescriptor;var vr=Object.getOwnPropertyNames;var wr=Object.getPrototypeOf,yr=Object.prototype.hasOwnProperty;var c=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var Er=function(t,e,r,n){if(e&&typeof e=="object"||typeof e=="function")for(var i=vr(e),s=0,o=i.length,a;s<o;s++)a=i[s],!yr.call(t,a)&&a!==r&&Ne(t,a,{get:function(l){return e[l]}.bind(null,a),enumerable:!(n=mr(e,a))||n.enumerable});return t};var ke=function(t,e,r){return r=t!=null?dr(wr(t)):{},Er(e||!t||!t.__esModule?Ne(r,"default",{value:t,enumerable:!0}):r,t)};var R=function(t,e,r){return new Promise(function(n,i){var s=function(l){try{a(r.next(l))}catch(p){i(p)}},o=function(l){try{a(r.throw(l))}catch(p){i(p)}},a=function(l){return l.done?n(l.value):Promise.resolve(l.value).then(s,o)};a((r=r.apply(t,e)).next())})};var Q=c((_n,Te)=>{"use strict";Te.exports=function(e,r){return function(){for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];return e.apply(r,i)}}});var h=c((In,De)=>{"use strict";var br=Q(),G=Object.prototype.toString,ee=function(t){return function(e){var r=G.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function C(t){return t=t.toLowerCase(),function(r){return ee(r)===t}}function te(t){return Array.isArray(t)}function M(t){return typeof t>"u"}function Rr(t){return t!==null&&!M(t)&&t.constructor!==null&&!M(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Pe=C("ArrayBuffer");function xr(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Pe(t.buffer),e}function qr(t){return typeof t=="string"}function Ar(t){return typeof t=="number"}function Ue(t){return t!==null&&typeof t=="object"}function F(t){if(ee(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var Or=C("Date"),gr=C("File"),Cr=C("Blob"),Sr=C("FileList");function re(t){return G.call(t)==="[object Function]"}function Lr(t){return Ue(t)&&re(t.pipe)}function Nr(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||G.call(t)===e||re(t.toString)&&t.toString()===e)}var kr=C("URLSearchParams");function Tr(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Pr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ne(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),te(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function Z(){var t={};function e(i,s){F(t[s])&&F(i)?t[s]=Z(t[s],i):F(i)?t[s]=Z({},i):te(i)?t[s]=i.slice():t[s]=i}for(var r=0,n=arguments.length;r<n;r++)ne(arguments[r],e);return t}function Ur(t,e,r){return ne(e,function(i,s){r&&typeof i=="function"?t[s]=br(i,r):t[s]=i}),t}function Dr(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function Br(t,e,r,n){t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function _r(t,e,r){var n,i,s,o={};e=e||{};do{for(n=Object.getOwnPropertyNames(t),i=n.length;i-- >0;)s=n[i],o[s]||(e[s]=t[s],o[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function Ir(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var n=t.indexOf(e,r);return n!==-1&&n===r}function jr(t){if(!t)return null;var e=t.length;if(M(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var Fr=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array));De.exports={isArray:te,isArrayBuffer:Pe,isBuffer:Rr,isFormData:Nr,isArrayBufferView:xr,isString:qr,isNumber:Ar,isObject:Ue,isPlainObject:F,isUndefined:M,isDate:Or,isFile:gr,isBlob:Cr,isFunction:re,isStream:Lr,isURLSearchParams:kr,isStandardBrowserEnv:Pr,forEach:ne,merge:Z,extend:Ur,trim:Tr,stripBOM:Dr,inherits:Br,toFlatObject:_r,kindOf:ee,kindOfTest:C,endsWith:Ir,toArray:jr,isTypedArray:Fr,isFileList:Sr}});var ie=c((jn,_e)=>{"use strict";var N=h();function Be(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}_e.exports=function(e,r,n){if(!r)return e;var i;if(n)i=n(r);else if(N.isURLSearchParams(r))i=r.toString();else{var s=[];N.forEach(r,function(l,p){l===null||typeof l>"u"||(N.isArray(l)?p=p+"[]":l=[l],N.forEach(l,function(u){N.isDate(u)?u=u.toISOString():N.isObject(u)&&(u=JSON.stringify(u)),s.push(Be(p)+"="+Be(u))}))}),i=s.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}});var je=c((Fn,Ie)=>{"use strict";var Mr=h();function H(){this.handlers=[]}H.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};H.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};H.prototype.forEach=function(e){Mr.forEach(this.handlers,function(n){n!==null&&e(n)})};Ie.exports=H});var Me=c((Mn,Fe)=>{"use strict";var Hr=h();Fe.exports=function(e,r){Hr.forEach(e,function(i,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=i,delete e[s])})}});var S=c((Hn,Ve)=>{"use strict";var He=h();function k(t,e,r,n,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}He.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ze=k.prototype,Je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Je[t]={value:t}});Object.defineProperties(k,Je);Object.defineProperty(ze,"isAxiosError",{value:!0});k.from=function(t,e,r,n,i,s){var o=Object.create(ze);return He.toFlatObject(t,o,function(l){return l!==Error.prototype}),k.call(o,t.message,e,r,n,i),o.name=t.name,s&&Object.assign(o,s),o};Ve.exports=k});var se=c((zn,We)=>{"use strict";We.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}});var oe=c((Jn,Ke)=>{"use strict";var b=h();function zr(t,e){e=e||new FormData;var r=[];function n(s){return s===null?"":b.isDate(s)?s.toISOString():b.isArrayBuffer(s)||b.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function i(s,o){if(b.isPlainObject(s)||b.isArray(s)){if(r.indexOf(s)!==-1)throw Error("Circular reference detected in "+o);r.push(s),b.forEach(s,function(l,p){if(!b.isUndefined(l)){var f=o?o+"."+p:p,u;if(l&&!o&&typeof l=="object"){if(b.endsWith(p,"{}"))l=JSON.stringify(l);else if(b.endsWith(p,"[]")&&(u=b.toArray(l))){u.forEach(function(m){!b.isUndefined(m)&&e.append(f,n(m))});return}}i(l,f)}}),r.pop()}else e.append(o,n(s))}return i(t),e}Ke.exports=zr});var $e=c((Vn,Xe)=>{"use strict";var ae=S();Xe.exports=function(e,r,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):r(new ae("Request failed with status code "+n.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}});var Qe=c((Wn,Ye)=>{"use strict";var z=h();Ye.exports=z.isStandardBrowserEnv()?function(){return{write:function(r,n,i,s,o,a){var l=[];l.push(r+"="+encodeURIComponent(n)),z.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),z.isString(s)&&l.push("path="+s),z.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()});var Ge=c((Kn,Ze)=>{"use strict";Ze.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}});var tt=c((Xn,et)=>{"use strict";et.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e}});var ue=c(($n,rt)=>{"use strict";var Jr=Ge(),Vr=tt();rt.exports=function(e,r){return e&&!Jr(r)?Vr(e,r):r}});var it=c((Yn,nt)=>{"use strict";var fe=h(),Wr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];nt.exports=function(e){var r={},n,i,s;return e&&fe.forEach(e.split(`
`),function(a){if(s=a.indexOf(":"),n=fe.trim(a.substr(0,s)).toLowerCase(),i=fe.trim(a.substr(s+1)),n){if(r[n]&&Wr.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([i]):r[n]=r[n]?r[n]+", "+i:i}}),r}});var at=c((Qn,ot)=>{"use strict";var st=h();ot.exports=st.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function i(s){var o=s;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(o){var a=st.isString(o)?i(o):o;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}()});var B=c((Zn,ft)=>{"use strict";var le=S(),Kr=h();function ut(t){le.call(this,t==null?"canceled":t,le.ERR_CANCELED),this.name="CanceledError"}Kr.inherits(ut,le,{__CANCEL__:!0});ft.exports=ut});var ct=c((Gn,lt)=>{"use strict";lt.exports=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}});var ce=c((ei,pt)=>{"use strict";var _=h(),Xr=$e(),$r=Qe(),Yr=ie(),Qr=ue(),Zr=it(),Gr=at(),en=se(),A=S(),tn=B(),rn=ct();pt.exports=function(e){return new Promise(function(n,i){var s=e.data,o=e.headers,a=e.responseType,l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}_.isFormData(s)&&_.isStandardBrowserEnv()&&delete o["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(u+":"+m)}var v=Qr(e.baseURL,e.url);f.open(e.method.toUpperCase(),Yr(v,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function Se(){if(!!f){var E="getAllResponseHeaders"in f?Zr(f.getAllResponseHeaders()):null,L=!a||a==="text"||a==="json"?f.responseText:f.response,g={data:L,status:f.status,statusText:f.statusText,headers:E,config:e,request:f};Xr(function(Y){n(Y),p()},function(Y){i(Y),p()},g),f=null}}if("onloadend"in f?f.onloadend=Se:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(Se)},f.onabort=function(){!f||(i(new A("Request aborted",A.ECONNABORTED,e,f)),f=null)},f.onerror=function(){i(new A("Network Error",A.ERR_NETWORK,e,f,f)),f=null},f.ontimeout=function(){var L=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",g=e.transitional||en;e.timeoutErrorMessage&&(L=e.timeoutErrorMessage),i(new A(L,g.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,e,f)),f=null},_.isStandardBrowserEnv()){var Le=(e.withCredentials||Gr(v))&&e.xsrfCookieName?$r.read(e.xsrfCookieName):void 0;Le&&(o[e.xsrfHeaderName]=Le)}"setRequestHeader"in f&&_.forEach(o,function(L,g){typeof s>"u"&&g.toLowerCase()==="content-type"?delete o[g]:f.setRequestHeader(g,L)}),_.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),a&&a!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(E){!f||(i(!E||E&&E.type?new tn:E),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null);var $=rn(v);if($&&["http","https","file"].indexOf($)===-1){i(new A("Unsupported protocol "+$+":",A.ERR_BAD_REQUEST,e));return}f.send(s)})}});var dt=c((ti,ht)=>{ht.exports=null});var V=c((ri,yt)=>{"use strict";var d=h(),mt=Me(),vt=S(),nn=se(),sn=oe(),on={"Content-Type":"application/x-www-form-urlencoded"};function wt(t,e){!d.isUndefined(t)&&d.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function an(){var t;return typeof XMLHttpRequest<"u"?t=ce():typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"&&(t=ce()),t}function un(t,e,r){if(d.isString(t))try{return(e||JSON.parse)(t),d.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var J={transitional:nn,adapter:an(),transformRequest:[function(e,r){if(mt(r,"Accept"),mt(r,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return wt(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n=d.isObject(e),i=r&&r["Content-Type"],s;if((s=d.isFileList(e))||n&&i==="multipart/form-data"){var o=this.env&&this.env.FormData;return sn(s?{"files[]":e}:e,o&&new o)}else if(n||i==="application/json")return wt(r,"application/json"),un(e);return e}],transformResponse:[function(e){var r=this.transitional||J.transitional,n=r&&r.silentJSONParsing,i=r&&r.forcedJSONParsing,s=!n&&this.responseType==="json";if(s||i&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?vt.from(o,vt.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:dt()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(e){J.headers[e]={}});d.forEach(["post","put","patch"],function(e){J.headers[e]=d.merge(on)});yt.exports=J});var bt=c((ni,Et)=>{"use strict";var fn=h(),ln=V();Et.exports=function(e,r,n){var i=this||ln;return fn.forEach(n,function(o){e=o.call(i,e,r)}),e}});var pe=c((ii,Rt)=>{"use strict";Rt.exports=function(e){return!!(e&&e.__CANCEL__)}});var At=c((si,qt)=>{"use strict";var xt=h(),he=bt(),cn=pe(),pn=V(),hn=B();function de(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new hn}qt.exports=function(e){de(e),e.headers=e.headers||{},e.data=he.call(e,e.data,e.headers,e.transformRequest),e.headers=xt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),xt.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var r=e.adapter||pn.adapter;return r(e).then(function(i){return de(e),i.data=he.call(e,i.data,i.headers,e.transformResponse),i},function(i){return cn(i)||(de(e),i&&i.response&&(i.response.data=he.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})}});var me=c((oi,Ot)=>{"use strict";var y=h();Ot.exports=function(e,r){r=r||{};var n={};function i(f,u){return y.isPlainObject(f)&&y.isPlainObject(u)?y.merge(f,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function s(f){if(y.isUndefined(r[f])){if(!y.isUndefined(e[f]))return i(void 0,e[f])}else return i(e[f],r[f])}function o(f){if(!y.isUndefined(r[f]))return i(void 0,r[f])}function a(f){if(y.isUndefined(r[f])){if(!y.isUndefined(e[f]))return i(void 0,e[f])}else return i(void 0,r[f])}function l(f){if(f in r)return i(e[f],r[f]);if(f in e)return i(void 0,e[f])}var p={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return y.forEach(Object.keys(e).concat(Object.keys(r)),function(u){var m=p[u]||s,v=m(u);y.isUndefined(v)&&m!==l||(n[u]=v)}),n}});var ve=c((ai,gt)=>{gt.exports={version:"0.27.2"}});var Lt=c((ui,St)=>{"use strict";var dn=ve().version,O=S(),we={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){we[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var Ct={};we.transitional=function(e,r,n){function i(s,o){return"[Axios v"+dn+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return function(s,o,a){if(e===!1)throw new O(i(o," has been removed"+(r?" in "+r:"")),O.ERR_DEPRECATED);return r&&!Ct[o]&&(Ct[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,o,a):!0}};function mn(t,e,r){if(typeof t!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(t),i=n.length;i-- >0;){var s=n[i],o=e[s];if(o){var a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new O("option "+s+" must be "+l,O.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new O("Unknown option "+s,O.ERR_BAD_OPTION)}}St.exports={assertOptions:mn,validators:we}});var Dt=c((fi,Ut)=>{"use strict";var Tt=h(),vn=ie(),Nt=je(),kt=At(),W=me(),wn=ue(),Pt=Lt(),T=Pt.validators;function P(t){this.defaults=t,this.interceptors={request:new Nt,response:new Nt}}P.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=W(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&Pt.assertOptions(n,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var i=[],s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(r)===!1||(s=s&&v.synchronous,i.unshift(v.fulfilled,v.rejected))});var o=[];this.interceptors.response.forEach(function(v){o.push(v.fulfilled,v.rejected)});var a;if(!s){var l=[kt,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(o),a=Promise.resolve(r);l.length;)a=a.then(l.shift(),l.shift());return a}for(var p=r;i.length;){var f=i.shift(),u=i.shift();try{p=f(p)}catch(m){u(m);break}}try{a=kt(p)}catch(m){return Promise.reject(m)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};P.prototype.getUri=function(e){e=W(this.defaults,e);var r=wn(e.baseURL,e.url);return vn(r,e.params,e.paramsSerializer)};Tt.forEach(["delete","get","head","options"],function(e){P.prototype[e]=function(r,n){return this.request(W(n||{},{method:e,url:r,data:(n||{}).data}))}});Tt.forEach(["post","put","patch"],function(e){function r(n){return function(s,o,a){return this.request(W(a||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}P.prototype[e]=r(),P.prototype[e+"Form"]=r(!0)});Ut.exports=P});var _t=c((li,Bt)=>{"use strict";var yn=B();function U(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(i){e=i});var r=this;this.promise.then(function(n){if(!!r._listeners){var i,s=r._listeners.length;for(i=0;i<s;i++)r._listeners[i](n);r._listeners=null}}),this.promise.then=function(n){var i,s=new Promise(function(o){r.subscribe(o),i=o}).then(n);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i){r.reason||(r.reason=new yn(i),e(r.reason))})}U.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};U.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};U.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};U.source=function(){var e,r=new U(function(i){e=i});return{token:r,cancel:e}};Bt.exports=U});var jt=c((ci,It)=>{"use strict";It.exports=function(e){return function(n){return e.apply(null,n)}}});var Mt=c((pi,Ft)=>{"use strict";var En=h();Ft.exports=function(e){return En.isObject(e)&&e.isAxiosError===!0}});var Jt=c((hi,ye)=>{"use strict";var Ht=h(),bn=Q(),K=Dt(),Rn=me(),xn=V();function zt(t){var e=new K(t),r=bn(K.prototype.request,e);return Ht.extend(r,K.prototype,e),Ht.extend(r,e),r.create=function(i){return zt(Rn(t,i))},r}var w=zt(xn);w.Axios=K;w.CanceledError=B();w.CancelToken=_t();w.isCancel=pe();w.VERSION=ve().version;w.toFormData=oe();w.AxiosError=S();w.Cancel=w.CanceledError;w.all=function(e){return Promise.all(e)};w.spread=jt();w.isAxiosError=Mt();ye.exports=w;ye.exports.default=w});var Wt=c((di,Vt)=>{Vt.exports=Jt()});var $t=c((yi,Xt)=>{"use strict";Xt.exports=function(e,r){if(r=r.split(":")[0],e=+e,!e)return!1;switch(r){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}});var Zt=c(be=>{"use strict";var qn=Object.prototype.hasOwnProperty,An;function Yt(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return null}}function Qt(t){try{return encodeURIComponent(t)}catch(e){return null}}function On(t){for(var e=/([^=?#&]+)=?([^&]*)/g,r={},n;n=e.exec(t);){var i=Yt(n[1]),s=Yt(n[2]);i===null||s===null||i in r||(r[i]=s)}return r}function gn(t,e){e=e||"";var r=[],n,i;typeof e!="string"&&(e="?");for(i in t)if(qn.call(t,i)){if(n=t[i],!n&&(n===null||n===An||isNaN(n))&&(n=""),i=Qt(i),n=Qt(n),i===null||n===null)continue;r.push(i+"="+n)}return r.length?e+r.join("&"):""}be.stringify=gn;be.parse=On});var or=c((bi,sr)=>{"use strict";var er=$t(),X=Zt(),Cn=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,tr=/[\n\r\t]/g,Sn=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,rr=/:\d+$/,Ln=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,Nn=/^[a-zA-Z]:/;function xe(t){return(t||"").toString().replace(Cn,"")}var Re=[["#","hash"],["?","query"],function(e,r){return x(r.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],Gt={hash:1,query:1};function nr(t){var e;typeof window<"u"?e=window:typeof global<"u"?e=global:typeof self<"u"?e=self:e={};var r=e.location||{};t=t||r;var n={},i=typeof t,s;if(t.protocol==="blob:")n=new q(unescape(t.pathname),{});else if(i==="string"){n=new q(t,{});for(s in Gt)delete n[s]}else if(i==="object"){for(s in t)s in Gt||(n[s]=t[s]);n.slashes===void 0&&(n.slashes=Sn.test(t.href))}return n}function x(t){return t==="file:"||t==="ftp:"||t==="http:"||t==="https:"||t==="ws:"||t==="wss:"}function ir(t,e){t=xe(t),t=t.replace(tr,""),e=e||{};var r=Ln.exec(t),n=r[1]?r[1].toLowerCase():"",i=!!r[2],s=!!r[3],o=0,a;return i?s?(a=r[2]+r[3]+r[4],o=r[2].length+r[3].length):(a=r[2]+r[4],o=r[2].length):s?(a=r[3]+r[4],o=r[3].length):a=r[4],n==="file:"?o>=2&&(a=a.slice(2)):x(n)?a=r[4]:n?i&&(a=a.slice(2)):o>=2&&x(e.protocol)&&(a=r[4]),{protocol:n,slashes:i||x(n),slashesCount:o,rest:a}}function kn(t,e){if(t==="")return e;for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),n=r.length,i=r[n-1],s=!1,o=0;n--;)r[n]==="."?r.splice(n,1):r[n]===".."?(r.splice(n,1),o++):o&&(n===0&&(s=!0),r.splice(n,1),o--);return s&&r.unshift(""),(i==="."||i==="..")&&r.push(""),r.join("/")}function q(t,e,r){if(t=xe(t),t=t.replace(tr,""),!(this instanceof q))return new q(t,e,r);var n,i,s,o,a,l,p=Re.slice(),f=typeof e,u=this,m=0;for(f!=="object"&&f!=="string"&&(r=e,e=null),r&&typeof r!="function"&&(r=X.parse),e=nr(e),i=ir(t||"",e),n=!i.protocol&&!i.slashes,u.slashes=i.slashes||n&&e.slashes,u.protocol=i.protocol||e.protocol||"",t=i.rest,(i.protocol==="file:"&&(i.slashesCount!==2||Nn.test(t))||!i.slashes&&(i.protocol||i.slashesCount<2||!x(u.protocol)))&&(p[3]=[/(.*)/,"pathname"]);m<p.length;m++){if(o=p[m],typeof o=="function"){t=o(t,u);continue}s=o[0],l=o[1],s!==s?u[l]=t:typeof s=="string"?(a=s==="@"?t.lastIndexOf(s):t.indexOf(s),~a&&(typeof o[2]=="number"?(u[l]=t.slice(0,a),t=t.slice(a+o[2])):(u[l]=t.slice(a),t=t.slice(0,a)))):(a=s.exec(t))&&(u[l]=a[1],t=t.slice(0,a.index)),u[l]=u[l]||n&&o[3]&&e[l]||"",o[4]&&(u[l]=u[l].toLowerCase())}r&&(u.query=r(u.query)),n&&e.slashes&&u.pathname.charAt(0)!=="/"&&(u.pathname!==""||e.pathname!=="")&&(u.pathname=kn(u.pathname,e.pathname)),u.pathname.charAt(0)!=="/"&&x(u.protocol)&&(u.pathname="/"+u.pathname),er(u.port,u.protocol)||(u.host=u.hostname,u.port=""),u.username=u.password="",u.auth&&(a=u.auth.indexOf(":"),~a?(u.username=u.auth.slice(0,a),u.username=encodeURIComponent(decodeURIComponent(u.username)),u.password=u.auth.slice(a+1),u.password=encodeURIComponent(decodeURIComponent(u.password))):u.username=encodeURIComponent(decodeURIComponent(u.auth)),u.auth=u.password?u.username+":"+u.password:u.username),u.origin=u.protocol!=="file:"&&x(u.protocol)&&u.host?u.protocol+"//"+u.host:"null",u.href=u.toString()}function Tn(t,e,r){var n=this;switch(t){case"query":typeof e=="string"&&e.length&&(e=(r||X.parse)(e)),n[t]=e;break;case"port":n[t]=e,er(e,n.protocol)?e&&(n.host=n.hostname+":"+e):(n.host=n.hostname,n[t]="");break;case"hostname":n[t]=e,n.port&&(e+=":"+n.port),n.host=e;break;case"host":n[t]=e,rr.test(e)?(e=e.split(":"),n.port=e.pop(),n.hostname=e.join(":")):(n.hostname=e,n.port="");break;case"protocol":n.protocol=e.toLowerCase(),n.slashes=!r;break;case"pathname":case"hash":if(e){var i=t==="pathname"?"/":"#";n[t]=e.charAt(0)!==i?i+e:e}else n[t]=e;break;case"username":case"password":n[t]=encodeURIComponent(e);break;case"auth":var s=e.indexOf(":");~s?(n.username=e.slice(0,s),n.username=encodeURIComponent(decodeURIComponent(n.username)),n.password=e.slice(s+1),n.password=encodeURIComponent(decodeURIComponent(n.password))):n.username=encodeURIComponent(decodeURIComponent(e))}for(var o=0;o<Re.length;o++){var a=Re[o];a[4]&&(n[a[1]]=n[a[1]].toLowerCase())}return n.auth=n.password?n.username+":"+n.password:n.username,n.origin=n.protocol!=="file:"&&x(n.protocol)&&n.host?n.protocol+"//"+n.host:"null",n.href=n.toString(),n}function Pn(t){(!t||typeof t!="function")&&(t=X.stringify);var e,r=this,n=r.host,i=r.protocol;i&&i.charAt(i.length-1)!==":"&&(i+=":");var s=i+(r.protocol&&r.slashes||x(r.protocol)?"//":"");return r.username?(s+=r.username,r.password&&(s+=":"+r.password),s+="@"):r.password?(s+=":"+r.password,s+="@"):r.protocol!=="file:"&&x(r.protocol)&&!n&&r.pathname!=="/"&&(s+="@"),(n[n.length-1]===":"||rr.test(r.hostname)&&!r.port)&&(n+=":"),s+=n+r.pathname,e=typeof r.query=="object"?t(r.query):r.query,e&&(s+=e.charAt(0)!=="?"?"?"+e:e),r.hash&&(s+=r.hash),s}q.prototype={set:Tn,toString:Pn};q.extractProtocol=ir;q.location=nr;q.trimLeft=xe;q.qs=X;sr.exports=q});var Kt=ke(Wt()),D=(0,Kt.create)({baseURL:"https://pagelike.vercel.app/api/like/",params:{origin:window.location.href}});function Ee(t){return R(this,null,function*(){return yield D.get("/",{params:{level:t}}).then(e=>e.status===200?{success:e.data.success,totalLike:e.data.totalLike}:{success:!1,totalLike:0}).catch(()=>({success:!1,totalLike:0}))})}var I=ke(or()),ar="pageLiked",ur="pageLiked-host",fr="pageLiked-btn-show";function j(t="path"){var e="/";t==="path"&&(e=(0,I.default)(window.location.href).pathname);var r=localStorage.getItem(t==="path"?ar+e:ur);return r?r==="true":!1}function lr(t,e="path"){var r="/";e==="path"&&(r=(0,I.default)(window.location.href).pathname),localStorage.setItem(e==="path"?ar+r:ur,t)}function cr(){var t=(0,I.default)(window.location.href).pathname,e=localStorage.getItem(fr+"-"+t);return e?e!=="false":!0}function pr(t){var e=(0,I.default)(window.location.href).pathname;localStorage.setItem(fr+"-"+e,t)}function qe(t){confirm("Do you want to remove this like button from this site?")&&(t.remove(),pr(!1))}function Ae(t){return R(this,null,function*(){return yield D.post("/",{params:{level:t}}).then(e=>e.status===202?{success:e.data.success,totalLike:e.data.totalLike}:{success:!1,totalLike:0}).catch(()=>({success:!1,totalLike:0}))})}function Oe(t){return R(this,null,function*(){return yield D.delete("/",{params:{level:t}}).then(e=>e.status===202?{success:e.data.success,totalLike:e.data.totalLike}:{success:!1,totalLike:0}).catch(()=>({success:!1,totalLike:0}))})}function Un(t,e,r){t.setAttribute("data-total-like",r),t.setAttribute("liked",e)}function ge(t,e){return R(this,null,function*(){t.disabled=!0,t.setAttribute("loading",!0);var r,n;j(e)?(r=yield Oe(e),n=!1):(r=yield Ae(e),n=!0),r.success&&(lr(n,e),Un(t,n,r.totalLike)),t.disabled=!1,t.setAttribute("loading",!1)})}function Ce(){return R(this,null,function*(){var t=document.querySelectorAll("[data-pl-custom]")[0]||null,e=window._pl||{},r=(t==null?void 0:t.getAttribute("data-pl-button-location"))||e.buttonLocation||"TR",n=(t==null?void 0:t.getAttribute("data-pl-z-index"))||e.zIndex||"100",i=(t==null?void 0:t.getAttribute("data-pl-level"))||e.level||"path",s=document.createElement("button");s.classList.add("page-like-button");var o=yield Ee(i);s.innerHTML="Like",s.setAttribute("data-total-like",o.totalLike),s.setAttribute("data-button-location",r),s.style.zIndex=n,s.setAttribute("liked",j(i));var a=document.getElementsByTagName("body")[0];a.appendChild(s),s.addEventListener("click",function(l){console.log(l.target,s),console.log("click"),l.preventDefault(),ge(l.target,i)}),Dn(s,()=>{qe(s)})})}function Dn(t,e){var r;t.addEventListener("touchstart",function(n){r=setTimeout(function(){r=null,n.stopPropagation(),e(n.target)},500)}),t.addEventListener("contextmenu",function(n){n.preventDefault(),e(n.target)}),t.addEventListener("touchend",function(){r&&clearTimeout(r)}),t.addEventListener("touchmove",function(){r&&clearTimeout(r)})}(function(){cr()&&Ce()})();})();
//# sourceMappingURL=index.js.map
