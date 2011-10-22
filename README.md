##UMD (Universal Module Definition)

The purpose of this repository is to centralize the information and work currently being done
by a group in the community on UMD patterns. UMDs typically attempt to define modules which 
can work anywhere, be in in the client, on the server or anywhere else. This pattern typically 
attempts to offer compatibility with the most popular script loaders of the day (e.g requireJS 
amongst others), and in many cases uses AMD as a base, with special-casing added to handle 
CJS compatability.

To date, a number of UMD variations have been proposed, ranging from Kit-Cambridge's UMD at
[https://gist.github.com/1251221], through to patterns discussed by Thomas Davis, Ryan Florence
and I here [https://github.com/addyosmani/jquery-plugin-patterns/issues/1] and most recently
the UMD patterns proposed by JR Burke here [https://gist.github.com/1262861]. The latter of these
patterns will likely form the basis of the UMD we recommend actually using in production and 
more details about any proposed patterns will be documented as they're finalized.

###Todos
<ul>
<li>Usage examples</li>
<li>Wiki (or code samples) with variations better suited to say, jQuery/Framework modules</li>
<li>Further justifications for usage</li>
<li>Gotchas/custom-tweaks we're aware of, but would rather not apply to the default UMD boilerplate</li>
</ul>