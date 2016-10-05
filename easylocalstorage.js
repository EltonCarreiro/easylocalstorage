var easyStorage = function(storageName, overrideExisting) {    
    var localStorage = {};

    if (window !== undefined)
        localStorage = window.localStorage;

    if (localStorage[storageName] === undefined || overrideExisting)
        serialize([]);

    function serialize(data) {
        localStorage[storageName] = JSON.stringify(data);
    }

    function deserialize() {
        return JSON.parse(localStorage[storageName]);
    }

    // Helper functions (internal functions)
 
    // Returns the property with the given string path
    function getPropByPath(root, path) {
        var props = path.split('.');
        return (props.length == 1 ? root[props[0]] : getPropByPath(root[props[0]], props.slice(1).join('.')));
    }

    function bindFunc(ctx, func, arg) {
        try {
            ctx = ctx || this;
            return func.bind(ctx, arg);
        } catch (Error) {
            throw new Error('An error ocurred while trying to bind function.');
        }
    }

    function bindCommands(func, key) {
        return {
            get: get.bind(this, func, key),
            getAll: getAll.bind(this, func, key),
            update: update.bind(this, func, key, false),
            updateAll: updateAll.bind(this, func, key, false),
            updateOrInsert: update.bind(this, func, key, true),
            updateOrInsertAll: updateAll.bind(this, func, key, true),
            replace: replace.bind(this, func, key),
            replaceAll: replaceAll.bind(this, func, key),
            del: del.bind(this, func, key),
            delAll: delAll.bind(this, func, key)
        };
    }

    function insert(data) {
        var arr = deserialize();
        arr.push(data);
        serialize(arr);
    }

    function get(compareFunc, objKey, prop) {
        var results = getAll(compareFunc, objKey, prop);
        return ( results ? results[0] : results);
    }

    function getAll(compareFunc, objKey, prop) {
        var results = deserialize().slice().filter(function(root) {
            return compareFunc(getPropByPath(root, objKey));
        });

        return ( !prop ? results : results.map(function (root) { return root[prop]; }) ); 
    }

    function applyUpdate(item, changes, canInsert) {
        canInsert = canInsert || false;

        for(var key in changes) {
            if (!changes.hasOwnProperty(key))
                continue;

            if(item.hasOwnProperty(key) || canInsert)
                item[key] = changes[key];
        }

        return item;
    }

    function update(compareFunc, objKey, canInsert, prop) {
        var found = false;
        var arr = deserialize().slice().map(function(root) {
            if(!found && compareFunc(getPropByPath(root, objKey))) {
                root = applyUpdate(root, prop, canInsert);
                found = true;
            }

            return root;
        });

        serialize(arr);
        return true;
    }

    function updateAll(compareFunc, objKey, canInsert, prop) {
        var arr = deserialize().slice().map(function(root) {
            if(compareFunc(getPropByPath(root, objKey)))
                root = applyUpdate(root, prop, canInsert);
            
            return root;
        });

        serialize(arr);
        return true;
    }

    function replace(compareFunc, objKey, prop) {
        var found = false;
        var arr = deserialize().map(function(root) {
            if(!found && compareFunc(getPropByPath(root, objKey))) {
                root = prop;
                found = true;
            }

            return root;
        });

        serialize(arr);
        return found;
    }

    function replaceAll(compareFunc, objKey, prop) {
        var found = false;
        var arr = deserialize().map(function(root) {
            if(compareFunc(getPropByPath(root, objKey)))
             {
                found = true;
                root = prop;
             }
            
            return root;
        });

        serialize(arr);
        return found;
    }

    function del(compareFunc,objKey, prop) {
        var arr = deserialize();
        var found = false;
        if (!prop)
            arr = arr.filter(function(root) {
                    if (!found && compareFunc(getPropByPath(root, objKey))) {
                        found = true;
                        return false;
                    }              
                        return true;
            });
        else
            arr = arr.map(function(root) {
                if (!found && compareFunc(getPropByPath(root, objKey))) {
                    found = true;
                    delete root[prop];
                }
                
                return root;
            });
        serialize(arr);
        return found;
    }

    function delAll(compareFunc,objKey, prop) {
        var arr = deserialize();
        var found = false;
        if (!prop)
            arr = arr.filter(function(root) {
                    if (compareFunc(getPropByPath(root, objKey))) {
                        found = true;
                        return false;
                    }              
                        return true;
            });
        else
            arr = arr.map(function(root) {
                if (compareFunc(getPropByPath(root, objKey))) {
                    found = true;
                    delete root[prop];
                }

                return root;
            });
        serialize(arr);
        return found;
    }


    // Logic functions

    function eq(key, expectedValue) {  
        var eqFunc = function(expectedValue, value) { 
            return expectedValue === value;
        };
        
        return bindCommands(eqFunc.bind(this, expectedValue), key);
    }

    function like(key, expectedValue) {
        var likeFunc = function(expectedValue, value) { 
            return expectedValue.toString().indexOf(value.toString()) > -1;
        };
        
        return bindCommands(likeFunc.bind(this, expectedValue), key);
    }

    function lessThan(key, expectedValue) {
        var lessThanFunc = function(expectedValue, value) { 
            return expectedValue < value;
        };
        
        return bindCommands(lessThanFunc.bind(this, expectedValue), key);
    }

    function greaterThan(key, expectedValue) {
        var greaterThanFunc = function(expectedValue, value) { 
            return expectedValue > value;
        };
        
        return bindCommands(greaterThanFunc.bind(this, expectedValue), key);
    }

    function where (key) {
        return {
            eq: bindFunc(this, eq, key),
            like: bindFunc(this, like, key),
            lessThan: bindFunc(this, lessThan, key),
            greaterThan: bindFunc(this, greaterThan, key)
        };
    }

    return {
        insert: insert,
        where: where
    };
};