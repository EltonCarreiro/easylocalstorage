# Easy Local Storage

# (Under Construction)

Lightweight library that allows you to manipulate your LocalStorage data using a fluent syntax.

Examples:
<br>
<i>"Get age from a person who is called John" </i>
<br>
<code>where('name').eq('John').get('age');</code>
<br>
<br>
<i>"Set age to 18 for a person with name equals to Jessy"</i>
<br>
<code>where('name').eq('Jessy').update({ "age" : 18 });</code>

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