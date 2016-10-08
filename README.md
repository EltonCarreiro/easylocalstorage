<h1>Easy Local Storage (Under Construction)</h1>

<h3>About</h3>

Lightweight library that allows you to manipulate your LocalStorage data using a fluent syntax.

<h3>Supported Commands</h3>

There are commands we can perform over the local storage. See below the supported commands:

<ul>
<li>insert</li>
<li>get</li>
<li>getAll</li>
<li>update</li>
<li>updateAll</li>
<li>updateOrInsert</li>
<li>updateOrInsertAll</li>
<li>replace</li>
<li>replaceAll</li>
<li>del</li>
<li>delAll</li>
</ul>

The commands listed above are used combined with a criteria, which will tell when to act or ignore the registry. The list of supported criterias are lsited below:

<ul>
<li>eq (equals)</li>
<li>like (case sensitive)</li>
<li>lessThan</li>
<li>greaterThan</li>
</ul>

You can combine the listed criteria with all the available commands except the command <b>insert</b>, wich can be substituted with the command <b>updateOrInsert</b>

You also can use a command without criteria, doing so, you will reach all the registries stored in the local storage. The commands that can be used without criteria are those with the "All" suffix.

<h3>Examples</h3>
<br>
<i>"Get age from a person who is called John" </i>
<br>
<code>where('name').eq('John').get('age');</code>
<br>
<br>
<i>"Set age to 18 for a person with name equals to Jessy"</i>
<br>
<code>where('name').eq('Jessy').update({ "age" : 18 });</code>
<br>

By default each command just manipulate the first found registry. If you want to manipulate all found registries then you can use the 'All version'. Example:
<br>
<br>
<i>'Single version':</i>
<br>
<code>where('name').eq('John').get('age');</code>
<br>
<br>
<i>'All version':</i>
<br>
<code>where('name').eq('John').get<b>All</b>('age');</code>
<br>
<br>
<b>Note:</b> All commands has its <i>'All version'</i>. To use it just add <b>All</b> at the end of the command name, then you will be able to reach all registries.

<h3>Future Implementations</h3>

We are at just the beggining of the library and we have lots of work to do! Take a look at our agenda:

<ul>
<li>Finish up our test suite (20% done)</li>
<li>
  Create new criterias:
  <ul>
  <li>ilike (case insensitive like)</li>
  <li>lessOrEqualThan</li>
  <li>greaterOrEqualThan</li>
  <li>lessOrEqualThan</li>
  <li>matches (allow regexp)</li>
  </ul>
</li>
</ul>
