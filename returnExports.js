// Uses Node, AMD or browser globals to create a module.

// If you want something that will work in other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrict.js

// Defines a module "returnExports" that depends another module called "b".
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.

// If the 'b' module also uses this type of boilerplate, then
// in the browser, it will create a global .b that is used below.

(function (root, factory) {
    if (typeof root.module === 'object' && root.module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        root.module.exports = factory(require('b'));
    } else if (typeof root.define === 'function' && root.define.amd) {
        // AMD. Register as an anonymous module.
        root.define(['b'], factory);
    } else {
        // Browser globals
        root.returnExports = factory(root.b);
    }
}(this, function (b) {
    //use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));
