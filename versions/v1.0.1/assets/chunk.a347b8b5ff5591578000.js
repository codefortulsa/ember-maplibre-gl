(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{29:function(t,e,r){t.exports=function(){"use strict"
var t,e,r
function i(i,n){if(t)if(e){var o="var sharedChunk = {}; ("+t+")(sharedChunk); ("+e+")(sharedChunk);",a={}
t(a),(r=n(a)).workerUrl=window.URL.createObjectURL(new Blob([o],{type:"text/javascript"}))}else e=n
else t=n}return i(0,(function(t){function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=i
function i(t,e,r,i){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(i-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=i,this.p2x=r,this.p2y=i}i.prototype.sampleCurveX=function(t){return((this.ax*t+this.bx)*t+this.cx)*t},i.prototype.sampleCurveY=function(t){return((this.ay*t+this.by)*t+this.cy)*t},i.prototype.sampleCurveDerivativeX=function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},i.prototype.solveCurveX=function(t,e){var r,i,n,o,a
for(void 0===e&&(e=1e-6),n=t,a=0;a<8;a++){if(o=this.sampleCurveX(n)-t,Math.abs(o)<e)return n
var s=this.sampleCurveDerivativeX(n)
if(Math.abs(s)<1e-6)break
n-=o/s}if((n=t)<(r=0))return r
if(n>(i=1))return i
for(;r<i;){if(o=this.sampleCurveX(n),Math.abs(o-t)<e)return n
t>o?r=n:i=n,n=.5*(i-r)+r}return n},i.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}
var n=o
function o(t,e){this.x=t,this.y=e}function a(t,e,i,n){var o=new r(t,e,i,n)
return function(t){return o.solve(t)}}o.prototype={clone:function(){return new o(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y
return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[2]*this.x+t[3]*this.y
return this.x=t[0]*this.x+t[1]*this.y,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y
return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),i=r*this.x+e*this.y
return this.x=e*this.x-r*this.y,this.y=i,this},_rotateAround:function(t,e){var r=Math.cos(t),i=Math.sin(t),n=e.y+i*(this.x-e.x)+r*(this.y-e.y)
return this.x=e.x+r*(this.x-e.x)-i*(this.y-e.y),this.y=n,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},o.convert=function(t){return t instanceof o?t:Array.isArray(t)?new o(t[0],t[1]):t}
var s=a(.25,.1,.25,1)
function l(t,e,r){return Math.min(r,Math.max(e,t))}function u(t,e,r){var i=r-e,n=((t-e)%i+i)%i+e
return n===e?r:n}function c(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1]
for(var i=0,n=e;i<n.length;i+=1){var o=n[i]
for(var a in o)t[a]=o[a]}return t}var p=1
function h(){return p++}function f(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}function d(t){return!!t&&/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}function m(t,e){t.forEach((function(t){e[t]&&(e[t]=e[t].bind(e))}))}function y(t,e){return-1!==t.indexOf(e,t.length-e.length)}function g(t,e,r){var i={}
for(var n in t)i[n]=e.call(r||this,t[n],n,t)
return i}function _(t,e,r){var i={}
for(var n in t)e.call(r||this,t[n],n,t)&&(i[n]=t[n])
return i}function v(t){return Array.isArray(t)?t.map(v):"object"==typeof t&&t?g(t,v):t}var x={}
function b(t){x[t]||("undefined"!=typeof console&&console.warn(t),x[t]=!0)}function w(t,e,r){return(r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function S(t){for(var e=0,r=0,i=t.length,n=i-1,o=void 0,a=void 0;r<i;n=r++)e+=((a=t[n]).x-(o=t[r]).x)*(o.y+a.y)
return e}function T(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function I(t){var e={}
if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,(function(t,r,i,n){var o=i||n
return e[r]=!o||o.toLowerCase(),""})),e["max-age"]){var r=parseInt(e["max-age"],10)
isNaN(r)?delete e["max-age"]:e["max-age"]=r}return e}var E=null
function A(t){if(null==E){var e=t.navigator?t.navigator.userAgent:null
E=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")))}return E}function z(t){try{var e=self[t]
return e.setItem("_mapbox_test_",1),e.removeItem("_mapbox_test_"),!0}catch(t){return!1}}var P,C,k,M,D=self.performance&&self.performance.now?self.performance.now.bind(self.performance):Date.now.bind(Date),L=self.requestAnimationFrame||self.mozRequestAnimationFrame||self.webkitRequestAnimationFrame||self.msRequestAnimationFrame,R=self.cancelAnimationFrame||self.mozCancelAnimationFrame||self.webkitCancelAnimationFrame||self.msCancelAnimationFrame,B={now:D,frame:function(t){var e=L(t)
return{cancel:function(){return R(e)}}},getImageData:function(t,e){void 0===e&&(e=0)
var r=self.document.createElement("canvas"),i=r.getContext("2d")
if(!i)throw new Error("failed to create canvas 2d context")
return r.width=t.width,r.height=t.height,i.drawImage(t,0,0,t.width,t.height),i.getImageData(-e,-e,t.width+2*e,t.height+2*e)},resolveURL:function(t){return P||(P=self.document.createElement("a")),P.href=t,P.href},hardwareConcurrency:self.navigator.hardwareConcurrency||4,get devicePixelRatio(){return self.devicePixelRatio},get prefersReducedMotion(){return!!self.matchMedia&&(null==C&&(C=self.matchMedia("(prefers-reduced-motion: reduce)")),C.matches)}},F={API_URL:"https://api.mapbox.com",get EVENTS_URL(){return this.API_URL?0===this.API_URL.indexOf("https://api.mapbox.cn")?"https://events.mapbox.cn/events/v2":0===this.API_URL.indexOf("https://api.mapbox.com")?"https://events.mapbox.com/events/v2":null:null},FEEDBACK_URL:"https://apps.mapbox.com/feedback",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null,MAX_PARALLEL_IMAGE_REQUESTS:16},O={supported:!1,testSupport:function(t){!U&&M&&(V?N(t):k=t)}},U=!1,V=!1
function N(t){var e=t.createTexture()
t.bindTexture(t.TEXTURE_2D,e)
try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,M),t.isContextLost())return
O.supported=!0}catch(t){}t.deleteTexture(e),U=!0}self.document&&((M=self.document.createElement("img")).onload=function(){k&&N(k),k=null,V=!0},M.onerror=function(){U=!0,k=null},M.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=")
var j="01",q=function(t,e){this._transformRequestFn=t,this._customAccessToken=e,this._createSkuToken()}
function Z(t){return 0===t.indexOf("mapbox:")}q.prototype._createSkuToken=function(){var t=function(){for(var t="",e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())]
return{token:["1",j,t].join(""),tokenExpiresAt:Date.now()+432e5}}()
this._skuToken=t.token,this._skuTokenExpiresAt=t.tokenExpiresAt},q.prototype._isSkuTokenExpired=function(){return Date.now()>this._skuTokenExpiresAt},q.prototype.transformRequest=function(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}},q.prototype.normalizeStyleURL=function(t,e){if(!Z(t))return t
var r=K(t)
return r.path="/styles/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},q.prototype.normalizeGlyphsURL=function(t,e){if(!Z(t))return t
var r=K(t)
return r.path="/fonts/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},q.prototype.normalizeSourceURL=function(t,e){if(!Z(t))return t
var r=K(t)
return r.path="/v4/"+r.authority+".json",r.params.push("secure"),this._makeAPIURL(r,this._customAccessToken||e)},q.prototype.normalizeSpriteURL=function(t,e,r,i){var n=K(t)
return Z(t)?(n.path="/styles/v1"+n.path+"/sprite"+e+r,this._makeAPIURL(n,this._customAccessToken||i)):(n.path+=""+e+r,H(n))},q.prototype.normalizeTileURL=function(t,e){if(this._isSkuTokenExpired()&&this._createSkuToken(),t&&!Z(t))return t
var r=K(t)
r.path=r.path.replace(/(\.(png|jpg)\d*)(?=$)/,(B.devicePixelRatio>=2||512===e?"@2x":"")+(O.supported?".webp":"$1")),r.path=r.path.replace(/^.+\/v4\//,"/"),r.path="/v4"+r.path
var i=this._customAccessToken||function(t){for(var e=0,r=t;e<r.length;e+=1){var i=r[e].match(/^access_token=(.*)$/)
if(i)return i[1]}return null}(r.params)||F.ACCESS_TOKEN
return F.REQUIRE_ACCESS_TOKEN&&i&&this._skuToken&&r.params.push("sku="+this._skuToken),this._makeAPIURL(r,i)},q.prototype.canonicalizeTileURL=function(t,e){var r=K(t)
if(!r.path.match(/(^\/v4\/)/)||!r.path.match(/\.[\w]+$/))return t
var i="mapbox://tiles/"
i+=r.path.replace("/v4/","")
var n=r.params
return e&&(n=n.filter((function(t){return!t.match(/^access_token=/)}))),n.length&&(i+="?"+n.join("&")),i},q.prototype.canonicalizeTileset=function(t,e){for(var r=!!e&&Z(e),i=[],n=0,o=t.tiles||[];n<o.length;n+=1){var a=o[n]
X(a)?i.push(this.canonicalizeTileURL(a,r)):i.push(a)}return i},q.prototype._makeAPIURL=function(t,e){var r="See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes",i=K(F.API_URL)
if(t.protocol=i.protocol,t.authority=i.authority,"/"!==i.path&&(t.path=""+i.path+t.path),!F.REQUIRE_ACCESS_TOKEN)return H(t)
if(!(e=e||F.ACCESS_TOKEN))throw new Error("An API access token is required to use Mapbox GL. "+r)
if("s"===e[0])throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+r)
return t.params=t.params.filter((function(t){return-1===t.indexOf("access_token")})),t.params.push("access_token="+e),H(t)}
var G=/^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/|\?|$)/i
function X(t){return G.test(t)}var W=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/
function K(t){var e=t.match(W)
if(!e)throw new Error("Unable to parse URL object")
return{protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function H(t){var e=t.params.length?"?"+t.params.join("&"):""
return t.protocol+"://"+t.authority+t.path+e}function J(t){if(!t)return null
var e=t.split(".")
if(!e||3!==e.length)return null
try{return JSON.parse(decodeURIComponent(self.atob(e[1]).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join("")))}catch(t){return null}}var Y=function(t){this.type=t,this.anonId=null,this.eventData={},this.queue=[],this.pendingRequest=null}
Y.prototype.getStorageKey=function(t){var e,r=J(F.ACCESS_TOKEN)
return e=r&&r.u?self.btoa(encodeURIComponent(r.u).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode(Number("0x"+e))}))):F.ACCESS_TOKEN||"",t?"mapbox.eventData."+t+":"+e:"mapbox.eventData:"+e},Y.prototype.fetchEventData=function(){var t=z("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid")
if(t)try{var i=self.localStorage.getItem(e)
i&&(this.eventData=JSON.parse(i))
var n=self.localStorage.getItem(r)
n&&(this.anonId=n)}catch(t){b("Unable to read from LocalStorage")}},Y.prototype.saveEventData=function(){var t=z("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid")
if(t)try{self.localStorage.setItem(r,this.anonId),Object.keys(this.eventData).length>=1&&self.localStorage.setItem(e,JSON.stringify(this.eventData))}catch(t){b("Unable to write to LocalStorage")}},Y.prototype.processRequests=function(t){},Y.prototype.postEvent=function(t,e,r,i){var n=this
if(F.EVENTS_URL){var o=K(F.EVENTS_URL)
o.params.push("access_token="+(i||F.ACCESS_TOKEN||""))
var a={event:this.type,created:new Date(t).toISOString(),sdkIdentifier:"mapbox-gl-js",sdkVersion:"1.10.0",skuId:j,userId:this.anonId},s=e?c(a,e):a,l={url:H(o),headers:{"Content-Type":"text/plain"},body:JSON.stringify([s])}
this.pendingRequest=vt(l,(function(t){n.pendingRequest=null,r(t),n.saveEventData(),n.processRequests(i)}))}},Y.prototype.queueRequest=function(t,e){this.queue.push(t),this.processRequests(e)}
var Q,$,tt=function(t){function e(){t.call(this,"map.load"),this.success={},this.skuToken=""}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.postMapLoadEvent=function(t,e,r,i){this.skuToken=r,(F.EVENTS_URL&&i||F.ACCESS_TOKEN&&Array.isArray(t)&&t.some((function(t){return Z(t)||X(t)})))&&this.queueRequest({id:e,timestamp:Date.now()},i)},e.prototype.processRequests=function(t){var e=this
if(!this.pendingRequest&&0!==this.queue.length){var r=this.queue.shift(),i=r.id,n=r.timestamp
i&&this.success[i]||(this.anonId||this.fetchEventData(),d(this.anonId)||(this.anonId=f()),this.postEvent(n,{skuToken:this.skuToken},(function(t){t||i&&(e.success[i]=!0)}),t))}},e}(Y),et=new(function(t){function e(e){t.call(this,"appUserTurnstile"),this._customAccessToken=e}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.postTurnstileEvent=function(t,e){F.EVENTS_URL&&F.ACCESS_TOKEN&&Array.isArray(t)&&t.some((function(t){return Z(t)||X(t)}))&&this.queueRequest(Date.now(),e)},e.prototype.processRequests=function(t){var e=this
if(!this.pendingRequest&&0!==this.queue.length){this.anonId&&this.eventData.lastSuccess&&this.eventData.tokenU||this.fetchEventData()
var r=J(F.ACCESS_TOKEN),i=r?r.u:F.ACCESS_TOKEN,n=i!==this.eventData.tokenU
d(this.anonId)||(this.anonId=f(),n=!0)
var o=this.queue.shift()
if(this.eventData.lastSuccess){var a=new Date(this.eventData.lastSuccess),s=new Date(o),l=(o-this.eventData.lastSuccess)/864e5
n=n||l>=1||l<-1||a.getDate()!==s.getDate()}else n=!0
if(!n)return this.processRequests()
this.postEvent(o,{"enabled.telemetry":!1},(function(t){t||(e.eventData.lastSuccess=o,e.eventData.tokenU=i)}),t)}},e}(Y)),rt=et.postTurnstileEvent.bind(et),it=new tt,nt=it.postMapLoadEvent.bind(it),ot=500,at=50
function st(){self.caches&&!Q&&(Q=self.caches.open("mapbox-tiles"))}function lt(t){var e=t.indexOf("?")
return e<0?t:t.slice(0,e)}var ut,ct=1/0
function pt(){return null==ut&&(ut=self.OffscreenCanvas&&new self.OffscreenCanvas(1,1).getContext("2d")&&"function"==typeof self.createImageBitmap),ut}var ht={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"}
"function"==typeof Object.freeze&&Object.freeze(ht)
var ft,dt,mt=function(t){function e(e,r,i){401===r&&X(i)&&(e+=": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes"),t.call(this,e),this.status=r,this.url=i,this.name=this.constructor.name,this.message=e}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+" ("+this.status+"): "+this.url},e}(Error),yt=T()?function(){return self.worker&&self.worker.referrer}:function(){return("blob:"===self.location.protocol?self.parent:self).location.href},gt=function(t,e){if(!(/^file:/.test(r=t.url)||/^file:/.test(yt())&&!/^\w+:/.test(r))){if(self.fetch&&self.Request&&self.AbortController&&self.Request.prototype.hasOwnProperty("signal"))return function(t,e){var r,i=new self.AbortController,n=new self.Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:yt(),signal:i.signal}),o=!1,a=!1,s=(r=n.url).indexOf("sku=")>0&&X(r)
"json"===t.type&&n.headers.set("Accept","application/json")
var l=function(r,i,o){if(!a){if(r&&"SecurityError"!==r.message&&b(r),i&&o)return u(i)
var l=Date.now()
self.fetch(n).then((function(r){if(r.ok){var i=s?r.clone():null
return u(r,i,l)}return e(new mt(r.statusText,r.status,t.url))})).catch((function(t){20!==t.code&&e(new Error(t.message))}))}},u=function(r,i,s){("arrayBuffer"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then((function(t){a||(i&&s&&function(t,e,r){if(st(),Q){var i={status:e.status,statusText:e.statusText,headers:new self.Headers}
e.headers.forEach((function(t,e){return i.headers.set(e,t)}))
var n=I(e.headers.get("Cache-Control")||"")
n["no-store"]||(n["max-age"]&&i.headers.set("Expires",new Date(r+1e3*n["max-age"]).toUTCString()),new Date(i.headers.get("Expires")).getTime()-r<42e4||function(t,e){if(void 0===$)try{new Response(new ReadableStream),$=!0}catch(t){$=!1}$?e(t.body):t.blob().then(e)}(e,(function(e){var r=new self.Response(e,i)
st(),Q&&Q.then((function(e){return e.put(lt(t.url),r)})).catch((function(t){return b(t.message)}))})))}}(n,i,s),o=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")))})).catch((function(t){a||e(new Error(t.message))}))}
return s?function(t,e){if(st(),!Q)return e(null)
var r=lt(t.url)
Q.then((function(t){t.match(r).then((function(i){var n=function(t){if(!t)return!1
var e=new Date(t.headers.get("Expires")||0),r=I(t.headers.get("Cache-Control")||"")
return e>Date.now()&&!r["no-cache"]}(i)
t.delete(r),n&&t.put(r,i.clone()),e(null,i,n)})).catch(e)})).catch(e)}(n,l):l(null,null),{cancel:function(){a=!0,o||i.abort()}}}(t,e)
if(T()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e,void 0,!0)}var r
return function(t,e){var r=new self.XMLHttpRequest
for(var i in r.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(r.responseType="arraybuffer"),t.headers)r.setRequestHeader(i,t.headers[i])
return"json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=function(){e(new Error(r.statusText))},r.onload=function(){if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){var i=r.response
if("json"===t.type)try{i=JSON.parse(r.response)}catch(t){return e(t)}e(null,i,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"))}else e(new mt(r.statusText,r.status,t.url))},r.send(t.body),{cancel:function(){return r.abort()}}}(t,e)},_t=function(t,e){return gt(c(t,{type:"arrayBuffer"}),e)},vt=function(t,e){return gt(c(t,{method:"POST"}),e)}
ft=[],dt=0
var xt=function(t,e){if(O.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*"),dt>=F.MAX_PARALLEL_IMAGE_REQUESTS){var r={requestParameters:t,callback:e,cancelled:!1,cancel:function(){this.cancelled=!0}}
return ft.push(r),r}dt++
var i=!1,n=function(){if(!i)for(i=!0,dt--;ft.length&&dt<F.MAX_PARALLEL_IMAGE_REQUESTS;){var t=ft.shift()
t.cancelled||(t.cancel=xt(t.requestParameters,t.callback).cancel)}},o=_t(t,(function(t,r,i,o){n(),t?e(t):r&&(pt()?function(t,e){var r=new self.Blob([new Uint8Array(t)],{type:"image/png"})
self.createImageBitmap(r).then((function(t){e(null,t)})).catch((function(t){e(new Error("Could not load image because of "+t.message+". Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))}))}(r,e):function(t,e,r,i){var n=new self.Image,o=self.URL
n.onload=function(){e(null,n),o.revokeObjectURL(n.src)},n.onerror=function(){return e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))}
var a=new self.Blob([new Uint8Array(t)],{type:"image/png"})
n.cacheControl=r,n.expires=i,n.src=t.byteLength?o.createObjectURL(a):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII="}(r,e,i,o))}))
return{cancel:function(){o.cancel(),n()}}}
function bt(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e))}function wt(t,e,r){if(r&&r[t]){var i=r[t].indexOf(e);-1!==i&&r[t].splice(i,1)}}var St=function(t,e){void 0===e&&(e={}),c(this,e),this.type=t},Tt=function(t){function e(e,r){void 0===r&&(r={}),t.call(this,"error",c({error:e},r))}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(St),It=function(){}
It.prototype.on=function(t,e){return this._listeners=this._listeners||{},bt(t,e,this._listeners),this},It.prototype.off=function(t,e){return wt(t,e,this._listeners),wt(t,e,this._oneTimeListeners),this},It.prototype.once=function(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},bt(t,e,this._oneTimeListeners),this},It.prototype.fire=function(t,e){"string"==typeof t&&(t=new St(t,e||{}))
var r=t.type
if(this.listens(r)){t.target=this
for(var i=0,n=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];i<n.length;i+=1)n[i].call(this,t)
for(var o=0,a=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];o<a.length;o+=1){var s=a[o]
wt(r,s,this._oneTimeListeners),s.call(this,t)}var l=this._eventedParent
l&&(c(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),l.fire(t))}else t instanceof Tt&&console.error(t.error)
return this},It.prototype.listens=function(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)},It.prototype.setEventedParent=function(t,e){return this._eventedParent=t,this._eventedParentData=e,this}
var Et={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},promoteId:{type:"promoteId"},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1},promoteId:{type:"promoteId"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},expression_name:{type:"enum",values:{let:{group:"Variable binding"},var:{group:"Variable binding"},literal:{group:"Types"},array:{group:"Types"},at:{group:"Lookup"},in:{group:"Lookup"},"index-of":{group:"Lookup"},case:{group:"Decision"},match:{group:"Decision"},coalesce:{group:"Decision"},step:{group:"Ramps, scales, curves"},interpolate:{group:"Ramps, scales, curves"},"interpolate-hcl":{group:"Ramps, scales, curves"},"interpolate-lab":{group:"Ramps, scales, curves"},ln2:{group:"Math"},pi:{group:"Math"},e:{group:"Math"},typeof:{group:"Types"},string:{group:"Types"},number:{group:"Types"},boolean:{group:"Types"},object:{group:"Types"},collator:{group:"Types"},format:{group:"Types"},image:{group:"Types"},"number-format":{group:"Types"},"to-string":{group:"Types"},"to-number":{group:"Types"},"to-boolean":{group:"Types"},"to-rgba":{group:"Color"},"to-color":{group:"Types"},rgb:{group:"Color"},rgba:{group:"Color"},get:{group:"Lookup"},has:{group:"Lookup"},length:{group:"Lookup"},properties:{group:"Feature data"},"feature-state":{group:"Feature data"},"geometry-type":{group:"Feature data"},id:{group:"Feature data"},zoom:{group:"Zoom"},"heatmap-density":{group:"Heatmap"},"line-progress":{group:"Feature data"},accumulated:{group:"Feature data"},"+":{group:"Math"},"*":{group:"Math"},"-":{group:"Math"},"/":{group:"Math"},"%":{group:"Math"},"^":{group:"Math"},sqrt:{group:"Math"},log10:{group:"Math"},ln:{group:"Math"},log2:{group:"Math"},sin:{group:"Math"},cos:{group:"Math"},tan:{group:"Math"},asin:{group:"Math"},acos:{group:"Math"},atan:{group:"Math"},min:{group:"Math"},max:{group:"Math"},round:{group:"Math"},abs:{group:"Math"},ceil:{group:"Math"},floor:{group:"Math"},"==":{group:"Decision"},"!=":{group:"Decision"},">":{group:"Decision"},"<":{group:"Decision"},">=":{group:"Decision"},"<=":{group:"Decision"},all:{group:"Decision"},any:{group:"Decision"},"!":{group:"Decision"},within:{group:"Decision"},"is-supported-script":{group:"String"},upcase:{group:"String"},downcase:{group:"String"},concat:{group:"String"},"resolved-locale":{group:"String"},slice:{group:"String"}}},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}},promoteId:{"*":{type:"string"}}},At=function(t,e,r,i){this.message=(t?t+": ":"")+r,i&&(this.identifier=i),null!=e&&e.__line__&&(this.line=e.__line__)}
function zt(t){var e=t.value
return e?[new At(t.key,e,"constants have been deprecated as of v8")]:[]}function Pt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1]
for(var i=0,n=e;i<n.length;i+=1){var o=n[i]
for(var a in o)t[a]=o[a]}return t}function Ct(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function kt(t){if(Array.isArray(t))return t.map(kt)
if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){var e={}
for(var r in t)e[r]=kt(t[r])
return e}return Ct(t)}var Mt=function(t){function e(e,r){t.call(this,r),this.message=r,this.key=e}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(Error),Dt=function(t,e){void 0===e&&(e=[]),this.parent=t,this.bindings={}
for(var r=0,i=e;r<i.length;r+=1){var n=i[r]
this.bindings[n[0]]=n[1]}}
Dt.prototype.concat=function(t){return new Dt(this,t)},Dt.prototype.get=function(t){if(this.bindings[t])return this.bindings[t]
if(this.parent)return this.parent.get(t)
throw new Error(t+" not found in scope.")},Dt.prototype.has=function(t){return!!this.bindings[t]||!!this.parent&&this.parent.has(t)}
var Lt={kind:"null"},Rt={kind:"number"},Bt={kind:"string"},Ft={kind:"boolean"},Ot={kind:"color"},Ut={kind:"object"},Vt={kind:"value"},Nt={kind:"collator"},jt={kind:"formatted"},qt={kind:"resolvedImage"}
function Zt(t,e){return{kind:"array",itemType:t,N:e}}function Gt(t){if("array"===t.kind){var e=Gt(t.itemType)
return"number"==typeof t.N?"array<"+e+", "+t.N+">":"value"===t.itemType.kind?"array":"array<"+e+">"}return t.kind}var Xt=[Lt,Rt,Bt,Ft,Ot,jt,Ut,Zt(Vt),qt]
function Wt(t,e){if("error"===e.kind)return null
if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!Wt(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else{if(t.kind===e.kind)return null
if("value"===t.kind)for(var r=0,i=Xt;r<i.length;r+=1)if(!Wt(i[r],e))return null}return"Expected "+Gt(t)+" but found "+Gt(e)+" instead."}function Kt(t,e){return e.some((function(e){return e.kind===t.kind}))}function Ht(t,e){return e.some((function(e){return"null"===e?null===t:"array"===e?Array.isArray(t):"object"===e?t&&!Array.isArray(t)&&"object"==typeof t:e===typeof t}))}var Jt=e((function(t,e){var r={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]}
function i(t){return(t=Math.round(t))<0?0:t>255?255:t}function n(t){return i("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function o(t){return(e="%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))<0?0:e>1?1:e
var e}function a(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{e.parseCSSColor=function(t){var e,s=t.replace(/ /g,"").toLowerCase()
if(s in r)return r[s].slice()
if("#"===s[0])return 4===s.length?(e=parseInt(s.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===s.length&&(e=parseInt(s.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null
var l=s.indexOf("("),u=s.indexOf(")")
if(-1!==l&&u+1===s.length){var c=s.substr(0,l),p=s.substr(l+1,u-(l+1)).split(","),h=1
switch(c){case"rgba":if(4!==p.length)return null
h=o(p.pop())
case"rgb":return 3!==p.length?null:[n(p[0]),n(p[1]),n(p[2]),h]
case"hsla":if(4!==p.length)return null
h=o(p.pop())
case"hsl":if(3!==p.length)return null
var f=(parseFloat(p[0])%360+360)%360/360,d=o(p[1]),m=o(p[2]),y=m<=.5?m*(d+1):m+d-m*d,g=2*m-y
return[i(255*a(g,y,f+1/3)),i(255*a(g,y,f)),i(255*a(g,y,f-1/3)),h]
default:return null}}return null}}catch(t){}})).parseCSSColor,Yt=function(t,e,r,i){void 0===i&&(i=1),this.r=t,this.g=e,this.b=r,this.a=i}
Yt.parse=function(t){if(t){if(t instanceof Yt)return t
if("string"==typeof t){var e=Jt(t)
if(e)return new Yt(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3])}}},Yt.prototype.toString=function(){var t=this.toArray(),e=t[1],r=t[2],i=t[3]
return"rgba("+Math.round(t[0])+","+Math.round(e)+","+Math.round(r)+","+i+")"},Yt.prototype.toArray=function(){var t=this.a
return 0===t?[0,0,0,0]:[255*this.r/t,255*this.g/t,255*this.b/t,t]},Yt.black=new Yt(0,0,0,1),Yt.white=new Yt(1,1,1,1),Yt.transparent=new Yt(0,0,0,0),Yt.red=new Yt(1,0,0,1)
var Qt=function(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"})}
Qt.prototype.compare=function(t,e){return this.collator.compare(t,e)},Qt.prototype.resolvedLocale=function(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale}
var $t=function(t,e,r,i,n){this.text=t,this.image=e,this.scale=r,this.fontStack=i,this.textColor=n},te=function(t){this.sections=t}
te.fromString=function(t){return new te([new $t(t,null,null,null,null)])},te.prototype.isEmpty=function(){return 0===this.sections.length||!this.sections.some((function(t){return 0!==t.text.length||t.image&&0!==t.image.name.length}))},te.factory=function(t){return t instanceof te?t:te.fromString(t)},te.prototype.toString=function(){return 0===this.sections.length?"":this.sections.map((function(t){return t.text})).join("")},te.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var i=r[e]
if(i.image)t.push(["image",i.image.name])
else{t.push(i.text)
var n={}
i.fontStack&&(n["text-font"]=["literal",i.fontStack.split(",")]),i.scale&&(n["font-scale"]=i.scale),i.textColor&&(n["text-color"]=["rgba"].concat(i.textColor.toArray())),t.push(n)}}return t}
var ee=function(t){this.name=t.name,this.available=t.available}
function re(t,e,r,i){return"number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===i||"number"==typeof i&&i>=0&&i<=1?null:"Invalid rgba value ["+[t,e,r,i].join(", ")+"]: 'a' must be between 0 and 1.":"Invalid rgba value ["+("number"==typeof i?[t,e,r,i]:[t,e,r]).join(", ")+"]: 'r', 'g', and 'b' must be between 0 and 255."}function ie(t){if(null===t)return!0
if("string"==typeof t)return!0
if("boolean"==typeof t)return!0
if("number"==typeof t)return!0
if(t instanceof Yt)return!0
if(t instanceof Qt)return!0
if(t instanceof te)return!0
if(t instanceof ee)return!0
if(Array.isArray(t)){for(var e=0,r=t;e<r.length;e+=1)if(!ie(r[e]))return!1
return!0}if("object"==typeof t){for(var i in t)if(!ie(t[i]))return!1
return!0}return!1}function ne(t){if(null===t)return Lt
if("string"==typeof t)return Bt
if("boolean"==typeof t)return Ft
if("number"==typeof t)return Rt
if(t instanceof Yt)return Ot
if(t instanceof Qt)return Nt
if(t instanceof te)return jt
if(t instanceof ee)return qt
if(Array.isArray(t)){for(var e,r=t.length,i=0,n=t;i<n.length;i+=1){var o=ne(n[i])
if(e){if(e===o)continue
e=Vt
break}e=o}return Zt(e||Vt,r)}return Ut}function oe(t){var e=typeof t
return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Yt||t instanceof te||t instanceof ee?t.toString():JSON.stringify(t)}ee.prototype.toString=function(){return this.name},ee.fromString=function(t){return t?new ee({name:t,available:!1}):null},ee.prototype.serialize=function(){return["image",this.name]}
var ae=function(t,e){this.type=t,this.value=e}
ae.parse=function(t,e){if(2!==t.length)return e.error("'literal' expression requires exactly one argument, but found "+(t.length-1)+" instead.")
if(!ie(t[1]))return e.error("invalid value")
var r=t[1],i=ne(r),n=e.expectedType
return"array"!==i.kind||0!==i.N||!n||"array"!==n.kind||"number"==typeof n.N&&0!==n.N||(i=n),new ae(i,r)},ae.prototype.evaluate=function(){return this.value},ae.prototype.eachChild=function(){},ae.prototype.outputDefined=function(){return!0},ae.prototype.serialize=function(){return"array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof Yt?["rgba"].concat(this.value.toArray()):this.value instanceof te?this.value.serialize():this.value}
var se=function(t){this.name="ExpressionEvaluationError",this.message=t}
se.prototype.toJSON=function(){return this.message}
var le={string:Bt,number:Rt,boolean:Ft,object:Ut},ue=function(t,e){this.type=t,this.args=e}
ue.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.")
var r,i=1,n=t[0]
if("array"===n){var o,a
if(t.length>2){var s=t[1]
if("string"!=typeof s||!(s in le)||"object"===s)return e.error('The item type argument of "array" must be one of string, number, boolean',1)
o=le[s],i++}else o=Vt
if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2)
a=t[2],i++}r=Zt(o,a)}else r=le[n]
for(var l=[];i<t.length;i++){var u=e.parse(t[i],i,Vt)
if(!u)return null
l.push(u)}return new ue(r,l)},ue.prototype.evaluate=function(t){for(var e=0;e<this.args.length;e++){var r=this.args[e].evaluate(t)
if(!Wt(this.type,ne(r)))return r
if(e===this.args.length-1)throw new se("Expected value to be of type "+Gt(this.type)+", but found "+Gt(ne(r))+" instead.")}return null},ue.prototype.eachChild=function(t){this.args.forEach(t)},ue.prototype.outputDefined=function(){return this.args.every((function(t){return t.outputDefined()}))},ue.prototype.serialize=function(){var t=this.type,e=[t.kind]
if("array"===t.kind){var r=t.itemType
if("string"===r.kind||"number"===r.kind||"boolean"===r.kind){e.push(r.kind)
var i=t.N;("number"==typeof i||this.args.length>1)&&e.push(i)}}return e.concat(this.args.map((function(t){return t.serialize()})))}
var ce=function(t){this.type=jt,this.sections=t}
ce.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.")
var r=t[1]
if(!Array.isArray(r)&&"object"==typeof r)return e.error("First argument must be an image or text section.")
for(var i=[],n=!1,o=1;o<=t.length-1;++o){var a=t[o]
if(n&&"object"==typeof a&&!Array.isArray(a)){n=!1
var s=null
if(a["font-scale"]&&!(s=e.parse(a["font-scale"],1,Rt)))return null
var l=null
if(a["text-font"]&&!(l=e.parse(a["text-font"],1,Zt(Bt))))return null
var u=null
if(a["text-color"]&&!(u=e.parse(a["text-color"],1,Ot)))return null
var c=i[i.length-1]
c.scale=s,c.font=l,c.textColor=u}else{var p=e.parse(t[o],1,Vt)
if(!p)return null
var h=p.type.kind
if("string"!==h&&"value"!==h&&"null"!==h&&"resolvedImage"!==h)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.")
n=!0,i.push({content:p,scale:null,font:null,textColor:null})}}return new ce(i)},ce.prototype.evaluate=function(t){return new te(this.sections.map((function(e){var r=e.content.evaluate(t)
return ne(r)===qt?new $t("",r,null,null,null):new $t(oe(r),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))},ce.prototype.eachChild=function(t){for(var e=0,r=this.sections;e<r.length;e+=1){var i=r[e]
t(i.content),i.scale&&t(i.scale),i.font&&t(i.font),i.textColor&&t(i.textColor)}},ce.prototype.outputDefined=function(){return!1},ce.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var i=r[e]
t.push(i.content.serialize())
var n={}
i.scale&&(n["font-scale"]=i.scale.serialize()),i.font&&(n["text-font"]=i.font.serialize()),i.textColor&&(n["text-color"]=i.textColor.serialize()),t.push(n)}return t}
var pe=function(t){this.type=qt,this.input=t}
pe.parse=function(t,e){if(2!==t.length)return e.error("Expected two arguments.")
var r=e.parse(t[1],1,Bt)
return r?new pe(r):e.error("No image name provided.")},pe.prototype.evaluate=function(t){var e=this.input.evaluate(t),r=ee.fromString(e)
return r&&t.availableImages&&(r.available=t.availableImages.indexOf(e)>-1),r},pe.prototype.eachChild=function(t){t(this.input)},pe.prototype.outputDefined=function(){return!1},pe.prototype.serialize=function(){return["image",this.input.serialize()]}
var he={"to-boolean":Ft,"to-color":Ot,"to-number":Rt,"to-string":Bt},fe=function(t,e){this.type=t,this.args=e}
fe.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.")
var r=t[0]
if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.")
for(var i=he[r],n=[],o=1;o<t.length;o++){var a=e.parse(t[o],o,Vt)
if(!a)return null
n.push(a)}return new fe(i,n)},fe.prototype.evaluate=function(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t))
if("color"===this.type.kind){for(var e,r,i=0,n=this.args;i<n.length;i+=1){if(r=null,(e=n[i].evaluate(t))instanceof Yt)return e
if("string"==typeof e){var o=t.parseColor(e)
if(o)return o}else if(Array.isArray(e)&&!(r=e.length<3||e.length>4?"Invalid rbga value "+JSON.stringify(e)+": expected an array containing either three or four numeric values.":re(e[0],e[1],e[2],e[3])))return new Yt(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new se(r||"Could not parse color from value '"+("string"==typeof e?e:String(JSON.stringify(e)))+"'")}if("number"===this.type.kind){for(var a=null,s=0,l=this.args;s<l.length;s+=1){if(null===(a=l[s].evaluate(t)))return 0
var u=Number(a)
if(!isNaN(u))return u}throw new se("Could not convert "+JSON.stringify(a)+" to number.")}return"formatted"===this.type.kind?te.fromString(oe(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?ee.fromString(oe(this.args[0].evaluate(t))):oe(this.args[0].evaluate(t))},fe.prototype.eachChild=function(t){this.args.forEach(t)},fe.prototype.outputDefined=function(){return this.args.every((function(t){return t.outputDefined()}))},fe.prototype.serialize=function(){if("formatted"===this.type.kind)return new ce([{content:this.args[0],scale:null,font:null,textColor:null}]).serialize()
if("resolvedImage"===this.type.kind)return new pe(this.args[0]).serialize()
var t=["to-"+this.type.kind]
return this.eachChild((function(e){t.push(e.serialize())})),t}
var de=["Unknown","Point","LineString","Polygon"],me=function(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null,this.canonical=null}
me.prototype.id=function(){return this.feature&&"id"in this.feature?this.feature.id:null},me.prototype.geometryType=function(){return this.feature?"number"==typeof this.feature.type?de[this.feature.type]:this.feature.type:null},me.prototype.geometry=function(){return this.feature&&"geometry"in this.feature?this.feature.geometry:null},me.prototype.canonicalID=function(){return this.canonical},me.prototype.properties=function(){return this.feature&&this.feature.properties||{}},me.prototype.parseColor=function(t){var e=this._parseColorCache[t]
return e||(e=this._parseColorCache[t]=Yt.parse(t)),e}
var ye=function(t,e,r,i){this.name=t,this.type=e,this._evaluate=r,this.args=i}
ye.prototype.evaluate=function(t){return this._evaluate(t,this.args)},ye.prototype.eachChild=function(t){this.args.forEach(t)},ye.prototype.outputDefined=function(){return!1},ye.prototype.serialize=function(){return[this.name].concat(this.args.map((function(t){return t.serialize()})))},ye.parse=function(t,e){var r,i=t[0],n=ye.definitions[i]
if(!n)return e.error('Unknown expression "'+i+'". If you wanted a literal array, use ["literal", [...]].',0)
for(var o=Array.isArray(n)?n[0]:n.type,a=Array.isArray(n)?[[n[1],n[2]]]:n.overloads,s=a.filter((function(e){var r=e[0]
return!Array.isArray(r)||r.length===t.length-1})),l=null,u=0,c=s;u<c.length;u+=1){var p=c[u],h=p[0],f=p[1]
l=new Oe(e.registry,e.path,null,e.scope)
for(var d=[],m=!1,y=1;y<t.length;y++){var g=t[y],_=Array.isArray(h)?h[y-1]:h.type,v=l.parse(g,1+d.length,_)
if(!v){m=!0
break}d.push(v)}if(!m)if(Array.isArray(h)&&h.length!==d.length)l.error("Expected "+h.length+" arguments, but found "+d.length+" instead.")
else{for(var x=0;x<d.length;x++){var b=Array.isArray(h)?h[x]:h.type,w=d[x]
l.concat(x+1).checkSubtype(b,w.type)}if(0===l.errors.length)return new ye(i,o,f,d)}}if(1===s.length)(r=e.errors).push.apply(r,l.errors)
else{for(var S=(s.length?s:a).map((function(t){var e
return e=t[0],Array.isArray(e)?"("+e.map(Gt).join(", ")+")":"("+Gt(e.type)+"...)"})).join(" | "),T=[],I=1;I<t.length;I++){var E=e.parse(t[I],1+T.length)
if(!E)return null
T.push(Gt(E.type))}e.error("Expected arguments of type "+S+", but found ("+T.join(", ")+") instead.")}return null},ye.register=function(t,e){for(var r in ye.definitions=e,e)t[r]=ye}
var ge=function(t,e,r){this.type=Nt,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e}
function _e(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1])}function ve(t,e){return!(t[0]<=e[0]||t[2]>=e[2]||t[1]<=e[1]||t[3]>=e[3])}function xe(t,e){var r=(180+t[0])/360,i=(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t[1]*Math.PI/360)))/360,n=Math.pow(2,e.z)
return[Math.round(r*n*8192),Math.round(i*n*8192)]}function be(t,e,r){return e[1]>t[1]!=r[1]>t[1]&&t[0]<(r[0]-e[0])*(t[1]-e[1])/(r[1]-e[1])+e[0]}function we(t,e){for(var r,i,n,o,a,s,l,u=!1,c=0,p=e.length;c<p;c++)for(var h=e[c],f=0,d=h.length;f<d-1;f++){if((o=(r=t)[0]-(i=h[f])[0])*(l=r[1]-(n=h[f+1])[1])-(s=r[0]-n[0])*(a=r[1]-i[1])==0&&o*s<=0&&a*l<=0)return!1
be(t,h[f],h[f+1])&&(u=!u)}return u}function Se(t,e){for(var r=0;r<e.length;r++)if(we(t,e[r]))return!0
return!1}function Te(t,e,r,i){var n=i[0]-r[0],o=i[1]-r[1],a=(t[0]-r[0])*o-n*(t[1]-r[1]),s=(e[0]-r[0])*o-n*(e[1]-r[1])
return a>0&&s<0||a<0&&s>0}function Ie(t,e,r){for(var i=0,n=r;i<n.length;i+=1)for(var o=n[i],a=0;a<o.length-1;++a)if(0!=(p=[(c=o[a+1])[0]-(u=o[a])[0],c[1]-u[1]])[0]*(h=[(l=e)[0]-(s=t)[0],l[1]-s[1]])[1]-p[1]*h[0]&&Te(s,l,u,c)&&Te(u,c,s,l))return!0
var s,l,u,c,p,h
return!1}function Ee(t,e){for(var r=0;r<t.length;++r)if(!we(t[r],e))return!1
for(var i=0;i<t.length-1;++i)if(Ie(t[i],t[i+1],e))return!1
return!0}function Ae(t,e){for(var r=0;r<e.length;r++)if(Ee(t,e[r]))return!0
return!1}function ze(t,e,r){for(var i=[],n=0;n<t.length;n++){for(var o=[],a=0;a<t[n].length;a++){var s=xe(t[n][a],r)
_e(e,s),o.push(s)}i.push(o)}return i}function Pe(t,e,r){for(var i=[],n=0;n<t.length;n++){var o=ze(t[n],e,r)
i.push(o)}return i}function Ce(t,e,r,i){if(t[0]<r[0]||t[0]>r[2]){var n=.5*i,o=t[0]-r[0]>n?-i:r[0]-t[0]>n?i:0
0===o&&(o=t[0]-r[2]>n?-i:r[2]-t[0]>n?i:0),t[0]+=o}_e(e,t)}function ke(t,e,r,i){for(var n=8192*Math.pow(2,i.z),o=[8192*i.x,8192*i.y],a=[],s=0,l=t;s<l.length;s+=1)for(var u=0,c=l[s];u<c.length;u+=1){var p=c[u],h=[p.x+o[0],p.y+o[1]]
Ce(h,e,r,n),a.push(h)}return a}function Me(t,e,r,i){for(var n,o=8192*Math.pow(2,i.z),a=[8192*i.x,8192*i.y],s=[],l=0,u=t;l<u.length;l+=1){for(var c=[],p=0,h=u[l];p<h.length;p+=1){var f=h[p],d=[f.x+a[0],f.y+a[1]]
_e(e,d),c.push(d)}s.push(c)}if(e[2]-e[0]<=o/2){(n=e)[0]=n[1]=1/0,n[2]=n[3]=-1/0
for(var m=0,y=s;m<y.length;m+=1)for(var g=0,_=y[m];g<_.length;g+=1)Ce(_[g],e,r,o)}return s}ge.parse=function(t,e){if(2!==t.length)return e.error("Expected one argument.")
var r=t[1]
if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.")
var i=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,Ft)
if(!i)return null
var n=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,Ft)
if(!n)return null
var o=null
return r.locale&&!(o=e.parse(r.locale,1,Bt))?null:new ge(i,n,o)},ge.prototype.evaluate=function(t){return new Qt(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)},ge.prototype.eachChild=function(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale)},ge.prototype.outputDefined=function(){return!1},ge.prototype.serialize=function(){var t={}
return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]}
var De=function(t,e){this.type=Ft,this.geojson=t,this.geometries=e}
function Le(t){if(t instanceof ye){if("get"===t.name&&1===t.args.length)return!1
if("feature-state"===t.name)return!1
if("has"===t.name&&1===t.args.length)return!1
if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return!1
if(/^filter-/.test(t.name))return!1}if(t instanceof De)return!1
var e=!0
return t.eachChild((function(t){e&&!Le(t)&&(e=!1)})),e}function Re(t){if(t instanceof ye&&"feature-state"===t.name)return!1
var e=!0
return t.eachChild((function(t){e&&!Re(t)&&(e=!1)})),e}function Be(t,e){if(t instanceof ye&&e.indexOf(t.name)>=0)return!1
var r=!0
return t.eachChild((function(t){r&&!Be(t,e)&&(r=!1)})),r}De.parse=function(t,e){if(2!==t.length)return e.error("'within' expression requires exactly one argument, but found "+(t.length-1)+" instead.")
if(ie(t[1])){var r=t[1]
if("FeatureCollection"===r.type)for(var i=0;i<r.features.length;++i){var n=r.features[i].geometry.type
if("Polygon"===n||"MultiPolygon"===n)return new De(r,r.features[i].geometry)}else if("Feature"===r.type){var o=r.geometry.type
if("Polygon"===o||"MultiPolygon"===o)return new De(r,r.geometry)}else if("Polygon"===r.type||"MultiPolygon"===r.type)return new De(r,r)}return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")},De.prototype.evaluate=function(t){if(null!=t.geometry()&&null!=t.canonicalID()){if("Point"===t.geometryType())return function(t,e){var r=[1/0,1/0,-1/0,-1/0],i=[1/0,1/0,-1/0,-1/0],n=t.canonicalID()
if("Polygon"===e.type){var o=ze(e.coordinates,i,n),a=ke(t.geometry(),r,i,n)
if(!ve(r,i))return!1
for(var s=0,l=a;s<l.length;s+=1)if(!we(l[s],o))return!1}if("MultiPolygon"===e.type){var u=Pe(e.coordinates,i,n),c=ke(t.geometry(),r,i,n)
if(!ve(r,i))return!1
for(var p=0,h=c;p<h.length;p+=1)if(!Se(h[p],u))return!1}return!0}(t,this.geometries)
if("LineString"===t.geometryType())return function(t,e){var r=[1/0,1/0,-1/0,-1/0],i=[1/0,1/0,-1/0,-1/0],n=t.canonicalID()
if("Polygon"===e.type){var o=ze(e.coordinates,i,n),a=Me(t.geometry(),r,i,n)
if(!ve(r,i))return!1
for(var s=0,l=a;s<l.length;s+=1)if(!Ee(l[s],o))return!1}if("MultiPolygon"===e.type){var u=Pe(e.coordinates,i,n),c=Me(t.geometry(),r,i,n)
if(!ve(r,i))return!1
for(var p=0,h=c;p<h.length;p+=1)if(!Ae(h[p],u))return!1}return!0}(t,this.geometries)}return!1},De.prototype.eachChild=function(){},De.prototype.outputDefined=function(){return!0},De.prototype.serialize=function(){return["within",this.geojson]}
var Fe=function(t,e){this.type=e.type,this.name=t,this.boundExpression=e}
Fe.parse=function(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.")
var r=t[1]
return e.scope.has(r)?new Fe(r,e.scope.get(r)):e.error('Unknown variable "'+r+'". Make sure "'+r+'" has been bound in an enclosing "let" expression before using it.',1)},Fe.prototype.evaluate=function(t){return this.boundExpression.evaluate(t)},Fe.prototype.eachChild=function(){},Fe.prototype.outputDefined=function(){return!1},Fe.prototype.serialize=function(){return["var",this.name]}
var Oe=function(t,e,r,i,n){void 0===e&&(e=[]),void 0===i&&(i=new Dt),void 0===n&&(n=[]),this.registry=t,this.path=e,this.key=e.map((function(t){return"["+t+"]"})).join(""),this.scope=i,this.errors=n,this.expectedType=r}
function Ue(t,e){for(var r,i=t.length-1,n=0,o=i,a=0;n<=o;)if((r=t[a=Math.floor((n+o)/2)])<=e){if(a===i||e<t[a+1])return a
n=a+1}else{if(!(r>e))throw new se("Input is not a number.")
o=a-1}return 0}Oe.prototype.parse=function(t,e,r,i,n){return void 0===n&&(n={}),e?this.concat(e,r,i)._parse(t,n):this._parse(t,n)},Oe.prototype._parse=function(t,e){function r(t,e,r){return"assert"===r?new ue(e,[t]):"coerce"===r?new fe(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].')
var i=t[0]
if("string"!=typeof i)return this.error("Expression name must be a string, but found "+typeof i+' instead. If you wanted a literal array, use ["literal", [...]].',0),null
var n=this.registry[i]
if(n){var o=n.parse(t,this)
if(!o)return null
if(this.expectedType){var a=this.expectedType,s=o.type
if("string"!==a.kind&&"number"!==a.kind&&"boolean"!==a.kind&&"object"!==a.kind&&"array"!==a.kind||"value"!==s.kind)if("color"!==a.kind&&"formatted"!==a.kind&&"resolvedImage"!==a.kind||"value"!==s.kind&&"string"!==s.kind){if(this.checkSubtype(a,s))return null}else o=r(o,a,e.typeAnnotation||"coerce")
else o=r(o,a,e.typeAnnotation||"assert")}if(!(o instanceof ae)&&"resolvedImage"!==o.type.kind&&function t(e){if(e instanceof Fe)return t(e.boundExpression)
if(e instanceof ye&&"error"===e.name)return!1
if(e instanceof ge)return!1
if(e instanceof De)return!1
var r=e instanceof fe||e instanceof ue,i=!0
return e.eachChild((function(e){i=r?i&&t(e):i&&e instanceof ae})),!!i&&Le(e)&&Be(e,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}(o)){var l=new me
try{o=new ae(o.type,o.evaluate(l))}catch(t){return this.error(t.message),null}}return o}return this.error('Unknown expression "'+i+'". If you wanted a literal array, use ["literal", [...]].',0)}return this.error(void 0===t?"'undefined' value invalid. Use null instead.":"object"==typeof t?'Bare objects invalid. Use ["literal", {...}] instead.':"Expected an array, but found "+typeof t+" instead.")},Oe.prototype.concat=function(t,e,r){var i="number"==typeof t?this.path.concat(t):this.path,n=r?this.scope.concat(r):this.scope
return new Oe(this.registry,i,e||null,n,this.errors)},Oe.prototype.error=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1]
var i=""+this.key+e.map((function(t){return"["+t+"]"})).join("")
this.errors.push(new Mt(i,t))},Oe.prototype.checkSubtype=function(t,e){var r=Wt(t,e)
return r&&this.error(r),r}
var Ve=function(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[]
for(var i=0,n=r;i<n.length;i+=1){var o=n[i],a=o[1]
this.labels.push(o[0]),this.outputs.push(a)}}
function Ne(t,e,r){return t*(1-r)+e*r}Ve.parse=function(t,e){if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".")
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
var r=e.parse(t[1],1,Rt)
if(!r)return null
var i=[],n=null
e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType)
for(var o=1;o<t.length;o+=2){var a=1===o?-1/0:t[o],s=t[o+1],l=o,u=o+1
if("number"!=typeof a)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',l)
if(i.length&&i[i.length-1][0]>=a)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',l)
var c=e.parse(s,u,n)
if(!c)return null
n=n||c.type,i.push([a,c])}return new Ve(n,r,i)},Ve.prototype.evaluate=function(t){var e=this.labels,r=this.outputs
if(1===e.length)return r[0].evaluate(t)
var i=this.input.evaluate(t)
if(i<=e[0])return r[0].evaluate(t)
var n=e.length
return i>=e[n-1]?r[n-1].evaluate(t):r[Ue(e,i)].evaluate(t)},Ve.prototype.eachChild=function(t){t(this.input)
for(var e=0,r=this.outputs;e<r.length;e+=1)t(r[e])},Ve.prototype.outputDefined=function(){return this.outputs.every((function(t){return t.outputDefined()}))},Ve.prototype.serialize=function(){for(var t=["step",this.input.serialize()],e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize())
return t}
var je=Object.freeze({__proto__:null,number:Ne,color:function(t,e,r){return new Yt(Ne(t.r,e.r,r),Ne(t.g,e.g,r),Ne(t.b,e.b,r),Ne(t.a,e.a,r))},array:function(t,e,r){return t.map((function(t,i){return Ne(t,e[i],r)}))}}),qe=6/29*3*(6/29),Ze=Math.PI/180,Ge=180/Math.PI
function Xe(t){return t>.008856451679035631?Math.pow(t,1/3):t/qe+4/29}function We(t){return t>6/29?t*t*t:qe*(t-4/29)}function Ke(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function He(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Je(t){var e=He(t.r),r=He(t.g),i=He(t.b),n=Xe((.4124564*e+.3575761*r+.1804375*i)/.95047),o=Xe((.2126729*e+.7151522*r+.072175*i)/1)
return{l:116*o-16,a:500*(n-o),b:200*(o-Xe((.0193339*e+.119192*r+.9503041*i)/1.08883)),alpha:t.a}}function Ye(t){var e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,i=isNaN(t.b)?e:e-t.b/200
return e=1*We(e),r=.95047*We(r),i=1.08883*We(i),new Yt(Ke(3.2404542*r-1.5371385*e-.4985314*i),Ke(-.969266*r+1.8760108*e+.041556*i),Ke(.0556434*r-.2040259*e+1.0572252*i),t.alpha)}function Qe(t,e,r){var i=e-t
return t+r*(i>180||i<-180?i-360*Math.round(i/360):i)}var $e={forward:Je,reverse:Ye,interpolate:function(t,e,r){return{l:Ne(t.l,e.l,r),a:Ne(t.a,e.a,r),b:Ne(t.b,e.b,r),alpha:Ne(t.alpha,e.alpha,r)}}},tr={forward:function(t){var e=Je(t),r=e.l,i=e.a,n=e.b,o=Math.atan2(n,i)*Ge
return{h:o<0?o+360:o,c:Math.sqrt(i*i+n*n),l:r,alpha:t.a}},reverse:function(t){var e=t.h*Ze,r=t.c
return Ye({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return{h:Qe(t.h,e.h,r),c:Ne(t.c,e.c,r),l:Ne(t.l,e.l,r),alpha:Ne(t.alpha,e.alpha,r)}}},er=Object.freeze({__proto__:null,lab:$e,hcl:tr}),rr=function(t,e,r,i,n){this.type=t,this.operator=e,this.interpolation=r,this.input=i,this.labels=[],this.outputs=[]
for(var o=0,a=n;o<a.length;o+=1){var s=a[o],l=s[1]
this.labels.push(s[0]),this.outputs.push(l)}}
function ir(t,e,r,i){var n=i-r,o=t-r
return 0===n?0:1===e?o/n:(Math.pow(e,o)-1)/(Math.pow(e,n)-1)}rr.interpolationFactor=function(t,e,i,n){var o=0
if("exponential"===t.name)o=ir(e,t.base,i,n)
else if("linear"===t.name)o=ir(e,1,i,n)
else if("cubic-bezier"===t.name){var a=t.controlPoints
o=new r(a[0],a[1],a[2],a[3]).solve(ir(e,1,i,n))}return o},rr.parse=function(t,e){var r=t[0],i=t[1],n=t[2],o=t.slice(3)
if(!Array.isArray(i)||0===i.length)return e.error("Expected an interpolation type expression.",1)
if("linear"===i[0])i={name:"linear"}
else if("exponential"===i[0]){var a=i[1]
if("number"!=typeof a)return e.error("Exponential interpolation requires a numeric base.",1,1)
i={name:"exponential",base:a}}else{if("cubic-bezier"!==i[0])return e.error("Unknown interpolation type "+String(i[0]),1,0)
var s=i.slice(1)
if(4!==s.length||s.some((function(t){return"number"!=typeof t||t<0||t>1})))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1)
i={name:"cubic-bezier",controlPoints:s}}if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".")
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
if(!(n=e.parse(n,2,Rt)))return null
var l=[],u=null
"interpolate-hcl"===r||"interpolate-lab"===r?u=Ot:e.expectedType&&"value"!==e.expectedType.kind&&(u=e.expectedType)
for(var c=0;c<o.length;c+=2){var p=o[c],h=o[c+1],f=c+3,d=c+4
if("number"!=typeof p)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',f)
if(l.length&&l[l.length-1][0]>=p)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',f)
var m=e.parse(h,d,u)
if(!m)return null
u=u||m.type,l.push([p,m])}return"number"===u.kind||"color"===u.kind||"array"===u.kind&&"number"===u.itemType.kind&&"number"==typeof u.N?new rr(u,r,i,n,l):e.error("Type "+Gt(u)+" is not interpolatable.")},rr.prototype.evaluate=function(t){var e=this.labels,r=this.outputs
if(1===e.length)return r[0].evaluate(t)
var i=this.input.evaluate(t)
if(i<=e[0])return r[0].evaluate(t)
var n=e.length
if(i>=e[n-1])return r[n-1].evaluate(t)
var o=Ue(e,i),a=rr.interpolationFactor(this.interpolation,i,e[o],e[o+1]),s=r[o].evaluate(t),l=r[o+1].evaluate(t)
return"interpolate"===this.operator?je[this.type.kind.toLowerCase()](s,l,a):"interpolate-hcl"===this.operator?tr.reverse(tr.interpolate(tr.forward(s),tr.forward(l),a)):$e.reverse($e.interpolate($e.forward(s),$e.forward(l),a))},rr.prototype.eachChild=function(t){t(this.input)
for(var e=0,r=this.outputs;e<r.length;e+=1)t(r[e])},rr.prototype.outputDefined=function(){return this.outputs.every((function(t){return t.outputDefined()}))},rr.prototype.serialize=function(){var t
t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints)
for(var e=[this.operator,t,this.input.serialize()],r=0;r<this.labels.length;r++)e.push(this.labels[r],this.outputs[r].serialize())
return e}
var nr=function(t,e){this.type=t,this.args=e}
nr.parse=function(t,e){if(t.length<2)return e.error("Expectected at least one argument.")
var r=null,i=e.expectedType
i&&"value"!==i.kind&&(r=i)
for(var n=[],o=0,a=t.slice(1);o<a.length;o+=1){var s=e.parse(a[o],1+n.length,r,void 0,{typeAnnotation:"omit"})
if(!s)return null
r=r||s.type,n.push(s)}var l=i&&n.some((function(t){return Wt(i,t.type)}))
return new nr(l?Vt:r,n)},nr.prototype.evaluate=function(t){for(var e,r=null,i=0,n=0,o=this.args;n<o.length&&(i++,(r=o[n].evaluate(t))&&r instanceof ee&&!r.available&&(e||(e=r.name),r=null,i===this.args.length&&(r=e)),null===r);n+=1);return r},nr.prototype.eachChild=function(t){this.args.forEach(t)},nr.prototype.outputDefined=function(){return this.args.every((function(t){return t.outputDefined()}))},nr.prototype.serialize=function(){var t=["coalesce"]
return this.eachChild((function(e){t.push(e.serialize())})),t}
var or=function(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e}
or.prototype.evaluate=function(t){return this.result.evaluate(t)},or.prototype.eachChild=function(t){for(var e=0,r=this.bindings;e<r.length;e+=1)t(r[e][1])
t(this.result)},or.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found "+(t.length-1)+" instead.")
for(var r=[],i=1;i<t.length-1;i+=2){var n=t[i]
if("string"!=typeof n)return e.error("Expected string, but found "+typeof n+" instead.",i)
if(/[^a-zA-Z0-9_]/.test(n))return e.error("Variable names must contain only alphanumeric characters or '_'.",i)
var o=e.parse(t[i+1],i+1)
if(!o)return null
r.push([n,o])}var a=e.parse(t[t.length-1],t.length-1,e.expectedType,r)
return a?new or(r,a):null},or.prototype.outputDefined=function(){return this.result.outputDefined()},or.prototype.serialize=function(){for(var t=["let"],e=0,r=this.bindings;e<r.length;e+=1){var i=r[e]
t.push(i[0],i[1].serialize())}return t.push(this.result.serialize()),t}
var ar=function(t,e,r){this.type=t,this.index=e,this.input=r}
ar.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.")
var r=e.parse(t[1],1,Rt),i=e.parse(t[2],2,Zt(e.expectedType||Vt))
return r&&i?new ar(i.type.itemType,r,i):null},ar.prototype.evaluate=function(t){var e=this.index.evaluate(t),r=this.input.evaluate(t)
if(e<0)throw new se("Array index out of bounds: "+e+" < 0.")
if(e>=r.length)throw new se("Array index out of bounds: "+e+" > "+(r.length-1)+".")
if(e!==Math.floor(e))throw new se("Array index must be an integer, but found "+e+" instead.")
return r[e]},ar.prototype.eachChild=function(t){t(this.index),t(this.input)},ar.prototype.outputDefined=function(){return!1},ar.prototype.serialize=function(){return["at",this.index.serialize(),this.input.serialize()]}
var sr=function(t,e){this.type=Ft,this.needle=t,this.haystack=e}
sr.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.")
var r=e.parse(t[1],1,Vt),i=e.parse(t[2],2,Vt)
return r&&i?Kt(r.type,[Ft,Bt,Rt,Lt,Vt])?new sr(r,i):e.error("Expected first argument to be of type boolean, string, number or null, but found "+Gt(r.type)+" instead"):null},sr.prototype.evaluate=function(t){var e=this.needle.evaluate(t),r=this.haystack.evaluate(t)
if(!r)return!1
if(!Ht(e,["boolean","string","number","null"]))throw new se("Expected first argument to be of type boolean, string, number or null, but found "+Gt(ne(e))+" instead.")
if(!Ht(r,["string","array"]))throw new se("Expected second argument to be of type array or string, but found "+Gt(ne(r))+" instead.")
return r.indexOf(e)>=0},sr.prototype.eachChild=function(t){t(this.needle),t(this.haystack)},sr.prototype.outputDefined=function(){return!0},sr.prototype.serialize=function(){return["in",this.needle.serialize(),this.haystack.serialize()]}
var lr=function(t,e,r){this.type=Rt,this.needle=t,this.haystack=e,this.fromIndex=r}
lr.parse=function(t,e){if(t.length<=2||t.length>=5)return e.error("Expected 3 or 4 arguments, but found "+(t.length-1)+" instead.")
var r=e.parse(t[1],1,Vt),i=e.parse(t[2],2,Vt)
if(!r||!i)return null
if(!Kt(r.type,[Ft,Bt,Rt,Lt,Vt]))return e.error("Expected first argument to be of type boolean, string, number or null, but found "+Gt(r.type)+" instead")
if(4===t.length){var n=e.parse(t[3],3,Rt)
return n?new lr(r,i,n):null}return new lr(r,i)},lr.prototype.evaluate=function(t){var e=this.needle.evaluate(t),r=this.haystack.evaluate(t)
if(!Ht(e,["boolean","string","number","null"]))throw new se("Expected first argument to be of type boolean, string, number or null, but found "+Gt(ne(e))+" instead.")
if(!Ht(r,["string","array"]))throw new se("Expected second argument to be of type array or string, but found "+Gt(ne(r))+" instead.")
if(this.fromIndex){var i=this.fromIndex.evaluate(t)
return r.indexOf(e,i)}return r.indexOf(e)},lr.prototype.eachChild=function(t){t(this.needle),t(this.haystack),this.fromIndex&&t(this.fromIndex)},lr.prototype.outputDefined=function(){return!1},lr.prototype.serialize=function(){if(null!=this.fromIndex&&void 0!==this.fromIndex){var t=this.fromIndex.serialize()
return["index-of",this.needle.serialize(),this.haystack.serialize(),t]}return["index-of",this.needle.serialize(),this.haystack.serialize()]}
var ur=function(t,e,r,i,n,o){this.inputType=t,this.type=e,this.input=r,this.cases=i,this.outputs=n,this.otherwise=o}
ur.parse=function(t,e){if(t.length<5)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".")
if(t.length%2!=1)return e.error("Expected an even number of arguments.")
var r,i
e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType)
for(var n={},o=[],a=2;a<t.length-1;a+=2){var s=t[a],l=t[a+1]
Array.isArray(s)||(s=[s])
var u=e.concat(a)
if(0===s.length)return u.error("Expected at least one branch label.")
for(var c=0,p=s;c<p.length;c+=1){var h=p[c]
if("number"!=typeof h&&"string"!=typeof h)return u.error("Branch labels must be numbers or strings.")
if("number"==typeof h&&Math.abs(h)>Number.MAX_SAFE_INTEGER)return u.error("Branch labels must be integers no larger than "+Number.MAX_SAFE_INTEGER+".")
if("number"==typeof h&&Math.floor(h)!==h)return u.error("Numeric branch labels must be integer values.")
if(r){if(u.checkSubtype(r,ne(h)))return null}else r=ne(h)
if(void 0!==n[String(h)])return u.error("Branch labels must be unique.")
n[String(h)]=o.length}var f=e.parse(l,a,i)
if(!f)return null
i=i||f.type,o.push(f)}var d=e.parse(t[1],1,Vt)
if(!d)return null
var m=e.parse(t[t.length-1],t.length-1,i)
return m?"value"!==d.type.kind&&e.concat(1).checkSubtype(r,d.type)?null:new ur(r,i,d,n,o,m):null},ur.prototype.evaluate=function(t){var e=this.input.evaluate(t)
return(ne(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)},ur.prototype.eachChild=function(t){t(this.input),this.outputs.forEach(t),t(this.otherwise)},ur.prototype.outputDefined=function(){return this.outputs.every((function(t){return t.outputDefined()}))&&this.otherwise.outputDefined()},ur.prototype.serialize=function(){for(var t=this,e=["match",this.input.serialize()],r=[],i={},n=0,o=Object.keys(this.cases).sort();n<o.length;n+=1){var a=o[n]
void 0===(p=i[this.cases[a]])?(i[this.cases[a]]=r.length,r.push([this.cases[a],[a]])):r[p][1].push(a)}for(var s=function(e){return"number"===t.inputType.kind?Number(e):e},l=0,u=r;l<u.length;l+=1){var c=u[l],p=c[0],h=c[1]
e.push(1===h.length?s(h[0]):h.map(s)),e.push(this.outputs[outputIndex$1].serialize())}return e.push(this.otherwise.serialize()),e}
var cr=function(t,e,r){this.type=t,this.branches=e,this.otherwise=r}
cr.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found only "+(t.length-1)+".")
if(t.length%2!=0)return e.error("Expected an odd number of arguments.")
var r
e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType)
for(var i=[],n=1;n<t.length-1;n+=2){var o=e.parse(t[n],n,Ft)
if(!o)return null
var a=e.parse(t[n+1],n+1,r)
if(!a)return null
i.push([o,a]),r=r||a.type}var s=e.parse(t[t.length-1],t.length-1,r)
return s?new cr(r,i,s):null},cr.prototype.evaluate=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var i=r[e],n=i[1]
if(i[0].evaluate(t))return n.evaluate(t)}return this.otherwise.evaluate(t)},cr.prototype.eachChild=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var i=r[e],n=i[1]
t(i[0]),t(n)}t(this.otherwise)},cr.prototype.outputDefined=function(){return this.branches.every((function(t){return t[1].outputDefined()}))&&this.otherwise.outputDefined()},cr.prototype.serialize=function(){var t=["case"]
return this.eachChild((function(e){t.push(e.serialize())})),t}
var pr=function(t,e,r,i){this.type=t,this.input=e,this.beginIndex=r,this.endIndex=i}
function hr(t,e){return"=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function fr(t,e,r,i){return 0===i.compare(e,r)}function dr(t,e,r){var i="=="!==t&&"!="!==t
return function(){function n(t,e,r){this.type=Ft,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind}return n.parse=function(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.")
var r=t[0],o=e.parse(t[1],1,Vt)
if(!o)return null
if(!hr(r,o.type))return e.concat(1).error('"'+r+"\" comparisons are not supported for type '"+Gt(o.type)+"'.")
var a=e.parse(t[2],2,Vt)
if(!a)return null
if(!hr(r,a.type))return e.concat(2).error('"'+r+"\" comparisons are not supported for type '"+Gt(a.type)+"'.")
if(o.type.kind!==a.type.kind&&"value"!==o.type.kind&&"value"!==a.type.kind)return e.error("Cannot compare types '"+Gt(o.type)+"' and '"+Gt(a.type)+"'.")
i&&("value"===o.type.kind&&"value"!==a.type.kind?o=new ue(a.type,[o]):"value"!==o.type.kind&&"value"===a.type.kind&&(a=new ue(o.type,[a])))
var s=null
if(4===t.length){if("string"!==o.type.kind&&"string"!==a.type.kind&&"value"!==o.type.kind&&"value"!==a.type.kind)return e.error("Cannot use collator to compare non-string types.")
if(!(s=e.parse(t[3],3,Nt)))return null}return new n(o,a,s)},n.prototype.evaluate=function(n){var o=this.lhs.evaluate(n),a=this.rhs.evaluate(n)
if(i&&this.hasUntypedArgument){var s=ne(o),l=ne(a)
if(s.kind!==l.kind||"string"!==s.kind&&"number"!==s.kind)throw new se('Expected arguments for "'+t+'" to be (string, string) or (number, number), but found ('+s.kind+", "+l.kind+") instead.")}if(this.collator&&!i&&this.hasUntypedArgument){var u=ne(o),c=ne(a)
if("string"!==u.kind||"string"!==c.kind)return e(n,o,a)}return this.collator?r(n,o,a,this.collator.evaluate(n)):e(n,o,a)},n.prototype.eachChild=function(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator)},n.prototype.outputDefined=function(){return!0},n.prototype.serialize=function(){var e=[t]
return this.eachChild((function(t){e.push(t.serialize())})),e},n}()}pr.parse=function(t,e){if(t.length<=2||t.length>=5)return e.error("Expected 3 or 4 arguments, but found "+(t.length-1)+" instead.")
var r=e.parse(t[1],1,Vt),i=e.parse(t[2],2,Rt)
if(!r||!i)return null
if(!Kt(r.type,[Zt(Vt),Bt,Vt]))return e.error("Expected first argument to be of type array or string, but found "+Gt(r.type)+" instead")
if(4===t.length){var n=e.parse(t[3],3,Rt)
return n?new pr(r.type,r,i,n):null}return new pr(r.type,r,i)},pr.prototype.evaluate=function(t){var e=this.input.evaluate(t),r=this.beginIndex.evaluate(t)
if(!Ht(e,["string","array"]))throw new se("Expected first argument to be of type array or string, but found "+Gt(ne(e))+" instead.")
if(this.endIndex){var i=this.endIndex.evaluate(t)
return e.slice(r,i)}return e.slice(r)},pr.prototype.eachChild=function(t){t(this.input),t(this.beginIndex),this.endIndex&&t(this.endIndex)},pr.prototype.outputDefined=function(){return!1},pr.prototype.serialize=function(){if(null!=this.endIndex&&void 0!==this.endIndex){var t=this.endIndex.serialize()
return["slice",this.input.serialize(),this.beginIndex.serialize(),t]}return["slice",this.input.serialize(),this.beginIndex.serialize()]}
var mr=dr("==",(function(t,e,r){return e===r}),fr),yr=dr("!=",(function(t,e,r){return e!==r}),(function(t,e,r,i){return!fr(0,e,r,i)})),gr=dr("<",(function(t,e,r){return e<r}),(function(t,e,r,i){return i.compare(e,r)<0})),_r=dr(">",(function(t,e,r){return e>r}),(function(t,e,r,i){return i.compare(e,r)>0})),vr=dr("<=",(function(t,e,r){return e<=r}),(function(t,e,r,i){return i.compare(e,r)<=0})),xr=dr(">=",(function(t,e,r){return e>=r}),(function(t,e,r,i){return i.compare(e,r)>=0})),br=function(t,e,r,i,n){this.type=Bt,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=i,this.maxFractionDigits=n}
br.parse=function(t,e){if(3!==t.length)return e.error("Expected two arguments.")
var r=e.parse(t[1],1,Rt)
if(!r)return null
var i=t[2]
if("object"!=typeof i||Array.isArray(i))return e.error("NumberFormat options argument must be an object.")
var n=null
if(i.locale&&!(n=e.parse(i.locale,1,Bt)))return null
var o=null
if(i.currency&&!(o=e.parse(i.currency,1,Bt)))return null
var a=null
if(i["min-fraction-digits"]&&!(a=e.parse(i["min-fraction-digits"],1,Rt)))return null
var s=null
return i["max-fraction-digits"]&&!(s=e.parse(i["max-fraction-digits"],1,Rt))?null:new br(r,n,o,a,s)},br.prototype.evaluate=function(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))},br.prototype.eachChild=function(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits)},br.prototype.outputDefined=function(){return!1},br.prototype.serialize=function(){var t={}
return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]}
var wr=function(t){this.type=Rt,this.input=t}
wr.parse=function(t,e){if(2!==t.length)return e.error("Expected 1 argument, but found "+(t.length-1)+" instead.")
var r=e.parse(t[1],1)
return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error("Expected argument of type string or array, but found "+Gt(r.type)+" instead."):new wr(r):null},wr.prototype.evaluate=function(t){var e=this.input.evaluate(t)
if("string"==typeof e)return e.length
if(Array.isArray(e))return e.length
throw new se("Expected value to be of type string or array, but found "+Gt(ne(e))+" instead.")},wr.prototype.eachChild=function(t){t(this.input)},wr.prototype.outputDefined=function(){return!1},wr.prototype.serialize=function(){var t=["length"]
return this.eachChild((function(e){t.push(e.serialize())})),t}
var Sr={"==":mr,"!=":yr,">":_r,"<":gr,">=":xr,"<=":vr,array:ue,at:ar,boolean:ue,case:cr,coalesce:nr,collator:ge,format:ce,image:pe,in:sr,"index-of":lr,interpolate:rr,"interpolate-hcl":rr,"interpolate-lab":rr,length:wr,let:or,literal:ae,match:ur,number:ue,"number-format":br,object:ue,slice:pr,step:Ve,string:ue,"to-boolean":fe,"to-color":fe,"to-number":fe,"to-string":fe,var:Fe,within:De}
function Tr(t,e){var r=e[0],i=e[1],n=e[2],o=e[3]
r=r.evaluate(t),i=i.evaluate(t),n=n.evaluate(t)
var a=o?o.evaluate(t):1,s=re(r,i,n,a)
if(s)throw new se(s)
return new Yt(r/255*a,i/255*a,n/255*a,a)}function Ir(t,e){return t in e}function Er(t,e){var r=e[t]
return void 0===r?null:r}function Ar(t){return{type:t}}function zr(t){return{result:"success",value:t}}function Pr(t){return{result:"error",value:t}}function Cr(t){return"data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function kr(t){return!!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function Mr(t){return!!t.expression&&t.expression.interpolated}function Dr(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function Lr(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function Rr(t){return t}function Br(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function Fr(t,e,r,i,n){return Br(typeof r===n?i[r]:void 0,t.default,e.default)}function Or(t,e,r){if("number"!==Dr(r))return Br(t.default,e.default)
var i=t.stops.length
if(1===i)return t.stops[0][1]
if(r<=t.stops[0][0])return t.stops[0][1]
if(r>=t.stops[i-1][0])return t.stops[i-1][1]
var n=Ue(t.stops.map((function(t){return t[0]})),r)
return t.stops[n][1]}function Ur(t,e,r){var i=void 0!==t.base?t.base:1
if("number"!==Dr(r))return Br(t.default,e.default)
var n=t.stops.length
if(1===n)return t.stops[0][1]
if(r<=t.stops[0][0])return t.stops[0][1]
if(r>=t.stops[n-1][0])return t.stops[n-1][1]
var o=Ue(t.stops.map((function(t){return t[0]})),r),a=function(t,e,r,i){var n=i-r,o=t-r
return 0===n?0:1===e?o/n:(Math.pow(e,o)-1)/(Math.pow(e,n)-1)}(r,i,t.stops[o][0],t.stops[o+1][0]),s=t.stops[o][1],l=t.stops[o+1][1],u=je[e.type]||Rr
if(t.colorSpace&&"rgb"!==t.colorSpace){var c=er[t.colorSpace]
u=function(t,e){return c.reverse(c.interpolate(c.forward(t),c.forward(e),a))}}return"function"==typeof s.evaluate?{evaluate:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e]
var r=s.evaluate.apply(void 0,t),i=l.evaluate.apply(void 0,t)
if(void 0!==r&&void 0!==i)return u(r,i,a)}}:u(s,l,a)}function Vr(t,e,r){return"color"===e.type?r=Yt.parse(r):"formatted"===e.type?r=te.fromString(r.toString()):"resolvedImage"===e.type?r=ee.fromString(r.toString()):Dr(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),Br(r,t.default,e.default)}ye.register(Sr,{error:[{kind:"error"},[Bt],function(t,e){throw new se(e[0].evaluate(t))}],typeof:[Bt,[Vt],function(t,e){return Gt(ne(e[0].evaluate(t)))}],"to-rgba":[Zt(Rt,4),[Ot],function(t,e){return e[0].evaluate(t).toArray()}],rgb:[Ot,[Rt,Rt,Rt],Tr],rgba:[Ot,[Rt,Rt,Rt,Rt],Tr],has:{type:Ft,overloads:[[[Bt],function(t,e){return Ir(e[0].evaluate(t),t.properties())}],[[Bt,Ut],function(t,e){var r=e[1]
return Ir(e[0].evaluate(t),r.evaluate(t))}]]},get:{type:Vt,overloads:[[[Bt],function(t,e){return Er(e[0].evaluate(t),t.properties())}],[[Bt,Ut],function(t,e){var r=e[1]
return Er(e[0].evaluate(t),r.evaluate(t))}]]},"feature-state":[Vt,[Bt],function(t,e){return Er(e[0].evaluate(t),t.featureState||{})}],properties:[Ut,[],function(t){return t.properties()}],"geometry-type":[Bt,[],function(t){return t.geometryType()}],id:[Vt,[],function(t){return t.id()}],zoom:[Rt,[],function(t){return t.globals.zoom}],"heatmap-density":[Rt,[],function(t){return t.globals.heatmapDensity||0}],"line-progress":[Rt,[],function(t){return t.globals.lineProgress||0}],accumulated:[Vt,[],function(t){return void 0===t.globals.accumulated?null:t.globals.accumulated}],"+":[Rt,Ar(Rt),function(t,e){for(var r=0,i=0,n=e;i<n.length;i+=1)r+=n[i].evaluate(t)
return r}],"*":[Rt,Ar(Rt),function(t,e){for(var r=1,i=0,n=e;i<n.length;i+=1)r*=n[i].evaluate(t)
return r}],"-":{type:Rt,overloads:[[[Rt,Rt],function(t,e){var r=e[1]
return e[0].evaluate(t)-r.evaluate(t)}],[[Rt],function(t,e){return-e[0].evaluate(t)}]]},"/":[Rt,[Rt,Rt],function(t,e){var r=e[1]
return e[0].evaluate(t)/r.evaluate(t)}],"%":[Rt,[Rt,Rt],function(t,e){var r=e[1]
return e[0].evaluate(t)%r.evaluate(t)}],ln2:[Rt,[],function(){return Math.LN2}],pi:[Rt,[],function(){return Math.PI}],e:[Rt,[],function(){return Math.E}],"^":[Rt,[Rt,Rt],function(t,e){var r=e[1]
return Math.pow(e[0].evaluate(t),r.evaluate(t))}],sqrt:[Rt,[Rt],function(t,e){return Math.sqrt(e[0].evaluate(t))}],log10:[Rt,[Rt],function(t,e){return Math.log(e[0].evaluate(t))/Math.LN10}],ln:[Rt,[Rt],function(t,e){return Math.log(e[0].evaluate(t))}],log2:[Rt,[Rt],function(t,e){return Math.log(e[0].evaluate(t))/Math.LN2}],sin:[Rt,[Rt],function(t,e){return Math.sin(e[0].evaluate(t))}],cos:[Rt,[Rt],function(t,e){return Math.cos(e[0].evaluate(t))}],tan:[Rt,[Rt],function(t,e){return Math.tan(e[0].evaluate(t))}],asin:[Rt,[Rt],function(t,e){return Math.asin(e[0].evaluate(t))}],acos:[Rt,[Rt],function(t,e){return Math.acos(e[0].evaluate(t))}],atan:[Rt,[Rt],function(t,e){return Math.atan(e[0].evaluate(t))}],min:[Rt,Ar(Rt),function(t,e){return Math.min.apply(Math,e.map((function(e){return e.evaluate(t)})))}],max:[Rt,Ar(Rt),function(t,e){return Math.max.apply(Math,e.map((function(e){return e.evaluate(t)})))}],abs:[Rt,[Rt],function(t,e){return Math.abs(e[0].evaluate(t))}],round:[Rt,[Rt],function(t,e){var r=e[0].evaluate(t)
return r<0?-Math.round(-r):Math.round(r)}],floor:[Rt,[Rt],function(t,e){return Math.floor(e[0].evaluate(t))}],ceil:[Rt,[Rt],function(t,e){return Math.ceil(e[0].evaluate(t))}],"filter-==":[Ft,[Bt,Vt],function(t,e){var r=e[0],i=e[1]
return t.properties()[r.value]===i.value}],"filter-id-==":[Ft,[Vt],function(t,e){var r=e[0]
return t.id()===r.value}],"filter-type-==":[Ft,[Bt],function(t,e){var r=e[0]
return t.geometryType()===r.value}],"filter-<":[Ft,[Bt,Vt],function(t,e){var r=e[0],i=e[1],n=t.properties()[r.value],o=i.value
return typeof n==typeof o&&n<o}],"filter-id-<":[Ft,[Vt],function(t,e){var r=e[0],i=t.id(),n=r.value
return typeof i==typeof n&&i<n}],"filter->":[Ft,[Bt,Vt],function(t,e){var r=e[0],i=e[1],n=t.properties()[r.value],o=i.value
return typeof n==typeof o&&n>o}],"filter-id->":[Ft,[Vt],function(t,e){var r=e[0],i=t.id(),n=r.value
return typeof i==typeof n&&i>n}],"filter-<=":[Ft,[Bt,Vt],function(t,e){var r=e[0],i=e[1],n=t.properties()[r.value],o=i.value
return typeof n==typeof o&&n<=o}],"filter-id-<=":[Ft,[Vt],function(t,e){var r=e[0],i=t.id(),n=r.value
return typeof i==typeof n&&i<=n}],"filter->=":[Ft,[Bt,Vt],function(t,e){var r=e[0],i=e[1],n=t.properties()[r.value],o=i.value
return typeof n==typeof o&&n>=o}],"filter-id->=":[Ft,[Vt],function(t,e){var r=e[0],i=t.id(),n=r.value
return typeof i==typeof n&&i>=n}],"filter-has":[Ft,[Vt],function(t,e){return e[0].value in t.properties()}],"filter-has-id":[Ft,[],function(t){return null!==t.id()&&void 0!==t.id()}],"filter-type-in":[Ft,[Zt(Bt)],function(t,e){return e[0].value.indexOf(t.geometryType())>=0}],"filter-id-in":[Ft,[Zt(Vt)],function(t,e){return e[0].value.indexOf(t.id())>=0}],"filter-in-small":[Ft,[Bt,Zt(Vt)],function(t,e){var r=e[0]
return e[1].value.indexOf(t.properties()[r.value])>=0}],"filter-in-large":[Ft,[Bt,Zt(Vt)],function(t,e){var r=e[0],i=e[1]
return function(t,e,r,i){for(;r<=i;){var n=r+i>>1
if(e[n]===t)return!0
e[n]>t?i=n-1:r=n+1}return!1}(t.properties()[r.value],i.value,0,i.value.length-1)}],all:{type:Ft,overloads:[[[Ft,Ft],function(t,e){var r=e[1]
return e[0].evaluate(t)&&r.evaluate(t)}],[Ar(Ft),function(t,e){for(var r=0,i=e;r<i.length;r+=1)if(!i[r].evaluate(t))return!1
return!0}]]},any:{type:Ft,overloads:[[[Ft,Ft],function(t,e){var r=e[1]
return e[0].evaluate(t)||r.evaluate(t)}],[Ar(Ft),function(t,e){for(var r=0,i=e;r<i.length;r+=1)if(i[r].evaluate(t))return!0
return!1}]]},"!":[Ft,[Ft],function(t,e){return!e[0].evaluate(t)}],"is-supported-script":[Ft,[Bt],function(t,e){var r=t.globals&&t.globals.isSupportedScript
return!r||r(e[0].evaluate(t))}],upcase:[Bt,[Bt],function(t,e){return e[0].evaluate(t).toUpperCase()}],downcase:[Bt,[Bt],function(t,e){return e[0].evaluate(t).toLowerCase()}],concat:[Bt,Ar(Vt),function(t,e){return e.map((function(e){return oe(e.evaluate(t))})).join("")}],"resolved-locale":[Bt,[Nt],function(t,e){return e[0].evaluate(t).resolvedLocale()}]})
var Nr=function(t,e){this.expression=t,this._warningHistory={},this._evaluator=new me,this._defaultValue=e?function(t){return"color"===t.type&&Lr(t.default)?new Yt(0,0,0,0):"color"===t.type?Yt.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null}
function jr(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in Sr}function qr(t,e){var r=new Oe(Sr,[],e?function(t){var e={color:Ot,string:Bt,number:Rt,enum:Bt,boolean:Ft,formatted:jt,resolvedImage:qt}
return"array"===t.type?Zt(e[t.value]||Vt,t.length):e[t.type]}(e):void 0),i=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0)
return i?zr(new Nr(i,e)):Pr(r.errors)}Nr.prototype.evaluateWithoutErrorHandling=function(t,e,r,i,n,o){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.canonical=i,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=o,this.expression.evaluate(this._evaluator)},Nr.prototype.evaluate=function(t,e,r,i,n,o){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.canonical=i,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=o||null
try{var a=this.expression.evaluate(this._evaluator)
if(null==a||"number"==typeof a&&a!=a)return this._defaultValue
if(this._enumValues&&!(a in this._enumValues))throw new se("Expected value to be one of "+Object.keys(this._enumValues).map((function(t){return JSON.stringify(t)})).join(", ")+", but found "+JSON.stringify(a)+" instead.")
return a}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}}
var Zr=function(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!Re(e.expression)}
Zr.prototype.evaluateWithoutErrorHandling=function(t,e,r,i,n,o){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,i,n,o)},Zr.prototype.evaluate=function(t,e,r,i,n,o){return this._styleExpression.evaluate(t,e,r,i,n,o)}
var Gr=function(t,e,r,i){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!Re(e.expression),this.interpolationType=i}
function Xr(t,e){if("error"===(t=qr(t,e)).result)return t
var r=t.value.expression,i=Le(r)
if(!i&&!Cr(e))return Pr([new Mt("","data expressions not supported")])
var n=Be(r,["zoom"])
if(!n&&!kr(e))return Pr([new Mt("","zoom expressions not supported")])
var o=function t(e){var r=null
if(e instanceof or)r=t(e.result)
else if(e instanceof nr)for(var i=0,n=e.args;i<n.length&&!(r=t(n[i]));i+=1);else(e instanceof Ve||e instanceof rr)&&e.input instanceof ye&&"zoom"===e.input.name&&(r=e)
return r instanceof Mt||e.eachChild((function(e){var i=t(e)
i instanceof Mt?r=i:!r&&i?r=new Mt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):r&&i&&r!==i&&(r=new Mt("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))})),r}(r)
return o||n?o instanceof Mt?Pr([o]):o instanceof rr&&!Mr(e)?Pr([new Mt("",'"interpolate" expressions cannot be used with this property')]):zr(o?new Gr(i?"camera":"composite",t.value,o.labels,o instanceof rr?o.interpolation:void 0):new Zr(i?"constant":"source",t.value)):Pr([new Mt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}Gr.prototype.evaluateWithoutErrorHandling=function(t,e,r,i,n,o){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,i,n,o)},Gr.prototype.evaluate=function(t,e,r,i,n,o){return this._styleExpression.evaluate(t,e,r,i,n,o)},Gr.prototype.interpolationFactor=function(t,e,r){return this.interpolationType?rr.interpolationFactor(this.interpolationType,t,e,r):0}
var Wr=function(t,e){this._parameters=t,this._specification=e,Pt(this,function t(e,r){var i,n,o,a="color"===r.type,s=e.stops&&"object"==typeof e.stops[0][0],l=s||!(s||void 0!==e.property),u=e.type||(Mr(r)?"exponential":"interval")
if(a&&((e=Pt({},e)).stops&&(e.stops=e.stops.map((function(t){return[t[0],Yt.parse(t[1])]}))),e.default=Yt.parse(e.default?e.default:r.default)),e.colorSpace&&"rgb"!==e.colorSpace&&!er[e.colorSpace])throw new Error("Unknown color space: "+e.colorSpace)
if("exponential"===u)i=Ur
else if("interval"===u)i=Or
else if("categorical"===u){i=Fr,n=Object.create(null)
for(var c=0,p=e.stops;c<p.length;c+=1){var h=p[c]
n[h[0]]=h[1]}o=typeof e.stops[0][0]}else{if("identity"!==u)throw new Error('Unknown function type "'+u+'"')
i=Vr}if(s){for(var f={},d=[],m=0;m<e.stops.length;m++){var y=e.stops[m],g=y[0].zoom
void 0===f[g]&&(f[g]={zoom:g,type:e.type,property:e.property,default:e.default,stops:[]},d.push(g)),f[g].stops.push([y[0].value,y[1]])}for(var _=[],v=0,x=d;v<x.length;v+=1){var b=x[v]
_.push([f[b].zoom,t(f[b],r)])}var w={name:"linear"}
return{kind:"composite",interpolationType:w,interpolationFactor:rr.interpolationFactor.bind(void 0,w),zoomStops:_.map((function(t){return t[0]})),evaluate:function(t,i){var n=t.zoom
return Ur({stops:_,base:e.base},r,n).evaluate(n,i)}}}if(l){var S="exponential"===u?{name:"exponential",base:void 0!==e.base?e.base:1}:null
return{kind:"camera",interpolationType:S,interpolationFactor:rr.interpolationFactor.bind(void 0,S),zoomStops:e.stops.map((function(t){return t[0]})),evaluate:function(t){return i(e,r,t.zoom,n,o)}}}return{kind:"source",evaluate:function(t,a){var s=a&&a.properties?a.properties[e.property]:void 0
return void 0===s?Br(e.default,r.default):i(e,r,s,n,o)}}}(this._parameters,this._specification))}
function Kr(t){var e=t.key,r=t.value,i=t.valueSpec||{},n=t.objectElementValidators||{},o=t.style,a=t.styleSpec,s=[],l=Dr(r)
if("object"!==l)return[new At(e,r,"object expected, "+l+" found")]
for(var u in r){var c=u.split(".")[0],p=i[c]||i["*"],h=void 0
if(n[c])h=n[c]
else if(i[c])h=vi
else if(n["*"])h=n["*"]
else{if(!i["*"]){s.push(new At(e,r[u],'unknown property "'+u+'"'))
continue}h=vi}s=s.concat(h({key:(e?e+".":e)+u,value:r[u],valueSpec:p,style:o,styleSpec:a,object:r,objectKey:u},r))}for(var f in i)n[f]||i[f].required&&void 0===i[f].default&&void 0===r[f]&&s.push(new At(e,r,'missing required property "'+f+'"'))
return s}function Hr(t){var e=t.value,r=t.valueSpec,i=t.style,n=t.styleSpec,o=t.key,a=t.arrayElementValidator||vi
if("array"!==Dr(e))return[new At(o,e,"array expected, "+Dr(e)+" found")]
if(r.length&&e.length!==r.length)return[new At(o,e,"array length "+r.length+" expected, length "+e.length+" found")]
if(r["min-length"]&&e.length<r["min-length"])return[new At(o,e,"array length at least "+r["min-length"]+" expected, length "+e.length+" found")]
var s={type:r.value,values:r.values}
n.$version<7&&(s.function=r.function),"object"===Dr(r.value)&&(s=r.value)
for(var l=[],u=0;u<e.length;u++)l=l.concat(a({array:e,arrayIndex:u,value:e[u],valueSpec:s,style:i,styleSpec:n,key:o+"["+u+"]"}))
return l}function Jr(t){var e=t.key,r=t.value,i=t.valueSpec,n=Dr(r)
return"number"===n&&r!=r&&(n="NaN"),"number"!==n?[new At(e,r,"number expected, "+n+" found")]:"minimum"in i&&r<i.minimum?[new At(e,r,r+" is less than the minimum value "+i.minimum)]:"maximum"in i&&r>i.maximum?[new At(e,r,r+" is greater than the maximum value "+i.maximum)]:[]}function Yr(t){var e,r,i,n=t.valueSpec,o=Ct(t.value.type),a={},s="categorical"!==o&&void 0===t.value.property,l=!s,u="array"===Dr(t.value.stops)&&"array"===Dr(t.value.stops[0])&&"object"===Dr(t.value.stops[0][0]),c=Kr({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===o)return[new At(t.key,t.value,'identity function may not have a "stops" property')]
var e=[],r=t.value
return e=e.concat(Hr({key:t.key,value:r,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:p})),"array"===Dr(r)&&0===r.length&&e.push(new At(t.key,r,"array must have at least one stop")),e},default:function(t){return vi({key:t.key,value:t.value,valueSpec:n,style:t.style,styleSpec:t.styleSpec})}}})
return"identity"===o&&s&&c.push(new At(t.key,t.value,'missing required property "property"')),"identity"===o||t.value.stops||c.push(new At(t.key,t.value,'missing required property "stops"')),"exponential"===o&&t.valueSpec.expression&&!Mr(t.valueSpec)&&c.push(new At(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(l&&!Cr(t.valueSpec)?c.push(new At(t.key,t.value,"property functions not supported")):s&&!kr(t.valueSpec)&&c.push(new At(t.key,t.value,"zoom functions not supported"))),"categorical"!==o&&!u||void 0!==t.value.property||c.push(new At(t.key,t.value,'"property" property is required')),c
function p(t){var e=[],o=t.value,s=t.key
if("array"!==Dr(o))return[new At(s,o,"array expected, "+Dr(o)+" found")]
if(2!==o.length)return[new At(s,o,"array length 2 expected, length "+o.length+" found")]
if(u){if("object"!==Dr(o[0]))return[new At(s,o,"object expected, "+Dr(o[0])+" found")]
if(void 0===o[0].zoom)return[new At(s,o,"object stop key must have zoom")]
if(void 0===o[0].value)return[new At(s,o,"object stop key must have value")]
if(i&&i>Ct(o[0].zoom))return[new At(s,o[0].zoom,"stop zoom values must appear in ascending order")]
Ct(o[0].zoom)!==i&&(i=Ct(o[0].zoom),r=void 0,a={}),e=e.concat(Kr({key:s+"[0]",value:o[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:Jr,value:h}}))}else e=e.concat(h({key:s+"[0]",value:o[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},o))
return jr(kt(o[1]))?e.concat([new At(s+"[1]",o[1],"expressions are not allowed in function stops.")]):e.concat(vi({key:s+"[1]",value:o[1],valueSpec:n,style:t.style,styleSpec:t.styleSpec}))}function h(t,i){var s=Dr(t.value),l=Ct(t.value),u=null!==t.value?t.value:i
if(e){if(s!==e)return[new At(t.key,u,s+" stop domain type must match previous stop domain type "+e)]}else e=s
if("number"!==s&&"string"!==s&&"boolean"!==s)return[new At(t.key,u,"stop domain value must be a number, string, or boolean")]
if("number"!==s&&"categorical"!==o){var c="number expected, "+s+" found"
return Cr(n)&&void 0===o&&(c+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new At(t.key,u,c)]}return"categorical"!==o||"number"!==s||isFinite(l)&&Math.floor(l)===l?"categorical"!==o&&"number"===s&&void 0!==r&&l<r?[new At(t.key,u,"stop domain values must appear in ascending order")]:(r=l,"categorical"===o&&l in a?[new At(t.key,u,"stop domain values must be unique")]:(a[l]=!0,[])):[new At(t.key,u,"integer expected, found "+l)]}}function Qr(t){var e=("property"===t.expressionContext?Xr:qr)(kt(t.value),t.valueSpec)
if("error"===e.result)return e.value.map((function(e){return new At(""+t.key+e.key,t.value,e.message)}))
var r=e.value.expression||e.value._styleExpression.expression
if("property"===t.expressionContext&&"text-font"===t.propertyKey&&!r.outputDefined())return[new At(t.key,t.value,'Invalid data expression for "'+t.propertyKey+'". Output values must be contained as literals within the expression.')]
if("property"===t.expressionContext&&"layout"===t.propertyType&&!Re(r))return[new At(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')]
if("filter"===t.expressionContext&&!Re(r))return[new At(t.key,t.value,'"feature-state" data expressions are not supported with filters.')]
if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!Be(r,["zoom","feature-state"]))return[new At(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')]
if("cluster-initial"===t.expressionContext&&!Le(r))return[new At(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return[]}function $r(t){var e=t.key,r=t.value,i=t.valueSpec,n=[]
return Array.isArray(i.values)?-1===i.values.indexOf(Ct(r))&&n.push(new At(e,r,"expected one of ["+i.values.join(", ")+"], "+JSON.stringify(r)+" found")):-1===Object.keys(i.values).indexOf(Ct(r))&&n.push(new At(e,r,"expected one of ["+Object.keys(i.values).join(", ")+"], "+JSON.stringify(r)+" found")),n}function ti(t){if(!0===t||!1===t)return!0
if(!Array.isArray(t)||0===t.length)return!1
switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1]
case"in":return t.length>=3&&("string"!=typeof t[1]||Array.isArray(t[2]))
case"!in":case"!has":case"none":return!1
case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2])
case"any":case"all":for(var e=0,r=t.slice(1);e<r.length;e+=1){var i=r[e]
if(!ti(i)&&"boolean"!=typeof i)return!1}return!0
default:return!0}}Wr.deserialize=function(t){return new Wr(t._parameters,t._specification)},Wr.serialize=function(t){return{_parameters:t._parameters,_specification:t._specification}}
var ei={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}}
function ri(t){if(null==t)return{filter:function(){return!0},needGeometry:!1}
ti(t)||(t=ni(t))
var e=qr(t,ei)
if("error"===e.result)throw new Error(e.value.map((function(t){return t.key+": "+t.message})).join(", "))
return{filter:function(t,r,i){return e.value.evaluate(t,r,{},i)},needGeometry:Array.isArray(t)&&0!==t.length&&"within"===t[0]}}function ii(t,e){return t<e?-1:t>e?1:0}function ni(t){if(!t)return!0
var e,r=t[0]
return t.length<=1?"any"!==r:"=="===r?oi(t[1],t[2],"=="):"!="===r?li(oi(t[1],t[2],"==")):"<"===r||">"===r||"<="===r||">="===r?oi(t[1],t[2],r):"any"===r?(e=t.slice(1),["any"].concat(e.map(ni))):"all"===r?["all"].concat(t.slice(1).map(ni)):"none"===r?["all"].concat(t.slice(1).map(ni).map(li)):"in"===r?ai(t[1],t.slice(2)):"!in"===r?li(ai(t[1],t.slice(2))):"has"===r?si(t[1]):"!has"!==r||li(si(t[1]))}function oi(t,e,r){switch(t){case"$type":return["filter-type-"+r,e]
case"$id":return["filter-id-"+r,e]
default:return["filter-"+r,t,e]}}function ai(t,e){if(0===e.length)return!1
switch(t){case"$type":return["filter-type-in",["literal",e]]
case"$id":return["filter-id-in",["literal",e]]
default:return e.length>200&&!e.some((function(t){return typeof t!=typeof e[0]}))?["filter-in-large",t,["literal",e.sort(ii)]]:["filter-in-small",t,["literal",e]]}}function si(t){switch(t){case"$type":return!0
case"$id":return["filter-has-id"]
default:return["filter-has",t]}}function li(t){return["!",t]}function ui(t){return ti(kt(t.value))?Qr(Pt({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):function t(e){var r=e.value,i=e.key
if("array"!==Dr(r))return[new At(i,r,"array expected, "+Dr(r)+" found")]
var n,o=e.styleSpec,a=[]
if(r.length<1)return[new At(i,r,"filter array must have at least 1 element")]
switch(a=a.concat($r({key:i+"[0]",value:r[0],valueSpec:o.filter_operator,style:e.style,styleSpec:e.styleSpec})),Ct(r[0])){case"<":case"<=":case">":case">=":r.length>=2&&"$type"===Ct(r[1])&&a.push(new At(i,r,'"$type" cannot be use with operator "'+r[0]+'"'))
case"==":case"!=":3!==r.length&&a.push(new At(i,r,'filter array for operator "'+r[0]+'" must have 3 elements'))
case"in":case"!in":r.length>=2&&"string"!==(n=Dr(r[1]))&&a.push(new At(i+"[1]",r[1],"string expected, "+n+" found"))
for(var s=2;s<r.length;s++)n=Dr(r[s]),"$type"===Ct(r[1])?a=a.concat($r({key:i+"["+s+"]",value:r[s],valueSpec:o.geometry_type,style:e.style,styleSpec:e.styleSpec})):"string"!==n&&"number"!==n&&"boolean"!==n&&a.push(new At(i+"["+s+"]",r[s],"string, number, or boolean expected, "+n+" found"))
break
case"any":case"all":case"none":for(var l=1;l<r.length;l++)a=a.concat(t({key:i+"["+l+"]",value:r[l],style:e.style,styleSpec:e.styleSpec}))
break
case"has":case"!has":n=Dr(r[1]),2!==r.length?a.push(new At(i,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"string"!==n&&a.push(new At(i+"[1]",r[1],"string expected, "+n+" found"))}return a}(t)}function ci(t,e){var r=t.key,i=t.style,n=t.styleSpec,o=t.value,a=t.objectKey,s=n[e+"_"+t.layerType]
if(!s)return[]
var l=a.match(/^(.*)-transition$/)
if("paint"===e&&l&&s[l[1]]&&s[l[1]].transition)return vi({key:r,value:o,valueSpec:n.transition,style:i,styleSpec:n})
var u,c=t.valueSpec||s[a]
if(!c)return[new At(r,o,'unknown property "'+a+'"')]
if("string"===Dr(o)&&Cr(c)&&!c.tokens&&(u=/^{([^}]+)}$/.exec(o)))return[new At(r,o,'"'+a+'" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": '+JSON.stringify(u[1])+" }`.")]
var p=[]
return"symbol"===t.layerType&&("text-field"===a&&i&&!i.glyphs&&p.push(new At(r,o,'use of "text-field" requires a style "glyphs" property')),"text-font"===a&&Lr(kt(o))&&"identity"===Ct(o.type)&&p.push(new At(r,o,'"text-font" does not support identity functions'))),p.concat(vi({key:t.key,value:o,valueSpec:c,style:i,styleSpec:n,expressionContext:"property",propertyType:e,propertyKey:a}))}function pi(t){return ci(t,"paint")}function hi(t){return ci(t,"layout")}function fi(t){var e=[],r=t.value,i=t.key,n=t.style,o=t.styleSpec
r.type||r.ref||e.push(new At(i,r,'either "type" or "ref" is required'))
var a,s=Ct(r.type),l=Ct(r.ref)
if(r.id)for(var u=Ct(r.id),c=0;c<t.arrayIndex;c++){var p=n.layers[c]
Ct(p.id)===u&&e.push(new At(i,r.id,'duplicate layer id "'+r.id+'", previously used at line '+p.id.__line__))}if("ref"in r)["type","source","source-layer","filter","layout"].forEach((function(t){t in r&&e.push(new At(i,r[t],'"'+t+'" is prohibited for ref layers'))})),n.layers.forEach((function(t){Ct(t.id)===l&&(a=t)})),a?a.ref?e.push(new At(i,r.ref,"ref cannot reference another ref layer")):s=Ct(a.type):e.push(new At(i,r.ref,'ref layer "'+l+'" not found'))
else if("background"!==s)if(r.source){var h=n.sources&&n.sources[r.source],f=h&&Ct(h.type)
h?"vector"===f&&"raster"===s?e.push(new At(i,r.source,'layer "'+r.id+'" requires a raster source')):"raster"===f&&"raster"!==s?e.push(new At(i,r.source,'layer "'+r.id+'" requires a vector source')):"vector"!==f||r["source-layer"]?"raster-dem"===f&&"hillshade"!==s?e.push(new At(i,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===f&&h.lineMetrics||e.push(new At(i,r,'layer "'+r.id+'" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.')):e.push(new At(i,r,'layer "'+r.id+'" must specify a "source-layer"')):e.push(new At(i,r.source,'source "'+r.source+'" not found'))}else e.push(new At(i,r,'missing required property "source"'))
return e=e.concat(Kr({key:i,value:r,valueSpec:o.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(){return[]},type:function(){return vi({key:i+".type",value:r.type,valueSpec:o.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"})},filter:ui,layout:function(t){return Kr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return hi(Pt({layerType:s},t))}}})},paint:function(t){return Kr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return pi(Pt({layerType:s},t))}}})}}}))}function di(t){var e=t.value,r=t.key,i=Dr(e)
return"string"!==i?[new At(r,e,"string expected, "+i+" found")]:[]}var mi={promoteId:function(t){var e=t.key,r=t.value
if("string"===Dr(r))return di({key:e,value:r})
var i=[]
for(var n in r)i.push.apply(i,di({key:e+"."+n,value:r[n]}))
return i}}
function yi(t){var e=t.value,r=t.key,i=t.styleSpec,n=t.style
if(!e.type)return[new At(r,e,'"type" is required')]
var o,a=Ct(e.type)
switch(a){case"vector":case"raster":case"raster-dem":return Kr({key:r,value:e,valueSpec:i["source_"+a.replace("-","_")],style:t.style,styleSpec:i,objectElementValidators:mi})
case"geojson":if(o=Kr({key:r,value:e,valueSpec:i.source_geojson,style:n,styleSpec:i,objectElementValidators:mi}),e.cluster)for(var s in e.clusterProperties){var l=e.clusterProperties[s],u=l[0],c="string"==typeof u?[u,["accumulated"],["get",s]]:u
o.push.apply(o,Qr({key:r+"."+s+".map",value:l[1],expressionContext:"cluster-map"})),o.push.apply(o,Qr({key:r+"."+s+".reduce",value:c,expressionContext:"cluster-reduce"}))}return o
case"video":return Kr({key:r,value:e,valueSpec:i.source_video,style:n,styleSpec:i})
case"image":return Kr({key:r,value:e,valueSpec:i.source_image,style:n,styleSpec:i})
case"canvas":return[new At(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")]
default:return $r({key:r+".type",value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:n,styleSpec:i})}}function gi(t){var e=t.value,r=t.styleSpec,i=r.light,n=t.style,o=[],a=Dr(e)
if(void 0===e)return o
if("object"!==a)return o.concat([new At("light",e,"object expected, "+a+" found")])
for(var s in e){var l=s.match(/^(.*)-transition$/)
o=o.concat(l&&i[l[1]]&&i[l[1]].transition?vi({key:s,value:e[s],valueSpec:r.transition,style:n,styleSpec:r}):i[s]?vi({key:s,value:e[s],valueSpec:i[s],style:n,styleSpec:r}):[new At(s,e[s],'unknown property "'+s+'"')])}return o}var _i={"*":function(){return[]},array:Hr,boolean:function(t){var e=t.value,r=t.key,i=Dr(e)
return"boolean"!==i?[new At(r,e,"boolean expected, "+i+" found")]:[]},number:Jr,color:function(t){var e=t.key,r=t.value,i=Dr(r)
return"string"!==i?[new At(e,r,"color expected, "+i+" found")]:null===Jt(r)?[new At(e,r,'color expected, "'+r+'" found')]:[]},constants:zt,enum:$r,filter:ui,function:Yr,layer:fi,object:Kr,source:yi,light:gi,string:di,formatted:function(t){return 0===di(t).length?[]:Qr(t)},resolvedImage:function(t){return 0===di(t).length?[]:Qr(t)}}
function vi(t){var e=t.value,r=t.valueSpec,i=t.styleSpec
return r.expression&&Lr(Ct(e))?Yr(t):r.expression&&jr(kt(e))?Qr(t):r.type&&_i[r.type]?_i[r.type](t):Kr(Pt({},t,{valueSpec:r.type?i[r.type]:r}))}function xi(t){var e=t.value,r=t.key,i=di(t)
return i.length||(-1===e.indexOf("{fontstack}")&&i.push(new At(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&i.push(new At(r,e,'"glyphs" url must include a "{range}" token'))),i}function bi(t,e){void 0===e&&(e=Et)
var r=[]
return r=r.concat(vi({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:xi,"*":function(){return[]}}})),t.constants&&(r=r.concat(zt({key:"constants",value:t.constants,style:t,styleSpec:e}))),wi(r)}function wi(t){return[].concat(t).sort((function(t,e){return t.line-e.line}))}function Si(t){return function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r]
return wi(t.apply(this,e))}}bi.source=Si(yi),bi.light=Si(gi),bi.layer=Si(fi),bi.filter=Si(ui),bi.paintProperty=Si(pi),bi.layoutProperty=Si(hi)
var Ti=bi,Ii=Ti.light,Ei=Ti.paintProperty,Ai=Ti.layoutProperty
function zi(t,e){var r=!1
if(e&&e.length)for(var i=0,n=e;i<n.length;i+=1)t.fire(new Tt(new Error(n[i].message))),r=!0
return r}var Pi=Ci
function Ci(t,e,r){var i=this.cells=[]
if(t instanceof ArrayBuffer){this.arrayBuffer=t
var n=new Int32Array(this.arrayBuffer)
t=n[0],this.d=(e=n[1])+2*(r=n[2])
for(var o=0;o<this.d*this.d;o++){var a=n[3+o],s=n[3+o+1]
i.push(a===s?null:n.subarray(a,s))}var l=n[3+i.length+1]
this.keys=n.subarray(n[3+i.length],l),this.bboxes=n.subarray(l),this.insert=this._insertReadonly}else{this.d=e+2*r
for(var u=0;u<this.d*this.d;u++)i.push([])
this.keys=[],this.bboxes=[]}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0
var c=r/e*t
this.min=-c,this.max=t+c}Ci.prototype.insert=function(t,e,r,i,n){this._forEachCell(e,r,i,n,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(i),this.bboxes.push(n)},Ci.prototype._insertReadonly=function(){throw"Cannot insert into a GridIndex created from an ArrayBuffer."},Ci.prototype._insertCell=function(t,e,r,i,n,o){this.cells[n].push(o)},Ci.prototype.query=function(t,e,r,i,n){var o=this.min,a=this.max
if(t<=o&&e<=o&&a<=r&&a<=i&&!n)return Array.prototype.slice.call(this.keys)
var s=[]
return this._forEachCell(t,e,r,i,this._queryCell,s,{},n),s},Ci.prototype._queryCell=function(t,e,r,i,n,o,a,s){var l=this.cells[n]
if(null!==l)for(var u=this.keys,c=this.bboxes,p=0;p<l.length;p++){var h=l[p]
if(void 0===a[h]){var f=4*h;(s?s(c[f+0],c[f+1],c[f+2],c[f+3]):t<=c[f+2]&&e<=c[f+3]&&r>=c[f+0]&&i>=c[f+1])?(a[h]=!0,o.push(u[h])):a[h]=!1}}},Ci.prototype._forEachCell=function(t,e,r,i,n,o,a,s){for(var l=this._convertToCellCoord(t),u=this._convertToCellCoord(e),c=this._convertToCellCoord(r),p=this._convertToCellCoord(i),h=l;h<=c;h++)for(var f=u;f<=p;f++){var d=this.d*f+h
if((!s||s(this._convertFromCellCoord(h),this._convertFromCellCoord(f),this._convertFromCellCoord(h+1),this._convertFromCellCoord(f+1)))&&n.call(this,t,e,r,i,d,o,a,s))return}},Ci.prototype._convertFromCellCoord=function(t){return(t-this.padding)/this.scale},Ci.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},Ci.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer
for(var t=this.cells,e=3+this.cells.length+1+1,r=0,i=0;i<this.cells.length;i++)r+=this.cells[i].length
var n=new Int32Array(e+r+this.keys.length+this.bboxes.length)
n[0]=this.extent,n[1]=this.n,n[2]=this.padding
for(var o=e,a=0;a<t.length;a++){var s=t[a]
n[3+a]=o,n.set(s,o),o+=s.length}return n[3+t.length]=o,n.set(this.keys,o),n[3+t.length+1]=o+=this.keys.length,n.set(this.bboxes,o),o+=this.bboxes.length,n.buffer}
var ki=self.ImageData,Mi=self.ImageBitmap,Di={}
function Li(t,e,r){void 0===r&&(r={}),Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),Di[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]}}for(var Ri in Li("Object",Object),Pi.serialize=function(t,e){var r=t.toArrayBuffer()
return e&&e.push(r),{buffer:r}},Pi.deserialize=function(t){return new Pi(t.buffer)},Li("Grid",Pi),Li("Color",Yt),Li("Error",Error),Li("ResolvedImage",ee),Li("StylePropertyFunction",Wr),Li("StyleExpression",Nr,{omit:["_evaluator"]}),Li("ZoomDependentExpression",Gr),Li("ZoomConstantExpression",Zr),Li("CompoundExpression",ye,{omit:["_evaluate"]}),Sr)Sr[Ri]._classRegistryKey||Li("Expression_"+Ri,Sr[Ri])
function Bi(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function Fi(t){return Mi&&t instanceof Mi}function Oi(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t
if(Bi(t)||Fi(t))return e&&e.push(t),t
if(ArrayBuffer.isView(t)){var r=t
return e&&e.push(r.buffer),r}if(t instanceof ki)return e&&e.push(t.data.buffer),t
if(Array.isArray(t)){for(var i=[],n=0,o=t;n<o.length;n+=1)i.push(Oi(o[n],e))
return i}if("object"==typeof t){var a=t.constructor,s=a._classRegistryKey
if(!s)throw new Error("can't serialize object of unregistered class")
var l=a.serialize?a.serialize(t,e):{}
if(!a.serialize){for(var u in t)if(t.hasOwnProperty(u)&&!(Di[s].omit.indexOf(u)>=0)){var c=t[u]
l[u]=Di[s].shallow.indexOf(u)>=0?c:Oi(c,e)}t instanceof Error&&(l.message=t.message)}if(l.$name)throw new Error("$name property is reserved for worker serialization logic.")
return"Object"!==s&&(l.$name=s),l}throw new Error("can't serialize object of type "+typeof t)}function Ui(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||Bi(t)||Fi(t)||ArrayBuffer.isView(t)||t instanceof ki)return t
if(Array.isArray(t))return t.map(Ui)
if("object"==typeof t){var e=t.$name||"Object",r=Di[e].klass
if(!r)throw new Error("can't deserialize unregistered class "+e)
if(r.deserialize)return r.deserialize(t)
for(var i=Object.create(r.prototype),n=0,o=Object.keys(t);n<o.length;n+=1){var a=o[n]
if("$name"!==a){var s=t[a]
i[a]=Di[e].shallow.indexOf(a)>=0?s:Ui(s)}}return i}throw new Error("can't deserialize object of type "+typeof t)}var Vi=function(){this.first=!0}
Vi.prototype.update=function(t,e){var r=Math.floor(t)
return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))}
var Ni={"Latin-1 Supplement":function(t){return t>=128&&t<=255},Arabic:function(t){return t>=1536&&t<=1791},"Arabic Supplement":function(t){return t>=1872&&t<=1919},"Arabic Extended-A":function(t){return t>=2208&&t<=2303},"Hangul Jamo":function(t){return t>=4352&&t<=4607},"Unified Canadian Aboriginal Syllabics":function(t){return t>=5120&&t<=5759},Khmer:function(t){return t>=6016&&t<=6143},"Unified Canadian Aboriginal Syllabics Extended":function(t){return t>=6320&&t<=6399},"General Punctuation":function(t){return t>=8192&&t<=8303},"Letterlike Symbols":function(t){return t>=8448&&t<=8527},"Number Forms":function(t){return t>=8528&&t<=8591},"Miscellaneous Technical":function(t){return t>=8960&&t<=9215},"Control Pictures":function(t){return t>=9216&&t<=9279},"Optical Character Recognition":function(t){return t>=9280&&t<=9311},"Enclosed Alphanumerics":function(t){return t>=9312&&t<=9471},"Geometric Shapes":function(t){return t>=9632&&t<=9727},"Miscellaneous Symbols":function(t){return t>=9728&&t<=9983},"Miscellaneous Symbols and Arrows":function(t){return t>=11008&&t<=11263},"CJK Radicals Supplement":function(t){return t>=11904&&t<=12031},"Kangxi Radicals":function(t){return t>=12032&&t<=12255},"Ideographic Description Characters":function(t){return t>=12272&&t<=12287},"CJK Symbols and Punctuation":function(t){return t>=12288&&t<=12351},Hiragana:function(t){return t>=12352&&t<=12447},Katakana:function(t){return t>=12448&&t<=12543},Bopomofo:function(t){return t>=12544&&t<=12591},"Hangul Compatibility Jamo":function(t){return t>=12592&&t<=12687},Kanbun:function(t){return t>=12688&&t<=12703},"Bopomofo Extended":function(t){return t>=12704&&t<=12735},"CJK Strokes":function(t){return t>=12736&&t<=12783},"Katakana Phonetic Extensions":function(t){return t>=12784&&t<=12799},"Enclosed CJK Letters and Months":function(t){return t>=12800&&t<=13055},"CJK Compatibility":function(t){return t>=13056&&t<=13311},"CJK Unified Ideographs Extension A":function(t){return t>=13312&&t<=19903},"Yijing Hexagram Symbols":function(t){return t>=19904&&t<=19967},"CJK Unified Ideographs":function(t){return t>=19968&&t<=40959},"Yi Syllables":function(t){return t>=40960&&t<=42127},"Yi Radicals":function(t){return t>=42128&&t<=42191},"Hangul Jamo Extended-A":function(t){return t>=43360&&t<=43391},"Hangul Syllables":function(t){return t>=44032&&t<=55215},"Hangul Jamo Extended-B":function(t){return t>=55216&&t<=55295},"Private Use Area":function(t){return t>=57344&&t<=63743},"CJK Compatibility Ideographs":function(t){return t>=63744&&t<=64255},"Arabic Presentation Forms-A":function(t){return t>=64336&&t<=65023},"Vertical Forms":function(t){return t>=65040&&t<=65055},"CJK Compatibility Forms":function(t){return t>=65072&&t<=65103},"Small Form Variants":function(t){return t>=65104&&t<=65135},"Arabic Presentation Forms-B":function(t){return t>=65136&&t<=65279},"Halfwidth and Fullwidth Forms":function(t){return t>=65280&&t<=65519}}
function ji(t){for(var e=0,r=t;e<r.length;e+=1)if(qi(r[e].charCodeAt(0)))return!0
return!1}function qi(t){return!(746!==t&&747!==t&&(t<4352||!(Ni["Bopomofo Extended"](t)||Ni.Bopomofo(t)||Ni["CJK Compatibility Forms"](t)&&!(t>=65097&&t<=65103)||Ni["CJK Compatibility Ideographs"](t)||Ni["CJK Compatibility"](t)||Ni["CJK Radicals Supplement"](t)||Ni["CJK Strokes"](t)||!(!Ni["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||Ni["CJK Unified Ideographs Extension A"](t)||Ni["CJK Unified Ideographs"](t)||Ni["Enclosed CJK Letters and Months"](t)||Ni["Hangul Compatibility Jamo"](t)||Ni["Hangul Jamo Extended-A"](t)||Ni["Hangul Jamo Extended-B"](t)||Ni["Hangul Jamo"](t)||Ni["Hangul Syllables"](t)||Ni.Hiragana(t)||Ni["Ideographic Description Characters"](t)||Ni.Kanbun(t)||Ni["Kangxi Radicals"](t)||Ni["Katakana Phonetic Extensions"](t)||Ni.Katakana(t)&&12540!==t||!(!Ni["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!Ni["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||Ni["Unified Canadian Aboriginal Syllabics"](t)||Ni["Unified Canadian Aboriginal Syllabics Extended"](t)||Ni["Vertical Forms"](t)||Ni["Yijing Hexagram Symbols"](t)||Ni["Yi Syllables"](t)||Ni["Yi Radicals"](t))))}function Zi(t){return!(qi(t)||function(t){return!!(Ni["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||Ni["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||Ni["Letterlike Symbols"](t)||Ni["Number Forms"](t)||Ni["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||Ni["Control Pictures"](t)&&9251!==t||Ni["Optical Character Recognition"](t)||Ni["Enclosed Alphanumerics"](t)||Ni["Geometric Shapes"](t)||Ni["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||Ni["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||Ni["CJK Symbols and Punctuation"](t)||Ni.Katakana(t)||Ni["Private Use Area"](t)||Ni["CJK Compatibility Forms"](t)||Ni["Small Form Variants"](t)||Ni["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function Gi(t){return t>=1424&&t<=2303||Ni["Arabic Presentation Forms-A"](t)||Ni["Arabic Presentation Forms-B"](t)}function Xi(t,e){return!(!e&&Gi(t)||t>=2304&&t<=3583||t>=3840&&t<=4255||Ni.Khmer(t))}function Wi(t){for(var e=0,r=t;e<r.length;e+=1)if(Gi(r[e].charCodeAt(0)))return!0
return!1}var Ki=null,Hi="unavailable",Ji=null,Yi=function(t){t&&"string"==typeof t&&t.indexOf("NetworkError")>-1&&(Hi="error"),Ki&&Ki(t)}
function Qi(){$i.fire(new St("pluginStateChange",{pluginStatus:Hi,pluginURL:Ji}))}var $i=new It,tn=function(){return Hi},en=function(){if("deferred"!==Hi||!Ji)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified")
Hi="loading",Qi(),Ji&&_t({url:Ji},(function(t){t?Yi(t):(Hi="loaded",Qi())}))},rn={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:function(){return"loaded"===Hi||null!=rn.applyArabicShaping},isLoading:function(){return"loading"===Hi},setState:function(t){Hi=t.pluginStatus,Ji=t.pluginURL},isParsed:function(){return null!=rn.applyArabicShaping&&null!=rn.processBidirectionalText&&null!=rn.processStyledBidirectionalText},getPluginURL:function(){return Ji}},nn=function(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new Vi,this.transition={})}
nn.prototype.isSupportedScript=function(t){return function(t,e){for(var r=0,i=t;r<i.length;r+=1)if(!Xi(i[r].charCodeAt(0),e))return!1
return!0}(t,rn.isLoaded())},nn.prototype.crossFadingFactor=function(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)},nn.prototype.getCrossfadeParameters=function(){var t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor()
return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}}
var on=function(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(Lr(t))return new Wr(t,e)
if(jr(t)){var r=Xr(t,e)
if("error"===r.result)throw new Error(r.value.map((function(t){return t.key+": "+t.message})).join(", "))
return r.value}var i=t
return"string"==typeof t&&"color"===e.type&&(i=Yt.parse(t)),{kind:"constant",evaluate:function(){return i}}}(void 0===e?t.specification.default:e,t.specification)}
on.prototype.isDataDriven=function(){return"source"===this.expression.kind||"composite"===this.expression.kind},on.prototype.possiblyEvaluate=function(t,e,r){return this.property.possiblyEvaluate(this,t,e,r)}
var an=function(t){this.property=t,this.value=new on(t,void 0)}
an.prototype.transitioned=function(t,e){return new ln(this.property,this.value,e,c({},t.transition,this.transition),t.now)},an.prototype.untransitioned=function(){return new ln(this.property,this.value,null,{},0)}
var sn=function(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues)}
sn.prototype.getValue=function(t){return v(this._values[t].value.value)},sn.prototype.setValue=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new an(this._values[t].property)),this._values[t].value=new on(this._values[t].property,null===e?void 0:v(e))},sn.prototype.getTransition=function(t){return v(this._values[t].transition)},sn.prototype.setTransition=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new an(this._values[t].property)),this._values[t].transition=v(e)||void 0},sn.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var i=r[e],n=this.getValue(i)
void 0!==n&&(t[i]=n)
var o=this.getTransition(i)
void 0!==o&&(t[i+"-transition"]=o)}return t},sn.prototype.transitioned=function(t,e){for(var r=new un(this._properties),i=0,n=Object.keys(this._values);i<n.length;i+=1){var o=n[i]
r._values[o]=this._values[o].transitioned(t,e._values[o])}return r},sn.prototype.untransitioned=function(){for(var t=new un(this._properties),e=0,r=Object.keys(this._values);e<r.length;e+=1){var i=r[e]
t._values[i]=this._values[i].untransitioned()}return t}
var ln=function(t,e,r,i,n){this.property=t,this.value=e,this.begin=n+i.delay||0,this.end=this.begin+i.duration||0,t.specification.transition&&(i.delay||i.duration)&&(this.prior=r)}
ln.prototype.possiblyEvaluate=function(t,e,r){var i=t.now||0,n=this.value.possiblyEvaluate(t,e,r),o=this.prior
if(o){if(i>this.end)return this.prior=null,n
if(this.value.isDataDriven())return this.prior=null,n
if(i<this.begin)return o.possiblyEvaluate(t,e,r)
var a=(i-this.begin)/(this.end-this.begin)
return this.property.interpolate(o.possiblyEvaluate(t,e,r),n,function(t){if(t<=0)return 0
if(t>=1)return 1
var e=t*t,r=e*t
return 4*(t<.5?r:3*(t-e)+r-.75)}(a))}return n}
var un=function(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues)}
un.prototype.possiblyEvaluate=function(t,e){for(var r=new hn(this._properties),i=0,n=Object.keys(this._values);i<n.length;i+=1){var o=n[i]
r._values[o]=this._values[o].possiblyEvaluate(t,e)}return r},un.prototype.hasTransition=function(){for(var t=0,e=Object.keys(this._values);t<e.length;t+=1)if(this._values[e[t]].prior)return!0
return!1}
var cn=function(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues)}
cn.prototype.getValue=function(t){return v(this._values[t].value)},cn.prototype.setValue=function(t,e){this._values[t]=new on(this._values[t].property,null===e?void 0:v(e))},cn.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var i=r[e],n=this.getValue(i)
void 0!==n&&(t[i]=n)}return t},cn.prototype.possiblyEvaluate=function(t,e){for(var r=new hn(this._properties),i=0,n=Object.keys(this._values);i<n.length;i+=1){var o=n[i]
r._values[o]=this._values[o].possiblyEvaluate(t,e)}return r}
var pn=function(t,e,r){this.property=t,this.value=e,this.parameters=r}
pn.prototype.isConstant=function(){return"constant"===this.value.kind},pn.prototype.constantOr=function(t){return"constant"===this.value.kind?this.value.value:t},pn.prototype.evaluate=function(t,e,r,i){return this.property.evaluate(this.value,this.parameters,t,e,r,i)}
var hn=function(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues)}
hn.prototype.get=function(t){return this._values[t]}
var fn=function(t){this.specification=t}
fn.prototype.possiblyEvaluate=function(t,e){return t.expression.evaluate(e)},fn.prototype.interpolate=function(t,e,r){var i=je[this.specification.type]
return i?i(t,e,r):t}
var dn=function(t,e){this.specification=t,this.overrides=e}
dn.prototype.possiblyEvaluate=function(t,e,r,i){return new pn(this,"constant"===t.expression.kind||"camera"===t.expression.kind?{kind:"constant",value:t.expression.evaluate(e,null,{},r,i)}:t.expression,e)},dn.prototype.interpolate=function(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t
if(void 0===t.value.value||void 0===e.value.value)return new pn(this,{kind:"constant",value:void 0},t.parameters)
var i=je[this.specification.type]
return i?new pn(this,{kind:"constant",value:i(t.value.value,e.value.value,r)},t.parameters):t},dn.prototype.evaluate=function(t,e,r,i,n,o){return"constant"===t.kind?t.value:t.evaluate(e,r,i,n,o)}
var mn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.possiblyEvaluate=function(t,e,r,i){if(void 0===t.value)return new pn(this,{kind:"constant",value:void 0},e)
if("constant"===t.expression.kind){var n=t.expression.evaluate(e,null,{},r,i),o="resolvedImage"===t.property.specification.type&&"string"!=typeof n?n.name:n,a=this._calculate(o,o,o,e)
return new pn(this,{kind:"constant",value:a},e)}if("camera"===t.expression.kind){var s=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e)
return new pn(this,{kind:"constant",value:s},e)}return new pn(this,t.expression,e)},e.prototype.evaluate=function(t,e,r,i,n,o){if("source"===t.kind){var a=t.evaluate(e,r,i,n,o)
return this._calculate(a,a,a,e)}return"composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,i),t.evaluate({zoom:Math.floor(e.zoom)},r,i),t.evaluate({zoom:Math.floor(e.zoom)+1},r,i),e):t.value},e.prototype._calculate=function(t,e,r,i){return i.zoom>i.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},e.prototype.interpolate=function(t){return t},e}(dn),yn=function(t){this.specification=t}
yn.prototype.possiblyEvaluate=function(t,e,r,i){if(void 0!==t.value){if("constant"===t.expression.kind){var n=t.expression.evaluate(e,null,{},r,i)
return this._calculate(n,n,n,e)}return this._calculate(t.expression.evaluate(new nn(Math.floor(e.zoom-1),e)),t.expression.evaluate(new nn(Math.floor(e.zoom),e)),t.expression.evaluate(new nn(Math.floor(e.zoom+1),e)),e)}},yn.prototype._calculate=function(t,e,r,i){return i.zoom>i.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},yn.prototype.interpolate=function(t){return t}
var gn=function(t){this.specification=t}
gn.prototype.possiblyEvaluate=function(t,e,r,i){return!!t.expression.evaluate(e,null,{},r,i)},gn.prototype.interpolate=function(){return!1}
var _n=function(t){for(var e in this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[],t){var r=t[e]
r.specification.overridable&&this.overridableProperties.push(e)
var i=this.defaultPropertyValues[e]=new on(r,void 0),n=this.defaultTransitionablePropertyValues[e]=new an(r)
this.defaultTransitioningPropertyValues[e]=n.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=i.possiblyEvaluate({})}}
Li("DataDrivenProperty",dn),Li("DataConstantProperty",fn),Li("CrossFadedDataDrivenProperty",mn),Li("CrossFadedProperty",yn),Li("ColorRampProperty",gn)
var vn=function(t){function e(e,r){if(t.call(this),this.id=e.id,this.type=e.type,this._featureFilter={filter:function(){return!0},needGeometry:!1},"custom"!==e.type&&(this.metadata=(e=e).metadata,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,"background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),r.layout&&(this._unevaluatedLayout=new cn(r.layout)),r.paint)){for(var i in this._transitionablePaint=new sn(r.paint),e.paint)this.setPaintProperty(i,e.paint[i],{validate:!1})
for(var n in e.layout)this.setLayoutProperty(n,e.layout[n],{validate:!1})
this._transitioningPaint=this._transitionablePaint.untransitioned()}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getCrossfadeParameters=function(){return this._crossfadeParameters},e.prototype.getLayoutProperty=function(t){return"visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)},e.prototype.setLayoutProperty=function(t,e,r){void 0===r&&(r={}),null!=e&&this._validate(Ai,"layers."+this.id+".layout."+t,t,e,r)||("visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e)},e.prototype.getPaintProperty=function(t){return y(t,"-transition")?this._transitionablePaint.getTransition(t.slice(0,-"-transition".length)):this._transitionablePaint.getValue(t)},e.prototype.setPaintProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e&&this._validate(Ei,"layers."+this.id+".paint."+t,t,e,r))return!1
if(y(t,"-transition"))return this._transitionablePaint.setTransition(t.slice(0,-"-transition".length),e||void 0),!1
var i=this._transitionablePaint._values[t],n="cross-faded-data-driven"===i.property.specification["property-type"],o=i.value.isDataDriven(),a=i.value
this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t)
var s=this._transitionablePaint._values[t].value
return s.isDataDriven()||o||n||this._handleOverridablePaintPropertyUpdate(t,a,s)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){},e.prototype._handleOverridablePaintPropertyUpdate=function(t,e,r){return!1},e.prototype.isHidden=function(t){return!!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility},e.prototype.updateTransitions=function(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint)},e.prototype.hasTransition=function(){return this._transitioningPaint.hasTransition()},e.prototype.recalculate=function(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,e)},e.prototype.serialize=function(){var t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()}
return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),_(t,(function(t,e){return!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)}))},e.prototype._validate=function(t,e,r,i,n){return void 0===n&&(n={}),(!n||!1!==n.validate)&&zi(this,t.call(Ti,{key:e,layerType:this.type,objectKey:r,value:i,styleSpec:Et,style:{glyphs:!0,sprite:!0}}))},e.prototype.is3D=function(){return!1},e.prototype.isTileClipped=function(){return!1},e.prototype.hasOffscreenPass=function(){return!1},e.prototype.resize=function(){},e.prototype.isStateDependent=function(){for(var t in this.paint._values){var e=this.paint.get(t)
if(e instanceof pn&&Cr(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return!0}return!1},e}(It),xn={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},bn=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8},wn=function(){this.isTransferred=!1,this.capacity=-1,this.resize(0)}
function Sn(t,e){void 0===e&&(e=1)
var r=0,i=0
return{members:t.map((function(t){var n=xn[t.type].BYTES_PER_ELEMENT,o=r=Tn(r,Math.max(e,n)),a=t.components||1
return i=Math.max(i,n),r+=n*a,{name:t.name,type:t.type,components:a,offset:o}})),size:Tn(r,Math.max(i,e)),alignment:e}}function Tn(t,e){return Math.ceil(t/e)*e}wn.serialize=function(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}},wn.deserialize=function(t){var e=Object.create(this.prototype)
return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e},wn.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews())},wn.prototype.clear=function(){this.length=0},wn.prototype.resize=function(t){this.reserve(t),this.length=t},wn.prototype.reserve=function(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement)
var e=this.uint8
this._refreshViews(),e&&this.uint8.set(e)}},wn.prototype._refreshViews=function(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")}
var In=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e){var r=this.length
return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var i=2*t
return this.int16[i+0]=e,this.int16[i+1]=r,t},e}(wn)
In.prototype.bytesPerElement=4,Li("StructArrayLayout2i4",In)
var En=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i){var n=this.length
return this.resize(n+1),this.emplace(n,t,e,r,i)},e.prototype.emplace=function(t,e,r,i,n){var o=4*t
return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=i,this.int16[o+3]=n,t},e}(wn)
En.prototype.bytesPerElement=8,Li("StructArrayLayout4i8",En)
var An=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o){var a=this.length
return this.resize(a+1),this.emplace(a,t,e,r,i,n,o)},e.prototype.emplace=function(t,e,r,i,n,o,a){var s=6*t
return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=i,this.int16[s+3]=n,this.int16[s+4]=o,this.int16[s+5]=a,t},e}(wn)
An.prototype.bytesPerElement=12,Li("StructArrayLayout2i4i12",An)
var zn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o){var a=this.length
return this.resize(a+1),this.emplace(a,t,e,r,i,n,o)},e.prototype.emplace=function(t,e,r,i,n,o,a){var s=4*t,l=8*t
return this.int16[s+0]=e,this.int16[s+1]=r,this.uint8[l+4]=i,this.uint8[l+5]=n,this.uint8[l+6]=o,this.uint8[l+7]=a,t},e}(wn)
zn.prototype.bytesPerElement=8,Li("StructArrayLayout2i4ub8",zn)
var Pn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s,l,u){var c=this.length
return this.resize(c+1),this.emplace(c,t,e,r,i,n,o,a,s,l,u)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l,u,c){var p=9*t,h=18*t
return this.uint16[p+0]=e,this.uint16[p+1]=r,this.uint16[p+2]=i,this.uint16[p+3]=n,this.uint16[p+4]=o,this.uint16[p+5]=a,this.uint16[p+6]=s,this.uint16[p+7]=l,this.uint8[h+16]=u,this.uint8[h+17]=c,t},e}(wn)
Pn.prototype.bytesPerElement=18,Li("StructArrayLayout8ui2ub18",Pn)
var Cn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s,l,u,c,p){var h=this.length
return this.resize(h+1),this.emplace(h,t,e,r,i,n,o,a,s,l,u,c,p)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l,u,c,p,h){var f=12*t
return this.int16[f+0]=e,this.int16[f+1]=r,this.int16[f+2]=i,this.int16[f+3]=n,this.uint16[f+4]=o,this.uint16[f+5]=a,this.uint16[f+6]=s,this.uint16[f+7]=l,this.int16[f+8]=u,this.int16[f+9]=c,this.int16[f+10]=p,this.int16[f+11]=h,t},e}(wn)
Cn.prototype.bytesPerElement=24,Li("StructArrayLayout4i4ui4i24",Cn)
var kn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r){var i=this.length
return this.resize(i+1),this.emplace(i,t,e,r)},e.prototype.emplace=function(t,e,r,i){var n=3*t
return this.float32[n+0]=e,this.float32[n+1]=r,this.float32[n+2]=i,t},e}(wn)
kn.prototype.bytesPerElement=12,Li("StructArrayLayout3f12",kn)
var Mn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t){var e=this.length
return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){return this.uint32[1*t+0]=e,t},e}(wn)
Mn.prototype.bytesPerElement=4,Li("StructArrayLayout1ul4",Mn)
var Dn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s,l){var u=this.length
return this.resize(u+1),this.emplace(u,t,e,r,i,n,o,a,s,l)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l,u){var c=10*t,p=5*t
return this.int16[c+0]=e,this.int16[c+1]=r,this.int16[c+2]=i,this.int16[c+3]=n,this.int16[c+4]=o,this.int16[c+5]=a,this.uint32[p+3]=s,this.uint16[c+8]=l,this.uint16[c+9]=u,t},e}(wn)
Dn.prototype.bytesPerElement=20,Li("StructArrayLayout6i1ul2ui20",Dn)
var Ln=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o){var a=this.length
return this.resize(a+1),this.emplace(a,t,e,r,i,n,o)},e.prototype.emplace=function(t,e,r,i,n,o,a){var s=6*t
return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=i,this.int16[s+3]=n,this.int16[s+4]=o,this.int16[s+5]=a,t},e}(wn)
Ln.prototype.bytesPerElement=12,Li("StructArrayLayout2i2i2i12",Ln)
var Rn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n){var o=this.length
return this.resize(o+1),this.emplace(o,t,e,r,i,n)},e.prototype.emplace=function(t,e,r,i,n,o){var a=4*t,s=8*t
return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=i,this.int16[s+6]=n,this.int16[s+7]=o,t},e}(wn)
Rn.prototype.bytesPerElement=16,Li("StructArrayLayout2f1f2i16",Rn)
var Bn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i){var n=this.length
return this.resize(n+1),this.emplace(n,t,e,r,i)},e.prototype.emplace=function(t,e,r,i,n){var o=12*t,a=3*t
return this.uint8[o+0]=e,this.uint8[o+1]=r,this.float32[a+1]=i,this.float32[a+2]=n,t},e}(wn)
Bn.prototype.bytesPerElement=12,Li("StructArrayLayout2ub2f12",Bn)
var Fn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r){var i=this.length
return this.resize(i+1),this.emplace(i,t,e,r)},e.prototype.emplace=function(t,e,r,i){var n=3*t
return this.uint16[n+0]=e,this.uint16[n+1]=r,this.uint16[n+2]=i,t},e}(wn)
Fn.prototype.bytesPerElement=6,Li("StructArrayLayout3ui6",Fn)
var On=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y){var g=this.length
return this.resize(g+1),this.emplace(g,t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,g){var _=24*t,v=12*t,x=48*t
return this.int16[_+0]=e,this.int16[_+1]=r,this.uint16[_+2]=i,this.uint16[_+3]=n,this.uint32[v+2]=o,this.uint32[v+3]=a,this.uint32[v+4]=s,this.uint16[_+10]=l,this.uint16[_+11]=u,this.uint16[_+12]=c,this.float32[v+7]=p,this.float32[v+8]=h,this.uint8[x+36]=f,this.uint8[x+37]=d,this.uint8[x+38]=m,this.uint32[v+10]=y,this.int16[_+22]=g,t},e}(wn)
On.prototype.bytesPerElement=48,Li("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",On)
var Un=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,g,_,v,x,b,w,S,T,I,E,A){var z=this.length
return this.resize(z+1),this.emplace(z,t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,g,_,v,x,b,w,S,T,I,E,A)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,g,_,v,x,b,w,S,T,I,E,A,z){var P=34*t,C=17*t
return this.int16[P+0]=e,this.int16[P+1]=r,this.int16[P+2]=i,this.int16[P+3]=n,this.int16[P+4]=o,this.int16[P+5]=a,this.int16[P+6]=s,this.int16[P+7]=l,this.uint16[P+8]=u,this.uint16[P+9]=c,this.uint16[P+10]=p,this.uint16[P+11]=h,this.uint16[P+12]=f,this.uint16[P+13]=d,this.uint16[P+14]=m,this.uint16[P+15]=y,this.uint16[P+16]=g,this.uint16[P+17]=_,this.uint16[P+18]=v,this.uint16[P+19]=x,this.uint16[P+20]=b,this.uint16[P+21]=w,this.uint16[P+22]=S,this.uint32[C+12]=T,this.float32[C+13]=I,this.float32[C+14]=E,this.float32[C+15]=A,this.float32[C+16]=z,t},e}(wn)
Un.prototype.bytesPerElement=68,Li("StructArrayLayout8i15ui1ul4f68",Un)
var Vn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t){var e=this.length
return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){return this.float32[1*t+0]=e,t},e}(wn)
Vn.prototype.bytesPerElement=4,Li("StructArrayLayout1f4",Vn)
var Nn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r){var i=this.length
return this.resize(i+1),this.emplace(i,t,e,r)},e.prototype.emplace=function(t,e,r,i){var n=3*t
return this.int16[n+0]=e,this.int16[n+1]=r,this.int16[n+2]=i,t},e}(wn)
Nn.prototype.bytesPerElement=6,Li("StructArrayLayout3i6",Nn)
var jn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r){var i=this.length
return this.resize(i+1),this.emplace(i,t,e,r)},e.prototype.emplace=function(t,e,r,i){var n=4*t
return this.uint32[2*t+0]=e,this.uint16[n+2]=r,this.uint16[n+3]=i,t},e}(wn)
jn.prototype.bytesPerElement=8,Li("StructArrayLayout1ul2ui8",jn)
var qn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e){var r=this.length
return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var i=2*t
return this.uint16[i+0]=e,this.uint16[i+1]=r,t},e}(wn)
qn.prototype.bytesPerElement=4,Li("StructArrayLayout2ui4",qn)
var Zn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t){var e=this.length
return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){return this.uint16[1*t+0]=e,t},e}(wn)
Zn.prototype.bytesPerElement=2,Li("StructArrayLayout1ui2",Zn)
var Gn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e){var r=this.length
return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var i=2*t
return this.float32[i+0]=e,this.float32[i+1]=r,t},e}(wn)
Gn.prototype.bytesPerElement=8,Li("StructArrayLayout2f8",Gn)
var Xn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i){var n=this.length
return this.resize(n+1),this.emplace(n,t,e,r,i)},e.prototype.emplace=function(t,e,r,i,n){var o=4*t
return this.float32[o+0]=e,this.float32[o+1]=r,this.float32[o+2]=i,this.float32[o+3]=n,t},e}(wn)
Xn.prototype.bytesPerElement=16,Li("StructArrayLayout4f16",Xn)
var Wn=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e
var r={anchorPointX:{configurable:!0},anchorPointY:{configurable:!0},x1:{configurable:!0},y1:{configurable:!0},x2:{configurable:!0},y2:{configurable:!0},featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0},anchorPoint:{configurable:!0}}
return r.anchorPointX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorPointY.get=function(){return this._structArray.int16[this._pos2+1]},r.x1.get=function(){return this._structArray.int16[this._pos2+2]},r.y1.get=function(){return this._structArray.int16[this._pos2+3]},r.x2.get=function(){return this._structArray.int16[this._pos2+4]},r.y2.get=function(){return this._structArray.int16[this._pos2+5]},r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.anchorPoint.get=function(){return new n(this.anchorPointX,this.anchorPointY)},Object.defineProperties(e.prototype,r),e}(bn)
Wn.prototype.size=20
var Kn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.get=function(t){return new Wn(this,t)},e}(Dn)
Li("CollisionBoxArray",Kn)
var Hn=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e
var r={anchorX:{configurable:!0},anchorY:{configurable:!0},glyphStartIndex:{configurable:!0},numGlyphs:{configurable:!0},vertexStartIndex:{configurable:!0},lineStartIndex:{configurable:!0},lineLength:{configurable:!0},segment:{configurable:!0},lowerSize:{configurable:!0},upperSize:{configurable:!0},lineOffsetX:{configurable:!0},lineOffsetY:{configurable:!0},writingMode:{configurable:!0},placedOrientation:{configurable:!0},hidden:{configurable:!0},crossTileID:{configurable:!0},associatedIconIndex:{configurable:!0}}
return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.glyphStartIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.numGlyphs.get=function(){return this._structArray.uint16[this._pos2+3]},r.vertexStartIndex.get=function(){return this._structArray.uint32[this._pos4+2]},r.lineStartIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.lineLength.get=function(){return this._structArray.uint32[this._pos4+4]},r.segment.get=function(){return this._structArray.uint16[this._pos2+10]},r.lowerSize.get=function(){return this._structArray.uint16[this._pos2+11]},r.upperSize.get=function(){return this._structArray.uint16[this._pos2+12]},r.lineOffsetX.get=function(){return this._structArray.float32[this._pos4+7]},r.lineOffsetY.get=function(){return this._structArray.float32[this._pos4+8]},r.writingMode.get=function(){return this._structArray.uint8[this._pos1+36]},r.placedOrientation.get=function(){return this._structArray.uint8[this._pos1+37]},r.placedOrientation.set=function(t){this._structArray.uint8[this._pos1+37]=t},r.hidden.get=function(){return this._structArray.uint8[this._pos1+38]},r.hidden.set=function(t){this._structArray.uint8[this._pos1+38]=t},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+10]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+10]=t},r.associatedIconIndex.get=function(){return this._structArray.int16[this._pos2+22]},Object.defineProperties(e.prototype,r),e}(bn)
Hn.prototype.size=48
var Jn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.get=function(t){return new Hn(this,t)},e}(On)
Li("PlacedSymbolArray",Jn)
var Yn=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e
var r={anchorX:{configurable:!0},anchorY:{configurable:!0},rightJustifiedTextSymbolIndex:{configurable:!0},centerJustifiedTextSymbolIndex:{configurable:!0},leftJustifiedTextSymbolIndex:{configurable:!0},verticalPlacedTextSymbolIndex:{configurable:!0},placedIconSymbolIndex:{configurable:!0},verticalPlacedIconSymbolIndex:{configurable:!0},key:{configurable:!0},textBoxStartIndex:{configurable:!0},textBoxEndIndex:{configurable:!0},verticalTextBoxStartIndex:{configurable:!0},verticalTextBoxEndIndex:{configurable:!0},iconBoxStartIndex:{configurable:!0},iconBoxEndIndex:{configurable:!0},verticalIconBoxStartIndex:{configurable:!0},verticalIconBoxEndIndex:{configurable:!0},featureIndex:{configurable:!0},numHorizontalGlyphVertices:{configurable:!0},numVerticalGlyphVertices:{configurable:!0},numIconVertices:{configurable:!0},numVerticalIconVertices:{configurable:!0},useRuntimeCollisionCircles:{configurable:!0},crossTileID:{configurable:!0},textBoxScale:{configurable:!0},textOffset0:{configurable:!0},textOffset1:{configurable:!0},collisionCircleDiameter:{configurable:!0}}
return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.rightJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+2]},r.centerJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+3]},r.leftJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+4]},r.verticalPlacedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+5]},r.placedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+6]},r.verticalPlacedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+7]},r.key.get=function(){return this._structArray.uint16[this._pos2+8]},r.textBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.textBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+10]},r.verticalTextBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+11]},r.verticalTextBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+12]},r.iconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+13]},r.iconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+14]},r.verticalIconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+15]},r.verticalIconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+16]},r.featureIndex.get=function(){return this._structArray.uint16[this._pos2+17]},r.numHorizontalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+18]},r.numVerticalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+19]},r.numIconVertices.get=function(){return this._structArray.uint16[this._pos2+20]},r.numVerticalIconVertices.get=function(){return this._structArray.uint16[this._pos2+21]},r.useRuntimeCollisionCircles.get=function(){return this._structArray.uint16[this._pos2+22]},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+12]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+12]=t},r.textBoxScale.get=function(){return this._structArray.float32[this._pos4+13]},r.textOffset0.get=function(){return this._structArray.float32[this._pos4+14]},r.textOffset1.get=function(){return this._structArray.float32[this._pos4+15]},r.collisionCircleDiameter.get=function(){return this._structArray.float32[this._pos4+16]},Object.defineProperties(e.prototype,r),e}(bn)
Yn.prototype.size=68
var Qn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.get=function(t){return new Yn(this,t)},e}(Un)
Li("SymbolInstanceArray",Qn)
var $n=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getoffsetX=function(t){return this.float32[1*t+0]},e}(Vn)
Li("GlyphOffsetArray",$n)
var to=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getx=function(t){return this.int16[3*t+0]},e.prototype.gety=function(t){return this.int16[3*t+1]},e.prototype.gettileUnitDistanceFromAnchor=function(t){return this.int16[3*t+2]},e}(Nn)
Li("SymbolLineVertexArray",to)
var eo=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e
var r={featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0}}
return r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+0]},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+3]},Object.defineProperties(e.prototype,r),e}(bn)
eo.prototype.size=8
var ro=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.get=function(t){return new eo(this,t)},e}(jn)
Li("FeatureIndexArray",ro)
var io=Sn([{name:"a_pos",components:2,type:"Int16"}],4).members,no=function(t){void 0===t&&(t=[]),this.segments=t}
function oo(t,e){return 256*(t=l(Math.floor(t),0,255))+l(Math.floor(e),0,255)}no.prototype.prepareSegment=function(t,e,r,i){var n=this.segments[this.segments.length-1]
return t>no.MAX_VERTEX_ARRAY_LENGTH&&b("Max vertices per segment is "+no.MAX_VERTEX_ARRAY_LENGTH+": bucket requested "+t),(!n||n.vertexLength+t>no.MAX_VERTEX_ARRAY_LENGTH||n.sortKey!==i)&&(n={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==i&&(n.sortKey=i),this.segments.push(n)),n},no.prototype.get=function(){return this.segments},no.prototype.destroy=function(){for(var t=0,e=this.segments;t<e.length;t+=1){var r=e[t]
for(var i in r.vaos)r.vaos[i].destroy()}},no.simpleSegment=function(t,e,r,i){return new no([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:i,vaos:{},sortKey:0}])},no.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,Li("SegmentVector",no)
var ao=Sn([{name:"a_pattern_from",components:4,type:"Uint16"},{name:"a_pattern_to",components:4,type:"Uint16"},{name:"a_pixel_ratio_from",components:1,type:"Uint8"},{name:"a_pixel_ratio_to",components:1,type:"Uint8"}]),so=e((function(t){t.exports=function(t,e){var r,i,n,o,a,s,l,u
for(i=t.length-(r=3&t.length),n=e,a=3432918353,s=461845907,u=0;u<i;)l=255&t.charCodeAt(u)|(255&t.charCodeAt(++u))<<8|(255&t.charCodeAt(++u))<<16|(255&t.charCodeAt(++u))<<24,++u,n=27492+(65535&(o=5*(65535&(n=(n^=l=(65535&(l=(l=(65535&l)*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*s+(((l>>>16)*s&65535)<<16)&4294967295)<<13|n>>>19))+((5*(n>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16)
switch(l=0,r){case 3:l^=(255&t.charCodeAt(u+2))<<16
case 2:l^=(255&t.charCodeAt(u+1))<<8
case 1:n^=l=(65535&(l=(l=(65535&(l^=255&t.charCodeAt(u)))*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*s+(((l>>>16)*s&65535)<<16)&4294967295}return n^=t.length,n=2246822507*(65535&(n^=n>>>16))+((2246822507*(n>>>16)&65535)<<16)&4294967295,n=3266489909*(65535&(n^=n>>>13))+((3266489909*(n>>>16)&65535)<<16)&4294967295,(n^=n>>>16)>>>0}})),lo=e((function(t){t.exports=function(t,e){for(var r,i=t.length,n=e^i,o=0;i>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(r>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),i-=4,++o
switch(i){case 3:n^=(255&t.charCodeAt(o+2))<<16
case 2:n^=(255&t.charCodeAt(o+1))<<8
case 1:n=1540483477*(65535&(n^=255&t.charCodeAt(o)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),(n^=n>>>15)>>>0}})),uo=so,co=lo
uo.murmur3=so,uo.murmur2=co
var po=function(){this.ids=[],this.positions=[],this.indexed=!1}
po.prototype.add=function(t,e,r,i){this.ids.push(fo(t)),this.positions.push(e,r,i)},po.prototype.getPositions=function(t){for(var e=fo(t),r=0,i=this.ids.length-1;r<i;){var n=r+i>>1
this.ids[n]>=e?i=n:r=n+1}for(var o=[];this.ids[r]===e;)o.push({index:this.positions[3*r],start:this.positions[3*r+1],end:this.positions[3*r+2]}),r++
return o},po.serialize=function(t,e){var r=new Float64Array(t.ids),i=new Uint32Array(t.positions)
return function t(e,r,i,n){for(;i<n;){for(var o=e[i+n>>1],a=i-1,s=n+1;;){do{a++}while(e[a]<o)
do{s--}while(e[s]>o)
if(a>=s)break
mo(e,a,s),mo(r,3*a,3*s),mo(r,3*a+1,3*s+1),mo(r,3*a+2,3*s+2)}s-i<n-s?(t(e,r,i,s),i=s+1):(t(e,r,s+1,n),n=s)}}(r,i,0,r.length-1),e&&e.push(r.buffer,i.buffer),{ids:r,positions:i}},po.deserialize=function(t){var e=new po
return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e}
var ho=Math.pow(2,53)-1
function fo(t){var e=+t
return!isNaN(e)&&e<=ho?e:uo(String(t))}function mo(t,e,r){var i=t[e]
t[e]=t[r],t[r]=i}Li("FeaturePositionMap",po)
var yo=function(t,e){this.gl=t.gl,this.location=e},go=function(t){function e(e,r){t.call(this,e,r),this.current=0}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t))},e}(yo),_o=function(t){function e(e,r){t.call(this,e,r),this.current=0}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t))},e}(yo),vo=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0]}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]))},e}(yo),xo=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0]}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]))},e}(yo),bo=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0,0]}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]))},e}(yo),wo=function(t){function e(e,r){t.call(this,e,r),this.current=Yt.transparent}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a))},e}(yo),So=new Float32Array(16),To=function(t){function e(e,r){t.call(this,e,r),this.current=So}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t)
for(var e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t)
break}},e}(yo)
function Io(t){return[oo(255*t.r,255*t.g),oo(255*t.b,255*t.a)]}var Eo=function(t,e,r){this.value=t,this.uniformNames=e.map((function(t){return"u_"+t})),this.type=r}
Eo.prototype.setUniform=function(t,e,r){t.set(r.constantOr(this.value))},Eo.prototype.getBinding=function(t,e,r){return"color"===this.type?new wo(t,e):new _o(t,e)}
var Ao=function(t,e){this.uniformNames=e.map((function(t){return"u_"+t})),this.patternFrom=null,this.patternTo=null,this.pixelRatioFrom=1,this.pixelRatioTo=1}
Ao.prototype.setConstantPatternPositions=function(t,e){this.pixelRatioFrom=e.pixelRatio,this.pixelRatioTo=t.pixelRatio,this.patternFrom=e.tlbr,this.patternTo=t.tlbr},Ao.prototype.setUniform=function(t,e,r,i){var n="u_pattern_to"===i?this.patternTo:"u_pattern_from"===i?this.patternFrom:"u_pixel_ratio_to"===i?this.pixelRatioTo:"u_pixel_ratio_from"===i?this.pixelRatioFrom:null
n&&t.set(n)},Ao.prototype.getBinding=function(t,e,r){return"u_pattern"===r.substr(0,9)?new bo(t,e):new _o(t,e)}
var zo=function(t,e,r,i){this.expression=t,this.type=r,this.maxValue=0,this.paintVertexAttributes=e.map((function(t){return{name:"a_"+t,type:"Float32",components:"color"===r?2:1,offset:0}})),this.paintVertexArray=new i}
zo.prototype.populatePaintArray=function(t,e,r,i,n){var o=this.paintVertexArray.length,a=this.expression.evaluate(new nn(0),e,{},i,[],n)
this.paintVertexArray.resize(t),this._setPaintValue(o,t,a)},zo.prototype.updatePaintArray=function(t,e,r,i){var n=this.expression.evaluate({zoom:0},r,i)
this._setPaintValue(t,e,n)},zo.prototype._setPaintValue=function(t,e,r){if("color"===this.type)for(var i=Io(r),n=t;n<e;n++)this.paintVertexArray.emplace(n,i[0],i[1])
else{for(var o=t;o<e;o++)this.paintVertexArray.emplace(o,r)
this.maxValue=Math.max(this.maxValue,Math.abs(r))}},zo.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))},zo.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()}
var Po=function(t,e,r,i,n,o){this.expression=t,this.uniformNames=e.map((function(t){return"u_"+t+"_t"})),this.type=r,this.useIntegerZoom=i,this.zoom=n,this.maxValue=0,this.paintVertexAttributes=e.map((function(t){return{name:"a_"+t,type:"Float32",components:"color"===r?4:2,offset:0}})),this.paintVertexArray=new o}
Po.prototype.populatePaintArray=function(t,e,r,i,n){var o=this.expression.evaluate(new nn(this.zoom),e,{},i,[],n),a=this.expression.evaluate(new nn(this.zoom+1),e,{},i,[],n),s=this.paintVertexArray.length
this.paintVertexArray.resize(t),this._setPaintValue(s,t,o,a)},Po.prototype.updatePaintArray=function(t,e,r,i){var n=this.expression.evaluate({zoom:this.zoom},r,i),o=this.expression.evaluate({zoom:this.zoom+1},r,i)
this._setPaintValue(t,e,n,o)},Po.prototype._setPaintValue=function(t,e,r,i){if("color"===this.type)for(var n=Io(r),o=Io(i),a=t;a<e;a++)this.paintVertexArray.emplace(a,n[0],n[1],o[0],o[1])
else{for(var s=t;s<e;s++)this.paintVertexArray.emplace(s,r,i)
this.maxValue=Math.max(this.maxValue,Math.abs(r),Math.abs(i))}},Po.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))},Po.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()},Po.prototype.setUniform=function(t,e){var r=this.useIntegerZoom?Math.floor(e.zoom):e.zoom,i=l(this.expression.interpolationFactor(r,this.zoom,this.zoom+1),0,1)
t.set(i)},Po.prototype.getBinding=function(t,e,r){return new _o(t,e)}
var Co=function(t,e,r,i,n,o){this.expression=t,this.type=e,this.useIntegerZoom=r,this.zoom=i,this.layerId=o,this.zoomInPaintVertexArray=new n,this.zoomOutPaintVertexArray=new n}
Co.prototype.populatePaintArray=function(t,e,r){var i=this.zoomInPaintVertexArray.length
this.zoomInPaintVertexArray.resize(t),this.zoomOutPaintVertexArray.resize(t),this._setPaintValues(i,t,e.patterns&&e.patterns[this.layerId],r)},Co.prototype.updatePaintArray=function(t,e,r,i,n){this._setPaintValues(t,e,r.patterns&&r.patterns[this.layerId],n)},Co.prototype._setPaintValues=function(t,e,r,i){if(i&&r){var n=i[r.min],o=i[r.mid],a=i[r.max]
if(n&&o&&a)for(var s=t;s<e;s++)this.zoomInPaintVertexArray.emplace(s,o.tl[0],o.tl[1],o.br[0],o.br[1],n.tl[0],n.tl[1],n.br[0],n.br[1],o.pixelRatio,n.pixelRatio),this.zoomOutPaintVertexArray.emplace(s,o.tl[0],o.tl[1],o.br[0],o.br[1],a.tl[0],a.tl[1],a.br[0],a.br[1],o.pixelRatio,a.pixelRatio)}},Co.prototype.upload=function(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,ao.members,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,ao.members,this.expression.isStateDependent))},Co.prototype.destroy=function(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy()}
var ko=function(t,e,r,i){this.binders={},this.layoutAttributes=i,this._buffers=[]
var n=[]
for(var o in t.paint._values)if(r(o)){var a=t.paint.get(o)
if(a instanceof pn&&Cr(a.property.specification)){var s=Do(o,t.type),l=a.value,u=a.property.specification.type,c=a.property.useIntegerZoom,p=a.property.specification["property-type"],h="cross-faded"===p||"cross-faded-data-driven"===p
if("constant"===l.kind)this.binders[o]=h?new Ao(l.value,s):new Eo(l.value,s,u),n.push("/u_"+o)
else if("source"===l.kind||h){var f=Lo(o,u,"source")
this.binders[o]=h?new Co(l,u,c,e,f,t.id):new zo(l,s,u,f),n.push("/a_"+o)}else{var d=Lo(o,u,"composite")
this.binders[o]=new Po(l,s,u,c,e,d),n.push("/z_"+o)}}}this.cacheKey=n.sort().join("")}
ko.prototype.getMaxValue=function(t){var e=this.binders[t]
return e instanceof zo||e instanceof Po?e.maxValue:0},ko.prototype.populatePaintArrays=function(t,e,r,i,n){for(var o in this.binders){var a=this.binders[o];(a instanceof zo||a instanceof Po||a instanceof Co)&&a.populatePaintArray(t,e,r,i,n)}},ko.prototype.setConstantPatternPositions=function(t,e){for(var r in this.binders){var i=this.binders[r]
i instanceof Ao&&i.setConstantPatternPositions(t,e)}},ko.prototype.updatePaintArrays=function(t,e,r,i,n){var o=!1
for(var a in t)for(var s=0,l=e.getPositions(a);s<l.length;s+=1){var u=l[s],c=r.feature(u.index)
for(var p in this.binders){var h=this.binders[p]
if((h instanceof zo||h instanceof Po||h instanceof Co)&&!0===h.expression.isStateDependent){var f=i.paint.get(p)
h.expression=f.value,h.updatePaintArray(u.start,u.end,c,t[a],n),o=!0}}}return o},ko.prototype.defines=function(){var t=[]
for(var e in this.binders){var r=this.binders[e];(r instanceof Eo||r instanceof Ao)&&t.push.apply(t,r.uniformNames.map((function(t){return"#define HAS_UNIFORM_"+t})))}return t},ko.prototype.getPaintVertexBuffers=function(){return this._buffers},ko.prototype.getUniforms=function(t,e){var r=[]
for(var i in this.binders){var n=this.binders[i]
if(n instanceof Eo||n instanceof Ao||n instanceof Po)for(var o=0,a=n.uniformNames;o<a.length;o+=1){var s=a[o]
if(e[s]){var l=n.getBinding(t,e[s],s)
r.push({name:s,property:i,binding:l})}}}return r},ko.prototype.setUniforms=function(t,e,r,i){for(var n=0,o=e;n<o.length;n+=1){var a=o[n],s=a.name,l=a.property
this.binders[l].setUniform(a.binding,i,r.get(l),s)}},ko.prototype.updatePaintBuffers=function(t){for(var e in this._buffers=[],this.binders){var r=this.binders[e]
if(t&&r instanceof Co){var i=2===t.fromScale?r.zoomInPaintVertexBuffer:r.zoomOutPaintVertexBuffer
i&&this._buffers.push(i)}else(r instanceof zo||r instanceof Po)&&r.paintVertexBuffer&&this._buffers.push(r.paintVertexBuffer)}},ko.prototype.upload=function(t){for(var e in this.binders){var r=this.binders[e];(r instanceof zo||r instanceof Po||r instanceof Co)&&r.upload(t)}this.updatePaintBuffers()},ko.prototype.destroy=function(){for(var t in this.binders){var e=this.binders[t];(e instanceof zo||e instanceof Po||e instanceof Co)&&e.destroy()}}
var Mo=function(t,e,r,i){void 0===i&&(i=function(){return!0}),this.programConfigurations={}
for(var n=0,o=e;n<o.length;n+=1){var a=o[n]
this.programConfigurations[a.id]=new ko(a,r,i,t)}this.needsUpload=!1,this._featureMap=new po,this._bufferOffset=0}
function Do(t,e){return{"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-extrusion-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"]}[t]||[t.replace(e+"-","").replace(/-/g,"_")]}function Lo(t,e,r){var i={color:{source:Gn,composite:Xn},number:{source:Vn,composite:Gn}},n=function(t){return{"line-pattern":{source:Pn,composite:Pn},"fill-pattern":{source:Pn,composite:Pn},"fill-extrusion-pattern":{source:Pn,composite:Pn}}[t]}(t)
return n&&n[r]||i[e][r]}Mo.prototype.populatePaintArrays=function(t,e,r,i,n,o){for(var a in this.programConfigurations)this.programConfigurations[a].populatePaintArrays(t,e,i,n,o)
void 0!==e.id&&this._featureMap.add(e.id,r,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0},Mo.prototype.updatePaintArrays=function(t,e,r,i){for(var n=0,o=r;n<o.length;n+=1){var a=o[n]
this.needsUpload=this.programConfigurations[a.id].updatePaintArrays(t,this._featureMap,e,a,i)||this.needsUpload}},Mo.prototype.get=function(t){return this.programConfigurations[t]},Mo.prototype.upload=function(t){if(this.needsUpload){for(var e in this.programConfigurations)this.programConfigurations[e].upload(t)
this.needsUpload=!1}},Mo.prototype.destroy=function(){for(var t in this.programConfigurations)this.programConfigurations[t].destroy()},Li("ConstantBinder",Eo),Li("CrossFadedConstantBinder",Ao),Li("SourceExpressionBinder",zo),Li("CrossFadedCompositeBinder",Co),Li("CompositeExpressionBinder",Po),Li("ProgramConfiguration",ko,{omit:["_buffers"]}),Li("ProgramConfigurationSet",Mo)
var Ro={min:-1*Math.pow(2,14),max:Math.pow(2,14)-1}
function Bo(t){for(var e=8192/t.extent,r=t.loadGeometry(),i=0;i<r.length;i++)for(var n=r[i],o=0;o<n.length;o++){var a=n[o]
a.x=Math.round(a.x*e),a.y=Math.round(a.y*e),(a.x<Ro.min||a.x>Ro.max||a.y<Ro.min||a.y>Ro.max)&&(b("Geometry exceeds allowed extent, reduce your vector tile buffer size"),a.x=l(a.x,Ro.min,Ro.max),a.y=l(a.y,Ro.min,Ro.max))}return r}function Fo(t,e,r,i,n){t.emplaceBack(2*e+(i+1)/2,2*r+(n+1)/2)}var Oo=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new In,this.indexArray=new Fn,this.segments=new no,this.programConfigurations=new Mo(io,t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}))}
function Uo(t,e){for(var r=0;r<t.length;r++)if(Ko(e,t[r]))return!0
for(var i=0;i<e.length;i++)if(Ko(t,e[i]))return!0
return!!qo(t,e)}function Vo(t,e,r){return!!Ko(t,e)||!!Go(e,t,r)}function No(t,e){if(1===t.length)return Wo(e,t[0])
for(var r=0;r<e.length;r++)for(var i=e[r],n=0;n<i.length;n++)if(Ko(t,i[n]))return!0
for(var o=0;o<t.length;o++)if(Wo(e,t[o]))return!0
for(var a=0;a<e.length;a++)if(qo(t,e[a]))return!0
return!1}function jo(t,e,r){if(t.length>1){if(qo(t,e))return!0
for(var i=0;i<e.length;i++)if(Go(e[i],t,r))return!0}for(var n=0;n<t.length;n++)if(Go(t[n],e,r))return!0
return!1}function qo(t,e){if(0===t.length||0===e.length)return!1
for(var r=0;r<t.length-1;r++)for(var i=t[r],n=t[r+1],o=0;o<e.length-1;o++)if(Zo(i,n,e[o],e[o+1]))return!0
return!1}function Zo(t,e,r,i){return w(t,r,i)!==w(e,r,i)&&w(t,e,r)!==w(t,e,i)}function Go(t,e,r){var i=r*r
if(1===e.length)return t.distSqr(e[0])<i
for(var n=1;n<e.length;n++)if(Xo(t,e[n-1],e[n])<i)return!0
return!1}function Xo(t,e,r){var i=e.distSqr(r)
if(0===i)return t.distSqr(e)
var n=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/i
return t.distSqr(n<0?e:n>1?r:r.sub(e)._mult(n)._add(e))}function Wo(t,e){for(var r,i,n,o=!1,a=0;a<t.length;a++)for(var s=0,l=(r=t[a]).length-1;s<r.length;l=s++)(i=r[s]).y>e.y!=(n=r[l]).y>e.y&&e.x<(n.x-i.x)*(e.y-i.y)/(n.y-i.y)+i.x&&(o=!o)
return o}function Ko(t,e){for(var r=!1,i=0,n=t.length-1;i<t.length;n=i++){var o=t[i],a=t[n]
o.y>e.y!=a.y>e.y&&e.x<(a.x-o.x)*(e.y-o.y)/(a.y-o.y)+o.x&&(r=!r)}return r}function Ho(t,e,r){var i=r[0],n=r[2]
if(t.x<i.x&&e.x<i.x||t.x>n.x&&e.x>n.x||t.y<i.y&&e.y<i.y||t.y>n.y&&e.y>n.y)return!1
var o=w(t,e,r[0])
return o!==w(t,e,r[1])||o!==w(t,e,r[2])||o!==w(t,e,r[3])}function Jo(t,e,r){var i=e.paint.get(t).value
return"constant"===i.kind?i.value:r.programConfigurations.get(e.id).getMaxValue(t)}function Yo(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function Qo(t,e,r,i,o){if(!e[0]&&!e[1])return t
var a=n.convert(e)._mult(o)
"viewport"===r&&a._rotate(-i)
for(var s=[],l=0;l<t.length;l++)s.push(t[l].sub(a))
return s}Oo.prototype.populate=function(t,e,r){var i=this.layers[0],n=[],o=null
"circle"===i.type&&(o=i.layout.get("circle-sort-key"))
for(var a=0,s=t;a<s.length;a+=1){var l=s[a],u=l.feature,c=l.id,p=l.index,h=l.sourceLayerIndex,f=this.layers[0]._featureFilter.needGeometry,d={type:u.type,id:c,properties:u.properties,geometry:f?Bo(u):[]}
if(this.layers[0]._featureFilter.filter(new nn(this.zoom),d,r)){f||(d.geometry=Bo(u))
var m=o?o.evaluate(d,{},r):void 0
n.push({id:c,properties:u.properties,type:u.type,sourceLayerIndex:h,index:p,geometry:d.geometry,patterns:{},sortKey:m})}}o&&n.sort((function(t,e){return t.sortKey-e.sortKey}))
for(var y=0,g=n;y<g.length;y+=1){var _=g[y],v=_.geometry,x=_.index,b=_.sourceLayerIndex,w=t[x].feature
this.addFeature(_,v,x,r),e.featureIndex.insert(w,v,x,b,this.index)}},Oo.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r)},Oo.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Oo.prototype.uploadPending=function(){return!this.uploaded||this.programConfigurations.needsUpload},Oo.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,io),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0},Oo.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},Oo.prototype.addFeature=function(t,e,r,i){for(var n=0,o=e;n<o.length;n+=1)for(var a=0,s=o[n];a<s.length;a+=1){var l=s[a],u=l.x,c=l.y
if(!(u<0||u>=8192||c<0||c>=8192)){var p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),h=p.vertexLength
Fo(this.layoutVertexArray,u,c,-1,-1),Fo(this.layoutVertexArray,u,c,1,-1),Fo(this.layoutVertexArray,u,c,1,1),Fo(this.layoutVertexArray,u,c,-1,1),this.indexArray.emplaceBack(h,h+1,h+2),this.indexArray.emplaceBack(h,h+3,h+2),p.vertexLength+=4,p.primitiveLength+=2}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{},i)},Li("CircleBucket",Oo,{omit:["layers"]})
var $o=new _n({"circle-sort-key":new dn(Et.layout_circle["circle-sort-key"])}),ta={paint:new _n({"circle-radius":new dn(Et.paint_circle["circle-radius"]),"circle-color":new dn(Et.paint_circle["circle-color"]),"circle-blur":new dn(Et.paint_circle["circle-blur"]),"circle-opacity":new dn(Et.paint_circle["circle-opacity"]),"circle-translate":new fn(Et.paint_circle["circle-translate"]),"circle-translate-anchor":new fn(Et.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new fn(Et.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new fn(Et.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new dn(Et.paint_circle["circle-stroke-width"]),"circle-stroke-color":new dn(Et.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new dn(Et.paint_circle["circle-stroke-opacity"])}),layout:$o},ea="undefined"!=typeof Float32Array?Float32Array:Array
function ra(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ia(t,e,r){var i=e[0],n=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],p=e[8],h=e[9],f=e[10],d=e[11],m=e[12],y=e[13],g=e[14],_=e[15],v=r[0],x=r[1],b=r[2],w=r[3]
return t[0]=v*i+x*s+b*p+w*m,t[1]=v*n+x*l+b*h+w*y,t[2]=v*o+x*u+b*f+w*g,t[3]=v*a+x*c+b*d+w*_,t[4]=(v=r[4])*i+(x=r[5])*s+(b=r[6])*p+(w=r[7])*m,t[5]=v*n+x*l+b*h+w*y,t[6]=v*o+x*u+b*f+w*g,t[7]=v*a+x*c+b*d+w*_,t[8]=(v=r[8])*i+(x=r[9])*s+(b=r[10])*p+(w=r[11])*m,t[9]=v*n+x*l+b*h+w*y,t[10]=v*o+x*u+b*f+w*g,t[11]=v*a+x*c+b*d+w*_,t[12]=(v=r[12])*i+(x=r[13])*s+(b=r[14])*p+(w=r[15])*m,t[13]=v*n+x*l+b*h+w*y,t[14]=v*o+x*u+b*f+w*g,t[15]=v*a+x*c+b*d+w*_,t}Math.hypot||(Math.hypot=function(){for(var t=arguments,e=0,r=arguments.length;r--;)e+=t[r]*t[r]
return Math.sqrt(e)})
var na,oa=ia
function aa(t,e,r){var i=e[0],n=e[1],o=e[2],a=e[3]
return t[0]=r[0]*i+r[4]*n+r[8]*o+r[12]*a,t[1]=r[1]*i+r[5]*n+r[9]*o+r[13]*a,t[2]=r[2]*i+r[6]*n+r[10]*o+r[14]*a,t[3]=r[3]*i+r[7]*n+r[11]*o+r[15]*a,t}na=new ea(3),ea!=Float32Array&&(na[0]=0,na[1]=0,na[2]=0),function(){var t=new ea(4)
ea!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0)}()
var sa=(function(){var t=new ea(2)
ea!=Float32Array&&(t[0]=0,t[1]=0)}(),function(t){function e(e){t.call(this,e,ta)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createBucket=function(t){return new Oo(t)},e.prototype.queryRadius=function(t){var e=t
return Jo("circle-radius",this,e)+Jo("circle-stroke-width",this,e)+Yo(this.paint.get("circle-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,n,o,a,s){for(var l=Qo(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),o.angle,a),u=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),c="map"===this.paint.get("circle-pitch-alignment"),p=c?l:function(t,e){return t.map((function(t){return la(t,e)}))}(l,s),h=c?u*a:u,f=0,d=i;f<d.length;f+=1)for(var m=0,y=d[f];m<y.length;m+=1){var g=y[m],_=c?g:la(g,s),v=h,x=aa([],[g.x,g.y,0,1],s)
if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?v*=x[3]/o.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(v*=o.cameraToCenterDistance/x[3]),Vo(p,_,v))return!0}return!1},e}(vn))
function la(t,e){var r=aa([],[t.x,t.y,0,1],e)
return new n(r[0]/r[3],r[1]/r[3])}var ua=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(Oo)
function ca(t,e,r,i){var n=e.width,o=e.height
if(i){if(i instanceof Uint8ClampedArray)i=new Uint8Array(i.buffer)
else if(i.length!==n*o*r)throw new RangeError("mismatched image size")}else i=new Uint8Array(n*o*r)
return t.width=n,t.height=o,t.data=i,t}function pa(t,e,r){var i=e.width,n=e.height
if(i!==t.width||n!==t.height){var o=ca({},{width:i,height:n},r)
ha(t,o,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,i),height:Math.min(t.height,n)},r),t.width=i,t.height=n,t.data=o.data}}function ha(t,e,r,i,n,o){if(0===n.width||0===n.height)return e
if(n.width>t.width||n.height>t.height||r.x>t.width-n.width||r.y>t.height-n.height)throw new RangeError("out of range source coordinates for image copy")
if(n.width>e.width||n.height>e.height||i.x>e.width-n.width||i.y>e.height-n.height)throw new RangeError("out of range destination coordinates for image copy")
for(var a=t.data,s=e.data,l=0;l<n.height;l++)for(var u=((r.y+l)*t.width+r.x)*o,c=((i.y+l)*e.width+i.x)*o,p=0;p<n.width*o;p++)s[c+p]=a[u+p]
return e}Li("HeatmapBucket",ua,{omit:["layers"]})
var fa=function(t,e){ca(this,t,1,e)}
fa.prototype.resize=function(t){pa(this,t,1)},fa.prototype.clone=function(){return new fa({width:this.width,height:this.height},new Uint8Array(this.data))},fa.copy=function(t,e,r,i,n){ha(t,e,r,i,n,1)}
var da=function(t,e){ca(this,t,4,e)}
da.prototype.resize=function(t){pa(this,t,4)},da.prototype.replace=function(t,e){e?this.data.set(t):this.data=t instanceof Uint8ClampedArray?new Uint8Array(t.buffer):t},da.prototype.clone=function(){return new da({width:this.width,height:this.height},new Uint8Array(this.data))},da.copy=function(t,e,r,i,n){ha(t,e,r,i,n,4)},Li("AlphaImage",fa),Li("RGBAImage",da)
var ma={paint:new _n({"heatmap-radius":new dn(Et.paint_heatmap["heatmap-radius"]),"heatmap-weight":new dn(Et.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new fn(Et.paint_heatmap["heatmap-intensity"]),"heatmap-color":new gn(Et.paint_heatmap["heatmap-color"]),"heatmap-opacity":new fn(Et.paint_heatmap["heatmap-opacity"])})}
function ya(t,e){for(var r=new Uint8Array(1024),i={},n=0,o=0;n<256;n++,o+=4){i[e]=n/255
var a=t.evaluate(i)
r[o+0]=Math.floor(255*a.r/a.a),r[o+1]=Math.floor(255*a.g/a.a),r[o+2]=Math.floor(255*a.b/a.a),r[o+3]=Math.floor(255*a.a)}return new da({width:256,height:1},r)}var ga=function(t){function e(e){t.call(this,e,ma),this._updateColorRamp()}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createBucket=function(t){return new ua(t)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){"heatmap-color"===t&&this._updateColorRamp()},e.prototype._updateColorRamp=function(){this.colorRamp=ya(this._transitionablePaint._values["heatmap-color"].value.expression,"heatmapDensity"),this.colorRampTexture=null},e.prototype.resize=function(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return!1},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility},e}(vn),_a={paint:new _n({"hillshade-illumination-direction":new fn(Et.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new fn(Et.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new fn(Et.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new fn(Et.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new fn(Et.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new fn(Et.paint_hillshade["hillshade-accent-color"])})},va=function(t){function e(e){t.call(this,e,_a)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility},e}(vn),xa=Sn([{name:"a_pos",components:2,type:"Int16"}],4).members,ba=Sa,wa=Sa
function Sa(t,e,r){r=r||2
var i,n,o,a,s,l,u,c=e&&e.length,p=c?e[0]*r:t.length,h=Ta(t,0,p,r,!0),f=[]
if(!h||h.next===h.prev)return f
if(c&&(h=function(t,e,r,i){var n,o,a,s=[]
for(n=0,o=e.length;n<o;n++)(a=Ta(t,e[n]*i,n<o-1?e[n+1]*i:t.length,i,!1))===a.next&&(a.steiner=!0),s.push(Ra(a))
for(s.sort(ka),n=0;n<s.length;n++)Ma(s[n],r),r=Ia(r,r.next)
return r}(t,e,h,r)),t.length>80*r){i=o=t[0],n=a=t[1]
for(var d=r;d<p;d+=r)(s=t[d])<i&&(i=s),(l=t[d+1])<n&&(n=l),s>o&&(o=s),l>a&&(a=l)
u=0!==(u=Math.max(o-i,a-n))?1/u:0}return Ea(h,f,r,i,n,u),f}function Ta(t,e,r,i,n){var o,a
if(n===Ka(t,e,r,i)>0)for(o=e;o<r;o+=i)a=Ga(o,t[o],t[o+1],a)
else for(o=r-i;o>=e;o-=i)a=Ga(o,t[o],t[o+1],a)
return a&&Ua(a,a.next)&&(Xa(a),a=a.next),a}function Ia(t,e){if(!t)return t
e||(e=t)
var r,i=t
do{if(r=!1,i.steiner||!Ua(i,i.next)&&0!==Oa(i.prev,i,i.next))i=i.next
else{if(Xa(i),(i=e=i.prev)===i.next)break
r=!0}}while(r||i!==e)
return e}function Ea(t,e,r,i,n,o,a){if(t){!a&&o&&function(t,e,r,i){var n=t
do{null===n.z&&(n.z=La(n.x,n.y,e,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==t)
n.prevZ.nextZ=null,n.prevZ=null,function(t){var e,r,i,n,o,a,s,l,u=1
do{for(r=t,t=null,o=null,a=0;r;){for(a++,i=r,s=0,e=0;e<u&&(s++,i=i.nextZ);e++);for(l=u;s>0||l>0&&i;)0!==s&&(0===l||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,l--),o?o.nextZ=n:t=n,n.prevZ=o,o=n
r=i}o.nextZ=null,u*=2}while(a>1)}(n)}(t,i,n,o)
for(var s,l,u=t;t.prev!==t.next;)if(s=t.prev,l=t.next,o?za(t,i,n,o):Aa(t))e.push(s.i/r),e.push(t.i/r),e.push(l.i/r),Xa(t),t=l.next,u=l.next
else if((t=l)===u){a?1===a?Ea(t=Pa(Ia(t),e,r),e,r,i,n,o,2):2===a&&Ca(t,e,r,i,n,o):Ea(Ia(t),e,r,i,n,o,1)
break}}}function Aa(t){var e=t.prev,r=t,i=t.next
if(Oa(e,r,i)>=0)return!1
for(var n=t.next.next;n!==t.prev;){if(Ba(e.x,e.y,r.x,r.y,i.x,i.y,n.x,n.y)&&Oa(n.prev,n,n.next)>=0)return!1
n=n.next}return!0}function za(t,e,r,i){var n=t.prev,o=t,a=t.next
if(Oa(n,o,a)>=0)return!1
for(var s=n.x>o.x?n.x>a.x?n.x:a.x:o.x>a.x?o.x:a.x,l=n.y>o.y?n.y>a.y?n.y:a.y:o.y>a.y?o.y:a.y,u=La(n.x<o.x?n.x<a.x?n.x:a.x:o.x<a.x?o.x:a.x,n.y<o.y?n.y<a.y?n.y:a.y:o.y<a.y?o.y:a.y,e,r,i),c=La(s,l,e,r,i),p=t.prevZ,h=t.nextZ;p&&p.z>=u&&h&&h.z<=c;){if(p!==t.prev&&p!==t.next&&Ba(n.x,n.y,o.x,o.y,a.x,a.y,p.x,p.y)&&Oa(p.prev,p,p.next)>=0)return!1
if(p=p.prevZ,h!==t.prev&&h!==t.next&&Ba(n.x,n.y,o.x,o.y,a.x,a.y,h.x,h.y)&&Oa(h.prev,h,h.next)>=0)return!1
h=h.nextZ}for(;p&&p.z>=u;){if(p!==t.prev&&p!==t.next&&Ba(n.x,n.y,o.x,o.y,a.x,a.y,p.x,p.y)&&Oa(p.prev,p,p.next)>=0)return!1
p=p.prevZ}for(;h&&h.z<=c;){if(h!==t.prev&&h!==t.next&&Ba(n.x,n.y,o.x,o.y,a.x,a.y,h.x,h.y)&&Oa(h.prev,h,h.next)>=0)return!1
h=h.nextZ}return!0}function Pa(t,e,r){var i=t
do{var n=i.prev,o=i.next.next
!Ua(n,o)&&Va(n,i,i.next,o)&&qa(n,o)&&qa(o,n)&&(e.push(n.i/r),e.push(i.i/r),e.push(o.i/r),Xa(i),Xa(i.next),i=t=o),i=i.next}while(i!==t)
return Ia(i)}function Ca(t,e,r,i,n,o){var a=t
do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&Fa(a,s)){var l=Za(a,s)
return a=Ia(a,a.next),l=Ia(l,l.next),Ea(a,e,r,i,n,o),void Ea(l,e,r,i,n,o)}s=s.next}a=a.next}while(a!==t)}function ka(t,e){return t.x-e.x}function Ma(t,e){if(e=function(t,e){var r,i=e,n=t.x,o=t.y,a=-1/0
do{if(o<=i.y&&o>=i.next.y&&i.next.y!==i.y){var s=i.x+(o-i.y)*(i.next.x-i.x)/(i.next.y-i.y)
if(s<=n&&s>a){if(a=s,s===n){if(o===i.y)return i
if(o===i.next.y)return i.next}r=i.x<i.next.x?i:i.next}}i=i.next}while(i!==e)
if(!r)return null
if(n===a)return r
var l,u=r,c=r.x,p=r.y,h=1/0
i=r
do{n>=i.x&&i.x>=c&&n!==i.x&&Ba(o<p?n:a,o,c,p,o<p?a:n,o,i.x,i.y)&&(l=Math.abs(o-i.y)/(n-i.x),qa(i,t)&&(l<h||l===h&&(i.x>r.x||i.x===r.x&&Da(r,i)))&&(r=i,h=l)),i=i.next}while(i!==u)
return r}(t,e)){var r=Za(e,t)
Ia(e,e.next),Ia(r,r.next)}}function Da(t,e){return Oa(t.prev,t,e.prev)<0&&Oa(e.next,t,t.next)<0}function La(t,e,r,i,n){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*n)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*n)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Ra(t){var e=t,r=t
do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next}while(e!==t)
return r}function Ba(t,e,r,i,n,o,a,s){return(n-a)*(e-s)-(t-a)*(o-s)>=0&&(t-a)*(i-s)-(r-a)*(e-s)>=0&&(r-a)*(o-s)-(n-a)*(i-s)>=0}function Fa(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t
do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&Va(r,r.next,t,e))return!0
r=r.next}while(r!==t)
return!1}(t,e)&&(qa(t,e)&&qa(e,t)&&function(t,e){var r=t,i=!1,n=(t.x+e.x)/2,o=(t.y+e.y)/2
do{r.y>o!=r.next.y>o&&r.next.y!==r.y&&n<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next}while(r!==t)
return i}(t,e)&&(Oa(t.prev,t,e.prev)||Oa(t,e.prev,e))||Ua(t,e)&&Oa(t.prev,t,t.next)>0&&Oa(e.prev,e,e.next)>0)}function Oa(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function Ua(t,e){return t.x===e.x&&t.y===e.y}function Va(t,e,r,i){var n=ja(Oa(t,e,r)),o=ja(Oa(t,e,i)),a=ja(Oa(r,i,t)),s=ja(Oa(r,i,e))
return n!==o&&a!==s||!(0!==n||!Na(t,r,e))||!(0!==o||!Na(t,i,e))||!(0!==a||!Na(r,t,i))||!(0!==s||!Na(r,e,i))}function Na(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function ja(t){return t>0?1:t<0?-1:0}function qa(t,e){return Oa(t.prev,t,t.next)<0?Oa(t,e,t.next)>=0&&Oa(t,t.prev,e)>=0:Oa(t,e,t.prev)<0||Oa(t,t.next,e)<0}function Za(t,e){var r=new Wa(t.i,t.x,t.y),i=new Wa(e.i,e.x,e.y),n=t.next,o=e.prev
return t.next=e,e.prev=t,r.next=n,n.prev=r,i.next=r,r.prev=i,o.next=i,i.prev=o,i}function Ga(t,e,r,i){var n=new Wa(t,e,r)
return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Xa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Wa(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ka(t,e,r,i){for(var n=0,o=e,a=r-i;o<r;o+=i)n+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o
return n}function Ha(t,e,r,i,n){!function t(e,r,i,n,o){for(;n>i;){if(n-i>600){var a=n-i+1,s=r-i+1,l=Math.log(a),u=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*u*(a-u)/a)*(s-a/2<0?-1:1)
t(e,r,Math.max(i,Math.floor(r-s*u/a+c)),Math.min(n,Math.floor(r+(a-s)*u/a+c)),o)}var p=e[r],h=i,f=n
for(Ja(e,i,r),o(e[n],p)>0&&Ja(e,i,n);h<f;){for(Ja(e,h,f),h++,f--;o(e[h],p)<0;)h++
for(;o(e[f],p)>0;)f--}0===o(e[i],p)?Ja(e,i,f):Ja(e,++f,n),f<=r&&(i=f+1),r<=f&&(n=f-1)}}(t,e,r||0,i||t.length-1,n||Ya)}function Ja(t,e,r){var i=t[e]
t[e]=t[r],t[r]=i}function Ya(t,e){return t<e?-1:t>e?1:0}function Qa(t,e){var r=t.length
if(r<=1)return[t]
for(var i,n,o=[],a=0;a<r;a++){var s=S(t[a])
0!==s&&(t[a].area=Math.abs(s),void 0===n&&(n=s<0),n===s<0?(i&&o.push(i),i=[t[a]]):i.push(t[a]))}if(i&&o.push(i),e>1)for(var l=0;l<o.length;l++)o[l].length<=e||(Ha(o[l],e,1,o[l].length-1,$a),o[l]=o[l].slice(0,e))
return o}function $a(t,e){return e.area-t.area}function ts(t,e,r){for(var i=r.patternDependencies,n=!1,o=0,a=e;o<a.length;o+=1){var s=a[o].paint.get(t+"-pattern")
s.isConstant()||(n=!0)
var l=s.constantOr(null)
l&&(n=!0,i[l.to]=!0,i[l.from]=!0)}return n}function es(t,e,r,i,n){for(var o=n.patternDependencies,a=0,s=e;a<s.length;a+=1){var l=s[a],u=l.paint.get(t+"-pattern").value
if("constant"!==u.kind){var c=u.evaluate({zoom:i-1},r,{},n.availableImages),p=u.evaluate({zoom:i},r,{},n.availableImages),h=u.evaluate({zoom:i+1},r,{},n.availableImages)
p=p&&p.name?p.name:p,h=h&&h.name?h.name:h,o[c=c&&c.name?c.name:c]=!0,o[p]=!0,o[h]=!0,r.patterns[l.id]={min:c,mid:p,max:h}}}return r}Sa.deviation=function(t,e,r,i){var n=e&&e.length,o=Math.abs(Ka(t,0,n?e[0]*r:t.length,r))
if(n)for(var a=0,s=e.length;a<s;a++)o-=Math.abs(Ka(t,e[a]*r,a<s-1?e[a+1]*r:t.length,r))
var l=0
for(a=0;a<i.length;a+=3){var u=i[a]*r,c=i[a+1]*r,p=i[a+2]*r
l+=Math.abs((t[u]-t[p])*(t[c+1]-t[u+1])-(t[u]-t[c])*(t[p+1]-t[u+1]))}return 0===o&&0===l?0:Math.abs((l-o)/o)},Sa.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},i=0,n=0;n<t.length;n++){for(var o=0;o<t[n].length;o++)for(var a=0;a<e;a++)r.vertices.push(t[n][o][a])
n>0&&r.holes.push(i+=t[n-1].length)}return r},ba.default=wa
var rs=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new In,this.indexArray=new Fn,this.indexArray2=new qn,this.programConfigurations=new Mo(xa,t.layers,t.zoom),this.segments=new no,this.segments2=new no,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}))}
rs.prototype.populate=function(t,e,r){this.hasPattern=ts("fill",this.layers,e)
for(var i=this.layers[0].layout.get("fill-sort-key"),n=[],o=0,a=t;o<a.length;o+=1){var s=a[o],l=s.feature,u=s.id,c=s.index,p=s.sourceLayerIndex,h=this.layers[0]._featureFilter.needGeometry,f={type:l.type,id:u,properties:l.properties,geometry:h?Bo(l):[]}
if(this.layers[0]._featureFilter.filter(new nn(this.zoom),f,r)){h||(f.geometry=Bo(l))
var d=i?i.evaluate(f,{},r,e.availableImages):void 0
n.push({id:u,properties:l.properties,type:l.type,sourceLayerIndex:p,index:c,geometry:f.geometry,patterns:{},sortKey:d})}}i&&n.sort((function(t,e){return t.sortKey-e.sortKey}))
for(var m=0,y=n;m<y.length;m+=1){var g=y[m],_=g.geometry,v=g.index,x=g.sourceLayerIndex
if(this.hasPattern){var b=es("fill",this.layers,g,this.zoom,e)
this.patternFeatures.push(b)}else this.addFeature(g,_,v,r,{})
e.featureIndex.insert(t[v].feature,_,v,x,this.index)}},rs.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r)},rs.prototype.addFeatures=function(t,e,r){for(var i=0,n=this.patternFeatures;i<n.length;i+=1){var o=n[i]
this.addFeature(o,o.geometry,o.index,e,r)}},rs.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},rs.prototype.uploadPending=function(){return!this.uploaded||this.programConfigurations.needsUpload},rs.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,xa),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0},rs.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy())},rs.prototype.addFeature=function(t,e,r,i,n){for(var o=0,a=Qa(e,500);o<a.length;o+=1){for(var s=a[o],l=0,u=0,c=s;u<c.length;u+=1)l+=c[u].length
for(var p=this.segments.prepareSegment(l,this.layoutVertexArray,this.indexArray),h=p.vertexLength,f=[],d=[],m=0,y=s;m<y.length;m+=1){var g=y[m]
if(0!==g.length){g!==s[0]&&d.push(f.length/2)
var _=this.segments2.prepareSegment(g.length,this.layoutVertexArray,this.indexArray2),v=_.vertexLength
this.layoutVertexArray.emplaceBack(g[0].x,g[0].y),this.indexArray2.emplaceBack(v+g.length-1,v),f.push(g[0].x),f.push(g[0].y)
for(var x=1;x<g.length;x++)this.layoutVertexArray.emplaceBack(g[x].x,g[x].y),this.indexArray2.emplaceBack(v+x-1,v+x),f.push(g[x].x),f.push(g[x].y)
_.vertexLength+=g.length,_.primitiveLength+=g.length}}for(var b=ba(f,d),w=0;w<b.length;w+=3)this.indexArray.emplaceBack(h+b[w],h+b[w+1],h+b[w+2])
p.vertexLength+=l,p.primitiveLength+=b.length/3}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n,i)},Li("FillBucket",rs,{omit:["layers","patternFeatures"]})
var is=new _n({"fill-sort-key":new dn(Et.layout_fill["fill-sort-key"])}),ns={paint:new _n({"fill-antialias":new fn(Et.paint_fill["fill-antialias"]),"fill-opacity":new dn(Et.paint_fill["fill-opacity"]),"fill-color":new dn(Et.paint_fill["fill-color"]),"fill-outline-color":new dn(Et.paint_fill["fill-outline-color"]),"fill-translate":new fn(Et.paint_fill["fill-translate"]),"fill-translate-anchor":new fn(Et.paint_fill["fill-translate-anchor"]),"fill-pattern":new mn(Et.paint_fill["fill-pattern"])}),layout:is},os=function(t){function e(e){t.call(this,e,ns)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r)
var i=this.paint._values["fill-outline-color"]
"constant"===i.value.kind&&void 0===i.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"])},e.prototype.createBucket=function(t){return new rs(t)},e.prototype.queryRadius=function(){return Yo(this.paint.get("fill-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,n,o,a){return No(Qo(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),o.angle,a),i)},e.prototype.isTileClipped=function(){return!0},e}(vn),as=Sn([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4).members,ss=ls
function ls(t,e,r,i,n){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=i,this._values=n,t.readFields(us,this,e)}function us(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){for(var r=t.readVarint()+t.pos;t.pos<r;){var i=e._keys[t.readVarint()],n=e._values[t.readVarint()]
e.properties[i]=n}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos)}function cs(t){for(var e,r,i=0,n=0,o=t.length,a=o-1;n<o;a=n++)i+=((r=t[a]).x-(e=t[n]).x)*(e.y+r.y)
return i}ls.types=["Unknown","Point","LineString","Polygon"],ls.prototype.loadGeometry=function(){var t=this._pbf
t.pos=this._geometry
for(var e,r=t.readVarint()+t.pos,i=1,o=0,a=0,s=0,l=[];t.pos<r;){if(o<=0){var u=t.readVarint()
i=7&u,o=u>>3}if(o--,1===i||2===i)a+=t.readSVarint(),s+=t.readSVarint(),1===i&&(e&&l.push(e),e=[]),e.push(new n(a,s))
else{if(7!==i)throw new Error("unknown command "+i)
e&&e.push(e[0].clone())}}return e&&l.push(e),l},ls.prototype.bbox=function(){var t=this._pbf
t.pos=this._geometry
for(var e=t.readVarint()+t.pos,r=1,i=0,n=0,o=0,a=1/0,s=-1/0,l=1/0,u=-1/0;t.pos<e;){if(i<=0){var c=t.readVarint()
r=7&c,i=c>>3}if(i--,1===r||2===r)(n+=t.readSVarint())<a&&(a=n),n>s&&(s=n),(o+=t.readSVarint())<l&&(l=o),o>u&&(u=o)
else if(7!==r)throw new Error("unknown command "+r)}return[a,l,s,u]},ls.prototype.toGeoJSON=function(t,e,r){var i,n,o=this.extent*Math.pow(2,r),a=this.extent*t,s=this.extent*e,l=this.loadGeometry(),u=ls.types[this.type]
function c(t){for(var e=0;e<t.length;e++){var r=t[e]
t[e]=[360*(r.x+a)/o-180,360/Math.PI*Math.atan(Math.exp((180-360*(r.y+s)/o)*Math.PI/180))-90]}}switch(this.type){case 1:var p=[]
for(i=0;i<l.length;i++)p[i]=l[i][0]
c(l=p)
break
case 2:for(i=0;i<l.length;i++)c(l[i])
break
case 3:for(l=function(t){var e=t.length
if(e<=1)return[t]
for(var r,i,n=[],o=0;o<e;o++){var a=cs(t[o])
0!==a&&(void 0===i&&(i=a<0),i===a<0?(r&&n.push(r),r=[t[o]]):r.push(t[o]))}return r&&n.push(r),n}(l),i=0;i<l.length;i++)for(n=0;n<l[i].length;n++)c(l[i][n])}1===l.length?l=l[0]:u="Multi"+u
var h={type:"Feature",geometry:{type:u,coordinates:l},properties:this.properties}
return"id"in this&&(h.id=this.id),h}
var ps=hs
function hs(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(fs,this,e),this.length=this._features.length}function fs(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){for(var e=null,r=t.readVarint()+t.pos;t.pos<r;){var i=t.readVarint()>>3
e=1===i?t.readString():2===i?t.readFloat():3===i?t.readDouble():4===i?t.readVarint64():5===i?t.readVarint():6===i?t.readSVarint():7===i?t.readBoolean():null}return e}(r))}function ds(t,e,r){if(3===t){var i=new ps(r,r.readVarint()+r.pos)
i.length&&(e[i.name]=i)}}hs.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds")
this._pbf.pos=this._features[t]
var e=this._pbf.readVarint()+this._pbf.pos
return new ss(this._pbf,e,this.extent,this._keys,this._values)}
var ms={VectorTile:function(t,e){this.layers=t.readFields(ds,{},e)},VectorTileFeature:ss,VectorTileLayer:ps},ys=ms.VectorTileFeature.types,gs=Math.pow(2,13)
function _s(t,e,r,i,n,o,a,s){t.emplaceBack(e,r,2*Math.floor(i*gs)+a,n*gs*2,o*gs*2,Math.round(s))}var vs=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new An,this.indexArray=new Fn,this.programConfigurations=new Mo(as,t.layers,t.zoom),this.segments=new no,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}))}
function xs(t,e){return t.x===e.x&&(t.x<0||t.x>8192)||t.y===e.y&&(t.y<0||t.y>8192)}vs.prototype.populate=function(t,e,r){this.features=[],this.hasPattern=ts("fill-extrusion",this.layers,e)
for(var i=0,n=t;i<n.length;i+=1){var o=n[i],a=o.feature,s=o.id,l=o.index,u=o.sourceLayerIndex,c=this.layers[0]._featureFilter.needGeometry,p={type:a.type,id:s,properties:a.properties,geometry:c?Bo(a):[]}
if(this.layers[0]._featureFilter.filter(new nn(this.zoom),p,r)){var h={id:s,sourceLayerIndex:u,index:l,geometry:c?p.geometry:Bo(a),properties:a.properties,type:a.type,patterns:{}}
void 0!==a.id&&(h.id=a.id),this.hasPattern?this.features.push(es("fill-extrusion",this.layers,h,this.zoom,e)):this.addFeature(h,h.geometry,l,r,{}),e.featureIndex.insert(a,h.geometry,l,u,this.index,!0)}}},vs.prototype.addFeatures=function(t,e,r){for(var i=0,n=this.features;i<n.length;i+=1){var o=n[i]
this.addFeature(o,o.geometry,o.index,e,r)}},vs.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r)},vs.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},vs.prototype.uploadPending=function(){return!this.uploaded||this.programConfigurations.needsUpload},vs.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,as),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0},vs.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},vs.prototype.addFeature=function(t,e,r,i,n){for(var o=0,a=Qa(e,500);o<a.length;o+=1){for(var s=a[o],l=0,u=0,c=s;u<c.length;u+=1)l+=c[u].length
for(var p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray),h=0,f=s;h<f.length;h+=1){var d=f[h]
if(0!==d.length&&!((M=d).every((function(t){return t.x<0}))||M.every((function(t){return t.x>8192}))||M.every((function(t){return t.y<0}))||M.every((function(t){return t.y>8192}))))for(var m=0,y=0;y<d.length;y++){var g=d[y]
if(y>=1){var _=d[y-1]
if(!xs(g,_)){p.vertexLength+4>no.MAX_VERTEX_ARRAY_LENGTH&&(p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray))
var v=g.sub(_)._perp()._unit(),x=_.dist(g)
m+x>32768&&(m=0),_s(this.layoutVertexArray,g.x,g.y,v.x,v.y,0,0,m),_s(this.layoutVertexArray,g.x,g.y,v.x,v.y,0,1,m),_s(this.layoutVertexArray,_.x,_.y,v.x,v.y,0,0,m+=x),_s(this.layoutVertexArray,_.x,_.y,v.x,v.y,0,1,m)
var b=p.vertexLength
this.indexArray.emplaceBack(b,b+2,b+1),this.indexArray.emplaceBack(b+1,b+2,b+3),p.vertexLength+=4,p.primitiveLength+=2}}}}if(p.vertexLength+l>no.MAX_VERTEX_ARRAY_LENGTH&&(p=this.segments.prepareSegment(l,this.layoutVertexArray,this.indexArray)),"Polygon"===ys[t.type]){for(var w=[],S=[],T=p.vertexLength,I=0,E=s;I<E.length;I+=1){var A=E[I]
if(0!==A.length){A!==s[0]&&S.push(w.length/2)
for(var z=0;z<A.length;z++){var P=A[z]
_s(this.layoutVertexArray,P.x,P.y,0,0,1,1,0),w.push(P.x),w.push(P.y)}}}for(var C=ba(w,S),k=0;k<C.length;k+=3)this.indexArray.emplaceBack(T+C[k],T+C[k+2],T+C[k+1])
p.primitiveLength+=C.length/3,p.vertexLength+=l}}var M
this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n,i)},Li("FillExtrusionBucket",vs,{omit:["layers","features"]})
var bs={paint:new _n({"fill-extrusion-opacity":new fn(Et["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new dn(Et["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new fn(Et["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new fn(Et["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new mn(Et["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new dn(Et["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new dn(Et["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new fn(Et["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})},ws=function(t){function e(e){t.call(this,e,bs)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createBucket=function(t){return new vs(t)},e.prototype.queryRadius=function(){return Yo(this.paint.get("fill-extrusion-translate"))},e.prototype.is3D=function(){return!0},e.prototype.queryIntersectsFeature=function(t,e,r,i,o,a,s,l){var u=Qo(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),a.angle,s),c=this.paint.get("fill-extrusion-height").evaluate(e,r),p=this.paint.get("fill-extrusion-base").evaluate(e,r),h=function(t,e,r,i){for(var o=[],a=0,s=t;a<s.length;a+=1){var l=s[a],u=[l.x,l.y,0,1]
aa(u,u,e),o.push(new n(u[0]/u[3],u[1]/u[3]))}return o}(u,l),f=function(t,e,r,i){for(var o=[],a=[],s=i[8]*e,l=i[9]*e,u=i[10]*e,c=i[11]*e,p=i[8]*r,h=i[9]*r,f=i[10]*r,d=i[11]*r,m=0,y=t;m<y.length;m+=1){for(var g=[],_=[],v=0,x=y[m];v<x.length;v+=1){var b=x[v],w=b.x,S=b.y,T=i[0]*w+i[4]*S+i[12],I=i[1]*w+i[5]*S+i[13],E=i[2]*w+i[6]*S+i[14],A=i[3]*w+i[7]*S+i[15],z=E+u,P=A+c,C=T+p,k=I+h,M=E+f,D=A+d,L=new n((T+s)/P,(I+l)/P)
L.z=z/P,g.push(L)
var R=new n(C/D,k/D)
R.z=M/D,_.push(R)}o.push(g),a.push(_)}return[o,a]}(i,p,c,l)
return function(t,e,r){var i=1/0
No(r,e)&&(i=Ts(r,e[0]))
for(var n=0;n<e.length;n++)for(var o=e[n],a=t[n],s=0;s<o.length-1;s++){var l=o[s],u=[l,o[s+1],a[s+1],a[s],l]
Uo(r,u)&&(i=Math.min(i,Ts(r,u)))}return i!==1/0&&i}(f[0],f[1],h)},e}(vn)
function Ss(t,e){return t.x*e.x+t.y*e.y}function Ts(t,e){if(1===t.length){for(var r,i=0,n=e[i++];!r||n.equals(r);)if(!(r=e[i++]))return 1/0
for(;i<e.length;i++){var o=e[i],a=t[0],s=r.sub(n),l=o.sub(n),u=a.sub(n),c=Ss(s,s),p=Ss(s,l),h=Ss(l,l),f=Ss(u,s),d=Ss(u,l),m=c*h-p*p,y=(h*f-p*d)/m,g=(c*d-p*f)/m,_=n.z*(1-y-g)+r.z*y+o.z*g
if(isFinite(_))return _}return 1/0}for(var v=1/0,x=0,b=e;x<b.length;x+=1)v=Math.min(v,b[x].z)
return v}var Is=Sn([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4).members,Es=ms.VectorTileFeature.types,As=Math.cos(Math.PI/180*37.5),zs=Math.pow(2,14)/.5,Ps=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new zn,this.indexArray=new Fn,this.programConfigurations=new Mo(Is,t.layers,t.zoom),this.segments=new no,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}))}
Ps.prototype.populate=function(t,e,r){this.hasPattern=ts("line",this.layers,e)
for(var i=this.layers[0].layout.get("line-sort-key"),n=[],o=0,a=t;o<a.length;o+=1){var s=a[o],l=s.feature,u=s.id,c=s.index,p=s.sourceLayerIndex,h=this.layers[0]._featureFilter.needGeometry,f={type:l.type,id:u,properties:l.properties,geometry:h?Bo(l):[]}
if(this.layers[0]._featureFilter.filter(new nn(this.zoom),f,r)){h||(f.geometry=Bo(l))
var d=i?i.evaluate(f,{},r):void 0
n.push({id:u,properties:l.properties,type:l.type,sourceLayerIndex:p,index:c,geometry:f.geometry,patterns:{},sortKey:d})}}i&&n.sort((function(t,e){return t.sortKey-e.sortKey}))
for(var m=0,y=n;m<y.length;m+=1){var g=y[m],_=g.geometry,v=g.index,x=g.sourceLayerIndex
if(this.hasPattern){var b=es("line",this.layers,g,this.zoom,e)
this.patternFeatures.push(b)}else this.addFeature(g,_,v,r,{})
e.featureIndex.insert(t[v].feature,_,v,x,this.index)}},Ps.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r)},Ps.prototype.addFeatures=function(t,e,r){for(var i=0,n=this.patternFeatures;i<n.length;i+=1){var o=n[i]
this.addFeature(o,o.geometry,o.index,e,r)}},Ps.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Ps.prototype.uploadPending=function(){return!this.uploaded||this.programConfigurations.needsUpload},Ps.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Is),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0},Ps.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},Ps.prototype.addFeature=function(t,e,r,i,n){for(var o=this.layers[0].layout,a=o.get("line-join").evaluate(t,{}),s=o.get("line-cap"),l=o.get("line-miter-limit"),u=o.get("line-round-limit"),c=0,p=e;c<p.length;c+=1)this.addLine(p[c],t,a,s,l,u)
this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n,i)},Ps.prototype.addLine=function(t,e,r,i,n,o){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,e.properties&&e.properties.hasOwnProperty("mapbox_clip_start")&&e.properties.hasOwnProperty("mapbox_clip_end")){this.clipStart=+e.properties.mapbox_clip_start,this.clipEnd=+e.properties.mapbox_clip_end
for(var a=0;a<t.length-1;a++)this.totalDistance+=t[a].dist(t[a+1])
this.updateScaledDistance()}for(var s="Polygon"===Es[e.type],l=t.length;l>=2&&t[l-1].equals(t[l-2]);)l--
for(var u=0;u<l-1&&t[u].equals(t[u+1]);)u++
if(!(l<(s?3:2))){"bevel"===r&&(n=1.05)
var c,p=this.overscaling<=16?122880/(512*this.overscaling):0,h=this.segments.prepareSegment(10*l,this.layoutVertexArray,this.indexArray),f=void 0,d=void 0,m=void 0,y=void 0
this.e1=this.e2=-1,s&&(y=t[u].sub(c=t[l-2])._unit()._perp())
for(var g=u;g<l;g++)if(!(d=g===l-1?s?t[u+1]:void 0:t[g+1])||!t[g].equals(d)){y&&(m=y),c&&(f=c),c=t[g],y=d?d.sub(c)._unit()._perp():m
var _=(m=m||y).add(y)
0===_.x&&0===_.y||_._unit()
var v=m.x*y.x+m.y*y.y,x=_.x*y.x+_.y*y.y,b=0!==x?1/x:1/0,w=2*Math.sqrt(2-2*x),S=x<As&&f&&d,T=m.x*y.y-m.y*y.x>0
if(S&&g>u){var I=c.dist(f)
if(I>2*p){var E=c.sub(c.sub(f)._mult(p/I)._round())
this.updateDistance(f,E),this.addCurrentVertex(E,m,0,0,h),f=E}}var A=f&&d,z=A?r:s?"butt":i
if(A&&"round"===z&&(b<o?z="miter":b<=2&&(z="fakeround")),"miter"===z&&b>n&&(z="bevel"),"bevel"===z&&(b>2&&(z="flipbevel"),b<n&&(z="miter")),f&&this.updateDistance(f,c),"miter"===z)_._mult(b),this.addCurrentVertex(c,_,0,0,h)
else if("flipbevel"===z){if(b>100)_=y.mult(-1)
else{var P=b*m.add(y).mag()/m.sub(y).mag()
_._perp()._mult(P*(T?-1:1))}this.addCurrentVertex(c,_,0,0,h),this.addCurrentVertex(c,_.mult(-1),0,0,h)}else if("bevel"===z||"fakeround"===z){var C=-Math.sqrt(b*b-1),k=T?C:0,M=T?0:C
if(f&&this.addCurrentVertex(c,m,k,M,h),"fakeround"===z)for(var D=Math.round(180*w/Math.PI/20),L=1;L<D;L++){var R=L/D
if(.5!==R){var B=R-.5
R+=R*B*(R-1)*((1.0904+v*(v*(3.55645-1.43519*v)-3.2452))*B*B+(.848013+v*(.215638*v-1.06021)))}var F=y.sub(m)._mult(R)._add(m)._unit()._mult(T?-1:1)
this.addHalfVertex(c,F.x,F.y,!1,T,0,h)}d&&this.addCurrentVertex(c,y,-k,-M,h)}else if("butt"===z)this.addCurrentVertex(c,_,0,0,h)
else if("square"===z){var O=f?1:-1
this.addCurrentVertex(c,_,O,O,h)}else"round"===z&&(f&&(this.addCurrentVertex(c,m,0,0,h),this.addCurrentVertex(c,m,1,1,h,!0)),d&&(this.addCurrentVertex(c,y,-1,-1,h,!0),this.addCurrentVertex(c,y,0,0,h)))
if(S&&g<l-1){var U=c.dist(d)
if(U>2*p){var V=c.add(d.sub(c)._mult(p/U)._round())
this.updateDistance(c,V),this.addCurrentVertex(V,y,0,0,h),c=V}}}}},Ps.prototype.addCurrentVertex=function(t,e,r,i,n,o){void 0===o&&(o=!1)
var a=e.y*i-e.x,s=-e.y-e.x*i
this.addHalfVertex(t,e.x+e.y*r,e.y-e.x*r,o,!1,r,n),this.addHalfVertex(t,a,s,o,!0,-i,n),this.distance>zs/2&&0===this.totalDistance&&(this.distance=0,this.addCurrentVertex(t,e,r,i,n,o))},Ps.prototype.addHalfVertex=function(t,e,r,i,n,o,a){var s=.5*this.scaledDistance
this.layoutVertexArray.emplaceBack((t.x<<1)+(i?1:0),(t.y<<1)+(n?1:0),Math.round(63*e)+128,Math.round(63*r)+128,1+(0===o?0:o<0?-1:1)|(63&s)<<2,s>>6)
var l=a.vertexLength++
this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,l),a.primitiveLength++),n?this.e2=l:this.e1=l},Ps.prototype.updateScaledDistance=function(){this.scaledDistance=this.totalDistance>0?(this.clipStart+(this.clipEnd-this.clipStart)*this.distance/this.totalDistance)*(zs-1):this.distance},Ps.prototype.updateDistance=function(t,e){this.distance+=t.dist(e),this.updateScaledDistance()},Li("LineBucket",Ps,{omit:["layers","patternFeatures"]})
var Cs=new _n({"line-cap":new fn(Et.layout_line["line-cap"]),"line-join":new dn(Et.layout_line["line-join"]),"line-miter-limit":new fn(Et.layout_line["line-miter-limit"]),"line-round-limit":new fn(Et.layout_line["line-round-limit"]),"line-sort-key":new dn(Et.layout_line["line-sort-key"])}),ks={paint:new _n({"line-opacity":new dn(Et.paint_line["line-opacity"]),"line-color":new dn(Et.paint_line["line-color"]),"line-translate":new fn(Et.paint_line["line-translate"]),"line-translate-anchor":new fn(Et.paint_line["line-translate-anchor"]),"line-width":new dn(Et.paint_line["line-width"]),"line-gap-width":new dn(Et.paint_line["line-gap-width"]),"line-offset":new dn(Et.paint_line["line-offset"]),"line-blur":new dn(Et.paint_line["line-blur"]),"line-dasharray":new yn(Et.paint_line["line-dasharray"]),"line-pattern":new mn(Et.paint_line["line-pattern"]),"line-gradient":new gn(Et.paint_line["line-gradient"])}),layout:Cs},Ms=new(function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.possiblyEvaluate=function(e,r){return r=new nn(Math.floor(r.zoom),{now:r.now,fadeDuration:r.fadeDuration,zoomHistory:r.zoomHistory,transition:r.transition}),t.prototype.possiblyEvaluate.call(this,e,r)},e.prototype.evaluate=function(e,r,i,n){return r=c({},r,{zoom:Math.floor(r.zoom)}),t.prototype.evaluate.call(this,e,r,i,n)},e}(dn))(ks.paint.properties["line-width"].specification)
Ms.useIntegerZoom=!0
var Ds=function(t){function e(e){t.call(this,e,ks)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._handleSpecialPaintPropertyUpdate=function(t){"line-gradient"===t&&this._updateGradient()},e.prototype._updateGradient=function(){this.gradient=ya(this._transitionablePaint._values["line-gradient"].value.expression,"lineProgress"),this.gradientTexture=null},e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r),this.paint._values["line-floorwidth"]=Ms.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,e)},e.prototype.createBucket=function(t){return new Ps(t)},e.prototype.queryRadius=function(t){var e=t,r=Ls(Jo("line-width",this,e),Jo("line-gap-width",this,e)),i=Jo("line-offset",this,e)
return r/2+Math.abs(i)+Yo(this.paint.get("line-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,o,a,s){var l=Qo(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),a.angle,s),u=s/2*Ls(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),c=this.paint.get("line-offset").evaluate(e,r)
return c&&(i=function(t,e){for(var r=[],i=new n(0,0),o=0;o<t.length;o++){for(var a=t[o],s=[],l=0;l<a.length;l++){var u=a[l],c=a[l+1],p=0===l?i:u.sub(a[l-1])._unit()._perp(),h=l===a.length-1?i:c.sub(u)._unit()._perp(),f=p._add(h)._unit()
f._mult(1/(f.x*h.x+f.y*h.y)),s.push(f._mult(e)._add(u))}r.push(s)}return r}(i,c*s)),function(t,e,r){for(var i=0;i<e.length;i++){var n=e[i]
if(t.length>=3)for(var o=0;o<n.length;o++)if(Ko(t,n[o]))return!0
if(jo(t,n,r))return!0}return!1}(l,i,u)},e.prototype.isTileClipped=function(){return!0},e}(vn)
function Ls(t,e){return e>0?e+2*t:t}var Rs=Sn([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),Bs=Sn([{name:"a_projected_pos",components:3,type:"Float32"}],4),Fs=(Sn([{name:"a_fade_opacity",components:1,type:"Uint32"}],4),Sn([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}])),Os=(Sn([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}]),Sn([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4)),Us=Sn([{name:"a_pos",components:2,type:"Float32"},{name:"a_radius",components:1,type:"Float32"},{name:"a_flags",components:2,type:"Int16"}],4)
function Vs(t,e,r){return t.sections.forEach((function(t){t.text=function(t,e,r){var i=e.layout.get("text-transform").evaluate(r,{})
return"uppercase"===i?t=t.toLocaleUpperCase():"lowercase"===i&&(t=t.toLocaleLowerCase()),rn.applyArabicShaping&&(t=rn.applyArabicShaping(t)),t}(t.text,e,r)})),t}Sn([{name:"triangle",components:3,type:"Uint16"}]),Sn([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),Sn([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint16",name:"useRuntimeCollisionCircles"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",components:2,name:"textOffset"},{type:"Float32",name:"collisionCircleDiameter"}]),Sn([{type:"Float32",name:"offsetX"}]),Sn([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}])
var Ns={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"},js=function(t,e,r,i,n){var o,a,s=8*n-i-1,l=(1<<s)-1,u=l>>1,c=-7,p=r?n-1:0,h=r?-1:1,f=t[e+p]
for(p+=h,o=f&(1<<-c)-1,f>>=-c,c+=s;c>0;o=256*o+t[e+p],p+=h,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=i;c>0;a=256*a+t[e+p],p+=h,c-=8);if(0===o)o=1-u
else{if(o===l)return a?NaN:1/0*(f?-1:1)
a+=Math.pow(2,i),o-=u}return(f?-1:1)*a*Math.pow(2,o-i)},qs=function(t,e,r,i,n,o){var a,s,l,u=8*o-n-1,c=(1<<u)-1,p=c>>1,h=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,d=i?1:-1,m=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),(e+=a+p>=1?h/l:h*Math.pow(2,1-p))*l>=2&&(a++,l/=2),a+p>=c?(s=0,a=c):a+p>=1?(s=(e*l-1)*Math.pow(2,n),a+=p):(s=e*Math.pow(2,p-1)*Math.pow(2,n),a=0));n>=8;t[r+f]=255&s,f+=d,s/=256,n-=8);for(a=a<<n|s,u+=n;u>0;t[r+f]=255&a,f+=d,a/=256,u-=8);t[r+f-d]|=128*m},Zs=Gs
function Gs(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}Gs.Varint=0,Gs.Fixed64=1,Gs.Bytes=2,Gs.Fixed32=5
var Xs="undefined"==typeof TextDecoder?null:new TextDecoder("utf8")
function Ws(t){return t.type===Gs.Bytes?t.readVarint()+t.pos:t.pos+1}function Ks(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function Hs(t,e,r){var i=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2))
r.realloc(i)
for(var n=r.pos-1;n>=t;n--)r.buf[n+i]=r.buf[n]}function Js(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r])}function Ys(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r])}function Qs(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r])}function $s(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r])}function tl(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r])}function el(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r])}function rl(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r])}function il(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r])}function nl(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r])}function ol(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function al(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24}function sl(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function ll(t,e,r){1===t&&r.readMessage(ul,e)}function ul(t,e,r){if(3===t){var i=r.readMessage(cl,{}),n=i.width,o=i.height,a=i.left,s=i.top,l=i.advance
e.push({id:i.id,bitmap:new fa({width:n+6,height:o+6},i.bitmap),metrics:{width:n,height:o,left:a,top:s,advance:l}})}}function cl(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint())}function pl(t){for(var e=0,r=0,i=0,n=t;i<n.length;i+=1){var o=n[i]
e+=o.w*o.h,r=Math.max(r,o.w)}t.sort((function(t,e){return e.h-t.h}))
for(var a=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}],s=0,l=0,u=0,c=t;u<c.length;u+=1)for(var p=c[u],h=a.length-1;h>=0;h--){var f=a[h]
if(!(p.w>f.w||p.h>f.h)){if(p.x=f.x,p.y=f.y,l=Math.max(l,p.y+p.h),s=Math.max(s,p.x+p.w),p.w===f.w&&p.h===f.h){var d=a.pop()
h<a.length&&(a[h]=d)}else p.h===f.h?(f.x+=p.w,f.w-=p.w):p.w===f.w?(f.y+=p.h,f.h-=p.h):(a.push({x:f.x+p.w,y:f.y,w:f.w-p.w,h:p.h}),f.y+=p.h,f.h-=p.h)
break}}return{w:s,h:l,fill:e/(s*l)||0}}Gs.prototype={destroy:function(){this.buf=null},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var i=this.readVarint(),n=i>>3,o=this.pos
this.type=7&i,t(n,e,this),this.pos===o&&this.skip(i)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=ol(this.buf,this.pos)
return this.pos+=4,t},readSFixed32:function(){var t=sl(this.buf,this.pos)
return this.pos+=4,t},readFixed64:function(){var t=ol(this.buf,this.pos)+4294967296*ol(this.buf,this.pos+4)
return this.pos+=8,t},readSFixed64:function(){var t=ol(this.buf,this.pos)+4294967296*sl(this.buf,this.pos+4)
return this.pos+=8,t},readFloat:function(){var t=js(this.buf,this.pos,!0,23,4)
return this.pos+=4,t},readDouble:function(){var t=js(this.buf,this.pos,!0,52,8)
return this.pos+=8,t},readVarint:function(t){var e,r,i=this.buf
return e=127&(r=i[this.pos++]),r<128?e:(e|=(127&(r=i[this.pos++]))<<7,r<128?e:(e|=(127&(r=i[this.pos++]))<<14,r<128?e:(e|=(127&(r=i[this.pos++]))<<21,r<128?e:function(t,e,r){var i,n,o=r.buf
if(i=(112&(n=o[r.pos++]))>>4,n<128)return Ks(t,i,e)
if(i|=(127&(n=o[r.pos++]))<<3,n<128)return Ks(t,i,e)
if(i|=(127&(n=o[r.pos++]))<<10,n<128)return Ks(t,i,e)
if(i|=(127&(n=o[r.pos++]))<<17,n<128)return Ks(t,i,e)
if(i|=(127&(n=o[r.pos++]))<<24,n<128)return Ks(t,i,e)
if(i|=(1&(n=o[r.pos++]))<<31,n<128)return Ks(t,i,e)
throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=i[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint()
return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos
return this.pos=t,t-e>=12&&Xs?function(t,e,r){return Xs.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){for(var i="",n=e;n<r;){var o,a,s,l=t[n],u=null,c=l>239?4:l>223?3:l>191?2:1
if(n+c>r)break
1===c?l<128&&(u=l):2===c?128==(192&(o=t[n+1]))&&(u=(31&l)<<6|63&o)<=127&&(u=null):3===c?(a=t[n+2],128==(192&(o=t[n+1]))&&128==(192&a)&&((u=(15&l)<<12|(63&o)<<6|63&a)<=2047||u>=55296&&u<=57343)&&(u=null)):4===c&&(a=t[n+2],s=t[n+3],128==(192&(o=t[n+1]))&&128==(192&a)&&128==(192&s)&&((u=(15&l)<<18|(63&o)<<12|(63&a)<<6|63&s)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,c=1):u>65535&&(u-=65536,i+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),i+=String.fromCharCode(u),n+=c}return i}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t)
return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Gs.Bytes)return t.push(this.readVarint(e))
var r=Ws(this)
for(t=t||[];this.pos<r;)t.push(this.readVarint(e))
return t},readPackedSVarint:function(t){if(this.type!==Gs.Bytes)return t.push(this.readSVarint())
var e=Ws(this)
for(t=t||[];this.pos<e;)t.push(this.readSVarint())
return t},readPackedBoolean:function(t){if(this.type!==Gs.Bytes)return t.push(this.readBoolean())
var e=Ws(this)
for(t=t||[];this.pos<e;)t.push(this.readBoolean())
return t},readPackedFloat:function(t){if(this.type!==Gs.Bytes)return t.push(this.readFloat())
var e=Ws(this)
for(t=t||[];this.pos<e;)t.push(this.readFloat())
return t},readPackedDouble:function(t){if(this.type!==Gs.Bytes)return t.push(this.readDouble())
var e=Ws(this)
for(t=t||[];this.pos<e;)t.push(this.readDouble())
return t},readPackedFixed32:function(t){if(this.type!==Gs.Bytes)return t.push(this.readFixed32())
var e=Ws(this)
for(t=t||[];this.pos<e;)t.push(this.readFixed32())
return t},readPackedSFixed32:function(t){if(this.type!==Gs.Bytes)return t.push(this.readSFixed32())
var e=Ws(this)
for(t=t||[];this.pos<e;)t.push(this.readSFixed32())
return t},readPackedFixed64:function(t){if(this.type!==Gs.Bytes)return t.push(this.readFixed64())
var e=Ws(this)
for(t=t||[];this.pos<e;)t.push(this.readFixed64())
return t},readPackedSFixed64:function(t){if(this.type!==Gs.Bytes)return t.push(this.readSFixed64())
var e=Ws(this)
for(t=t||[];this.pos<e;)t.push(this.readSFixed64())
return t},skip:function(t){var e=7&t
if(e===Gs.Varint)for(;this.buf[this.pos++]>127;);else if(e===Gs.Bytes)this.pos=this.readVarint()+this.pos
else if(e===Gs.Fixed32)this.pos+=4
else{if(e!==Gs.Fixed64)throw new Error("Unimplemented type: "+e)
this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2
if(e!==this.length){var r=new Uint8Array(e)
r.set(this.buf),this.buf=r,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),al(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),al(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),al(this.buf,-1&t,this.pos),al(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),al(this.buf,-1&t,this.pos),al(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,i
if(t>=0?(r=t%4294967296|0,i=t/4294967296|0):(i=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,i=i+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes")
e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,r.buf[r.pos]=127&(t>>>=7)}(r,0,e),function(t,e){var r=(7&t)<<4
e.buf[e.pos++]|=r|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))))}(i,e)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++
var e=this.pos
this.pos=function(t,e,r){for(var i,n,o=0;o<e.length;o++){if((i=e.charCodeAt(o))>55295&&i<57344){if(!n){i>56319||o+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):n=i
continue}if(i<56320){t[r++]=239,t[r++]=191,t[r++]=189,n=i
continue}i=n-55296<<10|i-56320|65536,n=null}else n&&(t[r++]=239,t[r++]=191,t[r++]=189,n=null)
i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:(i<65536?t[r++]=i>>12|224:(t[r++]=i>>18|240,t[r++]=i>>12&63|128),t[r++]=i>>6&63|128),t[r++]=63&i|128)}return r}(this.buf,t,this.pos)
var r=this.pos-e
r>=128&&Hs(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r},writeFloat:function(t){this.realloc(4),qs(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),qs(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length
this.writeVarint(e),this.realloc(e)
for(var r=0;r<e;r++)this.buf[this.pos++]=t[r]},writeRawMessage:function(t,e){this.pos++
var r=this.pos
t(e,this)
var i=this.pos-r
i>=128&&Hs(r,i,this),this.pos=r-1,this.writeVarint(i),this.pos+=i},writeMessage:function(t,e,r){this.writeTag(t,Gs.Bytes),this.writeRawMessage(e,r)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,Js,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,Ys,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,tl,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,Qs,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,$s,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,el,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,rl,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,il,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,nl,e)},writeBytesField:function(t,e){this.writeTag(t,Gs.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,Gs.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,Gs.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,Gs.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,Gs.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,Gs.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,Gs.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,Gs.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,Gs.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,Gs.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e))}}
var hl=function(t,e){var r=e.pixelRatio,i=e.version,n=e.stretchX,o=e.stretchY,a=e.content
this.paddedRect=t,this.pixelRatio=r,this.stretchX=n,this.stretchY=o,this.content=a,this.version=i},fl={tl:{configurable:!0},br:{configurable:!0},tlbr:{configurable:!0},displaySize:{configurable:!0}}
fl.tl.get=function(){return[this.paddedRect.x+1,this.paddedRect.y+1]},fl.br.get=function(){return[this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]},fl.tlbr.get=function(){return this.tl.concat(this.br)},fl.displaySize.get=function(){return[(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]},Object.defineProperties(hl.prototype,fl)
var dl=function(t,e){var r={},i={}
this.haveRenderCallbacks=[]
var n=[]
this.addImages(t,r,n),this.addImages(e,i,n)
var o=pl(n),a=new da({width:o.w||1,height:o.h||1})
for(var s in t){var l=t[s],u=r[s].paddedRect
da.copy(l.data,a,{x:0,y:0},{x:u.x+1,y:u.y+1},l.data)}for(var c in e){var p=e[c],h=i[c].paddedRect,f=h.x+1,d=h.y+1,m=p.data.width,y=p.data.height
da.copy(p.data,a,{x:0,y:0},{x:f,y:d},p.data),da.copy(p.data,a,{x:0,y:y-1},{x:f,y:d-1},{width:m,height:1}),da.copy(p.data,a,{x:0,y:0},{x:f,y:d+y},{width:m,height:1}),da.copy(p.data,a,{x:m-1,y:0},{x:f-1,y:d},{width:1,height:y}),da.copy(p.data,a,{x:0,y:0},{x:f+m,y:d},{width:1,height:y})}this.image=a,this.iconPositions=r,this.patternPositions=i}
dl.prototype.addImages=function(t,e,r){for(var i in t){var n=t[i],o={x:0,y:0,w:n.data.width+2,h:n.data.height+2}
r.push(o),e[i]=new hl(o,n),n.hasRenderCallback&&this.haveRenderCallbacks.push(i)}},dl.prototype.patchUpdatedImages=function(t,e){for(var r in t.dispatchRenderCallbacks(this.haveRenderCallbacks),t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e)},dl.prototype.patchUpdatedImage=function(t,e,r){if(t&&e&&t.version!==e.version){t.version=e.version
var i=t.tl
r.update(e.data,void 0,{x:i[0],y:i[1]})}},Li("ImagePosition",hl),Li("ImageAtlas",dl)
var ml={horizontal:1,vertical:2,horizontalOnly:3},yl=function(){this.scale=1,this.fontStack="",this.imageName=null}
yl.forText=function(t,e){var r=new yl
return r.scale=t||1,r.fontStack=e,r},yl.forImage=function(t){var e=new yl
return e.imageName=t,e}
var gl=function(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null}
function _l(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m){var y,g=gl.fromFeature(t,n)
p===ml.vertical&&g.verticalizePunctuation()
var _=rn.processBidirectionalText,v=rn.processStyledBidirectionalText
if(_&&1===g.sections.length){y=[]
for(var x=0,b=_(g.toString(),Il(g,u,o,e,i,f,d));x<b.length;x+=1){var w=b[x],S=new gl
S.text=w,S.sections=g.sections
for(var T=0;T<w.length;T++)S.sectionIndex.push(0)
y.push(S)}}else if(v){y=[]
for(var I=0,E=v(g.text,g.sectionIndex,Il(g,u,o,e,i,f,d));I<E.length;I+=1){var A=E[I],z=new gl
z.text=A[0],z.sectionIndex=A[1],z.sections=g.sections,y.push(z)}}else y=function(t,e){for(var r=[],i=t.text,n=0,o=0,a=e;o<a.length;o+=1){var s=a[o]
r.push(t.substring(n,s)),n=s}return n<i.length&&r.push(t.substring(n,i.length)),r}(g,Il(g,u,o,e,i,f,d))
var P=[],C={positionedLines:P,text:g.toString(),top:c[1],bottom:c[1],left:c[0],right:c[0],writingMode:p,iconsInText:!1,verticalizable:!1}
return function(t,e,r,i,n,o,a,s,l,u,c,p){for(var h=0,f=-17,d=0,m=0,y="right"===s?1:"left"===s?0:.5,g=0,_=0,v=n;_<v.length;_+=1){var x=v[_]
x.trim()
var b=x.getMaxScale(),w=24*(b-1),S={positionedGlyphs:[],lineOffset:0}
t.positionedLines[g]=S
var T=S.positionedGlyphs,I=0
if(x.length()){for(var E=0;E<x.length();E++){var A=x.getSection(E),z=x.getSectionIndex(E),P=x.getCharCode(E),C=0,k=null,M=null,D=null,L=24,R=!(l===ml.horizontal||!c&&!qi(P)||c&&(vl[P]||(Z=P,Ni.Arabic(Z)||Ni["Arabic Supplement"](Z)||Ni["Arabic Extended-A"](Z)||Ni["Arabic Presentation Forms-A"](Z)||Ni["Arabic Presentation Forms-B"](Z))))
if(A.imageName){var B=i[A.imageName]
if(!B)continue
D=A.imageName,t.iconsInText=t.iconsInText||!0,M=B.paddedRect
var F=B.displaySize
A.scale=24*A.scale/p,C=w+(24-F[1]*A.scale),L=(k={width:F[0],height:F[1],left:1,top:-3,advance:R?F[1]:F[0]}).advance
var O=R?F[0]*A.scale-24*b:F[1]*A.scale-24*b
O>0&&O>I&&(I=O)}else{var U=r[A.fontStack],V=U&&U[P]
if(V&&V.rect)M=V.rect,k=V.metrics
else{var N=e[A.fontStack],j=N&&N[P]
if(!j)continue
k=j.metrics}C=24*(b-A.scale)}R?(t.verticalizable=!0,T.push({glyph:P,imageName:D,x:h,y:f+C,vertical:R,scale:A.scale,fontStack:A.fontStack,sectionIndex:z,metrics:k,rect:M}),h+=L*A.scale+u):(T.push({glyph:P,imageName:D,x:h,y:f+C,vertical:R,scale:A.scale,fontStack:A.fontStack,sectionIndex:z,metrics:k,rect:M}),h+=k.advance*A.scale+u)}0!==T.length&&(d=Math.max(h-u,d),Al(T,0,T.length-1,y,I)),h=0
var q=o*b+I
S.lineOffset=Math.max(I,w),f+=q,m=Math.max(q,m),++g}else f+=o,++g}var Z,G=f- -17,X=El(a),W=X.horizontalAlign,K=X.verticalAlign;(function(t,e,r,i,n,o,a,s,l){var u,c=(e-r)*n
u=o!==a?-s*i- -17:(-i*l+.5)*a
for(var p=0,h=t;p<h.length;p+=1)for(var f=0,d=h[p].positionedGlyphs;f<d.length;f+=1){var m=d[f]
m.x+=c,m.y+=u}})(t.positionedLines,y,W,K,d,m,o,G,n.length),t.top+=-K*G,t.bottom=t.top+G,t.left+=-W*d,t.right=t.left+d}(C,e,r,i,y,a,s,l,p,u,h,m),!function(t){for(var e=0,r=t;e<r.length;e+=1)if(0!==r[e].positionedGlyphs.length)return!1
return!0}(P)&&C}gl.fromFeature=function(t,e){for(var r=new gl,i=0;i<t.sections.length;i++){var n=t.sections[i]
n.image?r.addImageSection(n):r.addTextSection(n,e)}return r},gl.prototype.length=function(){return this.text.length},gl.prototype.getSection=function(t){return this.sections[this.sectionIndex[t]]},gl.prototype.getSectionIndex=function(t){return this.sectionIndex[t]},gl.prototype.getCharCode=function(t){return this.text.charCodeAt(t)},gl.prototype.verticalizePunctuation=function(){this.text=function(t){for(var e="",r=0;r<t.length;r++){var i=t.charCodeAt(r+1)||null,n=t.charCodeAt(r-1)||null
e+=i&&Zi(i)&&!Ns[t[r+1]]||n&&Zi(n)&&!Ns[t[r-1]]||!Ns[t[r]]?t[r]:Ns[t[r]]}return e}(this.text)},gl.prototype.trim=function(){for(var t=0,e=0;e<this.text.length&&vl[this.text.charCodeAt(e)];e++)t++
for(var r=this.text.length,i=this.text.length-1;i>=0&&i>=t&&vl[this.text.charCodeAt(i)];i--)r--
this.text=this.text.substring(t,r),this.sectionIndex=this.sectionIndex.slice(t,r)},gl.prototype.substring=function(t,e){var r=new gl
return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r},gl.prototype.toString=function(){return this.text},gl.prototype.getMaxScale=function(){var t=this
return this.sectionIndex.reduce((function(e,r){return Math.max(e,t.sections[r].scale)}),0)},gl.prototype.addTextSection=function(t,e){this.text+=t.text,this.sections.push(yl.forText(t.scale,t.fontStack||e))
for(var r=this.sections.length-1,i=0;i<t.text.length;++i)this.sectionIndex.push(r)},gl.prototype.addImageSection=function(t){var e=t.image?t.image.name:""
if(0!==e.length){var r=this.getNextImageSectionCharCode()
r?(this.text+=String.fromCharCode(r),this.sections.push(yl.forImage(e)),this.sectionIndex.push(this.sections.length-1)):b("Reached maximum number of images 6401")}else b("Can't add FormattedSection with an empty image.")},gl.prototype.getNextImageSectionCharCode=function(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)}
var vl={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},xl={}
function bl(t,e,r,i,n,o){if(e.imageName){var a=i[e.imageName]
return a?a.displaySize[0]*e.scale*24/o+n:0}var s=r[e.fontStack],l=s&&s[t]
return l?l.metrics.advance*e.scale+n:0}function wl(t,e,r,i){var n=Math.pow(t-e,2)
return i?t<e?n/2:2*n:n+Math.abs(r)*r}function Sl(t,e,r){var i=0
return 10===t&&(i-=1e4),r&&(i+=150),40!==t&&65288!==t||(i+=50),41!==e&&65289!==e||(i+=50),i}function Tl(t,e,r,i,n,o){for(var a=null,s=wl(e,r,n,o),l=0,u=i;l<u.length;l+=1){var c=u[l],p=wl(e-c.x,r,n,o)+c.badness
p<=s&&(a=c,s=p)}return{index:t,x:e,priorBreak:a,badness:s}}function Il(t,e,r,i,n,o,a){if("point"!==o)return[]
if(!t)return[]
for(var s,l=[],u=function(t,e,r,i,n,o){for(var a=0,s=0;s<t.length();s++){var l=t.getSection(s)
a+=bl(t.getCharCode(s),l,i,n,e,o)}return a/Math.max(1,Math.ceil(a/r))}(t,e,r,i,n,a),c=t.text.indexOf("​")>=0,p=0,h=0;h<t.length();h++){var f=t.getSection(h),d=t.getCharCode(h)
if(vl[d]||(p+=bl(d,f,i,n,e,a)),h<t.length()-1){var m=!((s=d)<11904||!(Ni["Bopomofo Extended"](s)||Ni.Bopomofo(s)||Ni["CJK Compatibility Forms"](s)||Ni["CJK Compatibility Ideographs"](s)||Ni["CJK Compatibility"](s)||Ni["CJK Radicals Supplement"](s)||Ni["CJK Strokes"](s)||Ni["CJK Symbols and Punctuation"](s)||Ni["CJK Unified Ideographs Extension A"](s)||Ni["CJK Unified Ideographs"](s)||Ni["Enclosed CJK Letters and Months"](s)||Ni["Halfwidth and Fullwidth Forms"](s)||Ni.Hiragana(s)||Ni["Ideographic Description Characters"](s)||Ni["Kangxi Radicals"](s)||Ni["Katakana Phonetic Extensions"](s)||Ni.Katakana(s)||Ni["Vertical Forms"](s)||Ni["Yi Radicals"](s)||Ni["Yi Syllables"](s)));(xl[d]||m||f.imageName)&&l.push(Tl(h+1,p,u,l,Sl(d,t.getCharCode(h+1),m&&c),!1))}}return function t(e){return e?t(e.priorBreak).concat(e.index):[]}(Tl(t.length(),p,u,l,0,!0))}function El(t){var e=.5,r=.5
switch(t){case"right":case"top-right":case"bottom-right":e=1
break
case"left":case"top-left":case"bottom-left":e=0}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1
break
case"top":case"top-right":case"top-left":r=0}return{horizontalAlign:e,verticalAlign:r}}function Al(t,e,r,i,n){if(i||n)for(var o=t[r],a=(t[r].x+o.metrics.advance*o.scale)*i,s=e;s<=r;s++)t[s].x-=a,t[s].y+=n}function zl(t,e,r,i,n,o){var a,s=t.image
if(s.content){var l=s.content,u=s.pixelRatio||1
a=[l[0]/u,l[1]/u,s.displaySize[0]-l[2]/u,s.displaySize[1]-l[3]/u]}var c,p,h,f,d=e.left*o,m=e.right*o
"width"===r||"both"===r?(f=n[0]+d-i[3],p=n[0]+m+i[1]):p=(f=n[0]+(d+m-s.displaySize[0])/2)+s.displaySize[0]
var y=e.top*o,g=e.bottom*o
return"height"===r||"both"===r?(c=n[1]+y-i[0],h=n[1]+g+i[2]):h=(c=n[1]+(y+g-s.displaySize[1])/2)+s.displaySize[1],{image:s,top:c,right:p,bottom:h,left:f,collisionPadding:a}}xl[10]=!0,xl[32]=!0,xl[38]=!0,xl[40]=!0,xl[41]=!0,xl[43]=!0,xl[45]=!0,xl[47]=!0,xl[173]=!0,xl[183]=!0,xl[8203]=!0,xl[8208]=!0,xl[8211]=!0,xl[8231]=!0
var Pl=function(t){function e(e,r,i,n){t.call(this,e,r),this.angle=i,void 0!==n&&(this.segment=n)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(n)
function Cl(t,e){var r=e.expression
if("constant"===r.kind)return{kind:"constant",layoutSize:r.evaluate(new nn(t+1))}
if("source"===r.kind)return{kind:"source"}
for(var i=r.zoomStops,n=r.interpolationType,o=0;o<i.length&&i[o]<=t;)o++
for(var a=o=Math.max(0,o-1);a<i.length&&i[a]<t+1;)a++
a=Math.min(i.length-1,a)
var s=i[o],l=i[a]
return"composite"===r.kind?{kind:"composite",minZoom:s,maxZoom:l,interpolationType:n}:{kind:"camera",minZoom:s,maxZoom:l,minSize:r.evaluate(new nn(s)),maxSize:r.evaluate(new nn(l)),interpolationType:n}}function kl(t,e,r){var i=e.uSize,n=r.lowerSize
return"source"===t.kind?n/128:"composite"===t.kind?Ne(n/128,r.upperSize/128,e.uSizeT):i}function Ml(t,e){var r=0,i=0
if("constant"===t.kind)i=t.layoutSize
else if("source"!==t.kind){var n=t.interpolationType,o=n?l(rr.interpolationFactor(n,e,t.minZoom,t.maxZoom),0,1):0
"camera"===t.kind?i=Ne(t.minSize,t.maxSize,o):r=o}return{uSizeT:r,uSize:i}}Li("Anchor",Pl)
var Dl=Object.freeze({__proto__:null,getSizeData:Cl,evaluateSizeForFeature:kl,evaluateSizeForZoom:Ml,SIZE_PACK_FACTOR:128})
function Ll(t,e,r,i,n){if(void 0===e.segment)return!0
for(var o=e,a=e.segment+1,s=0;s>-r/2;){if(--a<0)return!1
s-=t[a].dist(o),o=t[a]}s+=t[a].dist(t[a+1]),a++
for(var l=[],u=0;s<r/2;){var c=t[a],p=t[a+1]
if(!p)return!1
var h=t[a-1].angleTo(c)-c.angleTo(p)
for(h=Math.abs((h+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:s,angleDelta:h}),u+=h;s-l[0].distance>i;)u-=l.shift().angleDelta
if(u>n)return!1
a++,s+=c.dist(p)}return!0}function Rl(t){for(var e=0,r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1])
return e}function Bl(t,e,r){return t?.6*e*r:0}function Fl(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function Ol(t,e,r,i,n,o){for(var a=Bl(r,n,o),s=Fl(r,i)*o,l=0,u=Rl(t)/2,c=0;c<t.length-1;c++){var p=t[c],h=t[c+1],f=p.dist(h)
if(l+f>u){var d=(u-l)/f,m=Ne(p.x,h.x,d),y=Ne(p.y,h.y,d),g=new Pl(m,y,h.angleTo(p),c)
return g._round(),!a||Ll(t,g,s,a,e)?g:void 0}l+=f}}function Ul(t,e,r,i,n,o,a,s,l){var u=Bl(i,o,a),c=Fl(i,n),p=c*a,h=0===t[0].x||t[0].x===l||0===t[0].y||t[0].y===l
return e-p<e/4&&(e=p+e/4),function t(e,r,i,n,o,a,s,l,u){for(var c=a/2,p=Rl(e),h=0,f=r-i,d=[],m=0;m<e.length-1;m++){for(var y=e[m],g=e[m+1],_=y.dist(g),v=g.angleTo(y);f+i<h+_;){var x=((f+=i)-h)/_,b=Ne(y.x,g.x,x),w=Ne(y.y,g.y,x)
if(b>=0&&b<u&&w>=0&&w<u&&f-c>=0&&f+c<=p){var S=new Pl(b,w,v,m)
S._round(),n&&!Ll(e,S,a,n,o)||d.push(S)}}h+=_}return l||d.length||s||(d=t(e,h/2,i,n,o,a,s,!0,u)),d}(t,h?e/2*s%e:(c/2+2*o)*a*s%e,e,u,r,p,h,!1,l)}function Vl(t,e,r,i,o){for(var a=[],s=0;s<t.length;s++)for(var l=t[s],u=void 0,c=0;c<l.length-1;c++){var p=l[c],h=l[c+1]
p.x<e&&h.x<e||(p.x<e?p=new n(e,p.y+(e-p.x)/(h.x-p.x)*(h.y-p.y))._round():h.x<e&&(h=new n(e,p.y+(e-p.x)/(h.x-p.x)*(h.y-p.y))._round()),p.y<r&&h.y<r||(p.y<r?p=new n(p.x+(r-p.y)/(h.y-p.y)*(h.x-p.x),r)._round():h.y<r&&(h=new n(p.x+(r-p.y)/(h.y-p.y)*(h.x-p.x),r)._round()),p.x>=i&&h.x>=i||(p.x>=i?p=new n(i,p.y+(i-p.x)/(h.x-p.x)*(h.y-p.y))._round():h.x>=i&&(h=new n(i,p.y+(i-p.x)/(h.x-p.x)*(h.y-p.y))._round()),p.y>=o&&h.y>=o||(p.y>=o?p=new n(p.x+(o-p.y)/(h.y-p.y)*(h.x-p.x),o)._round():h.y>=o&&(h=new n(p.x+(o-p.y)/(h.y-p.y)*(h.x-p.x),o)._round()),u&&p.equals(u[u.length-1])||a.push(u=[p]),u.push(h)))))}return a}function Nl(t,e,r,i){var o=[],a=t.image,s=a.pixelRatio,l=a.paddedRect.w-2,u=a.paddedRect.h-2,c=t.right-t.left,p=t.bottom-t.top,h=a.stretchX||[[0,l]],f=a.stretchY||[[0,u]],d=function(t,e){return t+e[1]-e[0]},m=h.reduce(d,0),y=f.reduce(d,0),g=l-m,_=u-y,v=0,x=m,b=0,w=y,S=0,T=g,I=0,E=_
if(a.content&&i){var A=a.content
v=jl(h,0,A[0]),b=jl(f,0,A[1]),x=jl(h,A[0],A[2]),w=jl(f,A[1],A[3]),S=A[0]-v,I=A[1]-b,T=A[2]-A[0]-x,E=A[3]-A[1]-w}var z=function(i,o,l,u){var h=Zl(i.stretch-v,x,c,t.left),f=Gl(i.fixed-S,T,i.stretch,m),d=Zl(o.stretch-b,w,p,t.top),g=Gl(o.fixed-I,E,o.stretch,y),_=Zl(l.stretch-v,x,c,t.left),A=Gl(l.fixed-S,T,l.stretch,m),z=Zl(u.stretch-b,w,p,t.top),P=Gl(u.fixed-I,E,u.stretch,y),C=new n(h,d),k=new n(_,d),M=new n(_,z),D=new n(h,z),L=new n(f/s,g/s),R=new n(A/s,P/s),B=e*Math.PI/180
if(B){var F=Math.sin(B),O=Math.cos(B),U=[O,-F,F,O]
C._matMult(U),k._matMult(U),D._matMult(U),M._matMult(U)}var V=i.stretch+i.fixed,N=o.stretch+o.fixed
return{tl:C,tr:k,bl:D,br:M,tex:{x:a.paddedRect.x+1+V,y:a.paddedRect.y+1+N,w:l.stretch+l.fixed-V,h:u.stretch+u.fixed-N},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:L,pixelOffsetBR:R,minFontScaleX:T/s/c,minFontScaleY:E/s/p,isSDF:r}}
if(i&&(a.stretchX||a.stretchY))for(var P=ql(h,g,m),C=ql(f,_,y),k=0;k<P.length-1;k++)for(var M=P[k],D=P[k+1],L=0;L<C.length-1;L++)o.push(z(M,C[L],D,C[L+1]))
else o.push(z({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:l+1},{fixed:0,stretch:u+1}))
return o}function jl(t,e,r){for(var i=0,n=0,o=t;n<o.length;n+=1){var a=o[n]
i+=Math.max(e,Math.min(r,a[1]))-Math.max(e,Math.min(r,a[0]))}return i}function ql(t,e,r){for(var i=[{fixed:-1,stretch:0}],n=0,o=t;n<o.length;n+=1){var a=o[n],s=a[0],l=a[1],u=i[i.length-1]
i.push({fixed:s-u.stretch,stretch:u.stretch}),i.push({fixed:s-u.stretch,stretch:u.stretch+(l-s)})}return i.push({fixed:e+1,stretch:r}),i}function Zl(t,e,r,i){return t/e*r+i}function Gl(t,e,r,i){return t-e*r/i}var Xl=function(t,e,r,i,o,a,s,l,u,c){if(this.boxStartIndex=t.length,u){var p=a.top,h=a.bottom,f=a.collisionPadding
f&&(p-=f[1],h+=f[3])
var d=h-p
d>0&&(d=Math.max(10,d),this.circleDiameter=d)}else{var m=a.top*s-l,y=a.bottom*s+l,g=a.left*s-l,_=a.right*s+l,v=a.collisionPadding
if(v&&(g-=v[0]*s,m-=v[1]*s,_+=v[2]*s,y+=v[3]*s),c){var x=new n(g,m),b=new n(_,m),w=new n(g,y),S=new n(_,y),T=c*Math.PI/180
x._rotate(T),b._rotate(T),w._rotate(T),S._rotate(T),g=Math.min(x.x,b.x,w.x,S.x),_=Math.max(x.x,b.x,w.x,S.x),m=Math.min(x.y,b.y,w.y,S.y),y=Math.max(x.y,b.y,w.y,S.y)}t.emplaceBack(e.x,e.y,g,m,_,y,r,i,o)}this.boxEndIndex=t.length},Wl=function(t,e){if(void 0===t&&(t=[]),void 0===e&&(e=Kl),this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(var r=(this.length>>1)-1;r>=0;r--)this._down(r)}
function Kl(t,e){return t<e?-1:t>e?1:0}function Hl(t,e,r){void 0===e&&(e=1),void 0===r&&(r=!1)
for(var i=1/0,o=1/0,a=-1/0,s=-1/0,l=t[0],u=0;u<l.length;u++){var c=l[u];(!u||c.x<i)&&(i=c.x),(!u||c.y<o)&&(o=c.y),(!u||c.x>a)&&(a=c.x),(!u||c.y>s)&&(s=c.y)}var p=Math.min(a-i,s-o),h=p/2,f=new Wl([],Jl)
if(0===p)return new n(i,o)
for(var d=i;d<a;d+=p)for(var m=o;m<s;m+=p)f.push(new Yl(d+h,m+h,h,t))
for(var y=function(t){for(var e=0,r=0,i=0,n=t[0],o=0,a=n.length,s=a-1;o<a;s=o++){var l=n[o],u=n[s],c=l.x*u.y-u.x*l.y
r+=(l.x+u.x)*c,i+=(l.y+u.y)*c,e+=3*c}return new Yl(r/e,i/e,0,t)}(t),g=f.length;f.length;){var _=f.pop();(_.d>y.d||!y.d)&&(y=_,r&&console.log("found best %d after %d probes",Math.round(1e4*_.d)/1e4,g)),_.max-y.d<=e||(f.push(new Yl(_.p.x-(h=_.h/2),_.p.y-h,h,t)),f.push(new Yl(_.p.x+h,_.p.y-h,h,t)),f.push(new Yl(_.p.x-h,_.p.y+h,h,t)),f.push(new Yl(_.p.x+h,_.p.y+h,h,t)),g+=4)}return r&&(console.log("num probes: "+g),console.log("best distance: "+y.d)),y.p}function Jl(t,e){return e.max-t.max}function Yl(t,e,r,i){this.p=new n(t,e),this.h=r,this.d=function(t,e){for(var r=!1,i=1/0,n=0;n<e.length;n++)for(var o=e[n],a=0,s=o.length,l=s-1;a<s;l=a++){var u=o[a],c=o[l]
u.y>t.y!=c.y>t.y&&t.x<(c.x-u.x)*(t.y-u.y)/(c.y-u.y)+u.x&&(r=!r),i=Math.min(i,Xo(t,u,c))}return(r?1:-1)*Math.sqrt(i)}(this.p,i),this.max=this.d+this.h*Math.SQRT2}Wl.prototype.push=function(t){this.data.push(t),this.length++,this._up(this.length-1)},Wl.prototype.pop=function(){if(0!==this.length){var t=this.data[0],e=this.data.pop()
return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}},Wl.prototype.peek=function(){return this.data[0]},Wl.prototype._up=function(t){for(var e=this.data,r=this.compare,i=e[t];t>0;){var n=t-1>>1,o=e[n]
if(r(i,o)>=0)break
e[t]=o,t=n}e[t]=i},Wl.prototype._down=function(t){for(var e=this.data,r=this.compare,i=this.length>>1,n=e[t];t<i;){var o=1+(t<<1),a=e[o],s=o+1
if(s<this.length&&r(e[s],a)<0&&(o=s,a=e[s]),r(a,n)>=0)break
e[t]=a,t=o}e[t]=n}
var Ql=Number.POSITIVE_INFINITY
function $l(t,e){return e[1]!==Ql?function(t,e,r){var i=0,n=0
switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":n=r-7
break
case"bottom-right":case"bottom-left":case"bottom":n=7-r}switch(t){case"top-right":case"bottom-right":case"right":i=-e
break
case"top-left":case"bottom-left":case"left":i=e}return[i,n]}(t,e[0],e[1]):function(t,e){var r=0,i=0
e<0&&(e=0)
var n=e/Math.sqrt(2)
switch(t){case"top-right":case"top-left":i=n-7
break
case"bottom-right":case"bottom-left":i=7-n
break
case"bottom":i=7-e
break
case"top":i=e-7}switch(t){case"top-right":case"bottom-right":r=-n
break
case"top-left":case"bottom-left":r=n
break
case"left":r=e
break
case"right":r=-e}return[r,i]}(t,e[0])}function tu(t){switch(t){case"right":case"top-right":case"bottom-right":return"right"
case"left":case"top-left":case"bottom-left":return"left"}return"center"}function eu(t,e,r,i,o,a,s,l,u,c,p,h,f,d,m){var y=function(t,e,r,i,o,a,s,l){for(var u=i.layout.get("text-rotate").evaluate(a,{})*Math.PI/180,c=[],p=0,h=e.positionedLines;p<h.length;p+=1)for(var f=h[p],d=0,m=f.positionedGlyphs;d<m.length;d+=1){var y=m[d]
if(y.rect){var g=y.rect||{},_=4,v=!0,x=1,b=0,w=(o||l)&&y.vertical,S=y.metrics.advance*y.scale/2
if(l&&e.verticalizable&&(b=f.lineOffset/2-(y.imageName?-(24-y.metrics.width*y.scale)/2:24*(y.scale-1))),y.imageName){var T=s[y.imageName]
v=T.sdf,_=1/(x=T.pixelRatio)}var I=o?[y.x+S,y.y]:[0,0],E=o?[0,0]:[y.x+S+r[0],y.y+r[1]-b],A=[0,0]
w&&(A=E,E=[0,0])
var z=(y.metrics.left-_)*y.scale-S+E[0],P=(-y.metrics.top-_)*y.scale+E[1],C=z+g.w*y.scale/x,k=P+g.h*y.scale/x,M=new n(z,P),D=new n(C,P),L=new n(z,k),R=new n(C,k)
if(w){var B=new n(-S,S- -17),F=-Math.PI/2,O=12-S,U=new n(22-O,-(y.imageName?O:0)),V=new(Function.prototype.bind.apply(n,[null].concat(A)))
M._rotateAround(F,B)._add(U)._add(V),D._rotateAround(F,B)._add(U)._add(V),L._rotateAround(F,B)._add(U)._add(V),R._rotateAround(F,B)._add(U)._add(V)}if(u){var N=Math.sin(u),j=Math.cos(u),q=[j,-N,N,j]
M._matMult(q),D._matMult(q),L._matMult(q),R._matMult(q)}var Z=new n(0,0),G=new n(0,0)
c.push({tl:M,tr:D,bl:L,br:R,tex:g,writingMode:e.writingMode,glyphOffset:I,sectionIndex:y.sectionIndex,isSDF:v,pixelOffsetTL:Z,pixelOffsetBR:G,minFontScaleX:0,minFontScaleY:0})}}return c}(0,r,l,o,a,s,i,t.allowVerticalPlacement),g=t.textSizeData,_=null
"source"===g.kind?(_=[128*o.layout.get("text-size").evaluate(s,{})])[0]>32640&&b(t.layerIds[0]+': Value for "text-size" is >= 255. Reduce your "text-size".'):"composite"===g.kind&&((_=[128*d.compositeTextSizes[0].evaluate(s,{},m),128*d.compositeTextSizes[1].evaluate(s,{},m)])[0]>32640||_[1]>32640)&&b(t.layerIds[0]+': Value for "text-size" is >= 255. Reduce your "text-size".'),t.addSymbols(t.text,y,_,l,a,s,c,e,u.lineStartIndex,u.lineLength,f,m)
for(var v=0,x=p;v<x.length;v+=1)h[x[v]]=t.text.placedSymbolArray.length-1
return 4*y.length}function ru(t){for(var e in t)return t[e]
return null}function iu(t,e,r,i){var n=t.compareText
if(e in n){for(var o=n[e],a=o.length-1;a>=0;a--)if(i.dist(o[a])<r)return!0}else n[e]=[]
return n[e].push(i),!1}var nu=ms.VectorTileFeature.types,ou=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}]
function au(t,e,r,i,n,o,a,s,l,u,c,p,h){var f=s?Math.min(32640,Math.round(s[0])):0,d=s?Math.min(32640,Math.round(s[1])):0
t.emplaceBack(e,r,Math.round(32*i),Math.round(32*n),o,a,(f<<1)+(l?1:0),d,16*u,16*c,256*p,256*h)}function su(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r)}function lu(t){for(var e=0,r=t.sections;e<r.length;e+=1)if(Wi(r[e].text))return!0
return!1}var uu=function(t){this.layoutVertexArray=new Cn,this.indexArray=new Fn,this.programConfigurations=t,this.segments=new no,this.dynamicLayoutVertexArray=new kn,this.opacityVertexArray=new Mn,this.placedSymbolArray=new Jn}
uu.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length&&0===this.indexArray.length&&0===this.dynamicLayoutVertexArray.length&&0===this.opacityVertexArray.length},uu.prototype.upload=function(t,e,r,i){this.isEmpty()||(r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Rs.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,Bs.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,ou,!0),this.opacityVertexBuffer.itemSize=1),(r||i)&&this.programConfigurations.upload(t))},uu.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy())},Li("SymbolBuffers",uu)
var cu=function(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new no,this.collisionVertexArray=new Bn}
cu.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,Fs.members,!0)},cu.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy())},Li("CollisionBuffers",cu)
var pu=function(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex,this.hasPattern=!1,this.hasRTLText=!1,this.sortKeyRanges=[],this.collisionCircleArray=[],this.placementInvProjMatrix=ra([]),this.placementViewportMatrix=ra([])
var e=this.layers[0]._unevaluatedLayout._values
this.textSizeData=Cl(this.zoom,e["text-size"]),this.iconSizeData=Cl(this.zoom,e["icon-size"])
var r=this.layers[0].layout,i=r.get("symbol-sort-key"),n=r.get("symbol-z-order")
this.sortFeaturesByKey="viewport-y"!==n&&void 0!==i.constantOr(1),this.sortFeaturesByY=("viewport-y"===n||"auto"===n&&!this.sortFeaturesByKey)&&(r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement")),"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map((function(t){return ml[t]}))),this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id})),this.sourceID=t.sourceID}
pu.prototype.createArrays=function(){this.text=new uu(new Mo(Rs.members,this.layers,this.zoom,(function(t){return/^text/.test(t)}))),this.icon=new uu(new Mo(Rs.members,this.layers,this.zoom,(function(t){return/^icon/.test(t)}))),this.glyphOffsetArray=new $n,this.lineVertexArray=new to,this.symbolInstances=new Qn},pu.prototype.calculateGlyphDependencies=function(t,e,r,i,n){for(var o=0;o<t.length;o++)if(e[t.charCodeAt(o)]=!0,(r||i)&&n){var a=Ns[t.charAt(o)]
a&&(e[a.charCodeAt(0)]=!0)}},pu.prototype.populate=function(t,e,r){var i=this.layers[0],n=i.layout,o=n.get("text-font"),a=n.get("text-field"),s=n.get("icon-image"),l=("constant"!==a.value.kind||a.value.value instanceof te&&!a.value.value.isEmpty()||a.value.value.toString().length>0)&&("constant"!==o.value.kind||o.value.value.length>0),u="constant"!==s.value.kind||!!s.value.value||Object.keys(s.parameters).length>0,c=n.get("symbol-sort-key")
if(this.features=[],l||u){for(var p=e.iconDependencies,h=e.glyphDependencies,f=e.availableImages,d=new nn(this.zoom),m=0,y=t;m<y.length;m+=1){var g=y[m],_=g.feature,v=g.id,x=g.index,b=g.sourceLayerIndex,w=i._featureFilter.needGeometry,S={type:_.type,id:v,properties:_.properties,geometry:w?Bo(_):[]}
if(i._featureFilter.filter(d,S,r)){w||(S.geometry=Bo(_))
var T=void 0
if(l){var I=i.getValueAndResolveTokens("text-field",S,r,f),E=te.factory(I)
lu(E)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===tn()||this.hasRTLText&&rn.isParsed())&&(T=Vs(E,i,S))}var A=void 0
if(u){var z=i.getValueAndResolveTokens("icon-image",S,r,f)
A=z instanceof ee?z:ee.fromString(z)}if(T||A){var P=this.sortFeaturesByKey?c.evaluate(S,{},r):void 0,C={id:v,text:T,icon:A,index:x,sourceLayerIndex:b,geometry:Bo(_),properties:_.properties,type:nu[_.type],sortKey:P}
if(this.features.push(C),A&&(p[A.name]=!0),T){var k=o.evaluate(S,{},r).join(","),M="map"===n.get("text-rotation-alignment")&&"point"!==n.get("symbol-placement")
this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(ml.vertical)>=0
for(var D=0,L=T.sections;D<L.length;D+=1){var R=L[D]
if(R.image)p[R.image.name]=!0
else{var B=ji(T.toString()),F=R.fontStack||k,O=h[F]=h[F]||{}
this.calculateGlyphDependencies(R.text,O,M,this.allowVerticalPlacement,B)}}}}}}"line"===n.get("symbol-placement")&&(this.features=function(t){var e={},r={},i=[],n=0
function o(e){i.push(t[e]),n++}function a(t,e,n){var o=r[t]
return delete r[t],r[e]=o,i[o].geometry[0].pop(),i[o].geometry[0]=i[o].geometry[0].concat(n[0]),o}function s(t,r,n){var o=e[r]
return delete e[r],e[t]=o,i[o].geometry[0].shift(),i[o].geometry[0]=n[0].concat(i[o].geometry[0]),o}function l(t,e,r){var i=r?e[0][e[0].length-1]:e[0][0]
return t+":"+i.x+":"+i.y}for(var u=0;u<t.length;u++){var c=t[u],p=c.geometry,h=c.text?c.text.toString():null
if(h){var f=l(h,p),d=l(h,p,!0)
if(f in r&&d in e&&r[f]!==e[d]){var m=s(f,d,p),y=a(f,d,i[m].geometry)
delete e[f],delete r[d],r[l(h,i[y].geometry,!0)]=y,i[m].geometry=null}else f in r?a(f,d,p):d in e?s(f,d,p):(o(u),e[f]=n-1,r[d]=n-1)}else o(u)}return i.filter((function(t){return t.geometry}))}(this.features)),this.sortFeaturesByKey&&this.features.sort((function(t,e){return t.sortKey-e.sortKey}))}},pu.prototype.update=function(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r))},pu.prototype.isEmpty=function(){return 0===this.symbolInstances.length&&!this.hasRTLText},pu.prototype.uploadPending=function(){return!this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload},pu.prototype.upload=function(t){!this.uploaded&&this.hasDebugData()&&(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0},pu.prototype.destroyDebugData=function(){this.textCollisionBox.destroy(),this.iconCollisionBox.destroy()},pu.prototype.destroy=function(){this.text.destroy(),this.icon.destroy(),this.hasDebugData()&&this.destroyDebugData()},pu.prototype.addToLineVertexArray=function(t,e){var r=this.lineVertexArray.length
if(void 0!==t.segment){for(var i=t.dist(e[t.segment+1]),n=t.dist(e[t.segment]),o={},a=t.segment+1;a<e.length;a++)o[a]={x:e[a].x,y:e[a].y,tileUnitDistanceFromAnchor:i},a<e.length-1&&(i+=e[a+1].dist(e[a]))
for(var s=t.segment||0;s>=0;s--)o[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:n},s>0&&(n+=e[s-1].dist(e[s]))
for(var l=0;l<e.length;l++){var u=o[l]
this.lineVertexArray.emplaceBack(u.x,u.y,u.tileUnitDistanceFromAnchor)}}return{lineStartIndex:r,lineLength:this.lineVertexArray.length-r}},pu.prototype.addSymbols=function(t,e,r,i,n,o,a,s,l,u,c,p){for(var h=t.indexArray,f=t.layoutVertexArray,d=t.segments.prepareSegment(4*e.length,f,h,o.sortKey),m=this.glyphOffsetArray.length,y=d.vertexLength,g=this.allowVerticalPlacement&&a===ml.vertical?Math.PI/2:0,_=o.text&&o.text.sections,v=0;v<e.length;v++){var x=e[v],b=x.tl,w=x.tr,S=x.bl,T=x.br,I=x.tex,E=x.pixelOffsetTL,A=x.pixelOffsetBR,z=x.minFontScaleX,P=x.minFontScaleY,C=x.glyphOffset,k=x.isSDF,M=x.sectionIndex,D=d.vertexLength,L=C[1]
au(f,s.x,s.y,b.x,L+b.y,I.x,I.y,r,k,E.x,E.y,z,P),au(f,s.x,s.y,w.x,L+w.y,I.x+I.w,I.y,r,k,A.x,E.y,z,P),au(f,s.x,s.y,S.x,L+S.y,I.x,I.y+I.h,r,k,E.x,A.y,z,P),au(f,s.x,s.y,T.x,L+T.y,I.x+I.w,I.y+I.h,r,k,A.x,A.y,z,P),su(t.dynamicLayoutVertexArray,s,g),h.emplaceBack(D,D+1,D+2),h.emplaceBack(D+1,D+2,D+3),d.vertexLength+=4,d.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(C[0]),v!==e.length-1&&M===e[v+1].sectionIndex||t.programConfigurations.populatePaintArrays(f.length,o,o.index,{},p,_&&_[M])}t.placedSymbolArray.emplaceBack(s.x,s.y,m,this.glyphOffsetArray.length-m,y,l,u,s.segment,r?r[0]:0,r?r[1]:0,i[0],i[1],a,0,!1,0,c)},pu.prototype._addCollisionDebugVertex=function(t,e,r,i,n,o){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,i,n,Math.round(o.x),Math.round(o.y))},pu.prototype.addCollisionDebugVertices=function(t,e,r,i,o,a,s){var l=o.segments.prepareSegment(4,o.layoutVertexArray,o.indexArray),u=l.vertexLength,c=o.layoutVertexArray,p=o.collisionVertexArray,h=s.anchorX,f=s.anchorY
this._addCollisionDebugVertex(c,p,a,h,f,new n(t,e)),this._addCollisionDebugVertex(c,p,a,h,f,new n(r,e)),this._addCollisionDebugVertex(c,p,a,h,f,new n(r,i)),this._addCollisionDebugVertex(c,p,a,h,f,new n(t,i)),l.vertexLength+=4
var d=o.indexArray
d.emplaceBack(u,u+1),d.emplaceBack(u+1,u+2),d.emplaceBack(u+2,u+3),d.emplaceBack(u+3,u),l.primitiveLength+=4},pu.prototype.addDebugCollisionBoxes=function(t,e,r,i){for(var n=t;n<e;n++){var o=this.collisionBoxArray.get(n)
this.addCollisionDebugVertices(o.x1,o.y1,o.x2,o.y2,i?this.textCollisionBox:this.iconCollisionBox,o.anchorPoint,r)}},pu.prototype.generateCollisionDebugBuffers=function(){this.hasDebugData()&&this.destroyDebugData(),this.textCollisionBox=new cu(Ln,Os.members,qn),this.iconCollisionBox=new cu(Ln,Os.members,qn)
for(var t=0;t<this.symbolInstances.length;t++){var e=this.symbolInstances.get(t)
this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1),this.addDebugCollisionBoxes(e.verticalIconBoxStartIndex,e.verticalIconBoxEndIndex,e,!1)}},pu.prototype._deserializeCollisionBoxesForSymbol=function(t,e,r,i,n,o,a,s,l){for(var u={},c=e;c<r;c++){var p=t.get(c)
u.textBox={x1:p.x1,y1:p.y1,x2:p.x2,y2:p.y2,anchorPointX:p.anchorPointX,anchorPointY:p.anchorPointY},u.textFeatureIndex=p.featureIndex
break}for(var h=i;h<n;h++){var f=t.get(h)
u.verticalTextBox={x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2,anchorPointX:f.anchorPointX,anchorPointY:f.anchorPointY},u.verticalTextFeatureIndex=f.featureIndex
break}for(var d=o;d<a;d++){var m=t.get(d)
u.iconBox={x1:m.x1,y1:m.y1,x2:m.x2,y2:m.y2,anchorPointX:m.anchorPointX,anchorPointY:m.anchorPointY},u.iconFeatureIndex=m.featureIndex
break}for(var y=s;y<l;y++){var g=t.get(y)
u.verticalIconBox={x1:g.x1,y1:g.y1,x2:g.x2,y2:g.y2,anchorPointX:g.anchorPointX,anchorPointY:g.anchorPointY},u.verticalIconFeatureIndex=g.featureIndex
break}return u},pu.prototype.deserializeCollisionBoxes=function(t){this.collisionArrays=[]
for(var e=0;e<this.symbolInstances.length;e++){var r=this.symbolInstances.get(e)
this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex,r.verticalIconBoxStartIndex,r.verticalIconBoxEndIndex))}},pu.prototype.hasTextData=function(){return this.text.segments.get().length>0},pu.prototype.hasIconData=function(){return this.icon.segments.get().length>0},pu.prototype.hasDebugData=function(){return this.textCollisionBox&&this.iconCollisionBox},pu.prototype.hasTextCollisionBoxData=function(){return this.hasDebugData()&&this.textCollisionBox.segments.get().length>0},pu.prototype.hasIconCollisionBoxData=function(){return this.hasDebugData()&&this.iconCollisionBox.segments.get().length>0},pu.prototype.addIndicesForPlacedSymbol=function(t,e){for(var r=t.placedSymbolArray.get(e),i=r.vertexStartIndex+4*r.numGlyphs,n=r.vertexStartIndex;n<i;n+=4)t.indexArray.emplaceBack(n,n+1,n+2),t.indexArray.emplaceBack(n+1,n+2,n+3)},pu.prototype.getSortedSymbolIndexes=function(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes
for(var e=Math.sin(t),r=Math.cos(t),i=[],n=[],o=[],a=0;a<this.symbolInstances.length;++a){o.push(a)
var s=this.symbolInstances.get(a)
i.push(0|Math.round(e*s.anchorX+r*s.anchorY)),n.push(s.featureIndex)}return o.sort((function(t,e){return i[t]-i[e]||n[e]-n[t]})),o},pu.prototype.addToSortKeyRanges=function(t,e){var r=this.sortKeyRanges[this.sortKeyRanges.length-1]
r&&r.sortKey===e?r.symbolInstanceEnd=t+1:this.sortKeyRanges.push({sortKey:e,symbolInstanceStart:t,symbolInstanceEnd:t+1})},pu.prototype.sortFeatures=function(t){var e=this
if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[]
for(var r=0,i=this.symbolInstanceIndexes;r<i.length;r+=1){var n=this.symbolInstances.get(i[r])
this.featureSortOrder.push(n.featureIndex),[n.rightJustifiedTextSymbolIndex,n.centerJustifiedTextSymbolIndex,n.leftJustifiedTextSymbolIndex].forEach((function(t,r,i){t>=0&&i.indexOf(t)===r&&e.addIndicesForPlacedSymbol(e.text,t)})),n.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,n.verticalPlacedTextSymbolIndex),n.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,n.placedIconSymbolIndex),n.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,n.verticalPlacedIconSymbolIndex)}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray)}},Li("SymbolBucket",pu,{omit:["layers","collisionBoxArray","features","compareText"]}),pu.MAX_GLYPHS=65535,pu.addDynamicAttributes=su
var hu=new _n({"symbol-placement":new fn(Et.layout_symbol["symbol-placement"]),"symbol-spacing":new fn(Et.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new fn(Et.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new dn(Et.layout_symbol["symbol-sort-key"]),"symbol-z-order":new fn(Et.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new fn(Et.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new fn(Et.layout_symbol["icon-ignore-placement"]),"icon-optional":new fn(Et.layout_symbol["icon-optional"]),"icon-rotation-alignment":new fn(Et.layout_symbol["icon-rotation-alignment"]),"icon-size":new dn(Et.layout_symbol["icon-size"]),"icon-text-fit":new fn(Et.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new fn(Et.layout_symbol["icon-text-fit-padding"]),"icon-image":new dn(Et.layout_symbol["icon-image"]),"icon-rotate":new dn(Et.layout_symbol["icon-rotate"]),"icon-padding":new fn(Et.layout_symbol["icon-padding"]),"icon-keep-upright":new fn(Et.layout_symbol["icon-keep-upright"]),"icon-offset":new dn(Et.layout_symbol["icon-offset"]),"icon-anchor":new dn(Et.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new fn(Et.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new fn(Et.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new fn(Et.layout_symbol["text-rotation-alignment"]),"text-field":new dn(Et.layout_symbol["text-field"]),"text-font":new dn(Et.layout_symbol["text-font"]),"text-size":new dn(Et.layout_symbol["text-size"]),"text-max-width":new dn(Et.layout_symbol["text-max-width"]),"text-line-height":new fn(Et.layout_symbol["text-line-height"]),"text-letter-spacing":new dn(Et.layout_symbol["text-letter-spacing"]),"text-justify":new dn(Et.layout_symbol["text-justify"]),"text-radial-offset":new dn(Et.layout_symbol["text-radial-offset"]),"text-variable-anchor":new fn(Et.layout_symbol["text-variable-anchor"]),"text-anchor":new dn(Et.layout_symbol["text-anchor"]),"text-max-angle":new fn(Et.layout_symbol["text-max-angle"]),"text-writing-mode":new fn(Et.layout_symbol["text-writing-mode"]),"text-rotate":new dn(Et.layout_symbol["text-rotate"]),"text-padding":new fn(Et.layout_symbol["text-padding"]),"text-keep-upright":new fn(Et.layout_symbol["text-keep-upright"]),"text-transform":new dn(Et.layout_symbol["text-transform"]),"text-offset":new dn(Et.layout_symbol["text-offset"]),"text-allow-overlap":new fn(Et.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new fn(Et.layout_symbol["text-ignore-placement"]),"text-optional":new fn(Et.layout_symbol["text-optional"])}),fu={paint:new _n({"icon-opacity":new dn(Et.paint_symbol["icon-opacity"]),"icon-color":new dn(Et.paint_symbol["icon-color"]),"icon-halo-color":new dn(Et.paint_symbol["icon-halo-color"]),"icon-halo-width":new dn(Et.paint_symbol["icon-halo-width"]),"icon-halo-blur":new dn(Et.paint_symbol["icon-halo-blur"]),"icon-translate":new fn(Et.paint_symbol["icon-translate"]),"icon-translate-anchor":new fn(Et.paint_symbol["icon-translate-anchor"]),"text-opacity":new dn(Et.paint_symbol["text-opacity"]),"text-color":new dn(Et.paint_symbol["text-color"],{runtimeType:Ot,getOverride:function(t){return t.textColor},hasOverride:function(t){return!!t.textColor}}),"text-halo-color":new dn(Et.paint_symbol["text-halo-color"]),"text-halo-width":new dn(Et.paint_symbol["text-halo-width"]),"text-halo-blur":new dn(Et.paint_symbol["text-halo-blur"]),"text-translate":new fn(Et.paint_symbol["text-translate"]),"text-translate-anchor":new fn(Et.paint_symbol["text-translate-anchor"])}),layout:hu},du=function(t){this.type=t.property.overrides?t.property.overrides.runtimeType:Lt,this.defaultValue=t}
du.prototype.evaluate=function(t){if(t.formattedSection){var e=this.defaultValue.property.overrides
if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default},du.prototype.eachChild=function(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression)},du.prototype.outputDefined=function(){return!1},du.prototype.serialize=function(){return null},Li("FormatSectionOverride",du,{omit:["defaultValue"]})
var mu=function(t){function e(e){t.call(this,e,fu)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.recalculate=function(e,r){if(t.prototype.recalculate.call(this,e,r),"auto"===this.layout.get("icon-rotation-alignment")&&(this.layout._values["icon-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-rotation-alignment")&&(this.layout._values["text-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){var i=this.layout.get("text-writing-mode")
if(i){for(var n=[],o=0,a=i;o<a.length;o+=1){var s=a[o]
n.indexOf(s)<0&&n.push(s)}this.layout._values["text-writing-mode"]=n}else this.layout._values["text-writing-mode"]=["horizontal"]}this._setPaintOverrides()},e.prototype.getValueAndResolveTokens=function(t,e,r,i){var n=this.layout.get(t).evaluate(e,{},r,i),o=this._unevaluatedLayout._values[t]
return o.isDataDriven()||jr(o.value)||!n?n:function(t,e){return e.replace(/{([^{}]+)}/g,(function(e,r){return r in t?String(t[r]):""}))}(e.properties,n)},e.prototype.createBucket=function(t){return new pu(t)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return!1},e.prototype._setPaintOverrides=function(){for(var t=0,r=fu.paint.overridableProperties;t<r.length;t+=1){var i=r[t]
if(e.hasPaintOverride(this.layout,i)){var n,o=this.paint.get(i),a=new du(o),s=new Nr(a,o.property.specification)
n="constant"===o.value.kind||"source"===o.value.kind?new Zr("source",s):new Gr("composite",s,o.value.zoomStops,o.value._interpolationType),this.paint._values[i]=new pn(o.property,n,o.parameters)}}},e.prototype._handleOverridablePaintPropertyUpdate=function(t,r,i){return!(!this.layout||r.isDataDriven()||i.isDataDriven())&&e.hasPaintOverride(this.layout,t)},e.hasPaintOverride=function(t,e){var r=t.get("text-field"),i=fu.paint.properties[e],n=!1,o=function(t){for(var e=0,r=t;e<r.length;e+=1)if(i.overrides&&i.overrides.hasOverride(r[e]))return void(n=!0)}
if("constant"===r.value.kind&&r.value.value instanceof te)o(r.value.value.sections)
else if("source"===r.value.kind){var a=function(t){n||(t instanceof ae&&ne(t.value)===jt?o(t.value.sections):t instanceof ce?o(t.sections):t.eachChild(a))},s=r.value
s._styleExpression&&a(s._styleExpression.expression)}return n},e}(vn),yu={paint:new _n({"background-color":new fn(Et.paint_background["background-color"]),"background-pattern":new yn(Et.paint_background["background-pattern"]),"background-opacity":new fn(Et.paint_background["background-opacity"])})},gu=function(t){function e(e){t.call(this,e,yu)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(vn),_u={paint:new _n({"raster-opacity":new fn(Et.paint_raster["raster-opacity"]),"raster-hue-rotate":new fn(Et.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new fn(Et.paint_raster["raster-brightness-min"]),"raster-brightness-max":new fn(Et.paint_raster["raster-brightness-max"]),"raster-saturation":new fn(Et.paint_raster["raster-saturation"]),"raster-contrast":new fn(Et.paint_raster["raster-contrast"]),"raster-resampling":new fn(Et.paint_raster["raster-resampling"]),"raster-fade-duration":new fn(Et.paint_raster["raster-fade-duration"])})},vu=function(t){function e(e){t.call(this,e,_u)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(vn),xu=function(t){function e(e){t.call(this,e,{}),this.implementation=e}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.is3D=function(){return"3d"===this.implementation.renderingMode},e.prototype.hasOffscreenPass=function(){return void 0!==this.implementation.prerender},e.prototype.recalculate=function(){},e.prototype.updateTransitions=function(){},e.prototype.hasTransition=function(){},e.prototype.serialize=function(){},e.prototype.onAdd=function(t){this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl)},e.prototype.onRemove=function(t){this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl)},e}(vn),bu={circle:sa,heatmap:ga,hillshade:va,fill:os,"fill-extrusion":ws,line:Ds,symbol:mu,background:gu,raster:vu},wu=self.HTMLImageElement,Su=self.HTMLCanvasElement,Tu=self.HTMLVideoElement,Iu=self.ImageData,Eu=self.ImageBitmap,Au=function(t,e,r,i){this.context=t,this.format=r,this.texture=t.gl.createTexture(),this.update(e,i)}
Au.prototype.update=function(t,e,r){var i=t.width,n=t.height,o=!(this.size&&this.size[0]===i&&this.size[1]===n||r),a=this.context,s=a.gl
if(this.useMipmap=Boolean(e&&e.useMipmap),s.bindTexture(s.TEXTURE_2D,this.texture),a.pixelStoreUnpackFlipY.set(!1),a.pixelStoreUnpack.set(1),a.pixelStoreUnpackPremultiplyAlpha.set(this.format===s.RGBA&&(!e||!1!==e.premultiply)),o)this.size=[i,n],t instanceof wu||t instanceof Su||t instanceof Tu||t instanceof Iu||Eu&&t instanceof Eu?s.texImage2D(s.TEXTURE_2D,0,this.format,this.format,s.UNSIGNED_BYTE,t):s.texImage2D(s.TEXTURE_2D,0,this.format,i,n,0,this.format,s.UNSIGNED_BYTE,t.data)
else{var l=r||{x:0,y:0},u=l.x,c=l.y
t instanceof wu||t instanceof Su||t instanceof Tu||t instanceof Iu||Eu&&t instanceof Eu?s.texSubImage2D(s.TEXTURE_2D,0,u,c,s.RGBA,s.UNSIGNED_BYTE,t):s.texSubImage2D(s.TEXTURE_2D,0,u,c,i,n,s.RGBA,s.UNSIGNED_BYTE,t.data)}this.useMipmap&&this.isSizePowerOfTwo()&&s.generateMipmap(s.TEXTURE_2D)},Au.prototype.bind=function(t,e,r){var i=this.context.gl
i.bindTexture(i.TEXTURE_2D,this.texture),r!==i.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(r=i.LINEAR),t!==this.filter&&(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,r||t),this.filter=t),e!==this.wrap&&(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e),this.wrap=e)},Au.prototype.isSizePowerOfTwo=function(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0},Au.prototype.destroy=function(){this.context.gl.deleteTexture(this.texture),this.texture=null}
var zu=function(t){var e=this
this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=function(){e._triggered=!1,e._callback()})}
zu.prototype.trigger=function(){var t=this
this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((function(){t._triggered=!1,t._callback()}),0))},zu.prototype.remove=function(){delete this._channel,this._callback=function(){}}
var Pu=function(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},m(["receive","process"],this),this.invoker=new zu(this.process),this.target.addEventListener("message",this.receive,!1),this.globalScope=T()?t:self}
function Cu(t,e,r){var i=2*Math.PI*6378137/256/Math.pow(2,r)
return[t*i-2*Math.PI*6378137/2,e*i-2*Math.PI*6378137/2]}Pu.prototype.send=function(t,e,r,i,n){var o=this
void 0===n&&(n=!1)
var a=Math.round(1e18*Math.random()).toString(36).substring(0,10)
r&&(this.callbacks[a]=r)
var s=A(this.globalScope)?void 0:[]
return this.target.postMessage({id:a,type:t,hasCallback:!!r,targetMapId:i,mustQueue:n,sourceMapId:this.mapId,data:Oi(e,s)},s),{cancel:function(){r&&delete o.callbacks[a],o.target.postMessage({id:a,type:"<cancel>",targetMapId:i,sourceMapId:o.mapId})}}},Pu.prototype.receive=function(t){var e=t.data,r=e.id
if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[r]
var i=this.cancelCallbacks[r]
delete this.cancelCallbacks[r],i&&i()}else T()||e.mustQueue?(this.tasks[r]=e,this.taskQueue.push(r),this.invoker.trigger()):this.processTask(r,e)},Pu.prototype.process=function(){if(this.taskQueue.length){var t=this.taskQueue.shift(),e=this.tasks[t]
delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),e&&this.processTask(t,e)}},Pu.prototype.processTask=function(t,e){var r=this
if("<response>"===e.type){var i=this.callbacks[t]
delete this.callbacks[t],i&&(e.error?i(Ui(e.error)):i(null,Ui(e.data)))}else{var n=!1,o=A(this.globalScope)?void 0:[],a=e.hasCallback?function(e,i){n=!0,delete r.cancelCallbacks[t],r.target.postMessage({id:t,type:"<response>",sourceMapId:r.mapId,error:e?Oi(e):null,data:Oi(i,o)},o)}:function(t){n=!0},s=null,l=Ui(e.data)
if(this.parent[e.type])s=this.parent[e.type](e.sourceMapId,l,a)
else if(this.parent.getWorkerSource){var u=e.type.split(".")
s=this.parent.getWorkerSource(e.sourceMapId,u[0],l.source)[u[1]](l,a)}else a(new Error("Could not find function "+e.type))
!n&&s&&s.cancel&&(this.cancelCallbacks[t]=s.cancel)}},Pu.prototype.remove=function(){this.invoker.remove(),this.target.removeEventListener("message",this.receive,!1)}
var ku=function(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]))}
ku.prototype.setNorthEast=function(t){return this._ne=t instanceof Mu?new Mu(t.lng,t.lat):Mu.convert(t),this},ku.prototype.setSouthWest=function(t){return this._sw=t instanceof Mu?new Mu(t.lng,t.lat):Mu.convert(t),this},ku.prototype.extend=function(t){var e,r,i=this._sw,n=this._ne
if(t instanceof Mu)e=t,r=t
else{if(!(t instanceof ku))return Array.isArray(t)?4===t.length||t.every(Array.isArray)?this.extend(ku.convert(t)):this.extend(Mu.convert(t)):this
if(r=t._ne,!(e=t._sw)||!r)return this}return i||n?(i.lng=Math.min(e.lng,i.lng),i.lat=Math.min(e.lat,i.lat),n.lng=Math.max(r.lng,n.lng),n.lat=Math.max(r.lat,n.lat)):(this._sw=new Mu(e.lng,e.lat),this._ne=new Mu(r.lng,r.lat)),this},ku.prototype.getCenter=function(){return new Mu((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},ku.prototype.getSouthWest=function(){return this._sw},ku.prototype.getNorthEast=function(){return this._ne},ku.prototype.getNorthWest=function(){return new Mu(this.getWest(),this.getNorth())},ku.prototype.getSouthEast=function(){return new Mu(this.getEast(),this.getSouth())},ku.prototype.getWest=function(){return this._sw.lng},ku.prototype.getSouth=function(){return this._sw.lat},ku.prototype.getEast=function(){return this._ne.lng},ku.prototype.getNorth=function(){return this._ne.lat},ku.prototype.toArray=function(){return[this._sw.toArray(),this._ne.toArray()]},ku.prototype.toString=function(){return"LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},ku.prototype.isEmpty=function(){return!(this._sw&&this._ne)},ku.prototype.contains=function(t){var e=Mu.convert(t),r=e.lng,i=e.lat,n=this._sw.lng<=r&&r<=this._ne.lng
return this._sw.lng>this._ne.lng&&(n=this._sw.lng>=r&&r>=this._ne.lng),this._sw.lat<=i&&i<=this._ne.lat&&n},ku.convert=function(t){return!t||t instanceof ku?t:new ku(t)}
var Mu=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid LngLat object: ("+t+", "+e+")")
if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}
Mu.prototype.wrap=function(){return new Mu(u(this.lng,-180,180),this.lat)},Mu.prototype.toArray=function(){return[this.lng,this.lat]},Mu.prototype.toString=function(){return"LngLat("+this.lng+", "+this.lat+")"},Mu.prototype.distanceTo=function(t){var e=Math.PI/180,r=this.lat*e,i=t.lat*e,n=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos((t.lng-this.lng)*e)
return 6371008.8*Math.acos(Math.min(n,1))},Mu.prototype.toBounds=function(t){void 0===t&&(t=0)
var e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat)
return new ku(new Mu(this.lng-r,this.lat-e),new Mu(this.lng+r,this.lat+e))},Mu.convert=function(t){if(t instanceof Mu)return t
if(Array.isArray(t)&&(2===t.length||3===t.length))return new Mu(Number(t[0]),Number(t[1]))
if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Mu(Number("lng"in t?t.lng:t.lon),Number(t.lat))
throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}
var Du=2*Math.PI*6371008.8
function Lu(t){return Du*Math.cos(t*Math.PI/180)}function Ru(t){return(180+t)/360}function Bu(t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Fu(t,e){return t/Lu(e)}function Ou(t){return 360/Math.PI*Math.atan(Math.exp((180-360*t)*Math.PI/180))-90}var Uu=function(t,e,r){void 0===r&&(r=0),this.x=+t,this.y=+e,this.z=+r}
Uu.fromLngLat=function(t,e){void 0===e&&(e=0)
var r=Mu.convert(t)
return new Uu(Ru(r.lng),Bu(r.lat),Fu(e,r.lat))},Uu.prototype.toLngLat=function(){return new Mu(360*this.x-180,Ou(this.y))},Uu.prototype.toAltitude=function(){return this.z*Lu(Ou(this.y))},Uu.prototype.meterInMercatorCoordinateUnits=function(){return 1/Du*(t=Ou(this.y),1/Math.cos(t*Math.PI/180))
var t}
var Vu=function(t,e,r){this.z=t,this.x=e,this.y=r,this.key=qu(0,t,t,e,r)}
Vu.prototype.equals=function(t){return this.z===t.z&&this.x===t.x&&this.y===t.y},Vu.prototype.url=function(t,e){var r,i,n,o,a,s=(i=this.y,n=this.z,o=Cu(256*(r=this.x),256*(i=Math.pow(2,n)-i-1),n),a=Cu(256*(r+1),256*(i+1),n),o[0]+","+o[1]+","+a[0]+","+a[1]),l=function(t,e,r){for(var i,n="",o=t;o>0;o--)n+=(e&(i=1<<o-1)?1:0)+(r&i?2:0)
return n}(this.z,this.x,this.y)
return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",l).replace("{bbox-epsg-3857}",s)},Vu.prototype.getTilePoint=function(t){var e=Math.pow(2,this.z)
return new n(8192*(t.x*e-this.x),8192*(t.y*e-this.y))},Vu.prototype.toString=function(){return this.z+"/"+this.x+"/"+this.y}
var Nu=function(t,e){this.wrap=t,this.canonical=e,this.key=qu(t,e.z,e.z,e.x,e.y)},ju=function(t,e,r,i,n){this.overscaledZ=t,this.wrap=e,this.canonical=new Vu(r,+i,+n),this.key=qu(e,t,r,i,n)}
function qu(t,e,r,i,n){(t*=2)<0&&(t=-1*t-1)
var o=1<<r
return(o*o*t+o*n+i).toString(36)+r.toString(36)+e.toString(36)}ju.prototype.equals=function(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)},ju.prototype.scaledTo=function(t){var e=this.canonical.z-t
return t>this.canonical.z?new ju(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new ju(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)},ju.prototype.calculateScaledKey=function(t,e){var r=this.canonical.z-t
return t>this.canonical.z?qu(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y):qu(this.wrap*+e,t,t,this.canonical.x>>r,this.canonical.y>>r)},ju.prototype.isChildOf=function(t){if(t.wrap!==this.wrap)return!1
var e=this.canonical.z-t.canonical.z
return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e},ju.prototype.children=function(t){if(this.overscaledZ>=t)return[new ju(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)]
var e=this.canonical.z+1,r=2*this.canonical.x,i=2*this.canonical.y
return[new ju(e,this.wrap,e,r,i),new ju(e,this.wrap,e,r+1,i),new ju(e,this.wrap,e,r,i+1),new ju(e,this.wrap,e,r+1,i+1)]},ju.prototype.isLessThan=function(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))},ju.prototype.wrapped=function(){return new ju(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)},ju.prototype.unwrapTo=function(t){return new ju(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)},ju.prototype.overscaleFactor=function(){return Math.pow(2,this.overscaledZ-this.canonical.z)},ju.prototype.toUnwrapped=function(){return new Nu(this.wrap,this.canonical)},ju.prototype.toString=function(){return this.overscaledZ+"/"+this.canonical.x+"/"+this.canonical.y},ju.prototype.getTilePoint=function(t){return this.canonical.getTilePoint(new Uu(t.x-this.wrap,t.y))},Li("CanonicalTileID",Vu),Li("OverscaledTileID",ju,{omit:["posMatrix"]})
var Zu=function(t,e,r){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square")
if(r&&"mapbox"!==r&&"terrarium"!==r)return b('"'+r+'" is not a valid encoding type. Valid types include "mapbox" and "terrarium".')
this.stride=e.height
var i=this.dim=e.height-2
this.data=new Uint32Array(e.data.buffer),this.encoding=r||"mapbox"
for(var n=0;n<i;n++)this.data[this._idx(-1,n)]=this.data[this._idx(0,n)],this.data[this._idx(i,n)]=this.data[this._idx(i-1,n)],this.data[this._idx(n,-1)]=this.data[this._idx(n,0)],this.data[this._idx(n,i)]=this.data[this._idx(n,i-1)]
this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(i,-1)]=this.data[this._idx(i-1,0)],this.data[this._idx(-1,i)]=this.data[this._idx(0,i-1)],this.data[this._idx(i,i)]=this.data[this._idx(i-1,i-1)]}
Zu.prototype.get=function(t,e){var r=new Uint8Array(this.data.buffer),i=4*this._idx(t,e)
return("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(r[i],r[i+1],r[i+2])},Zu.prototype.getUnpackVector=function(){return"terrarium"===this.encoding?[256,1,1/256,32768]:[6553.6,25.6,.1,1e4]},Zu.prototype._idx=function(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data")
return(e+1)*this.stride+(t+1)},Zu.prototype._unpackMapbox=function(t,e,r){return(256*t*256+256*e+r)/10-1e4},Zu.prototype._unpackTerrarium=function(t,e,r){return 256*t+e+r/256-32768},Zu.prototype.getPixels=function(){return new da({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))},Zu.prototype.backfillBorder=function(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch")
var i=e*this.dim,n=e*this.dim+this.dim,o=r*this.dim,a=r*this.dim+this.dim
switch(e){case-1:i=n-1
break
case 1:n=i+1}switch(r){case-1:o=a-1
break
case 1:a=o+1}for(var s=-e*this.dim,l=-r*this.dim,u=o;u<a;u++)for(var c=i;c<n;c++)this.data[this._idx(c,u)]=t.data[this._idx(c+s,u+l)]},Li("DEMData",Zu)
var Gu=function(t){this._stringToNumber={},this._numberToString=[]
for(var e=0;e<t.length;e++){var r=t[e]
this._stringToNumber[r]=e,this._numberToString[e]=r}}
Gu.prototype.encode=function(t){return this._stringToNumber[t]},Gu.prototype.decode=function(t){return this._numberToString[t]}
var Xu=function(t,e,r,i,n){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=i,this.properties=t.properties,this.id=n},Wu={geometry:{configurable:!0}}
Wu.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},Wu.geometry.set=function(t){this._geometry=t},Xu.prototype.toJSON=function(){var t={geometry:this.geometry}
for(var e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e])
return t},Object.defineProperties(Xu.prototype,Wu)
var Ku=function(){this.state={},this.stateChanges={},this.deletedStates={}}
Ku.prototype.updateState=function(t,e,r){var i=String(e)
if(this.stateChanges[t]=this.stateChanges[t]||{},this.stateChanges[t][i]=this.stateChanges[t][i]||{},c(this.stateChanges[t][i],r),null===this.deletedStates[t])for(var n in this.deletedStates[t]={},this.state[t])n!==i&&(this.deletedStates[t][n]=null)
else if(this.deletedStates[t]&&null===this.deletedStates[t][i])for(var o in this.deletedStates[t][i]={},this.state[t][i])r[o]||(this.deletedStates[t][i][o]=null)
else for(var a in r)this.deletedStates[t]&&this.deletedStates[t][i]&&null===this.deletedStates[t][i][a]&&delete this.deletedStates[t][i][a]},Ku.prototype.removeFeatureState=function(t,e,r){if(null!==this.deletedStates[t]){var i=String(e)
if(this.deletedStates[t]=this.deletedStates[t]||{},r&&void 0!==e)null!==this.deletedStates[t][i]&&(this.deletedStates[t][i]=this.deletedStates[t][i]||{},this.deletedStates[t][i][r]=null)
else if(void 0!==e)if(this.stateChanges[t]&&this.stateChanges[t][i])for(r in this.deletedStates[t][i]={},this.stateChanges[t][i])this.deletedStates[t][i][r]=null
else this.deletedStates[t][i]=null
else this.deletedStates[t]=null}},Ku.prototype.getState=function(t,e){var r=String(e),i=c({},(this.state[t]||{})[r],(this.stateChanges[t]||{})[r])
if(null===this.deletedStates[t])return{}
if(this.deletedStates[t]){var n=this.deletedStates[t][e]
if(null===n)return{}
for(var o in n)delete i[o]}return i},Ku.prototype.initializeTileState=function(t,e){t.setFeatureState(this.state,e)},Ku.prototype.coalesceChanges=function(t,e){var r={}
for(var i in this.stateChanges){this.state[i]=this.state[i]||{}
var n={}
for(var o in this.stateChanges[i])this.state[i][o]||(this.state[i][o]={}),c(this.state[i][o],this.stateChanges[i][o]),n[o]=this.state[i][o]
r[i]=n}for(var a in this.deletedStates){this.state[a]=this.state[a]||{}
var s={}
if(null===this.deletedStates[a])for(var l in this.state[a])s[l]={},this.state[a][l]={}
else for(var u in this.deletedStates[a]){if(null===this.deletedStates[a][u])this.state[a][u]={}
else for(var p=0,h=Object.keys(this.deletedStates[a][u]);p<h.length;p+=1)delete this.state[a][u][h[p]]
s[u]=this.state[a][u]}r[a]=r[a]||{},c(r[a],s)}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(var f in t)t[f].setFeatureState(r,e)}
var Hu=function(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new Pi(8192,16,0),this.grid3D=new Pi(8192,16,0),this.featureIndexArray=new ro,this.promoteId=e}
function Ju(t,e,r,i,n){return g(t,(function(t,o){var a=e instanceof hn?e.get(o):null
return a&&a.evaluate?a.evaluate(r,i,n):a}))}function Yu(t){for(var e=1/0,r=1/0,i=-1/0,n=-1/0,o=0,a=t;o<a.length;o+=1){var s=a[o]
e=Math.min(e,s.x),r=Math.min(r,s.y),i=Math.max(i,s.x),n=Math.max(n,s.y)}return{minX:e,minY:r,maxX:i,maxY:n}}function Qu(t,e){return e-t}Hu.prototype.insert=function(t,e,r,i,n,o){var a=this.featureIndexArray.length
this.featureIndexArray.emplaceBack(r,i,n)
for(var s=o?this.grid3D:this.grid,l=0;l<e.length;l++){for(var u=e[l],c=[1/0,1/0,-1/0,-1/0],p=0;p<u.length;p++){var h=u[p]
c[0]=Math.min(c[0],h.x),c[1]=Math.min(c[1],h.y),c[2]=Math.max(c[2],h.x),c[3]=Math.max(c[3],h.y)}c[0]<8192&&c[1]<8192&&c[2]>=0&&c[3]>=0&&s.insert(a,c[0],c[1],c[2],c[3])}},Hu.prototype.loadVTLayers=function(){return this.vtLayers||(this.vtLayers=new ms.VectorTile(new Zs(this.rawTileData)).layers,this.sourceLayerCoder=new Gu(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers},Hu.prototype.query=function(t,e,r,i){var o=this
this.loadVTLayers()
for(var a=t.params||{},s=8192/t.tileSize/t.scale,l=ri(a.filter),u=t.queryGeometry,c=t.queryPadding*s,p=Yu(u),h=this.grid.query(p.minX-c,p.minY-c,p.maxX+c,p.maxY+c),f=Yu(t.cameraQueryGeometry),d=0,m=this.grid3D.query(f.minX-c,f.minY-c,f.maxX+c,f.maxY+c,(function(e,r,i,o){return function(t,e,r,i,o){for(var a=0,s=t;a<s.length;a+=1){var l=s[a]
if(e<=l.x&&r<=l.y&&i>=l.x&&o>=l.y)return!0}var u=[new n(e,r),new n(e,o),new n(i,o),new n(i,r)]
if(t.length>2)for(var c=0,p=u;c<p.length;c+=1)if(Ko(t,p[c]))return!0
for(var h=0;h<t.length-1;h++)if(Ho(t[h],t[h+1],u))return!0
return!1}(t.cameraQueryGeometry,e-c,r-c,i+c,o+c)}));d<m.length;d+=1)h.push(m[d])
h.sort(Qu)
for(var y,g={},_=function(n){var c=h[n]
if(c!==y){y=c
var p=o.featureIndexArray.get(c),f=null
o.loadMatchingFeature(g,p.bucketIndex,p.sourceLayerIndex,p.featureIndex,l,a.layers,a.availableImages,e,r,i,(function(e,r,i){return f||(f=Bo(e)),r.queryIntersectsFeature(u,e,i,f,o.z,t.transform,s,t.pixelPosMatrix)}))}},v=0;v<h.length;v++)_(v)
return g},Hu.prototype.loadMatchingFeature=function(t,e,r,i,n,o,a,s,l,u,c){var p=this.bucketLayerIDs[e]
if(!o||function(t,e){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return!0
return!1}(o,p)){var h=this.sourceLayerCoder.decode(r),f=this.vtLayers[h].feature(i)
if(n.filter(new nn(this.tileID.overscaledZ),f))for(var d=this.getId(f,h),m=0;m<p.length;m++){var y=p[m]
if(!(o&&o.indexOf(y)<0)){var g=s[y]
if(g){var _={}
void 0!==d&&u&&(_=u.getState(g.sourceLayer||"_geojsonTileLayer",d))
var v=l[y]
v.paint=Ju(v.paint,g.paint,f,_,a),v.layout=Ju(v.layout,g.layout,f,_,a)
var x=!c||c(f,g,_)
if(x){var b=new Xu(f,this.z,this.x,this.y,d)
b.layer=v
var w=t[y]
void 0===w&&(w=t[y]=[]),w.push({featureIndex:i,feature:b,intersectionZ:x})}}}}}},Hu.prototype.lookupSymbolFeatures=function(t,e,r,i,n,o,a,s){var l={}
this.loadVTLayers()
for(var u=ri(n),c=0,p=t;c<p.length;c+=1)this.loadMatchingFeature(l,r,i,p[c],u,o,a,s,e)
return l},Hu.prototype.hasLayer=function(t){for(var e=0,r=this.bucketLayerIDs;e<r.length;e+=1)for(var i=0,n=r[e];i<n.length;i+=1)if(t===n[i])return!0
return!1},Hu.prototype.getId=function(t,e){var r=t.id
return this.promoteId&&"boolean"==typeof(r=t.properties["string"==typeof this.promoteId?this.promoteId:this.promoteId[e]])&&(r=Number(r)),r},Li("FeatureIndex",Hu,{omit:["rawTileData","sourceLayerCoder"]})
var $u=function(t,e){this.tileID=t,this.uid=h(),this.uses=0,this.tileSize=e,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.expiredRequestCount=0,this.state="loading"}
$u.prototype.registerFadeDuration=function(t){var e=t+this.timeAdded
e<B.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e)},$u.prototype.wasRequested=function(){return"errored"===this.state||"loaded"===this.state||"reloading"===this.state},$u.prototype.loadVectorData=function(t,e,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",t){for(var i in t.featureIndex&&(this.latestFeatureIndex=t.featureIndex,t.rawTileData?(this.latestRawTileData=t.rawTileData,this.latestFeatureIndex.rawTileData=t.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=t.collisionBoxArray,this.buckets=function(t,e){var r={}
if(!e)return r
for(var i=function(){var t=o[n],i=t.layerIds.map((function(t){return e.getLayer(t)})).filter(Boolean)
if(0!==i.length){t.layers=i,t.stateDependentLayerIds&&(t.stateDependentLayers=t.stateDependentLayerIds.map((function(t){return i.filter((function(e){return e.id===t}))[0]})))
for(var a=0,s=i;a<s.length;a+=1)r[s[a].id]=t}},n=0,o=t;n<o.length;n+=1)i()
return r}(t.buckets,e.style),this.hasSymbolBuckets=!1,this.buckets){var n=this.buckets[i]
if(n instanceof pu){if(this.hasSymbolBuckets=!0,!r)break
n.justReloaded=!0}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(var o in this.buckets){var a=this.buckets[o]
if(a instanceof pu&&a.hasRTLText){this.hasRTLText=!0,rn.isLoading()||rn.isLoaded()||"deferred"!==tn()||en()
break}}for(var s in this.queryPadding=0,this.buckets){var l=this.buckets[s]
this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(s).queryRadius(l))}t.imageAtlas&&(this.imageAtlas=t.imageAtlas),t.glyphAtlasImage&&(this.glyphAtlasImage=t.glyphAtlasImage)}else this.collisionBoxArray=new Kn},$u.prototype.unloadVectorData=function(){for(var t in this.buckets)this.buckets[t].destroy()
this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded"},$u.prototype.getBucket=function(t){return this.buckets[t.id]},$u.prototype.upload=function(t){for(var e in this.buckets){var r=this.buckets[e]
r.uploadPending()&&r.upload(t)}var i=t.gl
this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new Au(t,this.imageAtlas.image,i.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new Au(t,this.glyphAtlasImage,i.ALPHA),this.glyphAtlasImage=null)},$u.prototype.prepare=function(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture)},$u.prototype.queryRenderedFeatures=function(t,e,r,i,n,o,a,s,l,u){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:i,cameraQueryGeometry:n,scale:o,tileSize:this.tileSize,pixelPosMatrix:u,transform:s,params:a,queryPadding:this.queryPadding*l},t,e,r):{}},$u.prototype.querySourceFeatures=function(t,e){var r=this.latestFeatureIndex
if(r&&r.rawTileData){var i=r.loadVTLayers(),n=e?e.sourceLayer:"",o=i._geojsonTileLayer||i[n]
if(o)for(var a=ri(e&&e.filter),s=this.tileID.canonical,l=s.z,u=s.x,c=s.y,p={z:l,x:u,y:c},h=0;h<o.length;h++){var f=o.feature(h)
if(a.filter(new nn(this.tileID.overscaledZ),f)){var d=r.getId(f,n),m=new Xu(f,l,u,c,d)
m.tile=p,t.push(m)}}}},$u.prototype.hasData=function(){return"loaded"===this.state||"reloading"===this.state||"expired"===this.state},$u.prototype.patternsLoaded=function(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length},$u.prototype.setExpiryData=function(t){var e=this.expirationTime
if(t.cacheControl){var r=I(t.cacheControl)
r["max-age"]&&(this.expirationTime=Date.now()+1e3*r["max-age"])}else t.expires&&(this.expirationTime=new Date(t.expires).getTime())
if(this.expirationTime){var i=Date.now(),n=!1
if(this.expirationTime>i)n=!1
else if(e)if(this.expirationTime<e)n=!0
else{var o=this.expirationTime-e
o?this.expirationTime=i+Math.max(o,3e4):n=!0}else n=!0
n?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0}},$u.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)},$u.prototype.setFeatureState=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData&&0!==Object.keys(t).length){var r=this.latestFeatureIndex.loadVTLayers()
for(var i in this.buckets)if(e.style.hasLayer(i)){var n=this.buckets[i],o=n.layers[0].sourceLayer||"_geojsonTileLayer",a=r[o],s=t[o]
if(a&&s&&0!==Object.keys(s).length){n.update(s,a,this.imageAtlas&&this.imageAtlas.patternPositions||{})
var l=e&&e.style&&e.style.getLayer(i)
l&&l.paint&&(this.queryPadding=Math.max(this.queryPadding,l.queryRadius(n)))}}}},$u.prototype.holdingForFade=function(){return void 0!==this.symbolFadeHoldUntil},$u.prototype.symbolFadeFinished=function(){return!this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<B.now()},$u.prototype.clearFadeHold=function(){this.symbolFadeHoldUntil=void 0},$u.prototype.setHoldDuration=function(t){this.symbolFadeHoldUntil=B.now()+t},$u.prototype.setDependencies=function(t,e){for(var r={},i=0,n=e;i<n.length;i+=1)r[n[i]]=!0
this.dependencies[t]=r},$u.prototype.hasDependency=function(t,e){for(var r=0,i=t;r<i.length;r+=1){var n=this.dependencies[i[r]]
if(n)for(var o=0,a=e;o<a.length;o+=1)if(n[a[o]])return!0}return!1}
var tc=self.performance,ec=function(t){this._marks={start:[t.url,"start"].join("#"),end:[t.url,"end"].join("#"),measure:t.url.toString()},tc.mark(this._marks.start)}
ec.prototype.finish=function(){tc.mark(this._marks.end)
var t=tc.getEntriesByName(this._marks.measure)
return 0===t.length&&(tc.measure(this._marks.measure,this._marks.start,this._marks.end),t=tc.getEntriesByName(this._marks.measure),tc.clearMarks(this._marks.start),tc.clearMarks(this._marks.end),tc.clearMeasures(this._marks.measure)),t},t.Actor=Pu,t.AlphaImage=fa,t.CanonicalTileID=Vu,t.CollisionBoxArray=Kn,t.Color=Yt,t.DEMData=Zu,t.DataConstantProperty=fn,t.DictionaryCoder=Gu,t.EXTENT=8192,t.ErrorEvent=Tt,t.EvaluationParameters=nn,t.Event=St,t.Evented=It,t.FeatureIndex=Hu,t.FillBucket=rs,t.FillExtrusionBucket=vs,t.ImageAtlas=dl,t.ImagePosition=hl,t.LineBucket=Ps,t.LngLat=Mu,t.LngLatBounds=ku,t.MercatorCoordinate=Uu,t.ONE_EM=24,t.OverscaledTileID=ju,t.Point=n,t.Point$1=n,t.Properties=_n,t.Protobuf=Zs,t.RGBAImage=da,t.RequestManager=q,t.RequestPerformance=ec,t.ResourceType=ht,t.SegmentVector=no,t.SourceFeatureState=Ku,t.StructArrayLayout1ui2=Zn,t.StructArrayLayout2f1f2i16=Rn,t.StructArrayLayout2i4=In,t.StructArrayLayout3ui6=Fn,t.StructArrayLayout4i8=En,t.SymbolBucket=pu,t.Texture=Au,t.Tile=$u,t.Transitionable=sn,t.Uniform1f=_o,t.Uniform1i=go,t.Uniform2f=vo,t.Uniform3f=xo,t.Uniform4f=bo,t.UniformColor=wo,t.UniformMatrix4f=To,t.UnwrappedTileID=Nu,t.ValidationError=At,t.WritingMode=ml,t.ZoomHistory=Vi,t.add=function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},t.addDynamicAttributes=su,t.asyncAll=function(t,e,r){if(!t.length)return r(null,[])
var i=t.length,n=new Array(t.length),o=null
t.forEach((function(t,a){e(t,(function(t,e){t&&(o=t),n[a]=e,0==--i&&r(o,n)}))}))},t.bezier=a,t.bindAll=m,t.browser=B,t.cacheEntryPossiblyAdded=function(t){++ct>at&&(t.getActor().send("enforceCacheSizeLimit",ot),ct=0)},t.clamp=l,t.clearTileCache=function(t){var e=self.caches.delete("mapbox-tiles")
t&&e.catch(t).then((function(){return t()}))},t.clipLine=Vl,t.clone=function(t){var e=new ea(16)
return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=v,t.clone$2=function(t){var e=new ea(3)
return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},t.collisionCircleLayout=Us,t.config=F,t.create=function(){var t=new ea(16)
return ea!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$1=function(){var t=new ea(9)
return ea!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t},t.create$2=function(){var t=new ea(4)
return ea!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},t.createCommonjsModule=e,t.createExpression=qr,t.createLayout=Sn,t.createStyleLayer=function(t){return"custom"===t.type?new xu(t):new bu[t.type](t)},t.cross=function(t,e,r){var i=e[0],n=e[1],o=e[2],a=r[0],s=r[1],l=r[2]
return t[0]=n*l-o*s,t[1]=o*a-i*l,t[2]=i*s-n*a,t},t.deepEqual=function t(e,r){if(Array.isArray(e)){if(!Array.isArray(r)||e.length!==r.length)return!1
for(var i=0;i<e.length;i++)if(!t(e[i],r[i]))return!1
return!0}if("object"==typeof e&&null!==e&&null!==r){if("object"!=typeof r)return!1
if(Object.keys(e).length!==Object.keys(r).length)return!1
for(var n in e)if(!t(e[n],r[n]))return!1
return!0}return e===r},t.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},t.dot$1=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},t.ease=s,t.emitValidationErrors=zi,t.endsWith=y,t.enforceCacheSizeLimit=function(t){st(),Q&&Q.then((function(e){e.keys().then((function(r){for(var i=0;i<r.length-t;i++)e.delete(r[i])}))}))},t.evaluateSizeForFeature=kl,t.evaluateSizeForZoom=Ml,t.evaluateVariableOffset=$l,t.evented=$i,t.extend=c,t.featureFilter=ri,t.filterObject=_,t.fromRotation=function(t,e){var r=Math.sin(e),i=Math.cos(e)
return t[0]=i,t[1]=r,t[2]=0,t[3]=-r,t[4]=i,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.getAnchorAlignment=El,t.getAnchorJustification=tu,t.getArrayBuffer=_t,t.getImage=xt,t.getJSON=function(t,e){return gt(c(t,{type:"json"}),e)},t.getRTLTextPluginStatus=tn,t.getReferrer=yt,t.getVideo=function(t,e){var r,i,n=self.document.createElement("video")
n.muted=!0,n.onloadstart=function(){e(null,n)}
for(var o=0;o<t.length;o++){var a=self.document.createElement("source")
r=t[o],i=void 0,(i=self.document.createElement("a")).href=r,(i.protocol!==self.document.location.protocol||i.host!==self.document.location.host)&&(n.crossOrigin="Anonymous"),a.src=t[o],n.appendChild(a)}return{cancel:function(){}}},t.identity=ra,t.invert=function(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],p=e[9],h=e[10],f=e[11],d=e[12],m=e[13],y=e[14],g=e[15],_=r*s-i*a,v=r*l-n*a,x=r*u-o*a,b=i*l-n*s,w=i*u-o*s,S=n*u-o*l,T=c*m-p*d,I=c*y-h*d,E=c*g-f*d,A=p*y-h*m,z=p*g-f*m,P=h*g-f*y,C=_*P-v*z+x*A+b*E-w*I+S*T
return C?(t[0]=(s*P-l*z+u*A)*(C=1/C),t[1]=(n*z-i*P-o*A)*C,t[2]=(m*S-y*w+g*b)*C,t[3]=(h*w-p*S-f*b)*C,t[4]=(l*E-a*P-u*I)*C,t[5]=(r*P-n*E+o*I)*C,t[6]=(y*x-d*S-g*v)*C,t[7]=(c*S-h*x+f*v)*C,t[8]=(a*z-s*E+u*T)*C,t[9]=(i*E-r*z-o*T)*C,t[10]=(d*w-m*x+g*_)*C,t[11]=(p*x-c*w-f*_)*C,t[12]=(s*I-a*A-l*T)*C,t[13]=(r*A-i*I+n*T)*C,t[14]=(m*v-d*b-y*_)*C,t[15]=(c*b-p*v+h*_)*C,t):null},t.isChar=Ni,t.isMapboxURL=Z,t.keysDifference=function(t,e){var r=[]
for(var i in t)i in e||r.push(i)
return r},t.makeRequest=gt,t.mapObject=g,t.mercatorXfromLng=Ru,t.mercatorYfromLat=Bu,t.mercatorZfromAltitude=Fu,t.mul=oa,t.multiply=ia,t.mvt=ms,t.normalize=function(t,e){var r=e[0],i=e[1],n=e[2],o=r*r+i*i+n*n
return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t},t.number=Ne,t.offscreenCanvasSupported=pt,t.ortho=function(t,e,r,i,n,o,a){var s=1/(e-r),l=1/(i-n),u=1/(o-a)
return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+r)*s,t[13]=(n+i)*l,t[14]=(a+o)*u,t[15]=1,t},t.parseGlyphPBF=function(t){return new Zs(t).readFields(ll,[])},t.pbf=Zs,t.performSymbolLayout=function(t,e,r,i,n,o,a){t.createArrays(),t.tilePixelRatio=8192/(512*t.overscaling),t.compareText={},t.iconsNeedLinear=!1
var s=t.layers[0].layout,l=t.layers[0]._unevaluatedLayout._values,u={}
if("composite"===t.textSizeData.kind){var c=t.textSizeData,p=c.maxZoom
u.compositeTextSizes=[l["text-size"].possiblyEvaluate(new nn(c.minZoom),a),l["text-size"].possiblyEvaluate(new nn(p),a)]}if("composite"===t.iconSizeData.kind){var h=t.iconSizeData,f=h.maxZoom
u.compositeIconSizes=[l["icon-size"].possiblyEvaluate(new nn(h.minZoom),a),l["icon-size"].possiblyEvaluate(new nn(f),a)]}u.layoutTextSize=l["text-size"].possiblyEvaluate(new nn(t.zoom+1),a),u.layoutIconSize=l["icon-size"].possiblyEvaluate(new nn(t.zoom+1),a),u.textMaxSize=l["text-size"].possiblyEvaluate(new nn(18))
for(var d=24*s.get("text-line-height"),m="map"===s.get("text-rotation-alignment")&&"point"!==s.get("symbol-placement"),y=s.get("text-keep-upright"),g=s.get("text-size"),_=function(){var o=x[v],l=s.get("text-font").evaluate(o,{},a).join(","),c=g.evaluate(o,{},a),p=u.layoutTextSize.evaluate(o,{},a),h=u.layoutIconSize.evaluate(o,{},a),f={horizontal:{},vertical:void 0},_=o.text,w=[0,0]
if(_){var S=_.toString(),T=24*s.get("text-letter-spacing").evaluate(o,{},a),I=function(t){for(var e=0,r=t;e<r.length;e+=1)if(i=r[e].charCodeAt(0),Ni.Arabic(i)||Ni["Arabic Supplement"](i)||Ni["Arabic Extended-A"](i)||Ni["Arabic Presentation Forms-A"](i)||Ni["Arabic Presentation Forms-B"](i))return!1
var i
return!0}(S)?T:0,E=s.get("text-anchor").evaluate(o,{},a),A=s.get("text-variable-anchor")
if(!A){var z=s.get("text-radial-offset").evaluate(o,{},a)
w=z?$l(E,[24*z,Ql]):s.get("text-offset").evaluate(o,{},a).map((function(t){return 24*t}))}var P=m?"center":s.get("text-justify").evaluate(o,{},a),C=s.get("symbol-placement"),k="point"===C?24*s.get("text-max-width").evaluate(o,{},a):0,M=function(){t.allowVerticalPlacement&&ji(S)&&(f.vertical=_l(_,e,r,n,l,k,d,E,"left",I,w,ml.vertical,!0,C,p,c))}
if(!m&&A){for(var D="auto"===P?A.map((function(t){return tu(t)})):[P],L=!1,R=0;R<D.length;R++){var B=D[R]
if(!f.horizontal[B])if(L)f.horizontal[B]=f.horizontal[0]
else{var F=_l(_,e,r,n,l,k,d,"center",B,I,w,ml.horizontal,!1,C,p,c)
F&&(f.horizontal[B]=F,L=1===F.positionedLines.length)}}M()}else{"auto"===P&&(P=tu(E))
var O=_l(_,e,r,n,l,k,d,E,P,I,w,ml.horizontal,!1,C,p,c)
O&&(f.horizontal[P]=O),M(),ji(S)&&m&&y&&(f.vertical=_l(_,e,r,n,l,k,d,E,P,I,w,ml.vertical,!1,C,p,c))}}var U=void 0,V=!1
if(o.icon&&o.icon.name){var N=i[o.icon.name]
N&&(U=function(t,e,r){var i=El(r),n=e[0]-t.displaySize[0]*i.horizontalAlign,o=e[1]-t.displaySize[1]*i.verticalAlign
return{image:t,top:o,bottom:o+t.displaySize[1],left:n,right:n+t.displaySize[0]}}(n[o.icon.name],s.get("icon-offset").evaluate(o,{},a),s.get("icon-anchor").evaluate(o,{},a)),V=N.sdf,void 0===t.sdfIcons?t.sdfIcons=N.sdf:t.sdfIcons!==N.sdf&&b("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),(N.pixelRatio!==t.pixelRatio||0!==s.get("icon-rotate").constantOr(1))&&(t.iconsNeedLinear=!0))}var j=ru(f.horizontal)||f.vertical
t.iconsInText=!!j&&j.iconsInText,(j||U)&&function(t,e,r,i,n,o,a,s,l,u,c){var p=o.textMaxSize.evaluate(e,{})
void 0===p&&(p=a)
var h,f=t.layers[0].layout,d=f.get("icon-offset").evaluate(e,{},c),m=ru(r.horizontal),y=a/24,g=t.tilePixelRatio*y,_=t.tilePixelRatio*p/24,v=t.tilePixelRatio*s,x=t.tilePixelRatio*f.get("symbol-spacing"),w=f.get("text-padding")*t.tilePixelRatio,S=f.get("icon-padding")*t.tilePixelRatio,T=f.get("text-max-angle")/180*Math.PI,I="map"===f.get("text-rotation-alignment")&&"point"!==f.get("symbol-placement"),E="map"===f.get("icon-rotation-alignment")&&"point"!==f.get("symbol-placement"),A=f.get("symbol-placement"),z=x/2,P=f.get("icon-text-fit")
i&&"none"!==P&&(t.allowVerticalPlacement&&r.vertical&&(h=zl(i,r.vertical,P,f.get("icon-text-fit-padding"),d,y)),m&&(i=zl(i,m,P,f.get("icon-text-fit-padding"),d,y)))
var C=function(s,p){p.x<0||p.x>=8192||p.y<0||p.y>=8192||function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,g,_,v,x,w,S,T,I){var E,A,z,P,C,k=t.addToLineVertexArray(e,r),M=0,D=0,L=0,R=0,B=-1,F=-1,O={},U=uo(""),V=0,N=0
if(void 0===s._unevaluatedLayout.getValue("text-radial-offset")?(V=(E=s.layout.get("text-offset").evaluate(x,{},T).map((function(t){return 24*t})))[0],N=E[1]):(V=24*s.layout.get("text-radial-offset").evaluate(x,{},T),N=Ql),t.allowVerticalPlacement&&i.vertical){var j=s.layout.get("text-rotate").evaluate(x,{},T)+90
P=new Xl(l,e,u,c,p,i.vertical,h,f,d,j),a&&(C=new Xl(l,e,u,c,p,a,y,g,d,j))}if(n){var q=s.layout.get("icon-rotate").evaluate(x,{}),Z="none"!==s.layout.get("icon-text-fit"),G=Nl(n,q,S,Z),X=a?Nl(a,q,S,Z):void 0
z=new Xl(l,e,u,c,p,n,y,g,!1,q),M=4*G.length
var W=t.iconSizeData,K=null
"source"===W.kind?(K=[128*s.layout.get("icon-size").evaluate(x,{})])[0]>32640&&b(t.layerIds[0]+': Value for "icon-size" is >= 255. Reduce your "icon-size".'):"composite"===W.kind&&((K=[128*w.compositeIconSizes[0].evaluate(x,{},T),128*w.compositeIconSizes[1].evaluate(x,{},T)])[0]>32640||K[1]>32640)&&b(t.layerIds[0]+': Value for "icon-size" is >= 255. Reduce your "icon-size".'),t.addSymbols(t.icon,G,K,v,_,x,!1,e,k.lineStartIndex,k.lineLength,-1,T),B=t.icon.placedSymbolArray.length-1,X&&(D=4*X.length,t.addSymbols(t.icon,X,K,v,_,x,ml.vertical,e,k.lineStartIndex,k.lineLength,-1,T),F=t.icon.placedSymbolArray.length-1)}for(var H in i.horizontal){var J=i.horizontal[H]
if(!A){U=uo(J.text)
var Y=s.layout.get("text-rotate").evaluate(x,{},T)
A=new Xl(l,e,u,c,p,J,h,f,d,Y)}var Q=1===J.positionedLines.length
if(L+=eu(t,e,J,o,s,d,x,m,k,i.vertical?ml.horizontal:ml.horizontalOnly,Q?Object.keys(i.horizontal):[H],O,B,w,T),Q)break}i.vertical&&(R+=eu(t,e,i.vertical,o,s,d,x,m,k,ml.vertical,["vertical"],O,F,w,T))
var $=A?A.boxStartIndex:t.collisionBoxArray.length,tt=A?A.boxEndIndex:t.collisionBoxArray.length,et=P?P.boxStartIndex:t.collisionBoxArray.length,rt=P?P.boxEndIndex:t.collisionBoxArray.length,it=z?z.boxStartIndex:t.collisionBoxArray.length,nt=z?z.boxEndIndex:t.collisionBoxArray.length,ot=C?C.boxStartIndex:t.collisionBoxArray.length,at=C?C.boxEndIndex:t.collisionBoxArray.length,st=-1,lt=function(t,e){return t&&t.circleDiameter?Math.max(t.circleDiameter,e):e}
st=lt(A,st),st=lt(P,st),st=lt(z,st)
var ut=(st=lt(C,st))>-1?1:0
ut&&(st*=I/24),t.glyphOffsetArray.length>=pu.MAX_GLYPHS&&b("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),void 0!==x.sortKey&&t.addToSortKeyRanges(t.symbolInstances.length,x.sortKey),t.symbolInstances.emplaceBack(e.x,e.y,O.right>=0?O.right:-1,O.center>=0?O.center:-1,O.left>=0?O.left:-1,O.vertical||-1,B,F,U,$,tt,et,rt,it,nt,ot,at,u,L,R,M,D,ut,0,h,V,N,st)}(t,p,s,r,i,n,h,t.layers[0],t.collisionBoxArray,e.index,e.sourceLayerIndex,t.index,g,w,I,l,v,S,E,d,e,o,u,c,a)}
if("line"===A)for(var k=0,M=Vl(e.geometry,0,0,8192,8192);k<M.length;k+=1)for(var D=M[k],L=0,R=Ul(D,x,T,r.vertical||m,i,24,_,t.overscaling,8192);L<R.length;L+=1){var B=R[L]
m&&iu(t,m.text,z,B)||C(D,B)}else if("line-center"===A)for(var F=0,O=e.geometry;F<O.length;F+=1){var U=O[F]
if(U.length>1){var V=Ol(U,T,r.vertical||m,i,24,_)
V&&C(U,V)}}else if("Polygon"===e.type)for(var N=0,j=Qa(e.geometry,0);N<j.length;N+=1){var q=j[N],Z=Hl(q,16)
C(q[0],new Pl(Z.x,Z.y,0))}else if("LineString"===e.type)for(var G=0,X=e.geometry;G<X.length;G+=1){var W=X[G]
C(W,new Pl(W[0].x,W[0].y,0))}else if("Point"===e.type)for(var K=0,H=e.geometry;K<H.length;K+=1)for(var J=0,Y=H[K];J<Y.length;J+=1){var Q=Y[J]
C([Q],new Pl(Q.x,Q.y,0))}}(t,o,f,U,i,u,p,h,w,V,a)},v=0,x=t.features;v<x.length;v+=1)_()
o&&t.generateCollisionDebugBuffers()},t.perspective=function(t,e,r,i,n){var o,a=1/Math.tan(e/2)
return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=n&&n!==1/0?(t[10]=(n+i)*(o=1/(i-n)),t[14]=2*n*i*o):(t[10]=-1,t[14]=-2*i),t},t.pick=function(t,e){for(var r={},i=0;i<e.length;i++){var n=e[i]
n in t&&(r[n]=t[n])}return r},t.plugin=rn,t.polygonIntersectsPolygon=Uo,t.postMapLoadEvent=nt,t.postTurnstileEvent=rt,t.potpack=pl,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.register=Li,t.registerForPluginStateChange=function(t){return t({pluginStatus:Hi,pluginURL:Ji}),$i.on("pluginStateChange",t),t},t.rotate=function(t,e,r){var i=e[0],n=e[1],o=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r)
return t[0]=i*l+o*s,t[1]=n*l+a*s,t[2]=i*-s+o*l,t[3]=n*-s+a*l,t},t.rotateX=function(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[4],a=e[5],s=e[6],l=e[7],u=e[8],c=e[9],p=e[10],h=e[11]
return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*n+u*i,t[5]=a*n+c*i,t[6]=s*n+p*i,t[7]=l*n+h*i,t[8]=u*n-o*i,t[9]=c*n-a*i,t[10]=p*n-s*i,t[11]=h*n-l*i,t},t.rotateZ=function(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[0],a=e[1],s=e[2],l=e[3],u=e[4],c=e[5],p=e[6],h=e[7]
return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n+u*i,t[1]=a*n+c*i,t[2]=s*n+p*i,t[3]=l*n+h*i,t[4]=u*n-o*i,t[5]=c*n-a*i,t[6]=p*n-s*i,t[7]=h*n-l*i,t},t.scale=function(t,e,r){var i=r[0],n=r[1],o=r[2]
return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.scale$1=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t},t.scale$2=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t},t.setCacheLimits=function(t,e){ot=t,at=e},t.setRTLTextPlugin=function(t,e,r){if(void 0===r&&(r=!1),"deferred"===Hi||"loading"===Hi||"loaded"===Hi)throw new Error("setRTLTextPlugin cannot be called multiple times.")
Ji=B.resolveURL(t),Hi="deferred",Ki=e,Qi(),r||en()},t.sphericalToCartesian=function(t){var e=t[0],r=t[1],i=t[2]
return r+=90,r*=Math.PI/180,i*=Math.PI/180,{x:e*Math.cos(r)*Math.sin(i),y:e*Math.sin(r)*Math.sin(i),z:e*Math.cos(i)}},t.sqrLen=function(t){var e=t[0],r=t[1]
return e*e+r*r},t.styleSpec=Et,t.sub=function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t},t.symbolSize=Dl,t.transformMat3=function(t,e,r){var i=e[0],n=e[1],o=e[2]
return t[0]=i*r[0]+n*r[3]+o*r[6],t[1]=i*r[1]+n*r[4]+o*r[7],t[2]=i*r[2]+n*r[5]+o*r[8],t},t.transformMat4=aa,t.translate=function(t,e,r){var i,n,o,a,s,l,u,c,p,h,f,d,m=r[0],y=r[1],g=r[2]
return e===t?(t[12]=e[0]*m+e[4]*y+e[8]*g+e[12],t[13]=e[1]*m+e[5]*y+e[9]*g+e[13],t[14]=e[2]*m+e[6]*y+e[10]*g+e[14],t[15]=e[3]*m+e[7]*y+e[11]*g+e[15]):(n=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],p=e[8],h=e[9],f=e[10],d=e[11],t[0]=i=e[0],t[1]=n,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t[6]=u,t[7]=c,t[8]=p,t[9]=h,t[10]=f,t[11]=d,t[12]=i*m+s*y+p*g+e[12],t[13]=n*m+l*y+h*g+e[13],t[14]=o*m+u*y+f*g+e[14],t[15]=a*m+c*y+d*g+e[15]),t},t.triggerPluginCompletionEvent=Yi,t.uniqueId=h,t.validateCustomStyleLayer=function(t){var e=[],r=t.id
return void 0===r&&e.push({message:"layers."+r+': missing required property "id"'}),void 0===t.render&&e.push({message:"layers."+r+': missing required method "render"'}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:"layers."+r+': property "renderingMode" must be either "2d" or "3d"'}),e},t.validateLight=Ii,t.validateStyle=Ti,t.values=function(t){var e=[]
for(var r in t)e.push(t[r])
return e},t.vectorTile=ms,t.version="1.10.0",t.warnOnce=b,t.webpSupported=O,t.window=self,t.wrap=u})),i(0,(function(t){function e(t){var r=typeof t
if("number"===r||"boolean"===r||"string"===r||null==t)return JSON.stringify(t)
if(Array.isArray(t)){for(var i="[",n=0,o=t;n<o.length;n+=1)i+=e(o[n])+","
return i+"]"}for(var a=Object.keys(t).sort(),s="{",l=0;l<a.length;l++)s+=JSON.stringify(a[l])+":"+e(t[a[l]])+","
return s+"}"}function r(r){for(var i="",n=0,o=t.refProperties;n<o.length;n+=1)i+="/"+e(r[o[n]])
return i}var i=function(t){this.keyCache={},t&&this.replace(t)}
i.prototype.replace=function(t){this._layerConfigs={},this._layers={},this.update(t,[])},i.prototype.update=function(e,i){for(var n=this,o=0,a=e;o<a.length;o+=1){var s=a[o]
this._layerConfigs[s.id]=s
var l=this._layers[s.id]=t.createStyleLayer(s)
l._featureFilter=t.featureFilter(l.filter),this.keyCache[s.id]&&delete this.keyCache[s.id]}for(var u=0,c=i;u<c.length;u+=1){var p=c[u]
delete this.keyCache[p],delete this._layerConfigs[p],delete this._layers[p]}this.familiesBySource={}
for(var h=0,f=function(t,e){for(var i={},n=0;n<t.length;n++){var o=e&&e[t[n].id]||r(t[n])
e&&(e[t[n].id]=o)
var a=i[o]
a||(a=i[o]=[]),a.push(t[n])}var s=[]
for(var l in i)s.push(i[l])
return s}(t.values(this._layerConfigs),this.keyCache);h<f.length;h+=1){var d=f[h].map((function(t){return n._layers[t.id]})),m=d[0]
if("none"!==m.visibility){var y=m.source||"",g=this.familiesBySource[y]
g||(g=this.familiesBySource[y]={})
var _=m.sourceLayer||"_geojsonTileLayer",v=g[_]
v||(v=g[_]=[]),v.push(d)}}}
var n=function(e){var r={},i=[]
for(var n in e){var o=e[n],a=r[n]={}
for(var s in o){var l=o[+s]
if(l&&0!==l.bitmap.width&&0!==l.bitmap.height){var u={x:0,y:0,w:l.bitmap.width+2,h:l.bitmap.height+2}
i.push(u),a[s]={rect:u,metrics:l.metrics}}}}var c=t.potpack(i),p=new t.AlphaImage({width:c.w||1,height:c.h||1})
for(var h in e){var f=e[h]
for(var d in f){var m=f[+d]
if(m&&0!==m.bitmap.width&&0!==m.bitmap.height){var y=r[h][d].rect
t.AlphaImage.copy(m.bitmap,p,{x:0,y:0},{x:y.x+1,y:y.y+1},m.bitmap)}}}this.image=p,this.positions=r}
t.register("GlyphAtlas",n)
var o=function(e){this.tileID=new t.OverscaledTileID(e.tileID.overscaledZ,e.tileID.wrap,e.tileID.canonical.z,e.tileID.canonical.x,e.tileID.canonical.y),this.uid=e.uid,this.zoom=e.zoom,this.pixelRatio=e.pixelRatio,this.tileSize=e.tileSize,this.source=e.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=e.showCollisionBoxes,this.collectResourceTiming=!!e.collectResourceTiming,this.returnDependencies=!!e.returnDependencies,this.promoteId=e.promoteId}
function a(e,r,i){for(var n=new t.EvaluationParameters(r),o=0,a=e;o<a.length;o+=1)a[o].recalculate(n,i)}function s(e,r){var i=t.getArrayBuffer(e.request,(function(e,i,n,o){e?r(e):i&&r(null,{vectorTile:new t.vectorTile.VectorTile(new t.pbf(i)),rawData:i,cacheControl:n,expires:o})}))
return function(){i.cancel(),r()}}o.prototype.parse=function(e,r,i,o,s){var l=this
this.status="parsing",this.data=e,this.collisionBoxArray=new t.CollisionBoxArray
var u=new t.DictionaryCoder(Object.keys(e.layers).sort()),c=new t.FeatureIndex(this.tileID,this.promoteId)
c.bucketLayerIDs=[]
var p,h,f,d,m={},y={featureIndex:c,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:i},g=r.familiesBySource[this.source]
for(var _ in g){var v=e.layers[_]
if(v){1===v.version&&t.warnOnce('Vector tile source "'+this.source+'" layer "'+_+'" does not use vector tile spec v2 and therefore may have some rendering errors.')
for(var x=u.encode(_),b=[],w=0;w<v.length;w++){var S=v.feature(w),T=c.getId(S,_)
b.push({feature:S,id:T,index:w,sourceLayerIndex:x})}for(var I=0,E=g[_];I<E.length;I+=1){var A=E[I],z=A[0]
z.minzoom&&this.zoom<Math.floor(z.minzoom)||z.maxzoom&&this.zoom>=z.maxzoom||"none"!==z.visibility&&(a(A,this.zoom,i),(m[z.id]=z.createBucket({index:c.bucketLayerIDs.length,layers:A,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:x,sourceID:this.source})).populate(b,y,this.tileID.canonical),c.bucketLayerIDs.push(A.map((function(t){return t.id}))))}}}var P=t.mapObject(y.glyphDependencies,(function(t){return Object.keys(t).map(Number)}))
Object.keys(P).length?o.send("getGlyphs",{uid:this.uid,stacks:P},(function(t,e){p||(p=t,h=e,M.call(l))})):h={}
var C=Object.keys(y.iconDependencies)
C.length?o.send("getImages",{icons:C,source:this.source,tileID:this.tileID,type:"icons"},(function(t,e){p||(p=t,f=e,M.call(l))})):f={}
var k=Object.keys(y.patternDependencies)
function M(){if(p)return s(p)
if(h&&f&&d){var e=new n(h),r=new t.ImageAtlas(f,d)
for(var o in m){var l=m[o]
l instanceof t.SymbolBucket?(a(l.layers,this.zoom,i),t.performSymbolLayout(l,h,e.positions,f,r.iconPositions,this.showCollisionBoxes,this.tileID.canonical)):l.hasPattern&&(l instanceof t.LineBucket||l instanceof t.FillBucket||l instanceof t.FillExtrusionBucket)&&(a(l.layers,this.zoom,i),l.addFeatures(y,this.tileID.canonical,r.patternPositions))}this.status="done",s(null,{buckets:t.values(m).filter((function(t){return!t.isEmpty()})),featureIndex:c,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:e.image,imageAtlas:r,glyphMap:this.returnDependencies?h:null,iconMap:this.returnDependencies?f:null,glyphPositions:this.returnDependencies?e.positions:null})}}k.length?o.send("getImages",{icons:k,source:this.source,tileID:this.tileID,type:"patterns"},(function(t,e){p||(p=t,d=e,M.call(l))})):d={},M.call(this)}
var l=function(t,e,r,i){this.actor=t,this.layerIndex=e,this.availableImages=r,this.loadVectorData=i||s,this.loading={},this.loaded={}}
l.prototype.loadTile=function(e,r){var i=this,n=e.uid
this.loading||(this.loading={})
var a=!!(e&&e.request&&e.request.collectResourceTiming)&&new t.RequestPerformance(e.request),s=this.loading[n]=new o(e)
s.abort=this.loadVectorData(e,(function(e,o){if(delete i.loading[n],e||!o)return s.status="done",i.loaded[n]=s,r(e)
var l=o.rawData,u={}
o.expires&&(u.expires=o.expires),o.cacheControl&&(u.cacheControl=o.cacheControl)
var c={}
if(a){var p=a.finish()
p&&(c.resourceTiming=JSON.parse(JSON.stringify(p)))}s.vectorTile=o.vectorTile,s.parse(o.vectorTile,i.layerIndex,i.availableImages,i.actor,(function(e,i){if(e||!i)return r(e)
r(null,t.extend({rawTileData:l.slice(0)},i,u,c))})),i.loaded=i.loaded||{},i.loaded[n]=s}))},l.prototype.reloadTile=function(t,e){var r=this,i=this.loaded,n=t.uid,o=this
if(i&&i[n]){var a=i[n]
a.showCollisionBoxes=t.showCollisionBoxes
var s=function(t,i){var n=a.reloadCallback
n&&(delete a.reloadCallback,a.parse(a.vectorTile,o.layerIndex,r.availableImages,o.actor,n)),e(t,i)}
"parsing"===a.status?a.reloadCallback=s:"done"===a.status&&(a.vectorTile?a.parse(a.vectorTile,this.layerIndex,this.availableImages,this.actor,s):s())}},l.prototype.abortTile=function(t,e){var r=this.loading,i=t.uid
r&&r[i]&&r[i].abort&&(r[i].abort(),delete r[i]),e()},l.prototype.removeTile=function(t,e){var r=this.loaded,i=t.uid
r&&r[i]&&delete r[i],e()}
var u=t.window.ImageBitmap,c=function(){this.loaded={}}
function p(t,e){if(0!==t.length){h(t[0],e)
for(var r=1;r<t.length;r++)h(t[r],!e)}}function h(t,e){for(var r=0,i=0,n=t.length,o=n-1;i<n;o=i++)r+=(t[i][0]-t[o][0])*(t[o][1]+t[i][1])
r>=0!=!!e&&t.reverse()}c.prototype.loadTile=function(e,r){var i=e.uid,n=e.encoding,o=e.rawImageData,a=u&&o instanceof u?this.getImageData(o):o,s=new t.DEMData(i,a,n)
this.loaded=this.loaded||{},this.loaded[i]=s,r(null,s)},c.prototype.getImageData=function(e){this.offscreenCanvas&&this.offscreenCanvasContext||(this.offscreenCanvas=new OffscreenCanvas(e.width,e.height),this.offscreenCanvasContext=this.offscreenCanvas.getContext("2d")),this.offscreenCanvas.width=e.width,this.offscreenCanvas.height=e.height,this.offscreenCanvasContext.drawImage(e,0,0,e.width,e.height)
var r=this.offscreenCanvasContext.getImageData(-1,-1,e.width+2,e.height+2)
return this.offscreenCanvasContext.clearRect(0,0,this.offscreenCanvas.width,this.offscreenCanvas.height),new t.RGBAImage({width:r.width,height:r.height},r.data)},c.prototype.removeTile=function(t){var e=this.loaded,r=t.uid
e&&e[r]&&delete e[r]}
var f=t.vectorTile.VectorTileFeature.prototype.toGeoJSON,d=function(e){this._feature=e,this.extent=t.EXTENT,this.type=e.type,this.properties=e.tags,"id"in e&&!isNaN(e.id)&&(this.id=parseInt(e.id,10))}
d.prototype.loadGeometry=function(){if(1===this._feature.type){for(var e=[],r=0,i=this._feature.geometry;r<i.length;r+=1){var n=i[r]
e.push([new t.Point$1(n[0],n[1])])}return e}for(var o=[],a=0,s=this._feature.geometry;a<s.length;a+=1){for(var l=[],u=0,c=s[a];u<c.length;u+=1){var p=c[u]
l.push(new t.Point$1(p[0],p[1]))}o.push(l)}return o},d.prototype.toGeoJSON=function(t,e,r){return f.call(this,t,e,r)}
var m=function(e){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=t.EXTENT,this.length=e.length,this._features=e}
m.prototype.feature=function(t){return new d(this._features[t])}
var y=t.vectorTile.VectorTileFeature,g=_
function _(t,e){this.options=e||{},this.features=t,this.length=t.length}function v(t,e){this.id="number"==typeof t.id?t.id:void 0,this.type=t.type,this.rawGeometry=1===t.type?[t.geometry]:t.geometry,this.properties=t.tags,this.extent=e||4096}_.prototype.feature=function(t){return new v(this.features[t],this.options.extent)},v.prototype.loadGeometry=function(){var e=this.rawGeometry
this.geometry=[]
for(var r=0;r<e.length;r++){for(var i=e[r],n=[],o=0;o<i.length;o++)n.push(new t.Point$1(i[o][0],i[o][1]))
this.geometry.push(n)}return this.geometry},v.prototype.bbox=function(){this.geometry||this.loadGeometry()
for(var t=this.geometry,e=1/0,r=-1/0,i=1/0,n=-1/0,o=0;o<t.length;o++)for(var a=t[o],s=0;s<a.length;s++){var l=a[s]
e=Math.min(e,l.x),r=Math.max(r,l.x),i=Math.min(i,l.y),n=Math.max(n,l.y)}return[e,i,r,n]},v.prototype.toGeoJSON=y.prototype.toGeoJSON
var x=w,b=g
function w(e){var r=new t.pbf
return function(t,e){for(var r in t.layers)e.writeMessage(3,S,t.layers[r])}(e,r),r.finish()}function S(t,e){var r
e.writeVarintField(15,t.version||1),e.writeStringField(1,t.name||""),e.writeVarintField(5,t.extent||4096)
var i={keys:[],values:[],keycache:{},valuecache:{}}
for(r=0;r<t.length;r++)i.feature=t.feature(r),e.writeMessage(2,T,i)
var n=i.keys
for(r=0;r<n.length;r++)e.writeStringField(3,n[r])
var o=i.values
for(r=0;r<o.length;r++)e.writeMessage(4,P,o[r])}function T(t,e){var r=t.feature
void 0!==r.id&&e.writeVarintField(1,r.id),e.writeMessage(2,I,t),e.writeVarintField(3,r.type),e.writeMessage(4,z,r)}function I(t,e){var r=t.feature,i=t.keys,n=t.values,o=t.keycache,a=t.valuecache
for(var s in r.properties){var l=o[s]
void 0===l&&(i.push(s),o[s]=l=i.length-1),e.writeVarint(l)
var u=r.properties[s],c=typeof u
"string"!==c&&"boolean"!==c&&"number"!==c&&(u=JSON.stringify(u))
var p=c+":"+u,h=a[p]
void 0===h&&(n.push(u),a[p]=h=n.length-1),e.writeVarint(h)}}function E(t,e){return(e<<3)+(7&t)}function A(t){return t<<1^t>>31}function z(t,e){for(var r=t.loadGeometry(),i=t.type,n=0,o=0,a=r.length,s=0;s<a;s++){var l=r[s],u=1
1===i&&(u=l.length),e.writeVarint(E(1,u))
for(var c=3===i?l.length-1:l.length,p=0;p<c;p++){1===p&&1!==i&&e.writeVarint(E(2,c-1))
var h=l[p].x-n,f=l[p].y-o
e.writeVarint(A(h)),e.writeVarint(A(f)),n+=h,o+=f}3===i&&e.writeVarint(E(7,1))}}function P(t,e){var r=typeof t
"string"===r?e.writeStringField(1,t):"boolean"===r?e.writeBooleanField(7,t):"number"===r&&(t%1!=0?e.writeDoubleField(3,t):t<0?e.writeSVarintField(6,t):e.writeVarintField(5,t))}function C(t,e,r,i){k(t,r,i),k(e,2*r,2*i),k(e,2*r+1,2*i+1)}function k(t,e,r){var i=t[e]
t[e]=t[r],t[r]=i}function M(t,e,r,i){var n=t-r,o=e-i
return n*n+o*o}x.fromVectorTileJs=w,x.fromGeojsonVt=function(t,e){e=e||{}
var r={}
for(var i in t)r[i]=new g(t[i].features,e),r[i].name=i,r[i].version=e.version,r[i].extent=e.extent
return w({layers:r})},x.GeoJSONWrapper=b
var D=function(t){return t[0]},L=function(t){return t[1]},R=function(t,e,r,i,n){void 0===e&&(e=D),void 0===r&&(r=L),void 0===i&&(i=64),void 0===n&&(n=Float64Array),this.nodeSize=i,this.points=t
for(var o=t.length<65536?Uint16Array:Uint32Array,a=this.ids=new o(t.length),s=this.coords=new n(2*t.length),l=0;l<t.length;l++)a[l]=l,s[2*l]=e(t[l]),s[2*l+1]=r(t[l])
!function t(e,r,i,n,o,a){if(!(o-n<=i)){var s=n+o>>1
!function t(e,r,i,n,o,a){for(;o>n;){if(o-n>600){var s=o-n+1,l=i-n+1,u=Math.log(s),c=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*c*(s-c)/s)*(l-s/2<0?-1:1)
t(e,r,i,Math.max(n,Math.floor(i-l*c/s+p)),Math.min(o,Math.floor(i+(s-l)*c/s+p)),a)}var h=r[2*i+a],f=n,d=o
for(C(e,r,n,i),r[2*o+a]>h&&C(e,r,n,o);f<d;){for(C(e,r,f,d),f++,d--;r[2*f+a]<h;)f++
for(;r[2*d+a]>h;)d--}r[2*n+a]===h?C(e,r,n,d):C(e,r,++d,o),d<=i&&(n=d+1),i<=d&&(o=d-1)}}(e,r,s,n,o,a%2),t(e,r,i,n,s-1,a+1),t(e,r,i,s+1,o,a+1)}}(a,s,i,0,a.length-1,0)}
R.prototype.range=function(t,e,r,i){return function(t,e,r,i,n,o,a){for(var s,l,u=[0,t.length-1,0],c=[];u.length;){var p=u.pop(),h=u.pop(),f=u.pop()
if(h-f<=a)for(var d=f;d<=h;d++)l=e[2*d+1],(s=e[2*d])>=r&&s<=n&&l>=i&&l<=o&&c.push(t[d])
else{var m=Math.floor((f+h)/2)
l=e[2*m+1],(s=e[2*m])>=r&&s<=n&&l>=i&&l<=o&&c.push(t[m])
var y=(p+1)%2;(0===p?r<=s:i<=l)&&(u.push(f),u.push(m-1),u.push(y)),(0===p?n>=s:o>=l)&&(u.push(m+1),u.push(h),u.push(y))}}return c}(this.ids,this.coords,t,e,r,i,this.nodeSize)},R.prototype.within=function(t,e,r){return function(t,e,r,i,n,o){for(var a=[0,t.length-1,0],s=[],l=n*n;a.length;){var u=a.pop(),c=a.pop(),p=a.pop()
if(c-p<=o)for(var h=p;h<=c;h++)M(e[2*h],e[2*h+1],r,i)<=l&&s.push(t[h])
else{var f=Math.floor((p+c)/2),d=e[2*f],m=e[2*f+1]
M(d,m,r,i)<=l&&s.push(t[f])
var y=(u+1)%2;(0===u?r-n<=d:i-n<=m)&&(a.push(p),a.push(f-1),a.push(y)),(0===u?r+n>=d:i+n>=m)&&(a.push(f+1),a.push(c),a.push(y))}}return s}(this.ids,this.coords,t,e,r,this.nodeSize)}
var B={minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(t){return t}},F=function(t){this.options=Z(Object.create(B),t),this.trees=new Array(this.options.maxZoom+1)}
function O(t,e,r,i,n){return{x:t,y:e,zoom:1/0,id:r,parentId:-1,numPoints:i,properties:n}}function U(t,e){var r=t.geometry.coordinates,i=r[1]
return{x:j(r[0]),y:q(i),zoom:1/0,index:e,parentId:-1}}function V(t){return{type:"Feature",id:t.id,properties:N(t),geometry:{type:"Point",coordinates:[(i=t.x,360*(i-.5)),(e=t.y,r=(180-360*e)*Math.PI/180,360*Math.atan(Math.exp(r))/Math.PI-90)]}}
var e,r,i}function N(t){var e=t.numPoints,r=e>=1e4?Math.round(e/1e3)+"k":e>=1e3?Math.round(e/100)/10+"k":e
return Z(Z({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:r})}function j(t){return t/360+.5}function q(t){var e=Math.sin(t*Math.PI/180),r=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return r<0?0:r>1?1:r}function Z(t,e){for(var r in e)t[r]=e[r]
return t}function G(t){return t.x}function X(t){return t.y}function W(t,e,r,i,n,o){var a=n-r,s=o-i
if(0!==a||0!==s){var l=((t-r)*a+(e-i)*s)/(a*a+s*s)
l>1?(r=n,i=o):l>0&&(r+=a*l,i+=s*l)}return(a=t-r)*a+(s=e-i)*s}function K(t,e,r,i){var n={id:void 0===t?null:t,type:e,geometry:r,tags:i,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}
return function(t){var e=t.geometry,r=t.type
if("Point"===r||"MultiPoint"===r||"LineString"===r)H(t,e)
else if("Polygon"===r||"MultiLineString"===r)for(var i=0;i<e.length;i++)H(t,e[i])
else if("MultiPolygon"===r)for(i=0;i<e.length;i++)for(var n=0;n<e[i].length;n++)H(t,e[i][n])}(n),n}function H(t,e){for(var r=0;r<e.length;r+=3)t.minX=Math.min(t.minX,e[r]),t.minY=Math.min(t.minY,e[r+1]),t.maxX=Math.max(t.maxX,e[r]),t.maxY=Math.max(t.maxY,e[r+1])}function J(t,e,r,i){if(e.geometry){var n=e.geometry.coordinates,o=e.geometry.type,a=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),s=[],l=e.id
if(r.promoteId?l=e.properties[r.promoteId]:r.generateId&&(l=i||0),"Point"===o)Y(n,s)
else if("MultiPoint"===o)for(var u=0;u<n.length;u++)Y(n[u],s)
else if("LineString"===o)Q(n,s,a,!1)
else if("MultiLineString"===o){if(r.lineMetrics){for(u=0;u<n.length;u++)Q(n[u],s=[],a,!1),t.push(K(l,"LineString",s,e.properties))
return}$(n,s,a,!1)}else if("Polygon"===o)$(n,s,a,!0)
else{if("MultiPolygon"!==o){if("GeometryCollection"===o){for(u=0;u<e.geometry.geometries.length;u++)J(t,{id:l,geometry:e.geometry.geometries[u],properties:e.properties},r,i)
return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<n.length;u++){var c=[]
$(n[u],c,a,!0),s.push(c)}}t.push(K(l,o,s,e.properties))}}function Y(t,e){e.push(tt(t[0])),e.push(et(t[1])),e.push(0)}function Q(t,e,r,i){for(var n,o,a=0,s=0;s<t.length;s++){var l=tt(t[s][0]),u=et(t[s][1])
e.push(l),e.push(u),e.push(0),s>0&&(a+=i?(n*u-l*o)/2:Math.sqrt(Math.pow(l-n,2)+Math.pow(u-o,2))),n=l,o=u}var c=e.length-3
e[2]=1,function t(e,r,i,n){for(var o,a=n,s=i-r>>1,l=i-r,u=e[r],c=e[r+1],p=e[i],h=e[i+1],f=r+3;f<i;f+=3){var d=W(e[f],e[f+1],u,c,p,h)
if(d>a)o=f,a=d
else if(d===a){var m=Math.abs(f-s)
m<l&&(o=f,l=m)}}a>n&&(o-r>3&&t(e,r,o,n),e[o+2]=a,i-o>3&&t(e,o,i,n))}(e,0,c,r),e[c+2]=1,e.size=Math.abs(a),e.start=0,e.end=e.size}function $(t,e,r,i){for(var n=0;n<t.length;n++){var o=[]
Q(t[n],o,r,i),e.push(o)}}function tt(t){return t/360+.5}function et(t){var e=Math.sin(t*Math.PI/180),r=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return r<0?0:r>1?1:r}function rt(t,e,r,i,n,o,a,s){if(i/=e,o>=(r/=e)&&a<i)return t
if(a<r||o>=i)return null
for(var l=[],u=0;u<t.length;u++){var c=t[u],p=c.geometry,h=c.type,f=0===n?c.minX:c.minY,d=0===n?c.maxX:c.maxY
if(f>=r&&d<i)l.push(c)
else if(!(d<r||f>=i)){var m=[]
if("Point"===h||"MultiPoint"===h)it(p,m,r,i,n)
else if("LineString"===h)nt(p,m,r,i,n,!1,s.lineMetrics)
else if("MultiLineString"===h)at(p,m,r,i,n,!1)
else if("Polygon"===h)at(p,m,r,i,n,!0)
else if("MultiPolygon"===h)for(var y=0;y<p.length;y++){var g=[]
at(p[y],g,r,i,n,!0),g.length&&m.push(g)}if(m.length){if(s.lineMetrics&&"LineString"===h){for(y=0;y<m.length;y++)l.push(K(c.id,h,m[y],c.tags))
continue}"LineString"!==h&&"MultiLineString"!==h||(1===m.length?(h="LineString",m=m[0]):h="MultiLineString"),"Point"!==h&&"MultiPoint"!==h||(h=3===m.length?"Point":"MultiPoint"),l.push(K(c.id,h,m,c.tags))}}}return l.length?l:null}function it(t,e,r,i,n){for(var o=0;o<t.length;o+=3){var a=t[o+n]
a>=r&&a<=i&&(e.push(t[o]),e.push(t[o+1]),e.push(t[o+2]))}}function nt(t,e,r,i,n,o,a){for(var s,l,u=ot(t),c=0===n?lt:ut,p=t.start,h=0;h<t.length-3;h+=3){var f=t[h],d=t[h+1],m=t[h+2],y=t[h+3],g=t[h+4],_=0===n?f:d,v=0===n?y:g,x=!1
a&&(s=Math.sqrt(Math.pow(f-y,2)+Math.pow(d-g,2))),_<r?v>r&&(l=c(u,f,d,y,g,r),a&&(u.start=p+s*l)):_>i?v<i&&(l=c(u,f,d,y,g,i),a&&(u.start=p+s*l)):st(u,f,d,m),v<r&&_>=r&&(l=c(u,f,d,y,g,r),x=!0),v>i&&_<=i&&(l=c(u,f,d,y,g,i),x=!0),!o&&x&&(a&&(u.end=p+s*l),e.push(u),u=ot(t)),a&&(p+=s)}var b=t.length-3
f=t[b],d=t[b+1],m=t[b+2],(_=0===n?f:d)>=r&&_<=i&&st(u,f,d,m),b=u.length-3,o&&b>=3&&(u[b]!==u[0]||u[b+1]!==u[1])&&st(u,u[0],u[1],u[2]),u.length&&e.push(u)}function ot(t){var e=[]
return e.size=t.size,e.start=t.start,e.end=t.end,e}function at(t,e,r,i,n,o){for(var a=0;a<t.length;a++)nt(t[a],e,r,i,n,o,!1)}function st(t,e,r,i){t.push(e),t.push(r),t.push(i)}function lt(t,e,r,i,n,o){var a=(o-e)/(i-e)
return t.push(o),t.push(r+(n-r)*a),t.push(1),a}function ut(t,e,r,i,n,o){var a=(o-r)/(n-r)
return t.push(e+(i-e)*a),t.push(o),t.push(1),a}function ct(t,e){for(var r=[],i=0;i<t.length;i++){var n,o=t[i],a=o.type
if("Point"===a||"MultiPoint"===a||"LineString"===a)n=pt(o.geometry,e)
else if("MultiLineString"===a||"Polygon"===a){n=[]
for(var s=0;s<o.geometry.length;s++)n.push(pt(o.geometry[s],e))}else if("MultiPolygon"===a)for(n=[],s=0;s<o.geometry.length;s++){for(var l=[],u=0;u<o.geometry[s].length;u++)l.push(pt(o.geometry[s][u],e))
n.push(l)}r.push(K(o.id,a,n,o.tags))}return r}function pt(t,e){var r=[]
r.size=t.size,void 0!==t.start&&(r.start=t.start,r.end=t.end)
for(var i=0;i<t.length;i+=3)r.push(t[i]+e,t[i+1],t[i+2])
return r}function ht(t,e){if(t.transformed)return t
var r,i,n,o=1<<t.z,a=t.x,s=t.y
for(r=0;r<t.features.length;r++){var l=t.features[r],u=l.geometry,c=l.type
if(l.geometry=[],1===c)for(i=0;i<u.length;i+=2)l.geometry.push(ft(u[i],u[i+1],e,o,a,s))
else for(i=0;i<u.length;i++){var p=[]
for(n=0;n<u[i].length;n+=2)p.push(ft(u[i][n],u[i][n+1],e,o,a,s))
l.geometry.push(p)}}return t.transformed=!0,t}function ft(t,e,r,i,n,o){return[Math.round(r*(t*i-n)),Math.round(r*(e*i-o))]}function dt(t,e,r,i,n){for(var o=e===n.maxZoom?0:n.tolerance/((1<<e)*n.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:i,z:e,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<t.length;s++){a.numFeatures++,mt(a,t[s],o,n)
var l=t[s].minX,u=t[s].minY,c=t[s].maxX,p=t[s].maxY
l<a.minX&&(a.minX=l),u<a.minY&&(a.minY=u),c>a.maxX&&(a.maxX=c),p>a.maxY&&(a.maxY=p)}return a}function mt(t,e,r,i){var n=e.geometry,o=e.type,a=[]
if("Point"===o||"MultiPoint"===o)for(var s=0;s<n.length;s+=3)a.push(n[s]),a.push(n[s+1]),t.numPoints++,t.numSimplified++
else if("LineString"===o)yt(a,n,t,r,!1,!1)
else if("MultiLineString"===o||"Polygon"===o)for(s=0;s<n.length;s++)yt(a,n[s],t,r,"Polygon"===o,0===s)
else if("MultiPolygon"===o)for(var l=0;l<n.length;l++){var u=n[l]
for(s=0;s<u.length;s++)yt(a,u[s],t,r,!0,0===s)}if(a.length){var c=e.tags||null
if("LineString"===o&&i.lineMetrics){for(var p in c={},e.tags)c[p]=e.tags[p]
c.mapbox_clip_start=n.start/n.size,c.mapbox_clip_end=n.end/n.size}var h={geometry:a,type:"Polygon"===o||"MultiPolygon"===o?3:"LineString"===o||"MultiLineString"===o?2:1,tags:c}
null!==e.id&&(h.id=e.id),t.features.push(h)}}function yt(t,e,r,i,n,o){var a=i*i
if(i>0&&e.size<(n?a:i))r.numPoints+=e.length/3
else{for(var s=[],l=0;l<e.length;l+=3)(0===i||e[l+2]>a)&&(r.numSimplified++,s.push(e[l]),s.push(e[l+1])),r.numPoints++
n&&function(t,e){for(var r=0,i=0,n=t.length,o=n-2;i<n;o=i,i+=2)r+=(t[i]-t[o])*(t[i+1]+t[o+1])
if(r>0===e)for(i=0,n=t.length;i<n/2;i+=2){var a=t[i],s=t[i+1]
t[i]=t[n-2-i],t[i+1]=t[n-1-i],t[n-2-i]=a,t[n-1-i]=s}}(s,o),t.push(s)}}function gt(t,e){var r=(e=this.options=function(t,e){for(var r in e)t[r]=e[r]
return t}(Object.create(this.options),e)).debug
if(r&&console.time("preprocess data"),e.maxZoom<0||e.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range")
if(e.promoteId&&e.generateId)throw new Error("promoteId and generateId cannot be used together.")
var i=function(t,e){var r=[]
if("FeatureCollection"===t.type)for(var i=0;i<t.features.length;i++)J(r,t.features[i],e,i)
else J(r,"Feature"===t.type?t:{geometry:t},e)
return r}(t,e)
this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",e.indexMaxZoom,e.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(i=function(t,e){var r=e.buffer/e.extent,i=t,n=rt(t,1,-1-r,r,0,-1,2,e),o=rt(t,1,1-r,2+r,0,-1,2,e)
return(n||o)&&(i=rt(t,1,-r,1+r,0,-1,2,e)||[],n&&(i=ct(n,1).concat(i)),o&&(i=i.concat(ct(o,-1)))),i}(i,e)).length&&this.splitTile(i,0,0,0),r&&(i.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function _t(t,e,r){return 32*((1<<t)*r+e)+t}function vt(t,e){var r=t.tileID.canonical
if(!this._geoJSONIndex)return e(null,null)
var i=this._geoJSONIndex.getTile(r.z,r.x,r.y)
if(!i)return e(null,null)
var n=new m(i.features),o=x(n)
0===o.byteOffset&&o.byteLength===o.buffer.byteLength||(o=new Uint8Array(o)),e(null,{vectorTile:n,rawData:o.buffer})}F.prototype.load=function(t){var e=this.options,r=e.log,i=e.minZoom,n=e.maxZoom,o=e.nodeSize
r&&console.time("total time")
var a="prepare "+t.length+" points"
r&&console.time(a),this.points=t
for(var s=[],l=0;l<t.length;l++)t[l].geometry&&s.push(U(t[l],l))
this.trees[n+1]=new R(s,G,X,o,Float32Array),r&&console.timeEnd(a)
for(var u=n;u>=i;u--){var c=+Date.now()
s=this._cluster(s,u),this.trees[u]=new R(s,G,X,o,Float32Array),r&&console.log("z%d: %d clusters in %dms",u,s.length,+Date.now()-c)}return r&&console.timeEnd("total time"),this},F.prototype.getClusters=function(t,e){var r=((t[0]+180)%360+360)%360-180,i=Math.max(-90,Math.min(90,t[1])),n=180===t[2]?180:((t[2]+180)%360+360)%360-180,o=Math.max(-90,Math.min(90,t[3]))
if(t[2]-t[0]>=360)r=-180,n=180
else if(r>n){var a=this.getClusters([r,i,180,o],e),s=this.getClusters([-180,i,n,o],e)
return a.concat(s)}for(var l=this.trees[this._limitZoom(e)],u=[],c=0,p=l.range(j(r),q(o),j(n),q(i));c<p.length;c+=1){var h=l.points[p[c]]
u.push(h.numPoints?V(h):this.points[h.index])}return u},F.prototype.getChildren=function(t){var e=this._getOriginId(t),r=this._getOriginZoom(t),i="No cluster with the specified id.",n=this.trees[r]
if(!n)throw new Error(i)
var o=n.points[e]
if(!o)throw new Error(i)
for(var a=this.options.radius/(this.options.extent*Math.pow(2,r-1)),s=[],l=0,u=n.within(o.x,o.y,a);l<u.length;l+=1){var c=n.points[u[l]]
c.parentId===t&&s.push(c.numPoints?V(c):this.points[c.index])}if(0===s.length)throw new Error(i)
return s},F.prototype.getLeaves=function(t,e,r){var i=[]
return this._appendLeaves(i,t,e=e||10,r=r||0,0),i},F.prototype.getTile=function(t,e,r){var i=this.trees[this._limitZoom(t)],n=Math.pow(2,t),o=this.options,a=o.radius/o.extent,s=(r-a)/n,l=(r+1+a)/n,u={features:[]}
return this._addTileFeatures(i.range((e-a)/n,s,(e+1+a)/n,l),i.points,e,r,n,u),0===e&&this._addTileFeatures(i.range(1-a/n,s,1,l),i.points,n,r,n,u),e===n-1&&this._addTileFeatures(i.range(0,s,a/n,l),i.points,-1,r,n,u),u.features.length?u:null},F.prototype.getClusterExpansionZoom=function(t){for(var e=this._getOriginZoom(t)-1;e<=this.options.maxZoom;){var r=this.getChildren(t)
if(e++,1!==r.length)break
t=r[0].properties.cluster_id}return e},F.prototype._appendLeaves=function(t,e,r,i,n){for(var o=0,a=this.getChildren(e);o<a.length;o+=1){var s=a[o],l=s.properties
if(l&&l.cluster?n+l.point_count<=i?n+=l.point_count:n=this._appendLeaves(t,l.cluster_id,r,i,n):n<i?n++:t.push(s),t.length===r)break}return n},F.prototype._addTileFeatures=function(t,e,r,i,n,o){for(var a=0,s=t;a<s.length;a+=1){var l=e[s[a]],u=l.numPoints,c={type:1,geometry:[[Math.round(this.options.extent*(l.x*n-r)),Math.round(this.options.extent*(l.y*n-i))]],tags:u?N(l):this.points[l.index].properties},p=void 0
u?p=l.id:this.options.generateId?p=l.index:this.points[l.index].id&&(p=this.points[l.index].id),void 0!==p&&(c.id=p),o.features.push(c)}},F.prototype._limitZoom=function(t){return Math.max(this.options.minZoom,Math.min(t,this.options.maxZoom+1))},F.prototype._cluster=function(t,e){for(var r=[],i=this.options,n=i.reduce,o=i.radius/(i.extent*Math.pow(2,e)),a=0;a<t.length;a++){var s=t[a]
if(!(s.zoom<=e)){s.zoom=e
for(var l=this.trees[e+1],u=l.within(s.x,s.y,o),c=s.numPoints||1,p=s.x*c,h=s.y*c,f=n&&c>1?this._map(s,!0):null,d=(a<<5)+(e+1)+this.points.length,m=0,y=u;m<y.length;m+=1){var g=l.points[y[m]]
if(!(g.zoom<=e)){g.zoom=e
var _=g.numPoints||1
p+=g.x*_,h+=g.y*_,c+=_,g.parentId=d,n&&(f||(f=this._map(s,!0)),n(f,this._map(g)))}}1===c?r.push(s):(s.parentId=d,r.push(O(p/c,h/c,d,c,f)))}}return r},F.prototype._getOriginId=function(t){return t-this.points.length>>5},F.prototype._getOriginZoom=function(t){return(t-this.points.length)%32},F.prototype._map=function(t,e){if(t.numPoints)return e?Z({},t.properties):t.properties
var r=this.points[t.index].properties,i=this.options.map(r)
return e&&i===r?Z({},i):i},gt.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},gt.prototype.splitTile=function(t,e,r,i,n,o,a){for(var s=[t,e,r,i],l=this.options,u=l.debug;s.length;){i=s.pop(),r=s.pop(),e=s.pop(),t=s.pop()
var c=1<<e,p=_t(e,r,i),h=this.tiles[p]
if(!h&&(u>1&&console.time("creation"),h=this.tiles[p]=dt(t,e,r,i,l),this.tileCoords.push({z:e,x:r,y:i}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",e,r,i,h.numFeatures,h.numPoints,h.numSimplified),console.timeEnd("creation"))
var f="z"+e
this.stats[f]=(this.stats[f]||0)+1,this.total++}if(h.source=t,n){if(e===l.maxZoom||e===n)continue
var d=1<<n-e
if(r!==Math.floor(o/d)||i!==Math.floor(a/d))continue}else if(e===l.indexMaxZoom||h.numPoints<=l.indexMaxPoints)continue
if(h.source=null,0!==t.length){u>1&&console.time("clipping")
var m,y,g,_,v,x,b=.5*l.buffer/l.extent,w=.5-b,S=.5+b,T=1+b
m=y=g=_=null,v=rt(t,c,r-b,r+S,0,h.minX,h.maxX,l),x=rt(t,c,r+w,r+T,0,h.minX,h.maxX,l),t=null,v&&(m=rt(v,c,i-b,i+S,1,h.minY,h.maxY,l),y=rt(v,c,i+w,i+T,1,h.minY,h.maxY,l),v=null),x&&(g=rt(x,c,i-b,i+S,1,h.minY,h.maxY,l),_=rt(x,c,i+w,i+T,1,h.minY,h.maxY,l),x=null),u>1&&console.timeEnd("clipping"),s.push(m||[],e+1,2*r,2*i),s.push(y||[],e+1,2*r,2*i+1),s.push(g||[],e+1,2*r+1,2*i),s.push(_||[],e+1,2*r+1,2*i+1)}}},gt.prototype.getTile=function(t,e,r){var i=this.options,n=i.extent,o=i.debug
if(t<0||t>24)return null
var a=1<<t,s=_t(t,e=(e%a+a)%a,r)
if(this.tiles[s])return ht(this.tiles[s],n)
o>1&&console.log("drilling down to z%d-%d-%d",t,e,r)
for(var l,u=t,c=e,p=r;!l&&u>0;)u--,c=Math.floor(c/2),p=Math.floor(p/2),l=this.tiles[_t(u,c,p)]
return l&&l.source?(o>1&&console.log("found parent tile z%d-%d-%d",u,c,p),o>1&&console.time("drilling down"),this.splitTile(l.source,u,c,p,t,e,r),o>1&&console.timeEnd("drilling down"),this.tiles[s]?ht(this.tiles[s],n):null):null}
var xt=function(e){function r(t,r,i,n){e.call(this,t,r,i,vt),n&&(this.loadGeoJSON=n)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.loadData=function(t,e){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),this._pendingCallback=e,this._pendingLoadDataParams=t,this._state&&"Idle"!==this._state?this._state="NeedsLoadData":(this._state="Coalescing",this._loadData())},r.prototype._loadData=function(){var e=this
if(this._pendingCallback&&this._pendingLoadDataParams){var r=this._pendingCallback,i=this._pendingLoadDataParams
delete this._pendingCallback,delete this._pendingLoadDataParams
var n=!!(i&&i.request&&i.request.collectResourceTiming)&&new t.RequestPerformance(i.request)
this.loadGeoJSON(i,(function(o,a){if(o||!a)return r(o)
if("object"!=typeof a)return r(new Error("Input data given to '"+i.source+"' is not a valid GeoJSON object."))
!function t(e,r){var i,n=e&&e.type
if("FeatureCollection"===n)for(i=0;i<e.features.length;i++)t(e.features[i],r)
else if("GeometryCollection"===n)for(i=0;i<e.geometries.length;i++)t(e.geometries[i],r)
else if("Feature"===n)t(e.geometry,r)
else if("Polygon"===n)p(e.coordinates,r)
else if("MultiPolygon"===n)for(i=0;i<e.coordinates.length;i++)p(e.coordinates[i],r)
return e}(a,!0)
try{e._geoJSONIndex=i.cluster?new F(function(e){var r=e.superclusterOptions,i=e.clusterProperties
if(!i||!r)return r
for(var n={},o={},a={accumulated:null,zoom:0},s={properties:null},l=Object.keys(i),u=0,c=l;u<c.length;u+=1){var p=c[u],h=i[p],f=h[0],d=t.createExpression(h[1]),m=t.createExpression("string"==typeof f?[f,["accumulated"],["get",p]]:f)
n[p]=d.value,o[p]=m.value}return r.map=function(t){s.properties=t
for(var e={},r=0,i=l;r<i.length;r+=1){var o=i[r]
e[o]=n[o].evaluate(a,s)}return e},r.reduce=function(t,e){s.properties=e
for(var r=0,i=l;r<i.length;r+=1){var n=i[r]
a.accumulated=t[n],t[n]=o[n].evaluate(a,s)}},r}(i)).load(a.features):function(t,e){return new gt(t,e)}(a,i.geojsonVtOptions)}catch(o){return r(o)}e.loaded={}
var s={}
if(n){var l=n.finish()
l&&(s.resourceTiming={},s.resourceTiming[i.source]=JSON.parse(JSON.stringify(l)))}r(null,s)}))}},r.prototype.coalesce=function(){"Coalescing"===this._state?this._state="Idle":"NeedsLoadData"===this._state&&(this._state="Coalescing",this._loadData())},r.prototype.reloadTile=function(t,r){var i=this.loaded
return i&&i[t.uid]?e.prototype.reloadTile.call(this,t,r):this.loadTile(t,r)},r.prototype.loadGeoJSON=function(e,r){if(e.request)t.getJSON(e.request,r)
else{if("string"!=typeof e.data)return r(new Error("Input data given to '"+e.source+"' is not a valid GeoJSON object."))
try{return r(null,JSON.parse(e.data))}catch(t){return r(new Error("Input data given to '"+e.source+"' is not a valid GeoJSON object."))}}},r.prototype.removeSource=function(t,e){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),e()},r.prototype.getClusterExpansionZoom=function(t,e){try{e(null,this._geoJSONIndex.getClusterExpansionZoom(t.clusterId))}catch(t){e(t)}},r.prototype.getClusterChildren=function(t,e){try{e(null,this._geoJSONIndex.getChildren(t.clusterId))}catch(t){e(t)}},r.prototype.getClusterLeaves=function(t,e){try{e(null,this._geoJSONIndex.getLeaves(t.clusterId,t.limit,t.offset))}catch(t){e(t)}},r}(l),bt=function(e){var r=this
this.self=e,this.actor=new t.Actor(e,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:l,geojson:xt},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=function(t,e){if(r.workerSourceTypes[t])throw new Error('Worker source with name "'+t+'" already registered.')
r.workerSourceTypes[t]=e},this.self.registerRTLTextPlugin=function(e){if(t.plugin.isParsed())throw new Error("RTL text plugin already registered.")
t.plugin.applyArabicShaping=e.applyArabicShaping,t.plugin.processBidirectionalText=e.processBidirectionalText,t.plugin.processStyledBidirectionalText=e.processStyledBidirectionalText}}
return bt.prototype.setReferrer=function(t,e){this.referrer=e},bt.prototype.setImages=function(t,e,r){this.availableImages[t]=e,r()},bt.prototype.setLayers=function(t,e,r){this.getLayerIndex(t).replace(e),r()},bt.prototype.updateLayers=function(t,e,r){this.getLayerIndex(t).update(e.layers,e.removedIds),r()},bt.prototype.loadTile=function(t,e,r){this.getWorkerSource(t,e.type,e.source).loadTile(e,r)},bt.prototype.loadDEMTile=function(t,e,r){this.getDEMWorkerSource(t,e.source).loadTile(e,r)},bt.prototype.reloadTile=function(t,e,r){this.getWorkerSource(t,e.type,e.source).reloadTile(e,r)},bt.prototype.abortTile=function(t,e,r){this.getWorkerSource(t,e.type,e.source).abortTile(e,r)},bt.prototype.removeTile=function(t,e,r){this.getWorkerSource(t,e.type,e.source).removeTile(e,r)},bt.prototype.removeDEMTile=function(t,e){this.getDEMWorkerSource(t,e.source).removeTile(e)},bt.prototype.removeSource=function(t,e,r){if(this.workerSources[t]&&this.workerSources[t][e.type]&&this.workerSources[t][e.type][e.source]){var i=this.workerSources[t][e.type][e.source]
delete this.workerSources[t][e.type][e.source],void 0!==i.removeSource?i.removeSource(e,r):r()}},bt.prototype.loadWorkerSource=function(t,e,r){try{this.self.importScripts(e.url),r()}catch(t){r(t.toString())}},bt.prototype.syncRTLPluginState=function(e,r,i){try{t.plugin.setState(r)
var n=t.plugin.getPluginURL()
if(t.plugin.isLoaded()&&!t.plugin.isParsed()&&null!=n){this.self.importScripts(n)
var o=t.plugin.isParsed()
i(o?void 0:new Error("RTL Text Plugin failed to import scripts from "+n),o)}}catch(t){i(t.toString())}},bt.prototype.getAvailableImages=function(t){var e=this.availableImages[t]
return e||(e=[]),e},bt.prototype.getLayerIndex=function(t){var e=this.layerIndexes[t]
return e||(e=this.layerIndexes[t]=new i),e},bt.prototype.getWorkerSource=function(t,e,r){var i=this
return this.workerSources[t]||(this.workerSources[t]={}),this.workerSources[t][e]||(this.workerSources[t][e]={}),this.workerSources[t][e][r]||(this.workerSources[t][e][r]=new this.workerSourceTypes[e]({send:function(e,r,n){i.actor.send(e,r,n,t)}},this.getLayerIndex(t),this.getAvailableImages(t))),this.workerSources[t][e][r]},bt.prototype.getDEMWorkerSource=function(t,e){return this.demWorkerSources[t]||(this.demWorkerSources[t]={}),this.demWorkerSources[t][e]||(this.demWorkerSources[t][e]=new c),this.demWorkerSources[t][e]},bt.prototype.enforceCacheSizeLimit=function(e,r){t.enforceCacheSizeLimit(r)},"undefined"!=typeof WorkerGlobalScope&&void 0!==t.window&&t.window instanceof WorkerGlobalScope&&(t.window.worker=new bt(t.window)),bt})),i(0,(function(t){var e=t.createCommonjsModule((function(t){function e(t){return!r(t)}function r(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1
var t,e,r=new Blob([""],{type:"text/javascript"}),i=URL.createObjectURL(r)
try{e=new Worker(i),t=!0}catch(e){t=!1}return e&&e.terminate(),URL.revokeObjectURL(i),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var t=document.createElement("canvas")
t.width=t.height=1
var e=t.getContext("2d")
if(!e)return!1
var r=e.getImageData(0,0,1,1)
return r&&r.width===t.width}()?(void 0===i[r=t&&t.failIfMajorPerformanceCaveat]&&(i[r]=function(t){var r=function(t){var r=document.createElement("canvas"),i=Object.create(e.webGLContextAttributes)
return i.failIfMajorPerformanceCaveat=t,r.probablySupportsContext?r.probablySupportsContext("webgl",i)||r.probablySupportsContext("experimental-webgl",i):r.supportsContext?r.supportsContext("webgl",i)||r.supportsContext("experimental-webgl",i):r.getContext("webgl",i)||r.getContext("experimental-webgl",i)}(t)
if(!r)return!1
var i=r.createShader(r.VERTEX_SHADER)
return!(!i||r.isContextLost())&&(r.shaderSource(i,"void main() {}"),r.compileShader(i),!0===r.getShaderParameter(i,r.COMPILE_STATUS))}(r)),i[r]?void 0:"insufficient WebGL support"):"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"
var r}t.exports?t.exports=e:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=e,window.mapboxgl.notSupportedReason=r)
var i={}
e.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}})),r={create:function(e,r,i){var n=t.window.document.createElement(e)
return void 0!==r&&(n.className=r),i&&i.appendChild(n),n},createNS:function(e,r){return t.window.document.createElementNS(e,r)}},i=t.window.document.documentElement.style
function n(t){if(!i)return t[0]
for(var e=0;e<t.length;e++)if(t[e]in i)return t[e]
return t[0]}var o,a=n(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"])
r.disableDrag=function(){i&&a&&(o=i[a],i[a]="none")},r.enableDrag=function(){i&&a&&(i[a]=o)}
var s=n(["transform","WebkitTransform"])
r.setTransform=function(t,e){t.style[s]=e}
var l=!1
try{var u=Object.defineProperty({},"passive",{get:function(){l=!0}})
t.window.addEventListener("test",u,u),t.window.removeEventListener("test",u,u)}catch(t){l=!1}r.addEventListener=function(t,e,r,i){void 0===i&&(i={}),t.addEventListener(e,r,"passive"in i&&l?i:i.capture)},r.removeEventListener=function(t,e,r,i){void 0===i&&(i={}),t.removeEventListener(e,r,"passive"in i&&l?i:i.capture)}
var c=function(e){e.preventDefault(),e.stopPropagation(),t.window.removeEventListener("click",c,!0)}
function p(t){var e=t.userImage
return!!(e&&e.render&&e.render())&&(t.data.replace(new Uint8Array(e.data.buffer)),!0)}r.suppressClick=function(){t.window.addEventListener("click",c,!0),t.window.setTimeout((function(){t.window.removeEventListener("click",c,!0)}),0)},r.mousePos=function(e,r){var i=e.getBoundingClientRect()
return new t.Point(r.clientX-i.left-e.clientLeft,r.clientY-i.top-e.clientTop)},r.touchPos=function(e,r){for(var i=e.getBoundingClientRect(),n=[],o=0;o<r.length;o++)n.push(new t.Point(r[o].clientX-i.left-e.clientLeft,r[o].clientY-i.top-e.clientTop))
return n},r.mouseButton=function(e){return void 0!==t.window.InstallTrigger&&2===e.button&&e.ctrlKey&&t.window.navigator.platform.toUpperCase().indexOf("MAC")>=0?0:e.button},r.remove=function(t){t.parentNode&&t.parentNode.removeChild(t)}
var h=function(e){function r(){e.call(this),this.images={},this.updatedImages={},this.callbackDispatchedThisFrame={},this.loaded=!1,this.requestors=[],this.patterns={},this.atlasImage=new t.RGBAImage({width:1,height:1}),this.dirty=!0}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.isLoaded=function(){return this.loaded},r.prototype.setLoaded=function(t){if(this.loaded!==t&&(this.loaded=t,t)){for(var e=0,r=this.requestors;e<r.length;e+=1){var i=r[e]
this._notify(i.ids,i.callback)}this.requestors=[]}},r.prototype.getImage=function(t){return this.images[t]},r.prototype.addImage=function(t,e){this._validate(t,e)&&(this.images[t]=e)},r.prototype._validate=function(e,r){var i=!0
return this._validateStretch(r.stretchX,r.data&&r.data.width)||(this.fire(new t.ErrorEvent(new Error('Image "'+e+'" has invalid "stretchX" value'))),i=!1),this._validateStretch(r.stretchY,r.data&&r.data.height)||(this.fire(new t.ErrorEvent(new Error('Image "'+e+'" has invalid "stretchY" value'))),i=!1),this._validateContent(r.content,r)||(this.fire(new t.ErrorEvent(new Error('Image "'+e+'" has invalid "content" value'))),i=!1),i},r.prototype._validateStretch=function(t,e){if(!t)return!0
for(var r=0,i=0,n=t;i<n.length;i+=1){var o=n[i]
if(o[0]<r||o[1]<o[0]||e<o[1])return!1
r=o[1]}return!0},r.prototype._validateContent=function(t,e){return!(t&&(4!==t.length||t[0]<0||e.data.width<t[0]||t[1]<0||e.data.height<t[1]||t[2]<0||e.data.width<t[2]||t[3]<0||e.data.height<t[3]||t[2]<t[0]||t[3]<t[1]))},r.prototype.updateImage=function(t,e){e.version=this.images[t].version+1,this.images[t]=e,this.updatedImages[t]=!0},r.prototype.removeImage=function(t){var e=this.images[t]
delete this.images[t],delete this.patterns[t],e.userImage&&e.userImage.onRemove&&e.userImage.onRemove()},r.prototype.listImages=function(){return Object.keys(this.images)},r.prototype.getImages=function(t,e){var r=!0
if(!this.isLoaded())for(var i=0,n=t;i<n.length;i+=1)this.images[n[i]]||(r=!1)
this.isLoaded()||r?this._notify(t,e):this.requestors.push({ids:t,callback:e})},r.prototype._notify=function(e,r){for(var i={},n=0,o=e;n<o.length;n+=1){var a=o[n]
this.images[a]||this.fire(new t.Event("styleimagemissing",{id:a}))
var s=this.images[a]
s?i[a]={data:s.data.clone(),pixelRatio:s.pixelRatio,sdf:s.sdf,version:s.version,stretchX:s.stretchX,stretchY:s.stretchY,content:s.content,hasRenderCallback:Boolean(s.userImage&&s.userImage.render)}:t.warnOnce('Image "'+a+'" could not be loaded. Please make sure you have added the image with map.addImage() or a "sprite" property in your style. You can provide missing images by listening for the "styleimagemissing" map event.')}r(null,i)},r.prototype.getPixelSize=function(){var t=this.atlasImage
return{width:t.width,height:t.height}},r.prototype.getPattern=function(e){var r=this.patterns[e],i=this.getImage(e)
if(!i)return null
if(r&&r.position.version===i.version)return r.position
if(r)r.position.version=i.version
else{var n={w:i.data.width+2,h:i.data.height+2,x:0,y:0},o=new t.ImagePosition(n,i)
this.patterns[e]={bin:n,position:o}}return this._updatePatternAtlas(),this.patterns[e].position},r.prototype.bind=function(e){var r=e.gl
this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new t.Texture(e,this.atlasImage,r.RGBA),this.atlasTexture.bind(r.LINEAR,r.CLAMP_TO_EDGE)},r.prototype._updatePatternAtlas=function(){var e=[]
for(var r in this.patterns)e.push(this.patterns[r].bin)
var i=t.potpack(e),n=i.w,o=i.h,a=this.atlasImage
for(var s in a.resize({width:n||1,height:o||1}),this.patterns){var l=this.patterns[s].bin,u=l.x+1,c=l.y+1,p=this.images[s].data,h=p.width,f=p.height
t.RGBAImage.copy(p,a,{x:0,y:0},{x:u,y:c},{width:h,height:f}),t.RGBAImage.copy(p,a,{x:0,y:f-1},{x:u,y:c-1},{width:h,height:1}),t.RGBAImage.copy(p,a,{x:0,y:0},{x:u,y:c+f},{width:h,height:1}),t.RGBAImage.copy(p,a,{x:h-1,y:0},{x:u-1,y:c},{width:1,height:f}),t.RGBAImage.copy(p,a,{x:0,y:0},{x:u+h,y:c},{width:1,height:f})}this.dirty=!0},r.prototype.beginFrame=function(){this.callbackDispatchedThisFrame={}},r.prototype.dispatchRenderCallbacks=function(t){for(var e=0,r=t;e<r.length;e+=1){var i=r[e]
if(!this.callbackDispatchedThisFrame[i]){this.callbackDispatchedThisFrame[i]=!0
var n=this.images[i]
p(n)&&this.updateImage(i,n)}}},r}(t.Evented),f=y,d=y,m=1e20
function y(t,e,r,i,n,o){this.fontSize=t||24,this.buffer=void 0===e?3:e,this.cutoff=i||.25,this.fontFamily=n||"sans-serif",this.fontWeight=o||"normal",this.radius=r||8
var a=this.size=this.fontSize+2*this.buffer
this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=a,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textBaseline="middle",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.d=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Int16Array(a),this.middle=Math.round(a/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}function g(t,e,r,i,n,o,a){for(var s=0;s<e;s++){for(var l=0;l<r;l++)i[l]=t[l*e+s]
for(_(i,n,o,a,r),l=0;l<r;l++)t[l*e+s]=n[l]}for(l=0;l<r;l++){for(s=0;s<e;s++)i[s]=t[l*e+s]
for(_(i,n,o,a,e),s=0;s<e;s++)t[l*e+s]=Math.sqrt(n[s])}}function _(t,e,r,i,n){r[0]=0,i[0]=-m,i[1]=+m
for(var o=1,a=0;o<n;o++){for(var s=(t[o]+o*o-(t[r[a]]+r[a]*r[a]))/(2*o-2*r[a]);s<=i[a];)a--,s=(t[o]+o*o-(t[r[a]]+r[a]*r[a]))/(2*o-2*r[a])
r[++a]=o,i[a]=s,i[a+1]=+m}for(o=0,a=0;o<n;o++){for(;i[a+1]<o;)a++
e[o]=(o-r[a])*(o-r[a])+t[r[a]]}}y.prototype.draw=function(t){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillText(t,this.buffer,this.middle)
for(var e=this.ctx.getImageData(0,0,this.size,this.size),r=new Uint8ClampedArray(this.size*this.size),i=0;i<this.size*this.size;i++){var n=e.data[4*i+3]/255
this.gridOuter[i]=1===n?0:0===n?m:Math.pow(Math.max(0,.5-n),2),this.gridInner[i]=1===n?m:0===n?0:Math.pow(Math.max(0,n-.5),2)}for(g(this.gridOuter,this.size,this.size,this.f,this.d,this.v,this.z),g(this.gridInner,this.size,this.size,this.f,this.d,this.v,this.z),i=0;i<this.size*this.size;i++)r[i]=Math.max(0,Math.min(255,Math.round(255-255*((this.gridOuter[i]-this.gridInner[i])/this.radius+this.cutoff))))
return r},f.default=d
var v=function(t,e){this.requestManager=t,this.localIdeographFontFamily=e,this.entries={}}
v.prototype.setURL=function(t){this.url=t},v.prototype.getGlyphs=function(e,r){var i=this,n=[]
for(var o in e)for(var a=0,s=e[o];a<s.length;a+=1)n.push({stack:o,id:s[a]})
t.asyncAll(n,(function(t,e){var r=t.stack,n=t.id,o=i.entries[r]
o||(o=i.entries[r]={glyphs:{},requests:{},ranges:{}})
var a=o.glyphs[n]
if(void 0===a){if(a=i._tinySDF(o,r,n))return o.glyphs[n]=a,void e(null,{stack:r,id:n,glyph:a})
var s=Math.floor(n/256)
if(256*s>65535)e(new Error("glyphs > 65535 not supported"))
else if(o.ranges[s])e(null,{stack:r,id:n,glyph:a})
else{var l=o.requests[s]
l||(l=o.requests[s]=[],v.loadGlyphRange(r,s,i.url,i.requestManager,(function(t,e){if(e){for(var r in e)i._doesCharSupportLocalGlyph(+r)||(o.glyphs[+r]=e[+r])
o.ranges[s]=!0}for(var n=0,a=l;n<a.length;n+=1)(0,a[n])(t,e)
delete o.requests[s]}))),l.push((function(t,i){t?e(t):i&&e(null,{stack:r,id:n,glyph:i[n]||null})}))}}else e(null,{stack:r,id:n,glyph:a})}),(function(t,e){if(t)r(t)
else if(e){for(var i={},n=0,o=e;n<o.length;n+=1){var a=o[n],s=a.stack,l=a.id,u=a.glyph;(i[s]||(i[s]={}))[l]=u&&{id:u.id,bitmap:u.bitmap.clone(),metrics:u.metrics}}r(null,i)}}))},v.prototype._doesCharSupportLocalGlyph=function(e){return!!this.localIdeographFontFamily&&(t.isChar["CJK Unified Ideographs"](e)||t.isChar["Hangul Syllables"](e)||t.isChar.Hiragana(e)||t.isChar.Katakana(e))},v.prototype._tinySDF=function(e,r,i){var n=this.localIdeographFontFamily
if(n&&this._doesCharSupportLocalGlyph(i)){var o=e.tinySDF
if(!o){var a="400";/bold/i.test(r)?a="900":/medium/i.test(r)?a="500":/light/i.test(r)&&(a="200"),o=e.tinySDF=new v.TinySDF(24,3,8,.25,n,a)}return{id:i,bitmap:new t.AlphaImage({width:30,height:30},o.draw(String.fromCharCode(i))),metrics:{width:24,height:24,left:0,top:-8,advance:24}}}},v.loadGlyphRange=function(e,r,i,n,o){var a=256*r,s=a+255,l=n.transformRequest(n.normalizeGlyphsURL(i).replace("{fontstack}",e).replace("{range}",a+"-"+s),t.ResourceType.Glyphs)
t.getArrayBuffer(l,(function(e,r){if(e)o(e)
else if(r){for(var i={},n=0,a=t.parseGlyphPBF(r);n<a.length;n+=1){var s=a[n]
i[s.id]=s}o(null,i)}}))},v.TinySDF=f
var x=function(){this.specification=t.styleSpec.light.position}
x.prototype.possiblyEvaluate=function(e,r){return t.sphericalToCartesian(e.expression.evaluate(r))},x.prototype.interpolate=function(e,r,i){return{x:t.number(e.x,r.x,i),y:t.number(e.y,r.y,i),z:t.number(e.z,r.z,i)}}
var b=new t.Properties({anchor:new t.DataConstantProperty(t.styleSpec.light.anchor),position:new x,color:new t.DataConstantProperty(t.styleSpec.light.color),intensity:new t.DataConstantProperty(t.styleSpec.light.intensity)}),w=function(e){function r(r){e.call(this),this._transitionable=new t.Transitionable(b),this.setLight(r),this._transitioning=this._transitionable.untransitioned()}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.getLight=function(){return this._transitionable.serialize()},r.prototype.setLight=function(e,r){if(void 0===r&&(r={}),!this._validate(t.validateLight,e,r))for(var i in e){var n=e[i]
t.endsWith(i,"-transition")?this._transitionable.setTransition(i.slice(0,-"-transition".length),n):this._transitionable.setValue(i,n)}},r.prototype.updateTransitions=function(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning)},r.prototype.hasTransition=function(){return this._transitioning.hasTransition()},r.prototype.recalculate=function(t){this.properties=this._transitioning.possiblyEvaluate(t)},r.prototype._validate=function(e,r,i){return(!i||!1!==i.validate)&&t.emitValidationErrors(this,e.call(t.validateStyle,t.extend({value:r,style:{glyphs:!0,sprite:!0},styleSpec:t.styleSpec})))},r}(t.Evented),S=function(t,e){this.width=t,this.height=e,this.nextRow=0,this.data=new Uint8Array(this.width*this.height),this.dashEntry={}}
S.prototype.getDash=function(t,e){var r=t.join(",")+String(e)
return this.dashEntry[r]||(this.dashEntry[r]=this.addDash(t,e)),this.dashEntry[r]},S.prototype.getDashRanges=function(t,e,r){var i=[],n=t.length%2==1?-t[t.length-1]*r:0,o=t[0]*r,a=!0
i.push({left:n,right:o,isDash:a,zeroLength:0===t[0]})
for(var s=t[0],l=1;l<t.length;l++){var u=t[l]
i.push({left:n=s*r,right:o=(s+=u)*r,isDash:a=!a,zeroLength:0===u})}return i},S.prototype.addRoundDash=function(t,e,r){for(var i=e/2,n=-r;n<=r;n++)for(var o=this.width*(this.nextRow+r+n),a=0,s=t[a],l=0;l<this.width;l++){l/s.right>1&&(s=t[++a])
var u=Math.abs(l-s.left),c=Math.abs(l-s.right),p=Math.min(u,c),h=void 0,f=n/r*(i+1)
if(s.isDash){var d=i-Math.abs(f)
h=Math.sqrt(p*p+d*d)}else h=i-Math.sqrt(p*p+f*f)
this.data[o+l]=Math.max(0,Math.min(255,h+128))}},S.prototype.addRegularDash=function(t){for(var e=t.length-1;e>=0;--e){var r=t[e],i=t[e+1]
r.zeroLength?t.splice(e,1):i&&i.isDash===r.isDash&&(i.left=r.left,t.splice(e,1))}var n=t[0],o=t[t.length-1]
n.isDash===o.isDash&&(n.left=o.left-this.width,o.right=n.right+this.width)
for(var a=this.width*this.nextRow,s=0,l=t[s],u=0;u<this.width;u++){u/l.right>1&&(l=t[++s])
var c=Math.abs(u-l.left),p=Math.abs(u-l.right),h=Math.min(c,p)
this.data[a+u]=Math.max(0,Math.min(255,(l.isDash?h:-h)+128))}},S.prototype.addDash=function(e,r){var i=r?7:0,n=2*i+1
if(this.nextRow+n>this.height)return t.warnOnce("LineAtlas out of space"),null
for(var o=0,a=0;a<e.length;a++)o+=e[a]
if(0!==o){var s=this.width/o,l=this.getDashRanges(e,this.width,s)
r?this.addRoundDash(l,s,i):this.addRegularDash(l)}var u={y:(this.nextRow+i+.5)/this.height,height:2*i/this.height,width:o}
return this.nextRow+=n,this.dirty=!0,u},S.prototype.bind=function(t){var e=t.gl
this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.width,this.height,e.ALPHA,e.UNSIGNED_BYTE,this.data))):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.ALPHA,this.width,this.height,0,e.ALPHA,e.UNSIGNED_BYTE,this.data))}
var T=function e(r,i){this.workerPool=r,this.actors=[],this.currentActor=0,this.id=t.uniqueId()
for(var n=this.workerPool.acquire(this.id),o=0;o<n.length;o++){var a=new e.Actor(n[o],i,this.id)
a.name="Worker "+o,this.actors.push(a)}}
function I(e,r,i){var n=function(n,o){if(n)return i(n)
if(o){var a=t.pick(t.extend(o,e),["tiles","minzoom","maxzoom","attribution","mapbox_logo","bounds","scheme","tileSize","encoding"])
o.vector_layers&&(a.vectorLayers=o.vector_layers,a.vectorLayerIds=a.vectorLayers.map((function(t){return t.id}))),a.tiles=r.canonicalizeTileset(a,e.url),i(null,a)}}
return e.url?t.getJSON(r.transformRequest(r.normalizeSourceURL(e.url),t.ResourceType.Source),n):t.browser.frame((function(){return n(null,e)}))}T.prototype.broadcast=function(e,r,i){t.asyncAll(this.actors,(function(t,i){t.send(e,r,i)}),i=i||function(){})},T.prototype.getActor=function(){return this.currentActor=(this.currentActor+1)%this.actors.length,this.actors[this.currentActor]},T.prototype.remove=function(){this.actors.forEach((function(t){t.remove()})),this.actors=[],this.workerPool.release(this.id)},T.Actor=t.Actor
var E=function(e,r,i){this.bounds=t.LngLatBounds.convert(this.validateBounds(e)),this.minzoom=r||0,this.maxzoom=i||24}
E.prototype.validateBounds=function(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]},E.prototype.contains=function(e){var r=Math.pow(2,e.z),i=Math.floor(t.mercatorXfromLng(this.bounds.getWest())*r),n=Math.floor(t.mercatorYfromLat(this.bounds.getNorth())*r),o=Math.ceil(t.mercatorXfromLng(this.bounds.getEast())*r),a=Math.ceil(t.mercatorYfromLat(this.bounds.getSouth())*r)
return e.x>=i&&e.x<o&&e.y>=n&&e.y<a}
var A=function(e){function r(r,i,n,o){if(e.call(this),this.id=r,this.dispatcher=n,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,this._loaded=!1,t.extend(this,t.pick(i,["url","scheme","tileSize","promoteId"])),this._options=t.extend({type:"vector"},i),this._collectResourceTiming=i.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512")
this.setEventedParent(o)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.load=function(){var e=this
this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=I(this._options,this.map._requestManager,(function(r,i){e._tileJSONRequest=null,e._loaded=!0,r?e.fire(new t.ErrorEvent(r)):i&&(t.extend(e,i),i.bounds&&(e.tileBounds=new E(i.bounds,e.minzoom,e.maxzoom)),t.postTurnstileEvent(i.tiles,e.map._requestManager._customAccessToken),t.postMapLoadEvent(i.tiles,e.map._getMapId(),e.map._requestManager._skuToken,e.map._requestManager._customAccessToken),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})))}))},r.prototype.loaded=function(){return this._loaded},r.prototype.hasTile=function(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)},r.prototype.onAdd=function(t){this.map=t,this.load()},r.prototype.onRemove=function(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null)},r.prototype.serialize=function(){return t.extend({},this._options)},r.prototype.loadTile=function(e,r){var i=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme)),n={request:this.map._requestManager.transformRequest(i,t.ResourceType.Tile),uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:this.type,source:this.id,pixelRatio:t.browser.devicePixelRatio,showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId}
function o(i,n){return delete e.request,e.aborted?r(null):i&&404!==i.status?r(i):(n&&n.resourceTiming&&(e.resourceTiming=n.resourceTiming),this.map._refreshExpiredTiles&&n&&e.setExpiryData(n),e.loadVectorData(n,this.map.painter),t.cacheEntryPossiblyAdded(this.dispatcher),r(null),void(e.reloadCallback&&(this.loadTile(e,e.reloadCallback),e.reloadCallback=null)))}n.request.collectResourceTiming=this._collectResourceTiming,e.actor&&"expired"!==e.state?"loading"===e.state?e.reloadCallback=r:e.request=e.actor.send("reloadTile",n,o.bind(this)):(e.actor=this.dispatcher.getActor(),e.request=e.actor.send("loadTile",n,o.bind(this)))},r.prototype.abortTile=function(t){t.request&&(t.request.cancel(),delete t.request),t.actor&&t.actor.send("abortTile",{uid:t.uid,type:this.type,source:this.id},void 0)},r.prototype.unloadTile=function(t){t.unloadVectorData(),t.actor&&t.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id},void 0)},r.prototype.hasTransition=function(){return!1},r}(t.Evented),z=function(e){function r(r,i,n,o){e.call(this),this.id=r,this.dispatcher=n,this.setEventedParent(o),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=t.extend({type:"raster"},i),t.extend(this,t.pick(i,["url","scheme","tileSize"]))}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.load=function(){var e=this
this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=I(this._options,this.map._requestManager,(function(r,i){e._tileJSONRequest=null,e._loaded=!0,r?e.fire(new t.ErrorEvent(r)):i&&(t.extend(e,i),i.bounds&&(e.tileBounds=new E(i.bounds,e.minzoom,e.maxzoom)),t.postTurnstileEvent(i.tiles),t.postMapLoadEvent(i.tiles,e.map._getMapId(),e.map._requestManager._skuToken),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})))}))},r.prototype.loaded=function(){return this._loaded},r.prototype.onAdd=function(t){this.map=t,this.load()},r.prototype.onRemove=function(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null)},r.prototype.serialize=function(){return t.extend({},this._options)},r.prototype.hasTile=function(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)},r.prototype.loadTile=function(e,r){var i=this,n=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme),this.tileSize)
e.request=t.getImage(this.map._requestManager.transformRequest(n,t.ResourceType.Tile),(function(n,o){if(delete e.request,e.aborted)e.state="unloaded",r(null)
else if(n)e.state="errored",r(n)
else if(o){i.map._refreshExpiredTiles&&e.setExpiryData(o),delete o.cacheControl,delete o.expires
var a=i.map.painter.context,s=a.gl
e.texture=i.map.painter.getTileTexture(o.width),e.texture?e.texture.update(o,{useMipmap:!0}):(e.texture=new t.Texture(a,o,s.RGBA,{useMipmap:!0}),e.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),a.extTextureFilterAnisotropic&&s.texParameterf(s.TEXTURE_2D,a.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,a.extTextureFilterAnisotropicMax)),e.state="loaded",t.cacheEntryPossiblyAdded(i.dispatcher),r(null)}}))},r.prototype.abortTile=function(t,e){t.request&&(t.request.cancel(),delete t.request),e()},r.prototype.unloadTile=function(t,e){t.texture&&this.map.painter.saveTileTexture(t.texture),e()},r.prototype.hasTransition=function(){return!1},r}(t.Evented),P=function(e){function r(r,i,n,o){e.call(this,r,i,n,o),this.type="raster-dem",this.maxzoom=22,this._options=t.extend({type:"raster-dem"},i),this.encoding=i.encoding||"mapbox"}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.serialize=function(){return{type:"raster-dem",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds,encoding:this.encoding}},r.prototype.loadTile=function(e,r){var i=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme),this.tileSize)
function n(t,i){t&&(e.state="errored",r(t)),i&&(e.dem=i,e.needsHillshadePrepare=!0,e.state="loaded",r(null))}e.request=t.getImage(this.map._requestManager.transformRequest(i,t.ResourceType.Tile),function(i,o){if(delete e.request,e.aborted)e.state="unloaded",r(null)
else if(i)e.state="errored",r(i)
else if(o){this.map._refreshExpiredTiles&&e.setExpiryData(o),delete o.cacheControl,delete o.expires
var a=t.window.ImageBitmap&&o instanceof t.window.ImageBitmap&&t.offscreenCanvasSupported()?o:t.browser.getImageData(o,1),s={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:a,encoding:this.encoding}
e.actor&&"expired"!==e.state||(e.actor=this.dispatcher.getActor(),e.actor.send("loadDEMTile",s,n.bind(this)))}}.bind(this)),e.neighboringTiles=this._getNeighboringTiles(e.tileID)},r.prototype._getNeighboringTiles=function(e){var r=e.canonical,i=Math.pow(2,r.z),n=(r.x-1+i)%i,o=0===r.x?e.wrap-1:e.wrap,a=(r.x+1+i)%i,s=r.x+1===i?e.wrap+1:e.wrap,l={}
return l[new t.OverscaledTileID(e.overscaledZ,o,r.z,n,r.y).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,r.z,a,r.y).key]={backfilled:!1},r.y>0&&(l[new t.OverscaledTileID(e.overscaledZ,o,r.z,n,r.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,r.z,r.x,r.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,r.z,a,r.y-1).key]={backfilled:!1}),r.y+1<i&&(l[new t.OverscaledTileID(e.overscaledZ,o,r.z,n,r.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,r.z,r.x,r.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,r.z,a,r.y+1).key]={backfilled:!1}),l},r.prototype.unloadTile=function(t){t.demTexture&&this.map.painter.saveTileTexture(t.demTexture),t.fbo&&(t.fbo.destroy(),delete t.fbo),t.dem&&delete t.dem,delete t.neighboringTiles,t.state="unloaded",t.actor&&t.actor.send("removeDEMTile",{uid:t.uid,source:this.id})},r}(z),C=function(e){function r(r,i,n,o){e.call(this),this.id=r,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this._removed=!1,this._loaded=!1,this.actor=n.getActor(),this.setEventedParent(o),this._data=i.data,this._options=t.extend({},i),this._collectResourceTiming=i.collectResourceTiming,this._resourceTiming=[],void 0!==i.maxzoom&&(this.maxzoom=i.maxzoom),i.type&&(this.type=i.type),i.attribution&&(this.attribution=i.attribution),this.promoteId=i.promoteId
var a=t.EXTENT/this.tileSize
this.workerOptions=t.extend({source:this.id,cluster:i.cluster||!1,geojsonVtOptions:{buffer:(void 0!==i.buffer?i.buffer:128)*a,tolerance:(void 0!==i.tolerance?i.tolerance:.375)*a,extent:t.EXTENT,maxZoom:this.maxzoom,lineMetrics:i.lineMetrics||!1,generateId:i.generateId||!1},superclusterOptions:{maxZoom:void 0!==i.clusterMaxZoom?Math.min(i.clusterMaxZoom,this.maxzoom-1):this.maxzoom-1,extent:t.EXTENT,radius:(i.clusterRadius||50)*a,log:!1,generateId:i.generateId||!1},clusterProperties:i.clusterProperties},i.workerOptions)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.load=function(){var e=this
this.fire(new t.Event("dataloading",{dataType:"source"})),this._updateWorkerData((function(r){if(r)e.fire(new t.ErrorEvent(r))
else{var i={dataType:"source",sourceDataType:"metadata"}
e._collectResourceTiming&&e._resourceTiming&&e._resourceTiming.length>0&&(i.resourceTiming=e._resourceTiming,e._resourceTiming=[]),e.fire(new t.Event("data",i))}}))},r.prototype.onAdd=function(t){this.map=t,this.load()},r.prototype.setData=function(e){var r=this
return this._data=e,this.fire(new t.Event("dataloading",{dataType:"source"})),this._updateWorkerData((function(e){if(e)r.fire(new t.ErrorEvent(e))
else{var i={dataType:"source",sourceDataType:"content"}
r._collectResourceTiming&&r._resourceTiming&&r._resourceTiming.length>0&&(i.resourceTiming=r._resourceTiming,r._resourceTiming=[]),r.fire(new t.Event("data",i))}})),this},r.prototype.getClusterExpansionZoom=function(t,e){return this.actor.send("geojson.getClusterExpansionZoom",{clusterId:t,source:this.id},e),this},r.prototype.getClusterChildren=function(t,e){return this.actor.send("geojson.getClusterChildren",{clusterId:t,source:this.id},e),this},r.prototype.getClusterLeaves=function(t,e,r,i){return this.actor.send("geojson.getClusterLeaves",{source:this.id,clusterId:t,limit:e,offset:r},i),this},r.prototype._updateWorkerData=function(e){var r=this
this._loaded=!1
var i=t.extend({},this.workerOptions),n=this._data
"string"==typeof n?(i.request=this.map._requestManager.transformRequest(t.browser.resolveURL(n),t.ResourceType.Source),i.request.collectResourceTiming=this._collectResourceTiming):i.data=JSON.stringify(n),this.actor.send(this.type+".loadData",i,(function(t,n){r._removed||n&&n.abandoned||(r._loaded=!0,n&&n.resourceTiming&&n.resourceTiming[r.id]&&(r._resourceTiming=n.resourceTiming[r.id].slice(0)),r.actor.send(r.type+".coalesce",{source:i.source},null),e(t))}))},r.prototype.loaded=function(){return this._loaded},r.prototype.loadTile=function(e,r){var i=this,n=e.actor?"reloadTile":"loadTile"
e.actor=this.actor,e.request=this.actor.send(n,{type:this.type,uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:t.browser.devicePixelRatio,showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId},(function(t,o){return delete e.request,e.unloadVectorData(),e.aborted?r(null):t?r(t):(e.loadVectorData(o,i.map.painter,"reloadTile"===n),r(null))}))},r.prototype.abortTile=function(t){t.request&&(t.request.cancel(),delete t.request),t.aborted=!0},r.prototype.unloadTile=function(t){t.unloadVectorData(),this.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id})},r.prototype.onRemove=function(){this._removed=!0,this.actor.send("removeSource",{type:this.type,source:this.id})},r.prototype.serialize=function(){return t.extend({},this._options,{type:this.type,data:this._data})},r.prototype.hasTransition=function(){return!1},r}(t.Evented),k=t.createLayout([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]),M=function(e){function r(t,r,i,n){e.call(this),this.id=t,this.dispatcher=i,this.coordinates=r.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this._loaded=!1,this.setEventedParent(n),this.options=r}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.load=function(e,r){var i=this
this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this.url=this.options.url,t.getImage(this.map._requestManager.transformRequest(this.url,t.ResourceType.Image),(function(n,o){i._loaded=!0,n?i.fire(new t.ErrorEvent(n)):o&&(i.image=o,e&&(i.coordinates=e),r&&r(),i._finishLoading())}))},r.prototype.loaded=function(){return this._loaded},r.prototype.updateImage=function(t){var e=this
return this.image&&t.url?(this.options.url=t.url,this.load(t.coordinates,(function(){e.texture=null})),this):this},r.prototype._finishLoading=function(){this.map&&(this.setCoordinates(this.coordinates),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})))},r.prototype.onAdd=function(t){this.map=t,this.load()},r.prototype.setCoordinates=function(e){var r=this
this.coordinates=e
var i=e.map(t.MercatorCoordinate.fromLngLat)
this.tileID=function(e){for(var r=1/0,i=1/0,n=-1/0,o=-1/0,a=0,s=e;a<s.length;a+=1){var l=s[a]
r=Math.min(r,l.x),i=Math.min(i,l.y),n=Math.max(n,l.x),o=Math.max(o,l.y)}var u=Math.max(n-r,o-i),c=Math.max(0,Math.floor(-Math.log(u)/Math.LN2)),p=Math.pow(2,c)
return new t.CanonicalTileID(c,Math.floor((r+n)/2*p),Math.floor((i+o)/2*p))}(i),this.minzoom=this.maxzoom=this.tileID.z
var n=i.map((function(t){return r.tileID.getTilePoint(t)._round()}))
return this._boundsArray=new t.StructArrayLayout4i8,this._boundsArray.emplaceBack(n[0].x,n[0].y,0,0),this._boundsArray.emplaceBack(n[1].x,n[1].y,t.EXTENT,0),this._boundsArray.emplaceBack(n[3].x,n[3].y,0,t.EXTENT),this._boundsArray.emplaceBack(n[2].x,n[2].y,t.EXTENT,t.EXTENT),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})),this},r.prototype.prepare=function(){if(0!==Object.keys(this.tiles).length&&this.image){var e=this.map.painter.context,r=e.gl
for(var i in this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,k.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture||(this.texture=new t.Texture(e,this.image,r.RGBA),this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE)),this.tiles){var n=this.tiles[i]
"loaded"!==n.state&&(n.state="loaded",n.texture=this.texture)}}},r.prototype.loadTile=function(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null))},r.prototype.serialize=function(){return{type:"image",url:this.options.url,coordinates:this.coordinates}},r.prototype.hasTransition=function(){return!1},r}(t.Evented),D=function(e){function r(t,r,i,n){e.call(this,t,r,i,n),this.roundZoom=!0,this.type="video",this.options=r}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.load=function(){var e=this
this._loaded=!1
var r=this.options
this.urls=[]
for(var i=0,n=r.urls;i<n.length;i+=1)this.urls.push(this.map._requestManager.transformRequest(n[i],t.ResourceType.Source).url)
t.getVideo(this.urls,(function(r,i){e._loaded=!0,r?e.fire(new t.ErrorEvent(r)):i&&(e.video=i,e.video.loop=!0,e.video.addEventListener("playing",(function(){e.map.triggerRepaint()})),e.map&&e.video.play(),e._finishLoading())}))},r.prototype.pause=function(){this.video&&this.video.pause()},r.prototype.play=function(){this.video&&this.video.play()},r.prototype.seek=function(e){if(this.video){var r=this.video.seekable
e<r.start(0)||e>r.end(0)?this.fire(new t.ErrorEvent(new t.ValidationError("sources."+this.id,null,"Playback for this video can be set only between the "+r.start(0)+" and "+r.end(0)+"-second mark."))):this.video.currentTime=e}},r.prototype.getVideo=function(){return this.video},r.prototype.onAdd=function(t){this.map||(this.map=t,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)))},r.prototype.prepare=function(){if(!(0===Object.keys(this.tiles).length||this.video.readyState<2)){var e=this.map.painter.context,r=e.gl
for(var i in this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,k.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?this.video.paused||(this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE),r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,this.video)):(this.texture=new t.Texture(e,this.video,r.RGBA),this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE)),this.tiles){var n=this.tiles[i]
"loaded"!==n.state&&(n.state="loaded",n.texture=this.texture)}}},r.prototype.serialize=function(){return{type:"video",urls:this.urls,coordinates:this.coordinates}},r.prototype.hasTransition=function(){return this.video&&!this.video.paused},r}(M),L=function(e){function r(r,i,n,o){e.call(this,r,i,n,o),i.coordinates?Array.isArray(i.coordinates)&&4===i.coordinates.length&&!i.coordinates.some((function(t){return!Array.isArray(t)||2!==t.length||t.some((function(t){return"number"!=typeof t}))}))||this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'"coordinates" property must be an array of 4 longitude/latitude array pairs'))):this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'missing required property "coordinates"'))),i.animate&&"boolean"!=typeof i.animate&&this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'optional "animate" property must be a boolean value'))),i.canvas?"string"==typeof i.canvas||i.canvas instanceof t.window.HTMLCanvasElement||this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'"canvas" must be either a string representing the ID of the canvas element from which to read, or an HTMLCanvasElement instance'))):this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'missing required property "canvas"'))),this.options=i,this.animate=void 0===i.animate||i.animate}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.load=function(){this._loaded=!0,this.canvas||(this.canvas=this.options.canvas instanceof t.window.HTMLCanvasElement?this.options.canvas:t.window.document.getElementById(this.options.canvas)),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions()?this.fire(new t.ErrorEvent(new Error("Canvas dimensions cannot be less than or equal to zero."))):(this.play=function(){this._playing=!0,this.map.triggerRepaint()},this.pause=function(){this._playing&&(this.prepare(),this._playing=!1)},this._finishLoading())},r.prototype.getCanvas=function(){return this.canvas},r.prototype.onAdd=function(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play()},r.prototype.onRemove=function(){this.pause()},r.prototype.prepare=function(){var e=!1
if(this.canvas.width!==this.width&&(this.width=this.canvas.width,e=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,e=!0),!this._hasInvalidDimensions()&&0!==Object.keys(this.tiles).length){var r=this.map.painter.context,i=r.gl
for(var n in this.boundsBuffer||(this.boundsBuffer=r.createVertexBuffer(this._boundsArray,k.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?(e||this._playing)&&this.texture.update(this.canvas,{premultiply:!0}):this.texture=new t.Texture(r,this.canvas,i.RGBA,{premultiply:!0}),this.tiles){var o=this.tiles[n]
"loaded"!==o.state&&(o.state="loaded",o.texture=this.texture)}}},r.prototype.serialize=function(){return{type:"canvas",coordinates:this.coordinates}},r.prototype.hasTransition=function(){return this._playing},r.prototype._hasInvalidDimensions=function(){for(var t=0,e=[this.canvas.width,this.canvas.height];t<e.length;t+=1){var r=e[t]
if(isNaN(r)||r<=0)return!0}return!1},r}(M),R={vector:A,raster:z,"raster-dem":P,geojson:C,video:D,image:M,canvas:L}
function B(e,r){var i=t.identity([])
return t.translate(i,i,[1,1,0]),t.scale(i,i,[.5*e.width,.5*e.height,1]),t.multiply(i,i,e.calculatePosMatrix(r.toUnwrapped()))}function F(t,e,r,i,n,o){var a=function(t,e,r){if(t)for(var i=0,n=t;i<n.length;i+=1){var o=e[n[i]]
if(o&&o.source===r&&"fill-extrusion"===o.type)return!0}else for(var a in e){var s=e[a]
if(s.source===r&&"fill-extrusion"===s.type)return!0}return!1}(n&&n.layers,e,t.id),s=o.maxPitchScaleFactor(),l=t.tilesIn(i,s,a)
l.sort(O)
for(var u=[],c=0,p=l;c<p.length;c+=1){var h=p[c]
u.push({wrappedTileID:h.tileID.wrapped().key,queryResults:h.tile.queryRenderedFeatures(e,r,t._state,h.queryGeometry,h.cameraQueryGeometry,h.scale,n,o,s,B(t.transform,h.tileID))})}var f=function(t){for(var e={},r={},i=0,n=t;i<n.length;i+=1){var o=n[i],a=o.queryResults,s=o.wrappedTileID,l=r[s]=r[s]||{}
for(var u in a)for(var c=a[u],p=l[u]=l[u]||{},h=e[u]=e[u]||[],f=0,d=c;f<d.length;f+=1){var m=d[f]
p[m.featureIndex]||(p[m.featureIndex]=!0,h.push(m))}}return e}(u)
for(var d in f)f[d].forEach((function(e){var r=e.feature,i=t.getFeatureState(r.layer["source-layer"],r.id)
r.source=r.layer.source,r.layer["source-layer"]&&(r.sourceLayer=r.layer["source-layer"]),r.state=i}))
return f}function O(t,e){var r=t.tileID,i=e.tileID
return r.overscaledZ-i.overscaledZ||r.canonical.y-i.canonical.y||r.wrap-i.wrap||r.canonical.x-i.canonical.x}var U=function(t,e){this.max=t,this.onRemove=e,this.reset()}
U.prototype.reset=function(){for(var t in this.data)for(var e=0,r=this.data[t];e<r.length;e+=1){var i=r[e]
i.timeout&&clearTimeout(i.timeout),this.onRemove(i.value)}return this.data={},this.order=[],this},U.prototype.add=function(t,e,r){var i=this,n=t.wrapped().key
void 0===this.data[n]&&(this.data[n]=[])
var o={value:e,timeout:void 0}
if(void 0!==r&&(o.timeout=setTimeout((function(){i.remove(t,o)}),r)),this.data[n].push(o),this.order.push(n),this.order.length>this.max){var a=this._getAndRemoveByKey(this.order[0])
a&&this.onRemove(a)}return this},U.prototype.has=function(t){return t.wrapped().key in this.data},U.prototype.getAndRemove=function(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null},U.prototype._getAndRemoveByKey=function(t){var e=this.data[t].shift()
return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value},U.prototype.getByKey=function(t){var e=this.data[t]
return e?e[0].value:null},U.prototype.get=function(t){return this.has(t)?this.data[t.wrapped().key][0].value:null},U.prototype.remove=function(t,e){if(!this.has(t))return this
var r=t.wrapped().key,i=void 0===e?0:this.data[r].indexOf(e),n=this.data[r][i]
return this.data[r].splice(i,1),n.timeout&&clearTimeout(n.timeout),0===this.data[r].length&&delete this.data[r],this.onRemove(n.value),this.order.splice(this.order.indexOf(r),1),this},U.prototype.setMaxSize=function(t){for(this.max=t;this.order.length>this.max;){var e=this._getAndRemoveByKey(this.order[0])
e&&this.onRemove(e)}return this},U.prototype.filter=function(t){var e=[]
for(var r in this.data)for(var i=0,n=this.data[r];i<n.length;i+=1){var o=n[i]
t(o.value)||e.push(o)}for(var a=0,s=e;a<s.length;a+=1){var l=s[a]
this.remove(l.value.tileID,l)}}
var V=function(t,e,r){this.context=t
var i=t.gl
this.buffer=i.createBuffer(),this.dynamicDraw=Boolean(r),this.context.unbindVAO(),t.bindElementBuffer.set(this.buffer),i.bufferData(i.ELEMENT_ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?i.DYNAMIC_DRAW:i.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer}
V.prototype.bind=function(){this.context.bindElementBuffer.set(this.buffer)},V.prototype.updateData=function(t){var e=this.context.gl
this.context.unbindVAO(),this.bind(),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,t.arrayBuffer)},V.prototype.destroy=function(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer)}
var N={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"},j=function(t,e,r,i){this.length=e.length,this.attributes=r,this.itemSize=e.bytesPerElement,this.dynamicDraw=i,this.context=t
var n=t.gl
this.buffer=n.createBuffer(),t.bindVertexBuffer.set(this.buffer),n.bufferData(n.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?n.DYNAMIC_DRAW:n.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer}
j.prototype.bind=function(){this.context.bindVertexBuffer.set(this.buffer)},j.prototype.updateData=function(t){var e=this.context.gl
this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer)},j.prototype.enableAttributes=function(t,e){for(var r=0;r<this.attributes.length;r++){var i=e.attributes[this.attributes[r].name]
void 0!==i&&t.enableVertexAttribArray(i)}},j.prototype.setVertexAttribPointers=function(t,e,r){for(var i=0;i<this.attributes.length;i++){var n=this.attributes[i],o=e.attributes[n.name]
void 0!==o&&t.vertexAttribPointer(o,n.components,t[N[n.type]],!1,this.itemSize,n.offset+this.itemSize*(r||0))}},j.prototype.destroy=function(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer)}
var q=function(t){this.gl=t.gl,this.default=this.getDefault(),this.current=this.default,this.dirty=!1}
q.prototype.get=function(){return this.current},q.prototype.set=function(t){},q.prototype.getDefault=function(){return this.default},q.prototype.setDefault=function(){this.set(this.default)}
var Z=function(e){function r(){e.apply(this,arguments)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.getDefault=function(){return t.Color.transparent},r.prototype.set=function(t){var e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1)},r}(q),G=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return 1},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.clearDepth(t),this.current=t,this.dirty=!1)},e}(q),X=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return 0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.clearStencil(t),this.current=t,this.dirty=!1)},e}(q),W=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return[!0,!0,!0,!0]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1)},e}(q),K=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return!0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.depthMask(t),this.current=t,this.dirty=!1)},e}(q),H=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return 255},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.stencilMask(t),this.current=t,this.dirty=!1)},e}(q),J=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return{func:this.gl.ALWAYS,ref:0,mask:255}},e.prototype.set=function(t){var e=this.current;(t.func!==e.func||t.ref!==e.ref||t.mask!==e.mask||this.dirty)&&(this.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t,this.dirty=!1)},e}(q),Y=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){var t=this.gl
return[t.KEEP,t.KEEP,t.KEEP]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||this.dirty)&&(this.gl.stencilOp(t[0],t[1],t[2]),this.current=t,this.dirty=!1)},e}(q),Q=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t,this.dirty=!1}},e}(q),$=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return[0,1]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.depthRange(t[0],t[1]),this.current=t,this.dirty=!1)},e}(q),tt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t,this.dirty=!1}},e}(q),et=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return this.gl.LESS},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.depthFunc(t),this.current=t,this.dirty=!1)},e}(q),rt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t,this.dirty=!1}},e}(q),it=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){var t=this.gl
return[t.ONE,t.ZERO]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.blendFunc(t[0],t[1]),this.current=t,this.dirty=!1)},e}(q),nt=function(e){function r(){e.apply(this,arguments)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.getDefault=function(){return t.Color.transparent},r.prototype.set=function(t){var e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1)},r}(q),ot=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return this.gl.FUNC_ADD},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.blendEquation(t),this.current=t,this.dirty=!1)},e}(q),at=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),this.current=t,this.dirty=!1}},e}(q),st=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return this.gl.BACK},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.cullFace(t),this.current=t,this.dirty=!1)},e}(q),lt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return this.gl.CCW},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.frontFace(t),this.current=t,this.dirty=!1)},e}(q),ut=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.useProgram(t),this.current=t,this.dirty=!1)},e}(q),ct=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return this.gl.TEXTURE0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.activeTexture(t),this.current=t,this.dirty=!1)},e}(q),pt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){var t=this.gl
return[0,0,t.drawingBufferWidth,t.drawingBufferHeight]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1)},e}(q),ht=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t,this.dirty=!1}},e}(q),ft=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t,this.dirty=!1}},e}(q),dt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.bindTexture(e.TEXTURE_2D,t),this.current=t,this.dirty=!1}},e}(q),mt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t,this.dirty=!1}},e}(q),yt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){var e=this.gl
e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t,this.dirty=!1},e}(q),gt=function(t){function e(e){t.call(this,e),this.vao=e.extVertexArrayObject}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){this.vao&&(t!==this.current||this.dirty)&&(this.vao.bindVertexArrayOES(t),this.current=t,this.dirty=!1)},e}(q),_t=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return 4},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t,this.dirty=!1}},e}(q),vt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t,this.dirty=!1}},e}(q),xt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t),this.current=t,this.dirty=!1}},e}(q),bt=function(t){function e(e,r){t.call(this,e),this.context=e,this.parent=r}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getDefault=function(){return null},e}(q),wt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.setDirty=function(){this.dirty=!0},e.prototype.set=function(t){if(t!==this.current||this.dirty){this.context.bindFramebuffer.set(this.parent)
var e=this.gl
e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1}},e}(bt),St=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){if(t!==this.current||this.dirty){this.context.bindFramebuffer.set(this.parent)
var e=this.gl
e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1}},e}(bt),Tt=function(t,e,r,i){this.context=t,this.width=e,this.height=r
var n=this.framebuffer=t.gl.createFramebuffer()
this.colorAttachment=new wt(t,n),i&&(this.depthAttachment=new St(t,n))}
Tt.prototype.destroy=function(){var t=this.context.gl,e=this.colorAttachment.get()
if(e&&t.deleteTexture(e),this.depthAttachment){var r=this.depthAttachment.get()
r&&t.deleteRenderbuffer(r)}t.deleteFramebuffer(this.framebuffer)}
var It=function(t,e,r){this.func=t,this.mask=e,this.range=r}
It.ReadOnly=!1,It.ReadWrite=!0,It.disabled=new It(519,It.ReadOnly,[0,1])
var Et=function(t,e,r,i,n,o){this.test=t,this.ref=e,this.mask=r,this.fail=i,this.depthFail=n,this.pass=o}
Et.disabled=new Et({func:519,mask:0},0,0,7680,7680,7680)
var At=function(t,e,r){this.blendFunction=t,this.blendColor=e,this.mask=r}
At.disabled=new At(At.Replace=[1,0],t.Color.transparent,[!1,!1,!1,!1]),At.unblended=new At(At.Replace,t.Color.transparent,[!0,!0,!0,!0]),At.alphaBlended=new At([1,771],t.Color.transparent,[!0,!0,!0,!0])
var zt=function(t,e,r){this.enable=t,this.mode=e,this.frontFace=r}
zt.disabled=new zt(!1,1029,2305),zt.backCCW=new zt(!0,1029,2305)
var Pt=function(t){this.gl=t,this.extVertexArrayObject=this.gl.getExtension("OES_vertex_array_object"),this.clearColor=new Z(this),this.clearDepth=new G(this),this.clearStencil=new X(this),this.colorMask=new W(this),this.depthMask=new K(this),this.stencilMask=new H(this),this.stencilFunc=new J(this),this.stencilOp=new Y(this),this.stencilTest=new Q(this),this.depthRange=new $(this),this.depthTest=new tt(this),this.depthFunc=new et(this),this.blend=new rt(this),this.blendFunc=new it(this),this.blendColor=new nt(this),this.blendEquation=new ot(this),this.cullFace=new at(this),this.cullFaceSide=new st(this),this.frontFace=new lt(this),this.program=new ut(this),this.activeTexture=new ct(this),this.viewport=new pt(this),this.bindFramebuffer=new ht(this),this.bindRenderbuffer=new ft(this),this.bindTexture=new dt(this),this.bindVertexBuffer=new mt(this),this.bindElementBuffer=new yt(this),this.bindVertexArrayOES=this.extVertexArrayObject&&new gt(this),this.pixelStoreUnpack=new _t(this),this.pixelStoreUnpackPremultiplyAlpha=new vt(this),this.pixelStoreUnpackFlipY=new xt(this),this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.extTextureHalfFloat=t.getExtension("OES_texture_half_float"),this.extTextureHalfFloat&&(t.getExtension("OES_texture_half_float_linear"),this.extRenderToTextureHalfFloat=t.getExtension("EXT_color_buffer_half_float")),this.extTimerQuery=t.getExtension("EXT_disjoint_timer_query")}
Pt.prototype.setDefault=function(){this.unbindVAO(),this.clearColor.setDefault(),this.clearDepth.setDefault(),this.clearStencil.setDefault(),this.colorMask.setDefault(),this.depthMask.setDefault(),this.stencilMask.setDefault(),this.stencilFunc.setDefault(),this.stencilOp.setDefault(),this.stencilTest.setDefault(),this.depthRange.setDefault(),this.depthTest.setDefault(),this.depthFunc.setDefault(),this.blend.setDefault(),this.blendFunc.setDefault(),this.blendColor.setDefault(),this.blendEquation.setDefault(),this.cullFace.setDefault(),this.cullFaceSide.setDefault(),this.frontFace.setDefault(),this.program.setDefault(),this.activeTexture.setDefault(),this.bindFramebuffer.setDefault(),this.pixelStoreUnpack.setDefault(),this.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.pixelStoreUnpackFlipY.setDefault()},Pt.prototype.setDirty=function(){this.clearColor.dirty=!0,this.clearDepth.dirty=!0,this.clearStencil.dirty=!0,this.colorMask.dirty=!0,this.depthMask.dirty=!0,this.stencilMask.dirty=!0,this.stencilFunc.dirty=!0,this.stencilOp.dirty=!0,this.stencilTest.dirty=!0,this.depthRange.dirty=!0,this.depthTest.dirty=!0,this.depthFunc.dirty=!0,this.blend.dirty=!0,this.blendFunc.dirty=!0,this.blendColor.dirty=!0,this.blendEquation.dirty=!0,this.cullFace.dirty=!0,this.cullFaceSide.dirty=!0,this.frontFace.dirty=!0,this.program.dirty=!0,this.activeTexture.dirty=!0,this.viewport.dirty=!0,this.bindFramebuffer.dirty=!0,this.bindRenderbuffer.dirty=!0,this.bindTexture.dirty=!0,this.bindVertexBuffer.dirty=!0,this.bindElementBuffer.dirty=!0,this.extVertexArrayObject&&(this.bindVertexArrayOES.dirty=!0),this.pixelStoreUnpack.dirty=!0,this.pixelStoreUnpackPremultiplyAlpha.dirty=!0,this.pixelStoreUnpackFlipY.dirty=!0},Pt.prototype.createIndexBuffer=function(t,e){return new V(this,t,e)},Pt.prototype.createVertexBuffer=function(t,e,r){return new j(this,t,e,r)},Pt.prototype.createRenderbuffer=function(t,e,r){var i=this.gl,n=i.createRenderbuffer()
return this.bindRenderbuffer.set(n),i.renderbufferStorage(i.RENDERBUFFER,t,e,r),this.bindRenderbuffer.set(null),n},Pt.prototype.createFramebuffer=function(t,e,r){return new Tt(this,t,e,r)},Pt.prototype.clear=function(t){var e=t.color,r=t.depth,i=this.gl,n=0
e&&(n|=i.COLOR_BUFFER_BIT,this.clearColor.set(e),this.colorMask.set([!0,!0,!0,!0])),void 0!==r&&(n|=i.DEPTH_BUFFER_BIT,this.depthRange.set([0,1]),this.clearDepth.set(r),this.depthMask.set(!0)),i.clear(n)},Pt.prototype.setCullFace=function(t){!1===t.enable?this.cullFace.set(!1):(this.cullFace.set(!0),this.cullFaceSide.set(t.mode),this.frontFace.set(t.frontFace))},Pt.prototype.setDepthMode=function(t){t.func!==this.gl.ALWAYS||t.mask?(this.depthTest.set(!0),this.depthFunc.set(t.func),this.depthMask.set(t.mask),this.depthRange.set(t.range)):this.depthTest.set(!1)},Pt.prototype.setStencilMode=function(t){t.test.func!==this.gl.ALWAYS||t.mask?(this.stencilTest.set(!0),this.stencilMask.set(t.mask),this.stencilOp.set([t.fail,t.depthFail,t.pass]),this.stencilFunc.set({func:t.test.func,ref:t.ref,mask:t.test.mask})):this.stencilTest.set(!1)},Pt.prototype.setColorMode=function(e){t.deepEqual(e.blendFunction,At.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(e.blendFunction),this.blendColor.set(e.blendColor)),this.colorMask.set(e.mask)},Pt.prototype.unbindVAO=function(){this.extVertexArrayObject&&this.bindVertexArrayOES.set(null)}
var Ct=function(e){function r(r,i,n){var o=this
e.call(this),this.id=r,this.dispatcher=n,this.on("data",(function(t){"source"===t.dataType&&"metadata"===t.sourceDataType&&(o._sourceLoaded=!0),o._sourceLoaded&&!o._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(o.reload(),o.transform&&o.update(o.transform))})),this.on("error",(function(){o._sourceErrored=!0})),this._source=function(e,r,i,n){var o=new R[r.type](e,r,i,n)
if(o.id!==e)throw new Error("Expected Source id to be "+e+" instead of "+o.id)
return t.bindAll(["load","abort","unload","serialize","prepare"],o),o}(r,i,n,this),this._tiles={},this._cache=new U(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._loadedParentTiles={},this._coveredTiles={},this._state=new t.SourceFeatureState}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.onAdd=function(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(t)},r.prototype.onRemove=function(t){this._source&&this._source.onRemove&&this._source.onRemove(t)},r.prototype.loaded=function(){if(this._sourceErrored)return!0
if(!this._sourceLoaded)return!1
if(!this._source.loaded())return!1
for(var t in this._tiles){var e=this._tiles[t]
if("loaded"!==e.state&&"errored"!==e.state)return!1}return!0},r.prototype.getSource=function(){return this._source},r.prototype.pause=function(){this._paused=!0},r.prototype.resume=function(){if(this._paused){var t=this._shouldReloadOnResume
this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform)}},r.prototype._loadTile=function(t,e){return this._source.loadTile(t,e)},r.prototype._unloadTile=function(t){if(this._source.unloadTile)return this._source.unloadTile(t,(function(){}))},r.prototype._abortTile=function(t){if(this._source.abortTile)return this._source.abortTile(t,(function(){}))},r.prototype.serialize=function(){return this._source.serialize()},r.prototype.prepare=function(t){for(var e in this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null),this._tiles){var r=this._tiles[e]
r.upload(t),r.prepare(this.map.style.imageManager)}},r.prototype.getIds=function(){return t.values(this._tiles).map((function(t){return t.tileID})).sort(kt).map((function(t){return t.key}))},r.prototype.getRenderableIds=function(e){var r=this,i=[]
for(var n in this._tiles)this._isIdRenderable(n,e)&&i.push(this._tiles[n])
return e?i.sort((function(e,i){var n=e.tileID,o=i.tileID,a=new t.Point(n.canonical.x,n.canonical.y)._rotate(r.transform.angle),s=new t.Point(o.canonical.x,o.canonical.y)._rotate(r.transform.angle)
return n.overscaledZ-o.overscaledZ||s.y-a.y||s.x-a.x})).map((function(t){return t.tileID.key})):i.map((function(t){return t.tileID})).sort(kt).map((function(t){return t.key}))},r.prototype.hasRenderableParent=function(t){var e=this.findLoadedParent(t,0)
return!!e&&this._isIdRenderable(e.tileID.key)},r.prototype._isIdRenderable=function(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())},r.prototype.reload=function(){if(this._paused)this._shouldReloadOnResume=!0
else for(var t in this._cache.reset(),this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(t,"reloading")},r.prototype._reloadTile=function(t,e){var r=this._tiles[t]
r&&("loading"!==r.state&&(r.state=e),this._loadTile(r,this._tileLoaded.bind(this,r,t,e)))},r.prototype._tileLoaded=function(e,r,i,n){if(n)return e.state="errored",void(404!==n.status?this._source.fire(new t.ErrorEvent(n,{tile:e})):this.update(this.transform))
e.timeAdded=t.browser.now(),"expired"===i&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(r,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._state.initializeTileState(e,this.map?this.map.painter:null),this._source.fire(new t.Event("data",{dataType:"source",tile:e,coord:e.tileID}))},r.prototype._backfillDEM=function(t){for(var e=this.getRenderableIds(),r=0;r<e.length;r++){var i=e[r]
if(t.neighboringTiles&&t.neighboringTiles[i]){var n=this.getTileByID(i)
o(t,n),o(n,t)}}function o(t,e){t.needsHillshadePrepare=!0
var r=e.tileID.canonical.x-t.tileID.canonical.x,i=e.tileID.canonical.y-t.tileID.canonical.y,n=Math.pow(2,t.tileID.canonical.z),o=e.tileID.key
0===r&&0===i||Math.abs(i)>1||(Math.abs(r)>1&&(1===Math.abs(r+n)?r+=n:1===Math.abs(r-n)&&(r-=n)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,r,i),t.neighboringTiles&&t.neighboringTiles[o]&&(t.neighboringTiles[o].backfilled=!0)))}},r.prototype.getTile=function(t){return this.getTileByID(t.key)},r.prototype.getTileByID=function(t){return this._tiles[t]},r.prototype._retainLoadedChildren=function(t,e,r,i){for(var n in this._tiles){var o=this._tiles[n]
if(!(i[n]||!o.hasData()||o.tileID.overscaledZ<=e||o.tileID.overscaledZ>r)){for(var a=o.tileID;o&&o.tileID.overscaledZ>e+1;){var s=o.tileID.scaledTo(o.tileID.overscaledZ-1);(o=this._tiles[s.key])&&o.hasData()&&(a=s)}for(var l=a;l.overscaledZ>e;)if(t[(l=l.scaledTo(l.overscaledZ-1)).key]){i[a.key]=a
break}}}},r.prototype.findLoadedParent=function(t,e){if(t.key in this._loadedParentTiles){var r=this._loadedParentTiles[t.key]
return r&&r.tileID.overscaledZ>=e?r:null}for(var i=t.overscaledZ-1;i>=e;i--){var n=t.scaledTo(i),o=this._getLoadedTile(n)
if(o)return o}},r.prototype._getLoadedTile=function(t){var e=this._tiles[t.key]
return e&&e.hasData()?e:this._cache.getByKey(t.wrapped().key)},r.prototype.updateCacheSize=function(t){var e=Math.ceil(t.width/this._source.tileSize)+1,r=Math.ceil(t.height/this._source.tileSize)+1,i=Math.floor(e*r*5),n="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,i):i
this._cache.setMaxSize(n)},r.prototype.handleWrapJump=function(t){var e=Math.round((t-(void 0===this._prevLng?t:this._prevLng))/360)
if(this._prevLng=t,e){var r={}
for(var i in this._tiles){var n=this._tiles[i]
n.tileID=n.tileID.unwrapTo(n.tileID.wrap+e),r[n.tileID.key]=n}for(var o in this._tiles=r,this._timers)clearTimeout(this._timers[o]),delete this._timers[o]
for(var a in this._tiles)this._setTileReloadTimer(a,this._tiles[a])}},r.prototype.update=function(e){var i=this
if(this.transform=e,this._sourceLoaded&&!this._paused){var n
this.updateCacheSize(e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used?this._source.tileID?n=e.getVisibleUnwrappedCoordinates(this._source.tileID).map((function(e){return new t.OverscaledTileID(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y)})):(n=e.coveringTiles({tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled}),this._source.hasTile&&(n=n.filter((function(t){return i._source.hasTile(t)})))):n=[]
var o=e.coveringZoomLevel(this._source),a=Math.max(o-r.maxOverzooming,this._source.minzoom),s=Math.max(o+r.maxUnderzooming,this._source.minzoom),l=this._updateRetainedTiles(n,o)
if(Mt(this._source.type)){for(var u={},c={},p=0,h=Object.keys(l);p<h.length;p+=1){var f=h[p],d=l[f],m=this._tiles[f]
if(m&&!(m.fadeEndTime&&m.fadeEndTime<=t.browser.now())){var y=this.findLoadedParent(d,a)
y&&(this._addTile(y.tileID),u[y.tileID.key]=y.tileID),c[f]=d}}for(var g in this._retainLoadedChildren(c,o,s,l),u)l[g]||(this._coveredTiles[g]=!0,l[g]=u[g])}for(var _ in l)this._tiles[_].clearFadeHold()
for(var v=0,x=t.keysDifference(this._tiles,l);v<x.length;v+=1){var b=x[v],w=this._tiles[b]
w.hasSymbolBuckets&&!w.holdingForFade()?w.setHoldDuration(this.map._fadeDuration):w.hasSymbolBuckets&&!w.symbolFadeFinished()||this._removeTile(b)}this._updateLoadedParentTileCache()}},r.prototype.releaseSymbolFadeTiles=function(){for(var t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(t)},r.prototype._updateRetainedTiles=function(t,e){for(var i={},n={},o=Math.max(e-r.maxOverzooming,this._source.minzoom),a=Math.max(e+r.maxUnderzooming,this._source.minzoom),s={},l=0,u=t;l<u.length;l+=1){var c=u[l],p=this._addTile(c)
i[c.key]=c,p.hasData()||e<this._source.maxzoom&&(s[c.key]=c)}this._retainLoadedChildren(s,e,a,i)
for(var h=0,f=t;h<f.length;h+=1){var d=f[h],m=this._tiles[d.key]
if(!m.hasData()){if(e+1>this._source.maxzoom){var y=d.children(this._source.maxzoom)[0],g=this.getTile(y)
if(g&&g.hasData()){i[y.key]=y
continue}}else{var _=d.children(this._source.maxzoom)
if(i[_[0].key]&&i[_[1].key]&&i[_[2].key]&&i[_[3].key])continue}for(var v=m.wasRequested(),x=d.overscaledZ-1;x>=o;--x){var b=d.scaledTo(x)
if(n[b.key])break
if(n[b.key]=!0,!(m=this.getTile(b))&&v&&(m=this._addTile(b)),m&&(i[b.key]=b,v=m.wasRequested(),m.hasData()))break}}}return i},r.prototype._updateLoadedParentTileCache=function(){for(var t in this._loadedParentTiles={},this._tiles){for(var e=[],r=void 0,i=this._tiles[t].tileID;i.overscaledZ>0;){if(i.key in this._loadedParentTiles){r=this._loadedParentTiles[i.key]
break}e.push(i.key)
var n=i.scaledTo(i.overscaledZ-1)
if(r=this._getLoadedTile(n))break
i=n}for(var o=0,a=e;o<a.length;o+=1)this._loadedParentTiles[a[o]]=r}},r.prototype._addTile=function(e){var r=this._tiles[e.key]
if(r)return r;(r=this._cache.getAndRemove(e))&&(this._setTileReloadTimer(e.key,r),r.tileID=e,this._state.initializeTileState(r,this.map?this.map.painter:null),this._cacheTimers[e.key]&&(clearTimeout(this._cacheTimers[e.key]),delete this._cacheTimers[e.key],this._setTileReloadTimer(e.key,r)))
var i=Boolean(r)
return i||(r=new t.Tile(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(r,this._tileLoaded.bind(this,r,e.key,r.state))),r?(r.uses++,this._tiles[e.key]=r,i||this._source.fire(new t.Event("dataloading",{tile:r,coord:r.tileID,dataType:"source"})),r):null},r.prototype._setTileReloadTimer=function(t,e){var r=this
t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t])
var i=e.getExpiryTimeout()
i&&(this._timers[t]=setTimeout((function(){r._reloadTile(t,"expired"),delete r._timers[t]}),i))},r.prototype._removeTile=function(t){var e=this._tiles[t]
e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))))},r.prototype.clearTiles=function(){for(var t in this._shouldReloadOnResume=!1,this._paused=!1,this._tiles)this._removeTile(t)
this._cache.reset()},r.prototype.tilesIn=function(e,r,i){var n=this,o=[],a=this.transform
if(!a)return o
for(var s=i?a.getCameraQueryGeometry(e):e,l=e.map((function(t){return a.pointCoordinate(t)})),u=s.map((function(t){return a.pointCoordinate(t)})),c=this.getIds(),p=1/0,h=1/0,f=-1/0,d=-1/0,m=0,y=u;m<y.length;m+=1){var g=y[m]
p=Math.min(p,g.x),h=Math.min(h,g.y),f=Math.max(f,g.x),d=Math.max(d,g.y)}for(var _=function(e){var i=n._tiles[c[e]]
if(!i.holdingForFade()){var s=i.tileID,m=Math.pow(2,a.zoom-i.tileID.overscaledZ),y=r*i.queryPadding*t.EXTENT/i.tileSize/m,g=[s.getTilePoint(new t.MercatorCoordinate(p,h)),s.getTilePoint(new t.MercatorCoordinate(f,d))]
if(g[0].x-y<t.EXTENT&&g[0].y-y<t.EXTENT&&g[1].x+y>=0&&g[1].y+y>=0){var _=l.map((function(t){return s.getTilePoint(t)})),v=u.map((function(t){return s.getTilePoint(t)}))
o.push({tile:i,tileID:s,queryGeometry:_,cameraQueryGeometry:v,scale:m})}}},v=0;v<c.length;v++)_(v)
return o},r.prototype.getVisibleCoordinates=function(t){for(var e=this,r=this.getRenderableIds(t).map((function(t){return e._tiles[t].tileID})),i=0,n=r;i<n.length;i+=1){var o=n[i]
o.posMatrix=this.transform.calculatePosMatrix(o.toUnwrapped())}return r},r.prototype.hasTransition=function(){if(this._source.hasTransition())return!0
if(Mt(this._source.type))for(var e in this._tiles){var r=this._tiles[e]
if(void 0!==r.fadeEndTime&&r.fadeEndTime>=t.browser.now())return!0}return!1},r.prototype.setFeatureState=function(t,e,r){this._state.updateState(t=t||"_geojsonTileLayer",e,r)},r.prototype.removeFeatureState=function(t,e,r){this._state.removeFeatureState(t=t||"_geojsonTileLayer",e,r)},r.prototype.getFeatureState=function(t,e){return this._state.getState(t=t||"_geojsonTileLayer",e)},r.prototype.setDependencies=function(t,e,r){var i=this._tiles[t]
i&&i.setDependencies(e,r)},r.prototype.reloadTilesForDependencies=function(t,e){for(var r in this._tiles)this._tiles[r].hasDependency(t,e)&&this._reloadTile(r,"reloading")
this._cache.filter((function(r){return!r.hasDependency(t,e)}))},r}(t.Evented)
function kt(t,e){var r=Math.abs(2*t.wrap)-+(t.wrap<0),i=Math.abs(2*e.wrap)-+(e.wrap<0)
return t.overscaledZ-e.overscaledZ||i-r||e.canonical.y-t.canonical.y||e.canonical.x-t.canonical.x}function Mt(t){return"raster"===t||"image"===t||"video"===t}function Dt(){return new t.window.Worker(Xn.workerUrl)}Ct.maxOverzooming=10,Ct.maxUnderzooming=3
var Lt="mapboxgl_preloaded_worker_pool",Rt=function(){this.active={}}
Rt.prototype.acquire=function(t){if(!this.workers)for(this.workers=[];this.workers.length<Rt.workerCount;)this.workers.push(new Dt)
return this.active[t]=!0,this.workers.slice()},Rt.prototype.release=function(t){delete this.active[t],0===this.numActive()&&(this.workers.forEach((function(t){t.terminate()})),this.workers=null)},Rt.prototype.isPreloaded=function(){return!!this.active[Lt]},Rt.prototype.numActive=function(){return Object.keys(this.active).length}
var Bt,Ft=Math.floor(t.browser.hardwareConcurrency/2)
function Ot(){return Bt||(Bt=new Rt),Bt}function Ut(e,r){var i={}
for(var n in e)"ref"!==n&&(i[n]=e[n])
return t.refProperties.forEach((function(t){t in r&&(i[t]=r[t])})),i}function Vt(t){t=t.slice()
for(var e=Object.create(null),r=0;r<t.length;r++)e[t[r].id]=t[r]
for(var i=0;i<t.length;i++)"ref"in t[i]&&(t[i]=Ut(t[i],e[t[i].ref]))
return t}Rt.workerCount=Math.max(Math.min(Ft,6),1)
var Nt={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"}
function jt(t,e,r){r.push({command:Nt.addSource,args:[t,e[t]]})}function qt(t,e,r){e.push({command:Nt.removeSource,args:[t]}),r[t]=!0}function Zt(t,e,r,i){qt(t,r,i),jt(t,e,r)}function Gt(e,r,i){var n
for(n in e[i])if(e[i].hasOwnProperty(n)&&"data"!==n&&!t.deepEqual(e[i][n],r[i][n]))return!1
for(n in r[i])if(r[i].hasOwnProperty(n)&&"data"!==n&&!t.deepEqual(e[i][n],r[i][n]))return!1
return!0}function Xt(e,r,i,n,o,a){var s
for(s in r=r||{},e=e||{})e.hasOwnProperty(s)&&(t.deepEqual(e[s],r[s])||i.push({command:a,args:[n,s,r[s],o]}))
for(s in r)r.hasOwnProperty(s)&&!e.hasOwnProperty(s)&&(t.deepEqual(e[s],r[s])||i.push({command:a,args:[n,s,r[s],o]}))}function Wt(t){return t.id}function Kt(t,e){return t[e.id]=e,t}var Ht=function(t,e){this.reset(t,e)}
Ht.prototype.reset=function(t,e){this.points=t||[],this._distances=[0]
for(var r=1;r<this.points.length;r++)this._distances[r]=this._distances[r-1]+this.points[r].dist(this.points[r-1])
this.length=this._distances[this._distances.length-1],this.padding=Math.min(e||0,.5*this.length),this.paddedLength=this.length-2*this.padding},Ht.prototype.lerp=function(e){if(1===this.points.length)return this.points[0]
e=t.clamp(e,0,1)
for(var r=1,i=this._distances[r],n=e*this.paddedLength+this.padding;i<n&&r<this._distances.length;)i=this._distances[++r]
var o=r-1,a=this._distances[o],s=i-a,l=s>0?(n-a)/s:0
return this.points[o].mult(1-l).add(this.points[r].mult(l))}
var Jt=function(t,e,r){var i=this.boxCells=[],n=this.circleCells=[]
this.xCellCount=Math.ceil(t/r),this.yCellCount=Math.ceil(e/r)
for(var o=0;o<this.xCellCount*this.yCellCount;o++)i.push([]),n.push([])
this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=t,this.height=e,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/e,this.boxUid=0,this.circleUid=0}
function Yt(e,r,i,n,o){var a=t.create()
return r?(t.scale(a,a,[1/o,1/o,1]),i||t.rotateZ(a,a,n.angle)):t.multiply(a,n.labelPlaneMatrix,e),a}function Qt(e,r,i,n,o){if(r){var a=t.clone(e)
return t.scale(a,a,[o,o,1]),i||t.rotateZ(a,a,-n.angle),a}return n.glCoordMatrix}function $t(e,r){var i=[e.x,e.y,0,1]
ce(i,i,r)
var n=i[3]
return{point:new t.Point(i[0]/n,i[1]/n),signedDistanceFromCamera:n}}function te(t,e){return.5+t/e*.5}function ee(t,e){var r=t[0]/t[3],i=t[1]/t[3]
return r>=-e[0]&&r<=e[0]&&i>=-e[1]&&i<=e[1]}function re(e,r,i,n,o,a,s,l){var u=n?e.textSizeData:e.iconSizeData,c=t.evaluateSizeForZoom(u,i.transform.zoom),p=[256/i.width*2+1,256/i.height*2+1],h=n?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray
h.clear()
for(var f=e.lineVertexArray,d=n?e.text.placedSymbolArray:e.icon.placedSymbolArray,m=i.transform.width/i.transform.height,y=!1,g=0;g<d.length;g++){var _=d.get(g)
if(_.hidden||_.writingMode===t.WritingMode.vertical&&!y)ue(_.numGlyphs,h)
else{y=!1
var v=[_.anchorX,_.anchorY,0,1]
if(t.transformMat4(v,v,r),ee(v,p)){var x=te(i.transform.cameraToCenterDistance,v[3]),b=t.evaluateSizeForFeature(u,c,_),w=s?b/x:b*x,S=new t.Point(_.anchorX,_.anchorY),T=$t(S,o).point,I={},E=oe(_,w,!1,l,r,o,a,e.glyphOffsetArray,f,h,T,S,I,m)
y=E.useVertical,(E.notEnoughRoom||y||E.needsFlipping&&oe(_,w,!0,l,r,o,a,e.glyphOffsetArray,f,h,T,S,I,m).notEnoughRoom)&&ue(_.numGlyphs,h)}else ue(_.numGlyphs,h)}}n?e.text.dynamicLayoutVertexBuffer.updateData(h):e.icon.dynamicLayoutVertexBuffer.updateData(h)}function ie(t,e,r,i,n,o,a,s,l,u,c){var p=s.glyphStartIndex+s.numGlyphs,h=s.lineStartIndex,f=s.lineStartIndex+s.lineLength,d=e.getoffsetX(s.glyphStartIndex),m=e.getoffsetX(p-1),y=se(t*d,r,i,n,o,a,s.segment,h,f,l,u,c)
if(!y)return null
var g=se(t*m,r,i,n,o,a,s.segment,h,f,l,u,c)
return g?{first:y,last:g}:null}function ne(e,r,i,n){return e===t.WritingMode.horizontal&&Math.abs(i.y-r.y)>Math.abs(i.x-r.x)*n?{useVertical:!0}:(e===t.WritingMode.vertical?r.y<i.y:r.x>i.x)?{needsFlipping:!0}:null}function oe(e,r,i,n,o,a,s,l,u,c,p,h,f,d){var m,y=r/24,g=e.lineOffsetX*y,_=e.lineOffsetY*y
if(e.numGlyphs>1){var v=e.glyphStartIndex+e.numGlyphs,x=e.lineStartIndex,b=e.lineStartIndex+e.lineLength,w=ie(y,l,g,_,i,p,h,e,u,a,f)
if(!w)return{notEnoughRoom:!0}
var S=$t(w.first.point,s).point,T=$t(w.last.point,s).point
if(n&&!i){var I=ne(e.writingMode,S,T,d)
if(I)return I}m=[w.first]
for(var E=e.glyphStartIndex+1;E<v-1;E++)m.push(se(y*l.getoffsetX(E),g,_,i,p,h,e.segment,x,b,u,a,f))
m.push(w.last)}else{if(n&&!i){var A=$t(h,o).point,z=e.lineStartIndex+e.segment+1,P=new t.Point(u.getx(z),u.gety(z)),C=$t(P,o),k=C.signedDistanceFromCamera>0?C.point:ae(h,P,A,1,o),M=ne(e.writingMode,A,k,d)
if(M)return M}var D=se(y*l.getoffsetX(e.glyphStartIndex),g,_,i,p,h,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,u,a,f)
if(!D)return{notEnoughRoom:!0}
m=[D]}for(var L=0,R=m;L<R.length;L+=1){var B=R[L]
t.addDynamicAttributes(c,B.point,B.angle)}return{}}function ae(t,e,r,i,n){var o=$t(t.add(t.sub(e)._unit()),n).point,a=r.sub(o)
return r.add(a._mult(i/a.mag()))}function se(e,r,i,n,o,a,s,l,u,c,p,h){var f=n?e-r:e+r,d=f>0?1:-1,m=0
n&&(d*=-1,m=Math.PI),d<0&&(m+=Math.PI)
for(var y=d>0?l+s:l+s+1,g=o,_=o,v=0,x=0,b=Math.abs(f),w=[];v+x<=b;){if((y+=d)<l||y>=u)return null
if(_=g,w.push(g),void 0===(g=h[y])){var S=new t.Point(c.getx(y),c.gety(y)),T=$t(S,p)
if(T.signedDistanceFromCamera>0)g=h[y]=T.point
else{var I=y-d
g=ae(0===v?a:new t.Point(c.getx(I),c.gety(I)),S,_,b-v+1,p)}}v+=x,x=_.dist(g)}var E=(b-v)/x,A=g.sub(_),z=A.mult(E)._add(_)
z._add(A._unit()._perp()._mult(i*d))
var P=m+Math.atan2(g.y-_.y,g.x-_.x)
return w.push(z),{point:z,angle:P,path:w}}Jt.prototype.keysLength=function(){return this.boxKeys.length+this.circleKeys.length},Jt.prototype.insert=function(t,e,r,i,n){this._forEachCell(e,r,i,n,this._insertBoxCell,this.boxUid++),this.boxKeys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(i),this.bboxes.push(n)},Jt.prototype.insertCircle=function(t,e,r,i){this._forEachCell(e-i,r-i,e+i,r+i,this._insertCircleCell,this.circleUid++),this.circleKeys.push(t),this.circles.push(e),this.circles.push(r),this.circles.push(i)},Jt.prototype._insertBoxCell=function(t,e,r,i,n,o){this.boxCells[n].push(o)},Jt.prototype._insertCircleCell=function(t,e,r,i,n,o){this.circleCells[n].push(o)},Jt.prototype._query=function(t,e,r,i,n,o){if(r<0||t>this.width||i<0||e>this.height)return!n&&[]
var a=[]
if(t<=0&&e<=0&&this.width<=r&&this.height<=i){if(n)return!0
for(var s=0;s<this.boxKeys.length;s++)a.push({key:this.boxKeys[s],x1:this.bboxes[4*s],y1:this.bboxes[4*s+1],x2:this.bboxes[4*s+2],y2:this.bboxes[4*s+3]})
for(var l=0;l<this.circleKeys.length;l++){var u=this.circles[3*l],c=this.circles[3*l+1],p=this.circles[3*l+2]
a.push({key:this.circleKeys[l],x1:u-p,y1:c-p,x2:u+p,y2:c+p})}return o?a.filter(o):a}return this._forEachCell(t,e,r,i,this._queryCell,a,{hitTest:n,seenUids:{box:{},circle:{}}},o),n?a.length>0:a},Jt.prototype._queryCircle=function(t,e,r,i,n){var o=t-r,a=t+r,s=e-r,l=e+r
if(a<0||o>this.width||l<0||s>this.height)return!i&&[]
var u=[]
return this._forEachCell(o,s,a,l,this._queryCellCircle,u,{hitTest:i,circle:{x:t,y:e,radius:r},seenUids:{box:{},circle:{}}},n),i?u.length>0:u},Jt.prototype.query=function(t,e,r,i,n){return this._query(t,e,r,i,!1,n)},Jt.prototype.hitTest=function(t,e,r,i,n){return this._query(t,e,r,i,!0,n)},Jt.prototype.hitTestCircle=function(t,e,r,i){return this._queryCircle(t,e,r,!0,i)},Jt.prototype._queryCell=function(t,e,r,i,n,o,a,s){var l=a.seenUids,u=this.boxCells[n]
if(null!==u)for(var c=this.bboxes,p=0,h=u;p<h.length;p+=1){var f=h[p]
if(!l.box[f]){l.box[f]=!0
var d=4*f
if(t<=c[d+2]&&e<=c[d+3]&&r>=c[d+0]&&i>=c[d+1]&&(!s||s(this.boxKeys[f]))){if(a.hitTest)return o.push(!0),!0
o.push({key:this.boxKeys[f],x1:c[d],y1:c[d+1],x2:c[d+2],y2:c[d+3]})}}}var m=this.circleCells[n]
if(null!==m)for(var y=this.circles,g=0,_=m;g<_.length;g+=1){var v=_[g]
if(!l.circle[v]){l.circle[v]=!0
var x=3*v
if(this._circleAndRectCollide(y[x],y[x+1],y[x+2],t,e,r,i)&&(!s||s(this.circleKeys[v]))){if(a.hitTest)return o.push(!0),!0
var b=y[x],w=y[x+1],S=y[x+2]
o.push({key:this.circleKeys[v],x1:b-S,y1:w-S,x2:b+S,y2:w+S})}}}},Jt.prototype._queryCellCircle=function(t,e,r,i,n,o,a,s){var l=a.circle,u=a.seenUids,c=this.boxCells[n]
if(null!==c)for(var p=this.bboxes,h=0,f=c;h<f.length;h+=1){var d=f[h]
if(!u.box[d]){u.box[d]=!0
var m=4*d
if(this._circleAndRectCollide(l.x,l.y,l.radius,p[m+0],p[m+1],p[m+2],p[m+3])&&(!s||s(this.boxKeys[d])))return o.push(!0),!0}}var y=this.circleCells[n]
if(null!==y)for(var g=this.circles,_=0,v=y;_<v.length;_+=1){var x=v[_]
if(!u.circle[x]){u.circle[x]=!0
var b=3*x
if(this._circlesCollide(g[b],g[b+1],g[b+2],l.x,l.y,l.radius)&&(!s||s(this.circleKeys[x])))return o.push(!0),!0}}},Jt.prototype._forEachCell=function(t,e,r,i,n,o,a,s){for(var l=this._convertToXCellCoord(t),u=this._convertToYCellCoord(e),c=this._convertToXCellCoord(r),p=this._convertToYCellCoord(i),h=l;h<=c;h++)for(var f=u;f<=p;f++)if(n.call(this,t,e,r,i,this.xCellCount*f+h,o,a,s))return},Jt.prototype._convertToXCellCoord=function(t){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(t*this.xScale)))},Jt.prototype._convertToYCellCoord=function(t){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(t*this.yScale)))},Jt.prototype._circlesCollide=function(t,e,r,i,n,o){var a=i-t,s=n-e,l=r+o
return l*l>a*a+s*s},Jt.prototype._circleAndRectCollide=function(t,e,r,i,n,o,a){var s=(o-i)/2,l=Math.abs(t-(i+s))
if(l>s+r)return!1
var u=(a-n)/2,c=Math.abs(e-(n+u))
if(c>u+r)return!1
if(l<=s||c<=u)return!0
var p=l-s,h=c-u
return p*p+h*h<=r*r}
var le=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0])
function ue(t,e){for(var r=0;r<t;r++){var i=e.length
e.resize(i+4),e.float32.set(le,3*i)}}function ce(t,e,r){var i=e[0],n=e[1]
return t[0]=r[0]*i+r[4]*n+r[12],t[1]=r[1]*i+r[5]*n+r[13],t[3]=r[3]*i+r[7]*n+r[15],t}var pe=function(t,e,r){void 0===e&&(e=new Jt(t.width+200,t.height+200,25)),void 0===r&&(r=new Jt(t.width+200,t.height+200,25)),this.transform=t,this.grid=e,this.ignoredGrid=r,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+100,this.screenBottomBoundary=t.height+100,this.gridRightBoundary=t.width+200,this.gridBottomBoundary=t.height+200}
function he(e,r,i){return r*(t.EXTENT/(e.tileSize*Math.pow(2,i-e.tileID.overscaledZ)))}pe.prototype.placeCollisionBox=function(t,e,r,i,n){var o=this.projectAndGetPerspectiveRatio(i,t.anchorPointX,t.anchorPointY),a=r*o.perspectiveRatio,s=t.x1*a+o.point.x,l=t.y1*a+o.point.y,u=t.x2*a+o.point.x,c=t.y2*a+o.point.y
return!this.isInsideGrid(s,l,u,c)||!e&&this.grid.hitTest(s,l,u,c,n)?{box:[],offscreen:!1}:{box:[s,l,u,c],offscreen:this.isOffscreen(s,l,u,c)}},pe.prototype.placeCollisionCircles=function(e,r,i,n,o,a,s,l,u,c,p,h,f){var d=[],m=new t.Point(r.anchorX,r.anchorY),y=$t(m,a),g=te(this.transform.cameraToCenterDistance,y.signedDistanceFromCamera),_=(c?o/g:o*g)/t.ONE_EM,v=$t(m,s).point,x=ie(_,n,r.lineOffsetX*_,r.lineOffsetY*_,!1,v,m,r,i,s,{}),b=!1,w=!1,S=!0
if(x){for(var T=.5*h*g+f,I=new t.Point(-100,-100),E=new t.Point(this.screenRightBoundary,this.screenBottomBoundary),A=new Ht,z=x.first,P=x.last,C=[],k=z.path.length-1;k>=1;k--)C.push(z.path[k])
for(var M=1;M<P.path.length;M++)C.push(P.path[M])
var D=2.5*T
if(l){var L=C.map((function(t){return $t(t,l)}))
C=L.some((function(t){return t.signedDistanceFromCamera<=0}))?[]:L.map((function(t){return t.point}))}var R=[]
if(C.length>0){for(var B=C[0].clone(),F=C[0].clone(),O=1;O<C.length;O++)B.x=Math.min(B.x,C[O].x),B.y=Math.min(B.y,C[O].y),F.x=Math.max(F.x,C[O].x),F.y=Math.max(F.y,C[O].y)
R=B.x>=I.x&&F.x<=E.x&&B.y>=I.y&&F.y<=E.y?[C]:F.x<I.x||B.x>E.x||F.y<I.y||B.y>E.y?[]:t.clipLine([C],I.x,I.y,E.x,E.y)}for(var U=0,V=R;U<V.length;U+=1){var N
A.reset(V[U],.25*T),N=A.length<=.5*T?1:Math.ceil(A.paddedLength/D)+1
for(var j=0;j<N;j++){var q=j/Math.max(N-1,1),Z=A.lerp(q),G=Z.x+100,X=Z.y+100
d.push(G,X,T,0)
var W=G-T,K=X-T,H=G+T,J=X+T
if(S=S&&this.isOffscreen(W,K,H,J),w=w||this.isInsideGrid(W,K,H,J),!e&&this.grid.hitTestCircle(G,X,T,p)&&(b=!0,!u))return{circles:[],offscreen:!1,collisionDetected:b}}}}return{circles:!u&&b||!w?[]:d,offscreen:S,collisionDetected:b}},pe.prototype.queryRenderedSymbols=function(e){if(0===e.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return{}
for(var r=[],i=1/0,n=1/0,o=-1/0,a=-1/0,s=0,l=e;s<l.length;s+=1){var u=l[s],c=new t.Point(u.x+100,u.y+100)
i=Math.min(i,c.x),n=Math.min(n,c.y),o=Math.max(o,c.x),a=Math.max(a,c.y),r.push(c)}for(var p={},h={},f=0,d=this.grid.query(i,n,o,a).concat(this.ignoredGrid.query(i,n,o,a));f<d.length;f+=1){var m=d[f],y=m.key
if(void 0===p[y.bucketInstanceId]&&(p[y.bucketInstanceId]={}),!p[y.bucketInstanceId][y.featureIndex]){var g=[new t.Point(m.x1,m.y1),new t.Point(m.x2,m.y1),new t.Point(m.x2,m.y2),new t.Point(m.x1,m.y2)]
t.polygonIntersectsPolygon(r,g)&&(p[y.bucketInstanceId][y.featureIndex]=!0,void 0===h[y.bucketInstanceId]&&(h[y.bucketInstanceId]=[]),h[y.bucketInstanceId].push(y.featureIndex))}}return h},pe.prototype.insertCollisionBox=function(t,e,r,i,n){(e?this.ignoredGrid:this.grid).insert({bucketInstanceId:r,featureIndex:i,collisionGroupID:n},t[0],t[1],t[2],t[3])},pe.prototype.insertCollisionCircles=function(t,e,r,i,n){for(var o=e?this.ignoredGrid:this.grid,a={bucketInstanceId:r,featureIndex:i,collisionGroupID:n},s=0;s<t.length;s+=4)o.insertCircle(a,t[s],t[s+1],t[s+2])},pe.prototype.projectAndGetPerspectiveRatio=function(e,r,i){var n=[r,i,0,1]
return ce(n,n,e),{point:new t.Point((n[0]/n[3]+1)/2*this.transform.width+100,(-n[1]/n[3]+1)/2*this.transform.height+100),perspectiveRatio:.5+this.transform.cameraToCenterDistance/n[3]*.5}},pe.prototype.isOffscreen=function(t,e,r,i){return r<100||t>=this.screenRightBoundary||i<100||e>this.screenBottomBoundary},pe.prototype.isInsideGrid=function(t,e,r,i){return r>=0&&t<this.gridRightBoundary&&i>=0&&e<this.gridBottomBoundary},pe.prototype.getViewportMatrix=function(){var e=t.identity([])
return t.translate(e,e,[-100,-100,0]),e}
var fe=function(t,e,r,i){this.opacity=t?Math.max(0,Math.min(1,t.opacity+(t.placed?e:-e))):i&&r?1:0,this.placed=r}
fe.prototype.isHidden=function(){return 0===this.opacity&&!this.placed}
var de=function(t,e,r,i,n){this.text=new fe(t?t.text:null,e,r,n),this.icon=new fe(t?t.icon:null,e,i,n)}
de.prototype.isHidden=function(){return this.text.isHidden()&&this.icon.isHidden()}
var me=function(t,e,r){this.text=t,this.icon=e,this.skipFade=r},ye=function(){this.invProjMatrix=t.create(),this.viewportMatrix=t.create(),this.circles=[]},ge=function(t,e,r,i,n){this.bucketInstanceId=t,this.featureIndex=e,this.sourceLayerIndex=r,this.bucketIndex=i,this.tileID=n},_e=function(t){this.crossSourceCollisions=t,this.maxGroupID=0,this.collisionGroups={}}
function ve(e,r,i,n,o){var a=t.getAnchorAlignment(e),s=-(a.horizontalAlign-.5)*r,l=-(a.verticalAlign-.5)*i,u=t.evaluateVariableOffset(e,n)
return new t.Point(s+u[0]*o,l+u[1]*o)}function xe(e,r,i,n,o,a){var s=e.x1,l=e.x2,u=e.y1,c=e.y2,p=e.anchorPointX,h=e.anchorPointY,f=new t.Point(r,i)
return n&&f._rotate(o?a:-a),{x1:s+f.x,y1:u+f.y,x2:l+f.x,y2:c+f.y,anchorPointX:p,anchorPointY:h}}_e.prototype.get=function(t){if(this.crossSourceCollisions)return{ID:0,predicate:null}
if(!this.collisionGroups[t]){var e=++this.maxGroupID
this.collisionGroups[t]={ID:e,predicate:function(t){return t.collisionGroupID===e}}}return this.collisionGroups[t]}
var be=function(t,e,r,i){this.transform=t.clone(),this.collisionIndex=new pe(this.transform),this.placements={},this.opacities={},this.variableOffsets={},this.stale=!1,this.commitTime=0,this.fadeDuration=e,this.retainedQueryData={},this.collisionGroups=new _e(r),this.collisionCircleArrays={},this.prevPlacement=i,i&&(i.prevPlacement=void 0),this.placedOrientations={}}
function we(t,e,r,i,n){t.emplaceBack(e?1:0,r?1:0,i||0,n||0),t.emplaceBack(e?1:0,r?1:0,i||0,n||0),t.emplaceBack(e?1:0,r?1:0,i||0,n||0),t.emplaceBack(e?1:0,r?1:0,i||0,n||0)}be.prototype.getBucketParts=function(e,r,i,n){var o=i.getBucket(r),a=i.latestFeatureIndex
if(o&&a&&r.id===o.layerIds[0]){var s=i.collisionBoxArray,l=o.layers[0].layout,u=Math.pow(2,this.transform.zoom-i.tileID.overscaledZ),c=i.tileSize/t.EXTENT,p=this.transform.calculatePosMatrix(i.tileID.toUnwrapped()),h="map"===l.get("text-pitch-alignment"),f="map"===l.get("text-rotation-alignment"),d=he(i,1,this.transform.zoom),m=Yt(p,h,f,this.transform,d),y=null
if(h){var g=Qt(p,h,f,this.transform,d)
y=t.multiply([],this.transform.labelPlaneMatrix,g)}this.retainedQueryData[o.bucketInstanceId]=new ge(o.bucketInstanceId,a,o.sourceLayerIndex,o.index,i.tileID)
var _={bucket:o,layout:l,posMatrix:p,textLabelPlaneMatrix:m,labelToScreenMatrix:y,scale:u,textPixelRatio:c,holdingForFade:i.holdingForFade(),collisionBoxArray:s,partiallyEvaluatedTextSize:t.evaluateSizeForZoom(o.textSizeData,this.transform.zoom),collisionGroup:this.collisionGroups.get(o.sourceID)}
if(n)for(var v=0,x=o.sortKeyRanges;v<x.length;v+=1){var b=x[v]
e.push({sortKey:b.sortKey,symbolInstanceStart:b.symbolInstanceStart,symbolInstanceEnd:b.symbolInstanceEnd,parameters:_})}else e.push({symbolInstanceStart:0,symbolInstanceEnd:o.symbolInstances.length,parameters:_})}},be.prototype.attemptAnchorPlacement=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d){var m,y=[p.textOffset0,p.textOffset1],g=ve(t,r,i,y,n),_=this.collisionIndex.placeCollisionBox(xe(e,g.x,g.y,o,a,this.transform.angle),c,s,l,u.predicate)
if(!d||0!==this.collisionIndex.placeCollisionBox(xe(d,g.x,g.y,o,a,this.transform.angle),c,s,l,u.predicate).box.length)return _.box.length>0?(this.prevPlacement&&this.prevPlacement.variableOffsets[p.crossTileID]&&this.prevPlacement.placements[p.crossTileID]&&this.prevPlacement.placements[p.crossTileID].text&&(m=this.prevPlacement.variableOffsets[p.crossTileID].anchor),this.variableOffsets[p.crossTileID]={textOffset:y,width:r,height:i,anchor:t,textBoxScale:n,prevAnchor:m},this.markUsedJustification(h,t,p,f),h.allowVerticalPlacement&&(this.markUsedOrientation(h,f,p),this.placedOrientations[p.crossTileID]=f),{shift:g,placedGlyphBoxes:_}):void 0},be.prototype.placeLayerBucketPart=function(e,r,i){var n=this,o=e.parameters,a=o.bucket,s=o.layout,l=o.posMatrix,u=o.textLabelPlaneMatrix,c=o.labelToScreenMatrix,p=o.textPixelRatio,h=o.holdingForFade,f=o.collisionBoxArray,d=o.partiallyEvaluatedTextSize,m=o.collisionGroup,y=s.get("text-optional"),g=s.get("icon-optional"),_=s.get("text-allow-overlap"),v=s.get("icon-allow-overlap"),x="map"===s.get("text-rotation-alignment"),b="map"===s.get("text-pitch-alignment"),w="none"!==s.get("icon-text-fit"),S="viewport-y"===s.get("symbol-z-order"),T=_&&(v||!a.hasIconData()||g),I=v&&(_||!a.hasTextData()||y)
!a.collisionArrays&&f&&a.deserializeCollisionBoxes(f)
var E=function(e,o){if(!r[e.crossTileID])if(h)n.placements[e.crossTileID]=new me(!1,!1,!1)
else{var f,S=!1,E=!1,A=!0,z=null,P={box:null,offscreen:null},C={box:null,offscreen:null},k=null,M=null,D=0,L=0,R=0
o.textFeatureIndex?D=o.textFeatureIndex:e.useRuntimeCollisionCircles&&(D=e.featureIndex),o.verticalTextFeatureIndex&&(L=o.verticalTextFeatureIndex)
var B=o.textBox
if(B){var F=function(r){var i=t.WritingMode.horizontal
if(a.allowVerticalPlacement&&!r&&n.prevPlacement){var o=n.prevPlacement.placedOrientations[e.crossTileID]
o&&(n.placedOrientations[e.crossTileID]=o,n.markUsedOrientation(a,i=o,e))}return i},O=function(r,i){if(a.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&o.verticalTextBox)for(var n=0,s=a.writingModes;n<s.length&&(s[n]===t.WritingMode.vertical?(P=i(),C=P):P=r(),!(P&&P.box&&P.box.length));n+=1);else P=r()}
if(s.get("text-variable-anchor")){var U=s.get("text-variable-anchor")
if(n.prevPlacement&&n.prevPlacement.variableOffsets[e.crossTileID]){var V=n.prevPlacement.variableOffsets[e.crossTileID]
U.indexOf(V.anchor)>0&&(U=U.filter((function(t){return t!==V.anchor}))).unshift(V.anchor)}var N=function(t,r,i){for(var o=t.x2-t.x1,s=t.y2-t.y1,u=e.textBoxScale,c=w&&!v?r:null,h={box:[],offscreen:!1},f=_?2*U.length:U.length,d=0;d<f;++d){var y=n.attemptAnchorPlacement(U[d%U.length],t,o,s,u,x,b,p,l,m,d>=U.length,e,a,i,c)
if(y&&(h=y.placedGlyphBoxes)&&h.box&&h.box.length){S=!0,z=y.shift
break}}return h}
O((function(){return N(B,o.iconBox,t.WritingMode.horizontal)}),(function(){var r=o.verticalTextBox
return a.allowVerticalPlacement&&!(P&&P.box&&P.box.length)&&e.numVerticalGlyphVertices>0&&r?N(r,o.verticalIconBox,t.WritingMode.vertical):{box:null,offscreen:null}})),P&&(S=P.box,A=P.offscreen)
var j=F(P&&P.box)
if(!S&&n.prevPlacement){var q=n.prevPlacement.variableOffsets[e.crossTileID]
q&&(n.variableOffsets[e.crossTileID]=q,n.markUsedJustification(a,q.anchor,e,j))}}else{var Z=function(t,r){var i=n.collisionIndex.placeCollisionBox(t,_,p,l,m.predicate)
return i&&i.box&&i.box.length&&(n.markUsedOrientation(a,r,e),n.placedOrientations[e.crossTileID]=r),i}
O((function(){return Z(B,t.WritingMode.horizontal)}),(function(){var r=o.verticalTextBox
return a.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&r?Z(r,t.WritingMode.vertical):{box:null,offscreen:null}})),F(P&&P.box&&P.box.length)}}if(S=(f=P)&&f.box&&f.box.length>0,A=f&&f.offscreen,e.useRuntimeCollisionCircles){var G=a.text.placedSymbolArray.get(e.centerJustifiedTextSymbolIndex),X=t.evaluateSizeForFeature(a.textSizeData,d,G),W=s.get("text-padding")
k=n.collisionIndex.placeCollisionCircles(_,G,a.lineVertexArray,a.glyphOffsetArray,X,l,u,c,i,b,m.predicate,e.collisionCircleDiameter,W),S=_||k.circles.length>0&&!k.collisionDetected,A=A&&k.offscreen}if(o.iconFeatureIndex&&(R=o.iconFeatureIndex),o.iconBox){var K=function(t){var e=w&&z?xe(t,z.x,z.y,x,b,n.transform.angle):t
return n.collisionIndex.placeCollisionBox(e,v,p,l,m.predicate)}
E=C&&C.box&&C.box.length&&o.verticalIconBox?(M=K(o.verticalIconBox)).box.length>0:(M=K(o.iconBox)).box.length>0,A=A&&M.offscreen}var H=y||0===e.numHorizontalGlyphVertices&&0===e.numVerticalGlyphVertices,J=g||0===e.numIconVertices
if(H||J?J?H||(E=E&&S):S=E&&S:E=S=E&&S,S&&f&&f.box&&n.collisionIndex.insertCollisionBox(f.box,s.get("text-ignore-placement"),a.bucketInstanceId,C&&C.box&&L?L:D,m.ID),E&&M&&n.collisionIndex.insertCollisionBox(M.box,s.get("icon-ignore-placement"),a.bucketInstanceId,R,m.ID),k&&(S&&n.collisionIndex.insertCollisionCircles(k.circles,s.get("text-ignore-placement"),a.bucketInstanceId,D,m.ID),i)){var Y=a.bucketInstanceId,Q=n.collisionCircleArrays[Y]
void 0===Q&&(Q=n.collisionCircleArrays[Y]=new ye)
for(var $=0;$<k.circles.length;$+=4)Q.circles.push(k.circles[$+0]),Q.circles.push(k.circles[$+1]),Q.circles.push(k.circles[$+2]),Q.circles.push(k.collisionDetected?1:0)}n.placements[e.crossTileID]=new me(S||T,E||I,A||a.justReloaded),r[e.crossTileID]=!0}}
if(S)for(var A=a.getSortedSymbolIndexes(this.transform.angle),z=A.length-1;z>=0;--z){var P=A[z]
E(a.symbolInstances.get(P),a.collisionArrays[P])}else for(var C=e.symbolInstanceStart;C<e.symbolInstanceEnd;C++)E(a.symbolInstances.get(C),a.collisionArrays[C])
if(i&&a.bucketInstanceId in this.collisionCircleArrays){var k=this.collisionCircleArrays[a.bucketInstanceId]
t.invert(k.invProjMatrix,l),k.viewportMatrix=this.collisionIndex.getViewportMatrix()}a.justReloaded=!1},be.prototype.markUsedJustification=function(e,r,i,n){var o
o=n===t.WritingMode.vertical?i.verticalPlacedTextSymbolIndex:{left:i.leftJustifiedTextSymbolIndex,center:i.centerJustifiedTextSymbolIndex,right:i.rightJustifiedTextSymbolIndex}[t.getAnchorJustification(r)]
for(var a=0,s=[i.leftJustifiedTextSymbolIndex,i.centerJustifiedTextSymbolIndex,i.rightJustifiedTextSymbolIndex,i.verticalPlacedTextSymbolIndex];a<s.length;a+=1){var l=s[a]
l>=0&&(e.text.placedSymbolArray.get(l).crossTileID=o>=0&&l!==o?0:i.crossTileID)}},be.prototype.markUsedOrientation=function(e,r,i){for(var n=r===t.WritingMode.horizontal||r===t.WritingMode.horizontalOnly?r:0,o=r===t.WritingMode.vertical?r:0,a=0,s=[i.leftJustifiedTextSymbolIndex,i.centerJustifiedTextSymbolIndex,i.rightJustifiedTextSymbolIndex];a<s.length;a+=1)e.text.placedSymbolArray.get(s[a]).placedOrientation=n
i.verticalPlacedTextSymbolIndex&&(e.text.placedSymbolArray.get(i.verticalPlacedTextSymbolIndex).placedOrientation=o)},be.prototype.commit=function(t){this.commitTime=t,this.zoomAtLastRecencyCheck=this.transform.zoom
var e=this.prevPlacement,r=!1
this.prevZoomAdjustment=e?e.zoomAdjustment(this.transform.zoom):0
var i=e?e.symbolFadeChange(t):1,n=e?e.opacities:{},o=e?e.variableOffsets:{},a=e?e.placedOrientations:{}
for(var s in this.placements){var l=this.placements[s],u=n[s]
u?(this.opacities[s]=new de(u,i,l.text,l.icon),r=r||l.text!==u.text.placed||l.icon!==u.icon.placed):(this.opacities[s]=new de(null,i,l.text,l.icon,l.skipFade),r=r||l.text||l.icon)}for(var c in n){var p=n[c]
if(!this.opacities[c]){var h=new de(p,i,!1,!1)
h.isHidden()||(this.opacities[c]=h,r=r||p.text.placed||p.icon.placed)}}for(var f in o)this.variableOffsets[f]||!this.opacities[f]||this.opacities[f].isHidden()||(this.variableOffsets[f]=o[f])
for(var d in a)this.placedOrientations[d]||!this.opacities[d]||this.opacities[d].isHidden()||(this.placedOrientations[d]=a[d])
r?this.lastPlacementChangeTime=t:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=e?e.lastPlacementChangeTime:t)},be.prototype.updateLayerOpacities=function(t,e){for(var r={},i=0,n=e;i<n.length;i+=1){var o=n[i],a=o.getBucket(t)
a&&o.latestFeatureIndex&&t.id===a.layerIds[0]&&this.updateBucketOpacities(a,r,o.collisionBoxArray)}},be.prototype.updateBucketOpacities=function(e,r,i){var n=this
e.hasTextData()&&e.text.opacityVertexArray.clear(),e.hasIconData()&&e.icon.opacityVertexArray.clear(),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexArray.clear(),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexArray.clear()
var o=e.layers[0].layout,a=new de(null,0,!1,!1,!0),s=o.get("text-allow-overlap"),l=o.get("icon-allow-overlap"),u=o.get("text-variable-anchor"),c="map"===o.get("text-rotation-alignment"),p="map"===o.get("text-pitch-alignment"),h="none"!==o.get("icon-text-fit"),f=new de(null,0,s&&(l||!e.hasIconData()||o.get("icon-optional")),l&&(s||!e.hasTextData()||o.get("text-optional")),!0)
!e.collisionArrays&&i&&(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData())&&e.deserializeCollisionBoxes(i)
for(var d=function(t,e,r){for(var i=0;i<e/4;i++)t.opacityVertexArray.emplaceBack(r)},m=function(i){var o=e.symbolInstances.get(i),s=o.numHorizontalGlyphVertices,l=o.numVerticalGlyphVertices,m=o.crossTileID,y=n.opacities[m]
r[m]?y=a:y||(n.opacities[m]=y=f),r[m]=!0
var g=o.numIconVertices>0,_=n.placedOrientations[o.crossTileID],v=_===t.WritingMode.vertical,x=_===t.WritingMode.horizontal||_===t.WritingMode.horizontalOnly
if(s>0||l>0){var b=Ce(y.text)
d(e.text,s,v?ke:b),d(e.text,l,x?ke:b)
var w=y.text.isHidden();[o.rightJustifiedTextSymbolIndex,o.centerJustifiedTextSymbolIndex,o.leftJustifiedTextSymbolIndex].forEach((function(t){t>=0&&(e.text.placedSymbolArray.get(t).hidden=w||v?1:0)})),o.verticalPlacedTextSymbolIndex>=0&&(e.text.placedSymbolArray.get(o.verticalPlacedTextSymbolIndex).hidden=w||x?1:0)
var S=n.variableOffsets[o.crossTileID]
S&&n.markUsedJustification(e,S.anchor,o,_)
var T=n.placedOrientations[o.crossTileID]
T&&(n.markUsedJustification(e,"left",o,T),n.markUsedOrientation(e,T,o))}if(g){var I=Ce(y.icon),E=!(h&&o.verticalPlacedIconSymbolIndex&&v)
o.placedIconSymbolIndex>=0&&(d(e.icon,o.numIconVertices,E?I:ke),e.icon.placedSymbolArray.get(o.placedIconSymbolIndex).hidden=y.icon.isHidden()),o.verticalPlacedIconSymbolIndex>=0&&(d(e.icon,o.numVerticalIconVertices,E?ke:I),e.icon.placedSymbolArray.get(o.verticalPlacedIconSymbolIndex).hidden=y.icon.isHidden())}if(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData()){var A=e.collisionArrays[i]
if(A){var z=new t.Point(0,0)
if(A.textBox||A.verticalTextBox){var P=!0
if(u){var C=n.variableOffsets[m]
C?(z=ve(C.anchor,C.width,C.height,C.textOffset,C.textBoxScale),c&&z._rotate(p?n.transform.angle:-n.transform.angle)):P=!1}A.textBox&&we(e.textCollisionBox.collisionVertexArray,y.text.placed,!P||v,z.x,z.y),A.verticalTextBox&&we(e.textCollisionBox.collisionVertexArray,y.text.placed,!P||x,z.x,z.y)}var k=Boolean(!x&&A.verticalIconBox)
A.iconBox&&we(e.iconCollisionBox.collisionVertexArray,y.icon.placed,k,h?z.x:0,h?z.y:0),A.verticalIconBox&&we(e.iconCollisionBox.collisionVertexArray,y.icon.placed,!k,h?z.x:0,h?z.y:0)}}},y=0;y<e.symbolInstances.length;y++)m(y)
if(e.sortFeatures(this.transform.angle),this.retainedQueryData[e.bucketInstanceId]&&(this.retainedQueryData[e.bucketInstanceId].featureSortOrder=e.featureSortOrder),e.hasTextData()&&e.text.opacityVertexBuffer&&e.text.opacityVertexBuffer.updateData(e.text.opacityVertexArray),e.hasIconData()&&e.icon.opacityVertexBuffer&&e.icon.opacityVertexBuffer.updateData(e.icon.opacityVertexArray),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexBuffer&&e.iconCollisionBox.collisionVertexBuffer.updateData(e.iconCollisionBox.collisionVertexArray),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexBuffer&&e.textCollisionBox.collisionVertexBuffer.updateData(e.textCollisionBox.collisionVertexArray),e.bucketInstanceId in this.collisionCircleArrays){var g=this.collisionCircleArrays[e.bucketInstanceId]
e.placementInvProjMatrix=g.invProjMatrix,e.placementViewportMatrix=g.viewportMatrix,e.collisionCircleArray=g.circles,delete this.collisionCircleArrays[e.bucketInstanceId]}},be.prototype.symbolFadeChange=function(t){return 0===this.fadeDuration?1:(t-this.commitTime)/this.fadeDuration+this.prevZoomAdjustment},be.prototype.zoomAdjustment=function(t){return Math.max(0,(this.transform.zoom-t)/1.5)},be.prototype.hasTransitions=function(t){return this.stale||t-this.lastPlacementChangeTime<this.fadeDuration},be.prototype.stillRecent=function(t,e){var r=this.zoomAtLastRecencyCheck===e?1-this.zoomAdjustment(e):1
return this.zoomAtLastRecencyCheck=e,this.commitTime+this.fadeDuration*r>t},be.prototype.setStale=function(){this.stale=!0}
var Se=Math.pow(2,25),Te=Math.pow(2,24),Ie=Math.pow(2,17),Ee=Math.pow(2,16),Ae=Math.pow(2,9),ze=Math.pow(2,8),Pe=Math.pow(2,1)
function Ce(t){if(0===t.opacity&&!t.placed)return 0
if(1===t.opacity&&t.placed)return 4294967295
var e=t.placed?1:0,r=Math.floor(127*t.opacity)
return r*Se+e*Te+r*Ie+e*Ee+r*Ae+e*ze+r*Pe+e}var ke=0,Me=function(t){this._sortAcrossTiles="viewport-y"!==t.layout.get("symbol-z-order")&&void 0!==t.layout.get("symbol-sort-key").constantOr(1),this._currentTileIndex=0,this._currentPartIndex=0,this._seenCrossTileIDs={},this._bucketParts=[]}
Me.prototype.continuePlacement=function(t,e,r,i,n){for(var o=this._bucketParts;this._currentTileIndex<t.length;)if(e.getBucketParts(o,i,t[this._currentTileIndex],this._sortAcrossTiles),this._currentTileIndex++,n())return!0
for(this._sortAcrossTiles&&(this._sortAcrossTiles=!1,o.sort((function(t,e){return t.sortKey-e.sortKey})));this._currentPartIndex<o.length;)if(e.placeLayerBucketPart(o[this._currentPartIndex],this._seenCrossTileIDs,r),this._currentPartIndex++,n())return!0
return!1}
var De=function(t,e,r,i,n,o,a){this.placement=new be(t,n,o,a),this._currentPlacementIndex=e.length-1,this._forceFullPlacement=r,this._showCollisionBoxes=i,this._done=!1}
De.prototype.isDone=function(){return this._done},De.prototype.continuePlacement=function(e,r,i){for(var n=this,o=t.browser.now(),a=function(){var e=t.browser.now()-o
return!n._forceFullPlacement&&e>2};this._currentPlacementIndex>=0;){var s=r[e[this._currentPlacementIndex]],l=this.placement.collisionIndex.transform.zoom
if("symbol"===s.type&&(!s.minzoom||s.minzoom<=l)&&(!s.maxzoom||s.maxzoom>l)){if(this._inProgressLayer||(this._inProgressLayer=new Me(s)),this._inProgressLayer.continuePlacement(i[s.source],this.placement,this._showCollisionBoxes,s,a))return
delete this._inProgressLayer}this._currentPlacementIndex--}this._done=!0},De.prototype.commit=function(t){return this.placement.commit(t),this.placement}
var Le=512/t.EXTENT/2,Re=function(t,e,r){this.tileID=t,this.indexedSymbolInstances={},this.bucketInstanceId=r
for(var i=0;i<e.length;i++){var n=e.get(i),o=n.key
this.indexedSymbolInstances[o]||(this.indexedSymbolInstances[o]=[]),this.indexedSymbolInstances[o].push({crossTileID:n.crossTileID,coord:this.getScaledCoordinates(n,t)})}}
Re.prototype.getScaledCoordinates=function(e,r){var i=Le/Math.pow(2,r.canonical.z-this.tileID.canonical.z)
return{x:Math.floor((r.canonical.x*t.EXTENT+e.anchorX)*i),y:Math.floor((r.canonical.y*t.EXTENT+e.anchorY)*i)}},Re.prototype.findMatches=function(t,e,r){for(var i=this.tileID.canonical.z<e.canonical.z?1:Math.pow(2,this.tileID.canonical.z-e.canonical.z),n=0;n<t.length;n++){var o=t.get(n)
if(!o.crossTileID){var a=this.indexedSymbolInstances[o.key]
if(a)for(var s=this.getScaledCoordinates(o,e),l=0,u=a;l<u.length;l+=1){var c=u[l]
if(Math.abs(c.coord.x-s.x)<=i&&Math.abs(c.coord.y-s.y)<=i&&!r[c.crossTileID]){r[c.crossTileID]=!0,o.crossTileID=c.crossTileID
break}}}}}
var Be=function(){this.maxCrossTileID=0}
Be.prototype.generate=function(){return++this.maxCrossTileID}
var Fe=function(){this.indexes={},this.usedCrossTileIDs={},this.lng=0}
Fe.prototype.handleWrapJump=function(t){var e=Math.round((t-this.lng)/360)
if(0!==e)for(var r in this.indexes){var i=this.indexes[r],n={}
for(var o in i){var a=i[o]
a.tileID=a.tileID.unwrapTo(a.tileID.wrap+e),n[a.tileID.key]=a}this.indexes[r]=n}this.lng=t},Fe.prototype.addBucket=function(t,e,r){if(this.indexes[t.overscaledZ]&&this.indexes[t.overscaledZ][t.key]){if(this.indexes[t.overscaledZ][t.key].bucketInstanceId===e.bucketInstanceId)return!1
this.removeBucketCrossTileIDs(t.overscaledZ,this.indexes[t.overscaledZ][t.key])}for(var i=0;i<e.symbolInstances.length;i++)e.symbolInstances.get(i).crossTileID=0
this.usedCrossTileIDs[t.overscaledZ]||(this.usedCrossTileIDs[t.overscaledZ]={})
var n=this.usedCrossTileIDs[t.overscaledZ]
for(var o in this.indexes){var a=this.indexes[o]
if(Number(o)>t.overscaledZ)for(var s in a){var l=a[s]
l.tileID.isChildOf(t)&&l.findMatches(e.symbolInstances,t,n)}else{var u=a[t.scaledTo(Number(o)).key]
u&&u.findMatches(e.symbolInstances,t,n)}}for(var c=0;c<e.symbolInstances.length;c++){var p=e.symbolInstances.get(c)
p.crossTileID||(p.crossTileID=r.generate(),n[p.crossTileID]=!0)}return void 0===this.indexes[t.overscaledZ]&&(this.indexes[t.overscaledZ]={}),this.indexes[t.overscaledZ][t.key]=new Re(t,e.symbolInstances,e.bucketInstanceId),!0},Fe.prototype.removeBucketCrossTileIDs=function(t,e){for(var r in e.indexedSymbolInstances)for(var i=0,n=e.indexedSymbolInstances[r];i<n.length;i+=1)delete this.usedCrossTileIDs[t][n[i].crossTileID]},Fe.prototype.removeStaleBuckets=function(t){var e=!1
for(var r in this.indexes){var i=this.indexes[r]
for(var n in i)t[i[n].bucketInstanceId]||(this.removeBucketCrossTileIDs(r,i[n]),delete i[n],e=!0)}return e}
var Oe=function(){this.layerIndexes={},this.crossTileIDs=new Be,this.maxBucketInstanceId=0,this.bucketsInCurrentPlacement={}}
Oe.prototype.addLayer=function(t,e,r){var i=this.layerIndexes[t.id]
void 0===i&&(i=this.layerIndexes[t.id]=new Fe)
var n=!1,o={}
i.handleWrapJump(r)
for(var a=0,s=e;a<s.length;a+=1){var l=s[a],u=l.getBucket(t)
u&&t.id===u.layerIds[0]&&(u.bucketInstanceId||(u.bucketInstanceId=++this.maxBucketInstanceId),i.addBucket(l.tileID,u,this.crossTileIDs)&&(n=!0),o[u.bucketInstanceId]=!0)}return i.removeStaleBuckets(o)&&(n=!0),n},Oe.prototype.pruneUnusedLayers=function(t){var e={}
for(var r in t.forEach((function(t){e[t]=!0})),this.layerIndexes)e[r]||delete this.layerIndexes[r]}
var Ue=function(e,r){return t.emitValidationErrors(e,r&&r.filter((function(t){return"source.canvas"!==t.identifier})))},Ve=t.pick(Nt,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData"]),Ne=t.pick(Nt,["setCenter","setZoom","setBearing","setPitch"]),je=function(){var e={},r=t.styleSpec.$version
for(var i in t.styleSpec.$root){var n,o=t.styleSpec.$root[i]
o.required&&null!=(n="version"===i?r:"array"===o.type?[]:{})&&(e[i]=n)}return e}(),qe=function(e){function r(i,n){var o=this
void 0===n&&(n={}),e.call(this),this.map=i,this.dispatcher=new T(Ot(),this),this.imageManager=new h,this.imageManager.setEventedParent(this),this.glyphManager=new v(i._requestManager,n.localIdeographFontFamily),this.lineAtlas=new S(256,512),this.crossTileSymbolIndex=new Oe,this._layers={},this._serializedLayers={},this._order=[],this.sourceCaches={},this.zoomHistory=new t.ZoomHistory,this._loaded=!1,this._availableImages=[],this._resetUpdates(),this.dispatcher.broadcast("setReferrer",t.getReferrer())
var a=this
this._rtlTextPluginCallback=r.registerForPluginStateChange((function(e){a.dispatcher.broadcast("syncRTLPluginState",{pluginStatus:e.pluginStatus,pluginURL:e.pluginURL},(function(e,r){if(t.triggerPluginCompletionEvent(e),r&&r.every((function(t){return t})))for(var i in a.sourceCaches)a.sourceCaches[i].reload()}))})),this.on("data",(function(t){if("source"===t.dataType&&"metadata"===t.sourceDataType){var e=o.sourceCaches[t.sourceId]
if(e){var r=e.getSource()
if(r&&r.vectorLayerIds)for(var i in o._layers){var n=o._layers[i]
n.source===r.id&&o._validateLayer(n)}}}}))}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.loadURL=function(e,r){var i=this
void 0===r&&(r={}),this.fire(new t.Event("dataloading",{dataType:"style"}))
var n="boolean"==typeof r.validate?r.validate:!t.isMapboxURL(e)
e=this.map._requestManager.normalizeStyleURL(e,r.accessToken)
var o=this.map._requestManager.transformRequest(e,t.ResourceType.Style)
this._request=t.getJSON(o,(function(e,r){i._request=null,e?i.fire(new t.ErrorEvent(e)):r&&i._load(r,n)}))},r.prototype.loadJSON=function(e,r){var i=this
void 0===r&&(r={}),this.fire(new t.Event("dataloading",{dataType:"style"})),this._request=t.browser.frame((function(){i._request=null,i._load(e,!1!==r.validate)}))},r.prototype.loadEmpty=function(){this.fire(new t.Event("dataloading",{dataType:"style"})),this._load(je,!1)},r.prototype._load=function(e,r){if(!r||!Ue(this,t.validateStyle(e))){for(var i in this._loaded=!0,this.stylesheet=e,e.sources)this.addSource(i,e.sources[i],{validate:!1})
e.sprite?this._loadSprite(e.sprite):this.imageManager.setLoaded(!0),this.glyphManager.setURL(e.glyphs)
var n=Vt(this.stylesheet.layers)
this._order=n.map((function(t){return t.id})),this._layers={},this._serializedLayers={}
for(var o=0,a=n;o<a.length;o+=1){var s=a[o];(s=t.createStyleLayer(s)).setEventedParent(this,{layer:{id:s.id}}),this._layers[s.id]=s,this._serializedLayers[s.id]=s.serialize()}this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new w(this.stylesheet.light),this.fire(new t.Event("data",{dataType:"style"})),this.fire(new t.Event("style.load"))}},r.prototype._loadSprite=function(e){var r=this
this._spriteRequest=function(e,r,i){var n,o,a,s=t.browser.devicePixelRatio>1?"@2x":"",l=t.getJSON(r.transformRequest(r.normalizeSpriteURL(e,s,".json"),t.ResourceType.SpriteJSON),(function(t,e){l=null,a||(a=t,n=e,c())})),u=t.getImage(r.transformRequest(r.normalizeSpriteURL(e,s,".png"),t.ResourceType.SpriteImage),(function(t,e){u=null,a||(a=t,o=e,c())}))
function c(){if(a)i(a)
else if(n&&o){var e=t.browser.getImageData(o),r={}
for(var s in n){var l=n[s],u=l.width,c=l.height,p=l.x,h=l.y,f=l.sdf,d=l.pixelRatio,m=l.stretchX,y=l.stretchY,g=l.content,_=new t.RGBAImage({width:u,height:c})
t.RGBAImage.copy(e,_,{x:p,y:h},{x:0,y:0},{width:u,height:c}),r[s]={data:_,pixelRatio:d,sdf:f,stretchX:m,stretchY:y,content:g}}i(null,r)}}return{cancel:function(){l&&(l.cancel(),l=null),u&&(u.cancel(),u=null)}}}(e,this.map._requestManager,(function(e,i){if(r._spriteRequest=null,e)r.fire(new t.ErrorEvent(e))
else if(i)for(var n in i)r.imageManager.addImage(n,i[n])
r.imageManager.setLoaded(!0),r._availableImages=r.imageManager.listImages(),r.dispatcher.broadcast("setImages",r._availableImages),r.fire(new t.Event("data",{dataType:"style"}))}))},r.prototype._validateLayer=function(e){var r=this.sourceCaches[e.source]
if(r){var i=e.sourceLayer
if(i){var n=r.getSource();("geojson"===n.type||n.vectorLayerIds&&-1===n.vectorLayerIds.indexOf(i))&&this.fire(new t.ErrorEvent(new Error('Source layer "'+i+'" does not exist on source "'+n.id+'" as specified by style layer "'+e.id+'"')))}}},r.prototype.loaded=function(){if(!this._loaded)return!1
if(Object.keys(this._updatedSources).length)return!1
for(var t in this.sourceCaches)if(!this.sourceCaches[t].loaded())return!1
return!!this.imageManager.isLoaded()},r.prototype._serializeLayers=function(t){for(var e=[],r=0,i=t;r<i.length;r+=1){var n=this._layers[i[r]]
"custom"!==n.type&&e.push(n.serialize())}return e},r.prototype.hasTransitions=function(){if(this.light&&this.light.hasTransition())return!0
for(var t in this.sourceCaches)if(this.sourceCaches[t].hasTransition())return!0
for(var e in this._layers)if(this._layers[e].hasTransition())return!0
return!1},r.prototype._checkLoaded=function(){if(!this._loaded)throw new Error("Style is not done loading")},r.prototype.update=function(e){if(this._loaded){var r=this._changed
if(this._changed){var i=Object.keys(this._updatedLayers),n=Object.keys(this._removedLayers)
for(var o in(i.length||n.length)&&this._updateWorkerLayers(i,n),this._updatedSources){var a=this._updatedSources[o]
"reload"===a?this._reloadSource(o):"clear"===a&&this._clearSource(o)}for(var s in this._updateTilesForChangedImages(),this._updatedPaintProps)this._layers[s].updateTransitions(e)
this.light.updateTransitions(e),this._resetUpdates()}for(var l in this.sourceCaches)this.sourceCaches[l].used=!1
for(var u=0,c=this._order;u<c.length;u+=1){var p=this._layers[c[u]]
p.recalculate(e,this._availableImages),!p.isHidden(e.zoom)&&p.source&&(this.sourceCaches[p.source].used=!0)}this.light.recalculate(e),this.z=e.zoom,r&&this.fire(new t.Event("data",{dataType:"style"}))}},r.prototype._updateTilesForChangedImages=function(){var t=Object.keys(this._changedImages)
if(t.length){for(var e in this.sourceCaches)this.sourceCaches[e].reloadTilesForDependencies(["icons","patterns"],t)
this._changedImages={}}},r.prototype._updateWorkerLayers=function(t,e){this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(t),removedIds:e})},r.prototype._resetUpdates=function(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={},this._changedImages={}},r.prototype.setState=function(e){var r=this
if(this._checkLoaded(),Ue(this,t.validateStyle(e)))return!1;(e=t.clone$1(e)).layers=Vt(e.layers)
var i=function(e,r){if(!e)return[{command:Nt.setStyle,args:[r]}]
var i=[]
try{if(!t.deepEqual(e.version,r.version))return[{command:Nt.setStyle,args:[r]}]
t.deepEqual(e.center,r.center)||i.push({command:Nt.setCenter,args:[r.center]}),t.deepEqual(e.zoom,r.zoom)||i.push({command:Nt.setZoom,args:[r.zoom]}),t.deepEqual(e.bearing,r.bearing)||i.push({command:Nt.setBearing,args:[r.bearing]}),t.deepEqual(e.pitch,r.pitch)||i.push({command:Nt.setPitch,args:[r.pitch]}),t.deepEqual(e.sprite,r.sprite)||i.push({command:Nt.setSprite,args:[r.sprite]}),t.deepEqual(e.glyphs,r.glyphs)||i.push({command:Nt.setGlyphs,args:[r.glyphs]}),t.deepEqual(e.transition,r.transition)||i.push({command:Nt.setTransition,args:[r.transition]}),t.deepEqual(e.light,r.light)||i.push({command:Nt.setLight,args:[r.light]})
var n={},o=[]
!function(e,r,i,n){var o
for(o in r=r||{},e=e||{})e.hasOwnProperty(o)&&(r.hasOwnProperty(o)||qt(o,i,n))
for(o in r)r.hasOwnProperty(o)&&(e.hasOwnProperty(o)?t.deepEqual(e[o],r[o])||("geojson"===e[o].type&&"geojson"===r[o].type&&Gt(e,r,o)?i.push({command:Nt.setGeoJSONSourceData,args:[o,r[o].data]}):Zt(o,r,i,n)):jt(o,r,i))}(e.sources,r.sources,o,n)
var a=[]
e.layers&&e.layers.forEach((function(t){n[t.source]?i.push({command:Nt.removeLayer,args:[t.id]}):a.push(t)})),i=i.concat(o),function(e,r,i){r=r||[]
var n,o,a,s,l,u,c,p=(e=e||[]).map(Wt),h=r.map(Wt),f=e.reduce(Kt,{}),d=r.reduce(Kt,{}),m=p.slice(),y=Object.create(null)
for(n=0,o=0;n<p.length;n++)d.hasOwnProperty(a=p[n])?o++:(i.push({command:Nt.removeLayer,args:[a]}),m.splice(m.indexOf(a,o),1))
for(n=0,o=0;n<h.length;n++)m[m.length-1-n]!==(a=h[h.length-1-n])&&(f.hasOwnProperty(a)?(i.push({command:Nt.removeLayer,args:[a]}),m.splice(m.lastIndexOf(a,m.length-o),1)):o++,i.push({command:Nt.addLayer,args:[d[a],u=m[m.length-n]]}),m.splice(m.length-n,0,a),y[a]=!0)
for(n=0;n<h.length;n++)if(s=f[a=h[n]],l=d[a],!y[a]&&!t.deepEqual(s,l))if(t.deepEqual(s.source,l.source)&&t.deepEqual(s["source-layer"],l["source-layer"])&&t.deepEqual(s.type,l.type)){for(c in Xt(s.layout,l.layout,i,a,null,Nt.setLayoutProperty),Xt(s.paint,l.paint,i,a,null,Nt.setPaintProperty),t.deepEqual(s.filter,l.filter)||i.push({command:Nt.setFilter,args:[a,l.filter]}),t.deepEqual(s.minzoom,l.minzoom)&&t.deepEqual(s.maxzoom,l.maxzoom)||i.push({command:Nt.setLayerZoomRange,args:[a,l.minzoom,l.maxzoom]}),s)s.hasOwnProperty(c)&&"layout"!==c&&"paint"!==c&&"filter"!==c&&"metadata"!==c&&"minzoom"!==c&&"maxzoom"!==c&&(0===c.indexOf("paint.")?Xt(s[c],l[c],i,a,c.slice(6),Nt.setPaintProperty):t.deepEqual(s[c],l[c])||i.push({command:Nt.setLayerProperty,args:[a,c,l[c]]}))
for(c in l)l.hasOwnProperty(c)&&!s.hasOwnProperty(c)&&"layout"!==c&&"paint"!==c&&"filter"!==c&&"metadata"!==c&&"minzoom"!==c&&"maxzoom"!==c&&(0===c.indexOf("paint.")?Xt(s[c],l[c],i,a,c.slice(6),Nt.setPaintProperty):t.deepEqual(s[c],l[c])||i.push({command:Nt.setLayerProperty,args:[a,c,l[c]]}))}else i.push({command:Nt.removeLayer,args:[a]}),u=m[m.lastIndexOf(a)+1],i.push({command:Nt.addLayer,args:[l,u]})}(a,r.layers,i)}catch(t){console.warn("Unable to compute style diff:",t),i=[{command:Nt.setStyle,args:[r]}]}return i}(this.serialize(),e).filter((function(t){return!(t.command in Ne)}))
if(0===i.length)return!1
var n=i.filter((function(t){return!(t.command in Ve)}))
if(n.length>0)throw new Error("Unimplemented: "+n.map((function(t){return t.command})).join(", ")+".")
return i.forEach((function(t){"setTransition"!==t.command&&r[t.command].apply(r,t.args)})),this.stylesheet=e,!0},r.prototype.addImage=function(e,r){if(this.getImage(e))return this.fire(new t.ErrorEvent(new Error("An image with this name already exists.")))
this.imageManager.addImage(e,r),this._availableImages=this.imageManager.listImages(),this._changedImages[e]=!0,this._changed=!0,this.fire(new t.Event("data",{dataType:"style"}))},r.prototype.updateImage=function(t,e){this.imageManager.updateImage(t,e)},r.prototype.getImage=function(t){return this.imageManager.getImage(t)},r.prototype.removeImage=function(e){if(!this.getImage(e))return this.fire(new t.ErrorEvent(new Error("No image with this name exists.")))
this.imageManager.removeImage(e),this._availableImages=this.imageManager.listImages(),this._changedImages[e]=!0,this._changed=!0,this.fire(new t.Event("data",{dataType:"style"}))},r.prototype.listImages=function(){return this._checkLoaded(),this.imageManager.listImages()},r.prototype.addSource=function(e,r,i){var n=this
if(void 0===i&&(i={}),this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error("There is already a source with this ID")
if(!r.type)throw new Error("The type property must be defined, but the only the following properties were given: "+Object.keys(r).join(", ")+".")
if(!(["vector","raster","geojson","video","image"].indexOf(r.type)>=0&&this._validate(t.validateStyle.source,"sources."+e,r,null,i))){this.map&&this.map._collectResourceTiming&&(r.collectResourceTiming=!0)
var o=this.sourceCaches[e]=new Ct(e,r,this.dispatcher)
o.style=this,o.setEventedParent(this,(function(){return{isSourceLoaded:n.loaded(),source:o.serialize(),sourceId:e}})),o.onAdd(this.map),this._changed=!0}},r.prototype.removeSource=function(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID")
for(var r in this._layers)if(this._layers[r].source===e)return this.fire(new t.ErrorEvent(new Error('Source "'+e+'" cannot be removed while layer "'+r+'" is using it.')))
var i=this.sourceCaches[e]
delete this.sourceCaches[e],delete this._updatedSources[e],i.fire(new t.Event("data",{sourceDataType:"metadata",dataType:"source",sourceId:e})),i.setEventedParent(null),i.clearTiles(),i.onRemove&&i.onRemove(this.map),this._changed=!0},r.prototype.setGeoJSONSourceData=function(t,e){this._checkLoaded(),this.sourceCaches[t].getSource().setData(e),this._changed=!0},r.prototype.getSource=function(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()},r.prototype.addLayer=function(e,r,i){void 0===i&&(i={}),this._checkLoaded()
var n=e.id
if(this.getLayer(n))this.fire(new t.ErrorEvent(new Error('Layer with id "'+n+'" already exists on this map')))
else{var o
if("custom"===e.type){if(Ue(this,t.validateCustomStyleLayer(e)))return
o=t.createStyleLayer(e)}else{if("object"==typeof e.source&&(this.addSource(n,e.source),e=t.clone$1(e),e=t.extend(e,{source:n})),this._validate(t.validateStyle.layer,"layers."+n,e,{arrayIndex:-1},i))return
o=t.createStyleLayer(e),this._validateLayer(o),o.setEventedParent(this,{layer:{id:n}}),this._serializedLayers[o.id]=o.serialize()}var a=r?this._order.indexOf(r):this._order.length
if(r&&-1===a)this.fire(new t.ErrorEvent(new Error('Layer with id "'+r+'" does not exist on this map.')))
else{if(this._order.splice(a,0,n),this._layerOrderChanged=!0,this._layers[n]=o,this._removedLayers[n]&&o.source&&"custom"!==o.type){var s=this._removedLayers[n]
delete this._removedLayers[n],s.type!==o.type?this._updatedSources[o.source]="clear":(this._updatedSources[o.source]="reload",this.sourceCaches[o.source].pause())}this._updateLayer(o),o.onAdd&&o.onAdd(this.map)}}},r.prototype.moveLayer=function(e,r){if(this._checkLoaded(),this._changed=!0,this._layers[e]){if(e!==r){var i=this._order.indexOf(e)
this._order.splice(i,1)
var n=r?this._order.indexOf(r):this._order.length
r&&-1===n?this.fire(new t.ErrorEvent(new Error('Layer with id "'+r+'" does not exist on this map.'))):(this._order.splice(n,0,e),this._layerOrderChanged=!0)}}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be moved.")))},r.prototype.removeLayer=function(e){this._checkLoaded()
var r=this._layers[e]
if(r){r.setEventedParent(null)
var i=this._order.indexOf(e)
this._order.splice(i,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=r,delete this._layers[e],delete this._serializedLayers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e],r.onRemove&&r.onRemove(this.map)}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be removed.")))},r.prototype.getLayer=function(t){return this._layers[t]},r.prototype.hasLayer=function(t){return t in this._layers},r.prototype.setLayerZoomRange=function(e,r,i){this._checkLoaded()
var n=this.getLayer(e)
n?n.minzoom===r&&n.maxzoom===i||(null!=r&&(n.minzoom=r),null!=i&&(n.maxzoom=i),this._updateLayer(n)):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot have zoom extent.")))},r.prototype.setFilter=function(e,r,i){void 0===i&&(i={}),this._checkLoaded()
var n=this.getLayer(e)
if(n){if(!t.deepEqual(n.filter,r))return null==r?(n.filter=void 0,void this._updateLayer(n)):void(this._validate(t.validateStyle.filter,"layers."+n.id+".filter",r,null,i)||(n.filter=t.clone$1(r),this._updateLayer(n)))}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be filtered.")))},r.prototype.getFilter=function(e){return t.clone$1(this.getLayer(e).filter)},r.prototype.setLayoutProperty=function(e,r,i,n){void 0===n&&(n={}),this._checkLoaded()
var o=this.getLayer(e)
o?t.deepEqual(o.getLayoutProperty(r),i)||(o.setLayoutProperty(r,i,n),this._updateLayer(o)):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")))},r.prototype.getLayoutProperty=function(e,r){var i=this.getLayer(e)
if(i)return i.getLayoutProperty(r)
this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style.")))},r.prototype.setPaintProperty=function(e,r,i,n){void 0===n&&(n={}),this._checkLoaded()
var o=this.getLayer(e)
o?t.deepEqual(o.getPaintProperty(r),i)||(o.setPaintProperty(r,i,n)&&this._updateLayer(o),this._changed=!0,this._updatedPaintProps[e]=!0):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")))},r.prototype.getPaintProperty=function(t,e){return this.getLayer(t).getPaintProperty(e)},r.prototype.setFeatureState=function(e,r){this._checkLoaded()
var i=e.source,n=e.sourceLayer,o=this.sourceCaches[i]
if(void 0!==o){var a=o.getSource().type
"geojson"===a&&n?this.fire(new t.ErrorEvent(new Error("GeoJSON sources cannot have a sourceLayer parameter."))):"vector"!==a||n?(void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),o.setFeatureState(n,e.id,r)):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}else this.fire(new t.ErrorEvent(new Error("The source '"+i+"' does not exist in the map's style.")))},r.prototype.removeFeatureState=function(e,r){this._checkLoaded()
var i=e.source,n=this.sourceCaches[i]
if(void 0!==n){var o=n.getSource().type,a="vector"===o?e.sourceLayer:void 0
"vector"!==o||a?r&&"string"!=typeof e.id&&"number"!=typeof e.id?this.fire(new t.ErrorEvent(new Error("A feature id is requred to remove its specific state property."))):n.removeFeatureState(a,e.id,r):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}else this.fire(new t.ErrorEvent(new Error("The source '"+i+"' does not exist in the map's style.")))},r.prototype.getFeatureState=function(e){this._checkLoaded()
var r=e.source,i=e.sourceLayer,n=this.sourceCaches[r]
if(void 0!==n){if("vector"!==n.getSource().type||i)return void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),n.getFeatureState(i,e.id)
this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}else this.fire(new t.ErrorEvent(new Error("The source '"+r+"' does not exist in the map's style.")))},r.prototype.getTransition=function(){return t.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)},r.prototype.serialize=function(){return t.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:t.mapObject(this.sourceCaches,(function(t){return t.serialize()})),layers:this._serializeLayers(this._order)},(function(t){return void 0!==t}))},r.prototype._updateLayer=function(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&"raster"!==this.sourceCaches[t.source].getSource().type&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._changed=!0},r.prototype._flattenAndSortRenderedFeatures=function(t){for(var e=this,r=function(t){return"fill-extrusion"===e._layers[t].type},i={},n=[],o=this._order.length-1;o>=0;o--){var a=this._order[o]
if(r(a)){i[a]=o
for(var s=0,l=t;s<l.length;s+=1){var u=l[s][a]
if(u)for(var c=0,p=u;c<p.length;c+=1)n.push(p[c])}}}n.sort((function(t,e){return e.intersectionZ-t.intersectionZ}))
for(var h=[],f=this._order.length-1;f>=0;f--){var d=this._order[f]
if(r(d))for(var m=n.length-1;m>=0;m--){var y=n[m].feature
if(i[y.layer.id]<f)break
h.push(y),n.pop()}else for(var g=0,_=t;g<_.length;g+=1){var v=_[g][d]
if(v)for(var x=0,b=v;x<b.length;x+=1)h.push(b[x].feature)}}return h},r.prototype.queryRenderedFeatures=function(e,r,i){r&&r.filter&&this._validate(t.validateStyle.filter,"queryRenderedFeatures.filter",r.filter,null,r)
var n={}
if(r&&r.layers){if(!Array.isArray(r.layers))return this.fire(new t.ErrorEvent(new Error("parameters.layers must be an Array."))),[]
for(var o=0,a=r.layers;o<a.length;o+=1){var s=a[o],l=this._layers[s]
if(!l)return this.fire(new t.ErrorEvent(new Error("The layer '"+s+"' does not exist in the map's style and cannot be queried for features."))),[]
n[l.source]=!0}}var u=[]
for(var c in r.availableImages=this._availableImages,this.sourceCaches)r.layers&&!n[c]||u.push(F(this.sourceCaches[c],this._layers,this._serializedLayers,e,r,i))
return this.placement&&u.push(function(t,e,r,i,n,o,a){for(var s={},l=o.queryRenderedSymbols(i),u=[],c=0,p=Object.keys(l).map(Number);c<p.length;c+=1)u.push(a[p[c]])
u.sort(O)
for(var h=function(){var r=d[f],i=r.featureIndex.lookupSymbolFeatures(l[r.bucketInstanceId],e,r.bucketIndex,r.sourceLayerIndex,n.filter,n.layers,n.availableImages,t)
for(var o in i){var a=s[o]=s[o]||[],u=i[o]
u.sort((function(t,e){var i=r.featureSortOrder
if(i){var n=i.indexOf(t.featureIndex)
return i.indexOf(e.featureIndex)-n}return e.featureIndex-t.featureIndex}))
for(var c=0,p=u;c<p.length;c+=1)a.push(p[c])}},f=0,d=u;f<d.length;f+=1)h()
var m=function(e){s[e].forEach((function(i){var n=i.feature,o=r[t[e].source].getFeatureState(n.layer["source-layer"],n.id)
n.source=n.layer.source,n.layer["source-layer"]&&(n.sourceLayer=n.layer["source-layer"]),n.state=o}))}
for(var y in s)m(y)
return s}(this._layers,this._serializedLayers,this.sourceCaches,e,r,this.placement.collisionIndex,this.placement.retainedQueryData)),this._flattenAndSortRenderedFeatures(u)},r.prototype.querySourceFeatures=function(e,r){r&&r.filter&&this._validate(t.validateStyle.filter,"querySourceFeatures.filter",r.filter,null,r)
var i=this.sourceCaches[e]
return i?function(t,e){for(var r=t.getRenderableIds().map((function(e){return t.getTileByID(e)})),i=[],n={},o=0;o<r.length;o++){var a=r[o],s=a.tileID.canonical.key
n[s]||(n[s]=!0,a.querySourceFeatures(i,e))}return i}(i,r):[]},r.prototype.addSourceType=function(t,e,i){return r.getSourceType(t)?i(new Error('A source type called "'+t+'" already exists.')):(r.setSourceType(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},i):i(null,null))},r.prototype.getLight=function(){return this.light.getLight()},r.prototype.setLight=function(e,r){void 0===r&&(r={}),this._checkLoaded()
var i=this.light.getLight(),n=!1
for(var o in e)if(!t.deepEqual(e[o],i[o])){n=!0
break}if(n){var a={now:t.browser.now(),transition:t.extend({duration:300,delay:0},this.stylesheet.transition)}
this.light.setLight(e,r),this.light.updateTransitions(a)}},r.prototype._validate=function(e,r,i,n,o){return void 0===o&&(o={}),(!o||!1!==o.validate)&&Ue(this,e.call(t.validateStyle,t.extend({key:r,style:this.serialize(),value:i,styleSpec:t.styleSpec},n)))},r.prototype._remove=function(){for(var e in this._request&&(this._request.cancel(),this._request=null),this._spriteRequest&&(this._spriteRequest.cancel(),this._spriteRequest=null),t.evented.off("pluginStateChange",this._rtlTextPluginCallback),this._layers)this._layers[e].setEventedParent(null)
for(var r in this.sourceCaches)this.sourceCaches[r].clearTiles(),this.sourceCaches[r].setEventedParent(null)
this.imageManager.setEventedParent(null),this.setEventedParent(null),this.dispatcher.remove()},r.prototype._clearSource=function(t){this.sourceCaches[t].clearTiles()},r.prototype._reloadSource=function(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload()},r.prototype._updateSources=function(t){for(var e in this.sourceCaches)this.sourceCaches[e].update(t)},r.prototype._generateCollisionBoxes=function(){for(var t in this.sourceCaches)this._reloadSource(t)},r.prototype._updatePlacement=function(e,r,i,n,o){void 0===o&&(o=!1)
for(var a=!1,s=!1,l={},u=0,c=this._order;u<c.length;u+=1){var p=this._layers[c[u]]
if("symbol"===p.type){if(!l[p.source]){var h=this.sourceCaches[p.source]
l[p.source]=h.getRenderableIds(!0).map((function(t){return h.getTileByID(t)})).sort((function(t,e){return e.tileID.overscaledZ-t.tileID.overscaledZ||(t.tileID.isLessThan(e.tileID)?-1:1)}))}var f=this.crossTileSymbolIndex.addLayer(p,l[p.source],e.center.lng)
a=a||f}}if(this.crossTileSymbolIndex.pruneUnusedLayers(this._order),((o=o||this._layerOrderChanged||0===i)||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(t.browser.now(),e.zoom))&&(this.pauseablePlacement=new De(e,this._order,o,r,i,n,this.placement),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,l),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(t.browser.now()),s=!0),a&&this.pauseablePlacement.placement.setStale()),s||a)for(var d=0,m=this._order;d<m.length;d+=1){var y=this._layers[m[d]]
"symbol"===y.type&&this.placement.updateLayerOpacities(y,l[y.source])}return!this.pauseablePlacement.isDone()||this.placement.hasTransitions(t.browser.now())},r.prototype._releaseSymbolFadeTiles=function(){for(var t in this.sourceCaches)this.sourceCaches[t].releaseSymbolFadeTiles()},r.prototype.getImages=function(t,e,r){this.imageManager.getImages(e.icons,r),this._updateTilesForChangedImages()
var i=this.sourceCaches[e.source]
i&&i.setDependencies(e.tileID.key,e.type,e.icons)},r.prototype.getGlyphs=function(t,e,r){this.glyphManager.getGlyphs(e.stacks,r)},r.prototype.getResource=function(e,r,i){return t.makeRequest(r,i)},r}(t.Evented)
qe.getSourceType=function(t){return R[t]},qe.setSourceType=function(t,e){R[t]=e},qe.registerForPluginStateChange=t.registerForPluginStateChange
var Ze=t.createLayout([{name:"a_pos",type:"Int16",components:2}]),Ge=gr("#ifdef GL_ES\nprecision mediump float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif","#ifdef GL_ES\nprecision highp float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\nvec2 unpack_float(const float packedValue) {int packedIntValue=int(packedValue);int v0=packedIntValue/256;return vec2(v0,packedIntValue-v0*256);}vec2 unpack_opacity(const float packedOpacity) {int intOpacity=int(packedOpacity)/2;return vec2(float(intOpacity)/127.0,mod(packedOpacity,2.0));}vec4 decode_color(const vec2 encodedColor) {return vec4(unpack_float(encodedColor[0])/255.0,unpack_float(encodedColor[1])/255.0\n);}float unpack_mix_vec2(const vec2 packedValue,const float t) {return mix(packedValue[0],packedValue[1],t);}vec4 unpack_mix_color(const vec4 packedColors,const float t) {vec4 minColor=decode_color(vec2(packedColors[0],packedColors[1]));vec4 maxColor=decode_color(vec2(packedColors[2],packedColors[3]));return mix(minColor,maxColor,t);}vec2 get_pattern_pos(const vec2 pixel_coord_upper,const vec2 pixel_coord_lower,const vec2 pattern_size,const float tile_units_to_pixels,const vec2 pos) {vec2 offset=mod(mod(mod(pixel_coord_upper,pattern_size)*256.0,pattern_size)*256.0+pixel_coord_lower,pattern_size);return (tile_units_to_pixels*pos+offset)/pattern_size;}"),Xe=gr("uniform vec4 u_color;uniform float u_opacity;void main() {gl_FragColor=u_color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),We=gr("uniform vec2 u_pattern_tl_a;uniform vec2 u_pattern_br_a;uniform vec2 u_pattern_tl_b;uniform vec2 u_pattern_br_b;uniform vec2 u_texsize;uniform float u_mix;uniform float u_opacity;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(u_pattern_tl_a/u_texsize,u_pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(u_pattern_tl_b/u_texsize,u_pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_mix)*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pattern_size_a;uniform vec2 u_pattern_size_b;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_scale_a;uniform float u_scale_b;uniform float u_tile_units_to_pixels;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_a*u_pattern_size_a,u_tile_units_to_pixels,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_b*u_pattern_size_b,u_tile_units_to_pixels,a_pos);}"),Ke=gr("varying vec3 v_data;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=v_data.xy;float extrude_length=length(extrude);lowp float antialiasblur=v_data.z;float antialiased_blur=-max(blur,antialiasblur);float opacity_t=smoothstep(0.0,antialiased_blur,extrude_length-1.0);float color_t=stroke_width < 0.01 ? 0.0 : smoothstep(antialiased_blur,0.0,extrude_length-radius/(radius+stroke_width));gl_FragColor=opacity_t*mix(color*opacity,stroke_color*stroke_opacity,color_t);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform bool u_scale_with_map;uniform bool u_pitch_with_map;uniform vec2 u_extrude_scale;uniform lowp float u_device_pixel_ratio;uniform highp float u_camera_to_center_distance;attribute vec2 a_pos;varying vec3 v_data;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main(void) {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=vec2(mod(a_pos,2.0)*2.0-1.0);vec2 circle_center=floor(a_pos*0.5);if (u_pitch_with_map) {vec2 corner_position=circle_center;if (u_scale_with_map) {corner_position+=extrude*(radius+stroke_width)*u_extrude_scale;} else {vec4 projected_center=u_matrix*vec4(circle_center,0,1);corner_position+=extrude*(radius+stroke_width)*u_extrude_scale*(projected_center.w/u_camera_to_center_distance);}gl_Position=u_matrix*vec4(corner_position,0,1);} else {gl_Position=u_matrix*vec4(circle_center,0,1);if (u_scale_with_map) {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*u_camera_to_center_distance;} else {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*gl_Position.w;}}lowp float antialiasblur=1.0/u_device_pixel_ratio/(radius+stroke_width);v_data=vec3(extrude.x,extrude.y,antialiasblur);}"),He=gr("void main() {gl_FragColor=vec4(1.0);}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),Je=gr("uniform highp float u_intensity;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n#pragma mapbox: initialize highp float weight\nfloat d=-0.5*3.0*3.0*dot(v_extrude,v_extrude);float val=weight*u_intensity*GAUSS_COEF*exp(d);gl_FragColor=vec4(val,1.0,1.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform float u_extrude_scale;uniform float u_opacity;uniform float u_intensity;attribute vec2 a_pos;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\nconst highp float ZERO=1.0/255.0/16.0;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n#pragma mapbox: initialize highp float weight\n#pragma mapbox: initialize mediump float radius\nvec2 unscaled_extrude=vec2(mod(a_pos,2.0)*2.0-1.0);float S=sqrt(-2.0*log(ZERO/weight/u_intensity/GAUSS_COEF))/3.0;v_extrude=S*unscaled_extrude;vec2 extrude=v_extrude*radius*u_extrude_scale;vec4 pos=vec4(floor(a_pos*0.5)+extrude,0,1);gl_Position=u_matrix*pos;}"),Ye=gr("uniform sampler2D u_image;uniform sampler2D u_color_ramp;uniform float u_opacity;varying vec2 v_pos;void main() {float t=texture2D(u_image,v_pos).r;vec4 color=texture2D(u_color_ramp,vec2(t,0.5));gl_FragColor=color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(0.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;attribute vec2 a_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos*u_world,0,1);v_pos.x=a_pos.x;v_pos.y=1.0-a_pos.y;}"),Qe=gr("varying float v_placed;varying float v_notUsed;void main() {float alpha=0.5;gl_FragColor=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {gl_FragColor=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {gl_FragColor*=.1;}}","attribute vec2 a_pos;attribute vec2 a_anchor_pos;attribute vec2 a_extrude;attribute vec2 a_placed;attribute vec2 a_shift;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;varying float v_placed;varying float v_notUsed;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,0.0,1.0);gl_Position.xy+=(a_extrude+a_shift)*u_extrude_scale*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;}"),$e=gr("varying float v_radius;varying vec2 v_extrude;varying float v_perspective_ratio;varying float v_collision;void main() {float alpha=0.5*min(v_perspective_ratio,1.0);float stroke_radius=0.9*max(v_perspective_ratio,1.0);float distance_to_center=length(v_extrude);float distance_to_edge=abs(distance_to_center-v_radius);float opacity_t=smoothstep(-stroke_radius,0.0,-distance_to_edge);vec4 color=mix(vec4(0.0,0.0,1.0,0.5),vec4(1.0,0.0,0.0,1.0),v_collision);gl_FragColor=color*alpha*opacity_t;}","attribute vec2 a_pos;attribute float a_radius;attribute vec2 a_flags;uniform mat4 u_matrix;uniform mat4 u_inv_matrix;uniform vec2 u_viewport_size;uniform float u_camera_to_center_distance;varying float v_radius;varying vec2 v_extrude;varying float v_perspective_ratio;varying float v_collision;vec3 toTilePosition(vec2 screenPos) {vec4 rayStart=u_inv_matrix*vec4(screenPos,-1.0,1.0);vec4 rayEnd  =u_inv_matrix*vec4(screenPos, 1.0,1.0);rayStart.xyz/=rayStart.w;rayEnd.xyz  /=rayEnd.w;highp float t=(0.0-rayStart.z)/(rayEnd.z-rayStart.z);return mix(rayStart.xyz,rayEnd.xyz,t);}void main() {vec2 quadCenterPos=a_pos;float radius=a_radius;float collision=a_flags.x;float vertexIdx=a_flags.y;vec2 quadVertexOffset=vec2(mix(-1.0,1.0,float(vertexIdx >=2.0)),mix(-1.0,1.0,float(vertexIdx >=1.0 && vertexIdx <=2.0)));vec2 quadVertexExtent=quadVertexOffset*radius;vec3 tilePos=toTilePosition(quadCenterPos);vec4 clipPos=u_matrix*vec4(tilePos,1.0);highp float camera_to_anchor_distance=clipPos.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);float padding_factor=1.2;v_radius=radius;v_extrude=quadVertexExtent*padding_factor;v_perspective_ratio=collision_perspective_ratio;v_collision=collision;gl_Position=vec4(clipPos.xyz/clipPos.w,1.0)+vec4(quadVertexExtent*padding_factor/u_viewport_size*2.0,0.0,0.0);}"),tr=gr("uniform highp vec4 u_color;uniform sampler2D u_overlay;varying vec2 v_uv;void main() {vec4 overlay_color=texture2D(u_overlay,v_uv);gl_FragColor=mix(u_color,overlay_color,overlay_color.a);}","attribute vec2 a_pos;varying vec2 v_uv;uniform mat4 u_matrix;uniform float u_overlay_scale;void main() {v_uv=a_pos/8192.0;gl_Position=u_matrix*vec4(a_pos*u_overlay_scale,0,1);}"),er=gr("#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_FragColor=color*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);}"),rr=gr("varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=outline_color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;uniform vec2 u_world;varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),ir=gr("uniform vec2 u_texsize;uniform sampler2D u_image;uniform float u_fade;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=mix(color1,color2,u_fade)*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;gl_Position=u_matrix*vec4(a_pos,0,1);vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),nr=gr("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_fade)*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileZoomRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileZoomRatio,a_pos);}"),or=gr("varying vec4 v_color;void main() {gl_FragColor=v_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;uniform float u_vertical_gradient;uniform lowp float u_opacity;attribute vec2 a_pos;attribute vec4 a_normal_ed;varying vec4 v_color;\n#pragma mapbox: define highp float base\n#pragma mapbox: define highp float height\n#pragma mapbox: define highp vec4 color\nvoid main() {\n#pragma mapbox: initialize highp float base\n#pragma mapbox: initialize highp float height\n#pragma mapbox: initialize highp vec4 color\nvec3 normal=a_normal_ed.xyz;base=max(0.0,base);height=max(0.0,height);float t=mod(normal.x,2.0);gl_Position=u_matrix*vec4(a_pos,t > 0.0 ? height : base,1);float colorvalue=color.r*0.2126+color.g*0.7152+color.b*0.0722;v_color=vec4(0.0,0.0,0.0,1.0);vec4 ambientlight=vec4(0.03,0.03,0.03,1.0);color+=ambientlight;float directional=clamp(dot(normal/16384.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((1.0-colorvalue+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_color.r+=clamp(color.r*directional*u_lightcolor.r,mix(0.0,0.3,1.0-u_lightcolor.r),1.0);v_color.g+=clamp(color.g*directional*u_lightcolor.g,mix(0.0,0.3,1.0-u_lightcolor.g),1.0);v_color.b+=clamp(color.b*directional*u_lightcolor.b,mix(0.0,0.3,1.0-u_lightcolor.b),1.0);v_color*=u_opacity;}"),ar=gr("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);vec4 mixedColor=mix(color1,color2,u_fade);gl_FragColor=mixedColor*v_lighting;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_height_factor;uniform vec3 u_scale;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;attribute vec2 a_pos;attribute vec4 a_normal_ed;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec3 normal=a_normal_ed.xyz;float edgedistance=a_normal_ed.w;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;base=max(0.0,base);height=max(0.0,height);float t=mod(normal.x,2.0);float z=t > 0.0 ? height : base;gl_Position=u_matrix*vec4(a_pos,z,1);vec2 pos=normal.x==1.0 && normal.y==0.0 && normal.z==16384.0\n? a_pos\n: vec2(edgedistance,z*u_height_factor);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,pos);v_lighting=vec4(0.0,0.0,0.0,1.0);float directional=clamp(dot(normal/16383.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((0.5+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_lighting.rgb+=clamp(directional*u_lightcolor,mix(vec3(0.0),vec3(0.3),1.0-u_lightcolor),vec3(1.0));v_lighting*=u_opacity;}"),sr=gr("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_dimension;uniform float u_zoom;uniform float u_maxzoom;uniform vec4 u_unpack;float getElevation(vec2 coord,float bias) {vec4 data=texture2D(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack)/4.0;}void main() {vec2 epsilon=1.0/u_dimension;float a=getElevation(v_pos+vec2(-epsilon.x,-epsilon.y),0.0);float b=getElevation(v_pos+vec2(0,-epsilon.y),0.0);float c=getElevation(v_pos+vec2(epsilon.x,-epsilon.y),0.0);float d=getElevation(v_pos+vec2(-epsilon.x,0),0.0);float e=getElevation(v_pos,0.0);float f=getElevation(v_pos+vec2(epsilon.x,0),0.0);float g=getElevation(v_pos+vec2(-epsilon.x,epsilon.y),0.0);float h=getElevation(v_pos+vec2(0,epsilon.y),0.0);float i=getElevation(v_pos+vec2(epsilon.x,epsilon.y),0.0);float exaggeration=u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;vec2 deriv=vec2((c+f+f+i)-(a+d+d+g),(g+h+h+i)-(a+b+b+c))/ pow(2.0,(u_zoom-u_maxzoom)*exaggeration+19.2562-u_zoom);gl_FragColor=clamp(vec4(deriv.x/2.0+0.5,deriv.y/2.0+0.5,1.0,1.0),0.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_dimension;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_texture_pos/8192.0)*scale+epsilon;}"),lr=gr("uniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_latrange;uniform vec2 u_light;uniform vec4 u_shadow;uniform vec4 u_highlight;uniform vec4 u_accent;\n#define PI 3.141592653589793\nvoid main() {vec4 pixel=texture2D(u_image,v_pos);vec2 deriv=((pixel.rg*2.0)-1.0);float scaleFactor=cos(radians((u_latrange[0]-u_latrange[1])*(1.0-v_pos.y)+u_latrange[1]));float slope=atan(1.25*length(deriv)/scaleFactor);float aspect=deriv.x !=0.0 ? atan(deriv.y,-deriv.x) : PI/2.0*(deriv.y > 0.0 ? 1.0 :-1.0);float intensity=u_light.x;float azimuth=u_light.y+PI;float base=1.875-intensity*1.75;float maxValue=0.5*PI;float scaledSlope=intensity !=0.5 ? ((pow(base,slope)-1.0)/(pow(base,maxValue)-1.0))*maxValue : slope;float accent=cos(scaledSlope);vec4 accent_color=(1.0-accent)*u_accent*clamp(intensity*2.0,0.0,1.0);float shade=abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);vec4 shade_color=mix(u_shadow,u_highlight,shade)*sin(scaledSlope)*clamp(intensity*2.0,0.0,1.0);gl_FragColor=accent_color*(1.0-shade_color.a)+shade_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos=a_texture_pos/8192.0;}"),ur=gr("uniform lowp float u_device_pixel_ratio;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform vec2 u_units_to_pixels;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_linesofar;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_width2=vec2(outset,inset);}"),cr=gr("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;varying highp float v_lineprogress;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture2D(u_image,vec2(v_lineprogress,0.5));gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define MAX_LINE_DISTANCE 32767.0\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_lineprogress;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_lineprogress=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0/MAX_LINE_DISTANCE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_width2=vec2(outset,inset);}"),pr=gr("uniform lowp float u_device_pixel_ratio;uniform vec2 u_texsize;uniform float u_fade;uniform mediump vec3 u_scale;uniform sampler2D u_image;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;varying float v_width;\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;vec2 pattern_size_a=vec2(display_size_a.x*fromScale/tileZoomRatio,display_size_a.y);vec2 pattern_size_b=vec2(display_size_b.x*toScale/tileZoomRatio,display_size_b.y);float aspect_a=display_size_a.y/v_width;float aspect_b=display_size_b.y/v_width;float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float x_a=mod(v_linesofar/pattern_size_a.x*aspect_a,1.0);float x_b=mod(v_linesofar/pattern_size_b.x*aspect_b,1.0);float y=0.5*v_normal.y+0.5;vec2 texel_size=1.0/u_texsize;vec2 pos_a=mix(pattern_tl_a*texel_size-texel_size,pattern_br_a*texel_size+texel_size,vec2(x_a,y));vec2 pos_b=mix(pattern_tl_b*texel_size-texel_size,pattern_br_b*texel_size+texel_size,vec2(x_b,y));vec4 color=mix(texture2D(u_image,pos_a),texture2D(u_image,pos_b),u_fade);gl_FragColor=color*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform vec2 u_units_to_pixels;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;varying float v_width;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_linesofar=a_linesofar;v_width2=vec2(outset,inset);v_width=floorwidth;}"),hr=gr("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;uniform float u_sdfgamma;uniform float u_mix;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float sdfdist_a=texture2D(u_image,v_tex_a).a;float sdfdist_b=texture2D(u_image,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);alpha*=smoothstep(0.5-u_sdfgamma/floorwidth,0.5+u_sdfgamma/floorwidth,sdfdist);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_patternscale_a;uniform float u_tex_y_a;uniform vec2 u_patternscale_b;uniform float u_tex_y_b;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_tex_a=vec2(a_linesofar*u_patternscale_a.x/floorwidth,normal.y*u_patternscale_a.y+u_tex_y_a);v_tex_b=vec2(a_linesofar*u_patternscale_b.x/floorwidth,normal.y*u_patternscale_b.y+u_tex_y_b);v_width2=vec2(outset,inset);}"),fr=gr("uniform float u_fade_t;uniform float u_opacity;uniform sampler2D u_image0;uniform sampler2D u_image1;varying vec2 v_pos0;varying vec2 v_pos1;uniform float u_brightness_low;uniform float u_brightness_high;uniform float u_saturation_factor;uniform float u_contrast_factor;uniform vec3 u_spin_weights;void main() {vec4 color0=texture2D(u_image0,v_pos0);vec4 color1=texture2D(u_image1,v_pos1);if (color0.a > 0.0) {color0.rgb=color0.rgb/color0.a;}if (color1.a > 0.0) {color1.rgb=color1.rgb/color1.a;}vec4 color=mix(color0,color1,u_fade_t);color.a*=u_opacity;vec3 rgb=color.rgb;rgb=vec3(dot(rgb,u_spin_weights.xyz),dot(rgb,u_spin_weights.zxy),dot(rgb,u_spin_weights.yzx));float average=(color.r+color.g+color.b)/3.0;rgb+=(average-rgb)*u_saturation_factor;rgb=(rgb-0.5)*u_contrast_factor+0.5;vec3 u_high_vec=vec3(u_brightness_low,u_brightness_low,u_brightness_low);vec3 u_low_vec=vec3(u_brightness_high,u_brightness_high,u_brightness_high);gl_FragColor=vec4(mix(u_high_vec,u_low_vec,rgb)*color.a,color.a);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_tl_parent;uniform float u_scale_parent;uniform float u_buffer_scale;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos0;varying vec2 v_pos1;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos0=(((a_texture_pos/8192.0)-0.5)/u_buffer_scale )+0.5;v_pos1=(v_pos0*u_scale_parent)+u_tl_parent;}"),dr=gr("uniform sampler2D u_texture;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nlowp float alpha=opacity*v_fade_opacity;gl_FragColor=texture2D(u_texture,v_tex)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform highp float u_camera_to_center_distance;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform float u_fade_change;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform vec2 u_texsize;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;vec2 a_minFontScale=a_pixeloffset.zw/256.0;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*max(a_minFontScale,fontScale)+a_pxoffset/16.0),0.0,1.0);v_tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;v_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));}"),mr=gr("#define SDF_PX 8.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;uniform bool u_is_text;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat EDGE_GAMMA=0.105/u_device_pixel_ratio;vec2 tex=v_data0.xy;float gamma_scale=v_data1.x;float size=v_data1.y;float fade_opacity=v_data1[2];float fontScale=u_is_text ? size/24.0 : size;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale+a_pxoffset),0.0,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));v_data0=a_tex/u_texsize;v_data1=vec3(gamma_scale,size,interpolated_fade_opacity);}"),yr=gr("#define SDF_PX 8.0\n#define SDF 1.0\n#define ICON 0.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform sampler2D u_texture_icon;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat fade_opacity=v_data1[2];if (v_data1.w==ICON) {vec2 tex_icon=v_data0.zw;lowp float alpha=opacity*fade_opacity;gl_FragColor=texture2D(u_texture_icon,tex_icon)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\nreturn;}vec2 tex=v_data0.xy;float EDGE_GAMMA=0.105/u_device_pixel_ratio;float gamma_scale=v_data1.x;float size=v_data1.y;float fontScale=size/24.0;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;uniform vec2 u_texsize_icon;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);float is_sdf=a_size[0]-2.0*a_size_min;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=size/24.0;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale),0.0,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));v_data0.xy=a_tex/u_texsize;v_data0.zw=a_tex/u_texsize_icon;v_data1=vec4(gamma_scale,size,interpolated_fade_opacity,is_sdf);}")
function gr(t,e){var r=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,i={}
return{fragmentSource:t=t.replace(r,(function(t,e,r,n,o){return i[o]=!0,"define"===e?"\n#ifndef HAS_UNIFORM_u_"+o+"\nvarying "+r+" "+n+" "+o+";\n#else\nuniform "+r+" "+n+" u_"+o+";\n#endif\n":"\n#ifdef HAS_UNIFORM_u_"+o+"\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n"})),vertexSource:e=e.replace(r,(function(t,e,r,n,o){var a="float"===n?"vec2":"vec4",s=o.match(/color/)?"color":a
return i[o]?"define"===e?"\n#ifndef HAS_UNIFORM_u_"+o+"\nuniform lowp float u_"+o+"_t;\nattribute "+r+" "+a+" a_"+o+";\nvarying "+r+" "+n+" "+o+";\n#else\nuniform "+r+" "+n+" u_"+o+";\n#endif\n":"vec4"===s?"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+o+" = a_"+o+";\n#else\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+o+" = unpack_mix_"+s+"(a_"+o+", u_"+o+"_t);\n#else\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n":"define"===e?"\n#ifndef HAS_UNIFORM_u_"+o+"\nuniform lowp float u_"+o+"_t;\nattribute "+r+" "+a+" a_"+o+";\n#else\nuniform "+r+" "+n+" u_"+o+";\n#endif\n":"vec4"===s?"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+r+" "+n+" "+o+" = a_"+o+";\n#else\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+r+" "+n+" "+o+" = unpack_mix_"+s+"(a_"+o+", u_"+o+"_t);\n#else\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n"}))}}var _r=Object.freeze({__proto__:null,prelude:Ge,background:Xe,backgroundPattern:We,circle:Ke,clippingMask:He,heatmap:Je,heatmapTexture:Ye,collisionBox:Qe,collisionCircle:$e,debug:tr,fill:er,fillOutline:rr,fillOutlinePattern:ir,fillPattern:nr,fillExtrusion:or,fillExtrusionPattern:ar,hillshadePrepare:sr,hillshade:lr,line:ur,lineGradient:cr,linePattern:pr,lineSDF:hr,raster:fr,symbolIcon:dr,symbolSDF:mr,symbolTextAndIcon:yr}),vr=function(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null}
vr.prototype.bind=function(t,e,r,i,n,o,a,s){this.context=t
for(var l=this.boundPaintVertexBuffers.length!==i.length,u=0;!l&&u<i.length;u++)this.boundPaintVertexBuffers[u]!==i[u]&&(l=!0)
t.extVertexArrayObject&&this.vao&&this.boundProgram===e&&this.boundLayoutVertexBuffer===r&&!l&&this.boundIndexBuffer===n&&this.boundVertexOffset===o&&this.boundDynamicVertexBuffer===a&&this.boundDynamicVertexBuffer2===s?(t.bindVertexArrayOES.set(this.vao),a&&a.bind(),n&&n.dynamicDraw&&n.bind(),s&&s.bind()):this.freshBind(e,r,i,n,o,a,s)},vr.prototype.freshBind=function(t,e,r,i,n,o,a){var s,l=t.numAttributes,u=this.context,c=u.gl
if(u.extVertexArrayObject)this.vao&&this.destroy(),this.vao=u.extVertexArrayObject.createVertexArrayOES(),u.bindVertexArrayOES.set(this.vao),s=0,this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=r,this.boundIndexBuffer=i,this.boundVertexOffset=n,this.boundDynamicVertexBuffer=o,this.boundDynamicVertexBuffer2=a
else{s=u.currentNumAttributes||0
for(var p=l;p<s;p++)c.disableVertexAttribArray(p)}e.enableAttributes(c,t)
for(var h=0,f=r;h<f.length;h+=1)f[h].enableAttributes(c,t)
o&&o.enableAttributes(c,t),a&&a.enableAttributes(c,t),e.bind(),e.setVertexAttribPointers(c,t,n)
for(var d=0,m=r;d<m.length;d+=1){var y=m[d]
y.bind(),y.setVertexAttribPointers(c,t,n)}o&&(o.bind(),o.setVertexAttribPointers(c,t,n)),i&&i.bind(),a&&(a.bind(),a.setVertexAttribPointers(c,t,n)),u.currentNumAttributes=l},vr.prototype.destroy=function(){this.vao&&(this.context.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null)}
var xr=function(t,e,r,i,n){var o=t.gl
this.program=o.createProgram()
var a=r?r.defines():[]
n&&a.push("#define OVERDRAW_INSPECTOR;")
var s=a.concat(Ge.fragmentSource,e.fragmentSource).join("\n"),l=a.concat(Ge.vertexSource,e.vertexSource).join("\n"),u=o.createShader(o.FRAGMENT_SHADER)
if(o.isContextLost())this.failedToCreate=!0
else{o.shaderSource(u,s),o.compileShader(u),o.attachShader(this.program,u)
var c=o.createShader(o.VERTEX_SHADER)
if(o.isContextLost())this.failedToCreate=!0
else{o.shaderSource(c,l),o.compileShader(c),o.attachShader(this.program,c)
for(var p=r?r.layoutAttributes:[],h=0;h<p.length;h++)o.bindAttribLocation(this.program,h,p[h].name)
o.linkProgram(this.program),o.deleteShader(c),o.deleteShader(u),this.numAttributes=o.getProgramParameter(this.program,o.ACTIVE_ATTRIBUTES),this.attributes={}
for(var f={},d=0;d<this.numAttributes;d++){var m=o.getActiveAttrib(this.program,d)
m&&(this.attributes[m.name]=o.getAttribLocation(this.program,m.name))}for(var y=o.getProgramParameter(this.program,o.ACTIVE_UNIFORMS),g=0;g<y;g++){var _=o.getActiveUniform(this.program,g)
_&&(f[_.name]=o.getUniformLocation(this.program,_.name))}this.fixedUniforms=i(t,f),this.binderUniforms=r?r.getUniforms(t,f):[]}}}
function br(t,e,r){var i=1/he(r,1,e.transform.tileZoom),n=Math.pow(2,r.tileID.overscaledZ),o=r.tileSize*Math.pow(2,e.transform.tileZoom)/n,a=o*(r.tileID.canonical.x+r.tileID.wrap*n),s=o*r.tileID.canonical.y
return{u_image:0,u_texsize:r.imageAtlasTexture.size,u_scale:[i,t.fromScale,t.toScale],u_fade:t.t,u_pixel_coord_upper:[a>>16,s>>16],u_pixel_coord_lower:[65535&a,65535&s]}}xr.prototype.draw=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m){var y,g=t.gl
if(!this.failedToCreate){for(var _ in t.program.set(this.program),t.setDepthMode(r),t.setStencilMode(i),t.setColorMode(n),t.setCullFace(o),this.fixedUniforms)this.fixedUniforms[_].set(a[_])
f&&f.setUniforms(t,this.binderUniforms,p,{zoom:h})
for(var v=(y={},y[g.LINES]=2,y[g.TRIANGLES]=3,y[g.LINE_STRIP]=1,y)[e],x=0,b=c.get();x<b.length;x+=1){var w=b[x],S=w.vaos||(w.vaos={});(S[s]||(S[s]=new vr)).bind(t,this,l,f?f.getPaintVertexBuffers():[],u,w.vertexOffset,d,m),g.drawElements(e,w.primitiveLength*v,g.UNSIGNED_SHORT,w.primitiveOffset*v*2)}}}
var wr=function(e,r,i,n){var o=r.style.light,a=o.properties.get("position"),s=[a.x,a.y,a.z],l=t.create$1()
"viewport"===o.properties.get("anchor")&&t.fromRotation(l,-r.transform.angle),t.transformMat3(s,s,l)
var u=o.properties.get("color")
return{u_matrix:e,u_lightpos:s,u_lightintensity:o.properties.get("intensity"),u_lightcolor:[u.r,u.g,u.b],u_vertical_gradient:+i,u_opacity:n}},Sr=function(e,r,i,n,o,a,s){return t.extend(wr(e,r,i,n),br(a,r,s),{u_height_factor:-Math.pow(2,o.overscaledZ)/s.tileSize/8})},Tr=function(t){return{u_matrix:t}},Ir=function(e,r,i,n){return t.extend(Tr(e),br(i,r,n))},Er=function(t,e){return{u_matrix:t,u_world:e}},Ar=function(e,r,i,n,o){return t.extend(Ir(e,r,i,n),{u_world:o})},zr=function(e,r,i,n){var o,a,s=e.transform
if("map"===n.paint.get("circle-pitch-alignment")){var l=he(i,1,s.zoom)
o=!0,a=[l,l]}else o=!1,a=s.pixelsToGLUnits
return{u_camera_to_center_distance:s.cameraToCenterDistance,u_scale_with_map:+("map"===n.paint.get("circle-pitch-scale")),u_matrix:e.translatePosMatrix(r.posMatrix,i,n.paint.get("circle-translate"),n.paint.get("circle-translate-anchor")),u_pitch_with_map:+o,u_device_pixel_ratio:t.browser.devicePixelRatio,u_extrude_scale:a}},Pr=function(t,e,r){var i=he(r,1,e.zoom),n=Math.pow(2,e.zoom-r.tileID.overscaledZ),o=r.tileID.overscaleFactor()
return{u_matrix:t,u_camera_to_center_distance:e.cameraToCenterDistance,u_pixels_to_tile_units:i,u_extrude_scale:[e.pixelsToGLUnits[0]/(i*n),e.pixelsToGLUnits[1]/(i*n)],u_overscale_factor:o}},Cr=function(t,e,r){return{u_matrix:t,u_inv_matrix:e,u_camera_to_center_distance:r.cameraToCenterDistance,u_viewport_size:[r.width,r.height]}},kr=function(t,e,r){return void 0===r&&(r=1),{u_matrix:t,u_color:e,u_overlay:0,u_overlay_scale:r}},Mr=function(t){return{u_matrix:t}},Dr=function(t,e,r,i){return{u_matrix:t,u_extrude_scale:he(e,1,r),u_intensity:i}},Lr=function(e,r,i){var n=e.transform
return{u_matrix:Ur(e,r,i),u_ratio:1/he(r,1,n.zoom),u_device_pixel_ratio:t.browser.devicePixelRatio,u_units_to_pixels:[1/n.pixelsToGLUnits[0],1/n.pixelsToGLUnits[1]]}},Rr=function(e,r,i){return t.extend(Lr(e,r,i),{u_image:0})},Br=function(e,r,i,n){var o=e.transform,a=Or(r,o)
return{u_matrix:Ur(e,r,i),u_texsize:r.imageAtlasTexture.size,u_ratio:1/he(r,1,o.zoom),u_device_pixel_ratio:t.browser.devicePixelRatio,u_image:0,u_scale:[a,n.fromScale,n.toScale],u_fade:n.t,u_units_to_pixels:[1/o.pixelsToGLUnits[0],1/o.pixelsToGLUnits[1]]}},Fr=function(e,r,i,n,o){var a=e.lineAtlas,s=Or(r,e.transform),l="round"===i.layout.get("line-cap"),u=a.getDash(n.from,l),c=a.getDash(n.to,l),p=u.width*o.fromScale,h=c.width*o.toScale
return t.extend(Lr(e,r,i),{u_patternscale_a:[s/p,-u.height/2],u_patternscale_b:[s/h,-c.height/2],u_sdfgamma:a.width/(256*Math.min(p,h)*t.browser.devicePixelRatio)/2,u_image:0,u_tex_y_a:u.y,u_tex_y_b:c.y,u_mix:o.t})}
function Or(t,e){return 1/he(t,1,e.tileZoom)}function Ur(t,e,r){return t.translatePosMatrix(e.tileID.posMatrix,e,r.paint.get("line-translate"),r.paint.get("line-translate-anchor"))}var Vr=function(t,e,r,i,n){return{u_matrix:t,u_tl_parent:e,u_scale_parent:r,u_buffer_scale:1,u_fade_t:i.mix,u_opacity:i.opacity*n.paint.get("raster-opacity"),u_image0:0,u_image1:1,u_brightness_low:n.paint.get("raster-brightness-min"),u_brightness_high:n.paint.get("raster-brightness-max"),u_saturation_factor:(a=n.paint.get("raster-saturation"),a>0?1-1/(1.001-a):-a),u_contrast_factor:(o=n.paint.get("raster-contrast"),o>0?1/(1-o):1+o),u_spin_weights:Nr(n.paint.get("raster-hue-rotate"))}
var o,a}
function Nr(t){t*=Math.PI/180
var e=Math.sin(t),r=Math.cos(t)
return[(2*r+1)/3,(-Math.sqrt(3)*e-r+1)/3,(Math.sqrt(3)*e-r+1)/3]}var jr,qr=function(t,e,r,i,n,o,a,s,l,u){var c=n.transform
return{u_is_size_zoom_constant:+("constant"===t||"source"===t),u_is_size_feature_constant:+("constant"===t||"camera"===t),u_size_t:e?e.uSizeT:0,u_size:e?e.uSize:0,u_camera_to_center_distance:c.cameraToCenterDistance,u_pitch:c.pitch/360*2*Math.PI,u_rotate_symbol:+r,u_aspect_ratio:c.width/c.height,u_fade_change:n.options.fadeDuration?n.symbolFadeChange:1,u_matrix:o,u_label_plane_matrix:a,u_coord_matrix:s,u_is_text:+l,u_pitch_with_map:+i,u_texsize:u,u_texture:0}},Zr=function(e,r,i,n,o,a,s,l,u,c,p){var h=o.transform
return t.extend(qr(e,r,i,n,o,a,s,l,u,c),{u_gamma_scale:n?Math.cos(h._pitch)*h.cameraToCenterDistance:1,u_device_pixel_ratio:t.browser.devicePixelRatio,u_is_halo:+p})},Gr=function(e,r,i,n,o,a,s,l,u,c){return t.extend(Zr(e,r,i,n,o,a,s,l,!0,u,!0),{u_texsize_icon:c,u_texture_icon:1})},Xr=function(t,e,r){return{u_matrix:t,u_opacity:e,u_color:r}},Wr=function(e,r,i,n,o,a){return t.extend(function(t,e,r,i){var n=r.imageManager.getPattern(t.from.toString()),o=r.imageManager.getPattern(t.to.toString()),a=r.imageManager.getPixelSize(),s=a.width,l=a.height,u=Math.pow(2,i.tileID.overscaledZ),c=i.tileSize*Math.pow(2,r.transform.tileZoom)/u,p=c*(i.tileID.canonical.x+i.tileID.wrap*u),h=c*i.tileID.canonical.y
return{u_image:0,u_pattern_tl_a:n.tl,u_pattern_br_a:n.br,u_pattern_tl_b:o.tl,u_pattern_br_b:o.br,u_texsize:[s,l],u_mix:e.t,u_pattern_size_a:n.displaySize,u_pattern_size_b:o.displaySize,u_scale_a:e.fromScale,u_scale_b:e.toScale,u_tile_units_to_pixels:1/he(i,1,r.transform.tileZoom),u_pixel_coord_upper:[p>>16,h>>16],u_pixel_coord_lower:[65535&p,65535&h]}}(n,a,i,o),{u_matrix:e,u_opacity:r})},Kr={fillExtrusion:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_lightpos:new t.Uniform3f(e,r.u_lightpos),u_lightintensity:new t.Uniform1f(e,r.u_lightintensity),u_lightcolor:new t.Uniform3f(e,r.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,r.u_vertical_gradient),u_opacity:new t.Uniform1f(e,r.u_opacity)}},fillExtrusionPattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_lightpos:new t.Uniform3f(e,r.u_lightpos),u_lightintensity:new t.Uniform1f(e,r.u_lightintensity),u_lightcolor:new t.Uniform3f(e,r.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,r.u_vertical_gradient),u_height_factor:new t.Uniform1f(e,r.u_height_factor),u_image:new t.Uniform1i(e,r.u_image),u_texsize:new t.Uniform2f(e,r.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,r.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,r.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,r.u_scale),u_fade:new t.Uniform1f(e,r.u_fade),u_opacity:new t.Uniform1f(e,r.u_opacity)}},fill:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},fillPattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_image:new t.Uniform1i(e,r.u_image),u_texsize:new t.Uniform2f(e,r.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,r.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,r.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,r.u_scale),u_fade:new t.Uniform1f(e,r.u_fade)}},fillOutline:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_world:new t.Uniform2f(e,r.u_world)}},fillOutlinePattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_world:new t.Uniform2f(e,r.u_world),u_image:new t.Uniform1i(e,r.u_image),u_texsize:new t.Uniform2f(e,r.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,r.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,r.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,r.u_scale),u_fade:new t.Uniform1f(e,r.u_fade)}},circle:function(e,r){return{u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_scale_with_map:new t.Uniform1i(e,r.u_scale_with_map),u_pitch_with_map:new t.Uniform1i(e,r.u_pitch_with_map),u_extrude_scale:new t.Uniform2f(e,r.u_extrude_scale),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},collisionBox:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_pixels_to_tile_units:new t.Uniform1f(e,r.u_pixels_to_tile_units),u_extrude_scale:new t.Uniform2f(e,r.u_extrude_scale),u_overscale_factor:new t.Uniform1f(e,r.u_overscale_factor)}},collisionCircle:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_inv_matrix:new t.UniformMatrix4f(e,r.u_inv_matrix),u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_viewport_size:new t.Uniform2f(e,r.u_viewport_size)}},debug:function(e,r){return{u_color:new t.UniformColor(e,r.u_color),u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_overlay:new t.Uniform1i(e,r.u_overlay),u_overlay_scale:new t.Uniform1f(e,r.u_overlay_scale)}},clippingMask:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},heatmap:function(e,r){return{u_extrude_scale:new t.Uniform1f(e,r.u_extrude_scale),u_intensity:new t.Uniform1f(e,r.u_intensity),u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},heatmapTexture:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_world:new t.Uniform2f(e,r.u_world),u_image:new t.Uniform1i(e,r.u_image),u_color_ramp:new t.Uniform1i(e,r.u_color_ramp),u_opacity:new t.Uniform1f(e,r.u_opacity)}},hillshade:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_image:new t.Uniform1i(e,r.u_image),u_latrange:new t.Uniform2f(e,r.u_latrange),u_light:new t.Uniform2f(e,r.u_light),u_shadow:new t.UniformColor(e,r.u_shadow),u_highlight:new t.UniformColor(e,r.u_highlight),u_accent:new t.UniformColor(e,r.u_accent)}},hillshadePrepare:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_image:new t.Uniform1i(e,r.u_image),u_dimension:new t.Uniform2f(e,r.u_dimension),u_zoom:new t.Uniform1f(e,r.u_zoom),u_maxzoom:new t.Uniform1f(e,r.u_maxzoom),u_unpack:new t.Uniform4f(e,r.u_unpack)}},line:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_ratio:new t.Uniform1f(e,r.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,r.u_units_to_pixels)}},lineGradient:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_ratio:new t.Uniform1f(e,r.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,r.u_units_to_pixels),u_image:new t.Uniform1i(e,r.u_image)}},linePattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_texsize:new t.Uniform2f(e,r.u_texsize),u_ratio:new t.Uniform1f(e,r.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_image:new t.Uniform1i(e,r.u_image),u_units_to_pixels:new t.Uniform2f(e,r.u_units_to_pixels),u_scale:new t.Uniform3f(e,r.u_scale),u_fade:new t.Uniform1f(e,r.u_fade)}},lineSDF:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_ratio:new t.Uniform1f(e,r.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,r.u_units_to_pixels),u_patternscale_a:new t.Uniform2f(e,r.u_patternscale_a),u_patternscale_b:new t.Uniform2f(e,r.u_patternscale_b),u_sdfgamma:new t.Uniform1f(e,r.u_sdfgamma),u_image:new t.Uniform1i(e,r.u_image),u_tex_y_a:new t.Uniform1f(e,r.u_tex_y_a),u_tex_y_b:new t.Uniform1f(e,r.u_tex_y_b),u_mix:new t.Uniform1f(e,r.u_mix)}},raster:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_tl_parent:new t.Uniform2f(e,r.u_tl_parent),u_scale_parent:new t.Uniform1f(e,r.u_scale_parent),u_buffer_scale:new t.Uniform1f(e,r.u_buffer_scale),u_fade_t:new t.Uniform1f(e,r.u_fade_t),u_opacity:new t.Uniform1f(e,r.u_opacity),u_image0:new t.Uniform1i(e,r.u_image0),u_image1:new t.Uniform1i(e,r.u_image1),u_brightness_low:new t.Uniform1f(e,r.u_brightness_low),u_brightness_high:new t.Uniform1f(e,r.u_brightness_high),u_saturation_factor:new t.Uniform1f(e,r.u_saturation_factor),u_contrast_factor:new t.Uniform1f(e,r.u_contrast_factor),u_spin_weights:new t.Uniform3f(e,r.u_spin_weights)}},symbolIcon:function(e,r){return{u_is_size_zoom_constant:new t.Uniform1i(e,r.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,r.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,r.u_size_t),u_size:new t.Uniform1f(e,r.u_size),u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,r.u_pitch),u_rotate_symbol:new t.Uniform1i(e,r.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,r.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,r.u_fade_change),u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,r.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,r.u_coord_matrix),u_is_text:new t.Uniform1i(e,r.u_is_text),u_pitch_with_map:new t.Uniform1i(e,r.u_pitch_with_map),u_texsize:new t.Uniform2f(e,r.u_texsize),u_texture:new t.Uniform1i(e,r.u_texture)}},symbolSDF:function(e,r){return{u_is_size_zoom_constant:new t.Uniform1i(e,r.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,r.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,r.u_size_t),u_size:new t.Uniform1f(e,r.u_size),u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,r.u_pitch),u_rotate_symbol:new t.Uniform1i(e,r.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,r.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,r.u_fade_change),u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,r.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,r.u_coord_matrix),u_is_text:new t.Uniform1i(e,r.u_is_text),u_pitch_with_map:new t.Uniform1i(e,r.u_pitch_with_map),u_texsize:new t.Uniform2f(e,r.u_texsize),u_texture:new t.Uniform1i(e,r.u_texture),u_gamma_scale:new t.Uniform1f(e,r.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_is_halo:new t.Uniform1i(e,r.u_is_halo)}},symbolTextAndIcon:function(e,r){return{u_is_size_zoom_constant:new t.Uniform1i(e,r.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,r.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,r.u_size_t),u_size:new t.Uniform1f(e,r.u_size),u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,r.u_pitch),u_rotate_symbol:new t.Uniform1i(e,r.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,r.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,r.u_fade_change),u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,r.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,r.u_coord_matrix),u_is_text:new t.Uniform1i(e,r.u_is_text),u_pitch_with_map:new t.Uniform1i(e,r.u_pitch_with_map),u_texsize:new t.Uniform2f(e,r.u_texsize),u_texsize_icon:new t.Uniform2f(e,r.u_texsize_icon),u_texture:new t.Uniform1i(e,r.u_texture),u_texture_icon:new t.Uniform1i(e,r.u_texture_icon),u_gamma_scale:new t.Uniform1f(e,r.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_is_halo:new t.Uniform1i(e,r.u_is_halo)}},background:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_opacity:new t.Uniform1f(e,r.u_opacity),u_color:new t.UniformColor(e,r.u_color)}},backgroundPattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_opacity:new t.Uniform1f(e,r.u_opacity),u_image:new t.Uniform1i(e,r.u_image),u_pattern_tl_a:new t.Uniform2f(e,r.u_pattern_tl_a),u_pattern_br_a:new t.Uniform2f(e,r.u_pattern_br_a),u_pattern_tl_b:new t.Uniform2f(e,r.u_pattern_tl_b),u_pattern_br_b:new t.Uniform2f(e,r.u_pattern_br_b),u_texsize:new t.Uniform2f(e,r.u_texsize),u_mix:new t.Uniform1f(e,r.u_mix),u_pattern_size_a:new t.Uniform2f(e,r.u_pattern_size_a),u_pattern_size_b:new t.Uniform2f(e,r.u_pattern_size_b),u_scale_a:new t.Uniform1f(e,r.u_scale_a),u_scale_b:new t.Uniform1f(e,r.u_scale_b),u_pixel_coord_upper:new t.Uniform2f(e,r.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,r.u_pixel_coord_lower),u_tile_units_to_pixels:new t.Uniform1f(e,r.u_tile_units_to_pixels)}}}
function Hr(e,r,i,n,o,a,s){for(var l=e.context,u=l.gl,c=e.useProgram("collisionBox"),p=[],h=0,f=0,d=0;d<n.length;d++){var m=n[d],y=r.getTile(m),g=y.getBucket(i)
if(g){var _=m.posMatrix
0===o[0]&&0===o[1]||(_=e.translatePosMatrix(m.posMatrix,y,o,a))
var v=s?g.textCollisionBox:g.iconCollisionBox,x=g.collisionCircleArray
if(x.length>0){var b=t.create(),w=_
t.mul(b,g.placementInvProjMatrix,e.transform.glCoordMatrix),t.mul(b,b,g.placementViewportMatrix),p.push({circleArray:x,circleOffset:f,transform:w,invTransform:b}),f=h+=x.length/4}v&&c.draw(l,u.LINES,It.disabled,Et.disabled,e.colorModeForRenderPass(),zt.disabled,Pr(_,e.transform,y),i.id,v.layoutVertexBuffer,v.indexBuffer,v.segments,null,e.transform.zoom,null,null,v.collisionVertexBuffer)}}if(s&&p.length){var S=e.useProgram("collisionCircle"),T=new t.StructArrayLayout2f1f2i16
T.resize(4*h),T._trim()
for(var I=0,E=0,A=p;E<A.length;E+=1)for(var z=A[E],P=0;P<z.circleArray.length/4;P++){var C=4*P,k=z.circleArray[C+0],M=z.circleArray[C+1],D=z.circleArray[C+2],L=z.circleArray[C+3]
T.emplace(I++,k,M,D,L,0),T.emplace(I++,k,M,D,L,1),T.emplace(I++,k,M,D,L,2),T.emplace(I++,k,M,D,L,3)}(!jr||jr.length<2*h)&&(jr=function(e){var r=2*e,i=new t.StructArrayLayout3ui6
i.resize(r),i._trim()
for(var n=0;n<r;n++){var o=6*n
i.uint16[o+0]=4*n+0,i.uint16[o+1]=4*n+1,i.uint16[o+2]=4*n+2,i.uint16[o+3]=4*n+2,i.uint16[o+4]=4*n+3,i.uint16[o+5]=4*n+0}return i}(h))
for(var R=l.createIndexBuffer(jr,!0),B=l.createVertexBuffer(T,t.collisionCircleLayout.members,!0),F=0,O=p;F<O.length;F+=1){var U=O[F],V=Cr(U.transform,U.invTransform,e.transform)
S.draw(l,u.TRIANGLES,It.disabled,Et.disabled,e.colorModeForRenderPass(),zt.disabled,V,i.id,B,R,t.SegmentVector.simpleSegment(0,2*U.circleOffset,U.circleArray.length,U.circleArray.length/2),null,e.transform.zoom,null,null,null)}B.destroy(),R.destroy()}}var Jr=t.identity(new Float32Array(16))
function Yr(e,r,i,n,o,a){var s=t.getAnchorAlignment(e),l=-(s.horizontalAlign-.5)*r,u=-(s.verticalAlign-.5)*i,c=t.evaluateVariableOffset(e,n)
return new t.Point((l/o+c[0])*a,(u/o+c[1])*a)}function Qr(e,r,i,n,o,a,s,l,u,c,p){var h=e.text.placedSymbolArray,f=e.text.dynamicLayoutVertexArray,d=e.icon.dynamicLayoutVertexArray,m={}
f.clear()
for(var y=0;y<h.length;y++){var g=h.get(y),_=g.hidden||!g.crossTileID||e.allowVerticalPlacement&&!g.placedOrientation?null:n[g.crossTileID]
if(_){var v=new t.Point(g.anchorX,g.anchorY),x=$t(v,i?l:s),b=te(a.cameraToCenterDistance,x.signedDistanceFromCamera),w=o.evaluateSizeForFeature(e.textSizeData,c,g)*b/t.ONE_EM
i&&(w*=e.tilePixelRatio/u)
for(var S=Yr(_.anchor,_.width,_.height,_.textOffset,_.textBoxScale,w),T=i?$t(v.add(S),s).point:x.point.add(r?S.rotate(-a.angle):S),I=e.allowVerticalPlacement&&g.placedOrientation===t.WritingMode.vertical?Math.PI/2:0,E=0;E<g.numGlyphs;E++)t.addDynamicAttributes(f,T,I)
p&&g.associatedIconIndex>=0&&(m[g.associatedIconIndex]={shiftedAnchor:T,angle:I})}else ue(g.numGlyphs,f)}if(p){d.clear()
for(var A=e.icon.placedSymbolArray,z=0;z<A.length;z++){var P=A.get(z)
if(P.hidden)ue(P.numGlyphs,d)
else{var C=m[z]
if(C)for(var k=0;k<P.numGlyphs;k++)t.addDynamicAttributes(d,C.shiftedAnchor,C.angle)
else ue(P.numGlyphs,d)}}e.icon.dynamicLayoutVertexBuffer.updateData(d)}e.text.dynamicLayoutVertexBuffer.updateData(f)}function $r(t,e,r){return r.iconsInText&&e?"symbolTextAndIcon":t?"symbolSDF":"symbolIcon"}function ti(e,r,i,n,o,a,s,l,u,c,p,h){for(var f=e.context,d=f.gl,m=e.transform,y="map"===l,g="map"===u,_=y&&"point"!==i.layout.get("symbol-placement"),v=y&&!g&&!_,x=void 0!==i.layout.get("symbol-sort-key").constantOr(1),b=e.depthModeForSublayer(0,It.ReadOnly),w=i.layout.get("text-variable-anchor"),S=[],T=0,I=n;T<I.length;T+=1){var E=I[T],A=r.getTile(E),z=A.getBucket(i)
if(z){var P=o?z.text:z.icon
if(P&&P.segments.get().length){var C=P.programConfigurations.get(i.id),k=o||z.sdfIcons,M=o?z.textSizeData:z.iconSizeData,D=g||0!==m.pitch,L=e.useProgram($r(k,o,z),C),R=t.evaluateSizeForZoom(M,m.zoom),B=void 0,F=[0,0],O=void 0,U=void 0,V=null,N=void 0
if(o)O=A.glyphAtlasTexture,U=d.LINEAR,B=A.glyphAtlasTexture.size,z.iconsInText&&(F=A.imageAtlasTexture.size,V=A.imageAtlasTexture,N=D||e.options.rotating||e.options.zooming||"composite"===M.kind||"camera"===M.kind?d.LINEAR:d.NEAREST)
else{var j=1!==i.layout.get("icon-size").constantOr(0)||z.iconsNeedLinear
O=A.imageAtlasTexture,U=k||e.options.rotating||e.options.zooming||j||D?d.LINEAR:d.NEAREST,B=A.imageAtlasTexture.size}var q=he(A,1,e.transform.zoom),Z=Yt(E.posMatrix,g,y,e.transform,q),G=Qt(E.posMatrix,g,y,e.transform,q),X=w&&z.hasTextData(),W="none"!==i.layout.get("icon-text-fit")&&X&&z.hasIconData()
_&&re(z,E.posMatrix,e,o,Z,G,g,c)
var K=e.translatePosMatrix(E.posMatrix,A,a,s),H=_||o&&w||W?Jr:Z,J=e.translatePosMatrix(G,A,a,s,!0),Y=k&&0!==i.paint.get(o?"text-halo-width":"icon-halo-width").constantOr(1),Q={program:L,buffers:P,uniformValues:k?z.iconsInText?Gr(M.kind,R,v,g,e,K,H,J,B,F):Zr(M.kind,R,v,g,e,K,H,J,o,B,!0):qr(M.kind,R,v,g,e,K,H,J,o,B),atlasTexture:O,atlasTextureIcon:V,atlasInterpolation:U,atlasInterpolationIcon:N,isSDF:k,hasHalo:Y}
if(x)for(var $=0,tt=P.segments.get();$<tt.length;$+=1){var et=tt[$]
S.push({segments:new t.SegmentVector([et]),sortKey:et.sortKey,state:Q})}else S.push({segments:P.segments,sortKey:0,state:Q})}}}x&&S.sort((function(t,e){return t.sortKey-e.sortKey}))
for(var rt=0,it=S;rt<it.length;rt+=1){var nt=it[rt],ot=nt.state
if(f.activeTexture.set(d.TEXTURE0),ot.atlasTexture.bind(ot.atlasInterpolation,d.CLAMP_TO_EDGE),ot.atlasTextureIcon&&(f.activeTexture.set(d.TEXTURE1),ot.atlasTextureIcon&&ot.atlasTextureIcon.bind(ot.atlasInterpolationIcon,d.CLAMP_TO_EDGE)),ot.isSDF){var at=ot.uniformValues
ot.hasHalo&&(at.u_is_halo=1,ei(ot.buffers,nt.segments,i,e,ot.program,b,p,h,at)),at.u_is_halo=0}ei(ot.buffers,nt.segments,i,e,ot.program,b,p,h,ot.uniformValues)}}function ei(t,e,r,i,n,o,a,s,l){var u=i.context
n.draw(u,u.gl.TRIANGLES,o,a,s,zt.disabled,l,r.id,t.layoutVertexBuffer,t.indexBuffer,e,r.paint,i.transform.zoom,t.programConfigurations.get(r.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer)}function ri(t,e,r,i,n,o,a){var s,l,u,c,p,h=t.context.gl,f=r.paint.get("fill-pattern"),d=f&&f.constantOr(1),m=r.getCrossfadeParameters()
a?(l=d&&!r.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline",s=h.LINES):(l=d?"fillPattern":"fill",s=h.TRIANGLES)
for(var y=0,g=i;y<g.length;y+=1){var _=g[y],v=e.getTile(_)
if(!d||v.patternsLoaded()){var x=v.getBucket(r)
if(x){var b=x.programConfigurations.get(r.id),w=t.useProgram(l,b)
d&&(t.context.activeTexture.set(h.TEXTURE0),v.imageAtlasTexture.bind(h.LINEAR,h.CLAMP_TO_EDGE),b.updatePaintBuffers(m))
var S=f.constantOr(null)
if(S&&v.imageAtlas){var T=v.imageAtlas,I=T.patternPositions[S.to.toString()],E=T.patternPositions[S.from.toString()]
I&&E&&b.setConstantPatternPositions(I,E)}var A=t.translatePosMatrix(_.posMatrix,v,r.paint.get("fill-translate"),r.paint.get("fill-translate-anchor"))
if(a){c=x.indexBuffer2,p=x.segments2
var z=[h.drawingBufferWidth,h.drawingBufferHeight]
u="fillOutlinePattern"===l&&d?Ar(A,t,m,v,z):Er(A,z)}else c=x.indexBuffer,p=x.segments,u=d?Ir(A,t,m,v):Tr(A)
w.draw(t.context,s,n,t.stencilModeForClipping(_),o,zt.disabled,u,r.id,x.layoutVertexBuffer,c,p,r.paint,t.transform.zoom,b)}}}}function ii(t,e,r,i,n,o,a){for(var s=t.context,l=s.gl,u=r.paint.get("fill-extrusion-pattern"),c=u.constantOr(1),p=r.getCrossfadeParameters(),h=r.paint.get("fill-extrusion-opacity"),f=0,d=i;f<d.length;f+=1){var m=d[f],y=e.getTile(m),g=y.getBucket(r)
if(g){var _=g.programConfigurations.get(r.id),v=t.useProgram(c?"fillExtrusionPattern":"fillExtrusion",_)
c&&(t.context.activeTexture.set(l.TEXTURE0),y.imageAtlasTexture.bind(l.LINEAR,l.CLAMP_TO_EDGE),_.updatePaintBuffers(p))
var x=u.constantOr(null)
if(x&&y.imageAtlas){var b=y.imageAtlas,w=b.patternPositions[x.to.toString()],S=b.patternPositions[x.from.toString()]
w&&S&&_.setConstantPatternPositions(w,S)}var T=t.translatePosMatrix(m.posMatrix,y,r.paint.get("fill-extrusion-translate"),r.paint.get("fill-extrusion-translate-anchor")),I=r.paint.get("fill-extrusion-vertical-gradient"),E=c?Sr(T,t,I,h,m,p,y):wr(T,t,I,h)
v.draw(s,s.gl.TRIANGLES,n,o,a,zt.backCCW,E,r.id,g.layoutVertexBuffer,g.indexBuffer,g.segments,r.paint,t.transform.zoom,_)}}}function ni(e,r,i,n,o,a){var s=e.context,l=s.gl,u=r.fbo
if(u){var c=e.useProgram("hillshade")
s.activeTexture.set(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,u.colorAttachment.get())
var p=function(e,r,i){var n=i.paint.get("hillshade-shadow-color"),o=i.paint.get("hillshade-highlight-color"),a=i.paint.get("hillshade-accent-color"),s=i.paint.get("hillshade-illumination-direction")*(Math.PI/180)
"viewport"===i.paint.get("hillshade-illumination-anchor")&&(s-=e.transform.angle)
var l,u,c,p=!e.options.moving
return{u_matrix:e.transform.calculatePosMatrix(r.tileID.toUnwrapped(),p),u_image:0,u_latrange:(l=r.tileID,u=Math.pow(2,l.canonical.z),c=l.canonical.y,[new t.MercatorCoordinate(0,c/u).toLngLat().lat,new t.MercatorCoordinate(0,(c+1)/u).toLngLat().lat]),u_light:[i.paint.get("hillshade-exaggeration"),s],u_shadow:n,u_highlight:o,u_accent:a}}(e,r,i)
c.draw(s,l.TRIANGLES,n,o,a,zt.disabled,p,i.id,e.rasterBoundsBuffer,e.quadTriangleIndexBuffer,e.rasterBoundsSegments)}}function oi(e,r,i,n,o,a,s){var l=e.context,u=l.gl,c=r.dem
if(c&&c.data){var p=c.dim,h=c.stride,f=c.getPixels()
if(l.activeTexture.set(u.TEXTURE1),l.pixelStoreUnpackPremultiplyAlpha.set(!1),r.demTexture=r.demTexture||e.getTileTexture(h),r.demTexture){var d=r.demTexture
d.update(f,{premultiply:!1}),d.bind(u.NEAREST,u.CLAMP_TO_EDGE)}else r.demTexture=new t.Texture(l,f,u.RGBA,{premultiply:!1}),r.demTexture.bind(u.NEAREST,u.CLAMP_TO_EDGE)
l.activeTexture.set(u.TEXTURE0)
var m=r.fbo
if(!m){var y=new t.Texture(l,{width:p,height:p,data:null},u.RGBA)
y.bind(u.LINEAR,u.CLAMP_TO_EDGE),(m=r.fbo=l.createFramebuffer(p,p,!0)).colorAttachment.set(y.texture)}l.bindFramebuffer.set(m.framebuffer),l.viewport.set([0,0,p,p]),e.useProgram("hillshadePrepare").draw(l,u.TRIANGLES,o,a,s,zt.disabled,function(e,r,i){var n=r.stride,o=t.create()
return t.ortho(o,0,t.EXTENT,-t.EXTENT,0,0,1),t.translate(o,o,[0,-t.EXTENT,0]),{u_matrix:o,u_image:1,u_dimension:[n,n],u_zoom:e.overscaledZ,u_maxzoom:i,u_unpack:r.getUnpackVector()}}(r.tileID,c,n),i.id,e.rasterBoundsBuffer,e.quadTriangleIndexBuffer,e.rasterBoundsSegments),r.needsHillshadePrepare=!1}}function ai(e,r,i,n,o){var a=n.paint.get("raster-fade-duration")
if(a>0){var s=t.browser.now(),l=(s-e.timeAdded)/a,u=r?(s-r.timeAdded)/a:-1,c=i.getSource(),p=o.coveringZoomLevel({tileSize:c.tileSize,roundZoom:c.roundZoom}),h=!r||Math.abs(r.tileID.overscaledZ-p)>Math.abs(e.tileID.overscaledZ-p),f=h&&e.refreshedUponExpiration?1:t.clamp(h?l:1-u,0,1)
return e.refreshedUponExpiration&&l>=1&&(e.refreshedUponExpiration=!1),r?{opacity:1,mix:1-f}:{opacity:f,mix:0}}return{opacity:1,mix:0}}var si=new t.Color(1,0,0,1),li=new t.Color(0,1,0,1),ui=new t.Color(0,0,1,1),ci=new t.Color(1,0,1,1),pi=new t.Color(0,1,1,1)
function hi(t,e,r,i){di(t,0,e+r/2,t.transform.width,r,i)}function fi(t,e,r,i){di(t,e-r/2,0,r,t.transform.height,i)}function di(e,r,i,n,o,a){var s=e.context,l=s.gl
l.enable(l.SCISSOR_TEST),l.scissor(r*t.browser.devicePixelRatio,i*t.browser.devicePixelRatio,n*t.browser.devicePixelRatio,o*t.browser.devicePixelRatio),s.clear({color:a}),l.disable(l.SCISSOR_TEST)}function mi(e,r,i){var n=e.context,o=n.gl,a=i.posMatrix,s=e.useProgram("debug"),l=It.disabled,u=Et.disabled,c=e.colorModeForRenderPass()
n.activeTexture.set(o.TEXTURE0),e.emptyTexture.bind(o.LINEAR,o.CLAMP_TO_EDGE),s.draw(n,o.LINE_STRIP,l,u,c,zt.disabled,kr(a,t.Color.red),"$debug",e.debugBuffer,e.tileBorderIndexBuffer,e.debugSegments)
var p=r.getTileByID(i.key).latestRawTileData,h=Math.floor((p&&p.byteLength||0)/1024),f=r.getTile(i).tileSize,d=512/Math.min(f,512)*(i.overscaledZ/e.transform.zoom)*.5,m=i.canonical.toString()
i.overscaledZ!==i.canonical.z&&(m+=" => "+i.overscaledZ),function(t,e){t.initDebugOverlayCanvas()
var r=t.debugOverlayCanvas,i=t.context.gl,n=t.debugOverlayCanvas.getContext("2d")
n.clearRect(0,0,r.width,r.height),n.shadowColor="white",n.shadowBlur=2,n.lineWidth=1.5,n.strokeStyle="white",n.textBaseline="top",n.font="bold 36px Open Sans, sans-serif",n.fillText(e,5,5),n.strokeText(e,5,5),t.debugOverlayTexture.update(r),t.debugOverlayTexture.bind(i.LINEAR,i.CLAMP_TO_EDGE)}(e,m+" "+h+"kb"),s.draw(n,o.TRIANGLES,l,u,At.alphaBlended,zt.disabled,kr(a,t.Color.transparent,d),"$debug",e.debugBuffer,e.quadTriangleIndexBuffer,e.debugSegments)}var yi={symbol:function(e,r,i,n,o){if("translucent"===e.renderPass){var a=Et.disabled,s=e.colorModeForRenderPass()
i.layout.get("text-variable-anchor")&&function(e,r,i,n,o,a,s){for(var l=r.transform,u="map"===o,c="map"===a,p=0,h=e;p<h.length;p+=1){var f=h[p],d=n.getTile(f),m=d.getBucket(i)
if(m&&m.text&&m.text.segments.get().length){var y=t.evaluateSizeForZoom(m.textSizeData,l.zoom),g=he(d,1,r.transform.zoom),_=Yt(f.posMatrix,c,u,r.transform,g),v="none"!==i.layout.get("icon-text-fit")&&m.hasIconData()
if(y){var x=Math.pow(2,l.zoom-d.tileID.overscaledZ)
Qr(m,u,c,s,t.symbolSize,l,_,f.posMatrix,x,y,v)}}}}(n,e,i,r,i.layout.get("text-rotation-alignment"),i.layout.get("text-pitch-alignment"),o),0!==i.paint.get("icon-opacity").constantOr(1)&&ti(e,r,i,n,!1,i.paint.get("icon-translate"),i.paint.get("icon-translate-anchor"),i.layout.get("icon-rotation-alignment"),i.layout.get("icon-pitch-alignment"),i.layout.get("icon-keep-upright"),a,s),0!==i.paint.get("text-opacity").constantOr(1)&&ti(e,r,i,n,!0,i.paint.get("text-translate"),i.paint.get("text-translate-anchor"),i.layout.get("text-rotation-alignment"),i.layout.get("text-pitch-alignment"),i.layout.get("text-keep-upright"),a,s),r.map.showCollisionBoxes&&(Hr(e,r,i,n,i.paint.get("text-translate"),i.paint.get("text-translate-anchor"),!0),Hr(e,r,i,n,i.paint.get("icon-translate"),i.paint.get("icon-translate-anchor"),!1))}},circle:function(e,r,i,n){if("translucent"===e.renderPass){var o=i.paint.get("circle-opacity"),a=i.paint.get("circle-stroke-width"),s=i.paint.get("circle-stroke-opacity"),l=void 0!==i.layout.get("circle-sort-key").constantOr(1)
if(0!==o.constantOr(1)||0!==a.constantOr(1)&&0!==s.constantOr(1)){for(var u=e.context,c=u.gl,p=e.depthModeForSublayer(0,It.ReadOnly),h=Et.disabled,f=e.colorModeForRenderPass(),d=[],m=0;m<n.length;m++){var y=n[m],g=r.getTile(y),_=g.getBucket(i)
if(_){var v=_.programConfigurations.get(i.id),x={programConfiguration:v,program:e.useProgram("circle",v),layoutVertexBuffer:_.layoutVertexBuffer,indexBuffer:_.indexBuffer,uniformValues:zr(e,y,g,i)}
if(l)for(var b=0,w=_.segments.get();b<w.length;b+=1){var S=w[b]
d.push({segments:new t.SegmentVector([S]),sortKey:S.sortKey,state:x})}else d.push({segments:_.segments,sortKey:0,state:x})}}l&&d.sort((function(t,e){return t.sortKey-e.sortKey}))
for(var T=0,I=d;T<I.length;T+=1){var E=I[T],A=E.state
A.program.draw(u,c.TRIANGLES,p,h,f,zt.disabled,A.uniformValues,i.id,A.layoutVertexBuffer,A.indexBuffer,E.segments,i.paint,e.transform.zoom,A.programConfiguration)}}}},heatmap:function(e,r,i,n){if(0!==i.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){var o=e.context,a=o.gl,s=Et.disabled,l=new At([a.ONE,a.ONE],t.Color.transparent,[!0,!0,!0,!0])
!function(t,e,r){var i=t.gl
t.activeTexture.set(i.TEXTURE1),t.viewport.set([0,0,e.width/4,e.height/4])
var n=r.heatmapFbo
if(n)i.bindTexture(i.TEXTURE_2D,n.colorAttachment.get()),t.bindFramebuffer.set(n.framebuffer)
else{var o=i.createTexture()
i.bindTexture(i.TEXTURE_2D,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),n=r.heatmapFbo=t.createFramebuffer(e.width/4,e.height/4,!1),function(t,e,r,i){var n=t.gl
n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width/4,e.height/4,0,n.RGBA,t.extRenderToTextureHalfFloat?t.extTextureHalfFloat.HALF_FLOAT_OES:n.UNSIGNED_BYTE,null),i.colorAttachment.set(r)}(t,e,o,n)}}(o,e,i),o.clear({color:t.Color.transparent})
for(var u=0;u<n.length;u++){var c=n[u]
if(!r.hasRenderableParent(c)){var p=r.getTile(c),h=p.getBucket(i)
if(h){var f=h.programConfigurations.get(i.id)
e.useProgram("heatmap",f).draw(o,a.TRIANGLES,It.disabled,s,l,zt.disabled,Dr(c.posMatrix,p,e.transform.zoom,i.paint.get("heatmap-intensity")),i.id,h.layoutVertexBuffer,h.indexBuffer,h.segments,i.paint,e.transform.zoom,f)}}}o.viewport.set([0,0,e.width,e.height])}else"translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),function(e,r){var i=e.context,n=i.gl,o=r.heatmapFbo
if(o){i.activeTexture.set(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.colorAttachment.get()),i.activeTexture.set(n.TEXTURE1)
var a=r.colorRampTexture
a||(a=r.colorRampTexture=new t.Texture(i,r.colorRamp,n.RGBA)),a.bind(n.LINEAR,n.CLAMP_TO_EDGE),e.useProgram("heatmapTexture").draw(i,n.TRIANGLES,It.disabled,Et.disabled,e.colorModeForRenderPass(),zt.disabled,function(e,r,i,n){var o=t.create()
t.ortho(o,0,e.width,e.height,0,0,1)
var a=e.context.gl
return{u_matrix:o,u_world:[a.drawingBufferWidth,a.drawingBufferHeight],u_image:0,u_color_ramp:1,u_opacity:r.paint.get("heatmap-opacity")}}(e,r),r.id,e.viewportBuffer,e.quadTriangleIndexBuffer,e.viewportSegments,r.paint,e.transform.zoom)}}(e,i))},line:function(e,r,i,n){if("translucent"===e.renderPass){var o=i.paint.get("line-opacity"),a=i.paint.get("line-width")
if(0!==o.constantOr(1)&&0!==a.constantOr(1)){var s=e.depthModeForSublayer(0,It.ReadOnly),l=e.colorModeForRenderPass(),u=i.paint.get("line-dasharray"),c=i.paint.get("line-pattern"),p=c.constantOr(1),h=i.paint.get("line-gradient"),f=i.getCrossfadeParameters(),d=p?"linePattern":u?"lineSDF":h?"lineGradient":"line",m=e.context,y=m.gl,g=!0
if(h){m.activeTexture.set(y.TEXTURE0)
var _=i.gradientTexture
if(!i.gradient)return
_||(_=i.gradientTexture=new t.Texture(m,i.gradient,y.RGBA)),_.bind(y.LINEAR,y.CLAMP_TO_EDGE)}for(var v=0,x=n;v<x.length;v+=1){var b=x[v],w=r.getTile(b)
if(!p||w.patternsLoaded()){var S=w.getBucket(i)
if(S){var T=S.programConfigurations.get(i.id),I=e.context.program.get(),E=e.useProgram(d,T),A=g||E.program!==I,z=c.constantOr(null)
if(z&&w.imageAtlas){var P=w.imageAtlas,C=P.patternPositions[z.to.toString()],k=P.patternPositions[z.from.toString()]
C&&k&&T.setConstantPatternPositions(C,k)}var M=p?Br(e,w,i,f):u?Fr(e,w,i,u,f):h?Rr(e,w,i):Lr(e,w,i)
p?(m.activeTexture.set(y.TEXTURE0),w.imageAtlasTexture.bind(y.LINEAR,y.CLAMP_TO_EDGE),T.updatePaintBuffers(f)):u&&(A||e.lineAtlas.dirty)&&(m.activeTexture.set(y.TEXTURE0),e.lineAtlas.bind(m)),E.draw(m,y.TRIANGLES,s,e.stencilModeForClipping(b),l,zt.disabled,M,i.id,S.layoutVertexBuffer,S.indexBuffer,S.segments,i.paint,e.transform.zoom,T),g=!1}}}}}},fill:function(e,r,i,n){var o=i.paint.get("fill-color"),a=i.paint.get("fill-opacity")
if(0!==a.constantOr(1)){var s=e.colorModeForRenderPass(),l=i.paint.get("fill-pattern"),u=e.opaquePassEnabledForLayer()&&!l.constantOr(1)&&1===o.constantOr(t.Color.transparent).a&&1===a.constantOr(0)?"opaque":"translucent"
if(e.renderPass===u){var c=e.depthModeForSublayer(1,"opaque"===e.renderPass?It.ReadWrite:It.ReadOnly)
ri(e,r,i,n,c,s,!1)}if("translucent"===e.renderPass&&i.paint.get("fill-antialias")){var p=e.depthModeForSublayer(i.getPaintProperty("fill-outline-color")?2:0,It.ReadOnly)
ri(e,r,i,n,p,s,!0)}}},"fill-extrusion":function(t,e,r,i){var n=r.paint.get("fill-extrusion-opacity")
if(0!==n&&"translucent"===t.renderPass){var o=new It(t.context.gl.LEQUAL,It.ReadWrite,t.depthRangeFor3D)
if(1!==n||r.paint.get("fill-extrusion-pattern").constantOr(1))ii(t,e,r,i,o,Et.disabled,At.disabled),ii(t,e,r,i,o,t.stencilModeFor3D(),t.colorModeForRenderPass())
else{var a=t.colorModeForRenderPass()
ii(t,e,r,i,o,Et.disabled,a)}}},hillshade:function(t,e,r,i){if("offscreen"===t.renderPass||"translucent"===t.renderPass){for(var n=t.context,o=e.getSource().maxzoom,a=t.depthModeForSublayer(0,It.ReadOnly),s=t.colorModeForRenderPass(),l="translucent"===t.renderPass?t.stencilConfigForOverlap(i):[{},i],u=l[0],c=0,p=l[1];c<p.length;c+=1){var h=p[c],f=e.getTile(h)
f.needsHillshadePrepare&&"offscreen"===t.renderPass?oi(t,f,r,o,a,Et.disabled,s):"translucent"===t.renderPass&&ni(t,f,r,a,u[h.overscaledZ],s)}n.viewport.set([0,0,t.width,t.height])}},raster:function(t,e,r,i){if("translucent"===t.renderPass&&0!==r.paint.get("raster-opacity")&&i.length)for(var n=t.context,o=n.gl,a=e.getSource(),s=t.useProgram("raster"),l=t.colorModeForRenderPass(),u=a instanceof M?[{},i]:t.stencilConfigForOverlap(i),c=u[0],p=u[1],h=p[p.length-1].overscaledZ,f=!t.options.moving,d=0,m=p;d<m.length;d+=1){var y=m[d],g=t.depthModeForSublayer(y.overscaledZ-h,1===r.paint.get("raster-opacity")?It.ReadWrite:It.ReadOnly,o.LESS),_=e.getTile(y),v=t.transform.calculatePosMatrix(y.toUnwrapped(),f)
_.registerFadeDuration(r.paint.get("raster-fade-duration"))
var x=e.findLoadedParent(y,0),b=ai(_,x,e,r,t.transform),w=void 0,S=void 0,T="nearest"===r.paint.get("raster-resampling")?o.NEAREST:o.LINEAR
n.activeTexture.set(o.TEXTURE0),_.texture.bind(T,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),n.activeTexture.set(o.TEXTURE1),x?(x.texture.bind(T,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),w=Math.pow(2,x.tileID.overscaledZ-_.tileID.overscaledZ),S=[_.tileID.canonical.x*w%1,_.tileID.canonical.y*w%1]):_.texture.bind(T,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST)
var I=Vr(v,S||[0,0],w||1,b,r)
a instanceof M?s.draw(n,o.TRIANGLES,g,Et.disabled,l,zt.disabled,I,r.id,a.boundsBuffer,t.quadTriangleIndexBuffer,a.boundsSegments):s.draw(n,o.TRIANGLES,g,c[y.overscaledZ],l,zt.disabled,I,r.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments)}},background:function(t,e,r){var i=r.paint.get("background-color"),n=r.paint.get("background-opacity")
if(0!==n){var o=t.context,a=o.gl,s=t.transform,l=s.tileSize,u=r.paint.get("background-pattern")
if(!t.isPatternMissing(u)){var c=!u&&1===i.a&&1===n&&t.opaquePassEnabledForLayer()?"opaque":"translucent"
if(t.renderPass===c){var p=Et.disabled,h=t.depthModeForSublayer(0,"opaque"===c?It.ReadWrite:It.ReadOnly),f=t.colorModeForRenderPass(),d=t.useProgram(u?"backgroundPattern":"background"),m=s.coveringTiles({tileSize:l})
u&&(o.activeTexture.set(a.TEXTURE0),t.imageManager.bind(t.context))
for(var y=r.getCrossfadeParameters(),g=0,_=m;g<_.length;g+=1){var v=_[g],x=t.transform.calculatePosMatrix(v.toUnwrapped()),b=u?Wr(x,n,t,u,{tileID:v,tileSize:l},y):Xr(x,n,i)
d.draw(o,a.TRIANGLES,h,p,f,zt.disabled,b,r.id,t.tileExtentBuffer,t.quadTriangleIndexBuffer,t.tileExtentSegments)}}}}},debug:function(t,e,r){for(var i=0;i<r.length;i++)mi(t,e,r[i])},custom:function(t,e,r){var i=t.context,n=r.implementation
if("offscreen"===t.renderPass){var o=n.prerender
o&&(t.setCustomLayerDefaults(),i.setColorMode(t.colorModeForRenderPass()),o.call(n,i.gl,t.transform.customLayerMatrix()),i.setDirty(),t.setBaseState())}else if("translucent"===t.renderPass){t.setCustomLayerDefaults(),i.setColorMode(t.colorModeForRenderPass()),i.setStencilMode(Et.disabled)
var a="3d"===n.renderingMode?new It(t.context.gl.LEQUAL,It.ReadWrite,t.depthRangeFor3D):t.depthModeForSublayer(0,It.ReadOnly)
i.setDepthMode(a),n.render(i.gl,t.transform.customLayerMatrix()),i.setDirty(),t.setBaseState(),i.bindFramebuffer.set(null)}}},gi=function(t,e){this.context=new Pt(t),this.transform=e,this._tileTextures={},this.setup(),this.numSublayers=Ct.maxUnderzooming+Ct.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.crossTileSymbolIndex=new Oe,this.gpuTimers={}}
gi.prototype.resize=function(e,r){if(this.width=e*t.browser.devicePixelRatio,this.height=r*t.browser.devicePixelRatio,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(var i=0,n=this.style._order;i<n.length;i+=1)this.style._layers[n[i]].resize()},gi.prototype.setup=function(){var e=this.context,r=new t.StructArrayLayout2i4
r.emplaceBack(0,0),r.emplaceBack(t.EXTENT,0),r.emplaceBack(0,t.EXTENT),r.emplaceBack(t.EXTENT,t.EXTENT),this.tileExtentBuffer=e.createVertexBuffer(r,Ze.members),this.tileExtentSegments=t.SegmentVector.simpleSegment(0,0,4,2)
var i=new t.StructArrayLayout2i4
i.emplaceBack(0,0),i.emplaceBack(t.EXTENT,0),i.emplaceBack(0,t.EXTENT),i.emplaceBack(t.EXTENT,t.EXTENT),this.debugBuffer=e.createVertexBuffer(i,Ze.members),this.debugSegments=t.SegmentVector.simpleSegment(0,0,4,5)
var n=new t.StructArrayLayout4i8
n.emplaceBack(0,0,0,0),n.emplaceBack(t.EXTENT,0,t.EXTENT,0),n.emplaceBack(0,t.EXTENT,0,t.EXTENT),n.emplaceBack(t.EXTENT,t.EXTENT,t.EXTENT,t.EXTENT),this.rasterBoundsBuffer=e.createVertexBuffer(n,k.members),this.rasterBoundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)
var o=new t.StructArrayLayout2i4
o.emplaceBack(0,0),o.emplaceBack(1,0),o.emplaceBack(0,1),o.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(o,Ze.members),this.viewportSegments=t.SegmentVector.simpleSegment(0,0,4,2)
var a=new t.StructArrayLayout1ui2
a.emplaceBack(0),a.emplaceBack(1),a.emplaceBack(3),a.emplaceBack(2),a.emplaceBack(0),this.tileBorderIndexBuffer=e.createIndexBuffer(a)
var s=new t.StructArrayLayout3ui6
s.emplaceBack(0,1,2),s.emplaceBack(2,1,3),this.quadTriangleIndexBuffer=e.createIndexBuffer(s),this.emptyTexture=new t.Texture(e,{width:1,height:1,data:new Uint8Array([0,0,0,0])},e.gl.RGBA)
var l=this.context.gl
this.stencilClearMode=new Et({func:l.ALWAYS,mask:0},0,255,l.ZERO,l.ZERO,l.ZERO)},gi.prototype.clearStencil=function(){var e=this.context,r=e.gl
this.nextStencilID=1,this.currentStencilSource=void 0
var i=t.create()
t.ortho(i,0,this.width,this.height,0,0,1),t.scale(i,i,[r.drawingBufferWidth,r.drawingBufferHeight,0]),this.useProgram("clippingMask").draw(e,r.TRIANGLES,It.disabled,this.stencilClearMode,At.disabled,zt.disabled,Mr(i),"$clipping",this.viewportBuffer,this.quadTriangleIndexBuffer,this.viewportSegments)},gi.prototype._renderTileClippingMasks=function(t,e){if(this.currentStencilSource!==t.source&&t.isTileClipped()&&e&&e.length){this.currentStencilSource=t.source
var r=this.context,i=r.gl
this.nextStencilID+e.length>256&&this.clearStencil(),r.setColorMode(At.disabled),r.setDepthMode(It.disabled)
var n=this.useProgram("clippingMask")
this._tileClippingMaskIDs={}
for(var o=0,a=e;o<a.length;o+=1){var s=a[o],l=this._tileClippingMaskIDs[s.key]=this.nextStencilID++
n.draw(r,i.TRIANGLES,It.disabled,new Et({func:i.ALWAYS,mask:0},l,255,i.KEEP,i.KEEP,i.REPLACE),At.disabled,zt.disabled,Mr(s.posMatrix),"$clipping",this.tileExtentBuffer,this.quadTriangleIndexBuffer,this.tileExtentSegments)}}},gi.prototype.stencilModeFor3D=function(){this.currentStencilSource=void 0,this.nextStencilID+1>256&&this.clearStencil()
var t=this.nextStencilID++,e=this.context.gl
return new Et({func:e.NOTEQUAL,mask:255},t,255,e.KEEP,e.KEEP,e.REPLACE)},gi.prototype.stencilModeForClipping=function(t){var e=this.context.gl
return new Et({func:e.EQUAL,mask:255},this._tileClippingMaskIDs[t.key],0,e.KEEP,e.KEEP,e.REPLACE)},gi.prototype.stencilConfigForOverlap=function(t){var e,r=this.context.gl,i=t.sort((function(t,e){return e.overscaledZ-t.overscaledZ})),n=i[i.length-1].overscaledZ,o=i[0].overscaledZ-n+1
if(o>1){this.currentStencilSource=void 0,this.nextStencilID+o>256&&this.clearStencil()
for(var a={},s=0;s<o;s++)a[s+n]=new Et({func:r.GEQUAL,mask:255},s+this.nextStencilID,255,r.KEEP,r.KEEP,r.REPLACE)
return this.nextStencilID+=o,[a,i]}return[(e={},e[n]=Et.disabled,e),i]},gi.prototype.colorModeForRenderPass=function(){var e=this.context.gl
return this._showOverdrawInspector?new At([e.CONSTANT_COLOR,e.ONE],new t.Color(1/8,1/8,1/8,0),[!0,!0,!0,!0]):"opaque"===this.renderPass?At.unblended:At.alphaBlended},gi.prototype.depthModeForSublayer=function(t,e,r){if(!this.opaquePassEnabledForLayer())return It.disabled
var i=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon
return new It(r||this.context.gl.LEQUAL,e,[i,i])},gi.prototype.opaquePassEnabledForLayer=function(){return this.currentLayer<this.opaquePassCutoff},gi.prototype.render=function(e,r){var i=this
this.style=e,this.options=r,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(t.browser.now()),this.imageManager.beginFrame()
var n=this.style._order,o=this.style.sourceCaches
for(var a in o){var s=o[a]
s.used&&s.prepare(this.context)}var l,u,c={},p={},h={}
for(var f in o){var d=o[f]
c[f]=d.getVisibleCoordinates(),p[f]=c[f].slice().reverse(),h[f]=d.getVisibleCoordinates(!0).reverse()}this.opaquePassCutoff=1/0
for(var m=0;m<n.length;m++)if(this.style._layers[n[m]].is3D()){this.opaquePassCutoff=m
break}this.renderPass="offscreen"
for(var y=0,g=n;y<g.length;y+=1){var _=this.style._layers[g[y]]
if(_.hasOffscreenPass()&&!_.isHidden(this.transform.zoom)){var v=p[_.source];("custom"===_.type||v.length)&&this.renderLayer(this,o[_.source],_,v)}}for(this.context.bindFramebuffer.set(null),this.context.clear({color:r.showOverdrawInspector?t.Color.black:t.Color.transparent,depth:1}),this.clearStencil(),this._showOverdrawInspector=r.showOverdrawInspector,this.depthRangeFor3D=[0,1-(e._order.length+2)*this.numSublayers*this.depthEpsilon],this.renderPass="opaque",this.currentLayer=n.length-1;this.currentLayer>=0;this.currentLayer--){var x=this.style._layers[n[this.currentLayer]],b=o[x.source],w=c[x.source]
this._renderTileClippingMasks(x,w),this.renderLayer(this,b,x,w)}for(this.renderPass="translucent",this.currentLayer=0;this.currentLayer<n.length;this.currentLayer++){var S=this.style._layers[n[this.currentLayer]],T=o[S.source],I=("symbol"===S.type?h:p)[S.source]
this._renderTileClippingMasks(S,c[S.source]),this.renderLayer(this,T,S,I)}this.options.showTileBoundaries&&(t.values(this.style._layers).forEach((function(t){t.source&&!t.isHidden(i.transform.zoom)&&(t.source!==(u&&u.id)&&(u=i.style.sourceCaches[t.source]),(!l||l.getSource().maxzoom<u.getSource().maxzoom)&&(l=u))})),l&&yi.debug(this,l,l.getVisibleCoordinates())),this.options.showPadding&&function(t){var e=t.transform.padding
hi(t,t.transform.height-(e.top||0),3,si),hi(t,e.bottom||0,3,li),fi(t,e.left||0,3,ui),fi(t,t.transform.width-(e.right||0),3,ci)
var r=t.transform.centerPoint
!function(t,e,r,i){di(t,e-1,r-10,2,20,i),di(t,e-10,r-1,20,2,i)}(t,r.x,t.transform.height-r.y,pi)}(this),this.context.setDefault()},gi.prototype.renderLayer=function(t,e,r,i){r.isHidden(this.transform.zoom)||("background"===r.type||"custom"===r.type||i.length)&&(this.id=r.id,this.gpuTimingStart(r),yi[r.type](t,e,r,i,this.style.placement.variableOffsets),this.gpuTimingEnd())},gi.prototype.gpuTimingStart=function(t){if(this.options.gpuTiming){var e=this.context.extTimerQuery,r=this.gpuTimers[t.id]
r||(r=this.gpuTimers[t.id]={calls:0,cpuTime:0,query:e.createQueryEXT()}),r.calls++,e.beginQueryEXT(e.TIME_ELAPSED_EXT,r.query)}},gi.prototype.gpuTimingEnd=function(){if(this.options.gpuTiming){var t=this.context.extTimerQuery
t.endQueryEXT(t.TIME_ELAPSED_EXT)}},gi.prototype.collectGpuTimers=function(){var t=this.gpuTimers
return this.gpuTimers={},t},gi.prototype.queryGpuTimers=function(t){var e={}
for(var r in t){var i=t[r],n=this.context.extTimerQuery,o=n.getQueryObjectEXT(i.query,n.QUERY_RESULT_EXT)/1e6
n.deleteQueryEXT(i.query),e[r]=o}return e},gi.prototype.translatePosMatrix=function(e,r,i,n,o){if(!i[0]&&!i[1])return e
var a=o?"map"===n?this.transform.angle:0:"viewport"===n?-this.transform.angle:0
if(a){var s=Math.sin(a),l=Math.cos(a)
i=[i[0]*l-i[1]*s,i[0]*s+i[1]*l]}var u=[o?i[0]:he(r,i[0],this.transform.zoom),o?i[1]:he(r,i[1],this.transform.zoom),0],c=new Float32Array(16)
return t.translate(c,e,u),c},gi.prototype.saveTileTexture=function(t){var e=this._tileTextures[t.size[0]]
e?e.push(t):this._tileTextures[t.size[0]]=[t]},gi.prototype.getTileTexture=function(t){var e=this._tileTextures[t]
return e&&e.length>0?e.pop():null},gi.prototype.isPatternMissing=function(t){if(!t)return!1
if(!t.from||!t.to)return!0
var e=this.imageManager.getPattern(t.from.toString()),r=this.imageManager.getPattern(t.to.toString())
return!e||!r},gi.prototype.useProgram=function(t,e){this.cache=this.cache||{}
var r=""+t+(e?e.cacheKey:"")+(this._showOverdrawInspector?"/overdraw":"")
return this.cache[r]||(this.cache[r]=new xr(this.context,_r[t],e,Kr[t],this._showOverdrawInspector)),this.cache[r]},gi.prototype.setCustomLayerDefaults=function(){this.context.unbindVAO(),this.context.cullFace.setDefault(),this.context.activeTexture.setDefault(),this.context.pixelStoreUnpack.setDefault(),this.context.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.context.pixelStoreUnpackFlipY.setDefault()},gi.prototype.setBaseState=function(){var t=this.context.gl
this.context.cullFace.set(!1),this.context.viewport.set([0,0,this.width,this.height]),this.context.blendEquation.set(t.FUNC_ADD)},gi.prototype.initDebugOverlayCanvas=function(){null==this.debugOverlayCanvas&&(this.debugOverlayCanvas=t.window.document.createElement("canvas"),this.debugOverlayCanvas.width=512,this.debugOverlayCanvas.height=512,this.debugOverlayTexture=new t.Texture(this.context,this.debugOverlayCanvas,this.context.gl.RGBA))},gi.prototype.destroy=function(){this.emptyTexture.destroy(),this.debugOverlayTexture&&this.debugOverlayTexture.destroy()}
var _i=function(t,e){this.points=t,this.planes=e}
_i.fromInvProjectionMatrix=function(e,r,i){var n=Math.pow(2,i),o=[[-1,1,-1,1],[1,1,-1,1],[1,-1,-1,1],[-1,-1,-1,1],[-1,1,1,1],[1,1,1,1],[1,-1,1,1],[-1,-1,1,1]].map((function(r){return t.transformMat4([],r,e)})).map((function(e){return t.scale$1([],e,1/e[3]/r*n)})),a=[[0,1,2],[6,5,4],[0,3,7],[2,1,5],[3,2,6],[0,4,5]].map((function(e){var r=t.sub([],o[e[0]],o[e[1]]),i=t.sub([],o[e[2]],o[e[1]]),n=t.normalize([],t.cross([],r,i)),a=-t.dot(n,o[e[1]])
return n.concat(a)}))
return new _i(o,a)}
var vi=function(e,r){this.min=e,this.max=r,this.center=t.scale$2([],t.add([],this.min,this.max),.5)}
vi.prototype.quadrant=function(e){for(var r=[e%2==0,e<2],i=t.clone$2(this.min),n=t.clone$2(this.max),o=0;o<r.length;o++)i[o]=r[o]?this.min[o]:this.center[o],n[o]=r[o]?this.center[o]:this.max[o]
return n[2]=this.max[2],new vi(i,n)},vi.prototype.distanceX=function(t){return Math.max(Math.min(this.max[0],t[0]),this.min[0])-t[0]},vi.prototype.distanceY=function(t){return Math.max(Math.min(this.max[1],t[1]),this.min[1])-t[1]},vi.prototype.intersects=function(e){for(var r=[[this.min[0],this.min[1],0,1],[this.max[0],this.min[1],0,1],[this.max[0],this.max[1],0,1],[this.min[0],this.max[1],0,1]],i=!0,n=0;n<e.planes.length;n++){for(var o=e.planes[n],a=0,s=0;s<r.length;s++)a+=t.dot$1(o,r[s])>=0
if(0===a)return 0
a!==r.length&&(i=!1)}if(i)return 2
for(var l=0;l<3;l++){for(var u=Number.MAX_VALUE,c=-Number.MAX_VALUE,p=0;p<e.points.length;p++){var h=e.points[p][l]-this.min[l]
u=Math.min(u,h),c=Math.max(c,h)}if(c<0||u>this.max[l]-this.min[l])return 0}return 1}
var xi=function(t,e,r,i){if(void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0),isNaN(t)||t<0||isNaN(e)||e<0||isNaN(r)||r<0||isNaN(i)||i<0)throw new Error("Invalid value for edge-insets, top, bottom, left and right must all be numbers")
this.top=t,this.bottom=e,this.left=r,this.right=i}
xi.prototype.interpolate=function(e,r,i){return null!=r.top&&null!=e.top&&(this.top=t.number(e.top,r.top,i)),null!=r.bottom&&null!=e.bottom&&(this.bottom=t.number(e.bottom,r.bottom,i)),null!=r.left&&null!=e.left&&(this.left=t.number(e.left,r.left,i)),null!=r.right&&null!=e.right&&(this.right=t.number(e.right,r.right,i)),this},xi.prototype.getCenter=function(e,r){var i=t.clamp((this.left+e-this.right)/2,0,e),n=t.clamp((this.top+r-this.bottom)/2,0,r)
return new t.Point(i,n)},xi.prototype.equals=function(t){return this.top===t.top&&this.bottom===t.bottom&&this.left===t.left&&this.right===t.right},xi.prototype.clone=function(){return new xi(this.top,this.bottom,this.left,this.right)},xi.prototype.toJSON=function(){return{top:this.top,bottom:this.bottom,left:this.left,right:this.right}}
var bi=function(e,r,i,n,o){this.tileSize=512,this.maxValidLatitude=85.051129,this._renderWorldCopies=void 0===o||o,this._minZoom=e||0,this._maxZoom=r||22,this._minPitch=null==i?0:i,this._maxPitch=null==n?60:n,this.setMaxBounds(),this.width=0,this.height=0,this._center=new t.LngLat(0,0),this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._edgeInsets=new xi,this._posMatrixCache={},this._alignedPosMatrixCache={}},wi={minZoom:{configurable:!0},maxZoom:{configurable:!0},minPitch:{configurable:!0},maxPitch:{configurable:!0},renderWorldCopies:{configurable:!0},worldSize:{configurable:!0},centerOffset:{configurable:!0},size:{configurable:!0},bearing:{configurable:!0},pitch:{configurable:!0},fov:{configurable:!0},zoom:{configurable:!0},center:{configurable:!0},padding:{configurable:!0},centerPoint:{configurable:!0},unmodified:{configurable:!0},point:{configurable:!0}}
bi.prototype.clone=function(){var t=new bi(this._minZoom,this._maxZoom,this._minPitch,this.maxPitch,this._renderWorldCopies)
return t.tileSize=this.tileSize,t.latRange=this.latRange,t.width=this.width,t.height=this.height,t._center=this._center,t.zoom=this.zoom,t.angle=this.angle,t._fov=this._fov,t._pitch=this._pitch,t._unmodified=this._unmodified,t._edgeInsets=this._edgeInsets.clone(),t._calcMatrices(),t},wi.minZoom.get=function(){return this._minZoom},wi.minZoom.set=function(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t))},wi.maxZoom.get=function(){return this._maxZoom},wi.maxZoom.set=function(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t))},wi.minPitch.get=function(){return this._minPitch},wi.minPitch.set=function(t){this._minPitch!==t&&(this._minPitch=t,this.pitch=Math.max(this.pitch,t))},wi.maxPitch.get=function(){return this._maxPitch},wi.maxPitch.set=function(t){this._maxPitch!==t&&(this._maxPitch=t,this.pitch=Math.min(this.pitch,t))},wi.renderWorldCopies.get=function(){return this._renderWorldCopies},wi.renderWorldCopies.set=function(t){void 0===t?t=!0:null===t&&(t=!1),this._renderWorldCopies=t},wi.worldSize.get=function(){return this.tileSize*this.scale},wi.centerOffset.get=function(){return this.centerPoint._sub(this.size._div(2))},wi.size.get=function(){return new t.Point(this.width,this.height)},wi.bearing.get=function(){return-this.angle/Math.PI*180},wi.bearing.set=function(e){var r=-t.wrap(e,-180,180)*Math.PI/180
this.angle!==r&&(this._unmodified=!1,this.angle=r,this._calcMatrices(),this.rotationMatrix=t.create$2(),t.rotate(this.rotationMatrix,this.rotationMatrix,this.angle))},wi.pitch.get=function(){return this._pitch/Math.PI*180},wi.pitch.set=function(e){var r=t.clamp(e,this.minPitch,this.maxPitch)/180*Math.PI
this._pitch!==r&&(this._unmodified=!1,this._pitch=r,this._calcMatrices())},wi.fov.get=function(){return this._fov/Math.PI*180},wi.fov.set=function(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices())},wi.zoom.get=function(){return this._zoom},wi.zoom.set=function(t){var e=Math.min(Math.max(t,this.minZoom),this.maxZoom)
this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.scale=this.zoomScale(e),this.tileZoom=Math.floor(e),this.zoomFraction=e-this.tileZoom,this._constrain(),this._calcMatrices())},wi.center.get=function(){return this._center},wi.center.set=function(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices())},wi.padding.get=function(){return this._edgeInsets.toJSON()},wi.padding.set=function(t){this._edgeInsets.equals(t)||(this._unmodified=!1,this._edgeInsets.interpolate(this._edgeInsets,t,1),this._calcMatrices())},wi.centerPoint.get=function(){return this._edgeInsets.getCenter(this.width,this.height)},bi.prototype.isPaddingEqual=function(t){return this._edgeInsets.equals(t)},bi.prototype.interpolatePadding=function(t,e,r){this._unmodified=!1,this._edgeInsets.interpolate(t,e,r),this._constrain(),this._calcMatrices()},bi.prototype.coveringZoomLevel=function(t){var e=(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize))
return Math.max(0,e)},bi.prototype.getVisibleUnwrappedCoordinates=function(e){var r=[new t.UnwrappedTileID(0,e)]
if(this._renderWorldCopies)for(var i=this.pointCoordinate(new t.Point(0,0)),n=this.pointCoordinate(new t.Point(this.width,0)),o=this.pointCoordinate(new t.Point(this.width,this.height)),a=this.pointCoordinate(new t.Point(0,this.height)),s=Math.floor(Math.min(i.x,n.x,o.x,a.x)),l=Math.floor(Math.max(i.x,n.x,o.x,a.x)),u=s-1;u<=l+1;u++)0!==u&&r.push(new t.UnwrappedTileID(u,e))
return r},bi.prototype.coveringTiles=function(e){var r=this.coveringZoomLevel(e),i=r
if(void 0!==e.minzoom&&r<e.minzoom)return[]
void 0!==e.maxzoom&&r>e.maxzoom&&(r=e.maxzoom)
var n=t.MercatorCoordinate.fromLngLat(this.center),o=Math.pow(2,r),a=[o*n.x,o*n.y,0],s=_i.fromInvProjectionMatrix(this.invProjMatrix,this.worldSize,r),l=e.minzoom||0
this.pitch<=60&&this._edgeInsets.top<.1&&(l=r)
var u=function(t){return{aabb:new vi([t*o,0,0],[(t+1)*o,o,0]),zoom:0,x:0,y:0,wrap:t,fullyVisible:!1}},c=[],p=[],h=r,f=e.reparseOverscaled?i:r
if(this._renderWorldCopies)for(var d=1;d<=3;d++)c.push(u(-d)),c.push(u(d))
for(c.push(u(0));c.length>0;){var m=c.pop(),y=m.x,g=m.y,_=m.fullyVisible
if(!_){var v=m.aabb.intersects(s)
if(0===v)continue
_=2===v}var x=m.aabb.distanceX(a),b=m.aabb.distanceY(a),w=Math.max(Math.abs(x),Math.abs(b))
if(m.zoom===h||w>3+(1<<h-m.zoom)-2&&m.zoom>=l)p.push({tileID:new t.OverscaledTileID(m.zoom===h?f:m.zoom,m.wrap,m.zoom,y,g),distanceSq:t.sqrLen([a[0]-.5-y,a[1]-.5-g])})
else for(var S=0;S<4;S++){var T=(y<<1)+S%2,I=(g<<1)+(S>>1)
c.push({aabb:m.aabb.quadrant(S),zoom:m.zoom+1,x:T,y:I,wrap:m.wrap,fullyVisible:_})}}return p.sort((function(t,e){return t.distanceSq-e.distanceSq})).map((function(t){return t.tileID}))},bi.prototype.resize=function(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices()},wi.unmodified.get=function(){return this._unmodified},bi.prototype.zoomScale=function(t){return Math.pow(2,t)},bi.prototype.scaleZoom=function(t){return Math.log(t)/Math.LN2},bi.prototype.project=function(e){var r=t.clamp(e.lat,-this.maxValidLatitude,this.maxValidLatitude)
return new t.Point(t.mercatorXfromLng(e.lng)*this.worldSize,t.mercatorYfromLat(r)*this.worldSize)},bi.prototype.unproject=function(e){return new t.MercatorCoordinate(e.x/this.worldSize,e.y/this.worldSize).toLngLat()},wi.point.get=function(){return this.project(this.center)},bi.prototype.setLocationAtPoint=function(e,r){var i=this.pointCoordinate(r),n=this.pointCoordinate(this.centerPoint),o=this.locationCoordinate(e),a=new t.MercatorCoordinate(o.x-(i.x-n.x),o.y-(i.y-n.y))
this.center=this.coordinateLocation(a),this._renderWorldCopies&&(this.center=this.center.wrap())},bi.prototype.locationPoint=function(t){return this.coordinatePoint(this.locationCoordinate(t))},bi.prototype.pointLocation=function(t){return this.coordinateLocation(this.pointCoordinate(t))},bi.prototype.locationCoordinate=function(e){return t.MercatorCoordinate.fromLngLat(e)},bi.prototype.coordinateLocation=function(t){return t.toLngLat()},bi.prototype.pointCoordinate=function(e){var r=[e.x,e.y,0,1],i=[e.x,e.y,1,1]
t.transformMat4(r,r,this.pixelMatrixInverse),t.transformMat4(i,i,this.pixelMatrixInverse)
var n=r[3],o=i[3],a=r[1]/n,s=i[1]/o,l=r[2]/n,u=i[2]/o,c=l===u?0:(0-l)/(u-l)
return new t.MercatorCoordinate(t.number(r[0]/n,i[0]/o,c)/this.worldSize,t.number(a,s,c)/this.worldSize)},bi.prototype.coordinatePoint=function(e){var r=[e.x*this.worldSize,e.y*this.worldSize,0,1]
return t.transformMat4(r,r,this.pixelMatrix),new t.Point(r[0]/r[3],r[1]/r[3])},bi.prototype.getBounds=function(){return(new t.LngLatBounds).extend(this.pointLocation(new t.Point(0,0))).extend(this.pointLocation(new t.Point(this.width,0))).extend(this.pointLocation(new t.Point(this.width,this.height))).extend(this.pointLocation(new t.Point(0,this.height)))},bi.prototype.getMaxBounds=function(){return this.latRange&&2===this.latRange.length&&this.lngRange&&2===this.lngRange.length?new t.LngLatBounds([this.lngRange[0],this.latRange[0]],[this.lngRange[1],this.latRange[1]]):null},bi.prototype.setMaxBounds=function(t){t?(this.lngRange=[t.getWest(),t.getEast()],this.latRange=[t.getSouth(),t.getNorth()],this._constrain()):(this.lngRange=null,this.latRange=[-this.maxValidLatitude,this.maxValidLatitude])},bi.prototype.calculatePosMatrix=function(e,r){void 0===r&&(r=!1)
var i=e.key,n=r?this._alignedPosMatrixCache:this._posMatrixCache
if(n[i])return n[i]
var o=e.canonical,a=this.worldSize/this.zoomScale(o.z),s=o.x+Math.pow(2,o.z)*e.wrap,l=t.identity(new Float64Array(16))
return t.translate(l,l,[s*a,o.y*a,0]),t.scale(l,l,[a/t.EXTENT,a/t.EXTENT,1]),t.multiply(l,r?this.alignedProjMatrix:this.projMatrix,l),n[i]=new Float32Array(l),n[i]},bi.prototype.customLayerMatrix=function(){return this.mercatorMatrix.slice()},bi.prototype._constrain=function(){if(this.center&&this.width&&this.height&&!this._constraining){this._constraining=!0
var e,r,i,n,o=-90,a=90,s=-180,l=180,u=this.size,c=this._unmodified
if(this.latRange){var p=this.latRange
o=t.mercatorYfromLat(p[1])*this.worldSize,e=(a=t.mercatorYfromLat(p[0])*this.worldSize)-o<u.y?u.y/(a-o):0}if(this.lngRange){var h=this.lngRange
s=t.mercatorXfromLng(h[0])*this.worldSize,r=(l=t.mercatorXfromLng(h[1])*this.worldSize)-s<u.x?u.x/(l-s):0}var f=this.point,d=Math.max(r||0,e||0)
if(d)return this.center=this.unproject(new t.Point(r?(l+s)/2:f.x,e?(a+o)/2:f.y)),this.zoom+=this.scaleZoom(d),this._unmodified=c,void(this._constraining=!1)
if(this.latRange){var m=f.y,y=u.y/2
m-y<o&&(n=o+y),m+y>a&&(n=a-y)}if(this.lngRange){var g=f.x,_=u.x/2
g-_<s&&(i=s+_),g+_>l&&(i=l-_)}void 0===i&&void 0===n||(this.center=this.unproject(new t.Point(void 0!==i?i:f.x,void 0!==n?n:f.y))),this._unmodified=c,this._constraining=!1}},bi.prototype._calcMatrices=function(){if(this.height){var e=this.centerOffset
this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height
var r=Math.PI/2+this._pitch,i=this._fov*(.5+e.y/this.height),n=Math.sin(i)*this.cameraToCenterDistance/Math.sin(t.clamp(Math.PI-r-i,.01,Math.PI-.01)),o=this.point,a=o.x,s=o.y,l=1.01*(Math.cos(Math.PI/2-this._pitch)*n+this.cameraToCenterDistance),u=this.height/50,c=new Float64Array(16)
t.perspective(c,this._fov,this.width/this.height,u,l),c[8]=2*-e.x/this.width,c[9]=2*e.y/this.height,t.scale(c,c,[1,-1,1]),t.translate(c,c,[0,0,-this.cameraToCenterDistance]),t.rotateX(c,c,this._pitch),t.rotateZ(c,c,this.angle),t.translate(c,c,[-a,-s,0]),this.mercatorMatrix=t.scale([],c,[this.worldSize,this.worldSize,this.worldSize]),t.scale(c,c,[1,1,t.mercatorZfromAltitude(1,this.center.lat)*this.worldSize,1]),this.projMatrix=c,this.invProjMatrix=t.invert([],this.projMatrix)
var p=this.width%2/2,h=this.height%2/2,f=Math.cos(this.angle),d=Math.sin(this.angle),m=a-Math.round(a)+f*p+d*h,y=s-Math.round(s)+f*h+d*p,g=new Float64Array(c)
if(t.translate(g,g,[m>.5?m-1:m,y>.5?y-1:y,0]),this.alignedProjMatrix=g,c=t.create(),t.scale(c,c,[this.width/2,-this.height/2,1]),t.translate(c,c,[1,-1,0]),this.labelPlaneMatrix=c,c=t.create(),t.scale(c,c,[1,-1,1]),t.translate(c,c,[-1,-1,0]),t.scale(c,c,[2/this.width,2/this.height,1]),this.glCoordMatrix=c,this.pixelMatrix=t.multiply(new Float64Array(16),this.labelPlaneMatrix,this.projMatrix),!(c=t.invert(new Float64Array(16),this.pixelMatrix)))throw new Error("failed to invert matrix")
this.pixelMatrixInverse=c,this._posMatrixCache={},this._alignedPosMatrixCache={}}},bi.prototype.maxPitchScaleFactor=function(){if(!this.pixelMatrixInverse)return 1
var e=this.pointCoordinate(new t.Point(0,0)),r=[e.x*this.worldSize,e.y*this.worldSize,0,1]
return t.transformMat4(r,r,this.pixelMatrix)[3]/this.cameraToCenterDistance},bi.prototype.getCameraPoint=function(){var e=Math.tan(this._pitch)*(this.cameraToCenterDistance||1)
return this.centerPoint.add(new t.Point(0,e))},bi.prototype.getCameraQueryGeometry=function(e){var r=this.getCameraPoint()
if(1===e.length)return[e[0],r]
for(var i=r.x,n=r.y,o=r.x,a=r.y,s=0,l=e;s<l.length;s+=1){var u=l[s]
i=Math.min(i,u.x),n=Math.min(n,u.y),o=Math.max(o,u.x),a=Math.max(a,u.y)}return[new t.Point(i,n),new t.Point(o,n),new t.Point(o,a),new t.Point(i,a),new t.Point(i,n)]},Object.defineProperties(bi.prototype,wi)
var Si=function(e){var r,i,n,o
this._hashName=e&&encodeURIComponent(e),t.bindAll(["_getCurrentHash","_onHashChange","_updateHash"],this),this._updateHash=(r=this._updateHashUnthrottled.bind(this),i=!1,n=null,o=function(){n=null,i&&(r(),n=setTimeout(o,300),i=!1)},function(){return i=!0,n||o(),n})}
Si.prototype.addTo=function(e){return this._map=e,t.window.addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this},Si.prototype.remove=function(){return t.window.removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),clearTimeout(this._updateHash()),delete this._map,this},Si.prototype.getHashString=function(e){var r=this._map.getCenter(),i=Math.round(100*this._map.getZoom())/100,n=Math.ceil((i*Math.LN2+Math.log(512/360/.5))/Math.LN10),o=Math.pow(10,n),a=Math.round(r.lng*o)/o,s=Math.round(r.lat*o)/o,l=this._map.getBearing(),u=this._map.getPitch(),c=""
if(c+=e?"/"+a+"/"+s+"/"+i:i+"/"+s+"/"+a,(l||u)&&(c+="/"+Math.round(10*l)/10),u&&(c+="/"+Math.round(u)),this._hashName){var p=this._hashName,h=!1,f=t.window.location.hash.slice(1).split("&").map((function(t){var e=t.split("=")[0]
return e===p?(h=!0,e+"="+c):t})).filter((function(t){return t}))
return h||f.push(p+"="+c),"#"+f.join("&")}return"#"+c},Si.prototype._getCurrentHash=function(){var e,r=this,i=t.window.location.hash.replace("#","")
return this._hashName?(i.split("&").map((function(t){return t.split("=")})).forEach((function(t){t[0]===r._hashName&&(e=t)})),(e&&e[1]||"").split("/")):i.split("/")},Si.prototype._onHashChange=function(){var t=this._getCurrentHash()
if(t.length>=3&&!t.some((function(t){return isNaN(t)}))){var e=this._map.dragRotate.isEnabled()&&this._map.touchZoomRotate.isEnabled()?+(t[3]||0):this._map.getBearing()
return this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:e,pitch:+(t[4]||0)}),!0}return!1},Si.prototype._updateHashUnthrottled=function(){var e=this.getHashString()
try{t.window.history.replaceState(t.window.history.state,"",e)}catch(t){}}
var Ti={linearity:.3,easing:t.bezier(0,0,.3,1)},Ii=t.extend({deceleration:2500,maxSpeed:1400},Ti),Ei=t.extend({deceleration:20,maxSpeed:1400},Ti),Ai=t.extend({deceleration:1e3,maxSpeed:360},Ti),zi=t.extend({deceleration:1e3,maxSpeed:90},Ti),Pi=function(t){this._map=t,this.clear()}
function Ci(t,e){(!t.duration||t.duration<e.duration)&&(t.duration=e.duration,t.easing=e.easing)}function ki(e,r,i){var n=i.maxSpeed,o=i.linearity,a=i.deceleration,s=t.clamp(e*o/(r/1e3),-n,n),l=Math.abs(s)/(a*o)
return{easing:i.easing,duration:1e3*l,amount:s*(l/2)}}Pi.prototype.clear=function(){this._inertiaBuffer=[]},Pi.prototype.record=function(e){this._drainInertiaBuffer(),this._inertiaBuffer.push({time:t.browser.now(),settings:e})},Pi.prototype._drainInertiaBuffer=function(){for(var e=this._inertiaBuffer,r=t.browser.now();e.length>0&&r-e[0].time>160;)e.shift()},Pi.prototype._onMoveEnd=function(e){if(this._drainInertiaBuffer(),!(this._inertiaBuffer.length<2)){for(var r={zoom:0,bearing:0,pitch:0,pan:new t.Point(0,0),pinchAround:void 0,around:void 0},i=0,n=this._inertiaBuffer;i<n.length;i+=1){var o=n[i].settings
r.zoom+=o.zoomDelta||0,r.bearing+=o.bearingDelta||0,r.pitch+=o.pitchDelta||0,o.panDelta&&r.pan._add(o.panDelta),o.around&&(r.around=o.around),o.pinchAround&&(r.pinchAround=o.pinchAround)}var a=this._inertiaBuffer[this._inertiaBuffer.length-1].time-this._inertiaBuffer[0].time,s={}
if(r.pan.mag()){var l=ki(r.pan.mag(),a,t.extend({},Ii,e||{}))
s.offset=r.pan.mult(l.amount/r.pan.mag()),s.center=this._map.transform.center,Ci(s,l)}if(r.zoom){var u=ki(r.zoom,a,Ei)
s.zoom=this._map.transform.zoom+u.amount,Ci(s,u)}if(r.bearing){var c=ki(r.bearing,a,Ai)
s.bearing=this._map.transform.bearing+t.clamp(c.amount,-179,179),Ci(s,c)}if(r.pitch){var p=ki(r.pitch,a,zi)
s.pitch=this._map.transform.pitch+p.amount,Ci(s,p)}if(s.zoom||s.bearing){var h=void 0===r.pinchAround?r.around:r.pinchAround
s.around=h?this._map.unproject(h):this._map.getCenter()}return this.clear(),t.extend(s,{noMoveStart:!0})}}
var Mi=function(e){function i(i,n,o,a){void 0===a&&(a={})
var s=r.mousePos(n.getCanvasContainer(),o),l=n.unproject(s)
e.call(this,i,t.extend({point:s,lngLat:l,originalEvent:o},a)),this._defaultPrevented=!1,this.target=n}e&&(i.__proto__=e),(i.prototype=Object.create(e&&e.prototype)).constructor=i
var n={defaultPrevented:{configurable:!0}}
return i.prototype.preventDefault=function(){this._defaultPrevented=!0},n.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(i.prototype,n),i}(t.Event),Di=function(e){function i(i,n,o){var a="touchend"===i?o.changedTouches:o.touches,s=r.touchPos(n.getCanvasContainer(),a),l=s.map((function(t){return n.unproject(t)})),u=s.reduce((function(t,e,r,i){return t.add(e.div(i.length))}),new t.Point(0,0)),c=n.unproject(u)
e.call(this,i,{points:s,point:u,lngLats:l,lngLat:c,originalEvent:o}),this._defaultPrevented=!1}e&&(i.__proto__=e),(i.prototype=Object.create(e&&e.prototype)).constructor=i
var n={defaultPrevented:{configurable:!0}}
return i.prototype.preventDefault=function(){this._defaultPrevented=!0},n.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(i.prototype,n),i}(t.Event),Li=function(t){function e(e,r,i){t.call(this,e,{originalEvent:i}),this._defaultPrevented=!1}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e
var r={defaultPrevented:{configurable:!0}}
return e.prototype.preventDefault=function(){this._defaultPrevented=!0},r.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(e.prototype,r),e}(t.Event),Ri=function(t,e){this._map=t,this._clickTolerance=e.clickTolerance}
Ri.prototype.reset=function(){delete this._mousedownPos},Ri.prototype.wheel=function(t){return this._firePreventable(new Li(t.type,this._map,t))},Ri.prototype.mousedown=function(t,e){return this._mousedownPos=e,this._firePreventable(new Mi(t.type,this._map,t))},Ri.prototype.mouseup=function(t){this._map.fire(new Mi(t.type,this._map,t))},Ri.prototype.click=function(t,e){this._mousedownPos&&this._mousedownPos.dist(e)>=this._clickTolerance||this._map.fire(new Mi(t.type,this._map,t))},Ri.prototype.dblclick=function(t){return this._firePreventable(new Mi(t.type,this._map,t))},Ri.prototype.mouseover=function(t){this._map.fire(new Mi(t.type,this._map,t))},Ri.prototype.mouseout=function(t){this._map.fire(new Mi(t.type,this._map,t))},Ri.prototype.touchstart=function(t){return this._firePreventable(new Di(t.type,this._map,t))},Ri.prototype.touchend=function(t){this._map.fire(new Di(t.type,this._map,t))},Ri.prototype.touchcancel=function(t){this._map.fire(new Di(t.type,this._map,t))},Ri.prototype._firePreventable=function(t){if(this._map.fire(t),t.defaultPrevented)return{}},Ri.prototype.isEnabled=function(){return!0},Ri.prototype.isActive=function(){return!1},Ri.prototype.enable=function(){},Ri.prototype.disable=function(){}
var Bi=function(t){this._map=t}
Bi.prototype.reset=function(){this._delayContextMenu=!1,delete this._contextMenuEvent},Bi.prototype.mousemove=function(t){this._map.fire(new Mi(t.type,this._map,t))},Bi.prototype.touchmove=function(t){this._map.fire(new Di(t.type,this._map,t))},Bi.prototype.mousedown=function(){this._delayContextMenu=!0},Bi.prototype.mouseup=function(){this._delayContextMenu=!1,this._contextMenuEvent&&(this._map.fire(new Mi("contextmenu",this._map,this._contextMenuEvent)),delete this._contextMenuEvent)},Bi.prototype.contextmenu=function(t){this._delayContextMenu?this._contextMenuEvent=t:this._map.fire(new Mi(t.type,this._map,t)),this._map.listens("contextmenu")&&t.preventDefault()},Bi.prototype.isEnabled=function(){return!0},Bi.prototype.isActive=function(){return!1},Bi.prototype.enable=function(){},Bi.prototype.disable=function(){}
var Fi=function(t,e){this._map=t,this._el=t.getCanvasContainer(),this._container=t.getContainer(),this._clickTolerance=e.clickTolerance||1}
function Oi(t,e){for(var r={},i=0;i<t.length;i++)r[t[i].identifier]=e[i]
return r}Fi.prototype.isEnabled=function(){return!!this._enabled},Fi.prototype.isActive=function(){return!!this._active},Fi.prototype.enable=function(){this.isEnabled()||(this._enabled=!0)},Fi.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1)},Fi.prototype.mousedown=function(t,e){this.isEnabled()&&t.shiftKey&&0===t.button&&(r.disableDrag(),this._startPos=this._lastPos=e,this._active=!0)},Fi.prototype.mousemoveWindow=function(t,e){if(this._active){var i=e
if(!(this._lastPos.equals(i)||!this._box&&i.dist(this._startPos)<this._clickTolerance)){var n=this._startPos
this._lastPos=i,this._box||(this._box=r.create("div","mapboxgl-boxzoom",this._container),this._container.classList.add("mapboxgl-crosshair"),this._fireEvent("boxzoomstart",t))
var o=Math.min(n.x,i.x),a=Math.max(n.x,i.x),s=Math.min(n.y,i.y),l=Math.max(n.y,i.y)
r.setTransform(this._box,"translate("+o+"px,"+s+"px)"),this._box.style.width=a-o+"px",this._box.style.height=l-s+"px"}}},Fi.prototype.mouseupWindow=function(e,i){var n=this
if(this._active&&0===e.button){var o=this._startPos,a=i
if(this.reset(),r.suppressClick(),o.x!==a.x||o.y!==a.y)return this._map.fire(new t.Event("boxzoomend",{originalEvent:e})),{cameraAnimation:function(t){return t.fitScreenCoordinates(o,a,n._map.getBearing(),{linear:!0})}}
this._fireEvent("boxzoomcancel",e)}},Fi.prototype.keydown=function(t){this._active&&27===t.keyCode&&(this.reset(),this._fireEvent("boxzoomcancel",t))},Fi.prototype.reset=function(){this._active=!1,this._container.classList.remove("mapboxgl-crosshair"),this._box&&(r.remove(this._box),this._box=null),r.enableDrag(),delete this._startPos,delete this._lastPos},Fi.prototype._fireEvent=function(e,r){return this._map.fire(new t.Event(e,{originalEvent:r}))}
var Ui=function(t){this.reset(),this.numTouches=t.numTouches}
Ui.prototype.reset=function(){delete this.centroid,delete this.startTime,delete this.touches,this.aborted=!1},Ui.prototype.touchstart=function(e,r){(this.centroid||e.targetTouches.length>this.numTouches)&&(this.aborted=!0),this.aborted||(void 0===this.startTime&&(this.startTime=e.timeStamp),e.targetTouches.length===this.numTouches&&(this.centroid=function(e){for(var r=new t.Point(0,0),i=0,n=e;i<n.length;i+=1)r._add(n[i])
return r.div(e.length)}(r),this.touches=Oi(e.targetTouches,r)))},Ui.prototype.touchmove=function(t,e){if(!this.aborted&&this.centroid){var r=Oi(t.targetTouches,e)
for(var i in this.touches){var n=r[i];(!n||n.dist(this.touches[i])>30)&&(this.aborted=!0)}}},Ui.prototype.touchend=function(t){if((!this.centroid||t.timeStamp-this.startTime>500)&&(this.aborted=!0),0===t.targetTouches.length){var e=!this.aborted&&this.centroid
if(this.reset(),e)return e}}
var Vi=function(t){this.singleTap=new Ui(t),this.numTaps=t.numTaps,this.reset()}
Vi.prototype.reset=function(){this.lastTime=1/0,delete this.lastTap,this.count=0,this.singleTap.reset()},Vi.prototype.touchstart=function(t,e){this.singleTap.touchstart(t,e)},Vi.prototype.touchmove=function(t,e){this.singleTap.touchmove(t,e)},Vi.prototype.touchend=function(t){var e=this.singleTap.touchend(t)
if(e){var r=t.timeStamp-this.lastTime<500,i=!this.lastTap||this.lastTap.dist(e)<30
if(r&&i||this.reset(),this.count++,this.lastTime=t.timeStamp,this.lastTap=e,this.count===this.numTaps)return this.reset(),e}}
var Ni=function(){this._zoomIn=new Vi({numTouches:1,numTaps:2}),this._zoomOut=new Vi({numTouches:2,numTaps:1}),this.reset()}
Ni.prototype.reset=function(){this._active=!1,this._zoomIn.reset(),this._zoomOut.reset()},Ni.prototype.touchstart=function(t,e){this._zoomIn.touchstart(t,e),this._zoomOut.touchstart(t,e)},Ni.prototype.touchmove=function(t,e){this._zoomIn.touchmove(t,e),this._zoomOut.touchmove(t,e)},Ni.prototype.touchend=function(t){var e=this,r=this._zoomIn.touchend(t),i=this._zoomOut.touchend(t)
return r?(this._active=!0,t.preventDefault(),setTimeout((function(){return e.reset()}),0),{cameraAnimation:function(e){return e.easeTo({duration:300,zoom:e.getZoom()+1,around:e.unproject(r)},{originalEvent:t})}}):i?(this._active=!0,t.preventDefault(),setTimeout((function(){return e.reset()}),0),{cameraAnimation:function(e){return e.easeTo({duration:300,zoom:e.getZoom()-1,around:e.unproject(i)},{originalEvent:t})}}):void 0},Ni.prototype.touchcancel=function(){this.reset()},Ni.prototype.enable=function(){this._enabled=!0},Ni.prototype.disable=function(){this._enabled=!1,this.reset()},Ni.prototype.isEnabled=function(){return this._enabled},Ni.prototype.isActive=function(){return this._active}
var ji=function(t){this.reset(),this._clickTolerance=t.clickTolerance||1}
ji.prototype.reset=function(){this._active=!1,this._moved=!1,delete this._lastPoint,delete this._eventButton},ji.prototype._correctButton=function(t,e){return!1},ji.prototype._move=function(t,e){return{}},ji.prototype.mousedown=function(t,e){if(!this._lastPoint){var i=r.mouseButton(t)
this._correctButton(t,i)&&(this._lastPoint=e,this._eventButton=i)}},ji.prototype.mousemoveWindow=function(t,e){var r=this._lastPoint
if(r&&(t.preventDefault(),this._moved||!(e.dist(r)<this._clickTolerance)))return this._moved=!0,this._lastPoint=e,this._move(r,e)},ji.prototype.mouseupWindow=function(t){r.mouseButton(t)===this._eventButton&&(this._moved&&r.suppressClick(),this.reset())},ji.prototype.enable=function(){this._enabled=!0},ji.prototype.disable=function(){this._enabled=!1,this.reset()},ji.prototype.isEnabled=function(){return this._enabled},ji.prototype.isActive=function(){return this._active}
var qi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.mousedown=function(e,r){t.prototype.mousedown.call(this,e,r),this._lastPoint&&(this._active=!0)},e.prototype._correctButton=function(t,e){return 0===e&&!t.ctrlKey},e.prototype._move=function(t,e){return{around:e,panDelta:e.sub(t)}},e}(ji),Zi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._correctButton=function(t,e){return 0===e&&t.ctrlKey||2===e},e.prototype._move=function(t,e){var r=.8*(e.x-t.x)
if(r)return this._active=!0,{bearingDelta:r}},e.prototype.contextmenu=function(t){t.preventDefault()},e}(ji),Gi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._correctButton=function(t,e){return 0===e&&t.ctrlKey||2===e},e.prototype._move=function(t,e){var r=-.5*(e.y-t.y)
if(r)return this._active=!0,{pitchDelta:r}},e.prototype.contextmenu=function(t){t.preventDefault()},e}(ji),Xi=function(t){this._minTouches=1,this._clickTolerance=t.clickTolerance||1,this.reset()}
Xi.prototype.reset=function(){this._active=!1,this._touches={},this._sum=new t.Point(0,0)},Xi.prototype.touchstart=function(t,e){return this._calculateTransform(t,e)},Xi.prototype.touchmove=function(t,e){if(this._active)return t.preventDefault(),this._calculateTransform(t,e)},Xi.prototype.touchend=function(t,e){this._calculateTransform(t,e),this._active&&t.targetTouches.length<this._minTouches&&this.reset()},Xi.prototype.touchcancel=function(){this.reset()},Xi.prototype._calculateTransform=function(e,r){e.targetTouches.length>0&&(this._active=!0)
var i=Oi(e.targetTouches,r),n=new t.Point(0,0),o=new t.Point(0,0),a=0
for(var s in i){var l=i[s],u=this._touches[s]
u&&(n._add(l),o._add(l.sub(u)),a++,i[s]=l)}if(this._touches=i,!(a<this._minTouches)&&o.mag()){var c=o.div(a)
if(this._sum._add(c),!(this._sum.mag()<this._clickTolerance))return{around:n.div(a),panDelta:c}}},Xi.prototype.enable=function(){this._enabled=!0},Xi.prototype.disable=function(){this._enabled=!1,this.reset()},Xi.prototype.isEnabled=function(){return this._enabled},Xi.prototype.isActive=function(){return this._active}
var Wi=function(){this.reset()}
function Ki(t,e,r){for(var i=0;i<t.targetTouches.length;i++)if(t.targetTouches[i].identifier===r)return e[i]}function Hi(t,e){return Math.log(t/e)/Math.LN2}Wi.prototype.reset=function(){this._active=!1,delete this._firstTwoTouches},Wi.prototype._start=function(t){},Wi.prototype._move=function(t,e,r){return{}},Wi.prototype.touchstart=function(t,e){this._firstTwoTouches||t.targetTouches.length<2||(this._firstTwoTouches=[t.targetTouches[0].identifier,t.targetTouches[1].identifier],this._start([e[0],e[1]]))},Wi.prototype.touchmove=function(t,e){if(this._firstTwoTouches){t.preventDefault()
var r=this._firstTwoTouches,i=r[1],n=Ki(t,e,r[0]),o=Ki(t,e,i)
if(n&&o){var a=this._aroundCenter?null:n.add(o).div(2)
return this._move([n,o],a,t)}}},Wi.prototype.touchend=function(t,e){if(this._firstTwoTouches){var i=this._firstTwoTouches,n=i[1],o=Ki(t,e,i[0]),a=Ki(t,e,n)
o&&a||(this._active&&r.suppressClick(),this.reset())}},Wi.prototype.touchcancel=function(){this.reset()},Wi.prototype.enable=function(t){this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around},Wi.prototype.disable=function(){this._enabled=!1,this.reset()},Wi.prototype.isEnabled=function(){return this._enabled},Wi.prototype.isActive=function(){return this._active}
var Ji=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.reset=function(){t.prototype.reset.call(this),delete this._distance,delete this._startDistance},e.prototype._start=function(t){this._startDistance=this._distance=t[0].dist(t[1])},e.prototype._move=function(t,e){var r=this._distance
if(this._distance=t[0].dist(t[1]),this._active||!(Math.abs(Hi(this._distance,this._startDistance))<.1))return this._active=!0,{zoomDelta:Hi(this._distance,r),pinchAround:e}},e}(Wi)
function Yi(t,e){return 180*t.angleWith(e)/Math.PI}var Qi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.reset=function(){t.prototype.reset.call(this),delete this._minDiameter,delete this._startVector,delete this._vector},e.prototype._start=function(t){this._startVector=this._vector=t[0].sub(t[1]),this._minDiameter=t[0].dist(t[1])},e.prototype._move=function(t,e){var r=this._vector
if(this._vector=t[0].sub(t[1]),this._active||!this._isBelowThreshold(this._vector))return this._active=!0,{bearingDelta:Yi(this._vector,r),pinchAround:e}},e.prototype._isBelowThreshold=function(t){this._minDiameter=Math.min(this._minDiameter,t.mag())
var e=25/(Math.PI*this._minDiameter)*360,r=Yi(t,this._startVector)
return Math.abs(r)<e},e}(Wi)
function $i(t){return Math.abs(t.y)>Math.abs(t.x)}var tn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.reset=function(){t.prototype.reset.call(this),this._valid=void 0,delete this._firstMove,delete this._lastPoints},e.prototype._start=function(t){this._lastPoints=t,$i(t[0].sub(t[1]))&&(this._valid=!1)},e.prototype._move=function(t,e,r){var i=t[0].sub(this._lastPoints[0]),n=t[1].sub(this._lastPoints[1])
if(this._valid=this.gestureBeginsVertically(i,n,r.timeStamp),this._valid)return this._lastPoints=t,this._active=!0,{pitchDelta:(i.y+n.y)/2*-.5}},e.prototype.gestureBeginsVertically=function(t,e,r){if(void 0!==this._valid)return this._valid
var i=t.mag()>=2,n=e.mag()>=2
if(i||n){if(!i||!n)return void 0===this._firstMove&&(this._firstMove=r),r-this._firstMove<100&&void 0
var o=t.y>0==e.y>0
return $i(t)&&$i(e)&&o}},e}(Wi),en={panStep:100,bearingStep:15,pitchStep:10},rn=function(){var t=en
this._panStep=t.panStep,this._bearingStep=t.bearingStep,this._pitchStep=t.pitchStep}
function nn(t){return t*(2-t)}rn.prototype.reset=function(){this._active=!1},rn.prototype.keydown=function(t){var e=this
if(!(t.altKey||t.ctrlKey||t.metaKey)){var r=0,i=0,n=0,o=0,a=0
switch(t.keyCode){case 61:case 107:case 171:case 187:r=1
break
case 189:case 109:case 173:r=-1
break
case 37:t.shiftKey?i=-1:(t.preventDefault(),o=-1)
break
case 39:t.shiftKey?i=1:(t.preventDefault(),o=1)
break
case 38:t.shiftKey?n=1:(t.preventDefault(),a=-1)
break
case 40:t.shiftKey?n=-1:(t.preventDefault(),a=1)
break
default:return}return{cameraAnimation:function(s){var l=s.getZoom()
s.easeTo({duration:300,easeId:"keyboardHandler",easing:nn,zoom:r?Math.round(l)+r*(t.shiftKey?2:1):l,bearing:s.getBearing()+i*e._bearingStep,pitch:s.getPitch()+n*e._pitchStep,offset:[-o*e._panStep,-a*e._panStep],center:s.getCenter()},{originalEvent:t})}}}},rn.prototype.enable=function(){this._enabled=!0},rn.prototype.disable=function(){this._enabled=!1,this.reset()},rn.prototype.isEnabled=function(){return this._enabled},rn.prototype.isActive=function(){return this._active}
var on=function(e,r){this._map=e,this._el=e.getCanvasContainer(),this._handler=r,this._delta=0,this._defaultZoomRate=.01,this._wheelZoomRate=1/450,t.bindAll(["_onWheel","_onTimeout","_onScrollFrame","_onScrollFinished"],this)}
on.prototype.setZoomRate=function(t){this._defaultZoomRate=t},on.prototype.setWheelZoomRate=function(t){this._wheelZoomRate=t},on.prototype.isEnabled=function(){return!!this._enabled},on.prototype.isActive=function(){return!!this._active||void 0!==this._finishTimeout},on.prototype.isZooming=function(){return!!this._zooming},on.prototype.enable=function(t){this.isEnabled()||(this._enabled=!0,this._aroundCenter=t&&"center"===t.around)},on.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1)},on.prototype.wheel=function(e){if(this.isEnabled()){var r=e.deltaMode===t.window.WheelEvent.DOM_DELTA_LINE?40*e.deltaY:e.deltaY,i=t.browser.now(),n=i-(this._lastWheelEventTime||0)
this._lastWheelEventTime=i,0!==r&&r%4.000244140625==0?this._type="wheel":0!==r&&Math.abs(r)<4?this._type="trackpad":n>400?(this._type=null,this._lastValue=r,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(n*r)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,r+=this._lastValue)),e.shiftKey&&r&&(r/=4),this._type&&(this._lastWheelEvent=e,this._delta-=r,this._active||this._start(e)),e.preventDefault()}},on.prototype._onTimeout=function(t){this._type="wheel",this._delta-=this._lastValue,this._active||this._start(t)},on.prototype._start=function(e){if(this._delta){this._frameId&&(this._frameId=null),this._active=!0,this.isZooming()||(this._zooming=!0),this._finishTimeout&&(clearTimeout(this._finishTimeout),delete this._finishTimeout)
var i=r.mousePos(this._el,e)
this._around=t.LngLat.convert(this._aroundCenter?this._map.getCenter():this._map.unproject(i)),this._aroundPoint=this._map.transform.locationPoint(this._around),this._frameId||(this._frameId=!0,this._handler._triggerRenderFrame())}},on.prototype.renderFrame=function(){return this._onScrollFrame()},on.prototype._onScrollFrame=function(){var e=this
if(this._frameId&&(this._frameId=null,this.isActive())){var r=this._map.transform
if(0!==this._delta){var i="wheel"===this._type&&Math.abs(this._delta)>4.000244140625?this._wheelZoomRate:this._defaultZoomRate,n=2/(1+Math.exp(-Math.abs(this._delta*i)))
this._delta<0&&0!==n&&(n=1/n)
var o="number"==typeof this._targetZoom?r.zoomScale(this._targetZoom):r.scale
this._targetZoom=Math.min(r.maxZoom,Math.max(r.minZoom,r.scaleZoom(o*n))),"wheel"===this._type&&(this._startZoom=r.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0}var a,s="number"==typeof this._targetZoom?this._targetZoom:r.zoom,l=this._startZoom,u=this._easing,c=!1
if("wheel"===this._type&&l&&u){var p=Math.min((t.browser.now()-this._lastWheelEventTime)/200,1),h=u(p)
a=t.number(l,s,h),p<1?this._frameId||(this._frameId=!0):c=!0}else a=s,c=!0
return this._active=!0,c&&(this._active=!1,this._finishTimeout=setTimeout((function(){e._zooming=!1,e._handler._triggerRenderFrame(),delete e._targetZoom,delete e._finishTimeout}),200)),{noInertia:!0,needsRenderFrame:!c,zoomDelta:a-r.zoom,around:this._aroundPoint,originalEvent:this._lastWheelEvent}}},on.prototype._smoothOutEasing=function(e){var r=t.ease
if(this._prevEase){var i=this._prevEase,n=(t.browser.now()-i.start)/i.duration,o=i.easing(n+.01)-i.easing(n),a=.27/Math.sqrt(o*o+1e-4)*.01,s=Math.sqrt(.0729-a*a)
r=t.bezier(a,s,.25,1)}return this._prevEase={start:t.browser.now(),duration:e,easing:r},r},on.prototype.reset=function(){this._active=!1}
var an=function(t,e){this._clickZoom=t,this._tapZoom=e}
an.prototype.enable=function(){this._clickZoom.enable(),this._tapZoom.enable()},an.prototype.disable=function(){this._clickZoom.disable(),this._tapZoom.disable()},an.prototype.isEnabled=function(){return this._clickZoom.isEnabled()&&this._tapZoom.isEnabled()},an.prototype.isActive=function(){return this._clickZoom.isActive()||this._tapZoom.isActive()}
var sn=function(){this.reset()}
sn.prototype.reset=function(){this._active=!1},sn.prototype.dblclick=function(t,e){return t.preventDefault(),{cameraAnimation:function(r){r.easeTo({duration:300,zoom:r.getZoom()+(t.shiftKey?-1:1),around:r.unproject(e)},{originalEvent:t})}}},sn.prototype.enable=function(){this._enabled=!0},sn.prototype.disable=function(){this._enabled=!1,this.reset()},sn.prototype.isEnabled=function(){return this._enabled},sn.prototype.isActive=function(){return this._active}
var ln=function(){this._tap=new Vi({numTouches:1,numTaps:1}),this.reset()}
ln.prototype.reset=function(){this._active=!1,delete this._swipePoint,delete this._swipeTouch,delete this._tapTime,this._tap.reset()},ln.prototype.touchstart=function(t,e){this._swipePoint||(this._tapTime&&t.timeStamp-this._tapTime>500&&this.reset(),this._tapTime?t.targetTouches.length>0&&(this._swipePoint=e[0],this._swipeTouch=t.targetTouches[0].identifier):this._tap.touchstart(t,e))},ln.prototype.touchmove=function(t,e){if(this._tapTime){if(this._swipePoint){if(t.targetTouches[0].identifier!==this._swipeTouch)return
var r=e[0],i=r.y-this._swipePoint.y
return this._swipePoint=r,t.preventDefault(),this._active=!0,{zoomDelta:i/128}}}else this._tap.touchmove(t,e)},ln.prototype.touchend=function(t){this._tapTime?this._swipePoint&&0===t.targetTouches.length&&this.reset():this._tap.touchend(t)&&(this._tapTime=t.timeStamp)},ln.prototype.touchcancel=function(){this.reset()},ln.prototype.enable=function(){this._enabled=!0},ln.prototype.disable=function(){this._enabled=!1,this.reset()},ln.prototype.isEnabled=function(){return this._enabled},ln.prototype.isActive=function(){return this._active}
var un=function(t,e,r){this._el=t,this._mousePan=e,this._touchPan=r}
un.prototype.enable=function(t){this._inertiaOptions=t||{},this._mousePan.enable(),this._touchPan.enable(),this._el.classList.add("mapboxgl-touch-drag-pan")},un.prototype.disable=function(){this._mousePan.disable(),this._touchPan.disable(),this._el.classList.remove("mapboxgl-touch-drag-pan")},un.prototype.isEnabled=function(){return this._mousePan.isEnabled()&&this._touchPan.isEnabled()},un.prototype.isActive=function(){return this._mousePan.isActive()||this._touchPan.isActive()}
var cn=function(t,e,r){this._pitchWithRotate=t.pitchWithRotate,this._mouseRotate=e,this._mousePitch=r}
cn.prototype.enable=function(){this._mouseRotate.enable(),this._pitchWithRotate&&this._mousePitch.enable()},cn.prototype.disable=function(){this._mouseRotate.disable(),this._mousePitch.disable()},cn.prototype.isEnabled=function(){return this._mouseRotate.isEnabled()&&(!this._pitchWithRotate||this._mousePitch.isEnabled())},cn.prototype.isActive=function(){return this._mouseRotate.isActive()||this._mousePitch.isActive()}
var pn=function(t,e,r,i){this._el=t,this._touchZoom=e,this._touchRotate=r,this._tapDragZoom=i,this._rotationDisabled=!1,this._enabled=!0}
pn.prototype.enable=function(t){this._touchZoom.enable(t),this._rotationDisabled||this._touchRotate.enable(t),this._tapDragZoom.enable(),this._el.classList.add("mapboxgl-touch-zoom-rotate")},pn.prototype.disable=function(){this._touchZoom.disable(),this._touchRotate.disable(),this._tapDragZoom.disable(),this._el.classList.remove("mapboxgl-touch-zoom-rotate")},pn.prototype.isEnabled=function(){return this._touchZoom.isEnabled()&&(this._rotationDisabled||this._touchRotate.isEnabled())&&this._tapDragZoom.isEnabled()},pn.prototype.isActive=function(){return this._touchZoom.isActive()||this._touchRotate.isActive()||this._tapDragZoom.isActive()},pn.prototype.disableRotation=function(){this._rotationDisabled=!0,this._touchRotate.disable()},pn.prototype.enableRotation=function(){this._rotationDisabled=!1,this._touchZoom.isEnabled()&&this._touchRotate.enable()}
var hn=function(t){return t.zoom||t.drag||t.pitch||t.rotate},fn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(t.Event)
function dn(t){return t.panDelta&&t.panDelta.mag()||t.zoomDelta||t.bearingDelta||t.pitchDelta}var mn=function(e,i){this._map=e,this._el=this._map.getCanvasContainer(),this._handlers=[],this._handlersById={},this._changes=[],this._inertia=new Pi(e),this._bearingSnap=i.bearingSnap,this._previousActiveHandlers={},this._eventsInProgress={},this._addDefaultHandlers(i),t.bindAll(["handleEvent","handleWindowEvent"],this)
var n=this._el
this._listeners=[[n,"touchstart",{passive:!1}],[n,"touchmove",{passive:!1}],[n,"touchend",void 0],[n,"touchcancel",void 0],[n,"mousedown",void 0],[n,"mousemove",void 0],[n,"mouseup",void 0],[t.window.document,"mousemove",{capture:!0}],[t.window.document,"mouseup",void 0],[n,"mouseover",void 0],[n,"mouseout",void 0],[n,"dblclick",void 0],[n,"click",void 0],[n,"keydown",{capture:!1}],[n,"keyup",void 0],[n,"wheel",{passive:!1}],[n,"contextmenu",void 0],[t.window,"blur",void 0]]
for(var o=0,a=this._listeners;o<a.length;o+=1){var s=a[o],l=s[0]
r.addEventListener(l,s[1],l===t.window.document?this.handleWindowEvent:this.handleEvent,s[2])}}
mn.prototype.destroy=function(){for(var e=0,i=this._listeners;e<i.length;e+=1){var n=i[e],o=n[0]
r.removeEventListener(o,n[1],o===t.window.document?this.handleWindowEvent:this.handleEvent,n[2])}},mn.prototype._addDefaultHandlers=function(t){var e=this._map,r=e.getCanvasContainer()
this._add("mapEvent",new Ri(e,t))
var i=e.boxZoom=new Fi(e,t)
this._add("boxZoom",i)
var n=new Ni,o=new sn
e.doubleClickZoom=new an(o,n),this._add("tapZoom",n),this._add("clickZoom",o)
var a=new ln
this._add("tapDragZoom",a)
var s=e.touchPitch=new tn
this._add("touchPitch",s)
var l=new Zi(t),u=new Gi(t)
e.dragRotate=new cn(t,l,u),this._add("mouseRotate",l,["mousePitch"]),this._add("mousePitch",u,["mouseRotate"])
var c=new qi(t),p=new Xi(t)
e.dragPan=new un(r,c,p),this._add("mousePan",c),this._add("touchPan",p,["touchZoom","touchRotate"])
var h=new Qi,f=new Ji
e.touchZoomRotate=new pn(r,f,h,a),this._add("touchRotate",h,["touchPan","touchZoom"]),this._add("touchZoom",f,["touchPan","touchRotate"])
var d=e.scrollZoom=new on(e,this)
this._add("scrollZoom",d,["mousePan"])
var m=e.keyboard=new rn
this._add("keyboard",m),this._add("blockableMapEvent",new Bi(e))
for(var y=0,g=["boxZoom","doubleClickZoom","tapDragZoom","touchPitch","dragRotate","dragPan","touchZoomRotate","scrollZoom","keyboard"];y<g.length;y+=1){var _=g[y]
t.interactive&&t[_]&&e[_].enable(t[_])}},mn.prototype._add=function(t,e,r){this._handlers.push({handlerName:t,handler:e,allowed:r}),this._handlersById[t]=e},mn.prototype.stop=function(){if(!this._updatingCamera){for(var t=0,e=this._handlers;t<e.length;t+=1)e[t].handler.reset()
this._inertia.clear(),this._fireEvents({},{}),this._changes=[]}},mn.prototype.isActive=function(){for(var t=0,e=this._handlers;t<e.length;t+=1)if(e[t].handler.isActive())return!0
return!1},mn.prototype.isZooming=function(){return!!this._eventsInProgress.zoom||this._map.scrollZoom.isZooming()},mn.prototype.isRotating=function(){return!!this._eventsInProgress.rotate},mn.prototype._blockedByActive=function(t,e,r){for(var i in t)if(i!==r&&(!e||e.indexOf(i)<0))return!0
return!1},mn.prototype.handleWindowEvent=function(t){this.handleEvent(t,t.type+"Window")},mn.prototype.handleEvent=function(t,e){if("blur"!==t.type){this._updatingCamera=!0
for(var i="renderFrame"===t.type?void 0:t,n={needsRenderFrame:!1},o={},a={},s=t?t.targetTouches?r.touchPos(this._el,t.targetTouches):r.mousePos(this._el,t):null,l=0,u=this._handlers;l<u.length;l+=1){var c=u[l],p=c.handlerName,h=c.handler,f=c.allowed
if(h.isEnabled()){var d=void 0
this._blockedByActive(a,f,p)?h.reset():h[e||t.type]&&(d=h[e||t.type](t,s),this.mergeHandlerResult(n,o,d,p,i),d&&d.needsRenderFrame&&this._triggerRenderFrame()),(d||h.isActive())&&(a[p]=h)}}var m={}
for(var y in this._previousActiveHandlers)a[y]||(m[y]=i)
this._previousActiveHandlers=a,(Object.keys(m).length||dn(n))&&(this._changes.push([n,o,m]),this._triggerRenderFrame()),(Object.keys(a).length||dn(n))&&this._map._stop(!0),this._updatingCamera=!1
var g=n.cameraAnimation
g&&(this._inertia.clear(),this._fireEvents({},{}),this._changes=[],g(this._map))}else this.stop()},mn.prototype.mergeHandlerResult=function(e,r,i,n,o){if(i){t.extend(e,i)
var a={handlerName:n,originalEvent:i.originalEvent||o}
void 0!==i.zoomDelta&&(r.zoom=a),void 0!==i.panDelta&&(r.drag=a),void 0!==i.pitchDelta&&(r.pitch=a),void 0!==i.bearingDelta&&(r.rotate=a)}},mn.prototype._applyChanges=function(){for(var e={},r={},i={},n=0,o=this._changes;n<o.length;n+=1){var a=o[n],s=a[0],l=a[1],u=a[2]
s.panDelta&&(e.panDelta=(e.panDelta||new t.Point(0,0))._add(s.panDelta)),s.zoomDelta&&(e.zoomDelta=(e.zoomDelta||0)+s.zoomDelta),s.bearingDelta&&(e.bearingDelta=(e.bearingDelta||0)+s.bearingDelta),s.pitchDelta&&(e.pitchDelta=(e.pitchDelta||0)+s.pitchDelta),void 0!==s.around&&(e.around=s.around),void 0!==s.pinchAround&&(e.pinchAround=s.pinchAround),s.noInertia&&(e.noInertia=s.noInertia),t.extend(r,l),t.extend(i,u)}this._updateMapTransform(e,r,i),this._changes=[]},mn.prototype._updateMapTransform=function(t,e,r){var i=this._map,n=i.transform
if(!dn(t))return this._fireEvents(e,r)
var o=t.panDelta,a=t.zoomDelta,s=t.bearingDelta,l=t.pitchDelta,u=t.around,c=t.pinchAround
void 0!==c&&(u=c),i._stop(!0),u=u||i.transform.centerPoint
var p=n.pointLocation(o?u.sub(o):u)
s&&(n.bearing+=s),l&&(n.pitch+=l),a&&(n.zoom+=a),n.setLocationAtPoint(p,u),this._map._update(),t.noInertia||this._inertia.record(t),this._fireEvents(e,r)},mn.prototype._fireEvents=function(e,r){var i,n=this,o=hn(this._eventsInProgress),a=hn(e)
for(var s in!o&&a&&this._fireEvent("movestart",a.originalEvent),e){var l=e[s].originalEvent,u=!this._eventsInProgress[s]
this._eventsInProgress[s]=e[s],u&&this._fireEvent(s+"start",l)}for(var c in e.rotate&&(this._bearingChanged=!0),a&&this._fireEvent("move",a.originalEvent),e)this._fireEvent(c,e[c].originalEvent)
for(var p in this._eventsInProgress){var h=this._eventsInProgress[p],f=h.handlerName,d=h.originalEvent
this._handlersById[f].isActive()||(delete this._eventsInProgress[p],this._fireEvent(p+"end",i=r[f]||d))}var m=hn(this._eventsInProgress)
if((o||a)&&!m){this._updatingCamera=!0
var y=this._inertia._onMoveEnd(this._map.dragPan._inertiaOptions),g=function(t){return 0!==t&&-n._bearingSnap<t&&t<n._bearingSnap}
y?(g(y.bearing||this._map.getBearing())&&(y.bearing=0),this._map.easeTo(y,{originalEvent:i})):(this._map.fire(new t.Event("moveend",{originalEvent:i})),g(this._map.getBearing())&&this._map.resetNorth()),this._bearingChanged=!1,this._updatingCamera=!1}},mn.prototype._fireEvent=function(e,r){this._map.fire(new t.Event(e,r?{originalEvent:r}:{}))},mn.prototype._triggerRenderFrame=function(){var t=this
void 0===this._frameId&&(this._frameId=this._map._requestRenderFrame((function(e){delete t._frameId,t.handleEvent(new fn("renderFrame",{timeStamp:e})),t._applyChanges()})))}
var yn=function(e){function r(r,i){e.call(this),this._moving=!1,this._zooming=!1,this.transform=r,this._bearingSnap=i.bearingSnap,t.bindAll(["_renderFrameCallback"],this)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.getCenter=function(){return new t.LngLat(this.transform.center.lng,this.transform.center.lat)},r.prototype.setCenter=function(t,e){return this.jumpTo({center:t},e)},r.prototype.panBy=function(e,r,i){return e=t.Point.convert(e).mult(-1),this.panTo(this.transform.center,t.extend({offset:e},r),i)},r.prototype.panTo=function(e,r,i){return this.easeTo(t.extend({center:e},r),i)},r.prototype.getZoom=function(){return this.transform.zoom},r.prototype.setZoom=function(t,e){return this.jumpTo({zoom:t},e),this},r.prototype.zoomTo=function(e,r,i){return this.easeTo(t.extend({zoom:e},r),i)},r.prototype.zoomIn=function(t,e){return this.zoomTo(this.getZoom()+1,t,e),this},r.prototype.zoomOut=function(t,e){return this.zoomTo(this.getZoom()-1,t,e),this},r.prototype.getBearing=function(){return this.transform.bearing},r.prototype.setBearing=function(t,e){return this.jumpTo({bearing:t},e),this},r.prototype.getPadding=function(){return this.transform.padding},r.prototype.setPadding=function(t,e){return this.jumpTo({padding:t},e),this},r.prototype.rotateTo=function(e,r,i){return this.easeTo(t.extend({bearing:e},r),i)},r.prototype.resetNorth=function(e,r){return this.rotateTo(0,t.extend({duration:1e3},e),r),this},r.prototype.resetNorthPitch=function(e,r){return this.easeTo(t.extend({bearing:0,pitch:0,duration:1e3},e),r),this},r.prototype.snapToNorth=function(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this},r.prototype.getPitch=function(){return this.transform.pitch},r.prototype.setPitch=function(t,e){return this.jumpTo({pitch:t},e),this},r.prototype.cameraForBounds=function(e,r){return e=t.LngLatBounds.convert(e),this._cameraForBoxAndBearing(e.getNorthWest(),e.getSouthEast(),0,r)},r.prototype._cameraForBoxAndBearing=function(e,r,i,n){var o={top:0,bottom:0,right:0,left:0}
if("number"==typeof(n=t.extend({padding:o,offset:[0,0],maxZoom:this.transform.maxZoom},n)).padding){var a=n.padding
n.padding={top:a,bottom:a,right:a,left:a}}n.padding=t.extend(o,n.padding)
var s=this.transform,l=s.padding,u=s.project(t.LngLat.convert(e)),c=s.project(t.LngLat.convert(r)),p=u.rotate(-i*Math.PI/180),h=c.rotate(-i*Math.PI/180),f=new t.Point(Math.max(p.x,h.x),Math.max(p.y,h.y)),d=new t.Point(Math.min(p.x,h.x),Math.min(p.y,h.y)),m=f.sub(d),y=(s.width-(l.left+l.right+n.padding.left+n.padding.right))/m.x,g=(s.height-(l.top+l.bottom+n.padding.top+n.padding.bottom))/m.y
if(!(g<0||y<0)){var _=Math.min(s.scaleZoom(s.scale*Math.min(y,g)),n.maxZoom),v=t.Point.convert(n.offset),x=new t.Point(v.x+(n.padding.left-n.padding.right)/2,v.y+(n.padding.top-n.padding.bottom)/2).mult(s.scale/s.zoomScale(_))
return{center:s.unproject(u.add(c).div(2).sub(x)),zoom:_,bearing:i}}t.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset.")},r.prototype.fitBounds=function(t,e,r){return this._fitInternal(this.cameraForBounds(t,e),e,r)},r.prototype.fitScreenCoordinates=function(e,r,i,n,o){return this._fitInternal(this._cameraForBoxAndBearing(this.transform.pointLocation(t.Point.convert(e)),this.transform.pointLocation(t.Point.convert(r)),i,n),n,o)},r.prototype._fitInternal=function(e,r,i){return e?(delete(r=t.extend(e,r)).padding,r.linear?this.easeTo(r,i):this.flyTo(r,i)):this},r.prototype.jumpTo=function(e,r){this.stop()
var i=this.transform,n=!1,o=!1,a=!1
return"zoom"in e&&i.zoom!==+e.zoom&&(n=!0,i.zoom=+e.zoom),void 0!==e.center&&(i.center=t.LngLat.convert(e.center)),"bearing"in e&&i.bearing!==+e.bearing&&(o=!0,i.bearing=+e.bearing),"pitch"in e&&i.pitch!==+e.pitch&&(a=!0,i.pitch=+e.pitch),null==e.padding||i.isPaddingEqual(e.padding)||(i.padding=e.padding),this.fire(new t.Event("movestart",r)).fire(new t.Event("move",r)),n&&this.fire(new t.Event("zoomstart",r)).fire(new t.Event("zoom",r)).fire(new t.Event("zoomend",r)),o&&this.fire(new t.Event("rotatestart",r)).fire(new t.Event("rotate",r)).fire(new t.Event("rotateend",r)),a&&this.fire(new t.Event("pitchstart",r)).fire(new t.Event("pitch",r)).fire(new t.Event("pitchend",r)),this.fire(new t.Event("moveend",r))},r.prototype.easeTo=function(e,r){var i=this
this._stop(!1,e.easeId),(!1===(e=t.extend({offset:[0,0],duration:500,easing:t.ease},e)).animate||!e.essential&&t.browser.prefersReducedMotion)&&(e.duration=0)
var n=this.transform,o=this.getZoom(),a=this.getBearing(),s=this.getPitch(),l=this.getPadding(),u="zoom"in e?+e.zoom:o,c="bearing"in e?this._normalizeBearing(e.bearing,a):a,p="pitch"in e?+e.pitch:s,h="padding"in e?e.padding:n.padding,f=t.Point.convert(e.offset),d=n.centerPoint.add(f),m=n.pointLocation(d),y=t.LngLat.convert(e.center||m)
this._normalizeCenter(y)
var g,_,v=n.project(m),x=n.project(y).sub(v),b=n.zoomScale(u-o)
e.around&&(g=t.LngLat.convert(e.around),_=n.locationPoint(g))
var w={moving:this._moving,zooming:this._zooming,rotating:this._rotating,pitching:this._pitching}
return this._zooming=this._zooming||u!==o,this._rotating=this._rotating||a!==c,this._pitching=this._pitching||p!==s,this._padding=!n.isPaddingEqual(h),this._easeId=e.easeId,this._prepareEase(r,e.noMoveStart,w),clearTimeout(this._easeEndTimeoutID),this._ease((function(e){if(i._zooming&&(n.zoom=t.number(o,u,e)),i._rotating&&(n.bearing=t.number(a,c,e)),i._pitching&&(n.pitch=t.number(s,p,e)),i._padding&&(n.interpolatePadding(l,h,e),d=n.centerPoint.add(f)),g)n.setLocationAtPoint(g,_)
else{var m=n.zoomScale(n.zoom-o),y=u>o?Math.min(2,b):Math.max(.5,b),w=Math.pow(y,1-e),S=n.unproject(v.add(x.mult(e*w)).mult(m))
n.setLocationAtPoint(n.renderWorldCopies?S.wrap():S,d)}i._fireMoveEvents(r)}),(function(t){i._afterEase(r,t)}),e),this},r.prototype._prepareEase=function(e,r,i){void 0===i&&(i={}),this._moving=!0,r||i.moving||this.fire(new t.Event("movestart",e)),this._zooming&&!i.zooming&&this.fire(new t.Event("zoomstart",e)),this._rotating&&!i.rotating&&this.fire(new t.Event("rotatestart",e)),this._pitching&&!i.pitching&&this.fire(new t.Event("pitchstart",e))},r.prototype._fireMoveEvents=function(e){this.fire(new t.Event("move",e)),this._zooming&&this.fire(new t.Event("zoom",e)),this._rotating&&this.fire(new t.Event("rotate",e)),this._pitching&&this.fire(new t.Event("pitch",e))},r.prototype._afterEase=function(e,r){if(!this._easeId||!r||this._easeId!==r){delete this._easeId
var i=this._zooming,n=this._rotating,o=this._pitching
this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,this._padding=!1,i&&this.fire(new t.Event("zoomend",e)),n&&this.fire(new t.Event("rotateend",e)),o&&this.fire(new t.Event("pitchend",e)),this.fire(new t.Event("moveend",e))}},r.prototype.flyTo=function(e,r){var i=this
if(!e.essential&&t.browser.prefersReducedMotion){var n=t.pick(e,["center","zoom","bearing","pitch","around"])
return this.jumpTo(n,r)}this.stop(),e=t.extend({offset:[0,0],speed:1.2,curve:1.42,easing:t.ease},e)
var o=this.transform,a=this.getZoom(),s=this.getBearing(),l=this.getPitch(),u=this.getPadding(),c="zoom"in e?t.clamp(+e.zoom,o.minZoom,o.maxZoom):a,p="bearing"in e?this._normalizeBearing(e.bearing,s):s,h="pitch"in e?+e.pitch:l,f="padding"in e?e.padding:o.padding,d=o.zoomScale(c-a),m=t.Point.convert(e.offset),y=o.centerPoint.add(m),g=o.pointLocation(y),_=t.LngLat.convert(e.center||g)
this._normalizeCenter(_)
var v=o.project(g),x=o.project(_).sub(v),b=e.curve,w=Math.max(o.width,o.height),S=w/d,T=x.mag()
if("minZoom"in e){var I=t.clamp(Math.min(e.minZoom,a,c),o.minZoom,o.maxZoom),E=w/o.zoomScale(I-a)
b=Math.sqrt(E/T*2)}var A=b*b
function z(t){var e=(S*S-w*w+(t?-1:1)*A*A*T*T)/(2*(t?S:w)*A*T)
return Math.log(Math.sqrt(e*e+1)-e)}function P(t){return(Math.exp(t)-Math.exp(-t))/2}function C(t){return(Math.exp(t)+Math.exp(-t))/2}var k=z(0),M=function(t){return C(k)/C(k+b*t)},D=function(t){return w*((C(k)*(P(e=k+b*t)/C(e))-P(k))/A)/T
var e},L=(z(1)-k)/b
if(Math.abs(T)<1e-6||!isFinite(L)){if(Math.abs(w-S)<1e-6)return this.easeTo(e,r)
var R=S<w?-1:1
L=Math.abs(Math.log(S/w))/b,D=function(){return 0},M=function(t){return Math.exp(R*b*t)}}return e.duration="duration"in e?+e.duration:1e3*L/("screenSpeed"in e?+e.screenSpeed/b:+e.speed),e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=s!==p,this._pitching=h!==l,this._padding=!o.isPaddingEqual(f),this._prepareEase(r,!1),this._ease((function(e){var n=e*L,d=1/M(n)
o.zoom=1===e?c:a+o.scaleZoom(d),i._rotating&&(o.bearing=t.number(s,p,e)),i._pitching&&(o.pitch=t.number(l,h,e)),i._padding&&(o.interpolatePadding(u,f,e),y=o.centerPoint.add(m))
var g=1===e?_:o.unproject(v.add(x.mult(D(n))).mult(d))
o.setLocationAtPoint(o.renderWorldCopies?g.wrap():g,y),i._fireMoveEvents(r)}),(function(){return i._afterEase(r)}),e),this},r.prototype.isEasing=function(){return!!this._easeFrameId},r.prototype.stop=function(){return this._stop()},r.prototype._stop=function(t,e){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){var r=this._onEaseEnd
delete this._onEaseEnd,r.call(this,e)}if(!t){var i=this.handlers
i&&i.stop()}return this},r.prototype._ease=function(e,r,i){!1===i.animate||0===i.duration?(e(1),r()):(this._easeStart=t.browser.now(),this._easeOptions=i,this._onEaseFrame=e,this._onEaseEnd=r,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback))},r.prototype._renderFrameCallback=function(){var e=Math.min((t.browser.now()-this._easeStart)/this._easeOptions.duration,1)
this._onEaseFrame(this._easeOptions.easing(e)),e<1?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop()},r.prototype._normalizeBearing=function(e,r){e=t.wrap(e,-180,180)
var i=Math.abs(e-r)
return Math.abs(e-360-r)<i&&(e-=360),Math.abs(e+360-r)<i&&(e+=360),e},r.prototype._normalizeCenter=function(t){var e=this.transform
if(e.renderWorldCopies&&!e.lngRange){var r=t.lng-e.center.lng
t.lng+=r>180?-360:r<-180?360:0}},r}(t.Evented),gn=function(e){void 0===e&&(e={}),this.options=e,t.bindAll(["_updateEditLink","_updateData","_updateCompact"],this)}
gn.prototype.getDefaultPosition=function(){return"bottom-right"},gn.prototype.onAdd=function(t){var e=this.options&&this.options.compact
return this._map=t,this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-attrib"),this._innerContainer=r.create("div","mapboxgl-ctrl-attrib-inner",this._container),e&&this._container.classList.add("mapboxgl-compact"),this._updateAttributions(),this._updateEditLink(),this._map.on("styledata",this._updateData),this._map.on("sourcedata",this._updateData),this._map.on("moveend",this._updateEditLink),void 0===e&&(this._map.on("resize",this._updateCompact),this._updateCompact()),this._container},gn.prototype.onRemove=function(){r.remove(this._container),this._map.off("styledata",this._updateData),this._map.off("sourcedata",this._updateData),this._map.off("moveend",this._updateEditLink),this._map.off("resize",this._updateCompact),this._map=void 0,this._attribHTML=void 0},gn.prototype._updateEditLink=function(){var e=this._editLink
e||(e=this._editLink=this._container.querySelector(".mapbox-improve-map"))
var r=[{key:"owner",value:this.styleOwner},{key:"id",value:this.styleId},{key:"access_token",value:this._map._requestManager._customAccessToken||t.config.ACCESS_TOKEN}]
if(e){var i=r.reduce((function(t,e,i){return e.value&&(t+=e.key+"="+e.value+(i<r.length-1?"&":"")),t}),"?")
e.href=t.config.FEEDBACK_URL+"/"+i+(this._map._hash?this._map._hash.getHashString(!0):""),e.rel="noopener nofollow"}},gn.prototype._updateData=function(t){!t||"metadata"!==t.sourceDataType&&"style"!==t.dataType||(this._updateAttributions(),this._updateEditLink())},gn.prototype._updateAttributions=function(){if(this._map.style){var t=[]
if(this.options.customAttribution&&(Array.isArray(this.options.customAttribution)?t=t.concat(this.options.customAttribution.map((function(t){return"string"!=typeof t?"":t}))):"string"==typeof this.options.customAttribution&&t.push(this.options.customAttribution)),this._map.style.stylesheet){var e=this._map.style.stylesheet
this.styleOwner=e.owner,this.styleId=e.id}var r=this._map.style.sourceCaches
for(var i in r){var n=r[i]
if(n.used){var o=n.getSource()
o.attribution&&t.indexOf(o.attribution)<0&&t.push(o.attribution)}}t.sort((function(t,e){return t.length-e.length}))
var a=(t=t.filter((function(e,r){for(var i=r+1;i<t.length;i++)if(t[i].indexOf(e)>=0)return!1
return!0}))).join(" | ")
a!==this._attribHTML&&(this._attribHTML=a,t.length?(this._innerContainer.innerHTML=a,this._container.classList.remove("mapboxgl-attrib-empty")):this._container.classList.add("mapboxgl-attrib-empty"),this._editLink=null)}},gn.prototype._updateCompact=function(){this._map.getCanvasContainer().offsetWidth<=640?this._container.classList.add("mapboxgl-compact"):this._container.classList.remove("mapboxgl-compact")}
var _n=function(){t.bindAll(["_updateLogo"],this),t.bindAll(["_updateCompact"],this)}
_n.prototype.onAdd=function(t){this._map=t,this._container=r.create("div","mapboxgl-ctrl")
var e=r.create("a","mapboxgl-ctrl-logo")
return e.target="_blank",e.rel="noopener nofollow",e.href="https://www.mapbox.com/",e.setAttribute("aria-label",this._map._getUIString("LogoControl.Title")),e.setAttribute("rel","noopener nofollow"),this._container.appendChild(e),this._container.style.display="none",this._map.on("sourcedata",this._updateLogo),this._updateLogo(),this._map.on("resize",this._updateCompact),this._updateCompact(),this._container},_n.prototype.onRemove=function(){r.remove(this._container),this._map.off("sourcedata",this._updateLogo),this._map.off("resize",this._updateCompact)},_n.prototype.getDefaultPosition=function(){return"bottom-left"},_n.prototype._updateLogo=function(t){t&&"metadata"!==t.sourceDataType||(this._container.style.display=this._logoRequired()?"block":"none")},_n.prototype._logoRequired=function(){if(this._map.style){var t=this._map.style.sourceCaches
for(var e in t)if(t[e].getSource().mapbox_logo)return!0
return!1}},_n.prototype._updateCompact=function(){var t=this._container.children
if(t.length){var e=t[0]
this._map.getCanvasContainer().offsetWidth<250?e.classList.add("mapboxgl-compact"):e.classList.remove("mapboxgl-compact")}}
var vn=function(){this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1}
vn.prototype.add=function(t){var e=++this._id
return this._queue.push({callback:t,id:e,cancelled:!1}),e},vn.prototype.remove=function(t){for(var e=this._currentlyRunning,r=0,i=e?this._queue.concat(e):this._queue;r<i.length;r+=1){var n=i[r]
if(n.id===t)return void(n.cancelled=!0)}},vn.prototype.run=function(t){void 0===t&&(t=0)
var e=this._currentlyRunning=this._queue
this._queue=[]
for(var r=0,i=e;r<i.length;r+=1){var n=i[r]
if(!n.cancelled&&(n.callback(t),this._cleared))break}this._cleared=!1,this._currentlyRunning=!1},vn.prototype.clear=function(){this._currentlyRunning&&(this._cleared=!0),this._queue=[]}
var xn={"FullscreenControl.Enter":"Enter fullscreen","FullscreenControl.Exit":"Exit fullscreen","GeolocateControl.FindMyLocation":"Find my location","GeolocateControl.LocationNotAvailable":"Location not available","LogoControl.Title":"Mapbox logo","NavigationControl.ResetBearing":"Reset bearing to north","NavigationControl.ZoomIn":"Zoom in","NavigationControl.ZoomOut":"Zoom out","ScaleControl.Feet":"ft","ScaleControl.Meters":"m","ScaleControl.Kilometers":"km","ScaleControl.Miles":"mi","ScaleControl.NauticalMiles":"nm"},bn=t.window.HTMLImageElement,wn=t.window.HTMLElement,Sn=t.window.ImageBitmap,Tn={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:-2,maxZoom:22,minPitch:0,maxPitch:60,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,bearingSnap:7,clickTolerance:3,pitchWithRotate:!0,hash:!1,attributionControl:!0,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,localIdeographFontFamily:"sans-serif",transformRequest:null,accessToken:null,fadeDuration:300,crossSourceCollisions:!0},In=function(i){function n(e){var r=this
if(null!=(e=t.extend({},Tn,e)).minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than or equal to minZoom")
if(null!=e.minPitch&&null!=e.maxPitch&&e.minPitch>e.maxPitch)throw new Error("maxPitch must be greater than or equal to minPitch")
if(null!=e.minPitch&&e.minPitch<0)throw new Error("minPitch must be greater than or equal to 0")
if(null!=e.maxPitch&&e.maxPitch>60)throw new Error("maxPitch must be less than or equal to 60")
var n=new bi(e.minZoom,e.maxZoom,e.minPitch,e.maxPitch,e.renderWorldCopies)
if(i.call(this,n,e),this._interactive=e.interactive,this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._antialias=e.antialias,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossSourceCollisions=e.crossSourceCollisions,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming,this._renderTaskQueue=new vn,this._controls=[],this._mapId=t.uniqueId(),this._locale=t.extend({},xn,e.locale),this._requestManager=new t.RequestManager(e.transformRequest,e.accessToken),"string"==typeof e.container){if(this._container=t.window.document.getElementById(e.container),!this._container)throw new Error("Container '"+e.container+"' not found.")}else{if(!(e.container instanceof wn))throw new Error("Invalid type: 'container' must be a String or HTMLElement.")
this._container=e.container}if(e.maxBounds&&this.setMaxBounds(e.maxBounds),t.bindAll(["_onWindowOnline","_onWindowResize","_contextLost","_contextRestored"],this),this._setupContainer(),this._setupPainter(),void 0===this.painter)throw new Error("Failed to initialize WebGL.")
this.on("move",(function(){return r._update(!1)})),this.on("moveend",(function(){return r._update(!1)})),this.on("zoom",(function(){return r._update(!0)})),void 0!==t.window&&(t.window.addEventListener("online",this._onWindowOnline,!1),t.window.addEventListener("resize",this._onWindowResize,!1)),this.handlers=new mn(this,e),this._hash=e.hash&&new Si("string"==typeof e.hash&&e.hash||void 0).addTo(this),this._hash&&this._hash._onHashChange()||(this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),e.bounds&&(this.resize(),this.fitBounds(e.bounds,t.extend({},e.fitBoundsOptions,{duration:0})))),this.resize(),this._localIdeographFontFamily=e.localIdeographFontFamily,e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new gn({customAttribution:e.customAttribution})),this.addControl(new _n,e.logoPosition),this.on("style.load",(function(){r.transform.unmodified&&r.jumpTo(r.style.stylesheet)})),this.on("data",(function(e){r._update("style"===e.dataType),r.fire(new t.Event(e.dataType+"data",e))})),this.on("dataloading",(function(e){r.fire(new t.Event(e.dataType+"dataloading",e))}))}i&&(n.__proto__=i),(n.prototype=Object.create(i&&i.prototype)).constructor=n
var o={showTileBoundaries:{configurable:!0},showPadding:{configurable:!0},showCollisionBoxes:{configurable:!0},showOverdrawInspector:{configurable:!0},repaint:{configurable:!0},vertices:{configurable:!0},version:{configurable:!0}}
return n.prototype._getMapId=function(){return this._mapId},n.prototype.addControl=function(e,r){if(void 0===r&&e.getDefaultPosition&&(r=e.getDefaultPosition()),void 0===r&&(r="top-right"),!e||!e.onAdd)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.addControl(). Argument must be a control with onAdd and onRemove methods.")))
var i=e.onAdd(this)
this._controls.push(e)
var n=this._controlPositions[r]
return-1!==r.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},n.prototype.removeControl=function(e){if(!e||!e.onRemove)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.removeControl(). Argument must be a control with onAdd and onRemove methods.")))
var r=this._controls.indexOf(e)
return r>-1&&this._controls.splice(r,1),e.onRemove(this),this},n.prototype.resize=function(e){var r=this._containerDimensions(),i=r[0],n=r[1]
this._resizeCanvas(i,n),this.transform.resize(i,n),this.painter.resize(i,n)
var o=!this._moving
return o&&(this.stop(),this.fire(new t.Event("movestart",e)).fire(new t.Event("move",e))),this.fire(new t.Event("resize",e)),o&&this.fire(new t.Event("moveend",e)),this},n.prototype.getBounds=function(){return this.transform.getBounds()},n.prototype.getMaxBounds=function(){return this.transform.getMaxBounds()},n.prototype.setMaxBounds=function(e){return this.transform.setMaxBounds(t.LngLatBounds.convert(e)),this._update()},n.prototype.setMinZoom=function(t){if((t=null==t?-2:t)>=-2&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this
throw new Error("minZoom must be between -2 and the current maxZoom, inclusive")},n.prototype.getMinZoom=function(){return this.transform.minZoom},n.prototype.setMaxZoom=function(t){if((t=null==t?22:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this
throw new Error("maxZoom must be greater than the current minZoom")},n.prototype.getMaxZoom=function(){return this.transform.maxZoom},n.prototype.setMinPitch=function(t){if((t=null==t?0:t)<0)throw new Error("minPitch must be greater than or equal to 0")
if(t>=0&&t<=this.transform.maxPitch)return this.transform.minPitch=t,this._update(),this.getPitch()<t&&this.setPitch(t),this
throw new Error("minPitch must be between 0 and the current maxPitch, inclusive")},n.prototype.getMinPitch=function(){return this.transform.minPitch},n.prototype.setMaxPitch=function(t){if((t=null==t?60:t)>60)throw new Error("maxPitch must be less than or equal to 60")
if(t>=this.transform.minPitch)return this.transform.maxPitch=t,this._update(),this.getPitch()>t&&this.setPitch(t),this
throw new Error("maxPitch must be greater than the current minPitch")},n.prototype.getMaxPitch=function(){return this.transform.maxPitch},n.prototype.getRenderWorldCopies=function(){return this.transform.renderWorldCopies},n.prototype.setRenderWorldCopies=function(t){return this.transform.renderWorldCopies=t,this._update()},n.prototype.project=function(e){return this.transform.locationPoint(t.LngLat.convert(e))},n.prototype.unproject=function(e){return this.transform.pointLocation(t.Point.convert(e))},n.prototype.isMoving=function(){return this._moving||this.handlers.isActive()},n.prototype.isZooming=function(){return this._zooming||this.handlers.isZooming()},n.prototype.isRotating=function(){return this._rotating||this.handlers.isRotating()},n.prototype._createDelegatedListener=function(t,e,r){var i,n=this
if("mouseenter"===t||"mouseover"===t){var o=!1
return{layer:e,listener:r,delegates:{mousemove:function(i){var a=n.getLayer(e)?n.queryRenderedFeatures(i.point,{layers:[e]}):[]
a.length?o||(o=!0,r.call(n,new Mi(t,n,i.originalEvent,{features:a}))):o=!1},mouseout:function(){o=!1}}}}if("mouseleave"===t||"mouseout"===t){var a=!1
return{layer:e,listener:r,delegates:{mousemove:function(i){(n.getLayer(e)?n.queryRenderedFeatures(i.point,{layers:[e]}):[]).length?a=!0:a&&(a=!1,r.call(n,new Mi(t,n,i.originalEvent)))},mouseout:function(e){a&&(a=!1,r.call(n,new Mi(t,n,e.originalEvent)))}}}}return{layer:e,listener:r,delegates:(i={},i[t]=function(t){var i=n.getLayer(e)?n.queryRenderedFeatures(t.point,{layers:[e]}):[]
i.length&&(t.features=i,r.call(n,t),delete t.features)},i)}},n.prototype.on=function(t,e,r){if(void 0===r)return i.prototype.on.call(this,t,e)
var n=this._createDelegatedListener(t,e,r)
for(var o in this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[t]=this._delegatedListeners[t]||[],this._delegatedListeners[t].push(n),n.delegates)this.on(o,n.delegates[o])
return this},n.prototype.once=function(t,e,r){if(void 0===r)return i.prototype.once.call(this,t,e)
var n=this._createDelegatedListener(t,e,r)
for(var o in n.delegates)this.once(o,n.delegates[o])
return this},n.prototype.off=function(t,e,r){var n=this
return void 0===r?i.prototype.off.call(this,t,e):(this._delegatedListeners&&this._delegatedListeners[t]&&function(i){for(var o=i[t],a=0;a<o.length;a++){var s=o[a]
if(s.layer===e&&s.listener===r){for(var l in s.delegates)n.off(l,s.delegates[l])
return o.splice(a,1),n}}}(this._delegatedListeners),this)},n.prototype.queryRenderedFeatures=function(e,r){if(!this.style)return[]
var i
if(void 0!==r||void 0===e||e instanceof t.Point||Array.isArray(e)||(r=e,e=void 0),r=r||{},(e=e||[[0,0],[this.transform.width,this.transform.height]])instanceof t.Point||"number"==typeof e[0])i=[t.Point.convert(e)]
else{var n=t.Point.convert(e[0]),o=t.Point.convert(e[1])
i=[n,new t.Point(o.x,n.y),o,new t.Point(n.x,o.y),n]}return this.style.queryRenderedFeatures(i,r,this.transform)},n.prototype.querySourceFeatures=function(t,e){return this.style.querySourceFeatures(t,e)},n.prototype.setStyle=function(e,r){return!1!==(r=t.extend({},{localIdeographFontFamily:this._localIdeographFontFamily},r)).diff&&r.localIdeographFontFamily===this._localIdeographFontFamily&&this.style&&e?(this._diffStyle(e,r),this):(this._localIdeographFontFamily=r.localIdeographFontFamily,this._updateStyle(e,r))},n.prototype._getUIString=function(t){var e=this._locale[t]
if(null==e)throw new Error("Missing UI string '"+t+"'")
return e},n.prototype._updateStyle=function(t,e){return this.style&&(this.style.setEventedParent(null),this.style._remove()),t?(this.style=new qe(this,e||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof t?this.style.loadURL(t):this.style.loadJSON(t),this):(delete this.style,this)},n.prototype._lazyInitEmptyStyle=function(){this.style||(this.style=new qe(this,{}),this.style.setEventedParent(this,{style:this.style}),this.style.loadEmpty())},n.prototype._diffStyle=function(e,r){var i=this
if("string"==typeof e){var n=this._requestManager.normalizeStyleURL(e),o=this._requestManager.transformRequest(n,t.ResourceType.Style)
t.getJSON(o,(function(e,n){e?i.fire(new t.ErrorEvent(e)):n&&i._updateDiff(n,r)}))}else"object"==typeof e&&this._updateDiff(e,r)},n.prototype._updateDiff=function(e,r){try{this.style.setState(e)&&this._update(!0)}catch(i){t.warnOnce("Unable to perform style diff: "+(i.message||i.error||i)+".  Rebuilding the style from scratch."),this._updateStyle(e,r)}},n.prototype.getStyle=function(){if(this.style)return this.style.serialize()},n.prototype.isStyleLoaded=function(){return this.style?this.style.loaded():t.warnOnce("There is no style added to the map.")},n.prototype.addSource=function(t,e){return this._lazyInitEmptyStyle(),this.style.addSource(t,e),this._update(!0)},n.prototype.isSourceLoaded=function(e){var r=this.style&&this.style.sourceCaches[e]
if(void 0!==r)return r.loaded()
this.fire(new t.ErrorEvent(new Error("There is no source with ID '"+e+"'")))},n.prototype.areTilesLoaded=function(){var t=this.style&&this.style.sourceCaches
for(var e in t){var r=t[e]._tiles
for(var i in r){var n=r[i]
if("loaded"!==n.state&&"errored"!==n.state)return!1}}return!0},n.prototype.addSourceType=function(t,e,r){return this._lazyInitEmptyStyle(),this.style.addSourceType(t,e,r)},n.prototype.removeSource=function(t){return this.style.removeSource(t),this._update(!0)},n.prototype.getSource=function(t){return this.style.getSource(t)},n.prototype.addImage=function(e,r,i){void 0===i&&(i={})
var n=i.pixelRatio
void 0===n&&(n=1)
var o=i.sdf
void 0===o&&(o=!1)
var a=i.stretchX,s=i.stretchY,l=i.content
if(this._lazyInitEmptyStyle(),r instanceof bn||Sn&&r instanceof Sn){var u=t.browser.getImageData(r)
this.style.addImage(e,{data:new t.RGBAImage({width:u.width,height:u.height},u.data),pixelRatio:n,stretchX:a,stretchY:s,content:l,sdf:o,version:0})}else{if(void 0===r.width||void 0===r.height)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")))
var c=r
this.style.addImage(e,{data:new t.RGBAImage({width:r.width,height:r.height},new Uint8Array(r.data)),pixelRatio:n,stretchX:a,stretchY:s,content:l,sdf:o,version:0,userImage:c}),c.onAdd&&c.onAdd(this,e)}},n.prototype.updateImage=function(e,r){var i=this.style.getImage(e)
if(!i)return this.fire(new t.ErrorEvent(new Error("The map has no image with that id. If you are adding a new image use `map.addImage(...)` instead.")))
var n=r instanceof bn||Sn&&r instanceof Sn?t.browser.getImageData(r):r,o=n.width,a=n.height,s=n.data
return void 0===o||void 0===a?this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.updateImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`"))):o!==i.data.width||a!==i.data.height?this.fire(new t.ErrorEvent(new Error("The width and height of the updated image must be that same as the previous version of the image"))):(i.data.replace(s,!(r instanceof bn||Sn&&r instanceof Sn)),void this.style.updateImage(e,i))},n.prototype.hasImage=function(e){return e?!!this.style.getImage(e):(this.fire(new t.ErrorEvent(new Error("Missing required image id"))),!1)},n.prototype.removeImage=function(t){this.style.removeImage(t)},n.prototype.loadImage=function(e,r){t.getImage(this._requestManager.transformRequest(e,t.ResourceType.Image),r)},n.prototype.listImages=function(){return this.style.listImages()},n.prototype.addLayer=function(t,e){return this._lazyInitEmptyStyle(),this.style.addLayer(t,e),this._update(!0)},n.prototype.moveLayer=function(t,e){return this.style.moveLayer(t,e),this._update(!0)},n.prototype.removeLayer=function(t){return this.style.removeLayer(t),this._update(!0)},n.prototype.getLayer=function(t){return this.style.getLayer(t)},n.prototype.setLayerZoomRange=function(t,e,r){return this.style.setLayerZoomRange(t,e,r),this._update(!0)},n.prototype.setFilter=function(t,e,r){return void 0===r&&(r={}),this.style.setFilter(t,e,r),this._update(!0)},n.prototype.getFilter=function(t){return this.style.getFilter(t)},n.prototype.setPaintProperty=function(t,e,r,i){return void 0===i&&(i={}),this.style.setPaintProperty(t,e,r,i),this._update(!0)},n.prototype.getPaintProperty=function(t,e){return this.style.getPaintProperty(t,e)},n.prototype.setLayoutProperty=function(t,e,r,i){return void 0===i&&(i={}),this.style.setLayoutProperty(t,e,r,i),this._update(!0)},n.prototype.getLayoutProperty=function(t,e){return this.style.getLayoutProperty(t,e)},n.prototype.setLight=function(t,e){return void 0===e&&(e={}),this._lazyInitEmptyStyle(),this.style.setLight(t,e),this._update(!0)},n.prototype.getLight=function(){return this.style.getLight()},n.prototype.setFeatureState=function(t,e){return this.style.setFeatureState(t,e),this._update()},n.prototype.removeFeatureState=function(t,e){return this.style.removeFeatureState(t,e),this._update()},n.prototype.getFeatureState=function(t){return this.style.getFeatureState(t)},n.prototype.getContainer=function(){return this._container},n.prototype.getCanvasContainer=function(){return this._canvasContainer},n.prototype.getCanvas=function(){return this._canvas},n.prototype._containerDimensions=function(){var t=0,e=0
return this._container&&(t=this._container.clientWidth||400,e=this._container.clientHeight||300),[t,e]},n.prototype._detectMissingCSS=function(){"rgb(250, 128, 114)"!==t.window.getComputedStyle(this._missingCSSCanary).getPropertyValue("background-color")&&t.warnOnce("This page appears to be missing CSS declarations for Mapbox GL JS, which may cause the map to display incorrectly. Please ensure your page includes mapbox-gl.css, as described in https://www.mapbox.com/mapbox-gl-js/api/.")},n.prototype._setupContainer=function(){var t=this._container
t.classList.add("mapboxgl-map"),(this._missingCSSCanary=r.create("div","mapboxgl-canary",t)).style.visibility="hidden",this._detectMissingCSS()
var e=this._canvasContainer=r.create("div","mapboxgl-canvas-container",t)
this._interactive&&e.classList.add("mapboxgl-interactive"),this._canvas=r.create("canvas","mapboxgl-canvas",e),this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map")
var i=this._containerDimensions()
this._resizeCanvas(i[0],i[1])
var n=this._controlContainer=r.create("div","mapboxgl-control-container",t),o=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach((function(t){o[t]=r.create("div","mapboxgl-ctrl-"+t,n)}))},n.prototype._resizeCanvas=function(e,r){var i=t.browser.devicePixelRatio||1
this._canvas.width=i*e,this._canvas.height=i*r,this._canvas.style.width=e+"px",this._canvas.style.height=r+"px"},n.prototype._setupPainter=function(){var r=t.extend({},e.webGLContextAttributes,{failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer,antialias:this._antialias||!1}),i=this._canvas.getContext("webgl",r)||this._canvas.getContext("experimental-webgl",r)
i?(this.painter=new gi(i,this.transform),t.webpSupported.testSupport(i)):this.fire(new t.ErrorEvent(new Error("Failed to initialize WebGL")))},n.prototype._contextLost=function(e){e.preventDefault(),this._frame&&(this._frame.cancel(),this._frame=null),this.fire(new t.Event("webglcontextlost",{originalEvent:e}))},n.prototype._contextRestored=function(e){this._setupPainter(),this.resize(),this._update(),this.fire(new t.Event("webglcontextrestored",{originalEvent:e}))},n.prototype.loaded=function(){return!this._styleDirty&&!this._sourcesDirty&&!!this.style&&this.style.loaded()},n.prototype._update=function(t){return this.style?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this.triggerRepaint(),this):this},n.prototype._requestRenderFrame=function(t){return this._update(),this._renderTaskQueue.add(t)},n.prototype._cancelRenderFrame=function(t){this._renderTaskQueue.remove(t)},n.prototype._render=function(e){var r,i=this,n=0,o=this.painter.context.extTimerQuery
if(this.listens("gpu-timing-frame")&&(r=o.createQueryEXT(),o.beginQueryEXT(o.TIME_ELAPSED_EXT,r),n=t.browser.now()),this.painter.context.setDirty(),this.painter.setBaseState(),this._renderTaskQueue.run(e),!this._removed){var a=!1
if(this.style&&this._styleDirty){this._styleDirty=!1
var s=this.transform.zoom,l=t.browser.now()
this.style.zoomHistory.update(s,l)
var u=new t.EvaluationParameters(s,{now:l,fadeDuration:this._fadeDuration,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),c=u.crossFadingFactor()
1===c&&c===this._crossFadingFactor||(a=!0,this._crossFadingFactor=c),this.style.update(u)}if(this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,this._fadeDuration,this._crossSourceCollisions),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.isRotating(),zooming:this.isZooming(),moving:this.isMoving(),fadeDuration:this._fadeDuration,showPadding:this.showPadding,gpuTiming:!!this.listens("gpu-timing-layer")}),this.fire(new t.Event("render")),this.loaded()&&!this._loaded&&(this._loaded=!0,this.fire(new t.Event("load"))),this.style&&(this.style.hasTransitions()||a)&&(this._styleDirty=!0),this.style&&!this._placementDirty&&this.style._releaseSymbolFadeTiles(),this.listens("gpu-timing-frame")){var p=t.browser.now()-n
o.endQueryEXT(o.TIME_ELAPSED_EXT,r),setTimeout((function(){var e=o.getQueryObjectEXT(r,o.QUERY_RESULT_EXT)/1e6
o.deleteQueryEXT(r),i.fire(new t.Event("gpu-timing-frame",{cpuTime:p,gpuTime:e}))}),50)}if(this.listens("gpu-timing-layer")){var h=this.painter.collectGpuTimers()
setTimeout((function(){var e=i.painter.queryGpuTimers(h)
i.fire(new t.Event("gpu-timing-layer",{layerTimes:e}))}),50)}return this._sourcesDirty||this._styleDirty||this._placementDirty||this._repaint?this.triggerRepaint():!this.isMoving()&&this.loaded()&&(this._fullyLoaded||(this._fullyLoaded=!0),this.fire(new t.Event("idle"))),this}},n.prototype.remove=function(){this._hash&&this._hash.remove()
for(var e=0,r=this._controls;e<r.length;e+=1)r[e].onRemove(this)
this._controls=[],this._frame&&(this._frame.cancel(),this._frame=null),this._renderTaskQueue.clear(),this.painter.destroy(),this.handlers.destroy(),delete this.handlers,this.setStyle(null),void 0!==t.window&&(t.window.removeEventListener("resize",this._onWindowResize,!1),t.window.removeEventListener("online",this._onWindowOnline,!1))
var i=this.painter.context.gl.getExtension("WEBGL_lose_context")
i&&i.loseContext(),En(this._canvasContainer),En(this._controlContainer),En(this._missingCSSCanary),this._container.classList.remove("mapboxgl-map"),this._removed=!0,this.fire(new t.Event("remove"))},n.prototype.triggerRepaint=function(){var e=this
this.style&&!this._frame&&(this._frame=t.browser.frame((function(t){e._frame=null,e._render(t)})))},n.prototype._onWindowOnline=function(){this._update()},n.prototype._onWindowResize=function(t){this._trackResize&&this.resize({originalEvent:t})._update()},o.showTileBoundaries.get=function(){return!!this._showTileBoundaries},o.showTileBoundaries.set=function(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update())},o.showPadding.get=function(){return!!this._showPadding},o.showPadding.set=function(t){this._showPadding!==t&&(this._showPadding=t,this._update())},o.showCollisionBoxes.get=function(){return!!this._showCollisionBoxes},o.showCollisionBoxes.set=function(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update())},o.showOverdrawInspector.get=function(){return!!this._showOverdrawInspector},o.showOverdrawInspector.set=function(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update())},o.repaint.get=function(){return!!this._repaint},o.repaint.set=function(t){this._repaint!==t&&(this._repaint=t,this.triggerRepaint())},o.vertices.get=function(){return!!this._vertices},o.vertices.set=function(t){this._vertices=t,this._update()},n.prototype._setCacheLimits=function(e,r){t.setCacheLimits(e,r)},o.version.get=function(){return t.version},Object.defineProperties(n.prototype,o),n}(yn)
function En(t){t.parentNode&&t.parentNode.removeChild(t)}var An={showCompass:!0,showZoom:!0,visualizePitch:!1},zn=function(e){var i=this
this.options=t.extend({},An,e),this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-group"),this._container.addEventListener("contextmenu",(function(t){return t.preventDefault()})),this.options.showZoom&&(t.bindAll(["_setButtonTitle","_updateZoomButtons"],this),this._zoomInButton=this._createButton("mapboxgl-ctrl-zoom-in",(function(t){return i._map.zoomIn({},{originalEvent:t})})),r.create("span","mapboxgl-ctrl-icon",this._zoomInButton).setAttribute("aria-hidden",!0),this._zoomOutButton=this._createButton("mapboxgl-ctrl-zoom-out",(function(t){return i._map.zoomOut({},{originalEvent:t})})),r.create("span","mapboxgl-ctrl-icon",this._zoomOutButton).setAttribute("aria-hidden",!0)),this.options.showCompass&&(t.bindAll(["_rotateCompassArrow"],this),this._compass=this._createButton("mapboxgl-ctrl-compass",(function(t){i.options.visualizePitch?i._map.resetNorthPitch({},{originalEvent:t}):i._map.resetNorth({},{originalEvent:t})})),this._compassIcon=r.create("span","mapboxgl-ctrl-icon",this._compass),this._compassIcon.setAttribute("aria-hidden",!0))}
zn.prototype._updateZoomButtons=function(){var t=this._map.getZoom()
this._zoomInButton.disabled=t===this._map.getMaxZoom(),this._zoomOutButton.disabled=t===this._map.getMinZoom()},zn.prototype._rotateCompassArrow=function(){var t=this.options.visualizePitch?"scale("+1/Math.pow(Math.cos(this._map.transform.pitch*(Math.PI/180)),.5)+") rotateX("+this._map.transform.pitch+"deg) rotateZ("+this._map.transform.angle*(180/Math.PI)+"deg)":"rotate("+this._map.transform.angle*(180/Math.PI)+"deg)"
this._compassIcon.style.transform=t},zn.prototype.onAdd=function(t){return this._map=t,this.options.showZoom&&(this._setButtonTitle(this._zoomInButton,"ZoomIn"),this._setButtonTitle(this._zoomOutButton,"ZoomOut"),this._map.on("zoom",this._updateZoomButtons),this._updateZoomButtons()),this.options.showCompass&&(this._setButtonTitle(this._compass,"ResetBearing"),this.options.visualizePitch&&this._map.on("pitch",this._rotateCompassArrow),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new Pn(this._map,this._compass,this.options.visualizePitch)),this._container},zn.prototype.onRemove=function(){r.remove(this._container),this.options.showZoom&&this._map.off("zoom",this._updateZoomButtons),this.options.showCompass&&(this.options.visualizePitch&&this._map.off("pitch",this._rotateCompassArrow),this._map.off("rotate",this._rotateCompassArrow),this._handler.off(),delete this._handler),delete this._map},zn.prototype._createButton=function(t,e){var i=r.create("button",t,this._container)
return i.type="button",i.addEventListener("click",e),i},zn.prototype._setButtonTitle=function(t,e){var r=this._map._getUIString("NavigationControl."+e)
t.title=r,t.setAttribute("aria-label",r)}
var Pn=function(e,i,n){void 0===n&&(n=!1),this._clickTolerance=10,this.element=i,this.mouseRotate=new Zi({clickTolerance:e.dragRotate._mouseRotate._clickTolerance}),this.map=e,n&&(this.mousePitch=new Gi({clickTolerance:e.dragRotate._mousePitch._clickTolerance})),t.bindAll(["mousedown","mousemove","mouseup","touchstart","touchmove","touchend","reset"],this),r.addEventListener(i,"mousedown",this.mousedown),r.addEventListener(i,"touchstart",this.touchstart,{passive:!1}),r.addEventListener(i,"touchmove",this.touchmove),r.addEventListener(i,"touchend",this.touchend),r.addEventListener(i,"touchcancel",this.reset)}
function Cn(e,r,i){if(e=new t.LngLat(e.lng,e.lat),r){var n=new t.LngLat(e.lng-360,e.lat),o=new t.LngLat(e.lng+360,e.lat),a=i.locationPoint(e).distSqr(r)
i.locationPoint(n).distSqr(r)<a?e=n:i.locationPoint(o).distSqr(r)<a&&(e=o)}for(;Math.abs(e.lng-i.center.lng)>180;){var s=i.locationPoint(e)
if(s.x>=0&&s.y>=0&&s.x<=i.width&&s.y<=i.height)break
e.lng>i.center.lng?e.lng-=360:e.lng+=360}return e}Pn.prototype.down=function(t,e){this.mouseRotate.mousedown(t,e),this.mousePitch&&this.mousePitch.mousedown(t,e),r.disableDrag()},Pn.prototype.move=function(t,e){var r=this.map,i=this.mouseRotate.mousemoveWindow(t,e)
if(i&&i.bearingDelta&&r.setBearing(r.getBearing()+i.bearingDelta),this.mousePitch){var n=this.mousePitch.mousemoveWindow(t,e)
n&&n.pitchDelta&&r.setPitch(r.getPitch()+n.pitchDelta)}},Pn.prototype.off=function(){var t=this.element
r.removeEventListener(t,"mousedown",this.mousedown),r.removeEventListener(t,"touchstart",this.touchstart,{passive:!1}),r.removeEventListener(t,"touchmove",this.touchmove),r.removeEventListener(t,"touchend",this.touchend),r.removeEventListener(t,"touchcancel",this.reset),this.offTemp()},Pn.prototype.offTemp=function(){r.enableDrag(),r.removeEventListener(t.window,"mousemove",this.mousemove),r.removeEventListener(t.window,"mouseup",this.mouseup)},Pn.prototype.mousedown=function(e){this.down(t.extend({},e,{ctrlKey:!0,preventDefault:function(){return e.preventDefault()}}),r.mousePos(this.element,e)),r.addEventListener(t.window,"mousemove",this.mousemove),r.addEventListener(t.window,"mouseup",this.mouseup)},Pn.prototype.mousemove=function(t){this.move(t,r.mousePos(this.element,t))},Pn.prototype.mouseup=function(t){this.mouseRotate.mouseupWindow(t),this.mousePitch&&this.mousePitch.mouseupWindow(t),this.offTemp()},Pn.prototype.touchstart=function(t){1!==t.targetTouches.length?this.reset():(this._startPos=this._lastPos=r.touchPos(this.element,t.targetTouches)[0],this.down({type:"mousedown",button:0,ctrlKey:!0,preventDefault:function(){return t.preventDefault()}},this._startPos))},Pn.prototype.touchmove=function(t){1!==t.targetTouches.length?this.reset():(this._lastPos=r.touchPos(this.element,t.targetTouches)[0],this.move({preventDefault:function(){return t.preventDefault()}},this._lastPos))},Pn.prototype.touchend=function(t){0===t.targetTouches.length&&this._startPos&&this._lastPos&&this._startPos.dist(this._lastPos)<this._clickTolerance&&this.element.click(),this.reset()},Pn.prototype.reset=function(){this.mouseRotate.reset(),this.mousePitch&&this.mousePitch.reset(),delete this._startPos,delete this._lastPos,this.offTemp()}
var kn={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"}
function Mn(t,e,r){var i=t.classList
for(var n in kn)i.remove("mapboxgl-"+r+"-anchor-"+n)
i.add("mapboxgl-"+r+"-anchor-"+e)}var Dn,Ln=function(e){function i(i,n){var o=this
if(e.call(this),(i instanceof t.window.HTMLElement||n)&&(i=t.extend({element:i},n)),t.bindAll(["_update","_onMove","_onUp","_addDragHandler","_onMapClick","_onKeyPress"],this),this._anchor=i&&i.anchor||"center",this._color=i&&i.color||"#3FB1CE",this._draggable=i&&i.draggable||!1,this._state="inactive",this._rotation=i&&i.rotation||0,this._rotationAlignment=i&&i.rotationAlignment||"auto",this._pitchAlignment=i&&i.pitchAlignment&&"auto"!==i.pitchAlignment?i.pitchAlignment:this._rotationAlignment,i&&i.element)this._element=i.element,this._offset=t.Point.convert(i&&i.offset||[0,0])
else{this._defaultMarker=!0,this._element=r.create("div"),this._element.setAttribute("aria-label","Map marker")
var a=r.createNS("http://www.w3.org/2000/svg","svg")
a.setAttributeNS(null,"display","block"),a.setAttributeNS(null,"height","41px"),a.setAttributeNS(null,"width","27px"),a.setAttributeNS(null,"viewBox","0 0 27 41")
var s=r.createNS("http://www.w3.org/2000/svg","g")
s.setAttributeNS(null,"stroke","none"),s.setAttributeNS(null,"stroke-width","1"),s.setAttributeNS(null,"fill","none"),s.setAttributeNS(null,"fill-rule","evenodd")
var l=r.createNS("http://www.w3.org/2000/svg","g")
l.setAttributeNS(null,"fill-rule","nonzero")
var u=r.createNS("http://www.w3.org/2000/svg","g")
u.setAttributeNS(null,"transform","translate(3.0, 29.0)"),u.setAttributeNS(null,"fill","#000000")
for(var c=0,p=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}];c<p.length;c+=1){var h=p[c],f=r.createNS("http://www.w3.org/2000/svg","ellipse")
f.setAttributeNS(null,"opacity","0.04"),f.setAttributeNS(null,"cx","10.5"),f.setAttributeNS(null,"cy","5.80029008"),f.setAttributeNS(null,"rx",h.rx),f.setAttributeNS(null,"ry",h.ry),u.appendChild(f)}var d=r.createNS("http://www.w3.org/2000/svg","g")
d.setAttributeNS(null,"fill",this._color)
var m=r.createNS("http://www.w3.org/2000/svg","path")
m.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),d.appendChild(m)
var y=r.createNS("http://www.w3.org/2000/svg","g")
y.setAttributeNS(null,"opacity","0.25"),y.setAttributeNS(null,"fill","#000000")
var g=r.createNS("http://www.w3.org/2000/svg","path")
g.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),y.appendChild(g)
var _=r.createNS("http://www.w3.org/2000/svg","g")
_.setAttributeNS(null,"transform","translate(6.0, 7.0)"),_.setAttributeNS(null,"fill","#FFFFFF")
var v=r.createNS("http://www.w3.org/2000/svg","g")
v.setAttributeNS(null,"transform","translate(8.0, 8.0)")
var x=r.createNS("http://www.w3.org/2000/svg","circle")
x.setAttributeNS(null,"fill","#000000"),x.setAttributeNS(null,"opacity","0.25"),x.setAttributeNS(null,"cx","5.5"),x.setAttributeNS(null,"cy","5.5"),x.setAttributeNS(null,"r","5.4999962")
var b=r.createNS("http://www.w3.org/2000/svg","circle")
b.setAttributeNS(null,"fill","#FFFFFF"),b.setAttributeNS(null,"cx","5.5"),b.setAttributeNS(null,"cy","5.5"),b.setAttributeNS(null,"r","5.4999962"),v.appendChild(x),v.appendChild(b),l.appendChild(u),l.appendChild(d),l.appendChild(y),l.appendChild(_),l.appendChild(v),a.appendChild(l),this._element.appendChild(a),this._offset=t.Point.convert(i&&i.offset||[0,-14])}this._element.classList.add("mapboxgl-marker"),this._element.addEventListener("dragstart",(function(t){t.preventDefault()})),this._element.addEventListener("mousedown",(function(t){t.preventDefault()})),this._element.addEventListener("focus",(function(){var t=o._map.getContainer()
t.scrollTop=0,t.scrollLeft=0})),Mn(this._element,this._anchor,"marker"),this._popup=null}return e&&(i.__proto__=e),(i.prototype=Object.create(e&&e.prototype)).constructor=i,i.prototype.addTo=function(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this.setDraggable(this._draggable),this._update(),this._map.on("click",this._onMapClick),this},i.prototype.remove=function(){return this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler),this._map.off("mouseup",this._onUp),this._map.off("touchend",this._onUp),this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),delete this._map),r.remove(this._element),this._popup&&this._popup.remove(),this},i.prototype.getLngLat=function(){return this._lngLat},i.prototype.setLngLat=function(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this},i.prototype.getElement=function(){return this._element},i.prototype.setPopup=function(t){if(this._popup&&(this._popup.remove(),this._popup=null,this._element.removeEventListener("keypress",this._onKeyPress),this._originalTabIndex||this._element.removeAttribute("tabindex")),t){if(!("offset"in t.options)){var e=Math.sqrt(Math.pow(13.5,2)/2)
t.options.offset=this._defaultMarker?{top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-38.1],"bottom-left":[e,-1*(24.6+e)],"bottom-right":[-e,-1*(24.6+e)],left:[13.5,-24.6],right:[-13.5,-24.6]}:this._offset}this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat),this._originalTabIndex=this._element.getAttribute("tabindex"),this._originalTabIndex||this._element.setAttribute("tabindex","0"),this._element.addEventListener("keypress",this._onKeyPress)}return this},i.prototype._onKeyPress=function(t){var e=t.code,r=t.charCode||t.keyCode
"Space"!==e&&"Enter"!==e&&32!==r&&13!==r||this.togglePopup()},i.prototype._onMapClick=function(t){var e=t.originalEvent.target,r=this._element
this._popup&&(e===r||r.contains(e))&&this.togglePopup()},i.prototype.getPopup=function(){return this._popup},i.prototype.togglePopup=function(){var t=this._popup
return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this},i.prototype._update=function(t){if(this._map){this._map.transform.renderWorldCopies&&(this._lngLat=Cn(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset)
var e=""
"viewport"===this._rotationAlignment||"auto"===this._rotationAlignment?e="rotateZ("+this._rotation+"deg)":"map"===this._rotationAlignment&&(e="rotateZ("+(this._rotation-this._map.getBearing())+"deg)")
var i=""
"viewport"===this._pitchAlignment||"auto"===this._pitchAlignment?i="rotateX(0deg)":"map"===this._pitchAlignment&&(i="rotateX("+this._map.getPitch()+"deg)"),t&&"moveend"!==t.type||(this._pos=this._pos.round()),r.setTransform(this._element,kn[this._anchor]+" translate("+this._pos.x+"px, "+this._pos.y+"px) "+i+" "+e)}},i.prototype.getOffset=function(){return this._offset},i.prototype.setOffset=function(e){return this._offset=t.Point.convert(e),this._update(),this},i.prototype._onMove=function(e){this._pos=e.point.sub(this._positionDelta),this._lngLat=this._map.unproject(this._pos),this.setLngLat(this._lngLat),this._element.style.pointerEvents="none","pending"===this._state&&(this._state="active",this.fire(new t.Event("dragstart"))),this.fire(new t.Event("drag"))},i.prototype._onUp=function(){this._element.style.pointerEvents="auto",this._positionDelta=null,this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),"active"===this._state&&this.fire(new t.Event("dragend")),this._state="inactive"},i.prototype._addDragHandler=function(t){this._element.contains(t.originalEvent.target)&&(t.preventDefault(),this._positionDelta=t.point.sub(this._pos).add(this._offset),this._state="pending",this._map.on("mousemove",this._onMove),this._map.on("touchmove",this._onMove),this._map.once("mouseup",this._onUp),this._map.once("touchend",this._onUp))},i.prototype.setDraggable=function(t){return this._draggable=!!t,this._map&&(t?(this._map.on("mousedown",this._addDragHandler),this._map.on("touchstart",this._addDragHandler)):(this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler))),this},i.prototype.isDraggable=function(){return this._draggable},i.prototype.setRotation=function(t){return this._rotation=t||0,this._update(),this},i.prototype.getRotation=function(){return this._rotation},i.prototype.setRotationAlignment=function(t){return this._rotationAlignment=t||"auto",this._update(),this},i.prototype.getRotationAlignment=function(){return this._rotationAlignment},i.prototype.setPitchAlignment=function(t){return this._pitchAlignment=t&&"auto"!==t?t:this._rotationAlignment,this._update(),this},i.prototype.getPitchAlignment=function(){return this._pitchAlignment},i}(t.Evented),Rn={positionOptions:{enableHighAccuracy:!1,maximumAge:0,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showAccuracyCircle:!0,showUserLocation:!0},Bn=0,Fn=!1,On=function(e){function i(r){e.call(this),this.options=t.extend({},Rn,r),t.bindAll(["_onSuccess","_onError","_onZoom","_finish","_setupUI","_updateCamera","_updateMarker"],this)}return e&&(i.__proto__=e),(i.prototype=Object.create(e&&e.prototype)).constructor=i,i.prototype.onAdd=function(e){var i
return this._map=e,this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-group"),i=this._setupUI,void 0!==Dn?i(Dn):void 0!==t.window.navigator.permissions?t.window.navigator.permissions.query({name:"geolocation"}).then((function(t){i(Dn="denied"!==t.state)})):i(Dn=!!t.window.navigator.geolocation),this._container},i.prototype.onRemove=function(){void 0!==this._geolocationWatchID&&(t.window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker&&this._userLocationDotMarker.remove(),this.options.showAccuracyCircle&&this._accuracyCircleMarker&&this._accuracyCircleMarker.remove(),r.remove(this._container),this._map.off("zoom",this._onZoom),this._map=void 0,Bn=0,Fn=!1},i.prototype._isOutOfMapMaxBounds=function(t){var e=this._map.getMaxBounds(),r=t.coords
return e&&(r.longitude<e.getWest()||r.longitude>e.getEast()||r.latitude<e.getSouth()||r.latitude>e.getNorth())},i.prototype._setErrorState=function(){switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error")
break
case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting")
break
case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting")}},i.prototype._onSuccess=function(e){if(this._map){if(this._isOutOfMapMaxBounds(e))return this._setErrorState(),this.fire(new t.Event("outofmaxbounds",e)),this._updateMarker(),void this._finish()
if(this.options.trackUserLocation)switch(this._lastKnownPosition=e,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background")}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(e),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(e),this.options.showUserLocation&&this._dotElement.classList.remove("mapboxgl-user-location-dot-stale"),this.fire(new t.Event("geolocate",e)),this._finish()}},i.prototype._updateCamera=function(e){var r=new t.LngLat(e.coords.longitude,e.coords.latitude),i=e.coords.accuracy,n=this._map.getBearing(),o=t.extend({bearing:n},this.options.fitBoundsOptions)
this._map.fitBounds(r.toBounds(i),o,{geolocateSource:!0})},i.prototype._updateMarker=function(e){if(e){var r=new t.LngLat(e.coords.longitude,e.coords.latitude)
this._accuracyCircleMarker.setLngLat(r).addTo(this._map),this._userLocationDotMarker.setLngLat(r).addTo(this._map),this._accuracy=e.coords.accuracy,this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius()}else this._userLocationDotMarker.remove(),this._accuracyCircleMarker.remove()},i.prototype._updateCircleRadius=function(){var t=this._map._container.clientHeight/2,e=this._map.unproject([0,t]),r=this._map.unproject([1,t]),i=e.distanceTo(r),n=Math.ceil(2*this._accuracy/i)
this._circleElement.style.width=n+"px",this._circleElement.style.height=n+"px"},i.prototype._onZoom=function(){this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius()},i.prototype._onError=function(e){if(this._map){if(this.options.trackUserLocation)if(1===e.code){this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.disabled=!0
var r=this._map._getUIString("GeolocateControl.LocationNotAvailable")
this._geolocateButton.title=r,this._geolocateButton.setAttribute("aria-label",r),void 0!==this._geolocationWatchID&&this._clearWatch()}else{if(3===e.code&&Fn)return
this._setErrorState()}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("mapboxgl-user-location-dot-stale"),this.fire(new t.Event("error",e)),this._finish()}},i.prototype._finish=function(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0},i.prototype._setupUI=function(e){var i=this
if(this._container.addEventListener("contextmenu",(function(t){return t.preventDefault()})),this._geolocateButton=r.create("button","mapboxgl-ctrl-geolocate",this._container),r.create("span","mapboxgl-ctrl-icon",this._geolocateButton).setAttribute("aria-hidden",!0),this._geolocateButton.type="button",!1===e){t.warnOnce("Geolocation support is not available so the GeolocateControl will be disabled.")
var n=this._map._getUIString("GeolocateControl.LocationNotAvailable")
this._geolocateButton.disabled=!0,this._geolocateButton.title=n,this._geolocateButton.setAttribute("aria-label",n)}else{var o=this._map._getUIString("GeolocateControl.FindMyLocation")
this._geolocateButton.title=o,this._geolocateButton.setAttribute("aria-label",o)}this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=r.create("div","mapboxgl-user-location-dot"),this._userLocationDotMarker=new Ln(this._dotElement),this._circleElement=r.create("div","mapboxgl-user-location-accuracy-circle"),this._accuracyCircleMarker=new Ln({element:this._circleElement,pitchAlignment:"map"}),this.options.trackUserLocation&&(this._watchState="OFF"),this._map.on("zoom",this._onZoom)),this._geolocateButton.addEventListener("click",this.trigger.bind(this)),this._setup=!0,this.options.trackUserLocation&&this._map.on("movestart",(function(e){e.geolocateSource||"ACTIVE_LOCK"!==i._watchState||e.originalEvent&&"resize"===e.originalEvent.type||(i._watchState="BACKGROUND",i._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background"),i._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),i.fire(new t.Event("trackuserlocationend")))}))},i.prototype.trigger=function(){if(!this._setup)return t.warnOnce("Geolocate control triggered before added to a map"),!1
if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire(new t.Event("trackuserlocationstart"))
break
case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":Bn--,Fn=!1,this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this.fire(new t.Event("trackuserlocationend"))
break
case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire(new t.Event("trackuserlocationstart"))}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"ACTIVE_LOCK":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"ACTIVE_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error")
break
case"BACKGROUND":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background")
break
case"BACKGROUND_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error")}if("OFF"===this._watchState&&void 0!==this._geolocationWatchID)this._clearWatch()
else if(void 0===this._geolocationWatchID){var e
this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),++Bn>1?(e={maximumAge:6e5,timeout:0},Fn=!0):(e=this.options.positionOptions,Fn=!1),this._geolocationWatchID=t.window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,e)}}else t.window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4)
return!0},i.prototype._clearWatch=function(){t.window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null)},i}(t.Evented),Un={maxWidth:100,unit:"metric"},Vn=function(e){this.options=t.extend({},Un,e),t.bindAll(["_onMove","setUnit"],this)}
function Nn(t,e,r){var i=r&&r.maxWidth||100,n=t._container.clientHeight/2,o=t.unproject([0,n]),a=t.unproject([i,n]),s=o.distanceTo(a)
if(r&&"imperial"===r.unit){var l=3.2808*s
l>5280?jn(e,i,l/5280,t._getUIString("ScaleControl.Miles")):jn(e,i,l,t._getUIString("ScaleControl.Feet"))}else r&&"nautical"===r.unit?jn(e,i,s/1852,t._getUIString("ScaleControl.NauticalMiles")):s>=1e3?jn(e,i,s/1e3,t._getUIString("ScaleControl.Kilometers")):jn(e,i,s,t._getUIString("ScaleControl.Meters"))}function jn(t,e,r,i){var n,o,a,s=(n=r,(o=Math.pow(10,(""+Math.floor(n)).length-1))*(a=(a=n/o)>=10?10:a>=5?5:a>=3?3:a>=2?2:a>=1?1:function(t){var e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10))
return Math.round(t*e)/e}(a)))
t.style.width=e*(s/r)+"px",t.innerHTML=s+"&nbsp;"+i}Vn.prototype.getDefaultPosition=function(){return"bottom-left"},Vn.prototype._onMove=function(){Nn(this._map,this._container,this.options)},Vn.prototype.onAdd=function(t){return this._map=t,this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container},Vn.prototype.onRemove=function(){r.remove(this._container),this._map.off("move",this._onMove),this._map=void 0},Vn.prototype.setUnit=function(t){this.options.unit=t,Nn(this._map,this._container,this.options)}
var qn=function(e){this._fullscreen=!1,e&&e.container&&(e.container instanceof t.window.HTMLElement?this._container=e.container:t.warnOnce("Full screen control 'container' must be a DOM element.")),t.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in t.window.document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in t.window.document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in t.window.document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in t.window.document&&(this._fullscreenchange="MSFullscreenChange")}
qn.prototype.onAdd=function(e){return this._map=e,this._container||(this._container=this._map.getContainer()),this._controlContainer=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-group"),this._checkFullscreenSupport()?this._setupUI():(this._controlContainer.style.display="none",t.warnOnce("This device does not support fullscreen mode.")),this._controlContainer},qn.prototype.onRemove=function(){r.remove(this._controlContainer),this._map=null,t.window.document.removeEventListener(this._fullscreenchange,this._changeIcon)},qn.prototype._checkFullscreenSupport=function(){return!!(t.window.document.fullscreenEnabled||t.window.document.mozFullScreenEnabled||t.window.document.msFullscreenEnabled||t.window.document.webkitFullscreenEnabled)},qn.prototype._setupUI=function(){var e=this._fullscreenButton=r.create("button","mapboxgl-ctrl-fullscreen",this._controlContainer)
r.create("span","mapboxgl-ctrl-icon",e).setAttribute("aria-hidden",!0),e.type="button",this._updateTitle(),this._fullscreenButton.addEventListener("click",this._onClickFullscreen),t.window.document.addEventListener(this._fullscreenchange,this._changeIcon)},qn.prototype._updateTitle=function(){var t=this._getTitle()
this._fullscreenButton.setAttribute("aria-label",t),this._fullscreenButton.title=t},qn.prototype._getTitle=function(){return this._map._getUIString(this._isFullscreen()?"FullscreenControl.Exit":"FullscreenControl.Enter")},qn.prototype._isFullscreen=function(){return this._fullscreen},qn.prototype._changeIcon=function(){(t.window.document.fullscreenElement||t.window.document.mozFullScreenElement||t.window.document.webkitFullscreenElement||t.window.document.msFullscreenElement)===this._container!==this._fullscreen&&(this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle("mapboxgl-ctrl-shrink"),this._fullscreenButton.classList.toggle("mapboxgl-ctrl-fullscreen"),this._updateTitle())},qn.prototype._onClickFullscreen=function(){this._isFullscreen()?t.window.document.exitFullscreen?t.window.document.exitFullscreen():t.window.document.mozCancelFullScreen?t.window.document.mozCancelFullScreen():t.window.document.msExitFullscreen?t.window.document.msExitFullscreen():t.window.document.webkitCancelFullScreen&&t.window.document.webkitCancelFullScreen():this._container.requestFullscreen?this._container.requestFullscreen():this._container.mozRequestFullScreen?this._container.mozRequestFullScreen():this._container.msRequestFullscreen?this._container.msRequestFullscreen():this._container.webkitRequestFullscreen&&this._container.webkitRequestFullscreen()}
var Zn={closeButton:!0,closeOnClick:!0,className:"",maxWidth:"240px"},Gn=function(e){function i(r){e.call(this),this.options=t.extend(Object.create(Zn),r),t.bindAll(["_update","_onClose","remove","_onMouseMove","_onMouseUp","_onDrag"],this)}return e&&(i.__proto__=e),(i.prototype=Object.create(e&&e.prototype)).constructor=i,i.prototype.addTo=function(e){return this._map&&this.remove(),this._map=e,this.options.closeOnClick&&this._map.on("click",this._onClose),this.options.closeOnMove&&this._map.on("move",this._onClose),this._map.on("remove",this.remove),this._update(),this._trackPointer?(this._map.on("mousemove",this._onMouseMove),this._map.on("mouseup",this._onMouseUp),this._container&&this._container.classList.add("mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.add("mapboxgl-track-pointer")):this._map.on("move",this._update),this.fire(new t.Event("open")),this},i.prototype.isOpen=function(){return!!this._map},i.prototype.remove=function(){return this._content&&r.remove(this._content),this._container&&(r.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("move",this._onClose),this._map.off("click",this._onClose),this._map.off("remove",this.remove),this._map.off("mousemove",this._onMouseMove),this._map.off("mouseup",this._onMouseUp),this._map.off("drag",this._onDrag),delete this._map),this.fire(new t.Event("close")),this},i.prototype.getLngLat=function(){return this._lngLat},i.prototype.setLngLat=function(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._trackPointer=!1,this._update(),this._map&&(this._map.on("move",this._update),this._map.off("mousemove",this._onMouseMove),this._container&&this._container.classList.remove("mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.remove("mapboxgl-track-pointer")),this},i.prototype.trackPointer=function(){return this._trackPointer=!0,this._pos=null,this._update(),this._map&&(this._map.off("move",this._update),this._map.on("mousemove",this._onMouseMove),this._map.on("drag",this._onDrag),this._container&&this._container.classList.add("mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.add("mapboxgl-track-pointer")),this},i.prototype.getElement=function(){return this._container},i.prototype.setText=function(e){return this.setDOMContent(t.window.document.createTextNode(e))},i.prototype.setHTML=function(e){var r,i=t.window.document.createDocumentFragment(),n=t.window.document.createElement("body")
for(n.innerHTML=e;r=n.firstChild;)i.appendChild(r)
return this.setDOMContent(i)},i.prototype.getMaxWidth=function(){return this._container&&this._container.style.maxWidth},i.prototype.setMaxWidth=function(t){return this.options.maxWidth=t,this._update(),this},i.prototype.setDOMContent=function(t){return this._createContent(),this._content.appendChild(t),this._update(),this},i.prototype.addClassName=function(t){this._container&&this._container.classList.add(t)},i.prototype.removeClassName=function(t){this._container&&this._container.classList.remove(t)},i.prototype.toggleClassName=function(t){if(this._container)return this._container.classList.toggle(t)},i.prototype._createContent=function(){this._content&&r.remove(this._content),this._content=r.create("div","mapboxgl-popup-content",this._container),this.options.closeButton&&(this._closeButton=r.create("button","mapboxgl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClose))},i.prototype._onMouseUp=function(t){this._update(t.point)},i.prototype._onMouseMove=function(t){this._update(t.point)},i.prototype._onDrag=function(t){this._update(t.point)},i.prototype._update=function(e){var i=this
if(this._map&&(this._lngLat||this._trackPointer)&&this._content&&(this._container||(this._container=r.create("div","mapboxgl-popup",this._map.getContainer()),this._tip=r.create("div","mapboxgl-popup-tip",this._container),this._container.appendChild(this._content),this.options.className&&this.options.className.split(" ").forEach((function(t){return i._container.classList.add(t)})),this._trackPointer&&this._container.classList.add("mapboxgl-popup-track-pointer")),this.options.maxWidth&&this._container.style.maxWidth!==this.options.maxWidth&&(this._container.style.maxWidth=this.options.maxWidth),this._map.transform.renderWorldCopies&&!this._trackPointer&&(this._lngLat=Cn(this._lngLat,this._pos,this._map.transform)),!this._trackPointer||e)){var n=this._pos=this._trackPointer&&e?e:this._map.project(this._lngLat),o=this.options.anchor,a=function e(r){if(r){if("number"==typeof r){var i=Math.round(Math.sqrt(.5*Math.pow(r,2)))
return{center:new t.Point(0,0),top:new t.Point(0,r),"top-left":new t.Point(i,i),"top-right":new t.Point(-i,i),bottom:new t.Point(0,-r),"bottom-left":new t.Point(i,-i),"bottom-right":new t.Point(-i,-i),left:new t.Point(r,0),right:new t.Point(-r,0)}}if(r instanceof t.Point||Array.isArray(r)){var n=t.Point.convert(r)
return{center:n,top:n,"top-left":n,"top-right":n,bottom:n,"bottom-left":n,"bottom-right":n,left:n,right:n}}return{center:t.Point.convert(r.center||[0,0]),top:t.Point.convert(r.top||[0,0]),"top-left":t.Point.convert(r["top-left"]||[0,0]),"top-right":t.Point.convert(r["top-right"]||[0,0]),bottom:t.Point.convert(r.bottom||[0,0]),"bottom-left":t.Point.convert(r["bottom-left"]||[0,0]),"bottom-right":t.Point.convert(r["bottom-right"]||[0,0]),left:t.Point.convert(r.left||[0,0]),right:t.Point.convert(r.right||[0,0])}}return e(new t.Point(0,0))}(this.options.offset)
if(!o){var s,l=this._container.offsetWidth,u=this._container.offsetHeight
s=n.y+a.bottom.y<u?["top"]:n.y>this._map.transform.height-u?["bottom"]:[],n.x<l/2?s.push("left"):n.x>this._map.transform.width-l/2&&s.push("right"),o=0===s.length?"bottom":s.join("-")}var c=n.add(a[o]).round()
r.setTransform(this._container,kn[o]+" translate("+c.x+"px,"+c.y+"px)"),Mn(this._container,o,"popup")}},i.prototype._onClose=function(){this.remove()},i}(t.Evented),Xn={version:t.version,supported:e,setRTLTextPlugin:t.setRTLTextPlugin,getRTLTextPluginStatus:t.getRTLTextPluginStatus,Map:In,NavigationControl:zn,GeolocateControl:On,AttributionControl:gn,ScaleControl:Vn,FullscreenControl:qn,Popup:Gn,Marker:Ln,Style:qe,LngLat:t.LngLat,LngLatBounds:t.LngLatBounds,Point:t.Point,MercatorCoordinate:t.MercatorCoordinate,Evented:t.Evented,config:t.config,prewarm:function(){Ot().acquire(Lt)},clearPrewarmedResources:function(){var t=Bt
t&&(t.isPreloaded()&&1===t.numActive()?(t.release(Lt),Bt=null):console.warn("Could not clear WebWorkers since there are active Map instances that still reference it. The pre-warmed WebWorker pool can only be cleared when all map instances have been removed with map.remove()"))},get accessToken(){return t.config.ACCESS_TOKEN},set accessToken(e){t.config.ACCESS_TOKEN=e},get baseApiUrl(){return t.config.API_URL},set baseApiUrl(e){t.config.API_URL=e},get workerCount(){return Rt.workerCount},set workerCount(t){Rt.workerCount=t},get maxParallelImageRequests(){return t.config.MAX_PARALLEL_IMAGE_REQUESTS},set maxParallelImageRequests(e){t.config.MAX_PARALLEL_IMAGE_REQUESTS=e},clearStorage:function(e){t.clearTileCache(e)},workerUrl:""}
return Xn})),r}()}}])
