# Database Addon

This addon comes with a bunch of databases built in it.

## Mongo, MySQL and SQLite

These databases are classified to be easier to use.

```js
import {Mongo, MySQL, SQLite} from "@hizzyjs/database";

const mongoDb = new Mongo("mongo url here", {
    // mongo options
}); // Returns a "mongodb" connection instance.

const mysqlDb = new MySQL({
    // mysql options
}); // Returns a "mysql" connection instance.

const sqliteDb = new SQLite("file name here", {
    // sqlite options
}); // Returns a "sqlite" connection instance.
```

## XML

Nothing to explain here, quick example:

```js
import {XML} from "@hizzyjs/database";

const read = XML.parse("<xml> <something a='1'></something> </xml>");
```

## JSON

A quick example:

```js
import {JSON} from "@hizzyjs/database";

const db = new JSON("./data.json");

db.set("name", "Jeff");
console.log("My name is " + db.get("name")); // My name is Jeff

if(db.has("name")) console.log("We have a name!");

db.push("myList", 1);
db.push("myList", 2);
db.push("myList", 3);
console.log(db.get("myList")); // [1, 2, 3]

db.add("points"); // Adds 1 by default
db.add("points", 1);
db.add("points", 2);
db.subtract("points", 2);
console.log(db.get("points")); // 2

db.destroy(); // will stop saving
```

Making nested:

```js
const nestedDb = db.asNested();
// OR just use this at the beginning
import {NestedJSON} from "@hizzyjs/database";
const db = new NestedJSON("./data.json");

// Now the character dot will make the key nested
nestedDb.set("a.b.c", 1);
console.log(nestedDb.get("a")); // { "b": { "c": 1 } }
```

::: danger Deprecated

Using JSON as a database is not recommended.

:::

## YAML

::: tip Note

For the sake of sanity, no extra examples were written for YAML "database"

:::

You can check the [JSON](#json) for more details.

::: danger Deprecated

Using YAML as a database is not recommended.

:::