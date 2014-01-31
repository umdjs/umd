// A compact definition that works in AMD, CommonJS or browser globals (window).
// Designed to be as light as possible, staying out the way of module content.

(function(define){define(function(require,exports,module){

var b = require('b');
exports.action = function () {};

});})((function(name, root){
return typeof define == 'function' && define.amd ? define
: typeof module == 'object' ? function(closure){ closure(require, exports, module); }
: function(closure){ var module = { exports: {} }, require = function(n){ return root[name]; };
  root[name] = closure(require, module.exports, module) || module.exports; };
})('my-module', this));
