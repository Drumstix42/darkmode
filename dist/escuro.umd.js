!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.escuro={})}(this,function(e){var t=[];function n(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}e.isDark=n,e.isDarkLocal=function(){var e,t=(e=localStorage.getItem("escuro-dark"))?"true"===e:null;return null===t?n():t},e.setDark=function(e){localStorage.setItem("escuro-dark",e.toString()),t.forEach(function(t){return t(e)})},e.onUpdate=function(e){t.push(e),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){return e(n())})}});
//# sourceMappingURL=escuro.umd.js.map
