##UMD (Universal Module Definition)

The purpose of this repository is to centralize the information and work currently being done
by a group in the community on UMD patterns. UMDs typically attempt to define modules which 
can work anywhere, be in in the client, on the server or anywhere else. This pattern typically 
attempts to offer compatibility with the most popular script loaders of the day (e.g RequireJS 
amongst others), and in many cases uses AMD as a base, with special-casing added to handle 
CJS compatability.

To date, a number of UMD variations have been proposed, ranging from Kit-Cambridge's UMD at
[https://gist.github.com/1251221], through to patterns discussed by Addy Osmani, Thomas Davis and Ryan Florence
and here [https://github.com/addyosmani/jquery-plugin-patterns/issues/1] and most recently
the UMD patterns proposed by JR Burke here [https://gist.github.com/1262861]. The latter of these
patterns will likely form the basis of the UMD we recommend actually using in production and 
more details about any proposed patterns will be documented as they're finalized.

###Todos
<ul>
<li>Variations</li>
<ul>
<li>Varition with return/module.exports.</li>
<li>Variation for people who have circular dependencies/want more commonjs compatibility.</li>
<li>Variation noConflict. Although with AMD loaders and build tools, it should be possible to get version specific bindings.</li>
<li>Variation with attaching some functionality to a $ impersonator. Although, it is tempting to say for that case, ask for 'jquery' as a dependency, and if the developer wants to use something different than the actual 'jquery', map that file to the 'jquery' name. That is one of the strengths of module names, they can be mapped to different implementations.</li>
</ul>
<li>Usage examples</li>
<li>Further justifications for usage</li>
<li>Gotchas/custom-tweaks we're aware of, but would rather not apply to the default UMD boilerplate</li>
</ul>