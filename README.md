# Easy Local Storage

# (Under Construction)

Lightweight library that allows you to manipulate your LocalStorage data using a fluent syntax.

Examples:

"Get age from a person who is called John"
where('name').eq('John').get('age');

"Set age to 18 for people with name equals to Jessy"
where('name').eq('Jessy').updateProp({ "age" : 18 });

By default each command just manipulate the first found registry. If you want to manipulate all found registries then you can use the 'All version'. Example:

'Single version':
where('name').eq('John').get('age');
'All version':
where('name').eq('John').getAll('age');

All commands has its 'All version'.
