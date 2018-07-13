/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-canvas-canvasblending-canvastext-canvaswinding-todataurljpeg_todataurlpng_todataurlwebp-touchevents-video-setclasses-shiv !*/
!function(e,t,n){function a(e,t){return typeof e===t}function o(){var e,t,n,o,r,c,i;for(var s in d)if(d.hasOwnProperty(s)){if(e=[],t=d[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=a(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)c=e[r],i=c.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),l.push((o?"":"no-")+i.join("-"))}}function r(e){var t=p.className,n=Modernizr._config.classPrefix||"";if(f&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),f?p.className.baseVal=t:p.className=t)}function c(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):f?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=c(f?"svg":"body"),e.fake=!0),e}function s(e,n,a,o){var r,s,l,d,u="modernizr",f=c("div"),m=i();if(parseInt(a,10))for(;a--;)l=c("div"),l.id=o?o[a]:u+(a+1),f.appendChild(l);return r=c("style"),r.type="text/css",r.id="s"+u,(m.fake?m:f).appendChild(r),m.appendChild(f),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),f.id=u,m.fake&&(m.style.background="",m.style.overflow="hidden",d=p.style.overflow,p.style.overflow="hidden",p.appendChild(m)),s=n(f,e),m.fake?(m.parentNode.removeChild(m),p.style.overflow=d,p.offsetHeight):f.parentNode.removeChild(f),!!s}var l=[],d=[],u={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){d.push({name:e,fn:t,options:n})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var p=t.documentElement,f="svg"===p.nodeName.toLowerCase();f||!function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=T.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=T.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),T.elements=n+" "+e,l(t)}function r(e){var t=y[e[g]];return t||(t={},h++,e[g]=h,y[h]=t),t}function c(e,n,a){if(n||(n=t),u)return n.createElement(e);a||(a=r(n));var o;return o=a.cache[e]?a.cache[e].cloneNode():v.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:a.frag.appendChild(o)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),c=0,i=a(),s=i.length;s>c;c++)o.createElement(i[c]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return T.shivMethods?c(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(T,t.frag)}function l(e){e||(e=t);var a=r(e);return!T.shivCSS||d||a.hasCSS||(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,a),e}var d,u,p="3.7.3",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,v=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",h=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,u=!0}}();var T={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:p,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:c,createDocumentFragment:i,addElements:o};e.html5=T,l(t),"object"==typeof module&&module.exports&&(module.exports=T)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("audio",function(){var e=c("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=c("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof c("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=c("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t});var m=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=m;var v=u.testStyles=s;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var a=["@media (",m.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");v(a,function(e){n=9===e.offsetTop})}return n}),Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var e=c("canvas").getContext("2d");try{e.globalCompositeOperation="screen"}catch(t){}return"screen"===e.globalCompositeOperation});var g=c("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===g.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===g.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===g.toDataURL("image/webp").indexOf("data:image/webp")}catch(t){}return e}),Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var e=c("canvas").getContext("2d");return e.rect(0,0,10,10),e.rect(2,2,6,6),e.isPointInPath(5,5,"evenodd")===!1}),o(),r(l),delete u.addTest,delete u.addAsyncTest;for(var h=0;h<Modernizr._q.length;h++)Modernizr._q[h]();e.Modernizr=Modernizr}(window,document);