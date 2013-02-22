// Uses Node, AMD or browser globals to create a module.

// If you want something that will work in other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrict.js

// Defines a module that depends on three other modules called "a", "b", and "c".
// The name of the module is defined as "ModuleName" when used in browser globals.
// Note that it is best if the file name and the exported global have matching names.

// If the 'a', 'b' and 'c' modules also uses this type of boilerplate, then
// in the browser, they will create global .a, .b and .c that are used below.

// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing `this` as the first arg to
// the top function.

(function (name, deps, root, definition, i) {
    if (typeof define == 'function' && define.amd){
        // AMD. Register as an anonymous module
        define(deps,definition);
        //you can also use:
        //define(name,deps,definition)
    }
    else if (typeof exports === 'object'){
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        for(i=0; i<deps.length;i++){deps[i] = require[deps[i]] || null;}
        module.exports = definition.apply(root,deps);
    }
    else{
        // Browser globals (module tries to attach itself to different common environments before defaulting to window)
        for(i=0; i<deps.length;i++){deps[i] = root[deps[i]];}
        (root.jQuery || root.ender || root.$ || root)[name] = definition.apply(context,deps);
    }
})('ModuleName', ['a','b','c'], this, function(a,b,c){
    //use a,b, and c in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));


// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));
