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
<li>ilike (case insensitive)</li>
<li>lessThan</li>
<li>lessOrEqualThan</li>
<li>greaterThan</li>
<li>greaterOrEqualThan</li>
<li>matches (RegExp support)</li>
</ul>

You can combine the listed criteria with all the available commands except the command <b>insert</b>, wich can be substituted with the command <b>updateOrInsert</b>

You also can use a command without criteria, doing so, you will reach all the registries stored in the local storage. The commands that can be used without criteria are those with the "All" suffix.

<h3>Examples</h3>
<br>
First of all instantiate the database:
<br>
<code>var db = new easyStorage('dbname', true);</code>
<br>
<br>
When you create a new instance of a database you must specify the name it should have in your local storage. If the name already exists, then
the database will check the second parameter which means if you want to use the existing structure or you want it to be overrode. Specifying true means it must
be overrode, specifying false or ommiting the parrameter means it must not be overrode.
<br>
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
<li>Allow arrays at the pathfinder
  <ul>
  <li>Browser over the whole array like 'person.[hobbies].name (hobbies is an array)'</li>
  <li>Browser over specific node like 'person.[hobbies][0].name (hobbies is an array)'</li>
  </ul>
</li>
<li>Local Storage fallback (to cookies!)</li>
<li>Allow adding custom criteria functions</li>
</ul>
