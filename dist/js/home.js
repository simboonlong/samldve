!function(e){var n={};function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=4)}([function(e,n){!function(e,n,o){function t(e,n){return typeof e===n}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||((e=a(u?"svg":"body")).fake=!0),e}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];l._prefixes=d;var m=l.testStyles=function(e,o,t,s){var r,l,c,u,d="modernizr",m=a("div"),p=i();if(parseInt(t,10))for(;t--;)(c=a("div")).id=s?s[t]:d+(t+1),m.appendChild(c);return(r=a("style")).type="text/css",r.id="s"+d,(p.fake?p:m).appendChild(r),p.appendChild(m),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),m.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(p)),l=o(m,e),p.fake?(p.parentNode.removeChild(p),f.style.overflow=u,f.offsetHeight):m.parentNode.removeChild(m),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],(n=r[f]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(a=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)1===(l=e[i].split(".")).length?c[l[0]]=a:(!c[l[0]]||c[l[0]]instanceof Boolean||(c[l[0]]=new Boolean(c[l[0]])),c[l[0]][l[1]]=a),s.push((a?"":"no-")+l.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);!function(e){for(var n=-1,o=function(){requestAnimationFrame(o),function(){if(n===window.pageYOffset)return!1;n=window.pageYOffset,e()}()},t=0,a=["ms","moz","webkit","o"],i=0;i<a.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[a[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[i]+"CancelAnimationFrame"]||window[a[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-t)),i=window.setTimeout(function(){e(o+a)},a);return t=o+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),o()}(function(){$(window).scrollTop()<60?$("body").hasClass("is-topnavbar-active")&&$("body").removeClass("is-topnavbar-active"):$("body").hasClass("is-topnavbar-active")||$("body").addClass("is-topnavbar-active")}),$(".hamburger").on("click",function(){$("body").hasClass("is-overlay-menu")?$("body").removeClass("is-overlay-menu"):$("body").addClass("is-overlay-menu")})},,,,function(e,n,o){o(0)}]);