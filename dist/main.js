!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=0)}([function(t,e,o){o(2),t.exports=o(1)},function(t,e,o){},function(t,e,o){"use strict";var n;o.r(e),function(t){t.listenAll=function(t,e,o,n){const i=document.querySelectorAll(t);for(const t of i)t.addEventListener(e,o,!1)}}(n||(n={}));class i{constructor(t){this.name=t,n.listenAll(this.buttonSelector,"click",this.onButtonClicked.bind(this))}get buttonSelector(){return`.js-button__${this.name}`}get selector(){return`#${this.name}`}activate(){document.location.hash=this.name}deactivate(){document.location.hash=""}onButtonClicked(t){document.body.classList.contains(`is-section--${this.name}`)?this.deactivate():this.activate()}}const c=/^is-section\S*/;new class{constructor(){this.activeView="",this.views=[];for(const t of document.querySelectorAll(".section[data-view]")){const e=t.dataset.view;void 0!==e&&new i(e)}n.listenAll(".js-button__back","click",this.onBackButtonClicked.bind(this)),window.addEventListener("hashchange",this.onHashChanged.bind(this),!1),this.switchView(document.location.hash&&document.location.hash.substring(1),!0)}switchView(t,e=!1){void 0!==this._sectionCompleteTimer&&(clearTimeout(this._sectionCompleteTimer),this._sectionCompleteTimer=void 0);const o=document.body.classList;switch(t){case"":if(this.activeView="",e)o.add("complete");else{const t=[];for(const e of o)("complete"===e||e.match(c))&&t.push(e);o.remove(...t),document.location.hash=""}break;default:this.activeView=t;const n=`is-section--${t}`;if(o.contains(n)){o.remove("is-section","complete",n),document.location.hash="";break}if(o.contains("is-section")){const t=[];for(const e of o)e.match(c)&&t.push(e);o.remove(...t)}else!e&&o.contains("complete")&&o.remove("complete");e?o.add("is-section",n,"complete"):o.add("is-section",n),document.location.hash=t,e||(this._sectionCompleteTimer=setTimeout(()=>o.add("complete"),1e3))}e&&setTimeout(()=>document.body.classList.remove("preload"),1)}onBackButtonClicked(t){document.location.hash=""}onHashChanged(t){this.switchView(document.location.hash&&document.location.hash.substring(1))}}}]);
//# sourceMappingURL=main.js.map