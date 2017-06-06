
/**
 * @library wrapper.js
 * @author Edward Hotchkiss <edward@candidblend.la>
 * @contributor Avi Deitcher <avi@deitcher.net>
 * @description wraps any function/module/object/lib within an
 * AMD-compliant definition if possible, otherwise binding to `window`
 * @license MIT
 */

(function(root) {

  'use strict';

  /**
   * @private _formatDepName
   * @description format dependency name to be lowecase excluding first char
   * @param {String} dep dependency string
   * @return {String} formated dep
   */

  function _formatDepName(dep) {
    return dep.charAt(0).toUpperCase() + dep.slice(1);
  }

  /**
   * @method wrapper
   * @description creates an AMD compliant or window aliased obj/fn module setup
   * depending on environment
   * @param {String} name alias of module, lowercase
   * @param {Array} deps list of strings that are dependencies
   * @param {Function} fn return Function to build module
   * @return {Function} module
   */

  root.wrapper = function(name, deps, fn) {

    // window or empty obj depending on require being defined
    var _root = (typeof(require) !== 'undefined') ?
      {} : root;

    // requirejs define or alternate
    var _define = (typeof(define) === 'function' && define.amd) ?
      define : function(name, deps, fn) {
        deps = deps.map(function(dep, index) {
          return (dep === 'jquery') ?
            root[$] : root[_formatDepName(dep)];
        });
        root[_formatDepName(name)] = fn.apply(null, deps);
      };

    // execution and assignment block
    return (function(define) {
      // config complete, define() module
      define(name, deps, fn);
    }(_define));
  
  };

}(window));
