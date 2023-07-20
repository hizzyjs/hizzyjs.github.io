# Using Addons

Hizzy can be extended using addons which adds new functionalities to Hizzy!

## Adding an Addon

To use an addon, it needs to be added to the `devDependencies`(or `dependencies`) of the project's `package.json` and
the name should be included in the `addons` array in the config file.

For example if you wanted to use the `@hizzyjs/authentication` addon, you would first run this to put it into
the `package.json` file:

```bash
npm install -D @hizzyjs/authentication
```

Then you would add the `@hizzyjs/authentication` to the `addons` array in the config file:

```json
{
  ...
  "addons": [
    "@hizzyjs/authentication"
  ],
  ...
}
```

## Using an addon

Addons can have both a server-sided and client-sided API.

You can import the addon like this from server-side:

```js
import MyAddon from "addon-name-here";
```

You can import the addon like this from client-side:
```js
import MyAddon from "addon-name-here";
```
OR like this:
```js
import {useAddon} from "hizzy";

const MyAddon = useAddon("addon-name-here");
```

## Official Addons

Check out the [Official Addons](../addons/).

## Community Addons

You can submit a PR to list your addons here.

## Creating Addons

Check out the [Addons API Guide](./api-addon.md) for documentation about creating addons.