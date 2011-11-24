// Uses CommonJS, AMD or browser globals to create a jQuery plugin.

// Similar to jqueryPlugin.js but also tries to
// work in a CommonJS environment.
// It is unlikely jQuery will run in a CommonJS
// environment. See jqueryPlugin.js if you do
// not want to add the extra CommonJS detection.

(function (factory) {
    if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.jqueryPluginCommonJs = function () {};
}));