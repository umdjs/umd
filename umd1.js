/**
 * First, better, "set exports/return" option
 */
(function (define) {
    //The 'id' is optional, but recommended if this is
    //a popular web library that is used mostly in
    //non-AMD/Node environments. However, if want
    //to make an anonymous module, remove the 'id'
    //below, and remove the id use in the define shim.
    define('id', function (require) {
        //If have dependencies, get them here
        var a = require('a');

        //Return the module definition.
        return value;
    });
}(typeof define === 'function' && define.amd ? define : function (id, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        //Node
        module.exports = factory(require);
    } else {
        //Create a global function. Only works if
        //the code does not have dependencies, or
        //dependencies fit the call pattern below.
        window[id] = factory(function(value) {
            return window[value];
        });
    }
}));
