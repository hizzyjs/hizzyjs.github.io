# JavaScript API

Hizzy will define a variable named `Hizzy` globally. The only file that can't fully access `Hizzy` is the config file
because `Hizzy` depends on the config, but it is still defined and has a single function in it, `defineConfig`.
Check [Configuration](./config).

## Getting the server instances

You can get the server instances:

- `Hizzy.socketServer` is a `"ws"` server instance
- `Hizzy.server` is a `"http"` or `"https"` instance depending on the `https` boolean option in the config
- `Hizzy.app` is an `"express"` instance

## Hizzy.customShortcuts

This allows you to add custom shortcuts or overwrite the existing ones!

Example:

```js
Hizzy.customShortcuts.l = {
    description: "log hello, world!", // it will look like this: press l to {DESCRIPTION}
    enabled: true, // disabling this will make it lose its functionality.
    cooldown: 1000, // OPTIONAL, sets a cooldown per use, if a negative number is given it disables
    run: () => {
        console.log("Hello, world!");
    }
};
```

## Hizzy.preRequests

This is an array of functions that will be run before every request.

Example:

```js
Hizzy.preRequests.push((req, res, next) => {
    console.log("Someone sent a request!");
    next(); // IF YOU DO NOT ADD THIS IT WILL NOT CONTINUE THE REQUEST AND WON'T TRIGGER ANY ROUTES
});
```

## Hizzy.preRawSend

This is an array of functions that will be run before sending a content to the client.

```js
Hizzy.preRawSend.push((file, content, req, res) => {
    console.log(file + " has been sent to a client!");
    // // If you end the response with res.end or res.send etc., it will not send the content of the file.
});
```

## Hizzy.buildHandlers

This is an object that stores the build instructions of an extension.

Its type is

```ts
Record<string, ((file: string, content: string, setContent: (content: string) => void, zip: any, extension: string, location: string[]) => any)[]>
```

Example:

```js
Hizzy.buildHandlers.lua = [];

Hizzy.buildHandlers.lua.push((file, get, set, zip, ext, pt) => {
    get = "print('This file is bundled!')\n" + get; // add something to the beginning of the file

    set(get); // source/PATH HERE/file's content will be set to `get` in the zip.

    zip.file("lua/" + pt.map(i => i + "/").join("") + file, get); // lua/PATH HERE/file's content will be set to `get` in the zip.
});
```

## Hizzy.scanHandlers

This is an object that stores the build instructions of an extension.

Its type is

```ts
Record<string, Record<string, ((location: string, data: string, files: Record<string, string>) => any)[]>>
```

Example:

```js
Hizzy.scanHandlers.lua = { // The name of the folder is "lua"
    lua: [(file, data, files) => {
        console.log("Loaded the " + file + " with " + data.length + " bytes!");
    }],
    __default__: [(file, data, files) => {
        console.log("An unknown file has been loaded with the name " + file + " in the lua folder!");
    }]
};
```

## Hizzy.functionDecorators

This is an object that stores the build instructions of an extension.

Its type is

```ts
Record<string, ((data: {
    start: number,
    end: number,
    name: string,
    leadingComments: { value: string }[],
    code: string,
    json: Object,
    replaceText: (position: { start: number, end: number }, text: string) => void
}) => any)[]>
```

Example:

```js
Hizzy.functionDecorators["@myDecorator"] = ({name, start, end, replaceText}) => {
    replaceText(
        {start, end},
        `const ${name} = () => console.log("This function has been replaced!");`
    );
    // Now the client won't know what's inside it!
};
```

You can use your decorator in the client side JSX/TSX files!

Example client sided code:

```jsx
// @myDecorator
function mySecretFunction() {
    return "Secret stuff!";
}

mySecretFunction(); // This will log out "This function has been replaced!"
```

## Hizzy.autoRefresh

This value is fetched from the config. Toggles HMR.

::: warning Warning

You shouldn't toggle this mid-process.

:::

## Hizzy.dev

This value is fetched from the config. Toggles the developer/production mode.

::: warning Warning

You shouldn't toggle this mid-process.

:::

# Hizzy.routes

This value is fetched from the main file. Readonly object.