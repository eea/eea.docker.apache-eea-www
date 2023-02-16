
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++sentry.min.js - */
/*! @sentry/tracing & @sentry/browser 6.13.2 (1de7a04) | https://github.com/getsentry/sentry-javascript */
var Sentry=function(t){var n=function(t,i){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,i)};function i(t,i){function r(){this.constructor=t}n(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}var r,e,o,u,s,a,c,f=function(){return(f=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++)for(var e in n=arguments[i])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)};function h(t,n){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)n.indexOf(r[e])<0&&(i[r[e]]=t[r[e]])}return i}function v(t){var n="function"==typeof Symbol&&t[Symbol.iterator],i=0;return n?n.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}}function d(t,n){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,e,o=i.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)u.push(r.value)}catch(t){e={error:t}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}return u}function l(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(d(arguments[n]));return t}function p(t){switch(Object.prototype.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return x(t,Error)}}function m(t){return"[object ErrorEvent]"===Object.prototype.toString.call(t)}function y(t){return"[object DOMError]"===Object.prototype.toString.call(t)}function g(t){return"[object String]"===Object.prototype.toString.call(t)}function b(t){return null===t||"object"!=typeof t&&"function"!=typeof t}function w(t){return"[object Object]"===Object.prototype.toString.call(t)}function T(t){return"undefined"!=typeof Event&&x(t,Event)}function E(t){return"undefined"!=typeof Element&&x(t,Element)}function S(t){return Boolean(t&&t.then&&"function"==typeof t.then)}function x(t,n){try{return t instanceof n}catch(t){return!1}}function _(t,n){try{for(var i=t,r=[],e=0,o=0,u=" > ".length,s=void 0;i&&e++<5&&!("html"===(s=O(i,n))||e>1&&o+r.length*u+s.length>=80);)r.push(s),o+=s.length,i=i.parentNode;return r.reverse().join(" > ")}catch(t){return"<unknown>"}}function O(t,n){var i,r,e,o,u,s,a,c=t,f=[];if(!c||!c.tagName)return"";f.push(c.tagName.toLowerCase());var h=(null===(i=n)||void 0===i?void 0:i.length)?n.filter(function(t){return c.getAttribute(t)}).map(function(t){return[t,c.getAttribute(t)]}):null;if(null===(r=h)||void 0===r?void 0:r.length)h.forEach(function(t){f.push("["+t[0]+'="'+t[1]+'"]')});else if(c.id&&f.push("#"+c.id),(e=c.className)&&g(e))for(o=e.split(/\s+/),a=0;a<o.length;a++)f.push("."+o[a]);var v=["type","name","title","alt"];for(a=0;a<v.length;a++)u=v[a],(s=c.getAttribute(u))&&f.push("["+u+'="'+s+'"]');return f.join("")}!function(t){t[t.None=0]="None",t[t.Error=1]="Error",t[t.Debug=2]="Debug",t[t.Verbose=3]="Verbose"}(r||(r={})),function(t){t.Ok="ok",t.Exited="exited",t.Crashed="crashed",t.Abnormal="abnormal"}(e||(e={})),function(t){t.Ok="ok",t.Errored="errored",t.Crashed="crashed"}(o||(o={})),(u=t.Severity||(t.Severity={})).Fatal="fatal",u.Error="error",u.Warning="warning",u.Log="log",u.Info="info",u.Debug="debug",u.Critical="critical",function(t){t.fromString=function(n){switch(n){case"debug":return t.Debug;case"info":return t.Info;case"warn":case"warning":return t.Warning;case"error":return t.Error;case"fatal":return t.Fatal;case"critical":return t.Critical;case"log":default:return t.Log}}}(t.Severity||(t.Severity={})),(s=t.Status||(t.Status={})).Unknown="unknown",s.Skipped="skipped",s.Success="success",s.RateLimit="rate_limit",s.Invalid="invalid",s.Failed="failed",function(t){t.fromHttpCode=function(n){return n>=200&&n<300?t.Success:429===n?t.RateLimit:n>=400&&n<500?t.Invalid:n>=500?t.Failed:t.Unknown}}(t.Status||(t.Status={})),function(t){t.Explicit="explicitly_set",t.Sampler="client_sampler",t.Rate="client_rate",t.Inheritance="inheritance"}(a||(a={})),function(t){t.BeforeSend="before_send",t.EventProcessor="event_processor",t.NetworkError="network_error",t.QueueOverflow="queue_overflow",t.RateLimitBackoff="ratelimit_backoff",t.SampleRate="sample_rate"}(c||(c={}));var j=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,n){return t.__proto__=n,t}:function(t,n){for(var i in n)t.hasOwnProperty(i)||(t[i]=n[i]);return t});var k=function(t){function n(n){var i=this.constructor,r=t.call(this,n)||this;return r.message=n,r.name=i.prototype.constructor.name,j(r,i.prototype),r}return i(n,t),n}(Error),D=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,N=function(){function t(t){"string"==typeof t?this.t(t):this.i(t),this.o()}return t.prototype.toString=function(t){void 0===t&&(t=!1);var n=this,i=n.host,r=n.path,e=n.pass,o=n.port,u=n.projectId;return n.protocol+"://"+n.publicKey+(t&&e?":"+e:"")+"@"+i+(o?":"+o:"")+"/"+(r?r+"/":r)+u},t.prototype.t=function(t){var n=D.exec(t);if(!n)throw new k("Invalid Dsn");var i=d(n.slice(1),6),r=i[0],e=i[1],o=i[2],u=void 0===o?"":o,s=i[3],a=i[4],c=void 0===a?"":a,f="",h=i[5],v=h.split("/");if(v.length>1&&(f=v.slice(0,-1).join("/"),h=v.pop()),h){var l=h.match(/^\d+/);l&&(h=l[0])}this.i({host:s,pass:u,path:f,projectId:h,port:c,protocol:r,publicKey:e})},t.prototype.i=function(t){"user"in t&&!("publicKey"in t)&&(t.publicKey=t.user),this.user=t.publicKey||"",this.protocol=t.protocol,this.publicKey=t.publicKey||"",this.pass=t.pass||"",this.host=t.host,this.port=t.port||"",this.path=t.path||"",this.projectId=t.projectId},t.prototype.o=function(){var t=this;if(["protocol","publicKey","host","projectId"].forEach(function(n){if(!t[n])throw new k("Invalid Dsn: "+n+" missing")}),!this.projectId.match(/^\d+$/))throw new k("Invalid Dsn: Invalid projectId "+this.projectId);if("http"!==this.protocol&&"https"!==this.protocol)throw new k("Invalid Dsn: Invalid protocol "+this.protocol);if(this.port&&isNaN(parseInt(this.port,10)))throw new k("Invalid Dsn: Invalid port "+this.port)},t}();function I(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}function C(t,n){return t.require(n)}function R(t,n){return void 0===n&&(n=0),"string"!=typeof t||0===n?t:t.length<=n?t:t.substr(0,n)+"..."}function A(t,n){if(!Array.isArray(t))return"";for(var i=[],r=0;r<t.length;r++){var e=t[r];try{i.push(String(e))}catch(t){i.push("[value cannot be serialized]")}}return i.join(n)}function M(t,n){return!!g(t)&&(i=n,"[object RegExp]"===Object.prototype.toString.call(i)?n.test(t):"string"==typeof n&&-1!==t.indexOf(n));var i}var L={};function q(){return I()?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:L}function F(){var t=q(),n=t.crypto||t.msCrypto;if(void 0!==n&&n.getRandomValues){var i=new Uint16Array(8);n.getRandomValues(i),i[3]=4095&i[3]|16384,i[4]=16383&i[4]|32768;var r=function(t){for(var n=t.toString(16);n.length<4;)n="0"+n;return n};return r(i[0])+r(i[1])+r(i[2])+r(i[3])+r(i[4])+r(i[5])+r(i[6])+r(i[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0;return("x"===t?n:3&n|8).toString(16)})}function P(t){if(!t)return{};var n=t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!n)return{};var i=n[6]||"",r=n[8]||"";return{host:n[4],path:n[5],protocol:n[2],relative:n[5]+i+r}}function U(t){if(t.message)return t.message;if(t.exception&&t.exception.values&&t.exception.values[0]){var n=t.exception.values[0];return n.type&&n.value?n.type+": "+n.value:n.type||n.value||t.event_id||"<unknown>"}return t.event_id||"<unknown>"}function H(t){var n=q();if(!("console"in n))return t();var i=n.console,r={};["debug","info","warn","error","log","assert"].forEach(function(t){t in n.console&&i[t].__sentry_original__&&(r[t]=i[t],i[t]=i[t].__sentry_original__)});var e=t();return Object.keys(r).forEach(function(t){i[t]=r[t]}),e}function J(t,n,i){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].value=t.exception.values[0].value||n||"",t.exception.values[0].type=t.exception.values[0].type||i||"Error"}function B(t,n){void 0===n&&(n={});try{t.exception.values[0].mechanism=t.exception.values[0].mechanism||{},Object.keys(n).forEach(function(i){t.exception.values[0].mechanism[i]=n[i]})}catch(t){}}var X=6e4;var G=q(),W="Sentry Logger ",z=function(){function t(){this.u=!1}return t.prototype.disable=function(){this.u=!1},t.prototype.enable=function(){this.u=!0},t.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.u&&H(function(){G.console.log(W+"[Log]: "+t.join(" "))})},t.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.u&&H(function(){G.console.warn(W+"[Warn]: "+t.join(" "))})},t.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.u&&H(function(){G.console.error(W+"[Error]: "+t.join(" "))})},t}();G.__SENTRY__=G.__SENTRY__||{};var $=G.__SENTRY__.logger||(G.__SENTRY__.logger=new z),K=function(){function t(){this.s="function"==typeof WeakSet,this.h=this.s?new WeakSet:[]}return t.prototype.memoize=function(t){if(this.s)return!!this.h.has(t)||(this.h.add(t),!1);for(var n=0;n<this.h.length;n++){if(this.h[n]===t)return!0}return this.h.push(t),!1},t.prototype.unmemoize=function(t){if(this.s)this.h.delete(t);else for(var n=0;n<this.h.length;n++)if(this.h[n]===t){this.h.splice(n,1);break}},t}(),V="<anonymous>";function Y(t){try{return t&&"function"==typeof t&&t.name||V}catch(t){return V}}function Q(t,n,i){if(n in t){var r=t[n],e=i(r);if("function"==typeof e)try{e.prototype=e.prototype||{},Object.defineProperties(e,{__sentry_original__:{enumerable:!1,value:r}})}catch(t){}t[n]=e}}function Z(t){if(p(t)){var n=t,i={message:n.message,name:n.name,stack:n.stack};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=n[r]);return i}if(T(t)){var e=t,o={};o.type=e.type;try{o.target=E(e.target)?_(e.target):Object.prototype.toString.call(e.target)}catch(t){o.target="<unknown>"}try{o.currentTarget=E(e.currentTarget)?_(e.currentTarget):Object.prototype.toString.call(e.currentTarget)}catch(t){o.currentTarget="<unknown>"}for(var u in"undefined"!=typeof CustomEvent&&x(t,CustomEvent)&&(o.detail=e.detail),e)Object.prototype.hasOwnProperty.call(e,u)&&(o[u]=e[u]);return o}return t}function tt(t){return function(t){return~-encodeURI(t).split(/%..|./).length}(JSON.stringify(t))}function nt(t,n,i){void 0===n&&(n=3),void 0===i&&(i=102400);var r=et(t,n);return tt(r)>i?nt(t,n-1,i):r}function it(t,n){return"domain"===n&&t&&"object"==typeof t&&t.v?"[Domain]":"domainEmitter"===n?"[DomainEmitter]":"undefined"!=typeof global&&t===global?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":w(i=t)&&"nativeEvent"in i&&"preventDefault"in i&&"stopPropagation"in i?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?"[Function: "+Y(t)+"]":"symbol"==typeof t?"["+String(t)+"]":"bigint"==typeof t?"[BigInt: "+String(t)+"]":t;var i}function rt(t,n,i,r){if(void 0===i&&(i=1/0),void 0===r&&(r=new K),0===i)return function(t){var n=Object.prototype.toString.call(t);if("string"==typeof t)return t;if("[object Object]"===n)return"[Object]";if("[object Array]"===n)return"[Array]";var i=it(t);return b(i)?i:n}(n);if(null!=n&&"function"==typeof n.toJSON)return n.toJSON();var e=it(n,t);if(b(e))return e;var o=Z(n),u=Array.isArray(n)?[]:{};if(r.memoize(n))return"[Circular ~]";for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(u[s]=rt(s,o[s],i-1,r));return r.unmemoize(n),u}function et(t,n){try{return JSON.parse(JSON.stringify(t,function(t,i){return rt(t,i,n)}))}catch(t){return"**non-serializable**"}}function ot(t,n){void 0===n&&(n=40);var i=Object.keys(Z(t));if(i.sort(),!i.length)return"[object has no keys]";if(i[0].length>=n)return R(i[0],n);for(var r=i.length;r>0;r--){var e=i.slice(0,r).join(", ");if(!(e.length>n))return r===i.length?e:R(e,n)}return""}function ut(t){var n,i;if(w(t)){var r=t,e={};try{for(var o=v(Object.keys(r)),u=o.next();!u.done;u=o.next()){var s=u.value;void 0!==r[s]&&(e[s]=ut(r[s]))}}catch(t){n={error:t}}finally{try{u&&!u.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return e}return Array.isArray(t)?t.map(ut):t}function st(){if(!("fetch"in q()))return!1;try{return new Headers,new Request(""),new Response,!0}catch(t){return!1}}function at(t){return t&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())}function ct(){if(!st())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch(t){return!1}}var ft,ht=q(),vt={},dt={};function lt(t){if(!dt[t])switch(dt[t]=!0,t){case"console":!function(){if(!("console"in ht))return;["debug","info","warn","error","log","assert"].forEach(function(t){t in ht.console&&Q(ht.console,t,function(n){return function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];mt("console",{args:i,level:t}),n&&Function.prototype.apply.call(n,ht.console,i)}})})}();break;case"dom":!function(){if(!("document"in ht))return;var t=mt.bind(null,"dom"),n=Et(t,!0);ht.document.addEventListener("click",n,!1),ht.document.addEventListener("keypress",n,!1),["EventTarget","Node"].forEach(function(n){var i=ht[n]&&ht[n].prototype;i&&i.hasOwnProperty&&i.hasOwnProperty("addEventListener")&&(Q(i,"addEventListener",function(n){return function(i,r,e){if("click"===i||"keypress"==i)try{var o=this.__sentry_instrumentation_handlers__=this.__sentry_instrumentation_handlers__||{},u=o[i]=o[i]||{refCount:0};if(!u.handler){var s=Et(t);u.handler=s,n.call(this,i,s,e)}u.refCount+=1}catch(t){}return n.call(this,i,r,e)}}),Q(i,"removeEventListener",function(t){return function(n,i,r){if("click"===n||"keypress"==n)try{var e=this.__sentry_instrumentation_handlers__||{},o=e[n];o&&(o.refCount-=1,o.refCount<=0&&(t.call(this,n,o.handler,r),o.handler=void 0,delete e[n]),0===Object.keys(e).length&&delete this.__sentry_instrumentation_handlers__)}catch(t){}return t.call(this,n,i,r)}}))})}();break;case"xhr":!function(){if(!("XMLHttpRequest"in ht))return;var t=[],n=[],i=XMLHttpRequest.prototype;Q(i,"open",function(i){return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var o=this,u=r[1];o.__sentry_xhr__={method:g(r[0])?r[0].toUpperCase():r[0],url:r[1]},g(u)&&"POST"===o.__sentry_xhr__.method&&u.match(/sentry_key/)&&(o.__sentry_own_request__=!0);var s=function(){if(4===o.readyState){try{o.__sentry_xhr__&&(o.__sentry_xhr__.status_code=o.status)}catch(t){}try{var i=t.indexOf(o);if(-1!==i){t.splice(i);var e=n.splice(i)[0];o.__sentry_xhr__&&void 0!==e[0]&&(o.__sentry_xhr__.body=e[0])}}catch(t){}mt("xhr",{args:r,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:o})}};return"onreadystatechange"in o&&"function"==typeof o.onreadystatechange?Q(o,"onreadystatechange",function(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return s(),t.apply(o,n)}}):o.addEventListener("readystatechange",s),i.apply(o,r)}}),Q(i,"send",function(i){return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return t.push(this),n.push(r),mt("xhr",{args:r,startTimestamp:Date.now(),xhr:this}),i.apply(this,r)}})}();break;case"fetch":!function(){if(!function(){if(!st())return!1;var t=q();if(at(t.fetch))return!0;var n=!1,i=t.document;if(i&&"function"==typeof i.createElement)try{var r=i.createElement("iframe");r.hidden=!0,i.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(n=at(r.contentWindow.fetch)),i.head.removeChild(r)}catch(t){$.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return n}())return;Q(ht,"fetch",function(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r={args:n,fetchData:{method:yt(n),url:gt(n)},startTimestamp:Date.now()};return mt("fetch",f({},r)),t.apply(ht,n).then(function(t){return mt("fetch",f(f({},r),{endTimestamp:Date.now(),response:t})),t},function(t){throw mt("fetch",f(f({},r),{endTimestamp:Date.now(),error:t})),t})}})}();break;case"history":!function(){if(t=q(),n=t.chrome,i=n&&n.app&&n.app.runtime,r="history"in t&&!!t.history.pushState&&!!t.history.replaceState,i||!r)return;var t,n,i,r;var e=ht.onpopstate;function o(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=n.length>2?n[2]:void 0;if(r){var e=ft,o=String(r);ft=o,mt("history",{from:e,to:o})}return t.apply(this,n)}}ht.onpopstate=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=ht.location.href,r=ft;if(ft=i,mt("history",{from:r,to:i}),e)try{return e.apply(this,t)}catch(t){}},Q(ht.history,"pushState",o),Q(ht.history,"replaceState",o)}();break;case"error":St=ht.onerror,ht.onerror=function(t,n,i,r,e){return mt("error",{column:r,error:e,line:i,msg:t,url:n}),!!St&&St.apply(this,arguments)};break;case"unhandledrejection":_t=ht.onunhandledrejection,ht.onunhandledrejection=function(t){return mt("unhandledrejection",t),!_t||_t.apply(this,arguments)};break;default:$.warn("unknown instrumentation type:",t)}}function pt(t){t&&"string"==typeof t.type&&"function"==typeof t.callback&&(vt[t.type]=vt[t.type]||[],vt[t.type].push(t.callback),lt(t.type))}function mt(t,n){var i,r;if(t&&vt[t])try{for(var e=v(vt[t]||[]),o=e.next();!o.done;o=e.next()){var u=o.value;try{u(n)}catch(n){$.error("Error while triggering instrumentation handler.\nType: "+t+"\nName: "+Y(u)+"\nError: "+n)}}}catch(t){i={error:t}}finally{try{o&&!o.done&&(r=e.return)&&r.call(e)}finally{if(i)throw i.error}}}function yt(t){return void 0===t&&(t=[]),"Request"in ht&&x(t[0],Request)&&t[0].method?String(t[0].method).toUpperCase():t[1]&&t[1].method?String(t[1].method).toUpperCase():"GET"}function gt(t){return void 0===t&&(t=[]),"string"==typeof t[0]?t[0]:"Request"in ht&&x(t[0],Request)?t[0].url:String(t[0])}var bt,wt,Tt=1e3;function Et(t,n){return void 0===n&&(n=!1),function(i){if(i&&wt!==i&&!function(t){if("keypress"!==t.type)return!1;try{var n=t.target;if(!n||!n.tagName)return!0;if("INPUT"===n.tagName||"TEXTAREA"===n.tagName||n.isContentEditable)return!1}catch(t){}return!0}(i)){var r="keypress"===i.type?"input":i.type;void 0===bt?(t({event:i,name:r,global:n}),wt=i):function(t,n){if(!t)return!0;if(t.type!==n.type)return!0;try{if(t.target!==n.target)return!0}catch(t){}return!1}(wt,i)&&(t({event:i,name:r,global:n}),wt=i),clearTimeout(bt),bt=ht.setTimeout(function(){bt=void 0},Tt)}}}var St=null;var xt,_t=null;!function(t){t.PENDING="PENDING",t.RESOLVED="RESOLVED",t.REJECTED="REJECTED"}(xt||(xt={}));var Ot=function(){function t(t){var n=this;this.l=xt.PENDING,this.p=[],this.m=function(t){n.g(xt.RESOLVED,t)},this.T=function(t){n.g(xt.REJECTED,t)},this.g=function(t,i){n.l===xt.PENDING&&(S(i)?i.then(n.m,n.T):(n.l=t,n.S=i,n._()))},this.O=function(t){n.p=n.p.concat(t),n._()},this._=function(){if(n.l!==xt.PENDING){var t=n.p.slice();n.p=[],t.forEach(function(t){t.done||(n.l===xt.RESOLVED&&t.onfulfilled&&t.onfulfilled(n.S),n.l===xt.REJECTED&&t.onrejected&&t.onrejected(n.S),t.done=!0)})}};try{t(this.m,this.T)}catch(t){this.T(t)}}return t.resolve=function(n){return new t(function(t){t(n)})},t.reject=function(n){return new t(function(t,i){i(n)})},t.all=function(n){return new t(function(i,r){if(Array.isArray(n))if(0!==n.length){var e=n.length,o=[];n.forEach(function(n,u){t.resolve(n).then(function(t){o[u]=t,0===(e-=1)&&i(o)}).then(null,r)})}else i([]);else r(new TypeError("Promise.all requires an array as input."))})},t.prototype.then=function(n,i){var r=this;return new t(function(t,e){r.O({done:!1,onfulfilled:function(i){if(n)try{return void t(n(i))}catch(t){return void e(t)}else t(i)},onrejected:function(n){if(i)try{return void t(i(n))}catch(t){return void e(t)}else e(n)}})})},t.prototype.catch=function(t){return this.then(function(t){return t},t)},t.prototype.finally=function(n){var i=this;return new t(function(t,r){var e,o;return i.then(function(t){o=!1,e=t,n&&n()},function(t){o=!0,e=t,n&&n()}).then(function(){o?r(e):t(e)})})},t.prototype.toString=function(){return"[object SyncPromise]"},t}(),jt=function(){function t(t){this.j=t,this.k=[]}return t.prototype.isReady=function(){return void 0===this.j||this.length()<this.j},t.prototype.add=function(t){var n=this;if(!this.isReady())return Ot.reject(new k("Not adding Promise due to buffer limit reached."));var i=t();return-1===this.k.indexOf(i)&&this.k.push(i),i.then(function(){return n.remove(i)}).then(null,function(){return n.remove(i).then(null,function(){})}),i},t.prototype.remove=function(t){return this.k.splice(this.k.indexOf(t),1)[0]},t.prototype.length=function(){return this.k.length},t.prototype.drain=function(t){var n=this;return new Ot(function(i){var r=setTimeout(function(){t&&t>0&&i(!1)},t);Ot.all(n.k).then(function(){clearTimeout(r),i(!0)}).then(null,function(){i(!0)})})},t}(),kt={nowSeconds:function(){return Date.now()/1e3}};var Dt=I()?function(){try{return C(module,"perf_hooks").performance}catch(t){return}}():function(){var t=q().performance;if(t&&t.now)return{now:function(){return t.now()},timeOrigin:Date.now()-t.now()}}(),Nt=void 0===Dt?kt:{nowSeconds:function(){return(Dt.timeOrigin+Dt.now())/1e3}},It=kt.nowSeconds.bind(kt),Ct=Nt.nowSeconds.bind(Nt),Rt=Ct,At=function(){var t=q().performance;if(t&&t.now){var n=t.now(),i=Date.now(),r=t.timeOrigin?Math.abs(t.timeOrigin+n-i):36e5,e=r<36e5,o=t.timing&&t.timing.navigationStart,u="number"==typeof o?Math.abs(o+n-i):36e5;return e||u<36e5?r<=u?t.timeOrigin:o:i}}(),Mt=function(){function t(){this.D=!1,this.N=[],this.I=[],this.C=[],this.R={},this.A={},this.M={},this.L={}}return t.clone=function(n){var i=new t;return n&&(i.C=l(n.C),i.A=f({},n.A),i.M=f({},n.M),i.L=f({},n.L),i.R=n.R,i.q=n.q,i.F=n.F,i.P=n.P,i.U=n.U,i.H=n.H,i.I=l(n.I),i.J=n.J),i},t.prototype.addScopeListener=function(t){this.N.push(t)},t.prototype.addEventProcessor=function(t){return this.I.push(t),this},t.prototype.setUser=function(t){return this.R=t||{},this.P&&this.P.update({user:t}),this.B(),this},t.prototype.getUser=function(){return this.R},t.prototype.getRequestSession=function(){return this.J},t.prototype.setRequestSession=function(t){return this.J=t,this},t.prototype.setTags=function(t){return this.A=f(f({},this.A),t),this.B(),this},t.prototype.setTag=function(t,n){var i;return this.A=f(f({},this.A),((i={})[t]=n,i)),this.B(),this},t.prototype.setExtras=function(t){return this.M=f(f({},this.M),t),this.B(),this},t.prototype.setExtra=function(t,n){var i;return this.M=f(f({},this.M),((i={})[t]=n,i)),this.B(),this},t.prototype.setFingerprint=function(t){return this.H=t,this.B(),this},t.prototype.setLevel=function(t){return this.q=t,this.B(),this},t.prototype.setTransactionName=function(t){return this.U=t,this.B(),this},t.prototype.setTransaction=function(t){return this.setTransactionName(t)},t.prototype.setContext=function(t,n){var i;return null===n?delete this.L[t]:this.L=f(f({},this.L),((i={})[t]=n,i)),this.B(),this},t.prototype.setSpan=function(t){return this.F=t,this.B(),this},t.prototype.getSpan=function(){return this.F},t.prototype.getTransaction=function(){var t,n,i,r,e=this.getSpan();return(null===(t=e)||void 0===t?void 0:t.transaction)?null===(n=e)||void 0===n?void 0:n.transaction:(null===(r=null===(i=e)||void 0===i?void 0:i.spanRecorder)||void 0===r?void 0:r.spans[0])?e.spanRecorder.spans[0]:void 0},t.prototype.setSession=function(t){return t?this.P=t:delete this.P,this.B(),this},t.prototype.getSession=function(){return this.P},t.prototype.update=function(n){if(!n)return this;if("function"==typeof n){var i=n(this);return i instanceof t?i:this}return n instanceof t?(this.A=f(f({},this.A),n.A),this.M=f(f({},this.M),n.M),this.L=f(f({},this.L),n.L),n.R&&Object.keys(n.R).length&&(this.R=n.R),n.q&&(this.q=n.q),n.H&&(this.H=n.H),n.J&&(this.J=n.J)):w(n)&&(n=n,this.A=f(f({},this.A),n.tags),this.M=f(f({},this.M),n.extra),this.L=f(f({},this.L),n.contexts),n.user&&(this.R=n.user),n.level&&(this.q=n.level),n.fingerprint&&(this.H=n.fingerprint),n.requestSession&&(this.J=n.requestSession)),this},t.prototype.clear=function(){return this.C=[],this.A={},this.M={},this.R={},this.L={},this.q=void 0,this.U=void 0,this.H=void 0,this.J=void 0,this.F=void 0,this.P=void 0,this.B(),this},t.prototype.addBreadcrumb=function(t,n){var i="number"==typeof n?Math.min(n,100):100;if(i<=0)return this;var r=f({timestamp:It()},t);return this.C=l(this.C,[r]).slice(-i),this.B(),this},t.prototype.clearBreadcrumbs=function(){return this.C=[],this.B(),this},t.prototype.applyToEvent=function(t,n){var i;if(this.M&&Object.keys(this.M).length&&(t.extra=f(f({},this.M),t.extra)),this.A&&Object.keys(this.A).length&&(t.tags=f(f({},this.A),t.tags)),this.R&&Object.keys(this.R).length&&(t.user=f(f({},this.R),t.user)),this.L&&Object.keys(this.L).length&&(t.contexts=f(f({},this.L),t.contexts)),this.q&&(t.level=this.q),this.U&&(t.transaction=this.U),this.F){t.contexts=f({trace:this.F.getTraceContext()},t.contexts);var r=null===(i=this.F.transaction)||void 0===i?void 0:i.name;r&&(t.tags=f({transaction:r},t.tags))}return this.X(t),t.breadcrumbs=l(t.breadcrumbs||[],this.C),t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,this.G(l(Lt(),this.I),t,n)},t.prototype.G=function(t,n,i,r){var e=this;return void 0===r&&(r=0),new Ot(function(o,u){var s=t[r];if(null===n||"function"!=typeof s)o(n);else{var a=s(f({},n),i);S(a)?a.then(function(n){return e.G(t,n,i,r+1).then(o)}).then(null,u):e.G(t,a,i,r+1).then(o).then(null,u)}})},t.prototype.B=function(){var t=this;this.D||(this.D=!0,this.N.forEach(function(n){n(t)}),this.D=!1)},t.prototype.X=function(t){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],this.H&&(t.fingerprint=t.fingerprint.concat(this.H)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint},t}();function Lt(){var t=q();return t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.globalEventProcessors=t.__SENTRY__.globalEventProcessors||[],t.__SENTRY__.globalEventProcessors}function qt(t){Lt().push(t)}var Ft=function(){function t(t){this.errors=0,this.sid=F(),this.duration=0,this.status=e.Ok,this.init=!0,this.ignoreDuration=!1;var n=Ct();this.timestamp=n,this.started=n,t&&this.update(t)}return t.prototype.update=function(t){if(void 0===t&&(t={}),t.user&&(!this.ipAddress&&t.user.ip_address&&(this.ipAddress=t.user.ip_address),this.did||t.did||(this.did=t.user.id||t.user.email||t.user.username)),this.timestamp=t.timestamp||Ct(),t.ignoreDuration&&(this.ignoreDuration=t.ignoreDuration),t.sid&&(this.sid=32===t.sid.length?t.sid:F()),void 0!==t.init&&(this.init=t.init),!this.did&&t.did&&(this.did=""+t.did),"number"==typeof t.started&&(this.started=t.started),this.ignoreDuration)this.duration=void 0;else if("number"==typeof t.duration)this.duration=t.duration;else{var n=this.timestamp-this.started;this.duration=n>=0?n:0}t.release&&(this.release=t.release),t.environment&&(this.environment=t.environment),!this.ipAddress&&t.ipAddress&&(this.ipAddress=t.ipAddress),!this.userAgent&&t.userAgent&&(this.userAgent=t.userAgent),"number"==typeof t.errors&&(this.errors=t.errors),t.status&&(this.status=t.status)},t.prototype.close=function(t){t?this.update({status:t}):this.status===e.Ok?this.update({status:e.Exited}):this.update()},t.prototype.toJSON=function(){return ut({sid:""+this.sid,init:this.init,started:new Date(1e3*this.started).toISOString(),timestamp:new Date(1e3*this.timestamp).toISOString(),status:this.status,errors:this.errors,did:"number"==typeof this.did||"string"==typeof this.did?""+this.did:void 0,duration:this.duration,attrs:ut({release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent})})},t}(),Pt=4,Ut=function(){function t(t,n,i){void 0===n&&(n=new Mt),void 0===i&&(i=Pt),this.W=i,this.$=[{}],this.getStackTop().scope=n,t&&this.bindClient(t)}return t.prototype.isOlderThan=function(t){return this.W<t},t.prototype.bindClient=function(t){this.getStackTop().client=t,t&&t.setupIntegrations&&t.setupIntegrations()},t.prototype.pushScope=function(){var t=Mt.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:t}),t},t.prototype.popScope=function(){return!(this.getStack().length<=1)&&!!this.getStack().pop()},t.prototype.withScope=function(t){var n=this.pushScope();try{t(n)}finally{this.popScope()}},t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=function(){return this.getStackTop().scope},t.prototype.getStack=function(){return this.$},t.prototype.getStackTop=function(){return this.$[this.$.length-1]},t.prototype.captureException=function(t,n){var i=this.K=F(),r=n;if(!n){var e=void 0;try{throw new Error("Sentry syntheticException")}catch(t){e=t}r={originalException:t,syntheticException:e}}return this.V("captureException",t,f(f({},r),{event_id:i})),i},t.prototype.captureMessage=function(t,n,i){var r=this.K=F(),e=i;if(!i){var o=void 0;try{throw new Error(t)}catch(t){o=t}e={originalException:t,syntheticException:o}}return this.V("captureMessage",t,n,f(f({},e),{event_id:r})),r},t.prototype.captureEvent=function(t,n){var i=F();return"transaction"!==t.type&&(this.K=i),this.V("captureEvent",t,f(f({},n),{event_id:i})),i},t.prototype.lastEventId=function(){return this.K},t.prototype.addBreadcrumb=function(t,n){var i=this.getStackTop(),r=i.scope,e=i.client;if(r&&e){var o=e.getOptions&&e.getOptions()||{},u=o.beforeBreadcrumb,s=void 0===u?null:u,a=o.maxBreadcrumbs,c=void 0===a?100:a;if(!(c<=0)){var h=It(),v=f({timestamp:h},t),d=s?H(function(){return s(v,n)}):v;null!==d&&r.addBreadcrumb(d,c)}}},t.prototype.setUser=function(t){var n=this.getScope();n&&n.setUser(t)},t.prototype.setTags=function(t){var n=this.getScope();n&&n.setTags(t)},t.prototype.setExtras=function(t){var n=this.getScope();n&&n.setExtras(t)},t.prototype.setTag=function(t,n){var i=this.getScope();i&&i.setTag(t,n)},t.prototype.setExtra=function(t,n){var i=this.getScope();i&&i.setExtra(t,n)},t.prototype.setContext=function(t,n){var i=this.getScope();i&&i.setContext(t,n)},t.prototype.configureScope=function(t){var n=this.getStackTop(),i=n.scope,r=n.client;i&&r&&t(i)},t.prototype.run=function(t){var n=Jt(this);try{t(this)}finally{Jt(n)}},t.prototype.getIntegration=function(t){var n=this.getClient();if(!n)return null;try{return n.getIntegration(t)}catch(n){return $.warn("Cannot retrieve integration "+t.id+" from the current Hub"),null}},t.prototype.startSpan=function(t){return this.Y("startSpan",t)},t.prototype.startTransaction=function(t,n){return this.Y("startTransaction",t,n)},t.prototype.traceHeaders=function(){return this.Y("traceHeaders")},t.prototype.captureSession=function(t){if(void 0===t&&(t=!1),t)return this.endSession();this.Z()},t.prototype.endSession=function(){var t,n,i,r,e;null===(i=null===(n=null===(t=this.getStackTop())||void 0===t?void 0:t.scope)||void 0===n?void 0:n.getSession())||void 0===i||i.close(),this.Z(),null===(e=null===(r=this.getStackTop())||void 0===r?void 0:r.scope)||void 0===e||e.setSession()},t.prototype.startSession=function(t){var n=this.getStackTop(),i=n.scope,r=n.client,o=r&&r.getOptions()||{},u=o.release,s=o.environment,a=(q().navigator||{}).userAgent,c=new Ft(f(f(f({release:u,environment:s},i&&{user:i.getUser()}),a&&{userAgent:a}),t));if(i){var h=i.getSession&&i.getSession();h&&h.status===e.Ok&&h.update({status:e.Exited}),this.endSession(),i.setSession(c)}return c},t.prototype.Z=function(){var t=this.getStackTop(),n=t.scope,i=t.client;if(n){var r=n.getSession&&n.getSession();r&&i&&i.captureSession&&i.captureSession(r)}},t.prototype.V=function(t){for(var n,i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var e=this.getStackTop(),o=e.scope,u=e.client;u&&u[t]&&(n=u)[t].apply(n,l(i,[o]))},t.prototype.Y=function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var r=Ht().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[t])return r.extensions[t].apply(this,n);$.warn("Extension method "+t+" couldn't be found, doing nothing.")},t}();function Ht(){var t=q();return t.__SENTRY__=t.__SENTRY__||{extensions:{},hub:void 0},t}function Jt(t){var n=Ht(),i=Gt(n);return Wt(n,t),i}function Bt(){var t=Ht();return Xt(t)&&!Gt(t).isOlderThan(Pt)||Wt(t,new Ut),I()?function(t){var n,i,r;try{var e=null===(r=null===(i=null===(n=Ht().__SENTRY__)||void 0===n?void 0:n.extensions)||void 0===i?void 0:i.domain)||void 0===r?void 0:r.active;if(!e)return Gt(t);if(!Xt(e)||Gt(e).isOlderThan(Pt)){var o=Gt(t).getStackTop();Wt(e,new Ut(o.client,Mt.clone(o.scope)))}return Gt(e)}catch(n){return Gt(t)}}(t):Gt(t)}function Xt(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function Gt(t){return t&&t.__SENTRY__&&t.__SENTRY__.hub?t.__SENTRY__.hub:(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=new Ut,t.__SENTRY__.hub)}function Wt(t,n){return!!t&&(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=n,!0)}function zt(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var r=Bt();if(r&&r[t])return r[t].apply(r,l(n));throw new Error("No hub defined or "+t+" was not found on the hub, please open a bug report.")}function captureException(t,n){var i;try{throw new Error("Sentry syntheticException")}catch(t){i=t}return zt("captureException",t,{captureContext:n,originalException:t,syntheticException:i})}function $t(t){zt("withScope",t)}var Kt=function(){function t(t,n,i){void 0===n&&(n={}),this.dsn=t,this.tt=new N(t),this.metadata=n,this.nt=i}return t.prototype.getDsn=function(){return this.tt},t.prototype.forceEnvelope=function(){return!!this.nt},t.prototype.getBaseApiEndpoint=function(){var t=this.getDsn(),n=t.protocol?t.protocol+":":"",i=t.port?":"+t.port:"";return n+"//"+t.host+i+(t.path?"/"+t.path:"")+"/api/"},t.prototype.getStoreEndpoint=function(){return this.it("store")},t.prototype.getStoreEndpointWithUrlEncodedAuth=function(){return this.getStoreEndpoint()+"?"+this.rt()},t.prototype.getEnvelopeEndpointWithUrlEncodedAuth=function(){return this.forceEnvelope()?this.nt:this.et()+"?"+this.rt()},t.prototype.getStoreEndpointPath=function(){var t=this.getDsn();return(t.path?"/"+t.path:"")+"/api/"+t.projectId+"/store/"},t.prototype.getRequestHeaders=function(t,n){var i=this.getDsn(),r=["Sentry sentry_version=7"];return r.push("sentry_client="+t+"/"+n),r.push("sentry_key="+i.publicKey),i.pass&&r.push("sentry_secret="+i.pass),{"Content-Type":"application/json","X-Sentry-Auth":r.join(", ")}},t.prototype.getReportDialogEndpoint=function(t){void 0===t&&(t={});var n=this.getDsn(),i=this.getBaseApiEndpoint()+"embed/error-page/",r=[];for(var e in r.push("dsn="+n.toString()),t)if("dsn"!==e)if("user"===e){if(!t.user)continue;t.user.name&&r.push("name="+encodeURIComponent(t.user.name)),t.user.email&&r.push("email="+encodeURIComponent(t.user.email))}else r.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return r.length?i+"?"+r.join("&"):i},t.prototype.et=function(){return this.it("envelope")},t.prototype.it=function(t){return this.nt?this.nt:""+this.getBaseApiEndpoint()+this.getDsn().projectId+"/"+t+"/"},t.prototype.rt=function(){var t,n={sentry_key:this.getDsn().publicKey,sentry_version:"7"};return t=n,Object.keys(t).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])}).join("&")},t}(),Vt=[];function Yt(t){return t.reduce(function(t,n){return t.every(function(t){return n.name!==t.name})&&t.push(n),t},[])}function Qt(t){var n={};return function(t){var n=t.defaultIntegrations&&l(t.defaultIntegrations)||[],i=t.integrations,r=l(Yt(n));Array.isArray(i)?r=l(r.filter(function(t){return i.every(function(n){return n.name!==t.name})}),Yt(i)):"function"==typeof i&&(r=i(r),r=Array.isArray(r)?r:[r]);var e=r.map(function(t){return t.name});return-1!==e.indexOf("Debug")&&r.push.apply(r,l(r.splice(e.indexOf("Debug"),1))),r}(t).forEach(function(t){n[t.name]=t,function(t){-1===Vt.indexOf(t.name)&&(t.setupOnce(qt,Bt),Vt.push(t.name),$.log("Integration installed: "+t.name))}(t)}),Object.defineProperty(n,"initialized",{value:!0}),n}var Zt=function(){function t(t,n){this.ot={},this.ut=0,this.st=new t(n),this.at=n,n.dsn&&(this.ct=new N(n.dsn))}return t.prototype.captureException=function(t,n,i){var r=this,e=n&&n.event_id;return this.ft(this.ht().eventFromException(t,n).then(function(t){return r.vt(t,n,i)}).then(function(t){e=t})),e},t.prototype.captureMessage=function(t,n,i,r){var e=this,o=i&&i.event_id,u=b(t)?this.ht().eventFromMessage(String(t),n,i):this.ht().eventFromException(t,i);return this.ft(u.then(function(t){return e.vt(t,i,r)}).then(function(t){o=t})),o},t.prototype.captureEvent=function(t,n,i){var r=n&&n.event_id;return this.ft(this.vt(t,n,i).then(function(t){r=t})),r},t.prototype.captureSession=function(t){this.dt()?"string"!=typeof t.release?$.warn("Discarded session because of missing or non-string release"):(this.lt(t),t.update({init:!1})):$.warn("SDK not enabled, will not capture session.")},t.prototype.getDsn=function(){return this.ct},t.prototype.getOptions=function(){return this.at},t.prototype.getTransport=function(){return this.ht().getTransport()},t.prototype.flush=function(t){var n=this;return this.pt(t).then(function(i){return n.getTransport().close(t).then(function(t){return i&&t})})},t.prototype.close=function(t){var n=this;return this.flush(t).then(function(t){return n.getOptions().enabled=!1,t})},t.prototype.setupIntegrations=function(){this.dt()&&!this.ot.initialized&&(this.ot=Qt(this.at))},t.prototype.getIntegration=function(t){try{return this.ot[t.id]||null}catch(n){return $.warn("Cannot retrieve integration "+t.id+" from the current Client"),null}},t.prototype.yt=function(t,n){var i,r,o=!1,u=!1,s=n.exception&&n.exception.values;if(s){u=!0;try{for(var a=v(s),c=a.next();!c.done;c=a.next()){var h=c.value.mechanism;if(h&&!1===h.handled){o=!0;break}}}catch(t){i={error:t}}finally{try{c&&!c.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}}var d=t.status===e.Ok;(d&&0===t.errors||d&&o)&&(t.update(f(f({},o&&{status:e.Crashed}),{errors:t.errors||Number(u||o)})),this.captureSession(t))},t.prototype.lt=function(t){this.ht().sendSession(t)},t.prototype.pt=function(t){var n=this;return new Ot(function(i){var r=0,e=setInterval(function(){0==n.ut?(clearInterval(e),i(!0)):(r+=1,t&&r>=t&&(clearInterval(e),i(!1)))},1)})},t.prototype.ht=function(){return this.st},t.prototype.dt=function(){return!1!==this.getOptions().enabled&&void 0!==this.ct},t.prototype.gt=function(t,n,i){var r=this,e=this.getOptions().normalizeDepth,o=void 0===e?3:e,u=f(f({},t),{event_id:t.event_id||(i&&i.event_id?i.event_id:F()),timestamp:t.timestamp||It()});this.bt(u),this.wt(u);var s=n;i&&i.captureContext&&(s=Mt.clone(s).update(i.captureContext));var a=Ot.resolve(u);return s&&(a=s.applyToEvent(u,i)),a.then(function(t){return"number"==typeof o&&o>0?r.Tt(t,o):t})},t.prototype.Tt=function(t,n){if(!t)return null;var i=f(f(f(f(f({},t),t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map(function(t){return f(f({},t),t.data&&{data:et(t.data,n)})})}),t.user&&{user:et(t.user,n)}),t.contexts&&{contexts:et(t.contexts,n)}),t.extra&&{extra:et(t.extra,n)});t.contexts&&t.contexts.trace&&(i.contexts.trace=t.contexts.trace);var r=this.getOptions().Et;return(void 0===r?{}:r).ensureNoCircularStructures?et(i):i},t.prototype.bt=function(t){var n=this.getOptions(),i=n.environment,r=n.release,e=n.dist,o=n.maxValueLength,u=void 0===o?250:o;"environment"in t||(t.environment="environment"in n?i:"production"),void 0===t.release&&void 0!==r&&(t.release=r),void 0===t.dist&&void 0!==e&&(t.dist=e),t.message&&(t.message=R(t.message,u));var s=t.exception&&t.exception.values&&t.exception.values[0];s&&s.value&&(s.value=R(s.value,u));var a=t.request;a&&a.url&&(a.url=R(a.url,u))},t.prototype.wt=function(t){var n=Object.keys(this.ot);n.length>0&&(t.sdk=t.sdk||{},t.sdk.integrations=l(t.sdk.integrations||[],n))},t.prototype.St=function(t){this.ht().sendEvent(t)},t.prototype.vt=function(t,n,i){return this.xt(t,n,i).then(function(t){return t.event_id},function(t){$.error(t)})},t.prototype.xt=function(t,n,i){var r,e,o=this,u=this.getOptions(),s=u.beforeSend,a=u.sampleRate,f=this.getTransport();if(!this.dt())return Ot.reject(new k("SDK not enabled, will not capture event."));var h="transaction"===t.type;return!h&&"number"==typeof a&&Math.random()>a?(null===(e=(r=f).recordLostEvent)||void 0===e||e.call(r,c.SampleRate,"event"),Ot.reject(new k("Discarding event because it's not included in the random sample (sampling rate = "+a+")"))):this.gt(t,i,n).then(function(i){var r,e;if(null===i)throw null===(e=(r=f).recordLostEvent)||void 0===e||e.call(r,c.EventProcessor,t.type||"event"),new k("An event processor returned null, will not send event.");if(n&&n.data&&!0===n.data.__sentry__||h||!s)return i;var u=s(i,n);return o._t(u)}).then(function(n){var r,e;if(null===n)throw null===(e=(r=f).recordLostEvent)||void 0===e||e.call(r,c.BeforeSend,t.type||"event"),new k("`beforeSend` returned `null`, will not send event.");var u=i&&i.getSession&&i.getSession();return!h&&u&&o.yt(u,n),o.St(n),n}).then(null,function(t){if(t instanceof k)throw t;throw o.captureException(t,{data:{__sentry__:!0},originalException:t}),new k("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: "+t)})},t.prototype.ft=function(t){var n=this;this.ut+=1,t.then(function(t){return n.ut-=1,t},function(t){return n.ut-=1,t})},t.prototype._t=function(t){var n="`beforeSend` method has to return `null` or a valid event.";if(S(t))return t.then(function(t){if(!w(t)&&null!==t)throw new k(n);return t},function(t){throw new k("beforeSend rejected with "+t)});if(!w(t)&&null!==t)throw new k(n);return t},t}(),tn=function(){function n(){}return n.prototype.sendEvent=function(n){return Ot.resolve({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:t.Status.Skipped})},n.prototype.close=function(t){return Ot.resolve(!0)},n}(),nn=function(){function t(t){this.at=t,this.at.dsn||$.warn("No DSN provided, backend will not do anything."),this.Ot=this.jt()}return t.prototype.eventFromException=function(t,n){throw new k("Backend has to implement `eventFromException` method")},t.prototype.eventFromMessage=function(t,n,i){throw new k("Backend has to implement `eventFromMessage` method")},t.prototype.sendEvent=function(t){this.Ot.sendEvent(t).then(null,function(t){$.error("Error while sending event: "+t)})},t.prototype.sendSession=function(t){this.Ot.sendSession?this.Ot.sendSession(t).then(null,function(t){$.error("Error while sending session: "+t)}):$.warn("Dropping session because custom transport doesn't implement sendSession")},t.prototype.getTransport=function(){return this.Ot},t.prototype.jt=function(){return new tn},t}();function rn(t){if(t.metadata&&t.metadata.sdk){var n=t.metadata.sdk;return{name:n.name,version:n.version}}}function en(t,n){return n?(t.sdk=t.sdk||{},t.sdk.name=t.sdk.name||n.name,t.sdk.version=t.sdk.version||n.version,t.sdk.integrations=l(t.sdk.integrations||[],n.integrations||[]),t.sdk.packages=l(t.sdk.packages||[],n.packages||[]),t):t}function on(t,n){var i=rn(n),r="aggregates"in t?"sessions":"session";return{body:JSON.stringify(f(f({sent_at:(new Date).toISOString()},i&&{sdk:i}),n.forceEnvelope()&&{dsn:n.getDsn().toString()}))+"\n"+JSON.stringify({type:r})+"\n"+JSON.stringify(t),type:r,url:n.getEnvelopeEndpointWithUrlEncodedAuth()}}function un(t,n){var i=rn(n),r=t.type||"event",e="transaction"===r||n.forceEnvelope(),o=t.debug_meta||{},u=o.transactionSampling,s=h(o,["transactionSampling"]),a=u||{},c=a.method,v=a.rate;0===Object.keys(s).length?delete t.debug_meta:t.debug_meta=s;var d={body:JSON.stringify(i?en(t,n.metadata.sdk):t),type:r,url:e?n.getEnvelopeEndpointWithUrlEncodedAuth():n.getStoreEndpointWithUrlEncodedAuth()};if(e){var l=JSON.stringify(f(f({event_id:t.event_id,sent_at:(new Date).toISOString()},i&&{sdk:i}),n.forceEnvelope()&&{dsn:n.getDsn().toString()}))+"\n"+JSON.stringify({type:r,sample_rates:[{id:c,rate:v}]})+"\n"+d.body;d.body=l}return d}var sn,an="6.13.2",cn=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){sn=Function.prototype.toString,Function.prototype.toString=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=this.__sentry_original__||this;return sn.apply(i,t)}},t.id="FunctionToString",t}(),fn=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],hn=function(){function t(n){void 0===n&&(n={}),this.at=n,this.name=t.id}return t.prototype.setupOnce=function(){qt(function(n){var i=Bt();if(!i)return n;var r=i.getIntegration(t);if(r){var e=i.getClient(),o=e?e.getOptions():{},u="function"==typeof r.kt?r.kt(o):{};return"function"!=typeof r.Dt?n:r.Dt(n,u)?null:n}return n})},t.prototype.Dt=function(t,n){return this.Nt(t,n)?($.warn("Event dropped due to being internal Sentry Error.\nEvent: "+U(t)),!0):this.It(t,n)?($.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+U(t)),!0):this.Ct(t,n)?($.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: "+U(t)+".\nUrl: "+this.Rt(t)),!0):!this.At(t,n)&&($.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: "+U(t)+".\nUrl: "+this.Rt(t)),!0)},t.prototype.Nt=function(t,n){if(!n.ignoreInternal)return!1;try{return t&&t.exception&&t.exception.values&&t.exception.values[0]&&"SentryError"===t.exception.values[0].type||!1}catch(t){return!1}},t.prototype.It=function(t,n){return!(!n.ignoreErrors||!n.ignoreErrors.length)&&this.Mt(t).some(function(t){return n.ignoreErrors.some(function(n){return M(t,n)})})},t.prototype.Ct=function(t,n){if(!n.denyUrls||!n.denyUrls.length)return!1;var i=this.Rt(t);return!!i&&n.denyUrls.some(function(t){return M(i,t)})},t.prototype.At=function(t,n){if(!n.allowUrls||!n.allowUrls.length)return!0;var i=this.Rt(t);return!i||n.allowUrls.some(function(t){return M(i,t)})},t.prototype.kt=function(t){return void 0===t&&(t={}),{allowUrls:l(this.at.whitelistUrls||[],this.at.allowUrls||[],t.whitelistUrls||[],t.allowUrls||[]),denyUrls:l(this.at.blacklistUrls||[],this.at.denyUrls||[],t.blacklistUrls||[],t.denyUrls||[]),ignoreErrors:l(this.at.ignoreErrors||[],t.ignoreErrors||[],fn),ignoreInternal:void 0===this.at.ignoreInternal||this.at.ignoreInternal}},t.prototype.Mt=function(t){if(t.message)return[t.message];if(t.exception)try{var n=t.exception.values&&t.exception.values[0]||{},i=n.type,r=void 0===i?"":i,e=n.value,o=void 0===e?"":e;return[""+o,r+": "+o]}catch(n){return $.error("Cannot extract message for event "+U(t)),[]}return[]},t.prototype.Lt=function(t){var n,i;void 0===t&&(t=[]);for(var r=t.length-1;r>=0;r--){var e=t[r];if("<anonymous>"!==(null===(n=e)||void 0===n?void 0:n.filename)&&"[native code]"!==(null===(i=e)||void 0===i?void 0:i.filename))return e.filename||null}return null},t.prototype.Rt=function(t){try{if(t.stacktrace){var n=t.stacktrace.frames;return this.Lt(n)}if(t.exception){var i=t.exception.values&&t.exception.values[0].stacktrace&&t.exception.values[0].stacktrace.frames;return this.Lt(i)}return null}catch(n){return $.error("Cannot extract url for event "+U(t)),null}},t.id="InboundFilters",t}(),vn=Object.freeze({__proto__:null,FunctionToString:cn,InboundFilters:hn}),dn="?",ln=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,pn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. \/=]+)(?::(\d+))?(?::(\d+))?\s*$/i,mn=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,yn=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,gn=/\((\S*)(?::(\d+))(?::(\d+))\)/,bn=/Minified React error #\d+;/i;function wn(t){var n=null,i=0;t&&("number"==typeof t.framesToPop?i=t.framesToPop:bn.test(t.message)&&(i=1));try{if(n=function(t){if(!t||!t.stacktrace)return null;for(var n,i=t.stacktrace,r=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,e=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,o=i.split("\n"),u=[],s=0;s<o.length;s+=2){var a=null;(n=r.exec(o[s]))?a={url:n[2],func:n[3],args:[],line:+n[1],column:null}:(n=e.exec(o[s]))&&(a={url:n[6],func:n[3]||n[4],args:n[5]?n[5].split(","):[],line:+n[1],column:+n[2]}),a&&(!a.func&&a.line&&(a.func=dn),u.push(a))}if(!u.length)return null;return{message:Sn(t),name:t.name,stack:u}}(t))return En(n,i)}catch(t){}try{if(n=function(t){var n,i;if(!t||!t.stack)return null;for(var r,e,o,u=[],s=t.stack.split("\n"),a=0;a<s.length;++a){if(e=ln.exec(s[a])){var c=e[2]&&0===e[2].indexOf("native");e[2]&&0===e[2].indexOf("eval")&&(r=gn.exec(e[2]))&&(e[2]=r[1],e[3]=r[2],e[4]=r[3]);var f=e[2]&&0===e[2].indexOf("address at ")?e[2].substr("address at ".length):e[2],h=e[1]||dn;n=d(Tn(h,f),2),h=n[0],f=n[1],o={url:f,func:h,args:c?[e[2]]:[],line:e[3]?+e[3]:null,column:e[4]?+e[4]:null}}else if(e=mn.exec(s[a]))o={url:e[2],func:e[1]||dn,args:[],line:+e[3],column:e[4]?+e[4]:null};else{if(!(e=pn.exec(s[a])))continue;e[3]&&e[3].indexOf(" > eval")>-1&&(r=yn.exec(e[3]))?(e[1]=e[1]||"eval",e[3]=r[1],e[4]=r[2],e[5]=""):0!==a||e[5]||void 0===t.columnNumber||(u[0].column=t.columnNumber+1);var f=e[3],h=e[1]||dn;i=d(Tn(h,f),2),h=i[0],f=i[1],o={url:f,func:h,args:e[2]?e[2].split(","):[],line:e[4]?+e[4]:null,column:e[5]?+e[5]:null}}!o.func&&o.line&&(o.func=dn),u.push(o)}if(!u.length)return null;return{message:Sn(t),name:t.name,stack:u}}(t))return En(n,i)}catch(t){}return{message:Sn(t),name:t&&t.name,stack:[],failed:!0}}var Tn=function(t,n){var i=-1!==t.indexOf("safari-extension"),r=-1!==t.indexOf("safari-web-extension");return i||r?[-1!==t.indexOf("@")?t.split("@")[0]:dn,i?"safari-extension:"+n:"safari-web-extension:"+n]:[t,n]};function En(t,n){try{return f(f({},t),{stack:t.stack.slice(n)})}catch(n){return t}}function Sn(t){var n=t&&t.message;return n?n.error&&"string"==typeof n.error.message?n.error.message:n:"No error message"}var xn=50;function _n(t){var n=jn(t.stack),i={type:t.name,value:t.message};return n&&n.length&&(i.stacktrace={frames:n}),void 0===i.type&&""===i.value&&(i.value="Unrecoverable error caught"),i}function On(t){return{exception:{values:[_n(t)]}}}function jn(t){if(!t||!t.length)return[];var n=t,i=n[0].func||"",r=n[n.length-1].func||"";return-1===i.indexOf("captureMessage")&&-1===i.indexOf("captureException")||(n=n.slice(1)),-1!==r.indexOf("sentryWrapped")&&(n=n.slice(0,-1)),n.slice(0,xn).map(function(t){return{colno:null===t.column?void 0:t.column,filename:t.url||n[0].url,function:t.func||"?",in_app:!0,lineno:null===t.line?void 0:t.line}}).reverse()}function kn(t,n,i){var r,e;if(void 0===i&&(i={}),m(t)&&t.error)return r=On(wn(t=t.error));if(y(t)||(e=t,"[object DOMException]"===Object.prototype.toString.call(e))){var o=t,u=o.name||(y(o)?"DOMError":"DOMException"),s=o.message?u+": "+o.message:u;return J(r=Dn(s,n,i),s),"code"in o&&(r.tags=f(f({},r.tags),{"DOMException.code":""+o.code})),r}return p(t)?r=On(wn(t)):w(t)||T(t)?(B(r=function(t,n,i){var r={exception:{values:[{type:T(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:"Non-Error "+(i?"promise rejection":"exception")+" captured with keys: "+ot(t)}]},extra:{__serialized__:nt(t)}};if(n){var e=jn(wn(n).stack);r.stacktrace={frames:e}}return r}(t,n,i.rejection),{synthetic:!0}),r):(J(r=Dn(t,n,i),""+t,void 0),B(r,{synthetic:!0}),r)}function Dn(t,n,i){void 0===i&&(i={});var r={message:t};if(i.attachStacktrace&&n){var e=jn(wn(n).stack);r.stacktrace={frames:e}}return r}var Nn={event:"error",transaction:"transaction",session:"session",attachment:"attachment"},In=q(),Cn=function(){function n(t){var n=this;this.options=t,this.k=new jt(30),this.qt={},this.Ft={},this.Pt=new Kt(t.dsn,t.Ut,t.tunnel),this.url=this.Pt.getStoreEndpointWithUrlEncodedAuth(),this.options.sendClientReports&&In.document&&In.document.addEventListener("visibilitychange",function(){"hidden"===In.document.visibilityState&&n.Ht()})}return n.prototype.sendEvent=function(t){throw new k("Transport Class has to implement `sendEvent` method")},n.prototype.close=function(t){return this.k.drain(t)},n.prototype.recordLostEvent=function(t,n){var i;if(this.options.sendClientReports){var r=Nn[n]+":"+t;$.log("Adding outcome: "+r),this.Ft[r]=(null!=(i=this.Ft[r])?i:0)+1}},n.prototype.Ht=function(){if(this.options.sendClientReports)if(In.navigator&&"function"==typeof In.navigator.sendBeacon){var t=this.Ft;if(this.Ft={},Object.keys(t).length){$.log("Flushing outcomes:\n"+JSON.stringify(t,null,2));var n=this.Pt.getEnvelopeEndpointWithUrlEncodedAuth(),i=JSON.stringify({})+"\n"+JSON.stringify({type:"client_report"})+"\n"+JSON.stringify({timestamp:It(),discarded_events:Object.keys(t).map(function(n){var i=d(n.split(":"),2),r=i[0];return{reason:i[1],category:r,quantity:t[n]}})});In.navigator.sendBeacon(n,i)}else $.log("No outcomes to flush")}else $.warn("Beacon API not available, skipping sending outcomes.")},n.prototype.Jt=function(n){var i=n.requestType,r=n.response,e=n.headers,o=n.resolve,u=n.reject,s=t.Status.fromHttpCode(r.status);this.Bt(e)&&$.warn("Too many "+i+" requests, backing off until: "+this.Xt(i)),s!==t.Status.Success?u(r):o({status:s})},n.prototype.Xt=function(t){var n=Nn[t];return this.qt[n]||this.qt.all},n.prototype.Gt=function(t){return this.Xt(t)>new Date(Date.now())},n.prototype.Bt=function(t){var n,i,r,e,o=Date.now(),u=t["x-sentry-rate-limits"],s=t["retry-after"];if(u){try{for(var a=v(u.trim().split(",")),c=a.next();!c.done;c=a.next()){var f=c.value.split(":",2),h=parseInt(f[0],10),d=1e3*(isNaN(h)?60:h);try{for(var l=(r=void 0,v(f[1].split(";"))),p=l.next();!p.done;p=l.next()){var m=p.value;this.qt[m||"all"]=new Date(o+d)}}catch(t){r={error:t}}finally{try{p&&!p.done&&(e=l.return)&&e.call(l)}finally{if(r)throw r.error}}}}catch(t){n={error:t}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}return!0}return!!s&&(this.qt.all=new Date(o+function(t,n){if(!n)return X;var i=parseInt(""+n,10);if(!isNaN(i))return 1e3*i;var r=Date.parse(""+n);return isNaN(r)?X:r-t}(o,s)),!0)},n}();var Rn=function(t){function n(n,i){void 0===i&&(i=function(){var t,n,i=q();if(at(i.fetch))return i.fetch.bind(i);var r=i.document,e=i.fetch;if("function"==typeof(null===(t=r)||void 0===t?void 0:t.createElement))try{var o=r.createElement("iframe");o.hidden=!0,r.head.appendChild(o),(null===(n=o.contentWindow)||void 0===n?void 0:n.fetch)&&(e=o.contentWindow.fetch),r.head.removeChild(o)}catch(t){$.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return e.bind(i)}());var r=t.call(this,n)||this;return r.Wt=i,r}return i(n,t),n.prototype.sendEvent=function(t){return this.zt(un(t,this.Pt),t)},n.prototype.sendSession=function(t){return this.zt(on(t,this.Pt),t)},n.prototype.zt=function(t,n){var i=this;if(this.Gt(t.type))return this.recordLostEvent(c.RateLimitBackoff,t.type),Promise.reject({event:n,type:t.type,reason:"Transport for "+t.type+" requests locked till "+this.Xt(t.type)+" due to too many requests.",status:429});var r={body:t.body,method:"POST",referrerPolicy:ct()?"origin":""};return void 0!==this.options.fetchParameters&&Object.assign(r,this.options.fetchParameters),void 0!==this.options.headers&&(r.headers=this.options.headers),this.k.add(function(){return new Ot(function(n,e){i.Wt(t.url,r).then(function(r){var o={"x-sentry-rate-limits":r.headers.get("X-Sentry-Rate-Limits"),"retry-after":r.headers.get("Retry-After")};i.Jt({requestType:t.type,response:r,headers:o,resolve:n,reject:e})}).catch(e)})}).then(void 0,function(n){throw n instanceof k?i.recordLostEvent(c.QueueOverflow,t.type):i.recordLostEvent(c.NetworkError,t.type),n})},n}(Cn),An=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.sendEvent=function(t){return this.zt(un(t,this.Pt),t)},n.prototype.sendSession=function(t){return this.zt(on(t,this.Pt),t)},n.prototype.zt=function(t,n){var i=this;return this.Gt(t.type)?(this.recordLostEvent(c.RateLimitBackoff,t.type),Promise.reject({event:n,type:t.type,reason:"Transport for "+t.type+" requests locked till "+this.Xt(t.type)+" due to too many requests.",status:429})):this.k.add(function(){return new Ot(function(n,r){var e=new XMLHttpRequest;for(var o in e.onreadystatechange=function(){if(4===e.readyState){var o={"x-sentry-rate-limits":e.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":e.getResponseHeader("Retry-After")};i.Jt({requestType:t.type,response:e,headers:o,resolve:n,reject:r})}},e.open("POST",t.url),i.options.headers)i.options.headers.hasOwnProperty(o)&&e.setRequestHeader(o,i.options.headers[o]);e.send(t.body)})}).then(void 0,function(n){throw n instanceof k?i.recordLostEvent(c.QueueOverflow,t.type):i.recordLostEvent(c.NetworkError,t.type),n})},n}(Cn),Mn=Object.freeze({__proto__:null,BaseTransport:Cn,FetchTransport:Rn,XHRTransport:An}),Ln=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return i(r,n),r.prototype.eventFromException=function(n,i){return function(n,i,r){var e=kn(i,r&&r.syntheticException||void 0,{attachStacktrace:n.attachStacktrace});return B(e,{handled:!0,type:"generic"}),e.level=t.Severity.Error,r&&r.event_id&&(e.event_id=r.event_id),Ot.resolve(e)}(this.at,n,i)},r.prototype.eventFromMessage=function(n,i,r){return void 0===i&&(i=t.Severity.Info),function(n,i,r,e){void 0===r&&(r=t.Severity.Info);var o=Dn(i,e&&e.syntheticException||void 0,{attachStacktrace:n.attachStacktrace});return o.level=r,e&&e.event_id&&(o.event_id=e.event_id),Ot.resolve(o)}(this.at,n,i,r)},r.prototype.jt=function(){if(!this.at.dsn)return n.prototype.jt.call(this);var t=f(f({},this.at.transportOptions),{dsn:this.at.dsn,tunnel:this.at.tunnel,sendClientReports:this.at.sendClientReports,Ut:this.at.Ut});return this.at.transport?new this.at.transport(t):st()?new Rn(t):new An(t)},r}(nn),qn=q(),Fn=0;function Pn(){return Fn>0}function Un(t,n,i){if(void 0===n&&(n={}),"function"!=typeof t)return t;try{if(t.__sentry__)return t;if(t.__sentry_wrapped__)return t.__sentry_wrapped__}catch(n){return t}var sentryWrapped=function(){var r=Array.prototype.slice.call(arguments);try{i&&"function"==typeof i&&i.apply(this,arguments);var e=r.map(function(t){return Un(t,n)});return t.handleEvent?t.handleEvent.apply(this,e):t.apply(this,e)}catch(t){throw Fn+=1,setTimeout(function(){Fn-=1}),$t(function(i){i.addEventProcessor(function(t){var i=f({},t);return n.mechanism&&(J(i,void 0,void 0),B(i,n.mechanism)),i.extra=f(f({},i.extra),{arguments:r}),i}),captureException(t)}),t}};try{for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(sentryWrapped[r]=t[r])}catch(t){}t.prototype=t.prototype||{},sentryWrapped.prototype=t.prototype,Object.defineProperty(t,"__sentry_wrapped__",{enumerable:!1,value:sentryWrapped}),Object.defineProperties(sentryWrapped,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:t}});try{Object.getOwnPropertyDescriptor(sentryWrapped,"name").configurable&&Object.defineProperty(sentryWrapped,"name",{get:function(){return t.name}})}catch(t){}return sentryWrapped}var Hn=function(){function n(t){this.name=n.id,this.$t=!1,this.Kt=!1,this.at=f({onerror:!0,onunhandledrejection:!0},t)}return n.prototype.setupOnce=function(){Error.stackTraceLimit=50,this.at.onerror&&($.log("Global Handler attached: onerror"),this.Vt()),this.at.onunhandledrejection&&($.log("Global Handler attached: onunhandledrejection"),this.Yt())},n.prototype.Vt=function(){var t=this;this.$t||(pt({callback:function(i){var r=i.error,e=Bt(),o=e.getIntegration(n),u=r&&!0===r.__sentry_own_request__;if(o&&!Pn()&&!u){var s=e.getClient(),a=void 0===r&&g(i.msg)?t.Qt(i.msg,i.url,i.line,i.column):t.Zt(kn(r||i.msg,void 0,{attachStacktrace:s&&s.getOptions().attachStacktrace,rejection:!1}),i.url,i.line,i.column);B(a,{handled:!1,type:"onerror"}),e.captureEvent(a,{originalException:r})}},type:"error"}),this.$t=!0)},n.prototype.Yt=function(){var i=this;this.Kt||(pt({callback:function(r){var e=r;try{"reason"in r?e=r.reason:"detail"in r&&"reason"in r.detail&&(e=r.detail.reason)}catch(t){}var o=Bt(),u=o.getIntegration(n),s=e&&!0===e.__sentry_own_request__;if(!u||Pn()||s)return!0;var a=o.getClient(),c=b(e)?i.tn(e):kn(e,void 0,{attachStacktrace:a&&a.getOptions().attachStacktrace,rejection:!0});c.level=t.Severity.Error,B(c,{handled:!1,type:"onunhandledrejection"}),o.captureEvent(c,{originalException:e})},type:"unhandledrejection"}),this.Kt=!0)},n.prototype.Qt=function(t,n,i,r){var e,o=m(t)?t.message:t,u=o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);u&&(e=u[1],o=u[2]);var s={exception:{values:[{type:e||"Error",value:o}]}};return this.Zt(s,n,i,r)},n.prototype.tn=function(t){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(t)}]}}},n.prototype.Zt=function(t,n,i,r){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].stacktrace=t.exception.values[0].stacktrace||{},t.exception.values[0].stacktrace.frames=t.exception.values[0].stacktrace.frames||[];var e=isNaN(parseInt(r,10))?void 0:r,o=isNaN(parseInt(i,10))?void 0:i,u=g(n)&&n.length>0?n:function(){var t=q();try{return t.document.location.href}catch(t){return""}}();return 0===t.exception.values[0].stacktrace.frames.length&&t.exception.values[0].stacktrace.frames.push({colno:e,filename:u,function:"?",in_app:!0,lineno:o}),t},n.id="GlobalHandlers",n}(),Jn=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Bn=function(){function t(n){this.name=t.id,this.at=f({XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},n)}return t.prototype.setupOnce=function(){var t=q();(this.at.setTimeout&&Q(t,"setTimeout",this.nn.bind(this)),this.at.setInterval&&Q(t,"setInterval",this.nn.bind(this)),this.at.requestAnimationFrame&&Q(t,"requestAnimationFrame",this.in.bind(this)),this.at.XMLHttpRequest&&"XMLHttpRequest"in t&&Q(XMLHttpRequest.prototype,"send",this.rn.bind(this)),this.at.eventTarget)&&(Array.isArray(this.at.eventTarget)?this.at.eventTarget:Jn).forEach(this.en.bind(this))},t.prototype.nn=function(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=n[0];return n[0]=Un(r,{mechanism:{data:{function:Y(t)},handled:!0,type:"instrument"}}),t.apply(this,n)}},t.prototype.in=function(t){return function(n){return t.call(this,Un(n,{mechanism:{data:{function:"requestAnimationFrame",handler:Y(t)},handled:!0,type:"instrument"}}))}},t.prototype.en=function(t){var n=q(),i=n[t]&&n[t].prototype;i&&i.hasOwnProperty&&i.hasOwnProperty("addEventListener")&&(Q(i,"addEventListener",function(n){return function(i,r,e){try{"function"==typeof r.handleEvent&&(r.handleEvent=Un(r.handleEvent.bind(r),{mechanism:{data:{function:"handleEvent",handler:Y(r),target:t},handled:!0,type:"instrument"}}))}catch(t){}return n.call(this,i,Un(r,{mechanism:{data:{function:"addEventListener",handler:Y(r),target:t},handled:!0,type:"instrument"}}),e)}}),Q(i,"removeEventListener",function(t){return function(n,i,r){var e,o=i;try{var u=null===(e=o)||void 0===e?void 0:e.__sentry_wrapped__;u&&t.call(this,n,u,r)}catch(t){}return t.call(this,n,o,r)}}))},t.prototype.rn=function(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(function(t){t in r&&"function"==typeof r[t]&&Q(r,t,function(n){var i={mechanism:{data:{function:t,handler:Y(n)},handled:!0,type:"instrument"}};return n.__sentry_original__&&(i.mechanism.data.handler=Y(n.__sentry_original__)),Un(n,i)})}),t.apply(this,n)}},t.id="TryCatch",t}(),Xn=function(){function n(t){this.name=n.id,this.at=f({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},t)}return n.prototype.addSentryBreadcrumb=function(t){this.at.sentry&&Bt().addBreadcrumb({category:"sentry."+("transaction"===t.type?"transaction":"event"),event_id:t.event_id,level:t.level,message:U(t)},{event:t})},n.prototype.setupOnce=function(){var t=this;this.at.console&&pt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.on.apply(t,l(n))},type:"console"}),this.at.dom&&pt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.un.apply(t,l(n))},type:"dom"}),this.at.xhr&&pt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.sn.apply(t,l(n))},type:"xhr"}),this.at.fetch&&pt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.an.apply(t,l(n))},type:"fetch"}),this.at.history&&pt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.cn.apply(t,l(n))},type:"history"})},n.prototype.on=function(n){var i={category:"console",data:{arguments:n.args,logger:"console"},level:t.Severity.fromString(n.level),message:A(n.args," ")};if("assert"===n.level){if(!1!==n.args[0])return;i.message="Assertion failed: "+(A(n.args.slice(1)," ")||"console.assert"),i.data.arguments=n.args.slice(1)}Bt().addBreadcrumb(i,{input:n.args,level:n.level})},n.prototype.un=function(t){var n,i="object"==typeof this.at.dom?this.at.dom.serializeAttribute:void 0;"string"==typeof i&&(i=[i]);try{n=t.event.target?_(t.event.target,i):_(t.event,i)}catch(t){n="<unknown>"}0!==n.length&&Bt().addBreadcrumb({category:"ui."+t.name,message:n},{event:t.event,name:t.name,global:t.global})},n.prototype.sn=function(t){if(t.endTimestamp){if(t.xhr.__sentry_own_request__)return;var n=t.xhr.__sentry_xhr__||{},i=n.method,r=n.url,e=n.status_code,o=n.body;Bt().addBreadcrumb({category:"xhr",data:{method:i,url:r,status_code:e},type:"http"},{xhr:t.xhr,input:o})}else;},n.prototype.an=function(n){n.endTimestamp&&(n.fetchData.url.match(/sentry_key/)&&"POST"===n.fetchData.method||(n.error?Bt().addBreadcrumb({category:"fetch",data:n.fetchData,level:t.Severity.Error,type:"http"},{data:n.error,input:n.args}):Bt().addBreadcrumb({category:"fetch",data:f(f({},n.fetchData),{status_code:n.response.status}),type:"http"},{input:n.args,response:n.response})))},n.prototype.cn=function(t){var n=q(),i=t.from,r=t.to,e=P(n.location.href),o=P(i),u=P(r);o.path||(o=e),e.protocol===u.protocol&&e.host===u.host&&(r=u.relative),e.protocol===o.protocol&&e.host===o.host&&(i=o.relative),Bt().addBreadcrumb({category:"navigation",data:{from:i,to:r}})},n.id="Breadcrumbs",n}(),Gn="cause",Wn=5,zn=function(){function t(n){void 0===n&&(n={}),this.name=t.id,this.fn=n.key||Gn,this.j=n.limit||Wn}return t.prototype.setupOnce=function(){qt(function(n,i){var r=Bt().getIntegration(t);if(r){var e=r.hn&&r.hn.bind(r);return"function"==typeof e?e(n,i):n}return n})},t.prototype.hn=function(t,n){if(!(t.exception&&t.exception.values&&n&&x(n.originalException,Error)))return t;var i=this.vn(n.originalException,this.fn);return t.exception.values=l(i,t.exception.values),t},t.prototype.vn=function(t,n,i){if(void 0===i&&(i=[]),!x(t[n],Error)||i.length+1>=this.j)return i;var r=_n(wn(t[n]));return this.vn(t[n],n,l([r],i))},t.id="LinkedErrors",t}(),$n=q(),Kn=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){qt(function(n){var i,r,e;if(Bt().getIntegration(t)){if(!$n.navigator&&!$n.location&&!$n.document)return n;var o=(null===(i=n.request)||void 0===i?void 0:i.url)||(null===(r=$n.location)||void 0===r?void 0:r.href),u=($n.document||{}).referrer,s=($n.navigator||{}).userAgent,a=f(f(f({},null===(e=n.request)||void 0===e?void 0:e.headers),u&&{Referer:u}),s&&{"User-Agent":s}),c=f(f({},o&&{url:o}),{headers:a});return f(f({},n),{request:c})}return n})},t.id="UserAgent",t}(),Vn=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(n,i){n(function(n){var r=i().getIntegration(t);if(r){try{if(r.Dt(n,r.dn))return $.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(t){return r.dn=n}return r.dn=n}return n})},t.prototype.Dt=function(t,n){return!!n&&(!!this.ln(t,n)||!!this.pn(t,n))},t.prototype.ln=function(t,n){var i=t.message,r=n.message;return!(!i&&!r)&&(!(i&&!r||!i&&r)&&(i===r&&(!!this.mn(t,n)&&!!this.yn(t,n))))},t.prototype.gn=function(t){var n=t.exception;if(n)try{return n.values[0].stacktrace.frames}catch(t){return}else if(t.stacktrace)return t.stacktrace.frames},t.prototype.yn=function(t,n){var i=this.gn(t),r=this.gn(n);if(!i&&!r)return!0;if(i&&!r||!i&&r)return!1;if(i=i,(r=r).length!==i.length)return!1;for(var e=0;e<r.length;e++){var o=r[e],u=i[e];if(o.filename!==u.filename||o.lineno!==u.lineno||o.colno!==u.colno||o.function!==u.function)return!1}return!0},t.prototype.bn=function(t){return t.exception&&t.exception.values&&t.exception.values[0]},t.prototype.pn=function(t,n){var i=this.bn(n),r=this.bn(t);return!(!i||!r)&&(i.type===r.type&&i.value===r.value&&(!!this.mn(t,n)&&!!this.yn(t,n)))},t.prototype.mn=function(t,n){var i=t.fingerprint,r=n.fingerprint;if(!i&&!r)return!0;if(i&&!r||!i&&r)return!1;i=i,r=r;try{return!(i.join("")!==r.join(""))}catch(t){return!1}},t.id="Dedupe",t}(),Yn=Object.freeze({__proto__:null,GlobalHandlers:Hn,TryCatch:Bn,Breadcrumbs:Xn,LinkedErrors:zn,UserAgent:Kn,Dedupe:Vn}),Qn=function(t){function n(n){void 0===n&&(n={});return n.Ut=n.Ut||{},n.Ut.sdk=n.Ut.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:an}],version:an},t.call(this,Ln,n)||this}return i(n,t),n.prototype.showReportDialog=function(t){void 0===t&&(t={}),q().document&&(this.dt()?function(t){if(void 0===t&&(t={}),qn.document)if(t.eventId)if(t.dsn){var n=qn.document.createElement("script");n.async=!0,n.src=new Kt(t.dsn).getReportDialogEndpoint(t),t.onLoad&&(n.onload=t.onLoad);var i=qn.document.head||qn.document.body;i&&i.appendChild(n)}else $.error("Missing dsn option in showReportDialog call");else $.error("Missing eventId option in showReportDialog call")}(f(f({},t),{dsn:t.dsn||this.getDsn()})):$.error("Trying to call showReportDialog with Sentry Client disabled"))},n.prototype.gt=function(n,i,r){return n.platform=n.platform||"javascript",t.prototype.gt.call(this,n,i,r)},n.prototype.St=function(n){var i=this.getIntegration(Xn);i&&i.addSentryBreadcrumb(n),t.prototype.St.call(this,n)},n}(Zt),Zn=[new hn,new cn,new Bn,new Xn,new Hn,new zn,new Vn,new Kn];var ti={},ni=q();ni.Sentry&&ni.Sentry.Integrations&&(ti=ni.Sentry.Integrations);var ii,ri=f(f(f({},ti),vn),Yn);!function(t){t.Ok="ok",t.DeadlineExceeded="deadline_exceeded",t.Unauthenticated="unauthenticated",t.PermissionDenied="permission_denied",t.NotFound="not_found",t.ResourceExhausted="resource_exhausted",t.InvalidArgument="invalid_argument",t.Unimplemented="unimplemented",t.Unavailable="unavailable",t.InternalError="internal_error",t.UnknownError="unknown_error",t.Cancelled="cancelled",t.AlreadyExists="already_exists",t.FailedPrecondition="failed_precondition",t.Aborted="aborted",t.OutOfRange="out_of_range",t.DataLoss="data_loss"}(ii||(ii={})),function(t){t.fromHttpCode=function(n){if(n<400)return t.Ok;if(n>=400&&n<500)switch(n){case 401:return t.Unauthenticated;case 403:return t.PermissionDenied;case 404:return t.NotFound;case 409:return t.AlreadyExists;case 413:return t.FailedPrecondition;case 429:return t.ResourceExhausted;default:return t.InvalidArgument}if(n>=500&&n<600)switch(n){case 501:return t.Unimplemented;case 503:return t.Unavailable;case 504:return t.DeadlineExceeded;default:return t.InternalError}return t.UnknownError}}(ii||(ii={}));var ei=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function oi(t){var n;return void 0===t&&(t=null===(n=Bt().getClient())||void 0===n?void 0:n.getOptions()),!!t&&("tracesSampleRate"in t||"tracesSampler"in t)}function ui(t){var n,i;return void 0===t&&(t=Bt()),null===(i=null===(n=t)||void 0===n?void 0:n.getScope())||void 0===i?void 0:i.getTransaction()}function si(t){return t/1e3}function ai(){var t=ui();t&&($.log("[Tracing] Transaction: "+ii.InternalError+" -> Global error occured"),t.setStatus(ii.InternalError))}var ci=function(){function t(t){void 0===t&&(t=1e3),this.spans=[],this.wn=t}return t.prototype.add=function(t){this.spans.length>this.wn?t.spanRecorder=void 0:this.spans.push(t)},t}(),fi=function(){function t(t){if(this.traceId=F(),this.spanId=F().substring(16),this.startTimestamp=Rt(),this.tags={},this.data={},!t)return this;t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp)}return t.prototype.child=function(t){return this.startChild(t)},t.prototype.startChild=function(n){var i=new t(f(f({},n),{parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId}));return i.spanRecorder=this.spanRecorder,i.spanRecorder&&i.spanRecorder.add(i),i.transaction=this.transaction,i},t.prototype.setTag=function(t,n){var i;return this.tags=f(f({},this.tags),((i={})[t]=n,i)),this},t.prototype.setData=function(t,n){var i;return this.data=f(f({},this.data),((i={})[t]=n,i)),this},t.prototype.setStatus=function(t){return this.status=t,this},t.prototype.setHttpStatus=function(t){this.setTag("http.status_code",String(t));var n=ii.fromHttpCode(t);return n!==ii.UnknownError&&this.setStatus(n),this},t.prototype.isSuccess=function(){return this.status===ii.Ok},t.prototype.finish=function(t){this.endTimestamp="number"==typeof t?t:Rt()},t.prototype.toTraceparent=function(){var t="";return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),this.traceId+"-"+this.spanId+t},t.prototype.toContext=function(){return ut({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})},t.prototype.updateWithContext=function(t){var n,i,r,e,o;return this.data=null!=(n=t.data)?n:{},this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=null!=(i=t.spanId)?i:this.spanId,this.startTimestamp=null!=(r=t.startTimestamp)?r:this.startTimestamp,this.status=t.status,this.tags=null!=(e=t.tags)?e:{},this.traceId=null!=(o=t.traceId)?o:this.traceId,this},t.prototype.getTraceContext=function(){return ut({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})},t.prototype.toJSON=function(){return ut({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})},t}(),hi=function(t){function n(n,i){var r=t.call(this,n)||this;return r.Tn={},r.En=Bt(),x(i,Ut)&&(r.En=i),r.name=n.name||"",r.metadata=n.metadata||{},r.Sn=n.trimEnd,r.transaction=r,r}return i(n,t),n.prototype.setName=function(t){this.name=t},n.prototype.initSpanRecorder=function(t){void 0===t&&(t=1e3),this.spanRecorder||(this.spanRecorder=new ci(t)),this.spanRecorder.add(this)},n.prototype.setMeasurements=function(t){this.Tn=f({},t)},n.prototype.setMetadata=function(t){this.metadata=f(f({},this.metadata),t)},n.prototype.finish=function(n){var i,r,e,o=this;if(void 0===this.endTimestamp){if(this.name||($.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),t.prototype.finish.call(this,n),!0!==this.sampled)return $.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),void(null===(e=null===(i=this.En.getClient())||void 0===i?void 0:(r=i.getTransport()).recordLostEvent)||void 0===e||e.call(r,c.SampleRate,"transaction"));var u=this.spanRecorder?this.spanRecorder.spans.filter(function(t){return t!==o&&t.endTimestamp}):[];this.Sn&&u.length>0&&(this.endTimestamp=u.reduce(function(t,n){return t.endTimestamp&&n.endTimestamp?t.endTimestamp>n.endTimestamp?t:n:t}).endTimestamp);var s={contexts:{trace:this.getTraceContext()},spans:u,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",debug_meta:this.metadata};return Object.keys(this.Tn).length>0&&($.log("[Measurements] Adding measurements to transaction",JSON.stringify(this.Tn,void 0,2)),s.measurements=this.Tn),$.log("[Tracing] Finishing "+this.op+" transaction: "+this.name+"."),this.En.captureEvent(s)}},n.prototype.toContext=function(){var n=t.prototype.toContext.call(this);return ut(f(f({},n),{name:this.name,trimEnd:this.Sn}))},n.prototype.updateWithContext=function(n){var i;return t.prototype.updateWithContext.call(this,n),this.name=null!=(i=n.name)?i:"",this.Sn=n.trimEnd,this},n}(fi),vi=1e3,di=function(t){function n(n,i,r,e){void 0===r&&(r="");var o=t.call(this,e)||this;return o.xn=n,o._n=i,o.transactionSpanId=r,o}return i(n,t),n.prototype.add=function(n){var i=this;n.spanId!==this.transactionSpanId&&(n.finish=function(t){n.endTimestamp="number"==typeof t?t:Rt(),i._n(n.spanId)},void 0===n.endTimestamp&&this.xn(n.spanId)),t.prototype.add.call(this,n)},n}(ci),li=function(t){function n(n,i,r,e){void 0===r&&(r=vi),void 0===e&&(e=!1);var o=t.call(this,n,i)||this;return o.On=i,o.jn=r,o.kn=e,o.activities={},o.Dn=0,o.Nn=!1,o.In=[],i&&e&&(pi(i),$.log("Setting idle transaction on scope. Span ID: "+o.spanId),i.configureScope(function(t){return t.setSpan(o)})),o.Cn=setTimeout(function(){o.Nn||o.finish()},o.jn),o}return i(n,t),n.prototype.finish=function(n){var i,r,e=this;if(void 0===n&&(n=Rt()),this.Nn=!0,this.activities={},this.spanRecorder){$.log("[Tracing] finishing IdleTransaction",new Date(1e3*n).toISOString(),this.op);try{for(var o=v(this.In),u=o.next();!u.done;u=o.next()){(0,u.value)(this,n)}}catch(t){i={error:t}}finally{try{u&&!u.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}this.spanRecorder.spans=this.spanRecorder.spans.filter(function(t){if(t.spanId===e.spanId)return!0;t.endTimestamp||(t.endTimestamp=n,t.setStatus(ii.Cancelled),$.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(t,void 0,2)));var i=t.startTimestamp<n;return i||$.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(t,void 0,2)),i}),$.log("[Tracing] flushing IdleTransaction")}else $.log("[Tracing] No active IdleTransaction");return this.kn&&pi(this.On),t.prototype.finish.call(this,n)},n.prototype.registerBeforeFinishCallback=function(t){this.In.push(t)},n.prototype.initSpanRecorder=function(t){var n=this;if(!this.spanRecorder){this.spanRecorder=new di(function(t){n.Nn||n.xn(t)},function(t){n.Nn||n._n(t)},this.spanId,t),$.log("Starting heartbeat"),this.Rn()}this.spanRecorder.add(this)},n.prototype.xn=function(t){this.Cn&&(clearTimeout(this.Cn),this.Cn=void 0),$.log("[Tracing] pushActivity: "+t),this.activities[t]=!0,$.log("[Tracing] new activities count",Object.keys(this.activities).length)},n.prototype._n=function(t){var n=this;if(this.activities[t]&&($.log("[Tracing] popActivity "+t),delete this.activities[t],$.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){var i=this.jn,r=Rt()+i/1e3;setTimeout(function(){n.Nn||n.finish(r)},i)}},n.prototype.An=function(){if(!this.Nn){var t=Object.keys(this.activities).join("");t===this.Mn?this.Dn+=1:this.Dn=1,this.Mn=t,this.Dn>=3?($.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus(ii.DeadlineExceeded),this.setTag("heartbeat","failed"),this.finish()):this.Rn()}},n.prototype.Rn=function(){var t=this;$.log("pinging Heartbeat -> current counter: "+this.Dn),setTimeout(function(){t.An()},5e3)},n}(hi);function pi(t){if(t){var n=t.getScope();if(n)n.getTransaction()&&n.setSpan(void 0)}}function mi(){var t=this.getScope();if(t){var n=t.getSpan();if(n)return{"sentry-trace":n.toTraceparent()}}return{}}function yi(t,n,i){return oi()?void 0!==t.sampled?(t.setMetadata({transactionSampling:{method:a.Explicit}}),t):("function"==typeof n.tracesSampler?(r=n.tracesSampler(i),t.setMetadata({transactionSampling:{method:a.Sampler,rate:Number(r)}})):void 0!==i.parentSampled?(r=i.parentSampled,t.setMetadata({transactionSampling:{method:a.Inheritance}})):(r=n.tracesSampleRate,t.setMetadata({transactionSampling:{method:a.Rate,rate:Number(r)}})),function(t){if(isNaN(t)||"number"!=typeof t&&"boolean"!=typeof t)return $.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got "+JSON.stringify(t)+" of type "+JSON.stringify(typeof t)+"."),!1;if(t<0||t>1)return $.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got "+t+"."),!1;return!0}(r)?r?(t.sampled=Math.random()<r,t.sampled?($.log("[Tracing] starting "+t.op+" transaction - "+t.name),t):($.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = "+Number(r)+")"),t)):($.log("[Tracing] Discarding transaction because "+("function"==typeof n.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):($.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)):(t.sampled=!1,t);var r}function gi(t,n){var i,r,e=(null===(i=this.getClient())||void 0===i?void 0:i.getOptions())||{},o=new hi(t,this);return(o=yi(o,e,f({parentSampled:t.parentSampled,transactionContext:t},n))).sampled&&o.initSpanRecorder(null===(r=e.Et)||void 0===r?void 0:r.maxSpans),o}function bi(){var t=Ht();if(t.__SENTRY__){var n={mongodb:function(){return new(C(module,"./integrations/mongo").Mongo)},mongoose:function(){return new(C(module,"./integrations/mongo").Mongo)({mongoose:!0})},mysql:function(){return new(C(module,"./integrations/mysql").Mysql)},pg:function(){return new(C(module,"./integrations/postgres").Postgres)}},i=Object.keys(n).filter(function(t){return!!function(t){var n;try{n=C(module,t)}catch(t){}try{var i=C(module,"process").cwd;n=C(module,i()+"/node_modules/"+t)}catch(t){}return n}(t)}).map(function(t){try{return n[t]()}catch(t){return}}).filter(function(t){return t});i.length>0&&(t.__SENTRY__.integrations=l(t.__SENTRY__.integrations||[],i))}}function wi(){var t;(t=Ht()).__SENTRY__&&(t.__SENTRY__.extensions=t.__SENTRY__.extensions||{},t.__SENTRY__.extensions.startTransaction||(t.__SENTRY__.extensions.startTransaction=gi),t.__SENTRY__.extensions.traceHeaders||(t.__SENTRY__.extensions.traceHeaders=mi)),I()&&bi(),pt({callback:ai,type:"error"}),pt({callback:ai,type:"unhandledrejection"})}var Ti=q();var Ei=function(t,n,i){var r;return function(e){n.value>=0&&(e||i)&&(n.delta=n.value-(r||0),(n.delta||void 0===r)&&(r=n.value,t(n)))}},Si=function(t,n){return{name:t,value:null!=n?n:-1,delta:0,entries:[],id:"v2-"+Date.now()+"-"+(Math.floor(Math.random()*(9e12-1))+1e12)}},xi=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var i=new PerformanceObserver(function(t){return t.getEntries().map(n)});return i.observe({type:t,buffered:!0}),i}}catch(t){}},_i=function(t,n){var i=function(r){"pagehide"!==r.type&&"hidden"!==q().document.visibilityState||(t(r),n&&(removeEventListener("visibilitychange",i,!0),removeEventListener("pagehide",i,!0)))};addEventListener("visibilitychange",i,!0),addEventListener("pagehide",i,!0)},Oi=-1,ji=function(){return Oi<0&&(Oi="hidden"===q().document.visibilityState?0:1/0,_i(function(t){var n=t.timeStamp;Oi=n},!0)),{get firstHiddenTime(){return Oi}}},ki={},Di=q(),Ni={Ln:!1},Ii=function(){function t(t){var n,i;this.Tn={},this.qn=0,!I()&&(null===(n=Di)||void 0===n?void 0:n.performance)&&(null===(i=Di)||void 0===i?void 0:i.document)&&(Di.performance.mark&&Di.performance.mark("sentry-tracing-init"),this.Fn(),this.Pn(t.Ln),this.Un())}return t.prototype.addPerformanceEntries=function(t){var n=this;if(Di&&Di.performance&&Di.performance.getEntries&&At){$.log("[Tracing] Adding & adjusting spans using Performance API");var i,r,e,o,u,s=si(At);if(Di.document&&Di.document.scripts)for(var a=0;a<Di.document.scripts.length;a++)if("true"===Di.document.scripts[a].dataset.entry){i=Di.document.scripts[a].src;break}if(Di.performance.getEntries().slice(this.qn).forEach(function(a){var c=si(a.startTime),f=si(a.duration);if(!("navigation"===t.op&&s+c<t.startTimestamp))switch(a.entryType){case"navigation":!function(t,n,i){Ci({transaction:t,entry:n,event:"unloadEvent",timeOrigin:i}),Ci({transaction:t,entry:n,event:"redirect",timeOrigin:i}),Ci({transaction:t,entry:n,event:"domContentLoadedEvent",timeOrigin:i}),Ci({transaction:t,entry:n,event:"loadEvent",timeOrigin:i}),Ci({transaction:t,entry:n,event:"connect",timeOrigin:i}),Ci({transaction:t,entry:n,event:"secureConnection",timeOrigin:i,eventEnd:"connectEnd",description:"TLS/SSL"}),Ci({transaction:t,entry:n,event:"fetch",timeOrigin:i,eventEnd:"domainLookupStart",description:"cache"}),Ci({transaction:t,entry:n,event:"domainLookup",timeOrigin:i,description:"DNS"}),function(t,n,i){Ri(t,{op:"browser",description:"request",startTimestamp:i+si(n.requestStart),endTimestamp:i+si(n.responseEnd)}),Ri(t,{op:"browser",description:"response",startTimestamp:i+si(n.responseStart),endTimestamp:i+si(n.responseEnd)})}(t,n,i)}(t,a,s),o=s+si(a.responseStart),u=s+si(a.requestStart);break;case"mark":case"paint":case"measure":var h=function(t,n,i,r,e){var o=e+i,u=o+r;return Ri(t,{description:n.name,endTimestamp:u,op:n.entryType,startTimestamp:o}),o}(t,a,c,f,s);void 0===e&&"sentry-tracing-init"===a.name&&(e=h);var v=ji(),d=a.startTime<v.firstHiddenTime;"first-paint"===a.name&&d&&($.log("[Measurements] Adding FP"),n.Tn.fp={value:a.startTime},n.Tn["mark.fp"]={value:h}),"first-contentful-paint"===a.name&&d&&($.log("[Measurements] Adding FCP"),n.Tn.fcp={value:a.startTime},n.Tn["mark.fcp"]={value:h});break;case"resource":var l=a.name.replace(Di.location.origin,""),p=function(t,n,i,r,e,o){if("xmlhttprequest"===n.initiatorType||"fetch"===n.initiatorType)return;var u={};"transferSize"in n&&(u["Transfer Size"]=n.transferSize);"encodedBodySize"in n&&(u["Encoded Body Size"]=n.encodedBodySize);"decodedBodySize"in n&&(u["Decoded Body Size"]=n.decodedBodySize);var s=o+r,a=s+e;return Ri(t,{description:i,endTimestamp:a,op:n.initiatorType?"resource."+n.initiatorType:"resource",startTimestamp:s,data:u}),a}(t,a,l,c,f,s);void 0===r&&(i||"").indexOf(l)>-1&&(r=p)}}),void 0!==r&&void 0!==e&&Ri(t,{description:"evaluation",endTimestamp:e,op:"script",startTimestamp:r}),this.qn=Math.max(performance.getEntries().length-1,0),this.Hn(t),"pageload"===t.op){var c=si(At);"number"==typeof o&&($.log("[Measurements] Adding TTFB"),this.Tn.ttfb={value:1e3*(o-t.startTimestamp)},"number"==typeof u&&u<=o&&(this.Tn["ttfb.requestTime"]={value:1e3*(o-u)})),["fcp","fp","lcp"].forEach(function(i){if(n.Tn[i]&&!(c>=t.startTimestamp)){var r=n.Tn[i].value,e=c+si(r),o=Math.abs(1e3*(e-t.startTimestamp)),u=o-r;$.log("[Measurements] Normalized "+i+" from "+r+" to "+o+" ("+u+")"),n.Tn[i].value=o}}),this.Tn["mark.fid"]&&this.Tn.fid&&Ri(t,{description:"first input delay",endTimestamp:this.Tn["mark.fid"].value+si(this.Tn.fid.value),op:"web.vitals",startTimestamp:this.Tn["mark.fid"].value}),"fcp"in this.Tn||delete this.Tn.cls,t.setMeasurements(this.Tn),this.Jn(t)}}},t.prototype.Jn=function(t){this.Bn&&($.log("[Measurements] Adding LCP Data"),this.Bn.element&&t.setTag("lcp.element",_(this.Bn.element)),this.Bn.id&&t.setTag("lcp.id",this.Bn.id),this.Bn.url&&t.setTag("lcp.url",this.Bn.url.trim().slice(0,200)),t.setTag("lcp.size",this.Bn.size)),this.Xn&&this.Xn.sources&&($.log("[Measurements] Adding CLS Data"),this.Xn.sources.forEach(function(n,i){return t.setTag("cls.source."+(i+1),_(n.node))}))},t.prototype.Fn=function(){var t,n,i,r,e,o,u,s,a=this;t=function(t){var n=t.entries.pop();n&&($.log("[Measurements] Adding CLS"),a.Tn.cls={value:t.value},a.Xn=n)},r=Si("CLS",0),e=0,o=[],(s=xi("layout-shift",u=function(t){if(t&&!t.hadRecentInput){var n=o[0],u=o[o.length-1];e&&0!==o.length&&t.startTime-u.startTime<1e3&&t.startTime-n.startTime<5e3?(e+=t.value,o.push(t)):(e=t.value,o=[t]),e>r.value&&(r.value=e,r.entries=o,i&&i())}}))&&(i=Ei(t,r,n),_i(function(){s.takeRecords().map(u),i(!0)}))},t.prototype.Hn=function(t){var n=Di.navigator;if(n){var i=n.connection;i&&(i.effectiveType&&t.setTag("effectiveConnectionType",i.effectiveType),i.type&&t.setTag("connectionType",i.type),Ai(i.rtt)&&(this.Tn["connection.rtt"]={value:i.rtt}),Ai(i.downlink)&&(this.Tn["connection.downlink"]={value:i.downlink})),Ai(n.deviceMemory)&&t.setTag("deviceMemory",String(n.deviceMemory)),Ai(n.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(n.hardwareConcurrency))}},t.prototype.Pn=function(t){var n=this;!function(t,n){var i,r=ji(),e=Si("LCP"),o=function(t){var n=t.startTime;n<r.firstHiddenTime&&(e.value=n,e.entries.push(t)),i&&i()},u=xi("largest-contentful-paint",o);if(u){i=Ei(t,e,n);var s=function(){ki[e.id]||(u.takeRecords().map(o),u.disconnect(),ki[e.id]=!0,i(!0))};["keydown","click"].forEach(function(t){addEventListener(t,s,{once:!0,capture:!0})}),_i(s,!0)}}(function(t){var i=t.entries.pop();if(i){var r=si(At),e=si(i.startTime);$.log("[Measurements] Adding LCP"),n.Tn.lcp={value:t.value},n.Tn["mark.lcp"]={value:r+e},n.Bn=i}},t)},t.prototype.Un=function(){var t,n,i,r,e,o,u,s=this;t=function(t){var n=t.entries.pop();if(n){var i=si(At),r=si(n.startTime);$.log("[Measurements] Adding FID"),s.Tn.fid={value:t.value},s.Tn["mark.fid"]={value:i+r}}},r=ji(),e=Si("FID"),(u=xi("first-input",o=function(t){i&&t.startTime<r.firstHiddenTime&&(e.value=t.processingStart-t.startTime,e.entries.push(t),i(!0))}))&&(i=Ei(t,e,n),_i(function(){u.takeRecords().map(o),u.disconnect()},!0))},t}();function Ci(t){var n=t.transaction,i=t.entry,r=t.event,e=t.timeOrigin,o=t.eventEnd,u=t.description,s=o?i[o]:i[r+"End"],a=i[r+"Start"];a&&s&&Ri(n,{op:"browser",description:null!=u?u:r,startTimestamp:e+si(a),endTimestamp:e+si(s)})}function Ri(t,n){var i=n.startTimestamp,r=h(n,["startTimestamp"]);return i&&t.startTimestamp>i&&(t.startTimestamp=i),t.startChild(f({startTimestamp:i},r))}function Ai(t){return"number"==typeof t&&isFinite(t)}var Mi={traceFetch:!0,traceXHR:!0,tracingOrigins:["localhost",/^\//]};function Li(t){var n=f(f({},Mi),t),i=n.traceFetch,r=n.traceXHR,e=n.tracingOrigins,o=n.shouldCreateSpanForRequest,u={},s=function(t){if(u[t])return u[t];var n=e;return u[t]=n.some(function(n){return M(t,n)})&&!M(t,"sentry_key"),u[t]},a=s;"function"==typeof o&&(a=function(t){return s(t)&&o(t)});var c={};i&&pt({callback:function(t){!function(t,n,i){if(!oi()||!t.fetchData||!n(t.fetchData.url))return;if(t.endTimestamp&&t.fetchData.__span){var r=i[t.fetchData.__span];return void(r&&(t.response?r.setHttpStatus(t.response.status):t.error&&r.setStatus(ii.InternalError),r.finish(),delete i[t.fetchData.__span]))}var e=ui();if(e){var r=e.startChild({data:f(f({},t.fetchData),{type:"fetch"}),description:t.fetchData.method+" "+t.fetchData.url,op:"http.client"});t.fetchData.__span=r.spanId,i[r.spanId]=r;var o=t.args[0]=t.args[0],u=t.args[1]=t.args[1]||{},s=u.headers;x(o,Request)&&(s=o.headers),s?"function"==typeof s.append?s.append("sentry-trace",r.toTraceparent()):s=Array.isArray(s)?l(s,[["sentry-trace",r.toTraceparent()]]):f(f({},s),{"sentry-trace":r.toTraceparent()}):s={"sentry-trace":r.toTraceparent()},u.headers=s}}(t,a,c)},type:"fetch"}),r&&pt({callback:function(t){!function(t,n,i){var r,e;if(!oi()||(null===(r=t.xhr)||void 0===r?void 0:r.__sentry_own_request__)||!((null===(e=t.xhr)||void 0===e?void 0:e.__sentry_xhr__)&&n(t.xhr.__sentry_xhr__.url)))return;var o=t.xhr.__sentry_xhr__;if(t.endTimestamp&&t.xhr.__sentry_xhr_span_id__){var u=i[t.xhr.__sentry_xhr_span_id__];return void(u&&(u.setHttpStatus(o.status_code),u.finish(),delete i[t.xhr.__sentry_xhr_span_id__]))}var s=ui();if(s){var u=s.startChild({data:f(f({},o.data),{type:"xhr",method:o.method,url:o.url}),description:o.method+" "+o.url,op:"http.client"});if(t.xhr.__sentry_xhr_span_id__=u.spanId,i[t.xhr.__sentry_xhr_span_id__]=u,t.xhr.setRequestHeader)try{t.xhr.setRequestHeader("sentry-trace",u.toTraceparent())}catch(t){}}}(t,a,c)},type:"xhr"})}var qi=q();var Fi=f({idleTimeout:vi,markBackgroundTransactions:!0,maxTransactionDuration:600,routingInstrumentation:function(t,n,i){if(void 0===n&&(n=!0),void 0===i&&(i=!0),qi&&qi.location){var r,e=qi.location.href;n&&(r=t({name:qi.location.pathname,op:"pageload"})),i&&pt({callback:function(n){var i=n.to,o=n.from;void 0===o&&e&&-1!==e.indexOf(i)?e=void 0:o!==i&&(e=void 0,r&&($.log("[Tracing] Finishing current transaction with op: "+r.op),r.finish()),r=t({name:qi.location.pathname,op:"navigation"}))},type:"history"})}else $.warn("Could not initialize routing instrumentation due to invalid location")},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0},Mi),Pi=function(){function t(n){this.name=t.id,this.Gn=!1;var i=Mi.tracingOrigins;n&&n.tracingOrigins&&Array.isArray(n.tracingOrigins)&&0!==n.tracingOrigins.length?i=n.tracingOrigins:this.Gn=!0,this.options=f(f(f({},Fi),n),{tracingOrigins:i}),this.Wn=new Ii(f(f({},Ni),this.options.zn))}return t.prototype.setupOnce=function(t,n){var i=this;this.$n=n,this.Gn&&($.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),$.warn("[Tracing] We added a reasonable default for you: "+Mi.tracingOrigins));var r=this.options,e=r.routingInstrumentation,o=r.startTransactionOnLocationChange,u=r.startTransactionOnPageLoad,s=r.markBackgroundTransactions,a=r.traceFetch,c=r.traceXHR,f=r.tracingOrigins,h=r.shouldCreateSpanForRequest;e(function(t){return i.Kn(t)},u,o),s&&(Ti&&Ti.document?Ti.document.addEventListener("visibilitychange",function(){var t=ui();Ti.document.hidden&&t&&($.log("[Tracing] Transaction: "+ii.Cancelled+" -> since tab moved to the background, op: "+t.op),t.status||t.setStatus(ii.Cancelled),t.setTag("visibilitychange","document.hidden"),t.finish())}):$.warn("[Tracing] Could not set up background tab detection due to lack of global document")),Li({traceFetch:a,traceXHR:c,tracingOrigins:f,shouldCreateSpanForRequest:h})},t.prototype.Kn=function(t){var n=this;if(this.$n){var i=this.options,r=i.beforeNavigate,e=i.idleTimeout,o=i.maxTransactionDuration,u="pageload"===t.op?function(){var t=(n="sentry-trace",i=q().document.querySelector("meta[name="+n+"]"),i?i.getAttribute("content"):null);var n,i;if(t)return function(t){var n=t.match(ei);if(n){var i=void 0;return"1"===n[3]?i=!0:"0"===n[3]&&(i=!1),{traceId:n[1],parentSampled:i,parentSpanId:n[2]}}}(t);return}():void 0,s=f(f(f({},t),u),{trimEnd:!0}),a="function"==typeof r?r(s):s,c=void 0===a?f(f({},s),{sampled:!1}):a;!1===c.sampled&&$.log("[Tracing] Will not send "+c.op+" transaction because of beforeNavigate."),$.log("[Tracing] Starting "+c.op+" transaction on scope");var h=function(t,n,i,r,e){var o,u,s=(null===(o=t.getClient())||void 0===o?void 0:o.getOptions())||{},a=new li(n,t,i,r);return(a=yi(a,s,f({parentSampled:n.parentSampled,transactionContext:n},e))).sampled&&a.initSpanRecorder(null===(u=s.Et)||void 0===u?void 0:u.maxSpans),a}(this.$n(),c,e,!0,{location:q().location});return h.registerBeforeFinishCallback(function(t,i){n.Wn.addPerformanceEntries(t),function(t,n,i){var r=i-n.startTimestamp;i&&(r>t||r<0)&&(n.setStatus(ii.DeadlineExceeded),n.setTag("maxTransactionDurationExceeded","true"))}(1e3*o,t,i)}),h}$.warn("[Tracing] Did not create "+t.op+" transaction because _getCurrentHub is invalid.")},t.id="BrowserTracing",t}();var Ui={},Hi=q();Hi.Sentry&&Hi.Sentry.Integrations&&(Ui=Hi.Sentry.Integrations);var Ji=f(f(f({},Ui),ri),{BrowserTracing:Pi});return wi(),t.BrowserClient=Qn,t.Hub=Ut,t.Integrations=Ji,t.SDK_NAME="sentry.javascript.browser",t.SDK_VERSION=an,t.Scope=Mt,t.Span=fi,t.Transports=Mn,t.addBreadcrumb=function(t){zt("addBreadcrumb",t)},t.addExtensionMethods=wi,t.addGlobalEventProcessor=qt,t.captureEvent=function(t){return zt("captureEvent",t)},t.captureException=captureException,t.captureMessage=function(t,n){var i;try{throw new Error(t)}catch(t){i=t}return zt("captureMessage",t,"string"==typeof n?n:void 0,f({originalException:t,syntheticException:i},"string"!=typeof n?{captureContext:n}:void 0))},t.close=function(t){var n=Bt().getClient();return n?n.close(t):($.warn("Cannot flush events and disable SDK. No client defined."),Ot.resolve(!1))},t.configureScope=function(t){zt("configureScope",t)},t.defaultIntegrations=Zn,t.flush=function(t){var n=Bt().getClient();return n?n.flush(t):($.warn("Cannot flush events. No client defined."),Ot.resolve(!1))},t.forceLoad=function(){},t.getCurrentHub=Bt,t.getHubFromCarrier=Gt,t.init=function(t){if(void 0===t&&(t={}),void 0===t.defaultIntegrations&&(t.defaultIntegrations=Zn),void 0===t.release){var n=q();n.SENTRY_RELEASE&&n.SENTRY_RELEASE.id&&(t.release=n.SENTRY_RELEASE.id)}void 0===t.autoSessionTracking&&(t.autoSessionTracking=!0),void 0===t.sendClientReports&&(t.sendClientReports=!0),function(t,n){var i;!0===n.debug&&$.enable();var r=Bt();null===(i=r.getScope())||void 0===i||i.update(n.initialScope);var e=new t(n);r.bindClient(e)}(Qn,t),t.autoSessionTracking&&function(){if(void 0!==q().document){var t=Bt();"function"==typeof t.startSession&&"function"==typeof t.captureSession&&(t.startSession({ignoreDuration:!0}),t.captureSession(),pt({callback:function(n){var i=n.from,r=n.to;void 0!==i&&i!==r&&(t.startSession({ignoreDuration:!0}),t.captureSession())},type:"history"}))}else $.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")}()},t.lastEventId=function(){return Bt().lastEventId()},t.onLoad=function(t){t()},t.setContext=function(t,n){zt("setContext",t,n)},t.setExtra=function(t,n){zt("setExtra",t,n)},t.setExtras=function(t){zt("setExtras",t)},t.setTag=function(t,n){zt("setTag",t,n)},t.setTags=function(t){zt("setTags",t)},t.setUser=function(t){zt("setUser",t)},t.showReportDialog=function(t){void 0===t&&(t={});var n=Bt(),i=n.getScope();i&&(t.user=f(f({},i.getUser()),t.user)),t.eventId||(t.eventId=n.lastEventId());var r=n.getClient();r&&r.showReportDialog(t)},t.startTransaction=function(t,n){return zt("startTransaction",f({},t),n)},t.withScope=$t,t.wrap=function(t){return Un(t)()},t}({});
//# sourceMappingURL=bundle.tracing.min.js.map


/* - ++resource++sentry.js - */
document.addEventListener("DOMContentLoaded", function(){
    var context = document.getElementById("sentry");
    if(!context) {
        context = document.getElementsByTagName("body")[0];
    }

    var sentry_dsn = context.getAttribute("data-sentry-dsn");
    var sentry_env = context.getAttribute("data-sentry-env");
    var sentry_ver = context.getAttribute("data-sentry-ver");
    var sentry_site = context.getAttribute("data-sentry-site");
    var sentry_server = context.getAttribute("data-sentry-server");
    var sentry_user = context.getAttribute("data-sentry-user");
    try {
        sentry_user = JSON.parse(sentry_user);
    } catch (err) {
        sentry_user = {};
    }

    if (sentry_dsn){
        Sentry.init({
            dsn: sentry_dsn,
            release: sentry_ver,
            environment: sentry_env,
            integrations: [new Sentry.Integrations.BrowserTracing()],
            tracesSampleRate: 1.0,
            attachStacktrace: true,
            ignoreErrors: [
                'jQuery is not defined',
                 '$ is not defined',
                 'Can\'t find variable: jQuery',
                 'Socialite is not defined',
                 'Persistent storage maximum size reached'
            ],
            logger: 'javascript',
            serverName: sentry_server,
            tags: {
                site: sentry_site
            }
        });
        Sentry.setUser(sentry_user);
    }
});


/* - jquery.js - */
/* jslint:disable */
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});


/* - ++resource++eea.faceted-navigation-independent.js - */
// https://www.eea.europa.eu/portal_javascripts/++resource++eea.faceted-navigation-independent.js?original=1
jQuery(document).ready(function(){jQuery('form.faceted-external-search').submit(function(evt){evt.preventDefault();var form=jQuery(this);var action=form.attr('action');var query=form.serialize();window.location.href=action+'#'+query})});

/* - jquery-migrate.js - */
/* jslint:disable */
/*!
 * jQuery Migrate - v3.1.0 - 2019-06-08
 * Copyright OpenJS Foundation and other contributors
 */;
!function(e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t,window)}):"object"==typeof module&&module.exports?module.exports=e(require("jquery"),window):e(jQuery,window)}(function(e,t){"use strict";function r(t){return function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+n[a]>+o[a])return 1;if(+n[a]<+o[a])return-1}return 0}(e.fn.jquery,t)>=0}e.migrateVersion="3.1.0",t.console&&t.console.log&&(e&&r("3.0.0")||t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),t.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion));var n={};function o(r){var o=t.console;n[r]||(n[r]=!0,e.migrateWarnings.push(r),o&&o.warn&&!e.migrateMute&&(o.warn("JQMIGRATE: "+r),e.migrateTrace&&o.trace&&o.trace()))}function a(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return o(n),r},set:function(e){o(n),r=e}})}function i(e,t,r,n){e[t]=function(){return o(n),r.apply(this,arguments)}}e.migrateWarnings=[],void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset=function(){n={},e.migrateWarnings.length=0},"BackCompat"===t.document.compatMode&&o("jQuery is not compatible with Quirks Mode");var s,u=e.fn.init,c=e.isNumeric,d=e.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(s in e.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(o("jQuery( '#' ) is not a valid selector"),t[0]=[]),u.apply(this,t)},e.fn.init.prototype=e.fn,e.find=function(e){var r=Array.prototype.slice.call(arguments);if("string"==typeof e&&l.test(e))try{t.document.querySelector(e)}catch(n){e=e.replace(p,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{t.document.querySelector(e),o("Attribute selector with '#' must be quoted: "+r[0]),r[0]=e}catch(e){o("Attribute selector with '#' was not fixed: "+r[0])}}return d.apply(this,r)},d)Object.prototype.hasOwnProperty.call(d,s)&&(e.find[s]=d[s]);e.fn.size=function(){return o("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},e.parseJSON=function(){return o("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},e.isNumeric=function(t){var r,n,a=c(t),i=(n=(r=t)&&r.toString(),!e.isArray(r)&&n-parseFloat(n)+1>=0);return a!==i&&o("jQuery.isNumeric() should not be called on constructed objects"),i},r("3.3.0")&&i(e,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated"),i(e,"holdReady",e.holdReady,"jQuery.holdReady is deprecated"),i(e,"unique",e.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),a(e.expr,"filters",e.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),a(e.expr,":",e.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),r("3.2.0")&&i(e,"nodeName",e.nodeName,"jQuery.nodeName is deprecated");var f=e.ajax;e.ajax=function(){var e=f.apply(this,arguments);return e.promise&&(i(e,"success",e.done,"jQXHR.success is deprecated and removed"),i(e,"error",e.fail,"jQXHR.error is deprecated and removed"),i(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var y=e.fn.removeAttr,m=e.fn.toggleClass,h=/\S+/g;e.fn.removeAttr=function(t){var r=this;return e.each(t.match(h),function(t,n){e.expr.match.bool.test(n)&&(o("jQuery.fn.removeAttr no longer sets boolean properties: "+n),r.prop(n,!1))}),y.apply(this,arguments)},e.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?m.apply(this,arguments):(o("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var r=this.getAttribute&&this.getAttribute("class")||"";r&&e.data(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":e.data(this,"__className__")||"")}))};var g=!1;e.swap&&e.each(["height","width","reliableMarginRight"],function(t,r){var n=e.cssHooks[r]&&e.cssHooks[r].get;n&&(e.cssHooks[r].get=function(){var e;return g=!0,e=n.apply(this,arguments),g=!1,e})}),e.swap=function(e,t,r,n){var a,i,s={};for(i in g||o("jQuery.swap() is undocumented and deprecated"),t)s[i]=e.style[i],e.style[i]=t[i];for(i in a=r.apply(e,n||[]),t)e.style[i]=s[i];return a};var v=e.data;e.data=function(t,r,n){var a;if(r&&"object"==typeof r&&2===arguments.length){a=e.hasData(t)&&v.call(this,t);var i={};for(var s in r)s!==e.camelCase(s)?(o("jQuery.data() always sets/gets camelCased names: "+s),a[s]=r[s]):i[s]=r[s];return v.call(this,t,i),r}return r&&"string"==typeof r&&r!==e.camelCase(r)&&(a=e.hasData(t)&&v.call(this,t))&&r in a?(o("jQuery.data() always sets/gets camelCased names: "+r),arguments.length>2&&(a[r]=n),a[r]):v.apply(this,arguments)};var j=e.Tween.prototype.run,w=function(e){return e};e.Tween.prototype.run=function(){e.easing[this.easing].length>1&&(o("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),e.easing[this.easing]=w),j.apply(this,arguments)};var Q=e.fx.interval||13;t.requestAnimationFrame&&Object.defineProperty(e.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return t.document.hidden||o("jQuery.fx.interval is deprecated"),Q},set:function(e){o("jQuery.fx.interval is deprecated"),Q=e}});var b=e.fn.load,x=e.event.add,k=e.event.fix;e.event.props=[],e.event.fixHooks={},a(e.event.props,"concat",e.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),e.event.fix=function(t){var r,n=t.type,a=this.fixHooks[n],i=e.event.props;if(i.length)for(o("jQuery.event.props are deprecated and removed: "+i.join());i.length;)e.event.addProp(i.pop());if(a&&!a._migrated_&&(a._migrated_=!0,o("jQuery.event.fixHooks are deprecated and removed: "+n),(i=a.props)&&i.length))for(;i.length;)e.event.addProp(i.pop());return r=k.call(this,t),a&&a.filter?a.filter(r,t):r},e.event.add=function(e,r){return e===t&&"load"===r&&"complete"===t.document.readyState&&o("jQuery(window).on('load'...) called after load event occurred"),x.apply(this,arguments)},e.each(["load","unload","error"],function(t,r){e.fn[r]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===r&&"string"==typeof e[0]?b.apply(this,e):(o("jQuery.fn."+r+"() is deprecated"),e.splice(0,0,r),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,r){e.fn[r]=function(e,t){return o("jQuery.fn."+r+"() event shorthand is deprecated"),arguments.length>0?this.on(r,null,e,t):this.trigger(r)}}),e(function(){e(t.document).triggerHandler("ready")}),e.event.special.ready={setup:function(){this===t.document&&o("'ready' event is deprecated")}},e.fn.extend({bind:function(e,t,r){return o("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return o("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return o("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return o("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return o("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var A=e.fn.offset;e.fn.offset=function(){var r,n=this[0],a={top:0,left:0};return n&&n.nodeType?(r=(n.ownerDocument||t.document).documentElement,e.contains(r,n)?A.apply(this,arguments):(o("jQuery.fn.offset() requires an element connected to a document"),a)):(o("jQuery.fn.offset() requires a valid DOM element"),a)};var S=e.param;e.param=function(t,r){var n=e.ajaxSettings&&e.ajaxSettings.traditional;return void 0===r&&n&&(o("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),r=n),S.call(this,t,r)};var C=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return o("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),C.apply(this,arguments)};var q=e.Deferred,M=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];if(e.Deferred=function(t){var r=q(),n=r.promise();return r.pipe=n.pipe=function(){var t=arguments;return o("deferred.pipe() is deprecated"),e.Deferred(function(o){e.each(M,function(a,i){var s=e.isFunction(t[a])&&t[a];r[i[1]](function(){var t=s&&s.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(o.resolve).fail(o.reject).progress(o.notify):o[i[0]+"With"](this===n?o.promise():this,s?[t]:arguments)})}),t=null}).promise()},t&&t.call(r,r),r},e.Deferred.exceptionHook=q.exceptionHook,e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},!e.browser){var R=e.uaMatch(navigator.userAgent),H={};R.browser&&(H[R.browser]=!0,H.version=R.version),H.chrome?H.webkit=!0:H.webkit&&(H.safari=!0),e.browser=H}return a(e,"browser",e.browser,"jQuery.browser is deprecated"),e});


/* - ++resource++collective.js.underscore/underscore.min.js - */
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","   ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map

/* - jquery-integration.js - */
// https://www.eea.europa.eu/portal_javascripts/jquery-integration.js?original=1
var jq=jQuery;if(typeof cssQuery==='undefined'){var cssQuery=function(s,f){return jQuery.makeArray(jQuery(s,f))}}


/* - register_function.js - */
// https://www.eea.europa.eu/portal_javascripts/register_function.js?original=1
var bugRiddenCrashPronePieceOfJunk=(navigator.userAgent.indexOf('MSIE 5')!==-1&&navigator.userAgent.indexOf('Mac')!==-1);var W3CDOM=(!bugRiddenCrashPronePieceOfJunk&&typeof document.getElementsByTagName!=='undefined'&&typeof document.createElement!=='undefined');var registerEventListener=function(elem,event,func){jQuery(elem).bind(event,func)};var unRegisterEventListener=function(elem,event,func){jQuery(elem).unbind(event,func)};var registerPloneFunction=jQuery;
function getContentArea(){var node=jQuery('#region-content,#content');return node.length?node[0]:null}


/* - plone_javascript_variables.js - */
// https://www.eea.europa.eu/portal_javascripts/plone_javascript_variables.js?original=1
var portal_url='https://www.eea.europa.eu';var base_url='https://www.eea.europa.eu/www/portal_javascripts/manage_jsForm';var form_modified_message='Your form has not been saved. All changes you have made will be lost.';var form_resubmit_message='You already clicked the submit button. Do you really want to submit this form again?';var external_links_open_new_window='false';var mark_special_links='True';var ajax_noresponse_message='No response from server. Please try again later.';

/* - ++resource++plone.app.jquerytools.js - */
!function($){function Overlay(trigger,conf){var closers,overlay,opened,self=this,fire=trigger.add(self),w=$(window),maskConf=$.tools.expose&&(conf.mask||conf.expose),uid=Math.random().toString().slice(10);maskConf&&("string"==typeof maskConf&&(maskConf={color:maskConf}),maskConf.closeOnClick=maskConf.closeOnEsc=!1);var jq=conf.target||trigger.attr("rel");if(overlay=jq?$(jq):trigger,!overlay.length)throw"Could not find Overlay: "+jq;trigger&&trigger.index(overlay)==-1&&trigger.click(function(e){return self.load(e),e.preventDefault()}),$.extend(self,{load:function(e){if(self.isOpened())return self;var eff=effects[conf.effect];if(!eff)throw'Overlay: cannot find effect : "'+conf.effect+'"';if(conf.oneInstance&&$.each(instances,function(){this.close(e)}),e=e||$.Event(),e.type="onBeforeLoad",fire.trigger(e),e.isDefaultPrevented())return self;opened=!0,maskConf&&$(overlay).expose(maskConf);var top=conf.top,left=conf.left,oWidth=overlay.outerWidth(!0),oHeight=overlay.outerHeight(!0);return"string"==typeof top&&(top="center"==top?Math.max((w.height()-oHeight)/2,0):parseInt(top,10)/100*w.height()),"center"==left&&(left=Math.max((w.width()-oWidth)/2,0)),eff[0].call(self,{top:top,left:left},function(){opened&&(e.type="onLoad",fire.trigger(e))}),maskConf&&conf.closeOnClick&&$.mask.getMask().one("click",self.close),conf.closeOnClick&&$(document).on("click."+uid,function(e){$(e.target).parents(overlay).length||self.close(e)}),conf.closeOnEsc&&$(document).on("keydown."+uid,function(e){27==e.keyCode&&self.close(e)}),self},close:function(e){return self.isOpened()?(e=e||$.Event(),e.type="onBeforeClose",fire.trigger(e),e.isDefaultPrevented()?void 0:(opened=!1,effects[conf.effect][1].call(self,function(){e.type="onClose",fire.trigger(e)}),$(document).off("click."+uid+" keydown."+uid),maskConf&&$.mask.close(),self)):self},getOverlay:function(){return overlay},getTrigger:function(){return trigger},getClosers:function(){return closers},isOpened:function(){return opened},getConf:function(){return conf}}),$.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),closers=overlay.find(conf.close||".close"),closers.length||conf.close||(closers=$('<a class="close"></a>'),overlay.prepend(closers)),closers.click(function(e){self.close(e)}),conf.load&&self.load()}$.tools=$.tools||{version:"@VERSION"},$.tools.overlay={addEffect:function(name,loadFn,closeFn){effects[name]=[loadFn,closeFn]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!/msie/.test(navigator.userAgent.toLowerCase())||navigator.appVersion>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var instances=[],effects={};$.tools.overlay.addEffect("default",function(pos,onLoad){var conf=this.getConf(),w=$(window);conf.fixed||(pos.top+=w.scrollTop(),pos.left+=w.scrollLeft()),pos.position=conf.fixed?"fixed":"absolute",this.getOverlay().css(pos).fadeIn(conf.speed,onLoad)},function(onClose){this.getOverlay().fadeOut(this.getConf().closeSpeed,onClose)}),$.fn.overlay=function(conf){var el=this.data("overlay");return el?el:($.isFunction(conf)&&(conf={onBeforeLoad:conf}),conf=$.extend(!0,{},$.tools.overlay.conf,conf),this.each(function(){el=new Overlay($(this),conf),instances.push(el),$(this).data("overlay",el)}),conf.api?el:this)}}(jQuery),function($){function find(root,query){var el=$(query);return el.length<2?el:root.parent().find(query)}function Scrollable(root,conf){var self=this,fire=root.add(self),itemWrap=root.children(),index=0,vertical=conf.vertical;if(current||(current=self),itemWrap.length>1&&(itemWrap=$(conf.items,root)),conf.size>1&&(conf.circular=!1),$.extend(self,{getConf:function(){return conf},getIndex:function(){return index},getSize:function(){return self.getItems().size()},getNaviButtons:function(){return prev.add(next)},getRoot:function(){return root},getItemWrap:function(){return itemWrap},getItems:function(){return itemWrap.find(conf.item).not("."+conf.clonedClass)},move:function(offset,time){return self.seekTo(index+offset,time)},next:function(time){return self.move(conf.size,time)},prev:function(time){return self.move(-conf.size,time)},begin:function(time){return self.seekTo(0,time)},end:function(time){return self.seekTo(self.getSize()-1,time)},focus:function(){return current=self,self},addItem:function(item){return item=$(item),conf.circular?(itemWrap.children().last().before(item),itemWrap.children().first().replaceWith(item.clone().addClass(conf.clonedClass))):(itemWrap.append(item),next.removeClass("disabled")),fire.trigger("onAddItem",[item]),self},seekTo:function(i,time,fn){if(i.jquery||(i*=1),conf.circular&&0===i&&index==-1&&0!==time)return self;if(!conf.circular&&i<0||i>self.getSize()||i<-1)return self;var item=i;i.jquery?i=self.getItems().index(i):item=self.getItems().eq(i);var e=$.Event("onBeforeSeek");if(!fn&&(fire.trigger(e,[i,time]),e.isDefaultPrevented()||!item.length))return self;var props=vertical?{top:-item.position().top}:{left:-item.position().left};return index=i,current=self,void 0===time&&(time=conf.speed),itemWrap.animate(props,time,conf.easing,fn||function(){fire.trigger("onSeek",[i])}),self}}),$.each(["onBeforeSeek","onSeek","onAddItem"],function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.circular){var cloned1=self.getItems().slice(-1).clone().prependTo(itemWrap),cloned2=self.getItems().eq(1).clone().appendTo(itemWrap);cloned1.add(cloned2).addClass(conf.clonedClass),self.onBeforeSeek(function(e,i,time){if(!e.isDefaultPrevented())return i==-1?(self.seekTo(cloned1,time,function(){self.end(0)}),e.preventDefault()):void(i==self.getSize()&&self.seekTo(cloned2,time,function(){self.begin(0)}))});var hidden_parents=root.parents().add(root).filter(function(){if("none"===$(this).css("display"))return!0});hidden_parents.length?(hidden_parents.show(),self.seekTo(0,0,function(){}),hidden_parents.hide()):self.seekTo(0,0,function(){})}var prev=find(root,conf.prev).click(function(e){e.stopPropagation(),self.prev()}),next=find(root,conf.next).click(function(e){e.stopPropagation(),self.next()});if(conf.circular||(self.onBeforeSeek(function(e,i){setTimeout(function(){e.isDefaultPrevented()||(prev.toggleClass(conf.disabledClass,i<=0),next.toggleClass(conf.disabledClass,i>=self.getSize()-1))},1)}),conf.initialIndex||prev.addClass(conf.disabledClass)),self.getSize()<2&&prev.add(next).addClass(conf.disabledClass),conf.mousewheel&&$.fn.mousewheel&&root.mousewheel(function(e,delta){if(conf.mousewheel)return self.move(delta<0?1:-1,conf.wheelSpeed||50),!1}),conf.touch){var touch={};itemWrap[0].ontouchstart=function(e){var t=e.touches[0];touch.x=t.clientX,touch.y=t.clientY},itemWrap[0].ontouchmove=function(e){if(1==e.touches.length&&!itemWrap.is(":animated")){var t=e.touches[0],deltaX=touch.x-t.clientX,deltaY=touch.y-t.clientY;self[vertical&&deltaY>0||!vertical&&deltaX>0?"next":"prev"](),e.preventDefault()}}}conf.keyboard&&$(document).on("keydown.scrollable",function(evt){if(!(!conf.keyboard||evt.altKey||evt.ctrlKey||evt.metaKey||$(evt.target).is(":input")||"static"!=conf.keyboard&&current!=self)){var key=evt.keyCode;return!vertical||38!=key&&40!=key?vertical||37!=key&&39!=key?void 0:(self.move(37==key?-1:1),evt.preventDefault()):(self.move(38==key?-1:1),evt.preventDefault())}}),conf.initialIndex&&self.seekTo(conf.initialIndex,0,function(){})}$.tools=$.tools||{version:"@VERSION"},$.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};var current;$.fn.scrollable=function(conf){var el=this.data("scrollable");return el?el:(conf=$.extend({},$.tools.scrollable.conf,conf),this.each(function(){el=new Scrollable($(this),conf),$(this).data("scrollable",el)}),conf.api?el:this)}}(jQuery),function($){function Tabs(root,paneSelector,conf){var current,self=this,trigger=root.add(this),tabs=root.find(conf.tabs),panes=paneSelector.jquery?paneSelector:root.children(paneSelector);tabs.length||(tabs=root.children()),panes.length||(panes=root.parent().find(paneSelector)),panes.length||(panes=$(paneSelector)),$.extend(this,{click:function(i,e){var tab=tabs.eq(i),firstRender=!root.data("tabs");if("string"==typeof i&&i.replace("#","")&&(tab=tabs.filter('[href*="'+i.replace("#","")+'"]'),i=Math.max(tabs.index(tab),0)),conf.rotate){var last=tabs.length-1;if(i<0)return self.click(last,e);if(i>last)return self.click(0,e)}if(!tab.length){if(current>=0)return self;i=conf.initialIndex,tab=tabs.eq(i)}if(i===current)return self;if(e=e||$.Event(),e.type="onBeforeClick",trigger.trigger(e,[i]),!e.isDefaultPrevented()){var effect=firstRender?conf.initialEffect&&conf.effect||"default":conf.effect;return effects[effect].call(self,i,function(){current=i,e.type="onClick",trigger.trigger(e,[i])}),tabs.removeClass(conf.current),tab.addClass(conf.current),self}},getConf:function(){return conf},getTabs:function(){return tabs},getPanes:function(){return panes},getCurrentPane:function(){return panes.eq(current)},getCurrentTab:function(){return tabs.eq(current)},getIndex:function(){return current},next:function(){return self.click(current+1)},prev:function(){return self.click(current-1)},destroy:function(){return tabs.off(conf.event).removeClass(conf.current),panes.find('a[href^="#"]').off("click.T"),self}}),$.each("onBeforeClick,onClick".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.history&&$.fn.history&&($.tools.history.init(tabs),conf.event="history"),tabs.each(function(i){$(this).on(conf.event,function(e){return self.click(i,e),e.preventDefault()})}),panes.find('a[href^="#"]').on("click.T",function(e){self.click($(this).attr("href"),e)}),location.hash&&"a"==conf.tabs&&root.find('[href="'+location.hash+'"]').length?self.click(location.hash):(0===conf.initialIndex||conf.initialIndex>0)&&self.click(conf.initialIndex)}$.tools=$.tools||{version:"@VERSION"},$.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(name,fn){effects[name]=fn}};var animating,w,effects={default:function(i,done){this.getPanes().hide().eq(i).show(),done.call()},fade:function(i,done){var conf=this.getConf(),speed=conf.fadeOutSpeed,panes=this.getPanes();speed?panes.fadeOut(speed):panes.hide(),panes.eq(i).fadeIn(conf.fadeInSpeed,done)},slide:function(i,done){var conf=this.getConf();this.getPanes().slideUp(conf.slideUpSpeed),this.getPanes().eq(i).slideDown(conf.slideDownSpeed,done)},ajax:function(i,done){this.getPanes().eq(0).load(this.getTabs().eq(i).attr("href"),done)}};$.tools.tabs.addEffect("horizontal",function(i,done){if(!animating){var nextPane=this.getPanes().eq(i),currentPane=this.getCurrentPane();w||(w=this.getPanes().eq(0).width()),animating=!0,nextPane.show(),currentPane.animate({width:0},{step:function(now){nextPane.css("width",w-now)},complete:function(){$(this).hide(),done.call(),animating=!1}}),currentPane.length||(done.call(),animating=!1)}}),$.fn.tabs=function(paneSelector,conf){var el=this.data("tabs");return el&&(el.destroy(),this.removeData("tabs")),$.isFunction(conf)&&(conf={onBeforeClick:conf}),conf=$.extend({},$.tools.tabs.conf,conf),this.each(function(){el=new Tabs($(this),paneSelector,conf),$(this).data("tabs",el)}),conf.api?el:this}}(jQuery),function($){function setIframeLocation(h){if(h){var doc=iframe.contentWindow.document;doc.open().close(),doc.location.hash=h}}var hash,iframe,links,inited;$.tools=$.tools||{version:"@VERSION"},$.tools.history={init:function(els){inited||($.browser.msie&&$.browser.version<"8"?iframe||(iframe=$("<iframe/>").attr("src","javascript:false;").hide().get(0),$("body").append(iframe),setInterval(function(){var idoc=iframe.contentWindow.document,h=idoc.location.hash;hash!==h&&$(window).trigger("hash",h)},100),setIframeLocation(location.hash||"#")):setInterval(function(){var h=location.hash;h!==hash&&$(window).trigger("hash",h)},100),links=links?links.add(els):els,els.click(function(e){var href=$(this).attr("href");if(iframe&&setIframeLocation(href),"#"!=href.slice(0,1))return location.href="#"+href,e.preventDefault()}),inited=!0)}},$(window).on("hash",function(e,h){h?links.filter(function(){var href=$(this).attr("href");return href==h||href==h.replace("#","")}).trigger("history",[h]):links.eq(0).trigger("history",[h]),hash=h}),$.fn.history=function(fn){return $.tools.history.init(this),this.on("history",fn)}}(jQuery),function($){function viewport(){if(/msie/.test(navigator.userAgent.toLowerCase())){var d=$(document).height(),w=$(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,d-w<20?w:d]}return[$(document).width(),$(document).height()]}function call(fn){if(fn)return fn.call($.mask)}$.tools=$.tools||{version:"@VERSION"};var tool;tool=$.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};var mask,exposed,loaded,config,overlayIndex;$.mask={load:function(conf,els){if(loaded)return this;"string"==typeof conf&&(conf={color:conf}),conf=conf||config,config=conf=$.extend($.extend({},tool.conf),conf),mask=$("#"+conf.maskId),mask.length||(mask=$("<div/>").attr("id",conf.maskId),$("body").append(mask));var size=viewport();return mask.css({position:"absolute",top:0,left:0,width:size[0],height:size[1],display:"none",opacity:conf.startOpacity,zIndex:conf.zIndex}),conf.color&&mask.css("backgroundColor",conf.color),call(conf.onBeforeLoad)===!1?this:(conf.closeOnEsc&&$(document).on("keydown.mask",function(e){27==e.keyCode&&$.mask.close(e)}),conf.closeOnClick&&mask.on("click.mask",function(e){$.mask.close(e)}),$(window).on("resize.mask",function(){$.mask.fit()}),els&&els.length&&(overlayIndex=els.eq(0).css("zIndex"),$.each(els,function(){var el=$(this);/relative|absolute|fixed/i.test(el.css("position"))||el.css("position","relative")}),exposed=els.css({zIndex:Math.max(conf.zIndex+1,"auto"==overlayIndex?0:overlayIndex)})),mask.css({display:"block"}).fadeTo(conf.loadSpeed,conf.opacity,function(){$.mask.fit(),call(conf.onLoad),loaded="full"}),loaded=!0,this)},close:function(){if(loaded){if(call(config.onBeforeClose)===!1)return this;mask.fadeOut(config.closeSpeed,function(){exposed&&exposed.css({zIndex:overlayIndex}),loaded=!1,call(config.onClose)}),$(document).off("keydown.mask"),mask.off("click.mask"),$(window).off("resize.mask")}return this},fit:function(){if(loaded){var size=viewport();mask.css({width:size[0],height:size[1]})}},getMask:function(){return mask},isLoaded:function(fully){return fully?"full"==loaded:loaded},getConf:function(){return config},getExposed:function(){return exposed}},$.fn.mask=function(conf){return $.mask.load(conf),this},$.fn.expose=function(conf){return $.mask.load(conf,this),this}}(jQuery);

/* - ++resource++plone.app.jquerytools.tooltip.js - */
!function($){function getPosition(trigger,tip,conf){var top=conf.relative?trigger.position().top:trigger.offset().top,left=conf.relative?trigger.position().left:trigger.offset().left,pos=conf.position[0];top-=tip.outerHeight()-conf.offset[0],left+=trigger.outerWidth()+conf.offset[1],/iPad/i.test(navigator.userAgent)&&(top-=$(window).scrollTop());var height=tip.outerHeight()+trigger.outerHeight();"center"==pos&&(top+=height/2),"bottom"==pos&&(top+=height),pos=conf.position[1];var width=tip.outerWidth()+trigger.outerWidth();return"center"==pos&&(left-=width/2),"left"==pos&&(left-=width),{top:top,left:left}}function Tooltip(trigger,conf){var tip,shown,self=this,fire=trigger.add(self),timer=0,pretimer=0,title=trigger.attr("title"),tipAttr=trigger.attr("data-tooltip"),effect=effects[conf.effect],isInput=trigger.is(":input"),isWidget=isInput&&trigger.is(":checkbox, :radio, select, :button, :submit"),type=trigger.attr("type"),evt=conf.events[type]||conf.events[isInput?isWidget?"widget":"input":"def"];if(!effect)throw'Nonexistent effect "'+conf.effect+'"';if(evt=evt.split(/,\s*/),2!=evt.length)throw"Tooltip: bad events configuration for "+type;trigger.on(evt[0],function(e){clearTimeout(timer),conf.predelay?pretimer=setTimeout(function(){self.show(e)},conf.predelay):self.show(e)}).on(evt[1],function(e){clearTimeout(pretimer),conf.delay?timer=setTimeout(function(){self.hide(e)},conf.delay):self.hide(e)}),title&&conf.cancelDefault&&(trigger.removeAttr("title"),trigger.data("title",title)),$.extend(self,{show:function(e){if(!tip&&(tipAttr?tip=$(tipAttr):conf.tip?tip=$(conf.tip).eq(0):title?tip=$(conf.layout).addClass(conf.tipClass).appendTo(document.body).hide().append(title):(tip=trigger.find("."+conf.tipClass),tip.length||(tip=trigger.next()),tip.length||(tip=trigger.parent().next())),!tip.length))throw"Cannot find tooltip for "+trigger;if(self.isShown())return self;tip.stop(!0,!0);var pos=getPosition(trigger,tip,conf);if(conf.tip&&tip.html(trigger.data("title")),e=$.Event(),e.type="onBeforeShow",fire.trigger(e,[pos]),e.isDefaultPrevented())return self;pos=getPosition(trigger,tip,conf),tip.css({position:"absolute",top:pos.top,left:pos.left}),shown=!0,effect[0].call(self,function(){e.type="onShow",shown="full",fire.trigger(e)});var event=conf.events.tooltip.split(/,\s*/);return tip.data("__set")||(tip.off(event[0]).on(event[0],function(){clearTimeout(timer),clearTimeout(pretimer)}),event[1]&&!trigger.is("input:not(:checkbox, :radio), textarea")&&tip.off(event[1]).on(event[1],function(e){e.relatedTarget!=trigger[0]&&trigger.trigger(evt[1].split(" ")[0])}),conf.tip||tip.data("__set",!0)),self},hide:function(e){return tip&&self.isShown()?(e=$.Event(),e.type="onBeforeHide",fire.trigger(e),e.isDefaultPrevented()?void 0:(shown=!1,effects[conf.effect][1].call(self,function(){e.type="onHide",fire.trigger(e)}),self)):self},isShown:function(fully){return fully?"full"==shown:shown},getConf:function(){return conf},getTip:function(){return tip},getTrigger:function(){return trigger}}),$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}})}$.tools=$.tools||{version:"@VERSION"},$.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(name,loadFn,hideFn){effects[name]=[loadFn,hideFn]}};var effects={toggle:[function(done){var conf=this.getConf(),tip=this.getTip(),o=conf.opacity;o<1&&tip.css({opacity:o}),tip.show(),done.call()},function(done){this.getTip().hide(),done.call()}],fade:[function(done){var conf=this.getConf();!/msie/.test(navigator.userAgent.toLowerCase())||conf.fadeIE?this.getTip().fadeTo(conf.fadeInSpeed,conf.opacity,done):(this.getTip().show(),done())},function(done){var conf=this.getConf();!/msie/.test(navigator.userAgent.toLowerCase())||conf.fadeIE?this.getTip().fadeOut(conf.fadeOutSpeed,done):(this.getTip().hide(),done())}]};$.fn.tooltip=function(conf){var api=this.data("tooltip");return api?api:(conf=$.extend(!0,{},$.tools.tooltip.conf,conf),"string"==typeof conf.position&&(conf.position=conf.position.split(/,?\s/)),this.each(function(){api=new Tooltip($(this),conf),$(this).data("tooltip",api)}),conf.api?api:this)}}(jQuery);

/* - ++resource++plone.app.jquerytools.form.js - */
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));


/* - overlayhelpers.js - */
/* jslint:disable */
/*****************

 jQuery Tools overlay helpers.

 Copyright Â© 2010, The Plone Foundation
 Licensed under the GPL, see LICENSE.txt for details.

 *****************/

/*jslint browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, newcap: true, immed: true, regexp: true, white:true */
/*global jQuery, ajax_noresponse_message, close_box_message, window */

// Name space object for pipbox
var pb = {spinner: {}, overlay_counter: 1};

jQuery.tools.overlay.conf.oneInstance = false;

(function($) {
    // override jqt default effect to take account of position
    // of parent elements
    jQuery.tools.overlay.addEffect('default',
        function(pos, onLoad) {
            var conf = this.getConf(),
                w = $(window),
                ovl = this.getOverlay(),
                op = ovl.parent().offsetParent().offset();

            if (!conf.fixed)  {
                pos.top += w.scrollTop() - op.top;
                pos.left += w.scrollLeft() - op.left;
            }

            pos.position = conf.fixed ? 'fixed' : 'absolute';
            ovl.css(pos).fadeIn(conf.speed, onLoad);

        }, function(onClose) {
            this.getOverlay().fadeOut(this.getConf().closeSpeed, onClose);
        }
    );

    pb.spinner.show = function () {
        $('body').css('cursor', 'wait');
    };
    pb.spinner.hide = function () {
        $('body').css('cursor', '');
    };
}) (jQuery);



(function($) {
    if(!$.buildFragment) {
        $.buildFragment = function ( elems, context, scripts, selection, ignored ) {
            // if ((!scripts.push) || selection || ignored) {
            //     throw "Not a script"
            // }

            $.each(elems, function() {
                var parsed = $.parseHTML(elems[0], document, true);

                var $root = $('<div/>');

                $.each(parsed, function() {
                    $root.append($(this));
                });

                $root.find('script').each(function() {
                    scripts.push(this);
                })
            });
        };
    }

     // buildfragment needed
    /******
     $.fn.prepOverlay jQuery plugin to inject overlay target into DOM and
     annotate it with the data we'll need in order to display it.
     ******/
    $.fn.prepOverlay = function (pba) {
        return this.each(function () {
            var o, pbo, config, onBeforeLoad, onLoad, src, parts;

            o = $(this);

            // copy options so that it's not just a reference
            // to the parameter.
            pbo = $.extend(true, {'width':'60%'}, pba);

            // set overlay configuration
            config = pbo.config || {};

            // set onBeforeLoad handler
            onBeforeLoad = pb[pbo.subtype];
            if (onBeforeLoad) {
                config.onBeforeLoad = onBeforeLoad;
            }
            onLoad = config.onLoad;
            config.onLoad = function () {
                if (onLoad) {
                    onLoad.apply(this, arguments);
                }
                pb.fi_focus(this.getOverlay());
            };

            // be promiscuous, pick up the url from
            // href, src or action attributes
            src = o.attr('href') || o.attr('src') || o.attr('action');

            // translate url with config specifications
            if (pbo.urlmatch) {
                src = src.replace(new RegExp(pbo.urlmatch), pbo.urlreplace);
            }

            if (pbo.subtype === 'inline') {
                // we're going to let tools' overlay do all the real
                // work. Just get the markers in place.
                src = src.replace(/^.+#/, '#');
                $("[id='" + src.replace('#', '') + "']").addClass('overlay');
                o.removeAttr('href').attr('rel', src);
                // use overlay on the source (clickable) element
                o.overlay();
            } else {
                // save various bits of information from the pbo options,
                // and enable the overlay.

                // this is not inline, so in one fashion or another
                // we'll be loading it via the beforeLoad callback.
                // create a unique id for a target element
                pbo.nt = 'pb_' + pb.overlay_counter;
                pb.overlay_counter += 1;

                pbo.selector = pbo.filter || pbo.selector;
                if (!pbo.selector) {
                    // see if one's been supplied in the src
                    parts = src.split(' ');
                    src = parts.shift();
                    pbo.selector = parts.join(' ');
                }

                pbo.src = src;
                pbo.config = config;
                pbo.source = o;

                // remove any existing overlay and overlay handler
                pb.remove_overlay(o);

                // save options on trigger element
                jQuery(o).data('pbo', pbo);

                // mark the source with a rel attribute so we can find
                // the overlay, and a special class for styling
                o.attr('rel', '#' + pbo.nt);
                o.addClass('link-overlay');

                // for some subtypes, we're setting click handlers
                // and attaching overlay to the target element. That's
                // so we'll know the dimensions early.
                // Others, like iframe, just use overlay.
                switch (pbo.subtype) {
                    case 'image':
                        o.click(pb.image_click);
                        break;
                    case 'ajax':
                        o.click(pb.ajax_click);
                        break;
                    case 'iframe':
                        pb.create_content_div(pbo);
                        o.overlay(config);
                        break;
                    default:
                        throw "Unsupported overlay type";
                }

                // in case the click source wasn't
                // already a link.
                o.css('cursor', 'pointer');
            }
        });
    };


    /******
     pb.remove_overlay
     Remove the overlay and handler associated with a jquery wrapped
     trigger object
     ******/
    pb.remove_overlay = function (o) {
        var old_data = jQuery(o).data('pbo');

        if (old_data) {
            switch (old_data.subtype) {
                case 'image':
                    o.unbind('click', pb.image_click);
                    break;
                case 'ajax':
                    o.unbind('click', pb.ajax_click);
                    break;
                default:
                    // it's probably the jqt overlay click handler,
                    // but we don't know the handler and are forced
                    // to do a generic unbind of click handlers.
                    o.unbind('click');
                    break;
            }
            if (old_data.nt) {
                $('#' + old_data.nt).remove();
            }
        }
    };


    /******
     pb.create_content_div
     create a div to act as an overlay; append it to
     the body; return it
     ******/
    pb.create_content_div = function (pbo, trigger) {
        var content,
            close_message,
            top,
            pbw = pbo.width;

        if (typeof(close_box_message) === 'undefined') {
            close_message = 'Close this box.';
        } else {
            close_message = close_box_message;
        }

        content = $('' +
            '<div id="' + pbo.nt +
            '" class="overlay overlay-' + pbo.subtype +
            ' ' + (pbo.cssclass || '') +
            '"><div class="close"><a href="#" class="hiddenStructure" title="Close this box">' +
            close_message +
            '</a></div></div>');

        jQuery(content).data('pbo', pbo);

        // if a width option is specified, set it on the overlay div,
        // computing against the window width if a % was specified.
        if (pbw) {
            if (pbw.indexOf('%') > 0) {
                content.width(parseInt(pbw, 10) / 100 * $(window).width());
            } else {
                content.width(pbw);
            }
        }

        // add the target element at the end of the body.
        content.appendTo($("body"));

        return content;
    };


    /******
     pb.image_click
     click handler for image loads
     ******/
    pb.image_click = function (event) {
        var ethis, content, api, img, el, pbo;

        ethis = $(this);
        pbo = jQuery(ethis).data('pbo');

        // find target container
        content = $(ethis.attr('rel'));
        if (!content.length) {
            content = pb.create_content_div(pbo);
            content.overlay(pbo.config);
        }
        api = content.overlay();

        // is the image loaded yet?
        if (content.find('img').length === 0) {
            // load the image.
            if (pbo.src) {
                pb.spinner.show();

                // create the image and stuff it
                // into our target
                img = new Image();
                img.src = pbo.src;
                el = $(img);
                content.append(el.addClass('pb-image'));

                // Now, we'll cause the overlay to
                // load when the image is loaded.
                el.load(function () {
                    pb.spinner.hide();
                    api.load();
                });

            }
        } else {
            api.load();
        }

        return false;
    };


    /******
     pb.fi_focus
     First-input focus inside $ selection.
     ******/
    pb.fi_focus = function (jqo) {
        if (! jqo.find("form div.error :input:first").focus().length) {
            jqo.find("form :input:visible:first").focus();
        }
    };


    /******
     pb.ajax_error_recover
     jQuery's ajax load function does not load error responses.
     This routine returns the cooked error response.
     ******/
    pb.ajax_error_recover = function (responseText, selector) {
        var tcontent = $('<div/>').append(
            responseText.replace(/<script(.|\s)*?\/script>/gi, ""));
        return selector ? tcontent.find(selector) : tcontent;
    };


    /******
     pb.add_ajax_load
     Adds a hidden ajax_load input to form
     ******/
    pb.add_ajax_load = function (form) {
        if (form.find('input[name=ajax_load]').length === 0) {
            form.prepend($('<input type="hidden" name="ajax_load" value="' +
                (new Date().getTime()) +
                '" />'));
        }
    };

    /******
     pb.prep_ajax_form
     Set up form with ajaxForm, including success and error handlers.
     ******/
    pb.prep_ajax_form = function (form) {
        var ajax_parent = form.closest('.pb-ajax'),
            data_parent = ajax_parent.closest('.overlay-ajax'),
            pbo = jQuery(data_parent).data('pbo'),
            formtarget = pbo.formselector,
            closeselector = pbo.closeselector,
            beforepost = pbo.beforepost,
            afterpost = pbo.afterpost,
            noform = pbo.noform,
            api = data_parent.overlay(),
            selector = pbo.selector,
            options = {};

        options.beforeSerialize = function () {
            pb.spinner.show();
        };

        if (beforepost) {
            options.beforeSubmit = function (arr, form, options) {
                return beforepost(form, arr, options);
            };
        }
        options.success = function (responseText, statusText, xhr, form) {
            $(document).trigger('formOverlayStart', [this, responseText, statusText, xhr, form]);
            // success comes in many forms, some of which are errors;
            //

            var el, myform, success, target, scripts = [];

            success = statusText === "success" || statusText === "notmodified";

            if (! success) {
                // The responseText parameter is actually xhr
                responseText = responseText.responseText;
            }
            // strip inline script tags
            filteredResponseText = responseText.replace(/<script(.|\s)*?\/script>/gi, "");

            // create a div containing the optionally filtered response
            el = $('<div />').append(
                selector ?
                    // a lesson learned from the jQuery source: $(responseText)
                    // will not work well unless responseText is well-formed;
                    // appending to a div is more robust, and automagically
                    // removes the html/head/body outer tagging.
                    $('<div />').append(filteredResponseText).find(selector)
                    :
                    filteredResponseText
            );

            // afterpost callback
            if (success && afterpost) {
                afterpost(el, data_parent);
            }

            myform = el.find(formtarget);
            if (success && myform.length) {
                ajax_parent.empty().append(el);

                // execute inline scripts
                $.buildFragment([responseText], document, scripts);
                if (scripts.length) {
                    $.each(scripts, function() {
                        $.globalEval( this.text || this.textContent || this.innerHTML || "" );
                    });
                }

                // This may be a complex form.
                if ($.fn.ploneTabInit) {
                    el.ploneTabInit();
                }
                pb.fi_focus(ajax_parent);

                pb.add_ajax_load(myform);
                // attach submit handler with the same options
                myform.ajaxForm(options);

                // attach close to element id'd by closeselector
                if (closeselector) {
                    el.find(closeselector).click(function (event) {
                        api.close();
                        return false;
                    });
                }
                $(document).trigger('formOverlayLoadSuccess', [this, myform, api, pb, ajax_parent]);
            } else {
                // there's no form in our new content or there's been an error
                if (success) {
                    if (typeof(noform) === "function") {
                        // get action from callback
                        noform = noform(el, pbo);
                    }
                } else {
                    noform = statusText;
                }

                switch (noform) {
                    case 'close':
                        api.close();
                        break;
                    case 'reload':
                        // 101692 when saving dialog within portal_registry
                        // api points to form div instead of the overlay api
                        api.close ? api.close() : form.closest('.overlay-ajax').overlay().close();
                        pb.spinner.show();
                        // location.reload results in a repost
                        // dialog in some browsers; very unlikely to
                        // be what we want.
                        location.replace(location.href);
                        break;
                    case 'redirect':
                        api.close();
                        pb.spinner.show();
                        target = pbo.redirect;
                        if (typeof(target) === "function") {
                            // get target from callback
                            target = target(el, responseText, pbo);
                        }
                        location.replace(target);
                        break;
                    default:
                        // 101692 when saving a rule edit reload the manage-rules
                        // page
                        if (success) {
                            api.close();
                            pb.spinner.show();
                            location.reload();
                            break;
                        }
                        if (el.children()) {
                            // show what we've got
                            ajax_parent.empty().append(el);
                        } else {
                            api.close();
                        }
                        break;
                }
                $(document).trigger('formOverlayLoadFailure', [this, myform, api, pb, ajax_parent, noform]);
            }
            pb.spinner.hide();
        };
        // error and success callbacks are the same
        options.error = options.success;

        pb.add_ajax_load(form);
        form.ajaxForm(options);
    };


    /******
     pb.ajax_click
     Click handler for ajax sources. The job of this routine
     is to do the ajax load of the overlay element, then
     call the JQT overlay loader.
     ******/
    pb.ajax_click = function (event) {
        var ethis = $(this),
            pbo,
            content,
            api,
            src,
            el,
            selector,
            formtarget,
            closeselector,
            sep,
            scripts = [];

        e = $.Event();
        e.type = "beforeAjaxClickHandled";
        $(document).trigger(e, [this, event]);
        if (e.isDefaultPrevented()) { return false; }
        pbo = jQuery(ethis).data('pbo');

        content = pb.create_content_div(pbo, ethis);
        // pbo.config.top = $(window).height() * 0.1 - ethis.offsetParent().offset().top;
        content.overlay(pbo.config, ethis);
        api = content.overlay();
        src = pbo.src;
        selector = pbo.selector;
        formtarget = pbo.formselector;
        closeselector = pbo.closeselector;

        pb.spinner.show();

        // prevent double click warning for this form
        $(this).find("input.submitting").removeClass('submitting');

        el = $('div.pb-ajax', content);
        if (el.length === 0) {
            el = $('<div class="pb-ajax" />');
            content.append(el);
        }
        if (api.getConf().fixed) {
            // don't let it be over 75% of the viewport's height
            el.css('max-height', Math.floor($(window).height() * 0.75));
        }

        // affix a random query argument to prevent
        // loading from browser cache
        sep = (src.indexOf('?') >= 0) ? '&': '?';
        src += sep + "ajax_load=" + (new Date().getTime());

        // add selector, if any
        if (selector) {
            src += ' ' + selector;
        }

        // set up callback to be used whenever new contents are loaded
        // into the overlay, to prepare links and forms to stay within
        // the overlay
        el[0].handle_load_inside_overlay = function(responseText, errorText) {
            var el = $(this);

            if (errorText === 'error') {
                el.append(pb.ajax_error_recover(responseText, selector));
            } else if (!responseText.length) {
                el.append(ajax_noresponse_message || 'No response from server.');
            }

            // a non-semantic div here will make sure we can
            // do enough formatting.
            el.wrapInner('<div />');

            // add the submit handler if we've a formtarget
            if (formtarget) {
                var target = el.find(formtarget);
                if (target.length > 0) {
                    pb.prep_ajax_form(target);
                }
            }

            // if a closeselector has been specified, tie it to the overlay's
            // close method via closure
            if (closeselector) {
                el.find(closeselector).click(function (event) {
                    api.close();
                    return false;
                });
            }

            // execute inline scripts
            $.buildFragment([responseText], document, scripts);
            if (scripts.length) {
                $.each(scripts, function() {
                    $.globalEval( this.text || this.textContent || this.innerHTML || "" );
                });
            }

            // This may be a complex form.
            if ($.fn.ploneTabInit) {
                el.ploneTabInit();
            }

            // remove element on close so that it doesn't congest the DOM
            api.onClose = function () {
                content.remove();
            };
            $(document).trigger('loadInsideOverlay', [this, responseText, errorText, api]);
        };

        // and load the div
        el.load(src, null, function (responseText, errorText) {
            // post-process the overlay contents
            el[0].handle_load_inside_overlay.apply(this, [responseText, errorText]);

            // Now, it's all ready to display; hide the
            // spinner and call JQT overlay load.
            pb.spinner.hide();
            api.load();

            return true;
        });

        // don't do the default action
        return false;
    };


    /******
     pb.iframe
     onBeforeLoad handler for iframe overlays.

     Note that the spinner is handled a little differently
     so that we can keep it displayed while the iframe's
     content is loading.
     ******/
    pb.iframe = function () {
        var content, pbo;

        pb.spinner.show();

        content = this.getOverlay();
        pbo = jQuery(this.getTrigger()).data('pbo');

        if (content.find('iframe').length === 0 && pbo.src) {
            content.append(
                '<iframe src="' + pbo.src + '" width="' +
                content.width() + '" height="' + content.height() +
                '" onload="pb.spinner.hide()"/>');
        } else {
            pb.spinner.hide();
        }
        return true;
    };

    // $('.newsImageContainer a')
    //     .prepOverlay({
    //          subtype: 'image',
    //          urlmatch: '/image_view_fullscreen$',
    //          urlreplace: '_preview'
    //         });
}) (jQuery);



/* - accessibility.js - */
// https://www.eea.europa.eu/portal_javascripts/accessibility.js?original=1
function setBaseFontSize($fontsize,$reset){var $body=jQuery('body');if($reset){$body.removeClass('smallText').removeClass('largeText');createCookie("fontsize",$fontsize,365)}
$body.addClass($fontsize)}
jQuery(function($){var $fontsize=readCookie("fontsize");if($fontsize){setBaseFontSize($fontsize,0)}});

/* - attachevent.js - */
// https://www.eea.europa.eu/portal_javascripts/attachevent.js?original=1
function MyAttachEvent(obj,evt,fnc){if(!obj.myEvents){obj.myEvents={}}
if(!obj.myEvents[evt]){obj.myEvents[evt]=[]}
var evts=obj.myEvents[evt];evts[evts.length]=fnc}
function MyFireEvent(obj,evt){var i=0;if(!obj||!obj.myEvents||!obj.myEvents[evt]){return}
var evts=obj.myEvents[evt];for(len=evts.length;i<len;i++){evts[i]()}}
function AttachEvent(obj,evt,fnc,useCapture){if(!useCapture){useCapture=false}
if(obj.addEventListener){obj.addEventListener(evt,fnc,useCapture);return true} else if(obj.attachEvent){return obj.attachEvent("on"+evt,fnc)}
else{MyAttachEvent(obj,evt,fnc);obj['on'+evt]=function(){MyFireEvent(obj,evt)}}}


/* - collapsibleformfields.js - */
// https://www.eea.europa.eu/portal_javascripts/collapsibleformfields.js?original=1
(function($){$.fn.do_search_collapse=function(){
function check_used(element){var e=$(element);if(e.find('input[id$=_toggle]:checkbox').length>0){if(e.find('input[id$=_toggle]:checkbox:checked').length===0){return true}}
if(e.find(':text[value]').length>0){return true}
if(e.find('select .default_option').length>0){if(e.find('select .default_option:selected').length===0){return true}}
return false}
return this.each( function(){var indicator=$(this).find('.collapser:first'),collapse=$(this).find('.collapse:first');indicator.click(function(){var container=$(this).parent(),target=container.find('.collapse:first');target.slideToggle('normal');$(this).toggleClass('expanded');$(this).toggleClass('collapsed')});if(check_used(this)){indicator.addClass('expanded')} else{collapse.hide();indicator.addClass('collapsed')}})};jQuery(function($){$('.field.collapsible').do_search_collapse()})}(jQuery));

/* - collapsiblesections.js - */
// https://www.eea.europa.eu/portal_javascripts/collapsiblesections.js?original=1
function activateCollapsibles(){(function($){$('dl.collapsible:not([class$=Collapsible])').find('dt.collapsibleHeader:first').click(function(){var $container=$(this).parents('dl.collapsible:first'),$type;if(!$container){return true}
$type=$container.hasClass('inline')?'Inline':'Block';$container.toggleClass('collapsed'+$type+'Collapsible').toggleClass('expanded'+$type+'Collapsible')}).end().each(function(){var $state=$(this).hasClass('collapsedOnLoad')?'collapsed':'expanded',$type=$(this).hasClass('inline')?'Inline':'Block';$(this).removeClass('collapsedOnLoad').addClass($state+$type+'Collapsible')})}(jQuery))}
jQuery(function($){$(activateCollapsibles)});

/* - drop.js - */
// https://www.eea.europa.eu/portal_javascripts/drop.js?original=1
var oDiv=null;var timer=null;var delayTime=500;
function objRef(mitid){if(document.getElementById){return document.getElementById(mitid)}
else if(document.all){return document.all[mitid]}}
function showMenu(menuDiv){objRef(menuDiv).style.display="block";if(timer){clearTimeout(timer)}
if(menuDiv!==oDiv){if(oDiv){objRef(oDiv).style.display="none"}
oDiv=menuDiv}}
function hideMenu(navn){n_navn=navn;timer=setTimeout(objRef(n_navn).style.display="none",delayTime)}


/* - hideemail.js - */
// https://www.eea.europa.eu/portal_javascripts/hideemail.js?original=1
function create_contact_info_local(theuser,thedomain,linktext){var thecontact=(theuser+'@'+thedomain);thecontact='<A href="mailto:'+thecontact+'">'+linktext+'</a>';return thecontact}
jQuery(function($){$(".protectEmail").each(function(){var text=this.innerHTML.split(',');this.href='mailto:'+text[0]+'@'+text[1];this.innerHTML=text[2];this.className=this.className.replace("hiddenStructure",'')})});

/* - form_tabbing.js - */
// https://www.eea.europa.eu/portal_javascripts/form_tabbing.js?original=1
var ploneFormTabbing={jqtConfig:{current:"selected"},max_tabs:6};(function($){ploneFormTabbing._buildTabs=function(container,legends){var threshold=legends.length>ploneFormTabbing.max_tabs;var panel_ids,tab_ids=[],tabs="";for(var i=0;i<legends.length;i++){var className,tab,legend=legends[i],lid=legend.id;tab_ids[i]="#"+lid;switch(i){case 0:className='class="formTab firstFormTab"';break;case legends.length-1:className='class="formTab lastFormTab"';break;default:className='class="formTab"';break}
if(threshold){tab="<option "+className+' id="'+lid+'" value="'+lid+'">';tab+=$(legend).text()+"</option>"} else{tab="<li "+className+'><a id="'+lid+'" href="#'+lid+'"><span>';tab+=$(legend).text()+"</span></a></li>"}
tabs+=tab;$(legend).css({"visibility":"hidden","font-size":"0","padding":"0","height":"0","width":"0","line-height":"0"})}
tab_ids=tab_ids.join(",");panel_ids=tab_ids.replace(/#fieldsetlegend-/g,"#fieldset-");if(threshold){tabs=$('<select class="formTabs">'+tabs+"</select>");tabs.change(function(){var selected=$(this).prop("value");$(this).parent().find("option#"+selected).click()})} else{tabs=$('<ul class="formTabs">'+tabs+"</ul>")}
return tabs};ploneFormTabbing.initializeDL=function(){var ftabs=$(ploneFormTabbing._buildTabs(this,$(this).children("dt")));var targets=$(this).children("dd");$(this).before(ftabs);targets.addClass("formPanel");ftabs.tabs(targets,ploneFormTabbing.jqtConfig)};ploneFormTabbing.initializeForm=function(){var jqForm=$(this);var fieldsets=jqForm.children("fieldset");if(!fieldsets.length){return}
var ftabs=ploneFormTabbing._buildTabs(this,fieldsets.children("legend"));$(this).prepend(ftabs);fieldsets.addClass("formPanel");$(this).find('input[name="fieldset"]').addClass("noUnloadProtection");$(this).find(".formPanel:has(div.field span.required)").each(function(){var id=this.id.replace(/^fieldset-/,"#fieldsetlegend-");$(id).addClass("required")});var initialIndex=0;var count=0;var found=false;$(this).find(".formPanel").each(function(){if(!found&&$(this).find("div.field.error").length!==0){initialIndex=count;found=true}
count+=1});var tabSelector="ul.formTabs";if($(ftabs).is("select.formTabs")){tabSelector="select.formTabs"}
var tabsConfig=$.extend({},ploneFormTabbing.jqtConfig,{"initialIndex":initialIndex});jqForm.children(tabSelector).tabs(jqForm.children("fieldset.formPanel"),tabsConfig);jqForm.submit(function(){var selected;if(ftabs.find("a.selected").length>=1){selected=ftabs.find("a.selected").attr("id").replace(/fieldsetlegend-/g,"");selected=selected.replace(/-/g," ")} else{selected=ftabs.find(".selected").attr("id").replace(/fieldsetlegend-/g,"");selected=selected.replace(/-/g," ")}
var fsInput=jqForm.find('input[name="fieldset"]');if(selected&&fsInput){fsInput.val(selected)}});$("#archetypes-schemata-links").addClass("hiddenStructure");$("div.formControls input[name='form.button.previous'],"+"div.formControls input[name='form.button.next']").remove()};$.fn.ploneTabInit=function(pbo){return this.each(function(){var item=$(this);item.find("form.enableFormTabbing,div.enableFormTabbing").each(ploneFormTabbing.initializeForm);item.find("dl.enableFormTabbing").each(ploneFormTabbing.initializeDL);var targetPane=item.find('.enableFormTabbing input[name="fieldset"]').val()||window.location.hash;if(targetPane){item.find('.enableFormTabbing .formTabs [id="'+targetPane.replace("#","").replace('"',"").replace(/^fieldset-/,"fieldsetlegend-")+'"]').click()}})};ploneFormTabbing.initialize=function(){$("body").ploneTabInit()}})(jQuery);jQuery(function(){ploneFormTabbing.initialize()});

/* - nodeutilities.js - */
// https://www.eea.europa.eu/portal_javascripts/nodeutilities.js?original=1
function wrapNode(node,wrappertype,wrapperclass){jQuery(node).wrap('<'+wrappertype+'>').parent().addClass(wrapperclass)}
function nodeContained(innernode,outernode){return jQuery(innernode).parents().filter(function(){return this===outernode}).length>0}
function findContainer(node,func){var p=jQuery(node).parents().filter(func);return p.length?p.get(0):false}
function hasClassName(node,class_name){return jQuery(node).hasClass(class_name)}
function addClassName(node,class_name){jQuery(node).addClass(class_name)}
function removeClassName(node,class_name){jQuery(node).removeClass(class_name)}
function replaceClassName(node,old_class,new_class,ignore_missing){if(ignore_missing||jQuery(node).hasClass(old_class)){jQuery(node).removeClass(old_class).addClass(new_class)}}
function walkTextNodes(node,func,data){jQuery(node).find('*').andSelf().contents().each(function(){if(this.nodeType===3){func(this,data)}})}
function getInnerTextCompatible(node){return jQuery(node).text()}
function getInnerTextFast(node){return jQuery(node).text()}
function sortNodes(nodes,fetch_func,cmp_func){var SortNodeWrapper,items;SortNodeWrapper=function(node){this.value=fetch_func(node);this.cloned_node=node.cloneNode(true)};SortNodeWrapper.prototype.toString=function(){return this.value.toString?this.value.toString():this.value};items=jQuery(nodes).map(function(){return new SortNodeWrapper(this)});if(cmp_func){items.sort(cmp_func)} else{items.sort()}
jQuery.each(items, function(i){jQuery(nodes[i]).replace(this.cloned_node)})}
function copyChildNodes(srcNode,dstNode){jQuery(srcNode).children().clone().appendTo(jQuery(dstNode))}


/* - resize.js - */
// https://www.eea.europa.eu/portal_javascripts/resize.js?original=1
function resizeDiv(){var myWidth=0,myHeight=0;if(typeof(window.innerWidth)=='number'){myWidth=window.innerWidth;myHeight=window.innerHeight} else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight} else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight}
var newHeight=myHeight * 0.8;ct=document.getElementById("region-content");if(ct!==null){ct.style.height='100%'}
ct=document.getElementById("content");if(ct!==null){ct.style.height='100%'}
return newHeight}
window.onresize=resizeDiv;AttachEvent(window,'load',resizeDiv,false);

/* - resolveuid.js - */
// https://www.eea.europa.eu/portal_javascripts/resolveuid.js?original=1
(function($){
function set_resolveuids(){$(".reviewHistory span:contains('uid:')").each(function(){var text=$(this).text();var uid_start=text.lastIndexOf("(uid:");var uid_end=text.lastIndexOf(")");var uid=text.slice(uid_start+5,uid_end);var msg=text.slice(0,uid_start);var base=$('body').data('base-url')||$("base").attr('href')||document.baseURI||window.location.href.split("?")[0];var node=$("<a>").attr('href',base+'/resolveuid/'+uid).text("original");var div=$("<span>").text(msg);div.append(node);$(this).html(div)})}
$(document).ready(set_resolveuids)})(jQuery);

/* - select_all.js - */
// https://www.eea.europa.eu/portal_javascripts/select_all.js?original=1
function toggleSelect(selectbutton,id,initialState,formName){if (/MSIE [5-8]\./.test(navigator.userAgent)&&event.type==="change"&&/toggleSelect\(/.test(selectbutton.onchange.toString())){return}
var fid,state,base;fid=id||'ids:list';state=selectbutton.isSelected;if(state===undefined){state=Boolean(initialState)}
selectbutton.isSelected=!state;jQuery(selectbutton).attr('src',portal_url+'/select_'+(state?'all':'none')+'_icon.png');base=formName?jQuery(document.forms[formName]):jQuery(document);base.find('input[name="'+fid+'"]:checkbox').prop('checked',!state)}


/* - table_sorter.js - */
// https://www.eea.europa.eu/portal_javascripts/table_sorter.js?original=1
(function($){
function sortabledataclass(cell){var re,matches;re=new RegExp("sortabledata-([^ ]*)","g");matches=re.exec(cell.attr('class'));if(matches){return matches[1]}
else{return null}}
function sortable(cell){var text=sortabledataclass(cell);if(text===null){text=cell.text()}
if(text.charAt(4)!=='-'&&text.charAt(7)!=='-'&&!isNaN(parseFloat(text))){return parseFloat(text)}
return text.toLowerCase()}
function sort(){var th,colnum,table,tbody,reverse,index,data,usenumbers,tsorted;th=$(this).closest('th');colnum=$('th',$(this).closest('thead')).index(th);table=$(this).parents('table:first');tbody=table.find('tbody:first');tsorted=parseInt(table.attr('sorted')||'-1',10);reverse=tsorted===colnum;$(this).parent().find('th:not(.nosort) .sortdirection').html('&#x2003;');$(this).children('.sortdirection').html(reverse?'&#x25b2;':'&#x25bc;');index=$(this).parent().children('th').index(this),data=[],usenumbers=true;tbody.find('tr').each(function(){var cells,sortableitem;cells=$(this).children('td');sortableitem=sortable(cells.slice(index,index+1));if(isNaN(sortableitem)){usenumbers=false}
data.push([sortableitem,sortable(cells.slice(1,2)),sortable(cells.slice(0,1)),this])});if(data.length){if(usenumbers){data.sort(function(a,b){return a[0]-b[0]})} else{data.sort()}
if(reverse){data.reverse()}
table.attr('sorted',reverse?'':colnum);tbody.append($.map(data, function(a){return a[3]}));tbody.each(setoddeven)}}
function setoddeven(){var tbody=$(this);tbody.find('tr').removeClass('odd').removeClass('even').filter(':odd').addClass('even').end().filter(':even').addClass('odd')}
$(function(){var blankarrow=$('<span>&#x2003;</span>').addClass('sortdirection');$('table.listing:not(.nosort) thead th:not(.nosort)').append(blankarrow.clone()).css('cursor','pointer').click(sort);$('table.listing:not(.nosort) tbody').each(setoddeven)})})(jQuery);

/* - cookie_functions.js - */
// https://www.eea.europa.eu/portal_javascripts/cookie_functions.js?original=1
function createCookie(name,value,days){var date,expires;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString()} else{expires=""}
document.cookie=name+"="+escape(value)+expires+"; path=/;"}
function readCookie(name){var nameEQ=name+"=",ca=document.cookie.split(';'),i,c;for(i=0;i<ca.length;i=i+1){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)===0){return unescape(c.substring(nameEQ.length,c.length))}}
return null}


/* - ++resource++jquery.cookie.js - */
// https://www.eea.europa.eu/portal_javascripts/++resource++jquery.cookie.js?original=1
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/* - sub_cookies.js - */
// https://www.eea.europa.eu/portal_javascripts/sub_cookies.js?original=1
var SubCookieUtil={get: function(name,subName){var subCookies=this.getAll(name);if(subCookies){return subCookies[subName]} else{return null}},getAll: function(name){var cookieName=encodeURIComponent(name)+"=",cookieStart=document.cookie.indexOf(cookieName),cookieValue=null,result={};if(cookieStart>-1){var cookieEnd=document.cookie.indexOf(";",cookieStart);if(cookieEnd===-1){cookieEnd=document.cookie.length}
cookieValue=document.cookie.substring(cookieStart+cookieName.length,cookieEnd);if(cookieValue.length>0){var subCookies=cookieValue.split("&");for(var i=0,len=subCookies.length;i<len;i++){var parts=subCookies[i].split("=");result[decodeURIComponent(parts[0])]=decodeURIComponent(parts[1])}
return result}}
return null},set: function(name,subName,value,expires,path,domain,secure){var subcookies=this.getAll(name)||{};subcookies[subName]=value;this.setAll(name,subcookies,expires,path,domain,secure)},setAll: function(name,subcookies,expires,path,domain,secure){var cookieText=encodeURIComponent(name)+"=";var subcookieParts=[];for(var subName in subcookies){if(subName.length>0&&subcookies.hasOwnProperty(subName)){subcookieParts.push(encodeURIComponent(subName)+"="+encodeURIComponent(subcookies[subName]))}}
if(subcookieParts.length>0){cookieText+=subcookieParts.join("&");if(expires instanceof Date){cookieText+="; expires="+expires.toGMTString()}
if(path){cookieText+="; path="+path}
if(domain){cookieText+="; domain="+domain}
if(secure){cookieText+="; secure"}} else{cookieText+="; expires="+(new Date(0)).toGMTString()}
document.cookie=cookieText},unset: function(name,subName,path,domain,secure){var subcookies=this.getAll(name);if(subcookies){delete subcookies[subName];this.setAll(name,subcookies,null,path,domain,secure)}},unsetAll: function(name,path,domain,secure){this.setAll(name,null,new Date(0),path,domain,secure)}};

/* - ++resource++tcp_scripts/cookiepolicy.js - */
var CookiePolicy = {};

CookiePolicy.toggleCookiePolicy = function toggleCookiePolicy() {
    jQuery("#viewlet-cookiepolicy").slideToggle(500);
};

CookiePolicy.acceptCookiePolicy = function acceptCookiePolicy() {
    var date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    var expires = "; expires="+date.toGMTString();
    document.cookie = "cookie-policy=accepted"+expires+"; path=/";
    CookiePolicy.toggleCookiePolicy();
};

CookiePolicy.deleteCookies = function delete_cookies(domain) {
    var cookie_domain = domain || window.location.hostname;
    cookie_domain = cookie_domain.indexOf('www') === 0 ? cookie_domain.substr(3) : cookie_domain;
    var cookies = document.cookie.split(";");
    var i, cookie, key, cookie_length;
    for (i = 0, cookie_length = cookies.length; i < cookie_length; i += 1) {
        cookie = cookies[i];
        key = cookie.indexOf("=");
        var name = key > -1 ? cookie.substr(0, key) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" +
            ";domain=" + cookie_domain + ";path=/";
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" +
            ";path=/";
    }
};

jQuery(function() {
    var btn = document.getElementById("tlspu_submit_button");
    if (!btn) {
        return;
    }

    btn.onclick = function(evt) {
        CookiePolicy.acceptCookiePolicy();
        evt.preventDefault();
    };

    var cookies = document.cookie.split(';');
    var i, c_length;
    for(i=0, c_length = cookies.length; i < c_length; i += 1) {
        if (cookies[i].indexOf("cookie-policy=") !== -1) {
            return;
        }
    }

    setTimeout(CookiePolicy.toggleCookiePolicy, 1000);
});


/* - ++resource++jquery.bbq.js - */
// https://www.eea.europa.eu/portal_javascripts/++resource++jquery.bbq.js?original=1
(function($,r){var h,n=Array.prototype.slice,t=decodeURIComponent,a=$.param,j,c,m,y,b=$.bbq=$.bbq||{},s,x,k,e=$.event.special,d="hashchange",B="querystring",F="fragment",z="elemUrlAttr",l="href",w="src",p=/^.*\?|#.*$/g,u,H,g,i,C,E={};function G(I){return typeof I==="string"}function D(J){var I=n.call(arguments,1);return function(){return J.apply(this,I.concat(n.call(arguments)))}}function o(I){return I.replace(H,"$2")}function q(I){return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(K,P,I,L,J){var R,O,N,Q,M;if(L!==h){N=I.match(K?H:/^([^#?]*)\??([^#]*)(#?.*)/);M=N[3]||"";if(J===2&&G(L)){O=L.replace(K?u:p,"")}else{Q=m(N[2]);L=G(L)?m[K?F:B](L):L;O=J===2?L:J===1?$.extend({},L,Q):$.extend({},Q,L);O=j(O);if(K){O=O.replace(g,t)}}R=N[1]+(K?C:O||!N[1]?"?":"")+O+M}else{R=P(I!==h?I:location.href)}return R}a[B]=D(f,0,q);a[F]=c=D(f,1,o);a.sorted=j=function(J,K){var I=[],L={};$.each(a(J,K).split("&"),function(P,M){var O=M.replace(/(?:%5B|=).*$/,""),N=L[O];if(!N){N=L[O]=[];I.push(O)}N.push(M)});return $.map(I.sort(),function(M){return L[M]}).join("&")};c.noEscape=function(J){J=J||"";var I=$.map(J.split(""),encodeURIComponent);g=new RegExp(I.join("|"),"g")};c.noEscape(",/");c.ajaxCrawlable=function(I){if(I!==h){if(I){u=/^.*(?:#!|#)/;H=/^([^#]*)(?:#!|#)?(.*)$/;C="#!"}else{u=/^.*#/;H=/^([^#]*)#?(.*)$/;C="#"}i=!!I}return i};c.ajaxCrawlable(0);$.deparam=m=function(L,I){var K={},J={"true":!0,"false":!1,"null":null};$.each(L.replace(/\+/g," ").split("&"),function(O,T){var N=T.split("="),S=t(N[0]),M,R=K,P=0,U=S.split("]["),Q=U.length-1;if(/\[/.test(U[0])&&/\]$/.test(U[Q])){U[Q]=U[Q].replace(/\]$/,"");U=U.shift().split("[").concat(U);Q=U.length-1}else{Q=0}if(N.length===2){M=t(N[1]);if(I){M=M&&!isNaN(M)?+M:M==="undefined"?h:J[M]!==h?J[M]:M}if(Q){for(;P<=Q;P++){S=U[P]===""?R.length:U[P];R=R[S]=P<Q?R[S]||(U[P+1]&&isNaN(U[P+1])?{}:[]):M}}else{if($.isArray(K[S])){K[S].push(M)}else{if(K[S]!==h){K[S]=[K[S],M]}else{K[S]=M}}}}else{if(S){K[S]=I?h:""}}});return K};function A(K,I,J){if(I===h||typeof I==="boolean"){J=I;I=a[K?F:B]()}else{I=G(I)?I.replace(K?u:p,""):I}return m(I,J)}m[B]=D(A,0);m[F]=y=D(A,1);$[z]||($[z]=function(I){return $.extend(E,I)})({a:l,base:l,iframe:w,img:w,input:w,form:"action",link:l,script:w});k=$[z];function v(L,J,K,I){if(!G(K)&&typeof K!=="object"){I=K;K=J;J=h}return this.each(function(){var O=$(this),M=J||k()[(this.nodeName||"").toLowerCase()]||"",N=M&&O.attr(M)||"";O.attr(M,a[L](N,K,I))})}$.fn[B]=D(v,B);$.fn[F]=D(v,F);b.pushState=s=function(L,I){if(G(L)&&/^#/.test(L)&&I===h){I=2}var K=L!==h,J=c(location.href,K?L:{},K?I:2);location.href=J};b.getState=x=function(I,J){return I===h||typeof I==="boolean"?y(I):y(J)[I]};b.removeState=function(I){var J={};if(I!==h){J=x();$.each($.isArray(I)?I:arguments,function(L,K){delete J[K]})}s(J,2)};e[d]=$.extend(e[d],{add:function(I){var K;function J(M){var L=M[F]=c();M.getState=function(N,O){return N===h||typeof N==="boolean"?m(L,N):m(L,O)[N]};K.apply(this,arguments)}if($.isFunction(I)){K=I;return J}else{K=I.handler;I.handler=J}}})})(jQuery,this);(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}return j})()})(jQuery,this);

/* - ++resource++jquery.timers.js - */
// https://www.eea.europa.eu/portal_javascripts/++resource++jquery.timers.js?original=1
ï»¿
jQuery.fn.extend({everyTime: function(interval,label,fn,times,belay){return this.each(function(){jQuery.timer.add(this,interval,label,fn,times,belay)})},oneTime: function(interval,label,fn){return this.each(function(){jQuery.timer.add(this,interval,label,fn,1)})},stopTime: function(label,fn){return this.each(function(){jQuery.timer.remove(this,label,fn)})}});jQuery.event.special
jQuery.extend({timer:{global:[],guid:1,dataKey:"jQuery.timer",regex:/^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,powers:{'ms':1,'cs':10,'ds':100,'s':1000,'das':10000,'hs':100000,'ks':1000000},timeParse: function(value){if(value==undefined||value==null)
return null;var result=this.regex.exec(jQuery.trim(value.toString()));if(result[2]){var num=parseFloat(result[1]);var mult=this.powers[result[2]]||1;return num * mult} else{return value}},add: function(element,interval,label,fn,times,belay){var counter=0;if(jQuery.isFunction(label)){if(!times)
times=fn;fn=label;label=interval}
interval=jQuery.timer.timeParse(interval);if(typeof interval!='number'||isNaN(interval)||interval<=0)
return;if(times&&times.constructor!=Number){belay=!!times;times=0}
times=times||0;belay=belay||false;var timers=jQuery.data(element,this.dataKey)||jQuery.data(element,this.dataKey,{});if(!timers[label])
timers[label]={};fn.timerID=fn.timerID||this.guid++;var handler=function(){if(belay&&this.inProgress)
return;this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false)
jQuery.timer.remove(element,label,fn);this.inProgress=false};handler.timerID=fn.timerID;if(!timers[label][fn.timerID])
timers[label][fn.timerID]=window.setInterval(handler,interval);this.global.push(element)},remove: function(element,label,fn){var timers=jQuery.data(element,this.dataKey),ret;if(timers){if(!label){for(label in timers)
this.remove(element,label,fn)} else if(timers[label]){if(fn){if(fn.timerID){window.clearInterval(timers[label][fn.timerID]);delete timers[label][fn.timerID]}} else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn]}}
for(ret in timers[label]) break;if(!ret){ret=null;delete timers[label]}}
for(ret in timers) break;if(!ret)
jQuery.removeData(element,this.dataKey)}}}});jQuery(window).bind("unload", function(){if(jQuery.timer!==undefined){jQuery.each(jQuery.timer.global, function(index,item){jQuery.timer.remove(item)})}});

/* - promotion_gallery.js - */
/* jslint:disable */
/**
 * @version		2.0
 * @package		jquery
 * @subpackage	lofslidernews
 * @copyright	Copyright (C) JAN 2010 LandOfCoder.com <@emai:landofcoder@gmail.com>. All rights reserved.
 * @website     http://landofcoder.com
 * @license		This plugin is dual-licensed under the GNU General Public License and the MIT License

 * @version		2.1 cleanup by ichim-david
 */

(function($) {
    $.fn.lofJSlider = function(settings) {
        return this.each(function() {
            return new $.lofSlider(this, settings);
        });
    };
    $.lofSlider = function(obj, settings) {
        this.settings = {
            direction: '',
            mainItemSelector: 'li',
            navInnerSelector: 'ul',
            navSelector: 'li',
            navigatorEvent: 'click', /* click|mouseenter */
            wrapperSelector: '.sliders-wrap-inner',
            wrapperOuter: '.gallery-slider-wrapper',
            interval: 5000,
            auto: false, // whether to automatic play the slideshow
            maxItemDisplay: 3,
            startItem: 0,
            navPosition: 'vertical', /* values: horizontal|vertical*/
            navigatorHeight: 100,
            navigatorWidth: 310,
            duration: 600,
            navItemsSelector: '.navigator-wrap-inner li',
            navOuterSelector: '.navigator-wrapper',
            isPreloaded: true,
            easing: 'swing',
            pauseOnHover: false,
            galleryControls: "#play-pause",
            galleryPlay: "promo-gallery-play",
            galleryPause: "promo-gallery-pause",
            buttons: null,
            onPlaySlider: function(obj, slider) { obj.wrapper.trigger('promo-gallery:onPlaySlider', { obj: obj, slider: slider }); },
            onComplete: function(slider, index) { slider.trigger('promo-gallery:onComplete', { slider: slider, index: index }); }
        };
        $.extend(this.settings, settings || {});
        this.nextNo = null;
        this.previousNo = null;
        this.maxWidth = this.settings.mainWidth || "100%";

        this.wrapper = $(obj).find(this.settings.wrapperSelector);
        var wrapOuter = $('<div class="gallery-slider-wrapper"></div>').width(this.maxWidth);
        this.wrapper.wrap(wrapOuter);

        this.slides = this.wrapper.find(this.settings.mainItemSelector);
        if (!this.wrapper.length || !this.slides.length) { return; }
        // set width of wrapper
        if (this.settings.maxItemDisplay > this.slides.length) {
            this.settings.maxItemDisplay = this.slides.length;
        }
        this.currentNo = isNaN(this.settings.startItem) || this.settings.startItem > this.slides.length ? 0 : this.settings.startItem;
        this.navigatorOuter = $(obj).find(this.settings.navOuterSelector);
        this.navigatorItems = $(obj).find(this.settings.navItemsSelector);
        this.navigatorInner = this.navigatorOuter.find(this.settings.navInnerSelector);
        // use automatic calculate width of navigator

        if (this.settings.navigatorHeight === null || this.settings.navigatorWidth === null) {
            this.settings.navigatorHeight = this.navigatorItems.eq(0).outerWidth(true);
            this.settings.navigatorWidth = this.navigatorItems.eq(0).outerHeight(true);

        }
        if (this.settings.navPosition === 'horizontal') {
            this.navigatorInner.width(this.slides.length * this.settings.navigatorWidth);
            this.navigatorOuter.width(this.settings.maxItemDisplay * this.settings.navigatorWidth);
            this.navigatorOuter.height(this.settings.navigatorHeight);

        } else {
            this.navigatorInner.height(this.slides.length * this.settings.navigatorHeight);

            this.navigatorOuter.height(this.settings.maxItemDisplay * this.settings.navigatorHeight);
            this.navigatorOuter.width(this.settings.navigatorWidth);
        }
        this.slides.width(this.settings.mainWidth);
        this.navigratorStep = this.__getPositionMode(this.settings.navPosition);
        this.directionMode = this.__getDirectionMode();

        if (this.settings.direction === 'opacity') {
            this.wrapper.addClass('lof-opacity');
            $(this.slides).css({
                'opacity': 0,
                'z-index': 1
            }).eq(this.currentNo).css({
                    'opacity': 1,
                    'z-index': 3
                });
        } else {
            this.wrapper.css({
                'left': '-' + this.currentNo * this.maxSize + 'px',
                'width': (this.maxWidth) * this.slides.length
            });
        }

        if (this.settings.isPreloaded) {
            this.preLoadImage(this.onComplete);
        } else {
            this.onComplete();
        }

        var $buttonControl = $(this.settings.galleryControls, obj);
        if (this.settings.auto) {
            $buttonControl.addClass(this.settings.galleryPause);
        } else {
            $buttonControl.addClass(this.settings.galleryPlay);
        }
        var self = this;

        if (this.settings.pauseOnHover) {
            $(obj).hover(function() {
                self.stop();
            }, function() {
                if (self.settings.auto) {
                    self.play(1, 'next', true);
                }
            });

        }

        $buttonControl.click(function(e) {
            if ($buttonControl.hasClass(self.settings.galleryPlay)) {
                self.settings.auto = true;
                self.play(1, 'next', true);
                $buttonControl.removeClass(self.settings.galleryPlay).addClass(self.settings.galleryPause);
            } else {
                self.settings.auto = false;
                self.stop();
                $buttonControl.addClass(self.settings.galleryPlay).removeClass(self.settings.galleryPause);
            }
            e.preventDefault();
        });
    };
    $.lofSlider.fn = $.lofSlider.prototype;
    $.lofSlider.fn.extend = $.lofSlider.extend = $.extend;

    $.lofSlider.fn.extend({

        startUp: function(obj, wrapper) {
            var self = this;

            this.navigatorItems.each(function(index, item) {
                $(item).bind(self.settings.navigatorEvent, function() {
                    self.jumping(index, true);
                    self.setNavActive(index, item);
                });
                $(item).css({
                    'height': self.settings.navigatorHeight,
                    'width': self.settings.navigatorWidth
                });
            });
            this.setNavActive(this.currentNo);
            this.settings.onComplete(this.slides.eq(this.currentNo), this.currentNo);
            if (this.settings.buttons && typeof(this.settings.buttons) === "object") {
                this.registerButtonsControl('click', this.settings.buttons, this);

            }
            if (this.settings.auto) { this.play(this.settings.interval, 'next', true); }

            return this;
        },
        onComplete: function() {
            setTimeout(function() {
                $('.preload').fadeOut(900, function() {
                    $('.preload').remove();
                });
            }, 400);
            this.startUp();
        },
        preLoadImage: function(callback) {
            var self = this;
            var images = this.wrapper.find('img');

            var count = 0;
            images.each(function(index, image) {
                if (!image.complete) {
                    image.onload = function() {
                        count++;
                        if (count >= images.length) {
                            self.onComplete();
                        }
                    };
                    image.onerror = function() {
                        count++;
                        if (count >= images.length) {
                            self.onComplete();
                        }
                    };
                } else {
                    count++;
                    if (count >= images.length) {
                        self.onComplete();
                    }
                }
            });
        },
        navigationAnimate: function(currentIndex) {
            if (currentIndex <= this.settings.startItem || currentIndex - this.settings.startItem >= this.settings.maxItemDisplay - 1) {
                this.settings.startItem = currentIndex - this.settings.maxItemDisplay + 2;
                if (this.settings.startItem < 0) { this.settings.startItem = 0; }
                if (this.settings.startItem > this.slides.length - this.settings.maxItemDisplay) {
                    this.settings.startItem = this.slides.length - this.settings.maxItemDisplay;
                }
            }

            this.navigatorInner.stop().animate((0,eval)('({' + this.navigratorStep[0] + ':-' + this.settings.startItem * this.navigratorStep[1] + '})'), {
                duration: 500,
                easing: 'swing'
            });
        },
        setNavActive: function(index, item) {
            if ((this.navigatorItems)) {
                this.navigatorItems.removeClass('active');
                $(this.navigatorItems.get(index)).addClass('active');
                this.navigationAnimate(this.currentNo);
            }
        },
        __getPositionMode: function(position) {
            if (position === 'horizontal') {
                return ['left', this.settings.navigatorWidth];
            }
            return ['top', this.settings.navigatorHeight];
        },
        __getDirectionMode: function() {
            switch (this.settings.direction) {
                case 'opacity':
                    this.maxSize = 0;
                    return ['opacity', 'opacity'];
                default:
                    this.maxSize = this.maxWidth;
                    return ['left', 'width'];
            }
        },
        registerButtonsControl: function(eventHandler, objects, self) {
            function next(e) {
                self.next(true);
                e.preventDefault();
            }
            function previous(e) {
                self.previous(true);
                e.preventDefault();
            }
            for (var action in objects) {
                if (objects.hasOwnProperty(action)) {
                    switch (action.toString()) {
                        case 'next':
                            objects[action].click(next);
                            break;
                        case 'previous':
                            objects[action].click(previous);
                            break;
                    }
                }
            }
            return this;
        },
        onProcessing: function(manual, start, end) {
            this.previousNo = this.currentNo + (this.currentNo > 0 ? -1 : this.slides.length - 1);
            this.nextNo = this.currentNo + (this.currentNo < this.slides.length - 1 ? 1 : 1 - this.slides.length);
            return this;
        },
        finishFx: function(manual) {
            if (manual) { this.stop(); }
            if (manual && this.settings.auto) {
                this.play(this.settings.interval, 'next', true);
            }
            this.setNavActive(this.currentNo);
            this.settings.onPlaySlider(this, $(this.slides).eq(this.currentNo));
        },
        getObjectDirection: function(start, end) {
            return (0,eval)("({'" + this.directionMode[0] + "':-" + (this.currentNo * start) + "})");
        },
        fxStart: function(index, obj, currentObj) {
            var s = this;
            if (this.settings.direction === 'opacity') {

                $(this.slides).stop().animate({
                    opacity: 0
                }, {
                    duration: this.settings.duration,
                    easing: this.settings.easing,
                    complete: function() {
                        s.slides.css("z-index", "1");
                        s.slides.eq(index).css("z-index", "3");
                    }
                });
                $(this.slides).eq(index).stop().animate({
                    opacity: 1
                }, {
                    duration: this.settings.duration,
                    easing: this.settings.easing,
                    complete: function() {
                        s.settings.onComplete($(s.slides).eq(index), index);
                    }
                });
            } else {
                this.wrapper.stop().animate(obj, {
                    duration: this.settings.duration,
                    easing: this.settings.easing,
                    complete: function() {
                        s.settings.onComplete($(s.slides).eq(index), index);
                    }
                });
            }
            return this;
        },
        jumping: function(no, manual) {
            this.stop();
            if (this.currentNo === no) { return; }
            var obj = (0,eval)("({'" + this.directionMode[0] + "':-" + (this.maxSize * no) + "})");
            this.onProcessing(null, manual, 0, this.maxSize)
                .fxStart(no, obj, this)
                .finishFx(manual);
            this.currentNo = no;
        },
        next: function(manual, item) {

            this.currentNo += (this.currentNo < this.slides.length - 1) ? 1 : (1 - this.slides.length);
            this.onProcessing(item, manual, 0, this.maxSize)
                .fxStart(this.currentNo, this.getObjectDirection(this.maxSize), this)
                .finishFx(manual);
        },
        previous: function(manual, item) {
            this.currentNo += this.currentNo > 0 ? -1 : this.slides.length - 1;
            this.onProcessing(item, manual)
                .fxStart(this.currentNo, this.getObjectDirection(this.maxSize), this)
                .finishFx(manual);
        },
        play: function(delay, direction, wait) {
            this.stop();
            if (!wait) {
                this[direction](false);
            }
            var self = this;
            this.isRun = setTimeout(function() {
                self[direction](true);
            }, delay);
        },
        stop: function() {
            if (this.isRun === null) { return; }
            clearTimeout(this.isRun);
            this.isRun = null;
        }
    });
})(jQuery);


/* - promo_gallery.js - */
// https://www.eea.europa.eu/portal_javascripts/promo_gallery.js?original=1
(function($){$(function(){var buttons={previous:$('#prev-promo'),next:$('#next-promo')};var small_navigator=$("#promo-navigator-sm"),site_address=small_navigator.length?true:undefined,nav_height=site_address?50:80,nav_width=site_address?65:170,nav_items_selector=site_address?"#promo-navigator-sm li":"#promo-navigator li",wrapper_selector=site_address?"#promo-gallery-content-sm":"#promo-gallery-content",max_item_display=site_address?5:3,nav_position=site_address?'horizontal':'vertical',nav_outer_selector=site_address?"#navigator-outer-sm":"#navigator-outer";var settings={interval:10000,direction:'opacity',duration:1500,wrapperSelector:wrapper_selector,navItemsSelector:nav_items_selector,navOuterSelector:nav_outer_selector,isPreloaded:false,maxItemDisplay:max_item_display,navigatorHeight:nav_height,navigatorWidth:nav_width,navPosition:nav_position,auto:true,caption:'.promo-item-desc',opacityClass:'lof-opacity',buttons:buttons};$('#promo-gallery-wrapper').lofJSlider(settings);var $content=$("#promo-gallery-content");var $items=$content.find('li');if($items.length===1){$items.css('position','relative')}})}(jQuery));

/* - outdated_browser.js - */
// https://www.eea.europa.eu/portal_javascripts/outdated_browser.js?original=1
(function($,window,document,undef){"use strict";var notSupportedBrowsers=[{browser:'MSIE',version:9,os:'Any'},{browser:'Chrome',version:40,os:'Any'},{browser:'Firefox',version:40,os:'Any'}];
function displayMessage(obj){$.get(obj.template).done(function(data){var trimmed_data=data.trim();if(!trimmed_data){return}
var message_wrap=$(data),outdated_transition,timeout=obj.message_timer||10000;message_wrap.prependTo('body')[obj.transition](1000);outdated_transition=function(){message_wrap[obj.transition](1000, function(){window.createCookie(obj.template,obj.cookie_message,obj.cookie_days)})};if(obj.hover_fade){timeout=window.setTimeout(outdated_transition,timeout);message_wrap.hover(function(){window.clearTimeout(timeout)}, function(){outdated_transition()})}
$(document).trigger('messageDisplayed')}).fail(function(data){})}
var BrowserDetection={init: function(){var i;this.detectBrowser();this.detectOS();if(this.browser===''||this.browser==='Unknown'||this.os===''||this.os==='Unknown'||this.browserVersion===''||this.browserVersion===0){return}
var outdatedBrowser=false;for(i=0;i<notSupportedBrowsers.length;i+=1){if(notSupportedBrowsers[i].os==='Any'||notSupportedBrowsers[i].os===this.os){if(notSupportedBrowsers[i].browser==='Any'||notSupportedBrowsers[i].browser===this.browser){if(notSupportedBrowsers[i].version==="Any"||this.browserVersion<=parseFloat(notSupportedBrowsers[i].version)){outdatedBrowser=true;break}}}}
if(outdatedBrowser){displayMessage({template:'outdated_browsers',cookie_message:'seen',cookie_days:2,transition:'fadeToggle',hover_fade:true})}
window.createCookie('outdated_browsers','seen',2)},detectBrowser: function(){this.browser='';this.browserVersion=0;var userAgent=window.navigator.userAgent;if(/MSIE (\d+\.\d+);/.test(userAgent)){this.browser='MSIE'} else if(/Firefox[\/\s](\d+\.\d+)/.test(userAgent)){this.browser='Firefox'} else if(/Chrome[\/\s](\d+\.\d+)/.test(userAgent)){this.browser='Chrome'} else if(/Safari[\/\s](\d+\.\d+)/.test(userAgent)){this.browser='Safari';/Version[\/\s](\d+\.\d+)/.test(userAgent);this.browserVersion=Number(RegExp.$1)} else if(/Opera[\/\s](\d+\.\d+)/.test(userAgent)){this.browser='Opera'}
if(this.browser===''){this.browser='Unknown'} else if(this.browserVersion===0){this.browserVersion=parseFloat(Number(RegExp.$1))}},detectOS: function(){var i,op_length=this.operatingSystems.length,cur_op;for(i=0;i<op_length;i+=1){if(this.operatingSystems[i].searchString.indexOf(this.operatingSystems[i].subStr)!==-1){this.os=this.operatingSystems[i].name;return}}
this.os="Unknown"},browser:'',os:'',browserVersion:'',operatingSystems:[{'searchString':navigator.platform,'name':'Windows','subStr':'Win'},{'searchString':navigator.platform,'name':'Mac','subStr':'Mac'},{'searchString':navigator.platform,'name':'Linux','subStr':'Linux'}]};$(function(){if(!window.readCookie('outdated_browsers')||window.readCookie('outdated_browsers')!=='seen'){BrowserDetection.init()}
else{$(document).bind('messageDisplayed', function(){var $message_wrap=$(".message_wrap");$("#repeat_survey").click(function(e){window.createCookie('survey_message','seen',1);$message_wrap.slideUp(1000);e.preventDefault()});$("#no_survey").click(function(e){window.createCookie('survey_message','never',365);$message_wrap.slideUp(1000);e.preventDefault()});$("#take_survey").click(function(e){window.createCookie('survey_message','seen',1);$message_wrap.slideUp(1000)})});if(window.readCookie('survey_message')!=='never'){if(window.readCookie('survey_message')!=='seen'){displayMessage({template:'survey_message',transition:'slideToggle'})}}}})}(jQuery,window,document));

/* - ++resource++jquery.fancybox.js - */
/*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
(function(t,J,f,x){var L=f("html"),q=f(t),p=f(J),b=f.fancybox=function(){b.open.apply(this,arguments)},K=navigator.userAgent.match(/msie/i),D=null,u=J.createTouch!==x,v=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},G=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,c){var d=parseInt(a,10)||0;c&&G(a)&&(d*=b.getViewport()[c]/100);return Math.ceil(d)},y=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.7",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!u,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(K?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",
openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},
previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,c){if(a&&(f.isPlainObject(c)||(c={}),!1!==b.close(!0)))return f.isArray(a)||(a=v(a)?f(a).get():[a]),f.each(a,function(d,e){var k={},g,l,h,n,m;"object"===f.type(e)&&(e.nodeType&&(e=f(e)),v(e)?(k={href:e.data("fancybox-href")||e.attr("href"),title:f("<div/>").text(e.data("fancybox-title")||
e.attr("title")||"").html(),isDom:!0,element:e},f.metadata&&f.extend(!0,k,e.metadata())):k=e);g=c.href||k.href||(r(e)?e:null);l=c.title!==x?c.title:k.title||"";n=(h=c.content||k.content)?"html":c.type||k.type;!n&&k.isDom&&(n=e.data("fancybox-type"),n||(n=(n=e.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(e)&&(n="html",h=e)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));h||("inline"===n?g?h=f(r(g)?
g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(h=e):"html"===n?h=g:n||g||!k.isDom||(n="inline",h=e));f.extend(k,{href:g,type:n,content:h,title:l,selector:m});a[d]=k}),b.opts=f.extend(!0,{},b.defaults,c),c.keys!==x&&(b.opts.keys=c.keys?f.extend({},b.defaults.keys,c.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&
a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var c=function(){clearTimeout(b.player.timer)},
d=function(){c();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},e=function(){c();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":e,"onUpdate.player":d,"beforeLoad.player":c}),d(),b.trigger("onPlayStart")):e()},next:function(a){var c=b.current;c&&(r(a)||(a=c.direction.next),b.jumpto(c.index+
1,a,"next"))},prev:function(a){var c=b.current;c&&(r(a)||(a=c.direction.prev),b.jumpto(c.index-1,a,"prev"))},jumpto:function(a,c,d){var e=b.current;e&&(a=m(a),b.direction=c||e.direction[a>=e.index?"next":"prev"],b.router=d||"jumpto",e.loop&&(0>a&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==x&&(b.cancel(),b._start(a)))},reposition:function(a,c){var d=b.current,e=d?d.wrap:null,k;e&&(k=b._getPosition(c),a&&"scroll"===a.type?(delete k.position,e.stop(!0,!0).animate(k,200)):(e.css(k),
d.pos=f.extend({},d.dim,k)))},update:function(a){var c=a&&a.originalEvent&&a.originalEvent.type,d=!c||"orientationchange"===c;d&&(clearTimeout(D),D=null);b.isOpen&&!D&&(D=setTimeout(function(){var e=b.current;e&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(d||"load"===c||"resize"===c&&e.autoResize)&&b._setDimension(),"scroll"===c&&e.canShrink||b.reposition(a),b.trigger("onUpdate"),D=null)},d&&!u?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,
u&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,c;b.hideLoading();a=f(b.opts.tpl.loading).click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(c=b.getViewport(),a.css({position:"absolute",top:.5*c.h+c.y,left:.5*c.w+c.x}));b.trigger("onLoading")},getViewport:function(){var a=
b.current&&b.current.locked||!1,c={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(c.w=a[0].clientWidth,c.h=a[0].clientHeight):(c.w=u&&t.innerWidth?t.innerWidth:q.width(),c.h=u&&t.innerHeight?t.innerHeight:q.height());return c},unbindEvents:function(){b.wrap&&v(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,c;a&&(q.bind("orientationchange.fb"+(u?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(c=a.keys)&&p.bind("keydown.fb",
function(d){var e=d.which||d.keyCode,k=d.target||d.srcElement;if(27===e&&b.coming)return!1;d.ctrlKey||d.altKey||d.shiftKey||d.metaKey||k&&(k.type||f(k).is("[contenteditable]"))||f.each(c,function(c,k){if(1<a.group.length&&k[e]!==x)return b[c](k[e]),d.preventDefault(),!1;if(-1<f.inArray(e,k))return b[c](),d.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(c,e,k,g){for(var d=f(c.target||null),h=!1;d.length&&!(h||d.is(".fancybox-skin")||d.is(".fancybox-wrap"));)h=
(h=d[0])&&!(h.style.overflow&&"hidden"===h.style.overflow)&&(h.clientWidth&&h.scrollWidth>h.clientWidth||h.clientHeight&&h.scrollHeight>h.clientHeight),d=f(d).parent();0!==e&&!h&&1<b.group.length&&!a.canShrink&&(0<g||0<k?b.prev(0<g?"down":"left"):(0>g||0>k)&&b.next(0>g?"up":"right"),c.preventDefault())}))},trigger:function(a,c){var d,e=c||b.coming||b.current;if(e){f.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1)));if(!1===d)return!1;e.helpers&&f.each(e.helpers,function(c,
d){if(d&&b.helpers[c]&&f.isFunction(b.helpers[c][a]))b.helpers[c][a](f.extend(!0,{},b.helpers[c].defaults,d),e)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var c={},d,e;a=m(a);d=b.group[a]||null;if(!d)return!1;c=f.extend(!0,{},b.opts,d);d=c.margin;e=c.padding;"number"===f.type(d)&&(c.margin=[d,d,d,d]);"number"===f.type(e)&&(c.padding=
[e,e,e,e]);c.modal&&f.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});c.autoSize&&(c.autoWidth=c.autoHeight=!0);"auto"===c.width&&(c.autoWidth=!0);"auto"===c.height&&(c.autoHeight=!0);c.group=b.group;c.index=a;b.coming=c;if(!1===b.trigger("beforeLoad"))b.coming=null;else{e=c.type;d=c.href;if(!e)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
e||"swf"===e)c.autoHeight=c.autoWidth=!1,c.scrolling="visible";"image"===e&&(c.aspectRatio=!0);"iframe"===e&&u&&(c.scrolling="scroll");c.wrap=f(c.tpl.wrap).addClass("fancybox-"+(u?"mobile":"desktop")+" fancybox-type-"+e+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent||"body");f.extend(c,{skin:f(".fancybox-skin",c.wrap),outer:f(".fancybox-outer",c.wrap),inner:f(".fancybox-inner",c.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){c.skin.css("padding"+b,y(c.padding[a]))});b.trigger("onReady");
if("inline"===e||"html"===e){if(!c.content||!c.content.length)return b._error("content")}else if(!d)return b._error("href");"image"===e?b._loadImage():"ajax"===e?b._loadAjax():"iframe"===e?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,d){b.coming&&"abort"!==d?b._error("ajax",a):b.hideLoading()},success:function(c,d){"success"===d&&(a.content=c,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
c=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",u?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(d){}});a.iframe.preload&&(b.showLoading(),c.one("load",function(){f(this).data("ready",1);u||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=c.appendTo(a.inner);a.iframe.preload||
b._afterLoad()},_preloadImages:function(){var a=b.group,c=b.current,d=a.length,e=c.preload?Math.min(c.preload,d-1):0,f,g;for(g=1;g<=e;g+=1)f=a[(c.index+g)%d],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,c=b.current,d,e,k,g,l;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,c))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{c&&(b.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();d=a.content;e=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:c});g=a.href;switch(e){case "inline":case "ajax":case "html":a.selector?d=f("<div>").html(d).find(a.selector):v(d)&&(d.data("fancybox-placeholder")||d.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()),d=d.show().detach(),a.wrap.bind("onReset",function(){f(this).find(d).length&&d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":d=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":d='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',l="",f.each(a.swf,function(a,b){d+='<param name="'+a+'" value="'+b+'"></param>';l+=" "+a+'="'+b+'"'}),d+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}v(d)&&d.parent().is(a.inner)||a.inner.append(d);b.trigger("beforeShow");
a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(c.prevMethod)b.transitions[c.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),c=0,d,e=b.wrap,k=b.skin,g=b.inner,l=b.current;d=l.width;var h=l.height,n=l.minWidth,w=l.minHeight,p=l.maxWidth,
q=l.maxHeight,u=l.scrolling,r=l.scrollOutside?l.scrollbarWidth:0,z=l.margin,A=m(z[1]+z[3]),t=m(z[0]+z[2]),x,B,v,E,C,H,D,F,I;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");z=m(k.outerWidth(!0)-k.width());x=m(k.outerHeight(!0)-k.height());B=A+z;v=t+x;E=G(d)?(a.w-B)*m(d)/100:d;C=G(h)?(a.h-v)*m(h)/100:h;if("iframe"===l.type){if(I=l.content,l.autoHeight&&I&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(E).height(9999),H=I.contents().find("body"),r&&H.css("overflow-x",
"hidden"),C=H.outerHeight(!0))}catch(M){}}else if(l.autoWidth||l.autoHeight)g.addClass("fancybox-tmp"),l.autoWidth||g.width(E),l.autoHeight||g.height(C),l.autoWidth&&(E=g.width()),l.autoHeight&&(C=g.height()),g.removeClass("fancybox-tmp");d=m(E);h=m(C);F=E/C;n=m(G(n)?m(n,"w")-B:n);p=m(G(p)?m(p,"w")-B:p);w=m(G(w)?m(w,"h")-v:w);q=m(G(q)?m(q,"h")-v:q);H=p;D=q;l.fitToView&&(p=Math.min(a.w-B,p),q=Math.min(a.h-v,q));B=a.w-A;t=a.h-t;l.aspectRatio?(d>p&&(d=p,h=m(d/F)),h>q&&(h=q,d=m(h*F)),d<n&&(d=n,h=m(d/
F)),h<w&&(h=w,d=m(h*F))):(d=Math.max(n,Math.min(d,p)),l.autoHeight&&"iframe"!==l.type&&(g.width(d),h=g.height()),h=Math.max(w,Math.min(h,q)));if(l.fitToView)if(g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height(),l.aspectRatio)for(;(a>B||A>t)&&d>n&&h>w&&!(19<c++);)h=Math.max(w,Math.min(q,h-10)),d=m(h*F),d<n&&(d=n,h=m(d/F)),d>p&&(d=p,h=m(d/F)),g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height();else d=Math.max(n,Math.min(d,d-(a-B))),h=Math.max(w,Math.min(h,h-(A-t)));r&&"auto"===u&&h<C&&
d+z+r<B&&(d+=r);g.width(d).height(h);e.width(d+z);a=e.width();A=e.height();c=(a>B||A>t)&&d>n&&h>w;d=l.aspectRatio?d<H&&h<D&&d<E&&h<C:(d<H||h<D)&&(d<E||h<C);f.extend(l,{dim:{width:y(a),height:y(A)},origWidth:E,origHeight:C,canShrink:c,canExpand:d,wPadding:z,hPadding:x,wrapSpace:A-k.outerHeight(!0),skinSpace:k.height()-h});!I&&l.autoHeight&&h>w&&h<q&&!d&&g.height("auto")},_getPosition:function(a){var c=b.current,d=b.getViewport(),e=c.margin,f=b.wrap.width()+e[1]+e[3],g=b.wrap.height()+e[0]+e[2],e={position:"absolute",
top:e[0],left:e[3]};c.autoCenter&&c.fixed&&!a&&g<=d.h&&f<=d.w?e.position="fixed":c.locked||(e.top+=d.y,e.left+=d.x);e.top=y(Math.max(e.top,e.top+(d.h-g)*c.topRatio));e.left=y(Math.max(e.left,e.left+(d.w-f)*c.leftRatio));return e},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(c){f(c.target).is("a")||
f(c.target).parent().is("a")||(c.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=
!1,b.play(!0)):b.play(!1))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,c=a.element,d=a.orig,e={},f=50,g=50,l=a.hPadding,h=a.wPadding,n=b.getViewport();!d&&a.isDom&&c.is(":visible")&&(d=c.find("img:first"),d.length||(d=c));v(d)?
(e=d.offset(),d.is("img")&&(f=d.outerWidth(),g=d.outerHeight())):(e.top=n.y+(n.h-g)*a.topRatio,e.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)e.top-=n.y,e.left-=n.x;return e={top:y(e.top-l*a.topRatio),left:y(e.left-h*a.leftRatio),width:y(f+h),height:y(g+l)}},step:function(a,c){var d,e,f=c.prop;e=b.current;var g=e.wrapSpace,l=e.skinSpace;if("width"===f||"height"===f)d=c.end===c.start?1:(a-c.start)/(c.end-c.start),b.isClosing&&(d=1-d),e="width"===f?e.wPadding:e.hPadding,
e=a-e,b.skin[f](m("width"===f?e:e-g*d)),b.inner[f](m("width"===f?e:e-g*d-l*d))},zoomIn:function(){var a=b.current,c=a.pos,d=a.openEffect,e="elastic"===d,k=f.extend({opacity:1},c);delete k.position;e?(c=this.getOrigPosition(),a.openOpacity&&(c.opacity=.1)):"fade"===d&&(c.opacity=.1);b.wrap.css(c).animate(k,{duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,c=a.closeEffect,d="elastic"===c,e={opacity:.1};d&&(e=this.getOrigPosition(),
a.closeOpacity&&(e.opacity=.1));b.wrap.animate(e,{duration:"none"===c?0:a.closeSpeed,easing:a.closeEasing,step:d?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,c=a.nextEffect,d=a.pos,e={opacity:1},f=b.direction,g;d.opacity=.1;"elastic"===c&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(d[g]=y(m(d[g])-200),e[g]="+=200px"):(d[g]=y(m(d[g])+200),e[g]="-=200px"));"none"===c?b._afterZoomIn():b.wrap.css(d).animate(e,{duration:a.nextSpeed,easing:a.nextEasing,
complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,c=a.prevEffect,d={opacity:.1},e=b.direction;"elastic"===c&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"=200px");a.wrap.animate(d,{duration:"none"===c?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!u,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var c;a=f.extend({},
this.defaults,a);this.overlay&&this.close();c=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(c&&c.length?c:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var c=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&
this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():c.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
K?(b=Math.max(J.documentElement.offsetWidth,J.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var d=this.overlay;f(".fancybox-overlay").stop(!0,!0);d||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*:not(object)").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
position:"bottom"},beforeShow:function(a){var c=b.current,d=c.title,e=a.type;f.isFunction(d)&&(d=d.call(c.element,c));if(r(d)&&""!==f.trim(d)){c=f('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+d+"</div>");switch(e){case "inside":e=b.skin;break;case "outside":e=b.wrap;break;case "over":e=b.inner;break;default:e=b.skin,c.appendTo("body"),K&&c.width(c.width()),c.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(c.css("margin-bottom")))}c["top"===a.position?"prependTo":
"appendTo"](e)}}};f.fn.fancybox=function(a){var c,d=f(this),e=this.selector||"",k=function(g){var l=f(this).blur(),h=c,k,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||l.is(".fancybox-wrap")||(k=a.groupAttr||"data-fancybox-group",m=l.attr(k),m||(k="rel",m=l.get(0)[k]),m&&""!==m&&"nofollow"!==m&&(l=e.length?f(e):d,l=l.filter("["+k+'="'+m+'"]'),h=l.index(this)),a.index=h,!1!==b.open(l,a)&&g.preventDefault())};a=a||{};c=a.index||0;e&&!1!==a.live?p.undelegate(e,"click.fb-start").delegate(e+":not('.fancybox-item, .fancybox-nav')",
"click.fb-start",k):d.unbind("click.fb-start").bind("click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,c;f.scrollbarWidth===x&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===x&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(t).width();L.addClass("fancybox-lock-test");c=f(t).width();L.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(c-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);


/* - ++resource++eea.pdf.js - */
// https://www.eea.europa.eu/portal_javascripts/++resource++eea.pdf.js?original=1
if(window.EEA===undefined){var EEA={who:'eea.pdf',version:'1.1'}}
EEA.Pdf=function(context,options){var self=this;self.context=context;self.settings={};if(options){jQuery.extend(self.settings,options)}
self.initialize()};EEA.Pdf.prototype={initialize: function(){var self=this;self.async=self.context.data('async');if(self.async){self.init_async()}},init_async: function(){var self=this;self.links=jQuery('body').find('a[href$="download.pdf"]');self.links.prepOverlay({subtype:'ajax',formselector:'form',filter:'.eea-pdf-download',cssclass:'eea-pdf-overlay'})}};EEA.PdfTool=function(context,options){var self=this;self.context=context;self.settings={};if(options){jQuery.extend(self.settings,options)}
self.initialize()};EEA.PdfTool.prototype={initialize: function(){var self=this;self.context.click(function(evt){evt.preventDefault();self.flush(jQuery(this))})},flush: function(btn){var url=btn.attr('href');var label_on=btn.data('on');var label_off=btn.data('off');btn.text(label_off);jQuery.getJSON(url,{}, function(data){btn.text(label_on)})}};jQuery.fn.EEAPdf=function(options){return this.each(function(){var context=jQuery(this);var adapter=new EEA.Pdf(context,options);context.data('EEAPdf',adapter)})};jQuery.fn.EEAPdfTool=function(options){return this.each(function(){var context=jQuery(this);var adapter=new EEA.PdfTool(context,options);context.data('EEAPdfTool',adapter)})};jQuery(document).ready(function($){var items=jQuery('.eea-pdf-viewlet');var $pdf_download_links,$body;if(!items.length){$body=$('body');$pdf_download_links=$body.find('a[href$="download.pdf"]');if($pdf_download_links.length){$body.data("async","true");items=$body}}
items.EEAPdf();items=jQuery('.eea-pdf-body').find('.flush');if(items.length){items.EEAPdfTool()}});

/* - pagination.js - */
// https://www.eea.europa.eu/portal_javascripts/pagination.js?original=1
(function($){$.PaginationCalculator=function(maxentries,opts){this.maxentries=maxentries;this.opts=opts};$.extend($.PaginationCalculator.prototype,{numPages:function(){return Math.ceil(this.maxentries/this.opts.items_per_page)},getInterval:function(current_page){var ne_half=Math.floor(this.opts.num_display_entries/2);var np=this.numPages();var upper_limit=np-this.opts.num_display_entries;var start=current_page>ne_half?Math.max(Math.min(current_page-ne_half,upper_limit),0):0;var end=current_page>ne_half?Math.min(current_page+ne_half+(this.opts.num_display_entries%2),np):Math.min(this.opts.num_display_entries,np);return{start:start,end:end}}});$.PaginationRenderers={};$.PaginationRenderers.defaultRenderer=function(maxentries,opts){this.maxentries=maxentries;this.opts=opts;this.pc=new $.PaginationCalculator(maxentries,opts)};$.extend($.PaginationRenderers.defaultRenderer.prototype,{createLink:function(page_id,current_page,appendopts){var lnk,np=this.pc.numPages();page_id=page_id<0?0:(page_id<np?page_id:np-1);appendopts=$.extend({text:page_id+1,classes:""},appendopts||{});if(page_id==current_page){lnk=$("<span class='current'>"+appendopts.text+"</span>")}
else{lnk=$("<a>"+appendopts.text+"</a>").attr('href',this.opts.link_to.replace(/__id__/,page_id))}
if(appendopts.classes){lnk.addClass(appendopts.classes)}
lnk.data('page_id',page_id);return lnk},appendRange:function(container,current_page,start,end,opts){var i;for(i=start;i<end;i++){this.createLink(i,current_page,opts).appendTo(container)}},getLinks:function(current_page,eventHandler){var begin,end,interval=this.pc.getInterval(current_page),np=this.pc.numPages(),fragment=$("<div class='pagination'></div>");if(this.opts.prev_text&&(current_page>0||this.opts.prev_show_always)){fragment.append(this.createLink(current_page-1,current_page,{text:"&laquo; "+this.opts.prev_text+" "+this.opts.items_per_page+" "+this.opts.items_text,classes:"listingPrevious"}))}
if(interval.start>0&&this.opts.num_edge_entries>0){end=Math.min(this.opts.num_edge_entries,interval.start);this.appendRange(fragment,current_page,0,end,{classes:'sp'});if(this.opts.num_edge_entries<interval.start&&this.opts.ellipse_text){$("<span>"+this.opts.ellipse_text+"</span>").appendTo(fragment)}}
this.appendRange(fragment,current_page,interval.start,interval.end);if(interval.end<np&&this.opts.num_edge_entries>0){if(np-this.opts.num_edge_entries>interval.end&&this.opts.ellipse_text){$("<span>"+this.opts.ellipse_text+"</span>").appendTo(fragment)}
begin=Math.max(np-this.opts.num_edge_entries,interval.end);this.appendRange(fragment,current_page,begin,np,{classes:'ep'})}
if(this.opts.next_text&&(current_page<np-1||this.opts.next_show_always)){fragment.append(this.createLink(current_page+1,current_page,{text:this.opts.next_text+" "+this.opts.items_per_page+" "+this.opts.items_text+" &raquo;",classes:"next"}))}
$('a',fragment).click(eventHandler);return fragment}});$.fn.pagination=function(maxentries,opts){opts=$.extend({items_per_page:10,num_display_entries:4,current_page:0,num_edge_entries:1,link_to:"#",prev_text:'previous',next_text:'next',items_text:'items',ellipse_text:"...",prev_show_always:false,next_show_always:false,renderer:"defaultRenderer",show_if_single_page:false,load_first_page:true,callback:function(){return false}},opts||{});var containers=this,renderer,links,current_page;
function paginationClickHandler(evt){var new_current_page=$(evt.target).data('page_id'),continuePropagation=selectPage(new_current_page);if(!continuePropagation){evt.stopPropagation()}
return continuePropagation}
function selectPage(new_current_page){containers.data('current_page',new_current_page);links=renderer.getLinks(new_current_page,paginationClickHandler);containers.empty();links.appendTo(containers);return opts.callback(new_current_page,containers)}
current_page=parseInt(opts.current_page,10);containers.data('current_page',current_page);maxentries=(!maxentries||maxentries<0)?1:maxentries;opts.items_per_page=(!opts.items_per_page||opts.items_per_page<0)?1:opts.items_per_page;if(!$.PaginationRenderers[opts.renderer]){throw new ReferenceError("Pagination renderer '"+opts.renderer+"' was not found in jQuery.PaginationRenderers object.")}
renderer=new $.PaginationRenderers[opts.renderer](maxentries,opts);var pc=new $.PaginationCalculator(maxentries,opts);var np=pc.numPages();containers.bind('setPage',{numPages:np}, function(evt,page_id){if(page_id>=0&&page_id<evt.data.numPages){selectPage(page_id)}
return false});containers.bind('prevPage', function(){var current_page=$(this).data('current_page');if(current_page>0){selectPage(current_page-1)}
return false});containers.bind('nextPage',{numPages:np}, function(evt){var current_page=$(this).data('current_page');if(current_page<evt.data.numPages-1){selectPage(current_page+1)}
return false});links=renderer.getLinks(current_page,paginationClickHandler);containers.empty();if(np>1||opts.show_if_single_page){links.appendTo(containers)}
if(opts.load_first_page){opts.callback(current_page,containers)}}}(jQuery));

/* - anchor.js - */
// https://www.eea.europa.eu/portal_javascripts/anchor.js?original=1
function AnchorJS(options){'use strict';var that=this;this.options=options||{};
function _addBaselineStyles(){if(document.head.querySelector('style.anchorjs')!==null){return}
var style=document.createElement('style'),linkRule=' .anchorjs-link {'+'   opacity: 0;'+'   text-decoration: none;'+'   -webkit-font-smoothing: antialiased;'+'   -moz-osx-font-smoothing: grayscale;'+' }',hoverRule=' *:hover > .anchorjs-link,'+' .anchorjs-link:focus  {'+'   opacity: 1;'+' }',anchorjsLinkFontFace=' @font-face {'+'   font-family: "anchorjs-icons";'+'   font-style: normal;'+'   font-weight: normal;'+'   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype");'+' }',pseudoElContent=' [data-anchorjs-icon]::after {'+'   content: attr(data-anchorjs-icon);'+' }',firstStyleEl;style.className='anchorjs';style.appendChild(document.createTextNode(''));firstStyleEl=document.head.querySelector('[rel="stylesheet"], style');if(firstStyleEl===undefined){document.head.appendChild(style)} else{document.head.insertBefore(style,firstStyleEl)}
style.sheet.insertRule(linkRule,style.sheet.cssRules.length);style.sheet.insertRule(hoverRule,style.sheet.cssRules.length);style.sheet.insertRule(pseudoElContent,style.sheet.cssRules.length);style.sheet.insertRule(anchorjsLinkFontFace,style.sheet.cssRules.length)}
function _applyRemainingDefaultOptions(opts){that.options.icon=that.options.hasOwnProperty('icon')?opts.icon:'\ue9cb';that.options.visible=that.options.hasOwnProperty('visible')?opts.visible:'hover';that.options.placement=that.options.hasOwnProperty('placement')?opts.placement:'right';that.options.class=that.options.hasOwnProperty('class')?opts.class:'';that.options.truncate=that.options.hasOwnProperty('truncate')?Math.floor(opts.truncate):64}
_applyRemainingDefaultOptions(options);this.add=function(selector){var elements,elsWithIds,idList,elementID,i,index,count,tidyText,newTidyText,readableID,anchor;_applyRemainingDefaultOptions(this.options);if(!selector){selector='h1, h2, h3, h4, h5, h6'} else if(typeof selector!=='string'){throw new Error('The selector provided to AnchorJS was invalid.')}
elements=document.querySelectorAll(selector);if(elements.length===0){return false}
_addBaselineStyles();elsWithIds=document.querySelectorAll('[id]');idList=[].map.call(elsWithIds, function assign(el){return el.id});for(i=0;i<elements.length;i++){if(elements[i].hasAttribute('class')&&elements[i].className.indexOf('no-anchor')!==-1){continue}
if(elements[i].hasAttribute('id')){elementID=elements[i].getAttribute('id')} else{tidyText=this.urlify(elements[i].textContent);newTidyText=tidyText;count=0;do{if(index!==undefined){newTidyText=tidyText+'-'+count}
index=idList.indexOf(newTidyText);count+=1} while(index!==-1);index=undefined;idList.push(newTidyText);elements[i].setAttribute('id',newTidyText);elementID=newTidyText}
readableID=elementID.replace(/-/g,' ');anchor=document.createElement('a');anchor.className='anchorjs-link '+this.options.class;anchor.href='#'+elementID;anchor.setAttribute('aria-label','Anchor link for: '+readableID);anchor.setAttribute('data-anchorjs-icon',this.options.icon);if(this.options.visible==='always'){anchor.style.opacity='1'}
if(this.options.icon==='\ue9cb'){anchor.style.fontFamily='anchorjs-icons';anchor.style.fontStyle='normal';anchor.style.fontVariant='normal';anchor.style.fontWeight='normal';anchor.style.lineHeight=1;if(this.options.placement==='left'){anchor.style.lineHeight='inherit'}}
if(this.options.placement==='left'){anchor.style.position='absolute';anchor.style.marginLeft='-1em';anchor.style.paddingRight='0.5em';elements[i].insertBefore(anchor,elements[i].firstChild)} else{anchor.style.paddingLeft='0.375em';elements[i].appendChild(anchor)}}
return this};this.remove=function(selector){var domAnchor,elements=document.querySelectorAll(selector);for(var i=0;i<elements.length;i++){domAnchor=elements[i].querySelector('.anchorjs-link');if(domAnchor){elements[i].removeChild(domAnchor)}}
return this};this.urlify=function(text){var nonsafeChars=/[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g,urlText;if(!this.options.truncate){_applyRemainingDefaultOptions(this.options)}
urlText=text.replace(/\'/gi, '').replace(nonsafeChars,'-').replace(/-{2,}/g,'-').substring(0,this.options.truncate).replace(/^-+|-+$/gm,'').toLowerCase();return urlText}}
var anchors=new AnchorJS();

/* - eea-responsive.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-responsive.js?original=1
jQuery(document).ready(function($){if(!window.EEA){window.EEA={}}
var $body=$("body");window.EEA.isPrintPdf=$body.hasClass("body-print");var underscore=window._;var throttle=window.underscore?window.underscore.throttle: function(t,e){var n;return function(){var i,o=this,r=arguments;n||((i=function(){(n=null),t.apply(o,r)}),(n=window.setTimeout(i,e)))}};var $tabbed_menu;var tabbed_menu_found=false;var $eea_tabs_with_arrows=$(".eea-tabs-arrows"),eea_tabs_with_arrows_found=$eea_tabs_with_arrows.length,no_transform_pattern=".eea-tabs-soer";
function escapeRegExp(string){return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}
function replaceAll(string,find,replace){return string.replace(new RegExp(escapeRegExp(find),"g"),replace)}
function make_tabs_into_accordions($tab,$tabs_panel){if(!$tabs_panel.length||!$tab.not(no_transform_pattern).length){return}
var css=$tabs_panel.attr("class");if(css){css=replaceAll(css,"eea-tabs-panels","eea-accordion-panels");css=tabbed_menu_found?replaceAll(css,"tabbedmenu-panel","eea-accordion-panels tabbed-accordion-menu"):css;$tabs_panel.attr("class",css)}
$tabs_panel.addClass("eea-accordion-panels-plain collapsed-by-default eea-tabs-transformed");var $tabs_panels=$tabs_panel.find(".eea-tabs-panel");var $tabs_tabs=$tab.find("li");$("#topic-selector").hide();$tabs_tabs.each(function(idx,el){var $panel=$tabs_panels.eq(idx);var $el=$(el);var link=$el.find("a")[0];$panel.attr("class","eea-accordion-panel");if(!$panel.find(".pane").length){$panel.wrapInner("<div class='pane' />")}
var $pane=$panel.find('.pane');$panel.find(".filter-topic").hide();$panel.show();var $accordion_title=$panel.find(".eea-accordion-title");var link_is_current=link.className.indexOf("current")!==-1;if($accordion_title.length){$accordion_title.show();if(link_is_current){$accordion_title.click();$pane.show()}
else{$pane.hide()}
return}
var $result=$("<h2 />",{class:link&&link.className.indexOf("current")!==-1?"eea-accordion-title current no-anchor":"eea-accordion-title no-anchor",id:link?link.id+"-accordion":"",html:link.innerHTML||el.innerHTML});$result.append('<span class="eea-icon eea-icon-left"></span>');$result.prependTo($panel)});$tab.addClass("js-eea-tabs-to-hide hidden");if(window.EEA&&window.EEA.eea_accordion){window.EEA.eea_accordion($tabs_panel)}}
function make_accordions_into_tabs($tab){var $tabs_accordion=$tab.parent().find(".eea-tabs-transformed");if(!$tabs_accordion.length||!$tab.not(no_transform_pattern).length){return}
$tabs_accordion.each(function(idx,item){var $item=$(item);var css=$item.attr("class");if(css){css=tabbed_menu_found?replaceAll(css,"eea-accordion-panels tabbed-accordion-menu","tabbedmenu-panel"):css;css=replaceAll(css,"eea-accordion-panels","eea-tabs-panels");$item.attr("class",css)}
$item.removeClass("collapsed-by-default eea-tabs-transformed");var $tabs_accordions=$item.find(".eea-accordion-panel");$("#topic-selector").show();$tabs_accordions.each(function(idx,panel){var $panel=$(panel);$panel.find(".filter-topic").show();var $parent=$panel.closest(".eea-tabs-panels");var $tabs=$parent.hasClass("eea-tabs-panels-soer")?$(".eea-tabs-soer"):$panel.parent().prev();$panel.attr("class","eea-tabs-panel");$panel.find(".eea-accordion-title").hide();$panel.find(".pane").show();if($("h2.current",$panel).length){$tabs.find("a").removeClass("current").eq(idx).addClass("current");$panel.show()} else{$panel.hide()}})});$tabs_accordion.prev().removeClass("hidden")}
var $buttonnavbar=$("button.navbar-toggle");var $soer_tabs=$(".eea-tabs-soer"),soer_tabs_found=$soer_tabs.length;if(underscore&&underscore.debounce){$(window).resize(_.debounce(function(){var $tabs=$(".eea-tabs").not(no_transform_pattern);var tabs_found=$tabs.length;$(window).trigger("eea_debounced_resize");if($buttonnavbar.css("display")!=="none"){if(tabs_found){$tabs.each(function(idx,tab){var $tab=$(tab);var $tab_panels=$tab.next(".eea-tabs-panels");var tabs_multiple_lines=false;$tab_panels=$tab_panels.length?$tab_panels:$tab.parent().find(".eea-tabs-panels");var tabs_first_offset=0;if($tab.hasClass("hidden")){$tab.removeClass("hidden")}
$tab.find("li").each(function(idx,el){if(idx===0){tabs_first_offset=el.offsetTop}
if(el.offsetTop!==tabs_first_offset){tabs_multiple_lines=true;return false}});if(tabs_multiple_lines){if(!$tab.parent().find(".eea-tabs-transformed").length){make_tabs_into_accordions($tab,$tab_panels)}
else{$tab.addClass("hidden")}} else{if($tab.parent().find(".eea-tabs-transformed").length){make_accordions_into_tabs($tab)}}})}
if(tabbed_menu_found){make_tabs_into_accordions($tabbed_menu.find("ul"),$(".tabbedmenu-panel"))}
if(eea_tabs_with_arrows_found){make_tabs_into_accordions($eea_tabs_with_arrows,$(".eea-tabs-panels-arrows"))}
if(soer_tabs_found){make_tabs_into_accordions($soer_tabs,$(".eea-tabs-panels-soer"))}} else{$tabs.each(function(idx,tab){var $tab=$(tab);var $tab_panels=$tab.next(".eea-tabs-panels");var tabs_multiple_lines=false;$tab_panels=$tab_panels.length?$tab_panels:$tab.parent().find(".eea-tabs-panels");var tabs_first_offset=0;if($tab.hasClass("hidden")){$tab.removeClass("hidden")}
$tab.find("li").each(function(idx,el){if(idx===0){tabs_first_offset=el.offsetTop}
if(el.offsetTop!==tabs_first_offset){tabs_multiple_lines=true;return false}});if(tabs_multiple_lines){if($tab.parent().attr("id")==="relatedItems"&&window.innerWidth>1279&&$body.hasClass('mini-header')){if($tab.parent().find(".eea-tabs-transformed").length){make_accordions_into_tabs($tab)}}
else{$tab.addClass("hidden");if(!$tab.parent().find(".eea-tabs-transformed").length){make_tabs_into_accordions($tab,$tab_panels)}}} else{if($tab.parent().find(".eea-tabs-transformed").length){make_accordions_into_tabs($tab)}}})}},500))}
$(window).trigger("resize");var $navbar_header=$(".navbar-header");var $portal_logo_link=$("#portal-logo-link");if(!$navbar_header.children("#portal-logo-link-header").length){$portal_logo_link.clone().attr("id","portal-logo-link-header").prependTo($navbar_header)}
var $faceted_left_column=$("#faceted-left-column").addClass("eea-accordion-panels collapsed-by-default non-exclusive");var $faceted_right_column=$("#faceted-right-column").addClass("eea-accordion-panels collapsed-by-default non-exclusive");$faceted_left_column.find(".faceted-widget").addClass("widget-fieldset").appendTo($faceted_right_column);$faceted_right_column.find(".faceted-widget").addClass("widget-fieldset").each(function(idx,el){var $el=$(el);$el.addClass("eea-accordion-panel");var $children=$el.wrapInner("<div class='pane' />");var $legend=$children.find("legend");var $h2=$("<h2 />",{html:$legend.text(),class:"eea-accordion-title eea-icon-left-container no-anchor"});$h2.prependTo($el)});window.setTimeout(function(){$(".eea-right-section-slider").find(".eea-icon").removeClass("animated")},5000);$("#right-area").addClass("eea-section eea-right-section");var $faceted_text_widget=$(".faceted-text-widget");$("<div class='faceted-textwidget-place-current'><a href='#' class='eea-faceted-filter eea-section-trigger eea-section-trigger-right'>Filter Â»</a></div>").appendTo($faceted_text_widget.find("form"));$(".eea-section-trigger").click(function(e){e.preventDefault();var section=e.target.className.indexOf("trigger-right")?".eea-right-section":".eea-left-section";$(section).prev().click()});
function swipeHandler(ev){var left_direction=ev.swipestart.coords[0]>ev.swipestop.coords[0];var $faceted_slider=$(".eea-right-section-slider"),faceted_slider_is_active=$faceted_slider.hasClass("eea-right-section-slider-active"),slider_length=$faceted_slider.length;if(slider_length){if((left_direction&&faceted_slider_is_active)||(!left_direction&&!faceted_slider_is_active)){return}
var time=ev.swipestop.time-ev.swipestart.time;$faceted_slider.removeClass("is-eea-hidden");$(window).scroll();if(window.navigator.userAgent.indexOf("iPhone")!==-1){if(time>60){return}} else{if(time>150){return}}
$faceted_slider.find(".eea-icon").click()}}
$(window).bind("swipe",swipeHandler);var mqOrientation=window.matchMedia&&window.matchMedia("(orientation: portrait)");if(!mqOrientation){return}
var $gis_application=$(".portaltype-gis-application");var $gis_iframe,gis_iframe_resize;if($gis_application){$gis_iframe=$gis_application.find("iframe");if($gis_iframe){gis_iframe_resize=function(){var window_height=$(window).height();if($gis_iframe.height()!==window_height){$gis_iframe.css("height",window_height-50)}};gis_iframe_resize();mqOrientation.addListener(function(){gis_iframe_resize()})}}
var $parent=$("#js-siteaction-panels");var make_siteaction_panel=function($content,$parent,panel_id,use_only_children){var $panel=$("<div class='panel' id='"+panel_id+"'>"+"<div class='panel-top'></div>"+"<div class='panel-content shadow'>"+"</div>");var $clone=$content.clone();if(use_only_children){$clone=$clone.children();$content.remove()}
$clone.appendTo($panel.find(".panel-content"));$panel.appendTo($parent)};make_siteaction_panel($("#portal-personaltools"),$parent,"tip-siteaction-user-menu",true);var $holder=$("<div class='eea-accordion-panels collapsed-by-default non-exclusive' />");
function turn_cross_panels_into_accordions($el,$holder){var lists=$el.find(".eea-siteaction");lists.each(function(idx,el){var $acordion_panel=$("<div  />",{id:"eap-"+el.id,class:"eea-accordion-panel"});var $el=$(el);var $old_panel=$("#tip-"+el.id);var $panel=$("<div />",{class:"pane",html:$old_panel.find(".panel-content").html()});var $result=$("<h2 />",{class:"eea-icon-right-container no-anchor",html:$el.find("a").attr("title")});$result.append('<span class="eea-icon eea-icon-right"></span>');$result.appendTo($acordion_panel);$panel.appendTo($acordion_panel);$acordion_panel.appendTo($holder)})}
var $secondary_portaltabs_modified=$("#secondary-portaltabs");if(!$secondary_portaltabs_modified.find(".eea-accordion-panels").length){$holder.prependTo($secondary_portaltabs_modified);(function(){var $cross_site_top_panels=$($secondary_portaltabs_modified);$cross_site_top_panels.each(function(idx,el){var $el=$(el);turn_cross_panels_into_accordions($el,$holder)})})()}
var $right_section_container=$(".eea-right-section");if($right_section_container.length){(function insert_section(){$right_section_container.each(function(idx,el){var $el=$(el),$right_section_slider=$el.prev();if(!$right_section_slider.hasClass("eea-right-section-slider")){$right_section_slider=$('<div class="eea-section eea-right-section-slider eea-scrolling-toggle-visibility"><span class="eea-icon eea-icon-5x eea-icon-caret-left eea-icon-anim-horizontal animated"></span></div>');$right_section_slider.insertBefore($el)}
$right_section_slider.click(function(){var $this=$(this);$this.toggleClass("eea-right-section-slider-active").next().toggleClass("eea-right-section-active eea-scrolling-keep-visible");$this.removeClass("is-eea-hidden");if($this.hasClass("eea-right-section-slider-active")){document.body.style.overflow="hidden";document.body.style.position="fixed"} else{if(document.body.style.overflow==="hidden"){document.body.style.overflow="auto";document.body.style.position="relative"}}})})})()}
if($("#eea-above-columns").find("#portal-breadcrumbs").length){$("#header-holder").find(".navbar").addClass("hideShadow")}
$(".navbar-toggle").click(function(ev){ev.stopImmediatePropagation();$(this).toggleClass("collapsed");$(".navbar-collapse").toggleClass("in")});var mobile_desktop=false;var window_height=window.outerHeight||window.innerHeight;if((window.innerWidth<768&&window_height>768)||(window.innerWidth>768&&window_height<601)){mobile_desktop=true}
window.eea_mobile_desktop_browser_resolution=mobile_desktop;if(window_height>=600&&window.innerWidth>767&&!mobile_desktop){return}
window.eea_mobile_resolution=true;var lastScrollTop=0;var $header_holder=$("#header-holder");var $navbar=$header_holder.find(".navbar");$navbar.addClass("eea-scrolling-toggle-visibility");var multiple_touch=false;var navbar_content=$header_holder.find(".navbar-collapse")[0];
function TouchMove(ev){var e=ev.originalEvent;multiple_touch=e.touches.length>1}
var lazyTouchMove=throttle(TouchMove,90);$(window).bind("touchmove",lazyTouchMove);var $document=$(document);var win_height=window.innerHeight;
function navScroll(ev){var doc_height=$document.height();if(window.scrollY+win_height>=doc_height){return}
var targetScrollY=ev.currentTarget.scrollY;if(multiple_touch||targetScrollY<=0||targetScrollY>=doc_height){return}
var faceted=document.querySelectorAll(".faceted-results")[0];if(faceted&&faceted.style.opacity){return}
if($buttonnavbar.css("display")==="none"){return}
var $keep_visible=$(".eea-scrolling-keep-visible");var $items=$(".eea-scrolling-toggle-visibility");var st=$(this).scrollTop();if(st>lastScrollTop){$items.each(function(idx,el){if(el.className.indexOf("is-eea-hidden")===-1&&navbar_content.className.indexOf("in")===-1){if(!$keep_visible.length){el.className+=" is-eea-hidden"}}})} else{$items.each(function(idx,el){if(el.className.indexOf("is-eea-hidden")!==-1){el.className=el.className.substr(0,el.className.length-14)}})}
lastScrollTop=st}
var lazyNavScroll=throttle(navScroll,100);$(window).scroll(lazyNavScroll)});

/* - ++resource++eea.jquery.screentimeanalytics.js - */
/*global jQuery window document ga _paq setTimeout*/

/*!
 * visibly - v0.7 Page Visibility API Polyfill
 * https://github.com/addyosmani
 * Copyright (c) 2011-2014 Addy Osmani
 * Dual licensed under the MIT and GPL licenses.
 *
 * Methods supported:
 * visibly.onVisible(callback)
 * visibly.onHidden(callback)
 * visibly.hidden()
 * visibly.visibilityState()
 * visibly.visibilitychange(callback(state));
 */

// Matomo support
var _paq = _paq || [];

(function () {

    window.visibly = {
        q: document,
        p: undefined,
        prefixes: ['webkit', 'ms', 'o', 'moz', 'khtml'],
        props: ['VisibilityState', 'visibilitychange', 'Hidden'],
        m: ['focus', 'blur'],
        visibleCallbacks: [],
        hiddenCallbacks: [],
        genericCallbacks: [],
        _callbacks: [],
        cachedPrefix: "",
        fn: null,

        onVisible: function (_callback) {
            if (typeof _callback == 'function') {
                this.visibleCallbacks.push(_callback);
            }
        },
        onHidden: function (_callback) {
            if (typeof _callback == 'function') {
                this.hiddenCallbacks.push(_callback);
            }
        },
        getPrefix: function () {
            if (!this.cachedPrefix) {
                for (var l = 0, b; b = this.prefixes[l++];) {
                    if (b + this.props[2] in this.q) {
                        this.cachedPrefix = b;
                        return this.cachedPrefix;
                    }
                }
            }
        },

        visibilityState: function () {
            return this._getProp(0);
        },
        hidden: function () {
            return this._getProp(2);
        },
        visibilitychange: function (fn) {
            if (typeof fn == 'function') {
                this.genericCallbacks.push(fn);
            }

            var n = this.genericCallbacks.length;
            if (n) {
                if (this.cachedPrefix) {
                    while (n--) {
                        this.genericCallbacks[n].call(this, this.visibilityState());
                    }
                } else {
                    while (n--) {
                        this.genericCallbacks[n].call(this, arguments[0]);
                    }
                }
            }

        },
        isSupported: function (index) {
            return ((this._getPropName(2)) in this.q);
        },
        _getPropName: function (index) {
            return (this.cachedPrefix == "" ? this.props[index].substring(0, 1).toLowerCase() + this.props[index].substring(1) : this.cachedPrefix + this.props[index]);
        },
        _getProp: function (index) {
            return this.q[this._getPropName(index)];
        },
        _execute: function (index) {
            if (index) {
                this._callbacks = (index == 1) ? this.visibleCallbacks : this.hiddenCallbacks;
                var n = this._callbacks.length;
                while (n--) {
                    this._callbacks[n]();
                }
            }
        },
        _visible: function () {
            window.visibly._execute(1);
            window.visibly.visibilitychange.call(window.visibly, 'visible');
        },
        _hidden: function () {
            window.visibly._execute(2);
            window.visibly.visibilitychange.call(window.visibly, 'hidden');
        },
        _nativeSwitch: function () {
            this[this._getProp(2) ? '_hidden' : '_visible']();
        },
        _listen: function () {
            try { /*if no native page visibility support found..*/
                if (!(this.isSupported())) {
                    if (this.q.addEventListener) { /*for browsers without focusin/out support eg. firefox, opera use focus/blur*/
                        window.addEventListener(this.m[0], this._visible, 1);
                        window.addEventListener(this.m[1], this._hidden, 1);
                    } else { /*IE <10s most reliable focus events are onfocusin/onfocusout*/
                        if (this.q.attachEvent) {
                            this.q.attachEvent('onfocusin', this._visible);
                            this.q.attachEvent('onfocusout', this._hidden);
                        }
                    }
                } else { /*switch support based on prefix detected earlier*/
                    this.q.addEventListener(this._getPropName(1), function () {
                        window.visibly._nativeSwitch.apply(window.visibly, arguments);
                    }, 1);
                }
            } catch (e) { }
        },
        init: function () {
            this.getPrefix();
            this._listen();
        }
    };

    this.visibly.init();
})();



// TextStatistics.js
// Christopher Giffard (2012)
// 1:1 API Fork of TextStatistics.php by Dave Child (Thanks mate!)
// https://github.com/DaveChild/Text-Statistics


(function (glob) {

    function cleanText(text) {
        // all these tags should be preceeded by a full stop.
        var fullStopTags = ['li', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'dd'];

        fullStopTags.forEach(function (tag) {
            text = text.replace("</" + tag + ">", ".");
        });

        text = text.replace(/<[^>]+>/g, "") // Strip tags
            .replace(/[,:;()\/&+]|\-\-/g, " ") // Replace commas, hyphens etc (count them as spaces)
            .replace(/[\.!?]/g, ".") // Unify terminators
            .replace(/^\s+/, "") // Strip leading whitespace
            .replace(/[\.]?(\w+)[\.]?(\w+)@(\w+)[\.](\w+)[\.]?/g, "$1$2@$3$4") // strip periods in email addresses (so they remain counted as one word)
            .replace(/[ ]*(\n|\r\n|\r)[ ]*/g, ".") // Replace new lines with periods
            .replace(/([\.])[\.]+/g, ".") // Check for duplicated terminators
            .replace(/[ ]*([\.])/g, ". ") // Pad sentence terminators
            .replace(/\s+/g, " ") // Remove multiple spaces
            .replace(/\s+$/, ""); // Strip trailing whitespace

        if (text.slice(-1) != '.') {
            text += "."; // Add final terminator, just in case it's missing.
        }
        return text;
    }

    var TextStatistics = function TextStatistics(text) {
        this.text = text ? cleanText(text) : "";
    };

    TextStatistics.prototype.fleschKincaidReadingEase = function (text) {
        text = text ? cleanText(text) : this.text;
        return Math.round((206.835 - (1.015 * this.averageWordsPerSentence(text)) - (84.6 * this.averageSyllablesPerWord(text))) * 10) / 10;
    };

    TextStatistics.prototype.fleschKincaidGradeLevel = function (text) {
        text = text ? cleanText(text) : this.text;
        return Math.round(((0.39 * this.averageWordsPerSentence(text)) + (11.8 * this.averageSyllablesPerWord(text)) - 15.59) * 10) / 10;
    };

    TextStatistics.prototype.gunningFogScore = function (text) {
        text = text ? cleanText(text) : this.text;
        return Math.round(((this.averageWordsPerSentence(text) + this.percentageWordsWithThreeSyllables(text, false)) * 0.4) * 10) / 10;
    };

    TextStatistics.prototype.colemanLiauIndex = function (text) {
        text = text ? cleanText(text) : this.text;
        return Math.round(((5.89 * (this.letterCount(text) / this.wordCount(text))) - (0.3 * (this.sentenceCount(text) / this.wordCount(text))) - 15.8) * 10) / 10;
    };

    TextStatistics.prototype.smogIndex = function (text) {
        text = text ? cleanText(text) : this.text;
        return Math.round(1.043 * Math.sqrt((this.wordsWithThreeSyllables(text) * (30 / this.sentenceCount(text))) + 3.1291) * 10) / 10;
    };

    TextStatistics.prototype.automatedReadabilityIndex = function (text) {
        text = text ? cleanText(text) : this.text;
        return Math.round(((4.71 * (this.letterCount(text) / this.wordCount(text))) + (0.5 * (this.wordCount(text) / this.sentenceCount(text))) - 21.43) * 10) / 10;
    };

    TextStatistics.prototype.textLength = function (text) {
        text = text ? cleanText(text) : this.text;
        return text.length;
    };

    TextStatistics.prototype.letterCount = function (text) {
        text = text ? cleanText(text) : this.text;
        text = text.replace(/[^a-z]+/ig, "");
        return text.length;
    };

    TextStatistics.prototype.sentenceCount = function (text) {
        text = text ? cleanText(text) : this.text;

        // Will be tripped up by "Mr." or "U.K.". Not a major concern at this point.
        return text.replace(/[^\.!?]/g, '').length || 1;
    };

    TextStatistics.prototype.wordCount = function (text) {
        text = text ? cleanText(text) : this.text;
        return text.split(/[^a-z0-9\'@\.\-]+/i).length || 1;
    };

    TextStatistics.prototype.averageWordsPerSentence = function (text) {
        text = text ? cleanText(text) : this.text;
        return this.wordCount(text) / this.sentenceCount(text);
    };

    TextStatistics.prototype.averageCharactersPerWord = function (text) {
        var txt = text ? this.cleanText(text) : this.text;
        return this.letterCount(txt) / this.wordCount(txt);
    };

    TextStatistics.prototype.averageSyllablesPerWord = function (text) {
        text = text ? cleanText(text) : this.text;
        var syllableCount = 0,
            wordCount = this.wordCount(text),
            self = this;

        text.split(/\s+/).forEach(function (word) {
            syllableCount += self.syllableCount(word);
        });

        // Prevent NaN...
        return (syllableCount || 1) / (wordCount || 1);
    };

    TextStatistics.prototype.wordsWithThreeSyllables = function (text, countProperNouns) {
        text = text ? cleanText(text) : this.text;
        var longWordCount = 0,
            self = this;

        countProperNouns = countProperNouns === false ? false : true;

        text.split(/\s+/).forEach(function (word) {

            // We don't count proper nouns or capitalised words if the countProperNouns attribute is set.
            // Defaults to true.
            if (!word.match(/^[A-Z]/) || countProperNouns) {
                if (self.syllableCount(word) > 2) {
                    longWordCount++;
                }
            }
        });

        return longWordCount;
    };

    TextStatistics.prototype.percentageWordsWithThreeSyllables = function (text, countProperNouns) {
        text = text ? cleanText(text) : this.text;

        return (this.wordsWithThreeSyllables(text, countProperNouns) / this.wordCount(text)) * 100;
    };

    TextStatistics.prototype.syllableCount = function (word) {
        var syllableCount = 0,
            prefixSuffixCount = 0,
            wordPartCount = 0;

        // Prepare word - make lower case and remove non-word characters
        word = word.toLowerCase().replace(/[^a-z]/g, "");

        // Specific common exceptions that don't follow the rule set below are handled individually
        // Array of problem words (with word as key, syllable count as value)
        var problemWords = {
            "simile": 3,
            "forever": 3,
            "shoreline": 2
        };

        // Return if we've hit one of those...
        if (problemWords.hasOwnProperty(word)) {
            return problemWords[word];
        }

        // These syllables would be counted as two but should be one
        var subSyllables = [/cial/, /tia/, /cius/, /cious/, /giu/, /ion/, /iou/, /sia$/, /[^aeiuoyt]{2,}ed$/, /.ely$/, /[cg]h?e[rsd]?$/, /rved?$/, /[aeiouy][dt]es?$/, /[aeiouy][^aeiouydt]e[rsd]?$/, /^[dr]e[aeiou][^aeiou]+$/, // Sorts out deal, deign etc
            /[aeiouy]rse$/ // Purse, hearse
        ];

        // These syllables would be counted as one but should be two
        var addSyllables = [/ia/, /riet/, /dien/, /iu/, /io/, /ii/, /[aeiouym]bl$/, /[aeiou]{3}/, /^mc/, /ism$/, /([^aeiouy])\1l$/, /[^l]lien/, /^coa[dglx]./, /[^gq]ua[^auieo]/, /dnt$/, /uity$/, /ie(r|st)$/];

        // Single syllable prefixes and suffixes
        var prefixSuffix = [/^un/, /^fore/, /ly$/, /less$/, /ful$/, /ers?$/, /ings?$/];

        // Remove prefixes and suffixes and count how many were taken
        prefixSuffix.forEach(function (regex) {
            if (word.match(regex)) {
                word = word.replace(regex, "");
                prefixSuffixCount++;
            }
        });

        wordPartCount = word.split(/[^aeiouy]+/ig)
            .filter(function (wordPart) {
                return !!wordPart.replace(/\s+/ig, "").length;
            })
            .length;

        // Get preliminary syllable count...
        syllableCount = wordPartCount + prefixSuffixCount;

        // Some syllables do not follow normal rules - check for them
        subSyllables.forEach(function (syllable) {
            if (word.match(syllable)) {
                syllableCount--;
            }
        });

        addSyllables.forEach(function (syllable) {
            if (word.match(syllable)) {
                syllableCount++;
            }
        });

        return syllableCount || 1;
    };

    function textStatistics(text) {
        return new TextStatistics(text);
    }

    (typeof module != "undefined" && module.exports) ? (module.exports = textStatistics) : (typeof define != "undefined" ? (define("textstatistics", [], function () {
        return textStatistics;
    })) : (glob.textstatistics = textStatistics));
})(this);

// Plugin definition.
// portions of google analytics code inspired from
// http://cutroni.com/blog/2014/02/12/advanced-content-tracking-with-universal-analytics/
(function ($, window, document, undefined) {
    "use strict";

    var throttle = window.underscore ? window.underscore.throttle : function (t, e) {
        var n;
        return function () {
            var i, o = this, r = arguments;
            n || (i = function () {
                n = null,
                    t.apply(o, r);
            },
                n = window.setTimeout(i, e));
        };
    };

    var capitalize = function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    $.fn.screentimeAnalytics = function (options) {
        var opts = $.extend({}, $.fn.screentimeAnalytics.defaults, options);
        // Our plugin implementation code goes here.

        var looker, content_looker;
        var started;
        var timers = { beginning: 0, content_bottom: 0, page_bottom: 0 };
        var counter = { content: 0 };
        var content_core = this[0];
        if (!content_core) {
            return;
        }
        var minReadTime = window.parseInt(Math.round(window.textstatistics(
            content_core.innerText).wordCount() / opts.avgWPM), 10) * 60;
        var start_obj_metrics = {}, content_obj_metrics = {}, page_obj_metrics = {};
        var reached_content_bottom = opts.metrics['reached_content_bottom'];
        var content_bottom = opts.metrics['content_bottom'];
        var reached_page_bottom = opts.metrics['reached_page_bottom'];
        var page_bottom = opts.metrics['page_bottom'];

        // Set some flags for tracking & execution
        var timer;
        var scroller;
        var endContent;
        var didComplete;
        var ptype;
        var sentPageTrack;
        // Get some information about the current page
        if (!opts.ptype) {
            ptype = $('body').attr('class').match('portaltype-[a-z-]*');
            var ptype_length;
            if (ptype) {
                ptype = ptype[0].split('-');
                ptype_length = ptype.length;
                ptype = ptype_length === 2 ? capitalize(ptype[1]) :
                    capitalize(ptype[1]) + ' ' + capitalize(ptype[2]);
            }
            else {
                ptype = 'Article';
            }
        }

        var incrementTimeSpent = function incrementTimeSpent() {
            $.each(timers, function (key, val) {
                timers[key] = val + 1;
            });

        };
        var startTimers = function startTimers() {
            if (!started) {
                incrementTimeSpent();
                started = true;
            }
            looker = window.setInterval(function () {
                incrementTimeSpent();
            }, 1000);
        };

        // viewport and onScreen functionality taken from
        // https://github.com/robflaherty/screentime/blob/master/screentime.js
        function Viewport() {
            this.top = $window.scrollTop();
            this.height = $window.height();
            this.bottom = this.top + this.height;
            this.width = $window.width();
        }

        function Field(elem) {
            var $elem = $(elem);
            this.top = $elem.offset().top;
            this.height = $elem.height();
            this.bottom = this.top + this.height;
            this.width = $elem.width();
        }

        function onScreen(viewport, field) {
            var cond, buffered, partialView;

            // Field entirely within viewport
            if ((field.bottom <= viewport.bottom) && (field.top >= viewport.top)) {
                return true;
            }

            // Field bigger than viewport
            if (field.height > viewport.height) {

                cond = (viewport.bottom - field.top) > (viewport.height / 2) && (field.bottom - viewport.top) > (viewport.height / 2);

                if (cond) {
                    return true;
                }

            }

            // Partially in view
            buffered = (field.height * (opts.percentOnScreen / 100));
            partialView = ((viewport.bottom - buffered) >= field.top && (field.bottom - buffered) > viewport.top);

            return partialView;
        }

        function checkViewport() {
            var viewport = new Viewport();
            var field = new Field(content_core);
            if (onScreen(viewport, field)) {
                counter['content'] += 1;
            }
        }

        var startContentReading = function startTimers() {
            if (!started) {
                checkViewport();
                started = true;
            }
            content_looker = window.setInterval(function () {
                checkViewport();
            }, 1000);
        };

        var stopTimers = function stopTimers() {
            window.clearInterval(looker);
            looker = null;
        };

        var stopContentReading = function startTimers() {
            window.clearInterval(content_looker);
            content_looker = null;
        };
        var $window = $(window);
        var $document = $(document);

        $window.one("scroll", function () {
            // Set some time variables to calculate reading time
            if (!started) {
                startTimers();
                startContentReading();
            }

            // Track the article load
            if (!opts.debug) {
                if (window.ga) {
                    ga('send', 'event', 'Reading', '1 Page Loaded', ptype, { 'nonInteraction': 1 });
                }
                _paq.push(['trackEvent', 'Reading', 'load', ptype, 1]);
            } else {
                window.console.log('The page has loaded.');
            }

            // Check the location and track user
            var timeToScroll, totalTime, timeToContentEnd;

            function trackLocation() {
                var scrollTop = $window.scrollTop();
                var bottom = Math.round($window.height() + scrollTop);
                var height = $document.height();

                // If user starts to scroll send an event
                if (scrollTop > opts.readerLocation && !scroller) {
                    timeToScroll = timers['beginning'];

                    if (!opts.debug) {
                        if (window.ga) {
                            start_obj_metrics[opts.metrics['started_reading']] = timeToScroll;
                            start_obj_metrics[opts.metrics['start_reading']] = 1;
                            ga('set', start_obj_metrics);
                            ga('send', 'event', 'Reading', '2 Started Content Reading', ptype, timeToScroll);
                        }
                        _paq.push(['setCustomVariable', 1, 'Reading: Started Content Reading', timeToScroll, 'page']);
                        _paq.push(['trackEvent', 'Reading', 'start', ptype, timeToScroll]);
                    } else {
                        window.console.log('Reached content start in ' + timeToScroll);
                    }
                    scroller = true;
                }

                // If user has hit the bottom of the content send an event
                if (window.innerHeight >= (content_core.getBoundingClientRect().bottom + opts.bottomThreshold) && !endContent) {
                    timeToContentEnd = timers['content_bottom'];
                    if (!opts.debug) {
                        if (timeToContentEnd < (minReadTime - opts.readTimeThreshold)) {
                            if (window.ga) {
                                ga('set', 'dimension1', 'Scanner');
                                ga('send', 'event', 'Reading', '5 Content Scanned', ptype, timeToContentEnd);
                            }
                            _paq.push(['setCustomDimension', 1, 'scanner']);
                            _paq.push(['trackEvent', 'Reading', 'scan', ptype, timeToContentEnd]);
                        } else {
                            if (window.ga) {
                                ga('set', 'dimension1', 'Reader');
                            }
                            _paq.push(['setCustomDimension', 1, 'reader']);
                            if (!sentPageTrack) {
                                sentPageTrack = true;
                                if (window.ga) {
                                    ga('send', 'pageview', window.location.pathname);
                                }
                                _paq.push(['setCustomUrl', window.location.pathname]);
                                _paq.push(['trackPageView']);
                            }
                            if (window.ga) {
                                ga('send', 'event', 'Reading', '6 Content Read', ptype, timeToContentEnd);
                            }
                            _paq.push(['trackEvent', 'Reading', 'read', ptype, timeToContentEnd]);
                        }
                        if (reached_content_bottom) {
                            if (window.ga) {
                                ga('set', reached_content_bottom, timeToContentEnd);
                            }
                            _paq.push(['setCustomVariable', 2, 'Reading: Reached Content Bottom', timeToContentEnd, 'page']);
                        }
                        if (content_bottom) {
                            if (window.ga) {
                                ga('set', content_bottom, 1);
                            }
                        }
                        if (window.ga) {
                            ga('send', 'event', 'Reading', '3 Reached Content Bottom', ptype, timeToContentEnd);
                        }
                        _paq.push(['trackEvent', 'Reading part', 'content body read', ptype, timeToContentEnd]);
                    } else {
                        window.console.log('Reached content section bottom in ' + timeToContentEnd);
                    }
                    endContent = true;
                }

                // If user has hit the bottom of page send an event
                if (bottom >= height - opts.bottomThreshold && !didComplete) {
                    totalTime = timers['page_bottom'];
                    if (!opts.debug) {
                        if (reached_page_bottom) {
                            page_obj_metrics[reached_page_bottom] = totalTime;
                        }
                        if (page_bottom) {
                            page_obj_metrics[page_bottom] = 1;
                        }
                        if (window.ga) {
                            ga('set', page_obj_metrics);
                            ga('send', 'event', 'Reading', '4 Reached Page Bottom', ptype, totalTime);
                        }
                        _paq.push(['setCustomVariable', 3, 'Reading: Reached Page Bottom', totalTime, 'page']);
                        _paq.push(['trackEvent', 'Reading part', 'page footer seen', ptype, totalTime]);
                    } else {
                        window.console.log('Reached page bottom in ' + totalTime);
                    }
                    didComplete = true;
                    stopTimers('onvisible');
                }
            }

            var lazyNavScroll = throttle(function () {
                if (timer) {
                    window.clearTimeout(timer);
                }

                // Use a buffer so we don't call trackLocation too often.
                if (!didComplete) {
                    timer = setTimeout(trackLocation, opts.callBackTime);
                }
                else {
                    timer = null;
                }

            }, opts.throttleTime);
            $window.scroll(lazyNavScroll);
        });

        if (document.hasFocus && document.hasFocus()) {
            $window.trigger('scroll');
        }
        if (window.visibly) {
            window.visibly.onHidden(function () {
                if (!didComplete) {
                    stopTimers();
                }
                stopContentReading();
            });
            window.visibly.onVisible(function () {
                if (!didComplete) {
                    stopTimers();
                    startTimers();
                }
                stopContentReading();
                startContentReading();
            });
        }

        window.onbeforeunload = function () {
            var content_time = counter['content'];
            if (window.ga) {
                ga('send', 'event', 'Reading', '7 Content area time spent', ptype, content_time);
            }
            _paq.push(['trackEvent', 'Reading time', 'total', ptype, content_time]);

            var timeToread = minReadTime - opts.readTimeThreshold;
            if (content_time > timeToread && endContent) {
                if (window.ga) {
                    ga('set', 'dimension1', 'Reader');
                    ga('send', 'event', 'Reading', '9 Content Area Reader', ptype, content_time);
                }
                _paq.push(['setCustomDimension', 1, 'reader']);
                _paq.push(['trackEvent', 'Reading type', 'reader', ptype, content_time]);
            } else {
                if (window.ga) {
                    ga('set', 'dimension1', 'Scanner');
                    ga('send', 'event', 'Reading', '8 Content Area Scanner', ptype, content_time);
                }
                _paq.push(['setCustomDimension', 1, 'scanner']);
                _paq.push(['trackEvent', 'Reading type', 'scanner', ptype, content_time]);
            }
        };
    };

    // Plugin defaults â€“ added as a property on our plugin function.
    $.fn.screentimeAnalytics.defaults = {
        debug: false,
        callBackTime: 100, // Default time delay before checking location
        readerLocation: 100, // # px before tracking a reader
        throttleTime: 100, // Default time delay before checking scroll event
        avgWPM: 228, // average words per minute
        readTimeThreshold: 30, // buffer to treat spent time as read time in seconds
        bottomThreshold: 50,
        percentOnScreen: 7,
        ptype: null, // portal type used as the google analytics event action label
        // calculated from body class portaltype entry otherwise default to
        // Article. Pass another string entry if you have another way
        // to calculate the portal type or you want another label for the action
        metrics: { // define your metric mapping in case you already have analytics metrics
            // override this mapping in case you have no free metrics in order
            // to avoid recieving hits from this plugin
            'started_reading': 'metric1',
            'reached_content_bottom': 'metric2',
            'reached_page_bottom': 'metric3',
            'start_reading': 'metric4',
            'content_bottom': 'metric5',
            'page_bottom': 'metric6'
        }
    };

})(jQuery, window, document);


/* - design.js - */
// https://www.eea.europa.eu/portal_javascripts/design.js?original=1
var _paq=_paq||[];jQuery(document).ready(function($){var $viewlet_below_content=$("#viewlet-below-content");var $content=$("#content");var $content_core=$("#content-core");var $column_area=$(".column-area");var $portal_column_content=$("#portal-column-content");var $body=$("body");var is_anon=$body.hasClass("userrole-anonymous");var is_mini_header=$body.hasClass("mini-header");var $related_items=$(".related-wrapper");var appendTo=function(context,target){if(context.length){context.appendTo(target)}};if($column_area.length){appendTo($viewlet_below_content,$column_area)} else{appendTo($viewlet_below_content,$content)}
if($("#right-area").length){$portal_column_content.removeClass("cell width-full")}
if(is_mini_header){$(".disclaimer").insertBefore(".mini-header-below-content")}
var hide_empty_container=function($el,child_count,$checked_el){var count=child_count||0;var $elem=$checked_el||$el;var $children=$elem.children();if($children.length<=count){$el.hide()}};hide_empty_container($viewlet_below_content,0);var $whatsnew_listing=$(".whatsnew-listing");var $body_content=$(".body-content");hide_empty_container($whatsnew_listing,0,$whatsnew_listing.find(".eea-tabs-panels"));hide_empty_container($body_content,1,$body_content.find("p"));var url_path_name=window.location.pathname;var $code_diff=$("#diffstylecode");if($body.hasClass("portaltype-sparql")&&$code_diff){$code_diff.click()}
var air_fiches=$(".portaltype-fiche.section-airs");if(air_fiches.length){(function(){var $fiche_body=$(".fiche-body");var $fiche_summary=$(".fiche-summary");if(!$body.hasClass("section-airs subsection-2016")){if(!$fiche_summary.find(".keyFact").find("div").text().trim()){$fiche_summary.addClass("hidden")}}
if($body.hasClass("body-print")){var $iframes=$fiche_body.find("iframe");$iframes.each(function(idx,el){$(el).load(function(idx){var el=idx.target;var src=el.src;if(src.indexOf("embed-chart")!==-1||src.indexOf("embed-dashboard")!==-1){$(el).contents().find("html").addClass("portaltype-fiche section-airs");el.width="100%"}})})}})()}
var $charts_buttons=$(".google_buttons_bar").find("a");var $document_actions=$(".documentExportActions");var $document_actions_ul=$document_actions.find("ul");if($document_actions_ul.length){$charts_buttons.each(function(idx,el){var $el=$(el);var $wrapped=$el.addClass("pull-left").wrap("<li />").parent();$wrapped.prependTo($document_actions_ul)})}
$("[rel=__ac_name]").click(function(evt){evt.preventDefault();var input=$(this).parent().find("[name='__ac_name']");input.focus()});$("[rel=__ac_password]").click(function(evt){evt.preventDefault();var input=$(this).parent().find("[name='__ac_password']");input.focus()});$("#themes-megatopics-area").find(".promoHeader").click(function(ev){if(window.innerWidth>480){ev.stopImmediatePropagation()}});$(".policy_question").each(function(idx,el){var $el=$(el);var $next_el=$el.next();if($next_el.hasClass("indicator-figure-plus-container")){$el.addClass("page-break-before");$next_el.find(".figure-title").addClass("no-page-break-before")}});var $iframes=$("iframe");var $video_iframe=$iframes.filter('[src*="video"]'),$video_iframe_src;if($video_iframe){$video_iframe_src=$video_iframe.attr("src");$("<a />",{class:"video_iframe_for_print visible-print",href:$video_iframe_src,html:"Video link: ["+$video_iframe_src+"]"}).insertBefore($video_iframe)}
if(jQuery.fn.resizable&&!jQuery.resizable){jQuery.resizable=jQuery.fn.resizable}
$(".eea-tabs").find("li:last-child").addClass("last-child");$(".js-eea-toggle").click(function(ev){ev.preventDefault();var el=ev.target.tagName==="A"?ev.target:ev.target.parentNode;var $el=$(el);$el.find(".js-hidden-toggle").toggleClass("is-eea-hidden");$(el.getAttribute("data-target")).slideToggle({duration:300,start: function(){var display=this.getAttribute("data-display")||"block";jQuery(this).css("display",display)}})});var $slide_toggle=$(".js-eea-sliding-toggle");$slide_toggle.click(function(ev){ev.preventDefault();var t=ev.target;var cname="js-eea-sliding-toggle";var el=t.className.indexOf(cname)!==-1?t:t.parentNode;var $el=$(el);$el.find(".js-hidden-toggle").toggleClass("hidden");var $target=$(el.getAttribute("data-target"));var toggle_overflow_initial=false;if($target.hasClass("eea-sliding-section--hidden-lg")){$target.toggleClass("eea-sliding-section--hidden-lg");toggle_overflow_initial=true} else{$target.toggleClass("overflow-initial");toggle_overflow_initial=false;$target.toggleClass("eea-sliding-section--hidden-lg")}
window.setTimeout(function(){if(toggle_overflow_initial){$target.toggleClass("overflow-initial")}},250)});if(window.innerWidth>=1920){$slide_toggle.click()}
var $portal_column_two_wrapper=$("#portal-column-two-wrapper");if($portal_column_two_wrapper.children().length){$slide_toggle.removeClass("hidden")}
var $navigation_submenus=$(".portletSubMenuHeader");if($navigation_submenus&&$navigation_submenus.length<2){$navigation_submenus.hide()}
$(".js-adoptHeight").each(function(){var $el=$(arguments[1]);var $target_el=$($el.data("target-element"));$el.css("height",$target_el.outerHeight())});$(".attention, .caution, .danger, .error, .hint, .important, .note, .tip, .warning").addClass("eea-icon");$(".required:contains('Ã¢â€“ ')").addClass("no-bg");if($("#portlet-prefs").length){$("#portal-column-two").remove();$portal_column_content.removeClass("width-3:4").addClass("width-full")}
var r=/data-and-maps\/(figures|data)\/?$/;if(r.test(url_path_name)){$body.addClass("fullscreen");$("#icon-full_screen").parent().remove()}
var $auto_related=$("#auto-related"),$prev=$auto_related.prev(),$dls=$auto_related.find("dl");if($dls.length){$auto_related.detach();$dls.each(function(idx,item){var $item=$(item),$dt=$item.find("dt");$item.find(".portletItem").each(function(idx,item){if(item.className.indexOf("embedded")===-1){$(item).insertAfter($dt)}})});$auto_related.insertAfter($prev)}
function themePromotionPortlets(top_news){var top_news_width=top_news.width();var margin=top_news_width * 0.012,w=Math.floor((top_news_width-5 * margin)/5);var promotions=top_news.find(".portlet-promotions");promotions.width(w);var last=promotions.last();promotions.not(last).css("marginRight",Math.floor(margin)+3+"px");last.css({marginRight:"0px"})}
var top_news=$("#top-news-area");if(top_news.length){themePromotionPortlets(top_news)}
jQuery.fn.avoidMultipleClicks=function(options){var settings={timeout:3000,linkSelector:"a",linkCSS:"downloading",lockCSS:"downloading-lock"};if(options){jQuery.extend(settings,options)}
var self=this;return this.each(function(){self.find(settings.linkSelector).click(function(){var context=$(this);var oldCSS=context.attr("class")||"";settings.linkCSS=oldCSS.split(" ").slice(0,2).join(" ")+settings.linkCSS;context.removeClass();context.addClass(settings.linkCSS);self.addClass(settings.lockCSS);setTimeout(function(){self.removeClass(settings.lockCSS);context.removeClass(settings.linkCSS);context.addClass(oldCSS)},settings.timeout)})})};$(".documentActions .action-items").avoidMultipleClicks();$document_actions.avoidMultipleClicks({linkSelector:".eea-icon",linkCSS:" eea-icon-download eea-icon-anim-burst animated"});var file_types=["pdf","gif","tif","png","zip","xls","eps","csv","tsv","exhibit","txt","doc","docx","xlsx","table"];
function check_file_type(tokens){var tokens_length=tokens.length;var rought_ext=tokens[tokens_length-1];var guess=rought_ext.split("/")[0];return file_types.indexOf(guess)===-1?"file":guess}
function extract_file_type(url,txt_contents){var url_tokens=url.split(".");var txt_tokens=txt_contents.trim().toLowerCase().split(".");var txt_tokes_outcome=check_file_type(txt_tokens);if(txt_tokes_outcome==="file"){return check_file_type(url_tokens)}
return txt_tokes_outcome}
function capitalize(string){return string.charAt(0).toUpperCase()+string.slice(1)}
function extract_portal_type($body){var ptype=$body.attr("class");var c=capitalize;if(ptype&&ptype.match("portaltype-[a-z-]*")){ptype=ptype.match("portaltype-[a-z-]*");ptype=ptype[0].split("-");ptype=ptype.length===2?c(ptype[1]):c(ptype[1])+" "+c(ptype[2])} else{ptype="Unknown"}
return ptype}
var links=document.getElementsByTagName("a");var portal_type=extract_portal_type($body);
function match_download_links(links){var list=[];var links_length=links.length;var link,link_href;for(var i=0;i<links_length;i++){try{link=links[i];link_href=link.href;if(!link_href.match("eea.europa")){continue}
if(link_href.match("/download[.a-zA-Z]*")||link_href.match("at_download")||link_href.match("/download$")||link_href.match("ftp.eea.europa")){list.push(link)}} catch(err){window.console.log(err)}}
return list}
var downloads_list=match_download_links(links);
function add_downloads_tracking_code(idx,el){el.onclick=function(){var text=el.textContent||el.innerText;var link=el.href||"download.pdf";var ftype=extract_file_type(link,text);if(window.ga){ga("send","event","Downloads",link,ftype)}
_paq.push(["trackEvent","Downloads",ftype,portal_type,1])};return el}
$.each(downloads_list,add_downloads_tracking_code);var download_pdf=document.getElementById("download");if(download_pdf){add_downloads_tracking_code(0,download_pdf)}
if(window.readCookie&&!window.readCookie("survey_message")){window.createCookie("survey_message","never",365)}
$("#globalstatusmessage").each(function(idx,el){$(el).find("dl:not([class*='eea-icon'])").addClass("eea-icon eea-icon-magic");$(el).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200)});var scroll_analytics_enabled=$body.hasClass("scroll-analytics");if(is_anon){(function(){var runOnce;var afterPrint=function(){if(!runOnce){runOnce=true;if(window.ga){window.ga("send","event","Print Action",window.location.host,window.location.href)}
_paq.push(["trackEvent","Reading","print",portal_type,1])}};window.onafterprint=afterPrint;$(document).keydown(function(allBrowsers){if(allBrowsers.keyCode===80&&(allBrowsers.ctrlKey||allBrowsers.metaKey)){afterPrint()}});if(window.matchMedia){var mediaQueryList=window.matchMedia("print");mediaQueryList.addListener(function(mql){if(mql.matches){afterPrint()}})}})()}
if(scroll_analytics_enabled){$content_core.screentimeAnalytics()}
var floated_albums_position_fixed;window.fix_floated_album_positions=function(){if(window.innerWidth<1600||floated_albums_position_fixed){return} else{(function(){var albums=document.querySelectorAll(".floated-photo-album-container");if(!albums.length){return}
var content=document.querySelector("#content");if(!content){return}
var photo_album_width=312;var header_extra_width=888;var content_coords=content.getBoundingClientRect();document.querySelectorAll(".floated-photo-album-container").forEach(function(el){var album=el.querySelector(".photoAlbumEntry");if(!album){return}
var el_coords=album.getBoundingClientRect();if(el.className.indexOf("floated-right")!==-1){album.style.transform="translateX("+(header_extra_width-Math.round(el_coords.left-content_coords.left))+"px)"} else{album.style.transform="translateX("+-(photo_album_width+Math.round(el_coords.left-content_coords.left))+"px)"}});floated_albums_position_fixed=true})()}};var $floated_album_links=$(".floated-photo-album-container");$floated_album_links.each(function(){var $this=$(this);var $link=$this.find("a");var link_href=$link.attr("href");var $album_entries=$related_items.find(".photoAlbumEntry");var $album_entries_links=$album_entries.find("a");var found=$album_entries_links.filter(function(){return this.href===link_href});var $photo_album=found.parent().clone();if(found){$photo_album.appendTo($this);window.setTimeout(function(){if(window.forceImageLoad){window.forceImageLoad($photo_album.find(".lazy"));window.fix_floated_album_positions()}},2000)}});var $redesign_below_content=$(".mini-header-below-content");var $below_content_children=$redesign_below_content.children();var children_length=$below_content_children.length;if(!children_length||children_length===1){$redesign_below_content.hide()}
if(children_length===2){if($below_content_children[0].className.indexOf("qrbox")!==-1&&$below_content_children[1].className.indexOf("eea-pdf-viewlet")!==-1){$redesign_below_content.hide()}}
var normalize_siblings_height=function(el){if(!el){return}
var panel=el.nextSibling;var tabs_height=el.clientHeight;var panel_height=panel.clientHeight;if(tabs_height>panel_height){panel.style.minHeight=tabs_height+50+"px"}};$(window).on("eea.tags.loaded", function(ev,data){var tabs=data.obj?data.obj[0]:undefined;normalize_siblings_height(tabs)});var underscore=window._;if(underscore&&underscore.debounce){$(window).resize(underscore.debounce(function(){window.fix_floated_album_positions();window.enlarge_content_area&&window.enlarge_content_area();normalize_siblings_height(document.querySelector(".relatedItems .eea-tabs"))},100))}
var throttle=underscore?underscore.throttle: function(el){return el};
function navScroll(){var pxShow=150,pxHide=100,fadeInTime=20,fadeOutTime=20,window_scroll_top=$(window).scrollTop(),goTopButton=$(".go-top");if(window_scroll_top>=pxShow){goTopButton.fadeIn(fadeInTime);goTopButton.attr("style","display: block;")} else if(window_scroll_top<=pxHide){goTopButton.fadeOut(fadeOutTime)}}
var lazyNavScroll=throttle(navScroll,500);$(window).scroll(lazyNavScroll);$(".eea-tabs").on("click","a", function(){var $this=$(this);if(!$this.hasClass("iframes-refreshed")){$this.addClass("iframes-refreshed");var tabIndex=$this.parent().index();if(tabIndex!=0){var $this=$(this);$this.closest(".eea-tabs").next(".eea-tabs-panels").find(".eea-tabs-panel").eq(tabIndex).find("iframe").each(function(){var $this=$(this);var src=$this.attr("src");$this.attr("src",null);setTimeout(function(){$this.attr("src",src+' ')},0)})}}});$(".eea-accordion-panel").on("click","h2", function(){var $this=$(this);if(!$this.hasClass("iframes-refreshed")){$this.addClass("iframes-refreshed");$this.closest(".eea-accordion-panel").find(".pane iframe").each(function(){var $this=$(this);$this.attr("src",$this.attr("src"))})}})});

/* - eea-miniheader.js - */
/*global $ jQuery window document */
if(window.EEA === undefined){
    var EEA = {
        who: 'eea.miniheader',
        version: '1.0'
    };
}

EEA.MiniHeader = function(context, options){
    var self = this;
    self.$context = $(context);
    self.settings = {
        transition: 'slideToggle',
        transition_for: 500,
        minimize_elem: '.eea-miniheader-element',
        auto_hide: true,
        auto_hide_after: 3000,
        expander_btn_class: 'mini-header-expander'
    };

    if(options){
        jQuery.extend(self.settings, options);
    }

    self.initialize();
};

EEA.MiniHeader.prototype = {
    initialize: function(){
        var self = this;
        self.$el = $(self.settings.minimize_elem);
        self.$btn = $('.' + self.settings.expander_btn_class);

        self.bindEvents();
    },
    bindEvents: function() {
        var self = this;
        self.$btn.click(function(evt){
            evt.preventDefault();
            self.triggerTransition();
        });

        window.setTimeout(function(){
            "use strict";
            self.triggerTransition('eea-miniheader-hide');
        }, self.settings.auto_hide_after);

    },
    triggerTransition: function(ev_name) {
        var self = this;
        var event_name = ev_name || 'eea-miniheader-toggled';
        var count = 0;
        self.$el[self.settings.transition](self.settings.transition_for, function() {
            count += 1;
            if (count === 1) {
                self.$context.trigger(event_name, self);
            }
        });

    }

};

jQuery.fn.EEAMiniHeader = function(options){
    return this.each(function(){
        if (!$.data(this, "EEAMiniHeader")) {
            $.data(this, "EEAMiniHeader",
                new EEA.MiniHeader(this, options));
        }
    });
};

jQuery(document).ready(function(){
    var plugin_settings = window.EEA.EEAMiniHeader_settings;
    var items = jQuery("body");
    items.EEAMiniHeader(plugin_settings);
});


/* - eea-accordion.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-accordion.js?original=1
jQuery(document).ready(function($){var portlet=jQuery('.portletNavigationTree');if(portlet.length){var tabs=jQuery('.portletItem',portlet);var index=0;tabs.each(function(idx,obj){var here=jQuery(this);if(jQuery('.navTreeCurrentNode',here).length>0){index=idx;return false}});portlet.tabs(".portletNavigationTree .portletItem",{tabs:".portletSubMenuHeader",effect:"slide",initialIndex:index});portlet.delegate('.current, .collapsed','click', function(){var tabs=portlet.data('tabs');var $this=$(this);if(index===tabs.getIndex()){if(tabs.getCurrentTab().hasClass('current')){tabs.getCurrentPane().dequeue().stop().slideUp(function(){portlet.trigger('eea.accordion.navigation.hidden',this)});tabs.getCurrentTab().removeClass('current').addClass('collapsed')}
else{$this.addClass('current').removeClass('collapsed').next().slideDown(function(){portlet.trigger('eea.accordion.navigation.visible',this)})}}
index=tabs.getIndex()});var $content=$("#content");portlet.on('eea.accordion.navigation.visible', function(el){equalize_columns()});var $right_column_area=$(".right-column-area");var equalize_columns=function(){if($right_column_area.length){if($content.height()<$right_column_area.height()){$content.css('height',$right_column_area.height())}}};equalize_columns()}
$.tools.tabs.addEffect("collapsed", function(i,done){});var eea_accordion=function($folder_panels){if(!$folder_panels){$folder_panels=$('.eea-accordion-panels')}
if($folder_panels.length){$folder_panels.each(function(idx,el){var $el=$(el);if($el.hasClass("eea-accordion-initialized")){return}
var effect='slide';var current_class="current";var initial_index=0;var initial_indexes=[];var $pane=$el.find('.pane');$el.find('.eea-accordion-title, .eea-accordion-title-manual-icons, h2').each(function(idx){var $title=$(this);if($title.hasClass('current')){$title.removeClass('current');initial_index=idx;initial_indexes.push(idx);$el.removeClass('collapsed-by-default')}});if($el.hasClass('collapsed-by-default')){effect='slide';initial_index=null;$pane.hide()}
if($el.hasClass('non-exclusive')){if(!$el.hasClass('collapsed-by-default')){$pane.not(':nth-child('+(initial_index+1)+')').hide();$pane.eq(initial_index).prev().addClass('current')}
effect='collapsed';current_class="default";$el.find('.eea-accordion-title, .eea-accordion-title-manual-icons, h2').click(function(ev){var $el=$(this);if(!$el.hasClass('current')){$el.addClass('current').next().slideDown()}
else{$el.removeClass('current').next().slideUp()}})}
$el.tabs($pane,{tabs:$pane.prev(),effect:effect,initialIndex:initial_index,current:current_class,onBeforeClick: function(ev,idx){$(ev.target).trigger("onBeforeClick",{event:ev,index:idx})},onClick: function(ev,idx){$(ev.target).trigger("eea-accordion-on-click",{event:ev,index:idx})}});if(initial_indexes.length&&$el.hasClass('non-exclusive')){$el.find('.eea-accordion-title, .eea-accordion-title-manual-icons, h2').each(function(idx){var $title=$(this);if($title.hasClass('current')){return}
if(initial_indexes.indexOf(idx)===-1){return}
$title.click()})}
$el.addClass("eea-accordion-initialized")})}};eea_accordion();window.EEA=window.EEA||{};window.EEA.eea_accordion=eea_accordion});

/* - eea-autoscroll.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-autoscroll.js?original=1
jQuery(document).ready(function($){if($('.autoscroll-to-here').length){var top=$('.autoscroll-to-here').offset().top;$('html,body').animate({scrollTop:top},1000)}});

/* - eea-fancybox.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-fancybox.js?original=1
jQuery(document).ready(function($){if($.fn.fancybox!==undefined){$('.fancybox').fancybox();$('.gallery-fancybox').each(function(){var href=$(this).attr('href')+"/gallery_fancybox_view";$(this).attr('href',href);$(this).fancybox({type:'iframe',padding:0,margin:0,width:650,height:500,scrolling:'no',autoScale:false,autoDimensions:false})})}});

/* - eea-icons.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-icons.js?original=1
jQuery(document).ready(function($){$(".eea-icon-left-container").each(function(i,el){var $el=$(el);if($el.find(".eea-icon-left").length){return}
var $i_tag=$("<span class='eea-icon eea-icon-left'></span>");$el.prepend($i_tag)});$(".eea-icon-right-container").each(function(i,el){var $el=$(el);if($el.find(".eea-icon-right").length){return}
var $i_tag=$("<span class='eea-icon eea-icon-right'></span>");$el.append($i_tag)})});

/* - eea-tabs.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-tabs.js?original=1
jQuery(document).ready(function($){var eea_tabs=function(){var $eea_tabs=$(".eea-tabs"),eea_tabs_length=$eea_tabs.length,$eea_tabs_panels=$(".eea-tabs-panels"),i=0;var $eea_tab,$eea_tab_parent,$eea_tabs_panel,$eea_panels,$eea_tab_children;if(eea_tabs_length){for(i;i<eea_tabs_length;i+=1){$eea_tab=$eea_tabs.eq(i);$eea_tab_parent=$eea_tab.parent();if($eea_tab_parent.attr('id')==='whatsnew-gallery'){continue}
if($eea_tab.data('tabs')){$(window).trigger('eea.tags.loaded',{obj:$eea_tab});continue}
$eea_tab.hide();$eea_tabs_panel=$eea_tabs_panels.eq(i);if(!$eea_tabs_panel.length){$eea_tabs_panel=$eea_tabs_panels.eq(i-1)}
$eea_panels=$eea_tabs_panel.children();$eea_panels.find('.eea-tabs-title').detach().appendTo($eea_tab);$eea_tab_children=$eea_tab.children();var j=0,tabs_length=$eea_tab_children.length,$tab_title,tab_title_text,tab_title_id,tab_id;for(j;j<tabs_length;j+=1){$tab_title=$($eea_tab_children[j]);if($tab_title[0].tagName==="P"){$tab_title.replaceWith("<li>"+$tab_title.html()+"</li>")}
if(!$tab_title.find('a').length){tab_title_text=$tab_title.text();tab_title_id=tab_title_text.toLowerCase().replace(/\s/g,'-');$tab_title.text("");if($('#tab-'+tab_title_id).length){tab_id='tab-'+tab_title_id+'-'+1}
else{tab_id='tab-'+tab_title_id}
$('<a />').attr({'href':'#tab-'+tab_title_id,'id':tab_id}).html(tab_title_text).appendTo($tab_title)}}
$eea_tab_children=$eea_tab.children();if($eea_tab.hasClass('eea-tabs-ajax')){$eea_tab.tabs($eea_panels,{effect:'ajax',history:true})}
else{$eea_tab.tabs($eea_panels)}
$eea_tab.show();$(window).trigger('eea.tags.loaded',{obj:$eea_tab})}}};window.EEA=window.EEA||{};window.EEA.eea_tabs=eea_tabs;eea_tabs();$(window).bind('hashchange', function(evt){var $tab_target;if(window.location.hash.indexOf('tab')!==-1){try{$tab_target=$("#content").find(window.location.hash);if($tab_target.length&&!$tab_target.hasClass("current")){$tab_target.click()}} catch(e){}}});$(window).trigger('eea.tags.loaded',{obj:$('.eea-tabs')});if(window.location.hash){$(window).trigger('hashchange')}});

/* - eea-pagination.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-pagination.js?original=1
jQuery(document).ready(function($){if(window.EEA.isPrintPdf){return}
var $related_items=$("#relatedItems"),has_related_items=$related_items.length&&$related_items[0].tagName!=="SELECT",$eea_tabs=$("#eea-tabs"),$paginate=$(".paginate"),$eea_tabs_panels=$("#eea-tabs-panels"),pagination_count=12;$.merge($paginate,$related_items.find(".visualNoMarker")).each(function(){var $self=$(this),$children=$self.children(),count=0,isPaginate=$self.hasClass("paginate");pagination_count=window.parseInt($self.attr("data-paginate-count"),10)||pagination_count;if(pagination_count!==12&&!isPaginate){isPaginate=true}
$children=isPaginate&&$children[0].tagName!=="H3"?$self:$children;$children.each(function(){var items;var orig_entries;var num_entries;var $childes;var $this=$(this);var keepData=true;var scripts=$this.find("script");if(this.tagName==="H3"){$eea_tabs=!$eea_tabs.length?$("<ul class='eea-tabs two-rows' />").insertBefore($self):$eea_tabs;$eea_tabs_panels=!$eea_tabs_panels.length?$("<div class='eea-tabs-panels' />").insertAfter($eea_tabs):$eea_tabs_panels;var tab_id=this.innerHTML.toLowerCase().replace(/\s/g,"-"),tab_href="#tab-"+tab_id;$("<li />").append($("<a />").attr({href:tab_href,id:"tab-"+tab_id}).html($this.detach().html())).appendTo($eea_tabs)} else{$this.data($self.data());if(scripts.length){scripts.remove(undefined,keepData)}
$childes=$this.children();num_entries=$childes.length;orig_entries=num_entries;while(num_entries>0){count+=1;items=$childes.slice(0,num_entries>pagination_count?pagination_count:num_entries);$("<div />",{"class":"page","data-count":num_entries>pagination_count?pagination_count:num_entries}).append(items).appendTo($this);$childes=$childes.not(items);num_entries=$childes.length}
$this.addClass("eea-tabs-panel").appendTo($eea_tabs_panels);if(orig_entries>pagination_count){$this.addClass("eea-tabs-panel-paginated");$("<div class='paginator listingBar' />").prependTo($this).pagination(orig_entries,{items_per_page:pagination_count,prev_show_always:true,next_show_always:true,next_text:$("#eeaPaginationNext").text(),prev_text:$("#eeaPaginationPrev").text(),item_text:$("#eeaPaginationItems").text(),callback: function(idx,el){var $parent=el.parent(),$page=$parent.find(".page").hide().eq(idx);$page.show();$(window).trigger("scroll");return false}})}}});if(isPaginate){$eea_tabs="";$eea_tabs_panels=""}});if(has_related_items||$paginate.length){window.EEA.eea_tabs()}});

/* - eea-toc.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-toc.js?original=1
function build_toc(toc){if(!toc.hasClass("collapsable-portlet")){toc.addClass("collapsable-portlet")}
var currentList=toc.find(".portletItem");var hLevel=null;var lists={root:currentList};lists.root.detach();var queryString=$("#queryString").html();queryString=queryString||"h2, h3, h4";var tocExclude=$("#exclude-toc").data("exclude");if(tocExclude){try{tocExclude=tocExclude.trim();$("#content-core").find(tocExclude).addClass("notoc")} catch(err){if(window.console){window.console.log(err)}}}
$("#content-core").find(queryString).each(function(i,el){var newLevel=parseInt(el.tagName.charAt(1),10);hLevel=hLevel||newLevel;if(el.className.indexOf("notoc")!==-1){return}
if(newLevel>hLevel){hLevel=newLevel;var newList=$("<ol></ol>");lists[newLevel]=newList;currentList.children().last().append(newList);currentList=newList} else if(newLevel<hLevel){hLevel=newLevel;currentList=lists[newLevel]||lists.root}
var h=$(el);var hText=$.trim(h.find("a").text())||h.text();var li=$("<li><a>"+hText+"</a></li>");var hId=h.attr("id")||"toc-"+i;var urlWithoutHash=location.protocol+"//"+location.host+location.pathname;li.find("a").attr("href",urlWithoutHash+"#"+hId);currentList.append(li);h.attr("id",hId)});var $toc_children=lists.root.children();var $first_child=$toc_children.eq(0);if($first_child.is("ol")&&!$first_child.children().length){$toc_children=$toc_children.slice(1,$toc_children.length);$toc_children.appendTo($first_child);lists.root.empty();$first_child.appendTo(lists.root)}
if(!$first_child.is("ol")){$toc_children.wrapAll("<ol />")}
lists.root.appendTo(toc);toc.show();var hash=window.location.hash;var toc_element=document.getElementById(hash);if(hash.length){if(toc_element){toc_element.scrollIntoView()}}}
jQuery(document).ready(function($){var $document_toc=$("#document-toc");if($document_toc.length){build_toc($document_toc);var $portlet_header=$document_toc.find(".portletHeader");$portlet_header.click(function(){$document_toc.toggleClass("collapsed")})}});

/* - eea-tooltips.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-tooltips.js?original=1
jQuery(document).ready(function($){if($.fn.tooltip!==undefined){$(".eea-tooltip-top").each(function(i){var title=$(this).attr("title");$(this).tooltip({effect:'fade',tipClass:'eea-tooltip-markup-top'})});$(".eea-tooltip-bottom").each(function(i){var title=$(this).attr("title");$(this).tooltip({effect:'fade',position:'bottom center',tipClass:'eea-tooltip-markup-bottom'})});$(".eea-tooltip-left").each(function(i){var title=$(this).attr("title");$(this).tooltip({effect:'fade',position:'center left',tipClass:'eea-tooltip-markup-left'})});$(".eea-tooltip-right").each(function(i){var title=$(this).attr("title");$(this).tooltip({effect:'fade',position:'center right',tipClass:'eea-tooltip-markup-right'})});var removeExtraText=function(){this.getTip()[0].lastChild.nodeValue=''};window.eea_flexible_tooltip=function flexible_tooltip(el,position,content_class,offset){"use strict";var $el=$(el);var pos=position||'center right';var cont_class=content_class||'tooltip-box-rcontent';var coordinates=offset||[20,20];var title=$el.attr("title");var container=$('<div>').addClass('eea-tooltip-markup');var bottomright=$('<div>').addClass('tooltip-box-br');var topleft=$('<div>').addClass('tooltip-box-tl');var content=$('<div>').addClass(cont_class);content.text(title);topleft.append(content);bottomright.append(topleft);container.append(bottomright);$el.tooltip({effect:'fade',position:pos,offset:coordinates,tipClass:'eea-tooltip-markup',layout:container,onBeforeShow:removeExtraText})};$(".eea-flexible-tooltip-right").each(function(idx,el){window.eea_flexible_tooltip(el)});$(".eea-flexible-tooltip-left").each(function(idx,el){window.eea_flexible_tooltip(el,'center left','tooltip-box-lcontent',[20,-10])});$(".eea-flexible-tooltip-top").each(function(idx,el){window.eea_flexible_tooltip(el,'top center','tooltip-box-tcontent',[10,0])});$(".eea-flexible-tooltip-bottom").each(function(idx,el){window.eea_flexible_tooltip(el,'bottom center','tooltip-box-bcontent',[30,0])})}});

/* - eea_relations.js - */
// https://www.eea.europa.eu/portal_javascripts/eea_relations.js?original=1
jQuery(function($){var $relations_parent=$('#relatedItems');var $relations=$relations_parent.find('.visualNoMarker > div');var $tab_panels=$relations_parent.find(".eea-tabs-panel");var $sort_parent=$(".sorter_ctl");var $sort_select=$sort_parent.find('select');if($relations.children().length>10){$sort_parent.show()}
$(window).bind('relations.showSortingWidget', function(){if($tab_panels.length){$tab_panels.each(function(){var $this=$(this);var data_attr=$this.find('.page').eq(0).data();if(data_attr&&data_attr.count>10){$sort_parent.show();return false}})}});$(window).trigger('relations.showSortingWidget');$sort_select.change(function(e){var sort_parameter=e.currentTarget.value;$relations.each(function(){var $this=$(this);var $children=$this.children().detach();$children.sort(function(a,b){return $(a).data(sort_parameter)>$(b).data(sort_parameter)?1:-1});$this.append($children)});$(window).trigger('relations.sort',sort_parameter)});$(window).bind('relations.sort', function(ev,sort_parameter){$tab_panels.each(function(){var $this=$(this);var $listing_entries=$this.find('.photoAlbumEntry, .tileItem').detach();$listing_entries.sort(function(a,b){return $(a).data(sort_parameter)>$(b).data(sort_parameter)?1:-1});var slice_index=0;$('.page',$this).each(function(i,el){var $el=$(el);var count=$el.data('count');var current_index=slice_index;slice_index=slice_index+count;$el.append($listing_entries.slice(current_index,slice_index))})})})});

/* - eea-mediacentre.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-mediacentre.js?original=1
(function($){$(document).ready(function(){if(window.innerHeight<800&&window.innerWidth<680&&window.location===window.parent.location){return}
var $region_content=$("#region-content"),$objmeta=$region_content.find('#objmetadata_pbwidgets_wrapper');if($objmeta.length){$region_content.find("dd:contains('video')").closest('dl').hide()}
window.EEA=window.EEA||{};var EEA=window.EEA;var playVideo=function(link){var $link=$(link);if(!$link.data('multimedia')){var coverflow=$("#multimedia-coverflow"),video_page=coverflow.length>0?1:0;var parent=link;var href=link.href;var isInsidePopUp=$('body').hasClass('video_popup_view');var options={type:'iframe',padding:0,margin:0,width:640,height:564,scrolling:'no',autoScale:false,autoDimensions:false,centerOnScroll:false,titleShow:false};if(video_page===0){if(href.indexOf('video_popup_view')===-1){link.href=href.replace(/view$/,'video_popup_view')}}
if(video_page){if(href.indexOf('multimedia_popup_view')===-1){var regex=/view$|video_popup_view|multimedia_popup_view/;var clean_href=href.replace(regex,'');if(href.indexOf('youtube')===-1&&href.indexOf('vimeo')===-1){link.href=clean_href+"multimedia_popup_view";$("#fancybox-title").remove()}
else{options.titlePosition='inside';options.titleShow=true}}
var mult=coverflow.offset(),bg=window.whatsnew.multimedia.bg,bg2=window.whatsnew.multimedia.bg2,$parent=$(parent),src=$parent.find('img');var thumb_url=src.length!==0?src[0].src:$parent.closest('div').prev().children()[0].src;options.height=387;options.overlayShow=false;options.onStart=function(){var media_player=$("#media-player");if(media_player.is(":visible")){media_player.fadeOut('fast',function(){$("#contentFlow").fadeIn('slow')});$("#media-flowplayer").children().remove()}
$.fancybox.center=function(){return false};$('html, body').animate({scrollTop:0},200,'linear');$("#fancybox-wrap").hide().css({position:'absolute'}).animate({left:mult.left-20,top:mult.top-20},200);window.setTimeout(function(){if(href.indexOf('youtube')!==-1||href.indexOf('vimeo')!==-1){$("#fancybox-title").remove().prependTo('#fancybox-content')}},200)};var info_area=function(iframe,iframe_src,$parent){var frame,tab_desc,video_title,iframe_eea=iframe_src.indexOf('eea');if(iframe_eea!==-1){frame=iframe.contents();tab_desc=frame.find("#tab-desc");video_title=frame.find("#video-title").text()}
if(!tab_desc){tab_desc=$($parent).find('p').html()}
video_title=video_title||$("#fancybox-title").text();var featured_item=$("#featured-items");var featured_item_title=featured_item.find("h3");featured_item_title.text(video_title);var featured_description=featured_item.find(".featured-description");$("#featured-films").fadeOut();tab_desc=tab_desc||$('.photoAlbumEntryDescription',$parent).text();featured_description.html(tab_desc).end().fadeIn();var title_height=featured_item_title.height();var desc_height;if(title_height===21){desc_height="184px"}
else if(title_height===42){desc_height="163px"}
else{desc_height="142px"}
featured_description.css({height:desc_height});var orig_href=iframe_eea!==-1?href.replace(/multimedia_popup_view/,'view'):href.replace('embed/','watch?v=');featured_item.find(".bookmark-link").attr("href",orig_href)};options.onComplete=function($parent){var iframe=$("#fancybox-frame"),iframe_src=iframe.attr('src');if(iframe_src.indexOf('youtube')!==-1||iframe_src.indexOf('vimeo')!==-1){iframe.attr({width:640,height:360}).css('height','360px')}
else{iframe.attr({width:640,height:387})}
iframe.one("load",function(){info_area(iframe,iframe_src,$parent)})};options.href=link.href}
if(!isInsidePopUp){$(link).fancybox(options)}
$link.data('multimedia',true);$link.click()}};EEA.playVideo=playVideo;
function prepareVideoLinkURLs(){var isInsidePopUp=$('body').hasClass('video_popup_view');$('.video-fancybox').each(function(){var regex=/(\/$|\/view\/?$|\/video_popup_view\/?$)/;var href=$(this).attr('href');href=href.replace(regex,'');href=href+"/video_popup_view";this.href=href});$("body").delegate(".video-fancybox","click", function(evt){playVideo(this);if(!isInsidePopUp){evt.preventDefault()}})}
prepareVideoLinkURLs();if($.fn.fancybox===undefined){return}
if(window.Faceted){jQuery(window.Faceted.Events).bind(window.Faceted.Events.AJAX_QUERY_SUCCESS, function(evt){prepareVideoLinkURLs()})}})}(jQuery));

/* - print_warning.js - */
// https://www.eea.europa.eu/portal_javascripts/print_warning.js?original=1
var warning_displayed=false;window.onbeforeprint=function(){var warning_text=jQuery.trim(jQuery("#print-warning p").html());if(warning_displayed===false){alert(warning_text)}};jQuery(document).ready(function($){$('#icon-print').parent().attr('href','#').click(function(){var warning_text=$.trim($("#print-warning p").html());if(confirm(warning_text)){warning_displayed=true;window.print()}})});

/* - slide.js - */
// https://www.eea.europa.eu/portal_javascripts/slide.js?original=1
(function($){$(document).ready(function(){
function panel(){var $el=$(this);var buttonID=$el.attr("id");if(!buttonID){return}
var $tooltip=$("#tip-"+buttonID);var article_lang=buttonID==="article-language";var fordef;if($tooltip.length>0){fordef="click, blur";$el.tooltip({tip:$tooltip[0],position:"bottom center",offset:[0,0],delay:10000000,events:{def:fordef}});$el.click(function(ev){if($(ev.target).closest(".panel-content").length){return}
ev.preventDefault();var $this=$(this),tooltip=$tooltip[0];var $panels=$(".panel");$panels.each(function(){var $this=$(this);var $id=$this.attr("id");if($id!==""&&$id!==$tooltip.attr("id")){$this.fadeOut("fast")}});var pos_left=window.Math.floor($this.offset().left);if(article_lang){$("#tip-article-language").css({position:"absolute",display:"block",top:"auto"});if(pos_left>200){tooltip.style.right="0px";tooltip.firstElementChild.style.float="right"} else{tooltip.style.right="auto";tooltip.firstElementChild.style.float="left"}} else{var gnav_pos_left=window.Math.floor($("#secondary-portaltabs").offset().left);var eWidth=$this.outerWidth();var tWidth=$tooltip.outerWidth();var left=pos_left+eWidth-gnav_pos_left-tWidth+"px";if(tooltip.style.left!==left){tooltip.style.left=left}}
$tooltip.fadeIn("fast")})}}
$("body").click(function(e){var target=$(e.target);target=target[0].tagName==="A"?target:target.parent();var parents=$(".navbar-header, #content"),panels=parents.find(".panel");if(!target.is("#portal-globalnav > a, .secondary-portaltabs a, .panel, #article-language a")&&!target.parents(".panel").length){panels.fadeOut("fast");$(".eea-navsiteactions-active").removeClass("eea-navsiteactions-active")}});$("#secondary-portaltabs").addClass("eea-slide-tooltips");$("#article-language").each(panel);$(".eea-slide-tooltips").find("> li").each(panel)})})(jQuery);

/* - whatsnew_gallery.js - */
// https://www.eea.europa.eu/portal_javascripts/whatsnew_gallery.js?original=1
jQuery(document).ready(function($){window.whatsnew={};var eea_gal=window.whatsnew;(function(){eea_gal.site_address=(jQuery("body").data("base-url")||"")+'/';eea_gal.gallery=$("#whatsnew-gallery");eea_gal.gallery_page=eea_gal.gallery.attr("data-page")}());eea_gal.gallery_load=function(el,address,params,layout_selection){el.load(address,params, function(html){var album=el.find(".gallery-album");var listing=el.find(".gallery-listing");var layout=layout_selection||el.parent().find(".gallery-layout-selection li")[0];if(html.length>1){if(layout&&layout.className==="list-layout active-list"){el.find('.gallery-album').addClass("hiddenStructure");listing.hide().fadeIn("slow")}
else{el.find('.gallery-listing').addClass("hiddenStructure");album.hide().fadeIn("slow")}}})};eea_gal.whatsnew_func=function(cur_tab_val,sel_text,sel_value,index){var gallery_macro=this.gallery_page==='frontpage'?"whatsnew_gallery_macro":"datamaps_gallery_macro";var address=eea_gal.site_address+gallery_macro;eea_gal.current_tab_addr=address;var gal=eea_gal.gallery.find(".eea-tabs-panel");var news=index?gal[index]:gal.filter(function(){return this.style.display!=="none"});news=index===0?gal.first():news;news=news[0]!==undefined?news[0]:news;var gallery_ajax=$(".gallery-ajax",news);var layout_selection=$('.gallery-layout-selection li',news)[0];var params=sel_value?"topic"+"="+sel_value:undefined;params=params?params+'&tabname='+cur_tab_val:'tabname='+cur_tab_val;eea_gal.gallery_load(gallery_ajax,address,params,layout_selection)};var $whatsnew_gallery=$("#whatsnew-gallery");$whatsnew_gallery.find(".eea-tabs").tabs($whatsnew_gallery.find(".eea-tabs-panel"), function(event,index){var cur_tab=this.getTabs()[index];if(!cur_tab){return}
var cur_tab_val=cur_tab.id.substr(4);cur_tab.theme=cur_tab.theme||"";var opt_item,sel_value,sel_text;var highlight=$("#"+cur_tab_val+"-highlights");var ajax_loader_img='<div style="text-align: center;"><img src="++resource++faceted_images/ajax-loader.gif" /></div>';opt_item=$("#topic-selector").find(":selected");if(opt_item.length){sel_value=opt_item.val();sel_text=opt_item.text()}
else{$(".filter-topic").hide()}
var album=highlight.find(".gallery-album");var album_length=album.length!==0?album.children().length:0;var notopics=highlight.find(".portalMessage"),notopics_length=notopics.length!==0?1:0;if(cur_tab.theme===sel_value&&notopics_length!==0){return}
if(sel_text&&sel_text.indexOf("All")!==-1||album_length===0&&!highlight.find(".portalMessage").length){if(album_length&&cur_tab.theme===sel_value){return}
album.html(ajax_loader_img);cur_tab.theme=sel_value;eea_gal.whatsnew_func(cur_tab_val,sel_text,sel_value,index)}
if(sel_value){if(cur_tab.theme!==sel_value){album.html(ajax_loader_img);cur_tab.theme=sel_value;eea_gal.whatsnew_func(cur_tab_val,sel_text,sel_value,index)}}});var $topic_selector=$("#topic-selector");$topic_selector.find('[value="default"]').remove();$topic_selector.change(
function displayResult(){$topic_selector[0][0].className="hiddenStructure";var x=this.selectedIndex,y=this.options;var topic_value=y[x].value,topic_text=y[x].innerHTML;var $tab=$("#whatsnew-gallery").find(".eea-tabs a.current");var $has_tab=$tab.length;if($has_tab){$tab[0].theme=topic_value}
var tab_val=$has_tab?$tab[0].id.substr(4):'allproducts';eea_gal.whatsnew_func(tab_val,topic_text,topic_value)});var layout_links=$(".gallery-layout-selection li");layout_links.click(function(e){var $this=$(this);var $ajax=$this.closest("ul").next();var $hidden_gallery=$ajax.find(".hiddenStructure");var listing=$ajax.find('.gallery-listing');var album=$ajax.find('.gallery-album');var $next=$this.siblings();var link_class=$this[0].className;var highlight=$this.closest("div")[0].id;if(link_class==="list-layout active-list"||link_class==="album-layout active-album"){e.preventDefault();return}
var cookie_expires=new Date();cookie_expires.setMonth(cookie_expires.getMonth()+1);if(link_class.indexOf("list-layout")!==-1){album.slideUp("slow");listing.slideDown("slow");$hidden_gallery.removeClass("hiddenStructure");$this.toggleClass("active-list");$next.toggleClass("active-album");SubCookieUtil.set(eea_gal.gallery_page,highlight,"active-list",cookie_expires)}
else{listing.slideUp("slow");album.slideDown("slow");$hidden_gallery.removeClass("hiddenStructure");$this.toggleClass("active-album");$next.toggleClass("active-list");SubCookieUtil.set(eea_gal.gallery_page,highlight,"active-album",cookie_expires)}
e.preventDefault()});if(eea_gal.gallery.length>0){var gallery_cookies=SubCookieUtil.getAll(eea_gal.gallery_page);if(gallery_cookies!==null){eea_gal.gallery.find('.eea-tabs-panel').each(function(){var $this=$(this);var layouts=$this.find(".gallery-layout-selection li");var $hidden_gallery=$this.find(".hiddenStructure");var link_listing=layouts.first();var link_album=layouts.last();var listing=$this.find(".gallery-listing");var album=$this.find(".gallery-album");var gallery_cookie=gallery_cookies[this.id];if(gallery_cookie!==null){if(gallery_cookie==="active-album"){listing.hide();album.show();$hidden_gallery.removeClass("hiddenStructure");link_listing.removeClass("active-list");link_album.addClass("active-album")}
else if(gallery_cookie==="active-list"){listing.show();album.hide();$hidden_gallery.removeClass("hiddenStructure");link_listing.addClass("active-list");link_album.removeClass("active-album")}}})}}});

/* - customPatch.js - */
// https://www.eea.europa.eu/portal_javascripts/customPatch.js?original=1
function hide_soer_2020(){$('.eea-available-version').hide();var year=new Date().getFullYear();if(year>=2025){$('.eea-available-version').show()}}
$(document).ready(function(){var hashLinks=document.querySelectorAll(".chart-tabs a");[].forEach.call(hashLinks, function(link){link.addEventListener("click", function(event){event.preventDefault();history.pushState({},"",link.href);history.pushState({},"",link.href);history.back()})});var $boxm=$("#box-metadata");$boxm.addClass("eea-accordion-panels-plain");$boxm.find("h2").addClass("eea-accordion-title");$boxm.find('.eea-icon-right').removeClass('eea-icon-right').addClass('eea-icon-left');$(".chart-tabs").find('a').click(function(ev){$(window).resize()});setTimeout( function(){$(window).resize()},500);if(window.location.pathname==="/soer/2020/"||window.location.pathname==="/soer/2020"){hide_soer_2020()}
$('.portletError').remove();(function($el){if(!$el.length){return}
var $previous_versions=$el.next();$previous_versions.css('display','none');$el.click(function(e){$previous_versions.slideToggle();e.preventDefault()})}($(".showOlderVersions")));$(".full-width-fieldset").parent().css("width","100%")});var report_pdf=document.getElementById('report-files');var additional_files,more_files,dul,publication_text,publication_order,next_div;if(report_pdf){additional_files=document.querySelectorAll('h2.pdf-left-alignment')[0];if(!report_pdf.firstElementChild){more_files=document.querySelector('.moreFiles');more_files.classList.add('hidden');if(additional_files){additional_files.classList.add('hidden');report_pdf.classList.add('hidden');publication_order=document.querySelector('.publicationOrder');if(publication_order){publication_order.classList.add('pdf-right-alignment')}
report_pdf.nextElementSibling.classList.add('pdf-right-alignment')}}
jQuery.each(document.querySelectorAll('.pdf-right-alignment'), function(el){if(el.tagName==='LI'){el.className='';dul=document.createElement('ul');dul.className='pdf-right-alignment';dul.appendChild(el);publication_text=document.querySelector('.publicationText');publication_text.appendChild(dul);publication_text.insertBefore(dul,additional_files)}})}


/* - soer_frontpage.js - */
// https://www.eea.europa.eu/portal_javascripts/soer_frontpage.js?original=1
(function($){$(document).ready(function(){var slide_portlet=$('.slidePortlet');if(slide_portlet.length===0){return}
var body=$('body'),body_class=body.attr('class').match(/\bsoer/);slide_portlet.each(function(){var portlet=$(this);var b1=$('<span class="slideButton next"></span>');var b2=$('<span class="slideButton prev"></span>');portlet.append(b1);portlet.append(b2);var play=$('<div class="slideButton play"></div>');portlet.append(play);var items=portlet.find('.portletItem');var items_length=items.length;if(items_length<2){$(".slideButton").css('display','none')}
var randomnumber=Math.floor(Math.random()*items_length);var elem=items[randomnumber];$(elem).addClass('selected');$(elem).css('left',0);b1.click(function(){var current=portlet.find('.portletItem.selected');var next=current.next('.portletItem');var currentIndex=portlet.find('.portletItem').index(current);if(currentIndex+1===portlet.find('.portletItem').length){return}
current.removeClass('selected');next.addClass('selected');current.animate({'left':-(portlet.width()+300)});next.animate({'left':0})});b2.click(function(){var current=portlet.find('.portletItem.selected');var next=current.prev('.portletItem');var currentIndex=portlet.find('.portletItem').index(current);if(currentIndex===0){return}
current.removeClass('selected');next.addClass('selected');var p=portlet.width()+300;current.animate({'left':p});next.animate({'left':0})});var playID;play.click( function(){var $this=$(this);if($this.hasClass('pause')){$this.removeClass('pause');window.clearInterval(playID)}
else{$this.toggleClass('pause');b1.click();playID=window.setInterval(function(){b1.click()},10000)}});if(body_class){play.addClass('pause');playID=window.setInterval(function(){b1.click()},10000)}})})})(jQuery);

/* - global_searchbox.js - */
// https://www.eea.europa.eu/portal_javascripts/global_searchbox.js?original=1
(function($){$(function(){var search_forms=$(".portal-searchbox, #visual-column-wrapper").find(".searchforms");var text_inputs=search_forms.find("input:text");text_inputs.each( function(){var search_label=this.title+"...";this.onfocus=function(){if(this.value==search_label){this.value=""}};this.onblur=function(){if(this.value===""){this.value=search_label}};this.value=search_label})})})(jQuery);

/* - jquery.lazy.min.js - */
/* jslint:disable */
/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);

/* - jquery.lazy.plugins.min.js - */
/* jslint:disable */
/*! jQuery & Zepto Lazy - All Plugins v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t){function a(a,e,r,o){t.ajax({url:e.attr("data-src"),type:o||"get",dataType:e.attr("data-type")||"html",success:function(t){e.html(t),r(!0),a.config("removeAttribute")&&e.removeAttr("data-src data-method data-type")},error:function(){r(!1)}})}t.lazy("ajax",function(t,e){a(this,t,e,t.attr("data-method"))}),t.lazy("get",function(t,e){a(this,t,e,"get")}),t.lazy("post",function(t,e){a(this,t,e,"post")})}(window.jQuery||window.Zepto),function(t){t.lazy(["av","audio","video"],["audio","video"],function(a,e){var r=a[0].tagName.toLowerCase();if("audio"===r||"video"===r){var o=a.find("data-src"),i=a.find("data-track"),n=0,c=function(){++n===o.length&&e(!1)},s=function(){var a=t(this),e=a[0].tagName.toLowerCase(),r=a.prop("attributes"),o=t("data-src"===e?"<source>":"<track>");"data-src"===e&&o.one("error",c),t.each(r,function(t,a){o.attr(a.name,a.value)}),a.replaceWith(o)};a.one("loadedmetadata",function(){e(!0)}).off("load error").attr("poster",a.attr("data-poster")),o.length?o.each(s):a.attr("data-src")?(t.each(a.attr("data-src").split(","),function(e,r){var o=r.split("|");a.append(t("<source>").one("error",c).attr({src:o[0].trim(),type:o[1].trim()}))}),this.config("removeAttribute")&&a.removeAttr("data-src")):e(!1),i.length&&i.each(s)}else e(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy(["frame","iframe"],"iframe",function(a,e){var r=this;if("iframe"===a[0].tagName.toLowerCase()){var o=a.attr("data-error-detect");"true"!==o&&"1"!==o?(a.attr("src",a.attr("data-src")),r.config("removeAttribute")&&a.removeAttr("data-src data-error-detect")):t.ajax({url:a.attr("data-src"),dataType:"html",crossDomain:!0,xhrFields:{withCredentials:!0},success:function(t){a.html(t).attr("src",a.attr("data-src")),r.config("removeAttribute")&&a.removeAttr("data-src data-error-detect")},error:function(){e(!1)}})}else e(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy("noop",function(){}),t.lazy("noop-success",function(t,a){a(!0)}),t.lazy("noop-error",function(t,a){a(!1)})}(window.jQuery||window.Zepto),function(t){function a(a,e,i){var n=a.prop("attributes"),c=t("<"+e+">");return t.each(n,function(t,a){"srcset"!==a.name&&a.name!==o||(a.value=r(a.value,i)),c.attr(a.name,a.value)}),a.replaceWith(c),c}function e(a,e,r){var o=t("<img>").one("load",function(){r(!0)}).one("error",function(){r(!1)}).appendTo(a).attr("src",e);o.complete&&o.load()}function r(t,a){if(a){var e=t.split(",");t="";for(var r=0,o=e.length;r<o;r++)t+=a+e[r].trim()+(r!==o-1?",":"")}return t}var o="data-src";t.lazy(["pic","picture"],["picture"],function(i,n){if("picture"===i[0].tagName.toLowerCase()){var c=i.find(o),s=i.find("data-img"),d=this.config("imageBase");c.length?(c.each(function(){a(t(this),"source",d)}),1===s.length?(s=a(s,"img",d),s.on("load",function(){n(!0)}).on("error",function(){n(!1)}),s.attr("src",s.attr(o)),this.config("removeAttribute")&&s.removeAttr(o)):i.attr(o)?(e(i,d+i.attr(o),n),this.config("removeAttribute")&&i.removeAttr(o)):n(!1)):i.attr("data-srcset")?(t("<source>").attr({media:i.attr("data-media"),sizes:i.attr("data-sizes"),type:i.attr("data-type"),srcset:r(i.attr("data-srcset"),d)}).appendTo(i),e(i,d+i.attr(o),n),this.config("removeAttribute")&&i.removeAttr(o+" data-srcset data-media data-sizes data-type")):n(!1)}else n(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy(["js","javascript","script"],"script",function(t,a){"script"==t[0].tagName.toLowerCase()?(t.attr("src",t.attr("data-src")),this.config("removeAttribute")&&t.removeAttr("data-src")):a(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy("vimeo",function(t,a){"iframe"===t[0].tagName.toLowerCase()?(t.attr("src","https://player.vimeo.com/video/"+t.attr("data-src")),this.config("removeAttribute")&&t.removeAttr("data-src")):a(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy(["yt","youtube"],function(t,a){"iframe"===t[0].tagName.toLowerCase()?(t.attr("src","https://www.youtube.com/embed/"+t.attr("data-src")+"?rel=0&amp;showinfo=0"),this.config("removeAttribute")&&t.removeAttr("data-src")):a(!1)})}(window.jQuery||window.Zepto);

/* - lazy_load.js - */
/* jslint:disable */
/*global jQuery, window, document, Faceted */

jQuery(document).ready(function ($) {
  if (window.Faceted) {
    Faceted.LoadLazy = {
      initialize: function () {
        var results = jQuery("#faceted-results");
        if (results.length) {
          var children = results.children();
          if (children.length) {
            var lazy_elements = children.find(".lazy");

            lazy_elements.lazy({
              scrollDirection: "both",
              effect: "fadeIn",
              effectTime: 1000,
              threshold: 100,
              visibleOnly: true,
              onError: function (element) {
                console.log("error loading " + element.data("src"));
              }
            });

            lazy_elements.each(function () {
              var element = jQuery(this);
              var source = element.attr("src") || element.attr("data-src");

              if (source.indexOf("ajax-loader") === -1) {
                element.attr("data-src", source);
                if (this.tagName === "IMG") {
                  element.attr(
                    "src",
                    "/www/++resource++faceted_images/ajax-loader.gif"
                  );
                } else {
                  element.css(
                    "background-image",
                    'url("/www/++resource++faceted_images/ajax-loader.gif")'
                  );
                }
              }
            });
            lazy_elements.lazy({
              scrollDirection: "both",
              effect: "fadeIn",
              effectTime: 1000,
              threshold: 100,
              visibleOnly: true,
              onError: function (element) {
                console.log("error loading " + element.data("src"));
              }
            });
            // 106884 force a click for faceted results
            // in order to get results to lazy load when
            // using the related dialog
            setTimeout(function () {
              results.click();
            }, 500);
          }
        }
      }
    };
    // bind lazy loading upon ajax query success
    function faceted_lazy_init() {
      jQuery(Faceted.Events).bind(
        Faceted.Events.AJAX_QUERY_SUCCESS,
        function () {
          Faceted.LoadLazy.initialize();
        }
      );
    }
    faceted_lazy_init();
    // rebind lazy init upon CLEANUP_COMPLETED event needed when clicking on
    // the related edit widget and it's category tabs
    jQuery(Faceted.Events).bind(Faceted.Events.CLEANUP_COMPLETED, function () {
      faceted_lazy_init();
    });
  }

  var lazyElements = $(".lazy");

  // 94351 disable iframe lazy loading due to unexpected side effects of
  // google charts iframes.
  // instead lazy load only iframes that have a data-src attribute
  $("#content")
    .find("iframe")
    .each(function () {
      if (
        window.isElementInViewport(this) === false ||
        this.getAttribute("data-src")
      ) {
        lazyElements.push(this);
      }
    });

  lazyElements.lazy({
    scrollDirection: "both",
    effect: "fadeIn",
    effectTime: 1000,
    threshold: 100,
    visibleOnly: true,
    onError: function (element) {
      console.log("error loading " + element.data("src"));
    }
  });

  // Internet explorer detection
  var isIe = function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return true
      return true;
    }

    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return true
      return true;
    }

    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      // Edge (IE 12+) => return true
      return true;
    }

    // other browser
    return false;
  };

  window.forceImageLoad = function (images) {
    $(images).each(function () {
      var image = this;
      var src = image.getAttribute("src");
      var data = image.getAttribute("data-src");
      var type = image.tagName;
      // if type isn't img then we have a span with a bg image style
      if (type !== "IMG" && data) {
        src = image.getAttribute("style") || "";
        if (src) {
          // split the url from background-image: url(url) string
          src = src.split('url("');
          if (src.length > 1) {
            src = src[1].split('")')[0];
          }
        }
        if (!src || src !== data) {
          image.style.backgroundImage = "url(" + data + ")";
        }
      }
      if (src && data && src !== data) {
        image.setAttribute("src", data);
      }
    });
  };

  var forceDavizLoad = function () {
    jQuery.each(jQuery(".embedded-dashboard:visible"), function (idx, elem) {
      if (elem) {
        if (jQuery(elem).hasClass("not_visible")) {
          jQuery(elem).removeClass("not_visible");
          if (jQuery(elem).hasClass("isChart")) {
            var vhash = elem.id.split("_")[2];
            if (window.gl_charts) {
              window.gl_charts["googlechart_view_" + vhash] = window.drawChart(
                jQuery(elem).data("settings"),
                jQuery(elem).data("other_options")
              ).chart;
            }
          } else {
            window.drawDashboardEmbed(jQuery(elem).data("settings"));
          }
          jQuery(elem).trigger("eea.embed.loaded");
        }
      }
      setTimeout(function () {}, 1000);
    });
  };

  var beforePrintCaller = function (lazyElements) {
    forceDavizLoad();
    window.forceImageLoad(lazyElements);
  };

  if (typeof lazyElements !== "undefined") {
    if (isIe()) {
      window.onbeforeprint = beforePrintCaller(lazyElements || []); // Internet Explorer
    }

    $(document).keydown(function (allBrowsers) {
      // Track printing using Ctrl/Cmd+P.
      if (
        allBrowsers.keyCode === 80 &&
        (allBrowsers.ctrlKey || allBrowsers.metaKey)
      ) {
        beforePrintCaller(lazyElements || $(".lazy"));
      }
    });

    if (window.matchMedia) {
      // Track printing from browsers using the Webkit engine
      var mediaQueryList = window.matchMedia("print");
      mediaQueryList.addListener(function (mql) {
        if (mql.matches) {
          beforePrintCaller(lazyElements || $(".lazy"));
        }
      });
    }
  }
  var $window = $(window);
  $window.on("click", function () {
    $window.scroll();
  });
});


/* - ga.js - */
// https://www.eea.europa.eu/portal_javascripts/ga.js?original=1
var DNT='no';if(navigator.doNotTrack=="yes"||navigator.doNotTrack=="1"||navigator.msDoNotTrack=="1"||window.doNotTrack=="yes"||window.doNotTrack=="1"||window.msDoNotTrack=="1"){DNT='yes'}
var _paq=_paq||[];_paq.push(["setDocumentTitle",document.domain+"/"+document.title]);_paq.push(["setCookieDomain","*.eea.europa.eu"]);_paq.push(['setCustomDimension',2,DNT]);_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function(){var u="https://matomo.eea.europa.eu/";var hn=window.location.host;var sids={"www.eea.europa.eu":"3","semantic.eea.europa.eu":"34","eunis.eea.europa.eu":"35","community.eea.europa.eu":"36","search.apps.eea.europa.eu":"37"};var d=document,sid=d.getElementsByTagName('html')[0].getAttribute('data-siteid')||sids[hn]||'3';_paq.push(['setTrackerUrl',u+'piwik.php']);_paq.push(['setSiteId',sid]);var g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.type='text/javascript';g.async=true;g.defer=true;g.src=u+'piwik.js';s.parentNode.insertBefore(g,s)})();

/* - ++resource++jquery.galleryview.js - */
/*

 GalleryView - jQuery Content Gallery Plugin
 Author: 		Jack Anderson
 Version:		2.0 (May 5, 2009)
 Documentation: 	http://www.spaceforaname.com/galleryview/

 Please use this development script if you intend to make changes to the
 plugin code.  For production sites, please use jquery.galleryview-2.0-pack.js.

 See CHANGELOG.txt for a review of changes and LICENSE.txt for the applicable
 licensing information.

 Version:		2.0.1 (May 28, 2013) Modified by ichim-david

 */

//Global variable to check if window is already loaded
//Used for calling GalleryView after page has loaded
var window_loaded = false;

(function($){
    $.fn.galleryView = function(options) {
        var opts = $.extend($.fn.galleryView.defaults,options);

        var id;
        var iterator = 0;
        var item_count = 0;
        var slide_method;
        var paused = false;

        //Element dimensions
        var gallery_width;
        var gallery_height;
        var pointer_height;
        var pointer_width;
        var strip_width;
        var strip_height;
        var wrapper_width;
        var f_frame_width;
        var f_frame_height;
        var frame_caption_size = 20;
        var gallery_padding;
        var filmstrip_margin;
        var filmstrip_orientation;


        //Arrays used to scale frames and panels
        var frame_img_scale = new Object();
        var panel_img_scale = new Object();
        var img_h = new Object();
        var img_w = new Object();

        //Flag indicating whether to scale panel images
        var scale_panel_images = true;

        var panel_nav_displayed = false;

        //Define jQuery objects for reuse
        var j_gallery;
        var j_filmstrip;
        var j_frames;
        var j_frame_img_wrappers;
        var j_panels;
        var j_pointer;


        /************************************************/
        /*	Plugin Methods								*/
        /************************************************/

            //Transition from current item to item 'i'
        function showItem(i) {
            //Disable next/prev buttons until transition is complete
            var show_filmstrip = j_gallery.find('.strip_wrapper').length;
            if(opts.hover_nav_buttons_images) {
                $('.nav-next-overlay',j_gallery).unbind('click');
                $('.nav-prev-overlay',j_gallery).unbind('click');
            }
            $('.nav-next',j_gallery).unbind('click');
            $('.nav-prev',j_gallery).unbind('click');
            j_frames.unbind('click');

            //Fade out all frames while fading in target frame
            if(show_filmstrip) {
                j_frames.removeClass('current').find('img').stop().animate({
                    'opacity':opts.frame_opacity
                },opts.transition_speed);
                j_frames.eq(i).addClass('current').find('img').stop().animate({
                    'opacity':1.0
                },opts.transition_speed);
            }

            //If the gallery has panels and the panels should fade, fade out all panels while fading in target panel
            if(opts.show_panels && opts.fade_panels) {
                j_panels.fadeOut(opts.transition_speed).eq(i%item_count).fadeIn(opts.transition_speed,function(){
                    if(!show_filmstrip) {
                        if(opts.hover_nav_buttons_images) {
                            $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                            $('.nav-next-overlay',j_gallery).click(showNextItem);
                        }
                        $('.nav-prev',j_gallery).click(showPrevItem);
                        $('.nav-next',j_gallery).click(showNextItem);
                    }
                });
            }

            //If gallery has a filmstrip, handle animation of frames
            if(show_filmstrip) {
                //Slide either pointer or filmstrip, depending on transition method
                if(slide_method=='strip') {
                    //Stop filmstrip if it's currently in motion
                    j_filmstrip.stop();

                    if(filmstrip_orientation=='horizontal') {
                        //Determine distance between pointer (eventual destination) and target frame
                        var distance = getPos(j_frames[i]).left - (getPos(j_pointer[0]).left+(pointer_width/2)-(f_frame_width/2));
                        var diststr = (distance>=0?'-=':'+=')+Math.abs(distance)+'px';

                        //Animate filmstrip and slide target frame under pointer
                        j_filmstrip.animate({
                            'left':diststr
                        },opts.transition_speed,opts.easing,function(){
                            //Always ensure that there are a sufficient number of hidden frames on either
                            //side of the filmstrip to avoid empty frames
                            var old_i = i;
                            if(i>item_count) {
                                i = i%item_count;
                                iterator = i;
                                j_filmstrip.css('left','-'+((f_frame_width+opts.frame_gap)*i)+'px');
                            } else if (i<=(item_count-strip_size)) {
                                i = (i%item_count)+item_count;
                                iterator = i;
                                j_filmstrip.css('left','-'+((f_frame_width+opts.frame_gap)*i)+'px');
                            }
                            //If the target frame has changed due to filmstrip shifting,
                            //Make sure new target frame has 'current' class and correct size/opacity settings
                            if(old_i != i) {
                                j_frames.eq(old_i).removeClass('current').find('img').css({
                                    'opacity':opts.frame_opacity
                                });
                                j_frames.eq(i).addClass('current').find('img').css({
                                    'opacity':1.0
                                });
                            }
                            if(!opts.fade_panels) {
                                j_panels.hide().eq(i%item_count).show();
                            }

                            //Enable navigation now that animation is complete

                            if(opts.hover_nav_buttons_images) {
                                $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                                $('.nav-next-overlay',j_gallery).click(showNextItem);
                            }
                            $('.nav-prev',j_gallery).click(showPrevItem);
                            $('.nav-next',j_gallery).click(showNextItem);
                            enableFrameClicking();
                        });
                    } else {
                        //Determine distance between pointer (eventual destination) and target frame
                        var distance = getPos(j_frames[i]).top - (getPos(j_pointer[0]).top+(pointer_height)-(f_frame_height/2));
                        var diststr = (distance>=0?'-=':'+=')+Math.abs(distance)+'px';

                        //Animate filmstrip and slide target frame under pointer
                        j_filmstrip.animate({
                            'top':diststr
                        },opts.transition_speed,opts.easing,function(){
                            //Always ensure that there are a sufficient number of hidden frames on either
                            //side of the filmstrip to avoid empty frames
                            var old_i = i;
                            if(i>item_count) {
                                i = i%item_count;
                                iterator = i;
                                j_filmstrip.css('top','-'+((f_frame_height+opts.frame_gap)*i)+'px');
                            } else if (i<=(item_count-strip_size)) {
                                i = (i%item_count)+item_count;
                                iterator = i;
                                j_filmstrip.css('top','-'+((f_frame_height+opts.frame_gap)*i)+'px');
                            }
                            //If the target frame has changed due to filmstrip shifting,
                            //Make sure new target frame has 'current' class and correct size/opacity settings
                            if(old_i != i) {
                                j_frames.eq(old_i).removeClass('current').find('img').css({
                                    'opacity':opts.frame_opacity
                                });
                                j_frames.eq(i).addClass('current').find('img').css({
                                    'opacity':1.0
                                });
                            }
                            if(!opts.fade_panels) {
                                j_panels.hide().eq(i%item_count).show();
                            }

                            //Enable navigation now that animation is complete
                            if(opts.hover_nav_buttons_images) {
                                $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                                $('.nav-next-overlay',j_gallery).click(showNextItem);
                            }
                            $('.nav-prev',j_gallery).click(showPrevItem);
                            $('.nav-next',j_gallery).click(showNextItem);
                            enableFrameClicking();
                        });
                    }
                } else if(slide_method=='pointer') {
                    //Stop pointer if it's currently in motion
                    j_pointer.stop();
                    //Get position of target frame
                    var pos = getPos(j_frames[i]);

                    if(filmstrip_orientation=='horizontal') {
                        //Slide the pointer over the target frame
                        j_pointer.animate({
                            'left':(pos.left+(f_frame_width/2)-(pointer_width/2)+'px')
                        },opts.transition_speed,opts.easing,function(){
                            if(!opts.fade_panels) {
                                j_panels.hide().eq(i%item_count).show();
                            }
                            if(opts.hover_nav_buttons_images) {
                                $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                                $('.nav-next-overlay',j_gallery).click(showNextItem);
                            }
                            $('.nav-prev',j_gallery).click(showPrevItem);
                            $('.nav-next',j_gallery).click(showNextItem);
                            enableFrameClicking();
                        });
                    } else {//Slide the pointer over the target frame
                        j_pointer.animate({
                            'top':(pos.top+(f_frame_height/2)-(pointer_height)+'px')
                        },opts.transition_speed,opts.easing,function(){
                            if(!opts.fade_panels) {
                                j_panels.hide().eq(i%item_count).show();
                            }
                            if(opts.hover_nav_buttons_images) {
                                $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                                $('.nav-next-overlay',j_gallery).click(showNextItem);
                            }
                            $('.nav-prev',j_gallery).click(showPrevItem);
                            $('.nav-next',j_gallery).click(showNextItem);
                            enableFrameClicking();
                        });
                    }
                }

            }
        };

        //Find padding and border widths applied to element
        //If border is non-numerical ('thin','medium', etc) set to zero
        function extraWidth(el) {
            if(!el) return 0;
            if(el.length==0) return 0;
            el = el.eq(0);
            var ew = 0;
            ew += getInt(el.css('paddingLeft'));
            ew += getInt(el.css('paddingRight'));
            ew += getInt(el.css('borderLeftWidth'));
            ew += getInt(el.css('borderRightWidth'));
            return ew;
        }
        //Find padding and border heights applied to element
        //If border is non-numerical ('thin','medium', etc) set to zero
        function extraHeight(el) {
            if(!el) return 0;
            if(el.length==0) return 0;
            el = el.eq(0);
            var eh = 0;
            eh += getInt(el.css('paddingTop'));
            eh += getInt(el.css('paddingBottom'));
            eh += getInt(el.css('borderTopWidth'));
            eh += getInt(el.css('borderBottomWidth'));
            return eh;
        }

        //Halt transition timer, move to next item, restart timer
        function showNextItem() {

            $(document).stopTime("transition");
            if(++iterator==j_frames.length) {iterator=0;}
            showItem(iterator);
            if(!paused) {
                $(document).everyTime(opts.transition_interval,"transition",function(){
                    showNextItem();
                });
            }
        };

        //Halt transition timer, move to previous item, restart timer
        function showPrevItem() {
            $(document).stopTime("transition");
            if(--iterator<0) {iterator = item_count-1;}
            showItem(iterator);
            if(!paused) {
                $(document).everyTime(opts.transition_interval,"transition",function(){
                    showNextItem();
                });
            }
        };

        //Get absolute position of element in relation to top-left corner of gallery
        //If el=gallery, return position of gallery within browser viewport
        function getPos(el) {
            var left = 0, top = 0;
            var el_id = el.id;
            if(el.offsetParent) {
                do {
                    left += el.offsetLeft;
                    top += el.offsetTop;
                } while(el = el.offsetParent);
            }
            //If we want the position of the gallery itself, return it
            if(el_id == id) {return {'left':left,'top':top};}
            //Otherwise, get position of element relative to gallery
            else {
                var gPos = getPos(j_gallery[0]);
                var gLeft = gPos.left;
                var gTop = gPos.top;

                return {'left':left-gLeft,'top':top-gTop};
            }
        }

        //Add onclick event to each frame
        function enableFrameClicking() {
            j_frames.each(function(i){
                //If there isn't a link in this frame, set up frame to slide on click
                //Frames with links will handle themselves
                if($('a',this).length==0) {
                    $(this).click(function(){
                        if(iterator!=i) {
                            $(document).stopTime("transition");
                            showItem(i);
                            iterator = i;
                            if(!paused) {
                                $(document).everyTime(opts.transition_interval,"transition",function(){
                                    showNextItem();
                                });
                            }
                        }
                    });
                }
            });
        }

        //Construct gallery panels from '.panel' <div>s
        function buildPanels() {
            //If there are panel captions, add overlay divs
            j_panels.each(function(i){
                if($('.panel-overlay',this).length>0) {
                    $(this).append('<div class="overlay-background"></div>');
                }
            });
            if(!opts.show_filmstrip) {
                //Add navigation buttons
                $('<img />').addClass('nav-next').attr('src',opts.theme_path+opts.nav_theme+'/next.gif').appendTo(j_gallery).css({
                    'top':((opts.panel_height-22)/2)+gallery_padding+'px',
                    'display':'none'
                }).click(showNextItem);

                $('<img />').addClass('nav-prev').attr('src',opts.theme_path+opts.nav_theme+'/prev.gif').appendTo(j_gallery).css({
                    'top':((opts.panel_height-22)/2)+gallery_padding+'px',
                    'display':'none'
                }).click(showPrevItem);

                if(opts.hover_nav_buttons_images) {
                    $('<img />').addClass('nav-next-overlay').attr('src',opts.theme_path+opts.nav_theme+'/panel-nav-next.gif').appendTo(j_gallery).css({
                        'top':((opts.panel_height-22)/2)+gallery_padding-10+'px',
                        'display':'none'
                    }).click(showNextItem);

                    $('<img />').addClass('nav-prev-overlay').attr('src',opts.theme_path+opts.nav_theme+'/panel-nav-prev.gif').appendTo(j_gallery).css({
                        'top':((opts.panel_height-22)/2)+gallery_padding-10+'px',
                        'display':'none'
                    }).click(showPrevItem);
                }
            }

            j_panels.each(function(i){
                $(this).css({
                    'width':(opts.panel_width-extraWidth(j_panels))+'px',
                    'height':(opts.panel_height-extraHeight(j_panels))+'px',
                    'position':'absolute',
                    'overflow':'hidden',
                    'display':'none'
                });
                switch(opts.filmstrip_position) {
                    case 'top': $(this).css({
                        'top':strip_height+Math.max(gallery_padding,filmstrip_margin)+'px',
                        'left':gallery_padding+'px'
                    }); break;
                    case 'left': $(this).css({
                        'top':gallery_padding+'px',
                        'left':strip_width+Math.max(gallery_padding,filmstrip_margin)+'px'
                    }); break;
                    default: $(this).css({'top':gallery_padding+'px','left':gallery_padding+'px'}); break;
                }
            });
            $('.panel-overlay',j_panels).css({
                'position':'absolute',
                'zIndex': opts.zIndex,
                'width':(opts.panel_width-extraWidth($('.panel-overlay',j_panels)))+'px',
                'left':'0'
            });
            $('.overlay-background',j_panels).css({
                'position':'absolute',
                'zIndex':opts.zIndex - 1,
                'width':opts.panel_width+'px',
                'left':'0',
                'opacity':opts.overlay_opacity
            });
            if(opts.overlay_position=='top') {
                $('.panel-overlay',j_panels).css('top',0);
                $('.overlay-background',j_panels).css('top',0);
            } else {
                $('.panel-overlay',j_panels).css('bottom',0);
                $('.overlay-background',j_panels).css('bottom',0);
            }

            $('.gallery-panel iframe',j_panels).css({
                'width':opts.panel_width+'px',
                'height':opts.panel_height+'px',
                'border':'0'
            });

            if(scale_panel_images) {
                $('img',j_panels).each(function(i){
                    $(this).css({
                        'height':panel_img_scale[i%item_count]*img_h[i%item_count],
                        'width':panel_img_scale[i%item_count]*img_w[i%item_count],
                        'position':'relative',
                        'top':(opts.panel_height-(panel_img_scale[i%item_count]*img_h[i%item_count]))/2+'px',
                        'left':(opts.panel_width-(panel_img_scale[i%item_count]*img_w[i%item_count]))/2+'px'
                    });
                });
            }
        }

        //Construct filmstrip from '.filmstrip' <ul>
        function buildFilmstrip() {
            //Add wrapper to filmstrip to hide extra frames
            j_filmstrip.wrap('<div class="strip_wrapper"></div>');
            if(slide_method=='strip') {
                j_frames.clone().appendTo(j_filmstrip);
                j_frames.clone().appendTo(j_filmstrip);
                j_frames = $('li',j_filmstrip);
            }
            //If captions are enabled, add caption divs and fill with the image titles
            if(opts.show_captions) {
                j_frames.append('<div class="caption"></div>').each(function(i){
                    $(this).find('.caption').html($(this).find('img').attr('title'));
                    //$(this).find('.caption').html(i);
                });
            }
            j_filmstrip.css({
                'listStyle':'none',
                'margin':'0',
                'padding':'0',
                'width':strip_width+'px',
                'position':'absolute',
                'zIndex': opts.zIndex,
                'top':(filmstrip_orientation=='vertical' && slide_method=='strip'?-((f_frame_height+opts.frame_gap)*iterator):0)+'px',
                'left':(filmstrip_orientation=='horizontal' && slide_method=='strip'?-((f_frame_width+opts.frame_gap)*iterator):0)+'px',
                'height':strip_height+'px'
            });
            j_frames.css({
                'float':'left',
                'position':'relative',
                'height':f_frame_height+(opts.show_captions?frame_caption_size:0)+'px',
                'width':f_frame_width+'px',
                'zIndex': opts.zIndex + 1,
                'padding':'0',
                'cursor':'pointer'
            });
            switch(opts.filmstrip_position) {
                case 'top': j_frames.css({
                    'marginBottom':filmstrip_margin+'px',
                    'marginRight':opts.frame_gap+'px'
                }); break;
                case 'bottom': j_frames.css({
                    'marginTop':filmstrip_margin+'px',
                    'marginRight':opts.frame_gap+'px'
                }); break;
                case 'left': j_frames.css({
                    'marginRight':filmstrip_margin+'px',
                    'marginBottom':opts.frame_gap+'px'
                }); break;
                case 'right': j_frames.css({
                    'marginLeft':filmstrip_margin+'px',
                    'marginBottom':opts.frame_gap+'px'
                }); break;
            }
            $('.img_wrap',j_frames).each(function(i){
                $(this).css({
                    'height':Math.min(opts.frame_height,img_h[i%item_count]*frame_img_scale[i%item_count])+'px',
                    'width':Math.min(opts.frame_width,img_w[i%item_count]*frame_img_scale[i%item_count])+'px',
                    'position':'relative',
                    'top':(opts.show_captions && opts.filmstrip_position=='top'?frame_caption_size:0)+Math.max(0,(opts.frame_height-(frame_img_scale[i%item_count]*img_h[i%item_count]))/2)+'px',
                    'left':Math.max(0,(opts.frame_width-(frame_img_scale[i%item_count]*img_w[i%item_count]))/2)+'px',
                    'overflow':'hidden'
                });
            });
            $('img',j_frames).each(function(i){
                $(this).css({
                    'opacity':opts.frame_opacity,
                    'height':img_h[i%item_count]*frame_img_scale[i%item_count]+'px',
                    'width':img_w[i%item_count]*frame_img_scale[i%item_count]+'px',
                    'position':'relative',
                    'top':Math.min(0,(opts.frame_height-(frame_img_scale[i%item_count]*img_h[i%item_count]))/2)+'px',
                    'left':Math.min(0,(opts.frame_width-(frame_img_scale[i%item_count]*img_w[i%item_count]))/2)+'px'

                }).mouseover(function(){
                        $(this).stop().animate({'opacity':1.0},300);
                    }).mouseout(function(){
                        //Don't fade out current frame on mouseout
                        if(!$(this).parent().parent().hasClass('current')) $(this).stop().animate({'opacity':opts.frame_opacity},300);
                    });
            });
            $('.strip_wrapper',j_gallery).css({
                'position':'absolute',
                'overflow':'hidden'
            });
            if(filmstrip_orientation=='horizontal') {
                $('.strip_wrapper',j_gallery).css({
                    'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin)+'px':opts.panel_height+gallery_padding+'px'),
                    'left':((gallery_width-wrapper_width)/2)+gallery_padding+'px',
                    'width':wrapper_width+'px',
                    'height':strip_height+'px'
                });
            } else {
                $('.strip_wrapper',j_gallery).css({
                    'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin)+'px':opts.panel_width+gallery_padding+'px'),
                    'top':Math.max(gallery_padding,opts.frame_gap)+'px',
                    'width':strip_width+'px',
                    'height':wrapper_height+'px'
                });
            }
            $('.caption',j_gallery).css({
                'position':'absolute',
                'top':(opts.filmstrip_position=='bottom'?f_frame_height:0)+'px',
                'left':'0',
                'margin':'0',
                'width':f_frame_width+'px',
                'padding':'0',
                'height':frame_caption_size+'px',
                'overflow':'hidden',
                'lineHeight':frame_caption_size+'px'
            });
            var pointer = $('<div></div>');
            pointer.addClass('pointer').appendTo(j_gallery).css({
                'position':'absolute',
                'zIndex': opts.zIndex + 1,
                'width':'0px',
                'fontSize':'0px',
                'lineHeight':'0%',
                'borderTopWidth':pointer_height+'px',
                'borderRightWidth':(pointer_width/2)+'px',
                'borderBottomWidth':pointer_height+'px',
                'borderLeftWidth':(pointer_width/2)+'px',
                'borderStyle':'solid'
            });

            //For IE6, use predefined color string in place of transparent (see stylesheet)
            var transColor = $.browser.msie && $.browser.version.substr(0,1)=='6' ? 'pink' : 'transparent'

            if(!opts.show_panels) { pointer.css('borderColor',transColor); }

            switch(opts.filmstrip_position) {
                case 'top': pointer.css({
                    'bottom':(opts.panel_height-(pointer_height*2)+gallery_padding+filmstrip_margin)+'px',
                    'left':((gallery_width-wrapper_width)/2)+(slide_method=='strip'?0:((f_frame_width+opts.frame_gap)*iterator))+((f_frame_width/2)-(pointer_width/2))+gallery_padding+'px',
                    'borderBottomColor':transColor,
                    'borderRightColor':transColor,
                    'borderLeftColor':transColor
                }); break;
                case 'bottom': pointer.css({
                    'top':(opts.panel_height-(pointer_height*2)+gallery_padding+filmstrip_margin)+'px',
                    'left':((gallery_width-wrapper_width)/2)+(slide_method=='strip'?0:((f_frame_width+opts.frame_gap)*iterator))+((f_frame_width/2)-(pointer_width/2))+gallery_padding+'px',
                    'borderTopColor':transColor,
                    'borderRightColor':transColor,
                    'borderLeftColor':transColor
                }); break;
                case 'left': pointer.css({
                    'right':(opts.panel_width-pointer_width+gallery_padding+filmstrip_margin)+'px',
                    'top':(f_frame_height/2)-(pointer_height)+(slide_method=='strip'?0:((f_frame_height+opts.frame_gap)*iterator))+gallery_padding+'px',
                    'borderBottomColor':transColor,
                    'borderRightColor':transColor,
                    'borderTopColor':transColor
                }); break;
                case 'right': pointer.css({
                    'left':(opts.panel_width-pointer_width+gallery_padding+filmstrip_margin)+'px',
                    'top':(f_frame_height/2)-(pointer_height)+(slide_method=='strip'?0:((f_frame_height+opts.frame_gap)*iterator))+gallery_padding+'px',
                    'borderBottomColor':transColor,
                    'borderLeftColor':transColor,
                    'borderTopColor':transColor
                }); break;
            }

            j_pointer = $('.pointer',j_gallery);

            //Add navigation buttons
            var navNext = $('<img />');
            navNext.addClass('nav-next').attr('src',opts.theme_path+opts.nav_theme+'/next.gif').appendTo(j_gallery).css({
                'position':'absolute',
                'cursor':'pointer'
            }).click(showNextItem);
            var navPrev = $('<img />');
            navPrev.addClass('nav-prev').attr('src',opts.theme_path+opts.nav_theme+'/prev.gif').appendTo(j_gallery).css({
                'position':'absolute',
                'cursor':'pointer'
            }).click(showPrevItem);
            if(filmstrip_orientation=='horizontal') {
                navNext.css({
                    'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin):opts.panel_height+filmstrip_margin+gallery_padding)+((f_frame_height-22)/2)+'px',
                    'right':((gallery_width+(gallery_padding*2))/2)-(wrapper_width/2)-opts.frame_gap-22+'px'
                });
                navPrev.css({
                    'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin):opts.panel_height+filmstrip_margin+gallery_padding)+((f_frame_height-22)/2)+'px',
                    'left':((gallery_width+(gallery_padding*2))/2)-(wrapper_width/2)-opts.frame_gap-22+'px'
                });
            } else {
                navNext.css({
                    'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin):opts.panel_width+filmstrip_margin+gallery_padding)+((f_frame_width-22)/2)+13+'px',
                    'top':wrapper_height+(Math.max(gallery_padding,opts.frame_gap)*2)+'px'
                });
                navPrev.css({
                    'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin):opts.panel_width+filmstrip_margin+gallery_padding)+((f_frame_width-22)/2)-13+'px',
                    'top':wrapper_height+(Math.max(gallery_padding,opts.frame_gap)*2)+'px'
                });
            }
        }

        //Check mouse to see if it is within the borders of the panel
        //More reliable than 'mouseover' event when elements overlay the panel
        function mouseIsOverGallery(x,y) {
            var pos = getPos(j_gallery[0]);
            var top = pos.top;
            var left = pos.left;
            return x > left && x < left+gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin)) && y > top && y < top+gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin));
        }

        function getInt(i) {
            i = parseInt(i,10);
            if(isNaN(i)) { i = 0; }
            return i;
        }

        function buildGallery() {
            var gallery_images = opts.show_filmstrip?$('img',j_frames):$('img',j_panels);
            gallery_images.each(function(i){
                img_h[i] = this.height;
                img_w[i] = this.width;
                if(opts.frame_scale=='nocrop') {
                    frame_img_scale[i] = Math.min(opts.frame_height/img_h[i],opts.frame_width/img_w[i]);
                } else {
                    frame_img_scale[i] = Math.max(opts.frame_height/img_h[i],opts.frame_width/img_w[i]);
                }

                if(opts.panel_scale=='nocrop') {
                    panel_img_scale[i] = Math.min(opts.panel_height/img_h[i],opts.panel_width/img_w[i]);
                } else {
                    panel_img_scale[i] = Math.max(opts.panel_height/img_h[i],opts.panel_width/img_w[i]);
                }
            });

            /************************************************/
            /*	Apply CSS Styles							*/
            /************************************************/
            j_gallery.css({
                'position':'relative',
                'width':gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px',
                'height':gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px'
            });

            /************************************************/
            /*	Build filmstrip and/or panels				*/
            /************************************************/
            if(opts.show_filmstrip) {
                buildFilmstrip();
                enableFrameClicking();
            }
            if(opts.show_panels) {
                buildPanels();
            }

            /************************************************/
            /*	Add events to various elements				*/
            /************************************************/
            if(opts.show_panels && !opts.show_filmstrip && opts.keep_nav_buttons_visible) {
                if(opts.hover_nav_buttons_images) {
                    $('.nav-next-overlay').fadeIn('fast');
                    $('.nav-prev-overlay').fadeIn('fast');
                }
                $('.nav-next',j_gallery).fadeIn('fast');
                $('.nav-prev',j_gallery).fadeIn('fast');
            }
            if(opts.pause_on_hover || (opts.show_panels && !opts.show_filmstrip)) {
                // make actual use of this code since this mousemove wasn't activated
                $(j_gallery).parent().mousemove(function(e){
                    if(mouseIsOverGallery(e.pageX,e.pageY)) {
                        if(opts.pause_on_hover) {
                            if(!paused) {
                                $(document).oneTime(500,"animation_pause",function(){
                                    $(document).stopTime("transition");
                                    paused=true;
                                });
                            }
                        }
                        if(opts.show_panels && !opts.show_filmstrip && !panel_nav_displayed) {

                            if(!opts.keep_nav_buttons_visible){
                                if(opts.hover_nav_buttons_images) {
                                    $('.nav-next-overlay').fadeIn('fast');
                                    $('.nav-prev-overlay').fadeIn('fast');
                                }
                                $('.nav-next',j_gallery).fadeIn('fast');
                                $('.nav-prev',j_gallery).fadeIn('fast');
                            }
                            panel_nav_displayed = true;
                        }
                    } else {
                        if(opts.pause_on_hover) {
                            $(document).stopTime("animation_pause");
                            if(paused) {
                                $(document).everyTime(opts.transition_interval,"transition",function(){
                                    showNextItem();
                                });
                                paused = false;
                            }
                        }
                        if(opts.show_panels && !opts.show_filmstrip && panel_nav_displayed) {
                            if(!opts.keep_nav_buttons_visible){
                                if(opts.hover_nav_buttons_images) {
                                    $('.nav-next-overlay').fadeOut('fast');
                                    $('.nav-prev-overlay').fadeOut('fast');
                                }
                                $('.nav-next',j_gallery).fadeOut('fast');
                                $('.nav-prev',j_gallery).fadeOut('fast');
                            }
                            panel_nav_displayed = false;
                        }
                    }
                });
            }


            /****************************************************************/
            /*	Initiate Automated Animation								*/
            /****************************************************************/

                //Hide loading box
            j_filmstrip.css('visibility','visible');
            j_gallery.css('visibility','visible');
            $('.loader',j_gallery).fadeOut('1000',function(){
                //Show the 'first' panel
                showItem(iterator);
                //If we have more than one item, begin automated transitions
                if(item_count > 1) {
                    $(document).everyTime(opts.transition_interval,"transition",function(){
                        showNextItem();
                    });
                }
            });
        }

        /************************************************/
        /*	Main Plugin Code							*/
        /************************************************/
        return this.each(function() {
            //Hide <ul>
            $(this).css('visibility','hidden');

            //Wrap <ul> in <div> and transfer ID to container <div>
            //Assign filmstrip class to <ul>
            $(this).wrap("<div></div>");
            j_gallery = $(this).parent();
            j_gallery.css('visibility','hidden').attr('id',$(this).attr('id')).addClass('gallery');
            $(this).removeAttr('id').addClass('filmstrip');

            $(document).stopTime("transition");
            $(document).stopTime("animation_pause");

            id = j_gallery.attr('id');

            //If there is no defined panel content, we will scale panel images
            scale_panel_images = $('.panel-content',j_gallery).length==0;

            //Define dimensions of pointer <div>
            pointer_height = opts.pointer_size;
            pointer_width = opts.pointer_size*2;

            //Determine filmstrip orientation (vertical or horizontal)
            //Do not show captions on vertical filmstrips
            filmstrip_orientation = (opts.filmstrip_position=='top'||opts.filmstrip_position=='bottom'?'horizontal':'vertical');
            if(filmstrip_orientation=='vertical') opts.show_captions = false;

            j_filmstrip = $('.filmstrip',j_gallery);
            j_frames = $('li',j_filmstrip);
            j_frames.addClass('frame');

            //If the user wants panels, generate them using the filmstrip images
            if(opts.show_panels) {
                for(i=j_frames.length-1;i>=0;i--) {
                    if(j_frames.eq(i).find('.panel-content').length>0) {
                        j_frames.eq(i).find('.panel-content').remove().prependTo(j_gallery).addClass('gallery-panel');
                    } else {
                        p = $('<div>');
                        p.addClass('gallery-panel');
                        im = $('<img />');
                        im.attr('src',j_frames.eq(i).find('img').eq(0).attr('src')).appendTo(p);
                        p.prependTo(j_gallery);
                        j_frames.eq(i).find('.panel-overlay').remove().appendTo(p);
                    }
                }
            } else {
                $('.panel-overlay',j_frames).remove();
                $('.panel-content',j_frames).remove();
            }

            //If the user doesn't want a filmstrip, delete it
            if(!opts.show_filmstrip) { j_filmstrip.remove(); }
            else {
                //Wrap the frame images (and links, if applicable) in container divs
                //These divs will handle cropping and zooming of the images
                j_frames.each(function(i){
                    if($(this).find('a').length>0) {
                        $(this).find('a').wrap('<div class="img_wrap"></div>');
                    } else {
                        $(this).find('img').wrap('<div class="img_wrap"></div>');
                    }
                });
                j_frame_img_wrappers = $('.img_wrap',j_frames);
            }

            j_panels = $('.gallery-panel',j_gallery);

            if(!opts.show_panels) {
                opts.panel_height = 0;
                opts.panel_width = 0;
            }


            //Determine final frame dimensions, accounting for user-added padding and border
            f_frame_width = opts.frame_width+extraWidth(j_frame_img_wrappers);
            f_frame_height = opts.frame_height+extraHeight(j_frame_img_wrappers);

            //Number of frames in filmstrip
            item_count = opts.show_panels?j_panels.length:j_frames.length;

            //Number of frames that can display within the gallery block
            //64 = width of block for navigation button * 2 + 20
            if(filmstrip_orientation=='horizontal') {
                strip_size = opts.show_panels?Math.floor((opts.panel_width-((opts.frame_gap+22)*2))/(f_frame_width+opts.frame_gap)):Math.min(item_count,opts.filmstrip_size);
            } else {
                strip_size = opts.show_panels?Math.floor((opts.panel_height-(opts.frame_gap+22))/(f_frame_height+opts.frame_gap)):Math.min(item_count,opts.filmstrip_size);
            }

            /************************************************/
            /*	Determine transition method for filmstrip	*/
            /************************************************/
            //If more items than strip size, slide filmstrip
            //Otherwise, slide pointer
            if(strip_size >= item_count) {
                slide_method = 'pointer';
                strip_size = item_count;
            }
            else {slide_method = 'strip';}

            iterator = (strip_size<item_count?item_count:0)+opts.start_frame-1;

            /************************************************/
            /*	Determine dimensions of various elements	*/
            /************************************************/
            filmstrip_margin = (opts.show_panels?getInt(j_filmstrip.css('marginTop')):0);
            j_filmstrip.css('margin','0px');

            if(filmstrip_orientation=='horizontal') {
                //Width of gallery block
                gallery_width = opts.show_panels?opts.panel_width:(strip_size*(f_frame_width+opts.frame_gap))+44+opts.frame_gap;

                //Height of gallery block = screen + filmstrip + captions (optional)
                gallery_height = (opts.show_panels?opts.panel_height:0)+(opts.show_filmstrip?f_frame_height+filmstrip_margin+(opts.show_captions?frame_caption_size:0):0);
            } else {
                //Width of gallery block
                gallery_height = opts.show_panels?opts.panel_height:(strip_size*(f_frame_height+opts.frame_gap))+22;

                //Height of gallery block = screen + filmstrip + captions (optional)
                gallery_width = (opts.show_panels?opts.panel_width:0)+(opts.show_filmstrip?f_frame_width+filmstrip_margin:0);
            }



            //Width of filmstrip
            if(filmstrip_orientation=='horizontal') {
                if(slide_method == 'pointer') {strip_width = (f_frame_width*item_count)+(opts.frame_gap*(item_count));}
                else {strip_width = (f_frame_width*item_count*3)+(opts.frame_gap*(item_count*3));}
            } else {
                strip_width = (f_frame_width+filmstrip_margin);
            }

            if(filmstrip_orientation=='horizontal') {
                strip_height = (f_frame_height+filmstrip_margin+(opts.show_captions?frame_caption_size:0));
            } else {
                if(slide_method == 'pointer') {strip_height = (f_frame_height*item_count+opts.frame_gap*(item_count));}
                else {strip_height = (f_frame_height*item_count*3)+(opts.frame_gap*(item_count*3));}
            }

            //Width of filmstrip wrapper (to hide overflow)
            wrapper_width = ((strip_size*f_frame_width)+((strip_size-1)*opts.frame_gap));
            wrapper_height = ((strip_size*f_frame_height)+((strip_size-1)*opts.frame_gap));


            gallery_padding = getInt(j_gallery.css('paddingTop'));
            j_gallery.css('padding','0px');
            /********************************************************/
            /*	PLACE LOADING BOX OVER GALLERY UNTIL IMAGES LOAD	*/
            /********************************************************/
            galleryPos = getPos(j_gallery[0]);
            $('<div>').addClass('loader').css({
                'position':'absolute',
                'zIndex':'1200',
                'opacity':1,
                'top':'0px',
                'left':'0px',
                'width':gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px',
                'height':gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px'
            }).appendTo(j_gallery);

            buildGallery();

        });
    };

    $.fn.galleryView.defaults = {

        show_panels: true,
        show_filmstrip: true,

        panel_width: 600,
        panel_height: 400,
        frame_width: 60,
        frame_height: 40,

        start_frame: 1,
        filmstrip_size: 3,
        transition_speed: 800,
        transition_interval: 4000,

        overlay_opacity: 0.7,
        frame_opacity: 0.3,

        pointer_size: 8,

        nav_theme: 'dark',
        easing: 'swing',

        filmstrip_position: 'bottom',
        overlay_position: 'bottom',

        panel_scale: 'nocrop',
        frame_scale: 'crop',

        frame_gap: 5,

        show_captions: false,
        fade_panels: true,
        pause_on_hover: false,
        // new options in 2.0.1 see CHANGELOG.txt for details
        hover_nav_buttons_images: true,
        keep_nav_buttons_visible: false,
        theme_path: "../../++resource++galleryview/themes/",
        zIndex: 999
    };
})(jQuery);


/* - eea-galleryview.js - */
// https://www.eea.europa.eu/portal_javascripts/eea-galleryview.js?original=1
(function($){$(document).ready(function(){if($.fn.galleryView!==undefined){$.fn.eeaGalleryView=function(gallery_opts){return this.each(function(){if($.data(this,'visited')){return}
var $this=$(this);var $gallery_parent=$this.parent(),$gallery_class=$gallery_parent[0].className,parent_width,parent_height,gallery_width,gallery_height;parent_width=$gallery_parent.width()-10;parent_height=Math.round((parent_width/4) * 3);gallery_width=$gallery_class==='gallery_fancybox_view'?640:parent_width;gallery_height=$gallery_class==='gallery_fancybox_view'?433:parent_height;var defaults={panel_width:gallery_width,panel_height:gallery_height,show_filmstrip:true,show_filmstrip_nav:true,fade_panels:false,frame_width:50,frame_height:50,transition_speed:350,transition_interval:10000};var gal_options=$.extend(defaults,gallery_opts);$this.galleryView(gal_options);$.data(this,'visited','true')})};$("#galleryView, .galleryView").each(function(idx,el){var gal_opts={};if(el.className.indexOf('js-noFilmstrip')!==-1){gal_opts.show_filmstrip=false;gal_opts.fade_panels=true;gal_opts.show_filmstrip_nav=false;gal_opts.keep_nav_buttons_visible=true}
if(!$.isEmptyObject(gal_opts)){$(el).eeaGalleryView(gal_opts)}
else{$(el).eeaGalleryView()}})}})}(jQuery));
