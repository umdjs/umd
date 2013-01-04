##UMD (Universal Module Definition)

The purpose of this repository is to formalize the work on UMDs - universal modules which can work anywhere, 
be it in the client, on the server or anywhere else. This pattern typically attempts to offer compatibility with the most popular script loaders of the day (e.g RequireJS
amongst others), and in many cases uses AMD as a base, with special-casing added to handle
CommonJS compatability.

To date, a number of UMD variations have been proposed, ranging from Kit-Cambridge's
[UMD](https://gist.github.com/1251221), through to [patterns](https://github.com/addyosmani/jquery-plugin-patterns/issues/1) discussed by Addy Osmani, Thomas Davis and Ryan Florence and most recently
the UMD patterns proposed by [James Burke](https://gist.github.com/1262861).


###Variations

####Regular Module

* [amdWeb.js](https://github.com/umdjs/umd/blob/master/amdWeb.js) -
  Defines a module that works with AMD and browser globals. If you also want
  to export a global even when AMD is in play (useful if you are loading other
  scripts that still expect that global), use
  [amdWebGlobal.js](https://github.com/umdjs/umd/blob/master/amdWebGlobal.js).
* [returnExports.js](https://github.com/umdjs/umd/blob/master/returnExports.js) -
  Defines a module that works in Node, AMD and browser globals. If you also want
  to export a global even when AMD is in play (useful if you are loading other
  scripts that still expect that global), use
  [returnExportsGlobal.js](https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js).
* [commonjsStrict.js](https://github.com/umdjs/umd/blob/master/commonjsStrict.js) -
  Defines a module that works with more CommonJS runtimes, and for modules that
  will have a circular dependency. If you also want
  to export a global even when AMD is in play (useful if you are loading other
  scripts that still expect that global), use
  [commonjsStrictGlobal.js](https://github.com/umdjs/umd/blob/master/commonjsStrictGlobal.js)

####jQuery Plugin

* [jqueryPlugin.js](https://github.com/umdjs/umd/blob/master/jqueryPlugin.js) -
  Defines a jQuery plugin that works with AMD and browser globals.
* [jqueryPluginCommonjs.js](https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js) -
  Defines a jQuery plugin that works with AMD and browser globals, but also in
  a CommonJS environment. However, jQuery is unlikely to run in most CommonJS
  environments, so only use this version if you know you are targeting a CommonJS
  environment that can load jQuery appropriately.

####AMD with simple Node/CommonJS adapter

These are useful for using AMD style while still making modules that can be
used in Node and installed via npm without extra dependencies to set up the
full AMD API.

This approach does not allow the use of [AMD loader plugins](https://github.com/amdjs/amdjs-api/wiki/Loader-Plugins),
just basic JS module dependencies. It also does not support the
[callback-style require](https://github.com/amdjs/amdjs-api/wiki/require) that
is usable in AMD.

* [nodeAdapter.js](https://github.com/umdjs/umd/blob/master/nodeAdapter.js) -
  Best for when using AMD style but want it to work in Node without a helper library
  that sets up AMD.
* [commonjsAdapter.js](https://github.com/umdjs/umd/blob/master/commonjsAdapter.js) -
  Similar to nodeAdapter.js, but compatible with more CommonJS runtimes, and if
  you want to define a circular dependency.


###Todos

* noConflict. Although with AMD loaders and build tools, it should be possible to get version specific bindings,
  maybe show a version that has a noConflict option.
* Variation with attaching some functionality to a $ impersonator. Although, it is
tempting to say for that case, ask for 'jquery' as a dependency, and if the developer
wants to use something different than the actual 'jquery', map that file to the 'jquery' name.
That is one of the strengths of module names, they can be mapped to different implementations.
* Usage examples
    * Further justifications for usage
    * Gotchas/custom-tweaks we're aware of, but would rather not apply to the default UMD boilerplate

###Influences

The basic pattern for these UMD variations was derived from the approach [@kriskowal](https://github.com/kriskowal) used for the [Q promise library](https://github.com/kriskowal/q).
