// This UMD allows extend an existing module or library in the browser,
// instead of overwriting it. It is useful for libraries that serves 
// as a shared namespace.

(function umd(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        // Node. CommonJs2 environments that support module.exports.
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        // AMD. Register as an anonymous module.
        define([], factory);
    else if(typeof exports === 'object')
        // CommonJs
        exports.myLib = factory();
    else {
        // Browser. Allow Module Augmentation (root is window)
        var ts = Object.prototype.toString,
            obj = '[object Object]',
            myLib = factory();
        if (ts.call(root.myLib) === obj && ts.call(myLib) === obj) {
          for (var p in myLib) root.myLib[p] = myLib[p];
          // not used Object.assign(a,b) for compatibility
        } else root.myLib = myLib;
    }
}(this, function() {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));
