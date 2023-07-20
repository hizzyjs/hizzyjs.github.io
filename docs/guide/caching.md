# Caching

Caching is an integral part of the initial speed of a website.

Hizzy requests 5 type of things caches:

- Addons' client-sided codes
- Required NPM packages
- Initial Minified Preact
- Initial Minified Preact Hooks
- Static folders

You can set their cache time in the config file like this:

```json
{
  ...
  "cache": {
    "addons": 1,
    "npm": 2,
    "preact": 3,
    "preact-hooks": 4,
    "static": {
      "assets": 5
    }
  },
  ...
}
```

The numbers determine the cache time in milliseconds.