!function(){var t={229:function(t,e,n){var r=n(81),o=n(645),a=n(667),c=n(766),i=o(r),s=a(c);i.push([t.id,".bgBox {\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 1px solid #000;\r\n    background-image: url("+s+");\r\n}",""]),t.exports=i},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<t.length;u++){var A=[].concat(t[u]);r&&c[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),n&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=n):A[2]=n),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),e.push(A))}},e}},667:function(t){"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:function(t){"use strict";t.exports=function(t){return t[1]}},379:function(t){"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},c=[],i=0;i<t.length;i++){var s=t[i],u=r.base?s[0]+r.base:s[0],A=a[u]||0,l="".concat(u," ").concat(A);a[u]=A+1;var d=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var p=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:p,references:1})}c.push(l)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var i=n(a[c]);e[i].references--}for(var s=r(t,o),u=0;u<a.length;u++){var A=n(a[u]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}a=s}}},569:function(t){"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},766:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAB20lEQVRoge3a73WCMBSH4XcERmAER3CDukEzghvUDdoNmg3qBu0GukHZoGxAPwA9SrnhT5Kb6PF3Tr7o4XIfIQI5QJyUwCfQKI0T8AoUkTyUipjL8RYLBGASgE4xQalQ0aONUolRwqiBQA+lGhOo6WxAEB+VJHZmc8FABfAMfADfK4rWwEaobSJiRkEvwI9HwZSYK1ABvHsWS425At0D5g90uBNMA+2pdstz5h/ItdMzsGPdc0YKTANwdGDWJhWmAfk6s7tBTIPrixvEBAXlgAkG2mYACQo6KTT6pQUqFDC225fRAG2VMH2mUN6gUhEzB+UNAqgUMVOoIKC9MsaFCgKCcI/VczESKhgI/FESZurm2HTbn3EUXxs7o/GlmDlr1iXdY0xoECxHWaFOj1nUTwwQzEdZYftLTBYgmEZZYbshJhsQtBO2GtSuus/HMobJCtRnQ3ubJK0/9JFudGdHC6TWzwMUOQ9Q8AKB8wAFLxAwrsf52amEAmsXGn2yE3qplhSRloKjv5UxEumielxSxAhFetQTEV8K6mo/4V4KM0sL1o5iqUfNih/0kEHj0tgvxfSxGTQ/HHYtBtrDmhPKEmju7kk7p2o8TjMpBe0/y5E4i4jDUXX7MngelV86+65qUaf1tAAAAABJRU5ErkJggg=="}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),s=n.n(i),u=n(216),A=n.n(u),l=n(589),d=n.n(l),f=n(229),p=n.n(f),g={};function h(){const t=document.createElement("div"),e=document.createElement("img");e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAYZJREFUWIXt179LVlEcx/HXc00SaVAHg8BBc0vBEEIcVKrNza1JpKWtaHHrL/A/cPQPqClwUgJ/YIHSljQkoi75A4lnKH80HE/J9cf10ee5d6gPfOAMl/v+nHPP+X7P5V9XqYJnmzCAHnTiLhpwjH1s4AuW8BG/qhHwNsYwg8MT2FW8hykMXhdchxfYqgB6kRcrDdKO+SqA055EYxa8H99rAI9ewb2L4L3CZqoVPHoVrWl4C9ZzgEd/EPbZH03mCI9+HeHtOCggwC7uJBhNL0dOasKzBE8LgEcNl7CD5oICrJVwpLKeUE2VE5QLgsNBIhSGorSWYLbAAAvwUP41IPpxTPK+APin00vRiR85wg/Rl/4er3IMMJ6GEy4L5RzgE+fBoxZrCP6Jl5fBYbpG8CXhtGVqocrgOYy4pNSXUuNtZxvTtnBhWcUTPEKH81v4JpaF4vYOX7Pn/FfdqfSf8Vz4+UirHm3owoOTQJk33iy9Ec7nWwzd9GVX1a1T4x3cx7e84P8FvwFIbLDShLJWDgAAAABJRU5ErkJggg==";const n=document.createElement("div");return n.className="bgBox",t.appendChild(n),t.appendChild(e),t}g.styleTagTransform=d(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=A(),e()(p(),g),p()&&p().locals&&p().locals,document.body.appendChild(h()),document.body.appendChild(h())}()}();