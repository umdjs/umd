// Defines a module that works in Node and AMD.

// This version can be used as common boilerplate for a library module
// that you only want to expose to Node and AMD loaders. It will not work
// well for defining browser globals.

// If you need a version of this file that works CommonJS-like environments
// that do not support module.exports or if you want to define a module
// with a circular dependency, see commonjsAdapter.js

(function(define) {

    define(function (require, exports, module) {
        var b = require('b');

        return function () {};
    });

}( // Help Node out by setting up define.
    typeof module === 'object' && module.exports && typeof define !== 'function' ?
    function (factory) { module.exports = factory(require, exports, module); } :
    define
));

