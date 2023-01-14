(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>w});var a=t(81),o=t.n(a),i=t(645),r=t.n(i),c=t(667),s=t.n(c),d=new URL(t(890),t.b),l=new URL(t(61),t.b),u=new URL(t(197),t.b),p=new URL(t(468),t.b),m=new URL(t(713),t.b),h=new URL(t(792),t.b),f=r()(o()),g=s()(d),b=s()(l),v=s()(u),y=s()(p),x=s()(m),C=s()(h);f.push([n.id,"#content{\n    display:grid;\n    grid-template-rows: 10vh 90vh;\n    background-image: url("+g+");\n}\n\nbody, html {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n}\n\nh1 {\n    margin-top: 0;\n}\n\n.header{\n    display: grid;\n    grid-template-columns: 50vw 50vw;\n    border-bottom: 1px solid;\n    background-color: rgba(0, 0, 0, .5);\n    color: #fff;\n}\n\n#main_page {\n    display:flex;\n    height: 100%;\n    border: 1px solid;\n    /* justify-items: center; */\n    justify-content: center;\n    align-items:center;\n}\n\n/* Lessons Page Start */\n\n.center_box{\n    display:flex;\n    flex-wrap: wrap;\n    width: 75%;\n    height: 75%;\n    background-color: #fff;\n    top:25%;\n    /* test below */\n    animation: fadeInAnimation ease 2s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n@keyframes fadeInAnimation {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n\n\n.instrument-image{\n    height: 50%;\n    width: 50%;\n    \n}\n\n.instrument-image p{\n    opacity:0;\n    transform:scale(0);\n    transition:0.8s;\n    font-size: 2rem;\n    color:white;\n}\n\n.instrument-image:hover{\n    box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.634) inset;\n}\n\n.instrument-image:hover p{\n    opacity: 1;\n    transform: scale(1);\n\n\n}\n\n#guitar {\n    transition: 0.5s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url("+b+");\n    background-position: center;\n    background-size:cover;\n\n}\n\n#drums {\n    transition: 0.5s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url("+v+");\n    background-position: center;\n    background-size: cover;\n}\n\n#bass {\n    transition: 0.5s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url("+y+");\n    background-position: center;\n    background-size: cover;\n}\n\n#piano {\n    transition: 0.5s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url("+x+");\n    background-position: center;\n    background-size: cover;\n\n}\n\n/* Lessons Page End */\n\n/* Home Page Start */\n\n.home_page{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    height:100%;\n    width: 100%;\n}\n\n.picture_side{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: white; */\n    width: 100%;\n    height: 100%;\n}\n\n.picture_box{\n    width: 50%;\n    height: 50%;\n    background-color: black;\n    background-image: url("+C+");\n    background-position: center;\n    background-size: cover;\n    animation: fadeInAnimation ease 2s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.text_side {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: white; */\n    width: 100%;\n    height: 100%;\n}\n\n.text_box {\n    width: 80%;\n    height: 50%;\n    animation: fadeInAnimation ease 2s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    /* background-color: rgba(0, 0, 0, 0.661); */\n    margin-top: 20%;\n}\n\nh1 {\n    color: white;\n}\n\n/* Contact Page */\n\n.contact_page{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n} \n\n.contact_text_div{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    width: 50%;\n    height: 50%;\n    background-color: rgba(0, 0, 0, 0.677);\n    animation: fadeInAnimation ease 2s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.contact_textbox{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 75%;\n    height: 100%;\n    white-space: pre-wrap;\n}\n\n",""]);const w=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},r=[],c=0;c<n.length;c++){var s=n[c],d=a.base?s[0]+a.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,a);a.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}r.push(u)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=a(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var c=t(i[r]);e[c].references--}for(var s=a(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},468:(n,e,t)=>{n.exports=t.p+"e01cf70c11ded7797812.jpeg"},197:(n,e,t)=>{n.exports=t.p+"0dc13d89f7c1a497209b.jpeg"},61:(n,e,t)=>{n.exports=t.p+"ca7ac10d6dc5fb915627.jpeg"},792:(n,e,t)=>{n.exports=t.p+"39d4a5ff29acb546f099.jpeg"},890:(n,e,t)=>{n.exports=t.p+"c4103f917783a00b0a1f.jpg"},713:(n,e,t)=>{n.exports=t.p+"830ce020b5c00e222d8a.jpeg"}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),o=t.n(a),i=t(569),r=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=function(){document.getElementById("content");const n=document.getElementById("main_page");for(;n.firstChild;)n.removeChild(n.firstChild);const e=document.createElement("div");e.classList.add("center_box"),n.appendChild(e);const t=document.createElement("div"),a=document.createElement("p"),o=document.createTextNode("Guitar Lessons. Call 123-321-1234");a.appendChild(o),t.classList.add("instrument-image"),t.setAttribute("id","guitar"),e.appendChild(t),t.appendChild(a);const i=document.createElement("div"),r=document.createElement("p"),c=document.createTextNode("Drum Lessons. Call 555-555-5555");r.appendChild(c),i.classList.add("instrument-image"),i.setAttribute("id","drums"),e.appendChild(i),i.appendChild(r);const s=document.createElement("div"),d=document.createElement("p"),l=document.createTextNode("Bass Lessons. Call 121-212-1212");d.appendChild(l),s.classList.add("instrument-image"),s.setAttribute("id","bass"),e.appendChild(s),s.appendChild(d);const u=document.createElement("div"),p=document.createElement("p"),m=document.createTextNode("Piano Lessons. Call 212-121-2121");p.appendChild(m),u.classList.add("instrument-image"),u.setAttribute("id","piano"),e.appendChild(u),u.appendChild(p)},g=function(){console.log("home_page function works");const n=document.getElementById("main_page");for(;n.firstChild;)n.removeChild(n.firstChild);const e=document.createElement("div");e.classList.add("home_page"),n.appendChild(e);const t=document.createElement("div"),a=document.createElement("div");e.appendChild(t),t.appendChild(a),t.classList.add("picture_side"),a.classList.add("picture_box");const o=document.createElement("div"),i=document.createElement("div");e.appendChild(o),o.appendChild(i),o.classList.add("text_side"),i.classList.add("text_box");const r=document.createElement("h1"),c=document.createTextNode("Watermelon Music offers lessons to all age groups! Click on the lessons tab to find out more!");r.appendChild(c),i.appendChild(r)},b=function(){const n=document.getElementById("main_page");for(;n.firstChild;)n.removeChild(n.firstChild);const e=document.createElement("div");e.classList.add("contact_page"),n.appendChild(e);const t=document.createElement("div");t.classList.add("contact_text_div"),e.appendChild(t);const a=document.createElement("div");a.classList.add("contact_textbox"),t.appendChild(a);const o=document.createElement("h1"),i=document.createTextNode("Call the store at 545-545-5454! \nWe are located at 1212 Oak Street San Fransisco, CA.");o.appendChild(i),a.appendChild(o)};document.body.appendChild(function(){const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");t.classList.add("main_page"),t.setAttribute("id","main_page");const a=document.createElement("div");a.classList.add("right_side_header");const o=document.createElement("div");o.classList.add("left_side_header");const i=document.createElement("button");i.classList.add("header_button"),i.innerText="Home",i.setAttribute("id","home_button");const r=document.createElement("button");r.classList.add("header_button"),r.innerText="Lessons",r.setAttribute("id","lesson_button");const c=document.createElement("button");c.classList.add("header_button"),c.innerText="Contact Us",c.setAttribute("id","contact_button");const s=document.createElement("h1");var d=document.createTextNode("Watermelon Music");return s.appendChild(d),n.appendChild(e),n.appendChild(t),e.appendChild(o),e.appendChild(a),o.appendChild(s),a.appendChild(i),a.appendChild(r),a.appendChild(c),console.log(n),document.getElementById("lesson_button").onclick=f,document.getElementById("home_button").onclick=g,document.getElementById("contact_button").onclick=b,n}())})()})();