---
title: Configuring Hizzy
---

# Configuring Hizzy

When running `hizzy` from the command line, Hizzy will automatically try to resolve a config file in the current
directory. It will try to resolve these files in order and find the first one that exists:

- /hizzy.json
- /hizzy.config.json
- /hizzy.config.ts
- /hizzy.config.js
- /hizzy.config.mts
- /hizzy.config.mjs

The most basic config file looks like this:

```js
// hizzy.config.js
export default {
    // config options
};
```

Note Hizzy supports using ES modules syntax in the config file even if the project is not using native Node ESM,
e.g. `type: "module"` in `package.json`. In this case, the config file is auto pre-processed before load.

You can also explicitly specify a config file to use with the `--config` CLI option (resolved relative to `cwd`):

```bash
hizzy --config=my-config.js
```

|         Options          |                            Description                             |     Default     |
|:------------------------:|:------------------------------------------------------------------:|:---------------:|
|          `dev`           |                    Toggles the development mode                    |      true       |
|          `port`          |            The port to listen on(negative means random)            |       -1        |
|      `fileRefresh`       |                 Whether the HMR should work or not                 |      true       |
|       `autoBuild`        |           If enabled, builds on start in production mode           |      true       |
|         `listen`         |           Whether it should automatically listen or not            |      true       |
|          `main`          |              The main file located in the src folder               |  "Server.jsx"   |
|       `mainModule`       |          Whether the main file is a modulejs file or not           |      true       |
|      `checkConfig`       |     Whether it should complete the config file(only for JSON)      |      true       |
|        `realtime`        |          Whether it should create a socket server or not           |      true       |
|         `static`         |              Check [Static Asset Handling](./assets)               | Object or Array |
|         `https`          |              Whether the connection is secure or not               |      false      |
|       `srcFolder`        |                 The folder to use for source files                 |      "src"      |
|   `connectionTimeout`    | The maximum time for a socket to connect in ms(negative means off) |      60000      |
|    `keepaliveTimeout`    | The server-sided maximum keepalive time in ms(negative means off)  |      30000      |
|    `clientKeepalive`     | The client-sided maximum keepalive time in ms(negative means off)  |      20000      |
|   `minClientKeepalive`   |    What's the minimum keepalive time in ms(negative means off)     |      8000       |
|         `addons`         |                Check [Using Addons](./using-addons)                | Object or Array |
| `includeOriginalInBuild` |            Whether the build file should have a backup             |      true       |
|         `cache`          |                     Check [Caching](./caching)                     |     Object      |

## Config Intellisense

Since Hizzy ships with TypeScript typings, you can leverage your IDE's intellisense with jsdoc type hints:

```js
/** @type {import("hizzy").UserConfig} */
export default {
    // ...
};
```

Alternatively, you can use the `Hizzy.defineConfig` helper which should provide intellisense without the need for jsdoc
annotations:

```js
export default Hizzy.defineConfig({
    // ...
});
```

Hizzy also directly supports TS config files. You can use `hizzy.config.ts` with the `defineConfig` helper as well.

## Conditional Config

If the config needs to conditionally determine options based on the mode:

```js
export default Hizzy.defineConfig(({isDev}) => {
    if (isDev) {
        return {
            // dev specific config
        };
    } else {
        return {
            // build specific config
        };
    }
});
```

## Async Config

If the config needs to call async functions, it can export an async function instead. And this async function can also
be passed through `defineConfig` for improved intellisense support:

```js
export default Hizzy.defineConfig(async ({command, mode}) => {
    const data = await asyncFunction();
    return {
        // hizzy config
    };
});
```

## Using Environment Variables in Config

Environmental Variables can be obtained from `process.env` as usual.

```js
export default Hizzy.defineConfig({
    // hizzy config
    something: process.env.thing
});
```